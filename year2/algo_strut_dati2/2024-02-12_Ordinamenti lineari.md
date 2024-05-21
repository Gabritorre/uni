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
	for j = 1 down to k
		C[j] = C[j] + C[j-1]

	//per ordinamento decrescente
	for j = k-2 to 0
		C[j] = C[j] + C[j+1]

	for j = n down to 1
		B[C[cifra(A[j], k, i)]] = A[j]
		C[cifra(A[j], k, i)]--

	A = B

//ritorna l'i-esima cifra del numero x in base k
cifra(int x, int k, int i)
	return (x / k^(i-1))) % k
```
