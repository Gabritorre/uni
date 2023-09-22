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

- Casi base
	1. $n = 1$
	Dobbiamo dimostrare che $F_1 = 1$:
	$F_1 = \frac{1}{\sqrt{5}}(\Phi^1 - \hat\Phi^1)$
	$= \frac{1}{\sqrt{5}}(\frac{1+\sqrt{5}}{2} - \frac{1-\sqrt{5}}{2}) = \frac{1}{\sqrt{5}}\frac{1 + \sqrt{5} - 1 + \sqrt{5}}{2} = \frac{2\sqrt{5}}{2\sqrt{5}} = 1$
	2. $n = 2$
	Dobbiamo dimostrare che $F_2 = 1$:
	$F_2 = \frac{1}{\sqrt{5}}(\Phi^2 - \hat\Phi^2)$
	$= \frac{1}{\sqrt{5}}((\frac{1+\sqrt{5}}{2})^2 - (\frac{1-\sqrt{5}}{2})^2) = \frac{1}{\sqrt{5}}\frac{1 + 2\sqrt{5}  + 5 -1  + 2\sqrt{5} -5}{4} = \frac{4\sqrt{5}}{4\sqrt{5}} = 1$

	Casi base dimostrati
	
- Passo induttivo
la nostra ipotesi induttiva è che per ogni $k \leq n-1$ abbiamo $F_k = \frac{1}{\sqrt{5}}(\Phi^k - \hat\Phi^k)$

Quello che vogliamo dimostrare è che per ogni $n \geq 3$ vale

$$F_n = \frac{1}{\sqrt{5}}(\Phi^n - \hat\Phi^n)$$

Quindi usando la definizione di Fibonacci:

$$F_n = F_{n-1} + F_{n-2}$$
$$= \frac{1}{\sqrt{5}} (\Phi^{n-1} - \hat\Phi^{n-1}) + \frac{1}{\sqrt{5}} (\Phi^{n-2} - \hat\Phi^{n-2})$$
raccogliendo $\frac{1}{\sqrt{5}}$
$$= \frac{1}{\sqrt{5}} (\Phi^{n-1} - \hat\Phi^{n-1} + \Phi^{n-2} - \hat\Phi^{n-2})$$
isolando $\Phi$ da $\hat\Phi$
$$= \frac{1}{\sqrt{5}} ((\Phi^{n-1} + \Phi^{n-2}) - (\hat\Phi^{n-1}  + \hat\Phi^{n-2}))$$

Ora ci basta dimostrare le seguenti uguaglianze per ottenere la formula che volevamo inizialmente

$$\begin{cases}
\Phi^n = \Phi^{n-1} + \Phi^{n-2} \\
\hat\Phi^n = \hat\Phi^{n-1} + \hat\Phi^{n-2}
\end{cases}$$

Dividiamo la prima ambo i membri per $\Phi^{n-2}$ e dividiamo la seconda ambo i membri per $\hat\Phi^{n-2}$ ottenendo così

$$\begin{cases}
\Phi^2 = \Phi + 1 \\
\hat\Phi^2 = \hat\Phi + 1
\end{cases}$$

risulta vero per definizione di $\Phi$ e $\hat\Phi$ perché proprio queste due sono il risultato dell'equazione $x^2 = x +1$

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

Indicheremo con $T(n)$ la complessità dell'algoritmo mentre con $T_n$ l'albero delle ricorsioni

Abbiamo che per $n = 1$ e $n = 2$ la complessità è 1 mentre per $n\geq 3$ la complessità è data da un numero di istruzioni base cioè 2 (l'`if` che fallisce e il `return` sottostante) e la somma della complessità dei due Fibonacci precedenti.

$$T(n) = \begin{cases}
1 & n = 1, 2 \\
2 + T(n-1) + T(n-2) & n\geq 3
\end{cases}$$


Prendiamo come esempio Fibonacci di 5 e rappresentiamo l'albero delle ricorsioni:

![](https://i.ibb.co/FhJqGbR/albero-ricorsioni.png)

Nelle circonferenze sono rappresentati i nodi interni**strong text** che hanno come **complessità 2** mentre nei rettangoli sono rappresentante le **foglie** che hanno **complessità 1**
Quindi possiamo calcolare la complessità di Fibonacci di 5 facendo:

$$T(n) = \text{\#foglie} \cdot \text{complessità\_foglie} + \text{\#nodi\_interni} \cdot \text{complessità\_nodi\_intermedi}$$

Quindi nel nostro esempio
$T(5) = 5 \cdot 1+ 4 \cdot 2 = 13$

Per trovare il numero di foglie e di nodi intermedi senza rappresentare l'albero delle ricorsioni ci avvaliamo delle seguenti proposizioni:

1. Rappresentiamo con $f(T_n)$ il numero di foglie di un albero. Se $T_n$ è l'albero delle ricorsioni di Fibonacci di $n$ allora il numero di foglie è uguale al numero di Fibonacci
$$f(T_n) = F_n$$
Ad esempio $f(T_8) = 21$, $f(T_5) = 5$, $f(T_4) = 3$

2. Rappresentiamo con $i(T_n)$ il numero di nodi interni di un albero. Se $T_n$ è un albero binario allora il numero di nodi interni è uguale al numero di Fibonacci - 1
$$i(T_n) = F_n - 1$$
Ad esempio $f(T_8) = 20$, $f(T_5) = 4$, $f(T_4) = 2$

Quindi possiamo calcolare la complessità generale con la formula:

$$T(n) = 1 \cdot f(T_n) + 2\cdot i(T_n) = $$

$$1 \cdot F_n + 2(F_n - 1) = $$

$$= 3F_n -2$$

Quando si parla di complessità siamo interessati sono al fattore dominante nell'espressione, in questo caso domina $F_n$ quindi $T(n) \approx F_n$. 
ad esempio la complessità di Fibonacci di 45 è di circa 3 miliardi di istruzioni
Concludiamo che l'algoritmo non è molto efficiente
