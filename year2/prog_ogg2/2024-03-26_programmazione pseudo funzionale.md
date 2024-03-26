# Programmazione pseudo funzionale

Java è un linguaggio orientato agli oggetti ed è detto *class-based*, cioè sei sempre obbligato a racchiudere il codice all'interno di una classe.

Possiamo però forzare, limitatamente, il linguaggio ad utilizzare uno stile di programmazione procedurale (come C) per esempio limitandoci a creare classi composte solo da campi e definire solo metodo statici.

Nel corso del tempo vari linguaggi tra cui Java hanno introdotto un costrutto proveniente dalla programmazione funzionale: le **espressioni lambda**

## Espressioni lambda

Una funzione lambda possiamo vederla come una funzione anonima, cioè che non possiede un nome per essere invocata.

Si utilizzano con la seguente sintassi:

```java
(parameter1, parameter2) -> { code block }
```

ad esempio

```java
// espressione che prende in input due interi e restituisce la somma

(int x,int y) -> x + y

// espressione che prende in input una stringa e restituisce la sua lunghezza

s -> s.length()


`// espressione che prende in input una stringa e non restituisce nulla`

(String s) -> { System.out.println("Benvenuto ");
				System.out.println(s); }
```
