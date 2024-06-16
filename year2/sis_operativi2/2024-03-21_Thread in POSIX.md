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

