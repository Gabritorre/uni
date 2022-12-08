# Trasformazioni lineari

Le Trasformazioni lineari o applicazioni lineari sono sono funzioni tra due spazi vettoriali che conserva le combinazioni lineari, cioè somma di vettori e moltiplicazione di vettori per scalari

Siano $V, W$ spazi vettoriali sullo stesso campo,

Una funzione $f: V \longrightarrow W$ è una trasformazione lineare quando soddisfa:
$\forall x,y \in V$ (vettori) e $r$ scalare

1. $f(x+y) = f(x) + f(y)$
2. $f(rx) = rf(x)$

## Omomorfismo

Una trasformazione lineare è un omomorfismo se oltre a soddisfare

1. $f(x+y) = f(x) + f(y)$
2. $f(rx) = rf(x)$

soddisfa anche

3. l'immagine della somma è uguale alla somma delle immagine
4. l'immagine del prodotto è uguale al prodotto dello scalare per l'immagine

### Isomorfismo

Due spazi vettoriali sono **isomorfi** (stessa forma) se esiste una trasformazione lineare tale che

$f: V \longrightarrow W$

$f^{-1}: W \longrightarrow V$

Due spazi vettoriali hanno la stessa struttura algebrica

Tra i due spazi vettoriali c'è una relazione di equivalenza perché esiste una **biiezione lineare**

**Quindi qualsiasi applicazione lineare invertibile è un isomorfismo**

### Endomorfismo

Si parla di endomorfismo quando il Dominio coincide con il codominio

$f: V \longrightarrow V$

### Automorfismo

Si tratta di un endomorfismo invertibile

$f: V \longrightarrow V$

$f^{-1}: V \longrightarrow V$

## Esempi di trasformazioni lineari

Sono delle trasformazioni lineari:

1. La funzione identità
2. Le composizioni $(f \circ g \text{ oppure } g \circ f)$
3. Somma di trasformazioni lineari


## Capisaldi delle trasformazioni lineari

### Nucleo

Il nucleo è un sottoinsieme del dominio composto da tutti i vettori che hanno come immagine lo zero del codominio

serve a studiare l'inettività della trasformazione

### Immagine (detto "rango" nelle matrici)

L'immagine è un sottoinsieme del codominio formato da vettori che sono immagine dei vettori del dominio

serve a studiare la suriettività della trasformazione, serve anche a trovare la controimmagine della funzione

### Definizione matematica

$f: V \longrightarrow W$

Nucleo: $\ker(f) = \lbrace v\in V: f(v) = 0\rbrace$

Immagine: $\text{Im}(f) = \lbrace w \in W: \exists v \in V \text{ per cui }f(v) = w\rbrace$


### Teorema delle dimensioni

Detto anche teorema della nullità più rango.

Questo teorema mette in relazione le dimensioni di nucleo e immagine con la dimensione dello spazio vettoriale su cui è definita la trasformazione

La dimensione dello spazio vettoriale è data dalla somma tra la dimensione del nucleo e la dimensione dell'immagine

$f: V \longrightarrow W$

$$\dim(V) = \dim(ker(f)) + \dim(\text{Im}(f))$$

### Biiettività

$f: V \longrightarrow W$

- Una applicazione è **iniettiva** se $\dim(\ker(f)) =0$
- Una applicazione è **suriettiva** se $\dim(\text{Im}(f)) = \dim(W)$ quindi se $\text{Im}(f)) = W$
- Una applicazione è **biiettiva** se è iniettiva e suriettiva, se è biiettiva allora è anche invertibile

## Da trasformazione a matrice

$T: \mathbb{R}^2\longrightarrow\mathbb{R}^3$

$T((x,y)) = (x+y, 2x, x-y)$

Otterremo una matrice dei coefficienti per matrice delle incognite

La matrice dei coefficienti avrà 2 colonne e 3 righe (dominio = colonne, codominio = righe)



$$\begin{bmatrix}
1 & 1 \\
2 & 0 \\
1 & -1
\end{bmatrix}
\cdot 
\begin{bmatrix}
x \\
y \\
\end{bmatrix} =
\begin{bmatrix}
x + y \\
2x \\
x-y
\end{bmatrix}$$

## Span

Lo **Span** o **sottospazio generato** rappresenta tutte le possibili combinazioni lineari di un insieme di vettori.

Es.

$$v_1 = \begin{pmatrix} 1\\1\end{pmatrix} v_2 = \begin{pmatrix} 2\\2\end{pmatrix}$$

$$\text{span}(v_1,v_2) = \lbrace a_1v_1 + a_2v_2\rbrace \text{ con } a_1,a_2 \in \mathbb{R}$$


## Sistema di generatori

Uno spazio vettoriale $V$ è un sistema di generatori di $V$ se e solo se ogni vettore di $V$ si può scrivere come combinazione lineare

### Differenza tra sistema di generatori e sottospazio generato

- **Sistema di generatori**: insieme di vettori che genera lo spazio vettoriale $V$
- **Sottospazio generato da un insieme di vettori di $V$**: sottospazio vettoriale di $V$
- Se $\lbrace v_1,...,v_n\rbrace$ è un sistema di generatori di $V$ allora $V$ coincide con il sottospazio generato dai vettori. Di conseguenza i vettori che definiscono un *sottospazio generato* sono anche un sistema di generatori del sottospazio che generano.
