# Domande su processi e thread

### Descrivere il meccanismo di gestione di interrupt in sistemi operativi. Dare un esempio. 

Un interrupt è una evento che porta la CPU ad interrompere il processo che sta eseguendo per gestire questo evento, gli interrupt sono solitamente eventi esterni come richieste di I/O, oppure errori hardware.

Quando si presenta una interruzione:
1. il sistema salva lo stato del processo attuale
2. viene scelto un gestore di interrupt in base alla specifica interruzione per risolverla
3. quando il gestore dell'interrupt ha terminato il sistema operativo ripristina lo stato del processo che era stato interrotto e riprende la sua normale esecuzione

### Se in un sistema sono presenti in memoria sei programmi, che per la metà del tempo sono in attesa di un I/O, che percentuale di tempo di CPU viene sprecata?

utilizzando la formula 

$$\text{Utilizzo}_{\text{CPU}} = 1-p^n$$
dove:
$n$ = numero di processi in memoria
$p$ = frazione di tempo / probabilità / percentuale di operazioni IO

nel nostro caso abbiamo che
$\text{Utilizzo}_{\text{CPU}} = 1-0.5^6 \approx 0.98 \approx 98\%$
la CPU viene sprecata all'incirca per il $2\%$ del suo tempo

### L’uso della multiprogrammazione con esecuzione (pseudo) parallela permette spesso di abbreviare i tempi di esecuzione dei job rispetto all’esecuzione sequenziale. Considerare due job che iniziano insieme, ognuno dei quali richiede un tempo di CPU di 20 min, e di attesa della I/O per 50%: quanto tempo impiega il secondo per terminare se sono eseguiti in sequenza e quanto se eseguiti in parallelo?

- Nel caso sequenziale:
esegue il primo processo e aspettiamo che termini, impiegherà 20 minuti di CPU + 10 minuti di I/O = 30 minuti totali
poi viene eseguito il secondo, anche lui impiegherà 30 minuti totali

	Abbiamo quindi che il tempo totale per eseguire questi due processi in modo sequenziale è di 30 + 30 = 60 minuti

- Nel caso parallelo:
esegue il primo, farà i suoi 20 minuti di CPU.
poi il secondo farà i suoi 20 minuti di CPU, parallelamente il primo processo svolge le sue operazioni di IO. Infine rimangono solo i 10 minuti di IO del secondo
	Abbiamo quindi che il tempo totale per eseguire questi due processi in modo parallelo è 20 + 20  + 10 = 50 minuti


### In un sistema multiprogrammato con un sei programmi in memoria contemporaneamente, se ogni processo passi il 40% del tempo in attesa di un I/O, qual è l’utilizzo della CPU?

$\text{Utilizzo}_{\text{CPU}} = 1-0.4^6 \approx 0.996 \approx 99.6\%$


### Assumendo di voler scaricare da Internet un file da 2 GB, disponibile in diversi siti mirror, ciascuno dei quali può inviarne una parte, assumendo che una richiesta specifichi i byte di inizio e di fine del file, indicate come si potrebbe utilizzare i thread per migliorare il tempo di download.

potremmo dividere il file di 2GB in porzioni di ugual dimensione ed usare i thread per scaricare contemporaneamente porzioni diverse del file dai mirror

### Discutere i vantaggi e limiti dell’implementazione dei thread nello spazio utente.

**vantaggi**:
- permettere di utilizzare i thread anche in sistemi che nativamente non supportano i thread
- le librerie possono implementare il proprio modo di schedulare i thread
- lo scheduling dei thread è molto efficiente dato che non deve far entrare in gioco il kernel
- è portabile. Essendo indipendente dal kernel è possibile usare lo stesso codice multithreading in sistemi diversi

**svantaggi**
- il kernel vedendo tutto come processi a singolo thread, nel caso un thread faccia operazioni di I/O è possibile che il kernel sospenda l'intero processo a favore di un altro, interrompendo così l'esecuzione di tutti i thread del processo sospeso.
- i thread vengono schedulati all'interno di un singolo core (prestazioni limitate)

### Uno scheduler round-robin mantiene un elenco dei i processi eseguibili, dove ogni processo viene elencato una sola volta. Che cosa accadrebbe se un processo fosse elencato due volte? Indicare, in caso affermativo, una possibile motivazione, in caso negativo perché.

elencare un processo due volte lo farebbe eseguire il doppio delle volte rispetto agli altri processi, un possibile motivo potrebbe essere quello di far eseguire più spesso i processi più importanti. 

Utilizzare questa tecnica però infrange la regola di equità dello scheduling round-robin in cui viene dato a tutti i processi lo stesso tempo di CPU.
Inoltre se tutti i processi fossero presenti due volte equivarrebbe a raddoppiare il tempo di CPU assegnato per ogni processo rallentando i tempi generali

### Specificare come si può determinare quanto un processo è CPU-bound o I/O-bound analizzando il suo codice. È possibile determinarlo durante l’esecuzione?

analizzando il codice è possibile determinare se il processo è CPU-bound oppure I/O bound andando a vedere se ci sono spesso operazioni di scrittura o lettura su disco oppure molta interazione con l'utente, in questo caso è possibile che sia I/O-bound. D'altra parte se ci si sono molti calcoli computazionali che non richiedono operazioni di I/O o interazione con l'utente è probabile che sia CPU-bound

Durante l'esecuzione se quel processo rimane spesso nello stato di bloccato e raramente in esecuzione sulla CPU è probabile che esso sia I/O-bound. Mentre se vediamo che quel processo è costantemente in esecuzione sulla CPU allora è possibile che sia CPU-bound


### Spiegate la relazione e influenza reciproca fra la dimensione del quanto e il tempo necessario al cambio di contesto in un algoritmo di scheduling round-robin.

Nell'algoritmo round-robin la dimensione del quanto è il tempo della CPU che viene assegnato ad un processo.
Il tempo del cambio di contento è il tempo necessario per passare l'esecuzione da un processo ad un altro.
La dimensione del quanto di tempo va scelto attentamente in quanto se scegliamo un tempo molto piccolo verrebbero fatti cambi di contesto molto spesso generando un grande overhead, quindi sarebbe più il tempo di CPU sprecato rispetto a quello utilizzato per l'esecuzione di qualche processo.

Bisogna scegliere un buon compromesso di tempo di esecuzione rispetto al tempo del cambio di contesto per avere delle performance ottimali

### Considerando cinque job sono in attesa di esecuzione con richieste di tempo di esecuzione previsti di 9, 6, 3, 5 e X sec. In quale ordine dovrebbero essere eseguiti per minimizzare il tempo di risposta medio? (La risposta dipende da X).

### Cinque lavori batch, A, B,C, D e E, arrivano al sistema contemporaneamente, con richiesta di esecuzione rispettivamente di 10, 6, 2, 4 e 8 min, priorità (assegnate dall’esterno) rispettivamente di 3, 5, 2, 1 e 4, dove 5 è la priorità massima e assumere che tutti i job siano CPU-bound.
Determinare per ognuno dei seguenti algoritmi di scheduling il tempo medio di turnaround, senza considerare l’overhead dovuto al cambio di processo.
- a. Round-robin
- b. Scheduling a priorità (senza prelazione)
- c. First-come first-served (eseguire nell’ordine 10, 6, 2, 4, 8).
- d. Shortest job first (senza prelazione)

### Assumere di usare un algoritmo di scheduling con aging con a = 1/2 per stimare i tempi di esecuzione. Se i precedenti quattro tempi di esecuzione, dal più vecchio al più recente, sono 40, 20, 40 e 15 ms, qual è la prossima previsione?
