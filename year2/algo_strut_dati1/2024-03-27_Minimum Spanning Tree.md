# Minimum Spanning Tree

Partiamo col dare delle informazioni generali sugli alberi:

Con alberi ci riferiamo ad **alberi liberi**, cioè grafi aciclici connessi non gerarchici (quindi dove non è presente un nodo radice),

Se $G = (V, E)$ è un albero allora

$$|E| = |V| - 1$$

Ciò deriva dalle proprietà di grafo connesso e aciclico, infatti unendole:

- Se connesso allora vale che $|E| \geq |V| -1$
- Se aciclico allora vale che $|E| \leq |V| - 1$

## Teorema della caratterizzazione degli alberi

Dato un grafo $G = (V, E)$ non orientato, affermare che $G$ è un albero è equivalente a tutte le seguenti affermazioni:

1. Due vertici qualsiasi di $G$ sono connessi da un unico cammino
2. $G$ è connesso ma se si rimuove un qualsiasi arco allora diventa non più connesso
3. $G$ è connesso e $|E| = |V| - 1$
4. $G$ è aciclico e $|E| = |V| - 1$
5. $G$ è aciclico ma inserendo un arco allora diventa ciclico

## Spanning Tree

*Spanning Tree* (o Albero di copertura) di un grafo $G$ connesso e non orientato è un sottoinsieme di archi tale che:
- formano un albero
- tutti i nodi di $G$ vengono toccati

Un grafo può avere più alberi di copertura, e se è connesso ne avrà sicuramente almeno uno.

$ST(G)$ è l'insieme degli *spanning tree* del grafo $G$

Formalmente scriveremo che un albero di copertura è 

$T \subseteq E$ tale che il grafo $(V, T)$ è un albero

![enter image description here](https://i.ibb.co/2km22hN/image.png)

## Minimum Spanning Tree

Un *Minimum Spanning Tree* (MST) o albero di copertura minimo riguarda **grafi pesati sugli archi**.

Dato un grafo $G = (V, E, w)$ connesso e pesato sugli archi con pesi $w$.

Rappresentiamo il **peso di un albero di copertura** $T$ come la somma dei pesi sui suoi archi

$$W(T) = \sum_{(u_1, u_2)\in T}w(u_1, u_2)$$

Quindi il MST di un grafo $G$ è un sottoinsieme di archi $T$ tale che:

- $T$ è un albero di copertura
- $W(T)$ sia il minimo tra tutti i possibili alberi di copertura

Un grafo può avere più alberi di copertura minimi.

![enter image description here](https://i.ibb.co/sP5v6t0/image.png)


## Fatto cruciale degli MST

Dato un grafo connesso $G = (V, E)$, un **taglio** è una partizione dei vertici del grafo in due sottoinsiemi disgiunti: $S$ e $V \setminus  S$

Dato che il grafo è connesso **esisterà sempre almeno un arco che attraversa il taglio** qualunque taglio si consideri.
Tra gli archi che attraversano il taglio, quello con peso minore viene chiamato **arco leggero** (possono essere molteplici se hanno lo stesso peso)

![enter image description here](https://i.ibb.co/Q9cPrwN/image.png)

Il **fatto cruciale** è il seguente

> Se $(u, v)$ è un arco leggero che attraversa il taglio, allora $(u, v)$ appartiene a un MST


### Cuci e taglia

**Dimostrazione** del fatto cruciale tramite la tecnica "**cuci e taglia**".

Sia $T$ un MST di $G$, l'arco $(u, v)$ può stare in due casi:

1. l'arco $(u, v) \in T$ allora la condizione è già verificata
2. l'arco $(u, v) \notin T$ in questo caso utilizziamola tecnica "cuci e taglia" per cercare un altro MST che lo contenga:

	- passo "cuci": aggiungiamo l'arco $(u, v)$ all'albero di copertura minimo $T$, chiamiamo questo nuovo insieme $T'$

		$$T' = T \cup \{(u, v)\}$$
	
		Dato che $T$ era per definizione connesso allora l'aggiunta del nuovo arco creerà sicuramente un ciclo.
		Questo significa che esisteva già un altro arco $(x,y)$ che attraversava il taglio e che adesso fa parte del ciclo.

	- passo "taglia": rimuoviamo da $T'$ l'altro arco che attraversa il taglio e che fa parte del ciclo
		
		$$T'' = T' \setminus \{(x, y)\}$$
		
		![enter image description here](https://i.ibb.co/Qjj9Kvd/image.png)

		Per come è stato costruito $T''$ sarà sicuramente un **albero di copertura**.

		Verifichiamo che sia anche un MST:
		Dato che $T$ è un MST possiamo sicuramente dire che

		$$W(T) \leq W (T'')$$

		però il peso di $T''$ lo possiamo scrivere come

		$$W(T'') = W(T) + w(u, v) - w(x, y)$$

		Possiamo dire che $w(u, v) - w(x,y) \leq 0$ in quanto l'arco $(u, v)$ è un arco leggero (quindi l'arco $(x, y)$ o è a sua volta un arco leggero oppure ha un peso maggiore)
		Possiamo quindi scriverlo come:

		$$W(T'') \leq W(T)$$

		Quindi unendo le due disequazioni otteniamo che

		$$W(T)\leq W(T'') \leq W(T) \implies W(T'') = W(T)$$

		**Questo dimostra che anche $T''$ è un MST in quanto è un albero di copertura e ha lo stesso peso di un MST**

		**Nota**: dopo aver dimostrato questa proprietà, possiamo applicarla nella sua stessa dimostrazione, infatti essendo $T$ un MST allora il suo arco $(x, y)$ sarà un arco leggero, di conseguenza $w(u, v) = w(x, y)$ che sottratti fanno $0$ e quindi si raggiunge che $W(T'') = W(T)$

## Esercizi dimostrabile con "cuci e taglia"

**Nota** un classico errore potrebbe essere quello di eseguire prima il passo taglia e poi il passo cuci... Questo non funziona in quanto si potrebbe creare un grafo che non è un albero.

### Esercizio 1

Se $(u, v)$ **è l'unico arco leggero** che attraversa il taglio fatto su un grafo $G$ allora **ogni** MST del grafo $G$ contiene l'arco $(u, v)$

**Dimostrazione** per assurdo utilizzando "cuci e taglia"

Supponiamo per assurdo che esista un MST che chiamiamo $T$ che non contenga l'arco $(u, v)$

- passo "cuci": 

	$$T' = T \cup \{(u, v)\}$$
	
- passo "taglia":

	$$T'' = T' \setminus \{(x, y)\}$$

$T''$ è un albero di copertura per come è stato costruito.
$W(T'') = W(T) + w(u, v) - w(x, y)$ 

Dato che c'è un **unico arco leggero** per nostra ipotesi allora $w(x, y)$ sarà maggiore di $w(u, v)$
Di conseguenza: $w(u, v) - w(x, y) < 0$ 

Questo è assurdo in quanto avremmo trovato un albero di copertura con un peso minore dell'albero di partenza che era un MST.


### Esercizio 2

Sia $G = (V, E, w)$ un grafo non orientato connesso e pesato sugli archi.
Se $(u, v) \in E$ è l'arco di peso minimo in tutto il grafo (nota che non è detto che sia unico)
allora esiste un MST che contiene quell'arco


**Dimostrazione** utilizzando "cuci e taglia"

Sia $T$ il nostro MST.

- Caso A: $(u, v) \in T$ condizione già verificata
- Caso B: $(u, v) \notin T$:
	- "cuci": $T' = T \cup \{(u, v)\}$
	- "taglia": $T'' = T' \setminus \{(x, y)\}$

	$T''$ è un albero di copertura per come è stato costruito, $W(T) \leq W(T'')$.
	$W(T'') = W(T) + w(u, v) - w(x, y)$
	Dato che l'arco $(u, v)$ ha il peso minore di tutto il grafo allora 
	$w(u, v) - w(x, y) \leq 0$

	 $$W(T) \leq W(T'') \leq W(T) \implies W(T'') = W(T)$$

Quindi $T''$ è un MST

## Teorema fondamentale degli MST

Sia $G = (V, E, w)$ non orientato, connesso e pesato sugli archi.
Valgano le seguenti ipotesi:

1. $A \subseteq E$ è un sottoinsieme di archi contenuto in un qualunque MST
2. Sia $(S, V \setminus S)$ un taglio del grafo $G$ che "rispetta" A, cioè in cui gli archi di A non attraversano il taglio
3. Sia $(u, v) \in E$ un arco leggero che attraversa il taglio

Allora esiste un MST che contiene $A \cup \{(u, v)\}$ (si dice "l'arco $(u, v)$ è sicuro per $A$")

**Nota**: Dire che un arco $(u, v)$ è **sicuro** per $A$ significa che se si aggiunge l'arco $(u, v)$ all'insieme $A$, allora l'insieme $A$ continua ad essere un sottoinsieme di un MST

**Dimostrazione**

Sia $T \in MST(G)$ che contiene $A$

- Caso A: $(u, v) \in T$ in questo caso sia $A$ che $(u, v)$ appartengono a $T$ quindi finisce qui.
- Caso B: $(u, v) \notin T$ applico "cuci e taglia"
	- "cuci": $T' = T \cup \{(u, v)\}$
	- "taglia": $T'' = T' \setminus\{(x, y)\}$
$T''$ è un albero di copertura per come è stato costruito, $W(T) \leq W(T'')$.
$W(T'') = W(T) + w(u, v) - w(x, y)$
Dato che l'arco $(u, v)$ è un arco leggero allora 
	$w(u, v) - w(x, y) \leq 0$
	$$W(T) \leq W(T'') \leq W(T) \implies W(T'') = W(T)$$

	Quindi $T''$ è un MST che contiene $(u, v)$
	
	Adesso dobbiamo dimostrare che anche $A$ appartenga a $T''$.
	Utilizzando l'ipotesi 2 sappiamo di per certo che l'arco che abbiamo rimosso $(x, y)$ non poteva appartenere ad $A$ (perché l'arco $(x, y)$ attraversava il taglio).
	Quindi $A$ non è stato toccato e di conseguenza appartiene anch'esso a $T$

### Corollario del teorema fondamentale

Sia $G =(V, E)$ un grafo non orientato e connesso, e valgano le seguenti ipotesi:
- Sia $A \subseteq E$  è un sottoinsieme di archi contenuto in un qualunque MST.
- Sia $C = (V_C, E_C)$ una componente connessa della foresta $G_A = (V, A)$ (ricordiamo che una foresta è un insieme di alberi disgiunti, quindi delle componenti connesse).
- Sia $(u, v)$ un arco leggero che connette $C$ ad un’altra componente connessa della foresta.

Allora esiste un MST che contiene $A \cup \{(u, v)\}$


