# Cammini minimi

Affrontiamo il problema dei **cammini minimi**.

Lavoreremo con grafi **orientati**, non necessariamente connessi e pesati sugli archi:
- è possibile utilizzare anche grafi non orientati, trasformando un arco singolo in due archi di orientamento opposto
		![enter image description here](https://i.ibb.co/3SNN5zN/image.png)
- Inizialmente assumiamo che il peso sia un numero reale, quindi sia positivo che negativo. Successivamente faremo assunzioni specifiche.

## Terminologie

### Raggiungibilità

Dato un grafo $G=(V, E, w)$ orientato e pesato sugli archi, e scelti due nodi $u, v \in V$
diremo che $v$ **è raggiungibile** da $u$ se esiste un cammino tra $u$ e $v$

Il nodo da cui parte il cammino si chiamerà **sorgente**.
il nodo in cui finisce il cammino si chiamerà **destinazione**.

### Insieme di cammini

Due nodi possono avere più cammini che li connettono, indicheremo **l'insieme dei cammini** che connettono due nodi $u, v \in V$ nel seguente modo:

$$\mathscr{C}(u, v) = \{\phi \text{ t.c. } \phi \text{ è un cammino tra $u$ e $v$}\}$$

### Costo di un cammino

Definiamo il **costo di un cammino** come la somma dei pesi sugli archi che lo compongono.

$$w(\phi) = \sum_{i = 1}^{q}w(x_{i-1}, x_i)$$

dove $q$ è l'ultimo vertice del cammino.

### Ciclo negativo

Un **ciclo negativo** è un ciclo il cui peso è negativo, ad esempio:

![enter image description here](https://i.ibb.co/dfhqVjq/image.png)


### Distanza

Definiamo la distanza tra due nodi $u, v \in V$ nel seguente modo:

$$\delta(u, v) = \begin{cases}
\underset{\phi \in \mathscr{C}(u, v)}{\min} w(\phi) & \text{se } \mathscr{C}(u, v) \neq \emptyset \\
+\infty & \text{se } \mathscr{C}(u, v) = \emptyset \\
-\infty & \text{se } \mathscr{C}(u, v) \neq \emptyset \text{ e se esiste un ciclo negativo raggiungibile dalla sorgente}
\end{cases}$$

- La **distanza** tra due nodi è quindi il **cammino di costo minimo tra i due nodi** (quando esiste).
- Il $+\infty$ si mette quando il nodo di **destinazione non è raggiungibile**
- Mentre il $-\infty$ si mette quando non esiste un cammino che è minimo, in quanto avendo cicli negativi esisterà sempre un cammino minore. Infatti ciclando su un ciclo negativo si decrementa continuamente il costo del cammino.


**Nota** la distanza di un vertice con se stesso è $0$ **solo se non appartiene ad un ciclo negativo**. Altrimenti il suo costo è $-\infty$.

**Nota** se un grafo è disconnesso e sorgente e destinazione sono in componenti connesse diverse, e la **destinazione appartiene ad un ciclo negativo**, allora la **distanza tra i due nodi è comunque** $+\infty$ in quanto la destinazione non è raggiungibile.


Vediamo in verde i pesi di ogni nodo considerando come sorgente il nodo $S$ del seguente grafo **non connesso** $G$

![enter image description here](https://i.ibb.co/GJ2y80F/image.png)


## Tipologie di problemi

Abbiamo 4 tipologie di problemi sulla distanza in base alla molteplicità della sorgente e destinazione.
Nota che con "destinazione multipla" si intende **tutti gli altri nodi del grafo** che non sono la sorgente (analogo per "sorgente multipla")

1. Sorgente singola destinazione singola
	**Input**: la sorgente e la destinazione $u, v \in V$
	**Output**: la distanza tra i due nodi $\delta(u, v)$
2. Sorgente singola destinazione multipla
	**Input**: solo la sorgente $s \in V$
	**Output**: la distanza $\delta(s, v)\,  \forall v \in V$
3. Sorgente multipla destinazione singola
	**Input**: solo la destinazione $d \in V$
	**Output**: la distanza $\delta(v, d)\,  \forall v \in V$
4. Sorgente multipla destinazione multipla
	**Input**: tutti i nodi
	**Output**: la distanza $\delta(u, v)\,  \forall u, v \in V$

Non ci occuperemo di tutti i problemi, ci focalizzeremo su "Sorgente singola destinazione multipla" e "Sorgente multipla destinazione multipla":

- L'algoritmo per risolvere "Sorgente singola destinazione multipla" si può applicare anche per risolvere il problema "Sorgente multipla destinazione singola" **invertendo l'orientamento degli archi**
- L'algoritmo per risolvere "Sorgente singola destinazione singola" ha una complessità paragonabile a "Sorgente singola destinazione multipla", quindi tanto vale riapplicare quello
- Iterando l'algoritmo per "Sorgente singola destinazione multipla" si può risolvere "Sorgente multipla destinazione multipla", ma questo metodo non è efficiente. Vedremo un algoritmo specifico per risolvere questo problema


Per risolvere "Sorgente singola destinazione multipla" vedremo due algoritmo: quello di **Dijkstra** e quello di **Bellman-Ford**.
Mentre per risolvere "Sorgente multipla destinazione multipla" vedremo l'algoritmo di **Floyd-Warshall**.


## Proprietà cammini

> Sottocammini di cammini minimi sono minimi

Vuol dire che se abbiamo un **cammino minimo** tra i nodi $X$ e $Z$, del tipo:

$<X, Y, N, K, Z>$

allora anche i sottocammini interni, ad esempio $<X, Y, N>$, $<Y, N, K>$,  sono a loro volta minimi.

**Dimostrazione** per assurdo

Considerando l'esempio sopra, supponiamo per assurdo che tra $Y$ e $K$ esista un cammino di costo minore, allora ci sarebbe un cammino che collega $X$ e $Z$ con un peso minore dell'attuale cammino, questo è assurdo perché quel cammino per ipotesi era un cammino minimo, abbiamo contraddetto l'ipotesi iniziale.


## Strutture dati degli algoritmi

Vediamo le strutture dati utilizzate dagli algoritmi che vedremo successivamente.
Ricordiamo che il risultato che vogliamo ottenere dagli algoritmo è un valore che corrisponde al **costo del cammino minimo**, e vogliamo anche l'**insieme dei nodi attraversati dal cammino minimo**.

Per ogni vertice del grafo $u \in V$:

- $d[u]$ è la "stima" della distanza tra la sorgente e il nodo $u$, è una stima in quanto essa cambia durante l'esecuzione e solo alla fine rappresenta la distanza vera tra la sorgente e il nodo $u$.
- $\pi[u]$ è un puntatore ad un altro vertice, utile per ricostruire il cammino minimo finale

$\pi$

## Funzioni ausiliarie degli algoritmi

La prima funzione si occupa di inizializzare le due strutture dati

```c
init_ss(G, s) {
	for-each u in V[G]
		d[u] = +∞
		π[u] = NIL
	d[s] = 0
}
```
Il suo tempo di esecuzione è lineare rispetto al numero di nodi del grafo

La seconda funzione si occupa dell'aggiornamento delle strutture dati, dati due nodi

```c
relax(u, v, w(u, v)) {
	if (d[v] > d[u] + w(u, v)) 
		d[v] = d[u] + w(u, v)
		π[v] = u
}
```

Il tempo di esecuzione dipende dalla implementazione.

Soffermiamoci un attimo sulla `relax`:
Ricordiamoci che durante l'esecuzione $d[v]$ rappresenta il costo del cammino migliore trovato fino a quel momento.
la funzione `relax` dice che se passando dal nodo $u$ si ottiene un costo migliore per raggiungere $v$ allora bisogna aggiornare il costo di $v$ e il suo puntatore.

![enter image description here](https://i.ibb.co/8c4MLzm/image.png)

Considerazioni sulla `relax`:

- la `relax` può modificare solo il suo secondo parametro
- se la `relax` effettua una modifica, essa migliorerà sicuramente il costo del cammino



## Algoritmo di Dijkstra

Possiamo descrivere l'algoritmo di Dijkstra nel seguente modo:
**Viene estratto un vertice alla volta, ad ogni estrazione si rilassano gli archi uscenti dal vettore estratto.**

Dijkstra fa uso di una coda di priorità $Q$ contenente le informazioni sul campo $d$ per ogni **nodo** del grafo **ancora da estrarre**.
Utilizza anche un insieme $S$ dove vengono mantenuti i **nodi già estratti**

```c
dijkstra(G, w, s)
	init_ss(G, s)
	Q = V[G]
	S = ∅ 
	while Q != ∅
		u = extract_min(Q)
		S = S ∪ {u}
		for-each v in Adj[u]
			relax(u, v, w(u, v))
```


