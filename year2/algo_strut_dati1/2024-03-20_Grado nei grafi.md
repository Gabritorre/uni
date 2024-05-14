# Grado nei grafi

Vediamo il concetto di grado per grafo, sia per grafi orientati che non.
Vedremo alcuni algoritmi e proprietà legate al grado.

## Grado per grafi non orientati

Per i grafi non orientati il **grado è il numero associato ad un nodo** che indica il numero di archi in cui tale nodo è coinvolto.
Dato un qualsiasi nodo $u$ il grado del nodo $u$ si indica come $\deg(u)$

$$0 \leq \deg(u) \leq n-1$$

- i nodi con grado $0$ sono chiamati **nodi isolati**
- i nodi con grado $1$ sono chiamati **nodi terminali**

![enter image description here](https://i.ibb.co/BKXtnLc/image.png)

L'**intorno** di un nodo $u$ è l'insieme di nodi ad esso adiacenti e formalmente è definito come

$$N(u) = \{v \in V | (u, v) \in E\}$$

Possiamo quindi dire che il **grado di un nodo è pari alla cardinalità del suo intorno**

**Lemma** non è possibile costruire un grafo con tutti i gradi distinti, cioè esistono almeno due nodi che hanno lo stesso grado

**Dimostrazione**: Supponiamo per assurdo che il grafo $G=(V, E)$ abbia nodi con tutti i gradi distinti...
abbiamo quindi:
un nodo di grado $0$
un nodo di grado $1$
un nodo di grado $2$
...
un nodo di grado $n-1$

é assurdo perché stiamo dicendo che esiste contemporaneamente un nodo che non è collegato con nessuno (cioè con grado $0$) e un nodo che è collegato con tutti (cioè con grado $n-1$)

### Lemma della stretta di mano

Sia $G=(V, E)$ un **grafo non orientato**, allora la somma dei gradi del grafo è un numero pari, in particolare è uguale al doppio del numero di archi.

$$\sum_{u\in V} \deg(u) = 2m$$

con $m=|E|$

 **Corollario del teorema della stretta di mano**:
 In un grafo non orientato $G=(V, E)$, il numero di vertici di grado dispari è sempre pari.

**Dimostrazione**: Dividiamo il grafo in due partizioni, una con i nodi di grado dispari e una con i nodi di grado pari:

1. $P = \{u \in V | \deg(u) \text{ è pari}\}$
2. $D = \{u \in V | \deg(u) \text{ è dispari}\}$

Dal lemma della stretta di mano possiamo scrivere che:

$$2m = \sum_{u \in V}\deg(u)$$

Dato che $P$ e $D$ sono una partizione di $V$:

$$= \sum_{u \in P}\deg(u) + \sum_{u \in D}\deg(u)$$

i gradi pari li posso scrivere come $2 \cdot h(u)$, mentre i gradi dispari li posso scrivere come $2 \cdot h(u) + 1$
Dove $h(u)$ è un numero che dipende dal nodo

$$= \sum_{u \in P}2 \cdot h(u)+ \sum_{u \in D}(2 \cdot h(u) + 1)$$

$$= 2\sum_{u \in P}h(u) + 2\sum_{u \in D}h(u) + |D|$$

$$= 2\left(\sum_{u \in P}h(u) + \sum_{u \in D}h(u)\right) + |D|$$

$$= 2\sum_{u \in V}h(u) + |D|$$

isoliamo $|D|$:

$2m= 2\sum_{u \in V}h(u) + |D|$
$|D| = 2m - 2\sum_{u \in V} h(u)$
$|D| = 2\left(m - \sum_{u \in V} h(u)\right)$

da questo notiamo che il numero di nodi con grado dispari sarà sicuramente un numero pari in quanto viene tutto moltiplicato per 2.

## Grafi regolari

Un grafo $G=(V, E)$ si dice **k-regolare** se ogni nodo del grafo ha lo stesso grado $k$

![enter image description here](https://i.ibb.co/QcKzXN3/image.png)

Il lemma della stretta di mano ci permette di fare delle considerazioni:

1. Se $G=(V, E)$ è 2-regolare allora il numero di archi è uguale al numero di nodi
	$$2m = \sum_{u\in V}\deg(u)$$
	
	$$2m = \sum_{u\in V}2$$

	$$2m = 2n$$

	$$m = n$$

2. Se $G=(V, E)$ è 3-regolare allora il numero di nodi è pari
		$$2m = \sum_{u\in V}\deg(u)$$
	
	$$2m = \sum_{u\in V}3$$

	$$2m = 3n$$

	$$2\cdot \frac{m}{3} = n$$

3. Se $G=(V, E)$ è 4-regolare allora il numero di archi è pari
		$$2m = \sum_{u\in V}\deg(u)$$
	
	$$2m = \sum_{u\in V}4$$

	$$2m = 4n$$

	$$m = 2n$$

## Grado nelle matrici di adiacenza

Nelle matrici di adiacenza per calcolare il grado di un nodo $i$ basterà sommare i valori corrispondenti alla sua riga (o colonna, dato che la matrice è simmetrica)

Consideriamo il seguente grafo

![enter image description here](https://i.ibb.co/R4SS5Th/image.png)

e rappresentiamo la matrice di adiacenza $A$ nel seguente modo

$$A = \begin{bmatrix}
0 & 1 & 1 & 1\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
\end{bmatrix}$$

Calcoliamo il quadrato della matrice: $A \times A = A^2$ i cui elementi li scriviamo generalmente come $a_{ij}^{(2)}$

$$A^2=\begin{bmatrix}
0 & 1 & 1 & 1\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
\end{bmatrix}
\times
 \begin{bmatrix}
0 & 1 & 1 & 1\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
\end{bmatrix}
 = \begin{bmatrix}
3 & 1 & 2 & 1\\
1 & 2 & 1 & 2\\
2 & 1 & 3 & 1\\
1 & 2 & 1 & 2\\
\end{bmatrix}
$$

- I numeri sulla **diagonale rappresentano il grado del nodo** corrispondente alla riga (o alla colonna).
- Gli altri numeri indicano quanti cammini di lunghezza 2 tra i nodi corrispondenti a riga e colonna

In generale possiamo scrivere che

$$a_{ij}^{(2)} = \begin{cases}
\deg(i) & \text{se $i = j$}\\
\text{numero di cammini lunghi 2 tra $i$ e $j$} & \text{se $i \neq j$}
\end{cases}$$

**Dimostriamo la diagonale**:
Date due generiche matrici:
- $A$ di dimensioni $n \times m$
- $B$ di dimensioni $m \times k$
ricordiamo che il prodotto si può fare solo se il numero di colonne di una matrice è uguale al numero di righe dell'altra.

 Generalmente gli elementi di una matrice $C$ generata dal prodotto di due matrici $A \times B$ si possono calcolare come:
$$c_{ij} = \sum_{\ell = 1}^{n} a_{i\ell} \cdot b_{\ell j}$$

Nel nostro caso Abbiamo il prodotto di una matrice per se stessa, nella diagonale cioè quando gli indici sono uguali abbiamo:

$$a_{ii}^{(2)} = \sum_{k = 1}^n a_{ik} \cdot a_{ki}$$

dato che per la simmetria $a_{ik} = a_{ki}$

$$a_{ii}^{(2)} = \sum_{k = 1}^n (a_{ik})^2$$

dato che la matrice è binaria, i valori che può assumere $a_{ik}$ sono 1 e 0 ed entrambi elevati al quadrato rimangono uguali, quindi:

$$a_{ii}^{(2)} = \sum_{k = 1}^n a_{ik} = \deg(i)$$

**Dimostriamo fuori dalla diagonale**:

$$a_{ij}^{(2)} = \sum_{k = 1}^n a_{ik} \cdot a_{kj}$$

Dato che siamo su una matrice binaria: il prodotto $a_{ik} \cdot a_{kj}$ vale 1 solamente quando entrambi i valori sono 1, negli altri casi vale 0.

Quando entrambi valgono 1 significa che esiste un arco tra $i$ e $k$ e anche tra $k$ e $j$ e quindi c'è un cammino tra $i$ e $j$ lungo 2 archi.
Dato che stiamo facendo una sommatoria stiamo effettivamente contando quanti cammini ci sono tra $i$ e $j$


### Generalizzazione

In generale vale che per ogni $i\neq j$ la matrice risultante dal prodotto per se stessa $k$ volte, ha degli elementi che rappresentano il numero di cammini di lunghezza $k$ tra i nodi $i$ e $j$.

mentre per $i = j$ si ottengono il numero di cicli di lunghezza $k$ che partono dal nodo $i$ e tornano su se stesso

**Dimostrazione** per induzione su $k$
Scriviamo $A^k = A^{k-1}\times A$

**Caso base**: per $k = 1$ la condizione è già verificata in quanto i valori della matrice sono i cammini di lunghezza 1 tra i nodi $i$ e $j$, ma questi cammini sono esattamente gli archi.
per $k = 2$ vale la dimostrazione fatta in precedenza

**passo induttivo**: assumiamo che l'ipotesi valga per $k-1$ e verifichiamo per $k$.

$$a_{ij}^k = \sum_{\ell = 1}^{n} a_{i\ell}^{k-1} \cdot a_{\ell j}$$

per ipotesi induttiva $a_{i\ell}^{k-1}$ è il numero di cammini di lunghezza $k-1$ tra $i$ e $\ell$.
$a_{\ell j}$ vale 1 se e solo se esiste un arco tra $\ell$ e $j$, se infatti risultasse così allora $a_{ij}^k$ sarebbe il numero di cammini di lunghezza $k$ da $i$ a $j$
dunque la condizione è verificata

## Esercizio 

Date le seguenti 3 ipotesi:

1. Abbiamo $G=(V, E)$ grafo non orientato
2. Non esistono nodi isolati (di grado 0)
4. $|E| = |V|-1$

Vogliamo dimostrare che: esistono almeno 2 vertici con grado 1

$n = |V|$
$m = |E|$

per l'ipotesi 1 posso applicare il teorema della stretta di mano:

$$2m = \sum_{u \in V}\deg(u)$$

per ipotesi 3:

$$2(n-1) = \sum_{u \in V}\deg(u)$$

per ipotesi 2 so che $1 \leq \deg(u) \leq n-1$

Definisco $V_1$ come l'insieme dei vertici appartenenti a $V$ di grado 1.
$V_1 = \{u \in V | \deg(u) = 1\}$
Voglio quindi dimostrare che $|V_1| \geq 2$

Posso riscrivere la sommatoria come la somma tra i nodi di grado 1 e il grado degli altri nodi

$$2(n-1) = \sum_{u \in V_1}\deg(u) + \sum_{u \notin V_1} \deg(u)$$

la prima sommatoria ha tutti i $\deg(u) = 1$ quindi viene sommato 1 esattamente $|V_1|$ volte

$$2(n-1) = |V_1| + \sum_{u \notin V_1} \deg(u)$$

per la seconda sommatoria so di per certo che $\deg(u) \geq 2$, perché gradi 0 non ci sono per ipotesi 2 e i nodi di grado 1 li abbiamo già accorpati nella sommatoria precedente.
La cardinalità è calcolabile come $|V| - |V_1|$

$$2(n-1) \geq |V_1| + 2 \left(|V| - |V_1|\right)$$

(il 2 che moltiplica è dato dal fatto che stiamo impostando un limite inferiore con $\geq$ non stiamo cercando una quantità precisa e dato che il grado è almeno 2 allora mettiamo 2)

$$2n-2 \geq |V_1| + 2 |V| - 2|V_1|$$

$$2n-2 \geq 2 |V| - |V_1|$$

ricordiamo che $|V| = n$

$$2n-2 \geq 2n - |V_1|$$

$$-2 \geq -|V_1|$$

$$|V_1| \geq 2$$


## Grado nei grafi orientati

Se abbiamo un grafo orientato $G = (V, E)$, abbiamo due tipi di gradi per un nodo $i$:

- $\text{in-deg}(i)$: numero di archi entranti
- $\text{out-deg}(i)$: numero di archi uscenti 

Risulta che la somma di tutti gli archi entranti del grafo è uguale alla somma di tutti gli archi uscenti del grafo, inoltre questa quantità è uguale alla cardinalità di $E$, quindi

$$\sum_{i = 1}^n \text{in-deg}(i) = \sum_{i = 1}^n \text{out-deg}(i) = |E| = m$$

Nella matrice di adiacenza è possibile:
- calcolare $\text{in-deg}(i)$ sommando i valori alla colonna $i$-esima
- calcolare $\text{out-deg}(i)$ sommando i valori alla riga $i$-esima
 
