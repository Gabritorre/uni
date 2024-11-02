# Programmazione lineare

Possiamo vedere la programmazione lineare come un caso particolare della programmazione convessa nella forma: 

$$
\underset{x\in C}{\min} f(x)
$$

in cui la funzione$f$ è **lineare** e $C$ insieme convesso definito dall’intersezione di vincoli rappresentati come funzioni **lineari**.

Dopo aver stabilito che le soluzioni del problema esistono cerchiamo di identificare le soluzioni a tale problema.

## Condizioni di ottimalità

Vediamo due condizioni analitiche che ci permettono di trovare le soluzioni ad un problema di ottimizzazione, la direzione ammissibile per un insieme e la direzione di discesa per una funzione.

### Direzione ammissibile

Dato l’insieme $C \subseteq \mathbb{R}^n$, il punto $\bar x \in C$ e un punto qualsiasi $y \in \mathbb{R}^n$ diverso da $\bar x$, si dice che il **vettore direzione** $d \in \mathbb{R}$ $d \in \mathbb{R}$$d = y-\bar x$ è una **direzione ammissibile per** $C$ **nel punto** $\bar x$ se esiste $\bar \alpha > 0$ per cui i punti calcolati come $x = \bar x + \alpha d$ appartengono a $C$, per ogni $\alpha \in (0, \bar \alpha]$

L’interpretazione è che se dal punto $\bar x$ mi muovo per piccoli passi nella direzione $d$ e genero tutti punti $x$ che appartengono all’insieme $C$ allora la direzione $d$ è detta ammissibile per $C$ nel punto $\bar x$.

Nella seguente immagine ci sono due direzioni entrambi ammissibili

![https://i.ibb.co/KzghwZZ/image.png](https://i.ibb.co/KzghwZZ/image.png)

La direzione $d$ è ammissibile in quanto esiste un $\bar \alpha < 1$ in quanto un pezzo della direzione va fuori dall’insieme $C$.

Mentre la direzione $\tilde{d}$ è una direzione ammissibile direttamente $\bar \alpha = 1$ cioè nella sua interezza.

Nota: se $C$ è un insieme convesso allora scelto un punto dentro l’insieme, qualsiasi direzione è ammissibile nella sua interezza ($\bar \alpha = 1$)

### Direzione di discesa

Sia data la funzione $f(x)$ con $f : \mathbb{R}^n \rightarrow \mathbb{R}$, ed il vettore di direzione $d \in \mathbb{R}$ non nullo. Considerando il punto $\bar x \in \mathbb{R}$ si dice che $d$ è una **direzione di discesa per la funzione** $f(x)$ nel punto $\bar x$ se esiste un $\bar \alpha > 0$ tale che:

$$
f(\bar x + \alpha d) < f(\bar x) \hspace{5mm} \forall \alpha \in (0, \bar \alpha]
$$

In altre parole, $d$ è una direzione di discesa se, muovendosi a partire da $\bar x$ lungo la direzione $d$, la funzione $f$ diminuisce.

Siccome trovare una direzione di discesa in questo modo non risulta per nulla comodo in quanto bisognerebbe andare a tentativi sulla scelta di $d$ fino a trovare la direzione di discesa, è possibile utilizzare la seguente proposizione:

### Proposizione

Data la funzione $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$ e $f \in C^1(\mathbb{R}^n)$, sia $d \in \mathbb{R}^n$ con $0 < ||d|| < \infty$ (norma non nulla e limitata) e $\bar x \in \mathbb{R}^n$. La direzione $d$ è una direzione di discesa per $f(x)$ in $\bar x$ se e solo se:

$$
\nabla f(\bar x)^T d < 0
$$

Quindi nell’ipotesi che $f$ sia almeno una volta continuamente differenziabile se la derivata direzionale lungo la direzione $d$ è minore di $0$ allora tale direzione è di discesa per la funzione nel punto $\bar x$.

Si può ottenere facilmente una direzione di discesa $d = - \nabla f(\bar x)^T$ (**l’antigradiente**) infatti se prendiamo:

$$
\nabla f(\bar x) = \begin{pmatrix}
\bar x_1 \\
\bar x_2 \\
... \\
\bar x_n \\
\end{pmatrix} \text{ diverso dal vettore nullo}
$$

allora $d$ vale:

$$
d = -\nabla f(\bar x) = \begin{pmatrix}
-\bar x_1 \\
-\bar x_2 \\
... \\
-\bar x_n \\
\end{pmatrix}
$$

di conseguenza il prodotto $\nabla f(\bar x)^T d$ vale:

$$
\nabla f(\bar x)^T d = \begin{pmatrix}\bar x_1 & \bar x_2 & ... & \bar x_n\end{pmatrix}
\begin{pmatrix}
-\bar x_1 \\
-\bar x_2 \\
...\\
-\bar x_n
\end{pmatrix} = \\
=[-(\bar x_1)^2] + [-(\bar x_2)^2] + ... + [-(\bar x_n)^2] <0
$$

**Dimostrazione della proposizione**:

Dal teorema del valor medio (considerando $y = \bar x + \alpha d$) ho che per $\alpha \in (0, 1]$:

$$
f(\bar x  + \alpha d) = f(\bar x) + \nabla f(\bar x)^T (\alpha d) + o(||\alpha d||)
$$

porto fuori $\alpha$ dal prodotto con il gradiente e moltiplico e divido $o$-piccolo per $||d||$

$$
f(\bar x  + \alpha d) = f(\bar x) + \alpha\nabla f(\bar x)^T d + o(||\alpha d||) \frac{||d||}{||d||}
$$

Dato che $\alpha \in (0, 1]$ divido entrambi i membri per $\alpha$ e porto $f(\bar x)$ a sinistra:

$$
\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} = \nabla f(\bar x)^T d + \frac{o(||\alpha d||)}{\alpha ||d||} ||d||
$$

Passo al limite di $\alpha \to 0^+$ in ambo i membri, dato che il $\nabla f(\bar x)^T d$ non dipende da $\alpha$ posso evitare di metterlo nel limite.

$$
\lim_{\alpha \to 0^+}\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} = \nabla f(\bar x)^T d + \underbrace{\lim_{\alpha \to 0^+}\frac{o(||\alpha d||)}{\alpha ||d||} ||d||}_0
$$

$$
\lim_{\alpha \to 0^+}\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} = \nabla f(\bar x)^T d
$$

Per dimostrare il primo verso del se e solo se, supponiamo che $\nabla f(\bar x)^T d < 0$, cioè che sia negativo, ma allora anche il membro di sinistra per l’uguaglianza sarà negativo e dato che $\alpha$ è positivo allora è $f(\bar x + \alpha d) - f(\bar x)$ ad essere negativo, cioè si arriva alla definizione di **direzione di discesa**: $f(\bar x + \alpha d) - f(\bar x) < 0 \longrightarrow f(\bar x + \alpha d) < f(\bar x)$ .

Per dimostrare l’altro verso del se e solo se, supponiamo che $d$ sia una direzione di discesa per $f(x)$ in $\bar x$, pertanto dalla definizione di direzione di discesa ho che: 

$$
f(\bar x  + \alpha d) < f(\bar x) \longrightarrow f(\bar x  + \alpha d) - f(\bar x) < 0
$$

e dato che $\alpha$ è positivo allora il limite è negativo e per l’uguaglianza anche $\nabla f(\bar x)^T d$ è negativo:

$$
\nabla f(\bar x)^T d =\lim_{\alpha \to 0^+}\frac{f(\bar x  + \alpha d) - f(\bar x)}{\alpha} < 0
$$
