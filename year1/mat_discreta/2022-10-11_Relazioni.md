# Relazioni

Le **relazioni** sono dei confronti tra elementi di più insiemi, una relazione viene rappresentata con il simbolo $\mathcal{R}$ .

Una relazione binaria mette in relazione due elementi appartenenti a due insiemi, quindi $\mathcal{R} \subseteq A \times B$ .

Per rappresentare una relazione tra $a$ e $b$: $a \mathcal{R} b$

- Due elementi $x,y \in A$ si dicono **comparabili** se vale $x\mathcal{R}y$ oppure $y\mathcal{R}x$
- Due elementi $x,y \in A$ si dicono **incomparabili** se non vale né $x\mathcal{R}y$ né $y\mathcal{R}x$

## Proprietà delle relazioni

### Proprietà Riflessiva

mette in relazione $x$ con se stesso

$$(x,x) \in \mathcal{R}, \forall x \in A$$

Es. 

$x = x$

$x \leq x$

### Proprietà irriflessiva

$x$ non può essere messo a confronto con se stesso.

$$(x,x) \notin \mathcal{R}, \forall x \in A$$

Es.

$x<x$

$x>x$

### Proprietà simmetrica

se la relazione vale per $x$ verso $y$ allora vale anche per $y$ verso $x$ .

$$\text{se }(x,y) \in \mathcal{R} \text{ allora } (y,x) \in \mathcal{R}, \forall x,y \in A$$

Es.

$x=y \implies y=x$

$x+y = k \implies y+x = k$


### Proprietà antisimmetrica

Se la relazione vale per $x$ verso $y$ ma **non** per $y$ verso $x$ .

$$\text{se }(x,y) \in \mathcal{R} \text{ allora } (y,x) \notin \mathcal{R}, \forall x \neq y \in A$$

Es.

$x>y$, $x \geq y$

$x<y$, $x \leq y$

### Proprietà transitiva

Se vale la relazione tra $x$ e $y$ e vale quella tra $y$ e $z$ allora vale anche per $x$ e $z$ .

$$\text{se }(x,y) \in \mathcal{R} \text{ e } (y,z) \in \mathcal{R} \text{ allora } (x,z) \in \mathcal{R}, \forall x,y,z \in A$$

Es.

$x > y \land y > z \implies x > z$


## Relazioni d'ordine parziale

Una relazione di dice d'ordine parziale se soddisfa le seguenti proprietà:
- Riflessiva
- Antisimmetrica
- Transitiva

Es. $\leq, \geq, \subseteq, \supseteq$

Se una relazione d'ordine parziale ed è confrontabile (per ogni coppia vale $x\mathcal{R}y \text{ oppure } y\mathcal{R}x$) si dice **relazione d'ordine totale**.

### Relazione d'ordine parziale stretta

Una relazione di dice d'ordine parziale stretta se soddisfa le seguenti proprietà:
- Irriflessiva
- Antisimmetrica
- Transitiva

Es. $<,>, \subset, \supset$


## Relazione di equivalenza

Una relazione di dice di equivalenza se soddisfa le seguenti proprietà:
- Riflessiva
- Simmetrica
- Transitiva

### Classi di equivalenza

Ogni relazione $\mathcal{R}$ su un insieme $A$ suddivide l'insieme in classi di equivalenza, viene indicato con $[a]_\mathcal{R}$ .

$$[a]_\mathcal{R} = \lbrace x \in A : a \mathcal{R}x \rbrace$$

cioè la classe di equivalenza è l'insieme degli elementi di x che soddisfano la relazione con $a$ .

- La classe di equivalenza non può essere vuota.
- L'unione di tutte le classi restituisce l'insieme $A$ .
- Tutte le classi sono disgiunte tra loro (non hanno intersezioni).

