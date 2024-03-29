﻿# La memoria virtuale

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


