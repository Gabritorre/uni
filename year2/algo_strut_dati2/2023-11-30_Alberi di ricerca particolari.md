# Alberi di ricerca particolari

## Alberi AVL

Il nome di questi tipi di alberi derivano dai loro inventori *Adelson-Velskij Landis*.

Questi tipi di alberi sono alberi binari di ricerca che hanno la caratteristica di **rimanere sempre bilanciati**.
Ogni nodo oltre a mantenere l'informazione, ha anche un campo cosiddetto **fattore di bilanciamento**.
Questo fattore è determinato dalla differenza di altezza fra l'altezza del sottoalbero sinistro e l'altezza del sottoalbero destro, il valore assoluto di tale differenza deve essere $\leq 1$ in ogni nodo per mantenere il bilanciamento.


## B-alberi

Sono alberi binari di ricerca in cui ogni nodo ha almeno 2 figli. Questi alberi seguono le seguenti proprietà:

1. tutte le foglie hanno la stessa profondità
2. Ogni nodo $v$ (tranne la radice) mantiene un numero di chiavi $K(v)$ ordinate.
	La quantità di chiavi deve essere compresa tra il $(\text{numero di figli} -1)$ e $\text{(2 volte il numero di figli}) -1$.
	In linguaggio matematico con $t = \text{numero di figli}$

$$t-1\leq K(v)\leq2t-1$$

3. la radice mantiene almeno una chiave e al massimo $2t-1$ chiavi ordinate.
4. ogni nodo interno dell'albero ha $K(v) + 1$ figli
5. le chiavi di un nodo fanno da separatore per le chiavi dei relativi sottoalberi sinistri e destri

Vediamo un esempio di questo albero:

![enter image description here](https://i.ibb.co/MNYZ64W/image.png)


## Alberi rossi e neri

Sono alberi binari di ricerca in cui ogni nodo contiene una informazione aggiuntiva: il colore del nodo che può essere rosso oppure nero.
Vincolando in modo opportuno l'alternanza di nodi rossi e neri si riesce ad ottenere la seguente proprietà:
"Il cammino più lungo nell'albero è lungo al massimo il doppio del cammino più breve", ne deriva che l'albero risulta essere bilanciato

