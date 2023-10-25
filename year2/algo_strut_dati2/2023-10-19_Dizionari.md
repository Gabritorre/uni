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
