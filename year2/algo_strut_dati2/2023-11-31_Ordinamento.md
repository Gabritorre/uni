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
```

la chiamata iniziale sarà `mergesort(A, 0, A.length()-1)`

Quello che succede è ciò che è mostrato nella seguente immagine
![enter image description here](https://i.ibb.co/SvWDSBQ/image.png)

le chiamate ricorsive a `mergesort` si occupano di continuare a dividere a metà l'array fino ad avere solo elementi unici (caso base).
dopo di che viene chiamato viene chiamato `merge` fino ad raggiungere l'array completo.
la funzione merge si occupa di fondere due array ordinati in uno ordinato.

Nell'immagine la prima chiamata a `merge` avviene tra il valore `L=[3]` e `R=[9]` che sono vettori composti da un elemento e quindi sono ordinati, viene creato il vettore ordinato `[3,9]`.
Poi viene chiamato `merge` su `L=[10]` e `R=[1]` che anch'essi sono ordinati per lo stesso motivo precedente e viene creato l'array ordinato `[1,10]`

Il modo in cui viene costruito l'array ordinato partendo dai due sottoarray ordinati si nota nell'ultimo passaggio con `L = [1, 3, 8, 10]` e `R = [2, 5, 7, 8]`

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


## Quick sort

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

Questa versione del quicksort cerca di rendere non predicibile il caso in cui l'algoritmo risulti essere $O(n^2)$. Mentre prima sapevamo che l'algoritmo era quadratico nel caso in cui l'array era ordinato perchè andavamo a prendere come pivot sempre l'ultimo elemento nel sottoarray. Andando a randomizzare la scelta del pivot non possiamo più predire come dovrebbe essere l'array per rendere l'algoritmo di complessità quadratica.


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
