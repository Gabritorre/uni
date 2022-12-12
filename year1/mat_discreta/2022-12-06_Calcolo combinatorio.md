
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
