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
