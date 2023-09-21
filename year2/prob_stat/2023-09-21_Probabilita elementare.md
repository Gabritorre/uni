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

- **disposizioni con ripetizione**: se invece vogliamo sempre prendere $r$ su un insieme $n$ ma non ci interessa l'ordine degli elementi, possiamo calcolare il totale come 
$$\frac{n!}{(n-r)!}$$


esempio: quante parole di 2 lettere **diverse** sono componibili con l'alfabeto $\{I, L, A\}$

$n = 3$
$r = 2$

totale: $\frac{3!}{(3-2)!} = \frac{6}{1} = 6$

### Permutazione

### Combinazione
https://dariomalchiodi.gitlab.io/sad-python-book/L09-Calcolo_combinatorio.html#:~:text=Principio%20fondamentale%20del%20calcolo%20combinatorio%3A%20se%20ci%20sono%20s1,allora%20il%20numero%20delle%20sequenze

![](https://i.ibb.co/xSxMfH0/albero-calc-comb.png)
