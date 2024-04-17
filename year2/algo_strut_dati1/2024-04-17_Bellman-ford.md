# Bellman-ford

Vediamo ora un algoritmo di risoluzione di cammini minimi con sorgente singola, simile a Dijkstra ma che funziona anche con **pesi negativi** (ma non con cicli negativi).

Utilizza le stesse strutture dati ($d$ e $\pi$) e funzioni (`init_ss()`, `relax()`) di Dijkstra, ma la logica è diversa.

Possiamo sintetizzare il comportamento dell'algoritmo di bellman-ford in
"vengono eseguite $n-1$ passate, in ogni passata vengono rilassati tutti gli archi del grafo"

```c
bellman-ford(G, w, s) {
	init_ss(G)
	for i = 1 to n-1	// n-1 passate
		for-each (u, v) in E[G]
			relax(u, v, w(u, v))

	// riconoscere la presenza di cicli negativi
	for-each(u, v) in E[G]
		if (d[v] > d[u] + w(u, v))
			return (false, d, π)		//ciclo negativo presente
	return (true, d, π)
}
```

L'algoritmo potrebbe concludersi alla fine dei due cicli innestati, però è necessario controllare se il grafo presenta cicli negativi prima di ritornare il risultato, se infatti fossero presenti allora i risultati calcolati non sarebbero affidabili.
Il controllo per verificare la presenza di cicli negativi avviene passando ogni arco del grafo, se viene trovato che un nodo può essere raggiunto con un cammino migliore nonostante tutte le passate, allora è presente un ciclo negativo.


## Complessità

- la `init_ss()` ha complessità lineare $n$
- il primo ciclo viene fatto $n-1$ volte, il ciclo innestato viene fatto $m$ volte. la complessità della `relax` è costante in quanto non vengono usate code di priorità. $\Theta(m(n-1))$
- il ciclo finale esegue $m$ iterazioni

$$T(n) = n + m(n-1) + m$$

$$T(n) = m\cdot n$$


## Correttezza

Sia $G = (V, E, w)$ orientato pesato sugli archi con sorgente $s\in V$.
Se $G$ contiene cicli negativi **raggiungibili dalla sorgente** ritorna `false`.
Se $G$ non contiene cicli negativi **raggiungibili dalla sorgente** allora alla fine dell'algoritmo vale che:

1. $d[u] = \delta(s, u)\, \forall u \in V$ 
2. $G_\pi$ è un albero di cammini minimi
3. L'algoritmo restituisce `true`

Dimostreremo solo i punti 1, 3 e il comportamento in caso di cicli negativi

## Dimostrazione correttezza

### Dimostrazione punto 1

Dato che non ci sono cicli negativi, la distanza $\delta(s, u)$ per ogni nodo $u$ può valere:
- $\delta(s, u) = +\infty$: in caso di nodo non raggiungibile, ma questo caso di dimostra immediatamente infatti subito dopo la `init_ss()` vale subito $d[u] = +\infty = \delta(s, u)$
- $\delta(s, u) \in \mathbb{R}$: in caso di nodo raggiungibile.

Approfondiamo il secondo caso:
Se si verifica allora esisterà un cammino minimo tra $s$ e $u$.
Sia $p = <x_0, x_1, ..., x_q>$ un cammino minimo **semplice**.
Osservazioni:
- Se due nodi sono raggiungibili e in assenza di cicli negativi **esiste sempre un ciclo minimo semplice**.
- potrebbero esistere comunque cammini minimi non semplici in presenza di cicli il cui peso somma $0$
- è possibile ottenere un cammino semplice da uno non semplice rimuovendo tali cicli

**Osservazione più importante**: un cammino semplice composto da $n$ nodi avrà al massimo $n-1$ archi
È proprio per questo motivo che l'algoritmo fa $n-1$ passate.

Dato che il cammino è minimo possiamo sfruttare il fatto che anche i suoi sottocammini sono minimi e applicare la proprietà della convergenza per ogni passata: questo ci permette di ottenere che ad ogni passata almeno un nodo verrà agganciato alla sua distanza minima dalla sorgente.

![enter image description here](https://i.ibb.co/d29qzwt/image.png)

- dopo la `init_ss`: $d[x_0] = \delta(x_0, x_0)$ 
- dopo la prima passata: $d[x_1] = \delta(x_0, x_1)$
- dopo la seconda passata: $d[x_2] = \delta(x_0, x_2)$
- dopo la k-esima passata: $d[x_k] = \delta(x_0, x_k)$

dopo la $(n-1)$-esima passata tutti gli archi avranno raggiunto la loro distanza minima, questo perché ad ogni passata viene agganciata la distanza di un arco e in un cammino minimo semplice ci sono al massimo $n-1$ archi.

### Dimostrazione punto 3
Se alla fine l'algoritmo restituisce `true` allora vale che 

$$\forall (u, v) \in E, \hspace{5mm} d[v] \leq d[u] + w(u, v)$$

dopo $n-1$ passate abbiamo visto che $d[u] = \delta(s, u)$ per ogni $u$
Possiamo usare questa conseguenza all'interno della proprietà di disuguaglianza triangolare

ricordiamo la formula della disuguaglianza triangolare:
$$\delta(s, v) \leq \delta(s, u) + w(u, v)$$

possiamo sostituire i campi ed ottenere:

$$d[v] \leq d[u]+ w(u, v)$$

### Dimostrazione cicli negativi
