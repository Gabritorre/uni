# Calcolo della complessità di un algoritmo

Concentriamoci sul calcolare la complessità temporale di un dato algoritmo, indicato con $T(n)$ .
Ci interessiamo in particolare al **caso peggiore** su cui un determinato algoritmo deve lavorare, lo indichiamo con $O(f(n))$ , in generale O-grande di una funzione.
Generalmente vogliamo vedere come si comporta un algoritmo su un gran input

## Complessità dei principali costrutti

Generalmente avendo due blocchi di codice sequenziali, ognuno dei quali ha una certa complessità:

![enter image description here](https://i.ibb.co/jWdpxVZ/algoritmo.png)

la complessità dell'algoritmo data dalla somma della loro complessità:

$$T(n) = O\big(f(n) + g(n)\big)$$

Andiamo a vedere la complessità dei costrutti di programmazione più comuni

### if-then-else

``` C
if <cond> then
	ramo-then
else
	ramo-else
```

In questo caso la condizione viene eseguita sempre, ed ha una complessità di $O(f(n))$ 
poi o viene eseguito il `ramo-then` $(O(g(n))$ oppure il `ramo-else` $(O(h(n))$ , dato che a noi interessa il caso peggiore prenderemo quello che ha una complessità maggiore:

$$T(n) = O\big(f(n) + \max\{g(n), h(n)\}\big)$$


### Ciclo for

``` C
for i = 1 to k
	<body>
```

In questo caso la complessità del `body` $(O(f(n))$ viene ripetuto `k` volte quindi:

$$T(n) = O\big(k \cdot f(n)\big)$$

possiamo avere anche più cicli for innestati, ad esempio avendo due cicli for innestati:

``` C
for i = 1 to k
	for j = 1 to m
		<body>

```

anche in questo caso la complessità del `body` $(O(f(n))$ però viene ripetuto `k * m` volte quindi:

$$T(n) = O\big(k \cdot m \cdot f(n)\big)$$


### Ciclo while

``` C
while <cond> do
	<body>
```

In questo caso la condizione viene eseguita sempre, ed ha una complessità di $O(f(n))$
il body avrà una complessità di $O(g(n))$

Indicando con $N(n)$ il numero massimo di iterazioni del ciclo la complessità equivale a:

$$O\big(N(n) \cdot (f(n) + g(n))\big)$$


## Esempio di algoritmo


![enter image description here](https://i.ibb.co/VpBgPzv/algo-example.png)

Indichiamo con **c** le istruzioni costanti, di cui non siamo interessati. 
guardando i primi 2 cicli for innestati notiamo che vengono entrambi eseguiti $n$ volte quindi la complessità di quel blocco è $n^2$, il corpo del ciclo interno è comunque una istruzione costante che rispetto a $n^2$ è inconsiderabile.

Nel secondo blocco abbiamo un ciclo con una chiamata ricorsiva, per il momento anche il nostro calcolo della complessità sarà ricorsivo.

otteniamo quindi $T(n) = n^2 + 16\cdot T(\frac{n}{4})$ considerando $n > 1$ perché il `ramo-then` dell'if ha complessità più grande del `ramo-else`


