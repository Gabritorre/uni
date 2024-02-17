# Chiavi e coperture canoniche

Definiamo i concetti di *superchiave, chiave e attributi primi* utilizzando le nozioni di dipendenza funzionale.

- **Superchiave**: (sottoinsieme di attributi che renderebbero ogni riga univoca all'interno della tabella)
	Data la relazione $R(T, F)$, un insieme di attributi $X\subseteq T$ è superchiave se e solo se $X \rightarrow T \in F^+$
- **Chiave**: è una superchiave composta dal minor numero di attributi possibile (cioè superchiave minimale) ma che continuano ad identificare le righe
	
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

1. Verificare se $X$ è superchiave, se non lo è allora non può essere nemmeno una chiave
2. Verificare che per ogni attributo di $A \in X$ si abbia $(X \backslash \{A\})^+ \neq T$

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


l'intuizione è la seguente:

- generiamo tutte le possibili chiavi  dalle più piccole alle più grandi
- rappresentiamo le chiavi candidate come $X :: (Y)$ dove $X$ è l'insieme degli attributi da testare come chiave, e $Y$ l'insieme dei possibili attributi da aggiungere a $X$ qualora $X^+ \neq T$
- Se $X^+ = T$, allora $X$ è già una chiave e possiamo scartare $X :: (Y)$ (cioè tutti i sovrainsiemi di $X$)
- Altrimenti calcoliamo $Y \backslash X^+ = \{A_1, ..., A_n\}$ e generiamo i nuovi candidati
 $X\cup A_1 :: (A_2, ..., A_n), X\cup A_2 :: (A_3, ..., A_n), ..., X\cup A_n :: ()$
 - Nota che se un attributo non compare mai alla destra di una dipendenza, allora esso deve fare parte di tutte le chiavi.

Un esempio del significato$X :: (Y)$ è il seguente
$AB :: (CD)$ rappresenta gli insiemi di attributi $\{AB, ABC, ABD, ABCD\}$

Vediamo un esempio

- relazione $R(T, G)$
- $T = ABCDEF$
- $G = \{AB \rightarrow C, E \rightarrow A, A \rightarrow E, B \rightarrow F\}$

partiamo inizializzando $Z$, in $Z$ dobbiamo mettere gli attributi che non dipendono da altri all'interno di $G$, nel nostro caso:
$Z = BD$
Avendo $Z$ possiamo inizializzare i candidati, mettendo a sinitra $Z$ mentre a destra gli altri attributi:
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
