# Spazi vettoriali

Possiamo vedere algebricamente i **vettori** come una lista ordinata di numeri la cui lunghezza è determinata dalla dimensione dello spazio vettoriale, ad esempio se siamo nello spazio tridimensionale i vettori saranno composti da 3 numeri.

Lo spazio vettoriale è un insieme di elementi chiamati vettori che soddisfa 8+1 proprietà e che è definito su un insieme di numeri (detti **scalari**) chiamato **campo** (ad esempio il campo del numeri reali $\mathbb{R}$),

Indicheremo uno spazio vettoriale in questo modo $V^n(K)$, dove $n$ è la dimensione dello spazio e $K$ il campo.

## Proprietà

Dato lo spazio vettoriale $V^n(K)$, siano

- $u, v, z \in V^n(K)$ dei vettori
- $a, b \in K$ degli scalari

Definiamo anche le seguenti operazioni:

- $+$ somma tra vettori
- $\oplus$ somma tra scalari
- $\cdot$ prodotto tra scalari
- $\bullet$ prodotto tra scalare e vettore

Le 8+1 proprietà sono le seguenti (nota che il +1 riguarda la proprietà $0$ che si riferisce a delle proprietà intrinseche dei vettori):

| Numero proprietà | Proprietà | Nome |
| --- | --- | --- |
| 0 | $u + v \in V^n(K),\, a \bullet u \in V^n(K)$ | chiusura rispetto alla somma e al prodotto per uno scalare |
| 1 | $(u + v) + z = u+(v + z)$ | proprietà associativa della somma |
| 2 | $\exist w \in V^n(K): v + w = v$ | proprietà dell’elemento neutro o nullo rispetto alla somma |
| 3 | $\forall x \in V^n(K)\, \exist \,\bar x\in V^n(K): x + \bar x = w$ | proprietà dell’elemento opposto o inverso |
| 4 | $u + v = v + u$ | proprietà commutativa |
| 5 | $a \bullet(b \bullet u) = (a \cdot b)\bullet u$ | proprietà associativa del prodotto per scalari |
| 6 | $\exist \sigma \in K : \sigma \bullet v = v$ | proprietà neutro rispetto al prodotto per scalare |
| 7 | $(a \oplus b) \bullet v = a \bullet v + b \bullet v$ | proprietà distributiva rispetto alla somma per scalari |
| 8 | $a \bullet (v  + u) = a \bullet v + a \bullet u$ | proprietà distributiva rispetto al prodotto per scalari |
