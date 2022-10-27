
# Funzioni continue

Data una funzione:

$$f: A \subseteq \mathbb{R} \longrightarrow \mathbb{R}$$

- Se $x_0 \in A$ è un punto di accumulazione per A allora la funzione è continua in $x_0$
- Se $x_0 \in A$ è un punto isolato di A allora la funzione è continua in $x_0$
- Se esistono il limite destro e il limite sinistro i loro risultati sono entrambi uguali al valore di f in quel punto, allora la funzione è continua in $x_0$ .
	$$\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = f(x_0)$$

In generale $f$ è una funzione continua se è continua in **ogni punto del suo dominio**.

## Operazioni tra funzioni continue

Date due funzioni continue $f$ e $g$ allora:

- $f + g =$ funzione continua
- $f * g =$ funzione continua
- $\frac{f}{g} =$ funzione continua
- $\vert f\vert =$ funzione continua
- $f \circ g =$ funzione continua
	- Se il valore del limite di $g$ è fuori dal dominio di $f$ allora si può usare il cambio di variabili
	$$\lim_{x \to x_0}f(g(x)) = \lim_{t \to l}f(t)$$

		Es.

	$$\lim_{x \to 0}log(\frac{1}{x}) = \lim_{t \to +\infty}\log(t)$$

- $f^{-1}$ è continua se $f$ è strettamente monotona e definita in un intervallo $I$

### Continuità di funzioni elementari

- Potenza: $x^\alpha$ continua
- Esponenziale: $a^x$ continua
- Logaritmo: $log_a(x)$ continua
- Trigonometriche: $\cos(x)$ continua
- Trigonometriche inverse: $\arctan(x)$ continua

Casi particolari
- La funzione continua non è continua in $x_0=0$
- le funzioni definite a tratti vanno analizzate caso per caso (controllando il punto di "giunzione").

## Teoremi delle funzioni continue

### Teorema di Bolzano o degli zeri di una funzione continua

Una Funzione continua definita in un intervallo $[a , b]$ con $a < b$ .
Se supponiamo che $f(a)$ e $f(b)$ siano di segno opposto allora esiste **almeno** un punto $c$ per cui $f(c) = 0$ , Quindi la funzione passa per forza per $y = 0$ .

![](https://i.ibb.co/d5yY5yH/bolzano.png)

### Teorema dei valori intermedi

Avendo una funzione continua che va da $[a,b] \longrightarrow \mathbb{R}$
con $a < b$ allora l'immagine di $f$ è anch'essa un intervallo, ed $f$ assume tutti i valori in quel intervallo.

### Teorema di Weierstrass

Se una funzione $f$ è continua in un insieme $A$ chiuso e limitato, allora la funzione assume un minimo ed un massimo in $A$.

### Mostrare che una funzione ha almeno uno zero

per dimostrare che una funzione possiede almeno uno zero si può utilizzare il teorema degli zeri di una funzione continua:

$f(x) = x^3+2x^2+x+1$

la funzione è continua in tutto $\mathbb{R}$

calcoliamo il limite agli estremi della funzione:

$$\lim_{x \to +\infty}f(x) = +\infty$$

$$\lim_{x \to -\infty}f(x) = -\infty$$

Quindi abbiamo sicuramente un punto negativo $a$ e un punto positivo $b$
Per il teorema degli zeri di una funzioni continua allora abbiamo sicuramente che la funzione ha almeno uno zero.

## Limiti notevoli

- $\lim_{x \to 0} \frac{\sin(x)}{x} = 1$ (x espresso in radianti)

- $\lim_{x \to 0} \frac{1 - \cos(x)}{x^2} = \frac{1}{2}$

- $\lim_{x \to \pm \infty}(1+\frac{1}{x})^x = e$

- $\lim_{x \to 0}(1+x)^\frac{1}{x} = e$

- $\lim_{x \to +\infty} \frac{log(x)}{x} = 0$

- $\lim_{x \to + \infty} \frac{log_a x^\beta}{x^p} = 0$ con $a >0 \land a \neq 1, \beta \in \mathbb{R}, p > 0$

- $\lim_{x \to 0^+} =x^p log_ax^\beta = 0$

- $\lim_{x \to +\infty} \frac{a^x}{x^p} = +\infty$
