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

### Allocazione con liste collegate

Abbiamo delle liste in cui il nodi sono composti da un blocco dei dati di un file e dal puntatore al nodo successivo della lista.
ogni file ha la propria lista.

Con questa implementazione non abbiamo più frammentazione esterna ma abbiamo possibile frammentazione interna nell'ultimo elemento di ogni lista.
i puntatori per quanto poco sprecano spazio utile.
Inoltre con file grandi ho una lista molto grande da scorrere. Considerare blocchi più grandi riduce la lunghezza ma aumenta i tempi di caricamento.
D'altra parte il cambio di dimensione del file viene gestito molto efficientemente dato che bisogna solo cambiare i puntatori della lista.

### Allocazione tabellare

Vengono utilizzate tabelle che memorizzano dei puntatori ai blocchi dei file.

Nella directory è presente il primo blocco del file, quel blocco viene utilizzato come indice di una tabella per determinare quale sarà il prossimo blocco, il quale a sua volta verrà utilizzato di come indice. Fino al raggiungimento di un valore NULL.

![enter image description here](https://i.ibb.co/tmct64X/image.png)


Avendo una tabella molto lunga, si hanno i blocchi del file sparsi per tutta la tabelle, di conseguenza seguire molti puntatori della tabella potrebbe essere oneroso.

La dimensione della tabella si può calcolare facilmente facendo il prodotto tra il numero di blocchi e la dimensione del blocco

Un conosciuto file system che utilizza questo metodo è il **FAT**

