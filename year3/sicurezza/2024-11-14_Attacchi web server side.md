# Attacchi web server side

Le applicazioni web sono molto complesse e possono soffrire di una grande vastità di attacchi come:

- attacchi diretti al codice lato server
- attacchi ai database
- attacchi eseguiti nel browser dell'utente
- attacchi alla rete

Data la natura di questi attacchi, è fondamentale adottare i principi di *secure coding* durante lo sviluppo di un'applicazione web. I principi cardine includono:

- un'attenta **gestione dell'input** utente per evitare manipolazioni del flusso di controllo
- l'adozione di pratiche di sicurezza in base ai linguaggi utilizzati
- evitare soluzioni ad hoc preferendo quelle standard.

Vediamo quattro esempi di comuni vulnerabilità nel linguaggio PHP.

## 1 String comparison attacks

PHP, non richiede una definizione esplicita del tipo di variabile in quanto viene determinato dinamicamente in base al contesto tramite un meccanismo chiamato t*ype juggling* che esegue conversioni automatiche.

Questo meccanismo, sebbene semplifichi la scrittura del codice, può introdurre comportamenti imprevedibili se si utilizza l'operatore di confronto debole `==`, dato che questo operatore esegue il confronto **dopo** la conversione automatica. Al contrario, l'operatore di confronto stretto `===` verifica l'uguaglianza sia del valore che del tipo senza la conversione automatica.

Gli attacchi basati sul **confronto di stringhe** sfruttano queste comparazioni deboli per modificare il flusso di controllo dell'applicazione.

Vediamo degli esempi di attacco nello specifico

- **Bypass dell’autenticazione**: Un token di sessione, tipicamente memorizzato in un cookie, viene confrontato lato server con un valore di riferimento per autenticare l'utente. Un attaccante può sfruttare il confronto debole per bypassare l'autenticazione fornendo un valore che, dopo la conversione, risulti uguale al token.
    
    ```php
    <?php
    	 // token stored on the server
    	 $token = ... ;
    	 
    	 // User input, e.g. coming from a cookie
    	 $input = $_COOKIE['user_token']
    	 
    	 if ($input == $token) {
    		 // access to privileged area
    		 echo "Authenticated!";
    	 }
    	 else {
    		 // login required ...
    		 echo "Please authenticate";
    	 }
    ?>
    ```
    
    Se avessimo un token del tipo `“0e394…”` in questo caso tale stringa potrebbe essere convertita in un intero scritto in notazione esponenziale ($0\cdot 10^{394…} = 0$), per cui se l’attaccante fornisce l’input `“0”` supererebbe il confronto debole, venendo quindi autenticato.
    
    Si potrebbe pensare che usare strcmp renda il codice più sicuro, in quanto viene delegato il controllo ad una funzione nativa, ma il problema comunque rimane se facciamo il confronto in questo modo:
    
    `if (strcmp($input, $token) == 0) {`
    
    se `strcmp` fallisce ritorna `NULL`, ma `NULL` viene convertito in `0` e quindi si supera il controllo.
    

## 2 File inclusion attacks

Prendiamo d’esempio un codice in cui vengono caricate delle pagine in modo dinamico in base ad un parametro passato in GET dall’utente:

```php
<?php
	if(isset($_GET["p"])) {
		 include($_GET["p"]);
	}
	else {
		 include("home.html");
	}
?>
```

Con il metodo GET i parametri sono in chiaro sull’URL, quindi l’utente può scrivere quello che vuole, ad esempio mettere il percorso di file all’interno del server.

## 3 Deserialization attacks

Negli URL è possibile usare un sottoinsieme dei caratteri ASCII, alcuni caratteri sono riservati per essere utilizzati come delimitatori (es. `/` `?` `:` `+` `=`). Tali caratteri possono essere messi nell’URL ma verranno sostituiti da un carattere `%` seguito da due caratteri esadecimali.

```
How are you?
How%20are%20you%3F
```

anche i cookie seguono questa codifica (che avviene in automatico su PHP)

L'attacco di deserializzazione, sfrutta il **meccanismo di serializzazione e deserializzazione degli oggetti**. La serializzazione converte un oggetto in una stringa di testo. La **deserializzazione**, al contrario, ricostruisce l'oggetto a partire dalla stringa.

Il problema risiede nel fatto che la deserializzazione di una stringa proveniente da una fonte non affidabile può portare all'esecuzione di codice arbitrario.

Questo è possibile perché la deserializzazione può richiamare automaticamente dei metodi speciali, chiamati "**metodi magici**", definiti all'interno della classe dell'oggetto.
Ad esempio il metodo magico `__wakeup()` viene invocato automaticamente dopo la deserializzazione di un oggetto appartenente a quella classe.

Un attaccante può creare un oggetto appartenente ad una classe presente sul server, inserire del codice malevolo, serializzarlo, codificarlo come URL e inserirlo in un cookie.

Quando il server prenderà il cookie, la stringa verrà deserializzata e il codice malevolo all’interno di `__wakeup()` verrà eseguito.

Codice del server:

```php
class Example {
	 private $hook;
	 // some PHP code...
	 function __wakeup() {
		 if (isset ($this->hook)) eval ($this->hook);
	 }
}

// simulating the attack
$user_data = unserialize(urldecode('O%3A8%3A%22Example2%22%3A1%3A%7Bs%3A14%3A%22%00Exam ple2%00hook%22%3Bs%3A10%3A%22phpinfo%28%29%3B%22%3B%7D'));
```

La stringa codificata è stata prodotta dall’attaccante in questo modo, serializzando una istanza della classe `Example`:

```php
<?php
	class Example
	{
		 private $hook = "phpinfo();";
	}
	
	echo urlencode(serialize(new Example));
?>
```

## 4 SQL injection attacks

SQL injection è un attacco che prevede di inserire query SQL arbitrarie nei campi di input, con l’obiettivo che tali stringhe vengano messe all’interno di query reali senza una corretta sanitizzazione modificandone quindi il comportamento.

Vediamo un esempio di query per ottenere le informazione di un utente in base al cognome inserito dall’utente in un form di input.

 
`$query = "SELECT name, lastname FROM people WHERE lastname = '" . $_POST['lastname'] . "'";`

Nota che `.` serve per concatenare stringhe in PHP.

L’attaccante ha il controllo di una parte della query, cioè `$_POST['lastname']`.

L’attaccante può inserire un `'` per lasciare la stringa vuota a aggiungere un altro confronto che risulterà essere sempre vero per poi commentare la restante parte della query per evitare che la query vada in errore.

Ad esempio ottenendo una query di questo tipo:

`SELECT name, lastname FROM people WHERE lastname = '' OR 1 -- '`

In questo modo la condizione nel `where` sarà sempre vera e l’attaccante ottiene il risultato della query anche se non dovrebbe.

### Attacchi black box al database

L’attaccante potrebbe non sapere i nomi di tabelle e colonne all'interno di un database. 

Può sfruttare il comando `UNION ALL` per fare il dump di altre tabelle.

Un attacco black box inizia con la determinazione del numero di colonne tramite una serie di tentativi con query del tipo

- `... where lastname = '' UNION ALL SELECT 1 #'`
- `... where lastname = '' UNION ALL SELECT 1,2 #'`
- `... where lastname = '' UNION ALL SELECT 1,1,1 #'`
- …

 fino a quando la query restituisce un output.

Successivamente, si ipotizzano i nomi delle tabelle usando nomi comuni come `users`, `customers`, `people`,

- `... where lastname = '' UNION ALL SELECT 1,1,1 FROM users #'`
- `... where lastname = '' UNION ALL SELECT 1,1,1 FROM customers #'`
- `... where lastname = '' UNION ALL SELECT 1,1,1 FROM people #'`
- …

fino a quando si ottiene una risposta positiva.

Lo stesso metodo può essere applicato per scoprire i nomi delle colonne.

Siccome il comando `UNION ALL` richiede che le due tabelle unite selezionino lo stesso numero di colonne, se la seconda tabella che vogliamo dumpare ha più colonne della prima, la query andrà in errore, ma possiamo usare a concatenazione di colonne in un'unica colonna utilizzando la funzione `CONCAT()`.

Un altra cosa che l’attaccante può fare è dumpare le informazioni contenute nel database `information_schema`, il quale contiene informazioni su tutti gli altri database presenti nel sistema tra cui i nomi dei database, le tabelle e le colonne.

## Tecniche di difesa

### SQL injection

Per contrastare gli attacchi SQL injection, si possono usare i **prepared statements**, un meccanismo che prevede la preparazione della query da parte del database prima che i parametri effettivi vengano inseriti. In questo modo, l'input fornito dall'utente non viene interpretato come codice SQL. 

Esempio:

![https://i.ibb.co/TqTykb7/image.png](https://i.ibb.co/TqTykb7/image.png)

Anche da PHP si possono usare i prepared statemet:

```php
$stmt = $link->prepare("SELECT name, lastname, url FROM people WHERE lastname = ?");
$stmt->bind_param("s", $_POST['lastname']);
$stmt->execute();
```

Non tutte le parti di una query SQL possono essere parametrizzate con le *prepared statements, a*d esempio, il nome della tabella. Per questo si utilizzano tecniche come il **type casting**, il **whitelisting** e la **sanitizzazione** dell'input.

- Il **type casting** consiste nella conversione dei parametri numerici in interi, impedendo l'inserimento di payload arbitrari che potrebbero contenere codice dannoso.
- Il **whitelisting** limita l'input dell'utente a un insieme predefinito di valori considerati validi
- La **sanitizzazione** prevede l'escape dei caratteri speciali presenti nell'input dell'utente prima che venga utilizzato nella query, riducendo la possibilità di interpretazioni errate.

### Best practice generali

Oltre alle tecniche specifiche per prevenire le SQL injection, vediamo delle *best practices* di sicurezza per lo sviluppo di applicazioni web in PHP.

1. **Utilizzo del confronto stretto (===)**: L'uso dell'operatore di confronto stretto (===), che verifica sia il valore che il tipo senza conversioni automatiche, previene attacchi basati su manipolazioni del confronto di stringhe.
2. **Casting dei valori o controllo dei tipi**: prima di utilizzare una variabile in una funzione, è consigliabile eseguire il casting esplicito al tipo di dato atteso o verificare il tipo di dato effettivo.
3. **Whitelist rigorosa**: quando possibile, limitare l'input dell'utente a un insieme predefinito di valori validi. Questa tecnica, detta *whitelisting*, è particolarmente efficace per prevenire attacchi di *file inclusion*.
4. **Verifica dell'integrità dell'input**: prima di utilizzare l'input dell'utente in funzioni potenzialmente pericolose, come la deserializzazione, è fondamentale verificarne l'integrità per individuare eventuali modifiche malevole. Questa verifica può essere effettuata utilizzando tecniche come HMAC (*Hash-based Message Authentication Code*). HMAC utilizza una chiave segreta per generare un hash per il messaggio.
    
    Quindi il web server genera una chiave segreta internamente. Quando esporta dati li manda in chiaro affiancati dal rispettivo hash. Quando invece importa dati, prima di utilizzarli (ad esempio fare la deserializzazione) si ricalcola l’hash dei dati e verifica che il risultato combaci con l’hash ricevuto
    
5. **Funzioni e API sicure**: quando disponibili, utilizzare funzioni e API standard. Queste funzioni spesso implementano internamente le *best practices* di sicurezza.
