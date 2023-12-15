# Annotazioni

Le annotazioni in Java sono metadati che forniscono informazioni aggiuntive sul codice sorgente.
Esse non hanno un impatto diretto sull'esecuzione del programma, ma possono essere lette da strumenti durante il processo di compilazione o esecuzione per applicare comportamenti speciali, generare codice ausiliario, o fornire informazioni utili agli sviluppatori o a strumenti di analisi.

Le annotazioni possono venir associate a:
- classi
- metodi e costruttori
- campi
- parametri
- variabili locali


Un esempio di annotazione che abbiamo già visto è il `@override`

```java
@override
public void method() {
	...
}
```
In questo caso il ruolo dell'annotazione è assicurare che il metodo sia effettivamente un override, altrimenti non viene compilato il codice.

Altri esempi molto utilizzati sono `@Deprecated(since="<versione>")` per dire che un costrutto è deprecato da un certa versione.
Oppure `@SuppressWarnings("<warning_type>")` per evitare che il compilatore generi il tipo di warning specificato

## Creare una annotazione

La sintassi per definire una propria annotazione è la seguente:

```java
<visibilità> @interface <nome_annotazione> {
	// eleneco dei campi che seguono il seguente formato
	<tipo> <nome_campo>() default <valore_di_default>;
	
}
```

solitamente le annotazioni vengono messe in un file java a parte e poi viene importato tale file dove serve.
Vediamo come ad ogni campo possiamo attribuire un valore di default, se esso non viene specificato quando si fa riferimento all'annotazione bisogna assegnare un valore a tale campo.


```java
public @interface MyAnnotation {
	String value() default "";
	int  priority();
}
```

vediamo come utilizzare questa annotazione:

```java
public class MyClass {
	 //utilizzo valido
    @MyAnnotation(value = "Custom Value", priority = 1)
    public void myMethod() {
        ...
    }
	
	//utilizzo valido
    @MyAnnotation(priority = 1)
    public void myMethod() {
        ...
    }
    
    //utilizzo non valido: bisogna inizializzare il campo "priority"
    @MyAnnotation()
    public void myMethod() {
        ...
    }
    
}

```

## Target

Nella definizione è possibile anche limitare a cosa è possibile affiancare l'annotazione.
Questo viene fatto aggiungendo una annotazione speciale chiamata `@Target` alla nostra annotazione, specificando al suo interno a cosa è possibile affiancare la nostra annotazione:

```java
@Target({
	ElementType.FIELD,	// può assere affiancata ai campi
	ElementType.METHOD,	// può assere affiancata ai metodi
	ElementType.PARAMETER // può assere affiancata ai parametri
})
public @interface MyAnnotation {
	String value() default "";
	int  priority();
}
```


## Retention

Similmente all'annotazione `@Target`, l'annotazione `@Retention` permette di rendere l'annotazione presente solo nel codice, nella classe, oppure in esecuzione.
Possiamo decidere modificando il campo `RetentionPolicy`
- `RetentionPolicy = SOURCE`: l'annotazione viene trattata come fosse un normale commento.
- `RetentionPolicy = CLASS`:Nel secondo l'annotazione viene considerata in fase di compilazione (documentazione esterna).
- `RetentionPolicy = RUNTIME`:nel terzo caso l'annotazione viene considerata anche in fase di esecuzione.


```java
@Target({
	ElementType.FIELD,	// può assere affiancata ai campi
	ElementType.METHOD,	// può assere affiancata ai metodi
	ElementType.PARAMETER // può assere affiancata ai parametri
})
@Retention(
	RetentionPolicy.SOURCE
)
public @interface MyAnnotation {
	String value() default "";
	int  priority();
}
```


## JUnit

**JUnit** è un framework utilizzato per fare testing di un codice, in sostanza un metodo che richiama parti del nostro codice per vedere se si comporta come previsto.
Questo framework fa uso delle annotazioni per gestire le fasi di testing e quali metodi del nostro codice testare.
[junit user guide](https://junit.org/junit5/docs/current/user-guide/)


## JAXB

Un altro framework che fa intenso uso delle annotazioni è **JAXB**, utilizzato per rappresentare le classi di Java in XML.
Attraverso diverse annotazioni si possono riconoscere le varie componenti della classe.
La traduzione da oggetto Java a XML viene chiamata **Marshalling**. Mentre la traduzione da XML a oggetto Java viene chiamata **Unmarshalling**
