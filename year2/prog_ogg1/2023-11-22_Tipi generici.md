# Tipi generici

Java supporta i tipi generici su classi, parametri dei metodi e valore di ritorno dei metodi.

Con i tipi generici per esempio possiamo permettere ad una funzione di lavorare su un tipo generico che verrà specificato durante l'istanza dell'oggetto.


```java
public class Coppia<T, U> {

    private T primoElemento;
    private U secondoElemento;

    public Coppia(T primo, U secondo) {
        this.primoElemento = primo;
        this.secondoElemento = secondo;
    }

    public T getPrimoElemento() {
        return primoElemento;
    }
    public U getSecondoElemento() {
        return secondoElemento;
    }
    public void setPrimoElemento(T primo) {
        this.primoElemento = primo;
    }
    public void setSecondoElemento(U secondo) {
        this.secondoElemento = secondo;
    }
}
```

ad esempio posso istanziare la seguente classe nei seguenti modi

```java
Coppia<String, Integer> coppia1 = new Coppia<String, Integer>("Uno", 1);
Coppia<Double, String> coppia2 = new Coppia<Double, String>(3.14, "Due");
coppia1.getSecondoElemento();
```

## Invarianti

I tipi generici di Java sono detti **invarianti**, cioè non è possibile fare assegnamento tra due variabili che hanno un tipo generico diverso, anche nel caso in cui un tipo sia sottotipo dell'altro.

```java
public class List<V> {
	public void add(V el) {…}
}

List<Vehicle> a = new List<Vehicle>();
a.add(new Car());

List<Bicycle> b = new List<Bicycle>();
b.add(new Bicycle());
a = b;	//errore
b = a;	//errore
```


## Metodi con tipi generici

possiamo usare un tipo generico per il singolo metodo della classe, possiamo utilizzarlo per:
- valore di ritorno
- tipo dei parametri
- variabili locali all'interno del corpo del metodo

```java
public class EsempioTipoGenerico {

    public <T> T restituisciElemento(T elemento) {
        T risultatoLocale = elemento;
        return risultatoLocale;
    }
```

In questa sintassi:

- prima specifichiamo che il metodo utilizzerà un tipo generico T
- poi specifichiamo la funzione ritorno un tipo T
- come parametro abbiamo una variabile di tipo T
- possiamo utilizzare il tipo T per dichiarare altre variabili locali

### Type inference

la *type inference* permette di non dover specificare i tipi quando si istanzia la classe.
I tipi vengono dedotti dai tipi dell'oggetto nella fase di dichiarazione

considerando il primo esempio che abbiamo visto:

```java
// senza type inference
Coppia<String, Integer> coppia1 = new Coppia<String, Integer>("Uno", 1);

//con type inference
Coppia<Double, String> coppia2 = new Coppia<>(3.14, "Due");
```

### Tipi generici limitati

È possibile limitare i tipi che può assumere un tipo generico, imponendo che il tipo essere un sottotipo di una data classe (oppure anche la classe stessa).
Per fare ciò utilizziamo la keyword `extends` seguito dalla classe

```java
public <T extends Vehicle> void  frena(T veicolo) {
	// ...
}
```
In questo caso il tipo T può essere di tipo `Vehicle` oppure una sottoclasse di essa.
