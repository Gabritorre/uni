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

Le memorie più veloci vanno messe più vicine possibile al processore, perche saranno quelle più utilizzate, le altre memorie più capienti ma più lente vanno messe a cascata come ulteriore supporto per memorizzare i dati necessari al processore

### Principio di località

Il principio di località afferma che non tutte le parti del codice hanno la stessa probabilità di essere eseguite, alcune istruzioni vengono eseguite molto spesso e altre molto meno (pensa ai cicli per esempio)

- **Località temporale** la località temporale dice che quando si fa riferimento ad un dato c'è la tendenza a fare riferimento allo stesso dato in breve tempo (istruzioni di un ciclo).
- **Località spaziale** la località spaziale dice che quando si fa riferimento ad un dato c'è la tendenza a fare riferimento ai dati adiacenti (scorrere gli array).
