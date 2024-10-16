
# Automi a pila

Vediamo un nuovo modello computazionale chiamato automa a pila (*pushdown automata*, **PDA**) capace di riconoscere alcuni linguaggi non regolari.

Questi automi sono come gli automi non deterministici (NFA) con l’aggiunta di una componente chiamata pila (***stack***).

Lo stack è una struttura dati basata sulla metodologia LIFO (*Last In First Out*), che quindi permette le operazioni di ***push* in testa (aggiunta), *pop* in testa (rimozione), e *top* in testa (lettura).**

**I PDA sono equivalenti alla grammatiche context-free**.

Possiamo descrivere il suo comportamento come:

- legge gli input sequenzialmente come un NFA
- ha uno stato interno che può cambiare
- ha a disposizione uno stack infinito dove può leggere e scrivere

## Esempio di PDA

Vediamo il comportamento a grandi linee di un PDA per il seguente linguaggio (non regolare) $\{0^n1^n | n\geq 0\}$

- leggi i simboli di input
- quando incontri uno $0$ fai un *push* nello stack di $0$
- quando incontri un $1$ passa ad un nuovo stato e fai un *pop* dallo stack,
    
    finché leggo $1$ continuo a fare *pop* dallo stack
    
    - Se ho finito di leggere l’input e lo stack è vuoto, **accetto**
    - Se ho finito di leggere l’input e lo stack non è vuoto, **rifiuto** (ho più $0$ che $1$)
    - Se leggo uno $0$ dopo un $1$, **rifiuto** (l’ordine non è rispettato)
    - Se ho ancora input da leggere ma lo stack è finito, **rifiuto** (ho più $1$ che $0$)

## Definizione formale

Un PDA è una sestupla $(Q, \Sigma, \Gamma, \delta, q_0, F)$ dove:

- $Q$ è un insieme finito di stati
- $\Sigma$ è un insieme finito di input, chiamato alfabeto
- $\Gamma$ è un insieme finito di simboli che posso mettere nello stack, detto alfabeto dello stack (gli elementi non sono necessariamente correlati con gli elementi di $\Sigma$)
- $\delta : Q \times \Sigma_\epsilon \times \Gamma_\epsilon \rightarrow \mathcal{P}(Q \times \Gamma_\epsilon)$ è la funzione di transizione, che prende in **input** uno stato, un input e l’elemento in cima allo stack. Da in output un insieme di coppie composte da: il nuovo stato e il nuovo elemento messo cima allo stack.
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
    - $a$ rappresenta l’attuale elemento in cima allo stack, mentre $b$ rappresenta la nuova cima dello stack
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
