# Variabili casuali

In molti esperimenti è più conveniente associare dei numeri a degli eventi che altrimenti sarebbero difficili da descrivere e difficile da lavorarci matematicamente.

Entrano in gioco quindi le **variabili casuali**

Una **variabile casuale** (o aleatoria) è una funzione che associa agli elementi dello spazio campionario un valore numerico.

Le variabili casuali si indicano con la **lettera maiuscola**

**Esempio**
Prendiamo come esempio l'estrazione con reinserimento da un'urna con 4 palline bianche e 3 nere numerate

Il nostro spazio campionario è definito come "l'insieme di tutte le coppie estratte con reinserimento"

$$\Omega=\{(1B, 1B), (1B, 1N), (1B, 2B), ..., (3N, 2N), (3N, 3N)\}$$

Possiamo definire varie variabili casuali, ad esempio:

1. $S =$ somma dei numeri presenti sulle palline, che assume valori:
	- $S_{(1B, 1B)} = 2$
	- $S_{(1B, 1N)} = 2$
	- $S_{(1B, 2B)} = 3$
	- ...
	- $S_{(3N, 2N)} = 5$
	- $S_{(3N, 3N)} = 6$

2. $S =$ numero della prima pallina, che assume valori:
	- $S_{(1B, 1B)} = 1$
	- $S_{(1B, 1N)} = 1$
	- $S_{(1B, 2B)} = 1$
	- ...
	- $S_{(3N, 2N)} = 3$
	- $S_{(3N, 3N)} = 3$

3. $S =$ il numero minimo della coppia, che assume valori:
	- $S_{(1B, 1B)} = 1$
	- $S_{(1B, 1N)} = 1$
	- $S_{(1B, 2B)} = 1$
	- ...
	- $S_{(3N, 2N)} = 2$
	- $S_{(3N, 3N)} = 3$

## Probabilità delle variabili casuali

Ora bisogna assegnare le probabilità ai possibili risultati numerici che abbiamo creato.

Avremo due modi di assegnare la probabilità in base alla numerabilità o meno dei valori che abbiamo assegnato agli eventi, distingueremo quindi le:

- variabili aleatorie discrete
- variabili aleatorie continue

### Variabili aleatorie discrete

In questo caso abbiamo assegnato agli eventi dei valori numerabili (come l'insieme dei numeri naturali $\mathbb{N}$), quindi che possiamo contare.

Possiamo quindi assegnare una probabilità ad ogni valore che può assumere la variabile aleatoria.

indichiamo con $\mathbb{P}[X]$ la probabilità della variabile aleatoria di un evento
indichiamo con $p_i$ la probabilità del singolo valore che assume la variabile aleatoria

Abbiamo 2 proprietà da rispettare:

- $0 \leq p_i \leq 1, \forall i = 1,2,....$
	quindi le probabilità dei singoli valori della variabile aleatoria devono essere compresi tra 0 e 1
- $\sum_ip_i = 1$
	quindi la somma delle probabilità di tutti i valori che assume la variabile aleatoria devono risultare 1

possiamo rappresentare graficamente l'assegnazione delle probabilità in un grafico cartesiano:

![enter image description here](https://i.ibb.co/wMXSr1Z/grafichello.png)

- nell'asse x abbiamo i possibili valori che assume la variabile aleatoria
- nell'asse y abbiamo le relative probabilità

Nell'esempio precedente dell'urna definiamo la variabile aleatoria 
$X =$ numero della pallina estratta

$X = \{1,2,3,4\}$

le probabilità sono:

$p_1 = \frac{2}{7} \hspace{10mm}$ abbiamo 2 palline con il numero uno su 7 palline
$p_2 = \frac{2}{7} \hspace{10mm}$ abbiamo 2 palline con il numero due su 7 palline
$p_3 = \frac{2}{7} \hspace{10mm}$ abbiamo 2 palline con il numero tre su 7 palline
$p_4 = \frac{1}{7} \hspace{10mm}$ abbiamo 1 pallina con il numero quattro su 7 palline

tutte le probabilità sono comprese tra 0 e 1 e la somma di tutte le probabilità fa 1.
più sintatticamente possiamo scrivere le probabilità così

$$P_X(x)\begin{cases}
\frac{2}{7} & \text{se } x = 1,2,3 \\
\frac{1}{7} & \text{se } x = 4 \\
0 & \text{altrimenti}
\end{cases}$$


### Variabili aleatorie continue

In questo caso abbiamo assegnato agli eventi dei valori non numerabili (come l'insieme dei numeri reali $\mathbb{R}$), quindi che non possiamo contare.

Per assegnare la probabilità a tutti gli infiniti valori che può assumere la variabile aleatoria bisogna lavorare tramite degli intervalli.

Definiamo una funzione $f(x)$ chiamata **funzione della densità di probabilità** che ha le seguenti due proprietà:
1. $f(x)\geq 0\hspace{14mm}$ la funzione è sempre positiva
2. $\int_{\mathbb{R}f(x) dx} = 1\hspace{10mm}$ l'area totale sotto il grafico di $f(x)$ è risulta essere 1

$f(x)$ è come se dà una probabilità a tutti gli infiniti valori che assume la variabile aleatoria, formando quindi una curva.
**Un intervallo di questa curva rappresenta un evento**.
Per calcolare la probabilità di quel evento dobbiamo calcolare l'area sottesa alla curva in quel intervallo.
L'area la calcoliamo tramite gli integrali definiti

![enter image description here](https://i.ibb.co/cNLCqTy/grafichetto.png)

**è importante sottolineare che la probabilità di un singolo valore (e non di un intervallo) della variabile aleatoria è 0**


Esempio

Definiamo una variabile aleatoria che ha funzione di densità

$$f(x) = 2e^{-2x}\cdot\bm{1}_{(0, +\infty)}(x)$$

dove $\bm{1}_{(0, +\infty)}(x)$ è detta **funzione indicatrice** che è definita come:

$$\bm{1}_{(\text{intervallo})}(x) = \begin{cases}
1 & \text{se } x \in \text{intervallo} \\
0 & \text{altrimenti}
\end{cases}$$

nel nostro caso la funzione si potrebbe dunque riscrivere come:

$$f(x)= \begin{cases}
2e^{-2x} & \text{se } x \geq0 \\
0 & \text{altrimenti}
\end{cases}$$

verifichiamo innanzitutto che sia effettivamente una valida funzione di densità:
1. $f(x)$ è una funzione esponenziale che è quindi sempre positiva
2. $\int_0^\infty 2e^{-2x} dx = 1$

consideriamo l'evento $A=(1,2)$

$\mathbb{P}[A] = \int_1^2 2e^{-2x} \, dx = e^{-2}- e^{-4}$

consideriamo l'evento $B=(-1,1)$ in questo caso notiamo che da -1 fino a 0 siamo fuori dall'intervallo della funzione, quindi il quella zona ci sarà probabilità 0

$\mathbb{P}[A] = \int_{-1}^0 0\,dx + \int_{0}^{1} 2e^{-2x} \, dx = 1- e^{-2}$


## Funzione di ripartizione

La funzione di ripartizione in un dato punto $x$ è la probabilità che la variabile casuale assuma valori minori o uguali ad $x$. 
Quindi se la nostra variabile casuale la indichiamo con $X$:

$$F(x) = \mathbb{P}[X \leq x]$$

$F(x)$ è in tutto e per tutto una probabilità, quindi i suoi valori sono compresi in $[0,1]$

La funzione di ripartizione deve rispettare tre proprietà:

1. deve essere crescente
2. deve essere continua a destra
3. per valori di $x$ che tendono a $-\infty$ allora $F(x) = 0$, mentre per valori di $x$ che tendono a $+\infty$ allora $F(x) = 1$


### funzione di ripartizione di variabili casuali discrete

prendiamo come esempio il lancio di un dado a 6 facce ingiusto, in cui la probabilità che esca 4 è più alta mentre la probabilità che esca 2 è più bassa.

la nostra variabile aleatoria sarà semplicemente il numero del dado che esce.

rappresentiamo su un grafico i valori che può assumere la variabile aleatoria con le rispettive probabilità

![enter image description here](https://i.ibb.co/RgnSyhR/variabile-aleatoria.png)

Quando abbiamo una variabile aleatoria discreta la funzione di ripartizione è data dalle **somme delle probabilità** dei valori della variabile aleatoria.

Rappresentiamo quindi graficamente la funzione di ripartizione:

![enter image description here](https://i.ibb.co/X8xJHvb/ripartizione.png)

possiamo ottenere la probabilità che esca uno specifico dado facendo:

$$\mathbb{P}[x] = F(x) - F(x^-)$$

dove $F(x^-)$ rappresenta il valore discreto precedente.

ad esempio la probabilità che esca il numero 4:

$$\mathbb{P}[4] = F(4) - F(3) = \frac{2}{3} - \frac{4}{9} = \frac{2}{9}$$

oppure la probabilità che esca un numero compreso fra 3 e 5 (inclusi):

$$\mathbb{P}[4] = F(5) - F(2) = \frac{5}{6} - \frac{5}{18} = \frac{5}{9}$$


### funzione di ripartizione di variabili casuali continue

Se abbiamo una variabile casuale continua con funzione di densità $f(x)$ allora la funzione di ripartizione è data da:


$$\int_{-\infty}^x f(t)\,dt$$

quindi dall'integrale da $-\infty$ ad un punto $x$ della funzione di densità

in questo caso la funzione di partizione non sarà più costante a tratti come nella versione discreta ma sarà una curva continua che andrà da $0$ a $1$

![enter image description here](https://i.ibb.co/7R6pWKd/curva.png)

dalla funzione di partizione è possibile ottenere la densità di probabilità in ogni punto derivabile, facendo la derivata di $F(x)$

$$f(x) = \frac{dF(x)}{dx}$$
