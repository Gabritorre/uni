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
- Oggetto: area di memoria dotata di tipo.
- Variabile: oggetto (quindi un'area di memoria) a cui è assegnato un identificatore


## Dichiarazione, assegnamento, inizializzazione e definizione

- **Dichiarazione**: Operazione che introduce un nuovo identificatore (nome della variabile), con il suo tipo di dato.
		
		int a;
- **Assegnamento**: Significa dare un valore ad una variabile precedentemente dichiarata.

		a = 5;
	
- **Inizializzazione**: Indica che si sta dichiarando una variabile e nello stesso passaggio si assegna anche un valore ad essa.

		int b = 5;

- **Definizione**: significa in sostanza allocare dell'area di memoria


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


## Invariante di un ciclo

L'invariante di un ciclo è una proprietà che deve essere vera prima e durante le iterazioni del ciclo.

L'utilità dell'invariante sta nel fatto che permette di verificare se il ciclo funziona correttamente. Se l'invariante è vera all'inizio del ciclo e rimane vera ad ogni iterazione, allora possiamo essere certi che il ciclo terminerà correttamente.

### Esempio

Ad esempio in un programma che calcola il l'elemento maggiore  presente in una matrice.

All'inizio di ogni iterazione del ciclo,  una variabile, `max` contiene il valore massimo tra tutti gli elementi della matrice che abbiamo finora esaminato.

Alla fine di ogni iterazione del ciclo, l'invariante deve rimanere vero. In particolare, se abbiamo esaminato tutti gli elementi della matrice, allora `max` conterrà il valore massimo tra tutti gli elementi della matrice.

Quindi, l'invariante in questo caso è che la variabile `max` contenga sempre il valore massimo tra gli elementi della matrice che abbiamo finora esaminato. Alla fine del ciclo, `max` conterrà il valore massimo tra tutti gli elementi della matrice.
