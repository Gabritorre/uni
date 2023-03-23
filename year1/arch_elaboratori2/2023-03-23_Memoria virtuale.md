# Memoria virtuale

Vogliamo realizzare un meccanismo che:
-  Permetta alla memoria RAM di essere condivisa tra più programmi in esecuzione, senza però che un programma possa accedere senza permesso all'area di memoria riservata ad un altro programma.
- Permetta ad un programma di utilizzare più memoria RAM di quella realmente disponibile nel sistema 

Per permettere queste due cose entra in gioco la **memoria virtuale**

I programmi (più in generale il processore) utilizzano uno spazio di indirizzamento virtuale che non coincide con l'indirizzamento fisico della memoria RAM.

I blocchi di memoria (chiamate pagine) virtuali vengono mappati dal sistema operativo in indirizzi fisici nella RAM.

## Vantaggi della memoria virtuale

1. Illusione di avere più memoria disponibile di quella che è in realtà
	solo le parti attive del programma sono mappate in memoria RAM, le parti inattive sono mappate nella memoria secondaria (HDD, SSD) in una area specifica chiamata **spazio di swap** oppure **file di paging**.
	Grazie a questo è possibile che più programmi che richiedano oltre la memoria fisicamente installata girino contemporaneamente nel sistema
2. Protezione: avendo questa memoria virtuale che viene mappata in RAM senza che sia il programmatore a farlo assicura che gli indirizzi virtuali siano effettivamente mappati su indirizzi fisici diversi che non vanno a modificare o leggere dati di altri programmi
3. Semplificazione del caricamento del programma: i dati del programma vengono assegnati a degli indirizzi virtuale che possono anche essere mappati casualmente ovunque in memoria RAM senza causare problemi, e senza necessità di scrivere il programma per utilizzare una specifica area di memoria.

## Traduzione da virtuale a fisico

Gli indirizzi virtuali sono divisi in **virtual page number** e **page offset**

Gli indirizzi fisici sono divisi in **phisical page number** e **page offset**

Il *page offset* è lo stesso sia per gli indirizzi virtuali sia per quelli fisici

Un meccanismo riesce ad associare i *virtual page number* in *phisical page number*, ma non si può fare il contrario dato che è possibile avere più indirizzi virtuali associati ad un indirizzo fisico (programmi differenti che utilizzano gli stessi dati).

Il numero di bit del page offset determina la dimensione della pagina (blocco di memoria)

La traduzione avviene mediante una tabella **page table** che risiede in RAM e ogni programma ha una propria *page table* che è raggiungibile tramite un registro speciale chiamato *page table register*

Questa tabella associa gli indirizzi virtuali a quelli fisici.

Quando un programma vuole accedere ad un'area in memoria virtuale:

1. l'indirizzo viene diviso nelle due parti (*number* e *offset*)
2. il *number* viene utilizzato come indice della tabella
3. dopo aver trovato la riga della tabella viene utilizzato l'offset insieme al contenuto della riga nella tabella per ottenere l'indirizzo fisico della RAM

![](https://i.ibb.co/5cnqdr1/mapping-virt-mem.png)

