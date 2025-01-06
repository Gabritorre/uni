# Automi a pila

Vediamo un nuovo modello computazionale chiamato **automa a pila** (*pushdown automata*, **PDA**) capace di riconoscere alcuni linguaggi non regolari.

Questi automi sono come gli automi non deterministici (NFA) con l’aggiunta di una componente chiamata pila (***stack***).

Lo stack è una struttura dati basata sulla metodologia LIFO (*Last In First Out*), che quindi permette le operazioni di ***push* in testa (aggiunta), *pop* in testa (rimozione), e *top* in testa (lettura).**

**I PDA sono equivalenti alla grammatiche context-free**.

Possiamo descrivere il suo comportamento come:

- legge gli input sequenzialmente come un NFA
- ha uno stato interno che può cambiare
- ha a disposizione uno stack infinito dove può leggere e scrivere

## Esempio di PDA

Vediamo il comportamento a grandi linee di un PDA per il seguente linguaggio (non regolare) $\{0^n1^n | n\geq 0\}$

- legge i simboli di input
- quando incontra uno $0$ fa un *push* nello stack di $0$
- quando incontra un $1$ passa ad un nuovo stato e fa un *pop* dallo stack,
    
    finché legge $1$ continua a fare *pop* dallo stack
    
    - Se ha finito di leggere l’input e lo stack è vuoto, **accetta**
    - Se ha finito di leggere l’input e lo stack non è vuoto, **rifiuta** (ci sono più $0$ che $1$)
    - Se legge uno $0$ dopo un $1$, **rifiuta** (l’ordine non è rispettato)
    - Se ha ancora input da leggere ma lo stack è finito, **rifiuta** (ci sono più $1$ che $0$)

## Definizione formale

Un PDA è una sestupla $(Q, \Sigma, \Gamma, \delta, q_0, F)$ dove:

- $Q$ è un insieme finito di stati
- $\Sigma$ è un insieme finito di input, chiamato alfabeto
- $\Gamma$ è un insieme finito di simboli che posso mettere nello stack, detto alfabeto dello stack (gli elementi non sono necessariamente correlati con gli elementi di $\Sigma$)
- $\delta : Q \times \Sigma_\epsilon \times \Gamma_\epsilon \rightarrow \mathcal{P}(Q \times \Gamma_\epsilon)$ è la funzione di transizione, che prende in **input** uno stato, un input e l’elemento in cima allo stack. Dà in output un insieme di coppie composte da: il nuovo stato e il nuovo elemento messo cima allo stack.
- $q_0 \in Q$ è lo stato iniziale
- $F \subseteq Q$ è l’insieme degli stati accettanti

## Linguaggio di un PDA

Sia $M = (Q, \Sigma, \Gamma, \delta, q_0, F)$ un PDA, diciamo che **accetta** la stringa $w$ se e solo se $w = w_1w_2…w_m$ dove per ogni $i \in [1, m]$ vale che $w_i \in \Sigma_\epsilon$ ed esistono sequenze di stati $r_0r_1…r_m \in Q$ e una sequenza di stack $s_0s_1…s_m \in \Gamma^*$ tali che valgano le seguenti condizioni:

1. $r_0=q_0 \land s_0 = \epsilon \hspace{5mm}$Il PDA inizia dallo stato iniziale e con uno stack vuoto
2. Per $i \in [0, …, m-1]$ abbiamo $(r_{i+1}, b) \in \delta(r_i, w_{i+1}, a)$ dove:
    - lo stack attuale: $s_i = at$
    - lo stack dopo la transizione: $s_{i+1} = bt$
    
    per qualche $a, b \in \Gamma_\epsilon$ e $t \in \Gamma^*$ ($a,b$ sono elementi singoli appartenenti all’alfabeto dello stack, mentre $t$ rappresenta l’insieme di elementi restanti nello stack)
    
    Questo punto ci dice che la sequenza degli stati e l’aggiornamento dello stack devono rispettare la funzione di transizione, in particolare:
    
    - $r_{i+1}$ rappresenta il prossimo stato e $r_i$ lo stato attuale
    - $a$ rappresenta l’attuale elemento in cima allo stack, mentre $b$ rappresenta la nuova cima dello stack dopo la transizione
    - $w_{i+1}$ rappresenta il prossimo input
3. $r_m \in F \hspace{5mm}$Alla fine dell’input il PDA si trova in uno stato accettante

Nota: Gli stack vengono rappresentati da delle stringhe in cui la testa rappresenta la cima della pila.

L’aggiornamento dello stack può avvenire in quattro modi diversi:

- Se $a \neq \epsilon, b \neq \epsilon$ allora equivale a fare una `pop` e una `push`
- Se $a = \epsilon, b \neq \epsilon$ allora equivale a fare solo una `push`
- $a \neq \epsilon, b = \epsilon$ allora equivale a fare solo una `pop`
- $a = \epsilon, b = \epsilon$ allora equivale a non toccare lo stack

## Notazione grafica

Un PDA si rappresenta graficamente nel seguente modo:

![https://i.ibb.co/Xjdx0C9/pda.png](https://i.ibb.co/Xjdx0C9/pda.png)

Dove $w \in \Sigma_\epsilon$ e $a,b \in \Gamma_\epsilon$

L’automa passa da $q_i$ a $q_j$ leggendo l’input $w$ e quando $a$ è in cima allo stack.

$b$ sarà il nuovo elemento in cima allo stack.

Generalizzando la notazione:

- $a\to b \hspace{3mm}$ equivale a `pop` di $a$ e `push` di $b$
- $\epsilon \to b\hspace{3mm}$ equivale a fare solo `push` di $b$
- $a \to \epsilon\hspace{3mm}$ equivale a fare solo `pop` di $a$
- $\epsilon \to \epsilon\hspace{3mm}$ equivale a non toccare lo stack

## Accettazione per stack vuoto

Dalla definizione non è menzionato lo stato che deve avere lo stack per accettare una stringa di input.

Molti PDA però vogliono accettare solo quando lo stack si svuota, per testare se lo stack è vuoto possiamo seguire i seguenti passi:

1. appena inizia la computazione facciamo un `push` di un simbolo, per convenzione $
2. Quando rivedo il simbolo $ sono certo che lo stack si è svuotato

## Esempio 1

Costruiamo un PDA per il linguaggio $\{0^n1^n| n\geq 0\}$

![https://i.ibb.co/zrYdy5m/image.png](https://i.ibb.co/zrYdy5m/image.png)

## Esempio 2

Costruiamo un PDA per il linguaggio $\{a^ib^jc^k| i,j,k\geq 0 \land (i=j\lor i = k)\}$

Cioè i linguaggi composti dalle stringhe $a, b, c$ in cui si ha lo stesso numero di $a$ e $b$ oppure lo stesso numero di $a$ e $c$.

Sfruttiamo il non determinismo per rappresentare la condizione di OR, creando due percorsi distinti

![https://i.ibb.co/2F0w8Qf/image.png](https://i.ibb.co/2F0w8Qf/image.png)

## Esempio 3

Costruiamo un PDA per il linguaggio $\{ww^R| w \in \{0, 1\}^*, \text{dove } w^R \text{ è } w \text{ scritto al contrario}\}$

Cioè i linguaggi composti dalle stringhe $0, 1$ palindrome

Anche in questo caso il non determinismo ci permette in ogni momento di ipotizzare di essere arrivati a metà stringa

![https://i.ibb.co/Px05z7R/image.png](https://i.ibb.co/Px05z7R/image.png)

## Equivalenza tra CFG e PDA

Abbiamo già dimostrato che un linguaggio si dice context-free se e solo se esiste una CFG che lo riconosce. Per dimostrare l’equivalenza dobbiamo dimostrare il seguente teorema dimostrando che possiamo convertire una CFG a PDA e vice versa.

**Teorema**: Un linguaggio è context free se e solo se esiste un PDA che lo riconosce.

**Dimostrazione**: La doppia implicazione nel teorema ci porta a dimostrare entrambi i versi, lo facciamo attraverso la dimostrazione di due lemmi che ricalcano i versi del teorema:

### Lemma 1

**Lemma**: Se $A$ è un linguaggio context free allora esiste un PDA $P$ tale che $L(P) = A$

**Dimostrazione**: Dato che $A$ è un linguaggio context free, allora esiste un CGF $G$ tale che $L(G) = A$. Converto $G$ in un PDA equivalente simulando le derivazioni usando lo stack.

Seguiamo il seguente algoritmo per fare la conversione:

1. Metti nello stack $ e poi lo start symbol $S$
2. Ripeti i seguenti passi fino a terminazione
    1. Se sulla cima dello stack c’è un non terminale $A$, scegli non deterministicamente una produzione del tipo $A \to u_1…u_k$ e fai una `POP` di $A$ e una `PUSH` di $u_k…u_1$ (in modo che $u_1$ risulti in cima allo stack)
    2. Se sulla cima dello stack c’è un terminale, confrontalo con il prossimo carattere in input, se sono uguali fai `POP`, se sono diversi rifiuta il ramo del non determinismo
    3. Se sulla cima dello stack c’è $, allora passa allo stato di accettazione, in questo modo si accetta l’input se è stato completamente letto

Graficamente possiamo rappresentare il PDA in questo modo

![https://i.ibb.co/wcByRH8/aaa.png](https://i.ibb.co/wcByRH8/aaa.png)

Dove la produzione $\epsilon, \epsilon \to S$$ indica il `PUSH` di più simboli da destra verso sinistra ($S$ sarà in cima allo stack)

### Esempio di traduzione

Data la seguente grammatica

$$
S \to aTb | b \\
T \to Ta | \epsilon
$$

![https://i.ibb.co/SypQM3M/image.png](https://i.ibb.co/SypQM3M/image.png)

### Lemma 2

**Lemma**: Se un linguaggio è riconosciuto da un PDA allora quel linguaggio è context free

**Dimostrazione**: Dato un PDA $P$ convertiamolo in una CFG $G$ ad esso equivalente.

La conversione è complessa, la dividiamo in tre passi:

### Primo passo

Prendiamo $P$ “più disciplinato” senza cambiare il suo linguaggio, imponiamo 3 requisiti:

1. $P$ ha un **solo stato accettante** (TRADUZIONE: gli stati accettanti vanno in un nuovo stato accettante tramite $\epsilon$-transizioni, i vecchi stati accettanti diventano non più accettanti)
2. $P$ **accetta solo con lo stack vuoto** (TRADUZIONE: svuotare lo stack prima di andare nel nuovo stato accettante)
3. Ogni transizione di $P$ può essere **solo una** `PUSH` ($\epsilon \to a$) **oppure solo una** `POP` ($a \to \epsilon$) ma non fa entrambe contemporaneamente (TRADUZIONE: $\epsilon\to\epsilon$ tradurlo come $\epsilon\to y$ con successivo $y \to \epsilon$, mentre $a\to b$ tradurlo come $a\to \epsilon$ con successivo $\epsilon \to b$)

Ogni PDA può essere disciplinato in questo modo senza perdita di generalità

### Secondo passo

Definiamo una nuova CFG che contiene un non terminale $A_{pq}$ per ogni coppia di stati $p, q$ del PDA.

$A_{pq}$ genera tutte le stringhe che possono portare il PDA dallo stato $p$ con stack vuoto allo stato $q$ con stack vuoto.

Per ogni stringa generata da $A_{pq}$ che chiamiamo $x$, la prima mossa del PDA su $x$ dovrà essere una `PUSH` (non si può fare `POP` sullo stack vuoto). Analogamente l’ultima mossa dovrà essere una `POP` dato che vogliamo lo stack vuoto.

Durante la computazione della stringa $x$ si possono presentare due eventualità:

1. Il simbolo eliminato alla fine è il simbolo inserito all’inizio. In tal caso la pila può essere vuota solamente all’inizio e alla fine della computazione di $x$.
    
    Questa eventualità è espressa da una produzione della CFG del tipo:
    
    $$
    A_{pq} \to aA_{rs} b
    $$
    
    Dove:
    
    - $a$ è il primo simbolo dell’input letto
    - $b$ è l’ultimo simbolo dell’input letto
    - $r$ è il secondo stato a cui si transita
    - $s$ è il penultimo stato a cui si transita
2. Altrimenti. In tal caso il primo simbolo deve essere eliminato prima della fine di $x$, svuotando così la pila.
    
    Questa eventualità è espressa da una produzione della CFG del tipo:
    
    $$
    A_{pq} \to A_{pr}A_{rq} \hspace{3mm} \forall p, q, r \text{ stati del PDA}
    $$
    
    Dove $r$ è lo stato in cui la pila diventa vuota
    

Un ultimo formato di produzione possibile della CFG è che lo stato di partenza e lo stato di arrivo siano uguali:

$$
A_{pp} \to \epsilon \hspace{3mm} \forall p \text{ stato del PDA}
$$

Si può dimostrare che $A_{pq} \Rightarrow^* x$ se e solo se dallo stato $p$ con stack vuoto si arriva in $q$ con stack vuoto. Si dimostra in entrambi i versi per induzione sul numero di passi.

### Terzo passo

Definiamo come start symbol dalla CFG il non terminale $A_{q_0,q_{\text{accept}}}$ dove $q_0$ è lo stato iniziale del PDA e $q_{\text{accept}}$ è lo stato accettante del PDA.

## Corollario dato dall’equivalenza tra CFG e PDA

**Corollario**: qualsiasi linguaggio regolare è anche context free

**Dimostrazione**: Sia $A$ un linguaggio regolare, allora esiste un NFA $N$ tale che $L(N) = A$.

Un NFA è un PDA che non tocca lo stack, quindi $N$ è un PDA, concludo che $A$ è context free.

Da questo corollario possiamo derivare il seguente diagramma:

![https://i.ibb.co/xs5L1f9/diagramma.png](https://i.ibb.co/xs5L1f9/diagramma.png)
