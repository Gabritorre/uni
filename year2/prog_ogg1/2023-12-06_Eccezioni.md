# Exceptions

La normale esecuzione del codice può essere interrotta a causa di errori, In Java tali errori vengono rappresentati dalle **exceptions**. Le exceptions sono degli oggetti che contengono informazioni utili sui relativi errori.

Quando si verifica un errore viene interrotta l'esecuzione e l'eccezione relativa viene propagata (tramite il comando `throw`) attraverso tutto lo stack delle chiamate fino a che qualche funzione la "catturi" `catch` per gestire l'errore, se nessuna funzione ha previsto una cattura allora il programma verrà terminato.

Gli oggetti che definiscono le eccezioni appartengono ad una classe `Throwable`, nella seguente immagini vediamo una piccola parte della gerarchia:

![enter image description here](https://i.ibb.co/PhD2xnT/image.png)

Notiamo intanto una distinzione tra `Error` ed `Exception`
- Gli `Error` sono errori seri da cui non è possibile riprendere l'esecuzione del programma
- Le `Exception` sono errori più leggeri che, se gestiti, possono far riprendere l'esecuzione del programma

È possibile definire delle nostre eccezioni estendendo la classe `Throwable` oppure una delle sue sottoclassi

```java
// definisco la mia exception
public class NegativeSpeedException extends Exception {
	public NegativeSpeedException(double a) {	//costruttore
		super(“Negative speed not allowed: “ + a);
	}
}

//Utilizzo dell'eccezione
public class Vehicle {
	private double speed;
	public void accelerate(double a) throws NegativeSpeedException {
		if (a < 0){
			throw new NegativeSpeedException(a);	//lancio l'eccezione
		}
		this.speed = a;
	}
}
```

Se dovessimo andare ad eseguire il seguente codice

```java
Car a = new Car();
a.accelerate(-10); 	//lancia l'eccezione con il messaggio “Negative speed not allowed: -10“
``` 

come si nota dal codice al momento della definizione del metodo `accelerate` abbiamo messo `throws NegativeSpeedException`, questo perché tutti i metodi devono dichiarare anticipatamente le eccezioni che possono lanciare (in realtà solo quelle di tipo *checked*).
Inoltre anche le funzioni che chiamano le funzioni che possono lanciare eccezioni devono a loro volta dichiarare le eccezioni (Quindi nel caso ci fosse un metodo che fa uso di  `accelerate` quel metodo deve aggiungere alla propria definizione `throws NegativeSpeedException`)

è importante documentare accuratamente le eccezioni che possono essere lanciate dai nostri metodi.
In javadoc possiamo utilizzare il tag `@throws <exception_name> <descrizione>`


## Override

Le eccezioni rispettano il principio di sostituzione: "se una classe C1 espone una interfaccia più aperta di C2, allora possiamo utilizzare l'istanza di C1 anche quando ci si aspetta una istanza di C2"
Attenzione però: per quanto riguarda le eccezioni una classe viene definita **più aperta** se essa espone **un numero minore o uguale** di eccezioni del metodo sovrascritto.

È evidente un problema: se vogliamo sovrascrivere un metodo che prevede delle eccezioni ma noi vogliamo aggiungerne altre non lo possiamo fare.

## Eccezioni checked e unchecked

Per migliorare questo problema Java divide le eccezioni in due categorie:

- **Unchecked**: non è necessario dichiarare queste eccezioni. Includono la maggior parte delle eccezioni generiche che estendono le classi `Error` e `RuntimException` (Sono solitamente errori del programma che possono essere evitati con una corretta progettazione e programmazione.)
- **Checked**: devono essere dichiarate. includono le eccezioni che estendono la classe `Exception` ma non di `RuntimeException`

## Catturare eccezioni

È possibile gestire le eccezioni tramite il comando `catch`, che quindi permette di fare delle operazioni nel caso si verificasse una eccezione specifica.

Riusciamo a catturare eccezioni tramite il costrutto `try-catch`

```java
try {
	// blocco che potrebbe generare una exception
}
catch(<tipo eccezione> <nome_variabile>) {
	//codice da eseguire in caso di exception
}
```

il codice precedente può avere tre risvolti:

1. all'interno del blocco `try` non viene generata nessuna eccezione e quindi il codice prosegue normalmente
2. viene generata una eccezione del tipo specificato nel `catch` (oppure anche un sottotipo), e viene eseguito il corpo del `catch`
3. viene generata una eccezione che però non è un sottotipo di quello specificato nel `catch`. In quel caso l'eccezione viene propagata in tutto lo stack di chiamate per trovare un `catch` che cattura quel tipo di eccezione

### Finally

Abbiamo anche un blocco aggiuntivo `finally` da poter mettere dopo i catch.
È un blocco che viene eseguito sempre, che si verifichi o meno una eccezione, Questo è utile, ad esempio, quando si lavora con risorse come file o connessioni di rete e si desidera assicurarsi che tali risorse vengano correttamente rilasciate, anche in caso di eccezioni.

Viene eseguito anche se nel `try` oppure nel `catch` c'è un return. Nel caso all'interno del finally ci sia un return, i return precedenti verranno scartati

```java
try {
	// blocco che potrebbe generare una exception
}
catch(<tipo eccezione> <nome_variabile>) {
	//codice da eseguire in caso di exception
}
finally {
	//codice eseguito indipendentemente dal verificarsi dell'exception
}
```

## Catene di eccezioni

Quando lanciamo una eccezione possiamo anche passare come parametro l'eccezione che l'ha causata:

```java
public class Race {
	public T race(double length) {
		...
		try {
			...
		}
		catch(ImpossibleAccelerationException e) {
			throw new IllegalArgumentException(“Random returned a negative number, e);	 //passiamo il valore 'e' che è a sua volta una eccezione
		}
		finally {
			...
		}
	}
}
```

in questo caso vedremo nella console sia l'eccezione esterna che anche quella che l'ha causata.
Il tutto per migliorare il debug in caso di errori.

## Assertions

Le assertions sono delle condizione che dovrebbero rappresentare qualcosa che dovrebbe essere sempre vero.
Possiamo utilizzare queste condizione per testare la correttezza delle variabili durante l'esecuzione del programma.

vediamo un esempio:

```java
public class EsempioAssertion {
    public static void main(String[] args) {
        int numero = -5;

        // Utilizzo di assert per verificare che il numero sia positivo
        assert numero > 0 : "Il numero deve essere positivo";

        // Se l'assertion fallisce, il messaggio specificato viene stampato
        // e il programma termina se gli assert sono abilitati (-ea).
        
        System.out.println("Il numero è: " + numero);
    }
}
```

nota che gli assert sono disabilitati di default e vanno abilitati aggiungendo le opzioni `-ea` quando si esegue il programma
