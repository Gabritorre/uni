# Condizioni di connettività e ciclicità

## Condizione necessaria per la connettività

Ricordiamo che un grafo $G = (V, E)$ è connesso se per ogni coppia di nodi esiste un cammino che li collega.

Se $G$ è non orientato e connesso allora vale che

$$|E| \geq |V|-1$$

nota che se un grafo ha $|E| \geq |V|-1$ non vuol dire che sia automaticamente connesso

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

Considero un nodo $z \in V$ e lo rimuovo, ottengo quindi un nuovo grafo $G'$ con $n-1$ nodi.
In questa situazione però non posso dire che la proprietà vale per $G'$ in quanto in base a quale $z$ ho rimosso il grafo potrebbe essere diventato disconnesso.

Dobbiamo quindi considerare il caso in cui la rimozione porti ad una disconnessione del grafo, Indichiamo con $k$ il numero di componenti connesse di $G'$ che si generano dalla rimozione di $z$.

Ogni componente connessa $V_1, ..., V_k$ avrà un numero minore di elementi rispetto a $G$ e per definizione una componente connessa è connessa, quindi possiamo applicare la nostra ipotesi sulle singole componenti connesse.

Utilizzando $|E_i| \geq| V_i| - 1$ (che vale per ipotesi induttiva) voglio dimostrare che 

$$|E| \geq |V|-1$$

possiamo definire $|E|$ come:
$$|E| = \deg(z) +\sum_{i = 1}^{k} |E_i|$$

Quindi il numero di archi del grafo originale è dato dal numero di archi all'interno delle componenti connesse, sommato al numero di archi che coinvolgevano il nodo $z$, quindi il suo grado.

Sappiamo che $|E_i| \geq |V_i| -1$, quindi possiamo fare una maggiorazione al posto dell'uguaglianza

$$|E| \geq \deg(z) + \sum_{i = 1}^{k} \Big(|V_i| -1\Big)$$

$$|E| \geq \deg(z) + \sum_{i = 1}^{k} \Big(|V_i|\Big) -k$$

La sommatoria del numero dei nodi delle componenti connesse è uguale al numero dei nodi del grafo originale, tranne per il nodo $z$ che è stato tolto e quindi ci va un $-1$

$$|E| \geq \deg(z) + \Big(|V| -1\Big) -k$$

Il grado di $z$ sarà sicuramente maggiore o uguale di $k$ perché il grafo di partenza era connesso per ipotesi iniziali, infatti se rimuovendo il nodo $z$ si sono generate $k$ componenti connesse allora $z$ aveva **almeno** un collegamento con tali componenti connesse.

$\deg(z) \geq k$

$\deg(z) - k \geq 0$

Stabilito che $\deg(z) - k$ è positivo, dalla disequazione

$$|E| \geq \deg(z) -k + \Big(|V| -1\Big)$$

Si deriva che 

$$|E| \geq |V| -1$$


## Condizione sufficiente per la connettività

Vediamo ora una condizione sufficiente per stabilire se un grafo è connesso.

Sia $G = (V, E)$ non orientato e in cui:

$$\forall u \in V \hspace{5mm} \deg(u) \geq \frac{n-1}{2}$$

dove $n = |V|$ 

allora il grafo è connesso.

**Dimostrazione** per assurdo.
Prendiamo un grafo che segue le nostre ipotesi e che risulti, per assurdo, non connesso. Sarà quindi composto da $k \geq 2$ componenti connesse.
Per dimostrare l'assurdità ci bastano 2 componenti connesse, quindi imponiamo $k = 2$.
Se $V_1$ e $V_2$ sono le due componenti connesse allora posso scrivere che

$$|V| \geq |V_1| + |V_2|$$

- Se considero un nodo $u_1 \in V_1$ allora per la nostra ipotesi
	$\deg(u_1) \geq \frac{n-1}{2}$

	Quindi il numero di vertici di $V1$ sarà almeno:
	$|V_1| \geq \frac{n-1}{2} + 1$

	Dove $\frac{n-1}{2}$ rappresenta i nodi collegati con $u_1$ e il $+1$ rappresenta il nodo $u_1$.

	Riscrivo come $|V_1| \geq \frac{n+1}{2}$

- Se considero un nodo $u_2 \in V_2$ allora per la nostra ipotesi
$\deg(u_2) \geq \frac{n-1}{2}$

	Quindi il numero di vertici di $V1$ sarà almeno:
	$|V_2| \geq \frac{n-1}{2} + 1$

	Dove $\frac{n-1}{2}$ rappresenta i nodi collegati con $u_2$ e il $+1$ rappresenta il nodo $u_2$.

	Riscrivo come $|V_2| \geq \frac{n+1}{2}$

Allora dovrebbe valere che $|V| \geq|V_1| + |V_2|$ ma sostituendo otteniamo che 

$$n \geq \frac{n+1}{2} + \frac{n+1}{2}$$

$$n \geq n+1$$

che è assurdo


## Condizione necessaria per l'aciclicità

Se un grafo $G= (V, E)$ non orientato è aciclico allora

$$|E| \leq |V| -1$$

**Dimostrazione** per induzione su $n = |V|$
in modo molto simile alla dimostrazione della condizione necessaria della connettività

**Caso base**
come detto in precedenza il ciclo in un grafo non orientato sono necessari almeno 3 nodi:
$n = 1$, il grafo ha un solo nodo, è dunque senza archi e quindi aciclico
$n = 2$, il grafo con due nodi ha al massimo un arco e quindi non possiede cicli

**Passo induttivo** per $n\geq 3$
Assumiamo che la proprietà valga fino a $n-1$ e voglio dimostrare per $n$

Consideriamo un grafo con $n$ nodi, ne individuiamo uno e lo rimuoviamo dal grafo ottenendo il grafo $G'$.
Il grafo $G'$ sarà composto da $k$ componenti connesse $V_1, V_2, ..., V_k$
Le componenti sono acicliche in quanto sono sottoalberi di un grafo aciclico.
Sono anche connesse per definizione di "componenti connesse".
Le componenti connesse saranno sicuramente composte da un numero di nodi inferiore  a $n-1$

Quindi posso applicare l'ipotesi induttiva sulle componenti connesse:

$$|E_i| \leq |V_i| - 1$$

per ogni $i = 1...k$

Ricordiamo che voglio dimostrare che $|E| \leq |V| - 1$
partiamo dalla parte di sinistra (i passaggi sono analoghi alla dimostrazione per la condizione necessaria della connettività):

$$|E| = \sum_{i =1}^k \Big(|E_i|\Big) + \deg(z)$$

$$|E| \leq \sum_{i =1}^k \Big(|V_i| - 1\Big) + \deg(z)$$

$$|E| \leq \sum_{i =1}^k \Big(|V_i|\Big) - k + \deg(z)$$

$$|E| \leq (|V| - 1) - k + \deg(z)$$

Sicuramente $\deg(z) \leq k$, se non fosse così significherebbe che $z$ è collegato con una componente connessa tramite più di un nodo e questo significherebbe che il grafo originale avrebbe avuto un ciclico, ma per nostra ipotesi di partenza non lo deve avere.

$\deg(z) -k \leq 0$

Dato che $\deg(z) -k$ è negativo o al più $0$, se vale

$$|E| \leq (|V| - 1) + \deg(z) - k$$

allora vale anche

$$|E| \leq |V| - 1$$

## Relazione di connessione con il complementare

Vediamo, quando ci viene dato lo stato di connessione di un grafo, cosa di può dire del suo complementare:

- $G$ connesso $\implies \bar G$ connesso $?$ FALSO
	come esempio basta considerare un grafo completo.
- $G$ non connesso $\implies \bar G$ non connesso $?$ FALSO
	come esempio basta considerare un grafo completo.

- $G$ connesso $\implies \bar G$ non connesso $?$ FALSO
	come esempio basta considerare un grafo autocomplementare

- $G$ non connesso $\implies \bar G$ connesso $?$ VERO
	Supponiamo che $G$ abbia $k$ componenti connesse $V_1, ..., V_k$.
	Nel grafo complementare si avranno tutti gli archi mancanti, quindi tutti gli archi che connettono tutti i nodi di componenti connesse diverse (è possibile che anche all'interno delle componenti connesse si formino degli archi).
	Consideriamo due nodi $u, v \in V$:
	- se essi appartengono a due componenti connesse diverse nel grafo originale allora nel grafo complementare saranno sicuramente connessi direttamente da un arco.
	- se essi appartengono alla stessa componente connessa abbiamo 2 casi:
		- se nel grafo originale erano scollegati allora nel complementare saranno collegati da un arco direttamente
		- se nel grafo originale erano collegati allora nel grafo complementare esisterà sicuramente un cammino che li collega passando per un'altra componente connessa

