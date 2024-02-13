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

