# Classi asintotiche

significato dei simboli usati nelle formule usate in questo capitolo:

$|$ per cui
$\backepsilon$ tale che
$:$ risulta
$\exist$ esiste
$\forall$ per ogni

## Classe $O$

definizione formale:

$$O(g(n)) = \{f(n) | \exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 : f(n) \leq c \cdot g(n)\}$$


la precedente formula definisce un insieme di funzioni.
quando vogliamo dire che un a certa funzione $f(n)$ appartiene a questo insieme dovremmo usare la seguente simbologia: $f(n) \in O(g(n))$ ma è convenzione scrivere nel seguente modo $f(n) = O(g(n))$ ma il significato è lo stesso.

### Significato

 $f(n) = O(g(n))$

Significa che per un $n$ sufficientemente grande la funzione $f(n)$ sarà sempre "sotto" alla funzione $g(n)$ moltiplicata per una costante.

![enter image description here](https://i.ibb.co/sgRSLC7/Ogrande.png)
### Esempio

Dimostriamo che $\frac{1}{2}n^2 - 3n = O(n^2)$

dimostriamo usando la definizione

$\exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$
$$ \frac{1}{2}n^2 - 3n \leq c \cdot n^2$$

che vale se e solo se:

$\iff\frac{1}{2}n - 3 \leq c \cdot n \hspace{10mm}\text{dividendo per n}$
$\iff\frac{1}{2}n- c \cdot n\leq 3 \hspace{10mm}\text{riordinando}$
$\iff n (\frac{1}{2}- c)\leq 3 \hspace{10mm}\text{raccogliendo n}$

Abbiamo quindi che se $(\frac{1}{2} - c)$ fosse negativo o zero allora l'equazione sarebbe sempre vera (ricordiamo che sia $c$ che $n$ possono essere solo valori positivi, zero escluso)

Quindi abbiamo che $\frac{1}{2} - c \leq 0$  per $c\geq \frac{1}{2}$ e questo vale per ogni $n$ ma noi come detto consideriamo che n possa assumere come valore minimo $1$ quindi vale per $n \geq n_0$ dove $n_0 = 1$ 

## Classe $\Omega$

definizione formale:

$$\Omega(g(n)) = \{f(n) | \exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 : f(n) \geq c \cdot g(n)\}$$

### Significato

 $f(n) = \Omega(g(n))$

Significa che per un $n$ sufficientemente grande la funzione $f(n)$ sarà sempre "sopra" alla funzione $g(n)$ moltiplicata per una costante.

![enter image description here](https://i.ibb.co/0MQc8hj/omega.png)

### Esempio

Dimostriamo che $\frac{1}{2}n^2 - 3n = \Omega(n^2)$

dimostriamo usando la definizione

$\exist \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$
$$ \frac{1}{2}n^2 - 3n \geq c \cdot n^2$$

che vale se e solo se:

$\iff\frac{1}{2}n - 3 \geq c \cdot n \hspace{10mm}\text{dividendo per n}$
$\iff\frac{1}{2}n- c \cdot n\geq 3 \hspace{10mm}\text{riordinando}$
$\iff n (\frac{1}{2}- c)\geq 3 \hspace{10mm}\text{raccogliendo n}$

in questo caso dobbiamo imporre che  $\frac{1}{2}- c > 0$ cioè quando $c < \frac{1}{2}$ . Non dimentichiamo che $c$ è sempre positivo quindi più precisamente $0 < c < \frac{1}{2}$

troviamo i valori di $n$ :

$\iff n  \geq \frac{3}{\frac{1}{2}-c}$
$\iff n  \geq \frac{6}{1-2c}$
dove $n_0 = \frac{6}{1-2c}$


## Classe $\Theta$

definizione formale:

$$\Theta(g(n)) = \{f(n) | \exist \, c_1 > 0,\exist \, c_2 > 0, $$

$$\exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$$

$$ c_1 \cdot g(n)\leq f(n) \leq c_2 \cdot g(n)\}$$

### Significato

 $f(n) = \Theta(g(n))$

Significa che per un $n$ sufficientemente grande la funzione $f(n)$ sarà sempre sopra una funzione $g(n)$moltiplicata per una costante $c_1$e sempre sotto una funzione $g(n)$ moltiplicata per un'altra costante $c_2$

![enter image description here](https://i.ibb.co/bRzwH5T/theta.png)

### Proprietà

$f(n) = \Theta(g(n)) \iff f(n) = O(g(n))$ e $f(n) = \Omega(g(n))$

$\frac{1}{2}n^2 - 3n$ soddisfa questa formula quindi $\frac{1}{2}n^2 - 3n = \Theta(g(n))$

### Esempio

Dimostriamo che $\sqrt{n + 10} = \Theta(\sqrt{n})$

dimostriamo usando la definizione

 $\exist \, c_1, c_2 > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0 :$
$$c_1\sqrt{n} \leq \sqrt{n + 10} \leq c_2\sqrt{n}$$

1. Consideriamo prima $c_1\sqrt{n} \leq \sqrt{n + 10}$
$\iff c_1^2n \leq n +10 \hspace{10mm}\text{elevando alla seconda}$ 
$\iff n(c_1^2 - 1) \leq 10 \hspace{10mm}\text{raccogliendo n}$ 
poniamo $c_1^2 - 1 \leq 0$ otteniamo $c_1 \leq 1$ e quindi la condizione è verificata per ogni $n \geq 1$

2. Consideriamo $\sqrt{n + 10} \leq c_2\sqrt{n}$
$\iff n +10 \leq c_2^2 n \hspace{10mm}\text{elevando alla seconda}$ 
$\iff n (c_2^2 - 1) \geq 10 \hspace{10mm}\text{raccogliendo n}$
poniamo $c_2^2-1 \geq 0$ otteniamo $c_2 \geq 1$ e la condizione è verificate per ogni $n \geq \frac{10}{c_2^2 - 1}$

## Esempi di funzioni

- $\log n = O(n)$ il logaritmo sta "sotto" alla funzione lineare
- $n\log n = O(n^2)$ il logaritmo di una potenza ($n\log n = log(n^n)$) sta sotto la funzione quadratica
- $n! = O(n^n)$ il fattoriale sta sotto la funzione "super" esponenziale
- $n! = \Omega(2^n)$ il fattoriale sta sopra alla funzione esponenziale
- $\log(n!) = O(n\log n)$ il logaritmo di un fattoriale sta sotto a $n \log n$
- $\sqrt{n} = O(n)$ ovviamente la radice sta sotto alla funzione lineare
- 
![enter image description here](https://i.ibb.co/KjS7MJN/comparison.png)

## Proprietà delle classi asintotiche

### Prima proprietà

$$f(n) = O(g(n)) \iff g(n) = \Omega(f(n))$$

quindi una funzione $f(n)$ sta sotto una funzione $g(n)$ se e solo se la funzione $g(n)$ sta sopra alla funzione $f(n)$

Dimostrazione

**ipotesi**: $\exists \, c > 0, \exist \, n_0 \in \mathbb{N} \backepsilon \forall n \geq n_0:$
$f(n) \leq c \cdot g(n)$

**Tesi**: $\exists \, c' > 0, \exist \, n_0' \in \mathbb{N} \backepsilon \forall n \geq n_0':$
$c' \cdot f(n) \leq g(n)$

partendo dalla mia ipotesi posso dividere per $c$ ottenendo
$\frac{1}{c}f(n) \leq g(n)$

da qui vedo confrontando quest'ultima con la mia tesi noto che $c' = \frac{1}{c}$ e quindi $n_0' = n_0$

### Seconda proprietà (proprietà transitiva)

$$f(n) = O(g(n)) \land g(n) = O(h(n)) \implies f(n) = O(h(n))$$

quindi se la funzione $f(n)$ sta sotto alla funzione $g(n)$ e la funzione $g(n)$ sta sotto alla funzione $h(n)$ allora la funzione $f(n)$ sta sotto alla funzione $h(n)$

vale ugualmente per $\Omega$ e $\Theta$

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

$$f(n) \leq c_1 \cdot c_2 \cdot h(n)$$

da qui confrontando con la tesi notiamo che $c_1\cdot c_2 = c_3$

$f(n) \leq c_3 \cdot h(n)$

mentre $n_3$ sceglieremo il maggiore tra $n_1$ e $n_2$, perché immaginiamo di considerare la funzione quando le funzioni si "stabilizzano", graficamente significherebbe:

![enter image description here](https://i.ibb.co/xMLB30T/graph.png)


