# Esercizi sui cammini minimi

## Es 1

Dato un grafo $G = (V, E, w)$ orientato e pesato sugli archi e avente solo pesi $w(u, v)> 0$
Dimostrare se esiste un ciclo $<x_0, x_1, ..., x_q>$ raggiungibile dalla sorgente in cui vale:

$$\prod_{i = 1}^{q} w(x_{i-1}, x_i) < 1$$

Cioè il cui prodotto dei pesi sugli archi è minore di 1.

Un primo approccio per risolvere gli esercizi è quello di provare a ricondursi agli algoritmi che già si conoscono, come Dijkstra e Bellman-ford.

In questo caso sappiamo che Bellman ford è capace di riconoscere i cicli negativi, cioè sa riconoscere quando

$$\sum_{i=1}^{q} w(x_{i-1}, w_i) < 0$$

Notiamo che tale proprietà è molto simile a quella che vogliamo dimostrare noi, le differenze sono **ciò che sta a destra del minore** e la **produttoria al posto della sommatoria**

Un modo che solitamente funziona per riuscire a ridursi ad un algoritmo conosciuto è quella di usare il logaritmo:

$$\log \left( \prod_{i = 1}^{q} w(x_{i-1}, x_i)\right) < \log 1$$

- Sappiamo che $\log 1 = 0$
- Mentre per il membro di sinistra possiamo applicare la proprietà del logaritmo del prodotto  $\log (a \cdot b) = \log a + \log b$

$$\sum_{i = 1}^{q} \log\left(w(x_{i-1}, x_i)\right) < 0$$

Quindi se creiamo un nuovo grafo con gli stessi archi e nodi ma con una nuova funzione peso $w' = \log(w)$ possiamo utilizzare l'algoritmo di Bellman-ford senza apportargli nessuna modifica.

## Es 2

Dato un grafo $G(V, E, w)$ orientato e pesato sugli archi.
Il grafo rappresenta una rete di comunicazione e i pesi sugli archi rappresentano l'affidabilità di quel singolo collegamento.
L'affidabilità $r(u, v)$ è una probabilità, quindi i suoi valori variano da $0< r(u, v) \leq 1$, ed è la probabilità che il messaggio arrivi in modo corretto alla destinazione passando per quel singolo arco.
Le affidabilità sono **indipendenti** tra loro.

Trovare un cammino tra $u$ e $v$ che massimizza la probabilità di ricezione del messaggio.

Il fatto che le probabilità siano indipendenti significa che la probabilità dell'intersezione è calcolata come

$$P(A \cap B) = P(A) \cdot P(B)$$

Definiamo l'insieme $\mathscr{D}(u, v) = \{p \,|\, p\text{ è un cammino tra }u \text{ e } v\}$

considerando un cammino generico $p = <x_0, x_1, ..., x_q>$
la sua affidabilità $\alpha(p)$ è calcolata come

$$\alpha(p) = \prod_{i = 1}^{q} r(x_{i-1}, x_i)$$

Il problema ci richiede di trovare

$$\large\underset{p \in \mathscr{D}(u, v)}{\max} \alpha (p) \hspace{5mm} \to \hspace{5mm} \underset{p \in \mathscr{D}(u, v)}{\max} \prod_{i = 1}^{q} r(x_{i-1}, x_i)$$


Gli algoritmi che conosciamo però trovano

$$\underset{p \in \mathscr{D}(u, v)}{\min} \sum_{i = 1}^{q} w(x_{i-1}, x_i)$$

Partiamo facendo una piccola precisazione:

Con $\min$ si intende che viene **restituito il peso** corrispondente al cammino minimo.
mentre con $\text{arg\_min}$ si intende che viene **restituito il cammino minimo** stesso
(discorso analogo per $\max$ e $\text{arg\_max}$)

Nel nostro caso siamo interessati al cammino e non al suo peso, quindi lo riscriviamo come

$$\underset{p \in \mathscr{D}(u, v)}{\text{arg\_max}} \prod_{i = 1}^{q} r(x_{i-1}, x_i)$$

Per passare dalla produttoria alla sommatoria posso usare il logaritmo

$$\underset{p \in \mathscr{D}(u, v)}{\text{arg\_max }} \log \left(\prod_{i = 1}^{q} r(x_{i-1}, x_i)\right)$$

Per la proprietà del prodotto dei logaritmi:

$$\underset{p \in \mathscr{D}(u, v)}{\text{arg\_max }} \sum_{i = 1}^{q} \log (r(x_{i-1}, x_i))$$

Per ricondurci agli algoritmi che conosciamo dobbiamo voler ottenere il minimo, vogliamo però sempre trovare la massima affidabilità, quindi possiamo fare l'inverso delle probabilità


$$\underset{p \in \mathscr{D}(u, v)}{\text{arg\_min }} \sum_{i = 1}^{q} \log \left(\frac{1}{r(x_{i-1}, x_i)}\right)$$

$$\underset{p \in \mathscr{D}(u, v)}{\text{arg\_min }} \sum_{i = 1}^{q} \log\left(r(x_{i-1}, x_i)^{-1}\right)$$

$$\underset{p \in \mathscr{D}(u, v)}{\text{arg\_min }} \sum_{i = 1}^{q} -\log (r(x_{i-1}, x_i))$$

Notiamo che a questo punto: 
1. $0 < r(x_{i-1}, x_i) \leq 1$
2. $\log (r(x_{i-1}, x_i)) < 0$
3.  $-\log (r(x_{i-1}, x_i)) > 0$

Ci siamo ricondotti alla struttura di Dijkstra / Bellman-ford con una nuova funzione di peso $w' =   \log \left(\frac{1}{r(x_{i-1}, x_i)}\right)$
Creiamo quindi un nuovo grafo con questa funzione di peso $w'$ e lo passiamo a $Dijkstra$ senza effettuare nessuna modifica.

Nota: possiamo utilizzare Dijkstra perché $\log \left(\frac{1}{r(x_{i-1}, x_i)}\right) > 0$ come visto nel punto 3 poco fa



