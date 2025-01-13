# Metodo Branch & Bound

Analizziamo il metodo **Branch & Bound** (B&B) per la risoluzione di problemi di **programmazione lineare intera** (PLI), cioè in cui i punti che sono **soluzione** del problema oltre a rispettare i vincoli devo avere **tutte le componenti come numeri interi**.

Descriviamo un problema di PLI nel seguente modo:

$$
(P_0):\underset{\begin{array}{lcr}x \in Q_0\\
x\in \Z^n
\end{array}}{\min}\, c^T x
$$

dove $Q_0$ è un poliedro generico.

$\Z=\{0, 1, -1, 2, -2, ...\}$ è l’insieme dei numeri interi

$x$ è quindi un vettore di $n$ componenti intere

Possiamo riformulare in modo più compatto il problema in questo modo

$$
(P_0):\underset{\begin{array}{lcr}
x \in S_0 
\end{array}}{\min}\, c^T x
$$

Dove $S_0 = Q_0 \cap \Z^n$, cioè è un insieme che contiene **tutti e soli i punti del poliedro a coordinate intere**. Ovviamente si ha quindi che $S_0 \subseteq Q_0$

Nella seguente immagine viene rappresentato in blu il poliedro $Q_i$ e come quadratini gli elementi di $S_i$

![https://i.ibb.co/dJjfD3d/image.png](https://i.ibb.co/dJjfD3d/image.png)

Nota: il fatto che i vertici del poliedro facciano tutti parte di $S_i$ è solamente un caso, non è sempre così.

Mentre con le variabili reali si può ottenere un punto di minimo preciso all’interno del poliedro, con variabili intere non è detto che il minimo si trovi in un punto a coordinate intere e quindi verrà selezionato un minimo approssimativo a quello vero ma che ha coordinate intere.

In modo matematico se 

- $\tilde{x_0}$ è soluzione del problema di minimizzazione a **variabili reali**
    
    $$
    \underset{\begin{array}{lcr}
    x \in Q_0 
    \end{array}}{\min}\, c^T x
    $$
    
- $\overline x_0$ è soluzione del problema di minimizzazione a **variabili intere**
    
    $$
    \underset{\begin{array}{lcr}
    x \in S_0 
    \end{array}}{\min}\, c^T x
    $$
    

Allora sicuramente si avrà $f(\tilde x_0) \leq f(\overline x_0)$, cioè $\overline x_0$ sarà una soluzione peggiore o al massimo uguale alla soluzione vera della funzione obiettivo, questo sempre perché $S_0 \subseteq Q_0$

## Idea del metodo Branch and Bound

Il metodo Branch and Bound è una tecnica iterativa che partiziona il problema iniziale in più sottoproblemi (*branching*), stima un limite superiore o inferiore della funzione obiettivo in ogni sottoproblema (*bounding*) e utilizza queste stime per escludere i sottoproblemi che non avranno una soluzione migliore di quella attuale.

È importante sottolineare che in questo metodo **non viene mai risolto un problema a variabili intere** ma sempre la versione del problema lineare (a variabili continue).

Durante l’algoritmo la regione ammissibile di punti iniziale $S_0$ viene partizionata in sotto-regioni $S_i, i = 1, 2, …, k$ in modo che:

$$
S_0 = \bigcup_{i=1}^{k}S_i\\
S_i\cap S_j = \emptyset,\hspace{5mm} i,j \in [0, 1, 2, ..., k] \land i \neq j 
$$

Cioè in regioni non sovrapposte e che unite comprendono tutti i punti ammissibili.

L’algoritmo cercherà quindi di trovare una **stima** alla soluzione del sotto-problema detto “aperto” $(P_i)$

$$
(P_i):\underset{\begin{array}{lcr}
x \in S_i 
\end{array}}{\min}\, c^T x
$$

per calcolare la stima della soluzione per $(P_i)$, risolviamo il problema di programmazione lineare associato $(PL_i)$ ottenuto tramite un **rilassamento dei vincoli di interezza**, un modo per farlo è proprio togliendo i vincoli di interezza:

$$
(PL_i):\underset{\begin{array}{lcr}
x \in Q_i 
\end{array}}{\min}\, c^T x
$$

ottenendo quindi un punto di minimo $x_i$ per quel sottoproblema rilassato, che sarà sicuramente migliore o al più uguale alla soluzione del sottoproblema $(P_i)$.

La soluzione al problema rilassato potrebbe non essere compatibile con il problema originale, poiché non rispetta la condizione di integrità delle variabili. L’algoritmo infatti utilizza tale soluzione come guida per suddividere ulteriormente lo spazio delle soluzioni e individuare un'eventuale soluzione intera ottima.

## Algoritmo

1. Sia $\tilde x$ la variabile che rappresenta **l’ottimo corrente** (cioè il punto a coordinate intere migliore trovato fino a questo momento durante l’algoritmo).
    
    Tale punto può essere inizializzato attraverso una ispezioni visiva del problema, oppure si inizializza come “non noto”
    
2. Sia $\mathcal{L}$ una lista contenente i **problemi aperti**, cioè quelli in cui non si è ancora cercata una soluzione. Tale lista viene inizializzata con il problema iniziale:
    
    $$
    \mathcal{L} = \{(P_0)\}
    $$
    
3. Si estrae un problema qualsiasi $P_i$ dalla lista $\mathcal{L}$ e risolvo la sua versione rilassata $PL_i$:
    1. se $PL_i$ **ha soluzione** $x_i$ **non migliore** di $\tilde x$ (cioè $c^T\tilde x\leq c^Tx_i$) **allora chiudo il problema** $P_i$ rimuovendolo dalla lista (se la soluzione continua, e quindi precisa, è peggiore di quella attuale, la versione intera sarà peggiore o al più uguale)
    2. se $PL_i$ **non può contenere alcuna soluzione** allora chiudo il problema $P_i$ (se non ci sono soluzioni continue non ce ne sono nemmeno di intere)
    3. se $PL_i$ **ha soluzione** $x_i$ **migliore** di $\tilde x$ (cioè $c^T \tilde x > c^Tx_i)$ allora ci sono due possibili casi
        - se $x_i$ ha già tutte le **componenti intere**, allora **si aggiorna l’ottimo corrente** $\tilde x = x_i$ e si chiude il problema $P_i$ rimuovendolo dalla lista
        - se $x_i$ ha **almeno una componente non intera**, allora si partiziona $P_i$ in due sottoproblemi $P_{i+1}$ e $P_{i+2}$. si rimuove quindi $P_i$ e si inseriscono i due sottoproblemi.
            
            Per definire le due partizioni, consideriamo una componente qualsiasi $j$ non intera del vettore soluzione $x_i$ che indichiamo con $x_i^j$, allora i due sottoproblemi saranno:
            
            $$
            (P_{i+1}): \underset{\begin{array}{lcr}x \in S_i\\
            x^j\leq \lfloor x_i^j\rfloor
            \end{array}}{\min}\, c^T x
            $$
            
            $$
            (P_{i+2}): \underset{\begin{array}{lcr}x \in S_i\\
            x^j\geq \lceil x_i^j\rceil
            \end{array}}{\min}\, c^T x
            $$
            
4. Se la lista $\mathcal{L}$ è vuota allora l’algoritmo termina e l’attuale valore di $\tilde x$ è la **soluzione**, altrimenti si ripete il punto 2

In questa immagine è rappresentata graficamente la suddivisione in sottoproblemi

![https://i.ibb.co/mJsYVcG/image.png](https://i.ibb.co/mJsYVcG/image.png)

Dato che la soluzione $x_i$ non ha la componente $x^2$ intera, in particolare vale $1.2$, allora si cerca una soluzione nei poliedri in cui $x^2 \leq 1$ e l’altro in cui $x^2 \geq 2$

## Problema del Knapsack binario

Questo problema è un esempio di programmazione lineare intera.
Ci si pone il problema di riempiere uno zaino **massimizzando** l'utilità degli oggetti al suo interno e **minimizzando** il più possibile il volume interno occupato.

Definiamo quindi:

- $c_i$: utilità di portare l'oggetto $j$-esimo nello zaino
- $a_j$: volume dell'oggetto $j$-esimo
- $b \geq 0$: volume dello zaino
- $n$: numero di oggetti
- $x_j=\begin{cases}1&\text{se l'oggetto j-esimo è inserito nello zaino}\\0&\text{altrimenti}\end{cases}$

Formuliamo il **problema di massimizzazione di partenza**:

$$
(P_0):\underset{\begin{array}{lcr}
a_1x_1 + ... + a_nx_n \leq b\\
x \in \{0, 1\}^n
\end{array}}{\max}\, c_1x_1 + ... +c_nx_n 
$$

Il vincolo di interezza in questo caso è $x \in \{0, 1\}^n$ e in questo caso la versione rilassata del problema è la seguente:

$$
(PL_0):\underset{\begin{array}{lcr}
a_1x_1 + ... + a_nx_n \leq b\\
0\leq x_j \leq 1 \hspace{5mm}j=1...n
\end{array}}{\max}\, c_1x_1 + ... +c_nx_n 
$$

Per risolvere la versione rilassata possiamo fare le seguenti considerazioni tramite una ispezione visiva (ricordiamo che l’obiettivo è massimizzare la funzione obiettivo e minimizzare il membro di sinistra del primo vincolo):

1. se $c_j = 0$ allora l’oggetto $j$-esimo non ha utilità e quindi:
    - se $a_j \geq 0$ (cioè l’oggetto $j$ occupa del volume) allora $x_j = 0$ (non porto l’oggetto)
    - se $a_j < 0$ (possiamo pensare che l’oggetto $j$ si un accessorio che aumenta il volume disponibile nello zaino) allora $x_j = 1$ (porto l’oggetto)
2. se $a_j = 0$ allora l’oggetto $j$-esimo non influenza il volume e quindi:
    - se $c_j \leq 0$ allora $x_j =0$ (non porto l’oggetto)
    - se $c_j > 0$ allora $x_j = 1$ (porto l’oggetto)
3. se $c_j < 0$ (non utile) e $a_j>0$ (occupa volume) pongo $x_j = 0$ (non porto l’oggetto)
4. se $c_j > 0$ (utile) e $a_j < 0$ (guadagno volume) pongo $x_j = 1$ (porto l’oggetto)
5. se $c_j < 0$ e $a_j < 0$ non posso determinare $x_j$ ma effettuo un cambio di variabile $x_j = 1-y_j$ con $y_j \in \{0, 1\}$ che attiva o disattiva il vincolo
    
    In questo modo quando moltiplicherò $c_j \cdot y_j$ e $a_j \cdot y_j$ otterrò quantità positive
    
6. se $c_j>0$ e $a_j > 0$ non posso determinare $x_j$

Rimane da determinare il caso in cui $c_j, a_j$ sono strettamente positivi.

Seguendo i punti precedenti ho già assegnato un valore a $n-m$ variabili (con $m\leq n$).

Si calcolano e si riordinano in maniera non crescente le restanti $m$ variabili in base al rapporto $x_j =\frac{c_j}{a_j}$

$$
\frac{c_1}{a_1} \geq \frac{c_2}{a_2}\geq ... \geq \frac{c_m}{a_m}
$$

In questo modo a sinistra ho gli **oggetti migliori** (più utili e che occupano meno volume).

Si determina ora l’indice $h$, con $1 \leq h \leq m$ tale che:

$$
\sum_{j=1}^{h} a_j \leq b \hspace{5mm} \sum_{j=1}^{h+1}a_j > b
$$

cioè $h$ mi dice quanti oggetti partendo dal migliore posso portare prima di sforare il volume massimo. Se infatti portassi l’oggetto $h+1$, che è il migliore tra i rimanenti, sforerei il volume dello zaino.

Si determina infine

$$
\large\begin{cases}
x_j = 1 & j = 1, ..., h\\
x_{h+1} = \frac{b - \sum_{j=1}^{h}a_j}{a_{h+1}}\\
x_j = 0 & j = h+2, ..., m
\end{cases}
$$

I primi $h$ oggetti (seguendo l’ordinamento dal migliore al peggiore) li porto.

Per l’oggetto $h+1$ ne porto solamente una quantità che mi sta nel volume rimanente.

I restanti oggetti non li porto.

## Esempio numerico knapsack binario

Vediamo un esempio in cui risolviamo un solo step di knapsack binario.

Problema di partenza

$$
(P_0):\underset{\begin{array}{lcr}
3x_1 - 3x_2 + x_3 + x_4 - x_5 \leq \frac{1}{2}\\
x \in \{0, 1\}^6
\end{array}}{\max}\,4x_1 + 2x_2 + 3x_3 -5x_4 - x_5 + x_6
$$

la cui versione rilassata che risolviamo è:

$$
(PL_0):\underset{\begin{array}{lcr}
3x_1 - 3x_2 + x_3 + x_4 - x_5 \leq \frac{1}{2}\\
0 \leq x_j \leq 1 \hspace{5mm} j = 1...6
\end{array}}{\max}\,4x_1 + 2x_2 + 3x_3 -5x_4 - x_5 + x_6
$$

Tramite una ispezione visiva possiamo determinare alcune variabili:

- $x_2 = 1$
- $x_4 = 0$
- $x_5 = (1-y_5)$
- $x_6 = 1$

Riscriviamo quindi il problema

$$
\underset{\begin{array}{lcr}
3x_1 - 3 + x_3 - (1-y_5) \leq \frac{1}{2}\\
0 \leq x_1, x_3, y_5 \leq 1
\end{array}}{\max}\,4x_1 + 2 + 3x_3  - (1-y_5) + 1
$$

$$
\underset{\begin{array}{lcr}
3x_1 + x_3 + y_5 \leq \frac{9}{2}\\
0 \leq x_1, x_3, y_5 \leq 1
\end{array}}{\max}\,4x_1 + 3x_3 + y_5 + 2
$$

Calcoliamo i rapporti delle variabili rimanenti e li riordiniamo in maniera non crescente

$$
\underbrace{\frac{3}{1}}_{x_3} \geq \underbrace{\frac{4}{3}}_{x_1} \geq \underbrace{\frac{1}{1}}_{y_5}
$$

Per determinare $h$ devo sommare in modo ordinato i denominatori dei rapporti, sommandone il più possibile che rispettino però il vincolo.

In questo caso siccome $1 + 3 = 4 \leq \frac{9}{2}$ e sommandoci $1$ sforeremmo $\frac{9}{2}$ allora possiamo stabilire che $h = 2$ (i primi due mi stanno ma il terzo no)

allora determiniamo:

- $x_3 = 1$
- $x_1 = 1$
- $y_5 = \frac{4.5 - (1 +3)}{1} = 0.5$

Quindi la soluzione finale del problema rilassato è data dai seguenti valori di $x_j$

$$
x_1 = 1;\hspace{2mm} x_2 = 1;\hspace{2mm} x_3 = 1;\hspace{2mm} x_4 = 0;\hspace{2mm} x_5 = 1-y_5 =0.5;\hspace{2mm} x_6 = 1
$$
