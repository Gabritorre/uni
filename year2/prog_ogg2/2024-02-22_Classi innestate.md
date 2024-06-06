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
