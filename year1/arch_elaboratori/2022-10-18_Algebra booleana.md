
# Algebra booleana

L'algebra booleana tratta di operazioni che hanno come risultato vero o falso.

- 1 significa **vero** e nei circuiti rappresenta il potenziale alto (passa la corrente).
- 0 significa **falso** e nei circuiti rappresenta il potenziale basso (non passa corrente).


L'algebra booleana calcola delle funzioni logiche cioè delle combinazioni di operazioni logiche su delle variabili in input, producendo un output.

- **Circuito combinatorio**: produce un output dipendente solo dall'input che gli viene dato
- **Circuito sequenziale**: produce un output dipendente da input e dallo stato della memoria.

## Funzioni logiche

Le funzioni logiche possono venire specificate in due principali modi:

1. Tramite **tabelle di verità**

| A | B | C |
|--|--|--|
| F | F | F |
| F | V | F |
| V | F | F |
| V | V | V |

2. Tramite **equazione logica**
$E = \overline{A} \cdot \overline{B}\cdot C + A\cdot B \cdot \overline{C}$

## Operatori logici

### AND

Ritorna 1 (vero) se tutti gli input sono 1 (veri)

Viene scritto come prodotto di due valori: $A \cdot B = A\land B = A \text{ and } B$

Tabella della verità:

| A | B | A $\cdot$ B |
|--|--|--|
| F | F | $F$ |
| F | V | $F$ |
| V | F | $F$ |
| V | V | $V$ |

AND gate:

![](https://i.ibb.co/Y885XgW/and.png)

### OR

Ritorna 1 (vero) se almeno un input è 1 (vero)

Viene scritto come somma di due valori: $A + B = A\lor B = A \text{ or } B$

Tabella della verità:

| A | B | A + B |
|--|--|--|
| F | F | $F$ |
| F | V | $V$ |
| V | F | $V$ |
| V | V | $V$ |

OR gate:

![](https://i.ibb.co/Z8ybwZg/or.png)


### NOT

Ritorna 1 (vero) se l'input è 0 (falso) e ritorna 0 (falso) se l'input è 1 (vero).

Viene scritto come: $\sim A$ = $\overline{A} = \text{not } A$

Tabella della verità:

| A | $\sim$ A |
|--|--|
| F | $V$ |
| V | $F$ |


NOT gate:

![](https://i.ibb.co/pyB9dNs/not.png)


### NAND

Rappresenta il NOT AND:

Ritorna 0 (false) se tutti gli input sono 1 (veri)

Viene scritto come negazione del prodotto di due valori: $\sim (A \cdot B) = \overline{A\land B} = \text{ not } (A \text{ and } B)$

Tabella della verità:

| A | B | $\sim$ (A $\cdot$ B) |
|--|--|--|
| F | F | $V$ |
| F | V | $V$ |
| V | F | $V$ |
| V | V | $F$ |

NAND gate:

![](https://i.ibb.co/fY4Kyh4/nand.png)


### NOR

Rappresenta il NOT OR:

Ritorna 1 (vero) se tutti gli input sono 0 (falsi)

Viene scritto come negazione della somma di due valori: $\sim (A + B) = \overline{A\lor B} = \text{ not } (A \text{ or } B)$

Tabella della verità:

| A | B | $\sim$ (A $+$ B) |
|--|--|--|
| F | F | $V$ |
| F | V | $F$ |
| V | F | $F$ |
| V | V | $F$ |

NOR gate:

![](https://i.ibb.co/9tPP65B/nor.png)


## Proprietà
sempre ricordando che 0 = falso e che 1 = vero

### Identità

| or | and |
|--|--|
| $A+0 = A$ | $A \cdot 1 = A$ |

### Nullo

| or | and |
|--|--|
| $A+1 = 1$ | $A \cdot 0 = 0$ |

### Idempotente

| or | and |
|--|--|
| $A+A = A$ | $A \cdot A = A$ |

### Inverso

| or | and |
|--|--|
| $A+(\sim A) = 1$ | $A \cdot (\sim A) = 0$ |

### Commutativa

| or | and |
|--|--|
| $A+B = B+A$ | $A \cdot B = B \cdot A$ |

### Associativa

| or | and |
|--|--|
| $A+(B+C) = (A+B)+C$ | $A \cdot (B \cdot C) = (A \cdot B)\cdot C$ |

### Distributiva

| or | and |
|--|--|
| $A\cdot ( B + C ) = (A\cdot B) + (A \cdot C)$ | $A + (B \cdot C) = (A + B) \cdot (A + C)$ |

### De Morgan

| or | and |
|--|--|
| $\sim (A + B) = (\sim A) \cdot (\sim B)$ | $\sim (A \cdot B) = (\sim A) + (\sim B)$ |


Utilizzando queste proprietà è possibile implementare qualsiasi funzione logica utilizzando solo porte NOR. (Lo stesso vale per le porte NAND).

## Forma canonica

ogni funzione logica può essere scritta come equazione logica e ogni equazione logica può essere scritta in forma canonica che deriva dalla tabella di verità.

Funzione logica di esempio: $F = ((A+B) \cdot C) + \overline{A}$

### Prima forma canonica: somma di prodotti

1. scrivere la tabella di verità della funzione logica

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $1$ |
| 0 | 0 | 1 | $1$ |
| 0 | 1 | 0 | $1$ |
| 0 | 1 | 1 | $1$ |
| 1 | 0 | 0 | $0$ |
| 1 | 0 | 1 | $1$ |
| 1 | 1 | 0 | $0$ |
| 1 | 1 | 1 | $1$ |

2. Prendere in considerazione gli input che danno 1 nel risultato:

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $1\checkmark$ |
| 0 | 0 | 1 | $1\checkmark$ |
| 0 | 1 | 0 | $1\checkmark$ |
| 0 | 1 | 1 | $1\checkmark$ |
| 1 | 0 | 0 | $0$ |
| 1 | 0 | 1 | $1\checkmark$ |
| 1 | 1 | 0 | $0$ |
| 1 | 1 | 1 | $1\checkmark$ |


3. Scrivo gli input che ho preso in considerazione come prodotti (**mintermini**) che devono dare come risultato 1 (le entry dei prodotti devono essere tutti ad 1 per dare 1 come risultato)

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $1\checkmark$ $(\overline{A} \cdot \overline{B} \cdot \overline{C})$|
| 0 | 0 | 1 | $1\checkmark$ $(\overline{A} \cdot \overline{B} \cdot C)$|
| 0 | 1 | 0 | $1\checkmark$ $(\overline{A} \cdot B \cdot \overline{C})$|
| 0 | 1 | 1 | $1\checkmark$ $(\overline{A} \cdot B \cdot C)$|
| 1 | 0 | 0 | $0$ |
| 1 | 0 | 1 | $1\checkmark$ $(A \cdot \overline{B} \cdot C)$|
| 1 | 1 | 0 | $0$ |
| 1 | 1 | 1 | $1\checkmark$ $(A \cdot B \cdot C)$|

4. fare la somma dei prodotti:

$(\overline{A} \cdot \overline{B} \cdot \overline{C}) + (\overline{A} \cdot \overline{B} \cdot C) + (\overline{A} \cdot B \cdot \overline{C}) + (\overline{A} \cdot B \cdot C) + (A \cdot \overline{B} \cdot C) + (A \cdot B \cdot C)$

### Seconda forma canonica: Prodotto di somme

1. scrivere la tabella di verità della funzione logica

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $1$ |
| 0 | 0 | 1 | $1$ |
| 0 | 1 | 0 | $1$ |
| 0 | 1 | 1 | $1$ |
| 1 | 0 | 0 | $0$ |
| 1 | 0 | 1 | $1$ |
| 1 | 1 | 0 | $0$ |
| 1 | 1 | 1 | $1$ |

2. Prendere in considerazione gli input che danno 0 nel risultato:

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $1$ |
| 0 | 0 | 1 | $1$ |
| 0 | 1 | 0 | $1$ |
| 0 | 1 | 1 | $1$ |
| 1 | 0 | 0 | $0\checkmark$ |
| 1 | 0 | 1 | $1$ |
| 1 | 1 | 0 | $0\checkmark$ |
| 1 | 1 | 1 | $1$ |

3. Scrivo gli input che ho preso in considerazione come somme (**maxtermini**) che devono dare come risultato 0 (le entry delle somme devono essere tutti ad 0 per dare 0 come risultato)

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $1$ |
| 0 | 0 | 1 | $1$ |
| 0 | 1 | 0 | $1$ |
| 0 | 1 | 1 | $1$ |
| 1 | 0 | 0 | $0$ $(\overline{A} + B + C)$|
| 1 | 0 | 1 | $1$ |
| 1 | 1 | 0 | $0$ $(\overline{A} + \overline{B} + C)$|
| 1 | 1 | 1 | $1$ |

4. fare la il prodotto delle somme:
$(\overline{A} + B + C) \cdot (\overline{A} + \overline{B} + C)$

Il vantaggio di utilizzare la forme canoniche è che una funzione logica viene scritta in modo univoco e poi quando vengono utilizzate le porte logiche si hanno al massimo due livelli di profondità di (and/or).

## Minimizzazione

Lo scopo della minimizzazione è che data una equazione in forma canonica si riduce il numero di righe che dobbiamo considerare: in SP si ridurrà il numero di prodotto e in PS si ridurrà il numero di somme. Così facendo si riduce il costo del circuito.

In fase di minimizzazione alcuni input possono risultare **don't care** cioè che il loro valore, 0 o 1 che sia, non influisce nel risultato dell'espressione.

Esempio di input don't care

| A | B | C | D | $F$ |
|--|--|--|--|--|
| 0 | 0 | 1 | 0 | $1$ |
| 0 | 0 | 1 | 1 | $1$ |
| 0 | 1 | 1 | 0 | $1$ |
| 0 | 1 | 1 | 1 | $1$ |

Notiamo che i valori di A e C sono fissi mentre i valori di B e D cambiano assumendo tutti i valori possibili, Vedendo che qualunque valore assumano B e D il risultato non cambia allora B e D sono input don't care

Possiamo ridurre scrivendo:

| A | B | C | D | $F$ |
|--|--|--|--|--|
| 0 | X | 1 | X | $1$ |

Per poter minimizzare dobbiamo avere che:
- il numero righe con output 1 deve essere una potenza di due (2,4,8,16,...)
- l'esponente del 2 (usato nel punto precedente) è anche il numero degli input fissi che ci devono essere ( $8 = 2^3$ quindi 3 input fissi, $4\rightarrow$  2 input fissi, $16\rightarrow$  4 input fissi...).

## Mappe di Karnaugh

Per funzioni con poche variabili (massimo 5 convenzionalmente) è possibili minimizzare con le mappe di Karnaugh.

- Ogni cella rappresenta un output della combinazione degli input.
- Gli output a 0 vengono omessi e quindi solo quelli a 1 vengono scritti.
- Viene utilizzato il **codice di Gray** per le successioni dei bit

### Codice di Gray

Nel codice di Gray si ha per ogni passaggio una differenza di un singolo bit:

$000 \to 001 \to 011 \to 010 \to 110 \to 111 \to 101 \to 100$

$00 \to 01 \to 11 \to 10$


### Esempi di mappe di Karnaugh

![](https://i.ibb.co/7WDGPck/karnaugh.png)

Lo scopo di queste mappe è individuare le variabili don't care, infatti gli 1 che sono adiacenti tra di loro rappresentano variabili don't care.

Bisogna considerare che i bordi orizzontali so toccano tra loro, lo stesso vare per i bordi verticali:

![](https://i.ibb.co/5cXdw2f/mappa.png)

Nelle mappe è possibili minimizzare gli 1 solo se riesco a creare dei rettangoli composti da $2^p$ valori uguali a 1 chiamati $p$ - sottocubi. Quindi se trovo un rettangolo formato da sei 1 **non** lo posso minimizzare.

![](https://i.ibb.co/4mk6YVy/sottocubi.png)

Per minimizzare al meglio devo riuscire a creare meno rettangoli possibili e il più grandi possibile.  alcune celle possono essere ricoperte da più rettangoli, questo non è un problema.

Dopo aver creato la mappa di Karnaugh e di aver raggruppato gli 1 scrivo la forma canonica utilizzando solo i valori fissi di input.

## Funzioni incomplete

In alcune funzioni possono esserci degli output don't care, cioè che possono essere sia 1 che 0. Vengono segnalati con una X e quindi posso scegliere il suo valore (1 o 0) in modo da ottenere la migliore minimizzazione (pochi rettangoli e il più grandi possibile).

## Esempio completo

Avendo 4 input: A, B, C, D

Troviamo un output E che:
- è indifferente se gli input sono tutti veri o tutti falsi
- è 1 se gli input che contengono 1 sono dispari
- è 0 se gli input che contengono 1 sono pari

1. Realizziamo la tabella di verità

| A | B | C | D | $E$ |
|--|--|--|--|--|
| 0 | 0 | 0 | 0 | $X$ |
| 0 | 0 | 0 | 1 | $1$ |
| 0 | 0 | 1 | 0 | $1$ |
| 0 | 0 | 1 | 1 | $0$ |
| 0 | 1 | 0 | 0 | $1$ |
| 0 | 1 | 0 | 1 | $0$ |
| 0 | 1 | 1 | 0 | $0$ |
| 0 | 1 | 1 | 1 | $1$ |
| 1 | 0 | 0 | 0 | $1$ |
| 1 | 0 | 0 | 1 | $0$ |
| 1 | 0 | 1 | 0 | $0$ |
| 1 | 0 | 1 | 1 | $1$ |
| 1 | 1 | 0 | 0 | $0$ |
| 1 | 1 | 0 | 1 | $1$ |
| 1 | 1 | 1 | 0 | $1$ |
| 1 | 1 | 1 | 1 | $X$ |

2. Scelgo quale forma canonica utilizzare: utilizziamo la somma di prodotti (anche il prodotto di somme sarebbe andato bene), quindi prendo in considerazione li righe che hanno come output 1.
3. Realizzo la mappa di Karnaugh:

![](https://i.ibb.co/qMr4J8V/mappa-es.png)

4. Devo decidere che valore dare alle singole X In questo caso conviene metterle tutte a 1 così posso raccogliere, in caso contrario non avrei potuto raccogliere tutti gli 1.

5. raggruppo gli 1 per gruppi grandi potenze di 2:

![](https://i.ibb.co/vBBcJqg/mappa-es2.png)

6. Scrivo l'equazione rispettando la forma canonica scelta (ogni addendo deve essere composto da tutti 1). Prendendo le parti singolarmente abbiamo che:

![](https://i.ibb.co/kq77qtg/parti.png)

$E = (\overline{A}\cdot \overline{B} \cdot \overline{C}) + (\overline{A}\cdot \overline{C} \cdot \overline{D}) + (\overline{A}\cdot \overline{B} \cdot \overline{D}) + (\overline{B}\cdot \overline{C} \cdot \overline{D}) + (B \cdot C \cdot D) + (A \cdot C \cdot D) + (A \cdot B \cdot D) + (A \cdot B \cdot C)$

7. Costruiamo il circuito associato a questa equazione:

![circuito](https://i.ibb.co/f8tKgm0/circuito2.png)

