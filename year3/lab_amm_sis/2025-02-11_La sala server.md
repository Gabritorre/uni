# La sala server

## Server

L’architettura di un server non è molto differente da un PC casalingo.

Differenze rispetto ai PC casalinghi:

- La più importante è che i server hanno più **ridondanza di componenti** (più alimentatori, più CPU, più dischi) per garantire più resistenza ai guasti.
- Ci sono CPU dedicate all’uso server, che tendenzialmente hanno più core, più cache.
- Ci sono memorie RAM dedicate più performanti e con meccanismi di protezione alla corruzione.
- I dischi sono più performanti, con più cache e più resistenti, pensati per essere disposti in **RAID**
    
    Nota: si usano maggiormente ancora dischi magnetici classici (HDD) a causa del costo nettamente maggiore degli SSD in ambito server.
    
- Numero molto alto di interfacce di rete
- Presenza di **iLO** (*Integrated Light-Out*), Fisicamente è una porta Ethernet, la quale
semplifica le operazioni di gestione e monitoraggio remoto.
- Un numero sovradimensionato di ventole di raffreddamento (non si usa ancora il raffreddamento a liquido)

I server possono essere:

- **server rack**: sono dei moduli (degli effettivi computer) inseriti in un armadio armadio rack con dei carrelli a scorrimento impilati uno sopra l’altro.
    
    Ogni modulo ha la propria alimentazione, il proprio collegamento alla rete e il proprio sistema di raffreddamento.
    
- **server blade**: Sono dei moduli più compatti (computer minimali, solo CPU e RAM), inseriti in uno *chassis* condiviso che fornisce alimentazione, raffreddamento e connettività di rete ad ogni blade.

### Rack unit

Una rack unit, abbreviata in **U** (oppure RU, HU, height unit) è un'unità di misura usata per indicare l'altezza dei componenti installati in un rack. Un apparato alto un'unità rack è spesso indicato come
`1U`, e per altezze maggiori `2U`, `4U` e così via.

Per comodità una unità equivale a 3 buchi nelle lastre metalliche dove si infilano i server

![](https://i.ibb.co/JjPSNKkV/image.png)

## Sala server

Una sala server è una stanza contenente vari server ospitati in armadi rack.

È una stanza delimitata da grosse pareti, possibilmente **insonorizzate e isolate termicamente**. L’accesso ad essa dovrebbe essere consentito solo attraverso una o più porte di sicurezza.

Devono esserci 4 tipi di **impianti**:

- **di condizionamento**:
    
    I server scaldano molto, serve quindi un adeguato sistema di raffreddamento, anche i condizioni devono essere ridondati per gestire il guasto di un condizionatore.
    
- **elettrico**:
    
    I server consumano molta corrente elettrica, servono quindi molti alimentatori e molto grandi.
    
    Dovrebbe esserci un **UPS** e un sistema di **gruppi elettrogeni**
    
    - **UPS** (*Uninterruptible Power Supply*) è un dispositivo in grado di erogare energia, con l'ausilio di batterie, in caso di blackout. È anche in grado di eliminare i disturbi e le variazioni di tensione.
    - **gruppo elettrogeno**: un motore diesel che, in mancanza di corrente, aziona una specie di turbina che genera elettricità (sta a monte dell’UPS perché il suo avvio può produrre pericolosi picchi di tensione che vengono tagliati dall’UPS).
- **anti-incendio**:
    
    a causa del calore generato e dai tanti dispositivi elettronici presenti nella sala, è necessario un sistema in caso di incendio **a secco**, cioè con gas che rimuovono l’ossigeno dall’aria estinguendo così le fiamme, senza impattare sui componenti.
    
- **di rete**:
    
    Deve essere predisposta una adeguata cablatura di rete, i cavi dovrebbero essere messi in modo ordinato e colorati in base alla funzione.
