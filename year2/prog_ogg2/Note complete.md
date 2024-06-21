# Note generali

Ripassiamo alcuni concetti che abbiamo affrontato nel modulo 1 e introduciamo delle brevi note su altri aspetti di Java.

## Classificazione dei linguaggi

differenza tra: inizializzazione, dichiarazione, assegnamento
- dichiarazione: creare una nuova variabile specificando il **tipo** e il **nome**.
- assegnamento: dare un valore ad una variabile già creata in precedenza
- Inizializzazione (*binding*): consiste nel dichiarare una variabile e assegnargli subito un valore

I linguaggi di programmazione si dividono principalmente in due **paradigmi** di programmazione:
- **Imperativi**
- **Funzionali**
Si differenziano dalla presenza o meno dell'operatore di **assegnazione**, infatti nei linguaggi funzionali non è possibile fare assegnazioni, ma solo inizializzazioni.

I linguaggi imperativi si dividono poi in diversi stili di programmazione, ad esempio **procedurale** e **orientato agli oggetti**.


## Linguaggio orientato agli oggetti

Java è un linguaggio imperativo orientato agli oggetti e basato sulle classi (sei obbligato a mettere il codice all'interno di una classe, anche se non vuoi utilizzare le classi)

La caratteristica distintiva tra un linguaggio orientato agli oggetti da uno che non è orientato agli oggetti è **il polimorfismo**, in particolare dalla presenza della **virtual table** la **Subsumption**: "qualunque oggetto di una data classe X è anche istanza della superclasse di X."
Ad esempio, una istanza della classe Rettangolo può essere sempre usata dove ci si aspetti una qualunque FiguraGeometrica poiché un rettangolo **è** una figura geometrica.

## Classe e oggetto

la Classe definisce come deve essere un tipo di dato, un oggetto è l'istanza di una classe cioè un valore con il tipo definito dalla sua classe.

## Tipi statici e dinamici

Tipo statico e dinamico in Java:
- il tipo statico è deciso in **compile time**, cioè quello messo nella fase di dichiarazione della variabile (senza assegnarla)
- il tipo dinamico è deciso in **runtime**, cioè il tipo dell'oggetto nella fase di assegnamento

In Java possiamo dire di avere un **dispatch dinamico sul ricevitore** su cui è chiamata la funzione mentre abbiamo un **dispatch statico sui parametri** delle funzioni.


## Classi astratte e interfacce

il significato di classi astratte e interfacce è molto simile tra loro, sono entrambi dei sistemi per creare dei sottotipi. La necessità di avere questa distinzione viene dal fatto che Java è un linguaggi in cui **non è presente l'ereditarietà multipla**, quindi puoi ereditare da una sola classe e poi implementare più interfacce.

## Tipi generici vs Object

Da una analisi superficiale potrebbe sembrare che usare i tipi generici oppure Object sia la stessa cosa, in parte è vero in quanto entrambi permettono di poter mettere qualsiasi cosa come tipo di dato. Il problema di Object è che se venisse come tipo di dato per una collezione di dati, in tale collezione ci potrebbero finire dentro qualsiasi oggetto però noi saremo abbastanza limitati sulle operazioni che possiamo fare su tali oggetti:
- o utilizziamo solo metodi della classe Object.
- o facciamo dei cast, con il rischio però di fare errori non conoscendo i veri tipi degli oggetti.

Usando i tipi dinamici questo problema non si pone in quanto al momento della inizializzazione della collezione viene specificato il tipo dei dati che ci andremo ad inserire.

Nella documentazione di Java ci sono vari metodi che nonostante questo utilizzano comunque Object (vedi il metodo `contains` di ArrayList), questo perché Java ha introdotto i tipi dinamici svariate versioni dopo il rilascio iniziale e quindi per mantenere la compatibilità con le vecchie versioni Java utilizza ancora Object.


## Parametri formali e attuali

- Parametri formali: variabili presenti nella dichiarazione dei parametri dei metodi e che vengono poi utilizzati all'interno del metodo
- parametri attuali: gli argomenti usati nella chiamata della funzione

## Eccezioni checked e unchecked

Quando stiamo implementando delle nostre classi,  facciamo un metodo che può non andare a buon fine, come gestiamo quel caso?
- ritornare `null`
- lanciare una eccezione checked
- lanciare una eccezione unchecked

Prendiamo ad esempio un metodo `get(int indice)` di una collezione di oggetti, esso può fallire nel caso si dia un indice al di fuori del limite della collezione.
- ritornare `null` non è una buona soluzione in quanto non esprime chiaramente che si è andati fuori dal limite dell'array e soprattutto bisognerebbe fare un `if` ogni volta che si chiama il metodo
- lanciare una eccezione è la soluzione migliore, ma come decidere se usare una eccezione checked oppure unchecked? scegliere una eccezione checked implica di costruire una propria eccezione (è una operazione raccomandata ma non obbligatoria), e dichiararla nella firma del metodo e poi il chiamante dovrà occuparsi di gestirla.
Scegliere una unchecked risulta più comoda ma anche meno esplicativa in quanto sono eccezioni generiche.

Per capire quale usare possiamo chiederci: "Se un utente cattura la mia eccezione checked può fare qualcosa di utile?", "l'eccezione che lancio fa parte di un possibile risultato del metodo oppure rappresenta un errore raro"

Nel nostro caso, se il chiamante fa del codice corretto, è molto inusuale uscire dai limiti della collezione, inoltre se il chiamante prende l'eccezione non può fare niente di utile, inoltre gestire ogni get con dei try-catch risulta essere molto scomodo e allunga inutilmente il codice. Quindi si opta per una eccezione unchecked.


### Sottotipo di una eccezione unchecked

potremmo chiederci se ha senso creare un sottotipo di una eccezione unchecked, la risposta è che non ha molto senso in quanto con una eccezione unchecked si prevede che il chiamante non gestirà le eccezioni con un try catch, quindi creare il proprio tipo speciale non avrebbe molto senso perche non verrebbe catturata mai.


## Dimensione di un oggetto

la dimensione in byte di un oggetto è determinata da vari fattori della sua classe:

- la somma della dimensione degli attributi primitivi
- per ogni attributo *reference type* (oggetto) si aggiunge la dimensione di un puntatore
- per ogni metodo si aggiunge la dimensione di un puntatore
- se si tratta di una sottoclasse si considerano anche gli attributi ereditati e i metodi ereditati non sovrascritti
- attributi e metodi statici non vanno contati


## Statement vs expression

Vediamo la differenza che c'è tra una espressione e uno statement (vale in generale per i linguaggi di programmazione):

- **Expression**: codice che può essere valutato, cioè che produce un valore che possiede un tipo.
- **Statement**: codice che non genera un valore e che viene terminato `;` uppure dalla chisura del proprio blocco di codice `{...}`

## Final

Il significato della keyword **final** in Java è sostanzialmente la disabilitazione dell'operatore di assegnamento sull'oggetto relativo.

il final può essere messo nei seguenti casi:
- **sui parametri di una funzione**: significa che tali parametri non possono essere riassegnati all'interno del corpo della funzione
- **dichiarazione di campi o variabili locali**: la variabile dopo essere stata inizializzata non può più essere assegnata
- **sulla firma dei metodi**: il metodo non è sovrascrivibile

Fare attenzione che un oggetto final significa sempre che non può essere riassegnato con un nuovo oggetto, ma è comunque possibile modificare i suoi campi e chiamare i suoi metodi


## Type parameter e Type argument

Nell'ambito dei *generics*:
- il *type parameter* rappresenta la **dichiarazione** dei tipi generici che verranno usati dalla classe/metodo, si trovano tra parentesi angolari e appaiono prima dell'utilizzo effettivo dei tipi:
`public class MyClass<T> {}`
`public static <MyType> void f() {}`
- il *type argument* rappresenta l'utilizzo dei tipi generici e anche "l'assegnazione" di quale tipo utilizzare
	```java
	public class MyClass<T> {
		T ciao;
	}
  ```
  ```java
	public static <MyType> void f(MyType a) {
		...
	}
  ```
    ```java
	MyClass<String> mc;
  ```

# Classi innestate

In Java è possibile definire una classe dentro un'altra, in questo caso la classe più esterna viene chiamata *top-level class* oppure *enclosing class* e quella interna viene chiamata *nested class*.

Utilità delle classi innestate:
- È un modo per **raggruppare logicamente le classi** che vengono utilizzate in un unico posto
- **Migliora l'incapsulamento** Se abbiamo 2 classi *top-level* A e B in cui B è l'unica classe del nostro universo che ha bisogno di accedere agli attributi/metodi di A, allora A sarà obbligata a dare una visibilità sufficiente a tali attributi/metodi. Se però B fosse una classe innestata allora tali attributi/metodi potrebbero essere messi privati e comunque B potrebbe accederci
- **Migliore leggibilità e manutenibilità del codice**: in quanto la creazione del codice risulta posizionato vicino a dove viene utilizzato. 

Nota che non si tratta in alcun modo di ereditarietà e sottotipi

## Classi Static e non static 

Le classi innestate possono essere di due tipi, *static* oppure *non-static*. Ricordiamo che le **classi *top-level* non possono essere statiche**

- le classi innestate non statiche vengono chiamate ***inner classes***
- le classi innestate statiche vengono chiamate ***static nested classes***


```java
class OuterClass {
    class InnerClass {}
    static class StaticNestedClass {}
}
```

## Inner class

Una classe innestata non statica (*inner class*) **ha accesso ai membri della classe esterna**, anche se questi sono privati.

Una istanza della *inner class* può esistere solo all'interno dell'istanza della sua classe esterna.

```java
public class OuterClass {

    String outerField = "Outer field";
    static String staticOuterField = "Static outer field";

    class InnerClass {
        void accessMembers() {
            System.out.println(outerField);
            System.out.println(staticOuterField);
        }
    }

    public static void main(String[] args) {
        OuterClass outerObject = new OuterClass();
        OuterClass.InnerClass innerObject = outerObject.new InnerClass();
        innerObject.accessMembers();       
    }
}
```

Se non si vuole che la classe esterna possa accedere ai membri della *inner class* allora la si può mettere con visibilità *private* oppure *protected* (ricorda che questo non si può fare con la classe esterna)


Esistono due tipi speciali di *inner class*: 
- *local classes*
- *Anonymous Classes*

## Local class

Le classi locali sono delle classi che sono **definite all'interno di un blocco di codice**, nella maggior parte dei casi all'interno del corpo di un metodo (ma è anche possibile farlo dentro un `if` oppure dentro un `for` ad esempio)


```java
public class LocalClassExample {
    static String regularExpression = "[^0-9]";
  
    public static void validatePhoneNumber(String phoneNumber1, String phoneNumber2) {
        final int numberLength = 10;
        
        class PhoneNumber {		//local class
            String formattedPhoneNumber = null;

            PhoneNumber(String phoneNumber){
				// verifica se il numero passato in input è valido (utilizzando "regularExpression" e "numberLength")
				// se valido lo salva in "formattedPhoneNumber"
            }
            public String getNumber() {
                return formattedPhoneNumber;
            }
		}
		
	    PhoneNumber myNumber1 = new PhoneNumber(phoneNumber1);
	    PhoneNumber myNumber2 = new PhoneNumber(phoneNumber2);
	    
        if (myNumber1.getNumber() != null) 
	           System.out.println("First number is " + myNumber1.getNumber());

        if (myNumber2.getNumber() != null)
	           System.out.println("Second number is " + myNumber2.getNumber());
    }

    public static void main(String[] args) {
        validatePhoneNumber("123-456-7890", "456-7890");
    }
}
```

Una classe locale può accedere agli elementi della classe esterna solo se questi sono esplicitamente oppure "effettivamente" **final**, cioè o vengono dichiarati esplicitamente come *final* oppure non mettendo *final* e non modificando il loro valore dopo l'inizializzazione.

Nel caso di classe locale al corpo di un metodo, la classe può accedere anche ai parametri del metodo.

## Anonymous class

Le classi anonime sono esattamente come le classi locali, solo che queste possono essere **dichiarate e istanziate allo stesso momento**. Le classi anonime sono chiamate in questo modo in quanto non gli viene dato un nome.

**Sono utili nel caso si voglia utilizzare una classe locale solo una volta**

Dato che non viene fornito un nome, per definire la classe ci si appoggia ad una interfaccia da implementare oppure ad una classe da cui estendere.

```java
interface MyInterface {
    void myMethod();
}

public class AnonymousClassExample {
    public static void main(String[] args) {
        MyInterface anonymousObject = new MyInterface() {
            @Override
            public void myMethod() {
                System.out.println("Implementazione di myMethod tramite classe anonima");
            }
        };

        // Chiamata al metodo dell'oggetto della classe anonima
        anonymousObject.myMethod();
    }
}
```

## static nested class

Una classe innestata statica (*static nested class*) **non ha accesso ai membri della classe esterna**

La classe statica non è legata ad una istanza della classe esterna.
Possiamo dire che una *static nested class* si comporta come una classe *top-level*

```java
public class OuterClass {

    String outerField = "Outer field";
    static String staticOuterField = "Static outer field";

    static class StaticNestedClass {
        void accessMembers(OuterClass outer) {
            // Compiler error: Cannot make a static reference to the non-static
            //     field outerField
            // System.out.println(outerField);
            System.out.println(outer.outerField);
            System.out.println(staticOuterField);		//posso accedere al campo statico esterno
        }
    }

    public static void main(String[] args) {
        StaticNestedClass staticNestedObject = new StaticNestedClass();
        OuterClass outerObject = new OuterClass();    
        staticNestedObject.accessMembers(outerObject);              
    }
}
```

Se si vuole istanziare `StaticNestedClass` dall'esterno si deve fare:
```java
OuterClass.StaticNestedClass staticNestedObject = new OuterClass.StaticNestedClass();
```


## Shadowing

Quando in una *nested class* dichiariamo un membro con lo stesso nome di un membro della classe esterna, allora il nuovo membro nasconde (*shadows*) il membro della classe esterna. In questo caso dalla classe innestata è possibile riferirsi direttamente ai membri locali, ma per riferirsi ai membri della classe esterna bisogna specificarne il nome.

Vediamo un esempio in cui si verifica uno *shadowing* 2 volte
```java
public class ShadowTest {
    public int x = 10;

    class FirstLevel {		//inner class
        public int x = 15;		//primo shadowing

        void methodInFirstLevel(int x) {				//secondo shadowing
            System.out.println("x = " + x);				// = 23
            System.out.println("this.x = " + this.x);	// = 15
            System.out.println("ShadowTest.this.x = " + ShadowTest.this.x); // = 10
        }
    }

    public static void main(String... args) {
        ShadowTest st = new ShadowTest();
        ShadowTest.FirstLevel fl = st.new FirstLevel();
        fl.methodInFirstLevel(23);
    }
}
```

## Come simulare una classe statica top-level

Come detto una classe *top-level* non può essere statica, ma possiamo fare dei magheggi per fare in modo che si comporti come tale:

1. dichiarare la classe come `final` in modo che non possa essere ereditata
2. fare il costruttore con visibilità `private`
3. rendi tutti i membri statici


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


# Thread

I Thread sono la parte esecutiva di un processo.
I thread condividono la maggior parte delle cose contenute nel processo, tra cui il *data-segment* e il *code-segment*. Mentre ogni thread ha il proprio *Program Counter* e il proprio *Stack Pointer*.

Vediamo come si creano e usano i thread in Java, vediamo il metodo "vecchio stile" con cui si sono sempre utilizzati i thread e vediamo anche un modo alternativo introdotto nelle versioni successive di Java.
Sta di fatto che il nuovo metodo non sostituisce completamente il vecchio modo, in quanto in determinati casi può risultare più comodo il vecchio modo (ma generalmente si tratta solo di un discorso di leggibilità e organizzazione di codice).

In generale ricordiamo che **un processo ha sempre almeno un thread**, nei programmi generalmente quel thread esegue il **main**.

## Vecchio modo di creare thread

Per definire un thread bisogna:
1. Creare una nuova classe che estende dalla classe `Thread`
2. Sovrascrivere il metodo `run()` con il codice che il thread deve eseguire durante la sua vita

Per utilizzare un thread bisogna:
1. Istanziare un oggetto del tipo della classe creata precedentemente
2. chiamare il metodo `start()` per far partire il thread
3. il creatore del thread deve poi aspettarlo con il metodo `join()`

```java
public class ThreadExample {
	public static class MyThread extends Thread {
		@Override
		public void run() {
			for (int i = 0; i < 100; i++) {
				System.out.println("hello");
			}
		}
	}

	public static void main(String[] args) {
		Thread t = new MyThread();
		t.start();
		for(int i = 0; i < 100; i++) {
			System.out.println("ciao");
		}
		t.join();
	}
}
```

Note:
- Solo al momento della chiamata al metodo `t.start()` il thread inizia la sua esecuzione, in altre parole da quel momento viene schedulato dalla CPU.
- Un **errore** potrebbe essere quello di chiamare `t.run()` al posto di `t.start()`, così facendo però stiamo dicendo al thread che sta eseguendo il main di eseguire il metodo `run()` definito nella classe `MyThread` per poi ritornare al main, non stiamo effettivamente creando un nuovo thread che esegue quel codice.
- A basso livello possiamo pensare che un thread è un fork della *Java Virtual Machine* che interpreta il bytecode specificato nel metodo `run()`
- se al posto dei cicli for mettessimo un `while(true)` vedremmo delle stampe molto separate (prima tanti "ciao" e poi tanti "hello" e via così) e **non alternati**, questo è dato dal **quanto di tempo** che la CPU fornisce ai thread

## Nuovo modo di creare thread

Con l'introduzione delle lambda è possibile creare i thread in maniera molto più diretta, anche se meno strutturata.

Non è più necessario creare una nuova classe che estende `Thread`, ma possiamo direttamente istanziare la classe `Thread` passando come parametro una istanza di `Runnable`.

Vediamo vari modi di farlo:

**Metodo 1** classe anonima
```java
public static void main(String[] args) {
	Thread t1 = new Thread(new Runnable() {
		@Override
		public void run() {
			for (int i = 0; i < 100; i++) {
				System.out.println("hello");
			}
		}
	});
	t1.start();
	t1.join();
}
```

**Metodo 2**: espressione lambda
```java
public static void main(String[] args) {
	Thread t1 = new Thread(() -> {
		for (int i = 0; i < 100; i++) {
			System.out.println("hello");
		}
	});
	t1.start();
	t1.join();
}
```

**Metodo 3**: variabile contenente un Runnable

```java
public static void main(String[] args) {
	Runnable f = () -> {
		for (int i = 0; i < 100; i++) {
			System.out.println("hello");
		}
	};
	Thread t1 = new Thread(f);
	t1.start();
	t1.join();
}
```

La scelta tra la nuova versione e quella vecchia si base sostanzialmente sulla grandezza del thread, **il vecchio metodo** è più comodo **per thread che hanno un codice lungo**, utilizzano altri campi o altri metodi.
Mentre **per thread leggeri** con codici brevi **la nuova versione è decisamente più rapida** da implementare.

## Produttore consumatore

Vediamo un classico problema di sincronizzazione multithreading per vedere anche come sincronizzare i thread

Il problema del produttore e consumatore consiste che un thread produca dei dati in un buffer e un altro thread li consumi dal buffer.
La sincronizzazione deve avvenire al fine di impedire che un un produttore sovrascriva dei dati nel buffer se il consumatore non li ha ancora consumati.
Il consumatore deve attendere che il produttore produca dei dati prima di consumarli.


In questo caso dato che i thread `Consumatore` e `Produttore` sono due entità ben distinte, hanno molto codice, è più conveniente utilizzare il vecchio metodo di utilizzo dei thread.

Nota: Il seguente metodo di sincronizzazione dei thread viene realizzato usando i **monitor**

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ConsumerProducer {

    public static List<Integer> buff = new ArrayList<>();	//buffer condiviso dai due thread

    public static class Producer extends Thread {
        public Producer() {
            super("Producer");
        }
        
        @Override
        public void run() {
            Random rnd = new Random();
            while (true) {
                int n = rnd.nextInt();	//inserisce un numero random nel buffer
                synchronized (buff) {   // lock
                    buff.add(n);
                    buff.notify();		//sblocco eventuali thread che hanno fatto wait()
                    System.out.printf("%s: added %d\n", getName(), n);
                }                       // unlock
            }
        }
    }
    
    public static class Consumer extends Thread {
        public Consumer() {
            super("Consumer");
        }
        
        @Override
        public void run() {
            while (true) {
                synchronized (buff) {	//lock
	                //se entro in zona critica però il buffer è vuoto rimango in attesa.
                    if (buff.isEmpty()) {	
                        try {
                            buff.wait();
                        } catch (InterruptedException e) {
                            throw new RuntimeException(e);
                        }
                    }
                    int n = buff.remove(0);
                    System.out.printf("%s: removed %d\n", getName(), n);
                }						//unlock
            }
        }
    }

    public static void main(String[] args) {
        Thread p = new Producer();
        Thread c = new Consumer();
        p.start();
        c.start();

        try {
            p.join();
            c.join();
        } catch (InterruptedException e) {}	//in caso di terminazioni anomale dei thread
    }
}
```

Analizziamo le parti più importanti:
- `synchronized(){}`  è una keyword che garantisce che tutto ciò che c'è all'interno delle parentesi graffe viene eseguito in modo atomico, cioè la sua esecuzione non può essere suddivisa.
	- All'interno delle parentesi ci va un qualsiasi **oggetto** che verrà utilizzato come **mutex**.
	- Ogni oggetto è figlio della classe `Object` la quale ha dei metodi particolari per la sincronizzazione: `wait()` e `notify()`.
	 - È possibile quindi utilizzare qualsiasi oggetto a piacimento, l'importante però è che **sia un oggetto condiviso tra i thread che si vuole sincronizzare**. Nel nostro caso abbiamo utilizzato l'oggetto `buff`.
	- Entrare all'interno di un blocco `synchronized` equivale diventare il proprietario (*owner*) dell'oggetto passato come mutex, e gli altri thread devono attendere che il mutex diventi senza proprietario
- `wait()` serve per rimanere in attesa all'interno di un blocco `synchronized` fino a quando un altro thread non lo sblocca. Dopo aver fatto una `wait` l'accesso all'area synchonized viene liberata.
- `notify()` serve a notificare i thread che sono in attesa in un blocco `synchronized` (cioè che hanno chiamato la `wait()`) di poter riprendere l'esecuzione.
- La `wait()` e la `notify()` si possono eseguire solo all'interno di un blocco `synchronized` e vanno chiamati sull'oggetto passato come mutex.
- le **exception** lanciate all'interno di un blocco `synchronized` rendono libero il blocco.
- Una conseguenza del fatto che solo l'owner del blocco possa lavorare in zona critica, implica che in funzioni ricorsive synchronized (a singolo thread) non generino uno stallo, in quanto è sempre lo stesso thread che esegue la funzione ricorsiva ed è sempre lui l'owner, quindi non rimane mai in attesa.

La buona regola per capire se è necessario sincronizzare è la seguente:
se lavorando con più thread ho almeno un thread che legge dei dati da una zona di memoria e almeno un thread che scrive dei dati nella stessa zona di memoria, allora è necessario sincronizzare.


# Covarianza e controvarianza

La covarianza e la controvarianza sono due concetti applicabili nell'*override* dei metodi

- **override**: quanto si ridefinisce il corpo di un metodo esistente mantenendone la firma
- **overload**: quando si ridefinisce la firma e il corpo di un metodo mantenendo lo stesso nome del metodo da ridefinire

Ricordiamo che la **firma** di un metodo comprende: nome, tipo e ordine dei parametri.
È importante sottolineare che il **tipo di ritorno e la dichiarazione di eventuali eccezioni non fanno parte della firma**.

La **covarianza e controvarianza** si applica ai **tipi di ritorno** dei metodi.
**covariare** significa "variare assieme a qualcosa"
**controvariare** significa "variare inversamente a qualcosa"


- Si parla di **covarianza** quando il tipo di ritorno diventa **più specifico** assieme alla classe che eredità il metodo, e quindi è un sottotipo, cioè **più specifica**
- Si parla di **controvarianza** quando il tipo di ritorno diventa **più generale**, contrariamente alla classe che eredità il metodo, e quindi è un sottotipo, cioè **più specifica**.

	In java la **covarianza sul tipo di ritorno è ammessa**, mentre la **controvarianza sul tipo di ritorno non è ammessa**
	
	```java
	public class Overload {
		public static class A {

			public A f() {
				return new A();
			}

			public Number g() {
				return 1.9;
			}
		}

		public static class B extends A {

			//il tipo di ritorno può covariare assieme a this
			
			//il tipo di ritorno non può controvariare rispetto a this.
			//Il compilatore se ne accorge e da un errore di compilazione
			@Override
			public B f() {		//valido
				return new B();
			}
			@Override
			public Integer g() {	//valido
				return 1;
			}
		}

		public static void main(String[] args) {
			
			A a = new B();	//tipo statico A, tipo dinamico B
			Number n = a.g();	//viene chiamato il metodo di B per il dynamic dispatch
			//il compilatore non da errore perche il tipo di ritorno a runtime è
			// un Integer che è sottotipo di Number, perche abbiamo applicato la covarianza
		}
	}
	```
	Se applicassimo la controvarianza dovremmo invertire `Integer` con `Number`, ma in quel caso nel main dovremmo mettere il risultato in un `Integer`, però a *runtime* ci verrebbe ritornato un `Number`.


## Wildcard

Le *Wildcard* rappresentano un tipo generico sconosciuto.
- è possibile utilizzarle nei parametri dei metodi, nei campi, variabili locali ma **non** nella intestazione di interfacce e classi

spesso è possibile utilizzare i generics e le wildcard per fare la stessa cosa, ad esempio vediamo definire la firma di un metodo "swap" con generics e wildcard:

```java
public static <E> void swap(List<E> list, int src, int des);
public static void swap(List<?> list, int src, int des);
```

seppur entrambi siano corretti e accettino un qualsiasi oggetto come tipo, il secondo sarebbe migliore in quanto al momento della chiamata non dobbiamo preoccuparci impostare il *type parameter*.

In generale vale che dato che se il tipo generico (in questo caso `E`) viene utilizzato solamente una volta nella firma del metodo allora è più comodo usare un *wildcard* 

Mentre i generics li posso limitare solo come **un sottotipo** di qualche oggetto. Le wildcard le posso limitare anche come **un supertipo** di qualche oggetto

```java
List<? extends Number> list1 = new ArrayList<>();  // upper bound
List<? super Integer> list2 = new ArrayList<>();	// lower bound
```
- nel primo caso accetto solo sottotipi di `Number` (oppure un oggetto `Number`).
	permette quindi la **covarianza**
- Nel secondo caso accesso solo supertipi di `Integer` (oppure un oggetto `Integer`)
	permette quindi la **controvarianza**

### Uso combinato con i generics

Un potente utilizzo delle wildcard è quello di utilizzarle insieme ai generics per rilassare o restringere i tipi in base ad un tipo generico.

```java
public static <T> void sort(List<T> list, Comparator<? super T> c) {}
```

### Tipo di ritorno
Quando si vuole ritornare un tipo generico bisognerebbe usare i generics rispetto alle wildcard: vediamo un esempio

```java
public static <E> List<? extends E> merge(List<? extends E> listOne, List<? extends E> listTwo) {
    //restituisce una lista che concatena le due liste in input
}
```

Con questa definizione **non** è possibile salvare la lista di ritorno in questo modo:

```java
List<Number> numbers1 = new ArrayList<>();
numbers1.add(5);
numbers1.add(10);

List<Number> numbers2 = new ArrayList<>();
numbers2.add(15);
numbers2.add(20.0);

//errore di compilazione
List<Number> numbersMerged = merge(numbers1, numbers2);
```

questo perché il tipo di ritorno è sconosciuto al compilatore (sa solo che è un sottotipo di E) anche se in realtà i tipi sono corretti.

Per sistemare questo problema basta usare il generic come tipo di ritorno

```java
public static <E> List<E> merge(List<? extends E> listOne, List<? extends E> listTwo) {
     //restituisce una lista che concatena le due in input
}
```


### Esempio

Vediamo un esempio in cui si nota la flessibilità delle *wildcard* rispetto ai *generics*

Vediamo un metodo `copy` che prende in input due liste e copia il contenuto della seconda nella prima

Vediamo prima l'implementazione con solo *generics*

```java
public class Collections {  
	public static <T> void copy(List<T> dest, List<T> src) {  
		for (int i = 0; i < src.size(); i++) {
			dest.set(i, src.get(i));  
		}  
	}
}
```

questa implementazione è fin troppo restrittiva: le due liste devono avere lo stesso identico tipo,  se volessimo copiare una lista di `Integer` in una lista di `Number` non compilerebbe.

Proviamo ad usare le wildcard senza imporre alcun limite

```java
public class Collections {  
	public static void copy(List<?> dest, List<?> src) {  
		for (int i = 0; i < src.size(); i++) {
			dest.set(i, src.get(i));  
		}  
	}
}
```

In questo caso c'è un errore di compilazione nella riga all'interno del `for`:

`src.get()` ritorna un riferimento ad un oggetto di tipo sconosciuto, questa cosa è lecita e viene espressa come il riferimento ad un oggetto di tipo `Object`
D'altra parte `dest.set()` richiede un oggetto di tipo sconosciuto e non `Object`. Il tipo sconosciuto può essere qualsiasi tipo (anche `Object`) ma questo a tempo di compilazione non è conosciuto.

Stiamo chiaramente utilizzando una firma di funzione troppo libera, proviamo a restringerla in po'

```java
public class Collections {  
	public static <T> void copy(List<? super T> dest, List<? extends T> src) {  
		for (int i = 0; i < src.size(); i++) {
			dest.set(i, src.get(i));  
		}  
	}
}
```

In questo modo voglio che gli elementi in input siano un sottotipo di `T` e tali elementi li posso inserire in una lista contenente anche tipi più generali di `T`.

```java
List<Object> output = new ArrayList<Object>();  
List<Long> input = new ArrayList<Long>();  
...  
Collections.copy(output, input);		//corretto
```
In questo caso `Object` è un supertipo di `Long`

```java
List<String> output = new ArrayList<String>();  
List<Long> input = new ArrayList<Long>();  
...  
Collections.copy(output, input);	// errore
```
In questo caso `String` non è un supertipo di `Long`


# Programmazione ad oggetti in C++

C++ è un linguaggio fortemente tipato capace di supportare
- programmazione funzionale
- programmazione ad oggetti
- programmazione generica

Utilizza una convenzione di stile di tipo *snake_case*

La definizione di nuovi tipi di dato può avvenire con due parole chiave: `struct` e `class`.

La differenza tra la due è la visibilità di default:
- `struct` la visibilità di default del suo contenuto è `public`
- `class` la visibilità di default del suo contenuto è `private`

Le uniche visibilità presenti in C++ sono le seguenti:

- **public**: visibile a chiunque
- **protected**: visibile solo all'interno della classe e ai propri figli
- **private**: visibile solo all'interno della classe

## Concetto di "dichiarazione" in C++

In C++ non esiste un vero e proprio concetto di dichiarazione di variabili come avviene in C:
- in C si può parlare di dichiarazione perché quello che accade è che una zona di memoria viene riservata e gli viene dato un nome
- in C++ ogni volta che si crea una variabile la si "costruisce" tramite il proprio costruttore di default (questo vale anche per i tipi primitivi), quindi oltre a riservare la zona di memoria tale zona viene anche inizializzata ad un valore di default

Scrivere la seguente cosa in C++

```c++
int a;
```

equivale a chiamare il costruttore di default sulla variabile:

```c++
int a();
```

In C++ si chiama **oggetto** una area di memoria dotata di un tipo.

Quindi nel caso precedente `a` è un **oggetto di tipo int**
è quindi possibile fare anche 

```c++
int var(10);		//viene chiamato il copy constructor di int
```

## Costruttori

I costruttori vanno realizzati con le **liste di inizializzazione** quando possibile:

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal() {		//senza lista di inizalizzazione
		weight = 10;
		speed = 0;
	}
	animal(): weight(10), speed(0) {}		//con lista di inizializzazione
}
```

Entrambi i costruttori fanno la stessa cosa, il secondo però fa utilizzo delle liste di inizializzazione.
L'utilizzo delle liste di inizializzazione è consigliato per due motivi principali:

- **Ottimizzazione**: senza le liste di inizializzazione quando viene chiamato il costruttore prima vengono create le variabile inizializzate con il loro valore di default (tramite il *default constructor*) e successivamente gli vengono assegnati i valori da noi decisi.
Utilizzando le liste di inizializzazione invece le variabili vengono dichiarate e inizializzate direttamente con i valori da noi decisi (utilizzando il *copy constructor* della variabile).

- **Inizializzazione di costanti**: se nel codice di prima al posto di  `int a`  fosse stato  `const int a`  in quel caso solo il costruttore con le liste funzionerebbe, in quanto una assegnazione successiva all'inizializzazione tramite il *default constructor* non sarebbe permessa a causa del `const`.

## Passaggio dei parametri, valore e reference

Vediamo 3 modi in cui si può passare un oggetto ad una funzione
- passaggio per copia: viene creato un nuovo oggetto creato tramite il **copy constructor**
	```cpp
	void f (my_obj) {}
	```
- passaggio del puntatore: viene passata la copia del puntatore dell'oggetto
	```cpp
	void f (my_obj*) {}
	```
- passaggio della reference: viene passata la reference, cioè un alias della variabile originale. In questo caso si sta usando direttamente l'oggetto originale, non una copia
	```cpp
	void f (my_obj&) {}
	```

## Costruttori di conversione e "explicit"

Un costruttore con un singolo parametro che non ha un valore di default  e che **non** viene dichiarato `explicit` è chiamato **costruttore di conversione**.

Un costruttore di conversione esegue una conversione implicita che converte un oggetto cha ha il tipo del primo parametro in un oggetto dal tipo della classe a cui il costruttore di conversione appartiene.

La keyword *explicit* associata ad un costruttore di conversione impedisce il comportamento appena descritto, forzando il chiamante ad usare i costruttori con i tipi corretti.

Vediamo il comportamento dei costruttori di conversione:
```cpp
class Y {
  private:
	  int a, b;
	  char* name;
  public:
	  Y(int i) {};	//converte int a oggetti di tipo Y
	  Y(const char* n, int j = 0) {};	//converte stringhe a oggetti di tipo Y
};

void add(Y) {};		//metodo che apparentemente prende solo oggetti di tipo Y

int main() {
  // equivalente a: Y obj1 = Y(2)
  Y obj1 = 2;

  // equivalente a: Y obj2 = Y("somestring",0)
  Y obj2 = "somestring";

  // equivalente a: add(Y(5))
  add(5);
}
```
È interessante la chiamata al metodo `add` che nonostante chieda un oggetto di tipo Y, passandogli un intero la chiamata avviene correttamente comunque in quanto il compilatore chiama implicitamente il costruttore di `Y` che prende un intero, creando così un oggetto di tipo `Y`

```cpp
struct A {
    A(int) { }      // converting constructor
    A(int, int) { } // converting constructor (C++11)
};
 
struct B {
    explicit B(int) { }
    explicit B(int, int) { }
};
 
int main() {
    A a1 = 1;      // OK: copy-initialization selects A::A(int)
    A a2(2);       // OK: direct-initialization selects A::A(int)
    A a3 {4, 5};   // OK: direct-list-initialization selects A::A(int, int)
    A a4 = {4, 5}; // OK: copy-list-initialization selects A::A(int, int)
    A a5 = (A)1;   // OK: explicit cast performs static_cast
 
//  B b1 = 1;      // error: copy-initialization does not consider B::B(int)
    B b2(2);       // OK: direct-initialization selects B::B(int)
    B b3 {4, 5};   // OK: direct-list-initialization selects B::B(int, int)
//  B b4 = {4, 5}; // error: copy-list-initialization does not consider B::B(int, int)
    B b5 = (B)1;   // OK: explicit cast performs static_cast
}
```

## Copy constructor

Il copy constructor è un costruttore che utilizza un altro oggetto gemello per inizializzare i propri valori con i suoi.

Si realizza nel seguente modo

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}		//constructor
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}	//copy constructor
}
```

Il `const` sta ad indicare che il parametro non viene modificato all'interno della funzione.
La reference è necessaria perché altrimenti si genererebbe una ricorsione infinita, se venisse passato per copia verrebbe chiamato il copy constructor, ma noi lo stiamo definendo in questo momento.

## This

`this` in questo caso è un pointer all'oggetto e quindi lo si usa sempre con `->` invece che con `.`

Come dimostrazione vediamo che la seguente assegnazione non genera errori:

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}		//constructor
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}	//copy constructor
	
	int get_weight() {
		animal* a = this;	//funziona
		return this->weight;
	}
}
```

## Const

Il `const` ha sia il significato che un costrutto non è modificabile sia che può interagire solo con costrutti a loro volta dichiarati `const`.

Una buona regola quando si dichiarano le funzioni è di partire sempre da metodi `const variabile&`, perché è l'approccio più restrittivo.
Nel caso si avesse bisogno di modificare la variabile allora si toglie il `const`.
Qual ora si volesse una copia e non la variabile originale si toglie la `&`.

il `const` si può anche mettere alla fine della firma di un metodo, per indicare che all'interno di quel metodo non si modificano i campi della classe.

Questo ci porta a definire **due tipi di getter** in C++, uno passato in sola lettura e uno anche in scrittura

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}		//constructor
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}	//copy constructor
	
	const int& get_weight() const {		//getter che restituisce il campo in sola lettura
		return weight;
	}
	
	int& get_weight() {					//getter che restituisce il campo anche in scrittura
		return weight;
	}
}
```

Il const alla fine della firma permette di separare le due firme e quindi di fare un **overload**

## Virtual
Se si vuole permettere alle sottoclassi di sovrascrivere (fare *override*) un metodo, allora esso va marcato come `virtual`

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}
	
	const int& get_weight() const {		//getter che restituisce il campo in sola lettura
		return weight;
	}
	
	int& get_weight() {					//getter che restituisce il campo anche in scrittura
		return weight;
	}
	
	virtual void eat(const animal& a) {	//metodo overridabile dai figli
		weight += a.weight;
	}
}
```

## Ereditarietà

La sintassi per ereditare da una classe è la seguente

```cpp
class dog : public animal {
	...
}
```

Il tag della visibilità ha il seguente significato:

- se **public** significa che chiunque può vedere che sono figlio di quella classe, per cui chiunque può sostituirmi al posto di mio padre
- se **protected** significa che solo i miei figli sono al corrente che sono figlio di quella classe e quindi solo loro possono sostituirmi al posto di mio padre
- se **private** significa che nessuno può sostituirmi al posto di mio padre

La classe figlio ha un puntatore al padre come campo privato, chiamato come la superclasse.

```cpp
class dog : public animal {
	private:
		bool has_pedigree;
	public:
		dog(int w, double sp, bool ped) : animal(w, sp), has_pedigree(ped) {}

		//in c++11 si può mettere "override" alla fine della firma per specificare che si tratta di override
		void eat(const animal& a) override {
			// weight += a.weight / 2;			//il weight di a non è accessibile perche è privato.
						//nota che si tratta di un attributo esterno e non è quello ereditato
			weight += a.get_weight() / 2;		//modifica diretta
			get_weight() += a.get_weight() / 2;	//modifica tramite il getter in scrittura
		}
};
```

Nota: diversamente da Java, se ricevi come parametro un oggetto dello stesso tipo della classe in cui stai lavorando non è comunque possibile accedere ai suoi campi privati, vanno usati i getter.

Se si vuole permettere ai propri figli di sovrascrivere un metodo già sovrascritto va specificato ancora il `virtual`

## Modi di istanziare un oggetto

Vediamo 3 modi per istanziare un oggetto
1. tramite la keyword `new`, che ritorna un puntatore al nuovo oggetto che è stato creato nell'heap
2. istanziamento direttamente nello stack
3. istanziamento tramite *reference* di un altro oggetto

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}
	
	const int& get_weight() const {
		return weight;
	}
	
	int& get_weight() {
		return weight;
	}
	
	virtual void eat(const animal& a) {
		weight += a.weight;
	}
}

class dog : public animal {
	private:
		bool has_pedigree;
	public:
		dog(int w, double sp, bool ped) : animal(w, sp), has_pedigree(ped) {}

		void eat(const animal& a) override {
			weight += a.get_weight() / 2;
		}
};

int main() {
	animal* a1 = new animal(10, 5.5);	//istanziamento nell'heap
	animal a2(1, 2.5);					//istanziamento nello stack

	animal a3(a2);						//copy constructor
	animal a4;							//default constructor

	dog fido(60, 45.2, false);
	
	animal a5(fido);
	a5.eat(a2); 	//no dynamic dispatch, viene chiamato il metodo di animal

	animal& a6 = fido;					//instanziamento tramite reference
	a6.eat(a2); 	//si dynamic dispatch, viene chiamato il metodo di dog

	animal* a7 = &fido;
	a7->eat(a2); 	//si dynamic dispatch, viene chiamato il metodo di dog
}
```

Nota che il dynamic dispatch si ha solo con puntatori e reference, questo perche con l'istanziazione di `a5` vengono copiati i valori dei campi ma il suo tipo rimane sempre un animal, anche a *runtime*.

Mentre con reference e puntatori il tipo dinamico a runtime cambia da quello statico e il dynamic dispatch funziona

## Template

approfondimento: [template (corso PEL)](https://gabritorre.github.io/uni/year1/prog_lab/web_notes/Templates.html)

I template sono la trasposizione dei tipi generici visti in Java.
Si possono applicare a classi, metodi, funzioni globali e typedef.

Una particolarità dei template è che posticipano la compilazione del codice che usa i template fino a quando non verrà utilizzato tale codice passandogli il tipo reale.

Ad esempio se definiamo una funzione che fa uso di template, tale funzione non verrà compilata fino a che non viene invocata da qualcuno che gli passerà il tipo da sostituire al tipo generico, a quel punto viene compilata con il tipo corretto.

## Override degli operatori

In C++ tutti gli operatori: `+ - * / < <= > >= != () =` ecc... eseguiti su oggetti non *built-in*, sono in realtà delle **chiamate a funzioni** e come tali si possono overridare.

Vediamo un esempio:

```cpp
template <class T>
class matrix {
	private:
		size_t cols;
		vector<T> v;
	public:
		matrix() : v() {}
		matrix(const matrix<T>& m) : v(m.v) {}

		matrix<T>& operator=(const matrix<T>& m) {
			cols = m.cols;
			v = m.v;
			return *this;
		}
}; 


void main() {
	matrix<int> m(20, 30);
	matrix<int> m2(40, 50);
	
	m = m2; 	// equivalente a: m.operator=(m2);
	m = m2 = m; // equivalente a: m.operator=(m2.operator=(m));
}
```

Per sovrascrivere un operatore bisogna ridefinire la funzione chiamata "operator" concatenato al simbolo dell'operatore, nel caso precedente `operator=`

Quando facciamo `m = m2` implicitamente stiamo invocando `m.operator=(m2)`, cioè una chiamata a funzione che prende in input il membro di destra dell'operatore di assegnamento.

Nota che il tipo di ritorno è arbitrario, si potrebbe anche lasciare `void`, però restituire una reference dell'oggetto stesso ci permette di innestare le chiamate alla funzione, cioè rende possibile fare:

```c++
m = m2 = m; //equivalente a:	m.operator=(m2.operator=(m));
```
funziona in quanto `m2.operator=(m)` ritorna un oggetto che viene usato a sua volta nella successiva chiamata alla funzione.

## Conversion operator

Se abbiamo una classe templetizzata, possiamo convertirci in base ad una struttura simile alla nostra tramite un costruttore particolare, oppure possiamo restituire una nostra versione convertita tramite un *conversion operator*

Prendiamo l'esempio della matrice poco sopra, possiamo creare una sorta di *copy constructor* che al posto di prendere esattamente una classe dello stesso nostro tipo ne prende una con  un parametro diverso:

```cpp
template <class T>
class matrix {
	private:
		size_t cols;
		vector<T> v;
	public:
		matrix() : v() {}
		matrix(const matrix<T>& m) : v(m.v) {}

		matrix<T>& operator=(const matrix<T>& m) {
			cols = m.cols;
			v = m.v;
			return *this;
		}

		size_t get_cols() const {return cols;}
		size_t get_rows() const {v.size() / cols;}
	
		//la funzione seguente è un costruttore che costuisce la matrice di classe che ha tipo T partendo dalla matrice passata per input che ha tipo S
		// il corpo del metodo assume che il tipo T abbia un costruttore che converta partendo da un S.
		//Questo è possibile e non da errori in quanto non viene compilato
		//fino a che non viene chiamato questo costruttore,
		//sarà compito del chiamante assicurarsi che i tipi siano convertibili tra loro
		template<class S>
		matrix(const matrix<S>& m): cols(m.get_cols()), v(m.get_rows() * m.get_cols()) {
			for(int i =  0; i <  v.size(); i++) {
				v[i] =  T(m.v[i]); //chiamo il costruttore del tipo T, passandogli un S
			}
		}
}; 
```

Inoltre posso fare una funzione chiamata *conversion operator*, cioè una sorta di cast della nostra classe in qualche altro tipo.
Questo metodo non deve avere un tipo di ritorno e dopo la parola "operator" si mette il tipo in cui convertire

```cpp
template <class T>
class matrix {
	private:
		size_t cols;
		vector<T> v;
	public:
		matrix() : v() {}
		matrix(const matrix<T>& m) : v(m.v) {}

		matrix<T>& operator=(const matrix<T>& m) {
			cols = m.cols;
			v = m.v;
			return *this;
		}

		size_t get_cols() const {return cols;}
		size_t get_rows() const {v.size() / cols;}
		
		//restituisce una versione della nostra classe convertita in un altro tipo (un vector<T> in questo caso)
		operator const vector<T>() const {
			return v;	//dato che la matrice viene implementata usando un vettore posso ritornarlo direttamente
		}
}; 
```

## Iteratori

Gli iteratori in C++ sono dei particolari tipi di dato che sono definiti all'interno del tipo di dato più esterno.
Gli iteratori si utilizzano proprio come se fossero dei puntatori. 
vediamo un esempio con la classe vector

```c++
void f(vector<int> v) {
	for (typename vector<int>::iterator it = v.begin(); it != v.end(); it++) {
		cout<<*it<<endl;
	}
}
```

- `typename vector<int>::iterator` rappresenta un tipo di dato
	- `typename` è una keyword necessaria (fino a c++20) per dire al compilatore che la parte successiva è un tipo di dato
	- `vector<int>::iterator` la sintassi con i `::` viene utilizzata per accedere a dei tipi definiti all'interno di una classe, in questo caso il tipo `iterator` è definito dentro la classe `vector`
- Il vector avrà poi dei metodi per utilizzare l'iteratore, in particolare:
	- `begin()` restituisce il primo elemento
	- `end()` restituisce l'elemento successivo all'ultimo


