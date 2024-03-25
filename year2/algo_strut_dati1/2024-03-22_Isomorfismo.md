# Isomorfismo

Siano $G_1 = (V_1, E_1)$ e $G_2=(V_2, E_2)$ due grafi non orientati (ma vale anche per gli orientati).
Come possiamo stabilire se due grafi sono uguali?
Per stabilirlo introduciamo il concetto di **isomorfismo**.

L'isomorfismo è una funzione $\Phi$ che mappa ai vertici di $V_1$ dei vertici di $V_2$ rispettando le seguenti proprietà
- la funzione $\Phi$ deve essere biiettiva, cioè deve essere un mapping 1 a 1
- deve preservare l'adiacenza tra i vertici, cioè se due nodi sono adiacenti nel grafo $G_1$ lo devono essere anche i nodi corrispondenti mappati in $G_2$

Due grafi sono **isomorfi** $G_1 \simeq G_2$ se **esiste almeno un isomorfismo** tra di loro

**Due grafi sono uguali se sono isomorfi**


### Esempio

![enter image description here](https://i.ibb.co/zNty1xH/image.png)

Per dimostrare che i due grafi sono uguali dobbiamo trovare almeno un isomorfismo
$$\Phi : \{1,2,3\} \rightarrow \{a, b, c\}$$

$$\begin{cases}
1 \rightarrow b\\
2 \rightarrow c \\
3 \rightarrow a
\end{cases}$$

è  biiettiva e mantiene l'adiacenza dei nodi. 
Un altro isomorfismo sarebbe:

$$\begin{cases}
1 \rightarrow b\\
2 \rightarrow a \\
3 \rightarrow c
\end{cases}$$

Quindi i due grafi sono uguali.

## Grafo autocomplementare

Un grafo è detto autocomplementare se è isomorfo al suo complemento.

$$G \simeq \bar G$$

## Condizioni necessarie ma non sufficienti isomorfismo

Vediamo una serie di condizioni necessarie ma non sufficienti per determinare se due grafi sono isomorfi.
Nota: non è ancora stato trovato un algoritmo in tempo polinomiale per determinare se dati due grafi essi sono isomorfi

Dati $G_1 = (V_1, E_1)$ e $G_2 = (V_2, E_2)$
1. $|V_1| = |V_2|$
2. $|E_1| = |E_2|$
3. $\text{deg-seq}(G_1) = \text{deg-seq}(G_2)$
	dove la $\text{deg-seq}(G)$ è una lista contenente i gradi dei nodi di $G$ in ordine crescente
4. $G_1$ e $G_2$ hanno lo stesso numero di componenti connesse
5. $\omega(G_1) = \omega(G_2)$
	dove $\omega$ viene chiamata **clique number** (o numero di cricca in italiano).
	Una *clique* è un **sottografo completo** di $G$.
	una *clique massima* è una clique tale per cui non ne esiste un'altra con un maggior numero di nodi al suo interno.
	(una *clique massimale*  è una *clique* non contenuta in una *clique* più grande, ne deriva facilmente che una *clique massima* è anche *clique massimale*)
	il **clique number** è il numero di nodi della *clique massima*
	

## Condizione per la connettività

ricordiamo che un grafo $G = (V, E)$ è connesso se per ogni coppia di nodi esiste un cammino che li collega.

Se $G$ è non orientato e connesso allora vale che

$$|E| \geq |V|-1$$

**Dimostrazione** per induzione su $n = |V|$

**Caso base**
- n = 1:

	Abbiamo un solo nodo e quindi non ci sono archi (ricordiamo che un grafo non orientano non ha cappi)
$|E| = 1 - 1$
$0 = 0$

- n = 2:

	Abbiamo due nodi e un arco che li collega
$|E| = 2 - 1$
$1 = 1$

**passo induttivo** supponiamo che la proprietà valga fino a $n-1$ e voglio dimostrare per $n$

Considero quindi un nodo $z \in V$ e lo rimuovo, ottengo quindi un nuovo grafo $G'$ con $n-1$ nodi.
in questa situazione però non posso dire che la proprietà vale per $G'$ in quanto in base a quale $z$ ho rimosso il grafo potrebbe essere diventato disconnesso.

Dobbiamo quindi considerare il caso in cui la rimozione porti ad una disconnessione del grafo, Indichiamo con $k$ il numero di componenti connesse di $G'$.

Ogni componente connessa $V_1, ..., V_k$ sappiano sicuramente avere un numero minore di elementi rispetto a $G$ e per definizione una componente connessa è connessa, Quindi possiamo applicare la nostra ipotesi sulle singole componenti connesse.

utilizzando $|E_i| \geq| V_i| - 1$ voglio dimostrare che 

$$|E| \geq |V|-1$$

$$|E| = \deg(z) +\sum_{i = 1}^{k} |E_i|$$

Quindi il numero di archi è dato dal numero di archi all'interno delle componenti connesse, sommato al numero di archi che collegavano il nodo $z$, quindi il suo grado.

Sappiamo che $|E_i| \geq |V_i| -1$, quindi possiamo fare una maggiorazione al posto dell'uguaglianza

$$|E| \geq \deg(z) + \sum_{i = 1}^{k} \Big(|V_i| -1\Big)$$

$$|E| \geq \deg(z) + \sum_{i = 1}^{k} \Big(|V_i|\Big) -k$$

la sommatoria della cardinalità dei nodi delle componenti connesse è uguale alla cardinalità dei nodi del grafo originale, tranne per il nodo $z$ che è stato tolto e quindi ci va un $-1$

$$|E| \geq \deg(z) + \Big(|V| -1\Big) -k$$

il grado di $z$ sarà sicuramente maggiore o uguale di $k$ perché il grafo di partenza era connesso per ipotesi iniziali, infatti se rimuovendo il nodo $z$ si sono generate $k$ componenti connesse allora $z$ in origine aveva **almeno** un collegamento con tali componenti connesse.

$\deg(z) \geq k$

$\deg(z) - k \geq 0$

Stabilito che $\deg(z) - k$ è positivo, dalla disequazione

$$|E| \geq \deg(z) -k + \Big(|V| -1\Big)$$

Si deriva che 

$$|E| \geq |V| -1$$
