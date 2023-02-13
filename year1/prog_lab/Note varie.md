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
