
# Numeri complessi
I numeri complessi sono un insieme indicato con la lettera $\mathbb{C}$ che comprendono l'insieme dei reali.

I numeri complessi sono un *campo numerico*, cioè sono limitati alle quattro operazioni aritmetiche.

I numeri complessi possiedono una **unità immaginaria** assieme a dei numeri reali:

$$a+bi \text{ con } a,b \in \mathbb{R}$$

l'unità immaginaria $i$ significa $\sqrt{-1}$:

$$i = \sqrt{-1}$$

$$i^2 = -1$$

$$i^{-1} = -i$$

Un numero complesso $z$ può essere rappresentato in un grafico chiamato *piano di Gauss* che ha la componente reale al posto delle x (ascisse) e la componente immaginaria al posto delle y (ordinate).

$z = 3+2i$

![](https://i.ibb.co/S6vNjHg/gauss.png)

## Operazioni aritmetiche

### Somma

Nella somma si sommano le parti reali con le parti reali e le parti immaginarie con le parti immaginarie.

$z = a+bi$

$w = c+di$

$$z+w=(a+bi) + (c+di) = (a+c) + (bi + di) = (a+c) + i(b+d)$$

Es.
$z = 3+4i$

$w = 2-4i$

$z + w = 5+0i = 5$

### Prodotto

Nel prodotto si moltiplicano tutte parti tra di loro.

$z = a+bi$

$w = c+di$

$$z \cdot w = ac + bci + adi + bidi =$$

$$= ac + bci + adi + bdi^2 =$$

$$\text{dato che } i^2 = -1$$

$$= ac + bci + adi - bd =$$

$$= ac -bd + i(bc + ad)$$

Es.
$z = 7+i$

$w = 4-i$

$$z \cdot w = 28 - 7i + 4i - i^2 =$$

$$= 28 - 3i +1 =$$

$$= 29 - 3i$$

### Coniugato

Avendo $z = a+bi$

Il coniugato di z cambia il segno della parte immaginaria e si indica con $\overline{z}$

$\overline{z} = a-bi$

Se non esiste la parte immaginaria ( $b=0$ ) allora $z=\overline{z}$.

$$z \cdot \overline{z} = a^2+b^2$$


### Modulo

Il modulo rappresenta una lunghezza: cioè la distanza tra l'origine degli assi e il valore del numero complesso nel *piano di cartesiano*, viene rappresentato $\lvert z \rvert$

Un numero complesso può essere rappresentato nel piano cartesiano perché:

$$a+bi = (a,b)$$

$$\lvert z \rvert = \sqrt{a^2 + b^2}$$

$$\lvert z \rvert^2 = a^2 + b^2$$

### Inverso

$$z^{-1} = \frac{1}{z} = \frac{\overline{z}}{\lvert z \rvert^2}$$

#### trovare l'inverso di un numero

L'inverso è quel numero scritto come $a +bi$ tale che il numero di partenza moltiplicato per l'inverso restituisce 1.

Se w = $1+2i$ abbiamo che $(1+2i) \cdot (a+bi) = 1$

Troviamo il valore di $a+bi$:

1. Svolgiamo la moltiplicazione:

	$$(1+2i) \cdot (a+bi) = a-2b+i \cdot (b+2a)$$

2. Separiamo in un sistema la parte reale da quella immaginaria:

$$\begin{cases} a-2b=1 \\ b+2a = 0 \end{cases} = \begin{cases}a = \frac{1}{5} \\ b = -\frac{2}{5} \end{cases}$$

La parte reale va messa uguale ad 1 e quella immaginaria va messa uguale a 0, perché il risultato deve essere $1+0i = 1$

Quindi $(1+2i) \cdot (\frac{1}{5} -\frac{2}{5}i) = 1$

È possibile utilizzare anche la formula $w^{-1} = \frac{\overline{w}}{|w|^2}$

- $w = 1+2i$
- $\overline{w} = 1-2i$
- $|w|^2 = 1^2 + 2^2 = 5$

Utilizzando la formula abbiamo che $w^{-1} = \frac{1-2b}{5} = \frac{1}{5}-\frac{2}{5}i$

## Coordinate Polari

Un numero complesso $z = a+bi$ che rappresentato in un piano cartesiano si vede come: 

![](https://i.ibb.co/S6vNjHg/gauss.png)

La diagonale che va dall'origine degli assi fino al punto genera un angolo $\alpha$ che ci permette di rappresentare il punto anche attraverso una circonferenza, utilizzando il modulo (cioè la lunghezza della diagonale) e il coseno e seno dell'angolo.

![](https://i.ibb.co/6rhGMxz/cerchiobello.png)

È possibile quindi ottenere $z$ con la seguente formula:

$$z = |z| \cdot (\cos \alpha  + i \cdot \sin \alpha)$$

inoltre con $z=a+bi$ :

$$|z| = r = \sqrt{a^2+b^2}$$

$$a = r \cdot \cos(\alpha)$$

$$b = r \cdot \sin(\alpha)$$

### Moltiplicazione di due numeri con coordinate polari

$z = |z| (\cos \alpha + i \sin \alpha)$

$w= |w| (\cos \beta + i \sin \beta)$

$$z \cdot w = |z \cdot w| \cdot (\cos(\alpha + \beta) + i \sin(\alpha + \beta))$$

### Da forma standard a forma trigonometrica (polare)

Avendo $z = 1-i$

Quindi abbiamo che:

$a = 1$

$b = -1$

1. troviamo la lunghezza della diagonale (o raggio): $r = \sqrt{1^2 + (-1)^2} = \sqrt{2}$
2. Ora troviamo l'angolo:

$\cos \alpha = \frac{1}{\sqrt{2}}$ razionalizzando: $\frac{\sqrt{2}}{2}$. Quindi risolvendo $\cos(\alpha) = \frac{\sqrt{2}}{2}$ otteniamo $\pm 45°$ cioè $\pm\frac{\pi}{4}$ .

$\sin \alpha = - \frac{1}{\sqrt{2}}$ razionalizzando: $-\frac{\sqrt{2}}{2}$. Quindi risolvendo $\sin(\alpha) = - \frac{\sqrt{2}}{2}$ otteniamo $-45°$ o $225°$ cioè $- \frac{\pi}{4}$ o $\frac{5}{4}\pi$ .

Il valore di $\alpha$ che combacia sia per il seno che per il coseno è $-\frac{\pi}{4}$.

Quindi abbiamo $z$ scritto in forma polare come $z = \sqrt{2}(\cos(-\frac{\pi}{4}) + i \sin(-\frac{\pi}{4}))$

### Da forma polare a forma standard

Avendo $z = 8 (\cos (-\frac{\pi}{3}) + i \sin (-\frac{\pi}{3}))$

$\cos(-\frac{\pi}{3}) = \frac{1}{2}$

$\sin(-\frac{\pi}{3}) = -\frac{\sqrt{3}}{2}$

$a = 8 \cdot \frac{1}{2} = 4$

$b = 8 \cdot (-\frac{\sqrt{3}}{2}) = 4\sqrt{3}$

Quindi $z = 4 + i4\sqrt{3}$


## Forma esponenziale

$e^{i \alpha} = \cos \alpha + i \sin \alpha$

Quindi è possibile scrivere z come:

$$z = |z| \cdot e^{i\alpha}$$

$$\text {dato che il raggio è ugule al modulo di z, diventa}$$

$$z = r \cdot e^{i\alpha}$$

### moltiplicazione in forma esponenziale

$z_1 = r_1e^{i \alpha}$

$w = r_2e^{i \beta}$

$$z \cdot w = r_1 \cdot r_2 \cdot e^{i( \alpha + \beta)}$$

### Da forma trigonometrica ad esponenziale

$z = -1-i$

$r = \sqrt{2}$

$\cos \alpha = \frac{a}{r} = -\frac{1}{\sqrt{2}}$

$\sin \alpha = \frac{b}{r} = -\frac{1}{\sqrt{2}}$ 

$\alpha = \frac{5}{4}\pi$

Quindi $z = \sqrt{2} \cdot e^{i\frac{5}{4}\pi}$

## Trovare il valore di $i^x$

- Se x pari
	- Se $\frac{x}{2}$ è pari
		- $1$
	- Se $\frac{x}{2}$ è dispari
		- $-1$
- Se x dispari
	- Se $\frac{x-1}{2}$ è pari 
		- $i$
	- Se $\frac{x-1}{2}$ è dispari
		- $-i$

## Trovare la radice quadrata di un n. complesso

Avendo il numero complesso $5+12i$

La radice quadrata è quel numero complesso che elevato alla seconda ci restituisce il numero complesso iniziale.

$(x+yi)^2 = 5+12i$

In questo caso $x+yi$ è la nostra radice quadrata.

$x^2-y^2+2xyi = 5+12i$

Ora facciamo un sistema in cui dividiamo le parti reali da quelle immaginarie

$$ \begin{cases} x^2-y^2 = 5 \\
2xy = 12  \end{cases} \begin{cases} x^2-y^2 = 5 \\
x =  \frac{6}{y}  \end{cases} \begin{cases} \frac{36}{y^2}-y^2 = 5 \\
x =  \frac{6}{y}  \end{cases}$$

concentrandoci sulla prima equazione:
$$\frac{36}{y^2}-y^2 = 5$$

moltiplichiamo per y^2 in entrambi i membri:

$$y^4 + 5y^2-36 = 0$$

calcoliamo $y^2_{1,2}$ trovando il suo delta:

$$\Delta = 25-4 \cdot-36 = 169 = 13^2$$

$$y^2_{1,2} = \frac{-5 \pm 13}{2}$$

I due risultati che escono sono:

- $-\frac{18}{2} = -9$ risultato non valido perché negativo
- $\frac{8}{2} = 4$ risultato valido

Quindi $y^2 = 4$

Tornando al sistema di partenza:

$$ \begin{cases} x^2-y^2 = 5 \\
//  \end{cases} \begin{cases} x^2-4 = 5 \\
//  \end{cases} \begin{cases} x^2 = 9 \\
//  \end{cases}$$

Quindi abbiamo che:
$y^2 = 4$ quindi $y = \pm 2$

$x^2 = 9$ quindi $x = \pm 3$

Quindi il risultato scritto nella forma $x+yi$ è $\pm(3+2i)$

## Divisione tra numeri complessi

Avendo due numeri complessi:

$z = a+bi$

$w = c+di$

la divisione non è altro che $\frac{z}{w} = x+yi$ (una divisione che restituisce un numero complesso).

Ma la frazione può essere vista come $z*w^{-1}$, sapendo che l'inverso di $w$ è $\frac{\overline{w}}{|w|^2}$ otteniamo la formula:

$$\frac{z}{w} = \frac{z \cdot \overline{w}}{|w|^2}$$

Esempio:

$\frac{1}{1+i}$

In questo caso $z = 1+0i$ e $w = 1+i$

$\frac{(1+0i)\cdot(1-i)}{1^2+1^2}=  \frac{1-i}{2} = \frac{1}{2}-\frac{1}{2}i$


  
# Vettori

Un vettore (in geometrica) è sostanzialmente un segmento orientato.

Nella vita reale vengono utilizzati per rappresentare le grandezze che oltre ad una unità di misura hanno anche bisogno di una direzione (velocità, forza di gravità).

I vettori nel piano cartesiano vengono rappresentati con delle frecce:

![](https://i.ibb.co/2dP5Bm1/vettore.png)

Un vettore possiede:

- **direzione**: cioè la retta su cui giace il segmento del vettore
- **verso**: indicato dalla freccia (nell'immagine sopra indica che il vettore va dall'origine al punto $A$ )
- **modulo**: cioè la lunghezza effettiva della retta

## Vettore applicato

Il vettore applicato è un vettore individuato da un punto iniziale e da un punto finale:

avendo il punto $A$ come inizio e $B$ come fine, il vettore si indica con: $\overrightarrow{AB}$ .

Quando l'inizio del vettore coincide con l'origine degli assi si dice **vettore applicato all'origine**

## Prodotto scalare

Il prodotto scalare è una operazione tra vettori che associa ad una coppia di vettori un numero reale (scalare, una grandezza riconosciuta da un valore e unita di misura), viene indicato con $\cdot$ .

Avendo due vettori:

$\overrightarrow{v} = (v_1, v_2,...,v_n)$

$\overrightarrow{k} = (k_1, k_2,...,k_n)$

Il numero reale equivale alla somma dei prodotti dei componenti nella stessa "posizione" dei due vettori.

$v \cdot k = v_1k_1 + v_2k_2+...+v_nk_n$

È possibile scriverlo in sommatoria:

$$\sum_{i=1}^{n} v_ik_i$$

Oppure avendo l'angolo tra i due vettori ( $\Phi$ ) abbiamo che

$$v \cdot k = ||v|| * ||w|| \cos(\Phi)$$

### Proprietà prodotto scalare

1. Proprietà commutativa:
	$\overrightarrow{v} \cdot \overrightarrow{k} = \overrightarrow{k} \cdot \overrightarrow{v}$
2. Proprietà di omogeneità:
	$(x\overrightarrow{v}) \cdot \overrightarrow{k} = \overrightarrow{v} \cdot (x \overrightarrow{k}) = x(\overrightarrow{v} \cdot \overrightarrow{k})$
3. Proprietà distributiva:
	$(\overrightarrow{v} + \overrightarrow{k}) \cdot \overrightarrow{w} = \overrightarrow{v} \cdot \overrightarrow{w} + \overrightarrow{k} \cdot \overrightarrow{w}$

### Norma o lunghezza del vettore

La norma rappresenta la lunghezza del vettore e viene indicata con $||\overrightarrow{v}||$, ed è la radice quadrata della somma dei quadrati dei componenti dei vettori.


$$||\overrightarrow{v}|| = \sqrt{\sum_{i=1}^{n} (v_i)^2}$$


### Versori

Un versore è un vettore di lunghezza unitaria (modulo uguale ad 1), si indica con $\widetilde{v}$.

Dato un vettore possiamo sempre trovare il suo versore che è dato dal vettore fratto la sua norma:

$$\widetilde{v} = \frac{\overrightarrow{v}}{||\overrightarrow{v}||}$$

Esempio

$\overrightarrow{v} = (2,3)$

$||\overrightarrow{v}|| = \sqrt{2^2+3^2} = \sqrt{13}$

$\widetilde{v} = \frac{v}{\sqrt{13}} = (\frac{2}{\sqrt{13}}, \frac{3}{\sqrt{13}})$


## Distanza tra due punti

Avendo due punti:

$A = (-2,1)$

$B = (2,1)$

La distanza tra i due punti si trova facendo la norma del vettore che li unisce:

$$||\overrightarrow{AB}|| = \sqrt{(x_b-x_a)^2(y_b-y_a)^2}$$

$||\overrightarrow{AB}|| = \sqrt{(2-(-2))^2(1-1)^2} = \sqrt{4^2} = 4$

Si ha anche che:

$$||\overrightarrow{AB}|| = ||A-B|| = ||A+B||$$


## Perpendicolarità

Se il prodotto scalare tra due vettori risulta $0$ allora i due vettori sono tra loro perpendicolari (o ortogonali).

$$\overrightarrow{A} \cdot \overrightarrow{B} = 0$$

## Vettori allineati

Per scoprire se due vettori sono allineati tra loro bisogna che il loro prodotto scalare sia uguale a + o - la lunghezza di $A$ per la lunghezza di $B$

$$\overrightarrow{A} \cdot \overrightarrow{B} = \pm ||A|| \cdot ||B||$$

![](https://i.ibb.co/q5m6J2w/vettori-allineati.png)

In alternativa è possibile verificare che i vettori siano linearmente dipendenti, per fare ciò basta mettere i vettori in matrice e calcolare il rango:

- Se il rango è uguale al numero di vettori allora **non** sono allineati
- Se il rango è diverso dal numero di vettori allora sono allineati

## Proiezione

Per fare la proiezione di un vettore su un altro vettore esistono queste due formule:

$$P = ||A||\cos(\alpha) \cdot \frac{B}{||B||}$$

$$P = \frac{\overrightarrow{A} \cdot \overrightarrow{B}}{\overrightarrow{B} \cdot \overrightarrow{B}} \cdot \overrightarrow{B}$$

## Disuguaglianza di Schwarz

$$(A \cdot B)^2 \leq ||A|| \cdot ||B||\cdot \cos(\alpha)$$


## Da equazione parametrica a equazione cartesiana

avendo l'equazione:

$$r: \begin{cases} x = 5 + 2t\\
y = 2 + t\end{cases}$$

Ricaviamo il valore di t:

$$\begin{cases} x = 5 + 2t\\
t = y - 2\end{cases}
\begin{cases} x = 5 + 2(y-2)\\
t = y - 2\end{cases}$$

Quindi abbiamo che:

$x = 5+2y-4 \implies x-2y=1$


## Somma di vettori

Utilizzando la regola del parallelogramma è possibile fare la somma di due vettori che hanno la stessa origine

![](https://i.ibb.co/m4zxt82/somma-vettori.png)
Per sommare due vettore basta sommare le coordinate dei due vettori: $(a_1+b_1, a_2+b_2)$

È possibile sommare anche un vettore con un punto con l'equazione parametrica

$$P(p,q) + \overrightarrow{A}(a_1,a_2): \begin{cases} x =p+a_1t\\
y = q+a_2t\end{cases}$$

Il parametro $t$ serve a indicare la retta su cui giace il vettore (un vettore moltiplicato per una costante t non cambia la retta su cui giace), questo ci restituisce lo stesso risultato quindi se il vettore viene allungato o accorciato.

La somma tra vettore e punto viene chiamato **punto somma** ed è uguale a $P+\overrightarrow{A}t$

Isolando poi il parametro t è possibile ottenere l'equazione della retta.

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

1. trovo due vettore applicati: $\overrightarrow{PQ}$ (facendo $Q-P$ ) e $\overrightarrow{PR}$ (facendo $R-P$ )
2. Calcolo il piano passante per l'origine e che contiene i due vettori con la formula:
$$P + t(Q-P) + r(R-P)$$

Quindi:

$Q-P = (0,1,0)$

$R-P = (4,-1,6)$

Faccio l'equazione parametrica mettendo sulla prima colonna un punto $P$ , sulla seconda $t(Q-P)$ e sulla terza $r(R-P)$.

$$\pi: \begin{cases} x = 1 + 0 \cdot t +4 \cdot r  \\
y = 1 + 1 \cdot t  + (-1) \cdot r  \\
z = 1 + 0 \cdot t + 6 \cdot r  \end{cases}
\begin{cases} x = 1 +  4r  \\
y = 1 +  t  -r \\
z = 1 + 6 r  \end{cases}$$

Per trovare l'equazione cartesiana mi ricavo $r$ da una delle righe del sistema, in questo caso la prima:

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


# Sistemi lineari

Un sistema lineare è un insieme di equazioni lineari (di primo grado).

Esempio di come è formato un sistema lineare:

$$a_{11}x_1 + a_{12}x_2 + ... + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + ... + a_{2n}x_n = b_2 \\
... \\
a_{m1}x_1 + a_{m2}x_2 + ... + a_{mn}x_n = b_m$$

I pedici di $a$ rappresentano rispettivamente **riga e colonna** Il pedice di $b$ rappresenta la **riga**

- Se $b_1 = b_2 = ... =  b_n = 0$ si dice **sistema lineare omogeneo**
- Se $m = n$ si dice **sistema lineare quadrato**

Possiamo dire che $n$ rappresenta il numero di variabili mentre $m$ rappresenta il numero di equazioni.

**Iperpiano**: è l'insieme dei punti le cui coordinate soddisfano l'equazione

**L'insieme delle soluzioni del sistema lineare** è l'insieme dei punti che sono intersezione dei m iperpiani nello spazio a n dimensioni.

Per capire quante soluzioni posso avere devo calcolare:

$$\cos \alpha = \frac{A \cdot B}{||A|| \cdot ||B||}$$

- Se se le due rette *non* sono parallele ( $\cos \alpha < 1$ ) allora il sistema ammette **una soluzione**
- Se le due rette coincidono ( $\cos \alpha = 0$ ) allora ci sono **infinite soluzioni**
- Se le due rette sono parallele ( $\cos \alpha = \pm1$ ) allora **non ci sono soluzioni**

Esempio:

sistema lineare composto da 2 equazioni ( $m$ ) a 2 variabili ( $n$ )

$$\begin{cases} 3x+2y = 5 \\
x+4y = 3 \end{cases}$$

$A=[3,2]$

$B=[1,4]$

$A \cdot B = (3 \cdot 1) + (2 \cdot 4) = 11$

$||A|| = \sqrt{3^2+2^2} = \sqrt{13}$

$||B|| = \sqrt{1^2+4^2} = \sqrt{17}$

$\cos \alpha = \frac{11}{\sqrt{13} \cdot \sqrt{17}} = \frac{\sqrt{11} \cdot \sqrt{11}}{\sqrt{13 \cdot 17}} = \sqrt{\frac{121}{221}}$

dato che $\sqrt{\frac{121}{221}} < 1$ allora le rette non sono parallele quindi abbiamo una soluzione.

Trasformiamo il nostro sistema in un sistema equivalente ma senza la $x$ .

$$\begin{cases} 3x+2y = 5 \\
x+4y = 3 \end{cases} = \begin{cases} x+\frac{2}{3}y = \frac{5}{3} \\
x+4y = 3 \end{cases} $$

faccio la sottrazione tra le due equazioni:

$$x+4y=3\\
-\\
x+\frac{2}{3}y= \frac{5}{3}\\
=\\
0x+\frac{10}{3}y= \frac{4}{3}$$

$$\begin{cases} x+\frac{2}{3}y = \frac{5}{3} \\
\frac{10}{3}y = \frac{4}{3} \end{cases} ... \begin{cases} x = \frac{7}{5} \\
y = \frac{2}{5} \end{cases}$$

Il risultato quindi è il punto $(\frac{7}{5}, \frac{2}{5})$

## Sistemi lineari e matrici

è possibile rappresentare un sistema lineare come una matrice in cui inserire i coefficienti delle equazioni:

$$\begin{cases}
3x + 2y = 5\\
x + 4y = 3
\end{cases} \to
\begin{bmatrix}
3 & 2 &| 5 \\
1 & 4 &| 3 \\
\end{bmatrix}$$

Nelle matrici è possibile:
- Scambiare le righe
- Moltiplicare una riga per uno scalare
- Sottrarre ad una riga un'altra
- Semplificare i componenti di della riga

### Sistemi lineari in $\mathbb{R}^3$

$$\begin{cases}
3x + 2y + z = 0 \\
x + 4y + 3z = 0 \\
x + y + z = 0
\end{cases}$$

Avendo tre equazioni abbiamo i relativi tre piani (passanti per l'origine in questo caso):

$A \to(3,2,1)$

$B \to(1,4,3)$

$C \to(1,1,1)$

In generale **sono possibili tre risultati**:

- l'intersezione è **un piano**, se  i tre vettori (A, B, C) sono collineari (giacciono sulla stessa retta).
- l'intersezione è **una retta**, se i tre vettori non sono collineari ma si trovano sullo stesso piano che passa per l'origine.
- l'intersezione è **un punto**, se A e B non collineari e C non si trova nel piano generato da A e B.

1. controlliamo se A e B sono collineari:

$$\cos \alpha_{AB} \frac{A \cdot B}{||A|| \cdot ||B||} = \frac{3\cdot 1 + 2 \cdot 4 + 1 \cdot 3}{\sqrt{14} \cdot \sqrt{26}}$$

dato che è $<1$ allora non sono collineari

2. controlliamo se C appartiene al piano generato da A e B

Se C dovesse appartenere al piano allora dovrebbero esistere degli scalari $c$ e $d$ per cui $c(3,2,1) + d(1,4,3) = (1,1,1)$

$$\begin{cases}
3c+1d = 1 \\
2c + 4d = 1 \\
1c + 3d = 1
 \end{cases}$$

Risolvendo si raggiunge una affermazione falsa per cui C non appartiene al piano generato da A e B.

Da questo possiamo concludere che il risultato sarà un punto.

Dato che tutti i vettori si intersecano in 0 allora l'unica soluzione possibile è il vettore nullo (0,0,0).

### Metodo di risoluzione con la matrice

$$\begin{cases}
3x + 2y + z = 5 \\
x + 4y + 3z = 3 \\
x + y + z = 0
\end{cases}$$

$A \to(3,2,1)$

$B \to(1,4,3)$

$C \to(1,1,1)$

Dopo aver controllato che A e B non sono collineari.

Scriviamo il sistema come una matrice

$$\begin{bmatrix}
3 & 2 & 1 & 5 \\
1 & 4 & 3 & 3 \\
1 & 1 & 1 & 0
\end{bmatrix}$$

Cambiamo l'ordine delle righe

$$\begin{bmatrix}
1 & 1 & 1 & 0 \\
3 & 2 & 1 & 5 \\
1 & 4 & 3 & 3
\end{bmatrix}$$

$R_2 = R_2 - (3R_1)$

$$\begin{bmatrix}
1 & 1 & 1 & 0 \\
0 & -1 & -2 & 5 \\
1 & 4 & 3 & 3
\end{bmatrix}$$

$R_3 = R_3 - R_1$

$$\begin{bmatrix}
1 & 1 & 1 & 0 \\
0 & -1 & -2 & 5 \\
0 & 0 & -4 & 18
\end{bmatrix}$$

Quando abbiamo raggiunto lo "scalino" possiamo tornare al sistema:

$$\begin{cases}
x + y + z = 0 \\
0  -y -2z = 5 \\
0 + 0 -4z = 18
\end{cases}$$

risolvendo il sistema...

$$\begin{cases}
x = \frac{1}{2} \\
y  = 4 \\
z = -\frac{9}{2}
\end{cases}$$


## Metodo di Cramer

Il metodo di Cramer prevede una risoluzione per i sistemi lineari quadrati (cioè che hanno lo stesso numero di equazione e di incognite)

$$a_{11}x_1 + a_{12}x_2 + ... + a_{1m}x_m = b_1 \\
a_{21}x_1 + a_{22}x_2 + ... + a_{2m}x_m = b_2 \\
... \\
a_{m1}x_1 + a_{m2}x_2 + ... + a_{mm}x_m = b_m$$

Il metodo di Cramer è applicabile solo se il **determinate è diverso da** $0$

Avendo il sistema lineare:

$\begin{cases}
2x + y + z = 3 \\
x - y - z = 0 \\
x + 2y + z = 0
\end{cases}$

Vettore dei termini noti: $b = \begin{pmatrix}
3 \\
0 \\
0 \\
\end{pmatrix}$

Otteniamo la matrice dei coefficienti:

$A = \begin{bmatrix}
2 & 1 & 1 \\
1 & -1 & -1 \\
1 & 2 & 1
\end{bmatrix}$

Con Sarrus abbiamo che $\det(A) = 3$


Ottengo $D_x$ sostituendo $b$ al posto della prima colonna (la colonna delle $x$ ):

$D_x = \begin{vmatrix}
3 & 1 & 1 \\
0 & -1 & -1 \\
0 & 2 & 1
\end{vmatrix} \text{tramite Sarrus (o con i complementi algebrici) ottengo } D_x = 3$ 

Ottengo $D_y$ sostituendo $b$ al posto della seconda colonna (la colonna delle $y$ ):

$D_y = \begin{vmatrix}
2 & 3 & 1 \\
1 & 0 & -1 \\
1 & 0 & 1
\end{vmatrix} \text{tramite Sarrus (o con i complementi algebrici) ottengo } D_y = -6$ 

Ottengo $D_z$ sostituendo $b$ al posto della terza colonna (la colonna delle $z$ ):

$D_z = \begin{vmatrix}
2 & 1 & 3 \\
1 & -1 & 0 \\
1 & 2 & 0
\end{vmatrix} \text{tramite Sarrus (o con i complementi algebrici) ottengo } D_z = 9$ 


Infine otteniamo le soluzione facendo:

$$x = \frac{D_x}{D} \hspace{5mm} y = \frac{D_y}{D} \hspace{5mm} z = \frac{D_z}{D}$$

$$x = \frac{3}{3} \hspace{5mm} y = \frac{-6}{3} \hspace{5mm} z = \frac{9}{3}$$

$$x = 1 \hspace{5mm} y = -2 \hspace{5mm} z = 3$$


## Teorema di Rouchè-Capelli

Questo teorema permette di stabilire se un sistema lineare ammette soluzione e in caso affermativo permette di trovarle mediante lo studio del rango di due matrici.

Dato un sistema lineare $Ax = b$ otteniamo la matrice dei coefficienti $A$ e il vettore dei termini noti $b$, otteniamo la **matrice completa** $(A|b)$ accostando il vettore alla matrice dei coefficienti

Il teorema stabilisce che:

- $\text{rank}(A) < \text{rank}(A|b)$ allora **non ci sono soluzioni**
- $\text{rank}(A) = \text{rank}(A|b)$ allora **ammette soluzioni**
	- $\text{rank}(A) = \text{rank}(A|b) = n$ allora c'è **una sola soluzione** $(n = \text{numero di incognite})$
	- $\text{rank}(A) = \text{rank}(A|b) < n$ allora ci sono **infinite soluzioni** $(n = \text{numero di incognite})$


# Matrici

Una matrice si presenta nella forma:

$$\begin{bmatrix}
a_{11} & ... & ... & a_{1n} & b1 \\
... & ... & ... & ... & ...\\
a_{m1} & ... & ... & a_{amn} & b_m
\end{bmatrix}$$

Quindi una matrice di coefficienti ha una dimensione di $m \times n$

dove $m$ rappresentano le righe e $n$ rappresentano le colonne.

Una matrice si indica sempre con una **lettera maiuscola**:

$$A = (a_{ij})$$

- $A$ : nome della matrice
- $a$ : coefficiente
- $i$ : indice delle righe ( $1 < i < m$ )
- $j$ : indice delle colonne ( $1 < j < n$ )
- $a_{ij}$ : componente/termine della matrice

## Matrici particolari

- **Matrice quadrata**: matrice in cui righe e colonne sono la stessa quantità $(m = n)$
	- **Matrice quadrata simmetrica**: presenta valori simmetrici rispetto alla diagonale principale $(a_{ij} = a_{ji})$ .
	- **Matrice quadrata diagonale**: tutti i valori tranne la diagonale principale sono 0 $(a_{ij} = 0 \text{ per } i \neq j)$ .
	- **Matrice quadrata identica**: i valori della diagonale sono 1 e gli altri al 0 $(a_{ii} = 1)$ .
	- **Matrice zero**: matrice i cui componenti sono tutti 0.
	- **Matrice triangolare superiore o inferiore**: se sono presenti solo valori nulli sopra o sotto la diagonale principale:
$$\text{superiore:} \begin{bmatrix}
1 & 8 & 5 & 1\\
0 & 1 & 3 & 1\\
0 & 0 & 1 & 7 \\
0 & 0 & 0 & 1
\end{bmatrix} \text{ inferiore:}\begin{bmatrix}
1 & 0 & 0 & 0\\
5 & 1 & 0 & 0\\
2 & 5 & 1 & 0 \\
8 & 3 & 1 & 1
\end{bmatrix}$$

## Somma di matrici

è possibile sommare due matrici **solo se hanno la stessa dimensione**.
Si sommano i componenti nella stessa posizione.

$A = \begin{bmatrix}
1 & -1 & 0\\
2 & 3 & 4\\
\end{bmatrix}
B = \begin{bmatrix}
5 & 1 & -1 \\
2 & 1 & -1 \\
\end{bmatrix}
A + B = \begin{bmatrix}
6 & 0 & -1 \\
4 & 4 & 3 \\
\end{bmatrix}$

## Moltiplicare matrice per uno scalare

Si moltiplica ogni termine della matrice per lo scalare

$A = \begin{bmatrix}
1 & -1 & 0\\
2 & 3 & 4\\
\end{bmatrix}
2A = \begin{bmatrix}
2 & -2 & 0\\
4 & 6 & 8\\
\end{bmatrix}$

## Trasposta

Si può indicare in vari modi: $A^T, A^t, A'$ e consiste sostanzialmente nel scambiare le righe con le colonne: la prima riga diventa la prima colonna e così via.

$A = \begin{bmatrix}
2 & 1 & 0\\
1 & 3 & 5\\
\end{bmatrix}
A^t = \begin{bmatrix}
2 & 1\\
1 & 3\\
0 & 5 \\
\end{bmatrix}$

## Traccia della matrice

la traccia della matrice è la somma di tutti gli elementi della diagonale principale:

$$\sum_{i = 1}^{n}a_{ii}$$

## Prodotto matrice vettore

un sistema di equazioni lineari è possibile scriverlo come prodotto di una matrice e un vettore:

$$\begin{cases}
3x + 2y + z = 5 \\
x + 4y + 3z = 3 \\
x + y + z = 0
\end{cases} \to \begin{bmatrix}
3 & 2 & 1\\
1 & 4 & 3\\
1 & 1 & 1 \\
\end{bmatrix} \cdot
\begin{bmatrix}
x \\
y \\
z \\
\end{bmatrix} =
\begin{bmatrix}
5 \\
3 \\
0 \\
\end{bmatrix}$$

## Prodotto fra matrici

Per poter fare il prodotto fra due matrice **il numero di colonne della prima deve esser uguale al numero di righe della seconda**

$A = m \times n$

$B = n \times s$

allora $A\cdot B = m \times s$

$A = \begin{bmatrix}
2 & 1 & 5\\
1 & 3 & 2\\
\end{bmatrix} B =
\begin{bmatrix}
3 & 4 \\
-1 & 2 \\
2 & 1 \\
\end{bmatrix}$

- $\begin{bmatrix}
2 & 1 & 5\\
\end{bmatrix}
\begin{bmatrix}
3  \\
-1 \\
2 \\
\end{bmatrix} = 2\cdot 3 + 1 \cdot (-1) + 5 \cdot 2 = 15$

	$AB = \begin{bmatrix}
15 & ? \\
? & ? \\
\end{bmatrix}$

- $\begin{bmatrix}
2 & 1 & 5\\
\end{bmatrix}
\begin{bmatrix}
4  \\
2 \\
1 \\
\end{bmatrix} = 2\cdot 4 + 1 \cdot 2 + 5 \cdot 1 = 15$

	$AB = \begin{bmatrix}
15 & 15 \\
? & ? \\
\end{bmatrix}$

- $\begin{bmatrix}
1 & 3 & 2\\
\end{bmatrix}
\begin{bmatrix}
3  \\
-1 \\
2 \\
\end{bmatrix} = 1\cdot 3 + 3 \cdot (-1) + 2 \cdot 2 = 4$

	$AB = \begin{bmatrix}
15 & 15 \\
4 & ? \\
\end{bmatrix}$

- $\begin{bmatrix}
1 & 3 & 2\\
\end{bmatrix}
\begin{bmatrix}
4  \\
2 \\
1 \\
\end{bmatrix} = 1\cdot 4 + 3 \cdot 2 + 2 \cdot 1 = 12$

	$AB = \begin{bmatrix}
15 & 15 \\
4 & 12 \\
\end{bmatrix}$

### Proprietà del prodotto

- **proprietà associativa**:

$$A(BC) = (AB)C$$

- **elemento neutro**:
La matrice identità è l'elemento neutro del prodotto

- **proprietà distributiva rispetto alla somma**

$$A(B+C) = (AB) + (AC)$$

- **trasposta del prodotto**

$$(AB)^t = B^t \cdot A^t$$

#### Non gode della proprietà commutativa!

$$AB \neq BA$$


## Matrici elementari

Le matrici elementari sono delle speciali matrici quadrate che corrispondono alle operazioni elementari

### Matrice del tipo $I$

corrisponde alla operazione elementare: **scambio di righe**

### Matrice del tipo $II$

corrisponde alla operazione elementare: **moltiplicazione di una riga per uno scalare**

### Matrice del tipo $III$

corrisponde alla operazione elementare: **somma ad una riga il multiplo di un'altra riga**


## Determinante

Il **determinante** è un numero associato alla matrice, si indica con $\det(A)$.

**Può essere calcolato solo su matrici quadrate**

Si ottiene facendo il prodotto degli elementi della diagonale principale meno il prodotto degli elementi della diagonale secondaria.

Es.

$A = \begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix}$

$\det(A) = (a\cdot d) - (b\cdot c)$

$det(A^{-1}) = \frac{1}{(a\cdot d)-(b\cdot c)}$

Il determinante è lineare

- $$\det  \begin{bmatrix}
a & b + k \\
c & d + j \\
\end{bmatrix} = \det  \begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix} + \det  \begin{bmatrix}
a & k \\
c & j \\
\end{bmatrix}$$

- $$\det  \begin{bmatrix}
a & kb \\
c & kd \\
\end{bmatrix} = k\cdot \det 
\begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix}$$

- Se due colonne  o due righe sono uguali allora il determinante è nullo
- $\det(A) = \det(A^T)$

### Regola di Sarrus

Per trovare il determinante di una matrice $3\times3$ si utilizza la regola di Sarrus

Avendo una matrice:

$A =\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{bmatrix}$

aggiungiamo a destra le prime due colonne della matrice:

$\begin{bmatrix}
a_{11} & a_{12} & a_{13} & |a_{11} & a_{12}\\
a_{21} & a_{22} & a_{23} & |a_{21} & a_{22} \\
a_{31} & a_{32} & a_{33} & |a_{31} & a_{32}\\
\end{bmatrix}$

![](https://i.ibb.co/thSvFKw/sarrus.png)

$$\det(A) = (a_{11} \cdot a_{22} \cdot a_{33}) + (a_{12} \cdot a_{23} \cdot a_{31}) + (a_{13} \cdot a_{21} \cdot a_{32}) - [(a_{13} \cdot a_{22} \cdot a_{31}) + (a_{11} \cdot a_{23} \cdot a_{32}) + (a_{12} \cdot a_{21} \cdot a_{33})]$$

## Minore di una matrice

Il minore di un elemento è il determinante della sottomatrice ricavata eliminando **la riga** e **la colonna** dell'elemento scelto

$A =\begin{bmatrix}
1 & 3 & 2 \\
4 & 1 & 3 \\
2 & 5 & 2 \\
\end{bmatrix}$

Prendendo in considerazione il numero 4, rimuovo la corrispettiva riga e colonna e ottengo la sottomatrice:

$\begin{bmatrix}
3 & 2 \\
5 & 2 \\
\end{bmatrix}$

Di cui faccio il determinante

$\det\begin{bmatrix}
3 & 2 \\
5 & 2 \\
\end{bmatrix} = -4$

Quindi il minore dell'elemento 4 è -4

Così facendo è possibile costruire la matrice dei minori.

## Matrice dei cofattori

La matrice dei cofattori si ottiene moltiplicando  ogni elemento della **matrice dei minori** per -1 che elevato ad un  numero che si basa sulla sua posizione, secondo la seguente *matrice degli esponenti* (nome inventato)

$\begin{bmatrix}
1+1 & 1+2 & 1+3 \\
2+1 & 2+2 & 2+3 \\
3+1 & 3+2 & 3+3 \\
\end{bmatrix}$

Quindi avendo una matrice di minori:

$\begin{bmatrix}
-13 & 2 & 18 \\
-4 & -2 & -1 \\
7 & -5 & -11 \\
\end{bmatrix}$

Abbiamo che la matrice di cofattori si ottiene come:

$\text{cof}(A) =\begin{bmatrix}
-13 \cdot (-1)^{2} & 2 \cdot (-1)^{3}& 18 \cdot (-1)^{4}\\
-4 \cdot (-1)^{3}& -2 \cdot (-1)^{4}& -1 \cdot (-1)^{5}\\
7 \cdot (-1)^{4}& -5 \cdot (-1)^{5}& -11 \cdot (-1)^{6}\\
\end{bmatrix}$

$\text{cof}_{ij}(A) = (-1)^{i+1} \cdot \det(M_{ij})$

### Determinante con i complementi algebrici

È possibile ottenere il determinante facendo la somma dei prodotti degli elementi di una riga (o colonna) di A per i rispettivi cofattori

$A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{bmatrix}$

Prendendo in considerazione la prima riga (conviene scegliere sempre la riga o colonna con i numeri più semplici):

$$\det(A) = \left( 1 \cdot
\begin{vmatrix}
5 & 6 \\
8 & 9 \\
\end{vmatrix} \cdot (-1)^{1+1} \right) + \left( 2 \cdot
\begin{vmatrix}
4 & 6 \\
7 & 9 \\
\end{vmatrix} \cdot (-1)^{1+2} \right) + \left( 3 \cdot
\begin{vmatrix}
4 & 5 \\
7 & 8 \\
\end{vmatrix} \cdot (-1)^{1+3} \right)  = $$

$$ = \left( 1 \cdot
(45-48) \right) + \left( 2 \cdot
(36-42) \cdot (-1) \right) + \left( 3 \cdot
(32-35) \right)  = $$

$$ = -3 + 12 + (-9)  = 0$$

## Matrice inversa

Dato che le operazioni elementari sono reversibili allora le **matrici elementari sono invertibili**

Data una matrice A quadrata, è invertibile se esiste una matrice B tale che:

$$A\cdot B = B \cdot A = \text{matrice identità}$$

per esistere l'inversa:

1. la matrice deve essere quadrata
2. il determinante della matrice deve essere diverso da $0$

Per ottenere la matrice inversa la formula è:

$$A^{-1} = \frac{1}{\det(A)}\cdot (\text{cof(A)})^T$$

dove $\text{cof}^T$ è la trasposta della matrice dei cofattori (chiamata anche **matrice aggiunta**)

Per esempio inversa di una matrice di ordine 2:

$$A^{-1} = \frac{1}{\det(A)}\cdot  \begin{bmatrix}
d & -b \\
-c & a \\
\end{bmatrix} $$

### Step

1. calcolare il determinante di A
	- se $\det(A) = 0$ l'inversa non esiste
	- se $\det(A) \neq 0$ l'inversa esiste
2. Calcolare la matrice dei cofattori
3. Fare la matrice trasposta della matrice dei cofattori (Se la matrice è simmetrica allora $\text{cof} = \text{cof}^T$ )
4. Moltiplicare la matrice ottenuta per $\frac{1}{\det(A)}$

### Caratteristiche:
- **Può esistere solo una matrice inversa**.

- Viene indicata con $A^{-1}$

- $(A\cdot B)^{-1} = A^{-1} \cdot B^{-1}$

### Metodo dell'inversa in un sistema lineare
Se abbiamo il sistema lineare $Ax = b$

in cui:
- $A$ è la matrice dei coefficienti
- $x$ è il vettore delle soluzioni (incognite)
- $b$ è il vettore dei termini noti

**Nel caso A sia invertibile** possiamo ottenere il vettore delle soluzioni facendo:

$$x = A^{-1} \cdot b$$

Es.

$A = \begin{cases}
3x + 7y = 27 \\
5x-2y = 4 \\
\end{cases}$

Abbiamo:

- la matrice $A = \begin{bmatrix}
3 & 7 \\
5 & -2 \\
\end{bmatrix}$
- il vettore $x = \begin{pmatrix}
x \\
y \\
\end{pmatrix}$
- il vettore di termini noti $b = \begin{pmatrix}
27 \\
4 \\
\end{pmatrix}$

Calcoliamo il determinante $\det(A) = -6-35 = -41 \neq 0$ Quindi la matrice è invertibile

Faccio i passaggi per calcolare la matrice inversa e ottengo

$A^{-1} = \begin{bmatrix}
\frac{2}{41} & \frac{7}{41} \\
\frac{5}{41} & -\frac{3}{41} \\
\end{bmatrix}$

Per ottenere il valore del vettore delle incognite facciamo la moltiplicazione tra l'inversa e il vettore dei termini noti:

$\begin{bmatrix}
\frac{2}{41} & \frac{7}{41} \\
\frac{5}{41} & -\frac{3}{41} \\
\end{bmatrix} \cdot \begin{pmatrix}
27 \\
4 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
3 \\
\end{pmatrix}$


## Matrice a scala in forma ridotta

### Matrice a scala

È una matrice in cui il primo elemento non nullo si trova in una delle colonne successive alla colonna corrispondente al primo elemento non nullo della riga precedente.

Es. 

$\begin{bmatrix}
0 & 1 & 5 & 0 & 3 & 1\\
0 & 0 & 9 & 2 & 5 & 2\\
0 & 0 & 0 & 0 & 5 & 6\\
0 & 0 & 0 & 0 & 0 & 1\\
\end{bmatrix}$

### forma ridotta
- Il primo elemento non nullo deve essere 1.
- Ogni colonna deve possedere al più un 1
	- Se la colonna contiene 1 allora tutti gli altri valore della colonna devono essere 0
	- se la colonna non contiene 1 allora può tenere qualsiasi valore

$\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 7\\
0 & 1 & 0 & 0 & 0 & 2\\
0 & 0 & 0 & 1 & 0 & 6\\
0 & 0 & 0 & 0 & 1 & 0\\
0 & 0 & 0 & 0 & 0 & 0\\
\end{bmatrix}$


### Trasformare una matrice a scala in forma ridotta

Avendo la matrice a scala $H = (h_{ij})$

Si parte dall'alto verso il basso:

1. Si prende la prima riga non nulla $i$
2. Si divide la riga $i$ per il suo primo elemento a partire da sinistra
3. Per ogni riga $k \text{ }(a \leq k \leq i)$ todo 

$$R_k = R_k+(-h_{kj})R_i$$

### Sistemi lineari Equivalenti per riga

Due sistemi lineari si dicono equivalente per riga se si può ricavare l'uno dall'altro utilizzando le operazioni elementari.

Avendo due sistemi lineare di dimensione $m\times n$

- $Ax=a$
- $Bx=b$

Se questi due sistemi lineari sono equivalente per riga allora:

1. I due sistemi hanno le stesse soluzioni
2. Le soluzioni di $Ax=a$ si ottengono trasformando la matrice completa in matrice a scala in forma ridotta.

## Rango di una matrice

Il rango di una matrice è un numero che rappresenta il numero di righe o colonne nella più grande sottomatrice (quadrata) con determinante diverso da $0$

Il rango è quindi un numero compreso tra 0 e il minimo tra il numero di righe e di colonne

$$0\leq \text{rank}(A)\leq \min(\text{righe, colonne})$$

Il rango è $0$ solo nel caso della matrice nulla

Es.

$A = \begin{bmatrix}
3 & 7 \\
0 & 8 \\
1 & -1 \\
7 & 9 \\
\end{bmatrix}$

$0\leq \text{rank}(A)\leq 2$

La più grande sottomatrice **quadrata** è $2 \times 2$

calcolando il determinante della sottomatrice $\det \left( \begin{bmatrix}
3 & 7 \\
0 & 8 \\
\end{bmatrix} \right) = 24 - 0 = 24 \neq 0$ Quindi il rango della matrice è $2$

### Altra definizione

Il rango è il massimo numero di vettori colonna/riga linearmente indipendenti della matrice


# Grafi

I grafi sono una struttura dati composta da **nodi e archi**. Viene indicato con:

$$G(V, E)$$

Dove $V$ è l'insieme finito dei nodi (vertices) e $E$ è l'insieme finito degli archi (edges).

Un grafo viene rappresentato graficamente come:

![](https://i.ibb.co/KxjQq8z/grafo.png)

Gli archi possono avere una direzione, in questo caso viene definito **grafo orientato**; se invece gli archi on hanno direzione sono bidirezionali e viene definito **grafo non orientato**:

![](https://i.ibb.co/Vxm68SW/archi.png)

## Matrice di adiacenza

È possibili rappresentare un grafo anche attraverso una matrice di adiacenza:

La matrice segue la seguente regola:

$$\begin{cases} 1 & \text{se esiste un arco che collega gli indice della matrice} \\
0 & \text{se i due indici non sono collegati}
\end{cases}$$

![](https://i.ibb.co/MDMwy0D/mat-adiacenza.png)

**grado di un nodo**: il grado di un nodo del grafo corrisponde al numero di archi che possiede un determinato nodo. Es. il grado del nodo 1 è 2

Un **cammino** è una successioni di nodi collegati da un arco. Es esistono 2 cammini di lunghezza 2 per andare dal nodo 1 al nodo 4 $(1\to 2 \to 4; 1 \to 3 \to 4)$ .


# Spazi vettoriali

## Gruppo

**Gruppo**: è composto da un insieme $G$ e un'operazione *

$(G, *)$ è un gruppo se:

- l'operazione è associativa
- esiste l'elemento neutro
- esiste l'inverso di ogni elemento

Un gruppo si dice **abeliano** se l'operazione è anche **commutativa**

Es. ( $\mathbb{Z} , +$ ) infatti la somma possiede la proprietà associativa e commutativa, ha l'elemento neutro $0$ e ogni elemento dell'insieme è invertibile

## Anelli
 
Un **anello** è un insieme in cui sono definite due operazioni, somma e prodotto in cui:

- l'insieme e la somma sono un gruppo abeliano
- l'operazione prodotto è associativa
- valgono le leggi distributive

Si indica con (nome_insieme, operazione1, operazione2)

Un **anello è commutativo** se la seconda operazione è anche commutativa

viene chiamato **anello con identità** se:
- esiste l'identità del prodotto $(\exists 1 \in A : a \cdot 1 = 1 \cdot a)$

l'anello è **invertibile** se:
- esiste l'inverso $(\exists a' \in A : a\codt a' = a' \cdot a = 1)$

Es $(\mathbb{Z}, + , \cdot)$

## Campi

Un **campo** è un **anello** in cui ogni elemento è invertibile (tranne 0) e in cui vale la legge dell'annullamento del prodotto

Es. $(\mathbb{Q}, +, \cdot)$

## Spazi vettoriali

Sia $K$ un campo numerico (un'estensione dell'insieme $\mathbb{Q}$ )

Gli elementi di $K$ sono degli scalari

Uno spazio vettoriale su $K$ è costituito da un insieme di vettori $V$ dotati di:
- Somma vettoriale
- Prodotto per uno scalare

Devono inoltre valere i seguenti **assiomi**:

$a, b, c \in V$ vettori 
$r, s \in K$ scalari

|numero ass.| proprietà  | nome proprietà |
|--|--|--|
|1| $$a+(b+c) = (a+b)+c$$ |prop. associativa
|2| $$a+b = b+a$$ |prop. commutativa
|3| $$0+a = a = a+0$$ |elem. neutro
|4| $$a+(-a) = 0 = (-a)+a$$ |inversa della somma
|5| $$(r+s)a = ar + as$$ |prop. distributiva
|6| $$(r\cdot s)a = r(sa)$$ | prop. distributiva
|7| $$r(a+b) = ra+rb$$ | prop. distributiva
|8| $$O \cdot a = O$$ | $O$ = vettore nullo


## Sottospazi

Avendo $V$ spazio vettoriale nel campo $K$

Possiamo avere $U$ che è un sottoinsieme non vuoto di $V$, tale che

- $v,w \in U \to v+w \in U$
- $v \in U \land r \in K \to r\cdot v \in U$

Ogni retta passante per l'origine è sottospazio di $\mathbb{R}^2$

Mentre quelle non passanti per l'origine non sono sottospazi vettoriali

## Combinazioni Lineari

Le combinazioni lineari sono espressioni in cui compaiono somme di vettori e moltiplicazioni di vettori per uno scalare

Abbiamo:

- $x_1, x_2, ..., x_n \in V$ vettori
- $\alpha_1, \alpha_2, ..., \alpha_n \in \mathbb{R}$ numeri

una combinazione lineare è del tipo:

$v = \alpha_1x_1 + \alpha_2x_2 +...+ \alpha_nx_n$

Scritto in sommatoria diventa

$$\sum_{i = 1}^{n}(\alpha_i\cdot x_i)$$

### Combinazione lineare banale

Si dice combinazione lineare banale se è una combinazione costituita da un unico vettore nullo

## Vettori linearmente dipendenti e indipendenti


Avendo i vettori $v_1,...,v_n$ in uno spazio vettoriale $V$  se consideriamo dei coefficienti $\alpha_1,...,\alpha_n$ e imponiamo l'uguaglianza:

$$\alpha_1v_1 + ... + \alpha_nv_n = 0$$

Si dicono **linearmente indipendenti** se otteniamo che l'uguaglianza è soddisfatta se e solo se **tutti i coefficienti sono uguali a 0**.

Si dicono **linearmente dipendente** se esiste almeno una combinazione di **coefficienti non nulli** che rendono vera l'uguaglianza.

## Base di uno spazio vettoriale

Si tratta di un insieme di vettori (linearmente indipendenti) in con cui si possono generare tutti i vettori dello spazio lineare, attraverso delle combinazioni lineari.

Supponendo di avere dei vettori base $x_1,...,x_n$

Ogni vettore dello spazio vettoriale si scrive in maniera unica come combinazione lineare della base.

Nella scrittura $V = \alpha_1v_1 + ... + \alpha_nv_n$

Abbiamo che $\alpha_1,...\alpha_n$ sono le coordinate di v rispetto alla base, quindi

$\Alpha = (\alpha_1,...,\alpha_n)$ vettore di coordinate di $V$ rispetto alla base.

**Le basi contengono il numero minimo di vettori necessari per generare lo spazio vettoriale**

### Esercizio

Determinare le coordinate di $(1,0)$ rispetto ai vettori $(1,1)$ e $(-1,2)$

$$a \cdot \begin{pmatrix} 
1 \\
1 \end{pmatrix} + b\begin{pmatrix} 
-1 \\
2 \end{pmatrix} = \begin{pmatrix} 
1 \\
0 \end{pmatrix}$$

Da cui deriviamo il sistema lineare:

$$\begin{cases}
a-b = 1 \\
a-2b = 0
\end{cases}$$

Risolvendo il sistema si ottiene $a = \frac{2}{3}, b = -\frac{1}{3}$

### Base canonica
Una base canonica è composta da vettori in cui in ogni vettore è presente solo un elemento non nullo

Base canonica $= e_1, e_2,...e_n$

$$e_1 = (1, 0,...0)$$

$$e_2 = (0, 1,...0)$$

$$...$$

$$e_n = (0, 0,...1)$$

### Base ortogonale

Una base $v_1,...v_n$ è ortogonale se $v_i \cdot v_j = 0$ (prodotto di vettori) con $i \neq j$

### Base ortonormale

Una base ortonormale è una **base ortogonale** la cui norma di ogni vettore è 1.


# Trasformazioni lineari

Le Trasformazioni lineari o applicazioni lineari sono funzioni tra due spazi vettoriali che conservano le combinazioni lineari, cioè somma di vettori e moltiplicazione di vettori per scalari.

Siano $V, W$ spazi vettoriali sullo stesso campo,

Una funzione $f: V \longrightarrow W$ è una trasformazione lineare quando soddisfa:
$\forall x,y \in V$ (vettori) e $r$ scalare

1. $f(x+y) = f(x) + f(y)$
2. $f(rx) = rf(x)$

## Omomorfismo

Una trasformazione lineare è un omomorfismo se oltre a soddisfare

1. $f(x+y) = f(x) + f(y)$
2. $f(rx) = rf(x)$

soddisfa anche

3. l'immagine della somma è uguale alla somma delle immagine
4. l'immagine del prodotto è uguale al prodotto dello scalare per l'immagine

### Isomorfismo

Due spazi vettoriali sono **isomorfi** (stessa forma) se esiste una trasformazione lineare tale che

$f: V \longrightarrow W$

$f^{-1}: W \longrightarrow V$

Due spazi vettoriali hanno la stessa struttura algebrica

Tra i due spazi vettoriali c'è una relazione di equivalenza perché esiste una **biiezione lineare**

**Quindi qualsiasi applicazione lineare invertibile è un isomorfismo**

### Endomorfismo

Si parla di endomorfismo quando il Dominio coincide con il codominio

$f: V \longrightarrow V$

### Automorfismo

Si tratta di un endomorfismo invertibile

$f: V \longrightarrow V$

$f^{-1}: V \longrightarrow V$

## Esempi di trasformazioni lineari

Sono delle trasformazioni lineari:

1. La funzione identità
2. Le composizioni $(f \circ g \text{ oppure } g \circ f)$
3. Somma di trasformazioni lineari


## Capisaldi delle trasformazioni lineari

### Nucleo

Il nucleo è un sottoinsieme del dominio composto da tutti i vettori che hanno come immagine lo zero del codominio

serve a studiare l'inettività della trasformazione

possiamo trovare il valore del nucleo seguendo questa formula:


### Immagine (detto "rango" nelle matrici)

L'immagine è un sottoinsieme del codominio formato da vettori che sono immagine dei vettori del dominio

serve a studiare la suriettività della trasformazione, serve anche a trovare la controimmagine della funzione

### Definizione matematica

$f: V \longrightarrow W$

Nucleo: $\ker(f) = \lbrace v\in V: f(v) = 0\rbrace$

Immagine: $\text{Im}(f) = \lbrace w \in W: \exists v \in V \text{ per cui }f(v) = w\rbrace$


### Teorema delle dimensioni

Detto anche teorema della nullità più rango.

Questo teorema mette in relazione le dimensioni di nucleo e immagine con la dimensione dello spazio vettoriale su cui è definita la trasformazione

La dimensione dello spazio vettoriale è data dalla somma tra la dimensione del nucleo e la dimensione dell'immagine

$f: V \longrightarrow W$

$$\dim(V) = \dim(ker(f)) + \dim(\text{Im}(f))$$

### Biiettività
$V = \mathbb{R}^3$

$W = \mathbb{R}^3$

$f: V \longrightarrow W$

- Una applicazione è **iniettiva** se $\dim(\ker(f)) =0$
	- è possibile determinarlo utilizzando il teorema della dimensione:
	
		$$\dim(ker(f)) = \dim(V) - \dim(\text{Im}(f))$$
		
		la dimensione di V viene data dal testo, in questo caso $\mathbb{R}^3$ quindi 3.

		la dimensione dell'immagine la troviamo con lo studio della suriettività.
		
		Se la dimensione del nucleo vale $0$ allora la funzione è iniettiva
- Una applicazione è **suriettiva** se $\dim(\text{Im}(f)) = \dim(W)$ quindi se $\text{Im}(f)) = W$ (immagine coincide con il codominio)
	- é possibile determinarlo scrivendo la trasformazione come matrice e calcolare il suo rango, se quest'ultimo è uguale alla dimensione del codominio allora è suriettiva (rango = 3 e codominio = $\mathbb{R}^3$ allora è suriettiva)
- Una applicazione è **biiettiva** se è iniettiva e suriettiva, se è biiettiva allora è anche invertibile

## Da trasformazione lineare a matrice

$T: \mathbb{R}^2\longrightarrow\mathbb{R}^3$

$T((x,y)) = (x+y, 2x, x-y)$

Otterremo una matrice dei coefficienti per matrice delle incognite

La matrice dei coefficienti avrà 2 colonne e 3 righe (dominio = colonne, codominio = righe)

$$\begin{bmatrix}
1 & 1 \\
2 & 0 \\
1 & -1
\end{bmatrix}
\cdot 
\begin{bmatrix}
x \\
y \\
\end{bmatrix} =
\begin{bmatrix}
x + y \\
2x \\
x-y
\end{bmatrix}$$

## Span

Lo **Span** o **sottospazio generato** rappresenta tutte le possibili combinazioni lineari di un insieme di vettori.

Es.

$$v_1 = \begin{pmatrix} 1\\1\end{pmatrix} v_2 = \begin{pmatrix} 2\\2\end{pmatrix}$$

$$\text{span}(v_1,v_2) = \lbrace a_1v_1 + a_2v_2\rbrace \text{ con } a_1,a_2 \in \mathbb{R}$$

La dimensione del sottospazio generato da dai vettori è dato dal numero dei vettori che sono linearmente indipendenti.

## Sistema di generatori

Uno spazio vettoriale $V$ è un sistema di generatori di $V$ se e solo se ogni vettore di $V$ si può scrivere come combinazione lineare

### Differenza tra sistema di generatori e sottospazio generato

- **Sistema di generatori**: insieme di vettori che genera lo spazio vettoriale $V$
- **Sottospazio generato da un insieme di vettori di $V$**: sottospazio vettoriale di $V$
- Se $\lbrace v_1,...,v_n\rbrace$ è un sistema di generatori di $V$ allora $V$ coincide con il sottospazio generato dai vettori. Di conseguenza i vettori che definiscono un *sottospazio generato* sono anche un sistema di generatori del sottospazio che generano.

# Autovalori e autovettori

Lavorando su uno spazio vettoriale

Uno scalare $\lambda_0$ si dice **autovalore di una matrice** $A$  se esiste un vettore colonna (non nullo) tale che:

$$Av = \lambda_0v$$

Mentre nella precedente equazione il vettore $v$ è definito **autovettore**

$$\begin{bmatrix} 
a & b  & c \\
d & e & f \\
g & h & i \\
\end{bmatrix} \cdot \begin{bmatrix} 
k_1 \\
k_2 \\
k_3 \\
\end{bmatrix} = \lambda_0 \cdot \begin{bmatrix} 
k_1 \\
k_2 \\
k_3 \\
\end{bmatrix}$$

### Geometricamente

I vettori hanno una direzione.

Gli **autovettori** sono vettori che non cambiano direzione applicando le trasformazioni lineari

Gli **autovalori** sono degli scalari usati per allungare e comprimere gli autovettori


## Applicazioni lineari

Avendo:

$Av_1 = \lambda v_1$

$Av_2 = \lambda v_2$

- $A(v_1 + v_2) = Av_1 + Av_2 = \lambda v_1 + \lambda v_2 = \lambda(v_1 + v_2)$
	- Quindi $A(v_1 + v_2) = \lambda(v_1 + v_2)$
- $A(c\cdot v_1) = c\cdot Av_1 = c\cdot \lambda v_1 = \lambda c v_1$

NB Anche se $v_1, v_2$ sono autovettori di $A$ , $v_1 + v_2$ **non è un autovettore** di $A$


## Calcolo di autovalori e autovettori


Da $Av = \lambda v$ si deriva che $v(A - \lambda I) = 0$ Dove $I$ è la matrice identità
 
Gli autovalori sono gli scalari $\lambda$ che rendono il determinante di $A$ nullo

$$\det(A-\lambda I) = 0$$

### Polinomio caratteristico di A

La scrittura $\det(A-\lambda I) = 0$ corrisponde al **polinomio caratteristico** della matrice $A$

$$P_A(\lambda) = \det(A-\lambda I)$$

Per calcolare gli autovalori basta trovare gli zeri del polinomio, una volta trovati gli autovalori è possibile calcolare gli autovettori

Es.

$A = \begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix}$

$I = \begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix}$

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - \lambda 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix} \longrightarrow \begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} -  
\begin{bmatrix}
\lambda & 0 \\
0 & \lambda \\
\end{bmatrix} \longrightarrow \begin{bmatrix}
(1-\lambda) & -2 \\
1 & (4 - \lambda) \\
\end{bmatrix}$

Quindi

$$\det \left( \begin{bmatrix}
(1-\lambda) & -2 \\
1 & (4 - \lambda) \\
\end{bmatrix} \right) = 0$$


$$(1-\lambda) \cdot (4-\lambda) - (-2 \cdot 1)] = 0$$

$$P_A(\lambda) = 4-\lambda - 4\lambda + \lambda^2 +2$$

$$P_A(\lambda) = \lambda^2 - 5\lambda + 6$$

Troviamo gli zeri del polinomio

$\lambda^2 - 5\lambda + 6 = 0$

$(\lambda - 3) \cdot (\lambda - 2) = 0$

Ottengo gli autovalori: $\lambda_1 = 3, \lambda_2 = 2$

### cerchiamo gli autovettori relativi a $\lambda_1$ :

Risolvo $(A-\lambda_1I)v = 0$ :

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 3 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 
\begin{bmatrix}
3 & 0 \\
0 & 3 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
-2 & -2 \\
1 & 1 \\
\end{bmatrix}
\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

Dato che il rango della matrice è 1, secondo il teorema di Rouchè-Capelli esistono infinite soluzioni

passando ad un sistema lineare

$\begin{cases} 
-2x -2y = 0 \\
x + y = 0
\end{cases}$

Dato che ci sono infinite soluzione assegno ad una incognita il ruolo di parametro libero, per esempio $y = t$

$\begin{cases} 
y = t \\
x  = -t
\end{cases}$

Quindi l'autovettore associato all'autovalore $\lambda_1 = 3$ è:

$$\begin{pmatrix}
-t \\
t \\
\end{pmatrix} \longrightarrow t \cdot \begin{pmatrix}
-1 \\
1 \\
\end{pmatrix}$$


### cerchiamo gli autovettori relativi a $\lambda_2$ :

Risolvo $(A-\lambda_2I)v = 0$ :

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 2 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 
\begin{bmatrix}
2 & 0 \\
0 & 2 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
-1 & -2 \\
1 & 2 \\
\end{bmatrix}
\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

Dato che il rango della matrice è 1, secondo il teorema di Rouchè-Capelli esistono infinite soluzioni

passando ad un sistema lineare

$\begin{cases} 
-x -2y = 0 \\
x + 2y = 0
\end{cases}$

Dato che ci sono infinite soluzione assegno ad una incognita il ruolo di parametro libero, per esempio $y = t$

$\begin{cases} 
y = t \\
x = -2t
\end{cases}$

Quindi l'autovettore associato all'autovalore $\lambda_2 = 2$ è:

$$\begin{pmatrix}
-2t \\
t \\
\end{pmatrix} \longrightarrow t \cdot \begin{pmatrix}
-2 \\
1 \\
\end{pmatrix}$$


Quindi gli autovettori risultanti sono:


- $v_{\lambda_{1}} = \begin{pmatrix}
-t \\
t \\
\end{pmatrix}$

- $v_{\lambda_{2}} =\begin{pmatrix}
-2t \\
t \\
\end{pmatrix}$

## Diagonalizzabilità e triangolarizzabilità

### Molteplicità algebrica e molteplicità geometrica

- Si dice **molteplicità algebrica** il numero di volte in cui l'autovalore $\lambda$ è risultato dell'operazione $\det(A-\lambda I) = 0$
	
	se abbiamo $(1-\lambda)(\lambda^2-1)\longrightarrow (1 - \lambda)(\lambda - 1)(\lambda + 1)$
	
	otteniamo $\lambda_0 = 1, \lambda_1 = 1, \lambda_2 = -1$

	quindi la molteplicità algebrica è 3.
	(possimo dire che  la molteplicità algebrica di $\lambda_0$ è 2 ($\lambda_0 = \lambda_1$) mentre la molteplicità di $\lambda_2$ è 1)
	
	In conclusione possiamo dire che:
	- In $\mathbb{R}$ la molteplicità algebrica è $\leq$ del numero di righe (o colonne, perché lavoriamo con matrice quadrate) della matrice.
	- In $\mathbb{C}$ la molteplicità algebrica è $=$ al numero di righe (o colonne, perché lavoriamo con matrice quadrate) della matrice.

- Si dice **molteplicità geometrica** la dimensione dell'autospazio di un autovalore, calcolato con la formula:
	
	$$n - rango(A-\lambda_i \cdot Id)$$
	
	dove:
	- $n =$ numero di righe (o colonne)
	- $A =$ la matrice di partenza
	- $\lambda_i =$ autovalore
	-  $Id =$ matrice identità

$$1 \leq m_g \leq m_a \leq n$$

Quindi se la molteplicità algebrica di un autovalore è 1 anche la molteplicità geometrica è 1

### Diagonalizzabilità

Una trasformazione lineare è diagonalizzabile se e solo se:
- La la molteplicità algebrica della trasformazione è uguale alla molteplicità geometrica della trasformazione
- Per ogni autovalore la molteplicità algebrica e geometrica sono uguali

La matrice diagonale D è una matrice composta dalla diagonale principale contenente gli autovalori, ripetuti nel caso in cui abbiano molteplicità maggiore di 1.

$$D =  P^{-1}\cdot A \cdot P$$

$$A =  P\cdot A \cdot P^{-1}$$

La matrice diagonalizzante P è una matrice che ha per colonne le basi degli autovettori

nell'esercizio precedente avremo

$D =\begin{bmatrix}
3 & 0 \\
0 & 2 \\
\end{bmatrix}$

$P =\begin{bmatrix}
-1 & -2 \\
1 & 1 \\
\end{bmatrix}$

NB ogni colonna di P deve essere riferita al corrispettivo autovalore nella matrice D.

È possibile trovare l'inversa di $P$ con la formula

$P^{-1} = \frac{1}{\det(P)}\cdot (\text{Cof(P)})^T$

### Triangolarizzabilità

Una trasformazione lineare è triangolizzabile se e solo se:
- Gli autovalori appartengono allo stesso campo (Tutti Reali o tutti complessi)
