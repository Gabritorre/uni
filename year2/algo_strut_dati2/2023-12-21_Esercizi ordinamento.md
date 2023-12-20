# Esercizi su ordinamento

## Rimozione da max heap

Implementare la rimozione di un nodo da un max heap.

Per realizzare la rimozione, quello che facciamo è scambiare il nodo da eliminare con l'ultimo nodo dell'array.
Decrementare la heap_size (cancellando così l'ultimo nodo).
riposizionare il nodo scambiato per metterlo nella posizione tale da non violare la proprietà del max heap.

Quando andiamo a riposizionare il nodo ci possiamo trovare in due casi:
- caso 1: il nodo va messo in una posizione più alta nell'albero. Ciò si verifica quando il nodo da eliminare era più piccolo del nodo in ultima posizione (nell'immagine sotto infatti $0 < 7$)
- caso 2: il nodo va messo in una posizione più bassa dell'albero. Ciò si verifica quando il nodo da eliminare era più grande del nodo in ultima posizione (nell'immagine sotto infatti $3 > 0$)

![enter image description here](https://i.ibb.co/vdbP5nc/image.png)



```c++
// precondizione: i deve appartenere all'heap
// postcondizione: i non appartiene più all'heap
heap_delete(Heap A, Node i) {
	if(A.heap_size == 1) {	//se c'è un solo elemento lo elimino e basta
		A.heap_size = 0;
	}
	else {
		value_to_remove = A[i];
		A[i] = A[A.heap_size];	//metto l'ultimo elemento in posizione i
		A.heap_size--;
	
		if (value_to_remove > A[i]) {	//caso 2
			max_heapify(A, i);
		}
		else {	//caso 1
			heap_increase_key(A, i, A[i]);
		}
	}
}
```

Analisi della complessità:
entrambi i secondi `if-else` eseguono un metodo che ha complessità $O(\log n)$ quindi la complessità è $O(\log n)$


## Differenza tra max heap


Dati due max heap `h1, h2` effettuare la differenza insiemistica `h1 - h2`. Quindi bisogna tenere tutti i nodi di `h1` tranne quelli che sono presenti anche in `h2`


![enter image description here](https://i.ibb.co/0hRR5z7/image.png)


Quello che andremo a fare è confrontare sempre le radici e:
- se la radice di `h1` è maggiore della radice di `h2`, allora la radice di `h1` farà parte dell'heap risultato e trovo la nuova radice di `h1` tramite `heap_extract_max`
- se la radice di `h1` è uguale alla radice di `h2`, non mi interessa quel valore e quindi trovo la nuova radice di entrambi gli heap tramite `heap_extract_max`
- se la radice di `h1` è minore della radice di `h2`, non posso determinare subito se la radice di `h1` è un valore che posso mantenere e quindi lo comparo con la successiva radice di `h2` tramite un `heap_extract_max`


```c++
differenza(Heap h1, Heap h2, Heap ris) {
	int max_h1, max_h2;
	while(h1.heap_size >= 1 && h2.heap_size >= 1) {
		max_h1 = heap_maximum(h1);
		max_h2 = heap_maximum(h2);
		if (max_h1 == max_h2) {
			heap_extract_max(h1);
			heap_extract_max(h2);
		}
		else if (max_h1 > max_h2) {
			heap_insert(ris, max_h1);
			heap_extract_max(h1);
		}
		else if (max_h1 < max_h2) {
			heap_extract_max(h2);
		}
	}
	// nel caso h2 sia finito, inserisco nel risultato tutti i valori rimanenti di h1
	while (h1.heap_size >= 1) {
		max_h1 = heap_extract_max(h1);
		heap_insert(ris, max_h1);
	}
}
```
