# Indici e viste materializzate

## Indici

Lavorare con database contenenti decine o centinaia di migliaia di record può risultare in pessime prestazioni quando dobbiamo andare a ricercare qualcosa di specifico.
Ad esempio

```sql
SELECT *
FROM Movies
WHERE studio = ’Disney’ AND year = 2012;
```

Se nel database ci sono migliaia di film, per ottenere questa query dovremmo controllare per ogni film se rispettano le condizioni del `where` per poterli selezionare.

Gli **indici** sono una struttura dati ausiliaria che permette di accedere in maniera più efficiente alle righe rispetto ad una ricerca lineare.

Per sfruttare gli indici bisogna scegliere degli attributi su cui ordinare tutte le righe. Una volta ottenute le righe ordinate (in modo lessicografico) secondo quegli attributi, viene creato un *Binary Search Tree* che consente di trovare le righe interessate in tempo logaritmico.

Nota che il BST è una struttura **ausiliaria** quindi l'ordine originale delle righe nel database non viene modificato.

### Tipi di indici

Possiamo creare degli indici per **attributo singolo** oppure con un **insieme di attributi**, in quest'ultimo caso è importante l'ordine in cui si mettono:
Se ad esempio in un database di film si vuole creare un indice che ordina per anno e per studio di produzione, dobbiamo pensare se ci saranno più film divisi per anno oppure per studio:

- Se ci sono tanti anni diversi e molti studi uguali allora l'indice migliore sarebbe `Indice(studio, anno)`
- Se ci sono tanti studi diversi e molti anni uguali allora l'indice migliore sarebbe `Indice(anno, studio)`

### Query che ne traggono vantaggio

Le query che traggono vantaggio dagli indici sono quelle che filtrano i risultati con gli stessi attributi in cui sono stati ordinati gli indici (ed è anche l'importante l'ordine in caso di insieme di attributi):

Se assumiamo di aver fatto un `Indice(anno, studio)` le query che ne trarranno vantaggio sono del tipo:

- `SELECT * FROM Movies WHERE year = 2012 AND studio = 'Sony'`
- `SELECT * FROM Movies WHERE year = 2012`
- `SELECT * FROM Movies WHERE year > 1998 AND year < 2012`
- `SELECT * FROM Movies WHERE year = 2012 ORDER BY studio`

mentre le query che non ne traggono vantaggio sono ad esempio:
- `SELECT * FROM Movies WHERE studio = 'Sony'`
	(perché nell'indice le righe sono prima ordinate per anno, ma in questa query non ci sono filtri sull'anno)
- `SELECT * FROM Movies WHERE regista = 'Pippo'`

### Comparazione di indici

Assumiamo che ci siano 10.000 film e che la Disney ne abbia prodotti 200, di cui solo 5 nel 2012.

Vediamo quanti record la seguente query dovrà controllare con varie possibilità di indici:

```sql
SELECT *
FROM Movies
WHERE studio = ’Disney’ AND year = 2012;
```

- senza utilizzo degli indici: controllo 10.000 righe
- `Indice(studio)`: controllo 200 righe
- `Indice(studio, year)`: controllo 5 righe


### Pagine in memoria

L'analisi del costo di una query utilizzando solo quante righe deve ispezionare non è molto preciso in quanto la memoria RAM dei computer funziona con le pagine:
- in una pagina tipicamente sono presenti molte tuple
- richiedere una singola tupla comporta che una intera pagina sia caricata in memoria
- Una volta che la pagina è caricata in memoria, accedere a tutti i suoi contenuto è molto poco costoso perché la memoria RAM è molto rapida

## Pro e contro degli indici

### Pro
 Il principale vantaggio dell'utilizzo degli indici è il grande aumento di performance sulle query che utilizzano l'attributo specificato nell'indice.

Vediamo quando conviene utilizzare gli indici:
- sulle chiavi
- sulle chiavi esterne
- su attributi raramente modificabili


 ### Contro
Un grande contro è che quando si fanno operazioni di inserimento e cancellazione, oltre che al database normale anche l'albero generato dall'indice va aggiornato.

Vediamo quando non conviene utilizzare gli indici:
- su tabella piccole
- Su attributi i cui valori hanno poche varianti (ad esempio un attributo booleano)
- su attributi modificati frequentemente


## Definire gli indici

**Creare un indice**

```sql
CREATE INDEX NomeIndice ON NomeTabella (Attributi);
```

**Eliminare un indice**

```sql
DROP INDEX NomeIndice;
```

Alcuni DBMS possono suggerire automaticamente degli indici basandosi sulle prestazioni delle query fatte fino a quel momento

## Viste materializzate

Come abbiamo già visto le viste sono utilizzate principalmente per semplificare la scrittura di query complesse.
Ogni volta che utilizziamo una vista in una query, questa deve essere rivalutata, il che può essere **inefficiente**. 

Le **viste materializzate** sono delle viste che però non vengono valutate ad ogni query che la coinvolge, Questo **migliore le prestazioni** però ha un costo aggiuntivo dato dal fatto che **va mantenuta aggiornata**

Un esempio di creazione di vista materializzata è il seguente:

```sql
CREATE MATERIALIZED VIEW MovieProd AS
	SELECT m.title, m.year, e.name
	FROM Movies m, MovieExec e
	WHERE m.producer = e.code
```

la vista va aggiornata nei seguenti casi:

- in caso di modifiche all'interno delle tabelle `Movies`  e `MovieExec`
- in caso di modifiche degli attributi citati all'interno della vista.

In tutti gli altri casi la vista va ricalcolata.

POSTGRES delega la responsabilità all'utente di aggiornare le viste con il comando `REFRESH MATERIALIZED VIEW`.

## Ottimizzazioni

È possibile aggiornare manualmente la vista aggiungendo o rimuovendo delle nuove righe, così da non rivalutare l'intera vista da capo:

```sql
INSERT INTO MovieProd
VALUES (’Kill Bill’, 2003, ’Quentin Tarantino’);

DELETE FROM MovieProd
WHERE title = ’Il Re Leone’ AND year = 1994;
```

Le viste materializzate possono essere **inlined** dal DMBS per migliorare l'efficienza delle query, sfruttando il fatto che parte dell'informazione presente nella query è già stata calcolata in una vista materializzata.

