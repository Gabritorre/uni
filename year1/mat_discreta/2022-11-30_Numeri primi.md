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
