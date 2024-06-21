# Introduzione ai sistemi operativi

## Definizione di sistema operativo

Il computer moderno è un sistema composto da molte parti hardware e scrivere software che tenga conto di tutte le parti è a dir poco impossibile, per questo è fondamentale il **sistema operativo** cioè un software (o meglio un insieme di processi) che si occupa principalmente di due cose (pensandolo ad alto livello)

1. **gestire le risorse**: quindi far comunicare e gestire le componenti hardware, e ovviamente le risorse software le quali richiedono **tempo e spazio** che il sistema operativo deve gestire
2. **essere visto come una macchina astratta**: quindi fornire all'utente un'interfaccia che permetta di comunicare semplicemente con il computer (**trasparenza**) senza preoccuparsi delle operazioni complesse che fa la macchina (**mascheramento**).

Nella seguente immagine si vede che il sistema operativo fa da cuscinetto tra l'hardware e il software

![](https://i.ibb.co/TBkYbbD/achitecture.png)

Distinguiamo la differenza tra programma e processo:

- **Programma**: è il codice eseguibile che sta in memoria di massa
- **Processo**: è il programma che è attualmente in esecuzione sulla CPU

Quindi eseguire un programma significa generare un nuovo processo che esegue le istruzioni presenti nel programma

Il sistema operativo ha 2 modalità di esecuzione dei processi che differiscono in base ai permessi che deve avere un processo:

- **user mode**: permessi limitati, generalmente usato per i programmi dell'utente.
In questa modalità **non è possibile** fare operazioni di I/O, accedere liberamente alla memoria, e ovviamente passare liberamente alla kernel mode.
- **kernel mode**: permessi totali, i processi del sistema operativo utilizzano questa modalità

generalmente si tende a dare ad un processo utente i minimi permessi necessari per essere eseguito.


I Principali componenti di un sistema operativo sono:

- Processor scheduler
- Gestore della memoria
- Gestore della I/O
- Gestore della Interprocess communication (IPC) (comunicazione dei processi)
- Gestore del File system

Le proprietà che il S.O. deve riuscire ad ottenere
- Efficienza
- Robustezza
- Scalabilità
- Estensibilità
- Portabilità
- Sicurezza
- Protezione
- Interattività
- Usabilità

## Storia dei sistemi operativi

la storia dei sistemi operativi si suddivide in 5 generazioni:

### Gen 1

- Periodo 1945 - 1955
- Non esiste ancora il concetto di sistema operativo. In questi anni si sviluppano le prime macchine (MARK 1 che funzionava a relè, ENIAC a valvole termoioniche, EDVAC su transistor).
- Limiti della I generazione: affidabilità scarsa, ruoli non distinti, complessità di uso, lentezza

### Gen 2

- Periodo 1955 - 65
- Nascono i primi linguaggi a più alto livello come assembly e fortran
- Nasce il concetto di **monoprogrammazione** cioè eseguire un **job** alla volta (con job si intende un programma o un insieme di programmi, che sono memorizzati in memoria)
- C'è una netta separazione dei ruoli (operatori, costruttori, programmatori...)
- Nascono le versioni primordiali del sistema operativo chiamati *monitor*
- Veniva usato un **sistema di elaborazione batch**:
 ![enter image description here](https://i.ibb.co/B3hcbYS/batch.png)
	- a. il programmatore scriveva il programma in fortran o assembly su carta, poi copiarlo su schede perforate
	- b. vari gruppi di schede perforate, quindi più di un job (per questo definito sistema batch) venivano dati ad un calcolatore (1401) in grado di trasferire il contenuto delle schede su un nastro magnetico
	- c. il nastro veniva riavvolto e portato ai calcolatori (7094) dove veniva caricato prima un programma (l'antenato dei sistemi operativi) in grado di leggere i job ed eseguirli uno dietro l'altro
	- d. venivano eseguiti i job e il risultato di ogni job veniva salvato su un ulteriore nastro
	- e. dopo che ogni job ha dato il proprio risultato si estrae il nastro e si portava nella macchina 1401
	- f. qui il nastro veniva letto e si stampavano i risultati dei vari job

Durante l'esecuzione di un sistema batch la memoria si comportava nel seguente modo:

![enter image description here](https://i.ibb.co/G9F2Rkw/memoria-batch.png)


### Gen 3

- Periodo 1965 - 80
- nasce la **multiprogrammazione**: quando un job richiede delle operazioni di I/O la CPU lascia il job in mano alle unità periferiche e si occupa di eseguire un altro job per non perdere tempo, inoltre la memoria viene partizionata per ospitare vari job contemporaneamente
- Vengono sviluppati i circuiti integrati
- Nascono altri linguaggi ad alto livello tra cui **C**
- Si sviluppano degli algoritmi di CPU scheduling (che eseguirà il sistema operativo)
- Nascono i **sistemi timesharing**
- Nascono i sistemi UNIX e lo standard POSIX per rendere compatibili le diverse versioni di UNIX
- Nasce internet

#### Sistemi timesharing

i sistemi timesharing sono delle varianti della multiprogrammazione in cui più utenti si collegano alla stessa macchina tramite un terminale. La macchina cerca di soddisfare i job richiesti a turno, dando l'impressione ad ogni utente di possedere una macchina unicamente per sè.

In questo meccanismo vengono introdotti i concetti di:
- **cambio di contesto**: cioè ogni volta che si cambia job, il sistema operativo deve salvare le informazioni di quel job e prepararsi ad far partire il job successivo ripristinando eventualmente delle informazioni
- **protezione**: ogni job doveva essere indipendente e quindi non doveva leggere o scrivere nelle memoria di altri job
- **memoria virtuale**: si ingannano i job di possedere più memoria di quella realmente disponibile, e non si fa direttamente riferimento agli indirizzi fisici della memoria per agevolare la protezione


### Gen 4

- Periodo 1980 - oggi
- Si sviluppano i **personal computer** e le **workstation** con GUI sempre più semplici da utilizzare
- Trasferimenti di dati tramite la rete sempre più frequente
- Vengono sviluppati tantissimi sistemi operativi
- nasce il modello **client-server** in cui i client fanno delle richieste che il server elabora e poi restituisce un risultato
- cloud computing
- programmazione multithread e programmazione ad oggetti
- Si forma una suddivisione tra software open source e closed source
- Software utilizzabili direttamente su internet


### Gen 5

- Periodo 1990 - oggi
- sempre più forte presenza di dispositivi *mobile* che possiedono una potenza di calcolo molto elevata
- IoT

## Componenti HW gestite dal sistema operativo

Semplificando possiamo dire che un computer è composto da componenti hw quali: CPU, Memoria e periferiche di I/O che comunicano tra loro attraverso un BUS (nella realtà è decisamente più complesso di così)

### CPU

La CPU (Central Processing Unit) è il componente il cui compito è generalmente quello di recuperare delle istruzioni dalla memoria, decodificarle ed eseguirle.

La CPU è dotata di **registri** cioè delle memorie su cui può trasferire dei dati ed eseguire operazioni su di essi.
Tre registri particolari sono:
- il **PC** (Program Counter) il quale contiene l'indirizzo di memoria della prossima istruzione da eseguire.
- lo **ST** (Stack Pointer) il quale punta alla cima dello stack (una area di memoria RAM contenente chiamate a funzioni variabili, parametri delle funzioni e altre cose...)
- il **PSW** (Program Status Word) in cui abbiamo 1 bit per vedere se il processo è il Kernel mode o in User mode, e altri bit per il controllo. Importante per chiamate al sistema operativo e operazioni di I/O. 
Per passare **dalla user mode alla kernel mode** esiste una istruzione chiamata *TRAP*, la quale da il comando al sistema operativo per fare delle determinate operazioni per poi tornare in user mode.

una CPU può contenere al suo interno un coprocessore destinato all'uso grafico per esempio.

Il processore ha il compito importante di fare **context switch**: spesso i processi vengono interrotti per far partire altri processi, quando accade ciò la CPU deve salvare lo stato dei registri del processo attuale e prepararsi per il nuovo processo, quando il vecchio processo torna ad essere eseguito i registri vengono ripristinati.

Le CPU odierne funzionano tramite una **pipeline** cioè un meccanismo che permette alle varie fasi di una istruzione (fetch-decode-execution-....) di essere eseguite in parallelo su più istruzioni.
Permettono di avere ancora più parallelismo le CPU **superscalari** in cui delle istruzioni vengono eseguite effettivamente contemporaneamente assicurandosi che il risultato sia lo stesso di una esecuzione in serie.

Vediamo anche i concetti di **multicore e multithreading**:
- Una CPU multicore significa che presenta più di una unità di calcolo chiamati **core** ogni core ha i suoi registri, la propria cache L1 (e anche L2 in alcune architetture), e altri componenti. Questo permette di eseguire più processi in parallelo dato che ogni core si occupa di una esecuzione indipendente.
- Il concetto di multithreading si riferisce al fatto che un core può gestire, generalmente, due thread (cioè un flusso di istruzioni appartenenti ad un processo più grande) contemporaneamente **condividendone le risorse**, questi due thread vengono eseguiti alternativamente ad una velocità talmente alta da simulare una esecuzione simultanea

### Memoria

Per non fare da *bottleneck* al processore la memoria dovrebbe essere estremamente veloce, capiente e a basso costo. Dato che non è possibile soddisfare tutti i requisiti si è optato per fare una gerarchia di memorie

![enter image description here](https://i.ibb.co/nBwyw4B/memory-hierarchy-drawio.png)

- **registri** i registri sono zone di memoria volatile ad altissima velocità posizionati all'interno del chip del processore, il problema è che sono pochi e piccoli (generalmente 32 registri grandi 32 bit oppure 64 registri grandi 64 bit)
- **cache** la cache è una memoria volatile che a sua volta viene divisa in 3 livelli:
	- cache L1: è la più veloce e più vicina all'unità di calcolo delle tre, ma è anche la più piccola (pochi KB) ne è presente una per ogni core.
	- cache L2: è leggermente più lenta e distante della L1 me è un po' più capiente (pochi MB), in alcune architetture è condivisa tra i core mentre in altre è separata per ogni core.
	- cache L3: è la più lenta e distante delle tre ma è la più capiente (decide fino a toccare le centinaia di MB), condivisa tra i core.
Il funzionamento di utilizzo della cache è il seguente: quando la CPU richiede un dato viene prima cercato nella cache (dalla L1 alla L3) nel caso venga trovato si verifica un **cache hit** quindi il dato viene preso in tempi brevissimi, se non è presente invece va cercato nella memoria RAM (**cache miss**) il ché peggiora di non poco i tempi, Il dato poi viene messo in cache per essere pronto in caso di bisogno nel breve tempo.

	Si distinguono anche 2 tipi di cache in base alla loro funzione: abbiamo la **cache dati** e la **cache istruzioni** che sono ottimizzate per il loro scopo.

- **Memoria principale** è anche chiamata Memoria RAM (Random Access Memory) è anche questa è una memoria volatile decisamente più lenta della cache ma le sue dimensioni girano intorno a svariati GB (8,16,32,...).
In questa è presente sia il **sistema operativo** che è in esecuzione e **ogni processo** che ha la propria porzione di memoria definita da due indirizzi chiamati **base** e **limit** in modo da evitare che un processo acceda ad un'area di memoria che non è di sua proprietà. In alcuni casi più processi utilizzano lo stesso set di dati oppure lo stesso processo lavora su set di dati diversi, in questi casi si cerca di suddividere ulteriormente *base* e *limit* in modo da non duplicare inutilmente le zone di memoria

	Il sistema operativo si occupa di assegnare i valori di **base e limit** ai corrispettivi registri nella CPU (se fosse il processo stesso ad assegnarli potrebbe accedere liberamente a zone di memoria che su cui non dovrebbe accedere)

- **Dischi rigidi** Nei dischi rigidi comprendiamo i classici **Hard Disk** (conosciti con la sigla HDD, Hard Disk Drive) che sono dischi magnetici (non volatili) composti appunto da dei dischi suddivisi in settori che contengono dei dati su cui una testina magnetica si muove per poter leggere o scrivere i dati. Le dimensioni dell'HDD variano da centinaia di GB a qualche TB, ma sono decisamente lenti. Soffrono di problematiche dovute a dove fisicamente sono posizionati i dati, soffrono le vibrazione intense, emettono rumore e avendo parti in movimento consumano anche relativa energia.

	Un'evoluzione degli Hard Disk sono gli SSD (Solid State Drive) che non sono più magnetici ma elettrici e quindi risultano essere decisamente più veloci degli HDD ma non raggiungono comunque le velocità della memoria RAM, in generale risolvono gran parte dei limiti dei classici Hard Disk.


- Esistono altri particolari tipi di memorie come:
	- ROM (Read Only Memory): una memoria non volatile, molto veloce ma è scrivibile una solo volta e viene fatta dal costruttore (è solo leggibile). Spesso usata per contenere codice per l'avvio dei computer.
	- EEPROM (Electrically Erasable Programmable ROM) e le memorie flash: anch'esse non volatili ma sono riscrivibili.
	- CMOS: è una memoria volatile di solito affiancata da una batteria (che serve a non cancellare il contenuto una volta spento il PC), e viene utilizzata per mantenere le informazioni del BIOS di un sistema (cioè il primo software che viene eseguito all'accensione del PC, il quale fa un controllo sui componenti HW e avvia il sistema operativo)

### Dispositivi di Input/Output

Generalmente un dispositivo di I/O presenta due parti: un **controller** e il **dispositivo stesso**, il controller è un chip (una CPU molto più semplificata) che sa precisamente come funziona il dispositivo e offre al sistema operativo un modo semplificato per interfacciarsi con il dispositivo, così sarà il controller ad occuparsi dei dettagli mentre il sistema operativo da un comando ad "alto livello". Il sistema operativo però deve essere in grado di comunicare a dovere con il controller del dispositivo, per questo è necessario un software chiamato **driver** che si occupa di questo.
Un **driver** è uno strato software che si posiziona tra il sistema operativo e il dispositivo che permette ai due di comunicare al meglio. Un driver è diverso per ogni sistema operativo.

#### Gestione dell'I/O

Un'aspetto importante è la gestione delle operazioni di input e output tra il dispositivo e la CPU. Esistono principalmente tre tecniche per gestire le operazioni:

1. **Polling** (busy waiting): Quando viene richiesta una operazione di I/O la CPU rimane in attesa del termine dell'operazione continuando ad interrogare il dispositivo per sapere se ha finito. (metodo non ottimale)
2. **interrupt**: Quando viene richiesta una operazione di I/O la CPU si mette a fare altro, una volta che l'operazione è terminata sarà il dispositivo ad avvisare la CPU la quale gestirà l'interruzione
3. **DMA**: (Direct Memory Access) è un chip a parte che si occupa di gestire le operazioni di I/O permettendo alla CPU di eseguire altri compiti nel mentre, risultando più efficiente. La CPU si occupa solo di dire quanto e dove trasferire i dati, del resto se ne occupa il DMA che comunicherà alla CPU il termine delle operazioni.

### Bus

Un bus non è altro che un collegamento elettrico capace di trasportare dei dati da un punto A ad un punto B all'interno dei circuiti stampati, ne sono un esempio i collegamenti PCIe, USB, SATA. Vengono quindi utilizzati per far comunicare i componenti di un computer tra loro


## Tipi di sistemi operativi

Vediamo alcuni tipi di sistemi operativi in base all'elaboratore su cui operano

### OS per mainframe

Con mainframe si intendono quegli elaboratori centralizzati molto grandi (anche alcuni metri) generalmente utilizzati dalle aziende. Il sistema operativo in questo caso deve essere in grado di gestire grandi quantità di operazioni I/O, richieste di consultare una grossa base dati, eseguire un grosso numero di piccoli task

### OS per server
Un server può essere sia un normale computer, una workstation, oppure un mainframe, e il sistema operativo deve essere in grado di gestire un gran numero di utenti (i client), deve gestire la condivisione delle risorse (HW e SW) in genere si ha un insieme di server per spartire il lavoro e il collegamento avviene tramite internet.

### OS multiprocessore
In questo caso il sistema operativo deve essere in grado di gestire più CPU contemporaneamente e quinti tanti calcoli in parallelo.

### OS per PC
In questa categoria ci sono i sistemi operativi che conosciamo di più, sono general purpose

### OS per real-time
Sistemi operativi che sono operano su dispositivi di automazione dove il tempo per completare un task è fondamentale

### OS per embedded
Il sistema operativo deve lavorare su risorse limitate, deve gestire bene l'energia

### OS per smart-card
sono dei sistemi operativi molto semplici che vengono inseriti nelle carte con dei chip piccolissimi, con una limitata alimentazione e possono fare una sola funzione.


## Ulteriori concetti base di un sistema operativo

### Interrupt e eccezioni

-   Si parla di  **eccezioni** (o segnali)  quando la causa è interna al processore come errori aritmetici, utilizzo di funzioni indefinite o altre sviste di programmazione (sono tendenzialmente software)
-   Si parla di  **interruzioni**  quando la causa è esterna al processore come l’interazione con dei dispositivi IO (sono tendenzialmente hardware)

### Bootstrap

La fase di **bootstrap o boot** rappresenta la fase di avvio di un computer quindi l'avvio inizialmente del BIOS oppure EFI nei dispositivi più moderni che si occupa di fare un controllo delle componenti hardware, e carica in memoria principale le istruzioni per far effettivamente partire il sistema operativo. Successivamente avviene l'esecuzione dei programmi utente


### Processo
Come abbiamo già detto un processo è un programma in esecuzione sulla CPU.
Ogni processo possiede:
- un proprio spazio di indirizzamento in memoria dove è contenuto il programma, i suoi dati, lo stack.
- un descrittore che contiene delle informazioni utili al sistema operativo riguardo al processo
- un UID (User Identification) cioè un ID che si riferisce all'utente che ha eseguito il processo (in ambiente linux "sudo" è un UID)
- un PID (Process IDentifier) cioè un ID che permette di riconoscere un processo dagli altri

Il sistema operativo contiene le principali informazioni dei vari processi in una tabella (*process table*)

Un processo è in grado di generare processi figli, che a loro volta possono generare altri processi figli.

Spesso i processi devono cooperare e quindi sono necessari dei modi per far comunicare i processi tra loro (IPC, InterProcess Communication)

Tra i processi si possono verificare anche degli stalli che che vanno gestiti: o ignorandoli, o prevendendoli, oppure sistemarli dopo che sono accaduti.


### File System

Il file system descrive come sono organizzati i file nella memoria secondaria, stabilisce come organizzare i vari file in una gerarchia di cartelle (directory), dove con cartella si intende un insieme di file o altre cartelle a loro volta. Di solito viene usata una rappresentazione ad albero per disegnare il file system.

![enter image description here](https://i.ibb.co/V9GqpXw/file-system.png)

Il sistema operativo permette di navigare in questo file system, effettuando dei cammini nell'albero.
Ad esempio /Docenti/Prof.Brown/Corsi/CS101 è un cammino che ci porta alla cartella "CS101"

chiamiamo **working directory** la cartella su cui ci troviamo.

Ogni dispositivo di memoria secondaria ad esempio una chiavetta USB ha il proprio file system ed è possibile attaccare il suo albero a quello del sistema per poterlo esplorare, questa operazione è detta **montare un file system**

Un concetto importante alla base dei sistemi UNIX è che ogni dispositivo viene trattato come un file, in questo modo si standardizza il modo di interagire con i dispositivi di I/O trattandoli nello stesso modo che si trattano i file. Inoltre chiamiamo **pipe** uno pseudo-file che serve per far comunicare due processi tra loro. In altre parole si ingannano i processo facendogli pensare di comunicare con un file mentre stanno comunicando con un altro processo.


### Buffer e spool

Oltre alla memoria cache che abbiamo già visto c'è un'altra memoria particolare che è il **buffer** cioè una memoria temporanea che contiene i dati delle operazioni di I/O asincrone (quindi dove il ricevente può anche non essere attivo al momento, ma può comunque leggere il dato dal buffer più tardi)

lo **spool** (Simultaneous Peripheral Operations On Line) è una tecnica di buffering utilizzata tra un processo e una periferica lenta, in modo tale che il processo non deve aspettare attivamente


### Chiamate a sistema

le chiamate a sistema o *system call* sono delle chiamate che un processo fa al sistema operativo per fare delle operazioni specifiche che il processo non può fare ma il sistema operativo sì.
Praticamente tutti i comandi di input/output di un programma sono delle chiamate a sistema per il sistema operativo, il quale, dopo aver terminato l'operazione che gli è stata chiesta fa riprendere il normale flusso del processo.

## Struttura di un sistema operativo

la struttura del sistema operativo detta anche **l'architettura di un sistema operativo** deve gestire la complessità proveniente dalla gestioni di molti servizi e dal supporto di hardware e software diverso.

Abbiamo 3 diversi tipi di architettura:

- **Architettura monolitica**: In questa architettura il sistema operativo è programmato come un'insieme di procedure ognuna delle quali può chiamare una qualsiasi altra funzione. questo tipo di architettura presenta una struttura minimale a 3 livelli generalmente:
	- un programma principale
	- un insieme di procedure che eseguono le chiamate di sistema
	- un insieme di procedure di utilità che aiutano le chiamate a sistema

	questa architettura è efficiente però in caso di errori è difficile capire chi lo abbia generato.

	![enter image description here](https://i.ibb.co/H75Cy71/monolitica.png)


- **Architettura a livelli**:  i componenti vengono organizzati in livelli i quali possono comunicare solo con i livelli adiacenti. Una richiesta da parte del processo deve passare tutti i livelli per essere completata, questo riduce un po' l'efficienza l'organizzazione del sistema operativo è decisamente migliore

	un esempio di architettura a livello:
![enter image description here](https://i.ibb.co/47mm8gD/a-livelli.png)

- **Architettura microkernel** fornisce delle funzionalità limitate per la gestione dei processi e della memoria in modo da mantenere leggero il kernel ma allo stesso tempo è facilmente scalabile e modulare.
Il kernel in questo caso ha il principale compito di smistare i messaggi fra i processi.
![enter image description here](https://i.ibb.co/ct8cCNc/microkernel.png)


# Processi e thread


Un **processo** è un **programma in esecuzione sulla CPU**

In un sistema con CPU a singolo core abbiamo un **pseudo-parallelismo** dei processi in quanto la CPU in un istante di tempo lavora solo su un processo alla volta ma nell'arco di più tempo la CPU continua a cambiare processo in modo da illudere una esecuzione parallela su più processi

Mentre in un sistema a CPU con più core (sistemi multiprocessore) abbiamo una effettiva **esecuzione parallela** su più processi in contemporanea.

Un Processo ha un proprio **spazio di indirizzamento** diviso in:
- sezione del **testo**: dove risiede il codice da eseguire
- sezione dei **dati**: dove sono salvate le variabili e la memoria allocata dinamicamente
- sezione dello **stack**: dove vengono salvate le istruzioni, e le funzioni con le proprie variabili locali

## Modello a processi

Possiamo rappresentare il software come una sequenza di processi che vengono eseguiti in coda uno dopo l'altro.

Nel seguente modello vediamo come 4 processi indipendenti in memoria vengono eseguiti dalla CPU uno alla volta e continuando a passare da un processo all'altro anche se l'attuale processo non è terminato (context switch).
![enter image description here](https://i.ibb.co/18rP5k5/modello-a-processi.png)


## Gestione dei processi

Il sistema operativo può svolgere alcune funzioni per gestire i processi tra cui:

- Creazione di processi
- Distruzione di processi
- Sospensione di processi
- Ripresa di processi
- Modifica della priorità di un processo
- Blocco di processi
- Risveglio di processi
- Dispatching di processi
- Interprocess communication (IPC)

### Creazione di un processo

Un processo può venir creato nei seguenti casi:

1. in fase di inizializzazione del sistema
2. per una chiamata di sistema
3. su richiesta di un utente
4. l'inizio di un job batch

I processi possono essere in ***foreground*** quindi attivi oppure in ***background***:

- quelli in *foreground* sono spesso processi che interagiscono con l'utente e soddisfano richieste
- quelli in *background* sono spesso dei processi del sistema operativo che non interagiscono attivamente con l'utente ma svolgo comunque compiti importanti per far funzionare il sistema come si deve. La maggior parte di questi processi sono in continua attesa che un determinato evento accada, questi processi sono chiamati **deamon**

In Unix si usa la chiamata a sistema **fork** per creare un clone figlio che è la copia del processo chiamante e quindi il contenuto dello spazio di indirizzamento del padre viene **copiato** in un nuovo spazio di indirizzamento che viene assegnato al figlio. poi è pratica comune eseguire il comando *execve* sul processo figlio per fargli eseguire un programma specifico. 

Il corrispettivo Windows è **CreateProcess** che crea il processo e carica direttamente il nuovo programma al processo, in questo caso lo spazio di indirizzamento del figlio è diverso fin da subito (non c'è nessuna copia come in Unix)

In entrambi i casi dopo la creazione del processo e il caricamento del programma il processo padre e figlio hanno **spazi di memoria distinti** anche se in alcuni casi è possibile che padre e figlio condividano delle risorse.


### Terminazione di un processo

Un processo può terminare per via delle seguenti ragioni:

1. uscita normale (volontaria)
2. uscita con errore (volontaria)
3. terminato per errore fatale (involontario)
4. terminazione forzata da un altro processo (*killed*, involontario)

Quando un processo padre viene terminato involontariamente, il sistema operativo può decidere se terminare anche i figli oppure lasciarli continuare.

In Unix esiste una gerarchia tra i processi dove il processo *init* è la radice, mentre in windows tutti i processi sono uguali. Su windows però il padre di un processo possiede un *handle* per gestire il figlio, questo *handle* è possibile passarlo ad altri processi.


### Ciclo di vita di un processo


Un processo possiede un ciclo di vita, cioè dal momento che viene creato al momento in cui viene distrutto può assumere diversi **stati**:

- **Running** (esecuzione): il processo è in esecuzione sulla CPU.
- **Ready** (pronto): il processo è pronto per essere eseguito ma attende che il sistema operativo lo metta in esecuzione
- **Blocked** (bloccato): il processo è in attesa che si verifichi un evento prima di poter continuare la sua esecuzione

Il sistema operativo possiede una lista dei processi **ready** e **blocked**

Possiamo individuare 4 transazioni tra gli stati appena descritti:

![enter image description here](https://i.ibb.co/sQ797KJ/life-cycle.png)

1. Il processo si blocca in attesa di un evento
2. lo scheduler dei processi seleziona un altro processo da eseguire e l'attuale processo viene messo in *ready*
3. Il processo viene scelto dallo scheduler per essere eseguito (fase chiamata **dispatching**)
4. l'evento si è verificato e il processo è pronto a continuare la sua esecuzione

ovviamente sono presenti due ulteriori stati che rappresentano la **fase di creazione** del processo, che poi si sposterà nello stato pronto. **Lo stato terminazione** quando il processo ha finito le sue operazioni.

### PCB

Il sistema operativo possiede una tabella chiamata **process table** che contiene i **PCB** (Process Control Block) di ogni processo in vita al momento, viene anche chiamato **descrittore del processo**.

Il PCB contiene le informazioni del processo quali: Program Counter, Stack Pointer, il PID, lo stato dei file, eventuali puntatori a padre e figli,  e tutta una serie di informazioni utili per lo scheduler quando deve far passare il processo da *ready* a *running* e vice versa


![enter image description here](https://i.ibb.co/CVKTckK/tabella-processi.png)



### Sospensione di un processo

Un processo può essere mandato in uno stato di **sospensione** che non corrisponde a nessuno dei 3 stati precedenti. Quando è sospeso, il processo viene messo da parte momentaneamente, questo può essere utile per rilevare eventuali problemi di sicurezza oppure in fase di debugging.

La sospensione può essere richiesta dal processo stesso oppure da un altro processo, in ogni caso deve essere un altro processo a farlo ripartire


![enter image description here](https://i.ibb.co/XzK5K9C/sospensione.png)


### Context switch

il context switch è un'operazione che fa lo scheduler e che consiste nello scegliere il prossimo processo da eseguire.

Questa operazione è divisa in 2 fasi:

1. la prima è di salvare lo stato dell'attuale processo in esecuzione, in modo da sapere da che punto riprendere la sua esecuzione in futuro
2. la seconda è caricare le informazioni del nuovo processo da eseguire

durante questa operazione la CPU rimane libera, quindi bisogna minimizzare il tempo necessario per effettuare lo scambio per evitare di perdere troppo tempo. 



### Interrupts

Gli **interrupts** sono dei segnali che abilitano il software a rispondere a degli avvisi hardware. Gli interrupt possono essere sincroni e asincroni:

- **sincroni** se il segnale è derivato direttamente dalle operazioni del processo
- **asincroni** se il segnale non è derivato dalle operazioni fatte dal processo

Dopo aver ricevuto un interrupt il processore completa l'istruzione corrente e poi interrompe il processo.

viene dato il comando al sistema operativo in base al tipo di interrupt viene scelto un **gestore di interrupt** in quale deciderà cosa fare.
Una volta che il gestore termina viene ripresa l'esecuzione del processo che era stato momentaneamente sospeso (oppure un processo successivo)

Gli interrups sono solitamente collegati a fattori esterni al processore. Per riferirsi a segnali generati all'interno del processore si parla di **eccezioni**


### InterProcess Communication

Il sistema operativo offre dei meccanismi di comunicazione tra i processi.

Abbiamo una comunicazione tramite scambio di messaggi che può essere:

- una comunicazione in cui i messaggi vengono trasmessi **una direzione alla volta**
- una **comunicazione bidirezionale**, quindi ogni processo può essere sia mittente che ricevitore

I messaggi possono essere:

- **bloccanti** il ricevente deve comunicare al mittente che ha ricevuto il messaggio
- **non bloccanti** il mittente non si aspetta una risposta di avvenuta consegna

L'implementazione comune di una comunicazione tra processi è la **pipe** cioè una memoria chiamata buffer in cui un processo ci scriverà dei dati mentre l'altro li leggerà


Nei sistemi distribuiti la comunicazione è più complessa, i messaggi inviati possono essere corrotti o persi, è necessario quindi un meccanismo di conferma che i dati siano stati ricevuti correttamente. Sono necessari anche dei sistemi di *timeout* per rimandare il messaggio in caso di mancata conferma.

Vengono utilizzate delle porte per identificare quale tipo di messaggio si sta inviando. Inoltre servirebbe autenticare il mittente del messaggio.


## Thread

Un **thread** è un blocco di istruzioni. I thread appartengono ad un processo.
I thread condividono tra loro lo **spazio di indirizzamento e i file aperti** del processo al quale appartengono. Mentre i registri, lo stack, il program counter e lo stato è singolo per ogni thread.

finora quando parlavamo di esecuzione di un processo, in realtà si tratta di un thread singolo che sta eseguendo il codice del processo. 

Possiamo vedere i processi come dei raggruppatori di risorse mentre i thread sono degli esecutori che lavorano su quelle risorse raggruppate, possiamo quindi avere più esecutori (thread) che lavorano contemporaneamente su uno spazio condiviso (**multithreading**)

su un processore a singolo core, quando un processo con più thread viene eseguito, i singoli thread vengono eseguiti a turno, proprio come succedeva con più processi. I thread però sono **processi leggeri** in quanto gran parte dei dati è condiviso tra i thread e quando si presenta il context switch ci sono meno cose da cambiare rispetto ad un context switch tra processi. Quindi eseguire a turno più thread è più veloce che eseguire più processi a turno.



| elementi del processo | elementi del singolo thread |
|--|--|
| spazio di indirizzamento | program counter |
| variabili globali | registri |
| file aperti | stack |
| processi figli | stato |
| allarmi in sospeso |  |
| segnali e gestori dei segnali |  |
| informazioni sugli account |  |


### ciclo di vita di un thread

Il **ciclo di vita** di un thread è esattamente lo stesso a quello di un processo.
creazione -> (pronto, esecuzione, bloccato) -> termina

l'overhead di creazione e terminazione di un thread è molto ridotto rispetto alla creazione/terminazione di un processo. Questo perché se immaginiamo che un processo è in esecuzione, questo processo ha il suo unico thread che sta eseguendo, esso ne crea un'altro che usa lo stesso spazio di indirizzamento che in questo esatto momento è già caricato in memoria quindi è molto rapida la creazione.

sono presente tre sfumature dello stato bloccato:
- *blocked*: in attesa di un evento IO
- *waiting*: in attesa a causa di un altro thread
- *sleeping*: in attesa per un tempo prefissato

![enter image description here](https://i.ibb.co/bQWJ3pT/thread-ciclo-vita.png)


### Operazioni sui thread

Sui threads come per i processi è possibile effettuare varie operazioni:
- Creazione
- Exit (terminazione)
- Sospensione
- Recupero (resume)
- Sleep
- Risveglio

Un concetto importante dei thread è la **join**, la join è un'operazione che viene fatta da un thread principale che serve ad aspettare che tutti gli altri thread terminino la loro esecuzione prima che il thread principale continui la sua esecuzione.


### Vantaggi di utilizzare i thread

1. dividere un problema in più piccoli sottoproblemi che vengono assegnati a dei thread che possono risolverli in parallelo, lavorando, quindi, in parallelo sullo sullo stesso set di dati
2. creare, distruggere e scambiare i thread è molto più semplice rispetto ai processi
3. quando abbiamo un intenso uso della cpu e una intensa richiesto di I/O i thread permettono la sovrapposizione di queste due cose, aumentando così le prestazioni.


## Modelli di threading

Ci sono 3 modi principali di implementare i thread:

- thread a livello utente
- thread a livello kernel
- thread ibridi (sia a livello utente che a livello kernel)


### Thread a livello utente

In questo caso i thread vengono creati e gestiti nello spazio utente, quindi il kernel non sa della loro esistenza.
Il kernel è a conoscenza solo dei processi, che sono visti con un singolo thread.

![enter image description here](https://i.ibb.co/93Xgmj6/user-thread.png)

Abbiamo una implementazione detta **molti-a-uno** (molti thread ad un unico contesto di esecuzione)

I thread vengono create da librerie in *runtime* ed essendo create nello *user space* **non possono eseguire istruzioni privilegiate**.

Ogni processo possiede una **tabella dei thread** contenente le informazioni di ogni thread (PC, SC, registri, stato)

![enter image description here](https://i.ibb.co/xYgnrBb/user-thread-example.png)

**vantaggi**:
- permettere di utilizzare i thread anche in sistemi che nativamente non supportano i thread
- le librerie possono implementare il proprio modo di schedulare i thread
- lo scheduling dei thread è molto efficiente dato che non deve far entrare in gioco il kernel
- è portabile. Essendo indipendente dal kernel è possibile usare lo stesso codice multithreading in sistemi diversi

**svantaggi**
- il kernel vedendo tutto come processi a singolo thread, nel caso un thread faccia operazioni di I/O è possibile che il kernel sospenda l'intero processo a favore di un altro, interrompendo così l'esecuzione di tutti i thread del processo sospeso.
- i thread vengono schedulati all'interno di un singolo core (prestazioni limitate)

### Thread a livello kernel

In questo caso il kernel è a conoscenza e gestisce i thread

![enter image description here](https://i.ibb.co/TRjcdZ8/kernel-thread.png)

Abbiamo una implementazione detta **uno-a-uno** (unico thread a unico contesto di esecuzione)

Il kernel possiede una tabella dei thread (oltre alla tabella dei processi) e ogni qual volta un thread voglia creare o distruggere un thread viene fatta una chiamata a sistema e il kernel aggiornerà la tabella di conseguenza.

![enter image description here](https://i.ibb.co/0yqfbHg/kernel-thread-example.png)


**vantaggi**:
- se un thread si blocca, il kernel può decidere se eseguire un altro thread dello stesso processo oppure un thread di un altro processo. In questo modo un processo può proseguire anche se uno dei suoi thread è bloccato
- quando un thread viene cancellato, in realtà esso viene solo marcato come non eseguibile ma la sua struttura viene conservata in modo che possa essere assegnata ad un nuovo thread, risparmiando così del tempo (evitando di crearne uno da capo)

**svantaggi**:
- il cambio di contesto limita li prestazioni (quando si creano e distruggono tanti thread c'è molto overhead)
- non è portabile dato che l'implementazione può variare da kernel in kernel

### Thread ibridi

questa implementazione combina le caratteristiche delle due precedenti implementazioni.

![enter image description here](https://i.ibb.co/2Pxp9Tc/ibrido-thread.png)

Abbiamo una implementazione molti-a-molti (più thread a livello utente e più thread a livello kernel).

nello spazio kernel abbiamo un **thread pool** cioè un gestore di thread speciali chiamati **worker threads**.
Questi worker threads sono dei thread persistenti che non vengono distrutti quando hanno terminato il loro lavoro. Ogni volta che si vuole creare un nuovo thread, il compito del thread viene assegnato ad un worker thread già pronto che si occuperà di portarlo a termine.

L'utilizzo di questo thread pool migliora le prestazioni dato che non dobbiamo creare e distruggere ogni volta i thread


![enter image description here](https://i.ibb.co/TrC9V40/ibrido-thread-esempio.png)

L'obiettivo dell'implementazione ibrida è quello di imitare le funzionalità dei thread a livello kernel ma con le prestazioni dei thread a livello utente. Per fare questo bisogna limitare transizioni inutili tra spazio utente e spazio kernel.

il kernel si occuperà di schedulare i thread a livello kernel mentre viene assegnato ad ogni processo un **processore virtuale** che permette di schedulare i thread a livello utente.

Quando il kernel sa che un thread è bloccato:
1. viene fatta una **upcall** al processore virtuale interessato, cioè una notifica che indica quale thread è bloccato.
2. Il processore virtuale si occuperà poi di rischedulare i suoi thread.
3. Quando il thread che era bloccato è pronto per essere rieseguito viene fatta un'altra **upcall** per avvisare il processore virtuale avvisandolo che quel thread ora può essere rischedulato.

Questa implementazione ibrida funziona anche su CPU multicore.
Il problema è che c'è un uso intensivo del kernel che chiama procedure nello spazio utente.


### Thread pop-up

Thread pop-up è una tecnica particolarmente utilizzata nei sistemi distribuiti lato server in cui: quando la macchina riceve un messaggio, viene creato un nuovo thread per gestirlo (chiamato thread pop-up). 

Il vantaggio di questo utilizzo è che la latenza tra l'arrivo del messaggio e l'inizio dell'elaborazione è molto bassa.


# Scheduling

lo scheduler è il componente del sistema operativo che decide quali processi, che sono nello stato di pronto, mandare in esecuzione. Tale decisione viene presa tramite un **algoritmo di scheduling**

Ci sono due caratteristiche chiave che un algoritmo di scheduling può utilizzare o meno:

- **pre-rilasio, prelazione o preemptive**
	- algoritmi senza pre-rilascio: il processo in esecuzione rimane in esecuzione finchè o si blocca o decide volontariamente di fermare l'esecuzione
	- algoritmi con pre-rilascio: lo scheduler può interrompere l'esecuzione di un processo per favorirne un altro.
- **priorità**
	- priorità statica: una volta assegnata la priorità ad un processo essa non cambia nel tempo
	- priorità dinamica: la priorità di un processo può variare nel tempo

## Sistemi principali da schedulare

Ogni sistema richiede un algoritmo di scheduling in base a cosa vuole ottenere.

Gli obiettivi comuni tra tutti i sistemi sono:

- **equità**: i processi simili devono ricevere una porzione equa di CPU
- **predicibilità**: Assicurarsi che la politica di scheduling adottata sia effettivamente applicata
- **bilanciamento**: tenere occupate tutte le componenti del sistema

I tre ambienti principali con i propri obiettivi sono:

1. **Sistemi batch** (in cui non sono presenti utenti):
	- massimizzare il numero di processi eseguiti per unità di tempo
	- minimizzare il tempo fra l'inizio della richiesta e la sua conclusione (detto tempo di **turnaround**)
	- massimizzare l'uso del processore
2. **Sistemi con utenti interattivi**:
	- minimizzare i tempi di risposta
	- soddisfare le aspettative degli utente
3. **Sistemi real time**:
	- rispettare le scadenza
	- mantenere la qualità del servizio nei contenuti multimediali

In generale lo scheduler interviene in caso di:
- creazione di un processo figlio
- alla terminazione di un processo
- quando un processo si blocca
- quando si verifica un'interruzione

## Algoritmi per sistemi batch

### First-come-first-served

FCFS è un algoritmo che implementa una semplice coda FIFO (First In First Out), quindi i processi vengono eseguiti in ordine di arrivo. Quando un processo si blocca viene messo alla fine della coda.
Questo algoritmo **non utilizza pre-rilascio e tutti hanno la stessa priorità**.
Non è un algoritmo ottimale perché i processi grandi rallentano tutta la coda

### Shortest Job First

 SJF fa una stima di quanto tempo ogni processo impiega per terminare ed manda in esecuzione prima i processi che hanno un tempo di esecuzione stimato minore.
 Ha un tempo di attesa medio migliore rispetto al FCFS
 Anche questo algoritmo **non utilizza pre-rilascio**
 Non ottimale in quanto è difficile stimare i tempi di esecuzione (soprattutto per i processi che variano i tempi in base ad input utente) e anche perché normalmente non si hanno tutti i processi subito disponibili ma arrivano man mano, quindi combinarli in maniera ottimale non è sempre possibile. 
 È possibile anche che i processi lunghi difficilmente vengano eseguiti

### Shortest Remaining Time First

SRTF è la versione **con pre-rilascio** di SJF, vengono quindi eseguiti processi il cui tempo rimanente è minore. Se durante l'esecuzione un processo ne arriva un altro che ha un tempo di esecuzione minore del tempo rimanente dell'attuale processo allora quest'ultimo viene interrotto e viene eseguito il nuovo processo.
 Ha un tempo di attesa medio migliore rispetto al SJF
I problemi di questo algoritmo sono che i processi che sono quasi finiti vengono interrotti (magari era più conveniente far finire quel processo prima di fare context switch, che crea overhead)
Inoltre è ancora più probabile che i processi lunghi non vengano eseguiti. 
Anche in questo caso c'è lo stesso problema della stima dei tempi del SJF

## Algoritmi per sistemi interativi


### Round Robin

Questo algoritmo utilizza una coda FIFO proprio come FCFS ma in questo caso i processi hanno un tempo di CPU prefissato, se il tempo non è sufficiente per completare il processo allora il processo viene messo alla fine della coda.
Se il processo termina prima che finisca il suo tempo allora si passa immediatamente al processo successivo.
Utilizza il **pre-rilascio**, tutti i processi hanno stessa priorità, è un buon algoritmo in quanto tutti i processi vengo eseguiti man mano equamente.
Il problema in questo caso è quanto tempo di CPU impostare?
troppo breve risulterebbe in tanti cambi di contesto (tanto overhead) ma troppo lungo potrebbe rallentare i tempi di risposta per richieste semplici, in quanto devono aspettare che quelli davanti finiscano il loro *slice* di tempo, bisogna trovare un compromesso nel mezzo.

### Scheduling a priorità

Introduciamo le **classi di priorità** cioè dei livelli di priorità in cui chi ha la priorità più alta viene eseguito per primo. Nello scheduling a priorità prima bisogna definire quante classi di priorità abbiamo e all'interno di ogni classe viene utilizzato il Round Robin per schedulare i singoli processi appartenenti a quella classe.

Le priorità possono essere statiche oppure dinamiche, nella maggior parte dei casi avere delle priorità dinamiche è la scelta migliore perché:

consideriamo la seguente immagine e utilizziamo una priorità statica

![enter image description here](https://i.ibb.co/8PcSvRm/priorit.png)

finche ci sono processi di priorità 4 vengono eseguiti quelli, quando non abbiamo processi di priorità 4 passiamo a quelli con priorità 3 e così via. Possiamo notare che se arrivano continuamente processi con priorità alta quelli con priorità bassa non vengono mai eseguiti.
La soluzione a questo è quella di cambiare la priorità dei processi dinamicamente.

### Selfish Round Robin

Abbiamo 2 code, che rappresentano **2 classi di priorità**: processi attivi e processi in attesa.

Quando arriva un nuovo processo viene messo nei processi in attesa.
La priorità di quel processo aumenta con il passare del tempo.
Quando la sua priorità è in linea con le priorità dei processi nella coda "processi attivi" allora viene spostato in quella coda e viene applicato Round Robin

Questo algoritmo favorisce i processi che sono presenti da più tempo

### Highest Response Ratio Next

Utilizza il SJF ma utilizzando la priorità dinamica al posto del solo tempo di esecuzione

la priorità dinamica calcolata come $\frac{\text{tempo di attesa + tempo di esecuzione}}{\text{tempo di esecuzione}}$

Quindi la priorità è sia in base a quanto è il suo tempo di esecuzione  ma anche da quanto tempo il processo sta aspettando di essere eseguito


### code multilivello con feedback

In questo caso abbiamo un certo numero di code FIFO, ogni coda rappresenta una classe di priorità.

Tutti i nuovi processi vanno inizialmente nella coda con priorità più alta e vengono eseguiti uno ad uno per un tempo prefissato di CPU.
Quando il tempo termina se il processo è terminato si va semplicemente al prossimo, mentre se non è terminato va messo nella coda successiva che ha una priorità minore.
Questo comportamento continua fino all'ultima coda dove viene applicato Round Robin.

I processi lunghi quindi scendono con la priorità man mano. 
Infatti l'algoritmo predilige i processi corti e solo una volta terminati quelli di priorità maggiore si occupa di quelli di priorità minore

![enter image description here](https://i.ibb.co/X2N3dGp/multilive-feedback.png)

### Fair share

Questo algoritmo tiene in considerazione dei gruppi utente e i relativi utenti che lanciano i processi, ci sono ovviamente gruppi più importanti di altri

ogni gruppo riceve una frazione del tempo di CPU che verrà distribuita tra i processi. Se la CPU assegna il 50% della CPU ad un gruppo esso avrà a disposizione il 50% indipendentemente da quanti processi possiede


##  Scheduling per sistemi real time

Nei sistemi real time il tempo è il fattore principale, in altre parole ci sono delle scadenze da rispettare per i processi.

I sistemi real time sono classificati in:

- hard real time
	il processo deve essere eseguito entro la scadenza, altrimenti il risultato non è valido è va scartato o peggio potrebbe creare dei problemi
- soft real time
	c'è una tolleranza per la scadenza e quindi è possibile anche non rispettare la scadenza entro certi limiti

possiamo trovare una ulteriore divisione in:

- periodici: i processi vengono eseguiti ad intervalli di tempo regolari
- non periodici: non è prevedibile quando i processi andranno in esecuzione

Lo schedulatore deve essere in grado di eseguire i processi cercando di rispettare le scadenze di tutti.

Prendiamo in considerazione $m = 4$ eventi periodici, cioè eventi che si ripetono ad intervalli regolari $P_i$, ogni evento richiede un tot di utilizzo del processore $C_i$ per eseguire i propri processi.
I processi di questi 4 eventi si possono schedulare solo se la sommatoria di $\frac{\text{tempo di CPU richiesto}}{\text{Periodo}}$ di ogni evento è minore di $1$, quindi:

$$\sum_{i=1}^m\frac{C_i}{P_i} \leq 1$$

Per esempio:

$m_1:$ richiede la CPU per $2$ secondi e si ripete ogni 5 secondi
$m_2:$ richiede la CPU per $1$ secondi e si ripete ogni 3 secondi
$m_3:$ richiede la CPU per $1$ secondo e si ripete ogni 9 secondi
$m_4:$ richiede la CPU per $8$ secondi e si ripete ogni 12 secondi

Abbiamo 

$$\frac{2}{5} + \frac{1}{3} + \frac{1}{9}+ \frac{8}{12} = \frac{68}{45} \approx1.5$$

quindi questi 4 eventi non sono schedulabili (uno di loro sicuramente non viene eseguito entro la sua scadenza)

Se per esempio togliamo l'ultimo evento $m_4$ otteniamo:

$$\frac{2}{5} + \frac{1}{3} + \frac{1}{9} = \frac{38}{45} \approx 0.84$$

In questo caso sono schedulabili

Ovviamente supponiamo che l'overhead necessario per il cambio di contesto sia talmente piccolo da essere ignorato.


### Algoritmi real time statici

Gli algoritmi real time statici prendono le decisioni prima che il sistema inizi l'esecuzione, valido quando si hanno tutte le informazioni e le scadenza subito disponibili.

Un esempio è il **rate monotonic scheduling** (RMS) che è utilizzabile se:

- ogni processo va completato entro il suo periodo
- tutti i processi sono indipendenti tra loro
- il tempo di CPU richiesto da un processo non cambia nei suoi periodi
- i processi periodici non hanno scadenze temporali
- il pre-rilascio è leggero

Ad ogni processo viene assegnata una priorità che si basa su quanto spesso deve essere eseguito, più priorità a chi deve essere eseguito più spesso. Utilizza il pre-rilascio nel caso un processo con priorità più alta dell'attuale sia pronto 

Un algoritmo quindi che favorisce i processi che vengono eseguiti spesso


### Algoritmi real time dinamici

In questi algoritmi la priorità viene aggiornata in esecuzione

Ad esempio l'algoritmo **Erliest Deadline First** (EDF):
- ha pre-rilascio
- sceglie sempre il processo con scadenza più vicina
- massimizza il throughput e minimizza il tempo di attesa

oppure l'algoritmo **Minimim Laxity First** (MLF):
- simile a EDF ma basato sulla lassità
- la lassità è il tempo che avanzerebbe dalla terminazione del processo fino alla sua scadenza

$$\text{lassità} = \text{Scadenza} - (\text{tempo corrente} + \text{tempo di esecuzione})$$

![enter image description here](https://i.ibb.co/K5bjKqv/lassit.png)



## Scheduling nei thread

È molto frequente che i processi abbiano più thread, il processo padre sa quali thread sono più importanti e quali meno.

Per fare in modo che i processi possano cambiare il comportamento dello scheduler è necessario parametrizzare l'algoritmo di scheduling, i parametri vengono forniti dai processi utente che sanno quali thread sono più importanti eseguire.

È importante quindi separare il **meccanismo di scheduling**, che sta nel kernel e decide **come** schedulare, dalla **politica di scheduling** che è stabilita dai processi utenti i quali decidono **cosa** schedulare.

Per lo scheduling con **thread a livello utente**
![enter image description here](https://i.ibb.co/JpNqwD4/scheduling-tlu.png) 

non è possibile schedulare thread di processi differenti

mentre per lo scheduling con **thread a livello kernel**
![enter image description here](https://i.ibb.co/ZXhPSFp/scheduling-tlk.png)
è possibile anche schedulare thread di processi diversi


# Gestione della memoria

La memoria di un computer è divisa principalmente in tre livelli:

- memoria cache
	- molto costosa
	- molto veloce
	- molto piccola (da pochi KB fino ad un centinaio di MB)
	- spesso all'interno del processore o nelle immediate vicinanze
- memoria principale (RAM)
	- abbastanza costosa
	- velocità alta
	- dimensioni medie (svariati GB)
- memoria secondaria (HDD, SSD)
	- economica
	- lenta
	- molto grande (fino a vari TB)

La memoria principale è quella su cui ci concentreremo maggiormente e che richiede una attenta gestione

Generalmente ad ogni processo viene assegnata una porzione della memoria, questa porzione può essere allocata staticamente o dinamicamente. Il **gestore della memoria** è il componente del sistema operativo che si occupa di ottimizzare le porzioni di memoria assegnate ai processi decidendo:
 
 1. quanta memoria assegnare ad un processo
 2. dove posizionare in memoria un processo
 3. quale processo mandare in memoria (su richiesta o tramite previsione)
 4. decidere quale processo sostituire quando la memoria si sta saturando
 5. gestire gli scambi di memoria tra i vari livelli


Nella **memoria secondaria** solitamente teniamo **dati e programmi che non ci servono al momento**.
Nella **memoria primaria** teniamo **i programmi necessari** che potremmo usare al momento
Nella **memoria cache** teniamo **i dati utilizzati nell'immediato passato**


## Modi di organizzare i programmi in memoria

Abbiamo principalmente due modi di organizzare la memoria dei processi:

- **allocazione contigua**
	un programma viene memorizzato come un blocco unico di indirizzi contigui in memoria.
	Basso overhead ma può essere possibile non trovare un blocco abbastanza grande
	
	ad esempio una allocazione contigua con un solo utente:
	![enter image description here](https://i.ibb.co/TTftdVr/contigua.png)
- **allocazione non contigua**
	in programma viene diviso in blocco chiamati **segmenti**.
	ogni segmento può essere posizionato in parti diverse della memoria, questo permette di avere più processi in memoria contemporaneamente, ma ha anche un overhead maggiore.
	
	**overlay** è una tecnica di allocazione non contigua in cui un **programma** grande viene **suddiviso in segmenti logici indipendenti** che vengono caricati in memoria man mano che il programma è in esecuzione, in modo che i vari segmenti si sovrappongano in memoria (overlay).

	![enter image description here](https://i.ibb.co/T8J4sFL/overlay.png)


### Protezione dell'ambiente

in entrambi i metodi precedenti dobbiamo adottare delle tecniche per evitare che i processi danneggino in qualche modo il sistema, non vogliamo che un processo occupi o acceda alla memoria riservata al sistema operativo.
Viene utilizzato un **registro limite** che contiene l'indirizzo da dove comincia la parte di memoria per l'utente e ogni tentativo di accesso oltre quel limite è negato.
È comunque possibile interagire con il sistema operativo tramite le apposite chiamate di sistema.


## Multiprogrammazione a partizioni fisse

Quando abbiamo un singolo processo in memoria (come nei sistemi batch) nel caso in cui il processo faccia delle richieste di I/O, la CPU rimarrebbe libera in attesa che il processo completi la richiesta. Con la multiprogrammazione vogliamo evitare questo tempo morto di CPU, infatti avendo più processi in memoria, quando un processo fa richieste di I/O ne mandiamo in esecuzione un altro mentre l'altro attende di soddisfare la richiesta.

nel seguente grafico vediamo il rapporto tra l'utilizzo della CPU in funzione del grado di quanti processi posso tenere in memoria contemporaneamente

![enter image description here](https://i.ibb.co/qJy0jMS/mutiprog.png)

Notiamo come quando ho tanta attesa di I/O (ad esempio 80%) è conveniente avere in memoria tanti processi pronti per essere eseguiti per mantenere sempre impegnata la CPU. 
Quando invece ho programmi con poca attesa di I/O (ad esempio 20%) già avere due processi in memoria è sufficiente per saturare l'utilizzo della CPU.

è possibile calcolare l'utilizzo della CPU con la seguente formula

$$U_{CPU} = 1-p^n$$

dove:
$n =$ numero di processi in memoria
$p =$ frazione di tempo di attesa I/O


## Funzionamento multiprogrammazione a partizioni fisse

Ad ogni processo attivo viene assegnato un blocco di memoria di dimensione fissa. Abbiamo quindi bisogno di più registri per sapere dove inizia e finisce ogni blocco, **registro base e registri limite**. Questo per evitare conflitti tra sistema operativo e processi e anche tra i processi stessi.

La memoria viene divisa in questi blocchi (o partizioni) di dimensioni anche diverse e **ogni processo sarà assegnato al più piccolo blocco che lo contiene**. Ovviamente avendo più processi abbiamo bisogno di una coda di attesa per attendere che il blocco si liberi prima di far entrare un nuovo processo.

![enter image description here](https://i.ibb.co/zNXpVdd/partizioni-fisse.png)

Il problema è che si possono verificare casi in cui un blocco piccolo (come *partition 1*) abbiano una coda lunga e un blocco grande (come *partition 3*) sia libero, Abbiamo quindi un grande spreco di memoria.

Una soluzione potrebbe essere quella di avere una singola coda, e appena un blocco si libera si assegna un processo a quel blocco, andando così ad utilizzare tutti i blocchi.

![enter image description here](https://i.ibb.co/dcxYMwd/single-queue.png)

Gli svantaggi di questo sistema che l'hanno portato ad non essere più utilizzato sono:

1. non è detto che un processo occupi tutta la partizione, creando così degli spazi di memoria non utilizzabili (frammentazione interna)
2. la possibilità che non ci sia una partizione abbastanza grande per un processo

## Funzionamento multiprogrammazione a partizioni variabili

In questo caso viene assegnato ad ogni processo esattamente lo spazio in memoria di cui ha bisogno. Abbiamo quindi delle **partizioni variabili** in cui la dimensione varia in base al processo.

Inizialmente non ci sarà spreco di memoria ma quando i processi iniziano a terminare lasciano dei buchi in memoria che potrebbero non essere abbastanza grandi per contenere altri processi, abbiamo quindi in questo caso della **frammentazione esterna della memoria**.


![enter image description here](https://i.ibb.co/MMHF69F/frammentazione.png)

Per risolvere questo problema di frammentazione abbiamo due tecniche:

- **coalescenza**: combinare due blocchi liberi adiacenti formando un unico blocco
	![enter image description here](https://i.ibb.co/Rj7gg5P/coalescenza.png)

- **compattazione**: riorganizzare i blocchi in modo da avere quelli occupati tutti contigui, formando così un unico grande blocco di memoria libera. Questa operazione comporta un overhead molto significativo.
![enter image description here](https://i.ibb.co/njVQkB8/compattamento.png)

### Strategie di posizionamento dei processi

Il compattamento della memoria è una operazione molto dispendiosa (bisogna riallocare tutti i processi).
Bisogna cercare di mettere i processi in posizioni intelligenti quando la memoria è frammentata, lasciando il compattamento come ultima risorsa.

Vediamo tre diverse strategie per scegliere dove posizionare in memoria i processi in arrivo:

- **first-fit**: il processo viene allocato nel primo buco libero abbastanza grande che si incontra.
	semplice e basso overhead
	![enter image description here](https://i.ibb.co/pyFtHqL/first-fit.png)

- **best-fit**: il processo viene allocato nel più piccolo buco libero che riesce a contenerlo.
	maggior overhead (bisogna cercarlo questo buco)

	![enter image description here](https://i.ibb.co/xsGy6yD/best-fit.png)

- **worst-fit**: il processo viene allocato nel buco più grande disponibile.
	l'obiettivo di questa strategia è quello di lasciare abbastanza spazio rimanente per contenere un altro processo

	![enter image description here](https://i.ibb.co/KwL0j0P/worst-fit.png)


## Funzionamento multiprogrammazione con swapping

Spesso i processi possono variare la quantità di memoria di cui hanno bisogno in fase di esecuzione, quando si prevede che un processo possa crescere in quantità di memoria è utile allocare più memoria di quella che necessità inizialmente.

È possibile quindi che la memoria principale non sia sufficiente per contenere tutti i processi. 
In queste situazioni possiamo utilizzare una speciale area della memoria secondaria per mantenere i processi temporaneamente in attesa che la memoria si svuoti.

Ovviamente andare a recuperare un processo dalla memoria secondaria è molto dispendioso.


## Gestione della memoria libera

Nei casi di assegnazione dinamica della memoria bisogna avere dei metodi per riconoscere quali porzioni di memoria sono occupate e quali sono libere.

Abbiamo due modi per tenere traccia della memoria:

- mappa di bit
- liste concatenate

### Mappa di bit

La memoria viene divisa in **unità** (tendenzialmente molto piccole, da Byte a qualche KB), ciascuna unità viene associata ad un bit che se è 1 significa che l'unità è occupata, se invece è 0 allora l'unità è libera, formando così una mappa di bit.

La mappa di bit ovviamente risiede in memoria principale

la scelta di quanto grandi fare le unità è abbastanza complessa da decidere: unità molto piccole comportano avere una mappa di bit molto grande, che porta via spazio a processi utili.
una scelta di unità grande rende sì la mappa più piccola, ma la probabilità che la memoria dei processi sia un multiplo dell'unità si abbassa impedendo di mappare correttamente l'ultimo pezzo di memoria del processo, dovendo per forza comprenderne di più.

Il problema della mappa di bit sta nel fatto che per trovare lo spazio necessario per allocare un processo di $k$ unità bisogna scorrere la mappa alla ricerca di $k$ zeri consecutivi

### Liste concatenate

In questa implementazione abbiamo una lista concatenata in cui ogni ogni elemento della lista rappresenta degli intervalli in cui la memoria è libera oppure occupata.

Il nodo di una lista è fatta da:

- un booleano che indica se è un pezzo libero (H) oppure occupato da un processo \(P\)
- l'indirizzo di dove inizia l'intervallo
- la lunghezza dell'intervallo
- il puntatore al nodo successivo della lista 
- il puntatore al nodo precedente della lista (questo è facoltativo ma è più conveniente)

vediamo graficamente l'implementazione della mappa di bit (b) e della lista concatenata \(c\)
![enter image description here](https://i.ibb.co/jy92vNJ/mappa-e-lista.png)

# La memoria virtuale

Oltre alla tecnica di swapping della memoria, abbiamo un'altra tecnica utilizzata per contrastare il problema di non aver sufficiente memoria per contenere tutti i processi che vogliono essere eseguiti, la **memoria virtuale**.

La principale caratteristica della memoria virtuale è quella di illudere i processi che esista più memoria di quella realmente presente.

Con l'introduzione della memoria virtuale nascono 2 tipologie di indirizzi di memoria:

- **Indirizzi fisici**: cioè gli effettivi indirizzi delle celle fisiche in memoria principale
- **Indirizzi virtuali**: indirizzi utilizzati dalla CPU (e quindi dai processi)

È quindi necessario un componente hardware capace di tradurre gli indirizzi virtuali in fisici, questo componente è chiamato **MMU** (Memory Management Unit).
La MMU esegue un meccanismo di traduzione dinamica degli indirizzi chiamato (**DAT**, *Dynamic Address Translation*)

Lo spazio di indirizzamento fisico è unico e solo la MMU ci interagisce, mentre lo spazio di indirizzamento virtuale è uno per ogni processo.

Questa tecnica ci permette di avere solo delle porzioni di programma mappate in memoria principale mentre il resto del programma è in memoria secondaria, proprio come succedeva con la tecnica **overlay** solo che lavorando con gli indirizzi virtuali il programmatore non deve più indicare le parti indipendenti del programma.

Dato che possiamo avere moltissimi indirizzi virtuali, il sistema operativo deve mantenere solo alcuni indirizzi virtuali in memoria principale, mentre gli altri vanno in memoria secondaria. Per questo diciamo che la tecnica di memoria virtuale **lavora su due livelli di memoria**

I sistemi che utilizzano la memoria virtuale possono utilizzare:
- la paginazione
- la  segmentazione
- un ibrido delle due

## Mapping dei blocchi

Vediamo un modo generico per tradurre gli indirizzi da virtuali in fisici.

Le memorie fisica e virtuale vanno divise in blocchi contenenti degli indirizzi, l'obiettivo è quello di associare i blocchi in memoria virtuale ai blocchi in memoria fisica.

Viene utilizzata una mappa dei blocchi: se i blocchi sono di dimensione fissa si chiamano **pagine**, se sono di dimensioni diverse tra loro si chiamano **segmenti**.

L'indirizzo virtuale viene diviso in due parti: il *numero del blocco* e l'*offset*

Per tradurre l'indirizzo virtuale in indirizzo fisico bisogna trovare la riga nella **mappa dei blocchi** data dalla somma dell'indirizzo iniziale con il *numero del blocco virtuale*.
La riga trovata restituirà l'indirizzo dell'inizio del blocco in memoria fisica, infine si somma l'*offset* a tale indirizzo.
L'indirizzo risultante sarà l'indirizzo fisico.

![enter image description here](https://i.ibb.co/K92C85C/image.png)

## Paginazione

Vediamo ora il caso specifico della paginazione:

Questa tecnica consiste nel dividere l'insieme degli indirizzi fisici in dei blocchi chiamati **pagine (virtuali)** e dividere anche gli indirizzi fisici in blocchi chiamati **pagine fisiche o page frame**.

Le pagine e le pagine fisiche hanno la stessa dimensione che rimane fissa (dimensione che solitamente è una potenza di 2).

![enter image description here](https://i.ibb.co/p4YC5mp/page-table.png)


Nell'esempio sopra abbiamo 64KB di memoria virtuale e 32KB di memoria fisica, la grandezza delle pagine è di 4KB. Abbiamo quindi 16 pagine virtuali e 8 pagine fisiche

## Traduzione degli indirizzi virtuali nella paginazione

Utilizzando la paginazione abbiamo molti modi per tradurre gli indirizzi virtuali in indirizzi fisici:

1. mapping diretto
2. mapping associativo
3. mapping diretto e associativo
4. tabelle di pagine multilivello
5. tabella inversa delle pagine


## Mapping diretto

Nel mapping diretto abbiamo che un indirizzo virtuale è mappato sempre nello stesso blocco fisico.

 Consideriamo l'indirizzo virtuale 8196 (base 10) che in binario è 0010000000000100 (in 16 bit perché abbiamo un totale di 64KB di indirizzi da rappresentare).

dividiamo il numero binario in 2 parti una parte di **numero di pagina** grande tanti bit quanti servono per rappresentare il numero di pagine (nel nostro caso abbiamo 16 pagine e quindi ci servono 4 bit) e un parte di **offset** che servirà per riferirci a tutti gli indirizzi all'interno di una pagina (abbiamo 4KB di indirizzi per pagina, infatti abbiamo i 12 bit rimanenti per rappresentarli)

il **numero di pagina** verrà usato come indice di una **tabella delle pagine**, questa tabella contiene il numero di **pagina fisica** corrispondente al numero della pagina virtuale.
è anche presente un **bit di residenza** per sapere se quella pagina virtuale è già mappata in memoria principale (bit = 1) o meno (bit = 0).

l'indirizzo fisico viene quindi formato dal valore della tabella all'indice corrispettivo del numero di pagina virtuale, e l'aggiunta dell'offset dell'indirizzo virtuale senza nessuna modifica
Nell'immagine viene mostrato cosa accade:
![enter image description here](https://i.ibb.co/LRLMM4b/traduzione.png)

in questo caso in uscita avremo 15 bit perché la memoria fisica è grande 32KB

Se un processo tenta di accedere ad un indirizzo virtuale non mappato, si verifica un **page fault**. In questo caso il sistema operativo si deve occupare di cercare sulla memoria secondaria la pagina non mappata e mapparla sulla relativa pagina fisica.
Nella tabella della pagine è anche presente l'indirizzo dove andare a cercare la pagina in memoria secondaria nel caso non sia stata mappata in RAM.

La seguente immagine generalizza i passaggi di traduzione precedenti:
![enter image description here](https://i.ibb.co/zJKJkyW/mapping-diretto.png)

## Mapping associativo

Mentre nel mapping diretto ogni indirizzo virtuale è associato sempre allo stesso blocco fisico, nel mapping associativo un indirizzo virtuale può appartenere a qualsiasi blocco fisico.

Abbiamo una tabella di associatività che tiene traccia delle corrispondenze tra blocco virtuale e blocco fisico, quando vogliamo tradurre un indirizzo virtuale in fisico prendiamo il numero del blocco e lo cerchiamo nella tabella associativa (che ha accesso contemporaneo ad ogni riga), quando lo troviamo otteniamo il corrispondente blocco in memoria fisica a cui possiamo affiancare l'offset per ottenere l'indirizzo fisico.

In caso di **page fault** non abbiamo un blocco preciso che il sistema operativo deve andare a sostituire ma può scegliere quello che preferisce.


![enter image description here](https://i.ibb.co/GCJF8MZ/image.png)

## Mapping diretto e associativo

In questa tecnica cerchiamo di combinare i vantaggi delle due precedenti tecniche.

I componenti per realizzare il mapping diretto sono poco costosi, mentre le componenti per realizzare il mapping associativo sono decisamente più performanti ma anche più costose.

In questo caso utilizziamo entrambe le memorie:
- Nella memoria principale ci sarà la solita tabella delle pagine.
- Le righe della tabelle che sono state utilizzate più di recente vengono anche salvate in una memoria cache associativa chiamata **TLB** (Translation lookaside buffer)

Quindi quando vogliamo tradurre un indirizzo prima andremo a vedere se c'è nella TLB (tramite mapping associativo), in caso negativo dovremo andare a cercare in RAM (tramite mapping diretto).

L'utilizzo della TLB porta un notevole vantaggio grazie al **principio di località spaziale**: se un dato è stato riferito di recente è probabile che venga riferito ancora in tempi brevi, quindi è conveniente tenerlo in una memoria più veloce.

![enter image description here](https://i.ibb.co/PZJL9rL/image.png)


## Tabelle di pagine multilivello

Dato che ogni processo ha una propria *page table* con il passare del tempo è diventato praticamente impossibile mantenere in memoria tutte le tabelle dei processi attivi, si saturerebbe la memoria RAM solo per contenere le tabelle.

Si è pensato quindi di costruire una gerarchia ad albero di tabelle, i nodi interni dell'albero saranno delle tabelle di puntatori ad altre tabelle, le foglie dell'albero sono le vere page table che contengono gli indirizzi.
In questo modo è possibile andare direttamente alla tabella interessata percorrendo un cammino dell'albero.
Viene utilizzata sempre una TLB.

L'utilizzo di pagine multilivello riduce sia il numero di righe della tabella presente in memoria sia l'overhead rispetto al mapping diretto.
 
nella seguente immagine si mostra la traduzione con 2 livelli di gerarchia

![enter image description here](https://i.ibb.co/23Ngg56/image.png)

L'indirizzo virtuale viene diviso diviso in 3 parti, in generale con $n$ livelli l'indirizzo dovrà essere diviso in $n+1$ parti.

I sistemi di oggi utilizzano generalmente dai 2 ai 5 livelli di gerarchia.


## Tabella inversa delle pagine

La tabella inversa delle pagine mappa la pagina fisica a una o più pagine virtuali, quindi inversamente rispetto a prima che si mappava partendo dalla pagina virtuale.
La grandezza della tabella sarà dato dalla numero di *page frame*.
In ogni riga della tabella avremo PID + *page number*, mentre il numero della riga rappresenterà il numero fisico del blocco a cui accedere.

(Nella tabella non sono presenti informazioni relative alla memoria secondaria)

Vengono utilizzate delle **funzioni hash** per cercare in quale riga appartiene l'indirizzo virtuale.

Dato che tendenzialmente si hanno più indirizzi virtuali di quelli fisici l'hashing genererà delle **collisioni** (più indirizzi virtuali vengono tradotti nello stessa riga della tabella). Questo viene risolto tramite il **sistema di concatenamento** in cui nelle righe un altro campo: un puntatore ad un'altra riga.

![enter image description here](https://i.ibb.co/gMQJJmc/image.png)

L'indirizzo virtuale è diviso in *page number* e *offset*, viene applicata la funzione hash sul *page number* che restituisce un indice della tabella:
- Se in quella riga sono già contenuti il PID e *page number* giusti allora non c'è collisione e l'indice della tabella viene affiancato all'offset per ottenere l'indirizzo fisico.
- Se in quella riga non è presente il PID e *page number* che ci interessano si va a scorrere la lista dei puntatori fino a che non si trova il PID e *page number* che vogliamo.
	- Una volta trovato possiamo utilizzare l'indice della tabella che abbiamo raggiunto affiancato all'offset come indirizzo fisico.
	- Se nello scorrimento della lista si giunge ad un puntatore NULL significa che l'indirizzo non è mappato in memoria fisica e quindi il sistema operativo si occupa di: recuperare la pagina dalla memoria secondaria, caricare la pagina nella memoria fisica in un indirizzo libero e infine deve aggiornare il puntatore NULL facendolo puntare alla nuova zona (la quale sarà lei ad avere puntatore NULL adesso).


Avere tante collisioni significa creare catene molto lunghe e la visita di un nodo della catena rappresenta un accesso in memoria RAM, quindi visitare tanti nodi richiede tanto tempo.
È possibile ridurre il numero di collisioni aumentando il range di valori di output della funzione hash tramite una **tabella hash di ancoraggio** (Hash Anchor Table, HAT)

Utilizzando la HAT la funzione hash non restituirà subito l'indice della tabella inversa ma l'indice della tabella hash di ancoraggio che conterrà i puntatori agli indici della tabella inversa

![enter image description here](https://i.ibb.co/J2n2Ly8/image.png)


## Condivisione

È comune che vari processi condividano dati e librerie, possiamo quindi risparmiare un po' di memoria evitando di mettere in memoria gli stessi dati più volte per ogni processo, ma piuttosto metterle una volta sola e lasciare che più processi possono accederci.

Dobbiamo quindi identificare ogni pagina come **condivisibile o meno**.

Bisogna anche scegliere quale politica attuare in caso di modifica dei dati da parte di un processo, i dati vengono modificati per tutti? creo una copia con la modifica? impedisco di modificare?

Ad esempio Unix adotta la politica **copy-on-write**: quando si fa un *fork* il processo figlio inizialmente utilizza la stessa zona di memoria del padre ma quando un altro processo (il padre ad esempio) modifica dati condivisi viene creata una copia della pagina e la modifica viene fatta su questa copia. Da quel momento in poi padre e figlio utilizzeranno zone di memoria distinte.

## Sostituzione

Quando dobbiamo referenziare una nuova pagina che non è presente in *page table* ma la memoria è piena bisogna sostituire una pagina presente in memoria.

In generale quando bisogna inserire in memoria una nuova pagina bisogna decidere **dove** e il **quando**.

per rispondere al "quando" esistono due strategie dette di **fetch**:

- **a richiesta**: quando il processore riferisce una pagina allora la andiamo a caricare in memoria (abbiamo quindi un caricamento iniziale del processo molto rapido ma poi l'esecuzione è più lenta)
- **a previsione**: si cerca di prevedere quali pagine potrebbero essere richieste e quindi le andiamo già a caricare (abbiamo quindi un caricamento iniziale del processo lento ma esecuzione più veloce)

La previsione delle pagine si base su due principi: il principio di località spaziale e di località temporale.

- **località spaziale**: se accedo ad un dato in una pagine è probabile che a breve accederò ai dati delle pagine adiacenti
- **località temporale**: se accedo ad un dato è probabile che a breve ci riaccenderò

Solitamente si fissa un limite di quante pagine vengono caricate per previsione. La previsione non agisce nel caso ci siano delle sostituzioni da fare, cioè si attua solo se c'è della memoria libera.


### Sostituzione di pagina

Quando un pagina referenziata non è presente in memoria il sistema operativo deve:

1. cercare la pagina in memoria secondaria
2. caricarla in memoria
3. aggiornare la *page table*

Quando bisogna sostituire una pagina in memoria, bisogna controllare il ***dirty bit*** della pagina da sostituire, se esso è a 1 significa che la pagina è stata modificata ma la modifica non risulta nel disco secondario. Bisogna quindi aggiornare la pagina in memoria secondaria (operazione detta **flush**) prima di rimuoverla dalla memoria.


## Strategie di sostituzione

Esistono varie tecniche di sostituzione:

### Sostituzione casuale

Viene sostituita una pagina casuale.
- veloce
- semplice
- overhead molto basso
- rischio di sostituire la pagina appena inserita
- equa

### Sostituzione FIFO

Viene sostituita la pagina che è arrivata in memoria per prima tra quelle presenti.
- può sostituire pagine spesso utilizzate
- overhead basso
- può causare un susseguirsi di page fault in alcune situazioni
- all'aumentare della grandezza della page table aumentano anche i page fault (anomalia di Belady)

### Sostituzione LRU

Viene sostituita la pagina che da più tempo non è riferita (Least Recently Used)

- overhead medio, bisogna tenere traccia di quando è stata riferita un pagina
- prestazioni migliori di FIFO

### Sostituzione LFU

Viene sostituita la pagina riferita meno spesso di tutte (Least Frequently Used)
- overhead medio, bisogna tenere traccia di quanto spesso vengono riferite le pagine
- potrebbe facilmente sbagliare la predizione

### Sostituzione NFU

Viene sostituita la pagina che recentemente non è stata riferita (Not Frequently Used)

- overhead significativo, è necessario un contatore da aggiornare regolarmente su ogni pagina

### Sostituzione NRU

Viene sostituita la pagina che recentemente non è stata riferita (Not Recently Used)
Uguale al NFU ma cerca di ottimizzarlo utilizzando un **bit di modifica** e un **bit di riferimento** che vengono regolarmente azzerati:

- bit di riferimento: se 0 la pagina non è stata riferita, se 1 è stata riferita
- bit di modifica: se 0 la pagina non è stata modificata, se 1 è stata modificata

Possiamo decidere le migliori scelte secondo la seguente tabella:

| bit riferimento | bit modifica | descrizione |
|:--:|:--:|:--:|
| 0 | 0 | Migliore scelta per la sostituzione |
| 0 | 1 | Caso particolare dovuto all'azzeramento dei bit avvenuto assieme alla modifica, si presume che si come il caso 1 1 |
| 1 | 0 | Scelta media |
| 1 | 1 | Peggiore scelta per la sostituzione |


### Sostituzione FIFO con second chance

Viene esaminato il bit di riferimento della pagina più vecchia in memoria:

- se il bit è a 0: significa che la pagina non è stata riferita e quindi viene selezionata per la sostituzione
- se il bit è a 1: significa che la pagina è stata utilizzata, viene quindi azzerato il bit e viene messa alla fine della coda (rimane quindi ancora in memoria)

L'algoritmo continua a cercare tra le pagine fino a che non ne trova una con il bit a 0.

### Sostituzione a orologio

Funziona esattamente come la second chance ma al posto di avere una lista lineare si ha una lista circolare (come un orologio)

se il bit di riferimento è a 0 si rimuove la pagina attualmente puntata, altrimenti si azzera e si punta alla pagina successiva.

La differenza sta che le pagine con il bit a 1 non vengono spostate alla fine della coda in quanto non è presente una coda.

### Sostituzione delle pagine Far

Viene costruito un grafo in cui:
- i nodi rappresentano le pagine
- gli archi sono i riferimenti che una pagina fa ad un'altra

per scegliere la pagina da sostituire si cerca la pagina non referenziata più lontana rispetto alla prima pagina referenziata che incontra

Nella seguente immagine abbiamo un grafo con un asterisco ad indicare le pagine riferite:
![enter image description here](https://i.ibb.co/N6hNr1W/image.png)
Nell'esempio verrà scelto Q dato che ha 2 archi per arrivare alla prima pagina referenziata, gli altri nodi non referenziati hanno solo 1 arco di distanza.

Ad oggi non risulta conveniente implementare questa tecnica seppure sulla carta sia ottima, perché richiede un gran costo prestazionale per la costruzione e le varie modifiche al grafo.

## il modello working set

Il **working set** rappresenta l'insieme delle pagine su cui un processo sta lavorando in un determinato momento.

Grazie al **principio di località** possiamo scegliere un range di pagine da caricare in memoria e questo range scorre le pagine nel tempo, minimizzando le possibilità di page fault dato che prevediamo le pagine che utilizzerà il processo.

![enter image description here](https://i.ibb.co/dKkdwmp/image.png)

Il range di pagine va scelto proporzionalmente alla dimensione del programma da eseguire. 
Scegliere un range di pagine troppo grande non porterebbe vantaggi significativi rispetto al page fault

### Clock Working set

Anche in questo caso è possibile tenere una lista circolare dove ogni pagina oltre a mantenere il bit di riferimento tiene anche il tempo risalente all'ultimo utilizzo di quella pagina

Un esempio di funzionamento:

![enter image description here](https://i.ibb.co/yd1Kp7G/image.png)

![enter image description here](https://i.ibb.co/k8Xw8T5/image.png)


### Sostituzione Page Fault Frequency

La sostituzione **PFF** (*Page Fault Frequency*), si basa sul quanto spesso un processo fa *page fault*, il tempo che passa tra un page fault ed un altro è detto **interfault**.

Questo meccanismo non fa altro che regolare la quantità di pagine in memoria per il processo in base al suo numero di page fault: se vengono fatti tanti page fault è probabile che abbia poche pagine in memoria, se non fa mai page fault forse ha troppe pagine in memoria

### Rilascio delle pagine

Può capitare che una pagina che non verrà più utilizzata rimanga molto in memoria prima che l'algoritmo di sostituzione se ne accorga.
Il processo può risolvere questo problema chiedendo volontariamente di **rilasciare la pagine**, ottimizzando così la liberazione della memoria piuttosto che aspettare che tale pagina esca dal working set.

## Dimensione della pagina

La scelta della dimensione della pagine è molto importante:

- con pagine piccole:
	- minor frammentazione interna
	- working set più piccolo
	- minor spreco di memoria
	- abbiamo però una tabella delle pagine molto grande
- con dimensione grande:
	- migliora l'efficacia della TLB (dato che punta ad una maggiore quantità di indirizzi)
	- riduce il numero di trasferimenti tra memoria secondaria e principale
	- si ha una tabella delle pagine più piccola
- si può avere anche multiple dimensioni della pagina
	- in questo caso avremo la possibilità di frammentazione esterna


## Strategie di sostituzioni globali

Finora abbiamo visto delle strategie di **sostituzioni locali per il singolo processo**, ma possiamo anche applicare delle strategie che lavorano su tutte le pagine in memoria indipendentemente dal processo.

Ad esempio **LRU globale**: Sostituisce la pagina meno utilizzata in tutta la memoria.

oppure la **SEQ** che usa il LRU per rimuovere le pagine meno utilizzate fino a che non rileva dei page fault di pagine contigue, in quel caso per interrompere la sequenza di errori utilizza la tecnica MRU (*Most Recently Used*), che rimuove la pagina utilizzata più di recente, basandosi sul fatto che molto probabilmente verrà rimessa in memoria a breve.


# Segmentazione

La segmentazione è un altro modo di dividere la memoria in blocchi, questi blocchi non hanno una dimensione fissa come le pagine.
I segmenti contengono porzioni del programma significative, come array, funzioni, lo stack, ecc...

Data la diversa dimensione dei segmenti è possibile che si verifichi della **frammentazione esterna**

Il funzionamento è comunque simile a quello delle pagine:

L'indirizzo virtuale è diviso in ***numero di segmento* e *offset***, al posto della tabella delle pagina abbiamo una **tabella dei segmenti** la quale contiene oltre all'indirizzo del segmento in memoria fisica, anche altri bit di controllo (bit di residenza, la lunghezza del segmento per evitare di andare in overflow, bit per il tipo di operazione) e l'indirizzo di memoria secondaria dove trovare il segmento nel caso non sia in RAM.

![enter image description here](https://i.ibb.co/z4xFCmF/image.png)

### Condivisione

La condivisione di un segmento con più processi è più efficiente rispetto alle pagine proprio perché i segmenti rappresentano un blocco logico di dati. Sono necessari dei meccanismi di sicurezza per controllare che i giusti processi abbiano accesso a tale segmento.

Un meccanismo per implementare questa sicurezza è tramite delle **chiavi di protezione della memoria**, cioè dei valori associati ad ogni processo e ad ogni segmento (modificabili solo tramite istruzioni privilegiate).
Se la chiave del processo combacia con la chiave del segmento allora il processo è autorizzato ad accederci.

Il sistema operativo può eseguire un controllo ulteriore su quali operazioni sono permesse su un segmento, ciò viene fatto dal **bit di protezione**.

Un segmento può consentire le seguenti operazioni:

- *Read*
- *Write*
- *Execute*
- (*Append*) aggiungere informazioni senza modificare quelle esistenti

possiamo realizzare varie 7 combinazioni (che corrispondono ai valori del comando Linux `chmod`)

|  | Read | Write | Execute |
|:--:|:--:|:--:|:--:|
| Mode 0 | ❌| ❌| ❌|
| Mode 1 | ❌| ❌| ✅|
| Mode 2 | ❌| ✅| ❌|
| Mode 3 | ❌| ✅| ✅|
| Mode 4 | ✅| ❌| ❌|
| Mode 5 | ✅| ❌| ✅|
| Mode 6 | ✅| ✅| ❌|
| Mode 7 | ✅| ✅| ✅|


## Sistemi con paginazione e segmentazione

Per cercare di sfruttare i vantaggi delle due tecniche analizziamo una versione ibrida di paginazione e segmentazione.

- con la paginazione:
	- non abbiamo frammentazione esterna
	- abbiamo una organizzazione semplice della memoria
- con la segmentazione:
	- condivisione dei segmenti migliore
	- suddivisione delle memoria in blocchi significativi

Andiamo a **suddividere i segmenti in pagine**.
La memoria virtuale è quindi divisa in segmenti che a loro volta sono suddivisi in pagine mentre la memoria fisica è divisa in pagine.

Un indirizzo virtuale è quindi diviso in: numero di segmento, numero della pagina all'interno del segmento, offset all'interno della pagina.

![enter image description here](https://i.ibb.co/d62ZvYx/image.png)

Facciamo sempre uso di una TLB che contiene le pagine più utilizzate.
Prima si cerca la pagina nella TLB, se non c'è si cerca il segmento nella tabella dei segmenti. Da lì troviamo l'indirizzo iniziale di una page table e andremo a trovare la riga che ci restituirà il page frame

### Condivisione

In questo sistema abbiamo che due processi condividono della memoria se la propria tabella dei segmenti punta alla stessa page table. 
In questo caso il controllo dei permessi è facilitato dalla segmentazione, mentre la condivisione viene facilitata dalla paginazione.


# File system

Parliamo ora di **memoria secondaria**.

Ogni dispositivo di memoria secondaria possiede un **file system** cioè la struttura che organizza i file e lo spazio libero, controlla gli accessi e possiede meccanismi di backup, recovery e crittografia.

Nella memoria secondaria sono tenuti i **file**, cioè una raccolta di dati (bytes) trattati come una entità singola.

Il **volume di un disco**, rappresenta quanti dati esso può contenere. Gli ordini di grandezza odierni sono GB oppure TB

Il sistema operativo può generare una interfaccia grafica per poter permettere all'utente di navigare nel file system.

## I file

Come detto prima un file è un insieme di dati, questo insieme di dati lo possiamo associare ad un **nome**, questo nome è diviso in 2 parti: il nome effettivo del file e una **estensione**.

La prima parte serve specialmente all'utente poter riconoscere il file, mentre l'estensione aiuta il sistema operativo a capire come quel file può essere trattato (quali programmi sono in grado di leggerlo).

I file sono un insieme di **record**, cioè un insieme di caratteri. Questi record possono essere **fisici**, nel caso in cui si parli di un blocco di informazioni salvato su un disco fisico.
Mentre si parla di **record logici** con blocchi di informazioni che vengono trattati come una entità unica da un software.
Quando ciascun record fisico contiene esattamente un record logico si dice che il record è **non bloccante**, mentre se per ogni record fisico può contenere più record logici allora il record è detto **bloccante**.

### Tipi di file

I file possono essere generalmente di tre tipi:

- **File puri**: contengono delle informazioni dell'utente
- **Directory**: sono le cartelle, cioè un insieme di file e altre cartelle
- **File speciali**: sono file a supporto del sistema, specialmente che si interfacciano con dispositivi di I/O.


### Accesso

l'accesso ad un file può essere di due tipi:
- **sequenziale**: vengono letti i byte dall'inizio alla fine, senza possibilità di fare salti
- **casuale**: è possibile leggere i byte in qualsiasi ordine

### Attributi

I file possiedono, oltre che al loro contenuto grezzo, anche molti **metadati** cioè attributi extra che servono per avere più informazioni su un determinato file.

Ad esempio: dimensione, la data dell'ultima modifica, data di creazione, quale protezione agli accessi possiede, ecc...

### Operazioni

È possibile fare una gran quantità di operazioni su un file, le principali sono i seguenti (i nomi sono abbastanza auto esplicativi):

- Open
- Read
- Get attributes
- List
- Close
- Write
- Set attributes
- Create
- Append
- Rename
- Destroy
- Seek
- Copy

## Directories

Le *directories* sono un tipo di file che serve per raggruppare altri file.
Lo scopo principale di questo tipo di file è quello dell'**organizzazione** dei file.

Una directory memorizza informazioni quali:
- Nome del file
- *Location* (il *pathname* oppure il blocco fisico) 
- Dimensione
- Tipo
- Tempo di ultima modifica, accesso e creazione

### File system piatto

Una volta si usava un file system piatto, in cui tutti i file erano in una singola directory.
I due maggiori problemi erano l'impossibilità di chiamare due file con lo stesso nome, e il secondo è che era necessaria una ricerca lineare per cercare ogni file.

### File system gerarchico

La struttura più utilizzata oggi è la **struttura ad albero**.
Nel **file system gerarchico** (ad albero) si ha una maggiore organizzazione, più flessibilità e più prestazioni.

- È presente una directory principale (la radice dell'albero) da cui si diramano tutti i file.
- I nomi dei file devono essere univoci solo all'interno della loro directory padre.
- I singoli file sono identificati da un *pathname*, cioè una stringa che rappresenta il percorso dell'albero per raggiungere il determinato file

In windows i *pathname* sono in questa forma: `C:\utenti\nome_utente\cartella1\file.txt`
mentre in Unix i *pathname* sono in questa forma `/home/utente/cartella1/file.txt`

![enter image description here](https://i.ibb.co/6PdZtyr/image.png)

La navigazione dell'albero viene agevolata dalla possibilità di specificare dei ***pathname* assoluti** che quindi partono dalla radice e arrivano al nodo specifico, alternativamente si possono usare dei ***pathname* relativi** che partono dalla directory in cui ci si trova in questo momento (chiamata *working directory*)

### Link

All'interno di una directory si possono trovare dei riferimenti (link) ad altri file situati in altre directory. Questi collegamenti possono essere di due tipi:

- *soft link*: contiene il *pathname* del file puntato.
	Nel caso in cui il file puntato venisse cancellato o spostato in un altra directory, il link punterebbe ad un percorso inesistente.
	è semplice da fare ed è più flessibile: può attraversare più file system, è indipendente dal disco
- *hard link*: contiene lo specifico blocco di memoria dove è presente il file nel dispositivo secondario.
	Se il file viene cambiato di posizione all'interno del disco allora il link diventa non valido.
	inoltre gli hard link sono disponibili solo sul file system principale (che si riferisce al disco dove è installato il sistema operativo)


### Integrità

Molti file system creano un cosiddetto **super-blocco** contenente le informazioni critiche per mantenere l'integrità del file system, che comprendono:
- un identificativo del file system
- il numero di blocchi nel file system
- la posizione dei blocchi liberi del dispositivo
- la posizione della directory radice
- la data e l’ora in cui il file system ha subito l’ultima modifica

più copie di questo super-blocco vengono sparse per il disco per avere delle possibilità di recupero nel caso di corruzione del file system


### Mounting

è possibile collegare più file system insieme, operazione detta *mounting*.

Nel file system viene scelta una directory particolare detta **punto di mount** che sarà il punto di collegamento dove andrà collegata la radice del file system da montare.

Vengono usate delle **tabelle di mount** per tenere traccia dei punti di mount e dei file system a cui puntano

## Organizzazione dei file

Un disco è suddiviso in partizioni. All'inizio del disco è presente l'**MBR**(Master boot record) che contiene le istruzione per avviare il sistema. Solitamente contiene anche la tabella delle partizioni del disco.

## Allocazione dei file

Vediamo vari modi di allocare i file nel disco secondario

### Allocazione sequenziale

I file sono posizionati in indirizzi contigui.
È una implementazione semplice ma con **scarse prestazioni** e possibile **frammentazione esterna**, inoltre se il file cresce di dimensioni è possibile che vada riposizionato in un punto che lo contenga.

### Allocazione non contigua con liste collegate

Abbiamo delle liste in cui il nodi sono composti da un blocco dei dati di un file e dal puntatore al nodo successivo della lista.
Ogni file ha la propria lista.

Con questa implementazione non abbiamo più frammentazione esterna ma abbiamo possibile frammentazione interna nell'ultimo elemento di ogni lista.
i puntatori, per quanto poco, sprecano spazio utile.
Inoltre con file grandi si ha una lista molto grande da scorrere. Considerare blocchi più grandi riduce la lunghezza ma aumenta i tempi di caricamento.

D'altra parte il cambio di dimensione del file viene gestito molto efficientemente dato che bisogna solo cambiare i puntatori della lista.

### Allocazione non contigua tabellare

Vengono utilizzate tabelle che memorizzano dei puntatori ai blocchi dei file.

Nella directory è presente il primo blocco del file, quel blocco viene utilizzato come indice di una tabella per determinare quale sarà il prossimo blocco, il quale a sua volta verrà utilizzato di come indice. Fino al raggiungimento di un valore NULL.

![enter image description here](https://i.ibb.co/tmct64X/image.png)

Avendo una tabella molto lunga, si hanno i blocchi del file sparsi per tutta la tabella, di conseguenza seguire molti puntatori della tabella potrebbe essere oneroso.

La dimensione della tabella si può calcolare facilmente facendo il prodotto tra il numero di blocchi e il numero di bit di cui sono composti gli indirizzi di memoria

$$\text{dimensione tabella} = \#\text{blocchi} \cdot \text{grandezza in bit degli indirizzi}$$

$\#\text{blocchi} = \frac{\text{dimensione del disco}}{\text{dimensione del blocco}}$

Un conosciuto file system che utilizza questo metodo è il **FAT**
- FAT16 utilizza 16 bit per rappresentare gli indirizzi di memoria
- FAT32 ne utilizza 32
- exFAT ne utilizza 64

### Allocazione non contigua indicizzata

Ogni file ha un proprio **blocco indice**, cioè una tabella contenente puntatori a blocchi di dati del file. È anche possibile che alcune righe della tabella puntino ad altri blocchi indice, tecnica chiamata **chaining**

![enter image description here](https://i.ibb.co/RHn80q5/image.png)

Con questa tecnica si riesce a sfruttare meglio la cache dato che possiamo mettere in cache i blocchi indice che non sono molto grandi.
I file system cercano di tenere il puntatore con il relativo blocco dati molto vicini in memoria secondaria in modo da essere acceduti più velocemente dopo il riferimento.

In Unix i blocchi indice sono chiamati **i-node**, mentre i blocchi indice puntati da altri blocchi indice sono detti **blocchi indiretti**

Gli i-node contengono vari attributi del file come: proprietario, dimensione, data creazione, i puntatori ai blocchi dati e i puntatori ai blocchi indiretti (generalmente c'è una gerarchia a 3 livelli) 

## Organizzazione delle directories

Vediamo come sono organizzati gli attributi dei file nelle directories:
- direttamente nelle righe della directory (tecnica utilizzata da Windows)
- le directories puntano agli i-node i quali hanno gli attributi (tecnica utilizzata da Unix)

Vediamo 3 modi diversi di gestire il nome dei file:

- Si riserva una dimensione fissa (ad esempio 255 caratteri) e il nome del file non può eccedere tale dimensione.
- Il nome viene messo alla fine degli attributi lasciandogli una dimensione variabile e si usa un carattere speciale per terminare il nome. Così facendo, però, se il file venisse eliminato, un successivo file con un nome più lungo non ci starebbe (frammentazione esterna)
- I nomi vengono messi in una memoria dinamica condivisa chiamata **heap** separati da un carattere speciale, tra gli attributi di ogni file ci sarà un puntatore che punta all'inizio del proprio nome in questa area di memoria

## Gestione dello spazio libero

Nel file system bisogna tenere traccia, oltre che ai blocchi che sono occupati, anche di quelli che sono liberi. Vediamo i vari approcci per tenere traccia dei blocchi liberi.

### lista dei blocchi liberi

Utilizziamo una *linked list* contenente le posizioni dei blocchi liberi:
- quando un file deve essere allocato cerca nella lista il numero di blocchi necessari  partendo dalla testa della lista
- i nuovi blocchi liberi vengono messi in coda alla lista
- per migliorare le operazioni di *append* e *remove* ci sono dei puntatori alla testa e alla coda della lista

![enter image description here](https://i.ibb.co/51PcF5D/image.png)

lo svantaggio di questa soluzione è che se un file è molto grande deve scorrere molti elementi della lista, quindi si hanno molti accessi in memoria secondaria.
Inoltre un file che richiede più blocchi per essere salvato è probabile che venga frammentato in parti sparse nel disco, rendendo l'accesso successivo al file più dispendioso (inoltre difficilmente elementi della lista contigui rappresentano blocco in memoria contigui). 

Su dischi molto grandi la lista può diventare molto grande

### bitmap

Abbiamo una mappa di bit in cui il bit:
- vale 1 se il blocco è occupato
- vale 0 se il blocco è libero

l'i-esimo bit corrisponde all'i-esimo blocco di memoria

In questo modo il file system può determinare velocemente dei blocchi contigui liberi (non c'è frammentazione).
D'altro parte è probabile che prima di trovare un blocco libero si debba cercare in tutta la mappa.

Diversamente dalla lista, qui ogni elemento della mappa è un solo bit (e non un puntatore) quindi lo spazio occupato dalla mappa è decisamente meno rispetto alle liste.

## Protezione dell'integrità dei dati

Un sistema deve prevedere che, nel suo ciclo di vita, possono accadere dei crash, dei disastri naturali, dei malware che potrebbero intaccare i dati salvati in memoria secondaria.
È necessario prevedere delle tecniche di recupero e ripristino dopo un guasto.

### Backup

Una prima tecnica è quella del **backup**, cioè una copia dei dati.
quando la copia originale dei dati viene corrotta in qualche modo, utilizziamo il backup per ripristinare i dati allo stato precedente (tale processo viene detto **recovery**).

Per mantenere sempre delle copie recenti dei dati è necessario fare il backup frequentemente.

Abbiamo due tipologie di backup:

- **backup fisico**
	Viene fatta una duplicazione dei dati bit per bit, senza mantenere informazioni sulla struttura logica di tali informazioni.
- **backup logico**
	Vengono duplicati i dati con la loro struttura logica e gerarchia (ricordando ogni file a che percorso apparteneva).
	In questo tipo di backup possiamo utilizzare i cosiddetti **backup incrementali** in cui vengono salvati solo i file che sono stati modificati rispetto all'ultimo backup fatto (evitando quindi di ricopiare tutto da capo)

### File system strutturato a log

Se si verifica un errore durante una operazione di scrittura su disco i file potrebbero essere lasciati in uno stato inconsistente, ciò va evitato.

Per evitarlo si utilizzano sistemi RAID (che vedremo più avanti) oppure file system basati su transazioni. Vediamo questi ultimi:

Una **transazione** è un raggruppamento di operazioni che vengono viste come fossero una unica operazione atomica. Quindi una transazione, per essere completata, deve completare con successo tutte le operazioni al suo interno. Se almeno una non viene completata allora tutta la transizione fallisce e si ritorna allo stato precedente alla sua esecuzione (processo che viene chiamato *rollback*)

Tali transazioni vengono implementate registrando il risultato di ogni singola operazione all'interno della transazione in un **file di log** (e non direttamente sui file interessati). Al termine di tutte le operazioni verranno salvate le modifiche della transazione in memoria secondaria.

Poiché i log possono diventare molto grandi, vengono utilizzati dei **checkpoint** che puntano all'ultima transazione che è stata trasferita in memora secondaria.
Se il sistema si blocca, il file system andrà ad esaminare solo le transazione avvenute dopo il checkpoint.

La **paginazione shadow** è una tecnica in cui le transazioni vengono eseguite su un blocco libero in memoria, una volta completata correttamente la transazione, si aggiornano i metadati del blocco originale per farlo puntare al nuovo blocco, di conseguenza quello originale viene deallocato.

I file system che utilizzano la tecnica dei log vengono anche chiamati **journaling file system**, viene utilizzato l'intero disco come file di log.


## Controllo degli accessi ai file

Dei file potrebbero contenere dei dati che devono essere visibili solo a determinati utenti e non a chiunque. Servono quindi dei metodi per gestire chi può accedere a determinati file, vediamo due modi per fare ciò: tramite matrice di controllo e controllo per classi di utenti.

### Matrice di controllo

Abbiamo una matrice di bit in cui nelle righe abbiamo gli utenti mentre nelle colonne abbiamo i file. Se l'elemento della matrice è a 0 significa che l'utente in quella riga non può accedere al file di quella colonna, mentre se è 1 allora può accedere.

![enter image description here](https://i.ibb.co/RPvLJph/image.png)

Si può facilmente dedurre che all'aumentare degli utenti e dei file, la matrice diventerebbe enorme.

### controllo per classi di utenti

In questo caso viene controllato l'accesso al file in base ad una classe di utenti, che può essere:
- il proprietario del file
- un utente specifico
- un gruppo di utenti
- accessibile a tutti

ogni file all'interno del proprio descrittore conterrà quale classe può accedere ad esso.

## Accesso ai dati

Vediamo dei metodi di accesso ai file.

- **metodi di accesso a coda**
	Questi metodi vengono utilizzati quando può essere previsto quali sono i record che verranno richiesti.
	vengono quindi già resi disponibili (in memoria principale) dei record prevedendo che verranno richiesti a breve, migliorando così le prestazioni e i tempi di attesa.

- **metodi di accesso di base**
	Questi metodi vengono utilizzati quando non è possibile prevedere i record che verranno richiesti

- **file mappati in memoria**
	è possibile mappare i dati di un file in uno spazio di indirizzamento virtuale, poichè il processo utilizza anch'esso indirizzi virtuali la gestione viene più comoda.
	Quando un processo modifica dei dati (che sono stati portati in memoria principale) la relativa pagina virtuale viene marcata come *dirty*, ad intervalli regolari (e anche quando il file verrà chiuso) il contenuto delle pagine *dirty* viene copiato in memoria secondaria.

## controllo degli accessi

Il sistema operativo deve assicurarsi che gli utenti non facciano un uso improprio delle risorse del computer.
Per fare ciò solitamente vengono utilizzate le seguenti tecniche:
- Matrice di controllo degli accessi:
	Simile alla matrice che abbiamo visto precedentemente ma in questo caso al posto di 0 e 1 abbiamo i privilegi ammessi e non (lettura, scrittura, esecuzione).
- Liste di controllo di accesso (*access control lists*)
	Simile alla matrice di controllo vista precedentemente ma in questo caso vengono solo salvati i privilegi espliciti (se un utente non ha un privilegio su un determinato file, non lo salviamo nella lista). le liste possono essere basate sui file ed elencare i privilegi per ogni utente, o viceversa elencare, per ogni utente, i privilegi detenuti su ogni file.
	A questo punto però per ricavare i privilegi specifici per un utente o per un file bisogna scorrere tutta la lista.
- Liste di capacità (*capability lists*)
	Una capacità è un puntatore che garantisce dei privilegi ad un soggetto sul particolare oggetto puntato. Ogni capacità è contrassegnata da un identificatore, ma si possono fare delle copie.
	Definiamo **dominio di protezione** come l'insieme delle capacità di un utente.

I privilegi sono generalmente: **lettura, scrittura ed esecuzione**, e in base al modello di sicurezza possiamo avere:

- **DAC** (*Discretionary Access Control*) in cui il proprietario del file controlla i privilegi
- **MAC** (*Mandatory Access Control*) in cui è sistema centrale e gestire i privilegi

È importante sottolineare la differenza tra la politica di sicurezza e il meccanismo di sicurezza:
- **politica di sicurezza**: definisce quali privilegi ai file vengono assegnati agli utenti. Solitamente si cerca di dare il **privilegio minimo** possibile agli utenti, per poi aumentarlo in base alle situazioni specifiche.
- **meccanismo di sicurezza**: implementa la politica di sicurezza.


## Prestazioni del file system

Dato che i tempi di accesso ai dischi secondari è molto lento, vediamo quali ottimizzazione sono possibili per migliorare le prestazioni:

- **uso della cache**: spostare alcuni blocchi in memoria principale
- **read ahead**: leggere il blocco successivo oltre a quello richiesto, prevedendo che sarà richiesto a breve
- **allocare i file vicini**: posizione i blocchi appartenenti allo stesso file vicini fisicamente migliora il tempo di ricerca e lettura
- **ridurre la frammentazione**: cercare di eliminare i buchi vuoti in mezzo al disco, ravvicinando gli spazi vuoti del disco.


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

# Caso di studio Linux

**Linux** è un sistema operativo che rappresenta una valida alternativa ai sistemi più famosi quali: Windows e MacOS.

Più generalmente Linux rappresenta una famiglia di sistemi operativi che utilizzano il kernel Linux, in cui la caratteristica comune è l'utilizzo e il sostegno al software **open source**, cioè software con codice sorgente disponibile liberamente per tutti.

I sistemi Linux vengo già ampiamente utilizzati in ambito server, ma l'utilizzo nel privato sta aumentando di anno in anno.

Come detto Linux rappresenta una famiglia di sistemi operativi, gli elementi di tale famiglia sono dette **distribuzioni**. Dato che il codice sorgente è aperto a tutti, molti sviluppatori creano la propria distribuzione di Linux.
Ogni distribuzione può variare dalla dotazione di programmi installati insieme al sistema (compresa l'interfaccia grafica), all'ottimizzazione specifica per l'hardware più moderno o più obsoleto, alla più o meno grande adesione ai principi del software libero, fino ai dettagli tecnici.

![enter image description here](https://i.postimg.cc/3Rr8FjQY/linux.png)

## Interfaccia

Su Linux è molto comune utilizzare il terminale per operare sul proprio sistema. Nonostante ciò può essere comunque dotato di una interfaccia grafica, definita **a livelli**.

- Il primo livello è il sistema grafico che si chiama **X Window System**, esso non è parte integrante del kernel ma è un normale processo. Esso rappresenta l'infrastruttura base per rappresentare informazioni grafiche (esempi comuni sono: X11, Wayland)

- Al secondo livello abbiamo il **Window manager** che gestisce la posizione, dimensione e l'aspetto delle finestre (esempi comuni sono: i3, Openbox, Awesome)

- Al terzo livello abbiamo il **Desktop environment** che racchiude l'insieme di pannelli, icone, temi, e applicazioni che rendono l'interfaccia grafica del sistema coerente (Esempi comuni sono: GNOME, KDE, Xfce)


## Architettura

Linux ha un kernel **monolito**, con **componenti modulari**.
Con componenti modulari si intende che porzioni di codice possono essere caricate o rimosse dal kernel mentre il sistema è in esecuzione, senza la necessità di riavviare l'intero sistema (un esempio sono i driver).

Il kernel è composto principalmente da:
- gestore dei processi
- gestore della comunicazione tra processi
- gestore della memoria
- gestore del file system (il *virtual file system* fornisce una interfaccia unica per più file system)
- gestore di dispositivi I/O
- gestore della rete

![enter image description here](https://i.ibb.co/92P8vGV/image.png)

## Gestione dei processi

Su Linux i **processi e i thread** vengo chiamati **task**, e lo stato interno di un task (il descrittore) viene racchiuso un una struttura chiamata **task_struct**.

Il gestore mantiene i riferimenti ai task tramite l'uso di una **tabella hash** e una **lista circolare doppiamente linkata**.

Nella seguente immagine è rappresentato il ciclo di vita di un task:

![enter image description here](https://i.ibb.co/4j1FySY/image.png)
Una cosa importante da annotare è che:
Il tempo viene diviso in epoche, e, in ogni epoca, viene assegnato ad ogni processo il proprio intervallo di tempo.
Se il processo finisce il suo intervallo di tempo, passa allo stato *expired* fino a quando non inizia la nuova epoca.

### Creazione di processi

Su Linux abbiamo due principali modi di creare nuovi processi:
- `fork` quando un processo esegue una `fork` viene creato un processo figlio che condivide lo spazio di indirizzi del padre. Solo quando viene fatta una modifica al figlio allora viene fatta una copia separata dello spazio degli indirizzi diventando effettivamente processi indipendenti (tecnica detta *copy-on-write*)
- `clone` permette di specificare fin da subito in modo più dettagliato quali risorse condividere o non condividere tra i processi padre e figlio.

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
Generalmente i task IO-bound hanno una priorità alta perché richiedono potenzialmente poco tempo di CPU

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

Per nuovi processi si cerca generalmente di allocare page frame in memoria alta. Se non possibile si utilizza la zona normale, altrimenti si utilizza la memoria bassa.

è presente un **memory pool**, cioè una area riservata per processi del kernel o per moduli driver. Questa area deve essere sempre disponibili per evitare *page fault* critici.

Le pagine utilizzate di recente vengono messe in **cache** che utilizza la politica **write-back**.

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


 # Caso di studio Windows

## Architettura

 Il kernel su cui si basa il sistema operativo Windows è chiamato NTOS (New Tecnology Operative System).
 L'architettura su cui si basano i più moderni sistemi operativi Windows è chiamata **Windows NT**.
 
### API

Le API utilizzate per creare le applicazioni Windows sono chiamate **WinAPI**, c'è ne sono di varie versioni ad esempio *Win32* (per la versione a 32bit).
Esse sono responsabili di praticamente ogni aspetto del sistema operativo: creare e gestire processi e thread, fare operazioni su file, gestire la sicurezza, gestione della memoria principale, operare sull'interfaccia grafica.
Le chiamate a sistema sono implementate in un componente del kernel chiamato *Executive NTOS*

### Oggetti

Spesso le chiamate alle API creano e operano su degli **oggetti** (file, processi, thread, pipe, ...) e restituiscono al chiamante un **handle**, una sorta di identificativo (simile ad un puntatore ma non esattamente, dato che non punta un indirizzo) dell'oggetto con cui poter fare delle operazioni su tale oggetto.
Gli *handle* non possono essere direttamente passati ad altri processi ma in alcuni casi è possibile duplicare un *handle* e passarlo in modo protetto ad altri processi.

Gli **oggetti** sono delle **strutture dati** che rappresentano una **risorsa fisica** (una periferica) **o logica** (un processo).
Gli oggetti possono (ma non è necessario) avere dei nomi associati.
Vengono gestiti da un **gestore di oggetti**, che è un sottosistema presente nel livello executive del kernel.
Il gestore vede e gestisce gli attributi dell'oggetto, i dati che contiene e le operazioni che può fare. Si occupa anche di creare e distruggere gli oggetti.

## Struttura dell'architettura

Il kernel NTOS viene definito un **kernel ibrido** in quando risulta essere una via di mezzo tra il micro-kernel e il kernel monolitico.
È composto da due livelli principali:
- **Kernel**: Si occupa dello scheduling, gestione delle interruzioni, sincronizzazione tra i thread e altre funzioni
- **Esecutivo**: Si trova sotto il livello kernel e si occupa principalmente di: gestione di I/O, gestione degli oggetti, sicurezza, gestione della memoria e altre funzioni

Un componente importante del kernel è l'**Hardware Abstraction Layer** (HAL): uno strato software interposto tra il kernel e l'hardware. È stato progettato per nascondere le differenze hardware e per fornire una piattaforma unificata per le applicazioni in esecuzione.
Per esempio un programma, invece di aprire direttamente un file chiederà all'HAL di farlo per lui e l'HAL, appena esaudita la richiesta, gli passerà un riferimento al file per la lettura.

A **livello utente** è importante la presenza di:
- DLL (*Dynamic Link library*): cioè delle librerie che i processi possono collegare per avere funzioni particolari. tali librerie vengono caricate in memoria quando necessario e sono condivise tra i processi.
- Servizi di sistema: sono processi eseguiti in modalità utente che sono attivi in *background* per garantire il corretto funzionamento del sistema
![enter image description here](https://i.ibb.co/FYbTwGn/image.png)


## Registro di sistema

Il registro di sistema è un particolare file, strutturato con una logica ad albero, che memorizza tutti i **dati relativi  a hardware, software e utenti**.
I nodi interni dell'albero (che possiamo vedere come fossero delle cartelle) sono chiamate **chiavi**, mentre le foglie sono chiamate **valori**. Ogni valore è composto da [nome, tipo, dato]:
- il nome è una normale stringa
- il tipo indica il tipo del dato (stringa, intero a 32 bit, intero a 16 bit, esadecimale, ...)
- il dato rappresenta l'effettivo contenuto

Sono presenti 6 nodi radice (nei moderni sistemi sono 5) :
- HKEY_LOCAL_MACHINE
- HKEY_USERS
- HKEY_PERFORMANCE_DATA (non più presente)
- HKEY_CLASSES_ROOT
- HKEY_CURRENT_CONFIG
- HKEY_CURRENT_USER
![enter image description here](https://i.ibb.co/tzL9wdN/registri.png)

## Gestione interruzioni

È presente un servizio che si occupa di gestire le interruzioni chiamato **ISR** (*Interrupt Service Routine*). Ogni interruzione ha una priorità.

Nell'immagine seguente si vedono le varie priorità che si suddividono principalmente in:
- livello passivo
- livello APC (chiamate di procedure asincrone)
- livello DPC (chiamate di procedure differite)
- livello hardware 
- livello critico

![enter image description here](https://i.ibb.co/54nyMSC/image.png)

## Processi e thread

Su Windows abbiamo un classico utilizzo di **processi e thread**, è però presente una gerarchia più varia, infatti abbiamo anche il concetto di **job e fibra**.
Possiamo rappresentare la loro relazione nel seguente schema:

![enter image description here](https://i.ibb.co/xCPzPCM/image.png)

### Job

Un Job è un gruppo di processi che vengono trattati come una singola unità.
Servono principalmente per gestire le risorse utilizzate dai propri processi.
Contengono altre informazioni come: il numero massimo di processi, il tempo totale di CPU disponibile per ogni processo, il massimo utilizzo di memoria per processo, restrizioni sulla sicurezza, e altro...

### Processo

I processi sono strutturati in 3 blocchi:
- PEB (*Process Environment Block*): contiene informazioni sul processo utilizzabili dai thread, Le DLL, e altre informazioni utili al sistema operativo
- Blocco EPROCESS (usato nella parte *executive*): descrive il processo, contiene informazioni come ID del processo, token di accesso per la sicurezza, gli handle, e altro...
- Blocco KPROCESS (usato nella parte *kernel*) contiene informazioni per lo scheduling e per la sincronizzazione

#### Creazione e terminazione dei processi

La creazione di un processo avviene tramite una chiamata alle API, generalmente processo padre e figlio sono indipendenti fin da subito anche se è possibile ereditare degli attributi. Ogni processo creato ha un proprio thread di partenza, da cui può generarne altri.

Per la terminazione abbiamo che un thread dirige la terminazione, esso deve attendere la terminazione di tutti gli altri thread del processo. La terminazione di processo figlio e padre è indipendente.

### Thread

Windows utilizza dei thread ibiridi tra kernel e utente.

Un thread è strutturato in modo simile al processo:
- TEB (*Thread Environment Block*): contiene informazioni sul thread, le sezioni critiche (parti di programma accedute da più thread) e altro...
- Blocco ETHREAD (usato nella parte *executive*): descrive il thread, contiene informazioni come ID del thread, richieste di I/O, vari indirizzi tra chi il puntatore al proprio processo.
- Blocco KTHREAD (usato nella parte *kernel*) contiene informazioni per lo scheduling e per la sincronizzazione

Il thread possiede anche una TLS (*Thread Local Storage*), cioè un'area dove i thread possono salvare dei particolari dati locali

Windows fa utilizzo di **thread pooling** quindi un insieme di thread dormienti che si attivano quando viene richiesto un nuovo lavoro.

### Fibra

Le fibre sono delle unità di esecuzione che vengono create e gestite da un thread. Le fibre quindi non sono schedulate dal sistema operativo (il sistema operativo è proprio ignaro della loro presenza).
Possiamo vedere le fibre come dei thread a livello utente, infatti esse vengono utilizzate per fare porting di applicazioni su architetture che fanno uso di thread al livello utente.

Come per i thread, anche le fibre hanno un'area di memoria privata, chiamata *Fiber Local Storage* (FLS)

## Scheduling dei thread

Lo scheduling di windows è a livello thread, quindi i processi non vengono schedulati ma bensì solo i thread.

![enter image description here](https://i.ibb.co/qrsVh1N/image.png)

Il thread hanno 32 livelli di priorità: 0 = priorità minima; 31 = priorità massima.

Ogni livello di priorità è gestito da una coda round-robin.

I thread *real-time* utilizzano una priorità statica nel range 16 - 31
Gli altri thread utilizzano una priorità dinamica nel range 0 - 15


## Gestione delle memoria

Il **Virtual Memory Manager** (VMM) è il componente del kernel (sezione *Executive*) che si occupa della gestione della memoria.
- Si utilizza la tecnica di **copy-on-write** sulle modifiche di file/librerie condivise.
- Utilizza l'**allocazione lazy**: cioè un approccio che ritarda l'effettiva assegnazione di pagine di memoria fino a quando non è strettamente necessario, riducendo così il consumo di risorse iniziale e migliorando i tempi di avvio e la risposta del sistema.
- Quando vengono fatte operazioni di I/O vengono spostate più pagine del necessario, prevedendo che verranno richieste a breve.
- Viene riservata una parte della memoria del disco secondario per mettere le pagine che non ci stanno in memoria RAM, la zona di memoria viene chiamata **pagefile**.

Vengono utilizzate pagine a dimensione fissa e la traduzione tra indirizzi virtuali e fisici utilizza 4 livelli di pagina.

![enter image description here](https://i.ibb.co/wLV7F7r/image.png)

Viene sfruttata una TLB per mantenere gli indirizzi utilizzati di recente.

Una pagina virtuale si può trovare in uno dei seguenti stati:
- **libera**: non è attualmente in uso (non mappata in memoria principale), un eventuale riferimento ad essa causerebbe un page fault.
- **impegnata** (committed): la pagina è mappata in memoria principale
- **riservata**: la pagina è riservata per un processo, e non può venir allocata per altri processi

La VMM può generare delle **pagine larghe** (o grandi), cioè dei gruppi di pagine contigui che vengono trattate come una singola pagina.

### Sostituzione di pagina

Windows identifica il **working set** di un processo, come tutte le pagine presenti in memoria principale di quel processo.
Per la sostituzione delle pagine viene utilizzato l'algoritmo **LRU** localizzato sul singolo processo. Vengono utilizzati dei bit per capire quale pagina è più conveniente sostituire.

## File system

Windows supporta vari file system, tra cui **FAT32, exFAT e NTFS**.

**NTFS** è il file system nativo di Windows, è a 64 bit, ha una buona affidabilità e scalabilità. Supporta dischi di grandi dimensioni, permette la crittografia e la compressioni dei dati sui dischi.

Presenta un file chiamato **Master File Table** (MFT), cioè una tabella in cui ogni riga descrive un file o una directory contenendo gli attributi e la lista di indirizzi del disco del relativo file.

Talvolta gli attributi sono troppo grandi per entrare in una riga, questi vengono chiamati **attributi non residenti**, e in questo caso viene salvata nella riga solo una intestazione e i dati effettivi vengono salvati da qualche altra parte sul disco,

### Compressione

NTFS può comprimere i file per ridurre lo spazio su disco, la compressione è trasparente per gli utenti e le applicazioni, le applicazioni possono comunque utilizzare le API standard ignorando il fatto che un file possa essere compresso o meno, perchè è il sistema che si occupa di comprimere e decomprimere.

## Sommario

Windows è composto da:
- servizi di sistema
- driver
- programmi utente
- Kernel 
- Executive
- HAL

Il sistema è basato sugli **oggetti**, che i processi possono creare e ottenere dei handle per manipolarli.
La parte di processi e thread in windows è organizzata in modo gerarchico in:
job $\to$ process $\to$ thread $\to$ fiber

Lo scheduling è basato sui thread è avviene utilizzando delle code di priorità (statiche e dinamiche).

La memoria virtuale utilizza la paginazione a richiesta basato sui working set.

Il file system è NTFS che è basato su tabelle in cui ogni riga contiene attributi di un file, tali attributi possono essere residenti o non residenti. NTFS supporta la compressione e la cifratura dei file.

