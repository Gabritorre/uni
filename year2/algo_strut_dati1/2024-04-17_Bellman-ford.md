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

	// l'algoritmo teoricamente è finito ma scriviamo un pezzo in più per
	// riconoscere la presenza di cicli negativi
	for-each(u, v) in E[G]
		if (d[v] > d[u] + w(u, v))
			return (false, d, π)		//ciclo negativo presente
	return (true, d, π)
}
```

L'algoritmo potrebbe concludersi alla fine dei due cicli innestati, però è necessario controllare se il grafo presenta cicli negativi prima di ritornare il risultato, se infatti fossero presenti allora i risultati calcolati non sarebbero affidabili.
Il controllo per verificare la presenza di cicli negativi avviene passando ogni arco del grafo, se viene trovato che un nodo può essere raggiunto con un cammino migliore rispetto a quello trovato dopo tutte le passate fatte, allora è presente un ciclo negativo.

## Complessità

- la `init_ss()` ha complessità lineare $n$
- il primo ciclo viene fatto $n-1$ volte, il ciclo innestato viene fatto $m$ volte. la complessità della `relax` è costante in quanto non vengono usate code di priorità. Questa parte ha complessità $\Theta(m(n-1))$
- il ciclo finale esegue $m$ iterazioni

$$T(n) = n + m(n-1) + m$$

$$T(n) = m\cdot n$$

## Correttezza

Sia $G = (V, E, w)$ orientato pesato sugli archi con sorgente $s\in V$.
- Se $G$ contiene cicli negativi **raggiungibili dalla sorgente** ritorna `false`.
- Se $G$ non contiene cicli negativi **raggiungibili dalla sorgente** allora alla fine dell'algoritmo vale che:
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
- Potrebbero esistere comunque cammini minimi non semplici in presenza di cicli il cui peso somma $0$
- È possibile ottenere un cammino semplice da uno non semplice rimuovendo tali cicli

**Osservazione più importante**: un cammino semplice che collega due nodi avrà al massimo $n-1$ archi, cioè potrebbe essere semplicemente un arco unico diretto, oppure un percorso che tocca tutti i nodi del grafo.
È proprio per questo motivo che l'algoritmo fa $n-1$ passate.

Dato un cammino minimo semplice che tocca tutti gli $n$ nodi del grafo possiamo dire che:
poiché il cammino è minimo, possiamo sfruttare il fatto che anche i suoi sottocammini sono minimi per applicare la **proprietà della convergenza ad ogni passata**: questo ci permette di ottenere che ad ogni passata almeno un nodo verrà agganciato alla sua distanza minima dalla sorgente.

![enter image description here](https://i.ibb.co/d29qzwt/image.png)

- dopo la `init_ss`: $d[x_0] = \delta(x_0, x_0)$ 
- dopo la prima passata: $d[x_1] = \delta(x_0, x_1)$
- dopo la seconda passata: $d[x_2] = \delta(x_0, x_2)$
- dopo la k-esima passata: $d[x_k] = \delta(x_0, x_k)$

Alla $(n-1)$-esima passata l'ultimo arco raggiungerà la sua distanza minima, questo perché ad ogni passata viene agganciata la distanza di un arco e tutti i nodi precedenti sono già stati agganciati alla loro distanza minima.

### Dimostrazione punto 3
Se alla fine l'algoritmo restituisce `true` allora vale che 

$$\forall (u, v) \in E, \hspace{5mm} d[v] \leq d[u] + w(u, v)$$

Cioè non viene mai eseguito l'`if` nell'ultimo ciclo `for`.

Dopo $n-1$ passate abbiamo visto che $d[u] = \delta(s, u)$ per ogni $u$
Possiamo usare questa conseguenza all'interno della proprietà di disuguaglianza triangolare

ricordiamo la formula della disuguaglianza triangolare:
$$\delta(s, v) \leq \delta(s, u) + w(u, v)$$

possiamo sostituire i campi ed ottenere:

$$d[v] \leq d[u]+ w(u, v)$$

### Dimostrazione cicli negativi

Dimostriamo che in presenza di un ciclo negativo raggiungibile dalla sorgente viene ritornato `False`.

Supponiamo **per assurdo** che invece venga ritornato `True`.
Guardando il significato della parte finale dell'algoritmo possiamo dire che il corpo dell'`if` non viene mai eseguito (cioè l'algoritmo ritorna `true`) se

$$\forall (u, v) \in E \hspace{10mm} d[v] \leq d[u] + w(u, v)$$

Sia $c = <x_0, x_1, ..., x_q>$ un ciclo negativo raggiungibile dalla sorgente, cioè in cui 
- $$x_0 = x_q$$
- $$\sum_{i = 1}^{q}w(x_{i-1}, x_i) < 0$$

Se l'algoritmo (per assurdo) ritornasse `true` allora varrebbe la precedente proprietà anche per i nodi all'interno del ciclo negativo

$$\forall i = 1...q \hspace{10mm} d[x_i] \leq d[x_{i-1}] + w(x_{i-1}, x_i)$$

Scrivendo la disequazione come sommatorie, otteniamo

$$\sum_{i=1}^{q} d[x_i] \leq \sum_{i=1}^{q} d[x_{i-1}] + \sum_{i=1}^{q} w(x_{i-1}, x_i)$$

esplicitando le prime due sommatorie notiamo che sono esattamente identiche (ricordando che $x_0 = x_q \to d[x_0] = d[x_q]$)

$\sum_{i=1}^{q} d[x_i] = d[x_1] + d[x_2] + d[x_3] + ... + d[x_{q-1}] + d[x_q]$
$\sum_{i=1}^{q} d[x_{i-1}] = d[x_0] + d[x_1] + d[x_2] + ... + d[x_{q-1}]$

Quindi possiamo eliderle dalla disequazione

$$\cancel{\sum_{i=1}^{q} d[x_i]} \leq \cancel{\sum_{i=1}^{q} d[x_{i-1}]} + \sum_{i=1}^{q} w(x_{i-1}, x_i)$$

otteniamo così l'assurdo:

$$0 \leq \sum_{i=1}^{q} w(x_{i-1}, x_i)$$

Cioè ci risulta che la somma dei pesi è positiva ma per ipotesi avevamo assunto che fossimo in un ciclo negativo, cioè con la somma dei pesi minore di $0$


## Esempio esecuzione Bellman-ford

Fare un esempio passo passo all'interno di una immagine risulta un po' scomodo... un video è decisamente migliore: https://www.youtube.com/watch?v=obWXjtg0L64

Nota: l'ordine con cui si estraggono gli archi è casuale e non impatta sulla correttezza dell'algoritmo

## Confronto tra Dijkstra e Bellman-ford

ricordiamo che in caso di:
- grafo sparso: $m \approx n$
- grafo denso: $m \approx n^2$

|  | Dijkstra| Bellman-ford|
|:--:|:--:|:--:|
| **Grafo sparso** | $n\log(n)$ | $n^2$ | 
| **Grafo denso** | $n^2$ | $n^3$ |

Dijkstra risulta essere sempre migliore di Bellman-ford, ma il vantaggio di quest'ultimo è il suo funzionamento anche in presenza di pesi negativi.



