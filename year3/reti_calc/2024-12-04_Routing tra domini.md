﻿# Routing tra domini

Dopo aver visto il router all’interno di un dominio parliamo del routing tra domini diversi, cioè tra reti gestite da entità amministrative diverse. Viene utilizzato un solo protocollo chiamato BGP.

### Autonomous System (AS)

Quelli che fino ad ora abbiamo chiamato **domini** sono più comunemente detti **Autonomous system (AS)**, cioè  è una collezione di reti controllate da una singola entità amministrativa (ISP, azienda, governo, università).

Ogni AS riceve un numero univoco che lo identifica, chiamato *autonomous system number* (ASN).

Ad ogni AS viene assegnato un numero di indirizzi IP pubblici, che possono essere distribuiti e che saranno sotto il loro controllo. 

Gli AS si dividono in due tipi principali:

- **Stub AS**: ricevono e mandano traffico ma non instradano il traffico tra altri AS. Nel grafo di internet possiamo immaginarli come le foglie.
    
    Possono essere **single-homed** (connessi a un solo AS) o **multi-homed** (connessi a più AS).
    
- **Transit AS**: instradano i dati tra AS.

## Connessioni tra AS

Gli AS devono connettersi per permettere agli host al loro interno di comunicare.

Diversamente dal routing interno, su internet non si cerca il percorso migliore da sorgente a destinazione, ma un percorso deciso in base a degli **accordi commerciali** fatti precedentemente.

Esistono due modi per connettere gli AS:

- **Private Peering**: Connessione diretta tra due router di due AS diversi. I proprietari degli AS pagano solamente l’installazione dell'infrastruttura necessaria per la connessione (non molto scalabile).
    
    ![https://i.ibb.co/khCFPf7/image.png](https://i.ibb.co/khCFPf7/image.png)
    
- **Internet Exchange Points (IXP)**: Data center condiviso dove gli AS collocano i propri router e si connettono tra loro. Gli AS dovranno pagare il servizio offerto
    
    ![https://i.ibb.co/8gWbLrb/image.png](https://i.ibb.co/8gWbLrb/image.png)
    

L’obiettivo di ogni AS è quello di pagare il meno possibile per le proprie transizioni di pacchetti, quindi di preferire l’instradamento verso un private peering quando possibile (anche se magari passando da un’altra strada sarebbe più veloce).

## BGP

BGP (*Border Gateway Protocol*) è l’unico protocollo di routing utilizzato dagli AS

La base del routing è che i router si scambiano i prefissi delle reti che essi possono raggiungere, in questo caso però, non tutti i prefissi raggiungibili vengono esposti a causa di relazioni commerciali. 

Ad esempio nell’immagine precedente del private peering, B potrebbe far passare il traffico destinato a C attraverso A, quindi non pagando e facendo pagare A, questo non deve succedere.

In generale:

- il cliente rivela al provider i propri prefissi e quelli dei propri clienti (non rivela quelle conosciute attraverso altri provider).
- il provider rivela al cliente tutti i prefissi che conosce.
- In una **relazione di peering**, un AS rivela solo i propri prefissi e quelli dei propri clienti (non rivela quelle conosciute attraverso altri provider).

![https://i.ibb.co/vX3dpT4/image.png](https://i.ibb.co/vX3dpT4/image.png)

## Funzionamento di BGP

Ogni AS necessita di almeno un **router BGP (di bordo)** per annunciare i propri prefissi di rete agli altri AS, possono inoltre inoltrare i prefissi di altri AS.

I router di bordo, eseguono **sia BGP** che il protocollo di **routing interno dell'AS**, come OSPF, e utilizzano le informazioni ricevute per costruire una **tabella di forwarding** che utilizzerà per decidere dove mandare i pacchetti.

La tabella di forwarding è una struttura dati che **mappa** ogni **indirizzo di destinazione all'interfaccia** di uscita appropriata per raggiungere tale destinazione.

### Esempio

![https://i.ibb.co/qCYmjKj/image.png](https://i.ibb.co/qCYmjKj/image.png)

Vediamo un esempio di una piccola rete Internet composta da diversi AS (ignoriamo per semplicità i possibili accordi commerciali).

Vediamo come la rete `10.150.0.0/24` viene propagata su internet:

1. Il router A (all’interno di AS150) annuncia il suo prefisso `10.150.0.0/24` e il percorso per raggiungerlo (`150`) al router D (all’interno di AS11)
2. Il router A (all’interno di AS150) annuncia il suo prefisso `10.150.0.0/24` al router B (all’interno di AS151)
3. Il router B (all’interno di AS151) propaga il prefisso `10.150.0.0/24` aggiungendo se stesso al percorso per raggiungerlo (`151→150`) al router D (all’interno di AS11)
4. Il router D (all’interno di AS11) propaga il prefisso `10.150.0.0/24` aggiungendo se stesso al percorso per raggiungerlo (`11→150`) al router B (all’interno di AS151)

Nota a questo punto come i router utilizzano **split horizon** (quindi non inviando ad un router le rotte che ha scoperto proprio tramite quel router) per evitare loop sul singolo link.

Inoltre il fatto di includere il **percorso completo** permette ai router di evitare di mandare prefissi ad un router se quel router è già all’interno del percorso, questo previene che si creino loop più lunghi di un singolo link.

1. Nell’AS11 ci sono 3 router di bordo. Facendo parte dello stesso AS essi devono essere sincronizzati, per farlo si utilizza una piccola variazione di BGP, chiamata **IBGP** (Internal BGP).
    
    In questo caso il router D annuncia ai router F ed E il prefisso `10.150.0.0/24` **senza aggiungere nulla al percorso** (rimarrà quindi `150`).  Nota che in questo momento D ne ha due di percorsi per raggiungerlo, ma annuncerà solo il migliore che possiede.
    
2. Il router F (all’interno di AS11) propaga prefisso `10.150.0.0/24` aggiungendo se stesso al percorso per raggiungerlo (`11→150`) al router G (all’interno di AS3)
3. Il router E (all’interno di AS11) propaga prefisso `10.150.0.0/24` aggiungendo se stesso al percorso per raggiungerlo (`11→150`) al router C (all’interno di AS160)

### BGP (path vector) VS distance vector

BGP si basa sui principi del **routing distance vector**, ma con alcune differenze chiave:

- **Path Vector protocol:** Invece di annunciare solo la distanza dalla destinazione, BGP include l'intero percorso per raggiungere la destinazione.
- BGP non invia aggiornamenti regolari, ma solo quando si verificano cambiamenti nella rete o quando un vicino richiede esplicitamente un aggiornamento.
- Gli aggiornamenti BGP contengono informazioni solo su specifici prefissi che hanno subito un cambiamento, non sull'intera tabella di routing.

### Cambiamento alla rete

- Nel caso un AS non hosti più un certo prefisso, esso manderà un messaggio di **withdraw** (ritiro) ai propri vicini, essi propagheranno il messaggio su tutta la rete rendendo così irraggiungibile quel prefisso.

- Nel caso un link tra due AS si rompa, supponiamo il link tra A e D nell’esempio precedente.
    
    D potrà fare due cose:
    
    - mandare un messaggio di **withdraw** ai suoi vicini (B, E, F) dicendo di eliminare il percorso che passava attraverso di lui
    - mandare un **update** ai suoi vicini (E, F) in cui annuncia un percorso alternativo.
    
    In questo caso D ha un percorso alternativo e quindi farà un update (a B non lo manderà perché il percorso alternativo comprende già B)
    

## Dettagli del protocollo

BGP si basa su connessione TCP sulla porta 179.

BGP utilizza **cinque tipi di messaggi** per comunicare con i suoi **peer** (il termine **peer** si riferisce a un router vicino nel grafo BGP, indipendentemente dalla relazione commerciale tra i due AS.):

- **Open:** Stabilisce la connessione BGP tra due router.
- **Update:** Trasferisce le informazioni di routing tra i peer BGP.
    
    Ad esempio segnalando prefissi da ritirare (withdraw), da annunciare o da modificare
    
- **Keepalive:** Verifica se i peer sono ancora raggiungibili.
- **Notification:** Notifica gli errori ai peer BGP.
- **Route-refresh:** Richiedere di riannunciare dei prefissi.

## Path prepending

Il **Path Prepending** è una tecnica utilizzata per influenzare il percorso del traffico.

In sostanza, un AS può annunciare un prefisso di rete a un altro AS includendo più volte se stesso nel percorso in questo modo rende il percorso non voluto artificialmente più lungo, scoraggiando gli altri AS dal sceglierlo.

Consideriamo una rete di questo tipo con 6 AS

![https://i.ibb.co/JzRtZ1b/image.png](https://i.ibb.co/JzRtZ1b/image.png)

(in blu sono segnati il numero di hop)

AS1 possiede due connessioni: una a 10Gb/s usata in condizioni normali e una di backup a 1Gb/s.

In condizioni normali, si desidera che il traffico utilizzi la connessione a 10Gb/s. 

Però AS2, AS4 utilizzerebbero quasi sicuramente il link a 1Gb/s dato che fanno meno salti (AS6 potrebbe utilizzare entrambi i link in modo alternato con una probabilità equa).

Per forzare ad usare il link più veloce, l'AS1 può annunciare il prefisso di rete alla connessione a 1Gb/s con un percorso "allungato" tramite il **prepending**. Gli altri AS, vedendo un percorso più lungo, preferiranno la connessione a 10Gb/s.

![https://i.ibb.co/q1PLscG/image.png](https://i.ibb.co/q1PLscG/image.png)

AS1 annuncia quindi ad AS2 che il percorso per raggiungerlo è lungo 6 hop (ripetendo se stesso 6 volte)

AS6 ne ha possibilità propaga ad AS4 il percorso migliore che ha, il quale li propagherà a sua volta a AS2 che otterrà quindi un percorso migliore di 6 hop (5 hop).

Se dovesse rompersi il link da AS5 a AS3:

![https://i.ibb.co/9b1bPpR/image.png](https://i.ibb.co/9b1bPpR/image.png)

AS5 fa un withdraw su tutta la rete, annullando quindi i cammini che passavano verso il link rotto.

AS6 che era a conoscenza anche del percorso peggiore lo propaga ad AS5.

### BGP anycast

BGP Anycast, permette a più server di condividere lo stesso indirizzo IP. Questo è utile per servizi dove le richieste vengono indirizzate al server più vicino a livello geografico.

Esempio:

![https://i.ibb.co/cbxyQnf/image.png](https://i.ibb.co/cbxyQnf/image.png)

Entrambi AS1 e AS6 annunciano lo **stesso prefisso**. In questo modo gli altri AS hanno un cammino per raggiungere 1 e uno per raggiungere 6 e utilizzeranno quello più vicino.

Nel caso un link si rompesse c’è quello di backup verso l’altro AS.

Possono esserci situazioni di questo tipo:

![https://i.ibb.co/W0Yh6BL/image.png](https://i.ibb.co/W0Yh6BL/image.png)

In questo caso AS7 ha AS1 e AS6 alla stessa distanza, potrebbe quindi mandare un pacchetto verso AS1 e il successivo verso AS6. Per questo motivo questo meccanismo non viene utilizzato per connessioni che mantengono uno stato (ad esempio connessioni TCP) ma con servizi dove ogni **richiesta è indipendente dalla precedente** (come DNS)