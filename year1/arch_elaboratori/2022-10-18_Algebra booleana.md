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

| A | $\sim$A |
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


### NOT

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


3. Scrivo gli input che ho preso in considerazione come prodotti che devono dare come risultato 1 (le entry dei prodotti devono essere tutti ad 1 per dare 1 come risultato)

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

3. Scrivo gli input che ho preso in considerazione come somme che devono dare come risultato 0 (le entry delle somme devono essere tutti ad 0 per dare 0 come risultato)

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

Il vantaggio di utilizzare la forme canoniche è che una funzione logica viene scritta in modo univoco e poi quando vengono utilizzate le porte logiche si hanno al massimo due livelli di profondità di (and/or)
