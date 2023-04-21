# Move semantics

Con move semantics si intende una tecnica che ruba la zona di memoria di un oggetto temporaneo, quindi di una r-value. Normalmente però non riusciamo a ottenere l'indirizzo di un r-value ad esempio:

```c++
int get_value() {	//metodo che ritorna un numero e quindi una r-value
	int a = 10;
	return a;
}

int main() {
	int& ptr = get_value(); //stiamo cercando di ottenere una reference di 10,
                            // ma questo non è possibile 
                            //possiamo ottenere una reference solo di una l-value
}
```

Esiste però un modo ottenere una reference di una r-value:

```c++
int get_value() {	//metodo che ritorna un numero e quindi una r-value
	int a = 10;
	return a;
}

int main() {
	int&& ptr = get_value(); //usando && indichiamo che vogliamo ottenere
	                         // una reference di un r-value 
							
}
```
Ma perché è utile fare questo?
È una questione di performance: le reference ad r-value ci permettono di identificare degli oggetti temporanei, nell'esempio 'a' era un oggetto temporaneo che alla fine della funzione "get_value()" non esiste più.
Dato che siamo in grado di riconoscere oggetti temporanei possiamo agire in modo diverso da oggetti non temporanei, come ad esempio rubare la zona di memoria in cui sono al posto di copiare interamente l'area di memoria.

Un esempio che fa capire maggiormente l'utilità di questa tecnica è il seguente:

Abbiamo un vettore e da questo vettore vogliamo crearne uno nuovo con tutti gli elementi sommati di 1.

```c++
1 vector<int> f(vector<int> const& vec) {
2 	vector<int> new_vec;
3 	new_vec.reserve(vec.size)); //assegno la stessa dimensione
4 	for(auto el : vec) {
5 		new_vec.push_back(el + 1);
6 	}
7   return new_vec;
8  }
9
10  int main() {
11 		vector<int> vec;
12		for(int i = 0; i != 100; i++) {
13			vec.push_back(i);
14		}
15		vector<int> y = f(vec);
16 }
```

Abbiamo il nostro metodo f() che prende un vettore per const reference, all'interno della funzione viene creato un nuovo vettore locale e quindi un **vettore temporaneo** e viene riempito con gli elementi del vettore orginale sommati di 1, infine viene fatto un return by value.

Quello che ci interessa avviene a riga 15 dove vogliamo inizializzare il vettore y con quello che abbiamo creato nel metodo f. In quel punto dovrebbe avvenire una deep-copy del vettore, quindi si alloca la memoria necessario per y, poi viene fatta la copia elemento per elemento e infine si de alloca il vettore temporaneo, che si traduce in un grande spreco di tempo.
Usando la move semantics possiamo permettere a y di rubare l'area di memoria assegnata all'oggetto temporaneo, evitando tutti i passaggi precedenti.

Nota: nell'esempio vengono utilizzati i vector, i quali implementano già al loro interno la move semantics, quindi il codice sarebbe già ottimizzato così, però se lavorassimo con una classe fatta da noi che non implementa la move semantics verrebbe utilizzato il classico copy constructor che fa una deep-copy, risultando inefficiente.

## Move constructor e move assignment

La move semantics viene utilizzata principalmente per due operazioni nelle classi:
- il **move constructor** cioè un costruttore in cui il parametro è un oggetto temporaneo (riconosciuto da una r-value reference)
- il **move assignment** cioè l'overloading dell'operatore '=' il cui oggetto a destra dell'assegnamento è un oggetto temporaneo (riconosciuto da una r-value reference)

Prendiamo in considerazione la seguente classe

```c++
struct Class { 
	Snitch() { cout << "constructor" << endl;}
	~Snitch() { cout << "destructor" << endl; }

	Snitch(const Class&) {
		cout << "copy constructor" << endl;
		// allocazione di memoria
		// copia di tutti i valori
	}
};
```
```c++
1 Class f() {
2 	return Class();
3 }
4
5 int main() {
6	Class my_obj = f();
7 }
```

Disabilitando la [RVO](https://shaharmike.com/cpp/rvo/) otteniamo in output

	constructor
	copy constructor
	destructor
	copy constructor
	destructor
	destructor

1. viene fatto il costruttore a riga 2
2. viene copiato l'oggetto che verrà poi passato al chiamante sempre a riga 2
3. viene fatto il distruttore del dell'oggetto locale nella funzione `f()`
4. viene fatto il copy constructor a riga 6 per inizializzare `my_obj`
5.  viene distrutto sempre a riga 6 l'oggetto risultante della funzione `f()`
6.  viene distrutto `my_obj`

Se noi andiamo ad aggiungere il move constuctor alla nostra classe

```c++
struct Class { 
	Snitch() { cout << "constructor" << endl;}
	~Snitch() { cout << "destructor" << endl; }

	Snitch(const Class&) {
		cout << "copy constructor" << endl;
		// allocazione di memoria
		// copia di tutti i valori
	}
	Snitch(Class&&) { 
		cout << "move constructor" << endl;
		// copia i puntatori
		// fai puntare i puntatori derubati a nullptr
	}
};
```
```c++
1 Class f() {
2 	return Class();
3 }
4
5 int main() {
6	Class my_obj = f();
7 }
```

sempre disabilitando la [RVO](https://shaharmike.com/cpp/rvo/) otteniamo in output

	constructor
	move constructor
	destructor
	move constructor
	destructor
	destructor

In questo caso al posto del copy constructor viene chiamato il move constructor perché il compilatore ha riconosciuto che l'oggetto restituito da `f()` è un oggetto temporaneo e quindi noi possiamo definire il nostro costruttore in una maniera diversa dal copy constructor (rubando il puntatore al posto di copiare elemento per elemento)

**Nota importante**: quando rubiamo i puntatori dobbiamo ricordarci di impostare a nullptr i puntatori che abbiamo derubato, questo perché essendo oggetti temporanei verrà chiamato il distruttore a breve e quindi dobbiamo dire che quel puntatore non punta più all'area di memoria di prima (che abbiamo rubato) altrimenti il suo distruttore la libererebbe.


Possiamo utilizzare lo stesso meccanismo per il move assignment

```c++
struct Class { 
	Snitch() { cout << "constructor" << endl;}
	~Snitch() { cout << "destructor" << endl; }

	Snitch(const Class&) {
		cout << "copy constructor" << endl;
		// allocazione di memoria
		// copia di tutti i valori
	}
	Snitch(Class&&) { 
		cout << "move constructor" << endl;
		// copia i puntatori
		// fai puntare i puntatori derubati a nullptr
	}
	Snitch& operator=(const Snitch&) {
		cout << "copy assignment" << endl;
		return *this;
	} 
	Snitch& operator=(Snitch&&) {
		cout << "move assignment" << endl;
		return *this;
	}
};
```
```c++
1 Class f() {
2 	return Class();
3 }
4
5 int main() {
6	Class my_obj;
7	my_obj = f();
8 }
```
Output:

	constructor                  # costruttore di my_obj
	constructor                  # costruttore dell'oggetto locale di f()
	move constructor             # move constructor dell'oggetto che verrà poi passato al chiamante
	destructor                   # distruttore dell'oggetto locale ad f()
	move assignment              # assegnamento di un oggetto temporaneo
	destructor                   # distruttore dell'oggetto temporaneo
	destructor                   # distruttore di my_obj


È possibile far diventare un l-value in un r-value con l'istruzione `std::move()` con questa istruzione possiamo forzare la chiamata di un move assignment e di conseguenza stiamo permettendo a qualche altra variabile di prendere la zona di memoria che era intestata alla nostra variabile.
