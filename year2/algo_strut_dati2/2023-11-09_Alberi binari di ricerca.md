# Alberi binari di ricerca

Un albero binario di ricerca è un albero binario che soddisfa la seguente proprietà (chiamata proprietà di ricerca):

scelto un qualsiasi nodo $x$ dell'albero deve valere che nel **sottoalbero sinistro** sono presenti nodi con **valori minori o uguali** a $x$ mentre nel **sottoalbero destro** sono presenti nodi con **valori maggiori o uguale** a $x$

Un esempio di albero binario di ricerca è il seguente:

![](https://i.ibb.co/V27PH2B/alberello.png)


La visita **in-order** di questo tipo di albero permette di rappresentare i valore in ordine da più piccolo al più grande


Andremo a vedere varie operazioni su questo tipo di albero.
Un nodo $x$ è formato da:
- la chiave $x.\text{key}$
- il puntatore al padre$x.\text{p}$
- il puntatore al figlio sinistro $x.\text{left}$
- il puntatore al figlio destro $x.\text{right}$

## ricerca

Scriviamo l'algoritmo per la ricerca di una nodo data la chiave

**versione ricorsiva**

```c++
search(node x, value k) {
	if (x == NIL or x.key == k) {
		return x
	}
	else{
		if (x.key > k) {
			return search(x.left, k)
		}
		else {
			return search(x.right, k)
		}
	}
}
```

### Versione iterativa

```c++
search(node x, value k) {
	while(x != NIL and x.key != k) {
		if (k < x.key) {
			x = x.left
		}
		else {
			x = x.right
		}
	}
	return x
}
```

Questi algoritmi sono corretti perché la proprietà ci permette di tagliare degli interi sottoalberi garantendoci che nel sottoalberi tagliati ci saranno solo valori maggiori (a destra) o minori (sinistra)

Per analizzare la complessità di questi due algoritmi possiamo pensare che quando cerchiamo il valore stiamo seguendo un cammino dell'albero, nel caso peggiore questo cammino è il più lontano di tutti (cioè l'altezza dell'albero) quindi possiamo concludere che

$$T(n) = O(h)$$

dove $h$ è l'altezza dell'albero


## Massimo

Scriviamo l'algoritmo per trovare il massimo di un albero binario di ricerca

```c++
// pre-condizione: x deve appartenere all'albero
maximum(node x) {
	while (x.right != NIL) {
		x = x.right
	}
	return x
}
```

Il nodo con la chiave massima sarà il nodo più a destra nell'albero

## Minimo

Scriviamo l'algoritmo per trovare il minimo di un albero binario di ricerca

```c++
// pre-condizione: x deve appartenere all'albero
minimium(node x) {
	while (x.left != NIL) {
		x = x.left
	}
	return x
}
```
Il nodo con la chiave minima sarà il nodo più a sinistra nell'albero

la correttezza è sempre garantita dalla proprietà dell'albero binario di ricerca

Dato che stiamo sempre visitando un cammino dell'albero, il caso peggiore sarà il cammino più lungo quindi

$$T(n) = O(h)$$

## Successore

In un albero binario di ricerca che ha tutti i nodi con chiavi distinte, il successore di un nodo $x$ è la più piccola chiave maggiore di $x.\text{key}$ 


Abbiamo due casi per determinare il successore.

1. se $x$ ha un figlio destro, allora il successore è il minimo nel sottoalbero destro
2. se $x$ non ha un figlio destro, allora il successore (se esiste) si trova risalendo l'albero fino alla prima "svolta" a destra.
(con svolta si intende che fino a che il nodo attualmente puntato è figlio destro allora bisogna continuare a salire, quando il nodo è figlio sinistro allora ci si perché suo padre sarà il successore)

nota che se $x$ è il nodo massimo, esso non ha successore.


```c++
// pre-condizione: x deve appartenere all'albero
successore(node x) {
	if (x.right != NIL) {	//caso 1
		return minimum(x.right)
	}
	else {	//caso 2
		y = x.p		//y sarà sempre il padre di x
		while (y != NIL and x == y.right) {	// continua fino a che o il padre non esiste oppure fino a che non si trova una "svolta" a destra
			x = y
			y = x.p
		}
		return y
	}
}
```

Nel primo `if` abbiamo la complessità del metodo `minimum` che abbiamo visto essere $O(h)$. Anche per l'else però abbiamo la complessità di un cammino (che nel caso peggiore sarà il cammino più lungo) quindi anche qui abbiamo $O(h)$

$$T(n) = O(h)$$


## predecessore

In un albero binario di ricerca che ha tutti i nodi con chiavi distinte, il predecessore di un nodo $x$ è la più grande chiave minore di $x.\text{key}$ 

nota che se $x$ è il nodo minimo, esso non ha predecessore.


Il procedimento è molto simile a quello per trovare il successore

```c++
// pre-condizione: x deve appartenere all'albero
predecessore(node x) {
	if (x.left!= NIL) {	//caso 1
		return maximun(x.left)
	}
	else {	//caso 2
		y = x.p		//y sarà sempre il padre di x
		while (y != NIL and x == y.left) {	// continua fino a che o il padre non esiste oppure fino a che non si trova una "svolta" a destra
			x = y
			y = x.p
		}
		return y
	}
}
```

Analogamente abbiamo
$$T(n) = O(h)$$


## Inserimento

Scriviamo l'algoritmo per inserire un nuovo nodo nell'albero rispettando la sua proprietà.

Ci serviamo di un puntatore alla radice (utile per gestire l'albero vuoto): `T.root`

Assumiamo che il nuovo nodo da inserire $z$ sia già stato inizializzato con i puntatori a `NIL` e con la chiave già impostata.

```c++
inserimento(Tree T, node z) {
	y = NIL	//rappresenterà il padre del nodo z
	x = T.root
	while (x != NIL) {
		y = x
		if (z.key < x.key) {
			x = x.left
		}
		else {
			x = x.right
		}
	}
	z.p = y
	if (y == NIL) {	//se l'albero è vuoto allora z sarà la radice
		T.root = z
	}
	else {
		if (z.key < y.key) {
			y.left = z
		}
		else {
			y.right = z
		}
	}
}
```

la complessità è data dal ciclo while, quel ciclo visita un cammino dell'albero, nel caso peggiore è il cammino più lungo, quindi 

$$T(n) = O(h)$$


## Cancellazione

Pre implementare la cancellazione ci serviamo di una proprietà fondamentale degli alberi binari di ricerca:

**proprietà**: Se un nodo x in un albero binario di ricerca ha due figli, allora il suo successore non ha un figlio sinistro, e, in maniera analoga, il suo predecessore non ha un figlio destro.
In questo caso siamo interessati al successore.

**dimostrazione**
Sia $x$ un nodo con due figli. In una visita simmetrica (*in-order*), i nodi del sottoalbero sinistro precedono $x$ e quelli del sottoalbero destro seguono $x$.
Di conseguenza, il successore di $x$ si trova nel suo sottoalbero destro.

Se $s$ è il successore di $x$, assumiamo per assurdo che $s$ abbia un figlio sinistro, che chiamiamo $y$. Allora, $y$ segue $x$ perché si trova nel suo sottoalbero destro, ma precede $s$ perché si trova nel sottoalbero sinistro di $s$. Questo è assurdo, perché $s$ non sarebbe più il successore di $x$, ma lo sarebbe $y$.

Tornando alla cancellazione:
Quando dobbiamo rimuovere un nodo `z` dall'albero possiamo distinguere tre casi distinti:

1. se `z` è una foglia dell'albero allora basta impostare il puntatore al padre di `z` a NULL e impostare `z = NULL`
2. se `z` ha un unico figlio, in questo caso si crea il collegamento tra il padre di `z` e il suo nodo figlio
3. se `z` ha due figli, dobbiamo trovare il suo successore e mettiamo il successore nella posizione del nodo `z`, avendo cura di aggiornare i rispettivi puntatori.


Implementiamolo in pseudocodice:

innanzitutto ci serviamo di una funzione extra chiamata `transplant` che dato il puntatore alla radice, e due nodi `u` e `v` sostituisce il sottoalbero radicato in `u` con il sottoalbero radicato in `v`

```c++
transplant(Tree T, Node u, Node v) {
	if (u.p == NIL) {
		T.root = v;
	}
	else {
		if (u == u.p.left) {	//se u è figlio sinistro
			u.p.left = v;
		}
		else {		//se u è figlio destro
			u.p.right = v;
		}
	}
	if (v != NIL) {	//il nuovo sottoalbero punta al nuovo padre
		v.p = u.p;
	}
}
```

La complessità di questo metodo è costante $\Theta(1)$

Implementiamo ora la cancellazione

```c++
tree_delete(tree T, Node z) {
	if (z.left == NIL) {	//caso 1
		transplant(T, z, z.right);
	}
	else {
		if (z.right == NIL) {	//caso 2
			transplant(T, z, z.left);
		}
		else {
			y = minimium(z.right);
			if (y.p != z) {		//caso 3.1
				transplant(T, y, y.right);
				y.right = z.right;
				z.right.p = y;
			}
			transplant(T, z, y);	//caso 3.2
			y.left = z.left;
			y.left.p = y;
		}
	}
}
```

![enter image description here](https://i.ibb.co/WBWHvCR/image.png)

La complessità dell'algoritmo è data dalla complessità del metodo `minimum` che abbiamo già visto essere $O(h)$


## Costruzione

tutte le operazioni che abbiamo visto possono essere realizzate in tempo $O(h)$, se l'albero è bilanciato allora $O(h)=\log n$, mentre più l'albero tende ad essere sbilanciato più la complessità tende ad essere $O(n)$.

Avendo un array di elementi da inserire per creare un albero binario il caso peggiore che ci possa capitare è che gli elementi dell'array siano in ordine strettamente crescenti oppure strettamente decrescenti (questo perché l'albero prenderebbe la forma di una semplice lista).

Vediamolo nel seguente algoritmo:

```c++
Arr a = [1, 3, 5, 7, 9];

build_BST(Arr a) {
	t = newTree();
	for (int i = 0; i < a.length(); i++) {
		u = creaNodo(a[i]);
		inserimento(t, u);
	}
	return t
}
```

Analizziamo la complessità

Supponendo che il metodo `creaNodo()` abbia complessità costante allora la complessità dipende dal metodo `inserimento` e dal ciclo for.

La complessità dell'inserimento è $O(h)$.
Dato che abbiamo un array ordinato, l'albero sarà fortemente sbilanciato verso destra, questo significa che l'altezza dell'albero è uguale al numero di nodi, quindi la complessità dell'inserimento è $O(n)$, ma dato che l'inserimento viene chiamato nel ciclo for $n$ volte abbiamo una complessità di $\Theta(n^2)$


Cerchiamo di migliorare l'algoritmo:

Dato che abbiamo un array ordinato al posto di scorrerlo da sinistra verso destra lo scorriamo a partire dal centro (similmente a come viene fatta la *binary search*)

```c++
Arr a = [1, 3, 5, 7, 9];

build_BST_ott(Arr a) {
	t = newTree();
	t.root = build_BST_ott_aux(a, 1, a.length(), NIL)
	return t;
}

build_BST_ott_aux(Arr a, int inf, int sup, Node padre) {
	if (inf > sup) {
		return NIL;
	}
	else {
		med = (inf + sup) / 2;
		r = creaNode(a[med]);
		r.p = padre;
		r.left = build_BST_ott_aux(A, inf, med - 1, r);
		r.right = build_BST_ott_aux(A, med + 1, sup, r);
		return r;
	}
}
```

Per funzionare questo metodo deve ricevere un **array già ordinato**, questo algoritmo ottimizzato permette di avere un albero di altezza uguale a $\log n$

Calcoliamo la complessità dell'algoritmo.

$$T(n) = \begin{cases}
c & n = 0\\
2T\left(\frac{n}{2}\right) + d & n > 0
\end{cases}$$

Possiamo utilizzare il teorema master

$a = 2$
$b = 2$
$f(n) = d$
$n^{\log_22} = n$

Verifichiamo di essere nel caso 1:

$f(n) = O(n^{1-\epsilon})$
se scelgo $\epsilon = 1$ ottengo $n^0 = 1$
Dunque vale che $T(n) = \Theta(n)$

**Nota** per il momento è importante sapere che se l'array non è ordinato è più conveniente prima ordinarlo e poi utilizzare la funzione ottimizzata per creare l'albero, vedremo più avanti che ciò ha complessità $O(n\log n)$
