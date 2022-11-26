# Infiniti e infinitesimi

## Funzioni infinitesime

Una funzione si dice infinitesima in un punto $x_0$ (Reale oppure infinito) se: 

$$\lim_{x \to x_0}f(x) = 0$$

due funzioni $f$ e $g$ sono **infinitesimi simultanei** in $x_0$ se:

 $$\lim_{x \to x_0}f(x) = 0 \hspace{7mm} \lim_{x \to x_0}g(x) = 0$$

### Ordine di infinitesimo

Avendo $f$ e $g$ infinitesimi simultanei in $x_0$ allora:

- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = \ell > 0$ allora $f$ e $g$ hanno lo **stesso ordine di infinitesimo**, si scrive $f=O(g)$ " $f$ è o grande di $g$ "
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = 0$ allora $f$ ha ordine di infinitesimo superiore a $g$, si scrive $f=o(g)$ " $f$ è o piccolo di $g$ "
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = +\infty$ allora $f$ ha ordine di infinitesimo inferiore a $g$, si scrive $g=o(f)$ " $g$ è o piccolo di $f$ "
- Se il limite non esiste allora le due funzioni sono **infinitesimi non confrontabili**

### Principio di sostituzione degli infinitesimi

Avendo il limite di una funzione del tipo:

$$\lim_{x \to x_0} \frac{f_1(x) + f_2(x)}{g_1(x) + g_2(x)}$$

Se tutte le funzioni sono infinitesimi simultanei, posso tenere solo se funzioni di **ordine inferiore**, quindi quel limite equivale a:

$$\lim_{x \to x_0} \frac{f_1(x)}{g_1(x)}$$

## Funzioni infinite

Una funzione si dice infinita in un punto $x_0$ (Reale oppure infinito) se: 

$$\lim_{x \to x_0}f(x) = \infty$$

due funzioni $f$ e $g$ sono **infiniti simultanei** in $x_0$ se:

 $$\lim_{x \to x_0}f(x) = \infty \hspace{7mm} \lim_{x \to x_0}g(x) = \infty$$

### Ordine di infinito

Avendo $f$ e $g$ infiniti simultanei in $x_0$ allora:

- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = \ell > 0$ allora $f$ e $g$ hanno lo **stesso ordine di infinito**, si scrive $f=O(g)$ " $f$ è o grande di $g$ "
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = +\infty$ allora $f$ ha ordine di infinito superiore a $g$, si scrive $f=o(g)$ " $f$ è o piccolo di $g$ "
- Se $\lim_{x \to x_0}\left| \frac{f(x)}{g(x)}\right| = 0$ allora $f$ ha ordine di infinito inferiore a $g$, si scrive $g=o(f)$ " $g$ è o piccolo di $f$ "
- Se il limite non esiste allora le due funzioni sono **infiniti non confrontabili**

### Principio di sostituzione degli infiniti

Avendo il limite di una funzione del tipo:

$$\lim_{x \to x_0} \frac{f_1(x) + f_2(x)}{g_1(x) + g_2(x)}$$

Se tutte le funzioni sono infiniti simultanei, posso tenere solo se funzioni di **ordine superiore**, quindi quel limite equivale a:

$$\lim_{x \to x_0} \frac{f_1(x)}{g_1(x)}$$
