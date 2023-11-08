# Ereditarietà

L'ereditarietà è una tecnica che permette di creare delle gerarchie tra le classi, portando il vantaggio di avere un codice più organizzato e meno ripetuto.

Abbiamo quindi una classe figlio e una classe padre (o **superclasse**). La classe figlio **eredita** dal padre i **metodi e i campi**. La classe figlio può estendere (aggiungendo altri metodi) oppure specializzare (sovrascrivendo i metodi del padre) il comportamento del padre.

## Esempio

Un padre può avere più classi figlie. Possiamo rappresentare la gerarchia graficamente come:

![enter image description here](https://i.ibb.co/7G8cLfX/ereditariet.png)

le classe figlie idealmente diventano più grandi e complesse perché avranno man mano più codice, comprendendo il codice dei padri e il suo stesso codice aggiuntivo.

mentre un figlio può avere un **singolo padre**

in codice possiamo esprimere questa ereditarietà tramite la *keyword* `extends`


```java
public class Automobile extends Veicoli4ruote {
	...
}
```

## Visibilità

I figli possono vedere campi e metodi del padre solo se:

- i metodi/campi del padre sono pubblici o protected
- i metodi/campi del padre sono default e il figlio è nello stesso package

Se un metodo/campo è protected la classe di un altro package può accedere quei membri solo se diventa una sottoclasse

nel caso i **metodi/campi** siano **privati** allora il **figlio non può vederli**


## super

la *keyword* `super` serve per riferirsi a metodi oppure campi della superclasse.

Abbiamo due utilizzi principali di `super`

1. chiamare il costruttore del padre all'interno del costruttore del figlio.

	è molto probabile che quando si chiama il costruttore di una classe figlia si voglia inizializzare anche i campi derivati dal padre tramite il suo costruttore, è possibile fare ciò chiamando `super()` come prima istruzione del costruttore figlio

	```java
	public class Parent {
	    public Parent() {
	        // Operazioni di inizializzazione della classe genitore
	    }
	}

	public class Child extends Parent {
	    public Child() {
	        super(); // Chiamata al costruttore della classe genitore
	        // Altre operazioni specifiche della classe figlia
	    }
	}
	```

2. Accedere ai membri della classe padre

	è possibile riferirsi ai metodi e ai campi della superclasse tramite `super.<nome_metodo>()` oppure `super.<nome_campo>`

	```java
	public class Parent {
	    public void print() {
	        System.out.println("Metodo della classe genitore");
	    }
	}

	public class Child extends Parent {
	    public void print() {
	        super.print(); // Chiamata al metodo della classe genitore
	        System.out.println("Metodo della classe figlia");
	    }
	}

	```


## Abstract

`abstract` è una keyword che si applica ai metodi e alle classi.

### metodi abstract

Quando un metodo è abstract si sta dicendo che quel metodo è presente nella classe ma non è implementato (c'è solo la firma), sarà compito di chi eredita la classe di implementarlo.
Un metodo astratto può essere presente solo in una classe che è anch'essa astratta.

### classe abstract
Una classe astratta è una classe che ha solo parte dei suoi metodi implementati.
Una classe astratta non può essere istanziata, può essere solo ereditata

Una classe che eredita una classe astratta deve implementare tutti i metodi `abstract` per essere istanziata, altrimenti deve essere astratta anche lei.

## Override e overload

prima di spiegare i concetti di overriding e overloading bisogna chiarire i concetti di **firma e definizione** di un metodo

con **firma** si intende tutto quello che è disponibile in fase di chiamata del metodo:
- nome del metodo
- l'oggetto su cui è chiamato
- la lista di parametri

mentre con **definizione** si intende tutto quello che è disponibile quando si crea il metodo:
- comprende tutto quello che ha la firma
- tipo di ritorno
- la visibilità
- altri modificatori (static, abstract, final...)

### override e overload

**override e overload** sono due modi diversi di ridefinire il comportamento di un metodo già esistente.

- nel caso di override la firma del metodo rimane la stessa, cambia solo il corpo del metodo
- nel caso di overload cambia anche la firma (il nome del metodo deve rimanere lo stesso, può cambiare il ritorno e i parametri)

```java
class BaseClass {
    void printMessage(String message) {
        System.out.println("Messaggio: " + message);
    }
}

class OverrideClass extends BaseClass {
    @Override
    void printMessage(String message) {
        System.out.println("Messaggio sovrascritto: " + message);
    }
}

class OverloadClass extends BaseClass {
    void printMessage(String message, String prefix) {
        System.out.println(prefix + ": " + message);
    }
}

```

nota che `@Override` è una indicazione per il compilatore in cui si vuole esplicitare che si sta facendo override di un metodo. Nel caso per un typo si sbagliasse a scrivere il nome del metodo il compilatore si accorgerebbe che non stai facendo l'override di un metodo

### Visibilità in caso di override

quando si vuole fare override di un metodo si può usare una visibilità **uguale o meno restrittiva** ad esempio:
- Se si vuole sovrascrivere un metodo pubblico siamo obbligati a tenerlo pubblico.
- Se il vuole sovrascrivere un metodo con visibilità default possiamo tenerlo a default oppure cambiarlo a protected oppure public, ma **non private**

