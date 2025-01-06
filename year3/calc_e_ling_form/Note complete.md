# Automi a stati finiti deterministici

## Automi a stati finiti (DFA)

Gli automi a stati finiti sono un modello computazionale con limitata quantità di memoria per rappresentare il comportamento di dispositivi elettronici.

Un DFA (*Deterministic Finite Automaton*) è composto dai seguenti componenti:

- Input
- Stati
    - Stato di partenza
    - Stato di accettazione / Stato finale
- Transizioni

### Esempio di DFA

Vediamo un esempio grafico di un DFA:

![https://i.ibb.co/jw9wmkp/dfa.png](https://i.ibb.co/jw9wmkp/dfa.png)

I cerchi rappresentano gli **stati**, le frecce le **transazioni** le cui etichette sono gli **input**.

La freccia più spessa verso $q_1$ indica lo **stato iniziale**, mentre il cerchio doppio in $q_2$ indica lo **stato finale**.

Possiamo vedere il DFA come un **riconoscitore di stringhe**, se una stringa termina nello stato $q_2$ allora è valida, altrimenti non lo è.

Ad esempio la stringa $011$ è accettata, l’ordine delle transizioni è: $q_1 \to q_1 \to q_2 \to q_2$

mentre la stringa $010$ non è accettata, l’ordine delle transizioni è:  $q_1 \to q_1 \to q_2 \to q_3$

Un DFA ha **un solo stato iniziale** e può avere **più stati finali**, e ogni stato deve avere tante frecce uscenti quanti sono gli elementi dell’alfabeto di input (nell’esempio l’alfabeto erano i caratteri ‘0’ e ‘1’, quindi da ogni stato devono uscire due frecce).

### Descrizione verbale

Proviamo a dare una descrizione verbale degli stati e del tipo di stringhe che riconosce il nostro automa.

Sempre considerando l’esempio precedente descriviamo:

- Lo stato $q_1$ riconosce stringhe con contengono solo $0$ o stringa vuota
- Lo stato $q_2$ riconosce stringhe che contengono almeno un $1$ e ha un numero pari di $0$ dopo l’ultimo 1
- Lo stato $q3$ riconosce stringhe che contengono almeno un 1 e ha un numero dispari di $0$ dopo l’ultimo 1

Se l’invariante delle stringhe riconosciute è uguale all’invariante dello stato finale allora l’automa è corretto. Questo automa riconosce difatti le stringhe che contengono almeno un $1$ e ha un numero pari di $0$ dopo l’ultimo 1.

### Definizione matematica

Matematicamente possiamo definire un DFA $D$ come una quintupla:

$$
D = (Q, \Sigma, \delta, q_0, F)
$$

- $Q$: è l’insieme finito degli stati
- $\Sigma$: è l’insieme finito degli input (chiamato **alfabeto**)
- $\delta$: è la funzione di transizione $Q \times \Sigma \rightarrow Q$ che definisce i cambiamenti tra gli stati, useremo questa sintassi: $\delta(s_1, \text{input}) = s_2$
- $q_0$: indica lo stato iniziale
- $F \subseteq Q$ : indica l’insieme degli stati accettanti (può anche essere insieme vuoto, ma di conseguenza il DFA rifiuterà ogni input)

Sempre nel solito esempio:

![https://i.ibb.co/jw9wmkp/dfa.png](https://i.ibb.co/jw9wmkp/dfa.png)

Definiamo le varie parti della quintupla:

- $Q= \{q_1, q_2, q_3\}$
- $\Sigma = \{0, 1\}$
- $q_0 = q_1$
- $F=\{q_2\}$
- $\delta$:
    - $\delta(q_1, 0) = q_1$
    - $\delta(q_1, 1) = q_2$
    - $\delta(q_2, 0) = q_3$
    - $\delta(q_2, 1) = q_2$
    - $\delta(q_3, 0) = q_2$
    - $\delta(q_3, 1) = q_2$

Ricordiamo che il numero di istanze della funzione $\delta$ è $|Q| \times |\Sigma|$ (nel nostro caso $3\cdot 2$)

## Linguaggio

Diamo una definizione formale di linguaggio di un DFA.

Sia $M=(Q, \Sigma, \delta, q_0, F)$ e sia $w=w_1w_2...w_n$ una stringa tale che $\forall i \in [1...n],\, w_i\in \Sigma$. Diciamo che $M$ **accetta** $w$ se e solo se esiste una sequenza di stati $r_0, r_1, …r_n \in Q$  tali che:

1. $r_0 = q_0 \hspace{5mm}$ (parte dallo stato iniziale di $M$)
2. $r_n \in F \hspace{6mm}$(l’ultimo stato è uno stato accettante)
3. $\forall i \in [0…n-1]: \delta(r_i, w_{i+1}) = r_{i+1} \hspace{5mm}$ (la sequenza di stati rispetta la funzione di transizione)

Il linguaggio di un DFA $M$ si indica con $L(M)$.

In altre parole possiamo dire che **il linguaggio di un DFA è l’insieme di tutte le stringhe che esso accetta**.

**Linguaggio regolare**: Un linguaggio $A$ si dice **regolare** se e solo se esiste un DFA il cui linguaggio è uguale ad $A$

Esempio:

![https://i.ibb.co/Ks2WMZd/esempio-dfa.png](https://i.ibb.co/Ks2WMZd/esempio-dfa.png)

Sia $E$ il nome di questo DFA, allora possiamo descrivere il suo linguaggio come:

$$
L(E) = \{w\in \{0, 1\}^*| \text{l'ultimo carattere di w è 0 oppure w=}\epsilon \text{ (stringa vuota)}\}
$$

Note:

- l’asterisco sull’alfabeto indica che le stringhe $w$ sono una iterazione infinita degli elementi in quel alfabeto
- la stringa vuota è accettata solo perché lo stato finale e quello iniziale coincidono

### Esercizio

Dimostrare che il DFA precedente accetta la stringa $110$

Per farlo devo trovare una sequenza di stati lunga $n+1$.

- ricordiamo che $n$ è il numero di elementi dell’input di cui è formata la stringa, in questo caso $3$.
- Il $+1$ deriva dal fatto che si parte sempre dallo stato iniziale ancora prima di considerare la stringa

$$
q_1 \to ? \to ? \to ?
$$

- Guardando il grafico possiamo analizzare il passaggio tra gli stati e concludiamo che la sequenza per questa stringa è
    
    $$
    q_1 \to q_2 \to q_2 \to q_1
    $$
    

Lo stato finale è accettante e quindi la stringa è riconosciuta dal DFA.

### Esercizio

Dimostrare che l’insieme delle stringhe binarie che contengono un numero dispari di $1$ è regolare.

Quando abbiamo una consegna di questo tipo, quello che dobbiamo fare è trovare un DFA che accetti quel tipo di stringhe.

In questo caso un DFA possibile è il seguente:

![https://i.ibb.co/P9BHm5N/esempio-dfa.png](https://i.ibb.co/P9BHm5N/esempio-dfa.png)

## Operazioni regolari

Siano $A, B$ due linguaggi qualsiasi, definiamo le seguenti tre operazioni regolari:

1. **Unione**: $A \cup B = \{w | w\in A \,\lor\, w \in B \}$
2. **Concatenazione**: $A \circ B = \{w_1w_2 | w_1 \in A \land w_2 \in B\}$
3. **Star**: $A^* = \{w_1w_2…w_k | \forall i \in [1, k] : w_i \in A \land k \geq 0\}$

Esempio:

$A = \{a, b\}$

$B = \{a, cc\}$

- $A\cup B = \{a, b, cc\}$
- $A \circ B = \{aa, acc, ba, bcc\}$
- $B^* = \{\epsilon, a, cc, aa, acc, cca, cccc, aacc, … \}$

### Teorema

La classe dei linguaggi regolari è chiusa rispetto alle operazioni regolari. Ciò significa che se $A, B$sono linguaggi regolari allora $A\cup B, A \circ B, A^*, B^*$ formano linguaggi regolari

Inoltre i linguaggi regolari sono chiusi anche rispetto **all’intersezione** e al **complemento**.

### Chiusura rispetto al complemento

Sia $A$ un linguaggio regolare, allora esiste un DFA  $M$ tale che $L(M) = A$. Sia $M = (Q, \Sigma, \delta, q_0, F)$. Costruiamo un nuovo DFA $N = (Q, \Sigma, \delta, q_0, Q \setminus F)$.

Poiché $N$ accetta una stringa $w$ se e solo se $M$ non la accetta, abbiamo che $L(N) = \overline{A}$.

### Chiusura rispetto all’unione (e intersezione)

Dimostriamo per costruzione che se $A, B$ sono linguaggi regolari allora lo è anche il linguaggio formato dalla loro **unione**.

Dato che $A, B$ sono linguaggi regolari allora esistono due DFA

1. $M_1 = (Q_1, \Sigma_1, \delta_1, q_1, F_1)$
2. $M_2 = (Q_2, \Sigma_2, \delta_2, q_2, F_2)$

tali che $L(M_1)$ = A e $L(M_2) = B$.

Costruiamo un nuovo DFA $M$ tale che $L(M) = A\cup B$ 

L’idea è quella che $M$ simuli il comportamento di $M_1$ e $M_2$ in parallelo su ogni simbolo di input:

$$
M = (Q, \Sigma, \delta, q_0, F)
$$

Definiamo ogni elemento della quintupla, è sufficiente ricordare lo stato in cui ciascun DFA ($M_1$ e $M_2$) sarebbe se avesse letto l’input fino a quel punto, bisogna quindi lavorare con coppie di stati:

1. $Q = Q_1 \times Q_2 = \{(q_1, q_2) | q_1 \in Q_1 \land q_2 \in Q_2\}$
    
    Il numero di coppie possibili è il prodotto tra il numero di stati di $M_1$ e il numero di stati di $M_2$, che risulta essere il numero di stati di $M$
    
2. $\Sigma = \Sigma_1 = \Sigma_2$
    
    per semplicità assumiamo che l’alfabeto di $M_1$ e $M_2$ siano uguali, il teorema resterebbe comunque vero anche con alfabeti diversi: $\Sigma = \Sigma_1 \cup \Sigma_2$.
    
3. $\delta((r_1, r_2), a) = (\delta_1(r_1, a), \delta_2(r_2, a))$
    
    per ogni coppia $(r_1, r_2) \in Q$ e ogni $a \in \Sigma$
    
    Le transizioni di $M$ vanno da coppia a coppia, aggiornando lo stato sia della componente di $M_1$ sia di $M_2$
    
4. $q_0 = (q_1, q_2)$
    
    lo stato iniziale è formato dalla coppia degli stati iniziali di $M_1$ e $M_2$
    
5. $F=\{(r_1, r_2)| r_1 \in F_1 \lor r_2 \in F_2\}$
    
    Gli stati accettati di $M$ sono gli stati accettati da $M_1$ oppure da $M_2$
    
    Nota: cambiando $\lor$ con $\land$ avrei dimostrato la chiusura rispetto **all’intersezione**
    

### Caso con alfabeti diversi

Mostriamo come anche con alfabeti diversi la dimostrazione rimane valida.

Prendiamo un esempio che si può estendere a qualsiasi caso:

- $\Sigma = \{a, b\}$
- Linguaggio: stringhe di alfabeto $\{a,b\}$ che terminano con la stringa $b$

![https://i.ibb.co/vL7Qf1F/es1.png](https://i.ibb.co/vL7Qf1F/es1.png)

L’idea è quella che far lavorare il DFA su un alfabeto diverso ma che mantiene esattamente lo stesso linguaggio.

- $\Sigma' = \{a, b, c\}$
- Linguaggio: stringhe di alfabeto $\{a,b\}$ che terminano con la stringa $b$

![https://i.ibb.co/Pt9Y82X/es2.png](https://i.ibb.co/Pt9Y82X/es2.png)

Abbiamo creato un nuovo stato da cui non si può uscire (chiamato **stato pozzo**) nel caso venga incontrata la stringa non appartenente all’alfabeto originale

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

# Espressioni regolari

Possiamo utilizzare le operazioni regolari (unione, concatenazione, star) per costruire espressioni che descrivono linguaggi, tali espressioni sono chiamate **espressioni regolari (regex)**.

Ad esempio:

$$
(0\cup 1) \circ 0^*
$$

mentre nelle classiche espressioni aritmetiche abbiamo come risultato un numero, nelle espressioni il valore è un **linguaggio**.

In particolare il linguaggio dell’espressione nell’esempio può essere descritta come “scegli un simbolo tra 0 e 1, e concatenaci un qualsiasi numero di zeri (anche nessuno)”

## Definizione formale di espressione regolare

Sia $\Sigma$ un alfabeto, l’insieme delle regex definite su $\Sigma$ è definito come segue:

1. Se $a \in \Sigma$ allora $a$ è una regex
2. La stringa vuota $\epsilon$ è una regex
3. L’insieme vuoto $\emptyset$ è una regex
4. Se $r_1, r_2$ sono regex, allora $r_1 \cup r_2$ è una regex
5. Se $r_1, r_2$ sono regex, allora $r_1 \circ r_2$ è una regex
6. Se $r$ è una regex, allora $r^*$ è una regex

## Convenzioni

Vediamo delle convenzioni usate nelle espressioni regolari:

- Dato un alfabeto $\Sigma$, indichiamo con $\Sigma^*$ tutte le possibili stringhe su quell’alfabeto
- L’operatore di concatenazione $\circ$ di solito si omette, quindi $r_1 \circ r_2$ diventa $r_1r_2$
- Gli operatori hanno una precedenza, in particolare gli operatori vanno valutati in questo ordine:

$$
^* \to \circ \to \cup
$$

## Linguaggio di una regex

Abbiamo detto che il valore finale di una espressione regolare è un linguaggio, definiamo questo linguaggio.

Sia $R$ una regex, definiamo il suo linguaggio $L(R)$ in questo modo:

1. Se $R$ è un singolo carattere $a$, allora $L(R) = \{a\}$
2. Se $R = \epsilon$, allora $L(R) = \{\epsilon\}$
3. Se $R = \emptyset$, allora $L(R) = \emptyset$
4. Se $R = R_1 \cup R_2$, allora $L(R) = L(R_1) \cup L(R_2)$
5. Se $R = R_1 \circ R_2$, allora $L(R) = L(R_1) \circ L(R_2)$
6. Se $R = R_1^*$, allora $L(R) = (L(R_1))^*$

### Esempio

Determiniamo il linguaggio della seguente espressione: $(0 \cup 1) \circ 0^*$

$$
L((0\cup 1)\circ 0^*) = L(0\cup 1) \circ L(0^*)\\
=L(0) \cup L(1) \circ L(0^*) \\
=\{0\} \cup \{1\} \circ L(0^*)\\
=\{0, 1\} \circ L(0^*)\\
=\{0, 1\} \circ L(0)^*\\
= \{0, 1\} \circ (\{0\})^*
$$

Vediamo una serie di esempi a cui diamo una descrizione verbale, consideriamo $\Sigma=\{0, 1\}$

- $L(0^*\, 1\, 0^*)$ = stringhe binarie con un solo 1
- $L(\Sigma^*\, 1\, \Sigma^*)$ = stringhe binarie con con almeno un 1
- $L((\Sigma\Sigma)^*)$ = stringhe binarie di lunghezza pari
- $L(1*\emptyset)$ = $\emptyset$ qualsiasi insieme concatenato all’insieme vuoto restituisce l’insieme vuoto
- $L(\emptyset^*)$ = $\{\epsilon\}$ la concatenazione di un numero qualsiasi di stringhe di un linguaggio vuoto da solo la stringa vuota

## Teorema

Un linguaggio $A$ è regolare se e solo se esiste una espressione regolare $R$ tale che $L(R) = A$

 Dimostriamo il teorema in entrambi i versi attraverso la dimostrazione di due lemmi.

### Primo lemma

Il lemma dice: “Sia $R$ una espressione regolare, allora $L(R)$ è regolare”

Mostriamo come trasformare $R$ in un NFA che riconosce il suo linguaggio.

Consideriamo caso per caso le definizioni di una espressione regolare:

1.  Se $R=a$, allora $L(R) = \{a\}$
    
    ![https://i.ibb.co/bv4R19z/prop-1.png](https://i.ibb.co/bv4R19z/prop-1.png)
    
2. Se $R = \epsilon$, allora $L(R) = \{\epsilon\}$
    
    ![https://i.ibb.co/b261rPx/prop-2.png](https://i.ibb.co/b261rPx/prop-2.png)
    
3. Se $R = \emptyset$, allora $L(R) = \emptyset$
    
    ![https://i.ibb.co/4pX7Lwc/prop-3.png](https://i.ibb.co/4pX7Lwc/prop-3.png)
    
4. Se $R = R_1 \cup R_2$, allora $L(R) = L(R_1) \cup L(R_2)$
    
    $R_1$ e $R_2$ sono delle espressioni regolari più piccole di $R$, se così non fosse staremmo definendo $R$ in termini di se stesso. Possiamo quindi fare una ipotesi induttiva: il teorema vale per $R_1$ e $R_2$, quindi $L(R_1)$ e $L(R_2)$ sono linguaggi regolari. Dato che i linguaggi regolari sono chiusi rispetto all’operazione di unione, allora anche $L(R)$ è regolare
    
5. Se $R = R_1 \circ R_2$, allora $L(R) = L(R_1) \circ L(R_2)$
    
    analogo al caso 4
    
6. Se $R = R_1^*$, allora $L(R) = (L(R_1))^*$
    
    analogo al caso 4
    

Ad esempio se vogliamo costruire l’NFA di questa espressione: $(ab \cup a)^*$:

![https://i.ibb.co/wcBQpzk/image.png](https://i.ibb.co/wcBQpzk/image.png)

### Secondo lemma

Il lemma dice: “Se $A$ è un linguaggio regolare allora esiste una espressione regolare $R$ tale che $L(R) = A$”

Idea: Poiché $A$ è un linguaggio regolare, esiste un DFA $D$ tale che $L(D) = A$. Vediamo come trasformare un DFA in una espressione regolare equivalente:

Per farlo dobbiamo servici di un nuovo tipo di automa chiamato GNFA (NFA **generalizzato**). La particolarità di questi automi è che negli archi si possono avere delle espressioni regolari, quindi le transizioni possono “mangiare” blocchi di input.

In particolare lavoreremo con GNFA che soddisfano i seguenti vincoli:

1. Hanno un solo stato iniziale e un solo stato accettante (diverso dallo stato iniziale).
2. Lo stato iniziale ha archi in uscita verso tutti gli altri stati e nessun arco entrante
3. Lo stato accettante ha archi in entrata da tutti gli stati e nessun arco in uscita
4. Tutti gli altri stati sono connessi direttamente tra loro da un arco (anche connessi con se stessi)  fatta eccezione per stato iniziale e stato finale

Il procedimento si fa in questo modo:

Si parte da un DFA con $k$ stati. Lo si trasforma in un GNFA con $k+2$ stati. Lo si continua a trasformare in un GNFA con uno stato in meno fino ad ottenere un GNFA con 2 soli stati.

### Da DFA a GNFA

Per trasformare un DFA in un GNFA si seguono i seguenti passaggi:

1. si aggiunge un nuovo stato iniziale che ha un $\epsilon$-arco verso il vecchio stato iniziale.
2. si aggiunge un nuovo stato accettante che ha $\epsilon$-archi entranti provenienti dai vecchi stati accettanti
3. Se abbiamo archi con più etichette, li sostituiamo con un nuovo arco la cui etichetta è l’unione delle etichette precedenti
4. Aggiungiamo archi con etichetta $\emptyset$ tra stati che non hanno archi

### Da GNFA ad espressione regolare

Dato che un GNFA contiene delle espressioni regolari negli archi, vogliamo rimuovere uno stato dal nostro GNFA fino ad avere 2 stati collegati da un arco, tale arco conterrà l’espressione regolare che vogliamo.

Quello che dobbiamo fare è quindi individuare uno stato da rimuovere e modificare la macchina in modo che il linguaggio riconosciuto da quel GNFA rimanga lo stesso.

Lo stato da rimuovere è di libera scelta, basta che **non sia lo stato iniziale o lo stato accettante.**

Identificato lo stato da rimuovere, $q_{\text{rip}}$, dobbiamo modificare gli archi restanti con delle nuove etichette che descrivono il passaggio di stato che già facevano, più il percorso tramite $q_{\text{rip}}$.

Esempio:

![https://i.ibb.co/Cm0yhxR/image.png](https://i.ibb.co/Cm0yhxR/image.png)

## Esempio completo da DFA a regex

Consideriamo il seguente DFA

![https://i.ibb.co/cCWDLjm/image.png](https://i.ibb.co/cCWDLjm/image.png)

Costruiamo il GNFA:

![https://i.ibb.co/MG13PYd/image.png](https://i.ibb.co/MG13PYd/image.png)

Adesso dobbiamo rimuovere uno ad uno gli stati intermedi fino a rimanere solamente con gli stati $s$ e $a$:

- partiamo con l’eliminare lo stato $1$, in tal caso dobbiamo aggiornare gli archi:
    - da $s$ a $2$ aggiungendo il cammino che passava da $1$
    - da $s$ a $3$ aggiungendo il cammino che passava da $1$
    - da $2$ a $2$ aggiungendo il cammino che passava da $1$
    - da $3$ a $3$ aggiungendo il cammino che passava da $1$
    - da $2$ a $3$ aggiungendo il cammino che passava da $1$
    - da $3$ a $2$ aggiungendo il cammino che passava da $1$
    
    ![https://i.ibb.co/yqhKVd9/image.png](https://i.ibb.co/yqhKVd9/image.png)
    
- eliminiamo lo stato $2$, in tal caso dobbiamo aggiornare gli archi:
    - da $s$ ad $a$ aggiungendo il cammino che passava da $2$
    - da $s$ a $3$ aggiungendo il cammino che passava da $2$
    - da $3$ a $3$ aggiungendo il cammino che passava da $2$
    - da $3$ ad $a$ aggiungendo il cammino che passava da $2$
    
    ![https://i.ibb.co/ZmJWS8Q/image.png](https://i.ibb.co/ZmJWS8Q/image.png)
    
- elimino lo stato 3, in tal caso dobbiamo aggiornare l’arco:
    - da $s$ ad $a$ aggiungendo il cammino che passava da $3$
    
    ![https://i.ibb.co/6tz5Jx5/image.png](https://i.ibb.co/6tz5Jx5/image.png)
    

ottengo così la regex equivalente al DFA iniziale

# Linguaggi non regolari

Mentre non risulta essere troppo difficile dimostrare che un linguaggio è regolare (utilizzando DFA, NFA ed espressioni regolari), non è altrettanto semplice dimostrare che un linguaggio non è regolare.

Per dimostrare che un linguaggio non è regolare ci serviamo del ***Pumping lemma***

## Pumping lemma

Enunciato: Se $A$ è un linguaggio regolare, allora esiste un intero $p\geq 1$ tale che ogni stringa $s \in A$ di lunghezza $|s| \geq p$, può essere divisa in tre parti $s = xyz$ in modo che soddisfi le seguenti condizioni:

1. $\forall i \geq 0, xy^iz \in A \hspace{7mm} y^i$ significa $i$ copie concatenate di $y$, racchiudere tali copie tra $x$ e $z$ mantiene la stringa nel linguaggio $A$
2. $|y| > 0 \hspace{7mm}$ $y$ deve essere composto da almeno una stringa ($y\neq \epsilon$)
3. $|xy|\leq p \hspace{7mm}$le prime due parti della stringa $s$ devono apparire entro $p$ caratteri

In pratica il lemma dice che una stringa appartenente ad un linguaggio regolare, ha una parte che può essere ripetuta in numero qualsiasi di volte, ottenendo una stringa ancora appartenente al linguaggio di partenza.

Nota come il punto 2 dice che $y$ deve essere composto da qualcosa che non sia la stringa vuota, mentre il punto 1 vale anche con $i=0$ ma indica che possiamo ignorare la parte $y$.

## Dimostrazione Pumping lemma

Sia $A$ un linguaggio regolare, allora esiste un DFA $D$ tale che $L(D) = A$.

Poniamo $p$ uguale al numero di stati del DFA $D$.

Consideriamo una stringa $s = w_1w_2 … w_n$ di lunghezza almeno $p$ (quindi $n \geq p$), e che appartenga al linguaggio $A$ (quindi $s \in A$).

Visto che $s \in A$, allora esiste una sequenza di stati $q_0, q_1, … q_n$ tali che $q_0$ è lo stato iniziale e $q_n$ è lo stato finale e ogni altro stato rispetta la funzione di transizione.

Dato che $n$ è la lunghezza della stringa, la sequenza degli stati del DFA avrà lunghezza $n+1$ (a causa dello stato iniziale). Abbiamo quindi che la sequenza degli stati è maggiore di 1 rispetto al numero totale di stati diversi. Di conseguenza nella sequenza ci sarà sicuramente uno stato ripetuto.

Chiamiamo $q_i$ lo stato che si ripete, e rappresentiamo graficamente come apparirebbe il DFA e localizziamo le tre parti della stringa $s$

![https://i.ibb.co/zxsBpRk/pumping.png](https://i.ibb.co/zxsBpRk/pumping.png)

Quindi $x$ è la parte iniziale che arriva fino allo stato che si ripete, $y$ parte dallo stato che si ripete e mangia gli input fino a tornare in quello stato, la parte rimanente è $z$.

Abbiamo quindi che questo automa riconosce le stringhe $s = xy^iz\hspace{1mm} \forall i \geq 0$

la condizione 2 è vera perché ci sono degli stati da $q_i$ per ritornare a se stesso.

la terza condizione è vera perché se tocco $p+1$ stati allora ho letto $p$ caratteri e ho letto sicuramente anche lo stato ripetuto, quindi $|xy| \leq p$

## Come usare il pumping lemma

Vediamo come usare il pumping lemma per dimostrare la non-regolarità di un linguaggio.

Sia $A$ il linguaggio che vogliamo dimostrare essere non regolare:

1. Assumo per assurdo che $A$ sia regolare
2. Dato che $A$ è regolare deve valere il pumping lemma
3. contraddico il pumping lemma con un controesempio
4. concludo che $A$ non è regolare

Per contraddire il pumping lemma dobbiamo usare la sua **negazione**:

Esiste una stringa $s \in A$ con $|s| \geq p$ tale che per ogni $x, y, z$, si ha $s=xyz$ con $|y| > 0$ e $|xy| \leq p$, per cui esista $i \geq 0$ tale che $xy^iz \notin A$

## Esempio 1

Dimostrare che $A=\{0^n 1^n\}$ non è regolare

Intanto questo linguaggio descrive le stringhe binarie che hanno una serie di zeri iniziali e poi una serie di uno in uguale quantità.

Assumiamo per assurdo che $A$ sia regolare, allora deve valere il pumping lemma.

Prendiamo come controesempio la stringa $s = 0^p1^p$.

La nostra stringa scelta è valida in quanto è un elemento del linguaggio $A$ e ha una lunghezza maggiore di $p$.

La possiamo quindi riscrivere come  $s= xyz$ con $|y| > 0$ e $|xy| \leq p$.

Dobbiamo quindi dimostrare che esiste un $i \geq 0$ tale che $xy^iz \notin A$. Prendo ad esempio $i = 2$

Considerando $|xy| \leq p$ con la mia stringa $s = 0^p1^p$ noto che $x$ e $y$ sono solo zeri in quanto gli zeri saranno in quantità $p$. Di conseguenza $xy^2z$ non sta in $A$ in quanto ci saranno più zeri che uno nella stringa, cioè si avranno delle stringhe nella forma $0^{p+k}1^p$, con $k>0$ (k è il numero di $0$ derivati dalla ripetizione di $y$ una seconda volta)

Quindi il linguaggio non è regolare.

## Esempio 2

Dimostriamo che $F = \{ww| w \in \{0, 1\}^*\}$ non è regolare

Assumiamo per assurdo che $F$ sia regolare.

Prendiamo come controesempio la stringa $s = 0^p10^p1$

$s$ appartiene al linguaggio ed è lunga almeno quanto $p$.

Possiamo quindi dividerla in tre parti $s = xyz$ con $|y| > 0$ e $|xy| \leq p$

Applicando la condizione $|xy| \leq p$ sappiamo che $y$ sta nei primi $p$ zeri.

Quindi considerando $i = 2$: la stringa $xy^2z$ ha forma $0^{p+k}10^p1$ con $k> 0$ che non sta nel linguaggio $F$ (k è il numero di $0$ derivati dalla ripetizione di $y$ una seconda volta)

## Consigli

Se il problema richiedere di mantenere esplicitamente il conto di un numero arbitrario di simboli, potrebbe non essere regolare, ad esempio

$\{0^n1^n|n\geq 0\}$ implica mantenere il conto di quanti $0$ si ha incontrato

$\{a^{2^n} | n\geq 0\}$ implica che devi mantenere il conto di quanti simboli si hanno letti in modo da sapere se sono quantità che sono potenze di due.

Inoltre per dimostrare che certi linguaggi non sono regolari può essere utile sfruttare la chiusura rispetto al complemento: cioè applicare il pumping lemma sul complemento del linguaggio, se il complemento non è regolare allora non lo è nemmeno il linguaggio di partenza.

ad esempio per dimostrare che $\{w | w\in\{0, 1\}^* \text{non è palindroma}\}$ non è regolare, può essere più semplice dimostrare che il suo complemento non lo sia $\{w | w\in\{0, 1\}^* \text{ palindroma}\}$

# Linguaggi context-free

Vediamo un nuovo metodo per descrivere linguaggi con struttura ricorsiva, questo metodo si chiama ***Context-Free Grammar*** (CFG).

I linguaggi riconosciuti da questo metodo si chiamano **linguaggi context-free**, che risulta includere anche tutti i linguaggi regolari.

Vediamo un esempio di grammatica $G$: 

$$
A \to 0A1\, |\, B \\
B \to \#
$$

Le due righe di esempio si chiamano **produzioni**, in particolare significano che:

1. $A$ si può riscrivere come $0A1$ oppure come $B$.
2. $B$ si può riscrivere come $\#$

Per convenzione abbiamo dei simboli detti **non-terminali** (o variabili), che si indicano con lettere maiuscole.

Abbiamo poi dei simboli detti **terminali**, che si indicano con **lettere minuscole, cifre e simboli speciali**

Abbiamo poi uno ***start symbol*** (un carattere non-terminale) che generalmente a sinistra della regola più in alto.

Nell’esempio abbiamo:

- simboli non-terminali: $A, B$
- simboli terminali: $0, 1, \#$
- start symbol: $A$

Possiamo dire che le stringhe generate dalla grammatica sono stringhe composte da soli terminali ottenibili partendo dallo *start symbol* tramite riscritture permesse dalle produzioni.

Con la grammatica precedente, vediamo un esempio di **derivazione** (sequenza di riscritture per ottenere una stringa valida):

$$
A \Rightarrow 0A1 \Rightarrow 00A11 \Rightarrow 00B11 \Rightarrow00\#11
$$

Il linguaggio della grammatica possiamo scriverlo come $L(G) = \{0^n\#1^n | n \geq 0\}$

Possiamo rappresentare la stressa informazione tramite un **albero sintattico** (*parse tree*):

![https://i.ibb.co/6gt9nKv/image.png](https://i.ibb.co/6gt9nKv/image.png)

## Definizioni formali

Vediamo delle definizioni formali della teoria dei linguaggi context-free

**Linguaggio context-free**: Un linguaggio $A$ si dice context-free se e solo se esiste una CFG $G$ tale che $L(G) = A$

**CFG**: Una CFG $G$ è una quadrupla $(V, \Sigma, R, S)$ in cui

- $V$ è un insieme finito di non-terminali
- $\Sigma$ è un insieme finito di terminali tale che $V \cap \Sigma = \emptyset$ (cioè sono insiemi disgiunti)
- $R$ è un insieme finito di produzioni (o regole) dalla forma $A \to w$ dove $A \in V$ e $w \in (V \cup \Sigma)^*$
- $S \in V$ è lo *start symbol*

Nell’esempio di prima abbiamo quindi

$$
V = \{A, B\} \hspace{3mm} \Sigma = \{0, 1, \#\} \hspace{3mm} R = \{A\to0A1, A\to B, B\to \#\} \hspace{3mm} S = A
$$

### Terminologia

Siano $u, v, w \in (V \cup \Sigma)^*$ delle ripetizioni indefinite di terminali e non terminali

e sia $A\to w \in R$ (una produzione)

Diciamo che $uAv$ **produce** $uwv$ con questa simbologia: $uAv \Rightarrow uwv$.

Diciamo che $u$ **deriva** $v$ con questa simbologia: $u \Rightarrow^* v$ se e solo se:

- $u=v$ oppure
- se esiste una sequenza di riscritture per cui si ha $u \Rightarrow w_1 \Rightarrow w_2 \Rightarrow … \Rightarrow v$

## Esempi

Forniamo il CFG con il seguente alfabeto $\Sigma = \{0, 1\}$ per:

1. Stringe che comprendono almeno tre 1
    
    $$
    S \to A 1 A 1 A 1 A\\
    A \to 0A | 1A |\epsilon
    $$
    
2. Stringhe che iniziano e finiscono con lo stesso simbolo
    
    $$
    S \to 0A0 | 1A1 | 0 | 1\\
    A \to 0A | 1A | \epsilon
    $$
    
3. Stringhe di lunghezza dispari
    
    $$
    S \to CP\\
    C \to 0|1\\
    P \to 00P | 01P | 10P | 11P |\epsilon
    $$
    
4. Stringhe palindrome
    
    $$
    S \to 0S0 | 1S1 | 0 | 1 |\epsilon
    $$
    
5. Nessuna stringa
    
    $$
    S \to S
    $$
    

## Ambiguità

Qualche volta una grammatica può generare la stessa stringa in più modi diversi, quando ciò accade diciamo che la CFG è **ambigua**.

In altre parole possiamo dire che una CFG è ambigua se e solo se esiste una stringa $w \in L(G)$ tale che $w$ ha almeno due *parse tree* diversi oppure almeno due *derivazioni a sinistra* **diverse**.

**derivazione a sinistra**: è un derivazione in cui ad ogni passo la variabile sostituita è sempre quella più a sinistra

Ad esempio considerando la grammatica:

$$
E \to E+E | E \times E | a
$$

genera la stessa stringa con due parse tree diversi:

![https://i.ibb.co/3NKMs2V/image.png](https://i.ibb.co/3NKMs2V/image.png)

## Chiusura dei linguaggi context free

I linguaggi context free **sono chiusi rispetto alle operazioni regolari** (unione, concatenazione e start).

mentre **non** sono chiusi rispetto a **intersezione e complemento**

## Forma normale di Chomsky

Vediamo una forma semplificata delle CFG, chiamata **forma normale di Chomsky.**

Una CFG è in **forma normale Chomsky** se e solo se ognuna delle sue produzioni è nella forma:

$$
A \to BC
\\
A \to a
\\
S \to \epsilon
$$

Dove $A, B, C$ sono dei non terminali che non sono *start symbol* e $S$ è lo *start symbol*.

Ad esempio la seguente grammatica è in forma normale Chomsky

$S \to AB | \epsilon$

$A \to 0$

$B \to CD$

$C \to 1$

$D \to 1$

### Teorema

Per ogni CFG $G$ esiste una CFG $H$ in forma normale Chomsky tale che $L(H) = L(G)$

**Dimostrazione**:

Definiamo un algoritmo che converte $G$ in un CFG $H$ equivalente che soddisfa la forma normale Chomsky.

Tale algoritmo farà delle modifiche alla grammatica, assicurandosi di mantenere il linguaggio invariato.

1. Garantiamo che lo *start symbol* non appaia mai sul lato destro delle regole.

$$
\text{Genera un nuovo start symbol } S'\text{ e aggiungi la produzione } S' \to S
$$

1. Garantiamo che solamente lo *start symbol* possa avere $\epsilon$-transizioni
    
    $$
    \text{Elimina le produzioni } A \to \epsilon \text{ dove }A \text{ non è il nuovo start symbol.}
    \\
    \\
    \text{Inoltre per tutte le regole che hanno } A \text{ nella parte destra, }\\
    \text{aggiungi una nuova regola con quell'occorrenza cancellata.}
    \\
    \text{Ad esempio per } R \to uAvAw \text{ introduco delle nuove regole:}
    \\
    R\to uvAw \\
    R\to uAvw \\
    R\to uvw
    $$
    
2. Garantiamo che non ci siano produzioni unitarie, cioè nella forma $A \to B$

$$
\text{Elimina  le regole nella forma } A \to B.
\\
\text{per ogni regola nella forma } B \to u \text{ introduci una nuova regola:}
\\
A \to u
$$

1. Garantiamo che non appaiano regole nella forma $A \to u_1 … u_k$ con $k \geq 3$ dove $u_i$ possono essere sia terminali che non terminali.
E garantiamo che a destra delle regole non ci sia un misto di terminali e non terminali
    
    $$
    \text{Rimpiazza ogni regola nella forma } A \to u_1 ...u_k \text{ con } k \geq 3 \text{ con le seguenti regole:}\\
    A_0 \to u_1A_1\\
    A_1 \to u_2A_2\\
    ...\\
    A_{k-2} \to u_{k-1} u_k\\
    \text{nelle regole rimanenti rimpiazza ogni terminale } u_i \\
    \text{affiancato da un non terminale, con un non terminale } U_i\\
    \text{e aggiungi la regola } U_i \to u_i
    $$
    

**Nota 1**: seguire gli step nell’ordine indicato è fondamentale per evitare che uno step invalidi quelli precedenti.

**Nota 2**: Negli step 2 e 3, si non si deve rigenerare ciò che è già stato eliminato, altrimenti si verifica un loop.

### Esempio di conversione

Partiamo dalla seguente CFG:

$S \to ASA \,|\, aB$
$A \to B \, | \, S$

$B \to b \,|\, \epsilon$

Seguiamo l’algoritmo:

- Step 1 iterazione 1
    
    $S_0 \to S$
    
    $S \to ASA \,|\, aB$
    $A \to B \, | \, S$
    
    $B \to b \,|\, \epsilon$
    
- Step 2 iterazione 1
    - $B \to b \,|\, \cancel{\epsilon}$
        - $S \to ASA \, |\,aB\,|\,a$
        - $A \to B \,|\, S \,|\, \epsilon$
    
    Risultato Step 2 intermedio
    
    $S_0 \to S$
    
    $S \to ASA \,|\, aB \,|\, a$
    $A \to B \, | \, S \,|\, \epsilon$
    
    $B \to b$
    
- Step 2 iterazione 2
    - $A \to B\,|\,S\,|\,\cancel{\epsilon}$
        - $S \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS\,|\,S$
    
    **Risultato Step 2**
    
    $S_0 \to S$
    
    $S \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS\,|\,S$
    $A \to B \, | \, S$
    
    $B \to b$
    
- Step 3 iterazione 1
    - $S \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS\,|\,\cancel{S}$
        - $S \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS$
- Step 3 iterazione 2
    - $S_0 \to \cancel{S}$
        - $S_0 \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS$
- Step 3 iterazione 3
    - $A \to \cancel{B} \,|\,S$
        - $A \to S \,|\, b$
- Step 3 iterazione 4
    - $A \to \cancel{S}\,|\,b$
        - $A \to b\,|\,ASA\,|\,aB\,|\,a\,|\,SA\,|\,AS$
- **Risultato Step 3**
    
    $S_0 \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    
    $S \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    
    $A \to b\,|\,ASA\,|\,aB\,|\,a\,|\,SA\,|\,AS$
    
    $B \to b$
    
- Step 4 prima parte
    - $S_0 \to \cancel{ASA} \,|\, aB \,|\, a\,|\, SA\,|\, AS$
        - $S_0 \to AA_1 \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    - $S \to \cancel{ASA} \,|\, aB \,|\, a\,|\, SA\,|\, AS$
        - $S \to AA_1 \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    - $A \to b\,|\,\cancel{ASA}\,|\,aB\,|\,a\,|\,SA\,|\,AS$
        - $A \to b\,|\,AA_1 \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    - $A_1 \to SA$
    
    Risultato Step 4 intermedio
    
    $S_0 \to AA_1 \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    
    $S \to AA_1 \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    
    $A \to b\,|\,AA_1 \,|\, aB \,|\, a\,|\, SA\,|\, AS$
    
    $B\to b$
    
    $A_1 \to SA$
    
- Step 4 seconda parte
    - $S_0 \to AA_1 \,|\, \cancel{aB} \,|\, a\,|\, SA\,|\, AS$
        - $S_0 \to AA_1 \,|\, UB \,|\, a\,|\, SA\,|\, AS$
    - $S \to AA_1 \,|\, \cancel{aB} \,|\, a\,|\, SA\,|\, AS$
        - $S \to AA_1 \,|\, UB \,|\, a\,|\, SA\,|\, AS$
    - $A \to b\,|\,AA_1 \,|\, \cancel{aB} \,|\, a\,|\, SA\,|\, AS$
        - $A \to b\,|\,AA_1 \,|\, UB \,|\, a\,|\, SA\,|\, AS$
    - $U \to a$

**Risultato finale**

$S_0 \to AA_1 \,|\, UB \,|\, a\,|\, SA\,|\, AS$

$S \to AA_1 \,|\, UB \,|\, a\,|\, SA\,|\, AS$

$A \to b\,|\,AA_1 \,|\, UB \,|\, a\,|\, SA\,|\, AS$

$B\to b$

$A_1 \to SA$

$U \to a$

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

# Linguaggi non context free

Dimostriamo l’esistenza di linguaggi che stanno al di fuori dell’insieme dei linguaggi context free.

Per dimostrare che un linguaggio non è context free bisogna dimostrare che esso non è generabile da alcuna CFG (oppure che non è riconoscibile da un PDA).

Il principio è lo stesso che abbiamo visto per dimostrare che un linguaggio non è regolare, cioè usare il **pumping lemma** in una versione modificata.

## Pumping lemma per linguaggi context free

Il pumping lemma per i linguaggi context free stabilisce che esiste un valore (*pumping length*) tale che le stringhe più lunghe di tale valore possono essere replicate in un certo modo restando comunque nel linguaggio. 

### Definizione

Sia $A$ un linguaggio context free, allora esiste un intero $p \geq 0$ (*pumping length*) tale che ogni stringa $s \in A$ con $|s| \geq p$ ($|s|$ è la lunghezza della stringa) può essere divisa in cinque parti

$$
s = u\,v\,x\,y\,z
$$

che soddisfano le seguenti condizioni:

1. $\forall i \geq 0 \hspace{3mm} u\,v^i\,x\,y^i\,z \in A \hspace{7mm} \text{ iterando } v \text{ e } y \text{ la stringa rimane nel linguaggio}$
2. $|vy| > 0 \hspace{7mm} v\text{ oppure } y \text{ non sono vuote}$
3. $|vxy| \leq p \hspace{5mm} vxy \text{ insieme hanno una lunghezza al masssimo } p$

**Idea della dimostrazione**:

Scegliamo un $p$ molto grande, quindi le stringhe $s$ saranno molto lunghe e avranno un *parse tree* molto alto. Visto che i non terminali sono di numero finito in tale *parse tree* ci deve essere un non terminale $R$ che si ripete.

Possiamo rappresentare il *parse tree* in questo modo, dove la frontiere dell’albero rappresenta la stringa $s = u\,v\,x\,y\,z$

![https://i.ibb.co/120SZ17/image.png](https://i.ibb.co/120SZ17/image.png)

Possiamo fare due operazioni con questo parse tree:

- *pumping up*: infatti prendendo il parse tree più grande radicato in $R$ e lo mettendolo al posto di quello piccolo ottengo un parse tree per la stringa $u\,v\,v\,x\,y\,y\,z$
    
    ![https://i.ibb.co/f8mRp8Q/image.png](https://i.ibb.co/f8mRp8Q/image.png)
    
- *pumping down*:  infatti prendendo il parse tree più piccolo radicato in $R$ e lo mettendolo al posto di quello grande ottengo un parse tree per la stringa $u\,x\,z$
    
    ![https://i.ibb.co/TK2hz7J/image.png](https://i.ibb.co/TK2hz7J/image.png)
    

## Applicazione del pumping lemma

### Esempio 1

Dimostriamo usando il pumping lemma che il seguente linguaggio non è context free

$$
B = \{a^nb^nc^n | n \geq 0\}
$$

Assumiamo per assurdo che $B$ sia un linguaggio context free, allora deve valere il pumping lemma.

Sia $p$ la *pumping length*, considero la stringa $s = a^pb^pc^p$, abbiamo che $s \in B$ e $|s| \geq p$.

Giungiamo ad una contraddizione dimostrando che $s$ non può essere iterata:

dividiamo $s = u\,v\,x\,y\,z$ con $|vy| > 0$ e $|vxy| \leq p$.

Sfruttando il fatto che $|vy| > 0$ cioè che $v$ o $y$ non è vuota per considerare due casi:

1. Quando $v$ o $y$ contiene più di un tipo di simboli, allora $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio perché non viene rispettato l’ordine
    
    $$
    \underbrace{a}_u \underbrace{a}_v \underbrace{ab}_y \underbrace{bbccc}_z
    $$
    
    $$
    \underbrace{a}_u \underbrace{aa}_{v^2} \underbrace{abab}_{y^2} \underbrace{bbccc}_z
    $$
    
2. Quando entrambe $v$ e $y$ contengono un solo tipo di simbolo, abbiamo che un carattere non sta né in $v$ né in $y$ quindi $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio perché un carattere apparirà un numero minore di volte
    
    $$
    \underbrace{a}_u \underbrace{a}_v \underbrace{b}_y \underbrace{bcc}_z
    $$
    
    $$
    \underbrace{a}_u \underbrace{aa}_{v^2} \underbrace{bb}_{y^2} \underbrace{bcc}_z
    $$
    

### Esempio 2

Dimostriamo usando il pumping lemma che il seguente linguaggio non è context free

$$
D = \{ww | w \in \{0, 1\}^*\}
$$

Assumiamo per assurdo che $D$ sia un linguaggio context free, allora vale il pumping lemma, sia $p$ la pumping length, considero la stringa $s = 0^p1^p0^p1^p$,  abbiamo che $s \in D$ e $|s| \geq p$.

dividiamo $s = u\,v\,x\,y\,z$ con $|vy| > 0$ e $|vxy| \leq p$.

Sfruttando il fatto che $|vxy| \leq p$ notiamo che tale porzione della stringa se fosse nella prima metà allora $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio. 

$$
\underbrace{0}_u \underbrace{0}_x \underbrace{1}_y \underbrace{10011}_z 
$$

$$
\underbrace{0}_{u} \underbrace{0}_x \underbrace{11}_{y^2} \underbrace{10011}_{z}
$$

Analogamente se fosse nella seconda metà allora $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio

$$
\underbrace{00110}_u \underbrace{0}_v \underbrace{1}_x \underbrace{1}_z
$$

$$
\underbrace{00110}_u \underbrace{00}_{v^2} \underbrace{1}_x \underbrace{1}_z
$$

Infine se sta a cavallo tra le due metà non sta comunque nel linguaggio

$$
\underbrace{001}_u \underbrace{1}_v \underbrace{0}_x \underbrace{011}_z
$$

$$
\underbrace{001}_u \underbrace{11}_v \underbrace{0}_x \underbrace{011}_z
$$

# Macchine di Turing

Una macchina di Turing (MdT) è un modello teorico di calcolatore con **memoria infinita** utilizzabile in maniera arbitraria.

Viene utilizzato un **nastro infinito** come memoria illimitata e una **testina** che viene utilizzata per leggere e scrivere la cella indicizzata.

**Caratteristiche** della macchina di Turing:

- La memoria è infinita e viene rappresentata da un nastro
- L’input si trova sul nastro e può essere sia letto che scritto
- La testina può spostarsi sia a destra che a sinistra
- Accetta o rifiuta un input immediatamente quando entra in uno stato di accettazione o rifiuto (non è quindi necessario consumare tutto l’input)

## Definizione formale

Una macchina di Turing è una 7-tupla $(Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$ dove:

- $Q$ è l’insieme finito degli stati
- $\Sigma$ è l’alfabeto di input tale che non contiene il simbolo $\sqcup$ (*blank*) che rappresenta la cella vuota
- $\Gamma$ è l’alfabeto del nastro tale che $\sqcup \in \Gamma, \Sigma \subseteq \Gamma$
- $\delta : Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$ è la funzione di transizione, Quando la macchina occupa un certo stato e legge un input puntato dalla testina sul nastro, allora la macchina cambia stato scrive un nuovo simbolo sulla cella puntata dalla testina e sposta la testina a sinistra $(L)$ o destra $(R)$
- $q_0 \in Q$ è lo stato iniziale
- $q_{\text{accept}} \in Q$ è lo stato di accettazione
- $q_{\text{reject}} \in Q$ è lo stato di rifiuto, $q_{\text{reject}} \neq q_{\text{accept}}$

## Come computa

Inizialmente la MdT riceve un input di $n$ simboli che vengono posizionate nelle $n$ celle più a sinistra del nastro, il resto del nastro avrà caratteri *blank*. La testina parte dalla posizione più a sinistra del nastro e la computazione inizia.

Possiamo descrivere la computazione definendo delle **configurazioni** composte da tre elementi:

1. Stato interno
2. Contenuto del nastro
3. posizione della testina

In generale una **configurazione ha la forma** $uqv$ dove $u, v$ sono stringhe generate dell’alfabeto del nastro $\Gamma$ e $q$ è uno stato corrente.

Ad esempio

![https://i.ibb.co/FqsDmvq/image.png](https://i.ibb.co/FqsDmvq/image.png)

la configurazione si scrive come $1011q_701111$. È importante notare come la testina sta puntando all’elemento subito dopo lo stato $q_7$

Una macchina di Turing computa passando da una configurazione alla successiva secondo quanto definito dalla funzione di transizione $\delta$

### Regole di computazione

1. Siamo nella configurazione $uaq_ibv$ con $\delta(q_i, b) = (q_j, c, L)$ allora la prossima configurazione è $uq_jacv$
2. Siamo nella configurazione $uaq_ibv$ con $\delta(q_i, b) = (q_j, c, R)$ allora la prossima configurazione è $uacq_jv$
3. (testina già all’estremità sinistra con spostamento a sinistra) Siamo nella configurazione $q_ibv$ con $\delta(q_i, b) = (q_j, c, L)$ allora la prossima configurazione è $q_jcv$
4. (testina già all’estremità sinistra con spostamento a destra) Siamo nella configurazione $q_ibv$ con $\delta(q_i, b) = (q_j, c, R)$ allora la prossima configurazione è $cq_jv$

Una MdT accetta un input $w$ se e solo se esiste una sequenza di configurazioni $c_1…c_k$ tale che:

1. $c_1$ è la configurazione iniziale $q_0w$
2. $c_k$ è una configurazione di accettazione $uq_{\text{accept}}v$
3. per ogni $i$, $c_i$ passa in $c_{i+1}$ secondo le regole di computazione

Nota: Siccome $q_{\text{accept}}$ e $q_{\text{reject}}$ sono configurazioni di arresto, cioè non producono ulteriori configurazioni possiamo definire la funzione di transizione più precisamente come:

$\delta: Q \setminus \{q_{\text{accept}}, q_{\text{reject}}\}\times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$

## Linguaggio

Un linguaggio $A$ si dice **Turing-riconoscibile** (TR) se e solo se esiste una MdT $M$ tale che $L(M) = A$

Dato un input, una MdT ha solo tre possibili comportamenti:

1. Accettare l’input
2. Rifiutare l’input
3. Andare in loop 

Una MdT che non va mai in loop per nessun input è detta **decisore**.

Un linguaggio $A$ si dice **decidibile** se e solo se esiste una **MdT decisore** $M$ tale che $L(M) = A$ 

È immediato che **ogni linguaggio decidibile è anche Turing-riconoscibile** (il contrario non è necessariamente vero).

## Esempio di MdT

Anche le MdT si possono rappresentare tramite diagrammi di stato.

Forniamo l’interpretazione verbale e il diagramma di stato per il seguente linguaggio

$$
\{w\#w | w \in \{0, 1\}^*\}
$$

(Questo linguaggio non è né regolare né context free)

L’idea è quella di muovere la testina a zig-zag fra posizioni corrispondenti a sinistra e a destra del simbolo $\#$ per verificare che esse contengano lo stesso simbolo. Se non è così oppure se non trovi il simbolo $\#$ allora rifiuta, altrimenti sostituisci i simboli corrispondenti con un simbolo a scelta.

Una volta esauriti tutti i simboli a sinistra di $\#$ verifica se ci sono simboli rimanenti a destra di $\#$, in tal caso rifiuta, altrimenti accetta. 

![https://i.ibb.co/bvDBjTZ/image.png](https://i.ibb.co/bvDBjTZ/image.png)

Le frecce nel seguente diagramma di stato si interpretano nel seguente modo:

$$
\text{lettura dal nastro}\rightarrow \text{scrittura sul nastro}, \text{spostamento testina}
$$

![https://i.ibb.co/7yNhkBr/mdt.png](https://i.ibb.co/7yNhkBr/mdt.png)

## Varianti di macchine di Turing

Esistono molte varianti di macchine di Turing, la cui realizzazione può essere più intuitiva per certi problemi, ma è importante notare che tutte le varianti riconoscono esattamente gli stessi linguaggi, cioè sono **equivalenti tra loro ed alla definizione classica di macchina di turing**

## MdT senza movimento della testina

In questa variante al posto di forzare la testina a muoversi o a destra o a sinistra ad ogni passo, aggiungiamo la possibilità che la **testina rimanga ferma**.

Riscriviamo quindi la funzione di transizione in questo modo:

$$
\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R, S\}
$$

Dove $R$ sta per “Right”, $L$ sta per “Left” e $S$ sta per “Stay”

Questa variante non aggiunge potenza al modello in quanto possiamo convertire questa variante in una MdT che al posto della mossa $S$ esegue due transizioni: una in cui sposta la testina a destra e la successiva che riporta a sinistra

## MdT multinastro

In questa variante si dispone di $k$ nastri, ognuno con la propria testina.

Inizialmente l’input si trova nel primo nastro mentre gli altri nastri sono vuoti e servono come memoria ausiliaria su cui fare operazioni.

Riscriviamo quindi la funzione di transizione in questo modo:

$$
\delta: Q \times \Gamma^k \rightarrow Q \times \Gamma^k \times \{L, R, S\}^k
$$

dove $k$ è il numero di nastri.

### Teorema

Per ogni macchina di Turing multinastro esiste una macchina di Turing a singolo nastro equivalente.

**Dimostrazione**: Sfruttando il fatto che il singolo nastro della MdT è infinito, possiamo memorizzare le informazioni degli altri nastri in quel singolo nastro concatenando il contenuto degli altri. Viene utilizzato un simbolo speciale come delimitatore per i contenuti dei vari nastri (ad esempio il simbolo `#`).

Inoltre serve tenere traccia della posizione della testina sul k-esimo nastro, anche questo lo possiamo fare aggiungendo un simbolo nella cella puntata dalla testina (ad esempio il simbolo •)

![https://i.ibb.co/WFBF0Bm/image.png](https://i.ibb.co/WFBF0Bm/image.png)

Ovviamente per tenere correttamente aggiornata la MdT sono necessari opportuni shift di contenuto per tenere separati i contenuti dei vari nastri.

## MdT non deterministica

Analogamente a quanto fatto passando dai DFA agli NFA, possiamo rendere le transizioni della macchina di Turing non deterministiche.

Riscriviamo quindi la funzione di transizione in questo modo:

$$
\delta: Q \times \Gamma \rightarrow \mathcal{P}(Q \times \Gamma \times \{L, R\})
$$

Se un qualche ramo della computazione porta ad uno stato di accettazione allora la macchina accetta.

### Teorema

Per ogni macchina di Turing non deterministica esiste una macchina di Turing deterministica equivalente.

**Idea della dimostrazione**:

Una computazione non deterministica si può rappresentare con un albero in cui ogni nodo ha come figli i possibili passi successivi della computazione.

L’idea è quella di **simulare** tramite una macchina di turing deterministica **tutti i possibili cammini** radice-foglia dell’albero, se uno di questi porta ad uno stato di accettazione allora la macchina accetta, altrimenti non termina. Una visita in profondità potrebbe far intraprendere alla macchina un cammino che porta ad un loop, impedendogli così di visitare tutto l’albero. Serve quindi una **visita in ampiezza**.

**Dimostrazione**:

Per facilitare la simulazione della MdT non deterministica utilizziamo una macchina di Turing deterministica a tre nastri (che abbiamo visto essere equivalente a quella a singolo nastro):

Vediamo come sono utilizzati i nastri:

1. Il nastro 1 contiene sempre la **stringa di input** e non viene mai modificato
2. Il nastro 2 mantiene una copia del nastro della macchina non deterministica durante l’attuale computazione
3. Il nastro 3 tiene traccia della posizione della macchina deterministica nell’albero (usando degli indirizzi)

![https://i.ibb.co/vL77GxV/turing.png](https://i.ibb.co/vL77GxV/turing.png)

Per tenere traccia della posizione nell’albero vengono numerati i figli di ogni nodo, e tali valori vengono inseriti nel terzo nastro, ad esempio per arrivare allo stato di accettazione l’indirizzo $3 \,1 \,1$ (la stringa vuota $\epsilon$ rappresenta l’indirizzo per il nodo radice).

Notiamo anche dall’immagine come una visita in profondità non funzionerebbe in quanto si potrebbe rimanere bloccati nel loop del primo ramo non raggiungendo mai quello di accettazione

Per effettuare una visita in ampiezza gli indirizzi seguiranno un ordine lessicografico, se $b$ è il numero di figli più grande in tutto l’albero allora gli indirizzi saranno del tipo

$$
1, 2, ...b\\
11, 12, ...1b \\
21, 22, ...2b \\
...\\
b1, b2, ...bb
$$

In questo modo possono anche uscire indirizzi che in realtà non sono presenti sull’albero, tali indirizzi sono detti **invalidi**.

Vediamo il funzionamento della macchina:

1. mette l’input nel nastro 1, il nastro 2 è vuoto e metti $\epsilon$ nel nastro 3
2. copia il nastro 1 nel nastro 2
3. Utilizza il nastro 2 per simulare la computazione non deterministica, consultando il nastro 3 per determinare la prossima scelta. Se giunge in uno stato di accettazione allora accetta, altrimenti (stato di rifiuto o indirizzo invalido) va al punto 4
4. aggiorna il nastro 3 con la prossima stringa e torna al punto 2

## Enumeratori

In modo informale un enumeratore è una macchina di Turing con una stampante collegata come dispositivo di output per stampare stringhe.

Mentre possiamo associare la macchina di Turing ad un riconoscitore di stringhe, un enumeratore è un **generatore di stringhe.**

Il linguaggio di un enumeratore è l’insieme di stringhe stampate.

### Teorema

Un linguaggio $A$ è Turing-riconoscibile se e solo se esiste un enumeratore $E$ che lo genera

**Dimostrazione**:

- Primo verso della doppia implicazione:  Se esiste un enumeratore $E$ tale che $L(E) = A$ allora dimostro che il linguaggio è turing riconoscibile costruendo una MdT $M$ tale che $L(M) = A$.
    
    La MdT $M$ funziona come segue:
    
    $M =$ Su input $w$:
    
    1. Esegue $E$. Ogni volta che $E$ genera una stringa $w’$, la confronta con $w$
    2. Se $w'=w$, accetta
    
- Secondo verso della doppia implicazione: Se $A$ è turing-riconoscibile allora dimostro che esiste un enumeratore $E$ tale che $L(E) = A$
    
    Se il linguaggio è turing riconoscibile allora esiste una MdT $M$ che riconosce il linguaggio, costruiamo un enumeratore
    
    $E =$ per $i = 1, 2, 3, …$:
    
    1. Esegui $M$ per $i$ passi di computazione su $s_1, s_2, s_3, …$ (cioè computa le stringhe in parallelo)
    2. Se una qualche computazione accetta allora stampa la corrispondente stringa

## Descrizione formale di enumeratore

Un enumeratore è una 7-upla $(Q, \Sigma, \Gamma, \delta, q_0, q_p, q_h)$ dove:

- $Q$: insieme finito di stati
- $\Sigma$: è l’alfabeto finito per la stampa
- $\Gamma$: è l’alfabeto finito per il nastro, in cui $\sqcup \in \Gamma$
- $\delta : (Q \setminus \{q_p, q_h\} \times \Gamma) \rightarrow Q \times \Gamma \times \{L, R\} \times (\Sigma \cup \{\epsilon\})$
    
    quindi nello stato attuale e letto un simbolo dal nastro $\rightarrow$ passiamo al nuovo stato, scriviamo un nuovo simbolo sul nastro, spostiamo la testina, scriviamo un nuovo simbolo in coda alla stampa
    
- $q_0 \in Q$: stato iniziale
- $q_p \in Q$: stato di stampa
- $q_h \in Q$: stato di terminazione, tale che $q_h \neq q_p$

La computazione di un enumeratore avviene tramite una sequenza di configurazioni.

Una configurazione per un enumeratore è una coppia $(uqv, w)$ dove:

- $u,v \in \Gamma^*$ stringhe costruite sull’alfabeto $\Gamma$
- $q \in Q$ lo stato corrente
- $w \in \Sigma^*$ stringa costruita sull’alfabeto $\Sigma$

Vediamo come una configurazione evolve nella successiva:

1. **Mossa a sinistra**: configurazione attuale $(uaq_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, L, d)$ allora la prossima configurazione è $(uq_jacv, wd)$
2. **Mossa a destra**: configurazione attuale $(uaq_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, R, d)$ allora la prossima configurazione è $(uacq_jv, wd)$
3. **Mossa a sinistra (inizio nastro)**: configurazione attuale $(q_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, L, d)$ allora la prossima configurazione è $(q_jcv, wd)$
4. **Mossa a destra (inizio nastro)**: configurazione attuale $(q_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, R, d)$ allora la prossima configurazione è $(cq_jv, wd)$
5. **Mossa di stampa**: configurazione attuale $(uq_pv, w)$ allora la prossima configurazione è $(q_0uv, \epsilon)$ in questa mossa viene stampato il contenuto nel buffer di stampa e viene riportata la macchina allo stato iniziale. 

Il linguaggio di un enumeratore formalmente è:

$$
L(E) = \{w \in \Sigma^* : \text{per qualche } u, v \in \Gamma^* \text{ si ha che } (uq_pv, w) \text{ è raggiungibile da }(q_0, \epsilon)\}
$$

## Tesi di church-Turing

L’equivalenza tra i modelli che abbiamo visto (ma ce ne sono tanti altri) ha portato alla formulazione di una tesi, chiamata **tesi di Church-Turing** per la quale si è giunti alla conclusione che sebbene esistano molti modi di computare, essi si riducono tutti alla definizione di **algoritmo** ovvero una sequenza di istruzioni atte a risolvere un determinato problema.

Quindi il concetto di algoritmo è equivalente ad un algoritmo mediante macchina di Turing.

Dopo questa tesi abbiamo 3 modi per descrivere una macchina di turing:

1. descrizione formale con la 7-upla
2. descrizione implementativa in modo verbale dei passaggi di computazione sul nastro
3. descrizione ad alto livello verbale ignorando la gestione del nastro e della testina (simil pseudo-codice)

D’ora in avanti utilizzeremo il terzo metodo.

## decimo problema di Hilbert

Il decimo problema di Hilbert (o problema delle radici intere di un polinomio) dice che: dato un polinomio a più variabili determinare se esso ammetta o meno una radice intera (cioè sostituire le sue variabili con dei valori per cui risulti uguale a zero).

È stato dimostrato che non esiste un algoritmo che risolva questo problema.

Proviamo a risolvere una versione semplificata del problema: dato un polinomio in una sola variabile $x$ determinare se ammetta o meno una radice intera.

Definiamo il linguaggio del problema:

$$
A = \{<p> : p \text{ è un polinomio in x con radice intera}\}
$$

Dove $<\cdot>$ è una funzione che trasforma polinomi in una rappresentazione come stringa

Siccome abbiamo definito i linguaggi come un insieme di stringhe è importante che nel linguaggio $A$ ci siano stringhe e non polinomi. È a discrezione del singolo stabilire quale rappresentazione come stringa utilizzare, fintanto che sia possibile passare alla rappresentazione come polinomio e vice versa.

Per la tesi di Church-Turing, questo problema ammette soluzione algoritmica se e solo se esiste un **decisore** (macchina di Turing che accetta o rifiuta senza andare mai in loop) che riconosce $A$.

Provo a costruire il decisore $M$ che riconosce il linguaggio:

$M =$  Su input $<p>$:

1. Per tutti gli $x = 0, 1, -1, 2, -2, 3, -3, …$
    - calcola il valore di $p(x)$
    - se $p(x) = 0$ allora ritorna accetta

Al momento questa macchina dimostra che $A$ è **turing-riconoscibile** ma non dimostra che è decidibile (cioè $M$ non è un decisore) in quanto può andare in loop infinito se non trova una soluzione.

Se imposto un limite ai numeri da tentare e aggiungo un secondo step in cui se non viene trovata la radice entro questo limite allora rifiuto, allora abbiamo creato un decisore.

È stato dimostrato che la radice intera, se esiste, è compresa tra

$$
\left[-k\frac{c_{\text{max}}}{c_1}, +k\frac{c_{\text{max}}}{c_1}\right]
$$

dove:

- $k$ è il numero di termini
- $c_{\text{max}}$ è il coefficiente di massimo valore assoluto
- $c_1$ è il coefficiente di grado massimo

Il decisore diventa quindi:

$M =$  Su input $<p>$:

1. Per tutti gli $x \in \left[-k\frac{c_{\text{max}}}{c_1}, +k\frac{c_{\text{max}}}{c_1}\right]$
    - calcola il valore di $p(x)$
    - se $p(x) = 0$ allora ritorna accetta
2. se non è stato trovato nessun valore di $x$ valido allora rifiuta

## Chiusura dei linguaggi Turing-riconoscibili

È possibile dimostrare che i **linguaggi turing-riconoscibili** sono chiusi rispetto a: **unione, concatenazione, star e intersezione**

È importante considerare che le MdT che riconoscono tali linguaggi possono andare in loop.

### Unione

Dimostro che se $A, B$ sono due linguaggi Turing-riconoscibili allora $A\cup B$ è Turing-riconoscibile.

Dato che $A, B$ sono TR allora esistono due MdT $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco una nuova MdT $M’$ con due nastri.

$M’ =$ su input $w$:

- copia $w$ sul secondo nastro
- simula $M$ su $w$ sul primo nastro per un passo di computazione
- simula $N$ su $w$ sul secondo nastro per un passi di computazione
- se $M$ o $N$ accettano allora accetta

Un controllo sequenziale: prima simulo $M$ e poi $N$ sarebbe sensibile al loop

### Intersezione

Dimostro che se $A, B$ sono due linguaggi Turing-riconoscibili allora $A\cap B$ è Turing-riconoscibile.

Dato che $A, B$ sono TR allora esistono due MdT $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco una nuova MdT $M’$.

$M’ =$ su input $w$:

- simula $M$ su $w$
- se $M$ accetta simula $N$ su $w$, se $N$ accetta allora accetta, altrimenti rifiuta.
- se $M$ rifiuta allora rifiuta

Per come funziona l’intersezione un eventuale loop non crea problemi, quindi possiamo fare un controllo sequenziale

### Concatenazione

Dimostro che se $A, B$ sono due linguaggi Turing-riconoscibili allora $A\circ B$ è Turing-riconoscibile.

Dato che $A, B$ sono TR allora esistono due MdT $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco una nuova MdT non deterministica $M’$.

$M’ =$ su input $w$:

- spezza $w$ in $w_1, w_2$ non deterministicamente
- esegui $M$ su $w_1$, se rifiuta allora rifiuta
- esegui $N$ su $w_2$. se accetta allora accetta, altrimenti rifiuta

Il non determinismo ci evita problemi derivanti da loop

### Star

Dimostro che se $A$ è un linguaggio Turing-riconoscibile allora $A^*$ è Turing-riconoscibile.

Dato che $A$ è TR allora esiste un MdT $M$ tale che $L(M) = A$.

Costruisco una nuova MdT non deterministica $M’$.

$M’ =$ su input $w$:

- spezza $w$ in $w_1, w_2 ... w_n$ non deterministicamente per qualche $n \leq |w|$
- esegui $M$ su $w_i$, per ogni $i \leq n$, se $M$ le accetta tutte allora accetta, altrimenti rifiuta

# Decidibilità

## Problemi decidibili

Vediamo la potenza degli algoritmi presentando alcuni problemi che si possono **risolvere in maniera algoritmica**, tali problemi sono detti **problemi decidibili**.

Rappresenteremo i problemi mediante linguaggi.

Vedremo prima problemi che riguardano linguaggi regolari e poi linguaggi context free

## Linguaggi regolari

## Problema 1

**Problema**: determinare se un DFA $B$ accetta una stringa $w$

**Linguaggio**: $A_{\text{DFA}}=\{<B, w>\ : B \text{ è un DFA e } w \in L(B)\}$

**Teorema**: $A_{\text{DFA}}$ è decidibile

**Dimostrazione**: Costruisco un decisore $M$ tale che $L(M) = A_{\text{DFA}}$

- $M =$ su input $<B, w>$
    1. Simuliamo il DFA $B$ su input $w$
    2. Se $B$ termina in uno stato di accettazione allora accetta, altrimenti rifiuta

## Problema 2

**Problema**: determinare se un NFA $N$ accetta una stringa $w$

**Linguaggio**: $A_{\text{NFA}}=\{<N, w>\ : N \text{ è un NFA e } w \in L(N)\}$

**Teorema**: $A_{\text{NFA}}$ è decidibile

**Dimostrazione 1**: Costruisco una macchina di Turing non deterministica $M_1$ tale che $L(M_1) = A_{\text{NFA}}$

- $M_1 =$ su input $<N, w>$
    1. Simuliamo l’NFA $N$ su input $w$ in modo non deterministico
    2. Se $N$ accetta allora accetto, altrimenti rifiuto

**Dimostrazione 2**: Costruisco una macchina di Turing deterministica $M_2$ tale che $L(M_2) = A_{\text{NFA}}$

- $M_2 =$ su input $<N, w>$
    1. Converto $N$ in un DFA equivalente $D$
    2. Eseguo il decisore per $A_{\text{DFA}}$ su input $<D, w>$ e ritorno il suo risultato

## Problema 3

**Problema**: determinare se una regex $R$ accetta una stringa $w$

**Linguaggio**: $A_{\text{REX}}=\{<R, w>\ : R \text{ è una regular expression e } w \in L(R)\}$

**Teorema**: $A_{\text{REX}}$ è decidibile

**Dimostrazione**: Costruisco una macchina di Turing deterministica $M$ tale che $L(M) = A_{\text{REX}}$

- $M =$ su input $<R, w>$
    1. Converto $R$ in un NFA equivalente N
    2. Eseguo il decisore per $A_{\text{NFA}}$ su input $<N, w>$ e ritorno il suo risultato

## Problema 4

**Problema**: Determinare se un DFA non accetta nessuna stringa

**Linguaggio**: $E_{\text{DFA}}=\{<D>\ : D \text{ è un DFA e } L(D)= \emptyset \}$

**Teorema**: $E_{\text{DFA}}$ è decidibile

**Dimostrazione**:  Osserviamo che un DFA non accetta stringhe se ha gli stati accettanti non presenti oppure non raggiungibili.

Costruisco un decisore $M$ nel seguente modo:

- $M =$ su input $<D>$
    1. Marca lo stato iniziale di $D$
    2. finché è possibile marcare nuovi stati, marca gli stati che possiedono una transizione in entrata proveniente da stati già marcati
    3. Se ho marcato almeno uno stato accettante allora rifiuta, altrimenti accetta

Nota come il rifiuto avviene se troviamo uno stato accettante raggiungibile, cioè ci sono stringhe che vengono accettate, ma noi vogliamo accettare se non esistono tali stringhe, cioè quando gli stati accettanti non sono raggiungibili.

## Problema 5

**Problema**: Dati due DFA $D_1, D_2$ determinare se riconoscono lo stesso linguaggio

**Linguaggio**: $EQ_{\text{DFA}}=\{<D_1, D_2>\ : D_1, D_2 \text{ sono DFA e } L(D_1)= L(D_2)\}$

**Teorema**: $EQ_{\text{DFA}}$ è decidibile

**Dimostrazione**:  Osserviamo che $L(D_1) = L(D_2)$ se e solo se:

- tutte le stringhe di $L(D_1)$ stanno anche in $L(D_2)$
- tutte le stringhe di $L(D_2)$ stanno anche in $L(D_1)$

Possiamo quindi scrivere che $L(D_1) = L(D_2)$ se e solo se vale

$$
\underbrace{\left(L(D_1) \cap \overline{L(D_2)}\right)}_{\text{stringhe di }L(D_1)\text{ che non stanno in }L(D_2)} \cup \underbrace{\left(\overline{L(D_1)} \cap L(D_2)\right)}_{\text{stringhe di }L(D_2)\text{ che non stanno in }L(D_1)} = \emptyset
$$

La relazione vale quando sia il primo membro che il secondo sono insiemi vuoti

Costruiamo un decisore $M$ per $EQ_{\text{DFA}}$

- $M=$ su input $<D_1, D_2>$
    1. Costruiamo un nuovo DFA $D$ tale che
        
        $$
        L(D) = \left(L(D_1) \cap \overline{L(D_2)}\right)\cup \left(\overline{L(D_1)} \cap L(D_2)\right)
        $$
        
        Ciò è possibile per la chiusura dei DFA rispetto a unione, intersezione e complemento.
        
    2. Eseguo il decisore per $E_{\text{DFA}}$ su input $<D>$
    3. ritorno il suo output

## Linguaggi context free

## Problema 1

**Problema**: determinare se un CFG $G$ genera una stringa $w$

**Linguaggio**: $A_{\text{CFG}}=\{<G, w>\ : G \text{ è un CFG e } w \in L(G)\}$

**Teorema**: $A_{\text{CFG}}$ è decidibile

**Dimostrazione**: Tentare tutte le possibili derivazioni per determinare se esiste $w$ non è una soluzione valida in quanto andrebbe in loop se $G$ non avesse un modo per generare $w$.

Per la dimostrazione ci serviamo del seguente **lemma**: se $H$ è una CFG in forma normale di Chomsky e $w$ è una stringa di lunghezza $n$ tale che $w \in L(H)$ è possibile trovare una derivazione di $w$ composta da $2n-1$ passi (caso speciale: se $n = 0$ allora basta una derivazione di un passo).

 Costruisco un decisore $M$ tale che $L(M) = A_{\text{CFG}}$

- $M =$ su input $<G, w>$
    1. Converto $G$ in forma normale di Chomsky ottenendo $H$
    2. Simula su $H$ tutte le derivazioni composte da $2n-1$ passi dove $n = |w|$
    3. se almeno una di tali derivazioni genera $w$ allora accetto, altrimenti rifiuto

## Problema 2

**Problema**: Determinare se un CFG non genera nessuna stringa

**Linguaggio**: $E_{\text{CFG}}=\{<G>\ : G \text{ è un CFG e } L(G)= \emptyset\}$

**Teorema**: $E_{\text{CFG}}$ è decidibile

**Dimostrazione**: Tentare tutte le possibili stringhe per determinare che non vengano generate non è una soluzione valida in quanto andrebbero testate infinite stringhe

L’idea è quella che se partendo dallo start symbol non è possibile generare stringhe di soli terminali allora il linguaggio è vuoto.

 Costruisco un decisore $M$

- $M =$ su input $<G>$
    1. Sottolineo tutti i terminali di $G$ nelle produzioni
    2. finché è possibile sottolineare non terminali:
        1. sottolinea i non terminali $A$ tali che esiste una produzione nella forma $A \to w_1…w_n$ dove tutti i $w_i$ sono sottolineati
    3. Se ho sottolineato lo start symbol rifiuta, altrimenti accetta

## Teorema sulla decidibilità dei linguaggi CF

Dimostriamo che ogni linguaggio context free è decidibile

**Dimostrazione**: Sia $A$ un linguaggio context free, allora esiste un CFG $G$ tale che $L(G) = A$

 Dimostro che esiste un decisore $M$ tale che $L(M) = A$

- $M =$ su input $w$
    1. Costruisco una copia di $G$ nella macchina $M$
    2. Esegui il decisore per il problema $A_{\text{CFG}}$ su input $<G, w>$
    3. ritorna il suo output

Abbiamo quindi che la stringa $w$ viene accettata da $M$ se viene riconosciuta dalla grammatica $G$

Da questo teorema possiamo organizzare le classi di linguaggio viste fino ad ora nel seguente modo:

![https://i.ibb.co/Qfz4T0b/image.png](https://i.ibb.co/Qfz4T0b/image.png)

## Chiusura dei linguaggi decidibili

Dimostriamo che i **linguaggi decidibili** sono chiusi rispetto a: **unione, concatenazione, star, intersezione e anche complemento**

### Unione

Dimostro che se $A, B$ sono due linguaggi decidibili allora $A\cup B$ è decidibile.

Dato che $A, B$ sono decidibili allora esistono due decisori $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco un nuovo decisore $M’$.

$M’ =$ su input $w$:

- simula $M$ su $w$
- se $M$ accetta, allora accetta
- se $M$ rifiuta, simula $N$ su $w$ e ritorna il suo output

### Concatenazione

Dimostro che se $A, B$ sono due linguaggi decidibili allora $A\circ B$ è decidibile.

Dato che $A, B$ sono decidibili allora esistono due decisori $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco un nuovo decisore $M’$.

$M’ =$ su input $w$:

- per tutti i modi in cui $w$ può essere divisa in due stringhe $w_1, w_2$:
    - simula $M_1$ su $w_1$
    - simula $M_2$ su $w_2$
    - se $M_1$ e $M_2$ accettano, allora accetta
- se nessuna suddivisione di $w$ ha portato ad una accettazione, allora rifiuta

### Star

Dimostro che se $A$ è un linguaggio decidibile allora $A^*$ è decidibile.

Dato che $A$ è decidibile allora esiste un decisore $M$ tale che $L(M) = A$.

Costruisco un nuovo decisore $M’$.

$M’ =$ su input $w$:

- per tutti i possibili modi in cui $w$ può essere spezzata in $w_1, w_2 ... w_n$ per qualche $n \leq |w|$
    - esegui $M$ su $w_i$, per ogni $i \leq n$, se $M$ le accetta tutte allora accetta, altrimenti rifiuta

### Intersezione

Dimostro che se $A, B$ sono due linguaggi decidibili allora $A\cap B$ è decidibile.

Dato che $A, B$ sono decidibili allora esistono due decisori $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco un nuovo decisore $M’$.

$M’ =$ su input $w$:

- simula $M$ su $w$
- se $M$ accetta simula $N$ su $w$, se $N$ accetta allora accetta, altrimenti rifiuta.
- se $M$ rifiuta allora rifiuta

### Complemento

Dimostro che se $A$ è un linguaggio decidibile allora $\overline A$ è decidibile.

Dato che $A$ è decidibile allora esiste un decisore $M$ tale che $L(M) = A$.

Costruisco un nuovo decisore $M’$.

$M’ =$ su input $w$:

- simula $M$ su $w$
- se $M$ accetta, allora rifiuta
- se $M$ rifiuta, allora accetta

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

Dimostriamo l’esistenza dei linguaggi indecidibili, per farlo dimostriamo che esistono dei linguaggi fuori dall’insieme dei linguaggi turing riconoscibili, che di conseguenza non sono nemmeno decidibili.

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

Per dimostrarlo dobbiamo prima osservare che l’insieme di **sequenze binarie infinite** non è numerabile, essendo poi che tale insieme ha la stessa cardinalità con l’insieme dei linguaggi allora anche l’insieme dei linguaggi non è numerabile.

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

Costruisco una nuova stringa binaria che non compare nella seconda colonna, la costruisco nello stesso modo fatto per i numeri reali, ottengo quindi $10011...$

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

## Teorema

Un linguaggio $A$ è **decidibile** se e solo se sia $A$ che $\overline A$ sono linguaggi Turing riconoscibili.

**Corollario**: Da questo teorema si ha che se un linguaggio non è decidibile allora o esso stesso oppure il suo complemento non è Turing riconoscibile, infatti $\overline{A_{\text{TM}}}$ non è Turing riconoscibile.

**Dimostrazione del teorema**:

- Primo verso della doppia implicazione:  Sia $A$ decidibile, dimostriamo che $A$ e $\overline A$ sono Turing riconoscibili.
    
    Dato che $A$ è decidibile esso è anche Turing riconoscibile (un problema decidibile è sottoinsieme di un problema Turing riconoscibile)
    
    La classe dei linguaggi decidibili è chiusa rispetto al complemento quindi anche $\overline A$ è decidibile e di conseguenza Turing riconoscibile
    
- Secondo verso della doppia implicazione: Assumo che $A$ e $\overline A$ siano Turing riconoscibili, allora esistono due MdT $M, N$ tali che $L(M) = A$, $L(N) = \overline A$
    
    Costruisco un decisore $D$ per il linguaggio $A$ sfruttando il fatto che una qualsiasi stringa per deve necessariamente o stare in $A$ o non stare in $A$ (cioè sta nel suo complemento, $\overline A$), quindi eseguendo in parallelo $M$ e $N$ (su due nastri diversi) uno dei due sicuramente accetterà l’input di conseguenza il decisore termina sempre.
    
    $D =$ su input $w$
    
    1. Simula $M$ su $w$ per un passo di computazione sul primo nastro
    2. Simula $N$ su $w$ per un passo di computazione sul secondo nastro
        1. Se $M$ accetta, allora accetta, se invece $N$ accetta, allora rifiuta
    3. Se nessuno dei due ha terminato ripeti dal passo 1

# Esercizi decidibilità

## Es 1

Dimostrare che il problema di determinare se un DFA accetta tutte le possibili stringhe su un alfabeto finito $\Sigma$ è decidibile.

$$
\text{ALL}_{\text{DFA}} = \{<D> | D \text{ è un DFA e }L(D) = \Sigma^*\}
$$

Dimostriamo che $\text{ALL}_{\text{DFA}}$ è decidibile tramite due possibili soluzioni:

### Soluzione 1

Costruisco un decisore $M$ per $\text{ALL}_{\text{DFA}}$

$M=$ su input $<D>$:

1. costruisco un nuovo DFA $D’$ tale che $L(D’) = \overline{L(D)}$ (cioè un DFA che riconosce le stringhe non riconosciute da $D$)
    
    Questo lo posso fare perché i linguaggi regolari sono chiusi rispetto al complemento
    
2. eseguo il decisore per $E_{\text{DFA}}$ su $D’$
3. ritorno il suo output (infatti se $L(D’) = \emptyset$ significa che il suo complemento, cioè $D$, riconosce tutte le stringhe dell’alfabeto)

### Soluzione 2

Costruisco un decisore $M$ per $\text{ALL}_{\text{DFA}}$

$M=$ su input $<D>$:

1. costruisco un nuovo DFA $D’$ tale che $L(D’) = \Sigma^*$
    
    ![https://i.ibb.co/h8WMP9t/DFA-1.png](https://i.ibb.co/h8WMP9t/DFA-1.png)
    
2. Eseguo il decisore per $EQ_{\text{DFA}}$ su $D’$
3. ritorno il suo output

## Es 2

Dimostrare che il problema di determinare se una MdT accetta almeno una stringa è Turing riconoscibile

$$
\overline{\text{E}_{\text{TM}}} = \{<M> | D \text{ è una MdT e }L(M) \neq \emptyset\}
$$

Costruiamo una MdT $N$ tale che $L(N) = \overline{\text{E}_{\text{TM}}}$

Nonostante stiamo costruendo una MdT, la soluzione di testare tutte le possibili stringhe non è una soluzione valida in quanto una stringa potrebbe far andare in loop la macchina impedendo di valutare le successive stringhe (che magari potrebbero essere accettate).

Mentre una soluzione corretta è la seguente:

$N=$ su input $<M>$

1. per ogni $i = 1, 2, 3, …$
    - eseguo $M$ sulle stringhe $s_1, s_2, …s_i$ per $i$ passi di computazione
    - se $M$ ha accettata almeno una stringa allora accetta

Quindi:

iterazione 1: eseguo $M$ su $s_1$ per 1 passo

iterazione 2: eseguo $M$ su $s_1, s_2$ per 2 passi

iterazione 3: eseguo $M$ su $s_1, s_2, s_3$ per 3 passi

…

## Es 3

Dimostrare che il problema di determinare se il linguaggio di una regex contiene tutte le stringhe del linguaggio di un’altra regex è decidibile.

$$
\{<R, S> | R, S \text{ sono regex e } L(R) \subseteq L(S)\}
$$

![https://i.ibb.co/s55mBsb/ex.png](https://i.ibb.co/s55mBsb/ex.png)

Possiamo risolverlo in due modi

### Soluzione 1

Sfruttiamo il fatto che $L(R) \subseteq L(S) \iff \text{ tutte le stringhe di } L(R) \text{ stanno in }L(S)$

In altre parole non esiste una stringa in $L(R)$ che non sta anche in $L(S)$

Costruisco un decisore $M$:

$M =$ su input $<R, S>$

1. converto $R, S$ in DFA equivalenti: $D_R, D_S$
2. costruisco un nuovo DFA $D_S’$ tale che $L(D_S’) = \overline{L(D_S)}$
3. costruisco un nuovo DFA $D$ tale che $L(D) = L(D_R) \cap L(D_S’)$
4. Eseguo il decisore per $E_{\text{DFA}}$ su $D$
5. ritorno il suo output 

### Soluzione 2

Sfruttiamo il fatto che $L(R) \subseteq L(S) \iff L(R) \cap L(S) = L(R)$

Costruisco un decisore $M$:

$M =$ su input $<R, S>$

1. converto $R, S$ in DFA equivalenti: $D_R, D_S$
2. costruisco un nuovo DFA $D$ tale che $L(D) = L(D_R) \cap L(D_S)$
3. eseguo il decisore per $EQ_{\text{DFA}}$ su  $<D, D_R>$
4. ritorna il suo output

## Es 4

Data una grammatica $G$, diciamo che un non terminale $A$ è **usabile** se e solo se occorre nella derivazione di almeno una stringa $w \in L(G)$. Dimostrare che il problema di verificare se un non terminale è usabile è decidibile

Può essere dimostrato che i non terminali non usabili sono solo quelli **non raggiungibili** o **non generanti.**

Definiamo i due termini:

- Un non terminale è **raggiungibile** se e solo se lo start symbol può derivare una stringa contenente tale non terminale
- Un non terminale è **generante** se e solo se da esso si può derivare una stringa di soli terminali

$$
S \to A\\
A\to aA\\
B\to b
$$

Nell’esempio: $A$ non è usabile perché non è generante, mentre $B$ non è usabile perché non è raggiungibile.

Quindi per risolvere l’esercizio dimostro che:

- il problema di determinare se un non terminale è raggiungibile è decidibile
- il problema di determinare se un non terminale è generante è decidibile.

### Non terminale raggiungibile

1. inizializzo $R = \{S\}$ che mi conterrà tutti i non terminali raggiungibili
2. finché è possibile estendere l’insieme $R$
    - se ho una produzione del tipo $A \to v$ dove $A \in R$ inserisci i non terminali di $v$ in $R$
3. ritorna $R$

### Non terminale generante

1. inizializzo $G = \emptyset$ che mi conterrà tutti i non terminali generanti
2. finché è possibile estendere l’insieme $G$
    - se esiste una produzione del tipo $A \to v$ dove tutti i simboli di $v$ sono terminali o non terminali già presenti in $G$ allora aggiungi $A$ in $G$
3. ritorna $G$

Entrambi questi decisori terminano in quanto i simboli non terminali della grammatica sono in numero finito

# Riducibilità

Introduciamo un metodo per dimostrare l’indecidibilità di un problema, chiamato **riducibilità.**

Intuitivamente diciamo che un problema $A$ è **riducibile** al problema $B$ (indicato con la simbologia: $A\leq B$) quando una soluzione per il problema $B$ ci consente di costruire una soluzione per il problema $A$.

Dalla definizione possiamo dire che:

1. se $A\leq B$ e $B$ è decidibile allora anche $A$ è decidibile
2. se $A\leq B$ e $A$ è indecidibile allora anche $B$ è indecidibile

Sfrutteremo questa seconda proprietà come tecnica di dimostrazione per problemi indecidibili.

In pratica quello che andremo a fare per dimostrare che un problema $B$ è indecidibile è mostrare che un altro problema $A$ già noto per essere indecidibile si riduce al problema $B$.

## Problemi indecidibili

Vediamo adesso alcuni problemi che dimostriamo essere indecidibili tramite il metodo di riduzione.

## Problema 1

Dimostrare che il problema di determinare se una macchina di Turing si ferma (cioè accetta o rifiuta senza andare in loop) su un determinato input è indecidibile.

$$
\text{HALT}_{\text{TM}} = \{<M, w> | M \text{ è una MdT che si ferma su input } w\}
$$

**Teorema**: $\text{HALT}_{\text{TM}}$ è indecidibile.

**Dimostrazione**: Dimostro tramite riduzione che il problema $A_{\text{TM}}$ (che sappiamo già essere indecidibile) è riducibile al problema $\text{HALT}_{\text{TM}}$. Cioè dimostriamo che se avessimo per assurdo un decisore per $\text{HALT}_{\text{TM}}$ allora potremmo usarlo per costruire un decisore per $A_{\text{TM}}$, ma ciò non è possibile in quanto renderebbe $A_{\text{TM}}$ un problema decidibile.

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{HALT}_{\text{TM}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $A_{\text{TM}}$:

$S =$ su input $<M, w>$

1. Esegui $R$ su input $<M, w>$
2. se $R$ rifiuta, allora rifiuta (significa che la macchina $M$ non termina su $w$, quindi non la accetta sicuramente)
3. se $R$ accetta (cioè la macchina $M$ termina su $w$, accettando oppure rifiutando):
    1. simula $M$ su $w$ e ritorna il suo output

Se quindi esistesse il decisore $R$ potemmo risolvere il problema $A_{\text{TM}}$ che però è stato dimostrato essere indecidibile, pertanto $R$ non esiste e $\text{HALT}_{\text{TM}}$ è indecidibile.

## Problema 2

Dimostrare che il problema di determinare se il linguaggio di una MdT è vuoto è indecidibile.

$$
E_{\text{TM}} = \{<M> | M \text{ è una MdT tale che }L(M) = \emptyset\}
$$

**Teorema**: $E_{\text{TM}}$ è indecidibile

**Dimostrazione**: dimostro che $A_{\text{TM}}$ è riducibile a $E_{\text{TM}}$, cioè dimostro che se avessi un decisore per $E_{\text{TM}}$ allora potrei costruire un decisore per $A_{\text{TM}}$ (ma ciò è impossibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{E}_{\text{TM}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $A_{\text{TM}}$:

$S=$ su input $<M, w>$

1. Costruisco una nuova MdT $N$ che implementa la seguente proprietà
    
    $$
    L(N) = \begin{cases}
    \text{non vuoto}&\text{se }M \text{ accetta }w\\
    \text{vuoto} &\text{altrimenti}
    \end{cases}
    $$
    
2. eseguo il decisore $R$ su input $<N>$
3. se $R$ accetta (allora $L(N)$ è vuoto) e allora rifiuta
4. se $R$ rifiuta (allora $L(N)$ è non vuoto) e allora accetta (se è non vuoto significa che $M$ accetta $w$ per come abbiamo definito $L(N)$)

Vediamo la descrizione della MdT $N$:

$N=$ su input $x$ (una qualsiasi stringa)

1. se $x$ è diversa da $w$ rifiuta
2. se $x$ è uguale a $w$, esegui $M$ su $w$ e ritorna il suo output

Nel dettaglio possiamo riscrivere il suo linguaggio:

$$
L(N) = \begin{cases}
\{w\}&\text{se }M \text{ accetta }w\\
\emptyset &\text{altrimenti}
\end{cases}
$$

Nota importante: all’interno del decisore $S$, la macchina di turing $N$ non viene **mai eseguita** ma viene **solo costruita** e data in pasto al decisore $R$, pertanto $S$ non può andare in loop e quindi è un decisore.

Se quindi esistesse il decisore $R$ potemmo risolvere il problema $A_{\text{TM}}$ che però è stato dimostrato essere indecidibile, pertanto $R$ non esiste e $\text{E}_{\text{TM}}$ è indecidibile.

## Problema 3

Dimostriamo che il problema di determinare se una MdT riconosce un linguaggio che è regolare è indecidibile

$$
\text{REG}_{\text{TM}} \{<M> | M \text{ è una MdT e }L(M) \text{ è un linguaggio regolare}\}
$$

**Teorema**: $\text{REG}_{\text{TM}}$ è indecidibile

**Dimostrazione**: dimostro che $A_{\text{TM}}$ è riducibile a $\text{REG}_{\text{TM}}$, cioè dimostro che se avessi un decisore per $\text{REG}_{\text{TM}}$ allora potrei costruire un decisore per $A_{\text{TM}}$ (ma ciò è impossibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{REG}_{\text{TM}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $A_{\text{TM}}$:

$S =$ su input $<M, w>$

1. Costruisco una nuova MdT $N$ che implementa la seguente proprietà
    
    $$
    L(N) = \begin{cases}
    \text{è regolare} & \text{se } M\text{ accetta } w\\
    \text{non è regolare}& \text{altrimenti}
    \end{cases}
    $$
    
2. eseguo il decisore $R$ su input $<N>$
3. ritorno il suo output:
    1. se $R$ rifiuta (allora $L(N)$ è non regolare) allora rifiuta (dato che $M$ non accetta $w$)
    2. se $R$ accetta (allora $L(N)$ è regolare e significa che $M$ accetta $w$ per come abbiamo definito $L(N)$) allora accetta

Vediamo la descrizione della MdT $N$:

$N=$ su input $x$ (una qualsiasi stringa)

1. se $x$ è una stringa nella forma $0^n1^n$ per qualche $n$, allora accetta (cioè $x$ è nella forma di una stringa non regolare)
2. se $x$ non è in quella forma, allora simula $M$ su $w$ e ritorna il suo output

Cioè se $M$ accetta $w$ vengono accettate tutte le stringhe $\Sigma^*$ (che è un linguaggio regolare), se invece $M$ non accetta $w$ allora si accettano solo quelle non regolari nella forma $0^n1^n$.

Nel dettaglio possiamo riscrivere il suo linguaggio:

$$
L(N) = \begin{cases}
\Sigma^*&\text{se }M \text{ accetta }w\\
\{0^n1^n| n\geq 0\} &\text{altrimenti}
\end{cases}
$$

Se quindi esistesse il decisore $R$ potemmo risolvere il problema $A_{\text{TM}}$ che però è stato dimostrato essere indecidibile, pertanto $R$ non esiste e $\text{REG}_{\text{TM}}$ è indecidibile.

### Problema 4

Dimostriamo che il problema di determinare se due MdT riconoscono lo stesso linguaggio è indecidibile

$$
\text{EQ}_{\text{TM}} \{<M_1, M_2> | M_1, M_2 \text{ sono MdT e }L(M_1) =L(M_2)\}
$$

**Teorema**: $\text{EQ}_{\text{TM}}$ è indecidibile

**Dimostrazione**: questa volta dimostro che $E_{\text{TM}}$ è riducibile a $\text{EQ}_{\text{TM}}$, cioè dimostro che se avessi un decisore per $\text{EQ}_{\text{TM}}$ allora potrei costruire un decisore per $E_{\text{TM}}$ (ma ciò è impossibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{EQ}_{\text{TM}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $E_{\text{TM}}$:

$S=$ su input $<M>$

1. costruisco una nuova macchina di Turing $N$ tale che $L(N) = \emptyset$
2. eseguo $R$ su input $<M, N>$ (decidendo difatti se $L(M)$ è vuoto o no, dato che $L(N)$ è vuoto)
3. ritorno il suo output

Se quindi esistesse il decisore $R$ potemmo risolvere il problema $E_{\text{TM}}$ che però è stato dimostrato essere indecidibile, pertanto $R$ non esiste e $\text{EQ}_{\text{TM}}$ è indecidibile.

# Storie di computazione accettanti

Vediamo una particolare tecnica per dimostrare la riducibilità di certi linguaggi. Questo metodo è utile quando la dimostrazione dell’indecidibilità di un problema comporta la dimostrazione dell’esistenza di qualcosa.

**Definizione**: Sia $M$ una MdT e $w$ una stringa di input. Una **storia di computazione accettante** per $M$ su $w$ è una **sequenza finita di configurazioni** $C_1, C_2, …, C_k$ tale che:

1. La prima configurazione $C_1$ è la configurazione iniziale di $M$ su $w$
2. L’ultima configurazione $C_k$ è una configurazione di accettazione per $M$
3. Ogni configurazione $C_{i+1}$  discende dalla precedente $C_{i}$ secondo le regole di computazione di $M$, per $i = 1…k$

Diciamo che $M$ **accetta** $w$ **se e solo se esiste una storia di computazione accettante** per $M$ su $w$.

Se $M$ **rifiuta o va in loop** su $w$, **non ci sono storie di computazione accettanti**.

## Automi linearmente limitati (LBA)

Introduciamo un nuovo modello computazionale, gli automi linearmente limitati (*Linear Bounded Automaton,* **LBA**).

**Un LBA è una MdT con memoria limitata, in particolare il nastro ha la stessa lunghezza dell’input iniziale.**

Se la testina del nastro tenta di spostarsi oltre il limite destro stabilito dalla lunghezza dell’input assumiamo che la testina rimanga ferma.

## Teorema

Dimostriamo che il problema di determinare se un LBA accetta un input $w$ è **decidibile**

$$
A_{\text{LBA}} = \{<M, w> | M \text{ è una MdT e } w \in L(M)\}
$$

**Teorema**: $A_{\text{LBA}}$ è decidibile.

**Dimostrazione**:

Per dimostrare il teorema ci serviamo di un **lemma**: Sia $M$ un LBA con $q$ stati e $g$ simboli possibili per il nastro. Con un nastro di lunghezza $n$, il numero massimo di configurazioni per $M$ è dato da

 $q\cdot n \cdot g^n$

Per dimostrare questo lemma ricordiamo che una configurazione è una tripla che comprende:

- lo stato attuale della macchina
- la posizione della testina
- il contenuto del nastro

Il numero totale di stati è $q$, le posizioni possibili sul nastro sono $n$, nelle $n$ celle possiamo scegliere tra $g$ simboli, quindi abbiamo $g^n$ possibili contenuti (stringhe) che compaiono nel nastro. Il prodotto tra $q, n, g^n$ restituisce quindi il numero totale di configurazioni di una macchina con nastro lungo $n$

**Dimostriamo** adesso il **teorema**:

Per dimostrare la decidibilità del problema costruiamo il seguente decisore $S$ per $A_{\text{LBA}}$.

$S=$ su input $<M, w>$ (dove $M$ è un LBA)

1. Simula $M$ su $w$ per $q\cdot n \cdot g^n$ passi di computazione oppure fino a che non si ferma
2. se $M$ termina entro quei passi, ritorno il suo output
3. Se $M$ non ha terminato entro quei passi, rifiuta

Se $M$ non termina entro $q\cdot n \cdot g^n$ passi di computazione significa che nel passo successivo ripeterà una configurazione già vista, in quanto sappiamo dal lemma che abbiamo al massimo $q\cdot n \cdot g^n$ configurazioni diverse. ritornare su una configurazione già vista significa entrare in un loop, in quanto tale configurazione è già stata vista e non ha portato a terminazione, ripeterla non porterà di certo ad una conclusione diversa.

## Esempio 1 di utilizzo delle storie di C.A.

Dimostriamo l’indecidibilità di un problema attraverso una riduzione che sfrutta le storie di computazione accettanti.

Dimostro che il problema di determinare se un LBA non riconosce nessuna stringa è indecidibile.

$$
E_{\text{LBA}} = \{<M> | M \text{ è un LBA tale che } L(M) = \emptyset\}
$$

**Teorema**: $E_{\text{LBA}}$ è indecidibile

**Dimostrazione:** dimostro che $A_{\text{TM}}$ è riducibile a $\text{E}_{\text{LBA}}$, cioè dimostro che se avessi un decisore per $\text{E}_{\text{LBA}}$ allora potrei costruire un decisore per $A_{\text{TM}}$ (ma ciò è impossibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{E}_{\text{LBA}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $A_{\text{TM}}$:

$S=$ su input $<M, w>$ (dove $M$ è una MdT)

1. costruisco un LBA $N$ con la seguente caratteristica

$$
L(N) = \begin{cases}
\text{non vuoto} & \text{se } M \text{ accetta }w \\
\text{vuoto} & \text{altrimenti}
\end{cases}
$$

1. eseguo il decisore $R$ su input $<N>$
2. ritorno il suo output invertito

Definiamo il funzionamento di $N$:

Costruiamo l’LBA $N$ in modo che $L(N)$ sia l’insieme delle storie di computazione accettanti per $M$ e $w$:

- se $M$ accetta $w$ allora esiste una storia di computazione accettante per $M$ e $w$, quindi $L(N)$ non sarò vuoto
- se $M$ non accetta $w$ allora non ci sono storie di computazione accettanti per $M$ e $w$, quindi $L(N)$ sarà vuoto

Nel concreto costruiamo $N$ in modo che accetti un input $x$ se tale input è una stringa che codifica una storia di computazione accettante per $M$ su $w$, tale stringa ha il seguente formato:

$$
\#\underbrace{\hspace{8mm}}_{C_1}\#\underbrace{\hspace{8mm}}_{C_2}\#.....\#\underbrace{\hspace{8mm}}_{C_k}\#
$$

$N$ per stabilire che $x$ sia una stringa che rappresenta una storia di computazione accettante per $M$ su $w$ deve:

1. controllare che $C_1$ sia la configurazione iniziale di $M$ su $w$, cioè deve verificare che $C_1 = q_0w$
2. controllare che $C_K$ sia una configurazione accettante, cioè deve verificare che $C_K = uq_{\text{accept}}v$
3. controllare che per ogni $i$, $C_{i+1}$ discende da $C_i$ secondo la funzione di transizione di $M$.
    
    Cioè deve verificare che per ogni coppia di configurazioni adiacenti nella stringa, esse differiscano in modo da rispettare la funzione di transizione di $M$
    

Concludiamo la dimostrazione dicendo quindi che se esistesse il decisore $R$ potemmo risolvere il problema $A_{\text{TM}}$ che però è stato dimostrato essere indecidibile, pertanto $R$ non esiste e $\text{E}_{\text{LBA}}$ è indecidibile.

## Esempio 2 di utilizzo delle storie di C.A.

Dimostro che il problema di determinare se una CFG genera tutte le stringhe del suo alfabeto è indecidibile.

$$
\text{ALL}_{\text{CFG}} = \{<G> | G \text{ è una CFG tale che } L(G) = \Sigma^*\}
$$

**Teorema**: $\text{ALL}_{\text{CFG}}$ è indecidibile

**Dimostrazione:** dimostro che $A_{\text{TM}}$ è riducibile a $\text{ALL}_{\text{CFG}}$, cioè dimostro che se avessi un decisore per $\text{ALL}_{\text{CFG}}$ allora potrei costruire un decisore per $A_{\text{TM}}$ (ma ciò è impossibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{ALL}_{\text{CFG}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $A_{\text{TM}}$:

$S=$ su input $<M, w>$

1. costruisco una CFG $G$ con la seguente caratteristica
    
    $$
    L(G) = \begin{cases}
    A \neq \Sigma^*&\text{se } M \text{ accetta } w\\
    \Sigma^* & \text{altrimenti}
    \end{cases}
    $$
    
2. eseguo il decisore $R$ su input $<G>$
3. ritorno il suo output invertito

Definiamo il funzionamento di $G$:

Costruiamo la CFG $G$ in modo che $L(G)$ contenga le stringhe che **non** sono storie di computazione accettanti per $M$ e $w$:

- se $M$ accetta $w$, allora esiste una storia di computazione accettante per $M$ su $w$, ma siccome $L(G)$ per definizione non le contiene, allora il $G$ non è in grado di generare tutte le possibili stringhe.
- se $M$ non accetta $w$, allora non esistono storie di computazione accettanti per $M$ su $w$, pertanto $G$ riesce a generare tutte le possibili stringhe.

Specificare concretamente il comportamento di $G$ può risultare abbastanza complesso, definiamo quindi un PDA $P$ equivalente. Nella nostra costruzione della macchina $S$, $G$ sarà quindi la conversione del PDA $P$.

Nel concreto costruiamo $P$ in modo che accetti un input $x$ se tale input è una stringa che codifica una storia di computazione accettante per $M$ su $w$, tale stringa ha il seguente formato:

$$
\#\underbrace{\hspace{8mm}}_{C_1}\#\underbrace{\hspace{8mm}}_{C_2}\#.....\#\underbrace{\hspace{8mm}}_{C_k}\#
$$

$P$ per stabilire che $x$ **non** sia una stringa che rappresenta una storia di computazione accettante per $M$ su $w$ deve controllare in modo non deterministico che **almeno una** delle seguenti condizioni si verifichi:

1. controllare che $C_1$ non sia la configurazione iniziale di $M$ su $w$, cioè deve verificare che $C_1 \neq q_0w$
2. controllare che $C_K$ non sia una configurazione accettante, cioè deve verificare che $C_K \neq uq_{\text{accept}}v$
3. controllare che esiste un $i$ per cui $C_{i+1}$ non discende da $C_i$ secondo la funzione di transizione di $M$.
    
    Cioè deve verificare se esiste una coppia di configurazioni adiacenti nella stringa che differisce senza rispettare la funzione di transizione di $M$.
    
    Per la natura LIFO dello stack su cui si basano i PDA, $P$ dovrebbe inserire nello stack $C_i$ e poi poppare durante il confronto con $C_{i+1}$, però così facendo si confronterebbe la fine di $C_i$ con l’inizio di $C_{i+1}$. Pertanto bisogna cambiare la codifica della stringa in questo modo:
    
    $$
    \#\underbrace{\hspace{3mm}\longrightarrow\hspace{3mm}}_{C_1}\#\underbrace{\hspace{3mm}\longleftarrow\hspace{3mm}}_{C_2}\#\underbrace{\hspace{3mm}\longrightarrow\hspace{3mm}}_{C_3}\#\underbrace{\hspace{3mm}\longleftarrow\hspace{3mm}}_{C_1}\#.....\#\underbrace{\hspace{8mm}}_{C_k}\#
    $$
    
    invertendo quindi, in modo alternato, le stringhe delle singole configurazioni.
    

## Esempio di indecidibilità

Dimostro che il problema di determinare se due CFG hanno lo stesso linguaggio è indecidibile.

$$
\text{EQ}_{\text{CFG}} = \{<G, H> | G,H \text{ sono CFG tali che } L(G) = L(H)\}\\
\text{è indecidibile}
$$

**Teorema**: $\text{EQ}_{\text{CFG}}$ è indecidibile

**Dimostrazione:** dimostro che $\text{ALL}_{\text{CFG}}$ è riducibile a $\text{EQ}_{\text{CFG}}$, cioè dimostro che se avessi un decisore per $\text{EQ}_{\text{CFG}}$ allora potrei costruire un decisore per $\text{ALL}_{\text{TM}}$ (ma ciò è impossibile, abbiamo appena dimostrato essere indecidibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{EQ}_{\text{CFG}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $\text{ALL}_{\text{CFG}}$:

$S=$ su input $<G>$ (dove $G$ è una CFG)

1. costruisce una CFG $H$ tale che $L(H) = \Sigma^*$
2. eseguo il decisore $R$ su input $<G, H>$
3. ritorno il suo output

la CFG $H$ sarà definita in questo modo: 

per ogni $a \in \Sigma$:

$S\to aS| \epsilon$

# Mapping-riducibilità

Diamo una definizione più formale di riducibilità. Ci sono vari metodi per formalizzare il concetto di riducibilità, uno di questi è la **riduzione tramite funzioni** (anche detta **mapping-riducibilità**).

Per definire la mapping riducibilità, dobbiamo prima definire cosa è una **funzione calcolabile.**

**Funzione calcolabile**: Una funzione $f:\Sigma^* \rightarrow \Sigma^*$ si dice **calcolabile** se e solo se esiste una MdT $M$ tale che per ogni stringa di input $w$, $M$ su $w$ **termina** lasciando solamente l’output di $f(w)$ sul nastro.

**Definiamo la mapping-riducibilità**: un linguaggio $A$ si dice mapping-riducibile ad un linguaggio $B$ (indicato con la sintassi $A\leq_mB$)  se e solo se esiste una funzione calcolabile $f$ tale che per ogni stringa $w$, $w \in A$ se e solo se $f(w) \in B$.

Sostanzialmente, una funzione è definita calcolabile se essa è simulabile da una Macchina di Turing

In termini più semplici ridurre il problema $A$ nel problema $B$ significa che esiste una funzione che trasforma le istanza del problema $A$ in istanze del problema $B$.

**Osservazione importante**: 

$$
A\leq_mB \iff \overline{A} \leq_m \overline{B}
$$

Cioè la mapping riducibilità viene mantenuta anche complementando entrambi i linguaggi.

Questo risultato può essere utile in quei problemi dove risulta più facile lavorare con i complementi dei problemi.

## Teorema

**Teorema**: Se $A \leq_m B$ e $B$ è decidibile allora $A$ è decidibile

**Dimostrazione**: dato che $A$ è mapping-riducibile a $B$, allora esiste una funzione calcolabile $f$ tale che per ogni stringa $w$, $w \in A$ se e solo se $f(w) \in B$.

Siccome $B$ è decidibile allora esiste un decisore $M$ tale che $L(M) = B$, costruisco quindi un decisore $S$ per $A$ dimostrando che anch’esso è decidibile:

$S=$ su input $w$

1. calcola $f(w)$
2. esegui $M$ su input $f(w)$
3. ritorna il suo output

In particolare:

- se prendo $w \in A$ allora $f(w) \in B$, di conseguenza il decisore $M$ accetta e quindi $S$ accetta
- se prendo $w \notin A$ allora $f(w) \notin B$, di conseguenza il decisore $M$ rifiuta e quindi $S$ rifiuta

il calcolo di $f(w)$ non può andare in loop perché $f$ è calcolabile.

### Corollario

Vediamo il corollario del teorema che ci tornerà utile per dimostrare l’indecidibilità dei problemi:

**Corollario**: se $A \leq_m B$ e $A$ è indecidibile allora $B$ è indecidibile

## Esempio 1

Dimostriamo che $A_{\text{TM}}$ è mapping-riducibile al problema $\text{HALT}_{\text{TM}}$ dimostrando quindi l’indecidibilità di $\text{HALT}_{\text{TM}}$

$$
A_{\text{TM}} \leq_m \text{HALT}_{\text{TM}}
$$

Dobbiamo definire una funzione calcolabile tale che:

$$
<M, w> \in A_{\text{TM}} \iff f(<M, w>) \in \text{HALT}_{\text{TM}}
$$

Costruiamo una MdT $F$ che implementa la funzione $f$:

$F =$ su input $<M, w>$

1. costruisco una nuova MdT $N$ definita come segue
    
    $N=$ su input $x$
    
    1. simula $M$ su $x$
    2. se $M$ accetta, allora accetta
    3. se $M$ rifiuta, allora vai in loop
2. ritorna $<N, w>$

Dimostriamo la correttezza:

Abbiamo 3 casi possibili sulla simulazione di $M$:

- $M$ accetta $w$, questo implica che $<M,w> \in A_{\text{TM}}$
    
    in tal caso $N$ accetta $w$, quindi $<N, w> \in \text{HALT}_{\text{TM}}$ perché $N$ ha terminato su $w$
    
- $M$ rifiuta $w$, questo implica che $<M,w> \notin A_{\text{TM}}$
    
    in tal caso $N$ va in loop su $w$, quindi $<N, w> \notin \text{HALT}_{\text{TM}}$ perché $N$ non termina su $w$
    
- $M$ va in loop su $w$, questo implica che $<M,w> \notin A_{\text{TM}}$
    
    in tal caso $N$ va in loop su $w$, quindi $<N, w> \notin \text{HALT}_{\text{TM}}$ perché $N$ non termina su $w$
    

## Esempio 2

Dimostriamo che $E_{\text{TM}}$ è mapping-riducibile al problema $\text{EQ}_{\text{TM}}$ dimostrando quindi l’indecidibilità di $\text{EQ}_{\text{TM}}$

$$
E_{\text{TM}} \leq_m \text{EQ}_{\text{TM}}
$$

Dobbiamo definire una funzione calcolabile tale che:

$$
<M> \in E_{\text{TM}} \iff f(<M>) \in \text{EQ}_{\text{TM}}
$$

Costruiamo una MdT $F$ che implementa la funzione $f$:

$F=$ su input $<M>$

1. costruisco una nuova MdT $N$ tale che $L(N) = \emptyset$
2. ritorna $<M, N>$

Dimostriamo la correttezza:

- se $<M> \in E_\text{TM}$ implica che $L(M) = \emptyset$, in tal caso si ha che $<M, N> \in \text{EQ}_{\text{TM}}$ perché sia $N$ che $M$ hanno un linguaggio vuoto
- se $<M> \notin E_\text{TM}$ implica che $L(M) \neq \emptyset$, in tal caso si ha che $<M, N> \notin \text{EQ}_{\text{TM}}$ perché $N$ ha un linguaggio vuoto mentre $M$ no

## Esempio 3

Dimostriamo che $A_{\text{TM}}$ è mapping-riducibile al problema $\overline{\text{E}_{\text{TM}}}$ dimostrando quindi l’indecidibilità di $\overline{\text{E}_{\text{TM}}}$

$$
A_{\text{TM}} \leq_m \overline{\text{E}_{\text{TM}}}
$$

Dobbiamo definire una funzione calcolabile tale che:

$$
<M, w> \in A_{\text{TM}} \iff f(<M,w>) \in \overline{\text{E}_{\text{TM}}}
$$

Costruiamo una MdT $F$ che implementa la funzione $f$:

$F=$ su input $<M, w>$

1. costruisco una nuova MdT $N$ definita in questo modo
    
    $N=$ su input $x$
    
    1. se $x\neq w$ allora rifiuta
    2. se $x = w$ allora simula $M$ su $w$ e ritorna il suo output
2. Ritorna $<N>$

Dimostriamo la correttezza:

- se $<M, w> \in A_{\text{TM}}$ implica che $M$ accetta $w$
    
    in tal caso $L(N) = \{w\}$, ma allora $L(N) \neq \emptyset$ e quindi $<N> \notin E_{\text{TM}}$, cioè $<N> \in \overline{\text{E}_{\text{TM}}}$
    
- se $<M, w>\notin A_{\text{TM}}$ implica che $M$ non accetta $w$
    
    in tal caso $L(N) = \emptyset$, e quindi $<N> \in E_{\text{TM}}$, cioè $<N> \notin \overline{E_{\text{TM}}}$
    

## Teorema

**Teorema**: Se $A \leq _m B$ e $B$ è TR, allora $A$ è TR

**Dimostrazione**: Dato che $A$ è mapping-riducibile a $B$, allora esiste una funzione calcolabile $f$ tale che per ogni stringa $w$, $w \in A$ se e solo se $f(w) \in B$.

Dato che $B$ è turing riconoscibile, allora esiste una MdT $M$ tale che $L(M) = B$

Costruisco quindi una MdT $N$ tale che $L(N) = A$

$N=$ su input $w$:

1. calcola $f(w)$
2. esegui $M$ su input $f(w)$
3. ritorna il suo output

In particolare:

- se prendo $w \in A$ allora $f(w) \in B$, di conseguenza il decisore $M$ accetta e quindi $N$ accetta
- se prendo $w \notin A$ allora $f(w) \notin B$, di conseguenza il decisore $M$ non accetta e quindi $N$ non accetta

### Corollario

Vediamo il corollario del teorema che ci tornerà utile per dimostrare che alcuni problemi non sono Turing riconoscibili:

**Corollario**: se $A \leq_m B$ e $A$ non è TR allora $B$ non è TR

Dal seguente teorema “Un linguaggio $A$ è **decidibile** se e solo se sia $A$ che $\overline A$ sono linguaggi Turing riconoscibili.” (visto nelle note dell’indecidibilità) abbiamo stabilito che $\overline{A_{\text{TM}}}$ non è turing riconoscibile.

Possiamo sfruttare questo problema per dimostrare che altri linguaggi non sono turing riconoscibili.

## Esempio 1

Dimostriamo che $\text{EQ}_{\text{TM}}$ non è TR.

Per farlo potremmo dimostrare che $\overline{A_{\text{TM}}}$ è mapping-riducibile a $\text{EQ}_{\text{TM}}$, ma in realtà è più conveniente dimostrare che $A_{\text{TM}}$ è mapping-riducibile ad $\overline{\text{EQ}_{\text{TM}}}$ (questo possiamo farlo per la proprietà del complemento della mapping-riducibilità)

$$
A_{\text{TM}} \leq_m \overline{\text{EQ}_{\text{TM}}}
$$

Dobbiamo definire una funzione calcolabile tale che:

$$
<M, w> \in A_{\text{TM}} \iff f(<M,w>) \in \overline{\text{EQ}_{\text{TM}}}
$$

Costruiamo una MdT $F$ che implementa la funzione $f$:

$F=$ su input $<M, w>$

1. costruiamo una nuova MdT $N_1$ in modo che $L(N_1) = \emptyset$
    
    $N_1=$ su input $x$
    
    1. rifiuta sempre
2. costruiamo una nuova MdT $N_2$ in modo che accetti tutte le stringhe se $M$ accetta $w$
    
    $N_2 =$ su input $x$
    
    1. simula $M$ su $w$ e ritorna il suo output
3. ritorna $<N_1, N_2>$

Dimostriamo la correttezza:

- se $<M, w> \in A_{\text{TM}}$ implica che $M$ accetta $w$
    
    in tal caso $L(N_2) = \Sigma^*$ (accetta qualsiasi stringa), ma allora $L(N_1) \neq L(N_2)$ cioè $<N_1, N_2> \in \overline{\text{EQ}_{\text{TM}}}$
    
- se $<M, w> \notin A_{\text{TM}}$ implica che $M$ non accetta $w$
    
    in tal caso $L(N_2) = \emptyset$ (rifiuta qualsiasi stringa), ma allora $L(N_1) = L(N_2)$ cioè $<N_1, N_2> \notin \overline{\text{EQ}_{\text{TM}}}$
    

## Esempio 2

Dimostriamo che $\overline{\text{EQ}_{\text{TM}}}$ non è TR.

Per farlo potremmo dimostrare che $\overline{A_{\text{TM}}}$ è mapping-riducibile a $\overline{\text{EQ}_{\text{TM}}}$, ma in realtà è più conveniente dimostrare che $A_{\text{TM}}$ è mapping-riducibile ad $\text{EQ}_{\text{TM}}$ (questo possiamo farlo per la proprietà del complemento della mapping-riducibilità)

$$
A_{\text{TM}} \leq_m \text{EQ}_{\text{TM}}
$$

Dobbiamo definire una funzione calcolabile tale che:

$$
<M, w> \in A_{\text{TM}} \iff f(<M,w>) \in \text{EQ}_{\text{TM}}
$$

Costruiamo una MdT $F$ che implementa la funzione $f$:

$F=$ su input $<M, w>$

1. costruiamo una nuova MdT $N_1$ in modo che $L(N_1) = \Sigma^*$
    
    $N_1=$ su input $x$
    
    1. accetta sempre
2. costruiamo una nuova MdT $N_2$ in modo che accetti tutte le stringhe se $M$ accetta $w$
    
    $N_2 =$ su input $x$
    
    1. simula $M$ su $w$ e ritorna il suo output
3. ritorna $<N_1, N_2>$

Dimostriamo la correttezza:

- se $<M, w> \in A_{\text{TM}}$ implica che $M$ accetta $w$
    
    in tal caso $L(N_2) = \Sigma^*$ (accetta qualsiasi stringa), ma allora $L(N_1) = L(N_2)$ cioè $<N_1, N_2> \in \text{EQ}_{\text{TM}}$
    
- se $<M, w> \notin A_{\text{TM}}$ implica che $M$ non accetta $w$
    
    in tal caso $L(N_2) = \emptyset$ (rifiuta qualsiasi stringa), ma allora $L(N_1) \neq L(N_2)$ cioè $<N_1, N_2> \notin \text{EQ}_{\text{TM}}$

# Turing-riducibilità

La mapping riducibilità non sempre riesce a catturare il concetto di riducibilità, cioè che se $A$ è riducibile a $B$ e troviamo una soluzione per $B$ allora possiamo ottenere una soluzione per $A$.

Un esempio in cui la mapping-riducibilità non è intuitiva è il seguente: consideriamo i linguaggi $A_{TM}$ e $\overline{A_{TM}}$, intuitivamente uno è riducibile all’altro perché basterebbe trovare una soluzione per uno, e invertire l’output per ottenere la soluzione dell’altro.

Tuttavia sappiamo che $A_{TM}$ è turing riconoscibile, mentre $\overline{A_{TM}}$ non lo è, perciò $\overline{A_{TM}}$ **non è mapping-riducibile** ad $A_{TM}$ 

**Non vale infatti la proprietà**: “se $A\leq_m B$ e $A$ non è TR, allora $B$ non è TR”

## Turing-riducibilità

Descriviamo una nuova interpretazione di riducibilità **più generale** della mapping-riducibilità, chiamata **Turing-riducibilità**.

Definiamo il concetto di **oracolo**: Un oracolo per un linguaggio $B$ è un dispositivo che per ogni stringa $w$ accetta se $w \in B$ e rifiuta se $w \notin B$.

Nota: un oracolo è un concetto più generale rispetto ad un decisore in quando il “dispositivo” non necessariamente è una macchina di turing.

Una **macchina di Turing con oracolo** per il linguaggio $B$ è una MdT che può interrogare un oracolo per $B$.

Un linguaggio $A$ si dice **Turing-riducibile** ad un linguaggio $B$ (indicato con la simbologia $A\leq_T B$) se e solo se esiste una MdT con oracolo per $B$ che decide $A$.

### Osservazione

$$
\overline{A_{TM}}\leq_T A_{TM}
$$

Dimostriamolo costruendo una MdT con oracolo per $A_{TM}$, che chiamo $N$, che decide $\overline{A_{TM}}$:

$N=$ su input $x$

1. invoca l’oracolo per $A_{TM}$ su input $x$
2. ritorna la sua risposta invertita

## Esempio

Dimostro che $E_{TM} \leq_T A_{TM}$

Dimostro che esiste una MdT con oracolo per $A_{TM}$, che chiamo $S$, che decide $E_{TM}$

$S=$ su input $<M>$

1. costruisco una nuova MdT $N$ con la seguente proprietà:
    
    $$
    L(N) = \begin{cases}
    \Sigma^* & \text{se } L(M) \neq \emptyset\\
    \emptyset & \text{se } L(M) = \emptyset
    \end{cases}
    $$
    
2. invoco l’oracolo per $A_{TM}$ su input $<N, 1>$ verifica quindi che $<N, 1> \in A_{TM}$ (dove $1$ può essere qualsiasi stringa)
3. ritorno il suo output invertito

In questo modo:

- se l’oracolo accetta significa che la macchina $N$ accetta l’input $1$, di conseguenza il suo linguaggio non è vuoto e per come lo abbiamo definito può solo essere $\Sigma^*$, ma se il suo linguaggio è $\Sigma^*$ allora $L(M) \neq \emptyset$
- se l’oracolo rifiuta significa che la macchina $N$ non accetta l’input $1$, di conseguenza il suo linguaggio non sono tutte le stringhe $\Sigma^*$, e per come lo abbiamo definito può solo essere vuoto, ma se il suo linguaggio è vuoto allora $L(M) = \emptyset$

Devo ritornare l’output dell’oracolo invertito in quanto solo se l’oracolo rifiuta ho $L(M) = \emptyset$ e quindi $S$ deve accettare, altrimenti, se l’oracolo accetta, $S$ rifiuta

Definiamo la MdT $N$:

$N=$ su input $x$

1. per ogni $i=0,1,2,3…$
2. esegue $M$ sulle stringhe $S_1, S_2,…S_i$ per $i$ passi di computazione
3. Se una di tali computazioni accetta, allora accetta qualunque $x$

Questa macchina esegue $M$ su tutte le possibili stringhe:

- se $M$ non accetta nessuna stringa, allora $N$ andrà in loop.
- se $M$ accetta almeno una stringa, prima o poi $N$ terminerà, accettando dunque qualsiasi stringa in input $x$

Nota: ricorda che $N$ non viene realmente eseguita, ma il suo scopo è solo quello di essere data in pasto all’oracolo

## Teorema

se $A\leq_T B$ e $B$ è decidibile allora $A$ è decidibile

**Dimostrazione**: Poiché $A \leq_T B$, allora esiste una MdT con oracolo per $B$ che decide $A$. Dato che $B$ è decidibile esiste un decisore per $B$. Posso costruire quindi un decisore per $A$ sostituendo tutte le chiamate all’oracolo con chiamate al decisore per $B$.

**Corollario**: se $A\leq_T B$ e $A$ è indecidibile allora $B$ è indecidibile

## Teorema

Se $A\leq_m B$ allora $A\leq_T B$

Nota: Il contrario non vale, un controesempio è quello fatto all’inizio in cui $\overline{A_{TM}} \leq_T A_{TM}$ ma **non vale** $\overline{A_{TM}} \leq_m A_{TM}$

**Dimostrazione del teorema**: Dato che $A\leq_m B$ allora esiste una funzione calcolabile $f$ tale che per ogni $w$ si ha $w \in A$ se e solo se $f(w) \in B$.

Costruisco una MdT con oracolo per $B$, che chiamo $N$, che decide $A$

$N=$ su input $w$

1. calcola la funzione $f(w)$
2. interroga l’oracolo per $B$ su input $f(w)$
3. ritorna il suo output

Quindi se l’oracolo accetta significa che $f(w) \in B$ e di conseguenza $w \in A$

## Confronto con mapping-riducibilità

Il vantaggio che offre la mapping riducibilità è quello di verificare che certi problemi non sono TR, cosa che la turing-riducibilità non può fare.

D’altra parte la turing-riducibilità ci aiuta a dimostrare più facilmente la non decidibilità dei problemi (in quanto gli oracoli sono strumenti più generali ed astratti dei decisori)

# Teorema di Rice

**Enunciato**: qualsiasi proprietà non banale del linguaggio di una macchina di Turing è indecidibile.

Formalizziamo ulteriormente il teorema specificando alcuni termini del suo enunciato:

- **Proprietà**: una proprietà di una MdT è un insieme $P$ contenente una serie di descrizioni di MdT: $<M_1>, <M_2>, <M_3>, …$
    
    Possiamo quindi vederlo come un linguaggio di descrizioni di Mdt come stringhe.
    
- **Proprietà non banale**: una proprietà $P$ si dice non banale se esistono MdT $M, N$ tali che $<M> \in P$ e $<N>\notin P$.
    
    Cioè $P$ è soddisfatta da certe macchine di Turing ma da altre no
    
- **Proprietà del linguaggio**: una proprietà del linguaggio è una proprietà $P$ tale che comunque prese due MdT $M,N$ tali che $L(M) = L(N)$ allora $<M>\in P$ se e solo se $<N>\in P$.
    
    Cioè se due MdT hanno lo stesso linguaggio o entrambi soddisfano $P$ o nessuna delle due la soddisfano.
    

Degli esempi che rientrano in questo teorema sono $A_{TM}, E_{TM}, \text{REG}_{TM}$ mentre non rientra in questo teorema ad esempio $\text{ALT}_{TM}$ in quanto non riguarda una proprietà del linguaggio della MdT.

Il fatto che la proprietà sia non banale e del linguaggio è fondamentale al fine del funzionamento del teorema:

- Se la proprietà fosse banale, si avrebbe che o tutte le MdT la soddisfano o nessuna MdT la soddisfa. Questo rende la proprietà banalmente decidibile (sempre vera o sempre falsa)
- Se la proprietà non riguardasse linguaggio allora non avremmo informazioni sulle stringhe riconosciute dalla MdT ma solo della sua struttura, ma la struttura di una MdT si può decidere semplicemente analizzando come è costruita (ad esempio contare il numero di stati è decidibile)

### Dimostrazione

Sia $P$ una qualsiasi proprietà non banale del linguaggio di una MdT. Assumiamo per assurdo che $P$ sia decidibile e sia $H$ il suo decisore.

In tal caso riusciremmo a costruire un decisore per $A_{TM}$ $U$, che sarebbe assurdo in quanto è dimostrato che $A_{TM}$ è indecidibile

$U=$ su input $<M, w>$

1. costruisce una nuova MdT $N$ tale che ha la proprietà $P$ se $M$ accetta $w$ e non la ha se $M$ non accetta $w$
2. eseguo $H$ su input $<N>$
3. ritorno il suo output

In particolare:

- se $M$ accetta $w$ allora $<N> \in P$ e quindi il decisore $H$ accetta e di conseguenza $U$ accetta
- se $M$ non accetta $w$ allora $<N>\notin P$ e quindi il decisore $H$ rifiuta e di conseguenza $U$ rifiuta

**Definiamo** $N$:

Dato che $P$ è non banale devono esistere almeno una MdT che soddisfa $P$ e una MdT che non la soddisfa.

Siano queste MdT $T, S$ tali che $<T> \in P$ e $<S> \notin P$

Possiamo assumere senza perdita di generalità che $L(S) = \emptyset$, infatti dato che $P$ non è banale allora deve esistere $T$ tale che $L(T) \neq \emptyset$ che appartenga a $P$

La MdT $N$ è definita nel seguente modo:

$N=$ su input $x$

1. esegue $M$ su $w$
2. se $M$ rifiuta, allora rifiuta ogni input $x$
3. se $M$ accetta, simula $T$ su input $x$ e ritorna il suo output

Quindi possiamo riassumere che

$$
L(N) = \begin{cases}
L(T) & \text{se } M \text{ accetta } w\\
\emptyset = L(S) & \text{altrimenti}
\end{cases}
$$

Cioè se $M$ accetta $w$ allora il linguaggio di $N$ è il linguaggio di $T$ che appartiene a $P$, quindi $N$ soddisfa la proprietà $P$

se $M$ non accetta $w$ allora li linguaggio $N$ è vuoto e quindi non soddisfa la proprietà $P$

# Esercizi conclusivi

## Es 1

Dimostra che il seguente linguaggio è co-turing-riconoscibile

$$
\text{EQ}_{\text{CFG}} = \{<G, H> | G,H \text{ sono CFG e } L(G) = L(H)\}
$$

per dimostrare che un linguaggio è co-turing-riconoscibile dobbiamo dimostrare che il suo complemento è turing-riconoscibile, dobbiamo quindi dimostrare che $\overline{\text{EQ}_{\text{CFG}}}$ è TR.

Costruisco una MdT $M$ tale che $L(M) = \overline{\text{EQ}_{\text{CFG}}}$

$M=$ su input $<G, H>$

1. per ogni $i=1,2,3,…$
    1. esegue il decisore per $A_{\text{CFG}}$ su input $<G, s_i>$
    2. esegue il decisore per $A_{\text{CFG}}$ su input $<H, s_i>$
    3. se i due output sono diversi allora accetta

Questa macchina di Turing ha lo scopo di cercare una stringa accettata da una CFG ma non accettata da un’altra e quindi determinare che i linguaggio di $G$ e $H$ sono diversi.

se i due linguaggi sono uguali la macchina andrà in loop ma questo non è un problema in quanto ci viene chiesto di determinare che $\overline{\text{EQ}_{\text{CFG}}}$ sia solamente turing riconoscibile

## Es 2

Dimostrare che $A_{TM}$ non è mapping-riducibile a $E_{TM}$

$$
A_{TM} \cancel{\leq}_m E_{TM}
$$

Assumo per assurdo che $A_{TM} \leq_m E_{TM}$, tale affermazione è equivalente a dimostrare che $\overline{A_{TM}} \leq_m \overline{E_{TM}}$ (perché la mapping-riducibilità è robusta rispetto al complemento)

A questo punto osservo che $\overline{A_{TM}}$ non è TR (risultato già dimostrato)

Osservo rispettivamente che $\overline{E_{TM}}$ invece è TR (risultato già dimostrato)

Ma quindi la riduzione $\overline{A_{TM}} \leq_m \overline{E_{TM}}$ è assurda perché infrange la seguente proprietà:

“se $A \leq_m B$ e $A$ non è TR allora B non è TR”

## Es 3

Dimostrare se la seguente affermazione è vera o falsa

“Se $A\leq_m B$ e $B$ è regolare, allora anche $A$ è regolare”

Dato che $A \leq_m B$ allora esiste una funzione calcolabile $f$ tale che per ogni stringa $w$ si ha che $w \in A$ se e solo se $f(w) \in B$. Sappiamo che $B$ è regolare, pertanto esiste un DFA che lo riconosce, dovremmo costruire un DFA che riconosce $A$ implementando $f$.

Una funzione è **calcolabile** se essa è simulabile da una macchina di Turing, un DFA ha una potenza computazionale nettamente inferiore di una macchina di Turing e quindi non è necessariamente in grado di calcolarla, da questo deduciamo che l’enunciato deve essere falso.

Proviamo a trovare un controesempio, cioè trovare un B regolare e un A non regolare tali che $A \leq_m B$, Scegliamo:

- $A=\{0^n1^n | n\geq 0\}$ (già dimostrato essere non regolare)
- $B = 0^*1^*$

Dimostriamo che $A \leq_m B$ definendo la seguente funzione calcolabile $f$ tale che per ogni stringa $w$ si ha che $w \in A$ se e solo se $f(w) \in B$

$$
f(w) = \begin{cases}
01& \text{se }w \text{ ha forma } 0^n1^n\\
10 &\text{altrimenti}
\end{cases}
$$

Quindi se $w$ ha forma $0^n1^n$ allora sta nel linguaggio $A$, in tal caso $f(w) = 01$ che sta nel linguaggio $B$.

Mentre se $w$ non ha forma $0^n1^n$ allora non sta nel linguaggio $A$, in tal caso $f(w) = 10$ che non sta nel linguaggio $B$

## Es 4

Dimostrare che se $A$ è TR e $A\leq_m \overline{A}$ allora $A$ è decidibile

Dato che $A\ \leq_m \overline{A}$ allora $\overline{A} \leq_m A$ (perché la mapping-riducibilità è robusta rispetto al complemento).

Visto che $\overline{A} \leq_m A$ e $A$ è TR posso dire che anche $\overline A$ è TR (questo perche $\overline A$ è riconducibile ad un problema TR, che è $A$)

Possiamo utilizzare il teorema che dice che se $A$ e $\overline A$ sono TR allora $A$ è decidibile.

## Es 5

Dimostrare che $A$ è TR se e solo se $A \leq_m A_{TM}$

- $\Leftarrow$
    
    Assumiamo che $A\leq_m A_{TM}$, dimostro che $A$ è TR.
    
    Dato che $A_{TM}$ è TR, l’ipotesi che $A\leq_m A_{TM}$ implica che anche $A$ è TR
    
- $\Rightarrow$
    
    Assumiamo che $A$ sia TR, allora esiste una MdT $M$ tale che $L(M) = A$.
    
    Dimostro che $A \leq_m A_{TM}$ trovando una funzione calcolabile $f$ tale che per ogni stringa $w$ vale che $w\in A$ se e solo se $f(w) \in A_{TM}$
    
    Definisco $f(w) = <M, w>$
    
    infatti:
    
    - se $w \in A$ allora la macchina $M$ accetterà $w$ (perché sta nel suo linguaggio), e quindi $<M,w> \in A_{TM}$
    - se $w \notin A$ allora la macchina $M$ non accetterà $w$ (perché non sta nel suo linguaggio), e quindi $<M,w> \notin A_{TM}$

## Es 6

Dimostrare che $A$ è decidibile se e solo se $A \leq_m 0^*1^*$

- $\Leftarrow$
    
    Sia $A \leq_m 0^*1^*$, visto che $0^*1^*$ è regolare, esso è anche decidibile. quindi $A \leq_m 0^*1^*$ implica che anche $A$  è decidibile
    

- $\Rightarrow$
    
    Dato che $A$ è decidibile allora esiste un decisore $M$ tale che $L(M) = A$. Per dimostrare che vale $A \leq_m 0^*1^*$ dobbiamo trovare una funzione calcolabile $f$ tale che per ogni stringa $w$ si ha che $w\in A$ se e solo se $f(w) \in 0^*1^*$
    
    Definiamo $f$ tramite la seguente MdT $F$:
    
    $F=$ su input $w$:
    
    1. se $M$ accetta $w$, scrivo sul nastro $01$
    2. se $M$ rifiuta $w$, scrivo sul nastro $10$

La funzione è calcolabile perché $M$ è un decisore e quindi non può andare in loop.

- se $w\in A$ allora $M$ accetterà $w$ (perché sta nel suo linguaggio), e $f(w) =01$ che appartiene a $0^*1^*$
- se $w \notin A$ allora $M$ non accetterà $w$ (perché non sta nel suo linguaggio), e $f(w) = 10$ che non appartiene a $0^*1^*$

## Es 7

Si consideri il problema di determinare se una MdT con due nastri scrive un simbolo
diverso da $\sqcup$ (carattere *blank*) sul secondo nastro durante una computazione su un certo input $w$.

1. Formalizzare tale problema come un linguaggio
2. Dimostrarne l’indecidibilità.

Definiamo il linguaggio nel seguente modo:

$$
B = \{<T,w>| T \text{ è una Mdt con due nastri che scrive un simbolo diverso da } \sqcup\\ \text{sul secondo nastro quando computa su }w\}
$$

Dimostriamo che $B$ è indecidibile:

Assumiamo per assurdo che $B$ sia decidibile, allora esiste un decisore che lo decide, sia $R$ il suo decisore.

Per dimostrare l’indecidibilità di $B$, usiamo una riduzione: utilizzando $R$ dobbiamo costruire un decisore per $A_{TM}$ il che è assurdo in quanto $A_{TM}$ è dimostrato essere indecidibile.

Sia $N$ il decisore per $A_{TM}$

$N=$ su input $<M, w>$

1. costruisco una nuova MdT $T$ con 2 nastri, tale che se $M$ accetta $w$ allora $T$ scrive un carattere qualsiasi diverso da $\sqcup$ sul secondo nastro (ad esempio il carattere `0`), Se $M$ non accetta $w$ allora $T$ non tocca il secondo nastro.
2. eseguo il decisore $R$ su input $<T, w>$ (dove al posto di $w$ ci può essere una qualsiasi altra stringa, la $w$ è già hardcodata in $T$)
3. ritorno il suo output

in particolare:

- se $T$ scrive $0$ sul secondo nastro significa che $M$ accetta $w$, allora il decisore $R$ accetta (perché ha scritto un carattere diverso da $\sqcup$ sul secondo nastro) e di conseguenza anche $N$ accetta
- se $T$ non tocca il secondo nastro, significa che $M$ non accetta $w$, allora il decisore $R$ rifiuta (perché sul secondo nastro ci sono solo caratteri $\sqcup$) e di conseguenza $N$ rifiuta

Definiamo la MdT $T$:

$T=$ su input $x$

1. simula $M$ su $w$ sul primo nastro
2. se $M$ rifiuta $w$, allora termina senza toccare il secondo nastro
3. se $M$ accetta $w$, allora scrivi il carattere `0` sul secondo nastro


