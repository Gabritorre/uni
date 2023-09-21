# Fibonacci

La sequenza di Fibonacci è una sequenza di numeri in cui ogni numero è dato dalla somma dei due numeri di Fibonacci che lo precedono.

La definizione del Fibonacci di un numero $n$ è:

$$F_n = \begin{cases}
1& \text{se } n = 1, 2 \\ 
F_{n-1} + F_{n-2} &\text{se } n >= 3
\end{cases}$$

Quindi l'inizio della sequenza di Fibonacci è $1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...$

Oltre alla definizione ricorsiva esiste un altro modo per ottenere il numero di Fibonacci:

## Fibonacci di n usando la sezione aurea

Partendo dall'equazione $x^2 = x + 1 \longrightarrow x^2 - x - 1 = 0$

Risolvendola otteniamo

$$x_{1,2} = \begin{cases}
\frac{1+\sqrt{5}}{2} \approx 1.618... = \Phi\\
\frac{1-\sqrt{5}}{2} \approx -0.618... = \hat{\Phi}
\end{cases}$$

Possiamo trovare il Fibonacci $\forall n > 1$ usando la formula:

$$F_n = \frac{1}{\sqrt{5}}\large(\Phi^n - \hat\Phi^n\large)$$

### Pseudocodice

Fib1(int n) -> int
$\hspace{15px}$ return $\frac{1}{\sqrt{5}}\cdot \large(\Phi^n - \hat\Phi^n)$



### Dimostrazione per induzione
TODO

### Complessità
la complessità di questo metodo è costante, utilizza una sola riga di codice

### Correttezza
Per quanto riguarda la correttezza si presenta un problema dovuto ai numeri irrazionali presenti nella formula i quali non possono essere rappresentati nei computer a meno di una approssimazione, approssimazione che può portare ad errori nel calcolo del Fibonacci. Ad esempio già per calcolare il Fibonacci di 18 si presenta un errore di approssimazione che da come risultato 2583 al posto di 2584.


## Fibonacci di n usando la definizione ricorsiva

Usiamo la definizione del Fibonacci di n per calcolarlo (quella scritta ad inizio pagina)

### Pseudocodice

Fib2 (int n) -> int
$\hspace{15px}$ if  n $\leq 2$ then return 1
$\hspace{15px}$ return Fib2(n-1) + Fib2(n-2)

### Dimostrazione e correttezza
Non è necessario confermare la dimostrazione e correttezza in quanto l'algoritmo ricalca di pari passo la definizione

### Complessità
