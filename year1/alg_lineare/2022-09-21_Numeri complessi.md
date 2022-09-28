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

### Moltiplicazione di due numeri con coordinate polari

$z = |z| (\cos \alpha + i \sin \alpha)$

$w= |w| (\cos \beta + i \sin \beta)$

$$z \cdot w = |z \cdot w| \cdot (\cos(\alpha + \beta) + i \sin(\alpha + \beta))$$

### Trovare l'angolo di un numero complesso

Avendo $z = 2-3i$

1. troviamo la lunghezza della diagonale: $|z| = \sqrt{2^2 + (-3)^2} = \sqrt{13}$
2. Ora troviamo l'angolo mettendo z nella forma polare:
	$$z = |z| \cdot \frac{z}{|z|} = $$

	$$= \sqrt{13} \cdot (\frac{2-3i}{\sqrt{13}}) = \sqrt{13} \cdot (\frac{2}{\sqrt{13}} - \frac{3i}{\sqrt{13}})$$

$\cos \alpha = \frac{2}{\sqrt{13}}$ quindi $\alpha = 56° + 2k\pi \text{ oppure } 303° + 2k\pi$

$\sin \alpha = -\frac{3}{ \sqrt{13}}$ quindi $\alpha = 303° + 2k\pi \text{ oppure } 236 + 2k\pi$

L'angolo che dobbiamo considerare è quello in comune quindi $303°$

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

## Trovare il valore di $i^x$

- Se x pari
	- Se $\frac{x}{2}$ è pari
		- $1$
	- Se $\frac{x}{2}$ è dispari
		- $-1$
- Se x dispari
	- $\frac{x-1}{2}$ è pari 
		- $i$
	- $\frac{x-1}{2}$ è dispari
		- $-i$
