# Introduzione

In questo corso approfondiremo il concetto di programmazione ad oggetti, cioè uno stile di programmazione differente da un linguaggio solo procedurale quale può essere C.

Verrà usato il linguaggio **Java**, un linguaggio derivato da C ma orientato alla programmazione ad oggetti.

È un linguaggio **compilato ed interpretato**: Il codice sorgente java viene compilato in **bytecode**, cioè un file contenente un simil-linguaggio macchina che termina con l'estensione .class, il quale viene interpretato da una macchina virtuale chiamata *Java Virtual Machine* (JVM). questo rende un programma scritto in java compatibile con più sistemi in quanto è l'installazione della JVM che cambia in base al sistema su cui viene eseguito il codice, allo stesso tempo, però, non risulta essere tanto efficiente quanto lo è C.

Java non utilizza esplicitamente i puntatori e adotta un sistema chiamato **garbage collection** che si occupa in automatico di deallocare la memoria non più utilizzata.

## La programmazione ad oggetti

La programmazione ad oggetti permette di creare del codice più gerarchico, flessibile, più facilmente mantenibile ed espandibile, inoltre riduce molto codice duplicato.
Per grandi progetti è ideale adottare questo tipo di programmazione, ovviamente per piccoli progetti a sé stanti, programmare ad oggetti può generare del codice inutilmente prolisso.

# Classi

Posiamo definire una **classe** come un modello astratto che definisce le caratteristiche e le funzionalità che possiede un **oggetto**

un **oggetto** è un'istanza della classe, quindi una sorta di "variabile" che rispetta le caratteristiche definite dalla classe.

- Le caratteristiche definite nella classe prendono il nome di **campi** (o attributi) e sono effettivamente delle variabili (contenute però all'interno della memoria **heap**) di vario tipo che possiedono un significato specifico per quella classe. I tipi che può assumere un campo sono sia tipi primitivi oppure possono essere altre classi.
I campi possono essere **final**, che sta ad indicare che non è possibile cambiare i loro valore dopo che sono stati inizializzati (direttamente quando vengono dichiarati oppure dal costruttore)
- Le funzionalità sono delle **funzioni o metodi** quindi pezzi di codice che lavorano sui campi

Un classico esempio è la classe `Automobile` che possiede delle caratteristiche come: marca, colore, targa, peso, capacità della benzina. E possiede delle funzionalità come accelerare frenare, fare rifornimento.
La classe quindi definisce come deve essere fatto l'oggetto automobile.
Gli oggetti effettivi istanziati saranno delle automobili con le proprie caratteristiche che rispettano quelle della classe.

Per esempio definiamo la classe `Car` come segue in un apposito **file** che deve per forza essere nominato con **lo stesso nome della classe**(Car.java), questo va fatto quando la classe ha visibilità `public`:

```java
public class Car {
	// Campi
	double speed;
	double fuel;
	string color;
	// Metodi
	void refuel(double amount) {
		fuel += amount;
	}
	void accelerate(double a) {
		speed += a;
		fuel -= a*FUEL_CONS;
	}
	void fullBreak() {
	speed = 0.0;
	}
}
```

## new

L'istanziazione di una classe può avvenire un numero indefinito di volte e ogni oggetto è indipendente dagli altri.

Creiamo una istanza della classe (quindi un oggetto) utilizzando la parola chiave **new**

```java
public static void main(String[] args){	//main del programma
	Car myCar1 = new Car();
	myCar1.fuel = 10.0;	//accedo direttamente al campo dell'oggetto
	myCar.accelerate(5); 	//eseguo il metodo dell'oggetto
	Car myCar2 = new Car();
}
```
Questi due oggetti (`myCar1` e `myCar2`) provengono dalla stessa classe ma ognuno ha il proprio spazio di memora e quindi non si influenzano tra loro.

Quello che fa nello specifico l'operatore new è:
1. Allocare lo spazio necessario per l'oggetto nell'heap
2. Inizializza i valori ai valori di default i campi dell'oggetto
3. Chiama un eventuale costruttore
4. Ritorna un puntatore all'oggetto nello stack (Java non mostra esplicitamente i puntatori)

## Costruttore

Il costruttore è un metodo speciale della classe che deve avere lo **stesso nome della classe**,
Tale metodo viene **chiamato automaticamente** quando viene istanziato un oggetto.
Il suo compito è quello di inizializzare i campi dell'oggetto con dei valori passati come parametro alla funzione (oppure con dei valori di default definiti a priori).

Sempre nell'esempio della macchina un possibile costruttore potrebbe essere:

```java
public class Car {
	// Campi
	double speed;
	double fuel;
	String color;
	
	//costruttore
	Car(double s, double f, String c){
		speed = s;
		fuel = f;
		color = c;
	}
	// Metodi
	//...
}

public static void main(String[] args){
	Car myCar = new Car(0.0, 100.0, "red");	//utilizzo il costruttore per istanziare l'oggetto
}
```

È possibile avere anche più costruttori (che si differenziano dal tipo, l'ordine e la quantità dei parametri) e se non se ne scrive nemmeno uno entra in gioco il **costruttore di default** che inizializza i campi ai loro valori standard in base ai loro tipi.

## Static

Static è una keyword la quale indica che un campo oppure un metodo sono associati direttamente alla classe.

Sia i campi che le funzioni possono essere **static** cioè ci si può riferire a loro anche direttamente attraverso la classe senza bisogno di avere un oggetto istanziato.
- Per quanto riguarda un **campo static** è importante ricordare che quel campo sarà condiviso tra tutti gli oggetti e quindi non ne viene creata una copia per ogni oggetto.
- Per quanto riguarda in **metodi static** è importante ricordare che possono accedere direttamente solo ai campi e altri metodi della classe che sono anch'essi **static**.


## Aliasing

Seppur non esplicitamente, java fa uso di puntatori, ad esempio per array e per gli oggetti.

Il fenomeno dell'**aliasing** accade quando si hanno più variabili fanno riferimento ad una stessa zona di memoria.
Questo porta al problema che se si modifica i dati all'interno di quella zona di memoria utilizzando una variabile implicitamente anche l'altra si aggiornerà, e questo potrebbe essere un comportamento non atteso dal programmatore.

Ad esempio

```java
public  static  void  main(String[] args) {
	int[] array1 = {1, 2, 3};
	int[] array2 = array1; // array2 fa riferimento allo stesso array di array1
	// Modificando array2, si modifica anche array1
	array2[0] = 100;
	System.out.println("array1[0]: " + array1[0]); // Stampa 100
	System.out.println("array2[0]: " + array2[0]); // Stampa 100
}
```



## This

**this** è una keyword che serve a riferirsi all'oggetto corrente (quindi è un puntatore) che viene utilizzata all'interno dei metodi della classe.

Serve per accedere esplicitamente ai campi o metodi della proprio oggetto, oppure può essere utilizzato per passare per reference il nostro oggetto come parametro ad un altro metodo


## Package

In java è possibile organizzare delle classi all'interno di un package, che si può, poi, importare in altri codici.

Aiutano ad organizzare meglio il codice ma hanno anche l'importante funzionalità di essere dei *namespace*, quindi classi con lo stesso nome ma che risiedono in package differenti non creano conflitti.

```java
// Definizione di un package
package com.example.mio_package;

// Definizione di una classe all'interno del package
public class MiaClasse {
    // Campi e metodi della classe
}
// Definizione di un'altra classe all'interno del package
public class MiaClasse2 {
    // Campi e metodi della classe
}
```

È quindi possibile importare delle classi specifiche all'interno di un package (oppure importare tutto il package)

```java
import com.example.mio_package.MiaClasse;	//importo la singola classe
import com.example.mio_package.*;	//importo tutte le classi del package

public class AltraClasse {
    public static void main(String[] args) {
	    // ...
    }
}
```

Importante: il nome del package deve corrispondere alla gerarchia di sotto cartelle con lo stesso nome. Quindi:

le classi appartenenti al package `com.example.mio_package` devono risiedere nella cartella al percorso "com/example/mio_package"

# Incapsulamento

L'incapsulamento è un concetto fondamentale nella programmazione ad oggetti, esso infatti dice che i **l'implementazione degli oggetti** deve essere **nascosta** e non direttamente **accessibili**, ma solo **attraverso** delle **interfacce pubbliche**.

Gli scopi dell'incapsulamento sono:
- Garantire la **consistenza dei dati** effettuando dei controlli prima di operare su un campo della classe.
- Rendere la **documentazione più semplice**
- Rendere più semplice lavorare con la classe non interessandoci a come è composta nei dettagli ma piuttosto ad utilizzare dei metodi che svolgono le azioni per noi (con i dovuti controlli)

Per questo in Java vengono introdotti dei **modificatori di accesso** associabili ai campi e ai metodi:
- **public**: il metodo/campo è accessibile **ovunque**
	generalmente va messo come public le funzionalità più esterne della classe, che chiunque può utilizzare
- **protected**: il metodo/campo è accessibile: nella **classe stessa**, nello **stesso package**, nelle **sottoclassi**
- **default**: il metodo/campo è accessibile: nella **classe stessa** e nello **stesso package**
	come protected e default va messo ciò che l'intero pacchetto software deve utilizzare
- **private**: il metodo/campo è accessibile solo nella **classe stessa**
	come private vanno messi i dettagli implementativi

È importante notare una parte importante dell'incapsulamento che è **l'information hiding**, il quale dice che generalmente è meglio minimizzare ciò che è accessibile all'esterno, lasciando accessibili solo dei metodi controllati, questo per rendere il codice più sicuro e consistente.

## Getter e setter

Un prima implementazione dell'incapsulamento viene fatta attraverso i **getter e setter**;

I **getter** sono dei metodi che permettono di ottenere in modalità di sola lettura il contenuto di un campo della classe, spesso è un semplice return del campo ma può essere anche un valore calcolato dallo stato dell'oggetto.

I **setter** d'altra parte sono dei metodi che permettono di modificare dei campi della classe, il vantaggio è che prima di aggiornare il campo viene fatto un controllo che il nuovo valore rispetti i vincoli del campo.

# Javadoc

Quando si distribuisce il proprio codice per essere usato in altri progetti le parti del codice che vengono utilizzate sono le interfacce pubbliche. È molto importante quindi documentare i propri metodi spiegando il loro scopo, cosa prendono in input e cosa restituiscono in output, senza andare nei dettagli di implementazione.

Javadoc è un'applicazione integrata in Java che permette di generare una documentazione delle proprie interfacce utilizzando i commenti.

## Sintassi di javadoc

la seguente sintassi serve per un commento multilinee che javadoc interpreta come documentazione

```java
/**
...
*/
```

javadoc supporta vari tag che vengono rappresentati in modo particolare nella documentazione:

```java
/**
* @author author's name		//nome di chi ha sviluppato il componente
* @version 1.5		// versione della classe corrente
* @since 1.0		// da quale versione il metodo/classe è presente
*/
```

in particolare i tag per documentare un metodo sono:

```java
/**
...
descrizione del metodo..
...
@param <parameter name> <description>
@return <description>
@throws <exception name> <description>
*/
public int mioMetodo(...){...}
```

### Precondizioni 

Le precondizioni sono ciò che il chiamante deve garantire prima di chiamare il metodo

è importante esprime oltre che il significato dei singoli parametri, anche i vincoli che devono rispettare al fine di avere l'output voluto. ad esempio un parametro deve essere maggiore di zero, ovviamente dentro al metodo verrà fatto l'effettivo controllo ma scriverlo nella documentazione è comunque importante.


### Postcondizioni

le postcondizioni sono ciò che il codice deve garantire dopo essere stato chiamato.

lo stesso discorso fatto per le precondizione vale per le postcondizione riguardo al valore di ritorno

### invariante della classe

Le invarianti rappresentano delle condizioni che devono essere rispettate per tutta la vita di un oggetto della classe.
L'invariante è riferita all'intera classe e non ad un singolo metodo, spesso è rivolta anche ai campi.
Ad esempio: un determinato campo deve sempre essere compreso tra 0 e 100, nessun metodo deve infrangere questa regola.

### Esempio

```java
/**
 * Questa classe contiene una funzione per calcolare la somma di due interi.
 */
public class SommaIntero {

    /**
     * Questo metodo restituisce la somma di due numeri interi.
     *
     * @param a il primo intero
     * @param b il secondo intero
     * @return la somma di a e b
     */
    public static int calcolaSomma(int a, int b) {
        return a + b;
    }

    /**
     * Metodo principale per eseguire il programma.
     *
     * @param args gli argomenti della riga di comando
     */
    public static void main(String[] args) {
        int primoNumero = 5;
        int secondoNumero = 3;
        int risultato = calcolaSomma(primoNumero, secondoNumero);
        System.out.println("La somma di " + primoNumero + " e " + secondoNumero + " è: " + risultato);
    }
}

```

per generare la documentazione è sufficiente eseguire il seguente comando:

	javadoc -d docs SommaIntero.java

verrà generata una pagina di questo tipo

![enter image description here](https://i.ibb.co/wN6V7x9/index.png)

Cliccando sulla classe "SommaIntero" andremo nella seguente pagina

![enter image description here](https://i.ibb.co/rQTCWYq/class.png)

# Ereditarietà

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

# Interfacce

Un limite di Java è che una classe può **estendere una sola classe**, ci potrebbero essere dei casi in cui ad una classe vorremmo estendere più classi perché ci interessano i metodi di più classi.
Per fare ciò entrano in gioco le **interfacce**.

Una interfaccia non è altro che un insieme di firme di metodi (o se vogliamo dei metodi astratti, ma senza specificarlo con la keyword `abstract`)

```java
interface i {
	int method1(int a, double b);
	int method2(double a);
	...
}
```

È possibile aggiungere anche dei campi ma essi saranno implicitamente statici, pubblici e final, quindi possiamo solo usare delle costanti pubbliche comuni ad ogni istanza, ciò non è molto utile nella maggior parte dei casi.

Inoltre la **visibilità dei metodi** dell'interfaccia è **implicitamente *public***

Una classe può quindi **implementare** una interfaccia andando a specificare il corpo di ogni metodo.
è obbligatorio **implementare tutti i metodi dell'interfaccia**

Una classe può implementare più di una interfaccia.

Si usa la *keyword* `implements` per estendere l'interfaccia
```java
class A extends B implements i1, i2,... {
	//implementazione di tutti i metodi dell'interfacca i1 e i2
}
```

### Implementazione di default

Da java 8 in poi è anche possibile fornire una implementazione di default ai metodi dell'interfaccia, utilizzando la *keyword* `default` nella intestazione del metodo

```java
interface i {
	default int method1(int a, double b){
		...
	}
	int method2(double a);
	...
}
```

### Estendere interfacce

Anche con le interfacce è possibile avere l'ereditarietà, è infatti possibile estendere un'interfaccia con un'altra, esattamente come si fa per le classi.

```java
interface i {
	int method1(int a, double b);
}

interface f extends i {
	int method2(int a);
}
```
In questo caso una classe che implementerà l'interfaccia `f` avrà sia i suoi metodi che quelli dell'interfaccia `i`


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


# Tipi generici

Java supporta i tipi generici su classi, parametri dei metodi e valore di ritorno dei metodi.

Con i tipi generici per esempio possiamo permettere ad una funzione di lavorare su un tipo generico che verrà specificato durante l'istanza dell'oggetto.

```java
public class Coppia<T, U> {

    private T primoElemento;
    private U secondoElemento;

    public Coppia(T primo, U secondo) {
        this.primoElemento = primo;
        this.secondoElemento = secondo;
    }

    public T getPrimoElemento() {
        return primoElemento;
    }
    public U getSecondoElemento() {
        return secondoElemento;
    }
    public void setPrimoElemento(T primo) {
        this.primoElemento = primo;
    }
    public void setSecondoElemento(U secondo) {
        this.secondoElemento = secondo;
    }
}
```

Ad esempio posso istanziare la seguente classe nei seguenti modi

```java
Coppia<String, Integer> coppia1 = new Coppia<String, Integer>("Uno", 1);
Coppia<Double, String> coppia2 = new Coppia<Double, String>(3.14, "Due");
coppia1.getSecondoElemento();
```

## Invarianti

I tipi generici di Java sono detti **invarianti**, cioè non è possibile fare assegnamento tra due variabili che hanno un tipo generico diverso, anche nel caso in cui un tipo sia sottotipo dell'altro.

```java
public class List<V> {
	public void add(V el) {…}
}

List<Vehicle> a = new List<Vehicle>();
a.add(new Car());

List<Bicycle> b = new List<Bicycle>();
b.add(new Bicycle());
a = b;	//errore
b = a;	//errore
```


## Metodi con tipi generici

possiamo usare un tipo generico per il singolo metodo della classe, possiamo utilizzarlo per:
- valore di ritorno
- tipo dei parametri
- variabili locali all'interno del corpo del metodo

```java
public class EsempioTipoGenerico {

    public <T> T restituisciElemento(T elemento) {
        T risultatoLocale = elemento;
        return risultatoLocale;
    }
```

In questa sintassi:

- prima specifichiamo che il metodo utilizzerà un tipo generico `<T>`
- poi specifichiamo la funzione ritorna un tipo `T`
- come parametro abbiamo una variabile di tipo `T`
- possiamo utilizzare il tipo T per dichiarare altre variabili locali

### Type inference

la *type inference* permette di non dover specificare i tipi quando si istanzia la classe.
I tipi vengono dedotti dai tipi dell'oggetto nella fase di dichiarazione

considerando il primo esempio che abbiamo visto:

```java
// senza type inference
Coppia<String, Integer> coppia1 = new Coppia<String, Integer>("Uno", 1);

//con type inference
Coppia<String, Integer> coppia2 = new Coppia<>("Uno", 1);
```

### Tipi generici limitati

È possibile limitare i tipi che può assumere un tipo generico, imponendo che il tipo essere un sottotipo di una data classe (oppure anche la classe stessa).
Per fare ciò utilizziamo la keyword `extends` seguito dalla classe

```java
public <T extends Vehicle> void  frena(T veicolo) {
	// ...
}
```
In questo caso il tipo T può essere di tipo `Vehicle` oppure una sottoclasse di essa.


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
public class MiaClasse extends Object {
	...
}
```

Il ruolo della classe `Object` è quello di fornire una implementazione di base per ogni classe.
Tra le funzioni offerte dalla classe `Object` ce ne sono alcune deprecate e altre riguardanti la programmazione concorrente che non vedremo, ma ci sono dei metodi che vale la pena vedere:

- `boolean equals(Object obj)`
- `Object clone()`
- `int hashCode()`
- `String toString()`


## Equals

`boolean equals(Object obj)`

Questo metodo serve per indicare se l'oggetto passato per parametro è uguale all'oggetto su cui è stato chiamato il metodo.
nell'implementazione di default con "uguale" si intende che i due riferimenti puntano allo stesso oggetto in memoria.
È l'equivalente di fare `oggetto1 == oggetto2`
Solitamente è consigliato fare un *override* di questo metodo sulla propria classe per creare la propria uguaglianza a piacimento (solitamente una *deep copy* in cui si confrontano tutti i campi dei due oggetti).

Quindi nel caso noi **non facessimo *override*** si avrà il seguente codice
```java
Car car1 = new Car(0, fuelType, 100);
Car car2 = new Car(0, fuelType, 100);
car1.equals(car2) //false
car1==car2 //false
car1.equals(car1) //true
```

immaginiamo di aver fatto un *override* del metodo `equals` in cui andiamo a verificare che il parametro passato  sia dello stesso tipo ricevente e che tutti i campi siano equivalenti, si avrà il seguente codice
```java
Car car1 = new Car(0, fuelType, 100);
Car car2 = new Car(0, fuelType, 100);
car1.equals(car2) //true
car1==car2 //false
car1.equals(car1) //true
```

Quando si ridefinisce il metodo `equals` bisogna assicurarsi di mantenere le proprietà:
- Riflessiva: `x.equals(x)` deve essere vero
- Simmetrica: allora `x.equals(y)` e `y.equals(x)` devono avere lo stesso risultato
- Transitiva: se `x.equals(y)` e `y.equals(z)` allora `x.equals(z)`


## Clone

`Object clone()`

Il metodo `clone` restituisce un **nuovo oggetto** che è semanticamente identico a quello su cui è stato chiamato il metodo.
Quindi vorremmo che 
- `obj.clone() == obj` restituisca falso perchè sono effettivamente due oggetti in zone di memoria diverse
- `obj.equals(obj.clone())` restituisca vero perché il contenuto dell'oggetto è uguale (sempre considerando che il metodo `equals` venga ridefinito per controllare il contenuto dell'oggetto)

Il metodo clone **non ha una implementazione di base pubblica** (è solo una interfaccia) quindi è importante fare un *override* del metodo per fare la copia effettiva dei valori e restituire non un Object generico ma il tipo della classe.
Inoltre di default il metodo ha visibilità `protected` quindi possiamo scegliere solo se metterlo pubblico o lasciarlo protected.

Quando ridefiniamo il metodo possiamo scegliere se adottare una *deep copy* dei campi oppure una *shallow copy*. Questa distinzione entra in gioco quando abbiamo come campi dei tipi non primitivi.
con la *deep copy* andiamo a copiare l'effettivo valore puntato (maggior utilizzo di memoria). Mentre con la *shallow copy* facciamo una copia del puntatore (a questo punto avremo due oggetti che puntano alla stessa area di memoria, fenomeno chiamato *aliasing*)


## hashCode

`int hashCode()`

Questo è un metodo che ritorna un intero risultante da una funzione hash fatta sull'oggetto.

Se si va a sovrascrivere `equals` bisogna andare anche a sovrascrivere `hashCode` perche le due funzioni sono legate, infatti:

- se `a.equals(b)` restituisce vero allora anche `a.hashCode() == b.hashCode()` deve essere vero
- però se `a.hashCode() == b.hashCode()` è vero non significa necessariamente che `a.equals(b)` sia vero

Generalmente le funzioni hash non sono semplici da scrivere, per questo spesso gli IDE propongono delle proprie implementazioni.
Per realizzare una versione semplice di funzione hash si può ritornare un campo della classe oppure la somma dei campi primitivi e non (chiamando a sua volta `<obj>hashCode()` quando il campo non è primitivo)

## toString

`String toString()`

Questo metodo ritorna una stringa che rappresenta testualmente lo stato dell'oggetto

è molto utile ridefinire questo metodo per fare in modo che rappresenti lo stato della specifica classe, elencando, ad esempio, i campi con i rispettivi valori.


## Collections

Vediamo alcune classi native di Java, le collezioni. Le strutture dati iterabili seguono una gerarchia di interfacce e classi astratte. Una porzione di questa gerarchia è la seguente:

![enter image description here](https://i.ibb.co/LNyBb1L/image.png)

Le strutture che noi utilizziamo solitamente sono le foglie, riconosciamo infatti classi come LinkedList, Vector, ArrayList ecc...

Un costrutto molto utile per iterare su queste strutture è il **for each**, che ha la seguente forma

```java
for (<tipo> <var_locale> : <struttura_iterabile>) {
	...
}
```

Torna spesso utile utilizzare `var` come tipo. `var` corrisponde ad `auto` di c++ e serve per dedurre in automatico in **fase di compilazione** il tipo che c'è all'interno della struttura iterabile

## Stringhe

In java esiste il tipo stringa esplicito, che quindi non è propriamente un array di caratteri, bensì un array di byte.

`String s = "abc";`

È importante sapere che le stringhe in Java sono **immutabili**.
Per capire il significato capiamo cosa sono le stringhe: le Stringhe sono degli oggetti, quindi dei puntatori ad una zona di memoria dove è contenuta una serie di byte che rappresentano la stringa. dopo essere stata inizializzata tale zona di memoria non può modificare il suo contenuto.
Quindi quando si vuole modificare una stringa quello che viene fatto è creare una nuova zona di memoria contenente la nuova stringa e aggiornare il puntatore alla nuova zona

Tutti i metodi sulle stringhe che modificano la stringa in realtà stanno creando una nuova stringa e spostano il puntatore della variabile per puntare alla nuova stringa.

Tra questi metodi troviamo:
- concatenazione di stringhe: `new_str = str.concat(str2)` alternativamente si può usare la `+`, ad esempio `new_str = str + str2`
- rimpiazzo di un carattere: `new_str = str.replace(char_to_be_changed, new_char)`
- ottenere una sottostringa: `new_str = str.substring(limite_sinistro, limite_destro)`
- dividere una stringa su un carattere: `new_str[] = str.split(carattere_divisorio)`


## Tipi primitivi

I tipi primitivi di Java, che quindi **non sono sottoclasse** di `Object` sono le seguenti:

- boolean
- byte
- char
- short
- int
- long
- float
- double

Su questi tipi possiamo fare le operazioni standard come
- `+ - * /` sugli integer e floating-point
- `&& || !` sui boolean

Nota: gli operatori appena citati non si possono ridefinire negli oggetti (ad esempio non è possibile sovrascrivere il significato di `*` per fare `obj1 * obj2`), come avviene invece in c++.

![enter image description here](https://i.ibb.co/LkS6PYT/image.png)


Per quanto riguarda i casting, quando c'è perdita di dati va esplicitato il casting, mentre se non c'è perdita di dati allora non è necessario esplicitare il cast.
Ad esempio 

```java
byte a;
int b;
a = b;	// non consentito
a = (byte)b	//consentito (con possibile perdita di informazioni)
```

Nota che anche passare da un numero floating point ad uno intero significa perdere dei dati quindi anche in quel caso va fatto un cast esplicito


## Wrappers

In java esistono delle classi che fanno da contenitori per i corrispettivi tipi primitivi

![enter image description here](https://i.ibb.co/Nm2Y5BP/image.png)

- Questo può tornare utile quando certi metodi vogliono degli oggetti come parametri e quindi non potremmo usare i tipi primitivi.
- I wrapper possono assumere il valore Null mentre i tipi primitivi non possono.
- È possibile eseguire dei metodi sui dati, come le conversioni.
- I tipi generici di Java lavorano su oggetti quindi se vogliamo utilizzare i tipi primitivi dobbiamo usare i wrapper

Il lato negativo dei wrapper è il maggior consumo di memoria rispetto ai semplici tipi primitivi

### Boxing, Autoboxing e Unboxing
È pratica comune lavorare con tipi di dato primitivi ma in alcuni casi è necessario passare da un tipo primitivo ad un corrispettivo Wrapper o vice versa.

Con **boxing** si intende passare da un tipo primitivo ad un tipo Wrapper in modo **esplicito**, nel seguente modo:

```java
Integer x = new Integer (10);
Double y = new Double (5.5);
```

Java supporta anche la conversione automatica chiamata **autoboxing**, nel seguente modo:

```java
Integer x = 10;
Double y = 5.5;
```
Il compilatore si arrangia a fare le dovute conversioni

D'altra parte convertire un Wrapper nel corrispettivo tipo primitivo è una operazione che anche in questo caso viene fatto in automatico e si chiama **unboxing**, si fa nel seguente modo

```java
Integer x = new Integer(10);
int y = x;	//unboxing
```

# Exceptions

La normale esecuzione del codice può essere interrotta a causa di errori, In Java tali errori vengono rappresentati dalle **exceptions**. Le exceptions sono degli oggetti che contengono informazioni utili sui relativi errori.

Quando si verifica un errore viene interrotta l'esecuzione e l'eccezione relativa viene propagata (tramite il comando `throw`) attraverso tutto lo stack delle chiamate fino a che qualche funzione la "catturi" `catch` per gestire l'errore, se nessuna funzione ha previsto una cattura allora il programma verrà terminato.

Gli oggetti che definiscono le eccezioni appartengono ad una classe `Throwable`, nella seguente immagini vediamo una piccola parte della gerarchia:

![enter image description here](https://i.ibb.co/PhD2xnT/image.png)

Notiamo intanto una distinzione tra `Error` ed `Exception`
- Gli `Error` sono errori seri da cui non è possibile riprendere l'esecuzione del programma
- Le `Exception` sono errori più leggeri che, se gestiti, possono far riprendere l'esecuzione del programma

È possibile definire delle nostre eccezioni estendendo la classe `Throwable` oppure una delle sue sottoclassi

```java
// definisco la mia exception
public class NegativeSpeedException extends Exception {
	public NegativeSpeedException(double a) {	//costruttore
		super(“Negative speed not allowed: “ + a);
	}
}

//Utilizzo dell'eccezione
public class Vehicle {
	private double speed;
	public void accelerate(double a) throws NegativeSpeedException {
		if (a < 0){
			throw new NegativeSpeedException(a);	//lancio l'eccezione
		}
		this.speed = a;
	}
}
```

Se dovessimo andare ad eseguire il seguente codice

```java
Car a = new Car();
a.accelerate(-10); 	//lancia l'eccezione con il messaggio “Negative speed not allowed: -10“
``` 

come si nota dal codice al momento della definizione del metodo `accelerate` abbiamo messo `throws NegativeSpeedException`, questo perché tutti i metodi devono dichiarare anticipatamente le eccezioni che possono lanciare (in realtà solo quelle di tipo *checked*).
Inoltre anche le funzioni che chiamano le funzioni che possono lanciare eccezioni devono a loro volta dichiarare le eccezioni (Quindi nel caso ci fosse un metodo che fa uso di  `accelerate` quel metodo deve aggiungere alla propria definizione `throws NegativeSpeedException`)

è importante documentare accuratamente le eccezioni che possono essere lanciate dai nostri metodi.
In javadoc possiamo utilizzare il tag `@throws <exception_name> <descrizione>`


## Override

Le eccezioni rispettano il principio di sostituzione: "se una classe C1 espone una interfaccia più aperta di C2, allora possiamo utilizzare l'istanza di C1 anche quando ci si aspetta una istanza di C2"
Attenzione però: per quanto riguarda le eccezioni una classe viene definita **più aperta** se essa espone **un numero minore o uguale** di eccezioni del metodo sovrascritto.

È evidente un problema: se vogliamo sovrascrivere un metodo che prevede delle eccezioni ma noi vogliamo aggiungerne altre non lo possiamo fare.

## Eccezioni checked e unchecked

Per migliorare questo problema Java divide le eccezioni in due categorie:

- **Unchecked**: non è necessario dichiarare queste eccezioni. Includono la maggior parte delle eccezioni generiche che estendono le classi `Error` e `RuntimException` (Sono solitamente errori del programma che possono essere evitati con una corretta progettazione e programmazione.)
- **Checked**: devono essere dichiarate. includono le eccezioni che estendono la classe `Exception` ma non di `RuntimeException`

## Catturare eccezioni

È possibile gestire le eccezioni tramite il comando `catch`, che quindi permette di fare delle operazioni nel caso si verificasse una eccezione specifica.

Riusciamo a catturare eccezioni tramite il costrutto `try-catch`

```java
try {
	// blocco che potrebbe generare una exception
}
catch(<tipo eccezione> <nome_variabile>) {
	//codice da eseguire in caso di exception
}
```

il codice precedente può avere tre risvolti:

1. all'interno del blocco `try` non viene generata nessuna eccezione e quindi il codice prosegue normalmente
2. viene generata una eccezione del tipo specificato nel `catch` (oppure anche un sottotipo), e viene eseguito il corpo del `catch`
3. viene generata una eccezione che però non è un sottotipo di quello specificato nel `catch`. In quel caso l'eccezione viene propagata in tutto lo stack di chiamate per trovare un `catch` che cattura quel tipo di eccezione

### Finally

Abbiamo anche un blocco aggiuntivo `finally` da poter mettere dopo i catch.
È un blocco che viene eseguito sempre, che si verifichi o meno una eccezione, Questo è utile, ad esempio, quando si lavora con risorse come file o connessioni di rete e si desidera assicurarsi che tali risorse vengano correttamente rilasciate, anche in caso di eccezioni.

Viene eseguito anche se nel `try` oppure nel `catch` c'è un return. Nel caso all'interno del finally ci sia un return, i return precedenti verranno scartati

```java
try {
	// blocco che potrebbe generare una exception
}
catch(<tipo eccezione> <nome_variabile>) {
	//codice da eseguire in caso di exception
}
finally {
	//codice eseguito indipendentemente dal verificarsi dell'exception
}
```

## Catene di eccezioni

Quando lanciamo una eccezione possiamo anche passare come parametro l'eccezione che l'ha causata:

```java
public class Race {
	public T race(double length) {
		...
		try {
			...
		}
		catch(ImpossibleAccelerationException e) {
			throw new IllegalArgumentException(“Random returned a negative number, e);	 //passiamo il valore 'e' che è a sua volta una eccezione
		}
		finally {
			...
		}
	}
}
```

in questo caso vedremo nella console sia l'eccezione esterna che anche quella che l'ha causata.
Il tutto per migliorare il debug in caso di errori.

## Assertions

Le assertions sono delle condizione che dovrebbero rappresentare qualcosa che dovrebbe essere sempre vero.
Possiamo utilizzare queste condizione per testare la correttezza delle variabili durante l'esecuzione del programma.

vediamo un esempio:

```java
public class EsempioAssertion {
    public static void main(String[] args) {
        int numero = -5;

        // Utilizzo di assert per verificare che il numero sia positivo
        assert numero > 0 : "Il numero deve essere positivo";

        // Se l'assertion fallisce, il messaggio specificato viene stampato
        // e il programma termina se gli assert sono abilitati (-ea).
        
        System.out.println("Il numero è: " + numero);
    }
}
```

nota che gli assert sono disabilitati di default e vanno abilitati aggiungendo le opzioni `-ea` quando si esegue il programma

# Annotazioni

Le annotazioni in Java sono metadati che forniscono informazioni aggiuntive sul codice sorgente.
Esse non hanno un impatto diretto sull'esecuzione del programma, ma possono essere lette da strumenti durante il processo di compilazione o esecuzione per applicare comportamenti speciali, generare codice ausiliario, o fornire informazioni utili agli sviluppatori o a strumenti di analisi.

Le annotazioni possono venir associate a:
- classi
- metodi e costruttori
- campi
- parametri
- variabili locali

Un esempio di annotazione che abbiamo già visto è `@override`

```java
@override
public void method() {
	...
}
```
In questo caso il ruolo dell'annotazione è assicurare che il metodo sia effettivamente un override, altrimenti non viene compilato il codice.

Altri esempi molto utilizzati sono `@Deprecated(since="<versione>")` per dire che un costrutto è deprecato da un certa versione.
Oppure `@SuppressWarnings("<warning_type>")` per evitare che il compilatore generi il tipo di warning specificato

## Creare una annotazione

La sintassi per definire una propria annotazione è la seguente:

```java
<visibilità> @interface <nome_annotazione> {
	// eleneco dei campi che seguono il seguente formato
	<tipo> <nome_campo>() default <valore_di_default>;
}
```

Solitamente le annotazioni vengono messe in un file Java a parte e poi viene importato tale file dove serve.
Vediamo come ad ogni campo possiamo attribuire un valore di default, se esso non viene specificato quando si fa riferimento all'annotazione bisogna assegnare un valore a tale campo.

Creiamo la seguente annotazione con due campi:
```java
public @interface MyAnnotation {
	String value() default "";
	int  priority();
}
```

vediamo come utilizzare questa annotazione:

```java
public class MyClass {
	 //utilizzo valido
    @MyAnnotation(value = "Custom Value", priority = 1)
    public void myMethod() {
        ...
    }
	
	//utilizzo valido
    @MyAnnotation(priority = 1)
    public void myMethod() {
        ...
    }
    
    //utilizzo non valido: bisogna inizializzare il campo "priority"
    @MyAnnotation()
    public void myMethod() {
        ...
    }
}
```

## Target

Nella definizione è possibile anche limitare a cosa è possibile affiancare l'annotazione.
Questo viene fatto aggiungendo una annotazione speciale chiamata `@Target` alla nostra annotazione, specificando al suo interno a cosa è possibile affiancare la nostra annotazione:

```java
@Target({
	ElementType.FIELD,	// può assere affiancata ai campi
	ElementType.METHOD,	// può assere affiancata ai metodi
	ElementType.PARAMETER // può assere affiancata ai parametri
})
public @interface MyAnnotation {
	String value() default "";
	int  priority();
}
```
nota la presenza delle parentesi graffe in quanto il campo nella annotazione `Target` è un array

## Retention

Similmente all'annotazione `@Target`, l'annotazione `@Retention` permette di rendere l'annotazione presente solo nel codice, nel .class (bytecode), oppure in esecuzione.
Possiamo decidere modificando il parametro`RetentionPolicy`
- `RetentionPolicy = SOURCE`: l'annotazione viene trattata come fosse un normale commento.
- `RetentionPolicy = CLASS`: L'annotazione viene considerata in fase di compilazione (documentazione esterna).
- `RetentionPolicy = RUNTIME`: L'annotazione viene considerata anche in fase di esecuzione.

```java
@Target({
	ElementType.FIELD,	// può assere affiancata ai campi
	ElementType.METHOD,	// può assere affiancata ai metodi
	ElementType.PARAMETER // può assere affiancata ai parametri
})
@Retention(
	RetentionPolicy.SOURCE
)
public @interface MyAnnotation {
	String value() default "";
	int  priority();
}
```

## JUnit

**JUnit** è un framework utilizzato per fare testing di un codice, in sostanza un metodo che richiama parti del nostro codice per vedere se si comporta come previsto.
Questo framework fa uso delle annotazioni per gestire le fasi di testing e identificare quali metodi del nostro codice testare.
[junit user guide](https://junit.org/junit5/docs/current/user-guide/)


## JAXB

Un altro framework che fa intenso uso delle annotazioni è **JAXB**, utilizzato per rappresentare le classi di Java in XML.
Attraverso diverse annotazioni si possono riconoscere le varie componenti della classe.
La traduzione da oggetto Java a XML viene chiamata **Marshalling**. Mentre la traduzione da XML a oggetto Java viene chiamata **Unmarshalling**

# Reflection

La **reflection** è una feature di Java che permette di interagire e ottenere informazioni **a runtime** di: classi, campi, metodi e costruttori 

## Classi

Vediamo come accedere alle informazioni di una classe.
Si utilizza una classe chiamata `Class` e per istanziare un oggetto di tipo `Class` si possono utilizzare due modi:

- `<oggetto>.getClass()`
- `<classe>.class`


`Class` definisce tutti i metodi per ottenere:

- informazioni sulla struttura di definizione della classe: `isPrimitive(), isInterface(), isAnnotation(), getModifiers(), ...`
- informazioni sulla gerarchia: `getInterfaces(), getSuperclass(), getPackage(), ...`
- campi/metodi con visibilità pubblica definiti nella classe e anche quelli ereditati: `getFields(), getMethods(), getCostructors()`
- campi/metodi (ignorando i modificatori di visibilità) definiti nella classe (ma non quelli ereditati): `getDeclaredFields(), gedDeclaredMethods(), getDeclaredConstructors()`
- [lista operazioni](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Class.html)


```java
Class c = Vehicle.class;
// tutti i costruttori
for(Constructor t : c.getDeclaredConstructors())
	System.out.println(t);

// tutti i metodi
for(Method m : c.getDeclaredMethods())
	System.out.println(m);

// i campi pubblici (anche ereditati)
for(Field f : c.getFields())
	System.out.println(f);

// tutti i campi locali della classe
for(Field f : c.getDeclaredFields())
	System.out.println(f);

System.out.println(c.getSuperclass());	//la superclasse
System.out.println(c.getPackage());		//il package a cui appartiene la classe
```

## Campi

Vediamo come accedere e manipolare i campi di una classe.
Si utilizza una classe chiamata `Field`
Come abbiamo visto possiamo ottenere la lista dei campi tramite `getFields(), getDeclaredFields()`.
È possibile anche ottenere un campo in particolare specificando come parametro il nome del campo: `get[Declared]Field("<nome_campo>")` (se il campo non esiste viene lanciata una eccezione a *runtime*).
È possibile:

- Ottenere informazioni generali sul campo: `getType(), getModifiers()`
- Leggere il valore del campo: `get(), getDouble(), getInt(), ...`
	Si utilizza `get()` per leggere degli oggetti, mentre ci sono dei metodi specifici per i tipi primitivi
	Come parametro ai `get()` va passato l'oggetto da cui si vuole leggere il campo: 
	`<field>.get(<oggetto>)`

- Scrivere il valore del campo: `set(), setDouble(), setInt(), ...`
	Si utilizza `set()` per scrivere degli oggetti, mentre ci sono dei metodi specifici per i tipi primitivi
	Come parametro ai `set()` va passato l'oggetto da cui si vuole leggere il campo e il nuovo valore: 
	`<field>.set(<oggetto>, <nuovo_valore>)`
- [lista operazioni](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/reflect/Field.html)


In caso di **campi privati** non è direttamente possibile performare dei `set` e dei `get` (verrebbe lanciato un `IllegalAccessException`). È possibile prima di eseguire un `set` o un `get` mettere la seguente riga di codice:
`<field>.setAccessible(true);`
rendendo così il campo accessibile. 
Si tenga nota però che questa operazione infrange il concetto di incapsulamento, che potrebbe portare a problemi al normale funzionamento del codice e un riduzione della sicurezza del codice. 
È quindi consigliato usare questo metodo solo quando strettamente necessario.

```java
Car c = new Car(0, null);
Class classCar = c.getClass();
Class classVehicle = classCar.getSuperclass();
Field speed = classVehicle.getDeclaredField( "speed");
speed.setDouble(c, 10.0);
```

## Metodi

Vediamo come accedere e manipolare i metodi di una classe.
Si utilizza una classe chiamata `Method`
Come abbiamo visto possiamo ottenere la lista dei metodi tramite `getMethods(), getDeclaredMethods()`.
È possibile anche ottenere un metodo in particolare specificando come parametro il nome del metodo e la `Class` dei tipi dei parametri: `get[Declared]Method("<nome_metodo>", <tipo>.class, ...)` (se il metodo non esiste viene lanciata una eccezione a *runtime*).
È possibile:

- Ottenere informazioni generali sul sul metodo: `getReturnType(), getTypeParameters(), getGenericExceptionTypes(), getModifiers()`
- invocare il metodo tramite il metodo `<method>.invoke(<oggetto>, <valore_parametro>, ...)`
- [lista operazioni](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Method.html)

In caso di **metodi privati** vale lo stesso discorso fatto sui campi.

```java
Car c = new Car(0, null);
Class classCar = c.getClass();
Class classVehicle = classCar.getSuperclass();
Method accelerate = classCar.getDeclaredMethod("accelerate", double.class);
Method getSpeed = classVehicle.getDeclaredMethod("getSpeed");
Object result = getSpeed.invoke(c);
result = accelerate.invoke(c, 2.0);
```


## Costruttori

Vediamo come accedere e manipolare i costruttori di una classe.
Si utilizza una classe chiamata `Constructor`
Come abbiamo visto possiamo ottenere la lista dei costruttori tramite `getConstructors(), getDeclaredConstructors()`.
È possibile anche ottenere un costruttore in particolare specificando come parametro la `Class` dei tipi dei parametri (ovviamente dato che i costruttori non hanno un proprio nome, non serve metterlo): `get[Declared]Constructor(<tipo>.class, ...)` (se il costruttore non esiste viene lanciata una eccezione a *runtime*).
È possibile:

- Ottenere informazioni generali sul sul costruttore: `getParameterTypes(), getGenericExceptionTypes(), getModifiers()`
- chiamare il costruttore per creare una nuova istanza della classe: `<costruttore>.newInstance(<valore_parametro>, ...);`
- [lista operazioni](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Constructor.html)

In caso di **costruttori privati** vale lo stesso discorso fatto sui campi.

```java
Class class<Car> = c.getClass();
Constructor cst = classCar.getDeclaredConstructor(double.class, FuelType.class);
Car created = cst.newInstance(2.0, new FuelType("diesel", 0.015, 0.01));
```

## Annotazioni

Con la reflection si può interagire con le annotazioni che hanno `RetentionPolicy = RUNTIME`.
Si utilizza una classe chiamata `Annotation`

- possiamo ottenere le annotazioni: `getAnnotations(), getDeclaredAnnotations()`
	anche ottenere delle specifiche annotazioni con `getAnnotation(<nome_annotazione>.class),getDeclaredAnnotation(<nome_annotazione>.class)`
- possiamo ottenere i valori presenti nei campi dell'annotazione, usando il nome del campo come funzione
- [lista operazioni](https://docs.oracle.com/javase/8/docs/api/java/lang/reflect/Constructor.html)


```java
// Definizione di un'annotazione personalizzata
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface MyAnnotation {
    String mio_campo();
}

// Ottenere il valore dell'annotazione da una classe
MyAnnotation myAnnotation = MyClass.class.getAnnotation(MyAnnotation.class);
String annotationValue = myAnnotation.mio_campo();
```


## Vantaggi e svantaggi della reflection

- **Vantaggi**
	- tramite reflection abbiamo accesso a componenti a cui non avremmo accesso normalmente, in alcuni casi ciò può rompere il principio di incapsulamento ma delle volte può essere necessario (estremamente utile per i framework).
	- accedere a componente sconosciuti in fase di compilazione. i framework infatti non sono a conoscenza su quali classi, metodi, campi andranno a lavorare

- **Svantaggi**
	- la reflection funziona a *runtime*, quindi nel caso ci fossero dei palesi errori (cercare di ottenere un metodo non esistente) il codice compilerebbe lo stesso ma verrebbe lanciata una eccezione a *runtime*
	- la sintassi utilizzate per fare le varie operazioni è abbastanza verbosa e poco intuitiva rispetto al modo classico di fare le cose

# Library management

Generalmente quando sviluppiamo programmi in java facciamo uso delle librerie base di Java, semplicemente importandole all'inizio del codice in quanto sono librerie già precaricate.

Quando parliamo di **librerie** intendiamo sostanzialmente il **bytecode di un insieme di classi**.

La JVM utilizza la *classpath* per sapere dove trovare le classi, la *classpath* è un insieme di percorsi che possono condurre a una directory contenente dei file .class oppure file .jar.

**La ricerca delle classi avviene in fase di runtime**, e se una determinata classe che viene utilizzata nel codice non viene trovata nel *classpath* allora viene lanciata una eccezione *ClassNotFoundException*.


Possiamo dire alla JVM dove andare a trovare le nostre librerie in fase di compilazione aggiungendo l'opzione 
`-classpath </percorso/della/libreria1;/percorso/della/libreria2>`


## Compatibilità e versioni

Quando si sviluppa e si modifica nel tempo una libreria è importante considerare la ***backward  compatibility***, cioè la compatibilità di quella versione della libreria con le versioni precedenti.
Per assicurare questa compatibilità è importante non modificare le interfacce esterne (campi, metodi e classi utilizzate dagli altri) della nostra libreria.

Se consideriamo un metodo pubblico ad esempio: Se in una successiva versione vogliamo aggiungere, modificare o rimuovere un parametro, stiamo rompendo la compatibilità quindi bisogna trovare un modo per evitare ciò, magari aggiungendo un'altra versione del metodo, oppure dando al parametro aggiunto un valore di default oppure far chiamare il nuovo metodo all'interno del metodo originale.

Un altro esempio potrebbe essere che il metodo che abbiamo scritto in una vecchia versioni non è più necessario e vorremmo rimuoverlo... Questa non è una buona idea in quanto chi sta utilizzando quel metodo e aggiorna la libreria si troverà il codice rotto. In questo caso entra in gioco l'annotazione `@deprecated` la quale dice che quel metodo non dovrebbe essere più utilizzato e non verrà più supportato

È chiaro che in alcune situazioni mantenere la compatibilità non è possibile, in questo caso tornano molto utili i **version numbers**, cioè dei numeri che identificano la versione della libreria.

Spesso si utilizza la seguente convenzione: `x1.x2.x3` dove:
- `x1` rappresenta una *major release*, in questo caso numeri diversi implicano che delle interfacce esterne sono cambiate, quindi la compatibilità è molto probabilità che non sia mantenuta con le versioni precedenti
- `x2` rappresenta una *minor release*, in questo caso cambiano solo le implementazioni interne oppure vengono aggiunte nuove interfacce esterne, ma non vengono modificate le interfacce esterne già esistenti. La compatibilità dovrebbe essere garantita
- `x3` rappresenta un *bug fix*, sono dei cambiamenti minori che sistemano dei problemi e garantiscono la compatibilità

## Strumenti di automazione

Quando un progetto diventa eccessivamente grande diventa difficile e frustrante gestire.
Esistono dei tool che automatizzano varie fasi come la compilazione, l'esecuzione, costruire eseguibili, effettuare test, ecc...
Uno di questi tool è [Gradle](https://docs.gradle.org/current/userguide/userguide.html)


