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
| eof() | raggiundo la fine dell'input (*end of file*) |
| fail() | errore nello stream (dovuto a come è scritto il programma, oppure era presente qualcosa di inaspettato nel buffer) |
| bad() | si è verificato un errore per cui lo stream non è più in grado di performare operazioni di input/output |


