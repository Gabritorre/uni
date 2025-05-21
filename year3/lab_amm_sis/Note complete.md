# L’amministratore di sistema

Un **amministratore di sistema** (SysAdmin, SA) si occupa di vari compiti, tra cui la gestione, la messa in opera, la manutenzione, l’aggiornamento di un sistema.

Con **sistema** si intende un insieme di elementi (PC, smartphone, stampanti, server, …) che interagiscono tra loro in modo coordinato per poter raggiungere i risultati prestabiliti.

Una regola fondamentale nel campo dell’amministrazione di un sistema è che **se un sistema funziona (ciò svolge il suo compito) allora non si modifica ma si mantiene**.

Un sistema si cambia solamente quando:

- non svolge più la sua funzione
- non rispetta più i vincoli predisposti (ad esempio completare un’azione in un determinato tempo)
- nuovi sistemi presentano dei vantaggi nettamente superiori

Bisogna tenere in considerazione che, in grandi aziende, **cambiare ha un costo** (economico e di tempo) molto elevato.

Tra i **compiti** di un SysAdmin abbiamo:

- la conoscenza dell’hardware e del software
- conoscere i sistemi operativi e gli strumenti che mettono a disposizione
- gestire gli utenti e gli accessi al sistema
- gestire la sicurezza dei dati
- pianificare pratiche di backup e restore
- sorvegliare regolarmente il sistema

Mentre tra le **competenze** richieste possiamo individuare:

- saper installare una varia gamma di sistemi operativi (anche quelli più vecchi)
- conoscere programmazione di base
- conoscenza di inglese tecnico
- problem solving
- saper creare e mantenere la documentazione del sistema


# Hardware e raid

Possiamo rappresentare l’architettura dei computer con la **macchina di Von Neuman**

![](https://i.ibb.co/rYvtSdq/image.png)

Una scheda madre (*motherboard*) è una scheda elettronica che permette a tutte le componenti di comunicare tra loro.

Nella scheda madre possiamo installare CPU, memoria RAM, collegare memorie di massa e altre schede di espansione (video, rete, ecc…)

## Memorie

In particolare le memorie possono essere categorizzate in:

- **Memorie di massa:**
    
    Hanno lo scopo di **conservare i programmi e i dati in modo permanente**.
    
    Queste memorie possono essere collocate all’interno del case (memorie interne) oppure possono essere collegate esternamente al computer (memorie esterne).
    
    Appartengono a questa categoria: dvd, cd, chiavette USB, HDD, SSD, floppy disk.
    
- **Memorie principali:**
    - memoria RAM: è la memoria che contiene i dati e i programmi in corso di esecuzione. È volatile, cioè perde il suo contenuto quando il computer viene spento
    - memoria ROM: è una memoria di sola lettura. Contiene un programma che permette di accendere il computer
    - memoria cache: svolge un compito di memorizzazione temporanea dei dati presi di recente dalla RAM in modo da velocizzare i successivi accessi.

La loro capacità si misurano in multipli di Byte, tipicamente in GigaByte o TeraByte.

## CPU

La CPU non fa altro che eseguire le istruzioni di un programma. Un programma è formato da istruzioni scritte attraverso un linguaggio apposito, tale programma viene poi tradotto in un linguaggio che la CPU capisce, cioè in binario.
È in grado di eseguire milioni di istruzioni al secondo e, in base al tipo di istruzione, può incaricare altri dispositivi di eseguire alcuni compiti, ad esempio se viene dato un comando di stampa, la CPU incarica la periferica di eseguire la stampa, quindi i dati vengono letti dalla memoria e inviati
attraverso il bus alla periferica desiderata.

## RAID

Il RAID (*Redundant Arrays of Inexpensive Disks*) È una astrazione che, dato un gruppo di dischi di solito omogenei tra loro (stessa dimensione e velocità), costruisce una unità di storage logica, che viene vista dal sistema operativo come un’unica memoria di massa, indipendentemente dal tipo di RAID che viene usato e dai dischi che lo compongono.

L’idea di base è quella di combinare più dischi indipendenti per ottenere o **velocità, o sicurezza o capacità superiori** a quelle ottenibili con un qualunque disco SLED (*Single Large Expensive Drive*)

- Velocità: Aumenta le performance distribuendo i dati sui vari dischi (*Striping*) permettendo l’accesso in parallelo ai dati (in lettura)
- Sicurezza: permette di avere dischi rindondati (*Mirroring*) o controlli di parità sui dati.
- Capacità: “sommando” più dischi ne ottengo uno di capacità maggiore.

Il RAID può essere:

- **hardware**, con un controller dei dischi che si occupa di creazione, cancellazione, ricostruzione del RAID
- **software**, gestito dal sistema operativo (sconsigliato)

Vediamo diverse tipologie di RAID, è importante sottolineare che nessun RAID sostituisce un sistema di backup dei dati (il RAID non permette il recupero da malware o disastri naturali, il backup invece sì).

### RAID 0

I **dati vengono distribuiti tra più dischi** (operazione detta ***striping***). ha il principale scopo di aumentare lo storage e mediante la parallelizzazione delle operazione ottiene più performance in scrittura e lettura.

Necessita di almeno 2 dischi.

Non è molto affidabile in quanto non tiene nessun dato di parità o ridondanza, se un disco si rompe tutti i dati vengono persi.

![](https://i.ibb.co/mrbYx18S/image.png)

### RAID 1

Utilizza almeno 2 dischi in cui ognuno è la copia dell’altro (operazione detta ***mirroring***), creando così una ridondanza dei dati, velocità di scrittura ridotta perché il dato deve essere scritto almeno 2 volte, la lettura invece è quella del disco più veloce (dato che la lettura avviene contemporaneamente su più dischi).

Un aspetto molto negativo è lo spazio totale: se hai 2 dischi da 10 terabyte e quindi un totale di 20 terabyte, un disco viene adibito alla copia quindi di spazio effettivo rimangono solamente 10 terabyte.

![](https://i.ibb.co/9mD4XmRJ/image.png)

### RAID 3 e 4

Necessita di almeno 3 dischi in cui un disco serve per la parità dei dati. Il dato viene spartito su tutti i dischi (tranne quello di parità), questo permette una buona ridondanza dei dati: se un disco viene danneggiato i dati al suo interno possono essere recuperati attraverso un’operazione di *xor* tra i dischi rimanenti.

Presenta un leggero peggioramento alla scrittura (causata dalla scrittura nel disco di parità) e un leggero miglioramento in lettura dato dalla parallelizzazione.

Nel RAID 3 la suddivisione dei dati avviene a livello di singoli byte, mentre nel RAID 4 avviene a livello di blocchi di dati.

![](https://i.ibb.co/DH1MC60w/image.png)

### RAID 5

**Raid 5**: questo raid è una versione migliorata del raid 4: non è più presente un disco dedicato alla sola parità dei dati, ma la parità viene distribuita alternativamente in tutti i dischi.

La capacità totale è $((n-1)\cdot C)$ dove $n$ è il numero di dischi e $C$ la loro capacità, ad esempio 3 dischi da 500GB: $((3-1)\cdot 500) = 1TB$

Al massimo si può rompere un disco.

![](https://i.ibb.co/67tgyVqC/image.png)

### RAID 6

Necessita di almeno 4 dischi e ha la caratteristica di avere una doppia ridondanza, questo permette di essere un metodo estremamente affidabile. Questa doppia ridondanza causa però una scrittura abbastanza lenta.

Al massimo si possono rompere due dischi.

![](https://i.ibb.co/bgQsfxYH/image.png)

### RAID 1+0

Necessita di un numero pari di dischi, e devono essere almeno 4.

È una combinazione del raid 0 con il raid 1.

In grado di rigenerare i dati anche in presenza di rotture di più dischi mantenendo buone prestazioni.

Non vengono gestite le informazioni di parità.

la capacità complessiva dei dischi viene dimezzata

```
                    RAID 0
                      │
      ┌———————-———————┼————-——————————┐
      │               │               │
    RAID 1          RAID 1          RAID 1
   ┌———┴———┐      ┌———┴———┐       ┌———┴———┐
   │       │      │       │       │       │
 120GB   120GB  120GB   120GB   120GB   120GB
```

nota che è diverso dal RAID 0+1, in cui si inverte l’uso dei RAID


# La sala server

## Server

L’architettura di un server non è molto differente da un PC casalingo.

Differenze rispetto ai PC casalinghi:

- La più importante è che i server hanno più **ridondanza di componenti** (più alimentatori, più CPU, più dischi) per garantire più resistenza ai guasti.
- Ci sono CPU dedicate all’uso server, che tendenzialmente hanno più core, più cache.
- Ci sono memoria RAM dedicate più performanti e con meccanismi di protezione alla corruzione.
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



# Networking

Un **canale trasmissivo** è il supporto fisico tramite il quale un segnale si propaga da un punto ad un altro di una rete.

Su un mezzo trasmissivo vi possono essere simultaneamente più canali e un canale può usare più mezzi trasmissivi.

- cavo di rete (doppino telefonico).
- Cavo coassiale.
- Fibra ottica.
- Etere (wifi).

Quando si mettono in collegamento due interlocutori si dice che fra questi si stabilisce un **canale di comunicazione**.

- Simplex: flusso dati unidirezionale.
- Half-duplex: flusso alternativo nelle 2 direzioni.
- Full-duplex: flusso simultaneo nelle 2 direzioni.
- Punto-punto e multi-punto.

## Canali trasmissivi

I parametri che vengono tenuti in considerazione riguardo i canali trasmissivi sono:

- velocità di trasmissione: la quantità di bit trasmessi al secondo
- larghezza di banda: indica la massima capacità del mezzo

Su un mezzo trasmissivo possono essere realizzati più canali che si “dividono” la banda, ciascun canale avrà una ridotta velocità di trasmissione.

### Cavo di rete (doppino telefonico)

Costituito da almeno due fino ad un massimo di 8 sottili fili di rame intrecciati. La categoria del cavo (5/5a/6a/7..) definisce la banda massima garantita e la qualità di isolamento per le interferenze.

### Fibra

Un sistema di trasmissione su fibra ottica consiste di una sorgente luminosa, del mezzo di trasmissione e di un ricevitore; la sorgente luminosa converte segnali elettrici in impulsi per poi riconvertirli in segnali elettrici alla fine del tragitto.

### Wi-Fi

Le reti wifi usano l’etere (l'aria come mezzo di propagazione di fenomeni elettromagnetici) come mezzo trasmissivo per permettere di creare una rete senza utilizzo di cavi.

Si utilizza un **access point**, collegato fisicamente alla rete via cavo, che comunica con gli utenti attraverso segnali radio.

Ha bisogno di sistemi di sicurezza e autenticazione elevati perché chiunque può agganciarsi alla rete

### Li-Fi

Li-Fi (*Light Fidelity*) è il corrispondente ottico del Wi-Fi (che usa invece trasmissioni radio). La differenza sta nel fatto che le frequenze occupate da Li-Fi appartengono allo spettro della luce visibile.

Si basa sull’invio di dati attraverso la luce alterando la frequenza della luce come se fossero lampadine a LED che lampeggiano e trasmettono dati, in modo che un foto-ricevitore possa stabilire una connessione wireless.

È una connessione ottica a corto raggio, tipicamente a meno di 4 metri di distanza

## Networking

Le reti possono essere classificate in tre categorie a seconda della loro estensione fisica: 

- LAN: *Local Area Network*, identifica una rete costituita da un numero relativamente basso di computer collegati tra loro
- MAN: *Metropolitan Area Network*, è una rete dati che interconnette un'area corrispondente a quella di una grande città
- WAN: *Wide Area Network*: indica in generale una rete di grande estensione, e a cui in genere si fa riferimento per indicare la struttura che connette varie reti locali, estendendosi potenzialmente su tutto il mondo

## TCP/IP

Tutte le moderne reti si basano sullo stack **TCP/IP** che altro non è che un insieme di **protocolli**, cioè delle regole che delineano il formato dei messaggi che deve essere utilizzato nella comunicazione tra due sistemi.

Lo stack TCP/IP è costruito su un **modello a livelli**, in cui le informazioni si fanno strada da un’applicazione su un host ad un’applicazione su un altro host attraverso incapsulamenti trasparenti all’applicazione.

All’interno di una rete TCP/IP ogni host è identificato da un **indirizzo IP univoco**.

![](https://i.ibb.co/ycGPBL3m/image.png)

## Dispositivi di networking

Vediamo i principali dispositivi nel mondo del networking:

- **scheda di rete**: è l’interfaccia che permette di collegare un host alla rete. Ogni scheda è dotata di un identificativo chiamato *MAC address.*
- **hub**: inoltra i pacchetti su tutte le porte, la velocità viene condivisa e si presentano collisioni.
- **switch**: mantiene una tabella di corrispondenza tra porte e MAC address delle schede di rete ad  esse collegate. In tal modo instrada i pacchetti direttamente alla scheda di rete corretta, evitando collisioni e garantendo sempre la velocità massima
- **router**: si occupa di instradare i pacchetti in entrata e in us.cita rispetto alla LAN. Viene spesso chiamato *gateway* per questo motivo.
- **access point**: permette accesso alla rete tramite connessione Wi-Fi.

## MAC address

**MAC address** (*Media Access Control*), è un codice di **48 bit** (6 byte) che viene assegnato in modo **univoco** dal produttore ad ogni **scheda di rete** ethernet o wireless prodotta al **mondo**.

È modificabile a livello software.

I 48 bit sono suddivisi in 12 cifre esadecimali nel formato `XX:XX:XX:XX:XX:XX`

- le prime 6 cifre individuano il produttore dell'interfaccia di rete.
- mentre le successive 6 corrispondono al numero di serie della scheda stessa.

## IPv4

Gli indirizzi IP versione 4, sono composti da una sequenza di **32 bit**, suddivisi in quattro gruppi di 8 bit, e rappresentati in modo decimale separati da un punto (`157.138.22.21`).

All'interno di un indirizzo si distinguono due parti: **l'indirizzo di rete e l'indirizzo dell’host**. Queste due parti si distinguono tramite l’utilizzo di un **maschera di rete** (***netmask***), un indirizzo che indica quali bit dell’indirizzo identificano la rete.

L’indirizzo di rete si ottiene come risultato di una operazione AND tra l’indirizzo IP e la
sua netmask: `157.138.22.21 AND 255.255.255.0 = 157.138.22.0`

Si può rappresentare la netmask in modo compatto tramite un numero che rappresenta quanti bit sono riservati alla rete (`192.168.0.0/24`)

### Classi

Gli indirizzi IP sono suddivisi in **cinque classi:**

- Classe A (netmask `/8`, `255.0.0.0`): Il valore del primo ottetto (byte) è compreso tra 1 e 126. È rappresentata da indirizzi di tipo: `Rete.Host.Host.Host` ovvero 8 bit per identificare la rete e 24 per identificare gli host. Permette di ottenere 126 reti formate da circa 16 milioni di host ciascuna.
- Classe B (netmask `/16`, `255.255.0.0`): Il valore del primo ottetto (byte) è compreso tra 128 e 191. È rappresentata da indirizzi di tipo: `Rete.Rete.Host.Host` ovvero 16 bit per identificare la rete e 16 per identificare gli host. È possibile ottenere circa 16 mila reti formate da circa 65 mila host ciascuna.
- Classe C (netmask `/24`, `255.255.255.0`): Il valore del primo ottetto (byte) è compreso tra 192 e 223. È rappresentata da indirizzi di tipo: `Rete.Rete.Rete.Host` ovvero 24 bit per identificare la rete e 8 per identificare gli host. E' possibile ottenere circa  2 milioni di reti con 254 host ciascuna.
- Classe D: Il valore del primo ottetto (byte) è compreso tra 224 e 239. Sono indirizzi di rete riservati ai gruppi multicast e non assegnabili ai singoli host.
- Classe E: Il valore del primo ottetto (byte) è compreso tra 240 e 255. Sono indirizzi riservati per usi futuri.

| Classe | Range |
| --- | --- |
| A | `1.0.0.0 - 127.255.255.255` |
| B | `128.0.0.0 - 191.255.255.255` |
| C | `192.0.0.0 - 223.255.255.255` |
| D | `224.0.0.0 - 239.255.255.255` |
| E | `240.0.0.0 - 255.255.255.255` |

### Indirizzi speciali

Esistono diversi indirizzi particolari che sono riservati a scopi specifici e non possono essere assegnati agli host:

- `0.0.0.0` (**default route**): definisce la regola di inoltro dei pacchetti da utilizzare quando non è specificato il percorso per l’indirizzo IP di destinazione.
- **indirizzo di rete**: è l’indirizzo in cui tutti i bit rappresentano l'host hanno tutti valore 0, è l’indirizzo che identifica la rete.  Es. `192.168.1.0/24`
- **indirizzo di broadcast**: è l’indirizzo in cui tutti i bit rappresentano l'host hanno tutti valore 1, è l’indirizzo che rappresenta tutti gli host nella rete. Es. `192.168.1.255`
- **indirizzo di broadcast di rete**: è l’indirizzo in cui tutti i bit dell'host e della rete hanno valore 1, è l’indirizzo che rappresenta tutti gli host nella attuale rete. Es. `255.255.255.255`
- **Loopback**: è l’indirizzo utilizzato in contesti di testing e rappresentata la macchina stessa (*localhost*), quindi non genera traffico nella rete, ma rimane all’interno della stessa macchina che lo ha generato, solitamente si utilizza l’indirizzo `127.0.0.1`

### Indirizzi privati

Ci sono dei range di indirizzi (chiamati **indirizzi privati**), che sono utilizzati nelle reti private, questi indirizzi non possono essere usati per identificare host pubblici su internet.

| Classe | Range indirizzi privati |
| --- | --- |
| A | `10.0.0.0 - 10.255.255.255` |
| B | `172.16.0.0 - 172.31.255.255` |
| C | `192.168.0.0 - 192.168.255.255` |

## IPv6

È la versione più recente del protocollo IP, che fa uso di indirizzi a 128 bit composti da 8 gruppi di numeri esadecimali separati dal carattere `:`. Ogni gruppo è composto da un massimo di quattro lettere e numeri (ad esempio `2001:db8:1f70:999:de8:7648:6e8:1`)

L’introduzione di questo protocollo è dovuta al fatto che la disponibilità degli indirizzi IPv4 si sta esaurendo.

In questo protocollo non è previsto l’utilizzo di maschera di rete e nemmeno l’utilizzo del NAT.

L’idea sarebbe quella di riuscire ad identificare ogni dispositivo esistente con un indirizzo univoco.



# NAS e SAN

Nelle reti aziendali intervenire sui dispositivi già installati (come espandere la capacità di storage) può essere un problema.

In particolare per lo storage, qualche decennio fa si utilizzava la tecnologia DAS (*Direct Attached Storage*) in cui lo storage era direttamente collegato al server (questo approccio è comunemente utilizzato nel PC casalinghi).

Oggi è molto più comune usare un sistema **NAS**, che offre una buona scalabilità.

## NAS

Il NAS (*Network Attached Storage*) fisicamente è un computer (un server) dotato quindi di:

- una o più CPU
- scheda madre
- più hard disk in raid
- più SSD da utilizzare come cache
- varie schede di rete
- un sistema operativo

Il **NAS** è progettato per gestire l'archiviazione e la condivisione dei dati all'interno di una rete (possiamo pensarlo come un cloud storage ma locale alla nostra rete).

La sua peculiarità è quella di essere sempre connesso alla rete, permettendo a più dispositivi di accedere, archiviare e condividere dati in modo **centralizzato**.

Collegandosi all’interfaccia del server, tramite browser o un’applicazione dedicata, gli utenti possono aggiungere o modificare i file.

Nota: anche il NAS andrebbe ridondato e andrebbe fatto un backup dei dati al suo interno.

## SAN

Una SAN (Storage Area Network) può essere vista come una rete LAN secondaria dedicata a dispositivi per lo storage che viene affiancata alla LAN dove sono collegati tutti gli altri dispositivi.

In un sistema senza SAN abbiamo i dispositivi di storage attaccati direttamente ai server che condividono informazioni sulla LAN, questo porta un rapido degrado delle performance in quanto le richieste provenienti dalla rete che riguardano un grande trasferimento di dati potrebbero saturare la banda.

Realizzare una rete separata per i dispositivi di storage permette una grande scalabilità in termini di storage e di connettività, infatti tutta la potenza di calcolo dei server è utilizzata per le applicazioni, in quanto i dati non risiedono in questi, ma sulla rete SAN appunto.

Ci possono essere casi in cui si vuole accedere ad una SAN da diversi posti geografici, in tali casi si può usare un canale in fibra se la distanza non è molta, oppure di sono dei protocolli di *storage over IP:*

- ISCSI
- IFCP
- FCIP

Il **cloud** può essere visto come una grande SAN.



# Virtualizzazione

Con Virtualizzazione si intende il processo di creazione di una rappresentazione virtuale (software) di un oggetto, al fine principale di ridurre i costi e aumentare efficienza e scalabilità.

Si utilizza il software per simulare l'esistenza dell'hardware.

È possibile virtualizzare:

- Server
- Desktop
- Storage
- Reti

Vantaggi:

- costi molto ridotti
- downtime del sistema ridotto
- aumento della produttività e dell’efficienza
- fornitura più rapida dei servizi
- semplificazione di gestione del sistema
- abilitazione a *business continuity* (assicurare l’operatività delle funzioni di base in caso di disastri) e *disaster recovery* (recuperare le attività e i dati in seguito ad un disastro)

## Virtualizzazione dei server

Tramite la virtualizzazione dei server è possibile eseguire **più sistemi operativi sotto forma di macchine virtuali** all’interno di un server fisico. In questo modo in un unica macchina si hanno degli ambienti isolati che si occupano della propria specifica funzione.

Es. al posto di avere un server per la posta e un web server, mantengo un server con due macchine virtuali.

## Virtualizzazione del desktop

Si hanno dei computer poco potenti che avviano una versione minimale del sistema operativo e che si agganciano ad una macchina virtuale offerta da un server.

I tre tipi principali di virtualizzazione del desktop sono:

- **VDI** (*Virtual Desktop Infrastructure*): l’utente interagisce con un sistema operativo di macchina virtuale che gira su un server della propria infrastruttura
- **RDS** (*Remote Desktop Service*): In questo caso sole le applicazioni vengono trasmesse in streaming al dispositivo locale
- **DaaS** (*Desktop as a Service*): è un servizio cloud che fornisce desktop virtuali tramite internet

## Virtualizzazione della rete

In questo caso si vuole riprodurre una rete fisica via software che simula il comportamento dei vari apparati come switch, router, VPN, ecc…

## Virtualizzazione dello storage

Si combinano più dischi di storage per creare un unico pool di storage virtuale da distribuire alle applicazioni, ottimizzando l'utilizzo delle risorse e migliorando la gestione dello spazio disponibile.

Software-Defined Storage è un approccio di questo tipo utilizzato in servizi come Google Drive e Dropbox

## Macchina virtuale

Una macchina virtuale è un software dotato di sistema operativo e applicazioni che gira su una macchina fisica ma è completamente isolata dalle altre applicazioni.

Quindi collocando più macchine virtuali su un host consente di eseguire più sistemi operativi isolati.

Lo strato software che separa l’host dalle macchine virtuali e si occupa di assegnarli dinamicamente le risorse hardware si chiama ***hypervisor.***

Possiamo identificare le seguenti proprietà delle macchine virtuali:

- **Partizionamento**: possibilità di eseguire più sistemi operativi sulla stessa macchina fisica suddividendo le risorse fisiche disponibili tra le varie macchine virtuali.
- **Isolamento**: ogni macchina virtuale gira in un ambiente isolato rispetto agli altri software in esecuzione sulla macchina fisica
- **Incapsulamento**: lo stato della macchina virtuale è salvato su file, facilitando la copia e lo spostamento delle macchine virtuali su altri host.
- **Indipendenza dall’hardware**: le macchine virtuali non dipendono strettamente dall’hardware della macchina fisica, sono invece dipendenti dall’hardware emulato dall’hypervisor. Quindi migrare una VM su un’altra macchina fisica è semplice, migrarla su un altro sistema di virtualizzazione è più difficile.

## Sistemi di virtualizzazione

Alcuni famosi sistemi di virtualizzazione sono:

- VMware
- Microsoft Hyper-V
- KVM (Kernel-based Virtual Machine), usato in ambito Linux
- Docker: isola i singoli processi in ambienti controllati chiamati **container**

Mentre per i datacenter si utilizzano sistemi operativi progettati apposta per la virtualizzazione, per i dispostivi casalinghi che hanno OS più general purpose i software di virtualizzazione sono meno ottimizzati, per questo motivo eseguendo una VM sul proprio computer di casa si percepisce una netta differenza di prestazioni rispetto all’ambiente host.



# Il cloud

Possiamo definire **il cloud computing** come una distribuzione di servizi di calcolo accessibili tramite internet.

Con **servizi di calcolo** possiamo intendere server, database, software, reti, ecc… che in generale possono permettere agli utenti di:

- creare applicazioni
- archiviare dati
- ospitare siti web
- fare streaming di audio/video

Le società che forniscono questi servizi si chiamano **provider** e fanno solitamente pagare il loro servizio in base all’utilizzo.

## Vantaggi

Vediamo i vantaggi nell’uso del cloud:

- **Costo**: elimina le spese associate all’acquisto di HW e SW, la configurazione e gestione dei data center ed esperti IT
- **Velocità**: è possibile fare uso di un servizio cloud in pochi minuti
- **Scalabilità**: Il servizio può adeguare la quantità di risorse erogate in base alla necessità
- **Produttività**: Non essendoci più la necessità di avere server in locale, il personale IT dell’azienda si può occupare delle operazioni più inerenti allo scopo dell’azienda
- **Prestazioni**: i servizi cloud vengono eseguire su reti di data center sicuri e aggiornati regolarmente
- **Affidabilità**: Il cloud implementa delle meccaniche di ridondanza e di backup per garantire l’affidabilità dei dati e del servizio

## Tipi di cloud computing

Ci sono varie tipologie di cloud, distinguibili per come viene distribuito il servizio e per quali servizi vengono distribuiti.

### Tipi di distribuzione

- **Cloud Pubblico**: questi cloud sono proprietà di un provider di terze parti che ne gestisce sia l’hardware che il software, si accede a questi servizi solitamente tramite web browser (Es. Microsoft Azure, Amazon AWS, Google Cloud Platform, Aruba)
- **Cloud Privato**: Le risorse sono usate esclusivamente dalla singola azienda o organizzazione. Può trovarsi fisicamente in un data center dell’azienda oppure presso un provider di terze parti.
- **Cloud Ibrido**: Ci sono delle tecnologie che consentono la condivisione dei dati tra cloud diversi (pubblico e privato) sfruttando le prestazioni del cloud pubblico e la riservatezza del cloud privato.

### Tipi di servizio

- **IaaS** (*Infrastructure as a Service*): si “affittano” delle risorse da un provider con pagamento in base al consumo. Il provider si occupa dell’hardware (server, rete, storage) mentre l’utente gestisce il software tra cui il sistema operativo e le applicazioni (Microsoft Azure, Google Compute Engine, AWS, DigitalOcean).
- **PaaS** (*Platform as a Service*): fornisce all’utente un ambiente per lo sviluppo, il testing, la distribuzione e la gestione di applicazioni software. In questa modalità il provider oltre che dell’hardware si occupa anche del sistema operativo, lasciando all’utente la gestione delle applicazioni e i dati che esse utilizzano (Es. AWS Elastic Beanstalk, Windows Azure, Heroku, Google App Engine).
- **SaaS** (*Software as a Service*): fornisce all’utente direttamente delle applicazioni software gestite dal provider. Il provider si occupa della gestione di tutta l’infrastruttura e dell’aggiornamento delle applicazioni, gli utenti si connettono al servizio tramite web browser e usufruiscono delle applicazioni (Es. Gmail, Dropbox)

![](https://i.ibb.co/5WjSRZ0j/cloud.png)



# File system

Un **filesystem** è la parte del sistema operativo che si occupa della gestione dei file, formattando le unità di memoria, archiviando e leggendo i file.

Il filesystem presenta due differenti viste:

- **Vista Utente**: appare come un insieme di file e directory in modo che siano accessibili al sistema e ai suoi utenti.
- **Vista OS**: è un insieme di strutture di controllo e blocchi di dati localizzati in una specifica partizione della memoria di massa e permette di memorizzare e gestire i dati.

## File

Un **file** una unità logica di memorizzazione, cioè una collezione di informazioni correlate.

Il sistema operativo fa questa astrazione **che permette di usare in modo semplice ed efficiente i dispositivi di memoria secondaria**.

Ogni file possiede attributi come:

- nome
- tipo
- dimensione
- protezione
- data e ora.
- ecc…

I file possono essere:

- creati
- letti
- scritti
- cancellati

La lunghezza massima per un nome di file può variare in base al sistema operativo: in Linux, per la maggior parte dei filesystem, è di 255 caratteri, con un percorso massimo di 4096 caratteri.

I file si distinguono in diverse tipologie:

- **File regolari (o file utente)**: possono essere testuali o binari.
- **Directory** (cartelle): contengono file regolari e non, e sono organizzate in una struttura gerarchica.
- **File speciali a blocchi**: utilizzati per l’interfacciamento con device di I/O a blocchi (come i dischi).
- **File speciali a caratteri**: utilizzati per l’interfacciamento con device di I/O a caratteri (terminali, stampanti, reti).

I file si distinguono anche per le **estensioni** come exe, jpg, gif, mov, mkv ecc..

In Windows, un file speciale è quello di Swap, presente ora anche in quasi tutte le distribuzioni Linux, il cui scopo è riservare una piccola porzione del disco fisso come memoria aggiuntiva alla RAM.

## Directory

Una **directory è un elenco di nomi di file** (e/o altre directory). Le directory hanno il fondamentale ruolo di dare una **struttura gerarchica al filesystem** (ad albero), con una radice indicata da `/` in Linux e `C:\` in Windows.

Sulle directory si possono effettuare operazioni come creazione, cancellazione, collegamenti e ridenominazione.

## Struttura del File system in Linux

La struttura del filesystem in Linux/Unix presenta diverse directory con un ruolo specifico:

- `/etc`: contiene i file di configurazione del sistema.
- `/bin`: contiene alcuni programmi essenziali come `ls`, `cd`, `mkdir`, `rm`, ...
- `/sbin`: contiene programmi essenziali utilizzabili dai superuser, contengono principalmente programmi per installare / cancellare cose dal sistema.
- `/lib`: contiene le librerie dinamiche necessarie ai programmi in `/bin` e `/sbin`. Contiene anche i moduli kernel che servono a far funzionare schede video, schede audio, wifi, stampanti, …
- `/usr`: contiene programmi non necessari all'avvio, librerie e file accessori nelle sottodirectory `/usr/[s]bin`, `/usr/lib` e `/usr/share`.
- `/usr/local`: simile a `/usr`, per programmi e librerie installati localmente.
- `/opt`: simile a `/usr/local`, per programmi che non seguono la convenzione di separazione tra binari, librerie e file accessori.
- `/home`: contiene i file personali degli utenti.
- `/root`: è la home directory dell'utente root.
- `/var`: contiene dati di applicazioni di uso generale, non riferite al singolo utente.
- `/var/log`: di particolare importanza perché contiene i **log del sistema**, gestiti dalle relative applicazioni o dal servizio syslog.
- `/dev`: contiene file che rappresentano i dispositivi del sistema.
- `/tmp` e `/var/tmp`: servono per memorizzare file temporanei.
- `/boot`: contiene i file necessari all’avvio del sistema, il kernel e alcuni file di supporto.
- `/proc`: contiene file e directory che rappresentano i processi in esecuzione e lo stato del sistema. Ad esempio, `/proc/cpuinfo` contiene informazioni sui processori, e `/proc/sys` permette di modificare parametri del sistema a tempo d'esecuzione.
- `/sys`: rappresenta altre configurazioni a tempo d'esecuzione legate all'hardware, con una struttura più regolare di `/proc`.
- `/run`: mantiene piccoli file di stato delle applicazioni di sistema necessari per la cooperazione.

## Journaling

Il **journaling** è una tecnica utilizzata da molti filesystem moderni per preservare l'integrità dei dati in caso di interruzioni di corrente.

Si basa sul concetto di **transazione**: ogni scrittura su disco viene registrata prima su un file di log e poi eseguita sul disco. In caso di problemi, il filesystem analizza il log per completare le operazioni interrotte. Una transazione è una sequenza di operazioni che, se eseguita correttamente, produce un cambiamento permanente nello stato del sistema, in caso contrario si deve tornare allo stato precedente.

## Alcuni File system

Ogni sistema operativo ha il suo filesystem personalizzato:

- **DOS e DOSLike** (Windows 95/98/Me): FAT(8), FAT16, VFAT, **FAT32**.
- **Windows NT, 2000, ... , 10, 11**: **NTFS** e sue evoluzioni.
- **MAC OS X**: HFS, **HFS+** e **APFS**.
- **Linux/Unix-Like**: **ext4**, minix, btrfs ecc..

### FAT32

**FAT32** è l'ultimo FS della famiglia FAT, inizialmente sviluppata da IBM e Digital e poi da Microsoft. La sua facilità di implementazione dei driver lo ha reso l'unico filesystem compatibile con tutti i sistemi, compresi i vecchi DOS. Si basa su una tabella chiamata *File Allocation Table* (FAT) ridondata in più parti del disco.

Oggi si trova principalmente sulle chiavette USB, ma è poco affidabile, lento e soggetto a frammentazione.

Non supporta file più grandi di 4 GB.

### NTFS

**NTFS** è stato sviluppato da Microsoft per i sistemi Windows NT. Permette di gestire un gran numero di file e si basa sulla *Master File Table* (MFT). È **sicuro, stabile, flessibile e journaled**. La MFT è anch'essa ridondata per sicurezza.

### exFAT

**exFAT** (*Extended File Allocation Table*) o FAT64 è stato introdotto da Microsoft per memorie flash e dispositivi di archiviazione di dimensioni contenute. Offre miglioramenti rispetto a FAT32, come limiti di dimensione dei file e delle cartelle maggiori, supporto per ACL e migliori prestazioni.

### Ext4

È il file system di default su Linux, è una versione successiva dei suoi predecessori ext2 e ext3. È più performante, journaled e retrocompatibile con le versioni precedenti, supporta file di dimensione fino a 16TB.

### HFS+ e APFS

**HFS+** è una versione journaled del vecchio HFS, utilizzato da macOS. Sebbene sia stabile e affidabile, le sue prestazioni possono essere limitate. Apple ha sviluppato **APFS** come alternativa a HFS+, ottimizzato per memorie flash e SSD, implementando un meccanismo di copy-on-write. **Copy-on-write** è una tecnica per ridurre la duplicazione delle risorse di sistema.



# Boot e partizionamento

## BIOS

All’accensione del sistema, la CPU legge le istruzioni da un chip presente sulla scheda madre, contenente il BIOS. Il **BIOS** (*Basic Input-Output System*) è un programma scritto in una particolare memoria (originariamente in ROM e poi divenuta EEPROM) che controlla la prima fase di avvio:

- effettua controlli hardware del sistema
- cerca e controlla le periferiche
- infine carica l’unità di memoria di massa da cui avviare il sistema operativo

Nonostante il termine BIOS sia ancora molto utilizzato, in realtà si riferisce ad un sistema *legacy* che ora è stato sostituito da **(BIOS) UEFI** (*Unified Extensible Firmware Interface*).

Il sistema UEFI presenta alcuni **vantaggi** rispetto al vecchio sistema BIOS:

- **avvio da dischi grandi più di 2 TB**, grazie all’utilizzo di GPT (*GUID Partition Table*). Il vecchio BIOS basato su MBR (*Master Boot Record*) non era in grado di farlo
- **Ambiente preOS molto più completo**, versatile e più facilmente navigabile
- implementa il **Secure Boot**, una funzione di sicurezza che garantisce che vengano eseguiti solo software firmati e certificati durante l’avvio del sistema.
- **non è legato all’architettura della CPU e dai driver**, funziona quindi su più sistemi senza essere riscritto
- è **modulare**, i produttori di hardware e software possono quindi modificare specifiche funzionalità senza dover riscrivere l’intero firmware.
- Può emulare il vecchio BIOS con MBR

## Fase di avvio di Linux

Il vecchio BIOS è più semplice, per cui ci baseremo su quello.

Una volta finiti i check HW, il BIOS cerca un MBR solitamente memorizzato nel primo settore del disco, ne carica il contenuto in memoria RAM e gli passa il controllo.

MBR cerca la prima **partizione attiva** del disco (cioè quella flaggata come *bootable)*, una volta trovata, legge il suo contenuto che contiene informazioni su come caricare il boot loader. Una volta caricato il boot loader, quest’ultimo si occuperà di avviare il sistema operativo.

### Windows

Su Windows il compito del boot loader veniva svolto dal file `NTLDR.exe` che permetteva di selezionare il sistema operativo con le informazioni contenuto del file `boot.ini`, un file di testo nascosto e in sola lettura.

### Linux

Su Linux il boot loader più utilizzato è GRUB (*GRand Unified Bootloader*). GRUB si configura tramite il file `/boot/grub/menu.lst`, anche se in base al sistema ci possono essere più file in posti diversi

## Fase di avvio - Kernel

Dopo aver scelto l’opzione nel boot loader, il sistema carica il kernel del sistema selezionato. Il kernel svolge dei controlli vari e il caricamento dei driver e poi cede il controllo al processo di **init.**

Il processo **init** controlla l’esecuzione del software di avvio del sistema operativo, nei sistemi Unix moderni si basa sul concetto di **runlevel**, una particolare configurazione del sistema che definisce quali servizi del sistema sono operativi. Sono in totale 7 (da 0 a 6) e ad esempio quello di default è 5: modalità multi-utente con interfaccia grafica.

il runlevel è solitamente descritto nel file `/etc/inittab`, ad esempio:

```
# inittab         This file describes how the INIT process should
#                 set up the system in a certain run-level.
# [...]
# id:3:initdefault: (Default runlevel).
# The runlevels used by RHS are:
# 0 - halt (Do NOT set initdefault to this)
# 1 - Single user mode
# 2 - Multiuser, without NFS (The same as 3, if you do not have networking)
# 3 - Full multiuser mode
# 4 - unused
# 5 - X11
# 6 - reboot (Do NOT set initdefault to this)
```

Una volta lanciato il processo init, esso diventa il padre di tutti i successivi processi.

### Systemd e Upstart

Nelle moderni distribuzioni di Linux, il processo **init** è stato sostituito da altri sistemi che sono più flessibili, performanti e con interazioni più semplici. I due sistemi più famosi sono:

- Upstart
- Systemd (il più diffuso)

## Partizionamento

Durante l’installazione di un sistema operativo, c’è una fase molto importante che è il **partizionamento dello storage**, che deve essere fatto in modo adeguato a seconda della tipologie di server che stiamo installando.

Questa fase consiste nel suddividere le unità di storage in partizioni, cioè in porzioni di disco.

Per PC da casa il partizionamento di default va già bene, al massimo si può decidere di posizionare `/home` in una partiziona separata da `/`.

### Swap

Nel partizionamento spesso viene menzionata la partizione **Swap**, il suo scopo è quello di liberare memoria RAM: una porzione di dati in RAM (quelli che hanno meno probabilità di essere richiesti in futuro)  vengono salvati sul disco per lasciare spazio ad altri dati.

Questa pratica, seppur liberi spazio in memoria principale e quindi possa prevenire una interruzione del sistema, porta un calo drastico di performance in quanto le scritture su memoria di massa sono nettamente più lente delle scritture in RAM.

Ci sono due approcci per gestire la Swap:

- una partizione interamente dedicata allo swap
- un file di swap che risiede nel file system come gli altri file

| Area di Swap | File di Swap |
| --- | --- |
| Dimensione fissa: per estenderla è necessario ripartizionare i dischi | Dimensione variabile: spesso gestita automaticamente dal sistema operativo |
| Nessuna frammentazione: tutti i dati sono nella stessa partizione | Rischio di frammentazione: i dati non sono necessariamente salvati in zone contigue |
| Migliori performance: i dati sono salvati in zone contigue | Performance peggiori: overhead sulle operazione di I/O sui file |
| mentre anni fa si consigliava una dimensione della partizione almeno pari alla quantità di RAM, oggi con l’aumentare della memoria, è sufficiente una porzione della RAM (10% - 50%) | la dimensione viene gestita in Windows dal file `pagefile.sys`. L’utente può impostare una quantità minima da usare come swap |
| Approccio di Linux | Approccio di Windows |

## LVM

*Logical Volume Manager* è un software per la gestione dello storage per rendere più flessibile il partizionamento dei dischi.

L’idea dietro questo software è quella di trattare i vari dischi come una memoria unificata e dando la possibilità di creare dei volumi logici, evitando quindi le limitazioni fisiche dei dischi.

Nella seguente immagine:

- Physical Volumes (PV): rappresentano i dischi fisici o le partizioni fisiche
- Volumes Group (VG): è un disco virtuale composto da uno o più dischi fisici
- Logical Volumes (LV): sono le partizioni logiche create all'interno di un Volume Group

![](https://i.ibb.co/NgwmV08z/image.png)

Vantaggi di LVM:

- Flessibilità: è possibile ridimensionare i volumi logici senza la necessità di smontare il file system o interrompere il servizio
- Snapshot: permette di creare snapshot dei volumi per backup o testing
- Migrazione: permette di spostare dati da un disco fisico all’altro senza interruzioni
- Gestione semplificata: la gestione è centralizzata

## Esempi di partizionamento

Supponiamo di avere 1TB di storage e 64 Gb di RAM

### Esempio 1 - web server

Useremo 10 GB a sito con 50 siti

- `/`  max 50 GB
- `/var` almeno 50 GB se c’è un database
- `/var/www` calcolato come lo spazio per un sito moltiplicato per il numero di siti + un 10% del risultato: $10 \cdot 50 + (500 \cdot \frac{10}{100}) = 550 GB$
- `/var/log` almeno 10 GB
- `Swap`: $64 \cdot 1.5 = 96 GB \approx 100 GB$

### Esempio 2 - home server / ssh

Useremo 10 GB per ogni utente con 50 utenti

- `/`  almeno 50 GB
- `/home` calcolato come lo spazio per un utente moltiplicato per il numero di utenti + un 10% del risultato: $10 \cdot 50 + (500 \cdot \frac{10}{100}) = 550 GB$
- `/var` almeno 50 GB se c’è un database
- `/var/log` almeno 10 GB
- `Swap`: $64 \cdot 1.5 = 96 GB \approx 100 GB$
    - oppure $64 * 50\% = 32 \approx 40GB$
    - oppure $64 * 10\% = 6.4 \approx7GB$

### Esempio 3 - database server

Useremo 10 GB per database con 50 database

- `/`  almeno 50 GB
- `/home` calcolato come lo spazio per un utente moltiplicato per il numero di utenti + un 10% del risultato: $10 \cdot 50 + (500 \cdot \frac{10}{100}) = 550 GB$
- `/var` generalmente almeno 100 GB, calcolato come lo spazio per un database moltiplicato per il numero di database + un 10% del risultato: $10 \cdot 50 + (500 \cdot \frac{10}{100}) = 550 GB$
- `/var/log` almeno 10 GB
- `Swap`: $64 \cdot 1.5 = 96 GB \approx 100 GB$
    - oppure $64 * 75\% = 48 \approx 50GB$

### Esempio 4 - mail server

Useremo 10 GB per le mail di un utente con 50 utenti

- `/`  almeno 50 GB
- `/mailstore` calcolato come lo spazio per un utente moltiplicato per il numero di utenti + un 10% del risultato: $10 \cdot 50 + (500 \cdot \frac{10}{100}) = 550 GB$
- `/var` almeno 50 GB
- `/var/log` almeno 10 GB
- `Swap`: $64 \cdot 1.5 = 96 GB \approx 100 GB$
    - oppure $64 * 25\% = 16 \approx 20GB$

### Esercizio

Supponendo di avere uno storage pari a 10TB e 512GB di RAM, partizioniamo il sistema Linux con autenticazione centralizzata ed export delle Home.

Supponiamo di dover gestire 50 utenti e ogni utente può occupare al massimo 100GB.

Considerare swap nei seguenti modi:

- $25\% \cdot RAM$
- $50\% \cdot RAM$
- $75\% \cdot RAM$

quanti utenti possono essere gestiti nei vari casi?

Partizionamento generale:

- `/` 500 GB
- `/home` $50 \cdot 100 + 10\% = 5.5 TB$
- `/var` 1TB
- `/var/log` 500GB
- `/usr` 1.5TB

Soluzione Swap 1:

- `Swap` $512 \cdot 0.25 = 128GB$

Soluzione Swap 2:

- `Swap` $512 \cdot 0.50 = 256GB$

Soluzione Swap 3:

- `Swap` $512 \cdot 0.75 = 384GB$

in tutti i casi possiamo ospitare circa 100 utenti

## SSH

SSH (Secure SHell) è un protocollo che permette di stabilire una sessione remota cifrata tramite riga di comando verso un altro host.

```bash
ssh -p <port> <username>@<host>
```

è anche possibile sfruttare il protocollo ssh per inviare e ricevere file, due programmi che fanno questo sono **scp** e **sftp**. FileZilla è un client grafico per il trasferimento di file via SSH disponibile su Windows, MacOS e Linux

L’autenticazione con SSH può avvenire tramite password ma può essere sostituita da una autenticazione tramite coppia di chiavi (pubblica e privata) con, eventualmente, una passphrase per sbloccare la chiave privata.

si può generare questa coppia in questo modo:

```bash
ssh-keygen -t rsa -b 2048
```

normalmente le chiavi generate vengono salvate in `~/.ssh/`

L’inserimento di una passphrase ad ogni connessione può risultare frustrante, si può però migliorare la situazione tramite `ssh-agent` per mettere in cache la passphrase per la durata della sessione

```bash
ssh-add ~/.ssh/id_rsa
```

quando ci si è connessi poi bisogna copiare la chiave pubblica nel server, nel file `~/.ssh/authorized_keys`. Si può anche usare lo script ssh-copy-id per copiarla in modo automatizzato:

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub utente@server
```



# Comandi Linux

Esploriamo i principali comandi da terminale su Linux utili per un amministratore di sistema.

## Estensione file system

Abbiamo visto che il file system di Linux è una struttura gerarchica di directory e sottodirectory. Per estendere il file system si usa il comando `mount` (mentre `umount` per rimuovere il FS aggiunto) che si occupa di aggiungere il file system di una unità di storage esterna, all’interno del file system del sistema, sotto una directory apposita, detta ***mountpoint***.

La configurazione del mountpoint è definita in `/etc/fstab`

Per vedere i vari file system montati si può usare il comando `df -h` (l’opzione `-h` rende le unità di misura più *human friendly*)

Quando viene inserita una nuova unità di storage essa viene automaticamente montata nel percorso `/media/<username>/<devicelabel>`

Per creare un file system si utilizzano i comandi del tipo `mkfs.<tipo_file_sistem> <location>`, mentre per quanto riguarda il partizionamento si possono usare tool come cfdisk, gparted e LVM

## Utenti e gruppi

Ogni utente in un sistema Linux è descritto dai seguenti campi:

- un nome utente
- un identificativo numerico **UID** (che è quello che identifica univocamente l’utente)
- un gruppo di utenti a cui l’utente appartiene
- un home directory
- una login shell

Vediamo alcuni comandi utili:

- `whoami`: permette di ottenere informazioni sul proprio username
- `w`: mostra chi è collegato al sistema
- `finger`: da informazioni più dettagliate su un determinato utente
- `id`: restituisce l’UID dell’utente e anche dei gruppi di cui fa parte
- `groups`: mostra di quali gruppi fa parte l’utente

Esiste un utente speciale che prende il nome di **root**, che possiede UID 0, e che può fare praticamente qualsiasi cosa nel sistema.

Un utente può diventare temporaneamente root con i comandi `su` (per aprire una nuova shell come root) e `sudo` (per eseguire un comando come root), per poter fare quest’ultimo comando l’utente deve appartenere ad un gruppo speciale (admin, sudo, sudoers, …)

È possibile aggiungere un utente al gruppo sudo tramite

```bash
usermod -aG sudo <username>
```

## Permessi

Tramite i permessi è possibile negare l’accesso a parti del file system.

Ogni file e directory sono associati ad un utente e un gruppo che sono i proprietari, poi vengono usati 9 bit per rappresentare i permessi su quel file, infine ci sono tre modificatori aggiuntivi.

```bash
drwxrwxrwx 1 <user> <group>    ...  <filename>
```

Le tipologie di permessi sono:

- `r`: lettura
- `w`: scrittura
- `x`: esecuzione

e tali permessi vengono dati a:

- utente proprietario
- gruppo proprietario
- altri

I modificatori aggiuntivi sono:

- `setuid`
    
    viene utilizzato per fare in modo che un file venga eseguito con i privilegi del suo proprietario, anziché con quelli dell’utente che lo esegue. Tuttavia, l’utente deve già disporre del permesso di esecuzione.
    
    Il setuid è rappresentato da una `s` al posto della `x` nella sezione relativa al proprietario.
    
- `setgid`
    
    Il bit setgid viene utilizzato per fare in modo che un file venga eseguito con i privilegi del gruppo proprietario, anziché con quelli del gruppo dell’utente che lo esegue. L’utente deve già disporre del permesso di esecuzione.
    
    Il setgid è rappresentato da una `s` al posto della `x` nella sezione relativa al gruppo.
    
- `sticky bit`
    
    viene impostato nelle directory quando si vuole che il loro contenuto possa essere cancellato o rinominato solamente dal proprietario o da root.
    
    Questo permesso viene spesso impostato sulle directory come `/tmp` per evitare che utenti ordinari cancellino o spostino i file temporanei appartenenti agli altri utenti, pur consentendo a chiunque di creare nuovi file e directory.
    

Per cambiare l’utente proprietario si usa il comando `chown`, per cambiare il gruppo proprietario si usa il comando `chgrp`, e per modificare i permessi sul file si usa il comando `chmod`.

È possibile assegnare agli utenti o ai gruppi una quantità massimo di spazio su disco occupabile, detto **quota**, gestibile con i comandi `quota` e `edquota`.

## Processi

Ogni programma in esecuzione è rappresentato da almeno un processo, ogni processo possiede un utente e un gruppo proprietario che sono corrispondenti a chi ha lanciato il processo (a meno che non siano presenti i modificatori `setuid` o `setgid`), inoltre ogni processo è identificato da un **PID** (*Process ID*)

Comandi utili:

- `ps`: per vedere la lista dei processi attivi in quel esatto momento
- `pstree`: per vedere chi ha lanciato quali processi
- `top`: per vedere la lista dei processi attivi in quel esatto momento in maniera più dettagliata e anche con info sull’utilizzo del sistema
- `htop`: versione di `top` più avanzata
- `kill`: per terminare un processo
- `lsof`: mostra i file aperti dai processi

## Gestione della rete

Tramite il comando `netstat` è possibile vedere le connessioni di rete aperte dai processi in esecuzione e altre informazioni.

Per gestire le interfacce di rete si può usare il comando `ifconfig`. 

Mentre è possibile gestire tabelle di instradamento tramite il comando `route`.

Tramite il comando `traceroute` è possibile stampare il percorso che fanno i pacchetti per raggiungere la destinazione specificata (il percorso fatto però non è necessariamente completo, alcuni router del percorso possono non rispondere)

Solitamente (ma dipende dalla distribuzione) la configurazione di rete è in `/etc/netplan/` oppure in `/etc/network/interfaces`

la configurazione del DNS è in `/etc/resolv.conf`



# Shell

La shell è un programma che gestisce la comunicazione tra l’utente e il sistema operativo interpretando dei comandi.

Su Linux le principali shell che possiamo trovare sono:

- Bourne Shell (**sh**): la shell originale di Unix
- Bourne Again Shell (**bash**): la shell attualmente di default su Linux, compatibile con sh
- **Zsh**: estensione di bash con caratteristiche prese da altre shell, usata di default su Mac OS

Ne esistono molte altre, per vedere quali sono installate nel proprio sistema eseguire il comando:

```bash
less /etc/shells
```

Su Windows abbiamo:

- **Prompt dei comandi** (cmd): è un porting della shell usata in Microsoft DOS, permette sia l’esecuzione di comandi che la creazione di script batch e l’esecuzione di VBscript.
- **PowerShell**: è la versione più moderna del cmd basata sul framework .net e sulla programmazione ad oggetti, che oltre a basarsi su dati testuali, usa gli oggetti .net come input e output.

## BASH

Quando apriamo un terminale, il sistema lancia la shell bash che cerca di aprire determinati file di configurazione:

1. `/etc/profile`
    
    Contiene impostazioni di sistema come variabili d'ambiente, percorsi e configurazioni generali che si applicano a tutti gli utenti del sistema.
    
    Viene eseguito solamente all’apertura della prima shell
    
2. `~/.bash_profile`
    
    È utilizzato per impostare variabili d'ambiente personali, percorsi e altre configurazioni che si desidera applicare solo a quell'utente. 
    
    Viene eseguito solamente all’apertura della prima shell
    
    - `~/.bash_login`: Se il file `~/.bash_profile` non è presente, Bash cerca questo file. Anch'esso viene eseguito all'avvio di una shell di login e può contenere impostazioni personali dell'utente.
    - `~/.profile`: se né `~/.bash_profile` né `~/.bash_login` sono presenti, Bash cerca questo file. È utilizzato per impostare variabili d'ambiente e configurazioni personali.
3. `~/.bashrc`
    
    Questo file viene eseguito all'avvio di tutte le shell successive a quella di login. Contiene alias, variabili d’ambiente e altre configurazioni specifiche dell'utente per le sessioni interattive.
    

### History

La shell memorizza lo storico dei comandi inseriti nel file `~/.bash_history` e usando il comando `history` è possibile interagire con il contenuto di quel file.

### Sintassi caratteri speciali

Come ogni interprete anche bash ha la propria sintassi, partiamo dai caratteri speciali:

- `;` permette di separare più comandi sulla stessa riga.
- `&` esegue il comando che lo precede in background, permettendo alla shell di accettare nuovi comandi senza attendere il completamento del precedente.
- `()` creano un sottoprocesso in cui vengono eseguiti i comandi racchiusi. I comandi all'interno non influenzano l'ambiente della shell principale. Ad esempio, `(cd /tmp; ls)` non modifica la directory corrente della shell principale.
- `{}` raggruppano comandi da eseguire nel contesto della shell corrente. A differenza delle parentesi tonde, i comandi all’interno influenzano l'ambiente della shell principale. È importante notare che `{` e `}` devono essere separati dai comandi da spazi e che il blocco deve terminare con un punto e virgola o una nuova riga prima della parentesi chiusa.
- `|` (pipe) prende l'output del comando a sinistra e lo passa come input al comando a destra.
- `<> &` reindirizzamento dell’input e dell’output
- `* ? [] ~ !` simboli jolly usati nei pattern dei nomi dei file
- `#` rappresenta un commento

## Comandi

Oltre ad usare i comandi direttamente nella shell del terminale è possibili creare degli script, cioè dei file di testo contenenti una serie di comandi bash.

Questo file di testo deve iniziare con una riga che indica con quale shell eseguire lo script:

`#!<tipo di shell>` ad esempio `#!/bin/bash`

Il file può avere estensione `.sh` oppure non avere nessuna estensione (consigliato).

Per eseguire il file bisogna dare i permessi di esecuzione con `chmod +x <script filename>`

### Variabili

per inizializzare una variabili si usa la seguente sintassi

```bash
MYVAR="hello"
```

Nota: è necessario non mettere degli spazi attorno al simbolo di `=`

per stamparne il contenuto:

```bash
echo $MYVAR
```

Si possono inizializzare array in questo modo

```bash
A[0]=1
A[1]=2
A[2]=3

B=(1 2 3)

echo ${A[1]}
```

### Variabili speciali

| Variabile | Significato |
| --- | --- |
| `$0` | Indica il nome del programma |
| `${n}` | indica gli argomenti passati dalla riga di comando dove n=1…9 |
| `$#` | indica il numero di argomenti passati dalla riga di comando |
| `$*` | indica tutti gli argomenti della riga di comando |
| `$$` | indica il PID del processo che esegue lo script |
| `$?` | restituisce lo status code dell’ultimo comando eseguito |
| `$!` | indica il PID dell’ultimo processo mandato in background |

### costrutto if

```bash
if [ condizione1 ]; then
    # Comandi se condizione1 è vera
elif [ condizione2 ]; then
    # Comandi se condizione2 è vera
else
    # Comandi se nessuna delle condizioni precedenti è vera
fi
```

Operatori di confronto:

| **Categoria** | **Operatore** | **Descrizione** |
| --- | --- | --- |
| **Comparazione tra stringhe** | `==` | Uguale a |
|  | `!=` | Diverso da |
|  | `\<` | Minore (ordine alfabetico) |
|  | `\>` | Maggiore (ordine alfabetico) |
| **Comparazione tra numeri** | `-eq` | Uguale a |
|  | `-ne` | Diverso da |
|  | `-lt` | Minore di |
|  | `-le` | Minore o uguale a |
|  | `-gt` | Maggiore di |
|  | `-ge` | Maggiore o uguale a |
| **Test vuoto/non vuoto** | `-z` | Stringa vuota |
|  | `-n` | Stringa non vuota |
| **Test esistenza file** | `-e` | Esiste (file o directory) |
|  | `-f` | Esiste ed è un file |
|  | `-d` | Esiste ed è una directory |
|  | `-r` | Ha permessi di lettura |
|  | `-w` | Ha permessi di scrittura |
|  | `-x` | Ha permessi di esecuzione |
| **Operatori logici** | `&&` | AND logico |
|  | `||` | OR logico |
|  | `!` | NOT logico |

### Ciclo for

```bash
for variabile in lista; do
    # Comandi da eseguire ad ogni iterazione
done
```

Esempi:

```bash
for nome in Alice Bob Charlie; do
    echo "Ciao, $nome!"
done
```

```bash
for i in {1..5}; do
    echo "Numero: $i"
done
```

### Ciclo while

```bash
while [ condizione ]; do
    # Comandi da eseguire
done
```

### Select

Il comando `select` è usato per creare menu interattivi a scelta multipla.

```bash
#!/bin/bash

echo "Scegli un'opzione:"
select opzione in "Avvia" "Arresta" "Esci"; do
    case $opzione in
        "Avvia")
            echo "Hai scelto di avviare il servizio."
            ;;
        "Arresta")
            echo "Hai scelto di arrestare il servizio."
            ;;
        "Esci")
            echo "Uscita dal menu."
            break
            ;;
        *)
            echo "Scelta non valida!"
            ;;
    esac
done
```

### IFS

IFS (*Internal Field Separator*) è una variabile speciale che determina i caratteri usati per separare i campi quando si lavora con stringhe o input.

Di default, IFS contiene spazio, tabulazione e newline (`" \t\n"`)

Quando si modifica è raccomandato salvarsi un copia del valore originale e poi ripristinarla alla fine dello script, inoltre è raccomandato racchiudere il valore tra virgolette perché potrebbe contenere caratteri non stampabili.

Esempio: elencare i file e le directory presenti nella directory corrente e calcolare il loro dimensione su disco. Modifichiamo IFS in modo che Bash non utilizzi gli spazi come delimitatori, ma solo le tabulazioni e i ritorni a capo

```bash
#!/bin/bash
OLDIFS="$IFS"; 
IFS=$'\t\n';      # default IFS=$' \t\n' 
for i in $(ls -1); do 
	du -hs $i; 
done;
$IFS="$OLDIFS"
```

## Batch

L’approccio più vecchio per scrivere script su Windows era tramite **file batch** (con estensione `.bat`), l’approccio moderno è tramite **VBscript**.

All’interno di un file batch si possono trovare solamente i comandi usabili direttamente nel prompt dei comandi.

### Istruzioni

- `echo` serve per mostrare a video del testo.
    
    ```powershell
    echo Ciao, mondo!
    ```
    
    tramite `@echo on` e `@echo off` è possibile abilitare/disabilitare il fatto che i comandi vengano stampati a video prima di essere eseguiti (se si toglie `@`, allora mostra/nasconde anche il comando stesso, altrimenti agisce solo su quelli successivi)
    
- `pause` sospende l'esecuzione dello script fino a quando l'utente preme un tasto.
- `type <filename>` visualizza il contenuto di un file di testo nel terminale.
- Per leggere gli argomenti passati da riga di comando si utilizzano `%1`, `%2`, `%N` e così via…
- `IF` esegue condizioni
    
    ```powershell
    IF condizione (comando1) ELSE (comando2)
    ```
    
    ```powershell
    IF EXIST file.txt ECHO Il file esiste
    ```
    
- `set` per impostare variabili:
    
    ```powershell
    SET MIA_VAR=Hello
    ```
    
    per estrarne il valore:
    
    ```powershell
    ECHO %MIA_VAR%
    ```
    
- `rem` per fare commenti
    
    ```powershell
    REM Questo è un commento
    ```
    
- cicli for
    
    ```powershell
    FOR %%V IN (1 2 3) DO ECHO %%V
    ```
    

## VBScript

è un sottoinsieme di Visual Basic usato come linguaggio per fare scripting come sostituto per i file batch

- le variabili vengono dichiarata con il costrutto `Dim` e poi assegnate con l’uguaglianza.
    
    mettere in testa al file `Option Explicit` obbliga a dichiarare sempre le variabili prima di usarle.
    
- per stampare a video
    
    ```visual-basic
    WScript.Echo "hello"
    ```
    
- I commenti si fanno con `'`
    
    ```visual-basic
    Option Explicit
    Dim a,b
    Dim c(3) 'array
    a=”ciao”
    b=1
    c(0)=1
    c(1)=2
    c(2)=3
    wscript.echo a
    wscript.echo b
    wscript.echo c(2)
    ```
    
    output:
    
    ```visual-basic
    > ciao
    > 1
    > 2
    ```
    

- Gli operatori matematici e di confronto sono i classici usati nei linguaggi moderni, tranne che `<>` indica il diverso, e `^` l’elevamento a potenza.
- Gli operatori logici si indicano con `AND`, `OR`, `NOT`
- costrutto if:
    
    ```visual-basic
    If condizione1 Then
        ' Codice se condizione1 è vera
    ElseIf condizione2 Then
        ' Codice se condizione2 è vera
    Else
        ' Codice se nessuna condizione è vera
    End If
    ```
    
- ciclo for
    
    ```visual-basic
    For <variabile> = <inizio> To <fine> Step <passo>
        ' Codice da eseguire
    Next
    ```
    
- ciclo for each
    
    ```visual-basic
    For Each <variabile> In <collezione>
        ' Codice da eseguire
    Next
    ```
    
- ciclo while
    
    ```visual-basic
    Do While <condizione>
       ' Codice da eseguire
    Loop  
    ```
    
- Per prendere l'input dell'utente si usa `InputBox`. Questo comando apre una finestra di dialogo in cui l'utente può inserire del testo.
    
    ```visual-basic
    variabile = InputBox("Messaggio da visualizzare", "Titolo della finestra")
    
    ```



# Servizi di rete

## Porte e socket

Ogni processo locale che comunica con uno remoto viene identificato in una connessione TCP/IP tramite una **porta**. Una **porta** è un numero a 16 bit (da 0 a 65535) all'interno di un pacchetto TCP/UDP.

Le porte vengono suddivise in tre categorie:

- **Well Known Ports**: da 0 a 1023. Queste porte sono assegnate a specifici protocolli dalla *Internet Assigned Number Authority* (IANA).
    
    Alcuni esempi di porte conosciute sono:
    
    - 21 FTP
    - 22 SSH
    - 53 DNS
    - 80 HTTP
    - 443 HTTPS
- **Registered Ports**: da 1024 a 49151. Queste porte sono registrate a nome delle società che hanno sviluppato specifiche applicazioni.
- **Dynamic and/or Private Ports**: da 49152 a 65535. Sono porte libere che vengono assegnate dinamicamente ai processi quando un client si connette a un host remoto.

La combinazione di **indirizzo IP**, **protocollo di trasporto** (TCP o UDP) e **numero di porta** prende il nome di **Socket**. Per instaurare una connessione tra due socket sono necessarie due condizioni:

- **apertura passiva lato server**: il server sceglie una porta sulla quale vengono accettate le connessioni.
- **apertura attiva lato client**: il client sceglie una porta per connettersi all'host remoto.

## Operazioni periodiche con cron

**Cron** è un **gestore di operazioni eseguite periodicamente** presente nei sistemi UNIX.

Cron permette di pianificare l’esecuzione di comandi su base temporale (ogni ora, ogni giorno, al riavvio ecc…), consentendo anche di specificare l'utente con cui devono essere eseguiti.

La configurazione di Cron è suddivisa tra il file `/etc/crontab` e i file presenti in `/etc/cron.*`.

In alcune distribuzioni, esistono delle ****directory contenenti script periodici del sistema:

- `/etc/cron.daily/`: per esecuzioni giornaliere.
- `/etc/cron.weekly/`: per esecuzioni settimanali.
- `/etc/cron.monthly/`: per esecuzioni mensili.

Nella directory, **/etc/cron.d**, che contiene script eseguiti arbitrariamente o auto-schedulati.

**Ogni utente ha la propria crontab**, modificabile tramite il comando `crontab -e`.

Esempio di uno script che viene eseguito ogni giorno alle 12:15:

```bash
# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
 15 12  *  *  *   root      /path/to/my_script
```

## Inetd

**inetd** è un demone che rimane in ascolto sulle porte configurate. Quando **inetd** riceve una richiesta di connessione o un semplice pacchetto, si occupa di **lanciare il programma desiderato**.

Spesso, l'uso di **inetd** è abbinato a **tcpd**, il quale si occupa di **registrare le richieste in entrata** e di **accettarle o rifiutarle** in base a semplici regole definite nei file `/etc/hosts.allow` e `/etc/hosts.deny`.

È generalmente preferibile bloccare tutto in ****`/etc/hosts.deny` e aprire solo i servizi desiderati in ****`/etc/hosts.allow`.

## NTP

**NTP (Network Time Protocol)** è un protocollo che permette ai client di sincronizzarsi con dei server, chiamati **Time Server**, al fine di mantenere data e ora sincronizzati all'interno di un sistema distribuito.

Questi Time Server possono essere collegati a diverse fonti di misurazione del tempo, come orologi atomici, ponti radio, stazioni di misurazione o altri server NTP.

I dispositivi di misurazione diretta del tempo (come gli orologi atomici) sono detti **strato 0**. I server NTP direttamente collegati a essi sono **server allo strato 1 (primari)**. I dispositivi che ottengono l'ora da server allo strato **n** sono allo strato **n+1**.

Su sistemi Debian/Ubuntu, è possibile **installare il pacchetto ntp**

```bash
apt install ntp
```

La **configurazione** avviene modificando il file `/etc/ntp.conf`. All'interno di questo file, è necessario inserire nella direttiva `server` l'indirizzo del server NTP di riferimento.

```bash
server <ntp_server_name / address>
```

### Chrony

**Chrony** è un’implementazione versatile del Network Time Protocol (NTP).

**Chrony** può sincronizzare l'orologio di sistema con server NTP, orologi di riferimento (come ricevitori GPS) e input manuale. Può anche funzionare come server NTPv4 per altri computer nella rete.

È progettato per funzionare bene anche in condizioni di rete difficili e offre una precisione tipica di pochi millisecondi su Internet e di decine di microsecondi su una LAN.

## DHCP

**DHCP (Dynamic Host Configuration Protocol)** è un protocollo che permette la **configurazione automatica dei parametri di rete** al fine di velocizzare il lavoro degli amministratori di sistema e semplificare la gestione della rete per gli utenti.

**Funzionalità principali**:

- **Assegnazione dinamica di parametri di rete**: Un server DHCP assegna dinamicamente ai client che ne fanno richiesta parametri come **indirizzo IP, netmask, gateway, hostname e una lista di server DNS**.
- **Assegnazione di IP statici tramite MAC address**: È possibile configurare il server DHCP in modo che assegni sempre lo stesso indirizzo IP a uno specifico host (identificato dal suo indirizzo MAC).
    
     Il DHCP può essere configurato per assegnare indirizzi IP solo a indirizzi MAC conosciuti.
    

**Come funziona:**

1. **DHCPDISCOVER**: All'avvio della configurazione di rete, il client invia un pacchetto **DHCPDISCOVER in broadcast** (all'indirizzo 255.255.255.255) per cercare un server DHCP.
2. **DHCPOFFER**: Se un server DHCP è presente nella rete, riceve la richiesta, verifica, eventualmente, l'indirizzo MAC del client e comunica un **indirizzo IP al client tramite un pacchetto DHCPOFFER**.
3. **DHCPREQUEST**: Se il client accetta la configurazione offerta, invia un pacchetto di **DHCPREQUEST** al server.
4. **DHCPACK**: Il server risponde al client con un pacchetto di **DHCPACK** contenente l'indirizzo IP assegnato e le altre informazioni sulla configurazione di rete.

L'implementazione di DHCP più comune nei sistemi derivati da UNIX è **ISC DHCP**.

Per installare il server e il client DHCP su Debian/Ubuntu:

```bash
apt install isc-dhcp-server isc-dhcp-client
```

La configurazione del server DHCP si trova nel file `/etc/dhcp/dhcp.conf`. Permette di definire diverse opzioni, come il nome del dominio, i server DNS, la durata predefinita e massima del lease degli indirizzi IP, la subnet da servire e le opzioni specifiche per quella subnet.

## DNS

Il **Domain Name System (DNS)** è un sistema usato per **tradurre gli indirizzi IP in nomi simbolici e viceversa**.

 Il DNS gestisce una **tabella di corrispondenza da nome a indirizzo IP (diretta) e da indirizzo IP a nome (inversa)**.

Il DNS è fondamentalmente un **database distribuito** basato su un modello client-server che traduce il nome di una macchina in un indirizzo internet (IP) e viceversa.

Il DNS possiede due gerarchie:

1. **una gerarchia dei nomi di dominio**: La posizione più alta è occupata dai **Top Level Domain (TLD)** come `.com`, `.it`, `.uk`, `.edu`, ecc. Al di sotto si trovano altri domini come `amazon.it`, `google.it`, ecc..
    
    ![](https://i.ibb.co/BVjGj0fN/image.png)
    
2. **una gerarchia dei server che forniscono i dati**: Le informazioni sono suddivise in **zone**, cioè una porzione di nomi di dominio è sotto una gestione amministrativa. La gerarchia dei name server parte dai **root name server** e si realizza tramite **deleghe sulle zone**.
    
    La gestione di una zona è **delegata dalla zona superiore tramite dei record di tipo NS** (Name Server). Per garantire ridondanza, ogni zona è **replicata su più server**.
    
    ![](https://i.ibb.co/fGPMkfZL/image.png)
    

### Risoluzione di un nome di domino e risoluzione inversa

Per ottenere la risoluzione di un nome di dominio, è necessario interrogare un root server riguardo il dominio di primo livello, ottenere il server che lo gestisce, interrogarlo riguardo il dominio di secondo livello e così via fino a raggiungere il server autorevole per il nome desiderato.

I server DNS, provvedono anche alla **risoluzione inversa**: da indirizzi IP a nomi. Quest'ultima avviene tramite la gerarchia di zone `in-addr.arpa` per IPv4 (`ip6.arpa` per IPv6).

Le zone DNS contengono diversi tipi di informazioni, memorizzate in **record**. Ogni record contiene una specifica tipologia di informazione:

- **Record SOA (Start Of Authority)**: fornisce informazioni generali sulla zona, inclusi un identificativo sequenziale della versione (serial number), l'email del responsabile e il TTL.
    - Il **serial number** è solitamente una sequenza numerica che include la data dell'ultima modifica.
    - Il **TTL** indica per quanto tempo altri server DNS possono considerare valida l'informazione ricevuta.
- **Record NS (Name Server)**: indica i **server DNS autoritativi** per una determinata zona, cioè quelli responsabili di rispondere alle query su quel dominio.
- **Record MX (Mail Exchanger)**: definisce gli hostname dei server di posta in entrata responsabili per il dominio.
- **Record A**: associa un nome di dominio a un indirizzo **IPv4** (es. `example.com → 192.168.1.1`).
- **Record AAAA**: come il record A, ma per gli **indirizzi IPv6** (es. `example.com → 2001:db8::1`).
- **Record CNAME**: rappresenta nomi alternativi (alias) per un host.
- **Record TXT**: permette di associare stringhe arbitrarie ad un nome.
- **Record SRV**: permette di associare informazioni strutturate al nome di un servizio..
- **Record PTR**: nelle zone per la risoluzione inversa, rappresenta le traduzioni nella forma IP → nome.

### DNS su Linux

Nei sistemi Unix/Linux, un sistema DNS può essere realizzato principalmente in due modi:

1. **Utilizzando il file** `/etc/hosts`: Inserendo l'elenco di tutte le coppie **IP-nome** della propria rete con la seguente sintassi: `# IP FQDN ALIAS`.
    
    ```bash
    192.168.0.150 www.example.com example
    ```
    
2. **Utilizzando un server DNS**, come BIND. Per la gestione si possono utilizzare tool utili come `host` e `dig`.
    
    In una stessa zona possono esserci più server DNS, classificati come:
    
    - **master**: primario, contiene la copia principale e propaga le modifiche
    - **slave**: secondario, possiede una replica e può fungere da primario in caso di necessità
    - **caching**: tiene solo una cache delle informazioni).



# Autenticazione

Con **autenticazione** si intente una serie di operazioni che includono:

- **identificazione e autenticazione**: indicare in maniera univoca un utente di un sistema e dimostrare che un utente è realmente la persona che dichiara di essere
- **autorizzazione**: stabilire cosa l’utente può fare e cosa no

## Autenticazione di base

Storicamente, i sistemi UNIX utilizzavano il contenuto del file `/etc/passwd` sia per l'identificazione che per l'autorizzazione. Questo file conteneva una riga per ogni utente del sistema, con il formato

```bash
username:encpassword:UID:GID:gecos:homedirectory:shell
```

Poiché alcune informazioni in questo file, come la corrispondenza tra username e UID, dovevano essere accessibili a tutti gli utenti e alle loro applicazioni, il file è pubblicamente leggibile. la password era hashata con l’algoritmo DES(3), oggi ritenuto non abbastanza sicuro.

Il file `/etc/group` conteneva invece la lista dei gruppi del sistema e i relativi GID, oltre all'elenco dei membri di ciascun gruppo.

I sistemi UNIX moderni non utilizzano più direttamente il file `/etc/passwd` per memorizzare le password. Ora si utilizza il file `/etc/shadow`, che serve unicamente per la fase di autenticazione e non è pubblicamente leggibile.

Il formato di `/etc/shadow` è:

```bash
username:encpassword:ultimocambio:etàminima:etàmassima:periodoavviso:periodoinattività:datascadenza:altro
```

Un problema principale della soluzione basata su questi file era la **scarsa elasticità**. Originariamente, questi file erano gestiti direttamente da programmi. Ogni modifica allo standard dei file richiedeva la modifica dei programmi che li gestivano.

Per superare queste limitazioni, nel tempo sono nati sistemi che permettono di aggiungere diversi meccanismi di autenticazione e gestione delle informazioni sugli utenti senza dover modificare i programmi che ne fanno uso, ad esempio NSS e PAM.

### NSS

**NSS (Name Service Switch)** è un sistema per la gestione delle informazioni sugli utenti.

In Linux, NSS è parte delle librerie C del progetto GNU e fornisce delle funzioni che fanno da interfaccia tra le applicazioni e i sistemi di autenticazione per la gestione delle informazioni utente (tra cui `/etc/passwd`, `/etc/group`). Possono essere usati anche altre fonti per i dati, come dei database.

La configurazione di NSS avviane principalmente tramite il file `/etc/nsswitch.conf`

![](https://i.ibb.co/TB42bGXS/image.png)

### PAM

**PAM (Pluggable Authentication Modules)** è un insieme di librerie che forniscono servizi di autenticazione a diverse applicazioni. Le attività di autenticazione sono suddivise in quattro gruppi:

- **Moduli account**: verificano che l'account specificato soddisfi determinati requisiti (come la scadenza dell'account, l'orario del giorno e il fatto che l'utente abbia accesso al servizio richiesto)
- **Moduli di autenticazione**: verificano l'identità dell'utente e lo autenticano tramite password o altri metodi
- **Moduli password**: sono responsabili dell'aggiornamento delle informazioni di autenticazione (come il cambio password)
- **Moduli di sessione**: definiscono le azioni da eseguire all'inizio e alla fine delle sessioni.

Per ogni servizio e per ognuna di queste attività è possibile specificare una sequenza di operazioni da eseguire tramite plugin.

La configurazione si trova nella directory `/etc/pam.d/`.

![](https://i.ibb.co/JRRtKNXB/image.png)

## Autenticazione centralizzata

Avere un sistema di **autenticazione centralizzata** semplifica notevolmente la gestione degli accessi e dei permessi e contribuisce alla sicurezza dei sistemi. Ad oggi, la maggior parte dei sistemi che richiedono autenticazione centralizzata si basano su **LDAP** (*Lightweight Directory Access Protocol*) per la gestione degli utenti e dei loro permessi, spesso in combinazione con **Kerberos** per la gestione degli accessi e delle password.

### NIS

Prima dell'avvento di LDAP, esistevano altre soluzioni per l'autenticazione centralizzata, come **NIS (Network Information Services)** e **NIS+**.

**NIS** era un sistema client/server basato su RPC (*Remote Procedure Call*) che permetteva a un gruppo di macchine all'interno di un dominio NIS di condividere file cruciali come `/etc/passwd`, `/etc/group` e `/etc/shadow` tra tutte le macchine del dominio NIS, con le modifiche che si propagavano da un server master ai client. Tuttavia, **NIS era insicuro** in quanto tutte le informazioni viaggiavano in chiaro.

**RPC (Remote Procedure Call)**, su cui si basava NIS, permette a un programma di eseguire procedure  su un computer remoto.

### LDAP

**LDAP (Lightweight Directory Access Protocol)** è un protocollo per interrogare e manipolare **directory**, basato su un’architettura client-server utilizzato per fornire informazioni sugli utenti e per fare autenticazione.

Una **directory** è un database organizzato in maniera gerarchica ad albero ottimizzato per le operazioni di lettura.

La directory è rappresentata tramite una gerarchia chiamata **DIT** (*Directory Information Tree*), dove i nodi rappresentano delle suddivisioni mentre le foglie sono i dati effettivi. I nodi possiedono un nome univoco tra i fratelli detto RDN (*Relative Distinguished Name*) e una sequenza di RDN dal nodo alla radice viene chiamata DN (*Distinguished Name*).

![](https://i.ibb.co/CKXm5GLs/image.png)

L’implementazione più nota di un server LDAP su Linux è OpenLDAP.

Su Windows LDAP viene spesso utilizzato con il protocollo Kerberos in un sistema che prende il nome di **Active Directory**.

**Kerberos** è un protocollo di rete per l’autenticazione in cui gli utenti si autenticano tramite tecniche crittografiche.

Il protocollo Kerberos coinvolge un **client**, un **application server** e un *Key Distribution Center* (**KDC**), che si occupa del processo di autenticazione e la gestione delle chiavi segrete.

![](https://i.ibb.co/5hvSmDrF/image.png)

Il processo di autenticazione prevede diversi passaggi:

1. `AS_REQ`: La richiesta iniziale del client in chiaro verso l’Authentication Server (una componente del KDC)
2. `AS_REP`: la risposta dell'Authentication Server contenente la chiave di sessione
3. `TGS_REQ`: la richiesta di un ticket di servizio
4. `TGS_REP`: la risposta del Ticket Granting Server contenente il ticket di servizio (TS), 
5. `AP_REQ`: infine la richiesta di accesso al servizio.
6. `AP_REP`: è la risposta che l’Applicaton Server invia al client per provare di essere veramente il server che il client si aspetta

Esistono diverse implementazioni di Kerberos. È possibile integrare le varie implementazione in LDAP e PAM.

## Active Directory

**Active Directory** (AD) è un database LDAP integrato nei server Windows ****che svolgono il ruolo di **Domain Controller**. Permette di **catalogare e gestire in modo centralizzato diverse risorse di rete**, come utenti, gruppi di lavoro, stampanti e cartelle condivise.

Un **Dominio** è un insieme di computer che condividono risorse di rete e che vengono amministrati con regole e permessi (*policy*).

AD è strutturato come un **contenitore di oggetti** (utenti, gruppi, computer, server, stampanti) **organizzati in una gerarchia ad albero**. Per la gestione degli accessi, utilizza il protocollo Kerberos.



# Posta elettronica

La posta elettronica è un sistema di comunicazione digitale che sfrutta la rete internet per lo scambio di messaggi.

Questo sistema è composto da vari attori:

- Il **Mail User Agent (MUA)** o client di posta (come Thunderbird, Outlook) è un programma utilizzato da un utente per inviare e consultare i messaggi. Può anche essere un'applicazione web (webmail).
- Il **Mail Submission Agent (MSA)** riceve i messaggi da un MUA e li invia a un MTA.
- Il **Mail Transit Agent (MTA)** riceve email da un MSA o da un altro MTA e le instrada verso un altro MTA oppure verso un LDA.
- Il **Mail Delivery Agent (MDA)** o **Local Delivery Agent (LDA)** consegna il messaggio alla casella di posta dell'utente indicato se la destinazione finale del messaggio si trova nel sistema corrente.
- Il **Mail Access Agent (MAA)** permette di consultare e scaricare i messaggi.
- Il **Mail Retrival Agent (MRA)** scarica la posta da un MAA e la rende disponibile in locale.

Tutte le comunicazioni tra i vari agenti, ad eccezione delle interazioni tra MRA e MAA, avvengono attraverso il protocollo SMTP (*Simple Mail Transfer Protocol*).

## Flusso

![](https://i.ibb.co/39Yp9XdB/image.png)

1. Il mittente scrive una email usando un MUA.
2. MUA invia la mail a un MSA/MTA.
3. L'MTA controlla l'indirizzo di destinazione (`utente@dominio`).
    - Se il dominio rientra tra quelli gestiti dall'MTA (e quindi è un indirizzo locale) e l'utente è valido, l'email viene inoltrata all'LDA, che la consegna nella casella di posta associata, terminando il processo.
    - Se l'indirizzo non è locale e l'MTA accetta di inoltrare il messaggio (*relay*), l'MTA inserisce il messaggio in una coda.
4. Dopo aver estratto il messaggio dalla coda, l'MTA controlla il record `DNS MX` associato al dominio del destinatario e contatta l'MTA che risponde a quell'host, cercando di inviargli il messaggio.
5. Da questo punto possiamo avere tre situazioni:
    - Se l'invio avviene correttamente, il messaggio viene gestito dall'MTA di destinazione, che procede dal punto 3.
    - Se l'MTA contattato non risponde, il messaggio torna in coda.
    - Se l'MTA contattato rifiuta il messaggio, oppure se il messaggio è rimasto troppo tempo in coda, viene inviata una notifica di mancata consegna all'indirizzo del mittente, e il procedimento termina.

### Relay

Il **relay** è un'operazione in cui un MTA accetta un'email da un altro server, anche se non è indirizzata a un dominio da esso servito, con lo scopo di inoltrarla a un destinatario terzo.

Questa funzionalità non è sempre consentita. Un MTA accetterà una richiesta di relay se proviene da un **host conosciuto** oppure da un **utente autenticato**. In tutti gli altri casi, il messaggio viene immediatamente rifiutato.

È importante notare che il servizio di posta **non garantisce la consegna delle email, la notifica degli errori, l'identità del mittente o la privacy della comunicazione**. Per superare questi limiti, è necessario ricorrere a sistemi a livello applicazione.

## Protocolli

Il protocollo utilizzato tra MUA e MTA e tra MTA e MTA si chiama **Simple Mail Transfer Protocol (SMTP)** o **Extended SMTP (ESMTP)** che fa una sorta di handshake per stabilire la connessione prima di inviare dati. La comunicazione tra MTA e LDA può avvenire internamente (scambio diretto di file) o tramite il **Local Mail Transfer Protocol (LMPT)**.

La comunicazione tra il MAA e il MUA (tramite l'MRA) avviene tramite il **Post Office Protocol versione 3 (POP3)** o l'**Internet Message Access Protocol versione 4 (IMAP4)**.

- **IMAP** conserva i messaggi sul server, permettendo di accedere e gestire la posta da più dispositivi, mantenendo sempre una copia centralizzata e sincronizzata.
- **POP**, invece, scarica le email sul dispositivo locale, spesso eliminandole dal server. Dopo il download, i messaggi sono consultabili anche offline, e la connessione è necessaria solo per inviare o ricevere messaggi.

**IMAP è generalmente preferibile per prestazioni ottimali**, specialmente su reti lente, mentre POP può essere utile in caso di connessioni non persistenti.

![](https://i.ibb.co/mFFLG7nQ/protocolli.png)

### **Implementazioni MTA**

- **Sendmail:** È stato il **primo demone** ad implementare il protocollo SMTP. Tuttavia, la sua **progettazione rigida e la complessità della configurazione** ne hanno progressivamente ridotto la popolarità fino alla sua quasi scomparsa. Inoltre, presentava **molti bug e problemi di sicurezza**.
- **Postfix:** È l'**MTA di riferimento in ambiente Linux**. È **facile da configurare**, **modulare** e supporta diversi tipi di autenticazione. Permette una facile integrazione con sistemi di controllo della posta e sistemi **antispam.**
- **MS Exchange:** Introdotto da Microsoft nel 1996, è oggi uno dei **mail server più potenti e utilizzati**, soprattutto in contesti aziendali che impiegano infrastrutture e tecnologie Microsoft. Le sue funzionalità principali includono la **gestione centralizzata di posta elettronica, calendari e rubriche condivise**. Il client più comune per connettersi a Exchange è **Microsoft Outlook.**

### **Implementazioni MAA**

- **Dovecot:** Permette l'utilizzo dei protocolli **IMAP e POP** e supporta diversi **formati di memorizzazione** della posta. Tramite un plugin, offre un sistema di **filtri server-side** gestibili tramite il protocollo **SIEVE** per lo smistamento della posta in cartelle e l'inoltro ad altri indirizzi.
    
    Alcuni tipi di formati di memorizzazione della posta sono i seguenti:
    
    - **Mbox:** È il formato più **vecchio** e ha una struttura semplice: la casella di posta è un **file di testo** in cui i messaggi sono memorizzati uno dopo l'altro, separati da tag.
    - **Maildir:** In questo formato, la singola casella di posta è una **directory**, e ogni messaggio è un **singolo file** al suo interno. Ciò consente **accessi contemporanei** e garantisce una **maggiore flessibilità**.
    - **D-box:** A differenza di Maildir, utilizza file di indice per gestire i metadati e mantiene i nomi dei file delle email stabili nel tempo. Questo approccio riduce l’uso del filesystem e migliora la gestione dei flag e degli stati dei messaggi. In caso di corruzione o perdita degli indici, Dovecot è in grado di rigenerarli automaticamente grazie alle informazioni contenute nei file D-box.
    - **Mdbox (Dovecot > 2.0):** Permette di memorizzare **più messaggi in un singolo file**, e una singola casella di posta può contenere **più file**. I file hanno una dimensione configurabile di circa **2 MB**. Questo formato si sforza di preservare quanti più dati possibile in caso di corruzione del file system, in modo che crash o perdite di alimentazione non possano corrompere o perdere dati.

## Spam

Con **SPAM** si intende **uno o più messaggi indesiderati, facenti parte di un più grande insieme di messaggi, tutti aventi contenuto sostanzialmente identico**. Le email indesiderate possono essere collocate in cinque diverse categorie:

- **Hoax:** Bufale e catene di Sant’Antonio.
- **Worm:** Email mandate da virus.
- **UCE (Unsolicited Commercial Email):** Email di spam dal contenuto commerciale.
- **UBE (Unsolicited Bulk Email):** Email indesiderate inviate in grandi quantità.
- Messaggi derivanti da iscrizioni a mailing list.

Non è possibile arginare completamente il problema dello spam con una policy statica, poiché gli spammer inventano continuamente nuove strategie per aggirare i filtri. È possibile solo filtrare le email in ingresso con vari meccanismi, tenendo presente che una filtratura eccessiva potrebbe compromettere il servizio scartando email legittime.

### Tecniche di Difesa

- **Greylisting:**
    
    questa tecnica si basa sul fatto che tipicamente uno spammer non spreca tempo a reinviare una email se la precedente è stata temporaneamente rifiutata. Funziona in questo modo:
    
    1. Un'email proveniente da un dominio sconosciuto viene **temporaneamente rifiutata** con un errore "450 *try again later*" per un numero preimpostato di volte N.
    2. Ad ogni rifiuto, l'MTA mittente rimette la mail in coda e, dopo un certo periodo di tempo, tenta il reinvio.
    3. Al tentativo N, la mail viene accettata dall'MTA ricevente, e l'MTA mittente viene inserito in una **whitelist**, in modo che tutte le email successive vengano accettate direttamente.
    
    **Problematiche:** Alla lunga, questa tecnica **perde di efficacia** poiché i bot di spam implementano algoritmi che ritentano l'invio. Possono inoltre verificarsi **lievi ritardi nella consegna** delle email.
    
    **Vantaggi:** **Nessuna email lecita viene scartata**, poiché i mail server legittimi re-inviano la mail. Si ha comunque un **buon filtraggio di base**.
    
- **RBL** (*Real-time Blackhole List*):
    
    Sono liste contenenti **IP non "autorizzati" ad inviare e-mail**.
    
    **Problematiche:** È difficile distinguere gli IP validi da quelli non validi, con il rischio di scartare email legittime e far passare spam. Alcuni criteri per selezionare IP sospetti sono: IP assegnati dinamicamente dai provider, IP che inviano email senza passare da un mail server ufficiale, IP segnalati come spammer dagli utenti.
    
- **SPF** (*Sender Policy Framework*):
    
    È uno standard che, tramite un **record TXT nel DNS**, dichiara quali **IP o nomi di dominio possono inviare mail per un determinato dominio**. Il mail server ricevente può verificare se il server mittente è autorizzato ad inviare mail.
    
    **Problematiche: Non tutti i domini implementano il record TXT**. L'implementazione può essere difficoltosa.
    
- **SpamAssassin:**
    
    È un demone che utilizza un sistema di filtri che cercando di "indovinare" se una mail è valida assegnandole un punteggio in base a vari aspetti (lingua della mail, presenza di tag HTML, presenza di parole chiave).
    
    In base al punteggio, può far passare l'email, segnalarla come spam, o scartarla.
    
    **Problematiche:** Richiede continui aggiustamenti e notevole esperienza per essere mantenuto.
    
- **Controlli MTA:**
    
    Un MTA può implementare controlli sfruttando il **formato del protocollo SMTP** per ridurre il flusso di spam.
    
    **Esempi in Postfix:**
    
    - `smtpd_helo_required = yes`: Controlla che il mittente inizi la comunicazione con il comando `ehlo`.
    - `smtpd_sender_restrictions`: Controlla chi, dopo essersi identificato con `ehlo`, può inviare email.
    - `smtpd_recipient_restrictions`: Effettua controlli sul destinatario.
- **AMAVIS:**
    
    È un **demone** che filtra i contenuti delle mail, gestendo trasferimento, elaborazione, codifica delle email interfacciandosi con altri sistemi di filtraggio come quelli che abbiamo visto precedentemente.
    
    Permette di rilevare virus, spam, contenuti vietati; bloccare, etichettare, reindirizzare email; mettere in quarantena o rilasciare messaggi; eliminare virus tramite antivirus esterni.



# File system distribuiti

Un **Filesystem Distribuito (DFS)** è un particolare tipo di file system che permette di memorizzare file su dispositivi di archiviazione distribuiti in una rete. Tramite un sistema client/server, i dati sono memorizzati su dispositivi remoti collegati in modo trasparente alla gerarchia dei file dell'utente. Un DFS deve gestire i file in modo concorrente e trasparente e può essere dotato di autenticazione e crittazione.
Un **File Server** è un host che ospita un DFS. Sui client è installata un'interfaccia che permette di interagire con il file server. Il file server controlla un insieme di dispositivi di archiviazione e agisce su di essi in base alle richieste dei client.

## **Caratteristiche DFS**

Le caratteristiche principali di un DFS includono:

- **Trasparenza:**
    
    La trasparenza fa sì che un DFS appaia all'utente come un normale filesystem centralizzato, nascondendo la complessità e la dispersione dei server e dei dispositivi sottostanti. L'interfaccia utente non dovrebbe distinguere tra file locali e remoti.
    
- **Prestazioni:**
Il modo più conveniente per misurare le prestazioni di un DFS è quantificare il tempo impiegato per soddisfare una richiesta. Nei sistemi convenzionali (non distribuiti), questo tempo è dato principalmente dall'accesso al disco locale e da una piccola quantità di elaborazione della CPU.
    
    Nei sistemi distribuiti, a questo si aggiunge il **ritardo dovuto alle comunicazioni di rete**. Le prestazioni di un DFS influenzano il suo livello di trasparenza, idealmente, un sistema distribuito dovrebbe avere una velocità paragonabile a quella di un sistema convenzionale.
    
- **Accesso Concorrente:**
Un filesystem distribuito deve gestire anche la modifica dei file. È fondamentale che **gli aggiornamenti operati da un client non interferiscano con gli accessi e le modifiche fatte da altri client**. Per questo motivo, sono necessari meccanismi di controllo della concorrenza e di *locking*.

Dal lato server le implementazioni possono variare, con il file server a volte eseguito su una singola macchina dedicata, mentre in altri casi il client può accedere simultaneamente a più file server. È anche possibile che la stessa macchina ospiti sia un file server che un client.

## Implementazioni

Vediamo varie implementazioni di DFS.

### **NFS (Network File System)**:

Presentato nella versione 2 nel 1985, è ora alla versione 4. È stato il **primo DFS ad essere sviluppato** ed è molto diffuso. NFS è un modello per integrare filesystem locali differenti, basato sull'idea che ogni host espone alla rete parte del suo filesystem locale. Può essere usato su gruppi eterogenei di computer, con OS diversi e hardware diversi.

NFS utilizza un ***remote access model*** in cui i client non sanno realmente dove si trovano i file, e i server mettono a disposizione una serie di operazioni che i client possono fare direttamente sui file del server. Si differenzia dal **modello upload/download** dove i client scaricano il file in locale, lo modificano e lo ricaricano sul server, il quale mantiene lo storico delle versioni.

Dalla versione 4:

- supporta server *stateful*, mantenendo lo stato delle operazioni, a differenza delle versioni precedenti dove era il client a doverlo fare.
- introdotto le ***Compound Operations*** (CP), che consistono in inserire più operazioni in una singola chiamata, migliorando così l’efficienza. La chiamata però non viene trattata come una transazione: se una operazione interna fallisce, le successive non vengono eseguite e viene ritornato un messaggio di errore senza che venga fatto un rollback.
- Utilizza il protocollo TCP (in precedenza UDP).
- Per il riconoscimento dell'utente, dalla versione 4 si usa una stringa arbitraria, come un username, oppure anche utilizzando sistemi esterni (prima era solo tramite indirizzo IP)

La sua configurazione avviene nel file `/etc/exports` e usa la seguente sintassi:

```bash
/percorso/cartella/condivisa     indirizzo_ip(opzioni)
/percorso/cartella/condivisa     hostname(opzioni)
/percorso/cartella/condivisa     rete(opzioni)

# Ad esempio:
/srv/nfs     192.168.100.0/24(rw,sync,no_subtree_check)
```

Per utilizzare un’area condivisa vi sono tre modalità:

1. effettuare un mount manuale della directory condivisa
2. effettuare il mount in `/etc/fstab` in modo che la directory venga montata all’avvio
3. Usare **automount**

**Automount** è un meccanismo implementato da vari sistemi UNIX per gestire il montaggio di filesystem remoti in modo dinamico, cioè montandolo solamente quando serve e smontandolo quando non serve più.

Il problema che automount mira a risolvere è che **non è consigliabile mantenere un file system remoto montato permanentemente su un sistema**. in caso di disconnessione con l’host remoto, il sistema si potrebbe bloccare mentre cerca di accedere a risorse non più raggiungibili, oppure in alcuni sistemi si può superare il limite massimo di mount.

**Funzionamento:**

- Quando un processo accede ad un file all'interno di un certo percorso gestito da un DFS, questo viene **montato all'istante**.
- Dopo un certo periodo di **inattività**, e dopo che tutti i file sotto quel punto di mount sono stati chiusi, il filesystem viene **smontato**.
- In Linux, il sistema automount è gestito direttamente dal kernel.
- La **tabella di corrispondenza tra percorso e locazione** del filesystem remoto, sono mantenute da un programma in user space chiamato **autofs**.

### **CIFS/SMB (Common Internet File System/Server Message Block)**

In generale, in un dominio **Active Directory** di Windows, esistono due tipologie di cartelle condivise  legate agli utenti del sistema:

- **Profili utente:** Possono risiedere direttamente sulla macchina locale (client), oppure sul server come *Roaming Profiles*. Con i *Roaming Profiles*, le impostazioni utente, i dati delle applicazioni, il desktop e i documenti vengono scaricati su tutti i client a cui l'utente si collega.
    
    I profili vengono scaricati/caricati dal server a ogni login/logout.
    
- **Home directory:** È una cartella personale destinata principalmente all'archiviazione di file e documenti dell'utente.

La condivisione dei file in Windows è gestita principalmente dal protocollo **CIFS (Common Internet File System)**.

**CIFS** è un protocollo standard che permette la condivisione di file e risorse all'interno di una LAN nata come versione migliorata del protocollo **SMB (Server Message Block)** di Microsoft.

Caratteristiche:

- **Integrità e concorrenza:** Permette l'accesso multiplo allo stesso file evitando conflitti tramite *file locking*.
- **Ottimizzazioni per connessioni lente**.
- **Sicurezza:** Supporta sia trasferimento anonimo che accesso autenticato e crittografato.
- **Performance e scalabilità:** migliori grazie all’integrazione diretta nel sistema operativo
- **Nomi file unicode:** Supporta varie codifiche.
- **Nomi file globali (UNC):** Gli utenti possono riferirsi ai file usando il formato UNC (Uniform Naming Convention) `\\server\share\percorso\file` senza dover necessariamente montare il filesystem remoto.

### SAMBA

**SAMBA** è un software per piattaforme Unix che permette di interagire con i sistemi Windows fornendo servizi di condivisione file e stampanti. Grazie a SAMBA, è possibile inserire una macchina Linux all'interno di un dominio Windows.

Le directory UNIX configurate come condivisibili tramite SAMBA appaiono agli utenti Windows come normali cartelle di rete. Gli utenti Unix possono accedere a queste condivisioni tramite la utility `smbclient`. La configurazione di Samba avviene modificando il file `/etc/smb.conf` (oppure `/etc/samba/smb.conf`).

Dalla versione 4, Samba è in grado di svolgere quasi tutte le funzioni di un Domain Controller (DC) e integrarsi con Active Directory (AD) di Windows Server. Risulta quindi uno strumento fondamentale per l'interconnessione tra domini Microsoft e tecnologie non Microsoft, offrendo servizi di condivisione di risorse di rete.

## Quota

Un problema fondamentale è che in un ambiente con molti utenti, spesso si verifica una competizione per l'uso delle risorse, in particolare lo **spazio di memorizzazione**.

Lo spazio di memorizzazione su sistemi come NAS o file server è generalmente **molto più costoso** rispetto a quello dei personal computer, a causa delle necessità di prestazioni elevate, affidabilità e disponibilità continua.

Di conseguenza, è necessario proteggersi dalla possibilità che qualche utente monopolizzi lo spazio di archiviazione.

Per risolvere questo problema, viene introdotto il concetto di **quota disco**, un limite oltre il quale uno specifico utente non può più occupare spazio.

In **Linux**, il sistema di gestione delle quote è integrato direttamente nel Kernel. Le utility per la gestione delle quote sono disponibili nel pacchetto `quota`. Quando le quote sono attive sul server, vengono automaticamente applicate anche alle operazioni sui filesystem esportati.

Una quota è definita da quattro quantità:

- La **soft quota** sul **numero di blocchi (spazio disco)**. Raggiungendo questo limite, l'utente riceve un avviso.
- La **hard quota** sul **numero di blocchi (spazio disco)**. Al raggiungimento di questo limite, ogni ulteriore tentativo di allocazione di spazio viene respinto.
- La **soft quota** sugli **inode (numero di file)**.
- La **hard quota** sugli **inode (numero di file)**.

È importante notare che la *soft quota* è sempre inferiore alla *hard quota*.

Per le *soft quota* è possibile impostare un **grace period**. Se un utente supera la *soft quota* e continua a farlo oltre questo periodo, ogni ulteriore allocazione di spazio verrà rifiutata, trasformando di fatto la *soft quota* in una *hard quota*.



# Backup

I dati, specialmente per le aziende, sono delle risorse molto importanti e per questo vanno impiegati dei sistemi per proteggerli, il **backup** è uno di questi.

I dati sono minacciati da varie situazioni come guasti hardware, bug nei software, errori umani o disastri naturali.

Il Backup consiste in una serie di operazioni per creare, mantenere, gestire e amministrare delle copie dei dati in modo da avere ridondanza dei dati nel caso una copia vada distrutta per qualche motivo.

L’operazione di estrazione dei dati da un backup si chiama ***restore***, ed è importante farla di tanto in tanto per verificare che il backup stia ancora funzionando correttamente.

Le copie dei dati devono essere effettuate su unità di storage diverse rispetto alle unità di storage che contengono i dati attualmente attivi.

Inoltre è importante effettuare anche il backup del backup per ulteriore ridondanza dei dati.

## Backup vecchio stile

Prima dell’avvento di NAS e SAN le unità di storage erano connesse direttamente al server e l’unico modo per fare backup era sfruttare la LAN tramite dei software client/server.

Questo approccio ha degli svantaggi:

- il backup consuma banda di rete
- i server consumano risorse per effettuare il backup
- la LAN può usare un traffico locale in chiaro non cifrato

## Backup con NAS e SAN

SAN (*Storage Area Network*) e NAS (*Network Attached Storage*) sono due sistemi che permettono di eseguire backup senza intasare la rete locale e senza consumare risorse di calcolo.

Una SAN è una rete separata dalla LAN ad alta velocità che collega server a dispositivi di storage a livello di blocco, come array di dischi.

Un NAS è un dispositivo di archiviazione collegato a una rete che consente a più utenti di memorizzare e condividere file.

## Tipi di backup

Vi sono tre tipologie di backup:

- **Completo**: effettua periodicamente una copia completa di **tutti i dati** da salvare. Ragionevole per piccole quantità di dati.
- **Incrementale**: effettua periodicamente una copia solamente dei dati modificati dall’orario in cui è stato effettuato l’ultimo backup. Il primo backup sarà completo, i successivi saranno incrementali. Ogni tanto però conviene ripartire da un backup completo.
    
    Il vantaggio di questo metodo è la **velocità di esecuzione** del backup. Lo svantaggio è che il ripristino di determinati file richiede l’analisi di più backup incrementali.
    
- **Differenziale**: similmente al metodo incrementale vengono salvati solo i file modificati dall’ultimo backup. Tuttavia, i backup sono cumulativi, cioè una volta che un file viene modificato viene automaticamente incluso in tutti i backup cumulativi successivi. Abbiamo quindi che ogni backup differenziale contiene tutti i file modificati dall’ultimo backup completo. In questo modo viene **facilitato il ripristino** in quanto si guarda solo l’ultimo backup completo e l’ultimo differenziale.



# Web, Apache e nginx

## Il web

Il **World Wide Web** (WWW, anche abbreviato in *web*) è un sistema che consente la condivisione di documenti ipertestuali (collegati da dei link) multimediali attraverso l'infrastruttura WAN della rete Internet.

Il Web si basa sul protocollo **HTTP (HyperText Transfer Protocol)** e poggia su un'architettura **Client/Server**.

### HTTP

La prima versione di HTTP (1.0) prevedeva che il client facesse una singola richiesta alla volta al server per una risorsa.

La versione HTTP 1.1 ha introdotto:

- la possibilità di effettuare più richieste per connessione
- connessioni permanenti
- richieste/risposte asincrone all'interno di queste connessioni.
- obbliga i client a specificare l'hostname desiderato nella richiesta, consentendo l'implementazione del **virtual hosting**, dove un server può ospitare più siti internet con nomi diversi ma allo stesso indirizzo IP.

Attualmente, si utilizzano **HTTP 2** (per oltre il 50%) e **HTTP 3** (usato nel 20%) che aggiungono varie migliorie.

## Web server

Un **WEB Server** è un'applicazione che gira su un host, capace di gestisce le richieste di trasferimento di pagine web verso un client.

La comunicazione tra server e client avviene tramite il protocollo HTTP (porta TCP 80) o la versione più sicura, HTTPS (porta TCP 443).

Esistono molti programmi che fungono da Web Server, e tutti sono in grado di fornire pagine web sotto forma di stream di caratteri, che il browser sarà poi in grado di interpretarle per renderizzare le pagine web.

Tra i vari web server è interessante approfondire:

- **Apache HTTP Server:** che fino a poco tempo fa era l'unico in grado di gestire applicazioni di vario tipo (php, python, java, ecc.) grazie alla sua tecnologia modulare.
- **Internet Information Services (IIS):** di Microsoft, specialmente per applicazioni .NET ma con supporto anche per altri linguaggi
- **nginx:** leggero, veloce per pagine statiche e dinamiche, può fungere da reverse proxy e load balancer. Diventato molto popolare negli ultimi anni.

Un approccio comune per configurare un server web è l'utilizzo dello stack **LAMP**, acronimo di Linux, Apache, MySQL e PHP, che rappresenta l'insieme dei programmi impiegati lato server.

## Apache

L'**Apache HTTP Server** è un **web server open source** in grado di operare sui principali sistemi operativi. 

La sua architettura è composta da un **demone** che, basandosi sul file di configurazione `httpd.conf` (o `apache.conf`), permette l'accesso a uno o più siti.

La sua architettura modulare permette che ogni richiesta del client attivi funzioni (organizzate in **moduli**) eseguite come unità indipendenti. Il **core** è un demone che orchestra i vari moduli eseguendo facendo *polling* per intercettare le richieste e passarle ai vari moduli.

Esempi di moduli possono essere, traduzione, controllo degli accessi, logging, identificare il MIME type, ecc…

**Apache 2.0** ha esteso la modularità introducendo i **moduli multi-processing (MPM)**. Questi moduli sono sostanzialmente dei processi che possono gestire le connessioni alle porte di rete, l'accettazione delle richieste, la gestione di più richieste contemporanee e fare altre operazioni.

I principali MPM sono:

- **mpm_prefork**: Avvia una serie di **processi** figlio per **gestire le richieste**, e ogni processo figlio serve una sola richiesta alla volta. È il più veloce per singole richieste ma può consumare molta RAM ed è adatto a moduli non thread-safe come vecchie versioni di PHP.
- **mpm_worker**: Utilizza i **thread** all'interno di processi figlio per gestire più facilmente le richieste concorrenti, richiedendo meno RAM. Tuttavia, non è adatto a moduli dinamici non thread-safe.
- **mpm_event**: Simile a `worker` ma utilizza un thread dedicato per gestire le connessioni attive, passando le richieste ai thread figlio solo quando necessario. È più performante di `worker` e meno esoso di `prefork`, ma anch'esso inadatto a moduli non thread-safe.

Per quanto riguarda la **configurazione** di Apache, la **DocumentRoot**, solitamente impostata su `/var/www/html`, determina la posizione dei file del sito web. La configurazione del modulo `mpm-prefork` si trova in `/etc/apache2/mods-available/mpm-prefork.conf`.

Apache supporta i **Virtual Host**, che permettono a un singolo server web di ospitare più domini.

## nginx

È un web server open source disponibile per i principali OS nato con l’obiettivo di essere più performante di Apache specialmente in situazioni con molte connessioni contemporanee.

Oltre ad agire come **web server** può essere utilizzato anche come:

- **reverse proxy**
- **proxy per connessioni TCP e UDP**
- **proxy per email**
- **bilanciatore di carico (load balancer)**

Proprio queste sue molteplici capacità e la facilità di installazione tramite Docker lo hanno reso estremamente popolare.

Per quanto riguarda la **configurazione**, i file principali di Nginx si trovano nella directory `/etc/nginx/`. Il file di configurazione principale è `nginx.conf`. Le varie impostazioni che puoi definire in questi file sono chiamate **direttive**. Una direttiva può essere **semplice**, se contiene un solo valore e termina con un punto e virgola:

```
worker_processes 1;
```

Oppure può essere **composta**, in questo caso viene chiamata ***server block* o contesto** e contiene una serie di direttive semplici racchiuse tra parentesi graffe:

```
server {
	 listen        80 default_server;
	 server_name   miosito.com www.miosito.com;
	 root          /var/www/miosito.com;
	 index         index.html;
	 try_files     $uri /index.html;
}
```

Una configurazione banale per eseguire nginx in background come utente `nginx`, in ascolto sulla porta 80 e che mostri i file statici che si trovano nella cartella `/var/www/html:`

```
user nginx;
worker_processes 1;
error_log nginx_error.log;
http {
	 server {
		  listen 80;
		  location / {
		 	   root /var/www/html;
		  }
	 }
}
```

### Virtual hosting

Il concetto di **server block** in Nginx è molto simile al **virtual hosting di Apache**. Questo significa che puoi ospitare più siti web sullo stesso server Nginx.

Un modo per farlo è definire **più server blocks all'interno dello stesso file** `nginx.conf`. Ad esempio, avere un blocco per `sito1.com` e un altro per `sitoN.com`, ognuno con la sua radice dei documenti, i suoi log, ecc...

Un approccio più pulito è quello di **creare dei file separati** per ogni sito nella directory `/etc/nginx/sites-available/`, e poi **abilitarli** creando dei **link simbolici** a questi file all'interno della directory `/etc/nginx/sites-enable/`.

### Reverse proxy

Una delle funzionalità più sfruttate di Nginx è quella di **reverse proxy**. Un reverse proxy è un server che si frappone tra i client e i server interni. I client inviano richieste al reverse proxy che a sua volta si occupa di inoltrarle al server giusto, recupera la risposta e la rimanda indietro al client.

Questo è utile in diverse situazioni:

- quando le risorse di un sito sito sono distribuite su più server ma vuoi che gli utenti accedano tramite un unico indirizzo web;
- come **load balancer**, per distribuire il traffico tra più server che offrono lo stesso servizio;
- per aggiungere funzionalità a delle applicazioni esistenti, come ad esempio il **supporto a HTTPS** per applicazioni che non lo gestiscono nativamente.

Il bilanciamento del carico serve a **distribuire il traffico** su più server per sfruttare al meglio le risorse, aumentare la velocità del servizio web, ridurre i tempi di attesa e renderlo più resistente ai guasti. Nginx supporta **tre modalità principali** di bilanciamento del carico:

- **Round-robin**: le richieste vengono distribuite ai server in sequenza, uno dopo l'altro. Non garantisce la persistenza delle sessioni
- **Least-connected**: ogni nuova richiesta viene inviata al server che in quel momento ha il minor numero di connessioni attive. Non garantisce la persistenza delle sessioni
- **Ip-hash**: viene utilizzata una funzione hash che mappa IP del client con l’id del server per decidere quale server dovrà gestire la sua richiesta. In questo modo le richieste provenienti dallo stesso client vengano sempre indirizzate allo stesso server, garantendo le persistenza delle sessioni.

Infine, Nginx ha anche un sistema di **monitoraggio passivo** dei server. Se un server non risponde correttamente, viene temporaneamente escluso dal bilanciamento del carico.

## SSL/TLS

Specialmente per applicazioni che richiedono autenticazione e trasmettono dati sensibili è importante implementare dei meccanismi di crittografia. Sebbene non offra una protezione totale, rende più difficile violare il sistema.

**Transport Layer Security (TLS)** e il suo predecessore **Secure Sockets Layer (SSL)** sono protocolli crittografici utilizzati per stabilire una comunicazione sicura end-to-end su reti TCP/IP. Questi protocolli forniscono **autenticazione**, **identità** (tramite certificati), **integrità dei dati** e **cifratura**, operando al di sopra del livello di trasporto.

Alcuni esempi di implementazione di SSL/TLS sono HTTPS, SMTPS, POP3S, IMAPS.

**OpenSSL** è una famosa implementazione open source dei protocolli SSL/TLS. La libreria principale è scritta in C e implementa funzioni di crittografia basilari, fornendo strumenti per funzionalità avanzate  ed è utilizzato da circa il 70% dei server della rete.

OpenSSL permette l'utilizzo sia di certificati rilasciati da *Certification Authority* (CA) valide, sia di certificati autogenerati. In caso di certificati autogenerati, i browser potrebbero avvertire l'utente che il certificato potrebbe non essere sicuro. Un'alternativa per ottenere certificati validi senza costi elevati è **Let's Encrypt**.



# Database server

Un **database** è una raccolta di dati, anche eterogenei, che possono essere interrogati e messi in relazione tra loro. Un **DBMS** (DataBase Management System) è il software che si occupa di gestire i database e fa da intermediario tra gli utenti (e le applicazioni) e i database. Inoltre definisce gli utenti e gli amministratori che accedono ai dati e fornisce meccanismi di sicurezza, protezione e controllo dell'integrità dei dati.

Nella gestione di un database sono solitamente coinvolte le seguenti figure:

- **DBA (DataBase Administrator)**: gestisce gli accessi, predispone tabelle, indici, viste, ottimizza lo spazio disco ed effettua backup e restore.
    
    La persona che ricopre questo ruolo deve conoscere i rudimenti del linguaggio SQL e i DBMS più diffusi, assicurare i backup e l'integrità dei vari DBMS, suggerirne la ridondanza e capire quale DBMS sia più adatto a una specifica applicazione, tenendo conto delle licenze aziendali pre-esistenti.
    
- **Programmatori**: scrivono applicazioni che utilizzano i dati del DB.
- **Utenti finali**: utilizzano le applicazioni per interrogare il DB.
- **Sistemisti**: verificano il corretto funzionamento dei sistemi hardware e software su cui gira il DBMS. Spesso questo ruolo coincide con il DBA.

## DBMS

Tra i più diffusi DBMS open source troviamo

- **MySQL (MariaDB)**
- **PostgreSQL**
- SQLite
- Firebird

Tra i DBMS commerciali più diffusi si trovano:

- **Oracle**
- **MS SQL Server**
- Sybase
- **MS Access**

tutti questi **DBMS** sono **relazionali basati su SQL (RDBMS**), ma vi sono anche DBMS non relazionali che non usano SQL.

### MySQL

**MySQL**: È un **RDBMS** composto da un client a riga di comando e un server, scritto in C e C++. È disponibile su numerosi sistemi operativi e si interfaccia con diversi linguaggi di programmazione come Java, .NET, PHP, Python, C#. È considerato più adatto ad applicazioni non intensive, con prestazioni che possono peggiorare con query su milioni di record e in termini di sicurezza. Il suo sistema di gestione più comune è **phpmyadmin,** un’interfaccia realizzata in php che permette di effettuare operazioni anche complesse con il database.

Da scegliere: per blog, siti web, piccoli forum e applicazioni di medie dimensioni.

### **PostgreSQL**

Probabilmente il DBMS open source più avanzato, paragonabile a Oracle. È un **ORDBMS** (Object Relational DataBase Management System) che supporta un modello di database *Object Oriented* e permette l'estensione tipi di dato e metodi personalizzati. Scritto in C/C++ e basato su un'architettura Client/Server, è supportato dai maggiori sistemi operativi. Viene utilizzato per applicazioni web, realtime, e sistemi di data warehousing. Supporta gli stessi linguaggi di programmazione di MySQL. È considerato molto sicuro, e più veloce di MySQL. I suoi sistemi di gestione includono **phppgAdmin, pgAdmin3 e HeidiSQL**.

Da scegliere: per chi necessita di un database relazionale serio ma non ha un budget elevato.

### **Oracle**

È un **ORDBMS** come PostgreSQL, basato su un'architettura Client/Server. Dalla versione 10g ha introdotto il concetto di **grid computing**, vedendo il DBMS come una griglia di risorse per migliorare scalabilità e condivisione. Le ultime versioni introducono miglioramenti di performance e nuove funzionalità, ma mantiene ancora vari bug di sicurezza. È disponibile per Windows e Linux e ha un sistema di gestione sviluppato in Java servlet. Esiste una versione *express* gratuita, incompleta, poco supportata e senza bugfix, adatta solo per lo sviluppo.

Da scegliere: per grandi aziende con gestionali (come SAP) e applicazioni pesanti.

### **MS SQL Server**

È il database relazionale di Microsoft, un RDBMS inizialmente utilizzato per basi dati medio-piccole, ma adatto anche a grandi dimensioni dalla versione 2000. Dalla versione 2017 è disponibile per Windows, Linux e Docker. Si interfaccia con i maggiori linguaggi di programmazione Microsoft, ma esistono anche driver per Java, C, PHP. Esiste una versione COMPACT per piccole applicazioni e sviluppo. **MS SQL Server Management Studio** è il sistema di gestione del DBMS. Esiste una versione *express* gratuita per studenti e sviluppatori.

Da scegliere: in ambienti Windows con applicazioni di terze parti che lo richiedono esplicitamente.



# Server di stampa

Un **server di stampa** permette la **gestione centralizzata di una o più stampanti di rete e non**.

Un server di stampa è un host che gestisce le code di stampa di una o più stampanti ad esso collegate. Le **stampanti di rete** moderne possono essere già considerate delle **print server per se stesse**, in quanto offrono il proprio servizio di stampa tramite diverse modalità di accesso come:

- **Web Printing**: permette di inviare documenti alla stampante tramite un'interfaccia web.
- **IPP (Internet Printing Protocol)**: protocollo che consente la stampa su rete e anche via Internet, con supporto per autenticazione e gestione code.
- **LPD (Line Printer Daemon)**: usato soprattutto in ambienti Unix/Linux per inviare file alla stampante.
- **NetBIOS**: usato principalmente nei sistemi Windows per condividere risorse (tra cui stampanti) all'interno di reti locali.

Tuttavia, quando si hanno più stampanti di rete, è consigliabile la gestione tramite un host dedicato chiamato **printer server**. Il printer server può essere collegato alle stampanti **direttamente** (tramite USB/Parallela/Seriale, quando la stampante è molto vicina al server) oppure **via rete** (se la stampante è dotata di un modulo di rete e si trova in una zona più distante, come un'altra stanza, piano o edificio).

Diversi sistemi operativi offrono funzionalità integrate di print server:

- **Linux/OS X**: il server di stampa è gestito interamente dal sistema **CUPS (Common UNIX Printing System)**, successore di LPD e pienamente compatibile con esso. Viene configurato nel file  `/etc/cups/cupsd.conf` o tramite interfaccia web all’indirizzo `http://localhost:631/admin`
- **Windows**: il sistema di **condivisione file e stampanti** permette una gestione semplice di una o più stampanti condivise.
- **Windows Server**: include un vero e proprio **printer server** che gestisce le varie stampanti connesse. Per attivarlo è necessario aprire Server Manager e installare il servizio **Print Service**; il sistema si occuperà di installare eventuali servizi dipendenti.



# Firewall

Un firewall è un sistema di sicurezza di rete che monitora e controlla il traffico in entrata e in uscita decidendo le azioni da intraprendere (accettare o scartare) in base a regole di sicurezza (*policy*).

Nello specifico, verifica i pacchetti in transito attraverso l'**IP filtering**, può effettuare il **mascheramento degli indirizzi interni (NAT)** e **blocca i pacchetti pericolosi e/o non ammessi** dalle policy.

I firewall permettono diversi tipi di controllo:

- **Controllo dei servizi**: può bloccare o permettere l'accesso a determinati **servizi di rete** (navigazione web, email) sia per il traffico in entrata che in uscita.
- **Controllo della direzione**: Serve a definire **da dove a dove** può viaggiare il traffico. Ad esempio, permettere richieste in uscita per la navigazione web, ma bloccare connessioni in entrata dall’esterno, che potrebbero essere pericolose.
- **Controllo utente**: regolano l'accesso a un servizio basandosi sull'utente che ha effettuato la richiesta.
- **Controllo del comportamento**: permettono di controllare come vengono utilizzati certi servizi, come ad esempio il filtraggio dello spam.

## Classificazione

I firewall si possono classificare in vari modi. Una prima suddivisione è tra firewall **hardware** e firewall **software:**

1. I **firewall hardware** si presentano come dispositivi fisici, simili a degli switch, che possono montare più schede di rete e spesso hanno un sistema operativo dedicato.
2. I **firewall software**, invece, sono programmi che utilizzano l'hardware di un PC o server su cui sono installati, appoggiandosi su un sistema operativo preesistente. Esempi noti includono Windows Firewall, Iptables (per Linux).

Un altro modo per classificare i firewall si basa sulle loro **politiche di protezione (policy) di default**. Esistono due policy principali:

1. il firewall **blocca tutto il traffico di default**, e ogni servizio che si vuole abilitare deve essere configurato esplicitamente. Questo approccio offre maggiore sicurezza perché blocca nuove minacce sul nascere, ma può essere **più oneroso da gestire e limita il numero di servizi** disponibili all'utente, richiedendo elasticità.
2. Il firewall **inoltra tutto il traffico di default**, e solo i servizi dannosi devono essere esplicitamente esclusi. Questo approccio offre **minor sicurezza** perché permette qualsiasi nuovo protocollo senza controllo ed è **più difficile garantire la sicurezza** all'aumentare della dimensione della rete.

Una ulteriore classificazione si basa sulla **tipologia** del firewall, distinguendo in base al **livello dello stack TCP/IP** in cui operano. Le due tipologie principali sono:

- **Packet filtering**: Operano al **livello di rete**. Vengono installati a monte della rete protetta e bloccano o inoltrano i pacchetti IP basandosi sulla lettura degli **Header IP** e su regole predefinite. In particolare possono utilizzare come parametri indirizzi sorgente/destinazione, protocollo di trasporto, numeri di porta e flag TCP (SYN, ACK) per filtrare i pacchetti.
    - I *firewall packet filter* possono essere **Stateless** o **Stateful**.
        
        Uno **Stateless firewall** osserva il traffico e blocca i pacchetti singolarmente basandosi solo su indirizzi, porte o altri valori, senza tenere dello stato delle connessioni TCP.
        
        Un **Stateful firewall**, invece è a conoscenza dello **stato di una connessione TCP** (aperta, stabilita, invalida ecc.). Considera il traffico come uno scambio bidirezionale che costituisce una **sessione di conversazione**, all’interno di questa sessione il firewall può generare dinamicamente regole per i pacchetti successivi.
        
- **Circuit/Application Gateway**: Operano al **livello trasporto/applicazione**. Filtrano il traffico leggendo gli header TCP/UDP e sfruttando quindi la conoscenza del servizio specifico.
    - Un esempio è il **Proxy Server**. I proxy server sono applicazioni software che mediano il traffico tra la rete esterna e quella interna, consentendo l'accesso a servizi specifici (HTTP, HTTPS, FTP, ecc.) e regolando l'accesso tramite liste di controllo accessi (ACL).

## Limiti

Un firewall è un applicatore di regole, quindi è tanto importante quanto le regole che gli vengono imposte. Inoltre, controlla solo il traffico che lo attraversa, non può agire contro intrusioni che avvengono all'interno della rete, né può fare nulla se il traffico dall'esterno arriva attraverso un percorso non controllato dal firewall. Essendo una macchina, un firewall può essere violato, diventare obsoleto e, idealmente, dovrebbe svolgere solo la funzione di firewall ed essere la macchina più protetta della rete.

## Iptables

Iptables è un firewall implementato a livello kernel in Linux in grado di fornire una protezione tramite il **filtraggio del traffico di rete**, basandosi sulla definizione di **regole**. Può essere utilizzato per realizzare sia **firewall di rete** (proteggendo intere sottoreti) che **firewall locali** all'interno di server specifici che erogano servizi.

La sua struttura si basa su un meccanismo di **regole** organizzate in **catene** (*chains*). Le catene di default esistenti sono:

- **INPUT**: gestisce i pacchetti in entrata destinati al sistema locale.
- **OUTPUT**: gestisce i pacchetti in uscita generati dal sistema locale.
- **FORWARD**: gestisce i pacchetti che attraversano il sistema e sono diretti verso un altro host della rete (il sistema agisce come un router).
- **PREROUTING**: lavora sui pacchetti in entrata *prima* che vengano instradati (nel sistema locale o altrove).
- **POSTROUTING**: lavora sui pacchetti in uscita *dopo* che è stato deciso il loro instradamento.

Ogni catena appartiene a una **tabella**. Le tabelle principali sono:

- **Filter**: contiene le regole per il **filtraggio** dei pacchetti. Le catene associate sono INPUT, OUTPUT, FORWARD.
- **Nat**: contiene le regole per l'**instradamento** dei pacchetti, specificamente per manipolare gli indirizzi (NAT). Le catene associate sono OUTPUT, PREROUTING, POSTROUTING.
- **Mangle**: utilizzata raramente, serve per **modificare le opzioni** dei pacchetti "al volo", alterando header IP o TCP.

![](https://i.ibb.co/j9sXQ0G6/esempio-chain.png)

La **logica di attraversamento** dei pacchetti nel kernel, segue sequenze precise a seconda del percorso che il pacchetto deve intraprendere:

1. Pacchetti **destinati** al **sistema locale**:
    1. interfaccia di rete
    2. PREROUTING
    3. INPUT
    4. applicazione
2. Pacchetti in **uscita** dal **sistema locale**:
    1. applicazione
    2. OUTPUT
    3. POSTROUTING
    4. interfaccia di rete
3. Pacchetti che attraversano il firewall:
    1. interfaccia di rete
    2. PREROUTING
    3. FORWARD
    4. POSTROUTING
    5. interfaccia di rete

Un esempio di Iptables è il seguente in cui blocchiamo tutto tranne SSH e il traffico interno.

```bash
$IPTABLES -P INPUT DROP
$IPTABLES -A INPUT -i lo -j ACCEPT
$IPTABLES -A INPUT -p tcp --dport 22 -j ACCEPT
```

- la prima riga imposta la **politica predefinita** della catena `INPUT` su **DROP** in questo modo qualsiasi pacchetto in ingresso che **non corrisponde a una regola esplicita** sarà **scartato**.
- la seconda riga consente il traffico interno tra processi sulla stessa macchina.
    - `-A INPUT`: fa l’append di una regola alla catena `INPUT`.
    - `-i lo`: applica la regola solo all’interfaccia di loopback, cioè localhost.
    - `-j ACCEPT`: l'azione da compiere è **accettare** i pacchetti.
- la terza riga permette connessioni SSH in ingresso
    - `-p tcp`: la regola vale solo per il **protocollo TCP**.
    - `--dport 22`: filtra i pacchetti destinati alla **porta 22** (**SSH**).
    - `-j ACCEPT`: l'azione da compiere è **accettare** i pacchetti.

IPTABLES implementa è in grado di implementare firewall **Stateless** e **Stateful**. L’esempio precedente è un firewall *stateless* poiché momento che si avvia lo script tutte le connessioni pre-esistenti vengono troncate (anche SHH).

Il firewall **Stateful** è reso possibile dal **modulo CONNTRACK**, che classifica i pacchetti in stati come **NEW** (nuova connessione), **ESTABLISHED** (pacchetto che fa parte di una connessione tracciata), **RELATED** (non parte di un flusso, ma atteso da un socket esistente), e **INVALID** (nessuno stato applicabile, spesso pacchetti fraudolenti o inaspettati).

Un aspetto importante è l’**ordine in cui le regole sono inserite**. Quando un pacchetto arriva, IPTABLES scorre le regole in sequenza ed esegue la prima regola che corrisponde al pacchetto, ignorando le successive.

## NAT

Il **NAT (Network Address Translation)** è una funzionalità che permette di manipolare un pacchetto IP **modificando l'indirizzo IP sorgente o di destinazione** in esso contenuto. Il dispositivo che esegue il NAT, al ricevimento del pacchetto di ritorno, esegue l'operazione inversa, mantenendo una **tabella di natting** in memoria per questo scopo.

Le modalità principali di NAT sono due:

1. **SNAT (Source NAT)**: Consiste nell'**alterazione dell'IP sorgente** del primo pacchetto che apre una connessione. Avviene sempre **dopo che il pacchetto ha subito il routing**, e per questo motivo le regole SNAT sono tipicamente inserite nella catena **POSTROUTING**. Viene utilizzato quando si vuole che le connessioni originate da una rete interna presentino verso l'esterno un indirizzo diverso. 
2. **DNAT (Destination NAT)**: Consiste nell'**alterazione dell'IP di destinazione** del primo pacchetto che apre una connessione. Avviene **prima che il pacchetto subisca il routing**, ed è quindi implementato nella catena **PREROUTING**. Viene utilizzato per ridirezionare le connessioni in ingresso verso indirizzi IP diversi da quelli originali.

Per gestire le regole NAT tramite il comando `iptables`, si utilizza sempre l'opzione `-t nat` seguita dal comando desiderato (es. `-L` per listare, `-F` per cancellare, `-A` per appendere, `-Z` per azzerare i contatori). L'ordine delle regole è importante anche nella tabella `nat`.

![](https://i.imgur.com/aDScXjD.png)

## VPN

Una **VPN** (*Virtual Private Network*), letteralmente **Rete Privata Virtuale**, è pensata per permettere ai dipendenti delle aziende di **accedere in modo sicuro alle risorse all'interno dell'azienda** pur trovandosi al di fuori della rete aziendale.

Il suo funzionamento si basa sulla creazione di un **tunnel virtuale cifrato** tra un host esterno e un server di proprietà del fornitore del servizio VPN. Tutto il traffico transita in modo **criptato dal computer client al server VPN**. Da lì, il traffico può uscire "normalmente" attraverso la rete aziendale.



# Docker

Docker è un software open source nato con l'obiettivo di automatizzare e semplificare la distribuzione delle applicazioni grazie al meccanismo dei **container e delle immagini**. 

- Una **immagine**: Una sorta di file system minimale strutturato a *layer* contenente l’eseguibile, le dipendenze e librerie che necessita l’applicazione per funzionare.
- Un **container** può essere considerato come uno o più processi isolati dal sistema che rappresentano una immagine in esecuzione.

Usando un'analogia OOP, possiamo pensare all'immagine come a una classe contenente tutti i dati necessari all'applicazione. Mentre il Container è l'istanza di quella immagine che eseguirà l'applicazione.

Ogni container avviato è identificato da un **ID alfanumerico** e da un nome (assegnato automaticamente o manualmente). Per interagire con un container, si fa riferimento al suo ID o nome.  L'ID e il nome (se assegnato automaticamente) cambiano a ogni riavvio del container, quindi assegnare un nome manualmente garantisce di avere un riferimento stabile.

## Proprietà

I container:

- Sono **autosufficienti** perché includono già tutte le dipendenze dell'applicazione e non richiedono configurazioni particolari sull'host.
- Sono **portabili** perché sono distribuiti in un formato standard che può essere letto ed eseguito da qualsiasi server Docker.
- Sono **leggeri** perché, a differenza delle macchine virtuali (VM) che richiedono un kernel virtualizzato, sfruttano i servizi direttamente dal kernel del sistema operativo ospitante. Questo consente di ospitare un gran numero di container sulla stessa macchina fisica e offre ottime prestazioni.

In un ambiente containerizzato, il **kernel del sistema operativo ospitante** si occupa della gestione delle risorse e dell'isolamento, funzioni che nelle VM sono a carico dell'Hypervisor (un ulteriore strato software).

In particolare Docker sfrutta due funzionalità del kernel Linux: **Control Groups (cgroups)** e **Namespaces**.

### Control Groups

I **Control Groups** sono lo strumento del kernel Linux che gestisce l'utilizzo delle **risorse** da parte di gruppi di processi. Grazie a questo strumento è possibile limitare la quantità di risorse utilizzate da specifici processi, come ad esempio la memoria RAM massima allocabile. Docker sfrutta questo strumento per implementare i limiti di risorse configurabili per i container.

### Namespaces

I **Namespaces** sono lo strumento del kernel Linux che implementano l'**isolamento**. I processi che fanno parte di un certo *namespace* possono accedere solo alle risorse presenti in quel *namespace*. 

Per ciascun container, Docker crea un gruppo di *namespace* dedicati, associando i processi del container a quel gruppo. Questo impedisce ai processi del container di accedere direttamente alle risorse della macchina ospitante o di altri container.

## Immagini

Le immagini sono spesso disponibili in **repository**, che contengono varie versioni di una stessa immagine, le diverse versioni sono identificate da un **tag**. per riferirsi a un'immagine specifica si usa la sintassi `repository:tag`, se il tag non viene specificato viene usato di default il tag `latest`.

Quando si cerca di avviare un container, se l'immagine relativa non è presente localmente, Docker la scarica automaticamente dal repository predefinito.

Una caratteristica particolare delle immagini è la loro **stratificazione in layer**. Ogni layer contribuisce alla definizione del filesystem del container. Questi layer sono **immutabili** (in sola lettura), il che  permette a diverse immagini di **condividere layer comuni**, risparmiando spazio su disco.

Quando Docker crea un container da un'immagine, viene creato un ulteriore **layer scrivibile** in cima a tutti gli altri, chiamato *layer container*. Tutte le modifiche fatte all'interno del container (come la creazione di file) vengono memorizzate in questo layer, che viene distrutto quando il container viene spento.

## Isolamento dei container

L'**isolamento** dei container si manifesta a diversi livelli:

- **Filesystem:** Ogni container ha un filesystem isolato dall'host e dagli altri container. Per salvare dati generati all'interno di un container, è necessario usare i **data volume**, che creano un "ponte"  mappando una directory sull'host a una directory all'interno del container.
- **Processi:** Ogni container vede solo i propri processi. Non conosce i processi dell'host o di altri container.
- **Rete:** Anche la rete è (quasi del tutto) isolata. Per rendere accessibile un servizio dall'esterno, è necessario mappare una porta della macchina ospitante alla porta su cui il servizio è in ascolto all'interno del container. L'indirizzo IP a cui collegarsi dall'esterno sarà l'indirizzo IP dell'host.

## Dockerfile

Un **Dockerfile** è un file di testo che serve a descrivere le personalizzazioni da apportare a immagini base per creare una nuova immagine adatta allo scopo desiderato. Possiamo pensare che sia il codice sorgente di una immagine. Il Dockerfile viene dato in pasto all'engine Docker, che lo **valida e genera una nuova immagine**.

All'interno di un Dockerfile, troviamo diverse istruzioni, tra le più importanti ci sono:

- `FROM`: Specifica l'immagine di base da cui partire per costruire la nuova immagine personalizzata.
    
    es. `FROM ubuntu:latest`
    
- `ENV`: Permette di impostare variabili d'ambiente valide per l'intero contesto di esecuzione del Dockerfile. La sintassi è `ENV <chiave>=<valore>`, per riferirsi successivamente alla variabile si antepone `$` al suo nome.
    
    es. `ENV WWW_HOME='/var/www/'`
    
- `RUN`: Utilizzata per eseguire comandi all'interno dell'immagine durante il processo di costruzione. È importante notare che ogni istruzione ****`RUN` ****crea un nuovo layer nell'immagine. Per questo motivo, è consigliabile riunire più comandi correlati all'interno di una singola istruzione `RUN`, concatenandoli con `&&`.
    
    es.
    
    ```docker
    FROM ubuntu:latest
    ENV DA_INSTALLARE='vim apache2'
    RUN apt install $DA_INSTALLARE
    ```
    
- `ADD`/`COPY`: Servono a spostare file e directory dal "build context" (la directory sul computer locale contenente il Dockerfile) all'interno del filesystem dell'immagine.
    
    es. `COPY *.txt /docs`
    
- `ENTRYPOINT`: Definisce il comando che viene eseguito non appena il container si avvia. Si differenzia da `RUN` perché agisce sul container durante l’esecuzione e non crea un nuovo layer.
    
    es. `ENTRYPOINT vsftpd`
    
- `CMD`: Permette anch'essa di eseguire un comando all'avvio del container. Ha un comportamento diverso a seconda che ****`ENTRYPOINT` sia presente o meno.
    - Se `ENTRYPOINT` non c'è, `CMD` definisce il comando shell da eseguire all'avvio. Questo comando può essere sovrascritto specificando un comando diverso nel `docker run`.
    - Se `ENTRYPOINT` è presente, `CMD` ha il compito di fornire i parametri di default al comando specificato in `ENTRYPOINT`. In questo caso, il comando definito in `ENTRYPOINT` non è sovrascrivibile facilmente da `docker run`, mentre i parametri in `CMD` lo sono. È ammessa una sola istruzione `CMD` in un Dockerfile.
    
    es. 
    
    ```docker
    ENTRYPOINT du
    CMD [“-hs”]
    ```
    
- `WORKDIR`: Viene usata per impostare la directory di lavoro predefinita all'interno del container, che sarà il punto di partenza per le successive istruzioni (`RUN`, `CMD`, `ENTRYPOINT`, ...). Si possono usare path assoluti o relativi. Se non specificata, la directory di default è `/`.
    
    es. `WORKDIR /usr`
    
- `LABEL`: Permette di aggiungere metadati all'immagine, come autore, versione o descrizione come coppie chiave-valore.
    
    es. `LABEL VERSION=”1.0.0” MAINTAINER=”gg76”`
    
- `EXPOSE`: Dichiara su quali porte il container resterà in ascolto. Indica a Docker che, in fase di avvio del container, sarà necessario effettuare il *port forwarding*.
    
    es. `EXPOSE 80 443`
    
- `VOLUME`: Permette di specificare un punto di mount all'interno del filesystem del container che dovrebbe essere gestito come un volume. Questo facilita la **comunicazione tra il filesystem dell'host e quello del container** e la persistenza dei dati.
    
    es. `VOLUME ["/var/www"]`
    

Per creare un'immagine da un Dockerfile, si usa il comando `docker build [opzioni] <build context>`. Il `<build context>` indica all'engine la directory di riferimento, spesso è indicato con la directory corrente (`.`). Il build context è fondamentale per risolvere i path relativi usati in istruzioni come `COPY` o `ADD`.

## Docker compose

Quando un'applicazione è composta da **più container** (ad esempio una applicazione full stack), può risultare utile utilizzare **Docker Compose**.

Docker Compose è uno strumento progettato per la definizione e l'esecuzione di applicazioni Docker multi-container.

Si utilizza un **file YAML** (spesso chiamato `docker-compose.yml`) per specificare le immagini, i volumi e tutte le altre configurazioni che compongono l'applicazione.

esempio di `docker-compose.yml`:

```yaml
version: "3.8"
services:
	 web:
		 build: .
		 ports:
		 - "5000:5000"
		 volumes:
		 - .:/code
		 - logvolume01:/var/log
		 links:
		 - redis
	 redis:
		 image: redis
volumes:
	 logvolume01: {}
```

definisce due immagini, di cui la prima viene definita in un dockerfile presente nella stessa directory (lo si nota dal comando `build`) e la seconda è Redis.

Grazie a questo file, con un singolo comando si può eseguire l’intero stack dell’applicazione senza dover avviare manualmente tutti i container che compongono l’applicazione.

## Gestire i container

I repository che contengono le immagini con le loro versioni sono disponibili in dei registri online come Docker Hub o Github Container Registry.

Per impostazione predefinita, Docker si collega a **Docker Hub**, un registro centralizzato gestito dalla società Docker, da cui è possibile scaricare la maggior parte delle immagini, e in cui chiunque può caricare le proprie immagini.

È possibile cercare le immagini disponibili su Docker Hub utilizzando il comando `docker search <nome_immagine>`. L'output di questo comando mostra diverse immagini con varie informazioni. Se si desidera scaricare esplicitamente un'immagine, si usa il comando `docker pull <nome_immagine>`.

Per gestire container e immagini, si utilizzano diversi comandi. La sintassi generale è

```bash
docker [opzioni] [comando] [argomenti]
```

Ad esempio, per avviare un container da un'immagine si usa `docker run <immagine>`, con opzioni come `-it` per la modalità interattiva, `-d` per la modalità *detached* (cioè eseguito in background), o `--name` per assegnare un nome al container. Si possono elencare le immagini scaricate con `docker images` e i container (in esecuzione) con `docker ps`. È anche possibile avviare (`docker start`), fermare (`docker stop`) o rimuovere (`docker rm`) i container specificando il loro ID o nome.

## Portainer

Per facilitare la gestione di Docker, esiste uno strumento open source con interfaccia grafica chiamato **Portainer**. Portainer permette di amministrare container, immagini, network e volumi tramite una dashboard visuale.




