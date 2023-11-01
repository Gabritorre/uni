# La memoria virtuale

Oltre alla tecnica di swapping della memoria, abbiamo un'altra tecnica utilizzata per contrastare il problema di non aver sufficiente memoria per contenere tutti i processi che vogliono essere eseguiti, la **memoria virtuale**.

La principale caratteristica della memoria virtuale è quella di illudere i processi che esista più memoria di quella realmente è presente.

Abbiamo 2 tipologie di indirizzi con l'introduzione della memoria virtuale:

- **indirizzi fisici**: cioè gli effettivi indirizzi delle cella della memoria principale fisica
- **indirizzi virtuali**: indirizzi utilizzati dalla CPU (e quindi dai processi)

È quindi necessario un componente hardware capace di tradurre gli indirizzi virtuali in fisici, questo componente è chiamato **MMU** (Memory Management Unit)

lo spazio di indirizzamento fisico è unico e solo la MMU ci interagisce mentre lo spazio di indirizzamento virtuale è uno per ogni processo

Tutta questa tecnica ci permette di avere solo delle porzioni di programma mappati in memoria principale mentre il resto del programma è in memoria secondaria, proprio come succedeva con la tecnica **overlay** solo che lavorando con gli indirizzi virtuali il programmatore non deve più indicare le parti indipendenti del programma.

Data questa divisione di **spazi virtuali in memoria secondaria** e **spazi fisici in memoria principale** diciamo che la **tecnica di memoria virtuale lavora su due livelli di memoria**

## Paginazione

La paginazione è una tecnica utilizzata dai sistemi con memoria virtuale.
Questa tecnica consiste nel dividere l'insieme degli indirizzi fisici in dei blocchi chiamati **pagine** e dividere anche gli indirizzi fisici in blocchi chiamati **pagine fisiche o page frame**.

Le pagine e le pagine fisiche hanno la stessa dimensione fissa (che solitamente è una potenza di 2).

La MMU applica una funzione di mappatura degli indirizzi nelle pagine in modo da mapparli in indirizzi fisici delle pagine fisiche


## Traduzione degli indirizzi virtuali

Vediamo tre metodi per tradurre gli indirizzi virtuali in indirizzi fisici:

1. mapping diretto
2. mappa dei blocchi
3. mapping associativo


![enter image description here](https://i.ibb.co/p4YC5mp/page-table.png)


Nell'esempio sopra abbiamo 64KB di memoria virtuale e 32KB di memoria fisica, la grandezza delle pagine è di 4KB. Abbiamo quindi 16 pagine virtuali e 8 pagine fisiche

### Mapping diretto

Nel mapping diretto abbiamo che un indirizzo virtuale è mappato sempre al solito blocco

 Consideriamo l'indirizzo virtuale 8196 (base 10) che in binario è 0010000000000100 (in 16 bit perché per rappresentare 64KB indirizzi).

dividiamo il numero binario in 2 parti una parte di **numero di pagina** grande tanti bit quanti servono per rappresentare il numero di pagine (nel nostro caso abbiamo 16 pagine e quindi ci servono 4 bit) e un parte di **offset** che servirà per riferirci a tutti gli indirizzi all'interno di una pagina (abbiamo 4KB di indirizzi per pagina, infatti abbiamo i 12 bit rimanente per contenerli)

il **numero di pagina** verrà usato come indice di una **tabella delle pagine**, questa tabella contiene il numero di **pagina fisica** corrispondente al numero della pagina virtuale.
è anche presente un **bit di residenza** per sapere se anche se quella pagina virtuale è già mappata in memoria principale (bit = 1) o meno (bit = 0).

l'indirizzo fisico viene quindi formato da il valore della tabella con l'indice corrispettivo al numero di pagina virtuale e l'aggiunta dell'offset dell'indirizzo virtuale senza nessuna modifica

![enter image description here](https://i.ibb.co/LRLMM4b/traduzione.png)

in questo caso in uscita avremo 15 bit perché la memoria fisica è grande 32KB

Se un processo tenta di accedere ad un indirizzo virtuale non mappato, si verifica un **page fault**. In questo caso il sistema operativo si deve occupare di cercare sul disco secondario la pagina non mappata e mapparla sulla relativa pagina fisica.
Nella tabella della pagine è anche presente l'indirizzo dove andare a cercare la pagina in memoria secondaria nel caso non sia stata mappata in RAM.


![enter image description here](https://i.ibb.co/zJKJkyW/mapping-diretto.png)


### mappa dei blocchi

In questo caso viene utilizzata una mappa dei blocchi, se i blocchi sono di dimensione fissa si parla di **pagine,** se sono di dimensione diverse tra loro si parla di **segmenti**

l'indirizzo virtuale viene diviso in due parti: il numero del blocco e l'offset

si trova la riga della **tabella dei blocchi** sommando all'indirizzo iniziale il numero del blocco.
La tabella dei blocchi restituirà l'indirizzo dell'inizio del blocco in memoria fisica, ad esso si somma l'off set per trovare l'indirizzo fisico

![enter image description here](https://i.ibb.co/K92C85C/image.png)

### mapping associativo

Mentre nel mapping associativo ogni indirizzo virtuale è associato sempre allo stesso blocco fisico, nel mapping associativo un indirizzo virtuale può appartenere a qualsiasi blocco fisico.

Abbiamo una tabella di associatività che tiene traccia delle corrispondenze tra blocco virtuale e blocco fisico, quando vogliamo tradurre un indirizzo virtuale in fisico prendiamo il numero del blocco e lo cerchiamo nella tabella associativa (che ha accesso contemporaneo ad ogni riga), quando lo troviamo otteniamo il corrispondente blocco in memoria fisica a cui possiamo affiancare l'offset per ottenere l'indirizzo fisico.

In caso di **page fault** non abbiamo un blocco preciso che il sistema operativo deve andare a sostituire ma può scegliere quello che preferisce.


![enter image description here](https://i.ibb.co/GCJF8MZ/image.png)
