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
