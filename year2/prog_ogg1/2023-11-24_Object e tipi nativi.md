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
