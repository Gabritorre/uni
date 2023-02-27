# Note varie

## R-value and l-value
l-value: rappresenta un oggetto che è identificabile attraverso un indirizzo
- una l-value **non** può essere una funzione, una espressione (*varibile* + 3) oppure una costante (1, 10.5, -5...).
- Nelle operazioni di assegnamento (=) la l-value deve avere la capacità di immagazzinare dati.

r-value rappresenta un oggetto che invece non è identificabile tramite un indirizzo

Sono un r-value le costanti e tutto quello che può restituire una costante

### operatori di indirizzo
- **&** deve operare su una l-value e restituisce una r-value.
	
		int *p = &a;
	 a è una variabile e quindi una l-value e viene restituito l'indirizzo di a che è una costante, quindi una r-value.
	Infatti una operazione come "&15" non è ammessa
	
- **\*** opera su una r-value e restituisce una l-value.
		
		*p = 15; 
	abbiamo che 'p' rappresenta un indirizzo quindi una r-value e l'operatore **\*** rappresenta la zona di memoria puntata dall'indirizzo quindi una l-value.

## Tipo di dato, variabile e oggetto
- Tipo di variabile: insieme di valori su cui vengono definite delle operazioni.
- Oggetto: area di memoria alla quale è associato un tipo.
- Variabile: oggetto (quindi un'area di memoria) a cui è assegnato un identificatore (il nome della variabile)

Il controllo dei tipi di dato è statico, cioè è determinato in fase di compilazione. In generale tutto quello che fatto staticamente avviene in fase di compilazione.

## Dichiarazione, assegnamento, inizializzazione e definizione

- **Dichiarazione**: Operazione che introduce un nuovo identificatore (nome della variabile), con il suo tipo di dato.
		
		int a;
- **Assegnamento**: Significa dare un valore ad una variabile precedentemente dichiarata.

		a = 5;
	
- **Inizializzazione**: Indica che si sta dichiarando una variabile e nello stesso passaggio si assegna anche un valore ad essa.

		int b = 5;

- **Definizione**: Una dichiarazione è anche una definizione quando specifica completamente il nome introdotto.
Per esempio:

		int a;

	è una definizione (e quindi anche una dichiarazione). 
Invece la dichiarazione

		extern int a;

introduce il nome a che però è allocato altrove. In questo caso parliamo di dichiarazione ma non di definizione.

### Const e constexpr

sono due keyword che vengono servono entrambe a rendere una variabile non modificabile, la differenza sta nel fatto che con `constexpr` si può usare solo per inizializzare una variabile in compile-time, mentre `const` può essere usato per inizializzare sia in run-time che in compile-time.

```c++
// errore
int var = 5;
constexpr int a = var;

// valido
int var = 5;
const int a = var;
```

per quanto riguarda l'inizializzazione di costanti sarebbe meglio l'utilizzo di `constexpr`.

Mentre viene spesso utilizzato il `const` nei parametri delle funzioni in quelle variabili che vogliamo assicurare non vengano lette durante il corpo della funzione

## Linguaggi imperativi e funzionali

- I linguaggi imperativi rappresentano la classica idea di programmazione con le caratteristiche principali come:
	- OOP
	- flusso delle istruzioni ini ordine ben specifico
	- utilizzo e modifica di variabili durante il flusso del codice

	es. C, C++, Java
- I linguaggi funzionali si basano su funzioni matematiche
	- si basano principalmente nel definire funzioni che elaborano dei valori dati in input
	- non esiste l'assegnamento a "variabili" già definite
	
	es. scheme, scala, Prolog

## References

Una variabile dichiarata come reference di un'altra variabile è in sostanza un *alias* di quella variabile.

```c
int a;
int& b = a;
```
In questo caso `b` è una reference alla variabile `a`, quindi le variabili `a` e `b` sono la stessa cosa.

Quando una funzione richiede come parametri delle references si ha una chiamata a funzione con passaggio dei parametri per inidirizzo, per cui vengono utilizzate effettivamente le variabili passate alla funzione e non una loro copia

```c
void function (int& var1){
	var1 += 10;
}
int main() {
	int a = 0;
	function(a);
	cout<<a;	//a vale 10
}
```

### Differenze con i puntatori

- Una reference non può essere di tipo void, mentre un puntatore sì.
- Una reference non può essere aggiornata dopo la sua inizializzazione, mentre un puntatore sì.
- Una reference può riferirsi ad una altra reference ma rappresenterà sempre un alias della variabile originale, mentre un puntatore può puntare ad un altro puntatore ma ogni puntatore avrà un contenuto diverso (i vari indirizzi).

## Cicli

### Ciclo for
Il ciclo for consiste di tre clausole: l’inizializzazione, la condizione di permanenza, l’espressione di iterazione.

	for(inizializzazione;condizione;iterazione){}

Un buon uso del ciclo for prevede che nel corpo del for non vengano modificate le variabili che sono soggette alla condizione del ciclo.

### Ciclo for each

Scritto con la seguente sintassi

	for(type var: vect){}

si tratti di un ciclo che ad ogni iterazione **copia** uno ad uno i valori di `vect` in `var`. Torna molto utile per lavorare con le stringhe e per fare alcune operazioni con gli array.

Per evitare di avere una copia è possibile utilizzare le references per lavorare direttamente sui valori dell'array.

#### keyword "auto"

La keyword auto viene molto utilizzata nei for-each e va al posto del tipo di dato per lasciare al compilatore il compito di decidere il tipo di dato della variabile in cui copiare i vari valori.

È possibile utilizzarla anche nelle normali inizializzazioni (ma non nelle dichiarazioni)

### ciclo while

	while(condizione){}

la scelta del ciclo while entra in gioco quando non è possibile esprimere un'iterazione con il ciclo for e quando il ciclo verrà eseguito zero o più volte.

### ciclo do-while

	do{
	}while();

la scelta del ciclo do-while entra in gioco quando non è possibile esprimere un'iterazione con il ciclo for e quando il ciclo verrà eseguito una o più volte.

## Invariante di un ciclo

L'invariante di un ciclo è una proprietà che deve essere vera prima e durante le iterazioni del ciclo.

L'utilità dell'invariante sta nel fatto che permette di verificare se il ciclo funziona correttamente. Se l'invariante è vera all'inizio del ciclo e rimane vera ad ogni iterazione, allora possiamo essere certi che il ciclo terminerà correttamente.

### Esempio

Ad esempio in un programma che calcola il l'elemento maggiore  presente in una matrice.

All'inizio di ogni iterazione del ciclo,  una variabile, `max` contiene il valore massimo tra tutti gli elementi della matrice che abbiamo finora esaminato.

Alla fine di ogni iterazione del ciclo, l'invariante deve rimanere vero. In particolare, se abbiamo esaminato tutti gli elementi della matrice, allora `max` conterrà il valore massimo tra tutti gli elementi della matrice.

Quindi, l'invariante in questo caso è che la variabile `max` contenga sempre il valore massimo tra gli elementi della matrice che abbiamo finora esaminato. Alla fine del ciclo, `max` conterrà il valore massimo tra tutti gli elementi della matrice.

## Vector

Uno dei motivi principali per cui utilizzeremo vector al posto degli array C-like è che in C non è possibile passare un array ad una funzione per copia ma solo per parametro, essendo sì più efficiente ma ciò ci costringe a portarci sempre una variabile in più per indicare la dimensione dell'array. 

In più se vogliamo volutamente lavorare su una copia dell'array non è possibile farlo (in realtà utilizzando gli struct sarebbe possibile, ma è scomodo e poco chiaro).

Utilizzando la classe vector è possibile decidere se effettuare un passaggio per indirizzo o per valore. In più porta con se molti metodi che facilitano di molto l'utilizzo degli array.

```c++
#include <vector>

void foo(vector<int> arr){} // passaggio per copia
void foo2(vecotr<int>& arr){} // passaggio per riferimento

int main() {
vector<int> a; // non è necessario specificare la dimensione
vector<double> b(10);
/* è possibile utilizzare entrambi i seguenti modi,
* l'importante differenza sta nel fatto che utilizzare
* il metodo at è più sicuro perche fa un controllo
* sull'esistenza dell'indice*/
a[0] = 1;
b.at(0) = 1.5;
}
```

La classe vector è implementata come un **template** cioè una classe generica che può agire su un tipo di dato passato per parametro, e viene indicato tra le parentisi angolari.

### Matrici

Possiamo dichiarare una matrice (vector di vector) facendo:

```c++
vector<vector<int>> matrix;

int righe = 3, colonne = 4;

matrix.resize(righe); // imposto il numero di righe

for (auto& e: matrix) { // imposto il numero di colonne per ogni riga
	e.resize(colonne)
}
// riempio la matrice
for (auto& r:matrix) {
	for(auto& elem:r) {
		elem = 0;
	}
}
// stampa della matrice
for (auto& r:matrix) {
	for(auto& elem:r) {
		cout<<elem << " ";
	}
	cout<<endl;
}
```

è possibile anche creare una **matrice frastagliata** cioè in cui le righe possono avere un numero di colonne diverso.


## Memoria dinamica

le *keyword* **new** e **delete** di C++ possono in qualche modo essere comparate al `malloc` e il `free` di C:

l'utilizzo della memoria dinamica è supportata nativamente senza l'utilizzo di altre librerie (come stdlib)


```c++
// Allocazione in memoria dinamica in C++:
int *a = new int; // restituisce l'indirizzo della memoria creata
// Deallocazione della memoria
delete a;

// Allocazione di array
int *p = new int[]; // ritorna l'indirizzo del primo elemento
delete[] p;
```
