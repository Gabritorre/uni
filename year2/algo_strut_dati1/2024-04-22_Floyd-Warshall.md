# Floyd-Warshall

Occupiamoci del problema di trovare il cammino minimo tra tutte le coppie di vertici del grafo.

Un primo approccio potrebbe essere quello di eseguire l'algoritmo di Dijkstra oppure Bellman-ford tante volte quanti sono i nodi (cioè $n$ volte), cambiando ad ogni esecuzione la sorgente. 
Seppur questo metodo sia corretto, non è il modo più efficiente di risolverlo:

|  | Iterando Bellman-ford| Iterando Dijkstra |
|:--:|:--:|:--:|
| **Grafo sparso** | $n^3$ | $n^2\log(n)$ (impl. con heap) | 
| **Grafo denso** | $n^4$ | $n^3$ (impl. con array)|

Vediamo un nuovo algoritmo che ha una complessità più "stabile" indipendentemente dalla densità del grafo.

## Floyd-Warshall

L'algoritmo di Floyd-Warshall ha complessità $\Theta(n^3)$ sia con grafi sparsi che densi, inoltre funziona anche con pesi negativi (ma non cicli negativi)

Sia $G = (V, E, w)$ un grafo orientato e pesato sugli archi.

Per semplicità assumiamo che i valori dei vertici siano numeri interi sequenziali da $1$ a $n$
$V = {1, 2, 3, 4, ..., n}$
Questo perché i loro valori verranno utilizzati come indici in delle matrici.


L'algoritmo:
- prende in **input** il grafo sottoforma di una matrice $W$, contenente i pesi degli archi
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
& \hspace{20mm} d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, \hspace{4mm}d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\} \\ & \hspace{5mm} \text { return } D^{(n)}
\end{aligned}$


## Complessità

Si tratta solamente di 3 cicli for annidati che eseguono $n$ iterazioni, sono solo presenti istruzioni costanti

$$T(n) = \Theta(n^3)$$

L'algoritmo utilizza la matrice iniziale per crearne una nuova, poi utilizza quella appena creata per creare la successiva, questo comportamento si ripete $n$ volte (ad ogni iterazione del ciclo for più esterno si lavora su una matrice nuova).
L'algoritmo produce quindi un totale di $n$ matrici:

$$W = D^{(0)} \to D^{(1)} \to D^{(2)} \to D^{(3)} \to ... \to D^{(n)}$$

- $k$ indica la matrice su cui si sta lavorando in quella iterazione, come detto si aggiornano i valori di $k$ utilizzando la matrice precedente, cioè $k-1$
- $i, j$ sono degli indici utilizzati per muoversi negli elementi delle matrici

## Correttezza

Definiamo l'insieme

$$\mathscr{D}_{ij}^{(k)}  = \{p \,| p\text{ è un cammino semplice tra i nodi $i$ e $j$ in cui i valori dei vertici intermedi sono $\leq k$} \}$$

I **vertici intermedi** sono tutti i vertici del cammino tranne il primo e l'ultimo.

Nota che si parla di **valori** dei vertici e non di numero di vertici.

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

Alla fine dell'algoritmo noi vogliamo ottenere i cammini **minimi** tra le coppie dei nodi.

Definiamo gli elementi della matrice $D^{(k)}$, chiamati $d_{ij}^{(k)}$ come il peso del cammino **minimo** tra $i$ e $j$ dove i valori dei vertici intermedi hanno valore minore o uguale a $k$, cioè:

$$\large d_{ij}^{(k)} = \underset{p \in \mathscr{D}_{ij}^{(k)}}{\min} w(p)$$

Alla fine dell'algoritmo $k = n$, e abbiamo visto che $\mathscr{D}_{}ij^{(n)}$ contiene tutti i cammini semplici da $i$ a $j$ (senza più limitazioni sui nodi intermedi), quindi gli elementi della matrice finale $D^{(n)}$ sono

$$\large d_{ij}^{(n)} = \underset{p \in \mathscr{D}_{ij}^{(n)}}{\min} w(p)$$

Ma considerare il cammino di peso minimo tra tutti i cammini semplici da $i$ a $j$ corrisponde alla distanza reale tra i due nodi (cioè ad un cammino minimo)


$$\large d_{ij}^{(n)} = \underset{p \in \mathscr{D_{ij}^{(n)}}}{\min} w(p) = \delta(i, j)$$

$$\large d_{ij}^{(n)} = \delta(i, j)$$

### Correttezza della formula per creare la matrice

Dimostriamo la correttezza della formula

$$d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\}$$

Partiamo definendo un concetto basilare:
Se abbiamo un insieme $X$ diviso in due partizioni: $X_1, X_2$
Se vogliamo determinare il valore minimo presente in $X$ possiamo farlo nel seguente modo

$$\min\{\min X_1, \min X_2\}$$

quindi facendo il minimo tra i minimi delle due partizioni.

Trasportando questo esempio nel nostro problema immaginiamo di trovarci nel mezzo dell'esecuzione dell'algoritmo e immaginiamo di avere due nodi $i$ e $j$ e l'insieme dei cammini **semplici** che li collegano $\mathscr{D}_{ij}^{(k)}$, dividiamo questo insieme in due partizioni:
- i cammini passanti per il nodo $k$, che indichiamo con $\bar{\mathscr{D}}_{ij}^{(k)}$
- i cammini non passanti per il nodo $k$, che possiamo chiamare $\mathscr{D}_{ij}^{(k-1)}$, questo perché se stiamo dicendo che i cammini hanno nodi interni con valori minori o uguali a $k$ ma non passano per $k$ allora saranno minori o uguali a $k-1$

![enter image description here](https://i.ibb.co/vkHPZkM/image.png)

Vogliamo raggiungere questa formula

$$d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\}$$

Sappiamo che la definizione di $d_{i j}^{(k)}$ è la seguente

$$\large d_{ij}^{(k)} = \underset{p \in \mathscr{D}_{ij}^{(k)}}{\min} w(p) =$$

ma dato che $\mathscr{D}_{ij}^{(k)}$ lo abbiamo partizionato, possiamo riscrivere l'equivalenza come


$$\large= \min\left\{\underset{p \in \mathscr{D}_{ij}^{(k-1)}}{\min} w(p), \underset{p \in \bar{\mathscr{D}}_{ij}^{(k)}}{\min} w(p)\right\}$$

Il primo membro sappiamo già essere $d_{ij}^{(k-1)}$, cioè il valore sulla matrice precedente, la quale non considerava $k$ proprio come questa partizione

$$\large= \min\left\{d_{ij}^{(k-1)}, \underset{p \in \bar{\mathscr{D}}_{ij}^{(k)}}{\min} w(p)\right\}$$

Il secondo membra rappresenta i cammini semplici passanti per $k$, e proprio perché sono **semplici** sappiamo che all'interno del cammino $k$ può apparire solo una volta.
Possiamo quindi scomporre ulteriormente questo insieme in due sottoinsiemi:
- uno contenente i cammini da $i$ a $k$
- uno contenente i cammini da $k$ a $j$

Entrambi avranno quindi nodi interni minori o uguali a $k-1$, in quanto $k$ non è mai interno e può apparire solo una volta, ma sarà sempre o il nodo di partenza del sottocammino oppure il nodo destinazione.

![enter image description here](https://i.ibb.co/yYvM1zD/image.png)
Esplicitiamo l'ulteriore partizionamento che abbiamo fatto, e usiamo lo stesso ragionamento applicato ai cammini non passanti per $k$
$$\large= \min\left\{d_{ij}^{(k-1)}, \underset{p \in \mathscr{D}_{ik}^{(k-1)}}{\min} w(p) + \underset{p \in \mathscr{D}_{jk}^{(k-1)}}{\min} w(p)\right\}$$

Adesso riusciamo a riconoscere i due valori di minimo come valori presi dalla matrice precedente

- $\large d_{ik}^{(k-1)} = \underset{p \in \mathscr{D}_{ik}^{(k-1)}}{\min} w(p)$

- $\large d_{kj}^{(k-1)} = \underset{p \in \mathscr{D}_{jk}^{(k-1)}}{\min} w(p)$


Ci siamo infine ricongiunti alla formula che volevamo dimostrare 

$$\large d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, \hspace{2mm}d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\}\large$$

Abbiamo quindi capito che il significato di questa formula è: 
"è minore l'attuale cammino che ho per andare da $i$ a $j$ oppure è più breve il cammino per andare da $i$ a $j$ passando per il nodo $k$ (cioè il cammino da $i$ a $k\, +$ il cammino tra $k$ e $j$)?"

## Ottimizzazioni

È possibile limitare l'uso spaziale dell'algoritmo ad una sola matrice anziché $n$ matrici, purché vengano soddisfatte due condizioni:

### Prima condizione

Se non esistono cicli negativi allora per ogni matrice $k$ vale che la diagonale principale è tutta uguale a $0$

$$\forall k = 1, ..., n : d_{ii}^{(k)} = 0 \hspace{5mm} \forall i = 1, ..., n$$

**Dimostrazione per induzione** su $k$

- Caso base: $k = 0$
	La matrice $D^{(0)}$ è uguale alla matrice passata in input $W$, e quest'ultima per definizione ha la diagonale principale inizializzata a $0$
- Passo induttivo: $k > 0$
	Assumiamo che la proprietà valga fino a $k-1$, dimostriamo la proprietà per $k$
	Sappiamo che tutti gli elementi della matrice $k$, e quindi anche quelli nella diagonale principale sono definiti come segue
	$$d_{ii}^{(k)} = \min \left\{d_{i i}^{(k-1)}, d_{i k}^{(k-1)}+d_{k i}^{(k-1)}\right\}$$
	
	per ipotesi induttiva $d_{i i}^{(k-1)} = 0$
	mentre $d_{i k}^{(k-1)}+d_{k i}^{(k-1)} \geq 0\,\,\,$ se non fosse così significa che il cammino per andare da $i$ a se stesso passando da $k$ avrebbe un peso negativo e quindi ci sarebbe un ciclo negativo.

	il minimo tra $0$ e un valore $\geq 0$ sarà quindi sempre $0$

Nota: è possibile determinare la presenza di un ciclo negativo se appare un numero negativo sulla diagonale principale

### Seconda condizione


Se dati tre vertici $i$, $j$ e $k$ vale che

$$\begin{cases}
d_{ik}^{(k)} = d_{ik}^{(k-1)} \\
d_{kj}^{(k)} = d_{kj}^{(k-1)} 
\end{cases}$$ 

Cioè la riga e la colonna $k$-esima della matrice $D^{(k)}$ rimangono invariate rispetto alla matrice precedente

**Dimostrazione** per definizione di $d_{ik}^{(k)}$ si ha che

$$d_{ik}^{(k)} = \min \left\{d_{i k}^{(k-1)}, d_{i k}^{(k-1)} + d_{k k}^{(k-1)}\right\}$$

Dato che $d_{k k}^{(k-1)} = 0$ perché si trova sulla diagonale allora rimane che 

$$d_{ik}^{(k)} = d_{i k}^{(k-1)}$$


## Esempio di esecuzione Floyd-Warshall

Link al video di esempio: https://www.youtube.com/watch?v=4OQeCuLYj-4
