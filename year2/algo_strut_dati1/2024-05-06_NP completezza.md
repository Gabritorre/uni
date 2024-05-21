# Teoria della NP completezza

L'ultimo problema visto riguardante la *clique massima* è definito come un problema **intrattabile** cioè la cui risoluzione non è realizzabile in tempo **polinomiale** (nota che non significa che sia impossibile risolvere il problema).

In questo capitolo parleremo della classificazione dei problemi in base alla complessità temporale della loro soluzione.

## Problemi

Un problema generico può essere visto come una relazione binaria tra le sue **possibili istanze** e le sue **possibili soluzioni**:

$$\mathcal{P} = \mathcal{I} \times \mathcal{S}$$

Nell'esempio della *clique massima* $\mathcal{I}$ rappresenta tutti i possibili grafi non orientati e non pesati, mentre $\mathcal{S}$ rappresenta tutti i possibili sottografi che costituiscono una *clique massima*

I problemi si possono partizionare in due categorie:

- **Problemi decidibili**: problemi per cui esiste una soluzione che li risolve in tempo finito (tutti i problemi visti fino ad ora).
	Questa categoria si divide ulteriormente in:
	- **Problemi trattabili**: problemi risolvibili in tempo polinomiale $O(n^k)$ dove $n$ è la dimensione dell'input.
	- **Problemi intrattabili**: problemi risolvibili in tempo esponenziale $O(k^n)$, dove $n$ è la dimensione dell'input, o con tempi ancora peggiori ($n!, n^n,...$)
- **Problemi indecidibili**: problemi per cui non esiste una soluzione che li risolve in tempo finito, nel senso che non possono proprio terminare la loro esecuzione.

Un altro tipo di distinzione che si può fare è quella in base al tipo di risultato che si vuole ottenere:

- **Problemi decisionali**: la risposta che voglio è binaria: **vero o falso**
- **Problemi di ottimizzazione**: in cui le soluzioni sono composte da un vasto numero di elementi e noi vogliamo l'elemento massimo o minimo.

La maggior parte dei problemi che si affrontano nella realtà sono problemi di ottimizzazione.
Noi però ci concentreremo **solamente sui problemi decisionali**. Non lo facciamo a caso in quanto ogni problema di ottimizzazione ha una versione decisionale (e vice versa) con la stessa complessità temporale.
Quindi le considerazione fatte per i problemi decisionali saranno valide anche per le versioni di ottimizzazione.

Esempio:

Dato un grafo trovare la clique massima $\to$ problema di ottimizzazione
Dato un grafo esiste la *clique* con almeno $k$ vertici? $\to$ problema decisionale

## Classi dei problemi decisionali

## Classe P

È definita nel seguente modo:

$$P = \{\mathcal{P} | \mathcal{P}\text{ è un problema decisionale \textbf{risolvibile} in tempo polinomiale}\}$$


## Classe NP

È definita nel seguente modo:

$$NP = \{\mathcal{P} | \mathcal{P}\text{ è un problema decisionale \textbf{verificabile} in tempo polinomiale}\}$$

Spieghiamo il concetto di **verificabile**:

Dato un problema decisionale dividiamo le sue istanze in **istanze positive** $\mathcal{I}_+$, cioè quelle istanze che sono associate al risultato `true`, e in **istanze negative** $\mathcal{I}_-$, cioè quelle istanze che sono associate al risultato `false`.

Supponiamo che avere un **algoritmo di verifica** che prende in input una **istanza positiva** del problema e un **certificato**, cioè una **possibile** soluzione al problema.
L'algoritmo verifica se il certificato è una soluzione valida oppure no sull'istanza data.
![enter image description here](https://i.ibb.co/TwcG8hY/image.png)

Esempio:

- $P$: dato un grafo non orientato $G$ determinare se esiste una *clique* composta da $k$ vertici
- Istanza positiva: $i\in\mathcal{I}_+$ dove $i$ è uno specifico grafo $G'$ e una costante $k'$, tale che nel grafo $G'$ **è presente** una *clique* composta da $k'$ nodi (il fatto che sia presente è perché abbiamo preso una istanza positiva del problema)
- certificato: un certo insieme di vertici

L'algoritmo di verifica determinerà se l'insieme di vertici dato (il certificato) è una *clique* composta da $k'$ elementi all'interno del grafo $G'$

### Problema del millennio

Una banale conseguenza della definizione di $NP$ è la seguente

$$P \subseteq NP$$

cioè $P$ è un sottoinsieme di $NP$

Il **problema del millennio**, che non è ancora stato risolto, è dimostrare anche il contrario oppure smentirlo:

$$NP \subseteq P$$

Se fosse vero comporterebbe avere $P = NP$, che porterebbe enormi conseguenze al mondo degli algoritmi, ma ciò non è ancora stato né dimostrato né smentito

## Classe  NPC

Prima di definire la classe NPC formalizziamo il concetto di **riducibilità polinomiale**.

In parole povere consiste nel ricondurre un nuovo problema ad uno che si sa già essere efficiente.

Più formalmente:
Dati due problemi $P_1, P_2$,
$P_1$ è riducibile polinomialmente a $P_2$ se esiste un algoritmo **polinomiale** che mappi istanze di $P_1$ ad **equivalenti** istanze di $P_2$
Si indica come:

$$P_1 \leq_p P_2$$

Cioè, Per parlare di riducibilità polinomiale bisogna che l'algoritmo di mapping abbia un tempo di esecuzione polinomiale e che le istanze positive di $P_1$ vengano mappate a istanze positive di $P_2$ e che le istanze negative di $P_1$ vengano mappate a istanze negative di $P_2$

### Proprietà della riducibilità

La riducibilità polinomiale è:
- **Riflessiva**: 	$P_1 \leq_p P_1$
	banalmente ogni istanza viene mappata a sè stessa
- **Transitiva**: se $P_1 \leq_p P_2$ e $P_2 \leq_p P_3$ allora $P_1 \leq_p P_3$
	se esiste un algoritmo in tempo polinomiale per mappare le istanza di $P_1$ a $P_2$ e analogamente un altro algoritmo per le istanze di $P_2$ a $P_3$, sarà sufficiente creare un terzo algoritmo che esegua la prima mappatura e poi la seconda, dato che entrambi gli algoritmi hanno una complessità polinomiale, la somma di complessità polinomiali è anch'essa polinomiale.

Ma **non è simmetrica**, dopo analizzeremo questo aspetto...

### Definizione di NPC

$$NPC = \begin{cases}\mathcal{P} | \mathcal{P}\text{ è un problema decisionale tale che:} \\
-\hspace{5mm}\mathcal{P} \in NP \\
-\hspace{5mm}\forall \mathcal{P'} \in NP : \mathcal{P'} \leq_p \mathcal{P}
\end{cases}$$

Quanto un problema appartiene a questa categoria si dice **NP completo**, e questa classe racchiude proprio i **problemi intrattabili**.

La definizione dice che un problema è NP completo se:
-  è un problema appartenente alla classe NP
- e se ogni problema all'interno della classe NP può essere ridotto polinomialmente a lui.

Nota: se un problema soddisfa la seconda condizione si dice che appartiene alla classe **NP-hard**.

## Teorema fondamentale della NP-completezza

L'intrattabilità di un problema appartenente alla classe NPC è data proprio da questo teorema:

$$P \cap NPC \neq \emptyset \implies P = NP$$

Cioè, se esistesse un problema $Q$ risolvibile in tempo polinomiale ($Q \in P$) e in cui ogni problema in NP può essere mappato a $Q$ ($Q \in NPC$) allora si avrebbe che $P = NP$

Al momento nessuno è riuscito a trovare un problema che rende vera l'ipotesi.

Possiamo però dimostrare la correttezza del teorema:
Supponiamo che esista un problema $Q$ per cui $Q \in P \land Q \in NPC$
Per dimostrare che $P = NP$ dovremmo dimostrare che:

1. $P \subseteq NP$ ma questo già lo sappiamo: un problema risolvibile in tempo polinomiale è anche verificabile in tempo polinomiale.
2. $NP \subseteq P$
	Prendiamo un qualsiasi problema $Z$ appartenente a $NP$, voglio dimostrare che tale problema è anche in $P$.
	Per definizione di $NPC$ posso dire che $Z \leq_p Q$ (cioè $Z$ può essere mappato a $Q$).
	E per ipotesi $Q \in P$, di conseguenza anche $Z\in P$

### Nota sulla Simmetria della riducibilità polinomiale

Se presi due problemi $P1 \in P$ e $P2 \in NPC$ fosse vera la proprietà di simmetria, cioè che 

"se $P1 \leq_p P2$ allora $P2 \leq_p P1$"

Si potrebbe applicare il teorema fondamentale.
Ciò però non vale perche seppur vero che ogni problema in $P$ è riducibile polinomialmente a un problema NPC (in quanto $P \subseteq NP$) non è mai stato trovato un problema per cui vale il contrario.

Se considerassimo solo problemi $NPC$, in quel caso la proprietà simmetrica varrebbe: utilizzando la seconda proprietà della definizione di $NPC$ sappiamo che ogni problema $NP$ può essere ridotto al nostro problema di riferimento, e dato che $NPC \subset NP$ anche tutti i problemi $NPC$ possono essere ridotti al nostro problema di riferimento.

## Classe Co-NP

La classe Co-NP è definita nel seguente modo

$$\text{Co-NP} = \{\mathcal{P} | \mathcal{P} \text{ è un problema decisionale il cui \textbf{complemento} è verificabile in tempo polinomiale}\}$$

Quanto un problema appartiene a questa categoria si dice **complemento di NP**

Dato un problema decisionale $\mathcal{P}$ con istanze positive e negative, il complemento del problema, indicato con $\bar{\mathcal{P}}$ nega la domanda (e quindi si invertono le istanze).

Ad esempio:
il solito problema $\mathcal{P}$: dato un grafo dire se esiste una clique composta da $k$ vertici.

In questo caso un algoritmo prende in input il grafo e un valore $k$ e in output potrà restituire:
- "Sì, nel grafo esiste una clique di $k$ vertici"
- "No, nel grafo non esiste una clique di $k$ vertici"

Il complementare sarebbe $\bar{\mathcal{P}}$: dato un grafo dire se non esiste una clique composta da $k$ vertici

In questo caso un algoritmo prende in input il grafo e un valore $k$ e in output potrà restituire:
- "No, nel grafo esiste una clique di $k$ vertici"
- "Sì, nel grafo non esiste una clique di $k$ vertici"

### Relazione tra NP e Co-NP

**Se un problema appartiene ad $NP$ non è detto che anche il suo complemento lo sia, anzi spesso non lo è.**

Prendendo l'esempio precedente abbiamo già visto che il problema di **verificare** che un dato insieme di vertici sia una clique di almeno $k$ vertici in un certo grafo, ha costo polinomiale.
**Una singola risposta** "Sì, l'insieme di vertici è una clique di almeno $k$ vertici" restituita dall'algoritmo di verifica ci è sufficiente per rispondere alla domanda "esiste...".

D'altra parte verificare che non ci sia una clique di almeno $k$ vertici in un certo grafo necessiterebbe di testare tutte le possibili permutazioni di vertici, che ha costo **fattoriale**, questo perché una singola risposta "Sì, l'insieme di vertici non è una clique di almeno $k$ vertici" non ci basta per rispondere alla domanda "esiste...".

E proprio perché l'algoritmo di verifica in quest'ultimo caso non ha tempo polinomiale, tale problema (il complemento del problema della clique) non appartiene a $NP$, bensì a $\text{Co-NP}$ perché il problema originale invece appartiene a $NP$

## Schema delle classi

![enter image description here](https://i.ibb.co/nmXXPnb/image.png)
Osservazioni:
- Se un problema sta sia in NP che in Co-NP significa che sia il problema stesso che il suo complemento sono verificabili in tempo polinomiale.
- Se un problema sta in P significa che:
	1. è risolvibile in tempo polinomiale
	2. è verificabile in tempo polinomiale
	3. il suo complemento è verificabile in tempo polinomiale.

## Problemi NP-completi

La seconda proprietà della classe di problemi NPC è parecchio forte, tale da farci dubitare che ci siano veramente dei problemi al suo interno, ebbene ce ne sono migliaia.

Dimostrare che un problema appartiene a NPC significa dimostrare le due proprietà, la seconda è particolarmente difficile da dimostrare ma qualcuno c'è la fatta la prima volta con il problema chiamato **CIRCUIT-SAT**.
Il problema consisteva in: date $n$ linee di input ad un circuito booleano, esiste una configurazione che da come risultato 1?

### Determinare se nuovi problemi appartengono a NPC

Dato che adesso sappiamo esistere almeno un problema dimostrato essere appartenente alla classe NPC, dimostrare che un nuovo problema appartenga alla classe NPC è diventato più semplice.

Dato un nuovo problema $P1$
Se
1. $P1 \in NP$
2. $\exist Q \in NPC$ tale per cui $Q \leq_p P1$

allora $P1 \in NPC$

Il secondo punto vale perché: se $Q\in NPC$ significa che ogni problema appartenente a $NP$ può essere ridotto a $Q$ (per def. di $NPC$). Quindi se $Q$ può essere ridotto al nostro problema $P1$ è come se avessimo dimostrato che ogni problema in $NP$ è riducibile al nostro problema $P1$

## Dimostrazione informale che clique appartiene a NPC

Per dimostrare che il problema della clique appartiene a NPC faremo una mappatura con un altro problema NPC, chiamato **3-FNC-SAT** (3 forma normale congiunta *satisfaction*).

Quest'ultimo problema consiste in una formula booleana composta nel seguente modo:

1. La formula $\phi$ è composta da **clausole** $C$ legate da operatori logici AND 
2. Ogni clausola è formata da **3 letterati** $x$ legati da operatori logici OR
3. Un letterato è una variabile booleana pura oppure negata

Costruiamo una formula, che rispetti le regole sopra citate, che poi utilizzeremo per fare la mappatura con il problema della clique.

$$\phi =C_1 \land C_2 \land C_3$$

$$C_1 =  x_1 \lor \lnot x_2 \lor \lnot x_3$$

$$C_2 =  \lnot x_1 \lor x_2 \lor x_3$$

$$C_3 =  x_1 \lor  x_2 \lor  x_3$$


Dimostriamo in modo non proprio formale che il problema della clique appartiene a NPC:

1. $\text{CLIQUE} \in NP$ già lo sappiamo che la *clique* è verificabile in tempo polinomiale
2. Utilizziamo il problema **3-FNC-SAT** che si sa già appartenere a NPC per ridurlo al nostro problema della *clique*

Creiamo un grafo che mappa la nostra istanza del problema 3-FNC-SAT, per farlo dobbiamo rispettare delle regole:

1. Creare tanti sottoinsiemi di vertici quante sono le clausole della formula, in questo caso sono 3
2. Ogni sottoinsieme ha lo stesso numero di vertici rispetto ai letterati, in questo caso 3
3. Non ci devono essere archi tra letterati della stessa clausola
4. Non ci devono essere archi che collegano letterati che sono l'uno la negazione dell'altro

Costruiamo il nostro grafo:
![enter image description here](https://i.ibb.co/TYFX4gm/image.png)

Il mapping tra i due problemi ci dice che esiste una clique di 3 vertici se e solo se la formula è soddisfacibile (cioè se c'è una combinazioni di valori booleani che restituisce vero)

Se scegliamo:
- $\lnot x_2$ da $C_1$
- $x_3$ da $C_2$
- $x_3$ da $C_3$

e impostiamo i seguenti valori

- $\lnot x_2 = \text{true}$
- $x_3 = \text{true}$
- $x_1 = \text{indifferente}$

la formula $\phi$ restituisce vero e di conseguenza i nodi corrispettivi ai letterati che abbiamo scelto compongono una clique di 3 vertici.

## Aggirare problemi NPC

In caso si incontrasse un problema NPC, non c'è speranza di risolverlo in modo efficiente, i modi possibili per ottenere una soluzione quantomeno tollerabile coinvolgono:

1. **algoritmi di approssimazione** (algoritmi che si avvicinano alla soluzione corretta in tempi accettabili)
2. **entrare in dei casi particolari del problema** (sperare di rientrare in casi speciali del problema che si risolvono in tempi migliori del caso generale)
3. **utilizzare delle euristiche** (affidarsi ad algoritmi che hanno una probabilità alta di avere successo, ma si tratta solo di probabilità, senza certezze)


