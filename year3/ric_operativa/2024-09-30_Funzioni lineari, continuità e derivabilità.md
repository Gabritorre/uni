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

Mentre le funzioni in questa forma non sono lineari:

$$
f(x) = cx + \bar c \hspace{5mm} c \in \mathbb{R}^n,\hspace{1mm} \bar c \in \mathbb{R}\setminus \{0\}
$$

infatti:

- $f(x + y) = c(x + y) + \bar c = cx + cy + \bar c = f(x) + cy$
- $f(\alpha x) = c(\alpha x) + \bar c = \alpha(c x) + \bar c$

Nella letteratura anche le funzioni nella seconda forma vengono considerate come lineari, in quanto si comportano come le funzioni lineari.

In realtà le funzioni nella seconda forma sono più propriamente dette **funzioni affini**

### Esercizio:

Data la seguente funzione $f: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ verificare che sia lineare in $\mathbb{R}^3$

$$
f(x_1, x_2, x_3) = (x_1 + 5x_2 + 2x_3, 2x_2 + x_3)
$$

Si può vedere immediatamente la linearità della funzione, infatti ogni componente è un polinomio di **primo grado** (non ci sono termini del tipo  $x_1\cdot x_2$ o $x_1^2$) e **non ci sono termini noti nelle componenti**

## Funzione continua

Data una funzione, semplificando, possiamo dire che è continua se tracciando il suo grafico non ci sono “buchi”.

Per determinare che una funzione è continua in un punto deve valere:

$$
\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = f(x_0)
$$

## Derivata di un punto della funzione

Lavorando con una variabile, calcolare la derivata di un punto appartenente ad una funzione rappresenta la **pendenza della retta tangente** che tocca la funzione in quel punto. Indica quindi se in quel punto la funzione sta salendo, sta scendendo oppure è in un punto particolare (un massimo, un minimo o un flesso).

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

Indichiamo il punto, composto da $n$ variabili, come $\bar x$ e definiamo il gradiente come:

$$
\nabla f(\bar x) = \begin{pmatrix}
\frac{\partial f(\bar x)}{\partial x_1} \\
... \\
\frac{\partial f(\bar x)}{\partial x_n}
\end{pmatrix}
$$

Derivando le derivate parziali si ottengono le **derivate parziali seconde**, che permettono di analizzare la concavità di superfici.

Indichiamo la derivata parziale seconda di una funzione $f$ rispetto alla variabile $x$ e alla variabile $y$ in questo modo:

$$
\frac{\partial^2 f(\bar x)}{\partial x_i, \partial x_j} \hspace{5mm} \text{con }i, j \in [1 ... n]
$$

Indicheremo le funzioni $f \in C^2(\mathbb{R}^n)$, come le funzioni continue e derivabili, le cui derivate prima e seconda sono continue.

Analogamente al gradiente, per le derivate parziali seconde abbiamo **l’hessiana.**

Definiamo **l’hessiana** **di un punto** come una matrice contenente le derivate parziali seconde in quel punto.

Indichiamo il punto, composto da $n$ variabili, come $\bar x$ e definiamo l’hessiana come:

$$
\nabla^2f(\bar x) = \begin{pmatrix}
\frac{\partial^2 f(\bar x)}{\partial x_1, \partial x_1} & ... & \frac{\partial^2 f(\bar x)}{\partial x_1, \partial x_n} \\
... & ... & ...\\
\frac{\partial^2 f(\bar x)}{\partial x_n, \partial x_1} & ... & \frac{\partial^2 f(\bar x)}{\partial x_n, \partial x_n}
\end{pmatrix}
$$

In particolare, nel caso si lavori con una sola variabile, $n=1$, le definizioni di gradiente ed hessiana, corrispondono alle definizioni di derivata prima e seconda di $f(x)$.

## Teoremi del valor medio

Dal teorema di Tylor è possibile ricavare due risultati chiamati **Teoremi del valor medio**.

I teoremi sono due ma esprimono lo stesso concetto, scritto in due modi diversi.

- Prima forma:
    
    $$
    f(y) = f(x) + \nabla f(x)^T \cdot (y-x ) + o(||y-x||)
    $$
    
- Seconda forma:
    
    $$
    f(y) = f(x) + \nabla f[x + \theta(y-x)]^T \cdot (y-x)
    $$
    

L’interpretazione è quella di ottenere una approssimazione del valore di $f(y)$, conoscendo il valore di $f(x)$, l’andamento della funzione intorno a $f(x)$.

Dato che si tratta di una approssimazione, più distante è il punto da determinare (cioè $y$) rispetto al punto conosciuto (cioè $x$) peggiore sarà l’approssimazione.

### Analizziamo la **prima forma**

$$
f(y) = f(x) + \nabla f(x)^T \cdot (y-x ) + o(||y-x||)
$$

la prima forma ci dice che il valore di $f(y)$ è dato dal valore di $f(x)$ più l’andamento della funzione andando da $x$ a $y$, $y$$\nabla f(x)^T \cdot (y-x )$. Infine viene considerato un errore di approssimazione $o(||y-x||)$ che diventa trascurabile quando $y$ si avvina molto a $x$.

In particolare l’errore di approssimazione deve essere tale da valere:

$$
\lim_{y\to x} \frac{o(||y-x||)}{||y-x||} = 0
$$

Di questa forma è anche possibile dare una interpretazione grafica in caso di funzione non lineare e lineare, vediamo prima il caso non lineare:

![https://i.ibb.co/ZdFPQkp/es1.png](https://i.ibb.co/ZdFPQkp/es1.png)

Mentre con una funzione lineare notiamo come l’errore di approssimazione è $0$ e quindi si può togliere dal calcolo

![https://i.ibb.co/pnXhHby/image.png](https://i.ibb.co/pnXhHby/image.png)

### Analizziamo la seconda forma

$$
f(y) = f(x) + \nabla f[x + \theta(y-x)]^T \cdot (y-x)
$$

la seconda forma ci dice che il valore di $f(y)$ è dato dal valore di $f(x)$ più l’andamento della funzione in un punto intermedio tra $x$ e $y$, tale punto è $x+ \theta(y-x)$ dove $\theta$ indica la frazione della distanza tra $x$ e $y$, per il teorema esiste un valore di $\theta$ nell’intervallo $[0, 1]$ calcola in modo preciso la variazione della funzione.

L’incertezza che prima era nell’o-piccolo adesso è attribuita al fatto che non calcoliamo più l’andamento nel punto che conoscevamo $\nabla f(x)$ ma lo calcoliamo in un punto intermedio tra $x$ e $y$, $y$$\nabla f[x + \theta(y-x)]$

## Teorema del valore medio del secondo ordine

Con funzioni due volte continuamente derivabili possiamo avere una approssimazione ancora più precisa:

- Prima forma:
    
    $$
    f(y) = f(x) + \nabla f(x)^T \cdot (y-x) + \frac{1}{2}(y-x)^T\nabla^2f(x)(y-x) + o(||y-x||^2)
    $$
    
- Seconda forma:
    
    $$
    f(y) = f(x) + \nabla f(x)^T(y-x) + \frac{1}{2}(y-x)^T \nabla^2 f[x + \theta(y-x)] (y-x)
    $$
    

## Derivata direzionale

La derivata direzionale generalizza il concetto di derivata parziale, infatti mentre le derivate parziali osservano l’andamento della funzione dal punto di vista degli assi (come varia rispetto all’asse x, come varia rispetto all’asse y, ecc…), **le derivate direzionali osservano l’andamento della funzione rispetto una direzione libera,** $d \in \mathbb{R}^n \setminus \{0\}$.

Data la direzione $d \in \mathbb{R}^n \setminus \{0\}$ e una funzione $f : \mathbb{R}^n \rightarrow \mathbb{R}$ continuamente derivabile in $\mathbb{R}^n$ definiamo la derivata direzionale della funzione $f$ nel punto $x$ lungo la direzione $d$ come:

$$
D(f, d) = \hspace{3mm} \nabla f(x)^T \cdot d \hspace{3mm} =\hspace{3mm} f(x + d) - f(x) - o(||d||)
$$

quindi quando $||d||$ è piccola si può trascurare dal calcolo.

Per determinare **se esiste la derivata direzionale** lungo una qualsiasi direzione non nulla è sufficiente che la funzione sia di classe $C^1(\mathbb{R}^n)$

Esercizio:

Data la funzione affine

$$
f(x) = c^T x + \bar c \hspace{5mm} c \in \mathbb{R}^n, \bar c \in \mathbb{R}
$$

dimostrare che la derivata direzionale coincide con $c^T\cdot d$

**Ogni funzione affine è continua e derivabile con derivata continua**: dato che $x$ e $c$ sono vettori possiamo vedere la funzione come: $f(x) = c_1x_1 + c_2x_2 + … + c_nx_n + \bar c$

derivando tale funzione rispetto a tutti gli $x$ ci porta ad avere il vettore:

$\nabla f(x) = c = \begin{pmatrix} c_1\\…\\c_n\end{pmatrix}$

Otteniamo quindi che la derivata direzionale è:

$$
D(f, d) = \nabla f(x) \cdot d = c^T \cdot d
$$
