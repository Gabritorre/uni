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

