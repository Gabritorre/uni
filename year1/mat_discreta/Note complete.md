
# Introduzione alla matematica discreta
Il significato di discreto deriva da discernere cioè separare, vengono appunto divise le grandezze in continue e discrete:

- Le grandezze continue hanno valori infinitesimi in $\mathbb{R}$, cioè tra due numeri sono presenti infiniti numeri. Es. il peso e l'altezza.
- Le grandezze discrete hanno valori finiti in $\mathbb{Z}$ o $\mathbb{N}$ , cioè tra due numeri è presente una quantità di numeri finita. Es. gli anni e la conta delle persone.

## Termini fondamentali

- **Enunciati**: Sono espressioni scritte in linguaggio naturale che esprimono le proprietà di oggetti matematici che devono essere dimostrati.
Possono essere di tre tipi:
	- Gli **enunciati esistenziali** sono enunciati che contengono la parola chiave "esiste" o "esistono". 
	
		Es. "Esiste un numero naturale n tale che n 2 = 441"
		
		Per dimostrare che è vero basta fare un esempio.
		
		Per dimostrare che è falso bisogna dimostrare che è falso per ogni valore
		nell'insieme di riferimento.
		
	- Gli **enunciati universali** sono enunciati che contengono la parola
	  chiave "per ogni".
	  
		Es. "Per ogni numero naturale n, n 2 + n `e un numero pari"
		
		Per dimostrare che è vero bisogna dimostrare che è vero per ogni valore
		nell'insieme di riferimento.
		
		Per dimostrare che è falso è sufficiente fare un contro-esempio.
	
	- Gli **enunciati composti** sono una sequenza di enunciati più semplici collegati tra loro da dei connettivi (and, or, not, if then).
	
- **Oggetti matematici**: Sono degli oggetti astratti che possono venire coinvolti in formule o essere assegnati ad una variabile. 

	Degli esempi sono: numeri, insiemi, matrici, sequenze, funzioni, oggetti
	geometrici ecc...

- **Valori di verità**: Esistono due valori al termine di una dimostrazione di un  enunciato, cioè **vero** o **falso**.

- **Teorema**: Un teorema è un **enunciato che risulta vero** dopo una dimostrazione.

- **Dimostrazione**: Sequenza di passaggi che servono per dimostrare se un enunciato è vero o falso.

- **Lemmi**: enunciato preparatorio (poco importante) che viene utilizzato per dimostrare un teorema più significativo.

- **Proposizione**: Teorema di minore importanza.

- **Corollario**: Conseguenza di un teorema.

## Esempi di matematica discreta

**Teorema**: Per ogni $n \in \mathbb{N}, n^2+n$ è pari.

**Dimostrazione**: Un numero naturale $n$ è pari se esiste $k \in \mathbb{N}$ tale che $n = 2k$

mentre un numero naturale $n$ è dispari se esiste $k \in \mathbb{N}$ tale che $n = 2k +1$.

Dobbiamo dimostrare che, dato $n \in \mathbb{N}$, esiste $k \in \mathbb{N}$ tale che $n^2 + n = 2k$.

Suddividiamo la prova in due casi:
1. $n$ è pari: sia $n = 2r$ allora $n^2 + n = 4r^2+2r$, raccogliendo il 2: $2(2r^2+r)$

	se $k = 2r^2+r$ ottengo $n^2+n = 2k$

3. $n$ è dispari: sia $n = 2r +1$ allora $n^2 + n = (2r+1)^2 + 2r+1$ che diventa 
	$4r^2+4r+1+2r+1 =$
	
	$= 4r^2+6r+2 =$
	
	$= 2(2r^2+3r+1)$
	
	sia $k = 2r^2 +3r + 1$ allora $n^2+n = 2k$
	
<hr>

**Enunciato**: dimostra che "per ogni $n \in \mathbb{N}, 4n - 1$ è un numero primo" è falso.

**Dimostrazione**: è sufficiente trovare un contro-esempio: come $n = 4$ perché $4 \cdot 4 - 1 = 15$ il numero $15$ non è un numero primo.

### Dimostrazione per assurdo
**Teorema**: "non esiste un numero primo massimo".

**Dimostrazione**: per assurdo assumiamo che esista un numero primo massimo chiamato $X$, quindi possiamo elencare gli elementi:

$2,3,5,7,11,...,X$

consideriamo $Y = (2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot ... \cdot X)+1$

poiché $Y>X$, $Y$ non è un numero primo, ma se dividiamo $Y$ per qualsiasi numero primo della lista otteniamo sempre resto di 1 pertanto $Y$ non è divisibile per nessun numero se non 1 e se stesso, il che significa che è un numero primo più grande di $X$, quindi il teorema è vero.


# Logica

La logica si occupa di studiare **proposizioni** che possono risultare vere o false.

## Predicati

Le proposizioni che assumono il valore vero o falso sono dette **predicati**.

$x+1$ non è un predicato perché ha un risultato $n \in \mathbb{N}$

$x>9$ è un predicato perché può essere vero o falso

Vero e falso sono definiti **valori di verità**.

I predicati possono mettere i relazione oggetti semplici come numeri oppure può utilizzare delle variabili appartenenti ad un dominio ( $\mathbb{R} ,\mathbb{N}$ ecc...)

La notazione $P(x)$ si legge "x che soddisfa la proprietà P".

$\exists x P(x)$ esprime il fatto che esiste almeno un oggetto a nel dominio considerato che verifica il predicato.

### Predicati composti

I predicati composti sono predicati che sono composti da più predicati semplici connessi tra loro da **connettivi logici** o **quantificatori**:

$$\text{5 è primo e 8 è pari}$$

I due predicati sono separati da un connettivo logico "e".

## Connettivi logici

Esistono tre principali connettivi logici:
| Simbolo | Inglese | Italiano | nome tecnico |
|--|--|--|--|
| $\lor$ | or | o/oppure | Disgiunzione |
| $\land$ | and | e | Congiunzione |
| $\lnot$ | not | non | Negazione |

![](https://i.ibb.co/vm30CFn/tabella-verit.png)

### Leggi di Morgan

Le leggi di Morgan dimostrano le seguenti uguaglianze (proposizioni logicamente equivalenti):

- $\lnot(P \lor Q) = (\lnot P) \land (\lnot Q)$
- $\lnot(P \land Q) = (\lnot P) \lor (\lnot Q)$

Si possono dimostrare attraverso le tabelle di verità.


## Implicazione

L'implicazione è un legame che si indica con il simbolo $\implies$ e avendo due predicati $P$ e $Q$ la scrittura $P \implies Q$ si legge "Se $P$ è vero allora $Q$ è vero"; questo legame si utilizza spesso nelle dimostrazioni.

$P(x) = x \geq 10$

$Q(x) = x > 5$

Per ogni numero naturale $n$ vale $P(n) \implies Q(n)$

Se $n$ soddisfa $P$ allora soddisfa anche $Q$

L'implicazione risulta falsa solo se $P$ è vero e $Q$ è falso.

![enter image description here](https://i.ibb.co/ccQy8W2/tab-implica.png)

Es.

$P$ = possedere la patente
$Q$ = avere raggiunto la maggiore età

- P è vera e Q è vera è uno scenario possibile in quanto per avere la patente bisogna essere maggiorenni.
- P è vera a Q è falsa non è uno scenario possibile perché per possedere la patente serve la maggiore età.
- P è falsa e Q è vera è uno scenario possibile perché posso essere maggiorenne e non avere la patente.
- P è falsa e Q è falsa è uno scenario possibile perché posso essere minorenne e non avere la patente.

Più in generale quando l'ipotesi ( $P$ ) è falsa allora la conseguenza ( $Q$ ) può essere qualsiasi cosa

È possibili scrivere l'implicazione anche come (sempre dimostrabili con le tavole di verità):

$$P \implies Q =$$

$$\lnot P \lor Q =$$

$$\lnot Q \implies \lnot P$$

## Doppia implicazione

La doppia implicazione detta "se e solo se" (rappresentata con $\iff$ ) è sempre un legame che unisce due predicati, ma in questo caso per essere vera devono essere vere due implicazioni:

1. $P \implies Q$ Condizione sufficiente
2. $Q \implies P$ Condizione necessaria

Quindi $P \iff Q$ si legge $P$ è vera se e solo se $Q$ è vera.

$$P \iff Q = (P \implies Q) \land (Q \implies P)$$


![](https://i.ibb.co/K9JS1WX/tabella-doppia-impl.png)

Es.

$P$ = oggi vado al mare
$Q$ = oggi c'è il sole

$P \iff Q$ oggi vado al mare se e solo se oggi c'è il sole

- P è vera e Q è vera è una situazione valida.
- P è vera e Q è falsa è una situazione non valida perchè per andare al mare deve esserci il sole.
- P è falsa e Q è vera è una situazione non valida perché dato che c'è il sole dovrei andare al mare.
- P è falsa e Q è falsa è una situazione valida perché non sono andato al mare ma non c'era nemmeno il sole.


### Priorità dei connettivi

I connettivi logici seguono una determinata priorità:

$$\lnot$$

$$\land$$

$$\lor$$

$$\implies$$

$$\iff$$

Per esempio l'espressione $\lnot P \land Q \lor R$ diventa $((\lnot P) \land Q) \lor R$

## Quantificatori

- $\forall$ si legge "per ogni" e si chiama **quantificatore universale**
	
	$\forall n \in \mathbb{N}, n^2 \text{ è pari}$
	
	per ogni n appartenente ai numeri naturali $n^2$ è un numero pari.
- $\exists$ si legge "esiste" e si chiama **quantificatore esistenziale**

	$\exists n \in \mathbb{N} : n^2 \text{ è pari}$
	
	Esiste un numero n appartenente ai numeri naturali il cui quadrato è pari.


# Insiemi

Un **insieme** è una collezione *non ordinata* di *elementi distinti*.

le entità di un insieme si chiamano **elementi**.

Gli insieme vengono rappresentati elencando gli elementi fra parentesi graffe:

$X = \lbrace 0,1,2,3,4\rbrace$

oppure come variabili che soddisfano dei predicati:

$X = \lbrace x \in D :P(x) \rbrace$

$P(x)$ è il **predicato** cioè una proprietà che x soddisfa per poter far parte dell'insieme

Es.

$W = \lbrace n \in \mathbb{N} : \text{n è multiplo di 11}\rbrace$

$P(x) =\text{n è multiplo di 11}$

Un insieme può essere ristretto:

- $\mathbb{R}^+ =$ formato solo da elementi positivi ( $>0$ )
- $\mathbb{R}^- =$ formato solo da elementi negativi( $<0$ )
- $\mathbb{R}^{\geq} =$ formato solo da elementi positivi compreso lo $0$ ( $\geq 0$ )

## Simboli

### Appartenenza

"elemento appartiene ad insieme" si indica con $\in$

$3 \in \lbrace 1,2,3,4\rbrace$

"elemento non appartiene ad insieme" si inca con $\notin$

$6 \notin \lbrace 1,2,3,4\rbrace$

### Cardinalità

La cardinalità indica il numero di elementi di un insieme. Si indica con $|A|$

Se la cardinalità è finita allora l'insieme è finito.

Se la cardinalità è infinita allora l'insieme è infinito.

$A = \lbrace 0,1,2,3,4\rbrace$

$|A| = 5$

### Coppie

Le coppie si rappresentano con le parentesi tonde che racchiudono gli elementi:

$(1,2)$

L'ordine è importante: $(1,2) \neq (2,1)$

$S = \lbrace (x,y) : x < y \rbrace$

l'insieme $S$ è formato da tutte le coppie in cui x è maggiore di y.

### Prodotto cartesiano

Il prodotto cartesiano rappresenta tutte le coppie formate dal primo elemento  che appartiene al primo insieme e il secondo elemento che appartiene al secondo elemento:

$X \times Y = \lbrace (x,y) : (x \in X) \land (y \in Y) \rbrace$

Se $X = Y$ allora $X \times Y = X^2$

Ogni elemento generato dal prodotto cartesiano di più insiemi viene chiamato **tupla**

## Insieme vuoto

L'insieme vuoto è un insieme che non contiene elementi, si indica con il simbolo $\emptyset$

la cardinalità di un insieme vuoto è $0$ ( $|\emptyset| = 0$ )

## Singleton

Il singleton è un insieme che contiene un solo elemento.

$A = {1}$

## Relazioni tra insiemi

### contenuto o uguale

La relazione contenuto o uguale si indica con $\subseteq$, si legge anche sottoinsieme:

$A \subseteq \mathbb{R}$ "A è sottoinsieme di $\mathbb{R}$ "

è possibile scrivere la stessa cosa con:

$\mathbb{R} \supseteq A$ " $\mathbb{R}$ contiene/è sovrainsieme di A"

## L'insieme delle parti

L'insieme delle parti si indica con $\mathcal{P}(A)$ e rappresenta l'insieme di tutti i possibili sottoinsiemi di $A$:

$A = \lbrace 0,1\rbrace$

 $\mathcal{P}(A) = \lbrace \emptyset,\lbrace 0 \rbrace,\lbrace 1\rbrace, \lbrace 0,1 \rbrace \rbrace$

la cardinalità di un  $\mathcal{P}(X)$ generico è:

$| \mathcal{P}(X) | = 2^{|X|}$

## Operazioni con gli insiemi

### Unione

Si indica con $\cup$ e rappresenta gli elementi che appartengono o all'insieme A o all'insieme B

$A \cup B = \lbrace x : (x \in A) \lor (x \in B)\rbrace$

$|A \cup B| = |A| + |B| - |A \cap B|$

### Intersezione

Si indica con $\cap$ e rappresenta gli elementi che appartengono contemporaneamente all'insieme A e B

$A \cap B = \lbrace x : (x \in A) \land (x \in B)\rbrace$

Se l'intersezione è insieme vuoto allora gli insiemi sono **disgiunti**

### Complementazione

Il complementare di un insieme A rappresentano gli elementi che non appartengono all'insieme A, viene indicato con $\overline{A}$.

Avendo $A \subset B$

Il complementare di A si indica come $B \setminus A = \lbrace x : (x \in B) \land (x \notin A) \rbrace$

### Differenza

Avendo due insieme $A$ e $B$
La differenza $A \setminus B$ prende gli elementi di A che non sono anche parte di B.

#### Differenza simmetrica

Si indica con $\Delta$ e prende l'unione di $A \setminus B$ e $B \setminus A$

$A \Delta B = (A \setminus B) \cup (B \setminus A)$

![](https://i.ibb.co/LJqLQqy/diff-simmetrica.png)

## Proprietà delle operazioni

Avendo $A,B,C \subset X$

### Idempotenza

- $A \cap B = A$ e $A \cup A = A$
- $A \cap \emptyset = \emptyset$ e $A \cup \emptyset = A$
- $A \cap X = A$ e $A \cup X = X$

### Assorbimento

- $A \cup (A \cap B) = A$
- $A \cap (A \cup B) = A$

### Commutativa

- $A \cup B = B \cup A$
- $A \cap B = B \cap A$

### Associativa

- $(A \cup B) \cup C = A \cup (B \cup C) = A \cup B \cup C$
- $(A \cap B) \cap C = A \cap (B \cap C) = A \cap B \cap C$

### Distributiva

- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

### Complementazione

- $A \cup \overline{A} = U$
- $A \cap \overline{A} = \emptyset$

### De Morgan

- $\overline{A \cup B} = \overline{A} \cap \overline{B}$
- $\overline{A \cap B} = \overline{A} \cup \overline{B}$


# Relazioni

Le **relazioni** sono dei confronti tra elementi di più insiemi, una relazione viene rappresentata con il simbolo $\mathcal{R}$ .

Una relazione binaria mette in relazione due elementi appartenenti a due insiemi, quindi $\mathcal{R} \subseteq A \times B$ .

Per rappresentare una relazione tra $a$ e $b$: $a \mathcal{R} b$

- Due elementi $x,y \in A$ si dicono **comparabili** se vale $x\mathcal{R}y$ oppure $y\mathcal{R}x$
- Due elementi $x,y \in A$ si dicono **incomparabili** se non vale né $x\mathcal{R}y$ né $y\mathcal{R}x$

## Proprietà delle relazioni

### Proprietà Riflessiva

mette in relazione $x$ con se stesso

$$(x , x) \in \mathcal{R}, \forall x \in A$$

Es.

$x = x$

$x \leq x$

### Proprietà irriflessiva

$x$ non può essere messo a confronto con se stesso.

$$(x , x) \notin \mathcal{R}, \forall x \in A$$

Es.

$x < x$

$x > x$

### Proprietà simmetrica

se la relazione vale per $x$ verso $y$ allora vale anche per $y$ verso $x$ .

$$\text{se }(x,y) \in \mathcal{R} \text{ allora } (y,x) \in \mathcal{R}, \forall x,y \in A$$

Es.

$x = y \implies y = x$

$x + y = k \implies y + x = k$


### Proprietà antisimmetrica

Se la relazione vale per $x$ verso $y$ ma **non** per $y$ verso $x$ .

$$\text{se }(x,y) \in \mathcal{R} \text{ allora } (y,x) \notin \mathcal{R}, \forall x \neq y \in A$$

Es.

$x > y$ , $x \geq y$

$x < y$ , $x \leq y$

### Proprietà transitiva

Se vale la relazione tra $x$ e $y$ e vale quella tra $y$ e $z$ allora vale anche per $x$ e $z$ .

$$\text{se }(x,y) \in \mathcal{R} \text{ e } (y,z) \in \mathcal{R} \text{ allora } (x,z) \in \mathcal{R}, \forall x,y,z \in A$$

Es.

$x > y \land y > z \implies x > z$


## Relazioni d'ordine parziale

Una relazione di dice d'ordine parziale se soddisfa le seguenti proprietà:
- Riflessiva
- Antisimmetrica
- Transitiva

Es. $\leq, \geq, \subseteq, \supseteq$

Se una relazione d'ordine parziale ed è confrontabile (per ogni coppia vale $x\mathcal{R}y \text{ oppure } y\mathcal{R}x$) si dice **relazione d'ordine totale**.

### Relazione d'ordine parziale stretta

Una relazione di dice d'ordine parziale stretta se soddisfa le seguenti proprietà:
- Irriflessiva
- Antisimmetrica
- Transitiva

Es. $<, >, \subset, \supset$


## Relazione di equivalenza

Una relazione di dice di equivalenza se soddisfa le seguenti proprietà:
- Riflessiva
- Simmetrica
- Transitiva

### Classi di equivalenza

Ogni relazione $\mathcal{R}$ su un insieme $A$ suddivide l'insieme in classi di equivalenza, viene indicato con $[a]_\mathcal{R}$ .

$$[a]_\mathcal{R} = \lbrace x \in A : a \mathcal{R}x \rbrace$$

cioè la classe di equivalenza è l'insieme degli elementi di x che soddisfano la relazione con $a$ .

- La classe di equivalenza non può essere vuota.
- L'unione di tutte le classi restituisce l'insieme $A$ .
- Tutte le classi sono disgiunte tra loro (non hanno intersezioni).


## Catene e anticatene

Una **catena** è un sottoinsieme si un insieme parzialmente ordinato, in cui gli elementi sono **confrontabili** a due a due:

Prendendo l'insieme dei Naturali con la relazione di minore che si scrive $(\mathbb{N}, <)$

Abbiamo una catena perché prendendo due numeri sono confrontabili tra loro:

$$0<1<2<3<4...$$

Una **anticatena** è un sottoinsieme si un insieme parzialmente ordinato, in cui gli elementi sono **inconfrontabili** a due a due:

Prendendo l'insieme dei Naturali con la relazione $r = "n_1 < n_2$ se $n_1$ è divisore di $n_2"$ che si scrive $(\mathbb{N}, r)$

Il sottoinsieme dei numeri primi maggiori di 3 forma una anticatena perché prendendo due elementi da questo sottoinsieme sono inconfrontabili dato che i numeri primi sono divisibili solo per 1 e per se stessi:

$$X = \lbrace3,5,7,11,..\rbrace$$

### Ordinamento ben fondato

Un ordinamento parziale si dice ben fondato se non ammette catene discendenti infinite, cioè nella forma

$$a_0 > a_1 > a_2 > ... > a_n > ...$$

l'ordinamento $(\mathbb{N}, \leq)$ è un ordinamento ben fondato perché ha un valore iniziale, cioè lo $0$ :

$$0\leq1\leq2\leq3...$$

Quindi prendendo una qualsiasi catana discendente non sarà mai infinita prima o poi raggiungerà lo $0$

$$...>5>4>3>2>1>0$$

La stessa cosa in $\mathbb{Z}$ non sarebbe ben fondato perché possiede valori negativi e quindi non è presente un valore minimo.



# Funzioni

Si dice funzione una relazione che associa ad ogni elemento di $x \in A$ uno ed un solo elemento $y \in B$

$A$ si dice **Dominio** della funzione e $B$ si dice **Codominio** della funzione.

l' $y$ che viene associata dalla $x$ si dice **immagine** di $x$

Una funzione viene scritta formalmente come

$$f: A \longrightarrow B$$

$$x \longmapsto y = f(x)$$

## Proprietà delle funzioni

- **Funzione iniettiva** se per ogni $y \in B$ esiste *al massimo* un elemento $x \in D$ [bisogna dimostrare che $f(x_1) = f(x_2) \implies x_1 = x_2$]
- **Funzione suriettiva** se per ogni $y \in B$ esiste *almeno* un elemento $x \in D$ [esiste elemento x tale che $y=f(x)$]
- **Funzione biunivoca** (o biiettiva)  se per ogni $y \in B$ esiste *un solo* un elemento $x \in D$. Quindi quando è sia iniettiva sia suriettiva.
	N.B. Se la cardinalità di $B$ e $D$ è diversa allora la funzione non potrà essere biettiva.

## Tipi di funzioni

### Funzione identità

è una funzione biettiva

$$f: A \longrightarrow A$$

$$x \longmapsto y = x$$

### Funzione inclusione

è una funzione iniettiva
Avendo $A\subseteq B$

$$f: A \longrightarrow B$$

$$x \longmapsto y = x$$

### Funzione pavimento ("floor")

indica il massimo intero minore di x

$$\lfloor x\rfloor: \mathbb{R} \longrightarrow \mathbb{Z}$$

$$x \longmapsto y = \max \lbrace v\in \mathbb{Z} : v \leq x \rbrace$$

Es. $\lfloor 1.5\rfloor = 1$, $\lfloor -2.5\rfloor = -3$

### Funzione soffitto ("ceiling")

indica il minimo intero maggiore di x

$$\lceil x\rceil: \mathbb{R} \longrightarrow \mathbb{Z}$$

$$x \longmapsto y = \min\lbrace v\in \mathbb{Z} : v \geq x \rbrace$$

Es. $\lceil 1.5\rceil = 2$, $\lceil -2.5\rceil = -2$

### Funzione composta

date due funzioni il codominio della prima coincide con il dominio della seconda. si indica con $f \circ g$

$f(x) = \sqrt{x}$

$D_f = [0; + \infty [$

$g(x) = \sqrt{1-x}$

$D_g = ]-\infty ; 1]$

- $h = g \circ f = g(f(x)) = \sqrt{1-\sqrt{x}}$

N.B. fare $f \circ g$ è diverso da $g \circ f$

### Funzione inversa

solo se la funzione è biettiva ammette l'esistenza di una sua inversa (è unica).
Si indica con $f^{-1}$

La funzione inversa è la legge che associa ad ogni punto y un unico punto x.

Es.
$f(x) = 3x$

Per trovare l'inverso isoliamo la x:

$\frac{y}{3} = x$

ora invertiamo la x con la y:

$y = \frac{x}{3} \rightarrow f^{-1}(x) = \frac{x}{3}$


## Cardinalità

La cardinalità di un insieme viene indicata con $\vert A\vert$ e rappresenta il numero di elementi di quel insieme.

solo se due insiemi hanno la stessa cardinalità (equipollenti o equipotenti) allora può esistere una funzione biettiva.

Se due insiemi hanno **cardinalità diverse** allora **non può esistere una funzione biettiva**.

### Insiemi infiniti

$\vert \mathbb{N} \vert  =\vert  \mathbb{Z} \vert$

$\vert \mathbb{N}\vert  = \vert \mathbb{Q} \vert$

$\vert \mathbb{N} \vert < \vert \mathbb{R} \vert$

Dato che la cardinalità di $\mathbb{N}$ non appartiene ai numeri naturali allora la cardinalità di $\mathbb{N}$ è detta **cardinalità numerabile** e viene indicata con $\aleph_0$.

Ogni insieme che ha la stessa cardinalità di $\mathbb{N}$ si dice **insieme numerabile**.

La cardinalità del continuo (l'insieme $\mathbb{R}$ ) viene indicata con $\mathfrak{c}$, abbiamo quindi che $\aleph_0 < \mathfrak{c}$ più precisamente $\mathfrak{c} =2^{\aleph_0}$


  
# Principio di induzione

Il principio di induzione è una tecnica di dimostrazione di una proprietà sui numeri naturali $\mathbb{N}$ .
Questa tecnica utilizza le leggi e le caratteristiche dei numeri naturali per dimostrare una proprietà per gli infiniti valori naturali.

Dovendo dimostrare una proprietà $P(x)$ la dimostrazione si basa su due casi:

- Dimostrare il **Il caso base**: cioè che $P(0)$ o più in generale la proprietà del numero naturale più piccolo considerato deve essere vero.
- Dimostrare il **passo induttivo**: si tratta di dimostrare che se $P(n)$ è vero allora anche $P(n+1)$ è vero per ogni $n \geq k$ (con $k$ generalmente uguale a 0).

## Esempi di dimostrazione

### Es 1
Traccia: dimostrare che per ogni numero naturale $n, n^3+5n$ è sempre un multiplo di $6$ .

La nostra proprietà è: $P(n): \text{"}n^3+5n \text{ è sempre multiplo di 6 }\text{"}$

Dimostrazione per induzione su $n$:

- caso base: $P(0) = 0^3 + 5 \cdot 0 = 0$ Lo $0$ è difatti un multiplo di $6$ quindi il caso base è verificato.
- passo induttivo:
	Sia $n \geq 0$, ipotizziamo che $P(n)$ sia vera (**ipotesi induttiva**) dimostriamo che anche $P(n+1)$ sia vera:
	Quindi dimostriamo che $(n+1)^3 + 5(n+1)$ sia un multiplo di 6
	$$(n + 1)^{3} + 5(n + 1)$$

	$$(n^{3} + 3n^{2} + 3n + 1) + 5n + 5$$

	$$n^{3} + 5n + 3n^{2} + 3n + 6$$
A questo punto sappiamo che $n^3+5n$ è un multiplo di $6$ per l'ipotesi induttiva: quindi scriviamo $n^3+5n$ come $6m$
	$$6m+3n^2+3n+6$$
Sappiamo inoltre che $6$ è un multiplo di $6$ . ci rimane solo da dimostrare che $3n^2+3n$ sia un multiplo di 6

$$3n(n+1)$$

Sicuramente $n(n+1)$ sarà un numero pari (pari * dispari = pari) quindi possiamo scriverlo come $2r$

$$3\cdot 2r = 6r$$

Abbiamo trovato quindi un altro multiplo di 6. Messo tutto insieme diventa:

$$6n+6r+6 = 6(n+r+1)$$

### Es 2
Traccia: dimostrare che la somma dei primi n dispari è uguale a $(n+1)^2$ .

Scritto in linguaggio matematico diventa:

$$\sum_{k=0}^{n}(2k+1) = (n+1)^2$$

Dimostrazione per induzione su $n$ .

- caso base:

$$\sum_{k=0}^{0}(2k+1) = 2 \cdot 0 + 1 = 1 \\
= \\
(0+1)^2 = 1$$

- passo induttivo:

Scriviamo la nostra ipotesi induttiva

$$\sum_{k=0}^{n}(2k+1) = (n+1)^2$$

Dimostriamo che è vera anche per $(n+1)$ :

$$\sum_{k=0}^{n+1}(2k+1) \text{ deve diventare: } ((n+1)+1)^2$$

Scriviamo:
$$\sum_{k=0}^{n+1}(2k+1)$$
come (nota il cambio sopra la sommatoria):

$$= \sum_{k=0}^{n}(2k+1) + (2(n+1)+1)$$

il primo pezzo:

$$\sum_{k=0}^{n}(2k+1)$$

sarà uguale a $(n+1)^2$ per ipotesi induttiva:

$$(n+1)^2 + 2(n+1)+1$$

È un quadrato perfetto che si può scrivere come:

$$((n+1)+1)^2$$

Quindi abbiamo dimostrato che è vera anche per $(n+1)$


## Principio di induzione completa

In alcune dimostrazione è più conveniente utilizzare il principio di induzione completa.
Rappresenta sempre una tecnica per dimostrare una proprietà dei numeri naturali ma con una differenza, la dimostrazione vuole che:

- Il caso base sia verificato
- Se la proprietà è vera **per ogni numero minore** $n$ allora deve valere anche per $n+1$.

Esempio

Dimostrare che per ogni $n \in \mathbb{N}$ con $n \geq 2$ è scomponibile in fattori primi.

Dimostrazione per induzione completa su $n$:

**caso base**: $n = 2$

$2 = 2$ dato che 2 è già un numero primo, il caso base è verificato.

**passo induttivo**:

supponiamo che tutti i valori compresi tra 2 e n siano scomponibili in fattori primi

Quindi scriviamo **l'ipotesi induttiva** come $\forall x : 2 \leq x \leq n,$ è scomponibile in fattori primi.

Vogliamo quindi dimostrare che anche $n+1$ è scomponibile in fattori primi

Ci sono due casi possibili:

1. $n+1$ è un numero primo, quindi la scomposizione è data dal numero stesso.
2. $n+1$ non è un numero primo, ma in questo caso esistono due numeri il cui prodotto restituisce $n+1$ : $n+1 = y \cdot z$
Ma $y$ e $z$ saranno compresi tra 2 e $n$ e di conseguenza per l'ipotesi induttiva sono scomponibili in fattori primi. Quindi anche il prodotto tra di loro restituirà un numero scomponibile in fattori primi, cioè $n+1$ .

# Ricorsione e sommatorie

## Funzioni ricorsive

Le funzioni ricorsive sono funzioni in cui nella loro definizione viene richiamata la funzione stessa.

$$2^n = \begin{cases}
1 & \text{se } n = 0 \\
2^{n-1}\cdot 2 & \text{se } n > 0
\end{cases}$$

Quindi se consideriamo $2^n$ come funzione abbiamo: $f(n) = 2^n$

$$f(n) = \begin{cases}
1 & \text{se } n = 0 \\
2 \cdot f(n-1) & \text{se } n > 0
\end{cases}$$

La prima riga del sistema rappresenta il **caso base** mentre la seconda il **passo induttivo**

### Dimostrazione

**caso base**: sia $n = 0$ allora $f(n) = 1$ e $2^0 = 1$ . Quindi il caso base è verificato.

**ipotesi induttiva** Assumo vero l'enunciato per $n - 1$ :

$$f(n-1) = 2^{n-1}$$

**passo induttivo**: Voglio dimostrare per $n$ , quindi che $f(n) = 2^n$ 

$$f(n) = 2 \cdot f(n-1)$$

$$= 2 \cdot2^{n-1} \text{ per ipotesi induttiva}$$

$$= 2^n$$

### Fattoriale

$f(n) = n!$

$$f(n) = \begin{cases}
1 & \text{se } n = 0 \\
n \cdot f(n-1) & \text{se } n > 0
\end{cases}$$

### Fibonacci

$1,1,2,3,5,8,13,...$

$f_n = f_{n-1} + f_{n-2}$

$$f_n = \begin{cases}
1 & \text{se } n = 0 \\
1 & \text{se } n = 1 \\
f_{n-1} + f_{n-2} & \text{se } n > 1
\end{cases}$$


## Sommatoria

Espressione scritta come:

$$\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$$

in cui $k$ rappresenta l'indice della sommatoria e $a_k$ è il termine generico

### Proprietà

- Associativa:

$$\sum_{k \in K}(a_k + b_k) = \sum_{k\in K}a_k + \sum_{k\in K}b_k$$

- Distributiva

$$\sum_{k\in K}(c \cdot a_k) = c \cdot \sum_{k\in K}a_k$$

- Commutativa

$$\sum_{k\in K}(a_k) =  \sum_{p(k) \in K}a_{p(k)}$$

### Fondere e spezzare le sommatorie

#### Fondere 

$$\sum_{k = 1}^{m}a_k + \sum_{k = m}^{n}a_k = a_m + \sum_{k = 1}^{n}a_k$$

#### Spezzare

$$\sum_{k = 1}^{n}a_k =  \sum_{k = 1}^{m}a_k + \sum_{k = m+1}^{n}a_k$$

### Somme notevoli

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

$$\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$$

$$\sum_{i=0}^{n} a^i = \frac{a^{n+1}-1}{a-1}$$


# Aritmetica modulare

## Monoide

**Monoide** un monoide è un insieme dotato un'operazione che:
- è **associativa**
- è dotata di un elemento neutro.

Si indica con (nome_insieme, operazione)

Es. ( $\mathbb{N} , +$ ) infatti la somma possiede la proprietà associativa e ha l'elemento neutro $0$ 

## Gruppo

**Gruppo**: è un monoide in cui tutti gli elementi ammettono l'inverso

Un gruppo si dice **abeliano** se l'operazione è anche **commutativa**

Es. ( $\mathbb{Z} , +$ ) infatti la somma possiede la proprietà associativa e commutativa, ha l'elemento neutro $0$ e ogni elemento dell'insieme è invertibile

### Proprietà dei gruppi

(viene utilizzato come esempio il prodotto come operazione del gruppo)

- l'elemento neutro è unico
- l'inverso di ogni elemento è unico
- $a \cdot b = a \cdot c \implies b = c$
- $(a\cdot b)^{-1} = a^{-1} \cdot a^{-1}$
- $(a^{-1})^{-1} = a$
- $a^m\cdot a^n = a^{m+n}$
- $(a^m)^n = a^{mn}$
- $(a \cdot b)^n = a^n \cdot b^n$ (solo se l'operazione è commutativa)


## Anelli
 
Un **anello** è un insieme in cui sono definite due operazioni in cui:

- l'insieme e una operazione rappresenta un gruppo abeliano
- l'altro operazione è associativa
- valgono le proprietà distributive

Si indica con (nome_insieme, operazione1, operazione2)

Un anello è commutativo se la seconda operazione è anche commutativa-

Es $(\mathbb{Z}, + , \cdot)$

## Campi

Un **campo** è un **anello** in cui ogni elemento è invertibile (tranne 0)

Es. $(\mathbb{Q}, +, \cdot)$

## Divisione euclidea

La divisione euclidea è composta da:
- $a$ *dividendo*
- $b$ *divisore*
- $q$ *quoziente*
- $r$ *resto*

Se $0\leq r <|b|$

allora esiste una unica coppia $q$ e $r$ tale che:

$$a = b\cdot q + r$$


### Operazione modulo

l'operazione **modulo** è un'operazione che restituisce il resto della divisione tra due numeri ( $a$ e $n$ )

l'insieme dei possibili resti viene indicato con $\mathbb{Z}_n$

$\mathbb{Z}_n = \lbrace 0,1,2,...,n-1\rbrace$

Es. $7 \mod 5 = 2$

#### Proprietà del modulo

- $(a+b) \mod n = ((a \mod n) + (b \mod n)) \mod n$
- $(a\cdot b) \mod n = ((a \mod n) \cdot (b \mod n)) \mod n$

### Congruenza

La congruenza è una **relazione di equivalenza**, si indica con $\equiv$ che vale se:

$a \equiv_nb \iff$ $(a \mod n)$ $= (b \mod n)$

da questa definizione possiamo dire che $a-b$ è un multiplo di $n$

Quindi se $a$ e $b$ hanno lo stesso resto

Es.

$12 \equiv_{10} 2, 5 \equiv_5 15$

Essendo la congruenza una relazione di equivalenza allora può essere suddivisa in classi di equivalenza:

$[a]_n = \lbrace b \in \mathbb{Z} : a \equiv_n b \rbrace$

Quindi tutti gli interi che divisi per n danno lo stesso resto di a diviso n.

Es. classi di equivalenza di $\equiv_3$

- $[0]_3 = \lbrace..., 3, 6, 9 ,... \rbrace$
- $[1]_3 = \lbrace..., 4, 7, 10 ,... \rbrace$
- $[2]_3 = \lbrace..., 5, 8, 11 ,... \rbrace$


## Criteri di divisibilità

### Divisibilità per 2

Un numero è divisibile per 2 se il numero è pari

### Divisibilità per 3

Un numero è divisibile per 3 se la somma delle cifre del numero è anch'essa divisibile per 3

### Divisibilità per 4

Un numero è divisibile per 4 se le ultime due cifre sono un multiplo di 4 oppure sono 00

### Divisibilità per 5

Un numero è divisibile per 5 se l'ultima cifra è 0 oppure 5

### Divisibilità per 6

Un numero è divisibile per 6 se il numero è sia divisibile per 2 che per 3

### Divisibilità per 8

Un numero è divisibile per 8 se le ultime tre cifre del numero sono divisibile per 8 oppure sono 000

### Divisibilità per 9

Un numero è divisibile per 9 se la somma delle cifre del numero è anch'essa divisibile per 9

### Divisibilità per 10

Un numero è divisibile per 10 se l'ultima cifra è 0


### Regola generale

Avendo due numeri naturali $a,b$ in cui $b\leq a$ possiamo dire che b è un divisore di a se e solo se:

$$c_0  + \sum_{i=0}^{n} c_i (10^i \mod b) \equiv_b 0$$

### Teorema

Siano $a, b, c,r \in Z$ . Sia $r$ il resto della divisione di $b$ per $a$ , cioè $b = aq + r$ per qualche $q \in Z$ . Se Supponiamo che $c|a$ e $c|b$ allora anche $c|r$

**dimostrazione**:

Se  $c|a$ allora esiste un numero $n$ tale che $a = cn$

Se $c|b$ allora esiste un numero $m$ tale che $b = cm$

Quindi da $b = aq + r$ ricaviamo $cm = cnq + r$

Quindi abbiamo che $r = c(m-nq)$ per cui abbiamo che $c|r$

## Minimo comune multiplo

Avendo due numeri $a$ e $b$ il minimo dei multipli comuni di $a$ e $b$ è detto minimo comune multiplo (MCM), si scrive: mcm(a,b)

Es. 
- mcm(1,6) = 6
- mcm(4,6) = 12


## Massimo comune divisore

Avendo due numeri $a$ e $b$ il massimo dei divisori comuni di $a$ e $b$ è detto massimo comune divisore (MCD), si scrive: mcd(a,b)

Es. 
- mcd(1,6) = 1
- mcd(4,6) = 2

### Algoritmo 

Avendo due numeri $a$ e $b$ in cui $a \geq b$

1. fare la divisione intera di $a$ per $b$
2. mettere il valore di $b$ in $a$
3. mettere il valore del resto della divisone in $b$
4. ripetere i passaggi fino a che il resto risulta $0$

il valore dell'MCD sarà il valore di $a$ quando il resto ha raggiunto lo $0$

## Teorema di Bezout

Avendo $a,b \in \mathbb{N}^+$ e $d = \text{MCD}(a,b)$ allora esistono due numeri interi $x,y$ tali che 

$$d = ax + by$$

Quest'ultima viene detta **identità di Bezout**

Es. $a = 12$ e $b = 8$ abbiamo che $\text{MCD}(12,8) = 4$ Quindi:

$4 = 12 \cdot 1 + 8 \cdot (-1)$

con $x = 1$ e $y = -1$ (ci sono potenzialmente infinite combinazioni)


### Lemma

Se abbiamo $a,b,d \in \mathbb{N}^+$ e supponiamo che $d|a$ e $d|b$ e supponiamo che esistono $x,y \in \mathbb{Z}$ tali che $d = ax + by$ allora

$$d = \text{MCD}(a,b)$$

### Corollario

Due numeri $a,b \in \mathbb{N}^+$ sono numeri coprimi (unico divisore comune è 1) se e solo se esistono $x,y \in \mathbb{Z}$ tali che $ax+by = 1$

### Teorema di Bezout generalizzato

Siano $a,b,c \in \mathbb{Z}$ e sia $d = \text{MCD}(a,b)$ allora l'equazione $ax+by = c$ ammette soluzioni intere se e solo se $d|c$


# Numeri primi

Un numero naturale $p$ si dice primo se i suoi unici divisori sono 1 e se stesso.

Se $p$ non è primo allora si dice che è un numero composto. quindi $p$ si può scrivere come prodotto di altri due numeri (diversi da 1 e $p$ )

il numero $1$ non è né primo né composto

I numeri primi sono infiniti

Nonostante la presenza di varie congetture non esiste una formula per capire se un numero è primo.

## Fattorizzazione in numeri primi

Sia $n$ un numero naturale $>1$ allora $n$ è sempre esprimibile come prodotto di un numero finito di fattori primi.

Questo prodotto viene chiamato **fattorizzazione di $n$ in primi**

## Piccolo teorema di Fermat

Sia $p$ numero primo e $a \in \mathbb{Z}$ se p non divide a allora

$$a^{p-1} \equiv_p1$$

## Teorema di Wilson

Se $p$ è primo allora $(p-1)! \equiv_p-1$

## Funzione di Eulero

La funzione di Eulero è definita come:

$\phi (n)$ = numeri interi positivi $\leq n$ relativamente primi con $n$

Es.
$\phi (8) = 1, 3, 5, 7$

$\phi (14) = 1, 3, 5, 9, 11, 13$

### Generalizzazione del piccolo teorema di Fermat

Se $n$ intero positivo e $a$ per cui $\text{MCD}(a,n) = 1$ allora:

$$a^{\phi(n)}\equiv_n1$$


## Calcolo dell'inverso

L’inverso di un numero  $x \mod n$ è quel numero $y$ tale che $x\cdot y \mod n = 1$

- Se $MCD(x, n) = 1$ allora per il teorema di *Eulero-Fermat* avremo che $x ^{\phi(n)} \mod n = 1$ e dunque l’inverso risulta 
	$$y = x^{φ(N)–1} \mod n$$

- Data l’identità di Bezout $ax + by = MCD(a, b)$ quando $MCD(a, b) = 1$ avremo che $x$ è l’inverso di $a \mod b$ e che $y$ è l’inverso di $b \mod a$

## Teorema cinese del resto

Avendo un sistema di congruenze lineari:

$$x \equiv_{n_1}a_1$$

$$...$$

$$x \equiv_{n_k}a_k$$

Se gli $n$ sono coprimi tra loro a due a due $(MCD(n_i, n_j) = 1 \forall i \neq j)$ allora il sistema ammette una unica soluzione modulo $N = n_1 \cdot ... \cdot n_k$

Il numero che risolve il sistema è formato da:

$$x = a_1b_1x_1 + ... + a_kb_kx_k \mod N$$



# Calcolo Combinatorio
Esempio di Calcolo combinatorio:

$n =$ persone
$p =$ uomini
$q =$ donne

$p = q=15$
ogni donna deve scegliere un uomo, quanto combinazioni diverse possono esserci?

La prima donna può scegliere fra $p$ uomini

La seconda può scegliere fra $p-1$ uomini

La terza può scegliere fra $p-2$ uomini

...

L'ultima rimane con una solo scelta $(p-14)$

quindi:

$p!= p \cdot (p-1) \cdot (p-2) \cdot ... \cdot (p-13) \cdot (p-14) = 1307$ miliardi

operazione chiamata **fattoriale**

## Permutazione

Una permutazione di un insieme di $n$ elementi **distinti** rappresenta il numero di tutte le sequenze ordinate degli elementi.

Quindi cambiando l'ordine degli elementi si ottiene una permutazione diversa

Su $n$ elementi le permutazioni sono $n!$

$$P_n = n!$$

## Combinazioni

Una combinazione rappresenta il numero di sottoinsiemi di un insieme con $n$ elementi: si ottiene facendo $2^n$

### sottoinsiemi con $k$ elementi

Se vogliamo contare quanti sottoinsieme di $k$ elementi possiamo ottenere in un insieme di $n$ elementi

$$\frac{n!}{k!(n-k)!}$$

Una combinazione può essere scritta come:

$$C_{n,k} = \begin{pmatrix}n\\k\end{pmatrix}=\frac{n!}{k!(n-k)!}$$


$$\begin{pmatrix}n\\k\end{pmatrix} \text{ viene chiamato "coefficiente binomiale"}$$

### Proprietà del coefficiente binomiale

- $$\begin{pmatrix}n\\k\end{pmatrix} = \begin{pmatrix}n\\n-k\end{pmatrix}$$
- $$\begin{pmatrix}n\\n\end{pmatrix} = \begin{pmatrix}n\\0\end{pmatrix} = 1$$
- $$\begin{pmatrix}n\\1\end{pmatrix} = 1$$
- $$\begin{pmatrix}n\\k\end{pmatrix} = 0 \text{ con k > n}$$


## Le disposizioni

Le disposizioni sono tutti i possibili sottoinsiemi ordinati dell'insieme aventi esattamente k elementi diversi tra loro

Due disposizioni sono diverse se contengono elementi diverse oppure se hanno gli stessi elementi in ordine diverso.

$$D_{n,k} = \frac{n!}{(n-k)!} \text{ oppure } \begin{pmatrix}n\\k\end{pmatrix}k!$$

In sostanza è il prodotto degli ultimi $k$ elementi di $n$

## Permutazioni

Per definire le permutazione bisogna prima definire un multi-insieme.

Un **Multi-insieme** è un insieme in cui degli elementi possono ripetersi

Una permutazione indica i possibili modi di ordinare gli elementi di un multi-insieme.

$$\frac{n!}{n_1! \cdot n_2! \cdot...\cdot n_k!}$$

Sostanzialmente tutti gli elementi fratto il fattoriale di quanti elementi sono ripetuti

| tipo | formula | significato |
|--|--|--|
| Permutazioni semplici | $P_n=n!$ | ordinare $n$ elementi distinti |
| Permutazioni con rip. | $P_n'=\frac{n!}{n_1!...n_k!}$ | ordinare $n$ elementi eventualmente ripetuti suddivisi in k classi |
| Disposizioni semplici | $D_{n,k}=\frac{n!}{(n-k)!}$ | raggruppo in modo ordinato k elementi distinti su n elementi |
| Disposizioni con rip. | $D_{n,k}'=n^k$ | raggruppo in modo ordinato k elementi eventualmente ripetuti su n elementi |
| Combinazioni semplici | $C_{n,k}=\frac{n!}{k!(n-k)!}$ | raggruppo k elementi distinti su n elementi (ordine non importante) |


![](https://i.ibb.co/xSxMfH0/albero-calc-comb.png)
