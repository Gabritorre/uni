# Minimum Spanning Tree

Partiamo col dare delle informazioni generali sugli alberi:

Con alberi ci riferiamo ad **alberi liberi**, cioè grafi aciclici connessi non gerarchici (quindi dove non è presente un nodo radice),

Se $G = (V, E)$ è un albero allora

$$|E| = |V| - 1$$

Ciò deriva dalle proprietà di grafo connesso e aciclico, infatti unendole:

- Se connesso allora vale che $|E| \geq |V| -1$
- Se aciclico allora vale che $|E| \leq |V| - 1$

## Teorema della caratterizzazione degli alberi

Dato un grafo $G = (V, E)$ non orientato, affermare che $G$ è un albero è equivalente a tutte le seguenti affermazioni:

1. Due vertici qualsiasi di $G$ sono connessi da un unico cammino
2. $G$ è connesso ma se si rimuove un qualsiasi arco allora diventa non più connesso
3. $G$ è connesso e $|E| = |V| - 1$
4. $G$ è aciclico e $|E| = |V| - 1$
5. $G$ è aciclico ma inserendo un arco allora diventa ciclico

## Spanning Tree

*Spanning Tree* (o Albero di copertura) di un grafo $G$ connesso e non orientato è un sottoinsieme di archi tale che:
- formano un albero
- tutti i nodi di $G$ vengono toccati

Un grafo può avere più alberi di copertura.

Formalmente scriveremo che un albero di copertura è 

$T \subseteq E$ tale che il grafo $(V, T)$ è un albero

![enter image description here](https://i.ibb.co/2km22hN/image.png)

## Minimum Spanning Tree

Un *Minimum Spanning Tree* (MST) o albero di copertura minimo riguarda **grafi pesati sugli archi**.

Dato un grafo $G = (V, E, w)$ connesso e pesato sugli archi con pesi $w$.

Rappresentiamo il **peso di un albero di copertura** $T$ come la somma dei pesi sui suoi archi

$$W(T) = \sum_{(u_1, u_2)\in T}w(u_1, u_2)$$

Quindi il MST di un grafo $G$ è un sottoinsieme di archi $T$ tale che:

- $T$ è un albero di copertura
- $W(T)$ sia il minimo tra tutti i possibili alberi di copertura

Un grafo può avere più alberi di copertura minimi.

![enter image description here](https://i.ibb.co/sP5v6t0/image.png)

