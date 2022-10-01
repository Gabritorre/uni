
  
# Rappresentazione informazioni

Nelle informazione c'è una sostanziale differenza fra simbolo e significato:
- Il simbolo è un modo di rappresentare quella informazione.
- il significato è il concetto che esprime quella informazione.

Es. simbolo = 'a'; significato = prima lettera dell'alfabeto italiano.

È quindi necessario avere una convenzione per collegare il simbolo al significato.

**L'alfabeto** è un insieme finito di simboli.
alfabeto binario $= \{0,1\}$

**La codifica** fornisce la corrispondenza fra gli elementi dell'alfabeto e i dati.

Un alfabeto di N simboli e una lunghezza k di simboli fornisce $N^k$ configurazioni possibili.

Es. alfabeto binario e lunghezza 4:

$2^4 = 16$ configurazioni possibili.

## Codifiche
Per codificare informazioni non numeriche sono nate diverse convenzioni standard che permettono di comunicare: ASCII, extended ASCII, UTF-8.

Per codificare informazioni numeriche viene utilizzato il sistema posizionale.

Noi siamo abituati ad vedere i numeri con la numerazione araba in base 10: (0,1,2,3,4,5,6,7,8,9).

Ma è possibile rappresentare i numeri in qualsiasi base $B$:
$A = \{0,1,2,3,...,B-1\}$

(Per convenzione si prendono i numeri in ordine crescente partendo da 0)

### conversione da base B a base 10

Prendendo un numero $abcde_B$ ogni lettera rappresenta una cifra e risiede in una determinata posizione:

<table>
<tr>
    <th>Posizione</th>
    <td>4</td>
    <td>3</td>
    <td>2</td>
    <td>1</td>
    <td>0</td>
</tr>
<tr>
    <th>Cifra</th>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
    <td>e</td>
</tr>
</table>

Per convertire in base 10 è sufficiente moltiplicare la cifra per la base elavata alla sua posizione, sommando poi i risultati:


$a * B^4 + b * B^3 + c * B^2 + d * B^1 + e * B^0$


#### Esempio Base 2

Convertire $10011_2$ in base 10

<table>
<tr>
    <th>Posizione</th>
    <td>4</td>
    <td>3</td>
    <td>2</td>
    <td>1</td>
    <td>0</td>
</tr>
<tr>
    <th>Cifra</th>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>1</td>
</tr>
</table>

$1 * 2^4 + 0 * 2^3 + 0 * 2^2 + 1 * 2^1 + 1 * 2^0 = 19$


#### Esempio Base 7

Convertire $122_7$ in base 10

<table>
<tr>
    <th>Posizione</th>
    <td>2</td>
    <td>1</td>
    <td>0</td>
</tr>
<tr>
    <th>Cifra</th>
    <td>1</td>
    <td>2</td>
    <td>2</td>
</tr>
</table>

$1 * 7^2 + 2 * 7^1 + 2 * 7^0 = 65$

### conversione da base 10 a base B

Per convertire un numero in base 10 in una base B qualsiasi bisogna dividere il numero per la base B e prendere il resto:

Per convertire $25_{10}$ in base 2:

|dividendo| divisore | resto |
|--|--|--|
| 25 | 2 | 1 |
| 12 | 2 | 0 |
| 6  | 2 | 0 |
| 3  | 2 | 1 |
| 1  | 2 | 1 |

La colonna del resto va letta dal basso verso l'alto, quindi il risultato è: $110011_2$


### Conversione da base 2 a base 8 e vice versa

Per convertire un numero binario in base 8 basta raggruppare per triplette e convertire le triplette in decimale, poi si concatenano i risultati:

$1011010101$ raggruppiamo le triplette: $1$ $011$ $010$ $101$

$1_2$ = 1

$011_2$ = 3

$010_2$ = 2

$101_2$ = 5

Quindi il risultato è: $1325_8$

Per convertire un numero ottale in binario si convertono le singole cifre in binario a 3 bit e si concatenano i risultati:

convertire $267_8$ in base 2:
$2_8 = 010$
$6_8 = 110$
$7_8 = 111$

Si ottiene quindi: $010110111_2$ . gli zeri a sinistra si possono rimuovere quindi: $10110111_2$

### Conversione da base 2 a base 16 e vice versa

Si utilizza lo stesso identico meccanismo della base 8 solo che al posto di gruppi da tre si prendono gruppi da quattro e i valore dopo il 9 sono:

- A = 10
- B = 11
- C = 12
- D = 13
- E = 14
- F = 15

$100101111$ raggruppato diventa $10$ $0101$ $1111$

$10_2$ = 2

$0101_2$ = 5

$1111_2$ = F

quindi è risulta: $25F_{16}$

Per convertire un numero esadecimale in binario si convertono le singole cifre in binario a 4 bit e si concatenano i risultati:

$A67_{16}$ diventa $1010$ $0110$ $0111_2$

## Somma binaria

La somma in binario si svolge come la classica somma in colonna.

Svolgiamo $13_{10} + 11_{10}$ in 5 bit

$13_{10} = 01101$

$11_{10} = 01011$

|   | 1 | 1 | 1 | 1 |   |   |
|---|---|---|---|---|---|---|
|   | 0 | 1 | 1 | 0 | 1 | + |
|   | 0 | 1 | 0 | 1 | 1 | = |
|   | 1 | 1 | 0 | 0 | 0 |   |

$11000= 24_{10}$


### Overflow

Quando il risultato è troppo grande per essere rappresentato in un centro numero di bit si presenta **l'overflow**.

Se la somma scritta sopra fosse stata fatto in 4 bit. il bit più a sinistra non sarebbe stato rappresentabile e il risultato sarebbe stato erroneamente 8.

## Numeri negativi

Esistono principalmente tre modi diversi per rappresentare i numeri negativi in binario.

### Modulo e segno

Questo metodo utilizza la cifra più a sinistra come segno del numero:

$0 = +$

$1 = -$

Con 3 bit si ha la tabella:

| BIN | DEC |
|--|--|
| 0 00 | +0 |
| 0 01 | +1 |
| 0 10 | +2 |
| 0 11 | +3 |
| 1 00 | -0 |
| 1 01 | -1 |
| 1 10 | -2 |
| 1 11 | -3 |

Con questo metodo non è molto semplice capire il segno del risultato e capire se bisogna sommare o sottrarre. In più presenta 2 versioni dello 0.

### Complemento a uno

Questo metodo bisogna invertire il valore dei bit per trovare il negativo di un numero.

Con 3 bit si ha la tabella:

| BIN | DEC |
|--|--|
| 000 | +0 |
| 001 | +1 |
| 010 | +2 |
| 011 | +3 |
| 100 | -3 |
| 101 | -2 |
| 110 | -1 |
| 111 | -0 |

011 ( $+3_{10}$) invertito è 100 ( $-3_{10}$ )

Questo metodo non permette di fare somme di numeri negativi. In più presenta 2 versioni dello 0.

### Complemento a due

Questo metodo bisogna invertire il valore dei bit e sommare 1 per trovare il negativo di un numero.

Con 3 bit si ha la tabella:

| BIN | DEC |
|--|--|
| 000 | +0 |
| 001 | +1 |
| 010 | +2 |
| 011 | +3 |
| 100 | -4 |
| 101 | -3 |
| 110 | -2 |
| 111 | -1 |

011 ( $+3_{10}$ ) invertito è 100 e sommando 1 si ottiene 101 ( $-3_{10}$ )

(In questo metodo si risolve la ripetizione dello 0 nella versione positiva e negativa).

Il complemento a due è il meccanismo più utilizzato nei calcolatori.

Avendo n bit possiamo rappresentare $2^{n-1}-1$ valori positivi e $2^{n-1}$ valori negativi.


N.B. In tutti questi tre meccanismi il bit più a sinistra corrisponde al segno (0 = positivo; 1 = negativo).


### Da decimale negativo a complemento a due

Per rappresentare $-2$ su 3 bit in binario complemento a 2

è possibile usare la formula: $2^{n\_bit}-|N_{10}|$ (2 elevato al numero di bit - il valore decimale da convertire in valore assoluto) e convertire in binario il risultato:

$-2_{10} = 2^3-2 = 8-2 = 6 \text{ che in binario diventa } 110$

quindi $-2_{10} = 110_2$

### Da binario in complemento a 2 in decimale

Per rappresentare $110_2$ scritto in complemento a 2 in decimale:

Si converte nel solito modo ma se il bit più a sinistra è $1$ allora sarà negativo il risultato ($-2^i$):

<table>
<tr>
    <th>Posizione</th>
    <td>2</td>
    <td>1</td>
    <td>0</td>
</tr>
<tr>
    <th>Cifra</th>
    <td>1</td>
    <td>1</td>
    <td>0</td>
</tr>
</table>

$1 * (-2^2) + 1 * 2^1 + 0 * 2^0 = -4+2 = -2$

## Cambio di segno

Avendo un numero in binario per invertire il segno basta invertire tutti i bit a sinistra della cifra ad 1 meno significativa (a destra).

$01100_2 = 12_{10}$

Invertendo i bit a sinistra del 1 meno significativo ottengo:

$10100_2 = -12_{10}$

Questa regola non funziona per il numero negativo più piccolo rappresentabile con quel numero di bit:

$10000000 = -128$

invertendo ottengo lo stesso numero

$10000000 = -128$

## Estensione dei bit

Avendo un numero rappresentato in 4 bit per esempio e vogliamo rappresentarlo in 8 bit basta ripetere il bit più a sinistra.

- $0010 = 0000|0010$
- $1010 = 1111|1010$

## Addizione e Sottrazione in complemento a 2

La sottrazione è una somma in cui il secondo addendo è negativo:

$7-6 = 7+(-6)$

$7_{10} = 0111$

$-6_{10} = 1010$

| 1 | 1 | 1 | 0 |   |   |
|---|---|---|---|---|---|
|   | 0 | 1 | 1 | 1 | + |
|   | 1 | 0 | 1 | 0 | = |
| 1 | 0 | 0 | 0 | 1 |   |

Il risultato su 4 bit è $0001$ che è corretto, il resto di 1 sul 5 bit non vale come overflow.

## Riconoscere l'overflow

È possibile vedere la presenza di overflow secondo la seguente tabella:

| |   SOMMA   | SOTTRAZIONE  |
|-------------|----------|-----------------|
|  pos. pos.  |   overflow  |  no overflow    |
|  neg. neg.  |   overflow  |  no overflow    |
|  pos. neg.  | no overflow |    overflow     |
|  neg. pos.  | no overflow |    overflow     |

### Esempio particolare di overflow

sommando $01111$ (15) e $00001$ (1) (somma di due numeri positivi)

|   | 1 | 1 | 1 | 1 |   |   |
|---|---|---|---|---|---|---|
|   | 0 | 1 | 1 | 1 | 1 | + |
|   | 0 | 0 | 0 | 0 | 1 | = |
|   | 1 | 0 | 0 | 0 | 0 |   |

In questo caso è presente overflow perché la somma di due positivi non può restituire un numero negativo: $10000$ (-16)

Lo stesso vale per la somma di due numeri negativi: $10100$ (-12) e $10101$ (-11)

$10100 + 10101 = 01001$ (9)

(la somma di due negativi non può dare un numero positivo).

**È possibile riconoscere facilmente l'overflow guardando gli ultimi due riporti, se sono uguali non è presente overflow**.
