# Vincoli di integrità

All'intero di una base di dati ci possono essere dei **vincoli integrità da rispettare**:

- Certi attributi devono avere sempre un valore
- garantire la presenza di una chiave
- l'integrità referenziale
- garantire determinati vincoli sui valori degli attributi

## Not null

Per indicare che un attributo deve sempre possedere un valore possiamo utilizzare il vincolo `NOT NULL`, nella fase di creazione della tabella

```sql
CREATE TABLE Movies (
	title CHAR(100) NOT NULL,
	year INT,
	length INT,
	genre CHAR(10)
)
```


## Unique

Possiamo utilizzare il vincolo `UNIQUE` per indicare che non esistono due righe che hanno lo stesso valore su tale attributo, cioè deve essere unico.

```sql
CREATE TABLE Movies (
	title CHAR(100) NOT NULL,
	year INT UNIQUE,
	length INT,
	genre CHAR(10)
)
```

possiamo anche rendere unica un insieme di più attributi:

```sql
CREATE TABLE Movies (
	title CHAR(100) NOT NULL,
	year INT,
	length INT,
	genre CHAR(10),
	UNIQUE(title, year)
)
```

In questo caso sono i valori accoppiati a dover essere unici (possono esserci più titoli uguali, basta che siano associati ad anni diversi)
Se uno dei due attributi è `NULL` allora l'unicità non può essere infranta.

## Primary key

Il vincolo di `primary key` ha lo stesso comportamento di `UNIQUE`, la principale differenza è che gli attributi che sono primary key non possono essere null (e poi il dbms la tratta in modo particolare, in quanto viene anche usata dalle chiavi esterne)

```sql
CREATE TABLE Movies (
	title CHAR(100),
	year INT,
	length INT,
	genre CHAR(10),
	PRIMARY KEY(title, year)
)
```

## Foreign key

Questo vincolo stabilisce che un attributo della relazione è un riferimento (chiave esterna) alla `primary key` di un'altra tabella.
Le foreign key possono assumere il valore `NULL`


```sql
CREATE TABLE MovieExec (
	code INT PRIMARY KEY,
	name CHAR(50),
	address VARCHAR(255),
	netWorth INT
)

CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT,
	
	FOREIGN KEY (president) REFERENCES MovieExec(code)
)
```

Nella dichiarazione del vincolo stiamo dicendo quale attributo è foreign key e su quale attributo di quale tabella riferirsi.

Possiamo avere dei problemi di integrità referenziale sulla cancellazione e aggiornamento dell'attributo `code`, vediamo quali sono le politiche di integrità per gestire i casi di cancellazione e aggiornamento:

- `NO ACTION`: Se si tenta di aggiornare/cancellare una riga riferita da una chiave esterna verrà generato un **errore** e l'operazione non viene eseguita (**comportamento di default**)
- `CASCADE`: Se si aggiorna/cancella una riga riferita da una chiave esterna **l'aggiornamento/cancellazione viene propagata** anche alle righe della chiave esterna
- `SET NULL`: Se si tenta di aggiornare/cancellare una riga riferita da una chiave esterna, la chiave **esterna assumerà il valore `NULL`**
- `SET DEFAULT`: Se si tenta di aggiornare/cancellare una riga riferita da una chiave esterna, la chiave **esterna assumerà il suo valore di default**

(Le politiche dipendono dal linguaggio SQL utilizzato)

le politiche vanno specificate nel seguente modo

```sql
CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT,
	
	FOREIGN KEY (president) REFERENCES MovieExec(code)
		ON DELETE SET NULL
		ON UPDATE CASCADE
)
```

## CHECK

Tramite dei `CHECK` si possono imporre dei vincoli sui valori che possono assumere gli attributi.

Di fianco all'attributo va messo `CHECK` seguito da una espressione booleana messa tra parentesi.
- Si possono usare tutte le espressioni utilizzate nel costrutto `WHERE`
- si possono utilizzare delle sotto-query (anche se in alcuni DBMS ciò non è supportato)
- Il vincolo viene controllato ad ogni modifica e inserimento

```sql
CREATE TABLE MovieExec (
	code INT PRIMARY KEY CHECK (code >= 1000),
	name CHAR(50),
	address VARCHAR(255),
	netWorth INT CHECK (netWorth > 0)
)

CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT,
	
	FOREIGN KEY (president) REFERENCES MovieExec(code)
)
```

Nota che si potrebbe pensare di simulare il comportamento di una foreign key nel seguente modo

```sql
CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT CHECK (president in (select code from MovieExec))
)
```

ciò però non tiene conto di mantenere l'integrità in caso di modifiche o cancellazioni

### CHECK su righe

È anche possibile eseguire dei check sull'intera riga:

```sql
CREATE TABLE MovieExec (
	code INT PRIMARY KEY,
	name CHAR(50),
	address VARCHAR(255),
	netWorth INT,

	CHECK (code >= 1000 AND netWorth > 0)
)
```

Questo è necessario quando l'espressioni coinvolge più attributi che non sono indipendenti tra loro nell'espressione.

In questo caso non è necessario il check sulla riga e generalmente check direttamente sugli attributi sono generalmente più efficienti

### Equivalenze logiche 

Equivalenze logiche che possono tornare utili:

| espressione di partenza | espressione equivalente |
|:--:|:--:|
| $A \implies B$ | $\lnot A \lor B$ |
| $\lnot(A \land B)$ | $\lnot A \lor \lnot B$ |
| $\lnot(A \lor B)$ | $\lnot A \land \lnot B$ |

l'implicazione a parole si trova scritta come:
- "garantire che **tutti** coloro che soddisfano la/le proprietà $A$ **devono** soddisfare la/le proprietà $B$"
$$A \implies B$$

- "garantire che **solo** coloro che soddisfano la proprietà $A$ **possono** soddisfare la proprietà $B$"
$$B \implies A$$


## Aggiornamento dei vincoli

È possibile aggiornare i vincoli, per farlo è necessario dargli un nome quando vengono creati, per fare ciò si utilizza la keyword `CONSTRAINT`:

```sql
CONSTRAINT nome_vincolo [FOREIGN KEY, UNIQUE, CHECK, ...]
```

La modifica può essere fatta solo attraverso una cancellazione di un vincolo e il reinserimento della versione aggiornata, cancellazione ed inserimento vengono fatti tramite una `ALTER TABLE`.

**cancellazione**:
```sql
ALTER TABLE nome_tabella DROP CONSTRAINT nome_vincolo;
```

**inserimento**:
```sql
ALTER TABLE nome_tabella ADD [CONSTRAINT nome_vincolo] definizione_vincolo... ;
```

Attenzione che al momento dell'inserimento tutti i valori già presenti devono rispettare il nuovo vincolo imposto, altrimenti il vincolo non può venir applicato.


## Asserzioni

Le asserzioni esprimono delle **proprietà globali da rispettare sull'interno schema**.

l'asserzione deve rimanere vera dopo ogni modifica al database.

I principali DBMS non le supportano in quanto è difficile scriverle in modo efficiente.

"La durata complessiva dei film prodotto da ogni studio deve essere di almeno 500 minuti":

```sql
CREATE ASSERTION SumLengthCHECK (
	500 <= ALL(
		SELECT SUM(length)
		FROM Movies
		GROUP BY studio
	)
);
```


## Schema riassuntivo su check e asserzioni

| Soggetto | Dichiarazione | Controllo | Validità |
|--|--|--|--|--|
| Check su attributo | Attributo della tabella | Inserimento oppure modifica dell'attributo | In assenza di sotto-query |
| Check sulla riga| Tabella | Inserimento oppure modifica della riga | In assenza di sotto-query |
| Asserzione | Schema | Ogni modifica al database | Sempre |

Ricordiamo ancora che alcuni DBMS non supportano né le asserzioni né i check sulle righe
