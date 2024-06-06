# Programmazione pseudo funzionale

Java è un linguaggio orientato agli oggetti ed è detto *class-based*, cioè sei sempre obbligato a racchiudere il codice all'interno di una classe.

Possiamo però forzare, limitatamente, il linguaggio ad utilizzare uno stile di programmazione procedurale (come C) per esempio limitandoci a creare classi composte solo da campi e definire solo metodo statici.

Nel corso del tempo vari linguaggi tra cui Java hanno introdotto un costrutto proveniente dalla programmazione funzionale: le **espressioni lambda**

## Espressioni lambda

Una funzione lambda possiamo vederla come una funzione anonima, cioè che non possiede un nome per essere invocata.

Si utilizzano con la seguente sintassi:

```java
(parameter1, parameter2, ...) -> { code block }
```

**è opzionale specificare il tipo dei parametri**
se ci sono statement nel `code block` allora sono obbligatorie le parentesi graffe, altrimenti no

ad esempio

```java
// espressione che prende in input due interi e restituisce la somma
(int x, int y) -> x + y

// espressione che prende in input una stringa e restituisce la sua lunghezza
s -> s.length()

// espressione che prende in input una stringa e non restituisce nulla
(String s) -> { System.out.println("Benvenuto ");
			System.out.println(s);
			  }
```

## Confronto tra lambda e classi anonime

La programmazione funzionale in generale è più coincisa, espressiva e ha meno probabilità avere bug al suo interno (banalmente perché riduce di molto il codice scritto)

Prima che Java implementasse le funzioni lambda, venivano utilizzate le **classi anonime**.

Con l'aggiunta delle lambda si sono aggiunte anche le cosiddette **funzioni di ordine superiore**, cioè funzioni che: prendono come parametro una funzione oppure che ritornato una funzione oppure che definiscono un altra funzione al loro interno.
le normali funzioni vengono chiamate **funzioni di primo ordine**

## Command pattern

Il *command pattern* è un modo di programmare in cui al posto di eseguire direttamente delle modifiche su dei dati, deleghi il compito ad una funzione: che prenderà in input **i dati** e un **comando** (implementato come una interfaccia) e si occuperà di applicare tale comando ai dati passati.
La funzione che esegue questo compito non saprà nulla di che cosa fa il comando, saprà solamente il nome della funzione da chiamare all'interno del comando.

Ci sono altri modi per implementare questo pattern, ad esempio definendo una classe che ha al suo interno un attributo che fungerà da comando.

Questa tecnica permette molta flessibilità del codice.

### Esempio

Un classico utilizzo delle funzioni lambda è quando vogliamo far operare una funzione su ogni elemento di una collezione di dati.

```java
class Lambda {
	//creo una interfaccia con un metodo che prende in input un valore e non ritorna nulla.
	// è utile perche nella firma della prossima funzione voglio specificare che voglio una funzione come input
	interface MyFunction<T> {
		void apply(T  x);
	}

	// questo metodo vuole una collection ed una funzione come parametri.
	// il suo scopo è di applicare la funzione ad ogni elemento della collezione
	public static <T> void forEach(Collection<T> c, MyFunction<T> f) {
		for (T x : c) {
			f.apply(x);
		}
	}

	public static void main(String[] args) {
		List<Integer> l = List.of(1, 2, 3, 4);

//ESEMPIO 1
		//chiamata alla funzione con classe anonima
		forEach(l, new MyFunction<Integer>() {
			@Override
			public void apply(Integer x) {
				System.out.println(x);
			}
		});
		
		//chiamata alla funzione con espressione lambda
		forEach(l, x -> System.out.println(x));

//ESEMPIO 2
	
		//chiamata alla funzione con classe anonima
		forEach(l, new MyFunction<Integer>() {
			public void apply(Integer  x) {
				if (x >  5) {
					x = x +  1;
				}
			}
		});
		//chiamata alla funzione con espressione lambda
		forEach(l, x -> {if (x >  5) x = x+1;});
	}
}
```

Notiamo come la chiamata alla funzione `forEach` passando come secondo parametro una funzione anonima (lambda) risulta molto più semplice.

## Classi per le funzioni

Nell'esempio precedente abbiamo creato manualmente una interfaccia contenente il metodo da utilizzare, tale funzione prende in input un dato e non ritorna nulla.
Se volessimo però fare una funzione che prende in input e genera in output qualcosa dovremmo creare un'altra interfaccia, lo stesso vale per una funzione che non prende input ma genera output.

Java offre delle interfacce già pronte all'interno di `java.util.function.*` da poter usare come tipo di dato nei parametri delle funzioni di ordine superiore.

Le interfacce sono le seguenti:

- [`Function`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/function/Function.html) usato per funzioni che prendono qualcosa in **input** e ritornano qualcosa in **output**
la sua metodo si chiama `apply()`
- [`Consumer`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/function/Consumer.html) usato per funzioni che prendono qualcosa in **input** ma che **non hanno output**
la sua metodo si chiama `accept()`
- [`Supplier`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/function/Supplier.html) usato per funzioni che **non** prendono **input** ma che ritornano qualcosa in **output**
la sua metodo si chiama `get()`
- [`Runnable`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/lang/Runnable.html) usato per funzioni che **non** prendono niente in **input** e che **non** hanno **output** 
la sua metodo si chiama `run()` 

Nell'esempio precedente avremmo potuto usare direttamente `Consumer` al posto di definire `MyFunction`.

Vediamo un esempio di utilizzo con `Function`:

```java
class Lambda {

	//questo metodo riempie un arraylist con dei dati generati dalla funzione 'f' chiamata su ogni elemento della collection 'c'
	public static <A, B> Collection<B> map(Collection<A> c, Function<A, B> f) {
		Collection<B> r = new ArrayList<>();
		for (A x : c) {
			B value = f.apply(x);
			r.add(value);
		}
		return r;
	}

	public static void main(String[] args) {
		List<Integer> l = List.of(1, 2, 3, 4);
	
		//per ottenere una collection con tutti gli elementi incrementati di 1
		Collection<Integer> res1 = map(l, x -> {return x+1;});
		//equivalente a:
		Collection<Integer> res2 = map(l, x -> x+1);

		//per ottenere una collection di booleani che indicano se i valori sono positivi
		Collection<Boolean> res3 = map(l, x -> x>0);

}
```

## Il particolare polimorfismo delle lambda

Le lambda in Java sono più polimorfe del normale, questo perché una stessa lambda può avere **più di un tipo associato**

```java
import java.util.function.Function;
public class Lambda {
	interface MyFunction<A, B> {
		A ciccio(B x);
	}

	interface MyFunction2<A, B> {
		A prova(B x);
	}
	
	public static void main(String[] args) {
		MyFunction<Integer, Integer> f1 = (a) -> a+1;
		Function<Integer, Integer> f2 = (a) -> a+1;
		MyFunction2<Integer, Integer> f3 = (a) -> a+1;
	}
}
```

Si nota nel precedente codice come una stessa lambda può essere assegnata a 3 variabili con tipo diverso.
Questo perché le lambda sono sostanzialmente una *shortcut* per creazione di una **classe anonima**, Java riesce a creare questa classe anonima in base al contesto (al tipo della variabile oppure al tipo del parametro).
È sufficiente che il tipo sia una **interfaccia** con un **unico metodo**, il compilatore si preoccuperà di implementare tale metodo basandosi sulle informazioni presenti nella lambda.
