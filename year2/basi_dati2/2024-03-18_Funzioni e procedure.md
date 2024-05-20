# Funzioni e procedure

Oltre ad utilizzare le funzioni all'interno dei trigger, si possono creare funzioni per altri scopi:

- Incapsulare funzionalità di uso comune per facilitarne il riutilizzo
- Offrire una interfaccia più semplice per chi è ancora alle prime armi
- Raggruppare una sequenza di operazioni di cui non ci interessano i risultati intermedi.

Vediamo come definire le funzioni nel linguaggio *PL/pgSQL* di postgres.

```sql
CREATE FUNCTION my_fun (<args>) RETURNS <type> AS $$
<dichiarazione di variabili>
BEGIN
	<corpo della funzione>
END;
$$ LANGUAGE plpgsql;
```

Vediamo un esempio di funzione

```sql
CREATE FUNCTION my_concat(a text, b text, uppercase boolean = false) RETURNS text AS $$
BEGIN 
	IF uppercase THEN
		RETURN UPPER(a || ’ ’ || b);
	END IF;
	RETURN LOWER(a || ’ ’ || b);
END;
$$ LANGUAGE plpgsql;
```

## Dichiarazione di variabili

La dichiarazione delle variabili fa fatta nella posizione apposita, la lista di variabili va messa a seguire della keyword `DECLARE`

Una variabile si dichiara secondo il seguente costrutto

```sql
name [CONSTANT] type [NOT NULL] [:= expr OR = expr];
```

Quindi va prima il nome della variabile seguito dal tipo.
I tipi possono essere tutti quelli supportati di SQL.

L'assegnazione tramite `:=` è equivalente all'uso di `=`, lo standard di PL/SQL è `:=`

Alcuni tipi di dato particolari sono:

- `variable%TYPE` permette di definire il tipo che è lo stesso tipo di una variabile oppure di una colonna del database. Se ad esempio si ha una colonna chiamata `user_id` nella tabella `users`, per dichiarare una nuova variabile con lo stesso tipo di `user_id` si fa:
	`my_var users.user_id%TYPE;`
- `table_name%ROWTYPE` permette di definire il tipo che è il tipo di una riga di una determinata tabella
- `RECORD` come il precedente solo che è più generico e si adatta ad ogni assegnamento (un accesso prima dell'assegnamento causerà un errore)

Esempi di dichiarazioni:
```sql
DECLARE
	user_id integer;
	quantity numeric(5);
	url varchar;
	myrow tablename%ROWTYPE;
	myfield tablename.columnname%TYPE;
	arow RECORD;
```

### Assegnamento

L'assegnamento si fa con la sintassi:

```sql
var = expr
```

È possibile salvare la prima riga di una query in una variabile, nel seguente modo:

```sql
SELECT expr INTO var FROM ...
```

## Ritorno

Se la funzione ritorna un singolo valore si può usare la sintassi:

```sql
RETURN expr;
```

mentre se si vuole ritornare una riga, è possibile utilizzare dei parametri di output:

```sql
CREATE FUNCTION sum_n_product (x int, y int, OUT sum int, OUT prod int) AS $$
BEGIN
	sum = x + y;
	prod = x * y;
END;
$$ LANGUAGE plpgsql;
```

Se una funzione ritorna un insieme di valori, l'insieme deve essere costruito in maniera incrementale:

```sql
RETURN NEXT expr; -- aggiunge un record al risultato
RETURN QUERY query; -- aggiunge un insieme al risultato
RETURN 	-- ritorna il risultato
```

Nel tipo di ritorno della funzione si può usare `SETOF t` per dire di restituire un insieme di elementi di tipo `t`

Esempio

"Data la tabella `PC(model, speed, ram, hd, price)`, definire una funzione che ritorna un insieme di modelli associati ai rispettivi prezzi, cioè solo la prima e la quinta colonna della tabella."

- un primo modo per costruire la funzione è 

	```sql
	CREATE FUNCTION f() RETURNS SETOF RECORD AS $$
	BEGIN
		RETURN QUERY SELECT model, price FROM pc;
	END;
	$$ LANGUAGE plpgsql;
	```

	Utilizzo

	```sql
	SELECT m,p FROM f() AS (m character(20), p real);
	```


- Un secondo modo è

	```sql
	CREATE FUNCTION f()
	RETURNS TABLE(m integer, p real) AS $$
	BEGIN
		RETURN QUERY SELECT model, price FROM pc;
	END;
	$$ LANGUAGE plpgsql;
	```
	Utilizzo
	```sql
	SELECT * FROM f();
	```

Nota che la sintassi 

```sql
CREATE FUNCTION f()
RETURNS TABLE(m character(20), p real)
```
è equivalente a
```sql
CREATE FUNCTION f(OUT m character(20), OUT p real)
RETURNS SETOF RECORD
```

## Condizioni

La sintassi delle condizioni è la seguente:

```sql
IF <boolean_expr> THEN
	statements
ELSIF boolean-expr THEN
	statements
ELSE 
	statements
END IF;
```

## Cicli

Il ciclo **while** si fa nel seguente modo

```sql
WHILE <boolean_expr> LOOP
	statements
END LOOP;
```

Il ciclo **for** si fa nel seguente modo

```sql
FOR name IN [ REVERSE ] <int_expr> ... <int_expr> [ BY <int_expr> ] LOOP
	statements
END LOOP;
```

Si può usare il for per loopare tra i risultati di una query

```sql
FOR target IN query LOOP
	statements
END LOOP;
```

Si può usare il for-each per loopare tra gli elementi di un array

```sql
FOREACH target IN ARRAY expr LOOP
	statements
END LOOP
```

## Variabile FOUND

Ciascuna funzione possiede una variabile `FOUND`:

1. `SELECT INTO` imposta `FOUND` a `true` se viene assegnata una riga alla variabile corrispondente, `false` altrimenti
2. `UPDATE, INSERT, DELETE` impostano `FOUND` a `true` se almeno una riga è stata toccata, `false` altrimenti
3. un ciclo FOR imposta `FOUND` a `true` se ha iterato almeno una volta, `false` altrimenti
4. `RETURN QUERY` imposta `FOUND` a `true` se la query ha ritornato almeno una riga, `false` altrimenti

## Eccezioni

Una funzione può riportare messaggi oppure errori

```sql
RAISE [ level ] 'format' [, expr [, ... ]] [USING option = expr];
```

- `level` indica il livello di severità dell'errore
- `format` rappresenta il messaggio da riportare
- la clausola `USING` permette di popolare info aggiuntive sull'errore

Si può rilanciare una eccezione catturata usando `RAISE` senza parametri

Nota: tutti i cambiamenti al database effettuati nel blocco che ha sollevato l'eccezione vengono annullati

### Catturare l'eccezione

Per catturare una eccezione si usa la seguente sintassi

```sql
BEGIN
	statements
EXCEPTION
	WHEN cond [ OR cond ... ] THEN handler
	[ WHEN cond [ OR cond ... ] THEN handler ... ]
END;
```

## Procedure

Una procedura è una funzione che non ritorna niente.

```sql
CREATE PROCEDURE my_proc (<args>) AS $$
<dichiarazione di variabili>
BEGIN
	<corpo della procedura>
END;
$$ LANGUAGE plpgsql;
```

Una procedura si può chiamare con il comando `CALL`

