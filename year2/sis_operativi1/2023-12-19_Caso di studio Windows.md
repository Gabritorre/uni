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

