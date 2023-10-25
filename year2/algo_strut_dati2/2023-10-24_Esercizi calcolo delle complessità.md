# Esercizi sul calcolo delle complessità


## Esercizio 1
Calcoliamo la complessità del seguente algoritmo

```c++
A(int n) {
	s = 0
	for i = 1 to n {
		s = s + B(i)
	}
	return s
}

B(int n){
	s = 0
	for j = 1 to n {
		s = s + 1
	}
	return s
}
```

Conviene calcolare prima la complessità della funzione `B`, essa ha un ciclo for che viene eseguito `n` volte e delle istruzioni costanti

$$T_B(n) = \Theta(n)$$

Per quanto riguarda la funzione `A`, è presente un ciclo eseguito `n` volte in cui viene chiamata la funzione `B`, quindi la sua complessità è data dalla somma di `n` volte la complessità di `B`, quindi `B(1) + B(2) + B(3) + ... + B(n)`

$$T_A(n) = \sum_{i = 1}^n \Theta(i)$$

possiamo scrivere $\Theta(i)$ come $i \cdot c$ dove
$i$ numero di iterazioni del ciclo
$c$ complessità del corpo del ciclo

$$T_A(n) = \sum_{i = 1}^n (i \cdot c)$$

$$T_A(n) = c\cdot \sum_{i = 1}^n i$$


$\sum_{i = 1}^n i$ è una progressione aritmetica che può essere scritta come:

$$T_A(n) = c\cdot \frac{n\cdot (n-1)}{2}$$

$$T_A(n) = c\cdot \frac{n^2 - n}{2}$$

quindi possiamo concludere che la complessità è 

$$T_A(n) = \Theta(n^2)$$

Possiamo realizzare lo stesso scopo di queste due funzioni con una singola funzione di complessità costante

Notiamo che $B(n) = n$

quindi la funzione `A` si potrebbe scrivere come

```c++
A(int n) {
	s = 0
	for i = 1 to n {
		s = s + i
	}
	return s
}
```

che rappresenta la somma di tutti i numeri fino ad `n`, cioè

$$\sum_{i = 1}^ni = \frac{n \cdot (n-1)}{2}$$

quindi la nuova funzione ottimizzata sarebbe:

```c++
A(int n) {
	return n*(n-1)/2
}
```
## Esercizio 2

```c++
foo(int n) {
	if n <= 2 {
		return 1
	}
	else {
		if n > 321 {
			i = n/2
			return 2 * foo(i) + n * n * n * i
		}
		else {
			return foo(n-1) + foo(n-2)
	}
}
```
Siamo interessati alla complessità asintotica, quindi dobbiamo scegliere i rami if che vengono eseguiti quando `n` è molto grande, in questo caso il ramo che consideriamo è quello `if n > 321`.

All'interno abbiamo delle istruzioni costanti ed una chiamata ricorsiva su $\frac{n}{2}$

$$T(n) = T\left(\frac{n}{2}\right) + \Theta(1)$$

troviamo la complessità utilizzando il teorema master:
$a = 1$
$b = 2$
$d = \log_21 = 0$

compariamo

- $f(n) = \Theta(1)$
- $n^d = n^0 = 1 = \Theta(1)$

Siamo nel caso 2, quindi la complessità è 

$$T(n) = \Theta(n^{\log_ba} \cdot \log n) = (\log n)$$

## Esercizio 3

Calcoliamo la complessità asintotica della seguente funzione, tenendo conto che la complessità della funzione `Proc(n)`$=\Theta(\sqrt{n})$

```c++
Fun(A, n) {
	if n < 1 {
		return 1
	}
	else {
		t = Fun(A, n/2)
		if t > A[n] {
			t = t + Fun(A, n/2)
		}
		for j = 1 to n {
			t = t + A[j] + Proc(n)
		}
		return t
	}
}
```

Consideriamo l'esecuzione di tutte le istruzioni del ramo else (compreso l'if al suo interno)

Abbiamo:
- due chiamate ricorsive a `Fun` uguali
- una chiamata alla funzione `Proc` che viene chiamata `n` volte
- altre istruzioni costanti

$$T_{Fun}(n) = T\left(\frac{n}{2}\right) + T\left(\frac{n}{2}\right) + \Theta(n\sqrt{n}) + \Theta(1)$$

$$T_{Fun}(n) = 2\cdot T\left(\frac{n}{2}\right) + \Theta(n\sqrt{n})$$

Troviamo la complessità con il teorema master:

$a = 2$
$b = 2$
$d = \log_22 = 1$

compariamo

- $f(n) = \Theta(n\sqrt{n}) = \Theta(n^{\frac{3}{2}})$
- $n^d = n^1 = n = \Theta(n)$

$f(n)$ domina quindi siamo nel caso 3:

1. devo trovare un $\epsilon > 0$ tale che $f(n) = \Omega(n^{1+\epsilon})$ 
	scelgo $\epsilon = \frac{1}{2}$
2. devo trovare una $0<c<1$ tale che $a\cdot f(\frac{n}{b}) \leq c\cdot f(n)$
	
	sostituendo:
	$2\cdot f(\frac{n}{2}) \leq c\cdot f(n)$

	$f(n) = n\sqrt{n}$
$f(\frac{n}{2}) =\frac{n}{2}\cdot \sqrt{\frac{n}{2}}$

	$2\cdot \frac{n}{2}\cdot \sqrt{\frac{n}{2}} \leq c\cdot n\sqrt{n}$
	
	ottengo:
	
	$c \geq \frac{1}{\sqrt{2}}$
	
	scelgo arbitrariamente $c = \frac{1}{\sqrt{2}}$

la complessità dell'algoritmo è quindi:

$$T(n) = \Theta(f(n)) = \Theta(n\sqrt{n})$$

## Esercizio 4

```c++
calcola(n) {
	if n < 1 {
		return 5
	}
	else {
		k = 1
		for i = 1 to n {
			k = k * 2
		}
		return calcola(n-1) * k
	}
}
```

considero il ramo else:

$$T(n) = \Theta(1) + \Theta(n) + T(n-1)$$

in questo caso non posso applicare il teorema master perche non rispetta l'espressione non rispetta la forma richiesta.

Utilizziamo in metodo dell'iterazione

possiamo riscrivere la complessità come:

$$T(n) = T(n-1) + nc $$

srotolando i primi livelli di ricorsione abbiamo

$$T(n-1) + nc$$

$$T(n-2) + (n-1)c + nc$$

$$T(n-3) + (n-2)c + (n-1)c + nc$$

$$...$$

per trovare la complessità dobbiamo sommare tutti i livelli fino al raggiungimento del caso base $T(0)$

$$\sum_{i=1}^n(ci) + T(0)$$

$$c\cdot\sum_{i=1}^ni + T(0)$$

$$c\cdot\frac{n(n-1)}{2}+ T(0)$$

$$c\cdot\frac{n^2-n}{2}+ T(0)$$

Quindi la complessità è 

$$T(n) = O(n^2)$$

## Esercizio 5

```c++
computate(n) {
	if n >= 10 {
		for i = n down to n-3 {
			j = n/2
		}
		return computate(n/2) * computate(n/2) + 5n
	}
	else {
		if n >= 20 {
			return computate(n+1)
		}
		else {
			return n
		}
	}
}
```

consideriamo il ramo del primo if in quanto `if n >= 20` non verrà mai eseguito:

il ciclo viene eseguito un numero costante di volte (4 volte) e il suo corpo ha complessità costante
poi abbiamo 2 chiamate ricorsive

$$T(n) = \Theta(1) + 2T\left(\frac{n}{2}\right)$$

possiamo applicare il teorema master

$a = 2$
$b = 2$
$d = \log_22 = 1$

compariamo

- $f(n) = \Theta(1)$
- $n^d = n^1 = n = \Theta(n)$

$n^d$ domina e quindi siamo nel caso 1

dobbiamo trovare un $\epsilon > 0$ tale che $f(n) = O(n^{1-\epsilon})$

scelgo $\epsilon = 1$ per verificare la condizione. Dunque la complessità è 

$$T(n) = \Theta(n)$$
