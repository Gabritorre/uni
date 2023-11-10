# Subtyping

Java è un linguaggio fortemente tipizzato, ciò significa che ogni cosa in memoria deve possedere un tipo: variabili, parametri, campi, tipi di ritorno,...

Il tipi vengono saputi in fase di compilazione e durante l'esecuzione il tipo di una zona di memoria no può cambiare.
In fase di compilazione oltre a controllare i tipi dichiarati vengono anche controllati i tipi di dato dedotti, ad esempio fare `2 + "ciao"`, in fase di compilazione il compilatore si accorge dell'errore


## Sostituzione con la sottoclasse

Una istanza di una superclasse può essere sostituita da una istanza di una sua sottoclasse, questo perché una sottoclasse sarà sempre una versione più grande della superclasse.
Si dice che la sottoclasse che estende una superclasse è un un **subtype** (sottotipo) della superclasse

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

Nonostante il metodo `race` accetti come parametri dei tipi `Vehicle` posso comunque chiamare il metodo con le sue sottoclassi senza problemi.

Ovviamente bisogna che all'interno dell'implementazione del metodo race ci siano campi e metodi della classe `Vehicle` in modo che sicuramente tutte le sottoclassi abbiano l'implementazione di quei metodi.


## Polimorfimo

Il concetto di polimorfismo significa usare lo stesso simbolo, ad esempio un metodo, che si comporta in maniera diversa in base all'oggetto su cui è chiamato.

Ma possiamo anche immaginarlo come la stessa classe che si può comportare in maniera diversa, come il caso del metodo `race` che come parametro prende la classe `Vehicle` la quale però può variare il proprio comportamento in base a quale sottoclasse gli viene passata.

Il polimorfismo è realizzato attraverso l'ereditarietà e il subtyping
