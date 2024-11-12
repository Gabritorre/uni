# Decidibilità

Vediamo la potenza degli algoritmi presentando alcuni problemi che si possono risolvere in maniera algoritmica in un tempo finito, tali problemi sono detti **problemi decidibili**.

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

Nota come il rifiuto avviene se troviamo uno stato accettante raggiungibile, cioè ci sono stringhe che vengono accettate, noi vogliamo accettare se non esistono tali stringhe, cioè quando gli stati accettanti non sono raggiungibili.

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
