# Subtyping

Java è un linguaggio fortemente tipizzato, ciò significa che ogni cosa in memoria deve possedere un tipo: variabili, parametri, campi, tipi di ritorno,...

Il tipi vengono saputi in fase di compilazione e durante l'esecuzione il tipo di una zona di memoria no può cambiare.
In fase di compilazione oltre a controllare i tipi dichiarati vengono anche controllati i tipi di dato dedotti, ad esempio fare `2 + "ciao"`, il compilatore si accorge dell'errore

## Sostituzione con la sottoclasse

Una istanza di una superclasse può essere sostituita da una istanza di una sua sottoclasse, questo perché una sottoclasse sarà sempre una versione più grande della superclasse (ha tutto quello che ha la superclasse e in più ha altro).
Si dice che la classe che estende una superclasse è un un **subtype** (sottotipo) della superclasse

Consideriamo il seguente esempio:

```java
class Vehicle {…}
class Car extends Vehicle {…}
class Truck extends Car {…}
class Bicycle extends Vehicle {…}

int race(Vehicle v1, Vehicle v2, double length) {…}

Car c1 = new Car();
c2 = new Car();
Truck t = new Truck();
Bicycle b = new Bicycle();

race(c1, c2, 100);
race(c1, t, 100);
race(t, b, 100);
race(c1, b, 100);
```
Abbiamo una superclasse `Vehicle` le cui classi estese sono `Car` e `Bycycle`, poi abbiamo `Truck` che estende `Car` quindi è comunque imparentata con `Vehicle`.

Nonostante il metodo `race` accetti come parametri dei tipi `Vehicle` posso comunque chiamare il metodo passando come parametri dei sottotipi di `Vehicle` senza problemi.

Ovviamente è necessario che all'interno dell'implementazione del metodo `race` si utilizzino campi e metodi della classe `Vehicle` in modo che sicuramente tutte le sottoclassi abbiano l'implementazione di quei metodi.

## Polimorfimo

Il concetto di polimorfismo significa definire lo stesso simbolo, ad esempio un metodo, che si comporta in maniera diversa in base all'oggetto su cui è chiamato.

Ma possiamo anche immaginarlo come la stessa classe che si può comportare in maniera diversa, come il caso del metodo `race` che come parametro prende la classe `Vehicle` la quale però può variare il proprio comportamento in base a quale sottoclasse gli viene passata (sia una bicicletta che una automobile possono accelerare ma lo fanno in maniera diversa).

Il polimorfismo è realizzato attraverso l'ereditarietà e il subtyping.

## tipi dinamici

In Java abbiamo dei tipi statici e dinamici:

- i tipi statici vengono determinati in tempo di compilazione
- i tipi dinamici vengono determinati in *runtime*

Stiamo utilizzando i tipi dinamici quando ad un oggetto che ha il tipo di una superclasse istanziamo una sua sottoclasse, ad esempio

```java
Vehicle v = new Car();
```

`Vehicle` è il tipo statico mentre `Car` è il tipo dinamico, questo perché noi inizialmente adiamo a dichiarare il tipo della variabile `v` che è `Vehicle` il quale è statico (in fase di compilazione si sa quale tipo deve avere `v`) per quanto riguarda il tipo dinamico il compilatore  potrebbe non riuscire a determinare quale sarà il sottotipo assegnato alla variabile, che sarà quindi determinato in fase di esecuzione.
Un esempio che mostra questa differenza più chiaramente è il seguente

```java
Vehicle v = null;
if (Math.random() > 0.5) {	//in fase di compilazione non sappiamo in quale ramo andare
	v = new Car();
}
else {
	v = new Bicycle();
}
//sia Car che Bicycle sono sottotipi della classe Vehicle quindi il codice compila.
```

**Il tipo dinamico deve essere una sottoclasse del tipo statico** altrimenti il codice non compila


### Type casting

È possibile anche castare un oggetto in un suo sottotipo:

```java
Vehicle v = new Car();
Car a = (Car) v;
```

è possibile fare il casting solo verso un tipo che è sottoclasse dell'oggetto da castare, nell'esempio `Car` è sottoclasse di `Vehicle` e quindi il casting è permesso.


### instanceof

Per determinare il tipo dinamico di un oggetto si usa la keyword `instanceof`

`<oggetto> instanceof <TipoDesiderato>`

che restituisce `true` oppure `false`

Torna molto utile di utilizzare `instanceof` prima di fare il casting del tipo, per essere sicuri che il casting non dia errore in *runtime*

```java
Vehicle v = new Car();
if (v instanceof Car){
	Car a = (Car) v;
}
```

