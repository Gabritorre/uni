# Esercizi quantili

## Domanda 1

Sia data una variabile aleatoria X la cui funzione di densità è $f(x) = \frac{1}{2} e^{−|x|}$ per ogni $x \in \mathbb{R}$. Calcolare mediana di X.

$f(x) = \begin{cases}
\frac{1}{2}e^{-x} & x >0\\
\frac{1}{2}e^{x} & x \leq 0
\end{cases}$

Per trovare la mediana dobbiamo trovare il primo valore che rende la funzione di partizione uguale ad $\frac{1}{2}$

$F(x) = \int_{-\infty}^{0}\frac{e^{x}}{2}dx + \int_{0}^{x}\frac{e^{-t}}{2}\,dt$

dobbiamo quindi porre $F(x) = \frac{1}{2}$

$\frac{1}{2}\int_{-\infty}^{0}e^x\,dx + \frac{1}{2}\int_{0}^{x}e^{-t}\,dt = \frac{1}{2}$

$\frac{1}{2}[e^x]_{-\infty}^{0} + \frac{1}{2}[-e^{-t}]_{0}^{x} = \frac{1}{2}$

$\frac{1}{2}[1-0] + \frac{1}{2}[-e^{-x} + 1] = \frac{1}{2}$

$\frac{1}{2} - \frac{1}{2}e^{-x} + \frac{1}{2} = \frac{1}{2}$

$\frac{1}{2} - \frac{1}{2}e^{-x} = 0$

$\frac{1}{2}e^{-x} = \frac{1}{2}$

$e^{-x} = 1$

$e^{-x} = e^0$

$-x = 0$

$x = 0$

La mediana è quindi $0$

## Domanda 2

X indica la vita in ore di una lampadina ed è distribuita secondo la densità
$$f(x) = \frac{100}{x^2} \bm{1}_{(100,+\infty)}(x)$$
Trovare i quartili di X. Hint: Vedere l’esercizio 4 del foglio 5

- primo quartile $(\frac{1}{4})$

	$\int_{100}^{x}\frac{100}{t^2}\,dt = \frac{1}{4}$
	$100\int_{100}^{x}\frac{1}{t^2}\,dt = \frac{1}{4}$
	$100[-\frac{1}{t}]_{100}^{x} = \frac{1}{4}$
	$100[-\frac{1}{x} + \frac{1}{100}] = \frac{1}{4}$
	$-\frac{100}{x} + 1 = \frac{1}{4}$
	$\frac{-100 + x}{x} = \frac{1}{4}$
	$\frac{x -100}{x} = \frac{1}{4}$
	$4x-400 = x$
	$3x-400 = 0$
	$x= \frac{400}{3}$

- secondo quartile $(\frac{1}{2})$, possiamo saltare i calcoli già fatti in precedenza
	
	$\frac{x -100}{x} = \frac{1}{2}$
	$2x-200 = x$
	$x-200 = 0$
	$x= 200$

- terzo quartile $(\frac{3}{4})$, possiamo saltare i calcoli già fatti in precedenza
	
	$\frac{x -100}{x} = \frac{3}{4}$
	$4x-400 = 3x$
	$x-400 = 0$
	$x= 400$

## Domanda 3

Una compagnia aerea dispone di due tipi di aerei, uno da 20 e uno da 10 posti. Dato che si sa che i passeggeri che prenotano poi non si presentano con una probabilità del $10\%$, vengono sempre accettate 22 e 11 prenotazioni rispettivamente. Per quale dei due tipi di aereo è maggiore il rischio di lasciare a terra almeno un passeggero, in un volo in cui si è accettato il numero massimo di prenotazioni?

Dobbiamo andare a calcolare quale è la probabilità che nell'aereo da 20 posti si presentino più di 20 persone (fino a 22) e comparare questa probabilità con quella in cui nell'aereo da 10 posti si presentino più di 10 persone (fino a 11).

Per calcolare queste due probabilità useremo la distribuzione binomiale

Sia $X$ "il numero di passeggeri che si presentano all'aereo da 20 persone"

$P[X > 20] = P[X = 21] + P[X = 22]$
$= \left[\binom{22}{21}0.9^{21}\cdot 0.1^{1}\right] + \left[\binom{22}{22}0.9^{22}\cdot 0.1^{0}\right]$
$= \left[\frac{22!}{21!(22-21)!}0.9^{21}\cdot 0.1\right] + \left[\frac{22!}{22!(22-22)!}0.9^{22}\right] = 0.339$


Sia $Y$ "il numero di passeggeri che si presentano all'aereo da 10 persone"

$P[Y > 10] = P[Y = 11]$
$= \left[\binom{11}{11}0.9^{11}\cdot 0.1^{0}\right]$
$= \left[\frac{11!}{11!(11-11)!}0.9^{11}\right] = 0.314$


confrontando le probabilità concludiamo che nell'aereo da 20 persone è più probabile che ci siano persone extra non trasportabili.

## Domanda 4

Una macchina produce pezzi con una percentuale di difettosità pari al $4\%$. Si scelgono a caso 15 pezzi dalla produzione della macchina.
- (a) Calcolare la probabilità che fra i 15 pezzi non ve ne sia nemmeno uno difettoso. 
	
	Sia $X$ la variabile aleatoria che conta il numero di pezzi difettosi su 15 estratti, sapendo che la probabilità che un pezzo sia difettoso è $0.04$
$$X \sim \text{Bin}(15, 0.04)$$

	$\mathbb{P}[X = 0] = \binom{15}{0}0.04^{0}0.96^{15} = 0.542$
	rispettiva funzione in R: `dbinom(0, 15, 0.04)`
	
- (b) Calcolare la probabilità che fra i 15 pezzi ve ne siano almeno 2 difettosi.

	$\mathbb{P}[X \geq 2] = 1 - \mathbb{P}[X \leq 1] = 1 - (\mathbb{P}[X = 0] + \mathbb{P}[X = 1])= 0.1191$
rispettiva funzione in R: `1-pbinom(1, 15, 0.04)`

- \(c\) Si supponga di sapere con certezza che in un lotto di 20 pezzi ve ne sono 4 difettosi. Un compratore acquista 8 di questi pezzi. Calcolare la probabilità che fra gli 8 pezzi acquistati ve ne siano esattamente 3 difettosi.

	Sia $Y$ una variabile che che conta i pezzi difettosi tra gli 8 estratti

	$$Y \sim \text{Iper}(20, 4, 8)$$

	$\mathbb{P}[Y = 3] = \frac{\binom{4}{3}\binom{20-4}{8-3}}{\binom{20}{8}} = 0.1387$
	rispettiva funzione R: `dhyper(3, 4, 16, 8)`

## Domanda 5

In uno dei 5 blocchi di un programma è presente un errore. Per trovarlo, vengono selezionati casualmente e testati 3 blocchi. Sia X il numero di errori in questi tre blocchi. Calcolare $E[X]$ e $\text{Var}(X)$.

la variabile aleatoria $X$ ha una distribuzione ipergeometrica

$$X \sim \text{Iper}(5, 1, 3)$$

$\mathbb{E}[X] = n\frac{K}{N} = 3\frac{1}{5} = 0.6$
$\text{Var}[X] = n\frac{K}{N}\cdot \frac{N-K}{N}\cdot\frac{N-n}{N-1} = 3\frac{1}{5} \cdot \frac{5-1}{5}\cdot \frac{5-3}{4} =0.24$

## Domanda 6

Il preside di una facoltà desidera formare una commissione con 5 dei 40 membri del Consiglio di Facoltà. La selezione avviene a caso e nel Consiglio di Facoltà vi sono 8 docenti di statistica.
Si calcoli la probabilità che la commissione:
- (a) non contenga nessun docente di statistica;

	Sia $X$ la variabile che conta quanti docenti di statistica vengono selezionati per la commissione

	$$X \sim \text{Iper}(40, 8, 5)$$

	$\mathbb{P}[X = 0] = \frac{\binom{8}{0}\binom{32}{5}}{\binom{40}{5}} = 0.3060$
	rispettiva funzione R: `dhyper(0, 8, 32, 5)`
- (b) contenga almeno un docente di statistica;

	$\mathbb{P}[X \geq 1] = 1 - \mathbb{P}[X = 0] = 0.6940$
	rispettiva funzione R: `1 - dhyper(0, 8, 32, 5)`

- \(c\) contenga non più di un docente di statistica.

	$\mathbb{P}[X \leq 1] = \mathbb{P}[X = 0] + \mathbb{P}[X = 1] = \frac{\binom{8}{0}\binom{32}{5}}{\binom{40}{5}} + \frac{\binom{8}{1}\binom{32}{4}}{\binom{40}{5}} =0.7432$
	rispettiva funzione R: `phyper(1, 8, 32, 5)`
