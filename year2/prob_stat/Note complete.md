# Introduzione alla probabilità e statistica

**Statistica**: disciplina che studia e lavora sui dati per generare delle decisioni, ipotesi o conclusioni. Permette inoltre di combinare informazioni e valutarne l'affidabilità, sintetizzare i dati, costruire modelli e fare previsioni

**probabilità**: disciplina che studia la logica di ciò che non è certo, si usa per ragionare su possibili risultati di eventi casuali

La statistica unita al mondo della computer science forma una disciplina chiamata **data science**

**popolazione di riferimento**: è un insieme di individui di qualunque tipo (chiamati **unità statistiche**) su cui lavorare per ottenere dati e generare nuove informazioni

**dati** sono dei valori grezzi (non elaborati) ottenuti attraverso misure o rilevazioni fatte sulla popolazione oppure su un **campione** (cioè un sottoinsieme della popolazione)


## Variabili

**variabile** è la caratteristica della popolazione o campione su cui si desidera raccogliere i dati.

- Le variabili sono dette **qualitative** (o categoriali) quando i valori assunti dalla variabile sono aggettivi o sostantivi. Le variabili qualitativi si possono suddividere ulteriormente in:

	- **Sconnesse**: se non esiste un modo naturale di ordinare i dati, ma viene fatto in modo arbitrario (sesso, religione, colori di capelli)
	- **Ordinali**: se esiste un modo naturale e immediato di ordinare i dati (anno del titolo di studio, gerarchie militari, grandezza dell'impresa)

	Inoltre quando i valori che può assumere la variabile sono solamente 2 si parla di **variabili binarie**
- Le variabili sono dette **quantitative** (o numeriche) quando i valori che la variabile assume sono numeri che si suddividono in:
- **discreti** (o interi): quando si tratta appunti di numeri interi (numero di clienti, visualizzazioni)
- **continui** (o reali): quando si tratta di numeri reali (peso, tempo)

## Inferenza Statistica

con inferenza si indica che i dati sono stati prelevati solo su un campione e non su tutta la popolazione, però le conclusioni vengono estese a tutta la popolazione.
Affinché ciò avvengo in modo corretto bisogna stabilire il **legame** tra la **popolazione** e il **campione**, esistono dei modelli matematici per fare ciò.


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

Avendo un insieme di $n$ elementi, una disposizione è una scelta di $k$ elementi ordinati presi dall'insieme.
Due disposizioni sono diverse tra loro se contengono elementi diversi oppure se contengono gli stessi elementi ma in ordine diverso

Si distinguono le **disposizioni semplici e le disposizioni con ripetizioni** in base a se un elemento si può ripetere o meno.

- **disposizioni con ripetizione**: il totale delle combinazioni di un insieme di $n$ elementi prendendone $k$, e in quei $k$ ci possono essere valori duplicati, è dato da:
$$n^k$$
ne è un esempio il linguaggio binario
$n = \{0,1\} = 2$
$k = 3$

le combinazioni totali sono $n^k = 2^3 = 8$ infatti andandole a rappresentare tutte:

$(000), (001), (010), (011), (100), (101), (110), (111)$

similmente possiamo fare l'esempio di rappresentare parole lunghe 2 lettere utilizzando l'alfabeto $\{I, L, A\}$

$n = 3$
$k = 2$
totale di combinazioni: $3^2 = 9$ infatti abbiamo:
$(II), (IL), (IA), (LI), (LL), (LA), (AI), (AL), (AA)$

- **disposizioni senza ripetizione**: se invece vogliamo sempre prendere $k$ su un insieme $n$ ma in quei $k$ non ci possono essere duplicati, possiamo calcolare il totale come 
$$\frac{n!}{(n-k)!}$$


**Esempio**: quante parole di 2 lettere **diverse** sono componibili con l'alfabeto $\{I, L, A\}$

$n = 3$
$k = 2$

totale: $\frac{3!}{(3-2)!} = \frac{6}{1} = 6$

infatti abbiamo $(IL), (IA), (LI), (LA), (AI), (AL)$

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
	$$\frac{n!}{k_1!\cdot k_2!\cdot k_3!\cdot ... \cdot k_j!}$$
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
Avendo un insieme di $n$ elementi, una combinazione è una scelta di $k$ elementi, presi dall'insieme, di cui l'ordine non è importante.
Due combinazioni sono diverse tra loro se contengono elementi diversi.

Si distinguono le **combinazioni semplici e le combinazioni con ripetizioni** in base a se un elemento si può ripetere o meno.

- **combinazioni semplici**: In cui gli elementi non si possono ripetere:
$$\frac{n!}{k!\cdot(n-k)!} \hspace{5mm}\text{oppure}\hspace{5mm}\binom{n}{k}$$
	
	es. 1: quanti sono i sottoinsiemi di 3 lettere creabili dal seguente alfabeto $\{A, B, C, D, E\}$  in questo caso l'ordine non è importante quindi, per esempio, il sottoinsieme (ABC) è uguale a (CBA)
per trovare il totale dobbiamo trovare il numero di sottoinsiemi formati da lettere diverse (disposizioni semplici):

	$\frac{5!}{(5-3)!} = 5 \cdot 4 \cdot 3 = 60$

	e da questi dividere per quante sono le coppie uguali per ogni scelta
abbiamo che ogni sottoinsieme è possibile scriverlo in $3! = 6$ modi differenti.
quindi il numero totale di sottoinsiemi non ripetuti è $\frac{60}{6} = 10$
utilizzando la formula per intero sarebbe $\frac{5!}{3! \cdot (5-3)!}$

	es 2: quanti sono i numeri interi, compresi tra 100 e 999, che hanno tutte le cifre crescenti?
	La prima cifra ha 9 possibili scelte, la seconda ne ha 8 (dato che deve essere una cifra maggiore della precedente), la terza ne ha 7 (dato che deve essere maggiore delle due precedenti)
Il risultato è dato da $\binom{9}{3}$ oppure scritto in formula $\frac{9!}{3!\cdot(9-3)!} = \frac{9\cdot 8 \cdot 7}{3 \cdot 2 \cdot 1} = 84$


- **combinazioni con ripetizioni**: In cui gli elementi si possono ripetere:

$$\frac{(n+k-1)!}{k!(n-1)!} \hspace{5mm}\text{oppure}\hspace{5mm}\binom{n + k -1}{k}$$

es. una urna contiene 20 palline, in quanti modi si possono estrarre 3 palline supponendo che dopo ogni estrazione la pallina venga reimmessa. ricordiamo che non ci interessa l'ordine in cui sono state estratte le palline (quindi estrarre 1 poi 3 poi 7 equivale ad estrarre 7 poi 1 poi 3)

abbiamo $n = 20$ palline, e $k= 3$ palline da estrarre, e ovviamente dopo che la pallina viene estratta viene reimmessa nell'urna in modo che possa essere ripescata (c'è ripetizione)

$\binom{20 + 3 -1}{3} \to \binom{22}{3} \to \frac{22!}{3!\cdot(22-3)!} = 1540$

### Schema riassuntivo

![](https://i.ibb.co/xSxMfH0/albero-calc-comb.png)


## Probabilità

La probabilità si usa per ragionare su dei risultati possibili di un **fenomeno aleatorio** (casuale).

Con evento aleatorio ci riferiamo ad un evento che se ripetuto può generare un risultato diverso dal precedente (esattamente il contrario di un evento deterministico). Un classico esempio è il lancio di un dado.


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

- **additività**: la probabilità dell'unione di tutti gli eventi disgiunti è uguale alla somma delle singole probabilità degli eventi
	
$$\mathbb{P}\left[\bigcup_{n=1}^{\infty}A_n\right] = \sum_{n=1}^{\infty}\mathbb{P}[A_n]$$


La **probabilità di un evento** è quindi un numero compreso tra 0 e 1 che rappresenta con quale possibilità un evento casuale possa accadere, più il numero è vicino ad 1 più sarà probabile mentre è vicino allo 0 più è improbabile


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

La probabilità di un evento $A$ è possibile scriverla come la somma della probabilità delle sue partizioni

$$\mathbb{P}[A] = \sum_{i}\mathbb{P}[A \cap C_i]$$


## spazi campionari finiti

Se uno spazio campionario è finito $\Omega = \{w_1,...w_n\}$ allora anche il numero di probabilità degli elementi dello spazio campionario è finito, in altre parole abbiamo $n$ probabilità tali che:
1. ogni probabilità deve essere un numero compreso tra 0 e 1
2. la somma di tutte le probabilità deve essere 1
3. indichiamo con le probabilità con $p_i = \mathbb{P}[\{w_i\}]$

Se tutti gli elementi di $\Omega$ hanno la **stessa probabilità** allora
è possibile ottenere matematicamente il valore della probabilità dei singoli elementi di $\Omega$
$$p_i = \mathbb{P}[\{w_i\}] = \frac{1}{n}$$

da qui si deduce che la probabilità di un evento $A$ (sottoinsieme di $\Omega$) è data da:

$$\mathbb{P}[A] = \frac{r}{n} = \frac{\text{numero di casi favorevoli}}{\text{numero di casi possibili}}$$

**ovviamente sempre se la probabilità di ogni elemento dello spazio campionario è la stessa**


## Popolazioni

La **popolazione** di un insieme rappresenta tutti i singoli elementi dell'insieme.

rappresentiamo con $N$ il numero di elementi della popolazione

suddividiamo questi $N$ in 2 sottopopolazioni: $m$ hanno una determinata caratteristica che ci interessa, mentre i rimanenti elementi $N - m$ non ce l'hanno.

**Domanda**: qual è la probabilità che su $n$ elementi estratti casualmente, $k$ abbiano la caratteristica e i rimanenti $n-k$ no?


Distinguiamo il caso con reinserimento e senza reinserimento

**soluzione con reinserimento**

in questo caso ogni vettore di $n$ elementi ha la stessa probabilità di essere estratto (dato che reinseriamo ogni volta dopo una estrazione) e in questo caso teniamo conto  dell'**ordine in cui sono stati estratti gli elementi**

lo **spazio campionario** dell'evento è dato da tutte le possibili combinazioni formate da $n$ elementi in cui l'ordine è importante.

$$\#\Omega = N^n$$

Abbiamo degli eventi $A_k$ dove $k$ indica quanti elementi hanno la caratteristica che vogliamo.

$$\#A_k = \binom{n}{k}m^k(N-m)^{n-k}$$

possiamo descriverla come:
$\binom{n}{k} =$ i modi di ordinare
$m^k =$ scegliere i $k$ elementi che hanno la caratteristica tra gli $m$ totali che possiedono la caratteristica
$(N-m)^{n-k} =$ scegliere i $n-k$ elementi senza caratteristica tra gli $N-m$ totali che sono senza caratteristica


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

prima di calcolare la probabilità proviamo a calcolare la numerosità dell'evento $A_2$

$\#A_2 = \binom{3}{2}4^2(7-4)^{3-2} = 144$

quindi abbiamo $\binom{3}{2} = 3$ modi di ordinare le tre estrazioni in cui 2 sono bianche. infatti

$B, B, N$
$B, N, B$
$N, B, B$

abbiamo $4^2 = 16$ modi di scegliere le due palline bianche tra le 4 che ho
e abbiamo $(7-4)^{3-2} = 3^1 = 3$ modi di scegliere la pallina nera tra le 3 che ho

passiamo al calcolo della probabilità degli eventi:
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

in questo caso le n-uple sono degli insiemi in quanto **non siamo interessati all'ordine** in cui estraiamo gli elementi

In questo caso lo spazio campionario è formato da tutte le combinazioni di $n$ elementi in cui l'ordine non è importante:

$$\#\Omega = \binom{N}{n}$$

Abbiamo degli eventi $A_k$ dove $k$ indica quanti elementi hanno la caratteristica che vogliamo.

$$\#A_k =\binom{m}{k}\binom{N-m}{n-k}$$

$\binom{m}{k} =$ modi di scegliere $k$ elementi con la caratteristica tra gli elementi totali che hanno la caratteristica, considerando che ogni estrazione influenza la successiva (dato che non c'è reinserimento)
$\binom{N-m}{n-k} =$ modi di scegliere $n-k$ elementi senza la caratteristica tra gli elementi totali che non hanno la caratteristica

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

calcoliamo prima la numerosità dell'evento $A_2$

$\#A_2 =\binom{4}{2}\binom{7-4}{3-2} = 18$

abbiamo $\binom{4}{2} = 6$ modi di scegliere due palline bianche tra le 4
abbiamo $\binom{3}{1} = 3$ modi di scegliere la pallina nera tra le 3 che ho

ora calcoliamo le probabilità di alcuni aventi:

$\mathbb{P}[A_0] = \frac{\binom{4}{0} \binom{7-4}{3-0}}{\binom{7}{3}}$
$\hspace{9mm}=\frac{1\cdot1}{35} \approx 0.03$ quindi abbiamo circa il 3% di probabilità che non ci siano palle bianche

$\mathbb{P}[A_3] = \frac{\binom{4}{3} \binom{7-4}{3-3}}{\binom{7}{3}}$
$\hspace{9mm}=\frac{4\cdot1}{35} \approx 0.11$ quindi abbiamo circa il 11% di probabilità che escano tutte palle bianche


# Probabilità condizionata e indipendenza

definiamo la **probabilità condizionata** dell'evento $A$ dato l'evento $B$ come:

$$\mathbb{P}[A|B] = \frac{\mathbb{P}[A\cap B]}{\mathbb{P}[B]}$$

$\mathbb{P}[A|B]$ rappresenta la probabilità che accada l'evento $A$ dopo che si è verificato l'evento $B$

Immaginiamo inizialmente che B non si sia ancora verificato, possiamo rappresentare gli eventi $A$ e $B$ come:

![enter image description here](https://i.ibb.co/kXCHJgX/prob-cond.png)

Se sappiamo che B si è verificato allora $\Omega$ diventa $B$ e tutto quello che sta fuori $B$ non viene più considerato, il disegno diventa:

![enter image description here](https://i.ibb.co/tHywH6g/prob-cond2.png)

da questo deriva la formula della probabilità condizionata.

è importante notare alcune relazioni:
- $\mathbb{P}[A|B]$ non è correlato in alcun modo a $\mathbb{P}[B|A]$
- $\mathbb{P}[A|B]$ e $\mathbb{P}[\bar{A}|B]$ sono in relazione diretta, infatti:
$$\mathbb{P}[\bar{A}|B] = 1-\mathbb{P}[A|B]$$
- $\mathbb{P}[A|B]$ e $\mathbb{P}[A|\bar{B}]$ non sono in relazione

Esempio di probabilità composta:

Abbiamo un'urna con 7 palline:
- 4 bianche numerate da 1 a 4
- 3 nere numerate da 1 a 3

definiamo gli eventi:
$B$ viene estratta una pallina bianca
$N$ viene estratta una palla nera
$C_i$ viene estratta una pallina con il numero $i$

calcoliamo la probabilità degli eventi 
$C_1|B$
$C_1|N$
$N|C_1$
(nota che gli **eventi** vengono scritti senza la $\mathbb{P}$)

$$\mathbb{P}[C_1|B] = \frac{\frac{1}{7}}{\frac{4}{7}} = \frac{1}{4}$$

anche ragionando possiamo pensare che venga estratta una pallina bianca, dato che abbiamo 4 palline numerate qual è la probabilità che esca una pallina con il numero 1? una su quattro

$$\mathbb{P}[C_1|N] = \frac{\frac{1}{7}}{\frac{3}{7}} = \frac{1}{3}$$

ragionando possiamo pensare a quante sono le palline con il numero 1 tra le palline nere.

$$\mathbb{P}[N|C_1] = \frac{\frac{1}{7}}{\frac{2}{7}} = \frac{1}{2}$$

ragionando possiamo pensare a quante tra le palline con il numero 1 sono di colore nero? una su due.
nota come $\mathbb{P}[N|C_1] \neq \mathbb{P}[C_1|N]$


## Probabilità composte

dalla formula della probabilità condizionata possiamo ricavare la probabilità dell'intersezione tra due eventi:

$$\mathbb{P}[A\cap B] = \mathbb{P}[A|B] \cdot \mathbb{P}[B]$$

$$\text{oppure}$$

$$\mathbb{P}[A\cap B] = \mathbb{P}[A|B] \cdot \mathbb{P}[A]$$

questa formula può essere generalizzata, ottenendo la **formula delle probabilità composte**

$$P(A_1 \cap A_2 \cap A_3 \cdot...\cdot A_n) = P(A_1) \cdot P(A_2 | A_1) \cdot P(A_3 | A_1 \cap A_2) \cdot ... \cdot P[A_n| A_1 \cap ... \cap A_n-1]$$

possiamo rappresentare tale formula tramite un albero binario:

![enter image description here](https://i.ibb.co/5Kff3Qq/alberello.png)

possiamo calcolare intersezioni come
$\mathbb{P}[A_1 \cap A_2 \cap A_3] =\mathbb{P}[A_1] \cdot \mathbb{P}[A_2|A_1]\cdot \mathbb{P}[A_3|A_1 \cap A_2]$

$\mathbb{P}[A_1 \cap \bar A_2 \cap A_3] =\mathbb{P}[A_1] \cdot \mathbb{P}[\bar A_2|A_1]\cdot \mathbb{P}[A_3|A_1 \cap \bar A_2]$

Viene utilizzata quando si vorrebbe usare la formula delle **popolazioni senza reinserimento** ma **considerando l'ordine** di estrazione.

esempio:
nella solita urna di 7 palline di cui 4 bianche e 3 nere.
qual è la probabilità che estraendo 3 palline senza reinserimento le prime due siano bianche e la terza sia nera.

Abbiamo
$B_1$ la prima pallina bianca
$B_2$ la seconda pallina bianca
$\bar B_3$ la terza pallina nera

calcoliamo quindi la seguente probabilità:

$\mathbb{P}[B_1 \cap B_2 \cap \bar B_3] = \mathbb{P}[B_1] \cdot \mathbb{P}[B_2|B_1]\cdot \mathbb{P}[\bar B_3|B_1 \cap B_2]$

$\mathbb{P}[B_1] = \frac{4}{7}$
$\mathbb{P}[B_2|B_1] = \frac{3}{6} = \frac{1}{2}$ infatti dopo aver pescato una pallina bianca ne rimangono 3 su 6 di bianche
$\mathbb{P}[\bar B_3|B_1 \cap B_2] = \frac{3}{5}$ infatti dopo aver pescato due palline bianche ne rimangono 2 bianche e 3 nere su 5

$\mathbb{P}[B_1 \cap B_2 \cap \bar B_3] =\frac{4}{7} \cdot \frac{1}{2} \cdot \frac{3}{5} =\frac{6}{35}$

### Eventi indipendenti

Due eventi si dicono indipendenti se sapere il risultato di uno non influenza in alcun modo l'altro, quindi

$$\mathbb{P}[A|B] = \mathbb{P}[A]$$

$$\mathbb{P}[A|\bar B] = \mathbb{P}[A]$$

Se due eventi $A$ e $B$ sono indipendenti allora la loro intersezione si calcola come:

$$\mathbb{P}[A \cap B] = \mathbb{P}[A] \cdot \mathbb{P}[B]$$

questo modo di calcolare l'intersezione si può estendere se abbiamo più eventi tutti indipendenti tra loro

$$\mathbb{P}[A_{i_1} \cap ...\cap A_{i_k}] = \mathbb{P}[A_{i_1}] \cdot ... \cdot \mathbb{P}[A_{i_k}]$$

**eventi indipendenti e anche disgiunti**:

- disgiunti: l'intersezione dei due eventi è vuota $\hspace{5mm}\implies \hspace{5mm}[A \cap B] = \empty$
- indipendenti: il prodotto tra le probabilità dei due eventi è $0$ $\hspace{5mm}\implies \hspace{5mm}\mathbb{P}[A] \cdot \mathbb{P}[B] = 0$

In altre parole due eventi disgiunti sono anche indipendenti solo se la probabilità di almeno uno dei due è $0$

esempio:

consideriamo il lancio di un dato due volte

A = "la somma dei dadi è 6"
B = "la somma dei dadi è 7"
C = "il primo dado è 4"

$\mathbb{P}[A] = \frac{5}{36}$
$\mathbb{P}[B] = \frac{1}{6}$
$\mathbb{P}[C] = \frac{6}{36} = \frac{1}{6}$

Abbiamo che gli eventi $A$ e $B$ sono **disgiunti** (o la somma dei dadi è 6 oppure 7, non può essere entrambi, per cui l'intersezione è vuota)

$\mathbb{P}[A\cap C] = \frac{1}{36}$
ma dato che $\mathbb{P}[A] \cdot \mathbb{P}[C] = \frac{5}{36}\cdot \frac{1}{6} = \frac{5}{216}$ che è diverso da $\frac{1}{36}$ allora gli eventi $A$ e  $C$ non sono indipendenti

$\mathbb{P}[B\cap C] = \frac{1}{36}$
e dato che $\mathbb{P}[B] \cdot \mathbb{P}[C] = \frac{1}{6}\cdot \frac{1}{6} = \frac{1}{36}$ che è uguale a $\frac{1}{36}$ allora gli eventi $B$ e  $C$ sono indipendenti

$\mathbb{P}[A\cap B] = 0$ (quindi eventi disgiunti)
e dato che $\mathbb{P}[A] \cdot \mathbb{P}[B] = \frac{5}{36}\cdot \frac{1}{6} = \frac{5}{216}$ che è diverso da $0$ allora gli eventi $B$ e $C$ non sono indipendenti


### componenti in serie e parallelo

Un interessante caso di studio riguarda i sistemi in serie e in parallelo, concentriamoci prima su quelli in serie:

- **Sistema in serie**:
	Un sistema in serie funziona solo se tutti i componenti di quel sistema funzionano, possiamo rappresentarlo graficamente come:
	![enter image description here](https://i.ibb.co/Jsm1PQ7/serie.png)
Sia $A_i$ l'evento in cui il componente $i$-esimo funziona
mentre sia $A$ l'evento in cui l'intero sistema funziona

	Quindi 
	$$A = \bigcap_{i = 1}^{n}A_i$$
	
	cioè l'intero sistema funziona se tutti i componenti funzionano

	la probabilità che il sistema funziona è dato da:

	$$\mathbb{P}[A] = \mathbb{P}\left[\bigcap_{i = 1}^{n}A_i\right]$$

	quindi dal prodotto delle probabilità che ogni singolo componente funzioni:
	
	$$\mathbb{P}[A] = \prod_{i=1}^{n}\mathbb{P}[A_i]$$

	Se supponiamo che ogni componente **si guasti** indipendente dagli altri e la probabilità del guasto di un componente la indichiamo con $p_i$
	la probabilità che il sistema funziona è dato dal prodotto della probabilità che ogni componente **non sia guasto**:

	$$\mathbb{P}[A] = \prod_{i=1}^{n}(1-p_i)$$

- **Sistema in parallelo**:
	un sistema in parallelo funziona se almeno un componente del sistema funziona, possiamo rappresentarlo graficamente come:

	![enter image description here](https://i.ibb.co/gR7hDNQ/parallelo.png)

	Sia $A_i$ l'evento in cui il componente $i$-esimo funziona
mentre sia $A$ l'evento in cui l'intero sistema funziona

	Quindi 
	$$A = \bigcup_{i = 1}^{n}A_i$$
	
	cioè l'intero sistema funziona se **almeno** un componente funziona

	la probabilità che il sistema funziona è dato da:

	$$\mathbb{P}[A] = 1 - \mathbb{P}[\bar A]$$

	quindi il complementare di "il sistema non funziona" che possiamo scrivere come

	$$\mathbb{P}[A] = 1 - \mathbb{P}\left[\bigcap_{i = 1}^{n}\bar{A_i}\right]$$

	cioè: $1 - \text{"la probabilità che ogni componente non funzioni"}$
	
	La probabilità che ogni componente non funzioni è dato dal prodotto dei complementari

	$$\mathbb{P}[A] = 1- \prod_{i=1}^{n}\mathbb{P}[\bar{A_i}]$$

	oppure, se supponiamo che ogni componente si guasti indipendente dagli altri e la probabilità del guasto di un componente la indichiamo con $p_i$
	
	$$\mathbb{P}[A] = 1- \prod_{i=1}^{n}p_i$$

## Formula di Bayes

Utilizziamo un esempio sull'HIV per arrivare alla formula di Bayes e al suo utilizzo.

Si immagini di somministrare un test diagnostico non perfetto a una persona estratta a caso dalla popolazione e si considerino gli eventi:

$M$ = la persona estratta è ammalata
$\bar M$ = la persona estratta non è ammalata
$+$ = il test da risultato positivo
$-$ = il test da risultato negativo

Introduciamo prima delle terminologie riguardanti le malattie:

- **prevalenza**: la frazione di soggetti sono affetti da una malattia rispetto alla popolazione.
$$\mathbb{P}[M]$$
- **sensitività**: probabilità che un test somministrato ad un ammalato risulti positivo
$$\mathbb{P}[+|M]$$
- **specificità**: probabilità che un test somministrato ad un non ammalato risulti negativo
$$\mathbb{P}[-|\bar M]$$

Realizziamo un albero che aiuterà a capire le probabilità da calcolare:

![enter image description here](https://i.ibb.co/xg4X2cQ/tree.png)

Ipotizziamo di avere i seguenti valori:
$\mathbb{P}[M] = 0.001$
$\mathbb{P}[+|M] = 0.95$
$\mathbb{P}[-|\bar M] = 0.98$

Calcoliamo la probabilità di un falso positivo, cioè test risulta positivo ma la persona non è ammalata:

$\mathbb{P}[\bar M \cap +] = \mathbb{P}[\bar M] \cdot \mathbb{P}[+|\bar M]$

$\mathbb{P}[\bar M \cap +] = (1-0.001)\cdot (1-0.98) = 0.01998$

Calcoliamo la probabilità di un falso negativo, cioè test risulta negativo ma la persona è ammalata:

$\mathbb{P}[M \cap -] = \mathbb{P}[M] \cdot \mathbb{P}[-|M]$

$\mathbb{P}[M \cap -] = (0.001)\cdot (1-0.95) = 0.00005$


Sappiamo per la legge della probabilità totale che se abbiamo delle partizioni $C_1, C_2,...$ di un evento certo allora la probabilità di un evento $A$ può essere scritta come la somma delle intersezioni di A con le partizioni:

$$P[A] = \sum_{i}(C_i \cap A)$$

l'intersezione la possiamo anche scrivere come:

$$P[A] = \sum_{i}\mathbb{P}[C_i]\cdot \mathbb{P}[A|C_i]$$

possiamo immaginarla come la somma delle strade dell'albero che portano all'evento A

Nel nostro esempio $M$ e $\bar M$ rappresentano due partizioni. Possiamo applicare questa formula per trovare, ad esempio quale è la probabilità che un test somministrato ad una persona a caso sia positivo:

$P[+] = (\mathbb{P}[M] \cdot \mathbb{P}[+|M]) + (\mathbb{P}[\bar M]\cdot \mathbb{P}[+|\bar M])$

$P[+] = \left(0.001 \cdot 0.95\right) + \left((1-0.001)\cdot (1-0.98)\right) = 0.02093$

Come facciamo però a trovare la probabilità di una partizione sapendo che un determinato evento è accaduto? in altre parole come potrebbe percorrere l'albero sopra disegnato al contrario (da destra verso sinistra)?

La **formula di bayes** calcola proprio questo:

$$\mathbb{P}[C_m|A] = \frac{\mathbb{P}[C_m\cap A]}{\mathbb{P}[A]}$$

espandendo numeratore e denominatore:

$\mathbb{P}[C_m\cap A] = \mathbb{P}[C_m]\cdot\mathbb{P}[A|C_m]$

$\mathbb{P}[A] =  \sum_{i}\mathbb{P}[C_i]\cdot \mathbb{P}[A|C_i]$

Quindi la formula di bayes si può riscrivere come:

$$\mathbb{P}[C_m|A] = \frac{\mathbb{P}[C_m]\cdot\mathbb{P}[A|C_m]}{\sum_{i}\mathbb{P}[C_i]\cdot \mathbb{P}[A|C_i]}$$


Ritornando al nostro esempio, quale sarebbe la probabilità che una persona risultata positiva sia effettivamente malata?

$$\mathbb{P}[M|+] = \frac{\mathbb{P}[M]\cdot \mathbb{P}[+|M]}{(\mathbb{P}[M]\cdot \mathbb{P}[+|M])+(\mathbb{P}[\bar M] \cdot \mathbb{P}[+|\bar M])}$$

$$\mathbb{P}[M|+] = \frac{0.001 \cdot 0.95}{(0.001\cdot 0.95)+((1-0.001)\cdot (1-0.98))} = 0.045$$


Quello che la formula di bayes permette di fare è quello di aggiornare la probabilità di eventi $C_m$ data la nuova informazione


# Variabili casuali

In molti esperimenti è più conveniente associare dei numeri a degli eventi che altrimenti sarebbero difficili da descrivere e difficile da lavorarci matematicamente.

Entrano in gioco quindi le **variabili casuali**

Una **variabile casuale** (o aleatoria) è una funzione che associa agli elementi dello spazio campionario un valore numerico.

Le variabili casuali si indicano con la **lettera maiuscola**

**Esempio**
Prendiamo come esempio l'estrazione con reinserimento da un'urna con 4 palline bianche e 3 nere numerate

Definiamo lo spazio campionario come "l'insieme di tutte le coppie estratte con reinserimento"

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

In generale abbiamo due modi di assegnare la probabilità, in base alla numerabilità o meno dei valori che abbiamo assegnato agli eventi, distingueremo quindi le:

- **variabili aleatorie discrete**
- **variabili aleatorie continue**

## Variabili aleatorie discrete

In questo caso abbiamo assegnato agli eventi dei valori numerabili (come l'insieme dei numeri naturali $\mathbb{N}$), quindi che possiamo contare.

Possiamo quindi assegnare una probabilità ad ogni valore che può assumere la variabile aleatoria.

indichiamo con $\mathbb{P}[X]$ la probabilità della variabile aleatoria di un evento
indichiamo con $p_i$ la probabilità del singolo valore che assume la variabile aleatoria

Abbiamo 2 proprietà da rispettare:

- $0 \leq p_i \leq 1, \forall i = 1,2,....$
	quindi le probabilità dei singoli valori della variabile aleatoria devono essere compresi tra 0 e 1
- $\sum_ip_i = 1$
	quindi la somma delle probabilità di tutti i valori che assume la variabile aleatoria devono risultare 1

La probabilità che una variabile aleatoria $X$ possa assumere un valore generico $x$ è chiamata **funzione di probabilità**
$$P(x) =\mathbb{P}[X = x]$$
possiamo rappresentare graficamente la funzione di probabilità in un grafico cartesiano:

![enter image description here](https://i.ibb.co/wMXSr1Z/grafichello.png)

- Nell'asse x abbiamo i possibili valori che assume la variabile aleatoria
- Nell'asse y abbiamo le relative probabilità

Nell'esempio precedente dell'urna definiamo la variabile aleatoria 
$X =$ numero della pallina estratta

$X = \{1,2,3,4\}$

le probabilità sono:

$p_1 = \frac{2}{7} \hspace{10mm}$ abbiamo 2 palline con il numero uno su 7 palline
$p_2 = \frac{2}{7} \hspace{10mm}$ abbiamo 2 palline con il numero due su 7 palline
$p_3 = \frac{2}{7} \hspace{10mm}$ abbiamo 2 palline con il numero tre su 7 palline
$p_4 = \frac{1}{7} \hspace{10mm}$ abbiamo 1 pallina con il numero quattro su 7 palline

tutte le probabilità sono comprese tra 0 e 1 e la somma di tutte le probabilità fa 1.
più sinteticamente possiamo scrivere le probabilità così

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
2. $\int_{\mathbb{R}}f(x) dx = 1\hspace{10mm}$ l'area totale sotto il grafico di $f(x)$ risulta essere 1

È come se $f(x)$ desse una probabilità a tutti gli infiniti valori che assume la variabile aleatoria, formando quindi una curva.
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

consideriamo l'evento $A=[1,2]$

$\mathbb{P}[A] = \int_1^2 2e^{-2x} \, dx = e^{-2}- e^{-4}$

consideriamo l'evento $B=[-1,1]$ in questo caso notiamo che da -1 fino a 0 siamo fuori dall'intervallo della funzione, quindi il quella zona ci sarà probabilità 0

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

prendiamo come esempio il lancio di un dado a 6 facce truccato, in cui la probabilità che esca 4 è più alta mentre la probabilità che esca 2 è più bassa.

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


$$F(x) =\int_{-\infty}^x f(t)\,dt$$

quindi dall'integrale da $-\infty$ ad un punto $x$ della funzione di densità

in questo caso la funzione di partizione non sarà più costante a tratti come nella versione discreta ma sarà una curva continua che andrà da $0$ a $1$

![enter image description here](https://i.ibb.co/7R6pWKd/curva.png)

dalla funzione di partizione è possibile ottenere la densità di probabilità in ogni punto derivabile, facendo la derivata di $F(x)$

$$f(x) = \frac{dF(x)}{dx}$$


## Costante caratteristica

Una costante caratteristica è un numero associato ad una variabile aleatoria (o alla sua distribuzione) che sintetizza una informazioni di interesse sul fenomeno analizzato.

Alcune caratteristiche che vedremo sono:

- il **valore atteso**
- la **varianza**
- la **moda**
- la **mediana**
- i **quantili**

sono tutti detti anche **indici di posizione** tranne la varianza che è un **indice di dispersione**
## valore atteso


Il valore atteso è sostanzialmente la **media** dei valori che assume la variabile aleatoria.
Dato che lavoriamo con le probabilità si tratta di una **media pesata** in cui il peso è dato dalla probabilità di ogni valore che assume la variabile.

### Valore atteso di variabili aleatorie discrete

Il valore atteso di una variabile aleatoria discreta $X$ rappresentato dal simbolo $\mathbb{E}[X]$ si calcola come:

$$\mathbb{E}[X] = \sum_{i}(x_i\cdot p_i)$$

quindi la somma di: ogni **valore** moltiplicato per la sua **probabilità**

Esempio
$P_X(x) = \begin{cases}
	\frac{2}{7} & \text{se } x = 1,2,3 \\
	\frac{1}{7} & \text{se } x = 4 \\
	0 & \text{altrimenti} \\	
\end{cases}$

Il valore atteso in questo caso è dato da:

$\mathbb{E}[X] = 1 \cdot \frac{2}{7} + 2 \cdot \frac{2}{7} + 3 \cdot \frac{2}{7} + 4 \cdot \frac{1}{7} = \frac{16}{7}$

### Valore atteso di variabili aleatorie continue

Data la funzione di densità della variabile continua $f(x)$ il valore atteso si calcola come:

$$\mathbb{E}[X]  =\int_{\mathbb{R}}xf(x) \, dx$$

### Proprietà del valore atteso

- il valore atteso di una costante è la costante stessa: $\mathbb{E}[a] = a$
- $\mathbb{E}[aX +b] = a\mathbb{E}[X] +b$
- $\mathbb{E}[X - \mathbb{E}[X]] = 0$


## Varianza

La varianza è un valore che misura quanto si discostano i valori assunti dalla variabile aleatoria rispetto al valore atteso (quindi rispetto alla media).

maggiore è la varianza più sono i valori che si allontanano dalla media, mentre minore è la varianza più i valori sono tutti molto vicini alla media

### Varianza di variabili aleatorie discrete

La varianza di una variabile aleatoria discreta $X$, rappresentata da $\text{Var}[X]$, si calcola come:

$$\text{Var}[X] = \sum_{i}p_i\cdot (x_i - \mathbb{E}[X])^2$$

$$\text{oppure}$$

$$\text{Var}[X] = \sum_{i}(x_i^2\cdot p_i) - [\mathbb{E}[X]]^2$$

nella prima formula vediamo come da ogni valore sottraiamo il valore medio, ottenendo quindi la distanza dal valore medio. Eleviamo al quadrato per trasformare le distanze negative in positive.

Esempio 

$P_X(x) = \begin{cases}
	\frac{2}{7} & \text{se } x = 1,2,3 \\
	\frac{1}{7} & \text{se } x = 4 \\
	0 & \text{altrimenti} \\	
\end{cases}$

$\text{Var}[X] = (1^2\cdot \frac{2}{7}) + (2^2\cdot \frac{2}{7}) + (3^2\cdot \frac{2}{7}) + (4^2\cdot \frac{1}{7}) - (\frac {16}{17})^2 \approx 5.4$

### Varianza di variabili aleatorie continue

Data la funzione di densità della variabile aleatoria $f(x)$ la varianza si calcola come:

$$\text{Var}[X] = \int_\mathbb{R}(x- \mathbb{E}[X])^2 \cdot f(x) \, dx$$

$$\text{oppure}$$

$$\text{Var}[X] = \int_\mathbb{R}x^2\cdot f(x)\,dx - [\mathbb{E}[X]]^2$$

### Proprietà della varianza

Avendo $a$ e $b$ costanti
- $\text{Var}[a] = 0$
- $\text{Var}[aX + b] = a^2\text{Var}[X]$

## Moda

La moda di una variabile aleatoria sono i punti in cui la variabile assume i valori di massimo (assoluto ma anche locale).
Nota bene che la moda è il **valore che assume la variabile aleatoria** (quindi il valore nell'asse x) e non la sua probabilità (asse y)


## Mediana

La mediana rappresenta il valore centrale di un insieme di dati **ordinati**

Avendo la funzione di ripartizione di una variabile aleatoria, la mediana è il minimo valore che assume la variabile la cui probabilità è maggiore di $\frac{1}{2}$:

$$F(m) = \mathbb{P}[X \leq m] \geq \frac{1}{2}$$

**Per una variabile continua esiste un unico punto** di mediana


considerando il precedente esempio che aveva la seguente funzione di ripartizione (di una variabile aleatoria discreta)
![enter image description here](https://i.ibb.co/X8xJHvb/ripartizione.png)

la mediana è 4, cioè il più piccolo valore che assume la variabile la cui probabilità supera $\frac{1}{2}$, infatti il valore 3 ha probabilità $\frac{4}{9}\approx 0.4$ mentre il 4 ha probabilità $\frac{2}{3} \approx 0.6$


## Quantili

I quantili sono degli indici di posizione che sono una generalizzazione del concetto della mediana

Avendo la funzione di ripartizione di una variabile aleatoria, il **quantile di livello** $\alpha$ è il minimo valore che assume la variabile la cui probabilità è maggiore di $\alpha$:

$$F(q_\alpha) = \mathbb{P}[X \leq q_\alpha] \geq \alpha$$

la mediana è un quantile in cui $\alpha = \frac{1}{2}$

i **percentili** sono dei quantili espressi in percentuale (il livello $\alpha$ è una percentuale, quindi $\frac{k}{100}$)
i **decili** sono dei quantili espressi su una scala di 10 (il livello $\alpha$ è $\frac{k}{10}$)
i **quartili** sono dei quantili di livello 0.25 (detto **primo quartile**), 0.5 (detta **mediana**), 0.75 (detto **terzo quartile**)

## Deviazione standard

La deviazione standard o scarto quadratico medio è un concetto simile alla varianza, anche in questo caso la deviazione standard è una misura di dispersione dei dati rispetto alla media, ma la sostanziale differenza è che essa appartiene alla stessa scala dei valori originali (diversamente dalla varianza che ha una scala quadratica).

in altre parole potremmo definirla come: la media di quanto si discostano i valori dal valore atteso (la media)

la deviazione standard si calcola come: 

$$\text{sd}(x) = \sqrt{\text{Var}(x)}$$

mentre il valore della varianza poteva già darci una interpretazione di come sono distribuiti i dati, la deviazione standard non è altrettanto utile da sola, abbiamo bisogno del coefficiente di variazione.

### Coefficiente di variazione

Il coefficiente di variazione serve per paragonare la deviazione standard rispetto alla media.

$$\text{cv}(x) = \frac{\text{sd}(x)}{|E(x)|}$$

maggiore è la il coefficiente di variazione più sono i valori che si allontanano dalla media, mentre minore è la il coefficiente più i valori sono tutti molto vicini alla media.


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

La probabilità di un valore $x$ dati $n$ possibili valori è dato da:

$$\mathbb{P}[X = x] = \frac{1}{n}$$

La media (il valore atteso) della distribuzione uniforme è

$$\mathbb{E}[X] = \frac{x_1 + x_n}{2}$$

La varianza della distribuzione uniforme è

$$\text{Var}[X] = \frac{n^2 -1}{12}$$

## Distribuzione ipergeometrica

Questo è il caso che abbiamo già visto delle **popolazioni senza reinserimento**.
Una popolazione è divisa in due sottopopolazioni, una di queste sottopopolazioni ha la caratteristica che ci interessa.
Sapendo quanti hanno e non hanno la caratteristica e sapendo se il campionamento viene fatto con o senza reinserimento possiamo calcolare la probabilità degli eventi scritti come "$k$ elementi su $n$ hanno la caratteristica"

In questo caso l'estrazione di un elemento con la proprietà viene chiamato **successo**.

**Definizione**: sia $X$ una variabile aleatoria che conta in numero di successi su $n$ estrazioni senza reinserimento. 

Questa distribuzione si scrive come:

$$X \sim Ig(N, K, n)$$

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
	Abbiamo quindi $X \sim Ig(N=12, K=5, n=4)$
	
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
1-p & \text{se } x = 0 \\
p & \text{se } x = 1\\
0 & \text{altrimenti}
\end{cases}$$

$$\text{oppure in versione compatta}$$

$$\mathbb{P}[X = x] = p^x(1-p)^{1-x} \bm{1}_{\{0,1\}}(x)$$

La media (il valore atteso) della distribuzione bernoulliana è

$$\mathbb{E}[X] = p$$

La varianza della distribuzione bernoulliana è

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

La media (il valore atteso) della distribuzione binomiale è

$$\mathbb{E}[X] = np$$

La varianza della distribuzione binomiale è

$$\text{Var}[X] = np(1-p)$$

Questa distribuzione ricopre il caso delle **popolazioni con reinserimento**

la distribuzione di Bernoulli è un caso particolare di questa distribuzione in cui $n = 1$

### Esempio

Si consideri la solita urna con $4$ palline bianche e $3$ nere. Sia $S_3$ la variabile che conta il numero di palline bianche ottenute in tre estrazioni con reinserimento.
Qual è la $\mathbb{P}[S_3 = 2]$, cioè che due delle tre palline estratte sia bianca?

Considerando l’estrazione di pallina bianca come successo e visto che $\mathbb{P}[\text{bianca}] = \frac{4}{7}$, si può affermare che $S_3 ∼ \text{Bin}(3, \frac{4}{7})$.
Allora:

$\mathbb{P}[S_3 = 2] = \binom{3}{2}(\frac{4}{7})^2(1-\frac{4}{7})^{3-2} = 0.4198$


## Distribuzione di Poisson

La distribuzione di Poisson viene utilizzata come modello in tutti quei casi in cui la variabile aleatoria assume una quantità di valori tendenti ad infinito e in cui la probabilità di ognuno è bassissima (si dice infatti che questa distribuzione modella gli **eventi rari**).

Degli esempi di testi in cui si può utilizzare questa distribuzione sono:

1. "chiamate in arriva entro 1 ora"
2. "automobili in transito in una strada dalle 9am alle 11am"
3. "difetti rilevati in un pezzo d'acciaio prodotto in una ditta"

notiamo sempre che dobbiamo contare qualcosa in una unità di tempo (non sempre si tratta di tempo, come nel caso 3)

Questa distribuzione si scrive come:

$$X \sim \text{Po}(\lambda)$$

La probabilità di avere $k$ casi contati è

$$\mathbb{P}[X = k] = \frac{\lambda^k}{k!}\cdot e^{-\lambda}$$

con $k \in \mathbb{N}$
e $\lambda$ che rappresenta quanti valori si contano **in media** nell'unità di tempo

La media (il valore atteso) della distribuzione di Poisson è

$$\mathbb{E}[X] = \lambda$$

La varianza della distribuzione di Poisson è

$$\text{Var}[X] = \lambda$$


### Esempio

Al mio account di posta elettronica arrivano messaggi con una media di 10 ogni mezz’ora.
Qual è la probabilità che nella prossima mezz’ora mi arrivino non più di 3 messaggi?

$X = \text{“n. messaggi ogni mezz’ora”}∼ Po (λ = 10)$

$\mathbb{P}[X \leq 3] = \mathbb{P}[X = 0] + \mathbb{P}[X = 1] + \mathbb{P}[X = 2] + \mathbb{P}[X =3]$

$\mathbb{P}[X \leq 3] = \frac{10^0}{0!}e^{-10} + \frac{10^1}{1!}e^{-10} + \frac{10^2}{2!}e^{-10} +\frac{10^3}{3!}e^{-10} = 0.0103$

### Approssimazione della Binomiale

In alcuni casi è possibile utilizzare le formule della distribuzione di Poisson come una buona approssimazione della distribuzione binomiale (in quanto la binomiale usa il fattoriale e con numeri grandi è abbastanza difficile da calcolare).

Si può fare tale approssimazione nei casi in cui $n$ è grande e la probabilità di ogni valore è molto bassa inoltre il prodotto $np$ deve tendere a $\lambda$
Generalmente quando $n \geq 100$ e $p \leq 0.05$

quindi la distribuzione binomiale:

$\binom{n}{x}p^x(1-p)^{n-x}$

si può calcolare con: 

$$e^{-\lambda}\cdot \frac{\lambda^x}{x!}$$

Ad esempio:

Una fabbrica di componenti elettronici fornisce il 3% dei chip acquistati da un produttore di telefoni cellulari. Qual è la probabilità che su 100 chip acquistati ve ne siano al massimo 3 provenienti da quella fabbrica?

Dato che $n=100$ è grande e $p=0.03$ è piccolo, si può utilizzare la distribuzione di Poisson con $\lambda = 100 \cdot 0.03 = 3$

$$\mathbb{P}[X \leq 3] = \sum_{k = 0}^{3}\frac{3^k}{k!}e^{-3} = 0.6472$$

## Distribuzione geometrica

Abbiamo una variabile aleatoria $X$ che conta il numero di ripetizioni indipendenti necessarie per ottenere il primo successo di un esperimento binario.
La probabilità del successo è $p$ e si dice che $X$ ha una distribuzione geometrica

Questa distribuzione si scrive come:

$$X \sim \text{Geo}(p)$$

Si ha che

$$\mathbb{P}[X = x] = (1-p)^{x-1}p$$

La media (il valore atteso) della distribuzione geometrica è

$$\mathbb{E}[X] = \frac{1}{p}$$

La varianza della distribuzione di geometrica è

$$\text{Var}[X] = \frac{1-p}{p^2}$$

### Proprietà di mancanza della memoria

$$\mathbb{P}[X > m + n | X > m] = \mathbb{P}[X > n]$$

Inoltre sappiamo anche che la distribuzione di avere **più di** $k$ ripetizioni (escluso il valore di $k$) è dato da:

$$\mathbb{P}[X > k] = (1-p)^k$$


Vediamo un esempio

Si consideri un motore di ricerca su internet. Se il 20% dei siti visitati contengono la parola cercata

Supponiamo che $X$ conti il numero di pagine da visitare per trovare per la prima volta la parola cercata. Allora $X \sim \text{Geo}(p)$

- qual è la probabilità di dover visitare 15 siti per trovare la parola?

	$\mathbb{P}[X = 15] = (1-0.2)^{15-1}0.2 = 0.0088$

- Dato che i primi 4 siti visitati non contenevano la parola cercata, qual è la probabilità di doverne visitare più di 10 in tutto per trovare la parola cercata?

	Utilizzando la proprietà di mancanza della memoria possiamo definire $m = 4$ e di conseguenza $n = 10 - 4 = 6$

	$\mathbb{P}[X > 10| X > 4]$
	che possiamo scrivere nella stessa forma della formula come:
	$\mathbb{P}[X > 4+6 | X > 4]$
	che quindi diventa
	$\mathbb{P}[X > 6] = (1-0.2)^6 = 0.2621$

- Qual è il numero medio di siti da visitare per trovare la parola la prima volta?

	$\mathbb{E}[X] = \frac{1}{0.2} = 5$


## Funzioni in R

### Ipergeometrica

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dhyper(x=k, m=m, n=N-m, k=n)` |
| $\mathbb{P}[X \leq k]$ | `phyper(q=k, m=m, n=N-m, k=n)` |

### Bernoulli

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dbinom(x=k, size=1, prob=p)` |
| $\mathbb{P}[X \leq k]$ | `pbinom(q=k, size=1, prob=p)` |

### Binomiale

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dbinom(x=k, size=n, prob=p)` |
| $\mathbb{P}[X \leq k]$ | `pbinom(q=k, size=n, prob=p)` |

### Poisson

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dpois(x=k, lambda=lambda)` |
| $\mathbb{P}[X \leq k]$ | `ppois(q=k, lambda=lambda)` |
| $\mathbb{P}[X \geq k]$ | `1 - ppois(q=k-1, lambda=lambda)` |

### Geometrica

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X = k]$ | `dgeom(x=k-1, prob=p)` |
| $\mathbb{P}[X \leq k]$ | `pgeom(q=k-1, prob=p)` |
| $\mathbb{P}[X > k]$ | `1 - pgeom(q=k-1, prob=p)` |



# Variabili aleatorie continue

Andiamo ad analizzare alcune famose distribuzioni di variabili aleatorie continue

## Distribuzione uniforme continua

Abbiamo una variabile aleatoria $X$ che può assumere qualsiasi valore nell'intervallo $[a,b]$
Se la densità  di probabilità  è costante nell'intervallo, allora si dice che abbiamo una **distribuzione uniforme**.
funzione di densità:

$$f(x) = \begin{cases}
\frac{1}{b-a} & x \in [a,b]\\
0 & \text{altrove}
\end{cases}$$

Questa distribuzione si scrive come:

$$X \sim U(a, b)$$

a partire dalla funzione di densità possiamo trovare la funzione di ripartizione:

$$F(x) = \int_a^x \frac{1}{b-a}dy = \frac{x-a}{b-a}$$

![enter image description here](https://i.ibb.co/gSd1LYM/image.png)

(A sinistra abbiamo la funzione di densità mentre a destra abbiamo la funzione di ripartizione)


La media (il valore atteso) della distribuzione uniforme è

$$\mathbb{E}[X] = \frac{a + b}{2}$$

La varianza della distribuzione uniforme è

$$\text{Var}[X] = \frac{(b-a)^2}{12}$$

Proprietà che potrebbe tornare utile

$$\text{Var}[X] =E[X^2] - E[X]^2$$


## Distribuzione normale o gaussiana

Una variabile aleatoria $X$ ha distribuzione normale (o anche detta gaussiana) se la funzione di densità ha la seguente forma:

$$ \large f(x) =\frac{1}{\sigma\sqrt{2\pi}}\cdot e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \hspace{10mm} x \in \mathbb{R}, \mu \in \mathbb{R}, \sigma > 0$$

Questa distribuzione si scrive come:

$$X \sim N(\mu, \sigma^2)$$

Le distribuzioni hanno le seguenti forme

![enter image description here](https://i.ibb.co/ncy54wK/image.png)

La media (il valore atteso) della distribuzione normale è

$$\mathbb{E}[X] = \mu$$

La varianza della distribuzione normale è

$$\text{Var}[X] = \sigma^2$$

### Funzione di ripartizione della gaussiana

La funzione di ripartizione non è calcolabile esplicitamente facendo l'integrale di $f(x)$, per questo tornano utili dei pacchetti matematici dei vari linguaggi, i quali fanno una approssimazione sufficientemente accurata dell'integrale.

In alternativa è anche possibile calcolare la funzione di ripartizione tramite un processo di **standardizzazione**

Data una variabile aleatoria con distribuzione normale:

$X \sim N(\mu, \sigma^2)$

La sua forma normale standard $Z$ è data da

$$Z = \frac{X - \mu}{\sqrt{\sigma^2}}\sim N(0, 1)$$

Questo significa che alla nostra distribuzione normale $X$ sottraiamo il valore atteso $\mu$, il significato di questa operazione è che la distribuzione viene centrata sul valore $0$. Poi dividiamo il tutto per la deviazione standard $\sigma$, il significato di questa operazione è che la distribuzione diventa simmetrica rispetta al valore atteso (che è $0$)

![enter image description here](https://i.ibb.co/W577XW7/image.png)

Ad esempio se abbiamo la seguente variabile

$X \sim N(-1, 4)$

Abbiamo quindi che $\mathbb{E}[X] = -1$ e $\text{Var}[X] = 4$

Dalla varianza possiamo ricavarci la deviazione standard:
$\text{sd} = \sqrt{4} = 2$

Quindi la variabile standardizzata è $Z = \frac{X - (-1)}{2} = \frac{X + 1}{2}\sim N(0, 1)$

Dalle proprietà già viste del valore atteso e della varianza:
- $\mathbb{E}[aX +b] = a\mathbb{E}[X] +b$
- $\text{Var}[aX + b] = a^2\text{Var}[X]$

per giungere alla versione standard allora
- $a = \frac{1}{\sigma}$
- $b = -\mu$

Vediamo come usare la standardizzazione:

Se dobbiamo determinare $\mathbb{P}[x_1 < X < x_2]$
possiamo utilizzare la standardizzazione nel seguente modo

$$\mathbb{P}\left[\frac{a - \mu}{\sigma}<Z<\frac{b - \mu}{\sigma}\right]=$$

$$=\Phi\left(\frac{b - \mu}{\sigma}\right) -\Phi\left(\frac{a - \mu}{\sigma}\right)$$

dove $\Phi$ è un simbolo per indicare la funzione di ripartizione:
scrivere $\Phi(\frac{b - \mu}{\sigma})$ è come scrivere $\mathbb{P}[Z \leq \frac{b - \mu}{\sigma}]$. Ma questa notazione vale solo se per la variabile aleatoria standardizzata.


Solitamente per calcolare le funzioni di ripartizione si utilizzano delle **tavole della distribuzione standard**, cioè una tabella fatta in questo modo

![enter image description here](https://i.ibb.co/xJXj5mv/image.png)

dove nella prima colonna abbiamo il valore intero e il primo decimale di $z$ mentre nella prima riga abbiamo la seconda cifra decimale di $z$

Quindi per calcolare $\mathbb{P}[Z \leq 1.25]$ utilizzando la tabella:
1. troviamo nella prima colonna il valore $1.2$
2. nella prima riga troviamo il valore $0.05$
3. incrociando la colonna e la riga trovati e otteniamo il valore $0.8944$

Quindi $\mathbb{P}[Z \leq 1.25] = 0.8944$


Considerando il grafico della distribuzione normale standard possiamo fare diverse considerazioni

![enter image description here](https://i.ibb.co/vDsmxNr/image.png)


1. Dato che il grafico è simmetrico
	È facile notare che $\mathbb{P}[Z \leq 0] = \frac{1}{2}$
	oppure anche nel caso della non standard $\mathbb{P}[X \leq \mu] = \frac{1}{2}$

2. se $z$ è negativo

	$$\mathbb{P}[Z \leq -z] = \mathbb{P}[Z \geq z] = 1 - \mathbb{P}[Z \leq z]$$

3. se vogliamo la probabilità tra un valore $z$ e il suo opposto

	$$\mathbb{P}[-z\leq Z\leq z] = 1 - 2\mathbb{P}[Z\geq z] = 1 - 2\mathbb{P}[Z\leq -z]$$

### Approssimazione della binomiale

nel caso in cui la distribuzione binomiale quando il valore della $n$ diventa molto grande mentre la probabilità rimane costantemente alta, è possibili approssimare la distribuzione binomiale utilizzando la distribuzione normale.

$$\text{Bin}(n, p) \approx N(np, np(1-p))$$

generalmente l'approssimazione è efficace quando
$np(1-p) \geq 10$

Facciamo un esempio

"Un certo virus danneggia un file con probabilità 0.35, indipendentemente dagli altri file. Il virus attacca una cartella con 2400 file. Qual è la probabilità che vengano danneggiati fra gli 800 e gli 850 file (inclusi)?"

Sia X la variabile che conta il numero di file danneggiati su 2400.
Allora $X \sim \text{Bin}(2400, 0.35)$

Proviamo ad approssimare:

$\mu = 2400 \cdot 0.35 = 840$
$\sigma = \sqrt{2400 \cdot 0.35 \cdot (1- 0.35)} = 23.36664$

dobbiamo calcolare $\mathbb{P}[800 \leq X \leq 850]$

dobbiamo effettuare una cosiddetta **correzione per continuità** per riuscire a migliorare la precisione dato che stiamo utilizzando una distribuzione continua per una variabile discreta

$$\mathbb{P}[799.5 < X < 850.5] =$$

$$= \Phi\left(\frac{850.5 - 840}{23.36664}\right) - \Phi\left(\frac{799.5 - 840}{23.36664}\right) = 0.631887$$

## Distribuzione Gamma

Una distribuzione con i parametri $\alpha>0$ e $\lambda>0$ e con funzione di densità 

$$f(x) = \large\begin{cases}
\frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha - 1}e^{-\lambda x} & x \in (0, \infty)\\
0 & \text{altrove}
\end{cases}$$

si chiama **distribuzione gamma**
Si scrive come

$$X \sim \text{Ga}(\alpha, \lambda)$$

dove $\alpha$ viene chiamato **parametro di forma** e $\lambda$ viene chiamato **parametro di scala**

La media (il valore atteso) della distribuzione gamma è

$$\mathbb{E}[X] = \frac{\alpha}{\lambda}$$

La varianza della distribuzione gamma è

$$\text{Var}[X] = \frac{\alpha}{\lambda^2}$$

$\Gamma(\alpha)$ viene chiamata **funzione gamma** ed è definita come segue
$$\Gamma(\alpha) = \int_{0}^{\infty}x^{\alpha - 1} e^{-x}\,dx$$


Quando $\alpha$ è un valore intero allora:

$$\Gamma(\alpha) = (\alpha - 1)!$$


## Distribuzione esponenziale

La distribuzione esponenziale è una caso particolare della distribuzione gamma in cui $\alpha = 1$.
Si scrive come:

$$X \sim Exp(\lambda)$$

ha funzione di densità:

$$f(x) = \begin{cases}
\lambda e^{-\lambda x} & x \in (0, \infty)\\
0 & \text{altrove}
\end{cases}$$

e la **funzione di ripartizione** si può calcolare nel seguente modo in base a $x$

$$\mathbb{P}[X \leq x]\begin{cases}
0 & x < 0\\
1-e^{-\lambda x} & x\geq 0
\end{cases}$$

la probabilità $\mathbb{P}[X > x]$ viene definita **funzione di sopravvivenza** e si può calcolare come segue:

$$\mathbb{P}[X > x] = 1-\mathbb{P}[X \leq x] = e^{-x\lambda}$$

La media (il valore atteso) della distribuzione esponenziale è

$$\mathbb{E}[X] = \frac{1}{\lambda}$$

La varianza della distribuzione esponenziale è

$$\text{Var}[X] = \frac{1}{\lambda^2}$$

Questa distribuzione si usa per modellare i tempi di attesa, ad esempio:
1. tempo di attesa tra un evento ed il successivo
2. la vita di un componente elettronico

Come la distribuzione geometrica anche questa distribuzione ha la proprietà di **mancanza della memoria**

$$\mathbb{P}[X>t\, |\, X > t + s] = \mathbb{P}[X > s]$$

Vediamo un esempio:

"Il tecnico di un laboratorio dell’università in un’ora installa un certo software in media su 30 pc. Assumendo che il tempo di installazione su ogni pc segua una distribuzione esponenziale, vogliamo calcolare la probabilità che il tecnico impieghi più di 5 minuti per installare il software nel prossimo pc."

definiamo la variabile come
$X =$ "tempo di attesa tra l'inizio di una installazione e l'inizio della successiva"

dal testo sappiamo che $\mathbb{E}[X] =\frac{1}{30}$
da cui ricaviamo $\lambda = 30$

il testo ci chiede di trovare $\mathbb{P}[X > \frac{5}{60}] = \mathbb{P}[X > \frac{1}{12}]$

$\mathbb{P}[X > \frac{1}{12}] =1-(1- e^{-\lambda x}) =e^{-30 \frac{1}{12}} =e^{- \frac{30}{12}}$

## Processo di Poisson

Ricordiamo che la distribuzione di Poisson che abbiamo già visto viene utilizzata per i conteggi degli eventi che accadono in una unità di tempo fissa.

Il **processo di Poisson** cerca di lavorare su una unità di tempo più piccola in modo da coprire degli intervalli di tempo più flessibili.
Si dice che il processo di Poisson è una successione di variabili aleatorie dipendenti dal parametro $t$ (che rappresenta l'intervallo di tempo) $\{X_t\}_{t\geq 0}$

$$X_t \sim \mathcal{P}(\lambda \cdot t)$$

Vediamo un esempio:

"i messaggi in arrivo nella mia casella di posta elettronica sono in media 12 ogni 10 minuti. "

Definiamo $X$ come la variabile che conta i messaggi in arrivo in un intervallo di 10 minuti:

$$X \sim \text{Po}(12)$$

Utilizzando poisson in questo modo però potremmo solo lavorare con intervalli di 10 minuti. Se invece volessimo sapere quanti ne arrivano ogni 15 minuti? ogni 13?
Il processo di Poisson ci aiuta in questo:
Quello che bisogna fare è scalare i dati secondo una unità di tempo più comoda: cerchiamo di ricavare **quanti messaggi arrivano mediamente in 1 minuto**

risolviamo la semplice proporzione $12:10 = x : 1 \to x = \frac{12}{10} \text{ messaggi al minuto}$

- Definiamo $\lambda = "\text{numero di messaggi al minuto}" = \frac{12}{10}$
- Definiamo $t = "\text{intevallo di tempo richiesto dall'esercizio}"$
- Definiamo $X_t = "\text{numero di messaggi nell'intervallo di tempo}"$

quindi:
- se $t = 10 \implies X_{10} \sim \mathcal{P}(1.2\cdot 10)$
- se $t = 15 \implies X_{15} \sim \mathcal{P}(1.2\cdot 15)$
- se $t = 13 \implies X_{13} \sim \mathcal{P}(1.2\cdot 13)$

Se vogliamo sapere la probabilità di ricevere più di 3 messaggi in 10 minuti:
allora sarebbe come fare $X_{10}\sim \text{Po}(12)$ che sappiamo già calcolare

$\mathbb{P}[X_{10} > 3] = 1 - \mathbb{P}[X_{10} \leq 3] = 1 - \left(\frac{12^0}{0!}e^{-12} + \frac{12^1}{1!}e^{-12} + \frac{12^2}{2!}e^{-12} +\frac{12^3}{3!}e^{-12}\right) = 0.9977$

Oppure se vogliamo sapere la probabilità di ricevere più di 3 messaggi in 15 minuti:
allora sarebbe come fare $X_{15}\sim \text{Po}(18)$ che sappiamo già calcolare

$\mathbb{P}[X_{15} > 3] = 1 - \mathbb{P}[X_{15} \leq 3] = 1 - \left(\frac{18^0}{0!}e^{-18} + \frac{18^1}{1!}e^{-18} + \frac{18^2}{2!}e^{-18} +\frac{18^3}{3!}e^{-18}\right) = 0.99998$

### Relazione con la distribuzione esponenziale

Il processo di Poisson è fortemente relazionato con la distribuzione esponenziale, infatti possiamo utilizzare le due distribuzione per calcolare lo stesso evento:

Sempre utilizzando il precedente esempio calcoliamo la probabilità che "in 15 minuti non arrivi nessun messaggio"

Per calcolare questa probabilità possiamo utilizzare poisson:

$X_{15} = "\text{numero di messaggi in 15 minuti}"$
$$X_{15} \sim \text{Po}(18)$$

$\mathbb{P}[X_{15} = 0] = \frac{18^0}{0!}e^{-18} = e^{-18}$

oppure possiamo utilizzare la distribuzione esponenziale:

$T = "\text{tempo trascorso tra due messaggi}"$

$$T \sim \text{Exp}(1.2)$$

$\mathbb{P}[T > 15] = e^{1.2\cdot 15} = e^{-18}$


## Funzioni in R

### Uniforme

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X \leq x]$ | `punif(q=x, min=a, max=b)` |


### Normale

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X \leq x]$ | `pnorm(q=x, mean=μ, sd=σ)` |
| $\mathbb{P}[a\leq X \leq b]$ | `pnorm(q=b, mean=μ, sd=σ) - pnorm(q=a, mean=μ, sd=σ)` |


### Gamma

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X \leq x]$ | `pgamma(q=x, shape=α, rate=λ)` |
| $\mathbb{P}[a\leq X \leq b]$ | `pgamma(q=b, shape=α, rate=λ) - pgamma(q=a, shape=α, rate=λ)` |


### Esponenziale

| Probabilità | Funzione R |
|--|--|
| $\mathbb{P}[X \leq x]$ | `pexp(q=x, rate=λ)` |
| $\mathbb{P}[a\leq X \leq b]$ | `pexp(q=b, rate=λ) - pexp(q=a, rate=λ)` |



# Variabili congiunte

Fino ad ora ci siamo occupati di variabili aleatorie prese singolarmente, delle volte però è utile considerare più variabili aleatorie contemporaneamente.

Possiamo considerare un numero indefinito di variabili, per semplicità però considereremo solo due variabili (**distribuzioni bivariate**), i concetti trattati però si possono estendere a più variabili (**distribuzioni multivariate**)


## Funzione di probabilità congiunta

Vogliamo sapere quale è la probabilità che contemporaneamente la variabile aleatoria $X = x$ e la variabile aleatoria $Y = y$, scriviamo questa probabilità come:

$$p(x,y) = \mathbb{P}[X=x, Y=y]$$

Nel caso in cui le due variabili fossero discrete, possiamo rappresentare le probabilità delle combinazioni tramite una tabella.
Vediamo un esempio in cui $X = \{0, 1, 2\}$ e $Y = \{0,1\}$ ed ad ogni combinazione assegniamo una probabilità (data casualmente)

![enter image description here](https://i.ibb.co/hm33fMN/image.png)

Nell'immagine sono anche rappresentate le cosiddette **distribuzioni di probabilità marginali** rispettivamente la colonna $P_Y(y)$ che rappresenta la probabilità fissato un valore di $y$ con tutti i valori di $x$. La riga $P_X(x)$ rappresenta la probabilità fissato un valore di $x$ con tutti i valori di $y$.

Possiamo determinare ad esempio:

$\mathbb{P}[X = 0] = 0.1 + 0.2 = 0.3$
$\mathbb{P}[Y = 1] = 0.2 + 0.2 + 0 = 0.4$
$\mathbb{P}[X \geq 1] = 0.4 + 0.2 + 0.1 + 0 = 0.7$
$\mathbb{P}[Y < X] = 0.4 + 0.1 + 0 = 0.5$

## Funzione di densità congiunta

Se invece $X$ e $Y$ sono continue, le loro combinazioni formano un piano bidimensionale.

$$f(x,y) = \mathbb{P}[a1\leq X \leq a2, b1\leq Y \leq b2]$$

![enter image description here](https://i.ibb.co/bK824LZ/image.png)

## Variabili congiuntamente continue

Due variabili $X$ e $Y$ sono dette congiuntamente continue se esiste una funzione di densità **integrabile e positiva** tale che l'area del piano bidimensionale risulta 1

immaginando di avere una funzione di probabilità rappresentata dal seguente piano

![enter image description here](https://i.ibb.co/bK824LZ/image.png)

Le variabili aleatorie $X$ e $Y$ per essere definite congiuntamente **continue**:
- $f(x,y) \geq 0 \hspace{3mm} \forall(x, y) \in \mathbb{R}^2$ (cioè tutte le probabilità devono essere maggiori o uguali a zero)
- $\int_{a_1}^{a_2}\left(\int_{b_1}^{b_2} f(x, y) dx\right)dy= 1$ (cioè l'area del piano deve essere 1, in altre parole la somma di tutte probabilità deve risultare 1)

generalizzando, abbiamo che se chiamiamo quel piano $C$

$$\mathbb{P}[(X,Y) \in C] = \int\int_{C}f(x,y)dx\,dy$$

possiamo ottenere la **funzione di ripartizione** dalla funzione di densità:

$$F(x,y) = \mathbb{P}[X \leq x, Y \leq y] = \int_{-\infty}^{y}\int_{\infty}^{x} f(s,t) ds \,dt$$

possiamo ottenere le probabilità di densità marginali integrando per la variabili opposta:

$$f_X(x) = \int_\mathbb{R}f(x,y) \, dy$$

$$f_Y(y) = \int_\mathbb{R}f(x,y) \, dx$$

## Funzione di ripartizione congiunta

La funzione di ripartizione di una coppia di variabile viene rappresentata così:

$$F(x,y) = \mathbb{P}[X \leq x, Y \leq y]$$

dalla funzione di ripartizione congiunta è possibile ottenere la funzione di ripartizione delle singole variabili (chiamata **distribuzioni marginale**)

- distribuzione marginale rispetto a $X$
	$$F_X(x) =\lim_{y \to \infty}F(x,y)$$
- distribuzione marginale rispetto a $Y$
	$$F_Y(y) =\lim_{x \to \infty}F(x,y)$$

dalla funzione di ripartizione si può ottenere la funzione di densità

$$f(x,y) = \frac{d\cdot d F(x,y)}{dy\,dx}$$


Esempio

data la seguente funzione, determinare il valore di $k$ che rende la funzione una funzione di densità.

$$f(x,y) = kxy\, \bm{1_{(x,y) \in [0,1]^2}}$$

dobbiamo trovare il valore di $k$ che rende il doppio integrale della funzione uguale ad 1

$$\int_{0}^{1}\int_{0}^{1}kxy \, dy\, dx = 1$$

$$\int_{0}^{1}kx\int_{0}^{1}y \, dy\, dx = 1$$

$$\int_{0}^{1}kx\left[\frac{y^2}{2}\right]^{1}_{0}\, dx = 1$$

$$\int_{0}^{1}kx\frac{1}{2}\, dx = 1$$

$$\frac{k}{2}\int_{0}^{1}x\, dx = 1$$

$$\frac{k}{4}= 1$$

$$k = 1$$

Proviamo ora a calcolare la seguente probabilità

$\mathbb{P}[X > Y]$

realizziamo un grafico per aiutarci:

![enter image description here](https://i.ibb.co/CtLKD0J/image.png)

dobbiamo quindi andare a calcolare l'area che si trova sotto alla diagonale, abbiamo quindi che la variabile $x$ varia tra 0 e 1 mentre la variabile $Y$ varia tra 0 e il valore di $x$

$$\int_{0}^{1}\int_{0}^{x}4xy \, dy\, dx$$

$$\int_{0}^{1}4x\left[\frac{y^2}{2}\right]^x_0\, dx$$

$$\int_{0}^{1}4x\frac{x^2}{2}\, dx$$

$$\int_{0}^{1}2x^3\, dx$$

$$2\left[\frac{x^4}{4}\right]_0^1$$

$$2\frac{1}{4} = \frac{1}{2}$$

infatti l'area della parte sottostante alla diagonale è metà dell'area del rettangolo che sappiamo essere uguale ad 1


## Variabili indipendenti

Il significato di variabili indipendenti si estende anche a più variabili:

$$\mathbb{P}[X \in A \land Y \in B] = \mathbb{P}[X \in A]\cdot \mathbb{P}[Y \in B]$$


che per le variabili discrete equivale ad usare la funzione di probabilità:
$$p(x,y) = p_X(x)\cdot p_Y(y)$$

mentre per le variabili continue equivale ad usare la funzione di densità:
$$f(x,y) = f_X(x)\cdot f_Y(y)$$


Vediamo degli esempi

Esempio 1

$$f(x,y) = \begin{cases}
24xy & x,y \in [0,1], x+y \in [0,1]\\
0 &\text{altrove}
\end{cases}$$

Determinare se $X$ e $Y$ sono indipendenti.

In questo caso viene molto utile fare il grafico della funzione:

![enter image description here](https://i.ibb.co/bNn1bhH/image.png)

scegliendo a caso una $x$ nel suo dominio ci dice qualcosa su come deve essere la $y$? si perchè la somma tra $x$ e $y$ deve essere minore di 1, quindi la $y$ **dipende** dal valore della x. Vale anche viceversa.
Quindi le due variabili non sono indipendenti


Esempio 2:

considerando la seguente rappresentazione della funzione di probabilità

![enter image description here](https://i.ibb.co/FwtyQxW/image.png)

determinare se $X$ e $Y$ sono indipendenti

In queste situazioni bisogna andare a confrontare ogni funzione di probabilità, appena si trova una prova che non venga rispettata la proprietà $p(x,y) = p_X(x)\cdot p_Y(y)$ allora si può concludere che non sono indipendenti:

$p(0,0) = p_X(0)\cdot p_Y(0)$
$0.2 = 0.5\cdot 0.4$ vale

$p(0,1) = p_X(0)\cdot p_Y(1)$
$0.2 = 0.5\cdot 0.3$ **non vale**

quindi possiamo concludere senza ulteriori confronti che le due variabili non sono indipendenti.


Esempio 3

**Date le probabilità marginali** delle due variabili e sapendo che esse sono **indipendenti** 

![enter image description here](https://i.ibb.co/L1C5prj/image.png)

possiamo calcolare la funzioni di probabilità congiunta utilizzando $p(x,y) = p_X(x)\cdot p_Y(y)$, otteniamo quindi 

![enter image description here](https://i.ibb.co/0Xqd26q/image.png)


## Distribuzioni condizionate discrete

La probabilità condizionata di $X$ dato $Y = y$ è 

$$p_{X|Y}(x|y) = \frac{p(x, y)}{p_Y(y)}$$

analogamente la probabilità condizionata di $Y$ dato $X = x$ è 

$$p_{Y|X}(y|x) = \frac{p(x, y)}{p_X(x)}$$


Se $X$ e $Y$ sono indipendenti allora

$p_{X|Y}(x|y) =p_X(x)$
$p_{Y|X}(y|x) = p_Y(y)$


Esempio

![enter image description here](https://i.ibb.co/tXnW4Yw/image.png)

$p_{X|Y}(0|1) = \frac{p(0, 1)}{p_Y(1)} = \frac{0.2}{0.5} = 0.4$

$p_{X|Y}(1|1) = \frac{p(1, 1)}{p_Y(1)} = \frac{0.3}{0.5} = 0.6$

inoltre possiamo notare che le probabilità che abbiamo calcolato sono diverse dalla distribuzione marginale di $X$ e possiamo concludere che $X$ e $Y$ non sono indipendenti: $p_{X|Y}(0|1) \neq p_X(0)$ e $p_{X|Y}(1|1) \neq p_X(1)$


## Distribuzioni condizionate continue

La probabilità condizionata di $X$ dato $Y = y$ è 

$$f_{X|Y}(x|y) = \frac{f(x, y)}{f_Y(y)}$$

$$\mathbb{P}[X\in A | Y = y] = \int_{A}f_{X|Y}(x|y)\,dx$$

analogamente la probabilità condizionata di $Y$ dato $X = x$ è 

$$f_{Y|X}(y|x) = \frac{f(x, y)}{f_X(x)}$$

$$\mathbb{P}[Y\in B | X = x] = \int_{B}f_{Y|X}(y|x)\,dy$$


Se $X$ e $Y$ sono indipendenti allora

$f_{X|Y}(x|y) =f_X(x)$
$f_{Y|X}(y|x) = f_Y(y)$

## Valore atteso

Il valore atteso di una trasformazione $g(X,Y)$ è possibile calcolarlo senza andare a calcolare il tipo specifico di distribuzione:

- caso discreto:

$$\mathbb{E}[g(X,Y)]] =\sum_y\sum_x g(x,y)p(x,y)$$

- caso continuo:

$$\mathbb{E}[g(X,Y)]]=\int\int_{\mathbb{R^2}} g(x,y)f(x,y)\,dxdy$$

Due importanti conseguenze sono

1. $\mathbb{E}[X+Y] = \mathbb{E}[X] + \mathbb{E}[Y]$
2. se $X$ e $Y$ sono indipendenti allora $\mathbb{E}[X\cdot Y] = \mathbb{E}[X] \cdot \mathbb{E}[Y]$

Esempio:
prendiamo lo stesso esempio precedentemente visto.
![enter image description here](https://i.ibb.co/FwtyQxW/image.png)

$\mathbb{E}[X] = 0\cdot 0.5 + 1 \cdot 0.5 = 0.5$
$\mathbb{E}[Y] = 0\cdot 0.4 + 1 \cdot 0.3 + 2 \cdot 0.15 + 3 \cdot 0.15 = 1.05$

$\mathbb{E}[X + Y] =0.5 + 1.05 = 1.55$

## Covarianza

La varianza di due variabili congiunte, detta **covarianza** viene calcolata nel seguente modo:

$$\text{Cov}[X,Y] =\mathbb{E}[XY] - \mathbb{E}[X]\cdot \mathbb{E}[Y]$$

Vediamo le proprietà della covarianza:

- $\text{Cov}[X,Y] = \text{Cov}[Y,X]$
- $\text{Cov}[X,X] = \text{Var}[X]$
- $\text{Cov}[aX,Y] = a\text{Cov}[X,Y]$
- $\text{Cov}[X,a] = 0$
- $\text{Cov}[\sum_i X_i,\sum_j Y_j] = \sum_i \sum_j\text{Cov}[X_i,Y_i]$


### Varianza di una somma di variabili

Un'altra importante proprietà è la seguente:

$$\text{Var}\left[X + Y\right] = \text{Var}[X] + \text{Var}[Y] + 2\text{Cov}[X,Y]$$

Se **le variabili sono è indipendente** allora

$$\text{Var}\left[X +Y\right] = \text{Var}[X] + \text{Var}[Y]$$

### Covarianza e Indipendenza

Se due variabili $X,Y$sono **indipendenti** allora $\text{Cov}[X,Y] =0$
**Non è possibile affermare il contrario**

Infatti se $\text{Cov}[X,Y] =0$ si dice che $X$ e $Y$ sono **non correlate**


## Correlazione

La **correlazione** misura quanto sono dipendenti tra le due variabili tra loro.
Viene indicata come $\text{Cor}[X,Y]$ oppure con $\rho$. Si misura come segue:

$$\text{Cor}[X,Y]= \rho_{X,Y} =\frac{\text{Cov}[X,Y]}{\sqrt{\text{Var}[X]\cdot \text{Var}[Y]}}$$

Il valore della correlazione varia tra -1 e 1

$$-1\leq \rho \leq 1$$

dove se:
- se $\rho \to 0$ allora significa che le variabili sono quasi indipendenti: non sembra esserci una evidente correlazione tra il movimento di una variabile con il movimento dell'altra
- se $\rho \to 1$ (correlazione positiva) significa che quando una aumenta anche l'altra aumenta, e quando una diminuisce anche l'altra diminuisce
- se $\rho \to -1$ (correlazione negativa) significa che quando una aumenta l'altra diminuisce, e quando una diminuisce l'altra aumenta

![enter image description here](https://i.ibb.co/0VkGV4g/image.png)

Esempio
Calcoliamo la correlazione delle seguenti variabili congiunte
![enter image description here](https://i.ibb.co/FwtyQxW/image.png)

Troviamo le medie per calcolare la covarianza
$\mathbb{E}[XY] = (1 \cdot 1 \cdot 0.10) + (1 \cdot 2 \cdot 0.10) + (1 \cdot 3 \cdot 0.10) = 0.6$
$\mathbb{E}[X] = 0\cdot 0.5 + 1 \cdot 0.5 = 0.5$
$\mathbb{E}[Y] = 0\cdot 0.4 + 1 \cdot 0.3 + 2 \cdot 0.15 + 3 \cdot 0.15 = 1.05$

$\text{Cov}[X,Y] =0.6 - 0.5\cdot 1.05= 0.075$

calcoliamo le varianze per calcolare la correlazione
$\text{Var}[X] =(0^2 \cdot 0.5) + (1^2 \cdot 0.5) - 0.5^2 = 0.25$
$\text{Var}[Y] =(0^2 \cdot 0.40) + (1^2 \cdot0.30) + (2^2 \cdot 0.15) + (3 \cdot 0.15) - 1.05^2 = 1.1475$

$$\text{Cor}[X,Y] = \frac{0.075}{\sqrt{0.25 \cdot 1.1475}} = 0.14$$


## Somma di variabili con distribuzioni note

- $\text{Bin}(1,p) +\text{Bin}(1,p)$ indipendenti $\longrightarrow \text{Bin}(2,p)$
- $\text{Po}(\lambda_1) +\text{Po}(\lambda_2)$ indipendenti $\longrightarrow \text{Po}(\lambda_1 + \lambda_2)$
- $\text{Exp}(\lambda) +\text{Exp}(\lambda)$ indipendenti $\longrightarrow \text{Ga}(2, \lambda)$
- $\text{N}(\mu_1, \sigma_1^2) +\text{N}(\mu_2, \sigma_2^2)$ indipendenti $\longrightarrow \text{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$

## Media campionaria

Avendo $n$ variabili $X_1, ..., X_n$ indipendenti e con stessa distribuzione (viene detto un **campione di variabili**).
Diciamo che $\mathbb{E}[X_i] = \mu$ e $\text{Var}[X_i]=\sigma^2$ (tutte le variabili hanno stessa media e varianza)

La media campionaria è un'altra variabile aleatoria che si definisce come:

$$\bar{X} =\frac{X_1 + ... + X_n}{n}$$


Dato che si tratta di una variabile aleatoria possiamo calcolare:

- valore atteso
	$$\mathbb{E}[\bar{X}] = \mu$$
- varianza
	$$\text{Var}[\bar{X}] = \frac{\sigma^2}{n}$$


## Disuguaglianza di Chebyshev

Data una variabile aleatoria $X$ di cui non si conosce la distribuzione ma si conosce il valore atteso $\mathbb{E}[X]$ e varianza $\text{Var}[X]$ (non infinita).
Possiamo determinare un limite superiore alla probabilità che la variabile assuma valori che si discostano di almeno $\epsilon$ dal valore medio

$$\mathbb{P}[|X - \mathbb{E}[X]| > \epsilon] \leq \frac{\text{Var}[X]}{\epsilon^2}$$

dualmente possiamo anche avere un limite inferiore:

$$\mathbb{P}[|X - \mathbb{E}[X]| < \epsilon] \geq 1-\frac{\text{Var}[X]}{\epsilon^2}$$

Ad esempio:
"Il numero di richieste giornaliere di collegamento ad un server è una v.a. Y con valore atteso 130 e varianza 50. Qual è il limite superiore della probabilità che in un giorno si colleghino fra i 100 e i 160 clienti?"

Dato che il range si discosta di 30 dalla media allora $\epsilon = 30$

$\mathbb{P}[100\leq Y \leq 160] = \mathbb{P}[|Y - 130| > 30] \leq \frac{50}{30^2}$

$\mathbb{P}[|Y - 130| > 30] \leq 0.5555$


## Legge dei grandi numeri

La **legge dei grandi numeri** ci dice che all'aumentare di $n$, la probabilità che la media campionaria $\bar{X}_n$ si avvicini alla media della distribuzione delle variabili $\mu$ si avvicina ad 1

$$\bar{X}_n\xrightarrow{\text{p}}\mu$$

in altre parole più variabili si considerano più la media campionaria si avvicina alla media della distribuzione.

Un classico esempio è il lancio di un dado: ogni faccia ha una probabilità teorica di $\frac{1}{6}$, per la legge dei grandi numeri facendo un sufficiente numero di lanci del dado la media dei valori ottenuti si avvicinerà ad $\frac{1}{6}$.

## Teorema del limite centrale

Il teorema del limite centrale ci dice che considerando un sufficiente numero di variabili aleatorie, **indipendentemente dalla loro distribuzione**, la distribuzione della media campionaria si può approssimare alla distribuzione normale standard

Se le variabili che considero $X_1,...,X_n$ seguono già una distribuzione normale allora la media campionaria seguirà già una distribuzione normale, anche se considero poche variabili.
Mentre se le variabili hanno distribuzione molto diverse dalla normale è necessario considerare molte variabili (circa più di 30) per ottenere una approssimazione valida della media campionaria alla distribuzione normale standard.

$$\bar{X}_n \sim \text{N}\left(\mu, \frac{\sigma^2}{n}\right)$$

Da cui posso ricavarmi la normale standard:

$$Z = \frac{\bar{X}_n-\mu}{\sqrt{\frac{\sigma^2}{n}}}$$

$$Z \sim \text{N}(0, 1)$$

Questo teorema si utilizza quando nell’esercizio viene data la **quantità di elementi, la relativa media e deviazione standard/varianza**


# Catene di Markov

Le catene di Markov sono un modello che descrive una sequenza di eventi.
In particolare, la probabilità che accada un evento è determinata solo dall'evento precedente, e non dallo storico della successione degli eventi.

Data una serie potenzialmente infinita di variabili aleatorie **discrete** $X_1, X_2,...$ che assumono un numero finito di valori, chiamato **spazio degli stati** $S=\{1,2,..., M\}$

La successione di variabili viene chiamata **catena di Markov** se per ogni variabile vale che: la probabilità che la variabile assuma un certo valore dipende soltanto dal valore  della variabile precedente.

$$P[X_{n+1} = j] = P[X_{n+1} = j | X_n = i] = p_{ij}$$

## Rappresentazione a diagramma di stato

Dato lo spazio degli stati e la distribuzione di probabilità di partenza della prima variabile, risulta molto utile rappresentare il passaggio da uno stato all'altro, con le relative probabilità, attraverso un **diagramma di stato**.

Ad esempio avendo
- spazio degli stati $S = \{1,2,3\}$
- distribuzione di probabilità delle variabili $\{X_n\}$ rappresentate attraverso il simbolo $\pi^{(n)}$. La distribuzione indica con quale probabilità dallo stato attuale si può passare agli altri stati.
	$\pi^{(0)} = (\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$	rappresenta la distribuzione di partenza, il precedente stato non esiste.
	$\pi^{(1)} = (\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$ distribuzione partendo dallo stato 1
	$\pi^{(2)} = (\frac{2}{3}, \frac{1}{3}, 0)$	distribuzione partendo dallo stato 2
	$\pi^{(3)} = (0,\frac{1}{3}, \frac{2}{3})$ distribuzione partendo dallo stato 3
	
Rappresentiamo il diagramma di stato:

![enter image description here](https://i.ibb.co/jrWb261/image.png)

## Matrice di transizione

La distribuzione delle variabili generalmente viene rappresentata attraverso una matrice $P$, detta **matrice di transizione**.

Nell'esempio precedente la sequenza di distribuzioni:
$\pi^{(1)} = (\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$
$\pi^{(2)} = (\frac{2}{3}, \frac{1}{3}, 0)$
$\pi^{(3)} = (0,\frac{1}{3}, \frac{2}{3})$

verrebbero rappresentate attraverso la seguente matrice, contenente le probabilità $p_{ij}$

$$\large P = \begin{bmatrix}
\frac{1}{3} & \frac{1}{3} &\frac{1}{3}\\
\frac{2}{3} & \frac{1}{3} &0\\
0 & \frac{1}{3} &\frac{1}{3}\\
\end{bmatrix}$$

Le matrici di transizione devono rispettare due proprietà:
- Le probabilità al suo interno devono essere $0\leq p_{ij}\leq 1$
- Ogni riga deve sommare 1: $\sum_{j} p_{ij} = 1$

Proviamo ad rappresentare una delle possibili successioni che si possono avere del precedente esempio.
Realizziamo un piano cartesiano in cui nell'asse $x$ abbiamo l'avanzamento delle variabili, mentre nell'asse $y$ abbiamo i valori che può assumere ogni variabile

![enter image description here](https://i.ibb.co/WPGbpBZ/image.png)

## Transizione a due passi / probabilità condizionata

Immaginiamo il seguente esempio

"Nel mondo di Oz ci sono tre possibili situazioni meteorologiche: 1=pioggia, 2=sole, 3=neve."
Inoltre:
- non ci sono mai due giorni consecutivi di sole;
- se oggi c’è sole, domani nevica o piove con la stessa probabilità;
- se nevica o piove, con probabilità 0.5 domani rimane invariato e con probabilità 0.5 domani cambia a caso (con la stessa probabilità).

Se oggi c’è il sole, come sarà il tempo fra due giorni?

Aiutandoci con il diagramma a stati, riusciamo ad ottenere la seguente matrice

$$\large P = \begin{bmatrix}
\frac{1}{2} & \frac{1}{4} &\frac{1}{4}\\
\frac{1}{2} & 0 &\frac{1}{2}\\
\frac{1}{4} & \frac{1}{4} &\frac{1}{2}\\
\end{bmatrix}$$


Quando ci viene detto "Se oggi c'è il sole" ci viene definita la distribuzione iniziale:
$\pi^{(0)} = (0, 1, 0)$

L'esercizio ci sta chiedendo una **probabilità condizionata**

$$P[X_2 = j|X_0 =2]$$

Utilizzando la matrice che abbiamo possiamo solo sapere il meteo di **domani**, ma non fra due giorni. Per determinare la probabilità che ci sia pioggia, neve o sole tra due giorni dovremmo sommare tutte le possibili combinazioni.
Fortunatamente le varie probabilità tra due giorni ci escono se andiamo a moltiplicare la matrice per se stessa.

$P \cdot P = P^2$ viene chiamata **matrice di transizione a due passi**

In generale quando vogliamo andare a verificare le probabilità tra $n$ eventi, le probabilità si ottengono facendo $P^n$, **matrice di transizione a $n$ passi**

Tornando al nostro caso, noi siamo interessati solo a partire dal fatto che oggi ci sia sole, quindi possiamo evitare di andare a moltiplicare tutta la matrice, ma possiamo moltiplicare solo le righe che ci interessano:

1. probabilità che ci sarà pioggia tra due giorni:
	$$P[X_2 = 1|X_0 =2] = \begin{bmatrix}\frac{1}{2} & 0 & \frac{1}{2}\end{bmatrix} \cdot \begin{bmatrix}\frac{1}{2}\\\frac{1}{2}\\\frac{1}{4}\end{bmatrix} = \frac{3}{8}$$

2. probabilità che ci sarà sole tra due giorni:
	$$P[X_2 = 2|X_0 =2] = \begin{bmatrix}\frac{1}{2} & 0 & \frac{1}{2}\end{bmatrix} \cdot \begin{bmatrix}\frac{1}{4}\\0\\\frac{1}{4}\end{bmatrix} = \frac{1}{4}$$

3. probabilità che ci sarà neve tra due giorni:
	$$P[X_2 = 3|X_0 =2] = \begin{bmatrix}\frac{1}{2} & 0 & \frac{1}{2}\end{bmatrix} \cdot \begin{bmatrix}\frac{1}{4}\\\frac{1}{2}\\\frac{1}{2}\end{bmatrix} = \frac{3}{8}$$

## Probabilità congiunte

Dato che la probabilità di ogni variabile dipende dalla variabile precedente, le probabilità congiunte si calcolano nel seguente modo:

$$P[X_0 = i, X_1 = j, X_2 = k, X_3 = t] =$$

$$= \pi^{(0)}_i \cdot p_{ij} \cdot p_{jk} \cdot p_{kt}$$


## Distribuzione marginale

La distribuzione marginale $\pi^{(n)}$ ci serve per determinare quale è la distribuzione della probabilità per ogni stato dopo $n$ eventi.

Viene calcolato utilizzando la distribuzione iniziale $\pi^{(0)}$ e la matrice di transizione a $n$ passi

$$\pi^{(n)} = \pi^{(0)} \cdot P^n$$

Considerando il solito esempio, ci viene chiesto "se oggi c'è il sole, qual è la distribuzione del tempo fra due giorni?"

$$\pi^{(2)} =\begin{bmatrix}0 & 1 & 0 \end{bmatrix} \cdot \begin{bmatrix}
\frac{1}{2} & \frac{1}{4} &\frac{1}{4}\\
\frac{1}{2} & 0 &\frac{1}{2}\\
\frac{1}{4} & \frac{1}{4} &\frac{1}{2}\\
\end{bmatrix}
\cdot
\begin{bmatrix}
\frac{1}{2} & \frac{1}{4} &\frac{1}{4}\\
\frac{1}{2} & 0 &\frac{1}{2}\\
\frac{1}{4} & \frac{1}{4} &\frac{1}{2}\\
\end{bmatrix} = \begin{bmatrix}\frac{3}{8} & \frac{2}{8} & \frac{3}{8} \end{bmatrix}$$


## Catene regolari

Una catena di Markov si dice **regolare** se ogni probabilità nella matrice di transizione a $n$ passi risulta essere strettamente maggiore di 0.

Nell'esempio precedente la matrice $P$ possedeva uno $0$ al suo interno, però $P^2$ no. Quindi quella catena di markov è regolare.

Infatti 

$$\large P^2 = \begin{bmatrix}
7/16 & 3/16 &3/8\\
3/8 & 2/8 & 3/8\\
3/8 & 3/16 &7/16\\
\end{bmatrix}$$

Un modo intuitivo per determinare se una catena di Markov è regolare è attraverso il diagramma di stato: se c'è un nodo da cui non è possibile uscire, allora non è regolare.
Ad esempio:
![enter image description here](https://i.ibb.co/gmK60q5/image.png)
Quando raggiungiamo lo stato "2" non riusciamo più a raggiungere gli altri stati, per cui non è regolare

## Distribuzione stazionaria

Se la catena è regolare, allora moltiplicando la matrice per se stessa un numero tendente ad infinito di volte si ottiene la stessa **distribuzione stazionaria** $\pi$ per ogni riga della matrice

La distribuzione stazionaria rispetta le seguenti due proprietà:
1. $\pi \cdot P = \pi$
2. la somma degli elementi della distribuzione somma 1


### Catena stazionaria

Se la distribuzione iniziale $\pi^{(0)}$ è la distribuzione stazionaria $\pi$ e tutte le distribuzione marginali sono uguali a $\pi$, allora si dice che la **catena è stazionaria**


