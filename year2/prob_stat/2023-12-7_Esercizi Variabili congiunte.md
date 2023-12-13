# Esercizi su variabili congiunte

## Domanda 1

Un provider di servizi Internet addebita ai propri clienti per l’utilizzo di Internet una cifra proporzionale al tempo in ore di utilizzo, arrotondandolo all’ora più vicina, e dipendente dalla fascia oraria. La distribuzione congiunta del tempo utilizzato $X$ in ore e il prezzo $Y$ di ogni ora in centesimi viene data nella tabella sottostante.

![enter image description here](https://i.ibb.co/pynBHGx/image.png)


A ciascun cliente vengono addebitati $Z = X\cdot Y$ centesimi, cioè il numero di ore moltiplicato per il prezzo di ogni ora.
- (a) Trovare la distribuzione di $Z$.

	| $Z$ | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 |
	|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
	| $p(z)$ | $p(1,1)=\\0$ | $p(1,2) + p(2,1)=\\0.06 + 0.10=\\0.16$| $p(1,3) + p(3,1)=\\0.06 + 0.40=\\0.46$ | $p(1,4)+p(2,2)=\\0.10 + 0.10=\\0.20$ | $p(2,3)+p(3,2)=\\0.04+0.10=\\0.14$ | $p(2,4)=\\0.04$ | $p(3,3)=\\0$ | $p(3,4)=\\0$ |


- (b) Trovare il valore medio e la varianza di $Z$.

	$E[Z] = (1 \cdot 0) + (2 \cdot 0.16) + (3 \cdot 0.46) + (4 \cdot 0.20) + (6 \cdot 0.14) + (8\cdot 0.04)+(9\cdot 0) + (12 \cdot 0) = 3.66$

	$\text{Var}[Z] = (1^2 \cdot 0) + (2^2 \cdot 0.16) + (3^2 \cdot 0.46) + (4^2 \cdot 0.20) + (6^2 \cdot 0.14) + (8^2\cdot 0.04)+(9^2\cdot 0) + (12^2 \cdot 0) - 3.66^2 = 2.1844$

- \(c\) Trovare la distribuzione marginale di $X$.
	
	Consiste nel sommare le probabilità per colonna
	| $X$ | 1 | 2 | 3 | 4
	|:--:|:--:|:--:|:--:|:--:|
	| $p_X(x)$ | $p(1,1)+p(2,1)+p(3,1)=\\0+0.10+0.40=\\0.5$ | $p(1,2) + p(2,2)+p(3,2)=\\0.06 + 0.10+0.10=\\0.26$| $p(1,3) + p(2,3)+p(3,3)=\\0.06 + 0.04+0=\\0.10$ | $p(1,4)+p(2,4)+p(3,4)=\\0.10 + 0.04+0=\\0.14$ |

- (d) Trovare il valore medio e la varianza di $X$.

	$E[X] = (1\cdot 0.5)+(2 \cdot 0.26)+ (3\cdot 0.10) + (4\cdot 0.14) =1.88$
	
	$\text{Var}[X] = (1^2\cdot 0.5)+(2^2 \cdot 0.26)+ (3^2\cdot 0.10) + (4^2\cdot 0.14) - 1.88^2 =1.1456$

- (e) Trovare la distribuzione marginale di $Y$.

	Consiste nel sommare le probabilità per riga
	| $Y$ | 1 | 2 | 3 |
	|:--:|:--:|:--:|:--:|
	| $p_Y(y)$ | $p(1,1)+p(1,2)+p(1,3)+p(1,4)=\\0+0.06+0.06+0.10=\\0.22$ | $p(2,1) + p(2,2)+p(2,3)+p(2,4)=\\0.10 + 0.10+0.04+0.04=\\0.28$| $p(3,1) + p(3,2)+p(3,3)+p(3,4)=\\0.40 + 0.10+0+0=\\0.50$ | $p(1,4)+p(2,4)+p(3,4)=\\0.10 + 0.04+0=\\0.14$ |

- (f) Trovare il valore medio e la varianza di $Y$.

	$E[Y] = (1\cdot 0.22)+(2 \cdot 0.28)+ (3\cdot 0.50) =2.28$
	
	$\text{Var}[Y] = (1^2\cdot 0.22)+(2^2 \cdot 0.28)+ (3^2\cdot 0.50) - 2.28^2 =0.6416$
	
- (g) Trovare la distribuzione del tempo di utilizzo nella fascia in cui il prezzo è uguale a 2.

	$P[X|Y=y] = \frac{P[X, Y = y]}{P[Y=y]}$

	| $X$ | 1 | 2 | 3 | 4
	|:--:|:--:|:--:|:--:|:--:|
	| $P[X\vert Y=2]$ | $\frac{p(2,1)}{p_Y(2)}=\\\frac{0.10}{0.28}=\\0.357$ | $\frac{p(2,2)}{p_Y(2)}=\\\frac{0.10}{0.28}=\\0.357$| $\frac{p(2,3)}{p_Y(2)}=\\\frac{0.04}{0.28}=\\0.143$ | $\frac{p(2,4)}{p_Y(2)}=\\\frac{0.04}{0.28}=\\0.143$ |
	
## Domanda 2

Siano $X$ e $Y$ il numero di guasti hardware in due laboratori informatici in un dato mese. La distribuzione congiunta di $X$ e $Y$ viene data nella tabella sottostante. 

![enter image description here](https://i.ibb.co/3fqzYcn/image.png)

- (a) Trovare la distribuzione marginale di $X$.

	| $X$ | 0 | 1 | 2 |
	|:--:|:--:|:--:|:--:|
	| $p_X(x)$ | $p(0,0)+p(1,0)+p(2,0)=\\0.52+0.14+0.06=\\0.72$ | $p(0,1) + p(1,1)+p(2,1)=\\0.20 + 0.02+0.01=\\0.23$| $p(0,2) + p(1,2)+p(2,2)=\\0.04 + 0.01+0=\\0.05$ |

- (b) Trovare il valore medio e la varianza di $X$.

	$E[X] = (0\cdot 0.72)+(1 \cdot 0.23)+ (2\cdot 0.05) =0.33$
	
	$\text{Var}[X] = (0^2\cdot 0.72)+(1^2 \cdot 0.23)+ (2^2\cdot 0.05) - 0.33^2 = 0.3211$

- \(c\) Trovare la distribuzione marginale di $Y$.

	| $Y$ | 0 | 1 | 2 |
	|:--:|:--:|:--:|:--:|
	| $p_Y(y)$ | $p(0,0)+p(0,1)+p(0,2)=\\0.52+0.20+0.04=\\0.76$ | $p(1,0) + p(1,1)+p(1,2)=\\0.14 + 0.02+0.01=\\0.17$| $p(2,0) + p(2,1)+p(2,2)=\\0.06 + 0.01 + 0=\\0.07$ |

- (d) Trovare il valore medio e la varianza di $Y$.

	$E[Y] = (0\cdot 0.76)+(1 \cdot 0.17)+ (2\cdot 0.07) =0.31$
	
	$\text{Var}[Y] = (0^2\cdot 0.76)+(1^2 \cdot 0.17)+ (2^2\cdot 0.07) - 0.31^2 =0.3539$

-  (e) Calcolare la probabilità che si verifichi almeno un guasto hardware.

	$P[X +Y \geq 1] = 1-P[X+Y = 0] = 1-0.52 = 0.48$

- (f) Le variabili $X$ e $Y$ sono indipendenti?

	$0.52 = 0.72\cdot 0.76?$ non vale
	
	possiamo già concludere senza ulteriori confronti che non sono indipendenti

## Domanda 3

In un piccolo laboratorio informatico il numero di guasti hardware $X$ e il numero di errori software $Y$ in un dato giorno hanno la seguente distribuzione congiunta $p(x, y): p(0, 0) = 0.6, p(0, 1) = 0.1, p(1, 0) = 0.1, p(1, 1) = 0.2$. Sulla base di queste informazioni:

![enter image description here](https://i.ibb.co/ctDNwKk/image.png)


- (a) Trovare la distribuzione marginale di $X$.

	| $X$ | 0 | 1 |
	|:--:|:--:|:--:|
	| $p_X(x)$ | $p(0,0)+p(1,0)=\\0.60+0.10=\\0.70$ | $p(0,1) + p(1,1)=\\0.10 + 0.20=\\0.30$|

- (b) Trovare il valore medio di $X$.

	$E[X] = (0\cdot 0.70)+(1 \cdot 0.30) =0.30$

- \(c\) Trovare la distribuzione marginale di $Y$.
	
	| $Y$ | 0 | 1 |
	|:--:|:--:|:--:|
	| $p_Y(y)$ | $p(0,0)+p(0,1)=\\0.60+0.10=\\0.70$ | $p(1,0) + p(1,1)=\\0.10 + 0.20=\\0.30$|

- (d) Trovare il valor medio di $Y$ .

	$E[Y] = (0\cdot 0.70)+(1 \cdot 0.30) =0.30$

- (e) Le variabili $X$ e $Y$ sono indipendenti?

	$0.60 = 0.70\cdot 0.70?$ non vale
	possiamo già concludere senza ulteriori confronti che non sono indipendenti

- (f) Calcolare il coefficiente di correlazione fra $X$ e $Y$.

	$E[XY] = (0 \cdot 0 \cdot 0.60)+ (0 \cdot 1 \cdot 0.10) + (1\cdot 0 \cdot 0.10) + (1\cdot 1\cdot0.20) = 0.20$

	$\text{Cov}[X,Y] = 0.20 - 0.30\cdot 0.30 =0.11$

	$\text{Var}[X] =(0^2\cdot 0.70)+(1^2 \cdot 0.30) - 0.30^2 =0.21$

	$\text{Var}[Y] =(0^2\cdot 0.70)+(1^2 \cdot 0.30) - 0.30^2 =0.21$

	$\text{Cor}[X,Y] = \frac{0.11}{\sqrt{0.21\cdot 0.21}} =0.5238$

- (g) Calcolare $E(X + Y )$, cioè il numero medio totale di errori durante un giorno.

	$E[X + Y] = E[X] + E[Y] = 0.3 + 0.3 = 0.6$

- (h) Trovare la distribuzione di $X + Y$, cioè del numero totale di errori durante un giorno

	| $X+Y$ | 0 | 1 | 2 |
	|:--:|:--:|:--:|:--:|
	| $P[X + Y]$ | $p(0,0)=\\0.60$ | $p(1,0) + p(0,1)=\\0.10 + 0.10=\\0.20$|$p(1,1)=\\0.20$|

## Domanda 4

Si consideri un’urna contenente 3 palline numerate da 1 a 3. L’esperimento consiste nell’estrarre 2 palline senza reinserimento. Sia $X$ la variabile casuale associata al più grande dei numeri estratti e sia $Y$ la variabile casuale somma dei due numeri estratti. Trovare:
- (a) la funzione di probabilità congiunta di $X$ e $Y$;

	Le possibili estrazioni sono 6: $(1,2), (1,3), (2, 1), (2, 3), (3, 1), (3, 2)$
	$X$ può variare da 1 a 3
	$Y$ può variare da 3 a 5
	
	$P(X=1, Y =3) = 0$
	$P(X=1, Y =4) = 0$
	$P(X=1, Y =5) = 0$

	$P(X=2, Y =3) = \frac{2}{6}$
	$P(X=2, Y =4) = 0$
	$P(X=2, Y =5) = 0$

	$P(X=3, Y =3) = 0$
	$P(X=3, Y =4) = \frac{2}{6}$
	$P(X=3, Y =5) = \frac{2}{6}$
	
	![enter image description here](https://i.ibb.co/4t2YZK1/image.png)

- (b) la funzione di probabilità condizionata di $Y$ dato $X = 3$ e la funzione di ripartizione condizionata di $Y$ dato $X = 3$

	Fissando $X = 3$ ci rimangono le estrazioni seguenti 4 estrazioni: $(1,3), (2, 3), (3, 1), (3, 2)$

	$P[Y|X=3] =\frac{P[Y=y|X=3]}{P[X=3]}$

	Mi calcolo prima la probabilità marginale di $X$ (anche se ci interessa solo il caso $X = 3$)
	| $X$ | 1 | 2 | 3 |
	|:--:|:--:|:--:|:--:|
	| $p_X(x)$ | $p(3,1)+p(4,1)+p(5,1)=\\0 + 0 + 0=\\0$ | $p(3,2) + p(4,2)+p(5,2)=\\\frac{2}{6} + 0 + 0=\\\frac{2}{6}$| $p(3,3) + p(4,3)+p(5,3)=\\0 + \frac{2}{6} + \frac{2}{6}=\\\frac{4}{6}$ |

	Calcoliamo la probabilità condizionata:
	| $Y$ | 3 | 4 | 5 |
	|:--:|:--:|:--:|:--:|
	| $P[Y\vert X=3]$ | $\frac{p(3,3)}{p_X(3)}=\\\frac{0}{\frac{4}{6}}=\\0$ | $\frac{p(4,3)}{p_X(3)}=\\\frac{\frac{2}{6}}{\frac{4}{6}}=\\\frac{1}{2}$| $\frac{p(5,3)}{p_X(3)}=\\\frac{\frac{2}{6}}{\frac{4}{6}}=\\\frac{1}{2}$ |

	Calcoliamo la funzione di ripartizione:
	| $Y$ | $Y <3$ | $3\leq Y<4$ | $4\leq Y< 5$ | $Y \leq 5$ |
	|:--:|:--:|:--:|:--:|:--:|
	| $F[Y\vert X=3]$ | $0$ | $0$| $\frac{2}{4} = \frac{1}{2}$ | $\frac{4}{4} = 1$ |

- \(c\) la covarianza e la correlazione di $X$ e $Y$

	Mi calcolo prima la probabilità marginale di $Y$
	
	| $Y$ | 3 | 4 | 5 |
	|:--:|:--:|:--:|:--:|
	| $p_Y(y)$ | $0+\frac{2}{6}+0=\\\frac{2}{6}$ | $0+0+\frac{2}{6}=\\\frac{2}{6}$| $0+0+\frac{2}{6}=\\\frac{2}{6}$ |
	
	$E[X] =(1\cdot 0) + (2 \cdot \frac{2}{6}) + (3\cdot \frac{4}{6}) =\frac{8}{3}$
	$E[Y] = (3 \cdot \frac{2}{6}) + (4 \cdot \frac{2}{6}) + (5 \cdot \frac{2}{6}) =4$
	$E[XY] = (3 \cdot 2 \cdot \frac{2}{6}) + (4 \cdot 3 \cdot \frac{2}{6}) + (5 \cdot 3 \cdot\frac{2}{6}) =11$

	$\text{Cov}[X,Y]= 11 - \frac{8}{3}\cdot 4 = \frac{1}{3}$

	$\text{Var}[X] = (1^2\cdot 0) + (2^2 \cdot \frac{2}{6}) + (3^2\cdot \frac{4}{6}) - (\frac{8}{3})^2 =\frac{2}{9}$
	$\text{Var}[Y] =(3^2 \cdot \frac{2}{6}) + (4^2 \cdot \frac{2}{6}) + (5^2 \cdot \frac{2}{6}) - 4^2=\frac{2}{3}$

	$\text{Cor}[X,Y] = \frac{\frac{1}{3}}{\sqrt{\frac{2}{9} \cdot \frac{2}{3}}} =\frac{\sqrt{3}}{2}$

- (d) valore atteso e varianza della variabile casuale $Z = 2X + 3Y$.

	**valore atteso:**
	$E[2X + 3Y] = (2\cdot 2 + 3 \cdot 3)\cdot \frac{2}{6} + (2\cdot 3 + 3 \cdot 4)\cdot \frac{2}{6} + (2\cdot 3 + 3 \cdot 5)\cdot \frac{2}{6} = \frac{104}{6} = \frac{52}{3}$

	oppure sfruttando le proprietà del valore atteso
	
	$E[2X + 3Y] =E[2X] + E[3Y] = 2E[X] + 3E[Y] = 2\cdot \frac{8}{3} + 3 \cdot4 = \frac{52}{3}$

	**varianza:**
	
	$\text{Var}[2X + 3Y] =(2\cdot 2 + 3 \cdot 3)^2\cdot \frac{2}{6} + (2\cdot 3 + 3 \cdot 4)^2\cdot \frac{2}{6} + (2\cdot 3 + 3 \cdot 5)^2\cdot \frac{2}{6} - (\frac{52}{3})^2 = \frac{98}{9}$

	oppure sfruttando le proprietà della varianza
	$\text{Var}[2X + 3Y] = 2^2\text{Var}[X] + 3^2\text{Var}[Y] + 2(2 \cdot 3) \text{Cov}[X,Y]$
- (e) $X$ e $Y$ sono indipendenti?

	$\frac{2}{6} = \frac{2}{6}\cdot \frac{2}{6}?$ non vale
	
	possiamo già concludere senza ulteriori confronti che non sono indipendenti

## Domanda 5

Sia data la funzione $p_{X,Y} (x, y) = k(2y + x)$, con $x = 2, 4$ e $y = 0, 1, 2$.
- (a) Determinare il valore k affinché $p_{X,Y} (x, y)$ sia una funzione di probabilità congiunta.

	![enter image description here](https://i.ibb.co/RcSrwHm/image.png)

	Determiniamo le probabilità marginali

	marginale di $X$
	| $X$ | 2 | 4 |
	|:--:|:--:|:--:|:--:|
	| $p_X(x)$ | $2k + 4k + 6k=\\12k$ | $4k + 6k + 8k=\\18k$|
	
	marginale di $Y$
	
	| $Y$ | 0 | 1 | 2 |
	|:--:|:--:|:--:|:--:|
	| $p_Y(y)$ | $2k + 4k=\\6k$ | $4k + 6k=\\10k$| $6k + 8k=\\14k$ |

	Consideriamo la somma di una delle due marginali, ad esempio la marginale di $X$, essa dobbiamo porla uguale ad 1
	$12k + 18k = 1$
	$30k = 1$
	$k = \frac{1}{30}$

- (b) Determinare $P[Y ≥ X]$.

	$P[Y \geq X]$ avviene sono quando $Y = 2$ e $X = 2$
	$P[2 \geq 2] = P[X = 2, Y = 2] = 6 \cdot k = 6 \cdot \frac{1}{30} = \frac{1}{5}$

- \(c\) Calcolare i valori della funzione di ripartizione $F_{X,Y} (2, 1), F_{X,Y} (4, 1)$

	$F_{X,Y} (2, 1) = P[X \leq 2, Y \leq 1] = P[X = 2, Y = 0] + P[X = 2, Y = 1] = \frac{2}{30} + \frac{4}{30} = \frac{1}{5}$
	$F_{X,Y} (4, 1) = P[X \leq 4, Y \leq 1] = P[X = 4, Y = 0] + P[X = 4, Y = 1] +  P[X = 2, Y = 0] + P[X = 2, Y = 1]= \frac{6}{30} +\frac{4}{30} + \frac{2}{30} + \frac{4}{30} = \frac{16}{30}$

- (d) Calcolare $p_{X|Y} (x|1)$

	$P[X = x| Y = 1] = \frac{P[X=x|Y=1]}{P_Y[Y=1]}$

	$P[X = 2| Y = 1] = \frac{P[X=2|Y=1]}{P_Y[Y=1]}=\frac{\frac{4}{30}}{\frac{10}{30}} = \frac{4}{10} = \frac{2}{5}$

	$P[X = 4| Y = 1] = \frac{P[X=4|Y=1]}{P_Y[Y=1]}=\frac{\frac{6}{30}}{\frac{10}{30}} = \frac{6}{10} = \frac{3}{5}$

- (e) Valutare se $X$ e $Y$ sono indipendenti.

	$\frac{2}{30} = \frac{12}{30}\cdot \frac{6}{30}?$ non vale
	
	possiamo già concludere senza ulteriori confronti che non sono indipendenti

## Domanda 6

Le due variabili casuali $X$ e $Y$ hanno funzione di densità congiunta $f_{X,Y} (x, y) = 12xy(1 − y)$, con $0 < x < 1$ e $0 < y < 1$.
Trovare le funzioni di densità marginali di X e Y e verificare se le due variabili sono indipendenti.

$f_Y(y) = \int_{0}^{1}12xy(1-y) \, dx =12y(1-y)[\frac{x^2}{2}]^1_0 =12y(1-y)\frac{1}{2} = 6y(1-y)$

$f_X(x) = \int_{0}^{1}12xy(1-y) \, dy = 12x\int_0^1y(1-y)\,dy = 12x\int_0^1y-y^2\,dy =12x\left[\frac{y^2}{2}-\frac{y^3}{3}\right]_0^1 = 2x$

Per verificare l'indipendenza deve valere che

$f_{X,Y} (x, y) = f_Y(y) \cdot f_X(x)$

nel nostro caso abbiamo
$12xy(1 − y) = 6y(1-y) \cdot 2x$ 

Quindi le variabili sono indipendenti

## Domanda 7

Siano $X$ e $Y$ due variabili casuali con densità congiunta $f_{X,Y} (x, y) = k$, per $0 < x < 1$ e $0 < y < x$.
- (a) Determinare la costante $k$ affinché $f_{X,Y} (x, y)$ sia una funzione di densità.

	dobbiamo porre l'integrale sul dominio uguale ad 1

	$\int_0^1\int_0^x k\,dy\,dx =1$
	$\int_0^1 [ky]_0^x\,dx =1$
	$\int_0^1 kx\,dx =1$
	$[k\frac{x^2}{2}]_0^1 =1$
	$k\frac{1}{2} =1$
	$k =2$

- (b) Determinare la distribuzione marginale di $X$ e la distribuzione condizionata di $X$ dato $Y = y$

	marginale di $X$
	$f_X(x) = \int_{0}^{x}2 \, dy = 2x$
	marginale di $Y$
	$f_Y(y) = \int_{y}^{1}2 \, dx = [2x]_y^1 =2-2y$

	$f_{X|Y} = \frac{f_{X,Y} (x, y)}{f_Y(y)} = \frac{2}{2-2y} = \frac{1}{1-y}$

- \(c\) Verificare se $X$ e $Y$ sono indipendenti.

	Per verificare l'indipendenza deve valere che

	$f_{X,Y} (x, y) = f_Y(y) \cdot f_X(x)$

	nel nostro caso abbiamo
	$2 = 2x \cdot (2-2y)$ 
	$2 = 4x - 4xy$
	esistono dei valori di x e y che rendono falsa l'uguaglianza, quindi le variabili non sono indipendenti
	(si poteva anche intuire facilmente dal dominio di definizione di $y$ in cui è presente la $x$: $0 < y < x$)

## Domanda 8

Siano $X$ e $Y$ due variabili casuali con funzione di densità congiunta
$$f_{X,Y} (x, y) = \frac{1}{8}(6-x-y)\bm{1}_{(0,2)}(x)\bm{1}_{(2,4)}(y)$$
Trovare le distribuzioni marginali di $X$ e $Y$ e la funzione di densità condizionata di $X$ dato $Y = y, y \in (2, 4)$.

marginale di $X$
$f_X(x) = \int_{2}^{4}\frac{1}{8}(6-x-y) \, dy =\frac{1}{8}\int_{2}^{4}6-x-y\, dy =\frac{1}{8}\left[6y-xy-\frac{y^2}{2}\right]_2^4 = \frac{1}{8}(24-4x-8-(12-2x-2)) = \frac{3-x}{4}$
marginale di $Y$
$f_Y(y) = \int_{0}^{2}\frac{1}{8}(6-x-y) \, dx =\frac{1}{8}\int_{0}^{2}6-x-y\, dy =\frac{1}{8}\left[6x-\frac{x^2}{2}-xy\right]_0^2 = \frac{1}{8}(12 - 2-2y) = \frac{5-y}{4}$


$f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)} = \frac{\frac{1}{8}(6 - x - y)}{\frac{5-y}{4}}=\frac{6-x-y}{2(5-y)}$

## Domanda 9

Si consideri la seguente densità bivariata
$$f_{X,Y}(x, y) = \begin{cases}
k(x + y) & 0 \leq x \leq 2, 0 \leq y \leq 2\\
0 & \text{altrimenti}
\end{cases}$$

- (a) Determinare la costante di normalizzazione $k$

	$1 = \int_0^2 \int_0^2 k(x+y) \, dx \, dy$
	$1 = k \int_0^2 [\frac{x^2}{2}+xy]_0^2 \, dy$
	$1 = k \int_0^2 2 +2y\, dy$
	$1 = k [2y +2\frac{y^2}{2}]_0^2$
	$1 = k (4 + 4)$
	$1 = 8k$
	$k=\frac{1}{8}$

- (b) Qual è la probabilità che $X$ sia maggiore di $Y$?

	![enter image description here](https://i.ibb.co/7Qtbnb7/image.png)
fissato un valore $x$ il range di valori che assume $y$ va da $0$ a $x$

	$P[X>Y] = \int_0^2\int_0^x \frac{1}{8}(x+y)\, dx\,dy$
	$= \frac{1}{8}\int_0^2\int_0^x x+y\, dy\,dx$
	$= \frac{1}{8}\int_0^2 [xy+\frac{y^2}{2}]_0^x\,dx$
	$= \frac{1}{8}\int_0^2 x^2+\frac{x^2}{2}\,dx$
	$= \frac{1}{8} [\frac{x^3}{3}+\frac{x^3}{6}]_0^2$
	$= \frac{1}{8} [\frac{8}{3}+\frac{8}{6}] = \frac{1}{2}$

- \(c\) Le due v.a. sono indipendenti?

	Dal grafico si vede come in base al valore di una variabile, l'altra cambia il suo range di valori. Quindi le variabili non sono indipendenti

- (d) Determinare la densità condizionata di $X$ rispetto a $Y = y$

	marginale di $Y$
	$f_Y(y) = \frac{1}{8}\int_0^2 x+y \,dx = \frac{1}{8}[\frac{x^2}{2} + xy]_0^2 = \frac{1}{8}(2 + 2y) = \frac{1+y}{4}$

	$f_{X|Y}(x|y) = \frac{\frac{1}{8}(x+y)}{\frac{1+y}{4}} =\frac{x+y}{2(1+y)}$

## Domanda 10

Siano $X$ e $Y$ due variabili casuali tali che $(X|Y = y) \sim \text{Bin}(y, \frac{1}{3})$ e $Y$ è una variabile casuale discreta che assume i valori 1 e 2 con probabilità $\frac{1}{4}$ e $\frac{3}{4}$, rispettivamente.
- (a) Si determini la funzione di probabilità congiunta di $(X, Y)$.

	$f_{X|Y}(x|Y=y) \sim \text{Bin}(y, \frac{1}{3})$
	$y=\begin{cases}
	1 & p = \frac{1}{4}\\
	2 & p = \frac{3}{4}
	\end{cases}$

	Dalla formula della probabilità condizionata ci ricaviamo la probabilità della congiunta:

	$$P[X|Y=y] = \frac{P[X,Y]}{P[Y=y]} \implies P[X,Y] = P[X|Y=y] \cdot P[Y]$$

	- Se $y = 1$:
		 allora $P[X|Y=1] \sim \text{Bin}(1, \frac{1}{3})$ 
		 e quindi:
		 $P[X,Y] = \binom{1}{x}\cdot(\frac{1}{3})^x \cdot (1-\frac{1}{3})^{1-x} \cdot \frac{1}{4}$
	- Se $y = 2$:
		  allora $P[X|Y=2] \sim \text{Bin}(2, \frac{1}{3})$
		  e quindi:
		 $P[X,Y] = \binom{2}{x}\cdot(\frac{1}{3})^x \cdot (1-\frac{1}{3})^{2-x} \cdot \frac{3}{4}$
		
- (b) Si calcolino la distribuzione e il valore atteso di $Y|X = 1$.

	$P_{Y|X}(Y|X=1) = \frac{P_{X,Y}(X=1,Y)}{P_X(X=1)}$

	$P_X(X=1) = P_{X,Y}(X = 1, Y = 1) + P_{X,Y}(X = 1, Y = 2)$
	$\hspace{18mm}=   \left[\binom{1}{1}\cdot(\frac{1}{3})^1 \cdot (1-\frac{1}{3})^{1-1} \cdot \frac{1}{4}\right] + \left[\binom{2}{1}\cdot(\frac{1}{3})^1 \cdot (1-\frac{1}{3})^{2-1} \cdot \frac{3}{4}\right]$
	$\hspace{18mm}=\frac{1}{12} + \frac{4}{12} = \frac{5}{12}$

	- Se $y = 1$ 
	$P_{X,Y}(X=1,Y = 1) = \left[\binom{1}{1}\cdot(\frac{1}{3})^1 \cdot (1-\frac{1}{3})^{1-1} \cdot \frac{1}
{4}\right] =\frac{1}{12}$
Quindi 
$P_{Y|X}(Y=1|X=1) =\frac{\frac{1}{12}}{\frac{5}{12}} = \frac{1}{5}$

	- Se $y = 2$ 
	$P_{X,Y}(X=1,Y = 2) = \left[\binom{2}{1}\cdot(\frac{1}{3})^1 \cdot (1-\frac{1}{3})^{2-1} \cdot \frac{3}
{4}\right] =\frac{4}{12}$
Quindi 
$P_{Y|X}(Y=2|X=1) =\frac{\frac{4}{12}}{\frac{5}{12}} = \frac{4}{5}$


	per quanto riguarda il valore atteso:
	$E[Y|X=1] =1\cdot \frac{1}{5} + 2 \cdot \frac{4}{5} = \frac{9}{5}$

- \(c\) Si calcoli $P[Y > X]$

	$P[Y > X] = P[X = 0, Y =1] + P[X = 0, Y = 2] +P[X = 1, Y = 2]$
	$\hspace{16.5mm}=\left[\binom{1}{0}\cdot (\frac{1}{3})^0\cdot (1-\frac{1}{3})^{1-0} \cdot \frac{1}{4}\right] + \left[\binom{2}{0}\cdot (\frac{1}{3})^0\cdot (1-\frac{1}{3})^{2-0} \cdot \frac{3}{4}\right] + \left[\binom{2}{1}\cdot (\frac{1}{3})^1\cdot (1-\frac{1}{3})^{2-1} \cdot \frac{3}{4}\right] =$
	$\hspace{16.5mm}=[\frac{2}{3} \cdot \frac{1}{4}] + [\frac{4}{9}\cdot \frac{3}{4}] + [2\cdot \frac{1}{3} \cdot \frac{2}{3} \cdot \frac{3}{4}]$
	$\hspace{16.5mm}=\frac{1}{6} + \frac{1}{3} + \frac{1}{3} = \frac{5}{6}$
	
