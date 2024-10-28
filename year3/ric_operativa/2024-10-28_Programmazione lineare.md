# Programmazione lineare

Possiamo vedere la programmazione lineare come un caso particolare della programmazione convessa.

Dato un problema di ottimizzazione del tipo 

$$
\underset{x\in C}{\min} f(x)
$$

Con $f$ funzione $\mathbb{R}^n \rightarrow \mathbb{R}$ e $C$ insieme convesso.

Dopo aver stabilito che le soluzioni del problema esistono cerchiamo di identificare le soluzioni a tale problema.

## Condizioni di ottimalità

Vediamo due condizioni analitiche che ci permettono di trovare le soluzioni ad un problema di ottimizzazione:

### Direzione ammissibile

Dato l’insieme $C \subseteq \mathbb{R}^n$ ed il punto $\bar x \in C$, si dice che il **vettore direzione** $d \in \mathbb{R}$ $d \in \mathbb{R}$$d = y-\bar x$ con $y \in \mathbb{R}^n$ e $y\neq \bar x$ è una **direzione ammissibile nel punto** $\bar x$ se il punto $x = \bar x + \alpha d$ appartiene a $C$, per ogni $\alpha \in (0, \bar \alpha]$ con $\bar \alpha > 0$

Nella seguente immagine ci sono due direzioni entrambi ammissibili

![https://i.ibb.co/KzghwZZ/image.png](https://i.ibb.co/KzghwZZ/image.png)

La direzione $d$ è ammissibile con $\bar \alpha < 1$ in quanto un pezzo della direzione va fuori dall’insieme $C$.

Mentre la direzione $\tilde{d}$ è una direzione ammissibile con $\bar \alpha = 1$ cioè nella sua interezza.

Nota: se $C$ è un insieme convesso allora scelto un punto dentro l’insieme, qualsiasi direzione è ammissibile nella sua interezza ($\bar \alpha = 1$)

### Direzione di discesa

Sia data la funzione $f(x)$ con $f : \mathbb{R}^n \rightarrow \mathbb{R}$, ed il vettore $d \in \mathbb{R}$, con $d \neq 0$.

Considerando il punto $\bar x \in \mathbb{R}$ si dice che $d$ è una **direzione di discesa per la funzione** $f(x)$ nel punto $\bar x$ se esiste un $\bar \alpha > 0$ tale che:

$$
f(\bar x + \alpha d) < f(x) \hspace{5mm} \forall \alpha \in (0, \bar \alpha]
$$
