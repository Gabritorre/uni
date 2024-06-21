# Equazioni differenziali ordinarie

Le equazioni differenziali ordinarie si presentano nella forma:

$$F(x;y;y';...;y^{(n)}) = 0$$

Una equazione differenziale è una equazione che ha per incognita una funzione $y$ nella variabile $x$, e che stabilisce una relazione fra: $x, y, y^{(n)}$

l'**ordine** dell'equazione differenziale è dato dal massimo ordine di derivata della $y$.

In generale le soluzioni di un'equazione differenziale sono infinite:
- L'insieme delle infinite soluzione viene detto **integrale generale**
- Una soluzione specifica, detta **integrale o soluzione particolare**, si ottiene fissando un valore a $c$

## Tipologie di equazioni differenziali

$$F(x;y;y') = 0$$

Tratteremo le equazione differenziali di tipo:
1.  $y'=f(x)$
2. Le equazioni di primo ordine a variabili separabili $y' = g(x) \cdot h(y)$
3. Le equazioni lineari di primo ordine (omogenee e complete) $y' = a(x) \cdot y + b(x)$
4. Le equazioni lineari del secondo ordine a coefficienti costanti omogenee $ay'' + by' + c = 0$
5. Le equazioni lineari del secondo ordine a coefficienti costanti complete $ay'' + by' + c = g(x)$

### Equazioni tipo $y' = f(x)$

Per risolvere questo tipo di equazioni è sufficiente integrare ambo i membri dopo aver isolato le $x$ dalle $y$.

Es.

$y'-2\cos x = 0$

$y'= 2\cos x \longrightarrow \int y' \,dx = \int 2\cos (x) \, dx$

ottenendo così l'integrale generale:

$y = 2 \sin x + c$


###  Le equazioni di primo ordine a variabili separabili

Una equazione è detta a variabili separabili quando può essere scritta nella forma $y' = g(x) \cdot h(y)$ quindi come prodotto di due funzioni, una sulla variabile x e l'altra sulla variabile y.

Es.

$y' = 4x \cdot y^2$
dove $g(x) = 4x$ e $h(x) = y^2$

Per risolverla possiamo considerare $y'$ come $\frac{dy}{dx}$

$\frac{dy}{dx} = 4x \cdot y^2$

e adesso isoliamo le $x$ dalle $y$ :

$\frac{dy}{y^2} = 4x \cdot dx$

ora integriamo entrambi i membri:

$\int \frac{1}{y^2}\,dy = \int 4x \, dx$

$-\frac{1}{y} = 2x^2 + c$

si esplicita per y:

$y = -\frac{1}{2x^2+c}$

non bisogna dimenticarsi che anche $y = 0$ può essere una soluzione, infatti in questo caso lo è dato che andando a sostituire nell'equazione iniziale si ottiene una espressione vera.

Il caso $y = 0$ spesso può essere già compreso nella soluzione generale quando il valore $c$ azzera il membro di destra.

In questo caso però, nessun valore di $c$ ci restituisce $y = 0$ quindi va aggiunto alle soluzioni:

$S: y = -\frac{1}{2x^2+c} \lor y = 0$

###  Le equazioni lineari

Questo tipo di equazioni sono scritte nella forma

$$y' = a(x)\cdot y + b(x)$$

Per essere lineare l'equazione deve avere $y$ e $y'$ al primo grado e non devono essere moltiplicate tra loro.

- Se $b(x) = 0$  l'equazione è detta **lineare omogenea**.
- Se $b(x) \neq 0$  l'equazione è detta **lineare completa**.

#### formula risolutiva per le omogenee

$$y = ke^{\int a(x)\,dx}$$

#### formula risolutiva per le complete

$$y = e^{\int a(x)\,dx}\left[\int b(x)\cdot e^{-\int a(x)\,dx}dx+c\right]$$

###  Le equazioni lineari del secondo ordine a coefficienti costanti omogenee 

Le equazioni lineari del secondo ordine si presentano come:

$$a_2(x)y'' + a_1(x)y' + a_0(x)y = g(x)$$

Scritta in **forma normale** diventa:

$$y'' + a(x)y' + b(x)y = f(x)$$

si parla di **equazione a coefficienti costanti** quando $a(x), b(x)$ sono numeri reali e $f(x)$ è una funzione continua.

Queste equazioni sono omogenee quando $f(x) = 0$

$$y'' + ay' + by = 0$$

per risolvere questo tipo di equazioni:

1. si scrive l'equazione caratteristica dell'equazione differenziale che si presenta come:

$$z^2+az+b = 0$$

2. si calcola il $\Delta$ e si distinguono 3 casi:
	-  $\Delta > 0$: si hanno due soluzioni distinte $(z_1, z_2)$
		$$y = c_1e^{z_1x} + c_2e^{z_2x}$$
	- $\Delta = 0$: si hanno due soluzioni coincidenti $(z_1 = z_2)$
		$$y = e^{z_1x}(c_1 + c_2x)$$
	- $\Delta < 0$: si hanno due soluzioni complesse coniugate (uguali ma con la parte immaginaria cambiata di segno) $(z_{1, 2} = \alpha \pm i\beta)$
		$$y = e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$$

- Esempio con  $\Delta > 0$

$y''-5y'+6y = 0$

eq. caratteristica: $z^2-5z + 6 = 0$

discriminante: $\Delta = (-5)^2 - 4 \cdot 6 = 25-24 = 1$

$z_{1,2} = \frac{5 \pm \sqrt{1}}{2}$

$z_1 = 2$

$z_2 = 3$

Soluzione: 

$y = c_1e^{2x} + c_2e^{3x}$

- Esempio con  $\Delta = 0$

$y''-2y'+y = 0$

eq. caratteristica: $z^2-2z + 1 = 0$

discriminante: $\Delta = 4 - 4 = 0$

$z_{1,2} = \frac{2}{2} = 1$

Soluzione: 

$y = e^{1\cdot x}(c_1 + c_2x)$

- Esempio con  $\Delta < 0$

$y''-4y'+13y = 0$

eq. caratteristica: $z^2-4z + 13 = 0$

discriminante: $\Delta = 16-4\cdot 13 = - 36$

$z_{1,2} = \frac{4 \pm i\sqrt{|-36|}}{2} = \frac{4 \pm i6}{2} = 2 \pm i3$

Soluzione:
abbiamo che $\alpha = 2, \beta = 3$ 

$y = e^{2x}(c_1\cos3x + c_2 \sin 3x)$

### Le equazioni lineari del secondo ordine a coefficienti costanti complete

Si presentano come 

$$y'' + ay' + by = g(x)$$

la soluzione a queste equazioni è data dalla somma tra la **soluzione dell'equazione omogenea associata** e la **soluzione particolare**

####  1 Caso con a = 0, b = 0

$$y'' = g(x)$$

per risolvere questo tipo di equazione è sufficiente **integrare due volte** g(x)

ES.

$y'' = 12x^2 + 4$

integriamo una volta:

$y' = 4x^3 + 4x + c_1$

integro una seconda volta

$y = x^4 + 2x^2 + c_1x + c_2$

#### 2 Caso a $\neq$ 0, b $= 0$

In questo caso la soluzione particolare deve essere di un grado maggiore a quello di $g(x)$, e va risolta utilizzando il metodo della somiglianza.

ES.

$y'' + y' = 2x$ 

Troviamo la soluzione particolare

abbiamo che $g(x)$ è al grado 1 quindi la nostra soluzione particolare sarà di grado 2, quindi avrà una forma del tipo $ax^2 + bx + c$ dobbiamo quindi trovare i coefficienti.

Calcoliamo le derivate prima e seconda della nostra equazione generica

$y_0 = ax^2 + bx + c$ 

$y_0' = 2ax + b$

$y_0'' = 2a$

Sostituendo in $y'' + y' = 2x$ otteniamo

$2a + 2ax + b = 2x$

Ora facciamo un sistema in cui mettiamo a confronto i coefficienti del primo membro con quelli del secondo membro

$\begin{cases} 
2a = 2 & \text{coefficienti in x} \\
2a + b = 0 & \text{coefficienti termini noti}
\end{cases} \begin{cases} 
a = 1 \\
b = -2
\end{cases} (\text{c sarà un parametro libero, assumiamo 0})$

soluzione particolare: $y_0 = x^2 -2x$

ovviamente per trovare l'integrale generale bisogna sommare alla soluzione particolare la soluzione dell'equazione omogenea associata.

#### 3 Caso a $\neq$ 0, b $\neq 0$

In questo caso la soluzione particolare deve avere lo stesso grado di $g(x)$, e va risolta utilizzando il metodo della somiglianza.

ES.

$y'' - 2y' - 3y = 3x + 7$

la nostra soluzione particolare sarà di primo grado proprio come $g(x)$ e quindi avrà la forma $ax + b$

Calcoliamo le derivate prima e seconda della nostra equazione generica

$y_0 = ax + b$ 

$y_0' = a$

$y_0'' = 0$

Sostituendo in $y'' - 2y' - 3y = 3x + 7$ otteniamo

$0 - 2(a) - 3(ax + b) = 3x + 7$

$-3ax - 2a - 3b = 3x + 7$

Ora facciamo un sistema in cui mettiamo a confronto i coefficienti del primo membro con quelli del secondo membro

$\begin{cases} 
-3a = 3 & \text{coefficienti in x} \\
-2a - 3b = 7 & \text{coefficienti termini noti}
\end{cases} \begin{cases} 
a = -1 \\
b = -\frac{5}{3}
\end{cases}$

soluzione particolare: $y_0 = -x-\frac{5}{3}$

ovviamente per trovare l'integrale generale bisogna sommare alla soluzione particolare la soluzione dell'equazione omogenea associata.

#### 4 Caso con $g(x) = s(x)e^{\alpha x}$

$$y'' + ay' + by=s(x)e^{\alpha x}$$

In questo caso dobbiamo calcolare l'equazione omogenea associata come prima cosa, questo perché la soluzione particolare dipende da essa:

- se $\alpha$ **non** è nella soluzione dell'omogenea allora la soluzione ha forma $y_0 = p(x)e^{\alpha x}$
- se $\alpha$ **è solo una delle soluzioni distinte** dell'omogenea allora la soluzione ha forma $y_0 = xp(x)e^{\alpha x}$
- se $\alpha$ **è uguale alle soluzioni coincidenti** dell'omogenea allora la soluzione ha forma $y_0 = x^2p(x)e^{\alpha x}$

dove $p(x)$ è un polinomio generico dello stesso grado di $s(x)$

Si prosegue come nel caso 3:

Si calcola la derivata prima e seconda del polinomio generico e si sostituiscono nell'equazione originale.
Si risolve il sistema relazionando i membri con la x e i termini noti e si trovano $a,b$ che vanno sostituiti in $y_0$ trovando così la soluzione particolare.
Infine va sommato alla soluzione dell'omogenea.

#### 5 Caso con $g(x) = e^{\alpha x} (k_1 \cos(\beta x) + k_2 \sin(\beta x))$

Calcoliamo l'equazione omogenea associata come prima cosa, questo perché la soluzione particolare dipende da essa:

- se $\alpha + i\beta$ non è soluzione dell'omogenea allora la soluzione ha forma $y_0 = e^{\alpha x}(a \cos(\beta x) + b \sin(\beta x))$
- se $\alpha + i\beta$ è soluzione dell'omogenea allora la soluzione particolare ha forma $y_0 = xe^{\alpha x}(a 
\cos(\beta x) + b \sin(\beta x))$

(si prosegue come nel caso 3)

si calcola derivata prima e seconda e si sostituiscono nell'equazione originale.
si risolve il sistema dove si relazionano i membri con la x e i termini noti, si trovano $a,b$ e si sostituiscono in $y_0$ trovando così la soluzione particolare, che va infine sommata alla soluzione omogenea.

#### 6 Caso sovrapposizione degli effetti

Le equazione che si presentano nella forma

$$y'' + ay' + by = g_1(x) + g_2(x)$$

la soluzione può essere trovata studiando separatamente le due funzioni:

risolvere separatamente:

- $y'' + ay' + by = g_1(x)$
- $y'' + ay' + by = g_2(x)$

La soluzione particolare è data dalla somma delle due precedenti soluzioni.

## Problema di Cauchy

Si parla di problema di Cauchy quando viene chiesto di trovare una soluzione specifica specificando un punto $(x_0, y_0)$ . Un problema di Cauchy avrà la seguente forma:

$$\begin{cases}
F(x;y;y') = 0 & \text{equazione differenziale}\\
y_0 = f(x_0) & \text{condizione iniziale}
\end{cases}$$

Es.

$\begin{cases}
y' -2x = 1 \\
5 = f(2)
\end{cases}$

Risolviamo innanzitutto l'equazione differenziale trovando l'integrale generale:

$y = x^2 + x + c$

ora andiamo a sostituire i valori di $y$ e $x$ per trovare il valore di $c$ :

$5 = 2^2 + 2 + c \longrightarrow c = -1$

Quindi la soluzione al problema di Cauchy è:

$y = x^2 + x -1$ 

### Cauchy con equazioni di secondo ordine

si presentano come

$\begin{cases}
y'' + ay' + by = f(x) \\
y(x) = y_1 \\
y'(x) = y_2
\end{cases}$

Es.

$\begin{cases}
y'' - 6y' + 10y = 0 \\
y(0) = 1 \\
y'(0) = 0
\end{cases}$

$\Delta < 0$ e ottengo

$y = e^{3x}(c_1 \cos(x) + c_2 \sin(x))$

Per trovare il valore di $c_1$

sostituisco nella soluzione trovata x e y:

$1 = e^{3\cdot 0}(c_1 \cos(0) + c_2 \sin(0))$

$1 = 1\cdot (c_1 \cdot 1 + c_2 \cdot 0)$

$c_1 = 1$

Per trovare il valore di $c_2$

derivo la soluzione (posso già sostituire $c_1$ con $1$ ):

$y' = 3e^{3x}\cdot (\cos(x) + c_2 \sin(x)) + e^{3x} \cdot ((-\sin x) + c_2 \cos x)$

$y' = e^{3x}\cdot (3\cos x + 3c_2 \sin x -\sin x + c_2 \cos x)$

sostituisco x e y

$0 = e^{3\cdot 0}\cdot (3\cos 0 + 3c_2 \sin 0 -\sin 0 + c_2 \cos 0)$

$0 =1\cdot (3\cdot 1 + 3c_2 \cdot 0 -0 + c_2 \cdot 1)$

$0 = 3 + c_2$

$c_2 = -3$

Quindi la soluzione al problema di Cauchy è:

$y = e^{3x}(\cos(x) -3 \sin(x))$


## Dominio delle soluzioni

Quando troviamo le soluzioni generiche (l'integrale generale) di una equazione differenziale che presenta un valore assoluto, un $\pm$, o più in generale un sistema di soluzioni può essere richiesto di trovare il dominio delle funzione data una condizione iniziale.

il dominio è dato dal dominio del pezzo della funzione con contiene la condizione iniziale nel suo intervallo.

### Es 1

$y' = \frac{1}{x}$

l'integrale generale è $y = \ln|x| + c$

Se dovessimo calcolare il dominio della soluzione trovata sarebbe $D:x\neq0$

possiamo però scrivere la soluzione come un sistema:

$\begin{cases} 
\ln(-x) +c & \text{se } x < 0 \\
\ln(x) +c & \text{se } x > 0
\end{cases}$

Se mettiamo come condizione iniziale:

$y(1) = 0$

dato che il valore della $x$ che ci viene dato è maggiore di $0$ allora prendiamo in considerazione la seconda righa del sistema

otteniamo:

$0 = \ln(1) + c \longrightarrow c = 0$

quindi la soluzione è $y = \ln(x)$ e il dominio è dato dal dominio della seconda riga del sistema (e non il dominio che avevamo trovato sul valore assoluto prima)

$D: x > 0$

Es 2

$x^2y' = -(x^2-4) \cdot (y-2)^3$

isolando $y'$ :

$y' = -	\frac{(x^2-4)}{x^2}\cdot (y-2)^3$

otteniamo come soluzioni (applicando variabili separabili per $y\neq2$ e calcolando la soluzione costante $y = 2$)

$\begin{cases}
y(x) = 2 & \text{se } y = 2 \\
y(x) = 2 + \sqrt{\frac{x}{2x^2-2cx+8}} & \text{se } y > 2 \\
y(x) = 2 - \sqrt{\frac{x}{2x^2-2cx+8}} & \text{se } y < 2 \\
\end{cases}$

se abbiamo la condizione iniziale $y(0) = 2$
la soluzione è data dalla soluzione costante $y(x) = 2$ il cui dominio è $\mathbb{R}$

se abbiamo la condizione iniziale $y(1) = \frac{5}{3}$
dato che $\frac{5}{3} < 2$ scelgo il ramo corrispettivo (il terzo)

andando a sostituire e risolvendo l'equazione trovo che $c = \frac{1}{2}$

quindi la soluzione particolare è 

$y = 2 - \sqrt{\frac{x}{2x^2-x+8}}$ e calcolando il domino:

$\frac{x}{2x^2 - x +8}> 0$

N: $x > 0$
D: $\Delta < 0 \longrightarrow$ sempre positivo

Quindi il dominio è $D: x > 0$


# Curve parametriche

Le **curve parametriche** sono le traiettorie assunte dalle funzioni (dette a valori vettoriali) definite come:

$f:A\subset \mathbb{R} \longrightarrow \mathbb{R}^m$
$t \longmapsto f(t) = (x_1(t), x_2(t), ..., x_m(t))$

Dove $x_i(t)$ sono funzioni, quindi $f(t)$ rappresenta un vettore di funzioni dipendenti dal parametro $t$

Nel caso in cui $m = 2$ useremo la notazione

$f(t) = (x(t), y(t))$

Nel caso in cui $m = 3$ useremo la notazione

$f(t) = (x(t), y(t), z(t))$

## Esempi di curve parametriche

$f: \mathbb{R} \longrightarrow \mathbb{R}^2$
$t \longmapsto f(t) = (t^2+t, 2t-1)$

Risolvendo il sistema:

$\begin{cases} 
x = t^2 + t \\
y = 2t - 1
\end{cases}$

Si ottiene **l'equazione cartesiana del supporto**

Nel nostro caso si ottiene $x = \frac{1}{4}y^2 + y + \frac{3}{4}$ cioè una parabola con asse orizzontale.

Disegnando l'equazione cartesiana del supporto otteniamo la **curva del supporto**.

![](https://i.ibb.co/HxwG19b/curva-parametrica.png)

immaginando il valore $t$ come se fosse il tempo indichiamo il **verso di percorrenza** come il tragitto che compie la curva in vari tempi $t$.

### Esempio ellisse

l'equazione generica dell'ellisse è 

$\frac{(x - x_{0})^{2}}{a^{2}} + \frac{(y-y_0)^2}{b^2} = 1$

dove $a$ indica la lunghezza del semiasse x (distanza tra origine e intersezione tra ellisse e asse x)
dove $b$ indica la lunghezza del semiasse y (distanza tra origine e intersezione tra ellisse e asse y)

$f(t) = (5\cos(t), 2\sin(t))$ con $t\in [0; 2\pi]$

avendo quindi il sistema

$\begin{cases} 
x = 5\cos(t) \\
y = 2\sin(t)
\end{cases}$

In questo caso non è conveniente isolare la $t$, ma possiamo isolare il coseno e il seno e sfruttare la formula $\cos(x)^2 + \sin(x)^2 = 1$ 

$\begin{cases} 
\frac{x}{5} = \cos(t) \\
\frac{y}{2} = \sin(t)
\end{cases}$

Otteniamo:

$\frac{x^2}{25} + \frac{y^2}{4} = 1$

Quindi un ellisse di centro $(x_0, y_0)$ semiasse orizzontale $a$ e semiasse verticale $b$

Nel nostro caso.

$x_0 = 0, y_0 = 0$
$a = 5, b = 2$

![](https://i.ibb.co/SrgcqCy/curva2.png)

## Limite nelle funzioni a valori vettoriali

$f: I \subset \mathbb{R} \longrightarrow \mathbb{R}^m$

$\lim_{t \to t_0} f(t) = s$

se

$\lim_{t \to t_0} ||f(t) - s|| = 0$ 

Abbiamo che il limite della funzione per t che tende a $t_0$ restituisce un vettore $s$ se la distanza tra il punto $f(t)$ e $s$ tende a zero.


## Proprietà e teoremi delle funzioni vettoriali

- Una funzione è **continua** se tutte le sue componenti sono continue
- Una funzione è **derivabile** se tutte le sue componenti sono derivabili
- Una funzione è **integrabile** se tutte le sue componenti sono integrabili
- Una funzione appartiene alla classe $C^k$ se tutte le sue componenti sono di classe $C^k$

## Tipi di curve

Considerando $f:[a,b] \longrightarrow \mathbb{R}^m$

- Una curva parametrica si dice **chiusa** se il punto iniziale coincide con il punto finale
	$f(a) = f(b)$
- Una curva parametrica si dice **semplice** se la curva non interseca se stessa, escluso il caso in cui sia chiusa
presi qualsiasi $t_1 \in [a,b], t_2 \in]a,b[$ si ha 
$$f(t_1) = f(t_2) \implies t_1 = t_2$$

### Misure aggiuntive

- $r'(t)$ rappresenta la **velocità istantanea** del punto
- $||r'(t)||$ rappresenta la **velocità scalare**
- Se $||r'(t_0)|| \neq$ allora $r'(t_0)$ rappresenta la **direzione della tangente** alla curva nel punto $t_0$
- $r''(t_0)$ rappresenta l'accelerazione istantanea in un punto $t_0$

## Curve regolari

$r: I \subset \mathbb{R} \longrightarrow \mathbb{R}$

Una curva $r$ è **regolare** se appartiene alla classe $C^1(I)$ (Quindi derivabile e con la derivata prima continua) e $r'(t) \neq 0\text{ (vettore nullo)} \,\forall t \in I$

Una curva $r$ è **regolare a tratti** se appartiene alla classe $C^0(I)$ (continua) e c'è un numero finito di valori di $t$ per cui $r$ non è derivabile oppure la derivata vale $0$ (vettore nullo)

Per le curve regolari è sempre definito un versore tangente cioè un vettore di lunghezza 1 nella direzione di $r'(t)$ si trova con la formula

$$T(t) = \frac{r'(t)}{||r'(t)||}$$


## Equazione parametrica e cartesiana della retta tangente

L'equazione parametrica di una retta è definita come

$\begin{cases}
x(t) = x_0 + v_x(t-t_0)\\
y(t) = y_0 + v_y(t-t_0)
\end{cases}$

Avendo un punto $P(x_0, y_0)$ e un vettore $V(v_x, v_y)$

l'equazione cartesiana si ottiene isolando $(t-t_0)$

### Esempio con le curve parametriche regolari:

Avendo la curva $r(t) = (t^2, t)$

è regolare perchè entrambi le componenti sono derivabili e qualsiasi $t$ si scelga non si ottiene un vettore nullo

Il vettore direzione è dato dalla derivata prima della curva:

$r'(t) = (2t , 1)$

#### Determiniamo l'equazione della retta tangente nel punto $t_0 = 0$

$r(0) = (0, 0)$
$r'(0) = (0, 1)$

Equazione parametrica:

$\begin{cases}
x(t) = 0 + 0(t - 0)\\
y(t) = 0 + 1(t - 0)
\end{cases} 
\begin{cases}
x(t) = 0\\
y(t) = t
\end{cases}$

l'equazione cartesiana è x = 0

#### Determiniamo l'equazione della retta tangente nel punto $t_0 = 1$

$r(1) = (1, 1)$
$r'(1) = (2, 1)$

Equazione parametrica:

$\begin{cases}
x(t) = 1 + 2(t - 1)\\
y(t) = 1 + 1(t - 1)
\end{cases} 
\begin{cases}
(t-1) = \frac{x-1}{2}\\
y = 1 + \frac{x-1}{2}
\end{cases}$

l'equazione cartesiana è $y = \frac{x-1}{2} + 1$


## Coordinate polari

Dato un punto $P$ di coordinate $(x, y)$ è possibile identificare univocamente il punto con le coordinate polari.

Le coordinate polari sono composte da:
- La distanza tra il punto e l'origine $\overline{OP}$
- L'angolo tra il semiasse positivo delle $x$ e $\overline{OP}$

![](https://i.ibb.co/PZjtbKS/cordpol.png)

In determinati casi può essere più conveniente rappresentare le curve utilizzando le coordinate polari.

### Curve in forma polare

Le curve in forma polare hanno la forma

$$r(\alpha) = (x(\alpha), y(\alpha))$$

con 

$\begin{cases}
x(\alpha) = f(\alpha) \cos(\alpha) \\
y(\alpha) = f(\alpha) \sin(\alpha)
\end{cases}$

rappresentano un punto che ruota in senso antiorario con angolo $\alpha$ e raggio $f(\alpha)$

Calcolo del vettore tangente:

$$r'(\alpha) = (f' \cos\alpha-f\sin\alpha, f'\sin\alpha + f\cos\alpha)$$

Calcolo della norma del vettore tangente:

$$||r'(\alpha)||^2 = (f')^2 + f^2$$

### Proprietà delle curve in forma polare

- $r(\alpha)$ è continua se e solo se $f$ è continua in $[a,b]$
- $r(\alpha)$ è chiusa se e solo se $f(a) = f(b)$ e $b-a = 2k\pi$
- $r(\alpha)$ è semplice se non esistono $\alpha_1 \in [a,b]$ e $\alpha_2 \in ]a,b[$ tali che $f(\alpha_1) = f(\alpha_2)$ con $\alpha_1-\alpha2 = 2k\pi$
- $r(\alpha)$ è regolare se $f$ è derivabile e $f, f'$ non si annullano contemporaneamente in $[a,b]$


## Lunghezza di un arco di curva

immaginiamo una curva e segniamo dei punti appartenenti a questa curva (partizione del dominio) e colleghiamo questi punti con dei segmenti. 

La lunghezza dell'arco di curva (chiamato anche cammino poligonale) è dato dalla somma di tutti i segmenti.

![](https://i.ibb.co/XkgbVHj/lungh-arco.png)

Se la lunghezza dell'arco di curva **non è infinita** allora la curva si dice **rettificabile**.

### Teorema

Sia $r: [a,b]\longrightarrow \mathbb{R}^m$ una parametrizzazione regolare di una curva $\gamma$ allora $\gamma$ è rettificabile e la lunghezza è data da

$$l(\gamma) = \int_{a}^{b}||r'(t)||\,dt$$

$l(\gamma)$ rappresenta la lunghezza della curva $\gamma$ tra $r(a)$ e $r(b)$

Es.

$r(t) = (\cos t, \sin t, t) \hspace{5mm} \text{con }  0\leq t\leq 2\pi$

troviamo la lunghezza:

$l(\gamma) = \int_{0}^{2\pi}||(-\sin t, \cos t, 1)||\,dt$
$= \int_{0}^{2\pi} \sqrt{\sin^2 t + \cos^2 t + 1^2}\,dt$
$= \int_{0}^{2\pi} \sqrt{2}\,dt$
$\left[\sqrt{2}t\right]_{0}^{2\pi} = 2\pi\sqrt{2}$

### Parametro d'arco
data una parametrizzazione regolare con $t\in[a,b]$ il parametro d'arco si definisce come

$$s(t) = \int_{a}^{t}||r'(\tau)||\,d\tau$$

da cui si può ottenere

$$t'(s) = \frac{1}{||r'||}$$


## Integrale di linea di prima specie

Sia $r:[a,b] \longrightarrow \mathbb{R}^m$ una parametrizzazione regolare e sia $f$ una funzione reale $A\subset \mathbb{R}^m \longrightarrow \mathbb{R}$, in cui la curva sta nel dominio di $f$. si dice integrale di linea di $f$ lungo la curva $\gamma$

$$\int_{a}^{b}f(r(t)) \cdot ||r'(t)|| dt$$

Esempio
funzione: $f(x,y,z) = 3x - y + z$
curva: $r(t) = (3t, 4t - 1, t + 5)$ per $t\in[0,1]$

Calcoliamo l'integrale di linea:

$$\int_{0}^{1}[3\cdot(3t)] + [-1\cdot(4t-1)] + [1\cdot(t+5)]]\, \cdot \,||(3,4,1)|| \, dt$$

$$\int_{0}^{1}9t -4t + 1 + t+5\, \cdot \,\sqrt{9 + 16 + 1} \,dt$$

$$\int_{0}^{1}(6t + 6)\, \cdot \,\sqrt{26}\,dt$$

$$6\sqrt{26}\int_{0}^{1}(t + 1)\,dt$$

$$6\sqrt{26} \cdot \left[\frac{t^2}{2}+t\right]_0^1 = 9\sqrt{26}$$


# Funzioni a più variabili


Le funzioni a più variabili reali sono funzioni che associano ad un vettore di numeri reali un solo numero reale

$f:A\subset \mathbb{R}^n \longrightarrow \mathbb{R}$
$(x_1, ...., x_n) \longmapsto z = f(x_1,...,x_n)$

Nel caso $n = 2$

$f:A\subset \mathbb{R}^2 \longrightarrow \mathbb{R}$
$(x, y) \longmapsto z = f(x, y)$

Ad esempio l'equazione generica del piano:

$(x,y) \longmapsto z = ax + by + c$

Casi particolari:

- equazione: $x = 0 \to$ abbiamo il piano $Oyz$
- equazione: $y = 0 \to$ abbiamo il piano $Oxz$
- equazione: $z = 0 \to$ abbiamo il piano $Oxy$

![](https://i.ibb.co/TB6x33w/piani.png)

- $x = k \to$ piano parallelo al piano $Oyz$
- $y = k \to$ piano parallelo al piano $Oxz$
- $z = k \to$ piano parallelo al piano $Oxy$

## Insieme di livello (curve di livello)

Dato un valore $k$ l'insieme di livello associato a questo $k$ è l'insieme dei punti del dominio tali che $f(x_1,...,x_n)$ = k;

$\Lambda_k = \{x\in\mathbb{R}^n: x \in A \,\land f(x_1,...x_n) = k\}$


![](https://i.ibb.co/ryNfprc/insieme-livello.png)

## Sezioni verticali

Una sezione verticale è data dall'intersezione tra il grafico di una funzione $f$ e un piano verticale. la curva risultante dall'intersezione è il grafico di una funzione in una variabile

- piani ortogonali all'asse $x$ : la sezione ha funzione $z=f(c, y) \text{ con } c \in \mathbb{R}$
- piani ortogonali all'asse $y$ : la sezione ha funzione $z=f(x, c) \text{ con } c \in \mathbb{R}$

### Paraboloide ellittico

Equazione generale: $z = a(x - x_0)^2 + b(y-y_0)^2+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) = x^2 + y^2$
![enter image description here](https://i.ibb.co/zbXs1fv/parab-ellitico.png)

- $a$ e $b$ devono avere lo stesso segno
- vertice in $(x_0, y_0)$
- curve di livello:
	- se $a=b$ circonferenze
	- se $a\neq b$ ellissi
- sezioni verticali: parabole
	- $f(0,y) = y^2$
	- $f(x,0) = x^2$

### Cono

Equazione generale: $z = \sqrt{a(x - x_0)^2 + b(y-y_0)^2}+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) =\sqrt{x^2 + y^2}$

![](https://i.ibb.co/jW7Qq6Y/cono.png)

- $a$ e $b$ devono essere positivi
- vertice in $(x_0, y_0)$
- curve di livello: circonferenze di raggio k (altezza del piano che usiamo per "tagliare" il grafico)
- sezioni verticali: valore assoluto
	- $f(0,y) = |y|$
	- $f(x,0) = |x|$

### Paraboloide iperbolico

Equazione generale: $z = a(x - x_0)^2 + b(y-y_0)^2+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) =x^2 - y^2$

![](https://i.ibb.co/tQmSZPC/parab-iper.png)

- $a$ e $b$ devono avere segni diversi
- sella in $(x_0, y_0)$
- curve di livello:
	- iperboli
- sezioni verticali: parabole
	- $f(0,y) = -y^2$
	- $f(x,0) = x^2$


## Dominio

Il dominio rappresenta una porzione del piano definito dalle condizioni delle variabili x e y.

Tutte le regole del dominio delle funzioni più note rimangono uguali.

Generalmente per trovare il dominio si presentano delle disequazioni, per trovare il domino:
1. risolvere l'equazione associata e disegnarla
2. per capire dove è il dominio rispetto al disegno possiamo sostituire x e y per vedere se soddisfa la disequazione.


Es.
Trovare il dominio della funzione $z = \sqrt{4-x^2-y^2}$

Il dominio è dato da tutte le coppie $(x,y)$ tali che $4-x^2-y^2\geq0$ cioè:

$$D=\{(x,y)\in \mathbb{R}^2:x^2+y^2 \leq4\}$$

trovo i punti di frontiera considerando l'equazione associata

$x^2+ y^2 = 4$ è una circonferenza di centro $(0,0)$ e raggio $2$

Per capire se il domino della funzione è interno o esterno alla circonferenza sostituisco al posto di x e y lo $0$ (che è un punto interno alla circonferenza), la disequazione restituisce vero $(4-0-0\geq0)$ quindi la funzione è interna alla circonferenza.

In alternativa potevamo fare una curva di livello e vedere se era una circonferenza più piccola di quella.

## Topologia in $\mathbb{R}^n$

Per le successive definizioni è necessario considerare un intorno sferico in $\mathbb{R}^n$ $U_r$ di centro $P_0$ e raggio $r$

In $\mathbb{R}^2$ ad esempio:
![](https://i.ibb.co/mJVFqQY/intorno-circ.png)

Dato un insieme $E$ e un punto $P$, esso si dice:
- **Interno** ad $E$ se esiste un intorno di $P$ composto solo da punti che sono appartenenti ad $E$
- **esterno** ad $E$ se esiste un intorno di $P$ che non possiede punti appartenenti ad $E$
- **punto di frontiera** per $E$ se ogni intorno di $P$ possiede sia punti di $E$ sia punti non appartenenti ad $E$

![](https://i.ibb.co/hKy07zx/punti.png)

- $\mathring{E}$ :**parte interna** è l'insieme dei punti interi di $E$
- $\partial E$ : **bordo** è l'insieme dei punti di frontiera di $E$
- $\overline{E}$ :**chiusura** è l'insieme dei punti di $E$ compreso il bordo $(\overline{E}) = \mathring{E} \, \cup \, \partial E$


Sempre considerando l'insieme $E\subseteq \mathbb{R}^n$ , $E$ si dice:
- **aperto** se ogni suo punto è un punto interno (non contiene i punti di frontiera)
- **chiuso** se l'insieme contiene la sua frontiera
- **né aperto né chiuso** se alcuni intervalli sono aperti e altri chiusi

Definiamo anche i concetti di insieme:
- **Limitato**: se esiste un intorno circolare di centro l'origine contiene l'insieme.
- **Connesso**: se presi due punti qualsiasi all'interno dell'insieme posso congiungerli tramite una curva continua.

## Limite 

La definizione di limite utilizzando gli intorni è:

data una funzione $f: A \subset \mathbb{R}^n \longrightarrow \mathbb{R}$ e un punto $P_0$ definito dalle coordinate $(x_0, x_1,...,x_n)$ diremo che 

$$\lim_{P\to P_0} f(x) = L \in \mathbb{R}$$

se e solo se per ogni $\epsilon>0$ esiste $\delta>0$ tale che:

$$0<||P-P_0||<\delta \implies |f(x) - L| < \epsilon$$


**Somma, rapporto, prodotto e composizione di funzioni continue sono funzioni continue**

### Funzioni definite a tratti

Le funzioni definiti a tratti possono non essere continue (nella maggior parte dei casi non sono continue)

Data una funzione

$\begin{cases}
x^2 + y^2 -1 &\text{se } y > 2x \\
-2x-y &\text{se } y \leq 2x
\end{cases}$

le due funzioni sono continue perché somma e composizione di funzioni continue, dobbiamo però vedere cosa accade in $y = 2x$

Per fare ciò costruiamo il sistema in cui poniamo la $y$ uguale al punto che stiamo studiando (questo in base  alla condizione che ci viene data) e poi mettiamo in uguaglianza le due funzioni

$\begin{cases}
 y = 2x \\
-2x-y = x^2 + y^2 -1
\end{cases} \to
\begin{cases}
 y = 2x \\
-2x-2x = x^2 + 4x^2 -1
\end{cases}$

$\to \begin{cases}
 y = 2x \\
-4x = 5x^2 -1
\end{cases}
\to
\begin{cases}
 y = 2x \\
5x^2+4x-1=0
\end{cases}$

dalla seconda equazione otteniamo 

$x_1 = -1, x_2 = \frac{1}{5}$

per cui otteniamo i punti di continuità trovando la relativa $y$ :
$P_1(-1,-2), P_2(\frac{1}{5}, \frac{2}{5})$


### Calcolo dei limiti

Quando non si presentano forme di indecisione il limite si può calcolare semplicemente sostituendo. Se si presentano forme indecisione nascono i problemi.

Bisogna innanzitutto provare delle **sezioni** cioè fissare tutti i valori tendenti con il valore per cui tendono tranne uno e vedere cosa restituisce il limite restante nella funzione. 
Se più sezioni danno risultati diversi allora si può concludere che il limite non esiste.
Se tutte le sezioni provate restituiscono lo stesso valore bisogna dimostrare con il **teorema del confronto** che quel valore è giusto.

Es.

$$\lim_{(x,y)\to(0,0)}\frac{y(x^2+3y^2)}{x^2+5y^2}$$

Si presenta una forma indeterminata $\left[\frac{0}{0}\right]$

proviamo la sezione: $x=0$

$$\lim_{y\to0}\frac{3y^3}{5y^2} \hspace{5mm} \to \hspace{5mm} \lim_{y\to0}\frac{3}{5}y = 0$$

proviamo la sezione: $y=0$

$$\lim_{y\to0}\frac{0}{x^2}  = 0$$

entrambe le sezioni ci ritornano lo stesso valore (nel caso fossero stati diversi allora il limite non sarebbe esistito), utilizziamo il teorema del confronto per dimostrare che il limite è 0.

$0\leq \frac{y(x^2+3y^2)}{x^2+5y^2} \leq?$

$\frac{(x^2+3y^2)}{x^2+5y^2}$ sarà una quantità $<1$ quindi una quantità minore di $1$ moltiplicata per $y$ sarà una quantità minore di $y$

$0\leq \frac{|y|(x^2+3y^2)}{x^2+5y^2} \leq|y|$

otteniamo quindi che $\frac{|y|(x^2+3y^2)}{x^2+5y^2}$ è compreso tra $0$ e la $|y|$ che tende a zero, concludiamo che anche $\frac{|y|(x^2+3y^2)}{x^2+5y^2}$ tende a $0$

#### Disuguaglianze utili per il teorema del confronto

- $2|ab|\leq a^2+b^2$
- $\frac{a^2}{a^2+b^2}\leq 1$
- $e^z\geq 1 + z$
- $\ln z \leq z-1 \hspace{5mm}\forall z >0$
- $|\sin z| \leq |z|$
- $|\sin z| \leq 1$
- $|\cos z| \leq 1$

### Limiti con le coordinate polare

In alcuni casi passare alle coordinate polari può semplificare il calcolo del limite

$\begin{cases} 
x = x_0 + \rho \cos \alpha \\
y = y_0 + \rho \sin \alpha
\end{cases}$

possiamo passare da un limite come

$$\lim_{(x,y)\to(x_0, y_0)}f(x,y)$$

ad un limite

$$\lim_{\rho\to0}f(\rho, \alpha)$$

Esempio:

$$\lim_{(x,y)\to(1, 0)}\frac{y^2\ln(x)}{(x-1)^2 + y^2}$$


Passando alle coordinate polari:

$\begin{cases} 
x = 1 + \rho \cos \alpha \\
y = 0+ \rho \sin \alpha
\end{cases}$

$$\lim_{\rho\to0}\frac{\rho^2\sin^2(\alpha) \ln(1+\rho\cos(\alpha))}{(1+\rho\cos(\alpha) -1)^2 + \rho^2\sin^2(\alpha)}$$

$$\lim_{\rho\to0}\frac{\rho^2\sin^2(\alpha) \ln(1+\rho\cos(\alpha))}{\rho^2\cos^2(\alpha) + \rho^2\sin^2(\alpha)}$$

$$\lim_{\rho\to0}\frac{\rho^2\sin^2\alpha \cdot\ln(1)}{\rho^2}$$

$$\lim_{\rho\to0}\sin^2\alpha \cdot\ln(1) = 0$$


## Derivabilità e differenziabilità

Nelle funzione a 2 variabili la derivata è data da due limiti del rapporto incrementale

il primo rapporto incrementale viene definito **derivata parziale** di $f$ rispetto a $x$ nel punto $(x_0, y_0)$

$$D_x(f(x_0,y_0)) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$$

il secondo rapporto incrementale viene definito **derivata parziale** di $f$ rispetto a $y$ nel punto $(x_0, y_0)$

$$D_y(f(x_0,y_0)) = \lim_{k \to 0} \frac{f(x_0, y_0 + k) - f(x_0, y_0)}{k}$$

Per calcolare le derivate basta pensare che quando si sta facendo la derivata parziale per $x$ , si tratta la $y$ come un valore costante. Analogamente quando si sta facendo la derivata parziale di $y$ si tratta la $x$ come un valore costante

Es.

$D_x[2xy^2+x^3] = 2y^2 + 3x^2$ 
$D_y[2xy^2+x^3] =4xy$

 $D_x[y^3\sin x] = y^3\cos x$ 
$D_y[y^3\sin x] =3y^2 \sin x$

Il vettore che contiene le derivate parziali viene chiamato **vettore gradiente**

$\nabla f(x_0, y_0) = \begin{pmatrix}D_x(f(x_0, y_0))\\D_y(f(x_0, y_0))\end{pmatrix}$

### Funzione derivabile

Una funzione si dice derivabile in un punto se esistono tutte le derivate parziali in quel punto.
Una funzione si dice derivabile nel suo dominio se è derivabile in tutti i punti interni del dominio

Funzioni come radice, valore assoluto, oppure definite a tratti possono non essere derivabili nel loro dominio, nei punti dove può non essere derivabile va fatta la derivata con il limite.

La proprietà "se una funzione è derivabile in un punto allora è anche continua in quel punto" non si estende alle funzioni a più variabili

## Piano tangente a una superficie

Nelle funzioni a due variabili possiamo estendere il significato di derivata che avevamo nelle funzione a singola variabile. Nelle funzioni a singola variabile la derivata rappresentava il coefficiente angolare della retta tangente in un punto. In due variabili fare la derivata parziale rispetto a $x$ rappresenta il coefficiente angolare della retta tangente alla superficie mantenendo costante la $y$ .

Consideriamo la sequente funzione

![enter image description here](https://i.ibb.co/LPhQwdP/superficie.png)

fare la derivata parziale rispetto a $x$ nel punto $P_0$ rappresenta il coefficiente angolare della retta $r$ , possiamo pensarlo come un piano passante per $A$ e $P_0$ e parallelo al piano $Oxz$

![](https://i.ibb.co/sP9sp5T/der-risp-x.png)

fare la derivata parziale rispetto a $y$ nel punto $P_0$ rappresenta il coefficiente angolare della retta $s$ , possiamo pensarlo come un piano passante per $A$ e $P_0$ e parallelo al piano $Oyz$

![](https://i.ibb.co/HNd5WFR/der-risp-y.png)

Il piano che contiene le due rette $r$ e $s$ è il **piano tangente alla superficie nel punto A**

![](https://i.ibb.co/T8x1tT6/piano-super.png)

L'equazione del piano tangente è:

$$z=f(x_0,y_0) + D_x(x_0,y_0)\cdot(x-x_0) + D_y(x_0,y_0)\cdot(y-y_0)$$


Es.

$f(x,y) = 4x^2+y^2-6x$
determiniamo l'equazione del piano tangente nel punto A(2, 3)

Calcoliamo le derivate parziali:

$D_x(2,3) = 8x-6 =8\cdot 2-6 = 10$

$D_y(2,3) = 2y = 2 \cdot 3 = 6$

Andando a sostituire nella formula:

$z = f(2,3) + 10(x-2) + 6(y-3)$

$z = 13 + 10x-20 + 6y-18$

Equazione del piano tangente $z = 10x+ 6y-25$

### Differenziabilità

Se le derivate parziali esistono e sono continue in un intorno di un punto $x_0$ allora la funzione in quel punto si dice **differenziabile**, Se esistono e sono continue tutte le derivate parziali nel dominio allora la funzione è **differenziabile** in ogni punto

$f \in C^1(\text{Dominio}) \implies \text{f differenziabile nel dominio}$

- composizione, prodotto, rapporto combinazione lineare di funzioni differenziabili sono funzioni differenziabili
- Se una funzione è differenziabile in un punto allora è anche continua in quel punto

## Derivate direzionali

Sia $f:A\subseteq \mathbb{R}^n \longrightarrow \mathbb{R}$ , considerando un punto $x_0$ appartenente al dominio e un versore $v$ (vettore di lunghezza 1) Si dice **derivata direzionale** di $f$ rispetto al versore $v$ nel punto $x_0$ il limite:

$$D_v(x_0) = \lim_{t\to0}\frac{f(x_0 + tv) - f(x_0)}{t}$$

Le derivate parziali sono le derivate direzionali lungo i versori (1,0) per la $x$ e (0,1) per la $y$


Possiamo trovare la derivata direzionale con la formula

$$D_v(x_0) = \nabla f(x_0) \cdot v = \sum_{i = 0}^{n} \frac{df}{dx_i} \cdot v_i$$

esempio:

$f(x,y) = y^3 - \sin(xy)$
$x_0 = (\pi, 1)$
$v = (\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2})$

calcolo le derivate parziali

$\frac{df}{dx} = -y\cos(xy)$ calcolata nel punto $(\pi, 1)$ otteniamo $-\cos \pi = 1$

$\frac{df}{dy} = 3y^2 - x\cos(xy)$ calcolata nel punto $(\pi, 1)$ otteniamo $3-\pi\cos\pi = 3 + \pi$

il gradiente vale $\nabla f(\pi, 1) = 
\begin{pmatrix}1 \\
3+\pi
\end{pmatrix}$

moltiplichiamo il gradiente (trasposto, in modo che sia vettore riga) per il versore

$(1, 3+\pi) \cdot \begin{pmatrix}\frac{\sqrt{2}}{2}\\ -\frac{\sqrt{2}}{2} \end{pmatrix}=$

$= 1 \cdot \frac{\sqrt{2}}{2} + (3+\pi)\cdot(-\frac{\sqrt{2}}{2}) = -\sqrt{2} - \frac{\sqrt{2}}{2}\pi$


### Direzione di massima crescita e decrescita

- direzione di massima crescita, cioè la direzione in cui il valore della funzione cresce più velocemente:
	 $$v = \frac{\nabla f(x_0)}{||\nabla f(x_0)||}$$

quindi in due dimensioni il versore sarà:

 $v = (\frac {D_x(f(x_0,y_0))}{||\nabla f(x_0,y_0)||}, \frac {D_y(f(x_0,y_0))}{||\nabla f(x_0,y_0)||})$

- direzione di massima decrescita, cioè la direzione in cui il valore della funzione decresce più velocemente:
	 $$v = -\frac{\nabla f(x_0)}{||\nabla f(x_0)||}$$

Quando $\nabla f(x_0) = 0$ non esiste la direzione di massima crescita/decrescita, in quel punto ci sarà un **punto critico**.


## Estremi di una funzione

Esistono due tipi di estremi:
- estremi liberi: estremi all'interno del dominio
- estremi vincolati: estremi al bordo del dominio

noi ci occuperemo degli estremi liberi

- **punto di massimo assoluto** $x_0$ per $f$ se per ogni punto $x$ del domino si ha che $f(x) \leq f(x_0)$
- **punto di minimo assoluto** $x_0$ per $f$ se per ogni punto $x$ del domino si ha che $f(x) \geq f(x_0)$
- **punto di massimo relativo** $x_0$ per $f$ se ogni punto $x$ appartenente ad un intorno di $x_0$ chiamato $U_{x_0}$ si ha che $f(x) \leq f(x_0)$
- **punto di minimo relativo** $x_0$ per $f$ se ogni punto $x$ appartenente ad un intorno di $x_0$ chiamato $U_{x_0}$ si ha che $f(x) \geq f(x_0)$


**teorema di Wierstrass**

Se $f$ è definita in un dominio chiuso e limitato e $f$ è continua allora ammette un massimo e un minimo assoluti

### Punti critici

In una funzione $f$ si dice punto critico un punto $x_0$ se entrambe le derivate parziali in quel punto sono nulle. Quindi per trovare i punti critici di una funzione bisogna risolvere il sistema che pone le derivate parziali prime a 0

$\begin{cases}
\frac{df}{dx} = 0 \\
\frac{df}{dy} = 0
\end{cases}$

Dal **teorema di Fermat** otteniamo che se abbiamo un punto di massimo o minimo locale $x_0$ e $f$ è derivabile in quel punto allora $x_0$ è un punto critico

non tutti i punti critici sono di massimo o di minimo


## Derivate parziali seconde

Fare le derivate seconde significa derivare le derivate parziali prime, dato che con funzioni in due variabili si hanno due derivate prime parziali otteniamo 4 derivate parziali seconde:

Per la derivata parziale prima rispetto ad $x$ otteniamo le derivate seconde:
- $\frac{d^2f}{dx^2}$ anche scritta come $f^{''}_{xx}$
- $\frac{d^2f}{dydx}$ anche scritta come $f^{''}_{xy}$

Per la derivata parziale prima rispetto ad $y$ otteniamo le derivate seconde:
- $\frac{d^2f}{dxdy}$ anche scritta come $f^{''}_{yx}$
- $\frac{d^2f}{dy^2}$ anche scritta come $f^{''}_{yy}$

Quindi per trovare le derivate seconde dobbiamo prima trovare le due derivate parziali prime e poi derivarle di nuovo rispetto a x e y.

$f^{''}_{xy}$ e  $f^{''}_{yx}$ vengo chiamate derivate miste e secondo il **teorema di Schwarz** esse sono uguali

Se le derivate parziali seconde di una funzione esistono e sono continue nel dominio allora la funzione appartiene alla classe $C^2$


### Matrice Hessiana

Si definisce matrice Hessiana di una funzione la matrice le cui componenti sono le derivate seconde della funzione

$$H_f(x,y) = \begin{pmatrix}
f^{''}_{xx} & f^{''}_{yx}\\
f^{''}_{xy} & f^{''}_{yy} 
\end{pmatrix}$$


### Formula di Taylor (con resto di Peano)

In due dimensioni lo sviluppo di Taylor di secondo ordine in un punto (x_0,y_0) con un incremento $(h,k)$ è:

$f(x_0+h, y_0 +h) = f(x_0,y_0) + f'_x(x_0,y_0)(x-x_0) + f'_y(x_0,y_0)(y-y_0)+\frac{1}{2}\left[f''_{xx}(x_0,y_0)(x-x_0)^2 + 2f''_{xy}(x_0,y_0)(x-x_0)(y-y_0) + f''_{yy}(x_0,y_0)(y-y_0)^2 + o(||h,k||^2)\right]$

in forma più compatta ponendo
$\textbf{x}_1 = (x_0,y_0)^T$
$\textbf{h} = (h,k)^T$

abbiamo

$$f(\textbf{x}_1+\textbf{h}) = f(\textbf{x}_1) + \nabla_f(\textbf{x}_1)^T\textbf{h} + \frac{1}{2}\textbf{h}^TH_f(\textbf{x}_1)\textbf{h} + o(||\textbf{h}||^2)$$


Nei punti critici abbiamo che $\nabla_f = 0$ l'andamento della funzione è governato dalla forma quadratica:

$q(\textbf{h}) = \textbf{h}^T \cdot H_f\cdot\textbf{h}$

la forma quadratica ci serve per determinare la forma della funzione (paraboloide ellittico verso l'alto, verso il basso, iperbolico ecc...)

## Carattere dei punti critici
 
 Grazie all'utilizzo della matrice hessiana possiamo determinare i punti di massimo, minimo e punti di sella.

Quando la matrice hessiana è diagonalizzata (quindi con dei valori diversi da 0 solo nella diagonale principale) possiamo pensare che gli elementi nella diagonale siano degli autovalori e le colonne a cui appartengano siano degli autovettori.

ipotiziamo di essere in due dimensioni, quindi la matrice hessiana è 2x2
chiamiamo gli autovalori $\lambda_1, \lambda_2$

$$H =\begin{bmatrix}
\lambda_1 & 0\\
0 & \lambda_2
\end{bmatrix}$$

Guardando gli autovalori possiamo determinare la forma quadratica:

- $\lambda_1,\lambda_2 > 0$ in questo caso abbiamo
	-  $H$ è matrice hessiana simmetrica **definita positivamente**
	- la forma quadratica è un **paraboloide ellittico rivolto verso l'alto**
	- ha un punto di minimo

- $\lambda_1,\lambda_2 < 0$ in questo caso abbiamo
	-  $H$ è matrice hessiana simmetrica **definita negativamente**
	- la forma quadratica è un **paraboloide ellittico rivolto verso il basso**
	- ha un punto di massimo

- $\lambda_1,\lambda_2$ con segno discorde, in questo caso abbiamo
	-  $H$ è matrice hessiana simmetrica **indefinita**
	- la forma quadratica è un **paraboloide iperbolico**
	- ha un punto di sella


Non è detto che la matrice hessiana sia diagonalizzata e quindi possiamo non avere gli autovalori. A noi però non interessano i valori che assumono $\lambda_1$ e $\lambda_2$ ma **ci interessa il loro segno**.

Per determinare il segno dobbiamo calcolare il **determinante** e possiamo fare il **test dell'hessiana**:

- se $\det(H) < 0$:
	- $\lambda_1,\lambda_2$ con segno discorde
	- $H$ indefinita
	-  forma quadratica paraboloide iperbolico
	- punto critico è un punto di sella
- se $\det(H) > 0$:
	- $\lambda_1,\lambda_2$ sono entrambi positivi oppure entrambi negativi.
	per determinare quale delle due prendiamo in considerazione il valore $\textbf{a}$ nella matrice hessiana
$$\begin{bmatrix}\textbf{a}&b\\b&d\end{bmatrix}$$
	 - Se $a>0$ allora:
		 - $\lambda_1,\lambda_2$ entrambi positivi
		 - $H$ definita positivamente
		 - forma quadratica paraboloide ellittico rivolto verso l'alto
		 - punto critico è un minimo
	- Se $a<0$ allora:
		 - $\lambda_1,\lambda_2$ entrambi negativi
		 - $H$ definita negativamente
		 - forma quadratica paraboloide ellittico rivolto verso il basso
		 - punto critico è un massimo

- se $\det(H) = 0$:
	- $H$ semi-definita
	-  non determinabile con il test dell'hessiana


Esempio:

$f(x,y) = x^2+2y^2-x^2y$

dominio della funzione $\mathbb{R}^2$

calcolo le derivate parziali

$\frac{df}{dx} = 2x-2xy$

$\frac{df}{dy} = 4y-x^2$

trovo i punti critici risolvendo il sistema

$\begin{cases}
2x-2xy = 0\\
4y-x^2 = 0
\end{cases}
\begin{cases}
2x(1-y) = 0\\
4y-x^2 = 0
\end{cases}$

sono possibili 2 casi:

$\begin{cases}
x = 0\\
y = 0
\end{cases}
\hspace{20mm}
\begin{cases}
y = 1\\
4-x^2 = 0
\end{cases}$

ottengo i punti critici
- $P_1=(0,0)$
- $P_2=(2,1)$
- $P_3=(-2,1)$

**importante**: controllare sempre che i punti critici siano interni al dominio della funzione

Calcolo la matrice hessiana

$$H = \begin{bmatrix} 
2-2y & -2x\\
-2x & 4
\end{bmatrix}$$

valuto il punto $P_1$ :

$$H(0,0) = \begin{bmatrix} 
2 & 0\\
0 & 4
\end{bmatrix}$$

definita positivamente, abbiamo un minimo relativo

valuto il punto $P_2$ :

$$H(2,1) = \begin{bmatrix} 
0 & -4\\
-4 & 4
\end{bmatrix}$$

$\det(H) = 0-(-4\cdot (-4)) = -16$
definita negativamente, abbiamo un punto di sella

valuto il punto $P_3$ :

$$H(-2,1) = \begin{bmatrix} 
0 & 4\\
4 & 4
\end{bmatrix}$$

$\det(H) = 0-(4\cdot 4) = -16$
definita negativamente, abbiamo un punto di sella

# Integrali doppi

Gli integrali riguardano il calcolo integrale di funzioni a due variabili.

$$\int\int_{D} f(x,y) dx \, dy$$

## Dominio rettangolare

Consideriamo una funzione definita in un dominio rettangolare

$f:[a,b]\times[c,d]\longrightarrow \mathbb{R}$

dove $[a,b]$ è l'intervallo che riguarda la $x$
mentre $[c,d]$ è l'intervallo che riguarda la $y$

Per calcolare gli integrali definiti possiamo considerare il seguente grafico:

![](https://i.ibb.co/ch9f3H6/grafo-sezione.png)

Definiamo l'integrale come il volume sotteso dal grafico della funzione fino al piano $xy$ .
Calcoliamo il valore dell'integrale utilizzando il **teorema di teorema di riduzione dell'integrale doppio** (detto anche di Fubini-Tonelli):
Per farlo facciamo un integrazione da $a$ a $b$ per ottenere l'area di una sezione $y_0$ (quella colorata).
Facciamo l'integrazione da $c$ a $d$ del risultato ottenuto per fare l'area delle sezioni per tutto il dominio.

$$\int_c^d \left(\int_a^b f(x,y)\,dx\right)dy$$

oppure

$$\int_a^b \left(\int_c^d f(x,y)\,dy\right)dx$$

**Come in una dimensione vale il teorema per cui se la funzione è continua allora è integrabile.**


Esempio:

$\int \int_{[1,3]\times[0,1]}3xy^2 + x^2y \, dx \, dy$

$\int_1^3 \left(\int_0^1 3xy^2 + x^2y \, dy\right) dx$
$\int_1^3 \left[3x\frac{y^3}{3} + x^2\frac{y^2}{2}\right]_0^1 dx$
$\int_1^3 x + \frac{x^2}{2}-0-0 \, dx$
$\left[\frac{x^2}{2} + \frac{x^3}{6}\right]_1^3 = \frac{9}{2} + \frac{27}{6}- \frac{1}{2}-\frac{1}{5} = \frac{25}{3}$


### Funzioni a variabili separate

Se abbiamo un doppio integrale scritto come prodotto di due funzioni dipendenti da una unica variabile, allora il doppio integrale è dato dal prodotto dei due integrali singoli

$$\int_a^b \left(\int_c^dg(x) \cdot h(y) \,dy\right)dx$$

diventa:

$$\left(\int_a^bg(x)\, dx \right)\cdot \left(\int_c^dh(y)\, dy \right)$$


## Domini non rettangolari (Domini semplici)

Se dobbiamo calcolare l'integrale in un dominio semplice (cioè non rettangolare) si distinguono 2 casi:

- Dominio $E\subset \mathbb{R}^2$ si dice **y-semplice** se esistono due funzioni $g_1, g_2$ tali che
	$$E = \Bigl\{(x,y)\in\mathbb{R}^2: x \in [a,b], \,g_1(x)\leq y\leq g_2(x)\Bigr\}$$
	
$$\int_a^b \left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)dx$$

- Dominio $E\subset \mathbb{R}^2$ si dice **x-semplice** se esistono due funzioni $h_1, h_2$ tali che
	$$E = \Bigl\{(x,y)\in\mathbb{R}^2: y \in [c,d], \,h_1(x)\leq x\leq h_2(x)\Bigr\}$$
	
$$\int_c^d \left(\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\right)dy$$

In generale $E$ è semplice se è x-semplice e y-semplice
$E$ si dice **regolare** se è unione di un numero finito di insiemi semplici

Esempio:

$f(x,y) = xy$
$E = \Bigl\{(x,y)\in\mathbb{R}^2: 0\leq y\leq 2x-x^2\Bigr\}$

Abbiamo i valori in cui si muove la $y$ dobbiamo trovare quelli della $x$

$y=2x-x^2$ è una parabola rivolta verso il basso
troviamo le intersezioni con l'asse x:
$0 = 2x-x^2$
$x(2-x) = 0$

Intersezioni con l'asse x: $x = 0,x=2$

troviamo il vertice

$V_x= \frac{-2}{2\cdot(-1)} = 1$
$V_y= 2\cdot 1 - 1^2 = 1$

V(1,1)

Disegniamo il dominio

![](https://i.ibb.co/Zz8GJk3/dominio.png)

$$\int_0^2 \left(\int_{0}^{2x-x^2} xy\,dy\right)dx$$

$$\int_0^2\left[ x\frac{y^2}{2} \right]_0^{2x-x^2}dx$$

$$\int_0^2 x\frac{(2x-x^2)^2}{2}-0 \, dx$$

$$\int_0^2 \frac{x(4x^2+x^4-4x^3)}{2}-0 \, dx$$

$$\int_0^2 2x^3+\frac{x^5}{2}-2x^4 \, dx$$

$$\left[ 2\frac{x^4}{4}+\frac{x^6}{12}-\frac{2x^5}{5} \right]_0^2 = 8+\frac{64}{12}- \frac{64}{5}=\frac{8}{15}$$

## Cambio di variabili

In alcuni casi è conveniente fare un cambio di variabili per passare da un dominio articolato ad un dominio in cui si può integrare più facilmente.

Per fare ciò utilizziamo una **trasformazione di coordinate**

$T: D' \rightarrow D$ dove

$\begin{cases}
x = g(u,v)\\
y = h(u,v)
\end{cases}$

## Matrice Jacobiana

Si dice matrice jacobiana la matrice delle derivate parziali della trasformazione $T$

$$J_T(u,v) = \begin{pmatrix}
\frac{dg}{du}&\frac{dg}{dv}\\
\frac{dh}{du}& \frac{dh}{dv}
\end{pmatrix}$$

una trasformazione $T$ Si dice **Diffeomorfismo** se $T$ è differenziabile e se T è invertibile.
In un altro modo è possibile dire che $T$ è un Diffeomorfismo se $T\in C^1(D')$ e $\det(J_T(u,v)) = 0$

I punti in cui $\det(J_T(u,v)) = 0$ sono chiamati **punti critici** della trasformazione

### Formula di cambiamento di variabili

In generale la formula per il cambio di variabili è:

$$\int\int_Df(x,y)\,dx\,dy = \int\int_{D'}f(g(u,v),h(u,v))\cdot|\det(J_T)|\,du\,dv$$

## Trasfomazione in coordinate polari

Noi ci concentriamo nel caso in cui sostituiamo con una rappresentazione con coordinate polari

$\begin{cases}
x =  g(\rho,\theta) = \rho \cos \theta\\
y = h(\rho,\theta) = \rho \sin\theta
\end{cases}$

(ricordiamo che $\rho$ rappresenta la distanza della coordinata rispetto all'origine, mentre $\theta$ è un angolo che si forma tra l'asse x  positivo e la retta passante per $\rho$ e l'origine)

generalmente $\rho > 0$ mentre $0\leq\theta < 2\pi$

La matrice Jacobiana è:

$$J_T(u,v) = \begin{pmatrix}
\cos\theta&-\rho\sin\theta\\
\sin\theta& \rho\cos\theta
\end{pmatrix}$$



Prediamo in considerazione l'area compresa tra questi due rami di circonferenza
![](https://i.ibb.co/y54pkwy/circonferenze.png)

Non si tratta di un dominio rettangolare e nemmeno semplice

Passando alla rappresentazione per coordinate polari

$\begin{cases}
x =  \rho \cos \theta\\
y =  \rho \sin\theta
\end{cases}$

![](https://i.ibb.co/7bhMM6z/circonferenze2.png)

notiamo che:

$$2\leq\rho\leq3$$

$$0\leq\theta\leq\frac{\pi}{2}$$

riusciamo ad ottenere un dominio rettangolare

![](https://i.ibb.co/60nVs1L/dominio2.png)

dove l'asse x è $\rho$ mentre l'asse y è $\theta$

### Formula di cambiamento di variabili (coordinate polari)

nel caso di cambio di variabili a coordinate polari:

$$\int\int_Df(x,y)\,dx\,dy = \int\int_{D'}f(\rho\cos\theta,\rho\sin\theta)\cdot\rho\,d\rho\,d\theta$$


## Baricentro

Il baricentro è un punto del piano di coordinate $(x_C, y_C)$ che rappresenta la media aritmetica dei punti di del dominio.

$$x_C = \frac{\int\int_Dx\, dx\,dy}{\int\int_D1\,dx\,dy} \hspace{10mm} y_C = \frac{\int\int_Dy\, dx\,dy}{\int\int_D1\,dx\,dy}$$

Non è detto che il baricentro sia all'interno del dominio


