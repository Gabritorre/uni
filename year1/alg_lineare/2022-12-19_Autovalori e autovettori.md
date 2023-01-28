# Autovalori e autovettori

Lavorando su uno spazio vettoriale

Uno scalare $\lambda_0$ si dice **autovalore di una matrice** $A$  se esiste un vettore colonna (non nullo) tale che:

$$Av = \lambda_0v$$

Mentre nella precedente equazione il vettore $v$ è definito **autovettore**

$$\begin{bmatrix} 
a & b  & c \\
d & e & f \\
g & h & i \\
\end{bmatrix} \cdot \begin{bmatrix} 
k_1 \\
k_2 \\
k_3 \\
\end{bmatrix} = \lambda_0 \cdot \begin{bmatrix} 
k_1 \\
k_2 \\
k_3 \\
\end{bmatrix}$$

### Geometricamente

I vettori hanno una direzione.

Gli **autovettori** sono vettori che non cambiano direzione applicando le trasformazioni lineari

Gli **autovalori** sono degli scalari usati per allungare e comprimere gli autovettori


## Applicazioni lineari

Avendo:

$Av_1 = \lambda v_1$

$Av_2 = \lambda v_2$

- $A(v_1 + v_2) = Av_1 + Av_2 = \lambda v_1 + \lambda v_2 = \lambda(v_1 + v_2)$
	- Quindi $A(v_1 + v_2) = \lambda(v_1 + v_2)$
- $A(c\cdot v_1) = c\cdot Av_1 = c\cdot \lambda v_1 = \lambda c v_1$

NB Anche se $v_1, v_2$ sono autovettori di $A$ , $v_1 + v_2$ **non è un autovettore** di $A$


## Calcolo di autovalori e autovettori


Da $Av = \lambda v$ si deriva che $v(A - \lambda I) = 0$ Dove $I$ è la matrice identità
 
Gli autovalori sono gli scalari $\lambda$ che rendono il determinante di $A$ nullo

$$\det(A-\lambda I) = 0$$

### Polinomio caratteristico di A

La scrittura $\det(A-\lambda I) = 0$ corrisponde al **polinomio caratteristico** della matrice $A$

$$P_A(\lambda) = \det(A-\lambda I)$$

Per calcolare gli autovalori basta trovare gli zeri del polinomio, una volta trovati gli autovalori è possibile calcolare gli autovettori

Es.

$A = \begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix}$

$I = \begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix}$

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - \lambda 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix} \longrightarrow \begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} -  
\begin{bmatrix}
\lambda & 0 \\
0 & \lambda \\
\end{bmatrix} \longrightarrow \begin{bmatrix}
(1-\lambda) & -2 \\
1 & (4 - \lambda) \\
\end{bmatrix}$

Quindi

$$\det \left( \begin{bmatrix}
(1-\lambda) & -2 \\
1 & (4 - \lambda) \\
\end{bmatrix} \right) = 0$$


$$(1-\lambda) \cdot (4-\lambda) - (-2 \cdot 1)] = 0$$

$$P_A(\lambda) = 4-\lambda - 4\lambda + \lambda^2 +2$$

$$P_A(\lambda) = \lambda^2 - 5\lambda + 6$$

Troviamo gli zeri del polinomio

$\lambda^2 - 5\lambda + 6 = 0$

$(\lambda - 3) \cdot (\lambda - 2) = 0$

Ottengo gli autovalori: $\lambda_1 = 3, \lambda_2 = 2$

### cerchiamo gli autovettori relativi a $\lambda_1$ :

Risolvo $(A-\lambda_1I)v = 0$ :

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 3 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 
\begin{bmatrix}
3 & 0 \\
0 & 3 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
-2 & -2 \\
1 & 1 \\
\end{bmatrix}
\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

Dato che il rango della matrice è 1, secondo il teorema di Rouchè-Capelli esistono infinite soluzioni

passando ad un sistema lineare

$\begin{cases} 
-2x -2y = 0 \\
x + y = 0
\end{cases}$

Dato che ci sono infinite soluzione assegno ad una incognita il ruolo di parametro libero, per esempio $y = t$

$\begin{cases} 
y = t \\
x  = -t
\end{cases}$

Quindi l'autovettore associato all'autovalore $\lambda_1 = 3$ è:

$$\begin{pmatrix}
-t \\
t \\
\end{pmatrix} \longrightarrow t \cdot \begin{pmatrix}
-1 \\
1 \\
\end{pmatrix}$$


### cerchiamo gli autovettori relativi a $\lambda_2$ :

Risolvo $(A-\lambda_2I)v = 0$ :

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 2 
\begin{bmatrix}
1 & 0 \\
0 & 1 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
1 & -2 \\
1 & 4 \\
\end{bmatrix} - 
\begin{bmatrix}
2 & 0 \\
0 & 2 \\
\end{bmatrix} \begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

$\begin{bmatrix}
-1 & -2 \\
1 & 2 \\
\end{bmatrix}
\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}$

Dato che il rango della matrice è 1, secondo il teorema di Rouchè-Capelli esistono infinite soluzioni

passando ad un sistema lineare

$\begin{cases} 
-x -2y = 0 \\
x + 2y = 0
\end{cases}$

Dato che ci sono infinite soluzione assegno ad una incognita il ruolo di parametro libero, per esempio $y = t$

$\begin{cases} 
y = t \\
x = -2t
\end{cases}$

Quindi l'autovettore associato all'autovalore $\lambda_2 = 2$ è:

$$\begin{pmatrix}
-2t \\
t \\
\end{pmatrix} \longrightarrow t \cdot \begin{pmatrix}
-2 \\
1 \\
\end{pmatrix}$$


Quindi gli autovettori risultanti sono:


- $v_{\lambda_{1}} = \begin{pmatrix}
-t \\
t \\
\end{pmatrix}$

- $v_{\lambda_{2}} =\begin{pmatrix}
-2t \\
t \\
\end{pmatrix}$

## Diagonalizzabilità e triangolarizzabilità

### Molteplicità algebrica e molteplicità geometrica

- Si dice **molteplicità algebrica** il numero di volte in cui l'autovalore $\lambda$ è risultato dell'operazione $\det(A-\lambda I) = 0$
	
	se abbiamo $(1-\lambda)(\lambda^2-1)\longrightarrow (1 - \lambda)(\lambda - 1)(\lambda + 1)$
	
	otteniamo $\lambda_0 = 1, \lambda_1 = 1, \lambda_2 = -1$

	quindi la molteplicità algebrica è 3.
	(possimo dire che  la molteplicità algebrica di $\lambda_0$ è 2 ($\lambda_0 = \lambda_1$) mentre la molteplicità di $\lambda_2$ è 1)
	
	In conclusione possiamo dire che:
	- In $\mathbb{R}$ la molteplicità algebrica è $\leq$ del numero di righe (o colonne, perché lavoriamo con matrice quadrate) della matrice.
	- In $\mathbb{C}$ la molteplicità algebrica è $=$ al numero di righe (o colonne, perché lavoriamo con matrice quadrate) della matrice.

- Si dice **molteplicità geometrica** la dimensione dell'autospazio di un autovalore, calcolato con la formula:
	
	$$n - rango(A-\lambda_i \cdot Id)$$
	
	dove:
	- $n =$ numero di righe (o colonne)
	- $A =$ la matrice di partenza
	- $\lambda_i =$ autovalore
	-  $Id =$ matrice identità

$$1 \leq m_g \leq m_a \leq n$$

Quindi se la molteplicità algebrica di un autovalore è 1 anche la molteplicità geometrica è 1

### Diagonalizzabilità

Una trasformazione lineare è diagonalizzabile se e solo se:
- La la molteplicità algebrica della trasformazione è uguale alla molteplicità geometrica della trasformazione
- Per ogni autovalore la molteplicità algebrica e geometrica sono uguali

La matrice diagonale è una matrice composta dalla diagonale principale contenente gli autovalori, ripetuti nel caso in cui abbiano molteplicità maggiore di 1.

### Triangolarizzabilità

Una trasformazione lineare è triangolizzabile se e solo se:
- Gli autovalori appartengono allo stesso campo (Tutti Reali o tutti complessi)
