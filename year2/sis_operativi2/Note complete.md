# Comunicazione tra processi e thread

Nel sistema operativo girano molti processi e tra di loro ci possono essere casi di **competizione e cooperazione**

## Competizione

**La competizione** si ha quando più processi vogliono la stessa risorsa (sia hardware che software).
Queste competizioni posso creare delle interferenze con il normale funzionamento del sistema come cali di prestazioni e nei casi più estremi il crash del sistema.

Il sistema operativo deve gestire le competizioni al fine di rendere il sistema più fluido possibile all'utente e allo stesso tempo deve illudere i processi di avere tutto il sistema disponibile per loro.

## Cooperazione

In altri casi abbiamo la cooperazione tra processi, cioè processi che contribuiscono e comunicano tra loro per raggiungere un obiettivo in comunque.

In questo caso abbiamo dei vantaggi quali:
- **condivisione**: i processo comunicano, si sincronizzano e si scambiano informazioni
- **parallelismo**: sfruttare un sistema multi-core per eseguire in parallelo un programma
- **modularità**: suddividere un compito complesso in attività più semplici che verranno eseguite da processi diversi
- **multitasking**: può risultare comodo eseguire un’attività mentre un'altra continua in background.
- **replicazione**: quando è necessaria l'esecuzione simultanea su istanze diverse, è possibile replicare l'istanza su più processi

## Modelli di comunicazione

Vediamo i due modelli principali per la comunicazione tra processi:

- **message passing** i processi comunicano scambiandosi direttamente dei messaggi (tecnica utilizzata dai processi)
- **shared memory** i processi possiedono una memoria condivisa a cui accedono in lettura e scrittura (tecnica utilizzata dai thread).

Inizialmente ci occuperemo della comunicazione con scambio di messaggi.

## Scambio dei messaggi

I processi dispongono di due operazioni principali:

- `send(messaggio)`
- `receive(&messaggio)`

esse vengono realizzate tramite delle *system call* al sistema operativo dette **IPC** (InterProcess Communication)

Il mittente e il destinatario del messaggio possono essere indicati direttamente o indirettamente:

### Nominazione diretta

Il mittente e il destinatario sono indicati esplicitamente:

- `send(destinatario, messaggio)`
- `receive(mittente, &message)`

il **vantaggio** di questa comunicazione è la *semplicità*

Lo **svantaggio** sta nel fatto che è necessario un accordo tra i processi per potersi identificare, e questo accordo non è facile da implementare.

### Nominazione indiretta

In questa tecnica vengono utilizzate delle **porte**, cioè delle memorie temporanee che contengono i messaggi. I processi che puntano alla stessa porta la possono utilizzare per comunicare tra loro.

- `send(porta, messaggio)`
- `receive(porta, &message)`

In Unix le **pipe** utilizzano questa implementazione

## Comunicazione sincrona e asincrona

Le operazioni di invio e ricezione possono essere di tipo sincrono o asincrono:

- **send sincrona**: la *send* attende fino a quando non avviene una *receive* dal destinatario
- **send asincrona**: la *send* non attende che avvenga una *receive*
- **receive sincrona**: la *receive* attende attivamente l'arrivo di messaggi
- **receive asicrona**: la *receive* controlla ad intervalli regolari la presenza di nuovi messaggi (ritornando NULL se non ce ne sono di nuovi)

## Produttore-consumatore

La tecnica di scambio di messaggi è utile nella situazione in cui un programma "produce" un dato e un altro programma "consuma" il dato.

Vediamo degli esempi con la shell di linux:
```bash
ls -la | grep <stringa>
```

Il precedente comando utilizza due programmi (`ls` e `grep`) e utilizza una *pipe* per far comunicare i due processi. In questo particolare esempio abbiamo una **comunicazione con nominazione indiretta con send asincrona e receive sincrona**.

La *pipe* viene creata dal processo padre prima di avviare i due processi, in modo che possa essere referenziata da entrambi i processi durante la loro creazione.
Il processo che esegue `ls -la` genera un output che mette nel buffer della *pipe*, successivamente il processo che esegue `grep <stringa>` legge il dato e genera un nuovo output.

Per mostrare visivamente che la send è asincrona modifichiamo il comando nel seguente modo:

```bash
(ls -al; echo "DONE ls"  1>&2) | (sleep 10; grep <stringa>)
```

Descrizione: subito dopo l'esecuzione di `ls` viene fatta una stampa "DONE ls" che viene deviata sullo *standard error* con la sintassi `1>&2` perché vogliamo stamparla e non darla in pasto a `grep`.
Contemporaneamente nel blocco destro di istruzioni avviene uno sleep di 10 secondi e poi viene fatta la `grep`.
Il comportamento che otteniamo eseguendo il comando è quello della stampa immediata di "DONE ls", una attesa di 10 secondi e poi l'output della grep.
Questo significa che il comando `ls` non ha atteso che la `grep` ricevesse il messaggio (questo lo intuiamo perché viene eseguita la stampa di `DONE ls` immediatamente), concludiamo quindi che il comando `ls` fa una send asincrona.

La pipe, di default, rende la **ricezione sincrona**: il processo ricevente attende attivamente la presenza di messaggi in arrivo.

ad esempio, la seguente riga:

```bash
(sleep 2;ls -al) | (echo "START"; grep parola; echo "DONE")
```


dobbiamo immaginare che i due blocchi di istruzioni vengono eseguiti contemporaneamente, e quando il blocco di destra necessità di un input si interrompe la sua esecuzione e rimane in attesa.

Infatti quello che accade è:
 la stampa immediata di "START" $\to$ la `grep` rimane in attesa di un input $\to$ attesa di 2 secondi $\to$ esecuzione della `ls` che scrive nel buffer il dato $\to$ la `grep` viene eseguita $\to$ l'esecuzione può proseguire e viene stampato "DONE"

# Creazione di processi

Quando si crea un nuovo processo il sistema operativo di occupa di:

- Creare un nuovo PID
- Allocare la memoria richiesta dal processo
- Allocare altre risorse (come dispositivi di IO)
- Decidere le varie informazioni del processo che saranno contenute nel PCB
- Creare il PCB (*Process Control Block*)

## Processi in Unix

Vediamo la fase di creazione di un processo in un sistema Unix:

Un processo viene sempre creato da un altro processo, tramite una chiamata a sistema.

Il processo creante viene detto **parent** (genitore oppure padre), mentre il processo creato viene detto **child** (figlio).
Le varie creazioni di processi creano una **struttura ad albero** che rappresenta le relazioni di parentela tra i processi.

### Relazioni dinamiche

- La relazione di default tra padre e figlio è quella in cui il **padre attende l'esecuzione del figlio**, ad esempio eseguendo il seguente comando da shell

		$ sleep 5

	il processo padre è il processo `bash` che gestire i vari comandi che gli diamo. Quando lanciamo `sleep 5` viene creato un processo figlio che esegue il programma `sleep` (che semplicemente aspetta per una data quantità di secondi).
Durante l'attesa noi non possiamo lanciare altri comandi, questo perché il processo padre (bash) sta attendendo la terminazione del figlio

- Un altro tipo di relazione è quella dell'esecuzione in *background*, quindi dopo la creazione del processo, **padre e figlio continuano la loro normale esecuzione parallelamente**, ad esempio eseguendo il seguente comando da shell

		$ sleep 5 &

	Come prima il processo padre (`bash`) crea il processo `sleep` me lo esegue in *background* quindi anche durante l'esecuzione della `sleep` possiamo comunque interagire con il terminale.
Mentre la `sleep` è in esecuzione possiamo lanciare il comando `ps` che ci mostra i processi attualmente attivi nella specifica istanza di quel terminale. Si dovrebbe ottenere un output di questo tipo

	```bash
	PID TTY          TIME CMD
	14695 pts/1    00:00:00 bash
	17589 pts/1    00:00:00 sleep
	17590 pts/1    00:00:00 ps
	```

	Una volta che il processo `sleep` termina, viene notificata la terminazione al padre tramite un messaggio di questo tipo:

		[1]+  Done                    sleep 5

	Possiamo vedere meglio la relazione di parentela tra questi processi modificando il comando `ps` con il seguenti parametri 
	- `pid`: id del processo
	- `ppid`: id del processo padre
	- `comm`: nome del comando
	
	Ad esempio: 
		
		ps -o pid,ppid,comm
		
	Ci restituirà un output di questo tipo (nota come sia `ps`  che `sleep` sono figli di `bash`)

	```
	PID  PPID COMMAND
	 11    10 bash
	 23    11 sleep
	 24    11 ps
	```
### Relazioni di contenuto

Due possibilità:

-   Il figlio è un duplicato del genitore (ad esempio in UNIX)
-   Il figlio esegue un programma differente (ad esempio nei sistemi Windows)

Questo è il comportamento standard ma ovviamente è possibile anche l’altra modalità in entrambi i sistemi.

## La system call "fork"

`fork` è una chiamata a sistema nel sistema Unix che appartiene allo standard POSIX e che si occupa di creare un nuovo processo.

Dopo una chiamata a `fork` il processo figlio:
- **condivide l'area del codice** del processo padre
- utilizza una **copia dell'area dei dati del padre**

![enter image description here](https://i.ibb.co/cCP57w2/image.png)

Dato che padre e figlio lavorano sullo stesso codice, si può riconoscere padre e figlio in base al valore di ritorno della funzione `fork`:
- se ritorna 0 allora si tratta del processo figlio
- se ritorna un valore maggiore di 0 allora si tratta del processo padre

Ad esempio (fatto in C)

```c
#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>

int main(){
	pid_t pid = fork();
	if ( pid < 0 ) {
	  perror("fork error"); // stampa la descrizione dell'errore
	}
	else if (pid == 0) {
	  // codice figlio
	}
	else { //(pid > 0)
	  // codice genitore
	}  
	// codice del genitore e del figlio: da usare con cautela!
}
```

Nota 1: il tipo di dato `pid_t` è un intero la cui dimensione varia in base al sistema.
Nota 2: usando la combinazione `Ctrl + c` durante l'esecuzione del programma si invia un segnale di terminazione al processo.
Nota 3: se siamo sul padre il valore di ritorno della fork ci da il pid del figlio

Nel codice possiamo utilizzare le funzioni:
- `getpid()` per ottenere il pid del processo stesso
- `getppid()` per ottenere il pid del processo padre

Come si vedeva nel codice, quando il valore di ritorno della `fork` è negativo significa che la creazione del processo è fallita, questo solitamente accade quando non c'è sufficiente memoria per allocare il processo.

Un esempio per rappresentare la struttura ad albero è il seguente codice:

```c
#include <unistd.h>
#include <stdio.h>

int main() {
  pid_t f1,f2,f3;
  
  f1=fork();
  f2=fork();
  f3=fork();

  printf("%i%i%i ", (f1 > 0),(f2 > 0),(f3 > 0)); 
}
```

Vengono eseguite 3 fork da ogni processo che creiamo (non facciamo il controllo sul valore di ritorno per separare codice figlio dal codice padre).
- il primo fork verrà eseguito dal primo processo, dopo la sua esecuzione si avranno 2 processi
- il secondo fork verrà eseguito dai 2 processi, dopo la sua esecuzione si avranno 4 processi
- il terzo fork verrà eseguito dai 4 processi, dopo la sua esecuzione si avranno 8 processi

Ci aspettiamo quindi 8 stampe a schermo, che rappresentano tutte le permutazioni di 3 bit, dove `111` sarà il processo di partenza.

L'output sarà di questo tipo

`000 001 100 101 010 011 110 111`

l'ordine di apparizione dipende dallo scheduling, e quando termina il processo `111` (cioè il primo processo) la shell è pronta per accettare altri comandi (anche se i figli devono ancora finire)

![enter image description here](https://i.ibb.co/CzKHc43/image.png)

## Processi orfani e zombie

In base alla versione del sistema Unix possiamo avere diversi processi che gestiscono l'avvio e l'esecuzione dell'intero sistema. Nelle prime versioni di Unix si usava **SysVinit**, poi si è passati a **Upstart**, ora nei sistemi più recenti viene usato **Systemd**.

I sistemi che utilizzano SysVinit e Upstart si riferiscono al processo che inizializza il sistema come **init** mentre i sistemi che utilizzano Systemd si riferiscono a tale processo come **systemd**.

Quando il processo padre termina prima del figlio, allora il figlio viene definito **orfano**. I processi orfani vengono adottati da *init* oppure da *systemd* (in base al sistema).
Un processo orfano non viene più terminato dalla combinazione `Ctrl + c`

I processi **Zombie** sono processi terminati ma in attesa che il genitore rilevi la loro terminazione e quindi che il padre riceveva il suo valore di uscita. 
I processi zombie possiedono ancora un PID e il PCB mentre sono in questo stato.

# Esecuzione e terminazione

È una situazione comune che quando creiamo un nuovo processo con la `fork` vogliamo far eseguire un programma diverso da quello in cui avviene la creazione, la system call **exec** serve proprio a questo. 

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

## exec

Il comando `exec` presenta diverse varianti:

```c
execl("/bin/ls", arg0, arg1, ..., NULL);
execlp("ls", arg0, arg1, ..., NULL);
execv("/bin/ls", argv);
execvp("ls", argv);
```

- La presenza della `p` a fine comando rappresenta che viene utilizzata la `$PATH` di sistema per cercare il comando
- La presenza della `v` a fine comando rappresenta che il passaggio degli argomenti viene fatto tramite un array di stringhe (che in C si traduce come un puntatore a *char\**)
- La presenza della `l` (si contrappone a `v`) a fine comando rappresenta che il passaggio degli argomenti viene fatto elencando i parametri, con NULL come ultimo parametro (per convenzione il primo argomento è il nome stesso del programma da eseguire)

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
        printf("myshell# ");
        
        // il codice che segue separa gli argomenti e salva i puntatori in argv[]
        // non serve comprendere le seguenti 7 righe codice
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
                execvp(argv[0], argv); // esegue il comando
                perror("Errore esecuzione");
                exit(EXIT_FAILURE);
            }
        }
    }   // il processo genitore (shell) torna a leggere un altro comando
}
```

Se eseguiamo il codice, notiamo una anomalia, quando lanciamo un comando il prompt del comando successivo appare prima dell'output del comando lanciato:

![enter image description here](https://i.ibb.co/ZB5B01c/image.png)

Questo accade perché il **processo padre** (quello che rimane in attesa dei comandi) **non attende la terminazione dei figli** (i comandi stessi), ed avendo meno codice da eseguire è più veloce dei figli.

Un ulteriore problema è il fatto che una volta che i processi figli terminano, questi diventano 
*zombie* (lo notiamo dalla dicitura "defunct" eseguendo il comando `ps`)

![enter image description here](https://i.ibb.co/9yGXgdF/image.png)

Capiamo la motivazione di questo problema:
Quando un processo termina, esso segnala al genitore la propria terminazione con alcune informazioni che gli possono essere utili. Finché il padre non processa queste informazioni, esse rimangono in memoria in attesa che il padre le processi.

Alcune di queste informazioni che rimangono in memoria sono:
- PID
- lo stato di terminazione
- il tempo di CPU utilizzato dal processo

Possiamo risolvere questi problemi utilizzando due chiamate a sistema:

- `exit(int status)` usata per terminare il processo, **restituendo il proprio stato di terminazione** al padre. 
	Normalmente si ritorna `1` oppure la costante `EXIT_FAILURE` per ritornare una terminazione fallimentare, altrimenti si ritorna `0` oppure la costante `EXIT_SUCCESS` per ritornare una terminazione con successo
- `pid = wait(int &status)` usata per **attendere la terminazione del figlio**. La funzione ritorna il pid del figlio, e nella  variabile `status` viene salvato lo stato di terminazione del figlio.
	Se non ci sono figli ritorna `-1`.
	È possibile attendere un processo in particolare specificando il suo pid: `pid = waitpid(pid_value, &stato)`

## Gestire lo stato di ritorno

Per gestire lo stato di ritorno di un processo figlio, vengono utilizzate delle macro. 
Le due principali macro sono `WIFEXITED` e `WIFSIGNALED`:

- `WIFEXITED(status) == true` se il figlio è uscito con una `exit`, in tal caso un'altra macro `WEXITSTATUS(status)` ritorna il valore della variabile `status` messa all'interno della `exit`.
- `WIFSIGNALED(status) == true` se il figlio è stato terminato in modo anomalo, in tal caso un'altra macro `WTERMSIG(status)` ritorna un valore corrispondente al "segnale" che ha causato l'arresto anomalo

Per sistemare il codice della simulazione della shell basta aggiungere il seguente codice appena prima della fine del ciclo while:

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

# Segnali

I **segnali** sono una forma di **comunicazione tra processi** realizzati tramite interruzioni software causate da vari eventi.
Gli eventi generalmente sono:
- Generati dal terminale (ad esempio `Ctrl + c`)
- Generati da errori di esecuzione (divisione per 0)
- Segnali inviati da un altro processo
- Eventi asincroni notificati al processo

Le operazioni che possono essere fatte quando un processo riceve un segnale sono:

- Ignorarlo
- Gestirlo
- Lasciare che il sistema operativo lo gestisca

Vediamo alcune dei segnali supportati in Linux (lista consultabile eseguendo `man 7 signal`)
![enter image description here](https://i.ibb.co/Lt6Sp4z/image.png)

Descriviamo brevemente alcuni dei segnali:

-   `SIGHUP` viene inviato a un processo quando il terminale a cui è associato viene chiuso
-   `SIGINT` viene inviato a un processo digitando  `Ctrl-c`  per interromperlo
-   `SIGQUIT` viene inviato per far terminare un processo tramite la sequenza  `ctrl-\`
-   `SIGILL`,  `SIGABRT`,  `SIGFPE`  e  `SIGSEGV` corrispondono ad azioni del processo stesso: istruzione illegale, invocazione di  `abort`, errore aritmetico, riferimento a memoria illegale
-   `SIGKILL`,  `SIGTERM` sono esempi di segnale inviati da un processo a un altro, che vengono utilizzati per terminare un processo. Questi segnali si possono inviare dalla shell tramite i comando  `kill -9 pid`  oppure  `kill pid`. Si noti che  `SIGKILL` termina sempre il processo che riceve il segnale mentre  `SIGTERM`  può essere gestito o ignorato dal processo
-   `SIGPIPE` viene inviato a un processo che prova a scrivere su una pipe che non ha lettori
-   `SIGALRM` è un timer che “sveglia” un processo, simile al timer usato dallo scheduler per implementare il time-sharing
-   `SIGCHLD` viene inviato a un processo quando un suo processo figlio termina (il segnale viene utilizzato per svegliare un processo che ha invocato la  `wait`, altrimenti viene ignorato)

Nella tabella precedente è presente una colonna `Action` che rappresenta l'azione di default per ogni segnale:

- `Term`: termina il processo
- `Ign`: viene ignorato
- `Core`: termina il processo e genera un *dump* della memoria del processo (come succede con il *segmentation fault*)
- `Stop`: ferma il processo
- `Cont`: fa continuare un processo che è stato fermato in precedenza

## Esempio di utilizzo di un segnale

L'esempio più semplice di segnale è `SIGALRM` che viene generato tramite la funzione `alarm(unsigned int)` la quale prende in input la quantità di secondi prima di lanciare il segnale `SIGALRM`. Quando questo segnale viene ricevuto, il processo viene terminato (come comportamento di default). 
Equivale a tutti gli effetti a impostare una sveglia che termina il processo quando scade il suo tempo.

```c
#include <unistd.h>
int main()
{
    alarm(3);//dopo 3 secondi il processo viene terminato
    while(1){}	
}
```

Nota che questo è un evento **asincrono**: mentre il timer scorre il nostro codice prosegue la sua normale esecuzione.
Nota anche che dopo la terminazione viene stampato `Alarm clock` sul terminale in quanto la shell è in grado di interpretare il valore di ritorno del processo (si può vedere tale valore eseguendo `echo $?` dopo la terminazione del programma)

## Syscall "signal"

Tramite la *System call* **signal** è possibile modificare la gestione di default di un segnale, prende come input il segnale e il nome della nuova funzione che verrà utilizzata quando tale segnale si presenta.

```c
#include <stdio.h>
#include <signal.h>
#include <unistd.h>

void alarmHandler()
{
    printf("questo me lo gestisco io!\n");
    alarm(3); // ri-setta il timer a 3 secondi e riprende l'esecuzione dal punto
			  //in cui si era interrotto (il ciclo while in questo caso)
}

int main() { 
    signal(SIGALRM, alarmHandler);
    alarm(3);
    while(1){}
}
```

Al posto di una funzione in particolare è possibile passare alla funzione `signal` anche costanti come `SIG_IGN` per dire che il segnale va semplicemente ignorato, oppure `SIG_DFL` per dire di utilizzare il comportamento di default.

Il **valore di ritorno** di `signal` è:

- `SIG_ERR`, in caso di errore
- il gestore precedente, in caso di successo (utile se vogliamo ripristinare il comportamento successivamente)

Vediamo un esempio:

```c
#include <signal.h>
#include <stdio.h>
#include <unistd.h>
int main() {
    void (*old)(int);	//firma di una funzione che prende un intero e restituisce void
        
    old = signal(SIGINT,SIG_IGN);	//ignora il segnale SIGINT (cioè il ctrl + c)
    printf("Sono protetto!\n");
    sleep(3);
        
    signal(SIGINT,old);		//ripristina il comportamento precedente 
    printf("Non sono più protetto!\n");
    sleep(3);
}
```

Il comportamento che otteniamo è che per i primi 3 secondi fare `ctrl + c` non avrà effetto, mentre nei 3 secondi successivi torna normale.

## Syscall "kill"

Sebbene il nome si un po' fuorviante, la *system call* **kill** si occupa solamente di **mandare un qualsiasi segnale ad un processo (specificandone il pid)** (il nome è rimasto "kill" per ragioni storiche).
Ad esempio possiamo usarlo per sospendere, ripristinare o terminare un processo

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <signal.h>
int main(){
        pid_t pid1, pid2;
        pid1 = fork();
        if (pid1 < 0) {
                perror("errore fork"); exit(EXIT_FAILURE);
        }
        else if (pid1 == 0)
                while(1) { // primo figlio
                        printf("%d è vivo !\n",getpid());
                        sleep(1);
                }
        pid2 = fork();
        if (pid2 < 0) {
                perror("errore fork"); exit(EXIT_FAILURE);
        }
        else if (pid2 == 0)
                while(1) { // secondo figlio
                        printf("%d è vivo !\n",getpid());
                        sleep(1);
                }
        // processo genitore
        sleep(2);
        kill(pid1,SIGSTOP); // sospende il primo figlio
        sleep(5);
        kill(pid1,SIGCONT); // risveglia il primo figlio
        sleep(2);
        kill(pid1,SIGINT); // termina il primo figlio
        kill(pid2,SIGINT); // termina il secondo figlio       
}
```

## Mascherare i segnali

**Mascherare i segnali significa posticiparli momentaneamente**.
Questo può essere utile se il programma sta facendo delle operazioni importanti come lunghe scritture su disco, o operazioni su strutture dati e non si vuole che dei segnali interferiscano con tali operazioni. Si mascherano quindi i segnali fino al termine delle operazioni critiche e successivamente i segnali posticipati vengono notificati al processo.	

Solitamente quanto più segnali uguali vengono posticipati solamente 1 ne viene recapitato una volta sbloccati i segnali.

Il mascheramento dei segnali viene fatto attraverso degli **insiemi di segnali**, possiamo fare svariate operazioni su tali insiemi

### Creare un insieme

`sigemptyset(sigset_t *set)`

inizializza l'insieme vuoto `set`

### Aggiunta di elementi

`sigaddset(sigset_t *set, int signum)`

Aggiunge il segnale `signum` all'insieme `set`

### Rimozione di elementi

`sigdelset(sigset_t *set, int signum)`

Rimuove il segnale `signum` dall'insieme `set`

### Mascheramento

Tramite la *system call* `sigprocmask(int action, sigset_t *newmask, sigset_t *oldmask)` possiamo gestire il mascheramento, che avviane in base al valore passato al parametro `action`:

-  `SIG_BLOCK`: l’insieme dei segnali  `newmask`  viene  **unito**  all’insieme dei segnali attualmente mascherati, che sono restituiti in  `oldmask`;
-   `SIG_UNBLOCK`: l’insieme dei segnali  `newmask`  viene  **sottratto**  dai segnali attualmente mascherati, sempre restituiti in  `oldmask`;
-   `SIG_SETMASK`: l’insieme dei segnali  `newmask`  **sostituisce**  quello dei segnali attualmente mascherati (`oldmask`).


Vediamo un esempio in cui mascheriamo il segnale `SIGINT`

```c
#include <stdio.h>
#include <signal.h>
#include <unistd.h>
#include <stdlib.h>
int main() {
        sigset_t newmask, oldmask;

        sigemptyset(&newmask);          // insieme vuoto
        sigaddset(&newmask, SIGINT);    // aggiunge SIGINT alla "maschera"
        // setta la nuova maschera e memorizza la vecchia
        if (sigprocmask(SIG_BLOCK, &newmask, &oldmask) < 0) {
                perror("errore settaggio maschera");
                exit(1);
		}

        printf("Sono protetto!\n");
        sleep(3);

        // reimposta la vecchia maschera
        if (sigprocmask(SIG_SETMASK, &oldmask, NULL) < 0) {
                perror("errore settaggio maschera");
                exit(1);
        }

        printf("Non sono piu' protetto!\n");
        sleep(3);
}
```

Quello che otteniamo è che nei primi 3 secondi i `ctrl + c` vengono posticipati, appena scadono i 3 secondi, l'eventuale `ctrl + c` precedentemente mandato, viene subito notificato il processo il quale terminerà la sua esecuzione.

Tramite `sigpending` è possibile vedere i segnali che attualmente sono in attesa di essere notificati al processo.

# Pipe

Le pipe sono un canale di comunicazione tra i processi, in altre parole la pipe è un buffer (cioè una zona di memoria) in cui un processo scrive dei dati e un altro processo legge i dati.

Questo meccanismo utilizza una **scrittura asincrona** e una **lettura sincrona** (quindi chi scrive non attende una risposta dall'altro processo. Mentre chi legge rimane in attesa che i dati arrivino)

Esistono due tipi di pipe in UNIX: **senza nome** e **con nome**

## Pipe senza nome

Queste pipe vengono utilizzate da processi che hanno genitori in comune, questo perché le risorse vengono ereditati dai genitori.

Un classico esempio di questo tipo di pipe è l'uso del simbolo `|` per collegare due programmi da shell

	$ ls -la | grep 20

In codice invece possiamo usare la *system call* `pipe(int file_descriptor[2])`.
La funzione `pipe` prende in input un vettore di interi grande 2, in tale vettore la funzione scriverà dei valori numerici chiamati descrittori, tali che:

- `file_descriptor[0]` usato per la lettura
- `file_descriptor[1]` usato per la scrittura

```c
#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main() {
  int fd[2];
 
  pipe(fd); /* crea la pipe */
  if (fork() == 0) {	//figlio
    char *phrase = "prova a inviare questo!";
 
    close(fd[0]);                         /* chiude in lettura */
    write(fd[1], phrase, strlen(phrase)+1); /* invia anche 0x00 (terminatore della stringa) */
    close(fd[1]);                         /* chiude in scrittura */
  }
  else {	//padre
    char message[100];		//alloco spazio per contenere il messaggio letto dalla pipe
    memset(message, 0, 100);	//è importante azzerare la memoria allocata quando si legge dai buffer
    int bytesread;
 
    close(fd[1]);                         /* chiude in scrittura */
    bytesread = read(fd[0], message, 99);		//l'ultimo parametro indica il limite massimo di byte da leggere
    printf("ho letto dalla pipe %d bytes: '%s' \n", bytesread, message);
    close(fd[0]);                         /* chiude in lettura */
  }
}
```

**Osservazioni**:
- Il programma crea due processi collegati da una pipe, un processo (il figlio) scrive dei dati e il padre li legge
- La pipe viene creata prima della fork, ciò significa che il **padre e il figlio avranno una copia ciascuno dell'array** `fd`
- Un processo dovrebbe sempre **scrivere oppure leggere ma mai fare entrambe le cose** con la stessa pipe (se necessaria una comunicazione bidirezionale si possono usare pipe distinte per scrittura e lettura).
Se un processo leggesse e scrivesse utilizzando la stessa pipe rischierebbe di leggere ciò che lui stesso ha scritto
- Per il punto precedente è quindi raccomandato **chiudere immediatamente il file descriptor che non si utilizza** (infatti il figlio chiude immediatamente la lettura e il padre chiude immediatamente la scrittura)
- Nel figlio chiudere la scrittura dopo aver terminato di scrivere è importante in quanto viene avvisto il lettore che non c'è più niente da leggere

### Importanza della chiusura dei descrittori

Il sistema operativo tiene traccia di chi può scrivere o leggere nelle pipe, chiudendo la scrittura e la lettura della pipe mantiene aggiornato il sistema operativo su cosa può fare ancora il nostro processo:

- Cosa accade se si fa una `read` da una pipe vuota in cui la scrittura è stata chiusa?

	Normalmente se ci sono scrittori allora la `read` rimarrebbe in attesa. Ma dal momento che i processi che condividevano la pipe hanno chiuso la scrittura (nessuno può più scrivere) allora la `read` termina l'attesa e ritorna `0`.
Se gli scrittori si dimenticassero di chiudere la pipe in scrittura allora il lettore rimarrebbe in attesa fino a che i processi scrittori terminano la loro esecuzione (causando un errore al lettore)

- Cosa accade se si fa una `write` su una pipe che è stata chiusa in lettura?

	Viene generato un segnale `SIGPIPE` che di default termina il processo. Questo accade in quanto non ha senso scrive nel buffer se nessun altro processo può leggere i dati.

**È quindi molto importante chiudere le risorse in lettura e scrittura quando possibile**

### Simulazione della pipe da shell

Cerchiamo di simulare, attraverso un programma, il comportamento della pipe realizzata da shell.

Innanzitutto è importante capire che i descrittori di file in Unix sono dei numeri, e sono presenti 3 descrittori di base:
- 0: *standard input*
- 1: *standard output*
- 2: *standard error*

Quando viene chiamata la *system call* `pipe` vengono selezionati numeri incrementali a partire da 3.
Sapendo questo vediamo come simulare il seguente comando da shell

	$ prog1 | prog2

```c
#include <stdio.h>
#include <unistd.h>

int main(int argc, char * argv[]) {
  int fd[2];
  pipe(fd);
  
  if (fork() == 0)  {
    close(fd[0]);       /* chiude in lettura */
    dup2(fd[1], 1);      /* fa si che 1 (stdout) sia una copia di fd[1] */
                        /* da qui in poi l'output va sulla pipe */
    close(fd[1]);       /* chiude il descrittore fd[1] */
    execlp(argv[1], argv[1], NULL);   /* esegue il comando */
    perror("errore esecuzione primo comando");
  }
  else {
    close(fd[1]);       /* chiude in scrittura */
    dup2(fd[0], 0);      /* fa si che 0 (stdin) sia una copia di fd[0] */
                        /* da qui in poi l'input proviene dalla pipe */
    close(fd[0]);       /* chiude il descrittore fd[0] */
    execlp(argv[2], argv[2], NULL);   /* esegue il comando */
    perror("errore esecuzione secondo comando");
  }
}
```

Possiamo eseguirlo facendo

	$ ./simula_pipe whoami wc
notando come viene generato lo stesso output di 

	$ whoami | wc

## Pipe con nome

Con questo altro metodo le pipe sono dei file presenti nel *file system* e quindi ogni processo ha il diritto di accesso alla pipe indipendentemente dai genitori.

Possiamo creare una pipe tramite il comando

	$ mkfifo myPipe

## Esempio lettore e scrittore

Consideriamo un processo *lettore* (destinatario) che accetta, su una pipe con nome, messaggi provenienti da più *scrittori* (mittenti). Gli scrittori mandano 3 messaggi e poi terminano. Quando tutti gli scrittori chiudono la pipe il lettore ottiene 0 come valore di ritorno dalla `read` ed esce.
Lettori e scrittori sono processi distinti lanciati indipendentemente (non necessariamente parenti).

**Codice del lettore**

```c
#include <stdio.h>
#include <sys/types.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/stat.h>
#include <stdlib.h>

#define PNAME "/tmp/aPipe"

int main() {
    int fd;
    char leggi;
    
    mkfifo(PNAME, 0666); // crea la pipe con nome, se esiste già non fa nulla

    fd = open(PNAME, O_RDONLY); // apre la pipe in sola lettura
    if (fd < 0) { 
        perror("errore apertura pipe"); 
        exit(1);
    }
    
    while (read(fd, &leggi, 1)) { // legge un carattere alla volta fino a EOF
        if (leggi == '\0'){
            printf("\n"); // a capo dopo ogni stringa
        } else {
            printf("%c",leggi);
        }
    }

    close(fd);          // chiude il descrittore
    unlink(PNAME);      // rimuove la pipe

    return 0;
}
```

**Codice dello scrittore**

```c
#include <stdio.h>
#include <sys/types.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/stat.h>
#include <string.h>
#include <stdlib.h>

#define PNAME "/tmp/aPipe"

int main() {
    int fd, i, lunghezza;
    char *message;
    mkfifo(PNAME, 0666); // crea la pipe con nome, se esiste gia' non fa nulla
					     // il secondo parametro sono i permessi del file /tmp/aPipe
    
    // crea la stringa
    lunghezza = snprintf(NULL, 0, "Saluti dal processo %d", getpid());
    message = malloc(lunghezza + 1);
    snprintf(message, lunghezza + 1, "Saluti dal processo %d" ,getpid()); 
    
    fd = open(PNAME, O_WRONLY); // apre la pipe in sola scrittura
    if (fd < 0) {    
        perror("errore apertura pipe");
        exit(1);
    }
    for (i = 1; i <= 3; i++){     // scrive tre volte la stringa
        write(fd, message, strlen(message)+1); // +1 perche include terminatore di stringa
        sleep(2);
    }
    close(fd);    // chiude il descrittore
    free(message);
    return 0;
}
```

Eseguiamo per esempio:

	$ ./lettore & ./scrittore & ./scrittore & ./scrittore

e otteniamo un output simile al seguente:
```bash
[1] 46998
[2] 46999
[3] 47000
Saluti dal processo 47000
Saluti dal processo 46999
Saluti dal processo 47001
						/*pausa di 2 secondi*/
Saluti dal processo 47000
Saluti dal processo 47001
Saluti dal processo 46999
						/*pausa di 2 secondi*/
Saluti dal processo 47000
Saluti dal processo 46999
Saluti dal processo 47001
[1]   Done                    ./lettore
[2]-  Exit 255                ./scrittore
[3]+  Exit 255                ./scrittore
```

le varie `write` vengono **accodate nella pipe**, e il lettore legge un carattere alla volta.

Il fatto che le scritture vengono accodate accade solo quando sono più corti di `PIPE_BUF`, solitamente 4096 byte.

Se eseguissimo più lettori contemporaneamente noteremmo delle interferenze nell'output in quanto vari lettori leggono caratteri in modo non sincronizzato dalla stessa pipe.

# Thread

Fino ad ora abbiamo visto come i **processi possono comunicare solo tramite scambio di messaggi**.
Con i thread la comunicazione non avviene in questo modo.

Ricordiamo che:
- **processi**: sono un contesto di esecuzione contenente tutte le informazioni necessarie al processo per funzionare (codice, dati,  **memoria**, I/O, ID, priorità, stato PC e registri, stack, ...)
- **thread**: sono la parte del processo che si occupa dell'esecuzione.

## Memoria condivisa

Un processo più avere più thread (*multi-threading*), e tutti i thread che appartengono allo stesso processo lavorano su una memoria condivisa (che è la memoria del processo).

Quindi con i thread la **comunicazione avviene tramite la scrittura e la lettura su una memoria condivisa**

## Produttore e consumatore

Vediamo un esempio di un problema implementato con i processi e poi con i thread analizzando i vari aspetti da tenere in considerazione quando si utilizzano i thread.

Il problema del produttore e consumatore consiste che un processo/thread produca un dato e un altro processo/thread lo consumi:

## Implementazione con i processi

Implementiamo ad un livello astratto il codice per implementare la comunicazione utilizzando i processi:

```c
pipe A;

Produttore() {
	while(1) {
		// produce il dato 'd'
		send(A, d); 	// invia sulla pipe il dato 'd'
	}
}

Consumatore() {
	while(1) {
		receive(A, &d)	// riceve sulla pipe il dato 'd'
		// consuma il dato 'd'
	}
}
```

Utilizzando una **send asincrona** (invia il dato senza aspettare una risposta) e una **receive sincrona** (attendendo che arrivi il dato prima di leggere) otteniamo una soluzione soddisfacente

## Implementazione con i thread

Andiamo ad implementare una soluzione *step-by-step* utilizzando i thread.

La memoria condivisa tra i thread si implementa solitamente tramite delle **variabili globali**.
Avremo bisogno di:
- un **array** che farà da buffer per contenere i dati generati dal produttore
- un **indice** che tiene conto di dove il produttore è arrivato a scrivere i dati nel buffer
- un **indice** che tiene conto di dove il consumatore è arrivato a leggere i dati nel buffer

Inizialmente immaginiamo che il nostro **buffer sia di dimensione illimitata**
![enter image description here](https://i.ibb.co/dJy2FYn/image.png)

```c
data_t buffer[...];		//buffer illimitato
int read_index = 0;
int write_index = 0;

Produttore() {
	while(1) {
		// produce il dato 'd'
		buffer[write_index] = d;
		write_index++;
	}
}

Consumatore() {
	while(1) {
		d = buffer[read_index];
		read_index++;
		//consuma il dato 'd'
	}
}
```

Il problema di questa implementazione è che se il consumatore fosse più veloce del produttore esso non attenderebbe che ci siano dei dati validi nel buffer prima di leggere.

Un approccio potrebbe essere di creare una attesa attiva (*busy waiting*) cosicché il buffer si riempia con dati validi:

```c
data_t buffer[...];		//buffer illimitato
int read_index = 0;
int write_index = 0;

Produttore() {
	while(1) {
		// produce il dato 'd'
		buffer[write_index] = d;
		write_index++;
	}
}

Consumatore() {
	while(1) {
		//impedisco che l'indice di lettura superi quello della scrittura
		while(read_index == write_index) {}

		d = buffer[read_index];
		read_index++;
		//consuma il dato 'd'
	}
}
```

Questo approccio sistema le cose, però adesso dobbiamo risolvere il fatto che abbiamo assunto di avere un buffer di dimensione illimitata, che non è realistico.
Possiamo implementare una soluzione che utilizza un **buffer circolare con una dimensione prefissata**
![enter image description here](https://i.ibb.co/svDDVBg/image.png)

```c
data_t buffer[MAX];		//buffer di dimensione MAX
int read_index = 0;
int write_index = 0;

Produttore() {
	while(1) {
		// produce il dato 'd'
		buffer[write_index] = d;
		write_index = (write_index + 1) % MAX;
	}
}

Consumatore() {
	while(1) {
		while(read_index == write_index) {}	//impedisco che l'indice di lettura superi quello della scrittura
		d = buffer[read_index];
		read_index = (read_index + 1) % MAX;
		//consuma il dato 'd'
	}
}
```

In questo modo il produttore quando raggiunge l'ultima cella (in posizione `MAX - 1`) ripartirà a scrivere dalla posizione `0`.
Il problema è che se il **produttore è più veloce del consumatore rischia di sovrascrivere delle celle ancora non lette dal consumatore**

Per ovviare a questo problema possiamo mettere in attesa il produttore quando i due indici sono a una cella di distanza:

```c
data_t buffer[MAX];		//buffer di dimensione MAX
int read_index = 0;
int write_index = 0;

Produttore() {
	while(1) {
		// produce il dato 'd'
		while((write_index + 1) % MAX == read_index) {} 	//se fare la scrittura corrente mi porterebbe allo stesso indice della lettura allora attendo
		buffer[write_index] = d;
		write_index = (write_index + 1) % MAX;
	}
}

Consumatore() {
	while(1) {
		while(read_index == write_index) {}	//impedisco che l'indice di lettura superi quello della scrittura
		d = buffer[read_index];
		read_index = (read_index + 1) % MAX;
		//consuma il dato 'd'
	}
}
```

Questa soluzione seppure accettabile ha dei difetti:
- spreca una cella del buffer (per sapere quando mettere in attesa il produttore)
- spreca tempo di CPU con i cicli a vuoto (a causa del ciclo while)
- non scala con più produttori e consumatori, in quanto interferirebbero tra loro con gli indici

## Interferenza

Per risolvere il primo problema potremmo pensare di utilizzare una variabile condivisa tra i due thread che si occupa di contare quante celle sono presenti nel buffer che non sono ancora state lette.
Quindi il produttore incrementa questo contatore mentre il consumatore lo decrementa:

```c
data_t buffer[MAX];		//buffer di dimensione MAX
int read_index = 0;
int write_index = 0;
int counter = 0;

Produttore() {
	while(1) {
		// produce il dato 'd'
		while(counter == MAX) {} 	//se la scrittura corrente mi porterebbe allo stesso indice della lettura allora attendo
		buffer[write_index] = d;
		write_index = (write_index + 1) % MAX;
		counter++;
	}
}

Consumatore() {
	while(1) {
		while(counter == 0) {}	//impedisco che l'indice di lettura superi quello della scrittura
		d = buffer[read_index];
		read_index = (read_index + 1) % MAX;
		counter--;
		//consuma il dato 'd'
	}
}
```

Questo codice seppur sembri corretto non lo è.
Infatti è possibile che la variabile counter venga aggiornata contemporaneamente dal consumatore e dal produttore, generando una **race condition** che può portare ad aggiornare la variabile in modo errato:

Se andiamo ad analizzare a basso livello come funziona l'aggiornamento di una variabile, possiamo dividere l'operazione in 3 punti:

1. lettura dalla memoria del valore attuale della variabile (viene salvato il valore in un registro)
2. aggiornamento al nuovo valore	(viene modificato il registro)
3. salvataggio del nuovo valore in memoria	(viene salvato il valore nel registro nella memoria)

Se immaginiamo che `counter = 10` e ipotizziamo che sia il produttore che il consumatore facciano una modifica, possiamo avere 3 comportamenti diversi in base allo scheduling dei thread:

1. Primo caso:
	- il consumatore esegue consecutivamente i 3 passi: `counter: 10 - 1 = 9`
	- successivamente il produttore esegue consecutivamente i 3 passi: `counter: 9 + 1 = 10`
	- valore finale `counter = 10`
	- Questo caso risulta essere corretto in quanto prima uno decrementa e poi l'altro incrementa e ritorniamo allo stesso risultato iniziale
2. Secondo caso:
	- il consumatore fa solo il passo 1 (lettura del valore dalla memoria): `counter: 10`
	- poi il produttore esegue consecutivamente i 3 passi: `counter: 10 + 1 = 11`
	- infine il consumatore esegue i 2 passi rimanenti: `counter: 10 - 1 = 9`
	- valore finale `counter = 9`
	- Questo caso non è corretto in quanto un incremento e un decremento generano un risultato diverso da quello iniziale.
	Questo accade perché il consumatore ha letto il dato iniziale e poi si è fermato, intanto però il produttore ha aggiornato il valore del `counter`. Quando poi il consumatore riprende l'esecuzione possiede un dato ormai obsoleto e continua a lavorare su di esso.
3. Terzo caso (simmetrico al secondo): 
	- il produttore fa solo il passo 1 (lettura del valore dalla memoria): `counter: 10`
	- poi il consumatore esegue consecutivamente i 3 passi: `counter: 10 - 1 = 9`
	- infine il produttore esegue i 2 passi rimanenti: `counter: 10 + 1 = 11`
	- valore finale `counter = 11`
	- Questo caso non è corretto in quanto un incremento e un decremento generano un risultato diverso da quello iniziale.
	Questo accade perche il produttore ha letto il dato iniziale e poi si è fermato, intanto però il consumatore ha aggiornato il valore del `counter`. Quando poi il produttore riprende l'esecuzione possiede un dato ormai obsoleto e continua a lavorare su di esso.

Per poter risolvere questo problema abbiamo bisogno di coordinare le operazioni di aggiornamento delle variabili condivise tra i thread.

# Sezione critica

La **sezione critica** è una parte del codice soggetta a **race condition**, cioè parti in cui più thread accedono e modificano a variabili condivise.

Per evitare che i thread interferiscano tra di loro nella modifica delle variabili condivise dobbiamo sincronizzare i thread in modo che la sezione critica sia eseguita in **mutua esclusione**: cioè un thread alla volta accede alla sezione critica.

**La mutua esclusione va garantita a prescindere dalla schedulazione dei thread**

Ottenere la mutua esclusione possiamo tentare 2 diversi approcci:

- Soluzioni software
- Soluzioni hardware (chiamate a sistema)

## Soluzioni software

Vediamo dei tentativi di soluzioni software.
Consideriamo per semplicità la concorrenza con solamente 2 thread.
Nelle implementazioni reali solitamente non si usano implementazioni software.

## Tentativo 1: Lock

Utilizziamo una variabile booleana globale chiamata `lock`. Tale variabile indica, quando è `true`, che la sezione critica è occupata da un thread, mentre quando è `false`indica che la sezione critica è libera.

```c
global bool lock;
thread T {
  ....
  while(lock) {}	// se il lock è true attende
  lock = true;
  < sezione critica >
  lock = false;
  ....
}
```

**Problema**: può accadere che i due thread riescano a superare entrambi il ciclo while, questo perché il primo thread che entra non fa in tempo a settare `lock = true` e un altro thread supera il while.
Per questo motivo la mutua esclusione non è garantita.

## Tentativo 2: Turno

Utilizziamo una variabile booleana globale chiamata `turno` inizializzata a `true`. Questa variabile indica quale thread può accedere alla sezione critica

```c
global turno = 0

thread T0 {                        thread T1 { 
  ....                                ....  
  while(turno != 0) {}                while(turno != 1) {}    
  < sezione critica >                 < sezione critica >   
  turno = 1;                          turno = 0; 
  ....                                ....  
}                                   }
```

Quindi il thread `T0` entra solo quando la variabile turno è `0` mentre `T1` entra solo quando turno è `1`

La **mutua esclusione** è garantita in quanto la variabile turno non può valere `0` e `1` contemporaneamente.

**Problema**: immaginiamo che il thread `T0` voglia entrare molto spesso in sezione critica mentre il thread `T1` ci accede raramente.
Otteniamo che il thread `T0` si troverà spesso ad aspettare il turno di `T1` anche se la sezione critica è effettivamente libera (perché `T1` sta facendo altro)

Dobbiamo quindi garantire una proprietà chiamata **progresso**: se la sezione critica è libera e un thread vuole entrarci allora ci deve accedere subito.

## Tentativo 3: Pronto

Utilizziamo un array booleano globale con valori inizializzati a `false`, come nel tentativo 1 anche in questo caso gli elementi dell'array indicano che il thread i-esimo può accedere alla sezione critica

```c
global boolean pronto[2] = false

thread T0 {                        thread T1 { 
  ....                                ....  
  pronto[0] = true;                   pronto[1] = true;
  while(pronto[1]) {}                 while(pronto[0]) {}    
  < sezione critica >                 < sezione critica >   
  pronto[0] = false;                  pronto[1] = false;
  ....                                ....  
}                                   }
```

Analizziamo per esempio il thread `T0`:
- Con l'istruzione `pronto[0] = true` avvisa gli altri thread che lui vuole entrare nella sezione critica.
- `while(pronto[1]) {}`: finche c'è un altro thread che è già pronto allora attendo che finisca.
- se l'altro thread non vuole accedere alla sezione critica allora ci entra il nostro thread e quando ha finito imposta `pronto[0] = false`

La **mutua esclusione** è garantita in quanto se un thread è in sezione critica la sua variabile è impostata a true e l'altro thread rimarrà fermo al while

**Problema**: potrebbe capitare che entrambi impostino simultaneamente il proprio valore nell'array a true, se ciò accadesse rimarrebbero bloccati entrambi i thread nel while (si attendono a vicenda ma in realtà nessuno dei due è riuscito ad entrare in sezione critica)

## Algoritmo di Peterson

Una soluzione funzionante è un algoritmo chiamato **algoritmo di Peterson** che è una combinazione dei due precedenti tentativi (turno e pronto)

Il tentativo con pronto sarebbe buono se non fosse per lo stallo, ma integrando il tentativo con turno lo possiamo evitare: effettuiamo una turnazione solamente quando siamo nel caso problematico (entrambi i thread sono pronti). Mentre se un solo thread è pronto allora può procedere tranquillamente.

```c
global bool lock;
global boolean pronto[2] = false

thread T0 {                              thread T1 { 
  ....                                      ....  
  pronto[0] = true;                         pronto[1] = true;
  turno=1;                                  turno=0;
  while(pronto[1] && turno != 0) {}         while(pronto[0] && turno != 1) {}    
  < sezione critica >                       < sezione critica >   
  pronto[0] = false;                        pronto[1] = false;
  ....                                      ....  
}                                         }
```

Analizziamo per esempio il thread `T0`:
- Con l'istruzione `pronto[0] = true` avvisa gli altri thread che lui vuole entrare nella sezione critica.
- `turno = 1` indica che il thread `T0` lascia il turno all'altro thread
- `while(pronto[1] && turno != 0) {}`: rimango in attesa se l'altro thread è pronto **e** se il turno non è mio
- se tale condizione non vale allora entro nella sezione 

La mutua esclusione è garantita in quanto se un thread riesce ad entrare nella sezione critica allora il suo valore nell'array è `true` e il turno sarà del thread che è in sezione critica (altrimenti non avrebbe superato il while).
La varibile `turno` ci garantisce che in caso di entrambi i thread pronti solamente uno dei due possa entrare in quanto non può valere `0` e `1` contemporaneamente.

Nota che se la sezione critica è libera allora il thread che ci vuole accedere può entrare immediatamente in quanto la prima condizione del while risulterà falsa e quindi la seconda condizione viene direttamente ignorata.

## Conclusione soluzione software

In generale seppur fattibili le soluzioni software presentano dei problemi:

1. i cicli a vuoto consumano tempo di CPU
2. Sono richieste variabili globali ed è necessaria una precisa sequenza di istruzioni.
	I moderni compilatori spesso riordinano le istruzioni per ottimizzare le prestazioni, ma non tengono conto della possibile esecuzione parallela del codice, un riordinamento potrebbe portare e non sincronizzare più i thread correttamente.
	Tali ottimizzazioni fatte dal compilatore andrebbero quindi disattivate per mantenere la correttezza, perdendo però delle possibili performance in più.

## Soluzioni hardware

Esistono delle istruzioni speciali implementate in linguaggio macchina in modo che sia garantita la mutua esclusione su un pezzo di codice.

Un esempio potrebbe essere l'istruzione **test_and_set**, che permette di testare un valore ed assegnarlo tramite una sequenza di istruzioni indivisibili.
Possiamo immaginare che sia implementata in un modo del genere:

```c
boolean test_and_set(boolean *x) {
    boolean ret = *x;
    *x = true;
    return ret;
}
```

Pone a true la variabile `x` (che viene passata per indirizzo) e poi ritorna il suo vecchio valore.

Potremmo usare questa istruzione per implementare il nostro primo tentativo con `lock` nella soluzione software:

```c
global boolean lock;
thread T {
  ....
  while(test_and_set(&lock)) {}
  < sezione critica >
  lock = false;
  ....
}
```

Se `lock` è `false` viene ritornato dalla funzione `false` ma viene comunque settato `lock` a `true`, il thread riesce quindi a superare il ciclo ed entra in sezione critica.
Se `lock` è `true` viene ritornato dalla funzione `true` e il valore di `lock` rimane `true`, il thread rimane quindi in attesa nel ciclo while.

Questa soluzione prende il nome di **spin-lock**

## XCHG

Un'altra istruzione che ha la stessa funzionalità del `test_and_set` è l'istruzione (dell'architettura Intel) XCHG (pronunciata come "exchange"). 

A differenza di `test_and_set`, l'istruzione XCHG scambia in modo atomico il contenuto di due variabili booleane, possiamo immaginare l'implementazione come segue:

```c
XCHG(boolean *x, *y) {
    boolean tmp = *x;
    *x = *y;
    *y = tmp;
}
```

Possiamo immaginare una esecuzione mutualmente esclusiva nel seguente modo

```c
global bool lock = 1;

thread T0 {                              thread T1 { 
  ....                                      ....  
  turno=0;                                  turno=0;
  while(turno == 0) {XCHG(lock, turno)}         while(turno == 0) {XCHG(lock, turno)}    
  < sezione critica >                       < sezione critica >   
  XCHG(lock, turno)                      	XCHG(lock, turno)
  ....                                      ....  
}                                         }
```

# Thread in POSIX

Vediamo come utilizzare i thread su un sistema UNIX, utilizzando lo standard POSIX.

Elenchiamo le principali funzioni che la libreria mette a disposizione:

- `pthread_create(pthread_t *thread, pthread_attr_t *attr, void *(*start_routine)(void *), void *arg)`
	Serve per creare un nuovo thread e prende i seguente 4 argomenti:
	- `thread` è un puntatore ad una variabile di tipo `pthread_t` che è il corrispettivo di `pid_t`, cioè un identificativo del thread
	- `attr` attributi del nuovo thread per abilitare comportamenti specifici, nella maggior parte dei casi non servono ed è sufficiente passare NULL
	- `start_routine`: è il nome della funzione da far eseguire al thread, in C il nome di una funzione è un puntatore al suo codice.
	Quella sintassi `void *(*start_routine)(void *)` indica che si deve passare un indirizzo di funzione che ritorna un puntatore a void e prende in input un puntatore a void
	- `arg`: argomenti da passare alla funzione che assegnata al thread, NULL se non sono necessari parametri

- `pthread_exit(void *retval)`
	termina l'esecuzione del thread, verrà restituito al padre del thread un puntatore a void `retval`
- `pthread_join(pthread_t th, void **thread_return)`
	attende la terminazione di un thread specificato da `th`. Se la chiamata ha successo ritorna 0 e in `thread_return` sarà contenuto il valore generato dalla `pthread_exit` del thread

- `pthread_detach(pthread_t th)`
	usato se non si vuole attendere la terminazione del thread, lo si mette in disparte e appena termina le sue risorse verranno rilasciate.
	Se viene fatta una `exit()` dal processo principale comunque un *thread detachato* verrà terminato all'istante

- `pthread_t pthread_self()`
	ritorna l'ID del thread assegnato dalla libreria pthread. Nota che l'ID che il sistema operativo assegna al thread è diverso rispetto a quello ritornato da questa funzione

## Esempio 1

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include <sys/syscall.h>   /* For SYS_xxx definitions */

// codice dei thread. Notare che e' una funzione che prende 
// un puntatore e ritorna un puntatore (a void)
void* codice_thread(void* a) {
    pthread_t tid;
    int ptid;
    
    tid  = pthread_self();      // library tid
    ptid = syscall(SYS_gettid); // tid assegnato dal SO (funziona solo in Linux)

    printf("Sono il thread %lu (%i) del processo %i\n", tid, ptid, getpid());
    sleep(1);
    pthread_exit(NULL);
}

int main() {
    pthread_t tid[2];
    int i, err;

    // crea i thread (ritorna 0 quando ha successo)
    // - gli attributi sono quelli di default (il secondo parametro e' NULL)
    // - codice_thread e' il nome della funzione da eseguire
    // - non vegnono passati parametri (quarto parametro e' NULL)
    for (i = 0; i < 2; i++) {
        if (err = pthread_create(&tid[i], NULL, codice_thread, NULL)) {
            printf("errore create [%i]\n", err);
            exit(EXIT_FAILURE);
        }
    }
    
    // attende i thread. Non si legge il valore di ritorno (secondo parametro NULL)
    for (i = 0; i < 2; i++) {
        if (err = pthread_join(tid[i], NULL)) {
            printf("errore join [%i]\n", err);
            exit(EXIT_FAILURE);
		}
    }
    printf("I thread hanno terminato l'esecuzione correttamente\n");
}
```

Compilazione ed esecuzione (nota la presenza dell'opzione `-pthread` per poter linkare la libreria dei thread di POSIX):

	$ gcc test1.c -pthread -o test1
	$ ./test1
	Sono il thread 140072330872576 (14335) del processo 13793
	Sono il thread 140072322479872 (14336) del processo 13793
	I thread hanno terminato l'esecuzione correttamente

## Esempio 2

Relizziamo questo esercizio: passare a due thread un intero letto dalla linea di comando (rispettivamente `argv[1]` e `argv[2]`). I due thread calcolano il quadrato del numero intero e il thread principale, infine, stampa la somma dei due valori ottenuti.

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include <sys/syscall.h>   /* For SYS_xxx definitions */

void * codice_thread(void * a) {
    
    // ottiene un puntatore a int passato dal main
    // *num punta a num[i] dove i è il numero del thread
    int *num = (int *)a; 
    
    pthread_t tid  = pthread_self();      // library tid
    printf("Sono il thread %lu del processo %i e ho letto %i\n", tid, getpid(), *num);
    sleep(1);
    // calcola il quadrato di num[i] puntato da num e mette il risultato
    // direttamente in num[i].
    // In questo modo dopo le join il main può trovare il quadrato direttamente in num[i]
    *num = (*num) * (*num);
    pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
    pthread_t tid[2];
    int i, err;
    int num[2]; // array per passaggio parametri
    if (argc < 3) {
        printf("Usage: %s num1 num2\n", argv[0]);
        exit(EXIT_FAILURE);
    }

    // crea i thread: passa i parametri ai thread copiando argv[i+i]
    // in num[i] e facendo un cast a (void *) di &num[i]. 
    // In questo modo ogni thread lavora su una variabile distinta
    num[0] = atoi(argv[1])
    num[1] = atoi(argv[2])
    for (i=0;i<2;i++) {
        // crea i thread passando come parametro (void *)&num[i]
        if (err=pthread_create(&tid[i], NULL, codice_thread, (void *) &num[i])) {
            printf("errore create [%i]\n", err);
            exit(EXIT_FAILURE);
		}
    }
    
    // attende i thread. 
    for (i = 0; i < 2; i++) {
        if (err = pthread_join(tid[i], NULL)) {
            printf("errore join [%i]\n", err);
            exit(EXIT_FAILURE);
		}
    }
    // il risultato è direttamente in num[i]!
    printf("I thread hanno terminato l'esecuzione correttamente: %d + %d = %d\n", num[0], num[1], num[0] + num[1]);
}
```

# Semafori

Fino ad ora abbiamo visto un modo software e istruzioni speciali implementate in hardware per sincronizzare i thread, ma questi metodi presentano dei problemi alla base:

- Generano una attesa tramite di cicli che girano a vuoto, sprecando tempo di CPU
- Le istruzioni hardware hanno una realizzazione complessa, soprattutto nelle architetture multi-core.

Il sistema operativo ci fornisce delle soluzioni più semplici ed efficaci, uno dei questi metodi è l'utilizzo dei **semafori**.

## Semafori

Un semaforo è un contatore intero con l'aggiunta di una coda di thread:

```c
struct semaphore {
	int value;
	thread *queue;
};
```

- `value > 0` indica che l'accesso alla sezione critica è consentito e il suo valore indica il **numero di accessi disponibili** prima di diventare non più accessibile
- `value <= 0` indica che l'accesso alla sezione critica non è consentito e il suo valore indica **quanti thread sono in attesa** di accedere (tali thread saranno nella coda `queue`)

Un esempio utile può essere quello di un parcheggio con, ad esempio, 10 posti auto (la risorsa desiderata dai thread, che saranno le macchine).
Inizialmente il parcheggio sarà completamente vuoto, quindi `value = 10`,
le prima macchine (i thread) possono entrare senza problemi fintanto che `value > 0`, una volta raggiunto lo `0` le macchine si accodano e una volta che si libera un parcheggio la macchina arrivata per prima può entrare.

I semafori vengono incrementati e decrementati attraverso due funzioni speciali:

- `P(S)` o `wait(S)` decrementa il valore del semaforo, se il semaforo era già rosso allora il thread si accoda 
- `V(S)` o `post(S)` incrementa il valore del semaforo, se il semaforo era rosso viene sbloccato il primo thread in coda

Possiamo immaginare l'implementazione delle due funzioni nel seguente modo:

```c
P(semaphore S) {
  S.valore--;
  if (S.valore < 0)
    < Metti il thread corrente in attesa su S.queue >
}

V(semaphore S) {
  S.valore++;
  if (S.valore <= 0)
    < Sblocca il primo thread in attesa su S.queue >
}
```

All'interno del codice di un thread possiamo utilizzare il semaforo nel seguente modo:

```c
Semaphore S = {1, <empty_queue>}	//solo un thread alla volta può accedere alla sez. critica

thread T {
  ...
  P(S);
  < Sezione critica >
  V(S);
  ...
}
```

Vediamo l'esecuzione di 3 thread che girano in parallelo su 3 *core* diversi
![enter image description here](https://i.ibb.co/CtWdz4b/image.png)

dove i trattini indicano la normale esecuzione del thread, mentre li due linee continue rappresentano l'esecuzione in sezione critica.

## Produttore e consumatore

Vediamo l'implementazione del produttore e consumatore tramite l'uso di semafori.

Abbiamo necessariamente bisogno di 2 semafori in quanto:
- quando il buffer è pieno il produttore deve attendere
- quando il buffer è vuoto il consumatore deve attendere

Un semaforo conterà il numero di celle vuote, mentre l'altro conterà quante celle sono piene.

Assumiamo che la grandezza del buffer sia `10`

```c
Semaphore piene = 0
Semaphore vuote = 10;	//inizialmente tutte le celle sono vuote

Produttore {
  while(1) {
    < produce d >
    P(vuote); // richiede una cella vuota
    buffer[inserisci] = d;
    inserisci = (inserisci+1) % 10;
    V(piene); // rilascia una cella piena
  }
}
 
Consumatore {
  while(1) {
    P(piene); // richiede una cella piena
    d = buffer[preleva];
    preleva = (preleva+1) % 10:
    V(vuote); // rilascia una cella vuota
    < consuma d >
  }
}
```

## Tanti produttori e consumatori

In caso avessimo più produttori e più consumatori potremmo avere delle interferenze dovute al buffer condiviso tra i thread: due consumatori potrebbero leggere dalla stessa cella, oppure due produttori potrebbero scrivere sulla stessa cella sovrascrivendo i dati.
Anche l'incremento dell'indice `inserisci` potrebbe causare interferenze.

La soluzione è utilizzare un ulteriore semaforo per rendere mutualmente esclusivo l'aggiornamento delle variabili condivise:

```c
Semaphore piene = 0,
Semaphore vuote = 10,
Semaphore mutex = 1;

Produttore {
  while(1) {
    < produce d >
    P(vuote); // richiede una cella vuota
    P(mutex); // entra in sezione critica
    buffer[inserisci] = d;
    inserisci = (inserisci+1) % 10;
    V(mutex); // esce dalla sezione critica
    V(piene); // rilascia una cella piena
  }
}
 
Consumatore() {
  while( {
    P(piene); // richiede una cella piena
    P(mutex); // entra in sezione critica
    d = buffer[preleva];
    preleva = (preleva+1) % 10:
    V(mutex); // esce dalla sezione critica
    V(vuote); // rilascia una cella vuota
    < consuma d >
  }
}
```

## Semafori in POSIX

Le varie funzioni per utilizzare i semafori dello standard POSIX sono definiti nella libreria `semephore.h`principalmente i seguenti:

-    `sem_t sem_name`
	dichiara una variabile di tipo semaforo;
-   `int sem_init(sem_t *sem, int pshared, unsigned int value)`
	 inizializza il semaforo  `sem`  al valore  `value`.
	 la variabile  `pshared`  indica se il semaforo è condiviso tra thread (uguale a 0) o processi (diverso da 0), lo useremo quindi sempre con 0.
-   `int sem_wait(sem_t *sem)` 
	esegue una P(sem);
-   `int sem_post(sem_t *sem)` 
	esegue una V(sem);
-   `int sem_getvalue(sem_t *sem, int *val)` 
	legge il valore del semaforo e lo copia in  `val`;
-   `sem_destroy(sem_t *sem)` 
	elimina il semaforo. Da NON usare se ci sono processi in attesa sul semaforo (comportamento non specificato).

## Implementazione completa produttore e consumatore

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include <semaphore.h>
#include <string.h>

#define SIZE 10

int buffer[SIZE];
int inserisci = 0;
int preleva = 0;

sem_t mutex; // semaforo mutua esclusione
sem_t vuote;
sem_t piene;

void print_buffer() {
	for (int i = 0; i < SIZE; i++) {
		printf("%d ", buffer[i]);
	}
	printf("\n");
	printf("\n");
}

void* produttore(void* a) {
	pthread_t tid = pthread_self();
	for (int i = 0; i < 13; i++) {
		int d = 22;
		sem_wait(&vuote);
		sem_wait(&mutex);
		if (buffer[inserisci] != -1) {
			printf("errore di sincronizzazione (produttore)");
		}
		buffer[inserisci] = d;
		inserisci = (inserisci + 1) % SIZE;

		//stampe di debug
		//printf("prodotto (thread %ld)\n", tid);
		//print_buffer();
		sem_post(&mutex);
		sem_post(&piene);
	}
	pthread_exit(NULL);
}

void* consumatore(void* a) {
	pthread_t tid = pthread_self();
	for (int i = 0; i < 13; i++) {
		int d;
		sem_wait(&piene);
		sem_wait(&mutex);
		if (buffer[preleva] == -1) {
			printf("errore di sincronizzazione (consumatore)");
		}
		d = buffer[preleva];
		buffer[preleva] = -1;
		preleva = (preleva + 1) % SIZE;

		//stampe di debug
		//printf("consumato (thread %ld)\n", tid);
		//print_buffer();
		sem_post(&mutex);
		sem_post(&vuote);
	}
	pthread_exit(NULL);
}

int main() {
    pthread_t tid_prod[5];		//5 produttori
    pthread_t tid_cons[5];		//5 consumatori
    int err;
    sem_init(&mutex, 0, 1);
    sem_init(&piene, 0, 0);
    sem_init(&vuote, 0, SIZE);


	//inizializzazione dei valori del buffer a -1
	for (int i = 0; i < SIZE; i++) {
		buffer[i] = -1;
	}

	//lancio produttori e consumatori
	for (int i = 0; i < 5; i++) {
		if ((err = pthread_create(&tid_prod[i], NULL, produttore, NULL))) {
			printf("errore create [%i]\n", err);
			exit(EXIT_FAILURE);
		}
		if ((err = pthread_create(&tid_cons[i], NULL, consumatore, NULL))) {
			printf("errore create [%i]\n", err);
			exit(EXIT_FAILURE);
		}
    }


    // attende i thread. Non si legge il valore di ritorno (secondo parametro NULL)
    for (int i = 0; i < 5; i++) {
        if ((err = pthread_join(tid_prod[i], NULL))) {
            printf("errore join [%i]\n", err);
            exit(EXIT_FAILURE);
		}
    }

	for (int i = 0; i < 5; i++) {
		if ((err = pthread_join(tid_cons[i], NULL))) {
			printf("errore join [%i]\n", err);
			exit(EXIT_FAILURE);
		}
    }

    // destroy
    sem_destroy(&mutex);
    sem_destroy(&piene);
    sem_destroy(&vuote);
}
```


# Programmazione con i semafori

Vediamo, oltre al problema dei produttori e consumatori, altri classici problemi di sincronizzazione risolubili con i semafori: 
- sincronizzazione molti a uno
- lettori e scrittori
- filosofi a cena

## Sincronizzazione molti a uno

Consideriamo una variante del problema produttori e consumatori in cui ci sono $N$ produttori e un solo consumatore.
Ogni produttore avrà una propria coda in cui metterà i suoi dati.
Il consumatore consumerà un dato alla volta a turno dalle code dei produttori

Possiamo vedere il problema graficamente nel seguente modo
![enter image description here](https://i.ibb.co/D4vsBD5/image.png)

Partiamo da un pseudocodice di questo tipo

```c
queue dato_produttore[N];	//array di code

Produttore(i) {
  while(1) {
		< produce d >
		
		dato_produttore[i].add(d);
  }
}
 
Consumatore() {
  while(1) {
    for (i = 0; i < N; i++) {
		d[i] = dato_produttore[i].remove();
	}
    < consuma d[0], ..., d[N-1] >
  }
}
```

Per poter sincronizzarli abbiamo bisogno di:
- $N$ semafori di celle piene (uno per ogni coda)
- $N$ semafori di celle vuote (uno per ogni coda)
- un mutex (per la versione meno efficiente) oppure $N$ mutex (per la versione più efficiente)

```c
queue dato_produttore[N]; 
semaphore vuote[N] = {MAX, ..., MAX}; 
semaphore piene[N] = {0, ..., 0};
semaphore mutex[N] = {1, ..., 1};

Produttore(i) {
  while(1) {
    < produce d >

    P(vuote[i]);
    P(mutex[i]);
    dato_produttore[i].add(d);
    V(mutex[i]);
    V(piene[i]);
  }
}

Consumatore() {
  while(1) {
    for (i = 0; i < N; i++) {
      P(piene[i]);
      P(mutex[i]);
      d[i] = dato_produttore[i].remove();
      V(mutex[i]);
      V(vuote[i]);
    }

    < consuma d[0], ..., d[N-1] >
  }
}
```

L'ottimizzazione del mutex è la seguente:
utilizzando un solo mutex si è più sicuri della sincronizzazione in quanto avviene sempre o una scrittura o una lettura e mai insieme.
Sfruttando però il fatto che i produttori scrivono sulla propria coda, l'unica interferenza è che il produttore scriva sulla propria coda e il consumatore legga da quella stessa coda contemporaneamente, quindi possiamo usare un mutex per ogni coda in modo da sincronizzarle singolarmente, così facendo le scritture su code diverse avverranno parallelamente.

## Lettori e scrittori

Abbiamo dei dati in memoria condivisa.
Abbiamo alcuni thread che accedono a questa memoria in sola lettura (thread chiamati **lettori**) e dei thread che modificano i dati in questa memoria (thread chiamati **scrittori**)

Quello che vogliamo sincronizzare è che se uno scrittore sta modificando i dati non ci deve essere nessun lettore che sta leggendo e nessun altro scrittore che sta scrivendo.
È invece possibile avere più lettori contemporaneamente in lettura.

In sostanza vogliamo **un solo scrittore oppure più lettori**

Esistono più soluzioni, alcune più ottimizzate di altre. Quella che vedremo sarà la più semplice, che rispetta la proprietà ma che potrebbe soffrire di *starvation*.

Il codice dello scrittore è una classica sincronizzazione di una sezione critica dove ci accede solo un thread alla volta. 

Codice **scrittore**:
```c
semaphore scrittura=1;

Scrittore() {
  while(1) {
    ...
    P(scrittura);

    < modifica i dati >

    V(scrittura);
    ...
  }
}
```

Per implementare i lettori è utile utilizzare un contatore per tenere traccia di quanti lettori stanno leggendo:
se non è presente alcun scrittore in zona critica allora:
- il primo lettore che arriva deve impedire l'entrata di uno scrittore
- l'ultimo lettore ad uscire deve sbloccare lo scrittore
- tutti i lettori nel mezzo possono passare liberamente

```c
int num_lettori = 0;
semaphore mutex = 1;

Lettore() {
  while(1) {
    ...
    P(mutex);              // protegge l'aggiornamento di num_lettori e accoda i lettori
    num_lettori++;
    if (num_lettori == 1)  // se è il primo lettore
      P(scrittura);        // blocca lo scrittore
    V(mutex);

    < legge i dati >

    P(mutex);              // protegge l'aggiornamento di num_lettori
    num_lettori--;
    if (num_lettori == 0)  // se è l'ultimo lettore 
      V(scrittura);        // sblocca lo scrittore
    V(mutex);
    ...
  }
}
```

Il mutex è necessario per due ragioni:
1. l'aggiornamento della variabile `num_lettori` è una *race condition*
2. il primo lettore che arriva si bloccherà su `P(scrittura)` se c'è uno scrittore attivo, così facendo tutti gli altri lettori rimarranno in attesa su `P(mutex)`. Solo quando lo scrittore avrà finito allora il lettore eseguirà `V(mutex)` e lascerà passare tutti gli altri lettori (e se stesso). Vale lo stesso per il decremento finale

Problema della ***starvation***: se i lettori continuano ad arrivare, non si sbloccherà più il semaforo della scrittura e lo scrittore potrebbe rimanere in una attesa potenzialmente infinita.
Alcune soluzioni più complesse implementano il fatto che se lo scrittore vuole scrivere allora mette in attesa tutti i nuovi lettori in arrivo e attende che tutti i lettori già entrati in sezione critica finiscano.

## Filosofi a cena

Ci sono 5 filosofi seduti su un tavolo rotondo, ognuno ha davanti a sé un piatto, e tra ogni piatto ci sono 2 bacchette condivise tra i filosofi che sono adiacenti.
Ogni filosofo ha bisogno di due bacchette per mangiare e quindi non è possibile che due filosofi vicini possano mangiare contemporaneamente.

![enter image description here](https://i.ibb.co/PDz9c5C/image.png)

Schematizziamo il codice di un filosofo nel seguente modo:

```c
Filosofo(i) {
  while(1) {
    < pensa >

    < raccoglie le bacchette sx e dx > 
    < mangia >
    < deposita le bacchette sx e dx >
  }
}
```

Ogni bacchetta è una risorsa condivisa tra due specifici filosofi, non possiamo quindi utilizzare un unico semaforo inizializzato a 5 in quanto significherebbe ai filosofi andrebbero bene due qualsiasi bacchette.

Utilizziamo un array di 5 semafori inizializzati a 1.

Nota anche che l'`i`-esimo filosofo utilizza la bacchetta con indice `i` e quella con indice `i+1` (ovviamente con modulo 5 in quanto il quinto filosofo utilizzerà la bacchetta `0`)

```c
semaphore bacchette[5] = {1, 1, 1, 1, 1};

Filosofo(i) {
  while(1) {
    < pensa >

    P(bacchette[i]);
    P(bacchette[(i+1)%5]);
    < mangia >
    V(bacchette[i]);
    V(bacchette[(i+1)%5]);
  }
}
```

Il codice **sembra** corretto, però può andare in **stallo** (deadlock).
Uno stallo è uno stato del programma in cui si è permanentemente bloccati in quanto i thread si aspettano a vicenda. In questi casi l'unico modo di uscire dallo stallo è uccidere il processo.

In questo caso lo stallo si verifica nel caso in cui tutti i filosofi prendono la prima bacchetta contemporaneamente.

Per prevenire lo stallo in questo caso abbiamo varie soluzioni:

### quattro filosofi a tavola

Un primo approccio è quello di limitare il numero di filosofi che possono mangiare a 4. Così facendo ci sarà sempre almeno una bacchetta libera.
Per implementare questo metodo facciamo uso di altro semaforo `posti` inizializzato a 4

```c
semaphore bacchette[5] = {1,1,1,1,1};
semaphore posti = 4;

Filosofo(i) {
  while(1) {
    < pensa >

    P(posti);
    P(bacchette[i]);
    P(bacchette[(i+1)%5]);
    < mangia >
    V(bacchette[i]);
    V(bacchette[(i+1)%5]);
    V(posti);
  }
}
```

Se tutti e 5 vogliono prendere la bacchetta di sinistra, solo i primi 4 ci riusciranno mentre l'altro rimarrà in attesa su `P(posti)`

### raccolta atomica

possiamo utilizzare un mutex in modo da permettere ad un filosofo alla volta di raccogliere le proprie bacchette

```c
semaphore bacchette[5] = {1,1,1,1,1};
semaphore mutex = 1;

Filosofo(i) {
  while(1) {
    < pensa >

    P(mutex);
    P(bacchette[i]);
    P(bacchette[(i+1)%5]);
    V(mutex);
    < mangia >
    V(bacchette[i]);
    V(bacchette[(i+1)%5]);
  }
}
```

Questa soluzione non è ottimale in quanto sincronizza troppo: se un filosofo prende la prima bacchetta ma ha la seconda bacchetta occupata rimarrà in attesa bloccando anche gli altri filosofi che in realtà potrebbero mangiare.

### Filosofo mancino

Una terza opzione è quella forzare un filosofo a prendere prima la bacchetta di destra e poi quella di sinistra.
Così facendo rompiamo l'attesa circolare (lo stallo) che si verificava inizialmente.

Supponiamo di mettere il quinto filosofo che prende prima quella di destra.

```c
semaphore bacchette[5] = {1,1,1,1,1};
Filosofo(i) {
  while(1) {
    < pensa >

    if (i == 4) {
      P(bacchette[0]);       // destra
      P(bacchette[4]);       // sinistra
    } else {
      P(bacchette[i]);       // sinistra
      P(bacchette[(i+1)%5]); // destra
    }

    < mangia >

    // rilascia le bacchette, non importa l'ordine in quanto la V non è bloccante
    V(bacchette[i]);
    V(bacchette[(i+1)%5]);
  }
}
```

# Monitor

I monitor sono un **costrutto linguistico** (o un meccanismo di sincronizzazione) atto a risolvere due dei principali problemi che si presentano utilizzando i semafori:

1. la sincronizzazione è gestita in modo decentralizzato dai singoli thread.
2. gestire multipli semafori in certe situazioni non è comodo, è comune la possibilità di creare stalli.

I monitor possono essere ricondotti a degli oggetti (nel mondo della programmazione ad oggetti) che hanno dei dati (i campi) e delle procedure per accederci (i metodi).
Possiamo anche immaginarli come semafori solamente con la coda, senza il contatore.

I monitor permettono di centralizzare tutta la sincronizzazione in un unico punto (il monitor) e facilità la mutua esclusione:

1. le **procedure** del monitor vengono eseguite in **mutua esclusione**
2. I monitor forniscono delle variabili speciali chiamate *condition* sulle quali sono possibili delle operazioni speciali: 
	- **wait**: il thread si mette in attesa e va in coda, il mutex viene rilasciato per permettere agli altri thread di entrare in zona critica
	- **signal**: riattiva **immediatamente** il primo thread in attesa sulla coda, e il thread attuale va in attesa nella coda
	- **notify**: notifica il primo thread in attesa che può continuare, quando la CPU gli assegnerà il suo turno potrà proseguire. Intanto l'attuale thread continua la sua normale esecuzione

La sottile differenza tra **signal** e **notify** può essere importante in determinati casi: con **signal** siamo sicuri che il thread in attesa verrà subito eseguito, mentre con la **notify** non possiamo darlo per certo, infatti altri thread potrebbero rubargli il posto possibilmente intaccando la correttezza del programma senza i giusti controlli.

La **notify** è quindi meno restrittiva in quanto lascia il compito allo scheduler di sbloccare i thread, mentre la **signal** forza un cambio di thread allo scheduler.

## Produttore e consumatore con i monitor

Definiamo una pseudo-classe Monitor come segue

```c
Monitor mon {
	int buffer[MAX];
	
	int counter = 0;	//conta il numero di celle piene, da consumare
	int write_index = 0;
	int read_index = 0;

	condition piene;
	condition vuote;

	void produce(int d) {
		if (counter == MAX) {	// se non ci sono celle libere
			vuote.wait();
		}
		buffer[write_index] = d;
		write_index = (write_index + 1) % MAX;
		counter++;
		piene.signal();
	}

	int consuma() {
		if (couter == 0) {		// se non ci sono celle da leggere
			piene.wait();
		}
		d = buffer[read_index];
		read_index = (read_index + 1) % MAX;
		counter--;
		vuote.signal();
		return d;
	}
}
```

Usiamo il monitor appena creato nel codice del Produttore e Consumatore:

```c
Produttore() {
  while(1) {
    /* produce un elemento d */
    mon.produce(d);
  }
}

Consumatore() {
  while(1) {
    d = mon.consuma();
    /* consuma d */
 }
}
```

### Signal vs notify

È importante l'uso della `signal()` e non della `notify()` in quanto:
immaginiamo un consumatore che lancia una `wait` perché non ci sono celle da leggere.
Arriva un produttore che incrementa il `counter` e lancia una `signal`, questo fa si che il consumatore che era nella `wait` riparta immediatamente (correttamente, infatti il counter adesso vale 1, che lui riporterà a 0).

Se usassimo la `notify()` potremmo avere il seguente comportamento:
immaginiamo un consumatore che lancia una `wait` perché non ci sono celle da leggere.
Arriva un produttore che incrementa il `counter` e lancia una `notify`, questo comunica allo scheduler che può avviare il consumatore quando possibile. Se però un altro consumatore entra in esecuzione trova il counter a 1 e quindi esegue tranquillamente portando il counter di nuovo a 0. Poi lo scheduler fa ripartire il consumatore che era bloccato, ma adesso non c'è più un dato da leggere (il counter è a 0 e lui lo porterà erroneamente a -1)

### Versione corretta con notify

Una corretta implementazione con la `notify` richiede le seguenti modifiche

```c
Monitor mon {
	int buffer[MAX];
	
	int counter = 0;
	int write_index = 0;
	int read_index = 0;

	condition piene;
	condition vuote;

	void produce (int d) {
		while (counter == MAX) {		//MODIFICA
			vuote.wait();
		}
		buffer[write_index] = d;
		write_index = (write_index + 1) % MAX;
		counter++;
		piene.notify();					//MODIFICA
	}

	int consuma () {
		while (couter == 0) {			// MODIFICA
			piene.wait();
		}
		d = buffer[read_index];
		read_index = (read_index + 1) % MAX;
		counter--;
		vuote.notify();					//MODIFICA
		return d;
	}
}
```

Fare il controllo in un ciclo `while` permette di accertarsi che il counter sia effettivamente come richiesto prima di riprendere l'esecuzione.
Nota che **non** si tratta di *busy waiting* in quanto la `wait` sospende il thread.

## Filosofi a cena con i monitor

Vediamo come implementare i filosofi a cena con la soluzione della **raccolta atomica di entrambe le bacchette**, questa soluzione non era facile con i semafori in quanto dovremmo rilasciare il mutex nel caso una delle bacchette non fosse disponibile.
Con i monitor risolviamo questo problema:

```c
Monitor tavola {
  boolean bacchetta[5] = {true, true, true, true, true}; // presenza bacchette
  condition filosofo[5]; // code di attesa per i filosofi

  void raccogli(int i) {
    while(!bacchetta[i] || !bacchetta[(i+1)%5]) {
      filosofo[i].wait(); // attende se una delle bacchette non è disponibile
	}
    // raccoglie le bacchette in modo atomico
    bacchetta[i] = false;
    bacchetta[(i+1)%5] = false;
  }

  void deposita(int i) {
    // deposita le bacchette
    bacchetta[i] = true;
    bacchetta[(i+1)%5] = true;

    // notifica il filosofo a sx e quello a dx
    filosofo[(i+4)%5].notify();
    filosofo[(i+1)%5].notify();
  }
}
```

Utilizzo del monitor

```c
Filosofo(i) {
  while(1) {
    < pensa >

    tavola.raccogli(i);

    < mangia >
    
    tavola.deposita(i);
  }
}
```

Vediamo come implementare i filosofi a cena con la soluzione di **limitare a 4 i filosofi che possono mangiare contemporaneamente**.
Dobbiamo simulare un semaforo inizializzato a 4.

Aggiorniamo il Monitor con due procedure: `siediti` e `alzati`

```c
Monitor tavola {
  boolean bacchetta[5] = {true, true, true, true, true}; // presenza bacchette
  condition filosofo[5]; // code di attesa per i filosofi

  int sedie = 4;
  condition sedia;

  void siediti() {
	  while(sedie == 0) {	//se non ci sono sedia disponibili ne attende una
		  sedia.wait();
	  }
	  sedie--;	//occupa una sedia
  }

  void alzati() {
	  sedie++;	//libera la sedia
	  sedia.notify();		//notifica il primo filosofo in attesa della sedia
  }
 
  void raccogli(int i) {
    ...
  }

  void deposita(int i) {
    ...
  }
}
```

Questi due metodi che abbiamo aggiunto simulano il comportamento della `sem_post()` e `sem_wait()` dei semafori.

## Lettori e scrittori, `notifyAll`

Possiamo schematizzare il comportamento di lettori e scrittori nel seguente modo

(`rw` è il monitor)
```c
Lettore() {
  while(1) {
    ...
    rw.ini_leggi();

    < legge i dati >

    rw.end_leggi();
    ...
  }
}

Scrittore() {
  while(1) {
    ...
    rw.ini_scrivi();

    < modifica i dati >

    rw.end_scrivi();
    ...
  }
}
```

Lo scopo è sempre quello di garantire l'accesso o a più lettori o ad un solo scrittore.

Le informazioni di cui abbiamo bisogno sono:
- Il numero di lettori all'interno della sezione critica
- Se uno scrittore è all'interno della zona critica

```c
Monitor rw {
  int n_lettori = 0; // n. lettori in sezione critica
  boolean scrittore = false; // scrittore in sezione critica
  condition c; // coda di attesa

  void ini_leggi() {
    while(scrittore) {
      c.wait(); // attende se c'è uno scrittore
    }
    n_lettori++; // il lettore entra
  }

  void end_leggi() {
    n_lettori--; // il lettore esce
    if (n_lettori == 0) {
      c.notify(); // l'ultimo lettore sblocca eventuali scrittori in attesa
	}
  }

  void ini_scrivi() {
    while(scrittore || n_lettori > 0) {
      c.wait(); // attende se c'è uno scrittore o dei lettori
    }
    scrittore = true; // lo scrittore entra
  }

  void end_scrivi() {
    scrittore = false; // lo scrittore esce
    c.notifyAll(); // lo scrittore sblocca tutti i thread in attesa
  }
}
```

in `end_scrivi` abbiamo per la prima volta una `notifyAll()`, questa funzione permette di sbloccare tutti i thread che sono in una `wait`.
In questo contesto specifico viene fatto perchè se il primo ad entrare è un altro scrittore allora non ci sarebbero problemi: infatti tutti i lettori si riboccherebbero.
Se invece entra un lettore allora anche i successivi lettori possono entrare. Se in quest'ultima situazione avessimo semplicemente usato `notify` il primo lettore potrebbe entrare ma gli altri sono ancora bloccati dalla `wait`, c'è quindi il bisogno di sbloccare indistintamente tutti.

Sarà lo *scheduler* a decidere il prossimo thread da far eseguire.


# Thread in Java

Vediamo i due modi principali di creare ed usare thread in Java

## Estendendo la classe Thread

Il primo modo è quello di definire una propria classe che estende la classe `Thread` della JDK.
All'interno della nostra classe va sovrascritto il metodo `run()` che conterrà il codice che eseguirà il thread

```java
public class CreaThread extends Thread {
    public void run() {
        System.out.println("Saluti dal thread " + this.getName());
    }
    
    public static void main(String args[]) {
        CreaThread t = new CreaThread();		//crea il thread
        t.start();		//fa partire il thread
    }
}
```

Alternativamente è possibile creare un thread usando il costruttore di `Thread` che prende in input un oggetto che implementa `Runnable`, tramite classe anonima, lambda oppure esplicitamente istanziando la nuova classe che implementa `Runnable` e passarla al costruttore di `Thread`
[Appunti Programmazione ad oggetti 2 (Thread)](https://gabritorre.github.io/uni/year2/prog_ogg2/web_notes/Thread.html)

## Creazione, Interruzione e attesa

Vediamo un programma in cui creiamo dei thread, li facciamo "dormire" tramite una `sleep()`, li svegliamo tramite un `interrupt()`e attendiamo la loro terminazione con `join()`

```java
public class CreaTantiThread extends Thread {
    static final int NTHREAD = 5;     // numero di thread da creare
    final int index;                // indice del thread appena creato

    // costruttore: memorizza l'indice del thread 
    CreaTantiThread(int i) {
        index = i;
    }
    
    // codice da eseguire allo startup del thread 
    public void run()  {
        try {
            // NOTA: se l'interruzione arriva prima della sleep viene bufferizzata!
            sleep(2000);  // dorme per 2 secondi
        } catch(InterruptedException e) {
            System.out.println("["+getName()+"]"+" Ah mi hanno interrotto!!");
            return; 
        }
        
        System.out.println("Saluti dal thread " + getName());
    }

    /* main: crea i NTHREAD thread ne interrompe alcuni e attende la
       terminazione.
       NOTA: con join devo gestire InterruptedException,
       ma nessuno interrompera' mai le join di questo main quindi la 
       ignoriamo */
    public static void main(String args[]) throws InterruptedException {
        int i;
        Thread t[] = new Thread[NTHREAD];
        
        // crea 5 thread e li esegue
        for(i = 0; i < NTHREAD; i++) {
            t[i] = new CreaTantiThread(i);
            t[i].start();
        }
        
        // interrompe il terzo thread
        t[3].interrupt();
        
        // attende la terminazione dei thread
        for(i = 0; i < NTHREAD; i++) {
            t[i].join();
        }
        
        System.out.println("Saluti dal thread " + Thread.currentThread().getName());
    }
}
```

## Monitor

Java implementa una versione semplificata dei monitor:

- Ogni oggetto ha un mutex implicito utilizzato per garantire la mutua esclusione
- I metodi sono eseguiti in mutua esclusione solo se vengono dichiarati `synchronized`
- Ogni oggetto è dotato di una unica `condition` sulla quale sono definiti 3 metodi: `wait()`, `notify()`, `notifyAll()`
- se il metodo è statico allora il mutex è a livello di classe e non di oggetto
- è possibile sincronizzare singole porzioni di codice definendole all'interno di un blocco `synchronized`
	```java
	synchronized(mutex) {
        //codice sincronizzato
    }
	```
	dove "mutex" è un qualsiasi `Object` utilizzato per fare il **lock** del blocco di codice.

## Esempio

```java
public class Interferenze extends Thread {
    static final int MAX=1000000;           // iterazioni massime
    Contatore c;                            // Monitor passato dal main

    // costruttore, memorizza il monitor nel campo c
    Interferenze(Contatore cont) {
        c = cont;
    }
    //   i thread incrementano MAX volte il contatore
    //   NOTA: non possono fare c.count++ perché è privato! 
    public void run() {
        int i;
        for (i = 0; i < MAX; i++)
            c.incrementa();     // questo metodo è in MUTEX perché synchronized
    }

    //   il main crea i thread, attende la terminazione e stampa il contatore 
    public static void main(String args[]) throws InterruptedException {
        Thread t[] = new Thread[2];
        Contatore cont = new Contatore(); // crea un singolo monitor
        
        // crea i 2 thread e li esegue
        for(int j = 0; j < 2; j++) {
            t[j] = new Interferenze(cont); // passa il monitor ai thread
            t[j].start();
        }

        // attende la terminazione
        for(int j = 0; j < 2; j++){
	        t[j].join();
		}
        // stampa il contatore, il valore atteso ed esce
        System.out.println("FINITO " + cont.valore() + " mi aspettavo " + MAX*2);
    }
}


/*  questa classe implementa un Monitor in cui e' possibile incrementare il valore 
 *  di un contatore da diversi thread in mutua esclusione.
 *  provare a togliere il 'synchronized' dal metodo incrementa per osservare 
 *  le interferenze */
class Contatore {
    private int count=0;    // privato: no accessi diretti

    // il metodo synchronized garantisce mutua esclusione sullo stesso oggetto
    synchronized void incrementa() {
        count++;
    }

    /* non serve sincronizzarlo visto che lo usiamo alla fine dal main: gli altri
    thread sono già terminati (la join garantisce che il main e' l'unico 
     thread in esecuzione)
     inoltre la lettura non crea mai interferenze
     */
    int valore() {
        return(count);
    }
}
```

# Deadlock

Nel tentativo di sincronizzare processi o thread ci si può imbattere in degli stalli o **deadlock** cioè delle situazioni in cui dei thread rimangono in attesa reciproca gli uni degli altri, non riuscendo mai a sbloccarsi perché colui che dovrebbe causare l'evento di sblocco è in attesa (si forma quindi una **attesa circolare**).

Più formalmente possiamo dire che:
Un insieme $S$ di processi o thread è in stallo se ogni $p$ in $S$ attende un evento che può essere causato solo da processi o thread appartenenti ad $S$.

## Condizioni per generare uno stallo

Uno stallo può avvenire sotto il verificarsi di tutte le seguenti condizioni:

- **Mutua esclusione**
	In assenza di mutua esclusione: se una risorsa può essere utilizzata senza problemi contemporaneamente da più processi o thread non è necessario attendere e quindi non si forma una situazione di stallo. Ad esempio la lettura simultanea di dati condivisi.
- **Possesso e attesa**
	Se i processi o thread non allocano mai le risorse in modo incrementale, cioè acquisendo una risorsa (possesso) e poi chiedendone altre in seguito (attesa). Se ciò non si verifica allora non può succedere che si formi un attesa circolare (e quindi uno stallo).
- **Assenza di preemption**
	Se il sistema può far rilasciare in modo forzato le risorse a thread o processi, allora è possibile risolvere situazioni di stallo tramite preemption.
- **Attesa circolare**
	Per definizione, lo stallo avviene quando c’è una attesa circolare che fa sì che nessun processo o thread uscirà mai dallo stato di attesa.

## Gestire le situazioni di stallo

Lo stallo può essere gestito in vari modi a seconda di se e quando si evidenziano (potenziali) situazioni si attesa circolare.

-   **Prevenzione**: vengono messe in atto alcune strategie che prevengono la formazione di stalli
-   **Controllo**: l’assegnamento delle risorse è consentito solo nel caso in cui il sistema possa garantire che tale assegnamento non porterà a una situazione di stallo;
-   **Riconoscimento**: il sistema individua situazioni di stallo e cerca di ripristinare uno stato precedente senza stallo;
-   **Nessuna azione**: il sistema ignora lo stallo e lascia ai programmatori l’onere di evitarlo o gestirlo.

## Prevenzione

Analizziamo il caso di prevenzione dello stallo, per prevenire uno stallo dobbiamo negare almeno una delle condizioni necessaria di prima:

### Negare la mutua esclusione

Il fatto che l’accesso a una risorsa sia in mutua esclusione dipende dalla risorsa stessa e dal tipo di accesso, quando è necessaria non possiamo evitarla per prevenire lo stallo, ne risentirebbe la correttezza del programma.

### Evitare il possesso e attesa

Possiamo evitare possesso e attesa allocando tutte le risorse assieme (vedi la raccolta atomica nei filosofi a cena). Questo non è però sempre possibile perché non è detto che si conoscano tutte le risorse necessarie a un thread o processo a priori.
Inoltre allocare tutte le risorse all’inizio può essere **inefficiente** in quanto priva gli altri thread o processi di tali risorse.
Questa soluzione può anche provocare **starvation**.

### Preemption

La preemption, come la mutua esclusione, dipende dal tipo di risorsa. Ci sono risorse per loro natura sono preemptable e altre no. Tipicamente, se la risorsa può salvare completamente il proprio stato e ripristinarlo può essere preemptable come la CPU.
Non possiamo quindi imporre la preemption a priori.

### Prevenire l'attesa circolare

È possibile evitare l’attesa circolare con opportune strategie di allocazione delle risorse.
Ne è un esempio la soluzione dei filosofi a cena con un filosofo mancino

## Controllo

Analizziamo il caso di controllo a *run-time* dello stallo.
Per poter controllare ed evitare la formazione degli stalli a run-time l’idea è di consentire l’assegnamento delle risorse solo nel caso in cui il sistema possa garantire che tale assegnamento non porterà a una situazione di stallo.

## Grafo di assegnazione

Per svolgere il controllo è necessario memorizzare lo **stato di una risorsa**, cioè se è assegnata o libera, e la presenza di **richieste** da parte dei thread (o processi).
Il **grafo di assegnazione** mantiene queste informazioni

- arco da P a R: il processo richiede la risorsa
- arco da R a P: la risorsa è assegnata al processo
- arco tratteggiato da P a R: il processo potrà richiedere in futuro la risorsa

Una risorsa può avere più istanze di se stessa così da poter soddisfare più processi contemporaneamente.

Vediamo un esempio grafico
![enter image description here](https://i.ibb.co/1rzKJz7/image.png)

Descrizione:
- P1 richiede la risorsa R1
- R2 è assegnata a P1
- R1 è assegnata a P2 e P3
- P3 richiede la risorsa R2
- P2 potrebbe richiedere la risorsa R2 in futuro

### Grafo sicuro

Un grafo di assegnazione è detto **sicuro** se è privo di stalli anche considerando le richieste future.
Per determinare se in un grafo esiste una situazione di stallo bisogna controllare le seguenti condizioni:

- ogni risorsa ha **una sola istanza**: **se il grafo ha un ciclo allora esiste uno stallo**.
- le risorse hanno **più istanze**: **la presenza dello stallo implica la presenza di un ciclo**, ma la presenza di un ciclo non basta per dire se ci può essere uno stallo o meno. Bisogna usare un particolare algoritmo

## Algoritmo con grafo di assegnazione

Analizziamo prima il caso con risorse a istanza singola: basta verificare la presenza di un ciclo

Per ogni richiesta, se la risorsa non è disponibile il processo va in attesa, altrimenti:

1. simula sul grafo, l'assegnamento della risorsa al processo
2. verifica la presenza di cicli, considerando anche le richieste future:
	- se viene trovato un ciclo: il processo viene messo in attesa
	- altrimenti: la risorsa viene assegnata

Esempio con i filosofi a cena:
![enter image description here](https://i.ibb.co/cL6pf7q/image.png)

Immaginiamo di trovarci nella situazione sopra descritta, in cui i primi 4 filosofi hanno preso la bacchetta di sinistra e l'ultimo filosofo `F4` vorrebbe la sua bacchetta sinistra, in quanto quell'assegnamento creerebbe un ciclo l'assegnazione non viene fatta e il filosofo viene messo in attesa.

## Algoritmo del banchiere

Analizziamo ora il caso in cui le risorse hanno più istanze, in questo caso verificare la presenza di un ciclo non basta, ne è un esempio il seguente grafo, che, pur avendo un ciclo non ha uno stallo (si tratta quindi di un **grafo sicuro**)

![enter image description here](https://i.ibb.co/h9TJkXZ/image.png)

In questo caso un possibile ordine di terminazione dei processi è <P2, P0, P1>, tale sequenza viene detta **sicura**.

In generale una sequenza di terminazione di processi è detta **sicura** se ogni processo della sequenza può ottenere tutte le risorse che necessita tra quelle disponibili inizialmente e quelle possedute dai processi che lo precedono (cioè quelli che terminano prima di lui)

Quindi la sequenza deve garantire che ogni processo abbia le risorse che necessita per poi rilasciarle ai processi successivi.

Per verificare se esiste una sequenza sicura si utilizza il seguente algoritmo:

1. Cerca un processo che possa ottenere tutte le risorse necessarie (incluse quelle future) da quelle disponibili. Se tale processo non c’è allora non esiste una sequenza sicura
2. Rilascia tutte le risorse possedute dal processo, aggiungilo alla sequenza sicura e toglilo dal grafo
3. Se ci sono ancora processi nel grafo ripeti il punto 1, altrimenti dai in output la sequenza sicura

**L'algoritmo del banchiere** utilizza la non esistenza di una sequenza sicura per individuare potenziali stalli:

Per ogni richiesta, se la risorsa non è disponibile il processo attende, altrimenti:

1. simula sul grafo l'assegnamento della risorsa al processo
2. verifica se il grafo contiene uno stallo, verificando che non esista una sequenza sicura
	- in caso di stallo il processo viene messo in attesa
	- altrimenti: la risorsa viene assegnata e la modifica sul grafo viene confermata

### Esempio

Partiamo da una situazione di questo tipo, con 3 processi e 2 risorse.

Una istanza di R1 viene assegnata a P2.
Le future richieste sono segnate tramite archi tratteggiati (non sappiamo a prescindere l'ordine delle richieste)

![enter image description here](https://i.ibb.co/XzS7TPZ/image.png)

Se lasciamo l'assegnamento incontrollato potrebbe verificarsi uno stallo.
Simuliamo invece l'algoritmo del banchiere.

P1 richiede R1, simuliamo l'assegnamento sul grafo: dobbiamo verificare che esista una sequenza sicura e <P1, P2, P3> lo è in quanto: P1 può ottenere R2, rilasciando le proprie risorse permette a P2 di ottenere R2, che a sua volta può rilasciare le risorse permettendo a P3 di ottenere R1 e R2.

aggiorniamo il grafo
![enter image description here](https://i.ibb.co/zJPp1sT/image.png)

P3 richiede R2, simuliamo l'assegnamento sul grafo: dobbiamo verificare che esista una sequenza sicura ma in questo caso non esiste in quanto nessuno dei tre processi può ottenere tutte le risorse necessarie.
L'algoritmo mette P3 in attesa

aggiorniamo il grafo

![enter image description here](https://i.ibb.co/Y2DLCMm/image.png)

P1 richiede R2, simuliamo l'assegnamento sul grafo: dobbiamo verificare che esista una sequenza sicura e <P1, P2, P3> lo è.
aggiorniamo quindi il grafo.

successivamente

P2 richiede R2, simuliamo l'assegnamento sul grafo: dobbiamo verificare che esista una sequenza sicura e <P1, P2, P3> lo è.
aggiorniamo quindi il grafo e otteniamo il seguente risultato

![enter image description here](https://i.ibb.co/71YJgjr/image.png)


