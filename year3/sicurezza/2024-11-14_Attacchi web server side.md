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

## String comparison attacks

PHP, non richiede una definizione esplicita del tipo di variabile in quanto viene determinato dinamicamente in base al contesto tramite un meccanismo chiamato t*ype juggling* che esegue conversioni automatiche.

Questo meccanismo, sebbene semplifichi la scrittura del codice, può introdurre comportamenti imprevedibili se si utilizza l'operatore di confronto debole `==`, dato che questo operatore eseguo il confronto dopo la conversione automatica. Al contrario, l'operatore di confronto stretto `===` verifica l'uguaglianza sia del valore che del tipo senza la conversione automatica.

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
    
    Se avessimo un token del tipo `“0e394…”` in questo caso tale stringa potrebbe essere convertita in un intero scritto in notazione esponenziale ($0\cdot 10^{394…} = 0$), per cui se l’attaccante fornisce l’input `“0”` supererebbe il confronto debole.
    
    Si potrebbe pensare che usare strcmp renda il codice più sicuro, in quanto viene delegato il controllo ad una funzione nativa, ma il problema comunque rimane se facciamo il confronto in questo modo:
    
    `if (strcmp($input, $token) == 0) {`
    
    se `strcmp` fallisce ritorna `NULL`, ma `NULL` viene convertito in `0` e quindi si supera il controllo.
    

## File inclusion attacks

Supponiamo un codice in cui vengono caricate delle pagine in modo dinamico in base ad un parametro passato in GET dall’utente:

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

## Deserialization attacks

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

Un attaccante può creare un oggetto appartenente ad una classe presente sul server, inserire del codice malevolo, lo serializza, lo codifica come URL e lo inserisce in un cookie.

Quando il server prenderà il cookie, la stringa verrà deserializzata e il codice malevolo all’interno di `__wakeup()` verrà eseguito.

Codice del server:

```php
class Example
{
	 private $hook;
	 // some PHP code...
	 function __wakeup()
	 {
		 if (isset ($this->hook)) eval ($this->hook);
	 }
}
// simulating the attack.
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

## SQL injection attacks

SQL injection è un attacco che prevede di inserire query SQL arbitrarie nei campi di input, con l’obiettivo che tali stringhe vengano messe all’interno di query reali senza una corretta sanitizzazione modificandone quindi il comportamento.

Vediamo un esempio di query per ottenere le informazione di un utente in base al cognome inserito dall’utente in un form di input.

 
`$query = "SELECT name, lastname FROM people WHERE lastname = '" . $_POST['lastname'] . "'";`

Nota che `.` serve per concatenare stringhe in PHP.

L’attaccante ha il controllo di una parte della query, cioè `$_POST['lastname']`.

L’attaccante può inserire un `'` per lasciare la stringa vuota a aggiungere un altro confronto che risulterà essere sempre vero per poi commentare la restante parte della query per evitare che la query vada in errore

`SELECT name, lastname FROM people WHERE lastname = '' OR 1 -- '`
