
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

In altre parole possiamo dire che una CFG è ambigua se e solo se esiste una stringa $w \in L(G)$ tale che $w$ ha almeno due *parse tree* diversi oppure almeno due derivazioni a sinistra diverse.

**derivazione a sinistra**: è un derivazione in cui ad ogni passo la variabile sostituita è quella più a sinistra

Ad esempio considerando la grammatica:

$$
E \to E+E | E \times E | a
$$

genera la stessa stringa con due parse tree diversi:

![https://i.ibb.co/3NKMs2V/image.png](https://i.ibb.co/3NKMs2V/image.png)

## Forma normale di Chomsky

Vediamo una forma semplificata delle CFG, chiamata **forma normale di Chomsky.**

Una CFG è in forma normale Chomsky se e solo se ognuna delle sue produzioni è nella forma:

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
    \text{Elimina le produzioni nella forma } A \to \epsilon \text{ dove }A \text{ non è uno start symbol.}
    \\
    \\
    \text{Inoltre per tutte le regole che hanno } A \text{ nella parte destra, }\\
    \text{aggiungi una nuova regola con quell'occorrenza cancellata}
    \\
    \text{ad esempio } R \to uAvAw \text{ introduco delle nuove regole:}
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
	\text{in queste nuove regole rimpiazza ogni terminale } u_i \text{ con un nuovo non terminale } U_i\\
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
    
    Risultato:
    
    $S_0 \to S$
    
    $S \to ASA \,|\, aB \,|\, a$
    $A \to B \, | \, S \,|\, \epsilon$
    
    $B \to b$
    
- Step 2 iterazione 2
    - $A \to B\,|\,S\,|\,\cancel{\epsilon}$
        - $S \to ASA \,|\, aB \,|\, a\,|\, SA\,|\, AS\,|\,S$
    
    Risultato:
    
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
- Risultato Step 3
    
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
