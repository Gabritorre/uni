# Indirizzamento aperto

Vediamo ora il modo di gestire le collisioni con l'indirizzamento aperto. A differenza dell'altro metodo, questo non fa uso di strutture esterne, ma tutto viene salvato nella tabella stessa.
Ogni cella contiene o una elemento oppure un NIL.

Vediamo come si comporta questa metodo per cercare una chiave $k$:

1. calcola la funzione hash $h(k)$
2. si **ispeziona** la cella all'indirizzo dato dalla funzione hash
	- se la cella contiene la chiave $k$ la ricerca ha avuto successo
	- se la cella contiene NIL la ricerca ha avuto un insuccesso
	- se la cella contiene una chiave che non è $k$ allora bisogna trovare un altro indice basandosi su $k$ e all'**ordine di ispezione** (cioè il numero di ispezioni fatte fino a quel momento)
	Si continua ad ispezionare fino a che:
		- trovo $k$ (successo)	
		- trovo NIL (insuccesso)
		- dopo $m$ ispezioni, cioè ho ispezionato tutta la tabella (insuccesso)

In questo caso la funziona hash va modificata in modo da prendere un parametro aggiuntivo (l'ordine di ispezione). Diremo che $h(k, i)$ rappresenta la posizione della chiave $k$ dopo $i$ ispezioni fallite, inizialmente $i=0$

Si richiede che i **valori generati dalle funzioni di hash** $h(k,i)$, dove $i$ varia da $0,...m-1$ e $k$ rimane fisso **siano una permutazione** di $<0, ..., m-1>$ in quanto dobbiamo poter visitare tutte le celle per stabilire se $k$ è presente o meno. Inoltre si tratta di una permutazione in quanto non è detto che si cerchi $k$ in modo sequenziale tra le celle.


## Operazioni con indirizzamento aperto

Lavoreremo sotto la seguente ipotesi: gli elementi della tabella contengono direttamente la chiave (quindi non usiamo il puntatore alla chiave)

### Inserimento

postcondizione: il seguente metodo restituisce l'indice della cella dove ha memorizzato $k$, oppure segnala un errore se la tabella è piena
```c++
hash_insert(T, k) {
	i = 0;
	trovata = false;
	repeat:
		j = h(k, i);
		if (T[j] == NIL OR T[j] == DELETED) {
			T[j] = k;
			trovato = true;
		}
		else {
			i++;
		}
	until (trovata == true || i == m);
	if trovata {
		return j;
	}
	else {
		err "overflow della tabella"
	}
}
```
la ragione del `T[j] == DELETED` viene spiegata nella cancellazione

### Ricerca

postcondizione: ritorna $j$ se la cella $j$ contiene l'elemento $k$ oppure ritorna NIL se la chiave $k$ non è presente nella tabella
 
```c++
hash_search(T, k) {
	i = 0;
	trovata = false;
	repeat:
		j = h(k, i);
		if (T[j] == k) {
			trovato = true;
		}
		else {
			i++;
		}
	until (trovata == true || T[j] == NIL || i == m);
	if trovata {
		return j;
	}
	else {
		return NIL
	}
}
```

Nota che la condizione `T[j] == NIL` si deve al fatto che se dopo varie celle occupate da chiavi che non sono $k$ si incontra una cella vuota allora la chiave $k$ dovrebbe essere stata messa in quella posizione, se non c'è significa che non è presente in tutta la tabella


### Cancellazione

La cancellazione presenta una problematica, vediamo un esempio:

supponiamo di avere la seguente tabella

![enter image description here](https://i.ibb.co/Jzz4J0x/image.png)


- Supponiamo di voler aggiungere la chiave 12:

	- al primo tentativo $h(12, 0) = 4$ ma all'indice $4$ c'è già una chiave.
	- al secondo tentativo $h(12, 1) = 1$ ma all'indice $1$ c'è già una chiave.
	- al terzo tentativo $h(12, 2) = 3$ la cella è libera e quindi la chiave $12$ viene inserita all'indice $3$
	
	![enter image description here](https://i.ibb.co/YdT9bzD/image.png)

- Supponiamo ora di voler fare la cancellazione della chiave $101$
	Il primo pensiero che potremmo avere è quello di sostituirlo con un `NIL`:
	![enter image description here](https://i.ibb.co/3mZVjpG/image.png)
Questo però ci crea un problema: 
se adesso volessimo cercare l'elemento $12$ dovremmo fare gli stessi step che abbiamo fatto per il suo inserimento, quindi:
	- $h(12, 0) = 4$ ma in posizione 4 non c'è la chiave 12 quindi proseguiamo
	- $h(12, 0) = 1$ ma in tale posizione si trova `NIL` e per le nostre ipotesi sulla ricerca quando si trova `NIL` significa che l'elemento da cercare non è presente nella tabella (ma questo non è vero in quanto il $12$ è presente)

Per risolvere questo problema, invece di porre a `NIL` l'elemento rimosso, utilizziamo un altro valore, `DELETED`. 
Riusciamo così a distinguere il caso in cui l'elemento non è presente nella tabella quando raggiungiamo `NIL`, mentre il caso in cui l'elemento può essere presente in una altra posizione quando raggiungiamo `DELETED`.
Questo è il motivo per cui nella `insert` controlliamo anche il caso in cui la cella contiene `DELETED` per inserire l'elemento

Svantaggio di `DELETED`: l'utilizzo di questo valore comporta il fatto che il tempo della `search` non dipende più dal fattore di carico $\alpha$: dopo tanti inserimenti e cancellazioni nella tabella si avranno solo chiavi valide e `DELETED`, non ci saranno più `NIL` e di conseguenza la `search` si scorre tutta la tabella per cercare un elementi non presenti.


## Metodi di scansione/ispezione

La situazione ideale per l'indirizzamento aperto è l'**hashing uniforme indipendente**, cioè ogni chiave ha la stessa probabilità di avere come sequenza di ispezioni una delle $m!$ permutazioni.


Vediamo delle tecniche che cercano di approssimare questa situazione:

- Ispezione lineare
- Ispezione quadratica
- Doppio hashing


## Ispezione lineare

Calcoliamo la nostra funzione hash $h(k, i)$ servendoci di un'altra funzione hash $h'(k)$, detta **ausiliaria**. 
Viene calcolata nel seguente modo:

$$h(k, i) = (h'(k) + i) \mod m$$

Praticamente, l'ispezione parte dalla cella calcolata da $h'(k)$, poi si scorrono sequenzialmente le celle fino a $m-1$ e infine si parte da $0$ fino ad arrivare a $h'(k) - 1$

![enter image description here](https://i.ibb.co/zsQjMjY/image.png)

### Esempio

Abbiamo una tabella hash grande $m = 13$ celle.
Vogliamo inserire le chiavi nel seguente ordine: $69, 4, 31, 43$

le due funzioni hash sono definite come segue:

$h'(k) = k \mod m$
$h(k, i) = (h'(k) + i) \mod m$

Vediamo i passaggi dell'inserimento:

1. $h(69, 0) = (h'(69) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	non c'è collisione, quindi $T[4] = 69$
2. $h(4, 0) = (h'(4) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(4, 1) = (h'(4) + 1) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	non c'è collisione, quindi $T[5] = 4$
3. $h(31, 0) = (h'(31) + 0) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	c'è collisione
	- $h(5, 1) = (h'(5) + 1) \text{ mod } 13 \,=\, 6 \text{ mod } 13 \,=\, 6$
	non c'è collisione, quindi $T[6] = 31$
4. $h(43, 0) = (h'(43) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(43, 1) = (h'(43) + 1) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	c'è collisione
	- $h(43, 2) = (h'(43) + 2) \text{ mod } 13 \,=\, 6 \text{ mod } 13 \,=\, 6$
	c'è collisione
	- $h(43, 3) = (h'(43) + 3) \text{ mod } 13 \,=\, 7 \text{ mod } 13 \,=\, 7$
	non c'è collisione, quindi $T[7] = 43$


**Vantaggi**: Facilità di implementazione

**Svantaggi**: si possono formare lunghe file di chiavi adiacenti, che rallentano l'inserimento (nell'esempio precedente si nota che per il 4 elemento ci sono stati tanti tentativi)

## Ispezione quadratica

L'ispezione quadratica utilizza lo stesso principio dell'ispezione lineare, ma con calcoli diversi.
Questo metodo si calcola come:

$$h(k, i) = (h'(k) + c_1 \cdot i + c_2 \cdot i^2)\mod m$$

dove $c_1, c_2$ sono due costanti ausiliarie i cui valori sono compresi tra $[1, m-1]$ e devono essere diverse da $i$

Se ad esempio consideriamo $c_1 = c_2 = \frac{1}{2}$ e $m = 2^p$ per qualunque $p$, l'hashing quadratico soffre dello stesso problema dell'ispezione lineare: se due chiavi sono mappate (tramite la funzione di hash ausiliaria) nella stessa cella allora le due chiavi generano la stessa identica sequenza di ispezione (si creano quindi lunghe file di chiavi adiacenti)

## Doppio hashing

La formula per questo metodo è la seguente:

$$h(k, i) = (h_1(k) + i \cdot h_2(k)) \mod m$$

dove $h_1$ e $h_2$ sono due funzioni di hash ausiliarie e $i$ può assumere tutti i valori da $0$ a $m-1$.

$h_1$ serve per determinare il punto di partenza (è indipendente dal valore di $i$)
$h_2$ serve per determinare il passo delle ispezioni

### Esempio

Vediamo come si comporta con lo stesso esempio di prima

Abbiamo una tabella hash grande $m = 13$ celle.
Vogliamo inserire le chiavi nel seguente ordine: $69, 4, 31, 43$

le due funzioni hash sono definite come segue:

$h_1(k) = k \mod m$
$h_2(k) = 1 + (k \mod 11)$

$h(k, i) = (h_1(k) + i \cdot h_2(k)) \mod m$

Vediamo i passaggi dell'inserimento:

1. $h(69, 0) = (h_1(69) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	non c'è collisione, quindi $T[4] = 69$
2. $h(4, 0) = (h_1(4) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(4, 1) = (h_1(4) + h_2(k)) \text{ mod } 13 \,=\, 4+5 \text{ mod } 13 \,=\, 9$
	non c'è collisione, quindi $T[9] = 4$
3. $h(31, 0) = (h_1(31) + 0) \text{ mod } 13 \,=\, 5 \text{ mod } 13 \,=\, 5$
	non c'è collisione, quindi $T[5] = 31$
4. $h(43, 0) = (h_1(43) + 0) \text{ mod } 13 \,=\, 4 \text{ mod } 13 \,=\, 4$
	c'è collisione
	- $h(43, 1) = (h_1(43) + h_2(43)) \text{ mod } 13 \,=\, 4 + 11 \text{ mod } 13 \,=\, 2$
	non c'è collisione, quindi $T[2] = 43$


Notiamo che con questo metodo abbiamo meno collisioni dell'altro metodo e le chiavi risultano distribuiti più uniformemente. Tale metodo risulta essere migliore dei due precedenti negli usi reali.


