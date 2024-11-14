# Indecidibilità

Affrontiamo ora l’indecidibilità di alcuni problemi, cioè problemi che **non ammettono una soluzione algoritmica**.

## Cenni di matematica discreta

Data una funzione $f: A \rightarrow B$:

- $f$ è iniettiva se e solo se ogni elemento di $B$ è associato al massimo un elemento di $A$
- $f$ è suriettiva se e solo se ogni elemento di $B$ è associato ad almeno un elemento di $A$
- $f$ è biettiva se e solo se è sia iniettiva che suriettiva, cioè ogni elemento di $B$ è associato a uno e un solo elemento di $A$

Diciamo che due insiemi $A, B$ hanno la stessa **cardinalità** se e solo se esiste una funzione $f: A \rightarrow B$ tale che questa funzione è biettiva.

**Esempio**:

L’insieme dei numeri naturali $\mathbb{N}$ e l’insieme dei numeri naturali pari, hanno la stessa cardinalità. 

Possiamo infatti considerare la funzione biettiva $f(n) = 2n$, cioè ad ogni elemento associamo il suo doppio.

| n | f(n) |
| --- | --- |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |
| 4 | 8 |
| … | … |

Un **insieme** si dice **numerabile** se e solo se è finito oppure ha la stessa cardinalità dei numeri naturali $\mathbb{N}$

**Esempio**:

L’insieme dei numeri razionali positivi $Q = \{\frac{m}{n}: m, n \in \mathbb{N}\}$ è numerabile

L’obiettivo è quello di dare una biiezione attraverso una matrice in cui abbiamo nelle righe i numeratori e nelle colonne i denominatori. Questa matrice va poi ispezionata con delle diagonali, saltando eventuali ripetizioni.

![https://i.ibb.co/Q9TCnW9/image.png](https://i.ibb.co/Q9TCnW9/image.png)

In questo modo possiamo enumerare gli elementi cerchiati associandoli ad un numero naturale ottenendo così un mapping biettivo.

### L’insieme dei numeri reali $\mathbb{R}$ non è numerabile

Per dimostrarlo utilizziamo la **tecnica della diagonalizzazione**: Supponiamo per assurdo che $\mathbb{R}$ sia numerabile, allora deve esistere una biiezione da $\mathbb{N}$ a $\mathbb{R}$ che chiamiamo $f$ che possiamo raffigurare nel seguente modo

 

| n | f(n) |
| --- | --- |
| 1 | $3.\underline14$ |
| 2 | $5.6\underline23$ |
| 3 | $17.15\underline6$ |
| 4 | $1.189\underline27$ |
| 5 | $3.5555\underline4$ |
| … | … |

Costruiamo un nuovo numero reale che non occorre nella colonna $f(n)$, generando così un assurdo.

Tale numero lo costruiamo facendo in modo che la sua i-esima cifra decimale sia diversa dalla i-esima cifra nell’i-esimo reale della tabella (le cifre sottolineate).

Un ipotetico numero è $0.\underbrace{5}_{\neq 1}\underbrace{7}_{\neq 2}\underbrace{8}_{\neq 6}\underbrace{3}_{\neq 2}\underbrace{8}_{\neq 4}...$

Per come è stato costruito questo numero, esso sarà diverso da tutti i numeri nella colonna di $f(n)$

## Esistenza dei linguaggi indecidibili

Dimostriamo l’esistenza dei linguaggi indecidibili, per farlo dimostriamo che esistono dei linguaggi fuori dall’insieme dei linguaggi turing riconoscibili, che quindi non sono nemmeno decidibili.

**Teorema**: Esistono dei linguaggi che non sono Turing riconoscibili

**Dimostrazione**: Sfruttiamo la cardinalità, cioè dimostriamo che esistono più linguaggi che macchine di Turing, per farlo dobbiamo dimostrare due cose:

1. Dimostriamo che l’insieme delle macchine di Turing è numerabile
2. Dimostriamo che l’insieme dei linguaggi non è numerabile

### insieme delle macchine di Turing è numerabile

Per dimostrarlo osserviamo che l’insieme delle **stringhe** costruite su un qualsiasi **alfabeto finito** $\Sigma$ è **numerabile**.

Infatti considerando l’alfabeto $\Sigma = \{0, 1\}$ possiamo enumerare le stringhe per lunghezza crescente.

Infatti per ogni lunghezza esiste un numero finito di stringhe

 

| n | stringa |
| --- | --- |
| 1 | $\epsilon$ |
| 2 | 0 |
| 3 | 1 |
| 4 | 00 |
| 5 | 01 |
| 6 | 10 |
| 7 | 11 |
| 8 | 000 |
| … | … |

Qualsiasi macchina di Turing può essere codificata come una stringa, di conseguenza anche le macchine di Turing sono numerabili.

### insieme dei linguaggi non è numerabile

Per dimostrarlo dobbiamo prima osservare osservare che l’insieme di **sequenze binarie infinite** non è numerabile, essendo poi che tale insieme ha la stessa cardinalità con l’insieme dei linguaggi allora anche l’insieme dei linguaggi non è numerabile.

Osserviamo che un qualsiasi linguaggio si può rappresentare come una stringa binaria infinita.

Se consideriamo il linguaggio $L = \{0, 00, 01,...\}$ costruito sull’alfabeto $\Sigma = \{0, 1\}$ possiamo rappresentare $L$ come una stringa binaria $L_B$, per farlo possiamo elencare le stringhe rappresentabili con l’alfabeto e comporre la nostra stringa binaria nel seguente modo:

- se nell’i-esimo elemento dell’elenco compare un elemento di $L$ allora metto 1 in quella posizione
- altrimenti metto 0 in quella posizione

$$
\begin{array}{rl}
\Sigma^*&=&\{\epsilon,& 0, & 1, & 00,&01,&10, \cdots\} \\
L&=&\{\,\,\,\, &0,& &00, &01, & \,\,\,\,\,\,\,\,\cdots\} \\
L_B& = &\,\,0&1&0&1&1&\,\,\,\,\cdots
\end{array}
$$

Possiamo dimostrare che l’insieme delle stringhe binarie infinite non è numerabile con una dimostrazione simile per quella fatta con i numeri reali:

Assumiamo per assurdo che l’insieme delle stringhe binarie infinite sia numerabile, allora deve esistere una biiezione che possiamo raffigurare nel seguente modo:

| n | sequenza binaria infinita |
| --- | --- |
| 1 | $\underline00110…$ |
| 2 | $1\underline1001…$ |
| 3 | $01\underline100…$ |
| 4 | $100\underline00…$ |
| 5 | $1110\underline0…$ |
| … | … |

Costruisco una nuova stringa binaria che non compare nella seconda colonna, l’ha costruisco nello stesso modo fatto per i numeri reali, ottengo quindi $10011...$

## Esempio di linguaggio indecidibile

Determinare se una macchina di Turing accetta una stringa in input.

$$
A_{\text{TM}} = \{<M, w>: M \text{ è una MdT e } w \in L(M)\}
$$

**Teorema**: $A_{\text{TM}}$ è indecidibile

**Dimostrazione**: Osserviamo che $A_{\text{TM}}$ è turing-riconoscibile, infatti possiamo costruire una MdT $N$ tale che $L(N) = A_{\text{TM}}$.

- $N =$ su input $<M, w>$
    1. simula $M$ su $w$
    2. ritorna il suo output

$M$ potrebbe andare in loop e di conseguenza $N$ non è un decisore.

Dimostriamo ora che un **decisore** per $A_{\text{TM}}$ **non esiste** (cioè che è indecidibile):

Assumiamo per assurdo che $A_{\text{TM}}$ sia decidibile, allora esiste un decisore $H$ per $A_{\text{TM}}$ tale che su input $<M, w>$:

$$
H(<M, w>) = \begin{cases}
\text{accetta se } M \text{ accetta } w\\
\text{rifiuta altrimenti}
\end{cases}
$$

Costruiamo una nuova MdT $D$ definita come:

- $D =$ su input $<M>$
    1. Copio nella macchina la procedura $H$
    2. esegue $H$ su input $<M, <M>>$
    3. ritorna l’output di $H$ ma invertito

Cioè:

$$
D(<M>) = \begin{cases}
\text{accetta se } M \text{ non accetta } <M>\\
\text{rifiuta se } M \text{ accetta }<M>
\end{cases}
$$

Quando però eseguiamo $D$ sulla codifica di se stesso $<D>$ otteniamo:

$$
D(<D>) = \begin{cases}
\text{accetta se } D \text{ non accetta } <D>\\
\text{rifiuta se } D \text{ accetta }<D>
\end{cases}
$$

ma come può $D$ accettare se per farlo deve rifiutare? questa è una contraddizione.

Possiamo interpretare l’assurdo anche graficamente, tramite una tabella che mostra il comportamento di $H$:

![https://i.ibb.co/8MC8NY4/Diagramma-senza-titolo-drawio.png](https://i.ibb.co/8MC8NY4/Diagramma-senza-titolo-drawio.png)
