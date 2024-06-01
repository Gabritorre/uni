# Classi asintotiche

Significato dei simboli usati nelle formule usate in questo capitolo:

$|$ per cui
$\backepsilon$ tale che
$:$ risulta
$\exist$ esiste
$\forall$ per ogni

## Classe $O$

Definizione formale:

$$O(g(n)) = \{f(n) \, |\, \exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 : f(n) \leq c \cdot g(n)\}$$

La precedente formula definisce un insieme di funzioni.
Quando vogliamo dire che un a certa funzione $f(n)$ appartiene a questo insieme dovremmo usare la seguente simbologia: $f(n) \in O(g(n))$ ma è convenzione scrivere nel seguente modo $f(n) = O(g(n))$, il significato è lo stesso.

### Significato

$$f(n) = O(g(n))$$

Significa che per un $n$ sufficientemente grande (da $n_0$ in poi) la funzione $f(n)$ sarà sempre "sotto" alla funzione $g(n)$ moltiplicata per una costante $c$.
![enter image description here](https://i.ibb.co/sgRSLC7/Ogrande.png)

$n$ rappresenta solitamente la dimensione di un input, quindi è un intero strettamente positivo

### Esempio

Dimostriamo che 
$$\frac{1}{2}n^2 - 3n = O(n^2)$$

usando la definizione:

$\exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$
$$ \frac{1}{2}n^2 - 3n \leq c \cdot n^2$$

che vale se e solo se:

$\iff\frac{1}{2}n - 3 \leq c \cdot n \hspace{10mm}\text{dividendo per n}$
$\iff\frac{1}{2}n- c \cdot n\leq 3 \hspace{10mm}\text{riordinando}$
$\iff n (\frac{1}{2}- c)\leq 3 \hspace{10mm}\text{raccogliendo n}$

Abbiamo quindi che se $(\frac{1}{2} - c)$ fosse negativo o zero allora l'equazione sarebbe sempre vera (ricordiamo che sia $c$ che $n$ possono essere solo valori strettamente positivi)

Quindi abbiamo che $\frac{1}{2} - c \leq 0$  per $c\geq \frac{1}{2}$ e questo vale per ogni $n$ ma noi, come detto precedentemente, consideriamo che $n$ possa assumere come valore minimo $1$ quindi vale per $n \geq n_0$ dove $n_0 = 1$ 

## Classe $\Omega$

Definizione formale:

$$\Omega(g(n)) = \{f(n) \, |\,  \exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 : f(n) \geq c \cdot g(n)\}$$

### Significato

$$f(n) = \Omega(g(n))$$

Significa che per un $n$ sufficientemente grande (da $n_0$ in poi) la funzione $f(n)$ sarà sempre "sopra" alla funzione $g(n)$ moltiplicata per una costante $c$.
![enter image description here](https://i.ibb.co/0MQc8hj/omega.png)

### Esempio

Dimostriamo che
$$\frac{1}{2}n^2 - 3n = \Omega(n^2)$$

usando la definizione

$\exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$
$$ \frac{1}{2}n^2 - 3n \geq c \cdot n^2$$

che vale se e solo se:

$\iff\frac{1}{2}n - 3 \geq c \cdot n \hspace{10mm}\text{dividendo per n}$
$\iff\frac{1}{2}n- c \cdot n\geq 3 \hspace{10mm}\text{riordinando}$
$\iff n (\frac{1}{2}- c)\geq 3 \hspace{10mm}\text{raccogliendo n}$

in questo caso dobbiamo imporre che  $\frac{1}{2}- c > 0$ cioè quando $c < \frac{1}{2}$ . Non dimentichiamo che $c$ è sempre positivo, quindi più precisamente $0 < c < \frac{1}{2}$

troviamo i valori di $n$ :

$\iff n  \geq \frac{3}{\frac{1}{2}-c}$
$\iff n  \geq \frac{6}{1-2c}$
dove $n_0 = \frac{6}{1-2c}$

## Classe $\Theta$

Definizione formale:

$$\Theta(g(n)) = \{f(n) | \exist \, c_1 > 0,\exist \, c_2 > 0, $$

$$\exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$$

$$ c_1 \cdot g(n)\leq f(n) \leq c_2 \cdot g(n)\}$$

### Significato

$$f(n) = \Theta(g(n))$$

Significa che per un $n$ sufficientemente grande (da $n_0$ in poi) la funzione $f(n)$ sarà sempre sopra la funzione $g(n)$moltiplicata per una costante $c_1$ e sempre sotto la funzione $g(n)$ moltiplicata per un'altra costante $c_2$.

Possiamo dire che la funzione $f$ "si comporta come" la funzione $g$
![enter image description here](https://i.ibb.co/bRzwH5T/theta.png)

### Proprietà

- $$f(n) = \Theta(g(n)) \iff f(n) = O(g(n)) \text{ e } f(n) = \Omega(g(n))$$

	l'esempio che abbiamo visto precedentemente, $\frac{1}{2}n^2 - 3n$, soddisfa questa formula quindi $\frac{1}{2}n^2 - 3n = \Theta(g(n))$
- $$\lim_{n\to \infty}\frac{f(n)}{g(n)} = 0<\ell<+\infty \implies f(n) = \Theta(g(n))$$

	Ad esempio:
	$3n^3 + 2n^2 + 6n + 5 \overset{?}{=} \Theta(n^3)$
	$\lim_{n\to \infty}\frac{3n^3 + 2n^2 + 6n + 5}{n^3} =$
	$\text{raccogliendo } n^3 \text{ al numeratore...}$
	$= \lim_{n\to \infty}3 + \frac{2}{n} + \frac{6}{n^2} + \frac{5}{n^3} = 3$

	dato che $0 < 3 < +\infty$ allora $3n^3 + 2n^2 + 6n + 5 = \Theta(n^3)$

	Attenzione che non vale il contrario di quest'ultima proprietà (infatti è **implica** e non una doppia implicazione)

### Esempio

Dimostriamo che 
$$\sqrt{n + 10} = \Theta(\sqrt{n})$$

usando la definizione

 $\exist \, c_1, c_2 > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$
$$c_1\sqrt{n} \leq \sqrt{n + 10} \leq c_2\sqrt{n}$$

1. Consideriamo prima $c_1\sqrt{n} \leq \sqrt{n + 10}$
$\iff c_1^2n \leq n +10 \hspace{10mm}\text{elevando alla seconda}$ 
$\iff n(c_1^2 - 1) \leq 10 \hspace{10mm}\text{raccogliendo n}$ 
poniamo $c_1^2 - 1 \leq 0$ otteniamo $c_1 \leq 1$ e quindi la condizione è verificata per ogni $n \geq 1$

2. Consideriamo $\sqrt{n + 10} \leq c_2\sqrt{n}$
$\iff n +10 \leq c_2^2 n \hspace{10mm}\text{elevando alla seconda}$ 
$\iff n (c_2^2 - 1) \geq 10 \hspace{10mm}\text{riordinando e raccogliendo n}$
poniamo $c_2^2-1 \geq 0$ otteniamo $c_2 \geq 1$ e la condizione è verificate per ogni $n \geq \frac{10}{c_2^2 - 1}$

### Esempi di funzioni

- $\log n = O(n)$ il logaritmo sta "sotto" alla funzione lineare
- $n\log n = O(n^2)$ il logaritmo di una potenza ($n\log n = log(n^n)$) sta sotto la funzione quadratica
- $n! = O(n^n)$ il fattoriale sta sotto la funzione "super" esponenziale
- $n! = \Omega(2^n)$ il fattoriale sta sopra alla funzione esponenziale
- $\log(n!) = O(n\log n)$ il logaritmo di un fattoriale sta sotto a $n \log n$
- $\sqrt{n} = O(n)$ ovviamente la radice sta sotto alla funzione lineare

![enter image description here](https://i.ibb.co/KjS7MJN/comparison.png)

## Proprietà delle classi asintotiche

### Prima proprietà

$$f(n) = O(g(n)) \iff g(n) = \Omega(f(n))$$

Quindi una funzione $f(n)$ sta sotto una funzione $g(n)$ se e solo se la funzione $g(n)$ sta sopra alla funzione $f(n)$

Dimostrazione

**ipotesi**: $\exists \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0:$
$f(n) \leq c \cdot g(n)$

**Tesi**: $\exists \, c' > 0, \exist \, n_0' \in \mathbb{N} \backepsilon \forall n \geq n_0':$
$c' \cdot f(n) \leq g(n)$

partendo dalla mia ipotesi posso dividere per $c$ ottenendo
$\frac{1}{c}f(n) \leq g(n)$

da qui vedo confrontando quest'ultima con la mia tesi noto che $c' = \frac{1}{c}$ e quindi $n_0' = n_0$

### Seconda proprietà (proprietà transitiva)

$$f(n) = O(g(n)) \hspace{2mm} \land \hspace{2mm} g(n) = O(h(n)) \implies f(n) = O(h(n))$$

Quindi se la funzione $f(n)$ sta sotto alla funzione $g(n)$ e la funzione $g(n)$ sta sotto alla funzione $h(n)$ allora la funzione $f(n)$ sta sotto alla funzione $h(n)$

analogo per $\Omega$ e $\Theta$

Dimostrazione

**ipotesi 1**:  $\exists \, c_1 > 0, \exist \, n_1 \in \mathbb{N} \backepsilon \forall n \geq n_1:$
$$f(n) \leq c_1 \cdot g(n)$$

**ipotesi 2**:  $\exists \, c_2 > 0, \exist \, n_2 \in \mathbb{N} \backepsilon \forall n \geq n_2:$
$$g(n) \leq c_2 \cdot h(n)$$

**Tesi**: $\exists \, c_3 > 0, \exist \, n_3 \in \mathbb{N} \backepsilon \forall n \geq n_3:$
$$f(n) \leq c_3 \cdot h(n)$$

Procediamo

$$f(n) \leq c_1 \cdot g(n) \land g(n) \leq c_2 \cdot h(n)$$
sostituendo $g(n)$ con $c_2 \cdot h(n)$

$$f(n) \leq c_1 \cdot (c_2 \cdot h(n))$$

da qui confrontando con la tesi notiamo che $c_3 = c_1\cdot c_2$

$f(n) \leq c_3 \cdot h(n)$

mentre $n_3$ sceglieremo il maggiore tra $n_1$ e $n_2$, perché immaginiamo di considerare la proprietà quando le funzioni si "stabilizzano", graficamente significherebbe:
![enter image description here](https://i.ibb.co/xMLB30T/graph.png)

## Classe $o$

Definizione formale:

$$o(g(n)) = \{f(n) \,|\, \forall \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 : f(n) < c \cdot g(n)\}$$

Le due differenze rispetto a $O(g(n))$ sono il **per ogni** $c$ e il $f(n)$ **strettamente minore** di $c \cdot g(n)$

### Significato

$$f(n) = o(g(n))$$

Significa che per un $n$ sufficientemente grande la funzione $f(n)$ sarà sempre **strettamente** "sotto" alla funzione $g(n)$ moltiplicata per una **qualsiasi** costante positiva.

dato che $o(g(n))$ è sottoinsieme di $O(g(n))$
abbiamo che se $f(n) = o(g(n)) \implies f(n) = O(g(n))$

### Proprietà

$$f(n) = o(g(n)) \iff \lim_{n\to \infty}\frac{f(n)}{g(n)} = 0$$

è possibili usare questa proprietà per verificare che una funzione sia o-piccolo di un'altra.
Ad esempio:

$\log n = o(\sqrt{n})$

$$\lim_{n\to \infty}\frac{\log n}{\sqrt{n}} = \bigg[\frac{\infty}{\infty}\bigg] \text{possiamo usare de l'hopital}$$

$$\text{per semplicità consideriamo la base del logaritmo }e$$

$$\lim_{n\to \infty}\frac{\frac{1}{n}}{\frac{1}{2}n^{-\frac{1}{2}}} = \lim_{n\to \infty} \frac{2}{\sqrt{n}} = 0$$

per la proprietà vale che $\log n = o(\sqrt{n})$ e dato che $o$-piccolo è sottoinsieme di $O$-grande allora $\log n = O(\sqrt{n})$

## Classe $\omega$

definizione formale:

$$\omega(g(n)) = \{f(n) | \forall \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 : f(n) > c \cdot g(n)\}$$

Le due differenze rispetto a $\Omega(g(n))$ sono il **per ogni** $c$ e il $f(n)$ **strettamente maggiore** di $c \cdot g(n)$

### Significato

$$f(n) = \omega(g(n))$$

Significa che per un $n$ sufficientemente grande (da $n_0$ in poi) la funzione $f(n)$ sarà sempre **strettamente** "sopra" alla funzione $g(n)$ moltiplicata per una **qualsiasi** costante positiva $c$.

dato che $\omega(g(n))$ è sottoinsieme di $\Omega(g(n))$
abbiamo che se $f(n) = \omega(g(n)) \implies f(n) = \Omega(g(n))$

### Proprietà

$$f(n) = \omega(g(n)) \iff \lim_{n\to \infty}\frac{f(n)}{g(n)} = +\infty$$

è possibili usare questa proprietà per verificare che una funzione sia omega-piccolo di un'altra.

## Osservazioni

1. $o(g(n)) \cap \Omega(g(n)) = \empty$
2. $\omega(g(n)) \cap O(g(n)) = \empty$

Dimostriamo per assurdo il caso 1.

supponiamo per assurdo che esista una funzione $f(n)$ che appartenga a $o(g(n)) \cap \Omega(g(n))$
allora dalle definizione delle due classi:

definizione di o-piccolo: $\hspace{5mm}\forall \, c > 0 \hspace{5mm} \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 \hspace{5mm} f(n) < c\cdot g(n)$
definizione di $\Omega$: $\hspace{14mm}\exist\, c' > 0 \hspace{5mm} \exist \, n_0' \in \mathbb{N} \backepsilon \forall n \geq n_0' \hspace{5mm} f(n) \geq c'\cdot g(n)$


per far si che siano vere entrambe le definizioni dobbiamo considerare la parte delle funzioni dal massimo tra $n_0$ e $n_0'$ in poi , quindi $n > \max(n_0, n_0')$

In tal caso si avrebbe che o-piccolo vale per tutti i $c > 0$ quindi dovrebbe valere anche per $c'$, così facendo però si nota subito la seguente condizione impossibile:

$$f(n) < c' \cdot g(n) \leq f(n)$$

(da una parte $g$ è **strettamente maggiore** di $f$ ma dall'altra $g$ è **minore o uguale** a $f$)

Possiamo realizzare il seguente schema degli insiemi delle classi che abbiamo visto:
![enter image description here](https://i.ibb.co/2nXZ9GG/classes.png)


Possiamo anche realizzare il seguente schema riassuntivo delle proprietà con il limite del rapporto

$$\lim_{n\to\infty}\frac{f(n)}{g(n)} = \begin{cases} 
0 & \iff f(n) = o(g(n)) \implies f(n) = O(g(n))\\
\ell, \hspace{3mm}\ell \in \, ]0, +\infty[ & \implies f(n) = \Theta(g(n))\\
\infty & \iff f(n) = \omega(g(n)) \implies f(n) = \Omega(g(n))\\
\end{cases}$$

Può esserci un ulteriore caso in cui il **limite non esista**, in quel caso l'appartenenza della funzione ad una determinata classe va verificata in altri modi.

Ad esempio

$(1 + \sin(n))n = O(n)$

In questo caso $\lim_{n\to \infty}\frac{(1+\sin(n))n}{n}$ non esiste a causa del seno che varia tra $[-1, 1]$ .

Quindi per ogni $n>1$
$$-1 \leq \sin n \leq 1$$

$$0\leq 1 + \sin n \leq 2 \hspace{5mm}\text{sommando 1 a tutti i membri}$$

$$0n\leq (1 + \sin n)n \leq 2n \hspace{5mm}\text{moltiplicando per n tutti i membri}$$

otteniamo quindi che $(1 + \sin n)n \leq 2n$

## Regola dei polinomi

Se $P(n)$ è un polinomio di grado $k$, allora $P(n) = \Theta(n^k)$

Ad esempio

il polinomio $P(n) = 3n^2 + 7n$ ha grado $2$ quindi 

$P(n) = \Theta(n^2)$


Possiamo generalizzare la regola dei polinomi come segue:

$$f(n) + o(f(n)) = \Theta(f(n))$$

quindi abbiamo che una funzione $f$ sommata ad una funzione che cresce più lentamente di $f$ si comporta come la funzione $f$

Dimostrazione:
possiamo scrivere $f(n) + o(f(n))$ come $g(n)$ , in questo modo diventa $g(n) = \Theta(f(n))$ e possiamo usare il limite.

$$\lim_{n\to\infty}\frac{g(n)}{f(n)}$$

nota che adesso g(n) sta a sinistra dell'uguaglianza, ecco perché è al numeratore.
rappresentiamo $o(f(n))$ con $h(n)$
$$\lim_{n\to\infty}\frac{f(n) + h(n)}{f(n)}$$

$$\lim_{n\to\infty}\frac{f(n)}{f(n)} + \frac{h(n)}{f(n)}$$

$$\lim_{n\to\infty} 1 + \frac{h(n)}{f(n)} = 1$$

nota: dato che $h(n) = o(f(n))$ per definizione il limite di $\frac{h(n)}{f(n)}$ tende a $0$
