# Introduzione a JavaScript

Javascript è un linguaggio **interpretato general purpose ad alto livello non tipato** principalmente utilizzato nel mondo web ma non solo, ambienti che interpretano JavaScript come Node.js permettono di utilizzare JavaScript anche fuori dai browser.

JavaScript di per sé definisce solo delle api base per gestire i tipi di dato come numeri, testi, array, insiemi ecc… Non include funzioni di **input e output**, infatti queste sono fornite dall’ambiente ospitante, che nel nostro caso è il browser (ma in altri casi può essere Node.js).

## Espressioni

Le **espressioni** sono del testo che viene **valutato** per **produrre un valore** di qualche tipo.

Le espressioni più semplici sono i *literal*, operazioni matematiche (es somma, sottrazione) ma ci anche particolari operazioni aritmentiche (es. pre e post incremento), operazioni di confronto (es. maggiore, uguale), operazioni logiche (and, or). Tutte queste operazioni vengono valutate per produrre un output: numerico, di verità, testuale, ecc…

A basso livello le espressioni vengono salvate a runtime nella memoria *heap* sottoforma di blocco **indivisibile** `|Tipo|Valore|` , ad esempio il letterale `5` verrà salvato come `|Number|5|`.

Quando si assegna una espressione ad una variabile, ad esempio `let my_var = 5` viene inserita una nuova informazione composta da `|"my_var"|Number|5|` in un grande dizionario contenente altri dati dello stesso *scope*

D’altra parte lo **statement** è del testo che non produce un valore, ma alterano lo stato dell’esecuzione, ne sono un esempio i cicli, gli *if*, assegnamenti e dichiarazioni.

 

## Struttura lessicale

Vediamo le regole lessicale degli elementi basilari di JavaScript.

JavaScript è **case-sensitive**, quindi parole chiave e identificativi con lo stesso nome ma con capitalizzazione diversa sono in realtà nomi diversi.

JavaScript generalmente ignora gli spazi, le *new line* e le tabulazioni

Supporta due stili di **commento**:

- il commento in-line con i caratteri `//`
- il commento multi-line con i caratteri `/* */`

I **letterali** (o *literal*) sono dei valori direttamente scritti nel codice, si oppongono dai valori derivanti dall’esterno (input utente, input da sensori, input da API, ecc…)

Gli **identificativi**, che includono nomi di variabili, nomi di funzioni, constanti ecc… devono iniziare con una lettera oppure un *underscore* (_) oppure un dollaro ($). Non possono quindi iniziare con un numero e devono essere diversi da parole chiave riservate

L’utilizzo del punto e virgola (`;`) per indicare la fine di uno *statement* è opzionale, anche se con particolari stili di programmazione aiuta a disambiguare la fine degli statement. Generalmente (ma ci sono dei casi particolari) JavaScript tratta un accapo come un punto e virgola solo quando non riesce a parsare il codice a meno di aggiungere un ‘;’

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

che possono essere interpretata correttamente sia come due righe completamente separate sia come una riga unica, il comportamento finale però è diverso.

L’interprete di JavaScript vedrà il codice come:

```jsx
let y = x + f(a+b).toString();
```

In generale è quindi consigliato l’uso del punto e virgola per evitare comportamenti inaspettati.
