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

In Unix si usa la chiamata a sistema **fork** per creare un clone figlio che è la copia del processo chiamante e quindi il contenuto dello spazio di indirizzamento del padre viene **copiato** in un nuovo spazio di indirizzamento che viene assegnato al figlio. poi è pratica comune eseguire il comando *execve* sul processo figlio per farli eseguire un programma specifico. 

Il corrispettivo Windows è **CreateProcess** che crea il processo e carica direttamente il nuovo programma al processo, in questo caso lo spazio di indirizzamento del figlio è diverso fin da subito (non c'è nessuna copia come in Unix)

In entrambi i casi dopo la creazione del processo e il caricamento del programma il processo padre e figlio hanno **spazi di memoria distinti** anche se in alcuni casi è possibile che padre e figlio condividano delle risorse.


### Terminazione di un processo

Un processo può terminare per via delle seguenti ragioni:

1. uscita normale (volontaria)
2. uscita con errore (volontaria)
3. terminato per errore fatale (involontario)
4. terminazione forzata da un altro processo (killed, involontario)

Quando un processo padre viene terminato involontariamente il sistema operativo può decidere se terminare anche i figli oppure lasciarli continuare.

In Unix esiste una gerarchia tra i processi dove il processo *init* è la radice, mentre in windows tutti i processi sono uguali. Su windows però il padre di un processo possiede un *handle* per gestire il figlio, questo *handle* è possibile passarlo ad altri processi.


### Ciclo di vita di un processo


Un processo possiede un ciclo di vita, cioè dal momento che viene creato al momento in cui viene distrutto può assumere diversi **stati**:

- **Running** (esecuzione): il processo è in esecuzione sulla CPU.
- **Ready** (pronto): il processo è pronto per essere eseguito ma attende che la CPU lo metta in esecuzione
- **Blocked** (bloccato): il processo è in attesa che si verifichi un evento prima di poter continuare la sua esecuzione

Il sistema operativo possiede una lista dei processi **ready** e **blocked**

Possiamo individuare 4 transazioni tra gli stati appena descritti:

![enter image description here](https://i.ibb.co/sQ797KJ/life-cycle.png)

1. Il processo si blocca in attesa di un evento
2. lo scheduler dei processo seleziona un altro processo da eseguire e l'attuale processo viene messo in *ready*
3. Il processo viene scelto dallo scheduler per essere eseguito (fase chiamata **dispatching**)
4. l'evento si è verificato e il processo è pronto a continuare la sua esecuzione

ovviamente sono presente due ulteriori stati che rappresentano la **fase di creazione** del processo, che poi si sposterà nello stato pronto. **Lo stato terminazione** quando il processo ha finito le sue operazioni.

### PCB

Il sistema operativo possiede una tabella chiamate **process table** che contiene i **PCB** (Process Control Block) di ogni processo in vita al momento, anche chiamato **descrittore del processo**.

Il PCB contiene le informazioni del processo quali: Program Counter, Stack Pointer, il PID, lo stato dei file, eventuali puntatori a padre e figli,  e tutta una serie di informazioni utili per lo scheduler quando deve far passare il processa da *ready* a *running* e vice versa


![enter image description here](https://i.ibb.co/CVKTckK/tabella-processi.png)



### Sospensione di un processo

Un processo può essere mandato in uno stato di **sospensione** che non corrisponde a nessuno dei 3 stati precedenti. Quando è sospeso il processo messo da parte momentaneamente, questo può essere utile per rilevare problemi di sicurezza oppure in fase di debugging.

La sospensione può essere richiesta dal processo stesso oppure da un altro processo, deve però essere un altro processo a farlo ripartire


![enter image description here](https://i.ibb.co/XzK5K9C/sospensione.png)


### Context switch

il context switch è un'operazione che fa lo scheduler che si occupa di scambiare processo in esecuzione.

Questa operazione è divisa in 2 fasi:

1. la prima è di salvare lo stato dell'attuale processo in esecuzione, in modo da saper dove riprendere la sua esecuzione in futuro
2. la seconda è caricare le informazioni del nuovo processo da eseguire

durante questa operazione la CPU non fa nulla quindi bisogna minimizzare il tempo necessario per effettuare lo scambio. 



### Interrupts

Gli **interrupts** sono dei segnali che abilitano il software a rispondere a degli avvisi hardware. Gli interrupt vengono chiamati trap e possono essere sincroni e asincroni:

- **sincroni** se il segnale è derivato direttamente dalle operazioni del processo
- **asincroni** se il segnale non è derivato dalle operazioni fatte dal processo

Dopo aver ricevuto un interrupt il processore completa l'istruzione corrente e poi interrompe il processo.

viene dato il comando al sistema operativo in base al tipo di interrupt viene scelto un **gestore di interrupt** in quale deciderà cosa fare.
Una volta che il gestore termina viene ripresa l'esecuzione del processo che era stato momentaneamente sospeso (oppure un processo successivo)


Gli interrups sono solitamente collegati a fattori esterni al processore. Per riferirsi a segnali generati all'interno del processore esistono le **eccezioni**



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
Il kenel è a conoscenza solo dei processi, i quali hanno un singolo thread.

![enter image description here](https://i.ibb.co/93Xgmj6/user-thread.png)

Abbiamo una implementazione detta **molti-a-uno** (molti thread ad un unico contesto di esecuzione)

I thread vengono create da librerie in runtime ed essendo create nello *user space* **non possono eseguire istruzioni privilegiate**.

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
- quando un thread viene cancellato, in realtà esso viene solo marcato come non eseguibile ma la sua struttura viene conservata in modo che possa essere assegnata ad un nuovo thread, risparmiando così del tempo
**svantaggi**:
- il cambio di contesto limita li prestazioni (quindi quanti si creano e distruggono tanti thread c'è molto overhead)
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

Quando il kernel sa che un thread è bloccat:
1. viene fatta una **upcall** al processore virtuale interessato, cioè una notifica che indica quale thread è bloccato.
2. Il processore virtuale si occuperà poi di rischedulare i suoi thread.
3. Quando il thread che era bloccato è pronto per essere rieseguito viene fatta un'altra **upcall** per avvisare il processore virtuale avvisandolo che quel thread ora può essere rischedulato.

Questa implementazione ibrida funziona anche su CPU multicore.
Il problema è che c'è un uso intensivo del kernel che chiama procedure nello spazio utente.


### Thread pop-up

Thread pop-up è una tecnica particolarmente utilizzata nei sistemi distribuiti lato server nel quando quando la macchina riceve un messaggio viene creato un nuovo thread per gestirlo (chiamato thread pop-up). 

Il vantaggio di questo utilizzo è che la latenza tra l'arrivo del messaggio e l'inizio dell'elaborazione è molto bassa
