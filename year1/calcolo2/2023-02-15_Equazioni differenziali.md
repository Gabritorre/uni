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
1. Quelle di tipo $y'=f(x)$
2. Le equazioni lineari di primo ordine a variabili separabili $y' = g(x) \cdot h(y)$
3. Le equazioni lineari di primo ordine (omogenee e complete) $y' = a(x) \cdot y + b(x)$
4. Le equazioni lineari di secondo ordine $ay'' + by' + c = g(x)$

### Equazioni tipo $y' = f(x)$

Per risolvere questo tipo di equazioni è sufficiente integrare ambo i membri dopo aver isolato le $x$ dalle $y$.

Es.

$y'-2\cos x = 0$

$y'= 2\cos x \longrightarrow \int y' \,dx = \int 2\cos (x) \, dx$

ottenendo così l'integrale generale:

$y = 2 \sin x + c$


###  Le equazioni lineari di primo ordine a variabili separabili

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

y e y' devono essere di primo grado, altrimenti l'equazione non è lineare

- Se $b(x) = 0$  l'equazione è detta **omogenea**.
- Se $b(x) \neq 0$  l'equazione è detta **completa**.

#### formula risolutiva per le omogenee

$$y = ke^{\int a(x)\,dx}$$

#### formula risolutiva per le complete

$$y = ke^{\int a(x)\,dx}\left[\int b(x)\cdot e^{-\int a(x)\,dx}dx+c\right]$$

## Problema di Cauchy

Si parla di problema di Cauchy quando viene chiesto di trovare una soluzione specifica specificando un punto $(x_0, y_0)$ . Un problema di Cauchy avra la seguente forma:

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




