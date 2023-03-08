﻿# Curve parametriche

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

Quindi un ellisse di centro $(x_0, y_0)$ semiasse orizzontale $a$ e semiasse verticale $b$

Nel nostro caso.

$x_0 = 0, y_0 = 0$
$a = 5, b = 2$

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

## Curve regolari

$r: I \subset \mathbb{R} \longrightarrow \mathbb{R}$

Una curva $r$ è **regolare** se appartiene alla classe $C^1(I)$ (Quindi derivabile e con la derivata prima continua) e $r'(t) \neq 0\text{ (vettore nullo)} \,\forall t \in I$

Una curva $r$ è **regolare a tratti** se appartiene alla classe $C^0(I)$ (continua) e c'è un numero finito di valori di $t$ per cui $r$ non è derivabile oppure la derivata vale $0$ (vettore nullo)

Per le curve regolari è sempre definito un versore tangente cioè un vettore di lunghezza 1 nella direzione di $r'(t)$ si trova con la formula

$$T(t) = \frac{r'(t)}{||r'(t)||}$$


## Equazione parametrica e cartesiana della retta tangente

L'equazione parametrica di una retta è definita come

$\begin{cases}
x(t) = x_0 + v_x(t-t_0)\\
y(t) = y_0 + v_y(t-t_0)
\end{cases}$

Avendo un punto $P(x_0, y_0)$ e un vettore $V(v_x, v_y)$

l'equazione cartesiana si ottiene isolando $(t-t_0)$

### Esempio con le curve parametriche regolari:

Avendo la curva $r(t) = (t^2, t)$

è regolare perchè entrambi le componenti sono derivabili e qualsiasi $t$ si scelga non si ottiene un vettore nullo

Il vettore direzione è dato dalla derivata prima della curva:

$r'(t) = (2t , 1)$

#### Determiniamo l'equazione della retta tangente nel punto $t_0 = 0$

$r(0) = (0, 0)$
$r'(0) = (0, 1)$

Equazione parametrica:

$\begin{cases}
x(t) = 0 + 0(t - 0)\\
y(t) = 0 + 1(t - 0)
\end{cases} 
\begin{cases}
x(t) = 0\\
y(t) = t
\end{cases}$

l'equazione cartesiana è x = 0

#### Determiniamo l'equazione della retta tangente nel punto $t_0 = 1$

$r(1) = (1, 1)$
$r'(1) = (2, 1)$

Equazione parametrica:

$\begin{cases}
x(t) = 1 + 2(t - 1)\\
y(t) = 1 + 1(t - 1)
\end{cases} 
\begin{cases}
(t-1) = \frac{x-1}{2}\\
y = 1 + \frac{x-1}{2}
\end{cases}$

l'equazione cartesiana è $y = \frac{x-1}{2} + 1$