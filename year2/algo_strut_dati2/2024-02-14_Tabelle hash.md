# Tabelle hash

Le **Tabelle hash** sono una struttura dati fatta nel modo: **indice (o cella)->elemento (o chiave)**, in cui ogni elemento $k$ viene memorizzato nella posizione $h(k)$ dove $h$ è una funzione, detta funzione di **hashing**, che calcola l'indice tramite delle operazioni matematiche sull'elemento.

Indichiamo matematicamente la funzione $h$ come:

$$h: U \rightarrow \{0, ..., m-1\}$$

Dove $U$ è l'universo degli elementi, mentre il range in cui la funzione produce l'output è limitato in $[0,m-1]$ quindi $m$ possibili valori.
$m$ risulta essere la grandezza della tabella hash, generalmente $m$ è molto più piccolo del numero di elementi in $U$

Graficamente possiamo rappresentare la tabella hash nel seguente modo


![enter image description here](https://i.ibb.co/vcN2sYK/esempio-hashtable.png)


Le tabelle hash soffrono del fenomeno delle **collisioni**, una collisione si verifica quanto un elemento da inserire viene mappato (attraverso la funzione di hash) in una cella già occupata.
Dato che $|U| > m$, (cioè dato che il numero di tutte le chiavi possibili è maggiore della dimensione della tabella) è **possibile** che si verifichino delle collisioni.
Se però $|K| > m$, (cioè dato che il numero di tutte le chiavi memorizzate è maggiore della dimensione della tabella) è **sicuro** che si verifichino delle collisioni.

Ci sono due tecniche per gestire le collisioni:

1. Utilizzo di **liste di collisione** o concatenamento
2. tramite **indirizzamento aperto**


## Liste di collisione / concatenamento

In questa implementazione viene utilizzata una lista (generalmente doppiamente linkata) per ogni indice, contenente tutti gli elementi che vengono mappati sullo stesso indice.
Nell'indice $j$, se sono presenti elementi mappati in quel indice, sarà contenuto un puntatore alla testa della lista, altrimenti, ci sarà NIL.

Vediamo come implementare le operazioni di: inserimento, ricerca e cancellazione:

## Operazioni con liste di collisione

### Inserimento

```cpp
chaining_hash_insert(T, x) {
	// inserimento in testa alla lista T[h(x.key)]
}
```

- l'inserimento in testa richiede tempo costante
- assumiamo che la funzione di hash sia di complessità costante
- supponiamo che l'elemento da inserire non sia già presente (altrimenti dovremmo fare prima una ricerca e in tal caso la complessità dell'inserimento è dato dalla complessità della ricerca)

### Ricerca

```cpp
chaining_hash_search(T, k) {
	// ricerca un elemento con chiave k nella lista T[h(k)]
}
```

- Il tempo di esecuzione nel caso peggiore è proporzionale alla lunghezza della lista interessata

### Cancellazione

```cpp
chaining_hash_delete(T, x) {
	// cancella x dalla lista T[h(x.key)]
}
```

- supponendo che `x` sia un puntatore all'elemento da cancellare, non è necessaria una fase di ricerca dell'elemento nella lista. Di conseguenza è sufficiente aggiornare i puntatori, per cui la complessità è costante (ricordando che stiamo usando una lista doppiamente linkata, altrimenti sarebbe $O(n)$ perché andrebbe trovato il predecessore di `x`)

- Nelle situazioni reali non è detto di possedere il puntatore all'elemento, quindi andrebbe ottenuto tramite una `search` e quindi la complessità sarebbe quella della `search`


## Approfondimento sulla complessità della ricerca

Analizziamo la complessità della ricerca nel caso medio e pessimo.

Sia $T$ una tabella di hash con $m$ celle che memorizza $n$ chiavi

Il **caso pessimo** si ha quando tutte le chiavi sono mappate nella stessa cella, in questo caso avremmo una unica lista grande $n$, quindi la complessità della ricerca nel caso peggiore è $O(n)$

Il **caso medio** dipende fortemente da quanto è buona la funzione di hashing, cioè quanto bene riesce a distribuire gli elementi nelle varie celle.
Per determinare la complessità supponiamo di essere sotto l'ipotesi di **Hashing uniforme indipendente**, e l'ipotesi è la seguente:

> Qualsiasi elemento ha la **stessa probabilità** di essere mandato in una qualsiasi delle $m$ celle, indipendentemente dalle celle in cui sono mandati gli altri elementi.

in linguaggio matematico si potrebbe esprimere come

$$\forall i \in [0, ..., m-1], \hspace{3mm}Q(i)=\frac{1}{m}$$

dove $Q(i)$ indica la probabilità che una chiave finisca nella $i$-esima cella.

Definiamo il **fattore di carico** che ci servirà nella dimostrazione:
il **fattore di carico** è definito come 
$$\alpha=\frac{n}{m}$$

Cioè il numero di elementi mappati diviso la grandezza della tabella hash, in altre parole possiamo vederlo come la **lunghezza media delle liste** dell'hash table.

Ovviamente il valore di $\alpha$ può essere minore, maggiore oppure uguale a 1, ma per ottenere le migliori prestazioni è più conveniente che si abbia $\alpha \leq 1$, avendo così delle liste molto piccole e quindi il tempo di accesso ad ogni elemento sarebbe immediato.

Dividiamo i casi di ricerca con successo e senza successo:

1. **Teorema**: In una tabella hash in cui le collisioni sono risolte con il metodo del concatenamento, una ricerca **senza successo** (l'elemento non è presente) richiede tempo $\Theta(1 + \alpha)$ nel **caso medio**, nell'ipotesi di hashing uniforme indipendente

	Dimostrazione: Intuitivamente possiamo dividere la ricerca in:
	- calcolo della funzione di hash `j = h(k)`	$\hspace{11.6mm} O(1)$
	- accesso alla lista in posizione `T[j]`	$\hspace{18mm} O(1)$
	- scorrimento della lista `T[j]` fino al fondo $\hspace{10mm} \Theta(\alpha)$

	Nota che il $"1+"$ nella complessità (dato dalla funzione hash) è necessario specificarlo in quanto $\alpha$ potrebbe essere minore di $1$

2. **Teorema**: In una tabella hash in cui le collisioni sono risolte con il metodo del concatenamento, una ricerca **con successo** (l'elemento viene trovato) richiede tempo $\Theta(1 + \alpha)$ nel **caso medio**, nell'ipotesi di hashing uniforme indipendente

	Dimostrazione: Intuitivamente possiamo dividere la ricerca in:
	- calcolo della funzione di hash `j = h(k)`	$\hspace{26.6mm} O(1)$
	- accesso alla lista in posizione `T[j]`	$\hspace{33.3mm} O(1)$
	- scorrimento della lista `T[j]` fino al trovamento del valore cercato, che mediamente sarà posto a metà lista, quindi $\frac{\alpha}{2}\hspace{61mm} \Theta(\frac{\alpha}{2}) = \Theta(\alpha)$

	Nota che il $"1+"$ nella complessità (dato dalla funzione hash) è necessario specificarlo in quanto $\alpha$ potrebbe essere minore di $1$

Abbiamo capito che nel caso medio la complessità è $\Theta(1 +\alpha)$.
Se però $n = O(m)$, cioè se ci sono più celle che elementi da salvare, avremo $\alpha = \frac{n}{m} = \frac{O(m)}{m} = O(1)$, e quindi la ricerca sarà costante.

## Funzioni di hash

Prima di passare alla tecnica di indirizzamento aperto vediamo come possono venir realizzate le funzioni di hash

Una funzione hash prende una chiave come input e la manipola con delle operazioni matematiche per restituire in output un numero intero associato a quella chiave. 
Lo scopo della funzione di hash nel nostro caso è quello utilizzarle per riuscire a **distribuire gli elementi in modo uniforme** in tutta la tabella.

Solitamente però le funzioni hash assumono che le chiavi siano dei numeri naturali.

Quindi tutto quello che vedremo sarà nell'ipotesi di avere delle **chiavi naturali**

Vediamo 2 metodi di hashing:

- metodo della divisione
- metodo della moltiplicazione

## Metodo della divisione

Nel metodo della divisione la funzione di hash consiste nel prendere il resto della divisione tra chiave $k$ e grandezza della tabella $m$ (quindi l'operazione di modulo)

$$h(k) = k \text{ mod } m$$

il vantaggio di questa implementazione è sicuramente la facilità di realizzazione.
D'altra parte però abbiamo due grandi svantaggi:
1. La dimensione della tabella viene reso un parametro critico per la funzione di hash
2. come conseguenza del precedente punto, la dimensione della tabella non va scelta casualmente in quanto alcuni valori di $m$ funzionano peggio di altri. Ad esempio bisognerebbe evitare le potenze di 2 e anche numeri vicini alle potenze di 2 come grandezza della tabella (in quanto il risultato dell'hash dipenderebbe solo dagli ultimi $p$ bit della chiave, dove $p$ è l'esponente della potenza di 2).

Una buona scelta per la grandezza della tabella è un **numero primo abbastanza distante dalle potenze di 2 e di 10**

Vediamo un esempio:
Vogliamo memorizzare $n = 2000$ chiavi, prevedendo una media di 3 collisioni.
Scelgo un $m$ vicino a $\frac{2000}{3} = 666.\bar6$ ad esempio $m = 701$


## Metodo della moltiplicazione

L'idea alla base di questo metodo sta nel fatto che, data una chiave (naturale) $k$ la trasformiamo in un numero reale compreso tra $[0, 1[$ per poi applicare la funzione di hash seguente:

$$h(k) = \lfloor m\cdot k\rfloor \hspace{10mm}\text{dove } 0 \leq k < 1$$


Gli step sono i seguenti:

1. Fisso una costante $0<A<1$ 
2. calcolo $A \cdot k$ che genererà un numero con la virgola
3. estraggo la parte frazionaria (facendo il modulo di 1)


Dunque la funzione di hash calcolerà il risultato con il seguente calcolo

$$h(k) = \lfloor m \cdot(k \cdot A \text{ mod } 1)\rfloor$$


### Vantaggi

- la scelta di $m$ non è critica, quindi non ci sono valori peggiori di altri
- il calcolo funziona bene con qualsiasi valore di $A$
- È stato trovato però un valore di $A$ che funziona particolarmente bene, questo numero è l'inverso del rapporto aureo:
	$A \simeq \frac{\sqrt{5} - 1}{2} = 0.618034$


### Semplificare il calcolo della funzione hash

Vediamo come semplificare il calcolo della funzione di hash del metodo del prodotto

Sia $w$ la lunghezza di una parola in memoria.
Assumiamo che una chiave $k$ entri in una singola parola.
Scegliamo un intero $0 < q < 2^w$
e una potenza di due $m = 2^p$ con $0<p<w$

Poniamo $\large A = \frac{q}{2^w}$ che sarà sicuramente compreso tra $[0,1[$ per come abbiamo limitato i parametri

Calcolo $A \cdot k$:
$$A\cdot k = \frac{k\cdot q}{2^w}$$

che a sua volta sarà un numero frazionario, di questo numero a noi ci interessa solo la parte frazionaria

![enter image description here](https://i.ibb.co/kQpqq5y/image.png)

Quindi la nostra funzione hash originale $h(k) = \lfloor m \cdot(k \cdot A \text{ mod } 1)\rfloor$ la possiamo riscrivere come

$$h(k) = \left\lfloor 2^p\left(\frac{k\cdot q}{2^w} \mod 1\right)\right\rfloor$$

cioè consideriamo i $p$ bit più significativi della parte frazionaria del prodotto.
Può essere utile fare uno shift a destra in modo da spostare questi bit sulla destra nelle posizioni meno significative (riempiendo con degli 0 le posizioni che si sono liberate a sinistra)

$$h(k) = \left\lfloor 2^p\left(\frac{k\cdot q}{2^w} \mod 1\right)\right\rfloor >> (w - p)$$


