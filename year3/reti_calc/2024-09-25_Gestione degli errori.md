# Gestione degli errori

Abbiamo visto come la checksum può aiutarci a identificare gli errori (*error detection*), ci sono però altre tecniche che riescono persino a correggere gli errori trovati (*error correction*).

Un banale esempio può essere quello di codificare tutti gli $1$ come $111$ e tutti gli $0$ come $000$, in questo modo se si riceve $010$ è probabile che si trattasse di un $000$.

Ovviamente questo sistema non è ottimale e non viene utilizzato.

In generale sulle reti si segue il seguente principio: **Le reti funzionano relativamente bene, con un tasso di errore talmente basso che in caso accadessero è più conveniente farsi rispedire i frame rispetto che mettersi a correggerli.**

Possiamo schematizzare la comunicazione in questo modo:

![](https://i.ibb.co/XD7LsDP/image.png)

Quando l’host A manda dei dati, fa partire un **timer**, se arriva un ACK prima che termini il timer allora il timer viene cancellato e si prosegue. Se invece il timer scade prima che arrivi l’ACK, allora viene rimandato il dato.

Questo timer deve essere lungo almeno quanto il *round trip time* (RTT), cioè il tempo che un dato impiega a raggiungere la destinazione e a tornare indietro al mittente

Un’altra situazione che può accadere è quella in cui l’host B riceve il dato ma il messaggio di ACK non arriva ad A. In questo caso A, non ricevendo l’ACK, pensa che il dato non sia arrivato e lo rimanda. Così facendo B si ritrova una copia del dato precedente (non sapendo che si tratta di una copia).

![](https://i.ibb.co/f0Xrb5P/image.png)

Il ricevitore deve essere in grado di distinguere le copie di frame. Un modo può essere quello di usare un bit (chiamato **bit di sequenza**) che viene invertito ad ogni frame che viene ricevuto correttamente (questo particolare schema è chiamato ABP, *Alternating Bit Protocol*).

Estendiamo la terminologia introdotta negli scorsi appunti in questo modo:

- `send(D(seq, SDU, CRC))`: invia un frame composto da bit di sequenza, dati e checksum
- `send(C(OKx))`: invia un ACK per il frame con bit di sequenza `x`
- `recvd(D(seq, SDU, CRC))`: riceve un frame composto da bit di sequenza, dati e checksum
- `recvd(C(OKx))`: riceve un ACK per il frame con bit di sequenza `x`

Vediamo come si aggiornano le macchine a stati del trasmettitore e del ricevitore

![](https://i.ibb.co/pQZLXfN/image.png)

![](https://i.ibb.co/HBX16qx/image.png)

Le due macchine a stati lavorano correttamente finché sono sincronizzate: se il ricevitore è nello stato in cui si aspetta un dato con bit di sequenza $1$ e il trasmettitore per qualche motivo si riavviasse, allora il trasmettitore continuerebbe a mandare dati con bit di sequenza $0$, portando quindi ad una **de-sincronizzazione**.

Vediamo come con il bit di sequenza si riconoscono frame duplicati

![](https://i.ibb.co/HnsTMpQ/image.png)

In questo modo abbiamo che il data link layer offre un servizio di *reliable delivery*

**Limite**: mandare un ACK per ogni frame prima di mandare il successivo crea un protocol overhead notevole, tale overhead è dominato dal RTT, e questa implementazione (ABP) è troppo dipendente dal RTT.

## Pipelining

Vediamo due tecniche migliori di ABP, la tecnica **Go-back-n** e la tecnica **Selective repeat**, che riescono ad essere meno dipendenti dal RTT.

Queste tecniche si basano sul **pipelining**, cioè inviare non più un singolo frame alla volta ma un **insieme di frame alla volta**

![](https://i.ibb.co/9qht0pZ/image.png)

Per continuare a garantire l’affidabilità del ricevimento dei frame si utilizza un meccanismo chiamato ***sliding window***.

### Sliding window

In questo caso i numeri di sequenza sono degli interi, trasmettitore e ricevente si accordano sulla dimensione della **finestra**, cioè il numero di frame da inviare in un colpo solo.

Quando si riceve l’ACK del frame con numero di sequenza più basso nella finestra attuale, allora si *shifta* a destra la finestra di uno spazio.

![](https://i.ibb.co/gSfQBDX/image.png)

Nella realtà però abbiamo una quantità finita di numeri di sequenza, e quando si raggiunge il limite, la finestra riparte dal primo valore.

Vediamo un esempio di comunicazione con questo sistema:

![](https://i.ibb.co/NLVQtJv/image.png)

**Nota importante**: la grandezza della finestra non può essere grande quanto la quantità di numeri di sequenza, **deve sempre esserci almeno un numero di sequenza fuori dalla finestra.** Se così non fosse potrebbe verificarsi un problema di questo tipo:

1. il mittente invia i frame usando tutti i numeri di sequenza
2. il destinatario li riceve, fa l’ACK di tutti ma vanno tutti persi
3. il mittente, non ricevendo gli ACK decide di ritrasmetterli tutti
4. il destinatario vedendo che i numeri di sequenza combaciano con quelli attesi per dei nuovi dati li considera senza rendersi conto che sono dati duplicati

quindi, lasciando almeno un numero di sequenza libero, il destinatario è in grado di distinguere un nuovo frame e da uno ripetuto.

Dobbiamo però capire come comportarci nel caso in cui dei frame vengano persi.

## Go-back-n

Go-back-n è una policy per gestire i frame persi.

Il ricevitore accetta solo frame che arrivano in sequenza, viene mandato un ACK contenente il numero di sequenza dell’ultimo frame della sequenza ricevuto in ordine.

Questo viene chiamato **ACK cumulativo** in quanto viene fatto un ACK di uno specifico frame indicando che quello e tutti i frame con numero di sequenza inferiore sono stati ricevuti.

Ad esempio se il ricevitore riceve $1$ poi $2$ poi $3$ farà gli ACK di $1$ poi $2$ poi $3$, Se sfortunatamente ACK 1 e 2 vengono persi, l’ACK 3 riesce a confermare l’invio anche di 1 e 2.

Se invece riceve $2$ poi $1$ poi $3$ (fuori ordine) farà solo l’ACK di $1$.

Il ricevitore non ha bisogno di buffer, ma mantiene due variabili e una costante

- `lastack`: l’ultimo numero di sequenza che è stato notificato
- `next`: il prossimo numero di sequenza atteso
- `maxseq`: rappresenta la totalità dei numeri di sequenza

![](https://i.ibb.co/zQ6qgnH/image.png)

D’altra parte il trasmettitore deve avere un **buffer** per poter salvare i frame da mandare, può essere grande fino ad una intera finestra di frame.

I frame vengono inviati in ordine di sequenza fino a riempire il buffer.

Utilizza un singolo timer che parte dal momento in cui viene inviato il primo frame.

Quando il trasmettitore riceve un ACK, rimuove tutti i frame notificati e fa partire da capo il timer se ci sono ancora frame non notificati nel buffer. Se il timer scade vengono rimandati.

Il trasmettitore oltre al buffer, utilizza tre variabili e due costanti:

- `size(buffer)`: la quantità corrente di frame nel buffer
- `seq`: l’ultimo numero di sequenza inviato
- `unack`: il numero di sequenza del primo frame non notificato
- `maxseq`:  rappresenta la totalità dei numeri di sequenza
- `W`: grandezza della finestra

![](https://i.ibb.co/M7YcX2c/image.png)

(`t` è il numero di sequenza a cui si riferisce l’ACK)

Per capire meglio il ruolo di `seq` e `unack`, possiamo pensarli come dei puntatori agli elementi del buffer, in particolare `seq` punterà alla prossima cella del buffer, mentre `unack` punterà alla prima cella del buffer.

Vediamo un esempio di comunicazione

![](https://i.ibb.co/s9sfjBy/image.png)

Dal punto di vista del buffer possiamo fare questa rappresentazione riferita all’esempio precedente:

![](https://i.ibb.co/zsn5Pfk/esempio-buffer.png)

**Limiti**: il problema principale è che il ricevitore non accetta frame fuori sequenza, quindi in caso di tanti frame persi le performance calano perché anche frame ricevuti correttamente vengono scartati e ritrasmessi solo perché sono stati ricevuti fuori ordine.

Un altro problema è che gli ACK possono arrivare in modo non ordinato, ad esempio se viene mandato prima l’ACK di 0 e poi l’ACK di 1 ma durante il viaggio arriva prima l’ACK di 1 e poi quello di 0, accade che la variabile `unack` viene settata erroneamente.

## Selective repeat

la **Selective repeat** è una policy che cerca di migliorare la Go-back-n:

Adesso anche il ricevente ha un **buffer** simile a quello del trasmettitore, in cui vengono salvati i frame ricevuti che hanno numeri di sequenza che sono all’interno della finestra.

Quando il ricevente fa un ACK invia l’ultimo numero di sequenza precedente alla finestra e una lista di frame ricevuti correttamente ma fuori ordine.

![](https://i.ibb.co/bmhycjL/image.png)

In questo caso il trasmettitore utilizza un timer per ogni frame del buffer. Quando il timer scade solamente il frame corrispondente viene reinviato (e non tutti come succedeva con Go-back-n)

Esempio di comunicazione:

![](https://i.ibb.co/mXMqLsX/image.png)

Non necessariamente le dimensioni delle finestre devono essere le stesse tra trasmettitore e ricevitore, inoltre possono cambiare di dimensioni in base alle condizioni della rete.

## Piggybacking

In situazioni reali la comunicazione è bidirezionale, non c’è mai un trasmettitore e un ricevitore fisso ma sono sempre entrambi sia trasmettitori che ricevitori.

È quindi conveniente aggiungere un frame di ACK all’interno di un frame di dati, così da evitare di mandare un intero frame solo per fare un ACK (operazione chiamata *Piggybacking*)

Possiamo quindi avere situazione in cui l’invio di un ACK ritarda perché si aspetta che venga generato un frame di dati in modo da inviarli assieme.
