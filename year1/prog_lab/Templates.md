# Template

I template servono a generalizzare le nostre classi o funzioni, essi ci permettono infatti di creare una funzione/classe una unica volta che su un generico tipo di dato che verrà scelto dal chiamante della funzione/classe.

Ad esempio se vogliamo scrivere una funzione che riordina gli elementi dell'array l'algoritmo per farlo non cambia in base al tipo di dato, utilizzando i template quindi non dobbiamo specificare che quella funzione lavora su int, unsigned int, long int, double, ecc... ma la funzione si adatterà al tipo che viene deciso dal chiamante.

## Template di Funzioni

```c++
// definiamo un tipo generico T che verrà utilizzato nella funzione sottostante
// T verrà sostituito con il tipo passato alla funzione
template <typename T>
T get_max(T val1, T val2) {
	if(val1 > val2) {
		return val1;
	}
	return val2;
}

template <typename T>
T foo() {
	T var = 10;
	return var + 1;
}


int main() {
	int x = get_max<int>(3,5);	//tra parentesi angolari specifichiamo il tipo di dato
	 
	 // nella maggior parte dei casi il compilatore riconosce il tipo di dato
	 // e quindi non è necessario specificarlo
	 double y = get_max(7.1, 9.3); // il compilatore riconosce il tipo di dato "double"
	
	// nel caso in cui T non faccia parte dei parametri in quel caso
	// è obbligatorio specificare il tipo di dato
	  if(foo<unsigned int>() == 11) {
		  ...
	  }
}
```

## Template di classi
Si possono utilizzare i template per i tipi degli attributi di classe

```c++
template <typename T>
class container {
	public:
		container() {}
		container(const T& new_val):var(new_val) {}
		const T& get() const{
			return var;
		}
		void set(T new_val) {
			var = new_val;
		}
	private:
		T var;
}

int main() {
	container<double> con;
	double value = 10.33;
	con.set(value);

	container<unsigned int> con2(6);
}
```

é possibile definire dei propri tipi di dato (con struct) e passarle come template, bisogna stare attenti però a ridefinire gli operatori come "==", ">", "<", "=", "++" eccetera.
