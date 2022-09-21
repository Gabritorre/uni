# Insiemistica

## Simbologia

$\in$ **appartiene**

$\notin$ **non appartiene**

$\subset$ **contenuto**

$\subseteq$ **contenuto e uguale**

$\supset$ **contiene**

$\supseteq$ **contiene uguale**

$\land$ **e / and logico**

$\lor$ **o / oppure / or logico**

$\forall$ **per ogni**

$\times$ **prodotto cartesiano**

$\cap$ **intersezione**

$\cup$ **unione**

$\setminus$ **differenza**

 $A^C$ **complementare di un insieme**
 
$\exists$ **esiste**

$\nexists$ **non esiste**

$|$ oppure $:$ **tale che / con la proprietà che**

$\iff$ **se e solo se / condizione necessaria e sufficiente**

$\implies$ **allora / quindi / implica**

$\emptyset$ **insieme vuoto**

$\mathbb{N}$ **numeri naturali**

$\mathbb{Z}$ **numeri relativi o interi**

$\mathbb{Q}$ **numeri frazionari o razionali**

$\mathbb{I}$ **numeri irrazionali**

$\mathbb{R}$ **numeri reali**


## Insieme
Un **insieme** è una collezione di **elementi**, la quantità di elementi può essere finita (insieme finito) oppure infinita (insieme infinito), può essere poi rappresentato l'insieme vuoto: $\{\emptyset\}$.

Come convenzione:
Gli insiemi vengono indicati con lettere maiuscole, es. A, B, X.
Gli elementi vengono indicati con lettere minuscole, es. a, b, a<sub>1</sub>, a<sub>2</sub>.

A = {a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>}

Rappresentazione dell'insieme A con 3 elementi al suo interno

<hr>

a<sub>1</sub> $\in A$ 

l'elemento a<sub>1</sub> appartiene all'insieme A

<hr>

a<sub>4</sub> $\notin A$

l'elemento<sub>1</sub> non appartiene all'insieme A

<hr>

### $A = B$ se $A \subseteq B \land B \subseteq A$
![](https://i.ibb.co/r5RYcXR/insiemi-impropri.png)

Due insiemi sono uguali se e solo se hanno gli stessi elementi (si dice che A è sottoinsieme improprio di B e vice versa).

Si può riscrivere:
$A = B \iff [\forall x \in A \implies x \in B] \land [\forall x \in B \implies x \in A]$

(l'insieme A è uguale all'insieme B se e solo se per ogni x appartenente all'insieme A allora x appartiene anche all'insieme B e per ogni x appartenente all'insieme B allora x appartiene anche all'insieme A)

<hr>

### $A \subseteq B$
![](https://i.ibb.co/qjp74YR/insiemi-contenuti.png)

L'insieme A è contenuto nell'insieme B se gli elementi di A sono compresi in B (chiamata **inclusione**).

Quel simbolo comprende anche la possibilità che i due insiemi siano uguali.
si riscrive in:

$A \subseteq B \iff \forall x \in A \implies x \in B$

<hr>

### $A \subset B$
![](https://i.ibb.co/qYPxKsp/insiemi-contenuti2.png)

l'insieme A è parte di / è contenuto in B ma è presente almeno un elemento in B che non è presente in A (chiamata **inclusione stretta o propria**).

si riscrive in 

$A \subseteq B \iff \forall x \in A \implies x \in B$

<hr>

- Generalmente si utilizza $\subseteq$ perché comprende entrambi i casi (sia che gli insiemi siano diversi sia che siano uguali).
- $\in e \notin$ si utilizzano tra un elemento ed un insieme, mentre $\subset , \subseteq , \supset , \supseteq$ si utilizzano tra insiemi.
N.B. scrivere {a, b, c} è paragonabile ad un insieme quindi si utilizzano i simboli per gli insiemi.
- Le scritture $A \subseteq B$ e $B \supseteq A$ rappresentano la stessa cosa (anche mettendo $\subset$ e $\supset$).

## Operazioni tra insiemi

### Unione

![](https://i.ibb.co/LnTsd9w/unione.png)

L'unione di due insiemi è formato dagli elementi del primo insieme, dagli elementi del secondo insieme e gli elementi in comune.

Si rappresenta con: $A \cup B$

Se $A,B \subseteq E$

$E$ = insieme universo (insieme che contiene tutti gli altri insiemi presenti)

$A \cup B = \{ x \in E | (x \in A) \lor (x \in B)\}$

L'unione è data da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x appartenga o all'insieme A o all'insieme B.

### Intersezione

![](https://i.ibb.co/rQMtp0b/insertion.png)

L'intersezione di due insiemi è formato dagli elementi comuni tra i due insiemi
Si rappresenta con: $A \cap B$

Se $A,B \subseteq E$

$E$ = insieme universo

$A \cap B = \{ x \in E | (x \in A) \land (x \in B)\}$

L'intersezione è data da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x appartenga sia all'insieme A che all'insieme B.
- Se l'intersezione è vuota si dice che i due insiemi sono **disgiunti**

### Complementare

![](https://i.ibb.co/1b2mDyF/complementare.png)

Il complementare di un insieme è formato dagli elementi che non sono contenuti in quel insieme.

Si rappresenta con: $A^c$

Se $A \subseteq E$

$E$ = insieme universo

$A^c = \{ x \in E | x \notin A\}$

Il complementare è dato da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x non appartenga sia all'insieme A.

### Differenza
![](https://i.ibb.co/SdqNndw/differenza.png)

La differenza tra il primo insieme e il secondo è formato dagli elementi che sono contenuti nel primo insieme ma non sono presenti nel secondo.

Si rappresenta con: $A \setminus B$

Se $A,B \subseteq E$

$E$ = insieme universo

$A \setminus B = \{ x \in E | (x \in A) \land (x \notin B)\}$

La differenza è data da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x appartenga all'insieme A ma non all'insieme B.

### Prodotto cartesiano

![](https://i.ibb.co/HtH225X/cartesiano.png)

Il prodotto cartesiano è formato dalle coppie in cui il primo elemento appartiene al primo insieme e il secondo elemento appartiene al secondo insieme.

Si rappresenta con: $A \times B$

$A \times B = \{(x,y) | (x \in A) \land (y \in B)\}$

Il prodotto cartesiano è dato da tutte le coppie formate da x e y che soddisfano la seguente proprietà: cioè che la x appartenga all'insieme A e che la y appartenga all'insieme B.

- Il prodotto cartesiano si rappresenta graficamente con il piano cartesiano.
- $A \times B \neq B \times A$

## Proprietà delle operazioni tra insiemi

- $A \cup A = A$
- $A \cap A = A$
- Unione e intersezione sono commutative: 

	$A \cup B = B \cup A$
	$A \cap B = B \cap A$
- $A \cup \emptyset = A$ $A \cap \emptyset = \emptyset$

### Proprietà distributiva

$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

## Dimostrazioni

Dimostrazione della seguente scrittura:

$A \cup B = A \iff B \subseteq A$
![](https://i.ibb.co/qJR6KfM/unione-contenuta.png)
Quando è presente il simbolo "se e solo se" ($\iff$) bisogna dimostrare l'affermazione in entrambe i versi:
1. $A \cup B = A \implies B \subseteq A$
2. $B \subseteq A \implies B \cup A = A$

<hr>

1. Sappiamo che $A \cup B = A$ è verificata.
2. 
Prendiamo un $b \in B$ e supponiamo per assurdo che $b \notin A$. Questo non è possibile perché $b$ deve appartenere all'unione di $A$ e $B$ che sappiano essere uguale ad $A$.

Quindi $\forall b \in B \implies b \in A$, cioè ogni elemento di B deve essere anche elemento di A perciò $B \subseteq A$

3. Sappiamo che $B \subseteq A$ è verificata.
4. 
$A \cup B = A$ significa che $A \cup B \subseteq A$ e $A \subseteq A \cup B$ cioè l'unione di $A$ e $B$ è contenuta in $A$ e $A$ contiene l'unione di $A$ e $B$.

Prendiamo un $x$ appartenente all'unione di $A$ e $B$ quindi $x \in A \lor x \in B$ ma dato che $B$ è contenuto in A allora $x \in A$.

Dato che tutti gli elementi di $B$ sono contenuti in $A$ allora $A \cup B = A$.

## Formule di Morgan
- $(A \cup B)^C = A^C \cap B^C$
- $(A \cap B)^C = A^C \cup B^C$


## Insiemi numerici
Gli insiemi numerici sono particolari tipi di insiemi formati da infiniti elementi che hanno delle caratteristiche comuni. Gli insiemi numerici sono:

$\mathbb{N}$: Insieme dei **numeri naturali**, numeri interi positivi partendo da 0.

$N = \{0,1,2,3,...\}$

<hr>

$\mathbb{Z}$: Insieme dei **numeri Interi o relativi**, numeri interi con segno.

$Z = \{...-3,-2,-1,0,1,2,3,...\}$

<hr>

$\mathbb{Q}$: Insieme dei **numeri razionali**, numeri che possono essere rappresentati come una frazione.

$Q = \{\frac{p}{q}:p \in \mathbb{Z} \land q \in \mathbb{N} \setminus \{0\}\}$

<hr>

$\mathbb{I}$: Insieme dei **numeri irrazionali**, numeri con parte decimale infinita non periodica.

$I = \{\sqrt{2},\sqrt{3}, \pi, e,...\}$

<hr>

$\mathbb{R}$: Insieme dei **numeri reali**, insieme composto dai numeri appartenenti agli insiemi $\mathbb{Q}$ e $\mathbb{I}$ .

Questi insiemi sono relazionati tra loro:

$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$

$\mathbb{I} \subset \mathbb{R}$

![](https://i.ibb.co/28sGGkV/insiemi-numerici.png)


