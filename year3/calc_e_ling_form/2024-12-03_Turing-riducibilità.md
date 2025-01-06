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
