# Tipi di dato e valori

I tipi di JavaScript possono essere divisi in due categorie:

- **Tipi primitivi**: sono i tipi classici, quindi stringhe, numeri e boolean
    - Ci sono anche due valori speciali, `null` e `undefined` che fanno parte dei tipi primitivi
- **Tipi oggetto** (o *reference type*): sono tipi più complessi, un oggetto possiamo immaginarlo come una collezione di proprietà dotate di nome e valore (ad esempio, `Set`, `Map`, `Error`, array, dizionari, …)
    - Anche **funzioni** e **classi** sono un particolare tipo di oggetto.

JavaScript ha un garbage collector integrato, quindi quando degli oggetti non sono più raggiungibili vengono deallocati automaticamente.

JavaScript supporta uno stile di programmazione orientato agli oggetti, sia i tipi primitivi che i tipi oggetto possono comportarsi come degli oggetti e quindi invocare dei metodi su di loro (`null` e `undefined` sono l’unica eccezione).

## Immutabilità

In JavaScript, i tipi primitivi sono immutabili, mentre gli oggetti sono mutabili. Questo significa che i valori primitivi (numeri, stringhe, booleani, ecc.) non possono essere modificati direttamente. Se si desidera modificarne il valore, è necessario creare un nuovo valore e assegnarlo a una variabile.

Quindi ogni volta che viene invocato un metodo su una stringa quel metodo restituirà una nuova stringa e non modifica se stessa.

Al contrario, gli oggetti possono essere modificati direttamente, aggiornando o aggiungendo proprietà al loro stato.

## Type conversion

La principale filosofia di JavaScript è quella di continuare l’esecuzione nonostante tutto, cercando di ridurre al minimo l’apparizione di errori. Una conseguenza di questa filosofia è la *type conversion* molto spinta che possiede il linguaggio.

JavaScript esegue delle conversioni di tipo in modo automatico, ad esempio se un programma si aspetta una stringa ma gli viene passato un intero, esso viene convertito autonomamente in stringa.

Gli **operatori sono polimorfi**, quindi cambiano il loro comportamento in base ai tipi. Un esempio è sommare una stringa ad un numero che genererà una stringa concatenata al numero (il quale è stato convertito in stringa)

Da qui nasce la differenza tra l’eguaglianza **con** *type conversion*, chiamata *equality* (`==`) e quella **senza**, chiamata *strict equality* (`===`).

L’operatore `==` esegue una conversione per “avvicinare” il più possibile i tipi tra loro e poi fa il confronto, questo comportamento può portare a risultati inaspettati.

Mentre l’operatore `===` esegue un confronto diretto sui tipi e sul valore (questo è il confronto voluto nella maggior parte dei casi).

Nota che anche `===` sugli oggetti effettua un confronto *shallow* sui riferimenti, non vengono confrontate le proprietà interne degli oggetti. In altre parole due oggetti con lo stesso numero di proprietà, che hanno gli stessi nomi e gli stessi valori possono essere comunque due oggetti differenti.

### Valori di verità

Le `type conversion` considerano i seguenti valori come valore booleano `false`: 

- `false`
- `null`
- `undefined`
- `0`
- `-0`
- `NaN`
- `""`

Mentre tutti gli altri valori, inclusi gli oggetti, sono convertiti con il valore booleano `true`.

## Conversioni esplicite

Nonostante il linguaggio cerchi il più possibile di fare delle conversioni in automatico, è comunque consigliato fare delle conversioni esplicite per ridurre la possibilità di errori non previsti e mantenere un codice più chiaro.

Ad esempio si possono usare i costrutti `Number(), String(), Boolean()` per fare delle conversioni oppure i metodi `parseInt()`, `parseFloat()`.

Tutti i valori tranne `null` e `undefined` possiedono il metodo `toString()` per fare la conversione a una stringa che li rappresenta in qualche modo.

Un altro metodo è `valueOf()` che ogni oggetto possiede e il cui scopo è quello di restituire un valore di tipo primitivo che rappresenti l’oggetto su cui è chiamato il metodo.

## Const, let, var

Abbiamo tre `keyword` per dichiarare variabili e in nessuna di esse si specifica il tipo di dato, viene infatti determinato dall’interprete basandosi sulla sintassi dei valori che gli vengono assegnati.

- `const` usato per dichiarare costanti nel blocco di scope più stretto racchiuso tra `{}`, definito ***block scope***
    - Una variabile dichiarata `const` non può essere riassegnata.
    - Se la costante è un oggetto è comunque possibile modificare i suoi attributi interni (ad esempio negli array è possibile modificare i valori, aggiungere e togliere elementi ecc…).
- `let` usato per dichiarare variabili nel blocco di scope più stretto racchiuso tra `{}`, definito ***block scope***
    - Generalmente è il modo di dichiarazione preferito.
- `var` usato per dichiarare variabili nello scope della funzione, chiamato ***function scope***
    - Hanno un comportamento particolare detto *hoisting,* cioè vengono salvate nello scope come `undefined` prima di raggiungere la riga di dichiarazione, solamente quando l’esecuzione raggiunge la riga di dichiarazione allora la variabile assume il suo valore.
- Si può anche dichiarare variabili senza le keyword precedenti, semplicemente scrivendo il nome della variabile e assegnandogli un valore. In questo caso il suo scope sarà globale (anche se dichiarata all’interno di funzioni)

## Assegnamenti destrutturati

JavaScript supporta gli assegnamenti destrutturati, cioè un particolare tipo di assegnamento in cui a destra dell’uguale si ha un tipo strutturato (ad esempio un array o un oggetto) e sinistra si hanno un insieme di variabili. Quello che accade è che il valore strutturato di destra viene scomposto in più parti che vengono assegnate alle singole variabili.

```jsx
let [x,y] = [1,2];        // Same as let x=1, y=2
[x,y] = [x+1,y+1];        // Same as x = x + 1, y = y + 1
[x,y] = [y,x];            // Swap the value of the two variables
[x,y]                     // => [3,2]: the incremented and swapped values
```

Questa tecnica può tornare utile sul valore di ritorno delle funzioni e sui *for-loop*.

```jsx
let o = { x: 1, y: 2 };          // The object we'll loop over
for (const [name, value] of Object.entries(o)) {
     console.log(name, value);       // Prints "x 1" and "y 2"
}
```

Se si mettono troppe variabili a sinistra, esse verranno impostate ad `undefined`, mentre se sono troppo poche, i valori in eccedenza (a destra dell’assegnamento) più a destra verranno ignorati.

Si possono però raccogliere tutti i rimanenti valori in questo modo:

```jsx
let [x, ...y] = [1,2,3,4]; // y == [2,3,4]
```

## Null e undefined

Quando viene dichiarata una variabile senza assegnamento, assume il **tipo e il valore** `undefined`, che serve proprio a rappresentare la non inizializzazione. Quindi può essere interpretato come una mancanza di valore non prevista, o proprio un errore.

il valore `null` (che ha tipo `object`) invece rappresenta la mancanza intenzionale di un valore.

Entrambi sono codificati come valore booleano falso e sono valori distinti per l’operatore di uguaglianza `===`.

Su entrambi non è possibile invocare metodi.

## Infinity value

Operazioni aritmetiche non sollevano eccezioni in caso di *overflow*, *underflow* e divisione per zero, piuttosto viene usato il valore speciale `Infinity` oppure `-Infinity`.

## NaN (Not a number)

In casi particolari come `0/0` e altre operazioni particolari che non hanno un valore definito e viene assegnato un `NaN` (*Not a Number*).

Una caratteristica particolare di `NaN` è l’impossibilità di essere comparato con altri valori, per controllare che una variabile sia `NaN` si usa il metodo `Number.isNaN()`

## Il Global object

Esiste un particolare oggetto chiamato **Global object**, è un regolare oggetto che possiede delle proprietà accessibili globalmente.

Quando si carica un sito web viene creato questo oggetto che contiene costanti come `NaN` e `Infinity`, funzioni globali, costruttori globali, e oggetti globali come `Math` e `JSON`. 

Nei browser il global object è riferibile tramite la proprietà `window` oppure `globalThis`
