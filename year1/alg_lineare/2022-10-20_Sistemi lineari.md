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
- Se le due rette coincidono ( $\cos \alpha = 1$ ) allora ci sono **infinite soluzioni**
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
