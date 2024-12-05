# Metodo Branch & Bound

Analizziamo il metodo **Branch & Bound** (B&B) per la risoluzione di problemi di **programmazione lineare intera** (PLI), cioè in cui i punti che sono **soluzione** del problema oltre a rispettare i vincoli devo avere **tutte le componenti come numeri interi**.

Descriviamo un problema di PLI nel seguente modo:

$$
(P_0):\underset{\begin{array}{lcr}x \in Q_0\\
x\in \Z^n
\end{array}}{\min}\, c^T x
$$

dove $Q_0$ è un poliedro generico.

$\Z=\{0, 1, -1, 2, -2, ...\}$ è l’insieme dei numeri interi

$x$ è quindi un vettore di $n$ componenti intere

Possiamo riformulare in modo più compatto il problema in questo modo

$$
(P_0):\underset{\begin{array}{lcr}
x \in S_0 
\end{array}}{\min}\, c^T x
$$

Dove $S_0 = Q_0 \cap \Z^n$, cioè è un insieme che contiene **tutti e soli i punti del poliedro a coordinate intere**. Ovviamente si ha quindi che $S_0 \subseteq Q_0$

Nella seguente immagine viene rappresentato in blu il poliedro $Q_i$ e come quadratini gli elementi di $S_i$

![https://i.ibb.co/dJjfD3d/image.png](https://i.ibb.co/dJjfD3d/image.png)

Nota: il fatto che i vertici del poliedro facciano tutti parte di $S_i$ è solamente un caso, non è sempre così.

Mentre con le variabili reali si può ottenere un punto di minimo preciso, con variabili intere non è detto che il minimo si trovi in un punto a coordinate intere e quindi verrà selezionato un minimo approssimativo a quello vero.

In modo matematico se 

- $\tilde{x_0}$ è soluzione del problema di minimizzazione a variabili reali
    
    $$
    \underset{\begin{array}{lcr}
    x \in Q_0 
    \end{array}}{\min}\, c^T x
    $$
    
- $\overline x_0$ è soluzione del problema di minimizzazione a variabili intere
    
    $$
    \underset{\begin{array}{lcr}
    x \in S_0 
    \end{array}}{\min}\, c^T x
    $$
    

Allora sicuramente si avrà $f(\tilde x_0) \leq f(\overline x_0)$, cioè $\overline x_0$ sarà una soluzione peggiore o al massimo uguale alla soluzione vera della funzione obiettivo, questo sempre perché $S_0 \subseteq Q_0$

## Algoritmo

Il metodo Branch and Bound è una tecnica iterativa che partiziona il problema iniziale in più sottoproblemi (branching), stima un limite superiore o inferiore della funzione obiettivo in ogni sottoproblema (bounding) e utilizza queste stime per escludere i sottoproblemi che non avranno una soluzione migliore di quella attuale.

La regione ammissibile di punti $S_0$ viene partizionata in sottoproblemi $S_i, i = 1, 2, …, k$ in modo che:

$$
S_0 = \bigcup_{i=1}^{k}S_i\\
S_i\cap S_j = \emptyset,\hspace{5mm} i,j \in [0, 1, 2, ..., k] \land i \neq j 
$$

L’algoritmo cercherà quindi di trovare una stima alla soluzione del problema detto “aperto” $(P_i)$

$$
(P_i):\underset{\begin{array}{lcr}
x \in S_i 
\end{array}}{\min}\, c^T x
$$

per calcolare la stima della soluzione per $(P_i)$, risolviamo il problema di programmazione lineare associato $(PL_i)$ tramite un rilassamento dei vincoli, in particolare togliendo i vincoli di integrità delle variabili:

$$
(PL_i):\underset{\begin{array}{lcr}
x \in Q_i 
\end{array}}{\min}\, c^T x
$$

ottenendo quindi un punto di minimo $x_i$ per quel sottoproblema rilassato che sarà sicuramente migliore o al più uguale alla soluzione del sottoproblema $(P_i)$.

La soluzione al problema rilassato potrebbe non essere compatibile con il problema originale, poiché non rispetta la condizione di integrità delle variabili. L’algoritmo utilizza però tale soluzione come guida per suddividere lo spazio delle soluzioni e individuare un'eventuale soluzione intera ottima.
