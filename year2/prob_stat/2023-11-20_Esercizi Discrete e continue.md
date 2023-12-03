# Esercizi su distribuzioni discrete e continue


## Domanda 1

Il numero mensile di shutdown di un server segue una distribuzione di Poisson, con una media di 0.25 al mese.
- (a) Qual è la probabilità che si verifichino almeno 3 shutdown nel prossimo anno?

	$X$: conta il numero di shutdown di un server in un mese
$$X \sim \text{Po}(0.25)$$

	dato che noi vogliamo cambiare l'intervallo di tempo in un anno, calcoliamo che in media all'anno si verificano $0.25 \cdot 12 = 3$ shutdown di un server.

	quindi la nostra nuova $\lambda = 3$

	$P[X \geq 3] = 1- P[X \leq 2] = 1 - [(P[X = 0]) + (P[X = 1]) + (P[X = 2])]$
	$1 - \left[(\frac{3^0}{0!}e^{-3}) + (\frac{3^1}{1!}e^{-3}) + (\frac{3^2}{2!}e^{-3})\right] = 0.5768$

	funzione R: `1-ppois(2, 3)`

- (b) Durante il prossimo anno, qual è la probabilità che ci siano almeno 3 mesi (su 12) con esattamente uno shutdown per mese?

	In questo caso dobbiamo combinare due distribuzioni insieme.
	
	definiamo $Y$ come la variabile che conta il numero di shutdown in 3 mesi.
	è una distribuzione binomiale in cui $n = 12$ (il numero di prove) e con la probabilità del successo che però non sappiamo. Possiamo però calcolarla con la Poisson.
	la probabilità che in un mese ci sia uno shutdown è data da
$P[X = 1] = \frac{0.25^1}{1!}e^{-0.25} = 0.1947$

	quindi:
	$$Y \sim \text{Bin}(12, 0.1947)$$

	la probabilità che ci siano almeno 3 mesi con uno shutdown al mese è:

	$P[Y \geq 3] = 1 - P[Y \leq 2] =$
	$1- \left[(P[Y = 0]) + (P[Y = 1]) + (P[Y = 2])\right] = 0.4228$

	funzione R: `1 - pbinom(2, 12, 0.1947)`

## Domanda 2

Ad un casello autostradale arriva ogni ora un numero di automobili che segue una distribuzione di Poisson di parametro $\lambda = 20$.
- (a) Qual è la probabilità che in un’ora arrivino non più di 7 automobili?

	$X$: "numero di automobili in un'ora"

	$$X \sim \text{Pois}(20)$$
	$P[X \leq 7] =0.0007786$
	funzione R: `ppois(7, 20)`

- (b) E che il numero di macchine sia compreso fra 6 e 12 (estremi inclusi)?

	$P[6 \leq X \leq 12] = P[X \leq 12] - P[X \leq 5] = 0.03894$
	funzione R: `ppois(12, 20) - ppois(5, 20)`
	

## Domanda 3

In media 1 computer su 800 va in crash durante un violento temporale. Si consideri un’azienda con 4000 computer in attività durante un violento temporale.
- (a) Calcolare la probabilità che vadano in crash meno di 10 computer.

	per sapere in media quanti pc vanno in crash su 4000 risolviamo la seguente proporzione:
	$$1:800 = x:4000$$
	
	$$x = \frac{4000}{800} = 5$$

	Sia $X$ la variabile che conta il numero di pc che vanno in crash durante il temporale, con una media di 5 pc su 4000

	$$X \sim \text{Po}(5)$$

	$P[X \leq 9] = 0.9682$
	funzione R: `ppois(9, 5)`

- (b) Calcolare la probabilità che vadano in crash esattamente 10 computer.

	$P[X = 10] = \frac{5^{10}}{10!}e^{-5} = 0.0181$
	funzione R: `dpois(10, 5)`


## Domanda 4

Dopo che un virus ha infettato un sistema informatico, un sistemista controlla lo stato di tutti i file importanti. Ogni file viene danneggiato dal virus con probabilità 0.2 indipendentemente dagli altri files.
- (a) Calcolare la probabilità che almeno 5 dei primi 20 file siano stati danneggiati.

	Sia $X$ la variabile che conta quanti file sono stati danneggiati su 20 file sapendo che la probabilità che un file venga danneggiato è di 0.2

	$$X \sim \text{Bin}(20, 0.2)$$

	$P[X \geq 5] =1 - P[X \leq 4] =0.3704$
	funzione R: `1 - pbinom(4, 20, 0.2)`

- (b) Calcolare la probabilità che il sistemista debba controllare almeno 6 file per trovarne uno danneggiato.

	Sia $Y$ la variabile che conta quanti file non sono danneggiati prima di trovare il primo file danneggiato
$$Y \sim \text{Geo}(0.2)$$

	$P[Y\geq 6] =1 - P[Y \leq 5] = 0.3277$
	usando la proprietà di perdita della memoria: $P[Y\geq 6] = (1-0.2)^{5} = 0.3277$
	funzione R: `1-pgeom(5-1, 0.2)`

## Domanda 5

In una località balneare la probabilità che piova in un qualunque giorno del mese di agosto è 0.05. Assumendo che vi sia indipendenza tra i vari giorni del mese:
- (a) Qual è la probabilità che la prima pioggia del mese si osservi il 15 agosto?

	Sia $X$ la variabile che conta quanti giorni senza pioggia prima di avere il primo giorno di pioggia
	$$X\sim \text{Geo}(0.05)$$

	$P[X = 15] = (1 - 0.05)^{15 - 1}0.05 = 0.0244$
	funzione R: `dgeom(15-1, 0.05)`

- (b) E prima del 15 agosto?

	$P[X \leq 14] =0.5123$
	funzione R: `pgeom(14-1, 0.05)`

- \(c\) Dato che fino al 10 agosto non ha piovuto, qual è la probabilità che non piova fino al 25?

	Sfruttando la proprietà di mancanza della memoria della distribuzione geometrica:
	
	$P[X >10 | X > 25] = P[X > 10 | X > 10 + 15] = P[X > 15]$
	$P[X > 15] = 1- P[X \leq 15] = 0.4633$
	oppure usando anche la formula della mancanza di memoria: $(1-0.05)^{15} = 0.4633$
	funzione R: `1-pgeom(15-1, 0.05)`

## Domanda 6

Il 40% degli ordini effettuati a una società di e-commerce viene effettuato telefonicamente, mentre il restante 60% viene effettuato online. Gli ordini effettuati per telefono ricevono uno sconto speciale il 29% delle volte, mentre gli ordini effettuati online ricevono uno sconto simile il 26% delle volte. Si considerino 10 ordini scelti a caso.
- (a) Qual è la probabilità che esattamente cinque di questi ordini siano stati effettuati per telefono e abbiano ottenuto uno sconto speciale?

	$P[T] = 0.4$
	$P[O] = 0.6$
	$P[S|T] = 0.29$
	$P[S|O] = 0.26$

	sia $X$ la variabile che conta il numero di ordini effettuati per telefono e con uno sconto speciale su 10 ordini, sapendo che la probabilità dello sconto è una probabilità composta $0.4 \cdot 0.29 = 0.116$

	$$X \sim \text{Bin}(10, 0.116)$$

	$P[X = 5] = \binom{10}{5}0.116^{5}(1-0.116)^{10-5} =0.002857$
	funzione R:`dbinom(5, 10, 0.116)`

- (b) Qual è la probabilità che esattamente cinque di questi ordini abbiano ottenuto uno sconto speciale?

	sia $Y$ la variabile che conta il numero di ordini effettuati a cui è stato applicato uno sconto speciale su 10 ordini, sapendo che la probabilità dello sconto è una probabilità composta $(0.4 \cdot 0.29) + (0.6 \cdot 0.26) = 0.272$

	$$X \sim \text{Bin}(10, 0.272)$$

	$P[X = 5] = \binom{10}{5}0.272^{5}(1-0.272)^{10-5} =0.0767$
	funzione R:`dbinom(5, 10, 0.272)`

- \(c\) Qual è la probabilità che al massimo cinque di questi ordini abbiano ottenuto uno sconto speciale?

	$P[X \leq 5] = 0.97024$
	funzione R:`pbinom(5, 10, 0.272)`

## Domanda 7

Sia A l’area (casuale) del rettangolo di vertici $(0, 0), (0, Y ), (2, Y ),(2, 0)$. Si calcoli il valore atteso e la varianza di A se:

![enter image description here](https://i.ibb.co/4FXdJ6r/image.png)

- (a) $Y \sim U(0, 1)$

	Sappiamo che l'area di un rettangolo si calcola come $\text{base}\times \text{altezza}$
	In questo caso la base è 2 mentre l'altezza è $Y$ $\implies A = 2Y$

	Se $Y$ è una distribuzione continua uniforme nell'intervallo $[a = 0, b = 1]$
	possiamo ottenere il valore atteso dell'area con la formula: $E[A] =E[2Y] = 2E[Y] = 2\cdot\frac{a+b}{2}$
	$2E[Y] =2\cdot \frac{0+1}{2} = 1$

	per quanto riguarda la varianza invece possiamo usare la formula $\text{Var}[A] = \text{Var}[2Y] = 2^2\text{Var}[Y] = 4\cdot\frac{(b-a)^2}{2}$
	$4\text{Var}[Y] = 4\cdot\frac{(1-0)^2}{12} =\frac{1}{3}$
	

- (b) $Y \sim N(0, 1)$

	Se $Y$ è una distribuzione normale uniforme con $\mu = 0, \sigma^2 = 1$
	
	possiamo ottenere il valore atteso dell'area con la formula: $E[A] =E[2Y] = 2E[Y] = 2\cdot\mu$
	$2E[Y] =2\cdot 0 = 0$

	per quanto riguarda la varianza invece possiamo usare la formula $\text{Var}[A] = \text{Var}[2Y] = 2^2\text{Var}[Y] = 4\cdot\sigma^2$
	$4\text{Var}[Y] = 4\cdot1 =4$

## Domanda 8

Se $Z \sim N(0, 1)$, trovare le costanti a e b per cui $P[Z \leq a] = 0.9686$ e $P[Z \geq b] = 0.1788$.

dato che abbiamo una distribuzione normale **standard** possiamo usare direttamente la tavola della normale per trovare i valori di $a$ e $b$:
 per quanto riguarda $P[Z \leq a] = 0.9686$ cerchiamo direttamente nella tabella il valore $0.9686$ e troviamo i rispettivi valori di riga e colonna: riga: 1.8; colonna: 0.06; quindi il valore di $a = 1.86$

per quanto riguarda $P(Z \geq b) = 0.1788$, conosco la probabilità che $Z$ sia maggiore di $b$, io però posso ricavarmi $b$ tramite $P[Z \leq b]$ utilizzando sempre la tabella della normale. quindi posso ottenere $P[Z \leq b]$ facendo il complemento sulla probabilità 
$P[Z \leq b] = 1 - P[Z \geq b] = 1 - 0.1788 = 0.8212$
cerco la $0.8212$ nella tabella e ottengo: riga: 0.9; colonna: 0.02; quindi il valore di $b = 0.92$


## Domanda 9

Se $X \sim N(3, 5^2)$, calcolare $P(4 \leq X \leq 6), P(1 \leq X \leq 5), P(−1 \leq X \leq 2)$.

Definiamo la variabile $Z$ che standardizza la variabile $X$

$Z\sim N(0,1)$

con $Z= \frac{X - \mu}{\sigma}$

- per calcolare la probabilità $P[4 \leq X \leq 6]$
	
	posso utilizzare la variabile standardizzata
	$P\left[\frac{4 - 3}{5} \leq Z \leq \frac{6 - 3}{5}\right] = P[0.2 \leq Z \leq 0.6] = 0.146487$
	funzione R: `pnorm(0.6) - pnorm(0.2)`

- per calcolare la probabilità $P[1 \leq X \leq 5]$
	
	posso utilizzare la variabile standardizzata
	$P\left[\frac{1 - 3}{5} \leq Z \leq \frac{5 - 3}{5}\right] = P[-0.4 \leq Z \leq 0.4] = 0.3108$
	funzione R: `pnorm(0.4) - pnorm(-0.4)`
	
	alternativamente si poteva usare la proprietà che quando i due estremi sono opposti si può usare la seguetne formula $1-2(P[Z \leq -0.4]) = 0.3108$
	funzione R: `1-2*pnorm(-0.4)`

- per calcolare la probabilità $P[-1 \leq X \leq 2]$
	
	posso utilizzare la variabile standardizzata
	$P\left[\frac{-1 - 3}{5} \leq Z \leq \frac{2 - 3}{5}\right] = P[-0.8 \leq Z \leq -0.2] = 0.2088849$
	funzione R: `pnorm(-0.2) - pnorm(-0.8)`

## Domanda 10

Se $X \sim N(4, 4^2)$, calcolare la costante $c$ per cui $P(|X − 4| \leq c) = 0.9505$.

Definiamo la variabile standardizzata $Z \sim \text{N}(0, 1)$

$Z = \frac{X -4}{4}$

$P[|X-4| \leq c] = P[-c\leq X-4 \leq c]$
$P[-c+4\leq X \leq c+4]$
$P[\frac{-c + 4 -4}{4}\leq Z \leq \frac{c+4-4}{4}]$
$P[\frac{-c}{4}\leq Z \leq \frac{c}{4}] = P[Z \leq \frac{c}{4}] - P[Z \leq -\frac{c}{4}]$
la probabilità $P[Z \leq -\frac{c}{4}]$ possiamo trasformarla in $1-P[Z \leq \frac{c}{4}]$
$P[Z \leq \frac{c}{4}] - (1-P[Z \leq \frac{c}{4})]$
$P[Z \leq \frac{c}{4}] - 1+P[Z \leq \frac{c}{4}]$
$2P[Z \leq \frac{c}{4}] - 1 = 0.9505$
$P[Z \leq \frac{c}{4}]  = \frac{1+0.9505}{2} = 0.97525$

cercando nella tavola $0.97525$ non trovo una riga e colonna specifiche, noto solo che il valore sembra essere compreso tra $[1.96, 1.97]$, andiamolo quindi a calcolare utilizzando la funzione `qnorm` di R

$\frac{c}{4} =$ `qnorm(0.97525)`
$c = 4\cdot 1.96426 = 7.857038$

infatti eseguendo il seguente comando R: `pnorm(7.857038/4) - pnorm(-7.857038/4)` otteniamo $0.9505$
## Domanda 11

Sia $X ∼ N(\mu, \sigma^2 )$. Determinare i valori della media e della varianza di $X$ sapendo che $P(X \leq 2.45) = 0.15$ e $P(X \geq 2.6) = 0.06$.

Dobbiamo trovare la media $\mu$ e la varianza $\sigma^2$ sapendo che
- $P(X \leq 2.45) = 0.15$
- $P(X \geq 2.6) = 0.06 \implies P[X \leq 2.6] = 0.94$

Potremmo utilizzare la normale standard per per risolvere un sistema

$Z = \frac{X-\mu}{\sigma}$

Utilizzando la funzione di R `qnorm()` andiamo ad ottenere quale è il valore $z$ della normale standard per cui la probabilità è 0.15 e 0.94

`qnorm(0.15) = -1.04`
`qnorm(0.94) = 1.56`

$\begin{cases}
\frac{2.45 - \mu}{\sigma} = -1.04\\
\frac{2.6 - \mu}{\sigma} = 1.56
\end{cases}
\begin{cases}
2.45 - \mu = -1.04\sigma\\
2.6 - \mu = 1.56\sigma
\end{cases}
\begin{cases}
\mu = 1.04\sigma + 2.45\\
2.6 - \mu = 1.56\sigma
\end{cases}
\begin{cases}
\mu = 1.04\sigma + 2.45\\
2.6 - (1.04\sigma + 2.45) = 1.56\sigma
\end{cases}$

$\begin{cases}
\mu = 1.04\sigma + 2.45\\
2.6 - 1.04\sigma - 2.45- 1.56\sigma = 0
\end{cases}
\begin{cases}
\mu = 1.04\sigma + 2.45\\
0.15 - 2.6\sigma= 0
\end{cases}
\begin{cases}
\mu = 1.04\sigma + 2.45\\
\sigma= \frac{0.15}{2.6}
\end{cases}
\begin{cases}
\mu = 1.04\frac{0.15}{2.6} + 2.45\\
\sigma= \frac{0.15}{2.6}
\end{cases}$

$\begin{cases}
\mu = 2.51\\
\sigma= \frac{0.15}{2.6}
\end{cases}$

la media è quindi $\mu = 2.51$
mentre la varianza è $\sigma^2 = \left(\frac{0.15}{2.6}\right)^2 = 0.0033$

## Domanda 12

I diametri delle ruote per bicicletta prodotte da una ditta hanno distribuzione normale con media $58.5 \text{cm}$ e varianza $0.9 \text{cm}^2$ . Determinare:

- (a) la percentuale di ruote con diametro compreso fra $58.1 \text{cm}$ e $58.8 \text{cm}$;

	$$X\sim \text{N}(58.5, 0.9)$$

	$P[58.1\leq X \leq 58.8] = P[\frac{58.1 - 58.5}{\sqrt{0.9}} \leq Z \leq \frac{58.8 - 58.5}{\sqrt{0.9}}]$
	$P[-0.4216 \leq Z \leq 0.3162] = P[Z \leq 0.3162] - (1-P[Z \leq 0.4216]) = 0.2874 = 28.74\%$
	funzione R: `pnorm(0.3162) - (1-pnorm(0.4216))`

- (b) la percentuale di ruote con diametro superiore a $58.7 \text{cm}$, dato che il loro diametro è superiore a $58.5 \text{cm}$;

	$P[X \geq 58.7 | X \geq 58.5] = \frac{P[X \geq 58.7 \cap X \geq58.5]}{P[X\geq 58.5]}$
	$\frac{P[X \geq 58.7]}{P[X\geq 58.5]} = \frac{1-P[X \leq 58.7]}{1-P[X\leq 58.5]} = \frac{0.4165}{0.5} = 0.8330 = 83.30\%$
funzione R: `(1-pnorm(58.7, 58.5, sqrt(0.9))) / (1-pnorm(58.5, 58.5, sqrt(0.9)))`

- \(c\) la probabilità che su 10 ruote scelte a caso dalla produzione, soltanto una abbia diametro inferiore a $58.3 \text{cm}$.

	Definiamo la variabile $Y$ che conta quante ruote hanno un diametro inferiore a $58.3$cm su 10 ruote scelte a caso
$$Y \sim \text{Bin}(10, 0.4165)$$

	la probabilità $0.4165$ è data da `pnorm(58.3, 58.5, sqrt(0.9))`
	$P[Y = 1] = \binom{10}{1}0.4165^{1}(1-0.4165)^{9} = 0.03266$
	funzione R: `dbinom(1, 10, 0.4165)`

- (d) La ditta afferma che in un lotto di 20 ruote consegnate ad un costruttore di biciclette, 2 hanno diametro inferiore a $58.3 \text{cm}$. Calcolare la probabilità che proprio queste due ruote vengano utilizzate per la costruzione della prossima bicicletta.

	Definiamo la variabile $X$ che conta il numero di estrazioni di ruote con diametro inferiore a $58.3$cm su 20 ruote
$P[X = 2] = \frac{\binom{2}{2}\cdot \binom{20-2}{2-2}}{\binom{20}{2}} =0.00526$
funzione R: `dhyper(2, 2, 18, 2)`

## Domanda 13

Un’azienda può scegliere di acquistare da due fornitori, A e B, un pezzo meccanico che dev’essere lungo 10 cm. La lunghezza del pezzo del fornitore A segue una distribuzione uniforme tra $10 − d$ cm e $10 + d$ cm, con $d$ costante non nota;
la lunghezza del pezzo del fornitore B segue invece una distribuzione normale con media 10 cm e varianza 4 cm2.
La probabilità di scegliere il fornitore A è pari a $\frac{2}{3}$.
- (a) Calcolare, in funzione di $d$, la probabilità che un pezzo acquistato dall’azienda sia al di fuori dell’intervallo di specifica $(9, 11)$cm (estremi esclusi).

	Definiamo la variabile $A$ che descrive la lunghezza per pezzo fornito dal fornitore A
	$$A \sim \text{U}(10-d, 10+d)$$

	Definiamo la variabile $B$ che descrive la lunghezza per pezzo fornito dal fornitore B
	$$A \sim \text{N}(10, 4)$$

	Sappiamo che $P[A] = \frac{2}{3}$ mentre $P[B] = \frac{1}{3}$

	Definiamo l'evento $X$ "il pezzo è fuori dall'intervallo di specifica (9, 11)"

	$P[X] = \frac{2}{3}\cdot (X_A) + \frac{1}{3} \cdot (X_B)$

	$X_A = P[A \leq 9 \cup A \geq 11] = \frac{9 - (10-d)}{(10 + d) - (10-d)} +\left(1- \frac{11 - (10-d)}{(10 + d)-(10-d)}\right)$
$\frac{-1 + d}{2d} + \frac{d-1}{2d} = \frac{d-1}{d}$

	$X_B = P[B \leq 9 \cup B \geq 11] = P[B \leq 9] + (1-P[B \leq 11]) = 0.61708$
	funzione R: `pnorm(9, 10, sqrt(4)) + (1-pnorm(11, 10, sqrt(4)))`

	Concludiamo che la $P[X]$ in funzione di $d$ è
	$P[X] = \frac{2}{3}\cdot \frac{d-1}{d} + \frac{1}{3}\cdot0.61708$

- (b) Calcolare per quale valore di $d$ i due fornitori producono il pezzo con la stessa lunghezza media e la stessa varianza

	poniamo le seguente uguaglianze
	
	$\begin{cases}
	E[A] = E[B]\\
	\text{Var}[A] = \text{Var}[B]
	\end{cases}$
	
	$\begin{cases}
	\frac{(10-d) + (10+d)}{2} = 10\\
	\frac{[(10+d) - (10-d)]^2}{12} = 4
	\end{cases}
	\begin{cases}
	10 = 10\\
	(10+d - 10+d)^2 = 4\cdot 12
	\end{cases}
	\begin{cases}
	(2d)^2 = 48
	\end{cases}
	\begin{cases}
	4d^2 = 48
	\end{cases}$

	$d^2 = 12$
	$d = \sqrt{12} = 2\sqrt{3}$
	
	
