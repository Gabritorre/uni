# Fibonacci

La sequenza di Fibonacci è una sequenza di numeri in cui ogni numero è dato dalla somma dei due numeri di Fibonacci che lo precedono.

La definizione del Fibonacci di un numero $n$ è:

$$F_n = \begin{cases}
1& \text{se } n = 1, 2 \\ 
F_{n-1} + F_{n-2} &\text{se } n >= 3
\end{cases}$$

Quindi l'inizio della sequenza di Fibonacci è $1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...$

Oltre alla definizione ricorsiva vedremo altri 3 metodi per ottenere il numero di Fibonacci

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

### Complessità temporale e spaziale
Sia la complessità spaziale che temporale di questo metodo è costante, utilizza una sola riga di codice

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

### Complessità spaziale
la complessità spaziale è lineare in quanto la memoria viene cresce fino a raggiungere le foglie poi viene continuamente deallocata e riallocata, smettendo quindi di crescere.

### Complessità temporale

Indicheremo con $T(n)$ la complessità dell'algoritmo mentre con $T_n$ l'albero delle ricorsioni

Abbiamo che per $n = 1$ e $n = 2$ la complessità è 1 mentre per $n\geq 3$ la complessità è data da un numero di istruzioni base cioè 2 (l'`if` che fallisce e il `return` sottostante) e la somma della complessità dei due Fibonacci precedenti.

$$T(n) = \begin{cases}
1 & n = 1, 2 \\
2 + T(n-1) + T(n-2) & n\geq 3
\end{cases}$$


Prendiamo come esempio Fibonacci di 5 e rappresentiamo l'albero delle ricorsioni:

![](https://i.ibb.co/FhJqGbR/albero-ricorsioni.png)

Nelle circonferenze sono rappresentati i nodi interni che hanno come **complessità 2** mentre nei rettangoli sono rappresentante le **foglie** che hanno **complessità 1**
Quindi possiamo calcolare la complessità di Fibonacci di 5 facendo:

$$T(n) = \text{\#foglie} \cdot \text{complessità\_foglie} + \text{\#nodi\_interni} \cdot \text{complessità\_nodi\_intermedi}$$

Quindi nel nostro esempio
$T(5) = 5 \cdot 1+ 4 \cdot 2 = 13$

Per trovare il numero di foglie e di nodi intermedi senza rappresentare l'albero delle ricorsioni ci avvaliamo delle seguenti **proposizioni**:

1. Rappresentiamo con $f(T_n)$ il numero di foglie di un albero. Se $T_n$ è l'albero delle ricorsioni di Fibonacci di $n$ allora il numero di **foglie è uguale al numero di Fibonacci**
$$f(T_n) = F_n$$
Ad esempio $f(T_8) = 21$, $f(T_5) = 5$, $f(T_4) = 3$

2. Rappresentiamo con $i(T_n)$ il numero di nodi interni di un albero. Se $T_n$ è un albero binario allora il **numero di nodi interni è uguale al numero di Fibonacci - 1**
$$i(T_n) = F_n - 1$$
Ad esempio $f(T_8) = 20$, $f(T_5) = 4$, $f(T_4) = 2$

Quindi possiamo calcolare la complessità generale con la formula:

$$T(n) = 1 \cdot f(T_n) + 2\cdot i(T_n) = $$

$$1 \cdot F_n + 2(F_n - 1) = $$

$$= 3F_n -2$$

Quando si parla di complessità siamo interessati sono al fattore dominante nell'espressione, in questo caso domina $F_n$ quindi $T(n) \approx F_n$. 
ad esempio la complessità di Fibonacci di 45 è di circa 3 miliardi di istruzioni
Concludiamo che l'algoritmo non è molto efficiente.
Questo grande numero di istruzione è dato dal fatto che tantissime istruzioni vengono inutilmente ripetute, ad esempio chiamata ricorsive di cui si è già calcolato il valore vengono comunque ricalcolate.

### Dimostrazione Proposizione 1

Dimostriamo per induzione che $f(T_n) = F_n$ cioè che il numero di foglie dell'albero delle ricorsioni equivale all'n-esimo numero di Fibonacci

**Caso base**
per $n = 1$ abbiamo che $F_n = 1$ e infatti abbiamo sono 1 nodo (cioè una foglia) nell'albero
per $n = 2$ abbiamo che $F_n = 1$ e infatti abbiamo sono 1 nodo (cioè una foglia) nell'albero

**Passo induttivo**
per $n \geq 0$

Per ipotesi induttivo ipotizziamo che il principio valga per ogni $n$ fino a $n-1$

Dato che un nodo dell'albero delle ricorsioni è costituito da due sottoalberi, rispettivamente $n-1$ e $n-2$ allora il numero di foglie sarà dato dalla somma delle foglie dei due sottoalberi, che, per ipotesi induttiva sono $F_{n-1}$ e $F_{n-2}$. Per la definizione di Fibonacci sappiamo che $F_{n-1} + F_{n-2} = F_n$

### Dimostrazione Proposizione 2

Dimostriamo per induzione che $i(T_n) = F_n - 1$ cioè che il numero di nodi interni di un albero binario equivale all'n-esimo numero di Fibonacci meno 1

**Caso base**
per $n = 1$ e per $n = 2$ abbiamo che $F_n = 1$ quindi $i(T_n) = 1 - 1 = 0$ infatti nell'albero abbiamo solo un nodo foglia e non nodi interni


**passo induttivo**

per $n \geq 3$

Prendiamo come riferimento il seguente albero generico

![enter image description here](https://i.ibb.co/k04FFgD/tree-1.png)

Indichiamo con $T$ l'intero albero mentre con $\hat T$ lo stesso albero però a cui sono state rimosse 2 foglie sorelle

La nostra ipotesi induttiva è che $i(\hat T) = F(\hat T) - 1$ mentre vogliamo dimostrare che $i(T) = F(T) - 1$

Dalla nostra rimozione di 2 foglie sorelle abbiamo che il loro padre è passato dall'essere un nodo interno ad essere una foglia, da qui possiamo dedurre 2 formule:

$\begin{cases}
1.\hspace{5mm}i(T) = i(\hat T) + 1 \\
2.\hspace{5mm}f(T) = f(\hat T) + 1
\end{cases}$

la prima dice che il numero di nodi interni dell'albero $T$ è dato dal numero di nodi interni di $\hat T + 1$
la seconda dice che il numero di foglie dell'albero $T$ è dato dal numero di foglie di $\hat T + 1$

Avvalendoci di queste 2 formule e l'ipotesi induttiva possiamo dimostrare la proposizione:

$i(T) = i(\hat T) + 1 \hspace{10mm}$ partiamo dalla formula 1.
$i(T) = f(\hat T) -1 + 1 \hspace{10mm}$ per ipotesi induttiva
$i(T) = f(\hat T)$
$i(T) = f( T) - 1  \hspace{10mm}$ usando la formula inversa 2.

### Proposizione 3

Esiste una terza proposizione riguardo la complessità dell'algoritmo la quale dice che per ogni $n \geq 6$ si ha $F_n \geq 2^{\frac{n}{2}}$ 

quindi per $n$ più grandi di $6$ si ha una i numeri di Fibonacci sono **più grandi di una funzione esponenziale**

#### Dimostrazione per induzione
**Caso base**
per $n = 6$  abbiamo $F_6 = 8$ e $2^{\frac{6}{2}}$ infatti $8 \geq 2^3$

**passo induttivo**
per $n \geq 7$
per ipotesi induttiva diciamo che la proprietà vale per tutti gli $n$ fino a $n-1$

Dalla definizione di Fibonacci abbiamo che 

$F_n = F_{n-1} + F_{n-2}$
per ipotesi induttiva abbiamo che $F_{n-1} \geq2^{\frac{n-1}{2}}$ e che $F_{n-2} \geq2^{\frac{n-2}{2}}$

allora 

$F_n \geq 2^{\frac{n-1}{2}} + 2^{\frac{n-2}{2}}$

scriviamo $2^{\frac{n-1}{2}}$ come $2^{\frac{n}{2}}\cdot 2^{-\frac{1}{2}}$
e scriviamo $2^{\frac{n-2}{2}}$ come $2^{\frac{n}{2}}\cdot 2^{-1}$

dalla loro somma: $2^{\frac{n}{2}}\cdot 2^{-\frac{1}{2}} + 2^{\frac{n}{2}}\cdot 2^{-1}$ possiamo raccogliere $2^{\frac{n}{2}}$ :
$2^{\frac{n}{2}}(2^{-\frac{1}{2}} +2^{-1})$ 

dato che $(2^{-\frac{1}{2}} +2^{-1})$ è una quantità $\geq 1$ (circa $1.2$ )

allora è dimostrato che  $F_n \geq 2^{\frac{n}{2}}$ 

## Fibonacci di n iterativo (v1)

### Pseudocodice
l'array in questo pseudo codice è 1-based indexing (partono da 1 e non da 0)

Fib3(int n) -> int
1. alloco la memoria per un array di interi (chiamato F) grande n elementi
2. F[1] = F[2] = 1
3. for i = 3 to n
4. $\hspace{5mm}$F[i] = F[i-1] + F[i-2]
5. return F[n]


### Correttezza

L'algoritmo è corretto in quanto ricalca la definizione

### Complessità temporale
La complessità temporale è lineare, infatti è data da:

$T(n) = 3 + (n-2) + (n-1)$
$T(n) = 2n$
$T(n) = n$

dove:
- $3$ è dato dalle istruzioni 1. 2. e 5.
- $n-2$ rappresenta quante volte viene eseguito il corpo del ciclo for (ricorda che 1 è il primo elemento e 2 è il secondo, per questo è $n-2$
- $n-1$ rappresenta quante volte viene eseguito il controllo sul ciclo for, una volta in più del corpo perchè si conta la condizione che fa terminare il for


### Complessità spaziale

Anche la complessità spaziale è lineare in quanto è data dalla dimensione dell'array


## Fibonacci di n iterativo (v2)

### Pseudocodice
l'array in questo pseudo codice è 1-based indexing (partono da 1 e non da 0)

Al posto di utilizzare un array uso 3 variabili che mi tengono conto nel numero attuale e dei due precedenti

Fib4(int n) -> int
1. a = b = 1
2. for i = 3 to n
3. $\hspace{5mm}$ c = a + b
4. $\hspace{5mm}$ a = b
5. $\hspace{5mm}$ b = c
6. return c


### Correttezza

L'algoritmo è corretto in quanto ricalca la definizione

### Complessità temporale
La **complessità temporale è lineare**, data dall'esecuzione del for.
Senza calcolare istruzione per istruzione diciamo che
$T(n) \approx n$


### Complessità spaziale
L'utilizzo di sole 3 variabili ci garantisce una **complessità spaziale costante**


## Tabella riassuntiva

![enter image description here](https://i.ibb.co/BGtgYFc/summary.png)
