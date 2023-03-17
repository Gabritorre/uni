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

Nei processori moderni esistono 3 livelli di memoria cache che si differenziano per dimensione, velocità e posizionamento relativo al processore:
- L1: la più veloce, la più vicina alla CPU (una per ogni core della CPU), la più piccola
- L2: meno veloce di L1, più lontana alla CPU rispetto a L1 (singola condivisa da ogni core della CPU), più grande di L1
- L3  La meno veloce, la più lontana alla CPU rispetto le altre due (singola condivisa da ogni core della CPU), più grande rispetto alle altre 2

Tutti e tre i livelli sono comunque notevolmente più veloci della memoria RAM

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

