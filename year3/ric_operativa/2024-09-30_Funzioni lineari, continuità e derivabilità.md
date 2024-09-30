# Funzioni lineari, continuità e derivabilità

## Funzione lineare

Data una funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$, si dice che $f(x)$ è **lineare** in $\mathbb{R}^n$ se soddisfa le seguenti relazioni:

1. $f(x+y) = f(x) + f(y) \hspace{5mm} \forall x, y \in \mathbb{R}^n$ 
2. $f(\alpha x) = \alpha f(x) \hspace{5mm} \forall x \in \mathbb{R}^n, \forall \alpha \in \mathbb{R}$

Nella definizione $n$ indica il numero di variabili su cui lavora la funzione, mentre $m$ è il numero di componenti. Ad esempio con $n=3, m=2$ abbiamo una funzione del tipo:

$$
f(x_1, x_2, x_3) = (x_1 + 5x_2 + 2x_3, \hspace{1mm}2x_2 + x_3)
$$

Le funzioni in questa forma sono lineari:

$$
f(x) = cx \hspace{5mm} c \in \mathbb{R}^n
$$

infatti:

- $f(x + y) = c(x + y) = cx + cy = f(x) + f(y)$
- $f(\alpha x) = c(\alpha x) = \alpha(c x) = \alpha f(x)$

Mentre le funzioni in questa forma non sono lineari (ma **affini**):

$$
f(x) = cx + \bar c \hspace{5mm} c \in \mathbb{R}^n,\hspace{1mm} \bar c \in \mathbb{R}\setminus \{0\}
$$

infatti:

- $f(x + y) = c(x + y) + \bar c = cx + cy + \bar c = f(x) + cy$
- $f(\alpha x) = c(\alpha x) + \bar c = \alpha(c x) + \bar c$

Nella letteratura anche le funzioni nella seconda forma vengono considerate come lineari, in quanto si comportano come le funzioni lineari. 

Di fatti le funzioni nella seconda forma sono più propriamente dette **funzioni affini**

## Funzione continua

Data una funzione, semplificando, possiamo dire che è continua se tracciando il suo grafico non ci sono “buchi”

## Derivata di un punto della funzione

Calcolare la derivata di un punto appartenente ad una funzione rappresenta la **pendenza della retta tangente** che tocca la funzione in quel punto. Indica quindi se in quel punto la funzione sta salendo, sta scendendo oppure è in un punto particolare (un massimo, un minimo o un flesso).

Calcolare la derivata di una funzione indica quindi ottenere una nuova funzione che rappresenta la  pendenza della funzione originale in ogni suo punto.

## Derivata parziale

Quando si lavora con funzioni a più variabili, entrano in gioco le derivate parziali.

Si passa quindi a lavorare da curve 2D (una variabile) a superfici 3D (due variabili) ecc…

La derivata parziale di una funzione calcola la pendenza della funzione rispetto a una determinata variabile, mantenendo costanti le altre variabili, come se si facesse un “taglio” alla superficie in una direzione parallela all’asse della variabile scelta.

Indichiamo la derivata parziale di una funzione $f$ in un punto $\bar x$ rispetto alla variabile $x$ in questo modo:

$$
\frac{\partial f(\bar x)}{\partial x}
$$

Lavorando con $n$ variabili avremmo quindi $n$ possibili derivate parziali.

Indicheremo le funzioni $f \in C^1(\mathbb{R}^n)$, come le funzioni continue e derivabili, la cui derivata è continua.

Definiamo il **gradiente di un punto** come un vettore contenente le derivate parziali in quel punto.

Indichiamo il punto composto da $n$ variabili come $\bar x$ e definiamo il gradiente come:

$$
\nabla f(\bar x) = \begin{pmatrix}
\frac{\partial f(\bar x)}{\partial x_1} \\
... \\
\frac{\partial f(\bar x)}{\partial x_n}
\end{pmatrix}
$$

Derivando le derivate parziali si ottengono le **derivate parziali seconde**, che permettono di analizzare la concavità di superfici.

Indichiamo la derivata parziale di una funzione $f$ rispetto alla variabile $x$ e alla variabile $y$ in questo modo:

$$
\frac{\partial^2 f(\bar x)}{\partial x_i, \partial x_j} \hspace{5mm} \text{con }i, j \in [1 ... n]
$$

Indicheremo le funzioni $f \in C^2(\mathbb{R}^n)$, come le funzioni continue e derivabili, le cui derivate prima e seconda sono continue.

Analogamente al gradiente, per le derivate parziali seconde abbiamo **l’essiana.**

Definiamo **l’essiana** **di un punto** come una matrice contenente le derivate parziali seconde in quel punto.

Indichiamo il punto composto da $n$ variabili come $\bar x$ e definiamo l’essiana come:

$$
\nabla^2f(\bar x) = \begin{pmatrix}
\frac{\partial^2 f(\bar x)}{\partial x_1, \partial x_1} & ... & \frac{\partial^2 f(\bar x)}{\partial x_1, \partial x_n} \\
... & ... & ...\\
\frac{\partial^2 f(\bar x)}{\partial x_n, \partial x_1} & ... & \frac{\partial^2 f(\bar x)}{\partial x_n, \partial x_n}
\end{pmatrix}
$$

## Teoremi del valor medio

Una possibile applicazione delle derivate riguarda i teoremi del valor medio:

1. $f(y) = f(x) + \nabla f[x + \theta(y-x)]^T (y-x)$
2. $f(y) = f(x) + \nabla f(x)^T (y-x ) + o(||y-x||)$
