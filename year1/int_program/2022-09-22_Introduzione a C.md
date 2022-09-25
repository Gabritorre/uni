# Introduzione a C

**Programmare** significa scrivere dei programmi in un linguaggio di programmazione, i programmi sono una sequenza di istruzioni utili a raggiungere un determinato obiettivo.

I linguaggi di programmazione si dividono in:
- Linguaggi Imperativi: i quali definiscono esplicitamente un algoritmo per conseguire uno scopo (i classici linguaggi: C, Java, Python).

- Linguaggi Dichiarativi: i quali definiscono solo lo scopo da raggiungere (SQL: un select restituisce un risultato ma non il come ha fatto a ottenere quel risultato).

In C sono presenti 6 tipi di **token**, cioè degli elementi fondamentali per costruire dei programmi che il compilatore riesce a riconoscere.

1. Keywords (parole chiave): for, while, if, ...
2. Identifier (identificatore): nomi di variabili, di funzioni, ...
3. Operators (operatori): +, ++, -, *, ...
4. Special symbols (separatori): ';', ', ', ':', (), [] ...
5. Strings (stringhe): vettori di caratteri
6. Constants (costanti): numeri, double, float, char, ...


## Variabili

I valori in memoria vengono memorizzati in binario, e in base al tipo di variabile che vogliamo possiamo allocare una determinata quantità di bit in memoria per la nostra variabile.

Una variabile è un'informazione salvata in memoria e possiede:
- Un tipo: che stabilisce quanta memoria allocare, le operazioni che si possono fare e la codifica utilizzata per salvare la variabile. Es. int, long, char, ...
- Un identificatore: un nome che serve a riconoscere la variabile dalle altre e che attraverso esso possiamo accedere al suo valore in memoria.
- Un valore

``` c
int a = 10;
```

Quando si creano le variabili è possibile eseguire diverse azioni:
- Dichiarazione: si intende creare lo spazio in memoria per una variabile.
```c
int a;
```
- Inizializzazione: si intende creare lo spazio in memoria e assegnare il primo valore alla variabile.
```c
int a = 5;
```
- Assegnamento: si intende assegnare un valore ad una variabile creata in precedenza.
```c
int a;
a = 5;
```

## Tipi di dato

| nome | bit | range |
|--|--|--------------|
| char | 8 | da -128 a 127|
| signed char | 8 | da -128 a 127|
| unsigned char | 8 | da 0 a 255|
| short (int) | 16 | da -32768 a 32767|
| unsigned short (int) | 16 | da 0 a 65535|
| int | 32 | da ~-2 miliardi a ~2 miliardi|
| unsigned (int) | 32 | da 0 a ~4 miliardi|
| long | 64 | da -2$^{63}$ a 2$^{63}$|
| unsigned long | 64 | da 0 a 2$^{64}$-1|
| float | 32 | da -3.40 $*$ 10$^{-38}$ a 3.40 $*$ 10$^{38}$|
| double | 64 | da -1.7 $*$ 10$^{-308}$ a 1.7 $*$ 10$^{308}$|

## Operatori

### Operatori aritmetici:

- $+$ Addizione
- $-$ Sottrazione
- $*$ Moltiplicazione
- $/$ Divisione
- % Modulo (resto della divisione)

### Operatori incremento e decremento:

- $++$ Incremento
	```c
	a++ //post-increment
	++a //pre-increment
	```
- $--$ Decremento
	```c
	a-- //post-decrement
	--a //pre-decrement
	```

### Operatori di assegnamento:

- $=$
	```c
	x = y
	```
- $+=$
	```c
	x += y // equivalente a x = x + y
	```
- $-=$
	```c
	x -= y // equivalente a x = x - y
	```
- $*=$
	```c
	x *= y // equivalente a x = x * y
	```
- $/=$
	```c
	x /= y // equivalente a x = x / y
	```
- %$=$
	```c
	x %= y // equivalente a x = x % y
	```

### Operatori di relazione:

Operazioni che restituiscono vero o falso

- $==$ uguale a
- $>$ maggiore di
- $>=$ maggiore uguale a
- $<$ minore di
- $<=$ minore uguale a
- !$=$ diverso da


### Operatori logici:

- && 'e' logico, vero se tutti gli operandi sono veri
- || 'o' logico, vero se almeno uno degli operandi è vero
- ! 'non' logico, vero se l'operando è falso
