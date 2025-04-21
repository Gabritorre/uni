# Server di stampa

Un **server di stampa** permette la **gestione centralizzata di una o più stampanti di rete e non**.

Un server di stampa è un host che gestisce le code di stampa di una o più stampanti ad esso collegate. Ogni **stampante di rete** moderna può essere considerata un **print server per sé stessa**, in quanto offre il proprio servizio di stampa tramite diverse modalità di accesso come:

- **Web Printing**: permette di inviare documenti alla stampante tramite un'interfaccia web.
- **IPP (Internet Printing Protocol)**: protocollo che consente la stampa su rete e anche via Internet, con supporto per autenticazione e gestione code.
- **LPD (Line Printer Daemon)**: usato soprattutto in ambienti Unix/Linux per inviare file alla stampante.
- **NetBIOS**: usato principalmente nei sistemi Windows per condividere risorse (tra cui stampanti) all'interno di reti locali.

Tuttavia, quando si hanno più stampanti di rete, è consigliabile la gestione tramite un host dedicato chiamato **printer server**. Il printer server può essere collegato alle stampanti **direttamente** (tramite USB/Parallela/Seriale, quando la stampante è molto vicina al server) oppure **via rete** (se la stampante è dotata di un modulo di rete e si trova in una zona più distante, come un'altra stanza, piano o edificio).

Diversi sistemi operativi offrono funzionalità di print server integrata:

- **Linux/OS X**: il server di stampa è gestito interamente dal sistema **CUPS (Common UNIX Printing System)**, successore di LPD e pienamente compatibile con esso. Viene configurato nel file  `/etc/cups/cupsd.conf` o tramite interfaccia web all’indirizzo `http://localhost:631/admin`
- **Windows**: il sistema di **condivisione file e stampanti** permette una gestione semplice di una o più stampanti condivise.
- **Windows Server**: include un vero e proprio **printer server** che gestisce le varie stampanti connesse. Per attivarlo è necessario aprire Server Manager e installare il servizio **Print Service**; il sistema si occuperà di installare eventuali servizi dipendenti.
