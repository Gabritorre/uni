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
