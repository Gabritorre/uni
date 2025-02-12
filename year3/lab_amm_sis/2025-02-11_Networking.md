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

Costituito da almeno due fino ad un massimo di 8 sottili fili
di rame intrecciati. La categoria del cavo (5/5a/6a/7..) definisce la banda
massima garantita e la qualità di isolamento per le interferenze.

### Fibra

Un sistema di trasmissione su fibra ottica consiste di una sorgente luminosa, del mezzo di trasmissione e di un ricevitore; la sorgente luminosa converte segnali elettrici in impulsi per poi riconvertirli in segnali elettrici alla fine del tragitto.

### Wi-Fi

Le reti wifi usano l’etere (l'aria come mezzo di propagazione i fenomeni elettromagnetici) come mezzo trasmissivo per permettere di creare una rete senza utilizzo di cavi.

Si utilizza un **access point**, collegato fisicamente alla rete via cavo, che comunica con gli utenti attraverso segnali radio.

Ha bisogno di sistemi di sicurezza e autenticazione elevati perché chiunque può agganciarsi alla rete

### Li-Fi

Li-Fi (*Light Fidelity*) è il corrispondente ottico del Wi-Fi (che usa trasmissioni radio). La differenza sta nel fatto che le frequenze occupate appartengono allo spettro della luce visibile.

Si basa sull’invio di dati attraverso la luce alterando la frequenza della luce come se fossero lampadine a LED che lampeggiano e trasmettono dati, in modo che un foto-ricevitore possa stabilire una connessione wireless.

È una connessione ottica a corto raggio, tipicamente a meno di 4 metri di distanza

## Networking

Le reti possono essere classificate in tre categorie a seconda della loro estensione fisica: 

- LAN: *Local Area Network*, identifica una rete costituita da un numero relativamente basso di computer collegati tra loro
- MAN: *Metropolitan Area Network*, è una rete dati che interconnette un'area corrispondente a quella di una grande città
- WAN: *Wide Area Network*: indica in generale una rete di grande estensione, e a cui in genere si fa riferimento per indicare la struttura che connette varie reti locali, estendendosi potenzialmente su tutto il mondo

## TCP/IP

Tutte le moderne reti si basano sullo stack **TCP/IP** che altro non è che un insieme di **protocolli**, cioè delle regole che delineano il formato dei messaggi che deve essere utilizzato nella comunicazione tra due sistemi.

Lo stack TCP/IP è costruito su un **modello a strati o livelli**, in cui le informazioni si fanno strada da un’applicazione su un host ad un’applicazione su un altro host attraverso incapsulamenti trasparenti all’applicazione.

In una rete TCP/IP ogni host è identificato da un **indirizzo IP univoco** all’interno di essa.

## Dispositivi di networking

Vediamo i principali dispositivi nel mondo del networking:

- **scheda di rete**: è l’interfaccia che permette di collegare un host alla rete. Ogni scheda è dotata di un identificativo chiamato *MAC address*
- **hub**: inoltra i pacchetti su tutte le porte, la velocità viene condivisa e si presentano collisioni.
- **switch**: mantiene una tabella di corrispondenza tra porte e MAC address delle schede di rete ad  esse collegate. In tal modo instrada i pacchetti direttamente alla scheda di rete corretta, evitando collisioni e garantendo sempre la velocità massima
- **router**: si occupa di instradare i pacchetti in entrata e in uscita rispetto alla LAN. Viene spesso chiamato *gateway* per questo motivo.
- **access point**: permette accesso alla rete tramite connessione Wi-Fi

## MAC address

**MAC address** (*Media Access Control*), è un codice di **48 bit** (6 byte) che viene assegnato in modo **univoco** dal produttore ad ogni **scheda di rete** ethernet o wireless prodotta al **mondo**.

È modificabile a livello software.

I 48 bit sono suddivisi in 12 cifre esadecimali nel formato `XX:XX:XX:XX:XX:XX`

- le prime 6 cifre individuano il produttore dell'interfaccia di rete.
- mentre le successive 6 corrispondono al numero di serie della scheda stessa.
