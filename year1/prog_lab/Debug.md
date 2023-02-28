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


