# Algoritmi per trovare un MST

Vediamo degli algoritmi per determinare un MST di un dato grafo.

## Modello generico dell'algoritmo

Vediamo una idea generica per la ricerca di un MST:

```cpp
generic_MST(G, w)
	A = ∅		//insieme di archi che vogliamo far diventare un MST
	while (A non forma un MST) /*oppure*/ (|A| < |V| - 1)
		trova un arco (u, v) che se aggiunto ad A,
		allora A continua a rappresentare un sottoinsieme di un MST
		A = A ∪ {(u, v)}
	return A
```

Facciamo una digressione per parlare degli elementi utili per gli algoritmi che vedremo:

Immaginiamo di avere tre insiemi disgiunti la cui unione contiene i numeri naturali da $1$ a $10$:

- $S_1 = \{4, 6, \textbf{7}, 1\}$
- $S_2 = \{\textbf{2}, 3, 5\}$
- $S_3 = \{8, 9, \textbf{10}\}$

Ogni insieme ha un **rappresentante**, segnato in grassetto.

Definiamo delle particolari **operazioni** sugli insiemi:

- `make_set(x) -> {x}`: crea un insieme formato da un unico elemento `x`
- `union(x, y) ->` $S_x \cup S_y$: dove `x` e `y` sono i rappresentanti di $S_x$ e $S_y$
- `find_set(x) ->` $y:x \in S_y$: restituisce il rappresentante dell'insieme in cui è contenuto $x$

Gli insiemi si possono **rappresentare** i più modi, tra cui:

- **Liste concatenate**
- **Heap binari**

### Verifica componenti connesse

Vogliamo trovare un algoritmo che dato un grafo verifichi se si tratta di una unica componente connesse, in caso contrario restituisca tutte le sue componenti connesse.

```c
connected_components(G)
	// crea insiemi composti da un solo vertice
	for-each v in V[G]				// V[G] è l'insieme dei vertici
		make_set(v)

	// scorre tutti gli archi e se un arco collega nodi appartenenti a insiemi diversi allora li unisce
	for-each (u, v) in E[G]			// E[G] è l'insieme degli archi
		if find_set(u) != find_set(v)
			union(u, v)
```

Ad esempio dato questo grafo

![enter image description here](https://i.ibb.co/sbgM1H5/image.png)

L'algoritmo si comporta nel seguente modo:

| Step | Insiemi | arco considerato |
|:--:|:--:|:--:|
| primo ciclo for-each | $\{1\},\{2\},\{3\},\{4\},\{5\},\{6\}$ | - |
| secondo ciclo: it. 1 | $\{1, 2\},\{3\},\{4\},\{5\},\{6\}$ | $(1, 2)$ |
| secondo ciclo: it. 2 | $\{1, 2\},\{3\},\{4, 5\},\{6\}$ | $(4, 5)$ |
| secondo ciclo: it. 3 | $\{1, 2, 3\},\{4, 5\},\{6\}$ | $(1, 3)$ |
| secondo ciclo: it. 4 | $\{1, 2, 3\},\{4, 5\},\{6\}$ | $(2, 3)$ |

## Algoritmo di Kruskal

Vediamo un algoritmo pratico per trovare un MST dato un grafo, **l'algoritmo di Kruskal**.

```c
kruskal(G, w)
	A = ∅
	for-each v in V[G]
		make_set(v)

	ordino gli archi di G in modo crescente
	for-each (u, v) in E[G]
		if find_set(u) != find_set(v)
			union(u, v)
			A = A ∪ {(u, v)}
	return A
```

L’idea consiste nell’isolare inizialmente tutti i vertici del grafo, definendo alberi disgiunti formati da un singolo vertice.
A partire da tale condizione Kruskal suggerisce di considerare, iterativamente, tutti gli archi del grafo in ordine di peso non decrescente (prima i più leggeri e poi i più pesanti) e di applicare ad ogni iterazione la seguente regola:
**se i vertici dell’arco non appartengono allo stesso albero allora unisci i due alberi, altrimenti ignora l’arco** (è anche possibile vederla come: se aggiungendo ad $A$ l'arco estratto si forma un ciclo allora ignori l'arco)

**Correttezza**
L'algoritmo rispetta il **corollario del teorema fondamentali degli MST**:
L'algoritmo è corretto in quanto A per tutto l'algoritmo rimane sempre un sottoinsiemi di un MST (anche l'insieme vuoto è un sottoinsieme di ogni MST).
Ordinare gli archi in modo non decrescente ci porta a considerare prima gli archi leggeri che connettono le componenti connesse.
La foresta $G_A = (V, A)$ inizialmente è formata da $n$ componenti connesse, e man mano che si avanza con l'algoritmo le componenti saranno connesse tramite gli archi leggeri fino a che non rimarrà una sola componente connessa, cioè sono stati estratti tutti gli $|V|-1$ archi necessari per formare un MST

**Complessità**
Il primo ciclo for compie $n$ iterazioni, dove $n$ è il numero di nodi del grafo.
L'ordinamento ha costo $m \log(m)$ dove $m$ è il numero di archi.
il secondo ciclo compie $m$ iterazioni e al suo interno:
	- `find_set` ha costo $\log(m)$
	- `union` ha costo $\log(m)$
la complessità è quindi:

$$T(n, m) = O(n + m\log(m) + m\log(m)) = O(m\log (m))$$

Dove ricordiamo che $m \geq n-1$


## Esecuzione Kruskal

Consideriamo il seguente grafo

![enter image description here](https://i.ibb.co/R74dkdf/image.png)

Partendo dalla seguente foresta formata da alberi composti da un solo nodo:

![enter image description here](https://i.ibb.co/bJQW9w8/image.png)

Colleghiamo gli alberi tra loro, considerando prima gli **archi con peso minore**
![enter image description here](https://i.ibb.co/w4Jp84M/image.png)

## Algoritmo di Prim

L'algoritmo di Prim determina un MST di un grafo dato un suo nodo di partenza detto **radice**.

Nell'algoritmo di Kruskal ad ogni iterazione viene memorizzato un insieme di archi che alla fine diventa un albero.
D'altra parte l'**algoritmo di Prim** considera il grafo come un albero radicato, e **dalla sua radice fa crescere un albero di copertura**.
La costruzione dell'albero $A$ avviene servendosi di un campo particolare $\pi[u], u \in V$ associato ad ogni vertice, che conterrà un riferimento ad un altro nodo (**il predecessore**).

L'algoritmo si serve di una **coda di minima priorità** $Q$ che memorizza i vertici del grafo per estrarli, uno alla volta, sulla base del campo $\text{Key}[u], u \in V$ che contiene il minore tra i pesi degli archi di $u$ che **attraversano il taglio.**

Quindi:
- $Q$ è un insieme che contiene i vertici da estrarre
- $V\setminus Q$ contiene i vertici già estratti
- inizialmente solo la radice fa parte di $V \setminus Q$
- implicitamente ci immaginiamo un **taglio** che divide $Q$ da $V\setminus Q$
- $\text{Key}[u]$ conterrà il peso dell'arco di peso minimo di $u$
- $\pi[u]$ rappresenta il vertice di destinazione dell'arco di peso minimo di $u$.

Vediamo i passaggi dell'algoritmo

1. **Inizializzazione**:
	All'inizio l'algoritmo, $Q$ corrisponde all'insieme dei vertici $V$.
	Il campo $\text{Key}$ di ogni nodo viene inizializzato a $\infty$, tranne per la radice che viene inizializzato a $0$
	Il campo $\pi$ di ogni nodo viene inizializzato a NIL
2. **Estrazione**:
	Finche $Q$ non è vuoto, viene estratto il minimo da $Q$, cioè il vertice del grafo che non è ancora stato estratto avente il campo $\text{Key}$ minore.
	Il valore estratto viene rimosso da $Q$ e entra in $V \setminus Q$.
	L'estrazione prevede la creazione di un **taglio** che divide i nodi non ancora estratti (cioè quelli in $Q$) da quelli già estratti (cioè quelli in $V \setminus Q$)
3. **Aggiornamento campi**:
	Quando si estrae un nodo bisogna aggiornare il campo $\text{Key}$ dei nodi adiacenti al nodo estratto, in quanto viene generato un nuovo taglio (ricorda che il campo $\text{Key}$ dipende dal taglio)


```c
Prim(G, w, r)
	Q = V[G]
	for-each u in V[G]
		Key[u] = ∞
		π[u] = NIL

	Key[r] = 0
	while Q != ∅
		u = extract_min(Q)			//estrae il minimo da Q, dopo questa istruzione il valore estratto non sarà più presente in Q
		for-each v in Adj[u]		// scorre i vertici adiacenti di u
			if v in Q AND w(u, v) < Key[v]	//aggiorna i valori Key in preparazione al prossimo taglio
				Key[v] = w(u, v)
				π[v] = u
	return A = {(π[v], v) in E    t.c.    v in V\{r}}
```

**Correttezza**
L'algoritmo rispetta il teorema fondamentale degli MST, cioè ad ogni istante vale che:

$$A = \left\{(\pi_u, u) \in E\hspace{2mm} | \hspace{2mm} u \in V \setminus Q \setminus \{r\}\right\}$$

Cioè l'insieme $A$ è composto da archi $(\pi_u, u)$, e dato che $u$ è il nodo appena estratto allora fa parte di $V \setminus Q$ e $\pi_u$ è il suo predecessore che è già stato estratto prima di lui, quindi faceva già parte di $V \setminus Q$.

Una volta estratto un vertice $u$, viene scelto come successivo un vertice in modo che faccia parte di un arco leggero che attraversa il taglio tra i nodi estratti e quelli ancora da estrarre.

**Complessità**
- il primo ciclo esegue $n$ iterazioni, dove $n$ è il numero di nodi del grafo
- il ciclo while itera finche $Q$ non è vuoto. Ad ogni iterazione viene estratto un nodo, quindi il ciclo esegue $n$ iterazioni. L'estrazione in sé ha complessità $\log n$ se la immaginiamo implementata con un Heap.
	Quindi il ciclo + l'estrazione ha complessità: $n \log n$
- il ciclo for finale esegue per ogni nodo $u$, $\deg(u)$ iterazioni, quindi in totale, dopo la terminazione dell'algoritmo, vengono fatte $\deg(u)$ iterazioni (il ciclo for) su $n$ nodi (il ciclo while)
$$\sum_{i = 1}^n \deg(u_i)$$
che per il lemma della stretta di mano abbiamo visto equivalere a $2m \to m$.
Inoltre la riga contenente `Key[v] = w(u, v)` ha una complessità $\log(n)$ perché essendo implementato con un heap, esso potrebbe aver bisogno di particolari computazioni quando viene modificato.
Quindi questa sezione ha complessità $m\log n$

	$$T(n, m) = n + n\log(n) + m \log(n)$$

	Dato che $m \geq n-1$ (perché il grafo iniziale è connesso) allora domina $m \log(n)$

	$$T(n, m) = O(m \log(n))$$

## Esecuzione di Prim

### Esempio 1

Dato il seguente grafo
![enter image description here](https://i.ibb.co/VVW3sCr/image.png)

Vediamo una esecuzione grafica:
![enter image description here](https://i.ibb.co/qrhNr26/esempio-prim.png)

Vediamo come cambiano le strutture dati:
![enter image description here](https://i.ibb.co/rZTVr53/image.png)

### Esempio 2

Dato il seguente grafo
![enter image description here](https://i.ibb.co/YkVrqz5/image.png)

Considera il nodo 1 come radice.

L'ordine di estrazione dei vertici è il seguente
$$1 \to 4 \to 2 \to 3 \to 5 \to 6$$

Gli archi che compongono l'MST sono 
$$(1, 4) (1, 2) (2, 3) (1, 5) (2, 6)$$

![enter image description here](https://i.ibb.co/bQxvbCd/image.png)

