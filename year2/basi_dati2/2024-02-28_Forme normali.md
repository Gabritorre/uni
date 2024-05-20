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

