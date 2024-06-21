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

## Eccezioni

In c++ è possibile lanciare e catturare delle eccezioni, cioè un segnale che indica che è stato rilevato un errore.

l'istruzione `throw` serve per lanciare l'eccezione, in pratica viene "lanciato" un oggetto al chiamante della funzione il quale potrà gestire l'eccezione.

Quando viene eseguito il throw l'esecizione viene bloccata e viene passata al chiamante, se il chiamante ha catturato l'eccezione con un `try{} ... catch(){}`allora viene gestita l'eccezione altrimenti il programma abortisce

```c++
struct my_exception {
	string info;
};

void f(int a) {
	if (a < 0) {
		throw my_exception{"valore non valido"}
	}
}

int main() {
	try{	
		f(-1);
	}catch(my_exception& e) {
	//gestione eccezione
	cerr<<e.info<<endl;
	}
}
```

# Compilatore

Il compilatore per i programmi scritti in c++ è **g++**.

il comando g++ è  una chiamata a gcc con l'aggiunta di particolari parametri

Compilazione:

	g++ program.cpp -o program
	./program

## header

Per una migliore organizzazione del codice è possibile avere gli header in una cartella diversa da quella del file eseguibile. Inoltre mettere in testa al file il percorso relativo o assoluto di ogni header è scomodo e poco elegante.

È possibile indicare la cartella contenente gli header in fase di compilazione (con l'opzione -I ) e in testa al file che utilizza quelle librerie basta mettere il nome degli header.

	g++ program.cpp -o program -I header-dir/

## link dei file oggetto

In grandi progetti dove sono presenti più file che fanno dei riferimenti a funzioni tra di loro è più conveniente compilare i vari file singolarmente, attraverso il parametro -c dice al compilatore di creare dei file oggetto e non degli eseguibili (quindi non si avranno errori per dei riferimenti mancanti) e una volta compilati tutti i file .cpp (tra cui deve essere presente il main) si linkano tutti i file oggetto

	//creazione dei file oggetto
	g++ -c -o foo.o foo.cpp
	g++ -c -o main.o main.cpp
	g++ -c -o bar.o bar.cpp
	
	//link dei file oggetto
	g++ -o fubar foo.o main.o bar.o

Questo torna utile in fase di aggiornamento di uno specifico file, per cui non dobbiamo ricompilare tutti i file ma solo il file modificato e poi rifare il linking.


## Librerie statiche e dinamiche

### Librerie statiche

Le librerie statiche sono pezzi di codice già compilati che vengono legati al programma che le ha chiamata in **fase di compilazione**. Viene effettivamente copiato il codice della libreria all'interno del file chiamante

### Librerie dinamiche

Le libreri dinamiche sono sempre dei pezzi di codice già compilati ma vengono caricate in memoria in fase di esecuzione (run-time). 

### Differenze

- Le librerie dinamiche vengono caricate in memoria solo una volta e possono essere usate da più programmi. Mentre con le statiche ogni eseguibile ha una copia caricata in memoria di quella libreria.
- L'utilizzo di librerie statiche implica una maggiore grandezza degli eseguibili.
- La modifica della libreria statica implica che bisogna ricompilare anche tutti i file che la utilizzavano.
- L'utilizzo delle librerie dinamiche può portare a problemi di compatibilità, e di indirizzamento.
- L'utilizzo delle librerie statiche è generalmente più veloce perché non ci sono chiamate esterne.


## Opzioni comuni di g++

| opzione | significato |
|--|--|
| -g | aggiunge informazione aggiuntive all'eseguibile utili per il debug |
| -Wall | abilita tutti i possibili warning della compilazione |
| -O | ottimizzazioni |
| -o \<name\>| permette di specificare il nome del file eseguibile |
| -I \<path\> | specifica il percorso per la cartella dei file header |
| -L \<path\> | specifica il percorso per la cartella contenente le librerie |


## Ottimizzazioni

è possibile applicare delle ottimizzazioni in fase di compilazione utilizzando il parametro -O secondo la seguente tabella:

![](https://i.ibb.co/zZfh9WT/optimization.png)



# Automatizzazioni e debug

## Struttura di un progetto

La struttura delle cartelle di un progetto (medio-piccolo) fatto in c++ dovrebbe seguire la seguente gerarchia:

	parent-folder
	|--include/
	|--src/
	|--build/
	|--tools/

- In *include* vanno messi i file header (.h o .hpp) contenenti le firme di classi e funzioni
- in *src* vanno messi i file cpp che definiscono le funzioni e le classi nei file header
- in *build* vanno messi i file oggetto generati dalla compilazione con il parametro -c
- in *tools* ci vanno gli script che servono per lo sviluppo del progetto


## Makefile

Il comando **make** torna molto utile quando bisogna automatizzare alcune azioni (come la compilazione). Si basa su un file chiamato **Makefile** nel quale sono scritte le sequenze di operazioni da fare.

Il Makefile è formato da regole che seguono la seguente sintassi:

	<target>:<prerequisiti>
		<operazioni>

- **target**: nome del file che vogliamo generare oppure nome di una azione
- **prerequisiti**: lista dei file necessari per eseguire quel target
- **operazioni**: istruzioni da eseguire

N.B. le operazioni vanno tabulate nel file

Quando viene chiamato il comando "make" esso esegue il primo target presente nel Makefile, se ci sono dei prerequisiti allora prima esegue i prerequisiti.

In alternativa è possibile chiamare il comando "make" seguito dal nome del target per eseguirne uno specifico.


# Debug

Fare debugging significa trovare degli errori logici nel codice che si presentano in run-time.

Gli strumenti che ti permettono di scovare questi errori sono i **debugger**.

## Tipologie di errori

I principali errori da cui sono afflitti i programmi sono correlati ad una pessima gestione della memoria.

Ad esempio:

- Utilizzare aree di memoria non inizializzate
	```c++
	int x;
	int y = x * 5;
	```
- Accedere a memoria precedentemente deallocata
	```c++
	int* x = new int[10];
	delete[] x;
	std::cout<<x[2];
	```
- Accedere oltre i limiti della memoria allocata
	```c++
	int* x = new int[10];
	std::cout<<x[11];
	delete[] x;
	```
- Non deallocare la memoria dinamica precedentemente allocata (**Memory leak**)
	
	```c++
	int main(){
		int* x = new int[10];
		return 0;
	}
	```

## Warnings

Gli warning che ci vengono dati dal compilatore sono il primo elemento da considerare per controllare la presenza di errori banali quando si andrà ad eseguire il codice.

È possibile attivare tutti i possibili warning compilando con le opzioni `-Wall` e `-Wextra`

	g++ -Wall -Wextra my_prog.cpp -o my_prog

Gli warning appaiono solo in fase di compilazione quindi tutti i possibili errori in run-time non vengono beccati in fase di compilazione, quindi l'utilizzo degli warning non basta per assicurarsi la correttezza del programma.

## Asserts

Assert è una funzione appartenente alla libreria `cassert` che prende in input una condizione booleana e se questa condizione è falsa il programma viene bloccato (*aborted*)

```c++
#include <iostream>
#include <cassert>

void print_number(int* myInt) {
  assert(myInt!=NULL);
  std::cout<<*myInt;
}

int main (){
  int a = 10;
  int* b = NULL;
  int* c = NULL;
  b = &a;

  print_number(b); //funziona
  print_number(c); //aborted
  return 0;
}
```

Il loro utilizzo è specialmente indirizzato per controllare le pre e post condizioni delle funzioni, cioè cosa deve essere vero in modo da chiamare la funzione correttamente e cosa deve essere vero in modo che la funziona restituisca un valore corretto.

## Valgrind

Valgrind è un tool esterno che permette di avere un controllo approfondito della gestione della memoria durante l'esecuzione del programma, segnalando eventuali errori.

per utilizzare valgrind è molto consigliato compilare con l'opzione `-g` che aggiunge delle informazioni aggiuntive all'eseguibili in modo che l'output del debugger sia più leggibile per il programmatore.

	g++ -g my_prog.cpp -o my_prog
	valgrind ./my_prog

ci sono due opzioni per il comando valgrind che tornano molto utili: `--track-origins=yes` e `--leak-check=full`

Quindi la compilazione ed esecuzione completa sarebbe:

	g++ -g my_prog.cpp -o my_prog
	valgrind --leak-check=full --track-origins=yes ./my_prog

l'obiettivo che vogliamo raggiungere quando scriviamo un programma è che valgrind termini con la stringa

	ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)

Il grande svantaggio di valgrind è la sua pesantezza nelle prestazioni: in progetti molto grandi l'utilizzo di valgrind è molto tedioso per quanto rende lenta l'esecuzione del codice.

## Sanitizers

Un altro strumento che è intregrato nel compilatore di C++ è l'utilizzo dei **sanitizers**.

questo strumento svolge circa lo stesso compito di valgrind solo che essendo integrato non influisce pesantemente nelle prestazioni.

A differenza di valgrind risulta più sintetico nell'errore e non offre una panoramica generale, inoltre i sanitizers possono beccare degli errori particolare che a valgrind possono sfuggire. Di contro abbiamo che se vogliamo togliere i sanitizers bisogna ricompilare il codice mentre con valgrind non è necessario.

Per utilizzarli basta mettere le seguenti opzioni in fase di compilazione:

	g++ -g -fsanitize=address -fno-omit-frame-pointer my_prog.cpp -o myprog


# Classi

In c++ è possibile sia fare uso delle **struct** per costruire degli oggetti propri sia usare le **classi**.

Entrambi i metodo hanno le stesse funzionalità, la differenza sta nel fatto che nelle classi i membri sono privati di default mentre nelle struct i membri sono pubblici di default. è possibile decidere cosa mettere pubblico e privato tramite le keyword `private` e `public`

```c++
class myclass {
	public:
		void set_var1(int value) {...}
		void set_var2(double value) {...}
		int get_var1() {...}
		double get_var2() {...}
	private:
		int var1;
		double var2;
};

int main() {
	myclass a;
	a.set_var1(1);
	a.get_var1();
}
```

Un grande utilizzo che può essere fatto è quello rendere le variabile non accessibili direttamente ma solo tramite dei metodi che possono modificarle oppure restituire il valore, questo permette di aver maggior controllo sul come vengono modificate le variabili.

Le parti della classe che sono private possono essere modificate/lette solo dagli oggetti appartenenti a quella classe.


## Costruttori

I costruttori sono dei metodi speciali che vengono chiamati ogni volta che viene istanziato un nuovo oggetto della classe.
Sono molto utili per inizializzare le variabili di una classe.

- **Costruttore di default** Questo tipo di costruttore è un metodo che non prende parametri in input. È obbligatorio nel caso si creino degli altri costruttori, mentre se non vengono creati altri costruttore aggiungere quello di default non è strettamente necessario
- **Costruttore non default** Questo costruttore prende dei parametri in input. che viene chiamato quando si istanzia un oggetto con i relativi parametri
- **Costruttore per copia** Questo costruttore ha come parametro la stessa classe e viene chiamato:
	- Ogni qual volta che si passa un oggetto della classe ad una funzione come parametro per copia
	- Quando viene fatto il return dell'oggetto che viene passato per riferimento 
	- Quando si inizializza un nuovo oggetto con uno già esistente

	Creare il costruttore per copia è molto importante: Quando vengono utilizzati puntatori come variabili di classe e si va ad utilizzare il costruttore per copia di default viene fatta una copia del riferimento ma non fa una copia del dato puntato, questo può causare dei problemi perché abbiamo due oggetti che puntano alla stessa area di memoria e quando viene eseguito il distruttore di uno dei due l'altro avrà perso l'area che puntava (e quando verrà distrutto anche l'altro oggetto de allocherà una memoria che è già stata deallocata, generando un errore)

È una buona pratica quindi definire sempre un proprio costruttore per copia che si occupa di fare una copia del dato puntato e non del riferimento.

```c++
class myclass {
	public:
		myclass(){...} // costruttore di default
		myclass(int value){...} // costruttore normale
		myclass(const myclass& obj){...} // costruttore per copia
		...
		...
	private:
		...
};

void foo(myclass a){...}

int main() {
	myclass obj1;	//utilizzo del costruttore di default
	myclass obj2(10) // utilizzo del costruttore normale
	foo(obj1); // utilizzo del costruttore per copia
}
```

### Liste di inizializzazione 

Per ottimizzare il codice è possibile utilizzare le liste di inizializzazione nei costruttori.

Servono per inizializzare i valori delle classe in maniere più diretta:

```c++
class class_def{
	public:
		class_def() {
			a = 10;
			b = 0;
		}

		class_def():a(10), b(0) {}
	private:
		int a;
		int b;
}
```

entrambi i "class_def()" sono dei costruttori di default che fanno la stessa cosa, il secondo però fa utilizzo delle liste di inizializzazione.

È più ottimizzato il secondo caso perchè nel primo caso quando viene chiamato il costruttore prima vengono create le variabile ed inizializzate con il loro valore di default e successivamente gli vengono assegnati i valori da noi decisi.
Nel secondo caso però le variabili vengono dichiarate e inizializzate direttamente con i valori da noi decisi.

Servono anche ad inizializzare i valori delle variabili constanti: se nel codice di prima al posto di `int a` fosse stato `const int a` in quel caso solo il secondo metodo funzionerebbe.

## Distruttori

Similmente ai costruttori esistono anche i distruttori cioè dei metodi speciali che vengono chiamati ogni volta che un oggetto  termina la sua esistenza, ciò può essere causato da:

- Lo scope in cui è stato creato l'oggetto termina la sua esecuzione
- Viene chiamato manualmente con una `delete` (nel caso si trovi in memoria dinamica allocato con `new`)
- Chiamando esplicitamente il nome della funzione del distruttore

Non è obbligatorio creare un distruttore in quanto il compilatore ne fornisce uno di default. 
Inoltre non presenta alcun parametro e non ritorna nulla.
Per definirne uno è necessario chiamarlo con lo stesso nome della classe preceduto da una tilde.

```c++
class myclass {
	public:
		...
		~myclass() {...} //definizione di un distruttore
		...
	private:
		...
};
```

## Friend

La parola chiave `friend` in c++ viene utilizzata principalmente nella dichiarazione delle funzioni **non appartenenti alla classe** e che tramite la keyword `friend` diamo accesso a tale funzione di gestire le variabili private che altrimenti non potrebbe vedere.

```c++
class MyClass {
private:
  int x;
	// dichiarazione delle funzione friend
  friend void myFriendFunction(MyClass& obj);

public:
  MyClass(int x) : x(x) {}

  void printX() {
    std::cout << "x = " << x << std::endl;
  }
};

//definizione della funzione friend
void myFriendFunction(MyClass& obj) {
  obj.x = 42;	// riesce ad accedere alla variabile privata x
}

int main() {
  MyClass obj(10);
  obj.printX(); // Output: x = 10

  myFriendFunction(obj); // non è una fuzione appartenente alla classe infatti non viene chiamata sull'oggetto
  obj.printX(); // Output: x = 42

  return 0;
}

```


## Tecnica pimpl

Pimpl (*pointer to implementation*) è una tecnica che rimuove dalla dichiarazione di una classe i dettagli le variabili/oggetti che essa utilizza, dichiarando solo un puntatore che punterà alla definizione della classe.

```c++
//header.hpp
 class MyClass {
private:
	struct impl;
	impl* pimpl;
public:
	...

//implementation.cpp
#inlcude "header.hpp"
struct MyClass::impl{ // definisco gli oggetti utilizzati dalla classe
	std::vector<int> vec;
	int var;
};

//definizione dei vari metodi..
```

Utilizzare questa tecnica porta il grande vantaggio di non dover ricompilare i file che utilizzano questa classe se magari dovessimo cambiare la definizione degli oggetti che utilizza la classe. Accade questo perché il compilatore in fase di compilazione deve sapere quanto spazio allocare quando si istanza un oggetto di una classe, quindi se dovessimo cambiare le variabili della classe, essa andrebbe ricompilata.
Andando però ad utilizzare sempre un puntatore che punta alla nostra implementazione la dimensione del puntatore rimane sempre la stessa e quindi non è necessario ricompilare.


# Streams

Gli stream sono flussi di dati (sequenze di byte) utilizzati per le operazione di input (comunicare con dispositivi come tastiera e mouse) e di output (come lo schermo).

I byte degli stream possono essere interpretati in vari modi, ad esempio come numeri, caratteri, stringhe ecc...

Per questioni di efficienza non è ottimale leggere/scrivere un byte alla volta interrogando per ogni byte l'hardware, per questo vengono utilizzati dei **buffer** cioè delle piccole memorie (input buffer e output buffer) che continuano ad accumulare byte che vengono utilizzati quando richiesto, cioè con le istruzioni:

```c++
std::cin >> x; // estrae i byte dal buffer di input che vengono inseriti da un
			   // dipositivo di input (la tastiera ad esempio)
std::cout << x; // spinge i byte dal buffer di output verso una
				// periferica di output (il monitor ad esempio)
```

## Streams in c++


| Stream | Utilizzo |
|--|--|
| `std::istream` | è la classe stream di input general purpose, `cin` è l'oggetto standard appartenente a quella classe |
| `std::ostream` | è la classe stream di output general purpose, `cout` e `cerr` sono due oggetti standard appartenenti a quella classe |
| `std::ifstream` | input stream per i file. legge dati da un file. |
| `std::ofstream` | output stream per i file. scrive dati in un file. |
| `std::istringstream` | input stream per le stringhe. legge dati da una stringa. |
| `std::ostringstream` | output stream per le stringhe. scrive dati su una stringa. |


Gli stream non possono essere copiati, quindi non possono essere passati per valore ad una funzione (ma solamente per reference) e non è possibile creare un nuovo stream copiando lo stream `std::cout`. Questo perché gli stream solo legati alla periferica esterna e fare una copia significherebbe fare una copia anche della periferica.

### Stato di uno stream

sono presenti delle funzioni che possono mostrare lo stato di uno stream

| funzione | significato |
|--|--|
| good() | le operazioni fatte hanno avuto successo |
| eof() | raggiunto la fine dell'input (*end of file*) |
| fail() | errore nello stream (dovuto a come è scritto il programma, oppure era presente qualcosa di inaspettato nel buffer) |
| bad() | si è verificato un errore per cui lo stream non è più in grado di performare operazioni di input/output |


# Template

I template servono a generalizzare le nostre classi o funzioni, essi ci permettono infatti di creare una funzione/classe una unica volta che su un generico tipo di dato che verrà scelto dal chiamante della funzione/classe.

Ad esempio se vogliamo scrivere una funzione che riordina gli elementi dell'array l'algoritmo per farlo non cambia in base al tipo di dato, utilizzando i template quindi non dobbiamo specificare che quella funzione lavora su int, unsigned int, long int, double, ecc... ma la funzione si adatterà al tipo che viene deciso dal chiamante.

## Template di Funzioni

```c++
// definiamo un tipo generico T che verrà utilizzato nella funzione sottostante
// T verrà sostituito con il tipo passato alla funzione
template <typename T>
T get_max(T val1, T val2) {
	if(val1 > val2) {
		return val1;
	}
	return val2;
}

template <typename T>
T foo() {
	T var = 10;
	return var + 1;
}


int main() {
	int x = get_max<int>(3,5);	//tra parentesi angolari specifichiamo il tipo di dato
	 
	 // nella maggior parte dei casi il compilatore riconosce il tipo di dato
	 // e quindi non è necessario specificarlo
	 double y = get_max(7.1, 9.3); // il compilatore riconosce il tipo di dato "double"
	
	// nel caso in cui T non faccia parte dei parametri in quel caso
	// è obbligatorio specificare il tipo di dato
	  if(foo<unsigned int>() == 11) {
		  ...
	  }
}
```

## Template di classi
Si possono utilizzare i template per i tipi degli attributi di classe

```c++
template <typename T>
class container {
	public:
		container() {}
		container(const T& new_val):var(new_val) {}
		const T& get() const{
			return var;
		}
		void set(T new_val) {
			var = new_val;
		}
	private:
		T var;
}

int main() {
	container<double> con;
	double value = 10.33;
	con.set(value);

	container<unsigned int> con2(6);
}
```

é possibile definire dei propri tipi di dato (con struct) e passarle come template, bisogna stare attenti però a ridefinire gli operatori come "==", ">", "<", "=", "++" eccetera.

Ai template è possibile assegnare dei valori de default

```c++
template <typename T = int>
struct couple{
	T a;
	T b;
};

int main() {
	couple<double> prova;
	couple prova2; // in questo caso assumono di default il tipo int
}
```

##  Non-type template

È possibile anche parametrizzare un valore e non un tipo

```c++
template<typename T, int N>
struct my_sequence {
	public:
		void set(int i, T value) {
			vec[i] = value;
		}
		T get(int i) {
		return vec[i];
	}
	private:
		T vec[N];
};

  
int  main(){
	//il valre N deve essere conosciuto a compile-time, quindi ci va un numero oppure una constexpr
	my_sequence<int, 5> seq;
	seq.set(3, 15);
}
```


# Move semantics

Con move semantics si intende una tecnica che ruba la zona di memoria di un oggetto temporaneo, quindi di una r-value. Normalmente però non riusciamo a ottenere l'indirizzo di un r-value ad esempio:

```c++
int get_value() {	//metodo che ritorna un numero e quindi una r-value
	int a = 10;
	return a;
}

int main() {
	int& ptr = get_value(); //stiamo cercando di ottenere una reference di 10,
                            // ma questo non è possibile 
                            //possiamo ottenere una reference solo di una l-value
}
```

Esiste però un modo ottenere una reference di una r-value:

```c++
int get_value() {	//metodo che ritorna un numero e quindi una r-value
	int a = 10;
	return a;
}

int main() {
	int&& ptr = get_value(); //usando && indichiamo che vogliamo ottenere
	                         // una reference di un r-value 
							
}
```
Ma perché è utile fare questo?
È una questione di performance: le reference ad r-value ci permettono di identificare degli oggetti temporanei, nell'esempio 'a' era un oggetto temporaneo che alla fine della funzione "get_value()" non esiste più.
Dato che siamo in grado di riconoscere oggetti temporanei possiamo agire in modo diverso da oggetti non temporanei, come ad esempio rubare la zona di memoria in cui sono al posto di copiare interamente l'area di memoria.

Un esempio che fa capire maggiormente l'utilità di questa tecnica è il seguente:

Abbiamo un vettore e da questo vettore vogliamo crearne uno nuovo con tutti gli elementi sommati di 1.

```c++
1 vector<int> f(vector<int> const& vec) {
2 	vector<int> new_vec;
3 	new_vec.reserve(vec.size)); //assegno la stessa dimensione
4 	for(auto el : vec) {
5 		new_vec.push_back(el + 1);
6 	}
7   return new_vec;
8  }
9
10  int main() {
11 		vector<int> vec;
12		for(int i = 0; i != 100; i++) {
13			vec.push_back(i);
14		}
15		vector<int> y = f(vec);
16 }
```

Abbiamo il nostro metodo f() che prende un vettore per const reference, all'interno della funzione viene creato un nuovo vettore locale e quindi un **vettore temporaneo** e viene riempito con gli elementi del vettore orginale sommati di 1, infine viene fatto un return by value.

Quello che ci interessa avviene a riga 15 dove vogliamo inizializzare il vettore y con quello che abbiamo creato nel metodo f. In quel punto dovrebbe avvenire una deep-copy del vettore, quindi si alloca la memoria necessario per y, poi viene fatta la copia elemento per elemento e infine si de alloca il vettore temporaneo, che si traduce in un grande spreco di tempo.
Usando la move semantics possiamo permettere a y di rubare l'area di memoria assegnata all'oggetto temporaneo, evitando tutti i passaggi precedenti.

Nota: nell'esempio vengono utilizzati i vector, i quali implementano già al loro interno la move semantics, quindi il codice sarebbe già ottimizzato così, però se lavorassimo con una classe fatta da noi che non implementa la move semantics verrebbe utilizzato il classico copy constructor che fa una deep-copy, risultando inefficiente.

## Move constructor e move assignment

La move semantics viene utilizzata principalmente per due operazioni nelle classi:
- il **move constructor** cioè un costruttore in cui il parametro è un oggetto temporaneo (riconosciuto da una r-value reference)
- il **move assignment** cioè l'overloading dell'operatore '=' il cui oggetto a destra dell'assegnamento è un oggetto temporaneo (riconosciuto da una r-value reference)

Prendiamo in considerazione la seguente classe

```c++
struct Class { 
	Snitch() { cout << "constructor" << endl;}
	~Snitch() { cout << "destructor" << endl; }

	Snitch(const Class&) {
		cout << "copy constructor" << endl;
		// allocazione di memoria
		// copia di tutti i valori
	}
};
```
```c++
1 Class f() {
2 	return Class();
3 }
4
5 int main() {
6	Class my_obj = f();
7 }
```

Disabilitando la [RVO](https://shaharmike.com/cpp/rvo/) otteniamo in output

	constructor
	copy constructor
	destructor
	copy constructor
	destructor
	destructor

1. viene fatto il costruttore a riga 2
2. viene copiato l'oggetto che verrà poi passato al chiamante sempre a riga 2
3. viene fatto il distruttore del dell'oggetto locale nella funzione `f()`
4. viene fatto il copy constructor a riga 6 per inizializzare `my_obj`
5.  viene distrutto sempre a riga 6 l'oggetto risultante della funzione `f()`
6.  viene distrutto `my_obj`

Se noi andiamo ad aggiungere il move constuctor alla nostra classe

```c++
struct Class { 
	Snitch() { cout << "constructor" << endl;}
	~Snitch() { cout << "destructor" << endl; }

	Snitch(const Class&) {
		cout << "copy constructor" << endl;
		// allocazione di memoria
		// copia di tutti i valori
	}
	Snitch(Class&&) { 
		cout << "move constructor" << endl;
		// copia i puntatori
		// fai puntare i puntatori derubati a nullptr
	}
};
```
```c++
1 Class f() {
2 	return Class();
3 }
4
5 int main() {
6	Class my_obj = f();
7 }
```

sempre disabilitando la [RVO](https://shaharmike.com/cpp/rvo/) otteniamo in output

	constructor
	move constructor
	destructor
	move constructor
	destructor
	destructor

In questo caso al posto del copy constructor viene chiamato il move constructor perché il compilatore ha riconosciuto che l'oggetto restituito da `f()` è un oggetto temporaneo e quindi noi possiamo definire il nostro costruttore in una maniera diversa dal copy constructor (rubando il puntatore al posto di copiare elemento per elemento)

**Nota importante**: quando rubiamo i puntatori dobbiamo ricordarci di impostare a nullptr i puntatori che abbiamo derubato, questo perché essendo oggetti temporanei verrà chiamato il distruttore a breve e quindi dobbiamo dire che quel puntatore non punta più all'area di memoria di prima (che abbiamo rubato) altrimenti il suo distruttore la libererebbe.


Possiamo utilizzare lo stesso meccanismo per il move assignment

```c++
struct Class { 
	Snitch() { cout << "constructor" << endl;}
	~Snitch() { cout << "destructor" << endl; }

	Snitch(const Class&) {
		cout << "copy constructor" << endl;
		// allocazione di memoria
		// copia di tutti i valori
	}
	Snitch(Class&&) { 
		cout << "move constructor" << endl;
		// copia i puntatori
		// fai puntare i puntatori derubati a nullptr
	}
	Snitch& operator=(const Snitch&) {
		cout << "copy assignment" << endl;
		return *this;
	} 
	Snitch& operator=(Snitch&&) {
		cout << "move assignment" << endl;
		return *this;
	}
};
```
```c++
1 Class f() {
2 	return Class();
3 }
4
5 int main() {
6	Class my_obj;
7	my_obj = f();
8 }
```
Output:

	constructor                  # costruttore di my_obj
	constructor                  # costruttore dell'oggetto locale di f()
	move constructor             # move constructor dell'oggetto che verrà poi passato al chiamante
	destructor                   # distruttore dell'oggetto locale ad f()
	move assignment              # assegnamento di un oggetto temporaneo
	destructor                   # distruttore dell'oggetto temporaneo
	destructor                   # distruttore di my_obj


È possibile far diventare un l-value in un r-value con l'istruzione `std::move()` con questa istruzione possiamo forzare la chiamata di un move assignment e di conseguenza stiamo permettendo a qualche altra variabile di prendere la zona di memoria che era intestata alla nostra variabile.


# Iteratori

Gli iteratori sono degli oggetti che puntano agli elementi di una struttura dati come le liste.

Rappresentano un modo per scorrere e modificare le liste, quindi in generale effettuare operazioni sulle strutture dati della standard library.

Sono molto generalizzati per cui gli iteratori della standard librari si adattano in basa alla struttura dati su cui operano.

Si possono chiamare facendo:

```c++
#include <vector>
//#include <iterators> //non è necessario includere la libreria
//perchè viene già inclusa dalle strutture della libreria standard (proprio come vector, list, stack ecc...), è possibili che le strutture dati ridefiniscano i metodi della classe iterator

int main() {
	std::vector<int> lista = {1,2,3,4,5}; // creiamo la nostra lista
	std::vector<int>::iterator it; // creiamo l'iteratore
	//scorriamo la lista con gli iterator
	for(it = lista.begin(); it != lista.end(); it++) {
		std::cout<<*it;
	}
}
```

- `begin()` restituisce un iteratore che punta al primo elemento della lista
- `end()` restituisce un iteratore all'elemento successivo all'ultimo (nullptr)
- `*it` dereferenziando l'iteratore possiamo accedere all'elemento puntato dall'iteratore (sia lettura che scrittura)

è possibile fare la stessa cosa utilizzando i cicli for-each che nella loro implementazione fanno uso in modo trasparente degli iteratori:

```c++
#include <vector>
//#include <iterators> //non è necessario includere la libreria
//perchè viene già inclusa dalle strutture della libreria standard (proprio come vector, list, stack ecc...), è possibili che le strutture dati ridefiniscano i metodi della classe iterator

int main() {
	std::vector<int> lista = {1,2,3,4,5};
	for(auto el :lista) {
		std::cout<<el;
	}
}
```

Nella standard library è presente sia l'**iteratore** normale che l'**iteratore costante** che impedisce di modificare gli elementi da esso puntati. Nota che la classe `const_iterator` è diversa da fare `const iterator`: 
nel primo caso la classe è implementata per rendere `const` gli elementi puntati dall'iteratore, nel secondo caso non possiamo modificare l'iteratore in sé.

## Tipi di iteratori

In c++ sono definiti 6 diversi tipi di iteratori

- **input iterator** può scorrere il container solo una volta (solo in avanti) e non può modificare gli elementi
- **output iterator** può scorrere il container solo una volta (solo in avanti) e non può leggere gli elementi
- **forward iterator**  può scorrere più volte il container (solo in avanti) e può leggere e modificare gli elementi
- **bidirectional iterator** può scorrere più volte il container (sia in avanti che in indietro) e può leggere e modificare gli elementi 
- **random iterator** può scorrere più volte il container (sia in avanti che in indietro) e può leggere e modificare gli elementi e può saltare ad elementi in mezzo 
- **contiguous iterator** uguale al random ma in più assicura che gli elementi adiacenti a quello puntato siano sequenziali in memoria.

![](https://i.ibb.co/02vn09d/container.png)

## operazioni essenziali iteratori

Se vogliamo implementare un nostro iteratore per un particolare container dobbiamo implementare delle operazioni importanti nel nostra classe iteratore:

- `operator*()const;` operatore di dereferenziazione con cui possiamo accedere all'elemento puntato dall'iteratore (sia lettura che scrittura)
- `operator->()const;`nel caso in cui il tipo di dato della nostra lista sia una struttura particolare possiamo accedere agli elementi di quella struttura
- `operator++();` pre indremento
- `operator++(int);` post incremento
- `operator==(my_iterator const&)const;` confronto tra iteratori
- `operator!=(my_iterator const&)const;` operatore di dereferenziazione con cui possiamo accedere all'elemento puntato dall'iteratore (sia lettura che scrittura)


## Invalidation degli iteratori

Bisogna prestare attenzione che quando istanziamo degli iteratori e poi la lista viene cambiata quegli iteratori che abbiamo istanziato potrebbero non essere più validi.

Ad esempio

```c++
#include <vector>

int main() {
	std::vector<int> lista = {1,2,3,4,5};
	std::vector<int>::iterator it = lista.begin(); //inizializziamo l'iteratore
	lista.push_back(6); 
//quest'ultima istruzione rende invalido l'iteratore che abbiamo inizializzato
/*Questo perchè i vector sono implementati come array in memoria dinamica 
e ogni volta che avviene una modifica nella struttura della lista
viene reistanziata la memoria
e quindi le vecchie celle di memoria vengono deallocate.
Il nostro iteratore puntava a quelle vecchie celle di memoria ormai deallocate
*/
}
```

Per capire quando gli iteratori vengono invalidati bisogna conoscere come sono implementati i container che utilizzano.
Una buona pratica è evitare di utilizzare gli iteratori per operazioni che modifichino la struttura della lista e aggiornare l'iteratore (con begin()) prima di andare ad utilizzarlo nel caso sia stato istanziato indietro nel codice.


