# 2024-10-04_Analisi dei programmi

I programmi possono essere analizzati in due modi:

- **Analisi statica**: che avviene ispezionando il codice assembly e provare a capire la logica
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

una volta eseguito gdb apparirà la sua cli, prima di passare al disassemblaggio del programma, impostiamo la sintassi da utilizzare

```c
(gdb) set disassembly-flavor intel
```

disassembliamo la funzione main:

```c
(gdb) disassemple main
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

e l’esecuzione si fermerà sul main.

Rilanciando il disassembly notiamo come gli indirizzi sono stati rilocati

```c
(gdb) disassembly main
```

possiamo quindi mettere un break point sull’indirizzo dell’istruzione che ci interessa, ad esempio sulla riga dentro il ciclo for, con indirizzo di offset <+17>

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
- `format`: formato usato per mostrare il valore in memoria
    - `o`: ottale
    - `x`: esadecimale
    - `u`: decimale senza segno
    - `t`: binario
    - `i`: istruzione
    - `c`: carattere
    - `s`: stringa
- `size`: grandezza degli elementi
    - `b`: byte
    - `h`: 2 byte
    - `w`: 4 byte
    - `g`: 8 byte

Esempi:

- `(gdb) x/i main+22`:
    
    `0x5555554006a0 <main+22>:    lea    rdi,[rip+0xad]        # 0x555555400754`
    
    mostra l’istruzione alla posizione `main+22`
    
- `(gdb) x/4i $rip`:
    
    ```c
    0x555555400692 <main+8>:     mov    DWORD PTR [rbp-0x4],0x0
    0x555555400699 <main+15>:    jmp    0x5555554006b5 <main+43>
    0x55555540069b <main+17>:    mov    eax,DWORD PTR [rbp-0x4]
    0x55555540069e <main+20>:    mov    esi,eax
    ```
    
    mostra le quattro istruzioni rispetto all’instruction pointer
    
- `(gdb) x/s 0x555555400754`:
    
    `0x555555400754: "%d “`
    
    mostra il contenuto di quel registro in formato stringa.
    

Un utile cheatsheet con i comandi principali di gdb: [https://darkdust.net/files/GDB Cheat Sheet.pdf](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf)
