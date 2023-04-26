# Funzioni a più variabili


Le funzioni a più variabili reali sono funzioni che associano ad un vettore di numeri reali un solo numero reale

$f:A\subset \mathbb{R}^n \longrightarrow \mathbb{R}$
$(x_1, ...., x_n) \longmapsto z = f(x_1,...,x_n)$

Nel caso $n = 2$

$f:A\subset \mathbb{R}^2 \longrightarrow \mathbb{R}$
$(x, y) \longmapsto z = f(x, y)$

Ad esempio l'equazione generica del piano:

$(x,y) \longmapsto z = ax + by + c$

Casi particolari:

- equazione: $x = 0 \to$ abbiamo il piano $Oyz$
- equazione: $y = 0 \to$ abbiamo il piano $Oxz$
- equazione: $z = 0 \to$ abbiamo il piano $Oxy$

![](https://i.ibb.co/TB6x33w/piani.png)

- $x = k \to$ piano parallelo al piano $Oyz$
- $y = k \to$ piano parallelo al piano $Oxz$
- $z = k \to$ piano parallelo al piano $Oxy$

## Insieme di livello (curve di livello)

Dato un valore $k$ l'insieme di livello associato a questo $k$ è l'insieme dei punti del dominio tali che $f(x_1,...,x_n)$ = k;

$\Lambda_k = \{x\in\mathbb{R}^n: x \in A \,\land f(x_1,...x_n) = k\}$


![](https://i.ibb.co/ryNfprc/insieme-livello.png)

## Sezioni verticali

Una sezione verticale è data dall'intersezione tra il grafico di una funzione $f$ e un piano verticale. la curva risultante dall'intersezione è il grafico di una funzione in una variabile

- piani ortogonali all'asse $x$ : la sezione ha funzione $z=f(c, y) \text{ con } c \in \mathbb{R}$
- piani ortogonali all'asse $y$ : la sezione ha funzione $z=f(x, c) \text{ con } c \in \mathbb{R}$

### Paraboloide ellittico

Equazione generale: $z = a(x - x_0)^2 + b(y-y_0)^2+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) = x^2 + y^2$
![enter image description here](https://i.ibb.co/zbXs1fv/parab-ellitico.png)

- $a$ e $b$ devono avere lo stesso segno
- vertice in $(x_0, y_0)$
- curve di livello:
	- se $a=b$ circonferenze
	- se $a\neq b$ ellissi
- sezioni verticali: parabole
	- $f(0,y) = y^2$
	- $f(x,0) = x^2$

### Cono

Equazione generale: $z = \sqrt{a(x - x_0)^2 + b(y-y_0)^2}+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) =\sqrt{x^2 + y^2}$

![](https://i.ibb.co/jW7Qq6Y/cono.png)

- $a$ e $b$ devono essere positivi
- vertice in $(x_0, y_0)$
- curve di livello: circonferenze di raggio k (altezza del piano che usiamo per "tagliare" il grafico)
- sezioni verticali: valore assoluto
	- $f(0,y) = |y|$
	- $f(x,0) = |x|$

### Paraboloide iperbolico

Equazione generale: $z = a(x - x_0)^2 + b(y-y_0)^2+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) =x^2 - y^2$

![](https://i.ibb.co/tQmSZPC/parab-iper.png)

- $a$ e $b$ devono avere segni diversi
- sella in $(x_0, y_0)$
- curve di livello:
	- iperboli
- sezioni verticali: parabole
	- $f(0,y) = -y^2$
	- $f(x,0) = x^2$


## Dominio

Il dominio rappresenta una porzione del piano definito dalle condizioni delle variabili x e y.

Tutte le regole del dominio delle funzioni più note rimangono uguali.

Generalmente per trovare il dominio si presentano delle disequazioni, per trovare il domino:
1. risolvere l'equazione associata e disegnarla
2. per capire dove è il dominio rispetto al disegno possiamo sostituire x e y per vedere se soddisfa la disequazione.


Es.
Trovare il dominio della funzione $z = \sqrt{4-x^2-y^2}$

Il dominio è dato da tutte le coppie (x,y) tali che $4-x^2-y^2\geq0$

disegno l'equazione associata (trovo i punti di frontiera)

$x^2+ y^2 = 4$ è una circonferenza di centro $(0,0)$ e raggio $2$

per capire se il domino della funzione è interno o esterno alla circonferenza sostituisco al posto di x e y lo 0 (che è un punto interno), la disequazione restituisce $4-0-0\geq0$ che è vera quindi la funzione è interna alla circonferenza

## Topologia in $\mathbb{R}^n$

Per le successive definizioni è necessario considerare un intorno sferico in $\mathbb{R}^n$ $U_r$ di centro $P_0$ e raggio $r$

In $\mathbb{R}^2$ ad esempio:
![](https://i.ibb.co/mJVFqQY/intorno-circ.png)

Dato un insieme $E$ e un punto $P$, esso si dice:
- **Interno** ad $E$ se esiste un intorno di $P$ composto solo da punti che sono appartenenti ad $E$
- **esterno** ad $E$ se esiste un intorno di $P$ che non possiede punti appartenenti ad $E$
- **punto di frontiera** per $E$ se ogni intorno di $P$ possiede sia punti di $E$ sia punti non appartenenti ad $E$

![](https://i.ibb.co/hKy07zx/punti.png)

- $\mathring{E}$ :**parte interna** è l'insieme dei punti interi di $E$
- $\partial E$ : **bordo** è l'insieme dei punti di frontiera di $E$
- $\overline{E}$ :**chiusura** è l'insieme dei punti di $E$ compreso il bordo $(\overline{E}) = \mathring{E} \, \cup \, \partial E$


Sempre considerando l'insieme $E\subseteq \mathbb{R}^n$ , $E$ si dice:
- **aperto** se ogni suo punto è un punto interno (non contiene i punti di frontiera)
- **chiuso** se l'insieme contiene la sua frontiera
- **né aperto né chiuso** se alcuni intervalli sono aperti e altri chiusi

Definiamo anche i concetti di insieme:
- **Limitato**: se esiste un intorno circolare di centro l'origine contiene l'insieme.
- **Connesso**: se presi due punti qualsiasi all'interno dell'insieme posso congiungerli tramite una curva continua.

## Limite 

La definizione di limite utilizzando gli intorni è:

data una funzione $f: A \subset \mathbb{R}^n \longrightarrow \mathbb{R}$ e un punto $P_0$ definito dalle coordinate $(x_0, x_1,...,x_n)$ diremo che 

$$\lim_{P\to P_0} f(x) = L \in \mathbb{R}$$

se e solo se per ogni $\epsilon>0$ esiste $\delta>0$ tale che:

$$0<||P-P_0||<\delta \implies |f(x) - L| < \epsilon$$


**Somma, rapporto, prodotto e composizione di funzioni continue sono funzioni continue**

### Funzioni definite a tratti

Le funzioni definiti a tratti possono non essere continue (nella maggior parte dei casi non sono continue)

Data una funzione

$\begin{cases}
x^2 + y^2 -1 &\text{se} y > 2x \\
-2x-y &\text{se} y \leq 2x
\end{cases}$

le due funzioni sono continue perché somma e composizione di funzioni continue, dobbiamo però vedere cosa accade in $y = 2x$

Per fare ciò costruiamo il sistema

$\begin{cases}
 y = 2x \\
-2x-y = x^2 + y^2 -1
\end{cases} \to
\begin{cases}
 y = 2x \\
-2x-2x = x^2 + 4x^2 -1
\end{cases}$

$\to \begin{cases}
 y = 2x \\
-4x = 5x^2 -1
\end{cases}
\to
\begin{cases}
 y = 2x \\
5x^2+4x-1=0
\end{cases}$

dalla seconda equazione otteniamo 

$x_1 = -1, x_2 = \frac{1}{5}$

per cui otteniamo i punti di continuità trovando la relativa $y$ :
$P_1(-1,-2), P_2(\frac{1}{5}, \frac{2}{5})$


### Calcolo dei limiti

Quando non si presentano forme di indecisione il limite si può calcolare semplicemente sostituendo. Se si presentano forme indecisione nascono i problemi.

Bisogna innanzitutto provare delle **sezioni** cioè fissare tutti i valori tendenti con il valore per cui tendono tranne 1 e vedere che risultato da il valore restante nella funzione. se più sezioni danno risultati diversi allora si può concludere che il limite non esiste, se tutte le sezioni provate restituiscono lo stesso valore bisogna dimostrare con il **teorema del confronto** che quel valore è giusto.

Es.

$$\lim_{(x,y)\to(0,0)}\frac{y(x^2+3y^2)}{x^2+5y^2}$$

Si presenta una forma indeterminata $\left[\frac{0}{0}\right]$

proviamo la sezione: $x=0$

$$\lim_{y\to0}\frac{3y^3}{5y^2} \hspace{5mm} \to \hspace{5mm} \lim_{y\to0}\frac{3}{5}y = 0$$

proviamo la sezione: $y=0$

$$\lim_{y\to0}\frac{0}{x^2}  = 0$$

entrambe le sezioni ci ritornano lo stesso valore (nel caso fossero stati diversi allora il limite non sarebbe esistito), utilizziamo il teorema del confronto per dimostrare che il limite è 0.

$0\leq \frac{y(x^2+3y^2)}{x^2+5y^2} \leq?$

$\frac{(x^2+3y^2)}{x^2+5y^2}$ sarà una quantità $<1$ quindi una quantità minore di $1$ moltiplicata per $y$ sarà una quantità minore di $y$

$0\leq \frac{y(x^2+3y^2)}{x^2+5y^2} \leq|y|$

#### Disuguaglianze utili per il teorema del confronto

- $2|ab|\leq a^2+b^2$
- $\frac{a^2}{a^2+b^2}\leq 1$
- $e^z\geq 1 + z$
- $\ln z \leq z-1 \hspace{5mm}\forall z >0$
- $|\sin z| \leq |z|$
- $|\sin z| \leq 1$
- $|\cos z| \leq 1$

### Limiti con le coordinate polare

In alcuni casi passare alle coordinate polari può semplificare il calcolo del limite

$\begin{cases} 
x = x_0 + \rho \cos \alpha \\
y = y_0 + \rho \sin \alpha
\end{cases}$

possiamo passare da un limite come

$$\lim_{(x,y)\to(x_0, y_0)}f(x,y)$$

ad un limite

$$\lim_{\rho\to0}f(\rho, \alpha)$$

Esempio:

$$\lim_{(x,y)\to(1, 0)}\frac{y^2\ln(x)}{(x-1)^2 + y^2}$$


Passando alle coordinate polari:

$\begin{cases} 
x = 1 + \rho \cos \alpha \\
y = 0+ \rho \sin \alpha
\end{cases}$

$$\lim_{\rho\to0}\frac{\rho^2\sin^2(\alpha) \ln(1+\rho\cos(\alpha))}{(1+\rho\cos(\alpha) -1)^2 + \rho^2\sin^2(\alpha)}$$

$$\lim_{\rho\to0}\frac{\rho^2\sin^2(\alpha) \ln(1+\rho\cos(\alpha))}{\rho^2\cos^2(\alpha) + \rho^2\sin^2(\alpha)}$$

$$\lim_{\rho\to0}\frac{\rho^2\sin^2\alpha \cdot\ln(1)}{\rho^2}$$

$$\lim_{\rho\to0}\sin^2\alpha \cdot\ln(1) = 0$$


## Derivabilità e differenziabilità

Nelle funzione a 2 variabili la derivata è data da due limiti del rapporto incrementale

il primo rapporto incrementale viene definito **derivata parziale** di $f$ rispetto a $x$ nel punto $(x_0, y_0)$

$$D_x(f(x_0,y_0)) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$$

il secondo rapporto incrementale viene definito **derivata parziale** di $f$ rispetto a $y$ nel punto $(x_0, y_0)$

$$D_y(f(x_0,y_0)) = \lim_{k \to 0} \frac{f(x_0, y_0 + k) - f(x_0, y_0)}{k}$$

Per calcolare le derivate basta pensare che quando si sta facendo la derivata parziale per $x$ , si tratta la $y$ come un valore costante. Analogamente quando si sta facendo la derivata parziale di $y$ si tratta la $x$ come un valore costante

Es.

$D_x[2xy^2+x^3] = 2y^2 + 3x^2$ 
$D_y[2xy^2+x^3] =4xy$

 $D_x[y^3\sin x] = y^3\cos x$ 
$D_y[y^3\sin x] =3y^2 \sin x$

Il vettore che contiene le derivate parziali viene chiamato **vettore gradiente**

$\nabla f(x_0, y_0) = \begin{pmatrix}D_x(f(x_0, y_0))\\D_y(f(x_0, y_0))\end{pmatrix}$

### Funzione derivabile

Una funzione si dice derivabile in un punto se esistono tutte le derivate parziali in quel punto.
Una funzione si dice derivabile nel suo dominio se è derivabile in tutti i punti interni del dominio

Funzioni come radice, valore assoluto, oppure definite a tratti possono non essere derivabili nel loro dominio, nei punti dove può non essere derivabile va fatta la derivata con il limite.

La proprietà "se una funzione è derivabile in un punto allora è anche continua in quel punto" non si estende alle funzioni a più variabili

## Piano tangente a una superficie

Nelle funzioni a due variabili possiamo estendere il significato di derivata che avevamo nelle funzione a singola variabile. Nelle funzioni a singola variabile la derivata rappresentava il coefficiente angolare della retta tangente in un punto. In due variabili fare la derivata parziale rispetto a $x$ rappresenta il coefficiente angolare della retta tangente alla superficie mantenendo costante la $y$ .

Consideriamo la sequente funzione

![enter image description here](https://i.ibb.co/LPhQwdP/superficie.png)

fare la derivata parziale rispetto a $x$ nel punto $P_0$ rappresenta il coefficiente angolare della retta $r$ , possiamo pensarlo come un piano passante per $A$ e $P_0$ e parallelo al piano $Oxz$

![](https://i.ibb.co/sP9sp5T/der-risp-x.png)

fare la derivata parziale rispetto a $y$ nel punto $P_0$ rappresenta il coefficiente angolare della retta $s$ , possiamo pensarlo come un piano passante per $A$ e $P_0$ e parallelo al piano $Oyz$

![](https://i.ibb.co/HNd5WFR/der-risp-y.png)

Il piano che contiene le due rette $r$ e $s$ è il **piano tangente alla superficie nel punto A**

![](https://i.ibb.co/T8x1tT6/piano-super.png)

L'equazione del piano tangente è:

$$z=f(x_0,y_0) + D_x(x_0,y_0)(x-x_0) + D_y(x_0,y_0)(y-y_0)$$


Es.

$f(x,y) = 4x^2+y^2-6x$
determiniamo l'equazione del piano tangente nel punto A(2, 3)

Calcoliamo le derivate parziali:

$D_x(2,3) = 8x-6 =8\cdot 2-6 = 10$

$D_y(2,3) = 2y = 2 \cdot 3 = 6$

Andando a sostituire nella formula:

$z = f(2,3) + 10(x-2) + 6(y-3)$

$z = 13 + 10x-20 + 6y-18$

Equazione del piano tangente $z = 10x+ 6y-25$

### Differenziabilità

Se le derivate parziali esistono e sono continue in un intorno di un punto $x_0$ allora la funzione in quel punto si dice **differenziabile**, Se esistono e sono continue tutte le derivate parziali nel dominio allora la funzione è **differenziabile** in ogni punto

$f \in C^1(\text{Dominio}) \implies \text{f differenziabile nel dominio}$

- composizione, prodotto, rapporto combinazione lineare di funzioni differenziabili sono funzioni differenziabili
- Se una funzione è differenziabile in un punto allora è anche continua in quel punto

## Derivate direzionali

Sia $f:A\subseteq \mathbb{R}^n \longrightarrow \mathbb{R}$ , considerando un punto $x_0$ appartenente al dominio e un versore $v$ (vettore di lunghezza 1) Si dice **derivata direzionale** di $f$ rispetto al versore $v$ nel punto $x_0$ il limite:

$$D_v(x_0) = \lim_{t\to0}\frac{f(x_0 + tv) - f(x_0)}{t}$$

Le derivate parziali sono le derivate direzionali lungo i versori (1,0) per la $x$ e (0,1) per la $y$


Possiamo trovare la derivata direzionale con la formula

$$D_v(x_0) = \nabla f(x_0) \cdot v = \sum_{i = 0}^{n} \frac{df}{dx_i} \cdot v_i$$

esempio:

$f(x,y) = y^3 - \sin(xy)$
$x_0 = (\pi, 1)$
$v = (\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2})$

calcolo le derivate parziali

$\frac{df}{dx} = -y\cos(xy)$ calcolata nel punto $(\pi, 1)$ otteniamo $-\cos \pi = 1$

$\frac{df}{dy} = 3y^2 - x\cos(xy)$ calcolata nel punto $(\pi, 1)$ otteniamo $3-\pi\cos\pi = 3 + \pi$

il gradiente vale $\nabla f(\pi, 1) = 
\begin{pmatrix}1 \\
3+\pi
\end{pmatrix}$

moltiplichiamo il gradiente (trasposto, in modo che sia vettore riga) per il versore

$(1, 3+\pi) \cdot \begin{pmatrix}\frac{\sqrt{2}}{2}\\ -\frac{\sqrt{2}}{2} \end{pmatrix}=$

$= 1 \cdot \frac{\sqrt{2}}{2} + (3+\pi)\cdot(-\frac{\sqrt{2}}{2}) = -\sqrt{2} - \frac{\sqrt{2}}{2}\pi$


### Direzione di massima crescita e decrescita

- direzione di massima crescita, cioè la direzione in cui il valore della funzione cresce più velocemente:
	 $$v = \frac{\nabla f(x_0)}{||\nabla f(x_0)||}$$

- direzione di massima decrescita, cioè la direzione in cui il valore della funzione decresce più velocemente:
	 $$v = -\frac{\nabla f(x_0)}{||\nabla f(x_0)||}$$

Quando $\nabla f(x_0) = 0$ non esiste la direzione di massima crescita/decrescita, in quel punto ci sarà un **punto critico**.


## Estremi di una funzione

Esistono due tipi di estremi:
- estremi liberi: estremi all'interno del dominio
- estremi vincolati: estremi al bordo del dominio

noi ci occuperemo degli estremi liberi

- **punto di massimo assoluto** $x_0$ per $f$ se per ogni punto $x$ del domino si ha che $f(x) \leq f(x_0)$
- **punto di minimo assoluto** $x_0$ per $f$ se per ogni punto $x$ del domino si ha che $f(x) \geq f(x_0)$
- **punto di massimo relativo** $x_0$ per $f$ se ogni punto $x$ appartenente ad un intorno di $x_0$ chiamato $U_{x_0}$ si ha che $f(x) \leq f(x_0)$
- **punto di minimo relativo** $x_0$ per $f$ se ogni punto $x$ appartenente ad un intorno di $x_0$ chiamato $U_{x_0}$ si ha che $f(x) \geq f(x_0)$


**teorema di Wierstrass**

Se $f$ è definita in un dominio chiuso e limitato e $f$ è continua allora ammette un massimo e un minimo assoluti

### Punti critici

In una funzione $f$ si dice punto critico un punto $x_0$ se entrambe le derivate parziali in quel punto sono nulle. Quindi per trovare i punti critici di una funzione bisogna risolvere il sistema che pone le derivate parziali prime a 0

$\begin{cases}
\frac{df}{dx} = 0 \\
\frac{df}{dy} = 0
\end{cases}$

Dal **teorema di Fermat** otteniamo che se abbiamo un punto di massimo o minimo locale $x_0$ e $f$ è derivabile in quel punto allora $x_0$ è un punto critico

non tutti i punti critici sono di massimo o di minimo


## Derivate parziali seconde

Fare le derivate seconde significa derivare le derivate parziali prime, dato che con funzioni in due variabili si hanno due derivate prime parziali otteniamo 4 derivate parziali seconde:

Per la derivata parziale prima rispetto ad $x$ otteniamo le derivate seconde:
- $\frac{d^2f}{dx^2}$ anche scritta come $f^{''}_{xx}$
- $\frac{d^2f}{dydx}$ anche scritta come $f^{''}_{xy}$

Per la derivata parziale prima rispetto ad $y$ otteniamo le derivate seconde:
- $\frac{d^2f}{dxdy}$ anche scritta come $f^{''}_{yx}$
- $\frac{d^2f}{dy^2}$ anche scritta come $f^{''}_{yy}$

Quindi per trovare le derivate seconde dobbiamo prima trovare le due derivate parziali prime e poi derivarle di nuovo rispetto a x e y.

$f^{''}_{xy}$ e  $f^{''}_{yx}$ vengo chiamate derivate miste e secondo il **teorema di Schwarz** esse sono uguali

Se le derivate parziali seconde di una funzione esistono e sono continue nel dominio allora la funzione appartiene alla classe $C^2$


### Matrice Hessiana

Si definisce matrice Hessiana di una funzione la matrice le cui componenti sono le derivate seconde della funzione

$$H_f(x,y) = \begin{pmatrix}
f^{''}_{xx} & f^{''}_{yx}\\
f^{''}_{xy} & f^{''}_{yy} 
\end{pmatrix}$$


### Formula di Taylor (con resto di Peano)

In due dimensioni le formula di Taylor in un punto (x_0,y_0) con un incremento (h,k) è:

$f(x_0+h, y_0 +h) = f(x_0,y_0) + f'_x(x_0,y_0)h + f'_y(x_0,y_0)k+\frac{1}{2}\left[f''_{xx}(x_0,y_0)h^2 + 2f''_{xy}(x_0,y_0)hk + f''_{yy}(x_0,y_0)h^2 + o(||h,k||^2)\right]$

in forma più compatta ponendo
$\textbf{x}_1 = (x_0,y_0)^T$
$\textbf{h} = (h,k)^T$

abbiamo

$$f(\textbf{x}_1+\textbf{h}) = f(\textbf{x}_1) + \nabla_f(\textbf{x}_1)^T\textbf{h} + \frac{1}{2}\textbf{h}^TH_f(\textbf{x}_1)\textbf{h} + o(||\textbf{h}||^2)$$


Nei punti critici abbiamo che $\nabla_f = 0$ l'andamento della funzione è governato dalla forma quadratica:

$q(\textbf{h}) = \textbf{h}^T \cdot H_f\cdot\textbf{h}$

la forma quadratica ci serve per determinare la forma della funzione (paraboloide ellittico verso l'alto, verso il basso, iperbolico ecc...)

## Carattere dei punti critici
 
 Grazie all'utilizzo della matrice hessiana possiamo determinare i punti di massimo, minimo e punti di sella.

Quando la matrice hessiana è diagonalizzata (quindi con dei valori diversi da 0 solo nella diagonale principale) possiamo pensare che gli elementi nella diagonale siano degli autovalori e le colonne a cui appartengano siano degli autovettori.

ipotiziamo di essere in due dimensioni, quindi la matrice hessiana è 2x2
chiamiamo gli autovalori $\lambda_1, \lambda_2$

$$H =\begin{bmatrix}
\lambda_1 & 0\\
0 & \lambda_2
\end{bmatrix}$$

Guardando gli autovalori possiamo determinare la forma quadratica:

- $\lambda_1,\lambda_2 > 0$ in questo caso abbiamo
	-  $H$ è matrice hessiana simmetrica **definita positivamente**
	- la forma quadratica è un **paraboloide ellittico rivolto verso l'alto**
	- ha un punto di minimo

- $\lambda_1,\lambda_2 < 0$ in questo caso abbiamo
	-  $H$ è matrice hessiana simmetrica **definita negativamente**
	- la forma quadratica è un **paraboloide ellittico rivolto verso il basso**
	- ha un punto di massimo

- $\lambda_1,\lambda_2$ con segno discorde, in questo caso abbiamo
	-  $H$ è matrice hessiana simmetrica **indefinita**
	- la forma quadratica è un **paraboloide iperbolico**
	- ha un punto di sella


Non è detto che la matrice hessiana sia diagonalizzata e quindi possiamo non avere gli autovalori. A noi però non interessano i valori che assumono $\lambda_1$ e $\lambda_2$ ma **ci interessa il loro segno**.

Per determinare il segno dobbiamo calcolare il **determinante** e possiamo fare il **test dell'hessiana**:

- se $\det(H) < 0$:
	- $\lambda_1,\lambda_2$ con segno discorde
	- $H$ indefinita
	-  forma quadratica paraboloide iperbolico
	- punto critico è un punto di sella
- se $\det(H) > 0$:
	- $\lambda_1,\lambda_2$ sono entrambi positivi oppure entrambi negativi.
	per determinare quale delle due prendiamo in considerazione il valore $\textbf{a}$ nella matrice hessiana
$$\begin{bmatrix}\textbf{a}&b\\b&d\end{bmatrix}$$
	 - Se $a>0$ allora:
		 - $\lambda_1,\lambda_2$ entrambi positivi
		 - $H$ definita positivamente
		 - forma quadratica paraboloide ellittico rivolto verso l'alto
		 - punto critico è un minimo
	- Se $a<0$ allora:
		 - $\lambda_1,\lambda_2$ entrambi negativi
		 - $H$ definita negativamente
		 - forma quadratica paraboloide ellittico rivolto verso il basso
		 - punto critico è un massimo

- se $\det(H) = 0$:
	- $H$ semi-definita
	-  non determinabile con il test dell'hessiana


Esempio:

$f(x,y) = x^2+2y^2-x^2y$

dominio della funzione $\mathbb{R}^2$

calcolo le derivate parziali

$\frac{df}{dx} = 2x-2xy$

$\frac{df}{dy} = 4y-x^2$

trovo i punti critici risolvendo il sistema

$\begin{cases}
2x-2xy = 0\\
4y-x^2 = 0
\end{cases}
\begin{cases}
2x(1-y) = 0\\
4y-x^2 = 0
\end{cases}$

sono possibili 2 casi:

$\begin{cases}
x = 0\\
y = 0
\end{cases}
\hspace{20mm}
\begin{cases}
y = 1\\
4-x^2 = 0
\end{cases}$

ottengo i punti critici
- $P_1=(0,0)$
- $P_2=(2,1)$
- $P_3=(-2,1)$

**importante**: controllare sempre che i punti critici siano interni al dominio della funzione

Calcolo la matrice hessiana

$$H = \begin{bmatrix} 
2-2y & -2x\\
-2x & 4
\end{bmatrix}$$

valuto il punto $P_1$ :

$$H(0,0) = \begin{bmatrix} 
2 & 0\\
0 & 4
\end{bmatrix}$$

definita positivamente, abbiamo un minimo relativo

valuto il punto $P_2$ :

$$H(2,1) = \begin{bmatrix} 
0 & -4\\
-4 & 4
\end{bmatrix}$$

$\det(H) = 0-(-4\cdot (-4)) = -16$
definita negativamente, abbiamo un punto di sella

valuto il punto $P_3$ :

$$H(-2,1) = \begin{bmatrix} 
0 & 4\\
4 & 4
\end{bmatrix}$$

$\det(H) = 0-(4\cdot 4) = -16$
definita negativamente, abbiamo un punto di sella
