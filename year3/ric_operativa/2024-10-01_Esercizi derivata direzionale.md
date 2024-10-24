# Esercizi derivata direzionale

## Es 1

Sia data la funzione $f: \mathbb{R}^3 \rightarrow \mathbb{R}$

$$
f(x)= x_1 \sqrt{\ln(x_3 - 1)}
$$

Si dica (argomentandolo) per quali valori di $x_1 x_2 x_3$ la funzione $f$ ammette derivata direzionale.
Inoltre se ne calcoli la derivata direzionale nel punto di coordinate $\bar x = (2,2,3)^T$, lungo la direzione
$d =(3,0,3)^T$, e si dica se la funzione decresce lungo d in un intorno del punto $\bar x$.

In generale la derivata direzionale esiste se la funzione è di classe $C^1(\mathbb{R}^n)$

troviamo il dominio della nostra funzione: non abbiamo vincoli da imporre per $x_1, x_2$ mentre dobbiamo imporre che:

$$
\begin{cases}
x_3-1 > 0\\
\ln(x_3 - 1) \geq 0
\end{cases} =
\begin{cases}
x_3 > 1\\
x_3 - 1 \geq 1
\end{cases} = 
\begin{cases}
x_3 > 1\\
x_3 \geq 2
\end{cases}
$$

Imponendo $x_3 \geq 2$ soddisfiamo entrambi i requisiti. Con tale dominio la funzione è continua, calcoliamo la derivata.

$$
\nabla f(x) = \begin{bmatrix}
\sqrt{\ln(x_3-1)} \\
0 \\
x_1 \frac{1}{2\sqrt{\ln(x_3-1)}}\cdot\frac{1}{x_3-1} \cdot 1
\end{bmatrix} = \begin{bmatrix}
\sqrt{\ln(x_3-1)} \\
0 \\
\frac{x_1}{2(x_3-1)\sqrt{\ln(x_3-1)}}
\end{bmatrix}
$$

la funzione è quindi derivabile se imponiamo che $x_3 >2$ (dato che $\ln(x_3 - 1)$ sta al denominatore)

La derivata è anche continua in tale dominio.

Dato che la funzione appartiene alla classe $C^1$ per $x_3 > 2$ allora esiste la derivata direzionale.

Siccome il punto $\bar x$ rispetta il dominio possiamo calcolare la derivata direzionale in quel punto e con la direzione data:

$$
D(f, d) = \nabla f(\bar x)^T d = \begin{bmatrix}
\sqrt{\ln(2)} \\
0 \\
\frac{2}{2\cdot 2 \cdot \sqrt{\ln(2)}}
\end{bmatrix}^T \cdot \begin{pmatrix}3 \\
0\\
3
\end{pmatrix} = 3\sqrt{\ln(2)} + \frac{3}{2}\frac{1}{\sqrt{\ln(2)}}
$$

Dato che la quantità risultate è positiva allora la funzione sta NON sta decrescendo in quel punto
