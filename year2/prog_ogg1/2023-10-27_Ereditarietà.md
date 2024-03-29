﻿# Ereditarietà

L'ereditarietà è una tecnica che permette di creare delle gerarchie tra le classi, portando il vantaggio di avere un codice più organizzato e meno ripetuto.

Abbiamo quindi una classe figlio e una classe padre (o **superclasse**). La classe figlio **eredita** dal padre i **metodi e i campi** (che non sono privati). La classe figlio può estendere (aggiungendo altri metodi) oppure specializzare (sovrascrivendo i metodi del padre) il comportamento del padre.

## Esempio

Un padre può avere più classi figlie. Possiamo rappresentare la gerarchia graficamente come:

![enter image description here](https://i.ibb.co/7G8cLfX/ereditariet.png)

Le classe figlie idealmente diventano più grandi e complesse perché avranno man mano più codice, comprendendo il codice dei padri e il suo stesso codice aggiuntivo.

Mentre un figlio può avere un **singolo padre**

In codice possiamo esprimere questa ereditarietà tramite la *keyword* `extends`

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

Nel caso i **metodi/campi** siano **privati** allora il **figlio non può vederli**

## super

la *keyword* `super` serve per riferirsi a metodi oppure campi della superclasse.

Abbiamo due utilizzi principali di `super`

1. chiamare il costruttore del padre all'interno del costruttore del figlio.

	È molto probabile che quando si chiama il costruttore di una classe figlia si voglia inizializzare anche i campi derivati dal padre tramite il suo costruttore, è possibile fare ciò chiamando `super()` all'interno del costruttore figlio

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

	È possibile riferirsi ai metodi e ai campi della superclasse tramite `super.<nome_metodo>()` oppure `super.<nome_campo>`

	```java
	public class Parent {
		int a;
	    public void print() {
	        System.out.println("Metodo della classe genitore");
	    }
	}

	public class Child extends Parent {
	    public void print() {
	        super.print(); // Chiamata al metodo della classe genitore
	        System.out.println("Metodo della classe figlia");
	        super.a = 10;	//riferiemnto al campo del padre
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

## Firma e definizione dei metodi

Prima di spiegare i concetti di overriding e overloading bisogna chiarire i concetti di **firma e definizione** di un metodo

Con **firma** si intende tutto quello che è disponibile in fase di chiamata del metodo:
- Nome del metodo
- L'oggetto su cui è chiamato
- il tipo, il numero e l'ordine dei parametri

Mentre con **definizione** si intende tutto quello che è disponibile quando si crea il metodo:
- Comprende tutto quello che ha la firma
- Tipo di ritorno
- Eccezioni che può lanciare
- La visibilità
- Altri modificatori (static, abstract, final...)

## override e overload

**override e overload** sono due modi diversi di ridefinire il comportamento di un metodo già esistente.

- nel caso di override la firma del metodo rimane la stessa, cambia solo il corpo del metodo
- nel caso di overload cambia anche la firma (il nome del metodo deve rimanere lo stesso, cambiano l'ordine o il numero o il tipo dei parametri)

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

Nota che `@Override` è una indicazione  per il compilatore (chiamata annotazione in Java, che vedremo più avanti) in cui si vuole esplicitare che si sta facendo override di un metodo.
L'utilità sta nel fatto che se a causa di un typo si sbagliasse a scrivere il nome del metodo il compilatore si accorgerebbe che non stai facendo l'override di un metodo ma stai definendo un nuovo metodo e ti verrebbe segnalato.

### Visibilità in caso di override

Quando si vuole fare override di un metodo si deve usare una visibilità **uguale o meno restrittiva** ad esempio:
- Se si vuole sovrascrivere un metodo pubblico siamo obbligati a tenerlo pubblico.
- Se il vuole sovrascrivere un metodo con visibilità default possiamo tenerlo a default oppure cambiarlo a protected oppure public, ma **non private**

## Final

Il modificatore `final` associato ad un **metodo** impedisce a quel metodo di essere sovrascritto dalle classi figlie.

Anche i **campi** possono essere **final**, e in questo caso sta a significare che non è possibile cambiare i loro valore dopo essere stati inizializzati (possono essere inizializzati o direttamente quando vengono dichiarati all'interno della classe oppure dal costruttore)

Costruttori e metodi astratti **non possono essere final**

Una **classe final** sta a significare che nessuna classe può estendere quella classe. Riprendendo la rappresentazione grafica di prima:
![enter image description here](https://i.ibb.co/7G8cLfX/ereditariet.png)

una classe final rappresenta una foglia dell'albero.
Se si vuole impedire che modificare tutti i metodi della classe di solito non è una buona pratica mettere la classe come final in quanto è meglio mettere tutti i metodi della classe come final cosicché un'altra classe possa comunque aggiungere i suoi metodi.

## Combinazioni dei modificatori

Vediamo come si possono associare i vari modificatori:

|          | Classe | Campo | Metodo | Static | Final | Abstract |
| -------- |:-----:|:-----:|:------:|:------:|:-----:|:--------:|
| public |  ✅   |  ✅   |   ✅   |        |       |          |
| protected   |  ❌   |  ✅   |   ✅   |        |       |          |
| default   |  ✅   |  ✅   |   ✅   |        |       |          |
| private |  ❌   |  ✅   |   ✅   |        |       |          |
| Static   |  ❌   |  ✅   |   ✅   |        |       |          |
| Final    |  ✅   |  ✅   |   ✅   |   ❗   |       |          |
| Abstract |  ✅   |  ❌   |   ✅   |   ❌   |  ❌   |          |

nelle spiegazioni ci saranno dei riferimenti alle classi "esterne" che vedremo nel modulo 2. Per il momento possiamo ignorare e pensare alle classi in generale.

- **classe protected**: mettere una classe "esterna" come protected non avrebbe molto senso in quanto se tutti possono ereditarla tanto vale metterla pubblica, mentre se nessuno può ereditarla al di fuori del package tanto vale mettere la visibilità di default. Con protected non possiamo decidere a chi è permesso utilizzare la nostra classe.
- **classe privata**: con una classe "esterna" privata non sarebbe possibile fare nessuna operazione, la classe sarebbe accessibile solo da se stessa.
- **Classe statica**: una classe "esterna" non può essere statica.
- **Campo abstract**: Il tipo di dato del campo già definisce il suo comportamento, di conseguenza non avrebbe senso utilizzare abstract.
- **metodo statico e abstract**: un metodo statico è legato alla classe e non viene ereditato, ciò va in contro senso con abstract che richiede l'ereditarietà per implementare il metodo
- **Metodo final e abstract**: un metodo final non si può sovrascrivere mentre abstract richiede che sia implementato da una sottoclasse tramite override, controsenso.
- **Metodo static e final**: compila con un warning: in questo caso mettere sia static che final è una ripetizione: final dice che non può essere sovrascritto e static impedisce che sia ereditato, quindi basta solo uno dei due.
