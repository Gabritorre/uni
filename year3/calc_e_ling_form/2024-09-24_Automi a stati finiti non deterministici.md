# Automi a stati finiti non deterministici

Vediamo automi non deterministici, che sono un tipo di automi più generali di quelli deterministici. Quindi si può dire che un automa deterministico è anche non deterministico.

Indichiamo questo tipo di automi con l’acronimo **NFA** (*nondeterministic finite automaton*), vediamo un esempio con le differenze rispetto ai DFA:

![https://i.ibb.co/C0PDctk/nfa.png](https://i.ibb.co/C0PDctk/nfa.png)

Caratteristiche:

1. Ogni stato può avere zero, uno o più archi uscenti per ogni simbolo dell’alfabeto
2. Possiede delle $\epsilon$-transizioni, cioè delle transazioni che non consumano nessun input.

**Diciamo che un NFA accetta un input se esiste almeno un percorso che consuma tutto l’input e finisce in uno stato accettante.**

Ad esempio gli input $101, 11, 011$ sono accettati.

Il non determinismo può essere visto come una esecuzione in parallelo di tutti i percorsi possibili di un input. Visivamente si può immaginare l’esecuzione con un **albero di possibilità**

Simuliamo l’esecuzione dell’esempio precedente con l’input: $0101$

![https://i.ibb.co/9vKnVfs/albero.png](https://i.ibb.co/9vKnVfs/albero.png)

## Da NFA a DFA

Ogni NFA può essere trasformato in un DFA equivalente. Vediamo un esempio

“Scrivere un NFA per il linguaggio delle stringhe binarie contenenti un 1 nella terza posizione dalla fine (ad esempio $00110$)”

Questo è il NFA risultante

![https://i.ibb.co/GVr0WYg/nfa1.png](https://i.ibb.co/GVr0WYg/nfa1.png)

Proviamo a costruire un DFA equivalente, l’idea è quella di “memorizzare” gli ultimi 3 input ricevuti, dato che abbiamo un alfabeto binario avremo quindi $2^3$ possibili stati:

![https://i.ibb.co/f2bmTRP/dfa.png](https://i.ibb.co/f2bmTRP/dfa.png)

## Definizione formale di NFA

Un NFA $N$ è una quintupla $(Q, \Sigma, \delta, q_0, F)$ dove:

- $Q$ insieme finito di stati
- $\Sigma$ alfabeto finito
- $q_0 \in Q$ stato iniziale
- $F \subseteq Q$ insieme di stati finali
- $\delta : Q \times (\Sigma \cup \{\epsilon\}) \rightarrow \mathcal{P}(Q)$

La differenza rispetto alla definizione di DFA sta sostanzialmente nella definizione della funzione di transizione $\delta$. Nei NFA tale funzione prende uno stato e un simbolo di input oppure una stringa vuota e produce l’insieme dei possibili stati successivi che indichiamo con $\mathcal{P}(Q)$.

In altre parole $\mathcal{P}(Q)$ rappresenta la l’insieme contiene tutti i sottoinsiemi di $Q$, se ad esempio $Q = \{a, b\}$ allora $\mathcal{P}(Q) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$

## Linguaggio di un NFA

Diamo una definizione formale di linguaggio di un NFA.

Sia $N=(Q, \Sigma, \delta, q_0, F)$ e sia $w=y_1y_2...y_m$ una stringa tale che $\forall i \in [1...m],\, w_i\in \Sigma \cup \{\epsilon\}$ diciamo che $N$ **accetta** $w$ se e solo se esiste una sequenza di stati $r_0, r_1, …r_m \in Q$  tali che:

1. $r_0 = q_0 \hspace{5mm}$ (parte dallo stato iniziale di $M$)
2. $r_m \in F \hspace{6mm}$(l’ultimo stato è uno stato accettante)
3. $\forall i \in [0…m-1]: r_{i+1} \in\delta(r_i, y_{i+1}) \hspace{5mm}$ (la sequenza di stati rispetta la funzione di transizione)

In particolare la terza condizione dice che lo stato $r_{i+1}$ è uno dei possibili stati successivi quando il NFA è nello stato $r_i$ e sta leggendo $y_{i+1}$.
