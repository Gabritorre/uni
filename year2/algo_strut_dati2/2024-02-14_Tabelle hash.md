# Tabelle hash

Le **Tabelle hash** sono una struttura dati fatta nel modo: **indice (o cella)->elemento (o chiave)**, in cui ogni elemento $k$ viene memorizzato nella posizione $h(k)$ dove $h$ è una funzione, detta funzione di **hasing**, che calcola l'indice tramite delle operazioni matematica sull'elemento.

Indichiamo matematicamente la funzione $h$ come:

$$h: U \rightarrow \{0, ..., m-1\}$$

dove $U$ è l'universo degli elementi, mentre il range in cui la funzione produce l'output è limitato in $[0,m-1]$ quindi $m$ possibili valori.
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
Nell'indice $j$ sarà contenuto un puntatore alla testa della lista, se sono presenti elementi mappati in quel indice, altrimenti ci sarà NIL.

Vediamo come implementare le operazioni di: inserimento, ricerca e cancellazione:

### Inserimento

```c++
chaining_hash_insert(T, x) {
	// inserimento in testa alla lista T[h(x.key)]
}
```

- l'inserimento in testa richiede tempo costante
- assumiamo che la funzione di hash sia di complessità costante
- supponiamo che l'elemento da inserire non sia già presente (altrimenti dovremmo fare prima una ricerca e in tal caso la complessità dell'inserimento è dato dalla complessità della ricerca)

### Ricerca

```c++
chaining_hash_search(T, k) {
	// ricerca un elemento con chiave k nella lista T[h(k)]
}
```

- Il tempo di esecuzione nel caso peggiore è proporzionale alla lunghezza della lista interessata

### Cancellazione

```c++
chaining_hash_delete(T, x) {
	// cancella x dalla lista T[h(x.key)]
}
```

- supponendo che `x` sia un puntatore all'elemento da cancellare, non è necessaria una fase di ricerca dell'elemento nella lista. Di conseguenza è sufficiente aggiornare i puntatori, per cui la complessità è costante (ricordando che stiamo usando una lista doppiamente linkata, altrimenti sarebbe $O(n)$ perchè andrebbe trovato il predecessore di `x`)

- Nelle situazioni reali non è detto di possedere il puntatore all'elemento, quindi andrebbe ottenuto tramite una `search` e quindi la complessità sarebbe quella della `search`


## Approfondimento sulla complessità della ricerca

Analizziamo la complessità della ricerca nel caso medio e pessimo.

Sia $T$ una tabella di hash con $m$ celle che memorizza $n$ chiavi

Il **caso pessimo** si ha quando tutte le chiavi sono mappate nello stessa cella, in questo caso avremmo una unica lista grande $n$, quindi la complessità della ricerca nel caso peggiore è $O(n)$

Il **caso medio** dipende fortemente da quanto è buona la funzione di hashing, cioè quanto bene riesce a distribuire gli elementi nelle varie celle.
Per determinare la complessità supponiamo di essere sotto l'ipotesi di **Hashing uniforme indipendente**, e l'ipotesi è la seguente:

> Qualsiasi elemento ha la **stessa probabilità** di essere mandato in una qualsiasi delle $m$ celle, indipendentemente dalle celle in cui sono mandati gli altri elementi.

in linguaggio matematico si potrebbe esprimere come

$$\forall i \in [0, ..., m-1], \hspace{3mm}Q(i)=\frac{1}{m}$$

dove $Q(i)$ indica la probabilità che una chiave finisca nella $i$-esima cella.

Definiamo il **fattore di carico** che ci servirà nella dimostrazione:
il **fattore di carico** è definito come 
$$\alpha=\frac{n}{m}$$

cioè il numero di elementi mappati diviso la grandezza della tabella hash, in altre parole possiamo vederlo come la **lunghezza media delle liste** dell'hash table.

Ovviamente il valore di $\alpha$ può essere minore, maggiore oppure uguale a 1, ma per ottenere le migliori prestazioni è più conveniente che si $\alpha \leq 1$, avendo così delle liste molto piccole e quindi il tempo di accesso ad ogni elemento sarebbe immediato.

Dividiamo i casi di ricerca con successo e senza successo:

1. **Teorema**: In una tabella hash in cui le collisioni sono risolte con il metodo del concatenamento, una ricerca **senza successo** (l'elemento non è presente) richiede tempo $\Theta(1 + \alpha)$ nel **caso medio**, nell'ipotesi di hashing uniforme indipendente

	Dimostrazione: Intuitivamente possiamo dividere la ricerca in:
	- calcolo di `j = h(k)`	$\hspace{36.6mm} O(1)$
	- accesso a `T[j]`	$\hspace{42.4mm} O(1)$
	- scorrimento della lista `T[j]` fino al fondo $\hspace{10mm} \Theta(\alpha)$

	Nota che il $"1+"$ nella complessità (dato dalla funzione hash) è necessario specificarlo in quanto $\alpha$ potrebbe essere minore di $1$

2. **Teorema**: In una tabella hash in cui le collisioni sono risolte con il metodo del concatenamento, una ricerca **con successo** (l'elemento viene trovato) richiede tempo $\Theta(1 + \alpha)$ nel **caso medio**, nell'ipotesi di hashing uniforme indipendente

	Dimostrazione: Intuitivamente possiamo dividere la ricerca in:
	- calcolo di `j = h(k)`	$\hspace{36.6mm} O(1)$
	- accesso a `T[j]`	$\hspace{42.4mm} O(1)$
	- scorrimento della lista `T[j]` fino al trovamento del valore cercato, che mediamente sarà posto a metà lista, quindi $\frac{\alpha}{2}\hspace{61mm} \Theta(\frac{\alpha}{2}) = \Theta(\alpha)$

	Nota che il $"1+"$ nella complessità (dato dalla funzione hash) è necessario specificarlo in quanto $\alpha$ potrebbe essere minore di $1$

Abbiamo capito che nel caso medio la complessità è $\Theta(1 +\alpha)$.
Se però $n = O(m)$, cioè se ci sono più celle che elementi da salvare, avremo $\alpha = \frac{n}{m} = \frac{O(m)}{m} = O(1)$, e quindi la ricerca sarà costante.


