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

- se la proprietà fosse banale, si avrebbe che o tutte le MdT la soddisfano o nessuna MdT la soddisfa. Questo rende la proprietà decidibile (sempre vera o sempre falsa)
- se non la proprietà non fosse del linguaggio non avremmo informazioni sulle stringhe riconosciute dalla MdT ma solo della sua struttura, ma la struttura di una MdT si può decidere semplicemente analizzando come è costruita (contare il numero di stati è decidibile)

### Dimostrazione

Sia $P$ una qualsiasi proprietà non banale del linguaggio di una MdT. Assumiamo per assurdo che $P$ sia decidibile e sia $H$ il suo decisore.

In tal caso riusciremmo a costruire un decisore per $A_{TM}$ $U$, che sarebbe assurdo in quanto è dimostrato che $A_{TM}$ è indecidibile

$U=$ su input $<M, w>$

1. costruisco una nuova MdT $N$ tale che ha la proprietà $P$ se $M$ accetta $w$ e non la ha se $M$ non accetta $w$
2. eseguo $H$ su input $<N>$
3. ritorno il suo output

In particolare:

- se $M$ accetta $w$ allora $<N> \in P$ e quindi il decisore $H$ accetta e di conseguenza $U$ accetta
- se $M$ non accetta $w$ allora $<N>\notin P$ e quindi il decisore $H$ rifiuta e di conseguenza $U$ rifiuta

**Definiamo** $N$:

Dato che $P$ è non banale devono esistere almeno una MdT che soddisfa $P$ e una MdT che non la soddisfa.

Siano questi MdT $T, S$ tali che $<T> \in P$ e $<S> \notin P$

Possiamo assumere senza perdita di generalità che $L(S) = \emptyset$, e dato che $P$ non è banale allora deve esistere $T$ tale che $L(T) \neq \emptyset$ che appartenga a $P$

Da MdT $N$ è definita nel seguente modo:

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
