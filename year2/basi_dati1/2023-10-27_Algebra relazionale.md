﻿# Algebra relazionale

L'algebra relazionale è un linguaggio relazionale che combina un insieme di operatori che operano su relazioni (tabelle) e restituiscono relazioni (tabelle).

Serve per rappresentare le interrogazioni (in modo indipendente dal linguaggio poi utilizzato) che si possono fare su un database.

Ci sono diversi tipi di operatori:

- **primitivi**: ridenominazione, proiezione, unione, differenza, restrizione, prodotto
- **derivati**: giunzione, divisione
- **altri**: raggruppamento, order by, min, max, ...

## Ridenominazione

Rappresentiamo questo operatore con la lettera greca $\rho$ (detta "rho").

$$\rho_{A\leftarrow B}(R)$$

è l'equivalente del comando **AS** in SQL

Serve per rinominare il nome di una colonna $B$ nel nuovo nome $A$ di una tabella $R$

è utile quando abbiamo tabelle che hanno colonne con lo stesso nome.

## Unione e Differenza

Avendo due tabelle $R$ e $S$ **dello stesso tipo** (quindi le tabelle hanno le colonne con gli stessi tipi di dato)

- **Unione**: crea una nuova tabella con le righe della tabella $R$ assieme alle righe della tabella $S$.
	Il numero di colonne rimane invariato e vengono esclusi i duplicati

	$$R\cup S = \{t \text{ tale che: } t\in R \lor t \in S\}$$

	è l'equivalente del comando **UNION** (in cui esclude i duplicati) oppure **UNION ALL** (include anche i duplicati) in SQL

- **Differenza**: crea una nuova tabella con le righe della tabella $R$ che però non sono nella tabella $S$
	$$R - S = \{t \text{ tale che: } t\in R \land t \notin S\}$$
	
	è l'equivalente del comando **EXCEPT** in SQL
	
## Proiezione

rappresentiamo questo operatore con la lettera greca $\pi$ (detta "pi").

$$\pi_{a_1, a_2, a_3, ..., a_n}(R)$$

è l'equivalente del comando **SELECT** in SQL

Crea una tabella con un sottoinsieme delle colonne della tabella $R$, Il sottoinsieme viene specificato tramite l'elenco delle colonne che si desidera mantenere $a_1, a_2, a_3,$ ecc...

### Proiezione generalizzata

è possibile fare delle operazioni aritmetiche sulle colonne selezionate, e opzionalmente rinominare l'operazione usando la parola chiave **AS** seguita dal nuovo nome:

$$\pi_{\text{a1, a2, a1+a2 AS somma}} (R)$$


## Restrizione

Rappresentiamo questo operatore con la lettera greca "sigma" $\sigma$ e la condizione la indichiamo con "phi" $\phi$.

$$\sigma_{\phi}(R)$$

è l'equivalente del comando **WHERE** in SQL

Crea una tabella solo con le righe della tabella $R$ che soddisfano la condizione $\phi$

## Prodotto cartesiano

Avendo due tabelle $R$ ed $S$, il prodotto cartesiano

$$R\times S$$

crea una nuova tabella in cui ogni riga di $R$ viene affiancata ad ogni riga di $S$

Equivale al comando **CROSS JOIN** oppure **FROM \<tabella1\>, \<tabella2\>** in SQL

Esempio grafico:
![enter image description here](https://i.ibb.co/5Wj6xgx/prodotto-cartesiano.png)

## Giunzione

Rappresentiamo questo operatore con il simbolo $\bowtie$ e la condizione la rappresentiamo con $\phi$

$$R \underset{\phi}{\bowtie} S$$

Serve ad affiancare le righe delle due tabelle se viene soddisfatta la condizione tra la coppia di righe

equivalente al comando **(INNER) JOIN \<tabella\> ON \<condizione\>** in SQL

ad esempio

$$R \underset{R.a = S.b}{\bowtie} S$$

Crea una nuova tabella in cui si affiancano le righe se soddisfano la condizione che: l'attributo $a$ della tabella $R$ e l'attributo $b$ della tabella $S$ sono uguali.

Spesso usato per unire tabelle che sono in relazione tramite *foreign key*, dove la condizione è che la *foreign key* di una tabella e la *primary key* dell'altra sono uguali.

### Giunzione naturale

È un particolare tipo di join che confronta automaticamente le colonne delle due tabelle con lo stesso nome, senza bisogno quindi di una condizione. Non è consigliato utilizzarla in quando è meglio esplicitare la condizione di join.

Equivalente al comando **NATURAL JOIN \<tabella\>** in SQL

### Giunzione esterna

È un particolare tipo di join che mantiene anche le righe che non soddisfano la condizione del join (quindi vengono ottenute tutte le righe di entrambe le tabelle), a queste righe vengono aggiunti dei valori NULL dove manca la corrispondenza.

equivalente al comando **OUTER JOIN \<tabella\> ON \<condizione\>** in SQL

Esempio

Tabella $R$
| id | nome |
|--|--|
| 1 | Alice|
| 2 | Bob |
| 3 | Charlie |

Tabella $S$
| id | età|
|--|--|
| 1 | 13|
| 3 | 20 |
| 4 | 32 |

La giunzione esterna rappresentata con il seguente simbolo tra le due tabelle risulta
$$R \underset{\bowtie}{\leftrightarrow}_{\text{R.id = S.id}} S$$

| id | nome | età|
|--|--|--|
| 1 |Alice| 13 |
| 2 |Bob| NULL |
| 3 |Charlie| 20 |
| 4 |NULL| 32 |

Abbiamo due sottocategorie della giunzione esterna:

### Giunzione esterna sinistra

In cui consideriamo tutte le righe della tabella di sinistra e solo quelle che soddisfano la condizione della tabella di destra, se delle righe di sinistra non hanno nessuna corrispondenza con alcuna riga della destra allora si mette NULL.

Equivalente al comando **LEFT JOIN \<tabella\> ON \<condizione\>** in SQL

e si rappresenta con il seguente simbolo

$$R \underset{\bowtie}{\leftarrow}_{\text{R.id = S.id}} S$$

Considerando le stesse tabelle di prima otteniamo dalla *left join*:

| ID | nome | età |
|--|--|--|
| 1 | Alice|13|
| 2 | Bob |NULL|
| 3 | Charlie |20|

### Giunzione esterna destra

È analoga alla giunzione esterna sinistra.

In cui consideriamo tutte le righe della tabella di destra e solo quelle che soddisfano la condizione della tabella di sinistra, se delle righe di destra non hanno nessuna corrispondenza con alcuna riga della sinistra allora si mette NULL.

Equivalente al comando **RIGHT JOIN \<tabella\> ON \<condizione\>** in SQL

e si rappresenta con il seguente simbolo

$$R \underset{\bowtie}{\rightarrow}_{\text{R.id = S.id}} S$$

Considerando le stesse tabelle di prima otteniamo dalla *right join*:

| ID | nome | età |
|--|--|--|
| 1 | Alice|13|
| 3 | Charlie |20|
| 4 | NULL |32|

## Intersezione

Avendo due tabelle $R$ e $S$

L'**intersezione**: crea una nuova tabella contenente solo le righe che sono in comune tra le due tabelle

$$R \cap S$$

Equivalente al comando **INTERSECT** in SQL

Esprimibile anche come $R - (R - S)$

## Divisione

Avendo due tabelle $R$ e $S$ che condividono una colonna, la divisione crea una nuova tabella formata solo dalle colonne di $R$, tranne quella condivisa. Vengono inserite le righe di $R$ che possiedono tutti i valori della tabella $S$ della colonna condivisa.

Definizione formale: "date le relazioni $R(XY)$ e $S(Y)$ si vuole produrre una relazione $T(X)$ tale che una ennupla $t$ è in $T$ se e solo se per ogni $s$ in $S$ la ennupla $<t, s>$ appare in $R$"

$$R\div S = \{w|\{w\}\times S \subseteq R\}$$

Ad esempio:

Tabella $R$
|nome | genere | ufficio |
|--|--|--|--|
| Alice| F|uff1|
| Alice| F|uff2|
| Bob |M|uff1|
| Charlie |M|uff1|
| Charlie |M|uff2|

Tabella $S$
| ufficio|
|--|
| uff1 |
| uff2 |

La divisione

$$R \div S$$

Restituirà la tabella

| nome| genere |
|--|--|
| Alice |F|
| Charlie |M|

Nella tabella risultante ci sono due valori <nome, genere> tali che ogni <nome, genere, ufficio> (cioè il prodotto cartesiano tra il risultato e la tabella $S$) è compreso in $R$.
In altre parole solo Alice e Charlie lavorano in tutti gli uffici presenti nella tabella $S$

La divisione non ha un equivalente comando in SQL.

È possibile implementarla tramite la seguente query in algebra relazionale:

$$\pi_X (R) - \pi_X ((\pi_X(R)\times S)-R)$$

Dove $X$ è l'insieme degli attributi **che possiede solo** $R$ (quindi non la colonna condivisa)

## Funzioni di aggregazione

Le funzioni di aggregazione sono delle funzioni che prendono in input uno o più insiemi di valori e restituiscono un singolo valore numerico.
Alcuni esempi di queste funzioni sono:

- sum: restituisce la somma dei valori
- avg: restituisce la media del valori
- count: restituisce quanti sono i valori
- min e max: restituiscono rispettivamente il minimo e il massimo tra i valori

## Raggruppamento

L'operatore di raggruppamento rappresentato con il simbolo greco "gamma" $\gamma$, serve ad aggregare le righe utilizzando le funzioni di aggregazione

$$\large_{a1,...,an}\gamma_{f1,...,fm}(R)$$


Dove $a1,...,an$ sono gli attributi, mentre $f1,...,fm$ sono le funzioni di aggregazione.

A parole si potrebbe dire: "selezionami le colonne $f1,...,fm$ e $a1,...,an$ raggruppate per i valori $a1,...,an$"

Equivalente al comando **GROUP BY** in SQL

Ad esempio nella seguente tabella Esami:
![enter image description here](https://i.ibb.co/P61P0Km/esempio-aggr.png)

La seguente operazione di raggruppamento:

$$\large_{\text{Materia}}\gamma_{\text{avg(Voto)}} (\text{Esami})$$

restituisce
![enter image description here](https://i.ibb.co/855CgHq/image.png)

Quindi calcola la media degli esami raggruppati per materia

## Operazioni sui multinsiemi

- Proiezione senza eliminare i duplicati
$$\pi^b_{a1,...,an} (O)$$
- Eliminazione dei duplicati dell'insiemi
$$\delta(O)$$
- Ordinamento degli attributi
$$\tau_{a1,...,an}(O)$$
- Unione, intersezione e differenza in cui si mantengono i duplicati

	$$O_1 \cup^b O_2$$

	nell'intersezione prendo il minimo di duplicati comuni delle due tabelle
	
	$$O_1 \cap^b O_2$$
	
	nella differenza prendo il massimo di duplicati tra 0 e la differenza tra il numero di duplicati di O_1 e il numero di duplicati di O_2
	$$O_1 -^b O_2$$
	
	in altre parole se una riga è ripetuta 5 volte in $O_1$ e la stessa riga è ripetuta 3 volte in $O_2$ nel risultato quella riga sarà presente 2 volte.
	Se invece è ripetuta 5 volte in $O_1$ e 7 volte in $O_2$ nel risultato non ci sarà nessuna occorrenza di quella riga

## Equivalenze di espressioni algebriche

- $\pi_{A}(\pi_{A,B}(R)) \equiv \pi_A(R)$
- $\sigma_{C_1}(\sigma_{C_2}(R)) \equiv \sigma_{C_1 \land C_2 }(R)$
- $\sigma_{C_1 \land C_2}(R \times S) \equiv \sigma_{C_1}(R) \times \sigma_{C_2}(S)$
- $R \times (S \times T) \equiv (R \times S) \times T$
- $(R \times S) \equiv (S \times R)$
- $\sigma_{C}(_X \gamma_F(R)) \equiv \,_X\gamma_F(\sigma_C(R))$
