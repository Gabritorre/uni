# Variabili aleatorie discrete

Andiamo ad analizzare alcune famose distribuzioni di variabili aleatorie discrete

## Distribuzione uniforme discreta

Una distribuzione uniforme si ha quando i valori assunti da una variabile aleatoria assumono tutti la stessa probabilità.
La variabile assume un numero di valori finito $\{x_1,...,x_n\}$

Questa distribuzione si scrive come:

$$X \sim U\{x_1,...,x_n\}$$

e il grafico sarò una cosa del tipo

![enter image description here](https://i.ibb.co/crC1ndL/image.png)

Un classico esempio è il lancio di un dado non truccato in cui ogni faccia del dado ha la stessa probabilità di uscire

## Distribuzione ipergeometrica

Questo è il caso che abbiamo già visto delle popolazioni.
Una popolazione è divisa in due sottopopolazioni, una di queste sottopopolazioni ha la caratteristica che ci interessa.
Sapendo quanti hanno e non hanno la caratteristica e sapendo se il campionamento viene fatto con o senza reinserimento possiamo calcolare la probabilità degli eventi scritti come "$k$ elementi su $n$ hanno la caratteristica"

In questo caso l'estrazione di un elemento con la proprietà viene chiamato **successo**.

**Definizione**: sia $X$ una variabile aleatoria che conta in numero di successi su $n$ estrazioni senza reinserimento. 

Questa distribuzione si scrive come:

$$X \sim lg(N, K, n)$$

dove:
- $N$: numero di elementi della popolazione
- $K$: numero di elementi che hanno la caratteristica (quindi il numero massimo di successi)
- $n$: numero di estrazioni

La probabilità di un evento di estrazione di $k$ successi è dato da:

$$\mathbb{P}[X = k] = \frac{\binom{K}{k}\cdot \binom{N-K}{n-k}}{\binom{N}{n}}$$

La media (il valore atteso) della distribuzione ipergeometrica è

$$\mathbb{E}[X] = n\frac{K}{N}$$

La varianza della distribuzione ipergeometrica è

$$\text{Var}[X] = n\frac{K}{N}\cdot \frac{N-K}{N}\cdot \frac{N-n}{N-1}$$

### Esempio

Un software consiste di 12 programmi, 5 dei quali necessitano di upgrade. Se vengono scelti a caso 4 programmi per un test

1. qual è la probabilità che almeno 2 di essi siano da aggiornare?

	Sia X la variabile che conta il numero di programmi da aggiornare fra i 4 scelti.
	Abbiamo quindi $X \sim lg(N=12, K=5, n=4)$
	
	Ci viene chiesta la probabilità $\mathbb{P}[X \geq 2]$ che possiamo calcolare con l'evento complementare:

	$\mathbb{P}[X \geq 2] = 1- \mathbb{P}[X \leq 1]$
	$\mathbb{P}[X \geq 2] = 1- \mathbb{P}[X = 1] - \mathbb{P}[X = 0]$
	$= 1- \frac{\binom{5}{1}\cdot \binom{12-5}{4-1}}{\binom{12}{4}} -\frac{\binom{5}{0}\cdot \binom{12-5}{4-0}}{\binom{12}{4}}$

2. qual è il numero medio di programmi da aggiornare fra i 4 scelti?
	fra i 4 programmi scelti la media di scegliere programmi da aggiornare è
	$\mathbb{E}[X] = 4\frac{5}{12} = \frac{5}{3} \approx 1.6$
	
## Distribuzione di Bernoulli

In un esperimenti abbiamo vari risultati che possiamo classificare in due categorie: successo, con una probabilità $p$ e insuccesso con probabilità $1-p$. Questa è chiamata **prova di Bernoulli**

Sia $X$ una variabile casuale che assume il valore $X = 1$ se abbiamo un successo altrimenti $X = 0$ in caso di insuccesso.

Questa distribuzione si scrive come:

$$X \sim \text{Ber}(p)$$


La probabilità del successo o insuccesso è data da:

$$\mathbb{P}[X = x] = \begin{cases}
1-p & \text{se} x = 0 \\
p & \text{se} x = 1\\
0 & \text{altrimenti}
\end{cases}$$

$$\text{oppure in versione compatta}$$

$$\mathbb{P}[X = x] = p^x(1-p)^{1-x} \bm{1}_{\{0,1\}}(x)$$

La media (il valore atteso) della distribuzione bernoulliana è

$$\mathbb{E}[X] = p$$

La varianza della distribuzione bernoulliana è

$$\text{Var}[X] = p(1-p)$$

### Esempio

L’estrazione di un singolo individuo da una popolazione con $N$ elementi dei quali $K$ sono considerati successi è una **prova bernoulliana**.
La variabile casuale $X$ = "Numero di successi" ha una distribuzione di Bernoulli con parametro $p = \frac{K}{N}$.
Anche la variabile casuale $Y$ = "Numero di insuccessi" ha una distribuzione di Bernoulli, ma con parametro $q = 1−p = \frac{(N − K)}{N}$

Quindi per trovare le probabilità basta interpretare il problema e sostituire la $p$ nella formula sopra.

## Distribuzione binomiale

La distribuzione binomiale è una generalizzazione della distribuzione di bernoulli.

supponiamo di ripetere $n$ prove di Bernoulli indipendenti. La nostra variabile aleatoria $X$ conterà il totale di successi nelle $n$ prove.

Questa distribuzione si scrive come:

$$X \sim \text{Bin}(n, p)$$

La probabilità di avere $x$ successi è

$$\mathbb{P}[X = x] = \binom{n}{x}p^x(1-p)^{n-x}$$

ovviamente $x \in \{0,..., n\}$

La media (il valore atteso) della distribuzione binomiale è

$$\mathbb{E}[X] = np$$

La varianza della distribuzione binomiale è

$$\text{Var}[X] = np(1-p)$$

Questa distribuzione ricopre il caso delle **popolazioni con reinserimento**

la distribuzione di Bernoulli è un caso particolare di questa distribuzione in cui $n = 1$

### Esempio

Si consideri la solita urna con $4$ palline bianche e $3$ nere. Sia $S_3$ la variabile che conta il numero di palline bianche ottenute in tre estrazioni con reinserimento.
Qual è la $\mathbb{P}[S_3 = 2]$, cioè che due delle tre palline estratte sia bianca?

Considerando l’estrazione di pallina bianca come successo e visto che $\mathbb{P}[\text{bianca}] = \frac{4}{7}$, si può affermare che $S_3 ∼ \text{Bin}(3, \frac{4}{7})$.
Allora:

$\mathbb{P}[S_3 = 2] = \binom{3}{2}(\frac{4}{7})^2(1-\frac{4}{7})^{3-2} = 0.4198$


## Distribuzione di Poisson

Una variabile aleatoria quando può assumere in tutto l'insieme dei numeri naturali $\mathbb{N}$, abbiamo una distribuzione di Poisson.

La distribuzione di Poisson viene utilizzata come modello in tutti quei casi in cui la variabile aleatoria assume una quantità di valori tendenti ad infinito e in cui la probabilità di ognuno è bassissima.

Degli esempi di testi in cui si può utilizzare questa distribuzione sono:

1. "chiamate in arriva entro 1 ora"
2. "automobili in transito in una strada dalle 9am alle 11am"
3. "difetti rilevati in un pezzo d'acciaio prodotto in una ditta"

notiamo sempre che dobbiamo contare qualcosa in una unità di tempo (non sempre si tratta di tempo, come nel caso 3)

Questa distribuzione si scrive come:

$$X \sim \text{Po}(\lambda)$$

La probabilità di avere $k$ casi contati è

$$\mathbb{P}[X = k] = \frac{\lambda^k}{k!}\cdot e^{-\lambda}$$

con $k \in \mathbb{N}$
e $\lambda$ che rappresenta quanti valori si contano **in media** nell'unità di tempo

La media (il valore atteso) della distribuzione di Poisson è

$$\mathbb{E}[X] = \lambda$$

La varianza della distribuzione di Poisson è

$$\text{Var}[X] = \lambda$$


### Esempio

Al mio account di posta elettronica arrivano messaggi con una media di 10 ogni mezz’ora.
Qual è la probabilità che nella prossima mezz’ora mi arrivino non più di 3 messaggi?

$X = \text{“n. messaggi ogni mezz’ora”}∼ Po (λ = 10)$

$\mathbb{P}[X \leq 3] = \mathbb{P}[X = 0] + \mathbb{P}[X = 1] + \mathbb{P}[X = 2] + \mathbb{P}[X =3]$

$\mathbb{P}[X \leq 3] = \frac{10^0}{0!}e^{-10} + \frac{10^1}{1!}e^{-10} + \frac{10^2}{2!}e^{-10} +\frac{10^3}{3!}e^{-10} = 0.0103$

### Approssimazione della Binomiale

In alcuni casi è possibile utilizzare le formule della distribuzione binomiale come una buona approssimazione della distribuzione binomiale.

I casi in questo si può fare sono quei casi in cui $n$ è grande e la probabilità di ogni valore è molto basso inoltre il prodotto $np$ deve tendere a $\lambda$
Generalmente quando $n \geq 100$ e $p \leq 0.05$

quindi la distribuzione binomiale:

$\binom{n}{x}p^x(1-p)^{n-x}$

si può calcolare con: 

$$e^{-\lambda}\cdot \frac{\lambda^x}{x!}$$

Ad esempio:

Una fabbrica di componenti elettronici fornisce il 3% dei chip acquistati da un produttore di telefoni cellulari. Qual è la probabilità che su 100 chip acquistati ve ne siano al massimo 3 provenienti da quella fabbrica?

Dato che $n=100$ è grande e $p=0.03$ è piccolo, si può utilizzare la distribuzione di Poisson con $\lambda = 100 \cdot 0.03 = 3$

$$\mathbb{P}[X \leq 3] = \sum_{k = 0}^{3}\frac{3^k}{k!}e^{-3} = 0.6472$$

## Distribuzione geometrica

Abbiamo una variabile aleatoria $X$ che conta il numero di ripetizioni indipendenti necessarie per ottenere il primo successo di un esperimento binario.
La probabilità del successo è $p$ e si dice che $X$ ha una distribuzione geometrica

Questa distribuzione si scrive come:

$$X \sim \text{Geo}(p)$$

Si ha che

$$\mathbb{P}[X = x] = (1-p)^{x-1}p$$

La media (il valore atteso) della distribuzione geometrica è

$$\mathbb{E}[X] = \frac{1}{p}$$

La varianza della distribuzione di geometrica è

$$\text{Var}[X] = \frac{1-p}{p^2}$$

### Proprietà di mancanza della memoria

$$\mathbb{P}[X > m + n | X > m] = \mathbb{P}[X > n]$$

Inoltre sappiamo anche che la distribuzione di avere **più di** $k$ ripetizioni (escluso il valore di $k$) è dato da:

$$\mathbb{P}[X > k] = (1-p)^k$$


Vediamo un esempio

Si consideri un motore di ricerca su internet. Se il 20% dei siti visitati contengono la parola cercata

Supponiamo che X conti il numero di pagine da visitare per trovare per la prima volta la parola cercata. Allora $X \sim \text{Geo}(p)$

- qual è la probabilità di dover visitare 15 siti per trovare la parola?

	$\mathbb{P}[X = 15] = (1-0.2)^{15-1}0.2 = 0.0088$

- Dato che i primi 4 siti visitati non contenevano la parola cercata, qual è la probabilità di doverne visitare più di 10 in tutto per trovare la parola cercata?

	Utilizzando la proprietà di mancanza della memoria possiamo definire $m = 4$ e di conseguenza $n = 10 - 4 = 6$

	$\mathbb{P}[X > 10| X > 4]$
	che possiamo scrivere nella stessa forma della formula come:
	$\mathbb{P}[X > 4+6 | X > 4]$
	che quindi diventa
	$\mathbb{P}[X > 6] = (1-0.2)^6 = 0.2621$

- Qual è il numero medio di siti da visitare per trovare la parola la prima volta?

	$\mathbb{E}[X] = \frac{1}{0.2} = 5$


## Funzioni in R

### Ipergeometrica

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dhyper(x=k, m=m, n=N-m, k=n)` |
| $\mathbb{P}[X \leq k]$ | `phyper(q=k, m=m, n=N-m, k=n)` |

### Binomiale

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dbinom(x=k, size=n, prob=p)` |
| $\mathbb{P}[X \leq k]$ | `pbinom(q=k, size=n, prob=p)` |

### Poisson

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dpois(x=k, labmda=lambda)` |
| $\mathbb{P}[X \leq k]$ | `ppois(q=k, lambda=lambda)` |
| $\mathbb{P}[X \geq k]$ | `1 - ppois(q=k-1, lambda=lambda)` |

### Geometrica

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dgeom(x=x-1, prob=p)` |

