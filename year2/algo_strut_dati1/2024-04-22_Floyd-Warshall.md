# Floyd-Warshall

Occupiamoci del problema di trovare il cammino minimo tra tutte le coppie di vertici del grafo.

Un primo approccio potrebbe essere quello di eseguire l'algoritmo di Dijkstra oppure Bellman-ford tante volte quanti sono i nodi (cioè $n$ volte), cambiando ad ogni esecuzione la sorgente. 
Seppur questo metodo sia corretto, non è il modo più efficiente di risolverlo:

|  | Iterando Bellman-ford| Iterando Dijkstra |
|:--:|:--:|:--:|
| **Grafo sparso** | $n^3$ | $n^2\log(n)$ (impl. con heap) | 
| **Grafo denso** | $n^4$ | $n^3$ (impl. con array)|

Vediamo un nuovo algoritmo che ha una complessità più "stabile".

## Floyd-Warshall

L'algoritmo di Floyd-Warshall ha complessità $\Theta(n^3)$ sia con grafi sparsi che densi, inoltre funziona anche con pesi negativi (ma non cicli negativi)

Sia $G = (V, E, w)$ un grafo orientato e pesato sugli archi.

Per semplicità assumiamo che i valori dei vertici siano numeri interi sequenziali da $1$ a $n$
$V = {1, 2, 3, 4, ..., n}$
Questo perché i loro valori verranno utilizzati come indici in delle matrici.


L'algoritmo:
- prende in **input** il grafo sottoforma di una matrice $W$, contenente i pesi degli archi che collegano i nodi
- restituisce in **output** una nuova matrice $D$ contenente le distanze tra i vertici del grafo

### Input

$W$ è una matrice $n\times n$ (dove $n$ è il numero di nodi).
Indichiamo gli elementi di tale matrice con $w_{ij}$, da non confondere con il peso di un arco, indicato con $w(i, j)$

$$w_{ij} = \begin{cases}
0 & \text{se } i = j \\
w(i, j) & \text{se } i \neq j \land (i, j) \in E \\
+\infty & \text{se } i \neq j \land (i, j) \notin E
\end{cases}$$


### Output

$D$ è una matrice $n\times n$ (dove $n$ è il numero di nodi).
Indichiamo gli elementi di tale matrice con $d_{ij}$

$$d_{ij} = \delta(i, j)$$

## Algoritmo

$\begin{aligned}
& \text {Floyd-Warshall (W) } \\
& \hspace{5mm}\mathrm{n} \leftarrow \operatorname{rows}(\mathrm{W}) \\
& \hspace{5mm}D^{(0)} \leftarrow \mathrm{W} \\
& \hspace{5mm} \text {for } \mathrm{k} =1 \text { to } \mathrm{n} \\
& \hspace{10mm} \text {for } \mathrm{i} =1 \text { to } \mathrm{n} \\
& \hspace{15mm} \text {for } \mathrm{j} =1 \text { to } \mathrm{n} \\
& \hspace{20mm} d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\} \\ & \hspace{5mm} \text { return } D^{(n)}
\end{aligned}$


## Complessità

Si tratta solamente di 3 cicli for annidati che eseguono $n$ iterazioni, sono solo presenti istruzioni costanti

$$T(n) = \Theta(n^3)$$

L'algoritmo utilizza la matrice iniziale per crearne una nuova, questo comportamento si ripete $n$ volte (ad ogni iterazione del ciclo for più esterno si lavora su una matrice nuova)

$$W = D^{(0)} \to D^{(1)} \to D^{(2)} \to D^{(3)} \to ... \to D^{(n)}$$


## Correttezza

Definiamo

$$\mathscr{D}_{ij}^{(k)}  = \{p \,| p\text{ è un cammino semplice tra i nodi $i$ e $j$ in cui i valori dei vertici intermedi sono $\leq k$} \}$$

I **vertici intermedi** sono tutti i vertici del cammino tranne il primo e l'ultimo.

Vediamo un esempio:

![](https://i.ibb.co/M6rhL48/image.png)

$\mathscr{D}_{2, 7}^{(1)} = \emptyset \hspace{10mm}$ non c'è un cammino con valori nei nodi intermedi $\leq 1$
$\mathscr{D}_{2, 7}^{(2)} = \emptyset \hspace{10mm}$ non c'è un cammino con valori nei nodi intermedi $\leq 2$
$\mathscr{D}_{2, 7}^{(3)} = \emptyset \hspace{10mm}$ non c'è un cammino con valori nei nodi intermedi $\leq 3$
$\mathscr{D}_{2, 7}^{(4)} = {<2, 1, 4, 3, 7>}$
$\mathscr{D}_{2, 7}^{(5)} = {<2, 1, 4, 3, 7>, <2, 5, 3, 7>}$


**Osservazioni**:
- $\mathscr{D}_{ij}^{(k)}$ contiene almeno i cammini di $\mathscr{D}_{ij}^{(k-1)}$
- quando $k = n$ allora $\mathscr{D}_{}ij^{(n)}$ contiene i cammini semplici da $i$ a $j$ senza limitazioni sui nodi intermedi (tutti i valori dei nodi, per ipotesi, sono $\leq n$)

Alla fine dell'algoritmo noi vogliamo ottenere i cammini **minimi** tra le coppie dei nodi,

Definiamo $d_{ij}^{(k)}$ come il peso del cammino **minimo** tra $i$ e $j$ dove i valori dei vertici intermedi hanno valore minore o uguale a $k$, cioè:

$$\large d_{ij}^{(k)} = \underset{p \in \mathscr{D_{ij}^{(k)}}}{\min} w(p)$$

alla fine dell'algoritmo $k = n$, e abbiamo visto che $\mathscr{D}_{}ij^{(n)}$ contiene i cammini semplici da $i$ a $j$ (senza più limitazioni sui nodi intermedi)

$$\large d_{ij}^{(n)} = \underset{p \in \mathscr{D_{ij}^{(n)}}}{\min} w(p)$$

ma considerare il minimo tra i pesi dei cammini semplici da $i$ a $j$ corrisponde alla distanza reale tra i due nodi (cioè ad un cammino minimo)


$$\large d_{ij}^{(n)} = \underset{p \in \mathscr{D_{ij}^{(n)}}}{\min} w(p) = \delta(i, j)$$

$$\large d_{ij}^{(n)} = \delta(i, j)$$
