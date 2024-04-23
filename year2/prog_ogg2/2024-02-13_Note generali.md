# Note generali

Ripassiamo alcuni concetti che abbiamo affrontato nel modulo 1 e introduciamo delle brevi note su altri aspetti di Java.

## Classificazione dei linguaggi

differenza tra: inizializzazione, dichiarazione, assegnamento
- dichiarazione: creare una nuova variabile specificando il **tipo** e il **nome**.
- assegnamento: dare un valore ad una variabile già creata in precedenza
- Inizializzazione (*binding*): consiste nel dichiarare una variabile e assegnargli subito un valore

I linguaggi di programmazione si dividono principalmente in due **paradigmi** di programmazione:
- **Imperativi**
- **Funzionali**
Si differenziano dalla presenza o meno dell'operatore di **assegnazione**, infatti nei linguaggi funzionali non è possibile fare assegnazioni, ma solo inizializzazioni.

I linguaggi imperativi si dividono poi in diversi stili di programmazione, ad esempio **procedurale** e **orientato agli oggetti**.


## Linguaggio orientato agli oggetti

Java è un linguaggio imperativo orientato agli oggetti e basato sulle classi (sei obbligato a mettere il codice all'interno di una classe, anche se non vuoi utilizzare le classi)

La caratteristica distintiva tra un linguaggio orientato agli oggetti da uno che non è orientato agli oggetti è **il polimorfismo**, in particolare dalla presenza della **virtual table** la **Subsumption**: "qualunque oggetto di una data classe X è anche istanza della superclasse di X."
Ad esempio, una istanza della classe Rettangolo può essere sempre usata dove ci si aspetti una qualunque FiguraGeometrica poiché un rettangolo **è** una figura geometrica.

## Classe e oggetto

la Classe definisce come deve essere un tipo di dato, un oggetto è l'istanza di una classe cioè un valore con il tipo definito dalla sua classe.

## Tipi statici e dinamici

Tipo statico e dinamico in Java:
- il tipo statico è deciso in **compile time**, cioè quello messo nella fase di dichiarazione della variabile (senza assegnarla)
- il tipo dinamico è deciso in **runtime**, cioè il tipo dell'oggetto nella fase di assegnamento

In Java possiamo dire di avere un **dispatch dinamico sul ricevitore** su cui è chiamata la funzione mentre abbiamo un **dispatch statico sui parametri** delle funzioni.


## Classi astratte e interfacce

il significato di classi astratte e interfacce è molto simile tra loro, sono entrambi dei sistemi per creare dei sottotipi. La necessità di avere questa distinzione viene dal fatto che Java è un linguaggi in cui **non è presente l'ereditarietà multipla**, quindi puoi ereditare da una sola classe e poi implementare più interfacce.

## Tipi generici vs Object

Da una analisi superficiale potrebbe sembrare che usare i tipi generici oppure Object sia la stessa cosa, in parte è vero in quanto entrambi permettono di poter mettere qualsiasi cosa come tipo di dato. Il problema di Object è che se venisse come tipo di dato per una collezione di dati, in tale collezione ci potrebbero finire dentro qualsiasi oggetto però noi saremo abbastanza limitati sulle operazioni che possiamo fare su tali oggetti:
- o utilizziamo solo metodi della classe Object.
- o facciamo dei cast, con il rischio però di fare errori non conoscendo i veri tipi degli oggetti.

Usando i tipi dinamici questo problema non si pone in quanto al momento della inizializzazione della collezione viene specificato il tipo dei dati che ci andremo ad inserire.

Nella documentazione di Java ci sono vari metodi che nonostante questo utilizzano comunque Object (vedi il metodo `contains` di ArrayList), questo perché Java ha introdotto i tipi dinamici svariate versioni dopo il rilascio iniziale e quindi per mantenere la compatibilità con le vecchie versioni Java utilizza ancora Object.


## Parametri formali e attuali

- Parametri formali: variabili presenti nella dichiarazione dei parametri dei metodi e che vengono poi utilizzati all'interno del metodo
- parametri attuali: gli argomenti usati nella chiamata della funzione

## Tipo argomento e tipo parametro

- Tipi parametro: sono i nomi dei tipi generici messi nella fase di dichiarazione della classe o del metodo, che conterranno i tipi reali che verranno passati.
- Tipi argomento: sono i tipi reali che vengono passati nella fase di dichiarazione di una classe oppure di chiamata di un metodo

## Eccezioni checked e unchecked

Quando stiamo implementando delle nostre classi,  facciamo un metodo che può non andare a buon fine, come gestiamo quel caso?
- ritornare `null`
- lanciare una eccezione checked
- lanciare una eccezione unchecked

Prendiamo ad esempio un metodo `get(int indice)` di una collezione di oggetti, esso può fallire nel caso si dia un indice al di fuori del limite della collezione.
- ritornare `null` non è una buona soluzione in quanto non esprime chiaramente che si è andati fuori dal limite dell'array e soprattutto bisognerebbe fare un `if` ogni volta che si chiama il metodo
- lanciare una eccezione è la soluzione migliore, ma come decidere se usare una eccezione chekced oppure unckecked? scegliere una eccezione checked implica di costruire una propria eccezione (è una operazione raccomandata ma non obbligatoria), e dichiararla nella firma del metodo e poi il chiamante dovrà occuparsi di gestirla.
Scegliere una unchecked risulta più comoda ma anche meno esplicativa in quanto sono eccezioni generiche.

Per capire quale usare possiamo chiederci: "Se un utente cattura la mia eccezione checked può fare qualcosa di utile?", "l'eccezione che lancio fa parte di un possibile risultato del metodo oppure rappresenta un errore raro"

Nel nostro caso, se il chiamante fa del codice corretto, è molto inusuale uscire dai limiti della collezione, inoltre se il chiamante prende l'eccezione non può fare niente di utile, inoltre gestire ogni get con dei try-catch risulta essere molto scomodo e allunga inutilmente il codice. Quindi si opta per una eccezione unchecked.


### Sottotipo di una eccezione unchecked

potremmo chiederci se ha senso creare un sottotipo di una eccezione unchecked, la risposta è che non ha molto senso in quanto con una eccezione unchecked si prevede che il chiamante non gestirà le eccezioni con un try catch, quindi creare il proprio tipo speciale non avrebbe molto senso perche non verrebbe catturata mai.


## Dimensione di un oggetto

la dimensione in byte di un oggetto è determinata da vari fattori della sua classe:

- la somma della dimensione degli attributi primitivi
- per ogni attributo *reference type* (oggetto) si aggiunge la dimensione di un puntatore
- per ogni metodo si aggiunge la dimensione di un puntatore
- se si tratta di una sottoclasse si considerano anche gli attributi ereditati e i metodi ereditati non sovrascritti
- attributi e metodi statici non vanno contati


## Statement vs expression

Vediamo la differenza che c'è tra una espressione e uno statement (vale in generale per i linguaggi di programmazione):

- **Expression**: codice che può essere valutato, cioè che produce un valore che possiede un tipo.
- **Statement**: codice che non genera un valore e che viene terminato `;` uppure dalla chisura del proprio blocco di codice `{...}`

## Final

Il significato della keyword **final** in Java è sostanzialmente la disabilitazione dell'operatore di assegnamento sull'oggetto relativo.

il final può essere messo nei seguenti casi:
- **sui parametri di una funzione**: significa che tali parametri non possono essere riassegnati all'interno del corpo della funzione
- **dichiarazione di campi o variabili locali**: la variabile dopo essere stata inizializzata non può più essere assegnata
- **sulla firma dei metodi**: il metodo non è sovrascrivibile

Fare attenzione che un oggetto final significa sempre che non può essere riassegnato con un nuovo oggetto, ma è comunque possibile modificare i suoi campi e chiamare i suoi metodi


## Type parameter e Type argument

Nell'ambito dei *generics*:
- il *type parameter* rappresenta la **dichiarazione** dei tipi generici che verranno usati dalla classe/metodo, si trovano tra parentesi angolari e appaiono prima dell'utilizzo effettivo dei tipi:
`public class MyClass<T> {}`
`public static <MyType> void f() {}`
- il *type argument* rappresenta l'utilizzo dei tipi generici e anche "l'assegnazione" di quale tipo utilizzare
	```java
	public class MyClass<T> {
		T ciao;
	}
  ```
  ```java
	public static <MyType> void f(MyType a) {
		...
	}
  ```
    ```java
	MyClass<String> mc;
  ```
