# Complessità delle Ricorrenze

Vedremo 3 metodi diversi per ottenere la complessità reale di un algoritmo ricorsivo.

## Metodo dell'iterazione

Questo metodo consiste nel analizzare le prime chiamate ricorsive fino a notare un certo pattern che si ripete, riconosciuto il pattern possiamo ricondurlo fino al caso base che termina la ricorsione.

### Esempio 1
Prendiamo come esempio l'algoritmo di ricerca binaria definito come segue:

$$T(n) = \begin{cases}
c + T(\frac{n}{2}) & n \geq 2 \\
1 & n = 1
\end{cases}$$

esplicitiamo le prime chiamate ricorsive:

$$c + T\left(\frac{n}{2}\right) = $$

$$c + \left[c + T\left(\frac{n}{2^2}\right)\right] = $$

$$c + \left[c + \left[c + T\left(\frac{n}{2^3}\right)\right]\right] = $$

a questo punto ci accorgiamo che il numero di $c$ è lo stesso valore dell'esponente di $2$ quindi potremmo scrivere l'espressione come:

$$3c + T\left(\frac{n}{2^3}\right) = $$

è evidente il pattern che continua a proseguire:

$$= kc + T\left(\frac{n}{2^k}\right)$$

La ricorsione proseguirà fino a che non incontrerà il caso base, cioè fino a quanto
$$\frac{n}{2^k} = 1$$

$$n = 2^k$$

$$k = \log_2n$$

sostituendo quindi in $kc + T\left(\frac{n}{2^k}\right)$ otteniamo la complessità

$$T(n) = c\cdot \log_2n + T(1)$$

il termine dominante è $\log n$ (non siamo interessati alla precisa base del logaritmo) quindi possiamo concludere che 

$$T(n) = \Theta(\log n)$$

### Esempio 2

$$T(n) = \begin{cases}
9\cdot T(\frac{n}{3}) + n & n \geq 2 \\
1 & n = 1
\end{cases}$$

esplicitiamo le prime chiamate ricorsive:

$$9\cdot T\left(\frac{n}{3}\right) + n =$$

$$9\cdot \left[9\cdot T\left(\frac{n}{3^2}\right) + \frac{n}{3}\right] + n =$$

$$\text{riscrivendo}$$

$$9^2\cdot T\left(\frac{n}{3^2}\right) + 3n + n =$$

$$9^2\cdot \left[ 9\cdot T\left(\frac{n}{3^3}\right) \frac{n}{3^2}\right] + 3n + n =$$

$$\text{riscrivendo}$$

$$9^3\cdot T\left(\frac{n}{3^3}\right) + 9n + 3n + n$$

A questo punto possiamo già vedere il pattern, nella parte sinistra l'esponente del 9 e del 3 crescono ugualmente quindi 

$$9^k\cdot T\left(\frac{n}{3^k}\right) + 9n + 3n + n$$

per la parte destra è conveniente raccogliere $n$ e notare che sono presenti le potenze di 3

$$9^k\cdot T\left(\frac{n}{3^k}\right) + n(9 + 3 + 1)$$

$$9^k\cdot T\left(\frac{n}{3^k}\right) + n(3^2 + 3^1 + 3^0)$$

avvalendosi della variabile $k$ che abbiamo usato nella parte sinistra possiamo rappresentare $n(3^2 + 3^1 + 3^0)$ come una progressione geometrica:

$$n\cdot \sum_{i = 0}^{k-1}q^i = n\cdot \frac{q^{(k-1)+1}-1}{q-1} \hspace{10mm} q\neq 1$$

riscriviamo il punto dove eravamo rimasti come:

$$9^k\cdot T\left(\frac{n}{3^k}\right) +n\cdot \frac{3^k - 1}{2}$$

la ricorsione continuerà fino a che:

$$\frac{n}{3^k} = 1$$

$$n = 3^k$$

$$k = \log_3n$$

sostituendo ottengo la complessità

$$9^{\log_3 n}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

facendo alcuni passaggi algebrici possiamo ottenere la parte dominante

$$3^{2^{\log_3 n}}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$3^{2\cdot\log_3 n}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$3^{\log_3 n^2}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$n^2\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$n^2\cdot 1 +n \frac{3^{\log_3 n}-1}{2}$$

$$n^2 +n \frac{n-1}{2}$$

$$n^2 + \frac{n^2-n}{2}$$

il componente dominante è $n^2$

quindi $T(n) = \Theta(n^2)$


## Metodo della sostituzione

Questo metodo consiste nell'indovinare la complessità dell'algoritmo e poi dimostrarlo tramite induzione.

### Esempio 1

$$T(n) = \begin{cases}
1 & n = 1 \\
T\left(\lfloor\frac{n}{2}\rfloor\right) + n & n \geq 2
\end{cases}$$

Ipotizzo che la complessità dell'algoritmo sia $T(n) = O(n)$

dimostriamolo per induzione, utilizzando la definizione di $O(n)$ :

$$\exist\, c > 0, \exist\, n_0 \in \mathbb{N} \backepsilon \forall\, n \geq n_0 : $$

$$T(n) \leq c \cdot n$$

**caso base**:

il caso base si presenta quando $n = 1$

$$T(1) \leq c \cdot 1$$

$$1 \leq c$$

quindi il caso base è soddisfatto per ogni $c \geq 1$

**passo induttivo**:
supponiamo per ipotesi induttiva che la proprietà valga fino a $n-1$

quello che vogliamo dimostrare è che

$$T(n) \leq c \cdot n$$

sappiamo però che 

$$T(n) = T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \hspace{5mm}\text{per la definizione di } T(n)$$

quindi

$$T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \leq c \cdot \Big\lfloor\frac{n}{2}\Big\rfloor + n$$

lavoriamo sulla parte destra:
dato che il pavimento di un numero è sicuramente minore del numero normale posso togliere il *floor* dato che non invalida il segno della disequazione.

$$T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \leq c \cdot \frac{n}{2} + n$$

$$T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \leq  \left(\frac{c}{2} + 1\right) \cdot n$$

quidi per dimostrare che:
$T(n) \leq c \cdot n \hspace{10mm}$ o in altre termini che  $T\left(\big\lfloor\frac{n}{2}\big\rfloor\right) + n \leq c \cdot n$

dobbiamo porre:

$$\frac{c}{2} + 1 \leq c$$

otteniamo

$$c \geq 2$$

quindi considerando sia il risultato del caso base che del passo induttivo concludo che la proprietà vale per $c \geq 2$

## Teorema Master

### Algoritmi divide et impera

prima di considerare il teorema master che generalizza ciò il calcolo della complessità degli algoritmi *divide et impera* andiamo prima a vedere cosa sono quest'ultimi.

Un algoritmo divide et impera si compone di tre fasi:

1. scomporre il problema in sottoproblemi più piccoli (*split*)
2. risolvere i sottoproblemi
3. unire le soluzioni dei sottoproblemi (*merge*)

Possiamo scrivere la complessità temporale di questi algoritmi come la somma delle complessità di queste tre fasi:

$$T(n) = T_{split}(n) + a\cdot T\left(\frac{n}{b}\right) + T_{merge}$$

possiamo unificare i tempi di *split* e *merge* ottenendo 

$$T(n) =a\cdot T\left(\frac{n}{b}\right) + f(n)$$

- $f(n)$ tempo per fare le operazioni di *split* e *merge*
- $aT\left(\frac{n}{b}\right)$ complessità totale dei sottoproblemi, dove:
	- $a$ : numero di sottoproblemi
	- $n$ : dimensione iniziale del problema
	- $T(\frac{n}{b})$ complessità di un singolo sottoproblema

Ovviamente questa formula assume che **tutti i sottoproblemi abbiano la stessa complessità temporale**

### Teorema master

Il teorema master è applicabile nei problemi che si presentano nella seguente forma

$$T(n) =a\cdot T\left(\frac{n}{b}\right) + f(n)$$

inoltre il problema deve soddisfare le seguenti condizioni:

1. $a \geq 1\hspace{10mm} a \in \mathbb{R}$ 
2. $b \geq 2\hspace{10mm} b \in \mathbb{R}$
3. $f(n) \geq 0$

data la seguente definizione della variabile $d$:

$$d = \log_ba$$

Il teorema master si divide in tre casi distinti, questi tre casi vengono generati dal confronto tra $f(n)$ cioè il tempo di *split* + *merge* e $n^d$ cioè il tempo dell'esecuzione dei sottoproblemi.

### Caso 1

Se esiste $\epsilon > 0$ per cui $f(n) = O(n^{d-\epsilon})$ allora

$$T(n) = \Theta(n^d)$$

Quindi se il tempo di *split* + *merge* cresce più lentamente del tempo di esecuzione dei sottoproblemi allora la complessità dell'algoritmo si comporta come la complessità dell'esecuzione dei sottoproblemi


### Caso 2

Se $f(n) = \Omega(n^d)$ allora

$$T(n) = \Theta(n^d\log n)$$

quindi se il tempo di *split* + *merge* è nello stesso ordine di grandezza del tempo di esecuzione dei sottoproblemi allora la complessità dell'algoritmo è anch'essa simile ad essi.


### Caso 3

se esiste $\epsilon > 0$ per cui  $f(n) = \Omega(n^{d+\epsilon})$ e
se esiste $0<c<1$ per $n$ sufficientemente grande per cui vale che $a\cdot f\left(\frac{n}{b}\right) \leq c \cdot f(n)$
allora

$$T(n) = \Theta(f(n))$$

Quindi se il tempo di *split* + *merge* cresce più velocemente del tempo di esecuzione dei sottoproblemi allora la complessità dell'algoritmo si comporta come il tempo di *split* + *merge*


### Esempi

**esempio 1**

$$T(n) = T\left(\frac{n}{2}\right) + c$$

$a = 1$
$b = 2$
$f(n) = c$

per poter applicare il teorema master dobbiamo porci le seguenti domande:

- il problema rispetta la forma richiesta dal teorema master? si
- $a\geq 1?$ si
- $b\geq 2?$ si
- $f(n) \geq 0?$ si

possiamo applicare il teorema master.

calcoliamo $d$ :
$d = \log_21 = 0$ quindi $d = 0$

mettiamo a confronto le due funzioni $f(n)$ e $n^d$:

$f(n) = c$
$n^d = n^0 = 1$

le due funzioni appartengono allo stesso ordine, quindi siamo nel caso 2. Concludiamo che:

$$T(n) = \Theta(\log n)$$

**esempio 2**

$$T(n) = 9T\left(\frac{n}{3}\right) + n$$

$a = 9$
$b = 3$
$f(n) = n$

verifico le condizioni:
- forma? si
- $a\geq 1?$ si
- $b\geq 2?$ si
- $f(n) \geq 0?$ si

possiamo applicare il teorema master.

calcoliamo $d$ :
$d = \log_39 = 2$ quindi $d =2$

mettiamo a confronto le due funzioni $f(n)$ e $n^d$:

$f(n) = n$
$n^d = n^2$

siamo nel caso 1, verifichiamo quindi che per un $\epsilon > 0$ è vero che $f(n) = O(n^{2-\epsilon})$
se prendo $\epsilon = 1$ ottengo che $f(n) = O(n)$ che è vero quindi:

$$T(n) = \Theta(n^2)$$


