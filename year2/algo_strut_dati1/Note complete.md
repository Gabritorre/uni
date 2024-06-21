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


# Calcolo della complessità di un algoritmo

Concentriamoci sul calcolare la complessità temporale di un dato algoritmo, indicato con $T(n)$ .
Ci interessiamo in particolare al **caso peggiore** su cui un determinato algoritmo deve lavorare, lo indichiamo con $O(f(n))$ , in generale O-grande di una funzione.
Generalmente vogliamo vedere come si comporta un algoritmo su un gran input.

## Complessità dei principali costrutti

Generalmente avendo due blocchi di codice sequenziali, ognuno dei quali ha una certa complessità:

![enter image description here](https://i.ibb.co/jWdpxVZ/algoritmo.png)

la complessità dell'algoritmo data dalla somma della loro complessità:

$$T(n) = O\big(f(n) + g(n)\big)$$

Andiamo a vedere la complessità dei costrutti di programmazione più comuni

### if-then-else

```c
if <cond> then
	ramo-then
else
	ramo-else
```

In questo caso la condizione viene eseguita sempre, ed ha una complessità di $O(f(n))$ 
poi o viene eseguito il `ramo-then` $(O(g(n))$ oppure il `ramo-else` $(O(h(n))$ , dato che a noi interessa il caso peggiore prenderemo quello che ha una complessità maggiore:

$$T(n) = O\big(f(n) + \max\{g(n), h(n)\}\big)$$


### Ciclo for

```c
for i = 1 to k
	<body>
```

In questo caso la complessità del `body` $(O(f(n))$ viene ripetuto `k` volte quindi:

$$T(n) = O\big(k \cdot f(n)\big)$$

possiamo avere anche più cicli for innestati, ad esempio avendo due cicli for innestati:

```c
for i = 1 to k
	for j = 1 to m
		<body>
```

anche in questo caso la complessità del `body` $(O(f(n))$ però viene ripetuto `k * m` volte quindi:

$$T(n) = O\big(k \cdot m \cdot f(n)\big)$$

possiamo avere due cicli particolari fatti in questo modo:

```c
for i = 1 to k
	for j = 1 to i
		<body>
```

Il numero di iterazioni del ciclo for interno dipende dall'iterazione del ciclo esterno.
Diciamo che viene eseguito $k$ volte un ciclo che fa $i$ iterazioni:

$$T(n)=\sum_{i=1}^{k}i = \frac{k(k+1)}{2} = \Theta(k^2)$$

### Ciclo while

```c
while <cond> do
	<body>
```

In questo caso la condizione viene eseguita sempre, ed ha una complessità di $O(f(n))$
il body avrà una complessità di $O(g(n))$

Indicando con $N(n)$ il numero massimo di iterazioni del ciclo la complessità equivale a:

$$O\big(N(n) \cdot (f(n) + g(n))\big)$$

## Esempio di algoritmo


![enter image description here](https://i.ibb.co/VpBgPzv/algo-example.png)

Indichiamo con **C** le istruzioni costanti, di cui non siamo interessati. 
Guardando i primi 2 cicli for innestati notiamo che vengono entrambi eseguiti $n$ volte quindi la complessità di quel blocco è $n^2$, il corpo del ciclo interno è comunque una istruzione costante che rispetto a $n^2$ è inconsiderabile.

Nel secondo blocco abbiamo un ciclo con una chiamata ricorsiva, per il momento anche il nostro calcolo della complessità sarà ricorsivo.

otteniamo quindi $T(n) = n^2 + 16\cdot T(\frac{n}{4})$ considerando $n > 1$ perché il `ramo-then` dell'if ha complessità più grande del `ramo-else`

# Complessità delle Ricorrenze

Vedremo 3 metodi diversi per ottenere la complessità reale di un algoritmo ricorsivo.

## Metodo dell'iterazione

Questo metodo consiste nel analizzare le prime chiamate ricorsive fino a notare un certo pattern che si ripete, riconosciuto il pattern possiamo ricondurlo fino al caso base che termina la ricorsione.

### Esempio 1
Prendiamo come esempio l'algoritmo di ricerca binaria definito come segue:

$$T(n) = \begin{cases}
c + T(\frac{n}{2}) & n \geq 2 \\
1 & n = 1
\end{cases}$$

esplicitiamo le prime chiamate ricorsive:

$$c + T\left(\frac{n}{2}\right) = $$

$$c + \left[c + T\left(\frac{n}{2^2}\right)\right] = $$

$$c + \left[c + \left[c + T\left(\frac{n}{2^3}\right)\right]\right] = $$

a questo punto ci accorgiamo che il numero di occorrenze di $c$ è lo stesso valore dell'esponente di $2$ quindi potremmo scrivere l'espressione come:

$$3c + T\left(\frac{n}{2^3}\right) = $$

è evidente il pattern che continua a proseguire, generalizziamo con $k$:

$$= kc + T\left(\frac{n}{2^k}\right)$$

La ricorsione proseguirà fino a che non incontrerà il caso base, cioè fino a quanto
$$\frac{n}{2^k} = 1$$

$$n = 2^k$$

$$k = \log_2n$$

sostituendo quindi in $kc + T\left(\frac{n}{2^k}\right)$ otteniamo la complessità

$$T(n) = c\cdot \log_2n + T(1)$$

il termine dominante è $\log n$ (non siamo interessati alla precisa base del logaritmo) quindi possiamo concludere che 

$$T(n) = \Theta(\log n)$$

### Esempio 2

$$T(n) = \begin{cases}
9\cdot T(\frac{n}{3}) + n & n \geq 2 \\
1 & n = 1
\end{cases}$$

esplicitiamo le prime chiamate ricorsive:

$$9\cdot T\left(\frac{n}{3}\right) + n =$$

$$9\cdot \left[9\cdot T\left(\frac{n}{3^2}\right) + \frac{n}{3}\right] + n =$$

$$\text{riscrivendo}$$

$$9^2\cdot T\left(\frac{n}{3^2}\right) + 3n + n =$$

$$9^2\cdot \left[ 9\cdot T\left(\frac{n}{3^3}\right) \frac{n}{3^2}\right] + 3n + n =$$

$$\text{riscrivendo}$$

$$9^3\cdot T\left(\frac{n}{3^3}\right) + 9n + 3n + n$$

A questo punto possiamo già vedere il pattern, nella parte sinistra l'esponente del $9$ e del $3$ crescono ugualmente quindi generalizziamo con $k$

$$9^k\cdot T\left(\frac{n}{3^k}\right) + 9n + 3n + n$$

per la parte destra è conveniente raccogliere $n$ e notare che sono presenti le potenze di 3

$$9^k\cdot T\left(\frac{n}{3^k}\right) + n(9 + 3 + 1)$$

$$9^k\cdot T\left(\frac{n}{3^k}\right) + n(3^2 + 3^1 + 3^0)$$

avvalendosi della variabile $k$ che abbiamo usato nella parte sinistra possiamo rappresentare $n(3^2 + 3^1 + 3^0)$ come una progressione geometrica:

$$n\cdot \sum_{i = 0}^{k-1}q^i = n\cdot \frac{q^{(k-1)+1}-1}{q-1} \hspace{10mm} q\neq 1$$

riscriviamo il punto dove eravamo rimasti come:

$$9^k\cdot T\left(\frac{n}{3^k}\right) +n\cdot \frac{3^k - 1}{2}$$

la ricorsione continuerà fino a che:

$$\frac{n}{3^k} = 1$$

$$n = 3^k$$

$$k = \log_3n$$

sostituendo ottengo la complessità

$$9^{\log_3 n}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

facendo alcuni passaggi algebrici possiamo ottenere la parte dominante

$$3^{2^{\log_3 n}}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$3^{2\cdot\log_3 n}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$3^{\log_3 n^2}\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$n^2\cdot T\left(1\right) +n \frac{3^{\log_3 n}-1}{2}$$

$$n^2\cdot 1 +n \frac{3^{\log_3 n}-1}{2}$$

$$n^2 +n \frac{n-1}{2}$$

$$n^2 + \frac{n^2-n}{2}$$

il componente dominante è $n^2$

quindi $T(n) = \Theta(n^2)$


## Metodo della sostituzione

Questo metodo consiste nell'indovinare la complessità dell'algoritmo e poi dimostrarlo tramite induzione.

### Esempio 1

$$T(n) = \begin{cases}
1 & n = 1 \\
T\left(\lfloor\frac{n}{2}\rfloor\right) + n & n \geq 2
\end{cases}$$

Ipotizzo che la complessità dell'algoritmo sia $T(n) = O(n)$

dimostriamolo per induzione, utilizzando la definizione di $O(n)$ :

$$\exist\, c > 0, \exist\, n_0 \in \mathbb{N} \backepsilon \forall\, n \geq n_0 : $$

$$T(n) \leq c \cdot n$$

**caso base**:

il caso base si presenta quando $n = 1$

$$T(1) \leq c \cdot 1$$

$$1 \leq c$$

quindi il caso base è soddisfatto per ogni $c \geq 1$

**passo induttivo**:
supponiamo per ipotesi induttiva che la proprietà valga fino a $n-1$

quello che vogliamo dimostrare è che

$$T(n) \leq c \cdot n$$

sappiamo però che 

$$T(n) = T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \hspace{5mm}\text{per la definizione di } T(n)$$

quindi

$$T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \leq c \cdot \Big\lfloor\frac{n}{2}\Big\rfloor + n$$

lavoriamo sulla parte destra:
dato che il pavimento di un numero è sicuramente minore del numero normale posso togliere il *floor* dato che non invalida il segno della disequazione.

$$T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \leq c \cdot \frac{n}{2} + n$$

$$T\left(\Big\lfloor\frac{n}{2}\Big\rfloor\right) + n \leq  \left(\frac{c}{2} + 1\right) \cdot n$$

quidi per dimostrare che:
$T(n) \leq c \cdot n \hspace{10mm}$ o in altre termini che  $T\left(\big\lfloor\frac{n}{2}\big\rfloor\right) + n \leq c \cdot n$

dobbiamo porre:

$$\frac{c}{2} + 1 \leq c$$

otteniamo

$$c \geq 2$$

quindi considerando sia il risultato del caso base che del passo induttivo concludo che la proprietà vale per $c \geq 2$

## Teorema Master

### Algoritmi divide et impera

Prima di considerare il teorema master che generalizza il calcolo della complessità degli algoritmi *divide et impera* andiamo prima a vedere cosa sono quest'ultimi.

Un algoritmo divide et impera si compone di tre fasi:

1. scomporre il problema in sottoproblemi più piccoli (*split*)
2. risolvere i sottoproblemi
3. unire le soluzioni dei sottoproblemi (*merge*)

Possiamo scrivere la complessità temporale di questi algoritmi come la somma delle complessità di queste tre fasi:

$$T(n) = T_{split}(n) + a\cdot T\left(\frac{n}{b}\right) + T_{merge}$$

possiamo unificare i tempi di *split* e *merge* ottenendo 

$$T(n) =a\cdot T\left(\frac{n}{b}\right) + f(n)$$

- $f(n)$ tempo per fare le operazioni di *split* e *merge*
- $aT\left(\frac{n}{b}\right)$ complessità totale dei sottoproblemi, dove:
	- $a$ : numero di sottoproblemi
	- $n$ : dimensione iniziale del problema
	- $T(\frac{n}{b})$ complessità di un singolo sottoproblema

Ovviamente questa formula assume che **tutti i sottoproblemi abbiano la stessa complessità temporale**

### Teorema master

Il teorema master è applicabile nei problemi che si presentano nella seguente forma

$$T(n) =a\cdot T\left(\frac{n}{b}\right) + f(n)$$

inoltre il problema deve soddisfare le seguenti condizioni:

1. $a \geq 1\hspace{10mm} a \in \mathbb{R}$ 
2. $b \geq 2\hspace{10mm} b \in \mathbb{R}$
3. $f(n) \geq 0$

data la seguente definizione della variabile $d$:

$$d = \log_ba$$

Il teorema master si divide in tre casi distinti, questi tre casi vengono generati dal confronto tra $f(n)$ cioè il tempo di *split* + *merge* e $n^d$ cioè il tempo dell'esecuzione dei sottoproblemi.

### Caso 1

Se esiste $\epsilon > 0$ per cui $f(n) = O(n^{d-\epsilon})$ allora

$$T(n) = \Theta(n^d)$$

Quindi se il tempo di *split* + *merge* cresce più lentamente del tempo di esecuzione dei sottoproblemi allora la complessità dell'algoritmo si comporta come la complessità dell'esecuzione dei sottoproblemi

### Caso 2

Se $f(n) = \Theta(n^d)$ allora

$$T(n) = \Theta(n^d\log n)$$

quindi se il tempo di *split* + *merge* è nello stesso ordine di grandezza del tempo di esecuzione dei sottoproblemi allora la complessità dell'algoritmo è simile ad essi.

### Caso 3

se esiste $\epsilon > 0$ per cui  $f(n) = \Omega(n^{d+\epsilon})$ e
se esiste $0<c<1$ per $n$ sufficientemente grande per cui vale che $a\cdot f\left(\frac{n}{b}\right) \leq c \cdot f(n)$
allora

$$T(n) = \Theta(f(n))$$

Quindi se il tempo di *split* + *merge* cresce più velocemente del tempo di esecuzione dei sottoproblemi allora la complessità dell'algoritmo si comporta come il tempo di *split* + *merge*

### Esempi

**esempio caso 2**

$$T(n) = T\left(\frac{n}{2}\right) + c$$

$a = 1$
$b = 2$
$f(n) = c$

per poter applicare il teorema master dobbiamo porci le seguenti domande:

- il problema rispetta la forma richiesta dal teorema master? si
- $a\geq 1?$ si
- $b\geq 2?$ si
- $f(n) \geq 0?$ si

possiamo applicare il teorema master.

calcoliamo $d$ :
$d = \log_21 = 0$ quindi $d = 0$

mettiamo a confronto le due funzioni $f(n)$ e $n^d$:

$f(n) = c$
$n^d = n^0 = 1$

le due funzioni appartengono allo stesso ordine, quindi siamo nel caso 2. Concludiamo che:

$$T(n) = \Theta(\log n)$$

**esempio caso 1**

$$T(n) = 9T\left(\frac{n}{3}\right) + n$$

$a = 9$
$b = 3$
$f(n) = n$

verifico le condizioni:
- forma? si
- $a\geq 1?$ si
- $b\geq 2?$ si
- $f(n) \geq 0?$ si

possiamo applicare il teorema master.

calcoliamo $d$ :
$d = \log_39 = 2$ quindi $d =2$

mettiamo a confronto le due funzioni $f(n)$ e $n^d$:

$f(n) = n$
$n^d = n^2$

siamo nel caso 1, verifichiamo quindi che per un $\epsilon > 0$ è vero che $f(n) = O(n^{2-\epsilon})$
se prendo $\epsilon = 1$ ottengo che $f(n) = O(n)$ che è vero quindi:

$$T(n) = \Theta(n^2)$$

**esempio caso 3**

$$T(n) = 3T\left(\frac{n}{9}\right) + n$$

$a = 3$
$b = 9$
$f(n) = n$

verifico le condizioni:
- forma? si
- $a\geq 1?$ si
- $b\geq 2?$ si
- $f(n) \geq 0?$ si

possiamo applicare il teorema master.

calcoliamo $d$ :
$d = \log_93 = \frac{1}{2}$ quindi $d =\frac{1}{2}$

mettiamo a confronto le due funzioni $f(n)$ e $n^d$:

$f(n) = n$
$n^d = n^\frac{1}{2} = \sqrt{n}$

Verifichiamo di essere nel caso 3:

come prima cosa verifichiamo che esista una $\epsilon > 0$ tale per cui: $f(n) = \Omega(n^{d+\epsilon})$
$n = \Omega(n^{\frac{1}{2}+\epsilon})$
scelgo $\epsilon = \frac{1}{2}$
e quindi ho che $n = \Omega(n)$

Verifichiamo anche la condizione ausiliaria:

deve esistere una $0< c <1$ per $n$ sufficientemente grande per cui vale che:
$$a\cdot f\left(\frac{n}{b}\right) \leq c \cdot f(n)$$

$$3\cdot \frac{n}{9} \leq c\cdot n$$

$$\frac{n}{3} \leq c\cdot n$$

$$\frac{1}{3} \leq c$$

Scelgo $c = \frac{1}{3}$ che è compreso tra 0 e 1 e quindi ho dimostrato il caso 3.
$T(n) = \Theta(n)$

**altro esempio caso 3**

$$T(n) = 7T\left(\frac{n}{3}\right) + n^2$$

$a = 7$
$b = 3$
$f(n) = n^2$

calcoliamo $d$ :
$d = \log_37$

mettiamo a confronto le due funzioni $f(n)$ e $n^d$:

$f(n) = n^2$
$n^d = n^{\log_3 7} \approx n^{1.7...}$

Verifichiamo di essere nel caso 3:

come prima cosa verifichiamo che esista una $\epsilon > 0$ tale per cui: $f(n) = \Omega(n^{d+\epsilon})$
$n^2 = \Omega(n^{\log_3 7+\epsilon})$
$\log_3 7 + \epsilon = 2$
$\epsilon = 2 - \log_3 7$
dato che $\log_3 7< 2$ allora $\epsilon > 0$
e quindi ho che $n^2 = \Omega(n^2)$

Verifichiamo anche la condizione ausiliaria:

deve esistere una $0< c <1$ per $n$ sufficientemente grande per cui vale che:
$$a\cdot f\left(\frac{n}{b}\right) \leq c \cdot f(n)$$

$$7\cdot \left(\frac{n}{3}\right)^2 \leq c \cdot n^2$$

$$7\cdot \frac{n^2}{9} \leq c \cdot n^2$$

$$\frac{7}{9} \leq c$$

$$\frac{7}{9} \leq c < 1$$

scelgo ad esempio $c = \frac{7}{9}$ che vale per ogni $n\geq 1$e quindi ho dimostrato il caso 3.
$T(n) = \Theta(n^2)$


**altro ulteriore ennesimo esempio caso 3**

$$T(n) = 4T\left(\frac{n}{2}\right) + 2^n$$

$a = 4$
$b = 2$
$f(n) = 2^n$

$n^{\log _2 4} = n^2$

dato che $f(n)$ è più grande allora verifichiamo di essere nel caso 3

come prima cosa verifichiamo che esista una $\epsilon > 0$ tale per cui: $f(n) = \Omega(n^{d+\epsilon})$
$2^n = \Omega(n^{2+\epsilon})$
scelgo $\epsilon = 1$
e quindi ho che $2^n = \Omega(n^3)$

Verifichiamo anche la condizione ausiliaria:

deve esistere una $0< c <1$ per $n$ sufficientemente grande per cui vale che:

$$a\cdot f\left(\frac{n}{b}\right) \leq c \cdot f(n)$$

$$4\cdot 2^{\frac{n}{2}} \leq c \cdot 2^n$$

$$2^2\cdot 2^{\frac{n}{2}} \leq c \cdot 2^n$$

$$2^{\frac{n}{2}+2} \leq c \cdot 2^n$$

$$\frac{2^{\frac{n}{2}+2}}{2^n} \leq c$$

$$\frac{2^{\frac{n}{2}+2}}{2^n} \leq c < 1$$

dobbiamo trovare il valore di $n_0$ in modo tale che "n sia sufficientemente grande" per trovare un valore di $c$

Possiamo risolvere la disequazione $\frac{2^{\frac{n}{2}+2}}{2^n} < 1$ oppure possiamo andare a tentativi sostituendo valori interi di $n$ fino a che non otteniamo un valore minore di $1$.
In questo caso troviamo che il primo valore di $n$ per cui vale tale condizione è $n=5$

infatti sostituendo $n=5$ otteniamo

$$\frac{2^{\frac{5}{2}+2}}{2^5} \leq c < 1$$

$$\frac{\sqrt{2}}{2} \leq c < 1$$

Scelgo quindi $c = \frac{\sqrt{2}}{2}$ che vale per ogni $n\geq 5$

## Dimostrazione del teorema Master

La dimostrazione si divide in 2 grandi passaggi:
1. Trasformare la formula generale in una formula non ricorsiva
2. dimostrare i singoli casi

### Step 1

Realizzando l'albero delle ricorsioni basato sulla formula:

$$T(n)  = a\cdot T\left(\frac{n}{b}\right) + f(n)$$

![enter image description here](https://i.ibb.co/7vtWHp6/image.png)

Al primo livello abbiamo un solo nodo, che rappresenta la chiamata ricorsiva iniziale che riceve un problema di dimensione $n$. Questo nodo creerà $a$ nodi figli i quali risolveranno problemi di dimensione $\frac{n}{b}$, Questa operazione si ripete fino al raggiungimento delle foglie.

Possiamo notare che:

1. ad ogni livello $i$ i nodi presenti in quel livello sono $a^i$
2. ad ogni livello $i$ la dimensione del problema di ogni nodo è $\frac{n}{b^i}$
3. il tempo che ogni nodo impiegherà a risolvere il relativo sottoproblema è una funzione della sua dimensione: $f(\frac{n}{b^i})$

Il tempo di esecuzione totale sarà pari alla somma delle complessità di ogni livello:

$$T(n) = \sum_{i = 0}^{\text{tot\_livelli}}a^i \cdot f\left(\frac{n}{b^i}\right)$$

Ora dobbiamo trovare il numero totale di livelli.

Possiamo esplicitare il caso base che avrà una complessità costante:

$$T(n) = \begin{cases}
a \cdot T(\frac{n}{b}) + f(n) & n \geq 2\\
c & n = 1
\end{cases}$$

Per trovare il numero di livelli facciamo una sostituzione per ricondurci al caso base:

$$\frac{n}{b^i} = 1$$

dal quale otteniamo il valore di $i$:

$$n = b^i$$

$$i = \log_b n$$

Possiamo quindi riscrivere la formula precedente come:

$$T(n) = \sum_{i = 0}^{\log_b n}a^i \cdot f\left(\frac{n}{b^i}\right)$$

ora concentriamoci a trovare il numero di foglie totali e il numero di nodi totali:

- numero di foglie:
	le foglie sono **l'ultimo livello** quindi quando $i = \log_b n$

	$$n_\text{foglie} = a^{\log_b n}$$
	
	$$= a^{\log_b a \cdot \log_a n}$$

	$$= (a^{\log_a n})^{\log_b a}$$

	$$= n^{\log_b a}$$

	$$= n^{d}$$

- numero totale di nodi:
	il numero di nodi è dato dalla somma dei nodi presenti su ogni livello

	$$n_\text{nodi} = \sum_{i=0}^{\log_b n}a^i$$

	che è una progressione geometrica
	
	$$= \frac{a^{\log_b n+1} -1}{a-1}$$
	
	$$= \frac{a \cdot a^{\log_b n} -1}{a-1}$$

	$$= \frac{a \cdot n^d -1}{a-1}$$

	siamo quindi nell'ordine di $\Theta(n^d)$

### Step 2

Ora andiamo ad dimostrare il teorema master caso per caso


### Caso 1

Dall'ipotesi sappiamo che $\exist \epsilon > 0, f(n) = O(n^{d-\epsilon})$

applichiamo tale ipotesi alla formula della complessità totale di un livello $i$-esimo

$$a^i \cdot f\left(\frac{n}{b^i}\right)=$$

Che per la nostra ipotesi diventa:

$$= a^i \cdot O\left(\left(\frac{n}{b^i}\right)^{d-\epsilon}\right)$$

$$= O\left(a^i\cdot\left(\frac{n}{b^i}\right)^{d-\epsilon}\right)$$

$$= O\left(a^i\cdot\frac{n^{d-\epsilon}}{(b^i)^{d - \epsilon}}\right)$$

$$= O\left(a^i\cdot\frac{n^{d-\epsilon}}{(b^i)^{d}\cdot (b^i)^{-\epsilon}}\right)$$

$$= O\left(a^i\cdot\frac{n^{d-\epsilon}}{(b^d)^{i}\cdot (b^i)^{-\epsilon}}\right)$$

dato che $d = \log_ba$ allora $(b^{d})^i$ equivale a $a^i$ che possiamo semplificare.

$$= O\left(\frac{n^{d-\epsilon}}{(b^i)^{-\epsilon}}\right)$$

$$= O\left((b^i)^\epsilon \cdot n^{d-\epsilon}\right)$$

$$= O\left((b^\epsilon)^i \cdot n^{d-\epsilon}\right)$$

Utilizzando i calcoli appena fatti calcoliamo la sommatoria della complessità di ogni livello per trovare la complessità totale

$$T(n) = \sum_{i = 0}^{\log_b n} a^i \cdot f\left(\frac{n}{b^i}\right)$$

$$= \sum_{i = 0}^{\log_b n} O\left((b^\epsilon)^i \cdot n^{d-\epsilon}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \sum_{i = 0}^{\log_b n} (b^\epsilon)^i\right)$$

la sommatoria è una progressione geometrica

$$= O\left(n^{d-\epsilon} \cdot \frac{(b^\epsilon)^{\log_b (n) +1}-1}{b^\epsilon - 1}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \frac{b^\epsilon \cdot (b^\epsilon)^{\log_b (n)}-1}{b^\epsilon - 1}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \frac{b^\epsilon \cdot (b^{\log_b n})^{\epsilon}-1}{b^\epsilon - 1}\right)$$

$$= O\left(n^{d-\epsilon} \cdot \frac{b^\epsilon \cdot n^{\epsilon}-1}{b^\epsilon - 1}\right)$$

togliamo le costanti

$$= O\left(n^{d-\epsilon} \cdot n^{\epsilon}\right)$$

$$= O\left(n^{d}\right)$$


Dato che l'algoritmo dovrà passare per tutti i $n^d$ nodi foglia quindi l'algoritmo è limitato inferiormente da $n^d$, quindi $T(n) = \Omega(n^d)$

Possiamo quindi concludere che un algoritmo che ricade in questo caso avrà complessità simile a $n^d$, quindi 
$$T(n)=\Theta(n^d)$$

### Caso 2

Dall'ipotesi sappiamo che se $f(n) = \Theta(n^{d})$ allora
$T(n) = \Theta(n^d \log n)$


applichiamo tale ipotesi alla formula della complessità totale di un livello $i$-esimo

$$a^i \cdot f\left(\frac{n}{b^i}\right)=$$

Che per la nostra ipotesi diventa:

$$a^i \cdot \Theta\left(\left(\frac{n}{b^i}\right)^d\right)$$

$$\Theta\left(a^i \cdot \frac{n^d}{(b^{i})^{d}}\right)$$

come nel caso 1 possiamo semplificare $a^i$ con $(b^d)^i$

$$\Theta\left(n^d\right)$$


Sappiamo che la complessità è data dalla seguente sommatoria:

$$\sum_{i = 0}^{\log_b n}a^i f\left(\frac{n}{b^i}\right)$$

in cui possiamo sostituire quello che abbiamo trovato prima

$$\sum_{i = 0}^{\log_b n} \Theta(n^d)$$

$$\Theta\left(\sum_{i = 0}^{\log_b n}n^d\right)$$

la sommatoria esegue $(\log_b n + 1)$ somme di $n^d$ (il $+1$ è dato dal fatto che i parte da 0 e non da 1)

$$T(n) = \Theta\left(n^d \log n\right)$$


### Caso 3

Dall'ipotesi sappiamo che $\exist \epsilon > 0,f(n) = \Omega(n^{d + \epsilon})$ e che
$\exist 0<c<1 \hspace{3mm} af(\frac{n}{b}) \leq c \cdot f(n)$

La seconda condizione ci sta dicendo che la complessità temporale del livello 0 (la radice dell'albero) è più dispendiosa della complessità dei livelli successivi. Questo accade perché il tempo di *split* + *merge* domina sulla risoluzione effettiva dei sottoproblemi.
La **formula più generale** sarebbe:

$$\forall i\geq 0 \hspace{3mm} a^if\left(\frac{n}{b^i}\right) \leq c^i \cdot f(n)$$

La complessità dell'albero è sempre dato da:

$$T(n) = \sum_{i = 0}^{\log_b n} a^i \cdot f\left(\frac{n}{b^i}\right)$$

che per la nostra ipotesi generalizzata sappiamo essere minore di:

$$\leq \sum_{i = 0}^{\log_b n} c^i \cdot f(n)$$

possiamo portare fuori $f(n)$ da quest'ultimo

$$=f(n)\sum_{i = 0}^{\log_b n} c^i$$

a questo punto possiamo eliminare la sommatoria maggiorandola con la stessa sommatoria ma che va ad infinito. Dato che $c$ è un valore sicuramente positivo allora la somma che va ad infinito sarà sicuramente più grande

$$\leq f(n)\sum_{i = 0}^{\infty} c^i$$

Una serie geometrica infinita è uguale a $\frac{1}{1-c}$:

$$=f(n)\cdot \frac{1}{1-c}$$

rimuovendo in termini costanti otteniamo che la complessità è 

$$T(n) = O(f(n))$$

per quanto riguarda il verificare che $T(n) = \Omega(f(n))$, possiamo semplicemente dedurlo dalla formula del teorema master:

$$T(n) = aT\left(\frac{n}{b}\right) + f(n)$$

dato che $aT\left(\frac{n}{b}\right)$ è sicuramente una quantità positiva allora la complessità sarà sicuramente più grande o uguale ad $f(n)$

concludiamo quindi che $T(n) = \Theta(f(n))$


# Grafi

Un **grafo** è un relazione binaria tra due insiemi:
$$G = (V, E)$$
- l'insieme dei **vertici** (o **nodi**), indicato con $V$
- l'insieme degli **archi**, indicato con $E$

I vertici contengono l'informazione, mentre gli archi sono collegamenti tra i vertici.

Vediamo ora una carrellata di diversi tipi di Grafi e alcune definizioni e proprietà legati ad essi

## Grafo orientato

Un **grafo orientato** è un grafo in cui gli archi hanno una direzione, questo significa che gli elementi all'interno dell'insieme $E$ differiscono sia per ordine che per valore:

- $V = \{1, 2, 3, 4\}$
- $E = \{(1, 2), (1, 4), (2, 2), (2, 3), (3, 1), (3, 4), (4, 2), (4, 3)\}$

L'insiemi degli archi $E \subseteq V \times V$ cioè è un sottoinsieme di coppie di nodi

(Nota la presenza sia di $(3, 4)$ che di $(4, 3)$, cioè è possibile solo perché si tratta di un grafo orientato)
graficamente lo possiamo rappresentare nel seguente modo:

![enter image description here](https://i.ibb.co/jRcX3NR/image.png)

Notiamo due definizioni particolari:
- Un **cappio** è un arco che parte da un nodo e arriva a se stesso
- Una **relazione simmetrica** sono due nodi in cui il primo è in relazione col secondo e il secondo è in relazione col primo


## Grafo non orientato

Un **grafo non orientato** è un grafo composto solo la **relazioni simmetriche**.
Nei grafi non orientati non sono presenti cappi.

Matematicamente scriviamo che
- $(i, j) \in E \iff (j, i) \in E \hspace{8mm}\text{solo relazioni simmetriche}$
- $\forall i \in V, (i, i)\, \nexists\, E\hspace{22mm}\text{assenza di cappi}$

L'insieme degli archi $E \subseteq V \times V$ cioè è un sottoinsieme di coppie dei nodi.

alternativamente si può indicare che $E \subseteq \binom{V}{2}$, dove
se consideriamo $V = \{1, 2, 3\}$

$$\binom{V}{2} = \Big\{\{1,2\}, \{1,3\}, \{2, 3\}\Big\}$$

Cioè un insieme contenente tutti i possibili sottoinsiemi di 2 elementi di $V$ in cui l'ordine non conta

Se vogliamo sapere la cardinalità di tale insieme, esso viene calcolato con il **coefficiente binomiale**

$$\Big|\binom{V}{2}\Big| = \binom{|V|}{2} = \frac{|V|!}{2!(|V|-2)!}$$

Esempio
- $V = \{1, 2, 3, 4\}$
- $E = \{(1, 2), (1, 4), (2, 3), (4, 2)\}$

graficamente lo possiamo rappresentare nel seguente modo:
![enter image description here](https://i.ibb.co/FYkFv0D/image.png)


## Proprietà

Sia $n$ il numero di nodi, $n = |V|$
Sia $m$ il numero di archi, $m = |E|$

In un **grafo orientato** Il **numero massimo di archi** è $|E| = |V|^2 = n^2$
In un **grafo non orientato** Il **numero massimo di archi** è $|E| = \frac{|V| (|V|-1)}{2} = \frac{n(n-1)}{2}$


**Grafo sparso**: se il numero di archi è circa lo stesso del numero dei nodi
**Grafo denso**: se il numero di archi è circa lo stesso del numero massimo di archi possibili

### Densità

La **densità** di un grafo si calcola nel seguente modo:

$$\delta(G) = \frac{|E|}{(\text{max numero di archi})}$$

Per quanto riguarda i **grafi orientati**:

$$\delta(G) = \frac{|E|}{|V|^2} = \frac{m}{n^2}$$

Per quanto riguarda i **grafi non orientati**:

$$\delta(G) = \frac{|E|}{|\binom{V}{2}|} = \frac{m}{\frac{n(n-1)}{2}} = \frac{2m}{n(n-1)}$$


In generale vale che

$$0 \leq \delta(G) \leq 1$$

- Se $\delta(G) = 0$ allora si parla di **grafo vuoto**, cioè **senza archi**
	Generalmente si indica con $E_n$, dove $n$ è il numero di nodi
- Se $\delta(G) = 1$ allora si parla di **grafo completo**, cioè **con tutti gli archi**
	Generalmente si indica con $K_n$, dove la $n$ è il numero di nodi

## Rappresentazione in strutture dati

Vediamo i modi in cui rappresentare un grafo in una struttura dati in memoria, abbiamo 3 principali modi:

1. Liste di adiacenza
2. Matrice di adiacenza
3. Matrice di incidenza

Definiamo innanzitutto:
- **Adiacenza**: due nodi sono adiacenti se c'è un arco che li collega
- **Incidenza**: un arco che collega due nodi è detto incidente ai due nodi


## Liste di adiacenza

Consideriamo il seguente grafo di esempio:
![enter image description here](https://i.ibb.co/K0hy9t2/image.png)

La rappresentazione tramite liste di adiacenza consiste in un array grande quanto il numero di nodi, e in ogni cella è presente un puntatore ad una lista linkata contenente i nodi raggiunti dagli archi uscenti da quel nodo.

![enter image description here](https://i.ibb.co/tMXh3QN/image.png)

L'occupazione spaziale di questa rappresentazione risulta essere $m + n$ ed è quindi conveniente per grafi sparsi (ma non per grafi densi).
Abbiamo un accesso lineare nel caso peggiore (bisogna scorrere le liste)
	
## Matrice di adiacenza

Si utilizza una matrice binaria $A_G = (a_{ij})$ di grandezza $n \times n$.
Viene chiamata binaria perché al suo interno vengono salvati i seguenti valori:

$$a_{ij}\begin{cases}1 & \text{se c'è un arco tra i vertici $i$ e $j$}\\
0& \text{se non c'è un arco tra i vertici $i$ e $j$}\end{cases}$$

Considerando lo stesso esempio delle liste di adiacenza, la matrice è la seguente

![enter image description here](https://i.ibb.co/BG92bST/image.png)

L'occupazione spaziale di questa rappresentazione risulta essere $n \cdot n$ ed è quindi conveniente per grafi densi (per grafi sparsi ci sarebbe tanto spazio sprecato).
Abbiamo un accesso costante

Nel caso di **grafo non orientato si ha sempre una matrice simmetrica**

### Traccia

Data una matrice di adiacenza di un grafo non orientato, la **traccia** si definisce come la somma degli elementi nella diagonale principale.

$$Tr(A) = \sum_{i = 1}^n a_{ii}$$

- $Tr(A) = 0 \hspace{11mm}$ in quanto nel grafo non orientato non ci sono cappi
- $Tr(A^2) = 2|E| \hspace{5mm}$ per il lemma della stretta di mano
- $Tr(A^3) = 6\cdot \text{(numero di triangolo del grafo)}$
	un triangolo è un grafo completo (cioè con tutti gli archi) composto da 3 nodi.
	il 6 è dato dal fatto che:
	un triangolo è composto da 3 nodi e ogni nodo può avere un ciclo (cammino che parte e torna a se stesso) in senso orario e antiorario (quindi 2 alternative), $3 \cdot 2 = 6$

## Matrice di incidenza

Si utilizza una matrice $A_G = (a_{ij})$ di grandezza $n \times m$ in cui nelle righe vanno i nodi mentre nelle colonne vanno gli archi.
Solitamente non si usa questa rappresentazione in presenza di cappi

Nei **grafi orientati**:

$a_{ij} = \begin{cases}
-1 & \text{nodo con arco uscente}\\
1 & \text{nodo con arco entrante}\\
0 & \text{nodo non coinvolto}
\end{cases}$

Vediamo un esempio
![enter image description here](https://i.ibb.co/txWzGTj/image.png)

In caso di grafi **non orientati** si utilizza solamente $1$ e $0$ indicando con $1$ i nodi coinvolti

## Grafi pesati

Nella definizione di un grafo possiamo aggiungere una informazione in più riguardo al peso di vertici o archi, il peso ha un significato dipendente dalla realtà di riferimento.

- $G(V, E, w)$ grafo pesato sui vertici
A ciascun vertice viene assegnato un numero reale
- $G(V, E, w)$ grafo pesato sugli archi
A ciascun arco viene assegnato un numero reale
- $G(V, E, w_1, w_2)$ grafo pesato sui vertici e sugli archi

![enter image description here](https://i.ibb.co/6P6mRYh/image.png)

## Sottografo

Dato un grafo $G=(V, E)$
un sottografo è $G' = (V', E')$ tale che

$$\begin{cases}
V' \subseteq V \\
E' \subseteq E \cap V' \times V'
\end{cases}$$

Cioè i vertici e gli archi sono un sottoinsieme di quelli del grafo $G$, Gli archi devono essere quelli che collegano il sottoinsieme dei vertici considerato.

Vediamo un esempio di un possibile sottografo di $G$
![enter image description here](https://i.ibb.co/9y5GrH1/image.png)

### Sottografo indotto

Dato un grafo $G(V, E)$ e un sottoinsieme di vertici $V' \subseteq V$

Un sottografo indotto da $V'$ è definito come

$G[V'] = (V', E')$ dove $E' = E \cap V' \times V'$

Nota che $E'$ è una uguaglianza e non un sottoinsieme, ciò significa che si devono considerare **tutti** gli archi coinvolti tra i nodi presenti in $V'$

Ad esempio nel seguente esempio considerando un sottoinsieme $V' = \{1, 2,3\}$

![enter image description here](https://i.ibb.co/sRMLWWQ/image.png)

## Cammino

Sia $G(V, E)$ un grafo, considerando due nodi $u, v \in V$ un **cammino** tra $u$ e $v$ è una sequenza di vertici $<x_0, ..., x_q> \in V$ per cui vale:

$\begin{cases}
x_0 = u \\
x_q = v \\
(x_i, x_{i+1}) \in E & \forall i = 0, ..., q-1
\end{cases}$

la terza condizione sta a significare che i nodi considerati devono essere connessi da un arco per appartenere al cammino.

La **lunghezza di un cammino** è il numero di **archi** del cammino (se si tratta di grafi non pesati)

**cammino semplice**: cammino in cui ogni nodo nel cammino si incontra solamente una volta
**cammino non semplice**: cammino in cui ogni nodo può essere incontrato più volte

Esempio

![enter image description here](https://i.ibb.co/0mfV0TF/image.png)

Vediamo 2 cammini possibili dal nodo $u = 1$ al nodo $v = 3$

1. $<1,2,1,2,3,1,2,3>$ cammino non semplice di lunghezza 7
2. $<1,2,3>$ cammino semplice di lunghezza 2

La lunghezza di un cammino semplice è al massimo $n-1$

Dimostrazione per assurdo:
Dato un grafo di $n$ nodi supponiamo per assurdo che esista un cammino semplice composto da un numero di archi $\geq n$, prendiamo il caso di esattamente $n$ archi:
Ogni arco di un cammino semplice connette un nodo già noto ad uno nuovo.
Inizialmente l'unico nodo noto è la sorgente del cammino, quindi:
- il primo arco connetterà la sorgente con il secondo nodo
- il secondo arco connetterà il secondo con il terzo
- il terzo arco connetterà il terzo con il quarto
- ...
- l'arco $n$-esimo connetterà il nodo $n$-esimo con il nodo $(n+1)$-esimo
	ma questo infrange l'ipotesi iniziale secondo cui il grafo è composto da $n$ nodi
	
## Cicli

Un **ciclo** è un cammino che parte da un nodo e torna su se stesso

$<x_0, ..., x_q>, \hspace{5mm} \text{dove }x_0 = x_q$

un ciclo composto da $n$ nodi si indica con $C_n$
In un grafo non orientato è necessario un cammino con almeno 3 vertici distinti


## Grafo aciclico

Un grafo viene detto aciclico se non presenta alcun ciclo

## Grafo connesso

Un grafo si dice connesso se presi qualsiasi 2 vertici distinti esiste sempre un cammino che li collega.

## Alberi liberi

Un albero libero (differente dal classico albero radicato che ha un nodo di partenza detto radice) è un grafo aciclico e connesso.
Come si vede dall'immagine non è presente una gerarchia

![enter image description here](https://i.ibb.co/SRbXTd9/image.png) 

Il numero di archi in un albero libero è $n-1$, con $n=$ numero di nodi dell'albero.
Il fatto che sia aciclico permette ad ogni coppia di nodi di venir collegata da un **unico** cammino

## Foresta

Una foresta è un nome per indicare un grafo aciclico, il nome deriva dal fatto che è possibile vedere un grafico aciclico come un insieme di alberi disconnessi

## Componente connessa

Dato un grafo $G=(V, E)$ una **componente connessa** è un sottoinsieme di vertici $V'\subseteq V$ tale che:

- Il grafo indotto $G[V']$ è connesso
- Se si aggiungesse un qualsiasi nodo a $V'$ allora diventa non più connesso

Ad esempio il seguente grafo (nota che si tratta di un singolo grafo) è disconnesso e possiede 3 componenti connesse: 

![enter image description here](https://i.ibb.co/yfXq5WV/image.png)

**Proprietà**: l'insieme delle componenti connesse rappresenta una **partizione** dell'insieme dei nodi del grafo.

**Partizione di un insieme** $V$: la partizione di un insieme è un insieme di sottoinsiemi di $V$ tale che:
	- Ogni sottoinsieme è disgiunto dagli altri
	- L'unione di tutti i sottoinsiemi forma l'insieme originale $V$

## Grafo complemento

Dato un grafo $G=(V, E)$, il suo complemento scritto come $\bar G = (V, \bar E)$ è un grafo con gli **stessi nodi**, e con solamente gli archi che mancano a $G$

![enter image description here](https://i.ibb.co/PtSrdBp/image.png)

Possiamo derivare che: un grafo è completo se e soltanto se il suo **complemento è un grafo vuoto** (cioè **senza archi**)

## Grafo bipartito

Un grafo bipartito è un grafo che può essere **partizionato** in due parti in cui non sono presenti archi, cioè se le partizioni sono sottografi vuoti

![enter image description here](https://i.ibb.co/0YRF7HD/image.png)

le due partizioni sono $V_L$ e $V_R$, infatti non hanno archi all'interno


# Grado nei grafi

Vediamo il concetto di grado per grafo, sia per grafi orientati che non.
Vedremo alcuni algoritmi e proprietà legate al grado.

## Grado per grafi non orientati

Per i grafi non orientati il **grado è il numero associato ad un nodo** che indica il numero di archi in cui tale nodo è coinvolto.
Dato un qualsiasi nodo $u$ il grado del nodo $u$ si indica come $\deg(u)$

$$0 \leq \deg(u) \leq n-1$$

- i nodi con grado $0$ sono chiamati **nodi isolati**
- i nodi con grado $1$ sono chiamati **nodi terminali**

![enter image description here](https://i.ibb.co/BKXtnLc/image.png)

L'**intorno** di un nodo $u$ è l'insieme di nodi ad esso adiacenti e formalmente è definito come

$$N(u) = \{v \in V | (u, v) \in E\}$$

Possiamo quindi dire che il **grado di un nodo è pari alla cardinalità del suo intorno**

**Lemma** non è possibile costruire un grafo con tutti i gradi distinti, cioè esistono almeno due nodi che hanno lo stesso grado

**Dimostrazione**: Supponiamo per assurdo che il grafo $G=(V, E)$ abbia nodi con tutti i gradi distinti...
abbiamo quindi:
un nodo di grado $0$
un nodo di grado $1$
un nodo di grado $2$
...
un nodo di grado $n-1$

é assurdo perché stiamo dicendo che esiste contemporaneamente un nodo che non è collegato con nessuno (cioè con grado $0$) e un nodo che è collegato con tutti (cioè con grado $n-1$)

### Lemma della stretta di mano

Sia $G=(V, E)$ un **grafo non orientato**, allora la somma dei gradi del grafo è un numero pari, in particolare è uguale al doppio del numero di archi.

$$\sum_{u\in V} \deg(u) = 2m$$

con $m=|E|$

 **Corollario del teorema della stretta di mano**:
 In un grafo non orientato $G=(V, E)$, il numero di vertici di grado dispari è sempre pari.

**Dimostrazione**: Dividiamo il grafo in due partizioni, una con i nodi di grado dispari e una con i nodi di grado pari:

1. $P = \{u \in V | \deg(u) \text{ è pari}\}$
2. $D = \{u \in V | \deg(u) \text{ è dispari}\}$

Dal lemma della stretta di mano possiamo scrivere che:

$$2m = \sum_{u \in V}\deg(u)$$

Dato che $P$ e $D$ sono una partizione di $V$:

$$= \sum_{u \in P}\deg(u) + \sum_{u \in D}\deg(u)$$

i gradi pari li posso scrivere come $2 \cdot h(u)$, mentre i gradi dispari li posso scrivere come $2 \cdot h(u) + 1$
Dove $h(u)$ è un numero che dipende dal nodo

$$= \sum_{u \in P}2 \cdot h(u)+ \sum_{u \in D}(2 \cdot h(u) + 1)$$

$$= 2\sum_{u \in P}h(u) + 2\sum_{u \in D}h(u) + |D|$$

$$= 2\left(\sum_{u \in P}h(u) + \sum_{u \in D}h(u)\right) + |D|$$

$$= 2\sum_{u \in V}h(u) + |D|$$

isoliamo $|D|$:

$2m= 2\sum_{u \in V}h(u) + |D|$
$|D| = 2m - 2\sum_{u \in V} h(u)$
$|D| = 2\left(m - \sum_{u \in V} h(u)\right)$

da questo notiamo che il numero di nodi con grado dispari sarà sicuramente un numero pari in quanto viene tutto moltiplicato per 2.

## Grafi regolari

Un grafo $G=(V, E)$ si dice **k-regolare** se ogni nodo del grafo ha lo stesso grado $k$

![enter image description here](https://i.ibb.co/QcKzXN3/image.png)

Il lemma della stretta di mano ci permette di fare delle considerazioni:

1. Se $G=(V, E)$ è 2-regolare allora il numero di archi è uguale al numero di nodi
	$$2m = \sum_{u\in V}\deg(u)$$
	
	$$2m = \sum_{u\in V}2$$

	$$2m = 2n$$

	$$m = n$$

2. Se $G=(V, E)$ è 3-regolare allora il numero di nodi è pari
		$$2m = \sum_{u\in V}\deg(u)$$
	
	$$2m = \sum_{u\in V}3$$

	$$2m = 3n$$

	$$2\cdot \frac{m}{3} = n$$

3. Se $G=(V, E)$ è 4-regolare allora il numero di archi è pari
		$$2m = \sum_{u\in V}\deg(u)$$
	
	$$2m = \sum_{u\in V}4$$

	$$2m = 4n$$

	$$m = 2n$$

## Grado nelle matrici di adiacenza

Nelle matrici di adiacenza per calcolare il grado di un nodo $i$ basterà sommare i valori corrispondenti alla sua riga (o colonna, dato che la matrice è simmetrica)

Consideriamo il seguente grafo

![enter image description here](https://i.ibb.co/R4SS5Th/image.png)

e rappresentiamo la matrice di adiacenza $A$ nel seguente modo

$$A = \begin{bmatrix}
0 & 1 & 1 & 1\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
\end{bmatrix}$$

Calcoliamo il quadrato della matrice: $A \times A = A^2$ i cui elementi li scriviamo generalmente come $a_{ij}^{(2)}$

$$A^2=\begin{bmatrix}
0 & 1 & 1 & 1\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
\end{bmatrix}
\times
 \begin{bmatrix}
0 & 1 & 1 & 1\\
1 & 0 & 1 & 0\\
1 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
\end{bmatrix}
 = \begin{bmatrix}
3 & 1 & 2 & 1\\
1 & 2 & 1 & 2\\
2 & 1 & 3 & 1\\
1 & 2 & 1 & 2\\
\end{bmatrix}
$$

- I numeri sulla **diagonale rappresentano il grado del nodo** corrispondente alla riga (o alla colonna).
- Gli altri numeri indicano quanti cammini di lunghezza 2 tra i nodi corrispondenti a riga e colonna

In generale possiamo scrivere che

$$a_{ij}^{(2)} = \begin{cases}
\deg(i) & \text{se $i = j$}\\
\text{numero di cammini lunghi 2 tra $i$ e $j$} & \text{se $i \neq j$}
\end{cases}$$

**Dimostriamo la diagonale**:
Date due generiche matrici:
- $A$ di dimensioni $n \times m$
- $B$ di dimensioni $m \times k$
ricordiamo che il prodotto si può fare solo se il numero di colonne di una matrice è uguale al numero di righe dell'altra.

 Generalmente gli elementi di una matrice $C$ generata dal prodotto di due matrici $A \times B$ si possono calcolare come:
$$c_{ij} = \sum_{\ell = 1}^{n} a_{i\ell} \cdot b_{\ell j}$$

Nel nostro caso abbiamo il prodotto di una matrice per se stessa, nella diagonale cioè quando gli indici sono uguali abbiamo:

$$a_{ii}^{(2)} = \sum_{k = 1}^n a_{ik} \cdot a_{ki}$$

dato che per la simmetria $a_{ik} = a_{ki}$

$$a_{ii}^{(2)} = \sum_{k = 1}^n (a_{ik})^2$$

dato che la matrice è binaria, i valori che può assumere $a_{ik}$ sono 1 e 0 ed entrambi elevati al quadrato rimangono uguali, quindi:

$$a_{ii}^{(2)} = \sum_{k = 1}^n a_{ik} = \deg(i)$$

**Dimostriamo fuori dalla diagonale**:

$$a_{ij}^{(2)} = \sum_{k = 1}^n a_{ik} \cdot a_{kj}$$

Dato che siamo su una matrice binaria: il prodotto $a_{ik} \cdot a_{kj}$ vale 1 solamente quando entrambi i valori sono 1, negli altri casi vale 0.

Quando entrambi valgono 1 significa che esiste un arco tra $i$ e $k$ e anche tra $k$ e $j$ e quindi c'è un cammino tra $i$ e $j$ lungo 2 archi.
Dato che stiamo facendo una sommatoria stiamo effettivamente contando quanti cammini ci sono tra $i$ e $j$


### Generalizzazione

In generale vale che per ogni $i\neq j$ la matrice risultante dal prodotto per se stessa $k$ volte, ha degli elementi che rappresentano il numero di cammini di lunghezza $k$ tra i nodi $i$ e $j$.

mentre per $i = j$ si ottengono il numero di cicli di lunghezza $k$ che partono dal nodo $i$ e tornano su se stesso

**Dimostrazione** per induzione su $k$
Scriviamo $A^k = A^{k-1}\times A$

**Caso base**: per $k = 1$ la condizione è già verificata in quanto i valori della matrice sono i cammini di lunghezza 1 tra i nodi $i$ e $j$, ma questi cammini sono esattamente gli archi.
per $k = 2$ vale la dimostrazione fatta in precedenza

**passo induttivo**: assumiamo che l'ipotesi valga per $k-1$ e verifichiamo per $k$.

$$a_{ij}^k = \sum_{\ell = 1}^{n} a_{i\ell}^{k-1} \cdot a_{\ell j}$$

per ipotesi induttiva $a_{i\ell}^{k-1}$ è il numero di cammini di lunghezza $k-1$ tra $i$ e $\ell$.
$a_{\ell j}$ vale 1 se e solo se esiste un arco tra $\ell$ e $j$, se infatti risultasse così allora $a_{ij}^k$ sarebbe il numero di cammini di lunghezza $k$ da $i$ a $j$
dunque la condizione è verificata

## Esercizio 

Date le seguenti 3 ipotesi:

1. Abbiamo $G=(V, E)$ grafo non orientato
2. Non esistono nodi isolati (di grado 0)
4. $|E| = |V|-1$

Vogliamo dimostrare che: esistono almeno 2 vertici con grado 1

$n = |V|$
$m = |E|$

per l'ipotesi 1 posso applicare il teorema della stretta di mano:

$$2m = \sum_{u \in V}\deg(u)$$

per ipotesi 3:

$$2(n-1) = \sum_{u \in V}\deg(u)$$

per ipotesi 2 so che $1 \leq \deg(u) \leq n-1$

Definisco $V_1$ come l'insieme dei vertici appartenenti a $V$ di grado 1.
$V_1 = \{u \in V | \deg(u) = 1\}$
Voglio quindi dimostrare che $|V_1| \geq 2$

Posso riscrivere la sommatoria come la somma tra i nodi di grado 1 e il grado degli altri nodi

$$2(n-1) = \sum_{u \in V_1}\deg(u) + \sum_{u \notin V_1} \deg(u)$$

la prima sommatoria ha tutti i $\deg(u) = 1$ quindi viene sommato 1 esattamente $|V_1|$ volte

$$2(n-1) = |V_1| + \sum_{u \notin V_1} \deg(u)$$

per la seconda sommatoria so di per certo che $\deg(u) \geq 2$, perché gradi 0 non ci sono per ipotesi 2 e i nodi di grado 1 li abbiamo già accorpati nella sommatoria precedente.
La cardinalità è calcolabile come $|V| - |V_1|$

$$2(n-1) \geq |V_1| + 2 \left(|V| - |V_1|\right)$$

(il 2 che moltiplica è dato dal fatto che stiamo impostando un limite inferiore con $\geq$ non stiamo cercando una quantità precisa e dato che il grado è almeno 2 allora mettiamo 2)

$$2n-2 \geq |V_1| + 2 |V| - 2|V_1|$$

$$2n-2 \geq 2 |V| - |V_1|$$

ricordiamo che $|V| = n$

$$2n-2 \geq 2n - |V_1|$$

$$-2 \geq -|V_1|$$

$$|V_1| \geq 2$$


## Grado nei grafi orientati

Se abbiamo un grafo orientato $G = (V, E)$, abbiamo due tipi di gradi per un nodo $i$:

- $\text{in-deg}(i)$: numero di archi entranti
- $\text{out-deg}(i)$: numero di archi uscenti 

Risulta che la somma di tutti gli archi entranti del grafo è uguale alla somma di tutti gli archi uscenti del grafo, inoltre questa quantità è uguale alla cardinalità di $E$, quindi

$$\sum_{i = 1}^n \text{in-deg}(i) = \sum_{i = 1}^n \text{out-deg}(i) = |E| = m$$

Nella matrice di adiacenza è possibile:
- calcolare $\text{in-deg}(i)$ sommando i valori alla colonna $i$-esima
- calcolare $\text{out-deg}(i)$ sommando i valori alla riga $i$-esima
 

# Isomorfismo

Siano $G_1 = (V_1, E_1)$ e $G_2=(V_2, E_2)$ due grafi non orientati (ma vale anche per gli orientati).
Come possiamo stabilire se due grafi sono uguali?
Per stabilirlo introduciamo il concetto di **isomorfismo**.

L'isomorfismo è una funzione $\Phi$ che mappa i vertici di $V_1$ in vertici di $V_2$ rispettando le seguenti proprietà
- La funzione $\Phi$ deve essere biiettiva, cioè deve essere un mapping 1 a 1
- Deve preservare l'adiacenza tra i vertici, cioè se due nodi sono adiacenti nel grafo $G_1$ lo devono essere anche i nodi corrispondenti mappati in $G_2$

Due grafi sono **isomorfi** $G_1 \simeq G_2$ se **esiste almeno un isomorfismo** tra di loro

**Due grafi sono uguali se sono isomorfi**

### Esempio

![enter image description here](https://i.ibb.co/zNty1xH/image.png)

Per dimostrare che i due grafi sono uguali dobbiamo trovare almeno un isomorfismo
$$\Phi : \{1,2,3\} \rightarrow \{a, b, c\}$$

$$\begin{cases}
1 \rightarrow b\\
2 \rightarrow c \\
3 \rightarrow a
\end{cases}$$

è  biiettiva e mantiene l'adiacenza dei nodi. 
Un altro isomorfismo sarebbe:

$$\begin{cases}
1 \rightarrow b\\
2 \rightarrow a \\
3 \rightarrow c
\end{cases}$$

Quindi i due grafi sono uguali.

## Grafo autocomplementare

Un grafo è detto autocomplementare se è isomorfo al suo complemento.

$$G \simeq \bar G$$

## Condizioni necessarie ma non sufficienti

Vediamo una serie di condizioni necessarie **ma non sufficienti** per determinare se due grafi sono isomorfi.
Nota: non è ancora stato trovato un algoritmo in tempo polinomiale per determinare se dati due grafi essi sono isomorfi

Dati $G_1 = (V_1, E_1)$ e $G_2 = (V_2, E_2)$
1. $|V_1| = |V_2|$
2. $|E_1| = |E_2|$
3. $\text{deg-seq}(G_1) = \text{deg-seq}(G_2)$
	dove la $\text{deg-seq}(G)$ è una lista contenente i gradi dei nodi di $G$ in ordine crescente
4. $G_1$ e $G_2$ hanno lo stesso numero di componenti connesse
5. $\omega(G_1) = \omega(G_2)$
	dove $\omega$ viene chiamata **clique number** (o numero di cricca in italiano).
	Una *clique* è un **sottografo completo** di $G$.
	una *clique massima* è una clique tale per cui non ne esiste un'altra con un maggior numero di nodi al suo interno.
	(una *clique massimale*  è una *clique* non contenuta in una *clique* più grande, ne deriva facilmente che una *clique massima* è anche *clique massimale*)
	il **clique number** è il numero di nodi della *clique massima*
	


# Condizioni di connettività e ciclicità

## Condizione necessaria per la connettività

Ricordiamo che un grafo $G = (V, E)$ è connesso se per ogni coppia di nodi esiste un cammino che li collega.

Se $G$ è non orientato e connesso allora vale che

$$|E| \geq |V|-1$$

nota che se un grafo ha $|E| \geq |V|-1$ non vuol dire che sia automaticamente connesso

**Dimostrazione** per induzione su $n = |V|$

**Caso base**
- n = 1:

	Abbiamo un solo nodo e quindi non ci sono archi (ricordiamo che un grafo non orientano non ha cappi)
$|E| = 1 - 1$
$0 = 0$

- n = 2:

	Abbiamo due nodi e un arco che li collega
$|E| = 2 - 1$
$1 = 1$

**passo induttivo** supponiamo che la proprietà valga fino a $n-1$ e voglio dimostrare per $n$

Considero un nodo $z \in V$ e lo rimuovo, ottengo quindi un nuovo grafo $G'$ con $n-1$ nodi.
In questa situazione però non posso dire che la proprietà vale per $G'$ in quanto in base a quale $z$ ho rimosso il grafo potrebbe essere diventato disconnesso.

Dobbiamo quindi considerare il caso in cui la rimozione porti ad una disconnessione del grafo, Indichiamo con $k$ il numero di componenti connesse di $G'$ che si generano dalla rimozione di $z$.

Ogni componente connessa $V_1, ..., V_k$ avrà un numero minore di elementi rispetto a $G$ e per definizione una componente connessa è connessa, quindi possiamo applicare la nostra ipotesi sulle singole componenti connesse.

Utilizzando $|E_i| \geq| V_i| - 1$ (che vale per ipotesi induttiva) voglio dimostrare che 

$$|E| \geq |V|-1$$

possiamo definire $|E|$ come:
$$|E| = \deg(z) +\sum_{i = 1}^{k} |E_i|$$

Quindi il numero di archi del grafo originale è dato dal numero di archi all'interno delle componenti connesse, sommato al numero di archi che coinvolgevano il nodo $z$, quindi il suo grado.

Sappiamo che $|E_i| \geq |V_i| -1$, quindi possiamo fare una maggiorazione al posto dell'uguaglianza

$$|E| \geq \deg(z) + \sum_{i = 1}^{k} \Big(|V_i| -1\Big)$$

$$|E| \geq \deg(z) + \sum_{i = 1}^{k} \Big(|V_i|\Big) -k$$

La sommatoria del numero dei nodi delle componenti connesse è uguale al numero dei nodi del grafo originale, tranne per il nodo $z$ che è stato tolto e quindi ci va un $-1$

$$|E| \geq \deg(z) + \Big(|V| -1\Big) -k$$

Il grado di $z$ sarà sicuramente maggiore o uguale di $k$ perché il grafo di partenza era connesso per ipotesi iniziali, infatti se rimuovendo il nodo $z$ si sono generate $k$ componenti connesse allora $z$ aveva **almeno** un collegamento con tali componenti connesse.

$\deg(z) \geq k$

$\deg(z) - k \geq 0$

Stabilito che $\deg(z) - k$ è positivo, dalla disequazione

$$|E| \geq \deg(z) -k + \Big(|V| -1\Big)$$

Si deriva che 

$$|E| \geq |V| -1$$


## Condizione sufficiente per la connettività

Vediamo ora una condizione sufficiente per stabilire se un grafo è connesso.

Sia $G = (V, E)$ non orientato e in cui:

$$\forall u \in V \hspace{5mm} \deg(u) \geq \frac{n-1}{2}$$

dove $n = |V|$ 

allora il grafo è connesso.

**Dimostrazione** per assurdo.
Prendiamo un grafo che segue le nostre ipotesi e che risulti, per assurdo, non connesso. Sarà quindi composto da $k \geq 2$ componenti connesse.
Per dimostrare l'assurdità ci bastano 2 componenti connesse, quindi imponiamo $k = 2$.
Se $V_1$ e $V_2$ sono le due componenti connesse allora posso scrivere che

$$|V| \geq |V_1| + |V_2|$$

- Se considero un nodo $u_1 \in V_1$ allora per la nostra ipotesi
	$\deg(u_1) \geq \frac{n-1}{2}$

	Quindi il numero di vertici di $V1$ sarà almeno:
	$|V_1| \geq \frac{n-1}{2} + 1$

	Dove $\frac{n-1}{2}$ rappresenta i nodi collegati con $u_1$ e il $+1$ rappresenta il nodo $u_1$.

	Riscrivo come $|V_1| \geq \frac{n+1}{2}$

- Se considero un nodo $u_2 \in V_2$ allora per la nostra ipotesi
$\deg(u_2) \geq \frac{n-1}{2}$

	Quindi il numero di vertici di $V1$ sarà almeno:
	$|V_2| \geq \frac{n-1}{2} + 1$

	Dove $\frac{n-1}{2}$ rappresenta i nodi collegati con $u_2$ e il $+1$ rappresenta il nodo $u_2$.

	Riscrivo come $|V_2| \geq \frac{n+1}{2}$

Allora dovrebbe valere che $|V| \geq|V_1| + |V_2|$ ma sostituendo otteniamo che 

$$n \geq \frac{n+1}{2} + \frac{n+1}{2}$$

$$n \geq n+1$$

che è assurdo

## Condizione necessaria per l'aciclicità

Se un grafo $G= (V, E)$ non orientato è aciclico allora

$$|E| \leq |V| -1$$

**Dimostrazione** per induzione su $n = |V|$
in modo molto simile alla dimostrazione della condizione necessaria della connettività

**Caso base**
come detto in precedenza il ciclo in un grafo non orientato sono necessari almeno 3 nodi:
$n = 1$, il grafo ha un solo nodo, è dunque senza archi e quindi aciclico
$n = 2$, il grafo con due nodi ha al massimo un arco e quindi non possiede cicli

**Passo induttivo** per $n\geq 3$
Assumiamo che la proprietà valga fino a $n-1$ e voglio dimostrare per $n$

Consideriamo un grafo con $n$ nodi, ne individuiamo uno, che chiamiamo $z$ e lo rimuoviamo dal grafo ottenendo il grafo $G'$.
Il grafo $G'$ sarà composto da $k$ componenti connesse $V_1, V_2, ..., V_k$
Osservazioni:
- Le componenti sono acicliche in quanto sono sottoalberi di un grafo aciclico.
- Sono anche connesse per definizione di "componenti connesse".
- Le componenti connesse saranno sicuramente composte da un numero di nodi inferiore  a $n-1$

Quindi posso applicare l'ipotesi induttiva sulle componenti connesse:


$$\forall i = 1...k\hspace{5mm} |E_i| \leq |V_i| - 1$$

Ricordiamo che voglio dimostrare che $|E| \leq |V| - 1$
partiamo dalla parte di sinistra (i passaggi sono analoghi alla dimostrazione per la condizione necessaria della connettività):

$$|E| = \sum_{i =1}^k \Big(|E_i|\Big) + \deg(z)$$

$$|E| \leq \sum_{i =1}^k \Big(|V_i| - 1\Big) + \deg(z)$$

$$|E| \leq \sum_{i =1}^k \Big(|V_i|\Big) - k + \deg(z)$$

$$|E| \leq (|V| - 1) - k + \deg(z)$$

Sicuramente $\deg(z) \leq k$, se non fosse così significherebbe che $z$ è collegato con una componente connessa tramite più di un nodo e questo significherebbe che il grafo originale avrebbe avuto un ciclo, ma per nostra ipotesi di partenza non lo deve avere.

$\deg(z) -k \leq 0$

Dato che $\deg(z) -k$ è negativo o al più $0$, se vale

$$|E| \leq (|V| - 1) + \deg(z) - k$$

allora vale anche

$$|E| \leq |V| - 1$$

## Relazione di connessione con il complementare

Vediamo, quando ci viene dato lo stato di connessione di un grafo, cosa di può dire del suo complementare:

- $G$ connesso $\implies \bar G$ connesso $?$ FALSO
	come esempio basta considerare un grafo completo.
- $G$ non connesso $\implies \bar G$ non connesso $?$ FALSO
	come esempio basta considerare un grafo completo.

- $G$ connesso $\implies \bar G$ non connesso $?$ FALSO
	come esempio basta considerare un grafo autocomplementare

- $G$ non connesso $\implies \bar G$ connesso $?$ VERO
	Supponiamo che $G$ abbia $k$ componenti connesse $V_1, ..., V_k$.
	Nel grafo complementare si avranno tutti gli archi mancanti, quindi tutti gli archi che connettono tutti i nodi di componenti connesse diverse (è possibile che anche all'interno delle componenti connesse si formino degli archi).
	Consideriamo due nodi $u, v \in V$:
	- se essi appartengono a due componenti connesse diverse nel grafo originale allora nel grafo complementare saranno sicuramente connessi direttamente da un arco.
	- se essi appartengono alla stessa componente connessa abbiamo 2 casi:
		- se nel grafo originale erano scollegati allora nel complementare saranno collegati da un arco direttamente
		- se nel grafo originale erano collegati allora nel grafo complementare esisterà sicuramente un cammino che li collega passando per un'altra componente connessa


# Minimum Spanning Tree

Partiamo col dare delle informazioni generali sugli alberi:

Con alberi ci riferiamo ad **alberi liberi**, cioè grafi aciclici connessi non gerarchici (quindi dove non è presente un nodo radice).

Se $G = (V, E)$ è un albero allora

$$|E| = |V| - 1$$

Ciò deriva dalle proprietà di grafo connesso e aciclico, infatti unendo le due caratteristiche:

- Se connesso allora vale che $|E| \geq |V| -1$
- Se aciclico allora vale che $|E| \leq |V| - 1$

Nota che si tratta di una implicazione: avere $|E| = |V| - 1$ non significa automaticamente che si tratta di un albero.

## Teorema della caratterizzazione degli alberi

Dato un grafo $G = (V, E)$ non orientato, affermare che $G$ è un albero è equivalente a tutte le seguenti affermazioni:

1. Due vertici qualsiasi di $G$ sono connessi da un unico cammino
2. $G$ è connesso ma se si rimuove un qualsiasi arco allora diventa non più connesso
3. $G$ è connesso e $|E| = |V| - 1$
4. $G$ è aciclico e $|E| = |V| - 1$
5. $G$ è aciclico ma inserendo un arco allora diventa ciclico

## Spanning Tree

*Spanning Tree* (o Albero di copertura) di un grafo $G$ connesso e non orientato è un **sottoinsieme di archi** tale che:
- Gli archi del sottoinsieme formano un albero
- Gli archi del sottoinsieme toccato tutti i nodi di $G$

Un grafo può avere più alberi di copertura, e se è connesso ne avrà sicuramente almeno uno.

$ST(G)$ è l'insieme degli *spanning tree* del grafo $G$.

Formalmente scriveremo che un albero di copertura è 

$T \subseteq E$ tale che il grafo $(V, T)$ è un albero

![enter image description here](https://i.ibb.co/2km22hN/image.png)
Vediamo come l'albero di copertura è: aciclico, connesso e tocca tutti i nodi di $G$

## Minimum Spanning Tree

Un *Minimum Spanning Tree* (MST) o albero di copertura minimo riguarda **grafi pesati sugli archi**.

Dato un grafo $G = (V, E, w)$ connesso e pesato sugli archi con pesi definiti dalla funzione $w$.

Rappresentiamo il **peso di un albero di copertura** $T$ come la somma dei pesi sui suoi archi

$$W(T) = \sum_{(u_1, u_2)\in T}w(u_1, u_2)$$

Quindi l'MST di un grafo $G$ è un sottoinsieme di archi $T$ tale che:

- $T$ è un albero di copertura
- $W(T)$ sia il minimo tra tutti i possibili alberi di copertura

Un grafo può avere più alberi di copertura minimi.

![enter image description here](https://i.ibb.co/sP5v6t0/image.png)


## Fatto cruciale degli MST

Dato un grafo connesso $G = (V, E)$, un **taglio** è una partizione dei vertici del grafo in due sottoinsiemi disgiunti: $S$ e $V \setminus  S$

Dato che il grafo è connesso **esisterà sempre almeno un arco che attraversa il taglio** qualunque taglio si consideri.
Tra gli archi che attraversano il taglio, quello con peso minore viene chiamato **arco leggero** (possono essere molteplici se hanno lo stesso peso)

![enter image description here](https://i.ibb.co/Q9cPrwN/image.png)

Il **fatto cruciale** è il seguente

> Se $(u, v)$ è un arco leggero che attraversa il taglio, allora $(u, v)$ appartiene a un MST

### Cuci e taglia

**Dimostrazione** del fatto cruciale tramite la tecnica "**cuci e taglia**".

Sia $T$ un MST di $G$, l'arco leggero che attraversa il taglio $(u, v)$ può ricadere in due casi:

1. l'arco $(u, v) \in T$ allora la condizione è già verificata
2. l'arco $(u, v) \notin T$ in questo caso utilizziamola tecnica "cuci e taglia" per cercare un altro MST che lo contenga:

	- passo "cuci": aggiungiamo l'arco $(u, v)$ all'albero di copertura minimo $T$, chiamiamo questo nuovo insieme $T'$

		$$T' = T \cup \{(u, v)\}$$
	
		Dato che $T$ è per definizione connesso e aciclico allora l'aggiunta del nuovo arco creerà sicuramente un ciclo.
		Questo significa che esisteva già un altro arco $(x,y)$ che attraversava il taglio e che adesso fa parte del ciclo creato.

	- passo "taglia": rimuoviamo da $T'$ l'altro arco già presente che attraversa il taglio e che fa parte del ciclo
		
		$$T'' = T' \setminus \{(x, y)\}$$
		
	![enter image description here](https://i.ibb.co/Qjj9Kvd/image.png)

	Per come è stato costruito $T''$ sarà sicuramente un **albero di copertura**.

	Verifichiamo che sia anche un MST:
	Dato che $T$ è un MST possiamo sicuramente dire che

	$$W(T) \leq W (T'')$$

	però il peso di $T''$ lo possiamo scrivere come

	$$W(T'') = W(T) + w(u, v) - w(x, y)$$

	Possiamo dire che $w(u, v) - w(x,y) \leq 0$ in quanto l'arco $(u, v)$ è un arco leggero (quindi l'arco $(x, y)$ o è a sua volta un arco leggero oppure ha un peso maggiore)
	Possiamo quindi scriverlo come:

	$$W(T'') \leq W(T)$$

	Quindi unendo le due disequazioni otteniamo che

	$$W(T)\leq W(T'') \leq W(T) \implies W(T'') = W(T)$$

	**Questo dimostra che anche $T''$ è un MST in quanto è un albero di copertura e ha lo stesso peso di un MST**

	**Nota**: dopo aver dimostrato questa proprietà, possiamo applicarla nella sua stessa dimostrazione, infatti essendo $T$ un MST allora il suo arco $(x, y)$ sarà un arco leggero, di conseguenza $w(u, v) = w(x, y)$ che sottratti fanno $0$ e quindi si raggiunge che $W(T'') = W(T)$

## Esercizi dimostrabili con "cuci e taglia"

**Nota** un classico errore potrebbe essere quello di eseguire prima il passo taglia e poi il passo cuci... Questo non funziona in quanto si potrebbe creare un grafo che non è un albero.

### Esercizio 1

Se $(u, v)$ **è l'unico arco leggero** che attraversa il taglio fatto su un grafo $G$ allora **ogni** MST del grafo $G$ contiene l'arco $(u, v)$

**Dimostrazione** per assurdo utilizzando "cuci e taglia"

Supponiamo per assurdo che esista un MST, che chiamiamo $T$, che non contenga l'arco $(u, v)$

- passo "cuci": 

	$$T' = T \cup \{(u, v)\}$$
	
- passo "taglia":

	$$T'' = T' \setminus \{(x, y)\}$$

$T''$ è un albero di copertura per come è stato costruito.
$W(T'') = W(T) + w(u, v) - w(x, y)$ 

Dato che c'è un **unico arco leggero** per nostra ipotesi allora $w(x, y)$ sarà maggiore di $w(u, v)$
Di conseguenza: $w(u, v) - w(x, y) < 0$ 

$W(T'') < W(T)$ 

Questo è assurdo in quanto avremmo trovato un albero di copertura con un peso minore dell'albero di partenza che era un MST.

### Esercizio 2

Sia $G = (V, E, w)$ un grafo non orientato connesso e pesato sugli archi.
Se $(u, v) \in E$ è l'arco di peso minimo in tutto il grafo (nota che non è detto che sia unico)
allora esiste un MST che contiene quell'arco

**Dimostrazione** utilizzando "cuci e taglia"

Sia $T$ il nostro MST.

- Caso A: $(u, v) \in T$ condizione già verificata
- Caso B: $(u, v) \notin T$:
	- "cuci": $T' = T \cup \{(u, v)\}$
	- "taglia": $T'' = T' \setminus \{(x, y)\}$

	$T''$ è un albero di copertura per come è stato costruito, $W(T) \leq W(T'')$.
	
	$W(T'') = W(T) + w(u, v) - w(x, y)$
	Dato che l'arco $(u, v)$ ha il peso minore di tutto il grafo allora  $w(u, v) - w(x, y) \leq 0$
	
	$W(T'') \leq W(T)$

	 $$W(T) \leq W(T'') \leq W(T) \implies W(T'') = W(T)$$

Quindi $T''$ è un MST

## Teorema fondamentale degli MST

Sia $G = (V, E, w)$ non orientato, connesso e pesato sugli archi.
Valgano le seguenti ipotesi:

1. $A \subseteq E$ è un sottoinsieme di archi contenuto in un qualunque MST di $G$
2. Sia $(S, V \setminus S)$ un taglio del grafo $G$ che "rispetta" A, cioè in cui gli archi di A non attraversano il taglio
3. Sia $(u, v) \in E$ un arco leggero che attraversa il taglio

Allora esiste un MST che contiene $A \cup \{(u, v)\}$ (si dice "l'arco $(u, v)$ è sicuro per $A$")

**Nota**: Dire che un arco $(u, v)$ è **sicuro** per $A$ significa che se si aggiunge l'arco $(u, v)$ all'insieme $A$, allora l'insieme $A$ continua ad essere un sottoinsieme di un MST

**Dimostrazione**

Sia $T \in MST(G)$ che contiene $A$

- Caso A: $(u, v) \in T$ in questo caso sia $A$ che $(u, v)$ appartengono a $T$ quindi finisce qui.
- Caso B: $(u, v) \notin T$ applico "cuci e taglia"
	- "cuci": $T' = T \cup \{(u, v)\}$
	- "taglia": $T'' = T' \setminus\{(x, y)\}$
$T''$ è un albero di copertura per come è stato costruito, $W(T) \leq W(T'')$.
$W(T'') = W(T) + w(u, v) - w(x, y)$
Dato che l'arco $(u, v)$ è un arco leggero allora 
	$w(u, v) - w(x, y) \leq 0$
	$$W(T) \leq W(T'') \leq W(T) \implies W(T'') = W(T)$$

	Quindi $T''$ è un MST che contiene $(u, v)$
	
	Adesso dobbiamo dimostrare che anche $A$ appartenga a $T''$.
	Utilizzando l'ipotesi 2 sappiamo di per certo che l'arco che abbiamo rimosso $(x, y)$ non poteva appartenere ad $A$ (perché l'arco $(x, y)$ attraversava il taglio).
	Quindi $A$ non è stato toccato e di conseguenza appartiene anch'esso a $T''$

### Corollario del teorema fondamentale

Sia $G =(V, E)$ un grafo non orientato e connesso, e valgano le seguenti ipotesi:
- Sia $A \subseteq E$  è un sottoinsieme di archi contenuto in un qualunque MST.
- Sia $C = (V_C, E_C)$ una componente connessa della foresta $G_A = (V, A)$ (ricordiamo che una foresta è un insieme di alberi disgiunti, quindi delle componenti connesse).
- Sia $(u, v)$ un arco leggero che connette $C$ ad un’altra componente connessa della foresta.

Allora esiste un MST che contiene $A \cup \{(u, v)\}$

# Algoritmi per trovare un MST

Vediamo degli algoritmi per determinare un MST di un dato grafo.

## Modello generico dell'algoritmo

Vediamo una idea generica per la ricerca di un MST:

```cpp
generic_MST(G, w)
	A = ∅		//insieme di archi che vogliamo far diventare un MST
	while (A non forma un MST) /*oppure*/ (|A| < |V| - 1)
		trova un arco (u, v) che se aggiunto ad A,
		allora A continua a rappresentare un sottoinsieme di un MST
		A = A ∪ {(u, v)}
	return A
```

Facciamo una digressione per parlare degli elementi utili per gli algoritmi che vedremo:

Immaginiamo di avere tre insiemi disgiunti la cui unione contiene i numeri naturali da $1$ a $10$:

- $S_1 = \{4, 6, \textbf{7}, 1\}$
- $S_2 = \{\textbf{2}, 3, 5\}$
- $S_3 = \{8, 9, \textbf{10}\}$

Ogni insieme ha un **rappresentante**, segnato in grassetto.

Definiamo delle particolari **operazioni** sugli insiemi:

- `make_set(x) -> {x}`: crea un insieme formato da un unico elemento `x`
- `union(x, y) ->` $S_x \cup S_y$: dove `x` e `y` sono i rappresentanti di $S_x$ e $S_y$
- `find_set(x) ->` $y:x \in S_y$: restituisce il rappresentante dell'insieme in cui è contenuto $x$

Gli insiemi si possono **rappresentare** i più modi, tra cui:

- **Liste concatenate**
- **Heap binari**

### Verifica componenti connesse

Vogliamo trovare un algoritmo che dato un grafo verifichi se si tratta di una unica componente connesse, in caso contrario restituisca tutte le sue componenti connesse.

```c
connected_components(G)
	// crea insiemi composti da un solo vertice
	for-each v in V[G]				// V[G] è l'insieme dei vertici
		make_set(v)

	// scorre tutti gli archi e se un arco collega nodi appartenenti a insiemi diversi allora li unisce
	for-each (u, v) in E[G]			// E[G] è l'insieme degli archi
		if find_set(u) != find_set(v)
			union(u, v)
```

Ad esempio dato questo grafo

![enter image description here](https://i.ibb.co/sbgM1H5/image.png)

L'algoritmo si comporta nel seguente modo:

| Step | Insiemi | arco considerato |
|:--:|:--:|:--:|
| primo ciclo for-each | $\{1\},\{2\},\{3\},\{4\},\{5\},\{6\}$ | - |
| secondo ciclo: it. 1 | $\{1, 2\},\{3\},\{4\},\{5\},\{6\}$ | $(1, 2)$ |
| secondo ciclo: it. 2 | $\{1, 2\},\{3\},\{4, 5\},\{6\}$ | $(4, 5)$ |
| secondo ciclo: it. 3 | $\{1, 2, 3\},\{4, 5\},\{6\}$ | $(1, 3)$ |
| secondo ciclo: it. 4 | $\{1, 2, 3\},\{4, 5\},\{6\}$ | $(2, 3)$ |

## Algoritmo di Kruskal

Vediamo un algoritmo pratico per trovare un MST dato un grafo, **l'algoritmo di Kruskal**.

```c
kruskal(G, w)
	A = ∅
	for-each v in V[G]
		make_set(v)

	ordino gli archi di G in modo crescente
	for-each (u, v) in E[G]
		if find_set(u) != find_set(v)
			union(u, v)
			A = A ∪ {(u, v)}
	return A
```

L’idea consiste nell’isolare inizialmente tutti i vertici del grafo, definendo alberi disgiunti formati da un singolo vertice.
A partire da tale condizione Kruskal suggerisce di considerare, iterativamente, tutti gli archi del grafo in ordine di peso non decrescente (prima i più leggeri e poi i più pesanti) e di applicare ad ogni iterazione la seguente regola:
**se i vertici dell’arco non appartengono allo stesso albero allora unisci i due alberi, altrimenti ignora l’arco** (è anche possibile vederla come: se aggiungendo ad $A$ l'arco estratto si forma un ciclo allora ignori l'arco)

**Correttezza**
L'algoritmo rispetta il **corollario del teorema fondamentali degli MST**:
L'algoritmo è corretto in quanto A per tutto l'algoritmo rimane sempre un sottoinsiemi di un MST (anche l'insieme vuoto è un sottoinsieme di ogni MST).
Ordinare gli archi in modo non decrescente ci porta a considerare prima gli archi leggeri che connettono le componenti connesse.
La foresta $G_A = (V, A)$ inizialmente è formata da $n$ componenti connesse, e man mano che si avanza con l'algoritmo le componenti saranno connesse tramite gli archi leggeri fino a che non rimarrà una sola componente connessa, cioè sono stati estratti tutti gli $|V|-1$ archi necessari per formare un MST

**Complessità**
Il primo ciclo for compie $n$ iterazioni, dove $n$ è il numero di nodi del grafo.
L'ordinamento ha costo $m \log(m)$ dove $m$ è il numero di archi.
il secondo ciclo compie $m$ iterazioni e al suo interno:
	- `find_set` ha costo $\log(m)$
	- `union` ha costo $\log(m)$
la complessità è quindi:

$$T(n, m) = O(n + m\log(m) + m\log(m)) = O(m\log (m))$$

Dove ricordiamo che $m \geq n-1$


## Esecuzione Kruskal

Consideriamo il seguente grafo

![enter image description here](https://i.ibb.co/R74dkdf/image.png)

Partendo dalla seguente foresta formata da alberi composti da un solo nodo:

![enter image description here](https://i.ibb.co/bJQW9w8/image.png)

Colleghiamo gli alberi tra loro, considerando prima gli **archi con peso minore**
![enter image description here](https://i.ibb.co/w4Jp84M/image.png)

## Algoritmo di Prim

L'algoritmo di Prim determina un MST di un grafo dato un suo nodo di partenza detto **radice**.

Nell'algoritmo di Kruskal ad ogni iterazione viene memorizzato un insieme di archi che alla fine diventa un albero.
D'altra parte l'**algoritmo di Prim** considera il grafo come un albero radicato, e **dalla sua radice fa crescere un albero di copertura**.
La costruzione dell'albero $A$ avviene servendosi di un campo particolare $\pi[u], u \in V$ associato ad ogni vertice, che conterrà un riferimento ad un altro nodo (**il predecessore**).

L'algoritmo si serve di una **coda di minima priorità** $Q$ che memorizza i vertici del grafo per estrarli, uno alla volta, sulla base del campo $\text{Key}[u], u \in V$ che contiene il minore tra i pesi degli archi di $u$ che **attraversano il taglio.**

Quindi:
- $Q$ è un insieme che contiene i vertici da estrarre
- $V\setminus Q$ contiene i vertici già estratti
- inizialmente solo la radice fa parte di $V \setminus Q$
- implicitamente ci immaginiamo un **taglio** che divide $Q$ da $V\setminus Q$
- $\text{Key}[u]$ conterrà il peso dell'arco di peso minimo di $u$
- $\pi[u]$ rappresenta il vertice di destinazione dell'arco di peso minimo di $u$.

Vediamo i passaggi dell'algoritmo

1. **Inizializzazione**:
	All'inizio l'algoritmo, $Q$ corrisponde all'insieme dei vertici $V$.
	Il campo $\text{Key}$ di ogni nodo viene inizializzato a $\infty$, tranne per la radice che viene inizializzato a $0$
	Il campo $\pi$ di ogni nodo viene inizializzato a NIL
2. **Estrazione**:
	Finche $Q$ non è vuoto, viene estratto il minimo da $Q$, cioè il vertice del grafo che non è ancora stato estratto avente il campo $\text{Key}$ minore.
	Il valore estratto viene rimosso da $Q$ e entra in $V \setminus Q$.
	L'estrazione prevede la creazione di un **taglio** che divide i nodi non ancora estratti (cioè quelli in $Q$) da quelli già estratti (cioè quelli in $V \setminus Q$)
3. **Aggiornamento campi**:
	Quando si estrae un nodo bisogna aggiornare il campo $\text{Key}$ dei nodi adiacenti al nodo estratto, in quanto viene generato un nuovo taglio (ricorda che il campo $\text{Key}$ dipende dal taglio)


```c
Prim(G, w, r)
	Q = V[G]
	for-each u in V[G]
		Key[u] = ∞
		π[u] = NIL

	Key[r] = 0
	while Q != ∅
		u = extract_min(Q)			//estrae il minimo da Q, dopo questa istruzione il valore estratto non sarà più presente in Q
		for-each v in Adj[u]		// scorre i vertici adiacenti di u
			if v in Q AND w(u, v) < Key[v]	//aggiorna i valori Key in preparazione al prossimo taglio
				Key[v] = w(u, v)
				π[v] = u
	return A = {(π[v], v) in E    t.c.    v in V\{r}}
```

**Correttezza**
L'algoritmo rispetta il teorema fondamentale degli MST, cioè ad ogni istante vale che:

$$A = \left\{(\pi_u, u) \in E\hspace{2mm} | \hspace{2mm} u \in V \setminus Q \setminus \{r\}\right\}$$

Cioè l'insieme $A$ è composto da archi $(\pi_u, u)$, e dato che $u$ è il nodo appena estratto allora fa parte di $V \setminus Q$ e $\pi_u$ è il suo predecessore che è già stato estratto prima di lui, quindi faceva già parte di $V \setminus Q$.

Una volta estratto un vertice $u$, viene scelto come successivo un vertice in modo che faccia parte di un arco leggero che attraversa il taglio tra i nodi estratti e quelli ancora da estrarre.

**Complessità**
- il primo ciclo esegue $n$ iterazioni, dove $n$ è il numero di nodi del grafo
- il ciclo while itera finche $Q$ non è vuoto. Ad ogni iterazione viene estratto un nodo, quindi il ciclo esegue $n$ iterazioni. L'estrazione in sé ha complessità $\log n$ se la immaginiamo implementata con un Heap.
	Quindi il ciclo + l'estrazione ha complessità: $n \log n$
- il ciclo for finale esegue per ogni nodo $u$, $\deg(u)$ iterazioni, quindi in totale, dopo la terminazione dell'algoritmo, vengono fatte $\deg(u)$ iterazioni (il ciclo for) su $n$ nodi (il ciclo while)
$$\sum_{i = 1}^n \deg(u_i)$$
che per il lemma della stretta di mano abbiamo visto equivalere a $2m \to m$.
Inoltre la riga contenente `Key[v] = w(u, v)` ha una complessità $\log(n)$ perché essendo implementato con un heap, esso potrebbe aver bisogno di particolari computazioni quando viene modificato.
Quindi questa sezione ha complessità $m\log n$

	$$T(n, m) = n + n\log(n) + m \log(n)$$

	Dato che $m \geq n-1$ (perché il grafo iniziale è connesso) allora domina $m \log(n)$

	$$T(n, m) = O(m \log(n))$$

## Esecuzione di Prim

### Esempio 1

Dato il seguente grafo
![enter image description here](https://i.ibb.co/VVW3sCr/image.png)

Vediamo una esecuzione grafica:
![enter image description here](https://i.ibb.co/qrhNr26/esempio-prim.png)

Vediamo come cambiano le strutture dati:
![enter image description here](https://i.ibb.co/rZTVr53/image.png)

### Esempio 2

Dato il seguente grafo
![enter image description here](https://i.ibb.co/YkVrqz5/image.png)

Considera il nodo 1 come radice.

L'ordine di estrazione dei vertici è il seguente
$$1 \to 4 \to 2 \to 3 \to 5 \to 6$$

Gli archi che compongono l'MST sono 
$$(1, 4) (1, 2) (2, 3) (1, 5) (2, 6)$$

![enter image description here](https://i.ibb.co/bQxvbCd/image.png)

# Cammini minimi

Affrontiamo il problema dei **cammini minimi**.

Lavoreremo con grafi **orientati**, non necessariamente connessi e pesati sugli archi:
- È possibile utilizzare anche grafi non orientati, trasformando un arco singolo in due archi di orientamento opposto
		![enter image description here](https://i.ibb.co/3SNN5zN/image.png)
- Inizialmente assumiamo che il peso sia un numero reale, sia positivo che negativo. Successivamente faremo assunzioni più specifiche.

## Terminologie

### Raggiungibilità

Dato un grafo $G=(V, E, w)$ orientato e pesato sugli archi, e scelti due nodi $u, v \in V$
diremo che $v$ **è raggiungibile** da $u$ se esiste un cammino tra $u$ e $v$

Il nodo da cui parte il cammino si chiamerà **sorgente**.
il nodo in cui finisce il cammino si chiamerà **destinazione**.

### Insieme di cammini

Due nodi possono avere più cammini che li connettono, indicheremo **l'insieme dei cammini** che connettono due nodi $u, v \in V$ nel seguente modo:

$$\mathscr{C}(u, v) = \{\phi | \phi \text{ è un cammino tra $u$ e $v$}\}$$

### Costo di un cammino

Definiamo il **costo (o lunghezza) di un cammino**, in grafi pesati, come la somma dei pesi sugli archi che lo compongono.

$$w(\phi) = \sum_{i = 1}^{q}w(x_{i-1}, x_i)$$

dove $q$ è l'ultimo vertice del cammino.

### Ciclo negativo

Un **ciclo negativo** è un ciclo il cui peso totale è negativo, ad esempio:

![enter image description here](https://i.ibb.co/dfhqVjq/image.png)


### Distanza

Definiamo la **distanza** tra due nodi $u, v \in V$ nel seguente modo:

$$\delta(u, v) = \begin{cases}
\underset{\phi \in \mathscr{C}(u, v)}{\min} w(\phi) & \text{se } \mathscr{C}(u, v) \neq \emptyset \\
+\infty & \text{se } \mathscr{C}(u, v) = \emptyset \\
-\infty & \text{se } \mathscr{C}(u, v) \neq \emptyset \text{ e se esiste un ciclo negativo raggiungibile dalla sorgente}
\end{cases}$$

- La **distanza** tra due nodi è quindi il **cammino di costo minimo tra i due nodi** (quando esiste).
- Il $+\infty$ si mette quando il nodo di **destinazione non è raggiungibile**
- Mentre il $-\infty$ si mette quando non esiste un cammino che è minimo, in quanto in presenza di cicli negativi esisterà sempre un cammino minore. Infatti ciclando su un ciclo negativo si decrementa all'infinito il costo del cammino.

**Nota** la distanza di un vertice con se stesso è $0$ **solo se non appartiene ad un ciclo negativo**. Altrimenti il suo costo è $-\infty$.

**Nota** se un grafo è disconnesso e sorgente e destinazione sono in componenti connesse diverse, e la **destinazione appartiene ad un ciclo negativo**, allora la **distanza tra i due nodi è comunque** $+\infty$ in quanto la destinazione non è raggiungibile.


Vediamo in verde i pesi di ogni nodo considerando come sorgente il nodo $S$ del seguente grafo **non connesso** $G$

![enter image description here](https://i.ibb.co/GJ2y80F/image.png)


## Tipologie di problemi

Abbiamo 4 tipologie di problemi sulla distanza in base alla molteplicità della sorgente e destinazione.
Nota che con "destinazione multipla" si intende **tutti gli altri nodi del grafo** che non sono la sorgente (analogo per "sorgente multipla")

1. Sorgente singola destinazione singola
	**Input**: la sorgente e la destinazione $u, v \in V$
	**Output**: la distanza tra i due nodi $\delta(u, v)$
2. Sorgente singola destinazione multipla
	**Input**: solo la sorgente $s \in V$
	**Output**: la distanza $\delta(s, v)\,  \forall v \in V$
3. Sorgente multipla destinazione singola
	**Input**: solo la destinazione $d \in V$
	**Output**: la distanza $\delta(v, d)\,  \forall v \in V$
4. Sorgente multipla destinazione multipla
	**Input**: tutti i nodi
	**Output**: la distanza $\delta(u, v)\,  \forall u, v \in V$

Non ci occuperemo di tutti i problemi, ci focalizzeremo su "Sorgente singola destinazione multipla" e "Sorgente multipla destinazione multipla":

- L'algoritmo per risolvere "Sorgente singola destinazione multipla" si può applicare anche per risolvere il problema "Sorgente multipla destinazione singola" **invertendo l'orientamento degli archi**
- L'algoritmo per risolvere "Sorgente singola destinazione singola" ha una complessità paragonabile a "Sorgente singola destinazione multipla", quindi tanto vale riapplicare quello
- Iterando l'algoritmo per "Sorgente singola destinazione multipla" si può risolvere "Sorgente multipla destinazione multipla", ma questo metodo non è il più efficiente. Vedremo un algoritmo specifico per risolvere questo problema


Per risolvere "Sorgente singola destinazione multipla" vedremo due algoritmo: quello di **Dijkstra** e quello di **Bellman-Ford**.
Mentre per risolvere "Sorgente multipla destinazione multipla" vedremo l'algoritmo di **Floyd-Warshall**.

## Strutture dati degli algoritmi

Vediamo le strutture dati utilizzate dagli algoritmi che vedremo successivamente.
Ricordiamo che il risultato che vogliamo ottenere dagli algoritmi è un valore che corrisponde al **costo del cammino minimo**, e vogliamo anche l'**insieme dei nodi attraversati dal cammino minimo**.

Per ogni vertice del grafo $u \in V$:

- $d[u]$ è la "stima" della distanza tra la sorgente e il nodo $u$, è una stima in quanto essa cambia durante l'esecuzione e solo alla fine rappresenta la distanza vera tra la sorgente e il nodo $u$.
- $\pi[u]$ è un puntatore ad un altro vertice, utile per ricostruire il cammino minimo finale

## Funzioni ausiliarie degli algoritmi

La prima funzione si occupa di inizializzare le due strutture dati

```c
init_ss(G, s) {
	for-each u in V[G]
		d[u] = +∞
		π[u] = NIL
	d[s] = 0
}
```
Il suo tempo di esecuzione è lineare rispetto al numero di nodi del grafo

La seconda funzione si occupa dell'aggiornamento delle strutture dati.
Prende in input due nodi e il peso dell'arco che li collega

```c
relax(u, v, w(u, v)) {
	if (d[v] > d[u] + w(u, v)) 
		d[v] = d[u] + w(u, v)
		π[v] = u
}
```

Il tempo di esecuzione dipende dall'implementazione.

Soffermiamoci un attimo sulla `relax`:
Ricordiamoci che durante l'esecuzione $d[v]$ rappresenta il costo del cammino migliore trovato fino a quel momento.
la funzione `relax` dice che se passando dal nodo $u$ si ottiene un costo migliore per raggiungere $v$ allora bisogna aggiornare il costo di $v$ e il suo puntatore.

![enter image description here](https://i.ibb.co/8c4MLzm/image.png)

Considerazioni sulla `relax`:

- la `relax` può modificare solo il suo secondo parametro
- se la `relax` effettua una modifica, essa migliorerà sicuramente il costo del cammino

## Proprietà cammini

Vediamo delle proprietà relative ai cammini, che ci saranno utili per gli algoritmi.

### Sottocammini

> Sottocammini di cammini minimi sono minimi

Vuol dire che se abbiamo un **cammino minimo** tra i nodi $X$ e $Z$, del tipo:

$<X, Y, N, K, Z>$

allora anche i sottocammini interni, ad esempio $<X, Y, N>$, $<Y, N, K>$,  sono a loro volta minimi.

**Dimostrazione** per assurdo

Considerando l'esempio, supponiamo per assurdo che tra $Y$ e $K$ esista un cammino di costo minore, allora ci sarebbe un cammino che collega $X$ e $Z$ con un peso minore dell'attuale cammino, questo è assurdo perché quel cammino per ipotesi era un cammino minimo, abbiamo contraddetto l'ipotesi iniziale.

### Grafo dei predecessori

Il grafo dei predecessori si indica con $G_\pi =(V_\pi, E_\pi)$ ed è un sottografo di $G$ che dipende dal campo $\pi$ dei vertici di $G$.

- $V_\pi = \{s\} \cup \{v \in V\, |\, \pi[v] \neq NIL\}$
- $E_\pi = \{(\pi[v], v) \in E \, |\, v \in V_\pi \setminus \{s\}\}$

È un grafo che si evolve durante l'algoritmo e che ad ogni step è composto solo dai vertici che hanno un predecessore in quel determinato momento (e in più il nodo sorgente)

Vediamo un esempio della sua costruzione in una fase intermedia di un algoritmo per trovare i cammini minimi.
![enter image description here](https://i.ibb.co/tzGkYdv/image.png)

Al termine degli algoritmi di dei cammini minimi $G_\pi$ farà parte del risultato, in quanto conterrà il cammino minimo effettivo

### Albero dei cammini minimi

L'albero dei cammini minimi si indica come $G' = (V', E')$ è un sottografo di $G=(V, E, w)$ in cui valgono le seguenti proprietà:
1. $V' = \{v \in V \, |\, \delta(s, v) < +\infty\}$ cioè i vertici considerati devono essere raggiungibili dalla sorgente
2. $G'$ forma un albero radicato in $s$
3. $\forall v \in V'$ l'unico cammino che connette la sorgente $s$ con il nodo $v$ in $G'$ è un cammino minimo in $G$


![enter image description here](https://i.ibb.co/Qp1Yc51/image.png)

Alla fine dell'algoritmo vogliamo che il grafo dei predecessori $G_\pi$ sia un **albero dei cammini minimi.**

### Disuguaglianza triangolare

Considerando un grafo $G = (V, E)$ con nodi $s,u,v \in V$ e un arco $(u, v) \in E$ allora vale che:

$$\delta(s, v) \leq \delta(s, u) + w(u, v)$$

Cioè il costo del cammino minimo tra $s$ e $v$ è limitato superiormente dalla distanza tra $s$ e $u$ sommata al  peso dell'arco che connette $u$ con $v$

Vediamo due esempi:
![enter image description here](https://i.ibb.co/FmS9QHH/image.png)

Nel grafo di sinistra la distanza $\delta(s, v)$ tocca il suo limite, cioè $3+1$.
Nel secondo caso c'è un percorso migliore, cioè l'arco diretto di costo $2$

**Dimostrazione**
Suddividiamo 3 casi:

- $\delta(s, u) = +\infty$ cioè $u$ non è raggiungibile da $s$, allora è sicuramente vero che $\delta(s,v)\leq + \infty + w(u, v)$ con $w(u, v)$ valore reale.
- $\delta(s, u) = -\infty$ cioè è presente un ciclo negativo tra $s$ e $u$ allora varrà che
	$\delta(s, v) \leq -\infty + w(u, v)$, ma a questo punto anche $\delta(s, v) = -\infty$ a causa del ciclo negativo, quindi è verificata la condizione
- $\delta(s, u) \in \mathbb{R}$, cioè esiste un cammino senza cicli tra $s$ e $u$, in questo caso rientriamo negli esempi sopra mostrati: se l'unico cammino per arrivare a $v$ è passando per $u$ allora $\delta(s, v)$ sarà esattamente uguale a $\delta(s, u) + w(u, v)$. Ma è possibile che esistano anche cammini migliori, cioè che $\delta(s, v) < \delta(s, v) + w(u, v)$

### Proprietà del limite inferiore

La proprietà afferma che in qualsiasi algoritmo che:
1. inizializza i dati con `init_ss`
2. usa esclusivamente la `relax` per aggiornare $d$ e $\pi$

vale che

$$\delta(s, v) \leq d[v]$$

Cioè che la distanza stimata tra $s$ e $v$ che noi definiamo come $d[v]$ non andrà mai al di sotto della distanza reale tra $s$ e $v$, che noi definiamo come $\delta(s, v)$, qualunque sia la sequenza o la quantità di `relax` che vengono eseguite.

In altre parole $\delta(s, v)$ rappresenta un **limite inferiore** per $d[v]$

Inoltre se dovesse capitare che $\delta(s, v) = d[v]$, che si dice "la distanza stimata ha agganciato la distanza reale" allora nessuna `relax` potrà modificare il valore di $d[v]$

**Dimostrazione**

Separiamo due casi:

1. Dimostrazione della proprietà subito dopo la `init_ss`:
	Per i nodi che non sono la sorgente, $d[v] = +\infty$, che verifica la proprietà:
	$$\delta(s, v) \leq + \infty$$
	
	Per la sorgente invece $d[s] = 0$ e la distanza vale, per definizione, $\delta(s, s) = 0$ 
	$$0 \leq 0$$
	
	Nel caso in cui la sorgente $s$ sia all'interno di un ciclo negativo la proprietà vale comunque, infatti $\delta(s, s) = -\infty$
	$$-\infty \leq 0$$

2. Supponiamo per assurdo che dopo una `relax` si abbia che $d[v] < \delta(s, v)$ **per la prima volta** durante l'algoritmo. Immaginiamo di trovarci nella seguente situazione

	![enter image description here](https://i.ibb.co/tLs7637/image.png)

	dopo la `relax` avremo che
	$$d[v] = d[u] + w(u, v)$$
	
	Noi però stiamo assumendo per assurdo che
		$$d[v]< \delta(s, v)$$
		
	$$d[u] + w(u, v) < \delta(s, v)$$
	
	 per la disuguaglianza triangolare possiamo scrivere che 
	$$d[u] + w(u, v) < \delta(s, v) \leq \delta(s, u) + w(u, v)$$
	
	allora possiamo scrivere che
	$$d[u] + \cancel{w(u, v)} <\delta(s, u) + \cancel{w(u, v)}$$
	
	$$d[u] < \delta(s, u)$$
	
	ma questo è assurdo in quanto l'attuale relax non è la prima ad aver infranto la proprietà come avevamo assunto inizialmente, infatti il risultato che abbiamo ottenuto dimostra che anche il nodo $u$ l'ha infranta precedentemente.

### Proprietà della convergenza

In un **cammino minimo** $<s, ..., u, v>$ se si arriva al punto in cui $d[u] = \delta(s, u)$ cioè il penultimo nodo del cammino ha già raggiunto come distanza stimata la sua distanza reale allora nella `relax` sul nodo finale si avrà $d[v] = \delta(s, v)$

**Dimostrazione**
dopo l'ultima `relax`, per la proprietà del limite inferiore abbiamo che 

$$\delta(s, v) \leq d[v]$$

la `relax` assicura che
$$d[v] \leq d[u] + w(u, v)$$

Per ipotesi possiamo riscrivere come
$$d[v] \leq \delta(s, u) + w(u, v)$$

Dato che siamo all'interno di un cammino minimo

$$\delta(s, u) + w(u, v) = \delta(s, v)$$

Abbiamo quindi raggiunto la seguente condizione

$$\delta(s, v) \leq d[v] \leq \delta(s, v)$$

$$d[v] = \delta(s, v)$$


# Algoritmo di Dijkstra

Possiamo descrivere l'algoritmo di Dijkstra nel seguente modo:
**Viene estratto un vertice alla volta, ad ogni estrazione si rilassano gli archi uscenti dal nodo estratto.**

Dijkstra fa uso di una coda di priorità $Q$ contenente le informazioni sul campo $d$ per ogni **nodo** del grafo **ancora da estrarre**.
Utilizza anche un insieme $S$ dove vengono mantenuti i **nodi già estratti**

Nota: L'algoritmo funziona solamente con archi con **pesi positivi**.
Inoltre risolve la categoria di problemi a **sorgente singola**

```c
dijkstra(G, w, s)
	init_ss(G, s)
	Q = V[G]
	S = ∅ 
	while Q != ∅
		u = extract_min(Q)
		S = S ∪ {u}
		for-each v in Adj[u]
			relax(u, v, w(u, v))
	return (d, Gπ)
```

L'algoritmo termina in quanto:
Ad ogni iterazione del `while` l'insieme `Q` diminuisce di 1.
Mentre il ciclo for avrà sempre un numero finito di iterazioni in quanto ci sarà sempre un numero finito di archi.

## Complessità

La complessità dell'algoritmo dipende dall'implementazione dell'insieme `Q`, possiamo infatti implementarlo come:
1. Heap binario
2. Array lineare

## Complessità con Heap binario

- `init_ss` avrà tempo lineare, dipendente dal numero di nodi $n$
- la `extract_min(Q)` avrà tempo $\log(n)$ in quanto va mantenuta la proprietà dell'heap, tale metodo verrà chiamato $n$ volte dal ciclo, quindi in totale si avrà una complessità $n \log (n)$
- la `relax` ha complessità $\log(n)$ in quanto va mantenuta la proprietà dell'heap, tale metodo verrà chiamato $\text{out-degree}(u)$ volte, abbiamo già osservato che la sommatoria di tutti gli $\text{out-degree}$ dei nodi del grafo è $m$, quindi in totale si avrà una complessità $m \log (n)$

La complessità totale dell'algoritmo sarà quindi

$$T(n) = n + n\log(n) + m\log(n)$$

Assumendo che il grafo sia **connesso** allora $m \geq n-1$ e quindi

$$T(n) = O(m\log(n))$$

## Complessità con array lineare

- `init_ss` avrà tempo lineare, dipendente dal numero di nodi $n$
- la `extract_min(Q)` avrà tempo $n$ in quanto va cercato il minimo, tale metodo verrà chiamato $n$ volte dal ciclo, quindi in totale si avrà una complessità $n^2$
- la `relax` ha complessità costante in quanto va aggiornato direttamente un valore dell'array, tale metodo verrà chiamato $\text{out-degree}(u)$ volte che abbiamo già osservato essere la sommatoria di tutti i gradi dei nodi è $m$, quindi in totale si avrà una complessità $m$

La complessità totale dell'algoritmo sarà quindi

$$T(n) = n + n^2 + m$$

$$T(n) = O(n^2)$$

Nota: pensare di ordinare la la coda $Q$ in modo da avere il minimo in prima posizione per ottenere una complessità $n\log n$ al posto di $n^2$ è sbagliato.
Dato che i valori all'interno di $Q$ cambiano ad ogni relax, l'ordinamento andrebbe fatto $n$ volte (alla fine di ogni iterazione del while) ottenendo così una complessità $n^2\log n$

## Confronto

Seppur a primo impatto possa sembrare sempre migliore l'implementazione con Heap binari, in realtà dipende dalla densità del grafo.
Se assumiamo che un grafo **sparso** abbia $m \approx n$
e un grafo **denso** abbia $m \approx n^2$

allora possiamo schematizzare nel seguente modo le complessità:

|  | Heap | Array |
|--|--|--|
| **Grafo sparso** | $n\log(n)$ | $n^2$ | 
| **Grafo denso** | $n^2\log(n)$ | $n^2$ |

Notiamo come per grafi **sparsi** è più conveniente utilizzare l'implementazione con **Heap** binario.
Mentre con grafi **densi** è più conveniente utilizzare l'implementazione con **Array** lineare

## Correttezza

Sia $G = (V, E, w)$ orientato, pesato sugli archi tale che i pesi $w(u, v) \geq 0$ per ogni arco $(u, v)$, Quindi solo con **pesi positivi o 0**.
Inoltre consideriamo la sorgente $s \in V$.

Allora alla fine dell'algoritmo si ha:
1. $\forall u \in V$ vale $d[u] = \delta(s, u)$
2. $G_\pi$ è un albero di cammini minimi

### Dimostrazione

Dimostriamo solo il primo punto:
Dimostrando $\forall u \in V$ che **all'atto di estrazione** di $u$ dalla coda $Q$, vale subito $d[u] = \delta(s, u)$, allora automaticamente varrà anche alla fine dell'algoritmo.

Supponiamo **per assurdo** che all'estrazione del nodo $u$, **per la prima volta**, si ha che $d[u] \neq \delta(s, u)$

Facciamo delle osservazioni:
1. $u$ non può essere la sorgente, in quanto vale che $d[s] = 0 = \delta(s, s)$ (non può essere $-\infty$ in quanto non ci sono pesi negativi)
2. nell'istante prima di estrarre $u$, vale che $S \neq \emptyset$ perché in $S$ ci sarà almeno la sorgente
3. $u$ sarà sicuramente raggiungibile da $s$ perché se non fosse così avremmo che $d[u] = +\infty = \delta(s, u)$

Consideriamo la seguente situazione, $u$ **è il prossimo nodo che verrà estratto**:
![enter image description here](https://i.ibb.co/Fx04639/image.png)

Per il punto precedente esiste un cammino minimo $\phi$ che connette $s$ con $u$, chiamiamo $(x,y)$ l'arco che attraversa il taglio tra i nodi estratti e quelli da estrarre.
$x$ è un nodo appartenente al cammino minimo e fa parte dei nodi già estratti.
$y$ è un nodo appartenente al cammino minimo e fa parte dei nodi ancora da estrarre.

L'affermazione assurda ci dice che anche se $u$ è il prossimo nodo da estrarre, comunque può esistere un cammino che connette $s$ e $u$ di costo migliore.
Noi vogliamo dimostrare che se $u$ è il prossimo nodo da estrarre allora non si può trovare un cammino migliore  che connette $s$ a $u$, cioè il cammino che abbiamo trovato ha lo stesso peso del cammino minimo $\phi$.
È evidente che se $u$ è il prossimo nodo scelto, ci sarà un arco diretto che connette un nodo appartenente ad $S$ con $u$

Facciamo delle osservazioni che ci saranno utili per la dimostrazione:
- **a)** $$d[x] = \delta(s, x)$$
	
	perché per ipotesi $u$ deve essere il primo nodo ad infrangere la proprietà, e $u$ deve ancora essere estratto
- **b)** $$d[y] = \delta(s, y)$$

	perché essendo su un cammino minimo possiamo applicare la proprietà di convergenza: quando viene estratto il nodo $x$ viene fatta la relax sull'arco uscente che va verso $y$, otteniamo che $d[y] = \delta(s, x) + w(x, y) = \delta(s, y)$

- **c)** $$d[u] \leq d[y]$$

	Dato che il prossimo nodo da estrarre è $u$ e l'estrazione viene fatta estraendo il nodo con il campo $d$ minore allora sicuramente vale che $d[u] \leq d[y]$

- **d)** $$\delta(s, y) \leq \delta(s, u)$$
	
	perché $\delta(s, u)$ è dato dalla distanza $\delta(s, y)$ sommata ai pesi dei nodi da $y$ a $u$, ma questi ultimi pesi sono tutti $\geq 0$ per ipotesi.

- **e)** $$\delta(s, u) \leq d[u]$$

	per applicazione diretta della proprietà del limite inferiore.

Se riuscissi ad ottenere 
$$\delta(s, u) \leq d[u] \leq \delta(s, u)$$

avrei dimostrato che $d[u] = \delta(s, u)$ dimostrando l'assurdità della supposizione iniziale.
Parto applicando il punto **e)**

$$\delta(s, u) \leq d[u]$$

applicando il punto **c)**

$$\delta(s, u) \leq d[u] \leq d[y]$$

applicando il punto **b)**

$$\delta(s, u) \leq d[u] \leq \delta(s, y)$$

applicando il punto **d)**

$$\delta(s, u) \leq d[u] \leq \delta(s, y) \leq \delta(s, u)$$

ho ottenuto quindi $\delta(s, u) \leq d[u] \leq \delta(s, u)$, cioè $d[u] = \delta(s, u)$

## Shift con pesi negativi

Un possibile pensiero che potrebbe generarsi è quello di shiftare i pesi in caso di pesi negativi, così da poter essere nelle condizioni di applicare Dijkstra.

Questo non sempre da un risultato corretto, vediamo un esempio:
![enter image description here](https://i.ibb.co/SDjVHY3/image.png)
Questo primo esempio sembra funzionare, infatti shiftando di $1$ riusciamo ad ottenere la stessa distanza tra i nodi $u$ e $v$ con lo stesso cammino.
Nota che il $-3$ è dovuto al fatto che nel cammino la somma dei pesi generati dallo shift è $1 \cdot 3 = 3$

![enter image description here](https://i.ibb.co/qDdv959/image.png)
In quest'altro esempio non funziona. 
Si può notare come la correttezza dipenda dal numero di archi/nodi che compongono il cammino in quanto lo shift può influenzare più o meno archi.

**Nota**: Questa problematica non si presenta negli MST in quanto essi hanno sempre un numero fisso di archi dipendente dal numero di nodi, cioè $m = n - 1$
Per questo i pesi negativi negli MST si possono usare senza problemi.

## Esempio esecuzione Dijkstra

![enter image description here](https://i.ibb.co/X3S8D1y/image.png)


# Bellman-ford

Vediamo ora un algoritmo di risoluzione di cammini minimi con sorgente singola, simile a Dijkstra ma che funziona anche con **pesi negativi** (ma non con cicli negativi).

Utilizza le stesse strutture dati ($d$ e $\pi$) e funzioni (`init_ss()`, `relax()`) di Dijkstra, ma la logica è diversa.

Possiamo sintetizzare il comportamento dell'algoritmo di bellman-ford in
"vengono eseguite $n-1$ passate, in ogni passata vengono rilassati tutti gli archi del grafo"

```c
bellman-ford(G, w, s) {
	init_ss(G, s)
	for i = 1 to n-1	// n-1 passate
		for-each (u, v) in E[G]
			relax(u, v, w(u, v))

	// l'algoritmo teoricamente è finito ma scriviamo un pezzo in più per
	// riconoscere la presenza di cicli negativi
	for-each(u, v) in E[G]
		if (d[v] > d[u] + w(u, v))
			return (false, d, π)		//ciclo negativo presente
	return (true, d, π)
}
```

L'algoritmo potrebbe concludersi alla fine dei due cicli innestati, però è necessario controllare se il grafo presenta cicli negativi prima di ritornare il risultato, se infatti fossero presenti allora i risultati calcolati non sarebbero affidabili.
Il controllo per verificare la presenza di cicli negativi avviene passando ogni arco del grafo, se viene trovato che un nodo può essere raggiunto con un cammino migliore rispetto a quello trovato dopo tutte le passate fatte, allora è presente un ciclo negativo.

## Complessità

- la `init_ss()` ha complessità lineare $n$
- il primo ciclo viene fatto $n-1$ volte, il ciclo innestato viene fatto $m$ volte. la complessità della `relax` è costante in quanto non vengono usate code di priorità. Questa parte ha complessità $\Theta(m(n-1))$
- il ciclo finale esegue $m$ iterazioni

$$T(n) = n + m(n-1) + m$$

$$T(n) = m\cdot n$$

## Correttezza

Sia $G = (V, E, w)$ orientato pesato sugli archi con sorgente $s\in V$.
- Se $G$ contiene cicli negativi **raggiungibili dalla sorgente** ritorna `false`.
- Se $G$ non contiene cicli negativi **raggiungibili dalla sorgente** allora alla fine dell'algoritmo vale che:
	1. $d[u] = \delta(s, u)\, \forall u \in V$ 
	2. $G_\pi$ è un albero di cammini minimi
	3. L'algoritmo restituisce `true`

Dimostreremo solo i punti 1, 3 e il comportamento in caso di cicli negativi

## Dimostrazione correttezza

### Dimostrazione punto 1

Dato che non ci sono cicli negativi, la distanza $\delta(s, u)$ per ogni nodo $u$ può valere:
- $\delta(s, u) = +\infty$: in caso di nodo non raggiungibile, ma questo caso di dimostra immediatamente infatti subito dopo la `init_ss()` vale subito $d[u] = +\infty = \delta(s, u)$
- $\delta(s, u) \in \mathbb{R}$: in caso di nodo raggiungibile.

Approfondiamo il secondo caso:
Se si verifica allora esisterà un cammino minimo tra $s$ e $u$.
Sia $p = <x_0, x_1, ..., x_q>$ un cammino minimo **semplice**.
Osservazioni:
- Se due nodi sono raggiungibili e in assenza di cicli negativi **esiste sempre un cammino minimo semplice**.
- Potrebbero esistere comunque cammini minimi non semplici in presenza di cicli il cui peso somma $0$
- È possibile ottenere un cammino semplice da uno non semplice rimuovendo tali cicli

**Osservazione più importante**: un cammino semplice che collega due nodi avrà al massimo $n-1$ archi, cioè potrebbe essere semplicemente un arco unico diretto, oppure un percorso che tocca tutti i nodi del grafo.
È proprio per questo motivo che l'algoritmo fa $n-1$ passate.

Dato un cammino minimo semplice che tocca tutti gli $n$ nodi del grafo possiamo dire che:
poiché il cammino è minimo, possiamo sfruttare il fatto che anche i suoi sottocammini sono minimi per applicare la **proprietà della convergenza ad ogni passata**: questo ci permette di ottenere che ad ogni passata almeno un nodo verrà agganciato alla sua distanza minima dalla sorgente.

![enter image description here](https://i.ibb.co/d29qzwt/image.png)

- dopo la `init_ss`: $d[x_0] = \delta(x_0, x_0)$ 
- dopo la prima passata: $d[x_1] = \delta(x_0, x_1)$
- dopo la seconda passata: $d[x_2] = \delta(x_0, x_2)$
- dopo la k-esima passata: $d[x_k] = \delta(x_0, x_k)$

Alla $(n-1)$-esima passata l'ultimo arco raggiungerà la sua distanza minima, questo perché ad ogni passata viene agganciata la distanza di un arco e tutti i nodi precedenti sono già stati agganciati alla loro distanza minima.

### Dimostrazione punto 3
Se alla fine l'algoritmo restituisce `true` allora vale che 

$$\forall (u, v) \in E, \hspace{5mm} d[v] \leq d[u] + w(u, v)$$

Cioè non viene mai eseguito l'`if` nell'ultimo ciclo `for`.

Dopo $n-1$ passate abbiamo visto che $d[u] = \delta(s, u)$ per ogni $u$.
Possiamo usare questa conseguenza all'interno della proprietà di disuguaglianza triangolare

ricordiamo la formula della disuguaglianza triangolare:
$$\delta(s, v) \leq \delta(s, u) + w(u, v)$$

possiamo sostituire i campi ed ottenere:

$$d[v] \leq d[u]+ w(u, v)$$

### Dimostrazione cicli negativi

Dimostriamo che in presenza di un ciclo negativo raggiungibile dalla sorgente viene ritornato `False`.

Supponiamo **per assurdo** che invece venga ritornato `True`.
Guardando il significato della parte finale dell'algoritmo possiamo dire che il corpo dell'`if` non viene mai eseguito (cioè l'algoritmo ritorna `true`) se

$$\forall (u, v) \in E \hspace{10mm} d[v] \leq d[u] + w(u, v)$$

Sia $c = <x_0, x_1, ..., x_q>$ un ciclo negativo raggiungibile dalla sorgente, cioè in cui 
- $$x_0 = x_q$$
- $$\sum_{i = 1}^{q}w(x_{i-1}, x_i) < 0$$

Se l'algoritmo (per assurdo) ritornasse `true` allora la precedente proprietà varrebbe anche per i nodi all'interno del ciclo negativo

$$\forall i = 1...q \hspace{10mm} d[x_i] \leq d[x_{i-1}] + w(x_{i-1}, x_i)$$

Scrivendo la disequazione come sommatorie, otteniamo

$$\sum_{i=1}^{q} d[x_i] \leq \sum_{i=1}^{q} d[x_{i-1}] + \sum_{i=1}^{q} w(x_{i-1}, x_i)$$

esplicitando le prime due sommatorie notiamo che sono esattamente identiche (ricordando che $x_0 = x_q \to d[x_0] = d[x_q]$)

$\sum_{i=1}^{q} d[x_i] = d[x_1] + d[x_2] + d[x_3] + ... + d[x_{q-1}] + d[x_q]$
$\sum_{i=1}^{q} d[x_{i-1}] = d[x_0] + d[x_1] + d[x_2] + ... + d[x_{q-1}]$

Quindi possiamo eliderle dalla disequazione

$$\cancel{\sum_{i=1}^{q} d[x_i]} \leq \cancel{\sum_{i=1}^{q} d[x_{i-1}]} + \sum_{i=1}^{q} w(x_{i-1}, x_i)$$

otteniamo così l'assurdo:

$$0 \leq \sum_{i=1}^{q} w(x_{i-1}, x_i)$$

Cioè ci risulta che la somma dei pesi è positiva ma per ipotesi avevamo assunto che fossimo in un ciclo negativo, cioè con la somma dei pesi minore di $0$


## Esempio esecuzione Bellman-ford

Fare un esempio passo passo all'interno di una immagine risulta un po' scomodo... un video è decisamente migliore: https://www.youtube.com/watch?v=obWXjtg0L64

Nota: l'ordine con cui si estraggono gli archi è casuale e non impatta sulla correttezza dell'algoritmo

## Confronto tra Dijkstra e Bellman-ford

ricordiamo che in caso di:
- grafo sparso: $m \approx n$
- grafo denso: $m \approx n^2$

|  | Dijkstra| Bellman-ford|
|:--:|:--:|:--:|
| **Grafo sparso** | $n\log(n)$ | $n^2$ | 
| **Grafo denso** | $n^2$ | $n^3$ |

Dijkstra risulta essere sempre migliore di Bellman-ford, ma il vantaggio di quest'ultimo è il suo funzionamento anche in presenza di pesi negativi.


# Floyd-Warshall

Occupiamoci del problema di trovare il cammino minimo tra tutte le coppie di vertici del grafo.

Un primo approccio potrebbe essere quello di eseguire l'algoritmo di Dijkstra oppure Bellman-ford tante volte quanti sono i nodi (cioè $n$ volte), cambiando ad ogni esecuzione la sorgente. 
Seppur questo metodo sia corretto, non è il modo più efficiente di risolverlo:

|  | Iterando Bellman-ford| Iterando Dijkstra |
|:--:|:--:|:--:|
| **Grafo sparso** | $n^3$ | $n^2\log(n)$ (impl. con heap) | 
| **Grafo denso** | $n^4$ | $n^3$ (impl. con array)|

Vediamo un nuovo algoritmo che ha una complessità più "stabile" indipendentemente dalla densità del grafo.

## Floyd-Warshall

L'algoritmo di Floyd-Warshall ha complessità $\Theta(n^3)$ sia con grafi sparsi che densi, inoltre funziona anche con pesi negativi (ma non cicli negativi)

Sia $G = (V, E, w)$ un grafo orientato e pesato sugli archi.

Per semplicità assumiamo che i valori dei vertici siano numeri interi sequenziali da $1$ a $n$
$V = {1, 2, 3, 4, ..., n}$
Questo perché i loro valori verranno utilizzati come indici in delle matrici.


L'algoritmo:
- prende in **input** il grafo sottoforma di una matrice $W$, contenente i pesi degli archi
- restituisce in **output** una nuova matrice $D$ contenente le distanze tra i vertici del grafo

### Input

$W$ è una matrice $n\times n$ (dove $n$ è il numero di nodi).
Indichiamo gli elementi di tale matrice con $w_{ij}$, da non confondere con il peso di un arco, indicato con $w(i, j)$

$$w_{ij} = \begin{cases}
0 & \text{se } i = j \\
w(i, j) & \text{se } i \neq j \land (i, j) \in E \\
+\infty & \text{se } i \neq j \land (i, j) \notin E
\end{cases}$$


### Output

$D$ è una matrice $n\times n$ (dove $n$ è il numero di nodi).
Indichiamo gli elementi di tale matrice con $d_{ij}$

$$d_{ij} = \delta(i, j)$$

## Algoritmo

$\begin{aligned}
& \text {Floyd-Warshall (W) } \\
& \hspace{5mm}\mathrm{n} \leftarrow \operatorname{rows}(\mathrm{W}) \\
& \hspace{5mm}D^{(0)} \leftarrow \mathrm{W} \\
& \hspace{5mm} \text {for } \mathrm{k} =1 \text { to } \mathrm{n} \\
& \hspace{10mm} \text {for } \mathrm{i} =1 \text { to } \mathrm{n} \\
& \hspace{15mm} \text {for } \mathrm{j} =1 \text { to } \mathrm{n} \\
& \hspace{20mm} d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, \hspace{4mm}d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\} \\ & \hspace{5mm} \text { return } D^{(n)}
\end{aligned}$


## Complessità

Si tratta solamente di 3 cicli for annidati che eseguono $n$ iterazioni, sono solo presenti istruzioni costanti

$$T(n) = \Theta(n^3)$$

L'algoritmo utilizza la matrice iniziale per crearne una nuova, poi utilizza quella appena creata per creare la successiva, questo comportamento si ripete $n$ volte (ad ogni iterazione del ciclo for più esterno si lavora su una matrice nuova).
L'algoritmo produce quindi un totale di $n$ matrici:

$$W = D^{(0)} \to D^{(1)} \to D^{(2)} \to D^{(3)} \to ... \to D^{(n)}$$

- $k$ indica la matrice su cui si sta lavorando in quella iterazione, come detto si aggiornano i valori di $k$ utilizzando la matrice precedente, cioè $k-1$
- $i, j$ sono degli indici utilizzati per muoversi negli elementi delle matrici

## Correttezza

Definiamo l'insieme

$$\mathscr{D}_{ij}^{(k)}  = \{p \,| p\text{ è un cammino semplice tra i nodi $i$ e $j$ in cui i valori dei vertici intermedi sono $\leq k$} \}$$

I **vertici intermedi** sono tutti i vertici del cammino tranne il primo e l'ultimo.

Nota che si parla di **valori** dei vertici e non di numero di vertici.

Vediamo un esempio:
![](https://i.ibb.co/M6rhL48/image.png)

$\mathscr{D}_{2, 7}^{(1)} = \emptyset \hspace{10mm}$ non c'è un cammino con valori nei nodi intermedi $\leq 1$
$\mathscr{D}_{2, 7}^{(2)} = \emptyset \hspace{10mm}$ non c'è un cammino con valori nei nodi intermedi $\leq 2$
$\mathscr{D}_{2, 7}^{(3)} = \emptyset \hspace{10mm}$ non c'è un cammino con valori nei nodi intermedi $\leq 3$
$\mathscr{D}_{2, 7}^{(4)} = {<2, 1, 4, 3, 7>}$
$\mathscr{D}_{2, 7}^{(5)} = {<2, 1, 4, 3, 7>, <2, 5, 3, 7>}$


**Osservazioni**:
- $\mathscr{D}_{ij}^{(k)}$ contiene almeno i cammini di $\mathscr{D}_{ij}^{(k-1)}$
- quando $k = n$ allora $\mathscr{D}_{}ij^{(n)}$ contiene i cammini semplici da $i$ a $j$ senza limitazioni sui nodi intermedi (tutti i valori dei nodi, per ipotesi, sono $\leq n$)

Alla fine dell'algoritmo noi vogliamo ottenere i cammini **minimi** tra le coppie dei nodi.

Definiamo gli elementi della matrice $D^{(k)}$, chiamati $d_{ij}^{(k)}$ come il peso del cammino **minimo** tra $i$ e $j$ dove i valori dei vertici intermedi hanno valore minore o uguale a $k$, cioè:

$$\large d_{ij}^{(k)} = \underset{p \in \mathscr{D}_{ij}^{(k)}}{\min} w(p)$$

Alla fine dell'algoritmo $k = n$, e abbiamo visto che $\mathscr{D}_{}ij^{(n)}$ contiene tutti i cammini semplici da $i$ a $j$ (senza più limitazioni sui nodi intermedi), quindi gli elementi della matrice finale $D^{(n)}$ sono

$$\large d_{ij}^{(n)} = \underset{p \in \mathscr{D}_{ij}^{(n)}}{\min} w(p)$$

Ma considerare il cammino di peso minimo tra tutti i cammini semplici da $i$ a $j$ corrisponde alla distanza reale tra i due nodi (cioè ad un cammino minimo)


$$\large d_{ij}^{(n)} = \underset{p \in \mathscr{D_{ij}^{(n)}}}{\min} w(p) = \delta(i, j)$$

$$\large d_{ij}^{(n)} = \delta(i, j)$$

### Correttezza della formula per creare la matrice

Dimostriamo la correttezza della formula

$$d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\}$$

Partiamo definendo un concetto basilare:
Se abbiamo un insieme $X$ diviso in due partizioni: $X_1, X_2$
Se vogliamo determinare il valore minimo presente in $X$ possiamo farlo nel seguente modo

$$\min\{\min X_1, \min X_2\}$$

quindi facendo il minimo tra i minimi delle due partizioni.

Trasportando questo esempio nel nostro problema immaginiamo di trovarci nel mezzo dell'esecuzione dell'algoritmo e immaginiamo di avere due nodi $i$ e $j$ e l'insieme dei cammini **semplici** che li collegano $\mathscr{D}_{ij}^{(k)}$, dividiamo questo insieme in due partizioni:
- i cammini passanti per il nodo $k$, che indichiamo con $\bar{\mathscr{D}}_{ij}^{(k)}$
- i cammini non passanti per il nodo $k$, che possiamo chiamare $\mathscr{D}_{ij}^{(k-1)}$, questo perché se stiamo dicendo che i cammini hanno nodi interni con valori minori o uguali a $k$ ma non passano per $k$ allora saranno minori o uguali a $k-1$

![enter image description here](https://i.ibb.co/vkHPZkM/image.png)

Vogliamo raggiungere questa formula

$$d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\}$$

Sappiamo che la definizione di $d_{i j}^{(k)}$ è la seguente

$$\large d_{ij}^{(k)} = \underset{p \in \mathscr{D}_{ij}^{(k)}}{\min} w(p) =$$

ma dato che $\mathscr{D}_{ij}^{(k)}$ lo abbiamo partizionato, possiamo riscrivere l'equivalenza come


$$\large= \min\left\{\underset{p \in \mathscr{D}_{ij}^{(k-1)}}{\min} w(p), \underset{p \in \bar{\mathscr{D}}_{ij}^{(k)}}{\min} w(p)\right\}$$

Il primo membro sappiamo già essere $d_{ij}^{(k-1)}$, cioè il valore sulla matrice precedente, la quale non considerava $k$ proprio come questa partizione

$$\large= \min\left\{d_{ij}^{(k-1)}, \underset{p \in \bar{\mathscr{D}}_{ij}^{(k)}}{\min} w(p)\right\}$$

Il secondo membro rappresenta i cammini semplici passanti per $k$, e proprio perché sono **semplici** sappiamo che all'interno del cammino $k$ può apparire solo una volta.
Possiamo quindi scomporre ulteriormente questo insieme in due sottoinsiemi:
- uno contenente i cammini da $i$ a $k$
- uno contenente i cammini da $k$ a $j$

Entrambi avranno quindi nodi interni minori o uguali a $k-1$, in quanto $k$ non è mai interno e può apparire solo una volta, ma sarà sempre o il nodo di partenza del sottocammino oppure il nodo destinazione.

![enter image description here](https://i.ibb.co/yYvM1zD/image.png)
Esplicitiamo l'ulteriore partizionamento che abbiamo fatto, e usiamo lo stesso ragionamento applicato ai cammini non passanti per $k$
$$\large= \min\left\{d_{ij}^{(k-1)}, \underset{p \in \mathscr{D}_{ik}^{(k-1)}}{\min} w(p) + \underset{p \in \mathscr{D}_{kj}^{(k-1)}}{\min} w(p)\right\}$$

Adesso riusciamo a riconoscere i due valori di minimo come valori presi dalla matrice precedente

- $\large d_{ik}^{(k-1)} = \underset{p \in \mathscr{D}_{ik}^{(k-1)}}{\min} w(p)$

- $\large d_{kj}^{(k-1)} = \underset{p \in \mathscr{D}_{kj}^{(k-1)}}{\min} w(p)$

Ci siamo infine ricongiunti alla formula che volevamo dimostrare 

$$\large d_{i j}^{(k)}=\min \left\{d_{i j}^{(k-1)}, \hspace{2mm}d_{i k}^{(k-1)}+d_{k j}^{(k-1)}\right\}\large$$

Abbiamo quindi capito che il significato di questa formula è: 
"Prendo il minore tra l'attuale cammino che ho per andare da $i$ a $j$ e più breve il cammino per andare da $i$ a $j$ passando per il nodo $k$ (cioè il cammino da $i$ a $k\, +$ il cammino tra $k$ e $j$)"

## Ottimizzazioni

È possibile limitare l'uso spaziale dell'algoritmo ad una sola matrice anziché $n$ matrici, purché vengano soddisfatte due condizioni:

### Prima condizione

Se non esistono cicli negativi allora per ogni matrice $k$ vale che la diagonale principale è tutta uguale a $0$

$$\forall k = 1, ..., n : d_{ii}^{(k)} = 0 \hspace{5mm} \forall i = 1, ..., n$$

**Dimostrazione per induzione** su $k$

- Caso base: $k = 0$
	La matrice $D^{(0)}$ è uguale alla matrice passata in input $W$, e quest'ultima per definizione ha la diagonale principale inizializzata a $0$
- Passo induttivo: $k > 0$
	Assumiamo che la proprietà valga fino a $k-1$, dimostriamo la proprietà per $k$
	Sappiamo che tutti gli elementi della matrice $k$, e quindi anche quelli nella diagonale principale sono definiti come segue
	$$d_{ii}^{(k)} = \min \left\{d_{i i}^{(k-1)}, d_{i k}^{(k-1)}+d_{k i}^{(k-1)}\right\}$$
	
	per ipotesi induttiva $d_{i i}^{(k-1)} = 0$
	mentre $d_{i k}^{(k-1)}+d_{k i}^{(k-1)} \geq 0\,\,\,$ se non fosse così significa che il cammino per andare da $i$ a se stesso passando da $k$ avrebbe un peso negativo e quindi ci sarebbe un ciclo negativo.

	il minimo tra $0$ e un valore $\geq 0$ sarà quindi sempre $0$

Nota: è possibile determinare la presenza di un ciclo negativo se appare un numero negativo sulla diagonale principale

### Seconda condizione


Se dati tre vertici $i$, $j$ e $k$ vale che

$$\begin{cases}
d_{ik}^{(k)} = d_{ik}^{(k-1)} \\
d_{kj}^{(k)} = d_{kj}^{(k-1)} 
\end{cases}$$ 

Cioè la riga e la colonna $k$-esima della matrice $D^{(k)}$ rimangono invariate rispetto alla matrice precedente

**Dimostrazione** per definizione di $d_{ik}^{(k)}$ si ha che

$$d_{ik}^{(k)} = \min \left\{d_{i k}^{(k-1)}, d_{i k}^{(k-1)} + d_{k k}^{(k-1)}\right\}$$

Dato che $d_{k k}^{(k-1)} = 0$ perché si trova sulla diagonale allora rimane che 

$$d_{ik}^{(k)} = d_{i k}^{(k-1)}$$


## Esempio di esecuzione Floyd-Warshall

Link al video di esempio: https://www.youtube.com/watch?v=4OQeCuLYj-4


# Algoritmi greedy

Gli algoritmi greedy sono una categoria di algoritmi che utilizzano il seguente approccio:
Durante l'esecuzione è possibile che si presentino un insieme di scelte e ad ogni scelta si cerca sempre di scegliere l'opzione ottimale, con lo scopo che tutte le scelte ottimali portino ad una soluzione ottimale.

Algoritmi come **Kruskal** (sceglie sempre l'arco più leggero), **Prim** (sceglie sempre il vertice con campo `key` minore) e **Dijkstra** (sceglie sempre il vertice con campo `d` minore) sono algoritmi greedy

D'altra parte Bellman-ford e Floyd-Warshall non sono algoritmi greedy

## Problema della selezione delle attività

Vediamo un problema risolvibile tramite un algoritmo greedy che ci porterà a formulare la struttura generale di un algoritmo greedy.

Supponiamo di avere $n$ attività, indicizzate da $1$ a $n$.
L'attività $i$-esima ha un tempo di inizio $s_i$, e un tempo di fine $f_i$.
Due attività $i$ e $j$ si dicono **compatibili** se i tempi delle attività non si intersecano

$$[s_i, f_i[\,  \cap \,[s_j, f_j[ = \emptyset$$

Nota: gli estremi di fine sono esclusi in quanto se un'attività inizia esattamente quando un'altra attività finisce le consideriamo comunque compatibili (é una libera assunzione)

Lo scopo dell'algoritmo è quello di determinare il numero massimo di attività tra loro compatibili.

Nel nostro algoritmo la scelta ottima sarà quella di estrarre l'attività con il tempo di fine più vicino, vediamo l'algoritmo:

```cpp
greedy_selector(s, f)		//s, f sono due vettori contenenti i tempi di inizo e fine
	n = length(s)		//ottengo il numero di attività
	/*ordina le n attività rispetto al tempo di fine in modo crescente*/
	A = {1} 	//inserisco in A la prima attività (che rispetta l'ordinamento)
	j = 1		// memorizza l'ultima attività inserita
	// scorro le attività, se il tempo di inizio dell'attività considerata
	// avviene dopo il tempo di fine dell'ultima attività inserita allora considero l'attività
	for i = 2 to n
		if s[i] >= f[j]
		A = A U {i}
		j = i
	return A
```

La complessità dell'algoritmo è data dall'ordinamento, che assumiamo essere $n\log n$

Altri tipi di scelta ottimale che potrebbero venire in mente sono:

- Estrarre le attività con durata minore: sarebbe sbagliato, immaginiamo 4 attività compatibili ma di lunga durata e 3 attività compatibili di breve durata, il risultato sarebbe erroneamente 3
- Estrarre le attività con tempo di inizio minore: sarebbe sbagliato, immaginiamo un'attività che inizia per prima e che prende tantissimo tempo, all'interno di questo lungo intervallo ci sono tante attività compatibili, il risultato sarebbe erroneamente 1

Questo ci porta a concludere che decidere qual è la scelta ottimale di un algoritmo greedy determina la sua correttezza

## Struttura generale di un algoritmo greedy

la struttura generale di un algoritmo greedy ricopre i seguenti passi:
1. **ordinamento** dei dati secondo un qualche criterio.
2. **inizializzazione** di strutture dati ausiliarie, e anche del risultato da ritornare
3. **estrazione** degli elementi ordinati uno alla volta
4. **verificare** se l'elemento rispetta una certa proprietà
5. aggiungere l'elemento all'insieme risultate se rispetta la proprietà
6. ritornare l'insieme risultante


## Problema della clique massima

Vediamo un altro famoso problema che mette in difficoltà l'approccio greedy, il problema della clique massima.

Dato un grafo non orientato determinare la sua *clique* massima.

Il concetto di *clique* lo abbiamo già visto:

- una clique è un sottografo completo di $G$, cioè in cui appaiono tutti i possibili archi.
- con *clique massimale* si intende che quella clique non è contenuta da un'altra **clique**
- con *clique massima* si intende una clique che contiene il maggior numero di nodi rispetto alle altre

Ad esempio, nel seguente grafo
![enter image description here](https://i.ibb.co/XkWygxw/image.png)

$\{a, b\}$ è una clique
$\{a, b, c\}$ è una clique
$\{b, c, d\}$ non è una clique

$\{c, d\}$ è una clique massimale
$\{a, b, d\}$ è una clique massimale

$\{a, b, c\}$ è una clique massima


Un primo approccio per risolvere il problema con un approccio greedy potrebbe essere quello di estrarre prima i nodi con grado maggiore:

```c++
greedy_clique(G)
	//ordino i vertici di G rispetto al grado in modo decrescente
	A = ∅
	for-each u in V
		if is_a_clique(A, u)
			A = A U {u}
	return A

is_a_clique(A, u)		//controlla se il nodo u è connesso con tutti gli altri già estratti
	for-each v in A
		if (u, v) not in E
			return false
	return true
```

La complessità di questo algoritmo è $O(n^2)$, ma questo algoritmo restituisce sempre una clique massima? vediamo un controesempio:

![enter image description here](https://i.ibb.co/rpNwcv0/image.png)

La clique massima restituita dall'algoritmo è $\{d, b\}$ mentre quella reale sarebbe $\{b, a, c\}$

In realtà questo problema non è risolvibile con un algoritmo greedy, e in generale non è risolvibile in tempo polinomiale.


# Teoria della NP completezza

L'ultimo problema visto riguardante la *clique massima* è definito come un problema **intrattabile** cioè la cui risoluzione non è realizzabile in tempo **polinomiale** (nota che non significa che sia impossibile risolvere il problema).

In questo capitolo parleremo della classificazione dei problemi in base alla complessità temporale della loro soluzione.

## Problemi

Un problema generico può essere visto come una relazione binaria tra le sue **possibili istanze** e le sue **possibili soluzioni**:

$$\mathcal{P} = \mathcal{I} \times \mathcal{S}$$

Nell'esempio della *clique massima* $\mathcal{I}$ rappresenta tutti i possibili grafi non orientati e non pesati, mentre $\mathcal{S}$ rappresenta tutti i possibili sottografi che costituiscono una *clique massima*

I problemi si possono partizionare in due categorie:

- **Problemi decidibili**: problemi per cui esiste una soluzione che li risolve in tempo finito (tutti i problemi visti fino ad ora).
	Questa categoria si divide ulteriormente in:
	- **Problemi trattabili**: problemi risolvibili in tempo polinomiale $O(n^k)$ dove $n$ è la dimensione dell'input.
	- **Problemi intrattabili**: problemi risolvibili in tempo esponenziale $O(k^n)$, dove $n$ è la dimensione dell'input, o con tempi ancora peggiori ($n!, n^n,...$)
- **Problemi indecidibili**: problemi per cui non esiste una soluzione che li risolve in tempo finito, nel senso che non possono proprio terminare la loro esecuzione.

Un altro tipo di distinzione che si può fare è quella in base al tipo di risultato che si vuole ottenere:

- **Problemi decisionali**: la risposta che voglio è binaria: **vero o falso**
- **Problemi di ottimizzazione**: in cui le soluzioni sono composte da un vasto numero di elementi e noi vogliamo l'elemento massimo o minimo.

La maggior parte dei problemi che si affrontano nella realtà sono problemi di ottimizzazione.
Noi però ci concentreremo **solamente sui problemi decisionali**. Non lo facciamo a caso in quanto ogni problema di ottimizzazione ha una versione decisionale (e vice versa) con la stessa complessità temporale.
Quindi le considerazione fatte per i problemi decisionali saranno valide anche per le versioni di ottimizzazione.

Esempio:

Dato un grafo trovare la clique massima $\to$ problema di ottimizzazione
Dato un grafo esiste la *clique* con almeno $k$ vertici? $\to$ problema decisionale

## Classi dei problemi decisionali

## Classe P

È definita nel seguente modo:

$$P = \{\mathcal{P} | \mathcal{P}\text{ è un problema decisionale \textbf{risolvibile} in tempo polinomiale}\}$$


## Classe NP

È definita nel seguente modo:

$$NP = \{\mathcal{P} | \mathcal{P}\text{ è un problema decisionale \textbf{verificabile} in tempo polinomiale}\}$$

Spieghiamo il concetto di **verificabile**:

Dato un problema decisionale dividiamo le sue istanze in **istanze positive** $\mathcal{I}_+$, cioè quelle istanze che sono associate al risultato `true`, e in **istanze negative** $\mathcal{I}_-$, cioè quelle istanze che sono associate al risultato `false`.

Supponiamo che avere un **algoritmo di verifica** che prende in input una **istanza positiva** del problema e un **certificato**, cioè una **possibile** soluzione al problema.
L'algoritmo verifica se il certificato è una soluzione valida oppure no sull'istanza data.
![enter image description here](https://i.ibb.co/TwcG8hY/image.png)

Esempio:

- $P$: dato un grafo non orientato $G$ determinare se esiste una *clique* composta da $k$ vertici
- Istanza positiva: $i\in\mathcal{I}_+$ dove $i$ è uno specifico grafo $G'$ e una costante $k'$, tale che nel grafo $G'$ **è presente** una *clique* composta da $k'$ nodi (il fatto che sia presente è perché abbiamo preso una istanza positiva del problema)
- certificato: un certo insieme di vertici

L'algoritmo di verifica determinerà se l'insieme di vertici dato (il certificato) è una *clique* composta da $k'$ elementi all'interno del grafo $G'$

### Problema del millennio

Una banale conseguenza della definizione di $NP$ è la seguente

$$P \subseteq NP$$

cioè $P$ è un sottoinsieme di $NP$

Il **problema del millennio**, che non è ancora stato risolto, è dimostrare anche il contrario oppure smentirlo:

$$NP \subseteq P$$

Se fosse vero comporterebbe avere $P = NP$, che porterebbe enormi conseguenze al mondo degli algoritmi, ma ciò non è ancora stato né dimostrato né smentito

## Classe  NPC

Prima di definire la classe NPC formalizziamo il concetto di **riducibilità polinomiale**.

In parole povere consiste nel ricondurre un nuovo problema ad uno che si sa già essere efficiente.

Più formalmente:
Dati due problemi $P_1, P_2$,
$P_1$ è riducibile polinomialmente a $P_2$ se esiste un algoritmo **polinomiale** che mappi istanze di $P_1$ ad **equivalenti** istanze di $P_2$
Si indica come:

$$P_1 \leq_p P_2$$

Cioè, Per parlare di riducibilità polinomiale bisogna che l'algoritmo di mapping abbia un tempo di esecuzione polinomiale e che le istanze positive di $P_1$ vengano mappate a istanze positive di $P_2$ e che le istanze negative di $P_1$ vengano mappate a istanze negative di $P_2$

### Proprietà della riducibilità

La riducibilità polinomiale è:
- **Riflessiva**: 	$P_1 \leq_p P_1$
	banalmente ogni istanza viene mappata a sè stessa
- **Transitiva**: se $P_1 \leq_p P_2$ e $P_2 \leq_p P_3$ allora $P_1 \leq_p P_3$
	se esiste un algoritmo in tempo polinomiale per mappare le istanza di $P_1$ a $P_2$ e analogamente un altro algoritmo per le istanze di $P_2$ a $P_3$, sarà sufficiente creare un terzo algoritmo che esegua la prima mappatura e poi la seconda, dato che entrambi gli algoritmi hanno una complessità polinomiale, la somma di complessità polinomiali è anch'essa polinomiale.

Ma **non è simmetrica**, dopo analizzeremo questo aspetto...

### Definizione di NPC

$$NPC = \begin{cases}\mathcal{P} | \mathcal{P}\text{ è un problema decisionale tale che:} \\
-\hspace{5mm}\mathcal{P} \in NP \\
-\hspace{5mm}\forall \mathcal{P'} \in NP : \mathcal{P'} \leq_p \mathcal{P}
\end{cases}$$

Quanto un problema appartiene a questa categoria si dice **NP completo**, e questa classe racchiude proprio i **problemi intrattabili**.

La definizione dice che un problema è NP completo se:
-  è un problema appartenente alla classe NP
- e se ogni problema all'interno della classe NP può essere ridotto polinomialmente a lui.

Nota: se un problema soddisfa la seconda condizione si dice che appartiene alla classe **NP-hard**.

## Teorema fondamentale della NP-completezza

L'intrattabilità di un problema appartenente alla classe NPC è data proprio da questo teorema:

$$P \cap NPC \neq \emptyset \implies P = NP$$

Cioè, se esistesse un problema $Q$ risolvibile in tempo polinomiale ($Q \in P$) e in cui ogni problema in NP può essere mappato a $Q$ ($Q \in NPC$) allora si avrebbe che $P = NP$

Al momento nessuno è riuscito a trovare un problema che rende vera l'ipotesi.

Possiamo però dimostrare la correttezza del teorema:
Supponiamo che esista un problema $Q$ per cui $Q \in P \land Q \in NPC$
Per dimostrare che $P = NP$ dovremmo dimostrare che:

1. $P \subseteq NP$ ma questo già lo sappiamo: un problema risolvibile in tempo polinomiale è anche verificabile in tempo polinomiale.
2. $NP \subseteq P$
	Prendiamo un qualsiasi problema $Z$ appartenente a $NP$, voglio dimostrare che tale problema è anche in $P$.
	Per definizione di $NPC$ posso dire che $Z \leq_p Q$ (cioè $Z$ può essere mappato a $Q$).
	E per ipotesi $Q \in P$, di conseguenza anche $Z\in P$

### Nota sulla Simmetria della riducibilità polinomiale

Se presi due problemi $P1 \in P$ e $P2 \in NPC$ fosse vera la proprietà di simmetria, cioè che 

"se $P1 \leq_p P2$ allora $P2 \leq_p P1$"

Si potrebbe applicare il teorema fondamentale.
Ciò però non vale perche seppur vero che ogni problema in $P$ è riducibile polinomialmente a un problema NPC (in quanto $P \subseteq NP$) non è mai stato trovato un problema per cui vale il contrario.

Se considerassimo solo problemi $NPC$, in quel caso la proprietà simmetrica varrebbe: utilizzando la seconda proprietà della definizione di $NPC$ sappiamo che ogni problema $NP$ può essere ridotto al nostro problema di riferimento, e dato che $NPC \subset NP$ anche tutti i problemi $NPC$ possono essere ridotti al nostro problema di riferimento.

## Classe Co-NP

La classe Co-NP è definita nel seguente modo

$$\text{Co-NP} = \{\mathcal{P} | \mathcal{P} \text{ è un problema decisionale il cui \textbf{complemento} è verificabile in tempo polinomiale}\}$$

Quanto un problema appartiene a questa categoria si dice **complemento di NP**

Dato un problema decisionale $\mathcal{P}$ con istanze positive e negative, il complemento del problema, indicato con $\bar{\mathcal{P}}$ nega la domanda (e quindi si invertono le istanze).

Ad esempio:
il solito problema $\mathcal{P}$: dato un grafo dire se esiste una clique composta da $k$ vertici.

In questo caso un algoritmo prende in input il grafo e un valore $k$ e in output potrà restituire:
- "Sì, nel grafo esiste una clique di $k$ vertici"
- "No, nel grafo non esiste una clique di $k$ vertici"

Il complementare sarebbe $\bar{\mathcal{P}}$: dato un grafo dire se non esiste una clique composta da $k$ vertici

In questo caso un algoritmo prende in input il grafo e un valore $k$ e in output potrà restituire:
- "No, nel grafo esiste una clique di $k$ vertici"
- "Sì, nel grafo non esiste una clique di $k$ vertici"

### Relazione tra NP e Co-NP

**Se un problema appartiene ad $NP$ non è detto che anche il suo complemento lo sia, anzi spesso non lo è.**

Prendendo l'esempio precedente abbiamo già visto che il problema di **verificare** che un dato insieme di vertici sia una clique di almeno $k$ vertici in un certo grafo, ha costo polinomiale.
**Una singola risposta** "Sì, l'insieme di vertici è una clique di almeno $k$ vertici" restituita dall'algoritmo di verifica ci è sufficiente per rispondere alla domanda "esiste...".

D'altra parte verificare che non ci sia una clique di almeno $k$ vertici in un certo grafo necessiterebbe di testare tutte le possibili permutazioni di vertici, che ha costo **fattoriale**, questo perché una singola risposta "Sì, l'insieme di vertici non è una clique di almeno $k$ vertici" non ci basta per rispondere alla domanda "esiste...".

E proprio perché l'algoritmo di verifica in quest'ultimo caso non ha tempo polinomiale, tale problema (il complemento del problema della clique) non appartiene a $NP$, bensì a $\text{Co-NP}$ perché il problema originale invece appartiene a $NP$

## Schema delle classi

![enter image description here](https://i.ibb.co/nmXXPnb/image.png)
Osservazioni:
- Se un problema sta sia in NP che in Co-NP significa che sia il problema stesso che il suo complemento sono verificabili in tempo polinomiale.
- Se un problema sta in P significa che:
	1. è risolvibile in tempo polinomiale
	2. è verificabile in tempo polinomiale
	3. il suo complemento è verificabile in tempo polinomiale.

## Problemi NP-completi

La seconda proprietà della classe di problemi NPC è parecchio forte, tale da farci dubitare che ci siano veramente dei problemi al suo interno, ebbene ce ne sono migliaia.

Dimostrare che un problema appartiene a NPC significa dimostrare le due proprietà, la seconda è particolarmente difficile da dimostrare ma qualcuno c'è la fatta la prima volta con il problema chiamato **CIRCUIT-SAT**.
Il problema consisteva in: date $n$ linee di input ad un circuito booleano, esiste una configurazione che da come risultato 1?

### Determinare se nuovi problemi appartengono a NPC

Dato che adesso sappiamo esistere almeno un problema dimostrato essere appartenente alla classe NPC, dimostrare che un nuovo problema appartenga alla classe NPC è diventato più semplice.

Dato un nuovo problema $P1$
Se
1. $P1 \in NP$
2. $\exist Q \in NPC$ tale per cui $Q \leq_p P1$

allora $P1 \in NPC$

Il secondo punto vale perché: se $Q\in NPC$ significa che ogni problema appartenente a $NP$ può essere ridotto a $Q$ (per def. di $NPC$). Quindi se $Q$ può essere ridotto al nostro problema $P1$ è come se avessimo dimostrato che ogni problema in $NP$ è riducibile al nostro problema $P1$

## Dimostrazione informale che clique appartiene a NPC

Per dimostrare che il problema della clique appartiene a NPC faremo una mappatura con un altro problema NPC, chiamato **3-FNC-SAT** (3 forma normale congiunta *satisfaction*).

Quest'ultimo problema consiste in una formula booleana composta nel seguente modo:

1. La formula $\phi$ è composta da **clausole** $C$ legate da operatori logici AND 
2. Ogni clausola è formata da **3 letterati** $x$ legati da operatori logici OR
3. Un letterato è una variabile booleana pura oppure negata

Costruiamo una formula, che rispetti le regole sopra citate, che poi utilizzeremo per fare la mappatura con il problema della clique.

$$\phi =C_1 \land C_2 \land C_3$$

$$C_1 =  x_1 \lor \lnot x_2 \lor \lnot x_3$$

$$C_2 =  \lnot x_1 \lor x_2 \lor x_3$$

$$C_3 =  x_1 \lor  x_2 \lor  x_3$$


Dimostriamo in modo non proprio formale che il problema della clique appartiene a NPC:

1. $\text{CLIQUE} \in NP$ già lo sappiamo che la *clique* è verificabile in tempo polinomiale
2. Utilizziamo il problema **3-FNC-SAT** che si sa già appartenere a NPC per ridurlo al nostro problema della *clique*

Creiamo un grafo che mappa la nostra istanza del problema 3-FNC-SAT, per farlo dobbiamo rispettare delle regole:

1. Creare tanti sottoinsiemi di vertici quante sono le clausole della formula, in questo caso sono 3
2. Ogni sottoinsieme ha lo stesso numero di vertici rispetto ai letterati, in questo caso 3
3. Non ci devono essere archi tra letterati della stessa clausola
4. Non ci devono essere archi che collegano letterati che sono l'uno la negazione dell'altro

Costruiamo il nostro grafo:
![enter image description here](https://i.ibb.co/TYFX4gm/image.png)

Il mapping tra i due problemi ci dice che esiste una clique di 3 vertici se e solo se la formula è soddisfacibile (cioè se c'è una combinazioni di valori booleani che restituisce vero)

Se scegliamo:
- $\lnot x_2$ da $C_1$
- $x_3$ da $C_2$
- $x_3$ da $C_3$

e impostiamo i seguenti valori

- $\lnot x_2 = \text{true}$
- $x_3 = \text{true}$
- $x_1 = \text{indifferente}$

la formula $\phi$ restituisce vero e di conseguenza i nodi corrispettivi ai letterati che abbiamo scelto compongono una clique di 3 vertici.

## Aggirare problemi NPC

In caso si incontrasse un problema NPC, non c'è speranza di risolverlo in modo efficiente, i modi possibili per ottenere una soluzione quantomeno tollerabile coinvolgono:

1. **algoritmi di approssimazione** (algoritmi che si avvicinano alla soluzione corretta in tempi accettabili)
2. **entrare in dei casi particolari del problema** (sperare di rientrare in casi speciali del problema che si risolvono in tempi migliori del caso generale)
3. **utilizzare delle euristiche** (affidarsi ad algoritmi che hanno una probabilità alta di avere successo, ma si tratta solo di probabilità, senza certezze)


