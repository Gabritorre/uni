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

equivalente al comando **JOIN \<tabella\> ON \<condizione\>** in SQL

ad esempio

$$R \underset{R.a = S.b}{\bowtie} S$$

crea una nuova tabella in cui si affiancano le righe se soddisfano la condizione che: l'attributo $a$ della tabella $R$ e l'attributo $b$ della tabella $S$ sono uguali

spesso usato per unire tabelle che sono in relazione tramite *foreign key*, dove la condizione è che la *foreign key* di una tabella e la *primary key* dell'altra sono uguali.


## Intersezione

Avendo due tabelle $R$ e $S$

l'**intersezione**: crea una nuova tabella contenente solo le righe che sono in comune tra le due tabelle

$$R \cap S$$

equivalente al comando **INTERSECT** in SQL
