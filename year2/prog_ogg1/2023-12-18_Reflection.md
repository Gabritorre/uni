# Reflection

La **reflection** è una feature di Java che permette di ottenere informazioni e interagire **a runtime**, attraverso il codice, con: classi, campi, metodi e costruttori 

## Classi

Vediamo come accedere alle informazioni di una classe.
Si utilizza una classe chiamata `Class` e per istanziare un oggetto di tipo class si possono utilizzare due modi:

- `<oggetto>.getClass()`
- `<classe>.class`


`Class` definisce tutti i getter per ottenere:

- informazioni sulla struttura di definizione della classe: `isPrimitive(), isInterface(), isAnnotation(), getModifiers(), ...`
- informazioni sulla gerarchia: `getInterfaces(), getSuperclass(), getPackage(), ...`
- campi/metodi con visibilità pubblica definiti nella classe e anche quelli ereditati: `getFields(), getMethods(), getCostructors()`
- campi/metodi (ignorando i modificatori di visibilità) definiti nella classe (ma non quelli ereditati): `getDeclaredFields(), gedDeclaredMethods(), getDeclaredConstructors()`
- [lista operazioni](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Class.html)


```java
Class c = Vehicle.class;
// tutti i costruttori
for(Constructor t : c.getDeclaredConstructors())
	System.out.println(t);

// tutti i metodi
for(Method m : c.getDeclaredMethods())
	System.out.println(m);

// i campi pubblici
for(Field f : c.getFields())
	System.out.println(f);

// tutti i campi
for(Field f : c.getDeclaredFields())
	System.out.println(f);

System.out.println(c.getSuperclass());	//la superclasse
System.out.println(c.getPackage());		//il package a cui appartiene la classe
```


## Campi

Vediamo come accedere e manipolare i campi di una classe.
Si utilizza una classe chiamata `Field`
Come abbiamo visto possiamo ottenere la lista dei campi tramite `getFields(), getDeclaredFields()`.
È possibile anche ottenere un campo in particolare specificando come parametro il nome del campo: `get[Declared]Field("<nome_campo>")` (se il campo non esiste viene lanciata una eccezione a *runtime*).
È possibile:

- Ottenere informazioni generali sul campo: `getType(), getModifiers()`
- Leggere il valore del campo: `get(), getDouble(), getInt(), ...`
	Si utilizza `get()` per leggere degli oggetti, mentre ci sono dei metodi specifici per i tipi primitivi
	Come parametro ai `get()` va passato l'oggetto da cui si vuole leggere il campo: 
	`<field>.get(<oggetto>)`

- Scrivere il valore del campo: `set(), setDouble(), setInt(), ...`
	Si utilizza `set()` per scrivere degli oggetti, mentre ci sono dei metodi specifici per i tipi primitivi
	Come parametro ai `set()` va passato l'oggetto da cui si vuole leggere il campo e il nuovo valore: 
	`<field>.set(<oggetto>, <nuovo_valore>)`
- [lista operazioni](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/reflect/Field.html)


In caso di **campi privati** non è direttamente possibile performare dei `set` e dei `get` (verrebbe lanciato un `IllegalAccessException`). È possibile prima di eseguire un `set` o un `get` mettere la seguente riga di codice:
`<field>.setAccessible(true);`
rendendo così il campo accessibile. 
Si tenga nota però che questa operazione infrange il concetto di incapsulamento, che potrebbe portare a problemi al normale funzionamento del codice e un riduzione della sicurezza del codice. 
È quindi consigliato usare questo metodo solo quando strettamente necessario.


```java
Car c = new Car(0, null);
Class classCar = c.getClass();
Class classVehicle = classCar.getSuperclass();
Field speed = classVehicle.getDeclaredField( "speed");
speed.setDouble(c, 10.0);
```

## Metodi

Vediamo come accedere e manipolare i metodi di una classe.
Si utilizza una classe chiamata `Method`
Come abbiamo visto possiamo ottenere la lista dei metodi tramite `getMethods(), getDeclaredMethods()`.
È possibile anche ottenere un metodo in particolare specificando come parametro il nome del metodo e la classe dei tipi dei parametri: `get[Declared]Method("<nome_metodo>", <tipo>.class, ...)` (se il metodo non esiste viene lanciata una eccezione a *runtime*).
È possibile:

- Ottenere informazioni generali sul sul metodo: `getReturnType(), getTypeParameters(), getGenericExceptionTypes(), getModifiers()`
- invocare il metodo tramite il metodo `<method>.invoke(<oggetto>, <valore_parametro>, ...)`
- [lista operazioni](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Method.html)

In caso di **metodi privati** vale lo stesso discorso fatto sui campi.

```java
Car c = new Car(0, null);
Class classCar = c.getClass();
Class classVehicle = classCar.getSuperclass();
Method accelerate = classCar.getDeclaredMethod("accelerate", double.class);
Method getSpeed = classVehicle.getDeclaredMethod("getSpeed");
Object result = getSpeed.invoke(c);
result = accelerate.invoke(c, 2.0);
```


## Costruttori

Vediamo come accedere e manipolare i costruttori di una classe.
Si utilizza una classe chiamata `Constructor`
Come abbiamo visto possiamo ottenere la lista dei costruttori tramite `getConstructors(), getDeclaredConstructors()`.
È possibile anche ottenere un costruttore in particolare specificando come parametro il la classe dei tipi dei parametri (ovviamente dato che i costruttori non hanno un nome, non serve metterlo): `get[Declared]Constructor(<tipo>.class, ...)` (se il metodo non esiste viene lanciata una eccezione a *runtime*).
È possibile:

- Ottenere informazioni generali sul sul costruttore: `getParameterTypes(), getGenericExceptionTypes(), getModifiers()`
- chiamare il costruttore per creare una nuova istanza della classe: `<costruttore>.newInstance(<valore_parametro>, ...);`
- [lista operazioni](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Constructor.html)

In caso di **costruttori privati** vale lo stesso discorso fatto sui campi.

```java
Class class<Car> = c.getClass();
Constructor cst = classCar.getDeclaredConstructor(double.class, FuelType.class);
Car created = cst.newInstance(2.0, new FuelType("diesel", 0.015, 0.01));
```

## Annotazioni

Con la reflection si può interagire con le annotazioni che hanno `RetentionPolicy = RUNTIME`.
Si utilizza una classe chiamata `Annotation`

- possiamo ottenere le annotazioni: `getAnnotations(), getDeclaredAnnotations()`
	anche ottenere delle specifiche annotazioni con `getAnnotation(<nome_annotazione>.class),getDeclaredAnnotation(<nome_annotazione>.class)`
- possiamo ottenere i valori presenti nei campi dell'annotazione, usando il nome del campo come funzione
- [lista operazioni](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Constructor.html)


```java
// Definizione di un'annotazione personalizzata
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface MyAnnotation {
    String mio_campo();
}

// Ottenere il valore dell'annotazione da una classe
MyAnnotation myAnnotation = MyClass.class.getAnnotation(MyAnnotation.class);
String annotationValue = myAnnotation.mio_campo();
```


## Vantaggi e svantaggi della reflection

- **Vantaggi**
	- tramite reflection abbiamo accesso a componenti a cui non avremmo accesso normalmente, in alcuni casi ciò può rompere il principio di incapsulamento ma delle volte può essere necessario (estremamente utile per i framework).
	- accedere a componente sconosciuti in fase di compilazione. i framework infatti non sono a conoscenza su quali classi, metodi, campi andranno a lavorare

- **Svantaggi**
	- la reflection funziona a *runtime*, quindi nel caso ci fossero dei palesi errori (cercare di ottenere un metodo non esistente) il codice compilerebbe lo stesso ma verrebbe lanciata una eccezione a *runtime*
	- la sintassi utilizzate per fare le varie operazioni è abbastanza verbosa e poco intuitiva rispetto al modo classico di fare le cose
