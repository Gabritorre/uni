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
