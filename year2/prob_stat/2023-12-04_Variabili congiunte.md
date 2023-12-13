# Variabili congiunte

Fino ad ora ci siamo occupati di variabili aleatorie prese singolarmente, delle volte però è utile considerare più variabili aleatorie contemporaneamente.

Possiamo considerare un numero indefinito di variabili, per semplicità però considereremo solo due variabili (**distribuzioni bivariate**), i concetti trattati però si possono estendere a più variabili (**distribuzioni multivariate**)


## Funzione di probabilità congiunta

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

## Funzione di densità congiunta

Se invece $X$ e $Y$ sono continue, le loro combinazioni formano un piano bidimensionale.

$$f(x,y) = \mathbb{P}[a1\leq X \leq a2, b1\leq Y \leq b2]$$

![enter image description here](https://i.ibb.co/bK824LZ/image.png)

## Variabili congiuntamente continue

Due variabili $X$ e $Y$ sono dette congiuntamente continue se esiste una funzione di densità **integrabile e positiva** tale che l'area del piano bidimensionale risulta 1

immaginando di avere una funzione di probabilità rappresentata dal seguente piano

![enter image description here](https://i.ibb.co/bK824LZ/image.png)

Le variabili aleatorie $X$ e $Y$ per essere definite congiuntamente **continue**:
- $f(x,y) \geq 0 \hspace{3mm} \forall(x, y) \in \mathbb{R}^2$ (cioè tutte le probabilità devono essere maggiori o uguali a zero)
- $\int_{a_1}^{a_2}\left(\int_{b_1}^{b_2} f(x, y) dx\right)dy= 1$ (cioè l'area del piano deve essere 1, in altre parole la somma di tutte probabilità deve risultare 1)

generalizzando, abbiamo che se chiamiamo quel piano $C$

$$\mathbb{P}[(X,Y) \in C] = \int\int_{C}f(x,y)dx\,dy$$

possiamo ottenere la **funzione di ripartizione** dalla funzione di densità:

$$F(x,y) = \mathbb{P}[X \leq x, Y \leq y] = \int_{-\infty}^{y}\int_{\infty}^{x} f(s,t) ds \,dt$$

possiamo ottenere le probabilità di densità marginali integrando per la variabili opposta:

$$f_X(x) = \int_\mathbb{R}f(x,y) \, dy$$

$$f_Y(y) = \int_\mathbb{R}f(x,y) \, dx$$

## Funzione di ripartizione congiunta

La funzione di ripartizione di una coppia di variabile viene rappresentata così:

$$F(x,y) = \mathbb{P}[X \leq x, Y \leq y]$$

dalla funzione di ripartizione congiunta è possibile ottenere la funzione di ripartizione delle singole variabili (chiamata **distribuzioni marginale**)

- distribuzione marginale rispetto a $X$
	$$F_X(x) =\lim_{y \to \infty}F(x,y)$$
- distribuzione marginale rispetto a $Y$
	$$F_Y(y) =\lim_{x \to \infty}F(x,y)$$

dalla funzione di ripartizione si può ottenere la funzione di densità

$$f(x,y) = \frac{d\cdot d F(x,y)}{dy\,dx}$$


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


## Variabili indipendenti

Il significato di variabili indipendenti si estende anche a più variabili:

$$\mathbb{P}[X \in A \cap Y \in B] = \mathbb{P}[X \in A]\cdot \mathbb{P}[Y \in B]$$


che per le variabili discrete equivale ad usare la funzione di probabilità:
$$p(x,y) = p_X(x)\cdot p_Y(y)$$

mentre per le variabili continue equivale ad usare la funzione di densità:
$$f(x,y) = f_X(x)\cdot f_Y(y)$$


Vediamo degli esempi

Esempio 1

$$f(x,y) = \begin{cases}
24xy & x,y \in [0,1], x+y \in [0,1]\\
0 &\text{altrove}
\end{cases}$$

Determinare se $X$ e $Y$ sono indipendenti.

In questo caso viene molto utile fare il grafico della funzione:

![enter image description here](https://i.ibb.co/bNn1bhH/image.png)

scegliendo a caso una $x$ nel suo dominio ci dice qualcosa su come deve essere la $y$? si perchè la somma tra $x$ e $y$ deve essere minore di 1, quindi la $y$ **dipende** dal valore della x. Vale anche viceversa.
Quindi le due variabili non sono indipendenti


Esempio 2:

considerando la seguente rappresentazione della funzione di probabilità

![enter image description here](https://i.ibb.co/FwtyQxW/image.png)

determinare se $X$ e $Y$ sono indipendenti

In queste situazioni bisogna andare a confrontare ogni funzione di probabilità, appena si trova una prova che non venga rispettata la proprietà $p(x,y) = p_X(x)\cdot p_Y(y)$ allora si può concludere che non sono indipendenti:

$p(0,0) = p_X(0)\cdot p_Y(0)$
$0.2 = 0.5\cdot 0.4$ vale

$p(0,1) = p_X(0)\cdot p_Y(1)$
$0.2 = 0.5\cdot 0.3$ **non vale**

quindi possiamo concludere senza ulteriori confronti che le due variabili non sono indipendenti.


Esempio 3

**Date le probabilità marginali** delle due variabili e sapendo che esse sono **indipendenti** 

![enter image description here](https://i.ibb.co/L1C5prj/image.png)

possiamo calcolare la funzioni di probabilità congiunta utilizzando $p(x,y) = p_X(x)\cdot p_Y(y)$, otteniamo quindi 

![enter image description here](https://i.ibb.co/0Xqd26q/image.png)


## Distribuzioni condizionate discrete

La probabilità condizionata di $X$ dato $Y = y$ è 

$$p_{X|Y}(x|y) = \frac{p(x, y)}{p_Y(y)}$$

analogamente la probabilità condizionata di $Y$ dato $X = x$ è 

$$p_{Y|X}(y|x) = \frac{p(x, y)}{p_X(x)}$$


Se $X$ e $Y$ sono indipendenti allora

$p_{X|Y}(x|y) =p_X(x)$
$p_{Y|X}(y|x) = p_Y(y)$


Esempio

![enter image description here](https://i.ibb.co/tXnW4Yw/image.png)

$p_{X|Y}(0|1) = \frac{p(0, 1)}{p_Y(1)} = \frac{0.2}{0.5} = 0.4$

$p_{X|Y}(1|1) = \frac{p(1, 1)}{p_Y(1)} = \frac{0.3}{0.5} = 0.6$

inoltre possiamo notare che le probabilità che abbiamo calcolato sono diverse dalla distribuzione marginale di $X$ e possiamo concludere che $X$ e $Y$ non sono indipendenti: $p_{X|Y}(0|1) \neq p_X(0)$ e $p_{X|Y}(1|1) \neq p_X(1)$


## Distribuzioni condizionate continue

La probabilità condizionata di $X$ dato $Y = y$ è 

$$f_{X|Y}(x|y) = \frac{f(x, y)}{f_Y(y)}$$

$$\mathbb{P}[X\in A | Y = y] = \int_{A}f_{X|Y}(x|y)\,dx$$

analogamente la probabilità condizionata di $Y$ dato $X = x$ è 

$$f_{Y|X}(y|x) = \frac{f(x, y)}{f_X(x)}$$

$$\mathbb{P}[Y\in B | X = x] = \int_{B}f_{Y|X}(y|x)\,dy$$


Se $X$ e $Y$ sono indipendenti allora

$f_{X|Y}(x|y) =f_X(x)$
$f_{Y|X}(y|x) = f_Y(y)$

## Valore atteso

Il valore atteso di una trasformazione $g(X,Y)$ è possibile calcolarlo senza andare a calcolare il tipo specifico di distribuzione:

- caso discreto:

$$\mathbb{E}[g(X,Y)]] ) =\sum_y\sum_x g(x,y)p(x,y)$$

- caso continuo:

$$\mathbb{E}[g(X,Y)]] )=\int\int_{\mathbb{R^2}} g(x,y)f(x,y)\,dxdy$$

Due importanti conseguenze sono

1. $\mathbb{E}[X+Y] = \mathbb{E}[X] + \mathbb{E}[Y]$
2. se $X$ e $Y$ sono indipendenti allora $\mathbb{E}[X\cdot Y] = \mathbb{E}[X] \cdot \mathbb{E}[Y]$

Esempio:
prendiamo lo stesso esempio precedentemente visto.
![enter image description here](https://i.ibb.co/FwtyQxW/image.png)

$\mathbb{E}[X] = 0\cdot 0.5 + 1 \cdot 0.5 = 0.5$
$\mathbb{E}[Y] = 0\cdot 0.4 + 1 \cdot 0.3 + 2 \cdot 0.15 + 3 \cdot 0.15 = 1.05$

$\mathbb{E}[X + Y] =0.5 + 1.05 = 1.55$

## Covarianza

La varianza di due variabili congiunte, detta **covarianza** viene calcolata nel seguente modo:

$$\text{Cov}[X,Y] =\mathbb{E}[XY] - E[X]\cdot E[Y]$$

Vediamo le proprietà della covarianza:

- $\text{Cov}[X,Y] = \text{Cov}[Y,X]$
- $\text{Cov}[X,X] = \text{Var}[X]$
- $\text{Cov}[aX,Y] = a\text{Cov}[X,Y]$
- $\text{Cov}[X,a] = 0$
- $\text{Cov}[\sum_i X_i,\sum_j Y_j] = \sum_i \sum_j\text{Cov}[X_i,Y_i]$


### Varianza di una somma di variabili

Un'altra importante proprietà è la seguente:

$$\text{Var}\left[X + Y\right] = \text{Var}[X] + \text{Var}[Y] + 2\text{Cov}[X,Y]$$

Se **le variabili sono è indipendente** allora

$$\text{Var}\left[X +Y\right] = \text{Var}[X] + \text{Var}[Y]$$

### Covarianza e Indipendenza

Se due variabili $X,Y$sono **indipendenti** allora $\text{Cov}[X,Y] =0$
**Non è possibile affermare il contrario**

Infatti se $\text{Cov}[X,Y] =0$ si dice che $X$ e $Y$ sono **non correlate**


## Correlazione

La **correlazione** misura quanto sono dipendenti tra le due variabili tra loro.
Viene indicata come $\text{Cor}[X,Y]$ oppure con $\rho$. Si misura come segue:

$$\text{Cor}[X,Y]= \rho_{X,Y} =\frac{\text{Cov}[X,Y]}{\sqrt{\text{Var}[X]\cdot \text{Var}[Y]}}$$

Il valore della correlazione varia tra -1 e 1

$$-1\leq \rho \leq 1$$

dove se:
- se $\rho \to 0$ allora significa che le variabili sono quasi indipendenti: non sembra esserci una evidente correlazione tra il movimento di una variabile con il movimento dell'altra
- se $\rho \to 1$ (correlazione positiva) significa che quando una aumenta anche l'altra aumenta, e quando una diminuisce anche l'altra diminuisce
- se $\rho \to -1$ (correlazione negativa) significa che quando una aumenta l'altra diminuisce, e quando una diminuisce l'altra aumenta

![enter image description here](https://i.ibb.co/0VkGV4g/image.png)

Esempio
Calcoliamo la correlazione delle seguenti variabili congiunte
![enter image description here](https://i.ibb.co/FwtyQxW/image.png)

Troviamo le medie per calcolare la covarianza
$\mathbb{E}[XY] = (1 \cdot 1 \cdot 0.10) + (1 \cdot 2 \cdot 0.10) + (1 \cdot 3 \cdot 0.10) = 0.6$
$\mathbb{E}[X] = 0\cdot 0.5 + 1 \cdot 0.5 = 0.5$
$\mathbb{E}[Y] = 0\cdot 0.4 + 1 \cdot 0.3 + 2 \cdot 0.15 + 3 \cdot 0.15 = 1.05$

$\text{Cov}[X,Y] =0.6 - 0.5\cdot 1.05= 0.075$

calcoliamo le varianze per calcolare la correlazione
$\text{Var}[X] =(0^2 \cdot 0.5) + (1^2 \cdot 0.5) - 0.5^2 = 0.25$
$\text{Var}[Y] =(0^2 \cdot 0.40) + (1^2 \cdot0.30) + (2^2 \cdot 0.15) + (3 \cdot 0.15) - 1.05^2 = 1.1475$

$$\text{Cor}[X,Y] = \frac{0.075}{\sqrt{0.25 \cdot 1.1475}} = 0.14$$


## Somma di variabili con distribuzioni note

- $\text{Bin}(1,p) +\text{Bin}(1,p)$ indipendenti $\longrightarrow \text{Bin}(2,p)$
- $\text{Po}(\lambda_1) +\text{Po}(\lambda_2)$ indipendenti $\longrightarrow \text{Po}(\lambda_1 + \lambda_2)$
- $\text{Exp}(\lambda) +\text{Exp}(\lambda)$ indipendenti $\longrightarrow \text{Ga}(2, \lambda)$
- $\text{N}(\mu_1, \sigma_1^2) +\text{N}(\mu_2, \sigma_2^2)$ indipendenti $\longrightarrow \text{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$

## Media campionaria

Avendo due variabili $X_1, X_2$ indipendenti e con stessa distribuzione (viene detto un **campione di variabili**).
Diciamo che $\mathbb{E}[X_i] = \mu$ e $\text{Var}[X_i]=\sigma^2$ (entrambe le variabili hanno stessa media e varianza)

La media campionaria è un'altra variabile aleatoria che si definisce come:

$$\overline{X} =\frac{X_1 + X_2}{2}$$


Dato che si tratta di una variabile aleatoria possiamo calcolare:

- valore atteso
	$$\mathbb{E}[\overline{X}] = \mu$$
- varianza
	$$\mathbb{E}[\overline{X}] = \frac{\sigma^2}{2}$$

## Legge dei grandi numeri

Il calcolo della media campionaria si può estendere facilmente ad un numero $n$ di variabili.
La **legge dei grandi numeri** ci dice che all'aumentare di $n$, la probabilità che la media campionaria $\overline{X}_n$ si avvicini alla media della distribuzione delle variabili $\mu$ si avvicina ad 1

$$\overline{X}_n\xrightarrow{\text{p}}\mu$$

in altre parole più variabili si considerano più la media campionaria si avvicina alla media della distribuzione.

Un classico esempio è il lancio di un dado: ogni faccia ha una probabilità teorica di $\frac{1}{6}$, per la legge dei grandi numeri facendo un sufficiente numero di lanci del dado la media dei valori ottenuti si avvicinerà ad $\frac{1}{6}$.

## Teorema del limite centrale

Il teorema del limite centrale ci dice che considerando un sufficiente numero di variabili aleatorie, **indipendentemente dalla loro distribuzione**, la distribuzione della media campionaria si può approssimare alla distribuzione normale standard

Se le variabili che considero $X_1,...,X_n$ seguono già una distribuzione normale allora la media campionaria seguirà già una distribuzione normale, anche se considero poche variabili.
Mentre se le variabili hanno distribuzione molto diverse dalla normale è necessario considerare molte variabili (circa più di 30) per ottenere una approssimazione valida della media campionaria alla distribuzione normale standard.

$$\overline{X}_n \sim \text{N}\left(\mu, \frac{\sigma^2}{n}\right)$$

equivalente a

$$\sum_{i = 1}^n X_i \sim \text{N}\left(n\mu, n\sigma^2\right)$$
