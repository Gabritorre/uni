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
       terminazione. NOTA: con join devo gestire InterruptedException,
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
	dove "mutex" è un qualsiasi oggetto utilizzato per fare il **lock** del blocco di codice.

per ulteriore approfondimento: [Programmazione ad oggetti mod.2 - Thread](https://gabritorre.github.io/uni/year2/prog_ogg2/web_notes/Thread.html)


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
    //   NOTA: non possono fare c.count++ perche' e' privato! 
    public void run() {
        int i;
        for (i = 0; i < MAX; i++)
            c.incrementa();     // questo metodo e' in MUTEX perche' synchronized
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
    private int count=0;    // privato: no accessi diretti!

    // il metodo synchronized garantisce mutua esclusione sullo stesso oggetto
    synchronized void incrementa() {
        count++;
    }

    // non serve sincronizzarlo visto che lo usiamo alla fine dal main: gli altri
    // thread sono gia' terminati (la join garantisce che il main e' l'unico 
    // thread in esecuzione) inoltre la lettura non crea mai interferenze
    int valore() {
        return(count);
    }
}
```
