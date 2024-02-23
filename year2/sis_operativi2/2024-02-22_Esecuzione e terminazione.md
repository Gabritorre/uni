# Esecuzione e terminazione

È una situazione comunque che quando creiamo un nuovo processo con la `fork` vogliamo far eseguire un programma diverso da quello in cui avviene la creazione, la system call **exec** serve proprio a questo. 

Schematicamente possiamo rappresentare l'esecuzione di una `exec` dopo una `fork` in questo modo:

![enter image description here](https://i.ibb.co/7pmLNZ6/image.png)

Spesso la `exec` viene chiamata subito dopo la `fork`, e siccome la `exec` butta via la copia dei dati appena fatta, risulta inutile e inefficiente fare la copia.
Per ovviare a questo problema viene utilizzata la tecnica **copy-on-write**:
- viene fatta la copia solo della page table (e non dei dati/pagine effettive)
- le pagine vengono messe in modalità *read only*
- Se avviene un tentativo di scrittura da parte di uno dei due processi, viene generato un errore particolare che il kernel gestirà nel seguente modo:
	- viene fatta la copia effettiva dei dati e il processo che ha fatto la modifica adesso punterà alla copia dei dati 
	- vengono ripristinati i permessi a *read-write* su entrambe le copie

In questo modo se viene fatta una *exec* subito dopo la *fork* non avviene nessuna copia dei dati.

## Exec

Il comando `exec` presenta diverse varianti:

```c
execl("/bin/ls", arg0, arg1, ..., NULL);
execlp("ls", arg0, arg1, ..., NULL);
execv("/bin/ls", argv);
execvp("ls", argv);
```

- La presenza della `p` a fine comando rappresenta che viene utilizzata la `$PATH` di sistema per cercare il comando
- La presenza della `v` a fine comando rappresenta che il passaggio degli argomenti viene fatto tramite un array di stringhe (che in C si traduce come un puntatore a *char\**)
- La presenza della `l` (si contrappone a `v`) a fine comando rappresenta che il passaggio degli argomenti viene fatto elencando i parametri con NULL come ultimo parametro (per convenzione il primo argomento è il nome stesso del programma da eseguire)


### Errori con exec

L'`exec` restituisce un valore di ritorno solo in caso di errore (con un `-1`), cioè quando non viene trovato il comando da eseguire.
Se la `exec` va a buon fine allora perde ogni riferimento al vecchio codice ed eseguirà solamente il nuovo programma


```c
int main(){
	printf("Esecuzione di ls\n");
	execl("/bin/ls","ls","-l",NULL);

	//il seguente codice viene eseguito solo se la exec fallisce
	perror("Si è verificato un errore nell'esecuzione del codice\n");
	exit(1);
}
```

L'utilizzo di `perror` per stampare l'errore è particolarmente utile perché oltre alla stringa che gli passiamo, esso stampa anche una variabile globale che rappresenta l'errore effettivo.

Nel caso in cui passiamo un parametro errato ad un comando esistente, ciò **non ci verrà notificato con il valore di ritorno**, questo perché l'errore viene generato dal nuovo comando, e se il comando è stato eseguito allora il processo ha già perso il riferimento al vecchio programma.


## Terminazione dei processi

Vediamo il seguente codice che simula il comportamento di una shell:


```c
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
int main() {
    pid_t esito, i;
    char comando[128], *argv[128], *pch;
    while(1) {
        printf("myshell# "); // il prompt dei comandi
        // il codice che segue separa gli argomenti e
        // salva i puntatori in argv[]
        //non serve comprendere le seguenti 7 righe codice
        fgets(comando, 128, stdin);  // legge l'input dell'utente
        pch = strtok (comando," \n"); // "parsa" il primo argomento
        for (i=0; pch != NULL && i < 127; i++) {
            argv[i] = pch;
            pch = strtok (NULL, " \n"); // "parsa" gli argomenti successivi
        }
        argv[i] = NULL; // termina l'array argv con NULL
        
        if (argv[0] != 0) { // comando vuoto, ignora
            esito = fork(); // crea un processo figlio
            if (esito < 0)
                perror("fallimento fork");
            else if (esito == 0) {	//processo figlio
                execvp(argv[0], argv); // esegue il comando!
                perror("Errore esecuzione");
                exit(EXIT_FAILURE);
            }
        }
    }   // il processo genitore (shell) torna a leggere un altro comando
}
```

Se eseguiamo il codice, notiamo una anomalia, quando lanciamo un comando il prompt del comando successivo appare prima dell'output del comando lanciato.

![enter image description here](https://i.ibb.co/ZB5B01c/image.png)

questo accade perché il **processo padre** (quello che rimane in attesa dei comandi) **non attende la terminazione dei figli** (i comandi stessi), ed avendo meno codice da eseguire è più veloce dei figli.

Un ulteriore problema è il fatto che una volta che i processi figli terminano, questi diventano 
*zombie* (lo notiamo dalla dicitura "defunct" eseguendo il comando `ps`)

![enter image description here](https://i.ibb.co/9yGXgdF/image.png)


Capiamo il perché di questi problemi:
quando un processo termina, esso segnala al genitore la propria terminazione con alcune informazioni che gli possono essere utili. Finché il padre non processa queste informazioni, esse rimangono in memoria in attesa che il padre le processi.

Alcune di queste informazioni che rimangono in memoria sono:
- PID
- lo stato di terminazione
- il tempo di CPU utilizzato dal processo

Possiamo risolvere questi problemi utilizzando due chiamate a sistema:

- `exit(int status)` usata per **terminare il processo, restituendo il proprio stato** di terminazione al padre. N
	Normalmente si ritorna `1` oppure la costante `EXIT_FAILURE` per ritornare una terminazione fallimentare, mentre si ritorna `0` oppure la costante `EXIT_SUCCESS` per ritornare una terminazione con successo
- `pid = wait(int &status)` usata per **attendere la terminazione del figlio**. La funzione ritorna il pid del figlio, e nella  variabile `status` viene salvato lo stato di terminazione del figlio.
	Se non ci sono figli ritorna `-1`
	è possibile attendere un processo in particolare specificando il suo pid: `pid = waitpid(pid_value, &stato)`


## Gestire lo stato di ritorno

Per gestire lo stato di ritorno di un processo figlio, vengono utilizzate delle macro. 
Le due principali macro sono `WIFEXITED` e `WIFSIGNALED`:

- `WIFEXITED(status) == true` se il figlio è uscito con una `exit`, in tal caso la macro ritorna il valore della variabile `status` messa all'interno della `exit`
- `WIFSIGNALED(status) == true` se il figlio è stato terminato in modo anomalo, in tal caso la macro ritorna un valore corrispondente al "segnale" che ha causato l'arresto anomalo


Per sistema il codice della simulazione della shell basta aggiungere il seguente codice alla fine del ciclo while:

```c
pid=wait(&status); // attende il processo figlio

// esamina lo stato di uscita
if (WIFEXITED(status))
	printf("Exit status = %d\n", WEXITSTATUS(status));
else if (WIFSIGNALED(status))
	printf("ANOMALO: status = %d\n", WTERMSIG(status));
```

## Esempio con exit e wait

```c
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/wait.h>
int main() {
    int pid, status;
    pid = fork();
    if ( pid < 0 ) { perror("errore fork"); exit(EXIT_FAILURE); }

    /* figlio 1: esce normalmente inviando al genitore lo stato "42" */
    if (pid == 0) {
        printf("Sono il figlio1! pid=%d ppid=%d\n", getpid(), getppid());
        sleep(3);
        exit(42);
    }
    pid = fork();
    if ( pid < 0 ) { perror("errore fork"); exit(EXIT_FAILURE); }

    /* figlio 2: segfault, cerca di accedere alla locazione 0 */
    if (pid == 0) {
        int *tmp = 0;
        int a;
        printf("Sono il figlio2! pid=%d ppid=%d\n", getpid(), getppid());
        sleep(5);
        a = *tmp;	// segfault
    } 

    /* il genitore continua e attende tutti i figli ... */
    while((pid = wait(&status)) >= 0) {
        printf("ricevuta terminazione di pid=%d\n", pid);
        if (WIFEXITED(status))
            printf("OK: status = %d\n", WEXITSTATUS(status));
        else if (WIFSIGNALED(status))
            printf("ANOMALO: status = %d\n", WTERMSIG(status));
    }
}
```


l'output è simile al seguente:

```bash
Sono il figlio1! pid=304 ppid=303
Sono il figlio2! pid=305 ppid=303
ricevuta terminazione di pid=304
OK: status = 42
ricevuta terminazione di pid=305
ANOMALO: status = 11
```
