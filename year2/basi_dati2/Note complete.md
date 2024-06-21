# Anomalie e Dipendenze funzionali

Esistono diversi modi per modellare la realtà di riferimento della base di dati, vediamo come riconoscere quali modelli sono i migliori e come trovare delle problematiche in una modellazione.
La **normalizzazione** si occupa di definire formalmente la qualità degli schemi e degli algoritmi utilizzati per trasformare un schema in un altro equivalente ma privo di **anomalie**

## Le anomalie

Le anomalie principali che si possono presentare in una modellazione sono:
- **ripetizione di dati**
- **impossibilità di rappresentare certe informazioni**
- **perdita di informazione**

Consideriamo il seguente esempio che rappresenta dei prestiti di una biblioteca: Vogliamo rappresentare gli utenti che nel momento attuale hanno in possesso un libro in prestito (non siamo interessati allo storico dei prestiti)

Abbiamo una unica tabella fatta nel seguente modo
![enter image description here](https://i.ibb.co/7bQjdPN/image.png)

Abbiamo **ripetizione di dati** in quanto ogni volta che uno stesso utente prende in prestito un nuovo libro vengono ripetuti i dati quali residenza e telefono (inoltre creerebbe delle difficoltà in fase di aggiornamento dei dati).
D'altra parte è **impossibile rappresentare** informazioni sugli utenti se questi non hanno un libro in prestito nel momento attuale.

Un'altra anomalia è la **perdita di informazione**, ad esempio potremmo modificare lo schema precedente nel seguente modo
![enter image description here](https://i.ibb.co/Bgd01fg/image.png)

Abbiamo risolto il problema della ridondanza dei dati, però la scelta di usare `Telefono` come chiave esterna è un problema in quanto non identifica univocamente un utente e questo può portare ad avere dei risultati non corretti dalle query, abbiamo perso l'informazione su chi è effettivamente l'utente che ha preso in prestito il libro.
Bisognerebbe usare `NomeUtente` come chiave esterna, in quanto è una chiave primaria sulla tabella `Utenti`.

Abbiamo poi **anomalie di inserimento e cancellazione** dove viene reso impossibile inserire o cancellare certi dati.

## Dipendenze funzionali

Vediamo alcuni concetti che la teoria della normalizzazione utilizza per definite uno schema come "normalizzato".

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

L'implicazione logica (essendo appunto fatta tramite la logica) non fornisce un modo algoritmico per determinare le dipendenze, per questo occorre utilizzare la **derivazione**.

Dato un insieme di regole di inferenza (deduzione) $RI$ che possono essere usate per **derivare nuove dipendenza dato un insieme di dipendenze** $F$, indichiamo con $F \vdash X \rightarrow Y$ il fatto che la dipendenza $X \rightarrow Y$ sia **derivabile** da $F$ usando le regole $RI$

Un insieme di regole viene definito *corretto e completo* se vale:

$$F \vdash X \rightarrow Y \iff F \models X \rightarrow Y$$

Gli **assiomi di Armstrong** un insieme di regole *corrette e complete* e sono le seguenti:

1. **Riflessività**: Se l'insieme di attributi $Y$ è sottoinsieme di $X$ allora i valori di $Y$ dipendono da $X$
	$$Y \subseteq X \implies X \rightarrow Y$$
2. **Arricchimento**: Se $Y$ dipende da $X$ e consideriamo $W$ come un sottoinsieme di attributi di $T$, allora aggiungendo ad $Y$ gli attributi $W$, essi dipenderanno dagli attributi $X$ uniti agli attributi $W$

	$$X \rightarrow Y \land W \subseteq T \implies X \cup W \rightarrow Y \cup W$$

3. **Transitività**: Se $Y$ dipende da $X$ e $Z$ dipende da $Y$ allora $Z$ dipende da $X$

	$$X \rightarrow Y \land Y \rightarrow Z \implies X \rightarrow Z$$

Definizione di **Derivazione**: una derivazione di $X \rightarrow Y$ da $F$ è una sequenza di dipendenze $f_1, ..., f_n$ dove $f_n = X \rightarrow Y$ e ogni elemento è una dipendenza funzionale in $F$ oppure è ottenuto da una regola di inferenza applicata alle dipendenze precedenti.

Vediamo alcune regole che derivano dagli assiomi di Armstrong:
- **Unione**: $\{X \rightarrow Y, X \rightarrow Z\} \vdash X \rightarrow Y\cup Z$
- **Decomposizione**: $\{X \rightarrow Y\cup Z\} \vdash X \rightarrow Y$
- **Indebolimento**: $\{X \rightarrow Y\} \vdash X \cup Z \rightarrow Y$
- **Identità**: $\{\} \vdash X \rightarrow X$

Nel contesto degli assiomi di Armstrong **l'implicazione logica** $(\models)$ e la **derivazione** $(\vdash)$ **sono equivalenti**. Quindi d'ora in avanti i due termini (e i simboli) possono essere intercambiati a piacere

## Chiusura

Definiamo cosa è la **chiusura di un insieme di dipendenze funzionali** e che cosa è la **chiusura di un insieme di attributi rispetto ad un insieme dipendenze funzionali**

**chiusura di un insieme di dipendenze**: Dato un insieme di dipendenze $F$, la **chiusura** (indicata come $F^+$) è l'insieme delle dipendenze funzionali che sono implicate logicamente (o derivate) da $F$

$$F^+ = \{X \rightarrow Y \, | \,F \vdash X \rightarrow Y\}$$

### Problema dell'implicazione

*Problema dell'implicazione*: Un classico problema che si presenta è quello di decidere se una dipendenza funzionale appartiene a $F^+$, per risolvere questo problema abbiamo bisogno di definire la **chiusura di un insieme di attributi**:

Avendo $X$ come sottoinsieme degli attributi, la chiusura di $X$ (indicata come $X^+$) è l'insieme di attributi $A$ che dipendono da $X$ (determinati tramite implicazione logica o derivazione rispetto a $F$)

$$X^+ = \{A \in T | F \vdash X \rightarrow A\}$$

Tramite il seguente teorema,

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
- insieme delle dipendenze funzionali: $G = \{A \rightarrow C, AC \rightarrow D, E \rightarrow F\}$

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
	3. gli elementi che entrano nell'if sono $\{A \rightarrow C, AC \rightarrow D\}$ in quanto $A$ è contenuto in $ABC$ e anche $AC$ è contenuto in $ABC$
	4. $X_{\text{new}}^+ = ABC \cup C \cup D = ABCD$
- terza iterazione: 
	1. dato che $ABCD \neq ABC$ viene eseguita l'iterazione
	2. vengono scorsi tutti gli elementi di $G$
	3. nessun nuovo elemento di $G$ si può aggiungere ad $ABCD$
- quarta iterazione: 
	1. dato che $ABCD = ABCD$ il ciclo termina

Abbiamo quindi trovato che $X^+ = ABCD$

# Chiavi e coperture canoniche

Definiamo i concetti di *superchiave, chiave e attributi primi* utilizzando le nozioni di dipendenza funzionale.

- **Superchiave**: (sottoinsieme di attributi che renderebbero ogni riga univoca all'interno della tabella)
	Data la relazione $R(T, F)$, un insieme di attributi $X\subseteq T$ è superchiave se e solo se $X \rightarrow T \in F^+$
- **Chiave**: è una superchiave composta dal minor numero di attributi possibile (detta anche superchiave minimale) ma che continua ad identificare le righe della tabella
	
- Un attributo viene definito **primo** se appartiene ad almeno una chiave.
	Dato che nella modellazione ci possono essere più chiavi, ne viene scelta una (quella con il numero di attributi minore) chiamata *chiave primaria*

## Verificare una superchiave

Vediamo un algoritmo per  verificare se un insieme di attributi $X\subseteq T$ è **superchiave**:

1. Calcolare la chiusura $X^+$
2. verificare se $X^+ = T$

Vediamo un esempio

- relazione $R(T, G)$
- $T = ABCDEF$
- $G = \{AB \rightarrow C, E \rightarrow A, A \rightarrow E, B \rightarrow F\}$
- $X = ABD$

Verifichiamo se $X$ è una superchiave
1. Calcoliamo la chiusura $X^+$ (come abbiamo visto negli appunti precedenti)

	1. $X^+ = ABD$
	2. $X^+ = ABDC$ (tramite $AB \rightarrow C$)
	3. $X^+ = ABDCE$ (tramite $A \rightarrow E$)
	4. $X^+ = ABDCEF$ (tramite $B \rightarrow F$)

Dato che $X^+ = T$ allora $X$ è una superchiave

## Verificare una chiave

Vediamo un algoritmo per  verificare se un insieme di attributi $X\subseteq T$ è **chiave**:

1. Verificare che $X$ è superchiave (se non lo è allora non può essere nemmeno una chiave)
2. Verificare che per ogni attributo $A \in X$ si abbia $(X \backslash \{A\})^+ \neq T$

Vediamo un esempio

- relazione $R(T, G)$
- $T = ABCDEF$
- $G = \{AB \rightarrow C, E \rightarrow A, A \rightarrow E, B \rightarrow F\}$
- $X = ABD$

Abbiamo già verificato prima che $X$ è una superchiave, quindi passiamo subito al punto 2:

- rimuovendo $A$ avremmo $BD^+ = BDF$ che è diverso da $T$
- rimuovendo $B$ avremmo $AD^+ = ADE$ che è diverso da $T$
- rimuovendo $D$ avremmo $AB^+ = ABCEF$ che è diverso da $T$

Quindi $X$ è una chiave

## Trovare una chiave

Dato $R(T, F)$, è possibile trovare una sua chiave. L'idea è quella di partire dall'insieme di tutti gli attributi $T$ e rimuovere uno alla volta tutti gli attributi che non sono indispensabili per derivare $T$

$\begin{aligned}
& \text {function} \operatorname{FindKEY}(R(T, F)) \\
& \hspace{5mm}K \leftarrow T \\
& \hspace{5mm}\textbf {for all } A \in T \textbf { do } \\
& \hspace{10mm}\textbf {if }(K \backslash\{A\})^{+}=T \textbf { then } \\
& \hspace{15mm} K \leftarrow K \backslash\{A\} \\
& \hspace{5mm}\textbf {return } K
\end{aligned}$

Vediamo un esempio

- relazione $R(T, G)$
- $T = ABCDEF$
- $G = \{AB \rightarrow C, E \rightarrow A, A \rightarrow E, B \rightarrow F\}$


1. inizializzazione: $K = ABCDEF$
2. rimuovendo $A$ otteniamo $BCDEF^+ = ABCDEF = T$ quindi $A$ deve essere rimosso
	$K = BCDEF$
3. rimuovendo $B$ otteniamo $CDEF^+ = ACDEF \neq T$ quindi $B$ va mantenuto
4. rimuovendo $C$ otteniamo $BDEF^+ = ABCDEF = T$ quindi $C$ deve essere rimosso
	$K = BDEF$
5. rimuovendo $D$ otteniamo $BEF^+ = ABCEF \neq T$ quindi $D$ va mantenuto
6. rimuovendo $E$ otteniamo $BDF^+ = BDF \neq T$ quindi $E$ va mantenuto
7. rimuovendo $F$ otteniamo $BDE^+ = ABCDEF = T$ quindi $F$ deve essere rimosso
	$K = BDE$

Quindi abbiamo trovato che gli attributi $BDE$ rappresentano una chiave

## Trovare tutte le chiavi

Vediamo un algoritmo che ci permette di ricercare tutte le chiavi di una relazione $R(T, F)$

L'algoritmo è il seguente 

$\begin{aligned}
& \text { function FindAllKeys }(R(T, F)) \\
& \hspace{5mm}Z=\{B \in T \mid \forall X \rightarrow Y \in F: B \notin Y\} \\
& \hspace{5mm}\text {Cand }=[Z::(T \backslash Z)] \\
& \hspace{5mm}\text {Keys }=[] \\
& \hspace{5mm}\textbf {while} \text{ Cand } \neq[] \textbf { do } \\
& \hspace{10mm}X::(Y)=\text{HEAD}(\text {Cand}) \\
& \hspace{10mm}\text {Cand}=\text {TAIL }(\text{Cand}) \\
& \hspace{10mm}\textbf {if } \nexists K \in \text{Keys}: K \subset X \textbf { then} \\
& \hspace{15mm}\textbf {if } X^{+}=T \textbf { then } \\
& \hspace{20mm}\text {Keys}=\text {Keys}+X \\
& \hspace{15mm}\textbf {else} \\
& \hspace{20mm}A_1, \ldots, A_n=Y \backslash X^{+} \\
& \hspace{20mm}\textbf {for } i \in 1, \ldots, n \textbf { do} \\
& \hspace{25mm}\text {Cand }=\text { Cand }+X A_i::\left(A_{i+1}, \ldots, A_n\right)
\end{aligned}$

L'intuizione è la seguente:

- generiamo tutte le possibili chiavi dalle più piccole alle più grandi
- rappresentiamo le chiavi candidate come $X :: (Y)$ dove $X$ è l'insieme degli attributi da testare come chiave, e $Y$ l'insieme dei possibili attributi da aggiungere a $X$ qualora $X^+ \neq T$
- Se $X^+ = T$, allora $X$ è già una chiave e possiamo scartare $X :: (Y)$ (cioè tutti i sovrainsiemi di $X$)
- Altrimenti calcoliamo $Y \backslash X^+ = \{A_1, ..., A_n\}$ e generiamo i nuovi candidati
 $X\cup A_1 :: (A_2, ..., A_n), X\cup A_2 :: (A_3, ..., A_n), ..., X\cup A_n :: ()$
 - Nota che se un attributo non compare mai alla destra di una dipendenza, allora esso deve fare parte di tutte le chiavi.

Un esempio del significato di $X :: (Y)$ è il seguente
$AB :: (CD)$ rappresenta gli insiemi di attributi $\{AB, ABC, ABD, ABCD\}$

Vediamo un esempio

- relazione $R(T, G)$
- $T = ABCDEF$
- $G = \{AB \rightarrow C, E \rightarrow A, A \rightarrow E, B \rightarrow F\}$

partiamo inizializzando $Z$, in $Z$ dobbiamo mettere gli attributi presenti in $G$ che non dipendono da altri, nel nostro caso:
$Z = BD$
Avendo $Z$ possiamo inizializzare i candidati, mettendo a sinistra $Z$ mentre a destra gli altri attributi:
$\text{Cand} = [BD::(ACEF)]$

- STEP 1
	
	$X = BD$
	$Y = ACEF$

	$X^+ = BDF \neq T$ quindi $X$ non è una chiave
	$Y \backslash X^+ = ACE$

	i nuovi candidati saranno:
	$\text{Cand} = [BDA::(CE), BDC::(E), BDE::()]$
	
	chiavi trovate:
	$\text{Keys} = []$

- STEP 2
	
	$X = BDA$
	$Y = CE$

	$X^+ = BDACEF = T$ quindi $X$ è una chiave

	i candidati rimanenti saranno:
	$\text{Cand} = [BDC::(E), BDE::()]$
	
	chiavi trovate:
	$\text{Keys} = [BDA]$

- STEP 3
	
	$X = BDC$
	$Y = E$

	$X^+ = BDCF \neq T$ quindi $X$ non è una chiave
	$Y \backslash X^+ = E$

	i nuovi candidati saranno:
	$\text{Cand} = [BDE::(), BDCE::()]$
	
	chiavi trovate:
	$\text{Keys} = [BDA]$

- STEP 4
	
	$X = BDE$
	$Y = \emptyset$

	$X^+ = BDEACF = T$ quindi $X$ è una chiave

	i candidati rimanenti saranno:
	$\text{Cand} = [BDCE::()]$
	
	chiavi trovate:
	$\text{Keys} = [BDA, BDE]$

- STEP 5

	$X = BDCE$
	$Y = \emptyset$

	dato che $X$ è un sovrainsieme della chiave $DBE$ allora $X$ non è una chiave valida

	i candidati rimanenti saranno:
	$\text{Cand} = []$
	
	chiavi trovate:
	$\text{Keys} = [BDA, BDE]$

Dato che non ci sono candidati rimanenti l'algoritmo termina e le chiavi trovate sono $[BDA, BDE]$

## Attributo primo

Verificare che un attributo è primo ha costo esponenziale, è quindi più conveniente generare tutte le chiavi e quindi vedere quali sono gli attributi presenti.

## Forma canonica

Rendere in **forma canonica** un insieme di dipendenze funzionali $F$ significa rappresentare tale insieme in modo che rispetti delle regole che servono a standardizzarlo.

Due insiemi di dipendenze $F$ e $G$ sono equivalenti $(F\equiv G)$ se e solo se  $F^+ = G^+$

Regole della forma canonica:

1. il **numero di elementi dipendenti** (quelli alla destra) **deve essere 1** per ogni dipendenza
2. gli elementi alla sinistra **non contengono attributi estranei**:
	gli attributi estranei sono quegli attributi che stanno alla sinistra e che anche se rimossi non intaccano la dipendenza
3. **non sono presenti dipendenze ridondanti**
	una dipendenza è ridondante se essa si può ricavare dalle altre dipendenze

L'algoritmo per trasformare un insieme di dipendenze $F$ in forma canonica (operazione anche detta "trovare la **copertura canonica** di $F$") è il seguente

$\text{function Canonize}(F)$
$\hspace{5mm}G \leftarrow\{X \rightarrow A \mid \exists Y: X \rightarrow Y \in F \wedge A \in Y\}$
$\hspace{5mm}\textbf{for all } X \rightarrow A \in G$ such that $|X|>1 \textbf{ do}$
$\hspace{12mm}Z \leftarrow X$
$\hspace{12mm}\textbf{for all } B \in X \textbf{ do}$
$\hspace{18mm}\textbf{if } A \in(Z \backslash\{B\})_G^{+}\textbf{ then}$
$\hspace{24mm}Z \leftarrow Z \backslash\{B\}$
$\hspace{12mm}G \leftarrow(G \backslash\{X \rightarrow A\}) \cup\{Z \rightarrow A\}$
$\hspace{5mm}\textbf{for all } X \rightarrow A \in G \textbf{ do}$
$\hspace{12mm}\textbf{if } A \in X_{G \backslash\{X \rightarrow A\}}^{+}\textbf{ then}$
$\hspace{18mm}G \leftarrow G \backslash\{X \rightarrow A\}$
$\hspace{5mm}\textbf{return } G$

Consiste sostanzialmente in 3 passi:

1. decomporre le dipendenze in modo da avere attributi singoli alla destra
2. tra le dipendenze rimanenti considera quelli che hanno più attributi a sinistra e cancelliamo gli attributi estranei, per farlo:
	- togli un attributo
	- calcola la chiusura
	- se gli elementi sulla destra sono compresi nella chiusura allora l'attributo tolto era estraneo
3. togliamo le dipendenze ridondanti, per farlo:
	- ipotizziamo di rimuovere una dipendenza
	- calcoliamo la chiusura rispetto alla parte sinistra della dipendenza tolta
	- se la chiusura contiene gli attributi alla destra della dipendenza rimossa, allora la dipendenza rimossa era ridondante

Ad esempio, trovare la copertura canonica di 
$$F = \{A\rightarrow BC, B \rightarrow C, A \rightarrow B, AB \rightarrow C\}$$

Indichiamo la copertura canonica con $G$
1. decomponiamo le dipendenze con più attributi a destra
$$G =\{A\rightarrow B, A \rightarrow C, B \rightarrow C, A \rightarrow B, AB \rightarrow C\}$$

2. consideriamo le dipendenze con più attributi a sinistra, nel nostro caso abbiamo solo $AB \rightarrow C$, proviamo a rimuovere l'attributo $A$:
$\{AB\} \backslash \{A\} = B$
Calcoliamo la chiusura di $B$, $B^+_G = BC$
Dato che nella chiusura è presente l'attributo $Y$ della dipendenza che abbiamo considerato, cioè $C$, allora l'attributo $A$ che abbiamo rimosso è estraneo (è come dire che $C$ dipende da $B$ e non da $A$).
Quindi al posto di $AB \rightarrow C$ scriviamo $B \rightarrow C$
$$G =\{A\rightarrow B, A \rightarrow C, B \rightarrow C, A \rightarrow B, B \rightarrow C\}$$
	

3. rimuoviamo le dipendenze ridondanti

	- posso subito eliminare le dipendenze $A \rightarrow B$ e $B \rightarrow C$ in quanto appaiono due volte nell'insieme
	$$G =\{A\rightarrow B, A \rightarrow C, B \rightarrow C\}$$
	- verifico se $A \rightarrow B$ è ridondante

		$A^+_{G \backslash\{A \rightarrow B\}} = AC \hspace{10mm}$ dato che $B$ non è presente nella chiusura allora $A\rightarrow B$ non è ridondante
	- verifico se $A \rightarrow C$ è ridondante

		$A^+_{G \backslash\{A \rightarrow C\}} = ABC \hspace{10mm}$ dato $C$ appartiene alla chiusura allora $A\rightarrow C$ è ridondante
	
	- verifico se $B \rightarrow C$ è ridondante

		$B^+_{G \backslash\{B \rightarrow C\}} = B\hspace{10mm}$ dato $C$ non appartiene alla chiusura allora $B\rightarrow C$ non è ridondante

Quindi la copertura canonica di $F$ è

$$G =\{A\rightarrow B, B \rightarrow C\}$$

# Decomposizione

Il modo per risolvere le anomalie di uno schema è attraverso la **decomposizione** dello schema in più tabelle, che rispettano delle proprietà chiamate *forme normali*, e che allo stesso tempo sono equivalenti allo schema originale.

Definizione formale di decomposizione (viene omesso l'insieme delle dipendenze $F$ da $R(T, F)$ per brevità):

> Dato uno schema $R(T)$, $\rho = \{R_1(T_1), ..., R_n(T_n)\}$ è una decomposizione di $R$ se e solo se l'unione di tutte le $T_i$ è uguale a $T$

Può essere interpretata anche come: le righe della tabella originale $R$ **sono sottoinsieme** delle righe generate dalla giunzione naturale tra tutte le righe in $R_i$ 

Inoltre per essere valida, una decomposizione deve soddisfare due condizioni:

- **preservare i dati**
- **preservare le dipendenze**

## Decomposizioni che preservano i dati

Una decomposizione preserva i dati se e solo se le righe della tabella originale $R$ **sono esattamente le stesse** delle righe generate dalla giunzione naturale di tutte le $R_i$ 

### Verificare se una decomposizione preserva i dati

> Sia $\rho = {R_1(T_1), R_2(T_2)}$ una decomposizione di $R(T, F)$. $ρ$ è una decomposizione  che preserva i dati se e solo se $T_1 \cap T_2 \to T_1 \in F^+$ oppure $T_1 \cap T_2 \to T_2 \in F^+$

Quindi basta dimostrare che $T_1$ che dipende da $T_1 \cap T_2$ si può derivare da $F$, oppure che $T_2$ che dipende da $T_1 \cap T_2$ si può derivare da $F$

Questo sappiamo già farlo, infatti in generale vale: $F \vdash X \to Y$ se e solo se $Y \subseteq X^+_F$

**Esempio**

Relazione originale: $R(A,B,C,D)$
Dipendenze: $F = \{A \to BC\}$
Decomposizione: $\{R_1(A,B,C), R_2(A,D)\}$

Quindi:
- $T_1 = \{A,B,C\}$ e $T_2 = \{A, D\}$
- $T_1 \cap T_2 = \{A\}$
- $A^+_F = \{A,B,C\}$

Abbiamo che $T_1 \subseteq \{A, B, C\}$ mentre $T_2 \nsubseteq \{A, B, C\}$
Ma dato che ci basta che valga per uno solo dei due $T$ allora **la decomposizione preserva i dati**

## Decomposizioni che preservano le dipendenze

Una decomposizione che preserva le dipendenze significa che l'unione delle dipendenze dei sottoschemi è equivalente alle dipendenze dello schema originale.

Per introdurre la definizione formale abbiamo bisogno prima di definire cosa si intende con **proiezione** di un insieme di dipendenze:

> Dato $R(T, F)$, e $T_i \subseteq T$, la proiezione di $F$ su $T_i$ è:

> $$\pi_{T_i}(F) = \{X \to Y \in F^+ | X, Y \subseteq T_i\}$$

Cioè l'insieme delle dipendenze derivabili da $F$ considerando solo gli attributi presenti nel sottoinsieme $T_i$

Formalmente possiamo definire una decomposizione che preserva le dipendenze come:

> La decomposizione $\rho = \{R_1(T_1), ..., R_n(T_n)\}$ di uno schema $R(T, F)$ preserva le dipendenze se e solo se $\bigcup_i\pi_{T_i}(F) \equiv F$

Quindi per dimostrare che una decomposizione rispetta questa proprietà facciamo uso della seguente proprietà

> Dati due insiemi di dipendenze $F$ e $G$, $F \equiv G$ se e solo se $F \subseteq G^+$ e $G \subseteq F^+$

Sia $G = \bigcup_i \pi_{T_i}(F)$, quello che dobbiamo fare è:

verificare che per ogni elemento di $F$ vale la regola del problema dell'implicazione (per ogni $X \to Y \in F$ abbiamo $Y \subseteq X^+_G$) senza bisogno di calcolare $G$. 

L'algoritmo è il seguente:


$\textbf{function }\mathrm{FC}(X, F, \rho)$
$\hspace{5mm}\text{res}_{\text {old }} \leftarrow \emptyset$
$\hspace{5mm}\text{res}_{\text {new }} \leftarrow X$
$\hspace{5mm}\textbf{while} \text{ res} _{\text {new }} \neq \text{res}_{\text {old }} \textbf{do}$
$\hspace{10mm}\textbf{for all } R_i\left(T_i\right) \in \rho \textbf{ do}$ 
$\hspace{15mm}\text{res} _{\text {new }} \leftarrow \text{res}_{\text {new }} \cup\left(\left(\text {res}_{\text {new }} \cap T_i\right)_F^{+} \cap T_i\right)$
$\hspace{5mm}\textbf{return } \text{res}_{\text{new}}$

$\textbf{function } \operatorname{PreserveDeps}(R(T, F), \rho)$
$\hspace{5mm}\textbf{for all } X \rightarrow Y \in F \textbf{ do }$
$\hspace{10mm}\textbf{if } Y \not \subseteq \mathrm{FC}(X, F, \rho) \textbf{ then return} \text{ False}$
$\hspace{5mm}\textbf{return} \text{ True}$

**Vediamo un esempio:**

$F = \{A \to B, B \to C, C \to A\}$
$\rho = \{R_1(A, B), R_2(B, C)\}$

-  1° iterazione di $\text{PreserveDeps}$, Partiamo dalla dipendenza $A \to B$
	- inizializzazione $\text{res}_{\text{new}} = \{A\}$
	
	considero $R_1(A, B)$
		
	- $(\{A\} \cap \{A, B\})^+_F \cap \{A,B\} = A^+_F \cap \{A,B\} = \{A, B, C\} \cap \{A, B\} = \{A, B\}$
	- $\text{res}_{\text{new}} = \{A\} \cup \{A, B\} = \{A, B\}$
	
	considero $R_2(B, C)$
		
	- $(\{A, B\} \cap \{B, C\})^+_F \cap \{B,C\} = B^+_F \cap \{B,C\} = \{A, B, C\} \cap \{B, C\} = \{B, C\}$
	- $\text{res}_{\text{new}} = \{A, B\} \cup \{B, C\} = \{A, B, C\}$

	Dato che $B \subseteq \{A, B, C\}$ allora fino ad adesso la proprietà è soddisfatta e possiamo proseguire

-  2° iterazione di $\text{PreserveDeps}$, passiamo alla dipendenza $B \to C$
	- inizializzazione $\text{res}_{\text{new}} = \{B\}$
	
	considero $R_1(A, B)$
		
	- $(\{B\} \cap \{A, B\})^+_F \cap \{A,B\} = B^+_F \cap \{A,B\} = \{A, B, C\} \cap \{A, B\} = \{A, B\}$
	- $\text{res}_{\text{new}} = \{B\} \cup \{A, B\} = \{A, B\}$
	
	considero $R_2(B, C)$
		
	- $(\{A, B\} \cap \{B, C\})^+_F \cap \{B,C\} = B^+_F \cap \{B,C\} = \{A, B, C\} \cap \{B, C\} = \{B, C\}$
	- $\text{res}_{\text{new}} = \{A, B\} \cup \{B, C\} = \{A, B, C\}$

	Dato che $C \subseteq \{A, B, C\}$ allora fino ad adesso la proprietà è soddisfatta e possiamo proseguire

-  3° iterazione di $\text{PreserveDeps}$, passiamo alla dipendenza $C \to A$
	- inizializzazione $\text{res}_{\text{new}} = \{C\}$
	
	considero $R_1(A, B)$
		
	- $(\{C\} \cap \{A, B\})^+_F \cap \{A,B\} = \empty^+_F \cap \{A,B\} = \empty$
	
	considero $R_2(B, C)$
		
	- $(\{C\} \cap \{B, C\})^+_F \cap \{B,C\} = C^+_F \cap \{B,C\} = \{A, B, C\} \cap \{B, C\} = \{B, C\}$
	- $\text{res}_{\text{new}} = \{C\} \cup \{B, C\} = \{B, C\}$

	considero nuovamente $R_1(A, B)$
			
	- $(\{B, C\} \cap \{A, B\})^+_F \cap \{A,B\} = B^+_F \cap \{A,B\} = \{A, B, C\} \cap \{A, B\} = \{A, B\}$
	- $\text{res}_{\text{new}} = \{B, C\} \cup \{A, B\} = \{A, B, C\}$

	Dato che $A \subseteq \{A, B, C\}$ allora fino ad adesso la proprietà è soddisfatta

Abbiamo testato tutte le dipendenze di $F$ e tutte sono soddisfatte, concludiamo che la **decomposizione preserva le dipendenze**


## Collegamento tra le due proprietà

In generale le due proprietà di preservazione di dati e dipendenze sono indipendenti tra loro, però esiste un teorema che le collega (utile per decomposizione non binarie)

> Sia $\rho \{R_1(T_1), ..., R_n(T_n)\}$ una decomposizione di $R(T, F)$ che preserva le dipendenze e tale che almeno uno degli sottoinsiemi $T_j$ sia superchiave per $R(T, F)$, allora $\rho$ preserva anche i dati

# Forme normali

Vediamo quali sono le **forme normali**, cioè le proprietà che le dipendenze funzionali dello schema devono rispettare per rendere lo schema privo di anomalie e che preservi i dati e le dipendenze.

Le principali forme normali sono:

- prima forma normale
- seconda forma normale
- terza forma normale
- Forma normale di Boyce-Codd

la prima e la seconda hanno solo una rilevanza storia, negli ultimi anni sono nati nuovi modelli relazionali che non richiedono di rispettare queste due proprietà.

Ci concentreremo invece sulle altre due forme normali, la **terza forma normale** e la **forma normale Boyce-Codd**

Nota: in generale **non si può garantire contemporaneamente** assenza di anomalie, preservazione dei dati e preservazione delle dipendenze

## Forma normale di Boyce-Codd

Uno schema relazionale $R(T, F)$ si dice in forma normale di Boyce-Codd (BCNF) se e solo se per ogni dipendenza funzionale derivabile da $F$ (escluse le dipendenze banali) si ha che **l'insieme a sinistra è una superchiave**.

In altri termini: $\forall X \rightarrow Y \in F^+, Y \nsubseteq X$ si ha che $X$ è superchiave

è stato dimostrato che è possibile mantenere la proprietà anche sostituendo $F^+$ con $F$, così da rendere la verifica di uno schema in BCNF in tempo polinomiale

Nel seguente esempio:
![enter image description here](https://i.ibb.co/kmgMz2D/image.png)

Immaginiamo di avere le seguenti dipendenze funzionali:

$F = \{\text{Articolo, Magazzino} \rightarrow \text{Quantità}\\
\hspace{9mm}\text{Magazzino} \rightarrow \text{Indirizzo}\}$

Lo schema non è in BCNF in quanto L'$\text{indirizzo}$ dipende dal magazzino, il quale non è una superchiave. Una dipendenza che viola la BCNF si dice **anomala**

Come conseguenze in questo caso abbiamo:

1. **Ridondaza di dati**: inserendo un nuovo articolo in un magazzino già presente occorre replicare l’indirizzo del magazzino.
Inoltre la modifica di un indirizzo di un magazzino deve essere riportata per ogni riga in cui appare tale magazzino.

2. **difficoltà di gestione**: per inserire un nuovo magazzino è necessario che ci sia almeno un articolo al suo interno.
Inoltre se si elimina l'ultimo articolo da un magazzino si perde anche il magazzino

## Conversione in BCNF

Gli algoritmi per rendere uno schema privo di anomalie sono chiamati algoritmi di **normalizzazione**.
Gli algoritmi di normalizzazione per rendere uno schema in BCNF sono detti algoritmi di **analisi** e si sviluppano nel seguente modo:

Sia $R(T, F)$ lo schema di partenza
1. Se $R$ è già in forma BCNF (a sinistra si hanno tutte superchiavi) allora si ritorna $R$
2. altrimenti seleziona la dipendenza $X \rightarrow Y \in F$ che viola BCNF e calcoli:
	- $T_1 = X_F^+$
	- $T_2 = X \cup (T \backslash T_1)$ 
3. calcoli:
	- $F_1 = \pi_{T_1}(F)$
	- $F_2 = \pi_{T_2}(F)$
	nota che la proiezione va fatta su tutte le combinazioni di $T_1$ e $T_2$, ad esempio se $T_1 = \{A, B, C\}$ bisogna calcolare le chiusure $A^+, B^+, C^+, AB^+, AC^+, BC^+$
	se però noti che ad esempio $A$ è una superchiave per $T_1$ allora non serve calcolare i sovrainsiemi di $A$ ($AB^+, AC^+$)
4. decomponi ricorsivamente $R_1(T_1, F_1)$ e $R_2(T_2, F_2)$ in $\rho_1$ e $\rho_2$
5. ritorna l'unione $\rho_1 \cup \rho_2$

### Esempio

Consideriamo lo schema $\text{Telefoni(\{Prefisso, Numero, Località\}, F)}$ con
$F = \{\text{Prefisso, Numero} \rightarrow \text{Località}\\
\hspace{9mm}\text{Località}\rightarrow \text{Prefisso}\}$

La dipendenza $\text{Località}\rightarrow \text{Prefisso}$ viola BCNF in quanto:

$$\text{Località}^+_F = \{\text{Località, Prefisso}\}$$

Cioè $\text{Località}$ non è una superchiave.

Applichiamo l'algoritmo di conversione:
- $T_1 = X_F^+ = \{\text{Località, Prefisso}\}$
- $T_2 = X \cup (T \backslash T_1) = \{\text{Località, Numero}\}$

Da cui:

- $R_1(\{\text{Località, Prefisso}\}, F_1)$
- $R_2(\{\text{Località, Numero}\}, F_2)$

Calcoliamo le proiezioni delle dipendenze $F_1$ usando le combinazioni di $T_1$:
- $\text{Località}^+_F = \{\text{Località, Prefisso}\}$ da cui ottengo $\text{Località} \rightarrow \text{Prefisso}$
- $\text{Prefisso}^+_F = \{\text{Prefisso}\}$ nessuna nuova dipendenza

Quindi $F_1 = \{\text{Località}\rightarrow \text{Prefisso}\}$

Calcoliamo le proiezioni delle dipendenze $F_2$ usando le combinazioni di $T_2$:
- $\text{Località}^+_F = \{\text{Località, Prefisso}\}$ nessuna nuova dipendenza (nota che Prefisso non è in T_2)
- $\text{Numero}^+_F = \{\text{Numero}\}$ nessuna nuova dipendenza

Quindi $F_2 = \emptyset$

Abbiamo quindi decomposto lo schema originale in due schemi:

$R_1(\{\text{Località, Prefisso}\}, \{\text{Località} \rightarrow \text{Prefisso}\})$
$R_1(\{\text{Località, Numero}\}, \emptyset)$

Entrambi gli schemi rispettano la BCNF.
Possiamo notare però un problema: la dipendenza $\{\text{Prefisso, Numero}\rightarrow\text{Località}\}$ è stata perduta

Questo caso è utile per mostrare come **non esistono algoritmi di decomposizione BCNF che riescono sempre a preservare le dipendenze**

È dimostrabile però che gli **algoritmi di decomposizione BCNF preservano i dati**

## Proprietà della BCNF

**Vantaggi**:
- garantisce assenza di anomalie
- preserva i dati
- la verifica ha costo polinomiale

**Svantaggi**:
- la conversione ha costo esponenziale
- non preserva le dipendenze

## Terza forma normale

Una normalizzazione che **preserva sia i dati che le dipendenze** e che è meno restrittiva, è la **terza forma normale** (3FN)

Uno schema relazionale $R(T, F)$ si dice in terza forma normale se e solo se per ogni dipendenza funzionale derivabile da $F$ (escluse le dipendenze banali) si ha che **l'insieme a sinistra è una superchiave** oppure che gli **attributi di destra meno quelli a sinistra** sono **primi**.

(Ricordiamo che un attributo è **primo** se esso fa parte di una chiave)

In altri termini: $\forall X \rightarrow Y \in F^+, Y \nsubseteq X$ si ha che $X$ è superchiave oppure $Y \backslash X$ sono primi

È stato dimostrato che è possibile mantenere la proprietà anche sostituendo $F^+$ con $F$, ma la verifica richiede comunque tempo **esponenziale**

Quindi per **verificare** che uno schema è in 3NF bisogna **calcolare le tutte le chiavi** e **per ogni elemento** di $F$ dobbiamo controllare o se $X$ è superchiave o se $Y$ fa parte di una delle chiave

Si può osservare dalla definizione che **ogni schema in BCNF è anche in 3FN** (non vale il contrario)

## Conversione in 3FN

L'algoritmo di conversione in 3FN viene chiamato di **sintesi** ed è **più efficiente** rispetto alla conversione in BCNF. Si sviluppa nel seguente modo:

Sia $R(T, F)$ lo schema di partenza

1. Costruisci $G$, una copertura canonica di $F$
2. in $G$ sostituisci ciascun insieme di dipendenze formato nel seguente modo $\{X \rightarrow A_1,  ..., X \rightarrow A_n\}$ in $X \rightarrow A_1, A_2, ..., A_n$
3. Per ogni $X \rightarrow Y \in G$ creare uno schema $S_i(X\cup Y)$
4. Eliminare eventuali schemi che sono contenuti in altri
5. Se la decomposizione non contiene alcuno schema $S_i$ in cui gli attributi costituiscono una superchiave per $R$, allora aggiungi un nuovo schema $S(W)$ dove $W$ è una chiave di $R$

### Esempio

$R(\,T=\{A, B, C, D\}, \, F=\{AB \rightarrow C, C \rightarrow D, D \rightarrow B\})$

Le dipendenze sono già in forma canonica, otteniamo quindi:

- $S_1(\{A, B, C\})$ tramite $AB \rightarrow C$
- $S_2(\{C, D\})$ tramite $C \rightarrow D$
- $S_3(\{B, D\})$ tramite $D \rightarrow B$

Nessuno schema è contenuto dentro un altro quindi non eliminiamo nessuno.
$AB$ è una superchiave (perche $AB^+ = ABCD$) e di conseguenza anche  $\{A, B, C\}$ è superchiave di $R$ allora non dobbiamo aggiungere nessuno schema e siamo giunti alla 3FN.

Una importante nota da considerare è che l'algoritmo per convertire in 3FN **non garantisce assenza di anomalie**

## Proprietà della 3FN

**Vantaggi**:
- preserva dati e dipendenze
- la conversione ha costo polinomiale

**Svantaggi**:
- la verifica ha costo esponenziale
- non garantisce assenza di anomalie

## Cosa scegliere per normalizzare

- **Strategia 1**: Convertiamo in BCNF per eliminare le anomalie, se ci accorgiamo di aver perso le dipendenze allora passiamo alla 3FN
- **Strategia 2**: Convertiamo in 3FN per preservare dati e dipendenze, e si spera di eliminare le anomalie (basta notare se in realtà si è uscita la BCNF)


# Vincoli di integrità

All'intero di una base di dati ci possono essere dei **vincoli integrità da rispettare**:

- Certi attributi devono avere sempre un valore
- Garantire la presenza di una chiave
- L'integrità referenziale
- Garantire determinati vincoli sui valori degli attributi

## Not null

Per indicare che un attributo deve sempre possedere un valore possiamo utilizzare il vincolo `NOT NULL`, nella fase di creazione della tabella

```sql
CREATE TABLE Movies (
	title CHAR(100) NOT NULL,
	year INT,
	length INT,
	genre CHAR(10)
)
```

## Unique

Possiamo utilizzare il vincolo `UNIQUE` per indicare che non esistono due righe che hanno lo stesso valore su tale attributo, cioè deve essere unico.

```sql
CREATE TABLE Movies (
	title CHAR(100) NOT NULL,
	year INT UNIQUE,
	length INT,
	genre CHAR(10)
)
```

possiamo anche rendere unico un insieme di più attributi:

```sql
CREATE TABLE Movies (
	title CHAR(100) NOT NULL,
	year INT,
	length INT,
	genre CHAR(10),
	UNIQUE(title, year)
)
```

In questo caso sono i valori accoppiati a dover essere unici (possono esserci più titoli uguali, basta che siano associati ad anni diversi)
Se uno dei due attributi è `NULL` allora l'unicità non può essere infranta.

## Primary key

Il vincolo di `primary key` ha lo stesso comportamento di `UNIQUE`, la principale differenza è che gli attributi che sono primary key non possono essere null (e poi il dbms tratta la primary key in modo particolare, in quanto viene anche usata dalle chiavi esterne)

```sql
CREATE TABLE Movies (
	title CHAR(100),
	year INT,
	length INT,
	genre CHAR(10),
	PRIMARY KEY(title, year)
)
```

## Foreign key

Questo vincolo stabilisce che un attributo della relazione è un riferimento (chiave esterna) alla `primary key` di un'altra tabella.
Le foreign key possono assumere il valore `NULL`

```sql
CREATE TABLE MovieExec (
	code INT PRIMARY KEY,
	name CHAR(50),
	address VARCHAR(255),
	netWorth INT
)

CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT,
	
	FOREIGN KEY (president) REFERENCES MovieExec(code)
)
```

Nella dichiarazione del vincolo stiamo dicendo quale attributo è foreign key e su quale attributo di quale tabella riferirsi.

Possiamo avere dei problemi di integrità referenziale sulla cancellazione e aggiornamento dell'attributo `code`, vediamo quali sono le politiche di integrità per gestire i casi di cancellazione e aggiornamento:

- `NO ACTION`: Se si tenta di aggiornare/cancellare una riga riferita da una chiave esterna verrà generato un **errore** e l'operazione non viene eseguita (**comportamento di default**)
- `CASCADE`: Se si aggiorna/cancella una riga riferita da una chiave esterna **l'aggiornamento/cancellazione viene propagata** anche alle righe della chiave esterna
- `SET NULL`: Se si tenta di aggiornare/cancellare una riga riferita da una chiave esterna, la chiave **esterna assumerà il valore `NULL`**
- `SET DEFAULT`: Se si tenta di aggiornare/cancellare una riga riferita da una chiave esterna, la chiave **esterna assumerà il suo valore di default**

(Le politiche dipendono dal linguaggio SQL utilizzato)

le politiche vanno specificate nel seguente modo

```sql
CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT,
	
	FOREIGN KEY (president) REFERENCES MovieExec(code)
		ON DELETE SET NULL
		ON UPDATE CASCADE
)
```

## CHECK

Tramite dei `CHECK` si possono imporre dei vincoli sui valori che possono assumere gli attributi.

Di fianco all'attributo va messo `CHECK` seguito da una espressione booleana messa tra parentesi.
- Si possono usare tutte le espressioni utilizzate nel costrutto `WHERE`
- Si possono utilizzare delle sotto-query (anche se in alcuni DBMS ciò non è supportato, tra cui Postgresql)
- Il vincolo viene controllato ad ogni modifica e inserimento

```sql
CREATE TABLE MovieExec (
	code INT PRIMARY KEY CHECK (code >= 1000),
	name CHAR(50),
	address VARCHAR(255),
	netWorth INT CHECK (netWorth > 0)
)

CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT,
	
	FOREIGN KEY (president) REFERENCES MovieExec(code)
)
```

Nota che si potrebbe pensare di simulare il comportamento di una foreign key nel seguente modo

```sql
CREATE TABLE Studio (
	name INT PRIMARY KEY,
	address VARCHAR(255),
	president INT CHECK (president in (select code from MovieExec))
)
```

ciò però non tiene conto dell'integrità in caso di modifiche o cancellazioni

### CHECK su righe

È anche possibile eseguire dei check sull'intera riga:

```sql
CREATE TABLE MovieExec (
	code INT PRIMARY KEY,
	name CHAR(50),
	address VARCHAR(255),
	netWorth INT,

	CHECK (code >= 1000 AND netWorth > 0)
)
```

Questo è necessario quando l'espressioni coinvolge più attributi che non sono indipendenti tra loro nell'espressione.

Nell'esempio precedente non è necessario il check sulla riga e generalmente check direttamente sugli attributi sono più efficienti

### Equivalenze logiche 

Equivalenze logiche che possono tornare utili:

| espressione di partenza | espressione equivalente |
|:--:|:--:|
| $A \implies B$ | $\lnot A \lor B$ |
| $\lnot(A \land B)$ | $\lnot A \lor \lnot B$ |
| $\lnot(A \lor B)$ | $\lnot A \land \lnot B$ |

l'implicazione a parole si trova scritta come:
- "Garantire che **tutti** coloro che soddisfano la/le proprietà $A$ **devono** soddisfare la/le proprietà $B$"
$$A \implies B$$

- "Garantire che **solo** coloro che soddisfano la proprietà $A$ **possono** soddisfare la proprietà $B$"
$$B \implies A$$

## Aggiornamento dei vincoli

È possibile aggiornare i vincoli, per farlo è necessario dargli un nome quando vengono creati, per fare ciò si utilizza la keyword `CONSTRAINT`:

```sql
CONSTRAINT nome_vincolo [FOREIGN KEY, UNIQUE, CHECK, ...]
```

La modifica può essere fatta solo attraverso una cancellazione di un vincolo e il reinserimento della versione aggiornata.
Cancellazione ed inserimento vengono fatti tramite una `ALTER TABLE`.

**cancellazione**:
```sql
ALTER TABLE nome_tabella DROP CONSTRAINT nome_vincolo;
```

**inserimento**:
```sql
ALTER TABLE nome_tabella ADD [CONSTRAINT nome_vincolo] definizione_vincolo... ;
```

Attenzione che al momento dell'inserimento tutti i valori già presenti devono rispettare il nuovo vincolo imposto, altrimenti il vincolo non può venir applicato.

## Asserzioni

Le asserzioni esprimono delle **proprietà globali da rispettare sull'interno schema**.

L'asserzione deve rimanere vera dopo ogni modifica al database.
I principali DBMS non le supportano in quanto è difficile scriverle in modo efficiente.

Esempio: "La durata complessiva dei film prodotto da ogni studio deve essere di almeno 500 minuti":

```sql
CREATE ASSERTION SumLengthCHECK (
	500 <= ALL(
		SELECT SUM(length)
		FROM Movies
		GROUP BY studio
	)
);
```

## Schema riassuntivo su check e asserzioni

| Soggetto | Dichiarazione | Controllo | Validità |
|--|--|--|--|--|
| Check su attributo | Attributo della tabella | Inserimento oppure modifica dell'attributo | In assenza di sotto-query |
| Check sulla riga| Tabella | Inserimento oppure modifica della riga | In assenza di sotto-query |
| Asserzione | Schema | Ogni modifica al database | Sempre |

Ricordiamo ancora che alcuni DBMS non supportano né le asserzioni né i check con le sotto-query


# Trigger

I Trigger sono una alternativa alla mancanza dei check con sotto-query e alle assertion.

**I trigger sono delle azioni che si attivano automaticamente al verificarsi di una modifica ad una tabella**

I trigger seguono un paradigma **Evento-Condizione-Azione**:
- Il trigger è associato ad un **evento** che ne determina l'attivazione, ad esempio INSERT, DELETE, UPDATE
- Una volta attivato il trigger controlla una **condizione**, se tale condizione è falsa allora il trigger termina
- Se la condizione è vera allora viene eseguita una **azione**

## Trigger per riga e per statement

SQL fornisce due tipi di trigger:

- **Trigger per riga**: eseguiti per ognuna delle righe coinvolte dall'evento. 
	Ci si riferisce alla riga coinvolta all'evento prima della sua attivazione `OLD ROW`
	Ci si riferisce alla riga coinvolta all'evento dopo della sua attivazione `NEW ROW`
- **Trigger per statement**: eseguiti una sola volta per evento.
	Ci si riferisce a tutte le righe coinvolte dall'evento prima della sua attivazione `OLD TABLE`
	Ci si riferisce a tutte le righe coinvolte dall'evento dopo la sua attivazione con `NEW TABLE`

## Before trigger e after trigger

In fase di definizione del trigger è possibile specificare se l'azione debba essere eseguita prima o dopo l'evento

- **Before trigger**: attivati prima dell'evento. Utilizzati solitamente per impedire l'esecuzione di una operazione o per modificarne preventivamente il comportamento
- **After trigger**: attivati dopo l'evento. Vedono lo stato dopo l’esecuzione di un’operazione e quindi sono talvolta necessari per motivi di espressività.

Un AFTER trigger performare un rollback dello stato della base di dati.
In generale l’uso di BEFORE trigger è preferibile.

## Esempio 1

I trigger forniscono un modo indiretto per mantenere **invarianti globali**: senza lo stile dichiarativo delle asserzioni.

Bisogna porsi certe domande per determinare come definire il trigger:

Supponiamo di volere utilizzare un trigger per garantire che non sia mai possibile abbassare uno stipendio:

1. **Quali operazioni possono violare l’invariante?**
	L’invariante può essere violata da un’operazione di aggiornamento
2. **Il mantenimento dell’invariante può essere controllato per ogni riga coinvolta dall’operazione oppure no?**
	Si, perché l’informazione è contestuale alla riga modificata
4. **Cosa bisogna fare prima o dopo dell’operazione per garantire il
mantenimento dell’invariante?**
Impedire l’aggiornamento della riga (BEFORE) oppure riportare lo stipendio al valore originale (AFTER)

```sql
CREATE TRIGGER MyTrigger
AFTER UPDATE OF stipendio ON MovieExec
REFERENCING OLD ROW AS OldTuple, NEW ROW AS NewTuple
FOR EACH ROW
WHEN (OldTuple.stipendio > NewTuple.stipendio)
	UPDATE MovieExec
	SET stipendio = OldTuple.stipendio
	WHERE code = NewTuple.code;
```

## Esempio 2

Supponiamo di volere utilizzare un trigger per garantire che la media degli stipendi non scenda mai sotto 500.000:

1. **Quali operazioni possono violare l’invariante?**
	L’invariante può essere violata da un’operazione di inserimento, aggiornamento o cancellazione
2. **Il mantenimento dell’invariante può essere controllato per ogni riga coinvolta dall’operazione oppure no?**
	Visto che la media è un’informazione globale della tabella, non possiamo ricorrere ad un controllo puntuale per riga. Optiamo per un trigger per statement
3. **Cosa bisogna fare prima o dopo dell’operazione per garantire il
mantenimento dell’invariante?**
Possiamo mantenere l’invariante annullando l’operazione che l’ha violata, cioè riportando la tabella allo stato originale (AFTER)


```sql
CREATE TRIGGER AvgNetWorthTrigger
AFTER UPDATE ON MovieExec
REFERENCING OLD TABLE AS OldStuff, NEW TABLE AS NewStuff
FOR EACH STATEMENT
WHEN (500000 > (SELECT AVG(netWorth) FROM MovieExec))
BEGIN
	DELETE FROM MovieExec
	WHERE (name, address, code, netWorth)
		IN (SELECT * FROM NewStuff);
	INSERT INTO MovieExec (SELECT * FROM OldStuff);
END;
```
questo trigger è per l'operazione di UPDATE, bisognerebbe aggiungere anche quelli per la DELETE e INSERT

## Trigger attivi e passivi

- **Trigger passivi**: tali trigger provocano il fallimento di un’operazione sotto determinate condizioni. 
	Usi tipici:
	- Definizione di vincoli di integrità (es. impedire l'abbassamento degli stipendio)
	- Controlli dinamici di autorizzazione (es. si possono inserire dati solo se il codice del dipartimento coincide con quello dell’utente che ha richiesto l’operazione)

- **Trigger attivi**: tali trigger modificano, anche in modo complesso, lo stato della base di dati in corrispondenza di certi eventi.
Usi tipici:
	- Definizione di vincoli di integrità (es. CASCADE)
	- Meccanismi di auditing e logging
	- Definizione di business rules (regole aziendali)

## Vantaggi e svantaggi

**Vantaggi**:

- I trigger sono gestiti internamente dal DBMS, quindi non è possibile raggirarli
- anche chi utilizza la base di dati senza usare un codice applicativo è soggetto al controllo dei trigger
- Per il precedente motivo è più robusto centralizzare un’invariante in un trigger che sparpagliare i controlli all’interno del codice applicativo
- Per fare auditing e logging, i trigger sono l’unico strumento veramente robusto per tali compiti, dato che il DBMS ha completa visibilità delle operazioni effettuate sulle tabelle

**Svantaggi**:

- dato che sono stati implementati prima nei sistemi commerciali e poi nello standard SQL, i sistemi commerciali non seguono lo standard e spesso sono diversi tra loro. (non considerano di adattarsi allo standard perché romperebbe la compatibilità con le vecchie versioni)
- I trigger sono difficili da debuggare e poco visibili in generale.

### Vincoli vs trigger

Generalmente è conveniente fare uso dei vincoli fornite dal DBMS quando possibile al posto dei trigger. I vincoli sono più semplici, brevi e gestiti meglio dal DBMS.

I trigger sono necessari quando le invarianti coinvolgono più tabelle

## Trigger in Postgres

la sintassi per creare dei trigger in Postgres è la seguente

```sql
CREATE TRIGGER name { BEFORE | AFTER } { evt [ OR ... ] } ON table_name
[ REFERENCING { { OLD | NEW } TABLE AS tab } [ ... ] ]
[ FOR EACH { ROW | STATEMENT } ]
[ WHEN ( condition ) ]
EXECUTE FUNCTION func ( args )
```

Le differenze rispetto alla standard sono:

- La possibilità di usare `OR` per associare uno stesso trigger a più eventi
- non è possibile riferire `OLD ROW` e `NEW ROW` in `REFERENCING`, ma è presente un modo custom per farlo
- il corpo del trigger deve essere definito in una funzione separata

## Trigger function

Postgres supporta vari linguaggi per scrivere le funzioni, il suo linguaggio nativo è **PL/pgSQL**.

Il comando `CREATE TRIGGER` accetta solamente delle **trigger function**, cioè funzioni:
- con `trigger` come tipo di ritorno
- senza argomenti, il passaggio dei parametri avviene in modo custom

esempio di creazione di una trigger function:
```sql
CREATE FUNCTION my_trigger() RETURNS trigger AS $$
	<definition>
$$ LANGUAGE plpgsql;
```

All'interno di una funzione si possono scrivere degli **statement**, cioè istruzioni SQL, condizioni (`IF`) oppure `RETURN`.

Quando una trigger function viene invocata vengono create delle variabili speciali, tra cui:

- `NEW`: la nuova riga in caso di operazioni `INSERT/UPDATE` per trigger per riga (vale NULL in caso di `DELETE`)
- `OLD`: la vecchia riga in caso di operazioni `DELETE/UPDATE` per trigger per riga (vale NULL in caso di `INSERT`)
- `TG_NARGS`: numero di argomenti passati tramite la `CREATE TRIGGER`
- `TG_ARGV`: vettore degli argomenti

In caso di trigger per statement e di AFTER trigger per riga la funzione ritorna sempre NULL.
Mentre per i BEFORE trigger per riga si ha:
- Ritorno NULL per indicare che l'operazione è stata abortita
- Ritornare la riga che sarà inserita/aggiornata nel caso di `INSERT` o `UPDATE`
- Ritornare NEW in caso di `INSERT` o `UPDATE`  e ritornare OLD nel caso di `DELETE` (così da non interferire che l'operazione)

## Trigger per riga

```sql
CREATE TRIGGER name { BEFORE | AFTER } { evt [ OR ... ] }
ON table_name
[ REFERENCING { { OLD | NEW } TABLE AS tab } [ ... ] ]
FOR EACH ROW
[ WHEN ( condition ) ]
EXECUTE FUNCTION func ( args )
```

- Un BEFORE trigger per riga può prevenire operazioni o modificarle
- La clausola WHEN può fare riferimento a OLD e NEW per specificare una condizione di attivazione (non si possono fare sotto-query)
- Con un AFTER trigger si usa REFERRENCING anche per vedere i cambiamenti complessivi nell'intera tabella oltre che ai cambiamenti alle singole righe

## Trigger per statement

```sql
CREATE TRIGGER name { BEFORE | AFTER } { evt [ OR ... ] }
ON table_name
[ REFERENCING { { OLD | NEW } TABLE AS tab } [ ... ] ]
FOR EACH STATEMENT
EXECUTE FUNCTION func ( args )
```

- un trigger per statement viene eseguito una volta anche se nessuna riga è coinvolta nell'operazione scatenante
- Con un AFTER trigger si usa REFERRENCING anche per vedere i cambiamenti complessivi nell'intera tabella

## Ordine di esecuzione

1. I **BEFORE trigger per statement** si attivano per primi, prima che l'evento abbia inizio
2. i **BEFORE trigger per riga** si attivano immediatamente prima di operare sulla riga coinvolta
3. gli **AFTER trigger per riga** si attivano alla fine dell'evento
4. gli **AFTER trigger per statement** si attivano per ultimi

## Specificità di Postgres

- I trigger per riga hanno visibilità dei cambiamenti effettuati sulle righe precedenti ma l'ordine di visita non è predicibile.
- Se più trigger sono definiti per lo stesso evento (sulla stessa tabella) essi vengono eseguiti in ordine **alfabetico**
- Un trigger può attivare ricorsivamente altri trigger, causando potenziali ricorsioni infinite

## Esempio

dato il seguente modello logico

```
Product(maker, model(PK), type)
PC(model*, speed, ram, hd, price)
Laptop(model*, speed, ram, hd, screen, price)
Printer(model*, color, type, price)
```

Creiamo un trigger per gestire l'invariante "Nessun produttore di PC può anche produrre laptop".

poniamoci le classiche domande

- Quali operazioni possono violare l’invariante? INSERT o UPDATE su Product
- Il mantenimento dell’invariante può essere controllato per ogni riga coinvolta dall’operazione oppure no? Sì, è un controllo locale
- Cosa bisogna fare prima o dopo dell’operazione per garantire il mantenimento dell’invariante? Bloccare l’operazione sulla riga (BEFORE)

**trigger**:
```sql
CREATE TRIGGER NoPCLaptop
BEFORE INSERT OR UPDATE
ON Product
FOR EACH ROW
EXECUTE FUNCTION no_pc_laptop();
```

**trigger function**:
```sql
CREATE FUNCTION no_pc_laptop() RETURNS trigger AS $$
BEGIN
	IF (NEW.type = ’pc’ AND NEW.maker IN (SELECT maker FROM Product WHERE type = ’laptop’)) THEN
		RETURN NULL;
	END IF;
	IF (NEW.type = ’laptop’ AND NEW.maker IN (SELECT maker FROM Product WHERE type = ’pc’)) THEN
		RETURN NULL;
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```


# Funzioni e procedure

Oltre ad utilizzare le funzioni all'interno dei trigger, si possono creare funzioni per altri scopi:

- Incapsulare funzionalità di uso comune per facilitarne il riutilizzo
- Offrire una interfaccia più semplice per chi è ancora alle prime armi
- Raggruppare una sequenza di operazioni di cui non ci interessano i risultati intermedi.

Vediamo come definire le funzioni nel linguaggio *PL/pgSQL* di postgres.

```sql
CREATE FUNCTION my_fun (<args>) RETURNS <type> AS $$
<dichiarazione di variabili>
BEGIN
	<corpo della funzione>
END;
$$ LANGUAGE plpgsql;
```

Vediamo un esempio di funzione

```sql
CREATE FUNCTION my_concat(a text, b text, uppercase boolean = false) RETURNS text AS $$
BEGIN 
	IF uppercase THEN
		RETURN UPPER(a || ’ ’ || b);
	END IF;
	RETURN LOWER(a || ’ ’ || b);
END;
$$ LANGUAGE plpgsql;
```

## Dichiarazione di variabili

La dichiarazione delle variabili fa fatta nella posizione apposita, la lista di variabili va messa a seguire della keyword `DECLARE`

Una variabile si dichiara secondo il seguente costrutto

```sql
name [CONSTANT] type [NOT NULL] [:= expr OR = expr];
```

Quindi va prima il nome della variabile seguito dal tipo.
I tipi possono essere tutti quelli supportati di SQL.

L'assegnazione tramite `:=` è equivalente all'uso di `=`, lo standard di PL/SQL è `:=`

Alcuni tipi di dato particolari sono:

- `variable%TYPE` permette di definire il tipo che è lo stesso tipo di una variabile oppure di una colonna del database. Se ad esempio si ha una colonna chiamata `user_id` nella tabella `users`, per dichiarare una nuova variabile con lo stesso tipo di `user_id` si fa:
	`my_var users.user_id%TYPE;`
- `table_name%ROWTYPE` permette di definire il tipo che è il tipo di una riga di una determinata tabella
- `RECORD` come il precedente solo che è più generico e si adatta ad ogni assegnamento (un accesso prima dell'assegnamento causerà un errore)

Esempi di dichiarazioni:
```sql
DECLARE
	user_id integer;
	quantity numeric(5);
	url varchar;
	myrow tablename%ROWTYPE;
	myfield tablename.columnname%TYPE;
	arow RECORD;
```

### Assegnamento

L'assegnamento si fa con la sintassi:

```sql
var = expr
```

È possibile salvare la prima riga di una query in una variabile, nel seguente modo:

```sql
SELECT expr INTO var FROM ...
```

## Ritorno

Se la funzione ritorna un singolo valore si può usare la sintassi:

```sql
RETURN expr;
```

mentre se si vuole ritornare una riga, è possibile utilizzare dei parametri di output:

```sql
CREATE FUNCTION sum_n_product (x int, y int, OUT sum int, OUT prod int) AS $$
BEGIN
	sum = x + y;
	prod = x * y;
END;
$$ LANGUAGE plpgsql;
```

Se una funzione ritorna un insieme di valori, l'insieme deve essere costruito in maniera incrementale:

```sql
RETURN NEXT expr; -- aggiunge un record al risultato
RETURN QUERY query; -- aggiunge un insieme al risultato
RETURN 	-- ritorna il risultato
```

Nel tipo di ritorno della funzione si può usare `SETOF t` per dire di restituire un insieme di elementi di tipo `t`

Esempio

"Data la tabella `PC(model, speed, ram, hd, price)`, definire una funzione che ritorna un insieme di modelli associati ai rispettivi prezzi, cioè solo la prima e la quinta colonna della tabella."

- un primo modo per costruire la funzione è 

	```sql
	CREATE FUNCTION f() RETURNS SETOF RECORD AS $$
	BEGIN
		RETURN QUERY SELECT model, price FROM pc;
	END;
	$$ LANGUAGE plpgsql;
	```

	Utilizzo

	```sql
	SELECT m,p FROM f() AS (m character(20), p real);
	```


- Un secondo modo è

	```sql
	CREATE FUNCTION f()
	RETURNS TABLE(m integer, p real) AS $$
	BEGIN
		RETURN QUERY SELECT model, price FROM pc;
	END;
	$$ LANGUAGE plpgsql;
	```
	Utilizzo
	```sql
	SELECT * FROM f();
	```

Nota che la sintassi 

```sql
CREATE FUNCTION f()
RETURNS TABLE(m character(20), p real)
```
è equivalente a
```sql
CREATE FUNCTION f(OUT m character(20), OUT p real)
RETURNS SETOF RECORD
```

## Condizioni

La sintassi delle condizioni è la seguente:

```sql
IF <boolean_expr> THEN
	statements
ELSIF boolean-expr THEN
	statements
ELSE 
	statements
END IF;
```

## Cicli

Il ciclo **while** si fa nel seguente modo

```sql
WHILE <boolean_expr> LOOP
	statements
END LOOP;
```

Il ciclo **for** si fa nel seguente modo

```sql
FOR name IN [ REVERSE ] <int_expr> ... <int_expr> [ BY <int_expr> ] LOOP
	statements
END LOOP;
```

Si può usare il for per loopare tra i risultati di una query

```sql
FOR target IN query LOOP
	statements
END LOOP;
```

Si può usare il for-each per loopare tra gli elementi di un array

```sql
FOREACH target IN ARRAY expr LOOP
	statements
END LOOP
```

## Variabile FOUND

Ciascuna funzione possiede una variabile `FOUND`:

1. `SELECT INTO` imposta `FOUND` a `true` se viene assegnata una riga alla variabile corrispondente, `false` altrimenti
2. `UPDATE, INSERT, DELETE` impostano `FOUND` a `true` se almeno una riga è stata toccata, `false` altrimenti
3. un ciclo FOR imposta `FOUND` a `true` se ha iterato almeno una volta, `false` altrimenti
4. `RETURN QUERY` imposta `FOUND` a `true` se la query ha ritornato almeno una riga, `false` altrimenti

## Eccezioni

Una funzione può riportare messaggi oppure errori

```sql
RAISE [ level ] 'format' [, expr [, ... ]] [USING option = expr];
```

- `level` indica il livello di severità dell'errore
- `format` rappresenta il messaggio da riportare
- la clausola `USING` permette di popolare info aggiuntive sull'errore

Si può rilanciare una eccezione catturata usando `RAISE` senza parametri

Nota: tutti i cambiamenti al database effettuati nel blocco che ha sollevato l'eccezione vengono annullati

### Catturare l'eccezione

Per catturare una eccezione si usa la seguente sintassi

```sql
BEGIN
	statements
EXCEPTION
	WHEN cond [ OR cond ... ] THEN handler
	[ WHEN cond [ OR cond ... ] THEN handler ... ]
END;
```

## Procedure

Una procedura è una funzione che non ritorna niente.

```sql
CREATE PROCEDURE my_proc (<args>) AS $$
<dichiarazione di variabili>
BEGIN
	<corpo della procedura>
END;
$$ LANGUAGE plpgsql;
```

Una procedura si può chiamare con il comando `CALL`


# Sicurezza dei database

Tutti i principali DBMS implementano meccanismi di:
- **autenticazione**: cioè identificare chi sta operando sul database
- **autorizzazione**: determinare chi può fare cosa tramite dei permessi

**controllo degli accessi**: meccanismo con cui viene verificato che chi richiede un'operazione sia effettivamente autorizzato per farla.

## Autenticazione

Solitamente l'autenticazione è effettuata tramite l'utilizzo di **username e password**

Vediamo il modo in cui Postgres gestisce gli utenti.
La creazione di un utente avviene con il seguente comando:

```sql
CREATE USER NomeUtente WITH PASSWORD NuovaPwd
```

Ulteriori opzioni sono:

- `SUPERUSER`: l'utente supera tutti i controlli di sicurezza
- `CREATEDB`: l'utente può creare nuovi database
- `VALID UNTIL ts`: specifica la scadenza della password

Postgres gestisce il processo di autenticazione tramite un file `pg_hba.conf`.
È possibile modificare il **metodo di autenticazione**, che è definito da 4 opzioni:
- tipo di connessione: locale, remota, cifrata, ...
- database: lista di database
- utente: lista di utenti
- indirizzo: hostname, indirizzo IP, range di indirizzi IP

Esistono tanti metodi di autenticazione: trust, reject, password, MD5, SCRAM, ...
Ce ne sono di più e meno sicuri.

https://www.postgresql.org/docs/current/auth-pg-hba-conf.html

## Autorizzazione

Dopo aver autenticato l'utente il DBMS può applicare le **politiche di autorizzazione**.

Regole base di autorizzazione:
- Quando un oggetto viene creato (ad esempio una tabella), il **creatore ne diventa il proprietario** e ne ha il pieno controllo
- Gli altri utenti possono accedere all'oggetto solamente rispettando i propri permessi
- Solo il creatore dell'oggetto può eliminare o alterare la definizione di un oggetto

I **permessi** si possono definire su:
- SELECT
- INSERT
- UPDATE
- DELETE
- TRIGGER
- EXECUTE

Ad esempio nella seguente query

```sql
INSERT INTO Studio(name)
	SELECT DISTINCT studioName
	FROM Movies
	WHERE studioName NOT IN (SELECT name FROM Studio);
```
l'utente che la vuole eseguire deve avere i permessi su:
- `INSERT(name)` sulla tabella `Studio`
- `SELECT(studioName)` sulla tabella `Movies`
- `SELECT(name)` sulla tabella `Studio`

Nota che i permessi si possono restringere su un sottoinsiemi di attributi, oppure permettere l'esecuzione del comando in generale

### Permesso TRIGGER

Per quanto riguarda il **permesso TRIGGER** su una tabella, esso abilita la definizione di nuovi trigger arbitrari su di essa.
Il creatore del trigger deve avere sia il permesso TRIGGER sia i permessi richiesti per eseguire l'azione del trigger.
Quando un trigger **si attiva esso viene eseguito con i permessi del suo creatore**, indipendentemente da chi lo ha attivato.

Per questi motivi bisogna prestare molta attenzione a questo permesso.

### Permessi su funzioni

Quando si dichiara una funzione è possibile specificarne i permessi attraverso le opzioni:
- `SECURITY INVOKER`: la funzione viene eseguita con i permessi del chiamante (opzione di default)
- `SECURITY DEFINER`: la funzione viene eseguita con i permessi del creatore

## Assegnare i permessi

Il creatore dello schema relazionale possiede tutti i permessi e può concedere dei permessi ad altri utenti, tramite la seguente sintassi:

```sql
GRANT ListaPermessi ON Elemento TO ListaUtenti
```

- è possibile utilizzare `ALL PRIVILEGES` per indicare tutti i permessi
- è possibile utilizzare `PUBLIC` per autorizzare tutti gli utenti (anche quelli non ancora esistenti)

## Delegare permessi

È possibile anche permettere a degli utenti di concedere un **sottoinsieme dei loro permessi** ad altri utenti, tramite la seguente sintassi

```sql
GRANT ListaPermessi ON Elemento TO ListaUtenti
WITH GRANT OPTION
```
Con `WITH GRANT OPTION` si permette a `ListaUtenti` di delegare a loro volta i permessi

## Diagramma di autorizzazione

Un diagramma di autorizzazione è un grafo orientato in cui i nodi sono etichettati con una tripla $\text{(utente, permesso, m)}$ dove m può assumere i seguenti significati:
- $\bot$ il permesso gli è stato assegnato ma non può essere delegato
- $\star$ il permesso è stato assegnato e può essere delegato
- $\star \star$ il permesso è concesso in qualità di proprietario

![enter image description here](https://i.ibb.co/pdVLkwR/image.png)

## Revocare i permessi

È possibile revocare dei permessi assegnati in precedenza tramite la sintassi:

```sql
REVOKE ListaPermessi ON Elemento FROM ListaUtenti
```

Si può aggiungere al comando:
- `CASCADE`: il permesso viene ricorsivamente revocato a tutti gli utenti che lo hanno ricevuto **solamente** dal target della revoca
- `RESTRICT`: fa fallire la revoca se essa comporterebbe la revoca di permessi ad altri utenti
	
È possibile revocare solamente la possibilità di delega tramite il comando:

```sql
REVOKE GRANT OPTION FOR ListaPermessi ON Elemento FROM ListaUtenti
```

È possibile che un utente possieda un permesso $p$ ma anche una variante più specifica $p^-$ sullo stesso oggetto.
Revocare $p^-$ non ha alcun effetto su $p$.
Se invece viene revocato $p$, il DBMS può decidere se:
- revocare anche $p^-$
- lasciare $p^-$

## Ruoli

Assegnare ad ogni utente determinati permessi manualmente diventa oneroso.
Spesso si utilizzano dei **ruoli**, cioè un collettore di permessi etichettato con un nome.
Tale nome viene assegnato agli utenti che dovrebbero possedere quella collezione di permessi

Si può creare un nuovo ruolo nel seguente modo:

```sql
CREATE ROLE NomeRuolo;
```
una volta creato è possibile usare:
- `GRANT` per assegnare permessi al ruolo e assegnare ruoli ad utenti
- `REVOKE` per rimuovere permessi al ruolo e rimuovere ruoli ad utenti

I ruoli assegnati ad un utente non sono attivi di default, per attivarli bisogna fare:

```sql
SET ROLE NomeRuolo;
```

L'utilizzo degli ruoli porta i seguenti vantaggi:
- i ruoli raggruppano permessi logicamente collegati
- è molto meno costoso assegnare ruoli che permessi, visto che ce ne sono meno
- è molto più difficile sbagliare l’assegnazione di un ruolo che di un insieme di permessi
- le operazioni di revoca sono analogamente semplificate
- i ruoli non sono attivi di default, contrariamente ai permessi: questo è più fedele al principio del minimo privilegio

In **Postgres** non c'è una vera distinzione tra Utente e Ruolo, infatti `CREATE USER` è un alias di `CREATE ROLE WITH LOGIN`

Alcuni dettagli:

- l’opzione `CREATEROLE` consente al ruolo di creare altri ruoli. Questo può condurre a scalate di privilegi, da usare con attenzione!
- ruoli assegnati con `WITH ADMIN OPTION`, permette agli utenti con tale ruolo di assegnare il ruolo ad altri utenti.
- è possibile assegnare ruoli ad altri ruoli, introducendo una forma di ereditarietà nei permessi
- il diagramma di autorizzazione è costruito attorno ai ruoli: se un permesso viene assegnato tramite un ruolo, qualsiasi altro utente con quel ruolo può revocarlo

Le opzioni `INHERIT` e `NOINHERIT` permettono di gestire l'ereditarietà dei ruoli.

## SQL injection

La SQL injection è un tipo di vulnerabilità che sfrutta la manipolazione di caratteri di una stringa per eseguire delle istruzioni SQL dove non dovrebbe essere possibile.

Il tipico caso è quello di un form di autenticazione: una pagina web che richiede utente e password per ottenere dei dati dell'utente, nel server otteniamo queste due informazioni e costruiamo una stringa che corrisponde ad una query SQL.

```python
user = get_parameter($u)		# ottine l'username dal form
password = get_parameter($p)	# ottine la password dal form
statement = "SELECT * FROM users WHERE name = '" + user + "' AND pwd = '" + password + "';"
```

se l'attaccante mettesse come password la stringa: `' OR '1' = '1`

la query diventerebbe:

```python
statement = "SELECT * FROM users WHERE name = ’marco’ AND pwd = ’’ OR ’1’ = ’1’;"
```

La condizione sul `WHERE` sarebbe vera e quindi si riuscirebbe a ottenere tutte le informazioni dell'utente anche senza il bisogno della password.

Per prevenire l'SQL injection ci sono 2 approcci:
- **sanitizzazione**: rimuovere caratteri per rendere l'input "sicuro" oppure verificare il contenuto prima di fare la query
- **encoding**: rimpiazzare caratteri speciali

Solitamente è più comune utilizzare l'encoding

## Escaping

L'**escaping** è una tecnica di encoding che converte dei caratteri particolare nella loro versione letterale affidandosi a funzioni di libreria che fanno questo

```python
userName = escape(get_parameter($u))	# escape dell'username
pwd = escape(get_parameter($p))			# escape della password
statement = "SELECT * FROM users WHERE name = ’" + userName + "’ AND password = ’" + pwd + "’;"
```
passando come prima la password `’ OR ’1’ = ’1`
otteniamo la query

```python
statement = "SELECT * FROM users WHERE name = ’marco’ AND password = ’’’ OR ’’1’’ = ’’1’;"
```

che non funzionerà

## Prepared statement

Un **prepared statement** è un comando SQL contenente dei buchi contrassegnati con il carattere `?`, e passando come parametro aggiuntivo altri valori essi vengono sostituiti in modo disciplinato al posto di `?`

```python
userName = get_parameter($u)
pwd = get_parameter($p)
statement = "SELECT * FROM users WHERE name = ? AND password = ?;"
statement.setString(1, userName);	# sostituzione del primo '?'
statement.setString(2, pwd);		# sostituzione del secondo '?'
```

## Sanitizzazione

Immaginiamo di avere un menù a tendina da cui selezionare la tabella del database da cui ottenere dei dati

```python
table = get_parameter($t)
statement = "SELECT * FROM " + table;
```

In questo caso il *prepared statement* non si può usare per il nome di un tabella, è quindi importante controllare il contenuto della variabile `table` prima di effettuare la query

```sql
table = get_parameter($t);
if (table == "Student" || table == "Teacher") {
	statement = "SELECT * FROM " + table;
}
else {
	throw new Exception("Unexpected!");
}
```


# Indici e viste materializzate

## Indici

Lavorare con database contenenti decine o centinaia di migliaia di record può risultare in pessime prestazioni quando dobbiamo andare a ricercare qualcosa di specifico.
Ad esempio

```sql
SELECT *
FROM Movies
WHERE studio = ’Disney’ AND year = 2012;
```

Se nel database ci sono migliaia di film, per ottenere questa query dovremmo controllare, per ogni film, le condizioni del `where` per poterli selezionare o meno.

Gli **indici** sono una struttura dati ausiliaria che permette di accedere in maniera più efficiente alle righe rispetto ad una ricerca lineare.

Per sfruttare gli indici bisogna scegliere degli attributi su cui ordinare tutte le righe. Una volta ottenute le righe ordinate (in modo lessicografico) secondo quegli attributi, viene creato un *Binary Search Tree* che consente di trovare le righe interessate in tempo logaritmico.

Nota che il BST è una struttura **ausiliaria** quindi l'ordine originale delle righe nel database non viene modificato.
Il BST conterrà infatti dei puntatori alle righe della tabella.

### Tipi di indici

Possiamo creare degli indici per **attributo singolo** oppure per un **insieme di attributi**, in quest'ultimo caso è importante l'ordine in cui si mettono:
Se ad esempio in un database di film si vuole creare un indice che ordina per anno e per studio di produzione, dobbiamo pensare se ci saranno più film divisi per anno oppure per studio:

- Se ci sono tanti anni diversi e molti studi uguali allora l'indice migliore sarebbe `Indice(studio, anno)`
- Se ci sono tanti studi diversi e molti anni uguali allora l'indice migliore sarebbe `Indice(anno, studio)`

### Query che ne traggono vantaggio

Le query che traggono vantaggio dagli indici sono quelle che filtrano i risultati con gli stessi attributi in cui sono stati ordinati gli indici (ed è anche l'importante l'ordine in caso di insieme di attributi):

Se assumiamo di aver fatto un `Indice(anno, studio)` le query che ne trarranno vantaggio sono del tipo:

- `SELECT * FROM Movies WHERE year = 2012 AND studio = 'Sony'`
- `SELECT * FROM Movies WHERE year = 2012`
- `SELECT * FROM Movies WHERE year > 1998 AND year < 2012`
- `SELECT * FROM Movies WHERE year = 2012 ORDER BY studio`

mentre le query che non ne traggono vantaggio sono ad esempio:
- `SELECT * FROM Movies WHERE studio = 'Sony'`
	(perché nell'indice le righe sono prima ordinate per anno, ma in questa query non ci sono filtri sull'anno)
- `SELECT * FROM Movies WHERE regista = 'Pippo'`
	non abbiamo nessun ordinamento per il `regista`

### Comparazione di indici

Assumiamo che ci siano 10.000 film e che la Disney ne abbia prodotti 200, di cui solo 5 nel 2012.

Vediamo quanti record la seguente query dovrà controllare con varie possibilità di indici:

```sql
SELECT *
FROM Movies
WHERE studio = ’Disney’ AND year = 2012;
```

- senza utilizzo degli indici: controllo 10.000 righe
- `Indice(studio)`: controllo 200 righe
- `Indice(studio, year)`: controllo 5 righe

### Pagine in memoria

L'analisi del costo di una query utilizzando solo quante righe deve ispezionare non è molto preciso in quanto la memoria RAM dei computer funziona con le pagine:
- in una pagina tipicamente sono presenti molte tuple
- richiedere una singola tupla comporta che una intera pagina sia caricata in memoria
- Una volta che la pagina è caricata in memoria, accedere a tutti i suoi contenuti è molto poco costoso perché la memoria RAM è molto rapida

## Pro e contro degli indici

### Pro
 Il principale vantaggio dell'utilizzo degli indici è il grande aumento di performance sulle query che utilizzano l'attributo specificato nell'indice.

In generale conviene utilizzare gli indici:
- Sulle chiavi
- Sulle chiavi esterne
- Su attributi raramente modificabili

### Contro
Un grande contro è che quando si fanno operazioni di inserimento e cancellazione, oltre che al database normale anche l'albero generato dall'indice va aggiornato.

In generale non conviene utilizzare gli indici:
- Su tabella piccole (in quanto il guadagno di performance sarebbe impercettibile)
- Su attributi i cui valori hanno poche varianti (ad esempio un attributo booleano)
- Su attributi modificati frequentemente

## Definire gli indici

**Creare un indice**

```sql
CREATE INDEX NomeIndice ON NomeTabella (Attributi);
```

**Eliminare un indice**

```sql
DROP INDEX NomeIndice;
```

Alcuni DBMS possono suggerire automaticamente degli indici basandosi sulle prestazioni delle query fatte fino a quel momento

## Viste materializzate

Come abbiamo già visto le viste sono utilizzate principalmente per semplificare la scrittura di query complesse.
Ogni volta che utilizziamo una vista in una query, questa deve essere rivalutata, il che può essere **inefficiente**. 

Le **viste materializzate** sono delle viste che però non vengono valutate ad ogni query che la coinvolge, Questo **migliore le prestazioni** però ha un costo aggiuntivo dato dal fatto che **va mantenuta aggiornata**

Un esempio di creazione di vista materializzata è il seguente:

```sql
CREATE MATERIALIZED VIEW MovieProd AS
	SELECT m.title, m.year, e.name
	FROM Movies m, MovieExec e
	WHERE m.producer = e.code
```

La vista va ricalcolata nei seguenti casi:

- in caso di modifiche all'interno delle tabelle `Movies`  e `MovieExec`
- in caso di modifiche degli attributi citati all'interno della vista.

In tutti gli altri casi la non c'è bisogno.

POSTGRES delega la responsabilità all'utente di aggiornare le viste con il comando `REFRESH MATERIALIZED VIEW`.

## Ottimizzazioni

È possibile aggiornare manualmente la vista aggiungendo o rimuovendo delle nuove righe, così da non rivalutare l'intera vista da capo:

```sql
INSERT INTO MovieProd
VALUES (’Kill Bill’, 2003, ’Quentin Tarantino’);

DELETE FROM MovieProd
WHERE title = ’Il Re Leone’ AND year = 1994;
```

Le viste materializzate possono essere **inlined** dal DMBS per migliorare l'efficienza delle query, sfruttando il fatto che parte dell'informazione presente nella query è già stata calcolata in una vista materializzata.


# Transazioni

Nello sviluppo di applicazione che fanno uso di un database è comune raggruppare un insieme di operazioni sul database per implementare una determinata funzione.

Questo raggruppamento però può portare a dei **problemi sull'integrità dei dati**:
- **Concorrenza** tra operazioni provenienti da utenti diversi (più persone contemporaneamente faranno operazioni nel database)
- il **fallimento** di una operazione potrebbe comportare gravi errori alle successive

## Transazione

Una **transazione** è una sequenza di operazioni sul database che soddisfa le seguenti proprietà:

- **Serializzabilità**: Assicura che l'esecuzione concorrente di più transazioni sia equivalente ad una esecuzione seriale (senza interferenze)
- **atomicità**: Se una operazione all'interno della transazione fallisce allora tutte le modifiche apportate da quella transazione vengono annullate
- **persistenza**: Le modifiche effettuate da una transazione terminata correttamente sono permanenti

In altre parti si dice che una transazione rispetta le proprietà ACID (Atomicity, Consistency, Isolation e Durability)

## Programmare le transazioni

Possiamo utilizzare le transazioni per raggruppare un insieme di query utilizzando i seguenti comandi:

- `START TRANSACTION` indica l'inizio di una nuova transazione
- `COMMIT` indica la terminazione corretta della transazione, da quel momento tutte le modifiche effettuate dalla transazione devono essere salvata persistentemente in memoria
- `ROLLBACK` indica la terminazione anomale della transazione, tutto ciò che è stato fatto durante la transazione deve essere annullato

## Vincoli nelle transazione

I vincoli che si mettono sugli attributi di una tabella possono essere controllati in momenti diversi all'interno delle transazioni:
- `NOT DEFERRABLE`: vengono controllati dopo ogni operazione della transazione
- `DEFERRABLE INITIALLY IMMEDIATE`: vengono controllati dopo ogni operazione della transazione ma è possibile modificarne il comportamento per controllarli a prima del commit
- `DEFERRABLE INITIALLY DEFERRED`: vengono controllati prima del commit ma è possibile forzare il controllo per ogni operazione della transazione

è possibile specificare quale comportamento usare con `SET CONSTRAINTS`

## Transazioni read only

Una transazione può essere dichiarata **read only**

```sql
SET TRANSACTION READ ONLY;
```
con i seguenti effetti:
- La transazione può solo leggere dati (con `SELECT`)
- tutte le query all'interno possono vedere solo le scritture avvenute prima dell'inizio della transazione
- più transazioni read only possono essere eseguite parallelamente senza rischi

## Livelli di isolamento 

Vediamo adesso vari livelli di isolamento che si possono applicare alle transazioni

## Transazioni Serializable

Una transazione può essere dichiarata come ***serializable***, cioè viene eseguita una transazione alla volta nella sua completezza

## Transazioni read uncommitted

Una transazione può essere dichiarata come ***read uncommitted***

con i seguenti effetti:

- Consente alla transazione di leggere **dirty data**, cioè dati scritti da altre transazione che non hanno ancora fatto `commit`. Le letture di questo tipo si chiamano *dirty read*
- Rischio: nel caso in cui la transazione che ha scritto i *dirty data* dovesse abortire allora ciò che ha scritto verrebbe annullato e non è corretto che quei dati cancellati influenzino le altre transazioni.

SQL limita l'uso di `READ UNCOMMITTED` alle sole transazioni read only.
su postgresql non esiste `READ UNCOMMITTED`

## Transazioni read committed

Una transazione dichiarata come **read committed** impedisce il fenomeno delle *dirty read*.

Con i seguenti effetti:
- Quando una transazione vuole effettuare una **scrittura**, acquisisce un lock per evitare *race condition* e lo rilascia alla fine della scrittura
- Si può verificare il fenomeno della **unrepeatable read**: due letture sugli stessi dati in momenti diversi (sempre all'interno della stessa transazione) possono portare a risultati diversi a causa dell'intervento di un'altra transazione che ha **modificato le righe** interessate  tramite un `UPDATE`tra una lettura e l'altra
- Si può verificare il fenomeno di **lost update**: cioè la perdita di una modifica causata dalla successiva modifica di un'altra transazione

## Transazione repeatable read

Una transazione dichiarata come **repeatable read** impedisce il fenomeno delle *dirty read*, delle *unrepeatable read* e dei *lost update*.

Con i seguenti effetti:
- Quando una transazione vuole fare una **lettura o scrittura**, acquisisce un lock che viene rilasciato alla terminazione della transazione
- per motivi di efficienza i lock solo relativi alle righe, anziché alle tabelle
- si può verificare il fenomeno della **phantom read** (fantasmi): due letture sugli stessi dati in momenti diversi (sempre all'interno della stessa transazione) possono portare a risultati diversi a causa dell'intervento di un'altra transazione che ha **modificato la quantità di righe** interessate tramite un `INSERT` o `DELETE`tra una lettura e l'altra

## Schema riassuntivo

| Isolamento | dirty read | unrepeatable read | lost update | phantom read | 
|:--:|:--:|:--:|:--:|:--:|
| READ UNCOMMITTED | sì | sì | sì | sì |
| READ COMMITTED| no | sì | sì | sì |
| REPEATABLE READ| no | no | no | sì |
| SERIALIZABLE | no | no | no | no |


Nota che le transazioni possono avere livelli di isolamento diverse tra loro, e tale livello riguarda solo la transazione stessa.

La scelta del livello di isolamento dipende da quanto è importante l'assenza di errori di lettura/scrittura e di quanto sono importanti le performance

In Postgresql l'isolamento di default è `READ COMMITTED`, e i 4 livelli di isolamento differiscono leggermente rispetto allo standard SQL


# Applicazioni di SQL

Vediamo quali sono i modi per integrare l'interazione con un database all'interno di una applicazione.

Possiamo categorizzare gli approcci in 3 modi:

- **Linguaggi integrati**: linguaggi specializzati nel eseguire comandi SQL
- **Linguaggi che ospitano SQL**: linguaggi tradizionali, la cui sintassi viene estesa con costrutti SQL all'interno del normale codice
- **Utilizzo di API**: linguaggi tradizionali che si appoggiano a librerie esterne per integrare SQL

## Linguaggi integrati

**Vantaggi**
- stesso livello di astrazione di SQL
- supporto per controlli a livello di compilazione da parte del *type system*

**Svantaggi**
- costo elevato di apprendimento
- tecnologie proprietarie e non standard
- non adatti per lo sviluppo di applicazioni complesse

Un esempio di questo approccio è PL/pgSQL

## Linguaggi che ospitano SQL

**Vantaggi**
- costo di apprendimento ridotto
- controlli sulla sintassi SQL in fase di compilazione

**Svantaggi**
- possibili problemi dovuti alla differenza di tipi tra il linguaggio e SQL (*Impedance mismatch*)
- è richiesto l'utilizzo di un pre-processore
	che accede a informazioni del tipo: nomi, attributi e tipi delle tabelle.
	Il pre-processore viene sfruttato per garantire che il codice:
	- faccia riferimenti a tabelle e attributi esistenti
	- soddisfi appropriati controlli sui tipi

Un esempio di questo approccio è SQLJ.
Viene utilizzata una sintassi particolare per far interagire il codice java con SQL.
In fase di compilazione vengono forniti i dati per l'autenticazione.
Viene utilizzato un **cursore** per scorrere il risultato delle query

Le parti coinvolte per di una applicazione SQLJ sono, in ordine di esecuzione:
- pre-processore SQLJ
- compilatore Java
- runtime Java
- DBMS

## Utilizzo di API

**Vantaggi**
- Costo di apprendimento ridotto
- Non è richiesto un pre-processore
- Possibilità di utilizzo di SQL dinamico

**Svantaggi**
- Possibili problemi dovuti alla differenza di tipi tra il linguaggio e SQL (*Impedance mismatch*)
- Assenza di controlli in tempo di compilazione

Un esempio di questo approccio è JDBC.

Le query sono solitamente delle stringhe passate a funzioni specifiche (e quindi controllate a runtime)

Una tecnica molto utile per aumentare la robustezza del codice è l'uso di **prepared statement**, cioè l'utilizzo di *placeholder* (con l'utilizzo del carattere `?`) all'interno della query da poi sostituire con parametri aggiuntivi.

**SQL dinamico**: cioè è possibile costruire le query dinamicamente a runtime, ad esempio in base all'input utente. È una feature che va comunque usata con attenzione

Le parti coinvolte per di una applicazione JDBC sono, in ordine di esecuzione:
- compilatore Java
- runtime Java
- DBMS

## Object Relational Mapping (ORM)

l'ORM è una tecnica di programmazione basata sulle API ma che risolve i problemi dovuti all’*impedance mismatch* in quanto viene mantenuta una versione del database nel codice realizzata con la programmazione ad oggetti (tabelle sono le classi, i campi sono attributi, ecc...).
Quindi ogni operazione sul database viene prima applicata al modello ad oggetti per verificarne la correttezza.

**Vantaggi**
- Indipendenza dallo specifico DBMS sottostante
- Non richiede conoscenza approfondita di SQL
- Migliore supporto da parte del compilatore
- Astrazione da dettagli di basso livello (es. sanitizzazione delle query)

**Svantaggi** 
- Tipicamente più lento rispetto a SQL
- Poco adatto all’esecuzione di query complesse

## Riepilogo

Al giorno d’oggi possiamo affermare che:
- I linguaggi integrati hanno un utilizzo di nicchia molto specializzato e non sono impiegati come linguaggi *general purpose*
- I linguaggi che ospitano SQL hanno un design molto interessante, ma sono sostanzialmente spariti dal mercato
- API ed ORM dominano la scelta per la loro praticità: si può considerare ormai uno standard di fatto


# Applicazioni web

Le applicazioni web sono i principali sistemi che fanno uso di basi di dati.

Una applicazione web si divide in 3 sezioni:
- Front-end: 
	- HTML (*HyperText Markup Language*) usato per definire la struttura della pagina web tramite una struttura ad albero. Il linguaggio si basa su **tag** e **attributi**
	- CSS (*Cascading Style Sheets*) linguaggio per aggiungere stile alle pagine HTML, è basato su un mapping tra elementi HTML e regole di stile. Fa un forte utilizzo di ereditarietà
	- JavaScript linguaggio di scripting per aggiungere interattività all'applicazione web
- Logica: Flask, PHP
- back-end: MySQL, Postgres

La parte di front-end è compiuta dal **client**, mentre la logica e il back-end sono compiute dal **server**

## URL

Una risorsa WEB è identifica da un URL (*Uniform Resource Locator*) la cui forma è simile a 

	schema://hostname[:port]/path[?query][#fragment]

- `schema`: è il protocollo http/https
- `hostname`: indica il server che ospita la risorsa
- `port`: è un numero che identifica il servizio che il server utilizza
- `path`: indica il percorso in cui trovare la risorsa all'interno del server
- `query`: utilizzata per passare dei dati al server assieme alla richiesta della risorsa
- `fragment`: indica una parte specifica della pagina HTML

## DNS

DNS (*Domain Name System*) è un protocollo utilizzato per tradurre i nomi di dominio testuali in indirizzi ip.

## HTTP

Il protocollo HTTP (*HyperText Transfer Protocol*) è quel protocollo che permette di far comunicare client e server, tramite un sistema di **richiesta e risposta**. La sua versione sicura è chiamata HTTPS (*HTTP Secure*).

Le **richieste HTTP** sono struttura come segue:

- `request line` che include un **metodo**, una **risorsa** e la versione del protocollo
- una lista di `request header`
- un linea vuota che fa da separatore
- il corpo della richiesta

I **metodi HTTP** sono i seguenti

- `GET`: per leggere informazioni dal server
- `HEAD`: come `GET` ma chiede solo gli *header* della risposta
- `POST`: per inviare informazioni al server
- `PUT`: per caricare file sul server
- `DELETE`: per rimuovere file dal server
- `OPTIONS`: richiede la lista dei metodi supportati

Le **risposte HTTP** sono strutturate come segue:

- linea di stato, che include uno *status code* e un messaggio
- una lista di *response headers*
- una linea vuota che fa da separatore
- il corpo della risposta

Gli ***status code*** sono i seguenti:

| range di codici | categoria |esempio
|--|--|--|
| 200-299 | successo | 200 OK
| 300-399 | reindirizzamento | 301 Moved permanently
| 400-499 | client error | 404 Not found
| 500-599 | server error | 503 Service unavailable

## Cookie

HTTP è un protocollo senza **stato**, cioè due richieste HTTP inviate dallo stesso client risultano sempre scorrelate tra loro.

In HTTP la gestione dello stato viene delegata ai **cookie** cioè un insieme di dati sotto forma di **chiave-valore**.
I cookie vengono generati dal server e vengono salvati nel client. 
Il client ad ogni richiesta che farà al server si occuperà di allegare anche i cookie.

I cookie vengono detti **opachi**, cioè il server può salvare ciò che vuole sui cookie, è suo compito interpretare i dati al suo interno in modo corretto

## HTTPS

La controparte sicura di HTTP è l'HTTPS:
- utilizza TLS (*Transport Layer Security*)
- assicura la **confidenzialità** e l'**integrità** dei messaggi
- consente l'**autenticazione** del server tramite certificati firmati


# NoSQL

Il NoSQL è un approccio che cerca una alternativa al salvare i dati in un modello relazionale (**RDBMS**, *Relational DataBase Management System*)

NoSQL che sta per *Not only SQL* è usato per gestire degli archivi di dati che non richiedono uno schema fisso (*schemeless*), evitano spesso le operazioni di giunzione (*join*) e puntano a **scalare** in modo orizzontale.
- Schemaless: 
in grado di memorizzare informazioni eterogenee (non aventi la stessa struttura/formato) all’interno della stessa entità

- Scalare in modo orizzontale: 
Quando aggiungi memoria ai database relazionali SQL, puoi eseguirne la scalabilità solo verticalmente, il che significa che la capacità di aggiungere più memoria è limitata all'hardware disponibile.
In NoSQL se un singolo server di database non è sufficiente per archiviare tutti i tuoi dati o gestire tutte le query, il carico di lavoro può essere suddiviso su due o più server (anche remoti).
In caso di distribuzione di server remoti si parla di **DDBMS** ( *Distributed DBMS*) e il suo utilizzo comporta sia un miglioramento delle **prestazioni** all'aumento degli utenti, sia una migliore **tolleranza ai guasti**

## BaSE vs ACID

I database relazionali seguono le proprietà ACID:

- **Atomicity**: richiede che una transazione venga eseguita completamente o non venga eseguita affatto.
- **Consistency**: richiede che, una volta confermata una transazione, i dati devono essere conformi allo schema del database.
- **Isolation**: richiede che le transazioni simultanee siano eseguite separatamente l'una dall'altra.
- **Durability**: richiede la capacità di ripristinare i dati all'ultimo stato conosciuto in seguito a un guasto del sistema o a un'interruzione dell'alimentazione imprevisti.

Mentre i database non relazionali seguono le proprietà **BaSE**:

- **Basically Available**: (disponibilità nella maggior parte dei casi) indica l'accessibilità simultanea del database da parte degli utenti in ogni momento.
- **Soft state**: (stato instabile) rimanda all'idea che i dati possono avere stati transitori o temporanei, che possono quindi cambiare nel tempo anche in assenza di trigger o input esterni
- **Eventually consistent**: (coerenza finale) significa che il record raggiungerà la coerenza quando tutti gli aggiornamenti simultanei saranno completati.

## Approcci NoSQL

Esistono 4 approcci principali per implementare un archivio di dati non relazionale:

- **Orientato al documento** (esempio di DBMS: MongoDB)
- **A grafo** (esempio di DBMS: Neo4j)
- **Chiave-Valore** (esempio di DBMS: redis)
- **Colonnare** (esempio di DBMS: Cassandra)

## Orientato al documento

Ogni record è memorizzato come un documento che possiede determinate caratteristiche, qualsiasi numero di campi con qualsiasi lunghezza può essere aggiunto al documento.
Spesso i documenti sono dei file JSON oppure XML.

Funziona correttamente con cataloghi, profili utente e sistemi di gestione del contenuto in cui ogni documento è unico e si evolve nel tempo.

## A grafo

Una base di dati a grafo usa nodi e archi per rappresentare e archiviare l'informazione.
Sono spesso più veloci di quelli relazionali nell'associazione di set di dati, scalano più facilmente su grandi quantità di dati e non richiedono le tipiche e onerose operazioni di unione (le join).

Essi usano i **nodi** per archiviare le entità (Qualsiasi oggetto, luogo o persona) e gli **archi** per archiviare le relazioni tra le entità.

Casi d'uso tipici per i database a grafo includono social network, motori di raccomandazione, rilevamento delle frodi e grafici di conoscenze.

## Chiave-valore

Un database chiave-valore immagazzina i dati come un insieme di coppie di chiave-valore dove una chiave rappresenta un identificatore univoco, mentre il valore è solitamente un array di dati.
Le chiavi e i valori possono essere qualsiasi cosa, da un oggetto semplice ad articolati oggetti composti.
Particolarmente utilizzato per la memorizzazione nella cache e l'archiviazione delle informazioni sulla sessione utente.

Il modello di dati chiave-valore è particolarmente adatto per casi d'uso quali i videogiochi, le tecnologie pubblicitarie e l'IoT.

## Colonnare

Questi database memorizzano le informazioni in colonne, consentendo agli utenti di accedere solo alle specifiche colonne di cui hanno bisogno senza allocare memoria aggiuntiva per dati irrilevanti.
Si utilizzano tabelle, colonne e righe, ma diversamente dai database relazionali, il nome e il formato delle colonne può variare da riga in riga all'interno della stessa tabella.
Nell'approccio più estremo di questo tipo di DB ogni colonna andrebbe salvata separatamente su disco, tuttavia esiste il concetto di **famiglia di colonne** in cui più colonne vengono salvate insieme

È utilizzato in diversi casi di utilizzo, come ad esempio per siti web di social network e analytics dei dati in tempo reale.
