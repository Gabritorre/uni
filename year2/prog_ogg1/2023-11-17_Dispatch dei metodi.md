# Dispatch delle chiamate dei metodi

Vediamo come Java gestisce le chiamate dei metodi quando abbiamo delle sottoclassi e quando si presentano casi di override e overload

Ricordiamo che il modo per chiamare un metodo di un oggetto è:

`<ricevitore>.<nome del metodo>(<parametri>)`

Quando facciamo *override* dei metodi stiamo andando a ridefinire una funzione esistente nascondendo la versione che aveva il padre (all'interno della funzione sovrascritta è comunque possibile usare `super` per eseguire il codice del metodo padre così da non duplicare codice).
Quando andiamo a chiamare un metodo di una classe viene chiamata la **versione del metodo più specifica**, la versione più specifica è quella del **tipo dinamico**. Se nel tipo dinamico non è stato fatto l'override del metodo allora si cercherà nelle superclassi una dopo l'altra (risalendo quindi l'albero della gerarchia) fino al raggiungimento della definizione del metodo.

```java
int race(Vehicle v1, Vehicle v2, double a) {
	v1.accelerate();
	v2.accelerate();
}
```
In questo caso sappiamo che il tipo statico è `Vehicle` ma il tipo dinamico è deciso in *runtime* quindi non sappiamo quale metodo `accelerate` verrà chiamato.

Se chiamassimo il metodo come segue:

```java
race(new Car(), new Truck(), 100);
```

in questo caso allora

```java
int race(Vehicle v1, Vehicle v2, double a) {
	v1.accelerate();	//metodo della classe Car
	v2.accelerate();	//metodo della classe Truck
}
```

Se per esempio la classe `Truck` non ha ridefinito il metodo `accelerate()` verrà usato quello della sua superclasse.

Quando invece abbiamo un *overload* dei metodi e quindi più metodi con lo stesso nome ma parametri diversi, i linguaggi possono implementare due tipi di risoluzione: dispatch statico e dinamico.

### il dispatch statico

viene chiamata la versione più vicina a quelli che sono i tipi statici, ad esempio immaginiamo di avere i seguenti metodi:
```java
int race(Vehicle v1, Vehicle v2) {} // metodo 1
int race(Car v1, Car v2) {} // metodo 2
int race(Car v1, Vehicle v2) {} // metodo 3
```

Vediamo le chiamate quale metodo usano in base ai tipi dei parametri:

```java
Vehicle a = new Car();
Vehicle b = new Car();
race(a, b); // viene chiamato il metodo 1, in quanto a e b hanno tipo statico Vehicle
Car c = new Car();
Car d = new Car();
race(c, d); // viene chiamato il metodo 2, in quanto c e d hanno tipo statico Car
```

Con il dispatch statico abbiamo un **basso overhead** ma viene **ridotto il concetto di polimorfismo**

### il dispatch dinamico

viene chiamata la versione più vicina a quelli che sono i tipi dinamici, ad esempio sempre con i soliti metodi:
```java
int race(Vehicle v1, Vehicle v2) {} // metodo 1
int race(Car v1, Car v2) {} // metodo 2
int race(Car v1, Vehicle v2) {} // metodo 3
```

Vediamo le chiamate quale metodo usano in base ai tipi dei parametri:

```java
race(new Car(), new Car()); // viene chiamato il metodo 2
race(new Bicycle(), new Bicycle()); // viene chiamato il metodo 1
race(new Car(), new Bicyble()); // viene chiamato il metodo 3
race(new Bicyble(), new Car()); // viene chiamato il metodo 1
```

In questo caso abbiamo un **grande overhead** e oltretutto potrebbero esserci dei casi in cui dei metodi la **chiamata del metodo può essere ambigua**:

immaginiamo di avere i seguenti metodi

```java
int race(Car v1, Vehicle v2) {}
int race(Vehicle v1, Truck v2) {}
```

Se volessimo fare la seguente chiamata

```java
race(new Car(), new Truck());
```

Quale dovrebbe essere il metodo chiamato?
Il compilatore dovrebbe riuscire a scegliere il metodo migliore in base a quale firma del metodo ha la "distanza" minore dei tipi tra parametro della chiamata e quello delle firma. In questo caso però abbiamo una uguale distanza, quindi nessuno dei due è definibile come "migliore". Ad esempio se avessimo aggiunto un altro metodo
```java
int race(Vehicle v1, Vehicle v2) {} // nuovo
int race(Car v1, Vehicle v2) {}
int race(Vehicle v1, Truck v2) {}
```

Il nuovo metodo verrebbe visto come il peggiore fra i 3 perché è più generico rispetto agli altri.

## Funzionamento di Java

In Java possiamo dire di avere un **dispatch dinamico sul ricevitore** su cui è chiamata la funzione mentre abbiamo un **dispatch statico sui parametri** delle funzioni.

Quindi in casi di *override* java usa un dispatch dinamico per decidere in quale classe andare a trovare il metodo.
Mentre quando abbiamo più metodi con l'*overload* utilizza un dispatch statico


## Invocazione di metodi statici

Vediamo cosa accade con l'invocazione di metodi statici, dove **non dovremmo avere un ricevitore** su cui chiamare il metodo ma abbiamo la classe stessa.

È buona pratica chiamare i metodi statici sulla classe e non sull'istanza di un oggetto, Java però ti permette comunque di farlo, ottenendo un *warning*

Nel caso si ignorasse il warning e si procedesse a chiamare il metodo sull'istanza verrebbe utilizzato un dispatching statico sul ricevitore, diversamente quindi dai metodi non statici

```java
public class Racing {
	public static void foo() {
		System.out.println("Racing 1");
		}
	}
public class Racing2 extends Racing {
	public static void foo() {
		System.out.println("Racing 2");
	}
}

// chiamate corrette
Racing2.foo();//Racing 2
Racing.foo(); //Racing 1

// chiamate con warning
Racing racing = new Racing();
racing.foo(); //Racing 1
Racing2 racing2 = new Racing2();
racing2.foo(); //Racing 2

// in qusto caso notiamo il dispatching statico sul ricevitore:
// ci aspetteremo che venga stampato Racing 2 dato che è il tipo dinamico corrente, ma in questo caso java utilizza il dispatching statico
Racing racing3 = racing2;
racing3.foo(); //Racing 1
```

