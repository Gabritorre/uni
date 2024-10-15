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
- $\delta : Q \times \Sigma_\epsilon \times \Gamma_\epsilon \rightarrow \mathcal{P}(Q \times \Gamma_\epsilon)$ è la funzione di transizione, che prende in **input** uno stato, un input e l’elemento in cima allo stack. Da in output un nuovo stato e una possibile scrittura in cima allo stack.
- $q_0 \in Q$ è lo stato iniziale
- $F \subseteq Q$ è l’insieme degli stati accettanti
