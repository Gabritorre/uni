
# Esercizi programmazione matematica

## Es 1

Un’industria possiede $3$ centri di produzione (fabbriche) $F1, F2, F3$ e $2$ magazzini di stoccaggio $M1, M2$. Nelle fabbriche durante il mese corrente si producono due tipi di prodotti $P1$ e $P2$, che vanno trasportati nei magazzini, in attesa del ritiro da parte dei grossisti (si assuma che la descrizione semplificata appena data, contenga tutti e soli gli elementi caratterizzanti della produzione di $P1$ e $P2$).

Nella seguente tabella riassumiamo i tempi unitari (in ore/unità) ed i costi unitari (in euro/unità) di produzione di $P1$ e $P2$, in ciascuna fabbrica:

![https://i.ibb.co/9gjWgkf/image.png](https://i.ibb.co/9gjWgkf/image.png)

 

Inoltre, in ciascuna fabbrica, è possibile far lavorare gli impianti per un numero di ore massimo pari a $2200$ ore per $F1$, $930$ ore per $F2$ e $1600$ ore per $F3$. infine i $2$ magazzini richiedono rispettivamente un numero minimo di unita di prodotto pari a:

|  | $M1$ | $M2$ |
| --- | --- | --- |
| $P1$ | 1100 | 1900 |
| $P2$ | 1650 | 1300 |

ed i costi di trasporto (euro/unità) dalle fabbriche ai magazzini, sono riassunti nella seguente tabella:

|  | $F1$ | $F2$ | $F3$ |
| --- | --- | --- | --- |
| $M1$ | 0.9 | 0.88 | 1.03 |
| $M2$ | 0.99 | 1.10 | 0.85 |

Sulla base dei soli dati forniti si fornisca un modello di Programmazione Matematica nel quale si intende **minimizzare i costi di produzione e trasporto** dei prodotti $P1$ e $P2$.

## Risoluzione

### Step 1 - definizione variabili

Introduciamo i due seguenti insiemi di variabili:

- $x_{ij}$ = unita di $P1$ prodotte nella fabbrica $Fi$ e trasportati nel magazzino $Mj$
$(i = 123, j =12)$
- $y_{ij}$ = unita di $P2$ prodotte nella fabbrica $Fi$ e trasportati nel magazzino $Mj$
$(i = 123, j =12)$

### Step 2 - definizione funzione obiettivo

In questo caso si tratta di un problema di **minimizzazione** (di costi di produzione + trasporto).

La quantità da minimizzare (funzione obiettivo) è data da:

$$
\min\begin{array}{l}    \text{costi di produzione P1} +\\
\text{costi di trasporto P1}+ \\    \text{costi di produzione P2} + \\    \text{costi di trasporto P2 +}\end{array}
$$

$$
\min\begin{array}{l}    7.2(x_{11} + x_{12}) + 6.3(x_{21} + x_{22}) + 5.2(x_{31} + x_{32}) + \\    0.90x_{11} + 0.88x_{21} + 1.03x_{31} + 0.99x_{12} + 1.10x_{22} + 0.85x_{32} + \\    9.2(y_{11} + y_{12}) + 7.3(y_{21} + y_{22}) + 6.6(y_{31} + y_{32}) + \\    0.90y_{11} + 0.88y_{21} + 1.03y_{31} + 0.99y_{12} + 1.10y_{22} + 0.85y_{32}.\end{array}
$$

### Step 3 - definizione vincoli

Definiamo infine i vincoli che il modello del problema deve rispettare.

In particolare definiamo i vincoli relativi ai tempi di produzione per ogni fabbrica:

$$
0.72(x_{11} + x_{12}) + 0.81(y_{11} + y_{12}) \leq 2022 \\
0.63(x_{21} + x_{22}) + 0.68(y_{21} + y_{22}) \leq 930 \\
0.5(x_{31} + x_{32}) + 0.67(y_{31} + y_{32}) \leq 1600
$$

e i vincoli relativi ai unità minime di prodotto richieste da ogni magazzino:

$$
x_{11} + x_{21} + x_{31} \geq 1100 \\
y_{11} + y_{21} + y_{31} \geq 1650 \\
x_{12} + x_{22} + x_{32} \geq 1900 \\
y_{12} + y_{22} + y_{32} \geq 1300 \\
$$
