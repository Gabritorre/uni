
# Introduzione a JavaScript

Javascript è un linguaggio **interpretato *general purpose* ad alto livello non tipato** principalmente utilizzato nel mondo web ma non solo, ambienti che interpretano JavaScript come Node.js permettono di utilizzare JavaScript anche fuori dai browser.

JavaScript di per sé definisce solo delle api base per gestire i tipi di dato come numeri, testi, array, insiemi ecc… Non include funzioni di **input e output**, infatti queste sono fornite dall’ambiente ospitante, che nel nostro caso è il browser (o in altri casi può essere Node.js).

## Espressioni e statement

Le **espressioni** sono del testo che viene **valutato** per **produrre un valore** di qualche tipo.

Le espressioni più semplici sono i letterali (*literal)*, operazioni matematiche (es. somma, sottrazione), operazioni aritmetiche (es. pre e post incremento), operazioni di confronto (es. maggiore, uguale), operazioni logiche (and, or). Tutte queste operazioni vengono valutate per produrre un output: numerico, booleano, testuale, ecc…

A basso livello le espressioni vengono salvate a *runtime* nella memoria *heap* sottoforma di blocco **indivisibile** nella forma: ****`|Tipo|Valore|`. Ad esempio il letterale `5` verrà salvato come `|Number|5|`.

Quando si assegna una espressione ad una variabile, ad esempio `let myVar = 5`, viene inserita una nuova informazione composta da `|"myVar"|Number|5|` in un grande dizionario contenente altri dati dello stesso *scope.*

Lo **scope** è il contesto (blocco di codice) in cui una variabile o una funzione è definita e accessibile. 

Il fatto che il nome della variabile sia salvato come stringa non è banale, infatti è possibile fare modifiche al nome della variabile oppure decidere il nome della variabile a *runtime*.

Lo **statement** è del testo che non produce un valore, ma altera lo stato dell’esecuzione, esempi di statement includono i cicli (`for`, `while`), i blocchi condizionali (`if`, `else`), le istruzioni `return`, `throw`, gli assegnamenti e le dichiarazioni di variabili o funzioni.

## Struttura lessicale

JavaScript è **case-sensitive**, cioè distingue tra lettere maiuscole e minuscole, quindi keyword e identificatori che differiscono anche solo per l'uso di lettere maiuscole o minuscole sono considerati nomi distinti.

JavaScript generalmente ignora gli spazi, le *new line* e le tabulazioni.

Supporta due stili di **commento**:

- il commento in-line con i caratteri `//`
- il commento multi-line con i caratteri `/* */`

I **letterali** (o *literal*) sono dei valori direttamente scritti nel codice, si oppongono ai valori derivanti dall’esterno (input utente, input da sensori, input da API, ecc…)

Gli **identificativi** che includono, nomi di variabili, nomi di funzioni, constanti ecc… devono iniziare con una lettera oppure un *underscore* (_) oppure un dollaro ($). Non possono quindi iniziare con un numero e devono essere diversi da parole chiave riservate.

Come *naming convention* per nomi di variabili e funzioni si usa il camel-case.

L’utilizzo del punto e virgola (`;`) per indicare la fine di uno *statement* è **opzionale**, anche se con particolari stili di programmazione aiuta a disambiguare la fine degli statement. Generalmente (ma ci sono dei casi particolari) JavaScript tratta un accapo come un punto e virgola solo quando non riesce a parsare il codice a meno di aggiungere un ‘;’

```jsx
let a
a
=
3
console.log(a)
```

Verrà interpretato da JavaScript come:

```jsx
let a; a = 3; console.log(a);
```

nonostante `a;` possa essere un valido statement, l'interprete cerca sempre di creare lo statement più grande che può.

Si possono creare situazioni inaspettate come con il seguente codice:

```jsx
let y = x + f
(a+b).toString()
```

Questo codice può essere interpretato correttamente sia come due righe distinte sia come una riga unica, il comportamento finale però è diverso.

Forse l’interpretazione pensata dallo sviluppatore è quella di due righe distinte ma l’interprete di JavaScript *parserà* il codice come segue:

```jsx
let y = x + f(a+b).toString();
```

In generale è quindi consigliato l’uso del punto e virgola per evitare comportamenti inaspettati.



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

In casi particolari come `0/0` e altre operazioni particolari che non hanno un valore definito, viene assegnato `NaN` (*Not a Number*).

Una caratteristica particolare di `NaN` è l’impossibilità di essere comparato con altri valori, per controllare che una variabile sia `NaN` si usa il metodo `Number.isNaN()`

## Il Global object

Esiste un particolare oggetto chiamato **Global object**, è un regolare oggetto che possiede delle proprietà accessibili globalmente.

Quando si carica un sito web viene creato questo oggetto che contiene costanti come `NaN` e `Infinity`, funzioni globali, costruttori globali, e oggetti globali come `Math` e `JSON`. 

Nei browser il global object è riferibile tramite la proprietà `window` oppure `globalThis`



# Espressioni

Le **espressioni** sono dei pezzi di codice che possono essere valutati per produrre un valore.

## Espressioni primarie

Le espressioni primarie sono il tipo di espressioni più semplici che non includono sotto-espressioni, essi sono i **letterali**, cioè dei valori scritti direttamente nel codice dal programmatore.

```jsx
1.23      // A number literal
"hello"   // A string literal
true      // Evalutes to the boolean true value
false     // Evaluates to the boolean false value
null      // Evaluates to the null value
this      // Evaluates to the "current" object
sum       // Evaluates to the value of the variable "sum" in the global object.
undefined // The value of the "undefined" property of the global object
```

## Espressioni di Inizializzazione di oggetti e array

Queste sono delle espressioni il cui valore ritornato è l’oggetto o l’array appena creato, spesso chiamati *object literals* e *array literals*. Non fanno parte delle espressioni primarie perché la loro creazione prevede delle sotto-espressioni per specificare proprietà e valori.

```jsx
[]             // An empty array: no expressions inside brackets means no elements
[1+2, 3+4]     // A 2-element array. First element is 3, second is 7
let matrix = [[1,2,3], [4,5,6], [7,8,9]];  // The element expressions in an array initializer can themselves be array initializers

let p = { x: 2.3, y: -1.2 };   // An object with 2 properties
let q = {};                    // An empty object with no properties
q.x = 2.3;
q.y = -1.2;                    // Now q has the same properties as p

let rectangle = {              // Object literals can be nested.
 upperLeft: { x: 2, y: 2 },
 lowerRight: { x: 4, y: 5 }
};
```

## Espressioni di definizione di funzioni

Come per gli oggetti e gli array, anche quando creiamo una funzione possiamo definirla una *function literals*, in quanto la definizione di una funzione produce un valore che è la funzione stessa.

```jsx
let square = function(x) { return x * x; };
```

In questo caso la funzione è una variabile e verrà definita quando l’interprete giunge alla riga di codice corrispondente.

Diverso è il comportamento dello *statement* di creazione di funzione:

```jsx
function square(x) { return x * x:}
```

in questo caso si ha il fenomeno di *hoisting,* cioè la funzione viene creata ancora prima di iniziare lo script nel quale è definita.

## Espressioni di accesso alle proprietà

Queste espressioni ritornano un valore corrispondente ad una proprietà di un oggetto oppure ad un elemento di un array.

Ci sono due sintassi per l’accesso alle proprietà:

```jsx
expression.identifier   // first style
expression[expression]  // second style
```

Nel primo stile, l’*expression* specifica l’oggetto mentre l’*identifier* specifica il nome della proprietà.

Nel secondo stile, la prima *expression* specifica l’oggetto o l’array, e la seconda *expression* specifica la proprietà dell’oggetto (usando una stringa) o l’indice dell’array (usando un intero)

```jsx
let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]];    // An example array that contains the object

o.x                        // => 1: property x of expression o
o.y.z                      // => 3: property z of expression o.y
o["x"]                     // => 1: property x of object o
a[1]                       // => 4: element at index 1 of expression a
a[2]["1"]                  // => 6: element at index 1 of expression a[2]
a[0].x                     // => 1: property x of expression a[0]
```

Se si accede ad una proprietà che non esiste verrà restituito un `undefined.`

### Accessi condizionali alle proprietà

Nelle ultime versioni di JS sono stati aggiunti due nuovi modi di accedere alle proprietà, chiamati **accessi condizionali**:

```jsx
expression?.identifier
expression?.[expression]
```

Se l’accesso alle proprietà diretto (quello visto precedentemente, senza `?`) viene tentato sui valori `null` e `undefined` verrà lanciato un `TypeError`, gli accessi condizionali prevengono questo comportamento.

Nell’espressione `a?.b` se `a` è `null` oppure `undefined`, l’espressione viene valutata come `undefined` senza tentare di accedere alla proprietà `b` (evitando quindi di lanciare il `TypeError`), se invece `a` è un qualche altro valore allora il comportamento è il medesimo dell’accesso diretto.

Vediamo un particolare comportamento concatenando gli accessi:

```jsx
let a = { b: null };
a.b                 // => null
a.b.c               // => TypeError
a.b?.c              // => undefined
(a.b?.c).d          // => TypeError
a.b?.c.d            // => undefined
```

Nota come appena si ha `null` o `undefined` sinistra dell’operatore `?.` viene fatto un “corto-circuito” e viene subito valutata l’espressione come `undefined` senza proseguire con la valutazione.

Il comportamento è del tutto analogo con l’operatore `?.[]`:

```jsx
let a;             // Oops, we forgot to initialize this variable!
let index = 0;
try {
   a[index++];     // Throws TypeError
} catch(e) {
   index           // => 1: increment occurs before TypeError is thrown
}
a?.[index++]       // => undefined: because a is undefined
index              // => 1: not incremented because ?.[] short-circuits
```

## Espressioni di invocazione

Questo tipo di espressione è data dall’invocazione di un metodo o una funzione:

```jsx
f(0)               // f is the function expression; 0 is the argument expression.
Math.max(x,y,z)    // Math.max is the function; x, y, and z are the arguments.
a.sort()           // a.sort is the function; there are no arguments.
```

Il valore generato dall’invocazione sarà il valore di ritorno della funzione, se non presente allora sarà `undefined`.

### Invocazione condizionale

Come per l’accesso alle proprietà anche per le funzioni esiste una invocazione condizionale con la sintassi `?.()`.

In questo caso se l’espressione a sinistra dell’operatore `?.()` è `null` oppure `undefined` al posto di essere lanciato un `TypeError`, l’intera invocazione viene valutata come `undefined:`

```jsx
function square(x, log) { // The second argument is an optional function
   log?.(x);              // Call the function if there is one
   return x * x;          // Return the square of the argument
}
```

## Espressioni di creazione di oggetti

Queste espressioni sono provocate dalla creazione di nuovi oggetti tramite l’invocazione di un particolare metodo chiamato *costruttore*.

```jsx
new Object()
new Point(2,3)
```

Il valore generato dall’espressione è l’oggetto appena creato.

## Espressioni di valutazione di stringhe (eval)

JavaScript ha la possibilità di interpretare delle stringhe come del codice, valutandolo e producendo di conseguenza un valore.

Questo viene fatto attraverso la funzione globale `eval()`

```jsx
eval("5*3" )  // => 15 
```

La funzione prende in input una stringa e tenta di fare un parsing in codice JavaScript, se ci riesce esegue poi il codice e ritorna l’ultima espressione (oppure `undefined`).

Il codice passato ad eval, può fare riferimento al codice locale JavaScript scritto in precedenza, permettendo così di leggere valori e anche modificarli.

L’uso di questa funzione può rappresentare un problema di sicurezza se si passa una stringa proveniente dallo user input in quanto è difficile sanitizzare completamente l’input.

Molti siti infatti utilizzano “Content-Security-Policy” nell’header HTTP per disabilitare l’uso della funzione `eval()`.



# Operatori

Il modo più comune per creare delle espressioni complesse è tramite l’utilizzo di **operatori**, cioè dei simboli che operano su dei valori e ne producono uno nuovo.

Gli operatori sono utilizzati per: espressioni aritmetiche, espressioni di confronto, espressioni logiche, espressioni di assegnamento, ecc…

Molti operatori sono rappresentati con simboli particolari (`+`, `=`, `>`, …), altri con delle *keyword* specifiche (`delete`, `instanceof`, …)

Analizziamo degli aspetti importanti che riguardano gli operatori.

## Numero di operandi

Gli operatori si possono categorizzare in base al numero di operandi su cui lavorano. La maggior parte degli operatori sono **operatori binari**, cioè che lavorano su due operandi. Ci sono anche **operatori unari** (`!` (*not* logico), `-` (simbolo di negazione), `++`, `--`, `typeof`) e un **operatore ternario** (`condizione ? valore_se_vero : valore_se_falso`)

## Tipi degli operandi

Alcuni operatori accettano un tipo di operandi qualsiasi, altri vogliono dei tipi particolari.

JavaScript tenta sempre di convertire un tipo sbagliato nel tipo che si aspetta.

Alcuni operatori però sono polimorfi, cioè si comportano in modo differente in base al tipo degli operatori (ad esempio l’operatore `+` può fare somma tra due numeri oppure la concatenazione tra stringhe)

## Precedenza degli operatori

Quando si concatenano più operatori, essi hanno una priorità di valutazione, ad esempio in espressioni aritmetiche la precedenza degli operatori e la classica precedenza matematica.

L’operatore di assegnamento tendenzialmente ha la priorità più bassa.

L’uso delle parentesi tonde può forzare la precedenza degli operatori.

**L’accesso a proprietà, l’accesso a elementi di array e le invocazioni di funzioni hanno un priorità più alta di tutti gli operatori.**

## Associatività

L’associatività descrive l’ordine di esecuzione con operatori di uguale priorità.

Possiamo avere una associatività *Left-to-right* oppure *Right-to-left.*

Ad esempio:

```jsx
w = x - y - z;    // Left-to-right: w = ((x - y) - z)
w = x && y && z;  // Left-to-right: w = ((x && y) && z)

w = a ** b ** c;  // Right-to-left: w = (a ** (b ** c))
w = x = y = z;    // Right-to-left: w = (x = (y = z));
```

## Tabella degli operatori

| Simbolo | Operazione | Associatività | Esempio |
| --- | --- | --- | --- |
| `+` | Addizione o concatenazione di stringhe | Left-to-right | `3 + 2 // 5`, `'a' + 'b' // 'ab'` |
| `-` | Sottrazione | Left-to-right | `3 - 2 // 1` |
| `*` | Moltiplicazione | Left-to-right | `3 * 2 // 6` |
| `/` | Divisione | Left-to-right | `6 / 2 // 3` |
| `%` | Modulo (resto della divisione) | Left-to-right | `5 % 2 // 1` |
| `**` | Esponenziale | Right-to-left | `2 ** 3 // 8` |
| `++` | Incremento | Right-to-left | `let a = 1; a++ // a = 2` |
| `--` | Decremento | Right-to-left | `let a = 2; a-- // a = 1` |
| `-` | Negazione unaria | Right-to-left | `-5 // -5` |
| `+` | Conversione in numero | Right-to-left | `+"5" // 5` |
| `!` | Negazione logica | Right-to-left | `!true // false` |
| `~` | Complemento a uno (NOT bit a bit) | Right-to-left | `~5 // -6` |
| `&&` | AND logico | Left-to-right | `true && false // false` |
| `||` | OR logico | Left-to-right | `true || false // true` |
| `??` | sceglie il primo operando definito | Left-to-right | `null ?? 'default' // 'default'` |
| `?:` | Operatore ternario (condizionale) | Right-to-left | `true ? 'yes' : 'no' // 'yes'` |
| `,` | Valuta ogni operando e restituisce il risultato dell'ultimo | Left-to-right | `let a = 1, 2; // a = 2` |
| `=` | Assegnazione | Right-to-left | `a = 5 // a = 5` |
| `+=` | Assegnazione con addizione | Right-to-left | `a += 5 // a = a + 5` |
| `-=` | Assegnazione con sottrazione | Right-to-left | `a -= 5 // a = a - 5` |
| `*=` | Assegnazione con moltiplicazione | Right-to-left | `a *= 5 // a = a * 5` |
| `/=` | Assegnazione con divisione | Right-to-left | `a /= 5 // a = a / 5` |
| `%=` | Assegnazione con modulo | Right-to-left | `a %= 5 // a = a % 5` |
| `**=` | Assegnazione con esponenziale | Right-to-left | `a **= 2 // a = a ** 2` |
| `==` | Uguaglianza debole (con conversione di tipo) | Left-to-right | `5 == '5' // true` |
| `===` | Uguaglianza stretta (senza conversione di tipo) | Left-to-right | `5 === '5' // false` |
| `!=` | Diversità debole | Left-to-right | `5 != '5' // false` |
| `!==` | Diversità stretta | Left-to-right | `5 !== '5' // true` |
| `>` | Maggiore di | Left-to-right | `5 > 3 // true` |
| `<` | Minore di | Left-to-right | `3 < 5 // true` |
| `>=` | Maggiore o uguale | Left-to-right | `5 >= 5 // true` |
| `<=` | Minore o uguale | Left-to-right | `5 <= 3 // false` |
| `&` | AND bit a bit | Left-to-right | `5 & 1 // 1` |
| `|` | OR bit a bit | Left-to-right | `5 | 1 // 5`  |
| `^` | XOR bit a bit | Left-to-right | `5 ^ 1 // 4` |
| `<<` | Shift a sinistra | Left-to-right | `5 << 1 // 10` |
| `>>` | Shift a destra | Left-to-right | `5 >> 1 // 2` |
| `>>>` | Shift a destra con estensione di zeri | Left-to-right | `-5 >>> 1 // 2147483645` |
| `in` | Verifica se una proprietà è in un oggetto, o se un indice è in un array | Left-to-right | `'length' in [] // true` |
| `instanceof` | Verifica se un oggetto è istanza di una funzione costruttore di una classe | Left-to-right | `[] instanceof Array // true` |
| `typeof` | Restituisce il tipo di una variabile | Right-to-left | `typeof 42 // 'number'` |
| `delete` | Elimina una proprietà da un oggetto o un elemento di un array (negli array viene lasciato un “buco”, non cambia la dimensione dell’array) | Right-to-left | `delete obj.key // true` |



# Statement

Gli statement, non producono un valore ma servono a eseguire un determinato comportamento.

Alcune espressioni che hanno dei *side effect* sono ritenute essere anche degli statement, l’assegnamento ne è un esempio.

Gli statement più comuni sono quelli che modificano il normale flusso di esecuzione del codice:

- `if` e `switch`
- `while` e `for`
- `break`, `return` e `throw`

Gli statement terminano con un `;`. È possibile racchiudere più statement in un blocco racchiuso tra parentesi graffe in modo che risulti uno statement unico:

```jsx
{
 x = Math.PI;
 cx = Math.cos(x);
 console.log("cos(π) = " + cx);
}
```

Questo viene utilizzano nelle istruzioni come `if` e cicli, i quali richiedono un singolo statatement, cosicché noi possiamo eseguire più sotto-statement in un singolo statement.

```jsx
if (expression) {   //statement1 which is a statement block
	sub-statement1;
	sub-statement2;
	sub-statement3;
}
else
 statement2
```

Possiamo avere anche uno statement vuoto:

```jsx
;
```

che può essere utilizzato ad esempio in cicli senza un *body*:

```jsx
// Initialize an array a
for (let i = 0; i < a.length; a[i++] = 0) ;
```

## for of

Il `for of` è un particolare tipo di ciclo for che torna utile con oggetti iterabili (come array, stringhe, mappe, insiemi, …) per ottenere i **valori** contenuti in tali oggetti.

### Utilizzo con array

```jsx
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let element of data) {
   sum += element;
}
sum        // => 45
```

Ad ogni iterazione un elemento dell’oggetto `data` viene inserito nella variabile `element`.

Il valore che viene scelto dipende dall’implementazione dell’iteratore, negli array vengono scelti in ordine dall’indice minore all’indice maggiore.

Gli array sono iterati al momento, cioè se all’interno del ciclo appendiamo elementi all’array possiamo andare in loop infinito.

### Utilizzo con oggetti

Gli oggetti non sono iterabili di default, tentare di utilizzare un `for of` risulterà in un `TypeError`. 

In alternativa si può utilizzare un metodo globale `Object.keys(obj)` su cui iterare:

```jsx
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o)) {
   keys += k;
}
keys // => "xyz"
```

`Object.keys(obj)` ritorna un array contenente i nomi delle proprietà dell’oggetto passato come parametro. Diversamente dagli array, in questo caso non viene iterato al momento, quindi aggiungere delle proprietà durante il ciclo non incide sull’iterazione.

Inoltre si può iterare sui valori dell’oggetto usando `Object.values(obj)`:

```jsx
let o = { x: 1, y: 2, z: 3 };
let sum = 0;
for (let v of Object.values(o)) {
   sum += v;
}
sum // => 6
```

Se invece si è interessati ad iterare le coppie chiave-valore si può utilizzare `Object.entries(obj)`:

```jsx
let o = { x: 1, y: 2, z: 3 };
let pairs = "";
for (let [k, v] of Object.entries(o)) {
 pairs += k + v;
}
pairs // => "x1y2z3"
```

## for in

Il `for in` è un particolare tipo di ciclo for che torna utile con oggetti anche non iterabili.

Il funzionamento è simile al `for of` ma questo ciclo itera attraverso le **proprietà** di un oggetto (tranne quelle marcate come non `enumerable`).

```jsx
for (let p in o) {     // Assign property names of o to variable p
   console.log(o[p]);  // Print the value of each property
}
```

Ad esempio possiamo inserire in un array tutti i nomi delle proprietà di un oggetto

```jsx
let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for (a[i++] in o) ;
```

Gli array sono un particolare tipo di oggetto, quindi si può usare `for in` anche su di loro, ottenendo così gli indici dell’array (e non i suoi valori, per quello va usato `for of`)

```jsx
for (let index in a)
   console.log(index);    //0 1 2
   
for (let element of a)
   console.log(element);   // x y z
```

## Etichettare gli statement

È possibile dare dei nomi (*label*) agli statement, ovviamente non è molto sensato dare nomi a statement singoli ma piuttosto a blocchi di statement.

```jsx
mainloop: while (token !== null) {
	 // ...
	 continue mainloop; // Jump to the next iteration of the named loop
	 // ...
}
```

Può essere utile dare nomi ai cicli quando ci sono dei cicli innestati e si vogliono utilizzare istruzioni come `break` o `continue` in riferimento al ciclo più esterno:

```jsx
// Label for the outer loop
outerLoop: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Exits both the inner and outer loop
        }
    }
}
```

## throw

lo statement `throw` ha la seguente sintassi

```jsx
throw expression;
```

Viene utilizzato per segnalare l’accadimento di un errore o una eccezione.

L’espressione lanciata può essere di qualsiasi tipo, da un numero che identifica l’errore ad una stringa che lo descrive.

JavaScript lancia degli errori automaticamente quando ne incontra uno e in particolare lancia oggetti appartenenti alla classe `Error`.

```jsx
function factorial(x) {
	 // If the input argument is invalid, throw an exception!
	 if (x < 0) throw new Error("x must not be negative");
	 
	 // Otherwise, compute a value and return normally
	 let f;
	 for (f = 1; x > 1; f *= x, x--) ;
	 return f;
}
factorial(4) // => 24
```

Quando viene fatto un `throw`, il normale flusso di esecuzione viene interrotto, e l’interprete salta al più vicino gestore di eccezioni. 

I gestori di eccezioni vengono creati con il costrutto `try-catch-finally`.

## try-catch-finally

il costrutto `try-catch-finally` serve per gestire le eccezioni:

- il blocco `try` definisce un insieme di statement dove può verificarsi un errore.
- il blocco `catch` è il codice che viene eseguito nel caso l’errore si verificasse.
- il blocco `finally` contiene del codice di pulizia che viene eseguito indipendentemente dal verificarsi dell’errore

```jsx
try {

} catch(e) {

} finally {

}
```

In combinazione con il codice del fattoriale precedente possiamo scrivere questo codice:

```jsx
try {
		 // Ask the user to enter a number
		 let n = Number(prompt("Please enter a positive integer", ""));
		 // Compute the factorial of the number, assuming the	input is valid
		 let f = factorial(n);
		 alert(n + "! = " + f); // Display the result
	}
	catch (ex) {    // If the user's input was not valid, we end up here
	   alert(ex);   // Tell the user what the error is
}
```

Si può mettere opzionalmente delle parentesi con un identificatore dopo il `catch` (nell’esempio è `ex`), questo identificatore conterrà l’errore.



# Oggetti

Gli oggetti in JavaScript sono una collezioni non ordinata di proprietà, in altre parole un **dizionario** (coppie chiave-valore, con chiavi univoche).

Le proprietà sono valori primitivi, altri oggetti, oppure metodi.

Un oggetto può ereditare delle proprietà da un altro oggetto, quest’ultimo viene chiamato il suo **prototipo** (*prototype*), quando un oggetto eredità delle proprietà di un altro oggetto si parla di ***prototypal inheritance***.

È possibile ottenere il prototipo di un oggetto in questi modi:

- `<Object>.prototype` : da usare con le classi
- `Object.getPrototypeOf(<obj>)`: da usare con gli oggetti
- `<obj>.__proto__` (deprecato)

È possibile verificare il *prototype* di un oggetto con il metodo `isPrototypeOf()` ad esempio:
`<Object>.prototype.isPrototypeOf(<obj>)`

Gli oggetti sono:

- **dinamici:** è quindi possibile aggiungere e rimuovere proprietà
- **mutabili**: è possibile modificare i valori al suo interno senza bisogno di creare un nuovo oggetto
- **Sono manipolati per reference** (shallow copy): assegnare un oggetto copia il suo riferimento, non fa un copia dei valori dell’oggetto.

Le proprietà di un oggetto possono avere degli attributi:

- `writable`: specifica se la proprietà può essere modificata
- `enumerable`: specifica se la proprietà può apparire all’interno di un ciclo `for-in` e se può essere restituita dalla chiamata a `Object.keys()`
- `configurable`: specifica se la proprietà può essere eliminata e se si possono modificare i suoi attributi

```jsx
const person = {
	age = 34, //proprietà 'age' come writable, configurable ed enumerable
};

// Definisco la proprietà 'nome' come writable, configurable e non-enumerable
Object.defineProperty(person, 'name', {
  value: 'Mario',
  writable: true,
  configurable: true,
});
```

Nota: di default gli attributi delle proprietà create direttamente con la creazione dell’oggetto sono tutti impostati a `true`. Mentre gli attributi delle proprietà definite con il metodo `Object.defineProperty()` sono impostate di default a `false`.

## Creazione degli oggetti

Gli oggetti possono essere creati in tre modi: con un oggetto letterale (*object literal*), con la `new` keyword e con il metodo `Object.create()`

### Object literal

```jsx
let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y+1 }; // More complex values
```

Tutti gli oggetti creati in questo modo avranno come **prototype** il prototipo dell’oggetto Object, in particolare `Object.prototype`.

### new operator

Si crea un oggetto con la keyword `new` seguita dall’invocazione di un costruttore.

```jsx
let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let e = new Date; // same as the previous line
```

Nota: non è obbligatorio usare le parentesi tonde se il costruttore non richiede parametri.

Tutti gli oggetti creati in questo modo avranno come **prototype** il prototipo del costruttore, ad esempio`Object.prototype` per l’oggetto `o`, `Array.prototype` per l’oggetto `a` e `Date.prototype` per l’oggetto `d`.

Nota che esiste la cosi detta ***prototype chain***, infatti tutti gli oggetti ereditano da `Object.prototype` e a loro volta possono estendere tale prototipo formando una catena di prototipi.

```jsx
class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// prototype chains:
// foo: Foo --> Object
// bar: Bar --> Foo --> Object
// baz: Baz --> Bar --> Foo --> Object
console.log(Baz.prototype.isPrototypeOf(baz));    // true
console.log(Baz.prototype.isPrototypeOf(bar));    // false
console.log(Baz.prototype.isPrototypeOf(foo));    // false
console.log(Bar.prototype.isPrototypeOf(baz));    // true
console.log(Bar.prototype.isPrototypeOf(foo));    // false
console.log(Foo.prototype.isPrototypeOf(baz));    // true
console.log(Foo.prototype.isPrototypeOf(bar));    // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

### Metodo Object.create()

In questo modo è possibile creare un nuovo oggetto specificando un prototipo da cui ereditare proprietà e metodi.

```jsx
let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
o1.x + o1.y // => 3
```

è possibile passare `null`, in questo caso si avrà un oggetto che non eredita nulla, nemmeno il prototipo di `Object`.

Alternativamente possiamo creare un oggetto come si farebbe con `{}` oppure `new Object()`

```jsx
let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().
```

## Accesso alle proprietà

Per **accedere alle proprietà** di un oggetto si usano due modi:

- `obj.property_name`
- `obj[”property_name”]`

L’accesso alle proprietà attraverso la sintassi con parentesi quadre, utilizza delle stringhe che possono essere manipolate da JavaScript, è quindi legale un codice del tipo:

```jsx
customer = {address0:"ciao", address1:"hello", address2:"hi"};
let addr = "";
for (let i = 0; i < 3; i++) {
 addr += customer["address" + i] + " ";
}
addr        // => "ciao hello hi "
```

Nell’esempio viene manipolata la stringa di accesso alle proprietà dell’oggetto `customer`, in modo da accedere con un ciclo ad `address0`, `address1`, `address2`.

### Prototype chain

Ogni oggetto ha delle proprie proprietà proprie (***own proprieties***) e delle proprietà ereditate dal prototipo.

Quando si tenta di accedere ad una proprietà viene prima cercata tra le *own proprieties*, se non viene trovata allora si scorre la *prototype chain:* si cerca quindi nel prototipo dell’oggetto e se non viene trovata e il prototipo ha a sua volta un prototipo allora viene cercato anche lì.

## Creazione delle proprietà

La stessa sintassi dell’accesso alle proprietà si può usare per **creare delle nuove proprietà**, se messe a sinistra di un assegnamento.

Se una proprietà con lo stesso nome è già presente nella *prototype chain* questa non viene sovrascritta, viene invece creata una nuova variabile come *own property* dell’oggetto, la quale “nasconde” la proprietà con lo stesso nome nella *prototype chain.*

```jsx
const proto = { 
  shared: "Sono nel prototipo",
};

const obj = Object.create(proto); // obj eredita da proto

obj.shared = "Sono nell'oggetto"; // Nasconde la proprietà del prototipo
obj.newProperty = "Proprietà propria dell'oggetto"; // Crea una nuova proprietà

console.log(obj.shared); // "Sono nell'oggetto"
console.log(obj.newProperty); // "Proprietà propria dell'oggetto"

```

## Cancellazione delle proprietà

Attraverso l’operatore `delete` è possibile eliminare proprietà da un oggetto

```jsx
delete book.author;        // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.
```

È importante precisare che l’operatore `delete` può cancellare **solo** le *own properties*, non quelle ereditate.

Per cancellare una proprietà del prototipo bisogna eseguire il `delete` sulla proprietà specificando il prototipo, ma così facendo tutti gli oggetti che ereditano da quel prototipo ne saranno affetti.

## Estendere oggetti

Una pratica comune è quella di copiare il contenuto di un oggetto in un altro, il metodo `Object.assign()` permette di farlo facilmente.

Il metodo `Object.assign(destination_obj, source_obj)` si aspetta almeno due argomenti, il primo è l’oggetto che verrà modificato (e anche ritornato), mentre gli altri sono oggetti da cui ricavare le proprietà.

In pratica ogni *own property enumerable* dell’oggetto sorgente viene copiata nell’oggetto destinazione. Le proprietà già esistenti nell’oggetto destinazione vengono sovrascritte.

Nota: eventuali metodi getter e setter vengono invocati durante la copia (ma non copiati essi stessi)

Nota: `Object.assign()` esegue una **shallow copy**, per una deep copy si usa il metodo `structuredClone()` che prende come parametro un oggetto e ritorna una copia.

Solamente con la creazione tramite gli *object literal*, è possibile utilizzare una sintassi particolare (`...`) per copiare le *own property enumerable* di un oggetto in un altro durante la sua creazione:

```jsx
let position = { x: 0, y: 0 };
let dimensions = { width: 10, height: 7 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height // => 17
```

Le proprietà degli oggetti `position` e `dimensions` vengono copiati nel nuovo oggetto `rect`

## Serializzazione degli oggetti

È possibile serializzare gli oggetti in modo da trasformarli in stringhe per poi successivamente de-serializzarli in oggetti.

Questo viene spesso fatto per scambiare le informazioni (come lo stato di un oggetto) nel web usando un formato comodo.

JavaScript mette a disposizione i seguenti metodi per lavorare con il formato **JSON** (*JavaScript Object Notation*):

- `JSON.stringify(obj)`: serializza lo stato dell’oggetto (**solo *own property enumerable***) in una stringa in formato JSON
- `JSON.parse(str)`: de-serializza una stringa in formato JSON in un oggetto JavaScript

```jsx
let o = {x: 1, y: {z: [false, null, ""]}};
let s = JSON.stringify(o); // s == '{"x":1,"y":{"z":[false,null,""]}}'
let p = JSON.parse(s);     // p == {x: 1, y: {z: [false, null, ""]}}
```

JSON supporta solo una parte della sintassi che JavaScript offre, ad esempio `NaN, -Infinity, +Infinity` vengono convertiti a `null`. Oggetti come `Function, RegExp, Error` vengono ignorati dalla serializzazione. Infine `undefined` viene ignorato dalla serializzazione.

## Metodi dell’oggetto Object

Vediamo alcuni metodi offerti dall’oggetto `Object`, da cui ogni altro oggetto eredita le proprietà.

1. `Object.hasOwnProperty(property)`
    - Verifica se l'oggetto ha una *own property* con il nome specificato, senza cercarla nella catena dei prototipi.
2. `Object.propertyIsEnumerable(property)`
    - Controlla se una proprietà specificata è enumerabile, cioè se appare nei cicli `for...in` e con `Object.keys()`.
3. `Object.create(prototype)`
    - Crea un nuovo oggetto con il prototipo specificato
4. `Object.keys(obj)`
    - Restituisce un array contenente i nomi delle *own property* **enumerabili** di un oggetto.
5. `Object.toString()`
    - Restituisce una rappresentazione in formato stringa dell'oggetto.
6. `Object.valueOf()`
    - Restituisce il valore primitivo che rappresenta l'oggetto.
7. `Object.toJSON()`
    - Restituisce una rappresentazione JSON dell'oggetto.

## Metodi

Abbiamo due modi di definire le proprietà come metodi:

1. modo originale:
    
    ```jsx
    let square = {
     area: function() { return this.side * this.side; },
     side: 10
    };
    square.area() // => 100
    ```
    
2. modo nuovo:
    
    ```jsx
    let square = {
     area() { return this.side * this.side; },
     side: 10
    };
    square.area() // => 100
    ```
    

I due modi sono equivalenti, su entrambi il nome della proprietà è “area”.

## Getter e setter

JavaScript supporta le così dette proprietà accessorie (*accessor properties*) che hanno due particolari metodi associati: un getter e/o un setter.

```jsx
let obj = {
  internal_value: 0,

  // Getter
  get value() {
    return this.internal_value;
  },

  // Setter
  set value(new_value) {
    if (typeof new_value === 'number') {
      this.internal_value = new_value;
    }
  },

  // Getter per nextVal
  get nextVal() {
    return this.internal_value + 1;
  }
};

obj.value = 10;      // Setter is used
console.log(obj.value);  // => 10, Getter is used
console.log(obj.nextVal); // => 11, Getter is used
```

Quando si tenta di ottenere il valore di una proprietà, l’interprete chiama il getter (se presente).

Quando si tenta di modificare il valore di una proprietà, l’interprete chiama il setter (se presente).

Se una proprietà ha solo un getter si dice che è una proprietà **read-only**, se ha solo il setter allora è **write-only** (la lettura restituisce un `undefined`)

**Attenzione**: se si da lo stesso identico nome ai metodi getter e setter e alla variabile, il codice andrebbe in ricorsione infinita, è convenzione pre-pendere un `_` prima del nome della variabile per indicare che è una variabile di uso interno all’oggetto.



# Array

Un array è un oggetto composto da una collezione ordinata di valori.

I valori sono chiamati **elementi**, e ogni elemento è in una determinata posizione chiamata **indice**.

Gli array sono degli **oggetti specializzati**: in quanto dietro le quinte sono un insieme di proprietà in cui il nome della proprietà è l’indice sotto forma di stringa, infatti possiamo creare manualmente un array in questo modo:

```jsx
let o = {};      // Create a plain object
o[1] = "one";    // Index it with an integer
o["1"]           // => "one"; numeric and string property names are the same
```

In JS un array può contenere valori di tipo qualsiasi.

Un aspetto particolare è che gli array possono essere **sparsi**, cioè ci possono essere dei buchi tra gli indici e non necessariamente il primo indice è 0. In questi array il campo `length` non corrisponde al numero reale di elementi nell’array.

Nota: le **stringhe** sono trattabili come **array read-only di caratteri**

## Creazione

Ci sono vari modi per creare array, in ogni modo gli array creati possiedono come prototype l’oggetto `Array.prototype` in cui ci sono molti metodi utili per operare sugli array.

### Array letterali

Il modo più semplici è quello di creare gli array come letterali:

```jsx
let empty = [];                 // An array with no elements
let primes = [2, 3, 5, 7, 11];  // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma
```

è possibile creare array sparsi in questo modo:

```jsx
let count = [1,,3]; // Elements at indexes 0 and 2. No element at index 1. length:3
```

Se si accede all’elemento con indice `1` si otterrà `undefined` (in generale questo accade quando si tenta di accedere ad una proprietà non esistente di un oggetto)

### Operatore di spread

Si può usare lo spread operator `...` per includere gli elementi di un oggetto iterabile (come un array) nella definizione di un array come letterale:

```jsx
let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]
```

Può essere usato per fare una **copia superficiale** (shallow copy) degli elementi (cioè se gli elementi sono oggetti verrà copiato solo il riferimento)

```jsx
let original = [1,2,3];
let copy = [...original];
copy[0] = 0;        // Modifying the copy does not change the original
original[0]         // => 1
```

### Costruttore Array()

Possiamo creare un array attraverso il costruttore `Array()`:

```jsx
let a = new Array();     // array with no elements
let a = new Array(10);   // array with the specified length (preallocate space)
let a = new Array(5, 4, "testing", true);  // array with some elements
```

### Array.of() e Array.from()

Usando il solo costruttore `Array()` non è possibile creare un array con un solo elemento numerico.

`Array.of()` è una funzione che ritorna un nuovo array con gli elementi specificati come argomento

```jsx
Array.of()       // => []; returns empty array with no arguments
Array.of(10)     // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3)  // => [1, 2, 3]
```

`Array.from()` è una funzione che si aspetta come argomento un oggetto iterabile e ritorna un nuovo array contenente gli elementi di quel oggetto

```jsx
let copy = Array.from(original);
```

Questa funzione è particolarmente importante perché permette di fare una vera copia degli oggetti **array-like**, cioè oggetti che non sono propriamente array ma che hanno una lunghezza e le proprietà hanno un nome numerico.

## Accesso agli elementi

Si accede agli elementi dell’array con l’operatore `[]`:

```jsx
let a = ["world"];     // Start with a one-element array
let value = a[0];      // Read element 0
a[1] = 3.14;           // Write element 1
let i = 2;
a[i] = 3;              // Write element 2
a[i + 1] = "hello";    // Write element 3
a[a[i]] = a[0];        // Write element 3
```

è possibile anche usare come indice numeri negativi, numeri con la virgola, stringhe… Questi verranno convertiti come stringhe e saranno dei nomi di proprietà valide.

È importante notare che però non verranno utilizzati come indici dell’array, ma solo come proprietà dell’oggetto

```jsx
a[-1.23] = true;  // This creates a property named "-1.23"
a["1000"] = 0;    // This the 1001st element of the array
a[1.000] = 1;     // Array index 1. Same as a[1] = 1;
```

## Proprietà length

Una differenza che distingue gli array dai normali oggetti JavaScript è la presenza di una proprietà `length`, che rappresenta il numero di elementi nell’array (solo con array non sparsi).

Tale proprietà viene calcolata come l’indice più grande trovato tra le proprietà a cui viene sommato 1.

Il valore di questo campo viene mantenuto aggiornato in automatico.

Se si aggiorna manualmente la proprietà `length` ad un valore minore dell’attuale, tutti gli elementi con indice maggiore o uguale a quello impostato vengono **eliminati**.

```jsx
a = [1,2,3,4,5];  // Start with a 5-element array.
a.length = 3;     // a is now [1,2,3].
a.length = 0;     // Delete all elements. a is [].
a.length = 5;     // Length is 5, but no elements, like new Array(5)
```

## Aggiungere e rimuovere elementi

Oltre ad aggiungere elementi esplicitandone l’indice è possibile usare:

- `push(element)`: aggiunge un elemento alla fine dell’array
- `unshift(element)`: aggiunge un elemento all’inizio dell’array e fa shift degli elementi di una posizione avanti

Analogamente possiamo rimuovere elementi usando:

- `pop()`: rimuove l’elemento alla fine dell’array
- `shift()`: rimuove l’elemento all’inizio dell’array e shifta gli elementi di una posizione indietro

Tutti i metodi mantengono coerente il valore di `length`

È anche possibile usare `delete` per cancellare elementi, ma così facendo non viene aggiornato `length` e non avviene nessuno shift (l’array diventa sparso).

## Iterare gli array

Il modo più semplice per iterare un array è tramite il ciclo `for of` che ritorna gli elementi con indice crescente:

```jsx
let letters = [..."Hello world"]; // An array of letters
let string = "";
for (let letter of letters) {
   string += letter;
}
string // => "Hello world"; we reassembled the original text
```

Si può utilizzare il metodo `entries()` per ottenere coppie indice-valore:

```jsx
let everyother = "";
for (let [index, letter] of letters.entries()) {
   if (index % 2 === 0) everyother += letter; // letters at even indexes
}
everyother    // => "Hlowrd"
```

Esiste anche un approccio più orientato alla programmazione funzionale usando il metodo `forEach()`. Questo metodo prende una funzione come argomento e tale funzione verrà chiamata su ogni elemento dell’array.

```jsx
let uppercase = "";
letters.forEach(letter => {    // Note arrow function syntax here
   uppercase += letter.toUpperCase();
});
uppercase // => "HELLO WORLD"
```

Generalmente le funzioni come `forEach()` invocano la funzione passata come argomento con 3 parametri: il **valore** dell’elemento, **l’indice** dell’elemento e **l’array stesso**. Nell’esempio viene data una funzione che richiede un solo parametro (`letter`).

Altri metodi per iterare array sono i seguenti:

| Metodo | Descrizione | Esempio |
| --- | --- | --- |
| `forEach()` | Esegue una funzione per ogni elemento dell'array, ma non restituisce un nuovo array. | `arr.forEach((val, idx) => console.log(val, idx));` |
| `map()` | Restituisce un nuovo array con i risultati della funzione applicata a ogni elemento dell'array. | `const doubled = arr.map(val => val * 2);` |
| `filter()` | Restituisce un nuovo array con tutti gli elementi che soddisfano una condizione. | `const evens = arr.filter(val => val % 2 === 0);` |
| `find()` | Restituisce il primo elemento che soddisfa una condizione, o `undefined` se nessun elemento la soddisfa. | `const firstEven = arr.find(val => val % 2 === 0);` |
| `findIndex()` | Restituisce l'indice del primo elemento che soddisfa una condizione, o `-1` se nessun elemento la soddisfa. | `const firstEvenIndex = arr.findIndex(val => val % 2 === 0);` |
| `every()` | Restituisce `true` se tutti gli elementi dell'array soddisfano una condizione, altrimenti `false`. | `const allPositive = arr.every(val => val > 0);` |
| `some()` | Restituisce `true` se esiste almeno un elemento che soddisfa una condizione, altrimenti `false`. | `const hasEven = arr.some(val => val % 2 === 0);` |

Nota: Nessuno di quei metodi modifica l’array originale di per sè

## Array multidimensionali

Si possono creare array multidimensionali come array di array, cioè dove gli elementi di un array sono a loro volta array:

```jsx
// Create a multidimensional array
let table = new Array(10); // 10 rows of the table
for (let i = 0; i < table.length; i++) {
	 table[i] = new Array(10); // Each row has 10 columns
}
// Initialize the array
for (let row = 0; row < table.length; row++) {
	 for (let col = 0; col < table[row].length; col++) {
		 table[row][col] = row*col;
	 }
}
// Use the multidimensional array to compute 5*7
table[5][7] // => 35
```

## Oggetti array-like

Gli oggetti **array-like** sono oggetti che non sono propriamente array ma che hanno una lunghezza e le proprietà hanno un nome numerico.

Tali oggetti non hanno come prototipo `Array.prototype` quindi non si possono chiamare i relativi metodi e nemmeno aspettarsi l’aggiornamento automatico di `length`.

D’altra parte molti algoritmi che funzionano sugli array funzionano anche sugli oggetti array-like a causa di come sono fatti.

In questo codice viene creato un oggetto normale e viene trattato come un oggetto array-like:

```jsx
let a = {}; // Start with a regular empty object

// Add properties to make it "array-like"
let i = 0
for (i = 0; i < 10; i++) {
	 a[i] = i * i;
}
a.length = i;

// Now iterate through it as if it were a real array
let total = 0;
for (let j = 0; j < a.length; j++) {
	 total += a[j];
}
```

Nella realtà molti metodi che interagiscono con pagine HTML ritornano oggetti array-like.



# Funzioni

Una **funzione** in JavaScript è un blocco di codice che viene definito una sola volta, ma può essere  invocato più volte. Le funzioni possono accettare un elenco di identificatori chiamati **parametri**, che fungono da variabili locali per la funzione. Quando si invoca una funzione, si possono fornire degli **argomenti** ai suoi parametri. Le funzioni possono terminare ritornando un valore, detto **valore di ritorno** (se non è specificato viene ritornato `undefined`).

Una funzione può accedere ai campi dell’oggetto che l’ha invocata con la keyword `this`.

Quando una funzione viene assegnata come proprietà di un oggetto, la funzione prende il nome di **metodo**.

Quando una funzione viene utilizzata per inizializzare un nuovo oggetto, la funzione prende il nome di **costruttore**.

Per JavaScript le funzioni sono oggetti, quindi:

- possono essere assegnate a variabili
- possono essere passate come argomento ad altre funzioni
- puoi definirci delle proprietà al suo interno
- puoi invocarci dei metodi

## Definire le funzioni

Vediamo vari modi per definire nuove funzioni.

Ci sono tre modi principali per definire le funzioni in JavaScript:

- Definizione come **dichiarazione:** Questo è il modo più diretto per definire una funzione. Si usa la parola chiave `function` seguita da:
    1. nome della funzione
    2. una lista di parametri tra parentesi
    3. il corpo della funzione tra parentesi graffe
    
    Le dichiarazioni di funzione sono *hoisted*, il che significa che possono essere invocate prima della loro dichiarazione nel codice.
    
    Esempio:
    
    ```jsx
    function distance(x1, y1, x2, y2) { 
        let dx = x2 - x1; 
        let dy = y2 - y1; 
        return Math.sqrt(dx*dx + dy*dy);
     } 
    ```
    
- Definizione come **espressioni:** la definizione come espressioni assomiglia alla dichiarazione, ma appare all’interno di un'espressione più ampia. Il nome della funzione è opzionale in questo caso.
    
    A differenza delle dichiarazioni, le espressioni di funzione non sono *hoisted* e devono essere definite prima di poter essere invocate.
    
    Esempio:
    
    ```jsx
    // Note that we assign it to a variable
    const square = function(x) { return x*x; }; 
    
    // Function expressions can include names, which is useful for recursion.
    const f = function fact(x) {
    	 if (x <= 1)
    		 return 1;
    	 else
    		 return x * fact(x - 1);
    }; 
    
    // Function expressions can also be used as arguments to other functions:
    [3,2,1].sort(function(a, b) { return a-b; });
    ```
    
- **Arrow function:** Introdotte in ES6, le *arrow function* sono **espressioni** che offrono una sintassi più compatta. Non usano la parola chiave `function` e il nome viene sempre omesso. La lista dei parametri è separata da una freccia `=>` dal corpo della funzione. Le *arrow function* ereditano il valore di `this` dall'ambiente in cui sono definite.
    
    
    Esempio:
    
    ```jsx
    const sum = (x, y) => { return x + y; };
    ```
    
    È possibile ridurre ulteriormente la sintassi nel caso in cui il corpo della funzione sia un singolo `return`:
    
    ```jsx
    const sum = (x, y) => x + y;
    ```
    
    Se la funzione ha esattamente un parametro si possono omettere le parentesi tonde. D’altra parte se non ci sono parametri bisogna mettere le parentesi tonde vuote:
    
    ```jsx
    const polynomial = x => x*x + 2*x + 3;
    const constantFunc = () => 42;
    ```
    

Le funzioni possono essere **innestate**, cioè definite nel corpo di altre funzioni.

Un aspetto particolare è che le funzione interne possono accedere ai parametri e variabili locali delle funzioni più esterne (questo aspetto è chiamato **chiusura**):

```jsx
function esterna(a, b) { 
		function interna() {
				return a*b;
		}
		return interna() 
 }
```

## Invocare le funzioni

Vediamo cinque modi in cui le funzioni JavaScript possono essere invocate.

### Invocazione come funzione

Questo è il modo più comune di invocare una funzione.

Un'espressione di invocazione consiste nel nome della funzione seguita da parentesi che racchiudono la lista di espressioni che vengono valutate e passate come argomento.

Il valore di ritorno della funzione diventa il valore dell'espressione di invocazione.

Il contesto di invocazione (il valore di `this`) è l'**oggetto globale**, ma in genere non viene utilizzato.

Esempio

```jsx
function distance(x1, y1, x2, y2) { 
    let dx = x2 - x1; 
    let dy = y2 - y1; 
    return Math.sqrt(dx*dx + dy*dy);
 }
 let total = distance(0,0,2,1) + distance(2,1,3,5);
```

é possibile fare anche una invocazione condizionale con la sintassi  `f?.(x)` che sarebbe equivalente a scrivere:

```jsx
 (f !== null && f !== undefined) ? f(x) : undefined
```

### Invocazione come metodo

Un metodo è semplicemente una funzione memorizzata come proprietà di un oggetto.

Si invoca un metodo usando la notazione col punto o le parentesi quadre per accedere alla proprietà corrispondente alla funzione.

Il contesto di invocazione in un'invocazione (il valore di `this`) è l'oggetto a cui appartiene il metodo.

Esempio:

```jsx
let calculator = { // An object literal 
	operand1: 1,
	operand2: 1,
	add() {
		 // Note the use of the "this" keyword to refer to the containing object. 
		 this.result = this.operand1 + this.operand2;
  }
};
calculator.add();  // A method invocation to compute 1+1.
calculator.result  // => 2
```

Un aspetto importante è che le funzioni innestate dentro i metodi non possono usare `this` per riferirsi all’oggetto che le contiene (questo non vale per le arrow function, le quali ereditano il valore di `this`):

```jsx
let o = {                 // An object o.            
		m: function() {       // Method m of the object. 
			 let self = this;   // Save the "this" value in a variable. 
			 this === o         // => true: "this" is the object o. 
			
			 f();               // call the nested function f();              
			 function f() {     // define the nested function f 
				  this === o      // => false: "this" is the global object
				  self === o      // => true: self is the outer "this" value. 
			 }
			
			 const f2 = () => {
				 this === o       // true, since arrow functions inherit this
		   };
	  }
 };
```

### Invocazione come costruttore

Se un'invocazione di funzione o metodo è preceduta dalla parola chiave `new`, si tratta di un'invocazione di costruttore. Le invocazioni di costruttore creano un nuovo oggetto inizializzandone anche i campi.

Le funzioni costruttore in genere non usano la parola chiave `return`.

Esempio:

```jsx
// the following two lines are equivalent
o = new Object();
o = new Object;
```

### Invocazione indiretta

I metodi `call()` e `apply()` consentono di invocare una funzione come se fosse un metodo di un altro oggetto.

Entrambi i metodi consentono di specificare esplicitamente il valore di this per l'invocazione.

`call()` accetta gli argomenti da passare alla funzione come argomenti separati, mentre `apply()` accetta un array di argomenti.

Esempio:

```jsx
function introduce(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

// Invocation with call()
introduce.call(person, "Hi", "!"); // Output: Hi, my name is Alice!

// Invocation with apply()
introduce.apply(person, ["Hi", "!"]); // Output: Hi, my name is Alice!
```

### Invocazione implicita

Alcune funzionalità del linguaggio JavaScript, come getter e setter, conversioni di tipo implicite e iteratori, possono causare l'invocazione implicita di funzioni.

## Argomenti e parametri

In Javascript, le definizioni delle funzioni non specificano un tipo previsto per i parametri, non viene eseguito alcun controllo di tipo sugli argomenti passati e non viene controllato nemmeno il numero di argomenti che vengono passati.

### Parametri opzionali e valori di default

Quando una funzione viene invocata con meno argomenti rispetto ai parametri dichiarati, quelli aggiuntivi vengono impostati sul loro valore di default, che normalmente è `undefined`.

È possibile definire un **valore di default** per ciascuno dei parametri della funzione direttamente nell'elenco dei parametri della funzione:

```jsx
function greet(name = "Guest", language = "en") {
    let greeting;

    if (language === "en") {
        greeting = `Hello, ${name}!`;
    }
    else if (language === "it") {
        greeting = `Ciao, ${name}!`;
    }
    else {
        greeting = `Hi, ${name}! (language not supported)`;
    }

    return greeting;
}
```

I valori di default si possono usare anche negli altri modi per definire le funzioni visti precedentemente.

### Parametri rest ed elenchi di argomenti di lunghezza variabile

Mentre i valori di default permettono di chiamare la funzione con meno argomenti di quelli richiesti, i **parametri *rest*** permettono di scrivere funzioni che possono essere invocate con un numero arbitrariamente maggiore di argomenti rispetto ai parametri.

Un parametro rest è preceduto da tre punti `...` e deve essere l'ultimo parametro in una dichiarazione di funzione.

Il valore di un parametro rest sarà sempre un **array**. L'array può essere vuoto, ma un parametro rest non sarà mai `undefined`

```jsx
function max(first=-Infinity, ...rest) { 
		let maxValue = first; // Start by assuming the first arg is the biggest 
		
		// Then loop through the rest of the arguments, looking for bigger 
		for (let n of rest) { 
				if (n > maxValue) { 
				maxValue = n; 
				} 
		} 

		return maxValue;
} 

max(1, 10, 100, 2, 3, 1000, 4, 5, 6)  // => 1000
```

### L’oggetto Arguments

I parametri rest sono stati introdotti nelle nuove versioni di JavaScript. Prima dei parametri rest, le funzioni che accettavano un numero arbitrario di parametri venivano scritte usando l'oggetto `Arguments`.

All'interno del corpo di una qualsiasi funzione, l'identificatore `arguments` si riferisce all'oggetto `Arguments` per quella chiamata. L'oggetto `Arguments` è un oggetto array-like che permette di recuperare i valori degli argomenti passati alla funzione tramite indice numerico.

### Destrutturazione degli argomenti di funzione nei parametri

Se si definisce una funzione che ha i nomi dei parametri tra parentesi quadre, si sta dicendo alla funzione di aspettarsi che venga passato un array per ogni parametro tra parentesi quadre.

Nel processo di invocazione, gli argomenti dell'array saranno destrutturati nei singoli parametri nominati.

```jsx
function vectorAdd([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters 
		return [x1 + x2, y1 + y2];
}
vectorAdd([1,2], [3,4])  // => [4,6]
```

Allo stesso modo, se si sta definendo una funzione che si aspetta un argomento oggetto, è possibile destrutturare i parametri di quell'oggetto.

```jsx
// Multiply the vector {x,y} by a scalar value
function vectorMultiply({x, y}, scalar) { 
		return {x: x*scalar, y: y*scalar};
}
vectorMultiply({x: 1, y: 2}, 2)  // => {x: 2, y: 4}
```

### Tipi degli argomenti

I parametri dei metodi Javascript non hanno tipi dichiarati e non viene eseguito alcun controllo di tipo sui valori passati a una funzione.

JavaScript esegue conversioni di tipo secondo le necessità. Quindi, se si scrive una funzione che si aspetta un argomento stringa e poi si chiama quella funzione con un valore di qualche altro tipo, il valore passato verrà convertito in una stringa quando dentro la funzione si cerca di usarlo come stringa.

È quindi buona pratica aggiungere del codice per controllare i tipi degli argomenti (usando `typeof` e l’operatore di confronto stretto `===`). È meglio che una funzione fallisca immediatamente con un errore chiaro, piuttosto che iniziare l'esecuzione e fallire in seguito con un messaggio di errore ambiguo.

## Funzioni come valori

In JavaScript le funzioni sono anche **valori** veri e propri. Questo significa che possono essere:

- **Assegnate a variabili:** Il nome della funzione diventa quindi solo un riferimento all’oggetto funzione.
- **Memorizzate in proprietà di oggetti:** in questo caso la chiamiamo "metodo".
- **Inserite in array:** le funzioni possono essere elementi di un array.
- **Passate come argomenti ad altre funzioni:** Questo permette di creare funzioni generiche e flessibili.

```jsx
function square(x) { return x*x; }
let s = square;  // Now s refers to the same function that square does
square(4)        // => 16
s(4)             // => 16
```

```jsx
let a = [x => x*x, 20];  // An array literal containing a function and 20
a[0](a[1])               // => 400
```

### Definire Proprietà nelle Funzioni

Essendo oggetti, le funzioni possono avere anche **proprietà** al loro interno. Questo è utile per memorizzare informazioni statiche che devono persistere tra diverse chiamate alla funzione.

Un semplice esempio è la funzione utilizza una **proprietà counter** per tenere traccia dell'ultimo intero restituito, garantendo che ogni chiamata restituisca un valore univoco:

```jsx
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;  

function uniqueInteger() { 
		return uniqueInteger.counter++;
}
uniqueInteger()    // => 0
uniqueInteger()    // => 1
```

## Funzioni come Namespace

Un *namespace* è un modo per organizzare il codice in gruppi logici, evitando collisioni di nomi tra variabili e funzioni globali.

Poiché le variabili dichiarate all'interno di una funzione non sono visibili all'esterno, le funzioni possono essere usate per creare *namespace* temporanei.

### Funzioni Anonime e IIFE

È possibile utilizzare una **funzione anonima** e invocarla immediatamente. Questa tecnica è chiamata "*immediately invoked function expression*" (IIFE) e si usa la seguente sintassi:

```jsx
(function() {
		// Chunk of code goes here
}());          // End the function literal and invoke it now.
```

Le parentesi attorno alla definizione della funzione sono necessarie per farla interpretare come espressione, e le parentesi finali servono per invocarla subito.

L'uso delle IIFE è diventato meno comune con l'introduzione dei **moduli** in JavaScript.

## Chiusure

Le funzioni JS hanno uno scope lessicale, questo significa che **quando vengono eseguite utilizzano lo scope di quando sono state definite** e non solo lo scope di quando vengono invocate.

Quindi una funzione oltre ad includere il proprio codice deve anche mantenere un riferimento allo scope in cui la funzione era stata definita.

Questo concetto si chiama **chiusura**.

Tutti le funzioni JavaScript sono tecnicamente chiusure, ma la loro vera utilità si manifesta quando vengono invocate da un scope diverso da quello in cui sono state definite, come nel caso di funzioni annidate.

Vediamo un esempio:

```jsx
let scope = "global scope";          // A global variable
function checkscope() { 
		let scope = "local scope";       // A local variable
		function f() { return scope; }   // Return the the local scope variable
		return f;
}
let inner_func = checkscope();
inner_func()                    // => "local scope"
```

La funzione `checkscope()` restituisce una funzione annidata `f`. Anche se `f()` viene invocata al di fuori di `checkscope()`, accede comunque alla variabile `scope` nel suo ambiente di definizione originale.

Vediamo un altro esempio, per una funzione che incrementa un contatore. Al posto di avere il contatore come una proprietà interna alla funzione (che chiunque potrebbe modificare) usiamo una funzione con uno scope privato:

```jsx
function createCounter() {
	 let value = 0;
	 return function() {
		 return value++;
	 };
}
 
let uniqueInteger = createCounter();
uniqueInteger();  // => 0
uniqueInteger();  // => 1
uniqueInteger();  // => 2
```

In questo caso viene creata una funzione `createCounter()` che restituisce una nuova funzione. La funzione restituita ha un proprio stato privato contenente la variabile `value`. In questo modo la variabile (che è una funzione) `uniqueInteger` ha un accesso esclusivo alla variabile `value` (nessuno da fuori può modificare il valore del counter interno)

Un altro esempio molto comune è il seguente, in cui si vuole associare una funzione al verificarsi di un evento su un componente HTML.

Ad esempio se abbiamo due bottoni e vogliamo che uno incrementi un contatore e l’altro bottone che lo decrementi possiamo sfruttare le chiusure per farlo su un variabile condivisa `counter`:

```jsx
function setupCounterHandlers() {
    let counter = 0; // Variabile privata nella closure

    // Incrementa il counter
    document.getElementById("incrementBtn").addEventListener("click", function () {
        counter++;
    });

    // Decrementa il counter
    document.getElementById("decrementBtn").addEventListener("click", function () {
        counter--;
    });
}

// Inizializza gli event listener
setupCounterHandlers();
```

Quando i bottoni verranno premuti verranno eseguite le funzioni interne che fanno l’incremento/decremento.

Le chiusure offrono quindi i **vantaggi** di:

- **Stato privato:** Le chiusure possono essere utilizzate per creare uno stato privato per le funzioni.
- **Condivisione di stato tra le chiusure:** Più chiusure definite nello stesso scope possono condividere l'accesso alle stesse variabili private.



# Classi

In JavaScript una classe è un insieme di oggetti che ereditano delle proprietà dallo stesso oggetto prototype.

Non sono quindi dei template che rappresentano il tipo degli oggetti, come avviene nei linguaggi orientati agli oggetti.

Vediamo diversi modi per creare classi in JavaScript.

## Primo modo: factory function

Voglio costruire una classe di oggetti che rappresentano un range di valori.

Ricordiamo che un modo per creare nuovi oggetti era usare `Object.create(my_prototype)`.

Se costruiamo un nostro prototype e una funzione (generalmente riferita come *factory function*) che sfrutta `Object.create()` per creare nuovi oggetti a partire dal nostro prototype abbiamo creato una classe.

```jsx
 // This is a factory function that returns a new range object.
 function range(from, to) { 
		// Use Object.create() to create an object that inherits from the 
		// prototype object defined below. The prototype object is stored as 
		// a property of this function
		let r = Object.create(range.methods); 
		
		// Store the start and end points of this new range object. 
		// These are noninherited properties that are unique to this object.
		r.from = from; 
		r.to = to; 
	
		return r;
 } 

// This prototype object defines methods inherited by all range objects.
range.methods = {
		// Return true if x is in the range, false otherwise 
		includes(x) { return this.from <= x && x <= this.to; }, 
		
		// Return a string representation of the range
		toString() { return "(" + this.from + "..." + this.to + ")"; }
 }; 

// Here are example uses of a range object.
let r = range(1, 3);      
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
```

Nell’esempio viene definita una funzione `range` che crea nuovi oggetti.

Dato che la funzione range è a sua volta un oggetto, possiamo aggiungere alla funzione un campo `methods` in cui definire il prototype degli oggetti che verranno creati. Nota che `methods` è a sua volta un oggetto in cui vengono definiti dei campi (in particolare dei metodi) che ogni oggetto creato con prototype `methods` condividerà.

Vediamo quindi come gli **oggetti ereditano direttamente da altri oggetti**.

## Secondo modo: costruttore

Questo modo è quello che veniva utilizzato prima dell’introduzione della keyword `class`.

Il **costruttore** è una funzione che si occupa di inizializzare gli oggetti appena creati.

I costruttori invocati con la keyword `new` creano automaticamente un nuovo oggetto, quindi nel corpo del costruttore è solo necessario inizializzare i campi.

È importante sottolineare che tra tutti gli oggetti **solamente le funzioni possiedono un campo chiamato** `prototype` **che contiene l’oggetto prototype**, che viene usato quando la funzione viene invocato con un `new` per impostare il prototype del nuovo oggetto creato. Mentre gli oggetti che non sono funzioni hanno un prototipo interno ma non hanno un campo `prototype`.

Voglio costruire una classe di oggetti che rappresentano un range di valori.

```jsx
// This is a constructor function.
// Note that it does not create or return the object. It just initializes 'this'.
function Range(from, to) { 
	// Store the start and end points of this new range object. 
	// These are noninherited properties that are unique to this object. 
	this.from = from;
	this.to = to;
} 

// All Range objects inherit from the following object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = { 
	// Return true if x is in the range, false otherwise 
	includes: function(x) { return this.from <= x && x <= this.to; }, 
	
	// Return a string representation of the range 
	toString: function() { return "(" + this.from + "..." + this.to + ")"; }
}; 

// Here are example uses of this new Range class
let r = new Range(1,3);
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
```

Nota come il costruttore per convenzione si indica con l’iniziale maiuscola.

L’oggetto viene creato sul `new`, e nel costruttore ci possiamo riferire all’oggetto tramite la keyword `this`.

Possiamo pensare che il **nome del costruttore sia il nome della classe**.

### Instanceof

`Instanceof` è un operatore che alla sua sinistra ha un oggetto e a destra un costruttore (che in un certo senso da il nome alla classe).

Serve per testare l’appartenenza di un oggetto ad una classe:

```jsx
r instanceof Range   // => true: r inherits from Range.prototype
```

l’appartenenza non deve necessariamente essere diretta: cioè se `r` eredita da un oggetto, che a sua volta eredita da `Range.prototype` verrà valutata comunque come `true`.

Siccome si guarda il prototype del costruttore e non il costruttore in sè, anche il seguente caso restituisce `true`:

```jsx
 function Strange() {}
 Strange.prototype = Range.prototype;
 
 s = new Strange();
 s instanceof Range   // => true
```

## Terzo modo: keyword class

Questo è il modo moderno per fare le classi.

Nonostante il leggero cambio di sintassi il funzionamento alla base non cambia rispetto ai modi precedenti, la keyword `class` è solo un zucchero sintattico completamente equivalente al secondo modo con il costruttore che abbiamo visto.

```jsx
class Range { 
    constructor(from, to) { 
        // Store the start and end points of this new range object. 
        // These are noninherited properties that are unique to this object. 
        this.from = from; 
        this.to = to; 
    } 
 
    // Return true if x is in the range, false otherwise  
    includes(x) { return this.from <= x && x <= this.to; } 
 
    // Return a string representation of the range 
    toString() { return `(${this.from}...${this.to})`; }
} 
 
// Here are example uses of this new Range class
let r = new Range(1,3);
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
```

In questo caso il corpo della classe contiene il costruttore e i campi aggiuntivi del prototype che avranno gli oggetti.

È importante sottolineare che “costructor” è il nome obbligatorio per indicare il costruttore ma non è il vero e proprio nome della funzione costruttore, questo perché viene creata automaticamente una variabile chiamata come la classe, in questo caso `Range`, e gli viene assegnata la funzione costruttore. Quindi si può invocare il costruttore sempre chiamando `new Range()`.

Nota che la dichiarazione di una classe in questo modo non è *hoisted*, non è quindi possibile istanziare un oggetto della classe prima di aver dichiarato la classe.

## **Metodi Statici**

Un **metodo statico** (o metodo di classe) viene definito all'interno di una classe utilizzando `static` prima della dichiarazione del metodo.

I metodi statici definiti nella classe non vanno a finire dentro l'oggetto prototype, quindi gli oggetti di tale classe non avranno tali metodi nel loro prototype.

Per invocare i metodi statici bisogna passare attraverso la classe stessa (il suo costruttore).

Per esempio:

```jsx
class Range { 
    constructor(from, to) { 
        // Store the start and end points of this new range object. 
        // These are noninherited properties that are unique to this object. 
        this.from = from; 
        this.to = to; 
    } 
 
    // Return true if x is in the range, false otherwise  
    includes(x) { return this.from <= x && x <= this.to; } 
 
    // Return a string representation of the range 
    toString() { return `(${this.from}...${this.to})`; }
    
		static parse(s) {
		    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
		    if (!matches) {
		        throw new TypeError(`Cannot parse Range from "${s}".`)
		    }
		    return new Range(parseInt(matches), parseInt(matches));
		}
} 

let r = Range.parse('(1...10)'); // Returns a new Range object
r.parse('(1...10)');             // TypeError: r.parse is not a function
```

## **Campi di una classe**

Se si vuole **definire un campo** di classe, si può fare nel costruttore (tecnica vecchia) oppure nel corpo della classe assieme ai metodi (tecnica nuova).

```jsx
class Buffer { 
		size = 0; 
		capacity = 4096; 
		buffer = new Uint8Array(this.capacity);
}
```

Nota che le inizializzazioni vengono comunque fatte all’interno di un costruttore implicito.

È comunque necessario usare `this` quando si vuole accedere ai campi.

È possibile anche definire **campi privati**, i cui nomi iniziano con `#`.

Questi campi sono **utilizzabili solo all'interno del corpo della classe**, e quindi inaccessibili per qualsiasi codice al di fuori del corpo della classe.

```jsx
class Buffer { 
		#size = 0; 
		capacity = 4096; 
		buffer = new Uint8Array(this.capacity);
		
		get size() { return this.#size; }  // read-only getter
}
```

Anche i **campi** possono essere **statici** e si comporteranno come i metodi statici, cioè si accedono tramite la classe.

## Sottoclassi

Se si vuole definire una classe come sottoclasse di un’altra si può usare la keyword `extends`

```jsx
// A Span is like a Range, but instead of initializing it with
// a start and an end, we initialize it with a start and a length
class Span extends Range { 
	constructor(start, length) { 
		if (length >= 0) { 
			super(start, start + length); 
		}
		else { 
			super(start + length, start); 
		} 
	}
}
```

In questo caso `Span` si dice **sottoclasse**, mentre `Range` si dice **superclasse**.

Le istanze di `Span` ereditano i metodi di `Range`. Inoltre `Span` può definire altri metodi e sovrascrivere quelli ereditati.

La keyword `super` viene utilizzata per invocare il costruttore della superclasse, inoltre in caso in cui dei metodi siano stati sovrascritti, utilizzando `super` si può invocare la versione del metodo della superclasse.

Note su `super`:

- Se si definisce una classe con `extends`, il costruttore della sottoclasse **deve** usare `super()` per invocare il costruttore della superclasse.
- Se non si definisce un costruttore nella sottoclasse, ne verrà definito automaticamente uno che prende i valori passati e li passa a `super()`.
- Non si può usare `this` nel costruttore prima di aver invocato `super()`.
- Quando si usa `super()` all'interno del costruttore di una sottoclasse, il costruttore della superclasse vedrà il costruttore della sottoclasse come valore di `new.target`.

### new.target

`new.target` è una espressione utile all’interno dei costruttori, essa assume valori diversi in base al tipo di invocazione:

- è `undefined` se la funzione viene invocata **senza** il `new`, quindi come funzione normale e non come costruttore
- è il **riferimento al costruttore** quando viene invocato con `new`
- è il **riferimento al costruttore della sottoclasse** quando viene invocato con `super`

```jsx
class Base {
  constructor() {
    if (new.target === Base) {
      throw new Error("La classe 'Base' non può essere direttamente istanziata.");
    }
    console.log("Costruttore chiamato da una sottoclasse.");
  }
}
```

Nota: con la definizione di classe con la keyword `class` non è possibile invocare il costruttore senza `new`, quindi `new.target` potrà assumere il valore `undefined` solo nei modi vecchi di creare classi.

## **Differenze tra un linguaggio orientato agli oggetti e JavaScript**

1. **significato di classe**
    
    In JavaScript una classe è un insieme di oggetti che ereditano delle proprietà dallo stesso oggetto prototype.
    
    Non sono quindi dei template che rappresentano il tipo degli oggetti, come avviene nei linguaggi orientati agli oggetti.
    
2. **Le Funzioni sono Campi**
    
    In JavaScript, un oggetto ha solo campi e anche le funzioni sono trattate come campi.
    
    Le funzioni stesse sono oggetti, dove i parametri sono campi.
    
3. **Ereditarietà Basata su Prototipi**
    
    In JavaScript non esistono classi vere e proprie che fungono da template per gli oggetti.
    
    Gli oggetti ereditano direttamente da altri oggetti tramite il **meccanismo dei prototipi**.
    
    Nei linguaggi OOP, invece, l'ereditarietà è basata su classi.
    
4. **Modificabilità Dinamica degli Oggetti e dei prototipi**
    
    In OOP, gli oggetti sono istanze di una classe che definisce il loro **tipo**.
    
    In JavaScript, gli oggetti possono essere modificati dinamicamente a runtime aggiungendo o rimuovendo proprietà e metodi.
    
    Analogamente anche i **prototipi** in JavaScript possono essere modificati dinamicamente a runtime, permettendo di alterare l'ereditarietà anche dopo la creazione dell'oggetto.
    
5. **Mancanza di Overloading dei Metodi**
    
    In JavaScript non è possibile effettuare l'**overload** dei metodi, ovvero definire più metodi con lo stesso nome ma con un numero o tipo diverso di parametri.
    
    Se si ridefinisce un metodo con lo stesso nome, l'ultima definizione sovrascrive le precedenti.



# Iteratori e generatori

Alcuni oggetti come Array, stringhe, Set, Map sono iterabili, cioè il loro contenuto può essere ottenuto attraverso un ciclo `for/of` 

```jsx
let sum = 0;
for (let i of [1, 2, 3]) {  
		sum += i;
}
sum   // => 6
```

Abbiamo anche visto come espandere un oggetto iterabile con l’operatore di spread `...` 

```jsx
let chars = [..."abcd"]; // chars == ["a", "b", "c", "d"]
```

## Come funzionano gli iteratori

Gli **Oggetti iterabili** sono oggetti come Array, Set e Map che possono essere iterati, ovvero i loro contenuti possono essere "visitati" in sequenza. Questi oggetti hanno un metodo speciale chiamato **iterator method** che restituisce un **Iteratore**.

Un **iteratore** è un oggetto che esegue l'iterazione, ha un metodo `next()` che restituisce un nuovo oggetto con proprietà `value` e `done`. La proprietà `value` contiene il valore dell'iterazione corrente, mentre `done` è un booleano che indica se tutti gli elementi dell’iterable sono stati visitati.

Il metodo per ottenere l’iteratore è `Symbol.iterator`.

Il ciclo `for/of` e l'operatore spread utilizzano internamente questo meccanismo per iterare sugli oggetti:

```jsx
let iterable = [1, 2, 3, 4];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); result.done === false; result = iterator.next()) { 
	console.log(result.value)
}
```

Il ciclo `for` continua a chiamare il metodo `next()` dell'iteratore finché `result.done` non diventa `true`, stampando il valore di `result.value` a ogni iterazione.

I **Symbol** in JavaScript sono un tipo di dato primitivo. Un Symbol è un valore unico e immutabile che può essere utilizzato come chiave per le proprietà di un oggetto.

```jsx
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false
```

`Symbol.iterator` è un Symbol predefinito nel linguaggio.

## Creare oggetti iterabili

Per rendere una classe iterabile bisogna creare un metodo `Symbol.iterator` che ritorna un oggetto iterator il quale possiede il metodo `next()` che ritorna un oggetto con i campi `value` e `done`

Vediamo un esempio:

```jsx
/* A Range object represents a range of numbers [from, ..., to]
Range is iterable and iterates all integers within the range.
*/
class Range {
	constructor(from, to) { 
			this.from = from; 
			this.to = to; 
	}
	
	// Make a Range iterable by returning an iterator object. 
		[Symbol.iterator]() {
			// Each iterator instance must iterate the range independently of 
			// others. So we need a state variable to track our location in the 
			// iteration. We start at the first integer >= from. 
			let next_val = Math.ceil(this.from);  // This is the next value we return 
			let last = this.to;               // We won't return anything > this 
			
			return {                     // This is the iterator object 
					// This next() method is what makes this an iterator object. 
					next() { 
						return (next_val <= last) ? { value: next_val++ } : { done: true };
					}, 
					// As a convenience, we make the iterator itself iterable. 
					[Symbol.iterator]() { return this; } 
			};
		}
} 

let r = new Range(1, 10);
for (let x of r)
		console.log(x);        // Logs numbers 1 to 10

[...new Range(-2,2)]       // => [-2, -1, 0, 1, 2]
```

Nota: in generale se vogliamo utilizzare un valore dinamico o un'espressione come chiave di un oggetto o di un metodo, dobbiamo racchiuderlo tra `[]`. Questo vale anche per i Symbol, che non sono stringhe, ma tipi primitivi:

```jsx
const dynamicKey = "greet";
const obj = {
  [dynamicKey]: "Hello"
};

console.log(obj.greet); // => "Hello"
// se avessimo omesso le [], avremmo dovuto fare obj.dynamicKey
```

Oltre al metodo `next()`, in un iteratore si può definire anche il metodo `return()`, il cui scopo è quello di gestire la **pulizia e il rilascio di risorse** quando l'iterazione non viene completata fino alla fine.

Ad esempio se l’iteratore sta leggendo mano a mano il contenuto da un file, e il ciclo di iterazione venisse interrotto improvvisamente da un `return`, `break`, o una exception, l’interprete va a cercare il metodo `return()` e lo chiama.

## Generatori

Un **generatore** è un tipo di iteratore particolarmente utile quando gli elementi da iterare sono il risultato di una computazione.

Per creare un generatore bisogna creare una *generator function*, cioè una normale funzione solamente scritta con `function*`.

Quando viene invocata la *generator function* non viene eseguito il suo corpo, ma viene ritornato un oggetto generatore, che altro non è che un iteratore.

Chiamare il metodo `next()` del generatore, implica che viene eseguito il corpo della *generator function* fino a che non raggiunge un `yield` statement, che possiamo paragonare ad un `return`, e il valore dello `yield` sarà il valore inserito nel campo `value` dell’oggetto ritornato dalla `next()`.

Quando verrà chiamato nuovamente `next()` l’esecuzione ripartirà dal punto in cui si era fermata nella precedente chiamata.

```jsx
// A generator function that yields the set of one digit primes.
function* oneDigitPrimes() {
    yield 2; 
    yield 3;
    yield 5; 
    yield 7;
 } 
 
// When we invoke the generator function, we get a generator
let gen = oneDigitPrimes(); 
 
// A generator is an iterator object that iterates the yielded values
 gen.next().value          // => 2
 gen.next().value          // => 3
 gen.next().value          // => 5
 gen.next().value          // => 7
 gen.next().done           // => true 

// Generators have a Symbol.iterator method to make them iterable
gen[Symbol.iterator]()    // => gen

// We can use generators like other iterable types
[...oneDigitPrimes()]        // => [2,3,5,7]

let sum = 0;
for (let prime of oneDigitPrimes())
	 sum += prime;
sum                          // => 17
```



# JavaScript nel browser

JavaScript è stato pensato fin dall’inizio per introdurre dei comportamenti dinamici nei browser, con il passare degli anni i browser sono diventati delle piattaforme capaci di ospitare ogni tipo di applicazione web, includendo features grafiche, video, audio, animazioni, storage, networking, ecc…

Vediamo come sono strutturate le pagine web e come JavaScript riesce ad interagire con esse.

## JavaScript in HTML

Le pagine web sono scritte in HTML, per includere codice JavaScript in queste pagine si utilizza il tag `<script> </script>` inserendo il codice direttamente tra i due tag, oppure mettendo l’indirizzo del file JavaScript nell’attributo `src`.

```html
<script src="scripts/my_script.js"></script>
```

Al tag `<script>` è anche possibile aggiungere gli attributi booleani `defer` e `async` (che funzionano solamente quando lo script viene ottenuto usando `src`):

- `defer`: attende che il documento HTML sia stato completamente caricato e renderizzato prima di eseguire lo script.
    
    più script con attributo `defer` vengono eseguiti nell’ordine in cui appaiono nel documento
    
- `async`: esegue lo script appena possibile e contemporaneamente viene caricato e renderizzato l’HTML
    
    più script con `async` vengono eseguiti nell’ordine in cui vengono caricati (quindi non necessariamente viene seguito l’ordine in cui appaiono nel documento)
    

È importante sottolineare che più script possono vedere e usare funzioni, classi, costanti e variabili create dagli altri script, quindi è come se tutti gli script appartenessero ad uno script più grande che li contiene tutti.

## DOM

Il **Document Object Model (DOM)** rappresenta il documento HTML attualmente caricato e visualizzato nel browser. Fornisce anche un insieme di API che permettono di interagire e manipolare la struttura, lo stile e il contenuto del documento HTML.

I documenti HTML contengono una serie di tag innestati che formano una struttura ad albero.

Il DOM rispecchia questa struttura, creando un oggetto JavaScript corrispondente ad ogni tag HTML. Ad esempio il tag `<body>` è rappresentato dalla classe `HTMLBodyElement`.

Le DOM API includono metodi per creare nuovi elementi e inserirli all’interno dell’albero come figli di altri elementi, analogamente ci sono metodi per spostare e rimuovere elementi dall’albero. Tutte le modifiche avvengono in tempo reale nella pagina web.

## Global object

Per ogni tab del browser c’è un singolo *global object* condiviso tra tutti gli script importati dalla pagina web.

Il global object è dove la standard library è definita. All’interno di tale oggetto è anche presente la proprietà `document`, che contiene la struttura della pagina web, e la proprietà `window` il cui valore è l’oggetto globale stesso, che contiene il `document` come una sua proprietà interna (`window.document`).

## Esecuzione degli script

Possiamo dividere l’esecuzione in due fasi:

1. la prima consiste nel caricamento della pagina e l’esecuzione degli script, in questi ultimi spesso si modifica la pagina web, si definiscono classi e funzioni ma, più importante, si impostano dei **gestori di eventi**, cioè delle funzioni che vengono invocate in risposta ad un input utente (oppure tramite timer, attività in rete, caricamento di risorse, al verificarsi di errori, …)  
2. nella seconda fase il codice JavaScript viene invocato tramite il verificarsi di eventi specificati nella prima fase.

due particolari eventi sono:

- `DOMContentLoaded`: si triggera quando il documento html è caricato
- `load`: si triggera quando le risorse esterne del documento sono caricate

Spesso si utilizzano questi due eventi per poi impostare altri eventi sulla pagina interamente caricata.

## Eventi

Il browser è in grado di generare degli eventi quando determinate cose accadono, ad esempio quando il cursore dell’utente va sopra qualche elemento, quando viene premuto un tasto sulla tastiera ecc…

Con JavaScript è possibile far invocare una o più funzioni quando accade un evento specifico.

Vediamo alcune terminologie specifiche legate agli eventi:

- ***Event type* / *Event name**:* è una stringa che specifica il tipo di evento, ad esempio “mouseover”, “keydown”, “load”.
- ***Event target**:* è l’elemento della pagina web a cui viene associato l’evento, ad esempio un `<button>`
- ***Event handler* / *Event listener**:* è la funzione che viene eseguita quando un determinato evento si verifica su un determinato target.
    
    Questa funzione non ha un ritorno e nel suo body si può riferire al target con `this` (non per le arrow function).
    
- ***Event object***: è un oggetto che rappresenta l’evento e che viene passato come argomento alla funzione, questo oggetto contiene delle proprietà specifiche per l’evento che possono essere utilizzate dalla funzione.

## Registrare gli event listener

Ci sono due modi per registrare degli event listener:

1. aggiungere un attributo direttamente nell’elemento HTML o sull’oggetto JS corrispondente
2. usare il metodo `addEventListener()` (tecnica preferibile)

### 1 aggiungere gli attributi

In questo modo si assegna la funzione ad una particolare proprietà, per convenzione le proprietà sono scritte tutte in minuscolo e sono formate da “on” seguito da un nome specifico per l’evento: `onclick`, `onchange`, `onload`.

```jsx
// Set the onload property of the Window object to a function.
// The function is the event handler: it is invoked when the document loads.
window.onload = function() { 
	// Look up a <form> element 
	let form = document.querySelector("form#shipping"); 
	// Register an event handler function on the form that will be invoked 
	// before the form is submitted. 
	form.onsubmit = function(event) { // When the user submits the form 
		if (!isFormValid(this)) {       // assume isFormValid is defined
			event.preventDefault();       // if form input was invalid prevent submission
		} 
	};
};
```

In questo esempio sono stati aggiunti due event linstener rispettivamente agli eventi `onload` e `onsubmit`.

Con questo modo ogni *event target* può avere associato al massimo una funzione per tipo di evento.

Si può direttamente scrivere codice JavaScript in risposta ad un evento mettendolo direttamente nel tag HTML:

```html
<button onclick="console.log('Thank you');">Please Click</button>
```

### 2 Usare il metodo addEventListener

Questa tecnica è preferibile perché isola completamente il codice HTML dal codice JavaScript e permette di assegnare **più listener ad un stesso tipo di evento nello stesso target**.

Ogni oggetto che può essere il target di un evento possiede un metodo `addEventListener` che prende 3 argomenti:

1. una stringa che rappresenta il tipo di evento
2. la funzione che deve essere invocata quando si triggera l’evento
3. (opzionale) un booleano oppure un oggetto contenente dei booleani per configurare l’evento più nel dettaglio:
    - se si specifica direttamente `true` è equivalente a mettere solamente `capture` a `true`
    - altrimenti si crea un oggetto contenente le seguenti proprietà:
        - `capture`:
            - `true`: Evento sarà ascoltato prima dai listener più esterni del target (dalla radice del DOM al target specifico).
            - `false` (default): Evento viene ascoltato prima dal target e poi risale l’albero del DOM.
        - `once`:
            
            Se `true`, il listener verrà eseguito **solo una volta**, e poi sarà automaticamente rimosso.
            
    

```html
<button id="mybutton">Click me</button>
<script>
  let b = document.querySelector("#mybutton");
  b.addEventListener("click", () => { console.log("Thanks again!"); });
</script>
```

In modo simmetrico esiste il metodo `removeEventListener` che prende gli stessi parametri e serve a rimuovere un event listener.

## Propagazione degli eventi (bubbling)

Quando un evento viene triggerato su un particolare elemento della pagina, il segnale si propaga attraverso l'albero del DOM, partendo dall'elemento **target** e **risalendo verso i suoi genitori** fino alla radice del documento (`document`).

Questo processo è chiamato **event bubbling**.

Si può interrompere la propagazione chiamando `stopPropagation()`.

Si può sfruttare questo comportamento per registrare degli eventi su un target più generale in comune, piuttosto che registrare tanti eventi su target singoli (ad esempio registrare l’evento “change” direttamente sul form piuttosto che su ogni elemento interno al form).

## Selezione degli elementi HTML

Tramite l’oggetto `document`, che rappresenta la pagina HTML, si può selezionare un determinato elemento nella pagina, creare ed eliminare elementi, modificarne gli attributi, attraversare genitori, figli e fratelli degli elementi, ecc...

L’oggetto document possiede i campi `head` e `body` per selezionare i rispettivi tag HTML `<head>` e `<body>`, ma mette a disposizione metodi per ottenere elementi in vari modi:

- `querySelector()` e `querySelectorAll()` permettono di selezionare elementi che possiedono uno specifico ***CSS selector*** (il nome del tag, l’id o la classe CSS)
    
    ```jsx
    // Find the document element for the HTML tag with attribute id="spinner"
    let spinner = document.querySelector("#spinner"); //return the first occurrence
     
    // Find all Element objects for <h1>, <h2>, and <h3> tags
    let titles = document.querySelectorAll("h1, h2, h3"); //return all occurrences
    ```
    
    Nota: querySelectorAll ritorna un oggetto array-like, quindi navigabile con gli indici e anche con il ciclo for-of.
    
- `getElementById`, `getElementsByName`, `getElementsByTagName`, `getElementsByClassName`
    
    ```jsx
    // Look up an element by id. The argument is just the id, without #
    let sect1 = document.getElementById("sect1"); 
     
    // Look up all elements (such as form checkboxes) that have a name="color" attribute.
    let colors = document.getElementsByName("color"); 
    
    // Look up all <h1> elements in the document.
    let headings = document.getElementsByTagName("h1"); 
    
    // Look up all elements that have class "tooltip."
    let tooltips = document.getElementsByClassName("tooltip"); 
    ```
    
    Nota l’uso della ‘s’ su `Elements` per suggerire che viene ritornato un oggetto array-like con tutti gli elementi selezionati.
    

È anche possibile invocare tali metodi su un elemento specifico invece che su `document`, in questo modo gli elementi ottenuti saranno solo quelli figli dell’elemento specificato.

## Attraversamento del documento

Dopo aver selezionato l’elemento di interesse possiamo voler navigare l’albero a partire da quel nodo, ad esempio visitando il padre, i figli e i fratelli.

Possiamo fare questa navigazione tramite delle proprietà presenti negli elementi:

- `parentNode`: si riferisce all’elemento padre
- `children`: contiene la lista degli elementi figli
- `childElementCount`: il numero di elementi figli (equivalente a `children.length`)
- `firstElementChild`, `lastElementChild`: contengono rispettivamente il primo elemento figlio e l’ultimo (sono `null` se non ci sono figli)
- `nextElementSibling`, `previousElementSibling`: contengono rispettivamente il successivo elemento fratello e il precedente (sono `null` se non ci sono fratelli)

```jsx
// Recursively traverse the Document or Element e, invoking the function
// f on e and on each of its descendants
function traverse(e, f) { 
		f(e);                              // Invoke f() on e 
		for (let child of e.children) {    // Iterate over the children 
				traverse(child, f);            // And recurse on each one 
		}
}
```

Tutte queste proprietà escludono nodi testuali presenti in HTML, tuttavia se si seleziona un elemento è possibile ottenere il testo che contiene, in 4 modi diversi:

```html
<div id="ciao">Ciao <span style="display:none;">Mondo</span></div>
<script>
    let a = document.getElementById("ciao");
    console.log("innerText:", a.innerText);     // "Ciao"
    console.log("textContent:", a.textContent); // "CiaoMondo"
    console.log("innerHTML:", a.innerHTML);     // "Ciao <span style="display:none;">Mondo</span>"
    console.log("outerHTML:", a.outerHTML);     // Output: "<div id="ciao">Ciao <span style="display:none;">Mondo</span></div>"
</script>
```

- `innerText`: Restituisce il **testo visibile** all'interno dell'elemento, escludendo gli elementi nascosti (ad esempio quelli con `display: none`).
- `textContent`: Restituisce tutto il testo contenuto nell'elemento, **incluso il testo nascosto** (ma senza i tag HTML).
- `innerHTML`: Restituisce l'intero contenuto HTML interno dell'elemento, **compresi i tag**.
- `outerHTML`: Restituisce l’intero contenuto HTML compreso l’elemento stesso, **compresi i tag**.

## Manipolare gli attributi

I tag HTML posso avere degli attributi che definiscono meglio il loro comportamento, ad esempio il tag `<a>` per inserire dei link nella pagina, utilizza l’attributo `href` per specificare la destinazione del link.

In JavaScript si possono manipolare anche questi attributi attraverso dei metodi:

- `getAttribute()`: ottenere un attributo
- `setAttribute()`: impostare un attributo
- `hasAttribute()`: testare l’esistenza di un attributo
- `removeAttribute()`: rimuovere un attributo

```html
<a id="myLink" href="https://www.example.com" target="_blank">Example</a>
<button id="updateLink">Aggiorna Link</button>
<button id="removeTarget">Rimuovi Target</button>

<script>
	const link = document.getElementById("myLink");
	const updateButton = document.getElementById("updateLink");
	const removeButton = document.getElementById("removeTarget");
	
	console.log(link.getAttribute("href")); // => "https://www.example.com"
	
	updateButton.addEventListener("click", () => {
	    link.setAttribute("href", "https://www.google.com");
	    console.log(link.getAttribute("href")); // => "https://www.google.com"
	});
	
	removeButton.addEventListener("click", () => {
	    if (link.hasAttribute("target")) {
	        link.removeAttribute("target");
	    }
	});
</script>
```

Alcuni attributi dei tag HTML hanno un nome che è riservato in JavaScript, ad esempio l’attributo `class` in JavaScript diventa `className`.

In particolare l’attributo `class` in HTML è una stringa che contiene una serie di classi CSS separate da spazi. È comune su JavaScript voler aggiungere o rimuovere una singola classe agevolmente senza maneggiare l’intera stringa.

Per questo esiste la proprietà `classList` su cui è possibile chiamare i metodi:

- `add()`: per aggiungere una classe
- `remove()`: per rimuovere una classe
- `contains()`: per verificare l’esistenza di una classe
- `toggle()`: per rimuovere se già presente o aggiungere se non presente

```html
<div id="box" class="square"></div>
<button id="addClass">Aggiungi Classe</button>
<button id="removeClass">Rimuovi Classe</button>

<script>
const box = document.getElementById("box");
const addBtn = document.getElementById("addClass");
const removeBtn = document.getElementById("removeClass");

addBtn.addEventListener("click", () => box.classList.add("border"));
removeBtn.addEventListener("click", () => box.classList.remove("square"));
</script>
```

## Modificare la struttura del documento

L’oggetto `document` fornisce dei metodi per creare nuovi elementi, e ogni elemento ha dei metodi per inserire, eliminare e rimpiazzare i nodi nell’albero.

È possibile creare nuovi elementi utilizzando il metodo `createElement()` e successivamente aggiungere altri elementi figli all'inizio o alla fine di questi ultimi tramite i metodi `prepend()` e `append()`, che servono rispettivamente per aggiungere contenuti all'inizio o alla fine.

Se si desidera inserire qualcosa in una posizione specifica, è necessario ottenere il riferimento a un nodo e utilizzare i metodi `before()` e `after()`.

```html
<div id="container">
    <p>Paragrafo iniziale</p>
</div>

<script>
const container = document.getElementById("container");

const newParaBefore = document.createElement("p");
newParaBefore.textContent = "Before";

const newParaAfter = document.createElement("p");
newParaAfter.textContent = "After";

const newParaPrepend = document.createElement("p");
newParaPrepend.textContent = "Prepend";

const newParaAppend = document.createElement("p");
newParaAppend.textContent = "Append";

const original = container.firstElementChild;
original.before(newParaBefore);     // Aggiungi prima del parafrafo iniziale
original.after(newParaAfter);       // Aggiungi dopo il paragrafo iniziale
container.prepend(newParaPrepend);  // aggiungi come primo elemento del container
container.append(newParaAppend);    // aggiungi come ultimo elemento del container
</script>
```

Risultato:

```html
<div id="container">
    <p>Prepend</p>
    <p>Before</p>
    <p>Paragrafo iniziale</p>
    <p>After</p>
    <p>Append</p>
</div>
```

È possibile rimuovere un elemento con il metodo `remove()` ed è possibile rimpiazzarlo con il metodo `replaceWith()`

```html
<div id="container">
    <p>Paragrafo da eliminare</p>
    <p>Paragrafo iniziale</p>
</div>

<script>
const container = document.getElementById("container");

const newParaReplace = document.createElement("p");
newParaReplace.textContent = "Questo paragrafo sostituisce il paragrafo iniziale";

container.firstElementChild.remove();
container.firstElementChild.replaceWith(newParaReplace);
</script>
```

Risultato:

```html
<div id="container">
    <p>Questo paragrafo sostituisce il paragrafo iniziale</p>
</div>
```



# SVG e canvas

## SVG

**SVG** (*Scalable Vector Graphics*) è un formato di immagine, dove le immagini sono descritte da file di testo utilizzando il linguaggio XML contenenti gli step per rappresentare la grafica (differentemente da formati come PNG e JPEG che specificano valori di una matrice di pixel).

le SVG possono essere integrate in HTML in tre modi:

1. usando il tag `<img>` inserendo un file con estensione `.svg`
2. integrare le istruzioni XML direttamente nel codice HTML usando il tag `<svg>`
3. usare delle API per modificare dinamicamente elementi SVG e crearne di nuovi da capo

```html
<p>This is a red square: <svg width="10" height="10">
    <rect width="10" height="10" fill="red" />
</svg>
```

## Canvas

**Canvas**, d'altra parte, crea una superficie di disegno all'interno del documento ed espone un'API di disegno a JavaScript. Un canvas si crea con il tag `<canvas>` e tramite JavaScript si può ottenere il canvas, e poi ottenere il contesto (tramite `getContext()`) per poi disegnare la grafica.

```html
<p>This is a red square: <canvas id="square" width=10 height=10></canvas>
<script>
	let canvas = document.querySelector("#square");  // Get first canvas element
	let context = canvas.getContext("2d");           // Get 2D drawing context
	context.fillStyle = "#f00";                      // Set fill color to red
	context.fillRect(0,0,10,10);                     // Fill a square
</script>
```

## Differenze tra SVG e Canvas:

SVG è più adatto per immagini vettoriali scalabili e interattive, mentre Canvas è più indicato per grafica raster, manipolazione di pixel e visualizzazioni dinamiche di dati.

- **Modalità di disegno:** Con Canvas, si creano disegni **chiamando metodi**, mentre con SVG si crea un **albero di elementi XML**.
- **Scalabilità:** Le immagini SVG sono scalabili senza perdita di qualità, mentre le immagini create con Canvas possono diventare sfocate se ingrandite.
- **Modificabilità:** Gli elementi SVG possono essere facilmente modificati o rimossi dal loro albero, mentre in Canvas, le modifiche spesso richiedono di cancellare l'intero disegno e ridisegnarlo.
- **Creazione:** Gli elementi SVG possono essere inclusi direttamente in HTML o creati dinamicamente con il DOM API. Canvas viene creato con l'elemento `<canvas>` e il suo contenuto viene disegnato tramite l'API JavaScript.
- **Grafica 3D:** Canvas supporta anche la grafica 3D tramite WebGL. SVG non ha supporto nativo per la grafica 3D.




