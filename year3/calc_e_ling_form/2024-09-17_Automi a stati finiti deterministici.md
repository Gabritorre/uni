
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

La freccia più spessa verso $q_1$ indica lo **stato iniziale**, mentre il cerchio doppio in $q_2$ indica lo stato finale.

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
- $\delta$: è la funzione di transizione $Q \times \Sigma \rightarrow Q$ che definisce i cambiamenti tra gli stati, useremo questa sintassi $\delta(s_1, \text{input}) = s_2$
- $q_0$: indica lo stato iniziale
- $F \subseteq Q$ : indica l’insieme degli stati finali (può anche essere insieme vuoto, ma di conseguenza il DFA rifiuterà ogni input)

Sempre nel solito esempio

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

Sia $M=(Q, \Sigma, \delta, q_0, F)$ e sia $w=w_1w_2...w_n$ una stringa tale che $\forall i \in [1...n],\, w_i\in \Sigma$ diciamo che $M$ **accetta** $w$ se e solo se esiste una sequenza di stati $r_0, r_1, …r_n \in Q$  tali che:

1. $r_0 = q_0 \hspace{5mm}$ (parte dallo stato iniziale di $M$)
2. $r_n \in F \hspace{6mm}$(l’ultimo stato è uno stato accettante)
3. $\forall i \in [0…n-1]: \delta(r_i, w_{i+1}) = r_{i+1} \hspace{5mm}$ (la sequenza di stati rispetta la funzione di transizione)

Il linguaggio di un DFA $M$ si indica con $L(M)$.

In altre parole possiamo dire che **il linguaggio di un DFA è l’insieme di tutte le stringhe che esso accetta**.

Inoltre un linguaggio $A$ si dice **regolare** se e solo se esiste un DFA il cui linguaggio è uguale ad $A$

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

Dimostrare che il DFA precedente accetti la stringa $110$

Per farlo devo trovare una sequenza di stati lunga $n+1$.

- ricordiamo che $n$ è il numero di elementi dell’input di cui è formata la stringa, in questo caso $3$.
- Il $+1$ deriva dal fatto che si parte sempre dallo stato iniziale ancora prima di considerare la stringa

$$
q_1 \to ? \to ? \to ?
$$

Guardando il grafico possiamo analizzare il passaggio tra gli stati e concludiamo che la sequenza per questa stringa è 

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

### Dimostrazione

Dimostriamo per costruzione che se $A, B$ sono linguaggi regolari allora lo è anche il linguaggio formato dalla loro unione.

Dato che $A, B$ sono linguaggi regolari allora esistono due DFA

1. $M_1 = (Q_1, \Sigma_1, \delta_1, q_1, F_1)$
2. $M_2 = (Q_2, \Sigma_2, \delta_2, q_2, F_2)$

tali che $L(M_1)$ = A e $L(M_2) = B$.

Costruiamo un nuovo linguaggio $M$ tale che $L(M) = A\cup B$ 

L’idea è quella che $M$ simuli il comportamento di $M_1$ e $M_2$ in parallelo su ogni simbolo di input:

$$
M = (Q, \Sigma, \delta, q_0, F)
$$

Definiamo ogni elemento della quintupla, è sufficiente ricordare lo stato in cui ciascun DFA ($M_1$ e $M_2$) sarebbe se avesse letto l’input fino a quel punto, bisogna quindi lavorare con coppie di stati:

1. $Q = Q_1 \times Q_2 = \{(q_1, q_2) | q_1 \in Q_1 \land q_2 \in Q_2\}$
    
    Il numero di coppie possibili è il prodotto tra il numero di stati di $M_1$ e il numero di stati di $M_2$, che risulta essere il numero di stati di $M$
    
2. $\Sigma = \Sigma_1 = \Sigma_2$
    
    per semplicità assumiamo che l’alfabeto di $M1$ e $M2$ siano uguali, il teorema resterebbe comunque vero anche con alfabeti diversi.
    
3. $\delta((r_1, r2), a) = (\delta_1(r_1, a), \delta_2(r_2, a))$
    
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
