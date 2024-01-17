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



