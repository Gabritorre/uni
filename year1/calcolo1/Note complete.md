
# Insiemistica

## Simbologia

| Simbolo | significato |
|--|--|
| $\in$ | **appartiene** |
| $\notin$ |  **non appartiene** |
| $\subset$ |  **contenuto** |
| $\subseteq$ | **contenuto e uguale** |
| $\supset$ |  **contiene**  | 
| $\supseteq$ |  **contiene uguale** |
| $\land$ |  **e / and logico** |
| $\lor$  | **o / oppure / or logico** |
| $\forall$ |  **per ogni** |
| $\times$ |  **prodotto cartesiano** |
| $\cap$ |  **intersezione** |
| $\cup$ |  **unione** |
| $\setminus$ |  **differenza** |
| $A^C$ |  **complementare di un insieme** |
| $\exists$ |  **esiste** |
| $\nexists$ |  **non esiste** |
| $\vert$ oppure $:$ |  **tale che / con la proprietà che** |
| $\iff$ | **se e solo se / condizione necessaria e sufficiente** |
| $\implies$ |  **allora / quindi / implica** |
| $\emptyset$ |  **insieme vuoto** |
| $\mathbb{N}$ |  **numeri naturali** |
| $\mathbb{Z}$ |  **numeri relativi o interi** |
| $\mathbb{Q}$ |  **numeri frazionari o razionali** |
| $\mathbb{I}$ |  **numeri irrazionali** |
| $\mathbb{R}$ |  **numeri reali** |

## Insieme
Un **insieme** è una collezione di **elementi**, la quantità di elementi può essere finita (insieme finito) oppure infinita (insieme infinito), può essere poi rappresentato l'insieme vuoto: $\lbrace \emptyset \rbrace$.

Come convenzione:
Gli insiemi vengono indicati con lettere maiuscole, es. $A, B, X$ .
Gli elementi vengono indicati con lettere minuscole, es. $a, b, a_1, a_2$ .

$A = \lbrace a_1, a_2, a_3\rbrace$

Rappresentazione dell'insieme A con 3 elementi al suo interno

<hr>

$a_1 \in A$ 

l'elemento $a_1$ appartiene all'insieme $A$

<hr>

$a_4 \notin A$

l'elemento $a_4$ non appartiene all'insieme $A$

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

$A \cup B = \lbrace x \in E : (x \in A) \lor (x \in B)\rbrace$

L'unione è data da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x appartenga o all'insieme A o all'insieme B.

### Intersezione

![](https://i.ibb.co/rQMtp0b/insertion.png)

L'intersezione di due insiemi è formato dagli elementi comuni tra i due insiemi
Si rappresenta con: $A \cap B$

Se $A,B \subseteq E$

$E$ = insieme universo

$A \cap B = \lbrace x \in E : (x \in A) \land (x \in B)\rbrace$

L'intersezione è data da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x appartenga sia all'insieme A che all'insieme B.
- Se l'intersezione è vuota si dice che i due insiemi sono **disgiunti**

### Complementare

![](https://i.ibb.co/1b2mDyF/complementare.png)

Il complementare di un insieme è formato dagli elementi che non sono contenuti in quel insieme.

Si rappresenta con: $A^c$

Se $A \subseteq E$

$E$ = insieme universo

$A^c = \lbrace x \in E : x \notin A\rbrace$

Il complementare è dato da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x non appartenga sia all'insieme A.

### Differenza
![](https://i.ibb.co/SdqNndw/differenza.png)

La differenza tra il primo insieme e il secondo è formato dagli elementi che sono contenuti nel primo insieme ma non sono presenti nel secondo.

Si rappresenta con: $A \setminus B$

Se $A,B \subseteq E$

$E$ = insieme universo

$A \setminus B = \lbrace x \in E : (x \in A) \land (x \notin B)\rbrace$

La differenza è data da tutte le x dell'insieme universo che soddisfa la seguente proprietà: cioè che la x appartenga all'insieme A ma non all'insieme B.

### Prodotto cartesiano

![](https://i.ibb.co/HtH225X/cartesiano.png)

Il prodotto cartesiano è formato dalle coppie in cui il primo elemento appartiene al primo insieme e il secondo elemento appartiene al secondo insieme.

Si rappresenta con: $A \times B$

$A \times B = \lbrace (x,y) : (x \in A) \land (y \in B)\rbrace$

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
Quando è presente il simbolo "se e solo se" $( \iff )$ bisogna dimostrare l'affermazione in entrambe i versi:
1. $A \cup B = A \implies B \subseteq A$
2. $B \subseteq A \implies B \cup A = A$

<hr>

1. Sappiamo che $A \cup B = A$ è verificata.

Prendiamo un $b \in B$ e supponiamo per assurdo che $b \notin A$. Questo non è possibile perché $b$ deve appartenere all'unione di $A$ e $B$ che sappiano essere uguale ad $A$.

Quindi $\forall b \in B \implies b \in A$, cioè ogni elemento di B deve essere anche elemento di A perciò $B \subseteq A$

2. Sappiamo che $B \subseteq A$ è verificata.

$A \cup B = A$ significa che $A \cup B \subseteq A$ e $A \subseteq A \cup B$ cioè l'unione di $A$ e $B$ è contenuta in $A$ e $A$ contiene l'unione di $A$ e $B$.

Prendiamo un $x$ appartenente all'unione di $A$ e $B$ quindi $x \in A \lor x \in B$ ma dato che $B$ è contenuto in A allora $x \in A$.

Dato che tutti gli elementi di $B$ sono contenuti in $A$ allora $A \cup B = A$.

## Formule di Morgan
- $(A \cup B)^C = A^C \cap B^C$
- $(A \cap B)^C = A^C \cup B^C$


## Insiemi numerici
Gli insiemi numerici sono particolari tipi di insiemi formati da infiniti elementi che hanno delle caratteristiche comuni. Gli insiemi numerici sono:

$\mathbb{N}$: Insieme dei **numeri naturali**, numeri interi positivi partendo da 0.

$$N = \lbrace 0,1,2,3,...\rbrace$$

<hr>

$\mathbb{Z}$: Insieme dei **numeri Interi o relativi**, numeri interi con segno.

$$Z = \lbrace...-3,-2,-1,0,1,2,3,...\rbrace$$

<hr>

$\mathbb{Q}$: Insieme dei **numeri razionali**, numeri che possono essere rappresentati come una frazione.

$$Q = \lbrace \frac{p}{q}: (p \in \mathbb{Z}) \land (q \in \mathbb{N} \setminus \lbrace 0 \rbrace ) \rbrace$$

<hr>

$\mathbb{I}$: Insieme dei **numeri irrazionali**, numeri con parte decimale infinita non periodica.

$$I = \lbrace \sqrt{2},\sqrt{3}, \pi, e,... \rbrace$$

<hr>

$\mathbb{R}$: Insieme dei **numeri reali**, insieme composto dai numeri appartenenti agli insiemi $\mathbb{Q}$ e $\mathbb{I}$ .

Questi insiemi sono relazionati tra loro:

$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$

$\mathbb{I} \subset \mathbb{R}$

![](https://i.ibb.co/28sGGkV/insiemi-numerici.png)


  
# L'insieme $\mathbb{R}$

## Assiomi

L'insieme $\mathbb{R}$ è definito un insieme che soddisfa quattro **assiomi**.

Un assioma è una affermazione che è palesemente vera e per cui non serve che sia dimostrata.

1. **Somma** $(+)$

	L'addizione in $\mathbb{R}$ gode delle seguenti proprietà:
	- **Commutativa**: $a + b = b + a$
	- **Associativa**: $(a + b) + c = a + (b + c)$
	- **Esistenza dell'elemento neutro**: $0$
	- **Esistenza dell'opposto**: $\forall a \in \mathbb{R}$ esiste $-a \in \mathbb{R}$

	L'insieme che soddisfa l'assioma della somma si dice **gruppo commutativo** $(\mathbb{R}, +)$.

	Oltre a $\mathbb{R}$ valgono anche $\mathbb{Z}$ e $\mathbb{Q}$.

2. **Prodotto** $(*)$

	Il prodotto in $\mathbb{R}$ gode delle seguenti proprietà:
	- **Commutativa**: $a \cdot b = b \cdot a$
	- **Associativa**: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
	- **Esistenza dell'elemento neutro**: $1$
	- **Esistenza del reciproco**: $\forall a \in \mathbb{R} \setminus \lbrace 0 \rbrace$ esiste $a^{-1}  \in \mathbb{R}$

	L'insieme che soddisfa l'assioma della somma e del prodotto si dice **corpo commutativo** $(\mathbb{R}, +,  \cdot )$.

	Oltre a $\mathbb{R}$ vale anche $\mathbb{Q}$.

3. **Ordinamento**$(\leq)$

	L'ordinamento in $\mathbb{R}$ gode delle seguenti proprietà:
	- $x \leq b \lor y \leq x$

	$\forall a,b \in \mathbb{R} : a \leq b$ si ha:

	- **Compatibilità con la somma**: $a + c \leq b + c$
	- **Compatibilità con il prodotto**: $a \cdot c \leq b \cdot c$ (per ogni $c \geq 0$)

	L'insieme che soddisfa l'assioma della somma, del prodotto e dell'ordinamento  si dice **corpo commutativo ordinato** $(\mathbb{R}, +,  \cdot , \leq)$.

	Oltre a $\mathbb{R}$ vale anche $\mathbb{Q}$.

4. **Completezza**

	Prendendo due insiemi appartenenti ad $\mathbb{R}$ in cui $a \in A$ e $b \in B$ tale che $a \leq b$ esiste un altro elemento che è compreso tra $a$ e $b$:

	$\exists c \in \mathbb{R} : a \leq c \leq b$

	Solo $\mathbb{R}$ soddisfa questo assioma.


## Estremi

### Estremo superiore

Prendiamo un insieme $A \subseteq \mathbb{R}$

Prendiamo poi un elemento $b$ che viene definito **maggiorante** se per ogni elemento $x$ in $A$ $x\leq b$

**L'estremo superiore** di $A$ (indicato con: "sup $(A)$") è il più piccolo dei suoi maggioranti.

### Estremo inferiore

Prendiamo un insieme $A \subseteq \mathbb{R}$

Prendiamo poi un elemento $b$ che viene definito **minorante** se per ogni elemento $x$ in $A$ $b\leq x$

**L'estremo inferiore** di $A$ (indicato con: "inf $(A)$") è il più grande dei suoi minoranti.

### Esempi
#### Es. 1

$$A \subseteq \mathbb{R}$$

$$A = \lbrace -2,\pi, 3, 10 \rbrace$$

maggioranti $= \lbrace 10,10.1, 10.01, 11,... \rbrace$

il più piccolo dei maggioranti è $10 \implies$ sup $(A) = 10$ (che corrisponde anche al valore massimo dell'insieme)

minoranti $= \lbrace ...,-3,-2.5,-2.001,-2 \rbrace$

il più grande dei minoranti è $-2 \implies$ inf $(A) = -2$ (che corrisponde anche al valore minimo dell'insieme)

#### Es. 2

$$B \subseteq \mathbb{R}$$

$$B = \lbrace x \in \mathbb{R} : -2 < x < 10 \rbrace$$

Questo insieme non possiede né massimo né minimo.

maggioranti $= \lbrace n \in \mathbb{R} : n \geq 10 \rbrace$

il più piccolo dei maggioranti è $10 \implies$ sup $(B) = 10$

minoranti $= \lbrace n \in \mathbb{R} : n \leq -2 \rbrace$

il più grande dei minoranti è $-2 \implies$ inf $(B) = -2$

#### Es. 3

$$C = \lbrace x \in \mathbb{Q} : x^2 \leq 2 \rbrace$$

Per trovare maggiorante e minorante dobbiamo risolvere la disequazione di secondo grado:

$$x^2 = 2$$

$$x = \pm \sqrt{2}$$

$$-\sqrt{2} \leq x \leq \sqrt{2}$$

maggioranti $=\lbrace n \in \mathbb{R} : n \geq \sqrt{2}\rbrace$

sup $(C) = \sqrt{2}$

minoranti $=\lbrace n \in \mathbb{R} : n \leq -\sqrt{2}\rbrace$

inf $(C) = -\sqrt{2}$


### Proprietà

#### Estremo superiore

Se un insieme $A$ è superiormente limitato (possiede almeno un maggiorante)
- sup $(A) \in \mathbb{R}$ ed è  unico
- L = sup $(A)$ se e solo se:
	- $L \geq a$ $\forall a \in A$ (L più grande di tutti gli elementi di $A$)
	- $\forall \epsilon > 0$ esiste $a \in A : a > L -\epsilon$ (sottraendo ad L un qualsiasi numero esiste un $a \in A$ più grande)

![](https://i.ibb.co/S7gtfJC/prop-es-sup.png)

Se $A$ è superiormente illimitato allora sup $(A) = + \infty$

#### Estremo inferiore

Per l'estremo inferiore vale lo stesso discorso al contrario.

![enter image description here](https://i.ibb.co/fC9B5Xg/prop-es-inf.png)

Se $A$ è inferiormente illimitato allora inf $(A) = - \infty$

## Intervalli di $\mathbb{R}$

$\mathbb{I} \subseteq \mathbb{R}$ è un intervallo se per ogni coppia $x,y \in \mathbb{I}$ con $x \leq y$ ogni numero $z \in \mathbb{R} : x \leq z \leq y$ si ha che  $z \in \mathbb{I}$

![](https://i.ibb.co/ckW19jK/intervallo.png)


| Rappresentazione | Descrizione | Nome |
|------------------|-------------|------|
| $]a,b[$ | $\lbrace x \in \mathbb{R} : a < x < b \rbrace$ | Intervallo aperto limitato|
| $[a,b]$ | $\lbrace x \in \mathbb{R} : a \leq x \leq b \rbrace$ | Intervallo chiuso limitato|
| $[a,b[$ | $\lbrace x \in \mathbb{R} : a \leq x < b \rbrace$ | Intervallo limitato chiuso a sx e aperto a dx|
| $]a,b]$ | $\lbrace x \in \mathbb{R} : a < x < b \rbrace$ | Intervallo limitato chiuso a dx e aperto a sx|
| $]a,+\infty[$ | $\lbrace x \in \mathbb{R} : x > a \rbrace$ | Intervallo illimitato superiormente e aperto a sx|
| $]-\infty,b[$ | $\lbrace x \in \mathbb{R} : x < b \rbrace$ | Intervallo illimitato inferiormente e aperto a dx|
| $]-\infty,+\infty[$ | $\mathbb{R}$ | Intervallo illimitato|

Se $a = b$ allora:
- $[a,b] = \lbrace a \rbrace$
- $]a, b[$ $\lor$ $[a,b[$ $\lor$ $]a,b]$ $= \emptyset$


## Intorni

Dato $x_0 \in \mathbb{R}$ chiamiamo **palla circolare** di centro $x_0$ e raggio $\delta > 0$ l'intervallo $]x_0 - \delta, x_0 + \delta[$

$B (x_0,\delta)$ $=$ $]x_0 - \delta, x_0 + \delta[$

L'intervallo $]x_0-\delta,x_0[$ è detto intorno sinistro di $x_0$
L'intervallo $]x_0,x_0 + \delta[$ è detto intorno destro di $x_0$

![](https://i.ibb.co/k2KxH0w/palla.png)

Avendo $A \subseteq \mathbb{R}$ e $x_0 \in \mathbb{R}$

- $x_0$ si dice **interno** ad $A$ se $x_0 \in A$ ed esiste $\delta > 0$ tale che $B(x_0,\delta) \subset A$ (se esiste una palla circolare di centro $x_0$ e raggio $\delta$ che è contenuta in $A$)
- $x_0$ si dice **esterno** ad $A$ se $x_0 \in A^C$
- $x_0$ si dice **di frontiera** per $A$ se un qualunque intorno di $x_0$ ha almeno un punto in $A$ e almeno un punto in $A^C$.

L'insieme dei punti interni di un insieme si indica con $\mathring{A}$

L'insieme dei punti di frontiera di un insieme si indica con $\mathcal{F}(A)$

Es. di punti di frontiera:

$E= [1,3] \cup \lbrace5\rbrace$ $\cup$ $]8,9[$

$\mathcal{F}(A) = \lbrace 1,3,5,8,9\rbrace$

N.B. anche il $5$ è un punto di frontiera perché è possibile considerare il punto stesso come appartenente all'insieme E e possiede almeno un punto nel suo intorno che non è $5$.

## Insiemi aperti e chiusi

Avendo $A \subset \mathbb{R}$
- A si dice **aperto** se $A = \mathring{A}$ (tutti i punti di $A$ sono interni)
- A si dice **chiuso** se $A^C$ è aperto oppure se l'insieme A contiene la sua frontiera.

Es.
$A = ]a,b[$ è un insieme aperto
$B = [a,b]$ è un insieme chiuso
Infatti: $B^C =$ $]-\infty,a[$ $\lor$ $]b,+\infty[$ che sono 2 insiemi aperti.

$\mathbb{R}$ è un insieme aperto; $\emptyset$ è l'unico insieme sia aperto che chiuso.

### Proprietà insiemi aperti

Avendo $A,B \in \mathbb{R}$ e insiemi aperti:
- $A \cup B$ è insieme aperto.
- $A \cap B$ è insieme aperto.
- L'unione di infiniti aperti è aperto.
- L'intersezione di infiniti aperti può essere aperto ma può anche essere chiuso (come nel caso dello 0 nell'intervallo $A=]-\frac{1}{n}, \frac{1}{n} [$, sommando tutte le intersezione lo 0 è sempre un elemento in comune: $\lbrace 0 \rbrace = [0,0]$ insieme chiuso).

### Proprietà insiemi chiusi

Avendo $A,B \in \mathbb{R}$ e insiemi chiusi:
- $A \cup B$ è insieme chiuso.
- $A \cap B$ è insieme chiuso.
- L'unione di infiniti chiusi può essere aperto ma può anche essere chiuso (come l'unione di $[\frac{1}{n},1] =$ $]0,1]$).
- L'intersezione di infiniti chiusi è chiuso.

## Teorema di Cantor

Considerando una successione di intervalli chiusi e limitati $\lbrace I_n\rbrace_{n \in \mathbb{N}}$ tali che $I_{n+1} \subseteq I_n$ cioè l'intervallo successivo è compreso nel precedente. Allora esiste un elemento $c \in \mathbb{R}$ comune a tutti gli intervalli.

$\exists c \in \mathbb{R} : c \in \bigcup\limits_{n=1}^{+\infty} I_n$

![](https://i.ibb.co/PhMQ4xK/cantor.png)


Se al crescere di n l'ampiezza dell'intervallo diventa sempre più piccola (come nell'immagine) allora $c$ sarà un elemento unico.

## Esercizio

Trovare l'insieme di:
$$\bigcup\limits_{n=1}^{+\infty} [1-\frac{1}{n},1+\frac{1}{n}]$$

Con $n = 1$ allora $[0,2]$

Con $n = 2$ allora $[\frac{1}{2},\frac{3}{2}]$

Con $n = 3$ allora $[\frac{2}{3},\frac{4}{3}]$

Dato che l'ampiezza degli intervalli cala ad ogni $n$ l'unione è data dall'intervallo più esterno: $[0,2]$

$$\bigcap\limits_{n=1}^{+\infty} [1-\frac{1}{n},1+\frac{1}{n}]$$

Con $n = 1$ allora $[0,2]$

Con $n = 2$ allora $[\frac{1}{2},\frac{3}{2}]$

Con $n = 3$ allora $[\frac{2}{3},\frac{4}{3}]$

Per il teorema di Cantor dato che un insieme contiene il successivo e l'ampiezza cala sempre di più allora esiste un solo elemento comune, gli intervalli si avvicinano sempre di più ad $\lbrace 1 \rbrace$.

## Punti di accumulazione e punti isolati

- $x_0 \in \mathbb{N}$ è un **punto di accumulazione** per $A \in \mathbb{R}$ se in ogni intorno di $x_0$ è presente almeno un elemento di $A$ (escluso $x_0$).
- Se $x_0$ è un **punto isolato** per $A \in \mathbb{R}$ se esiste un suo intorno che non possiede altri punti di A.

Es.

$B =[1,2[ \cup \lbrace 3 \rbrace$

punti di accumulazione: $[1,2]$

punti isolati: $\lbrace 3 \rbrace$

Anche $2$ è un punto di accumulazione perché alla sua sinistra sono presenti infiniti punti e quindi un qualsiasi intorno possederà elementi di A.

### Teoremi punti accumulazione

1. Un insieme è chiuso se e solo se contiene tutti i suoi eventuali punti di accumulazione.
2. Un insieme è chiuso se e solo se contiene tutti i suoi eventuali punti di frontiera.
3. Teorema di Bolzano-Weierstrass: ogni insieme infinito e limitato ha almeno un punto di accumulazione.

## Cardinalità e numerabilità

**La cardinalità** di un insieme indica la quantità di elementi presenti in quel insieme. Si scrive " $\text{card} (A)$ ".

- Se il numero di elementi è finito si dice **insieme finito** e se il numero di elementi è infinito si dice **insieme infinito**.

- Se due insieme $A$ e $B$ hanno la stessa cardinalità allora esiste una corrispondenza biunivoca tra di loro (ad ogni elemento di $A$ corrisponde un solo elemento di $B$ e vice versa).

- Se un insieme infinito $A$ ha la stessa cardinalità dell'insieme $\mathbb{N}$ allora si dice **numerabile**: $\mathbb{N},\mathbb{Z},\mathbb{Q}$ sono numerabili; $\mathbb{R}$ e $\mathbb{I}$ non sono numerabili.

## Densità

$\mathbb{Q}$ e $\mathbb{R} \setminus \mathbb{Q}$ si dicono **densi** in $\mathbb{R}$ perché prendendo due valori qualsiasi appartenenti ad $\mathbb{R}$ esiste sempre un valore che sta in mezzo ai due valori.


## Esempio di recap

$$A = \lbrace \frac{1}{n}:n \in \mathbb{N}, n > 0\rbrace$$

![](https://i.ibb.co/T0J1Lqp/esempiofinale.png)

Punti interni $\mathring{A} = \emptyset$

Punti esterni $\mathbb{R} \setminus A \setminus \lbrace 0 \rbrace$

Punti di frontiera $\mathcal{F}(A) = A \cup \lbrace 0 \rbrace$

non è nè aperto nè chiuso

punti di accumulazione: $\lbrace 0 \rbrace$

punti isolati: tutti i punti di A


# Funzioni

la funzione è una relazione tra due insiemi $A$ e $B$ se ad ogni elemento di A si associa un solo elemento di $B$

![](https://i.ibb.co/SwrqjZv/funzioni.png)

L'inieme A è il **Dominio** della funzione e l'insieme B è il **codominio** della funzione.

Il Dominio quindi rappresenta quindi tutti i valori assumibili da $x$.

La funzione si scrive:

$f: A \longrightarrow B$

$x \longmapsto y = f(x)$

la $x$ viene detta *variabile indipendente* mentre la $y$ viene detta *variabile dipendente*.

**Immagine** è l'insieme dei valori assunti da y sul dominio $D$ della funzione (si indica con $f(D)$ ) Quindi le y che hanno una relazione con una x.

**controimmagine** è l'insieme dei valori assunti da x sul codominio $B$ della funzione (si indica con $f^{\leftarrow}(B)$ ) Quindi le x che hanno una relazione con una y.

![](https://i.ibb.co/w60sQDN/dom-cod.png)

L'insieme delle funzioni scritte nel modo $y = mx+q$ rappresentano tutte le rette rappresentabili nel piano *non verticali*.

Es.

$f: \mathbb{R} \longrightarrow \mathbb{R}$

$f: x \longmapsto y = 2x+1$

![](https://i.ibb.co/C6kgD48/retta.png)

Dominio $D = \mathbb{R}$
Codominio $B = \mathbb{R}$
Immagine $f(D) = \mathbb{R}$
controimmagine $f^{\leftarrow}(B) = \mathbb{R}$


## Funzioni iniettive e suriettive

Avendo
$f: D \subseteq \mathbb{R} \longrightarrow B \subseteq \mathbb{R}$
$x \longmapsto y = f(x)$

- $f$ è **iniettiva** se per ogni $y \in B$ esiste *al massimo* un elemento $x \in D$
- $f$ è **suriettiva** se per ogni $y \in B$ esiste *almeno* un elemento $x \in D$
- $f$ è **biunivoca** (o biiettiva)  se per ogni $y \in B$ esiste *un solo* un elemento $x \in D$. Quindi quando è sia iniettiva sia suriettiva.

Es.
$y = x$ biunivoca (ad ogni x corrisponde una sola y e vice versa)
$y = x^2$ né iniettiva né suriettiva (ad ogni y possiamo trovare o una sola $x$ (il vertice) o nessuna $x$ o due $x$ )

### Interpretazione grafica

Tracciando ogni retta orizzontale **appartenente al codominio** allora:
- Se la funzione viene sempre intersecata al massimo una volta è iniettiva.
- Se la funzione viene sempre intersecata almeno una volta allora è suriettiva.
- Se la funzione viene sempre intersecata una sola volta allora è biunivoca.

### Proposizioni

Avendo dominio e codominio sottoinsiemi di $\mathbb{R}$ allora la funzione è:
1. iniettiva se e solo se per ogni coppia $x_1,x_2$ la loro immagine è uguale ( $f(x_1) = f(x_2)$ ) allora sono uguali anche $x_1$ e $x_2$.
2. iniettiva se e solo se per ogni coppia $x_1,x_2$ con $x_1 \neq x_2$ allora anche la loro immagine sarà diversa ( $f(x_1) \neq f(x_2)$ ).
3. suriettiva se e solo se l'immagine della funzione è uguale al codominio.
4. biettiva se e solo se la funzione è sia iniettiva che suriettiva.

## Restrizione di una funzione

È possibile rendere una funzione biunivoca restringendo il suo dominio, il condominio o entrambi.

se prendiamo la parabola $y = x^2$ possiamo farla diventare biunivoca restringendo il suo dominio a $x \geq 0$ e restringendo il suo codominio a $y \geq 0$

Lavoreremo quindi con l'insieme $A = \mathbb{R} ^+ \cup \lbrace 0 \rbrace$ per entrambi gli assi.

Si scrive $g = f_{|A}$

## Funzioni monotone

Le funzioni monotono si dicono tali se sono:

- **Funzioni crescenti** se scegliendo $x_1$ e $x_2$ con $x_1 < x_2$ allora anche $f(x_1) \leq f(x_2)$
- **Funzioni decrescenti** se scegliendo $x_1$ e $x_2$ con $x_1 < x_2$ allora $f(x_1) \geq f(x_2)$

Si dice strettamente crescente o decrescente se è al posto di $\leq$ e $\geq$ c'è $<$ e $>$

### Proprietà funzioni monotone

- Se funzione strettamente monotono allora è iniettiva.
- Se funzione iniettiva può non essere monotona.
- La funzione è **costante** se l'immagine ha un solo elemento.

## Operazione tra funzioni

$f:D_f \longrightarrow \mathbb{R}$

$x \longmapsto y = f(x)$

$g: D_g \longrightarrow \mathbb{R}$

$x \longmapsto y = g(x)$

### Somma

$h(x) = f(x) + g(x)$

$D_h = D_f \cap D_g$

### Moltiplicazione

$h(x) = f(x) \cdot g(x)$

$D_h = D_f \cap D_g$

### Divisione

$h(x) = \frac{f(x)}{g(x)}$

$D_h = \lbrace x \in \mathbb{R} :( x \in D_f \cap D_g) \land g(x) \neq 0 \rbrace$

(Intersezione meno lo $0$ )

### Funzione composta

bisogna mettere il risultato di $f(x)$ al posto della x in $g(x)$

$h(x) = (g \circ f)(x) = g(f(x))$

$D_h = \lbrace x \in \mathbb{R} : (x \in D_f) \land (f(x) \in D_g) \rbrace$

Es. funzione composta

$f(x) = \sqrt{x}$

$D_f = [0; + \infty [$

$g(x) = \sqrt{1-x}$

$D_g = ]-\infty ; 1]$

- $h = g \circ f = g(f(x)) = \sqrt{1-\sqrt{x}}$

	$$D_h = \begin{cases} x \geq 0 \\
1-\sqrt{x} \geq 0  \end{cases} \begin{cases} x \geq 0 \\
\sqrt{x} \leq 1  \end{cases} = 0 \leq x \leq 1 = [0,1]$$

- $h = f \circ g = f(g(x)) = \sqrt{\sqrt{1-x}}$

	$D_h = 1-x \geq 0 = x \leq 1 = ]-\infty ;1]$

## Funzione inversa

La funzione inversa di f si indica con $f^{-1}$ ed è la legge che associa ad ogni punto y un unico punto x. Per cui una funzione si può invertire **solo se è biunivoca**.

Es. 1

$f(x) = 3x$

Per trovare l'inverso isoliamo la x:

$\frac{y}{3} = x$

ora invertiamo la x con la y:

$y = \frac{x}{3} \rightarrow f^{-1}(x) = \frac{x}{3}$

Es. 2

$f(x) = \sqrt[3]{x}$

$y^3 = x$

$y = x^3 \rightarrow f^{-1}(x) = x^3$

### Proprietà funzioni inverse

- L'immagine della funzione inversa è il dominio della funzione
- $(f^{-1} \circ f)(x) = f^{-1}(f(x)) = x$
- $(f \circ f^{-1})(y) = f(f^{-1}(x)) = y$
- $(f^{-1})^{-1} = f$

Es.

$f(x) = x^3$

$f^{-1} = \sqrt[3]{x}$

$(f \circ f^{-1})(x) = (\sqrt[3]{x})^3 = 3$


## Simmetrie

Una funzione è detta:

- **pari** se i valori di x sono simmetrici rispetto all'asse y e quindi $f(-x) = f(x)$
- **dispari** se i valori di x sono simmetrici rispetto all'origine degli assi $f(-x) = -f(x)$
- Se non rispetta nessuno dei valori precedenti allora è **né pari né dispari**


## Funzioni periodiche

Una funzione si dice **periodica** se esiste $\tau$ positivo (*periodo*) per cui $f(x+\tau) = f(x)$ .
Cioè una funzione che si ripete ad ogni periodo $\tau$.

Esempio:

$\sin(x)$ è una funzione periodica di periodo $\tau = 2\pi$ (ogni $2\pi$ il grafico si ripete):

![](https://i.ibb.co/WkS3456/seno-periodico.png)


## Traslazioni, dilatazioni e riflessioni

Tramite delle operazioni è possibile modificare le funzioni:
- Traslazione: spostare tutti i punti della funzione nelle quattro direzioni utilizzando un vettore.
- Dilatazione:
	- orizzontale: i punti si *allontanano* all'asse delle y.
	- verticale: i punti si *allontanano* dall'asse delle x.
- Contrazione
	- orizzontale: i punti si *avvicinano* all'asse delle y.
	- verticale: i punti si *avvicinano* dall'asse delle x.
- Riflessione: specchiare la funzione secondo una determinata retta.

![enter image description here](https://i.ibb.co/BjFn26b/tras-dil-rif.png)


  
# Funzioni elementari

Le funzioni elementari sono quello funzioni il cui grafico è conosciuto.

## Potenza

$$y = x^\alpha$$

### Potenza con esponente naturale

- Se $\alpha = n \in \mathbb{N}$
	Il dominio è $\mathbb{R}$
- Se l'esponente è pari e diverso da 0 allora per qualsiasi $x, x^\alpha$ sarà positivo
- Se l'esponente è dispari allora $x^\alpha$ potrà essere positivo o negativo
- $x^0 = 1$

![](https://i.ibb.co/0nXp44X/potenza1.png)

### Potenza con esponente intero negativo

$$y = x^{-\alpha}$$

$$y = \frac{1}{x^{\alpha}}$$

- Se $\alpha = n \in \mathbb{Z}\setminus \lbrace 0\rbrace$
	Il dominio è $\mathbb{R} \setminus \lbrace 0 \rbrace$

![](https://i.ibb.co/QvxY4bk/patenza2.png)


### Potenza con esponente razionale

$$y = x^\frac{m}{n}$$

$$y = \sqrt[n]{x^m}$$

con $m = 1$ allora:
-	se n è pari il dominio è $[0,+\infty[$
-	se n è dispari il dominio è $\mathbb{R}$

![](https://i.ibb.co/SKDXGrg/potenze3.png)

con $m \in \mathbb{Z} \setminus \lbrace 0 \rbrace$ e $n \in \mathbb{N} \setminus \lbrace 0 \rbrace$ allora:
- Se $\frac{m}{n} > 0$ il dominio è $[0,+\infty[$
- Se $\frac{m}{n} < 0$ il dominio è $]0,+\infty[$

![](https://i.ibb.co/TB69zvZ/potenze4.png)

### Potenze con esponente reale

- Se $\alpha > 0$
	Il dominio è $[0,\infty[$
- Se $\alpha < 0$
	Il dominio è $]0,\infty[$

## Funzioni esponenziali

$$y = a^x$$

con $a>0$

![](https://i.ibb.co/Kr4294z/exp1.png)

### Proprietà

- Le funzioni esponenziali assumono solo valori positivi.
- se la base è $> 1$ allora la funzione è strettamente crescente.
- Se la base è compreso tra $0$ e $1$ allora la funzione è strettamente decrescente.
- Se la base è $= 1$ allora la funzione è costante.
- Se si restringe il codominio a $]0, + \infty[$ la funzione diventa biettiva e quindi possiede un inverso (il logaritmo).

#### Proprietà delle potenze

- $a^0 = 1$
- $a^1 = a$
- $a^{x_1+x_2} = a^{x_1} \cdot a^{x_2}$
- $a^{-x} = (\frac{1}{a})^x = \frac{1}{a^x}$
- $(a^x)^b = a^{bx}$

## Funzioni logaritmiche

$$y = log_a(x)$$

Il logaritmo è la funzione inversa dell'esponenziale

$y = log_a(x) \iff x = a^y$

![](https://i.ibb.co/9s4Ry1z/loga.png)

N.B. $y=log_{\frac{1}{2}}(x)$ si può scrivere come $y=-log_2(x)$

### Proprietà

- Se la base è $> 1$ allora la funzione è strettamente crescente.
- Se la base è compresa tra $0$ e $1$ allora la funzione è strettamente decrescente.

#### Proprietà derivate dalle potenze

- $log_a(1) = 0$
- $log_a(a) = 1$
- $log_a(x_1 \cdot x_2) = log_a(x_1) + log_a(x_2)$
- $log_a(\frac{x_1}{x_2}) = log_a(x_1) - log_a(x_2)$
- $log_a(x_1^{x_2}) = x_2 \cdot log_a(x_1)$
- $a^{x_1} = b^{x_1 \cdot log_b(a)}$
- $log_a(b) = \frac{log_c(b)}{log_c(a)}$

Attenzione:

$log_a(x)^b \neq (log_a(x))^b$
$b \cdot log_a(x) \neq log_a^b(x)$

### Logaritmo naturale

Un logaritmo viene chiamato naturale se ha per base il numero di Nepero $e$ (che vale circa $2.7182...$)

$log_e(x) = ln(x)$

$y = ln(x) \iff x=e^y$

## Valore assoluto

$$y = |x|$$

![](https://i.ibb.co/frmJcKh/val-assoluto.png)

$$|x| = \begin{cases}x & \text{ se } x \geq 0 \\
-x & \text{ se } x < 0 \end{cases}$$

### Proprietà

- $|x| \geq 0$ e $x \leq |x|$ per ogni $x \in \mathbb{R}$
- dato $a > 0$ allora di disequazione $|x| < a \iff -a < x < a$ [vedi figura sottostante]
- dato $a > 0$ allora di disequazione $|x| > a \iff (x  < -a \land x > a)$ [vedi figura sottostante]

![](https://i.ibb.co/kJtHzxs/prop-val-ass.png)

### Disuguaglianze triangolari

$a,b \in \mathbb{R}$

- $|a+b| \leq |a|+|b|$
- $||a|-|b|| \leq |a-b|$

## Funzione segno

$$y=\text{sgn}(x)$$

![](https://i.ibb.co/BytyPj7/sign.png)

$$\text{sgn}(x) = \begin{cases}1 & \text{ se } x \geq 0 \\
0 & \text{ se } x = 0 \\
-1 & \text{ se } x < 0 \end{cases}$$


## Funzioni goniometriche


![](https://i.ibb.co/dtXv3sZ/circonfe.png)

$$x= \cos(\alpha)$$

$$y= \sin(\alpha)$$

L'angolo $\alpha$ viene rappresentato in **radianti**, è possibile convertire secondo la seguente proporzione:

$$180:\pi=\alpha(°):x(rad)$$

### Proprietà

- I valori di coseno e seno sono compresi tra $-1$ e $1$
- $\cos^2\alpha + \sin^2\alpha = 1$
- $\cos -\alpha = \cos \alpha$
- $\sin -\alpha = - \sin \alpha$
- $\sin (\alpha +\beta) = \sin \alpha \cdot \cos \beta + \sin \beta \cdot \cos \alpha$
- $\cos (\alpha +\beta) = \cos \alpha \cdot \cos \beta - \sin \alpha \cdot \sin \beta$

Formule di duplicazione

- $\sin (2\alpha) = 2\sin \alpha \cdot \cos \alpha$
- $\cos (2\alpha) = \cos^2 \alpha - \sin^2 \alpha$

Formule riduzione potenza

- $\sin^2 \alpha = \frac{1-\cos 2\alpha}{2}$
- $\cos^2 \alpha = \frac{1+\cos 2\alpha}{2}$

### Seno

Restringendo il dominio e codominio otteniamo una funzione biettiva:

$\sin : [-\frac{\pi}{2}, \frac{\pi}{2}] \longrightarrow [-1, 1]$

$x \longmapsto y = \sin (x)$

Possiamo così ottenere la funzione inversa:

$$\sin^{-1} (x) = \arcsin (x)$$

$\arcsin : [-1, 1] \longrightarrow  [-\frac{\pi}{2}, \frac{\pi}{2}]$

$x \longmapsto y = \arcsin (x)$

cioè il valore tale che $\sin(y) = x$

| $\sin$ | $\arcsin$ |
|--|--|
| ![](https://i.ibb.co/bFVWwG0/sin.png) | ![](https://i.ibb.co/W6ZGj3x/arcsin.png) |

### Coseno

Restringendo il dominio e codominio otteniamo una funzione biettiva:

$\cos : [0, \pi] \longrightarrow [-1, 1]$

$x \longmapsto y = \cos (x)$

Possiamo così ottenere la funzione inversa:

$$\cos^{-1} (x) = \arccos (x)$$

$\arccos : [-1, 1] \longrightarrow  [0, \pi]$

$x \longmapsto y = \arccos (x)$

cioè il valore tale che $\cos(y) = x$

| $\cos$ | $\arccos$ |
|--|--|
| ![](https://i.ibb.co/q7sfBfk/coseno.png) | ![](https://i.ibb.co/fMK0v8s/arccos.png) |

### Funzione tangente

![](https://i.ibb.co/NZtp4kt/tangente.png)

La tangente è il componente $y$ del punto $Q$ nell'immagine, cioè dell'intersezione tra la diagonale e la retta $x = 1$ .

$$\tan(\alpha) = \frac{\sin (\alpha)}{\cos(\alpha)}$$

tenendo conto di $\forall \alpha \neq \frac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$

Dato che $\tan(-\alpha) = -\tan(\alpha)$ la funzione tangente è **dispari**

Restringendo il dominio otteniamo una funzione biettiva:

$\tan: ]-\frac{\pi}{2}, \frac{\pi}{2}[ \longrightarrow \mathbb{R}$

$x \longmapsto y = \tan(x)$

Possiamo così ottenere la funzione inversa:

$$\tan^{-1} = \arctan(x)$$

$\arctan : \mathbb{R} \longrightarrow ]-\frac{\pi}{2}, \frac{\pi}{2}[$

$x \longmapsto y = \arctan(x)$

cioè quel valore tale che $\tan(y) = x$

| $\tan$ | $\arctan$ |
|--|--|
| ![](https://i.ibb.co/5jzLpWz/tan.png) | ![](https://i.ibb.co/kMCRvLD/arctan.png) |

### Angoli notevoli

![](https://i.ibb.co/TcYFpGc/corr-gradi-rad.png)

### Funzione cotangente

![](https://i.ibb.co/QQTH21Y/cot.png)

La cotangente è il componente $x$ del punto $E$ nell'immagine, cioè dell'intersezione tra la diagonale e la retta $y = 1$ .

$$\cot(\alpha) = \frac{\cos (\alpha)}{\sin(\alpha)}$$

tenendo conto di $\forall \alpha \neq k\pi$ con $k \in \mathbb{Z}$

### Funzione secante e cosecante

![](https://i.ibb.co/9qRJdvS/sec.png)

La funzione **secante** rappresenta la componente $x$ del punto $G$ nell'immagine, cioè dell'intersezione tra la tangente della circonferenza e l'asse $x$ .

La funzione **cosecante** rappresenta la componente $y$ del punto $H$ nell'immagine, cioè dell'intersezione tra la tangente della circonferenza e l'asse $y$ .

$$\sec(\alpha) = \frac{1}{\cos(\alpha)}$$

$$\text{cosec}(\alpha) = \frac{1}{\sin(\alpha)}$$


## Funzioni iperboliche

### Seno iperbolico

$$\sinh (x) = \frac{e^x-e^{-x}}{2}$$


Dato che $\sinh (-x) = -\sinh(x)$ è una funzione **dispari**.

È una funzione biettiva per cui possiede una funzione inversa:

$$y = \ln(x+\sqrt{x^2+1})$$


### Coseno iperbolico

$$\cosh (x) = \frac{e^x-e^{-x}}{2}$$


Dato che $\cosh (-x) = \cosh(x)$ è una funzione **pari**.

Restringendo dominio e codominio si ottiene una funzione biettiva:

$\cosh : [0, +\infty[ \longrightarrow [1, +\infty[$

$x \longmapsto y=\cosh(x)$

Quindi possiede una funzione inversa:

$$y = \ln(x+\sqrt{x^2-1})$$

![](https://i.ibb.co/HF2Z5zm/iperb.png)



# Limiti

Avendo una funzione

$f: A \subseteq \mathbb{R} \longrightarrow \mathbb{R}$ e $x_0$ un punto di accumulazione di $A$ diremo che
$$\lim_{x \to x_0}  f(x) = \ell \in \mathbb{R}$$

detto "Limite per x che tende a x con 0, di f di x"

Se per ogni intorno di $\ell$ $(U_\ell)$ è possibile trovare un intorno di $x_0 (I_{x_0})$ per cui $\forall x \in I_{x_0} \cap A$ con $x \neq x_0$  si ha $f(x) \in U_\ell$


Esempio:

$f(x) = \frac{x-1}{x+1}$ e il limite $\lim_{x \to 1}  f(x) = 0$

abbiamo quindi $x_0 = 1$ e $\ell = 0$

scegliendo un intervallo arbitrario di $\ell$: $U_{\ell} = ]a,b[$ esiste un intorno di $x_0$: $I_{x_0} = ]c,d[$ tale che ogni punto di questo intorno è associato ad un punto appartenente all'intorno $U_{\ell}$.

![](https://i.ibb.co/BrYLXJ8/limite.png)

## Limiti con $\epsilon$ e $\delta$

Sempre con:

$f: A \subseteq \mathbb{R} \longrightarrow \mathbb{R}$ con $x_0$ punto di acc. in $A$

diremo che $\lim_{x \to x_0}  f(x) = \ell \in \mathbb{R}$ se $\forall \epsilon>0$ esiste $\delta_\epsilon > 0$ per cui $\forall x \in A, x \neq x_0$ con $|x-x_0| < \delta_\epsilon$ si ha che $|f(x)-\ell|<\epsilon$

Esempio:

$f(x) = \frac{x^2-1}{x-1}$ verificare che  $\lim_{x \to 1}  f(x) = 2$

mostriamo che per ogni $\epsilon >0$ esiste $\delta_\epsilon >0$ per cui

$|x-1| < \delta_\epsilon \implies |\frac{x^2-1}{x-1} - 2| < \epsilon$

Risoluzione:
$$|\frac{x^2-1}{x-1} - 2| < \epsilon \iff$$

$$\iff | \frac{\cancel{(x-1)}(x+1)}{\cancel{x-1}} - 2| < \epsilon \iff$$

$$\iff|x+1 - 2| < \epsilon \iff$$

$$\iff|x-1| < \epsilon \iff$$

Quindi ora basta porre $\epsilon = \delta_\epsilon$ e abbiamo raggiunto la condizione iniziale

## Teoremi dei limiti

1. Teorema di unicità del limite
	avendo $\ell_1, \ell_2 \in \mathbb{R}$ e supponiamo di avere:

$$\lim_{x \to x_0}  f(x) = \ell_1 \lim_{x \to x_0}  f(x) = \ell_2$$

allora $\ell_1 = \ell_2$

2. Teorema della permanenza del segno
	- Se una funzione ha un limite positivo allora esiste un intorno di $x_0$ in cui tutti gli elementi di quel intorno saranno associati a delle y positive.
	- Se una funzione ha un limite negativo allora esiste un intorno di $x_0$ in cui tutti gli elementi di quel intorno saranno associati a delle y negative.

3. Teorema di limitatezza locale
	$lim_{x \to x_0} f(x) = \ell \in \mathbb{R}$
	se il limite è finito allora esiste un intorno di $x_0$ in cui f è limitato.

4. Teorema del confronto (o dei due carabinieri)
	Se abbiamo tre funzioni $f, g, h$ che soddisfano la seguente disequazione:

$$f(x) \leq g(x)\leq h(x)$$

Se sappiamo che:

$$\lim_{x \to x_0}f(x) = \lim_{x \to x_0}h(x) = \ell$$

allora anche 

$$\lim_{x \to x_0}g(x) = \ell$$

## Limiti tendenti ad infinito

Si possono indicare gli intorni di $\pm \infty$ come:

- intorno di $+ \infty$: $]b, +\infty[$
- intorno di $- \infty$: $]-\infty, a[$

Con limite che tende a $+ \infty$ di $f(x) = \ell$:

$\forall \epsilon > 0 \text{ } \exists M > 0 : \forall x >M$ si ha $|f(x)-\ell| < \epsilon$

Con limite che tende a $- \infty$ di $f(x) = \ell$:

$\forall \epsilon > 0 \text{ } \exists M > 0 : \forall x <-M$ si ha $|f(x)-\ell| < \epsilon$

Esempio

$f(x) = \frac{x+1}{x}$ e $\lim_{x \to +\infty} f(x) = 1$

Mostriamo che per ogni $\epsilon > 0$ esiste $M>0$ t.c se $x>M$ allora $|f(x)-1|<\epsilon$

$$x>M \implies |f(x)-1| < \epsilon$$

Risoluzione

$$|\frac{x+1}{x}-1| < \epsilon \iff$$

$$\iff |\frac{x}{x}+\frac{1}{x}-1| < \epsilon \iff$$

$$\iff |\frac{1}{x}| < \epsilon \iff \text{(dato che i valori di x tendono a + infinito e quindi a valori positivi possiamo togliere il valore assoluto)}$$

$$\iff \frac{1}{x} < \epsilon \iff$$

$$\iff \frac{1}{\epsilon} < x \iff$$

Poniamo $M = \frac{1}{\epsilon}$ e otteniamo $x > M$ cioè la nostra condizione iniziale

## Limiti che tendono a valori finiti ma che risultano infiniti

- $\lim_{x \to x_0} f(x)= + \infty$
	 allora $\forall M >0$ esiste $\delta > 0$ tale che se $|x-x_0| < \delta$ si ha che $f(x)>M$

- $\lim_{x \to x_0} f(x)= - \infty$
	 allora $\forall M >0$ esiste $\delta > 0$ tale che se $|x-x_0| < \delta$ si ha che $f(x)<-M$

## Limite destro e sinistro

-  $\lim_{x \to x_{0} ^ {-}} f(x) = \ell$ $x$ tende a $x_{0}$ da valori più piccoli di $x_{0}$ .

	Se $\forall U_{\ell}$ esiste un intorno sinistro di $x_{0} (I^{-} _ {x_{0}})$ tale che ogni valore in questo intorno è relazionato ad un valore di y nell'intorno di $U_{\ell}$

	Gli x appartenenti ad $I^{-} _ {x_{0}}$ possono essere scritti come $x_{0} -\delta < x < x_{0}$

-  $\lim_{x \to x_0^+} f(x)= \ell$ $x$ tende a $x_0$ da valori più grandi di $x_0$ .

	Se $\forall U_{\ell}$ esiste un intorno destro di $x_{0} (I^{+} _ {x_{0}})$ tale che ogni valore in questo intorno è relazionato ad un valore di y nell'intorno di $U_{\ell}$

Gli x appartenenti ad $I^+_{x_0}$ possono essere scritti come $x_0 < x < x_0 + \delta$

## Recap

| Limite | Premessa | Dimostrazione |
|--|--|--|
| $$lim_{x \to x_0} f(x) = \ell$$ | $$\forall \epsilon >0\text{ } \exists \delta_\epsilon > 0$$ | $$\vert x-x_0\vert<\delta_\epsilon \implies \vert f(x) - \ell\vert < \epsilon$$ |
| $$lim_{x \to +\infty} f(x) = \ell$$ | $$\forall \epsilon >0\text{ } \exists M > 0$$ | $$x>M \implies \vert f(x) - \ell\vert < \epsilon$$ |
| $$lim_{x \to -\infty} f(x) = \ell$$ | $$\forall \epsilon >0\text{ } \exists M > 0$$ | $$x<-M \implies \vert f(x) - \ell\vert < \epsilon$$ |
| $$lim_{x \to x_0} f(x) = +\infty$$ | $$\forall M >0\text{ } \exists \delta > 0$$ | $$\vert x-x_0\vert < \delta  \implies f(x) > M$$ |
| $$lim_{x \to x_0} f(x) = -\infty$$ | $$\forall M >0\text{ } \exists \delta > 0$$ | $$\vert x-x_0\vert < \delta  \implies  f(x) < -M$$ |
| $$lim_{x \to x_0^-} f(x) = \ell$$ | $$\forall \epsilon >0\text{ } \exists \delta > 0$$ | $$x_0 -\delta< x < x_0  \implies \vert f(x) - \ell\vert < \epsilon$$ |
| $$lim_{x \to x_0^+} f(x) = \ell$$ | $$\forall \epsilon >0\text{ } \exists \delta > 0$$ | $$x_0< x < x_0 + \delta  \implies \vert f(x) - \ell\vert < \epsilon$$ |
| $$lim_{x \to +\infty} f(x) = +\infty$$ | $$\forall M_1 >0\text{ } \exists M_2 > 0$$ | $$x>M_2  \implies  f(x) >M_1$$ |


## Algebra dei limiti

Avendo due limiti generici

$$\lim_{x \to x_0} f(x) = \ell \text{ e } \lim_{x \to x_0} g(x) = m$$

$F.I.$: forma indeterminata, il risultato dipende da caso in caso.

### Limite della somma

$$\lim_{x \to x_0} f(x) + g(x) = \ell + m$$

|| $m\in \mathbb{R}$ | $m= +\infty$ | $m= -\infty$ | 
|-:|:-:|:-:|:-: |
| $\ell \in \mathbb{R}$ | $m+\ell$ | $+\infty$ | $-\infty$ |
| $\ell = +\infty$ | $+\infty$ | $+\infty$ | $F.I.$ |
| $\ell = -\infty$ | $-\infty$ | $F.I.$ | $-\infty$ |

forma indeterminata $[+\infty - \infty]$

### Limite del prodotto

$$\lim_{x \to x_0} f(x) \cdot g(x) = \ell \cdot m$$

|| $m < 0$ | $m = 0$ | $m > 0$ |  $m= +\infty$ |  $m= -\infty$  |
|-:|:-:|:-:|:-:|:-:|:-:|
| $\ell < 0$ | $m+\ell$ | $0$ | $m+\ell$ | $-\infty$ | $+\infty$ |
| $\ell = 0$ | $0$ | $0$ | $0$ | $F.I.$ | $F.I.$ |
| $\ell > 0$ | $m+\ell$ | $0$ | $m+\ell$ | $+\infty$ | $-\infty$ |
| $\ell = -\infty$ | $-\infty$ | $F.I.$ | $-\infty$ | $+\infty$ | $-\infty$ |
| $\ell = +\infty$ | $+\infty$ | $F.I.$ | $-\infty$ | $-\infty$ | $+\infty$ |

forma indeterminata $[0 \cdot \infty]$

### Limite del rapporto

$$\lim_{x \to x_0} \frac{f(x)}{g(x)}  = \frac{\ell}{m} \text{ con } m\in \mathbb{R} \setminus \lbrace 0 \rbrace$$

|| $m < 0$ | $m = 0^-$ | $m = 0^+$ | $m > 0$ |  $m= +\infty$ |  $m= -\infty$  |
|-:|:-:|:-:|:-:|:-:|:-:|:-:|
| $\ell < 0$ | $\frac{\ell}{m}$ | $+\infty$ | $-\infty$ | $\frac{\ell}{m}$ | $0$ | $0$ |
| $\ell = 0$ | $0$ | $F.I.$ | $F.I.$ | $0$ | $0$ | $0$ |
| $\ell > 0$ | $\frac{\ell}{m}$ | $-\infty$ | $+\infty$ | $\frac{\ell}{m}$ | $0$ | $0$ |
| $\ell = -\infty$ | $-\infty$ | $-\infty$ | $+\infty$ | $+\infty$ | $F.I.$ | $F.I.$ |
| $\ell = +\infty$ | $+\infty$ | $+\infty$ | $-\infty$ | $-\infty$ | $F.I.$ | $F.I.$ |

forma indeterminata $[\frac{0}{0}] [\frac{\infty}{\infty}]$


### Limite di funzioni monotone

Avendo una funzione monotona (crescente o decrescente)

$f: A\subseteq \mathbb{R} \longrightarrow \mathbb{R}$

- avendo $\alpha = \sup(A)$ estremo superiore di A la funzione ha sempre un limite:
$$\lim_{x \to \alpha} f(x) = \begin{cases}\sup(f(A)) & \text{ se f è crescente}\\
\inf(f(A)) & \text{ se f è decrescente}
\end{cases}$$
- avendo $\alpha = \inf(A)$ estremo superiore di A la funzione ha sempre un limite:
$$\lim_{x \to \alpha} f(x) = \begin{cases}\inf(f(A)) & \text{ se f è crescente}\\
\sup(f(A)) & \text{ se f è decrescente}
\end{cases}$$

$f(A) =$ immagine di $A$


### Limite di funzioni periodiche

se $f$ è una funzione periodica non costante allora il limite

$$\lim_{x \to \pm\infty}f(x) \text{ non esiste}$$

### Limite del valore assoluto

$$\lim_{x \to x_0}\vert f(x) \vert = \vert \ell \vert$$


# Funzioni continue

Data una funzione:

$$f: A \subseteq \mathbb{R} \longrightarrow \mathbb{R}$$

- Se $x_0 \in A$ è un punto di accumulazione per A allora la funzione è continua in $x_0$
- Se $x_0 \in A$ è un punto isolato di A allora la funzione è continua in $x_0$
- Se esistono il limite destro e il limite sinistro i loro risultati sono entrambi uguali al valore di f in quel punto, allora la funzione è continua in $x_0$ .
	$$\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = f(x_0)$$

In generale $f$ è una funzione continua se è continua in **ogni punto del suo dominio**.

## Operazioni tra funzioni continue

Date due funzioni continue $f$ e $g$ allora:

- $f + g =$ funzione continua
- $f \cdot g =$ funzione continua
- $\frac{f}{g} =$ funzione continua
- $\vert f\vert =$ funzione continua
- $f \circ g =$ funzione continua
	- Se il valore del limite di $g$ è fuori dal dominio di $f$ allora si può usare il cambio di variabili
	$$\lim_{x \to x_0}f(g(x)) = \lim_{t \to l}f(t)$$

		Es.

	$$\lim_{x \to 0}\log(\frac{1}{x}) = \lim_{t \to +\infty}\log(t)$$

- $f^{-1}$ è continua se $f$ è strettamente monotona e definita in un intervallo $I$

### Continuità di funzioni elementari

- Potenza: $x^\alpha$ continua
- Esponenziale: $a^x$ continua
- Logaritmo: $\log_a(x)$ continua
- Trigonometriche: $\cos(x)$ continua
- Trigonometriche inverse: $\arctan(x)$ continua

Casi particolari
- La funzione continua non è continua in $x_0=0$
- le funzioni definite a tratti vanno analizzate caso per caso (controllando il punto di "giunzione").

## Teoremi delle funzioni continue

### Teorema di Bolzano o degli zeri di una funzione continua

Una Funzione continua definita in un intervallo $[a , b]$ con $a < b$ .
Se supponiamo che $f(a)$ e $f(b)$ siano di segno opposto allora esiste **almeno** un punto $c$ per cui $f(c) = 0$ , Quindi la funzione passa per forza per $y = 0$ .

![](https://i.ibb.co/d5yY5yH/bolzano.png)

### Teorema dei valori intermedi

Avendo una funzione continua che va da $[a,b] \longrightarrow \mathbb{R}$
con $a < b$ allora l'immagine di $f$ è anch'essa un intervallo, ed $f$ assume tutti i valori in quel intervallo.

### Teorema di Weierstrass

Se una funzione $f$ è continua in un insieme $A$ chiuso e limitato, allora la funzione assume un minimo ed un massimo in $A$.

### Mostrare che una funzione ha almeno uno zero

per dimostrare che una funzione possiede almeno uno zero si può utilizzare il teorema degli zeri di una funzione continua:

$f(x) = x^3+2x^2+x+1$

la funzione è continua in tutto $\mathbb{R}$

calcoliamo il limite agli estremi della funzione:

$$\lim_{x \to +\infty}f(x) = +\infty$$

$$\lim_{x \to -\infty}f(x) = -\infty$$

Quindi abbiamo sicuramente un punto negativo $a$ e un punto positivo $b$
Per il teorema degli zeri di una funzioni continua allora abbiamo sicuramente che la funzione ha almeno uno zero.

## Limiti notevoli

- $\lim_{x \to 0} \frac{\sin(x)}{x} = 1 \hspace{5mm}$ ( $x$ espresso in radianti)

- $\lim_{x \to 0} \frac{1 - \cos(x)}{x^2} = \frac{1}{2}$

- $\lim_{x \to 0} \frac{a^x-1}{x} = \ln a$

- $\lim_{x \to \pm \infty}(1+\frac{\alpha}{x})^x = e^\alpha$

- $\lim_{x \to 0}(1+x)^\frac{1}{x} = e$

- $\lim_{x \to +\infty} \frac{log(x)}{x} = 0$

- $\lim_{x \to + \infty} \frac{log_a x^\beta}{x^p} = 0 \hspace{5mm}$ con $a >0 \land a \neq 1, \beta \in \mathbb{R}, p > 0$

- $\lim_{x \to 0^+} =x^p log_ax^\beta = 0$

- $\lim_{x \to +\infty} \frac{a^x}{x^p} = +\infty$


# Derivate

## rapporto incrementale

avendo una funzione:

$f: A \subseteq \mathbb{R} \longrightarrow \mathbb{R}$

![](https://i.ibb.co/wp2LmNs/rapp-incr.png)

si dice rapporto incrementale di $f$ in $x_0$ con incremento $x-x_0$ la funzione 
$$r(x) = \frac{f(x)-f(x_0)}{x-x_{o}}$$

**Il rapporto incrementale rappresenta il coefficiente angolare della retta secante passante per A e B**

La **derivata** è il limite per $x$ che tende a $x_0$ di $r(x)$ :

$$f'(x_0) = \lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0}$$

Una forma analoga è 

$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0+h)-f(x_0)}{h}$$

con $h = x-x_0$

![](https://i.ibb.co/MZXCjkb/derivata.png)

Man mano che i valori di $x$ si avvicinano a $x_0$ le varie secanti che si generano si trasformano in una tangente nel punto $x_0$.

**la derivata rappresenta il coefficiente angolare della tangente passante per B**

La derivata di una funzione si può indicare come:
- $f'(x_0)$
- $\frac{df}{dx}$
- $D(f(x))$

### Equazione della retta tangente

una retta generica è definita come $y=mx + q$

nel caso della tangente abbiamo che:

$m = f'(x_0)$
$x = (x-x_0)$
$q = f(x_0)$

Quindi l'equazione della retta tangente è

$$y = f'(x_0) (x-x_0) + f(x_0)$$

### Teorema della derivabilità di un punto

La funzione è derivabile in un punto $c$ se esistono finite e uguali la sua derivata destra e sinistra

$$\lim_{h \to 0^+} \frac{f(x_0 + h)-f(x_0)}{h} = d$$

$$\lim_{h \to 0^-} \frac{f(x_0 + h)-f(x_0)}{h} = s$$

se $s = d$ allora la funzione è derivabile in $x_0$

### Teorema della continuità di funzioni derivabili

Se $f$ è derivabile in un punto $x_0$ allora $f$ è anche continua in $x_0$

**non vale però il contrario**: se $f$ è continua in $x_0$ non è detto che sia anche derivabile.

## Derivate di funzioni elementari (derivate fondamentali)

|nome| funzione | derivata |
|--|--|--|
| costante | $y = k$ | $y' = 0$ |
| identità | $y = x$ | $y' = 1$ |
| potenza | $y = x^\alpha$ | $y' = \alpha x^{\alpha-1}$ |
| radice quadrata | $y = \sqrt{x}$ | $y' = \frac{1}{2\sqrt{x}}$ |
| valore assoluto | $y =\vert x \vert$ | $$y'\begin{cases} 1 & \text{se }x > 0 \\ -1 & \text{se } x < 0 \end{cases}$$ |
| seno | $y = \sin x$ | $y' = \cos x$ |
| coseno | $y = \cos x$ | $y' = -\sin x$ |
| esponenziale | $y = a^x$ | $y' = a^x \cdot \ln a$ |
| esponenziale $e$ | $y = e^x$ | $y' = e^x$ |
| logaritmo | $y = \log_ax$ | $y' = \frac{1}{x}\cdot \log_ae$ |
| logaritmo naturale | $y = \ln x$ | $y' = \frac{1}{x}$ |
| tangente | $y = \tan x$ | $y' = \frac{1}{\cos^2x} = 1 + \tan^2x$ |
| cotangente | $y = \cot x$ | $y' = -\frac{1}{\sin^2x} = - 1 - \cot^2x$ |
| arcoseno | $y = \arcsin x$ | $y' = \frac{1}{\sqrt{1-x^2}}$ |
| arcocoseno | $y = \arccos x$ | $y' = -\frac{1}{\sqrt{1-x^2}}$ |
| arcotangente | $y = \arctan x$ | $y' = \frac{1}{1+x^2}$ |
| arcocotangente | $y = \text{arccot } x$ | $y' = -\frac{1}{1+x^2}$ |
| seno iperbolico | $y = \sinh x$ | $y' = \cosh x$ |
| coseno iperbolico | $y = \cosh x$ | $y' = \sinh x$ |


## Algebra delle derivate
Avendo due funzioni derivabili $f$ e $g$

### Derivata della somma

$$D(f + g) = f' + g'$$

### Derivata del prodotto

$$D(f \cdot g) = f' \cdot g + f \cdot g'$$

### Derivata del rapporto

$$D\left( \frac{f}{g}\right) = \frac{f' \cdot g - f \cdot g'}{g^2}$$

### Derivata della funzione composta

$$D\left( f \circ g\right) = D\left( f(g(x))\right) = f'(g(x)) \cdot g'(x)$$

### Derivata della funzione inversa

$$D\left( f^{-1}\right) =\frac{1}{f'}$$


## Massimi, minimi e flessi

Se abbiamo una funzione $f$ derivabile in $x_0$ possiamo capire l'andamento della funzione in quel punto grazie alla derivata:

- Se $f'(x_0) > 0$ allora la funzione è strettamente crescente in quel punto
- Se $f'(x_0) < 0$ allora la funzione è strettamente decrescente in quel punto
- Se $f'(x_0) = 0$ (e la funzione non è costante attorno a quel punto) allora $x_0$ è un **punto stazionario**

### Punti stazionari

Un punto stazionario può essere:

1. Un massimo 
2. Un minimo
3. Un flesso a tangente orizzontale (crescente)
4. Un flesso a tangente orizzontale (decrescente)

I vari casi si possono riconoscere controllando l'intorno di $x_0$ tramite lo studio del segno della derivata :

1. Se a sinistra di $x_0$ la funzione è crescente mentre a destra è decrescente allora si tratta di un massimo relativo
2. Se a sinistra di $x_0$ la funzione è decrescente mentre a destra è crescente allora si tratta di un minimo relativo
3. Se a sinistra e a destra di $x_0$ è crescente allora si tratta di un flesso a tangente orizzontale (crescente)
4. Se a sinistra e a destra di $x_0$ è decrescente allora si tratta di un flesso a tangente orizzontale (decrescente)


## Asintoti
Gli asintoti sono delle rette in cui la funzione si avvicina indefinitamente.

### Asintoto verticale

Siamo in presenza di un asintoto verticale di equazione $x = x_0$ quando:

$$\lim_{x \to x_0^-} f(x) = \pm\infty$$

$$\text{oppure}$$

$$\lim_{x \to x_0^+} f(x) = \pm\infty$$

### Asintoto orizzontale

Siamo in presenza di un asintoto orizzontale di equazione $y = q$ quando:

$$\lim_{x \to +\infty} f(x) = q$$

$$\text{oppure}$$

$$\lim_{x \to -\infty} f(x) = q$$

### Asintoto obliquo

Siamo in presenza di un asintoto obliquo di equazione $y = mx + q$ quando:

1. non deve esistere l'asintoto orizzontale

$$\lim_{x \to \pm\infty} f(x) \neq \pm \infty$$

2. deve esistere il coefficiente angolare (finito e diverso da $0$ )

$$m = \lim_{x \to +\infty} \frac{f(x)}{x}$$

3. trovo l'intercetta

$$q = \lim_{x \to +\infty} f(x)-mx$$


## Teoremi delle funzioni derivabili

### Teorema di Lagrange

Avendo una funzione continua definita in un intervallo $[a,b]$ e derivabile in $]a,b[$ allora esiste un punto $c$ appartenente all'intervallo tale che:

$$f'(c) = \frac{f(b)- f(a)}{b-a}$$

Cioè esiste un punto nella funzione in cui la tangente di quel punto ha la stessa pendenza della retta passante per $\overline{ab}$

![](https://i.ibb.co/48DZrCY/lagrange.png)

### Teorema di Rolle

Avendo una funzione continua definita in un intervallo $[a,b]$ e derivabile in $]a,b[$ . Se $f(a) = f(b)$ allora esiste almeno un punto $c$ tale che $f'(c) = 0$

### Teoremi minori

- Le funzioni a derivata nulla sono funzioni costante

	Se $f'(x) = 0$ allora $f(x)$ = q 
	
- Le funzioni che hanno la stessa derivata differiscono di una costante

	Se $f'(x) = g'(x)$ allora $f(x) = g(x) + q$
	
- Funzioni con derivata con segno costante

	Se $f'(x) > 0 \forall x \in ]a,b[$ allora f è strettamente crescente
	
	Se $f'(x) < 0 \forall x \in ]a,b[$ allora f è strettamente decrescente


## Esercizio importante

Dire se la seguente funzione è derivabile in $x_0 = 0$

$$f(x) = \begin{cases}
x^2\sin(\frac{1}{x}) & \text{se } x \neq 0\\
0 & \text{se } n = 0
\end{cases}$$

Intanto la funzione è continua e quindi **può** essere derivabile

$$f'(x) = \begin{cases}
2x\sin(\frac{1}{x}) + x^2 \cos(\frac{1}{x}) \cdot (-\frac{1}{x^2}) & \text{se } x \neq 0\\
0 & \text{se } n = 0
\end{cases}
$$

$$ = \begin{cases}
2x\sin(\frac{1}{x}) - \cos(\frac{1}{x}) & \text{se } x \neq 0\\
0 & \text{se } n = 0
\end{cases} $$


notiamo che facendo il limite per x tendente a 0 da destra non esiste un valore definito:

$$\lim_{x \to 0^+}2x \sin(\frac{1}{x})-\cos(\frac{1}{x}) = \nexists$$

perche abbiamo che il coseno ed il seno che vanno a + infinito oscillano tra $[-1; 1]$

In questi casi dobbiamo andare a calcolare il limite del rapporto incrementale:

$$\lim_{x \to x_0}\frac{f(x) - f(x_0)}{x-x_0} = $$

$$\lim_{x \to 0}\frac{x^{\cancel{2}}  \sin(\frac{1}{x})-0}{\cancel{x}-0} = $$

$$\lim_{x \to 0} x  \sin(\frac{1}{x}) = 0$$

Quindi la funzione è derivabile in x_0, ma $f'(x)$ non è una funzione continua perché $\lim_{x \to 0}f'(x) \neq f'(0)$


## Teorema di de l'Hopital

Avendo due funzioni $f,g$ derivabili

Se facendo il limite del rapporto troviamo una forma di indecisione di tipo: $[\frac{0}{0}]$ oppure $[\frac{\infty}{\infty}]$ allora il valore del limite sarà uguale al limite del rapporto delle due funzioni derivate.


$$lim_{x \to x_0} \frac{f(x)}{g(x)} = \left[\frac{0}{0}\right] \lor \left[\frac{\infty}{\infty}\right]$$

Se 

$$lim_{x \to x_0 }\frac{f'(x)}{g'(x)} = \ell$$

allora

$$lim_{x \to x_0} \frac{f(x)}{g(x)} = \ell$$

NB Questo metodo non funzione se $\ell$ non esiste (può essere però $\pm \infty$)

## Derivata di ordine superiore al primo

una funzione $f:A \longrightarrow \mathbb{R}$ si dice derivabile due volte se $f$ è derivabile in $A$ e $f'$ è derivabile in $A$

la derivata seconda si indica come: $f''(x)$

Nello studio di una funzione la derivata seconda rappresenta la **concavità della funzione**.

### Concavità della funzione

Se prendiamo in considerazione un intervallo di una funzione e prendiamo due punti $x_1, x_2$ in questo intervallo con $x_1 < x_2$ e tracciamo la retta secante passante per questi due punti, se la funzione sta sopra questa retta secante allora la funzione è **concava** (in quel intervallo).

![](https://i.ibb.co/6HwZ2JJ/funz-concava.png)

Se invece la funzione sta sotto la retta secante allora la funzione è **convessa** (in quel intervallo)

![](https://i.ibb.co/DWLpxFR/funz-convessa.png)


Utilizzando la derivata seconda possiamo dire che:

- Se $f''(x) \geq 0$ allora $f$ è convessa
- Se $f''(x) \leq 0$ allora $f$ è concava

Mentre con le proprietà locali (in un punto $x_0$ ) utilizzando la tangente $t(x)$ possiamo dire che:
- $f$ è convessa in $x_0$ se la funzione $f(x)\geq t(x)$
- $f$ è concava in $x_0$ se la funzione $f(x)\leq t(x)$

l'equazione della retta tangente $t(x)$ è: $f'(x_0)(x-x_0) + f(x_0)$

Abbiamo un **punto di flesso** (a tangente obliqua) cioè un punto in cui la funzione è continua e in cui la concavità cambia se:
- $f''(x_0) = 0$
- se la funzione da una parte è concava e dall'altra è convessa


## Polinomio di Taylor

Avendo una funzione $f$ derivabile $n$ volte in un punto $x_0$, Si chiama **polinomio di Taylor** di ordine $n$ il seguente polinomio:

$$T_{n,x_0} = \frac{f(x_0)}{0!} + \frac{f'(x_0)}{1!} \cdot (x-x_0) + \frac{f''(x_0)}{2!} \cdot (x-x_0)^2 + ... + \frac{f^{(n)}(x_0)}{n!} \cdot (x-x_0)^n$$

Quando $x_0 = 0$ viene chiamato **Polinomio di McLaurin**.


Serve a rappresentare una funzione in un punto con una serie di termini dipendenti dalle derivate della funzione in quel punto

### Teorema di Taylor-Peano

Avendo una funzione derivabile almeno $n-a$ volte in un intervallo $]a,b[$ e derivabile almeno $n$ volte in $x_0$.

Sia $W_n(x-x_0) = f(x) - T_{n,x_0}(x)$ abbiamo che 

$$lim_{x \to x_0}\frac{w_n(x-x_0)}{(x-x_0)^n} = 0$$

In pratica questo teorema dice che più si aumenta il grado di $n$ la precisione dell'approssimazione aumenta.

resto in forma Peano: $o(x-x_0)^n)$

### Teorema di Taylor-Lagrange

Avendo $f$ derivabile $n+1$ volte e $f^{(n)}$ continua allora esiste almeno un punto $c$ tale che:

$$f(x) = T_{n,x_0}(x) + \frac{f^{(n+1)}c}{(n+1)!} \cdot (x-x_0)^{n+1}$$


# Infiniti e infinitesimi

## Funzioni infinitesime

Una funzione si dice infinitesima in un punto $x_0$ (Reale oppure infinito) se: 

$$\lim_{x \to x_0}f(x) = 0$$

due funzioni $f$ e $g$ sono **infinitesimi simultanei** in $x_0$ se:

 $$\lim_{x \to x_0}f(x) = 0 \hspace{7mm} \lim_{x \to x_0}g(x) = 0$$

### Ordine di infinitesimo

Avendo $f$ e $g$ infinitesimi simultanei in $x_0$ allora:

- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = \ell > 0$ allora $f$ e $g$ hanno lo **stesso ordine di infinitesimo**, si scrive $f=O(g)$ " $f$ è o grande di $g$ "
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = 0$ allora $f$ ha ordine di infinitesimo superiore a $g$, si scrive $f=o(g)$ " $f$ è o piccolo di $g$ "
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = +\infty$ allora $f$ ha ordine di infinitesimo inferiore a $g$, si scrive $g=o(f)$ " $g$ è o piccolo di $f$ "
- Se il limite non esiste allora le due funzioni sono **infinitesimi non confrontabili**

### Principio di sostituzione degli infinitesimi

Avendo il limite di una funzione del tipo:

$$\lim_{x \to x_0} \frac{f_1(x) + f_2(x)}{g_1(x) + g_2(x)}$$

Se tutte le funzioni sono infinitesimi simultanei, posso tenere solo se funzioni di **ordine inferiore**, quindi quel limite equivale a:

$$\lim_{x \to x_0} \frac{f_1(x)}{g_1(x)}$$

## Funzioni infinite

Una funzione si dice infinita in un punto $x_0$ (Reale oppure infinito) se: 

$$\lim_{x \to x_0}f(x) = \infty$$

due funzioni $f$ e $g$ sono **infiniti simultanei** in $x_0$ se:

 $$\lim_{x \to x_0}f(x) = \infty \hspace{7mm} \lim_{x \to x_0}g(x) = \infty$$

### Ordine di infinito

Avendo $f$ e $g$ infiniti simultanei in $x_0$ allora:

- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = \ell > 0$ allora $f$ e $g$ hanno lo **stesso ordine di infinito**
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = +\infty$ allora $f$ ha ordine di infinito superiore a $g$
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = 0$ allora $f$ ha ordine di infinito inferiore a $g$
- Se il limite non esiste allora le due funzioni sono **infiniti non confrontabili**

### Principio di sostituzione degli infiniti

Avendo il limite di una funzione del tipo:

$$\lim_{x \to x_0} \frac{f_1(x) + f_2(x)}{g_1(x) + g_2(x)}$$

Se tutte le funzioni sono infiniti simultanei, posso tenere solo se funzioni di **ordine superiore**, quindi quel limite equivale a:

$$\lim_{x \to x_0} \frac{f_1(x)}{g_1(x)}$$


# Serie

## Successioni

Una successione è una funzione:
$$a: A\subseteq \mathbb{N} \longrightarrow \mathbb{R}$$

$$n \longmapsto a_n \in \mathbb{R}$$

L'insieme $A$ deve essere infinito

Una successione si indica con  $(a_n)$

Si dice **sottosuccessione** una successione su un insieme ancora più ristretto della successione di riferimento (quindi una **restrizione**), che rimane comunque infinita.

### Limite della successione

- Se $\lim_{n\to +\infty}a_n = \ell$ allora la successione si dice **convergente**
- Se $\lim_{n\to +\infty}a_n = \pm \infty$ allora la successione si dice **divergente**
- Se $\lim_{n\to +\infty}a_n = \nexists$ allora la successione si dice **indeterminata**

### Teorema

Se $a_n$ è una successione monotona allora il limite di $a_n$ esiste

### Legame tra funzioni e successioni

$$\lim_{x \to + \infty}f(x) = \ell \implies \lim_{n \to + \infty}a_n = \ell$$

però se:

$$\lim_{x \to + \infty}f(x) = \nexists \text{ non si può dire nulla della successione }$$

## Serie

data una successione $(a_n)$ chiamiamo successione delle somme parziali la successione $(s_n)$ data da $s_n = a_1 + a_2 +...+ a_n$ mentre chiamiamo **serie** la somma di tutti gli elementi della successione $(a_n)$

$$\sum_{n=0}^{+\infty}a_n$$

### Carattere della serie

- Se $\sum_{n=0}^{+\infty}a_n = \ell \in \mathbb{R}$ allora la serie è **convergente**
- Se $\sum_{n=0}^{+\infty}a_n = \pm \infty$ allora la serie è **divergente**
- Se $\lim_{n \to \infty}s_n = \nexists$ allora la serie è **indeterminata**

### Serie geometrica

Una serie geometrica è definita come

$$q_n = q^n \text{ con } q \neq 0$$

la sua somma parziale è definita come:

$$s_n = \frac{1-q^n}{1-q}$$

Quindi la serie sarà:

$$\sum_{n=0}^{+\infty}q^n$$


In base al valore di q possiamo determinare il carattere della serie geometrica:

- se $-1<q<1$ allora la serie è data da $\frac{1}{1-q}$
- se $q\geq 1$ allora la serie è divergente
- se $q\leq -1$ allora la serie è indeterminata

### Serie a termini di segno costante

è una serie in cui tutti i termini hanno lo stesso segno.

Una serie di questo tipo non può essere indeterminata!

### Teorema 

Se una serie è convergente allora 

$$\lim a_n = 0$$

non vale però il contrario

### Algebra delle serie

1. Se abbiamo due serie **convergenti** 

	$$\sum a_n = \ell \hspace{10mm}\sum b_n = m$$

	Abbiamo che

	$$\sum \lambda a_n + \beta b_n = \lambda\ell + \beta m$$

	con $\lambda$ e $\beta$ numeri reali

2. Se abbiamo due serie **divergenti** 

	$$\sum a_n = +\infty \hspace{10mm}\sum b_n = +\infty$$
	
	Abbiamo che 
	$$\sum a_n + b_n = +\infty$$
	
	lo stesso vale per $-\infty$

3. In generale la somma tra una serie divergente e una convergente risulta in una serie divergente.

### Teorema del confronto

Avendo due serie a termini positivi

$$\sum a_n \hspace{10mm}\sum b_n$$

tali che $a_n \leq b_n$ abbiamo che: 

- Se $\sum b_n$ converge anche l'altra converge
- Se $\sum a_n$ diverge anche l'altra diverge


### Serie armonica

La serie armonica è definita:

$$\sum_{n=1}^{+\infty}\frac{1}{n}$$

Ed è una serie che diverge

#### Serie armonica generalizzata

$$\sum_{n=1}^{+\infty}\frac{1}{n^\alpha}$$

Questa serie:

- **converge** se $\alpha > 1$
- **diverge** se $0<\alpha\leq1$

### Criteri di convergenza

avendo una serie di termini positivi

#### Criterio del rapporto

$$\lim_{n\to \infty}\frac{a_n + 1}{a_n} = \ell$$

Abbiamo che:

- Se $\ell < 1$ la serie converge
- Se $\ell > 1$ la serie divergente
- Se $\ell = 1$ questo criterio non vale

#### Criterio della radice

$$\lim_{n\to \infty}\sqrt[n]{a_n} = \ell$$

Abbiamo che:

- Se $\ell < 1$ la serie converge
- Se $\ell > 1$ la serie divergente
- Se $\ell = 1$ questo criterio non vale

### Serie assolutamente convergente

Se la sommatoria del valore assoluto degli elementi è convergente (serie assolutamente convergente) allora anche la serie normale è convergente

$$\sum |a_n| \text{ convergente} \implies \sum a_n \text{ convergente}$$

### Criterio di Leibniz

Avendo una serie di segno alterno se

$$\lim_{n \to +\infty}a_n = 0 \hspace{5mm}\land \hspace{5mm} |a_{n+1}| < |a_n|$$

allora la serie è convergente


# Integrali

L'integrale è l'operazione inversa della derivata

![](https://i.ibb.co/8dNqMMc/int-der.png)

$$\int f(x) dx = F(x) + c$$

- $\int$ simbolo di integrale
- $f(x)$ funzione integranda
- $F(x)$ Funzione primitiva (se $c=0$ si chiama funzione primitiva fondamentale)
- $c$ costante

Si legge **integrale indefinito** e rappresenta l'insieme di tutte le primitive della funzione $f$

Se una funzione è continua in un intervallo allora è anche integrabile in quel intervallo.

## Algebra degli integrali

### Prima proprietà di linearità

$$\int [f(x) + g(x)] dx = \int f(x) dx + \int g(x) dx$$

### Seconda proprietà di linearità

$$\int k f(x)  dx = k \int f(x) dx$$


## Integrali immediati

|funzione | primitiva |
|--|--|
| $\int k dx$ | $kx+ c$ |
| $\int x^\alpha dx$ | $\frac{x^{\alpha + 1}}{\alpha + 1}  + c$ |
| $\int x^{-1} dx$ / $\int \frac{1}{x}$ | $\ln \vert x \vert  + c$|
| $\int e^x dx$ | $e^x  + c$ |
| $\int \sin x dx$ | $-\cos x  + c$ |
| $\int \cos x dx$ | $\sin x  + c$ |
| $\int \frac{1}{\cos^2 x} dx$ | $\tan x  + c$ |
| $\int \frac{1}{\sin^2 x} dx$ | $-\cot x  + c$ |
| $\int \frac{1}{\sqrt{1-x^2}} dx$ | $\arcsin x  + c$ |
| $\int -\frac{1}{\sqrt{1-x^2}} dx$ | $\arccos x  + c$ |
| $\int \frac{1}{1+x^2} dx$ | $\arctan x  + c$ |

### Integrazione di funzioni composte

Quando l'integranda è una funzione in cui appare anche la sua derivata allora è sufficiente integrare la funzione originale senza considerare la derivata

$$\int f^\alpha(x) \cdot f'(x) dx = \frac{f^{\alpha+1}}{\alpha +1} +c$$

$$\int \frac{f'(x)}{f(x)}) dx = \ln \vert f(x) \vert + c$$


## Integrazione per parti

$$\int f'(x) \cdot g(x) dx = f(x)g(x) - \int g'(x) f(x) dx$$

Quando si incontra un integrale da risolvere col metodo per parti è conveniente scegliere **f(x)** la funzione che conviene **integrare** mentre **g(x)** la funzione che conviene **derivare**


## Integrazione per sostituzione

A volte quando la funzione all'interno dell'integrale è complessa è conveniente sostituire dei termini (spessi si tratta della radice)

Nella fase di sostituzione bisogna anche trovare il nuovo valore del differenziale dx.

Es.

$$\int \frac{x}{\sqrt{x-1}}dx$$

Sostituisco $\sqrt{x-1}$ con t e di conseguenza trovo il valore di x e il valore di dx:

$$\sqrt{x-1} = t \hspace{5mm} x = t^2 +1 \hspace{5mm} \text{ derivando } \to dx = 2t dt$$

Sostituendo trovo che:

$$\int \frac{t^2+1}{\cancel{t}}2\cancel{t}dt$$

$$\int (t^2+1) \cdot 2dt$$

$$2(\frac{t^3}{3}+t) $$

$$\frac{2}{3}\sqrt{(x-1)^3} + 2\sqrt{x-1} + c$$

## Integrazione di funzioni fratte

Risoluzione di integrali nella forma:

$$\int \frac{N(x)}{D(x)}$$

integrali di base

- $\int \frac{1}{x-a}dx = \ln|x-a| + c$
- $\int \frac{1}{(x-a)^k}dx = \frac{1}{-K+1}\cdot (x-a)^{-k+1} + c$
- $\int \frac{1}{x^2-a^2}dx = \frac{1}{a}\arctan(\frac{x}{a}) + c$

### grado(N(x)) < grado(D(x))

Caso in cui il grado del numeratore sia **minore** del grado del  denominatore, si utilizza il metodo con A e B:

Es.

$$\int \frac{3x+11}{x^2-x-6}dx$$

Si fattorizza il denominatore:

$x^2-x-6 = (x-3)(x+2)$

$$\frac{A}{x-3} + \frac{B}{x+2}$$

faccio il denominatore comune:

$$\frac{Ax+2A+Bx-3B}{(x-3)(x+2)}$$

raccolgo i coefficienti che hanno le x dello stesso grado

$$\frac{x(A+B) +2A-3B}{(x-3)(x+2)}$$

$$\begin{cases}
A+B = 3 \\
2A-3B = 11
\end{cases}$$

risolvendo il sistema ottengo
$$\begin{cases}
A = 4 \\
B = -1
\end{cases}$$

$$\int\frac{4}{x-3} + \frac{-1}{x+2}dx =$$

$$= 4\ln|x-3|-\ln|x+2| + c$$

### grado(N(x)) >= grado(D(x))

Caso in cui il grado del numeratore sia **maggiore o uguale** del grado del  denominatore, si svolge la divisione tra polinomi

Es.

$$\int \frac{x^3+2x^2+x+1}{x^2+1}$$

La divisione tra polinomi si svolge ripentendo i seguenti tre step fino a che il grado del dividendo non diventa minore di quello del divisore

![](https://i.ibb.co/hgrtKnf/div-polinomi.png)

ottenendo infine:

![](https://i.ibb.co/P6cXCH9/div-finale.png)

Quindi abbiamo:

$$\int \frac{x^3+2x^2+x+1}{x^2+1} = \int \frac{(x^2+1)(x+2) + (-1)}{x^2+1}$$

$$= \int (x+2) + \frac{-1}{x^2+1} = \frac{x^2}{2} + 2x - arctan(x) + c$$


## Integrali definiti

Gli integrali definiti calcolano l'integrale in un intervallo definito.

Si indica:

$$\int_{a}^{b}f(x)$$

Dove $a$ è l'estremo inferiore e $b$ è l'estremo superiore

Il significato geometrica dell'integrale definito è quello di trovare **l'area con segno** del trapezoide definito dalla funzione con l'asse x

### Teoremi

- Se $f$ è limitata e monotona allora è anche integrabile
- Se $f$ è continua allora è anche integrabile


### Integrale di una funzione positiva nell'intervallo

![](https://i.ibb.co/h9ZNzQT/posiv.png)

$T = \int_A^Bf(x)dx$

### Integrale di una funzione negativa nell'intervallo

![](https://i.ibb.co/pZjg8d3/nega.png)

$T = -\int_A^Bf(x)dx$


### Integrale di una funzione sia positiva che negativa nell'intervallo

![](https://i.ibb.co/MNBqMcM/mixed.png)

$T = T_1 + T_2 + T_3$

$T = \int_A^Bf(x)dx + (-\int_B^Cf(x)dx) + \int_C^Df(x)dx$

### Valore medio

Si può trovare il valore medio di una funzione:

$$f(z) = \frac{\int_a^b f(x)dx}{b-a}$$

![](https://i.ibb.co/gytW11R/image.png)

Il teorema della media dice che esiste un punto $z$ tale che l'area sottesa a  $f(x)$ è uguale all'area del rettangolo che ha per base $b−a$ e altezza $f(z)$ (chiamato _valore medio_)

### Teorema fondamentale del calcolo integrale

formula di *Leibniz-Newton*:

$$\int_a^b f(x) dx = F(b) - F(a)$$

Quindi il valore dell'integrale definito in un intervallo $[a,b]$ è dato da l'integrale indefinito in cui sostituisco al posto della $x$ l'estremo superiore $F(b)$ meno l'integrale indefinito in cui sostituisco l'estremo inferiore $F(a)$ .

Nota:

$$\int_a^b k dx = (b-a)k \hspace{5mm}\text{ con k costante}$$

Es.

$\int_0^2 x^2dx = \left[\frac{x^3}{3}\right]_0^2 =\frac{8}{3} - 0 = \frac{8}{3}$


### Area compresa tra due funzioni

Per trovare l'area compresa tra due funzioni $f$ e $g$ avendo $f>g$ :

$$\int_a^bf(x) - g(x) dx$$


## Integrali impropri

Si hanno degli integrali impropri quando negli estremi (o anche all'interno di essi) si presentano dei punti di non continuità (asintoti) oppure sono illimitati

- l'estremo $a$:

	$$\int_a^b f(x) dx = \lim_{z \to a^+}\int_z^b f(x) dx$$
- l'estremo $b$:
	
	$$\int_a^b f(x) dx = \lim_{z \to b^-}\int_a^z f(x) dx$$

- quando uno degli estremi è illimitato:

	$$\int_a^{+\infty} f(x) dx = \lim_{z \to +\infty} \int_a^z f(x) dx$$

	che **converge** quando il risultato è finito, **diverge** quando è infinito ed è **indeterminato** quando non è risolvibile.

- quando entrambi gli estremi sono illimitati:

	$$\int_{-\infty}^{+\infty} f(x) dx = \lim_{t \to -\infty} \int_t^0 f(x) dx +   \lim_{t \to +\infty} \int_0^t f(x) dx$$

	devono esistere entrambi i limiti finiti per essere integrabile la funzione.


### Capire quando una funzione è integrabile

#### asintoti orizzontali

Se si presentano funzioni del tipo:

$$\int_a^{+\infty}\frac{1}{x^p}$$

Abbiamo che:

- diverge se $p\leq 1$
- converge se $p>1$

è possibile utilizzare anche il **teorema del confronto**:

Avendo $0 \leq g(x) \leq f(x)$ con un estremo che va a $+\infty$

- Se $\int_a^{+\infty}f(x)dx$ converge $\implies$ $\int_a^{+\infty}f(x)dx$ converge
- Se $\int_a^{+\infty}g(x)dx$ diverge $\implies$ $\int_a^{+\infty}g(x)dx$ diverge

#### asintoti verticali

Se si presentano funzioni del tipo:

$$\int_0^{a}\frac{1}{x^p}$$

Abbiamo che:

- diverge se $p\geq 1$
- converge se $<1$

è possibile utilizzare anche il **teorema del confronto**:

Avendo $0 \leq g(x) \leq f(x)$ con un estremo che è punto di discontinuità

- Se $\int_{x_0}^{a}f(x)dx$ converge $\implies$ $\int_{x_0}^{a}g(x)dx$ converge
- Se $\int_{x_0}^{a}g(x)dx$ diverge $\implies$ $\int_{x_0}^{a}f(x)dx$ diverge
