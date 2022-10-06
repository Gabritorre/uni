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

$\cos \alpha = \frac{1}{\sqrt{2}}$ razionalizzando: $\frac{\sqrt{2}}{2}$. Quindi risolvendo $\cos(\alpha) = \frac{\sqrt{2}}{2}$ otteniamo $\pm 45°$cioè $\pm\frac{\pi}{4}$ .

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



