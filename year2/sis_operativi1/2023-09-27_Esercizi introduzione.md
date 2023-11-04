# Domande su Introduzione

## Esercizi teorici

### Indicare le due funzioni principali di un sistema operativo.

- fungere come macchina astratta per l'utente mascherando la complessità delle operazioni e fornendo una interfaccia semplice
- gestione delle risorse, far comunicare le varie componenti nel modo più ottimizzato possibile

### Descrivere i diversi tipi di sistema operativo e dare un esempio di applicazione per ciascuno.

- os per mainframe: utilizzato ad esempio nelle banche, computazioni scientifiche
- os per server: servizi web, quindi in grado di soddisfare tante richieste da parte di più utenti
- os per multiprocessore: eseguire programmi multipli contemporaneamente
- os per personal computer: deve essere bilanciato sui vari aspetti del sistema operativo
- os real-time: gaming, musica, apparecchi medici, catene di montaggio
- os per embedded: computer piccoli come raspberry a basso consumo e basse performance
- os per smart-card: carta di credito
 
### In cosa differiscono i sistemi timesharing e i sistemi multiprogrammazione?

nel timesharing più utenti si collegano ad una macchina tramite dei terminali e la macchina a turno uno alla volta eseguira i job richiesti dagli utenti. Solo quando un job termina parte il successivo
nei sistemi multiprogrammazione l'esecuzione viene continuamente scambiata tra i processi attivi in modo da farli proseguire un po per volta tutti insieme. Durante l'esecuzione di un processo può venir fermata la sua esecuzione in favore dell'esecuzione di un altro processo.

### Cosa si intende per DMA, come viene utilizzato e che vantaggi può portare in un sistema operativo?

Il DMA (Direct Memory Access) è un componente hardware che viene utilizzato per gestire il trasferimento dei dati da un dispositivo di I/O e la memoria RAM con un minimo intervento della CPU. Questo fa si che la CPU si possa occupare di altre operazioni aumentando di molto l'efficienza
	
### Indicare i principali obbiettivi dei sistemi operativi e indicarne due che possono essere in contrasto.

Efficienza, Robustezza, Scalabilità, Estensibilità, Portabilità, Sicurezza, Protezione, Interattività, Usabilità, Prestazioni
in contrasto sono:
- Usabilità ed efficienza: Per essere semplice da usare magari è necessario un lavoro maggiore del sistema operativo nel mascherare la complessità delle operazioni riducendo così l'efficienza.
- Prestazioni ed efficienza e portabilità: se vuoi un sistema performante è difficile fare in modo che sia anche efficiente
- Scalabilità e robustezza: un sistema operativo deve essere in grado di adattarsi a diversi tipi di dispositivi riuscendo a essere un sistema solido indipendentemente dai componenti installati.

### Definire modalità utente e modalità nucleo in un sistema operativo e spiegarne l’utilizzo e la motivazione.

sono due modalità di esecuzione dei processi, nella modalità utente si hanno permessi limitati e generalmente i processi dell'utente vengono eseguiti in questa modalità. Nella modalità kernel si hanno pieni permessi e i processi del sistema operativo vengono eseguiti in questa modalità.
	La presenza di queste due modalità semplifica la progettazione del sistema operativo in quanto è molto semplice verificare in quale modalità ci si trova dato che è solo un bit ad indicarlo e permette di prevenire errori, garantire la sicurezza dei dati e protezione delle componenti hardware in quanto il sistema operativo utilizza dei metodi di comunicazione standard che hanno dei controlli in caso di errore.
	Se l'utente fosse libero di fare ciò che vuole sarebbe molto semplice creare gravi problemi al sistema. L'utente può sempre richiedere di fare delle operazioni più sensibili tramite delle chiamate a sistema lasciando il controllo al sistema operativo.
	
### Indicare quale di queste istruzioni dovrebbe essere consentita solo in modalità nucleo:

A. Disabilitare gli interrupt.
B. Leggere il dispositivo che calcola l’ora corrente
C. Impostare il dispositivo che calcola l’ora corrente
D. Cambiare la mappa di memoria.

risposta: D, A. Forse anche la C magari in determinati sistemi dove l'ora è un fattore importante

### In cosa differiscono i sistemi operativi con architettura monolitica e a microkernel?

Nell'architettura monolitica il sistema operativo è composta da un insieme di funzioni ognuna delle quali può chiamare le altre funzioni. In questo caso il sistema operativo è responsabile di praticamente tutte le operazioni più importante (file system, memory management, scheduling, interprocess communication, I/O manager, Network manager)
Nell'architettura microkernel il sistema operativo ha delle funzionalità limitate solo alla gestione della memoria e dei processi, il cui compito principale è quello di smistare i messaggi tra i processi

### Perché è utile distinguere la politica di gestione e il meccanismo di attuazione delle funzioni di un sistema operativo? Dare esempi.

è utile distinguerle perché la politica e il meccanismo sono indipendenti, cioè una determinata politica può essere implementata in diversi modi. Le politiche sono delle regoli generali, ad alto livello che dicono cosa sarà fatto, mentre il meccanismo implementa un modo proprio per ottenere tale politica. Ad esempio la gestione della memoria oppure lo scheduling dei processi

### Spiegare in cosa consiste e come viene usata un’istruzione trap nel sistema operativo.

trap è una istruzione che viene chiamata quando un processo vuole passare il controllo al sistema operativo andando così in kernel mode per fare delle operazioni particolari. Al termine di tali operazioni il controllo ritorna al processo. Viene anche usata in caso di interrupt o eccezioni

### Indicare in cosa differiscono i file speciali a blocchi e a caratteri?

In Unix I file speciali sono un modo per rendere i dispositivi di I/O accessibili come fossero dei file usando le stesse chiamate a sistema dei comuni file.
I file speciali a blocchi vengono utilizzati per gestire dispositivi costituiti da un insieme di blocchi come i dischi potendo accedere a determinati blocchi del disco senza tener conto del suo file system.
I file speciali a caratteri vengono utilizzati per gestire dispositivi che accettano in ingresso o forniscono in uscita un flusso di caratteri (come le stampanti).


## Esercizi pratici

### Esercizio 1

Se un processore usa una pipeline con quattro fasi e ogni fase impiega 1 ns per eseguire il proprio compito, il sistema quante istruzioni può eseguire per secondo? Spiegare in dettaglio la risposta. 

la pipeline permette a più istruzioni di essere in pipeline contemporaneamente in fasi diverse, quindi una volta riempita la pipeline idealmente abbiamo che il sistema esegue una istruzione al nanosecondo, quindi in un secondo esegue $1 \times 10^9$ istruzioni $(1\,000\,000\,000)$


### Esercizio 2

Considerate un sistema con memoria cache, memoria principale (RAM) e disco e un sistema operativo con memoria virtuale che accede ad una parola nella cache in 2 ns, una parola nella RAM in 10 ns una parola nel disco in 10 ms. Se quando si cerca una parola la percentuale di successo nella cache è del 95% (Hit rate) e nella memoria principale (se la ricerca nella cache fallisce) è del 99% quanto è il tempo medio d’accesso a una parola?

$$T_{\text{avg}} =(0.95 * 2) + (0.05 * 0.99 * 10) + (0.05 * 0.01 * 10000000) \approx 50002 ns$$

### Esercizio 3

Supponete che un file da 40 MB sia memorizzato su disco tutto nella stessa traccia (traccia 50) in settori consecutivi. Assumendo che: il tempo per muovere il braccio da un cilindro al successivo sia circa 1 ms, il tempo di rotazione per trovare il settore dove si trova il file sia 5 ms e la velocità di lettura di 200 MB/s, se Il braccio del disco si trova sulla traccia n. 100, quanto impiega a leggere il file dal disco?

traccia = un anello del disco
settore = fetta dell'anello
cilindro = una colonna di fette

- tempo per trovare la traccia $= 50\text{ tracce} \cdot 1\text{ ms per traccia} = 50ms$
- tempo per trovare il settore $= 5ms$
- tempo per la lettura di 40MB $= \frac{40}{200} = 0.2s = 200 ms$

tempo impiegato $50 + 5 + 200 = 255ms$
