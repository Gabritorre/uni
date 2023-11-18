# Variabili aleatorie continue

Andiamo ad analizzare alcune famose distribuzioni di variabili aleatorie continue

## Distribuzione uniforme continua

Abbiamo una variabile aleatoria $X$ che può assumere qualsiasi valore nell'intervallo $[a,b]$
Se la densità  di probabilità  è costante nell'intervallo, allora si dice che abbiamo una **distribuzione uniforme**.
funzione di densità:

$$f(x) = \begin{cases}
\frac{1}{b-a} & x \in [a,b]\\
0 & \text{altrove}
\end{cases}$$

Questa distribuzione si scrive come:

$$X \sim U(a, b)$$

a partire dalla funzione di densità possiamo trovare la funzione di ripartizione:

$$F(x) = \int_a^x \frac{1}{b-a}dy = \frac{x-a}{b-a}$$

![enter image description here](https://i.ibb.co/gSd1LYM/image.png)

(A sinistra abbiamo la funzione di densità mentre a destra abbiamo la funzione di ripartizione)


La media (il valore atteso) della distribuzione uniforme è

$$\mathbb{E}[X] = \frac{a + b}{2}$$

La varianza della distribuzione uniforme è

$$\text{Var}[X] = \frac{(b-a)^2}{12}$$


## Distribuzione normale o gaussiana

Una variabile aleatoria $X$ ha distribuzione normale (o anche detta gaussiana) se la funzione di densità ha la seguente forma:

$$ \large f(x) =\frac{1}{\sigma\sqrt{2\pi}}\cdot e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \hspace{10mm} x \in \mathbb{R}, \mu \in \mathbb{R}, \sigma > 0$$

Questa distribuzione si scrive come:

$$X \sim N(\mu, \sigma^2)$$

Le distribuzioni hanno le seguenti forme

![enter image description here](https://i.ibb.co/ncy54wK/image.png)

La media (il valore atteso) della distribuzione normale è

$$\mathbb{E}[X] = \mu$$

La varianza della distribuzione normale è

$$\text{Var}[X] = \sigma^2$$


