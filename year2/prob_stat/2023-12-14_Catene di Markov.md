# Catene di Markov

Le catene di Markov sono un modello che descrive una sequenza di eventi.
In particolare, la probabilità che accada un evento è determinata solo dall'evento precedente, e non dallo storico della successione degli eventi.

Data una serie potenzialmente infinita di variabili aleatorie **discrete** $X_1, X_2,...$ che assumono un numero finito di valori, chiamato **spazio degli stati** $S=\{1,2,..., M\}$

La successione di variabili viene chiamata **catena di Markov** se per ogni variabile vale che: la probabilità che la variabile assuma un certo valore dipende soltanto dal valore  della variabile precedente.

$$P[X_{n+1} = j] = P[X_{n+1} = j | X_n = i] = p_{ij}$$

## Rappresentazione a diagramma di stato

Dato lo spazio degli stati e la distribuzione di probabilità di partenza della prima variabile, risulta molto utile rappresentare il passaggio da uno stato all'altro, con le relative probabilità, attraverso un **diagramma di stato**.

Ad esempio avendo
- spazio degli stati $S = \{1,2,3\}$
- distribuzione di probabilità delle variabili $\{X_n\}$ rappresentate attraverso il simbolo $\pi^{(n)}$. La distribuzione indica con quale probabilità dallo stato attuale si può passare agli altri stati.
	$\pi^{(0)} = (\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$	rappresenta la distribuzione di partenza, il precedente stato non esiste.
	$\pi^{(1)} = (\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$ distribuzione partendo dallo stato 1
	$\pi^{(2)} = (\frac{2}{3}, \frac{1}{3}, 0)$	distribuzione partendo dallo stato 2
	$\pi^{(3)} = (0,\frac{1}{3}, \frac{2}{3})$ distribuzione partendo dallo stato 3
	
Rappresentiamo il diagramma di stato:

![enter image description here](https://i.ibb.co/jrWb261/image.png)

## Matrice di transizione

La distribuzione delle variabili generalmente viene rappresentata attraverso una matrice $P$, detta **matrice di transizione**.

Nell'esempio precedente la sequenza di distribuzioni:
$\pi^{(1)} = (\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$
$\pi^{(2)} = (\frac{2}{3}, \frac{1}{3}, 0)$
$\pi^{(3)} = (0,\frac{1}{3}, \frac{2}{3})$

verrebbero rappresentate attraverso la seguente matrice, contenente le probabilità $p_{ij}$

$$\large P = \begin{bmatrix}
\frac{1}{3} & \frac{1}{3} &\frac{1}{3}\\
\frac{2}{3} & \frac{1}{3} &0\\
0 & \frac{1}{3} &\frac{1}{3}\\
\end{bmatrix}$$

Le matrici di transizione devono rispettare due proprietà:
- Le probabilità al suo interno devono essere $0\leq p_{ij}\leq 1$
- Ogni riga deve sommare 1: $\sum_{j} p_{ij} = 1$

Proviamo ad rappresentare una delle possibili successioni che si possono avere del precedente esempio.
Realizziamo un piano cartesiano in cui nell'asse $x$ abbiamo l'avanzamento delle variabili, mentre nell'asse $y$ abbiamo i valori che può assumere ogni variabile

![enter image description here](https://i.ibb.co/WPGbpBZ/image.png)

## Transizione a due passi / probabilità condizionata

Immaginiamo il seguente esempio

"Nel mondo di Oz ci sono tre possibili situazioni meteorologiche: 1=pioggia, 2=sole, 3=neve."
Inoltre:
- non ci sono mai due giorni consecutivi di sole;
- se oggi c’è sole, domani nevica o piove con la stessa probabilità;
- se nevica o piove, con probabilità 0.5 domani rimane invariato e con probabilità 0.5 domani cambia a caso (con la stessa probabilità).

Se oggi c’è il sole, come sarà il tempo fra due giorni?

Aiutandoci con il diagramma a stati, riusciamo ad ottenere la seguente matrice

$$\large P = \begin{bmatrix}
\frac{1}{2} & \frac{1}{4} &\frac{1}{4}\\
\frac{1}{2} & 0 &\frac{1}{2}\\
\frac{1}{4} & \frac{1}{4} &\frac{1}{2}\\
\end{bmatrix}$$


Quando ci viene desso "Se oggi c'è il solo" ci viene definita la distribuzione iniziale:
$\pi^{(0)} = (0, 1, 0)$

L'esercizio ci sta chiedendo una **probabilità condizionata**

$$P[X_2 = j|X_0 =2]$$

Utilizzando la matrice che abbiamo possiamo solo sapere il meteo di **domani**, ma non fra due giorni. Per determinare la probabilità che ci sia pioggia, neve o sole tra due giorni dovremmo sommare tutte le possibili combinazioni.
Fortunatamente le varie probabilità tra due giorni ci escono se andiamo a moltiplicare la matrice per se stessa.

$P \cdot P = P^2$ viene chiamata **matrice di transizione a due passi**

In generale quando vogliamo andare a verificare le probabilità tra $n$ eventi, le probabilità si ottengono facendo $P^n$, **matrice di transizione a $n$ passi**

Tornando al nostro caso, noi siamo interessati solo a partire dal fatto che oggi ci sia sole, quindi possiamo evitare di andare a moltiplicare tutta la matrice, ma possiamo moltiplicare solo le righe che ci interessano:

1. probabilità che ci sarà pioggia tra due giorni:
	$$P[X_2 = 1|X_0 =2] = \begin{bmatrix}\frac{1}{2} & 0 & \frac{1}{2}\end{bmatrix} \cdot \begin{bmatrix}\frac{1}{2}\\\frac{1}{2}\\\frac{1}{4}\end{bmatrix} = \frac{3}{8}$$

2. probabilità che ci sarà sole tra due giorni:
	$$P[X_2 = 2|X_0 =2] = \begin{bmatrix}\frac{1}{2} & 0 & \frac{1}{2}\end{bmatrix} \cdot \begin{bmatrix}\frac{1}{4}\\0\\\frac{1}{4}\end{bmatrix} = \frac{1}{4}$$

3. probabilità che ci sarà neve tra due giorni:
	$$P[X_2 = 3|X_0 =2] = \begin{bmatrix}\frac{1}{2} & 0 & \frac{1}{2}\end{bmatrix} \cdot \begin{bmatrix}\frac{1}{4}\\\frac{1}{2}\\\frac{1}{2}\end{bmatrix} = \frac{3}{8}$$

## Probabilità congiunte

Dato che la probabilità di ogni variabile dipende dalla variabile precedente, le probabilità congiunte si calcolano nel seguente modo:

$$P[X_0 = i, X_1 = j, X_2 = k, X_3 = t] =$$

$$= \pi^{(0)}_i \cdot p_{ij} \cdot p_{jk} \cdot p_{kt}$$


## Distribuzione marginale

La distribuzione marginale $\pi^{(n)}$ ci serve per determinare quale è la distribuzione della probabilità per ogni stato dopo $n$ eventi.

Viene calcolato utilizzando la distribuzione iniziale $\pi^{(0)}$ e la matrice di transizione a $n$ passi

$$\pi^{(n)} = \pi^{(0)} \cdot P^n$$

Considerando il solito esempio, ci viene chiesto "se oggi c'è il sole, qual è la distribuzione del tempo fra due giorni?"

$$\pi^{(2)} =\begin{bmatrix}0 & 1 & 0 \end{bmatrix} \cdot \begin{bmatrix}
\frac{1}{2} & \frac{1}{4} &\frac{1}{4}\\
\frac{1}{2} & 0 &\frac{1}{2}\\
\frac{1}{4} & \frac{1}{4} &\frac{1}{2}\\
\end{bmatrix}
\cdot
\begin{bmatrix}
\frac{1}{2} & \frac{1}{4} &\frac{1}{4}\\
\frac{1}{2} & 0 &\frac{1}{2}\\
\frac{1}{4} & \frac{1}{4} &\frac{1}{2}\\
\end{bmatrix} = \begin{bmatrix}\frac{3}{8} & \frac{2}{8} & \frac{3}{8} \end{bmatrix}$$


## Catene regolari

Una catena di Markov si dice **regolare** se ogni probabilità nella matrice di transizione a $n$ passi risulta essere strettamente maggiore di 0.

Nell'esempio precedente la matrice $P$ possedeva uno $0$ al suo interno, però $P^2$ no. Quindi quella catena di markov è regolare.

Infatti 

$$\large P^2 = \begin{bmatrix}
7/16 & 3/16 &3/8\\
3/8 & 2/8 & 3/8\\
3/8 & 3/16 &7/16\\
\end{bmatrix}$$

Un modo intuitivo per determinare se una catena di Markov è regolare è attraverso il diagramma di stato: se c'è un nodo da cui non è possibile uscire, allora non è regolare.
Ad esempio:
![enter image description here](https://i.ibb.co/gmK60q5/image.png)
Quando raggiungiamo lo stato "2" non riusciamo più a raggiungere gli altri stati, per cui non è regolare

## Distribuzione stazionaria

Se la catena è regolare, allora moltiplicando la matrice per se stessa un numero tendente ad infinito di volte si ottiene la stessa **distribuzione stazionaria** $\pi$ per ogni riga della matrice

La distribuzione stazionaria rispetta le seguenti due proprietà:
1. $\pi \cdot P = \pi$
2. la somma degli elementi della distribuzione somma 1


### Catena stazionaria

Se la distribuzione iniziale $\pi^{(0)}$ è la distribuzione stazionaria $\pi$ e tutte le distribuzione marginali sono uguali a $\pi$, allora si dice che la **catena è stazionaria**
