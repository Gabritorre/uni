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
