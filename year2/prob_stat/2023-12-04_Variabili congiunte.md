# Variabili congiunte

Fino ad ora ci siamo occupati di variabili aleatorie prese singolarmente, delle volte però è utile considerare più variabili aleatorie contemporaneamente.

Possiamo considerare un numero indefinito di variabili, per semplicità però considereremo solo due variabili (**distribuzioni bivariate**), i concetti trattati però si possono estendere a più variabili (**distribuzioni multivariate**)


## Funzione della probabilità congiunta

Vogliamo sapere quale è la probabilità che contemporaneamente la variabile aleatoria $X = x$ e la variabile aleatoria $Y = y$, scriviamo questa probabilità come:

$$p(x,y) = \mathbb{P}[X=x, Y=y]$$

Nel caso in cui le due variabili fossero discrete, possiamo rappresentare le probabilità delle combinazioni tramite una tabella.
Vediamo un esempio in cui $X = \{0, 1, 2\}$ e $Y = \{0,1\}$ ed ad ogni combinazione assegniamo una probabilità (data casualmente)

![enter image description here](https://i.ibb.co/hm33fMN/image.png)

Nell'immagine sono anche rappresentate le cosiddette **distribuzioni di probabilità marginali** rispettivamente la colonna $P_y(y)$ che rappresenta la probabilità fissato un valore di $y$ con tutti i valori di $x$. La riga $P_x(x)$ rappresenta la probabilità fissato un valore di $x$ con tutti i valori di $y$.

Possiamo determinare ad esempio:

$\mathbb{P}[X = 0] = 0.1 + 0.2 = 0.3$
$\mathbb{P}[Y = 1] = 0.2 + 0.2 + 0 = 0.4$
$\mathbb{P}[X \geq 1] = 0.4 + 0.2 + 0.1 + 0 = 0.7$
$\mathbb{P}[X < Y] = 0.4 + 0.1 + 0 = 0.5$

Se invece $X$ e $Y$ sono continue, le loro combinazioni formano un piano bidimensionale.

$\mathbb{P}[a1\leq X \leq a2, b1\leq Y \leq b2]$

![enter image description here](https://i.ibb.co/bK824LZ/image.png)

## Funzione di ripartizione congiunta

La funzione di ripartizione di una coppia di variabile viene rappresentata così:

$$F(x,y) = \mathbb{P}[X \leq x, Y \leq y]$$

dalla funzione di ripartizione congiunta è possibile ottenere la funzione di ripartizione delle singole variabili (chiamata **distribuzioni marginale**)

- distribuzione marginale rispetto a $X$
	$$F_X(x) =\lim_{y \to \infty}F(x,y)$$
- distribuzione marginale rispetto a $Y$
	$$F_Y(y) =\lim_{x \to \infty}F(x,y)$$

## Variabili congiuntamente continue

Due variabili $X$ e $Y$ sono dette congiuntamente continue se esiste una funzione di densità **integrabile e positiva** tale che l'area del piano bidimensionale risulta 1

immaginando di avere una funzione di probabilità rappresentata dal seguente piano

![enter image description here](https://i.ibb.co/bK824LZ/image.png)

Le variabili aleatorie $X$ e $Y$ per essere definite congiuntamente continue:
- $f(x,y) \geq 0 \hspace{3mm} \forall(x, y) \in \mathbb{R}^2$ (cioè tutte le probabilità devono essere maggiori o uguali a zero)
- $\int_{a_1}^{a_2}\left(\int_{b_1}^{b_2} f(x, y) dx\right)dy= 1$ (cioè l'area del piano deve essere 1, in altre parole la somma di tutte probabilità deve risultare 1)

generalizzando, abbiamo che se chiamiamo quel piano $C$

$$\mathbb{P}[(X,Y) \in C] = \int\int_{C}f(x,y)dx\,dy$$

possiamo anche ottenere la **funzione di ripartizione**:

$$F(x,y) = \mathbb{P}[X \leq x, Y \leq y] = \int_{-\infty}^{y}\int_{\infty}^{x} f(s,t) ds \,dt$$

possiamo ottenere le probabilità di densità marginali integrando per la variabili opposta:

$$f_X(x) = \int_\mathbb{R}f(x,y) \, dy$$

$$f_Y(y) = \int_\mathbb{R}f(x,y) \, dx$$


Esempio

data la seguente funzione, determinare il valore di $k$ che rende la funzione una funzione di densità.

$$f(x,y) = kxy\, \bm{1_{(x,y) \in [0,1]^2}}$$

dobbiamo trovare il valore di $k$ che rende il doppio integrale della funzione uguale ad 1

$$\int_{0}^{1}\int_{0}^{1}kxy \, dy\, dx = 1$$

$$\int_{0}^{1}kx\int_{0}^{1}y \, dy\, dx = 1$$

$$\int_{0}^{1}kx\left[\frac{y^2}{2}\right]^{1}_{0}\, dx = 1$$

$$\int_{0}^{1}kx\frac{1}{2}\, dx = 1$$

$$\frac{k}{2}\int_{0}^{1}x\, dx = 1$$

$$\frac{k}{4}= 1$$

$$k = 1$$

Proviamo ora a calcolare la seguente probabilità

$\mathbb{P}[X > Y]$

realizziamo un grafico per aiutarci:

![enter image description here](https://i.ibb.co/CtLKD0J/image.png)

dobbiamo quindi andare a calcolare l'area che si trova sotto alla diagonale, abbiamo quindi che la variabile $x$ varia tra 0 e 1 mentre la variabile $Y$ varia tra 0 e il valore di $x$

$$\int_{0}^{1}\int_{0}^{x}4xy \, dy\, dx$$

$$\int_{0}^{1}4x\left[\frac{y^2}{2}\right]^x_0\, dx$$

$$\int_{0}^{1}4x\frac{x^2}{2}\, dx$$

$$\int_{0}^{1}2x^3\, dx$$

$$2\left[\frac{x^4}{4}\right]_0^1$$

$$2\frac{1}{4} = \frac{1}{2}$$

infatti l'area della parte sottostante alla diagonale è metà dell'area del rettangolo che sappiamo essere uguale ad 1
