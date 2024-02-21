# Creazione di processi

Quando si crea un nuovo processo il sistema operativo di occupa di:

- Creare un nuovo PID
- Allocare la memoria richiesta dal processo
- Allocare altre risorse (come dispositivi di IO)
- Decidere le varie informazioni del processo che saranno contenute nel PCB
- Creare il PCB

## Processi in Unix

Vediamo la fase di creazione di un processo in un sistema Unix:

Un processo viene sempre creato da un altro processo, tramite una chiamata a sistema.

Il processo creante viene detto **parent** (genitore oppure padre), mentre il processo creato viene detto **child** (figlio). Le varie creazioni di processi creano una **struttura ad albero** che rappresenta le relazioni di parentela tra i processi.

### Relazioni dinamiche

- La relazione di default tra padre e figlio è quella in cui il **padre attende l'esecuzione del figlio**, ad esempio eseguendo il seguente comando da shell

		$ sleep 5

	il processo padre è il processo `bash` che gestire i vari comandi che gli diamo. Quando lanciamo `sleep 5` viene creato un processo figlio che esegue il programma `sleep` (che semplicemente aspetta per una data quantità di secondi).
Durante l'attesa noi non possiamo lanciare altri comandi, questo perché il processo padre (bash) sta attendendo la terminazione del figlio

- Un altro tipo di relazione è quella dell'esecuzione in *background*, quindi dopo la creazione del processo, **padre e figlio continuano la loro normale esecuzione parallelamente**, ad esempio eseguendo il seguente comando da shell in questo modo

		$ sleep 5 &

	Come prima il processo padre (`bash`) crea il processo `sleep` me lo esegue in *background* quindi anche durante l'esecuzione della `sleep` possiamo comunque interagire con il terminale.
mentre la `sleep` è in esecuzione possiamo lanciare il comando `ps` che ci mostra i processi attualmente attivi nella specifica istanza di quel terminale. Si dovrebbe ottenere un output di questo tipo

	```bash
	PID TTY          TIME CMD
	14695 pts/1    00:00:00 bash
	17589 pts/1    00:00:00 sleep
	17590 pts/1    00:00:00 ps
	```

	Una volta che il processo `sleep` termina, viene notificata la cosa al padre tramite un messaggio di questo tipo:

		[1]+  Done                    sleep 5

	possiamo venere meglio la relazione di parentela tra questi processi modificando il comando `ps` con il seguenti parametri 
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

## La system call "Fork"

`fork` è una chiamata a sistema nel sistema Unix che appartiene allo standard POSIX e che si occupa di creare un nuovo processo.

Dopo una chiamata a `fork` il processo figlio:
- **condivide l'area del codice** del processo padre
- utilizza una **copia dell'area dei dati del padre**

![enter image description here](https://i.ibb.co/cCP57w2/image.png)

Dato che padre e figlio lavorano sullo stesso codice, si può riconoscere padre e figlio in base al valore di ritorno della funzione `fork`:
- se ritorna 0 allora si tratta del processo figlio
- se ritorna un valore maggiore di 0 allora si tratta del processo padre (il valore di ritorno è esattamente PID del processo figlio)

Ad esempio (fatto in C)

```C
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

Nota 1: che il tipo di dato `pid_t` è un intero la cui dimensione varia in base al sistema.
Nota 2: usando la combinazione `Ctrl + c` si invia un segnale di terminazione al processo.

Possiamo utilizzare le funzioni:
- `getpid()` per ottenere il pid del processo stesso
- `getppid()` per ottenere il pid del processo padre
- se siamo sul padre il valore di ritorno della fork ci da il pid del figlio


Come si vedeva nel codice, quando il valore di ritorno della `fork` è negativo significa che la creazione del processo è fallita, questo solitamente accade quando non c'è sufficiente memoria per allocare il processo.


## Processi orfani e zombie

In base alla versione del sistema Unix possiamo avere diversi processi che gestiscono l'avvio e l'esecuzione dell'intero sistema. Nelle prime versioni di Unix si usava **SysVinit**, poi si è passati a **Upstart**, ora nei sistemi più recenti viene usato **Systemd**


I sistemi che utilizzano SysVinit e Upstart si riferiscono al processo che inizializza il sistema come **init** mentre i sistemi che utilizzano Systemd si riferiscono a tale processo come **systemd**


Quando il processo padre termina prima del figlio, allora il figlio viene definito **orfano**. I processi orfani vengono adottati da *init* oppure da *systemd* (in base al sistema)
Un processo orfano non viene più terminato dalla combinazione `Ctrl + c`

I processi **Zombie** sono processi terminati ma in attesa che il genitore rilevi la loro terminazione e quindi che il padre riceveva il suo valore di uscita. 
I processi zombie possiedono ancora un PID e il PCB mentre sono in questo stato.


