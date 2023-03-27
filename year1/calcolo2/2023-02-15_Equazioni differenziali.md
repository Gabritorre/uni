# Equazioni differenziali ordinarie

Le equazioni differenziali ordinarie si presentano nella forma:

$$F(x;y;y';...;y^{(n)}) = 0$$

Una equazione differenziale è una equazione che ha per incognita una funzione $y$ nella variabile $x$,  e in che stabilisce una relazione fra $x, y$ e almeno una delle derivate di $y$.

l'**ordine** dell'equazione differenziale è dato dal massimo ordine di derivata della $y$.

In generale le soluzione di un'equazione differenziale sono infinite:
- l'insime delle infinite soluzione viene detto **integrale generale**
- una soluzione specifica, fissando un valore a $c$ viene detto **integale o soluzione particolare**

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

Il caso $y = 0$ spesso può essere già compreso nella soluzione generale perché il valore $c$ può azzerare il membro di destra.

In questo caso però, nessun valore di $c$ ci restituisce $y = 0$ quindi va aggiunto alle soluzioni:

$S: y = -\frac{1}{2x^2+c} \lor y = 0$

###  Le equazioni lineari omogenee

Questo tipo di equazioni sono scritte nella forma

$$y' = a(x)\cdot y + b(x)$$

Per essere lineare l'equazione deve avere $y$ e $y'$ al primo grado e non devono essere moltiplicate tra loro.

- Se $b(x) = 0$  l'equazione è detta **omogenea**.
- Se $b(x) \neq 0$  l'equazione è detta **completa**.

#### formula risolutiva per le omogenee

$$y = ke^{\int a(x)\,dx}$$

#### formula risolutiva per le complete

$$y = e^{\int a(x)\,dx}\left[\int b(x)\cdot e^{-\int a(x)\,dx}dx+c\right]$$

###  Le equazioni lineari del secondo ordine a coefficienti costanti omogenee 

Le equzioni lineari del socondo ordine si presentano come:

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
	-  $\Delta > 0$: si hanno due soluzioni distinte ($z_1, z_2$)
		$$y = c_1e^{z_1x} + c_2e^{z_2x}$$
	- $\Delta = 0$: si hanno due soluzioni coincidenti ($z_1 = z_2$)
		$$y = e^{z_1x}(c_1 + c_2x)$$
	- $\Delta < 0$: si hanno due soluzioni complesse coniugate (uguali ma con la parte immaginaria cambiata di segno) ($z_{1, 2} = \alpha \pm i\beta$)
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

la soluzione a queste è quazioni è data dalla somma tra la **soluzione dell'equazione omogenea associata** e la **soluzione particolare**

####  1 Caso con a = 0, b = 0

$$y'' = g(x)$$

per risolvere questo tipo di equazione è sufficiente **integrare due volte** g(x)

ES.

$y'' = 12x^2 + 4$

integriamo una volta:

$y' = 4x^3 + 4x + c_1$

integro una seconda volta

$y = x^4 + 2x^2 + c_1x + c_2$

#### 2 Caso b $\neq$ 0, c $= 0$

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

ovviamente per trovare l'integrale generale bisogna sommare la soluzione particolare trovata per la soluzione dell'equazione omogenea associata.

#### 3 Caso b $\neq$ 0, c $\neq 0$

In questo caso la soluzione particolare deve avere lo stesso grado di $g(x)$, e va risolta utilizzando il metodo della somiglianza.

ES.

$y'' - 2y' - 3y = 3x + 7$

la nostra soluzione particolare sarà di primo grado proprio come $g(x)$ e avrà una forma $ax + b$

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

ovviamente per trovare l'integrale generale bisogna sommare la soluzione particolare trovata per la soluzione dell'equazione omogenea associata.

#### 4 Caso con $g(x) = s(x)e^{\alpha x}$

$$y'' + ay' + by=s(x)e^{\alpha x}$$

In questo caso dobbiamo calcolare l'equazione omogenea associata come prima cosa, questo perché la soluzione particolare dipende da essa:

- se $\alpha$ **non** è nella soluzione dell'omogenea allora la soluzione ha forma $y_0 = p(x)e^{\alpha x}$
- se $\alpha$ **è solo una delle soluzioni distinte** dell'omogenea allora la soluzione ha forma $y_0 = xp(x)e^{\alpha x}$
- se $\alpha$ **è uguale alle soluzioni coincidenti** dell'omogenea allora la soluzione ha forma $y_0 = x^2p(x)e^{\alpha x}$

dove $p(x)$ è un polinomio generico dello stesso grado di $s(x)$

(si prosegue come nel caso 3)

Si calcola la derivata prima e seconda del polinomio generico e si sostituiscono nell'equazione originale.
Si risolve il sistema relazionando i membri con la x e i termini noti e si trovano $a,b$ che vanno sostituiti in $y_0$ trovando così la soluzione particolare.
Infine va sommato alla soluzione dell'omogenea.

#### 5 Caso con $g(x) = e^{\alpha x} (k_1 \cos(\beta x) + k_2 \sin(\beta x))$

Calcoliamo l'equazione omogenea associata come prima cosa, questo perché la soluzione particolare dipende da essa:

- se $\alpha + i\beta$ è nella soluzione dell'omogenea allora la soluzione ha forma $y_0 = e^{\alpha x}(a \cos(\beta x) + b \sin(\beta x))$
- se $\alpha + i\beta$ è nella soluzione omogenea allora la soluzione particolare ha forma $y_0 = xe^{\alpha x}(a 
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

Quindi la soluzioine al problema di Cauchy è:

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
