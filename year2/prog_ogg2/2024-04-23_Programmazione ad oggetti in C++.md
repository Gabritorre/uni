# Programmazione ad oggetti in C++

C++ è un linguaggio fortemente tipato capace di supportare
- programmazione funzionale
- programmazione ad oggetti
- programmazione generica

Utilizza una convenzione di stile di tipo *snake_case*

La definizione di nuovi tipi di dato può avvenire con due parole chiave: `struct` e `class`.

La differenza tra la due è la visibilità di default:
- `struct` la visibilità di default del suo contenuto è `public`
- `class` la visibilità di default del suo contenuto è `private`

Le uniche visibilità presenti in C++ sono le seguenti:

- **public**: visibile a chiunque
- **protected**: visibile solo all'interno della classe e ai propri figli
- **private**: visibile solo all'interno della classe

## Concetto di "dichiarazione" in C++

In C++ non esiste un vero e proprio concetto di dichiarazione di variabili come avviene in C:
- in C si può parlare di dichiarazione perché quello che accade è che una zona di memoria viene riservata e gli viene dato un nome
- in C++ ogni volta che si crea una variabile la si "costruisce" tramite il proprio costruttore di default (questo vale anche per i tipi primitivi), quindi oltre a riservare la zona di memoria tale zona viene anche inizializzata ad un valore di default

Scrivere la seguente cosa in C++

```c++
int a;
```

equivale a chiamare il costruttore di default sulla variabile:

```c++
int a();
```

In C++ si chiama **oggetto** una area di memoria dotata di un tipo.

Quindi nel caso precedente `a` è un **oggetto di tipo int**
è quindi possibile fare anche 

```c++
int var(10);		//viene chiamato il copy constructor di int
```



## Costruttori

I costruttori vanno realizzati con le **liste di inizializzazione** quando possibile:

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal()  {		//senza lista di inizalizzazione
		weight =  10;
		speed =  0;
	}
	animal(): weight(10),  speed(0)  {}		//con lista di inizializzazione
}
```

Entrambi i costruttori fanno la stessa cosa, il secondo però fa utilizzo delle liste di inizializzazione.

L'utilizzo delle liste di inizializzazione è consigliato per due motivi principali:

- **Ottimizzazione**: Nel primo caso quando viene chiamato il costruttore prima vengono create le variabile inizializzate con il loro valore di default (tramite il *default constructor*) e successivamente gli vengono assegnati i valori da noi decisi.
Nel secondo caso invece le variabili vengono dichiarate e inizializzate direttamente con i valori da noi decisi (utilizzando il *copy constructor* della variabile).

- **Inizializzazione di costanti**: se nel codice di prima al posto di  `int a`  fosse stato  `const int a`  in quel caso solo il secondo metodo funzionerebbe, in quanto una assegnazione successiva all'inizializzazione tramite il *default constructor* non sarebbe permessa.



## Passaggio dei parametri, valore e reference

Vediamo 3 modi in cui si può passare un oggetto ad una funzione
- passaggio per copia: viene creato un nuovo oggetto creato tramite il **copy constructor** dell'oggetto originale
	```cpp
	void f (my_obj) {}
	```
- passaggio del puntatore: viene passata la copia del puntatore dell'oggetto
	```cpp
	void f (my_obj*) {}
	```
- passaggio della reference: viene passato la reference, cioè un alias, della variabile originale. In questo caso si sta usando direttamente l'oggetto originale
	```cpp
	void f (my_obj&) {}
	```

## Costruttori di conversione e "explicit"

Un costruttore con un singolo parametro che non ha un valore di default  e che **non** viene dichiarato `explicit` è chiamato **costruttore di conversione**.

Un costruttore di conversione esegue una conversione implicita che converte un oggetto cha ha il tipo del primo parametro del costruttore di conversione in un oggetto del tipo della classe a cui il costruttore di conversione appartiene.

La keyword *explicit* associata ad un costruttore di conversione impedisce il comportamento appena descritto, forzando il chiamante ad usare i costruttori con i tipi corretti.

Vediamo il comportamento dei costruttori di conversione:
```cpp
class Y {
  private:
	  int a, b;
	  char * name;
  public:
	  Y(int i) {};	//converte int a oggetti di tipo Y
	  Y(const char* n, int j = 0) {};	//converte stringhe a oggetti di tipo Y
};

void add(Y) {};		//metodo che apparentemente prende solo oggetti di tipo Y

int main() {
  // equivalente a Y obj1 = Y(2)
  Y obj1 = 2;

  // equivalente a Y obj2 = Y("somestring",0)
  Y obj2 = "somestring";

  // equivalente a add(Y(5))
  add(5);
}
```
È interessante la chiamata al metodo `add` che nonostante chieda un oggetto di tipo Y, passandogli un intero la chiamata avviene correttamente comunque in quanto il compilatore chiama implicitamente il costruttore di `Y` che prende un intero, creando così un oggetto di tipo `Y`


```cpp
struct A {
    A(int) { }      // converting constructor
    A(int, int) { } // converting constructor (C++11)
};
 
struct B {
    explicit B(int) { }
    explicit B(int, int) { }
};
 
int main() {
    A a1 = 1;      // OK: copy-initialization selects A::A(int)
    A a2(2);       // OK: direct-initialization selects A::A(int)
    A a3 {4, 5};   // OK: direct-list-initialization selects A::A(int, int)
    A a4 = {4, 5}; // OK: copy-list-initialization selects A::A(int, int)
    A a5 = (A)1;   // OK: explicit cast performs static_cast
 
//  B b1 = 1;      // error: copy-initialization does not consider B::B(int)
    B b2(2);       // OK: direct-initialization selects B::B(int)
    B b3 {4, 5};   // OK: direct-list-initialization selects B::B(int, int)
//  B b4 = {4, 5}; // error: copy-list-initialization does not consider B::B(int, int)
    B b5 = (B)1;   // OK: explicit cast performs static_cast
}
```



## Copy constructor

Il copy constructor è un costruttore che utilizza una altro oggetto gemello inizializzare i propri valori con i suoi.


Si realizza nel seguente modo

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}		//constructor
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}	//copy constructor
}
```

Il `const` sta ad indicare che il parametro non viene modificato all'interno della funzione
la reference è necessaria perché altrimenti si genererebbe una ricorsione infinita, se venisse passato per copia verrebbe chiamato il copy constructor, ma noi in questo lo stiamo definendo in questo momento.


## This

`this` in questo caso è un pointer all'oggetto e quindi lo si usa sempre con `->` invece che con `.`

Come dimostrazione vediamo che la seguente assegnazione non genera errori:

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}		//constructor
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}	//copy constructor
	
	int get_weight() {
		animal* a = this;	//funziona
		return this->weight;
	}
}
```


## Const

Il `const` ha sia il significato che non è modificabile sia che può interagire solo con costrutti a loro volta dichiarati `const`.

Una buona regola quando si dichiarano le funzioni è di partire sempre da metodi `const variabile&` questo perché è l'approccio più restrittivo.
Nel caso si avesse bisogno di modificare la variabile allora si toglie il `const`.
Qual ora si volesse una copia e non la variabile originale si toglie la `&`.

il `const` si può anche mettere alla fine della firma di un metodo, e sta ad indicare che all'interno di quel metodo non si modificano i campi della classe.

Questo ci porta a definire **due tipi di getter** in C++, uno passato in sola lettura e uno anche in scrittura

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}		//constructor
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}	//copy constructor
	
	const int& get_weight() const {		//getter che restituisce il campo in sola lettura
		return weight;
	}
	
	int& get_weight() {					//getter che restituisce il campo anche in scrittura
		return weight;
	}
}
```

Il const alla fine della firma permette di separare le due firme e quindi di fare un **overload**

## Virtual

I metodi che si vuole permettere di far sovrascrivere ai propri figli si devono marcare come `virtual`


```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}
	
	const int& get_weight() const {		//getter che restituisce il campo in sola lettura
		return weight;
	}
	
	int& get_weight() {					//getter che restituisce il campo anche in scrittura
		return weight;
	}
	
	virtual void eat(const animal& a) {	//metodo overridabile dai figli
		weight += a.weight;
	}
}
```


## Ereditarietà

La sintassi per ereditare da una classe è la seguente

```cpp
class dog : public animal {
	...
}
```

Il tag della visibilità ha il seguente significato:

- se **public** significa che chiunque può vedere che sono figlio di quella classe, per cui chiunque può sostituirmi al posto di mio padre
- se **protected** significa che solo i miei figli sono al corrente che sono figlio di quella classe e quindi solo loro possono sostituirmi al posto di mio padre
- se **private** significa che nessuno può sostituirmi al posto di mio padre


La classe figlio ha un puntatore al padre come campo privato.

```cpp
class dog : public animal {
	private:
		bool has_pedigree;
	public:
		dog(int w, double sp, bool ped) : animal(w, sp), has_pedigree(ped) {}

		//in c++11 si può mettere "override" alla fine della firma per specificare che si tratta di override
		void eat(const animal& a) override {
			// weight += a.weight / 2;			//il weight di a non è accessibile perche è esterno e non è quello ereditato
			weight += a.get_weight() / 2;		//modifica diretta
			get_weight() += a.get_weight() / 2;	//modifica tramite il getter in scrittura
		}
};
```

Nota: diversamente da Java, se ricevi come parametro un oggetto dello stesso tipo della classe in cui stai lavorando non è comunque possibile accedere ai suoi campi privati, vanno usati i getter.

Se si vuole permettere ai propri figli di sovrascrivere un metodo già sovrascritto va aggiunto ancora il `virtual`


## Modi di istanziare un oggetto

Vediamo 3 modi per istanziare un oggetto
1. tramite la keyword `new`, che ritorna un puntatore al nuovo oggetto che è stato creato nell'heap
2. istanziamento direttamente nello stack
3. instanziamento tramite *reference* di un altro oggetto

```cpp
class animal{
private:
	int weight;
	int speed;
public:
	animal(): weight(10),  speed(0)  {}
	animal(const animal& a) weight(a.weight),  speed(a.speed) {}
	
	const int& get_weight() const {
		return weight;
	}
	
	int& get_weight() {
		return weight;
	}
	
	virtual void eat(const animal& a) {
		weight += a.weight;
	}
}

class dog : public animal {
	private:
		bool has_pedigree;
	public:
		dog(int w, double sp, bool ped) : animal(w, sp), has_pedigree(ped) {}

		void eat(const animal& a) override {
			weight += a.get_weight() / 2;
		}
};

int main() {
	animal* a1 = new animal(10, 5.5);	//istanziamento nell'heap
	animal a2(1, 2.5);					//istanziamento nello stack

	animal a3(a2);						//copy constructor
	animal a4;						//default constructor

	dog fido(60, 45.2, false);
	
	animal a5(fido);
	a5.eat(a2); 	//no dynamic dispatch

	animal& a6 = fido;					//instanziamento tramite reference
	a6.eat(a2); 	//si dynamic dispatch

	animal* a7 = &fido;
	a7->eat(a2); 	//si dynamic dispatch
	
}
```

Nota che il dynamic dispatch si ha solo con puntatori e reference, questo perche con l'istanziazione di `a5` vengono copiati i valori dei campi ma il suo tipo rimane sempre un animal, anche a *runtime*.

Mentre con reference e puntatori il tipo dinamico a runtime cambia da quello statico e il dynamic dispatch funziona


## Template

approfondimento: [template (corso PEL)](https://gabritorre.github.io/uni/year1/prog_lab/web_notes/Templates.html)

I template sono la trasposizione dei tipi generici visti in Java.
Si possono applicare a classi, metodi, funzioni globali e typedef.

Una particolarità dei template è che posticipano la compilazione del codice che usa i template fino a quando non verrà utilizzato tale codice passandogli il tipo reale.

Ad esempio se definiamo una funzione che fa uso di template, tale funzione non verrà compilata fino a che non viene chiamata da qualcuno che gli passerà il tipo da sostituire al tipo generico, a quel punto viene compilata.


## Override degli operatori

In C++ tutti gli operatori: `+ - * / < <= > >= != () =` ecc... eseguiti su oggetti non *built-in*
sono in realtà delle **chiamate a funzioni** e come tali si possono overridare.

Vediamo un esempio:

```cpp
template <class T>
class matrix {
	private:
		size_t cols;
		vector<T> v;
	public:
		matrix() : v() {}
		matrix(const matrix<T>& m) : v(m.v) {}

		matrix<T>& operator=(const matrix<T>& m) {
			cols = m.cols;
			v = m.v;
			return *this;
		}
}; 


void main() {
	matrix<int> m(20, 30);

	matrix<int> m2(40, 50);
	m = m2; 	//equivalente a: m.operator=(m2);

	m = m2 = m; //	m.operator=(m2.operator=(m));
}
```

Per sovrascrivere un operatore bisogna ridefinire la funzione chiamata "operator" concatenato al simbolo dell'operatore, nel caso precedente `operator=`

Quando facciamo `m = m2` implicitamente stiamo facendo `m.operator=(m2)`, cioè una chiamata a funzione che prende in input il membro di sinistra dell'operatore di assegnamento.

Nota il tipo di ritorno è arbitrario, si potrebbe anche lasciare `void`, però restituire una reference dell'oggetto stesso ci permette di innestare le chiamate a tale funzione, cioè rende possibile fare:

```c++
m = m2 = m; //equivalente a:	m.operator=(m2.operator=(m));
```
funziona in quanto `m2.operator=(m)` ritorna un oggetto che viene usato a sua volta nella successiva chiamata alla funzione.



## Conversion operator

Se abbiamo una classe templetizzata, possiamo convertirci in base ad una struttura simile alla nostra tramite un costruttore particolare, oppure possiamo restituire una nostra versione convertita tramite un *conversion operator*

Prendiamo l'esempio della matrice poco sopra, possiamo creare una sorta di *copy constructor* che al posto di prendere esattamente una classe dello stesso nostro tipo ne prende una con  un parametro diverso:

```cpp
template <class T>
class matrix {
	private:
		size_t cols;
		vector<T> v;
	public:
		matrix() : v() {}
		matrix(const matrix<T>& m) : v(m.v) {}

		matrix<T>& operator=(const matrix<T>& m) {
			cols = m.cols;
			v = m.v;
			return *this;
		}

		size_t get_cols() const {return cols;}
		size_t get_rows() const {v.size() / cols;}
	
		//costruttore che costuisce la matrice di classe che ha tipo T partendo dalla matrice passata per input che ha tipo S
		// il corpo del metodo assume che il tipo T abbia un costruttore che converta il tipo partendo da un S.
		//Questo è possibile e non da errori in quanto non viene compilato
		//fino a che non viene chiamato questo costruttore,
		//sarà compito del chiamante assicurarsi che i tipi siano convertibili tra loro
		template<class S>
		matrix(const matrix<S>& m): cols(m.get_cols()), v(m.get_rows() * m.get_cols()) {
			for(int i =  0; i <  v.size(); i++) {
				v[i] =  T(m.v[i]); //chiamo il costruttore del tipo T, passandogli un S
			}
		}
}; 
```


Inoltre posso fare una funzione chiamata *conversion operator*, cioè una sorta di cast della nostra classe in qualche altro tipo.
Questo metodo non deve avere un tipo di ritorno e dopo la parola "operator" si mette il tipo in cui convertire

```cpp
template <class T>
class matrix {
	private:
		size_t cols;
		vector<T> v;
	public:
		matrix() : v() {}
		matrix(const matrix<T>& m) : v(m.v) {}

		matrix<T>& operator=(const matrix<T>& m) {
			cols = m.cols;
			v = m.v;
			return *this;
		}

		size_t get_cols() const {return cols;}
		size_t get_rows() const {v.size() / cols;}
		
		//restituisce una versione della nostra classe convertita in un altro tipo (un vector<T> in questo caso)
		operator const vector<T>() const {
			return v;	//dato che la matrice viene implementata usando un vettore posso ritornarlo direttamente
		}
}; 
```

## Iteratori

Gli iteratori in c++ sono dei particolari tipi di dato che sono definiti all'interno del tipo di dato più esterno.
Gli iteratori si utilizzano proprio come se fossero dei puntatori. 
vediamo un esempio con la classe vector

```c++
void f(vector<int> v) {
	for (typename vector<int>::iterator it = v.begin(); it != v.end(); it++) {
		cout<<*it<<endl;
	}
}
```

- `typename vector<int>::iterator` rappresenta un tipo di dato
	- `typename` è una keyword necessaria (fino a c++20) per dire al compilatore che la parte successiva è un tipo di dato
	- `vector<int>::iterator` la sintassi con i `::` viene utilizzata per accedere a dei tipi definiti all'interno di una classe, in questo caso il tipo `iterator` è definito dentro la classe `vector`
- Il vector avrà poi dei metodi per utilizzare l'iteratore, in particolare:
	- `begin()` restituisce il primo elemento
	- `end()` restituisce l'elemento successivo all'ultimo
