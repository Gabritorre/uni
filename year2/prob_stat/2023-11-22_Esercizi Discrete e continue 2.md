# Esercizi su distribuzioni discrete e continue pt. 2

## Domanda 1

Un dato virus può danneggiare un file con probabilità 0.25, indipendentemente dagli altri file contenuti nella stessa cartella. Il virus attacca una cartella contenente 1500 file.
- (a) Calcolare la probabilità che vengano danneggiati tra i 350 e i 400 file (estremi esclusi).

	Definiamo la variabile $X$ che conta il numero di file danneggiati, sapendo che la probabilità che un file venga danneggiato è $0.25$

	$$X \sim \text{Bin}(1500, 0.25)$$

	$P[350<X<400]=$ `pbinom(399, 1500, 0.25) - pbinom(350, 1500, 0.25)` $= 0.8560$

- (b) Fornire una adeguata approssimazione per la probabilità del punto precedente.

	dato che abbiamo un numero di file molto grande e la probabilità è comunque abbastanza alta, possiamo approssimare la binomiale con la distribuzione continua normale.

	$$X \sim \text{Bin}(1500, 0.25) \sim N(375, 281.25)$$

	per escludere gli estremi devo aggiungere la correzione della continuità.
	
	$P[350+0.5\leq X\leq 400-0.5]=$
	$P[350.5\leq X \leq399.5]=$ `pnorm(399.5, 375, sqrt(281.25)) - pnorm(350.5, 375, sqrt(281.25))` $= 0.855596$

## Domanda 2

Il tempo $X$ impiegato per riavviare un dato sistema segue una distribuzione Gamma con valore atteso 20 minuti e scarto quadratico medio 10 minuti.
- (a) Calcolare i parametri di questa distribuzione.

	$$X \sim \text{Ga}(\alpha, \lambda)$$

	Sappiamo dal testo che 
	$E[X] = \frac{\alpha}{\lambda} = 20$
	$\text{sd} = \sqrt{(\text{Var[X]})} = \sqrt{\frac{\alpha}{\lambda^2}} = 10$

	$\begin{cases}
	\frac{\alpha}{\lambda} = 20 \\
	\sqrt{\frac{\alpha}{\lambda^2}} = 10
	\end{cases}
	\begin{cases}
	\alpha = 20\lambda \\
	\sqrt{\frac{20\lambda}{\lambda^2}} = 10
	\end{cases}
	\begin{cases}
	\alpha = 20\lambda \\
	\frac{20}{\lambda} = 100
	\end{cases}
	\begin{cases}
	\alpha = 20\frac{1}{5} \\
	\lambda = \frac{1}{5}
	\end{cases}
		\begin{cases}
	\alpha = 4 \\
	\lambda = \frac{1}{5}
	\end{cases}$

	$$X \sim \text{Ga}(4, 0.2)$$

- (b) Qual è la probabilità che il tempo impiegato per riavviare il sistema sia minore di 15 minuti?

	$P[X\leq 15] =$ `pgamma(15, 4, 0.2)` = $0.3528$

## Domanda 3

Un computer va in breakdown in media una volta ogni 5 mesi e, dopo il terzo breakdown, necessita di una manutenzione straordinaria. Il tempo di attesa per osservare 3 breakdown ha una distribuzione $\text{Ga}(\alpha, \lambda)$.
- (a) Determinare il valore dei parametri $\alpha$ e $\lambda$

	- $\alpha$ è il numero di eventi che ci interessano, in questo caso 3 breakdown
	- $\lambda$ è il tempo medio di attesa per ogni evento, in questo caso $\frac{1}{5}=0.2$

- (b) Calcolare la probabilità che sia richiesta almeno una manutenzione straordinaria entro i prossimi 9 mesi.

	la variabile $X$ misura il tempo atteso per avere 3 breakdown (e quindi una manutenzione straordinaria).

	la probabilità che questo tempo atteso arrivi fino a 9 mesi è
	$P[X\leq9] =$ `pgamma(9, 3, 0.2)` $= 0.2694$

- \(c\) Sapendo che non è stata richiesta una manutenzione straordinaria nei primi 12 mesi, qual è la probabilità che non sia richiesta neanche nei prossimi 4 mesi?
	
	Abbiamo una probabilità composta $P[A|B]$
	$P[X > 12 + 4 | X>12] = \frac{P[X> 16]}{P[X> 12]} =$ `(1-pgamma(16, 3, 0.2)) / (1-pgamma(12, 3, 0.2))` $= 0.6668$

## Domanda 4

In un laboratorio di informatica ci sono due stampanti. La stampante A gestisce il 40% di tutti i processi di stampa. Il suo tempo di stampa segue una distribuzione esponenziale con media uguale a 2 minuti. La stampante B gestisce il restante 60% dei processi di stampa. Il suo tempo di stampa segue una distribuzione Uniforme sull’intervallo [0, 5] minuti.
Si consideri un processo completato in meno di 1 minuto.
Qual è la probabilità che sia stato eseguito dalla stampante A?

Definiamo $A$ come il tempo di stampa della stampante A, che segue una distribuzione esponenziale la cui media è $E[X] = \frac{1}{\lambda} = 2$, quindi con parametro $\lambda = \frac{1}{2} = 0.5$

$$A\sim \text{Exp}(0.5)$$

Definiamo $B$ come il tempo di stampa della stampante B, che segue una distribuzione uniforme nell'intervallo [0, 5]

$$B\sim \text{U}(0, 5)$$

Definiamo $X$ come l'evento in cui il processo viene completato in meno di un minuto.

Dobbiamo calcolare la probabilità che dato $X$ avvenga $A$, tramite la formula di Bayes

$$P[A | X] = \frac{P[X | A] \cdot P[A]}{P[X]}$$

- $P[X | A] =$ `pexp(1, 0.5)` oppure `pgamma(1, 1, 0.5)` $= 0.39347$
- $P[A] = 0.4$
- $P[X] = 0.4 \,\cdot$ `pexp(1, 0.5)` $+ \,0.6 \,\cdot$ `punif(1, 0, 5)` $= 0.27739$

$P[A | X] = \frac{0.39347 \cdot 0.4}{0.27739}=0.56739$

## Domanda 5

Il tempo di installazione (in ore) di un certo programma segue una distribuzione con densità di probabilità $f(x) = \frac{1}{2}e^{−\frac{x}{2}}, x \geq 0$.
Qual è la probabilità che su 100 pc di un laboratorio esattamente $k$ richiedano un tempo di installazione maggiore di 2 ore?

Definiamo $Y$ la variabile che conta quante installazioni richiedano più di 2 ore.

Il testo definisce una variabile $X$ che ha una funzione di densità $f(x)$ che descrive il tempo di installazione di un determinato programma.
Notiamo che è scritta esattamente nella forma di una distribuzione esponenziale:

$$f(x) = \lambda e^{−x\lambda}$$
Quindi possiamo vedere che $\lambda = \frac{1}{2} = 0.5$

$$X \sim \text{Exp}(0.5)$$

$P[X > 2] =$ `1 - pexp(2, 0.5)` $=0.36788$
potrei però utilizzare la funzione di sopravvivenza per ottenere un risultato più compatto: $P[X > 2] = e^{-2\frac{1}{2}} = e^{-1}$

Definiamo $Y$ la variabile che conta quante installazioni richiedano più di 2 ore su 100 installazioni.

$$Y \sim \text{Bin}(100, e^{-1})$$

$P[Y = k] = \binom{100}{k}e^{-k}(1-e^{-1})^{100-k}$

## Domanda 6

Se il 65% della popolazione di una vasta comunità è a favore di una proposta di aumento delle tasse scolastiche, approssimare la probabilità che un campione casuale di 100 persone contenga
- (a) almeno 50 persone favorevoli alla proposta

	Definiamo la variabile $X$ che conta il numero di persone favorevoli tra 100 persone prese a caso, sapendo che la probabilità che una persona sia favorevole è 0.65.

	$X$ sarebbe una distribuzione binomiale ma il testo ci chiede una approssimazione, dato che il numero di persone è alto e la probabilità di successo è molto alta possiamo utilizzare la distribuzione continua normale per approssimare la binomiale.

	$$X \sim \text{Bin}(100, 0.65) \sim \text{N}(65, 22.75)$$

	$P[X \geq 50] = 1 - P[X \leq 49.5] =$ `1-pnorm(49.5, 65, sqrt(22.75))` $=0.99942$
	

- (b) tra 60 e 70 persone favorevoli alla proposta (incluse)

	$P[59.5 \leq X \leq 70.5] =$ `pnorm(70.5, 65, sqrt(22.75)) - pnorm(59.5, 65, sqrt(22.75))` $= 0.75114$

- \(c\) meno di 75 persone favorevoli alla proposta.

	$P[X \leq 74.5] =$ `pnorm(74.5, 65, sqrt(22.75))` $=0.9768$

## Domanda 7

I mancini formano il 12% della popolazione. Approssimare la probabilità che vi siano almeno 20 studenti mancini in una scuola di 200 studenti. Precisare le ipotesi utilizzate. 

Definiamo la variabile $X$ che conta il numero di studenti mancini tra 200 studenti, sapendo che la probabilità che una persona sia mancina è 0.12.

$X$ sarebbe una distribuzione binomiale ma il testo ci chiede una approssimazione, dato che il numero di persone è alto e la probabilità di successo è sufficientemente alta possiamo utilizzare la distribuzione continua normale per approssimare la binomiale.

$$X \sim \text{Bin}(200, 0.12) \sim \text{N}(24, 21.12)$$

$P[X\geq 19.5] =$ `1-pnorm(19.5, 24, sqrt(21.12))` $= 0.83626$


## Domanda 8

Se $X$ è uniformemente distribuita in $(−1, 1)$, si determini $P[|X| > \frac{1}{2}]$

$P\left[|X| > \frac{1}{2}\right] = 1-P\left[|X| \leq \frac{1}{2}\right] = 1-P\left[-\frac{1}{2}\leq X \leq \frac{1}{2}\right]$

$1-P\left[-\frac{1}{2}\leq X \leq \frac{1}{2}\right] =$ `1 - (punif(0.5, -1, 1) - punif(-0.5, -1, 1))` $=0.5$

## Domanda 9

Sia $X$ una v.a. con distribuzione normale di media $\mu = 5$ e varianza $\sigma^2 = 4$. Si calcoli il valore atteso della v.a. $Y = (X − 5)^2$


$E[Y] = E[(X-5)^2] = E[X^2 -10X + 25] = E[X^2] - 10E[X] + 25 = E[X^2] - 10\cdot 5 + 25 =E[X^2] - 25=$
per trovare il valore di $E[X^2]$ possiamo usare la seguente proprietà
$$E[X^2] = \text{Var}[X] + E[X]^2$$

$=E[X^2] - 25 = \text{Var}[X] + E[X]^2 - 75 = 4 + 5^2 - 25 = 4$

## Domanda 10

I clienti arrivano in un certo negozio secondo un processo di Poisson di tasso $\lambda = 3$ per ora.
- (a) Qual è la probabilità che non arrivino clienti tra le 8 e le 10 di mattina?

	Definiamo $X_t$ il numero di clienti che arrivano in un negozio in un intervallo di tempo t. dal testo impostiamo $t = 1$ e $\lambda =3$
$$X_1 \sim \text{Po}(3\cdot 1)$$

	Vogliamo la probabilità che in un arco di tempo di 2 ore (dalle 8 alle 10) arrivino $0$ clienti. quindi impostiamo $t = 2$
	$$X_2 \sim \text{Po}(3\cdot 2)$$
	$P[X_2 = 0] =$ `dpois(0, 3*2)` $= 0.00248$

- (b) Qual è il numero atteso di clienti che arrivano tra le 8 e le 10 di mattina?

	$E[X_2] = \lambda= 3\cdot 2 = 6$



- \(c\) Qual è l’orario atteso in cui si verifica il quinto arrivo dopo le 14:00?

	Quello che ci chiede questo esercizio è: considerando le ore 14:00 come la partenza della distribuzione (il negozio apre alle 14:00), quale è l'orario previsto in cui arriva il quinto cliente?

	Noi dal testo sappiamo che arrivano 3 clienti all'ora, ma risolvendo la seguente proporzione possiamo ottenere ogni quanti minuti arriva un cliente
	$$3:60=1:x \longrightarrow x = \frac{60}{3} = 20$$
	Quindi arriva un cliente ogni 20 minuti.

	Possiamo quindi facilmente ottenere dopo quanti minuti arriva il quinto cliente
	$20 \cdot 5 = 100$

	100 minuti sono 1 ora e 40 minuti, quindi il quinto cliente arriva alle 14:00 + 1:40 = 15:40
