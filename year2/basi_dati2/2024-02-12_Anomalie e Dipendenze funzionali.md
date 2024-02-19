# Anomalie e Dipendenze funzionali

Spesso esistono diversi modi per modellare la realtà di riferimento della base di dati, vediamo come riconoscere quali modelli sono i migliori e come trovare delle problematiche in una modellazione.
La **normalizzazione** si occupa di definire formalmente la qualità degli schemi e degli algoritmi per trasformare un schema in un altro equivalente ma privo di **anomalie**

## Le anomalie

I due due anomalie principali che si possono presentare in una modellazione sono:
- **ripetizione di dati**
- **impossibilità di rappresentare certe informazioni**
- **perdita di informazione**

Consideriamo il seguente esempio per la rappresentazione dei prestiti di una biblioteca: Vogliamo rappresentare gli utenti che nel momento attuale hanno in possesso un libro in prestito (non siamo interessati allo storico dei prestiti)

Abbiamo una unica tabella fatta nel seguente modo

![enter image description here](https://i.ibb.co/7bQjdPN/image.png)

Abbiamo della **ripetizione di dati** in quanto ogni volta che uno stesso utente prende in prestito un nuovo libro vengono ripetuti i dati quali residenza e telefono (inoltre creerebbe delle difficoltà in fase di aggiornamento dei dati).
D'altra parte ci è **impossibile rappresentare** informazioni sugli utenti se questi non hanno un libro in prestito nel momento attuale

un'altra anomalia è la **perdita di informazione**, ad esempio potremmo modificare lo schema precedente nel seguente modo

![enter image description here](https://i.ibb.co/Bgd01fg/image.png)

abbiamo risolto il problema della ridondanza dei dati, però la scelta di usare `Telefono` come chiave esterna è un problema in quanto non identifica univocamente un utente e questo può portare ad avere dei risultati non corretti dalle query.
Bisognerebbe usare `NomeUtente` come chiave esterna

Abbiamo poi **anomalie di inserimento e cancellazione** dove viene reso impossibile inserire o cancellare certi dati.

## Dipendenze funzionali

Vediamo alcuni concetti che la teoria della normalizzazione utilizza per definite una schema come "normalizzato".

Realizziamo prima una raccolta delle notazione che utilizziamo successivamente:

- $A, B, C, A_1, A_2,...$ rappresentano singoli attributi
- $T, X, Y, X_1, ...$ rappresentano insiemi di attributi
- $R(T)$ tabella chiamata $R$ costituita da un insieme di attributi $T$
- $r$ è una riga della tabella $R$
- $t[X]$ è una riga che considera solo l'insieme di attributi $X$

**dipendenza funzionale**: Avendo due insiemi di attributi $X$ e $Y$ la dipendenza funzionale si rappresenta come $X \rightarrow Y$ e sta a significare i valori assunti dagli attributi $Y$ dipendono dal valore degli attributi $X$. 

Ciò significa che per ogni coppia di righe diverse $t_1, t_2$ se queste due righe hanno dei valori uguali sugli attributi $X$ allora devono avere dei valori uguali anche negli attributi $Y$ (quest'ultima proprietà viene chiamata **proprietà di soddisfacibilità**).

ad esempio se in una tabella consideriamo $X = \{\text{Paese}\}$ e $Y = \{\text{LinguaUfficiale}\}$

Abbiamo una dipendenza funzionale $X \rightarrow Y$ se considerando ogni coppia di righe, se abbiamo due valori uguali sull'attributo $\text{Paese}$ allora abbiamo anche valori uguali sull'attributo $\text{LinguaUfficiale}$

**L'insieme** di tutte le **dipendenze funzionali** della relazione si indicano con la lettera $F$

Note:
- Le **dipendenze sono interne alla relazione**, non è quindi possibile riferirsi ad insiemi di attributi tra tabelle diverse.
- le **dipendenze dipendono dalla specifica realtà** che si vuole rappresentare, quindi non è possibile determinarle basandosi solamente sull'osservazione dei valori assunti dalle colonne.
- Indichiamo con $R(T, F)$ una relazione in cui tutti i valori assunti dalle colonne rispettano le dipendenze funzionali della relazione

## Dipendenze derivate

In una relazione $R(T, F)$ possiamo avere che i valori delle righe non solo rispettano le dipendenze espresse in $F$ ma anche altre dipendenze che si possono derivare da quelle presenti in $F$.

definizione di **dipendenze derivate**: dato $R(T, F)$ diciamo che $F \models X \rightarrow Y(\text{cioè}\, "F \text { implica logicamente } X \rightarrow Y")$ se i valori di ogni riga rispettano sia $F$ che $X \rightarrow Y$

Ad esempio:

$F = \begin{cases}\text{CodiceLibro} \rightarrow \text{Titolo} \\
\text{CodiceLibro} \rightarrow \text{NomeUtente}\end{cases}$

possiamo scrivere che $F \models \text{CodiceLibro} \rightarrow \text{Titolo, NomeUtente}$

### Assiomi di Armstrong

L'implicazione logica (essendo appunto fatta tramite la logica) non fornisce un modo algoritmico per determinare le dipendenze, per questo occorre utilizzare la **derivazione**

Dato un insieme di regole di inferenza (deduzione) $RI$ che possono essere usate per **derivare nuove dipendenza dato un insieme di dipendenze** $F$, indichiamo con $F \vdash X \rightarrow Y$ il fatto che la dipendenza $X \rightarrow Y$ sia **derivabile** da $F$ usando le regole $RI$

Un insieme di regole viene definito *corretto e completo* se vale:

$$F \vdash X \rightarrow Y \iff F \models X \rightarrow Y$$

Gli **assiomi di Armstrong** un insieme di regole *corrette e complete* e le regole sono le seguenti:

1. **Riflessività**: Se l'insieme di attributi $Y$ è sottoinsieme di $X$ allora i valori di $Y$ dipendono da $X$
	$$Y \subseteq X \implies X \rightarrow Y$$
2. **Arricchimento**: Se $Y$ dipende da $X$ e consideriamo $W$ come un sottoinsieme di attributi di $T$ allora aggiungendo ad $Y$ gli attributi $W$ essi (messi insieme) dipenderanno dagli attributi $X$ uniti agli attributi $W$

	$$X \rightarrow Y \land W \subseteq T \implies X \cup W \rightarrow Y \cup W$$

3. **Transitività**: Se $Y$ dipende da $X$ e $Z$ dipende da $Y$ allora $Z$ dipende da $X$

	$$X \rightarrow Y \land Y \rightarrow Z \implies X \rightarrow Z$$

Definizione di **Derivazione** una derivazione di $X \rightarrow Y$ da $F$ è una sequenza di dipendenze $f_1, ..., f_n$ dove $f_n = X \rightarrow Y$ e ogni elemento è ottenuto da una regola di inferenza oppure dalle dipendenze precedenti.

Vediamo alcune regole che derivano dagli assiomi di Armstrong:
- **Unione**: $\{X \rightarrow Y, X \rightarrow Z\} \vdash X \rightarrow Y\cup Z$
- **Decomposizione**: $\{X \rightarrow Y\cup Z\} \vdash X \rightarrow Y$
- **Indebolimento**: $\{X \rightarrow Y\} \vdash X \cup Z \rightarrow Y$
- **Identità**: $\{\} \vdash X \rightarrow X$

Nel contesto degli assiomi di Armstrong **l'implicazione logica** $(\models)$ e la **derivazione** $(\vdash)$ **sono equivalenti**. Quindi d'ora in avanti i due termini (e i simboli) possono essere intercambiati a piacere


## Chiusura

Definiamo cosa è la **chiusura di un insieme di dipendenze funzionali** e che cosa è la **chiusura di un insieme di attributi rispetto ad un insieme dipendenze funzionali**

**chiusura di un insieme di dipendenze**: Data un insieme di dipendenze $F$, la **chiusura** (indicata come $F^+$) è l'insieme delle dipendenze funzionali che sono implicate logicamente (o derivate) da $F$

$$F^+ = \{X \rightarrow Y | F \vdash X \rightarrow Y\}$$

### Problema dell'implicazione

*Problema dell'implicazione*: Un classico problema che si presenta è quello di decidere se una dipendenza funzionale appartiene a $F^+$, per risolvere questo problema abbiamo bisogno di definire la **chiusura di un insieme di attributi**:

Avendo $X$ come sottoinsieme degli attributi, la chiusura di $X$ (indicata come $X^+$) è l'insieme di attributi $A$ che dipendono da $X$ (determinati tramite implicazione logica o derivazione rispetto a $F$)

$$X^+ = \{A \in T | F \vdash X \rightarrow A\}$$

tramite il seguente teorema,

$$F \vdash X \rightarrow Y \iff Y \subseteq X^+$$

possiamo risolvere il problema dell'implicazione, infatti per determinare se $X \rightarrow Y \in F^+$ ci basterà verificare se $Y \subseteq X^+$

Vediamo l'algoritmo per determinare $X^+$:

$\begin{aligned}
& \text { function } \operatorname{CLOSURE}(X, F) \\
& \hspace{5mm}X_{\text {old }}^{+} \leftarrow \emptyset \\
& \hspace{5mm}X_{\text {new }}^{+} \leftarrow X \\
& \hspace{5mm}\textbf {while } X_{\text {new }}^{+} \neq X_{\text {old }}^{+} \textbf {do } \\
& \hspace{12mm} X_{\text {old }}^{+} \leftarrow X_{\text {new }}^{+} \\
& \hspace{12mm}\textbf{for all } Y \rightarrow Z \in F \textbf{ do } \\
& \hspace{18mm} \textbf{if } Y \subseteq X_{\text {new }}^{+} \textbf{then } \\
& \hspace{23mm} X_{\text {new }}^{+} \leftarrow X_{\text {new }}^{+} \cup Z \\
& \hspace{5mm}\textbf{ return } X_{\text {new }}^{+}
\end{aligned}$

Vediamo un esempio di esecuzione con:
- $X = AB$
- $G = \{A \rightarrow C, AC \rightarrow D, E \rightarrow F\}$

Seguiamo la variabile $X_{\text{new}}^+$ durante la l'esecuzione del codice:

- inizializzazione: $X_{\text{new}}^+ = AB$
- prima iterazione: 
	1. dato che $AB \neq \emptyset$ viene eseguita l'iterazione
	2. vengono scorsi tutti gli elementi di $G$
	3. l'unico elemento che entra nell'if è $\{A \rightarrow C\}$ in quanto $A$ è contenuto in $AB$
	4. $X_{\text{new}}^+ = AB\cup C = ABC$
- seconda iterazione: 
	1. dato che $ABC \neq AB$ viene eseguita l'iterazione
	2. vengono scorsi tutti gli elementi di $G$
	3. gli elementi che entra nell'if sono $\{A \rightarrow C, AC \rightarrow D\}$ in quanto $A$ è contenuto in $ABC$ e anche $AC$ è contenuto in $ABC$
	4. $X_{\text{new}}^+ = ABC \cup C \cup D = ABCD$
- terza iterazione: 
	1. dato che $ABCD \neq ABC$ viene eseguita l'iterazione
	2. vengono scorsi tutti gli elementi di $G$
	3. nessun nuovo elemento di $G$ si può aggiungere ad $ABCD$
- quarta iterazione: 
	1. dato che $ABCD = ABCD$ il ciclo termina

Abbiamo quindi trovato che $X^+ = ABCD$
