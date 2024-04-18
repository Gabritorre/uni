# Covarianza e controvarianza

La covarianza e la controvarianza sono due concetti applicabili nell'*override* dei metodi

- **override**: quanto si ridefinisce il corpo di un metodo esistente mantenendone la firma
- **overload**: quando si ridefinisce la firma e il corpo di un metodo mantenendo lo stesso nome del metodo da ridefinire

Ricordiamo che la **firma** di un metodo comprende: nome, tipo e ordine dei parametri.
È importante sottolineare che il **tipo di ritorno non fa parte della firma**.

La **covarianza e controvarianza** si applica ai **tipi di ritorno** dei metodi.
**covariare** significa "variare assieme a qualcosa"
**controvariare** significa "variare inversamente a qualcosa"


- Si parla di **covarianza** quando il tipo di ritorno diventa più specifico assieme alla classe che eredità il metodo, e quindi è un sottotipo, cioè più specifica
- Si parla di **controvarianza** quando il tipo di ritorno diventa più generale, contrariamente alla classe che eredità il metodo, e quindi è un sottotipo, cioè più specifica.

	In java la **covarianza sul tipo di ritorno è ammessa**, mentre la **controvarianza sul tipo di ritorno non è ammessa**
	
	```java
	public class Overload {
		public static class A {

			public A f() {
				return new A();
			}

			public Number g() {
				return 1.9;
			}
		}

		public static class B extends A {

			//il tipo di ritorno può covariare con il tipo di this (cioè con la classe in cui è sovrascritto)
			//il tipo di ritorno non può controvariare con il tipo di this. Il compilatore se ne accorge e da un errore di compilazione
			@Override
			public B f() {
				return new B();
			}
			@Override
			public Integer g() {
				return 1;
			}
		}

		public static void main(String[] args) {
			
			A a = new B();	//tipo statico A, tipo dinamico B
			Number n = a.g();	//viene chiamato il metodo di B per il dynamic dispatch
			//il compilatore non da errore perche il tipo di ritorno a runtime è un Integer che è sottotipo di Number, perche abbiamo applicato la covarianza
		}
	}
	```
	Se applicassimo la controvarianza dovremmo invertire `Integer` con `Number`, ma in quel caso nel main dovremmo mettere il risultato in un `Integer`, però a *runtime* ci verrebbe ritornato un `Number`.


