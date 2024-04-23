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

- **Ottimizzazione**: Nel primo caso quando viene chiamato il costruttore prima vengono create le variabile inizializzate con il loro valore di default e successivamente gli vengono assegnati i valori da noi decisi.
Nel secondo caso invece le variabili vengono dichiarate e inizializzate direttamente con i valori da noi decisi.

- **Inizializzazione di costanti**: se nel codice di prima al posto di  `int a`  fosse stato  `const int a`  in quel caso solo il secondo metodo funzionerebbe.

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
	
	int get_weight() {
		animal* a = this;
		return this->weight;
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
