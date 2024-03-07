# Problema della Longest Common Subsequence

Vediamo un altro problema dove la programmazione dinamica torna molto utile, il problema della Longest Common Subsequence (LCS), che consiste nel trovare la più grande **sottosequenza** comune tra due stringhe.

In questo capitolo faremo degli esempi in riferimento alle stringhe di DNA che hanno come alfabeto le lettere $\{A, G, C, T\}$

Definizione di **sottosequenza**: una sottosequenza di una stringa $S_1$ è un'altra stringa $S_2$ contenente le stesse lettere di $S_1$ nello stesso ordine ma non necessariamente adiacenti.

(da non confondere con sottostringa la quale richiede che i caratteri siano adiacenti)

Ad esempio date le due stringhe:

- $S_1 = \text{ACTACCTG}$
- $S_2 = \text{ATCACC}$

delle possibili sottosequenze sono
- $ACACC$
- $ACC$
- $ATA$
- $ATACC$
- ...

**Il problema LCS consiste nel trovare la sottosequenza più lunga**.

formalmente:
Date due stringhe 
- $X$ composta dai caratteri  $x_1...x_m$
- $Y$ composta dai caratteri $y_1...y_n$

Vogliamo trovare una sottosequenza $W$ comune a $X$ e $Y$ che sia di lunghezza massima.
**Generalmente si possono avere più sottosequenze comuni di lunghezza massima uguale**, per cui non esiste sempre una soluzione unica.
Per questo motivo indicheremo con $LCS(X, Y)$ un **insieme** di sottosequenze comuni di lunghezza massima

Anche in questo caso l'utilizzo di un algoritmo di forza bruta (che trova tutte le possibili sottosequnze e poi mantiene quelli di massima lunghezza) risulterebbe in una **complessità esponenziale** $2^n$


## Costruzione algoritmo attraverso programmazione dinamica


## Passo 1 - Caratterizzazione della sottostruttura ottima

Per determinare una soluzione possiamo trovare un algoritmo basato sui **prefissi**:
Data una stringa $X = x_1...x_m$, allora per un certo $k \leq m$ il **prefisso** di lunghezza $k$ della stringa $X$ è 
$X^k=x_1...x_k$
Cioè sono i primi $k$ caratteri della stringa $X$

In generale data un stringa di $n$ caratteri si hanno $n+1$ prefissi (il +1 è dato dal fatto che la stringa vuota è un prefisso di qualsiasi stringa)

Ridurre il problema LCS al problema sui prefissi fa sì che il numero di sottoproblemi distinti sia nell'ordine $O(n\cdot m)$
dove $n$ e $m$ sono il numero di prefissi delle due stringhe del problema.

### Teorema della sottostruttura ottima per LCS

Siano $X = x_1...x_m$ e $Y=y_1...y_n$ due stringhe e sia $W = w_1...w_k \in LCS(X, Y)$ allora,
1. Se $x_m = y_n$, allora $w_k=x_m=y_n$ e $W^{k-1}\in LCS(X^{m-1}, Y^{n-1})$
	Cioè: Se l'ultimo carattere delle due stringhe è uguale allora l'ultimo elemento della sottosequenza sarà quel carattere, e la restante sottosequenza va trovata nei prefissi di $X$ e $Y$
2. Se $x_m \neq y_n$:
	2.1 Se $w_k \neq x_m$, allora $W \in LCS(X^{m-1}, Y)$
	2.2 Se $w_k \neq y_n$, allora $W \in LCS(X, Y^{n-1})$

**dimostrazione per assurdo del punto 1**
Partendo dall'ipotesi $x_m=y_n$, assumiamo per assurdo che $w_k \neq x_m$ (e di conseguenza $w_k \neq y_n$) allora potrei costruire una sottosequenza $W_{x_m}$ (aggiungendo il carattere $x_m$) che risulterebbe essere comune tra $X$ e $Y$ e allora la lunghezza delle nuova sottosequenza sarebbe $k+1$, ciò è assurdo in quanto la lunghezza di delle sottosequenze più lunghe è $k$.

**dimostrazione per assurdo del punto 2.1** (analogo per il punto 2.2)

Se $x_m \neq y_n$ e $w_k \neq x_m$ vorremmo dimostrare che $W \in LCS(X^{m-1}, Y)$.

Se per assurdo ci fosse una sottosequenza $W'$ comune a $X^m-1$ e $Y$ più lunga di $W$ significherebbe che $W'$ sarebbe sottosequenza di $X$ e $Y$, ma questo contraddice l'ipotesi non rendendo più $W \in LCS(X, Y)$ in quanto ce ne sarebbe una più lunga.


## Passo 2 - Soluzione ricorsiva per il valore della soluzione ottima

Dati $X = x_1...x_m$ e $Y = y_1...y_n$
indichiamo con `c[i, j]` la lunghezza delle sottosequenze appartenenti a $LCS(X^i, Y^j)$, con $0\leq i \leq m$ e $0 \leq j \leq n$

basandoci sui passi del teorema precedente:

$$c[i, j] = \begin{cases}
0 & \text{se } i = 0 \lor j = 0 \\
1 + c[i-1, j-1]  & \text{se } i, j >0 \land x_i = y_j \\
\max\left(c[i-1, j], c[i, j-1]\right)  & \text{se } i, j >0 \land x_i \neq y_j \\
\end{cases}$$
