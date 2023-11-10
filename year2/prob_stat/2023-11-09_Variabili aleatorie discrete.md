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

La varianza della distribuzione ipergeometrica è

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

Questa distribuzione ricopre il caso delle **popolazioni con reinserimento**

la distribuzione di Bernoulli è un caso particolare di questa distribuzione in cui $n = 1$


### Esempio

Si consideri la solita urna con $4$ palline bianche e $3$ nere. Sia $S_3$ la variabile che conta il numero di palline bianche ottenute in tre estrazioni con reinserimento.
Qual è la $\mathbb{P}[S_3 = 2]$, cioè che due delle tre palline estratte sia bianca?

Considerando l’estrazione di pallina bianca come successo e visto che $\mathbb{P}[\text{bianca}] = \frac{4}{7}$, si può affermare che $S_3 ∼ \text{Bin}(3, \frac{4}{7})$.
Allora:

$\mathbb{P}[S_3 = 2] = \binom{3}{2}(\frac{4}{7})^2(1-\frac{4}{7})^{3-2} = 0.4198$
