# Esercizi sugli alberi

## Nodi intermedi

Un nodo $u$ di un albero binario è detto **intermedio** se il la somma delle chiavi dei noi dei suoi sottoalberi è uguale alla somma delle chiavi dei nodi presenti nel percorso che collega la radice al nodo (escluso)

- scrivere una funzione efficiente che restituisce il numero nodi intermedi dell'albero data la sua radice
- analizzare la complessità dell'algoritmo

realizziamo un esempio di albero e vediamo quali sono i nodi intermedi:

![enter image description here](https://i.ibb.co/XzqTFfq/nodi-intermedi.png)

consideriamo la radice -4:
- somma sottoalberi = 8 + (-4) + 3 + (-1) + (-6) = 0
- somma percorso = 0
 **intermedio** 

nodo 8:
- somma sottoalberi = 8
- somma percorso = -4
**non intermedio**

nodo 3:
- somma sottoalberi = -1 + 3 + (-6) = -4
- somma percorso = -4
**intermedio**

nodo -1:
- somma sottoalberi = -1
- somma percorso = -4 + 3 = -1
**intermedio**

nodo -6:
- somma sottoalberi = -6
- somma percorso = -4 + 3 = -1
**non intermedio**

Proviamo a scrivere l'algoritmo in c++:

```c++
struct Node {
	int key;
	node* left;
	node* right;
};

int intermedi(node* r) {
	int sum_sott; // somma delle chiavi dei sottoalberi
	return intermedi_aux(r, 0, sum_sott);
}

int intermedi_aux(node* u, int sum_p, int& sum_sott) {
	if (u == nullptr) {	//caso base: l'albero è vuoto
		sum_sott = 0;
		return 0;
	}
	int num_sx, num_dx, sum_sx, sum_dx;
	num_sx = intermedi_aux(u->left, sum_p + u->key, sum_sx);
	num_dx = intermedi_aux(u->right, sum_p + u->key, sum_dx);
	sum_sott = sum_sx + sum_dx + u->key;
	if (sum_sott == sump) {
		return 1 + num_sx + num_dx;
	}
	else {
		return num_sx + num_dx;
	}
}
```

vediamo come funziona l'algoritmo:

la funzione `intermedi` si appoggia ad un'altra funzione che tiene traccia nei parametri di: la somma del percorso fino al nodo attuale con `sum_p` e la somma del sottoalbero contenuta in una reference `sum_sott` (nota che essendo una reference il suo valore verrà condiviso tra le chiamate ricorsive).

Pensando ad alto livello quello che fa l'algoritmo è solamente prendere quanti nodi sono intermedi nel sottoalbero sinistro, prendere quanti nodi sono intermedi nel sottoalbero destro e poi sommare la radice nel caso sia anch'essa un nodo intermedio.

Possiamo anche notare come la forma della funzione `intermedi_aux` sia molto simile ad una **post-order** proprio perche vogliamo visitare tutti i nodi dell'albero ottenendo prima informazioni sui sottoalberi sinistro e destro e la radice, la parte della "visita" possiamo pensarla come questo blocco di codice:

```c++
	sum_sott = sum_sx + sum_dx + u->key;
	if (sum_sott == sump) {
		return 1 + num_sx + num_dx;
	}
	else {
		return num_sx + num_dx;
	}
```


Analizziamo la complessità dell'algoritmo

$$T(n) = \begin{cases}
c & \text{se } n = 0 \\
T(k) + T(n-k-1) + d & \text{se } n>0
\end{cases}$$

Come detto nella spiegazione l'algoritmo è come se fosse una visita in profondità (post-order in particolare) e secondo il teorema delle visite in profondità che abbiamo visto la complessità dell'algoritmo è 

$$T(n) = (c + d)n + c = \Theta(n)$$


## Albero k-compreso

Un albero binario si dice k-compreso per un dato numero naturale $k$ se per ogni nodo la somma delle chiavi del sottoalbero è compresa tra $-k$ e $k$

 realizziamo un esempio di albero non k-compreso:
 
![enter image description here](https://i.ibb.co/bs9dVMS/non-k-compreso.png)

Se $k = 2$ abbiamo che la somma dei nodi $3 + (-1) + 2 = 4$ non è compresa tra $-2$ e $2$

mentre l'albero

![enter image description here](https://i.ibb.co/KbMHJgT/k-compreso.png)
è 2-compreso dato che $3 + (-1) + 2 + (-2)= 2$ è compresa tra $-2$ e $2$


Proviamo a scrivere l'algoritmo in c++:

```c++
bool k-compreso(node* r, int k) {
	int sum;
	return k_compreso_aux(r, k, sum);
}

bool k_compreso_aux(node* u, int k, int& sum) {
	if (u == nullptr) {
		sum = 0;
		return true;
	}
	else {
		int left_res, right_res, left_sum, right_sum;
		left_res = k_compreso_aux(u->left, k, left_sum);
		right_res = k_compreso_aux(u->right, k, right_sum);
		sum = left_sum + right_sum + u->key;
		if (sum >= (-1 * k) && sum <= k) {
			return left_res && right_res;
		}
		else {
			return false;
		} 
	}
}
```


Analizziamo la complessità dell'algoritmo

$$T(n) = \begin{cases}
c & \text{se } n = 0 \\
T(k) + T(n-k-1) + d & \text{se } n>0
\end{cases}$$

$$T(n) = (c + d)n + c = \Theta(n)$$

## Altezza nera

data una radice `u` di un albero binario i cui nodi hanno, oltre ai soliti campi, il campo `color` che può essere "black" oppure "red". Voglio verificare che per ogni nodo i cammini che vanno dal nodo alle foglie abbiano tutti lo stesso numero di nodi "black" (questo numero è detto altezza nera di un nodo). 
Se non si verifica questa proprietà la funzione ritorna `-1` altrimenti ritorno l'altezza nera dell'albero

guardiamo due esempi:

![enter image description here](https://i.ibb.co/tX5HczT/altezza-nera1.png)

In questo primo esempio la proprietà viene rispettata: ogni nodo ha lo stesso numero di nodi neri nei suoi cammini fino alle foglie.
Prendiamo in considerazione la radice: a sinistra nel cammino a sinistra ha un nodo nero e a destra ha un nodo nero quindi hanno lo stesso numero di nodi, dato che il nodo stesso è un nodo nero allora la altezza diventa 2.
Lo stesso ragionamento va applicato ad ogni nodo dell'albero, se tutti soddisfano la condizione allora ritorniamo l'altezza nera della radice.

In quest'altro esempio la proprietà non è soddisfatta per tutti i nodi:

![enter image description here](https://i.ibb.co/3rhzqmk/altezza-nera2.png)

Considerando il figlio destro della radice: esso ha che in un cammino ha un nodo nero mentre nell'altro ne ha zero, non avendo lo stesso numero allora la proprietà non è soddisfatta.


```c++
int black_height(node* u) {
	if (u == nullptr) {
		return 0;
	}
	int ris_sx, ris_dx, ris;
	ris_sx = black_height(u->left);
	ris_dx = black_height(u->right);
	
	// se almeno uno dei due sottoalberi ha già infranto la proprietà
	if (ris_sx == -1 || ris_dx == -1) {	
		return -1;
	}
	
	// se l'attuale nodo infrange la proprietà
	//dobbiamo comparare ris_sx e ris_dx solo se esistono entrambi i figli del nodo,
	//se esiste solo un figlio abbiamo un solo cammino da seguire quindi non dobbiamo compararlo con niente.
	// guarda il caso del primo esempio considerando il nodo rosso
	if (ris_sx != ris_dx && (u->left != nullptr) && (u->right != nullptr)) {
		return -1;
	}

	// se il nodo non ha il figlio sinistro, l'altezza sarà data dal cammino destro
	if (u->left == nullptr) {
		ris = ris_dx;
	}
	// se il nodo non ha il figlio destro (oppure è un foglia), l'altezza sarà data dal cammino sinistro. Se è una foglia allora sarà zero
	else {
		ris = ris_sx;
	}
	
	// se il nodo è nero allora sommo 1 al risultato
	if (u->color == "black") {
		ris++;
	}
	return ris;
}
```

Anche in questo caso abbiamo la solita complessità, visitiamo tutti i nodi una volta.

$$T(n) = \begin{cases}
c & \text{se } n = 0 \\
T(k) + T(n-k-1) + d & \text{se } n>0
\end{cases}$$

$$T(n) = (c + d)n + c = \Theta(n)$$


## Numero foglie

Avendo un albero generale (con un numero non fissato di figli) voglio scrivere una funzione efficiente che calcoli il numero di foglie dell'albero

I nodi dell'albero sono fatti in questo modo:

```c++
struct node {
	int key;
	node* left_child;	//figlio più a sinistra
	node* right_sib;	//immediato fratello destro
};
```

rappresentiamolo graficamente

![enter image description here](https://i.ibb.co/wgG96c2/numero-foglie.png)

quelle in indicate in verde sono le foglie.
Possiamo riconoscere le foglie dal fatto che non hanno `left_child == nullptr`


```c++
int num_foglie(node* u) {
	if (u == nullptr) {
		return 0;
	}
	// ottengo le foglie dei fratelli
	int num_foglie_fratelli = num_foglie(u->right_sib);
	// se sono una foglia incremento il contatore
	if (u->left_child == nullptr) {
		return 1 + num_foglie_fratelli;
	}
	// unisco le foglie derivate dai miei figli e quelle derivate dai miei fratelli
	return num_foglie(u->left_child) + num_foglie_fratelli;
}
```

In questi casi di alberi generali possiamo "binarizzare" l'albero immaginando `right_sib` e `left_child` come puntatori a due figli. La complessità è quindi la solita

$$T(n) = \begin{cases}
c & \text{se } n = 0 \\
T(k) + T(n-k-1) + d & \text{se } n>0
\end{cases}$$

$$T(n) = (c + d)n + c = \Theta(n)$$

## Albero k-ario completo

Dato un albero generale e un numero naturale $k \geq 2$ voglio verificare che l'albero sia $k$-ario completo.

Il seguente albero è $k$-ario completo con $k = 2$

![enter image description here](https://i.ibb.co/4RGYD4B/k-ario-completo.png)

```c++
bool k_completo(node* u, int k) {
	int h;
	return k_completo_aux(u, k, h);
}

bool k_completo_aux(node* u, int k, int& h) {
	if (u == nullptr) {
		h = -1;
		return true;
	}
	int temp;
	int altezza_figli = -1;
	node* figlio = u->left_child;
	int grado = 0;
	bool ris = true;
	
	//scorro tutti i figli del mio nodo, partendo dal figlio sinistro a tutti i suoi fratelli
	while(figlio != nullptr && res == true) {
		grado++;
		// se l'attuale grado supera k oppure se il sottoalbero figlio supera il grado k allora possiamo interrompere il ciclo (ris = false)
		// temp rappresenta l'altezza del figlio (la utilizzo come secondo valore di ritorno)
		ris = (grado <= k && k_completo_aux(figlio, k, temp));
		// se l'altezza dei figli non è stata ancora settata allora impostala a temp
		if (altezza_figli == -1) {
			altezza_figli = temp;
		}
		// se è già stata settata controlla che sia uguale, se è diversa significa che ci sono delle foglie più profonde oppure meno profonde quindi non è completo.
		else {
			ris = ris && altezza_figli == temp;
		}
		// passa al figlio successivo (al fratello)
		figlio  = figlio->right_sib;
	}
	//all'altezza dei figli aggiungo l'altezza della radice
	h = altezza_figli + 1;
	
	// grado == k per i nodi interni mentre grado == 0 per le foglie
	return ris && (grado == k || grado == 0)
}
```

In questo algoritmo scorriamo tutti i nodi nel caso peggiore: se ci accorgiamo che non è un albero completo allora terminiamo l'esecuzione molto prima di visitare tutti i nodi. Siamo quindi limitati superiormente dal numero di nodi
Abbiamo una complessità di

$$T(n) = O(n)$$

## Stampa livello

Dato un albero binario e un intero $k\geq0$ creare una funzione che stampi le chiavi dei nodi a livello $k$ da sinistra a destra.
Calcolare la complessità rispetto a $k$ e rispetto al numero di nodi

```c++
void stampa_livello(node* u, int k) {
	if (u == nullptr) {
		return;
	}
	if (k == 0) {
		std::cout<<u->key;
	}
	else {
		stampa_livello(u->left_child, k-1);
		stampa_livello(u->right_child, k-1);
	}
}
```

### complessità rispetto a $k$

$$T(k) = \begin{cases}
c & \text{se } k = 0 \\
T(k-1) + T(k-1) + d & \text{se } k>0
\end{cases}$$

$$T(k) = \begin{cases}
c & \text{se } k = 0 \\
2T(k-1) + d & \text{se } k>0
\end{cases}$$

Otteniamo la complessità tramite il metodo iterativo

$$2T(k-1)+d =$$

$$2(2T(k-2)+d)+d =$$

$$2(2(2T(k-3)+d)+d)+d$$

cerchiamo il pattern

$$8T(k-3)+4d+2d+d$$

$$8T(k-3)+d(4+2+1)$$

$$2^xT(k-x)+d(2^2+2^1+2^0)$$

possiamo scrivere $(2^2+2^1+2^0)$ come una serie geometrica:

$$d\cdot \sum_{i = 0}^{x-1}q^i = d\cdot \frac{q^{(x-1)+1}-1}{q-1} \hspace{10mm} q\neq 1$$


$$2^xT(k-x)+d\frac{2^{x-1+1}-1}{2-1}$$

$$2^xT(k-x)+d\frac{2^x-1}{1}$$

$$2^xT(k-x)+d(2^x-1)$$

la ricorsione continuerà fino a che

$$k-x = 0$$

$$k = x$$

sostituendo

$$2^kT(0)+d(2^k-1)$$

$$2^kc+d2^k-d$$

$$2^k(c + d) -d$$

Abbiamo quindi una complessità **esponenziale**

$$T(k) = \Theta(2^k)$$


### complessità rispetto a $n$

In questo caso abbiamo la solita complessità data dalla visita di tutti i nodi

$$T(n) = \begin{cases}
c & \text{se } n = 0 \\
T(n_s) + T(n-n_s-1) + d & \text{se } n>0
\end{cases}$$


dato che è possibile fermarmi prima di visitare tutti i nodi, sono limitato superiormente dal numero di nodi.
$$T(n) = O(n)$$
