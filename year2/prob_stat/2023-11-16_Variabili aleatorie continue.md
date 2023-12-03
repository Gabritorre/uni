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

## Distribuzione Gamma

Una distribuzione con i parametri $\alpha>0$ e $\lambda>0$ e con funzione di densità 

$$\large\begin{cases}
\frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha - 1}e^{-\lambda x} & x \in (0, \infty)\\
0 & \text{altrove}
\end{cases}$$

si chiama **distribuzione gamma**
Si scrive come

$$X \sim \text{Ga}(\alpha, \lambda)$$

dove $\alpha$ viene chiamato **parametro di forma** e $\lambda$ viene chiamato **parametro di scala**

La media (il valore atteso) della distribuzione gamma è

$$\mathbb{E}[X] = \frac{\alpha}{\lambda}$$

La varianza della distribuzione gamma è

$$\text{Var}[X] = \frac{\alpha}{\lambda^2}$$

$\Gamma(\alpha)$ viene chiamata **funzione gamma** ed è definita come segue
$$\Gamma(\alpha) = \int_{0}^{\infty}x^{\alpha - 1} e^{-x}\,dx$$


Quando $\alpha$ è un valore intero allora:

$$\Gamma(\alpha) = (\alpha - 1)!$$


## Distribuzione esponenziale

La distribuzione esponenziale è una caso particolare della distribuzione gamma in cui $\alpha = 1$.
Si scrive come:

$$X \sim Exp(\lambda)$$

ha funzione di densità:

$$\begin{cases}
\lambda e^{-\lambda x} & x \in (0, \infty)\\
0 & \text{altrove}
\end{cases}$$

e la **funzione di ripartizione** si può calcolare nel seguente modo in base a $x$

$$\mathbb{P}[X \leq x]\begin{cases}
0 & x < 0\\
1-e^{-\lambda x} & x\geq 0
\end{cases}$$

La media (il valore atteso) della distribuzione esponenziale è

$$\mathbb{E}[X] = \frac{1}{\lambda}$$

La varianza della distribuzione esponenziale è

$$\text{Var}[X] = \frac{1}{\lambda^2}$$

Questa distribuzione si usa per modellare i tempi di attesa, ad esempio:
1. tempo di attesa tra un evento ed il successivo
2. la vita di un componente elettronico

Come la distribuzione geometrica anche questa distribuzione ha la proprietà di **mancanza della memoria**

$$\mathbb{P}[X>t\, |\, X > t + s] = \mathbb{P}[X > s]$$

Vediamo un esempio:

"Il tecnico di un laboratorio dell’università in un’ora installa un certo software in media su 30 pc. Assumendo che il tempo di installazione su ogni pc segua una distribuzione esponenziale, vogliamo calcolare la probabilità che il tecnico impieghi più di 5 minuti per installare il software nel prossimo pc."

definiamo la variabile come
$X =$ "tempo di attesa tra l'inizio di una installazione e l'inizio della successiva"

dal testo sappiamo che $\mathbb{E}[X] =\frac{1}{30}$
da cui ricaviamo $\lambda = 30$

il testo ci chiede di trovare $\mathbb{P}[X > \frac{5}{60}] = \mathbb{P}[X > \frac{1}{12}]$

$\mathbb{P}[X > \frac{1}{12}] =1-(1- e^{-\lambda x}) =e^{-30 \frac{1}{12}} =e^{- \frac{30}{12}}$

## Processo di Poisson

Ricordiamo che la distribuzione di Poisson che abbiamo già visto viene utilizzata per i conteggi degli eventi che accadono in una unità di tempo fissa.

Il **processo di Poisson** cerca di lavorare su una unità di tempo più piccola in modo da coprire degli intervalli di tempo più flessibili.
Si dice che il processo di Poisson è una successioni di variabili aleatorie dipendenti dal parametro $t$ (che rappresenta l'intervallo di tempo) $\{X_t\}_{t\geq 0}$

$$X_t \sim \mathcal{P}(\lambda \cdot t)$$

Vediamo un esempio:

"i messaggi in arrivo nella mia casella di posta elettronica sono in media 12 ogni 10 minuti. "

Definiamo $X$ come la variabile che conta i messaggi in arrivo in un intervallo di 10 minuti:

$$X \sim \text{Po}(12)$$

Utilizzando poisson in questo modo però potremmo solo lavorare con intervalli di 10 minuti. Se invece volessimo sapere quanti ne arrivano ogni 15 minuti? ogni 13?
Il processo di Poisson ci aiuta in questo:
Quello che bisogna fare è scalare i dati secondo una unità di tempo più comoda: cerchiamo di ricavare **quanti messaggi arrivano mediamente in 1 minuto**

risolviamo la semplice proporzione $12:10 = x : 1 \to x = \frac{12}{10} \text{ messaggi al minuto}$

- Definiamo $\lambda = "\text{numero di messaggi al minuto}" = \frac{12}{10}$
- Definiamo $t = "\text{intevallo di tempo richiesto dall'esercizio}"$
- Definiamo $X_t = "\text{numero di messaggi nell'intervallo di tempo}"$

quindi:
- se $t = 10 \implies X_{10} \sim \mathcal{P}(1.2\cdot 10)$
- se $t = 15 \implies X_{15} \sim \mathcal{P}(1.2\cdot 15)$
- se $t = 13 \implies X_{13} \sim \mathcal{P}(1.2\cdot 13)$

Se vogliamo sapere la probabilità di ricevere più di 3 messaggi in 10 minuti:
allora sarebbe come fare $X_{10}\sim \text{Po}(12)$ che sappiamo già calcolare

$\mathbb{P}[X_{10} > 3] = 1 - \mathbb{P}[X_{10} \leq 3] = 1 - \left(\frac{12^0}{0!}e^{-12} + \frac{12^1}{1!}e^{-12} + \frac{12^2}{2!}e^{-12} +\frac{12^3}{3!}e^{-12}\right) = 0.9977$

Oppure se vogliamo sapere la probabilità di ricevere più di 3 messaggi in 15 minuti:
allora sarebbe come fare $X_{15}\sim \text{Po}(18)$ che sappiamo già calcolare

$\mathbb{P}[X_{15} > 3] = 1 - \mathbb{P}[X_{15} \leq 3] = 1 - \left(\frac{18^0}{0!}e^{-18} + \frac{18^1}{1!}e^{-18} + \frac{18^2}{2!}e^{-18} +\frac{18^3}{3!}e^{-18}\right) = 0.99998$

### Relazione con la distribuzione esponenziale

Il processo di Poisson è fortemente relazionato con la distribuzione esponenziale, infatti possiamo utilizzare le due distribuzione per calcolare lo stesso evento:

Sempre utilizzando il precedente esempio calcoliamo la probabilità che "in 15 minuti non arrivi nessun messaggio"

Per calcolare questa probabilità possiamo utilizzare poisson:

$X_{15} = "\text{numero di messaggi in 15 minuti}"$
$$X_{15} \sim \text{Po}(18)$$

$\mathbb{P}[X_{15} = 0] = \frac{18^0}{0!}e^{-18} = e^{-18}$

oppure possiamo utilizzare la distribuzione esponenziale:

$T = "\text{tempo trascorso tra due messaggi}"$

$$T \sim \text{Exp}(1.2)$$

$\mathbb{P}[T > 15] = e^{1.2\cdot 15} = e^{-18}$


## Funzioni in R

### Normale

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X \leq x]$ | `pnorm(q=x, mean=μ, sd=σ)` |
| $\mathbb{P}[a\leq X \leq b]$ | `pnorm(q=b, mean=μ, sd=σ) - pnorm(q=a, mean=μ, sd=σ)` |
