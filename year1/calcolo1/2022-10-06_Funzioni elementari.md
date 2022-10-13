
# Funzioni elementari

Le funzioni elementari sono quello funzioni il cui grafico è conosciuto.

## Potenza

$$y = x^\alpha$$

### Potenza con esponente naturale

- Se $\alpha = n \in \mathbb{N}$
	Il dominio è $\mathbb{R}$
- Se l'esponente è pari e diverso da 0 allora per qualsiasi $x, x^\alpha$ sarà positivo
- Se l'esponente è dispari allora $x^\alpha$ potrà essere positivo o negativo
- $x^0 = 1$

![](https://i.ibb.co/0nXp44X/potenza1.png)

### Potenza con esponente intero negativo

$$y = x^{-\alpha}$$

$$y = \frac{1}{x^{\alpha}}$$

- Se $\alpha = n \in \mathbb{Z}\setminus \lbrace 0\rbrace$
	Il dominio è $\mathbb{R} \setminus \lbrace 0 \rbrace$

![](https://i.ibb.co/QvxY4bk/patenza2.png)


### Potenza con esponente razionale

$$y = x^\frac{m}{n}$$

$$y = \sqrt[n]{x^m}$$

con $m = 1$ allora:
-	se n è pari il dominio è $[0,+\infty[$
-	se n è dispari il dominio è $\mathbb{R}$

![](https://i.ibb.co/SKDXGrg/potenze3.png)

con $m \in \mathbb{Z} \setminus \lbrace 0 \rbrace$ e $n \in \mathbb{N} \setminus \lbrace 0 \rbrace$ allora:
- Se $\frac{m}{n} > 0$ il dominio è $[0,+\infty[$
- Se $\frac{m}{n} < 0$ il dominio è $]0,+\infty[$

![](https://i.ibb.co/TB69zvZ/potenze4.png)

### Potenze con esponente reale

- Se $\alpha > 0$
	Il dominio è $[0,\infty[$
- Se $\alpha < 0$
	Il dominio è $]0,\infty[$

## Funzioni esponenziali

$$y = a^x$$

con $a>0$

![](https://i.ibb.co/Kr4294z/exp1.png)

### Proprietà

- Le funzioni esponenziali assumono solo valori positivi.
- se la base è $> 1$ allora la funzione è strettamente crescente.
- Se la base è compreso tra $0$ e $1$ allora la funzione è strettamente decrescente.
- Se la base è $= 1$ allora la funzione è costante.
- Se si restringe il codominio a $]0, + \infty[$ la funzione diventa biettiva e quindi possiede un inverso (il logaritmo).

#### Proprietà delle potenze

- $a^0 = 1$
- $a^1 = a$
- $a^{x_1+x_2} = a^{x_1} \cdot a^{x_2}$
- $a^{-x} = (\frac{1}{a})^x = \frac{1}{a^x}$
- $(a^x)^b = a^{bx}$

## Funzioni logaritmiche

$$y = log_a(x)$$

Il logaritmo è la funzione inversa dell'esponenziale

$y = log_a(x) \iff x = a^y$

![](https://i.ibb.co/9s4Ry1z/loga.png)

N.B. $y=log_{\frac{1}{2}}(x)$ si può scrivere come $y=-log_2(x)$

### Proprietà

- Se la base è $> 1$ allora la funzione è strettamente crescente.
- Se la base è compresa tra $0$ e $1$ allora la funzione è strettamente decrescente.

#### Proprietà derivate dalle potenze

- $log_a(1) = 0$
- $log_a(a) = 1$
- $log_a(x_1 \cdot x_2) = log_a(x_1) + log_a(x_2)$
- $log_a(\frac{x_1}{x_2}) = log_a(x_1) - log_a(x_2)$
- $log_a(x_1^{x_2}) = x_2 \cdot log_a(x_1)$
- $a^{x_1} = b^{x_1 \cdot log_b(a)}$
- $log_a(b) = \frac{log_c(b)}{log_c(a)}$

Attenzione:

$log_a(x)^b \neq (log_a(x))^b$
$b \cdot log_a(x) \neq log_a^b(x)$

### Logaritmo naturale

Un logaritmo viene chiamato naturale se ha per base il numero di Nepero $e$ (che vale circa $2.7182...$)

$log_e(x) = ln(x)$

$y = ln(x) \iff x=e^y$

## Valore assoluto

$$y = |x|$$

![](https://i.ibb.co/frmJcKh/val-assoluto.png)

$$|x| = \begin{cases}x & \text{ se } x \geq 0 \\
-x & \text{ se } x < 0 \end{cases}$$

### Proprietà

- $|x| \geq 0$ e $x \leq |x|$ per ogni $x \in \mathbb{R}$
- dato $a > 0$ allora di disequazione $|x| < a \iff -a < x < a$ [vedi figura sottostante]
- dato $a > 0$ allora di disequazione $|x| > a \iff (x  < -a \land x > a)$ [vedi figura sottostante]

![](https://i.ibb.co/kJtHzxs/prop-val-ass.png)

### Disuguaglianze triangolari

$a,b \in \mathbb{R}$

- $|a+b| \leq |a|+|b|$
- $||a|-|b|| \leq |a-b|$

## Funzione segno

$$y=\text{sgn}(x)$$

![](https://i.ibb.co/BytyPj7/sign.png)

$$\text{sgn}(x) = \begin{cases}1 & \text{ se } x \geq 0 \\
0 & \text{ se } x = 0 \\
-1 & \text{ se } x < 0 \end{cases}$$


## Funzioni goniometriche


![](https://i.ibb.co/dtXv3sZ/circonfe.png)

$$x= \cos(\alpha)$$

$$y= \sin(\alpha)$$

L'angolo $\alpha$ viene rappresentato in **radianti**, è possibile convertire secondo la seguente proporzione:

$$180:\pi=\alpha(°):x(rad)$$

### Proprietà

- I valori di coseno e seno sono compresi tra $-1$ e $1$
- $\cos^2\alpha + \sin^2\alpha = 1$
- $\cos -\alpha = \cos \alpha$
- $\sin -\alpha = - \sin \alpha$
- $\sin (\alpha +\beta) = \sin \alpha \cdot \cos \beta + \sin \beta \cdot \cos \alpha$
- $\cos (\alpha +\beta) = \cos \alpha \cdot \cos \beta - \sin \alpha \cdot \sin \beta$

Formule di duplicazione

- $\sin (2\alpha) = 2\sin \alpha \cdot \cos \alpha$
- $\cos (2\alpha) = \cos^2 \alpha - \sin^2 \alpha$

Formule riduzione potenza

- $\sin^2 \alpha = \frac{1-\cos 2\alpha}{2}$
- $\cos^2 \alpha = \frac{1+\cos 2\alpha}{2}$

### Seno

Restringendo il dominio e codominio otteniamo una funzione biettiva:

$\sin : [-\frac{\pi}{2}, \frac{\pi}{2}] \longrightarrow [-1, 1]$

$x \longmapsto y = \sin (x)$

Possiamo così ottenere la funzione inversa:

$$\sin^{-1} (x) = \arcsin (x)$$

$\arcsin : [-1, 1] \longrightarrow  [-\frac{\pi}{2}, \frac{\pi}{2}]$

$x \longmapsto y = \arcsin (x)$

cioè il valore tale che $\sin(y) = x$

| $\sin$ | $\arcsin$ |
|--|--|
| ![](https://i.ibb.co/bFVWwG0/sin.png) | ![](https://i.ibb.co/W6ZGj3x/arcsin.png) |

### Coseno

Restringendo il dominio e codominio otteniamo una funzione biettiva:

$\cos : [0, \pi] \longrightarrow [-1, 1]$

$x \longmapsto y = \cos (x)$

Possiamo così ottenere la funzione inversa:

$$\cos^{-1} (x) = \arccos (x)$$

$\arccos : [-1, 1] \longrightarrow  [0, \pi]$

$x \longmapsto y = \arccos (x)$

cioè il valore tale che $\cos(y) = x$

| $\cos$ | $\arccos$ |
|--|--|
| ![](https://i.ibb.co/q7sfBfk/coseno.png) | ![](https://i.ibb.co/fMK0v8s/arccos.png) |

### Funzione tangente

![](https://i.ibb.co/NZtp4kt/tangente.png)

La tangente è il componente $y$ del punto $Q$ nell'immagine, cioè dell'intersezione tra la diagonale e la retta $x = 1$ .

$$\tan(\alpha) = \frac{\sin (\alpha)}{\cos(\alpha)}$$

tenendo conto di $\forall \alpha \neq \frac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$

Dato che $\tan(-\alpha) = -\tan(\alpha)$ la funzione tangente è **dispari**

Restringendo il dominio otteniamo una funzione biettiva:

$\tan: ]-\frac{\pi}{2}, \frac{\pi}{2}[ \longrightarrow \mathbb{R}$

$x \longmapsto y = \tan(x)$

Possiamo così ottenere la funzione inversa:

$$\tan^{-1} = \arctan(x)$$

$\arctan : \mathbb{R} \longrightarrow ]-\frac{\pi}{2}, \frac{\pi}{2}[$

$x \longmapsto y = \arctan(x)$

cioè quel valore tale che $\tan(y) = x$

| $\tan$ | $\arctan$ |
|--|--|
| ![](https://i.ibb.co/5jzLpWz/tan.png) | ![](https://i.ibb.co/kMCRvLD/arctan.png) |

### Angoli notevoli

![](https://i.ibb.co/TcYFpGc/corr-gradi-rad.png)

### Funzione cotangente

![](https://i.ibb.co/QQTH21Y/cot.png)

La cotangente è il componente $x$ del punto $E$ nell'immagine, cioè dell'intersezione tra la diagonale e la retta $y = 1$ .

$$\cot(\alpha) = \frac{\cos (\alpha)}{\sin(\alpha)}$$

tenendo conto di $\forall \alpha \neq k\pi$ con $k \in \mathbb{Z}$

### Funzione secante e cosecante

![](https://i.ibb.co/9qRJdvS/sec.png)

La funzione **secante** rappresenta la componente $x$ del punto $G$ nell'immagine, cioè dell'intersezione tra la tangente della circonferenza e l'asse $x$ .

La funzione **cosecante** rappresenta la componente $y$ del punto $H$ nell'immagine, cioè dell'intersezione tra la tangente della circonferenza e l'asse $y$ .

$$\sec(\alpha) = \frac{1}{\cos(\alpha)}$$

$$\cosec(\alpha) = \frac{1}{\sin(\alpha)}$$


## Funzioni iperboliche

### Seno iperbolico

$$\sinh (x) = \frac{e^x-e^{-x}}{2}$$


Dato che $\sinh (-x) = -\sinh(x)$ è una funzione **dispari**.

È una funzione biettiva per cui possiede una funzione inversa:

$$y = \ln(x+\sqrt{x^2+1})$$


### Coseno iperbolico

$$\cosh (x) = \frac{e^x-e^{-x}}{2}$$


Dato che $\cosh (-x) = \cosh(x)$ è una funzione **pari**.

Restringendo dominio e codominio si ottiene una funzione biettiva:

$\cosh : [0, +\infty[ \longrightarrow [1, +\infty[$

$x \longmapsto y=\cosh(x)$

Quindi possiede una funzione inversa:

$$y = \ln(x+\sqrt{x^2-1})$$

![](https://i.ibb.co/HF2Z5zm/iperb.png)


