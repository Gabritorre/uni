
# 2024-09-19_Spazi vettoriali

Lo spazio vettoriale è un insieme di elementi chiamati vettori che soddisfa 8+1 proprietà e che è definito su un insieme di numeri (detti **scalari**) chiamato **campo** (ad esempio il campo del numeri reali $\mathbb{R}$),

Indicheremo uno spazio vettoriale in questo modo $V^n(K)$, dove $n$ è la dimensione dello spazio e $K$ il campo.

Per semplicità tralasciamo le proprietà matematiche del campo, pensiamo che sia un semplice insieme numerico.

## Proprietà

Dato lo spazio vettoriale $V^n(K)$, siano

- $u, v, z \in V^n(K)$ dei vettori
- $a, b \in K$ degli scalari

Definiamo anche le seguenti operazioni:

- $+$ somma tra vettori
- $\oplus$ somma tra scalari
- $\cdot$ prodotto tra scalari
- $\bullet$ prodotto tra scalare e vettore

Le 8+1 proprietà sono le seguenti (nota che il +1 riguarda la proprietà $0$ che si riferisce a delle proprietà intrinseche dei vettori):

| Numero proprietà | Proprietà | Nome |
| --- | --- | --- |
| 0 | $u + v \in V^n(K),\, a \bullet u \in V^n(K)$ | chiusura rispetto alla somma e al prodotto per uno scalare |
| 1 | $(u + v) + z = u+(v + z)$ | proprietà associativa della somma |
| 2 | $\exist w \in V^n(K): v + w = v$ | proprietà dell’elemento neutro o nullo rispetto alla somma |
| 3 | $\forall x \in V^n(K)\, \exist \,\bar x\in V^n(K): x + \bar x = w$ | proprietà dell’elemento opposto o inverso |
| 4 | $u + v = v + u$ | proprietà commutativa |
| 5 | $a \bullet(b \bullet u) = (a \cdot b)\bullet u$ | proprietà associativa del prodotto per scalari |
| 6 | $\exist \sigma \in K : \sigma \bullet v = v$ | proprietà neutro rispetto al prodotto per scalare |
| 7 | $(a \oplus b) \bullet v = a \bullet v + b \bullet v$ | proprietà distributiva rispetto alla somma per scalari |
| 8 | $a \bullet (v  + u) = a \bullet v + a \bullet u$ | proprietà distributiva rispetto al prodotto per scalari |

Lavoreremo spesso con spazi vettoriali del tipo $\mathbb{R}^n(\mathbb{R})$, si può anche omettere il campo $\mathbb{R}$ e scrivere semplicemente $\mathbb{R}^n$.

## Esempi di spazi vettoriali

dalla proprietà 0, sappiamo che gli elementi dello spazio vettoriale devono aver definite le operazioni di somma tra due elementi dello spazio e il prodotto per uno scalare.

### Reali

L’insieme dei numeri reali è uno spazio vettoriale, formalmente scritto come $\mathbb{R}(\mathbb{R})$ ma più frequentemente scritto come $\mathbb{R}$. In questo insieme sono definite le classiche operazioni di somma e prodotto che conosciamo.

### Vettori

Possiamo vedere algebricamente i **vettori** come una lista ordinata di numeri la cui lunghezza è determinata dalla dimensione dello spazio vettoriale, ad esempio se siamo nello spazio tridimensionale i vettori saranno composti da 3 numeri.

Indichiamo questo insieme nell’ambito dei numeri reali come $\mathbb{R}^n(\mathbb{R})$

$$
v = \begin{pmatrix}v_1\\
...\\v_n
\end{pmatrix} \hspace{5mm}v_1, ..., v_n \in \mathbb{R}
$$

nel quale sono definite due operazioni:

- somma vettoriale:

$$
u+v = \begin{pmatrix}v_1 \oplus u_1 \\... \\v_n \oplus u_n
\end{pmatrix}
$$

- Prodotto per uno scalare:

$$
a\bullet u = \begin{pmatrix}a \cdot u_1 \\... \\a\cdot u_n\end{pmatrix}
$$

### Matrici

Possiamo anche lavorare con **matrici** $M_{m,n}(\mathbb{R})$ con $m$ righe e $n$ colonne, le quali, in modo analogo ai vettore, hanno definite somma matriciale e prodotto per uno scalare in modo simile ai vettori.

$$
M_{m,n}\begin{pmatrix}
m_{1,1}&...&m_{1,n}\\
... & ...& ...\\
m_{m,1}&...&m_{m,n}
\end{pmatrix}
$$

### Polinomi

Un altro esempio è lo spazio vettoriale $P_n(\mathbb{R})$, sono i **polinomi** ad una singola variabile reale con grado al più $n$. Sempre con somma e prodotto per scalare definiti.

Ad esempio:

Polinomi di grado massimo 1

$P_1(x)= \{1, x, x+1, 3x-1, ...\}$

## Dipendenza lineare

Nella sintassi $V^n(K)$, l’apice $n$ rappresenta 3 cose:

- la dimensione dello spazio vettoriale e quindi il numero di elementi dei vettori
- indica il **numero massimo di vettori linearmente indipendenti.**
- indica il numero **minimo di vettori necessari per ottenere tutti gli altri vettori dello spazio vettoriale**. (conseguenza del punto precedente)

Definizione di **vettori linearmente indipendenti**:

Presi i vettori $z_1,…,z_m \in V^n(K)$ sono linearmente indipendenti se calcolato

$$
z=a_1z_1+…+a_mz_m
$$

Si ha 

$$
z=0 \iff a_1=…=a_m=0
$$

Con $a_1,…,a_m \in \mathbb{R}$

Quindi dati i vettori $z_1,...,z_m$, questi sono linearmente indipendenti, se l’unica combinazione lineare di $z_1,...,z_m$, che restituisce il vettore nullo, è quello a coefficienti $a_1, …, a_m$ tutti nulli.

In altre parole un vettore $z_i$ è linearmente Indipendente se non può essere espresso partendo da altri vettori.

I vettori linearmente indipendenti rappresentano quindi i **vettori essenziali** da cui poi derivare tutti gli altri vettori.

Dati $n$ vettori, essi sono linearmente indipendenti se e solo se il **determinate** della matrice formata da quei vettori **non è nullo**.

## Esempi:

### Esempio 1

Nel contesto dei polinomi, ad esempio nello spazio vettoriale $P_1(\mathbb{R})$ i polinomi linearmente indipendenti sono:

$p'(\mathbb{x}) = 1$

$p''(\mathbb{x}) = x$

difatti tutti gli altri elementi dell’insieme si possono ottenere partendo da quei due.

per esempio:

- $x+1 = p’(x) + p’’(x)$
- $3x - 1 = 3p''(x) - p'(x)$

### Esempio 2

Con lo spazio vettoriale $\mathbb{R}^2$ abbiamo $n=2$ vettori linearmente indipendenti, che in particolare sono

$$
\begin{pmatrix}
1\\
0
\end{pmatrix},
\begin{pmatrix}
0\\
1
\end{pmatrix}
$$

scegliendo i valori di $a$ e $b$ possiamo creare tutti i vettori di questo spazio vettoriale

$$
a\begin{pmatrix}
1\\
0
\end{pmatrix} + b
\begin{pmatrix}
0\\
1
\end{pmatrix}
$$

### Esempio 3

Con lo spazio vettoriale $M_{2,3}(\mathbb{R})$ abbiamo $m\cdot n = 6$ matrici linearmente indipendenti, che in particolare sono:

$$
\begin{pmatrix}
1 & 0 & 0\\
0 & 0 & 0
\end{pmatrix}, 
\begin{pmatrix}
0 & 0 & 0\\
1 & 0 & 0
\end{pmatrix}, 
\begin{pmatrix}
0 & 1 & 0\\
0 & 0 & 0
\end{pmatrix}
$$

$$
\begin{pmatrix}
0 & 0 & 0\\
0 & 1 & 0
\end{pmatrix},
\begin{pmatrix}
0 & 0 & 1\\
0 & 0 & 0
\end{pmatrix},
\begin{pmatrix}
0 & 0 & 0\\
0 & 0 & 1
\end{pmatrix}
$$

## Tipi di combinazioni

Vediamo vari tipi di combinazioni tra coefficienti e vettori.

Dati

$z_1…z_m \in \mathbb{R}^n$

$a_1…a_m \in \mathbb{R}$

Definiamo $z \in \mathbb{R}^n$ come risultato di combinazioni:

1. **Combinazione lineare**:
    
    $$
    z = a_1z_1 + ... + a_mz_m
    $$
    
2. **Combinazione affine**:
    
    $$
    z = a_1z_1 + ... + a_mz_m \hspace{5mm}\sum_{i = 1}^{m}a_i = 1
    $$
    
    Graficamente lo possiamo immaginare nel seguente modo: ipotizzando di essere nello spazio $\mathbb{R}^2$, abbiamo due vettori che rappresentano due punti nel piano con le seguenti coordinate:
    
    $$
    \bar x = \begin{pmatrix}
    \bar x_1\\
    \bar x_2
    \end{pmatrix}
    , \hspace{3mm}
    \bar y = \begin{pmatrix}
    \bar y_1\\
    \bar y_2
    \end{pmatrix}
    $$
    
    il punto $x$ risultante da una combinazione affine tra i due punti, sarà posizionato da qualche parte nella retta passante per i punti $\bar x, \bar y$.
    
    ![https://i.ibb.co/wr0b3vk/image.png](https://i.ibb.co/wr0b3vk/image.png)
    
3. **Combinazione conica**:
    
    $$
    z = a_1z_1 + ... + a_mz_m \hspace{5mm} \forall i\in [1, ..., m], \,a_i\geq 0
    $$
    
    Graficamente lo possiamo immaginare nel seguente modo: il punto sarà nel triangolo formato dall’angolo interno dei due vettori.
    
    ![https://i.ibb.co/7VNGfc1/image.png](https://i.ibb.co/7VNGfc1/image.png)
    
4. **Combinazione convessa**:
    
    $$
    z = a_1z_1 + ... + a_mz_m \hspace{5mm}\sum_{i = 1}^{m}a_i = 1 \hspace{3mm} \forall i\in [1, ..., m], \,a_i\geq 0
    $$
    
    Dato che questo tipo di combinazione è una intersezione tra le combinazioni affine e canonica, graficamente lo possiamo immaginare nel seguente modo: il punto sarà all’interno del segmento passante per i due punti.
	![https://i.ibb.co/G5kbjdz/image.png](https://i.ibb.co/G5kbjdz/image.png)
