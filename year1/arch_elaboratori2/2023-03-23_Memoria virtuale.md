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
- non può modificare il *page table register*
- non può modificare le entry del TLB
- non può cambiare autonomamente in supervisor mode

In supervisor mode non ci sono limitazioni.

### System call

Un programma in user mode può passare alla supervisor mode solo attraverso una **system call** che:

- Entra in supervisor mode
- Trasferisce il controllo ad una locazione che si occupa di gestire l'interruzione (quindi in supervisor mode viene eseguito solo codice del sistema operativo).
- Salva il PC del processo in un registro chiamato *Exception Link Register* (ELR)

### Eccezioni 

- **Eccezione TBL miss**: la pagina non è presente in TLB però è presente in RAM
	
	- L'eccezione può essere gestita tramite la *page table*
	- *miss-penalty* molto basso
	- l'istruzione che ha causate l'eccezione deve essere rieseguita dopo aver risolto l'eccezione

- **Eccezione TLB miss + page fault**:la pagina non è presente in TLB e nemmeno in RAM
	- La pagina mancante in RAM deve essere recuperata dal disco
	- *miss-penalty* molto grande
	- si effettua un **context switch** mentre si attende il dato da recuperare
	- quando il page fault è risolto si riprende l'esecuzione del processo.ù
- **Page fault con rimpiazzamento pagina**: Page fault e la memoria RAM è piena, quindi bisogna sostituire qualche pagina in RAM
	- Se la pagina da sostituire è stata anche modificata va prima aggiornata nel disco
	- Se la pagina da sostituire era presenta in TLB va rimossa anche da lì


## Context switch

Il **context switch** è un'operazione che fa il sistema operativo per cambiare il processo che è in esecuzione attualmente. Quando alcuni programmi per vari motivi richiedono dei tempi di attesa (ad esempio *Eccezione TLB miss + page fault*) si effettua il context switch e quindi si salva lo stato del processo e si manda in esecuzione un altro programma e si mette in "pausa" quello precedente.

Quando si cambia processo in esecuzione dobbiamo assicurarci che il nuovo processo non possa accedere ai dati del vecchio processo. Mentre la *page table* è unica per ogni processo e non ci crea problemi perché basta cambiare il puntatore alla tabella (basta cambiare il valore del *page table register*), il problema sta nella TLB che è unica e tutti utilizzano la stessa. Questo problema si risolve con l'ASID.

### ASID

Svuotare la TLB ad ogni context switch sarebbe troppo dispendioso, viene quindi introdotto un *Address Space ID* (ASID), cioè un ID che viene affiancato all'indirizzo virtuale per indicare a chi appartiene quel blocco di memoria, così non serve svuotare la cache/TLB ad ogni context switch.

## Page table multilivello

Per spazi di indirizzamento molto grandi si ottengono delle page table di una dimensione discretamente grande, contando però che ogni processo ha una propria page table si potrebbe arrivare a saturare la memoria RAM solo per contenere le page table.

Si utilizzano quindi delle page table multilivello:

Praticamente abbiamo che nella page table di primo livello ci sono dei puntatori alle page table di secondo livello, nelle page table di secondo livello ci sono dei puntatori a quelle di terzo livello e così via. solo l'ultimo livello conterrà gli indirizzi che cerchiamo. In RAM caricheremo solo la sequenza di page table che ci portano all'indirizzo che ci interessa e non tutte le possibili page table.
Le page table che non ci interessano vengono messe nel disco secondario (ci sarà una entry nella page di primo livello che le punterà).
La page di primo livello deve rimanere sempre in memoria RAM.
Ad esempio ARM utilizza 4 livelli di page table.

![](https://i.ibb.co/MCSdpp8/multilev-page.png)

approfondimento: [https://www.youtube.com/watch?v=Z4kSOv49GNc](https://www.youtube.com/watch?v=Z4kSOv49GNc)




