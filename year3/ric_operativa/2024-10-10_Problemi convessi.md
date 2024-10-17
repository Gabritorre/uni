
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

## Funzioni convesse e concave

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

### Lemma

Data la funzione $f(x)$ con $f:\mathbb{R}^n \rightarrow \mathbb{R}$ e dato **l’insieme convesso** $C \subseteq \mathbb{R}^n$, se $f(x)$ **è convessa** su $C$ allora anche $g(x) = -f(x)$ è **concava** su C

Analogamente se $f(x)$ è **concava** su $C$ allora $g(x) = -f(x)$ è **convessa** su $C$.

Nota: il lemma vale anche con funzioni **strettamente concave e convesse**.

**Dimostrazione**:

Dalla convessità di di $f(x)$ segue che:

$$
f(\alpha x + (1-\alpha)y) \leq \alpha f(x) + (1-\alpha) f(y)
$$

Moltiplicando per $-1$:

$$
[-f](\alpha x + (1-\alpha)y) \geq \alpha [-f](x) + (1-\alpha) [-f](y)
$$

Sostituendo $g = -f$ ottengo esattamente la definizione di concavità

$$
g(\alpha x + (1-\alpha)y) \geq \alpha g(x) + (1-\alpha) g(y)
$$

Da questo lemma è utile notare che se $\bar x$ è un **minimo locale/globale** della funzione $f(x)$ su un insieme generico $A \subseteq \mathbb{R}^n$, allora su $-f(x)$ si avrà che $\bar x$ è un **massimo locale/globale** su $A$.

(vale anche il contrario)

## Funzioni sia convesse che concave

Data una funzione **affine** $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$, allora $f(x)$ è **sia concava che convessa** su $\mathbb{R}^n$

**Dimostrazione**:

Una funzione affine $f(x)$ ha la seguente forma: $f(x) = f_L(x) + \bar c$

cove $f_L(x)$ è una funzione lineare e $\bar c \in \mathbb{R}$.

Presa una qualsiasi coppia $x, y \in \mathbb{R}^n$ e uno scalare $\alpha \in [0, 1]$, si avrà

$$
f[\alpha x + (1-\alpha)y] = f_L[\alpha x(1-\alpha)y] + \bar c
\\
=\alpha f_L(x) + (1-\alpha)f_L(y) + \bar c
$$

$\bar c$ lo posso scrivere come combinazione convessa:

$$
=\alpha f_L(x) + (1-\alpha)f_L(y) + \alpha \bar c + (1-\alpha)\bar c
$$

raccolgo i termini comuni:

$$
=\alpha (f_L(x) + \bar c)  + (1-\alpha)(f_L(y) + \bar c)
$$

Dalla definizione di $f(x)$ ottengo quindi:

$$
=\alpha f(x)  + (1-\alpha)f(x)
$$

Quindi abbiamo ottenuto che 

$$
f[\alpha x + (1-\alpha)y] =\alpha f(x)  + (1-\alpha)f(x)
$$

che soddisfa contemporaneamente sia la definizione di convessità che di concavità.

## Insieme di livello

Può capitare che nei problemi di ottimizzazione l’insieme delle soluzioni ammissibili sia definito tramite dei vincoli che sono delle disequazioni. In tale situazione riconoscere che i vincoli formano insiemi convessi è importante per sfruttare la proprietà che anche l’intersezione di tali vincoli è un insieme convesso.

Data una funzione $f(x)$ con $f: \mathbb{R}^n \rightarrow \mathbb{R}$ **convessa** su $\mathbb{R}^n$ allora l’**insieme livello** $\mathcal{L}_\gamma$ **è convesso** per ogni $\gamma \in \mathbb{R}$

$$
\mathcal{L}_\gamma = \{x \in \mathbb{R}^n: f(x) \leq \gamma\}
$$

In due dimensioni ($n = 2$) possiamo pensare che l’insieme di livello siano i punti dell’asse x i cui valori calcolati nella funzione ($f(x)$) stiano al di sotto di un valore $\gamma$

![https://i.ibb.co/Wpzj3WH/image.png](https://i.ibb.co/Wpzj3WH/image.png)

**Dimostrazione**:

Fissato un $\gamma \in \mathbb{R}$ avremo 3 casi:

- $\mathcal{L}_\gamma = \emptyset$, che è convesso
- $\mathcal{L}_\gamma$ contiene un solo elemento (è un s*ingleton*), che è quindi convesso
- altrimenti $\mathcal{L}_\gamma$ contiene un numero infinito di elementi (dato che lavoriamo sull’insieme $\mathbb{R})$
    
    In tal caso siano $y, z$ due punti distinti di $\mathcal{L}_\gamma$, si ha per definizione che 
    
    $f(y) \leq \gamma$
    
    $f(z) \leq \gamma$
    
    Inoltre consideriamo un **punto intermedio** $w$ tra $y$ e $z$
    
    $$
    w = \alpha y + (1-\alpha)z \hspace{5mm} \text{con } \alpha \in [0, 1]
    $$
    
    Per la convessità di $f$ su $\mathbb{R}^n$ si ha
    
    $$
    f(w) = f[\alpha y + (1-\alpha) z] \leq \alpha f(y) + (1-\alpha) f(z)
    $$
    
    Dato che:
    
    $f(y) \leq \gamma$
    
    $f(z) \leq \gamma$
    
    possiamo fare una maggiorazione
    

	$$
	\alpha f(y) + (1-\alpha) f(z) \leq \alpha \gamma + (1-\alpha) \gamma
	$$

	Dato che $\alpha \in [0, 1]$

	$$
	\alpha \gamma + (1-\alpha) \gamma = \gamma
	$$

	Otteniamo quindi che $f(w) \leq \gamma$ cioè $w$ appartiene a $\mathcal{L}_\gamma$ indipendentemente dalla scelta di $y$ e $z$. Questo significa che tutti i punti tra $y$ e $z$ sono sotto $\gamma$, cioè l’insieme $\mathcal{L}_\gamma$ è un insieme convesso.

**Nota**: Con funzioni convesse su $\mathbb{R}^n$ ogni insieme di livello $\mathcal{L}_\gamma$ è convesso, per qualsiasi $\gamma$.

## Curva di livello

![https://i.ibb.co/r2B5RbG/image.png](https://i.ibb.co/r2B5RbG/image.png)
