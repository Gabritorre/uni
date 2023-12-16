# Caso di studio Linux

**Linux** è un sistema operativo che rappresenta una valida alternativa ai sistemi più famosi quali: Windows e macOS.

Più generalmente Linux rappresenta una famiglia di sistemi operativi che utilizzano il kernel linux, in cui la caratteristica comune è l'utilizzo e il sostegno al software **open source**, cioè software con codice sorgente disponibile liberamente per tutti.

I sistemi linux vengo già ampiamente utilizzati in ambito server, ma l'utilizzo nel privato sta aumentando di anno in anno.

Come detto Linux rappresenta una famiglia di sistemi operativi, gli elementi di tale famiglia sono dette **distribuzioni**. Dato che il codice sorgente è aperto a tutti, molti sviluppatori creano la propria distribuzione di linux.
Ogni distribuzione può variare dalla dotazione di programmi installati insieme al sistema (compresa l'interfaccia grafica), all'ottimizzazione specifica per l'hardware più moderno o più obsoleto, alla più o meno grande adesione ai principi del software libero, fino ai dettagli tecnici.

![enter image description here](https://i.postimg.cc/3Rr8FjQY/linux.png)

## Interfaccia

Su linux è molto comune utilizzare il terminale per operare sul proprio sistema. Nonostante ciò può essere comunque dotato di una interfaccia grafica, definita **a livelli**.

- il primo livello è il sistema grafico che si chiama **X Window System**, esso non è parte integrante del kernel ma è un normale processo. Esso rappresenta l'infrastruttura base per rappresentare informazioni grafiche (esempi comuni sono: X11, Wayland)

- al secondo livello abbiamo il **Window manager** che gestisce la posizione, dimensione e l'aspetto delle finestre (esempi comuni sono: i3, Openbox, Awesome)

- al terzo livello abbiamo il **Desktop environment** che racchiude l'insieme di pannelli, icone tempi, applicazioni che rendono l'interfaccia grafica del sistema coerente (Esempi comuni sono: GNOME, KDE, Xce)


## Architettura

Linux ha un kernel **monolito**, con **componenti modulari**.
con componenti modulari si intende che porzioni di codice che possono essere caricate o rimosse dal kernel mentre il sistema è in esecuzione, senza la necessità di riavviare l'intero sistema (un esempio sono i driver).

Il kernel è composto principalmente da:
- gestore dei processi
- gestore della comunicazione tra processi
- gestore della memoria
- gestore del file system (il *virtual file system* fornisce una interfaccia unica per più file system)
- gestore di dispositivi I/O
- gestore della rete

![enter image description here](https://i.ibb.co/92P8vGV/image.png)


## Gestione dei processi

Su linux i **processi e i thread** vengo chiamati **task**, e lo stato interno di un task (il descrittore) viene racchiuso un una struttura chiamata **task_struct**.

Il gestore mantiene i riferimenti ai task tramite l'uso di una **tabella hash** e una **lista circolare doppiamente linkata**.

Nella seguente immagine è rappresentato il ciclo di vita di un task:

![enter image description here](https://i.ibb.co/4j1FySY/image.png)
Una cosa importante da annotare è che:
Il tempo viene diviso in epoche, e, in ogni epoca, ad ogni processo viene assegnato il proprio intervallo di tempo.
Se il processo finisce il suo intervallo di tempo, passa allo stato *expired* fino a quando non inizia la nuova epoca.

### Creazione di processi

Su linux abbiamo due principali modi di creare nuovi processi:
- `fork` quando un processo esegue una `fork` viene creato un processo figlio che condivide lo spazio di indirizzi del padre. Solo quando viene fatta una modifica al figlio allora viene fatta una copia separata dello spazio degli indirizzi diventando effettivamente processi indipendenti (tecnica detta *copy-on-write*)
- `clone` permette di specificare fin da subito di specificare in modo più dettagliato quali risorse condividere o non condividere tra i processi padre e figlio.

## Scheduling

Ogni task ha una propria priorità (dinamica).
La priorità è un valore che va da [0 ... 139] dove:
- da [0 ... 99] è la priorità riservata ai task real time, in cui 0 = priorità massima e 99=priorità minima
- da [100 ... 139] è la priorità riservata agli altri processi, in cui 100=priorità massima e 139 priorità minima.
	Spesso viene utilizzata una scala di misura diversa che va da [-20 ... 19] -20 = priorità massima e 19=priorità minima

È presente un vettore di priorità (chiamato *run queue*) in cui ogni elemento di tale vettore è un puntatore ad una lista di processi con la stessa priorità.
Le liste di processi vengono gestiti tramite **round robin**

![enter image description here](https://i.ibb.co/kGdSzJD/image.png)

Lo scheduler esegue prima gli elementi in testa alla lista a livello di priorità maggiore.
Generalmente i task IO-bound hanno una priorità alta perchè richiedono potenzialmente poco tempo di CPU

Per evitare di avere **attesa infinita** si usa un sistema ad epoche: all'interno di una epoca ogni task deve aver avuto il suo tempo di CPU almeno una volta.
Per implementare questa cosa abbiamo bisogno di una lista aggiuntiva rispetto alla lista *active*, utilizziamo quindi una nuova lista *expired* che contiene i processi che hanno già esaurito il loro tempo di CPU all'interno dell'attuale epoca.
Una volta che tutti i task sono nello stato *expired* comincia una nuova epoca.

## Gestione della memoria

Linux fa uso esclusivamente di **paginazione multilivello** a 3 livelli (in alcune versioni si utilizzano 4 livelli), tali livelli sono chiamati:

- directory globale di pagina
- (directory alta di pagina, presente solo se abbiamo 4 livelli)
- directory intermedia di pagina
- tabella delle pagine

Esempio di traduzione di indirizzo con paginazione a 3 livelli
![enter image description here](https://i.ibb.co/vqmHMpS/image.png)


### Memoria fisica

La memoria fisica è divisa in 3 zone:
- **memoria DMA** (i primi megabyte di memoria) utilizzata per l'hardware legacy
- **memoria normale** (centinaia di megabyte) utilizzata per i dati utente e i dati del kernel
- **memoria alta** memoria per i processi utente e altri dati del kernel meno importanti

per nuovi processi si cerca generalmente di allocare page frame in memoria alta. Se non possibile si utilizza la zona normale, altrimenti si utilizza la memoria bassa.

è presente un **memory pool**, cioè una area riservata per processi del kernel o per moduli driver. Questa area deve essere sempre disponibili per evitare *page fault* critici.

Le pagine utilizzate di recente vengo messe in **cache** che utilizza la politica **write-back**.

### Sostituzione di pagina

La sostituzione delle pagine avviene tramite una variante dell'algoritmo dell'orologio, per ogni zona utilizza due *linked list*:
- lista attiva: contiene le pagine riferite di recente (working set)
- lista inattiva: contiene le pagine riferite meno di recente

Questa variante permette di evitare di sostituire pagine utilizzate di recente


### Area di swap

Viene utilizzata un'area di swap, cioè una parte del disco secondario viene utilizzata per contenere pagine che sono state modificate ma che non sono state utilizzate di recente.
Il processo demone che si occupa dello swapping è chiamato *kswapd*


## File system

Linux utilizza un **Virtual file system** (VFS) come interfaccia univoca per tanti tipi di file system diversi. Il nucleo quindi può parlare a più file system comunicando sempre nello stesso modo con questa interfaccia.

Il VFS permette quindi sia al kernel che all'utente di avere un livello di astrazione maggiore rispetto ai file, permettendo facilmente di aggiungere file system, di nascondere i dettagli di accesso ai file e fornendo una interfaccia univoca per ogni file.


![enter image description here](https://i.ibb.co/S3jthcc/image.png)

Tutte le chiamate di sistema che fanno i processi passano attraverso il VFS, il quale si occuperà di richiamare la routine corrispondente al file system reale.
![enter image description here](https://i.ibb.co/KmB6FQp/image.png)


 
