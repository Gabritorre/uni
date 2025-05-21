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
