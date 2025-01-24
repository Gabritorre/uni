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
