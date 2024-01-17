# Memoria secondaria

La memoria secondaria generalmente risulta essere la memoria più lenta dell'intero sistema.
Inoltre, la memoria secondaria viene utilizzata molto spesso, quindi riuscire ad ottimizzare i tempi  di essa è molto importante.

Quando parliamo di memoria secondaria, parliamo solo di una categoria specifica dei **dispositivi di input e output**, i quali sono dischi, tastiere, chiavette, mouse, stampati, e così via. I dispositivi I/O possiedono un **controller**, cioè un componente elettronico, che fa da intermediario tra la CPU e le operazioni specifiche del dispositivo.

## Comunicazione tra CPU e controller I/O

La comunicazione tra CPU e il controller avviene principalmente tramite **I/O mappato in memoria**:
consiste nel riservare degli indirizzi nella memoria principale per la comunicazione con i dispositivi di I/O. Piuttosto che trattare i dispositivi come entità separate, la CPU li vede come se fossero parte della memoria principale del sistema.

Ciò permette di avere una **protezione maggiore sugli indirizzi**, ed una **semplificazione** della progettazione.
D'altra parte però **impedisce l'uso della cache** in quanto i dispositivi di I/O possono modificare valori direttamente in memoria principale senza informare la cache (la cache così non sarebbe aggiornata con i valori corretti)

Le interazioni con I/O avvengono tramite tecniche di cui abbiamo già parlato:
- busy waiting
- con interrupt
- con DMA

### DMA
Il DMA è sicuramente la scelta migliore in quanto svincola la CPU dal preoccuparsi di gestire i trasferimenti tra memoria principale e dispositivo di I/O.
Il DMA è un componente che una volta programmato dalla CPU si occupa di gestire i trasferimenti. 
La CPU inizialmente imposta i valori dei registri (dove trasferire, quanto trasferire, quanto trasferire alla volta, controlli, ecc...) del DMA per poter gestire in autonomia i trasferimenti.
Una volta completato il trasferimento il DMA informa la CPU tramite un **interrupt**.

La CPU una volta ricevuto l'interrupt può decidere se gestirlo oppure ignorarlo. Nel caso voglia gestire, deve interrompere le operazioni che sta svolgendo (salvandone lo stato), prelevare il codice per gestire la specifica interrupt ed eseguirlo. Infine la CPU riprende la sua normale esecuzione.

## Gerarchia software dei dispositivi di I/O

Abbiamo la seguente gerarchia software:
1. **il programma utente** da cui partiranno le chiamate I/O
2. **software del sistema operativo** (indipendente dai singoli dispostivi), serve per buffering, segnalazione di errori, uniformare i driver
3. i **driver** dei singoli dispositivi per gestire il corretto interfacciamento tra controller e sistema operativo
4. i **controller** che interagiscono con i dispositivi

![enter image description here](https://i.postimg.cc/k51zdQ3t/image.png)

### Buffering

I buffer sono molto importanti nella comunicazione tra IO e il sistema operativo. I buffer sono delle memorie che mantengono i dati che non sono ancora stati ricevuti dal destinatario.
La presenza di questi buffer permette di avere una comunicazione anche asincrona: quindi se il dispositivo di I/O comunica dei dati ma il sistema non è ancora pronto per riceverli (o viceversa) essi rimarranno in attesa nel buffer.

I buffer giocano un ruolo fondamentale anche quando c'è una comunicazione remota tra due dispositivi attraverso la rete. In questo caso si hanno molti buffer perché ci sono molte componenti in gioco che potrebbero non essere attivamente in ascolto e quindi si vuole garantire che i dati non vengano persi.

## Dischi magnetici a testina mobile

I classici Hard Disk, sono un insieme di **dischi magnetici** che ruotano ad alta velocità su un perno. Tali dischi sono divisi in **tracce** (gli "anelli" del disco).
Le tracce sono a loro volta divise in **settori**.
La stessa traccia su dischi diversi forma un **cilindro**


![enter image description here](https://i.ibb.co/9Hfcr3W/image.png)

È presente una **testina** per ogni disco, la quale può scrivere e leggere dati dal disco.

Quando lavoriamo con dischi di questo tipi ci sono 3 indici prestazionali da considerare:
1. tempo di *seek*: tempo impiegato dalla testina per spostarsi sul cilindro richiesto
2. latenza di rotazione: tempo di attesa per attendere che il disco giri per posizionare la testina sui dati interessati
3. tempo di trasmissione: tempo necessario perché tutti i dati passino sotto alla testina

![enter image description here](https://i.ibb.co/k1j1G18/image.png)

## RAID

Il raid è un sistema che permette di ottenere una ridondanza di dati su più dischi, allargare lo storage totale e in certi casi ottenere migliori performance.  
Da non confondere con il backup che è una copia dei dati fatta in una memoria differente da quella del sistema, con lo scopo di non perdere i dati in caso di malware o malfunzionamenti hardware.  
I raid si differenziano in base al loro funzionamento, e vengono riconosciuto mediante un numero progressivo:

-   **Raid 0**: i dati vengono distribuiti tra più dischi (operazione detta *striping*). ha il principale scopo di aumentare lo storage e mediante la parallelizzazione delle operazione ottiene più performance in scrittura e lettura. Necessita di almeno 2 dischi. Non è molto affidabile in quanto non tiene nessun dato di parità o ridondanza.
-   **Raid 1**: utilizza almeno 2 dischi in cui uno è la copia dell’altro (operazione detta *mirroring*), creando così una ridondanza dei dati, velocità di scrittura ridotta perché il dato deve essere scritto 2 volte, la lettura invece è quella del disco più veloce (dato che la lettura avviene contemporaneamente su più dischi. Un aspetto molto negativo è lo spazio totale: se hai 2 dischi da 10 terabyte e quindi un totale di 20 terabyte, un disco viene adibito alla copia quindi di spazio effettivo rimangono solamente 10 terabyte.
-   **Raid 2, Raid 3**: non sono più utilizzati.
-   **Raid 4**: il raid 4 necessita di almeno 3 dischi in cui un disco serve per la parità dei dati. Il dato viene spartito su tutti i dischi (tranne quello di parità), questo permette una buona ridondanza dei dati: se un disco viene danneggiato i dati al suo interno possono essere recuperati attraverso un’operazione di  *xor*  tra i due dischi rimanenti. Presenta un leggero peggioramento alla scrittura (causata dalla scrittura nel disco di parità) e un leggero miglioramento in lettura dato dalla parallelizzazione.
-   **Raid 5**: questo raid è una versione migliorata del raid 4: non è più presente un disco dedicato alla sola parità dei dati, ma la parità viene distribuita alternativamente in tutti i dischi.
-   **Raid 6**: necessita di almeno 4 dischi e ha la caratteristica di avere una doppia ridondanza, questo permette di essere un metodo estremamente affidabile. Questa doppia ridondanza causa però una scrittura abbastanza lenta.
- **Raid 10**: è una combinazione del raid 0 con il raid 1


## Scheduling

L'algoritmo di scheduling nella memoria secondaria serve a determinare in quale ordine soddisfare le richieste di accesso al disco.
Gli obiettivi generali sono di **aumentare il throughput** (richieste servite per unità di tempo) e di **minimizzare il tempo di risposta**

## FCFS

Algoritmo **First Come First Served** che utilizza la politica FIFO: il primo che arriva è il primo che viene servito.

Questo algoritmo è sicuramente equo, previene l'attesa infinita e ha un basso overhead. Il throughput è decisamente basso però. Non cerca di minimizzare i tempi di seek, quindi anche i tempi medi saranno piuttosto alti.

## SSTF

Algoritmo **Shortest Seek Time First** soddisfa prima le richieste che sono più vicine nel disco, che richiedono quindi lo spostamento minimo della testina.

Ha delle prestazioni migliori rispetto al FCFS, però **non è equo**, c'è possibilità di **attesa infinita** nel caso una richiesta sia molto distante nel disco e continuino ad arrivare richieste vicine.
I tempi di risposta sono molto variabili.

## SCAN

Questo algoritmo sceglie una direzione (verso l'interno o verso l'esterno), si dirige fino al limite del disco e durante ciò soddisfa tutte le richieste che incontra, poi fa lo stesso nell'altro verso (a mo' di stampante).

Non è equo in quanto le tracce centrali sono favorite. Permette l'attesa infinita se continuano ad arrivare richieste nella direzione in cui sta andando la testina.
Migliora però i tempi di attesa


## C-SCAN

L'algoritmo Circular-SCAN, simile allo SCAN ma quando raggiunge il limite interno del disco, fa un "salto" al limite esterno del disco senza servire richieste e riparte ad andare verso l'interno.

Peggior throughput e peggior tempi medi, però la variabilità dei tempi è migliore.
riduce la possibilità di attese infinite.

## F-SCAN

Simile a SCAN però pospone l'arrivo di ulteriori richieste fino a quando non fa il cambio di direzione.

Previene l'attesa infinita e migliora i tempi rispetto a SCAN
 
## N-Step SCAN

viene mantenuto un buffer che contiene $n$ richieste da servire. Viene fatto lo SCAN su queste $n$ richieste, una volta servite tutte passa alle prossime $n$ richieste.

Previene l'attesa infinita e migliora i tempi rispetto a SCAN

## LOOK

È un miglioramento dell'algoritmo SCAN. Al posto di raggiungere il limite del disco per cambiare direzione, cambia direzione quando serve l'ultima richiesta in quella direzione.

migliora il throughput.

## C-LOOK

È un miglioramento dell'algoritmo C-SCAN. Al posto di raggiungere il limite del disco per saltare all'inizio, torna all'inizio quando serve l'ultima richiesta in quella direzione.

migliora la variabilità dei tempi medi di attesa

## Ottimizzazione tempi di rotazione

Ci sono algoritmi che cercano di ottimizzare la latenza di rotazione dei dischi:

## SLTF

L'algoritmo **Shortest Latency Time First** in un dato cilindro serve prima le richieste che hanno la minima latenza di rotazione.

Non viene considerato l'ordine di arrivo, ma solo la posizione nella traccia: la più vicina sarà la prima servita.

## SPTF

L'algoritmo **Shortest Positioning Time First** serve prima le richieste che hanno il tempo di posizionamento minimo.

Il tempo di posizionamento è calcolato come: tempo di *seek* + latenza di rotazione

Buone prestazioni ma può causare attesa infinita (nei cilindri ai bordi del disco), perchè tenderà sempre a rimanere verso il centro dei dischi.

## SATF

L'algoritmo **Shortest Access Time First** serve prima le richieste che hanno il tempo di accesso minimo.

Il tempo di accesso è calcolato come: tempo di *seek* + latenza di rotazione + tempo di trasferimento

Ottimo throughput ma possibile attesa infinita.

Entrambi i metodo SPTF e SATF devono essere a conoscenza delle prestazioni del disco (conoscere i vari tempi) cosa che potrebbe non essere disponibile.

## Caching del disco

È possibile utilizzare la cache anche per la memoria secondaria. Teniamo in cache gli ultimi dati letti, dati che si prevede vengano richiesti, oppure la possiamo utilizzare come buffer per accumulare più dati da scrivere successivamente in una volta sola.
La cache rispetto al disco secondario può essere: in memoria RAM, Una cache a parte, oppure all'interno del controller del disco.

Anche in questo caso abbiamo le politiche **write-back** e **write-through**.

## Gestione degli errori

Durante la vita di un disco è possibile che dei settori si danneggino. Un primo approccio per gestire questo problema è quello di mantenere dei **settori di riserva**.

Abbiamo poi degli **errori sul cilindro**, cioè la testina non si posiziona nei luoghi desiderati provocando letture e scritture anomale, in questi casi è necessaria una ricalibrazione della testina.

### Memoria stabile

La **memoria stabile** del disco è un sottosistema che garantisce che i dati vengano scritti correttamente oppure non vengano scritti affatto.

Ciò viene garantito attraverso sistemi RAID.

Immaginando di avere due dischi identici D1 e D2

- scrittura stabile
	- Effettua n tentativi di scrittura su un blocco del disco D1
	- se fallisce tutti i tentativi, tenta su un blocco diverso.
	- se funziona allora copia il relativo blocco anche nel disco D2
- lettura stabile
	- effettua n tentativi di lettura sul blocco del disco D1
	- se fallisce tutti i tentativi, legge da D2


**Ripristino da crash**

vediamo i possibili modi in cui può avvenire una corruzione di dati tra D1 e D2 e come poter risolvere ogni caso


![enter image description here](https://i.ibb.co/k49yYtg/image.png)


Tutti i ragionamenti che abbiamo fatto sulla memoria stabile si basano sul fatto che è molto improbabile che entrambi i dischi provochino errori sequenzialmente



## Ottimizzazione delle prestazioni

Vediamo alcune tecniche per migliorare le prestazioni del disco.

### Deframmentazione

Durante la vita del disco si può verificare frammentazione generata dall'aggiunta e rimozione di dati.
**Deframmentare** significa riorganizzare i dati presenti nel disco, inserendo dati comuni in settori contigui, posizionare dati usati di frequenti o che si espandono vicino a zone libere.

Fare deframmentazione è una operazione molto dispendiosa in termini di tempo, ma migliora le prestazioni del disco.


### Compressione

La compressione è una tecnica utilizzata per far occupare meno spazio su disco ai file. Migliora i tempi di trasferimento dato che c'è meno roba da trasferire, è necessario però dell'overhead per la fase di compressione e decompressione.

### Copie multiple

I dati che vengono usati molto di frequente possono essere copiati in più parti del disco in modo da essere raggiungibili più facilmente indipendentemente dalla posizione della testina.
Migliora il tempo di ricerca ma è comunque necessario dell'overhead per tenere aggiornate tutte le copie.

### Anticipazione della testina

Quando il disco non sta lavorando è conveniente posizionare la testina dove c'è maggior probabilità che sia presente il prossimo dato da accedere. In alternativa è conveniente posizionare la testina al centro.
Se la previsione è sbagliata potrebbe esserci un calo significativo delle prestazioni. Ma se invece la previsione è corretta si ottiene un buon aumento nei tempi di risposta.

