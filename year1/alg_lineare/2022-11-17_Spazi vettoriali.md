# Spazi vettoriali

## Gruppo

**Gruppo**: è composto da un insieme $G$ e un'operazione *

$(G, *)$ è un gruppo se:

- l'operazione è associativa
- esiste l'elemento neutro
- esiste l'inverso di ogni elemento

Un gruppo si dice **abeliano** se l'operazione è anche **commutativa**

Es. ( $\mathbb{Z} , +$ ) infatti la somma possiede la proprietà associativa e commutativa, ha l'elemento neutro $0$ e ogni elemento dell'insieme è invertibile

## Anelli
 
Un **anello** è un insieme in cui sono definite due operazioni, somma e prodotto in cui:

- l'insieme e la somma sono un gruppo abeliano
- l'operazione prodotto è associativa
- valgono le leggi distributive

Si indica con (nome_insieme, operazione1, operazione2)

Un **anello è commutativo** se la seconda operazione è anche commutativa

viene chiamato **anello con identità** se:
- esiste l'identità del prodotto $(\exists 1 \in A : a \cdot 1 = 1 \cdot a)$

l'anello è **invertibile** se:
- esiste l'inverso $(\exists a' \in A : a\cdot a' = a' \cdot a = 1)$

Es $(\mathbb{Z}, + , \cdot)$

## Campi

Un **campo** è un **anello** in cui ogni elemento è invertibile (tranne 0) e in cui vale la legge dell'annullamento del prodotto

Es. $(\mathbb{Q}, +, \cdot)$

## Spazi vettoriali

Sia $K$ un campo numerico (un'estensione dell'insieme $\mathbb{Q}$ )

Gli elementi di $K$ sono degli scalari

Uno spazio vettoriale su $K$ è costituito da un insieme di vettori $V$ dotati di:
- Somma vettoriale
- Prodotto per uno scalare

Devono inoltre valere i seguenti **assiomi**:

$a, b, c \in V$ vettori 
$r, s \in K$ scalari

|numero ass.| proprietà  | nome proprietà |
|--|--|--|
|1| $$a+(b+c) = (a+b)+c$$ |prop. associativa
|2| $$a+b = b+a$$ |prop. commutativa
|3| $$0+a = a = a+0$$ |elem. neutro
|4| $$a+(-a) = 0 = (-a)+a$$ |inversa della somma
|5| $$(r+s)a = ar + as$$ |prop. distributiva
|6| $$(r\cdot s)a = r(sa)$$ | prop. distributiva
|7| $$r(a+b) = ra+rb$$ | prop. distributiva
|8| $$O \cdot a = O$$ | $O$ = vettore nullo


## Sottospazi

Avendo $V$ spazio vettoriale nel campo $K$

Possiamo avere $U$ che è un sottoinsieme non vuoto di $V$, tale che

- $v,w \in U \to v+w \in U$
- $v \in U \land r \in K \to r\cdot v \in U$

Ogni retta passante per l'origine è sottospazio di $\mathbb{R}^2$

Mentre quelle non passanti per l'origine non sono sottospazi vettoriali

## Combinazioni Lineari

Le combinazioni lineari sono espressioni in cui compaiono somme di vettori e moltiplicazioni di vettori per uno scalare

Abbiamo:

- $x_1, x_2, ..., x_n \in V$ vettori
- $\alpha_1, \alpha_2, ..., \alpha_n \in \mathbb{R}$ numeri

una combinazione lineare è del tipo:

$v = \alpha_1x_1 + \alpha_2x_2 +...+ \alpha_nx_n$

Scritto in sommatoria diventa

$$\sum_{i = 1}^{n}(\alpha_i\cdot x_i)$$

### Combinazione lineare banale

Si dice combinazione lineare banale se è una combinazione costituita da un unico vettore nullo

## Vettori linearmente dipendenti e indipendenti


Avendo i vettori $v_1,...,v_n$ in uno spazio vettoriale $V$  se consideriamo dei coefficienti $\alpha_1,...,\alpha_n$ e imponiamo l'uguaglianza:

$$\alpha_1v_1 + ... + \alpha_nv_n = 0$$

Si dicono **linearmente indipendenti** se otteniamo che l'uguaglianza è soddisfatta se e solo se **tutti i coefficienti sono uguali a 0**.

Si dicono **linearmente dipendente** se esiste almeno una combinazione di **coefficienti non nulli** che rendono vera l'uguaglianza.

## Base di uno spazio vettoriale

Si tratta di un insieme di vettori (linearmente indipendenti) in con cui si possono generare tutti i vettori dello spazio lineare, attraverso delle combinazioni lineari.

Supponendo di avere dei vettori base $x_1,...,x_n$

Ogni vettore dello spazio vettoriale si scrive in maniera unica come combinazione lineare della base.

Nella scrittura $V = \alpha_1v_1 + ... + \alpha_nv_n$

Abbiamo che $\alpha_1,...\alpha_n$ sono le coordinate di v rispetto alla base, quindi

$\Alpha = (\alpha_1,...,\alpha_n)$ vettore di coordinate di $V$ rispetto alla base.

**Le basi contengono il numero minimo di vettori necessari per generare lo spazio vettoriale**

### Esercizio

Determinare le coordinate di $(1,0)$ rispetto ai vettori $(1,1)$ e $(-1,2)$

$$a \cdot \begin{pmatrix} 
1 \\
1 \end{pmatrix} + b\begin{pmatrix} 
-1 \\
2 \end{pmatrix} = \begin{pmatrix} 
1 \\
0 \end{pmatrix}$$

Da cui deriviamo il sistema lineare:

$$\begin{cases}
a-b = 1 \\
a-2b = 0
\end{cases}$$

Risolvendo il sistema si ottiene $a = \frac{2}{3}, b = -\frac{1}{3}$

### Base canonica
Una base canonica è composta da vettori in cui in ogni vettore è presente solo un elemento non nullo

Base canonica $= e_1, e_2,...e_n$

$$e_1 = (1, 0,...0)$$

$$e_2 = (0, 1,...0)$$

$$...$$

$$e_n = (0, 0,...1)$$

### Base ortogonale

Una base $v_1,...v_n$ è ortogonale se $v_i \cdot v_j = 0$ (prodotto di vettori) con $i \neq j$

### Base ortonormale

Una base ortonormale è una **base ortogonale** la cui norma di ogni vettore è 1.






