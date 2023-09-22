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

- **disposizioni con ripetizione**: il totale delle combinazioni di un insieme di $n$ elementi prendendone $r$ alla volta e in cui l'ordine degli elementi è importante è dato da:
$$n^r$$
ne è un esempio il linguaggio binario
$n = \{0,1\} = 2$
$r = 3$

le combinazioni totali sono $n^r = 2^3 = 8$ infatti andandole a rappresentare tutte:

$$(000), (001), (010), (011), (100), (101), (110), (111)$$

similmente possiamo fare l'esempio di rappresentare parole lunghe 2 lettere utilizzando l'alfabeto $\{I, L, A\}$

$n = 3$
$r = 2$
totale di combinazioni: $3^2 = 9$ infatti abbiamo:
$$(II), (IL), (IA), (LI), (LL), (LA), (AI), (AL), (AA)$$

- **disposizioni senza ripetizione**: se invece vogliamo sempre prendere $r$ su un insieme $n$ ma non ci interessa l'ordine degli elementi, possiamo calcolare il totale come 
$$\frac{n!}{(n-r)!}$$


**Esempio**: quante parole di 2 lettere **diverse** sono componibili con l'alfabeto $\{I, L, A\}$

$n = 3$
$r = 2$

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


![](https://i.ibb.co/xSxMfH0/albero-calc-comb.png)
