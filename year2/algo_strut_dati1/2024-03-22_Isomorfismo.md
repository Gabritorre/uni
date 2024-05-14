# Isomorfismo

Siano $G_1 = (V_1, E_1)$ e $G_2=(V_2, E_2)$ due grafi non orientati (ma vale anche per gli orientati).
Come possiamo stabilire se due grafi sono uguali?
Per stabilirlo introduciamo il concetto di **isomorfismo**.

L'isomorfismo è una funzione $\Phi$ che mappa i vertici di $V_1$ in vertici di $V_2$ rispettando le seguenti proprietà
- La funzione $\Phi$ deve essere biiettiva, cioè deve essere un mapping 1 a 1
- Deve preservare l'adiacenza tra i vertici, cioè se due nodi sono adiacenti nel grafo $G_1$ lo devono essere anche i nodi corrispondenti mappati in $G_2$

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

## Condizioni necessarie ma non sufficienti

Vediamo una serie di condizioni necessarie **ma non sufficienti** per determinare se due grafi sono isomorfi.
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
	



