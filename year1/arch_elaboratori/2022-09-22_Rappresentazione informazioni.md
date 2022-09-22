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

$a*B^4 + b*B^3 + c*B^2 + d*B^1 + e*B^0$

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

$1*2^4 + 0*2^3 + 0*2^2 + 1*2^1 + 1*2^0 = 19$


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

$1*7^2 + 2*7^1 + 2*7^0 = 65$
