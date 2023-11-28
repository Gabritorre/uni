# Esercizi sugli alberi binari di ricerca

## Es 1

Dato un albero binario di ricerca `t`, scrivere una funzione efficiente che restituisca il numero massimo di ripetizioni di una chiave nell'albero.

![enter image description here](https://i.ibb.co/Tm2ctd9/image.png)


In questo albero il risultato sarebbe 3 perche la chiave che si ripete più volte è il 10 che si ripete 3 volte.

**Gran parte dei problemi con gli alberi binari di ricerca si risolvono con lo stesso metodo che vedremo ora.**

Il metodo è quello si **simulare una visita in-order** in modo da visitare l'albero dal nodo più piccolo a quello più grande. Durante la visita possiamo fare le nostre operazioni per risolvere il problema dato.

Il questo specifico caso durante la visita possiamo andare a contare quante volte si ripete ogni numero (dato che i numeri ripetuti sono sequenziali) e teniamo salvato il numero massimo di ripetizioni.

la visita in-order dell'albero nell'immagine sarebbe: `[7, 9, 9, 10, 10, 10, 20, 20, 23]`

per simulare la visita in-order:
1. partiremo dal nodo minimo, ottenuto tramite la funzione `minimum()`
2. scorreremo ogni nodo tramite la funzione `successore()` che verrà eseguita n-1 volte

Vediamo l'algoritmo

```c++
int maxrip(PTree t) {
	PNode iter;
	int max;	//tiene salvato l'attuale numero massimo di ripetizioni
	int count;	//conta il numero di ripetizioni dell'attuale chiave visitata
	int val;	//tiene salvato il valore precedente
	if (t->root == nullptr) {
		return 0;
	}
	iter = minimum(t->root);
	max = 1;
	count = 1;
	val = iter->key;
	iter = successore(iter);
	while(iter != nullptr) {
		if (iter->key == val) {
			count++;
		}
		else {
			if (count > max) {
				max = count;
			}
			count = 0;
			val = iter->key;
		}
		iter = successore(iter);
	}
	if (count > max) {
		max = count;
	}
	return max;
}
```

Analizziamo la complessità dell'algoritmo:
- la funzione `minimum` ha complessità $O(h)$ e viene eseguita solo una volta
- la funzione `successore` ha complessità $O(h)$ e viene eseguita n-1 volte

La complessità è quindi data quindi dallo scorrimento dell'albero, lo scorrimento non si può fermare anticipatamente e quindi la complessità è 

$$T(n) = \Theta(n)$$


## Es 2

Dato un albero binario determinare se esso è un albero binario di ricerca

Risolveremo questo problema usando la decomposizione.
La proprietà che sfruttiamo per andare a verificare che sia un albero binario di ricerca è quello di verificare che per ogni nodo $u$ dell'albero il valore massimo del sottoalbero sinistro deve essere minore di $u$ e il valore minimo del sottoalbero destro deve essere maggiore di $u$

Il codice avrà la forma della visita post-order

```c++
f(nodo)
	f(nodo->left);
	f(nodo->right);
	controllo_proprietà
```

Utilizzeremo una funzione ausiliaria per riuscire a tenere traccia del minimo e il massimo da un sottoalbero.

Questo è un caso particolare in cui il **caso base è il raggiungimento delle foglie**

```c++
bool isBSD(PNode u) {
	if (u == nullptr) {
		return true;
	}
	int min, max;
	return isBSD_aux(u, min, max);
}

bool isBSD_aux(PNode u, int& min, int& max) {
	bool ris_sx, ris_dx;
	int min_sx, max_sx, min_dx, max_dx;
	
	//se il nodo non ha figli sinistri (foglia sinistra), allora lui stesso rappresenta il minimo e il massimo sinistri
	if(u->left == nullptr) {
		ris_sx = true;
		min_sx = u->key;
		max_sx = u->key;
	}
	else {	//se ci sono figli sinistri si prosegue fino al raggiungimento delle foglie
		//per il sottoalbero sinistro siamo interessati a max_sx
		ris_sx = isBSD_aux(u->left, min_sx, max_sx); 
	}
	
	//se il nodo non ha figli destri(foglia destra), allora lui stesso rappresenta il minimo e il massimo destri
	if (u->right == nullptr) {
		ris_dx = true;
		min_dx = u->key;
		max_dx = u->key;
	}
	else {//se ci sono figli destri si prosegue fino al raggiungimento delle foglie
		//per il sottoalbero destro siamo interessati a min_dx
		ris_dx = isBSD_aux(u->right, min_dx, max_dx);
	}
	
	//controllo della proprietà
	if(!ris_sx || !ris_dx || max_sx > u->key || min_dx < u->key) {
		return false;
	}
	min = min_sx;
	max = max_dx;
	return true;
}

```

Come detto Abbiamo usato la decomposizione e quindi è come se avessimo visitato tutti i nodi dell'albero.

$$T(n) = \Theta(n)$$

Si potrebbe ottimizzare terminando la funzione appena si infrange la proprietà, quindi di controllare se `ris_sx` è `false` prima di andare a vedere il sottoalbero destro.
In questo caso la complessità sarebbe $T(n) = O(n)$


## Es 3

Dato un albero binario di ricerca verificare se soddisfa la seguente proprietà:
per ogni chiave $k$, se la chiave $k$ e $k + 2$ sono presenti allora anche la chiave $k + 1$ è presente.

Scritta in modo matematico:

$$k\in T \land k+2 \in T \implies k + 1 \in T$$

Come vediamo è una **implicazione**, è importante ricordare la tabella di verità dell'implicazione

| $a$ | $b$ | $a\implies b$ |
|:--:|:--:|:--:|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |


Vediamo alcuni alberi di esempio

![enter image description here](https://i.ibb.co/TqTyVf8/image.png)

- albero 1: dato che per ogni chiave $k$ non è presente la chiave $k + 2$ allora l'albero rispetta la proprietà
- albero 2: l'unica chiave $k$ per cui è presente anche $k + 2$ è $k = 10$, infatti troviamo il valore $k + 2 = 12$, la proprietà viene rispettata perché è presente anche il valore $k + 1 = 11$
- albero 3: l'unica chiave $k$ per cui è presente anche $k + 2$ è $k = 13$, infatti troviamo il valore $k + 2 = 15$, la proprietà però non viene rispettata perché non  è presente il valore $k + 1 = 14$

Questo è un altro problema che si risolve simulando la visita simmetrica (in-order)
Infatti basta dire che se il successore di una chiave è la chiave + 2 allora la proprietà non viene rispettata.
Mentre se il successore è la chiave + 1 oppure un valore superiore a 2 allora la proprietà viene rispettata

Vediamo l'algoritmo

```c++
bool check(tree t) {
	bool valido = true;
	PNode succ;
	PNode iter;
	if (t->root == nullptr) {
		return true;
	}
	iter = minimum(t->root);
	while(iter != nullptr && valido) {
		succ = successore(iter);
		if (succ != nullptr && succ->key == iter->key + 2) {
			valido = false;
		}
		else {
			iter = succ;
		}
	}
	return valido;
}
```

Come abbiamo già visto stiamo simulando una visita in-order $(\Theta(n))$ ma dato che, nel caso si infranga la proprietà, possiamo terminare anticipatamente l'algoritmo allora la complessità è

$$T(n) = O(n)$$
