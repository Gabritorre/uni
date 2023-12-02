# File system

Parliamo ora di **memoria secondaria**.

Ogni dispositivo di memoria secondaria possiede un **file system** cioè una struttura che organizza i file e lo spazio libero, controlla gli accessi, possiede meccanismi di backup e di recovery e anche di crittografia.

La struttura più utilizzata oggi è la **struttura ad albero**.

Nella memoria secondaria sono tenuti i **file**, cioè una raccolta di dati (bytes) trattati come una entità singola.

Il **volume di un disco**, rappresenta quanti dati esso può contenere.

Il sistema operativo può generare una interfaccia grafica per poter permettere all'utente di navigare nel file system.

## I file

Come detto prima un file è un insieme di dati, questo insieme di dati lo possiamo associare ad un **nome**, questo nome è diviso in 2 parti: il nome effettivo del file e una **estensione**.

La prima parte serve specialmente all'utente per avere una idea di a che cosa serve quel file, mentre l'estensione aiuta il sistema operativo a capire come quel file può essere trattato.

I file sono un insieme di **record**, cioè un insieme di caratteri. Questi record possono essere **fisici**, nel caso si parli di un blocco di informazioni salvato su un disco fisico.
Mentre si parla di **record logici** con blocchi di informazioni che vengono trattati come una entità unica da un software.
Quando ciascun record fisico contiene esattamente un record logico si dice che il record è **non bloccante**, mentre se per ogni record fisico può contenere più record logici allora il record è detto **bloccante**.

### Tipi di file

I file possono essere generalmente di tre tipi:

- File puri: contengono delle informazioni dell'utente
- directory: sono le cartelle, cioè un insieme di file e altre cartelle
- file speciali: sono file a supporto del sistema, specialmente che si interfacciano con dispositivi di I/O.


### Accesso

l'accesso ad un file può essere di due tipi:
- **sequenziale**: vengono letti i byte dall'inizio alla fine, senza possibilità di fare salti
- **casuale**: è possibile leggere i byte in qualsiasi ordine

### Attributi

I file possiedono oltre che al loro contenuto grezzo anche molti **metadati** cioè attributi extra che servono per avere più informazioni su un determinato file.

Ad esempio: dimensione, la data dell'ultima modifica, data di creazione, quale protezione agli accessi possiede, ecc...

### Operazioni

È possibile fare una gran quantità di operazioni su un file, le principali sono:

- Open
- Read
- Get attributes
- List Close Write Set attributes Create Append Rename Destroy Seek Copy

## Directories

Le *directories* sono un tipo di file che serve per raggruppare altri file.
Lo scopo principale di questo tipo di file è quello dell'**organizzazione** dei file per il file system

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

Nel file system gerarchico (ad albero) si ha una maggiore organizzazione, più flessibilità e più prestazioni.

- È presente una directory principale (la radice dell'albero) da cui si diramano tutti i file.
- I nomi dei file devono essere univoci solo all'interno della loro directory padre.
- I singoli file sono identificati da un *pathname*, cioè una stringa che rappresenta il percorso dell'albero per raggiungere il determinato file

In windows i pathname sono di questa forma: `C:\utenti\utente\cartella1\file.txt`
mentre in unix i pathname sono di questa forma `/home/utente/cartella1/file.txt`

![enter image description here](https://i.ibb.co/6PdZtyr/image.png)

La navigazione dell'albero viene agevolata dalla possibilità di specificare dei ***pathname* assoluti** che quindi partono dalla radice e arrivano al nodo specifico, alternativamente si possono usare dei ***pathname* relativi** a in quale nodo ci si trova in questo momento sull'albero (chiamata *working directory*)


### Link

All'interno di una directory si possono trovare dei riferimenti (link) ad altri file situati in altre directory. Questi collegamenti possono essere di due tipi:

- *soft link*: contiene il *pathname* del file puntato.
	nel caso in cui il file puntato viene cancellato o spostato in un altra directory, il link punta ad un percorso inesistente.
	Ma è anche più semplice da fare, più flessibile: può attraversare più file system, è indipendente dal disco
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

Nel file system viene scelto una directory particolare detta **punto di mount** che sarà il punto di collegamento dove andrà collegata la radice del file system da montare.

Vengono usate delle **tabelle di mount** per tenere traccia dei punti di mount e dei file system a cui puntano


## Organizzazione dei file

Un disco è suddiviso in partizioni. All'inizio del disco è presente l'**MBR**(Master boot record) che contiene le istruzione per avviare il sistema. Solitamente contiene anche la tabella delle partizioni del disco


## Allocazione dei file

Vediamo vari modi di allocare i file nel disco secondario

### Allocazione sequenziale

I file sono posizionati in indirizzi contigui.
È una implementazione semplice ma con **scarse prestazioni** e possibile **frammentazione esterna**, inoltre se il file cresce di dimensioni è possibile che vada riposizionato in un punto che lo contenga.

### Allocazione non contigua con liste collegate

Abbiamo delle liste in cui il nodi sono composti da un blocco dei dati di un file e dal puntatore al nodo successivo della lista.
ogni file ha la propria lista.

Con questa implementazione non abbiamo più frammentazione esterna ma abbiamo possibile frammentazione interna nell'ultimo elemento di ogni lista.
i puntatori per quanto poco sprecano spazio utile.
Inoltre con file grandi ho una lista molto grande da scorrere. Considerare blocchi più grandi riduce la lunghezza ma aumenta i tempi di caricamento.
D'altra parte il cambio di dimensione del file viene gestito molto efficientemente dato che bisogna solo cambiare i puntatori della lista.

### Allocazione non contigua tabellare

Vengono utilizzate tabelle che memorizzano dei puntatori ai blocchi dei file.

Nella directory è presente il primo blocco del file, quel blocco viene utilizzato come indice di una tabella per determinare quale sarà il prossimo blocco, il quale a sua volta verrà utilizzato di come indice. Fino al raggiungimento di un valore NULL.

![enter image description here](https://i.ibb.co/tmct64X/image.png)


Avendo una tabella molto lunga, si hanno i blocchi del file sparsi per tutta la tabelle, di conseguenza seguire molti puntatori della tabella potrebbe essere oneroso.

La dimensione della tabella si può calcolare facilmente facendo il prodotto tra il numero di blocchi e la dimensione del blocco

Un conosciuto file system che utilizza questo metodo è il **FAT**


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

- si riserva una dimensione fissa (ad esempio 255 caratteri) e il nome del file non può eccedere tale dimensione
- Il nome viene messo alla fine degli attributi lasciandogli una dimensione variabile e si usa un carattere speciale per terminare il nome. Così facendo se il file venisse eliminato, un successivo file con un nome più lungo non ci starebbe (frammentazione esterna)
- I nomi vengono messi in una memoria dinamica condivisa chiamata **heap** separati da un carattere speciale, tra gli attributi di ogni file ci sarà un puntatore che punta all'inizio del proprio nome in questa area di memoria

## Gestione dello spazio libero

Nel file system bisogna tenere traccia, oltre che dei blocchi che sono occupati, anche di quelli che sono liberi. Vediamo i vari approcci per tenere traccia dei blocchi liberi.

### lista dei blocchi liberi

Utilizziamo una *linked list* contenente le posizioni dei blocchi liberi:
- quando un file deve essere allocato cerca nella lista il numero di blocchi necessari a partire dalla testa della lista
- i nuovi blocchi liberi vengono messi in coda alla lista
- per migliorare append e remove ci sono dei puntatori alla testa e alla coda della lista

![enter image description here](https://i.ibb.co/51PcF5D/image.png)

lo svantaggio di questa soluzione è che se un file è molto grande deve scorrere molti elementi della lista, quindi si hanno molti accessi in memoria secondaria.
Inoltre un file che richiede più blocchi per essere salvato è probabile che venga frammentato in parti sparse nel disco, rendendo l'accesso successivo al file più dispendioso (difficilmente elementi della lista contigui rappresentano blocco in memoria contigui). 

Su dischi molto grandi la lista può diventare molto grande

### bitmap

Abbiamo una mappa di bit in cui il bit:
- vale 1 se il blocco è occupato
- vale 0 se il blocco è libero

l'i-esimo bit corrisponde all'i-esimo blocco di memoria

In questo modo il file system può determinare velocemente se dei blocchi contigui liberi (non c'è frammentazione).
D'altro parte è probabile che prima di trovare un blocco libero si debba cercare in tutta la mappa.

Diversamente dalle lista qui ogni elemento della mappa è un solo bit (e non un puntatore) quindi lo spazio occupato dalla mappa è decisamente meno rispetto alle liste.


## Protezione dell'integrità dei dati

Un sistema deve prevedere nel suo ciclo di vita possono accadere dei crash, disastri naturali, malware che potrebbero intaccare i dati salvati in memoria secondaria.
È necessaria prevedere delle tecniche di recupero e ripristino dopo un guasto.

### Backup

Una prima tecnica è quella del **backup**, cioè una copia dei dati.
quando la copia originale dei dati viene corrotta in qualche modo, utilizziamo il backup per ripristinare i dati allo stato precedente (tale processo viene detto **recovery**).

Per mantenere sempre delle copie recenti dei dati è necessario fare il backup frequentemente.


Abbiamo due tipologie di backup:

- backup fisico
	viene fatta una duplicazione dei dati bit per bit, senza mantenere informazioni sulla struttura logica di tali informazioni
- backup logico
	vengono duplicati i dati con la loro struttura logica e gerarchia (ricordando ogni file a che percorso apparteneva)
	in questo tipo di backup possiamo utilizzare i cosiddetti **backup incrementali** in cui vengono salvati solo i file che sono stati modificati rispetto all'ultimo backup fatto (evitando quindi di ricopiare da capo)

### File system strutturato a log

Se si verifica un errore durante una operazione di scrittura su disco i file potrebbero essere lasciati in uno stato inconsistente, ciò va evitato.

Per evitarlo si utilizzano sistemi RAID (che vedremo più avanti) oppure file system basati su transazioni. Vediamo questi ultimi:

Una **transazione** è un raggruppamento di operazioni per renderle come fossero una unica operazione atomica. Quindi quando eseguo una transazione, per essere completata, tutte le operazioni al suo interno devono essere completate, se almeno una non viene completata allora tutta la transizione fallisce e si ritorna allo stato precedente alla sua esecuzione (processo che viene chiamato *rollback*)

Tali transazioni vengono implementate registrando il risultato di ogni singola operazione all'interno della transazione in un **file di log** (e non direttamente sui file interessati). Al termine di tutte le operazioni verrà verranno salvate le modifiche della transazione in memoria secondaria.

Poichè i log possono diventare molto grandi vengono utilizzati dei **checkpoint** che puntano all'ultima transazione che è stata trasferita in memora secondaria.
Se il sistema si blocca, il file system andrà ad esaminare solo le transazione avvenuto dopo il checkpoint


La **paginazione shadow** è una tecnica in cui le transazioni vengono eseguiti su un blocco libero in memoria, una volta completata correttamente la transazione si aggiornano i metadati del blocco originale per farlo puntare al nuovo blocco, di conseguenza quello originale viene deallocato.


I file system che utilizzano la tecnica dei log vengono anche chiamati **journaling file system**, viene utilizzato l'intero disco come file di log


## Controllo degli accessi ai file

Dei file potrebbero contenere dei dati che devono essere visibili solo a determinati utenti e non a chiunque. Servono quindi dei metodi per gestire chi può accedere a determinati file, vediamo due modi: tramite matrice di controllo e controllo per classi di utenti.

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
	vengono quindi già resi disponibili (in memoria principale) dei record prevedendo che verranno richiesti a breve, migliorando così le prestazioni e i tempi di attesa

- **metodi di accesso di base**
	Questi metodi vengono utilizzati quando non è possibile prevedere i record che verranno richiesti

- **file mappati in memoria**
	è possibile mappare i dati di un file in uno spazio di indirizzamento virtuale, poichè il processo utilizza anch'esso indirizzi virtuali la gestione viene più comoda.
	Quando un processo modifica dei dati (che sono stati portati in memoria principale) la relativa pagina virtuale viene marcata come *dirty*, ad intervalli regolari (e anche quando il file verrà chiuso) il contenuto delle pagine *dirty* viene copiato in memoria secondaria.


## controllo degli accessi

Il sistema operativo deve assicurarsi che gli utenti non facciano un uso improprio delle risorse del computer.
Per fare ciò solitamente vengono utilizzate delle
- matrice di controllo degli accessi
	simile alla matrice che abbiamo visto precedentemente ma in questo caso al posto di 0 e 1 abbiamo i privilegi ammessi e non (lettura, scrittura, esecuzione)
- liste di controllo di accesso (*access control lists*)
	Simile alla matrice di controllo vista precedentemente ma in questo caso vengono solo salvati  i privilegi espliciti (se un utente non ha un privilegio su un determinato file, non lo salviamo nella lista). le liste possono  essere basate sui file ed elencare i privilegi per ogni utente, o viceversa elencare, per ogni utente, i privilegi detenuti su ogni file.
	A questo punto però per ricavare i privilegi specifici per un utente o per un file bisogna scorrere tutta la lista.
- liste di capacità (*capability lists*)
	una capacità è un puntatore che garantisce dei privilegi ad un soggetto sul particolare oggetto puntato. Ogni capacità è contrassegnata da un identificatore, ma si possono fare delle copie.
	Definiamo **dominio di protezione** come l'insieme delle capacità di un utente

I privilegi sono generalmente: **lettura, scrittura ed esecuzione**, e in base al modello di sicurezza possiamo avere:

- **DAC** (*Discretionary Access Control*) in cui il proprietario del file controlla i privilegi
- **MAC** (*Mandatory Access Control*) in cui è sistema centrale e gestire i privilegi


È importante sottilineare la differenza tra la politica di sicurezza e il meccanismo di sicurezza:
- **politica di sicurezza**: definisce quali privilegi ai file vengono assegnati agli utenti. Solitamente si cerca di dare il **privilegio minimo** possibile agli utenti, per poi aumentarlo in base alle situazioni specifiche.
- **meccanismo di sicurezza**: implementa la politica di sicurezza


## Prestazioni del file system

Dato che i tempi di accesso ai dischi secondari è molto lento, vediamo quali ottimizzazione sono possibili per migliorare le prestazioni:

- **uso della cache**: spostare alcuni blocchi in memoria principale
- **read ahead**: leggere il blocco successivo oltre a quello richiesto, prevedendo che sarà richiesto a breve
- **allocare i file vicini**: posizione i blocchi appartenenti allo stesso file vicini fisicamente migliora il tempo di ricerca e lettura
- **ridurre la frammentazione**: cercare di eliminare i buchi vuoti in mezzo al disco, ravvicinando gli spazi vuoti del disco.
