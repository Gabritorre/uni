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
    
2. Eseguo il decisore per $EQ_{\text{DFA}}$ su $<D,D’>$
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
