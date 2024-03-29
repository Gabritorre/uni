﻿
  
# Principio di induzione

Il principio di induzione è una tecnica di dimostrazione di una proprietà sui numeri naturali $\mathbb{N}$ .
Questa tecnica utilizza le leggi e le caratteristiche dei numeri naturali per dimostrare una proprietà per gli infiniti valori naturali.

Dovendo dimostrare una proprietà $P(x)$ la dimostrazione si basa su due casi:

- Dimostrare il **Il caso base**: cioè che $P(0)$ o più in generale la proprietà del numero naturale più piccolo considerato deve essere vero.
- Dimostrare il **passo induttivo**: si tratta di dimostrare che se $P(n)$ è vero allora anche $P(n+1)$ è vero per ogni $n \geq k$ (con $k$ generalmente uguale a 0).

## Esempi di dimostrazione

### Es 1
Traccia: dimostrare che per ogni numero naturale $n, n^3+5n$ è sempre un multiplo di $6$ .

La nostra proprietà è: $P(n): \text{"}n^3+5n \text{ è sempre multiplo di 6 }\text{"}$

Dimostrazione per induzione su $n$:

- caso base: $P(0) = 0^3 + 5 \cdot 0 = 0$ Lo $0$ è difatti un multiplo di $6$ quindi il caso base è verificato.
- passo induttivo:
	Sia $n \geq 0$, ipotizziamo che $P(n)$ sia vera (**ipotesi induttiva**) dimostriamo che anche $P(n+1)$ sia vera:
	Quindi dimostriamo che $(n+1)^3 + 5(n+1)$ sia un multiplo di 6
	$$(n + 1)^{3} + 5(n + 1)$$

	$$(n^{3} + 3n^{2} + 3n + 1) + 5n + 5$$

	$$n^{3} + 5n + 3n^{2} + 3n + 6$$
A questo punto sappiamo che $n^3+5n$ è un multiplo di $6$ per l'ipotesi induttiva: quindi scriviamo $n^3+5n$ come $6m$
	$$6m+3n^2+3n+6$$
Sappiamo inoltre che $6$ è un multiplo di $6$ . ci rimane solo da dimostrare che $3n^2+3n$ sia un multiplo di 6

$$3n(n+1)$$

Sicuramente $n(n+1)$ sarà un numero pari (pari * dispari = pari) quindi possiamo scriverlo come $2r$

$$3\cdot 2r = 6r$$

Abbiamo trovato quindi un altro multiplo di 6. Messo tutto insieme diventa:

$$6n+6r+6 = 6(n+r+1)$$

### Es 2
Traccia: dimostrare che la somma dei primi n dispari è uguale a $(n+1)^2$ .

Scritto in linguaggio matematico diventa:

$$\sum_{k=0}^{n}(2k+1) = (n+1)^2$$

Dimostrazione per induzione su $n$ .

- caso base:

$$\sum_{k=0}^{0}(2k+1) = 2 \cdot 0 + 1 = 1 \\
= \\
(0+1)^2 = 1$$

- passo induttivo:

Scriviamo la nostra ipotesi induttiva

$$\sum_{k=0}^{n}(2k+1) = (n+1)^2$$

Dimostriamo che è vera anche per $(n+1)$ :

$$\sum_{k=0}^{n+1}(2k+1) \text{ deve diventare: } ((n+1)+1)^2$$

Scriviamo:
$$\sum_{k=0}^{n+1}(2k+1)$$
come (nota il cambio sopra la sommatoria):

$$= \sum_{k=0}^{n}(2k+1) + (2(n+1)+1)$$

il primo pezzo:

$$\sum_{k=0}^{n}(2k+1)$$

sarà uguale a $(n+1)^2$ per ipotesi induttiva:

$$(n+1)^2 + 2(n+1)+1$$

È un quadrato perfetto che si può scrivere come:

$$((n+1)+1)^2$$

Quindi abbiamo dimostrato che è vera anche per $(n+1)$


## Principio di induzione completa

In alcune dimostrazione è più conveniente utilizzare il principio di induzione completa.
Rappresenta sempre una tecnica per dimostrare una proprietà dei numeri naturali ma con una differenza, la dimostrazione vuole che:

- Il caso base sia verificato
- Se la proprietà è vera **per ogni numero minore** $n$ allora deve valere anche per $n+1$.

Esempio

Dimostrare che per ogni $n \in \mathbb{N}$ con $n \geq 2$ è scomponibile in fattori primi.

Dimostrazione per induzione completa su $n$:

**caso base**: $n = 2$

$2 = 2$ dato che 2 è già un numero primo, il caso base è verificato.

**passo induttivo**:

supponiamo che tutti i valori compresi tra 2 e n siano scomponibili in fattori primi

Quindi scriviamo **l'ipotesi induttiva** come $\forall x : 2 \leq x \leq n,$ è scomponibile in fattori primi.

Vogliamo quindi dimostrare che anche $n+1$ è scomponibile in fattori primi

Ci sono due casi possibili:

1. $n+1$ è un numero primo, quindi la scomposizione è data dal numero stesso.
2. $n+1$ non è un numero primo, ma in questo caso esistono due numeri il cui prodotto restituisce $n+1$ : $n+1 = y \cdot z$
Ma $y$ e $z$ saranno compresi tra 2 e $n$ e di conseguenza per l'ipotesi induttiva sono scomponibili in fattori primi. Quindi anche il prodotto tra di loro restituirà un numero scomponibile in fattori primi, cioè $n+1$ .


