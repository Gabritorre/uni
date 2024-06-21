# Le strutture dati

## Definizioni base

- **Tipo di dato**: è un modello matematico che consiste in una collezione di valori, sui quali sono ammesse certe operazioni.

	Un tipo di dato specifica **cosa** una operazione deve fare **ma senza specificare come** viene fatta oppure **come** i dati sono organizzati

- **struttura dati**: è una particolare organizzazione delle informazioni che permette di supportare in modo efficiente le operazioni su un tipo di dato.

	la struttura dati specifica **come si organizzano i dati** e **come realizzare le operazioni** sul tipo di dato.

## Classificazione delle strutture dati

È possibile classificare le strutture dati in base a tre criteri:

1. La disposizione dei dati
	- **Strutture dati lineari**: I dati sono disposti in sequenza, quindi è presente un **ordine** unico degli elementi (array, liste, pile, code).
	- **Strutture dati non lineari**: I dati non sono in sequenze, quindi non è possibile identificare un **ordine** unico dei dati (alberi, grafi).
2. Il numero di elementi
	- **Strutture dati statiche**: il numero di elementi non cambia nel tempo (ad esempio gli *array* dato che per modificare il numero di elementi è necessaria una riallocazione della memoria).
	-  **Strutture dati dinamiche**: il numero di elementi può cambiare nel tempo (liste, alberi, grafi).
3. il tipo di elementi
	- **Strutture dati omogenee**: i dati sono tutti dello stesso tipo (array).
	- **Strutture dati non omogenee**: i dati possono avere tipi diversi (liste, alberi, grafi)

# Dizionari

Un dizionario è una relazione univoca tra **chiavi** e **valori**, in altre parole un dizionario è un insieme di coppie $(\text{chiave : valore})$, chiamate associazioni, in cui ogni chiave è univoca, e ogni valore è associato ad una sola chiave.

Delle operazioni base che vedremo sui dizionari sono:

1. ricerca di un *valore* tramite la *chiave*
	- pre-condizione: nessuna
	- post-condizione: restituisce il valore associato alla chiave oppure restituisce `NIL` se la chiave non è presente
2. inserimento/aggiornamento di una coppia
	- pre-condizione: nessuna
	- post-condizione: se la chiave è già presente allora aggiorna il suo valore, altrimenti crea la nuova coppia (chiave : valore)
3. eliminazione di una coppia tramite *chiave*
	- pre-condizione: la chiave deve essere presente nel dizionario
	- post-condizione: cancella la coppia che aveva una determinata chiave

## Implementazione dei dizionari

Proviamo ad implementare un dizionario in due modi diversi, con array ordinati e con le liste doppiamente linkate, analizzando le complessità delle tre operazioni che abbiamo definito sopra.


### Realizzazione con array ordinati

Abbiamo un `array A` in cui ogni elemento è una `struct` composta da chiave `key` e valore `info`.
**L'array è ordinato** in base alla chiave `key`.

il costo dello spazio richiesto per questa implementazione è $S(n) = \Theta(n)$, quindi proporzionale alla lunghezza dell'array.

### Analizziamo le tre operazioni

1. ricerca di un *valore* tramite la *chiave*
	per quanto riguarda la ricerca possiamo utilizzare la **ricerca binaria** dato che il nostro array è ordinato

	```c++
	int search(Dizionario A, chiave K) {
		i = search_index(A, K, 1, A.length)
		if (i == -1) {
			return NIL
		}
		else {
			return A[i].info
		}
	}
	
	//binary search sulla chiave che ritorna l'indice dell'array oppure -1
	int search_index(Dizionario A, chiave K, int left_limit, int right_limit) {
		if (right_limit < left_limit) {
			return -1
		}
		else {
			med = (left_limit + right_limit) / 2
			if (A[med].key == K) {
				return med
			}
			else if (A[med].key > K) {
				return search_index(A, K, left_limit, med - 1)
			}
			else if (A[med].key < k) {
				return search_index(A, K, med + 1, right_limit)
			}
		}
	}
	```

	Calcoliamo la complessità di `search_index()`. È ricorsivo e quindi ci serveremo del teorema master per trovare la complessità.

	$$T(n) = \begin{cases}
\Theta(1) & \text{se } n = 0 \\
T\left(\frac{n}{2}\right) + \Theta(1) &\text{se } n > 0
\end{cases}$$

	applicando il teorema master abbiamo

	$a = 1$
	$b = 2$
	$f(n) = \Theta(1) = 1$

	$d = \log_21  = 0$

	confrontando:

	$f(n) = 1$

	e

	$n^d = n^0 = 1$

	notiamo che le due funzioni sono dello stesso ordine, quindi siamo nel caso 2. Concludiamo che la complessità è 

	$T(n) = \Theta(\log n)$

	per quanto riguarda la complessità di `search()` basta sommare la complessità di `search_index()` con delle operazioni costanti, quindi

	$T(n) = \Theta(\log n) + \Theta(1)$

	dato che prevale il logaritmo sulla costante possiamo scrivere che la complessità della ricerca è:

	$$T(n) = \Theta(\log n)$$

2. inserimento/aggiornamento di una coppia

	```c++
	insert(Dizionario A, chiave K, valore V) {
		i = 1
		while (i <= A.length AND A[i].key < K) {
			i += 1
		}
		//se c'è già la chiave aggiorno il valore
		if (i <= A.length AND A[i].key == K) {
			A[i].info = v
		}
		//altrimenti aumento la dimensione di 1
		//sposto degli elementi a destra creandomi lo spazio per il nuovo valore
		//inserisco il nuovo valore
		else {
			realloc(A, A.length + 1)
			for (j = A.length; j >= i + 1; j--) {
				A[j] = A[j - 1]
			}
			A[i].key = K
			A[i].info = v
		}
	}
	```

	Analizziamo la complessità:
	- il ciclo while viene eseguito $i$ volte e il corpo del ciclo ha complessità costante $d$
		quindi la complessità è: $i \cdot d$
	- la `realloc` ho costo $O(n)$
	- il ciclo for viene eseguito $n - i + 1$ volte e la complessità del corpo è costante $d$
		quindi la complessità è $d\cdot (n-i+1)$
	- il resto delle istruzioni hanno complessità costante $O(1)$

	Quindi la complessità dell'algoritmo è:

	$$T(n) = O(1) + i\cdot d + O(n) + d(n-i+1)$$

	nell'espressione domina $O(n)$ quindi possiamo dire che 

	$$T(n) = O(n)$$


3. eliminazione di una coppia tramite *chiave*
	
	sfruttiamo la `search_index()` per trovare l'indice dell'array da "eliminare", l'eliminazione è fatta spostando degli elementi a sinistra di 1 in modo da sovrascrivere l'elemento da eliminare
	```c++
	delete(dizionario A, chiave K) {
		i = search_index(A, K, 1, A.length)
		for (j = i; j <= A.length - 1; j++) {
			A[j] = A[j + 1]
		}
		realloc(A, A.length - 1)
	}
	```

	Analizziamo la complessità:
	- la complessità del `search_index()` sappiamo già che è $\Theta(\log n)$
	- il ciclo for viene eseguito $n-i$ volte, il corpo ha complessità costante $d$
		quindi la sua complessità è $d\cdot (n-i)$
	- la `realloc` ho costo $O(n)$

	Quindi la complessità dell'algoritmo è:

	$$T(n) = \Theta(\log n ) + d\cdot(n-i) + O(n)$$
	
	nell'espressione domina $O(n)$ quindi possiamo dire che 

	$$T(n) = O(n)$$


### la *realloc*

concentriamoci ora sull'analizzare la complessità della *realloc*, essa viene fatta con la **tecnica del raddoppiamento e dimezzamento**:

si mantiene un array di dimensione $h$ , dove per ogni $n>0$ , $h$ soddisfa la seguente invariante

$$n\leq h < 4n$$

le prime $n$ celle dell'array contengono gli elementi significativi, mentre il resto delle celle è indefinito

- inizialmente $n = 0$ e $h = 1$
- ogni volta che $n$ supera $h$ , l'array $h$ viene riallocato raddoppiando la sua dimensione
	$$h = 2h$$
- ogni volta che $n$ scende sotto $\frac{h}{4}$ , l'array $h$ viene riallocato dimezzando la sua dimensione
	$$h = \frac{h}{2}$$

lo spazio richiesto per gestire il nostro array lungo $n$ è proporzionale allo spazio per gestire l'array lungo $h$ quindi:

$$S(n) = \Theta(h) = \Theta(n)$$

### Analisi ammortizzata

quello che fa praticamente la realloc è che quando la dimensione dell'array $n$ raggiunge la capacità $h$ quello che il computer deve fare è trovare una nuova zona di memoria grande il doppio di quella attuale e copiare tutti i valori nella nuova zona da questo deriva $O(n)$ .
Se però ad esempio la lunghezza dell'array è $n = 5$  e la capacità è $h = 8$, e voglio aggiungere un nuovo elemento all'array posso farlo senza riallocare del nuovo spazio dato che ho già 3 celle libere, da questo deriva $O(1)$.

**L'analisi ammortizzata** ci permette di calcolare il costo medio dell'esecuzione di $m$ operazioni fatte su una struttura dati.

Sia $C_i$ il costo dell'$i$-esimo inserimento nell'array

$$C_i = \begin{cases}
i & \text{se esiste } k \text{ tale che } i = 2^k + 1 \\
1 & \text{altrimenti}
\end{cases}$$

A parole significa che il costo dell'$i$-esimo inserimento è $i$ quando stiamo facendo il $3°, 5°, 9°, 17°, 33°,65°,...$ inserimento (tutte le potenze di 2 + 1) mentre negli altri casi il costo è costante.

posiamo $C(n)$ il costo totale di $n$ inserimenti:

$$C(n) = n + \sum_{k = 0}^{\lfloor\log_2 n\rfloor}2^k$$

dove:
$\sum_{k = 0}^{\lfloor\log_2 n\rfloor}2^k$ rappresenta la somma di tutte le operazioni di copiatura

(ad esempio per la complessità di $C(12) = 12 + \sum_{k = 0}^{3}2^k$)

la sommatoria è una progressione geometrica quindi possiamo riscriverla:

$$C(n) = n + \frac{2^{\log_2 (n) + 1}-1}{2-1} = n + 2n -1 = 3n-1$$


$3n-1$ è una quantità minore di $3n$ quindi 

$$\frac{C(n)}{n} \leq \frac{3n}{n}$$

$$\frac{C(n)}{n} \leq 3$$

da questo concludiamo che il tempo ammortizzato è costante

$$T_{\text{amm}} = O(1)$$

### Realizzazione con liste

Abbiamo una lista doppiamente linkata `L`, in cui ogni nodo è composto da:

- chiave `key`
- valore `info`
- puntatore al nodo successivo `next`
- puntatore al nodo precedente `prev`

Abbiamo `L.head` un puntatore al primo elemento della lista

la complessità spaziale è anche in questo caso:

$$S(n) = \Theta(n)$$


### Analizziamo le tre operazioni

implementeremo l'insert e la delete in modo diverso rispetto agli array, possiamo avere più chiavi uguali nel dizionario (quindi nell'insert non ci preoccuperemo della presenza di una chiave o meno), mentre la delete eliminerà tutte le occorrenza della chiave

1. inserimento/aggiornamento di una coppia
	eseguiremo un inserimento in testa
	```c++
	insert(Dizionario L, valore V, chiave K) {
		allocazione di memoria per un nuovo nodo e inizializzazione di valore e chiave
		p.next = L.head
		if (L.head != NIL) {
			L.head.prev = p
		}
		p.prev = NIL
		L.head = p
	}
	```
	
	possiamo affermare che la complessità dell'algoritmo è costante dato che svolge solo operazioni costanti.

	$$T(n) = O(1)$$

2. ricerca di un *valore* tramite la *chiave*

	restituiremo la prima occorrenza della chiave, che risulta essere quella più aggiornata

	```c++
	search(Dizionario L, chiave K) {
		x = L.head
		while (x != NIL AND x.key != K) {
			x = x.next
		}
		if (x != NIL) {
			return x.info
		}
		else {
			return NIL
		}
	}
	```
	
	nel caso peggiore si deve scorrere tutta la lista quindi 

	$$T(n) = O(n)$$

	Analizziamo la **correttezza dell'algoritmo**:

	troviamo l'**invariante** del ciclo while. L'invariante è una condizione che deve essere vera **prima, durante e dopo** il ciclo. Per dimostrare la valenza di una invariante bisogna dimostrare delle proprietà:

	- **inizializzazione**: l'invariante deve essere vera prima dell'inizio del ciclo
	- **conservazione**: l'invariante deve essere prima dell'inizio di una iterazione e rimanere vero prima dell'inizio della successiva iterazione
		$$INV \text{(attuale) and GUARDIA} \implies INV \text{(nuova invariante per il ciclo successivo)}$$
	- **conclusione**: quando il ciclo termina, l'invariante ci aiuta a dimostrare la correttezza dell'algoritmo
			$$INV \text{(attuale) and not GUARDIA} \implies \text{asserzione finale}$$
	- **funzione di terminazione** è una funzione a valori naturale che decresce strettamente ad ogni iterazione del ciclo, quando raggiunge lo 0 il ciclo termina.

	Nel nostro caso:
	la funzione di terminazione è il numero di elementi non ancora visitati
	mentre l'invariante è che gli elementi da `L.head` fino a `x` (escluso) hanno chiave diversa da `K`

	- inizializzazione: all'inizio `x = L.head`, quindi tra `x` (escluso) e `L.head` ci sono 0 elementi, sicuramente non possiamo aver trovato `K`
	- conservazione: 

		$$INV \land \text{guardia} \implies INV\left[\frac{\text{x.next}}{\text{x}}\right]$$

		$\left[\frac{\text{x.next}}{\text{x}}\right]$ significa che $\text{x}$ viene rimpiazzato con $\text{x.next}$
	
		per ipotesi sappiamo che:
		1. l'invariante è vero: gli elementi da `L.head` a `x` hanno chiave diversa da `K`
		2. la guardia è vera: `x != NIL and x.key != K`
	
		dobbiamo verificare $INV\left[\frac{\text{x.next}}{\text{x}}\right]$, cioè che gli elementi da `L.head` fino a `x.next` abbiano chiave diversa da `K`:
	per l'ipotesi 1 gli elementi da `L.head` fino a `x` non compreso hanno chiave diversa da `K` e per l'ipotesi 2 l'elemento puntato da `x` ha chiave diversa da `K`.
Quindi abbiamo dimostrato che tutti gli elementi da `L.head` fino a `x` compreso hanno chiave diversa da `K`

	- conclusione
		il ciclo può terminare per due ragioni:
		1. `x == NIL`: abbiamo scorso tutta la lista senza trovare l'elemento e quindi l'invariante resta comunque vera
		2. `x != NIL and x.key == K`: l'invariante mi assicura di prima di `x` non è presente la chiave `K` quindi questa è la prima occorrenza di essa.


3. eliminazione di una coppia tramite *chiave*
	la *delete* rimuoverà tutte le occorrenze della chiave all'interno del dizionario
	```c++
	delete(Dizionario L, chiave K) {
		x = L.head
		while (x != NIL) {
			if (x.key == K) {
				if (x.next != NIL) {
					x.next.prev = x.prev
				}
				if (x.prev != NIL) {
					x.prev.next = x.next
				}
				else {
					L.head = x.next
				}
				temp = x
				x = x.next
				free(x)
			}
			else {
				x = x.next
			}
		}
	}
	```
la complessità di questo algoritmo è 

$$T(n) = \Theta(n)$$

dato che scorriamo tutta la lista in cerca delle occorrenze della chiave.


# Alberi

In questo capitolo studieremo gli **alberi radicati**.
Un albero radicato una struttura dati definita come $T=(N, A)$ dove 

- $N$ è un insieme finito di **nodi**, in cui è presente un particolare nodo chiamato **radice**
- $A$ è un insieme di coppie ordinate di nodi chiamate **archi** (ordinate, nel senso che **l'arco ha un verso**)


## Caratteristiche e definizioni

### Figli di un nodo
- In un albero ogni **nodo** (tranne la radice) **possiede esattamente un padre**
- un nodo può avere zero o più figli
- il numero di figli è detto **grado del nodo**
- **foglia**: nodo senza figli (nodo di grado 0)
- **nodo interno**: nodo che ha almeno un figlio
- **nodi fratelli**: nodi che hanno lo stesso padre

### Cammini

Un **cammino** è una sequenza di nodi collegati da un arco che vanno da un nodo $u$ ad un nodo $u'$

la **lunghezza** di un cammino è il numero di archi di quel cammino.
Esiste sempre un cammino di lunghezza zero (cioè che va da un nodo al nodo stesso)

Gli **antenati** di un nodo sono tutti i nodi compresi nel cammino che va dalla radice al nodo stesso (compreso). Possiamo pensare che gli antenati di un figlio sono: padre, nonno, bisnonno, ecc...

I **discendenti** di un nodo sono tutte le "generazioni" figlie di quel nodo

**Ogni nodo è antenato e discendente di se stesso**

**profondità** di un nodo $x$ è il numero di archi dalla radice al nodo stesso

Un **livello** di un albero è l'insieme di tutti i nodi che stanno alla stessa profondità

L'**altezza** di un nodo è il numero di archi presenti dal nodo fino ad andare alla foglia più lontana
- l'altezza di un albero è l'altezza del nodo radice

## Rappresentazione grafica

![enter image description here](https://i.ibb.co/VBXGZ7w/albero.png)


## Alberi binari e k-ari

Un albero k-ario è un albero in cui ogni nodo ha al massimo $k$ figli

Un albero binario è un albero k-ario in cui $k = 2$ quindi in cui **ogni nodo ha al massimo 2 figli**
Quindi abbiamo una radice e due **sottoalberi**, uno destro e uno sinistro.

Un **albero k-ario completo** è un albero k-ario in cui tutte le foglie hanno la stessa profondità e ogni nodo interno ha esattamente k figli.
Un **albero k-ario quasi completo** Si tratta di un albero in cui tutti i livelli hanno esattamente k figli tranne eventualmente l’ultimo che deve avere le foglie tutte addossate a sinistra.

In giro per l'internet si posso trovare delle nomenclature diverse:
- viene chiamato un albero "perfetto" quello che noi intendiamo "completo"
- viene chiamato albero "completo" quello che noi intendiamo "quasi completo"

### Esercizio 1

Trovare il numero di foglie e il numero di nodi interni di un albero k-ario completo di altezza $h$

- Per il numero di foglie graficamente si può giungere alla formula

	$$\# \text{foglie} = k^h$$

	Dimostriamolo per induzione sull'altezza dell'albero:

	**caso base**:
		il caso base avviene quando $h = 0$, quindi l'albero è costituito solo dalla radice (che è anche l'unica foglia) infatti abbiamo $k^0 = 1$

	**passo induttivo**:
	Assumo per ipotesi induttiva che la proprietà sia vera per l'altezza $h$

	$\#\text{foglie}(h) = k^h$

	voglio dimostrarla per $h+1$, cioè vogliamo dimostrare che vale

	$\#\text{foglie}(h+1) = k^{h+1}$

	Sappiamo per ipotesi induttiva che al livello $h$ dell'albero ci sono $k^h$ nodi e
dato che l'albero è completo sappiamo che tutti i nodi a livello $h$ hanno $k$ figli quindi

	$$k^h \cdot k = k^{h+1}$$

	otteniamo quindi

	$\#\text{foglie}(h+1) = k^{h+1}$

- Per il numero di nodi interni, possiamo fare la somma di tutti i nodi tranne quelli all'ultimo livello:

$$\#\text{nodi interni} =\sum_{i=0}^{h-1}k^i$$

è una serie geometrica che possiamo scrivere come:

$$\#\text{nodi interni} =\frac{k^n -1}{k-1}$$


### Esercizio 2

Trovare l'altezza di un albero k-ario completo avente $n$ foglie:

Sappiamo che il numero di foglie è dato da $k^h$

per ottenere $h$ facciamo il applichiamo il logaritmo su entrambi i membri

$$h = \log_k(\#\text{foglie})$$


## Implementazione degli alberi

Le operazioni che vogliamo implementare sugli alberi sono

- `padre(Tree P, Node v)` $\to$ Node oppure NIL
pre-condizione: il nodo deve appartenere all'albero
post-condizione: restituisce il padre di un nodo oppure NIL

- `figli(Tree P, Node v)` $\to$ Lista di Node
pre-condizione: il nodo deve appartenere all'albero
post-condizione: restituisce la lista contenente i figli del nodo


## Implementazione con array

Utilizziamo un array contenente una struttura contenente l'informazione e l'indice dell'array del padre `(info, parent)`

Quindi il seguente albero

![enter image description here](https://i.ibb.co/hy4Pp0R/alberello.png)

verrebbe rappresentato dal seguente array P

![enter image description here](https://i.ibb.co/RDyyGt3/array.png)

`P[<indice>].info` = contenuto del nodo dell'albero
`P[<indice>].parent` = indice del padre

Il parent della radice è -1
rappresentiamo la lunghezza dell'array con `P.length`
Lo spazio richiesto per questa implementazione è $\Theta(n)$

```c++
padre(Tree P, node v) {
	if (P[v].parent == -1) {
		return -1;
	}
	else {
		return P[v].parent
	}
}
```
La complessità di questo algoritmo è costante

$$T(n) = \Theta(1)$$

```c++
figli(Tree P, node v) {
	l = []
	for(i = 0; i < P.length; i++) {
		if (P[i].parent == v) {
			l.append(i)
		}
	}
	return l
}
```

Assumendo che l'istruzione `append` sia di complessità costante la complessità del nostro algoritmo è $n$ dato che dobbiamo scorrere tutta la lista

$$T(n) = \Theta(n)$$

## Implementazione con array posizionali

Questa implementazione vale solo per gli alberi k-ari completi con $k\geq 2$. Utilizzeremo un vettore $P$ di dimensione $n$ in cui $P[v]$ contiene le informazioni dell'albero e il vettore possiede le seguenti proprietà:

- $P[0]$ è la radice dell'albero
- l'$i$-esimo figlio di un nodo $v$ si trova in posizione $k\cdot v + 1 + i$
- il padre di un nodo $f$ è dato da
	
$$\bigg\lfloor\frac{f-1}{k}\bigg\rfloor$$

![enter image description here](https://i.ibb.co/4KW1fth/implementation.png)

per esempio per sapere quale è l'indice del padre del nodo $L$:

$$\bigg\lfloor\frac{9-1}{3}\bigg\rfloor =2$$

lo spazio necessario per questa implementazione è

$$S(n) = \Theta(n)$$

Assumendo di avere le seguenti due istruzioni:

1. `P.length` = numero di nodi e quindi lunghezza dell'array
2. `P.k` = grado dei nodi

```c++
padre(Tree P, node v) {
	if (v == 0) {
		return NIL;
	}
	else {
		return floor((v-1)/P.k)
	}
}
```

Abbiamo una complessità costante

$$T(n) = \Theta(1)$$

```c++
figli(Tree P, node v) {
	l = []
	if (P.k * v + 1 >= P.length) {	// se v è una foglia
		return l
	}
	else {
		for (i = 0; i < P.k; i++) {
			l.append(P.k * v + 1 + i)
		}
		return l
	}
}
```
Assumendo che la creazione della lista e l'append siano di complessità costante.
nel caso migliore $v$ è una foglia e quindi la complessità sarebbe costante mentre nel caso peggiore dobbiamo eseguire il ciclo for lungo `k` volte. la complessità è quindi limitata dal valore di $k$

$$T(n) = O(k)$$


Un grande svantaggio delle implementazioni con gli array è che in caso di rimozione/aggiunta di elementi bisogna riallocare la memoria

## Implementazione con strutture collegate

Partiamo inizialmente con un albero che ha al massimo 2 figli per ogni nodo interno (albero binario)

definiamo una struttura `x` composta da:

- `x.p` = puntatore al padre
- `x.left` = puntatore al figlio sinistra
- `x.right` = puntatore al figlio destro
- `x.key` = informazione del nodo

la complessità spaziale per questa implementazione è $\Theta(2n)$ quindi 

$$S(n) = \Theta(n)$$

```c++
padre(Tree P, node v) {
	return v.p
}
```
complessità costante

$$T(n) = \Theta(1)$$


```c++
figli(Tree P, node v) {
	l = []
	if (v.left != NIL) {
		l.append(v.left)
	}
	if (v.right != NIL) {
		l.append(v.right)
	}
	return l
}
```

Anche in questo caso abbiamo complessità costante dato che $k$ è 2

$$T(n) = \Theta(1)$$


Con alberi con un numero non prefissato di figli abbiamo bisogno di un'altra implementazione.
Definiamo una struttura `x` composta da:

- `x.p` = puntatore al padre
- `x.left_child` = puntatore al primo figlio di sinistra
- `x.right_sibling` = puntatore al fratello nell'immediata destra
- `x.key` = informazione del nodo

la complessità spaziale per questa implementazione è:

$$S(n) = \Theta(kn)$$

```c++
padre(Tree P, node v) {
	return v.p
}
```
complessità costante

$$T(n) = \Theta(1)$$

```c++
figli(Tree P, node v) {
	l = []
	iter = v.left_child
	while (iter != NIL) {
		l.append(iter)
		iter = iter.right_sibling
	}
	return l
}
```

complessità dipende da quanti figli ha il nodo $v$

$$T(n) = \Theta(\text{grado di }v)$$

## Visita di un albero

Visitare un albero significa accedere ad ogni nodo dell'albero.

La visita di un albero ha complessità spaziale e complessità temporale $O(n)$

$$S(n) = T(n) = O(n)$$

Andremo a vedere due tipologie di visite, quella **in profondità** e quella **in ampiezza**

## Visita in profondità

la visita in profondità (DFS - *depth first search*) si può suddividere in tre tipi di visite diverse in base all'ordine in cui si visitano i nodi.

### Visita pre-order

```c++
pre_order(node r) {
	if (r != NIL) {
		//visita il nodo r
		pre_order(r.left)
		pre_order(r.right)
	}
}
```

si visita quindi prima il nodo attuale, poi il sottoalbero sinistro e poi il sottoalbero destro

![enter image description here](https://i.ibb.co/10W5yjc/pre-order.png)


### Visita in-order

```c++
in_order(node r) {
	if (r != NIL) {		
		in_order(r.left)
		//visita il nodo r
		in_order(r.right)
	}
}
```

si visita quindi prima il sottoalbero sinistro e poi il nodo centrale e infine il sottoalbero destro

![enter image description here](https://i.ibb.co/7pxjF4G/Screenshot-1.png)


### Visita post-order

```c++
post_order(node r) {
	if (r != NIL) {		
		post_order(r.left)
		post_order(r.right)
		//visita il nodo r
	}
}
```

si visita quindi prima il sottoalbero sinistro e poi il sottoalbero destro e infine il nodo centrale

![enter image description here](https://i.ibb.co/Rg2sMHW/post-order.png)


## Teorema sulla visita in profondità
 
 Sia $x$ la radice di un sottoalbero di $n$ nodi, la visita in profondità ha complessità temporale $\Theta(n)$

Dimostriamo per sostituzione il teorema.

Sia $T(n)$ il tempo richiesto dalla procedura chiamata sulla radice di un albero con $n$ nodi.

la definizione di $T(n)$ è la seguente

$$T(n) = \begin{cases}
c & \text{se } n=0 \\
T(k) + T(n-k-1) + d & \text{se } n>0 
\end{cases}$$

dove $k$ è il numero di nodi del sottoalbero sinistro e di conseguenza $n-k-1$ è il numero di nodi del sottoalbero destro (togliamo dal totale $n$ il nodi del sottoalbero sinistro $k$ e togliamo la radice (1)

Nel metodo di sostituzione dobbiamo indovinare la complessità, dato che dobbiamo visitare tutti i nodi dell'albero, l'algoritmo avrà sicuramente almeno complessità lineare:

$$T(n) = \Omega(n)$$

nella maniera più generica possibile possiamo esprime una equazione lineare come:

$$T(n) = an + b$$

dimostriamo per induzione completa su $n$:

**caso base**: quando $n = 0$
il nostro albero sarà composto dalla sola radice, e la complessità della visita sarà costante $c$ secondo la nostra definizione. L'equazione risulterà:

$$T(n) = an + b$$

$$c=a\cdot0 + b$$

$$c= b$$

ho dimostrato il caso base

**passo induttivo**:

Assumiamo che per ogni $m<n$ valga la proprietà $T(n) = am + b$

voglio dimostrare la proprietà per $n$

la definizione ci dice che per $n>0$ abbiamo:

$$T(n) = T(k) + T(n-k-1) + d$$

dato che $k$ è sicuramente minore di $n$ ma anche $n-k-1$ è minore di $n$, per ipotesi induttiva possiamo scrivere:

$$ak + b + a(n-k-1) + b + d$$

$$ak + 2b + an-ak-a + d$$

$$an + 2b - a + d$$

voglio dimostrare che 

$$an + 2b - a + d = an + b$$

$$ 2b - a + d = b$$

$$ b - a + d = 0$$

$$ a = b + d$$

dal caso base sappiamo che $b = c$ 
quindi 

$$ a = c + d$$

sostituendo $a$ e $b$ in $T(n) = an + b$ otteniamo:

$$T(n) = (c+d)n + c$$

Abbiamo dimostrato che l'algoritmo ha complessità lineare.

## Visita in ampiezza

L'altro tipo di visita è la **visita in ampiezza** (**BFS** - breadth first search).

In questo algoritmo andiamo a visitare i nodi livello per livello, dalla radice fino alle foglie (tendenzialmente da sinistra verso destra).

Ad esempio nel seguente albero

![enter image description here](https://i.ibb.co/5KQ1CC4/alberello.png)

I nodi vengono visitati nel seguente ordine: `ALBERO`

L'implementazione classica di questo algoritmo viene fatto iterativamente utilizzando una **coda** come struttura dati.

```c++
visita_bfs(Node r) {
	Queue C = new Queue()
	enqueue(C,r)
	while(not QueueEmpty(C)) {
		u = dequeue(C)
		if (u != NIL) {
			//visita il nodo u
			enqueue(C, u.left)
			enqueue(C, u.right)
		}
	}
}
```

La complessità  è $\Theta(n)$


# Alberi binari di ricerca

Un albero binario di ricerca è un albero binario che soddisfa la seguente proprietà (chiamata proprietà di ricerca):

scelto un qualsiasi nodo $x$ dell'albero deve valere che nel **sottoalbero sinistro** sono presenti nodi con **valori minori o uguali** a $x$ mentre nel **sottoalbero destro** sono presenti nodi con **valori maggiori o uguale** a $x$

Un esempio di albero binario di ricerca è il seguente:

![](https://i.ibb.co/V27PH2B/alberello.png)


La visita **in-order** di questo tipo di albero permette di rappresentare i valore in ordine da più piccolo al più grande


Andremo a vedere varie operazioni su questo tipo di albero.
Un nodo $x$ è formato da:
- la chiave $x.\text{key}$
- il puntatore al padre$x.\text{p}$
- il puntatore al figlio sinistro $x.\text{left}$
- il puntatore al figlio destro $x.\text{right}$

## ricerca

Scriviamo l'algoritmo per la ricerca di una nodo data la chiave

**versione ricorsiva**

```c++
search(node x, value k) {
	if (x == NIL or x.key == k) {
		return x
	}
	else{
		if (x.key > k) {
			return search(x.left, k)
		}
		else {
			return search(x.right, k)
		}
	}
}
```

### Versione iterativa

```c++
search(node x, value k) {
	while(x != NIL and x.key != k) {
		if (k < x.key) {
			x = x.left
		}
		else {
			x = x.right
		}
	}
	return x
}
```

Questi algoritmi sono corretti perché la proprietà ci permette di tagliare degli interi sottoalberi garantendoci che nel sottoalberi tagliati ci saranno solo valori maggiori (a destra) o minori (sinistra)

Per analizzare la complessità di questi due algoritmi possiamo pensare che quando cerchiamo il valore stiamo seguendo un cammino dell'albero, nel caso peggiore questo cammino è il più lontano di tutti (cioè l'altezza dell'albero) quindi possiamo concludere che

$$T(n) = O(h)$$

dove $h$ è l'altezza dell'albero


## Massimo

Scriviamo l'algoritmo per trovare il massimo di un albero binario di ricerca

```c++
// pre-condizione: x deve appartenere all'albero
maximum(node x) {
	while (x.right != NIL) {
		x = x.right
	}
	return x
}
```

Il nodo con la chiave massima sarà il nodo più a destra nell'albero

## Minimo

Scriviamo l'algoritmo per trovare il minimo di un albero binario di ricerca

```c++
// pre-condizione: x deve appartenere all'albero
minimium(node x) {
	while (x.left != NIL) {
		x = x.left
	}
	return x
}
```
Il nodo con la chiave minima sarà il nodo più a sinistra nell'albero

la correttezza è sempre garantita dalla proprietà dell'albero binario di ricerca

Dato che stiamo sempre visitando un cammino dell'albero, il caso peggiore sarà il cammino più lungo quindi

$$T(n) = O(h)$$

## Successore

In un albero binario di ricerca che ha tutti i nodi con chiavi distinte, il successore di un nodo $x$ è la più piccola chiave maggiore di $x.\text{key}$ 


Abbiamo due casi per determinare il successore.

1. se $x$ ha un figlio destro, allora il successore è il minimo nel sottoalbero destro
2. se $x$ non ha un figlio destro, allora il successore (se esiste) si trova risalendo l'albero fino alla prima "svolta" a destra.
(con svolta si intende che fino a che il nodo attualmente puntato è figlio destro allora bisogna continuare a salire, quando il nodo è figlio sinistro allora ci si perché suo padre sarà il successore)

nota che se $x$ è il nodo massimo, esso non ha successore.


```c++
// pre-condizione: x deve appartenere all'albero
successore(node x) {
	if (x.right != NIL) {	//caso 1
		return minimum(x.right)
	}
	else {	//caso 2
		y = x.p		//y sarà sempre il padre di x
		while (y != NIL and x == y.right) {	// continua fino a che o il padre non esiste oppure fino a che non si trova una "svolta" a destra
			x = y
			y = x.p
		}
		return y
	}
}
```

Nel primo `if` abbiamo la complessità del metodo `minimum` che abbiamo visto essere $O(h)$. Anche per l'else però abbiamo la complessità di un cammino (che nel caso peggiore sarà il cammino più lungo) quindi anche qui abbiamo $O(h)$

$$T(n) = O(h)$$


## predecessore

In un albero binario di ricerca che ha tutti i nodi con chiavi distinte, il predecessore di un nodo $x$ è la più grande chiave minore di $x.\text{key}$ 

nota che se $x$ è il nodo minimo, esso non ha predecessore.


Il procedimento è molto simile a quello per trovare il successore

```c++
// pre-condizione: x deve appartenere all'albero
predecessore(node x) {
	if (x.left!= NIL) {	//caso 1
		return maximun(x.left)
	}
	else {	//caso 2
		y = x.p		//y sarà sempre il padre di x
		while (y != NIL and x == y.left) {	// continua fino a che o il padre non esiste oppure fino a che non si trova una "svolta" a destra
			x = y
			y = x.p
		}
		return y
	}
}
```

Analogamente abbiamo
$$T(n) = O(h)$$


## Inserimento

Scriviamo l'algoritmo per inserire un nuovo nodo nell'albero rispettando la sua proprietà.

Ci serviamo di un puntatore alla radice (utile per gestire l'albero vuoto): `T.root`

Assumiamo che il nuovo nodo da inserire $z$ sia già stato inizializzato con i puntatori a `NIL` e con la chiave già impostata.

```c++
inserimento(Tree T, node z) {
	y = NIL	//rappresenterà il padre del nodo z
	x = T.root
	while (x != NIL) {
		y = x
		if (z.key < x.key) {
			x = x.left
		}
		else {
			x = x.right
		}
	}
	z.p = y
	if (y == NIL) {	//se l'albero è vuoto allora z sarà la radice
		T.root = z
	}
	else {
		if (z.key < y.key) {
			y.left = z
		}
		else {
			y.right = z
		}
	}
}
```

la complessità è data dal ciclo while, quel ciclo visita un cammino dell'albero, nel caso peggiore è il cammino più lungo, quindi 

$$T(n) = O(h)$$


## Cancellazione

Pre implementare la cancellazione ci serviamo di una proprietà fondamentale degli alberi binari di ricerca:

**proprietà**: Se un nodo x in un albero binario di ricerca ha due figli, allora il suo successore non ha un figlio sinistro, e, in maniera analoga, il suo predecessore non ha un figlio destro.
In questo caso siamo interessati al successore.

**dimostrazione**
Sia $x$ un nodo con due figli. In una visita simmetrica (*in-order*), i nodi del sottoalbero sinistro precedono $x$ e quelli del sottoalbero destro seguono $x$.
Di conseguenza, il successore di $x$ si trova nel suo sottoalbero destro.

Se $s$ è il successore di $x$, assumiamo per assurdo che $s$ abbia un figlio sinistro, che chiamiamo $y$. Allora, $y$ segue $x$ perché si trova nel suo sottoalbero destro, ma precede $s$ perché si trova nel sottoalbero sinistro di $s$. Questo è assurdo, perché $s$ non sarebbe più il successore di $x$, ma lo sarebbe $y$.

Tornando alla cancellazione:
Quando dobbiamo rimuovere un nodo `z` dall'albero possiamo distinguere tre casi distinti:

1. se `z` è una foglia dell'albero allora basta impostare il puntatore al padre di `z` a NULL e impostare `z = NULL`
2. se `z` ha un unico figlio, in questo caso si crea il collegamento tra il padre di `z` e il suo nodo figlio
3. se `z` ha due figli, dobbiamo trovare il suo successore e mettiamo il successore nella posizione del nodo `z`, avendo cura di aggiornare i rispettivi puntatori.


Implementiamolo in pseudocodice:

innanzitutto ci serviamo di una funzione extra chiamata `transplant` che dato il puntatore alla radice, e due nodi `u` e `v` sostituisce il sottoalbero radicato in `u` con il sottoalbero radicato in `v`

```c++
transplant(Tree T, Node u, Node v) {
	if (u.p == NIL) {
		T.root = v;
	}
	else {
		if (u == u.p.left) {	//se u è figlio sinistro
			u.p.left = v;
		}
		else {		//se u è figlio destro
			u.p.right = v;
		}
	}
	if (v != NIL) {	//il nuovo sottoalbero punta al nuovo padre
		v.p = u.p;
	}
}
```

La complessità di questo metodo è costante $\Theta(1)$

Implementiamo ora la cancellazione

```c++
tree_delete(tree T, Node z) {
	if (z.left == NIL) {	//caso 1
		transplant(T, z, z.right);
	}
	else {
		if (z.right == NIL) {	//caso 2
			transplant(T, z, z.left);
		}
		else {
			y = minimium(z.right);
			if (y.p != z) {		//caso 3.1
				transplant(T, y, y.right);
				y.right = z.right;
				z.right.p = y;
			}
			transplant(T, z, y);	//caso 3.2
			y.left = z.left;
			y.left.p = y;
		}
	}
}
```

![enter image description here](https://i.ibb.co/WBWHvCR/image.png)

La complessità dell'algoritmo è data dalla complessità del metodo `minimum` che abbiamo già visto essere $O(h)$


## Costruzione

tutte le operazioni che abbiamo visto possono essere realizzate in tempo $O(h)$, se l'albero è bilanciato allora $O(h)=\log n$, mentre più l'albero tende ad essere sbilanciato più la complessità tende ad essere $O(n)$.

Avendo un array di elementi da inserire per creare un albero binario il caso peggiore che ci possa capitare è che gli elementi dell'array siano in ordine strettamente crescenti oppure strettamente decrescenti (questo perché l'albero prenderebbe la forma di una semplice lista).

Vediamolo nel seguente algoritmo:

```c++
Arr a = [1, 3, 5, 7, 9];

build_BST(Arr a) {
	t = newTree();
	for (int i = 0; i < a.length(); i++) {
		u = creaNodo(a[i]);
		inserimento(t, u);
	}
	return t
}
```

Analizziamo la complessità

Supponendo che il metodo `creaNodo()` abbia complessità costante allora la complessità dipende dal metodo `inserimento` e dal ciclo for.

La complessità dell'inserimento è $O(h)$.
Dato che abbiamo un array ordinato, l'albero sarà fortemente sbilanciato verso destra, questo significa che l'altezza dell'albero è uguale al numero di nodi, quindi la complessità dell'inserimento è $O(n)$, ma dato che l'inserimento viene chiamato nel ciclo for $n$ volte abbiamo una complessità di $\Theta(n^2)$


Cerchiamo di migliorare l'algoritmo:

Dato che abbiamo un array ordinato al posto di scorrerlo da sinistra verso destra lo scorriamo a partire dal centro (similmente a come viene fatta la *binary search*)

```c++
Arr a = [1, 3, 5, 7, 9];

build_BST_ott(Arr a) {
	t = newTree();
	t.root = build_BST_ott_aux(a, 1, a.length(), NIL)
	return t;
}

build_BST_ott_aux(Arr a, int inf, int sup, Node padre) {
	if (inf > sup) {
		return NIL;
	}
	else {
		med = (inf + sup) / 2;
		r = creaNode(a[med]);
		r.p = padre;
		r.left = build_BST_ott_aux(A, inf, med - 1, r);
		r.right = build_BST_ott_aux(A, med + 1, sup, r);
		return r;
	}
}
```

Per funzionare questo metodo deve ricevere un **array già ordinato**, questo algoritmo ottimizzato permette di avere un albero di altezza uguale a $\log n$

Calcoliamo la complessità dell'algoritmo.

$$T(n) = \begin{cases}
c & n = 0\\
2T\left(\frac{n}{2}\right) + d & n > 0
\end{cases}$$

Possiamo utilizzare il teorema master

$a = 2$
$b = 2$
$f(n) = d$
$n^{\log_22} = n$

Verifichiamo di essere nel caso 1:

$f(n) = O(n^{1-\epsilon})$
se scelgo $\epsilon = 1$ ottengo $n^0 = 1$
Dunque vale che $T(n) = \Theta(n)$

**Nota** per il momento è importante sapere che se l'array non è ordinato è più conveniente prima ordinarlo e poi utilizzare la funzione ottimizzata per creare l'albero, vedremo più avanti che ciò ha complessità $O(n\log n)$

# Alberi di ricerca particolari

## Alberi AVL

Il nome di questi tipi di alberi derivano dai loro inventori *Adelson-Velskij Landis*.

Questi tipi di alberi sono alberi binari di ricerca che hanno la caratteristica di **rimanere sempre bilanciati**.
Ogni nodo oltre a mantenere l'informazione, ha anche un campo cosiddetto **fattore di bilanciamento**.
Questo fattore è determinato dalla differenza di altezza fra l'altezza del sottoalbero sinistro e l'altezza del sottoalbero destro, il valore assoluto di tale differenza deve essere $\leq 1$ in ogni nodo per mantenere il bilanciamento.


## B-alberi

Sono alberi binari di ricerca in cui ogni nodo ha almeno 2 figli. Questi alberi seguono le seguenti proprietà:

1. tutte le foglie hanno la stessa profondità
2. Ogni nodo $v$ (tranne la radice) mantiene un numero di chiavi $K(v)$ ordinate.
	La quantità di chiavi deve essere compresa tra il $(\text{numero di figli} -1)$ e $\text{(2 volte il numero di figli}) -1$.
	In linguaggio matematico con $t = \text{numero di figli}$

$$t-1\leq K(v)\leq2t-1$$

3. la radice mantiene almeno una chiave e al massimo $2t-1$ chiavi ordinate.
4. ogni nodo interno dell'albero ha $K(v) + 1$ figli
5. le chiavi di un nodo fanno da separatore per le chiavi dei relativi sottoalberi sinistri e destri

Vediamo un esempio di questo albero:

![enter image description here](https://i.ibb.co/MNYZ64W/image.png)


## Alberi rossi e neri

Sono alberi binari di ricerca in cui ogni nodo contiene una informazione aggiuntiva: il colore del nodo che può essere rosso oppure nero.
Vincolando in modo opportuno l'alternanza di nodi rossi e neri si riesce ad ottenere la seguente proprietà:
"Il cammino più lungo nell'albero è lungo al massimo il doppio del cammino più breve", ne deriva che l'albero risulta essere bilanciato


# Ordinamento

Vediamo ora il Il problema dell'ordinamento di una sequenza di numeri.

Data una sequenza di numeri $<a_1, ..., a_n>$ voglio un modo per restituire una permutazione di tale sequenza $<a_1', ..., a_n'>$ in cui gli elementi sono ordinati in modo non decrescente

Esistono moltissimi algoritmi che fanno questo ma noi andremo ad analizzare solo alcuni di questi che utilizzano il **metodo del confronto**, cioè gli elementi vengono confrontati tra loro per ottenere il corretto ordinamento.

## Insertion sort

L'insertion sort è un algoritmo basato sulla **tecnica incrementale**: ho $k$ elementi già ordinati e voglio estendere l'ordinamento per il $k+1$-esimo elemento.

Vediamo l'algoritmo

```c++
void insertionSort(int arr[], int n) {
    for (int j = 1; j < n; j++) {	// partiamo da 1 perche l'elemento 0 non ha elementi precedenti con cui essere comparato
        int key = arr[j];
        int i = j - 1;

        // Sposta gli elementi dell'array che sono maggiori di key
        // a una posizione avanti della loro posizione attuale
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i -= 1;
        }

        // Inserisci key nella sua posizione corretta
        arr[i + 1] = key;
    }
}
```
Sostanzialmente quello che fa questo algoritmo è scorrere l'array e prendere ogni elemento e confrontarlo con i precedenti fino a che il suo valore non risulta essere maggiore del precedente.


![enter image description here](https://i.ibb.co/SfznNZx/image.png)


La correttezza dell'algoritmo si basa sulla correttezza dell'invariante del ciclo for. 
Dimostriamo la correttezza dell'invariante.

**invariante**: Il sottoarray `A[0, ... j-1]` è formato dagli **elementi ordinati** che originariamente erano in posizione `A[0, ... j-1]`

**inizializzazione**: prima dell'inizio del ciclo `j = 1`, quindi stiamo dicendo che il sottoarray `A[0, ... 0]` è formato da elementi ordinati che originariamente orano in posizione `A[0, ... 0]`, infatti un sottoarray composto da un solo elemento risulta essere già ordinato

**conservazione**: Il corpo del ciclo for si occupa di inserire nella posizione corretta l'elemento `j` nella porzione di array già ordinata `A[0, ..., j-1]`, dunque una volta posizionato correttamente la nuova porzione ordinata è `A[0, ..., j]` composta dagli elementi originariamente in posizione `A[0, ..., j]`

$$\text{INV} \land \text{guardia} \implies \text{INV}\left[\frac{j}{j-1}\right]$$

**conclusione** quando il ciclo for termina il valore di `j` è uguale alla lunghezza dell'array, quindi il sottoarray `A[0, ..., n - 1]` è formato dagli elementi ordinati originariamente in posizione `A[0, ..., n - 1]`

$$\text{INV} \land \lnot \text{guardia} \implies \text{INV}\left[\frac{n}{j}\right]$$

Quindi concludiamo che tutti gli elementi sono stati ordinati


### Ordinamento in loco

**ordinamento in loco** significa che in ogni istante al più un un numero costante di elementi dell'array sono memorizzati da qualche parte al di fuori dell'array

L'insertion sort viene definito come un algoritmo di ordinamento in loco in quanto in ogni istante c'è al più un elemento memorizzato al di fuori dell'array (precisamente la variabile `key` nell'algoritmo precedente)

### Complessità

Analizziamo il caso peggiore.
Il caso peggiore risulta essere quello in cui il ciclo for viene eseguito $n$ volte (questo è inevitabile) e il ciclo while viene eseguito $j$ volte per ogni elemento dell'array.

$$\sum_{j = 1}^{\text{n}}j = \frac{n(n+1)}{2} = \Theta(n^2)$$

Nel caso peggiore abbiamo quindi una complessità $T(n) = \Theta(n^2)$
Il caso peggiore risulta essere l'array ordinato in modo decrescente


Nel caso migliore, cioè con l'array già ordinato dobbiamo comunque scorrere il ciclo for $n$ volte, quindi la complessità del caso migliore è $T(n) = \Theta(n)$


### Vantaggi
- ordinamento il loco
- sensibile all'ordinamento: se l'array è completamente o parzialmente ordinato vengono eseguite meno istruzioni
- è stabile: gli elementi dell'array uguali vengono mantenuti nello stesso ordine in cui erano nell'array originale

### Svantaggi

- Ha una complessità di $O(n^2)$


## Merge sort

Algoritmo basato sulla tecnica *divide et impera*
L'algoritmo lavora su un array `A[p, ..., r]` vediamo i tre passi:

1. *Divide*: divide l'array in due sottoarray `A[p, ..., q]` e `A[q+1, ..., r]` dove `q` è l'indice della metà dell'array `q`$=\lfloor\frac{ p + r}{2}\rfloor$
2. *Impera*: ordina i due sottoarray in modo ricorsivo utilizzando l'algoritmo `mergesort`, se l'algoritmo è sufficientemente piccolo si risolve direttamente (1 elemento generalmente)
3. *Combina*: fonde i due sottoarray ordinati per generare un singolo array ordinato `A[p, ..., r]`


```c++
void mergesort(int A[], int p, int r) {
	if (p < r) {
		int med = (p + r) / 2;
		mergesort(A, p, med);
		mergesort(A, med + 1, r);
		merge(A, p, med, r);
	}
}

void merge (int A[], int p, int med, int r) {
	int n1 = med - p + 1;
	int n2 = r - (med + 1) + 1; 	// r - med

	int L[n1];	// utilizziamo due array di supporto
	int R[n2];
	for (int i = 0; i < n1; i++)
		L[i] = A[p + i];
	for (int j = 0; j < n2; j++)
		R[j] = A[med + 1 + j];

	// Unire i sottoarray temporanei nei sottoarray principali arr[left..right]
	int i = 0; // Indice iniziale del primo sottoarray
	int j = 0; // Indice iniziale del secondo sottoarray
	for (int k = p; k <= r; k++){
		if (j >= n2 || (i < n1 && L[i] <= R[j])) {	//se il sottoarray destro è finito oppure se il sottoarray sinistro ha ancora elementi e possiede l'elemento minore rispetto al sottoarray destro
			A[k] = L[i];
			i++;
		}
		else {
			A[k] = R[j];
			j++;
		}
	}
}
```

la chiamata iniziale sarà `mergesort(A, 0, A.length()-1)`

Quello che succede è ciò che è mostrato nella seguente immagine
![enter image description here](https://i.ibb.co/SvWDSBQ/image.png)

le chiamate ricorsive a `mergesort` si occupano di continuare a dividere a metà l'array fino ad avere solo elementi unici (caso base).
dopo di che viene chiamato viene chiamato `merge` fino ad raggiungere l'array completo.
la funzione merge si occupa di fondere due array ordinati in uno ordinato.

Nell'immagine la prima chiamata a `merge` avviene tra il valore `L=[3]` e `R=[9]` che sono vettori composti da un elemento e quindi sono ordinati, viene creato il vettore ordinato `[3,9]`.
Poi viene chiamato `merge` su `L=[10]` e `R=[1]` che anch'essi sono ordinati per lo stesso motivo precedente e viene creato l'array ordinato `[1,10]`

Il modo in cui viene costruito l'array ordinato partendo dai due sottoarray ordinati si nota nell'ultimo passaggio con `L = [1, 3, 9, 10]` e `R = [2, 5, 7, 8]`

dato che sono ordinati possiamo andare a confrontare gli elementi partendo dall'inizio:
- confrontiamo prima `L[0]=1` con `R[0]=2`, dato che `L[0]` è minore allora inseriamo nell'array finale `L[0]`
- poi confrontiamo `L[1]=3` con `R[0]=2`, dato che `R[0]` è minore allora inseriamo nell'array finale `R[0]`
- poi confrontiamo `L[1]=3` con `R[1]=5`, dato che `L[1]` è minore allora inseriamo nell'array finale `L[1]`
- e così via...

### Analisi correttezza
Verifichiamo l'invariante del ciclo for finale:

**invariante**: il sottoarray `A[p, ..., k - 1]` contiene gli `k - p` elementi ordinati che sono più piccoli di `L[0, ..., n1]` e `R[0, ..., n2]`, inoltre `L[i]` e `R[j]` sono i più piccoli elementi dei loro rispettivi array che non sono ancora stati copiati nell'array `A`.

- **inizializzazione**: prima che inizi il ciclo abbiamo che l'array `A` è vuoto e quindi ordinato
- **conservazioni**:  il corpo del ciclo for si occupa di riempire l'array `A` prendendo sempre l'elemento più piccolo tra i vettori `L[0, ..., n1]` e `R[0, ..., n2]`, quindi avendo l'array ordinato `A[p, ..., k - 1]` verrà inserito il valore `k` come il più piccolo valore più grande di `k-1` preso tra i due sottoarray `L[0, ..., n1]` e `R[0, ..., n2]`.
quindi risulterà essere ordinato anche `A[p, ..., k]`
- **conclusione**: alla fine del ciclo `k = r+1` quindi l'array `A[p, ..., r + 1 -1] = A[p, ..., r]` contiene gli elementi `r + 1 - p` ordinati più piccoli di `L[0, ..., n1]` e `R[0, ..., n2]`, inoltre `L[i]` e `R[j]` sono i più piccoli elementi dei loro rispettivi array che non sono ancora stati copiati nell'array `A`.
Concludiamo quindi che `A[p, ... r]` è l'array completamente ordinato

### Analisi complessità

Consideriamo prima la funzione `merge`:

$$T_{\text{merge}}(n) = \Theta(1) + \Theta(n1) + \Theta(n2) + \Theta(n)$$

$n1 = \text{med} - p + 1$
$n2 = r-\text{med}$
$n = r - p + 1$ (l'ultimo ciclo for)


$$T_{\text{merge}}(n) = (\text{med}-p + 1) + (r-\text{med}) + \Theta(n)$$

$$T_{\text{merge}}(n) = r-p + 1 + \Theta(n)$$

$$T_{\text{merge}}(n) = \Theta(n) + \Theta(n)= \Theta(n)$$


per quanto riguarda la funzione `mergesort`

$$T_{\text{mergesort}}(n) = \begin{cases}
\Theta(1) & n \leq 1\\
2T(\frac{n}{2}) + \Theta(n) & n > 1
\end{cases}$$

dove $2T(\frac{n}{2})$ dato dalle chiamate ricorsive a `mergesort`, mentre $\Theta(n)$ dato dalla funzione `merge`

Calcoliamo la complessità usando il teorema master:

$f(n) = \Theta(n)$
$n^{\log_22} = n^1 = \Theta(n)$

rientriamo nel secondo caso e quindi la complessità è:

$$T(n) = \Theta(n \log n)$$


### Vantaggi
- efficiente: $T(n) = \Theta(n \log n)$
- è stabile: gli elementi dell'array uguali vengono mantenuti nello stesso ordine in cui erano nell'array originale

### Svantaggi

- non è in loco: vengono utilizzati dei vettori ausiliari la cui dimensione dipende dalla grandezza dell'array
- non è sensibile: non si accorge se l'array è già ordinato o parzialmente ordinato. Quindi vengono fatte tutte le operazioni di split e merge indipendentemente dallo stato iniziale dell'array


# Quick sort

Anche questo algoritmo è basato sulla tecnica *divide et impera*
L'algoritmo lavora su un array `A[p, ..., r]` vediamo i tre passi:

1. *Divide*: divide l'array in due partizioni `A[p, ..., q-1]` e `A[q+1, ..., r]` dove `A[q]` è un elemento chiamato **pivot** che fa da divisore tra le due partizioni (non è compreso in nessuna delle due). Le partizioni vengono costruite in modo tale che la partizione `A[p, ..., q-1]` sia composta solo da valori minori o uguali al pivot. Mentre la partizione `A[q+1, ..., r]` è composta solo da valori maggiori o uguali al pivot.
2. *Impera*: ordina i due sottoarray in modo ricorsivo chiamando `quicksort`, se l'algoritmo è sufficientemente piccolo si risolve direttamente (0 oppure 1 elemento)
3. *Combina*: non è necessario.

```c++
void quicksort(int A[], int p, int r) {
	if (p < r) {
		q = partition(A, p, r);
		quicksort(A, p, q-1);
		quicksort(A, q+1, r);
	}
}

int partition(int A[], int p, int r) {
	x = A[r];	// x rappresenta il pivot di questa chiamata, decidiamo albitrariamente di prendere il valore dell'ultimo elemento dell'attuale range
	i = p-1;
	for (j = p; j < r; j++) {		//non arriviamo fino a r compreso perche r è la posizione del pivot che non vogliamo comparare
		if (A[j] < x) {
			i++;
			int temp = A[i];
			A[i] = A[j]:
			A[j] = temp;
		}
	}
	//metto il pivot nella posizione giusta
	int temp = A[i+1];
	A[i + 1] = A[r];
	A[r] = A[i+1];
}
```

La parte cruciale è il `partition` è possiamo rappresentare una chiamata di `partition` con il seguente schema

![enter image description here](https://i.ibb.co/RyGGmb5/image.png)

Il partition verrà chiamato poi sulle due partizioni fino a che le partizioni non sono composte o da un elemento oppure da nessun elemento.

Ad esempio 

- array di partenza: `7 1 3 6 2 5`
- dopo la prima chiamata a partition otteniamo: `1 3 2 5 7 6`
- poi chiamiamo partition sul sottoarray [1, 3, 2] e otteniamo: `1 2 3 5 7 6`
- poi dovremmo chiamare partition sui sottoarray [1] e [2] ma dato che sono composti da un elemento non viene fatta nessuna operazione
- poi chiamiamo partition sul sottoarray [7, 6] e otteniamo: `1 2 3 5 6 7`
- poi dovremmo chiamare partition sui sottoarray [7] ma dato che è composto da un elemento non viene fatta nessuna operazione.
- l'array risulta ordinato


### dimostrazione correttezza

Invariante del ciclo for del `partition`

$$INV \equiv x = A[r] \land (\forall k \in [p...i] \rightarrow A[k] \leq x) \land (\forall k \in [i+1...j-1] \rightarrow A[k] > x)$$

$$ \land\, (p \leq j \leq r) \land (p -1 \leq i \leq j-1)$$


passiamo subito alla conclusione: alla fine del ciclo for abbiamo che $j=r$, quindi 


$$INV \left[\frac{r}{j}\right]\equiv x = A[r] \land (\forall k \in [p...i] \rightarrow A[k] \leq x) \land (\forall k \in [i+1...r-1] \rightarrow A[k] > x)$$

$$ \land\, (p \leq r \leq r) \land (p -1 \leq i \leq r-1)$$

Cioè abbiamo ripartito l'intero array in nelle tre porzioni: quella con i valori minori di $x$, quella con i valori maggiori di $x$ e la porzione composta solo dall'elemento $x$.

## Analisi complessità

Partiamo dall'analisi della funzione `partition`. La complessità del metodo è dominata dalla complessità del ciclo for, il quale viene eseguito $r-p+1$ volte, quindi $\Theta(n)$.

$T_\text{partition}(n) = \Theta(n)$

Per quanto riguarda il metodo `quicksort` abbiamo

$$T_\text{quicksort}(n) = \begin{cases}
O(1) & n\leq 1\\
T(k) + T(n-1-k) + \Theta(n) & n>1
\end{cases}$$

dove $k$ è il numero di elementi del sottoarray che va da $p$ a $q-1$.
$n-1-k$ è il numero di elementi del sottoarray che va da $q+1$ a $r$.
$\Theta(n)$ è la complessità di `partition`

### Caso peggiore

Consideriamo la complessità nel **caso peggiore**. Il caso peggiore avviene quando l'array è già completamente ordinato, in quel caso abbiamo che nel partizionamento abbiamo sempre una porzione contenente $n-1$ elementi e l'altra porzione vuota.

La complessità secondo la definizione sarebbe

$$T_{\text{quicksort}}(n) =T(n-1) + T(0) + \Theta(n)$$

$$ =T(n-1) + \Theta(n)$$

Utilizzando la tecnica dello srotolamento 

$$T(n-1) + cn$$

$$T(n-2) + c(n-1) + cn$$

$$T(n-3) + c(n-2) + c(n-1) + cn$$

quindi possiamo generalizzare

$$T(n-i) + c[(n-(i-1)) + (n-(i-2)) + n(i-3)]$$

la ricorsione termina quando $i = n$

$$\sum_{i=1}^{n}ci = c\frac{n\cdot (n+1)}{2} = \Theta(n^2)$$

Da qui possiamo concludere che la **complessità del quicksort** è $O(n^2)$

### Caso migliore

Il **caso migliore** invece si ha quando le dimensioni delle due partizioni sono praticamente uguali, una partizione ha $\frac{n}{2}$ elementi e l'altra ha $\frac{n}{2}-1$ elementi.
Possiamo infatti scrivere la complessità come segue

$$T_\text{quicksort}(n) = 2T\left(\frac{n}{2}\right) + \Theta(n)$$

che possiamo determinare grazie al teorema master: caso due  $f(n) = \Theta(n)$, $n^{\log_2 2} = \Theta(n)$

$$T_\text{quicksort}(n)=\Theta(n\log n)$$


### Caso medio proporzioni fisse

Cerchiamo di determinare se il quicksort nel caso medio tende ad essere quadratico oppure $n\log n$. Consideriamo un caso molto vicino al caso peggiore, cioè in cui il 90% degli elementi sta in una partizione e solo il 10% sta nell'altra partizione (ignoriamo la partizione contenente il pivot per semplicità. possiamo immaginare che rappresenti una percentuale bassissima), la **proporzione rimane sempre costante** per ogni chiamata.

La complessità diventerebbe

$$T_\text{quicksort}(n) = T\left(\frac{n}{10}\right) +T\left(\frac{9n}{10}\right) + cn$$

troviamo la complessità usando l'albero delle ricorsioni.

![enter image description here](https://i.ibb.co/T0hBW2B/image.png)

Logicamente la sequenza di chiamata che considera sempre il 10% degli elementi sarà il ramo dell'albero che terminerà prima perchè lavora ogni volta sulla porzione più piccola dell'array. D'altra parte la sequenza di chiamate che considera sempre il 90% degli elemente sarà il ramo più lunghe e che quindi terminerà per ultimo.

Sommando le complessità ad ogni livello, per i primi livello otteniamo sempre $cn$:
- lv1: $cn = cn$
- lv2: $\frac{cn}{10} + \frac{c9n}{10} = cn$
- lv2: $\frac{cn}{100} + \frac{c9n}{100} + \frac{c9n}{100} +\frac{c81n}{100} = cn$

come abbiamo detto per ci saranno dei rami che terminano prima di altri (il ramo più a sinistra sarà il primo a terminare) quindi man mano che si va avanti con i livelli la somma sarà $\leq cn$
Abbiamo quindi che il costo di ogni livello è limitato superiormente da $n \to O(n)$

determiniamo la lunghezza del cammino più breve e quello più lungo:
- cammino più breve:
ad ogni chiamata lavoro sul 10% rispetto alla lunghezza del sottoarray, ciò accade fino a che non raggiungo il caso base, cioè quando rimane un elemento

$$\frac{n}{10^i}=1 \to n = 10^i \to i = \log_{10}n$$

- cammino più lungo:
ad ogni chiamata lavoro sul 90% rispetto alla lunghezza del sottoarray, ciò accade fino a che non raggiungo il caso base, cioè quando rimane un elemento

$$\frac{n}{\left(\frac{10}{9}\right)^i}=1 \to n = \left(\frac{10}{9}\right)^i \to i = \log_{\frac{10}{9}}n$$

quindi l'altezza dell'albero è data dal suo cammino più lungo, il cui costo è dato da il costo di ogni livello per il numero di livelli. Sappiamo che la complessità di ogni livello è $O(n)$ quindi 

$T(n) = O(n) \cdot \log_{\frac{10}{9}}n \to O(n\log n)$

Concludiamo quindi che un caso comunque vicino al caso pessimo comunque si comporta come il caso migliore


### Caso medio proporzioni alternate

Vediamo come si comporta l'algoritmo nel caso in cui le proporzioni si alternassero tra caso migliore e caso pessimo:

- Definiamo la ricorrenza migliore come

$$L(n) = 2U\left(\frac{n}{2}\right) + \Theta(n)$$

- Definiamo la ricorrenza peggiore come

$$U(n) = L(n-1) + \Theta(n)$$


Eseguiamo i calcoli

$$L(n) = 2\left(L\left(\frac{n}{2}-1\right) + \Theta\left(\frac{n}{2}\right)\right) + \Theta(n)$$

$$L(n) = 2L\left(\frac{n}{2}-1\right) + 2\Theta\left(\frac{n}{2}\right) + \Theta(n)$$

$$L(n) = 2L\left(\frac{n}{2}-1\right) + \Theta(n)$$

complessità data dalla complessità di $L(n)$
$$\Theta(n\log n)$$


## Quicksort randomizzato

Questa versione del quicksort cerca di rendere non predicibile il caso in cui l'algoritmo risulti essere $O(n^2)$. Infatti prima sapevamo che l'algoritmo era quadratico quando l'array era già ordinato perchè andavamo a prendere come pivot sempre l'ultimo elemento nel sottoarray. Andando a randomizzare la scelta del pivot non possiamo più predire come dovrebbe essere l'array per rendere l'algoritmo di complessità quadratica.


Vediamo come cambia l'implementazione:

```c++
void quicksort_rand(int A[], int p, int r) {
	if (p < r) {
		q = partition_rand(A, p, r);
		quicksort_rand(A, p, q-1);
		quicksort_rand(A, q+1, r);
	}
}
int partition_rand(int A[], int p, int r) {
	i = random(p, r);
	swap(A[i], A[r]);
	return partition(A, p, r)	// stesso metodo dell'implementazione precednete
}
```

Vantaggi del quick sort randomizzato:

- il tempo di esecuzione non dipende dall'ordinamento dell'array
- non è necessario fare alcuna assunzione sulla distribuzione dell'input
- nessun specifico input può portare al caso pessimo
- il caso peggiore è determinato solamente dal generatore di numeri casuali


## Ottimizzazioni

Vediamo diverse ottimizzazioni per rendere migliore il quick sort.

### Utilizzare l'insertion sort per vettori piccoli

Dato che sappiamo che l'insertion sort è veloce a ordinare un array quasi ordinato, quando ci troviamo con sottoarray piccoli nel quick sort possiamo fare una chiamata ad insertion sort per terminare l'ordinamento.

Il metodo cambierebbe come segue:

```c++
void quicksort_rand(int A[], int p, int r) {
	if (r - p <= M) { 	//dove M è un valore costante che generalmente si fissa tra 5 e 25
		insertion_sort(A, p, r);
	}
	else{
		q = partition_rand(A, p, r);
		quicksort_rand(A, p, q-1);
		quicksort_rand(A, q+1, r);
}
```

alternativamente possiamo utilizzare una funzione che racchiude i due metodi:

```c++
void sort(int A[], int p, int r) {
	quicksort(A, p, r);		// ordina quasi tutto l'array
	insertion_sort(A, p, r);	//finisce l'ordinamento
}

void quicksort_rand(int A[], int p, int r) {
	if (r - p <= M) { 	//dove M è un valore costante che generalmente si fissa tra 5 e 25
		return;
	}
	else{
		q = partition_rand(A, p, r);
		quicksort_rand(A, p, q-1);
		quicksort_rand(A, q+1, r);
}
```

### Pivot come mediana di 3 valori

Possiamo scegliere come pivot la mediata di tre valori presi dal vettore (generalmente uno verso l'inizio, uno nel mezzo e uno alla fine del vettore).
Questa tecnica può portare a un miglioramento delle prestazioni perché riduce la probabilità di selezionare un pivot che è particolarmente piccolo o particolarmente grande, il che potrebbe portare a una suddivisione sbilanciata del vettore e, di conseguenza, a un aumento del numero di confronti e scambi.


### Chiavi duplicate

Analizzeremo a fondo questo caso.

Nel caso l'array possa avere delle chiavi duplicate, c'è un caso specifico che rende l'algoritmo $O(n^2)$, cioè quello in cui tutte le chiavi del vettore sono uguali. Scegliere il pivot randomicamente non risolve questo problema.

Per risolvere questo problema dobbiamo cambiare il modo in cui viene fatto il partizionamento.
Al posto di andare a suddividere il vettore in 2 partizioni (minori o uguali a $x$ e maggiori o uguali a $x$) andiamo a suddividere il vettore in 3 partizioni: 
- elementi strettamente minori di $x$
- elementi uguali ad $x$
- elementi strettamente maggior di $x$

Quindi dopo l'esecuzione di `partition` vogliamo trovarci il vettore del tipo:

![enter image description here](https://i.ibb.co/2hY8P3F/image.png)


Il nuovo metodo `partition` permuta gli elementi `A[p ... r]` e **restituisce due indici** `<q, t>` tali che:

- $p \leq q \leq t \leq r$
- gli elementi `A[q ... t]` sono uguali ad `A[q]`
- gli elementi `A[p ... q-1]` sono strettamente minori di `A[q]`
- gli elementi `A[q+1 ... r]` sono strettamente maggiori di `A[q]`

Vediamo il codice:
per semplicità rappresentiamo il ritorno di una coppia di variabili con `<q, t>`, ma andrebbe implementato con una struct.
```c++
<q, t> partition(int[] A, int p, int r) {
	int x = A[r];	//pivot
	int q = p;		//separatore tra i valori minori e i valori uguali al pivot
	int eq = p;		// itera sugli elementi ancora sconosciuti
	int t = r;		// separatore tra i valori maggiori e i valori uguali al pivot
	while(eq < t) {
		if (A[eq] < x) {
			swap(A[eq], A[q]);
			q++;
			eq++;
		}
		else if (A[eq] == x) {
			eq++;
		}
		else if (A[eq] > x) {
			t--;
			swap(A[eq], A[t])
		}
	}
	swap(A[eq], A[t])
	return <q, t>
}
```

![enter image description here](https://i.ibb.co/L57F1tm/image.png)

### Analisi della correttezza

verifichiamo l'invariante del ciclo while

$$\text{INV} \equiv x = A[r] \\\land\\  \forall k \in [p ... q-1], A[k] < x \\ \land \\\forall k \in [q ... eq], A[k] = x \\ \land\\\forall k \in [t ... r-1], A[k] > x \\ \land \\ p \leq q \leq eq \leq t \leq r$$


Verifichiamo la conclusione dell'invariante:
Quando il ciclo termina abbiamo che `eq = t`, andiamo a riscrivere l'invariante
$$\text{INV}\left[\frac{t}{eq}\right] \equiv x = A[r] \\\land\\  \forall k \in [p ... q-1], A[k] < x \\ \land \\\forall k \in [q ... t], A[k] = x \\ \land\\\forall k \in [t ... r], A[k] > x \\ \land \\ p \leq q \leq t \leq r$$


Il metodo `quicksort` che utilizza questa versione di partition si riscrive nel seguente modo:

```java
void quicksort(int A[], int p, int r) {
	if (p < r) {
		<q, t> = partition(A, p, r);
		quicksort(A, p, q-1);
		quicksort(A, t + 1, r);
	}
}
```

In questo modo nel caso si abbia un vettore di tutti valori uguali, le due chiamata a **quicksort** verrebbero fatte su porzioni vuote, quindi la complessità in quel caso è determinata solo da `partition`, la quale ha complessità $\Theta(r-p)$, che dato che viene chiamata una sola volta su tutto il vettore allora ha complessità $\Theta(n)$

La complessità in caso di chiavi non duplicate rimane invariata rispetto al quicksort normale


## Vantaggi e Svantaggi del quicksort generico

- vantaggi
	- è un algoritmo in loco
	- caso medio è $O(n\log n)$
- svantaggi
	- caso peggiore è $O(n^2)$
	- non è stabile


# Heap sort

L'heap sort è un altro algoritmo di ordinamento, che però si basa su una struttura dati particolare chiamata **heap**.

Un heap (nel nostro caso binario) è un albero binario quasi completo. Si tratta di un albero in cui tutti i livelli sono completi tranne eventualmente l'ultimo che deve avere le foglie tutte addossate a sinistra.

Un heap può essere rappresentato attraverso un array $A$ in cui:
- `A.length` indica il numero di elementi dell'array
- `A.heap_size` indica il numero di elementi dell'heap che sono memorizzati nell'array

vale che `A.heap_size` $\leq$ `A.length`

![enter image description here](https://i.ibb.co/DbXZgjq/image.png)

Dall'immagine si nota che l'array corrisponde ad una visita per livelli da sinistra verso destra.

in questo modo possiamo eseguire le seguente operazioni sull'array:

```c++
// ottenere il nodo padre
parent(Node i) {
	return floor(i/2);
}

// ottenere il figlio sinistro
left(Node i) {
	return 2*i;
}

// ottenere il figlio destro
right(Node i) {
	return 2*i +1;
}
```

## Max heap e min heap

Esistono due particolari tipi di heap in base ad quale proprietà viene soddisfatta:

- **proprietà del max heap**: la chiave del nodo padre è maggiore delle chiavi dei nodi figli. Si può facilmente dedurre che il nodo con chiave massima è la radice.
L'esempio fatto in precedenza rappresenta effettivamente un max heap

	questo tipo di heap sarà la base per realizzare il nostro algoritmo di sorting.

- **proprietà del min heap**: la chiave del nodo padre è minore delle chiavi dei nodi figli. Si può facilmente dedurre che il nodo con chiave minimo è la radice.

	Non useremo questo tipo di heap in per il sorting


## Proprietà generiche degli heap

1. l'altezza di un heap di $n$ elementi è $h = \lfloor\log n\rfloor$

	ciò è dato dal fatto che un heap è un albero quasi completo.
	
	Se l'albero è completo possiamo dire che il numero di nodi $n$ è limitato superiormente dalla somma dei nodi per ogni livello (anche se più precisamente è esattamente uguale al numero di nodi):
	
	$$n \leq \sum_{i = 0}^{h}2^i$$

	$$n \leq \frac{2^{h+1}-1}{2-1}$$

	$$n \leq 2^{h+1}-1$$

	mentre se l'albero è quasi completo, possiamo dire che il numero di nodi è limitato inferiormente dalla somma dei nodi fino al penultimo livello + un singolo nodo:

	$$n \geq 1+\sum_{i = 0}^{h-1}2^i$$

	$$n \geq 1+\frac{2^{h-1+1}-1}{2-1}$$

	$$n \geq 1+2^{h}-1$$
	
	$$n \geq 2^{h}$$


	Abbiamo quindi che il numero di nodi è limitato da:

	$$2^h\leq n \leq 2^{h+1}-1$$

	dato che $2^{h+1}-1 \leq 2^{h+1}$ posso fare la seguente sostituzione

	$$2^h\leq n \leq 2^{h+1}$$

	$$h\leq \log n \leq h+1$$

	dato che l'altezza $h$ è un valore intero: $h = \lfloor \log n \rfloor$

2. i valori dell'array che vanno da `A[n/2 + 1 ... n]` sono foglie dell'albero. Quindi metà array è composto da foglie.
3. In un heap di $n$ elementi ci sono al massimo $\lceil \frac{n}{2^{h+1}}\rceil$ nodi di altezza $h$

	ad esempio i nodi ad altezza 0 (che sono le foglie) abbiamo $\lceil \frac{n}{2^{0+1}}\rceil =\lceil \frac{n}{2}\rceil$ (ciò è coerente con la proprietà precedente)
ad esempio i nodi ad altezza 1 (che sono i padri delle foglie) abbiamo $\lceil \frac{n}{2^{1+1}}\rceil =\lceil \frac{n}{4}\rceil$
ad esempio i nodi ad altezza $\lfloor\log n\rfloor$ (cioè la radice) abbiamo $\lceil \frac{n}{2^{\log n+1}}\rceil = \lceil \frac{n}{2\cdot2^{\log n}}\rceil  = \lceil \frac{n}{2n}\rceil =\lceil \frac{1}{2}\rceil = 1$


## Operazioni sul max heap

Vediamo le operazioni sul max heap che ci servono per fare l'algoritmo di ordinamento.


### max_heapify

La funzione max_heapify prende in input un heap (l'array `A`) in cui è presente una sola violazione della proprietà del max heap (violazione data dal nodo `i`), la funzione si occupa di sistemare questa violazione e ritornare un max heap.

pre-condizione: i sottoalberi radicati in `left(i)` e `right(i)` sono dei max heap
post-condizione: rende l'albero radicato in `i` un max heap

```c++
max_heapify(Array A, Node i) {
	int l = left(i);	//2*i
	int r = right(i);	//2*i + 1
	int massimo;
	if (l <= A.heap_size && A[l] > A[i]) {
		massimo = l;
	}
	else {
		massimo = i;
	}
	
	if (r <= A.heap_size && A[r] > A[massimo]) {
		massimo = r;
	}

	if(massimo != i){
		swap(A[i], A[massimo]);
		max_heapify(A, massimo);
	}
}
```

Quello che fa la funzione è:
1. Determinare gli indici dei figli del nodo che viola la proprietà
2. controllare che i figli del nodo `i` esistano (verificare che `i` non sia una foglia)
3. determinare chi tra i due figli e il nodo `i` ha il valore massimo
4. Scambiare il nodo `i` con il massimo.
5. lo scambio potrebbe a sua volta provocare una violazione, quindi chiamiamo ricorsivamente il metodo e ripetiamo i passaggi per la nuova possibile violazione.

Ad esempio:
![enter image description here](https://i.ibb.co/1XjMGZT/image.png)

 Analizziamo la complessità.
 Il metodo percorre un cammino dell'albero, quindi la complessità è data dall'altezza $h$ del nodo da cui si parte `i`, quindi $O(h)$. Nel caso peggiore il nodo di partenza è la radice, in quel caso $h = \log n$ quindi $T(n) = O(\log n)$.



### build_max_heap

Dato un vettore disordinato, trasformarlo in un max heap.

```c++
build_max_heap(Array A) {
	A.heap_size = A.length;
	for (i = floor(A.length/2) down to 1) {
		max_heapify(A, i)
	}  
}
```

Quello che fa il metodo è chiamare la `max_heapify` per ogni nodo tranne le foglie, infatti il ciclo parte da $\frac{n}{2}$ fino ad arrivare al primo elemento, proprio perché dalla metà dell'array in poi ci sono solo foglie, le quali soddisfano per definizione la proprietà di max heap.

Analizziamo la correttezza: invariante del ciclo for:

$\text{INV} \equiv$ "ogni nodo `A[i+1 ... n]` è la radice di un max heap"

Passiamo subito alla conclusione.
Quando il ciclo termina abbiamo che `i = 0`
$\text{INV}[\frac{0}{i}] \equiv$ ogni nodo `A[1 .... n] è la radice di un max heap`, in particolare ci interessa sapere che la radice sia un max heap


### analisi complessità

Da un'analisi superficiale potremmo dedurre che:
il ciclo for viene eseguito $\Theta(n)$ volte, e ad ogni iterazione viene eseguita la funzione `max_heapify` che ha complessità $O(\log n)$. potremmo concludere che la complessità è $O(n \log n)$, beh questa non è proprio la complessità reale.

Sappiamo che la complessità di `max_heapify` è più precisamente $O(h)$, quindi potremmo scrivere che la complessità sarebbe

$$\Theta(n) \cdot O(h)$$
possiamo però scrivere $\Theta(n)$, cioè il numero di nodi, come la somma dei nodi di ogni livello (secondo la proprietà 3 degli heap)

$$\sum_{h = 0}^{\lfloor \log n\rfloor} \left\lceil \frac{n}{2^{h+1}}\right\rceil \cdot O(h)$$

$$n\sum_{h = 0}^{\lfloor \log n\rfloor} \left\lceil \frac{h}{2^{h+1}}\right\rceil$$

tale complessità è limitata superiormente dalla seguente (dato che il denominatore è più piccolo)

$$n\sum_{h = 0}^{\lfloor \log n\rfloor} \left\lceil \frac{h}{2^{h+1}}\right\rceil = O\left(n\sum_{h=0}^{\lfloor \log n\rfloor}\frac{h}{2^{h}}\right)$$


Quella che abbiamo trovato risulta essere una serie nota che converge ad un valore costante

$$\sum_{h = 0}^{\infty}hx^h = \frac{x}{(1-x)^2} \hspace{5mm} \text{per } |x| < 1$$

Nel nostro caso $x = \frac{1}{2}$, quindi

$$\sum_{h = 0}^{\infty}h\cdot\frac{1}{2^h} = \frac{\frac{1}{2}}{(1-\frac{1}{2})^2}=2$$

Andiamo a sostituire il risultato nella nostra sommatoria

$$n\sum_{h = 0}^{\lfloor \log n\rfloor} \left\lceil \frac{h}{2^{h+1}}\right\rceil = O\left(n\sum_{h=0}^{\lfloor \log n\rfloor}\frac{h}{2^{h}}\right)$$

che diventa

$$n\sum_{h = 0}^{\lfloor \log n\rfloor} \left\lceil \frac{h}{2^{h+1}}\right\rceil = O\left(n\cdot2\right)$$

Concludiamo quindi che la sommatoria che rappresenta la complessità della nostra funzione `build_max_heap` è limitata superiormente da una funzione lineare

Quindi la complessità della funzione `build_max_heap` è $O(n)$

Il ragionamento ad alto livello sarebbe che man mano che scendi di livello nell'albero, il numero di nodi su cui bisogna lavorare aumenta, contemporaneamente però il numero di operazioni da fare per ogni nodo diminuisce (le operazioni sarebbero gli scambi con i figli). Queste due complessità opposte si annullano e risulta quindi essere lineare.


## Heap sort

Finalmente arriviamo all'algoritmo che ordina un vettore, sfruttando le due funzioni che abbiamo definito precedentemente.

```c++
heapsort(Array A) {
	build_max_heap(A);
	for (i = A.length down to 2) {
		swap(A[1], A[i]);
		A.heapsize = A.heapsize - 1;
		max_heapify(A, 1);
	}
}
```

Il metodo si basa completamente sul fatto che nella radice di un max heap è presente il numero maggiore. Quello che fa è prendere la radice e metterla in fondo all'array e poi cancellare la radice, viene ricreato il max heap e si ripete fino a che non si finiscono gli elementi.

Quello che fa è:
1. costruire il max heap partendo dall'array
2. faccio un ciclo che parte dalla fine dell'array e arriva fino al penultimo elemento
3. ad ogni iterazione scambia la radice con l'i-esimo elemento
4. togliamo dall'heap l'ultimo elemento (l'ultima radice spostata)
5. sistema l'eventuale violazione dovuta allo scambio


### Analizziamo la correttezza
invariante del for
$\text{INV} \equiv$ il sottoarray `A[1 ... i]` è un max heap che contiene gli `i` elementi più piccoli presenti in `A[1 ... n]`. Il sottoarray  `A[i+1 .... n]` contiene gli `(n-i)` elementi più grandi presenti in `A[1 ... n]` ordinati

![enter image description here](https://i.ibb.co/8Nx9Zpk/image.png)


Passiamo subito alla conclusione
Alla fine del ciclo risulta che `i = 1`

$\text{INV}[\frac{1}{i}] \equiv$ il sottoarray composto da un elemento `A[1 ... 1]` è un max heap che contiene l'elemente più piccolo presente in `A[1 ... n]`. Il sottoarray  `A[2 .... n]` contiene gli `(n-1)` elementi più grandi presenti in `A[1 ... n]` ordinati.


### Analisi della complessità

Analizzando il codice abbiamo:
- `build_max_heap` con complessità $O(n)$
- un ciclo for che viene eseguito $n-1$ volte, quindi $\Theta(n)$
- all'interno del ciclo viene chiamata la funzione `max_heapify` che ha complessità $O(\log n)$

$T(n) = O(n) + \Theta(n) \cdot O(\log n) = O(n\log n)$



## Vantaggi

- è un algoritmo che ordina in loco
- nel caso peggiore ha complessità $O(n\log n)$

## Svantaggi

- non è stabile
- generalmente il quicksort con tutte le ottimizzazioni risulta essere leggermente migliore (tranne nel suo caso peggiore)
- non è sensibile agli array ordinati o parzialmente ordinati


# Code di priorità

Una coda di priorità è una struttura dati un insieme variabile di elementi, in qui ogni elemento possiede un valore chiamato **chiave o peso**. Abbiamo due tipi di code di priorità in base alla politica applicata alle chiavi:

- coda di massima priorità
- coda di minima priorità

## Operazioni

Vediamo le operazioni sulle code di massima priorità

- **insert**: inserire un elemento nella coda mantenendo mantenendo intatta la politica
- **maximum**: restituisce l'elemento con chiave più grande nella coda
- **extract max**: restituisce ed elimina l'elemento con chiave più grande nella coda (mantenendo intatta la politica)
- **increase key**: cambia il valore della chiave di un elemento con una chiave che deve essere maggiore o uguale alla chiave originale

Le operazioni sulle codi di minima priorità sono duali:
- **insert**:inserire un elemento nella coda mantenendo mantenendo intatta la politica
- **minimum**: restituisce l'elemento con chiave più piccola nella coda
- **extract min**: restituisce ed elimina l'elemento con chiave più piccola nella coda (mantenendo intatta la politica)
- **decrease key**: cambia il valore della chiave di un elemento con una chiave che deve essere minore o uguale alla chiave originale

## Implementazione con max heap

Implementiamo le operazioni di una coda di massima priorità con un max heap.

### Heap maximum

```c++
heap_maximum(Heap A) {
	if (A.heap_size >= 1) {
		return A[1];
	}
}
```
Il valore massimo risulta essere la radice.

Complessità temporale: $T(n) = \Theta(1)$


### Heap extract max

```c++
heap_extract_max(Heap A) {
	if (A.heap_size >= 1) {
		max = A[1];
		A[1] = A[A.heap_size];
		A.heap_size--;
		max_heapify(A, 1);
		return max;
	}
}
```

Salviamo il valore della radice (che sarà il valore di ritorno finale).
Scambiamo la radice con l'ultimo nodo e chiamiamo `max_heapify` sulla nuova radice per metterla nella posizione corretta.

Complessità temporale: $T(n) = O(\log n)$


### Heap increase key

```c++
heap_increase_key(Heap A, Nodo i, Elem key) {
	if (A.heap_size >= 1 && key >= A[i]) {
		A[i] = key;
		while(i > 1 && A[parent(i)] < A[i]) {
			swap(A[i], A[parent(i)]);
			i = parent(i);
		}
	}
}
```
innanzitutto controllo che la nuova chiave `key` sia maggiore o uguale alla chiave del nodo.
Aggiorno il nodo con la nuova chiave.
Dato che il nodo sarà sicuramente maggiore o uguale, l'attuale nodo può stare o in quel posto oppure deve essere in una posizione più alta nell'albero. Nel ciclo continuo a scambiare il nodo con il padre, fermandomi quando il padre sarà più grande del nodo.

Nel caso peggiore devo mettere una foglia come nodo radice (un cammino dalla radice alla foglia)
Complessità temporale: $T(n) = O(\log n)$

Verifichiamo l'invariante del ciclo while:

$\text{INV} \equiv$ gli elementi dell'array `A[1 ... heap_size]` soddisfano la proprietà di max heap tranne eventualmente in `A[i]`

Passiamo subito alla conclusione
Il ciclo può terminare per due ragioni:
- `i = 1` l'unica violazione possibile sarebbe `A[1]` ma dato che essa è la radice non può esserci una violazione
- `A[parent(i)] < A[i]` l'unica violazione possibile sarebbe `A[i]` ma la condizione ci assicura che la chiave `A[i]` è minore della chiave del padre, quindi `A[i]` non è una violazione

Concludiamo quindi che alla fine del ciclo `A` è un max heap.


### Heap insert

```c++
heap_insert(Heap A, Elem key) {
	A.heap_size++;
	A[A.heap_size] = -infinito;
	heap_increase_key(A, A.heap_size, key);
}
```

aggiungiamo alla fine della coda un valore -infinito (per rispettare la precondizione del metodo `heap_increase_key` infatti `key >= -infinito`).
Viene chiamato `heap_increase_key` per mettere il nodo nella corretta posizione facendolo, eventualmente, risalire sull'albero.

Complessità temporale: $T(n) = O(\log n)$



# Ordinamenti lineari

## Limite inferiore degli ordinamenti basati sul confronto

Finora abbiamo visto degli algoritmi di ordinamento basati sul **confronto**.
Dimostriamo che $\Omega(n\log n)$ è il limite inferiore della complessità di questo tipo di algoritmi, in altre parole con algoritmi basati sul confronto non è possibile ottenere una complessità asintotica migliore di $n \log n$ nel caso peggiore.

Dimostriamolo servendoci di **alberi decisionali**, cioè una struttura dati basata su alberi binari che ci permette di evidenziare i passaggi che farebbero gli algoritmi di ordinamento basati sul confronto.

Lavoriamo sotto l'assunzione che gli **elementi da ordinare siano tutti distinti**.

Con un array di 3 elementi l'albero decisionale è il seguente:
![enter image description here](https://i.ibb.co/4MNy7CZ/albero-decisionale.png)

Spiegazione:
In generale per un input di dimensione $<a_1, ..., a_n>$ abbiamo che 
- nei nodi interni sono etichettati dagli indici del vettore $i:j$
	- confronto quindi l'elemento $a_i$ con l'elemento $a_j$
	- se $a_i \leq a_j$ allora vado nel sottoalbero sinistro
	- se $a_i > a_j$ allora vado nel sottoalbero destro
- nelle foglie ci sono le permutazioni del vettore tali che i valori risultano essere ordinati

Ad esempio con l'array `A = [6, 8, 5]`

![enter image description here](https://i.ibb.co/w47rc0c/esempio.png)

**Osservazioni**:
- Dato un qualsiasi algoritmo di ordinamento basato sul confronto è possibile costruire l'albero decisionale corrispondente.
- In base alla lunghezza dell'input si avrà un albero diverso.
- I cammini rappresentano tutti i possibili confronti che fa l'algoritmo per raggiungere la soluzione (quindi l'albero contiene tutte le permutazioni dell'input).
- Il tempo di esecuzione dell'algoritmo è dato dalla lunghezza del cammino (cioè il numero di confronti che fa).
- Nel caso peggiore, il tempo di esecuzione è **l'altezza dell'albero** (dalla radice alla foglia più profonda dell'albero).

Vogliamo cercare un **limite inferiore** sulle altezze di tutti gli alberi di decisione, ciò infatti corrisponderà al limite inferiore del tempo di esecuzione di qualsiasi algoritmo di ordinamento basato sul confronto.

Dalla definizione di permutazione sappiamo che dati $n$ elementi, esistono $n!$ permutazioni (cioè modi di disporre gli elementi in modo diverso).
Di conseguenza il numero di foglie $f \geq n!$ (maggiore o uguale perché in alcuni algoritmi è possibile avere più permutazioni (foglie) uguali, ma ogni permutazione deve comparire **almeno** una volta)


## Dimostrazione del limite inferiore

Per la dimostrazione del limite inferiore dobbiamo prima introdurre un lemma che ci tornerà utile

## Dimostrazione del lemma

Ci serviamo del seguente **lemma**:

"Un qualsiasi albero binario di altezza $h$ ha al più $2^h$ foglie"

Dimostrazione del lemma per induzione su $h$

**Caso base**
$h=0$
l'altezza uguale a $0$ significa che l'albero è composto dalla sola radice, che sarà anche una foglia, quindi
(indichiamo con $f$ il numero di foglie)
$f = 1$
$2^0 = 1$

$$f \leq 2^h$$

$$1 \leq 1$$

**Passo induttivo**
Assumiamo che la proprietà valga per tutti gli alberi di altezza $k < h$.
Cioè assumo che valga $f\leq2^k$ (**ipotesi induttiva**).
Voglio dimostrare la proprietà per $h$, cioè che vale

$$f\leq2^h$$

Dividiamo la dimostrazione in due casistiche, Sia $r$ la radice dell'albero $T$ con altezza $h$:
- Se $r$ ha un solo figlio

	![enter image description here](https://i.ibb.co/C5HRkKw/caso1.png)
	allora il numero di foglie dell'albero $T$ è uguale al numero di foglie del sottoalbero $T_1$

	$$f = f_{T_1}$$

	$f_{T_1} \leq 2^{h-1}$ per la nostra ipotesi induttiva (è come se $k = h-1$)

	ma ovviamente $2^{h-1}\leq 2^h$
	quindi abbiamo raggiunto che 

	$$f = f_{T_1} \leq 2^{h-1}\leq2^h$$
	
	$$f \leq2^h$$

- Se $r$ ha entrambi i figli

	![enter image description here](https://i.ibb.co/4jgD3L9/caso2.png)
	allora il numero di foglie dell'albero $T$ è uguale alla somma delle foglie del sottoalbero $T_1$ e del sottoalbero $T_2$
	
	$f = f_{T_1} + f_{T_2}$

	dato che $h_1 < h$ e $h_2 < h$ posso applicare la mia ipotesi induttiva:

	$f_{T_1} + f_{T_2} \leq 2^{h_1} + 2^{h_2}$

	$\hspace{18mm}2^{h_1} + 2^{h_2} \leq 2\cdot 2^{\max(h_1, h_2)}$

	$\hspace{36mm}2\cdot 2^{\max(h_1, h_2)} = 2^{1 + \max(h_1, h_2)} = 2^h$

	Quindi abbiamo raggiunto che 

	$$f \leq 2^h$$

## Dimostrazione del teorema

Ora dimostriamo il teorema della nostra affermazione iniziale sul limite inferiore degli algoritmo basati sul confronto.

**Teorema**: "Qualsiasi algoritmo di ordinamento basato sul confronto richiede $\Omega(n \log n)$ confronti nel caso peggiore"

Per dimostrare il teorema dobbiamo determinare l'altezza di un albero di decisione dove appare ogni permutazione possibile dell'input come foglia dell'albero.
Ipotizziamo di avere un albero decisionale con la caratteristica appena descritta e che:
- corrisponde ad un ordinamento di $n$ elementi
- ha una altezza $h$
- ha $f$ foglie

Abbiamo già discusso prima che:
- dalla definizione di permutazione sappiamo che 
$$f \geq n!$$
- dal lemma invece sappiamo che
$$f \leq 2^h$$

Quindi possiamo combinarli e ottenere

$$n! \leq f \leq 2^h$$

da cui otteniamo che

$$n! \leq 2^h$$

$$\log_2n! \leq \log_22^h$$

$$\log_2n! \leq h\cdot\cancel{\log_22}$$

$$h \geq \log_2n!$$

Possiamo riscrivere il valore del fattoriale utilizzando una approssimazione chiamata *approssimazione di Stirling*:

$$n! \approx \sqrt{2\pi n}\cdot\left(\frac{n}{e}\right)^n\cdot \left(1 + \Theta\left(\frac{1}{n}\right)\right)$$

per valori di $n$ sufficientemente grandi considero solo la parte dominante, cioè $\large\left(\frac{n}{e}\right)^n$

Considerando solo la parte dominante e notando che nella formula viene fatto il prodotto con valori maggiori o uguali di $1$ possiamo affermare con certezza che sarà una approssimazione minore rispetto al valore reale e quindi possiamo scrivere che

$$h \geq \log_2n! \geq \log_2\left(\frac{n}{e}\right)^n$$


possiamo riscrivere: $\log_2\left(\frac{n}{e}\right)^n$ come:

$$\log_2\left(\frac{n}{e}\right)^n = n\log_2\left(\frac{n}{e}\right) = n(\log_2n - \log_2 e)$$

$\log_2 (e)$ è una costante $\Theta(1)$. Inoltre possiamo ignorare la base del logaritmo in quanto siamo interessati all'andamento asintotico. Otteniamo quindi

$$= n\log n$$

Concludiamo quindi che 

$$h \geq n\log n$$

$$h = \Omega(n\log n)$$

Cioè l'altezza dell'albero, che rappresenta il numero di scambi dell'algoritmo di ordinamento nel caso peggiore, è limitato inferiormente da $\Omega(n\log n)$

Da questo teorema deriva un **corollario**: *Heap sort* e *Merge sort* sono degli algoritmi di ordinamento basati sul confronto **ottimali**, in quanto il loro limite superiore corrisponde con il limite inferiore, cioè $n \log n$


## Counting sort

Facendo delle opportune assunzioni sull'input è possibile creare degli algoritmi di ordinamento di complessità lineare.

Il primo algoritmo che vediamo è il **counting sort**

L'assunzione che viene fatta è la seguente: i numeri da ordinare sono interi che vanno da un intervallo $[0, ..., k]$ fissato un $k$

Quindi:
- in input abbiamo l'array $A[1, ..., n]$ dove $A[j] \in [0, ..., k]$ con $n$ e $k$ come parametri dell'algoritmo
- in output abbiamo l'array $B[1, ..., n]$ che è una permutazione dell'input in cui gli elementi sono ordinati
- Abbiamo bisogno di memoria ausiliaria, un vettore $C[0, ..., k]$ contenente il numero di occorrenze di ogni valore

```cpp
counting_sort(array A, array B, int n, int k) {
	array C[0...k];
	for (i = 0 to k) {			// Θ(k)
		C[i] = 0
	}
	for (j = 1 to n) {			// Θ(n)
		C[A[j]]++
	}
	// per ordinamento crescente:
	for (i = 1 to k) {			// Θ(k)
		C[i] = C[i] + C[i-1]
	}
	
	// per ordinamento decrescente:
	// for (i = k-1 to 1) {			// Θ(k)
	//	C[i] = C[i] + C[i+1]
	// }
	
	for (j = n down to 1) {		// Θ(n)
		B[C[A[j]]] = A[j]
		C[A[j]]--
	}
}
```

spiegazione dei cicli for:

1. primo ciclo: inizializza il vettore delle occorrenze a $0$
2. secondo ciclo: riempie il vettore delle occorrenze inserendo per ogni elemento quante volte è presente (l'elemento stesso viene usato come indice nel vettore delle occorrenze).
nota che l'indice parte da $0$ in quanto il range di valori che possono assumere gli elementi presenti in $A$ vanno da $0$ a $k$
3. terzo ciclo: nel vettore delle occorrenze andiamo ad inserire le somme prefisse, cioè quante volte è presente il numero stesso + tutti i numeri più piccoli di quel numero. così sappiamo per ogni numero quanti elementi ci sono prima di lui.
4. quarto ciclo: riempie l'array di output. `C[A[j]]` ci restituirà quanti elementi ci sono prima dell'elemento in posizione `j`, se ad esempio ci restituisce `5` allora sappiamo che ci sono 4 elementi prima di quel elemento e quindi lui sarà in 5° posizione.
Inoltre decrementiamo le occorrenze così nel caso di elementi uguali nell'array di input, gli elementi non si sovrappongono nell'array risultante.
Scorriamo l'array dalla fine perché così riusciamo a rendere l'algoritmo **corretto ma anche stabile** (questo sarà molto importante per il prossimo algoritmo di ordinamento che vedremo)

Esempio:
![enter image description here](https://i.ibb.co/JqJCTqD/esempio-1.png)

### Complessità

Dalle complessità dei singoli cicli che abbiamo scritto nel codice abbiamo che la complessità è 
$$\Theta(n + k)$$

È conveniente usare questo algoritmo quanto $k = O(n)$, cioè quanto $k \leq n$ in quanto si otterrebbe un tempo lineare $\Theta(n)$.

Se così non fosse non sarebbe per nulla conveniente, immaginiamo di avere un **array relativamente piccolo** in cui gli **elementi sono dei numeri molto grandi e molto piccoli**, allora la complessità sarà data dalla grandezza del vettore $C$.

Ad esempio
$A=[0, 10, ..., n^3, n]$ ipotizzando che $n^3$ sia l'elemento massimo del vettore allora il vettore $C$ dovrà essere grande $n^3$ elementi e quindi la complessità dell'algoritmo sarebbe $\Theta(n^3)$

### Traslazione

È possibile lavorare anche con numeri negativi, quello che dobbiamo fare è traslare gli elementi facendoli partire da 0

$[-L, M]$ lo trasliamo come $[0, M + L]$
di conseguenza anche gli elementi $x$ vanno traslati come $x + L$
Deve comunque valere il limite superiore $M + L = O(n)$ per risultare efficiente con $\Theta(n)$

## Radix sort

Vediamo un altro algoritmo, il Radix sort.
 
**Assunzione**: **Tutti i numeri** da ordinare sono composti da $d$ cifre. la posizione $1$ è la meno significativa mentre la cifra in posizione $d$ è la più significativa

Il codice è il seguente:
```c++
radix_sort(array A, int d) {
	for (i = 1 to d) {
		// utilizzo di un ordinamento stabile per ordinare l'array basandosi sulla cifra i-esima
		//ad esempio il counting_sort
	}
}
```

### Esempio di funzionamento

![enter image description here](https://i.ibb.co/x3Fhx97/esempio.png)

la correttezza dell'algoritmo si basa sul fatto che l'algoritmo di ordinamento usato sulle singole cifre è **stabile** (come il *counting sort*)

Analizziamo la correttezza:
lo facciamo per induzione sulla colonna da ordinare

**Caso base**: $i = 1$, ordino l’unica colonna e non devo fare altro, perché i numeri sono costituiti da una sola cifra.

**Passo induttivo**: la nostra ipotesi induttiva sarà che le colonne $1, ..., i-1$ sono ordinate e voglio dimostrare che un algoritmo stabile sulla colonna $i$ rende le colonne $1, ..., i$ ordinate.
Distinguo due casi:

1. se due cifre nella colonna $i$ sono uguali, per la stabilità essi rimangono nello stesso ordine e per l'ipotesi induttiva sono ordinati
2. se due cifre nella colonna $i$ sono diverse, l'algoritmo le ordina e quindi le mette nelle posizioni corrette

### Analisi della complessità

**Lemma**: Dati $n$ numeri di $d$ cifre dove ogni cifra può assumere fino a $k$ valori diversi. La procedura `radix_sort` ordina correttamente nel tempo $\Theta(d(n + k))$.

Questo perche:
- Ad ogni iterazione viene chiamato un algoritmo stabile di complessità $\Theta(n + k)$ come il counting sort
- Vendono fatte $d$ iterazioni

Se $k = O(n)$, in altre parole, se $k \leq n$ allora la complessità diventa $\Theta(dn)$ e inoltre se $d$ è costante allora la complessità diventa $\Theta(n)$

## Scegliere i valore $d$ e $k$

Vediamo come scegliere i valori dei parametri $d$ e $k$ per riuscire a rendere l'algoritmo con la complessità migliore possibile.

Immaginiamo di avere un valore rappresentato in binario su 32 bit, Abbiamo quindi un valore con 32 cifre in cui ogni cifra può assumere 2 valori, assegnando i valori alle variabili avremo:
$n = 1$ (lavoriamo con un solo numero per semplicità)
$d = 32$
$k = 2$

La nostra complessità verrebbe calcolata come $\Theta(32(n + 2))$, noi potremmo però lavorare sui due parametri $d$ e $k$ per rendere la complessità migliore, infatti dato che il valore di $d$ viene moltiplicato mentre $k$ viene sommato, sarebbe più conveniente abbassare $d$ e aumentare di conseguenza $k$.

Dividiamo, ad esempio, il nostro numero in blocchi di 8 bit (1 byte). Otterremo così $\frac{32}{8} = 4$ cifre, in cui ogni cifra può assumere $2^8=256$ valori diversi

otteniamo così una complessità $\Theta(4(n + 256))$ che cresce molto più lentamente della precedente (per $n$ molto grande)

Nella maggior parte dei casi si avrà $k$ svariate potenze più grande di $n$, in tal caso basta portare $k = n$ e poi ottenere il numero di cifre facendo $\log_n(k')$ dove $k'$ è il valore originale di $k$ (prima di portarlo uguale a $n$) 

### Generalizzazione

Generalizzando questo concetto possiamo dire che:

dati $n$ numeri composti da $b$ bit, avendo un intero $r \leq b$ ho che la procedura `radix_sort` ordina correttamente in tempo $\Theta\left(\frac{b}{r}(n + 2^r)\right)$

La questione che rimane è come scegliere il valore di $r$: abbiamo che $r$ è sia un denominatore (per cui vorremmo che sia abbastanza grande) però è anche un esponente (per cui vorremmo che sia piccolo). 

Distinguiamo due casi (nota che il logaritmo è in base $2$ perché lavoriamo con numeri binari)

1. se $b < \log_2 n$ (che sarebbe come scrivere $2^b <n$, ad esempio $b = 4$ e $n = 64$) allora per qualsiasi valore $r\leq b$ si ha che $n + 2^r$ risulta essere $\Theta(n)$, scelgo quindi il valore di $r$ più grande che mi è possibile, quindi $r = b$. Ottengo quindi:

	$$\Theta\left(\frac{b}{b}\left(n + 2^b\right)\right) = \Theta(n)$$

	Nota che $\log_2 n$ rappresenta il numero di bit che mi servono per rappresentare valori da $0$ a $n-1$.
Quindi avere che l'attuale numero di bit $b$ è minore di questo numero significa che il numero di elementi da ordinare è maggiore rispetto al range di valori che tali elementi assumono. Riferendoci alla formula vecchia stiamo ribadendo il concetto che se $k \leq n$ (dove adesso per noi $k = 2^b$) allora la complessità dipende da $n$ e non da $k$

2. se $b \geq \log_2 n$ (cioè $2^b \geq n$) allora scegliamo $r$ in modo tale che sia massimo  sotto la condizione $n \geq 2^r$, cioè $r = \log_2 n$. ottengo quindi:

	$$\Theta\left(\frac{b}{\log_2n}\left(n + 2^{\log_2n}\right)\right) = \Theta\left(\frac{b}{\log_2n}\left(n +n\right)\right)  =\Theta\left(\frac{nb}{\log_2 n}\right)$$


	se ad esempio $b = c\log_2n$ con $c$ costante allora ho che le cifre variano da
$[0, ..., 2^{b}-1] \implies [0, ..., 2^{c\log_2n}-1] \implies [0, ..., n^c-1]$

	Abbiamo quindi un tempo di esecuzione del `radix_sort`:

	$$\Theta\left(\frac{nc\log_2n}{\log_2 n}\right) = \Theta(nc) = \Theta(n)$$


## Algoritmo completo

```cpp
radix_sort(array A[])
	//inizializzazione di d e k in base allo specifico esercizio
	int d = ?	// numero di cifre
	int k = ?	// numero di elementi che assume una cifra
	int n = A.size()
	for i = 1 to d
		counting_sort(A, n, k, i)

counting_sort(array A[], int n, int k, int i)
	B[1... n]		//array su cui andrò a salvare il risultato
	C[0... k-1]		//array delle occorrenze

	for j = 0 to k
		C[j] = 0
	for j = 1 to n
		C[cifra(A[j], k, i)]++

	//per ordinamento crescente
	for j = 1 to k
		C[j] = C[j] + C[j-1]

	//per ordinamento decrescente
	for j = k-2 down to 0
		C[j] = C[j] + C[j+1]

	for j = n down to 1
		B[C[cifra(A[j], k, i)]] = A[j]
		C[cifra(A[j], k, i)]--

	A = B

//ritorna l'i-esima cifra del numero x in base k
cifra(int x, int k, int i)
	return (x / k^(i-1))) % k
```

# Tabelle hash

Le **Tabelle hash** sono una struttura dati fatta nel modo: **indice (o cella)->elemento (o chiave)**, in cui ogni elemento $k$ viene memorizzato nella posizione $h(k)$ dove $h$ è una funzione, detta funzione di **hashing**, che calcola l'indice tramite delle operazioni matematiche sull'elemento.

Indichiamo matematicamente la funzione $h$ come:

$$h: U \rightarrow \{0, ..., m-1\}$$

Dove $U$ è l'universo degli elementi, mentre il range in cui la funzione produce l'output è limitato in $[0,m-1]$ quindi $m$ possibili valori.
$m$ risulta essere la grandezza della tabella hash, generalmente $m$ è molto più piccolo del numero di elementi in $U$

Graficamente possiamo rappresentare la tabella hash nel seguente modo


![enter image description here](https://i.ibb.co/vcN2sYK/esempio-hashtable.png)


Le tabelle hash soffrono del fenomeno delle **collisioni**, una collisione si verifica quanto un elemento da inserire viene mappato (attraverso la funzione di hash) in una cella già occupata.
Dato che $|U| > m$, (cioè dato che il numero di tutte le chiavi possibili è maggiore della dimensione della tabella) è **possibile** che si verifichino delle collisioni.
Se però $|K| > m$, (cioè dato che il numero di tutte le chiavi memorizzate è maggiore della dimensione della tabella) è **sicuro** che si verifichino delle collisioni.

Ci sono due tecniche per gestire le collisioni:

1. Utilizzo di **liste di collisione** o concatenamento
2. tramite **indirizzamento aperto**


## Liste di collisione / concatenamento

In questa implementazione viene utilizzata una lista (generalmente doppiamente linkata) per ogni indice, contenente tutti gli elementi che vengono mappati sullo stesso indice.
Nell'indice $j$, se sono presenti elementi mappati in quel indice, sarà contenuto un puntatore alla testa della lista, altrimenti, ci sarà NIL.

Vediamo come implementare le operazioni di: inserimento, ricerca e cancellazione:

## Operazioni con liste di collisione

### Inserimento

```cpp
chaining_hash_insert(T, x) {
	// inserimento in testa alla lista T[h(x.key)]
}
```

- l'inserimento in testa richiede tempo costante
- assumiamo che la funzione di hash sia di complessità costante
- supponiamo che l'elemento da inserire non sia già presente (altrimenti dovremmo fare prima una ricerca e in tal caso la complessità dell'inserimento è dato dalla complessità della ricerca)

### Ricerca

```cpp
chaining_hash_search(T, k) {
	// ricerca un elemento con chiave k nella lista T[h(k)]
}
```

- Il tempo di esecuzione nel caso peggiore è proporzionale alla lunghezza della lista interessata

### Cancellazione

```cpp
chaining_hash_delete(T, x) {
	// cancella x dalla lista T[h(x.key)]
}
```

- supponendo che `x` sia un puntatore all'elemento da cancellare, non è necessaria una fase di ricerca dell'elemento nella lista. Di conseguenza è sufficiente aggiornare i puntatori, per cui la complessità è costante (ricordando che stiamo usando una lista doppiamente linkata, altrimenti sarebbe $O(n)$ perché andrebbe trovato il predecessore di `x`)

- Nelle situazioni reali non è detto di possedere il puntatore all'elemento, quindi andrebbe ottenuto tramite una `search` e quindi la complessità sarebbe quella della `search`


## Approfondimento sulla complessità della ricerca

Analizziamo la complessità della ricerca nel caso medio e pessimo.

Sia $T$ una tabella di hash con $m$ celle che memorizza $n$ chiavi

Il **caso pessimo** si ha quando tutte le chiavi sono mappate nella stessa cella, in questo caso avremmo una unica lista grande $n$, quindi la complessità della ricerca nel caso peggiore è $O(n)$

Il **caso medio** dipende fortemente da quanto è buona la funzione di hashing, cioè quanto bene riesce a distribuire gli elementi nelle varie celle.
Per determinare la complessità supponiamo di essere sotto l'ipotesi di **Hashing uniforme indipendente**, e l'ipotesi è la seguente:

> Qualsiasi elemento ha la **stessa probabilità** di essere mandato in una qualsiasi delle $m$ celle, indipendentemente dalle celle in cui sono mandati gli altri elementi.

in linguaggio matematico si potrebbe esprimere come

$$\forall i \in [0, ..., m-1], \hspace{3mm}Q(i)=\frac{1}{m}$$

dove $Q(i)$ indica la probabilità che una chiave finisca nella $i$-esima cella.

Definiamo il **fattore di carico** che ci servirà nella dimostrazione:
il **fattore di carico** è definito come 
$$\alpha=\frac{n}{m}$$

Cioè il numero di elementi mappati diviso la grandezza della tabella hash, in altre parole possiamo vederlo come la **lunghezza media delle liste** dell'hash table.

Ovviamente il valore di $\alpha$ può essere minore, maggiore oppure uguale a 1, ma per ottenere le migliori prestazioni è più conveniente che si abbia $\alpha \leq 1$, avendo così delle liste molto piccole e quindi il tempo di accesso ad ogni elemento sarebbe immediato.

Dividiamo i casi di ricerca con successo e senza successo:

1. **Teorema**: In una tabella hash in cui le collisioni sono risolte con il metodo del concatenamento, una ricerca **senza successo** (l'elemento non è presente) richiede tempo $\Theta(1 + \alpha)$ nel **caso medio**, nell'ipotesi di hashing uniforme indipendente

	Dimostrazione: Intuitivamente possiamo dividere la ricerca in:
	- calcolo della funzione di hash `j = h(k)`	$\hspace{11.6mm} O(1)$
	- accesso alla lista in posizione `T[j]`	$\hspace{18mm} O(1)$
	- scorrimento della lista `T[j]` fino al fondo $\hspace{10mm} \Theta(\alpha)$

	Nota che il $"1+"$ nella complessità (dato dalla funzione hash) è necessario specificarlo in quanto $\alpha$ potrebbe essere minore di $1$

2. **Teorema**: In una tabella hash in cui le collisioni sono risolte con il metodo del concatenamento, una ricerca **con successo** (l'elemento viene trovato) richiede tempo $\Theta(1 + \alpha)$ nel **caso medio**, nell'ipotesi di hashing uniforme indipendente

	Dimostrazione: Intuitivamente possiamo dividere la ricerca in:
	- calcolo della funzione di hash `j = h(k)`	$\hspace{26.6mm} O(1)$
	- accesso alla lista in posizione `T[j]`	$\hspace{33.3mm} O(1)$
	- scorrimento della lista `T[j]` fino al trovamento del valore cercato, che mediamente sarà posto a metà lista, quindi $\frac{\alpha}{2}\hspace{61mm} \Theta(\frac{\alpha}{2}) = \Theta(\alpha)$

	Nota che il $"1+"$ nella complessità (dato dalla funzione hash) è necessario specificarlo in quanto $\alpha$ potrebbe essere minore di $1$

Abbiamo capito che nel caso medio la complessità è $\Theta(1 +\alpha)$.
Se però $n = O(m)$, cioè se ci sono più celle che elementi da salvare, avremo $\alpha = \frac{n}{m} = \frac{O(m)}{m} = O(1)$, e quindi la ricerca sarà costante.

## Funzioni di hash

Prima di passare alla tecnica di indirizzamento aperto vediamo come possono venir realizzate le funzioni di hash

Una funzione hash prende una chiave come input e la manipola con delle operazioni matematiche per restituire in output un numero intero associato a quella chiave. 
Lo scopo della funzione di hash nel nostro caso è quello utilizzarle per riuscire a **distribuire gli elementi in modo uniforme** in tutta la tabella.

Solitamente però le funzioni hash assumono che le chiavi siano dei numeri naturali.

Quindi tutto quello che vedremo sarà nell'ipotesi di avere delle **chiavi naturali**

Vediamo 2 metodi di hashing:

- metodo della divisione
- metodo della moltiplicazione

## Metodo della divisione

Nel metodo della divisione la funzione di hash consiste nel prendere il resto della divisione tra chiave $k$ e grandezza della tabella $m$ (quindi l'operazione di modulo)

$$h(k) = k \text{ mod } m$$

il vantaggio di questa implementazione è sicuramente la facilità di realizzazione.
D'altra parte però abbiamo due grandi svantaggi:
1. La dimensione della tabella viene reso un parametro critico per la funzione di hash
2. come conseguenza del precedente punto, la dimensione della tabella non va scelta casualmente in quanto alcuni valori di $m$ funzionano peggio di altri. Ad esempio bisognerebbe evitare le potenze di 2 e anche numeri vicini alle potenze di 2 come grandezza della tabella (in quanto il risultato dell'hash dipenderebbe solo dagli ultimi $p$ bit della chiave, dove $p$ è l'esponente della potenza di 2).

Una buona scelta per la grandezza della tabella è un **numero primo abbastanza distante dalle potenze di 2 e di 10**

Vediamo un esempio:
Vogliamo memorizzare $n = 2000$ chiavi, prevedendo una media di 3 collisioni.
Scelgo un $m$ vicino a $\frac{2000}{3} = 666.\bar6$ ad esempio $m = 701$


## Metodo della moltiplicazione

L'idea alla base di questo metodo sta nel fatto che, data una chiave (naturale) $k$ la trasformiamo in un numero reale compreso tra $[0, 1[$ per poi applicare la funzione di hash seguente:

$$h(k) = \lfloor m\cdot k\rfloor \hspace{10mm}\text{dove } 0 \leq k < 1$$


Gli step sono i seguenti:

1. Fisso una costante $0<A<1$ 
2. calcolo $A \cdot k$ che genererà un numero con la virgola
3. estraggo la parte frazionaria (facendo il modulo di 1)


Dunque la funzione di hash calcolerà il risultato con il seguente calcolo

$$h(k) = \lfloor m \cdot(k \cdot A \text{ mod } 1)\rfloor$$


### Vantaggi

- la scelta di $m$ non è critica, quindi non ci sono valori peggiori di altri
- il calcolo funziona bene con qualsiasi valore di $A$
- È stato trovato però un valore di $A$ che funziona particolarmente bene, questo numero è l'inverso del rapporto aureo:
	$A \simeq \frac{\sqrt{5} - 1}{2} = 0.618034$


### Semplificare il calcolo della funzione hash

Vediamo come semplificare il calcolo della funzione di hash del metodo del prodotto

Sia $w$ la lunghezza di una parola in memoria.
Assumiamo che una chiave $k$ entri in una singola parola.
Scegliamo un intero $0 < q < 2^w$
e una potenza di due $m = 2^p$ con $0<p<w$

Poniamo $\large A = \frac{q}{2^w}$ che sarà sicuramente compreso tra $[0,1[$ per come abbiamo limitato i parametri

Calcolo $A \cdot k$:
$$A\cdot k = \frac{k\cdot q}{2^w}$$

che a sua volta sarà un numero frazionario, di questo numero a noi ci interessa solo la parte frazionaria

![enter image description here](https://i.ibb.co/kQpqq5y/image.png)

Quindi la nostra funzione hash originale $h(k) = \lfloor m \cdot(k \cdot A \text{ mod } 1)\rfloor$ la possiamo riscrivere come

$$h(k) = \left\lfloor 2^p\left(\frac{k\cdot q}{2^w} \mod 1\right)\right\rfloor$$

cioè consideriamo i $p$ bit più significativi della parte frazionaria del prodotto.
Può essere utile fare uno shift a destra in modo da spostare questi bit sulla destra nelle posizioni meno significative (riempiendo con degli 0 le posizioni che si sono liberate a sinistra)

$$h(k) = \left\lfloor 2^p\left(\frac{k\cdot q}{2^w} \mod 1\right)\right\rfloor >> (w - p)$$


# Indirizzamento aperto

Vediamo ora il modo di gestire le collisioni con l'indirizzamento aperto. A differenza dell'altro metodo, questo non fa uso di strutture esterne, ma tutto viene salvato nella tabella stessa.
Ogni cella contiene o una elemento oppure un NIL.

Vediamo come si comporta questa metodo per cercare una chiave $k$:

1. calcola la funzione hash $h(k)$
2. si **ispeziona** la cella all'indirizzo restituito dalla funzione hash
	- se la cella contiene la chiave $k$ la ricerca ha avuto successo
	- se la cella contiene NIL la ricerca ha avuto un insuccesso
	- se la cella contiene una chiave che non è $k$ allora bisogna trovare un altro indice basandosi su $k$ e sull'**ordine di ispezione** (cioè il numero di ispezioni fatte fino a quel momento)
	Si continua ad ispezionare fino a che:
		- trovo $k$ (successo)	
		- trovo NIL (insuccesso)
		- eseguo $m$ ispezioni, cioè ho ispezionato tutta la tabella (insuccesso)

In questo caso la funzione di hash va modificata in modo da prendere un parametro aggiuntivo (l'ordine di ispezione). Diremo che $h(k, i)$ rappresenta la posizione della chiave $k$ dopo $i$ ispezioni fallite, inizialmente $i=0$

Si richiede che i **valori generati dalle funzioni di hash** $h(k,i)$, dove $i$ varia da $[0,...m-1]$ e $k$ rimane fisso, **siano una permutazione** di $<0, ..., m-1>$ in quanto dobbiamo poter visitare tutte le celle per stabilire se $k$ è presente o meno. Inoltre si tratta di una permutazione in quanto non è detto che si cerchi $k$ in modo sequenziale tra le celle.

## Operazioni con indirizzamento aperto

Lavoreremo sotto la seguente ipotesi: gli elementi della tabella contengono direttamente la chiave (quindi non usiamo il puntatore alla chiave)

### Inserimento

postcondizione: il seguente metodo restituisce l'indice della cella dove ha memorizzato $k$, oppure segnala un errore se la tabella è piena
```cpp
hash_insert(T, k) {
	i = 0;
	trovata = false;
	repeat:
		j = h(k, i);		//calcola la funzione di hash
		if (T[j] == NIL OR T[j] == DELETED) {		//trovo una cella libera
			T[j] = k;
			trovato = true;
		}
		else {		//riprovo con un'altra cella
			i++;
		}
	until (trovata == true || i == m);
	if trovata {
		return j;
	}
	else {
		err "overflow della tabella"
	}
}
```
la ragione del `T[j] == DELETED` viene spiegata nella cancellazione

### Ricerca

postcondizione: ritorna $j$ se la cella $j$ contiene l'elemento $k$ oppure ritorna NIL se la chiave $k$ non è presente nella tabella
 
```c++
hash_search(T, k) {
	i = 0;
	trovata = false;
	repeat:
		j = h(k, i);
		if (T[j] == k) {
			trovato = true;
		}
		else {
			i++;
		}
	until (trovata == true || T[j] == NIL || i == m);
	if trovata {
		return j;
	}
	else {
		return NIL
	}
}
```

Nota che la condizione `T[j] == NIL` si deve al fatto che se dopo varie celle occupate da chiavi che non sono $k$ si incontra una cella vuota allora la chiave $k$ dovrebbe essere stata messa in quella posizione, se non c'è significa che non è presente in tabella


### Cancellazione

La cancellazione presenta una problematica, vediamo un esempio:

supponiamo di avere la seguente tabella

![enter image description here](https://i.ibb.co/Jzz4J0x/image.png)


- Supponiamo di voler aggiungere la chiave 12:

	- al primo tentativo $h(12, 0) = 4$ ma all'indice $4$ c'è già una chiave.
	- al secondo tentativo $h(12, 1) = 1$ ma all'indice $1$ c'è già una chiave.
	- al terzo tentativo $h(12, 2) = 3$ la cella è libera e quindi la chiave $12$ viene inserita all'indice $3$
	
	![enter image description here](https://i.ibb.co/YdT9bzD/image.png)

- Supponiamo ora di voler fare la cancellazione della chiave $101$
	Il primo pensiero che potremmo avere è quello di sostituirlo con un `NIL`:
	![enter image description here](https://i.ibb.co/3mZVjpG/image.png)
Questo però ci crea un problema: 
se adesso volessimo cercare l'elemento $12$ dovremmo fare gli stessi step che abbiamo fatto per il suo inserimento, quindi:
	- $h(12, 0) = 4$ ma in posizione 4 non c'è la chiave 12 quindi proseguiamo
	- $h(12, 1) = 1$ ma in tale posizione si trova `NIL` e per le nostre ipotesi sulla ricerca quando si trova `NIL` significa che l'elemento da cercare non è presente nella tabella (ma questo non è vero in quanto il $12$ è presente)

Per risolvere questo problema, invece di porre a `NIL` l'elemento rimosso, utilizziamo un altro valore, `DELETED`. 
Riusciamo così a distinguere il caso in cui l'elemento non è presente nella tabella quando raggiungiamo `NIL`, mentre il caso in cui l'elemento può essere presente in una altra posizione quando raggiungiamo `DELETED`.
Questo è il motivo per cui nella `insert` controlliamo anche il caso in cui la cella contiene `DELETED` per inserire l'elemento

Svantaggio di `DELETED`: l'utilizzo di questo valore comporta il fatto che il tempo della `search` non dipende più dal fattore di carico $\alpha$: dopo tanti inserimenti e cancellazioni nella tabella si avranno solo chiavi valide e `DELETED`, non ci saranno più `NIL`, e di conseguenza la `search` si scorre tutta la tabella per cercare un elemento non presente.

## Metodi di scansione/ispezione

Vediamo in che modo si può implementare una scansione della tabella per cercare un determinato elemento.

La situazione ideale per l'indirizzamento aperto è l'**hashing uniforme indipendente**, cioè ogni chiave ha la stessa probabilità di avere come sequenza di ispezioni una delle $m!$ permutazioni.

Vediamo delle tecniche che cercano di approssimare questa situazione:

- Ispezione lineare
- Ispezione quadratica
- Doppio hashing

## Ispezione lineare

Calcoliamo la nostra funzione hash $h(k, i)$ servendoci di un'altra funzione hash $h'(k)$, detta **ausiliaria**. 
Viene calcolata nel seguente modo:

$$h(k, i) = (h'(k) + i) \mod m$$

Praticamente, l'ispezione parte dalla cella calcolata da $h'(k)$, poi si scorrono sequenzialmente le celle fino a $m-1$ e infine si parte da $0$ fino ad arrivare a $h'(k) - 1$

![enter image description here](https://i.ibb.co/zsQjMjY/image.png)

### Esempio

Abbiamo una tabella hash grande $m = 13$ celle.
Vogliamo inserire le chiavi nel seguente ordine: $69, 4, 31, 43$

le due funzioni hash sono definite come segue:

$h'(k) = k \mod m$
$h(k, i) = (h'(k) + i) \mod m$

Vediamo i passaggi dell'inserimento:

1. $h(69, 0) = (h'(69) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	non c'è collisione, quindi $T[4] = 69$
2. $h(4, 0) = (h'(4) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(4, 1) = (h'(4) + 1) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	non c'è collisione, quindi $T[5] = 4$
3. $h(31, 0) = (h'(31) + 0) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	c'è collisione
	- $h(5, 1) = (h'(5) + 1) \text{ mod } 13 \,=\, 6 \text{ mod } 13 \,=\, 6$
	non c'è collisione, quindi $T[6] = 31$
4. $h(43, 0) = (h'(43) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(43, 1) = (h'(43) + 1) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	c'è collisione
	- $h(43, 2) = (h'(43) + 2) \text{ mod } 13 \,=\, 6 \text{ mod } 13 \,=\, 6$
	c'è collisione
	- $h(43, 3) = (h'(43) + 3) \text{ mod } 13 \,=\, 7 \text{ mod } 13 \,=\, 7$
	non c'è collisione, quindi $T[7] = 43$


**Vantaggi**: Facilità di implementazione

**Svantaggi**: si possono formare lunghe file di chiavi adiacenti, che rallentano l'inserimento (nell'esempio precedente si nota che per l'elemento $43$ ci sono stati tanti tentativi nonostante c'erano 10 celle libere)

## Ispezione quadratica

L'ispezione quadratica utilizza lo stesso principio dell'ispezione lineare, ma con calcoli diversi.
Questo metodo si calcola come:

$$h(k, i) = (h'(k) + c_1 \cdot i + c_2 \cdot i^2)\mod m$$

dove $c_1, c_2$ sono due costanti reali ausiliarie con valore diverso da $0$

Se ad esempio consideriamo $c_1 = c_2 = \frac{1}{2}$ e $m = 2^p$ per qualunque $p$, l'hashing quadratico soffre dello stesso problema dell'ispezione lineare: se due chiavi sono mappate (tramite la funzione di hash ausiliaria) nella stessa cella allora le due chiavi generano la stessa identica sequenza di ispezione (si creano quindi lunghe file di chiavi adiacenti)

## Doppio hashing

La formula per questo metodo è la seguente:

$$h(k, i) = (h_1(k) + i \cdot h_2(k)) \mod m$$

dove $h_1$ e $h_2$ sono due funzioni di hash ausiliarie.

$h_1$ serve per determinare il punto di partenza (è indipendente dal valore di $i$)
$h_2$ serve per determinare il passo delle ispezioni

### Esempio

Vediamo come si comporta con lo stesso esempio di prima

Abbiamo una tabella hash grande $m = 13$ celle.
Vogliamo inserire le chiavi nel seguente ordine: $69, 4, 31, 43$

le due funzioni hash sono definite come segue:

$h_1(k) = k \mod m$
$h_2(k) = 1 + (k \mod 11)$

$h(k, i) = (h_1(k) + i \cdot h_2(k)) \mod m$

Vediamo i passaggi dell'inserimento:

1. $h(69, 0) = (h_1(69) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	non c'è collisione, quindi $T[4] = 69$
2. $h(4, 0) = (h_1(4) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(4, 1) = (h_1(4) + h_2(k)) \text{ mod } 13 \,=\, 4+5 \text{ mod } 13 \,=\, 9$
	non c'è collisione, quindi $T[9] = 4$
3. $h(31, 0) = (h_1(31) + 0) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	non c'è collisione, quindi $T[5] = 31$
4. $h(43, 0) = (h_1(43) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(43, 1) = (h_1(43) + h_2(43)) \text{ mod } 13 \,=\, 4 + 11 \text{ mod } 13 \,=\, 2$
	non c'è collisione, quindi $T[2] = 43$


Notiamo che con questo metodo abbiamo meno collisioni dell'altro metodo e le chiavi risultano distribuite più uniformemente. Tale metodo risulta essere migliore dei due precedenti negli usi reali.

### Costruire la funzione di hash

Per costruire una funzione di hash efficiente è necessario che $h_2(k)$ generi un valore **relativamente primo** con la dimensione $m$, cosicché la tabella possa essere ispezionata completamente.

> due numeri **sono relativamente primi o copirmi** se il più grande numero che li divide entrambi è 1

Vediamo due modi di costruire la funzione di hash $h_2(k)$:

1. Scegliere $m = 2^p$, questo vuol dire che $m$ (la grandezza della tabella hash) è una potenza di 2 e di conseguenza un numero pari.
Si definisce quindi $h_2(k)$ in modo che produca sempre numeri dispari, così facendo $m$ e $h_2(k)$ saranno sempre relativamente primi.
Per esempio $h_2(k) = 2h'(k) + 1$ dove $h'$ è una funzione hash qualunque

2. Scegliere $m$ come un numero primo e definire $h_2(k)$ in modo che generi sempre un intero positivo strettamente minore di $m$
Per esempio
$h_1(k) = k \mod m$
$h_2(k) = 1 + (k \mod m')$ dove $m' < m$
Questa implementazione è esattamente quella utilizzata nell'esempio precedente per confrontare l'hashing lineare con il doppio hashing.

## Analisi dell'indirizzamento aperto

Analizziamo il tempo di esecuzione delle operazioni di ricerca e inserimento. Lavoriamo sotto le seguenti 2 ipotesi:

1. Supponiamo che l'hashing sia uniforme e indipendente
2. Assumiamo che non vengano fatte operazioni di cancellazione (in quanto porterebbe un aumento dei tempi di esecuzione)

Compieremo l'analisi basandoci sul fattore di carico $\alpha = \frac{n}{m}$, che nel caso di indirizzamento aperto sappiamo valere $0\leq \alpha\leq1$.
In una tabella grande $m$ possiamo quindi memorizzare al massimo $m$ chiavi, e quando la tabella sarà piena allora $\alpha = 1$ (cioè una sola chiave per ogni cella), mentre quanto la tabella è vuota allora $\alpha = 0$

### Ricerca

**Teorema**: Rispettando le ipotesi precedenti, con hashing ad indirizzamento aperto con $\alpha = \frac{n}{m} < 1$ il numero atteso di ispezioni in una **ricerca senza successo** (caso peggiore) risulta essere al massimo $\frac{1}{1-\alpha}$

**Intuizione della dimostrazione**: Se $\alpha < 1$ allora ci sono sicuramente delle celle vuote (quando la tabella è piena $\alpha = 1$), quindi per compiere una ricerca posso fermarmi alla prima cella libera che trovo.

Lavoriamo con le probabilità, indichiamo con $\mathbb{P}[i]$ la probabilità che avvenga l'ispezione $i$-esima
1. una ispezione viene sicuramente sempre compiuta: $\mathbb{P}[1] = 1$
2. La probabilità di fare una seconda ispezione equivale alla probabilità che la prima cella sia occupata: $\mathbb{P}[2] = \frac{n}{m}$
3. La probabilità di fare una terza ispezione equivale alla probabilità che anche la seconda cella sia occupata: $\mathbb{P}[3] = \frac{n}{m} \cdot \frac{n-1}{m-1}$
4. La probabilità di fare una quarta ispezione equivale alla probabilità che anche la terza cella sia occupata: $\mathbb{P}[4] = \frac{n}{m} \cdot \frac{n-1}{m-1} \cdot \frac{n-2}{m-2}$
5. ...

Notiamo che dal momento che $\alpha = \frac{n}{m}$ possiamo approssimare per eccesso tutte le probabilità:

$\mathbb{P}[1] = 1$
$\mathbb{P}[2] = \alpha$
$\mathbb{P}[3] \simeq\alpha^2$
$\mathbb{P}[4] \simeq \alpha^3$

Di conseguenza possiamo approssimare il valore atteso:

$$1 + \alpha + \alpha^2 + \alpha^3 + ... \leq \sum_{i = 0}^{\infty} \alpha^i$$

serie geometrica in cui la base $|\alpha|$ è minore di 1: 
$$\sum_{i = 0}^{\infty} \alpha^i = \frac{1}{1-\alpha}$$

**interpretazione**: Se $\alpha$ è costante, una **ricerca senza successo** viene eseguita in tempo medio $O(1)$:

- Se $\alpha = 0.5$ (tabella piena a metà), il numero medio di ispezioni è al massimo $\frac{1}{1 - \frac{1}{2}} = 2$
- Se $\alpha = 0.9$ (tabella quasi piena), il numero medio di ispezioni è al massimo $\frac{1}{1-\frac{9}{10}} = 10$

Notiamo come **più la tabella è piena più ispezioni sono necessarie**.

### Inserimento

**L'inserimento è in sostanza una ricerca senza successo.**

**Corollario**: L'inserimento di un elemento in una tabella hash a indirizzamento aperto con un fattore di carico $\alpha$ richiede in media non più di $\frac{1}{1-\alpha}$ ispezioni, nell'ipotesi di hashing uniforme.

**Dimostrazione**: Un elemento è inserito nella tabella solo se essa non è piena, cioè se $\alpha < 1$.
L'inserimento di una chiave richiede una ricerca senza successo (cioè dobbiamo trovare una cella vuota), e poi di salvare la chiave nella cella vuota trovata.
Quindi il numero atteso di ispezioni è al massimo $\frac{1}{1-\alpha}$

**Teorema**: Data una tabella hash ad indirizzamento aperto con fattore di carico $\alpha < 1$, il numero atteso di ispezioni di una **ricerca con successo** è al massimo $\frac{1}{\alpha}\log\frac{1}{1-\alpha}$, sempre nell'ipotesi di hashing uniforme e indipendente.

**Interpretazione**: Se $\alpha$ è costante, una **ricerca con successo** viene eseguita in tempo medio $O(1)$.

- Se $\alpha = 0.5$ (tabella piena a metà), il numero medio di ispezioni per il successo è al massimo $\frac{1}{0.5}\log\frac{1}{1-0.5} = 1.386$ 
(supponendo di usare il logaritmo in base $e$)
- Se $\alpha = 0.9$ (tabella quasi piena), il numero medio di ispezioni per il successo è al massimo $\frac{1}{0.9}\log\frac{1}{1-0.9} = 2.558$
(supponendo di usare il logaritmo in base $e$)


## Confronto tra concatenamento e indirizzamento aperto

![enter image description here](https://i.ibb.co/3ThWRkw/image.png)

$1 + \frac{\alpha}{2}$ **concatenamento ricerca con successo**
$1 + \alpha$ **concatenamento  ricerca senza successo**
$(\frac{1}{\alpha}) + \ln(\frac{1}{1-\alpha})$ **indirizzamento aperto ricerca con successo**
$\frac{1}{1-\alpha}$ **indirizzamento aperto ricerca senza successo**

Notiamo come il concatenamento risulti essere migliore.


# Programmazione dinamica

La programmazione dinamica è una tecnica di programmazione molto interessante che si applica in contesti in cui:
Si ha un **problema che si può ridurre ad un insieme di problemi più piccoli** (proprio come la tecnica *Divide et Impera*). Ma diversamente dalla tecnica *Divide et Impera*, in questo caso i **sottoproblemi sono sovrapposti**, cioè sono uguali tra loro.

In tale situazione un algoritmo *Divide et Impera* computerebbe da capo un sottoproblema che potrebbe aver già risolto in precedenza, risultando inefficiente.

La programmazione dinamica serve proprio come soluzione a questo problema:
**Si risolve il sottoproblema e si salva la sua soluzione, quando si rincontra lo stesso sottoproblema si utilizza direttamente la soluzione già calcolata.**

La programmazione dinamica torna utile per problemi in cui bisogna ottimizzare qualcosa, in cui ogni possibile soluzione ha un costo, vogliamo trovare una **soluzione ottima** (in termini di tempo) per massimizzare o minimizzare tale costo (in base allo scopo del problema).

Va detto che spesso la soluzione ottima non è unica, e la programmazione dinamica tiene conto anche di questo.

L'aumento di performance portato dalla programmazione dinamica ha come lato negativo l'aumento notevole di utilizzo di memoria (sono necessarie strutture dati ausiliarie per salvare i risultati dei sottoproblemi)

## Sviluppare un algoritmo di programmazione dinamica

1. Caratterizzazione della struttura di un soluzione ottima
2. Fornire una definizione ricorsiva del valore di una soluzione ottima
3. Calcolo del valore di una soluzione ottima, tramite una delle due tecniche:
	- Top-down
	- Bottom-up
4. Individuazione di una soluzione ottima sulla base delle informazioni del punto precedente


## Esempio taglio delle aste

Un'azienda produce delle aste che vende a pezzi. Le aste prodotte hanno una certa lunghezza $n$ e i prezzi delle aste dipendono dalla loro lunghezza.
Il problema sta nel tagliare le aste in modo da massimizzare il guadagno (si assume che il costo per eseguire il taglio sia irrilevante)

**Input**: un'asta di lunghezza $n$ e una tabella di prezzi $p_i$, con $i = 1, ..., m$

**output**: il ricavo $r_n$, cioè il ricavo massimo per un'asta di lunghezza $n$ che si può ottenere tagliando l'asta e vendendo i singoli pezzi.

Esempio di tabella:
Supponiamo che la lunghezza iniziale dell'asta sia $n = 7$

| Lunghezza $i$ | Prezzo $p_i$ |
|:--:|:--:|
| 1 | 1 |
| 2 | 5 |
| 3 | 8 |
| 4 | 9 |
| 5 | 10 |
| 6 | 17 |
| 7 | 17 |

Vediamo alcuni esempi di tagli:

- 7 pezzi lunghi 1:
	- $1 + 1 + 1 + 1 + 1 + 1 + 1 = 7$
- 1 pezzo lungo 2 e 5 lunghi 1
	- $5 + 1 + 1 + 1 + 1 + 1 = 10$
- 1 pezzo lungo 3 e 2 pezzi lunghi 2
	- $5 + 5 + 8 = 18$ (ottimale)
- 1 pezzo lungo 6 e un pezzo lungo 1
	- $17 + 1 = 18$ (ottimale)

Un metodo *Divide et Impera* risolverebbe questo problema tentando tutti i possibili modi di tagliare l'asta.
Ma In quanti possibili modi si potrebbe tagliare un'asta lunga $n$? (assumendo che si possa tagliare solo ogni metro)
Se pensiamo che ad ogni metro possiamo decidere se tagliare o meno abbiamo $2 \cdot 2 \cdot 2...\cdot 2$ per $n-1$ volte, quindi $2^{n-1}$ possibili modi di fare i tagli. Avremmo quindi un algoritmo esponenziale

Esprimiamo invece il ricavo massimo $r_n$ nel seguente modo ricorsivo:

$\left\{\begin{array}{l}
r_0=0 \\
r_n=\max \{\underbrace{p_n}_{\begin{array}{c}
\text { prezzo } \\
\text { senza } \\
\text { tagliare }
\end{array}}, \underbrace{r_1+r_{n-1}}_{\text {taglio in } i=1}, \underbrace{r_2+r_{n-2}}_{\text {taglio in } i=2}, \ldots, \underbrace{r_{n-1}+r_1}_{\text {taglio in } i=n-1}\}
\end{array}\right.$

Quando la soluzione è esprimibile, come in questo caso, come combinazione di soluzioni ottime di sottoproblemi si dice che vale la **proprietà della sottostruttura ottima**.
Tale condizione è la condizione esistenziale per poter elaborare algoritmi di programmazione dinamica.

Possiamo però trovare una soluzione più semplice: tagliare un pezzo in modo definitivo, e suddividendo ulteriormente la parte rimanente in modo ottimale.

$\left\{\begin{array}{l}r_0=0 \\ r_n=\max_{1\leq i \leq n} \{\underbrace{p_i}_{\begin{array}{c}\text { Prezzo del taglio} \\ \text { non ulteriormente diviso }\end{array}}+\underbrace{r_{n-i}}_{\text {suddivido in modo ottimo }}\}\end{array}\right.$

L'algoritmo prende in input i seguenti parametri:

- `p[1, ..., m]`, con $m \geq n$, che rappresenta il vettore contenente i prezzi delle aste, in `p[i]` è contenuto il costo di un'asta di lunghezza `i`
- `n` che rappresenta la lunghezza dell'asta da tagliare

L'algoritmo produce in output $r_n$, un intero che rappresenta il massimo guadagno ricavabile dall'asta.

### Algoritmo senza programmazione dinamica

```c++
cut_rod(p, n) {
	if (n == 0) {
		return 0
	}
	else {
		q = -1		//se i prezzi potessero essere negativi andrebbe inizializzato a -infinito
		for (i = 1 to n) {
			q = max(q, p[i] + cut_rod(p, n-i))
		}
		return q
	}
}
```

Analizziamo il costo:

Sia $T(n)$ il numero di chiamate ricorsive con il secondo parametro uguale a $n$:

$$T(n) = \begin{cases} 1 & n = 0\\
1 + \sum_{i = 1}^{n}T(n-i) & n > 0\end{cases}$$

Ponendo $j = n-i$ otteniamo

$$T(n) = 1 + \sum_{i = 1}^{n} T(n-i) = 1+\sum_{j = 0}^{n-1} T(j)$$

Dimostriamo per induzione che $T(n) = 2^n$

**caso base**: Se $n = 0, T(0) = 1 = 2^0$

**passo induttivo**: Assumiamo per ipotesi induttiva che $T(n) = 2^n$ e dimostriamo per $n+1$:

$$T(n+1) = 1 + \sum_{j=0}^{(n+1)-1}T(j) = 1 + \sum_{j=0}^{n}T(j)$$

$$= 1 + T(n) + \sum_{j = 0}^{n-1}T(j)$$

che per definizione

$$= T(n) + T(n) = 2T(n)$$

per ipotesi induttiva

$T(n+1) = 2T(n) = 2\cdot 2^n = 2^{n+1}$

Concludiamo che $T(n) = \Theta(2^n)$

Possiamo vedere visivamente come tale algoritmo esplora tutti i possibili sottoproblemi:

![enter image description here](https://i.ibb.co/DpwsBd9/image.png)

**Osservazioni**:
- Il numero di nodi è esattamente $2^{n}$
- Vediamo come ci sono svariati **problemi sovrapposti** (vedi i nodi `1` e `2`)
- Abbiamo in totale $n$ **sottoproblemi distinti** (in questo caso $1, 2, 3, 4$)


### Algoritmo con programmazione dinamica

Possiamo dire che se:
- il numero di sottoproblemi distinti è polinomiale
- ciascun sottoproblema si risolve in tempo polinomiale

allora si può ottenere un **algoritmo di risoluzione polinomiale** (al costo di usare della memoria aggiuntiva).

In generale abbiamo 2 modi di costruire un algoritmo con la programmazione dinamica:

1. **Top-down**: salva in una tabella (array o tabella hash) le soluzioni dei sottoproblemi già risolti.
	Questa tecnica richiede l'uso della ricorsione
2. **Bottom-up**: ordina i sottoproblemi in base alla loro dimensione, partendo da quelli più piccoli e memorizza le soluzioni ottenute.
	Questa tecnica solitamente non richiede l'uso della ricorsione

## Tecnica top-down

```c
top_down_cut_rod(p, n) {
	r[0 ... n]		//vettore con i risultati parziali
	for (i = 0 to n) {	//inizializzazione dell'array
		r[i] = -1
	}
	return top_down_cup_rod_aux(p, n, r)
}

top_down_cut_rod_aux(p, j, r) {
	if (r[j] < 0) {		// se l'attuale sottoproblema non è stato già calcolato
		if (j == 0) {	// questo controllo si potrebbe fare nel metodo precedente durante l'inizializzazione
			r[j] = 0		//il costo di un'asta lunga 0 è 0
		}
		else {
			q = -1
			for (i = 1 to j) {
				q = max(q, p[i] + top_down_cut_rod_aux(p, j-i, r))
			}
			r[j] = q
		}
	}
	return r[j]
}
```

### Analisi complessità

Se il problema è già risolto allora non entriamo nel primo `if` e quindi la risoluzione di quel sottoproblema è costante.

Si entra nel ramo `else` una sola volta per ogni sottoproblema $j$ con $1 \leq j \leq n$ (perché non è detto si debbano per forza risolvere tutti i sottoproblemi)

Per risolvere un sottoproblema di dimensione $j$ viene eseguito un ciclo for che esegue $j$ iterazioni. Quindi avendo $n$ sottoproblemi la complessità dell'algoritmo `top_down_cut_rod_aux` è dato da 

$$\sum_{j = 1}^{n}j = \frac{n(n+1)}{2} = \Theta(n^2)$$


Alla complessità dell'algoritmo totale dobbiamo aggiungerci anche il tempo dell'inizializzazione del vettore:

$$T(n) = \Theta(n) + \Theta(n^2) = \Theta(n^2)$$

## Tecnica bottom-up

```c
bottom_up_cut_rod(p, n) {
	r[0 ... n]
	r[0] = 0
	for (j = 1 to n) {
		q = -1
		for (i = 1 to j) {
			q = max(q, p[i] + r[j-i])		//Θ(1)
		}
		r[j] = q
	}
	return r[n]
}
```

### Analisi complessità

Per ogni sottoproblema di dimensione $j$ viene eseguito un ciclo che esegue $j$ iterazioni

$$\sum_{j=1}^{n}\Theta(1) \cdot j = \Theta(1) \cdot \frac{n(n+1)}{2} = \Theta(n^2)$$


Quindi entrambi i metodi hanno la stessa complessità (generalmente la tecnica top-down è la migliore in quanto non richiede di fare esplicitamente tutti i sottoproblemi, mentre la tecnica bottom-up li calcola sempre tutti)

## Dove tagliare?

Siamo riuscite ad ottenere il ricavo massimo possibile, però non sappiamo ancora dove vanno fatti i tagli per ottenere tale ricavo massimo.

Estendiamo l'algoritmo bottom-up per fargli restituire anche questa informazione, ci serveremo di un altro vettore `s[1 ... n]` in cui nella $i$-esima posizione memorizza la posizione del primo taglio che determina la soluzione ottima per il sottoproblema di dimensione $i$

```c
bottom_up_cut_rod_extended(p, n) {
	r[0 ... n]
	s[0 ... n]

	r[0] = 0
	for (j = 1 to n) {
		q = -1
		for (i = 1 to j) {
			if (q < p[i] + r[j - i]) {
				q = p[i] + r[j - i])
				s[j] = i
			}
		}
		r[j] = q
	}
	return r, s
}

print_positions(p, n) {
	r, s = bottom_up_cut_rod_extended(p, n)		//Θ(n^2)
	while (n > 0) {		//O(n)
		print s[n]
		n = n - s[n]
	}
}
```

Viene quindi stampato il taglio ottimo per l'asta lunga $n$ usando `s[n]`, dopo aver effettuato il taglio ci rimarrà un pezzo lungo $n1$ di cui sappiamo che il taglio ottimo si trova nella posizione `s[n1]`, e via così fino a che non rimane un asta di lunghezza $0$

**Complessità**:
$$T(n) = \Theta(n^2) + O(n) = \Theta(n^2)$$


Esempio sulla posizione dei tagli:

| Lunghezza $i$ | `s[i]` |
|:--:|:--:|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 2 |
| 5 | 2 |
| 6 | 6 |
| 7 | 1 |

partiamo da un'asta lunga $7$, `s[7]` ci dice di tagliare in posizione $1$
ci rimane un'asta lunga $7-1=6$, `s[6]` ci dice di tagliare in posizione $6$
ci rimane un'asta lunga $6-6=0$, algoritmo termina
Quindi una soluzione ottima è fare un'asta lunga $1$ e una lunga $6$


# Problema della Longest Common Subsequence

Vediamo un altro problema dove la programmazione dinamica torna molto utile, il problema della Longest Common Subsequence (LCS), che consiste nel trovare la più grande **sottosequenza** comune tra due stringhe.

In questo capitolo faremo degli esempi in riferimento alle stringhe di DNA che hanno come alfabeto le lettere $\{A, G, C, T\}$

Definizione di **sottosequenza**: una sottosequenza di una stringa $S$ è un'altra stringa $S'$ contenente le stesse lettere di $S$ nello stesso ordine ma non necessariamente adiacenti.

(da non confondere con sottostringa la quale richiede che i caratteri siano adiacenti)

Ad esempio date le due stringhe:

- $S_1 = \text{ACTACCTG}$
- $S_2 = \text{ATCACC}$

delle possibili sottosequenze comuni sono
- $ACACC$
- $ACC$
- $ATA$
- $ATACC$
- ...

**Il problema LCS consiste nel trovare la sottosequenza più lunga**.

Formalmente:
Date due stringhe 
- $X$ composta dai caratteri  $x_1...x_m$
- $Y$ composta dai caratteri $y_1...y_n$

Vogliamo trovare una sottosequenza $W$ comune a $X$ e $Y$ che sia di lunghezza massima.
**Generalmente si possono avere più sottosequenze comuni di lunghezza massima uguale**, per cui non esiste sempre una soluzione unica.
Per questo motivo indicheremo con $LCS(X, Y)$ un **insieme** di sottosequenze comuni di lunghezza massima

Anche in questo caso l'utilizzo di un algoritmo di forza bruta (che trova tutte le possibili sottosequnze e poi mantiene quelle di massima lunghezza) risulterebbe in una **complessità esponenziale** $2^n$


## Costruzione algoritmo attraverso programmazione dinamica

Costruiamo passo passo un algoritmo risolutivo utilizzando la programmazione dinamica

## Passo 1 - Caratterizzazione della sottostruttura ottima

Per determinare una soluzione possiamo trovare un algoritmo basato sui **prefissi**:
Data una stringa $X = x_1...x_m$, allora per un certo $k \leq m$ il **prefisso** di lunghezza $k$ della stringa $X$ è 
$X^k=x_1...x_k$
Cioè sono i primi $k$ caratteri della stringa $X$

In generale data un stringa di $n$ caratteri si hanno $n+1$ prefissi (il +1 è dato dal fatto che la stringa vuota è un prefisso di qualsiasi stringa)

Ridurre il problema LCS al problema sui prefissi fa sì che il numero di sottoproblemi distinti sia nell'ordine $O(n\cdot m)$
dove $n$ e $m$ sono il numero di prefissi delle due stringhe del problema.

### Teorema della sottostruttura ottima per LCS

Siano $X = x_1...x_m$ e $Y=y_1...y_n$ due stringhe e sia $W = w_1...w_k \in LCS(X, Y)$ allora,
1. Se $x_m = y_n$, allora $w_k=x_m=y_n$ e $W^{k-1}\in LCS(X^{m-1}, Y^{n-1})$
	Cioè: Se l'ultimo carattere delle due stringhe è uguale allora l'ultimo elemento della sottosequenza sarà quel carattere, e la restante sottosequenza va trovata nei prefissi di $X$ e $Y$
2. Se $x_m \neq y_n$:
	2.1 Se $w_k \neq x_m$, allora $W \in LCS(X^{m-1}, Y)$
	2.2 Se $w_k \neq y_n$, allora $W \in LCS(X, Y^{n-1})$

**dimostrazione per assurdo del punto 1**
Partendo dall'ipotesi $x_m=y_n$, assumiamo per assurdo che $w_k \neq x_m$ (e di conseguenza $w_k \neq y_n$) allora potrei costruire una sottosequenza $W_{x_m}$ (aggiungendo il carattere $x_m$) che risulterebbe essere comune tra $X$ e $Y$ e allora la lunghezza delle nuova sottosequenza sarebbe $k+1$, ciò è assurdo in quanto la lunghezza di delle sottosequenze più lunghe è $k$.

**dimostrazione per assurdo del punto 2.1** (analogo per il punto 2.2)

Se $x_m \neq y_n$ e $w_k \neq x_m$ vorremmo dimostrare che $W \in LCS(X^{m-1}, Y)$.

Se per assurdo ci fosse una sottosequenza $W'$ comune a $X^{m-1}$ e $Y$ più lunga di $W$ significherebbe che $W'$ sarebbe sottosequenza di $X$ e $Y$, ma questo contraddice l'ipotesi non rendendo più vero $W \in LCS(X, Y)$ in quanto ce ne sarebbe una più lunga.


## Passo 2 - Soluzione ricorsiva per il valore della soluzione ottima

Dati $X = x_1...x_m$ e $Y = y_1...y_n$
indichiamo con `c[i, j]` la lunghezza delle sottosequenze appartenenti a $LCS(X^i, Y^j)$, con $0\leq i \leq m$ e $0 \leq j \leq n$

basandoci sui passi del teorema precedente:

$$c[i, j] = \begin{cases}
0 & \text{se } i = 0 \lor j = 0 \\
1 + c[i-1, j-1]  & \text{se } i, j >0 \land x_i = y_j \\
\max\left(c[i-1, j], c[i, j-1]\right)  & \text{se } i, j >0 \land x_i \neq y_j \\
\end{cases}$$


Ad esempio

$X = ABACA$
$Y = ACDA$

Si parte da $c[5, 4]$ in cui abbiamo $A=A$ Quindi
$c[5,4] = c[4,3] + 1$
poi si passa a $c[4,3]$ in cui abbiamo $C \neq D$, quindi:
$c[4,3] = \max(c[3,3], c[4,2])$
...

## Passo 3 - Costruzione algoritmo top-down oppure bottom-up

Partiamo da un algoritmo **bottom-up**:

Utilizziamo due strutture ausiliarie (la sintassi `c[i, j]` sarebbe equivalente a `c[i][j]` in codice):
- matrice `c` grande $(m+1) \times (n+1)$, il +1 è dato dal fatto che contiamo la stringa vuota. 
	In cui `c[i, j]` memorizza la lunghezza delle sottosequenze appartenenti a $LCS(X^i, Y^j)$
- matrice `b` grande $m \times n$. In cui `b[i, j]` contiene delle informazioni utili per recuperare la soluzione (cioè la sottosequenza massima effettiva), in particolare:
	- `b[i, j]` $=\,\nwarrow$ se $x_i = y_j\implies LCS(X^i, Y^j)$ si riduce al sottoproblema $LCS(X^{i-1}, Y^{j-1})$ 
	- `b[i, j]` $=\,\uparrow$ se $x_i \neq y_j\implies LCS(X^i, Y^j)$ si riduce al sottoproblema $LCS(X^{i-1}, Y^{j})$ 
	- `b[i, j]` $=\,\leftarrow$ se $x_i \neq y_j\implies LCS(X^i, Y^j)$ si riduce al sottoproblema $LCS(X^{i}, Y^{j-1})$ 

	Visivamente le frecce all'interno della matrice indicano quale sarà la prossima cella da visitare

```c++
LCS(X, Y) {
	m = X.length
	n = Y.length
	for (i = 0 to m) {
		c[i, 0] = 0		//prima colonna della matrice 'c' inizializzata a 0
	}
	for (j = 0 to n) {
		c[0, j] = 0		//prima riga della matrice 'c' inizializzata a 0
	}
	for (i = 1 to m) {
		for (j = 1 to n) {
			if (X[i] == Y[j]) {
				c[i, j] = c[i-1, j-1] + 1
				b[i, j] = ↖
			}
			else {
				if (c[i-1, j] >= c[i, j-1]) {
					c[i, j] = c[i-1, j]
					b[i, j] = ↑
				}
				else {
					c[i, j] = c[i, j-1]
					b[i, j] = ←
				}
			}
		}
	}
	return b, c
}
```

![enter image description here](https://i.ibb.co/Wk6hP9q/image.png)


**Complessità**:
Il tempo di esecuzione è dato dai due cicli annidati:

$$T(n) = \Theta(m \cdot n)$$



## Passo 4 - Costruzione soluzione ottima

Facciamo uso della procedura `LCS` per ottenere la soluzione (la sottosequenza) ottima:

```c++
printLCS(X, Y) {
	b, c = LCS(X, Y)
	printLCSaux(X, b, X.length, Y.length)		//dato che consideriamo i caratteri in comune tra X e Y basta passare solo X
}

printLCSaux(X, b, i, j) {
	if (i > 0 && j > 0) {
		if (b[i, j] == ↖) {
			printLCSaux(X, b, i-1, j-1)
			print(X[i])
		}
		else {
			if (b[i, j] == ↑) {
				printLCSaux(X, b, i-1, j)
			}
			else {
				printLCSaux(X, b, i, j-1)
			}
		}
	}
}
```

**Complessità**:
Il tempo di esecuzione di `printLCSaux` è $O(i + j)$ perché ad ogni chiamata decremento **almeno** uno tra i e j.

Il tempo di esecuzione della `printLCS` è:

$$T(n) = \Theta(m \cdot n) + O(m + n) = \Theta(m \cdot n)$$


## Ottimizzazione

Possiamo ottimizzare l'uso della memoria:
dato che i possibili valori da cui dipende $c[i, j]$ sono solamente 3:
- $c[i-1, j-1]$
- $c[i-1, j]$
- $c[i, j-1]$

possiamo evitare di utilizzare la matrice $b$ e basarci sui 3 valori da cui dipende $c[i, j]$ per trovare la prossima cella:

```c++
printLCSaux(X, c, i, j) {
	if (i > 0 && j > 0) {
		if (c[i, j] == c[i-1, j) {
			printLCSaux(X, c, i-1, j)
		}
		else {
			if (c[i, j] == c[i, j-1]) {
				printLCSaux(X, c, i, j-1)
			}
			else {
				printLCSaux(X, c, i-1, j-1)
				print(X[i])
			}
		}
	}
}
```

L'ordine dei confronti è importante (prima si controlla in alto e a sinistra poi in diagonale)


## Soluzione top-down

```c++
tfLCS(X, Y) {
	m = x.length
	n = Y.length
	c[0...m, 0...n] = -1		//inizializzazione della matrice a -1 assumiamo complessità: Θ(m*n)
	return tdLCSaux(X, Y, c, m, n)
}

tdLCSaux(X, Y, c, i, j) {
	if (c[i, j] == -1) {
		if (i == 0 || j == 0) {
			c[i, j] = 0
		}
		else {
			if (X[i] == Y[j]) {
				c[i, j] = tdLSAaux(X, Y, c, i-1, j-1) + 1
			}
			else {
				c[i, j] = max(tdLCSaux(X, Y, c, i-1, j), tdLCSaux(X, Y, c, i, j-1))
			}
		}
	}
	return c[i, j]
}
```

