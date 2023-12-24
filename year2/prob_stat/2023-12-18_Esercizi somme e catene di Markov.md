# Esercizi su catene di Markov

## Domanda 1

Siano $X$ e $Y$ due variabili indipendenti di Poisson con parametri $\lambda_X$ e $\lambda _Y$ . Sia $Z = X + Y$. Calcolare la funzione di probabilità e il valore atteso di $X$ dato $Z = z$.
Cosa possiamo dire a riguardo?

$X \sim \text{Po}(\lambda_X)$
$Y \sim \text{Po}(\lambda_Y)$

Per prima cosa troviamo la funzione di probabilità di $Z$.
Sappiamo che
$$\text{Po}(\lambda_1) +\text{Po}(\lambda_2)\text{ indipendenti } \longrightarrow \text{Po}(\lambda_1 + \lambda_2)$$
Nel nostro caso $Z$ è una variabile aleatoria con distribuzione di Poisson con parametro $\lambda_X + \lambda_Y$

$Z \sim \text{Po}(\lambda_X + \lambda_Y)$

Il testo ci chiede di trovare la funzione di probabilità composta di $P[X|Z = z]$:

 $P[X | Z=z] = \frac{P[X = x | Z = z]}{P[Z = z]} = \frac{P[X = x | X+Y = z]}{P[Z = z]} = \frac{P[X = x | Y = z-x]}{P[Z = z]}$
 
Dato che $X$ e $Y$ sono indipendenti: $P[X = x | Y = z-x]= P[X=x] \cdot P[Y=z-x]$

$$P[X | Z=z] = \frac{P[X = x] \cdot P[Y = z-x]}{P[Z = z]}$$

Calcoliamo le varie probabilità (che sono tutte delle Poisson):

1. $$P[X = x] =\frac{\lambda_X^x}{x!} \cdot e^{-\lambda_X}$$
2. $$P[Y = z-x] =\frac{\lambda_Y^{(z-x)}}{(z-x)!} \cdot e^{-\lambda_Y}$$
3. $$P[Z = z] =\frac{(\lambda_X + \lambda_Y)^{z}}{z!} \cdot e^{-(\lambda_X + \lambda_Y)}$$


$$P[X | Z=z] = \left[\frac{\lambda_X^x}{x!} \cdot e^{-\lambda_X}\right] \cdot \left[\frac{\lambda_Y^{(z-x)}}{(z-x)!} \cdot e^{-\lambda_Y}\right] \cdot \left[\frac{z!}{(\lambda_X + \lambda_Y)^z \cdot e^{-(\lambda_X + \lambda_Y)}}\right]$$

$$P[X | Z=z] = \frac{\lambda_X^x}{x!} \cdot \cancel{e^{-\lambda_X}} \cdot \frac{\lambda_Y^{(z-x)}}{(z-x)!} \cdot \cancel{e^{-\lambda_Y}} \cdot \frac{z!}{(\lambda_X + \lambda_Y)^z \cdot \cancel{e^{-(\lambda_X + \lambda_Y)}}}$$

$$P[X | Z=z] = \frac{\lambda_X^x}{x!} \cdot \frac{\lambda_Y^{(z-x)}}{(z-x)!} \cdot \frac{z!}{(\lambda_X + \lambda_Y)^z}$$

$$P[X | Z=z] = \frac{z!}{x!(z-x)!} \cdot \frac{\lambda_X^x \cdot \lambda_Y^{(z-x)}}{(\lambda_X + \lambda_Y)^z}$$

possiamo fare le seguenti trasformazioni:

- $\large \frac{z!}{x!(z-x)!} = \binom{z}{x}$
- $(\lambda_X + \lambda_Y)^z =(\lambda_X + \lambda_Y)^x \cdot (\lambda_X + \lambda_Y)^{z-x}$

$$P[X | Z=z] = \binom{z}{x} \cdot \frac{\lambda_X^x \cdot \lambda_Y^{(z-x)}}{(\lambda_X + \lambda_Y)^x \cdot (\lambda_X + \lambda_Y)^{(z-x)}}$$

$$P[X | Z=z] = \binom{z}{x} \cdot \frac{\lambda_X^x }{(\lambda_X + \lambda_Y)^x} \cdot\frac{\lambda_Y^{(z-x)}}{(\lambda_X + \lambda_Y)^{(z-x)}}$$

$$P[X | Z=z] = \binom{z}{x} \cdot \left(\frac{\lambda_X}{\lambda_X + \lambda_Y}\right)^{x} \cdot \left(\frac{\lambda_Y}{\lambda_X + \lambda_Y}\right)^{(z-x)}$$

Questa formula è esattamente quella della Binomiale.

Se definiamo $K = P[X | Z=z]$
allora $K \sim \text{Bin}(z, \frac{\lambda_X}{\lambda_X + \lambda_Y})$

$E[K] = z\cdot \frac{\lambda_X}{\lambda_X + \lambda_Y}$


## Domanda 2

Un programma è diviso in 3 blocchi che vengono compilati in sequenza. Il tempo di compilazione di un blocco è una variabile esponenziale di media 5 minuti, ogni blocco viene compilato in modo indipendente dagli altri blocchi. Il programma è completato quando tutti i blocchi vengono compilati.
- (a) Calcolare il tempo medio necessario per compilare il programma.

	Definiamo una variabile $Y$: "tempo necessario per la compilazione del programma"

	dato che sono eseguiti indipendentemente in sequenza i tre blocchi, il tempo totale è dato dalla somma dei tre blocchi. Sappiamo che La somma di variabili esponenziali indipendenti formano una variabile con distribuzione gamma:
$$\text{Exp}(\lambda) +\text{Exp}(\lambda) + \text{Exp}(\lambda) \text{ indipendenti }\longrightarrow \text{Ga}(3, \lambda)$$

	Se $X$ descrive il tempo di un blocco, $E[X] = 5 \rightarrow \frac{1}{\lambda} = 5 \rightarrow \lambda = \frac{1}{5}$

	Quindi:
	$Y \sim \text{Ga}(3, \frac{1}{5})$

	$E[Y] = \frac{3}{\frac{1}{5}} = 15$

- (b) Calcolare la probabilità che il tempo totale di compilazione sia superiore a 8 minuti.

	$P[Y > 8] = 1-P[Y \leq 8] =$ `1-pgamma(8, 3, 1/5)` $= 0.78335$

## Domanda 3

La durata di un certo componente elettronico è una variabile casuale con vita media $5000$ ore e una deviazione standard di $100$ ore. Qual è la probabilità che la durata media di $400$ componenti sia inferiore a $5012$ ore?

Definiamo $X$ la variabile che descrive la durata di un componente elettronico.

Dal testo sappiamo:
$E[X] = 5000$
$\text{Var}[X] = 100^2$

Dal testo vediamo che dobbiamo considerare 400 componenti, quindi 400 variabili $X_1 ... X_{400}$ indipendenti e con stessa distribuzione.

Il testo ci chiede che la media (campionaria) di $400$ componenti sia minore di $5012$

Per il **teorema del limite centrale** avendo un sufficiente numero di variabili (come in questo caso) possiamo approssimare la media campionaria ad una distribuzione normale

In particolare la media campionaria è una variabile aleatoria $\bar{X}$ con una distribuzione normale con i seguenti parametri: 
- $E[\bar{X}] = \mu = 5000$
- $\text{Var}[\overline{X}] = \frac{\sigma^2}{n} = \frac{100^2}{400}$

$\bar{X} \sim N(5000, \frac{100^2}{400})$

$P[\bar{X} < 5012] =$ `pnorm(q=5012, mean=5000, sd=sqrt(10000/400))` $=0.9918$
Qui l'esercizio sarebbe finito, ma vediamo come andrebbe fatto senza R.

Se invece non volessimo utilizzare R, ma utilizzare la tavola della normale standard:

tramite il processo di **standardizzazione** posso ricondurmi alla distribuzione normale standard.

La standardizzazione di una distribuzione normale $X \sim N(\mu, \sigma^2)$ si troverebbe facendo $Z = \frac{X - \mu}{\sqrt{\sigma^2}}$
In questo caso avendo $\bar{X} \sim N(\mu, \frac{\sigma^2}{n})$ si trova facendo $\large Z =\frac{\bar{X} - \mu}{\sqrt{\frac{\sigma^2}{n}}}$

Quindi $Z$ è la distribuzione normale standard della media campionaria
$Z \sim N(0, 1)$

$P\left[Z < \frac{5012 - 5000}{\sqrt{\frac{100^2}{400}}}\right] = P\left[Z < \frac{12}{5}\right] =P\left[Z < 2.4\right] =$

Usando la tabella della normale standard:
![enter image description here](https://i.ibb.co/7RSYhXS/image.png)

$P\left[Z < 2.4\right] = 0.9918$

## Domanda 4

L’installazione di un software richiede il download di $82$ file. In media, ci vogliono $15$ secondi per scaricare un file, con una varianza di $16 \text{ sec}^2$. Qual è la probabilità che il software venga installato in meno di $20$ minuti?

Definiamo $X$ come la variabile che descrive il tempo per scaricare un file.
$E[X] = 15$
$\text{Var}[X] = 16$

$X \sim N(15, 16)$

Il download dell'intero software è dato dal download indipendente di 82 file, quindi consideriamo 82 variabili aleatorie.
Sappiamo che la somma di variabili con distribuzione normale restituiscono una distribuzione normale:

$$\text{N}(\mu_1, \sigma_1^2) +\text{N}(\mu_2, \sigma_2^2) \text{ indipendenti }\longrightarrow \text{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$$

Nel nostro caso abbiamo $Y$ che descrive il tempo di download dell'intero software
$Y \sim N(15 \cdot 82, 16 \cdot 82)$
$Y \sim N(1230, 1312)$

Lavoriamo in secondi quindi 20 minuti sono $20\cdot 60 = 1200$ secondi

$P[Y < 1200] =$ `pnorm(1200, 1230, sqrt(1312))` $= 0.2037$

Senza utilizzare R dovremmo standardizzare:

$Z = \frac{Y - 1230}{\sqrt{1312}} \sim N(0, 1)$

$P\left[Z < \frac{1200 - 1230}{\sqrt{1312}}\right] =P[Z < -0.83] = \text{ dato che è un valore negativo, sfrutto la simmetria: } 1- P[Z < 0.83]$

![enter image description here](https://i.ibb.co/tPBN8hh/image.png)

$1- P[Z < 0.83] = 1- 0.7967 = 0.2033$
(non super preciso a causa dell'approssimazione sul 0.83)

## Domanda 5

Tra tutti i chip prodotti da una fabbrica il $6\%$ risulta difettoso. È stato selezionato un campione di $400$ chip per un’ispezione.
- (a) Qual è la probabilità che questo campione contenga tra i $20$ e i $25$ chip difettosi (inclusi $20$ e $25$)?

	Sia $X$ la variabile che conta quanti chip sono difettosi su un campione di $400$ chip, e con la probabilità che un chip sia difettoso di $0.06$
	$X \sim \text{Bin}(400, 0.06)$

	Dato che $n$ è molto grande e la probabilità è molto bassa possiamo utilizzare la distribuzione normale per approssimar e la binomiale:

	$X \sim N(400\cdot 0.06, 400\cdot0.06\cdot(1-0.06))$
	$X \sim N(24, 22.56)$

	$P[19.5\leq X \leq 25.5] =P[X \leq 25.5] - P[X \leq 19.5] =$ `pnorm(25.5, 24, sqrt(22.56)) - pnorm(19.5, 24, sqrt(22.56))` $= 0.4522$

	Senza R:

	$Z = \frac{X - 24}{\sqrt{22.56}} \sim N(0,1)$

	$P[Z \leq \frac{25.5 - 24}{\sqrt{22.56}}] - P[Z \leq \frac{19.5 - 24}{\sqrt{22.56}}] = P[Z \leq 0.32] - P[Z \leq -0.95] = P[Z \leq 0.32] - (1 - P[Z \leq 0.95]) =$
	
	Dalla tabella della normale standard ricavo i valori

	$= 0.6255 - (1 - 0.8289) = 0.4544$
	(poco preciso a causa della doppia approssimazione a 0.32 e 0.95)

- (b) Supponiamo che ciascuno dei $40$ ispettori raccolga un campione di $400$ chip. Qual è la probabilità che almeno $8$ degli ispettori trovino tra i $20$ e i $25$ chip difettosi nel loro campione?

	Definiamo la variabile $Y$ che conta il numero di ispettori che trovano tra i $20$ e i $25$ chip difettosi, sapendo che la probabilità che un ispettore trovi tali chip è $0.4522$

	$Y \sim \text{Bin}(40, 0.4522)$

	$P[Y \geq 8] = 1-P[Y \leq 7] =$ `1-pbinom(7, 40, 0.4522)` $= 0.9998$


## Domanda 6

La durata delle telefonate urbane segue una distribuzione normale di media $\mu = 10$ minuti e scarto quadratico medio $\sigma = 3$ minuti. Selezionato un campione casuale semplice $X_1, . . . , X_{20}$ di $20$ telefonate, trovare la distribuzione della media campionaria $\bar{X}_{20}$ e la probabilità che la durata media delle telefonate sia compresa fra $9.5$ e $10.3$ minuti.

$X \sim N(10, 3^2)$

La media campionaria ha una distribuzione normale:
$\bar{X}_n \sim N(\mu, \frac{\sigma^2}{n}) \rightarrow \bar{X}_{20} \sim N(10, \frac{3^2}{20}) \rightarrow \bar{X}_{20} \sim N(10, 0.45)$

$P[9.5\leq \bar{X}_{20} \leq 10.3] = P[\bar{X}_{20} \leq 10.3] - P[\bar{X}_{20} \leq 0.5] =$ `pnorm(10.3, 10, sqrt(0.45)) - pnorm(9.5, 10, sqrt(0.45))` $= 0.4446$

Senza R:

$Z = \frac{\bar{X}_{20} - 10}{\sqrt{0.45}} \sim N(0, 1)$

$P[Z \leq \frac{10.3 - 10}{\sqrt{0.45}}] - P[Z \leq \frac{9.5 - 10}{\sqrt{0.45}}] =P[Z \leq 0.45] - P[Z \leq -0.75] =P[Z \leq 0.45] - (1-P[Z \leq 0.75])$

Dalla tabella della normale standard ricavo i valori

$0.6736 -(1- 0.7734) =0.447$


## Domanda 7

Il peso di certe confezioni ha distribuzione normale con scarto quadratico medio pari a $2.5$ chili. Quanto grande deve essere un campione se si vuole garantire che con probabilità almeno di $0.95$, la media campionaria non differisca dalla media $\mu$ della popolazione per più di $0.5$ chili?

Sia $X$ la variabile che descrive il peso di una convezione.

$X \sim N(\mu, 2.5^2)$

L'esercizio ci chiede di trovare il valore $n$ della media campionaria:
$\bar{X}_n \sim N(\mu, \frac{2.5^2}{n})$ 

tale per cui vale:

$P[\mu - 0.5\leq \bar{X}_n \leq \mu + 0.5] \geq 0.95$

Standardizzando la media campionaria abbiamo:

$Z = \frac{\bar{X}_n - \mu}{\sqrt{\frac{2.5^2}{n}}}$

$P\left[\frac{\mu - 0.5 - \mu}{\sqrt{\frac{2.5^2}{n}}}\leq Z \leq \frac{\mu + 0.5 - \mu}{\sqrt{\frac{2.5^2}{n}}}\right] \geq 0.95$

$P\left[\frac{-0.5}{\sqrt{\frac{2.5^2}{n}}}\leq Z \leq \frac{0.5}{\sqrt{\frac{2.5^2}{n}}}\right] \geq 0.95$

$P\left[Z \leq \frac{0.5}{\sqrt{\frac{2.5^2}{n}}}\right] - P\left[Z \leq \frac{-0.5}{\sqrt{\frac{2.5^2}{n}}}\right] \geq 0.95$

possiamo scrivere $\frac{0.5}{\sqrt{\frac{2.5^2}{n}}}$ come $\frac {1}{2}\cdot \frac{\sqrt{n}}{2.5} = \frac{\sqrt{n}}{5}$

$P\left[Z \leq  \frac{\sqrt{n}}{5}\right] - P\left[Z \leq  -\frac{\sqrt{n}}{5}\right] \geq 0.95$

$P\left[Z \leq  \frac{\sqrt{n}}{5}\right] - \left(1- P\left[Z \leq \frac{\sqrt{n}}{5}\right]\right) \geq 0.95$

$2P\left[Z \leq  \frac{\sqrt{n}}{5}\right] - 1 \geq 0.95$
$P\left[Z \leq  \frac{\sqrt{n}}{5}\right] \geq \frac{0.95 + 1}{2}$
$P\left[Z \leq  \frac{\sqrt{n}}{5}\right] \geq 0.975$

Posso ora trovare il valore di $\frac{\sqrt{n}}{5}$ tramite `qnorm(0.975)` oppure cercando $0.975$ nella tabella della normale standard

$\frac{\sqrt{n}}{5} \geq 1.96$

$\sqrt{n} \geq 1.96\cdot 5$

$n \geq 9.8^2$

$n \geq 96.04$

Dato che stiamo lavorando con valori discreti consideriamo il primo valore intero

$n \geq 97$ Quindi devo almeno avere 97 confezioni

## Domanda 8

Si consideri la media campionaria per campioni provenienti da una popolazione di media $175$ e varianza $42$. Applicando la disuguaglianza di Chebychev, si determini:
- (a) il limite inferiore della probabilità che la media campionaria sia compresa tra $170$ e $180$ assumendo una numerosità campionaria pari a $50$

	Definiamo $X$ la variabile che descrive un singolo elemento del campione.
	$X \sim N(\mu, \sigma^2)$
	$X \sim N(175, 42)$

	Definiamo la media campionaria su un campione di 50 elementi
	$\bar{X}_{50} \sim N(\mu, \frac{\sigma^2}{n})$
	$\bar{X}_{50} \sim N(175, \frac{42}{50})$

	Usando la formula di Chebychev per ottenere il limite inferiore:
	$$\mathbb{P}[|X - \mathbb{E}[X]| > \epsilon] \geq 1-\frac{\text{Var}[X]}{\epsilon^2}$$

	Dato che i limiti del range si discostano di $5$ dalla media, metto $\epsilon = 5$

	$$\mathbb{P}[|\bar{X}_{50} - 175| > 5] \geq 1-\frac{\frac{42}{50}}{5^2}$$
	
	$$\mathbb{P}[|\bar{X}_{50} - 175| > 5] \geq 1-\frac{42}{50\cdot5^2}$$

	$$\mathbb{P}[|\bar{X}_{50} - 175| > 5] \geq 0.9664$$


- (b) la numerosità campionaria necessaria affinché $P[174 < \bar{X}_n < 176] \geq 0.9$

	$P[174 < \bar{X}_n < 176] \geq 0.9$
	$\mathbb{P}[|\bar{X}_{n} - 175| > 1] \geq 0.9$
	
	$1 - \frac{42}{n\cdot1} \geq 0.9$
	$- \frac{42}{n\cdot1} \geq 0.9-1$
	$\frac{42}{n} \leq -0.9+1$
	$\frac{42}{n} \leq 0.1$
	$\frac{42}{n} \leq \frac{1}{10}$
	$\frac{1}{n} \leq \frac{1}{420}$
	$n \geq 420$

## Domanda 9

Si consideri la catena di Markov a valori nello spazio degli stati $S = {1, 2, 3, 4}$, associata alla matrice di transizione

$$P=\begin{pmatrix}
0.25 & 0 & 0.75 & 0\\
0.25 & 0.5 & 0.25 & 0\\
0.5 & 0 & 0.5 & 0\\
\frac{1}{3} & 0 & \frac{1}{3} & \frac{1}{3}
\end{pmatrix}$$

- (a) Qual è la probabilità partendo da $2$ di essere in $2$ dopo $2$ passi?

	moltiplico la seconda riga con la seconda colonna
	$p_{22}^{(2)} = \begin{bmatrix}0.25 & 0.5 & 0.25 & 0\end{bmatrix} \cdot \begin{bmatrix}0\\0.5\\0\\0\end{bmatrix} =0.25\cdot 0 + 0.5\cdot 0.5 + 0.25 \cdot 0 + 0 \cdot 0 = 0.25 = \frac{1}{4}$

- (b) E partendo da $3$?
	
	moltiplico la terza riga con la seconda colonna
	$p_{32}^{(2)} = \begin{bmatrix}0.5 & 0 & 0.5 & 0\end{bmatrix} \cdot \begin{bmatrix}0\\0.5\\0\\0\end{bmatrix} =0.5\cdot 0 + 0\cdot 0.5 + 0.5 \cdot 0 + 0 \cdot 0 = 0.25 = 0$

- \(c\) Qual è la probabilità di essere in $2$ partendo da $2$ dopo $12$ passi?

	Dalla matrice notiamo che l'unico modo per raggiungere lo stato 2 è tramite il 2, infatti nel punto (a) gli unici valori significativi erano $0.5\cdot 0.5$. Per trovare la probabilità dopo 12 passi dovremmo moltiplicare 0.5 per se stesso 12 volte

	$p_{2,2}^{(12)} = 0.5^{12}$
	
## Domanda 10

Si determinino tutte le distribuzioni invarianti della catena di Markov a valori nello spazio degli stati $S = {1, 2, 3, 4, 5}$, associata alla matrice di transizione

$$P=\begin{pmatrix}
0 & 0.5 & 0.5 & 0 & 0\\
0 & 0.25 & 0.25 & 0.5 & 0\\
0 & 0.5 & 0.5 & 0 & 0\\
0 & 0 & 0 & 0.25 & 0.75\\
0 & 0 & 0 & 0.5 & 0.5\\
\end{pmatrix}$$

Dobbiamo calcolare $\pi \cdot P = \pi$ e porre che la somma degli elementi di $\pi$ sommi 1

$$\begin{bmatrix}\pi_1&\pi_2&\pi_3&\pi_4&\pi_5\end{bmatrix} \cdot \begin{bmatrix}
0 & 0.5 & 0.5 & 0 & 0\\
0 & 0.25 & 0.25 & 0.5 & 0\\
0 & 0.5 & 0.5 & 0 & 0\\
0 & 0 & 0 & 0.25 & 0.75\\
0 & 0 & 0 & 0.5 & 0.5\\
\end{bmatrix} = \begin{bmatrix}\pi_1&\pi_2&\pi_3&\pi_4&\pi_5\end{bmatrix}$$

che trascriviamo nel seguente sistema

$\begin{cases}
(\pi_1 \cdot 0) +(\pi_2 \cdot 0) +(\pi_3 \cdot 0)+ (\pi_4 \cdot 0) + (\pi_5 \cdot 0 )= \pi_1 \\
(\pi_1 \cdot 0.5) +(\pi_2 \cdot 0.25) +(\pi_3 \cdot 0.5)+ (\pi_4 \cdot 0) + (\pi_5 \cdot 0 )= \pi_2 \\
(\pi_1 \cdot 0.5) +(\pi_2 \cdot 0.25) +(\pi_3 \cdot 0.5)+ (\pi_4 \cdot 0) + (\pi_5 \cdot 0 )= \pi_3 \\
(\pi_1 \cdot 0) +(\pi_2 \cdot 0.5) +(\pi_3 \cdot 0)+ (\pi_4 \cdot 0.25) + (\pi_5 \cdot 0.5 )= \pi_4 \\
(\pi_1 \cdot 0) +(\pi_2 \cdot 0) +(\pi_3 \cdot 0)+ (\pi_4 \cdot 0.75) + (\pi_5 \cdot 0.5 )= \pi_5 \\
\end{cases}$

bisogna sostituire una riga per porre la condizione che la somma valga 1, scelgo di sostituire l'ultima riga

$\begin{cases}
0= \pi_1 \\
(\pi_1 \cdot 0.5) +(\pi_2 \cdot 0.25) +(\pi_3 \cdot 0.5)= \pi_2 \\
(\pi_1 \cdot 0.5) +(\pi_2 \cdot 0.25) +(\pi_3 \cdot 0.5)= \pi_3 \\
(\pi_2 \cdot 0.5) + (\pi_4 \cdot 0.25) + (\pi_5 \cdot 0.5 )= \pi_4 \\
\pi_1 + \pi_2 + \pi_3 + \pi_4 + \pi_5= 1 \\
\end{cases}$

$\begin{cases}
0= \pi_1 \\
\pi_3= \frac{\pi_2- 0.25\pi_2}{0.5} \\
(\pi_2 \cdot 0.25) +(\pi_3 \cdot 0.5)= \pi_3 \\
(\pi_2 \cdot 0.5) + (\pi_4 \cdot 0.25) + (\pi_5 \cdot 0.5 )= \pi_4 \\
\pi_1 + \pi_2 + \pi_3 + \pi_4 + \pi_5= 1 \\
\end{cases}$

$\begin{cases}
0= \pi_1 \\
\pi_3= \frac{0.75\pi_2}{0.5} \\
(\pi_2 \cdot 0.25) +(\frac{0.75\pi_2}{0.5} \cdot 0.5)= \frac{0.75\pi_2}{0.5} \\
(\pi_2 \cdot 0.5) + (\pi_4 \cdot 0.25) + (\pi_5 \cdot 0.5 )= \pi_4 \\
\pi_1 + \pi_2 + \pi_3 + \pi_4 + \pi_5= 1 \\
\end{cases}$

$\begin{cases}
\pi_1= 0 \\
\pi_3= 0 \\
\pi_2= 0 \\
(\pi_4 \cdot 0.25) + (\pi_5 \cdot 0.5 )= \pi_4 \\
\pi_4 + \pi_5= 1 \\
\end{cases}$

$\begin{cases}
\pi_1= 0 \\
\pi_3= 0 \\
\pi_2= 0 \\
 0.25(1-\pi_5) + (0.5\pi_5 )= 1-\pi_5 \\
\pi_4 = 1 -\pi_5\\
\end{cases}$

$\begin{cases}
\pi_1= 0 \\
\pi_3= 0 \\
\pi_2= 0 \\
 -0.25\pi_5 + 0.5\pi_5 +\pi_5= 1-0.25\\
\pi_4 = 1 -\pi_5\\
\end{cases}$

$\begin{cases}
\pi_1= 0 \\
\pi_3= 0 \\
\pi_2= 0 \\
\pi_5= 0.6\\
\pi_4 = 0.4\\
\end{cases}$




## Domanda 11

Si consideri la catena di Markov sui vertici $A, B$ e $C$ (in senso antiorario) di un triangolo equilatero definita dalle regole seguenti: ad ogni istante essa si può spostare da un vertice a quello adiacente in senso antiorario con probabilità $p$ e in senso orario con probabilità $1 − p$, dove $0 < p < 1$.
- (a) Si mostri che la catena è regolare e se ne determini la distribuzione stazionaria.
	
	Per determinare se è regolare disegniamo lo schema degli stati:
			![enter image description here](https://i.ibb.co/cLFMgpv/image.png)
	dato che da ogni stato esiste un percorso per raggiungere tutti gli altri stati allora la catena è regolare.

	Rappresentiamo anche la matrice:

	$$P =\begin{bmatrix}
0 & p & 1-p \\
1-p & 0 & p \\
p & 1-p & 0
\end{bmatrix}$$

	Determiniamo la distribuzione stazionaria tale che :
	- $\pi \cdot P = \pi$
	- somma degli elementi di $\pi$ somma 1

	$\begin{cases}
0\pi_1 + p\pi_1 + (1-p)\pi_3 = \pi_1 \\
(1-p)\pi_1+ 0\pi_2 + p\pi_3 = \pi_2 \\
\pi_1 + \pi_2 + \pi_3 = 1
\end{cases}$

	$\begin{cases}
p\pi_1 + (1-p)\pi_3 = \pi_1 \\
(1-p)\pi_1+ p\pi_3 = \pi_2 \\
\pi_1 + \pi_2 + \pi_3 = 1
\end{cases}$
	...
	$\begin{cases}
\pi_1 = \pi_3 \\
\pi_1 = \pi_2 \\
\pi_1 + \pi_2 + \pi_3 = 1
\end{cases}$

	$\pi = [\frac{1}{3}, \frac{1}{3}, \frac{1}{3}]$

- (b) Si calcoli le probabilità $P[X_n = A, X_{n+1} = B]$ e $P[X_n = B, X_{n+1} = A]$, per $n$ grande.

	Nel punto precedente dell'esercizio abbiamo ottenuto che per $n$ che tende ad infinito le probabilità di transizione si stabilizzano tutte ad $\frac{1}{3}$

	$P[X_n = A, X_{n+1} = B]$ rappresenta la probabilità (dopo tanti passi effettuati) di partire da $A$ e andare in $B$:
	$P[X_{n+1} = B | X_n = A]\cdot P[X_n = A] = p_{12} \cdot \pi_1 = p\cdot \frac{1}{3}$
	
	$P[X_n = B, X_{n+1} = A]$ rappresenta la probabilità (dopo tanti passi effettuati) di partire da $B$ e andare in $A$:
	$P[X_{n+1} = A | X_n = B]\cdot P[X_n = B] = p_{21} \cdot \pi_2 = (1-p)\cdot \frac{1}{3}$

## Domanda 12

Sia $\{X_n\}$ una catena di Markov con spazio degli stati ${0, 1, 2}$ e con le seguenti probabilità di transizione: $p_{00} = 1/4, p_{01} = 3/4, p_{11} = p_{12} = 1/2, p_{22} = 1$. La distribuzione di probabilità iniziale è $\pi^{(0)} = (1/3, 0, 2/3)$.
- (a) Si calcoli la matrice di transizione a due passi.

	$$P =\begin{bmatrix}
	1/4&3/4& 0 \\
	0&1/2&1/2 \\
	0&0& 1
	\end{bmatrix}$$

	$$P^2 =\begin{bmatrix}
	1/16&9/16& 3/8 \\
	0&1/4&3/4 \\
	0&0& 1
	\end{bmatrix}$$

- (b) Si calcoli $P[X_2 = 0]$.

	Ci viene chiesto la probabilità dello stato $0$ nella probabilità marginale

	$\pi^{(2)} = \pi^{(0)}\cdot P^2$

	$\begin{bmatrix}\pi_0&\pi_1&\pi_2\end{bmatrix} =\begin{bmatrix}1/3&0&2/3\end{bmatrix}\cdot \begin{bmatrix}
	1/16&9/16& 3/8 \\
	0&1/4&3/4 \\
	0&0& 1
	\end{bmatrix}$

	Lo stato $0$ lo troviamo moltiplicando $\pi^{(0)}$ con la prima colonna della matrice:
	$\pi_0 = \frac{1}{3} \cdot \frac{1}{16} + 0 \cdot 0 + \frac{2}{3} \cdot 0 = \frac{1}{48}$


- \(c\) Si calcoli una distribuzione stazionaria della catena.

	$\pi \cdot P = \pi$

	$\begin{cases}
	\frac{1}{4}\pi_0 + 0\pi_1 + 0\pi_2 = \pi_0 \\
	0\pi_0 + \frac{1}{2}\pi_1 + 1\pi_2 = \pi_2 \\
	\pi_0 + \pi_1 + \pi_2 = 1 \\
	\end{cases}$

	$\begin{cases}
	\frac{1}{4}\pi_0 = \pi_0 \\
	\frac{1}{2}\pi_1 + \pi_2 = \pi_2 \\
	\pi_0 + \pi_1 + \pi_2 = 1 \\
	\end{cases}$

	$\begin{cases}
	\pi_0 = 0 \\
	\pi_1 = 0\\
	\pi_2 = 1 \\
	\end{cases}$

	$\pi = \begin{bmatrix}0&0&1\end{bmatrix}$

## Domanda 13

Sia $\{X_n\}$ una catena di Markov con spazio degli stati ${0, 1, 2}$ e con le seguenti probabilità di transizione: $p_{00} = p_{01} = p_{02}, p_{11} = 1/4, p_{12} = 3/4, p_{20} = 1$. Lo stato iniziale è scelto a caso.

- (a) Si calcoli la matrice di transizione a due passi

	$$P =\begin{bmatrix}
	1/3&1/3& 1/3 \\
	0&1/4&3/4 \\
	1&0&0
	\end{bmatrix}$$

	$$P^2 =\begin{bmatrix}
	4/9&7/36& 13/36 \\
	3/4&1/16&3/16 \\
	1/3&1/3&1/3
	\end{bmatrix}$$

- (b) Si calcoli $P(X_2 = 0)$

	Ci viene chiesto la probabilità dello stato $0$ nella probabilità marginale

	$\pi^{(2)} = \pi^{(0)}\cdot P^2$

	$\begin{bmatrix}\pi_0&\pi_1&\pi_2\end{bmatrix} =\begin{bmatrix}1/3&1/3&1/3\end{bmatrix}\cdot\begin{bmatrix}
	4/9&7/36& 13/36 \\
	3/4&1/16&3/16 \\
	1/3&1/3&1/3
	\end{bmatrix}$

	Lo stato $0$ lo troviamo moltiplicando $\pi^{(0)}$ con la prima colonna della matrice:
	$\pi_0 = \frac{1}{3} \cdot \frac{4}{9} + \frac{1}{3} \cdot \frac{3}{4} + \frac{1}{3} \cdot \frac{1}{3} = \frac{55}{108}$

- \(c\) Si calcoli una distribuzione stazionaria della catena

	$\pi \cdot P = \pi$

	$\begin{cases}
	\frac{1}{3}\pi_0 + 0\pi_1 + 1\pi_2 = \pi_0 \\
	\frac{1}{3}\pi_0 + \frac{1}{4}\pi_1 + 0\pi_2 = \pi_1 \\
	\pi_0 + \pi_1 + \pi_2 = 1 \\
	\end{cases}$
	
	$\begin{cases}
	\frac{1}{3}\pi_0 +1\pi_2 = \pi_0 \\
	\frac{1}{3}\pi_0 + \frac{1}{4}\pi_1 = \pi_1 \\
	\pi_0 + \pi_1 + \pi_2 = 1 \\
	\end{cases}$

	$\begin{cases}
	\pi_0 = \frac{9}{19}\\
	\pi_1 = \frac{4}{19}\\
	\pi_2 = \frac{6}{19}\\
	\end{cases}$


## Domanda 14

In una città ogni giorno il tempo è soleggiato o piovoso. Un giorno di sole è seguito da un altro giorno di sole con probabilità $0.7$, mentre un giorno di pioggia è seguito da uno di sole con probabilità $0.4$.
- (a) Lunedì piove. Si facciano delle previsioni del tempo per martedì, mercoledì e giovedì. 

	![enter image description here](https://i.ibb.co/GVsCngC/image.png)

	$$P =\begin{bmatrix}
	0.7&0.3\\
	0.4&0.6\\
	\end{bmatrix}$$
$\begin{bmatrix}0&1\end{bmatrix} \cdot P = \begin{bmatrix}0.4&0.6\end{bmatrix}$
	
	Se Lunedì piove, allora Martedì sarà soleggiato con probabilità $0.4$ e piovoso con probabilità $0.6$.

	$$P^2 =\begin{bmatrix}
	0.61&0.39\\
	0.52&0.48\\
	\end{bmatrix}$$
	
	$\begin{bmatrix}0&1\end{bmatrix} \cdot P^2 = \begin{bmatrix}0.52&0.48\end{bmatrix}$
	
	Se Lunedì piove, allora Mercoledì sarà soleggiato con probabilità $0.52$ e piovoso con probabilità $0.48$.

	$$P^3 =\begin{bmatrix}
	0.583&0.417\\
	0.556&0.444\\
	\end{bmatrix}$$

	$\begin{bmatrix}0&1\end{bmatrix} \cdot P^3 = \begin{bmatrix}0.556&0.444\end{bmatrix}$

	Se Lunedì piove, allora Giovedì sarà soleggiato con probabilità $0.556$ e piovoso con probabilità $0.444$.

- (b) Si supponga ora che i meteorologi prevedano per lunedì pioggia nell’$80\%$ dei casi. Come cambiano le previsioni per martedì, mercoledì e giovedì?
	
	$\begin{bmatrix}0.2&0.8\end{bmatrix} \cdot P = \begin{bmatrix}0.46&0.54\end{bmatrix}$
	Per Martedì: $0.46$ (sole) e $0.54$ (pioggia).

	$\begin{bmatrix}0.2&0.8\end{bmatrix} \cdot P^2 = \begin{bmatrix}0.538&0.462\end{bmatrix}$
	Per Mercoledì: $0.538$ (sole) e $0.462$ (pioggia).

	$\begin{bmatrix}0.2&0.8\end{bmatrix} \cdot P^3 = \begin{bmatrix}0.5614&0.4386\end{bmatrix}$
	Per Giovedì: $0.5614$ (sole) e $0.4386$ (pioggia).

- \(c\) Si calcoli una distribuzione stazionaria per la catena di Markov.

	$\pi \cdot P = \pi$

	$\begin{cases}
	0.7\pi_S + 0.4\pi_P = \pi_S \\
	\pi_S + \pi_P = 1
	\end{cases}$
	
	$\begin{cases}
	\pi_S = \frac{4}{7}\\
	\pi_P= \frac{3}{7}
	\end{cases}$

## Domanda 15

Un server viene condiviso da due utenti che lavorano in modo indipendente da remoto. In ogni minuto un utente connesso può disconnettersi con probabilità $0.5$ e un utente disconnesso può connettersi con probabilità $0.2$. Sia $X_n$ il numero di utenti connessi al minuto $n$.
- (a) Si calcoli la matrice di transizione per la catena di Markov $\{X_n\}_{n≥0}$.

	Il numero di utenti che possono essere connessi al server è $\{0, 1, 2\}$
	- probabilità di connessione: $p_C = 0.2$
	- probabilità di disconnessione: $p_D = 0.5$

	![enter image description here](https://i.ibb.co/M724wTQ/image.png)

	$p_{00}$ è la probabilità che non essendoci nessuno connesso, il primo utente non si connetta e il secondo non si connetta: $(1-p_C) \cdot (1-p_C)$
	$p_{01}$ è la probabilità che non essendoci nessuno connesso, o il primo utente si connette e l'altro no $[p_C \cdot (1-p_C)]$ oppure che il primo non si connette e l'altro si $[(1-p_C) \cdot p_C]$
	$p_{02}$ è la probabilità che non essendoci nessuno connesso, entrambi si connettano: $p_C\cdot p_C$
	$p_{10}$ è la probabilità che essendoci un utente connesso, lui si disconnetta e l'altro non si connette: $p_D \cdot (1-p_C)$
	$p_{11}$ è la probabilità che essendoci un utente connesso, o lui si disconnette e si connette  l'altro $[p_D\cdot p_C]$ oppure lui non si disconnette e l'altro non si connette $[(1-p_D) \cdot (1-p_C)]$
	e cosi via...
	
	$$P =\begin{bmatrix}
	(1-p_C)(1-p_C)&p_C(1-p_C)+(1-p_C)p_C& p_Cp_C \\
	p_D(1-p_C)&p_Dp_C + (1-p_D)(1-p_C)&p_C(1-p_D) \\
	p_Dp_D&p_D(1-p_D) + (1-p_D)p_D&(1-p_D)(1-p_D)
	\end{bmatrix}$$

	$$P =\begin{bmatrix}
	0.64&0.32&0.04 \\
	0.4&0.5&0.1 \\
	0.25&0.5&0.25
	\end{bmatrix}$$

- (b) Si calcoli la matrice di transizione a due passi.

	$$P^2 =\begin{bmatrix}
	0.5476&0.3848&0.0676 \\
	0.481&0.428&0.091 \\
	0.4225&0.455&0.1225
	\end{bmatrix}$$

- \(c\) Se entrambi gli utenti sono connessi alle ore $10$, qual è la probabilità che nessuno sia connesso alle $10:02$?

	La domanda ci fornisce la distribuzione iniziale (due utenti connessi) $\pi^{(0)} =(0,0,1)$, ci basta andare a vedere il valore presente in posizione $p^2_{20} = 0.4225$
 
- (d) Se alle $10$ non conosciamo il numero di utenti connessi (ogni valore ha la stessa probabilità), qual è la probabilità che nessuno sia connesso alle $10:02$?

	La domanda ci fornisce la distribuzione iniziale (tutti con stessa probabilità) $\pi^{(0)} =(\frac{1}{3},\frac{1}{3},\frac{1}{3})$.
	Dobbiamo calcolare la possibilità che da ogni stato (0 connessi, 1 connesso, 2 connessi) si arrivi ad avere 0 connessi:
	
	$\begin{bmatrix}1/3&1/3&1/3\end{bmatrix} \cdot \begin{bmatrix}0.5476\\0.481\\0.4225\end{bmatrix} =\frac{1}{3}\cdot 0.5476 + \frac{1}{3}\cdot 0.481 + \frac{1}{3} \cdot 0.4225 =0.4837$

- (e) Si calcoli una distribuzione stazionaria per la catena.

	$\pi \cdot P = \pi$

	$\begin{cases}
	0.64\pi_1 + 0.4\pi_2 + 0.25\pi_3 \\
	0.32\pi_1 + 0.5\pi_2 + 0.5\pi_3 \\
	\pi_1 + \pi_2 + \pi_3 = 1
	\end{cases}$

	$\begin{cases}
	\pi_1 = 0.5102 \\
	\pi_2 = 0.4082 \\
	\pi_3 = 0.0816
	\end{cases}$

- (f) Se adesso sono le $10$, qual è la distribuzione (approssimata) del numero di utenti connessi alle $11$?

	In questo caso dovremmo calcolare $\pi^{(60)}$, ma dato che 60 è un numero molto grande la distribuzione saranno quasi identiche alla distribuzione stazionaria che abbiamo calcolato nel punto precedente (questo perché la distribuzione stazionaria ci dice per valori di $n$ grandi in che valori la distribuzione si stabilizza).
$\pi^{(60)} = \pi = \begin{bmatrix}0.5102&0.4082&0.0816\end{bmatrix}$

