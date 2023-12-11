# DDL

**DDL** (*Data Definition Language*) è la parte del linguaggio SQL in cui si **definisce la base di dati**

Questa parte comprende:
- creare tabelle
- modificare la struttura delle tabelle
- definire i vincoli sugli attributi e tra le tabelle
- altre cose che non vedremo.

## Schemi

Uno schema rappresenta sostanzialmente un insieme di tabelle. Serve per creare un collegamento logico tra le tabelle

Possiamo creare un schema facendo 

```sql
CREATE SCHEMA <nome_schema>
```
possiamo poi andare a creare le tabelle appartenente a questo schema.

eliminiamo lo schema tramite il comando:

```sql
DROP SCHEMA <nome_schema> [CASCADE | RESTRICT]
```
aggiungendo il `CASCADE` cancelliamo lo schema ed anche tutti gli eventuali riferimenti ad tabelle esterne allo schema.
aggiungendo il `RESTRICT` lo schema viene cancellato solo se non ci sono riferimenti (se ci sono viene generato un errore)

## Tabelle

Possiamo definire le tabelle come un insieme di attributi (colonne), e per ciascuna colonna va indicato:

- nome
- tipo di dato, che può essere **predefinito** oppure **definito dall'utente** tramite il comando `CREATE DOMAIN`

creiamo una tabella nel seguente modo:

```sql
CREATE TABLE <nome_tabella>(
	...
	...
);
```

cancelliamo una tabella nel seguente modo:

```sql
DROP TABLE <nome_tabella>;
```

possiamo modificare praticamente ogni aspetto di una tabella tramite il comando `ALTER TABLE`, possiamo per esempio:
- aggiungere ed eliminare attributi
- modificare il tipo degli attributi
- aggiungere, rimuovere e modificare i vincoli


```sql
ALTER TABLE Studenti
	ADD COLUMN Nazionalita VARCHAR(10) DEFAULT ‘Italiana’;
```

### Tipi di dato predefiniti

Vediamo i più comuni tipi di dato predefiniti

- numerici
	- `SMALLINT` intero a 16 bit
	- `INTEGER` intero a 32 bit
	- `FLOAT(n)`decimale dove `n` indica la precisione che può arrivare fino a 64bit
	- `REAL` decimale a 32 bit
	- `NUMERIC(p, s)` decimale in cui `p` rappresenta il numero di cifre totali da cui è composto il numero, mentre `s` rappresenta quanti delle cifre di `p` sono dedicate dopo la virgola
- boolean
	- può contenere solo i valori: true, false, null
	- `1, yes, y, t, true` vengono tradotti come `true`
	- `0, no, f, false` vengono tradotti come `false`
- caratteri
	- `CHAR(x)`contiene una stringa lunga `x` caratteri (se la stringa è più corta allora vengono aggiunti dei valori per riempire)
	- `VARCHAR(x)` contiene una stringa di lunghezza variabile fino a `x` caratteri (se la stringa è più corta non vengono aggiunti dei valori di riempimento)
	- `TEXT` contiene una stringa di lunghezza ipoteticamente senza limite
- temporali
	- `DATE` contiene anno:mese:giorno
	- `TIME` contiene ora:minuto:secondo
	- `TIMESTAMP` combinazione di `DATE` e `TIME`
- grandi insiemi di dati
	- in questi tipi di dati non è possibile fare operazioni e confronti
	- `BLOB` binary large object
	- `CLOB` character large object


Consideriamo a parte il tipo `SERIAL` utilizzato dal *dbms* per identificare in modo autonomo una riga. 
Ogni volta che si aggiunge una riga quel attributo viene automaticamente aggiornato.

## Vincoli

Sugli attributi possiamo specificare sia dei valori di default, tramite la keyword `DEFAULT` sia dei vincoli come:
- `NOT NULL` se l'attributo non può essere null
- `UNIQUE` se l'attributo deve essere unico (ma può assumere il valore null)
- `PRIMARY KEY` l'attributo deve essere unico e non null
- `CHECK (<condizione>)` serve per fare un controllo sul valore che assume la colonna, per essere valido il valore deve soddisfare la condizione del check

Abbiamo anche il vincolo di chiave esterna `FOREIGN KEY` che può essere accompagnata da un comportamento in caso di cancellazione e modifica del riferimento alla chiave primaria, tali comportamenti sono:
- `NO ACTION` viene impedita la cancellazione o modifica della chiave primaria
- `SET NULL` viene settata la chiave esterna a null
- `SET DEFAULT` viene settata la chiave esterna al suo valore di default
- `CASCADE`la cancellazione o modifica della chiave primaria si propaga anche alle chiavi esterne

```sql
CREATE TABLE Studenti (
	Nome VARCHAR(10) NOT NULL,
	Cognome VARCHAR(10) NOT NULL,
	Sesso CHAR(1) CHECK(Sesso IN (‘M’, ‘F’)),
	Matricola CHAR(6) PRIMARY KEY,
	Nascita DATE,
	Provincia CHAR(2) DEFAULT 'VE',
	Tutor CHAR(6),
	FOREIGN KEY (Tutor) REFERENCES Studenti(Matricola)
		ON UPDATE CASCADE
		ON DELETE SET NULL
);
```


## Viste

Le viste (*view*, oppure tabelle virtuali) sono delle tabelle temporanee generate da una query, utilizzate principalmente per realizzare in modo più ordinato query complesse (ma ha anche altri utilizzi).

sostanzialmente è come dare un nome ad una query, essa infatti verrà ricalcolata ogni volta che si scrive il nome datogli.

Viene creata nel seguente modo

```sql
CREATE VIEW <nome_vista>(<attributi>) AS
	<SELECT>
```


Vediamo due esempi in cui le view tornano molto utili per le query:

Esempio 1: "Trovare la media dei voti massimi ottenuti nelle varie province"

```sql
CREATE VIEW ProvMax(Provincia, Max) AS
	SELECT s.Provincia, MAX(e.Voto)
	FROM Studenti s JOIN Esami e ON s.Matricola = e.Candidato
	GROUP BY s.Provincia;

SELECT AVG(Max) FROM ProvMax;
```
creo prima la view che mi contiene i voti massimi per ogni provincia.
Poi faccio una query in cui seleziono la media dei massimi

Esempio 2: "Le province dove la media dei voti degli studenti è la più alta"

```sql
CREATE VIEW ProvMedia (Provincia, Media) AS
SELECT s.Provincia, AVG(e.Voto)
FROM Studenti s JOIN Esami e ON s.Matricola=e.Candidato
GROUP BY s.Provincia;

SELECT Provincia, Media
FROM ProvMedia
WHERE Media = (SELECT MAX(Media)
				FROM ProvMedia);
```
creo prima la view che mi contiene la media voti per ogni provincia.
Poi faccio una query in cui seleziono le provincie in cui la media è quale alla media più grande tra le provincie


### With

Il costrutto `WITH` rappresenta una view utilizzabile solo una volta.

Si utilizza nel seguente modo:

```sql
WITH ProvinceMedia AS (
	SELECT s.Provincia, AVG(e.Voto) AS Media
	FROM Studenti s JOIN Esami e ON s.Matricola=e.Candidato 	
	GROUP BY s.Provincia
)
SELECT Provincia, Media
FROM ProvinceMedia
WHERE Media = ( SELECT MAX(Media)
				FROM ProvinceMedia
			  );
```

## Associazioni simmetriche

Immaginiamo di avere la seguente relazione ricorsiva

![enter image description here](https://i.ibb.co/qF9GX3s/image.png)


Quando andiamo ad inserire i dati nella tabella Fratelli, cosa andiamo a mettere?

- tutte le ennuple:
	quindi se abbiamo due fratelli con `id = 13` e `id = 21` inseriamo nella tabella fratelli sia (13, 21) che (21, 13)
	In questo modo abbiamo una **ridondanza di informazioni** e risulta intricato riuscire ad ottenere la lista di fratelli senza ripetizioni.
si dovrebbe fare una cosa di questo tipo:
	```sql
	SELECT p1.*, p2.*
	FROM Persone p1 JOIN Fratelli f ON p1.Id = f.Id1 JOIN Persone p2 ON f.Id2 = p2.Id
	WHERE f.Id1 < f.Id2
	```
	la condizione nel `where` ci garantisce l'assenza di ripetizioni.

- una sola riga per coppia:
	In questo caso risolviamo la ridondanza di dati però complichiamo le query, ad esempio per ottenere tutti i fratelli di una persona (ad esempio la persona con id=21):
	```sql
	SELECT p.*
	FROM Persone p, Fratelli f
	WHERE (f.Id1 = 21 AND f.Id2 = p.Id) OR (f.Id2 = 21 AND f.Id1 = p.Id)
	```
