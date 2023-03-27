# Classi

In c++ è possibile sia fare uso delle **struct** per costruire degli oggetti propri sia usare le **classi**.

Entrambi i metodo hanno le stesse funzionalità, la differenza sta nel fatto che nelle classi i membri sono privati di default mentre nelle struct i membri sono pubblici di default. è possibile decidere cosa mettere pubblico e privato tramite le keyword `private` e `public`

```c++
class myclass {
	public:
		void set_var1(int value) {...}
		void set_var2(double value) {...}
		int get_var1() {...}
		double get_var2() {...}
	private:
		int var1;
		double var2;
};

int main() {
	myclass a;
	a.set_var1(1);
	a.get_var1();
}
```

Un grande utilizzo che può essere fatto è quello rendere le variabile non accessibili direttamente ma solo tramite dei metodi che possono modificarle oppure restituire il valore, questo permette di aver maggior controllo sul come vengono modificate le variabili.

Le parti della classe che sono private possono essere modificate/lette solo dagli oggetti appartenenti a quella classe.


## Costruttori

I costruttori sono dei metodi speciali che vengono chiamati ogni volta che viene istanziato un nuovo oggetto della classe.
Sono molto utili per inizializzare le variabili di una classe.

- **Costruttore di default** Questo tipo di costruttore è un metodo che non prende parametri in input. È obbligatorio nel caso si creino degli altri costruttori, mentre se non vengono creati altri costruttore aggiungere quello di default non è strettamente necessario
- **Costruttore non default** Questo costruttore prende dei parametri in input. che viene chiamato quando si istanzia un oggetto con i relativi parametri
- **Costruttore per copia** Questo costruttore ha come parametro la stessa classe e viene chiamato:
	- Ogni qual volta che si passa un oggetto della classe ad una funzione come parametro per copia
	- Quando viene fatto il return dell'oggetto che viene passato per riferimento 
	- Quando si inizializza un nuovo oggetto con uno già esistente

	Creare il costruttore per copia è molto importante: Quando vengono utilizzati puntatori come variabili di classe e si va ad utilizzare il costruttore per copia di default viene fatta una copia del riferimento ma non fa una copia del dato puntato, questo può causare dei problemi perché abbiamo due oggetti che puntano alla stessa area di memoria e quando viene eseguito il distruttore di uno dei due l'altro avrà perso l'area che puntava (e quando verrà distrutto anche l'altro oggetto de allocherà una memoria che è già stata deallocata, generando un errore)

È una buona pratica quindi definire sempre un proprio costruttore per copia che si occupa di fare una copia del dato puntato e non del riferimento.

```c++
class myclass {
	public:
		myclass(){...} // costruttore di default
		myclass(int value){...} // costruttore normale
		myclass(const myclass& obj){...} // costruttore per copia
		...
		...
	private:
		...
};

void foo(myclass a){...}

int main() {
	myclass obj1;	//utilizzo del costruttore di default
	myclass obj2(10) // utilizzo del costruttore normale
	foo(obj1); // utilizzo del costruttore per copia
}
```

### Liste di inizializzazione 

Per ottimizzare il codice è possibile utilizzare le liste di inizializzazione nei costruttori.

Servono per inizializzare i valori delle classe in maniere più diretta:

```c++
class class_def{
	public:
		class_def() {
			a = 10;
			b = 0;
		}

		class_def():a(10), b(0) {}
	private:
		int a;
		int b;
}
```

entrambi i "class_def()" sono dei costruttori di default che fanno la stessa cosa, il secondo però fa utilizzo delle liste di inizializzazione.

È più ottimizzato il secondo caso perchè nel primo caso quando viene chiamato il costruttore prima vengono create le variabile ed inizializzate con il loro valore di default e successivamente gli vengono assegnati i valori da noi decisi.
Nel secondo caso però le variabili vengono dichiarate e inizializzate direttamente con i valori da noi decisi.

Servono anche ad inizializzare i valori delle variabili constanti: se nel codice di prima al posto di `int a` fosse stato `const int a` in quel caso solo il secondo metodo funzionerebbe.

## Distruttori

Similmente ai costruttori esistono anche i distruttori cioè dei metodi speciali che vengono chiamati ogni volta che un oggetto  termina la sua esistenza, ciò può essere causato da:

- Lo scope in cui è stato creato l'oggetto termina la sua esecuzione
- Viene chiamato manualmente con una `delete` (nel caso si trovi in memoria dinamica allocato con `new`)
- Chiamando esplicitamente il nome della funzione del distruttore

Non è obbligatorio creare un distruttore in quanto il compilatore ne fornisce uno di default. 
Inoltre non presenta alcun parametro e non ritorna nulla.
Per definirne uno è necessario chiamarlo con lo stesso nome della classe preceduto da una tilde.

```c++
class myclass {
	public:
		...
		~myclass() {...} //definizione di un distruttore
		...
	private:
		...
};
```

## Friend

La parola chiave `friend` in c++ viene utilizzata principalmente nella dichiarazione delle funzioni **non appartenenti alla classe** e che tramite la keyword `friend` diamo accesso a tale funzione di gestire le variabili private che altrimenti non potrebbe vedere.

```c++
class MyClass {
private:
  int x;
	// dichiarazione delle funzione friend
  friend void myFriendFunction(MyClass& obj);

public:
  MyClass(int x) : x(x) {}

  void printX() {
    std::cout << "x = " << x << std::endl;
  }
};

//definizione della funzione friend
void myFriendFunction(MyClass& obj) {
  obj.x = 42;	// riesce ad accedere alla variabile privata x
}

int main() {
  MyClass obj(10);
  obj.printX(); // Output: x = 10

  myFriendFunction(obj); // non è una fuzione appartenente alla classe infatti non viene chiamata sull'oggetto
  obj.printX(); // Output: x = 42

  return 0;
}

```


## Tecnica pimpl

Pimpl (*pointer to implementation*) è una tecnica che rimuove dalla dichiarazione di una classe i dettagli le variabili/oggetti che essa utilizza, dichiarando solo un puntatore che punterà alla definizione della classe.

```c++
//header.hpp
 class MyClass {
private:
	struct impl;
	impl* pimpl;
public:
	...

//implementation.cpp
#inlcude "header.hpp"
struct MyClass::impl{ // definisco gli oggetti utilizzati dalla classe
	std::vector<int> vec;
	int var;
};

//definizione dei vari metodi..
```

Utilizzare questa tecnica porta il grande vantaggio di non dover ricompilare i file che utilizzano questa classe se magari dovessimo cambiare la definizione degli oggetti che utilizza la classe. Accade questo perché il compilatore in fase di compilazione deve sapere quanto spazio allocare quando si istanza un oggetto di una classe, quindi se dovessimo cambiare le variabili della classe, essa andrebbe ricompilata.
Andando però ad utilizzare sempre un puntatore che punta alla nostra implementazione la dimensione del puntatore rimane sempre la stessa e quindi non è necessario ricompilare.


