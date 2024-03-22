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
