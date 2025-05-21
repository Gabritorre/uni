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
