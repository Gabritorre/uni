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
		max_h1 = heap_maximum(h1);	//O(1)
		max_h2 = heap_maximum(h2);	//O(1)
		if (max_h1 == max_h2) {
			heap_extract_max(h1);	//O(log n1)
			heap_extract_max(h2);	//O(log n2)
		}
		else if (max_h1 > max_h2) {
			heap_insert(ris, max_h1);	// *O(1)
			heap_extract_max(h1);	// O(log n1)
		}
		else if (max_h1 < max_h2) {
			heap_extract_max(h2);	//O(log n2)
		}
	}
	// nel caso h2 sia finito, inserisco nel risultato tutti i valori rimanenti di h1
	while (h1.heap_size >= 1) {
		max_h1 = heap_extract_max(h1);	// O(log n)
		heap_insert(ris, max_h1);	//O(1)
	}
}
```

Nel caso peggiore l'algoritmo deve scorrere interamente entrambi gli heap.
Dichiarando come `n1` il numero di elementi dell'heap `h1`, e come `n2` il numero di elementi dell'heap `h2`

$$T(n) = O(n1\cdot \log(n1) + n2 \cdot \log (n2))$$

la complessità è quindi data da `n1` chiamate a `heap_extract_max` e da `n2` chiamate a `heap_extract_max`.


## Vettore di intervalli

Dato un vettore di intervalli interi, creare un nuovo vettore di intervalli contenente gli stessi elementi ma gli intervalli devono essere disgiunti.

Vediamo un esempio grafico dell'array di partenza

![enter image description here](https://i.ibb.co/db1DLgC/image.png)

L'array risultante dovrebbe essere:

![enter image description here](https://i.ibb.co/R4Kp9Qt/image.png)
 
 Vediamo i passaggi partendo dal vettore originale
 `A=[<7,11>, <-1,3>, <5,10>, <9,12>]`
 1. ordinare il vettore
	 `A=[<-1,3>, <5,10>, <7,11>, <9,12>]`
2. Scorro il vettore con un ciclo while
	- metto la coppia attuale nel vettore risultato
	- faccio un altro ciclo while per determinare quale è il limite destro dell'intervallo più grande che posso considerare della coppia appena inserita
	- il limite destro viene trovato quando siamo arrivati alla fine del vettore oppure quando non c'è una sovrapposizione (una sovrapposizione accade quando il limite destro è maggiore del limite sinistro dell'elemento successivo)
 
```c++
 vector<pair<int,int>> copertura(vector<pair<int,int>> arr) {
	size_t i;	//scorre gli elementi del vettore
	int end_temp;	// limite superiore dell'attuale intervallo
	vector<pair<int,int>> ris;
	if (arr.size() == 0) {
		return ris;
	}
	
	ordina(arr);	// ipotizziamo di fare un merge sort, θ(n*log(n))
	
	i = 0;
	while(i < arr.size()) {
		ris.push_back(arr[i]);	//assumiamo θ(1)
		end_temp = arr[i].second;
		i++;
		while(i < arr.size() && end_temp >= arr[i].first) {
			if (arr[i].second > end_temp) {
				end_temp = arr[i].second;
			}
			i++;
		}
		ris[ris.size()-1].second = end_temp;
	}
	return ris;
}
```

Complessità: Abbiamo la complessità dell'orginamento che è $\Theta(n\log n)$ e poi abbiamo 2 cicli while innestati. Nonostante siano innestati essi lavorano sullo stesso indice continuando ad incrementarlo, ogni elemento del vettore viene quindi visitato solo una volta, la complessità del corpo del ciclo while esterno è quindi $\Theta(n)$

$$T(n) = \Theta(n\log n) + \Theta(n) = \Theta(n\log n)$$


## Somma k

Dato un intero `k` e un vettore `v` creare un algoritmo efficiente determinare se esiste una coppia di elementi `val1, val2`  con indice diverso la cui somma è uguale a `k`

Abbiamo due approcci possibili per realizzare un algoritmo efficiente:
1. chiamare la binary search per ogni elemento del vettore: $O(n\log n)$
2. utilizzare due indici per confrontare in modo intelligente gli elementi: $O(n\log n)$ (ma risulta essere comunque migliore rispetto al primo metodo)

Analizziamo meglio il secondo metodo:
1. andiamo ad ordinare il vettore
2. creiamo due indici `left, right` inizializzati rispettivamente al primo elemento e all'ultimo. Inizialmente `left` sarà l'indice dell'elemento più piccolo, mentre `right` sarà l'indice dell'elemento più grande
3. in un ciclo compariamo gli elementi negli indici `left` e `right`
	- se la somma è uguale a `k` abbiamo finito
	- se la somma è minore di `k`, allora la somma è troppo piccola, dobbiamo cercare di aumentarla il minimo possibile andando all'elemento `left` successivo
	- se la somma è maggiore di `k`, allora la somma è troppo grande, dobbiamo cercare di diminuirla il minimo possibile andando all'elemento `right` precedente

consideriamo ad esempio l'array già ordinato
`v = [-7, -3, 0, 5, 10, 14, 21]`
con `k = 11`
la successione di confronti è la seguente:
- confronto il `-7` con il `21`: `-7 + 21 = 14 > 11` Dato che la somma è maggiore di `k` posso escludere che il `21` possa far parte della coppia.
	Questo logicamente perchè se sommando l'elemento minimo (`-7`) con il 21 mi da un risultato maggiore di quello che cerco, non ha senso fare le somme tra elementi maggiori di `-7` con il `21` perché sicuramente mi daranno dei valori ancora maggiori di quello che cerco
- confronto il `-7` con il `14`: `-7 + 14 = 7 < 11` Dato che la somma è minore di `k` posso escludere che il `-7` possa far parte della coppia.
	similmente a prima perchè se sommando l'elemento massimo (`14`) con il `-7` mi da un risultato minore di quello che cerco, non ha senso fare le somme tra elementi minori di `14` con il `-7` perché sicuramente mi daranno dei valori ancora minori di quello che cerco
- confronto il `-3` con il `14`: `-3 + 14 = 11` ho trovato la coppia che somma `k`

 
```c++
bool sommaK(vector<int>& v, int k, int k, int& va1, int& val2) {
	ordina(v);	//assumiamo di fare un merge sort, θ(n log(n))
	bool trovati = false;
	int left = 0;
	int right = v.size()-1;
	while(left < right && trovati == false) {
		if(v[left] + v[right] == k) {
			trovati = true;
			val1 = v[left];
			val2 = v[right];
		}
		else if (v[left] + v[right] < k) {
			left++;
		}
		else if (v[left] + v[right] > k) {
			right--;
		}
	}
	return trovati;
}
```

complessità: l'ordinamento ha complessità $\Theta(n\log n)$, mentre il ciclo while viene eseguito al massimo $n$ volte ed è composto da sole istruzioni di complessità costante, quindi ha complessità $O(n)$

$$T(n) = \Theta(n \log n) + O(n) = \Theta(n\log n)$$


## 

Sia A un array di lunghezza `n − k` con `k >= 2` e `k <= n`, privo di ripetizioni e contenente interi nell’intervallo `[n*n + 1, n*n + n]`. Si consideri il problema di determinare i `k` numeri interi appartenenti all’intervallo `[n*n + 1, n*n + n]` che non compaiono in `A`.
Si scriva una procedura efficiente che, dati `A, n` e `k`, risolva il problema proposto stampando gli interi che non compaiono in A. Calcolarne la complessità.

Per esempio:
`n = 5`
`k = 3`
Avremo un array di dimensione `5-3 = 2`
Questi 2 elementi possono assumere valori appartenenti al seguente range $[5\cdot5+1, 5\cdot5+5] \implies [26, 30]$.
Ipotizziamo che l'array assuma i seguenti valori: `A[27, 30]`. Vogliamo stampare gli altri elementi all'interno range che non sono presenti nell'array, in questo caso stamperemmo: `26, 28, 29`

**Risoluzione**

Utilizziamo un vettore ausiliario di booleani grande `n` che rappresenta tutti i numeri del range.
Scorriamo il vettore di input e per ogni elemento andiamo a impostare il relativo elemento nel vettore di booleani come `true` per indicare che tale elemento del range è presente nel vettore di input.
Poi stampiamo tutti gli elementi del range che sono false nel vettore di booleani


```c++
void determinaK(const vector<int>& arr, int n, int k) {
	vector<bool> occ(n, false);	//vettore di n elementi inizializzati a false
	int min = n*n+1;
	for(size_t j = 0; j < arr.size(); j++) {
		occ[arr[j]-min] = true;
	}
	size_t i = 0;
	while(k > 0) {
		if(occ[i] == false) {
			cout<<min + i;
			k--;
		}
		i++;
	}
}
```

**complessità**: abbiamo un ciclo for che viene eseguito $n-k$ volte e un ciclo while che viene eseguito k volte. Abbiamo quindi una complessità lineare, in quanto vengono fatte $n-k+k = n$ iterazioni.

$$T(n) = \Theta(n)$$
