# Esercizi sulle ricorrenze

## es 1
$$T(n) = 3T\left(\frac{n}{2}\right) + n^2$$

$a = 3$
$b = 2$

confronto:
$$f(n) = n^2 \hspace{15mm} n^{\log_23}$$

Dato che $n^{\log_23} < n^{2}$ verifico dei essere nel caso 3 del T.M.

Verifichiamo se $\exist \epsilon > 0: f(n) = \Omega(n^{\log_23 + \epsilon})$

$\log_23 + \epsilon = 2$
$\epsilon = 2 - \log_23$
dato che $\log_23 < 2$ allora la sottrazione produrrà un numero positivo, quindi ho trovato un $\epsilon > 0$, cioè $\epsilon = 2-\log_23$

Verifichiamo la condizione ausiliaria:
$\exists 0 < c < 1, \exist n_0 \in \mathbb{N}\,\epsilon\, \forall n \geq n_0 :$

$$a\cdot f\left(\frac{n}{b}\right) \leq c\cdot f(n)$$

$$3\cdot \left(\frac{n}{2}\right)^2 \leq c\cdot n^2$$

$$\frac{3\cancel{n^2}}{4} \leq c\cdot \cancel{n^2}$$

$$\frac{3}{4} \leq c$$

$$\frac{3}{4} \leq c < 1$$

scelgo $c = \frac{3}{4}$ che vale per $n \geq 1$

$$T(n) = \Theta(n^2)$$

## es 2
$$T(n) = 4T\left(\frac{n}{2}\right) + n^2$$

$a = 4$
$b = 2$

confronto:
$$f(n) = n^2 \hspace{15mm} n^{\log_24} = n^2$$

Dato che $f(n) = \Theta(n^2)$ allora rientriamo nel caso 2 del T.M.

$$T(n) = \Theta(n^2\log n)$$

## es 3
$$T(n) = T\left(\frac{n}{2}\right) + 2^n$$

$a = 1$
$b = 2$

confronto:
$$f(n) = 2^n \hspace{15mm} n^{\log_21} = n^0$$

Verifichiamo di essere nel caso 3 del T.M.

Verifichiamo se $\exist \epsilon > 0: f(n) = \Omega(n^{0 + \epsilon})$
scelgo $\epsilon = 1$, infatti è vero che: $2^n = \Omega(n)$

Verifichiamo la condizione ausiliaria:
$\exists 0 < c < 1, \exist n_0 \in \mathbb{N}\,\epsilon\, \forall n \geq n_0 :$

$$a\cdot f\left(\frac{n}{b}\right) \leq c\cdot f(n)$$

$$1\cdot 2^{\frac{n}{2}} \leq c\cdot 2^n$$

$$\frac{2^{\frac{n}{2}}}{2^n} \leq c$$

$$\frac{2^{\frac{1}{2}n}}{2^n} \leq c$$

$$\frac{\left(\sqrt{2}\right)^{n}}{2^n} \leq c$$

$$\left(\frac{\sqrt{2}}{2}\right)^{n} \leq c < 1$$

per $n\geq 1$ si ha che $\left(\frac{\sqrt{2}}{2}\right)^{n}$ tende a $0$. Scelgo $c = \frac{\sqrt{2}}{2}$

$$T(n) = (2^n)$$

## es 4
$$T(n) = 16T\left(\frac{n}{4}\right) + n$$

$a = 16$
$b = 4$

confronto:
$$f(n) = n \hspace{15mm} n^{\log_416} = n^2$$

Verifichiamo di essere nel caso 1 del T.M.

Verifichiamo se $\exist \epsilon > 0: f(n) = O(n^{2 - \epsilon})$
scelgo $\epsilon = 1$, infatti è vero che: $n = O(n)$

$$T(n) = \Theta(n^2)$$

## es 5
$$T(n) = 2T\left(\frac{n}{2}\right) + n\log n$$

$a = 2$
$b = 2$

confronto:
$$f(n) = n\log n \hspace{15mm} n^{\log_22} = n^1$$

Verifichiamo di essere nel caso 3 del T.M.

Verifichiamo se $\exist \epsilon > 0: f(n) = \Omega(n^{1 + \epsilon})$

in questo caso non esiste una $\epsilon > 0$ che soddisfa tale condizione. (anche scegliendo un $\epsilon$ molto vicino allo zero comunque per $n$ molto grande: $n^{1 + \epsilon}$ supera $n \log n$)

Tentiamo un approccio di risoluzione tramite **albero delle ricorsioni**

Dalla definizione di $T(n)$ ogni chiamata ricorsiva (nodo dell'albero) chiama ricorsivamente se stessa 2 volte su una quantità di dati dimezzata. Ogni chiamata ricorsiva (nodo dell'albero) ha un costo logaritmico.
Possiamo rappresentare tale definizione nel seguente albero:
![enter image description here](https://i.ibb.co/b74wwMB/image.png)

Scriviamo la somma delle complessità delle prime chiamate.

$$n\log n + \cancel{2}\cdot \frac{n}{\cancel{2}}\log\left(\frac{n}{2}\right) + \cancel{4} \cdot \frac{n}{\cancel{4}} \log\left(\frac{n}{4}\right) + ...$$

$$n\log n + n \log\left(\frac{n}{2}\right) + n \log\left(\frac{n}{4}\right) + ...$$

notiamo che è un pattern che si continua a ripetere, possiamo quindi scrivere tutta l'espressione come una sommatoria:

$$\sum_{i=0}^{h}n\log \frac{n}{2^i}$$

troviamo $h$, cioè il punto in cui la ricorsione finisce. La ricorsione finisce quando la chiamata ricorsiva raggiunge il caso base:

$$\frac{n}{2^i} = 1$$

$$n = 2^i$$

$$i = \log_2 n$$

riscriviamo la sommatoria adesso che sappiamo fino a che punto arriva la $i$

$$\sum_{i=0}^{\log_2 n}n\log \frac{n}{2^i}$$

Ora cerchiamo di capire quale è la complessità:

$$n\sum_{i=0}^{\log_2 n}\log \frac{n}{2^i}$$

utilizzando la proprietà dei logaritmi:
$$n\sum_{i=0}^{\log_2 n}\log(n) - \log 2^i$$

$$n\left[\sum_{i=0}^{\log_2 n}\log(n) -  \sum_{i=0}^{\log_2 n}\log 2^i\right]$$

$$n\left[\log n \sum_{i=0}^{\log_2 n}1 - \sum_{i=0}^{\log_2 n}i\cdot\log 2\right]$$

$$n\left[\log n \cdot\log_2n - \log 2\sum_{i=0}^{\log_2 n}i\right]$$

serie aritmetica:

$$n\left[\log n \cdot\log_2n - \log 2\cdot \frac{\log_2 n \cdot (\log_2 (n) + 1)}{2}\right]$$

Assumiamo tutti i logaritmi ad una base generica: $\log_2 n = \Theta(\log n)$

$$n\left[\log n \cdot\log n - \log 2\cdot \frac{\log n \cdot (\log (n) + 1)}{2}\right]$$

$$n\left[\log^2 n - \log 2\cdot \frac{\log^2 n + \log n}{2}\right]$$

$$n \log^2 n - n\log 2\cdot \frac{\log^2 n + \log n}{2}$$

$$n \log^2 n - \frac{n\log 2 \log^2 n}{2} - \frac{n\log 2 \log n}{2}$$

È evidente che a dominare sia $n \log^2 n$, quindi concludiamo che:

$$T(n) = \Theta(n\log^2 n)$$


## es 6

$$T(n) = 4T\left(\frac{n}{2}\right) + \log n$$

$a = 4$
$b = 2$

confronto:
$$f(n) = \log n \hspace{15mm} n^{\log_24} = n^2$$

Verifichiamo di essere nel caso 1 del T.M.

Verifichiamo se $\exist \epsilon > 0: f(n) = O(n^{2 - \epsilon})$
scelgo $\epsilon = 1$, infatti è vero che: $\log n = O(n)$

$$T(n) = \Theta(n^2)$$
