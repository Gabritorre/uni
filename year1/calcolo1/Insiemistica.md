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

 $A^{c}$ **complementare di un insieme**
 
$\exists$ **esiste**

$\nexists$ **non esiste**

$|$ oppure $:$ **tale che / con la proprietà che**

$\iff$ **se e solo se / condizione necessaria e sufficiente**

$\implies$ **allora / quindi / implica**

$\emptyset$ **insieme vuoto**

$\N$ **numeri naturali**

$\Z$ **numeri relativi o interi**

$\mathbb{Q}$ **numeri frazionari o razionali**

$\R$ **numeri reali o irrazionali**

## Insieme
Un **insieme** è una collezione di **elementi**, la quantità di elementi può essere finita (insieme finito) oppure infinita (insieme infinito).
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

![](https://i.ibb.co/r5RYcXR/insiemi-impropri.png)

$A = B$ se $A \subseteq B \land B \subseteq A$
Due insiemi sono uguali se e solo se hanno gli stessi elementi (si dice che A è sottoinsieme improprio di B e vice versa).
Si può riscrivere:
$A = B \iff [\forall x \in A \implies x \in B] \land [\forall x \in B \implies x \in A]$
(l'insieme A è uguale all'insieme B se e solo se per ogni x appartenente all'insieme A allora x appartiene anche all'insieme B e per ogni x appartenente all'insieme B allora x appartiene anche all'insieme A)

<hr>

![](https://i.ibb.co/qjp74YR/insiemi-contenuti.png)

$A \subseteq B$
L'insieme A è contenuto nell'insieme B se gli elementi di A sono compresi in B (chiamata **inclusione**).
Quel simbolo comprende anche la possibilità che i due insiemi siano uguali.
si riscrive in:
$A \subseteq B \iff \forall x \in A \implies x \in B$

<hr>

![](https://i.ibb.co/qYPxKsp/insiemi-contenuti2.png)

$A \subset B$
l'insieme A è parte di / è contenuto in B ma è presente almeno un elemento in B che non è presente in A (chiamata **inclusione stretta**).
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
