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

per convenzione abbiamo dei simboli detti **non-terminali** (o variabili), che si indicano con lettere maiuscole.

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
- $\Sigma$ è un insieme finito di terminali tale che $V \cap \Sigma = \emptyset$ (cioè sono insieme disgiunti)
- $R$ è un insieme finito di produzioni (o regole) dalla forma $A \to w$ dove $A \in V$ e $w \in (V \cup \Sigma)^*$
- $S \in V$ è lo *start symbol*

Nell’esempio di prima abbiamo quindi

$$
V = \{A, B\} \hspace{3mm} \Sigma = \{0, 1, \#\} \hspace{3mm} R = \{A\to0A1, A\to B, B\to \#\} \hspace{3mm} S = A
$$

### Terminologia

Siano $u, v, w \in (V \cup \Sigma)^*$ e sia $A\to w \in R$

Diciamo che $uAv$ **produce** $uwv$ con questa simbologia: $uAv \Rightarrow uwv$.

Diciamo che $u$ **deriva** $v$ con questa simbologia: $u \Rightarrow^* v$ se e solo se $u=v$ oppure se esiste una sequenza di riscritture per cui $u \Rightarrow w_1 \Rightarrow w_2 \Rightarrow … \Rightarrow v$

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

In altre parole possiamo dire che una CFG è ambigua se e solo se esiste una stringa $w \in L(G)$ tale che $w$ ha almeno due *parse tree* diversi

Ad esempio con la grammatica:

$$
E \to E+E | E \times E | a
$$

genera la stessa stringa con due parse tree diversi:

![https://i.ibb.co/3NKMs2V/image.png](https://i.ibb.co/3NKMs2V/image.png)
