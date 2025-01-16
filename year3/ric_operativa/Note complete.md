
# Spazi vettoriali

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

Presi i vettori $z_1,…,z_m \in V^n(K)$ non tutti nulli, essi sono linearmente indipendenti se calcolato

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
\end{pmatrix}+ b
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
    
    Spesso la combinazione convessa di due punti si scrive in questo modo:
    
    $$
    z = \alpha x + (1-\alpha)y \hspace{5mm} \alpha \in [0, 1]
    $$
    
    Si può notare che quando $\alpha = 0$ allora $z \equiv y$, mentre quando $\alpha = 1$ allora $z = x$
    
    ## Prodotto scalare standard
    
    Dato uno spazio vettoriale $V^n(K)$, il prodotto scalare standard è una funzione che prende in input due vettori e restituisce uno scalare: $V^n(K) \times V^n(K) \rightarrow \mathbb{R}$.
    
    L’operazione di prodotto scalare standard si indica con la seguente simbologia: $<v_1, v_2>$ dove $v_1,v_2$ sono dei vettori.
    
    Questa funzione per essere un prodotto scalare deve soddisfare tre **proprietà**:
    
    1. $\forall v \in V^n(K),\hspace{2mm} <v, v> \hspace{2mm}\geq \hspace{2mm} 0$
        
        il prodotto scalare di un vettore per se stesso è un valore positivo, in particolare è $=0$ se e solo se $v$ è il vettore nullo
        
    2. $\forall u, v, z \in V^n(K),\hspace{2mm} <u + v, z> \hspace{2mm} =  \hspace{2mm}<u, z> \oplus <v, z>$
        
        proprietà distributiva, nota che $\oplus$ è la somma tra scalari reali
        
    3. $\forall u, v \in V^n(K),\hspace{2mm} <u, v> \hspace{2mm}=\hspace{2mm} <v, u>$
        
        proprietà commutativa
        

Il prodotto scalare standard può essere calcolato nei seguenti modi equivalenti:

Presi due vettori:

$$
v = \begin{pmatrix}
v_1\\
...\\
v_n
\end{pmatrix}
\hspace{5mm}
u = \begin{pmatrix}
u_1\\
...\\
u_n
\end{pmatrix}
$$

il prodotto scalare standard si calcola come:

$$
<v, u> = v_1u_1 + ... + v_nu_n = v^Tu = \sum_{i=1}^n v_i\cdot u_i
$$

### Vettori ortogonali

Dati due vettori $u, v$ dello spazio vettoriale $\mathbb{R}^n$, si dice che i vettori $u, v$ sono **ortogonali** (indicato con $u\perp v$) se e solo se $<u, v> = 0$

**Dei vettori ortogonali sono anche linearmente indipendenti**, il contrario non sempre vale.

## Norma

Dato uno spazio vettoriale $V^n(K)$, la norma è una funzione che prende in input un vettore e restituisce uno scalare. $V^n(K) \rightarrow \mathbb{R}^+$

La norma si indica con la seguente simbologia: $||v_1||_*$ dove $v_1$ è un vettore e il pedice indica il tipo di norma.

Questa funzione per essere una norma deve soddisfare tre proprietà:

1. $\forall v \in V^n(K), \hspace{2mm} ||v||_* \geq 0$
    
    La norma di un vettore è un valore positivo, in particolare è $=0$ se e solo se $v$ è il vettore nullo
    
2. $\forall v \in V^n(K), \forall \alpha \in K \hspace{3mm} ||\alpha \bullet v||_* = |\alpha|\cdot ||v||_*$
    
    la norma di un vettore moltiplicato per uno scalare equivale al valore assoluto dello scalare moltiplicato alla norma del vettore.
    
    rappresenta graficamente un allungamento (con $\alpha > 1$) oppure un restringimento (con $0<\alpha<1$) del vettore.
    
3. $\forall u, v \in V^n(K), \hspace{3mm} ||u + v||_* \hspace{2mm}\leq \hspace{2mm} ||u||_* + ||v||_*$
    
    chiamata proprietà di disuguaglianza triangolare
    

Possiamo assimilare il concetto di norma come la **distanza dall’origine**.

### Tipi di norma

Vediamo 3 tipi di norma, considerando $v \in \mathbb{R}^n$:

- Norma uno:

$$
||v||_1 = |v_1| + |v_2| + … + |v_n|
$$

- Norma due (euclidea)

$$
||v||_2 = \sqrt{(v_1)^2 + ... + (v_n)^2}
$$

- Norma infinito

$$
||v||_\infty = \underset{1 \leq i \leq n}{\max} |v_i|
$$

Graficamente possiamo vedere le norme come delle distanze, ad esempio vediamo il confronto tra i vari tipi di norma tracciano i punti in cui le norme valgono 1

![https://i.ibb.co/3kzbQt8/image.png](https://i.ibb.co/3kzbQt8/image.png)

La norma 1 rappresenta una distanza calcolata percorrendo linee rette parallele agli assi, come se dovessi muoverti lungo una griglia.

La norma 2 è la distanza geometrica più familiare.

Nei punti $(0, 1), (0, -1), (1, 0), (-1, 0)$ le tre norme hanno lo stesso valore

## Relazione tra norma e prodotto scalare standard

Utilizzando la norma euclidea è possibile ricavarsi il prodotto scalare standard tra due vettori.

Indichiamo con $\phi$ l’angolo più piccolo formato dai i vettori $u$ e $v$. Allora il prodotto scalare standard tra $u$ e $v$ si può ottenete con la seguente formula:

$$
<v, u> = ||v||_2 \cdot ||u||_2 \cdot \cos\phi
$$

torna con il fatto che se due vettori sono ortogonali, formano un angolo $\phi = 90°$, il cui coseno è $0$, rendendo così il prodotto scalare tra i due vettori ortogonali uguale a $0$

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

# Programmazione matematica

Introduciamo dei problema di programmazione matematica.

I primi problemi riguardano i punti stazionari: **punti di massimo e di minimo**.

Lavoreremo con funzioni $f: \mathbb{R}^n \rightarrow \mathbb{R}$ ed intervalli $C \subseteq \mathbb{R}^n$.

I problemi che dovremo risolvere saranno del tipo

$$
\overset{\min f(x)}{x \in C} \hspace{5mm} \text{oppure} \hspace{5mm} \overset{\max f(x)}{x \in C}
$$

Dove indichiamo:

- $x$: come il vettore delle variabili
- $f(x)$: la **funzione obiettivo** da massimizzare/minimizzare
- $C$ insieme di valori (vettori di $n$ dimensioni) che rappresentano delle soluzioni ammissibili

I problemi consistono nel trovare tra tutte le soluzioni ammissibili, quella che rende minima o massima la funzione obiettivo (possono essere anche più di una)

## Teorema di Weierstrass

Una prima cosa da verificare è se esiste una possibile soluzione, per questo è utile sapere il teorema di Weierstrass:

Data la funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$, tale che $f$ è continua nell’intervallo $C \subseteq \mathbb{R}^n$ **chiuso e limitato**, allora la funzione ammette un minimo e un massimo globale sull’intervallo $C$.

**Nota**: si stratta di una implicazione, quindi una funzione e intervallo che non rispettano le ipotesi potrebbero comunque avere un minimo e un massimo.

Un intervallo è **chiuso** se contiene i propri punti di frontiera.

Ad esempio se consideriamo la funzione $f(x) = \ln x$ con l’intervallo $C = [0, 1]$ e vogliamo trovare il suo punto di minimo. Abbiamo un intervallo chiuso e limitato ma la funzione non è continua in questo intervallo, infatti in $0$ il logaritmo non esiste. Di conseguenza la funzione $f(x)$ non ha un punto di minimo.

Nota che anche un intervallo del tipo $C = [\frac{1}{2}, 1] \cup [2, 5]$ è considerato chiuso e limitato.

## Definizioni di minimo e massimo

Consideriamo una funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$ e un insieme $C \subseteq \mathbb{R}^n$

### Minimo locale

Il punto $x^* \in C$ è un punto di **minimo locale** della funzione $f(x)$ su $C$, se 

$$
f(x^*) \leq f(x)\hspace{5mm} \forall x \in I(x^*, \rho) \cap C
$$

Dove $I(x^*, \rho)$ è un intorno circolare di punti con centro $x^*$ e raggio $\rho$.

Si definisce punto di **minimo locale stretto** se la disuguaglianza è un minore stretto con $x \neq x^*$

### Minimo globale

Il punto $x^* \in C$ è un punto di **minimo globale** della funzione $f(x)$ su $C$, se 

$$
f(x^*) \leq f(x)\hspace{5mm} \forall x \in C
$$

Si definisce punto di **minimo globale unico** se la disuguaglianza è un minore stretto con $x \neq x^*$

### Massimo locale

Il punto $x^* \in C$ è un punto di **massimo locale** della funzione $f(x)$ su $C$, se 

$$
f(x^*) \geq f(x)\hspace{5mm} \forall x \in I(x^*, \rho) \cap C
$$

Dove $I(x^*, \rho)$ è un intorno circolare di punti con centro $x^*$ e raggio $\rho$.

Si definisce punto di **massimo locale stretto** se la disuguaglianza è un maggiore stretto con $x \neq x^*$

### Massimo globale

Il punto $x^* \in C$ è un punto di **massimo globale** della funzione $f(x)$ su $C$, se 

$$
f(x^*) \geq f(x)\hspace{5mm} \forall x \in C
$$

Si definisce punto di **massimo globale unico** se la disuguaglianza è un minore stretto con $x \neq x^*$

# Esercizi programmazione matematica

## Es 1

Un’industria possiede $3$ centri di produzione (fabbriche) $F1, F2, F3$ e $2$ magazzini di stoccaggio $M1, M2$. Nelle fabbriche durante il mese corrente si producono due tipi di prodotti $P1$ e $P2$, che vanno trasportati nei magazzini, in attesa del ritiro da parte dei grossisti (si assuma che la descrizione semplificata appena data, contenga tutti e soli gli elementi caratterizzanti della produzione di $P1$ e $P2$).

Nella seguente tabella riassumiamo i tempi unitari (in ore/unità) ed i costi unitari (in euro/unità) di produzione di $P1$ e $P2$, in ciascuna fabbrica:

![https://i.ibb.co/9gjWgkf/image.png](https://i.ibb.co/9gjWgkf/image.png)

 

Inoltre, in ciascuna fabbrica, è possibile far lavorare gli impianti per un numero di ore massimo pari a $2200$ ore per $F1$, $930$ ore per $F2$ e $1600$ ore per $F3$. infine i $2$ magazzini richiedono rispettivamente un numero minimo di unita di prodotto pari a:

|  | $M1$ | $M2$ |
| --- | --- | --- |
| $P1$ | 1100 | 1900 |
| $P2$ | 1650 | 1300 |

ed i costi di trasporto (euro/unità) dalle fabbriche ai magazzini, sono riassunti nella seguente tabella:

|  | $F1$ | $F2$ | $F3$ |
| --- | --- | --- | --- |
| $M1$ | 0.9 | 0.88 | 1.03 |
| $M2$ | 0.99 | 1.10 | 0.85 |

Sulla base dei soli dati forniti si fornisca un modello di Programmazione Matematica nel quale si intende **minimizzare i costi di produzione e trasporto** dei prodotti $P1$ e $P2$.

## Risoluzione

### Step 1 - definizione variabili

Introduciamo i due seguenti insiemi di variabili:

- $x_{ij}$ = unita di $P1$ prodotte nella fabbrica $Fi$ e trasportati nel magazzino $Mj$
$(i = 123, j =12)$
- $y_{ij}$ = unita di $P2$ prodotte nella fabbrica $Fi$ e trasportati nel magazzino $Mj$
$(i = 123, j =12)$

### Step 2 - definizione funzione obiettivo

In questo caso si tratta di un problema di **minimizzazione** (di costi di produzione + trasporto).

La quantità da minimizzare (funzione obiettivo) è data da:

$$
\min\begin{array}{l}    \text{costi di produzione P1} +\\
\text{costi di trasporto P1}+ \\    \text{costi di produzione P2} + \\    \text{costi di trasporto P2 +}\end{array}
$$

$$
\min\begin{array}{l}    7.2(x_{11} + x_{12}) + 6.3(x_{21} + x_{22}) + 5.2(x_{31} + x_{32}) + \\    0.90x_{11} + 0.88x_{21} + 1.03x_{31} + 0.99x_{12} + 1.10x_{22} + 0.85x_{32} + \\    9.2(y_{11} + y_{12}) + 7.3(y_{21} + y_{22}) + 6.6(y_{31} + y_{32}) + \\    0.90y_{11} + 0.88y_{21} + 1.03y_{31} + 0.99y_{12} + 1.10y_{22} + 0.85y_{32}.\end{array}
$$

### Step 3 - definizione vincoli

Definiamo infine i vincoli che il modello del problema deve rispettare.

In particolare definiamo i vincoli relativi ai tempi di produzione per ogni fabbrica:

$$
0.72(x_{11} + x_{12}) + 0.81(y_{11} + y_{12}) \leq 2022 \\
0.63(x_{21} + x_{22}) + 0.68(y_{21} + y_{22}) \leq 930 \\
0.5(x_{31} + x_{32}) + 0.67(y_{31} + y_{32}) \leq 1600
$$

e i vincoli relativi ai unità minime di prodotto richieste da ogni magazzino:

$$
x_{11} + x_{21} + x_{31} \geq 1100 \\
y_{11} + y_{21} + y_{31} \geq 1650 \\
x_{12} + x_{22} + x_{32} \geq 1900 \\
y_{12} + y_{22} + y_{32} \geq 1300 \\
$$

## Es 2

Si vuole minimizzare i costi di consegna di due tipi di macchinari, dagli stabilimenti di produzione
a quattro rivenditori diversi. E previsto un costo (Euro) di consegna diverso per ogni modello di
macchinario e per ogni rivenditore, come riassunto nella seguente tabella:

|  | **Rivenditore 1** | **Rivenditore 2** | **Rivenditore 3** | **Rivenditore 4** |
| --- | --- | --- | --- | --- |
| **Macchinario 1** | 110 | 115 | 115 | 145 |
| **Macchinario 2** | 155 | 180 | 170 | 175 |

Le modalità con cui la consegna dei macchinari deve avvenire sono le seguenti:

- i macchinari del secondo tipo che vanno inviati al rivenditore 4 non possono eccedere la somma
tra i macchinari del primo tipo inviati al rivenditore 2 e il doppio dei macchinari inviati al
rivenditore 1;
- ad ogni rivenditore devono arrivare almeno 3 macchinari del tipo 1 e 4 macchinari del tipo 2;
per ogni tipo di macchinario
- al rivenditore 3 deve arrivare un numero di macchinari almeno pari ad 1/3 dei macchinari che arrivano al rivenditore 2;

Si formuli un modello di PL/PLI che fornisca la soluzione del problema di minimizzazione per la
consegna dei macchinari ai rivenditori

## Risoluzione

### Step 1 - definizione variabili

$$
x_{ij}  = \text{numero di macchinari di tipo }i \text{ inviati al rivenditore } j, \\\text{ dove } i = 1, 2; j = 1, 2, 3, 4
$$

### Step 2 - definizione funzione obiettivo

In questo caso si tratta di un problema di **minimizzazione** (di costi di consegna).

La quantità da minimizzare (funzione obiettivo) è data da:

$$
\min\begin{array}{l}    
\text{costi di consegna del macchinario 1}+ \\      \text{costi di consegna del macchinario 2 +}\end{array}
$$

$$
\min\begin{array}{l}    110x_{11} + 115x_{12} + 115x_{13} + 145x_{14}+\\
155x_{21} + 180x_{22} + 170x_{23} + 175x_{24}+\\
\end{array}
$$

### Step 3 - definizione vincoli

Definiamo infine i vincoli che il modello del problema deve rispettare in base alle modalità di consegna date dal problema.

- $x_{24} \leq x_{12} + 2(x_{11} + x_{21})$
- $x_{1j} \geq 3 \hspace{5mm} j = 1, 2, 3, 4$
    
    $x_{2j} \geq 4 \hspace{5mm} j = 1, 2, 3, 4$
    
- $x_{i3} \geq \frac{1}{3}x_{i2} \hspace{5mm} i = 1, 2$

Inoltre dobbiamo definire il seguente vincolo per completezza, infatti non possiamo avere un numero negativo di macchinari e un macchinario non è divisibile in più parti:

- $x_{ij} \geq 0$ e deve essere una variabile intera

# Problemi convessi

Per caratterizzare le proprietà dei problemi di programmazione matematica in cui l’insieme ammissibile $C$ risulta essere convesso e la funzione obiettivo è convessa, è importante introdurre il concetto di **convessità**.

In particolare con funzioni convesse i punti di **minimo locale e globale coincideranno** (lo stesso vale per i massimi locali e globali).

La programmazione convessa è un tipo di programmazione che include la programmazione lineare, e inoltre risulta essere anche più semplice. Quindi le soluzioni di un **problema di programmazione convessa valgono anche per i problemi di programmazione lineare**.

## Insieme convesso

Dato un insieme non vuoto $C \subseteq \mathbb{R}^n$, diremo che $C$ è un insieme convesso se

$$
ax + (1 -\alpha)y \in C \hspace{5mm} \forall x, y \in C, \hspace{2mm} \forall\alpha \in [0, 1]
$$

ovvero $C$ è convesso se presa qualunque coppia di punti $x, y$ nell’insieme $C$, il segmento che li congiunge è interamente all’interno dell’insieme stesso.

la quantità $ax + (1 -\alpha)y$ al variare di $\alpha \in [0, 1]$ rappresenta proprio tutti i punti del segmento che congiunge $x$ e $y$ e si chiama **combinazione convessa**.

**L’insieme vuoto** è anche ritenuto un insieme convesso, in quanto non nega la definizione.

![https://i.ibb.co/YDkBxWz/image-2.png](https://i.ibb.co/YDkBxWz/image-2.png)

### Proprietà

Dati degli insiemi convessi $C_1, …, C_m$ con $m \geq 1$ allora anche la loro **intersezione è un insieme convesso**.

![https://i.ibb.co/zbJTK54/image.png](https://i.ibb.co/zbJTK54/image.png)

## Determinare se un insieme è convesso

Se prendiamo un insieme, ad esempio

$$
C = \{x \in \mathbb{R}^2: \sqrt{x_1^2 + x_2^2} \leq 1\}
$$

Si tratta di un insieme di punti interni ad una circonferenza di raggio 1.

Per dimostrarlo bisogna determinare $w_1, w_2$, cioè le coordinate di un qualsiasi punto $w$ che sta nel segmento che congiunge $x$ e $y$ e dimostrare che qualunque sia il punto, esso stia all’interno della circonferenza: $\sqrt{w_1^2 + w_2^2} \leq 1$

Si possono tentare due approcci, il metodo algebrico che risulta essere un po’ complesso e un metodo geometrico.

### Inizio del metodo algebrico

Il metodo algebrico consiste nel trovare le coordinate del punto $w$:

$$
w = \begin{pmatrix}w_1\\w_2\end{pmatrix} = \alpha \begin{pmatrix}x_1\\x_2\end{pmatrix} + (1-\alpha) \begin{pmatrix}y_1\\y_2\end{pmatrix} \hspace{5mm} \forall \alpha \in [0, 1]
$$

e poi verificare che tali punti siano all’interno della circonferenza

$$
\sqrt{w_1^2 + w_2^2} \leq 1
$$

### Metodo geometrico

In questo metodo, che risulta essere più semplice, vengono usate le norme.

Impostiamo la combinazione convessa di qualunque $x, y \in C$ e $\alpha \in [0, 1]$:

$$
w = \alpha x + (1 - \alpha) y
$$

Volendo dimostrare che $w \in C$ e notando che $\sqrt{w_1^2 + w_2^2} = ||w||_2$, possiamo quindi calcolare la norma e verificare che sia $\leq 1$.

$$
||w|| = ||\alpha x + (1-\alpha) y||
\\
||\alpha x + (1-\alpha) y|| \leq ||\alpha x|| + ||(1-\alpha)y||
\\
||\alpha x|| + ||(1-\alpha)y|| = |\alpha|\, ||x|| + |1-\alpha|\, ||y||
\\
\text{dato che }\alpha \in [0, 1] \text{ posso togliere i valori assoluti}
\\ 
\text{inoltre per definizione dell'insieme}||x|| \leq 1, ||y|| \leq 1
\\
\text{quindi}
\\
|\alpha|\, ||x|| + |1-\alpha|\, ||y|| \leq \alpha 1 + (1 - \alpha)1
\\
\alpha 1 + (1 - \alpha)1 = 1
$$

Otteniamo quindi che per ogni $\alpha \in [0, 1], ||w|| \leq 1$

## Funzioni convesse e concave

Data una funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$ e un insieme convesso $C \subseteq \mathbb{R}^n$, si dice che la **funzione è convessa sull’insieme** $C$, se per ogni coppia di punti $x, y \in C$, risulta che

$$
f(\alpha x + (1-\alpha)y) \leq \alpha f(x) + (1-\alpha) f(y), \hspace{5mm} \forall\alpha \in [0, 1]
$$

Si dice **strettamente convessa** con una disuguaglianza in senso stretto, con $x\neq y$ e $\alpha \in (0, 1)$

Analogamente:

Data una funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$ e un insieme convesso $C \subseteq \mathbb{R}^n$, si dice che la **funzione è concava sull’insieme** $C$, se per ogni coppia di punti $x, y \in C$, risulta che

$$
f(\alpha x + (1-\alpha)y) \geq \alpha f(x) + (1-\alpha) f(y), \hspace{5mm} \forall\alpha \in [0, 1]
$$

Si dice **strettamente concava** con una disuguaglianza in senso stretto, con $x\neq y$ e $\alpha \in (0, 1)$

## Interpretazione geometrica

Vediamo l’interpretazione geometrica per la funzione convessa:

![https://i.ibb.co/5s6PSPK/image.png](https://i.ibb.co/5s6PSPK/image.png)

Vediamo quindi come una funzione è convessa su un insieme $C$ se i valori assunti dalla funzione nell’intervallo delimitato da $x$ e $y$ stanno sotto al segmento che congiunge $x$ e $y$.

È quindi possibile riconoscere le funzioni convesse in un certo intervallo se sono a forma di tazza in tale intervallo. 

### Lemma

Data la funzione $f(x)$ con $f:\mathbb{R}^n \rightarrow \mathbb{R}$ e dato **l’insieme convesso** $C \subseteq \mathbb{R}^n$, se $f(x)$ **è convessa** su $C$ allora anche $g(x) = -f(x)$ è **concava** su C

Analogamente se $f(x)$ è **concava** su $C$ allora $g(x) = -f(x)$ è **convessa** su $C$.

Nota: il lemma vale anche con funzioni **strettamente concave e convesse**.

**Dimostrazione**:

Dalla convessità di $f(x)$ segue che:

$$
f(\alpha x + (1-\alpha)y) \leq \alpha f(x) + (1-\alpha) f(y)
$$

Moltiplicando per $-1$:

$$
[-f](\alpha x + (1-\alpha)y) \geq \alpha [-f](x) + (1-\alpha) [-f](y)
$$

Sostituendo $g = -f$ ottengo esattamente la definizione di concavità

$$
g(\alpha x + (1-\alpha)y) \geq \alpha g(x) + (1-\alpha) g(y)
$$

Da questo lemma è utile notare che se $\bar x$ è un **minimo locale/globale** della funzione $f(x)$ su un insieme generico $A \subseteq \mathbb{R}^n$, allora su $-f(x)$ si avrà che $\bar x$ è un **massimo locale/globale** su $A$.

(vale anche il contrario)

## Funzioni sia convesse che concave

Data una funzione **affine** $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$, allora $f(x)$ è **sia concava che convessa** su $\mathbb{R}^n$

**Dimostrazione**:

Una funzione affine $f(x)$ ha la seguente forma: $f(x) = f_L(x) + \bar c$

Dove $f_L(x)$ è una funzione lineare e $\bar c \in \mathbb{R}$.

Presa una qualsiasi coppia $x, y \in \mathbb{R}^n$ e uno scalare $\alpha \in [0, 1]$, si avrà

$$
f[\alpha x + (1-\alpha)y] = f_L[\alpha x+(1-\alpha)y] + \bar c
\\
=\alpha f_L(x) + (1-\alpha)f_L(y) + \bar c
$$

$\bar c$ lo posso scrivere come combinazione convessa:

$$
=\alpha f_L(x) + (1-\alpha)f_L(y) + \alpha \bar c + (1-\alpha)\bar c
$$

raccolgo i termini comuni:

$$
=\alpha (f_L(x) + \bar c)  + (1-\alpha)(f_L(y) + \bar c)
$$

Dalla definizione di $f(x)$ ottengo quindi:

$$
=\alpha f(x)  + (1-\alpha)f(x)
$$

Quindi abbiamo ottenuto che 

$$
f[\alpha x + (1-\alpha)y] =\alpha f(x)  + (1-\alpha)f(x)
$$

che soddisfa contemporaneamente sia la definizione di convessità che di concavità.

## Insieme di livello

Può capitare che nei problemi di ottimizzazione l’insieme delle soluzioni ammissibili sia definito tramite dei **vincoli**. In tale situazione riconoscere che i vincoli formano insiemi convessi è importante per sfruttare la proprietà che anche l’intersezione di tali vincoli è un insieme convesso.

Per convenzione i vincoli sono espressi tramite disequazioni $\leq$:

- segue che se il vincolo è espresso come uguaglianza possiamo esprimerlo come:

$$
g(x) = b \iff \begin{cases}
g(x) \leq b \\
g(x) \geq b
\end{cases} \iff \begin{cases}
g(x) \leq b \\
-g(x) \leq -b
\end{cases}
$$

Data una funzione $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$ **convessa** su $\mathbb{R}^n$ allora l’**insieme livello** $\mathcal{L}_\gamma$ **è convesso** per ogni $\gamma \in \mathbb{R}$

$$
\mathcal{L}_\gamma = \{x \in \mathbb{R}^n: f(x) \leq \gamma\}
$$

In due dimensioni ($n = 2$) possiamo pensare che l’insieme di livello siano i punti dell’asse x i cui valori calcolati nella funzione ($f(x)$) stiano al di sotto di un valore $\gamma$

![https://i.ibb.co/Wpzj3WH/image.png](https://i.ibb.co/Wpzj3WH/image.png)

**Dimostrazione**:

Fissato un $\gamma \in \mathbb{R}$ avremo 3 casi:

- $\mathcal{L}_\gamma = \emptyset$, che è convesso
- $\mathcal{L}_\gamma$ contiene un solo elemento (è un s*ingleton*), che è quindi convesso
- altrimenti $\mathcal{L}_\gamma$ contiene un numero infinito di elementi (dato che lavoriamo sull’insieme $\mathbb{R})$
    
    In tal caso siano $y, z$ due punti distinti di $\mathcal{L}_\gamma$, si ha per definizione che 
    
    $f(y) \leq \gamma$
    
    $f(z) \leq \gamma$
    
    Inoltre consideriamo un **punto intermedio** $w$ tra $y$ e $z$
    
    $$
    w = \alpha y + (1-\alpha)z \hspace{5mm} \text{con } \alpha \in [0, 1]
    $$
    
    Per la convessità di $f$ su $\mathbb{R}^n$ si ha
    
    $$
    f(w) = f[\alpha y + (1-\alpha) z] \leq \alpha f(y) + (1-\alpha) f(z)
    $$
    
    Dato che:
    
    $f(y) \leq \gamma$
    
    $f(z) \leq \gamma$
    
    possiamo fare una maggiorazione
    
    $$
    \alpha f(y) + (1-\alpha) f(z) \leq \alpha \gamma + (1-\alpha) \gamma
    $$
    
    Dato che $\alpha \in [0, 1]$
    
    $$
    \alpha \gamma + (1-\alpha) \gamma = \gamma
    $$
    
    Otteniamo quindi che $f(w) \leq \gamma$ cioè $w$ appartiene a $\mathcal{L}_\gamma$ indipendentemente dalla scelta di $y$ e $z$. Questo significa che tutti i punti tra $y$ e $z$ sono sotto $\gamma$, cioè l’insieme $\mathcal{L}_\gamma$ è un insieme convesso.
    

**Nota**: Con funzioni convesse su $\mathbb{R}^n$ ogni insieme di livello $\mathcal{L}_\gamma$ è convesso, per qualsiasi $\gamma$.

## Curva di livello

Data una funzione $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$  definiamo la **curva di** l**ivello** $c_\gamma$ per ogni $\gamma \in \mathbb{R}$ come l’insieme:

$$
c_\gamma = \{x \in \mathbb{R}^n: f(x) = \gamma\}
$$

![https://i.ibb.co/r2B5RbG/image.png](https://i.ibb.co/r2B5RbG/image.png)

## Proprietà

Vediamo delle proprietà derivate dal fatto di avere insiemi ammissibili convessi e funzioni convesse su tali insiemi.

### Proposizione 1

Dato un problema $P = \underset{x\in C}{\min}f(x)$ con $f(x)$ **funzione convessa** su $\mathbb{R}^n$ e $C$ **insieme convesso** allora **ogni punto di minimo locale è anche un punto di minimo globale.**

**Dimostrazione**:

Se $C$ è insieme vuoto o se è un singleton allora la proposizione è banalmente vera (insieme vuoto e insieme di un elemento sono convessi).

Se $C$ ha almeno due elementi, consideriamo due punti **distinti** $x^*, y \in C$ dove $x^*$ è un punto di minimo locale per la funzione $f(x)$ e $y$ è un qualsiasi altro punto dell’insieme.

Data la convessità dell’insieme $C$ il segmento che congiunge i due punti è contenuto in $C$.

Per la definizione di minimo locale abbiamo che:

$$
f(x^*) \leq f(x) \hspace{5mm} \forall x \in C \cap I(x^*, \rho)
$$

Considero un punto $z$ che:

1. è diverso da $x^*$
2. appartiene al segmento che congiunge $x^*$ e $y$
3. appartiene all’intersezione tra $C$ e $I(x^*, \rho)$

Posso scrivere $z$ come

$$
z = \alpha x^* + (1-\alpha)y \hspace{5mm} \alpha \in [0, 1)
$$

($\alpha \neq 1$ perché il punto $z$ deve essere diverso da $x^*$)

![https://i.ibb.co/JmJNZrp/image.png](https://i.ibb.co/JmJNZrp/image.png)

Per come ho scelto $z$ varrà che 

$$
f(x^*) \leq f(z)
$$

e $f(z)$ lo posso scrivere come:

$$
f(z) = f(\alpha x^* + (1-\alpha)y)
$$

Per la convessità di $f(x)$ su $C$ si ha:

$$
f(z) = f(\alpha x^* + (1-\alpha)y) \leq \alpha f(x^*) + (1-\alpha)f(y)
$$

otteniamo quindi:

$$
f(x^*) \leq \alpha f(x^*) + (1-\alpha)f(y) \\
$$

spostando a sinistra i termini comuni

$$
f(x^*) - \alpha f(x^*) \leq (1-\alpha) f(y)
$$

a sinistra raccolgo $f(x^*)$

$$
(1 - \alpha) f(x^*) \leq (1-\alpha) f(y)
$$

Dato che per ipotesi $\alpha \neq 1$ posso semplificare e ottengo

$$
f(x^*) \leq f(y)
$$

Dato che non abbiamo mai fatto assunzioni su $y$ questo vale $\forall y \in C$ e quello che abbiamo ottenuto è proprio la definizione di **minimo globale**.

### Proposizione 2

Dato un problema $P = \underset{x\in C}{\min}f(x)$ con $f(x)$ **funzione convessa** su $C$ con $C$ **insieme convesso** allora **l’insieme delle soluzioni al problema formano un insieme convesso.**

In altre parole se $x^*, y^* \in C$ sono delle soluzioni al problema $P$, allora qualunque altro punto definito come $z^*=\alpha x^* + (1-\alpha)y^*$ è a sua volta una soluzione al problema.

**Dimostrazione**:

Se $C$ è insieme vuoto o se è un singleton allora la proposizione è banalmente vera (insieme vuoto e insieme di un elemento sono convessi).

Se $C$ ha almeno due elementi, consideriamo due punti **distinti** $x^*, y^* \in C$ dove entrambi sono minimi locali.

Dalla proposizione precedente, siano nelle ipotesi per dire che sono anche punti di **minimo globale**, quindi deve valere che:

$$
f(x^*) = f(y^*) = f^*
$$

Dimostro che la funzione calcolata su un qualunque punto $z^*= \alpha x^* + (1-\alpha)y$ è anche un minimo globale.

$$
f(z^*) = f(\alpha x^* + (1-\alpha) y^*)
$$

Dato che la funzione è convessa su $C$:

$$
f(z^*) = f(\alpha x^* + (1-\alpha)y^*) \leq \alpha f(x^*) + (1-\alpha)f(y^*)
$$

Dato che $f(x^*) = f(y^*) = f^*$

$$
\alpha f(x^*) + (1-\alpha)f(y^*) = \alpha f^* + (1-\alpha)f^* = f^*
$$

Ottengo quindi che:

$$
f(z^*) \leq f^*
$$

Ma siccome $f^*$ è un minimo globale, allora $f(z^*)$ non può essere strettamente minore (invaliderebbe le ipotesi) e di conseguenza mi rimane

$$
f(z^*) = f^*
$$

### Proposizione 3

Dato l’insieme convesso $C \subseteq \mathbb{R}^n$, siano $f_i(x)$ con $i =1,…,m$ funzioni convesse su $C$.

Dati i coefficienti $\lambda_i \geq 0$ con $i = 1, …, m$ allora:

$$
g(x) = \sum_{i=1}^m \lambda_if_i(x)
$$

è una funzione convessa su $C$

**Dimostrazione**:

Se $C$ è insieme vuoto è un singleton allora è banalmente vero (insieme vuoto e insieme di un elemento sono convessi).

Se $C$ contiene almeno due elementi proviamo che $g(x)$ è convessa:

Dalla definizione di $g(x)$:

$$
g(\alpha x + (1-\alpha)y) = \sum_{i=1}^m \lambda_i f_i(\alpha x + (1-\alpha) y)
$$

Dalla convessità delle $f_i(x)$ ho che $f_i(\alpha x + (1-\alpha)y) \leq \alpha f_i(x) + (1-\alpha)f_i(y)$

e dato che $\lambda_i \geq 0$ posso scrivere:

$$
\sum_{i=1}^m \lambda_i f_i(\alpha x + (1-\alpha) y)\leq \sum_{i=1}^m \lambda_i (\alpha f_i(x) + (1-\alpha) f_i(y))
$$

Separo in due sommatorie

$$
\sum_{i=1}^m \lambda_i (\alpha f_i(x) + (1-\alpha) f_i(y)) = \sum_{i=1}^m\lambda_i \alpha f_i(x) + \sum_{i=1}^m \lambda_i(1-\alpha)f_i(y)
$$

porto fuori i termini indipendenti dalla sommatoria

$$
\sum_{i=1}^m\lambda_i \alpha f_i(x) + \sum_{i=1}^m \lambda_i(1-\alpha)f_i(y) = \alpha \underbrace{ \sum_{i=1}^m\lambda_if_i(x)}_{g(x)} +  (1-\alpha) \underbrace{\sum_{i=1}^m \lambda_i f_i(y)}_{g(y)}
$$

Ottengo quindi 

$$
g(\alpha x + (1-\alpha)y) \leq \alpha g(x) + (1-\alpha) g(y)
$$

che è la definizione di funzione convessa

## Relazione tra convessità e differenziabilità

Dato un insieme convesso $C\subseteq \mathbb{R}^n$ e la funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$ appartenente alla classe $C^1(C)$. 

Allora la funzione è convessa su $C$ se e solo se $\forall x, y \in C$ vale **almeno una** delle seguenti condizioni:

1. $f(y) \geq f(x) + \nabla f(x)^T (y-x)$
2. $[\nabla f(y) - \nabla f(x)]^T (y-x) \geq 0$

Se so che $f \in C^2(C)$ allora posso aggiungere un’altra condizione:

1. $(y-x)^T \nabla^2 f(x) (y-x)\geq 0$

Nota: le prime due condizioni sono uguali, scambiando $x$ e $y$ nella prima si ottiene la seconda. La loro definizione arriva direttamente dal teorema del valore medio, l’interpretazione grafica è la seguente:

![https://i.ibb.co/G3mbz56/image.png](https://i.ibb.co/G3mbz56/image.png)

L'interpretazione geometrica della condizione 3 consiste nel verificare che, per ogni punto tra $x$ e $x$ nell'insieme $C$, la curvatura della funzione lungo la direzione che unisce $x$ e $y$ sia non negativa, cioè che la funzione curva verso l’alto.

# Esercizi convessità

## Es 1

Dire se data una funzione lineare $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$, allora la funzione $g(x) = |f(x)|$ è convessa su $\mathbb{R}^n$.

Per stabilire se $g(x)$ è convessa su $\mathbb{R}$ devo verificare la seguente condizione

$$
g(\lambda x + (1-\lambda)y) \leq \lambda g(x) + (1-\lambda) g(y) \hspace{5mm} \forall \lambda \in [0,1]
$$

cioè arrivare ad ottenere:

$$
|f(\lambda x + (1-\lambda)y)| \leq \lambda |f(x)| + (1-\lambda)|f(y)|
$$

Quindi usando la definizione di $g(x)$:

$g(\lambda x + (1-\lambda)y) = |f(\lambda x + (1-\lambda)y)|$

Siccome $f(x)$ è lineare vale che

$$
f(\alpha x + \beta y) = \alpha f(x) + \beta f(y) \hspace{4mm} \forall x, y \in \mathbb{R}^n \hspace{2mm} \alpha, \beta \in \mathbb{R}
$$

quindi per $\alpha = \lambda$ e $\beta = (1-\lambda)$ ho che:

$$
|f(\lambda x + (1-\lambda)y)| = |\lambda f(x) + (1-\lambda)f(y)|
$$

per disuguaglianza triangolare $(|a + b| \leq |a| + |b|)$:

$$
|\lambda f(x) + (1-\lambda)f(y)| \leq |\lambda f(x)| + |(1-\lambda)f(y)|
$$

Siccome $\lambda$ è una quantità positiva, in particolare compresa tra $[0, 1]$ 

$$
|\lambda f(x)| + |(1-\lambda)f(y)| = \lambda |f(x)| + (1-\lambda)|f(y)| 
$$

Ho quindi ottenuto quello che volevo:

$$
|f(\lambda x + (1-\lambda)y)| \leq \lambda |f(x)| + (1-\lambda)|f(y)|
$$

dimostrando che $g(x)$ è convessa su $\mathbb{R}^n$

# Programmazione lineare

Possiamo vedere la programmazione lineare come un caso particolare della programmazione convessa nella forma: 

$$
\underset{x\in C}{\min} f(x)
$$

in cui la funzione$f$ è **lineare** e $C$ insieme convesso definito dall’intersezione di vincoli rappresentati come funzioni **lineari**.

Dopo aver stabilito che le soluzioni del problema esistono cerchiamo di identificare le soluzioni a tale problema.

## Condizioni di ottimalità

Vediamo due condizioni analitiche che ci permettono di trovare le soluzioni ad un problema di ottimizzazione, la direzione ammissibile per un insieme e la direzione di discesa per una funzione.

### Direzione ammissibile

Dato l’insieme $C \subseteq \mathbb{R}^n$, il punto $\bar x \in C$ e un punto qualsiasi $y \in \mathbb{R}^n$ diverso da $\bar x$, si dice che il **vettore direzione** $d \in \mathbb{R}$ $d \in \mathbb{R}$$d = y-\bar x$ è una **direzione ammissibile per** $C$ **nel punto** $\bar x$ se esiste $\bar \alpha > 0$ per cui i punti calcolati come $x = \bar x + \alpha d$ appartengono a $C$, per ogni $\alpha \in (0, \bar \alpha]$

L’interpretazione è che se dal punto $\bar x$ mi muovo per piccoli passi nella direzione $d$ e genero tutti punti $x$ che appartengono all’insieme $C$ allora la direzione $d$ è detta ammissibile per $C$ nel punto $\bar x$.

Nella seguente immagine ci sono due direzioni entrambi ammissibili

![https://i.ibb.co/KzghwZZ/image.png](https://i.ibb.co/KzghwZZ/image.png)

La direzione $d$ è ammissibile in quanto esiste un $\bar \alpha < 1$ in quanto un pezzo della direzione va fuori dall’insieme $C$.

Mentre la direzione $\tilde{d}$ è una direzione  direttamente $\bar \alpha = 1$ cioè nella sua interezza.

Una direzione non ammissibile sarebbe un punto nella frontiera con direzione che punta fuori dall’insieme $C$

Nota: se $C$ è un insieme convesso allora scelto un punto dentro l’insieme, qualsiasi direzione è ammissibile nella sua interezza ($\bar \alpha = 1$)

### Direzione di discesa

Sia data la funzione $f(x)$ con $f : \mathbb{R}^n \rightarrow \mathbb{R}$, ed il vettore di direzione $d \in \mathbb{R}$ non nullo. Considerando il punto $\bar x \in \mathbb{R}$ si dice che $d$ è una **direzione di discesa per la funzione** $f(x)$ nel punto $\bar x$ se esiste un $\bar \alpha > 0$ tale che:

$$
f(\bar x + \alpha d) < f(\bar x) \hspace{5mm} \forall \alpha \in (0, \bar \alpha]
$$

In altre parole, $d$ è una direzione di discesa se, muovendosi a partire da $\bar x$ lungo la direzione $d$, la funzione $f$ diminuisce.

Siccome trovare una direzione di discesa in questo modo non risulta per nulla comodo in quanto bisognerebbe andare a tentativi sulla scelta di $d$ fino a trovare la direzione di discesa, è possibile utilizzare la seguente proposizione:

### Proposizione

Data la funzione $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$ e $f \in C^1(\mathbb{R}^n)$, sia $d \in \mathbb{R}^n$ con $0 < ||d|| < \infty$ (norma non nulla e limitata) e $\bar x \in \mathbb{R}^n$. La direzione $d$ è una direzione di discesa per $f(x)$ in $\bar x$ se e solo se:

$$
\nabla f(\bar x)^T d < 0
$$

Quindi nell’ipotesi che $f$ sia almeno una volta continuamente differenziabile se la derivata direzionale lungo la direzione $d$ è minore di $0$ allora tale direzione è di discesa per la funzione nel punto $\bar x$.

Si può ottenere facilmente una direzione di discesa $d = - \nabla f(\bar x)^T$ (**l’antigradiente**) infatti se prendiamo:

$$
\nabla f(\bar x) = \begin{pmatrix}
\bar x_1 \\
\bar x_2 \\
... \\
\bar x_n \\
\end{pmatrix} \text{ diverso dal vettore nullo}
$$

allora $d$ vale:

$$
d = -\nabla f(\bar x) = \begin{pmatrix}
-\bar x_1 \\
-\bar x_2 \\
... \\
-\bar x_n \\
\end{pmatrix}
$$

di conseguenza il prodotto $\nabla f(\bar x)^T d$ vale:

$$
\nabla f(\bar x)^T d = \begin{pmatrix}\bar x_1 & \bar x_2 & ... & \bar x_n\end{pmatrix}
\begin{pmatrix}
-\bar x_1 \\
-\bar x_2 \\
...\\
-\bar x_n
\end{pmatrix} = \\
=[-(\bar x_1)^2] + [-(\bar x_2)^2] + ... + [-(\bar x_n)^2] <0
$$

**Dimostrazione della proposizione**:

Dal teorema del valor medio (considerando $y = \bar x + \alpha d$) ho che per $\alpha \in (0, 1]$:

$$
f(\bar x  + \alpha d) = f(\bar x) + \nabla f(\bar x)^T (\alpha d) + o(||\alpha d||)
$$

porto fuori $\alpha$ dal prodotto con il gradiente e moltiplico e divido $o$-piccolo per $||d||$

$$
f(\bar x  + \alpha d) = f(\bar x) + \alpha\nabla f(\bar x)^T d + o(||\alpha d||) \frac{||d||}{||d||}
$$

Dato che $\alpha \in (0, 1]$ divido entrambi i membri per $\alpha$ e porto $f(\bar x)$ a sinistra:

$$
\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} = \nabla f(\bar x)^T d + \frac{o(||\alpha d||)}{\alpha ||d||} ||d||
$$

Passo al limite di $\alpha \to 0^+$ in ambo i membri, dato che il $\nabla f(\bar x)^T d$ non dipende da $\alpha$ posso evitare di metterlo nel limite.

$$
\lim_{\alpha \to 0^+}\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} = \nabla f(\bar x)^T d + \underbrace{\lim_{\alpha \to 0^+}\frac{o(||\alpha d||)}{\alpha ||d||} ||d||}_0
$$

$$
\lim_{\alpha \to 0^+}\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} = \nabla f(\bar x)^T d
$$

Per dimostrare il primo verso del se e solo se, supponiamo che $\nabla f(\bar x)^T d < 0$, cioè che sia negativo, ma allora anche il membro di sinistra per l’uguaglianza sarà negativo e dato che $\alpha$ è positivo allora è $f(\bar x + \alpha d) - f(\bar x)$ ad essere negativo, cioè si arriva alla definizione di **direzione di discesa**: $f(\bar x + \alpha d) - f(\bar x) < 0 \longrightarrow f(\bar x + \alpha d) < f(\bar x)$ .

Per dimostrare l’altro verso del se e solo se, supponiamo che $d$ sia una direzione di discesa per $f(x)$ in $\bar x$, pertanto dalla definizione di direzione di discesa ho che: 

$$
f(\bar x  + \alpha d) < f(\bar x) \longrightarrow f(\bar x  + \alpha d) - f(\bar x) < 0
$$

e dato che $\alpha$ è positivo allora il limite è negativo e per l’uguaglianza anche $\nabla f(\bar x)^T d$ è negativo:

$$
\nabla f(\bar x)^T d =\lim_{\alpha \to 0^+}\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} < 0
$$

## Condizione necessaria per punto minimo locale

Dato un problema di trovare un punto di minimo con $C\subseteq \mathbb{R}^n$ convesso e una **funzione generica continuamente differenziabile** su $C$. La condizione necessaria affinché $\bar x \in C$ sia un punto di minimo locale per $f(x)$ su $C$ è che 

$$
\nabla f(\bar x)^T (x-\bar x) \geq 0 \hspace{5mm}\forall x \in C
$$

**Dimostrazione**:

Dimostro che se $\bar x$ è minimo locale allora vale $\nabla f(\bar x)^T (x - \bar x) \geq 0$.

Se $\bar x$ è un minimo locale allora non possono esistere direzioni ammissibili che siano anche di discesa per $f(x)$, pertanto esisteranno solo direzioni ammissibili tali che $\nabla f(\bar x)^Td \geq 0$.

Dal momento che $C$ è convesso, prendendo un qualsiasi punto $x$ diverso da $\bar x$ allora $d = x - \bar x$ sarà una direzione ammissibile, allora dovrà valere la condizione $\nabla f(\bar x)^T (x-\bar x) \geq 0$

## Condizione necessaria e sufficiente per punto minimo

Dato un problema di trovare un punto di minimo con $C\subseteq \mathbb{R}^n$ convesso e una **funzione convessa e continumente differenziabile** su $C$. La condizione necessaria e sufficiente affinché $\bar x \in C$ sia un punto di minimo locale per $f(x)$ su $C$ è che:

$$
\nabla f(\bar x)^T (x-\bar x) \geq 0 \hspace{5mm}\forall x \in C
$$

Si tratta quindi della stessa condizione solamente nell’ipotesi aggiuntiva di avere la **funzione convessa** su $C$.

**Dimostrazione**:

La condizione necessaria è dimostrata sopra.

Dimostro la condizione sufficiente: cioè che se vale $\nabla f(\bar x)^T (x-\bar x) \geq 0$ allora $\bar x$ è un punto di minimo (**sia globale che locale**, dato che siamo nelle ipotesi valide affinché un minimo locale è anche un minimo globale)

Per la convessità della funzione $f(x)$ è convessa se (per la relazione tra convessità e differenziabilità):

$$
f(y) \geq f(x) + \nabla f(x)^T (y-x)
$$

sostituendo $x = \bar x$ si ha

$$
f(y) \geq f(\bar x) + \underbrace{\nabla f(\bar x)^T (y-\bar x)}_{\geq 0 \text{ per ipotesi}} \hspace{5mm} \forall y \in C
$$

Quindi ottengo

$$
f(y) \geq f(\bar x) \hspace{5mm} \forall y \in C
$$

che è la definizione di punto di minimo globale

# Poliedri

Nella programmazione lineare consideriamo problemi del tipo:

$$
\underset{x \in C}{\min} f(x)
$$

## Funzione obiettivo

Dove $f(x)$ può essere una funzione lineare oppure affine. Siccome non ci sono differenze sostanziali tra funzioni affini e lineari consideriamo solamente quelle lineari, scriveremo quindi:

$$
f(x) = c^T x \hspace{5mm} c\in \mathbb{R}^n
$$

## Insieme delle soluzioni ammissibili

L’insieme $C$ invece lo possiamo scrivere come un insieme di vincoli, anch’essi lineari, in particolare i vincoli possono apparire come:

- $a^Tx \geq b$ oppure $a^Tx \leq b$ l’insieme dei punti dato da tali disequazioni prende il nome di **semispazio** ($a \in \mathbb{R}^n; b \in \mathbb{R}$)
- $a^Tx = b$ l’insieme dei punti dato da tale equazione prende il nome di **iperpiano** ($a \in \mathbb{R}^n; b \in \mathbb{R}$)

Tali vincoli essendo lineari sono anche **convessi**, possiamo visualizzarli nel seguente modo in $\mathbb{R}^2$:

![https://i.ibb.co/r26sK3B/image.png](https://i.ibb.co/r26sK3B/image.png)

Per convenzione i vincoli li esprimeremo tramite **disequazioni di segno maggiore-uguale**:

$$
C = \{x \in \mathbb{R}^n: a_i^T x \geq b_i\} \hspace{5mm} \text{con } i = 1, ..., m  \hspace{3mm} a_i \in \mathbb{R}^n,\hspace{3mm} b_i \in \mathbb{R}
$$

Ovviamente i vincoli si possono convertire in modo equivalente nel seguente modo:

$$
a^Tx = b \iff \begin{cases}
a^Tx \leq b \\
a^Tx \geq b
\end{cases} \iff \begin{cases}
-a^Tx \geq -b \\
a^Tx \geq b
\end{cases}
$$

Possiamo quindi riscrivere la forma dei problemi di programmazione lineare nel seguente modo:

$$
\large\underset{a_i^Tx \geq b_i}{\min} \hspace{2mm}c^T x
$$

con 

$i = 1, …, m$

$a_i, c \in \mathbb{R}^n$

$b_i \in \mathbb{R}$

Per migliorare ulteriormente la compattezza della notazione possiamo porre

$$
A = \begin{bmatrix}
a_1^T\\
\vdots\\
a_m^T
\end{bmatrix} \in \mathbb{R}^{m\times n} \hspace{5mm}
b = \begin{pmatrix}
b_1\\
\vdots\\
b_m
\end{pmatrix} \in \mathbb{R}^m
$$

I vincoli li scriveremo quindi in modo compatto $Ax \geq b$ dove con $\geq$ si intende il confronto componente per componente

Possiamo quindi riscrivere la forma dei problemi di programmazione lineare nel seguente modo:

$$
\large\underset{Ax \geq b}{\min} \hspace{2mm}c^T x
$$

## Esempio

Consideriamo il seguente problema di programmazione lineare

$$
\underset{\begin{cases}
2x_1 - x_2 \geq 5\\
-x_1 -x_2 \leq 3 \\
x_2 = 4
\end{cases}}{\min} \hspace{2mm}3x_1 + 5x_2
$$

$c = \begin{pmatrix}
3 \\
5 \\
\end{pmatrix}$

$2x_1 - x_2 \geq 5  \implies a_1 = \begin{pmatrix}
2 \\
-1 \\
\end{pmatrix} \hspace{3mm} b_1=5$

$-x_1 - x_2 \leq 3  \implies x_1 + x_2 \geq -3  \implies a_2 = \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \hspace{3mm} b_2=-3$

$x_2 = 4 \implies \begin{cases}
x_2 \geq 4\\
x_2 \leq 4
\end{cases}
\implies
\begin{cases}
x_2 \geq 4\\
-x_2 \geq -4
\end{cases}
\implies
\begin{cases}
a_3 = \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} \hspace{3mm} b_3=4 \\
a_4 = \begin{pmatrix}
0 \\
-1 \\
\end{pmatrix} \hspace{3mm} b_4=-4
\end{cases}$

Quindi possiamo raggruppare in:

$$
A = \begin{bmatrix}
2 & -1\\
1 & 1 \\
0 & 1 \\
0 & -1
\end{bmatrix} \hspace{5mm} 
b = \begin{pmatrix}
5\\
-3\\
4\\
-4
\end{pmatrix}
$$

## Poliedro

Definiamo **poliedro** come **l’intersezione** di un **numero finito** di **semispazi e iperpiani** (dato che per convenzione trasformiamo tutto in semispazi, possiamo dire che è semplicemente l’intersezione di un numero finito di semispazi).

Siccome semispazi e iperpiani sappiamo essere insiemi convessi (perché sono lineari), allora l’intersezione di insiemi convessi formerà un insieme convesso, quindi un **poliedro è un insieme convesso.**

Identifichiamo matematicamente il poliedro come:

$$
P = \{x \in \mathbb{R}^n: Ax \geq b\}
$$

Se il poliedro forma un **insieme limitato di punti** si chiama **polìtopo**.

Alcuni esempi di poliedro sono:

- insieme vuoto
- singleton
- soluzioni di un sistema lineare
- rette
- segmenti
- $\mathbb{R}^n$

Possiamo immaginare graficamente un poliedro come una gemma, in cui **ogni faccia è generata da uno specifico vincolo (semispazio)**.

![https://i.ibb.co/vXbBsCK/Dodecahedron.gif](https://i.ibb.co/vXbBsCK/Dodecahedron.gif)

(in $\mathbb{R}^3$)

![https://i.ibb.co/Jmwj8gk/image.png](https://i.ibb.co/Jmwj8gk/image.png)

(in $\mathbb{R}^2$)

## Proposizione

Dato un problema:

$$
\underset{Ax \geq b}{\min} \hspace{2mm}c^T x
$$

Il gradiente $\nabla f(x)$ (che è uguale al vettore $c$) è ortogonale alle curve di livello della funzione $f(x)$, ed è orientato nel verso crescente della funzione.

**Dimostrazione**:

Le curve di livello sono date da iperpiani (che in due dimensioni sono delle rette) con equazione:

$$
c^Tx = \gamma \hspace{5mm} \gamma \in \mathbb{R}
$$

**Dimostriamo la prima parte** della proposizione, cioè l’ortogonalità.

Fissato un qualunque a $\gamma$ che chiamo $\bar \gamma$ consideriamo due punti $x_1, x_2 \in \mathbb{R}^n$ appartenenti alla stessa curva di livello di equazione $c^Tx = \bar \gamma$. Abbiamo quindi che:

- $c^Tx_1 = \bar \gamma$
- $c^T x_2 = \bar \gamma$

Pertanto possiamo scrivere che:

$$
\bar \gamma = \bar \gamma \\
c^Tx_1 = c^T x_2 \\
c^T x_1 - c^T x_2 = 0\\
c^T(x_1 - x_2) = 0
$$

Quello che abbiamo ottenuto è un prodotto scalare, e sappiamo che quando un prodotto scalare tra due vettori si valuta a $0$ allora i vettori sono ortogonali (cioè le loro direzioni formano un angolo di 90°) 

![https://i.ibb.co/pXx7TXt/orto.png](https://i.ibb.co/pXx7TXt/orto.png)

**Dimostriamo la seconda parte** della proposizione, cioè che la direzione di $c$ è punta verso la crescita della funzione.

fissati $\bar\gamma, \tilde \gamma$ tali che $\tilde \gamma > \bar \gamma$, considero due punti $x_1, y \in \mathbb{R}^n$ tali che

- $c^Tx_1 = \bar \gamma$
- $c^Ty = \tilde \gamma$

Sottraendo dalla seconda la prima otteniamo:

$$
c^Ty - c^Tx_1 = \tilde \gamma - \bar \gamma
$$

da $\tilde \gamma > \bar \gamma$ otteniamo che $\tilde \gamma - \bar \gamma > 0$

$$
c^Ty - c^Tx_1 > 0\\
c^T(y - x_1) > 0
$$

Tale prodotto scalare lo possiamo scrivere nel seguente modo (proveniente dalla relazione tra norma e prodotto scalare standard):

$$
||c||_2\cdot ||y-x_1||_2 \cdot \cos(\widehat{x_1y}) > 0
$$

Dato che per definizione le norme sono positive, affinché il risultato sia maggiore di $0$, il coseno deve essere positivo e per essere positivo l’angolo formato da $c$ $c$$(y-x_1)$ deve essere compreso tra $[0°, 90°)$

Quindi $c$ è orientato nel verso crescente della funzione.

![https://i.ibb.co/44WWGpm/seconda.png](https://i.ibb.co/44WWGpm/seconda.png)

Possiamo quindi sfruttare questa proposizione per risolvere il problema di trovare un minimo per la funzione, infatti sapendo che nella direzione di $c$ la funzione cresce ci basterà cercare nella direzione di $-c$, cioè dove la funzione decresce.

Dovremmo quindi trovare il punto all’interno del poliedro (cioè che rispetta i vincoli) e che appartiene alla curva di livello con il valore più basso

![https://i.ibb.co/fSSjwLG/image.png](https://i.ibb.co/fSSjwLG/image.png)

In questo caso $x_1$ rappresenta il minimo della funzione.

## Possibili soluzioni

In genere con un problema di ottimizzazione lineare possiamo avere:

- una unica soluzione
- nessuna soluzione
- infinite soluzioni, contenute in un segmento

Vediamo degli esempi:

### Unica soluzione

Ad esempio se vogliamo risolvere il problema

$$
\underset{\begin{cases}
x_1 \geq 0\\
x_2 \geq 0 \\
x_1+x_2 \leq 1
\end{cases}}{\max} \hspace{2mm}x_1
$$

portiamo il problema nella nostra forma convenzionale:

$$
\underset{\begin{cases}
x_1 \geq 0\\
x_2 \geq 0 \\
-x_1-x_2 \geq -1
\end{cases}}{\min} \hspace{2mm}-x_1
$$

Otteniamo il vettore $c$:

$$
c = \begin{pmatrix}
-1\\
0
\end{pmatrix}
$$

tale vettore ci dice che la funzione $-x_1$ cresce a sinistra e decresce a destra. Tramite le curve di livello otteniamo il punto di minimo per la funzione $-x_1$ che sarà il punto di massimo per la funzione $x_1$

![https://i.ibb.co/wsWTV9r/image.png](https://i.ibb.co/wsWTV9r/image.png)

### Nessuna soluzione

Ad esempio se vogliamo risolvere il problema

$$
\underset{\begin{cases}
x_1 \geq 0\\
-x_2 \geq -4 \\
-x_1 \geq -5 \\
\end{cases}}{\min} \hspace{2mm}x_2
$$

Se andiamo a disegnare il grafico ci accorgiamo che minimizzare $x_2$ con tali vincoli non è possibile:

![https://i.ibb.co/5cJtV7V/image.png](https://i.ibb.co/5cJtV7V/image.png)

### Infinite soluzioni

Ad esempio se vogliamo risolvere il problema

$$
\underset{\begin{cases}
x_1 \geq 0\\
x_2 \geq 0 \\
x_1+x_2 \geq 1 \\
\end{cases}}{\min} \hspace{2mm}x_1 + x_2
$$

Andiamo a disegnare i vincoli:

Nota che per disegnare vincoli come $x_1 + x_2 \geq 1$ è utile isolare $x_2$ e trattarla temporaneamente come uguaglianza per tracciare la retta: $x_2 \geq -x_1 + 1 \longrightarrow x_2 = -x_1 + 1$

In questo modo sappiamo l’orientamento della retta e il valore dell’intercetta.

(Opzionalmente si fa una piccola tabella in cui si provano dei valori di $x_1$ e si trovano i corrispettivi $x_2$, collegando poi i punti trovati)

![https://i.ibb.co/XWZjnXz/image.png](https://i.ibb.co/XWZjnXz/image.png)

Il segmento in giallo rappresenta il segmento di punti che sono soluzione del problema.

## Nota pratica

Sulla stessa funzione obiettivo, aggiungere degli ulteriori vincoli al problema non permetterà mai di ottenere una soluzione migliore di quella ottenibile non aggiungendoli. Quindi aggiungere vincoli nella speranza di trovare una soluzione migliore non è una cosa sensata.

## Vertici

Preso un punto $v \in P$ dove $P$ è un poliedro, si dice che $v$ è un **vertice del poliedro** se **non esistono** altri punti $u, z \in P$ (distinti tra loro e distinti da $v$) tali che  $v \in [u, z]$ (dove $[u, z]$ è il segmento che congiunge $u$ con $z$).

Esempi di vertici:

![https://i.ibb.co/7p4ZL5D/image.png](https://i.ibb.co/7p4ZL5D/image.png)

si può vedere che per ogni vertice non esiste un segmento (i cui estremi sono diversi del vertice stesso) che contiene il vertice. 

## Determinare se un punto è un vertice

Applicare la definizione di vertice non è comodo, vediamo una proposizione più utile

**Proposizione**: $v \in P$ è un vertice del poliedro $P$ se e solo se:

1. Esistono almeno $n$ **vincoli attivi** in $v$
2. Di tutti i vincoli attivi in $v$, esattamente $n$ di questi sono **linearmente indipendenti**

dove $n$ è il numero di variabili del problema.

### Vincolo attivo

Dato un vincolo del tipo $a^T x \geq b$, e preso un qualsiasi punto $v$, si dice che tale **vincolo è attivo** nel punto $v$ se vale $a^Tv = b$.

In $\mathbb{R}^2$ possiamo pensare che se la retta che traccia il “bordo” del semispazio contiene il punto $v$ allora tale vincolo è attivo su $v$. Se abbiamo due rette che tracciano il “bordo” dei semispazi, il punto corrispondente all’incontro di queste due rette avrà due vincoli attivi su di esso. 

Indichiamo l’insieme dei vincoli attivi in un punto $\bar x$ come:

$$
I(\bar x) = \{i:a_i^T\bar x =b_i\}
$$

### Vincoli linearmente indipendenti

Presi due vincoli attivi $a_1^T v = b_1$ e $a_5^T = b_5$ essi sono linearmente indipendenti se i rispettivi vettori $a_1$ e $a_5$ sono linearmente indipendenti.

cioè se imponendo l’equazione

$$
\lambda_1a_1 + \lambda_2a_5 = 0 \hspace{5mm} \lambda_1, \lambda_2 \in \mathbb{R}
$$

l’unica soluzione è quella in cui $\lambda_1 = \lambda_2 = 0$

Graficamente, due vettori sono linearmente indipendenti se **non stanno sulla stessa retta (non sono paralleli)**

![https://i.ibb.co/gSmxBG3/image.png](https://i.ibb.co/gSmxBG3/image.png)

- in $\bar x$ c’è un solo vincolo attivo
- in $\tilde x$ non c’è nessun vincolo attivo
- $A, B, C$ hanno tutti 2 vincoli attivi (inoltre sono linearmente indipendenti).

## Massimo numero di vertici

Dato un problema con $n$ variabili e $m$ vincoli:

- se $m < n$ allora non ci sono vertici
- altrimenti il numero massimo di vertici è dato da $\large\binom{m}{n} = \frac{m!}{n!(m-n)!}$

## Esempio

Dato il seguente poliedro vediamo come determinare i vertici.

$$
P:\begin{array}{lcr}
I\\
II\\
III\\
IV
\end{array}
\begin{cases}
x_1 \geq 0\\
x_2 \geq 0\\
x_2 + 2x_1 \geq 4\\
2x_2 -x_1 \leq 3
\end{cases}
$$

abbiamo quindi $m = 4$ e $n = 2$, da cui posso ricavare il numero massimo di vertici:

$$
\binom{4}{2} = \frac{4!}{2!(4-2)!} = \frac{4\cdot 3}{2} = 6
$$

dobbiamo tentare tutte le possibili coppie di vincoli:

- $I, II$
    
    cerco il punto in cui i vincoli $I, II$ sono attivi
    
    $\begin{cases}
    x_1 = 0\\
    x_2 = 0
    \end{cases}$
    
    ottengo quindi il punto $z = \begin{pmatrix}0\\0\end{pmatrix}$ verifico poi che i vettori $a_1=\begin{pmatrix}1\\0\end{pmatrix}$ e $a_2=\begin{pmatrix}0\\1\end{pmatrix}$ sono linearmente indipendenti, ad esempio calcolando il determinante della matrice composta dai due vettori e verificando che il risultato sia diverso da $0$. In questo caso i vettori sono linearmente indipendenti.
    
    ora devo verificare che $z$ appartenga al poliedro (cioè che sia compreso in tutti i vincoli), per farlo posso sostituire $z$ in tutti i vincoli e verificare che sia un punto valido. In questo caso dal vincolo $III$ ottengo $0 + 2\cdot 0 \geq 4$ che è evidentemente falso. Concludo che $z$ non è un vertice appartenente al poliedro $P$.
    
- $I, III$
    
    $\begin{cases}
    x_1 = 0\\
    x_2 + 2x_1 = 4
    \end{cases}$
    
    ottengo quindi il punto $z = \begin{pmatrix}0\\4\end{pmatrix}$. In questo caso i vettori sono linearmente indipendenti.
    
    Dal vincolo $IV$ ottengo $2\cdot 4 -0 \leq 3$ che è evidentemente falso. Concludo che $z$ non è un vertice appartenente al poliedro $P$.
    
- $I, IV$
    
    $\begin{cases}
    x_1 = 0\\
    2x_2 - x_1 = 3
    \end{cases}$
    
    ottengo quindi il punto $z = \begin{pmatrix}0\\\frac{3}{2}\end{pmatrix}$. In questo caso i vettori sono linearmente indipendenti.
    
    Dal vincolo $III$ ottengo $\frac{3}{2} +2\cdot 0 \geq 4$ che è evidentemente falso. Concludo che $z$ non è un vertice appartenente al poliedro $P$.
    
- $II, III$
    
    $\begin{cases}
    x_2 = 0\\
    x_2 + 2x_1 = 4
    \end{cases}$
    
    ottengo quindi il punto $z = \begin{pmatrix}2\\0\end{pmatrix}$. In questo caso i vettori sono linearmente indipendenti.
    
    tutti i vincoli sono soddisfatti. Concludo che $z$ è un vertice appartenente al poliedro $P$.
    
- $II, IV$
    
    $\begin{cases}
    x_2 = 0\\
    2x_2 - x_1 = 3
    \end{cases}$
    
    ottengo quindi il punto $z = \begin{pmatrix}-3\\0\end{pmatrix}$. In questo caso i vettori sono linearmente indipendenti.
    
    Dal vincolo $I$ ottengo $-3 \geq 0$ che è evidentemente falso. Concludo che $z$ non è un vertice appartenente al poliedro $P$.
    
- $III, IV$
    
    $\begin{cases}
    x_2+2x_1 = 4\\
    2x_2 - x_1 = 3
    \end{cases}$
    
    ottengo quindi il punto $z = \begin{pmatrix}1\\2\end{pmatrix}$. In questo caso i vettori sono linearmente indipendenti.
    
    tutti i vincoli sono soddisfatti. Concludo che $z$ è un vertice appartenente al poliedro $P$.
    

## Teorema fondamentale della Programmazione lineare

Prima di enunciare il teorema fondamentale dobbiamo definire quando un poliedro contiene una retta.

Un poliedro contiene una retta se tutti i punti della retta stanno all’interno del poliedro. Una diretta conseguenza è che se un poliedro contiene una retta allora esso non può essere un politopo.

un poliedro che non contiene rette significa che **possiede almeno un vertice**.

![https://i.ibb.co/hxGqD4Z/Diagramma-senza-titolo-drawio.png](https://i.ibb.co/hxGqD4Z/Diagramma-senza-titolo-drawio.png)

**Teorema fondamentale della PL**: Dato un problema di programmazione lineare, supponiamo che il poliedro $P$, definito dai vincoli del problema, non contenga rette. Allora sono possibili i seguenti tre casi:

1. $P$ è un insieme vuoto (non esiste soluzione)
2. la funzione obiettivo $f(x) = c^T x$ è illimitata inferiormente* su $P$ (non esiste soluzione)
3. esiste **almeno** una soluzione e questa si trova su uno dei vertici di $P$.

*illimitata inferiormente perché il problema di riferimento è una minimizzazione, altrimenti potrebbe essere illimitata superiormente se considerassimo un problema di massimizzazione.

Il teorema così com’è non è molto utile perché per applicarlo dovremmo verificare per ogni punto del poliedro che non ci siano rette passanti per quel punto che siano contenute nel poliedro, ma questo è infattibile nella pratica.

Cerchiamo quindi di riscrivere il teorema nella cosiddetta **forma standard**, che non si basa sull’ipotesi che il poliedro non contenga rette.

**Idea**: l’idea è quella che dato il nostro problema di programmazione lineare, costruiamo un nuovo problema legato a quello di partenza, ma che definisce un **poliedro in forma standard**, cioè che è confinato nel primo ortante dello spazio euclideo (in $\mathbb{R}^2$ è il primo quadrante, quello in alto a destra). In questo modo assicuriamo che esso non contenga rette, infatti una retta non può essere mai confinata in un solo ortante.

Nella seguente immagine ci sono degli esempi di **poliedri in forma standard** (segnati in verde):

![https://i.ibb.co/3TQWmjt/standard.png](https://i.ibb.co/3TQWmjt/standard.png)

Quelli rossi non sono poliedri in forma standard in quanto prolungando i loro confini illimitati si esce dal primo quadrante.

## Teorema fondamentale della PL standard

Vediamo i passaggi per la costruzione del teorema della programmazione lineare standard.

L’insieme dei vincoli $Ax\geq b$ può essere scritto in modo esteso come $a_i^Tx\geq b_i$ per $i = 1…m$

Tali vincoli li possiamo riscrivere: dato che $a_i^Tx$ è più grande di $b_i$ allora posso sottrarre una certa quantità positiva $y_i$ per trasformare il vincolo in una uguaglianza.

$$
\begin{cases}
a_i^Tx - y_i = b_i & i = 1...m\\
y_i \geq 0 & i=1...m
\end{cases}
$$

Ogni componente del vettore $x$ lo possiamo scrivere come differenza di due numeri positivi:

$x_i = x_i^+ - x_i^-$ dove $x_i^+, x_i^- \geq 0$ per $i = 1…n$

$$
\begin{cases}
a_i^T(x^+ - x^-) - y_i = b_i & i = 1...m\\
y_i \geq 0 & i=1...m\\
x^+ \geq 0\\
x^- \geq 0 
\end{cases}
$$

la prima riga la posso riscrivere come: $a_i^Tx^+ - a_i^Tx^- - y_i = b_i \hspace{5mm} i = 1...m$

In forma compatta ottengo il **poliedro in forma standard**:

$$
\bar P = \left\{
\begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix} \in \mathbb{R}^{2n+m}: Ax^+ - Ax^- - y = b, \begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix} \geq 0
\right\}
$$

o alternativamente “raccogliendo” i coefficienti delle variabili

$$
\bar P = \left\{
\begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix} \in \mathbb{R}^{2n+m}: (A -A-I_m)\begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix} = b, \begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix} \geq 0
\right\}
$$

dove $I_m$ è la matrice identità di $m$ righe (e $m$ colonne), riassumiamo le lettere usate in questo modo

$$
A = \begin{bmatrix}
a_1^T\\
\vdots\\
a_m^T
\end{bmatrix}
\hspace{5mm}
b = \begin{pmatrix}
b_1\\
\vdots\\
b_m
\end{pmatrix} \hspace{5mm}
y=\begin{pmatrix}
y_1\\
\vdots\\
y_m
\end{pmatrix} \hspace{5mm} x^+=\begin{pmatrix}
x_1^+\\
\vdots\\
x_n^+
\end{pmatrix} \hspace{5mm} x^-=\begin{pmatrix}
x^-_1\\
\vdots\\
x^-_n
\end{pmatrix}
$$

Nota che $\begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix}$ rappresenta mettere in colonna, uno sotto l’altro i componenti dei tre vettori, ottenendo quindi un vettore di $n + n + m$ righe.

analogamente $(A -A-I_m)$ rappresenta mettere in riga, una affianco all’altra, le tre matrici, inoltre le componenti delle ultime due matrici saranno invertite di segno. Si ottiene quindi una matrice di $m$ righe e $n + n + m$ colonne

Il prodotto $(A -A-I_m)\begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix}$ genererà quindi un vettore di $m$ righe.

Concludiamo con una forma ancora più compatta facendo le seguenti sostituzioni:

$$
\bar A = (A-A-I_m) \in \mathbb{R}^{m \times (2n+m)} \hspace{5mm} z = \begin{pmatrix}
x^+\\
x^-\\
y
\end{pmatrix} \in \mathbb{R}^{2n+m}
$$

Giungiamo quindi alla **definizione finale**: Data la matrice $\bar A \in \mathbb{R}^{m \times (2n+m)}$ e il vettore $b$ diremo che il seguente poliedro è in **forma standard**:

$$
\bar P = \{z \in \mathbb{R}^{2n+m}: \bar Az = b, z\geq 0\}
$$

I problemi di programmazione lineare in forma standard saranno quindi nella forma

$$
\underset{\begin{array}{lcr}\bar Az = b\\
z\geq 0
\end{array}}{\min}c^T(x^+-x^-)
$$

Nota: proprio il fatto di imporre $z\geq 0$ porta ad avere il poliedro sul primo ortante dello spazio euclideo.

Nota: Qualsiasi poliedro può essere trasformato in forma standard.

### Teorema fondamentale della PL standard

Dato un problema di programmazione lineare lo si trasformi in un problema dove il poliedro è in forma standard $\bar P$, sono possibili i seguenti tre casi:

1. $\bar P$ è un insieme vuoto (non esiste soluzione)
2. la funzione obiettivo $f(x) = c^T (x^+-x^-)$ è illimitata inferiormente su $\bar P$ (non esiste soluzione)
3. esiste **almeno** una soluzione e questa si trova su uno dei vertici di $\bar P$.

Trovando le soluzioni del problema in forma standard, cioè i valori di $x^+$ e $x^-$, posso ottenere la soluzione del problema originale facendo la sottrazione $x = x^+ - x^-$.

# Costi fissi e vincoli disgiunti

Ai problemi di programmazione lineare aggiungiamo problemi di costo fisso e vincoli disgiuntivi in quanto questi ultimi sono molto comuni nelle situazioni reali.

## Costi fissi

Dal problema di minimizzazione di costi variabili:

$$
\underset{\begin{array}{lcr}x \in A\\
x\geq 0
\end{array}}{\min}\, c^T x
$$

dove $A$ è un generico poliedro (i vincoli del problema).

Vogliamo aggiungere la seguente specifica:

$$
\begin{cases}
\text{se la componente }x_i>0 \text{ allora paghinamo un certo costo fisso }P > 0\\
\text{se la componente }x_i = 0 \text{ allora NON paghiamo un costo fisso }P > 0\\
\end{cases}
$$

Ovviamente ogni componente ha il proprio costo fisso. Può anche accadere che il costo fisso dipenda da più componenti, ad esempio se $x_1 > 0 \lor x_2 >0 \lor x_6>0$ allora si paga il costo fisso.

L’obiettivo è quindi di minimizzare la funzione considerando anche i costi fissi che hanno le componenti oltre ai costi variabili.

Cioè se $x_i$ è “attivo” (quindi $>0$) allora pago un costo fisso $P$ più il costo variabile in base al valore specifico che assume $x_i$ (il costo variabile è dato da $c_i\cdot x_i$).

Considerando una sola componente possiamo mostrare in questo grafico di come se $x_i > 0$ allora bisogna pagare un costo fisso.

![https://i.ibb.co/v4hzhmf/costo-fisso.png](https://i.ibb.co/v4hzhmf/costo-fisso.png)

Per implementare questo aspetto riscriviamo il problema di programmazione matematica nel seguente modo

$$
\begin{aligned}    &\min \ c^T x + yP \\
&x \in A\\
&x \geq 0 \\
&y \geq \frac{x_i}{M} \,\,\,\,\,M \gg 1\\
&y \in \{0, 1\} \\
\end{aligned}
$$

Nella funzione obiettivo abbiamo quindi aggiunto il costo fisso $P$ moltiplicato per una variabile $y$ la quale può essere $0$ oppure $1$, cioè il suo ruolo è quello di attivare/disattivare il costo fisso. 
Dai vincoli notiamo che $y\geq 0$ quando $x_i=0$ e dato che il problema è di minimizzazione $y$ verrà impostato al valore più basso possibile, ovvero $y= 0$, di conseguenza il costo fisso viene ignorato.

Altrimenti, quando $x_i>0$, si avrà $y$ maggiore uguale ad una quantità compresa tra $0$ (escluso) e $1$, quindi potrà essere solamente uguale a $1$ (perché $y$ è $0$ oppure $1$).

Nota che $M \gg 1$ è una simbologia che in questo contesto sta a significare che $M$ è un valore molto maggiore rispetto al più grande valore che può assumere $x_i$.

nota che $M$ è un valore numerico **costante** del problema che si decide in modo ragionevole in base al contesto del problema.

## Esempio

La Chair s.r.l. produce **3 tipi di sedie** da cucina in **3 reparti diversi**, ognuno dei quali può indifferentemente produrre le tre tipologie di sedie. I mobilifici consorziati con la Chair s.r.l. richiedono che essa produca rispettivamente 400, 380 e 350 sedie dei tre tipi.

La Chair s.r.l. può decidere se attivare la produzione di sedie in ognuno dei tre reparti, i quali prevedono i seguenti costi di attivazione (in Euro)

Costi fissi:

|  | **Reparto 1** | **Reparto 2** | **Reparto 3** |
| --- | --- | --- | --- |
| **Costo attivazione** | 120 | 140 | 125 |

Inoltre nella seguente tabella si riporta il costo unitario (in Euro/unità) di produzione di ciascuna sedia in ciascun reparto, nonché la quantità massima di sedie producibili (in unità)

costi variabili

|  | **Sedia 1** | **Seda 2** | **Sedia 3** | **Max sedie producibili** |
| --- | --- | --- | --- | --- |
| **Reparto 1** | 18 | 23 | 35 | 600 |
| **Reparto 2** | 19 | 22 | 36 | 650 |
| **Reparto 3** | 17 | 20 | 37 | 690 |

Si costruisca un modello di PL per la minimizzazione dei costi di produzione delle sedie per la Chair
s.r.l.

### Definizione delle variabili

- $x_{ij}:$ numero di sedie di tipo $i$ prodotte dal reparto $j$ ($i = 1, 2, 3$ e $j = 1, 2, 3$)
- $y_j: \begin{cases}
1 & \text{se attivo il reparto } j\\
0& \text{altrimenti}
\end{cases}$

### Definizione funzione obiettivo

$$
\min\begin{array}{l}    \text{costi produzione sedie nel reparto 1} +\\
\text{costi produzione sedie nel reparto 2}+ \\    \text{costi produzione sedie nel reparto 3} + \\    \text{costi fissi dei attivazione}\end{array}
$$

$$
\min\begin{array}{l}    18x_{11} + 23x_{21} + 35x_{31} + \\    19x_{12} + 22x_{22} + 36x_{32} + \\    17x_{13} + 20x_{23} + 37x_{33} + \\    120y_{1} + 140y_{2} + 125y_{3}\end{array}
$$

### Definizione vincoli

- vincoli esplicitati nella consegna:
    
    $$
    \sum_{j = 1}^{3}x_{1j} \geq 400\\
    \sum_{j = 1}^{3}x_{2j} \geq 400 \\
    \sum_{j = 1}^{3}x_{3j} \geq 350
    $$
    
- vincoli sul numero massimo di sedie producibili in ogni reparto
    
    $$
    \sum_{i = 1}^{3}x_{i1} \leq 600\\
    \sum_{i = 1}^{3}x_{i2} \leq 650 \\
    \sum_{i = 1}^{3}x_{i3} \leq 690
    $$
    
- vincoli intrinseci del problema
    
    le sedie non sono divisibili e non possono essere in quantità negativa.
    
    $$
    x_{ij} \geq 0 \text{ intere} \hspace{5mm} \text{per } i = 1,2,3; \,\,\,\,j = 1, 2,3
    $$
    
- vincoli sui costi fissi
    
    Se faccio uso del reparto $1$ devo pagare il suo costo fisso
    
    $$
    y_1 \geq \frac{x_{11} + x_{21} + x_{31}}{M} \hspace{5mm} M \gg1 \hspace{5mm}
    $$
    
    Se faccio uso del reparto $2$ devo pagare il suo costo fisso
    
    $$
    y_2 \geq \frac{x_{12} + x_{22} + x_{32}}{M} \hspace{5mm} M \gg1 \hspace{5mm}
    $$
    
    Se faccio uso del reparto $3$ devo pagare il suo costo fisso
    
    $$
    y_3 \geq \frac{x_{13} + x_{23} + x_{33}}{M} \hspace{5mm} M \gg1 \hspace{5mm}
    $$
    
    $$
    y_j \in \{0, 1\} \hspace{5mm} j=1,2,3
    $$
    

## Vincoli disgiuntivi

Dal problema:

$$
\underset{\begin{array}{lcr}x \in A\\
\end{array}}{\min}\, c^T x
$$

dove $A$ è un generico poliedro (i vincoli del problema).

Vogliamo aggiungere al problema **due vincoli mutualmente esclusivi**, cioè se si tiene conto di uno allora si ignora l’altro e vice versa. Si proveranno quindi a risolvere entrambe le versioni del problema per determinare la soluzione migliore.

Siano

$$
a_1^Tx \leq b_1\\
a_2^T x \leq b_2
$$

i vincoli mutualmente esclusivi, dove $a_i \in \mathbb{R}^n$ e $b_i \in \mathbb{R}$.

Nota: i vincoli **devono essere in relazione di minore-uguale.**

Per fare in modo che il risolutore del problema di minimizzazione si arrangi a tentare i vari vincoli dobbiamo riformulare il problema nel seguente modo:

$$
\begin{aligned}    &\min \ c^T x\\
&x \in A\\
&a_1^Tx \leq b_1 + \alpha M &M\gg1\\
&a_2^Tx \leq b_2 + \beta M & M\gg 1\\
&\alpha + \beta = 1\\
& \alpha, \beta \in \{0, 1\}
\end{aligned}
$$

Abbiamo quindi:

$M$ che è un valore costante, molto maggiore rispetto al valore più grande che può assumere il membro di sinistra della disequazione.

$\alpha, \beta$ sono due variabili che possono assumere solo i valori $0$ e $1$, e solamente uno dei due può essere $1$ (la somma infatti deve fare $1$)

Nell’esempio:

- se $\alpha = 1$ e $\beta = 0$ allora il primo vincolo diventa  $a_1^Tx \leq b_1 + M$ che risulterà essere sempre soddisfatto per come è definito $M$, per cui questo vincolo diventa non significativo per il problema e si può considerare che sparisca.
    
    Così facendo solamente il secondo vincolo viene considerato.
    
- in modo simmetrico se $\alpha = 0$ e $\beta = 1$ solamente il primo vincolo viene considerato.

Possiamo notare quindi come se la variabile è $0$ allora il rispettivo vincolo rimane, al contrario se la variabile è $1$ allora il vincolo non viene considerato.

### Almeno un vincolo

Vogliamo riformulare li problema in modo che **almeno un vincolo** venga considerato:

$$
\begin{aligned}    &\min \ c^T x\\
&x \in A\\
&a_1^Tx \leq b_1 + \alpha M &M\gg1\\
&a_2^Tx \leq b_2 + \beta M & M\gg 1\\
&\alpha + \beta \leq 1\\
& \alpha, \beta \in \{0, 1\}
\end{aligned}
$$

Cambia solamente la condizione $\alpha + \beta \leq 1$

tale condizione infatti vale perché con:

- $\alpha = 0$ e $\beta = 0$ allora entrambi i vincoli rimangono, e quindi $0+0 \leq 1$ è soddisfatto
- $\alpha = 1$ e $\beta = 0$ allora solo il secondo vincolo rimane, e quindi $1+0 \leq 1$ è soddisfatto
- $\alpha = 0$ e $\beta = 1$ allora solo il primo vincolo rimane, e quindi $0+1 \leq 1$ è soddisfatto

L’ultimo caso in cui entrambi i vincoli sono $1$, cioè che vengono entrambi ignorati, non soddisferebbe la condizione $1+1 \leq 1$

### Al più un vincolo

Vogliamo riformulare li problema in modo che **al più un vincolo** venga considerato

$$
\begin{aligned}    &\min \ c^T x\\
&x \in A\\
&a_1^Tx \leq b_1 + \alpha M &M\gg1\\
&a_2^Tx \leq b_2 + \beta M & M\gg 1\\
&\alpha + \beta \geq 1\\
& \alpha, \beta \in \{0, 1\}
\end{aligned}
$$

Cambia solamente la condizione $\alpha + \beta \geq 1$

tale condizione infatti vale perché con:

- $\alpha = 1$ e $\beta = 1$ allora entrambi i vincoli vengono ignorati, e quindi $1+1 \geq 1$ è soddisfatto
- $\alpha = 1$ e $\beta = 0$ allora solo il secondo vincolo rimane, e quindi $1+0 \geq 1$ è soddisfatto
- $\alpha = 0$ e $\beta = 1$ allora solo il primo vincolo rimane, e quindi $0+1 \geq 1$ è soddisfatto

L’ultimo caso in cui entrambi i vincoli sono $0$, cioè che rimangono entrambi, non soddisferebbe la condizione $0+0 \geq 1$

### Caso con più vincoli

Generalizzando le specifiche appena fatte considerando però $m$ vincoli possiamo riformulare i problemi nel seguente modo:

- esattamente $k$ vincoli (con $k \leq m$)
    
    $$
    \begin{aligned}    &\min \ c^T x\\
    &x \in A\\
    &a_1^Tx \leq b_1 + \alpha_1 M &M\gg1\\
    &\vdots\\
    &a_m^Tx \leq b_m + \alpha_m M & M\gg 1\\
    &\alpha_1 +...+ \alpha_m = m-k\\
    & \alpha_1, ..., \alpha_m \in \{0, 1\}
    \end{aligned}
    $$
    
    In questo modo la condizione $\alpha_1 +...+ \alpha_m = m-k$ sta a significare che ci sono $m-k$ vincoli uguali a $1$ e i $k$ rimanenti saranno a $0$.
    
- almeno $k$ vincoli (con $k \leq m$)
    
    $$
    \begin{aligned}    &\min \ c^T x\\
    &x \in A\\
    &a_1^Tx \leq b_1 + \alpha_1 M &M\gg1\\
    &\vdots\\
    &a_m^Tx \leq b_m + \alpha_m M & M\gg 1\\
    &\alpha_1 +...+ \alpha_m \leq m-k\\
    & \alpha_1, ..., \alpha_m \in \{0, 1\}
    \end{aligned}
    $$
    
    In questo modo la condizione $\alpha_1 +...+ \alpha_m \leq m-k$ sta a significare che ci sono al massimo $m-k$ vincoli uguali a $1$ e quindi almeno $k$ saranno a $0$.
    
- al più $k$ vincoli (con $k \leq m$)
    
    $$
    \begin{aligned}    &\min \ c^T x\\
    &x \in A\\
    &a_1^Tx \leq b_1 + \alpha_1 M &M\gg1\\
    &\vdots\\
    &a_m^Tx \leq b_m + \alpha_m M & M\gg 1\\
    &\alpha_1 +...+ \alpha_m \geq m-k\\
    & \alpha_1, ..., \alpha_m \in \{0, 1\}
    \end{aligned}
    $$
    
    In questo modo la condizione $\alpha_1 +...+ \alpha_m \geq m-k$ sta a significare che ci almeno $m-k$ vincoli uguali a $1$ e quindi al massimo $k$ saranno a $0$.


# 2024-12-05_Metodo Branch & Bound

Analizziamo il metodo **Branch & Bound** (B&B) per la risoluzione di problemi di **programmazione lineare intera** (PLI), cioè in cui i punti che sono **soluzione** del problema oltre a rispettare i vincoli devo avere **tutte le componenti come numeri interi**.

Descriviamo un problema di PLI nel seguente modo:

$$
(P_0):\underset{\begin{array}{lcr}x \in Q_0\\
x\in \Z^n
\end{array}}{\min}\, c^T x
$$

dove $Q_0$ è un poliedro generico.

$\Z=\{0, 1, -1, 2, -2, ...\}$ è l’insieme dei numeri interi

$x$ è quindi un vettore di $n$ componenti intere

Possiamo riformulare in modo più compatto il problema in questo modo

$$
(P_0):\underset{\begin{array}{lcr}
x \in S_0 
\end{array}}{\min}\, c^T x
$$

Dove $S_0 = Q_0 \cap \Z^n$, cioè è un insieme che contiene **tutti e soli i punti del poliedro a coordinate intere**. Ovviamente si ha quindi che $S_0 \subseteq Q_0$

Nella seguente immagine viene rappresentato in blu il poliedro $Q_i$ e come quadratini gli elementi di $S_i$

![https://i.ibb.co/dJjfD3d/image.png](https://i.ibb.co/dJjfD3d/image.png)

Nota: il fatto che i vertici del poliedro facciano tutti parte di $S_i$ è solamente un caso, non è sempre così.

Mentre con le variabili reali si può ottenere un punto di minimo preciso all’interno del poliedro, con variabili intere non è detto che il minimo si trovi in un punto a coordinate intere e quindi verrà selezionato un minimo approssimativo a quello vero ma che ha coordinate intere.

In modo matematico se 

- $\tilde{x_0}$ è soluzione del problema di minimizzazione a **variabili reali**
    
    $$
    \underset{\begin{array}{lcr}
    x \in Q_0 
    \end{array}}{\min}\, c^T x
    $$
    
- $\overline x_0$ è soluzione del problema di minimizzazione a **variabili intere**
    
    $$
    \underset{\begin{array}{lcr}
    x \in S_0 
    \end{array}}{\min}\, c^T x
    $$
    

Allora sicuramente si avrà $f(\tilde x_0) \leq f(\overline x_0)$, cioè $\overline x_0$ sarà una soluzione peggiore o al massimo uguale alla soluzione vera della funzione obiettivo, questo sempre perché $S_0 \subseteq Q_0$

## Idea del metodo Branch and Bound

Il metodo Branch and Bound è una tecnica iterativa che partiziona il problema iniziale in più sottoproblemi (*branching*), stima un limite superiore o inferiore della funzione obiettivo in ogni sottoproblema (*bounding*) e utilizza queste stime per escludere i sottoproblemi che non avranno una soluzione migliore di quella attuale.

È importante sottolineare che in questo metodo **non viene mai risolto un problema a variabili intere** ma sempre la versione del problema lineare (a variabili continue).

Durante l’algoritmo la regione ammissibile di punti iniziale $S_0$ viene partizionata in sotto-regioni $S_i, i = 1, 2, …, k$ in modo che:

$$
S_0 = \bigcup_{i=1}^{k}S_i\\
S_i\cap S_j = \emptyset,\hspace{5mm} i,j \in [0, 1, 2, ..., k] \land i \neq j 
$$

Cioè in regioni non sovrapposte e che unite comprendono tutti i punti ammissibili.

L’algoritmo cercherà quindi di trovare una **stima** alla soluzione del sotto-problema detto “aperto” $(P_i)$

$$
(P_i):\underset{\begin{array}{lcr}
x \in S_i 
\end{array}}{\min}\, c^T x
$$

per calcolare la stima della soluzione per $(P_i)$, risolviamo il problema di programmazione lineare associato $(PL_i)$ ottenuto tramite un **rilassamento dei vincoli di interezza**, un modo per farlo è proprio togliendo i vincoli di interezza:

$$
(PL_i):\underset{\begin{array}{lcr}
x \in Q_i 
\end{array}}{\min}\, c^T x
$$

ottenendo quindi un punto di minimo $x_i$ per quel sottoproblema rilassato, che sarà sicuramente migliore o al più uguale alla soluzione del sottoproblema $(P_i)$.

La soluzione al problema rilassato potrebbe non essere compatibile con il problema originale, poiché non rispetta la condizione di integrità delle variabili. L’algoritmo infatti utilizza tale soluzione come guida per suddividere ulteriormente lo spazio delle soluzioni e individuare un'eventuale soluzione intera ottima.

## Algoritmo

1. Sia $\tilde x$ la variabile che rappresenta **l’ottimo corrente** (cioè il punto a coordinate intere migliore trovato fino a questo momento durante l’algoritmo).
    
    Tale punto può essere inizializzato attraverso una ispezioni visiva del problema, oppure si inizializza come “non noto”
    
2. Sia $\mathcal{L}$ una lista contenente i **problemi aperti**, cioè quelli in cui non si è ancora cercata una soluzione. Tale lista viene inizializzata con il problema iniziale:
    
    $$
    \mathcal{L} = \{(P_0)\}
    $$
    
3. Si estrae un problema qualsiasi $P_i$ dalla lista $\mathcal{L}$ e risolvo la sua versione rilassata $PL_i$:
    1. se $PL_i$ **ha soluzione** $x_i$ **non migliore** di $\tilde x$ (cioè $c^T\tilde x\leq c^Tx_i$) **allora chiudo il problema** $P_i$ rimuovendolo dalla lista (se la soluzione continua, e quindi precisa, è peggiore di quella attuale, la versione intera sarà peggiore o al più uguale)
    2. se $PL_i$ **non può contenere alcuna soluzione** allora chiudo il problema $P_i$ (se non ci sono soluzioni continue non ce ne sono nemmeno di intere)
    3. se $PL_i$ **ha soluzione** $x_i$ **migliore** di $\tilde x$ (cioè $c^T \tilde x > c^Tx_i)$ allora ci sono due possibili casi
        - se $x_i$ ha già tutte le **componenti intere**, allora **si aggiorna l’ottimo corrente** $\tilde x = x_i$ e si chiude il problema $P_i$ rimuovendolo dalla lista
        - se $x_i$ ha **almeno una componente non intera**, allora si partiziona $P_i$ in due sottoproblemi $P_{i+1}$ e $P_{i+2}$. si rimuove quindi $P_i$ e si inseriscono i due sottoproblemi.
            
            Per definire le due partizioni, consideriamo una componente qualsiasi $j$ non intera del vettore soluzione $x_i$ che indichiamo con $x_i^j$, allora i due sottoproblemi saranno:
            
            $$
            (P_{i+1}): \underset{\begin{array}{lcr}x \in S_i\\
            x^j\leq \lfloor x_i^j\rfloor
            \end{array}}{\min}\, c^T x
            $$
            
            $$
            (P_{i+2}): \underset{\begin{array}{lcr}x \in S_i\\
            x^j\geq \lceil x_i^j\rceil
            \end{array}}{\min}\, c^T x
            $$
            
4. Se la lista $\mathcal{L}$ è vuota allora l’algoritmo termina e l’attuale valore di $\tilde x$ è la **soluzione**, altrimenti si ripete il punto 2

In questa immagine è rappresentata graficamente la suddivisione in sottoproblemi

![https://i.ibb.co/mJsYVcG/image.png](https://i.ibb.co/mJsYVcG/image.png)

Dato che la soluzione $x_i$ non ha la componente $x^2$ intera, in particolare vale $1.2$, allora si cerca una soluzione nei poliedri in cui $x^2 \leq 1$ e l’altro in cui $x^2 \geq 2$

## Problema del Knapsack binario

Questo problema è un esempio di programmazione lineare intera.
Ci si pone il problema di riempiere uno zaino **massimizzando** l'utilità degli oggetti al suo interno e **minimizzando** il più possibile il volume interno occupato.

Definiamo quindi:

- $c_i$: utilità di portare l'oggetto $j$-esimo nello zaino
- $a_j$: volume dell'oggetto $j$-esimo
- $b \geq 0$: volume dello zaino
- $n$: numero di oggetti
- $x_j=\begin{cases}1&\text{se l'oggetto j-esimo è inserito nello zaino}\\0&\text{altrimenti}\end{cases}$

Formuliamo il **problema di massimizzazione di partenza**:

$$
(P_0):\underset{\begin{array}{lcr}
a_1x_1 + ... + a_nx_n \leq b\\
x \in \{0, 1\}^n
\end{array}}{\max}\, c_1x_1 + ... +c_nx_n 
$$

Il vincolo di interezza in questo caso è $x \in \{0, 1\}^n$ e in questo caso la versione rilassata del problema è la seguente:

$$
(PL_0):\underset{\begin{array}{lcr}
a_1x_1 + ... + a_nx_n \leq b\\
0\leq x_j \leq 1 \hspace{5mm}j=1...n
\end{array}}{\max}\, c_1x_1 + ... +c_nx_n 
$$

Per risolvere la versione rilassata possiamo fare le seguenti considerazioni tramite una ispezione visiva (ricordiamo che l’obiettivo è massimizzare la funzione obiettivo e minimizzare il membro di sinistra del primo vincolo):

1. se $c_j = 0$ allora l’oggetto $j$-esimo non ha utilità e quindi:
    - se $a_j \geq 0$ (cioè l’oggetto $j$ occupa del volume) allora $x_j = 0$ (non porto l’oggetto)
    - se $a_j < 0$ (possiamo pensare che l’oggetto $j$ si un accessorio che aumenta il volume disponibile nello zaino) allora $x_j = 1$ (porto l’oggetto)
2. se $a_j = 0$ allora l’oggetto $j$-esimo non influenza il volume e quindi:
    - se $c_j \leq 0$ allora $x_j =0$ (non porto l’oggetto)
    - se $c_j > 0$ allora $x_j = 1$ (porto l’oggetto)
3. se $c_j < 0$ (non utile) e $a_j>0$ (occupa volume) pongo $x_j = 0$ (non porto l’oggetto)
4. se $c_j > 0$ (utile) e $a_j < 0$ (guadagno volume) pongo $x_j = 1$ (porto l’oggetto)
5. se $c_j < 0$ e $a_j < 0$ non posso determinare $x_j$ ma effettuo un cambio di variabile $x_j = 1-y_j$ con $y_j \in \{0, 1\}$ che attiva o disattiva il vincolo
    
    In questo modo quando moltiplicherò $c_j \cdot y_j$ e $a_j \cdot y_j$ otterrò quantità positive
    
6. se $c_j>0$ e $a_j > 0$ non posso determinare $x_j$

Rimane da determinare il caso in cui $c_j, a_j$ sono strettamente positivi.

Seguendo i punti precedenti ho già assegnato un valore a $n-m$ variabili (con $m\leq n$).

Si calcolano e si riordinano in maniera non crescente le restanti $m$ variabili in base al rapporto $x_j =\frac{c_j}{a_j}$

$$
\frac{c_1}{a_1} \geq \frac{c_2}{a_2}\geq ... \geq \frac{c_m}{a_m}
$$

In questo modo a sinistra ho gli **oggetti migliori** (più utili e che occupano meno volume).

Si determina ora l’indice $h$, con $1 \leq h \leq m$ tale che:

$$
\sum_{j=1}^{h} a_j \leq b \hspace{5mm} \sum_{j=1}^{h+1}a_j > b
$$

cioè $h$ mi dice quanti oggetti partendo dal migliore posso portare prima di sforare il volume massimo. Se infatti portassi l’oggetto $h+1$, che è il migliore tra i rimanenti, sforerei il volume dello zaino.

Si determina infine

$$
\large\begin{cases}
x_j = 1 & j = 1, ..., h\\
x_{h+1} = \frac{b - \sum_{j=1}^{h}a_j}{a_{h+1}}\\
x_j = 0 & j = h+2, ..., m
\end{cases}
$$

I primi $h$ oggetti (seguendo l’ordinamento dal migliore al peggiore) li porto.

Per l’oggetto $h+1$ ne porto solamente una quantità che mi sta nel volume rimanente.

I restanti oggetti non li porto.

## Esempio numerico knapsack binario

Vediamo un esempio in cui risolviamo un solo step di knapsack binario.

Problema di partenza

$$
(P_0):\underset{\begin{array}{lcr}
3x_1 - 3x_2 + x_3 + x_4 - x_5 \leq \frac{1}{2}\\
x \in \{0, 1\}^6
\end{array}}{\max}\,4x_1 + 2x_2 + 3x_3 -5x_4 - x_5 + x_6
$$

la cui versione rilassata che risolviamo è:

$$
(PL_0):\underset{\begin{array}{lcr}
3x_1 - 3x_2 + x_3 + x_4 - x_5 \leq \frac{1}{2}\\
0 \leq x_j \leq 1 \hspace{5mm} j = 1...6
\end{array}}{\max}\,4x_1 + 2x_2 + 3x_3 -5x_4 - x_5 + x_6
$$

Tramite una ispezione visiva possiamo determinare alcune variabili:

- $x_2 = 1$
- $x_4 = 0$
- $x_5 = (1-y_5)$
- $x_6 = 1$

Riscriviamo quindi il problema

$$
\underset{\begin{array}{lcr}
3x_1 - 3 + x_3 - (1-y_5) \leq \frac{1}{2}\\
0 \leq x_1, x_3, y_5 \leq 1
\end{array}}{\max}\,4x_1 + 2 + 3x_3  - (1-y_5) + 1
$$

$$
\underset{\begin{array}{lcr}
3x_1 + x_3 + y_5 \leq \frac{9}{2}\\
0 \leq x_1, x_3, y_5 \leq 1
\end{array}}{\max}\,4x_1 + 3x_3 + y_5 + 2
$$

Calcoliamo i rapporti delle variabili rimanenti e li riordiniamo in maniera non crescente

$$
\underbrace{\frac{3}{1}}_{x_3} \geq \underbrace{\frac{4}{3}}_{x_1} \geq \underbrace{\frac{1}{1}}_{y_5}
$$

Per determinare $h$ devo sommare in modo ordinato i denominatori dei rapporti, sommandone il più possibile che rispettino però il vincolo.

In questo caso siccome $1 + 3 = 4 \leq \frac{9}{2}$ e sommandoci $1$ sforeremmo $\frac{9}{2}$ allora possiamo stabilire che $h = 2$ (i primi due mi stanno ma il terzo no)

allora determiniamo:

- $x_3 = 1$
- $x_1 = 1$
- $y_5 = \frac{4.5 - (1 +3)}{1} = 0.5$

Quindi la soluzione finale del problema rilassato è data dai seguenti valori di $x_j$

$$
x_1 = 1;\hspace{2mm} x_2 = 1;\hspace{2mm} x_3 = 1;\hspace{2mm} x_4 = 0;\hspace{2mm} x_5 = 1-y_5 =0.5;\hspace{2mm} x_6 = 1
$$
