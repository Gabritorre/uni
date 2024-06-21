# Il computer

Le macchine moderne sono basate sulla macchina di Von Neumann formata da:
![](https://i.ibb.co/wLSs9J6/von-neamann.png)

- **CPU**: è la parte elaborativi divisa in più parti:
	- La CU (control unit): coordina tutte le operazioni che deve svolgere la CPU.
	- La ALU (Arithmetic Logic Unit): è la parte che svolge effettivamente le operazioni.

		Il processore esegue le operazione che sono scritte in modo a lui comprensibile: possiede quindi un ISA (Instruction Set Architecture) cioè un insieme di istruzione povere che il processore è in grado di comprendere.

- **Memoria**: Indica la memoria RAM, cioè quel posto dove sono presenti i dati che il processore sta lavorando.
	Si tratta di una memoria volatile, per cui una volta tolta l'alimentazione tutti i dati al suo interno vengono persi.

- **Intput / Output**: periferiche e dispositivi che possono interagire con l'esterno e che quindi possono ottenere o inserire dei dati: tastiera, dischi fissi, rete, stampante, CD, ecc...
- **Bus**: canale di comunicazione che permette di trasferire i dati fra i diversi componenti dell'elaboratore. Sono di tre tipi: address bus, control bus e data bus.

Oltre a CPU, RAM, periferiche di I/O un computer è formato da:
- Motherboard (con i relativi bus e porte per la connettività (ethernet, USB, ecc...))
- Alimentatore
- Disco di archiviazione (HDD o SSD). A differenza della memoria RAM questi non sono volatili per cui mantengono i dati nel tempo anche senza alimentazione, d'altra parte sono molto più lenti di una memoria RAM.

Ed altre componenti opzionali:
- Scheda video
- Scheda di rete
- Scheda audio
- Case
- Lettore disco

## Astrazione

l'Astrazione è un concetto che serve a semplificare l'utilizzo del computer agli utenti: cioè dato che un computer è formato e funziona attraverso meccanismi molto complessi, una persona per poter utilizzare il computer non deve per forza conoscere questi complessi meccanismi.

L'utente deve vedere il computer come una entità unica rispetto a vederlo come un insieme di componenti connessi tra loro.

L'interfaccia grafica è il livello di astrazione più esterno.

L'astrazione ha lo svantaggio di omettere alcuni dettagli nella fase di semplificazione.

### Livelli di astrazione
|lv.|          nome             |
|---|---------------------------|
| 4 | Linguaggi ad alto livello |
| 3 | Assembler                 |
| 2 | Sistema operativo         |
| 1 | Linguaggio macchina       |
| 0 | hardware / firmware       |


Le istruzione scritte in un linguaggio ad alto livello possono essere tradotti in linguaggio assembler il quale ha un corrispettivo diretto con il linguaggio macchina (i bit).

Quando un codice viene compilato da un compilatore si passa subito da linguaggio ad alto livello a linguaggio macchina (il codice eseguibile).

#### Il livello hardware e firmware

Le sequenze di bit vengono interpretate dai dispositivi hardware come impulsi elettrici (1 = acceso, corrente passa, 0 = spento, corrente non passa), attraverso questo meccanismo è possibile fare operazioni e salvare dati in memoria.

Il firmware si occupa di interpretare ed eseguire le sequenze del l'ISA (livello superiore)

#### Il livello linguaggio macchina
Sono un insieme di istruzioni facilmente interpretabili per il processore e spesso sono diverse da processore a processore.
Sono sostanzialmente stringhe di bit ben organizzate in **codici** e **operandi**:

- I codici sono le operazioni base da eseguire.
- Gli operandi sono le zone di memoria su cui le operazione lavorano.

#### Il livello assembler
Offre una visione più comprensibile all'uomo del linguaggio macchina: le stringhe di bit vengono convertite in istruzioni scritte in modo comprensibile e sensato.

L'assemblatore è un software che si occupa di tradurre da linguaggio macchina (binario) ad un linguaggio più comprensibile.

#### Il livello linguaggi ad alto livello
Sono l'insieme di tutti i linguaggi più utilizzati ad oggi per produrre software, con istruzioni più intuitive e semplici per l'uomo.

É necessario un compilatore o un interprete per convertire il codice in linguaggio macchina.

## Software

Il software è tutto ciò che fa parte del computer e che non è tangibile.
Esistono **software di sistema** che permettono il funzionamento base del computer, ma la maggior parte sono **software applicativi** che permettono al computer di fare le più svariate operazioni.


  
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

#### Trucchetto bello

Se il numero negativo è piccolo è più facile rappresentare in binario il numero positivo e poi fare cambio di segno (invertire ciò che sta a sinistra del 1 meno significativo).

Es. $-15_{10}$ su 8 bit

Rappresento il 15: $00001111$

Faccio il cambio di segno:

$11110001$


### Da binario in complemento a 2 in decimale

Per rappresentare $110_2$ scritto in complemento a 2 in decimale:

Si converte nel solito modo ma se il bit più a sinistra è $1$ allora sarà negativo il risultato ( $-2^i$ ):

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

## Numeri razionali

Esistono due modi per rappresentare i numeri con la virgola: quello in virgola fissa e in virgola mobile.

### Virgola fissa

In questo metodo viene presa una quantità fissa di bit per la parte intera e per la parte frazionaria.

Utilizzando sempre il sistema posizionale gli esponenti della parte frazionaria saranno negativi:

Prendendo come esempio $15.75_{10}$

 <table>
<tr>
    <th>Posizione</th>
    <td>1</td>
    <td>0</td>
    <td>-1</td>
    <td>-2</td>
</tr>
<tr>
    <th>Cifra</th>
    <td>1</td>
    <td>5.</td>
    <td>7</td>
    <td>5</td>
</tr>
</table>


#### Da base 10 a base 2
Utilizziamo 8 bit per la parte intera e 8bit per la parte frazionaria.

Convertiamo $25.125_{10}$ in base 2.

La parte intera viene convertita normalmente tramite divisioni successive:

$25_{10} = 00011001$

Per la parte frazionaria si lavora per moltiplicazioni successive prendendo la parte intera ad ogni iterazione:

![](https://i.ibb.co/1rbdN1f/frazionibin.png)

I valori binari si leggono dall'alto verso il basso qundi il risultato finale è: $00011001.00100000$

Per convertire un numero in base qualsiasi in una base B basta moltiplicare per la base B e prendere sempre la parte intera.

### Da base 2 base 10

$1010.1_{10}$

 <table>
<tr>
    <th>Posizione</th>
    <td>3</td>
    <td>2</td>
    <td>1</td>
    <td>0</td>
    <td>-1</td>
</tr>
<tr>
    <th>Cifra</th>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>0.</td>
     <td>1</td>
</tr>
</table>

$1 \cdot 2^3 +1 \cdot 2^1.1 \cdot 2^{-1} = 8+2.\frac{1}{2} =10.5$

Utilizzare la virgola fissa crea delle difficoltà nel rappresentare numeri molto grandi o molto piccoli, per questo viene utilizzata la **virgola mobile**

### Virgola mobile
In questo metodo la virgola non ha una posizione fissa, e per rappresentare un numero in virgola mobile (floating point) si utilizza **segno, esponente e mantissa**. I numeri in binario sono composti in questo modo:

$$(-1)^S \cdot 2^E \cdot M$$

Se il segno ( $S$ ) è 0 allora il segno è **positivo** se è 1 allora il segno è negativo.
Quindi viene utilizzato un bit per il segno, un gruppo di bit per l'esponente e un gruppo di bit per la mantissa:
- maggiori sono i bit assegnati alla mantissa significano una maggiore precisione
- maggiori sono i bit assegnati all'esponente significano un aumento dell'intervallo dei numeri rappresentabili.

Per quanto riguarda **l'esponente** ci possono essere casi di:
- *overflow*: se l'esponente è troppo grande per essere rappresentato con il numero di bit assegnati.
- *underflow*: se l'esponente (negativo) è troppo piccolo per essere rappresentato con il numero di bit assegnati.

La mantissa rappresenta la parte frazionaria, e possiede il **bit nascosto** che vale 1 e sta a sinistra della virgola:

$M = 1,01010...$

poi quel bit a 1 viene omesso quando si scrive il numero per esteso

Degli intervalli tipici sono:
- a singola precisione (32 bit): 1bit segno; 8bit esponente; 23bit mantissa
- a doppia precisione (64 bit): 1bit segno; 11bit esponente; 52bit mantissa

### notazione polarizzata

Per una facilitazione nel riconoscere la grandezza del numero binario l'IEEE754 ha introdotto un metodo per avere il numero più negativo come una serie di $0$ e il numero più positivo come una serie di $1$.

Per fare ciò in singola precisione si aggiunge $127$ all'esponente mentre in doppia precisione si aggiunge 1023 all'esponente.

Il valore dell'esponente in notazione polarizzata varia:
- da -126 a 127 in singola precisione
- da 1022 a 1023 in doppia precisione

N.B. il valore totalmente composto da 0 rappresenta lo 0 e quello composto totalmente da 1 è riservato a casi speciali (infinito o NaN).

La notazione polare è composta quindi:
- Da decimale a binario
$$(-1)^S \cdot (1+m) \cdot 2^{e+polarizzazione}$$
- Da binario a decimale
$$(-1)^S \cdot (1+m) \cdot 2^{e-polarizzazione}$$

#### Esempio 1:
convertiamo $-118.5_{10}$ in binario utilizzando la singola precisione

Il numero è negativo quindi S = 1

convertiamo il numero ( $118.5$ ) in binario: $1110110.1$

ora spostiamo la vergola a sinistra fino a lasciare solo l'ultimo 1 a sinistra della virgola: $1.1101101$ dato che ci siamo spostati di 6 posizioni allora: $1.1101101 \cdot 2^6$

La mantissa è quindi la parte a destra della virgola riempita di zero fino a raggiungere i 23 bit: $1101101 \text{ } 0000000000000000$

L'esponente è 6 ma prima di trasformarlo in binario bisogna sommarlo a 127: $133 = 10000101$

componendo il tutto abbiamo:
$1 \text{ } 1000101 \text{ } 1101101000000000000000$

#### Esempio 2:

Convertire $1\text{ }00001011 \text{ }01000000000000000000000$ in decimale

segno: negativo = 1

esponente: $00001011_2 = 11_{10}$

mantissa: $0.01_2 = 0.25_{10}$

quindi: $(-1)^1 \cdot (1+0.25) \cdot 2^{(11-127)} =-1.25\cdot2^{-116}$

### Sommare numeri in floating point

Per eseguire la somma di $5_{10} + 3.625_{10}$ con una precisione di 4 bit

convertiamo in binario i numeri:

$5_{10} = 101_2 = 1.01 \cdot 2^2$

$3.625_{10} = 11.101_2 \cdot 2^0 = 1.1101*2^1$

Ora bisogna prendere il numero più piccolo e far diventare l'esponente uguale a quello del numero maggiore, in questo caso 2 (shifting).

$1.1101 \cdot 2^1= 0.11101 \cdot 2^2$

Eseguire la somma:

| 1 | 1 | 1 | 0 | 0 | 0 |   |   |
|---|---|---|---|---|---|---|---|
|   | 1.| 0 | 1 | 0 | 0 | 0 | + |
|   | 0.| 1 | 1 | 1 | 0 | 1 | = |
| 1 | 0.| 0 | 0 | 1 | 0 | 1 | $\cdot 2^2$|

$10.00101 \cdot 2^2 = 1.000101 \cdot 2^3$

Se non si presenta overflow o underflow si può proseguire.

Per farlo diventare con una precisione a 4 bit dobbiamo arrotondare la virgola a 4 bit:

$1.000101 \cdot 2^3 = 1.0001 \cdot 2^3$


## Introduzione scoprire errori di lettura

Le informazioni vengono salvati nelle celle della memoria RAM, le celle sono lunghe 8bit e i gruppi di celle sono word (lunghe 32 bit o 64 bit in base alla CPU)

Per riconoscere un errore di lettura una tecnica è quella di calcolare la distanza di Hamming, cioè quanti bit di differenza ci sono tra la stringa corretta e quella letta:

$H(c, c') = 0$ stringa corretta
$H(c, c') > 0$ stringa non corretta

Es. 

1011101

10**0**1**0**01

$H(c, c') = 2$ (le due stringhe differiscono di 2 bit)

Per correggere **singoli errori** si può utilizzare un bit di parità, cioè un bit messo a destra che è 1 se il numero di bit a 1 è dispari mentre è 0 se il numero di bit a 1 è pari.


  
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

# Circuiti logici

Esistono principalmente due tipi di circuiti logici:
- I **circuiti sequenziali** se i valori di uscita dipendono dai valori di ingresso e dallo stato del sistema
- I **circuiti combinatori** se i valori di uscita dipendono unicamente dai valori di ingresso

## Circuiti combinatori

I circuiti combinatori costituiscono la base su cui poi costruire circuiti più complessi.

Appartengono a questa categoria:
- mutiplexer (mux)
- demultiplexer (demux)
- decoder
- ALU

## Multiplexer

componente che prende in input $n$ valori e restituisce in output un solo valore.

Possiede $log_2n$ **segnali di controllo**, cioè degli ulteriori input su cui si basa la decisione di che valore mandare in output.

$n = 2 \to 1 \text{ segnale. } n = 4 \to 2 \text{ segnali}. n = 8 \to 3 \text{ segnali} ...$

![](https://i.ibb.co/vkXkLkT/mux.png)

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $0$ |
| 0 | 0 | 1 | $0$ |
| 0 | 1 | 0 | $0$ |
| 0 | 1 | 1 | $1 \checkmark$ |
| 1 | 0 | 0 | $0$ |
| 1 | 0 | 1 | $1 \checkmark$ |
| 1 | 1 | 0 | $1 \checkmark$ |
| 1 | 1 | 1 | $1 \checkmark$ |


## Demultiplexer

Riceve in ingresso un segnale e restituisce $n$ linee in uscita.

utilizza $log_2{n}$

- Se l'input è 0 allora tutti gli output saranno a 0, indipendentemente dai segnali di controllo.

- Se l'input è 1 allora solo un output dovrà essere a 1, dipende dai segnali di controllo.

## Decoder

Prende $n$ input e restituisce **2^n** output

![](https://i.ibb.co/ZhgCRWj/decoder.png)

Saranno messi ad 1 solo solo il valore dell'indice che corrisponde al valore decimale della sequenza in input.

## PLA e ROM

Per la realizzazione di circuiti combinatori possono venire utilizzati PLA o ROM

### PLA

"Programmable Logic Array"
Permette di costruire funzioni logiche in forma SP, quindi utilizza porte AND e OR. 

Per costruire la propria funzione si bruciano gli input che non interessano e si lasciano quelli che interessano.

### ROM

"Read Only Memory"

si suddividono in :
- PROM: (Programmable ROM) sono scrivibili una sola volta.
- EPROM: (Erasable PROM) cancellabile e riscrivibile

Può essere rappresentata come una matrice di celle in cui in ogni colonna è presente una funzione logica.


# MIPS

MIPS è un processore il cui IS (instruction set) è risicato e permette di fare solo operazioni elementari (somma, differenza, prodotto, divisione) tra coppie di operandi (**i registri**) a 32 bit = 4byte = 1 word.

I registri vengono riconosciuti dal $ che li precede, sono in totale 32 registri e sono contenuti nel **Register File** all'interno del processore.

Le istruzioni sono composte da 3 operandi, es:

	add $8, $9, $10
che corrisponde a:

	A = B + C

A = $8
B = $9
C = $10

In caso di somme tra più di due addendi vengono spezzate in più somme fatte da due addendi.

## Load e Store

Sono istruzioni che permettono di passare da memoria principale a registri e vice versa:

	- sw (store) serve per passare da registro a memoria principale
	- lw (load) serve per passare da memoria principale a registro

![](https://i.ibb.co/zn4BbtM/array-sum.png)

NOTA: lw è scritto come: "lw reg_destinazione, cella_partenza" mentre sw è scritto come "sw reg_partenza, cella_destinazione".

Se bisogna fare delle operazioni su degli array bisogna prima caricare (load) l'elemento interessato e poi rimetterlo in memoria (store) una volta fatta l'operazione.

Avendo un array A[n] e parte dal registro $4 possiamo ottenere i suoi valori facendo:
- A[0] = 4*0($4) = 0($4) = $4
- A[1] = 4*1($4) = 4($4) = $4 + 4
- A[2] = 4*2($4) = 8($4) = $4 + 8

In generale quindi

$$A[i] = 4*i(\$4)$$

## Istruzioni di controllo

Sono istruzioni per che servono a prendere delle decisioni.

### Salto condizionato

	beq $4, $5, <Label_name> (branch if equal)
	bne $4, $5, <Label_name>(branch if not equal)
	
Questi due comandi comparano i contenuti di due registri e nel caso la condizione sia vera "saltano" ad una parte di codice riconosciuta da una **Label**

### Salto non condizionato

	j <Label_name>

"Salta" alla Label in ogni caso, senza fare nessun confronto.

### Confronto di minore

	slt $10, $4, $5(set if less than)
	
vengono comparati i contenuti dei registri $4 e $5 e se il primo è minore del secondo allora nel registro $10 verrà messo 1 altrimenti verrà messo 0.
	 
## Formato delle istruzioni

Le istruzioni del MIPS sono formate da 32bit: 
- le istruzioni aritmetico-logiche (tra cui *slt*) utilizzano il formato **R-type**.
- Le istruzioni come *lw*, *sw*, *beq* e *bne* utilizzano il formato **I-type**.
- Il comando *j* utilizza il formato **j-type** dove viene inserito l'indirizzo di memoria di 26 bit dove saltare.

### R-Type

![](https://i.ibb.co/rtpK2Xd/r-type.png)

### I-Type

![](https://i.ibb.co/dDbR05V/i-type.png)


### J-Type

![](https://i.ibb.co/fMNjzHz/jtype.png)


## Operazioni con costanti

basta scrivere i comandi seguiti da una "i" alla fine. es:

	addi $29, $29, 4 	(sommare al reg. $29 la costante 4)

## Operatori logici

é possibile svolgere anche operazioni logiche base: 

	and $5, $1, $2
	or $6, $3, $4
viene fatto l'and o l'or logico tra i bit del contenuto dei registri.


# ALU

ALU acronimo che sta per *Aritmetic Logic Unit* è un circuito combinatorio presente nel processore che si occupa di svolgere tutte le operazioni aritmetico-logiche.

## Somma

Le somme vengono fatte attraverso delle porte logiche XOR, la cui tabella di verità corrisponde esattamente alla somma di bit:

| A | B | XOR |
|--|--|--|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

| A | B | A+B | Riporto |
|--|--|--|--|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Lo xor viene rappresentato con la seguente porta logica:

![](https://i.ibb.co/LZVLPX2/xor.png)

NB: Le somme vengono fatte da destra verso sinistra (come le somme fatte su carta)

## circuito somma di una ALU ad 1-bit

![](https://i.ibb.co/PWsQSZT/1bitalu.png)

Si hanno 3 valori in input: il bit A, il bit B e il bit Rip, il bit Rip è il riporto che in questo caso sarà ad 0 dato che il riporto ha senso di esistere sono in somme tra più di un bit.

Si hanno 2 valori in output. il bit Sum, derivato dallo somma e il riporto in uscita.

La ALU però può fare contemporaneamente anche l'AND e l'OR tra i due input e quindi è necessario un multiplexer per decidere quale operazione mandare in output

![](https://i.ibb.co/NsP7N8r/alugrande.png)

Una ALU più reale a 32-bit è composta quest'ultimo circuito affiancato ad altri. La prima 1-bit ALU lavora sul bit più a destra e man mano si arriva alla 1-bit ALU che lavora sui bit più a sinistra (Quelli più significativi). 

![](https://i.ibb.co/KyCwcL3/32alu.png)

Qui si nota l'importanza del riporto in output che corrisponde al riporto in input per il bit successivo.

## Sottrazione

la ALU può svolgere anche sottrazioni. Per sottrazione si intende una somma in cui il secondo addendo è negativo. Ricordando che la ALU lavora in complemento a due per fare l'opposto di un numero quello che fa è fare il complemento a 1 (cioè fare un **not**) e poi sommare 1 (mettendo il riporto in input uguale a 1)

![](https://i.ibb.co/Jv7Wr32/alusub.png)

## NOR

é possibile implementare anche una porta NOR senza inserire una nuova porta.

per fare ciò dobbiamo poter avere sia a che b negati, ma dato che b potevamo già averlo negato per la sottrazione basta fare lo stesso con a:

![](https://i.ibb.co/4Z8CWtF/noralu.png)



## Istruzioni di confronto

**slt** (*set less than*): per fare questa operazione è necessario aggiungere un ingresso in più nell'ALU, In questo ingresso verrà dato 0 o 1 in base al risultato dell'istruzione **slt** (1 se è vero, 0 se è falso).

Per effettuare il confronto si fa la **sottrazione**, e dopo aver verificato che non è presente overflow, si mette il **bit di segno** (quello più a sinistra) nella posizione meno significativa (quella più a destra) e tutti gli altri bit vanno a 0.

Quindi la nostra ALU risulterà così:

![](https://i.ibb.co/5F2KCvq/alugrande.png)

l'**Overflow detection** prende in input $a$ e $-b$ (di cui gli interessa il segno), prende il Binvert per sapere di star facendo una sottrazione, il resto della somma e il risultato della somma (di cui gli interessa il segno).

Restituisce in output la presenza o meno di overflow e restituisce anche *Set* cioè il bit di segno della sottrazione, Questo output (*Set*) andrà ridiretto verso la 1-bit ALU che lavora sui bit meno significativi (cioè la prima 1-bit ALU).

Quindi avremo che l'ultima 1-bit ALU ridirige il *Set* sulla prima 1-bit ALU.

![](https://i.ibb.co/BzvTvY4/alucomplessiva.png)

Possiamo riassumere le combinazione dei vari input nelle relative istruzioni in questa tabella:

| Ainvert | Binvert | CarryIn | Operation | Istruzione |
|--|--|--|--|--|--|
| 0 | 0 | 0 | 00 | **and** |
| 0 | 0 | 0 | 01 | **or** |
| 0 | 0 | 0 | 10 | **sum** |
| 0 | 1 | 1 | 10 | **sub** |
| 0 | 1 | 1 | 11 | **slt** |
| 1 | 1 | X | 00 | **nor** |

Notiamo però che *Binvert* e *CarryIn* hanno gli stessi valori e quindi possiamo metterli insieme in un campo chiamato **Bnegate**

| Ainvert | Bnegate | Operation | Istruzione |
|--|--|--|--|--|
| 0 | 0 | 00 | **and** |
| 0 | 0 | 01 | **or** |
| 0 | 0 | 10 | **sum** |
| 0 | 1 | 10 | **sub** |
| 0 | 1 | 11 | **slt** |
| 1 | 1 | 00 | **nor** |

Possiamo aggiungere anche i salti condizionati *beq* e *bne* controllando se *a=b* oppure se sono diversi: Zero = 1 quando sono uguali, altrimenti Zero = 0.

![](https://i.ibb.co/84gQ8CS/alufinale.png)

La ALU viene rappresentata con il seguente modo:

![](https://i.ibb.co/RBhKJmL/alu-normale.png)

# Moltiplicazione e divisione tra interi

## moltiplicazione in binario

Utilizzando il metodo "carta e penna" abbiamo che la moltiplicazione in binario si svolge nel seguente modo:

![](https://i.ibb.co/Zcxz8HY/molt-bin.png)

Abbiamo quindi che per rappresentare la moltiplicazione di n bit ci servono il doppio dei bit (4 bit del moltiplicando, 3 (4 mettendo uno zero a sinistra) bit del moltiplicatore) $\to$ 8 bit per rappresentare il risultato.

### Metodo 1

È possibile implementare in circuito che svolge la moltiplicazione utilizzando una ALU a 64bit e shiftando il **moltiplicando a sinistra** e il **moltiplicatore a destra**, per poi sommare il prodotto e il moltiplicando ad ogni passaggio.


### Metodo 2

È possibile implementare in circuito che svolge la moltiplicazione utilizzando una ALU a 32bit shiftando il **moltiplicatore e il prodotto a destra**, per poi sommare il prodotto e il moltiplicando ad ogni passaggio.

### Metodo 3

In questo metodo viene memorizzato il moltiplicatore nella parte più a sinistra del prodotto, 	il **prodotto** viene **shiftato a destra** e viene sommato il moltiplicando con i bit della metà di sinistra del prodotto.

### Segno della moltiplicazione

Per gestire il segno della moltiplicazione conviene:
1. Convertire moltiplicando e moltiplicatore in numeri positivi
2. Eseguire la moltiplicazione
3. Decidere il segno del risultato utilizzando la regola dei segni (negativo se il segno di moltiplicando e moltiplicatore sono discordi) (fare il complemento a 2 se il risultato è negativo)


## Divisione

Utilizzando il metodo "carta e penna" abbiamo che la divisione in binario si svolge nel seguente modo:

![](https://i.ibb.co/QYh40sj/div-bin.png)

supponendo di dividere interi su 4 bit.
L'algoritmo memorizza
- Il **quoziente** su un registro a 4 bit
- Il **divisore** nella metà sinistra di un registro ad 8 bit
- Il **resto** su un registro ad 8 bit che viene inizializzato con il valore del **dividendo**

Ad ogni passo si effettua la sottrazione tra dividendo e divisore e si controlla il segno del risultato. Poiché il dividendo è memorizzato nel registro del resto la sottrazione da effettuare è in realtà **resto – divisore** e il risultato viene messo in **resto**.

Ad ogni passo si esegue lo shift a dx di una posizione del divisore

Questo viene fatto per capire quando il divisore è più piccolo della parte considerata del dividendo.

- Se il segno della sottrazione è positivo viene **shiftato a sinistra il quoziente** e viene inserito 1
- Se il segno della sottrazione è negativo viene **shiftato a sinistra il quoziente** e viene inserito 0, inoltre ripristino il valore precedente del resto


### altro metodo

Esiste un metodo che semplifica il circuito e che utilizza una ALU a 32 bit (rispetto a 64 bit del precedente metodo), in cui il resto viene shiftato a sinistra e il divisore viene sottratto solo dalla metà sinistra del registro del resto

### Segno della divisione

Anche in questo caso conviene:
1. convertire dividendo e divisore in numeri positivi
2. eseguire la divisione lasciando fuori i bit di segno
3. utilizzare la regola dei segni per stabilire il segno del risultato (negativo se il segno di dividendo e divisore sono discordi)

### Segno del resto

In breve il **segno del resto** deve essere **uguale** al **segno del dividendo**

# Circuiti sequenziali

I circuiti sequenziali a differenza di quelli combinatori sono in grado di calcolare funzioni che dipendono anche dallo stato della memoria.

Questi circuiti fanno uso di **latch** cioè un elemento (composto da porte logiche) in grado di memorizzare un singolo bit

## S-R latch

S-R latch è un circuito composto da due porte NOR concatenate.

- S sta per *set* e serve a settare l'uscita su 1
- R sta per *reset* e serve per settare l'uscita su 0

l'output cambia anche ricevendo in input gli stessi valori:

![](https://i.ibb.co/MNdKvBp/srlatch.png)

il latch di sinistra memorizza il valore 0 mentre quello di destra memorizza il valore 1.

## Clock

Non bisogna abilitare sia il set che il reset insieme.

per questo viene introdotto il **clock** cioè un intervallo di tempo che i circuiti utilizzano per sincronizzarsi. Il clock determina quindi il ritmo dei calcoli e delle operazioni di memorizzazione.

Il clock si misura in Hz (cicli al secondo)

Circuito con l'utilizzo del clock (**D-latch**)

![](https://i.ibb.co/Kr1Scxj/dlatch.png)

- C corrisponde al *clock*
- D=1 corrisponde al *set*
- D=0 corrisponde al *reset*

Grazie alle due porte AND i segnali di *set* o *reset* solo quando il clock è acceso.

Utilizzando questo metodo però è possibile che si verifichino dei *glitch* (valori che cambiano durante il clock alto) dati dai vari ritardi dei segnali che devono attraversare le porte.

### Timing

Si possono progettare diversi circuiti di memoria in base a quando si vuole memorizzare il dato:

- **level-triggered methodology**: la memorizzazione avviene su livello alto o basso del clock (D-latch)
- **edge-triggered methodology**: la memorizzazione avviene durante la salita o discesa del clock (flip-flop)


## Flip-flop semplice con generatore di impulsi

### Generatore di impulsi

Come dice il nome stesso si tratta di un circuito che genera degli impulsi in corrispondenza della salita del segnale di interesse.

![](https://i.ibb.co/2sFg4Mw/gen-imp.png)

Questo svolgerà il ruolo del clock nel flip-flop.

### Flip-flop semplice
![](https://i.ibb.co/2YS1MHH/flip-flop-semp.png)

problema: la brevità del segnale non permette di percorrere tutti il circuito combinatorio per poi ritornare al flip-flop

### Flip-flop complesso (D flip-flop)

Questo tipo di flip-flop viene realizzato mettendo il serie due D-latch (*master* e *slave*). Rispetto al flip-flop semplice questo memorizza quando il clock "scende" e non quando "sale"

![](https://i.ibb.co/ZhLB8H8/dflip-flop.png)

Quindi quando il clock diventa alto il primo D-latch memorizza il valore di Q' e solo quando il clock scende il secondo D-latch può ricevere in input Q' e far uscire Q.

## Circuito sequenziale sincrono

Si tratta di un **blocco logico** composto da circuiti combinatori (che si occupano di calcolare l'output e i valori da memorizzare) e elementi di memoria (flip-flop)

![](https://i.ibb.co/QNbLs7x/circ-seq-sinc.png)

### Tipi di circuito

- Ciruito sequenziale di **Mealy**

	In cui l'ouput dipende da: input e stato
- Circuito sequenziale di **Moore**

	In cui l'output dipende solo dallo stato.


## Register file

Il **Register File** è un componente della CPU in cui sono presenti i registri che il processore utilizza per svolgere le sue operazioni

ogni registro è costituito da più flip-flop (32 nel caso del MIPS)

Il Register File del MIPS contiene in totale 32 registri


![](https://i.ibb.co/hc0GLSn/register-file.png)

- Read register number 1: identifica quale è il primo registro da leggere
- Read register number 2: identifica quale è il secondo registro da leggere
- Write register: identifica quale è il registro in cui scrivere
- Write data: valore da scrivere nel registro identificato da "Write register"
- Read data 1: valore del primo registro da leggere
- Read data 2: valore del secondo registro da leggere
- Write: è un segnale che lavora assieme al **clock**, serve a dire si vuole abilitare la modalità scrittura

### Lettura

Per la lettura dei due registri sono necessari due multiplexer

### Scrittura

Per la scrittura è necessario un decoder

## Memoria principale (RAM)

Dato che la dimensione e la quantità dei registri è troppo piccola per memorizzare strutture dati complesse viene introdotta la **RAM** (Random Access Memory), una memoria molto più capiente dei registri ma anche più lenta di essi. È una memoria volatile come i registri.

Le RAM si suddividono principalmente in due sottogruppi

### SRAM
Le Static RAM, che sono molto veloci ma poco capienti (come le memorie cache). Viene realizzata con i *latch*.

Ha una dimensione $H \times W$ in cui:

- $H$ numero di celle indirizzabili (tutte le celle hanno la stessa lunghezza)
- $W$ numero di latch per ogni cella

Non è possibile scrivere e leggere contemporaneamente

Non è possibile realizzare SRAM nello stesso modo dei registri:

Date le più grandi dimensioni delle SRAM rispetto ai registri, utilizzare **multiplexer e decoder** con moltissime linee di input risulta una grossa perdita di performance.

Per rimpiazzare i multiplexer vengono utilizzati i **buffer a tre stati** che possiedono due input (il *dato* e il segnale *enable* che lascia o meno passare il *dato*) e un output: se *enable* è attivo allora l'output sarà il dato altrimenti l'output viene impedito.

![](https://i.ibb.co/Pt2ynrJ/buffer-tre-stati.png)

Per risolvere il problema del grande decoder viene utilizzato un decoder più piccolo e una batteria di piccoli multiplexer. Così facendo gli indirizzi vengono "spezzati" in due parti (**SRAM a due livelli**).


### DRAM
Le Dynamic RAM, che sono più capienti delle static ma hanno tempi di accesso più lenti. inoltre utilizzano **condensatori** per memorizzare i bit, che sono componenti che hanno bisogno di essere *refreshati* per non perdere il dato che stanno memorizzando.

Viene utilizzato un **transistor** per ogni bit per andare a trasferire il bit nel condensatore.

Il *refresh* consiste nel riscrivere a intervalli fissi i valori appena letti.

Anche in questo caso gli indirizzi vengono "spezzati" in due parti, la parte sinistra viene considerato **indirizzo di riga** (che passa per un decoder) mentre la parte destra viene considerata **indirizzo colonna** (che passa per un multiplexer)

### Synchronous SRAM e DRAM

Queste memorie permettono di aumentare la banda di trasferimento della memoria sfruttando il fatto che:
le celle consecutive differiscono solo nella parte destra dell'indirizzo.

Quindi è possibile trasferire un blocco di indirizzi che condividono tutti la parte sinistra dell'indirizzo, al posto di passarli uno alla volta.

## Circuito di Moore

Nei circuiti di Moore abbiamo che l'output dipende dallo stato mentre lo stato successivo dipende dall'input e dallo stato.

La successione di operazioni da fare per realizzare un circuito di Moore è:

1. specifica testuale
2. specifica utilizzando gli automi a stati finiti
3. realizzare la tabella di verità dell'output
4. realizzare la tabella di verità dello stato successivo
5. semplificare le tabelle di verità con le mappe di Karnaugh
6. Realizzare il circuito con le porte logiche


Nella specifica con gli automi abbiamo che i **nodi** rappresentano **gli stati** che hanno al loro interno **gli output** mentre gli **archi** sono gli **input**.

### Esempio

Creiamo un circuito per gestire i semafori di un incrocio.

input: sensori che dicono se sono presenti macchine in attese. NScar (per le macchine in attese sulla strada Nord-Sud), EWcar (per le macchine in attesa sulla strada Est-West)
output: accensione (rosso/verde) dei semafori. NSlite (semaforo sulla strada Nord-Sud in cui 1 = verde), EWlite (semaforo sulla strada Est-West in cui 1 = verde)

Ipotizziamo inoltre che NSlite e EWlite non possono mai essere entrambi accesi o entrambi spenti

![](https://i.ibb.co/92CMnbS/esempio-moore.png)

Automa:
Partiamo realizzando i due stati possibili: quello in cui è verde per la strada NS e quello in cui è verde per la strada EW.
![](https://i.ibb.co/P981DwH/automa1.png)

Implementiamo il fatto che se nell'altra strada non ci sono macchine in attesa rimaniamo nello stesso stato
![enter image description here](https://i.ibb.co/B2GqP33/automa2.png)

Quando sono presenti delle macchine in attesa nell'altra strada allora cambiamo stato facendo diventare verde l'altra strada
![enter image description here](https://i.ibb.co/3vGvfyS/automa3.png)

Do una rappresentazione binaria per rappresentare tutti gli stati, Dato che ho 2 stati posso rappresentarli con 1 bit

|Stato| s |
|--|--|
| NSgreen | 0 |
| EWgreen | 1 |

Tabella di verità **output**:
mettere per ogni stato le varie combinazioni all'interno del nodo

| s | NSlite | EWlite |
|---|--|--|
| 0 | *1* | *0* |
| 1 | *0* | *1* | 

Minimizzando otteniamo:

NSlite = ~s
EWlite = s

Tabella di verità **next state**:
mettere per ogni stato le varie combinazioni di input (archi)

| s | NScar | EWcar | new_s |
|---|--|--|--|
| 0 | X | 0 | *0* |
| 0 | X | 1 | *1* | 
| 1 | 0 | X | *1* |
| 1 | 1 | X | *0* |

Estendendo la tabella otteniamo:

| s | NScar | EWcar | s' |
|---|--|--|--|
| 0 | 0 | 0 | *0* |
| 0 | 0 | 1 | *1* | 
| 0 | 1 | 0 | *0* |
| 0 | 1 | 1 | *1* |
| 1 | 0 | 0 | *1* |
| 1 | 0 | 1 | *1* |
| 1 | 1 | 0 | *0* |
| 1 | 1 | 1 | *0* |


Minimizzando usando la mappa di Karnaugh:

![](https://i.ibb.co/KDQmtgn/karn-moore.png)

$s' = \overline{s} \cdot \text{EWcar} + s \cdot \overline{\text{NScar}}$

Realizziamo il circuito

![](https://i.ibb.co/bHgBr8k/circuito-finale.png)



## Circuito di Mealy

Nei circuiti di mealy abbiamo che sia l'output che lo stato successivo dipendono dallo stato e dall'input.

La successione di operazioni da fare per realizzare un circuito di Mealy è:

1. specifica testuale
2. specifica utilizzando gli automi a stati finiti
3. realizzare la tabella di verità dell'output
4. realizzare la tabella di verità dello stato successivo
5. semplificare le tabelle di verità con le mappe di Karnaugh
6. Realizzare il circuito con le porte logiche

Le differenze sostanziali da un circuito di Moore sono:

- Gli output che venivano messi dentro i nodi dell'automa vanno rimossi 
- Negli archi ora abbiamo una notazione: INP/OUT

### Esempio

vogliamo realizzare un circuito di Mealy che riceve in ingresso una sequenza di bit, all’interno della quale deve riconoscere se le varie sotto-sequenze di 3 bit hanno un numero pari o dispari di bit uguali ad 1.

Le sotto-sequenze considerate non si sovrappongono.

Ogni qualvolta il circuito arriva a leggere il terzo bit di ogni sotto-sequenza deve restituire il valore $P$ o $D$ ( $P$ per pari, $D$ per dispari).

L’output in corrispondenza di tutte le altre posizioni della sequenza deve essere $N$ .

Quindi per una sequenza di input come:

Input: $011\hspace{1 mm}010\hspace{1 mm}101...$

Avremo un output:

Output: $NNP\hspace{1 mm}NNS\hspace{1 mm}NNP...$

Automa:
Partiamo da uno stato iniziale $I$, da cui si riparte ogni volta che si termina una sotto-sequenza di 3bit

Poi gestiamo tutte le varie combinazione utilizzando altri 4 stati:

- $P_1$ e $D_1$ per la lettura del primo bit
- $P_2$ e $D_2$ per la lettura del secondo bit

Per il terzo bit si tornerà allo stato iniziale $I$

![](https://i.ibb.co/T0QJr0d/automa-mealy.png)

Do una rappresentazione binaria per rappresentare tutti gli stati, Dato che ho 5 stati ho bisogno di 3 bit per rappresentarli tutti

|Stato| $s_2$ $s_2$ $s_2$|
|--|--|
| $I$ | $0\hspace{2mm}0\hspace{2mm}0$ |
| $P_1$ | $0\hspace{2mm}0\hspace{2mm}1$ |
| $P_2$ | $0\hspace{2mm}1\hspace{2mm}0$ |
| $D_1$ | $0\hspace{2mm}1\hspace{2mm}1$ |
| $D_2$ | $1\hspace{2mm}0\hspace{2mm}0$ |
| $-$ | $1\hspace{2mm}0\hspace{2mm}1$ |
| $-$ | $1\hspace{2mm}1\hspace{2mm}0$ |
| $-$ | $1\hspace{2mm}1\hspace{2mm}1$ |

Do una rappresentazione binaria per rappresentare anche agli output, Dato che ho 3 output possibili ho bisogno di 2 bit per rappresentarli tutti

| Output| $O_1$ $O_2$ |
|---|--|
| $N$ | $0\hspace{4mm}0$ |
| $D$ | $0\hspace{4mm}1$ |
| $P$ | $1\hspace{4mm}0$ |
| $-$ | $1\hspace{4mm}1$ |


Ora dobbiamo realizzare le tabelle di verità per lo stato successivo ( $s_2', s_2', s_2'$ ) e per l'output ( $O_1, O_2$ ), dato che abbiamo 3 stati e un input avremo una tabella con 16 righe

|$s_2$ $s_1$ $s_0$ $I$| $s_2'$ $s_2'$ $s_2'$| $O_1$ $O_2$|
|--|--|--|
| $0\hspace{2mm}0\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}1$ $(P_1)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}0\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}1\hspace{2mm}1$ $(D_1)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}0\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}1\hspace{2mm}0$ $(P_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}0\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}1\hspace{2mm}0\hspace{2mm}0$ $(D_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}1\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}1\hspace{4mm}0$ $(P)$
| $0\hspace{2mm}1\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}0\hspace{4mm}1$ $(D)$
| $0\hspace{2mm}1\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}1\hspace{2mm}0\hspace{2mm}0$ $(D_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}1\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}1\hspace{2mm}0$ $(P_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $1\hspace{2mm}0\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}0\hspace{4mm}1$ $(D)$
| $1\hspace{2mm}0\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}1\hspace{4mm}0$ $(P)$
| $1\hspace{2mm}0\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}0\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$ |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$ |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 


Minimizzando usando la mappa di Karnaugh per ogni stato successivo e per ogni output:

Mappa di $s_2'$

![](https://i.ibb.co/SdwF06C/s2.png)

$s_2' = (\overline{s_1} \cdot s_0 \cdot \overline{I}) + (s_1 \cdot s_0 \cdot \overline{I})$

Mappa di $s_1'$

![](https://i.ibb.co/wCHZTDD/s1.png)

$s_1' = (\overline{s_2} \cdot \overline{s_1}\cdot \overline{s_0} \cdot I) + (\overline{s_1} \cdot s_0 \cdot I) + (s_1 \cdot s_0 \cdot I)$

Mappa di $s_0'$

![](https://i.ibb.co/ZL5s8cS/s0.png)

$s_0' = (\overline{s_2} \cdot \overline{s_1}\cdot \overline{s_0})$

Mappa di $O_1$

![](https://i.ibb.co/0G7RKtq/o1.png)

$O_1 = (s_1 \cdot \overline{s_0} \cdot \overline{I}) + (s_2 \cdot I)$

Mappa di $O_2$

![](https://i.ibb.co/YtT6yfv/o2.png)

$O_2 = (s_1 \cdot \overline{s_0} \cdot I) + (s_2 \cdot \overline{I})$


Realizziamo il circuito

![](https://i.ibb.co/gFVzPsz/circuito-mealy.png)

## Microistruzioni

Quando gli stati in un automa sono molti diventa difficile disegnarlo, in alternativa si possono usare delle microistruzioni per descrivere il circuito.

Esempio di sintassi in un circuito di Moore:

$S_i: O_i (c_{i1}) \text{Next}_{i1}; (c_{i2}) \text{Next}_{i2};... (c_{im}) \text{Next}_{im}$

Abbiamo quindi:

- $S_i$ individua lo stato corrente
- $O_i$ output in base allo stato corrente
- $c_{im}$ condizione sui valori di input
- $\text{Next}_{im}$ stato in cui saltare

Le microistruzioni vengono memorizzate in ROM.


# Progetto CPU Mips-like singolo ciclo

Realizzazione teorica di una CPU Mips-like semplificata in grado di fare:

- **memory reference**: lw, sw (I-type format)
- **arithmetic-logic**: add, sub, and, or, slt (R-type format)
- **control-flow**: beq (I-type format), j (J-type format)

La CPU che vogliamo progettare eseguirà per ogni istruzione in un **singolo ciclo di clock**.

Dobbiamo poter accedere sia alla memoria principale (M[x]) sia ai registri (R[y])

È necessario avere anche un registro speciale, il **program counter** (PC) che conterrà l'indirizzo di memoria dell'istruzione corrente da eseguire.


## Implementazione generica di una istruzione

- Uso il Program Counter (PC) per ottenere l'indirizzo dell'istruzione da eseguire
- Leggo l'istruzione dalla memoria (**fetch**)
- Interpreta i campi necessari per eseguire l'istruzione (**decode**)
- Utilizzo l'ALU per l'esecuzione (**execute**)
	tutte le istruzioni che vogliamo implementare necessitano di fare dei calcoli e operazioni. *lw,sw* la utilizzano per calcolare gli indirizzi; *beq* perché esegue una sottrazione per controllare se i valori sono uguali
- Il Program Counter viene aggiornato e vengono ripetuti tuttii passaggi.

![](https://i.ibb.co/YXTyqjD/isa.png)

**sign_ext(x)**: significa che l'indirizzo x composto da $n$ bit viene esteso a 32 bit (che è la dimensione degli indirizzi di memoria) mantenendo sempre il suo valore.

**BEQ** l'istruzione beq adotto un indirizzamento di tipo *Program Counter relative* significa che calcola l'indirizzo in cui saltare partendo dall'indirizzo dell'istruzione beq.

Se l'istruzione beq si avvera abbiamo che l'indirizzo su cui saltare è dato da:
*PC + 4 + (sign_ext(Imm16) << 2)*

- *PC + 4*: punta alla istruzione successiva alla beq (4 perche le istruzioni sono lunghe 4 byte)
- *sign_ext(Imm16)*: Abbiamo che l'indirizzo di 16 bit (Imm16) viene esteso in 32 bit, il valore rappresentato da questo indirizzo dice quante istruzioni deve saltare per arrivare alla label.
- *(sign_ext(Imm16) << 2)* Il numero di quante istruzioni sono da saltare viene shiftato di 2, cioè il valore viene moltiplicato per 4 (sempre perché ogni istruzione è formata da 4 byte)


### Memoria istruzioni e memoria dati

Abbiamo bisogno di due memorie perché essendo limitati ad una istruzione per ciclo di clock non possiamo sia leggere un dato che scrivere il risultato dell'istruzione nello stesso ciclo di clock.

Quindi abbiamo la memoria di istruzioni che leggerà le istruzioni ad ogni ciclo di clock.

Mentre abbiamo la memoria dati per quando dobbiamo scrivere  in memoria il risultato di una istruzione.

## Sommatori aggiuntivi

Dato che l'ALU è impegnata a svolgere i calcoli delle istruzioni

- Abbiamo bisogno di un sommatore che (durante lo stesso ciclo di clock dell'istruzione corrente), incrementi il PC per l'istruzione successiva
- Abbiamo bisogno di un sommatore calcoli l'indirizzo della beq
- Sono necessari anche vari mux la dove ci possono essere delle scelte nelle istruzioni (es: incrementare normalmente il PC oppure aumentare il PC secondo la beq; eseguire una istruzione I-type oppure una R-type; eseguire una load oppure una istruzione aritmetico-logico; ecc...)

## Controllo ALU

Dobbiamo creare un circuito in grado ci calcolare l'ALU operation che soddisfi la specifica seguente

![](https://i.ibb.co/rQcJ3Kw/alu-operation.png)

Questa scelta viene fatta utilizzando due campi: ***op*** e ***funct***

Il circuito da creare sarà composto da due livelli

1. il primo calcolerà ***ALUop*** (2 bit) utilizzando il campo *op*

| ALUop configuration | Operation |
|--|--|
| 00 | lw e sw |
| 01 | beq |
| 10 | 	arithmetic/logic (sum, sub, AND, OR, slt) |

2. Il secondo livello utilizzerà il campo ALUop calcolato e il campo *funct* (6 bit)
	
	Il campo *funct* torna utile solo nelle istruzioni aritmetico-logiche (le R-type), mentre per lw, sw e beq è sufficiente il campo *op*.

Per determinare i bit di operation si svolgono delle operazioni tra i bit di *op* e i bit di *funct* nel seguente modo (i pedici rappresenta il bit):

- $\text{Operation}_0 =  (\text{Funct}_0 \text{ OR } \text{Funct}_3) \text{ AND } \text{ALUop}_1$
- $\text{Operation}_1 =  \text{NOT Funct}_2 \text{ OR } \text{NOT ALUop}_1$
- $\text{Operation}_2 =  (\text{Funct}_1 \text{ AND } \text{ALUop}_1) \text{ OR } \text{ALUop}_0$
- $\text{Operation}_3 =  \text{sempre a 0}$

![](https://i.ibb.co/SVF7QGg/op-funct.png)

### Jump

Anche per implementare la jump è necessario aggiungere un multiplexer per decidere tra beq e jump.

per calcolare il salto:

Il PC mantiene i 4 bit più significativi inalterati mentre gli altri 28 vengono sostituiti dall'indirizzo di destinazione (sono 26 bit shiftati di 2, quindi diventano 28)

Si dice che la jump è PC-relative solo per i 4 bit più significativi del PC


## Componente controllo 

Fino ad ora abbiamo visto la parta di **datapath** che si occupa di svolgere effettivamente le istruzione

Per quanto riguarda la parte di **controllo** si occupa della decodifica delle istruzioni, dell'invio delle istruzione al datapath e invio dei segnali di controllo necessari alla ALU, sommatori, multiplexer, ecc...

Il circuito della parte controllo è un **circuito combinatorio** e si basa su una coppia di tabella: una per l'input che riceve (l'istruzione da decodificare) e una per l'output (segnali di controllo da mandare al datapath)

## Problematiche CPU a singolo ciclo

- Per poter stabilizzare tutti i componenti bisogna tarare il clock nell'istruzione che richiede più tempo, quindi si avrà un tempo di clock molto lungo.
- Come conseguenza del punto precedente abbiamo che nelle istruzione che richiedono meno tempo per essere eseguito abbiamo un grosso spreco di tempo prima di arrivare al ciclo successivo.
- Abbiamo molte risorse duplicate: sommatori, multiplexer, 2 memorie

# Progetto CPU Mips-like multi ciclo

Per risolvere le problematiche della CPU a singolo ciclo Adottiamo una CPU multi ciclo in cui le istruzioni vengono eseguite in più di un ciclo. Così facendo abbiamo che 

- Possiamo impostare un tempo di **clock più corto**
- Le **istruzioni più brevi** ci metteranno **meno tempo** ad essere eseguite (nel singolo ciclo tutte le istruzioni ci mettevano lo stesso tempo)
- **Minore replicazione di risorse** dato che possono essere impiegate in cicli diversi per la stessa istruzione.
- Abbiamo dei **registri aggiuntivi** che servono a memorizzare i risultati parziali tra un ciclo e l'altro.

Questa volta non abbiamo bisogno di due memorie perché la fase di **lettura** e la fase di **scrittura** avvengono in **cicli diversi**

Inoltre ora l'ALU viene utilizzata sia aggiornare il Program Counter sia per calcolare l'indirizzo dei salti


## Sequenza di esecuzione

L'obiettivo generale è quello di far lavorare più componenti contemporaneamente e di anticipare del lavoro che eventualmente verrebbe richiesto nei cicli futuri, quindi ci saranno diverse operazioni che verranno fatte in contemporanea.

1. *fetch* dell'istruzione **e** incremento del PC 

	l'incremento del PC viene fatto per far lavorare l'ALU che altrimenti avrebbe fatto un ciclo senza lavorare. Nonostante questo, l'utilizzo del nuovo PC potrebbe entrare in gioco diversi cicli dopo perché bisogna completare tutti i cicli necessari per completare l'istruzione corrente prima di passare alla prossima.
	
2. Decodifica dell'istruzione **e** lettura dei registri **e** calcolo del branch address
	
	- viene decodificata l'istruzione mandando il campo *op* al controllo che si occuperà di organizzare i segnali di controllo per quella specifica istruzione
	- Vengono letti i valori dei registri interessati dall'istruzione (*rs* e *rt* per le R-type per esempio)
	- Il calcolo del *branch address* viene sempre fatto per impegnare l'ALU, grazie a questo calcolo nel caso l'istruzione decodificato fosse una *beq* nel ciclo successivo l'indirizzo a cui saltare sarebbe già stato calcolato.

3. Esecuzione di R-type **o** Calcolo indirizzo di memoria **o** Completa *beq* **o** completa *jump*
	
	In questa fase può:
	-  essere eseguita una R-type (sum, sub, and, or, slt)
	- venir calcolato l'indirizzo di memoria (ram) sul quale poi andare a scrivere il risultato (per una sw) oppure sul quale andare a leggere (per una lw)
	- venir completata la *beq* aggiornando il PC con l'indirizzo calcolato nel ciclo precedente
	- venir completata una jump aggiornando il PC con l'indirizzo letto nel ciclo precedente

4. Accesso alla memoria **o** completa R-type

	In questa fase abbiamo che:
	- l'accesso alla memoria il cui indirizzo è stato calcolato nel ciclo precedente. Serve sia per *lw* che per  *sw*, quest'ultima però viene completata in questo ciclo dato che scriverà in quel indirizzo e non deve fare altro.
	- può venir completata una R-type: se nel precedente ciclo veniva svolto il calcolo effettivo in questo viene scritto il risultato in un registro.

5. Write back
	
	Questo passaggio serve solo per la *lw*: dopo che ha letto il contenuto in memoria nel ciclo precedente, ora deve scrivere in un registro quel contenuto


### Quantità cicli per istruzione

Abbiamo quindi che ogni istruzione per essere eseguita completamente necessita dai 3 ai 5 cicli, in particolare:

|n. cicli | istruzione |
|--|--|
| 3 | beq - jump |
| 4 | R-type (sum, sub, and, or, slt) - sw |
| 5 | lw |


## Controllo

Tutti i segnali di controllo questa volta dipendono non solo dal tipo di istruzione da eseguire ma anche dal passo specifico in cui siamo di quella istruzione.

Quindi i segnali di controllo cambieranno ad ogni ciclo di clock, sarà quindi un **circuito sequenziali**

Particolare attenzione necessita i segnali di controllo sul PC che devono gestire il suo aggiornamento in caso di:

- PC = PC + 4
- beq
- jump

tenendo conto che PC = PC + 4 va fatto quando si presenta una nuova istruzione e non ad ogni ciclo


## Resoconto finale

Se proviamo a confrontare i millisecondi impiegati per le istruzioni nel caso della nostra CPU a singolo ciclo contro quella a multi ciclo notiamo che i tempi non sono completamente migliori nel caso della multi ciclo (beq e jump più veloci, R-type stesso tempo, lw più lenta).

Questa comparazione però non è comparabile con una CPU reale, una CPU reale ha un set di istruzione molti più vasto di quello considerato da noi e soprattutto sono presenti istruzioni molti più lunghe della *lw*. Quindi nella realtà la CPU multi ciclo porta un notevole miglioramento dei tempi di esecuzione rispetto alla CPU a singolo ciclo.

Ulteriori miglioramenti sono data dalla CPU pipeline.


# Valutazione delle prestazioni

Misurare le prestazioni oggettiva della CPU è molto complesso perché ci sono molte cose da tenere conto contemporaneamente.

Quello che vogliamo misurare è lo **user CPU time** cioè il tempo effettivo di esecuzione del programma da parte della CPU senza considerare le operazioni di I/O, del sistema operativo e altre attese.


## Parametri per calcolare le prestazioni

## Frequenza

la **frequenza** indica quanti cicli al secondo vengono fatti dalla CPU:

$$F[\text{Hz}] = \frac{1}{T} \hspace{5mm} \text{dove } T \text{ è il il periodo di un ciclo di clock}$$


## Instruction count

L'instruction count (*IC*) rappresenta il numero di istruzioni del programma da eseguire

## Numero di cicli

Il numero di cicli (*cicli*) rappresenta il numero di cicli necessari per eseguire il programma

## Cicli per istruzione

Con i dati precedenti possiamo ottenere un numero che rappresenta la media dei cicli per istruzione (*CPI*):


$$\text{CPI} = \frac{\text{cicli}}{\text{IC}}$$

## Tempo di esecuzione

Possiamo quindi trovare il **tempo di esecuzione** facendo:
$$\text{T}_{\text{exe}} = \text{IC} \cdot \text{CPI} \cdot T \hspace{5mm} T = \text{periodo di clock}$$

$$\text{oppure}$$

$$\text{T}_{\text{exe}} = \frac{\text{IC} \cdot \text{CPI}}{F} \hspace{5mm} F = \text{frequenza}$$

$$\text{oppure}$$

$$\text{T}_{\text{exe}} = \text{cicli} \cdot T \hspace{5mm} T = \text{periodo di clock}$$

$$\text{oppure}$$

$$\text{T}_{\text{exe}} = \frac{\text{cicli}}{F} \hspace{5mm} F = \text{frequenza}$$

Possiamo anche definire le **performance** (*throughput*) come:

$$\text{Perf}_x = \frac{1}{\text{T}_{\text{exe}_{x}}}$$

Possiamo paragonare due macchine calcolando lo **speedup**:

$$\text{speedup} = \frac{\text{T}_{\text{exe}_{x}}}{\text{T}_{\text{exe}_{y}}} = n \hspace{5mm} \text{con } \text{T}_{\text{exe}_{x}} > \text{T}_{\text{exe}_{y}}$$

Diciamo quindi che la macchina $y$ è $n$ volte più veloce della macchina $x$

## MIPS
È possibile ottenere una media che rappresenta quanti milioni di istruzione sono eseguite per secondo (*MIPS*)

$$\text{MIPS} = \frac{\text{IC}}{\text{T}_{exe} \cdot10^6}$$


## Legge di Amdahl

Si tratta di una legge che fissa un limite allo speedup massimo quando vengono introdotte delle ottimizzazioni

$$\text{T}_{ott} = \frac{1}{s}\text{T}_{exe} + \frac{((1-\frac{1}{s})\text{T}_{exe})}{n}$$

dove $n$ è il miglioramento ottenuto tramite le ottimizzazioni (spesso è il valore da trovare)

$s$ è il tempo in secondi che il programma impiega

otteniamo quante volte è migliore calcolando lo speedup:

$$\text{speedup} = \frac{\text{T}_{exe}}{\text{T}_{ott}}$$
