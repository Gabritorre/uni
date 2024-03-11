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


Ad esempio

$X = ABACA$
$Y = ACDA$

Si parte da $c[5, 4]$ in cui abbiamo $A=A$ Quindi
$c[5,4] = c[4,3] + 1$
poi si passa a $c[4,3]$ in cui abbiamo $C \neq D$, quindi:
$c[4,3] = \max(c[3,3], c[4,2])$
...

## Passo 3 - Costruzione algoritmo top-down oppure bottom-up

Partiamo da un algoritmo **bottom-up**:

Utilizziamo due strutture ausiliarie (la sintassi `c[i, j]` sarebbe equivalente a `c[i][j]` in codice):
- matrice `c` $(m+1) \times (n+1)$, il +1 è dato dal fatto che contiamo la stringa vuota. 
	In cui `c[i, j]` memorizza la lungh3ezza delle sottosequenze appartenenti a $LCS(X^i, Y^j)$
- matrice `b` $m \times n$. In cui `b[i, j]` contiene delle informazioni utili per recuperare la soluzione (cioè la sottosequenza massima effettiva), in particolare:
	- `b[i, j]` $=\,\nwarrow$ se $x_i = y_j\implies LCS(X^i, Y^j)$ si riduce al sottoproblema $LCS(X^{i-1}, Y^{j-1})$ 
	- `b[i, j]` $=\,\uparrow$ se $x_i \neq y_j\implies LCS(X^i, Y^j)$ si riduce al sottoproblema $LCS(X^{i-1}, Y^{j})$ 
	- `b[i, j]` $=\,\leftarrow$ se $x_i \neq y_j\implies LCS(X^i, Y^j)$ si riduce al sottoproblema $LCS(X^{i}, Y^{j-1})$ 

	Visivamente le frecce all'interno della matrice indicano quale sarà la prossima cella da visitare

```c++
LCS(X, Y) {
	m = X.length
	n = Y.length
	for (i = 0 to m) {
		c[i, 0] = 0		//prima colonna della matrice 'c' inizializzata a 0
	}
	for (j = 0 to n) {
		c[0, j] = 0		//prima riga della matrice 'c' inizializzata a 0
	}
	for (i = 1 to m) {
		for (j = 1 to n) {
			if (X[i] == Y[j]) {
				c[i, j] = c[i-1, j-1] + 1
				b[i, j] = ↖
			}
			else {
				if (c[i-1, j] >= c[i, j-1]) {
					c[i, j] = c[i-1, j]
					b[i, j] = ↑
				}
				else {
					c[i, j] = c[i, j-1]
					b[i, j] = ←
				}
			}
		}
	}
	return b, c
}
```

![enter image description here](https://i.ibb.co/Wk6hP9q/image.png)


**Complessità**:
Il tempo di esecuzione è dato dai due cicli annidati:

$$T(n) = \Theta(m \cdot n)$$



## Passo 4 - Costruzione soluzione ottima

Facciamo uso della procedura `LCS` per ottenere la soluzione (la sottosequenza) ottima:

```c++
printLCS(X, Y) {
	b, c = LCS(X, Y)
	printLCSaux(X, b, X.length, Y.length)		//dato che consideriamo i caratteri in comune tra X e Y basta passare solo X
}

printLCSaux(X, b, i, j) {
	if (i > 0 && j > 0) {
		if (b[i, j] == ↖) {
			printLCSaux(X, b, i-1, j-1)
			print(X[i])
		}
		else {
			if (b[i, j] == ↑) {
				printLCSaux(X, b, i-1, j)
			}
			else {
				printLCSaux(X, b, i, j-1)
			}
		}
	}
}
```

**Complessità**:
Il tempo di esecuzione di `printLCSaux` è $O(i + j)$ perche ad ogni chiamata decremento **almeno** uno tra i e j.

Il tempo di esecuzione della `printLCS` è:

$$T(n) = \Theta(m \cdot n) + O(m + n) = \Theta(m \cdot n)$$


## Ottimizzazione

Possiamo ottimizzare l'uso della memoria:
dato che i possibili valori da cui dipende $c[i, j]$ sono solamente 3:
- $c[i-1, j-1]$
- $c[i-1, j]$
- $c[i, j-1]$

possiamo evitare di utilizzare la matrice $b$ e basarmi sui 3 valori da cui dipende $c[i, j]$ per trovare la prossima cella:

```c++
printLCSaux(X, b, i, j) {
	if (i > 0 && j > 0) {
		if (c[i, j] == c[i-1, j) {
			printLCSaux(X, b, i-1, j)
		}
		else {
			if (c[i, j] == c[i, j-1]) {
				printLCSaux(X, b, i, j-1)
			}
			else {
				printLCSaux(X, b, i-1, j-1)
				print(X[i])
			}
		}
	}
}
```

L'ordine dei confronti è importante (prima si controlla in alto e a sinistra poi in diagonale)


## Soluzione top-down

```c++
tfLCS(X, Y) {
	m = x.length
	n = Y.length
	c[0...m, 0...n] = -1		//inizializzazione della matrice a -1 assumiamo complessità: Θ(m*n)
	return tdLCSaux(X, Y, c, m, n)
}

tdLCSaux(X, Y, c, i, j) {
	if (c[i, j] == -1) {
		if (i == 0 || j == 0) {
			c[i, j] = 0
		}
		else {
			if (X[i] == Y[j]) {
				c[i, j] = tdLSAaux(X, Y, c, i-1, j-1) + 1
			}
			else {
				c[i, j] = max(tdLCSaux(X, Y, c, i-1, j), tdLCSaux(X, Y, c, i, j-1))
			}
		}
	}
	return c[i, j]
}
```
