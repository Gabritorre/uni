# Probabilità elementare

Esistono vari modi di contare la probabilità in base a determinate condizioni.

## Contare le probabilità

Innanzitutto è importante distinguere un insieme da un vettore:
- un insieme rappresentato tramite delle graffe $n = \{n_1, n_2, n_3, ...\}$ rappresenta una raccolta di elementi non ripetuti e in cui l'ordine non ha importanza.
- un vettore è una sequenza di elementi in cui l'ordine è importante perche due vettori con gli stessi elementi ma in ordine diverso sono effettivamente dei vettori diversi.
Si rappresenta con delle normali parentesi $(1, 2, 3, ...)$

### Principio fondamentale del calcolo combinatorio

Se una scelta può essere composta da $m1$ modi diversi e ogni modo lo possiamo accoppiare in $m2$ modi diversi, il numero di tutte le possibilità è dato da:

$$m1 \cdot m2$$

Generalmente immaginando di avere $r$ modi possiamo calcolare il totale delle possibilità facendo:

$$\prod_{i=1}^{r}m_i$$

Se ad esempio pensiamo di avere 3 dadi da sei facce, qual è il totale di tutte le combinazioni possibili?

abbiamo $r = 3$ e $m_1, m_2, m_3 = 6$

Il totale è dato da: $m_1 \cdot m_2 \cdot m_3 = 6 \cdot 6 \cdot 6 = 216$


### Disposizioni

Avendo un insieme di $n$ elementi, una disposizione è una scelta di $r$ elementi ordinati presi dall'insieme.
Due disposizioni sono diverse tra loro se contengono elementi diversi oppure se contengono gli stessi elementi ma in ordine diverso

Si distinguono le **disposizioni semplici e le disposizioni con ripetizioni** in base a se un elemento si può ripetere o meno.

- **disposizioni con ripetizione**: il totale delle combinazioni di un insieme di $n$ elementi prendendone $k$ alla volta e in cui l'ordine degli elementi è importante è dato da:
$$n^k$$
ne è un esempio il linguaggio binario
$n = \{0,1\} = 2$
$k = 3$

le combinazioni totali sono $n^k = 2^3 = 8$ infatti andandole a rappresentare tutte:

$$(000), (001), (010), (011), (100), (101), (110), (111)$$

similmente possiamo fare l'esempio di rappresentare parole lunghe 2 lettere utilizzando l'alfabeto $\{I, L, A\}$

$n = 3$
$k = 2$
totale di combinazioni: $3^2 = 9$ infatti abbiamo:
$$(II), (IL), (IA), (LI), (LL), (LA), (AI), (AL), (AA)$$

- **disposizioni senza ripetizione**: se invece vogliamo sempre prendere $k$ su un insieme $n$ ma non ci interessa l'ordine degli elementi, possiamo calcolare il totale come 
$$\frac{n!}{(n-k)!}$$


**Esempio**: quante parole di 2 lettere **diverse** sono componibili con l'alfabeto $\{I, L, A\}$

$n = 3$
$k = 2$

totale: $\frac{3!}{(3-2)!} = \frac{6}{1} = 6$

**Esempio**: ad una gara partecipano 9 concorrenti ma solo 3 vengono premiati quanti sono i possibili podi?

qui abbiamo 9 possibilità per il primo posto
8 possibilità per il secondo posto
7 possibilità per il terzo posto

utilizzando la formula faremo $\frac{9!}{(9-3)!} = \frac{9!}{6!} = 9\cdot 8 \cdot 7$

### Permutazioni

Quando in un insieme di $n$ elementi vogliamo ottenere tutte le combinazioni possibili utilizzando tutti gli elementi dell'insieme si usano le **permutazioni**, anch'esse si distinguono di due tipi: semplici e con ripetizioni.
Ricordiamo che due permutazioni sono diverse se cambia l'ordine in cui appaiono gli elementi

- **permutazioni semplici**: gli elementi non si possono ripetere. Il totale è dato dal fattoriale di $n$ :
	$$n!$$
- **permutazioni con ripetizioni**: gli elementi si possono ripetere un determinato numero di volte. In questo caso il totale è dato da:
	$$\frac{n!}{k_1!\cdot k2!\cdot k3!\cdot ... \cdot k_j!}$$
	dove ogni $k_\text{j-esimo}$ rappresenta quante volte può essere ripetuto l'elemento 1, poi l'elemento 2 e così via
	

**Esempio**: quanti sono i possibili anagrammi della parola MAMMA
Abbiamo $n = 5$ lettere totale
la M si ripete 3 volte e la A si ripete 2 volte, quindi la formula per trovare il totale di permutazioni è:

$$\frac{5!}{3!\cdot 2!} = 10$$

Infatti le possibilità sono: MMMAA, MMAMA, MAMMA, AMMMA, AMMAM, AMAMM, AAMMM, MAAMM, MMAAM, MAMAM

**Esempio**: in quanti modi si possono disporre 10 persone in 10 sedie allineate
possiamo pensare che per la prima sedia abbiamo 10 scelte possibili,
per la seconda sedia abbiamo 9 scelte possibili
per la terza sedia abbiamo 8 scelte possibili
...

otteniamo quindi che il totale di modi di disporre le persone è $10!$

	
### Combinazioni
Avendo un insieme di $n$ elementi, una disposizione è una scelta di $k$ elementi, di cui l'ordine non è importante, presi dall'insieme.
Due combinazioni sono diverse tra loro se contengono elementi diversi.

Si distinguono le **combinazioni semplici e le combinazioni con ripetizioni** in base a se un elemento si può ripetere o meno.

- **combinazioni semplici**: In cui gli elementi non si possono ripetere:
$$\frac{n!}{k!\cdot(n-k)!} \hspace{5mm}\text{oppure}\hspace{5mm}\binom{n}{k}$$
	es. 1 quanti sono i sottoinsiemi di 3 lettere creabili dal seguente alfabeto $\{A, B, C, D, E\}$  in questo caso l'ordine non è importante quindi, per esempio, il sottoinsieme (ABC) è uguale a (CBA)
per trovare il totale dobbiamo trovare tutte le permutazioni senza ripetizioni:

	$\frac{5!}{2!} = 5 \cdot 4 \cdot 3 = 60$

	e da questi dividere per quante sono le coppie uguali per ogni scelta
abbiamo che ogni sottoinsieme è possibile scriverlo in $3! = 6$ modi differenti.
quindi il numero totale di sottoinsiemi non ripetuti è $\frac{60}{6} = 10$
utilizzando la formula per intero sarebbe $\frac{5!}{3! \cdot (5-3)!}$

	es 2 quanti numeri interi compresi tra 100 e 999 hanno tutte le cifre crescenti?
il risultato è dato da $\binom{9}{3}$ oppure scritto in formula $\frac{9!}{3!\cdot(9-3)!} = \frac{9\cdot 8 \cdot 7}{3 \cdot 2 \cdot 1} = 84$


- **combinazioni semplici**: In cui gli elementi si possono ripetere:

$$\frac{(n-k+1)!}{k!(n-1)!} \hspace{5mm}\text{oppure}\hspace{5mm}\binom{n + k -1}{k}$$

es. una urna contiene 20 palline, in quanti modi si possono estrarre 3 palline supponendo che dopo ogni estrazione la pallina venga reimmessa. ricordiamo che non ci interessa l'ordine in cui sono state estratte le palline (quindi estrarre 1 poi 3 poi 7 equivale ad estrarre 7 poi 1 poi 3)

abbiamo $n = 20$ palline, e $k= 3$ palline da estrarre, e ovviamente dopo che la pallina viene estratta viene reimmessa nell'urna in modo che possa essere ripescata (c'è ripetizione)

$\binom{20 + 3 -1}{3} \to \binom{22}{3} \to \frac{22!}{3!\cdot(22-3)!} = 1540$

### Schema riassuntivo

![](https://i.ibb.co/xSxMfH0/albero-calc-comb.png)


## Probabilità

La probabilità si usa per ragionare su dei risultati possibili di un **fenomeno aleatorio** (casuale).

con evento aleatorio ci riferiamo ad un evento che se ripetuto può generare un risultato diverso dal precedente (esattamente il contrario di un evento deterministico). Un classico esempio è il lancio di un dado.


Definiamo come **spazio campionario** ($\Omega$) l'insieme di tutti i possibili risultati di un fenomeno aleatorio.

Un **evento** è un sottoinsieme dello spazio campionario

lo spazio campionario è detto **evento certo** se è sicuro che si verificherà


Esempio:
nel fenomeno aleatorio del lancio di un dado a 6 facce abbiamo che $\Omega = \{1,2,3,4,5,6\}$

l'evento "lanciando un dado esce un numero positivo minore di 10" è un evento certo


### Diagrammi di Venn

dato che gli eventi sono degli insiemi possiamo fare delle operazioni sugli insieme con i diagrammi di Venn:

1. il **complementare** di un evento $A$ viene indicato con $\overline A$ è l'evento opposto dell'evento $A$
![enter image description here](https://i.ibb.co/xH0Z4PJ/complementare.png)

2. **l'intersezione** di due eventi $A, B$ che viene indicato con $A \cap B$ è l'evento che si verifica quando sia $A$ che $B$ si verificano
![enter image description here](https://i.ibb.co/HCzV6n8/intersezione.png)


3. **l'unione** di due eventi $A, B$ che viene indicata con $A \cup B$ è l'evento che si verifica quando $A$ oppure $B$ si verificano
![enter image description here](https://i.ibb.co/521bpWq/unione.png)

4. **inclusione** dell'evento $A$ nell'evento $B$ implica che se si verifica l'evento $A$ implicitamente si verifica anche l'evento $B$
![enter image description here](https://i.ibb.co/dW0kQmk/inclusione.png)

Due eventi si dicono **disgiunti** se la loro intersezione è vuota

lo spazio campionario si può partizionare in insiemi più piccoli disgiunti che uniti fanno l'insieme di partenza, questi insiemi vengono chiamati **partizioni**

![enter image description here](https://i.ibb.co/jRpVttf/partizionamento.png)

Dall'immagine vediamo che $C_1, C_2, C_3$ sono tre insiemi disgiunti e la cui unione forma lo spazio campionario



### Assiomi sulla probabilità

- **positività**: la probabilità è un valore compreso tra 0 e 1: 

$$0\leq\mathbb{P}\leq1$$

- **normalizzazione**: la probabilità che accada un evento dello spazio campionario è $1$ (probabilità certa)

$$\mathbb{P}[\Omega] = 1$$

- **additività** la probabilità dell'unione di tutti gli eventi disgiunti è uguale alla somma delle singole probabilità degli eventi
	
$$\mathbb{P}\bigg[\bigcup_{n=1}^{\infty}A_n\bigg] = \sum_{n=1}^{\infty}\mathbb{P}[A_n]$$


La **probabilità di un evento** è quindi un numero compreso tra 0 e 1 che rappresenta con quale possibilità un evento casuale possa capitare, più il numero è vicino ad 1 più sarà probabile mentre è vicino allo 0 più è improbabile


### Proprietà della probabilità

1. proprietà del complementare
dato un evento $A$
$$\mathbb{P}[\bar A] = 1 - \mathbb{P}[A]$$

2. proprietà dell'evento impossibile
	$$\mathbb{P}[\empty] = 0$$
3. proprietà dell'unione
	dati due eventi $A$ e $B$
	$$\mathbb{P}[A \cup B] = \mathbb{P}[A] + \mathbb{P}[B] - \mathbb{P}[A \cap B]$$
4. probabilità di una partizione
la somma di tutte le probabilità delle partizioni deve essere totale ad $1$ 
$$\mathbb{P}\bigg[\bigcup_{i = 1}^{\infty}C_i\bigg] = \mathbb{P}[\Omega] = 1$$


### Legge della probabilità totale (versione facile)

la probabilità di un evento $A$ è possibile scriverla come la somma della probabilità delle sue partizioni

$$\mathbb{P}[A] = \sum_{i}\mathbb{P}[A \cap C_i]$$


### spazi campionari finiti

Se uno spazio campionario è finito $\Omega = \{w_1,...w_n\}$ allora anche il numero di probabilità degli elementi dello spazio campionario è finito, in altre parole abbiamo $n$ probabilità tali che:
1. ogni probabilità deve essere un numero compreso tra 0 e 1
2. la somma di tutte le probabilità deve essere 1
3. indichiamo con $p_i = \mathbb{P}[\{w_i\}]$

Se tutti gli elementi di $\Omega$ hanno la **stessa probabilità** allora
è possibile ottenere matematicamente il valore della probabilità dei singolo elementi di $\Omega$
$$p_i = \mathbb{P}[\{w_i\}] = \frac{1}{n}$$

da qui si deduce che la probabilità di un evento $A$ (sottoinsieme di $\Omega$) è data da:

$$\mathbb{P}[A] = \frac{r}{n} = \frac{\text{numero di casi favorevoli}}{\text{numero di casi possibili}}$$

**ovviamente sempre se la probabilità degli elementi dello spazio campionario è la stessa**


### Popolazioni

La **popolazione** di un insieme rappresenta tutti i singoli elementi dell'insieme.

rappresentiamo con $N$ il numero di elementi della popolazione

suddividiamo questi $N$ in 2 sottopopolazioni: $m$ hanno una determinata caratteristica che ci interessa, mentre i rimanenti elementi $N - m$ non ce l'hanno.

**Domanda**: qual è la probabilità che su $n$ elementi estratti casualmente, $k$ abbiano la caratteristica e i rimanenti $n-k$ no?


Distinguiamo il caso con reinserimento e senza reinserimento

**soluzione con reinserimento**

lo **spazio campionario** dell'evento è dato da tutte le possibili combinazioni formate da $n$ elementi.

Abbiamo degli eventi $A_k$ dove $k$ indica quanti elementi hanno la caratteristica che vogliamo.
La formula per calcolare la probabilità di un evento $A_k$ è la seguente:

$$\mathbb{P}[A_k] = \binom{n}{k}\left(\frac{m}{N}\right)^k\left(1-\frac{m}{N}\right)^{n-k}$$

possiamo descriverla a parole come:

$\binom{n}{k} =$ tutti i modi di ottenere
$\frac{m}{n} =$ probabilità che esca un elemento con la caratteristica
$1-\frac{m}{n} =$ probabilità che esca un elemento senza la caratteristica

Esempio:

ho un'urna con 7 palline
di queste palline 4 sono bianche e 3 nere

$N = 7$
$m = 4$

le palline bianche rappresentano la caratteristica che vogliamo ottenere

quindi estraendo 3 $(n = 3)$ palline con reinserimento quale è la probabilità che:

- $A_0:$ ottengo zero palline bianche
- $A_1:$ ottengo una pallina bianca
- $A_2:$ ottengo due palline bianche
- $A_3:$ ottengo tre palline bianche


ad esempio
- $\mathbb{P}[A_0] = \binom{3}{0}\left( \frac{4}{7}\right)^0\left(1-\frac{4}{7}\right)^{3-0}$
$\hspace{9mm}=1\cdot 1\cdot\frac{27}{343} \approx 0.07$ quindi abbiamo circa il 7% di probabilità che non ci siano palle bianche

- $\mathbb{P}[A_1] = \binom{3}{1}\left( \frac{4}{7}\right)^1\left(1-\frac{4}{7}\right)^{3-1}$
$\hspace{9mm}=3\cdot \frac{4}{7}\cdot\frac{9}{49} \approx 0.31$ quindi abbiamo circa il 31% di probabilità che ci esca una sola pallina bianca

- $\mathbb{P}[A_2] = \binom{3}{2}\left( \frac{4}{7}\right)^2\left(1-\frac{4}{7}\right)^{3-2}$
$\hspace{9mm}=3\cdot \frac{16}{49}\cdot\frac{3}{7} \approx 0.41$ quindi abbiamo circa il 41% di probabilità che ci escano due palline bianche

- $\mathbb{P}[A_3] = \binom{3}{3}\left( \frac{4}{7}\right)^3\left(1-\frac{4}{7}\right)^{3-0}$
$\hspace{9mm}=1\cdot \frac{64}{343}\cdot 1 \approx 0.18$ quindi abbiamo circa il 18% di probabilità che ci escano tutte palline bianche


**soluzione senza reinserimento**

questa soluzione è valida solo se vengono rispettate le seguenti condizioni:

$n \leq N :$ quindi il numero di estrazioni è minore o uguale al numero degli elementi dell'insieme
$k \leq m :$ gli elementi estratti che hanno la caratteristica interessata devono essere minori uguali del totale degli elementi che hanno la caratteristica
$n-k \leq N - m :$ gli elementi estratti che non hanno la caratteristica interessata devono essere minori uguali del totale degli elementi che non hanno la caratteristica

anche in questo caso lo spazio campionario è formato da tutte le combinazioni di $n$ elementi

Abbiamo degli eventi $A_k$ dove $k$ indica quanti elementi hanno la caratteristica che vogliamo.
La formula per calcolare la probabilità di un evento $A_k$ è la seguente:

$$\mathbb{P}[A_k] = \frac{\binom{m}{k} \binom{N-m}{n-k}}{\binom{N}{n}}$$

con lo stesso esempio di prima

ho un'urna con 7 palline
di queste palline 4 sono bianche e 3 nere

$N = 7$
$m = 4$

le palline bianche rappresentano la caratteristica che vogliamo ottenere

quindi estraendo 3 $(n = 3)$ palline senza reinserimento quale è la probabilità che:

- $A_0:$ ottengo zero palline bianche
- $A_1:$ ottengo una pallina bianca
- $A_2:$ ottengo due palline bianche
- $A_3:$ ottengo tre palline bianche

$\mathbb{P}[A_0] = \frac{\binom{4}{0} \binom{7-4}{3-0}}{\binom{7}{3}}$
$\hspace{9mm}=\frac{1\cdot1}{35} \approx 0.03$ quindi abbiamo circa il 3% di probabilità che non ci siano palle bianche

$\mathbb{P}[A_3] = \frac{\binom{4}{3} \binom{7-4}{3-3}}{\binom{7}{3}}$
$\hspace{9mm}=\frac{4\cdot1}{35} \approx 0.11$ quindi abbiamo circa il 11% di probabilità che escano tutte palle bianche
