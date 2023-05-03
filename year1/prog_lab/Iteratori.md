# Iteratori

Gli iteratori sono degli oggetti che puntano agli elementi di una struttura dati come le liste.

Rappresentano un modo per scorrere e modificare le liste, quindi in generale effettuare operazioni sulle strutture dati della standard library.

Sono molto generalizzati per cui gli iteratori della standard librari si adattano in basa alla struttura dati su cui operano.

Si possono chiamare facendo:

```c++
#include <vector>
//#include <iterators> //non è necessario includere la libreria
//perchè viene già inclusa dalle strutture della libreria standard (proprio come vector, list, stack ecc...), è possibili che le strutture dati ridefiniscano i metodi della classe iterator

int main() {
	std::vector<int> lista = {1,2,3,4,5}; // creiamo la nostra lista
	std::vector<int>::iterator it; // creiamo l'iteratore
	//scorriamo la lista con gli iterator
	for(it = lista.begin(); it != lista.end(); it++) {
		std::cout<<*it;
	}
}
```

- `begin()` restituisce un iteratore che punta al primo elemento della lista
- `end()` restituisce un iteratore all'elemento successivo all'ultimo (nullptr)
- `*it` dereferenziando l'iteratore possiamo accedere all'elemento puntato dall'iteratore (sia lettura che scrittura)

è possibile fare la stessa cosa utilizzando i cicli for-each che nella loro implementazione fanno uso in modo trasparente degli iteratori:

```c++
#include <vector>
//#include <iterators> //non è necessario includere la libreria
//perchè viene già inclusa dalle strutture della libreria standard (proprio come vector, list, stack ecc...), è possibili che le strutture dati ridefiniscano i metodi della classe iterator

int main() {
	std::vector<int> lista = {1,2,3,4,5};
	for(auto el :lista) {
		std::cout<<el;
	}
}
```

Nella standard library è presente sia l'**iteratore** normale che l'**iteratore costante** che impedisce di modificare gli elementi da esso puntati. Nota che la classe `const_iterator` è diversa da fare `const iterator`: 
nel primo caso la classe è implementata per rendere `const` gli elementi puntati dall'iteratore, nel secondo caso non possiamo modificare l'iteratore in sé.

## Tipi di iteratori

In c++ sono definiti 6 diversi tipi di iteratori

- **input iterator** può scorrere il container solo una volta (solo in avanti) e non può modificare gli elementi
- **output iterator** può scorrere il container solo una volta (solo in avanti) e non può leggere gli elementi
- **forward iterator**  può scorrere più volte il container (solo in avanti) e può leggere e modificare gli elementi
- **bidirectional iterator** può scorrere più volte il container (sia in avanti che in indietro) e può leggere e modificare gli elementi 
- **random iterator** può scorrere più volte il container (sia in avanti che in indietro) e può leggere e modificare gli elementi e può saltare ad elementi in mezzo 
- **contiguous iterator** uguale al random ma in più assicura che gli elementi adiacenti a quello puntato siano sequenziali in memoria.

![](https://i.ibb.co/02vn09d/container.png)

## operazioni essenziali iteratori

Se vogliamo implementare un nostro iteratore per un particolare container dobbiamo implementare delle operazioni importanti nel nostra classe iteratore:

- `operator*()const;` operatore di dereferenziazione con cui possiamo accedere all'elemento puntato dall'iteratore (sia lettura che scrittura)
- `operator->()const;`nel caso in cui il tipo di dato della nostra lista sia una struttura particolare possiamo accedere agli elementi di quella struttura
- `operator++();` pre indremento
- `operator++(int);` post incremento
- `operator==(my_iterator const&)const;` confronto tra iteratori
- `operator!=(my_iterator const&)const;` operatore di dereferenziazione con cui possiamo accedere all'elemento puntato dall'iteratore (sia lettura che scrittura)


## Invalidation degli iteratori

Bisogna prestare attenzione che quando istanziamo degli iteratori e poi la lista viene cambiata quegli iteratori che abbiamo istanziato potrebbero non essere più validi.

Ad esempio

```c++
#include <vector>

int main() {
	std::vector<int> lista = {1,2,3,4,5};
	std::vector<int>::iterator it = lista.begin(); //inizializziamo l'iteratore
	lista.push_back(6); 
//quest'ultima istruzione rende invalido l'iteratore che abbiamo inizializzato
/*Questo perchè i vector sono implementati come array in memoria dinamica 
e ogni volta che avviene una modifica nella struttura della lista
viene reistanziata la memoria
e quindi le vecchie celle di memoria vengono deallocate.
Il nostro iteratore puntava a quelle vecchie celle di memoria ormai deallocate
*/
}
```

Per capire quando gli iteratori vengono invalidati bisogna conoscere come sono implementati i container che utilizzano.
Una buona pratica è evitare di utilizzare gli iteratori per operazioni che modifichino la struttura della lista e aggiornare l'iteratore (con begin()) prima di andare ad utilizzarlo nel caso sia stato istanziato indietro nel codice.


