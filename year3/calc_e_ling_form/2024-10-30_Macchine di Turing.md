
# Macchine di Turing

Una macchina di Turing (MdT) è un modello teorico di calcolatore con **memoria infinita** utilizzabile in maniera arbitraria.

Viene utilizzato un **nastro infinito** come memoria illimitata e una **testina** che viene utilizzata per leggere e scrivere la cella indicizzata.

**Caratteristiche** della macchina di Turing:

- La memoria è infinita e viene rappresentata da un nastro
- L’input si trova sul nastro e può essere sia letto che scritto
- La testina può spostarsi sia a destra che a sinistra
- Accetta o rifiuta un input immediatamente quando entra in uno stato di accettazione o rifiuto (non è quindi necessario consumare tutto l’input)

## Definizione formale

Una macchina di Turing è una 7-tupla $(Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$ dove:

- $Q$ è l’insieme finito degli stati
- $\Sigma$ è l’alfabeto di input tale che non contiene il simbolo $\sqcup$ (*blank*) che rappresenta la cella vuota
- $\Gamma$ è l’alfabeto del nastro tale che $\sqcup \in \Gamma, \Sigma \subseteq \Gamma$
- $\delta : Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$ è la funzione di transizione, Quando la macchina occupa un certo stato e legge un input puntato dalla testina sul nastro, allora la macchina cambia stato scrive un nuovo simbolo sulla cella puntata dalla testina e sposta la testina a sinistra $(L)$ o destra $(R)$
- $q_0 \in Q$ è lo stato iniziale
- $q_{\text{accept}} \in Q$ è lo stato di accettazione
- $q_{\text{reject}} \in Q$ è lo stato di rifiuto, $q_{\text{reject}} \neq q_{\text{accept}}$

## Come computa

Inizialmente la MdT riceve un input di $n$ simboli che vengono posizionate nelle $n$ celle più a sinistra del nastro, il resto del nastro avrà caratteri *blank*. La testina parte dalla posizione più a sinistra del nastro e la computazione inizia.

Possiamo descrivere la computazione definendo delle **configurazioni** composte da tre elementi:

1. Stato interno
2. Contenuto del nastro
3. posizione della testina

In generale una **configurazione ha la forma** $uqv$ dove $u, v$ sono stringhe generate dell’alfabeto del nastro $\Gamma$ e $q$ è uno stato corrente.

Ad esempio

![https://i.ibb.co/FqsDmvq/image.png](https://i.ibb.co/FqsDmvq/image.png)

la configurazione si scrive come $1011q_701111$. È importante notare come la testina sta puntando all’elemento subito dopo lo stato $q_7$

Una macchina di Turing computa passando da una configurazione alla successiva secondo quanto definito dalla funzione di transizione $\delta$

### Regole di computazione

1. Siamo nella configurazione $uaq_ibv$ con $\delta(q_i, b) = (q_j, c, L)$ allora la prossima configurazione è $uq_jacv$
2. Siamo nella configurazione $uaq_ibv$ con $\delta(q_i, b) = (q_j, c, R)$ allora la prossima configurazione è $uacq_jv$
3. (testina già all’estremità sinistra con spostamento a sinistra) Siamo nella configurazione $q_ibv$ con $\delta(q_i, b) = (q_j, c, L)$ allora la prossima configurazione è $q_jcv$
4. (testina già all’estremità sinistra con spostamento a destra) Siamo nella configurazione $q_ibv$ con $\delta(q_i, b) = (q_j, c, R)$ allora la prossima configurazione è $cq_jv$

Una MdT accetta un input $w$ se e solo se esiste una sequenza di configurazioni $c_1…c_k$ tale che:

1. $c_1$ è la configurazione iniziale $q_0w$
2. $c_k$ è una configurazione di accettazione $uq_{\text{accept}}v$
3. per ogni $i$, $c_i$ passa in $c_{i+1}$ secondo le regole di computazione

Nota: Siccome $q_{\text{accept}}$ e $q_{\text{reject}}$ sono configurazioni di arresto, cioè non producono ulteriori configurazioni possiamo definire la funzione di transizione più precisamente come:

$\delta: Q \setminus \{q_{\text{accept}}, q_{\text{reject}}\}\times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$

## Linguaggio

Un linguaggio $A$ si dice **Turing-riconoscibile** (TR) se e solo se esiste una MdT $M$ tale che $L(M) = A$

Dato un input, una MdT ha solo tre possibili comportamenti:

1. Accettare l’input
2. Rifiutare l’input
3. Andare in loop 

Una MdT che non va mai in loop per nessun input è detta **decisore**.

Un linguaggio $A$ si dice **decidibile** se e solo se esiste una **MdT decisore** $M$ tale che $L(M) = A$ 

È immediato che **ogni linguaggio decidibile è anche Turing-riconoscibile** (il contrario non è necessariamente vero).

## Esempio di MdT

Anche le MdT si possono rappresentare tramite diagrammi di stato.

Forniamo l’interpretazione verbale e il diagramma di stato per il seguente linguaggio

$$
\{w\#w | w \in \{0, 1\}^*\}
$$

(Questo linguaggio non è né regolare né context free)

L’idea è quella di muovere la testina a zig-zag fra posizioni corrispondenti a sinistra e a destra del simbolo $\#$ per verificare che esse contengano lo stesso simbolo. Se non è così oppure se non trovi il simbolo $\#$ allora rifiuta, altrimenti sostituisci i simboli corrispondenti con un simbolo a scelta.

Una volta esauriti tutti i simboli a sinistra di $\#$ verifica se ci sono simboli rimanenti a destra di $\#$, in tal caso rifiuta, altrimenti accetta. 

![https://i.ibb.co/bvDBjTZ/image.png](https://i.ibb.co/bvDBjTZ/image.png)

Le frecce nel seguente diagramma di stato si interpretano nel seguente modo:

$$
\text{lettura dal nastro}\rightarrow \text{scrittura sul nastro}, \text{spostamento testina}
$$

![https://i.ibb.co/7yNhkBr/mdt.png](https://i.ibb.co/7yNhkBr/mdt.png)

## Varianti di macchine di Turing

Esistono molte varianti di macchine di Turing, la cui realizzazione può essere più intuitiva per certi problemi, ma è importante notare che tutte le varianti riconoscono esattamente gli stessi linguaggi, cioè sono **equivalenti tra loro ed alla definizione classica di macchina di turing**

## MdT senza movimento della testina

In questa variante al posto di forzare la testina a muoversi o a destra o a sinistra ad ogni passo, aggiungiamo la possibilità che la **testina rimanga ferma**.

Riscriviamo quindi la funzione di transizione in questo modo:

$$
\delta: Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R, S\}
$$

Dove $R$ sta per “Right”, $L$ sta per “Left” e $S$ sta per “Stay”

Questa variante non aggiunge potenza al modello in quanto possiamo convertire questa variante in una MdT che al posto della mossa $S$ esegue due transizioni: una in cui sposta la testina a destra e la successiva che riporta a sinistra

## MdT multinastro

In questa variante si dispone di $k$ nastri, ognuno con la propria testina.

Inizialmente l’input si trova nel primo nastro mentre gli altri nastri sono vuoti e servono come memoria ausiliaria su cui fare operazioni.

Riscriviamo quindi la funzione di transizione in questo modo:

$$
\delta: Q \times \Gamma^k \rightarrow Q \times \Gamma^k \times \{L, R, S\}^k
$$

dove $k$ è il numero di nastri.

### Teorema

Per ogni macchina di Turing multinastro esiste una macchina di Turing a singolo nastro equivalente.

**Dimostrazione**: Sfruttando il fatto che il singolo nastro della MdT è infinito, possiamo memorizzare le informazioni degli altri nastri in quel singolo nastro concatenando il contenuto degli altri. Viene utilizzato un simbolo speciale come delimitatore per i contenuti dei vari nastri (ad esempio il simbolo `#`).

Inoltre serve tenere traccia della posizione della testina sul k-esimo nastro, anche questo lo possiamo fare aggiungendo un simbolo nella cella puntata dalla testina (ad esempio il simbolo •)

![https://i.ibb.co/WFBF0Bm/image.png](https://i.ibb.co/WFBF0Bm/image.png)

Ovviamente per tenere correttamente aggiornata la MdT sono necessari opportuni shift di contenuto per tenere separati i contenuti dei vari nastri.

## MdT non deterministica

Analogamente a quanto fatto passando dai DFA agli NFA, possiamo rendere le transizioni della macchina di Turing non deterministiche.

Riscriviamo quindi la funzione di transizione in questo modo:

$$
\delta: Q \times \Gamma \rightarrow \mathcal{P}(Q \times \Gamma \times \{L, R\})
$$

Se un qualche ramo della computazione porta ad uno stato di accettazione allora la macchina accetta.

### Teorema

Per ogni macchina di Turing non deterministica esiste una macchina di Turing deterministica equivalente.

**Idea della dimostrazione**:

Una computazione non deterministica si può rappresentare con un albero in cui ogni nodo ha come figli i possibili passi successivi della computazione.

L’idea è quella di **simulare** tramite una macchina di turing deterministica **tutti i possibili cammini** radice-foglia dell’albero, se uno di questi porta ad uno stato di accettazione allora la macchina accetta, altrimenti non termina. Una visita in profondità potrebbe far intraprendere alla macchina un cammino che porta ad un loop, impedendogli così di visitare tutto l’albero. Serve quindi una **visita in ampiezza**.

**Dimostrazione**:

Per facilitare la simulazione della MdT non deterministica utilizziamo una macchina di Turing deterministica a tre nastri (che abbiamo visto essere equivalente a quella a singolo nastro):

Vediamo come sono utilizzati i nastri:

1. Il nastro 1 contiene sempre la **stringa di input** e non viene mai modificato
2. Il nastro 2 mantiene una copia del nastro della macchina non deterministica durante l’attuale computazione
3. Il nastro 3 tiene traccia della posizione della macchina deterministica nell’albero (usando degli indirizzi)

![https://i.ibb.co/vL77GxV/turing.png](https://i.ibb.co/vL77GxV/turing.png)

Per tenere traccia della posizione nell’albero vengono numerati i figli di ogni nodo, e tali valori vengono inseriti nel terzo nastro, ad esempio per arrivare allo stato di accettazione l’indirizzo $3 \,1 \,1$ (la stringa vuota $\epsilon$ rappresenta l’indirizzo per il nodo radice).

Notiamo anche dall’immagine come una visita in profondità non funzionerebbe in quanto si potrebbe rimanere bloccati nel loop del primo ramo non raggiungendo mai quello di accettazione

Per effettuare una visita in ampiezza gli indirizzi seguiranno un ordine lessicografico, se $b$ è il numero di figli più grande in tutto l’albero allora gli indirizzi saranno del tipo

$$
1, 2, ...b\\
11, 12, ...1b \\
21, 22, ...2b \\
...\\
b1, b2, ...bb
$$

In questo modo possono anche uscire indirizzi che in realtà non sono presenti sull’albero, tali indirizzi sono detti **invalidi**.

Vediamo il funzionamento della macchina:

1. mette l’input nel nastro 1, il nastro 2 è vuoto e metti $\epsilon$ nel nastro 3
2. copia il nastro 1 nel nastro 2
3. Utilizza il nastro 2 per simulare la computazione non deterministica, consultando il nastro 3 per determinare la prossima scelta. Se giunge in uno stato di accettazione allora accetta, altrimenti (stato di rifiuto o indirizzo invalido) va al punto 4
4. aggiorna il nastro 3 con la prossima stringa e torna al punto 2

## Enumeratori

In modo informale un enumeratore è una macchina di Turing con una stampante collegata come dispositivo di output per stampare stringhe.

Mentre possiamo associare la macchina di Turing ad un riconoscitore di stringhe, un enumeratore è un **generatore di stringhe.**

Il linguaggio di un enumeratore è l’insieme di stringhe stampate.

### Teorema

Un linguaggio $A$ è Turing-riconoscibile se e solo se esiste un enumeratore $E$ che lo genera

**Dimostrazione**:

- Primo verso della doppia implicazione:  Se esiste un enumeratore $E$ tale che $L(E) = A$ allora dimostro che il linguaggio è turing riconoscibile costruendo una MdT $M$ tale che $L(M) = A$.
    
    La MdT $M$ funziona come segue:
    
    $M =$ Su input $w$:
    
    1. Esegue $E$. Ogni volta che $E$ genera una stringa $w’$, la confronta con $w$
    2. Se $w'=w$, accetta
    
- Secondo verso della doppia implicazione: Se $A$ è turing-riconoscibile allora dimostro che esiste un enumeratore $E$ tale che $L(E) = A$
    
    Se il linguaggio è turing riconoscibile allora esiste una MdT $M$ che riconosce il linguaggio, costruiamo un enumeratore
    
    $E =$ per $i = 1, 2, 3, …$:
    
    1. Esegui $M$ per $i$ passi di computazione su $s_1, s_2, s_3, …$ (cioè computa le stringhe in parallelo)
    2. Se una qualche computazione accetta allora stampa la corrispondente stringa

## Descrizione formale di enumeratore

Un enumeratore è una 7-upla $(Q, \Sigma, \Gamma, \delta, q_0, q_p, q_h)$ dove:

- $Q$: insieme finito di stati
- $\Sigma$: è l’alfabeto finito per la stampa
- $\Gamma$: è l’alfabeto finito per il nastro, in cui $\sqcup \in \Gamma$
- $\delta : (Q \setminus \{q_p, q_h\} \times \Gamma) \rightarrow Q \times \Gamma \times \{L, R\} \times (\Sigma \cup \{\epsilon\})$
    
    quindi nello stato attuale e letto un simbolo dal nastro $\rightarrow$ passiamo al nuovo stato, scriviamo un nuovo simbolo sul nastro, spostiamo la testina, scriviamo un nuovo simbolo in coda alla stampa
    
- $q_0 \in Q$: stato iniziale
- $q_p \in Q$: stato di stampa
- $q_h \in Q$: stato di terminazione, tale che $q_h \neq q_p$

La computazione di un enumeratore avviene tramite una sequenza di configurazioni.

Una configurazione per un enumeratore è una coppia $(uqv, w)$ dove:

- $u,v \in \Gamma^*$ stringhe costruite sull’alfabeto $\Gamma$
- $q \in Q$ lo stato corrente
- $w \in \Sigma^*$ stringa costruita sull’alfabeto $\Sigma$

Vediamo come una configurazione evolve nella successiva:

1. **Mossa a sinistra**: configurazione attuale $(uaq_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, L, d)$ allora la prossima configurazione è $(uq_jacv, wd)$
2. **Mossa a destra**: configurazione attuale $(uaq_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, R, d)$ allora la prossima configurazione è $(uacq_jv, wd)$
3. **Mossa a sinistra (inizio nastro)**: configurazione attuale $(q_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, L, d)$ allora la prossima configurazione è $(q_jcv, wd)$
4. **Mossa a destra (inizio nastro)**: configurazione attuale $(q_ibv, w)$ e viene fatta la mossa $\delta(q_i, b) = (q_j, c, R, d)$ allora la prossima configurazione è $(cq_jv, wd)$
5. **Mossa di stampa**: configurazione attuale $(uq_pv, w)$ allora la prossima configurazione è $(q_0uv, \epsilon)$ in questa mossa viene stampato il contenuto nel buffer di stampa e viene riportata la macchina allo stato iniziale. 

Il linguaggio di un enumeratore formalmente è:

$$
L(E) = \{w \in \Sigma^* : \text{per qualche } u, v \in \Gamma^* \text{ si ha che } (uq_pv, w) \text{ è raggiungibile da }(q_0, \epsilon)\}
$$

## Tesi di church-Turing

L’equivalenza tra i modelli che abbiamo visto (ma ce ne sono tanti altri) ha portato alla formulazione di una tesi, chiamata **tesi di Church-Turing** per la quale si è giunti alla conclusione che sebbene esistano molti modi di computare, essi si riducono tutti alla definizione di **algoritmo** ovvero una sequenza di istruzioni atte a risolvere un determinato problema.

Quindi il concetto di algoritmo è equivalente ad un algoritmo mediante macchina di Turing.

Dopo questa tesi abbiamo 3 modi per descrivere una macchina di turing:

1. descrizione formale con la 7-upla
2. descrizione implementativa in modo verbale dei passaggi di computazione sul nastro
3. descrizione ad alto livello verbale ignorando la gestione del nastro e della testina (simil pseudo-codice)

D’ora in avanti utilizzeremo il terzo metodo.

## decimo problema di Hilbert

Il decimo problema di Hilbert (o problema delle radici intere di un polinomio) dice che: dato un polinomio a più variabili determinare se esso ammetta o meno una radice intera (cioè sostituire le sue variabili con dei valori per cui risulti uguale a zero).

È stato dimostrato che non esiste un algoritmo che risolva questo problema.

Proviamo a risolvere una versione semplificata del problema: dato un polinomio in una sola variabile $x$ determinare se ammetta o meno una radice intera.

Definiamo il linguaggio del problema:

$$
A = \{<p> : p \text{ è un polinomio in x con radice intera}\}
$$

Dove $<\cdot>$ è una funzione che trasforma polinomi in una rappresentazione come stringa

Siccome abbiamo definito i linguaggi come un insieme di stringhe è importante che nel linguaggio $A$ ci siano stringhe e non polinomi. È a discrezione del singolo stabilire quale rappresentazione come stringa utilizzare, fintanto che sia possibile passare alla rappresentazione come polinomio e vice versa.

Per la tesi di Church-Turing, questo problema ammette soluzione algoritmica se e solo se esiste un **decisore** (macchina di Turing che accetta o rifiuta senza andare mai in loop) che riconosce $A$.

Provo a costruire il decisore $M$ che riconosce il linguaggio:

$M =$  Su input $<p>$:

1. Per tutti gli $x = 0, 1, -1, 2, -2, 3, -3, …$
    - calcola il valore di $p(x)$
    - se $p(x) = 0$ allora ritorna accetta

Al momento questa macchina dimostra che $A$ è **turing-riconoscibile** ma non dimostra che è decidibile (cioè $M$ non è un decisore) in quanto può andare in loop infinito se non trova una soluzione.

Se imposto un limite ai numeri da tentare e aggiungo un secondo step in cui se non viene trovata la radice entro questo limite allora rifiuto, allora abbiamo creato un decisore.

È stato dimostrato che la radice intera, se esiste, è compresa tra

$$
\left[-k\frac{c_{\text{max}}}{c_1}, +k\frac{c_{\text{max}}}{c_1}\right]
$$

dove:

- $k$ è il numero di termini
- $c_{\text{max}}$ è il coefficiente di massimo valore assoluto
- $c_1$ è il coefficiente di grado massimo

Il decisore diventa quindi:

$M =$  Su input $<p>$:

1. Per tutti gli $x \in \left[-k\frac{c_{\text{max}}}{c_1}, +k\frac{c_{\text{max}}}{c_1}\right]$
    - calcola il valore di $p(x)$
    - se $p(x) = 0$ allora ritorna accetta
2. se non è stato trovato nessun valore di $x$ valido allora rifiuta

## Chiusura dei linguaggi Turing-riconoscibili

È possibile dimostrare che i **linguaggi turing-riconoscibili** sono chiusi rispetto a: **unione, concatenazione, star e intersezione**

È importante considerare che le MdT che riconoscono tali linguaggi possono andare in loop.

### Unione

Dimostro che se $A, B$ sono due linguaggi Turing-riconoscibili allora $A\cup B$ è Turing-riconoscibile.

Dato che $A, B$ sono TR allora esistono due MdT $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco una nuova MdT $M’$ con due nastri.

$M’ =$ su input $w$:

- copia $w$ sul secondo nastro
- simula $M$ su $w$ sul primo nastro per un passo di computazione
- simula $N$ su $w$ sul secondo nastro per un passi di computazione
- se $M$ o $N$ accettano allora accetta

Un controllo sequenziale: prima simulo $M$ e poi $N$ sarebbe sensibile al loop

### Intersezione

Dimostro che se $A, B$ sono due linguaggi Turing-riconoscibili allora $A\cap B$ è Turing-riconoscibile.

Dato che $A, B$ sono TR allora esistono due MdT $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco una nuova MdT $M’$.

$M’ =$ su input $w$:

- simula $M$ su $w$
- se $M$ accetta simula $N$ su $w$, se $N$ accetta allora accetta, altrimenti rifiuta.
- se $M$ rifiuta allora rifiuta

Per come funziona l’intersezione un eventuale loop non crea problemi, quindi possiamo fare un controllo sequenziale

### Concatenazione

Dimostro che se $A, B$ sono due linguaggi Turing-riconoscibili allora $A\circ B$ è Turing-riconoscibile.

Dato che $A, B$ sono TR allora esistono due MdT $M, N$ tali che $L(M) = A$ e $L(N) = B$.

Costruisco una nuova MdT non deterministica $M’$.

$M’ =$ su input $w$:

- spezza $w$ in $w_1, w_2$ non deterministicamente
- esegui $M$ su $w_1$, se rifiuta allora rifiuta
- esegui $N$ su $w_2$. se accetta allora accetta, altrimenti rifiuta

Il non determinismo ci evita problemi derivanti da loop

### Star

Dimostro che se $A$ è un linguaggio Turing-riconoscibile allora $A^*$ è Turing-riconoscibile.

Dato che $A$ è TR allora esiste un MdT $M$ tale che $L(M) = A$.

Costruisco una nuova MdT non deterministica $M’$.

$M’ =$ su input $w$:

- spezza $w$ in $w_1, w_2 ... w_n$ non deterministicamente per qualche $n \leq |w|$
- esegui $M$ su $w_i$, per ogni $i \leq n$, se $M$ le accetta tutte allora accetta, altrimenti rifiuta
