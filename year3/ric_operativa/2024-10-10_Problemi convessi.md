
# Problemi convessi

Per caratterizzare le proprietà dei problemi di programmazione matematica in cui l’insieme ammissibile $C$ risulta essere convesso e la funzione obiettivo è convessa, è importante introdurre il concetto di **convessità**.

In particolare con funzioni convesse i punti di **minimo locale e globale coincideranno** (lo stesso vale per i massimi locali e globali).

La programmazione convessa è un tipo di programmazione che include la programmazione lineare, e inoltre risulta essere anche più semplice. Quindi le soluzioni di un **problema di programmazione convessa valgono anche per i problemi di programmazione lineare**.

## Insieme convesso

Dato un insieme non vuoto $C \subseteq \mathbb{R}^n$, diremo che $C$ è un insieme convesso se

$$
ax + (1 -\alpha)y \in C \hspace{5mm} \forall x, y \in C, \hspace{2mm} \forall\alpha \in [0, 1]
$$

ovvero $C$ è convesso se presa qualunque coppia di punti $x, y$ nell’insieme $C$, il segmento che li congiunge è interamente all’interno dell’insieme stesso.

la quantità $ax + (1 -\alpha)y$ al variare di $\alpha \in [0, 1]$ rappresenta proprio tutti i punti del segmento che congiunge $x$ e $y$ e si chiama **combinazione convessa**.

**L’insieme vuoto** è anche ritenuto un insieme convesso, in quanto non nega la definizione.

![https://i.ibb.co/YDkBxWz/image-2.png](https://i.ibb.co/YDkBxWz/image-2.png)

### Proprietà

Dati degli insiemi convessi $C_1, …, C_m$ con $m \geq 1$ allora anche la loro **intersezione è un insieme convesso**.

![https://i.ibb.co/zbJTK54/image.png](https://i.ibb.co/zbJTK54/image.png)

## Determinare se un insieme è convesso

Se prendiamo un insieme, ad esempio

$$
C = \{x \in \mathbb{R}^2: \sqrt{x_1^2 + x_2^2} \leq 1\}
$$

Si tratta di un insieme di punti interni ad una circonferenza di raggio 1.

Per dimostrarlo bisogna che determinare $w_1, w_2$, cioè le coordinate di un qualsiasi punto che sta nel segmento che congiunge $x$ e $y$ e dimostrare che qualunque sia il punto, esso stia all’interno della circonferenza: $\sqrt{w_1^2 + w_2^2} \leq 1$

Si possono tentare due approcci, il metodo algebrico che risulta essere un po’ complesso e un metodo geometrico.

### Inizio del metodo algebrico

Il metodo algebrico consiste nel trovare le coordinate del punto $w$:

$$
w = \begin{pmatrix}w_1\\w_2\end{pmatrix} = \alpha \begin{pmatrix}x_1\\x_2\end{pmatrix} + (1-\alpha) \begin{pmatrix}y_1\\y_2\end{pmatrix} \hspace{5mm} \forall \alpha \in [0, 1]
$$

e poi verificare che tali punti siano all’interno della circonferenza

$$
\sqrt{w_1^2 + w_2^2} \leq 1
$$

### Metodo geometrico

In questo metodo, che risulta essere più semplice, vengono usate le norme.

Impostiamo la combinazione convessa di qualunque $x, y \in C$ e $\alpha \in [0, 1]$:

$$
w = \alpha x + (1 - \alpha) y
$$

Volendo dimostrare che $w \in C$ e notando che $\sqrt{w_1^2 + w_2^2} = ||w||_2$, possiamo quindi calcolare la norma e verificare che sia $\leq 1$.

$$
||w|| = ||\alpha x + (1-\alpha) y||
\\
||\alpha x + (1-\alpha) y|| \leq ||\alpha x|| + ||(1-\alpha)y||
\\
||\alpha x|| + ||(1-\alpha)y|| = |\alpha|\, ||x|| + |1-\alpha|\, ||y||
\\
\text{dato che }\alpha \in [0, 1] \text{ posso togliere i valori assoluti}
\\ 
\text{inoltre per definizione dell'insieme}||x|| \leq 1, ||y|| \leq 1
\\
\text{quindi}
\\
|\alpha|\, ||x|| + |1-\alpha|\, ||y|| \leq \alpha 1 + (1 - \alpha)1
\\
\alpha 1 + (1 - \alpha)1 = 1
$$

Otteniamo quindi che per ogni $\alpha \in [0, 1], ||w|| \leq 1$

## Funzioni convesse

Data una funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$ e un insieme convesso $C \subseteq \mathbb{R}^n$, si dice che la **funzione è convessa sull’insieme** $C$, se per ogni coppia di punti $x, y \in C$, risulta che

$$
f(\alpha x + (1-\alpha)y) \leq \alpha f(x) + (1-\alpha) f(y), \hspace{5mm} \forall\alpha \in [0, 1]
$$

Si dice **strettamente convessa** con una disuguaglianza in senso stretto, con $x\neq y$ e $\alpha \in (0, 1)$

Analogamente:

Data una funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$ e un insieme convesso $C \subseteq \mathbb{R}^n$, si dice che la **funzione è concava sull’insieme** $C$, se per ogni coppia di punti $x, y \in C$, risulta che

$$
f(\alpha x + (1-\alpha)y) \geq \alpha f(x) + (1-\alpha) f(y), \hspace{5mm} \forall\alpha \in [0, 1]
$$

Si dice **strettamente concava** con una disuguaglianza in senso stretto, con $x\neq y$ e $\alpha \in (0, 1)$

## Interpretazione geometrica

Vediamo l’interpretazione geometrica per la funzione convessa:

![https://i.ibb.co/5s6PSPK/image.png](https://i.ibb.co/5s6PSPK/image.png)

Vediamo quindi come una funzione è convessa su un insieme $C$ se i valori assunti dalla funzione nell’intervallo delimitato da $x$ e $y$ stanno sotto al segmento che congiunge $x$ e $y$.

È quindi possibile riconoscere le funzioni convesse in un certo intervallo se sono a forma di tazza in tale intervallo.
