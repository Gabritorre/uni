# Esercizi variabili casuali

## Domanda 1

Un’urna contiene tre palline numerate da 1 a 3. Si estraggono con reinserimento due palline e sia $X$ la variabile aleatoria che indica la differenza in modulo dei numeri estratti. Si determini:
- (a) La funzione di probabilità di $X$, con relativa rappresentazione grafica
	
	possiamo dire che "la differenza in modulo dei numeri estratti" rappresenta la "distanza" tra i due numeri estratti.
	La variabile aleatoria $X$ può assumere i seguenti valori: $\{0, 1, 2\}$
	le possibili combinazioni di estrazione sono 9: $\{(1, 1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)\}$
	Le probabilità dei valori che può assumere la variabile aleatoria sono:
	-	$P[x = 0] = \frac{3}{9}$
	-	$P[x = 1] = \frac{4}{9}$
	-	$P[x = 2] = \frac{2}{9}$
![enter image description here](https://i.ibb.co/j3CnFqx/image.png)


- (b) $P[X \leq 2]$
	
	$P[X \leq 2] = \frac{3}{9} + \frac{4}{9} + \frac{2}{9} = \frac{9}{9} = 1$
- \(c\) $P[X < 2]$

	$P[X < 2] = \frac{3}{9} + \frac{4}{9} = \frac{7}{9}$
	
- (d) $P[2 \leq X < 5]$

	$P[2 \leq X < 5] = \frac{2}{9} + 0 + 0 = \frac{2}{9}$
	oppure
	dato che la probabilità che $X < 5$ è 1
	possiamo fare $1 - P[X <2] = 1 - \frac{7}{9} = \frac{2}{9}$

## Domanda 2

Il numero giornaliero di interruzioni dei servizi di rete ha la seguente distribuzione di probabilità:
$P[X = 0] = 0.7$
$P[X = 1] = 0.2$
$P[X = 2] = 0.1$

Una piccola azienda di commercio online stima che, ad ogni interruzione, perde 500$.
Trovare la funzione di probabilità (con relativa rappresentazione grafica) delle perdite giornaliere dovute alle interruzioni di rete che subisce questa azienda.

I dati del problema ci dicono che in una giornata possiamo avere: 0 interruzioni, 1 interruzione oppure 2 interruzioni.
Lavorando in funzione di quanti soldi l'azione può perdere giornalmente, dobbiamo chiedere quale è la probabilità di perdere: 0\$, 500\$ oppure 1000\$

![enter image description here](https://i.ibb.co/vD7HRmS/image.png)

## Domanda 3

Sia data una variabile aleatoria X la cui funzione di densità è $f(x) = ke^{−|x|}$ per ogni $x \in \mathbb{R}$.
- (a) Determinare la costante di normalizzazione $k$.
	
	La domanda ci sta chiedendo di trovare il valore di $k$ per cui la l'area sotto tutta la funzione risulta essere uguale a 1 (Stiamo parlando della seconda proprietà per verificare se una funzione è una funzione di densità)

	Per trovare l'area della funzione facciamo un integrale definito.
	Dato che il dominio della funzione è tutto $\mathbb{R}$ dobbiamo fare l'integrale da meno infinito a più infinito:
	$$\int_{-\infty}^{+\infty}ke^{-|x|}\, dx$$
	
	$$k\int_{-\infty}^{+\infty}e^{-|x|}\, dx$$
	
	abbiamo che:
	
	$$e^{-|x|} =\begin{cases}
	e^{-x} & \text{se } x \geq 0 \\
	e^{x} & \text{se } x < 0
	\end{cases}$$

quindi possiamo dividere l'integrale in due:
	$$k\left(\int_{-\infty}^{0}e^{x}\, dx + \int_{0}^{+\infty}e^{-x}\, dx\right)$$
	
$$k\left(\left[e^x\right]^{0}_{-\infty} + \left[-e^{-x}\right]^{+\infty}_{0}\right)$$

$$k\left(\left[e^0 - e^{-\infty}\right] + \left[-e^{-(+\infty) } - (-e^{0})\right]\right)$$

$$k\left(\left[1 - 0\right] + \left[0 + 1\right]\right)$$

$$2k$$

per trovare il valore di $k$ dobbiamo porre il risultato uguale a 1

$$2k = 1$$

$$k = \frac{1}{2}$$

- (b) Calcolare $P[X ≤ x]$ per un qualsiasi valore di x ∈ R.

ponendo $k = \frac{1}{2}$ ora la nostra funzione è 

$$f(x) = \frac{1}{2}e^{−|x|}$$

nelle funzioni continue la formula della funzione di ripartizione è la seguente

$$\int_{-\infty}^{x}f(t) \, dt$$

nel nostro caso:

$$F(x) = \begin{cases}
\int_{-\infty}^{x}\frac{1}{2}e^t \, dt& \text{se } x \leq 0 \\
\int_{-\infty}^{0}\frac{1}{2}e^t \, dt + \int_0^{x}\frac{1}{2}e^{-t} \, dt & \text{altrimenti}
\end{cases}$$

per $x \leq 0$ abbiamo:

$$\frac{1}{2}\left[e^t\right]_{-\infty}^{x}$$

$$\frac{1}{2}\left[e^x - e^{-\infty}\right]$$

$$\frac{1}{2}e^x$$

mentre per $x > 0$ abbiamo:

$$\frac{1}{2}\left(\left[e^t\right]_{-\infty}^{0} +\left[-e^{-t}\right]_{0}^{x} \right)$$

$$\frac{1}{2}\left(1 +\left[-e^{-x} - (-e^0)\right] \right)$$

$$\frac{1}{2}\left(1 +\left[-e^{-x} + 1\right] \right)$$

$$\frac{1}{2}\left(2 - e^{-x} \right)$$

$$1-\frac{1}{2}e^{-x}$$

## Domanda 4

Determinare il valore di $k$ per cui le seguenti funzioni sono delle densità:
- (a) $f(x) = k \sin(x), 0 < x < \frac{\pi}{4}$
	
	 $$\int_{0}^{\frac{\pi}{4}} k\sin(x) \, dx$$
 
	 $$k\int_{0}^{\frac{\pi}{4}}\sin(x) \, dx$$
 
	 $$k\left[-\cos(x)\right]_{0}^{\frac{\pi}{4}}$$
 
	 $$k\left[-\cos\left(\frac{\pi}{4}\right) - \left( - \cos(0)\right)\right]$$

	 $$k\left[-\frac{\sqrt{2}}{2} + 1\right]$$
 
	 $$k\left[\frac{-\sqrt{2} + 2}{2} \right]$$

	pongo l'equazione uguale a 1

	 $$k\left[\frac{-\sqrt{2} + 2}{2} \right] = 1$$

	 $$k = \frac{2}{-\sqrt{2} + 2}$$


- (b) $f(x) = k, x \in (−1, 1)$

	$$\int_{-1}^{1}k\, dx$$

	$$k\int_{-1}^{1}1\, dx$$

	$$k[x]_{-1}^{1}$$

	$$k[1 - (-1)]$$

	pongo a 1

	$$2k = 1$$

	$$k = \frac{1}{2}$$


- \(c\) $f(x) = kx^2 , x \in (−k, k)$

	$$\int_{-k}^{k}kx^2 \, dx$$

	$$k\int_{-k}^{k}x^2 \, dx$$

	$$k\left[\frac{x^3}{3}\right]_{-k}^{k}$$

	$$k\left[\frac{k^3}{3} - \left(\frac{(-k)^3}{3}\right)\right]$$

	$$k\left[\frac{k^3}{3} + \frac{k^3}{3}\right]$$

	pongo uguale a 1

	$$k\left[\frac{k^3 + k^3}{3}\right] = 1$$

	$$k\left[\frac{2k^3}{3}\right] =1$$

	$$\frac{2k^4}{3} =1$$

	$$k^4 =\frac{3}{2}$$

	$$k =\sqrt[4]{\frac{3}{2}}$$


## Domanda 5

X indica la vita in ore di una lampadina ed è distribuita secondo la densità 
$$f(x) = \frac{c}{x^2} \bm{1}_{(100,+\infty)}(x)$$
- (a) Trovare il valore di $c$ per cui questa funzione è una densità di probabilità 

$$\int_{100}^{+\infty}\frac{c}{x^2}\, dx$$

$$c\int_{100}^{+\infty}\frac{1}{x^2}\, dx$$

$$c\left[-\frac{1}{x}\right]_{100}^{+\infty}$$

$$c\left[-\frac{1}{+\infty} - \left(-\frac{1}{100}\right)\right]$$

$$c\left[0 +\frac{1}{100}\right]$$

pongo uguale a 1

$$\frac{c}{100} = 1$$

$$c = 100$$

- (b) Calcolare P[X > 500]

calcoliamo la funzione di ripartizione (sapendo che $c = 100$)

$$F(x) = \int_{100}^{x}\frac{100}{t^2}\, dt$$

$$\left[-\frac{100}{t}\right]_{100}^{x}$$

$$\left[-\frac{100}{x} - \left(-\frac{100}{100}\right)\right]$$

$$\left[-\frac{100}{x} + 1\right]$$

$$\frac{-100 + x}{x}$$


dato che vogliamo la probabilità di $x$ maggiori di 500, utilizziamo la probabilità del complementare

$$P[X > 500] = 1- P[X \leq 500]$$

$$= 1- \frac{-100 + 500}{500}$$

$$= 1- \frac{400}{500}$$

$$= 1- \frac{4}{5} = \frac{1}{5}$$


