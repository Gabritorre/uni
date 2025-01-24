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

Vediamo le regole lessicali degli elementi basilari di JavaScript.

JavaScript è **case-sensitive**, cioè distingue tra lettere maiuscole e minuscole,, quindi keyword e identificatori che differiscono anche solo per l'uso di lettere maiuscole o minuscole sono considerati nomi distinti.

JavaScript generalmente ignora gli spazi, le *new line* e le tabulazioni.

Supporta due stili di **commento**:

- il commento in-line con i caratteri `//`
- il commento multi-line con i caratteri `/* */`

I **letterali** (o *literal*) sono dei valori direttamente scritti nel codice, si oppongono ai valori derivanti dall’esterno (input utente, input da sensori, input da API, ecc…)

Gli **identificativi**, che includono nomi di variabili, nomi di funzioni, constanti ecc… devono iniziare con una lettera oppure un *underscore* (_) oppure un dollaro ($). Non possono quindi iniziare con un numero e devono essere diversi da parole chiave riservate.

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
