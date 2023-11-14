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


## Dimostrazione del teorema Master

La dimostrazione si divide in 2 grandi passaggi:
1. Trasformare la formula generale in una formula non ricorsiva
2. dimostrare i singoli casi

### Step 1

Realizzando l'albero delle ricorsioni basato sulla formula:

$$T(n)  = a\cdot T\left(\frac{n}{b}\right) + f(n)$$

![enter image description here](https://i.ibb.co/7vtWHp6/image.png)

Al primo livello abbiamo un solo nodo, che rappresenta la chiamata ricorsiva iniziale che riceve un problema di dimensione $n$. Questo nodo creerà $a$ nodi figli i quali risolveranno problemi di dimensione $\frac{n}{b}$, Questa operazione si ripete fino al raggiungimento delle foglie.

Possiamo notare che:

1. ad ogni livello $i$ i nodi presenti in quel livello sono $a^i$
2. ad ogni livello $i$ la dimensione del problema di ogni nodo è $\frac{n}{b^i}$
3. il tempo che ogni nodo impiegherà a risolvere il relativo sottoproblema è una funzione della sua dimensione: $f(\frac{n}{b^i})$

Il tempo di esecuzione totale sarà pari alla somma delle complessità di ogni livello:

$$T(n) = \sum_{i = 0}^{\text{tot\_livelli}}a^i \cdot f\left(\frac{n}{b^i}\right)$$

Ora dobbiamo trovare il numero totale di livelli.

Possiamo esplicitare il caso base che avrà una complessità costante:

$$T(n) = \begin{cases}
a \cdot T(\frac{n}{b}) + f(n) & n \geq 2\\
c & n = 1
\end{cases}$$

Per trovare il numero di livelli facciamo una sostituzione per ricondurci al caso base:

$$\frac{n}{b^i} = 1$$

dal quale otteniamo il valore di $i$:

$$n = b^i$$

$$i = \log_b n$$

Possiamo quindi riscrivere la formula precedente come:

$$T(n) = \sum_{i = 0}^{\log_b n}a^i \cdot f\left(\frac{n}{b^i}\right)$$

ora concentriamoci a trovare il numero di foglie totali e il numero di nodi totali:

- numero di foglie:
	le foglie sono **l'ultimo livello** quindi quando $i = \log_b n$

	$$n_\text{foglie} = a^{\log_b n}$$
	
	$$= a^{\log_b a \cdot \log_a n}$$

	$$= (a^{\log_a n})^{\log_b a}$$

	$$= n^{\log_b a}$$

	$$= n^{d}$$

- numero totale di nodi:
	il numero di nodi è dato dalla somma dei nodi presenti su ogni livello

	$$n_\text{nodi} = \sum_{i=0}^{\log_b n}a^i$$

	che è una progressione geometrica
	
	$$= \frac{a^{\log_b n+1} -1}{a-1}$$
	
	$$= \frac{a \cdot a^{\log_b n} -1}{a-1}$$

	$$= \frac{a \cdot n^d -1}{a-1}$$

	siamo quindi nell'ordine di $\Theta(n^d)$

### Step 2

Ora andiamo ad dimostrare il teorema master caso per caso


### Caso 1

Dall'ipotesi sappiamo che $\exist \epsilon > 0, f(n) = O(n^{d-\epsilon})$

applichiamo tale ipotesi alla formula della complessità totale di un livello $i$-esimo

$$a^i \cdot f\left(\frac{n}{b^i}\right)=$$

Che per la nostra ipotesi diventa:

$$= a^i \cdot O\left(\left(\frac{n}{b^i}\right)^{d-\epsilon}\right)$$

$$= O\left(a^i\cdot\left(\frac{n}{b^i}\right)^{d-\epsilon}\right)$$

$$= O\left(a^i\cdot\frac{n^{d-\epsilon}}{(b^i)^{d - \epsilon}}\right)$$

$$= O\left(a^i\cdot\frac{n^{d-\epsilon}}{(b^i)^{d}\cdot (b^i)^{-\epsilon}}\right)$$

$$= O\left(a^i\cdot\frac{n^{d-\epsilon}}{(b^d)^{i}\cdot (b^i)^{-\epsilon}}\right)$$

dato che $d = \log_ba$ allora $(b^{d})^i$ equivale a $a^i$ che possiamo semplificare.

$$= O\left(\frac{n^{d-\epsilon}}{(b^i)^{-\epsilon}}\right)$$

$$= O\left((b^i)^\epsilon \cdot n^{d-\epsilon}\right)$$

$$= O\left((b^\epsilon)^i \cdot n^{d-\epsilon}\right)$$

Utilizzando i calcoli appena fatti calcoliamo la sommatoria della complessità di ogni livello per trovare la complessità totale

$$T(n) = \sum_{i = 0}^{\log_b n} a^i \cdot f\left(\frac{n}{b^i}\right)$$

$$= \sum_{i = 0}^{\log_b n} O\left((b^\epsilon)^i \cdot n^{d-\epsilon}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \sum_{i = 0}^{\log_b n} (b^\epsilon)^i\right)$$

la sommatoria è una progressione geometrica

$$= O\left(n^{d-\epsilon} \cdot \frac{(b^\epsilon)^{\log_b (n) +1}-1}{b^\epsilon - 1}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \frac{b^\epsilon \cdot (b^\epsilon)^{\log_b (n)}-1}{b^\epsilon - 1}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \frac{b^\epsilon \cdot (b^{\log_b n})^{\epsilon}-1}{b^\epsilon - 1}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \frac{b^\epsilon \cdot n^{\epsilon}-1}{b^\epsilon - 1}\right)$$

togliamo le costanti

$$= O\left(n^{d-\epsilon} \cdot n^{\epsilon}\right)$$

$$= O\left(n^{d}\right)$$


Dato che l'algoritmo dovrà passare per tutti i $n^d$ nodi foglia quindi l'algoritmo è limitato inferiormente da $n^d$, quindi $T(n) = \Omega(n^d)$

Possiamo quindi concludere che un algoritmo che ricade in questo caso avrà complessità simile a $n^d$, quindi 
$$T(n)=\Theta(n^d)$$

### Caso 2

Dall'ipotesi sappiamo che se $f(n) = \Theta(n^{d})$ allora
$T(n) = \Theta(n^d \log n)$


applichiamo tale ipotesi alla formula della complessità totale di un livello $i$-esimo

$$a^i \cdot f\left(\frac{n}{b^i}\right)=$$

Che per la nostra ipotesi diventa:

$$a^i \cdot \Theta\left(\left(\frac{n}{b^i}\right)^d\right)$$

$$\Theta\left(a^i \cdot \frac{n^d}{(b^{i})^{d}}\right)$$

come nel caso 1 possiamo semplificare $a^i$ con $(b^d)^i$

$$\Theta\left(n^d\right)$$


Sappiamo che la complessità è data dalla seguente sommatoria:

$$\sum_{i = 0}^{\log_b n}a^i f\left(\frac{n}{b^i}\right)$$

in cui possiamo sostituire quello che abbiamo trovato prima

$$\sum_{i = 0}^{\log_b n} \Theta(n^d)$$

$$\Theta\left(\sum_{i = 0}^{\log_b n}n^d\right)$$

la sommatoria esegue $(\log_b n + 1)$ somme di $n^d$ (il $+1$ è dato dal fatto che i parte da 0 e non da 1)

$$\Theta\left(n^d \log n\right)$$


### Caso 3

Dall'ipotesi sappiamo che $f(n) = \Omega(n^{d + \epsilon})$ e che
$\exist 0<c<1 \hspace{3mm} af(\frac{n}{b}) \leq c \cdot f(n)$

La seconda condizione ci sta dicendo che la complessità temporale del livello 0 (la radice) dell'albero è più dispendiosa della complessità dei livelli successivi. Questo accade perche il tempo di *split* + *merge* domina sulla risoluzione effettiva dei sottoproblemi.
La **formula più generale** sarebbe:

$$\forall i\geq 0 \hspace{3mm} a^if\left(\frac{n}{b^i}\right) \leq c^i \cdot f(n)$$

La complessità dell'albero è sempre dato da:

$$T(n) = \sum_{i = 0}^{\log_b n} a^i \cdot f\left(\frac{n}{b^i}\right)$$

che per la nostra ipotesi generalizzata sappiamo essere minore di:

$$\leq \sum_{i = 0}^{\log_b n} c^i \cdot f(n)$$

possiamo portare fuori $f(n)$ da quest'ultimo

$$=f(n)\sum_{i = 0}^{\log_b n} c^i$$

a questo punto possiamo eliminare la sommatoria maggiorandola con la stessa sommatoria ma che va ad infinito. Dato che $c$ è un valore sicuramente positivo allora la somma che va ad infinito sarà sicuramente più grande

$$\leq f(n)\sum_{i = 0}^{\infty} c^i$$

Una serie geometrica infinita è uguale a $\frac{1}{1-c}$:

$$=f(n)\cdot \frac{1}{1-c}$$

rimuovendo in termini costanti otteniamo che la complessità è 

$$T(n) = O(f(n))$$

per quanto riguarda il verificare che $T(n) = \Omega(f(n))$, possiamo semplicemente dedurlo dalla formula del teorema master:

$$T(n) = aT\left(\frac{n}{b}\right) + f(n)$$

dato che $aT\left(\frac{n}{b}\right)$ è sicuramente una quantità positiva allora la complessità sarà sicuramente più grande o uguale ad $f(n)$

concludiamo quindi che $T(n) = \Theta(f(n))$



