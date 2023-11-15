# Interfacce

Un limite di Java è che una classe può **estendere una sola classe**, ci potrebbero essere dei casi in ad una classe vorremmo estendere più classi perché ci interessano i metodi di più classi.
Per fare ciò entrano in gioco le **interfacce**

Una interfaccia non è altro che un insieme di firme di metodi (o se vogliamo dei metodi astratti, ma senza specificarlo con la keyword `abstract`)

```java
interface i {
	int method1(int a, double b);
	int method2(double a);
	...
}
```

è possibile aggiungere anche dei campi ma essi devono essere statici, pubblici e final, quindi possiamo solo usare delle costanti pubbliche comuni ad ogni istanza, ciò non è molto utile.

Inoltre la **visibilità dei metodi** dell'interfaccia è **implicitamente *public***

Una classe può quindi **implementare** una interfaccia andando a specificare il corpo di ogni metodo.
è obbligatorio **implementare tutti i metodi dell'interfaccia**

Una classe può implementare più di una interfaccia.

```java
class A extends B implements i1, i2,... {
	//implementazione di tutti i metodi dell'interfacca i1 e i2
}
```

### Implementazione di default

Da java 8 in poi è anche possibile fornire una implementazione di default ai metodi dell'interfaccia

```java
interface i {
	default int method1(int a, double b){
		...
	}
	int method2(double a);
	...
}
```

### estendere interfacce

Anche con le interfacce è possibile avere l'ereditarietà, è infatti possibile estendere un'interfaccia con un'altra, esattamente come si fa per le classi.

```java
interface i {
	int method1(int a, double b);
}

interface f extends i {
	int method2(int a);
}
```
In questo caso una classe che implementerà l'interfaccia `f` avrà sia i suoi metodi che quelli dell'interfaccia `i`
