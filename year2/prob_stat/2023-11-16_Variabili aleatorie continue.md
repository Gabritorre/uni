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

### Funzione di ripartizione della gaussiana

La funzione di ripartizione non è calcolabile esplicitamente facendo l'integrale di $f(x)$, per questo tornano utili dei pacchetti matematici dei vari linguaggi, i quali fanno una approssimazione sufficientemente accurata dell'integrale.

In alternativa è anche possibile calcolare la funzione di ripartizione tramite un processo di **standardizzazione**

Data una variabile aleatoria con distribuzione normale:

$X \sim N(\mu, \sigma^2)$

La sua forma normale $Z$ è data da

$$Z = \frac{X - \mu}{\sigma}\sim N(0, 1)$$

Questo significa che alla nostra distribuzione normale $X$ sottraiamo il valore atteso $\mu$, il significato di questa operazione è che la distribuzione viene centrata sul valore $0$. Poi dividiamo il tutto per la deviazione standard $\sigma$, il significato di questa operazione è che la distribuzione diventa simmetrica rispetta al valore atteso (che è $0$)

![enter image description here](https://i.ibb.co/W577XW7/image.png)

Ad esempio se abbiamo la seguente variabile

$X \sim N(-1, 4)$

Abbiamo quindi che $\mathbb{E}[X] = -1$ e $\text{Var}[X] = 4$

Dalla varianza possiamo ricavarci la deviazione standard:
$\text{sd} = \sqrt{4} = 2$

Quindi la variabile standardizzata è $Z = \frac{X - (-1)}{2} = \frac{X + 1}{2}\sim N(0, 1)$

Dalle proprietà già viste del valore atteso e della varianza:
- $\mathbb{E}[aX +b] = a\mathbb{E}[X] +b$
- $\text{Var}[aX + b] = a^2\text{Var}[X]$

per giungere alla versione standard allora
- $a = \frac{1}{\sigma}$
- $b = -\mu$

Vediamo come usare la standardizzazione:

Se dobbiamo determinare $\mathbb{P}[x_1 < X < x_2]$
possiamo utilizzare la standardizzazione nel seguente modo

$$\mathbb{P}\left[\frac{a - \mu}{\sigma}<Z<\frac{b - \mu}{\sigma}\right]=$$

$$=\Phi\left(\frac{b - \mu}{\sigma}\right) -\Phi\left(\frac{a - \mu}{\sigma}\right)$$

dove $\Phi$ è un simbolo per indicare la funzione di ripartizione:
scrivere $\Phi(\frac{b - \mu}{\sigma})$ è come scrivere $\mathbb{P}[Z \leq \frac{b - \mu}{\sigma}]$. Ma questa notazione vale solo se per la variabile aleatoria standardizzata.


Solitamente per calcolare le funzioni di ripartizione si utilizzano delle **tavole della distribuzione standard**, cioè una tabella fatta in questo modo

![enter image description here](https://i.ibb.co/xJXj5mv/image.png)

dove nella prima colonna abbiamo il valore intero e il primo decimale di $z$ mentre nella prima riga abbiamo la seconda cifra decimale di $z$

Quindi per calcolare $\mathbb{P}[Z \leq 1.25]$ utilizzando la tabella:
1. troviamo nella prima colonna il valore $1.2$
2. nella prima riga troviamo il valore $0.05$
3. incrociando la colonna e la riga trovati e otteniamo il valore $0.8944$

Quindi $\mathbb{P}[Z \leq 1.25] = 0.8944$


Considerando il grafico della distribuzione normale standard possiamo fare diverse considerazioni

![enter image description here](https://i.ibb.co/vDsmxNr/image.png)


1. Dato che il grafico è simmetrico
	È facile notare che $\mathbb{P}[Z \leq 0] = \frac{1}{2}$
	oppure anche nel caso della non standard $\mathbb{P}[X \leq \mu] = \frac{1}{2}$

2. se $z$ è negativo

	$$\mathbb{P}[Z \leq -z] = \mathbb{P}[Z \geq z] = 1 - \mathbb{P}[Z \leq -z]$$

3. se vogliamo la probabilità tra un valore $z$ e il suo opposto

	$$\mathbb{P}[-z\leq Z\leq z] = 1 - 2\mathbb{P}[Z\geq z] = 1 - 2\mathbb{P}[Z\leq -z]$$

### Approssimazione della binomiale

nel caso in cui la distribuzione binomiale quando il valore della $n$ diventa molto grande mentre la probabilità rimane costantemente alta, è possibili approssimare la distribuzione binomiale utilizzando la distribuzione normale.

$$\text{Bin}(n, p) \approx N(np, np(1-p))$$

generalmente l'approssimazione è efficace quando
$np(1-p) \geq 10$

Facciamo un esempio

"Un certo virus danneggia un file con probabilità 0.35, indipendentemente dagli altri file. Il virus attacca una cartella con 2400 file. Qual è la probabilità che vengano danneggiati fra gli 800 e gli 850 file (inclusi)?"

Sia X la variabile che conta il numero di file danneggiati su 2400.
Allora $X \sim \text{Bin}(2400, 0.35)$

Proviamo ad approssimare:

$\mu = 2400 \cdot 0.35 = 840$
$\sigma = \sqrt{2400 \cdot 0.35 \cdot (1- 0.35)} = 23.36664$

dobbiamo calcolare $\mathbb{P}[800 \leq X \leq 850]$

dobbiamo effettuare una cosiddetta **correzione per continuità** per riuscire a migliorare la precisione dato che stiamo utilizzando una distribuzione continua per una variabile discreta

$$\mathbb{P}[799.5 < X < 850.5] =$$

$$= \Phi\left(\frac{850.5 - 840}{23.36664}\right) - \Phi\left(\frac{799.5 - 840}{23.36664}\right) = 0.631887$$
