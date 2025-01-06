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
