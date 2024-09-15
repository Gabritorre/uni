# Tipi di dato e valori

I tipi di JavaScript possono essere divisi in due categorie:

- Tipi primitivi: sono i tipi classici, quindi stringhe, numeri e boolean
    - Ci sono anche due valori speciali, `null` e `undefined` che fanno parte dei tipi primitivi
- Tipi oggetto (o *reference type*): sono tipi più complessi, un oggetto possiamo immaginarlo come una collezione di proprietà dotate di nome e valore (ad esempio, `Set`, `Map`, `Error`, array, dizionari, …)
    - Anche **funzioni** e **classi** sono un particolare tipo di oggetto.

JavaScript ha un garbage collector integrato, quindi quando delle variabili non sono più raggiungibili si arrangia a deallocarle.

JavaScript supporta una stile di programmazione orientato agli oggetti, sia i tipi primitivi che i tipi oggetto possono comportarsi come degli oggetti e quindi invocare dei metodi su di loro (`null` e `undefined` sono l’unica eccezione).

## Immutabilità

I tipi primitivi sono immutabili, mentre i tipi oggetti sono mutabili.

quindi quando si vuole modificare un tipo primitivo si fa sempre un nuovo assegnamento creando un nuovo valore.

quindi ogni volta che viene invocato un metodo su una stringa quel metodo restituirà una nuova stringa e non modifica se stessa.

## Type conversion

JavaScript esegue delle conversioni di tipo in modo automatico, ad esempio se un programma si aspetta una stringa ma gli viene passato un intero viene convertito da solo.

Gli **operatori sono polimorfi**, quindi cambiano il loro comportamento in base ai tipi dei valori, un esempio è sommare una stringa ad un numero che genererà il risultato come una stringa concatenata al numero (il quale è stato convertito in stringa)

Da qui nasce la differenza tra l’eguaglianza con *type conversion* (`==`) e quella senza (`===`).

quindi l’operatore `==` esegue una conversione per “avvicinare” il più possibile i tipi tra loro e poi fa il confronto, comportamento che può portare ad errori.

mentre l’operatore `===` esegue un confronto diretto sui tipi (questo è il confronto voluto nella maggior parte dei casi).

Nota che anche `===` sugli oggetti effettua un confronto `shallow` sui riferimenti, non vengono confrontate le proprietà degli oggetti.

## Const, let, var

Abbiamo tre `keyword` per dichiarare variabili e in nessuna viene specificato il tipo di dato, viene determinato dall’interprete quando gli vengono assegnati dei valori in base alla loro sintassi.

- `const` usato per dichiarare costanti nel blocco di scope più stretto racchiuso tra `{}`
    - Una variabile dichiarata `const` non può essere riassegnata.
    - Se la costante è un oggetto è comunque possibile modificare i suoi attributi interni (ad esempio negli array è possibile modificarci i valori, aggiungere e togliere elementi ecc…).
- `let`  usato per dichiarare variabili nel blocco di scope più stretto racchiuso tra `{}`
    - Generalmente è il modo di dichiarazione preferito.
- `var` usato per dichiarare variabili nello scope della funzione
    - Hanno anche un comportamento particolare detto *hoisting* cioè vengono salvate nello scopo come `undefined` ancora prima di raggiungere la riga di dichiarazione. È quindi possibile accedere alla variabile ancora prima di raggiungere la sua dichiarazione (conterrà comunque `undefined` finche non viene raggiunta la riga di inizializzazione)
- Si può anche dichiarare senza le keyword precedenti, semplicemente scrivendo il nome della variabile e assegnandogli un valore. In questo caso il suo scope sarà globale (anche se dichiarata all’interno di funzioni)

## Null e undefined

Quando viene dichiarata una variabile senza assegnamento, assume il **tipo e il valore** `undefined`, che serve proprio a rappresentare la non inizializzazione. Quindi può essere interpretato come una mancanza di valore non prevista, o proprio un errore.

il valore `null` (che ha tipo `object`) invece rappresenta la mancanza di un valore voluta.

Entrambi sono codificati come valore booleano falso e sono valori distinti per l’operatore di uguaglianza `===`.

Su entrambi non è possibile invocare metodi.

## Infinity value

Operazioni aritmetiche non sollevano eccezioni in caso di *overflow*, *underflow* o divisione per zero, piuttosto viene usato il valore speciale `Infinity` oppure `-Infinity`.

## NaN (Not a number)

Un caso particolare però è `0/0` (e altre operazioni particolari) che non ha un valore definito e viene quindi assegnato un `NaN` (*not a number*)

Una caratteristica particolare di `NaN` è l’impossibilità di essere comparato con altri valori, per controllare che una variabile sia NaN si usa il metodo `Number.isNaN()`

## Il Global object

Esiste un particolare oggetto chiamato **Global object**, è un regolare oggetto che possiede delle proprietà accessibili globalmente.

Quando si carica un sito web viene creato questo oggetto che contiene costanti come `NaN` e `Infinity`, funzioni globali, costruttori globali, e oggetti globali come `Math` e `JSON` 

Nei browser il global object è riferibile tramite la proprietà `window` oppure `globalThis`
