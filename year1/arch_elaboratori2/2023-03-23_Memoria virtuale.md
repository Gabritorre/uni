# Memoria virtuale

Vogliamo realizzare un meccanismo che:
-  Permetta alla memoria RAM di essere condivisa tra più programmi in esecuzione, senza però che un programma possa accedere senza permesso all'area di memoria riservata ad un altro programma.
- Permetta ad un programma di utilizzare più memoria RAM di quella realmente disponibile nel sistema 

Per permettere queste due cose entra in gioco la **memoria virtuale**

I programmi (più in generale il processore) utilizzano uno spazio di indirizzamento virtuale che non coincide con l'indirizzamento fisico della memoria RAM.

I blocchi di memoria (chiamate **pagine**), cioè degli insiemi di indirizzi di memoria virtuali vengono mappati dal sistema operativo in indirizzi fisici nella RAM.

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

## Page fault

Se una pagina non viene trovata in RAM, allora significa che si trova solo nel disco, questo viene definito **page fault**

Il miss-penalty per recuperare il dato dal disco è enorme, quindi ridurre il numero di page fault è molto importante.

Caratteristiche
- il mapping tra pagine virtuali e fisiche è di tipo **completamente associativo**
- Viene utilizzata la politica **LRU** (*least recent used*) per il rimpiazzo delle pagine
- il page fault sono gestiti dal sistema operativo
- viene utilizzata la politica **write-back** per la scrittura

### Bit di stato

- **valid bit**: quando posto a 1 indica che il dato è presente in RAM, mentre è 0 quando il dato è presente solo sul disco.
- **dirty bit**: quando posto a 1 indica che la pagina è stata modificata e quindi quando verrà sostituita deve venir aggiornato il suo valore nelle memorie secondarie
- **reference bit**: viene settato a 1 ogni volta che la pagina viene riferita e periodicamente viene posto a 0. Serve per l'implementazione della politica LRU

### Translation lookaside buffer

*Translation lookaside buffer* (TLB) è un'altra memoria cache utilizzata per memorizzare delle porzioni di *page table* (quelli utilizzate più recentemente). Essa presenta tempi di accesso molti più veloci della ram e sfrutta la località spaziale.

Nel caso si verifichi un miss nella TLB si va prima a cercare nella *page table* e se si verifica un *page fault* si cerca nel disco.

## Integrazione della memoria cache

In questo sistema di memoria virtuale si può integrare la memoria cache in tre modi differenti:

- **Physically addressed cache**: la cache utilizza indirizzi fisici, quindi prima di ogni accesso in cache si deve passare per TLB e nel caso di TLB-miss si passa per la page table. processi diversi che utilizzano gli stessi indirizzi virtuali non creano problemi.
- **Virtually addressed cache**: la cache utilizza indirizzi virtuali, ogni cache-hit non richiede accesso a TLB (evitando di provocare TBL miss e paga fault). Processi che utilizzano gli stessi indirizzi virtuali possono creare dei problemi di letture e scritture senza permesso.
- **Virtually indexed but physically tagged**: l'index viene calcolato sull'indirizzo virtuale mentre il tag viene ottenuto dall'indirizzo fisico. non presenta il problemi di processi che utilizzano gli stessi indirizzi virtuali. comportamente simile alla physically addressed.

### Tipologie di miss

- **compulsory**: sono i miss certi, si verificano quando i blocchi vengono acceduti per la prima volta.
- **capacity**: si verificano quando la cache non è in grado di contenere tutti i blocchi necessari al processo, un blocco utile viene espulso e successivamente riammesso.
- **collisions**: si verifica con le cache completamente associative e accade quando due blocchi competono per una certa posizione.

## Gestione della memoria virtuale del SO

Il sistema operativo deve intervenire in caso di  *TBL miss* e *page fault*.

la CPU possiede almeno due modalità di esecuzione: **user mode** e **supervisor mode** (kernel mode).

Alcune operazioni (le più importanti) possono essere fatte solo in kernel mode. I normali programmi vengono eseguiti in user mode.

Un programma eseguito in user mode:
- non può modificare il page table register
- non può modificare le entry del TLB
- non può cambiare autonomamente in supervisor mode

In supervisor mode non ci sono limitazioni.

### System call

Un programma in user mode può passare alla supervisor mode solo attraverso una **system call** che:

- Entra in supervisor mode
- Trasferisce il controllo ad una locazione che si occupa di gestire l'interruzione.
- Salva il PC in un registro chiamato *Exception Link Register* (ELR)
