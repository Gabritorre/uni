# Automi a stati finiti non deterministici

Vediamo automi non deterministici, che sono un tipo di automi più generali di quelli deterministici. Quindi si può dire che un automa deterministico è anche non deterministico.

Indichiamo questo tipo di automi con l’acronimo **NFA** (*nondeterministic finite automaton*), vediamo un esempio con le differenze rispetto ai DFA:

![https://i.ibb.co/C0PDctk/nfa.png](https://i.ibb.co/C0PDctk/nfa.png)

Caratteristiche:

1. Ogni stato può avere zero, uno o più archi uscenti per ogni simbolo dell’alfabeto
2. Possiede delle $\epsilon$-transizioni, cioè delle transazioni che non consumano nessun input.

**Diciamo che un NFA accetta un input se esiste almeno un percorso che consuma tutto l’input e finisce in uno stato accettante.**

Il non determinismo può essere visto come una esecuzione in parallelo di tutti i percorsi possibili di un input. Visivamente si può immaginare l’esecuzione con un **albero di possibilità**

Simuliamo l’esecuzione dell’esempio precedente con l’input: $0101$

![https://i.ibb.co/9vKnVfs/albero.png](https://i.ibb.co/9vKnVfs/albero.png)

## Definizione formale di NFA

Un NFA $N$ è una quintupla $(Q, \Sigma, \delta, q_0, F)$ dove:

- $Q$ insieme finito di stati
- $\Sigma$ alfabeto finito
- $q_0 \in Q$ stato iniziale
- $F \subseteq Q$ insieme di stati accettanti
- $\delta : Q \times (\Sigma \cup \{\epsilon\}) \rightarrow \mathcal{P}(Q)$

La differenza rispetto alla definizione di DFA sta sostanzialmente nella definizione della funzione di transizione $\delta$. Nei NFA tale funzione prende uno stato e un simbolo di input oppure una stringa vuota e produce l’insieme dei possibili stati successivi che indichiamo con $\mathcal{P}(Q)$.

In altre parole $\mathcal{P}(Q)$ rappresenta l’insieme contenente tutti i sottoinsiemi di $Q$, se ad esempio $Q = \{a, b\}$ allora $\mathcal{P}(Q) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$

## Linguaggio di un NFA

Diamo una definizione formale di linguaggio di un NFA.

Sia $N=(Q, \Sigma, \delta, q_0, F)$ e sia $w=y_1y_2...y_m$ una stringa tale che $\forall i \in [1...m],\, w_i\in \Sigma \cup \{\epsilon\}$ diciamo che $N$ **accetta** $w$ se e solo se esiste una sequenza di stati $r_0, r_1, …r_m \in Q$  tali che:

1. $r_0 = q_0 \hspace{5mm}$ (parte dallo stato iniziale di $M$)
2. $r_m \in F \hspace{6mm}$(l’ultimo stato è uno stato accettante)
3. $\forall i \in [0…m-1]: r_{i+1} \in\delta(r_i, y_{i+1}) \hspace{5mm}$ (la sequenza di stati rispetta la funzione di transizione)

In particolare la terza condizione dice che lo stato $r_{i+1}$ è uno dei possibili stati successivi quando l’NFA è nello stato $r_i$ e sta leggendo $y_{i+1}$.

Riprendendo l’esempio precedente:

![https://i.ibb.co/C0PDctk/nfa.png](https://i.ibb.co/C0PDctk/nfa.png)

Possiamo definire:

- $Q=\{q_1, q_2, q_3, q_4\}$
- $\Sigma = \{0, 1\}$
- $q_0 = q_1$
- $F = \{q_4\}$
- $\delta$:
    - $\delta(q_1, 0) = \{q_1\}$
    - $\delta(q_1, 1) = \{q_1, q_2\}$
    - $\delta(q_1, \epsilon) = \emptyset$
    - $\delta(q_2, 0) = \{q_3\}$
    - $\delta(q_2, 1) = \emptyset$
    - $\delta(q_2, \epsilon) = \{q_3\}$
    - … sono in totale $4\cdot 3 = 12$

Esempi di input accettati sono

- $w=101$ la cui sequenza di stati è $q_1 \to q_1 \to q_2 \to q_3 \to q_4$
- $w = 11$ in questo caso posso raggiungere lo stato accettante sfruttando una $\epsilon$-transizione, in particolare posso trasformare l’input in $w = 1\epsilon1$ ottenendo così la sequenza di stati $q_1 \to q_2 \to q_3 \to q_4$

Posso sempre mettere delle $\epsilon$ (stringa vuota) dove mi è più comodo se serve a raggiungere lo stato accettante.

## Da NFA a DFA

**Teorema**: Ogni NFA può essere trasformato in un DFA equivalente (con stesso linguaggio). Vediamo un esempio

“Scrivere un NFA per il linguaggio delle stringhe binarie contenenti un 1 nella terza posizione dalla fine (ad esempio $00110$)”

Questo è il NFA risultante

![https://i.ibb.co/GVr0WYg/nfa1.png](https://i.ibb.co/GVr0WYg/nfa1.png)

Proviamo a costruire un DFA equivalente, l’idea è quella di “memorizzare” gli ultimi 3 input ricevuti, dato che abbiamo un alfabeto binario avremo quindi $2^3$ possibili stati:

![https://i.ibb.co/f2bmTRP/dfa.png](https://i.ibb.co/f2bmTRP/dfa.png)

### Dimostrazione

Facciamo una dimostrazione per costruzione.

L’idea è quella realizzare un DFA che mantiene la traccia dell’insieme degli stati che potrebbero essere attivi in durante il consumo dell’input.

Sia $N = (Q, \Sigma, \delta, q_0, F)$ e costruiamo un DFA $D = (Q', \Sigma, \delta', q_0', F')$.

Definiamo la funzione

$E(R) = \{q|q \text{ può essere raggiunto da qualche stato } r \in R \text{ con zero o più } \epsilon \text{ transizioni}\}$

Questa funzione prende in input un insieme di stati $R$ e produce un insieme di stati $R$ con l’aggiunta degli stati raggiungibili tramite delle $\epsilon$-transizioni.

Definiamo le componenti di $D$:

- $Q’ = \mathcal{P}(Q)\hspace{5mm}$ogni stato di $D$ è un insieme di stati di $N$
- $q_0’ = E(\{q_0\}) \hspace{5mm}$lo stato iniziale è l’insieme formato da $q_0$ e gli stati raggiungibili da $q_0$ tramite $\epsilon$-transizioni
- $F’ = \{R \in Q’ | \exists r \in R : r \in F\} \hspace{5mm}$Uno stato di D è accettante se al suo interno esiste un elemento che in $N$ è accettante
- $\delta’(R, a) = \cup_{r \in R}\, E(\delta(r, a)) \hspace{5mm}$dato un stato $R$ di $D$ (che è un insieme), e un elemento dell’input, allora lo stato successivo è un insieme dato dall’unione degli stati raggiungibili partendo da ogni elemento in $R$ considerando anche gli stati raggiungibili tramite $\epsilon$-transizioni

Vediamo un esempio:

NFA:

![https://i.ibb.co/CPxdwGH/esempio-traduzione.png](https://i.ibb.co/CPxdwGH/esempio-traduzione.png)

Costruiamo il DFA:

1. troviamo lo stato iniziale: $E(\{1\}) = \{1, 3\}$
2. In un DFA dobbiamo avere tante frecce uscenti quanto è grande l’alfabeto, quindi ogni stato che creiamo deve avere 2 frecce uscenti.
3. troviamo gli stati raggiunti dallo stato iniziale che abbiamo trovato:
    1. considero l’input $a$:
        1. $\delta(1, a) = \emptyset$
        2. $\delta(3, a) = \{1\}$
        3. unisco gli insiemi: $\emptyset \cup \{1\} = \{1\} \to E(\{1\}) = \{1,3\}$
        4. quindi dallo stato $\{1, 3\}$ con input $a$, rimango nello stato $\{1, 3\}$
    2. considero l’input $b$:
        1. $\delta(1, b) = \{2\}$
        2. $\delta(3, b) = \emptyset$
        3. unisco gli insiemi: $\emptyset \cup \{2\} = \{2\} \to E(\{2\}) = \{2\}$
        4. quindi dallo stato $\{1, 3\}$ con input $b$, passo allo stato $\{2\}$
4. troviamo gli stati raggiunti dallo stato $\{2\}$:
    1. considero l’input $a$:
        1. $\delta(2, a) = \{2, 3\}$
        2. non ho insiemi da unire, calcolo  $E(\{2, 3\}) = \{2,3\}$
        3. quindi dallo stato $\{2\}$ con input $a$, passo allo stato $\{2, 3\}$
    2. considero l’input $b$:
        1. $\delta(2, b) = \{3\}$
        2. non ho insiemi da unire, calcolo  $E(\{3\}) = \{3\}$
        3. quindi dallo stato $\{2\}$ con input $b$, passo allo stato $\{3\}$
    
    ![https://i.ibb.co/qFD0rFV/grafo-1png.png](https://i.ibb.co/qFD0rFV/grafo-1png.png)
    
5. proseguo fino a che non genero tutti gli stati
6. Gli stati accettanti sono quelli che contengono al loro interno un $1$ in quanto $1$ nel NFA è uno stato accettante.
    
    ![https://i.ibb.co/QQZhJtL/grafo-2.png](https://i.ibb.co/QQZhJtL/grafo-2.png)
    

Possiamo dire che con un alfabeto di 2 stringhe e un NFA con 3 stati, il DFA avrà al massimo $2^3$ stati, in questo caso mancano gli stati $\{1\}$ e $\{1, 2\}$ ma essi non sono necessari in quanto sono degli stati isolati con nessuna freccia entrante (il nostro algoritmo li ha dunque ignorati).

### Corollario

Dato che ogni NFA ha un DFA equivalente e ogni DFA è convertibile in NFA in quanto un DFA è un sottoinsieme di NFA, possiamo ricavarci un corollario:

**Un linguaggio si dice regolare se e solo se esiste un NFA che lo riconosce.**

**Dimostrazione**:

- $\Rightarrow$
    
    Sia $A$ un linguaggio regolare, allora per definizione esiste un DFA $D$ tale che $L(D) = A$, ma $D$ è anche un NFA in quanto $\text{DFA} \subseteq \text{NFA}$.
    
- $\Leftarrow$
    
    Assumo che esista un NFA $N$ tale che $L(N) = A$, converto $N$ in un DFA equivalente e verifico che abbia lo stesso linguaggio.
    

## Chiusura rispetto alla concatenazione

Adesso che conosciamo il non determinismo possiamo dimostrare che dati due linguaggi regolari $A$ e $B$ anche la loro concatenazione forma un linguaggio regolare.

Siano $A$ e $B$ due linguaggi regolari, prendiamo due NFA $N_1$ e $N_2$ tali che $L(N_1) = A$, $L(N_2) = B$.

Costruiamo un nuovo NFA $N$ tale che $L(N) = A \circ B$.

$N_1 = (Q_1, \Sigma, \delta_1, q_1, F_1)$

$N_2 = (Q_2, \Sigma, \delta_2, q_2, F_2)$

$N = (Q, \Sigma, \delta, q_0, F)$

Possiamo immaginare l’esecuzione graficamente in questo modo:

![https://i.ibb.co/SwdZWLk/image.png](https://i.ibb.co/SwdZWLk/image.png)

Quando si raggiungono gli stati accettanti di $N_1$ significa che è stata riconosciuto un pezzo iniziale dell’input che forma una stringa in $A$.

A quel punto tramite delle $\epsilon$-transizioni si può passare a $N_2$.

Nota che gli stati accettanti di $N$ sono gli stati accettanti di $N_2$ in quanto gli stati accettanti di $N_1$ riconoscono solo un pezzo dell’input.

Possiamo pensare che $N$ tenti tutte le possibili divisioni in due pezzi dell’input.

Definiamo gli elementi di $N$:

- $Q = Q_1 \cup Q_2 \hspace{5mm}$gli stati di $N$ saranno l’unione degli stati di $N_1$ e $N_2$
- $q_0 = q_1 \hspace{5mm}$La concatenazione parte dallo stato iniziale di $N_1$
- $F = F_2 \hspace{5mm}$Gli stati finali solo sono quelli di $N_2$
- per ogni  $q \in Q$$q\in Q$$a \in \Sigma \cup \{\epsilon\}$$q\in Q$$\delta$:

$$
\delta(q, a) = \begin{cases}
\delta_1(q, a) & \text{se } q \in Q_1, q \notin F_1 \\
\delta_2(q, a) & \text{se } q \in Q_2 \\
\delta_1(q, a) & \text{se } q \in F_1 \land a \neq \epsilon \\
\delta_1(q, a) \cup \{q_2\} & \text{se } q \in F_1 \land a = \epsilon
\end{cases}
$$

In ordine: 

se lo stato attuale appartiene a $Q_1$ ma non è uno stato accettante allora la transizione si comporta come la transizione di $N_1$.

Se lo stato attuale appartiene a $Q_2$ la transizione si comporta come la transizione di $N_2$

Se lo stato attuale appartiene a $Q_1$, è uno stato accettante e la stringa non è una stringa vuota, la transizione si comporta come la transizione di $N_1$

Se lo stato attuale appartiene a $Q_1$, è uno stato accettante e la stringa è una stringa vuota, allora la transizione si comporta come la transizione di $N_1$ oppure si passa allo stato $q_2$ (cioè passi all’automa $N_2$). Questo è corretto perché in $N_1$ si può avere una $\epsilon$-transizione sia verso $q_2$ sia verso un altro stato sempre di $N_1$ e quest’ultimo non lo possiamo ignorare.

## Chiusura rispetto alla star

Possiamo dimostrare che dato un linguaggio regolare $A$ anche l’operazione $A^*$ forma un linguaggio regolare.

Consideriamo un NFA $N$ tale che $L(N) = A$ e lo modifichiamo in modo che riconosca $A^*$.

L’NFA risultante, $M$ accetterà il suo input quando esso può essere diviso in varie parti ed $N$ accetta ogni parte.

Possiamo rappresentare l’NFA nel seguente modo:

![https://i.ibb.co/PM3nd2v/image.png](https://i.ibb.co/PM3nd2v/image.png)

Per costruire $M$ possiamo quindi aggiungere una $\epsilon$-transizione che va da uno stato accettante di $N$ allo stato iniziale. In questo modo quando $N$ accetta una parte, l’automa può tornare indietro per provare a leggere un’altra parte che $N$ accetta.

Inoltre dato che l’operazione di $A^*$ accetta anche una semplice stringa vuota $\epsilon$, dobbiamo aggiungere un nuovo stato accettante iniziale.

Quindi dato $N = (Q_1, \Sigma, \delta_1, q_1, F_1)$

costruiamo $M = (Q, \Sigma, \delta, q_0, F)$

- $Q = \{q_0\} \cup Q_1 \hspace{5mm}$Gli stati sono quelli di $N$ più un nuovo stato iniziale
- $q_0$ è un nuovo stato iniziale
- $F = \{q_0\} \cup F_1 \hspace{5mm}$Gli stati finali sono quelli di $N$ più il nuovo stato iniziale
- per ogni  $q \in Q$$q\in Q$$a \in \Sigma \cup \{\epsilon\}$$q\in Q$$\delta$:

$$
\delta(q, a) = \begin{cases}
\delta_1(q, a) & \text{se } q \in Q_1, q\notin F_1 \\
\delta_1(q, a) & \text{se } q \in F_1, a\neq \epsilon \\
\delta_1(q, a)\cup \{q_1\} & \text{se } q \in F_1, a = \epsilon \\
\{q_1\} & \text{se } q = q_0, a\ = \epsilon \\
\emptyset & \text{se } q = q_0, a\neq \epsilon \\
\end{cases}
$$
