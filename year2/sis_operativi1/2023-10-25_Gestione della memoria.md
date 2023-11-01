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
 3. quale processo mandare in memoria (su richiesto o tramite previsione)
 4. decidere quale processo sostituire quando la memoria si sta saturando
 5. gestire gli scambi di memoria tra i vari livelli


Nella **memoria secondaria** solitamente teniamo **dati e programmi che non ci servono al momento**.
Nella **memoria primaria** teniamo **i programmi necessari** che potremmo usare al momento
Nella **memoria cache** teniamo **i dati utilizzati nell'immediato passato**


## Modi di organizzare i programmi in memoria

Abbiamo principalmente due modi di organizzare la memoria dei processi:

- **allocazione contigua**
	un programma viene memorizzato come un blocco unico di indirizzi contigui in memoria.
	Basso overhead ma può essere che non sia possibili trovare un blocco abbastanza grande
	
	ad esempio una allocazione contigua con un solo utente:
	![enter image description here](https://i.ibb.co/TTftdVr/contigua.png)
- **allocazione non contigua**
	in programma viene diviso in blocco chiamati **segmenti**.
	ogni segmento può essere in parti diverse della memoria, questo permette di avere più processi in memoria contemporaneamente, ma ha anche un overhead maggiore.
	
	**overlay** è una tecnica di allocazione non contigua in cui un **programma** grande viene **suddiviso in segmenti logici indipendenti** che vengono caricate in memoria man mano che il programma è in esecuzione (non tutte insieme), in modo che i vari segmenti si sovrappongano in memoria (overlay).

	![enter image description here](https://i.ibb.co/T8J4sFL/overlay.png)


### Protezione dell'ambiente

in entrambi i metodi precedenti dobbiamo adottare delle tecniche per evitare che i processi danneggino in qualche modo il sistema, non vogliamo che un processo occupi o acceda alla memoria riservata al sistema operativo.
Viene utilizzato un **registro limite** che contiene l'indirizzo da dove comincia la parte di memoria per l'utente e ogni tentativo di accesso oltre quel limite è negato.
È comunque possibile interagire con il sistema operativo tramite le apposite chiamate di sistema.


## Multiprogrammazione a partizioni fisse

Quando abbiamo un singolo processo in memoria (come nei sistemi batch) nel caso in cui il processo faccio delle richieste di I/O la CPU rimarrebbe libera in attesa che il processo completi la richiesta. Con la multiprogrammazione vogliamo evitare questo tempo morto di CPU, infatti avendo più processi in memoria ,quando un processo fa richieste di I/O ne mandiamo in esecuzione un altro mentre l'altro attende di soddisfare la richiesta.

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

Il problema è che si possono verificare casi in cui un blocco piccolo (*partition 1*) abbiano una coda lunga e un blocco grande (*partition 3*) sia libero, Abbiamo quindi un grande spreco di memoria.

Una soluzione potrebbe essere quella di avere una singola coda, e appena un blocco si libera si assegna un processo a quel blocco, andando così ad utilizzare tutti i blocchi.

![enter image description here](https://i.ibb.co/dcxYMwd/single-queue.png)

Gli svantaggi di questo sistema che l'anno portato ad non essere più utilizzato sono:

1. non è detto che un processo occupi tutta la partizione, creando così degli spazi di memoria non utilizzabili (frammentazione interna)
2. la possibilità che non ci sia una partizione abbastanza grande per un processo

## Funzionamento multiprogrammazione a partizioni variabili

In questo caso viene assegnato ad ogni processo esattamente lo spazio in memoria di cui ha bisogno. Abbiamo quindi delle **partizioni variabili** perché la loro dimensione varia in base al processo.

Inizialmente non ci sarà spreco di memoria ma quando i processi iniziano a terminare lasciano dei buchi in memoria che potrebbero non essere abbastanza grandi per contenere altri processi, abbiamo quindi anche in questo caso della **frammentazione della memoria**.


![enter image description here](https://i.ibb.co/MMHF69F/frammentazione.png)

Per risolvere questo problema di frammentazione abbiamo due tecniche:

- **coalescenza**: combinare due blocchi liberi adiacenti formando un unico blocco
	![enter image description here](https://i.ibb.co/Rj7gg5P/coalescenza.png)

- **compattazione**: riorganizza i blocchi in modo da avere quelli occupati tutti contigui e formando un unico grande blocco di memoria libera. Questa operazione comporta un overhead molto significativo
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
una scelta di unità grande rende si la mappa più piccola ma la probabilità che la memoria dei processi sia un multiplo dell'unità si abbassa impedendo di mappare l'ultimo pezzo di memoria.

Il problema della mappa di bit sta nel fatto che per trovare lo spazio necessario per allocare un processo di $k$ unità bisogna scorrere la mappa alla ricerca di $k$ zeri consecutivi

### Liste concatenate

In questa implementazione abbiamo una lista concatenata in cui ogni ogni elemento della lista rappresenta degli intervalli in cui la memoria è libera oppure occupata.

Il nodo di una lista è fatta da:

- un booleano che indica se è un pezzo libero (H) oppure occupato da un processo (P)
- l'indirizzo di dove inizia l'intevallo
- la lunghezza dell'intervallo
- il puntatore al nodo successivo della lista 
- il puntatore al nodo precedente della lista (questo è facoltativo ma è più conveniente)

vediamo graficamente l'implementazione della mappa di bit (b) e della lista concatenata \(c\)
![enter image description here](https://i.ibb.co/jy92vNJ/mappa-e-lista.png)


