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
