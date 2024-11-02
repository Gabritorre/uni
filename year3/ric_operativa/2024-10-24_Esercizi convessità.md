# Esercizi convessità

## Es 1

Dire se data una funzione lineare $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$, allora la funzione $g(x) = |f(x)|$ è convessa su $\mathbb{R}^n$.

Per stabilire se $g(x)$ è convessa su $\mathbb{R}$ devo verificare la seguente condizione

$$
g(\lambda x + (1-\lambda)y) \leq \lambda g(x) + (1-\lambda) g(y) \hspace{5mm} \forall \lambda \in [0,1]
$$

cioè arrivare ad ottenere:

$$
|f(\lambda x + (1-\lambda)y)| \leq \lambda |f(x)| + (1-\lambda)|f(y)|
$$

Quindi usando la definizione di $g(x)$:

$g(\lambda x + (1-\lambda)y) = |f(\lambda x + (1-\lambda)y)|$

Siccome $f(x)$ è lineare vale che

$$
f(\alpha x + \beta y) = \alpha f(x) + \beta f(y) \hspace{4mm} \forall x, y \in \mathbb{R}^n \hspace{2mm} \alpha, \beta \in \mathbb{R}
$$

quindi per $\alpha = \lambda$ e $\beta = (1-\lambda)$ ho che:

$$
|f(\lambda x + (1-\lambda)y)| = |\lambda f(x) + (1-\lambda)f(y)|
$$

per disuguaglianza triangolare $(|a + b| \leq |a| + |b|)$:

$$
|\lambda f(x) + (1-\lambda)f(y)| \leq |\lambda f(x)| + |(1-\lambda)f(y)|
$$

Siccome $\lambda$ è una quantità positiva, in particolare compresa tra $[0, 1]$ 

$$
|\lambda f(x)| + |(1-\lambda)f(y)| = \lambda |f(x)| + (1-\lambda)|f(y)| 
$$

Ho quindi ottenuto quello che volevo:

$$
|f(\lambda x + (1-\lambda)y)| \leq \lambda |f(x)| + (1-\lambda)|f(y)|
$$

dimostrando che $g(x)$ è convessa su $\mathbb{R}^n$
