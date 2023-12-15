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
