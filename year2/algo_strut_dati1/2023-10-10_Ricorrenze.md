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
