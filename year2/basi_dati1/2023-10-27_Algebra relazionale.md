# Algebra relazionale

L'algebra relazionale è un linguaggio relazionale che combina un insieme di operatori che operano su relazioni (tabelle) e restituiscono relazioni (tabelle).

Serve per rappresentare le interrogazioni che si possono fare su un database.

Ci sono diversi tipi di operatori:

- **primitivi**: ridenominazione, proiezione, unione, differenza, restrizione, prodotto
- **derivati**: giunzione, divisione
- **altri**: raggruppamento, order by, min, max

## Ridenominazione

rappresentiamo questo operatore con la lettera greca "rho" $\rho$.

$$\rho_{A\leftarrow B}(R)$$

è l'equivalente del comando **AS** in SQL

Serve per rinominare il nome una colonna $B$ nel nuovo nome $A$ di una tabella $R$

è utile quando abbiamo due tabelle che hanno due colonne con lo stesso nome.

## Unione e Differenza

Avendo due tabelle $R$ e $S$ **dello stesso tipo** (quindi le tabelle hanno le stesse colonne)

- **Unione**: crea una nuova tabella con le righe della tabella $R$ assieme alle righe della tabella $S$ (il numero di colonne rimane invariato)

	$$R\cup S = \{t \text{ tale che: } t\in R \lor t \in S\}$$

	è l'equivalente del comando **UNION** (in cui esclude i duplicati) oppure **UNION ALL** (include anche i duplicati) in SQL

- **Differenza**: crea una nuovo tabella con le righe della tabella $R$ che però non sono nella tabella $S$
	$$R - S = \{t \text{ tale che: } t\in R \land t \notin S\}$$
	
	è l'equivalente del comando **EXCEPT** in SQL
## Proiezione

rappresentiamo questo operatore con la lettera greca "pi" $\pi$.

$$\pi_{a1, a2, a3, ..., an}(R)$$

è l'equivalente del comando **SELECT** in SQL

crea una tabella con un sottoinsieme delle colonne della tabella $R$, Il sottoinsieme viene specificato tramite l'elenco delle colonne che si desidera mantenere $a_1, a_2,$ ecc...


## Restrizione

rappresentiamo questo operatore con la lettera greca "sigma" $\sigma$ e la condizione la indichiamo con "phi" $\phi$.

$$\sigma_{\phi}(R)$$

è l'equivalente del comando **WHERE** in SQL

crea una tabella solo con le righe della tabella $R$ che soddisfano una condizione $\phi$

## Prodotto cartesiano

Avendo due tabelle $R$ ed $S$, il prodotto cartesiano

$$R\times S$$

crea una nuova tabella in cui ogni riga di $R$ viene affiancata ad ogni riga di $S$

equivale al comando **CROSS JOIN** oppure **FROM \<tabella1\>, \<tabella2\>** in SQL

esempio grafico:

![enter image description here](https://i.ibb.co/5Wj6xgx/prodotto-cartesiano.png)

## Giunzione

rappresentiamo questo operatore con il simbolo $\bowtie$ e la condizione la rappresentiamo con $\phi$

$$R \underset{\phi}{\bowtie} S$$

serve ad affiancare le righe delle due tabelle se viene soddisfatta la condizione tra la coppia di righe

equivalente al comando **(INNER) JOIN \<tabella\> ON \<condizione\>** in SQL

ad esempio

$$R \underset{R.a = S.b}{\bowtie} S$$

crea una nuova tabella in cui si affiancano le righe se soddisfano la condizione che: l'attributo $a$ della tabella $R$ e l'attributo $b$ della tabella $S$ sono uguali

spesso usato per unire tabelle che sono in relazione tramite *foreign key*, dove la condizione è che la *foreign key* di una tabella e la *primary key* dell'altra sono uguali.

### Giunzione naturale

è un particolare tipo di join che confronta automaticamente le colonne delle due tabelle con lo stesso nome, senza bisogno quindi di condizione. Non è consigliato utilizzarla in quando è meglio esplicitare la condizione di join.

equivalente al comando **NATURAL JOIN \<tabella\> ** in SQL


### Giunzione esterna

è un particolare tipo di join che mantiene anche le righe che non soddisfano la condizione del join (quindi vengono ottenute tutte le righe di entrambe le tabelle), a queste righe vengono aggiunti dei valori NULL dove manca la corrispondenza.

equivalente al comando **OUTER JOIN \<tabella\> ON \<condizione\>** in SQL

Esempio

Tabella $R$
| ID | nome |
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

la giunzione esterna rappresentata con il seguente simbolo tra le due tabelle risulta
$$R \underset{\bowtie}{\leftrightarrow}_{\text{R.id = S.id}} S$$

| id | nome | età|
|--|--|--|
| 1 |Alice| 13 |
| 2 |Bob| NULL |
| 3 |Charlie| 20 |
| 4 |NULL| 32 |

Abbiamo due sottocategoria della giunzione esterna:

### Giunzione esterna sinistra

In cui consideriamo tutte le righe della tabella di sinistra e solo quelle che soddisfano la condizione della tabella di destra, se delle righe di sinistra non hanno nessuna corrispondenza con alcuna riga della destra allora si mette NULL.

equivalente al comando **LEFT JOIN \<tabella\> ON \<condizione\>** in SQL

e si rappresenta con il seguente simbolo

$$R \underset{\bowtie}{\leftarrow}_{\text{R.id = S.id}} S$$

considerando le stesse tabelle di prima otteniamo dalla *left join*:

| ID | nome | età |
|--|--|--|
| 1 | Alice|13|
| 2 | Bob |NULL|
| 3 | Charlie |20|

### Giunzione esterna destra
è analoga alla giunzione esterna sinistra, quindi

In cui consideriamo tutte le righe della tabella di destra e solo quelle che soddisfano la condizione della tabella di sinistra, se delle righe di destra non hanno nessuna corrispondenza con alcuna riga della sinistra allora si mette NULL.

equivalente al comando **RIGHT JOIN \<tabella\> ON \<condizione\>** in SQL

e si rappresenta con il seguente simbolo

$$R \underset{\bowtie}{\rightarrow}_{\text{R.id = S.id}} S$$

considerando le stesse tabelle di prima otteniamo dalla *right join*:

| ID | nome | età |
|--|--|--|
| 1 | Alice|13|
| 2 | Charlie |20|
| 3 | NULL |32|

## Intersezione

Avendo due tabelle $R$ e $S$

l'**intersezione**: crea una nuova tabella contenente solo le righe che sono in comune tra le due tabelle

$$R \cap S$$

equivalente al comando **INTERSECT** in SQL


## Divisione

Avendo due tabelle $R$ e $S$ che condividono una colonna, la divisione crea una nuova tabella formata dalle colonne di $R$, tranne quella condivisa. Vengono inseriti gli elementi di $R$ che possiedono tutti i valori della tabella $S$


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

la divisione restituirà la tabella

| nome| genere |
|--|--|
| Alice |F|
| Charlie |M|

Nella tabella $R$ ci sono due valori <impiegato, genere> tali che ogni <impiegato, genere, ufficio> è compreso in $R$.
In altre parole solo Alice e Charlie lavorano in tutti gli uffici presenti nella tabella $S$

La divisione non ha un equivalente comando in SQL
