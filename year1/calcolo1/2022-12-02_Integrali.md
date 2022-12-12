# Integrali

L'integrali è l'operazione inversa della derivata

![](https://i.ibb.co/8dNqMMc/int-der.png)

$$\int f(x) dx = F(x) + c$$

- $\int$ simbolo di integrale
- $f(x)$ funzione integranda
- $F(x)$ Funzione primitiva (se $c=0$ si chiama funzione primitiva fondamentale)
- $c$ costante

Si legge **integrale indefinito** e rappresenta l'insieme di tutte le primitive della funzione $f$

Se una funzione è continua in un intervallo allora è anche integrabile in quel intervallo.

## Algebra degli integrali

### Prima proprietà di linearità

$$\int [f(x) + g(x)] dx = \int f(x) dx + \int g(x) dx$$

### Seconda proprietà di linearità

$$\int k f(x)  dx = k \int f(x) dx$$


## Integrali immediati

|funzione | primitiva |
|--|--|
| $\int k dx$ | $x+ c$ |
| $\int x^\alpha dx$ | $\frac{x^{\alpha + 1}}{\alpha + 1}  + c$ |
| $\int x^{-1} dx$ / $\int \frac{1}{x}$ | $\ln \vert x \vert  + c$|
| $\int e^x dx$ | $e^x  + c$ |
| $\int \sin x dx$ | $-\cos x  + c$ |
| $\int \cos x dx$ | $\sin x  + c$ |
| $\int \frac{1}{\cos^2 x} dx$ | $\tan x  + c$ |
| $\int \frac{1}{\sin^2 x} dx$ | $-\cot x  + c$ |
| $\int \frac{1}{\sqrt{1-x^2}} dx$ | $\arcsin x  + c$ |
| $\int -\frac{1}{\sqrt{1-x^2}} dx$ | $\arccos x  + c$ |
| $\int \frac{1}{1+x^2} dx$ | $\arctan x  + c$ |

### Integrazione di funzioni composte

Quando l'integranda è una funzione in cui appare anche la sua derivata allora è sufficiente integrare la funzione originale senza considerare la derivata

$$\int f^\alpha(x) \cdot f'(x) dx = \frac{f^{\alpha+1}}{\alpha +1} +c$$

$$\int \frac{f'(x)}{f(x)}) dx = \ln \vert f(x) \vert + c$$


## Integrazione per parti

$$\int f'(x) \cdot g(x) dx = f(x)g(x) - \int g'(x) f(x) dx$$

Quando si incontra un integrale da risolvere col metodo per parti è conveniente scegliere **f(x)** la funzione che conviene **integrare** mentre **g(x)** la funzione che conviene **derivare**


## Integrazione per sostituzione

A volte quando la funzione all'interno dell'integrale è complessa è conveniente sostituire dei termini (spessi si tratta della radice)

Nella fase di sostituzione bisogna anche trovare il nuovo valore del differenziale dx.

Es.

$$\int \frac{x}{\sqrt{x-1}}dx$$

Sostituisco $\sqrt{x-1}$ con t e di conseguenza trovo il valore di x e il valore di dx:

$$\sqrt{x-1} = t \hspace{5mm} x = t^2 +1 \hspace{5mm} \text{ derivando } \to dx = 2t dt$$

Sostituendo trovo che:

$$\int \frac{t^2+1}{\cancel{t}}2\cancel{t}dt$$

$$\int (t^2+1) \cdot 2dt$$

$$2(\frac{t^3}{3}+t) $$

$$\frac{2}{3}\sqrt{(x-1)^3} + 2\sqrt{x-1} + c$$

## Integrazione di funzioni fratte

Risoluzione di integrali nella forma:

$$\int \frac{N(x)}{D(x)}$$

integrali di base

- $\int \frac{1}{x-a}dx = \ln|x-a| + c$
- $\int \frac{1}{(x-a)^k}dx = \frac{1}{-K+1}\cdot (x-a)^{-k+1} + c$
- $\int \frac{1}{x^2-a^2}dx = \frac{1}{a}\arctan(\frac{x}{a}) + c$

### grado(N(x)) < grado(D(x))

Caso in cui il grado del numeratore sia **minore** del grado del  denominatore, si utilizza il metodo con A e B:

Es.

$$\int \frac{3x+11}{x^2-x-6}dx$$

Si fattorizza il denominatore:

$x^2-x-6 = (x-3)(x+2)$

$$\frac{A}{x-3} + \frac{B}{x+2}$$

faccio il denominatore comune:

$$\frac{Ax+2A+Bx-3B}{(x-3)(x+2)}$$

raccolgo i coefficienti che hanno le x dello stesso grado

$$\frac{x(A+B)2A-3B}{(x-3)(x+2)}$$

$$\begin{cases}
A+B = 3 \\
2A-3B = 11
\end{cases}$$

risolvendo il sistema ottengo
$$\begin{cases}
A = 4 \\
B = -1
\end{cases}$$

$$\int\frac{4}{x-3} + \frac{-1}{x+2}dx =$$

$$= 4\ln|x-3|-\ln|x+2| + c$$

### grado(N(x)) > grado(D(x))

Caso in cui il grado del numeratore sia **maggiore** del grado del  denominatore, si svolge la divisione tra polinomi

Es.

$$\int \frac{x^3+2x^2+x+1}{x^2+1}$$

La divisione tra polinomi si svolge ripentendo i seguenti tre step fino a che il grado del dividendo non diventa minore di quello del divisore

![](https://i.ibb.co/hgrtKnf/div-polinomi.png)

ottenendo infine:

![](https://i.ibb.co/P6cXCH9/div-finale.png)

Quindi abbiamo:

$$\int \frac{x^3+2x^2+x+1}{x^2+1} = \int \frac{(x^2+1)(x+2) + (-1)}{x^2+1}$$

$$= \int (x+2) + \frac{-1}{x^2+1} = \frac{x^2}{2} + 2x - arctan(x) + c$$


## Integrali definiti

Gli integrali definiti calcolano l'integrale in un intervallo definito.

Si indica:

$$\int_{a}^{b}f(x)$$

Dove $a$ è l'estremo inferiore e $b$ è l'estremo superiore

Il significato geometrica dell'integrale definito è quello di trovare **l'area con segno** del trapezoide definito dalla funzione con l'asse x

### Teoremi

- Se $f$ è limitata e monotona allora è anche integrabile
- Se $f$ è continua allora è anche integrabile


### Integrale di una funzione positiva nell'intervallo

![](https://i.ibb.co/h9ZNzQT/posiv.png)

$T = \int_A^Bf(x)$

### Integrale di una funzione negativa nell'intervallo

![](https://i.ibb.co/pZjg8d3/nega.png)

$T = -\int_A^Bf(x)$


### Integrale di una funzione sia positiva che negativa nell'intervallo

![](https://i.ibb.co/MNBqMcM/mixed.png)

$T = T_1 + T_2 + T_3$

$T = \int_A^Bf(x) + (-\int_B^Cf(x)) + \int_C^Df(x)$

### Valore medio

Si può trovare il valore medio di una funzione:

$$f(z) = \frac{\int_a^b f(x)dx}{b-a}$$

![](https://i.ibb.co/gytW11R/image.png)

Il teorema della media dice che esiste un punto $z$ tale che l'area sottesa a  $f(x)$ è uguale all'area del rettangolo che ha per base $b−a$ e altezza $f(z)$ (chiamato _valore medio_)

### Teorema fondamentale del calcolo integrale

formula di *Leibniz-Newton*:

$$\int_a^b f(x) dx = F(b) - F(a)$$

Quindi il valore dell'integrale definito in un intervallo $[a,b]$ è dato da l'integrale indefinito in cui sostituisco al posto della $x$ l'estremo superiore $F(b)$ meno l'integrale indefinito in cui sostituisco l'estremo inferiore $F(a)$ .

Nota:

$$\int_a^b k dx = (b-a)k \hspace{5mm}\text{ con k costante}$$

Es.

$\int_0^2 x^2dx = \left[\frac{x^3}{3}\right]_0^2 =\frac{8}{3} - 0 = \frac{8}{3}$
