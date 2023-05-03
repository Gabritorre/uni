# Integrali doppi

Gli integrali riguardano il calcolo integrale di funzioni a due variabili.

Consideriamo una funzione definita in un dominio rettangolare

$f:[a,b]\times[c,d]\longrightarrow \mathbb{R}$

$$\int\int f(x,y) dx \, dy$$

Per calcolare gli integrali definiti possiamo considerare il seguente grafico:

![](https://i.ibb.co/ch9f3H6/grafo-sezione.png)

l'obbiettivo è ottenere un numero che possiamo usare per rappresentare l'area della figura tridimensionale.
Per farlo facciamo un integrazione da $a$ a $b$ per ottenere l'area di una sezione (quella colorata).
Facciamo l'integrazione da $c$ a $d$ del risultato ottenuto per fare l'area delle sezioni per tutto il dominio.

$$\int_c^d \left(\int_a^b f(x,y)dx\right)dy$$

**Come in una dimensione vale il teorema per cui se la funzione è continua allora è integrabile.**
