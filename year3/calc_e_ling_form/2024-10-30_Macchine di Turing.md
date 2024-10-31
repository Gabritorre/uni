# Macchine di Turing

Una macchina di Turing (MdT) è un modello teorico di calcolatore con **memoria infinita** utilizzabile in maniera arbitraria.

Viene utilizzato un **nastro infinito** come memoria illimitata e una **testina** che viene utilizzata per leggere e scrivere la cella indicizzata.

**Caratteristiche** della macchina di Turing:

- La memoria è infinita e viene rappresentata da un nastro
- L’input si trova sul nastro e può essere sia letto che scritto
- La testina può spostarsi sia a destra che a sinistra
- Accetto o rifiuto un input immediatamente quando entro in uno stato di accettazione o rifiuto (non è quindi necessario consumare tutto l’input)

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

Inizialmente la MdT riceve un input di $n$ simboli che vengono posizionate nelle $n$ celle più a sinistra del nastro, il restro del nastro avrà caratteri *blank*. La testina parte dalla posizione più a sinistra del nastro e la computazione inizia.

Possiamo descrivere la computazione definendo delle **configurazioni** composte da tre elementi:

1. Stato interno
2. Contenuto del nastro
3. posizione della testina

In generale una **configurazione ha la forma** $uqv$ dove $u, v$ sono stringhe generate dell’alfabeto del nastro $\Gamma$ e $q$ è uno stato corrente.

Ad esempio

![https://i.ibb.co/FqsDmvq/image.png](https://i.ibb.co/FqsDmvq/image.png)

la configurazione si scrive come $1011q_701111$. È importante notare come la testina stia puntando all’elemento subito dopo lo stato $q_7$

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

È immediato che **ogni linguaggio decidibile è anche Turing-riconoscibile** (il contrario non vale).

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
