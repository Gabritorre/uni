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
