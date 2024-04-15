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



## Strutture dati degli algoritmi

Vediamo le strutture dati utilizzate dagli algoritmi che vedremo successivamente.
Ricordiamo che il risultato che vogliamo ottenere dagli algoritmo è un valore che corrisponde al **costo del cammino minimo**, e vogliamo anche l'**insieme dei nodi attraversati dal cammino minimo**.

Per ogni vertice del grafo $u \in V$:

- $d[u]$ è la "stima" della distanza tra la sorgente e il nodo $u$, è una stima in quanto essa cambia durante l'esecuzione e solo alla fine rappresenta la distanza vera tra la sorgente e il nodo $u$.
- $\pi[u]$ è un puntatore ad un altro vertice, utile per ricostruire il cammino minimo finale


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


## Proprietà cammini

Vediamo delle proprietà relative ai cammini, che ci saranno utili per gli algoritmi.

### Sottocammini

> Sottocammini di cammini minimi sono minimi

Vuol dire che se abbiamo un **cammino minimo** tra i nodi $X$ e $Z$, del tipo:

$<X, Y, N, K, Z>$

allora anche i sottocammini interni, ad esempio $<X, Y, N>$, $<Y, N, K>$,  sono a loro volta minimi.

**Dimostrazione** per assurdo

Considerando l'esempio sopra, supponiamo per assurdo che tra $Y$ e $K$ esista un cammino di costo minore, allora ci sarebbe un cammino che collega $X$ e $Z$ con un peso minore dell'attuale cammino, questo è assurdo perché quel cammino per ipotesi era un cammino minimo, abbiamo contraddetto l'ipotesi iniziale.

### Grafo dei predecessori

Il grafo dei predecessori si indica con $G_\pi =(V_\pi, E_\pi)$ ed è un sottografo di $G$ che dipende dal campo $\pi$ dei vertici di $G$.

- $V_\pi = \{s\} \cup \{v \in V\, |\, \pi[v] \neq NIL\}$
- $E_\pi = \{(\pi[v], v) \in E \, |\, v \in V_\pi \setminus \{s\}\}$

È un grafo che si evolve durante l'algoritmo e che ad ogni step è composto solo dai vertici che hanno un predecessore in quel determinato momento (e in più il nodo sorgente)

Vediamo un esempio della sua costruzione in una fase intermedia di un algoritmo per trovare i cammini minimi.
![enter image description here](https://i.ibb.co/tzGkYdv/image.png)

Al termine degli algoritmi di dei cammini minimi $G_\pi$ farà parte del risultato

### Albero dei cammini minimi

L'albero dei cammini minimi si indica come $G' = (V', E')$ è un sottografo di $G=(V, E, w)$ in cui valgono le seguenti proprietà:
1. $V' = \{v \in V \, |\, \delta(s, v) < +\infty\}$ cioè i vertici devono essere raggiungibili dalla sorgente
2. $G'$ forma un albero radicato in $s$
3. $\forall v \in V'$ l'unico cammino che connette la sorgente $s$ con il nodo $v$ in $G'$ è un cammino minimo in $G$


![enter image description here](https://i.ibb.co/Qp1Yc51/image.png)

Alla fine dell'algoritmo vogliamo che il grafo dei predecessori $G_\pi$ sia un albero dei cammini minimi.

### Disuguaglianza triangolare

Considerando un grafo $G = (V, E)$ con nodo sorgente $s \in V$ e un arco $(u, v) \in E$ allora vale che:

$$\delta(s, v) \leq \delta(s, u) + w(u, v)$$

Vediamo due esempi:

![enter image description here](https://i.ibb.co/FmS9QHH/image.png)

**Dimostrazione**
Suddividiamo 3 casi:

- $\delta(s, u) = +\infty$ cioè $u$ non è raggiungibile da $s$, allora è sicuramente vero che $\delta(s,v)\leq + \infty + w(u, v)$ con $w(u, v)$ valore reale.
- $\delta(s, u) = -\infty$ cioè è presente un ciclo negativo tra $s$ e $u$ allora varrà che
	$\delta(s, v) \leq -\infty + w(u, v)$, ma a questo punto anche $\delta(s, v) = -\infty$ a causa del ciclo negativo, quindi è verificata la condizione
- $\delta(s, v) \in \mathbb{R}$, cioè esiste un cammino senza cicli tra $s$ e $u$, in questo caso rientriamo negli esempi sopra mostrati: se l'unico cammino per arrivare a $v$ è passando per $u$ e l'arco $(u, v)$ allora $\delta(s, v)$ sarà esattamente uguale a $\delta(s, u) + w(u, v)$. Ma è possibile che esistano anche cammini migliori, cioè che $\delta(s, v) < \delta(s, v) + w(u, v)$

### Proprietà del limite inferiore

La proprietà afferma che in qualsiasi algoritmo che:
1. inizializza i dati con `init_ss`
2. usa esclusivamente la `relax` pr aggiornare $d$ e $\pi$

vale che 

$$\delta(s, v) \leq d[v]$$

cioè che la distanza stimata tra $s$ e $v$ che noi definiamo come $d[v]$ non andrà mai al di sotto della distanza reale tra $s$ e $v$, che noi definiamo come $\delta(s, v)$, qualunque sia la sequenza o la quantità di `relax` che vengono eseguite.

In altre parole $\delta(s, v)$ rappresenta un **limite inferiore** per $d[v]$

Inoltre se dovesse capitare che $\delta(s, v) = d[v]$, che si dice "la distanza stimata ha agganciato la distanza reale" allora nessuna `relax` potrà modificare il valore di $d[v]$

**Dimostrazione**

Separiamo due casi:

1. Dimostrazione della proprietà subito dopo la `init_ss`:
	Per i nodi che non sono la sorgente, allora $d[v] = +\infty$, che verifica la proprietà
	$$\delta(s, v) \leq + \infty$$
	
	Per la sorgente invece $d[s] = 0$ e la distanza vale per definizione $\delta(s, s) = 0$ 
	$$0 \leq 0$$
	
	Nel caso in cui la sorgente $s$ sia all'interno di un ciclo negativo la proprietà vale comunque, infatti $\delta(s, s) = -\infty$
	$$-\infty \leq 0$$

2. Supponiamo per assurdo che dopo una `relax` si ha che $d[v] < \delta(s, v)$ **per la prima volta** durante l'algoritmo. Immaginiamo di trovarci nella seguente situazione

	![enter image description here](https://i.ibb.co/tLs7637/image.png)

	dopo la `relax` avremo che
	$$d[v] = d[u] + w(u, v)$$
	Noi però stiamo assumendo per assurdo che
	$$d[u] + w(u, v) < \delta(s, v)$$
	e per la disuguaglianza triangolare possiamo scrivere che 
	$$d[u] + w(u, v) < \delta(s, v) \leq \delta(s, u) + w(u, v)$$
	
	allora possiamo scrivere che
	$$d[u] + \cancel{w(u, v)} <\delta(s, u) + \cancel{w(u, v)}$$
	
	$$d[u] < \delta(s, u)$$
	
	ma questo è assurdo in quanto l'attuale relax non è la prima ad aver infranto la proprietà come avevamo assunto inizialmente, infatti anche il nodo $u$ l'ha infranta precedentemente.

### Proprietà della convergenza

In un **cammino minimo** $<s, ..., u, v>$ se si arriva al punto in cui $d[u] = \delta(s, u)$ cioè il penultimo nodo del cammino ha già raggiunto come distanza stimata la sua distanza reale allora nella `relax` sul nodo finale si avrà $d[v] = \delta(s, v)$

**Dimostrazione**
dopo l'ultima `relax`, per la proprietà del limite inferiore abbiamo che 

$$\delta(s, v) \leq d[v]$$

la `relax` assicura che
$$d[v] \leq d[u] + w(u, v)$$

Per ipotesi possiamo riscrivere come
$$d[v] \leq \delta(s, u) + w(u, v)$$

Dato che siamo all'interno di un cammino minimo

$$\delta(s, u) + w(u, v) = \delta(s, v)$$

Abbiamo quindi raggiunto la seguente condizione

$$\delta(s, v) \leq d[v] \leq \delta(s, v)$$

$$d[v] = \delta(s, v)$$


