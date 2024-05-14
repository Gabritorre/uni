# Algoritmi greedy

Gli algoritmi greedy sono una categoria di algoritmi che utilizzano il seguente approccio:
Durante l'esecuzione è possibile che si presentino un insieme di scelte e ad ogni scelta si cerca sempre di scegliere l'opzione ottimale, con lo scopo che tutte le scelte ottimali portino ad una soluzione ottimale.

Algoritmi come **Kruskal** (sceglie sempre l'arco più leggero), **Prim** (sceglie sempre il vertice con campo `key` minore) e **Dijkstra** (sceglie sempre il vertice con campo `d` minore) sono algoritmi greedy

D'altra parte Bellman-ford e Floyd-Warshall non sono algoritmi greedy

## Problema della selezione delle attività

Vediamo un problema risolvibile tramite un algoritmo greedy che ci porterà a formulare la struttura generale di un algoritmo greedy.

Supponiamo di avere $n$ attività, indicizzate da $1$ a $n$.
L'attività $i$-esima ha un tempo di inizio $s_i$, e un tempo di fine $f_i$.
Due attività $i$ e $j$ si dicono **compatibili** se i tempi delle attività non si intersecano

$$[s_i, f_i[\,  \cap \,[s_j, f_j[ = \emptyset$$

Nota: gli estremi di fine sono esclusi in quanto se un'attività inizia esattamente quando un'altra attività finisce le consideriamo comunque compatibili (é una libera assunzione)

Lo scopo dell'algoritmo è quello di determinare il numero massimo di attività tra loro compatibili.

Nel nostro algoritmo la scelta ottima sarà quella di estrarre l'attività con il tempo di fine più vicino, vediamo l'algoritmo:

```cpp
greedy_selector(s, f)		//s, f sono due vettori contenenti i tempi di inizo e fine
	n = length(s)		//ottengo il numero di attività
	/*ordina le n attività rispetto al tempo di fine in modo crescente*/
	A = {1} 	//inserisco in A la prima attività (che rispetta l'ordinamento)
	j = 1		// memorizza l'ultima attività inserita
	// scorro le attività, se il tempo di inizio dell'attività considerata
	// avviene dopo il tempo di fine dell'ultima attività inserita allora considero l'attività
	for i = 2 to n
		if s[i] >= f[j]
		A = A U {i}
		j = i
	return A
```

La complessità dell'algoritmo è data dall'ordinamento, che assumiamo essere $n\log n$

Altri tipi di scelta ottimale che potrebbero venire in mente sono:

- Estrarre le attività con durata minore: sarebbe sbagliato, immaginiamo 4 attività compatibili ma di lunga durata e 3 attività compatibili di breve durata, il risultato sarebbe erroneamente 3
- Estrarre le attività con tempo di inizio minore: sarebbe sbagliato, immaginiamo un'attività che inizia per prima e che prende tantissimo tempo, all'interno di questo lungo intervallo ci sono tante attività compatibili, il risultato sarebbe erroneamente 1

Questo ci porta a concludere che decidere qual è la scelta ottimale di un algoritmo greedy determina la sua correttezza

## Struttura generale di un algoritmo greedy

la struttura generale di un algoritmo greedy ricopre i seguenti passi:
1. **ordinamento** dei dati secondo un qualche criterio.
2. **inizializzazione** di strutture dati ausiliarie, e anche del risultato da ritornare
3. **estrazione** degli elementi ordinati uno alla volta
4. **verificare** se l'elemento rispetta una certa proprietà
5. aggiungere l'elemento all'insieme risultate se rispetta la proprietà
6. ritornare l'insieme risultante


## Problema della clique massima

Vediamo un altro famoso problema che mette in difficoltà l'approccio greedy, il problema della clique massima.

Dato un grafo non orientato determinare la sua *clique* massima.

Il concetto di *clique* lo abbiamo già visto:

- una clique è un sottografo completo di $G$, cioè in cui appaiono tutti i possibili archi.
- con *clique massimale* si intende che quella clique non è contenuta da un'altra **clique**
- con *clique massima* si intende una clique che contiene il maggior numero di nodi rispetto alle altre

Ad esempio, nel seguente grafo
![enter image description here](https://i.ibb.co/XkWygxw/image.png)

$\{a, b\}$ è una clique
$\{a, b, c\}$ è una clique
$\{b, c, d\}$ non è una clique

$\{c, d\}$ è una clique massimale
$\{a, b, d\}$ è una clique massimale

$\{a, b, c\}$ è una clique massima


Un primo approccio per risolvere il problema con un approccio greedy potrebbe essere quello di estrarre prima i nodi con grado maggiore:

```c++
greedy_clique(G)
	//ordino i vertici di G rispetto al grado in modo decrescente
	A = ∅
	for-each u in V
		if is_a_clique(A, u)
			A = A U {u}
	return A

is_a_clique(A, u)		//controlla se il nodo u è connesso con tutti gli altri già estratti
	for-each v in A
		if (u, v) not in E
			return false
	return true
```

La complessità di questo algoritmo è $O(n^2)$, ma questo algoritmo restituisce sempre una clique massima? vediamo un controesempio:

![enter image description here](https://i.ibb.co/rpNwcv0/image.png)

La clique massima restituita dall'algoritmo è $\{d, b\}$ mentre quella reale sarebbe $\{b, a, c\}$

In realtà questo problema non è risolvibile con un algoritmo greedy, e in generale non è risolvibile in tempo polinomiale.


