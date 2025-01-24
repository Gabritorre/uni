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
