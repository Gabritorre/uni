# Riducibilità

Introduciamo un metodo per dimostrare l’indecidibilità di un problema, tale metodo si chiama **riducibilità.**

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
