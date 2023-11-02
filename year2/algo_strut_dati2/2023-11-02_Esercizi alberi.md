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

$$T(n) = \Theta(n)$$


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
			return true && left_res && right_res;
		}
		else {
			return false;
		} 
	}
}
```
