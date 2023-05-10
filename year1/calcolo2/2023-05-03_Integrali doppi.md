# Integrali doppi

Gli integrali riguardano il calcolo integrale di funzioni a due variabili.

$$\int\int_{D} f(x,y) dx \, dy$$

## Dominio rettangolare

Consideriamo una funzione definita in un dominio rettangolare

$f:[a,b]\times[c,d]\longrightarrow \mathbb{R}$

dove $[a,b]$ è l'intervallo che riguarda la $x$
mentre $[c,d]$ è l'intervallo che riguarda la $y$

Per calcolare gli integrali definiti possiamo considerare il seguente grafico:

![](https://i.ibb.co/ch9f3H6/grafo-sezione.png)

Definiamo l'integrale come il volume sotteso dal grafico della funzione fino al piano $xy$ .
Calcoliamo il valore dell'integrale utilizzando il **teorema di teorema di riduzione dell'integrale doppio** (detto anche di Fubini-Tonelli):
Per farlo facciamo un integrazione da $a$ a $b$ per ottenere l'area di una sezione $y_0$ (quella colorata).
Facciamo l'integrazione da $c$ a $d$ del risultato ottenuto per fare l'area delle sezioni per tutto il dominio.

$$\int_c^d \left(\int_a^b f(x,y)\,dx\right)dy$$

oppure

$$\int_a^b \left(\int_c^d f(x,y)\,dy\right)dx$$

**Come in una dimensione vale il teorema per cui se la funzione è continua allora è integrabile.**


Esempio:

$\int \int_{[1,3]\times[0,1]}3xy^2 + x^2y \, dx \, dy$

$\int_1^3 \left(\int_0^1 3xy^2 + x^2y \, dy\right) dx$
$\int_1^3 \left[3x\frac{y^3}{3} + x^2\frac{y^2}{2}\right]_0^1 dx$
$\int_1^3 x + \frac{x^2}{2}-0-0 \, dx$
$\left[\frac{x^2}{2} + \frac{x^3}{6}\right]_1^3 = \frac{9}{2} + \frac{27}{6}- \frac{1}{2}-\frac{1}{5} = \frac{25}{3}$


### Funzioni a variabili separate

Se abbiamo un doppio integrale scritto come prodotto di due funzioni dipendenti da una unica variabile, allora il doppio integrale è dato dal prodotto dei due integrali singoli

$$\int_a^b \left(\int_c^dg(x) \cdot h(y) \,dy\right)dx$$

diventa:

$$\left(\int_a^bg(x)\, dx \right)\cdot \left(\int_c^dh(y)\, dy \right)$$


## Domini non rettangolari (Domini semplici)

Se dobbiamo calcolare l'integrale in un dominio semplice (cioè non rettangolare) si distinguono 2 casi:

- Dominio $E\subset \mathbb{R}^2$ si dice **y-semplice** se esistono due funzioni $g_1, g_2$ tali che
	$$E = \Bigl\{(x,y)\in\mathbb{R}^2: x \in [a,b], \,g_1(x)\leq y\leq g_2(x)\Bigr\}$$
	
$$\int_a^b \left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)dx$$

- Dominio $E\subset \mathbb{R}^2$ si dice **x-semplice** se esistono due funzioni $h_1, h_2$ tali che
	$$E = \Bigl\{(x,y)\in\mathbb{R}^2: y \in [c,d], \,h_1(x)\leq x\leq h_2(x)\Bigr\}$$
	
$$\int_c^d \left(\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\right)dy$$

In generale $E$ è semplice se è x-semplice e y-semplice
$E$ si dice **regolare** se è unione di un numero finito di insiemi semplici

Esempio:

$f(x,y) = xy$
$E = \Bigl\{(x,y)\in\mathbb{R}^2: 0\leq y\leq 2x-x^2\Bigr\}$

Abbiamo i valori in cui si muove la $y$ dobbiamo trovare quelli della $x$

$y=2x-x^2$ è una parabola rivolta verso il basso
troviamo le intersezioni con l'asse x:
$0 = 2x-x^2$
$x(2-x) = 0$

Intersezioni con l'asse x: $x = 0,x=2$

troviamo il vertice

$V_x= \frac{-2}{2\cdot(-1)} = 1$
$V_y= 2\cdot 1 - 1^2 = 1$

V(1,1)

Disegniamo il dominio

![](https://i.ibb.co/Zz8GJk3/dominio.png)

$$\int_0^2 \left(\int_{0}^{2x-x^2} xy\,dy\right)dx$$

$$\int_0^2\left[ x\frac{y^2}{2} \right]_0^{2x-x^2}dx$$

$$\int_0^2 x\frac{(2x-x^2)^2}{2}-0 \, dx$$

$$\int_0^2 \frac{x(4x^2+x^4-4x^3)}{2}-0 \, dx$$

$$\int_0^2 2x^3+\frac{x^5}{2}-2x^4 \, dx$$

$$\left[ 2\frac{x^4}{4}+\frac{x^6}{12}-\frac{2x^5}{5} \right]_0^2 = 8+\frac{64}{12}- \frac{64}{5}=\frac{8}{15}$$

## Cambio di variabili

In alcuni casi è conveniente fare un cambio di variabili per passare da un dominio articolato ad un dominio in cui si può integrare più facilmente.

Per fare ciò utilizziamo una **trasformazione di coordinate**

$T: D' \rightarrow D$ dove

$\begin{cases}
x = g(u,v)\\
y = h(u,v)
\end{cases}$

## Matrice Jacobiana

Si dice matrice jacobiana la matrice delle derivate parziali della trasformazione $T$

$$J_T(u,v) = \begin{pmatrix}
\frac{dg}{du}&\frac{dg}{dv}\\
\frac{dh}{du}& \frac{dh}{dv}
\end{pmatrix}$$

una trasformazione $T$ Si dice **Diffeomorfismo** se $T$ è differenziabile e se T è invertibile.
In un altro modo è possibile dire che $T$ è un Diffeomorfismo se $T\in C^1(D')$ e $\det(J_T(u,v)) = 0$

I punti in cui $\det(J_T(u,v)) = 0$ sono chiamati **punti critici** della trasformazione

### Formula di cambiamento di variabili

In generale la formula per il cambio di variabili è:

$$\int\int_Df(x,y)\,dx\,dy = \int\int_{D'}f(g(u,v),h(u,v))\cdot|\det(J_T)|\,du\,dv$$

## Trasfomazione in coordinate polari

Noi ci concentriamo nel caso in cui sostituiamo con una rappresentazione con coordinate polari

$\begin{cases}
x =  g(\rho,\theta) = \rho \cos \theta\\
y = h(\rho,\theta) = \rho \sin\theta
\end{cases}$

(ricordiamo che $\rho$ rappresenta la distanza della coordinata rispetto all'origine, mentre $\theta$ è un angolo che si forma tra l'asse x  positivo e la retta passante per $\rho$ e l'origine)

generalmente $\rho > 0$ mentre $0\leq\theta < 2\pi$

La matrice Jacobiana è:

$$J_T(u,v) = \begin{pmatrix}
\cos\theta&-\rho\sin\theta\\
\sin\theta& \rho\cos\theta
\end{pmatrix}$$



Prediamo in considerazione l'area compresa tra questi due rami di circonferenza
![](https://i.ibb.co/y54pkwy/circonferenze.png)

Non si tratta di un dominio rettangolare e nemmeno semplice

Passando alla rappresentazione per coordinate polari

$\begin{cases}
x =  \rho \cos \theta\\
y =  \rho \sin\theta
\end{cases}$

![](https://i.ibb.co/7bhMM6z/circonferenze2.png)

notiamo che:

$$2\leq\rho\leq3$$

$$0\leq\theta\leq\frac{\pi}{2}$$

riusciamo ad ottenere un dominio rettangolare

![](https://i.ibb.co/60nVs1L/dominio2.png)

dove l'asse x è $\rho$ mentre l'asse y è $\theta$

### Formula di cambiamento di variabili (coordinate polari)

nel caso di cambio di variabili a coordinate polari:

$$\int\int_Df(x,y)\,dx\,dy = \int\int_{D'}f(\rho\cos\theta,\rho\sin\theta)\cdot\rho\,d\rho\,d\theta$$


## Baricentro

Il baricentro è un punto del piano di coordinate $(x_C, y_C)$ che rappresenta la media aritmetica dei punti di del dominio.

$$x_C = \frac{\int\int_Dx\, dx\,dy}{\int\int_D1\,dx\,dy} \hspace{10mm} y_C = \frac{\int\int_Dy\, dx\,dy}{\int\int_D1\,dx\,dy}$$

Non è detto che il baricentro sia all'interno del dominio


