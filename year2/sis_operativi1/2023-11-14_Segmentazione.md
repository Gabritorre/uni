# Segmentazione

La segmentazione è un altro modo di dividere la memoria in blocchi, questi blocchi non hanno una dimensione fissa come le pagine.
I segmenti contengono porzioni del programma significative, come array, funzioni, lo stack, ecc...

Data la diversa dimensione dei segmenti è possibile che si verifichi della **frammentazione esterna**

Il funzionamento è comunque simile a quello delle pagine:

L'indirizzo virtuale è diviso in ***numero di segmento* e *offset***, al posto della tabella delle pagina abbiamo una **tabella dei segmenti** la quale contiene oltre all'indirizzo del segmento in memoria fisica, anche altri bit di controllo (bit di residenza, la lunghezza del segmento per evitare di andare in overflow, bit per il tipo di operazione) e l'indirizzo di memoria secondaria dove trovare il segmento nel caso non sia in RAM.

![enter image description here](https://i.ibb.co/z4xFCmF/image.png)

### Condivisione

La condivisione di un segmento con più processo è più efficiente rispetto alle pagine proprio perchè rappresentano un blocco logico di dati. Sono necessari dei meccanismi di sicurezza per controllare che i giusti processi abbiano accesso a tale segmento.

Un meccanismo per implementare questa sicurezza è tramite delle **chiavi di protezione della memoria**, cioè dei valori associati ad ogni processo e ad ogni segmento (modificabili solo tramite istruzioni privilegiate).
Se la chiave del processo combacia con la chiave del segmento allora il processo è autorizzato ad accederci.

Il sistema operativo può eseguire un controllo ulteriore su quali operazioni sono permesse su un segmento, ciò viene fatto dal **bit di protezione**.

Un segmento può consentire le seguenti operazioni:

- Read
- Write
- Execute
- (Append) aggiungere informazioni senza modificare quelle esisteniti

possiamo realizzare varie 7 combinazioni (che corrispondono ai valori del comando linux `chmod`)

|  | Read | Write | Execute |
|:--:|:--:|:--:|:--:|
| Mode 0 | ❌| ❌| ❌|
| Mode 1 | ❌| ❌| ✅|
| Mode 2 | ❌| ✅| ❌|
| Mode 3 | ❌| ✅| ✅|
| Mode 4 | ✅| ❌| ❌|
| Mode 5 | ✅| ❌| ✅|
| Mode 6 | ✅| ✅| ❌|
| Mode 7 | ✅| ✅| ✅|


## Sistemi con paginazione e segmentazione

Per cercare di sfruttare i vantaggi delle due tecniche analizziamo una versione ibrida di paginazione e segmentazione.

- con la paginazione:
	- non abbiamo frammentazione esterna
	- abbiamo una organizzazione semplice della memoria
- con la segmentazione:
	- condivisione dei segmenti migliore
	- suddivisione delle memoria in blocchi significativi

Andiamo a **suddividere i segmenti in pagine**.
La memoria virtuale è quindi divisa in segmenti che a loro volta sono suddivisi in pagine mentre la memoria fisica è divisa in pagine.

Un indirizzo virtuale è quindi diviso in: numero di segmento, numero della pagina all'interno del segmento, offset all'interno della pagina.

![enter image description here](https://i.ibb.co/d62ZvYx/image.png)

Facciamo sempre uso di una TLB che contiene le pagine più utilizzate.
Prima si cerca la pagina nella TLB, se non c'è si cerca il segmento nella tabella dei segmenti. Da lì troviamo l'indirizzo iniziale di una page table e andremo a trovare la riga che ci restituirà il page frame

### Condivisione

In questo sistema abbiamo che due processi condividono della memoria se la propria tabella dei segmenti punta alla stessa page table. 
In questo caso il controllo dei permessi facilitato dalla segmentazione, entre la condivisione viene facilitata dalla paginazione.




