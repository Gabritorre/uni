# Teoria della NP completezza

L'ultimo problema visto riguardante la *clique massima* è definito come un problema intrattabile cioè la cui risoluzione non è possibile farla in tempo **polinomiale** (nota che non significa che sia impossibile risolvere il problema).

In questo capitolo parleremo della classificazione dei problemi in base alla complessità temporale della soluzione.


## Problemi

Un problema generico può essere visto come una relazione binaria tra le sue **possibili istanze** e le sue **possibili soluzioni**:

$$\mathcal{P} = \mathcal{I} \times \mathcal{S}$$

Nell'esempio della *clique massima* $\mathcal{i}$ rappresenta tutti i possibili grafi non orientati e non pesati sugli archi, mentre $\mathcal{S}$ rappresenta tutte le possibili combinazioni di vertici che costituiscono una *clique massima*


I problemi si possono partizionare in due categorie:

- **Problemi decidibili**: problemi per cui esiste una soluzione che li risolve in tempo finito (tutti i problemi visti fino ad ora).
	Questa categoria si divide ulteriormente in:
	- **Problemi trattabili**: problemi risolvibili in tempo polinomiale $O(n^k)$ dove $n$ è la dimensione dell'input.
	- **Problemi intrattabili**: problemi risolvibili in tempo esponenziale, $O(k^n)$ dove $n$ è la dimensione dell'input, o con tempi ancora peggiori 
- **Problemi indecidibili**: problemi per cui non esiste una soluzione che li risolve in tempo finito, nel senso che non possono proprio terminare la loro esecuzione.


Un altro tipo di distinzione che si può fare è quella in base al tipo di risultato che si vuole ottenere:

- **Problemi decisionali**: la risposta che voglio è **vero o falso**
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

Dato un problema decisionale dividiamo le sue istanze in **istanze positive** $\mathcal{I}_+$, cioè quelle istanze che sono associate al risultato `true`, e le **istanze negative** $\mathcal{I}_-$, cioè quelle istanze che sono associate al risultato `false`.

Supponiamo che avere un **algoritmo di verifica** che prende in input una **istanza positiva** del problema e un **certificato**, cioè una **possibile** soluzione al problema.
L'algoritmo, verifica se il certificato è una soluzione valida oppure no sull'istanza data.

![enter image description here](https://i.ibb.co/TwcG8hY/image.png)

Esempio:

- $P$: dato un grafo non orientato $G$ determinare se esiste una *clique* composta da $k$ vertici
- $i\in\mathcal{I}_+$ dove $i$ è uno specifico grafo $G'$ e una costante $k'$, tale che nel grafo $G'$ **è presente** una *clique* composta da $k'$ nodi (il fatto che sia presente è perché abbiamo preso una istanza positiva del problema)
- certificato: un certo insieme di vertici

L'algoritmo di verifica determinerà se l'insieme di vertici dato (il certificato) è una *clique* composta da $k'$ elementi all'interno del grafo $G'$

### Problema del millennio

Una banale conseguenza della definizione di $NP$ è la seguente

$$P \subseteq NP$$

cioè $P$ è un sottoinsieme di $NP$

Il **problema del millennio**, che non è ancora stato risolto, è dimostrare anche il contrario:

$$NP \subseteq P$$

che comporterebbe quindi ad avere $P = NP$, ma ciò non è ancora stato né dimostrato né smentito


## Classe  NPC

Prima di definire la classe NPC formalizziamo il concetto di **riducibilità polinomiale**.

In parole povere consiste nel ricondurre un nuovo problema ad uno di cui si conosce già la soluzione dimostrata essere efficiente.

Più formalmente:
Dati due problemi $P_1, P_2$, $P_1$ è riducibile polinomialmente a $P_2$ se esiste un algoritmo **polinomiale** che mappi istanze di $P_1$ a **equivalenti** istanze di $P_2$:

$$P_1 \leq_p P_2$$

Cioè, Per parlare di riducibilità polinomiale bisogna che l'algoritmo di mapping abbia un tempo di esecuzione polinomiale e che le istanze positive di $P_1$ vengano mappate a istanze positive di $P_2$ e che le istanze negative di $P_1$ vengano mappate a istanze negative di $P_2$


### Proprietà della riducibilità

la riducibilità polinomiale è:
- **riflessiva**: 	$P_1 \leq_p P_1$
- **transitiva**: se $P_1 \leq_p P_2$ e $P_2 \leq_p P_3$ allora $P_1 \leq_p P_3$

Ma **non è necessariamente simmetrica**.


### Definizione di NPC

$$NPC = \begin{cases}\mathcal{P} | \mathcal{P}\text{ è un problema decisionale tale che} \\
\hspace{5mm}\mathcal{P} \in NP \\
\hspace{5mm}\forall \mathcal{P'} \in NP : \mathcal{P'} \leq_p \mathcal{P}
\end{cases}$$

Quanto un problema appartiene a questa categoria si dice **NP completo**

la definizione dice che un problema è NP completo se è un problema appartenente alla classe NP e se ogni problema all'interno della classe NP può essere ridotto a lui.
