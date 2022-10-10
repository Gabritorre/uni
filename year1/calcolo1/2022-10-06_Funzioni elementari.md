
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
- dato $a > 0$ allora di disequazione $|x| < a \iff -a <x<a$ [vedi figura sottostante]
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
