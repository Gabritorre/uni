## Domanda 1

Un’urna contiene tre palline numerate da 1 a 3. Si estraggono con reinserimento due palline e sia X la variabile aleatoria che indica la differenza in modulo dei numeri estratti.
Hint: Vedere l’esercizio 1 del foglio 4
Si determini:
- (a) La funzione di ripartizione di X, con relativa rappresentazione grafica

	la funzione di ripartizione è:

	$$F(x) = \sum_{i:x_i \leq x}\mathbb{P}[X = x]$$

	![enter image description here](https://i.ibb.co/Wvcjd3P/riparti.png)

- (b) La media e la moda di X Soluzione:

	$$\mathbb{E}[X] = 0 \cdot \frac{3}{9} + 1 \cdot \frac{4}{9} + 2 \cdot \frac{2}{9} = \frac{8}{9}$$

	La moda è il valore che assume la variabile aleatoria che possiede la probabilità maggiore, in questo caso la moda è $1$ dato che ha probabilità più alta, cioè $\frac{4}{9}$

- \(c\) La varianza di X

	$$\text{Var}[X] = 0^2 \cdot \frac{3}{9} + 1^2 \cdot \frac{4}{9} + 2^2 \cdot \frac{2}{9} - \left(\frac{8}{9}\right)^2 = \frac{44}{81} \approx 0.5432$$


## Domanda 2

Il numero giornaliero di interruzioni dei servizi di rete ha la seguente distribuzione di probabilità

| $x$ | $0	\hspace{5mm} 1 \hspace{5mm} 2$ |
|--|--|
| $p(x)$ | $0.7 \hspace{3mm} 0.2 \hspace{3mm} 0.1$ |


Una piccola azienda di commercio online stima che, ad ogni interruzione, perde 500$. Si determini:
Hint: Vedere l’esercizio 2 del foglio 4
- (a) la funzione di ripartizione (con relativa rappresentazione grafica) delle perdite giornaliere dovute alle interruzioni di rete che subisce questa azienda.

	![enter image description here](https://i.ibb.co/L10gZKk/riparti.png)

- (b) Il valore atteso e la varianza delle perdite giornaliere dovute alle interruzioni di rete che subisce questa azienda.

	$$\mathbb{E}[X] = 0 \cdot 0.7 + 500 \cdot 0.2 + 1000 \cdot 0.1  = 200$$

	$$\text{Var}[X] = 0^2 \cdot 0.7 + 500^2 \cdot 0.2 + 1000^2 \cdot 0.1 - (200)^2 =11000$$

## Domanda 3

Sia data una variabile aleatoria X la cui funzione di densità è $f(x) =\frac{1}{2}e^{−|x|}$ per ogni $x \in \mathbb{R}$.
Calcolare media, mediana e varianza di X.

Calcoliamo la media


$$\mathbb{E}[X]  =\int_{-\infty}^{+\infty}x\cdot \frac{1}{2}e^{-|x|} \, dx$$

$$= \frac{1}{2}\int_{-\infty}^{+\infty}xe^{-|x|} \, dx$$

$$\begin{cases}
\frac{1}{2}\int_{-\infty}^{0}xe^{x} \, dx & x < 0\\
\frac{1}{2}\int_{0}^{+\infty}xe^{-x} \, dx & x \geq 0
\end{cases}$$

- risolviamo il primo integrale tramite il metodo per parti

	$$\frac{1}{2}\left[\left[xe^x\right]^{0}_{-\infty} - \int_{-\infty}^{0}1\cdot e^x\, dx\right]$$
	
	$$\frac{1}{2}\left[\left[xe^x\right]^{0}_{-\infty} - \left[e^x\right]^{0}_{-\infty}\right]$$ 

	$$\frac{1}{2}\left[\left[0e^0 - (-\infty\cdot e^{-\infty})\right]- \left[e^0 - e^{-\infty}\right]\right]$$ 

	$$\frac{1}{2}\left[\left[\infty\cdot 0\right]- \left[1 - 0\right]\right]$$ 

	$$\frac{1}{2}\left[\left[\infty\cdot 0\right] - 1\right] = -\frac{1}{2}$$ 

- risolviamo il secondo integrale tramite il metodo per parti

	$$\frac{1}{2}\left[\left[xe^{-x}\right]^{+\infty}_{0} - \int_{0}^{+\infty}1\cdot -e^{-x}\, dx\right]$$
	
	$$\frac{1}{2}\left[\left[+\infty \cdot e^{-\infty} - 0 \cdot e^0\right] + \left[-e^{-x}\right]^{+\infty}_{0}\right]$$

	$$\frac{1}{2}\left[\left[+\infty \cdot 0 - 0 \cdot 1\right] + \left[-e^{-\infty} -(-e^{0})\right]\right]$$
	
	$$\frac{1}{2}\left[0 -(-1)\right] = \frac{1}{2}$$

Facciamo la somma dei due integrali

$$\mathbb{E}[X] = -\frac{1}{2} + \frac{1}{2} = 0$$


Per quanto riguarda la varianza:

$$\text{Var}[X] = \int_\mathbb{R}x^2\cdot \frac{1}{2}e^{-|x|}\,dx - [\mathbb{E}[X]]^2$$

dato che $\mathbb{E}[X]$ vale zero lo possiamo togliere.

Il calcolo dell'integrale è molto simile ai calcoli precedenti

$$\frac{1}{2}\int_{-\infty}^{0}x^2e^x\,dx = 1$$

$$\frac{1}{2}\int_{0}^{+\infty}x^2e^{-x}\,dx = 1$$

$$\text{Var}[X] = 1 + 1 - 0^2 = 2$$


## Domanda 4

X indica la vita in ore di una lampadina ed è distribuita secondo la densità $f(x) = \frac{100}{x^2} \bm{1}_{(100,+∞)}(x)$. Trovare la media e la varianza di X
Hint: Vedere l’esercizio 5 del foglio 4

$$\mathbb{E}[X] = \int_{100}^{+\infty}x\cdot\frac{100}{x^2}\,dx$$

$$= 100\int_{100}^{+\infty}\frac{1}{x}\,dx$$

$$= 100\int_{100}^{+\infty}\frac{1}{x}\,dx$$

$$= 100\left[\ln(|x|)\right]^{+\infty}_{100}$$

$$= 100\left[\ln(|\infty|) - \ln(|100|)\right]$$

$$= 100\left[\infty - \ln(100)\right] = \infty$$

## Domanda 5

Sia X una variabile aleatoria continua il cui supporto è l’intervallo $[−3, 3]$, avente la funzione di ripartizione:

$$F_X(x) = \begin{cases}
0 & x < −3 \\
\frac{x^3+27}{a} & −3 ≤ x < 3\\
1 & x ≥ 3
\end{cases} $$

- (a) Trovare il valore di a per cui questa funzione è una funzione di ripartizione
	la funzione deve essere continua a destra, quindi il limiti per $x$ che tende a 3 deve essere uguale a $F_X(3)$
	Dato che $F_X(3) = 1$ allora:
	
	$$\frac{3^3 + 27}{a} = 1$$

	$$\frac{27 + 27}{a} = 1$$

	$$\frac{54}{a} = 1$$

	$$a = 54$$

- (b) Calcolare la funzione di densità di X

dalla funzione di partizione è possibile ottenere la densità di probabilità in ogni punto derivabile, facendo la derivata della funzione di ripartizione

$$f(x) = \frac{dF(x)}{dx}$$

$$f(x) = \frac{d}{dx}\left[\frac{x^3 + 27}{54}\right]$$

$$= \frac{1}{54}\frac{d}{dx}\left[x^3 + 27\right]$$

$$= \frac{1}{54}3x^2$$

$$= \frac{x^2}{18}$$

## Domanda 6

Il reparto di assistenza clienti di un’azienda di computer dispone di sei linee telefoniche. Sia X il numero di linee in uso in un determinato momento, con funzione di ripartizione:

|  | $x < 0$ | $0 \leq x < 1$ | $1 \leq x < 2$ | $2 \leq x < 3$ | $3 \leq x < 4$ | $4 \leq x < 5$ | $5 \leq x < 6$ | $6 \leq x$ |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| F(x) | 0 | 0.1 | 0.25 | 0.45 | 0.7 | 0.9 | 0.96 | 1 |


Trovare la funzione di probabilità di X e determinare la probabilità dei seguenti eventi:

$P[X = 0] = 0.1$
$P[X = 1] = 0.15$
$P[X = 2] = 0.2$
$P[X = 3] = 0.25$
$P[X = 4] = 0.2$
$P[X = 5] = 0.06$
$P[X = 6] = 0.04$

- (a) {Sono in uso al massimo tre linee}

	$P[X \leq 3] = 0.7$

- (b) {Sono in uso meno di tre linee}

	$P[X < 3] = 0.45$

- \(c\) {Sono in uso almeno tre linee}

	$P[X \geq 3] = 1 - P[X < 3] = 1- 0.45 = 0.55$

- (d) {sono in uso tra due e cinque linee, comprese}

	$P[2\leq X \leq 5] = P[X \leq 5] - P[X < 2] =0.96 - 0.25 = 0.71$

- (e) {non sono in uso tra due e quattro linee, comprese}

	se $x$ sono le linee in uso
	definiamo $6-x$ come le linee non in uso
	$P[2\leq 6-x \leq 4]$
	$P[2-6\leq -x \leq 4-6]$
	$P[-4\leq -x \leq -2]$
	$P[2\leq x \leq 4]$
	$P[x \leq 4] - P[x < 2] = 0.9 - 0.25 = 0.65$
	
- (f) {almeno quattro linee sono libere}

	avere almeno quattro linee libere è come dire che ci sono almeno 2 linee usate, quindi

	$P[X \geq 2] = 0.45$


## Domanda 7
Sia X una variabile aleatoria continua con funzione di ripartizione:

$$F_X(x) = \begin{cases}
0 &x ≤ 0\\
\frac{x}{4}[1 + \ln \frac{a}{x}] & 0 ≤ x ≤ 4\\
1 & x \geq 4
\end{cases}$$

dove $\ln(x)$ indica il logaritmo naturale di x.
Trovare:
- (a) Il valore di $a$

	$\frac{4}{4}[1 + \ln\frac{a}{4}] = 1$
	$1 + \ln\frac{a}{4} = 1$
	$\ln\frac{a}{4} = 0$
	$\ln\frac{a}{4} = 0$
	$\ln a - \ln 4 = 0$
	$\ln a  = \ln 4$
	$a = 4$

- (b) $P[X ≤ 1]$

	$\frac{1}{4}[1 + \ln \frac{4}{1}]$
	$\frac{1}{4}[1 + \ln 4]$
	$\frac{1}{4} + \frac{\ln 4}{4} = 0.567$
	
- \(c\) La funzione di densità di X

	$\frac{x}{4}[1 + \ln \frac{4}{x}] \frac{d}{dx}=$
	$=  [\frac{x}{4}+ \frac{x}{4}\ln(\frac{4}{x})] \frac{d}{dx}=$
	$=  \frac{1}{4} + [\frac{x}{4}\ln(\frac{4}{x})] \frac{d}{dx}=$
	$=  \frac{1}{4} + \frac{1}{4}[x\ln(\frac{4}{x})] \frac{d}{dx}=$
	$=  \frac{1}{4} + \frac{1}{4}[\ln(\frac{4}{x}) - 1]]=$
	$=  \frac{1}{4} + \frac{1}{4}\ln(\frac{4}{x}) - \frac{1}{4}=$
	$= \frac{1}{4}\ln(\frac{4}{x})$

## Domanda 8

Un rivenditore di elettrodomestici vende tre diversi modelli di congelatori con $13.5$, $15.9$ e $19.1$ piedi cubi di capacità, rispettivamente.
Sia X la capacità (non nota e quindi casuale) del congelatore acquistato dal prossimo cliente e supponiamo che X abbia funzione di probabilità: 

| $x$ | $13.5$ | $15.9$ | $19.1$ |
|--|--|--|--|
| $p(x)$ | 0.2 | 0.5 | 0.3 |

- (a)Trovare $E[X]$, $E[X^2]$, $\text{Var}[X]$

	$E[X] = 13.5 \cdot 0.2 + 15.9 \cdot 0.5 + 19.1 \cdot 0.3 =16.38$
	$E[X^2] = 13.5^2 \cdot 0.2 + 15.9^2 \cdot 0.5 + 19.1^2 \cdot 0.3 =272.298$
	$\text{Var}[X] = 13.5^2 \cdot 0.2 + 15.9^2 \cdot 0.5 + 19.1^2 \cdot 0.3 - (16.38)^2 =3.9936$

- (b) Se il prezzo di un congelatore con capacità di X piedi cubi è 17X + 180, qual è il prezzo previsto pagato dal prossimo cliente per l’acquisto di un congelatore?

	Il prezzo medio previsto pagato dal prossimo cliente è $17 \cdot E[X] + 180$
$17 \cdot 16.38 + 180 = 458.46$

- \(c\) La deviazione standard o scarto quadratico medio di una variabile casuale si definisce come la radice quadrata della sua varianza. Qual è la deviazione standard del prezzo $17X + 180$ pagato dal prossimo cliente?

	$\text{sd}[17X + 180] = \sqrt{\text{Var}[17X + 180]}$
	
	Utilizzando la proprietà della varianza in cui $\text{Var}[aX + b] = a^2\text{Var}[X]$
	
	$\text{sd}[17X + 180] = \sqrt{17^2\text{Var}[X]}$
	$= 17\sqrt{\text{Var}[X]}$
	$= 17\sqrt{3.9936} = 33.97$

- (d) Supponiamo che, sebbene la capacità nominale di un congelatore è X, quella effettiva sia
$h(X) = X − 0.01X^2$.
Qual è la capacità effettiva prevista per il congelatore acquistato dal prossimo cliente? Soluzione: 13.657

	$E[X - 0.01X^2] =E[X] - 0.01E[X^2]$
	$=16.38 - 0.01\cdot272.298 =13.657$
