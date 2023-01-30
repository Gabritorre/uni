# Rette e piani

La retta di equazione generica è $ax + by = c$

Se $c = 0$ allora la retta passa per l'origine.

L'equazione va scritta come prodotto di vettori:

$[a,b] \cdot [x,y] = 0$

Questo descrive l'insieme dei vettori $[x,y]$ perpendicolari al vettore $[a,b]$

## Trovare vettore passante per un punto e parallela ad una retta

Consideriamo una equazione parametrica della retta passante per un punto $P(x_0,y_0)$ e di direzione parallela a quella di un vettore $\overrightarrow{U}[u_1,u_2]$

la retta è data da:

$$r: \begin{cases} x = x_0+u_1t\\
y = y_0+u_2t\end{cases}$$

dove $t \in \mathbb{R}$

Possiamo scriverlo come $X = P+At$ (punto + vettore t)

Es.

Retta passante per $P(0,0)$ e parallela alla retta $3x+2y=0$

Scriviamo l'equazione come prodotto di vettori:

$[3,2] \cdot [x,y] = 0$ il nostro obiettivo è trovare il vettore $[x,y]$

Trovo un vettore parallelo alla retta (basta trovare un punto che appartenga alla retta): $[2,-3]$

infatti sostituendo $x$ con $2$ e $y$ con $-3$ si ottiene $0$ .

$$r: \begin{cases} x = 0 + 2t\\
y = 0 + (-3)t\end{cases}$$

Quindi $y =-3t$ e $x=2t$ al variare di $t$

Il risultato sarà il vettore: $[2t,-3t]$

Se $t = \frac{1}{2}$

$x = 1$ e $y = -\frac{3}{2}$

$[1,-\frac{3}{2}]$


## Trovare un vettore parallelo ad una retta retta non passante per l'origine

Nell'equazione generica $ax+by=c$ per non passare per l'origine dobbiamo avere che $c \neq 0$

per trovare $r$ bisogna mettere in relazione l'equazione **non** passante per l'origine con quella passante per l'origine:

Troviamo il vettore per cui sostituendo $x$ e $y$ otteniamo $0$ :

$$Q [q_0, q_1] \longrightarrow aq_0 + bq_1 = 0$$

Troviamo il vettore per cui sostituendo $x$ e $y$ otteniamo $c$ :

$$P [p_0, p_1] \longrightarrow ap_0 + bp_1 = c$$


$$r: \begin{cases} x = p_0 + q_0t\\
y = p_1 + q_1t\end{cases}$$


Es.

$3x+2y=5$

Scriviamo come prodotto di vettori:

$[3,2] \cdot [x,y] = 5$ Dobbiamo trovare il vettore $[x,y]$

Troviamo Q:

$Q [2,-3] \longrightarrow 3\cdot 2 + 2 \cdot (-3) = 0$

Troviamo P:

$P [1,1] \longrightarrow 3\cdot 1 + 2 \cdot 1 = 5$

Quindi:

$$r: \begin{cases} x = 1 + 2t\\
y = 1 + (-3)t\end{cases}$$

Il nostro vettore sarà: $[1+2t, 1-3t]$

Sostituendo nell'equazione originale otteniamo:

$3 (1+2t) + 2 (1-3t) = 5$

## Trovare l'eq. della retta passante per un punto $P$ e parallela alla retta di un vettore metodo 1

Avendo il vettore $A=[3,2]$ e il punto $P=(1,-1)$

l'equazione generica della retta è $ax + by = c$

Per prima cosa troviamo la retta passante per l'origine e per $A$

- per passare per l'origine allora $ax + by$ deve essere $0$
- per passare per $A$ allora $x$ e $y$ devono essere le coordinate di $A$

Quindi:

$3a + 2b = 0$

Ora devo scegliere dei valori di $a$ e $b$ che rendano l'equazione uguale a $0$:

$a = 2$ e $b = -3$

Ora che abbiamo ottenuto i valori di $a$ e $b$ dobbiamo far passare la retta per il punto $P$, quindi la nostra equazione $2x-3y = c$ per poter farla passare per il punto (1,-1) dobbiamo sostituire le coordinate del punto nell'equazione:

$x = 1$ e $y = -1$

$2 \cdot (1) - 3 \cdot (-1) = c$

Quindi $c = 5$

L'equazione risultate sarà $2x-3y = 5$

## Trovare l'eq. della retta passante per un punto $P$ e parallela alla retta di un vettore metodo 2 (più facile)

Avendo il vettore $A=[-1,2]$ e il punto $P=(2,3)$

Troviamo l'equazione parametrica, mettendo sulla prima colonna le coordinate del punto e nella seconda il vettore:

$$r: \begin{cases} x = 2+ (-1)t\\
y = 3 + 2t\end{cases}$$

Troviamo il valore di t:

$$\begin{cases} t = 2-x\\
y = 3+2(2-x)\end{cases}$$

Quindi abbiamo che:

$y = 3 + 4 - 2x \implies 2x + y = 7$


## Equazione della retta passante per due punti (metodo 1)

Avendo due punti $A = (2,2)$ e $B = (-2,6)$ dobbiamo trovare la retta che passa per loro due, trovando prima il vettore passante per l'origine e poi quello che passante per i due punti.

La retta che attraversa i due punti contiene il vettore applicato $\overrightarrow{AB}$ , che possiamo trovare facendo $B-A$ :

$\overrightarrow{AB} =  B - A = [-2-2, 6-2] = [-4, 4]$

Dato che il vettore applicato appartiene ad una retta possiamo scriverlo come:

$-4a + 4b = 0$

troviamo $a$ e $b$ tale che $-4a + 4b$ valga $0$ . quindi:

$a = 1$ e $b = 1$

Ora che abbiamo ottenuto i valori di $a$ e $b$ dobbiamo far passare la retta per il punto $A$ oppure per il punto $B$, quindi dobbiamo sostituire le coordinate di uno dei due punti nell'equazione $1x+1y = c$ .

Usiamo il punto $B$ :

$1 \cdot (-2) + 1 \cdot (6) = c$

quindi abbiamo $c = 4$

L'equazione della retta risultante è $1x+1y = 4 \longrightarrow x+y = 4$

## Equazione della retta passante per due punti (metodo 2, più semplice)

Avendo due punti $A = (1,2)$ e $B = (-1,3)$ dobbiamo trovare la retta che passa per loro due, trovando prima la retta parametrica e poi convertendola in cartesiana.

Troviamo il vettore applicato $\overrightarrow{AB}$ :

$\overrightarrow{AB} =  B - A = [-1-1, 3-2] = [-2, 1]$

Nell equazione parametrica si mette nella prima colonna uno dei due punti a scelta (il risultato non cambia), mentre nella seconda colonna si usa il vettore applicato:

Qui utilizzo il punto $A$

$$r: \begin{cases} x = 1+ (-2)t\\
y = 2 + 1t\end{cases}$$

Ricaviamo il valore di t:

$$\begin{cases} x = 1 - 2(y-2)\\
t = y - 2\end{cases}$$

Quindi abbiamo che:

$x = 1-2y+4 \implies x+2y = 5$

## Trovare un punto appartenente ad una retta

Avendo la retta $y = 2x + 5$

Poniamo una equazione parametrica dove $x = t$ e quindi al variare di t è possibile ottenere tutti i punti (infiniti) della retta.

$$r: \begin{cases} x = t\\
y = 2x+5\end{cases}$$

se $t = 0$ allora $y = 0x + 5 \implies y = 5$

Quindi un punto della retta è $(0,5)$ .

# Rette e piani in tre dimensioni

L'equazione cartesiane generica del piano è: $ax + by + cz = k$

in cui $(a, b, c)$ rappresenta un vettore.

- Equazione parametrica della retta passente per un punto $P(x_0, y_0, z_0)$ e parallela al vettore $\overrightarrow{U} = [u_1, u_2, u_3]$ .

	L'equazione parametrica sarà formata da:

$$r: \begin{cases} x = x_0 + u_1t \\
y = y_0 + u_2t  & \forall t \in \mathbb{R} \\
z = z_0 + u_3t\end{cases} $$

- Equazione cartesiana di una retta è data dall'intersezione di due piani

$$r: \begin{cases} a_1x + b_1y + c_1z = k_1 \\
 a_2x + b_2y + c_2z = k_2  \end{cases} $$

- Se la retta deve passare per un punto $P(x_0, y_0, z_0)$ ed essere parallela a 2 vettori $\overrightarrow{U} = [u_1, u_2, u_3]$ e $\overrightarrow{V} = [v_1, v_2, v_3]$ allora:

$$\pi: \begin{cases} x = x_0 + u_1t + v_1s \\
y = y_0 + u_2t  + v_2s & \forall t,s \in \mathbb{R} \\
z = z_0 + u_3t + v_3s \end{cases} $$

## Piani paralleli e perpendicolari

Due piani:

- $ax + by + cz + d = 0$
- $a'x + b'y + c'z + d' = 0$

sono **paralleli** se: 

$$\frac{a}{a'} = \frac{b}{b'} =\frac{c}{c'}$$ 

mentre sono **perpendicolari** se:

$$a\cdot a' + b \cdot b' + c \cdot c' = 0$$

## Trovare i punti appartenenti ad un piano che passa per l'origine

Avendo un piano passante per l'origine di equazione $3x+2y+z = 0$

(ponendo l'equazione uguale a 0 significa che passa per l'origine $O(0,0,0)$ )

Per ottenere l'equazione parametrica ho bisogno di due punti appartenenti al piano passante per l'origine

- $P(1,-1,-1)$

	infatti sostituendo le coordinate nell'equazione ottengo $0$

	$3\cdot 1 + 2\cdot (-1) + (-1) = 0$

- $Q(-1,0,3)$

	infatti sostituendo le coordinate nell'equazione ottengo $0$

	$3\cdot (-1) + 2\cdot 0 + 3 = 0$

Possiamo scrivere l'equazione parametrica mettendo:

- Nella prima colonna le coordinate del punto iniziale $O$
- Nella seconda colonna le coordinate del punto $P$
- Nella terza colonna le coordinate del punto $Q$

$$\pi: \begin{cases} x = 0 + 1\cdot t +(-1) \cdot r  \\
y = 0 + (-1) \cdot t  + 0 \cdot r \\
z =0 + (-1) \cdot t + 3 \cdot r  \end{cases}
\rightarrow
\begin{cases} x = t-r \\
y = -t \\
z =-t+3r \end{cases}$$

Questo sistema rappresenta l'insieme di tutti i punti appartenenti al piano.

infatti andando a sostituire nell'equazione iniziale trovo che

$3t-3r-2t-t+3r = 0 \longrightarrow 0=0$

Per un **piano che non passa per l'origine** allora bisogna trovare un terzo punto e le sue coordinate vanno messe al posto degli $0$ nell'equazione parametrica.

## Piano passante per tre punti non allineati

Avendo tre punti:

$P(1,1,1)$

$Q(1,2,1)$

$R(5,0,7)$

1. trovo due vettore applicati: $\overrightarrow{PQ}$ e $\overrightarrow{PR}$
2. Li riporto all'origine: $Q-P$ e $R-P$
3. Calcolo il piano passante per l'origine e che contiene i due vettori:
$t(Q-P) + r(R-P)$

Quindi:

$Q-P = (0,1,0)$

$R-P = (4,-1,6)$

Faccio l'equazione parametrica mettendo sulla prima colonna il punto con i numeri più semplici, sulla seconda $Q-P$ e sulla terza $R-P$.

$$\pi: \begin{cases} x = 1 + 0 \cdot t +4 \cdot r  \\
y = 1 + 1 \cdot t  + (-1) \cdot r  \\
z = 1 + 0 \cdot t + 6 \cdot r  \end{cases}
\begin{cases} x = 1 +  +4r  \\
y = 1 +  t  -r \\
z = 1 + 6 r  \end{cases}$$

5. Mi ricavo $r$ da una delle righe del sistema
$r = \frac{(x-1)}{4}$

e la sostituisco in un'altra riga:

$$z = 1+\frac{\cancel{6}(x-1)}{ \cancel{4}}$$

$$2z = 2+3x-3$$

$$2z -3x = -1$$

## Trovare il piano passante per un punto e parallelo ad un altro piano

per trovare l'equazione di un piano passante per un punto $P(1,-1,2)$ e parallelo al piano $\pi = x-2y+z-3=0$

- trovo il vettore perpendicolare al piano $\pi$ che è dato dai coefficienti di $x, y, z$: 
	il vettore sarà $n(1,-2,1)$
- dato che per essere paralleli due piani devo avere anche il vettore perpendicolare parallelo possiamo assumere che anche il vettore perpendicolare del piano che dobbiamo trovare sia $n(1,-2,1)$ .
- per ora abbiamo che il piano da trovare è $1x - 2y + 1z + d = 0$
- per trovare il valore di $d$ sostituisco le coordinate del punto al posto di $x,y,z$ :
	$1\cdot 1 -2 \cdot (-1) + 1 \cdot 2 + d = 0$ ottenendo che $d=-5$

$$S: x - 2y + z - 5 = 0$$

# Fasci di rette

I fasci di rette propri sono tutte le rette del piano che passano per un punto $c$ del piano. Si può dire fascio di rette di centro $c$.

**combinazione lineare**: espressine in cui compaiono o somme di vettori o moltiplicazioni di vettori per uno scalare o entrambi.

Avendo due rette distinte:

$ax + by + c = 0$

$dx + ey + f = 0$

possiamo rappresentare tutte le rette (tranne $dx+ey+f$ ) passanti per un punto $c = (x_0, y_0)$ con la formula:

$$(ax+by+c) + k\cdot (dx+ey+f)$$

## Troviamo l'eq. di una retta passante per 2 punti utilizzando i fasci di rette

$P=(1,1)$

$Q=(2,5)$

Prendiamo in considerazione uno dei due punti, ad esempio $P$

Troviamo due rette che passano per $P=(1,1)$:

- $y=x \longrightarrow y-x = 0$
- $x=1 \longrightarrow x-1 = 0$

Utilizzando la formula:

$(y - x) + k (x - 1) = 0$

Sostituiamo le coordinate del punto $Q$ per ottenere il valore di $k$

$(5 - 2) + k (2 - 1) = 0 \longrightarrow k=-3$

Quindi:

$(y - x) -3 (x - 1) = 0 \longrightarrow y-4x+3=0$

## Piano passante per un punto e perpendicolare ad un vettore

Avendo un punto $P = (x_0, y_0, z_0)$ ed un vettore $\overrightarrow{V} = (a,b,c)$

Il piano si trova con:

$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$


Es.
Avendo un punto $P = (1,0,2)$ ed un vettore $\overrightarrow{V} = (1,1,1)$

$$1(x - 1) + 1(y - 0) + 1(z - 2) = 0$$

Quindi il piano risultate avrà equazione: $x + y - z - 3 = 0$
