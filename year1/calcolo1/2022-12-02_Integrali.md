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


