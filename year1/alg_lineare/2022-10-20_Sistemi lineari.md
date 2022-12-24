
# Sistemi lineari

Un sistema lineare è un insieme di equazioni lineari (di primo grado).

Esempio di come è formato un sistema lineare:

$$a_{11}x_1 + a_{12}x_2 + ... + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + ... + a_{2n}x_n = b_2 \\
... \\
a_{m1}x_1 + a_{m2}x_2 + ... + a_{mn}x_n = b_m$$

I pedici di $a$ rappresentano rispettivamente **riga e colonna** Il pedice di $b$ rappresenta la **riga**

- Se $b_1 = b_2 = ... =  b_n = 0$ si dice **sistema lineare omogeneo**
- Se $m = n$ si dice **sistema lineare quadrato**

Possiamo dire che $n$ rappresenta il numero di variabili mentre $m$ rappresenta il numero di equazioni.

**Iperpiano**: è l'insieme dei punti le cui coordinate soddisfano l'equazione

**L'insieme delle soluzioni del sistema lineare** è l'insieme dei punti che sono intersezione dei m iperpiani nello spazio a n dimensioni.

Per capire quante soluzioni posso avere devo calcolare:

$$\cos \alpha = \frac{A \cdot B}{||A|| \cdot ||B||}$$

- Se se le due rette *non* sono parallele ( $\cos \alpha < 1$ ) allora il sistema ammette **una soluzione**
- Se le due rette coincidono ( $\cos \alpha = 0$ ) allora ci sono **infinite soluzioni**
- Se le due rette sono parallele ( $\cos \alpha = \pm1$ ) allora **non ci sono soluzioni**

Esempio:

sistema lineare composto da 2 equazioni ( $m$ ) a 2 variabili ( $n$ )

$$\begin{cases} 3x+2y = 5 \\
x+4y = 3 \end{cases}$$

$A=[3,2]$

$B=[1,4]$

$A \cdot B = (3 \cdot 1) + (2 \cdot 4) = 11$

$||A|| = \sqrt{3^2+2^2} = \sqrt{13}$

$||B|| = \sqrt{1^2+4^2} = \sqrt{17}$

$\cos \alpha = \frac{11}{\sqrt{13} \cdot \sqrt{17}} = \frac{\sqrt{11} \cdot \sqrt{11}}{\sqrt{13 \cdot 17}} = \sqrt{\frac{121}{221}}$

dato che $\sqrt{\frac{121}{221}} < 1$ allora le rette non sono parallele quindi abbiamo una soluzione.

Trasformiamo il nostro sistema in un sistema equivalente ma senza la $x$ .

$$\begin{cases} 3x+2y = 5 \\
x+4y = 3 \end{cases} = \begin{cases} x+\frac{2}{3}y = \frac{5}{3} \\
x+4y = 3 \end{cases} $$

faccio la sottrazione tra le due equazioni:

$$x+4y=3\\
-\\
x+\frac{2}{3}y= \frac{5}{3}\\
=\\
0x+\frac{10}{3}y= \frac{4}{3}$$

$$\begin{cases} x+\frac{2}{3}y = \frac{5}{3} \\
\frac{10}{3}y = \frac{4}{3} \end{cases} ... \begin{cases} x = \frac{7}{5} \\
y = \frac{2}{5} \end{cases}$$

Il risultato quindi è il punto $(\frac{7}{5}, \frac{2}{5})$

## Sistemi lineari e matrici

è possibile rappresentare un sistema lineare come una matrice in cui inserire i coefficienti delle equazioni:

$$\begin{cases}
3x + 2y = 5\\
x + 4y = 3
\end{cases} \to
\begin{bmatrix}
3 & 2 &| 5 \\
1 & 4 &| 3 \\
\end{bmatrix}$$

Nelle matrici è possibile:
- Scambiare le righe
- Moltiplicare una riga per una scalare
- Sottrarre ad una riga un'altra
- Semplificare i componenti di della riga

### Sistemi lineari in $\mathbb{R}^3$

$$\begin{cases}
3x + 2y + z = 0 \\
x + 4y + 3z = 0 \\
x + y + z = 0
\end{cases}$$

Avendo tre equazioni abbiamo i relativi tre piani (passanti per l'origine in questo caso):

$A \to(3,2,1)$

$B \to(1,4,3)$

$C \to(1,1,1)$

In generale **sono possibili tre risultati**:

- l'intersezione è **un piano**, se  i tre vettori (A, B, C) sono collineari (giacciono sulla stessa retta).
- l'intersezione è **una retta**, se i tre vettori non sono collineari ma si trovano sullo stesso piano che passa per l'origine.
- l'intersezione è **un punto**, se A e B non collineari e C non si trova nel piano generato da A e B.

1. controlliamo se A e B sono collineari:

$$\cos \alpha_{AB} \frac{A \cdot B}{||A|| \cdot ||B||} = \frac{3\cdot 1 + 2 \cdot 4 + 1 \cdot 3}{\sqrt{14} \cdot \sqrt{26}}$$

dato che è $<1$ allora non sono collineari

2. controlliamo se C appartiene al piano generato da A e B

Se C dovesse appartenere al piano allora dovrebbero esistere degli scalari $c$ e $d$ per cui $c(3,2,1) + d(1,4,3) = (1,1,1)$

$$\begin{cases}
3c+1d = 1 \\
2c + 4d = 1 \\
1c + 3d = 1
 \end{cases}$$

Risolvendo si raggiunge una affermazione falsa per cui C non appartiene al piano generato da A e B.

Da questo possiamo concludere che il risultato sarà un punto.

Dato che tutti i vettori si intersecano in 0 allora l'unica soluzione possibile è il vettore nullo (0,0,0).

### Metodo di risoluzione con la matrice

$$\begin{cases}
3x + 2y + z = 5 \\
x + 4y + 3z = 3 \\
x + y + z = 0
\end{cases}$$

$A \to(3,2,1)$

$B \to(1,4,3)$

$C \to(1,1,1)$

Dopo aver controllato che A e B non sono collineari.

Scriviamo il sistema come una matrice

$$\begin{bmatrix}
3 & 2 & 1 & 5 \\
1 & 4 & 3 & 3 \\
1 & 1 & 1 & 0
\end{bmatrix}$$

Cambiamo l'ordine delle righe

$$\begin{bmatrix}
1 & 1 & 1 & 0 \\
3 & 2 & 1 & 5 \\
1 & 4 & 3 & 3
\end{bmatrix}$$

$R_2 = R_2 - (3R_1)$

$$\begin{bmatrix}
1 & 1 & 1 & 0 \\
0 & -1 & -2 & 5 \\
1 & 4 & 3 & 3
\end{bmatrix}$$

$R_3 = R_3 - R_1$

$$\begin{bmatrix}
1 & 1 & 1 & 0 \\
0 & -1 & -2 & 5 \\
0 & 0 & -4 & 18
\end{bmatrix}$$

Quando abbiamo raggiunto lo "scalino" possiamo tornare al sistema:

$$\begin{cases}
x + y + z = 0 \\
0  -y -2z = 5 \\
0 + 0 -4z = 18
\end{cases}$$

risolvendo il sistema...

$$\begin{cases}
x = \frac{1}{2} \\
y  = 4 \\
z = -\frac{9}{2}
\end{cases}$$


## Metodo di Cramer

Il metodo di Cramer prevede una risoluzione per i sistemi lineari quadrati (cioè che hanno lo stesso numero di equazione e di incognite)

$$a_{11}x_1 + a_{12}x_2 + ... + a_{1m}x_m = b_1 \\
a_{21}x_1 + a_{22}x_2 + ... + a_{2m}x_m = b_2 \\
... \\
a_{m1}x_1 + a_{m2}x_2 + ... + a_{mm}x_m = b_m$$

Il metodo di Cramer è applicabile solo se il **determinate è diverso da** $0$

Avendo il sistema lineare:

$\begin{cases}
2x + y + z = 3 \\
x - y - z = 0 \\
x + 2y + z = 0
\end{cases}$

Vettore dei termini noti: $b = \begin{pmatrix}
3 \\
0 \\
0 \\
\end{pmatrix}$

Otteniamo la matrice dei coefficienti:

$A = \begin{bmatrix}
2 & 1 & 1 \\
1 & -1 & -1 \\
1 & 2 & 1
\end{bmatrix}$

Con Sarrus abbiamo che $\det(A) = 3$


Ottengo $D_x$ sostituendo $b$ nella prima colonna (la colonna delle $x$ ):

$D_x = \begin{vmatrix}
3 & 1 & 1 \\
0 & -1 & -1 \\
0 & 2 & 1
\end{vmatrix} \text{tramite Sarrus (o con i complementi algebrici) ottengo } D_x = 3$ 

Ottengo $D_y$ sostituendo $b$ nella seconda colonna (la colonna delle $y$ ):

$D_y = \begin{vmatrix}
2 & 3 & 1 \\
1 & 0 & -1 \\
1 & 0 & 1
\end{vmatrix} \text{tramite Sarrus (o con i complementi algebrici) ottengo } D_y = -6$ 

Ottengo $D_z$ sostituendo $b$ nella terza colonna (la colonna delle $z$ ):

$D_z = \begin{vmatrix}
2 & 1 & 3 \\
1 & -1 & 0 \\
1 & 2 & 0
\end{vmatrix} \text{tramite Sarrus (o con i complementi algebrici) ottengo } D_z = 9$ 


Infine otteniamo le soluzione facendo:

$$x = \frac{D_x}{D} \hspace{5mm} y = \frac{D_y}{D} \hspace{5mm} z = \frac{D_z}{D}$$

$$x = \frac{3}{3} \hspace{5mm} y = \frac{-6}{3} \hspace{5mm} z = \frac{9}{3}$$

$$x = 1 \hspace{5mm} y = -2 \hspace{5mm} z = 3$$


## Teorema di Rouchè-Capelli

Questo teorema permette di stabilire se un sistema lineare ammette soluzione e in caso affermativo permette di trovarle mediante lo studio del rango di due matrici.

Dato un sistema lineare $Ax = b$ otteniamo la matrice dei coefficienti $A$ e il vettore dei termini noti $b$, otteniamo la **matrice completa** $(A|b)$ accostando il vettore alla matrice dei coefficienti

Il teorema stabilisce che:

- $\text{rank}(A) < \text{rank}(A|b)$ allora **non ci sono soluzioni**
- $\text{rank}(A) = \text{rank}(A|b)$ allora **ammette soluzioni**
	- $\text{rank}(A) = \text{rank}(A|b) = n$ allora c'è **una sola soluzione** $(n = \text{numero di incognite})$
	- $\text{rank}(A) = \text{rank}(A|b) < n$ allora ci sono **infinite soluzioni** $(n = \text{numero di incognite})$
