# Note introduttive

Ripassiamo alcuni concetti che abbiamo affrontato nel modulo 1.

## Classificazione dei linguaggi

differenza tra: inizializzazione, dichiarazione, assegnamento
- dichiarazione: creare una nuova variabile specificando il **tipo** e il **nome**.
- assegnamento: dare un valore ad una variabile già creata in precedenza
- Inizializzazione: consiste nel dichiarare una variabile e assegnargli subito un valore

I linguaggi di programmazione si dividono principalmente in **imperativi e funzionali**:
si differenziano dalla presenza o meno dell'operatore di **assegnazione**, infatti nei linguaggi funzionali non è possibile fare assegnazioni, ma solo inizializzazioni.

## Linguaggio orientato agli oggetti

Java è un linguaggio imperativo orientato agli oggetti e basato sulle classi (sei obbligato a mettere il codice all'interno di una classe, anche se non vuoi utilizzare le classi)

La caratteristica distintiva tra un linguaggio orientato agli oggetti da uno che non è orientato agli oggetti è **il polimorfismo**, in particolare la Subsumption: "qualunque oggetto di una data classe X è anche istanza della superclasse di X."
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
