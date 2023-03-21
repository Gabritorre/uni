# Memoria cache

Nel mondo della tecnologia le memorie presentano dei limiti tecnici

- Le memoria lente sono capienti ed economiche
- Le memorie veloci sono piccole e costose

Esistono principalmente due tipologie di memorie: le SRAM e le DRAM


## Memorie SRAM

SRAM sta per Static Random Access Memory.

- Sono realizzate con molti componenti
- Sono molto veloci
- Sono relativamente grandi a livello di dimensioni
- Consumano molta energia
- Non hanno bisogno di un refresh periodico dei dati memorizzati

Le memorie **cache** utilizzano questo di memoria

## Memorie DRAM

DRAM sta per Dynamic Random Access Memory.

- Sono realizzate con pochi componenti
- Sono più lente delle SRAM
- Occupano meno spazio
- Consumano meno energia
- Necessitano di un refresh periodico dei dati memorizzati (motivo per cui si chiamano Dynamic)

Esistono altre versioni delle DRAM come le Syncrhonize DRAM (SDRAM) che utilizzano un clock sincronizzato con la CPU e le Double Data Rate SDRAM (DDR SDRAM) che possono trasferire dati sia sul fronte di salita sia su quello di discesa, raddoppiando la banda

Le classiche memorie RAM utilizzano questa tipologia di memoria

## Memoria flash

Un altro tipo di memoria sono le **Memorie flash** che sono di tipo EEPROM (Electrically Erasable Programmable Read Only Memory), 

Una memoria flash molto utilizzata sono gli SSD (Solid state disk) i quali sono più lenti delle memoria DRAM però riescono a mantenere il dato anche se non alimentate, questo grazie alla tecnologia NAND flash.

Il problema principale di questi tipo di memoria è l'usura nel tempo. Per ridurre questo problema è presente un controller (wear leveling) che permette di distribuire le scritture dei dati in modo uniforme in tutto il disco, così che non si usurino maggiormente alcune parti rispetto ad altre.

 Dato che il tempo di accesso è uguale in tutte le parti del disco, avere i dati sparsi a caso nel disco non rappresenta un problema di prestazioni. Per questo la deframmentazione (processo per il quale si cerca di mettere i dati relativi allo stesso file tutti molto vicini nelle celle del disco) è inutile e anzi riduce la vita dell'ssd.

## Hard disk

Questo tipo di memoria sempre meno utilizzato a favore degli ssd sono:

- molto capienti
- economici
- è composto da dischi magnetici in movimento e una testina che ha il compito di scrivere e leggere i dati
- decisamente più lento degli ssd
- sensibile a vibrazioni 

In questo caso la deframmentazione ha senso dato che riordinare i dati aiuta la testina a leggere consecutivamente i dati che gli interessano migliorando le prestazioni.

## Gerarchia delle memoria

In un sistema completo vengono utilizzate tutte le tipologie di memoria, ognuna in un ambito diverso:

Le memorie più veloci vanno messe più vicine possibile al processore dato che i dati che cerca la CPU vengono cercate a cascata prima nelle memoria più veloci e poi, se il dato non viene trovato, cerca nelle altre memorie.

Le memorie più vicine alla CPU (cache) contengono delle copie dei dati che si trovano nei livelli più lontani. Il livello più lontano di tutti contiene tutti dati.

### Principio di località

Il principio di località afferma che non tutte le parti del codice hanno la stessa probabilità di essere eseguite, alcune istruzioni vengono eseguite molto spesso e altre molto meno (pensa ai cicli per esempio)

- **Località temporale** la località temporale dice che quando si fa riferimento ad un dato c'è la tendenza a fare riferimento allo stesso dato in breve tempo (istruzioni di un ciclo).
- **Località spaziale** la località spaziale dice che quando si fa riferimento ad un dato c'è la tendenza a fare riferimento ai dati adiacenti (scorrere gli array).

### Terminologia
L'unità di informazione minima è detta **blocco** Quando il dato viene trovato nel livello di memoria si dice **hit** mentre se nel livello non si trova il dato si dice **miss**.

é possibile calcolare il rapporto tra gli accessi e la quantità di hit, lo stesso vale per i miss, questi vengono chiamati **hit-rate** $(\frac{\text{hit}}{\text{accessi}})$ e **miss-rate** $(\frac{\text{mis}}{\text{accessi}})$

Viene chiamato **hit time** il tempo impiegato per trovare il dato nella prima memoria in cui guarda il processore.
Viene chiamato **miss penalty** il tempo necessario per trovare il dato nelle memoria inferiori + il tempo a passare tali dati alla CPU.

## Memorie cache


Le memorie cache sono delle memorie che nascono con lo scopo di aumentare l'hit-rate e minimizzare i tempi di accesso per i dati utilizzati più frequentemente.

### Cache ad accesso diretto

Per progettare una cache bisogna decidere:
- La dimensione di un blocco e la quantità di blocchi da utilizzare
- Come accedere/trovare/scrivere un blocco

Bisogna creare una funziona che fa un *mappinig* tra gli indirizzi di memoria e i blocchi.

l'indice della memoria principale viene mappato con il relativo indice in memoria cache con formula:

$$\text{indice-blocco} = \text{indice-memoria} \,\% \,\text{numero-blocchi}$$

Per agevolare le operazioni il numero di blocchi è solitamente una potenza di 2, in questo modo l'operazione di modulo equivale a prendere i primi $\log_2(\text{numero-blocchi})$ dell'indirizzo (meno significativi).

Ad esempio
avendo 8 blocchi $(2^3)$
come indice di memoria abbiamo: 01101
$\log_2 2^3 = 3$
Quindi l'indice del blocco associato al nostro indirizzo di memoria equivale ai primi 3 bit meno significativi dell'indirizzo, cioè 101.

![](https://i.ibb.co/vZX90yC/cache.png)

Questo assumendo che la dimensione del blocco sia 1Byte, ma non è molto utile perché ad esempio le singole istruzioni sono lunghe 4 Byte e andare a copiare 1 byte alla volta sarebbe troppo dispendioso.

Ipotizzando di avere un blocco grande $n$ byte allora gli indirizzi consecutivi che differiscono di $n$ bit finiranno nello stesso blocco.

Il mapping in questo caso si fa con:

$$\text{indice-blocco} = (\text{indice-memoria} \,/ \,\text{grandezza-blocco}) \,\% \,\text{numero-blocchi}$$

Esempio
avendo 8 blocchi $(2^3)$
la dimensione di un blocco è 2
come indice di memoria abbiamo: 01101

$(\text{indice-memoria} \,/ \,\text{grandezza-blocco})$

$(01101 \,/ \, 2)$ equivale a fare uno shift di 1 $(\log_22)$ a destra

Quindi il nostro indirizzo diventa $0110$

$(\text{indice-memoria} \,/ \,\text{grandezza-blocco}) \,\% \,\text{numero-blocchi}$

$0110 \,\% \,8$ equivale a prendere in considerazione i primi 3 ($log_28$) bit meno significativi, quindi l'indice del blocco sarà $110$

![](https://i.ibb.co/VNXSXBX/cache2.png)

Come si vede dall'immagine andando a ignorare l'ultimo bit ci sono due istruzioni che vanno contemporaneamente nello stesso blocco

### Tag

Dato che durante l'esecuzione del codice più istruzioni utilizzeranno le stesse locuzione, come faccio a riconoscere l'istruzione che c'è all'interno di una locuzione in un determinato momento.

Per risolvere questo problema andiamo a memorizzare oltre al dato anche l'indice della memoria:

Nell'ultimo esempio fatto avevamo come indice 01101 che viene salvato assieme all'indice 01100 Quindi oltre ai dati contenuti in questi indici dovremmo salvarci anche gli indici stessi, ma in realtà basta salvarsi solo i bit più significativi (in questo caso '0') perché i meno significativi (110*) rappresentano già l'indice del blocco della cache.

Questi bit più significativi vengono chiamati **tag**

$$\text{tag} = \text{indice-blocco}/ \text{numero-blocchi}$$

### Valid bit

Viene utilizzato un ulteriore bit per identificare se il dato attuale contenuto in un blocco della cache è valido oppure no. Appena acceso il PC tutti i valori nella cache non hanno significato e ci serve un bit per indicare che sono non significativi, cioè il **valid bit** che è inizializzato a 0.
- 0: dati non validi
- 1: dati validi

Man mano che la cache viene riempita, i valid bit dei blocchi passano da 0 a 1 


### Esempio lettura cache

![](https://i.ibb.co/w7x4D3J/read-cache.png)

1. viene utilizzato l'index per trovare la riga corrispondente in cache
2. vengono confrontati i due tag e il risultato viene messo in `and` con il valid bit, questo per accertarsi che il dato sia valido e sia quello che effettivamente stiamo cercando
3. in base al byte offset otteniamo i dati che ci interessano


## Conflitti

Quando dobbiamo portare un blocco in cache nella stessa posizione dove risiedono altri dati, cosa ne facciamo di questi dati già presenti?

- Se i quei dati dopo essere stati portati in cache sono stati solo letti, possiamo rimpiazzarli senza problemi (tanto in RAM ci sarà già una copia di essi)
- Se quei dati dopo essere stati portati in cache sono stati modificati, prima di andare a rimpiazzarli dobbiamo aggiornare i dati anche ai livelli di memoria inferiori per mantenere una coerenza di dati. Occorre stabilire delle **politiche di coerenza tra livelli di memoria**

### Politica write through

In questa politica ogni scrittura in cache implica che la scrittura avvenga anche ai livelli di memoria inferiori.
In questo caso abbiamo **dati sempre coerenti** però a **livello prestazionale non è ottimale**.

### Politica write back

In questa politica solo quando un dato in cache deve venire rimpiazzato allora viene prima scritto ai livelli di memoria sottostanti.
In questo caso abbiamo **ottime prestazioni nelle normali scritture** però la **sostituzione del blocco è più lenta del normale**

### Cosa accade in caso di miss e hit

- **Read-hit**: Avviene in caso di `lw` oppure *fetch* dell'istruzione e rappresenta l'accesso alla memoria con il massimo della velocità
- **Read-miss**: la CPU va messa in stallo finche la lettura non viene completata, quando il dato viene copiato il cache:
	- in caso di *fetch* viene ripetuto
	- in caso di `lw` viene completato l'accesso al dato
- **Write-hit**: Avviene in caso di `sw`
	- Write through: i dati vengono scritti sia in cache sia in RAM
	- Write back: i dati vengono scritti soltanto in cache, viene segnalato che il blocco è stato modificato (attraverso un *dirty bit* associato al blocco)
- **Write-miss**: Avviene in caso di `sw`
	- Write through: la CPU viene messa in stallo $\to$ il dato viene scritto direttamente in memoria RAM (senza passare per la cache).
	- Write back: la CPU viene messa in stallo $\to$ il blocco mancante in cache viene preso dalla memoria RAM e messo in cache $\to$ viene completata la `sw`.


## Prestazioni

La misurazione delle prestazioni quando utilizziamo la memoria cache cambiano nel seguente modo:

$T_{exe} = (\text{cicli} + \text{cicli di stallo}) \cdot \text{periodo di clock}$

Dove

$$\text{cicli di stallo} = \text{IC} \cdot \text{miss-ratio} \cdot \text{miss-penalty}$$
- $\text{IC} \cdot \text{miss-ratio}:$  rappresenta il numero di istruzioni che provocano il miss
- per semplicità consideriamo un miss-penalty unico per scrittura e lettura
- il $\text{miss-ratio}$ si suddivide in **instruction miss-ratio** (per i miss dei fetch) e **data miss-ratio** (per i miss di `sw` e `lw`)


Esempio:
Assumiamo di avere un programma che ha:
- Instruction miss-ratio: $2\%$ (2% riferito alle istruzioni totali)
- Data miss-ratio: $4\%$ (4% riferito alle istruzioni `sw`/`lw`)
- Istruzioni `sw`/`lw`: $36\% \cdot  IC$
- $\text{CPI}_{\text{ideale}} = 2$
- miss-penalty: 40 cicli (quando si verifica un miss sono necessari 40 cicli di clock per recuperare il dato)

#### Troviamo i cicli di stallo per le istruzioni:

formula: $\text{cicli di stallo} = \text{IC} \cdot \text{instruction miss-ratio} \cdot \text{miss-penalty}$

$\text{IC} \cdot 0.02 \cdot 40 = 0.8 \cdot \text{IC}$

#### Troviamo i cicli di stallo per i dati:

formula: $\text{cicli di stallo} = \text{IC}_{dati} \cdot \text{data miss-ratio} \cdot \text{miss-penalty}$

$(0.36\cdot \text{IC}) \cdot 0.04 \cdot 40 = 0.58 \cdot \text{IC}$

#### Troviamo i cicli di stallo totali
sarà dato dalla somma dei due tipi di stalli:

$0.8 \text{IC} + 0.58 \text{IC} = 1.38\text{IC}$

#### Troviamo i cicli di stallo medi per istruzione

$\frac{1.38\text{IC}}{\text{IC}} = 1.38$

#### Troviamo il CPI reale

dato dalla somma tra  $\text{CPI}_{ideale}$ e i cicli di stallo medi

$2 + 1.38 = 3.38$

#### Troviamo lo speedup

$\frac{3.38}{2} = 1.69$

Rispetto al nostro $\text{CPI}_{\text{ideale}}$ , quello reale risulta essere 1.69 volte peggiore


### Cache associative

Nella cache ad accesso diretto ogni blocco di memoria veniva associato ad un blocco di cache (tramite la funzione di mapping)

Nelle **cache associative** i blocchi vengono raggruppati in **insiemi** (set) e ogni insieme ha delle **vie o blocchi** (way), ogni via appartenente ad un insieme possiede il tag e il dato.

cache con 4 insiemi e due vie
![enter image description here](https://i.ibb.co/QvTc2VZ/cache-ass.png)

In queste cache la funzione di mapping lavora solo sulla decisione degli insiemi mentre per decidere in quale via andare a salvare il dato viene scelto il primo posto libero che viene trovato.

Quindi ogni indirizzo in memoria avrò associato un relativo insieme in cache, e può andare in qualsiasi via in quel insieme.

In base alle esigenze è possibile decidere quanti insiemi e quanti vie utilizzare, ad esempio avendo un totale di 8 blocchi da gestire, posso organizzare la cache come nell'immagine:

![](https://i.ibb.co/Khw0smN/caches.png)

Per andare a leggere un dato in cache ora sappiamo solo che un dato appartiene ad un determinato insieme, per trovare la posizione specifica bisogna scorrere tutto l'insieme. Nella **cache completamente associativa** ogni volta che ci serve un dato in cache bisogna scorrere tutta la cache (non molto efficiente)

Solitamente il numero di blocchi e il numero di insieme è un multiplo di 2.

#### Funzione di mapping

Ottengo l'insieme (set) della cache facendo: 

$$\text{indice-blocco} = (\text{indice-memoria} \,/ \,\text{grandezza-blocco}) \,\% \,\text{numero-insiemi}$$

![](https://i.ibb.co/pnKtdSx/mapping.png)

Nel caso dell'immagine abbiamo 4 insiemi e 2 vie

dato che la dimensione del blocco è 2 allora per trovare l'indice del blocco dobbiamo prima ignorare 1 bit meno significativo $(\log_2\text{dimensione\_blocco})$ poi dobbiamo fare il modulo di quello che rimane per $\log_2\text{numero\_insiemi}$ , in questo caso 2. Fare l'operazione di modulo corrisponde a prendere i $\log_2\text{numero\_insiemi}$ bit meno significativi.

Ad esempio 
Prendendo in considerazione l'indice in memoria 01010
- ignoro il 1 bit meno significativo
	sarebbe l'operazione $\text{indice-memoria} \,/ \,\text{grandezza-blocco}$ che nel nostro caso è $01010 / 2$ che corrisponde ad uno shift a destra di $\log_22 = 1$
	mi rimane 0101
- prendo i due bit meno significativi di quello che mi rimane
	sarebbe l'operazione $(\text{indice-memoria} \,/ \,\text{grandezza-blocco}) \,\% \,\text{numero-insiemi}$
	che nel nostro caso è  $0101 \% 4$ che corrisponde a prendere i $\log_24 = 2$ bit meno significativi.
	Quindi l'indice in memoria cache di 01010 è 01

### Gestione dei miss nelle cache associative

Nel caso in cui si verifica un miss e tutte le vie di un insieme associato all'istruzione "missata" sono occupate bisogna decidere quale blocco andare a sostituire.

- Viene sostituito un blocco casuale
- Viene sostituito il blocco usato meno di recente (Least recently used). Questa tecnica utilizza dei bit extra per memorizzare da quanto tempo non viene acceduto un blocco


### Esempio di confronto tra tipi cache

Compariamo: cache ad accesso diretto, cache associativa a 2 vie, cache completamente associativa.

tutte le cache composte da 4 blocchi
ipotizziamo di avere i seguenti indirizzi a cui accedere (a cui abbiamo già tolto l'offset, quindi va solo fatto il modulo) [0,8,0,6,8]

#### Cache ad accesso diretto

$\text{indirizzo} \% \text{numero-blocchi}$ 

$[0\%4=0\hspace{3mm} 8\%4=0 \hspace{3mm} 0\%4=0 \hspace{3mm}6\%4=2 \hspace{3mm} 8\%4=0]$

In questo caso abbiamo che tutti gli indirizzi di memoria sono mappati per andare all'indice di cache 0 tranne l'indirizzo 6

![](https://i.ibb.co/LQtqDRn/cache-diretta.png)

Otteniamo tutti *miss*
- 1° riga: prima apparizione del dato 0 quindi sicuramente non è presente in cache $\to$ *miss* e inserimento del dato 0 in cache nel blocco 0
- 2° riga: prima apparizione del dato 8 quindi sicuramente non è presente in cache $\to$ *miss* e inserimento del dato 8 in cache nel blocco 0 (il dato precedente viene perso)
- 3° riga: viene cercato il dato 0 ma non è presente nella sua posizione $\to$ miss e inserimento del dato 0 in cache nel blocco 0 (il dato precedente viene perso)
- 4° riga: prima apparizione del dato 6 quindi sicuramente non è presente in cache $\to$ *miss* e inserimento del dato 6 in cache nel blocco 2
- 5° riga: viene cercato il dato 8 ma non è presente nella sua posizione $\to$ miss e inserimento del dato 8 in cache nel blocco 0 (il dato precedente viene perso)

#### Cache associativa a 2 vie

$\text{indirizzo} \% \text{numero-insiemi}$ 

$[0\%2=0\hspace{3mm} 8\%2=0 \hspace{3mm} 0\%2=0 \hspace{3mm}6\%2=0 \hspace{3mm} 8\%2=0]$

In questo caso abbiamo che tutti gli indirizzi di memoria sono mappati per andare all'insieme della cache 0

![](https://i.ibb.co/9y5n3v0/2way.png)

- 1° riga: prima apparizione del dato 0 $\to$ *miss* e inserimento del dato 0 in cache nell'insieme 0 nella prima posizione libera
- 2° riga: prima apparizione del dato 8  $\to$ *miss* e inserimento del dato 8 in cache nell'insieme 0 nella prima posizione libera 
- 3° riga: viene cercato il dato 0 e viene trovato $\to$ *hit* 
- 4° riga: prima apparizione del dato 6 $\to$ *miss* e inserimento del dato 6 al posto del dato utilizzato meno di recente (cioè 8, perché 0 è stato letto nell'accesso precedente)
- 5° riga: viene cercato il dato 8 ma non è presente nel suo insieme$\to$ miss e inserimento del dato 8 al posto del dato utilizzato meno di recente (cioè 0)

#### Cache completamente associativa

i dati vanno nel primo blocco che trovano libero

![](https://i.ibb.co/pnDVRhR/compl-ass.png)

- 1° riga: prima apparizione del dato 0 $\to$ *miss* e inserimento del dato 0 in cache nella prima posizione libera
- 2° riga: prima apparizione del dato 8  $\to$ *miss* e inserimento del dato 8 in cache nella prima posizione libera 
- 3° riga: viene cercato il dato 0 e viene trovato $\to$ *hit* 
- 4° riga: prima apparizione del dato 6 $\to$ *miss* e inserimento del dato 6 nella prima posizione libera 
- 5° riga: viene cercato il dato 8 e viene trovato $\to$ *hit* 


## Cache a più livelli

Nei processori moderni esistono 3 livelli di memoria cache che si differenziano per dimensione, velocità e posizionamento relativo al processore:
- L1: la più veloce, la più vicina alla CPU (una per ogni core della CPU), la più piccola
- L2: meno veloce di L1, più lontana alla CPU rispetto a L1 (singola condivisa da ogni core della CPU), più grande di L1
- L3  La meno veloce, la più lontana alla CPU rispetto le altre due (singola condivisa da ogni core della CPU), più grande rispetto alle altre 2

Tutti e tre i livelli sono comunque notevolmente più veloci della memoria RAM
