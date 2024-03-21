# Grado nei grafi

Vediamo il concetto di grado per grafo, sia per grafi orientati che non.
Vedremo alcuni algoritmi e proprietà legate al grado.

## Grado per grafi non orientati

Per i grafi non orientati il **grado è il numero associato ad un nodo** che indica il numero di archi in cui tale nodo è coinvolto.
Dato un qualsiasi nodo $u$ il grado del nodo $u$ si indica come $\deg(u)$

$$0 \leq \deg(u) \leq n-1$$

![enter image description here](https://i.ibb.co/BKXtnLc/image.png)


l'**intorno** di un nodo $u$ è il numero di nodi ad esso adiacenti e formalmente è definito come

$$N(u) = \{v \in V | (u, v) \in E\}$$

Possiamo quindi dire che il **grado di un nodo è pari alla cardinalità del suo intorno**


**Lemma** non è possibile costruire un grafo con tutti i gradi distinti, cioè esistono almeno due nodi che hanno lo stesso grado

**Dimostrazione**: Supponiamo per assurdo che il grafo $G=(V, E)$ abbia nodi con tutti i gradi distinti, 
cioè abbiamo:
un nodo di grado 0
un nodo di grado 1
un nodo di grado 2
...
un nodo di grado n-1

é assurdo perché stiamo dicendo che esiste contemporaneamente un nodo che non è collegato con nessuno e un nodo che è collegato con tutti


### Lemma della stretta di mano
Sia $G=(V, E)$ un grafo non orientato, allora la somma dei gradi del grafo è un numero pari, in particolare è uguale al doppio del numero di archi.

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

il grado di un numero pari lo posso scrivere come $2 \cdot h(u)$, mentre il grado di un numero dispari lo posso scrivere come $2 \cdot h(u) + 1$
Dove $h(u)$ è un numero che dipende dal nodo

$$= \sum_{u \in P}2 \cdot h(u)+ \sum_{u \in D}(2 \cdot h(u) + 1)$$

$$= 2\sum_{u \in P}h(u) + 2\sum_{u \in D}h(u) + |D|$$

$$= 2\left(\sum_{u \in P}h(u) + \sum_{u \in D}h(u)\right) + |D|$$

$$= 2\sum_{u \in V}h(u) + |D|$$

isoliamo $|D|$

$|D| = 2m - 2\sum_{u \in V} h(u)$
$|D| = 2\left(m - \sum_{u \in V} h(u)\right)$

da questo notiamo che il numero di nodi con grado dispari sarà sicuramente un numero pari.

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

Nelle matrici di adiacenza (il metodo che useremo di più) per calcolare il grado di un nodo $i$ basterà sommare i valori corrispondenti alla sua riga (o colonna, dato che la matrice è simmetrica)

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
