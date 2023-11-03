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
