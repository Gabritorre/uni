# Esercizi conclusivi

## Es 1

Dimostra che il seguente linguaggio è co-turing-riconoscibile

$$
\text{EQ}_{\text{CFG}} = \{<G, H> | G,H \text{ sono CFG e } L(G) = L(H)\}
$$

per dimostrare che un linguaggio è co-turing-riconoscibile dobbiamo dimostrare che il suo complemento è turin-riconoscibile, dobbiamo quindi dimostrare che $\overline{\text{EQ}_{\text{CFG}}}$ è TR.

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
    
    1. se $M$ accetta, scrivo sul nastro $01$
    2. se $M$ rifiuta, scrivo sul nastro $10$

La funzione è calcolabile perché $M$ è un decisore e quindi non può andare in loop.

- se $w\in A$ allora $M$ accetterà $w$ (perché sta nel suo linguaggio), e $f(w) =01$ che appartiene a $0^*1^*$
- se $w \notin A$ allora $M$ non accetterà $w$ (perché non sta nel suo linguaggio), e $f(w) = 10$ che non appartiene a $0^*1^*$

## Es 7

Si consideri il problema di determinare se una MdT con due nastri scrive un simbolo
diverso da $\sqcup$ (carattere *blank*) sul secondo nastro durante una computazione su un certo input $w$.

1. Formalizzare tale problema come un linguaggio
2. dimostrarne l’indecidibilità.

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
2. eseguo il decisore $R$ su input $<T, w>$ (dove al posto di $w$ ci può essere una qualsiasi altra stringa)
3. ritorno il suo output

in particolare:

- se $T$ scrive $0$ sul secondo nastro significa che $M$ accetta $w$, allora il decisore $R$ accetta (perché ha scritto $0$ sul secondo nastro) e di conseguenza anche $N$ accetta
- se $T$ non tocca il secondo nastro, significa che $M$ non accetta $w$, allora il decisore $R$ rifiuta (perché sul secondo nastro ci sono solo caratteri $\sqcup$) e di conseguenza $N$ rifiuta

Definiamo la MdT $T$:

$T=$ su input $x$

1. simula $M$ su $w$ sul primo nastro
2. se $M$ rifiuta $w$, allora termina senza toccare il secondo nastro
3. se $M$ accetta $w$, allora scrivi il carattere `0` sul secondo nastro
