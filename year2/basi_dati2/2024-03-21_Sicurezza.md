# Sicurezza dei database

Tutti i principali DBMS implementano meccanismi di:
- **autenticazione**: cioè identificare che sta operando sul database
- **autorizzazione**: determinare chi può fare cosa tramite dei permessi

**controllo degli accessi**: meccanismo con cui viene verificato che chi richiede un'operazione sia effettivamente autorizzato per farla.

## Autenticazione

Solitamente l'autenticazione è effettuata tramite l'utilizzo di **username e password**

Vediamo il modo in cui Postgres gestisce gli utenti.
La creazione di un utente avviene con il seguente comando:

```sql
CREATE USER NomeUtente WITH PASSWORD NuovaPwd
```

Ulteriori opzioni sono:

- `SUPERUSER`: l'utente supera tutti i controlli di sicurezza
- `CREATEDB`: l'utente può creare nuovi database
- `VALID UNTIL ts`: specifica la scadenza della password

Postgres gestisce il processo di autenticazione tramite un file `pg_hba.conf`.
È possibile modificare il **metodo di autenticazione**, che è definito da 4 opzioni:
- tipo di connessione: locale, remota, cifrata, ...
- database: lista di database
- utente: lista di utenti
- indirizzo: hostname, indirizzo IP, range di indirizzi IP

Esistono tanti metodi di autenticazione: trust, reject, password, MD5, SCRAM, ...
Ce ne sono di più e meno sicuri.

https://www.postgresql.org/docs/current/auth-pg-hba-conf.html

## Autorizzazione

Dopo aver autenticato l'utente il DBMS può applicare le **politiche di autorizzazione**.

Regole base di autorizzazione:
- Quando un oggetto viene creato (ad esempio una tabella), il **creatore ne diventa il proprietario** e ne ha il pieno controllo
- Gli altri utenti possono accedere all'oggetto solamente rispettando i propri permessi
- Solo il creatore dell'oggetto può eliminare o alterare la definizione di un oggetto

I **permessi** si possono definire su:
- SELECT
- INSERT
- UPDATE
- DELETE
- TRIGGER
- EXECUTE

Ad esempio nella seguente query

```sql
INSERT INTO Studio(name)
	SELECT DISTINCT studioName
	FROM Movies
	WHERE studioName NOT IN (SELECT name FROM Studio);
```
l'utente che la vuole eseguire deve avere i permessi su:
- `INSERT(name)` sulla tabella `Studio`
- `SELECT(studioName)` sulla tabella `Movies`
- `SELECT(name)` sulla tabella `Studio`

Nota che i permessi si possono restringere su un sottoinsiemi di attributi, oppure permettere l'esecuzione del comando in generale

### Permesso TRIGGER

Per quanto riguarda il **permesso TRIGGER** su una tabella, esso abilita la definizione di nuovi trigger arbitrari su di essa.
Il creatore del trigger deve avere sia il permesso TRIGGER sia i permessi richiesti per eseguire l'azione del trigger.
Quando un trigger **si attiva esso viene eseguito con i permessi del suo creatore**, indipendentemente da chi lo ha attivato.

Per questi motivi bisogna prestare molta attenzione a questo permesso.

### Permessi su funzioni

Quando si dichiara una funzione è possibile specificarne i permessi attraverso le opzioni:
- `SECURITY INVOKER`: la funzione viene eseguita con i permessi del chiamante (opzione di default)
- `SECURITY DEFINER`: la funzione viene eseguita con i permessi del creatore

## Assegnare i permessi

Il creatore dello schema relazionale possiede tutti i permessi e può concedere dei permessi ad altri utenti, tramite la seguente sintassi:

```sql
GRANT ListaPermessi ON Elemento TO ListaUtenti
```

- è possibile utilizzare `ALL PRIVILEGES` per indicare tutti i permessi
- è possibile utilizzare `PUBLIC` per autorizzare tutti gli utenti (anche quelli non ancora esistenti)

## Delegare permessi

È possibile anche permettere a degli utenti di concedere un **sottoinsieme dei loro permessi** ad altri utenti, tramite la seguente sintassi

```sql
GRANT ListaPermessi ON Elemento TO ListaUtenti
WITH GRANT OPTION
```
Con `WITH GRANT OPTION` si permette a `ListaUtenti` di delegare a loro volta i permessi

## Diagramma di autorizzazione

Un diagramma di autorizzazione è un grafo orientato in cui i nodi sono etichettati con una tripla $\text{(utente, permesso, m)}$ dove m può assumere i seguenti significati:
- $\bot$ il permesso gli è stato assegnato ma non può essere delegato
- $\star$ il permesso è stato assegnato e può essere delegato
- $\star \star$ il permesso è concesso in qualità di proprietario

![enter image description here](https://i.ibb.co/pdVLkwR/image.png)

## Revocare i permessi

È possibile revocare dei permessi assegnati in precedenza tramite la sintassi:

```sql
REVOKE ListaPermessi ON Elemento FROM ListaUtenti
```

Si può aggiungere al comando:
- `CASCADE`: il permesso viene ricorsivamente revocato a tutti gli utenti che lo hanno ricevuto **solamente** dal target della revoca
- `RESTRICT`: fa fallire la revoca se essa comporterebbe la revoca di permessi ad altri utenti
	
È possibile revocare solamente la possibilità di delega tramite il comando:

```sql
REVOKE GRANT OPTION FOR ListaPermessi ON Elemento FROM ListaUtenti
```

È possibile che un utente possieda un permesso $p$ ma anche una variante più specifica $p^-$ sullo stesso oggetto.
Revocare $p^-$ non ha alcun effetto su $p$.
Se invece viene revocato $p$, il DBMS può decidere se:
- revocare anche $p^-$
- lasciare $p^-$

## Ruoli

Assegnare ad ogni utente determinati permessi manualmente diventa oneroso.
Spesso si utilizzano dei **ruoli**, cioè un collettore di permessi etichettato con un nome.
Tale nome viene assegnato agli utenti che dovrebbero possedere quella collezione di permessi

Si può creare un nuovo ruolo nel seguente modo:

```sql
CREATE ROLE NomeRuolo;
```
una volta creato è possibile usare:
- `GRANT` per assegnare permessi al ruolo e assegnare ruoli ad utenti
- `REVOKE` per rimuovere permessi al ruolo e rimuovere ruoli ad utenti

I ruoli assegnati ad un utente non sono attivi di default, per attivarli bisogna fare:

```sql
SET ROLE NomeRuolo;
```

L'utilizzo degli ruoli porta i seguenti vantaggi:
- i ruoli raggruppano permessi logicamente collegati
- è molto meno costoso assegnare ruoli che permessi, visto che ce ne sono meno
- è molto più difficile sbagliare l’assegnazione di un ruolo che di un insieme di permessi
- le operazioni di revoca sono analogamente semplificate
- i ruoli non sono attivi di default, contrariamente ai permessi: questo è più fedele al principio del minimo privilegio

In **Postgres** non c'è una vera distinzione tra Utente e Ruolo, infatti `CREATE USER` è un alias di `CREATE ROLE WITH LOGIN`

Alcuni dettagli:

- l’opzione `CREATEROLE` consente al ruolo di creare altri ruoli. Questo può condurre a scalate di privilegi, da usare con attenzione!
- ruoli assegnati con `WITH ADMIN OPTION`, permette agli utenti con tale ruolo di assegnare il ruolo ad altri utenti.
- è possibile assegnare ruoli ad altri ruoli, introducendo una forma di ereditarietà nei permessi
- il diagramma di autorizzazione è costruito attorno ai ruoli: se un permesso viene assegnato tramite un ruolo, qualsiasi altro utente con quel ruolo può revocarlo

Le opzioni `INHERIT` e `NOINHERIT` permettono di gestire l'ereditarietà dei ruoli.

## SQL injection

La SQL injection è un tipo di vulnerabilità che sfrutta la manipolazione di caratteri di una stringa per eseguire delle istruzioni SQL dove non dovrebbe essere possibile.

Il tipico caso è quello di un form di autenticazione: una pagina web che richiede utente e password per ottenere dei dati dell'utente, nel server otteniamo queste due informazioni e costruiamo una stringa che corrisponde ad una query SQL.

```python
user = get_parameter($u)		# ottine l'username dal form
password = get_parameter($p)	# ottine la password dal form
statement = "SELECT * FROM users WHERE name = '" + user + "' AND pwd = '" + password + "';"
```

se l'attaccante mettesse come password la stringa: `' OR '1' = '1`

la query diventerebbe:

```python
statement = "SELECT * FROM users WHERE name = ’marco’ AND pwd = ’’ OR ’1’ = ’1’;"
```

La condizione sul `WHERE` sarebbe vera e quindi si riuscirebbe a ottenere tutte le informazioni dell'utente anche senza il bisogno della password.

Per prevenire l'SQL injection ci sono 2 approcci:
- **sanitizzazione**: rimuovere caratteri per rendere l'input "sicuro" oppure verificare il contenuto prima di fare la query
- **encoding**: rimpiazzare caratteri speciali

Solitamente è più comune utilizzare l'encoding

## Escaping

L'**escaping** è una tecnica di encoding che converte dei caratteri particolare nella loro versione letterale affidandosi a funzioni di libreria che fanno questo

```python
userName = escape(get_parameter($u))	# escape dell'username
pwd = escape(get_parameter($p))			# escape della password
statement = "SELECT * FROM users WHERE name = ’" + userName + "’ AND password = ’" + pwd + "’;"
```
passando come prima la password `’ OR ’1’ = ’1`
otteniamo la query

```python
statement = "SELECT * FROM users WHERE name = ’marco’ AND password = ’’’ OR ’’1’’ = ’’1’;"
```

che non funzionerà

## Prepared statement

Un **prepared statement** è un comando SQL contenente dei buchi contrassegnati con il carattere `?`, e passando come parametro aggiuntivo altri valori essi vengono sostituiti in modo disciplinato al posto di `?`

```python
userName = get_parameter($u)
pwd = get_parameter($p)
statement = "SELECT * FROM users WHERE name = ? AND password = ?;"
statement.setString(1, userName);	# sostituzione del primo '?'
statement.setString(2, pwd);		# sostituzione del secondo '?'
```

## Sanitizzazione

Immaginiamo di avere un menù a tendina da cui selezionare la tabella del database da cui ottenere dei dati

```python
table = get_parameter($t)
statement = "SELECT * FROM " + table;
```

In questo caso il *prepared statement* non si può usare per il nome di un tabella, è quindi importante controllare il contenuto della variabile `table` prima di effettuare la query

```sql
table = get_parameter($t);
if (table == "Student" || table == "Teacher") {
	statement = "SELECT * FROM " + table;
}
else {
	throw new Exception("Unexpected!");
}
```
