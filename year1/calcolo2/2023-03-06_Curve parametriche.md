# Curve parametriche

Le **curve parametriche** sono le traiettorie assunte dalle funzioni (dette a valori vettoriali) definite come:

$f:A\subset \mathbb{R} \longrightarrow \mathbb{R}^m$
$t \longmapsto f(t) = (x_1(t), x_2(t), ..., x_m(t))$

Dove $x_i(t)$ sono funzioni, quindi $f(t)$ rappresenta un vettore di funzioni dipendenti dal parametro $t$

Nel caso in cui $m = 2$ useremo la notazione

$f(t) = (x(t), y(t))$

Nel caso in cui $m = 3$ useremo la notazione

$f(t) = (x(t), y(t), z(t))$

## Esempi di curve parametriche

$f: \mathbb{R} \longrightarrow \mathbb{R}^2$
$t \longmapsto f(t) = (t^2+t, 2t-1)$

Risolvendo il sistema:

$\begin{cases} 
x = t^2 + t \\
y = 2t - 1
\end{cases}$

Si ottiene **l'equazione cartesiana del supporto**

Nel nostro caso si ottiene $x = \frac{1}{4}y^2 + y + \frac{3}{4}$ cioè una parabola con asse orizzontale.

Disegnando l'equazione cartesiana del supporto otteniamo la **curva del supporto**.

![](https://i.ibb.co/HxwG19b/curva-parametrica.png)

immaginando il valore $t$ come se fosse il tempo indichiamo il **verso di percorrenza** il tragitto che compie la curva in vari tempi $t$.

### Esempio ellisse

l'equazione generica dell'ellisse è 

$\frac{(x - x_{0})^{2}}{a^{2}} + \frac{(y-y_0)^2}{b^2} = 1$

dove $a$ indica la lunghezza del semiasse x (distanza tra origine e intersezione tra ellisse e asse x)
dove $b$ indica la lunghezza del semiasse y (distanza tra origine e intersezione tra ellisse e asse y)

$f(t) = (5\cos(t), 2\sin(t))$ con $t\in [0; 2\pi]$

avendo quindi il sistema

$\begin{cases} 
x = 5\cos(t) \\
y = 2\sin(t)
\end{cases}$

In questo caso non è conveniente isolare la $t$, ma possiamo isolare il coseno e il seno e sfruttare la formula $\cos(x)^2 + \sin(x)^2 = 1$ 

$\begin{cases} 
\frac{x}{5} = \cos(t) \\
\frac{y}{2} = \sin(t)
\end{cases}$

Otteniamo:

$\frac{x^2}{25} + \frac{y^2}{4} = 1$

![](https://i.ibb.co/SrgcqCy/curva2.png)

## Limite nelle funzioni a valori vettoriali

$f: I \subset \mathbb{R} \longrightarrow \mathbb{R}^m$

$\lim_{t \to t_0} f(t) = s$

se

$\lim_{t \to t_0} ||f(t) - s|| = 0$ 

Abbiamo che il limite della funzione per t che tende a $t_0$ restituisce un vettore $s$ se la distanza tra il punto $f(t)$ e $s$ tende a zero.


## Proprietà e teoremi delle funzioni vettoriali

- Una funzione è **continua** se tutte le sue componenti sono continue
- Una funzione è **derivabile** se tutte le sue componenti sono derivabili
- Una funzione è **integrabile** se tutte le sue componenti sono integrabili
- Una funzione appartiene alla classe $C^k$ se tutte le sue componenti sono di classe $C^k$

## Tipi di curve

Considerando $f:[a,b] \longrightarrow \mathbb{R}^m$

- Una curva parametrica si dice **chiusa** se il punto iniziale coincide con il punto finale
	$f(a) = f(b)$
- Una curva parametrica si dice **semplice** se la curva non interseca se stessa, escluso il caso in cui sia chiusa
presi qualsiasi $t_1 \in [a,b], t_2 \in]a,b[$ si ha 
$$f(t_1) = f(t_2) \implies t_1 = t_2$$

### Misure aggiuntive

- $r'(t)$ rappresenta la **velocità istantanea** del punto
- $||r'(t)||$ rappresenta la **velocità scalare**
- Se $||r'(t_0)|| \neq$ allora $r'(t_0)$ rappresenta la **direzione della tangente** alla curva nel punto $t_0$
- $r''(t_0)$ rappresenta l'accelerazione istantanea in un punto $t_0$
