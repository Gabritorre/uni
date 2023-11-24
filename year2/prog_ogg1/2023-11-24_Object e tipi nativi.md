# Object e tipi nativi

## Object

La classe `Object` è la radice dell'albero delle gerarchie, tutte le classi che si fanno in java sono figlie della classe Object.

Quando dichiariamo una classe nel seguente modo

```java
public class MiaClasse {
	...
}
```

implicitamente quello che succede è:

```java
public class MiaClasse extends Object{
	...
}
```

Il ruolo della classe `Object` è quello di fornire una implementazione base di ogni classe.
Tra le funzioni offerte dalla classe `Object` ce ne sono alcune deprecate e altre riguardanti la programmazione concorrente che non vedremo, ma ci sono dei metodi che vale la pena vedere:

- `boolean equals(Object obj)`
- `Object clone()`
- `int hashCode()`
- `String toString()`


### Equals

`boolean equals(Object obj)`

Questo metodo serve per indicare se l'oggetto passato per parametro è uguale all'oggetto su cui è stato chiamato il metodo.
con "uguale" si intende che i due riferimenti puntano allo stesso oggetto in memoria.
È l'equivalente di fare `oggetto1 == oggetto2`
Solitamente è consigliato fare un *override* di questo metodo sulla propria classe per fare l'uguaglianza a piacimento.

Quindi nel caso noi **non facciamo *override*** si avrà il seguente codice
```java
Car car1 = new Car(0, fuelType, 100);
Car car2 = new Car(0, fuelType, 100);
car1.equals(car2) //false
car1==car2 //false
car1.equals(car1) //true
```

Se invece facciamo un *override* e andiamo a verificare che il parametro di `equals` sia dello stesso tipo ricevente e che tutti i campi siano equivalenti, si avrà il seguente codice
```java
Car car1 = new Car(0, fuelType, 100);
Car car2 = new Car(0, fuelType, 100);
car1.equals(car2) //true
car1==car2 //false
car1.equals(car1) //true
```


