# File system distribuiti

Un **Filesystem Distribuito (DFS)** è un particolare tipo di file system che permette di memorizzare file su dispositivi di archiviazione distribuiti in una rete. Tramite un sistema client/server, i dati sono memorizzati su dispositivi remoti collegati in modo trasparente alla gerarchia dei file dell'utente. Un DFS deve gestire i file in modo concorrente e trasparente e può essere dotato di autenticazione e crittazione.

Un **File Server** è un host che ospita un DFS. Sui client è installata un'interfaccia che permette di interagire con il file server. Il file server controlla un insieme di dispositivi di archiviazione e agisce su di essi in base alle richieste dei client.

## **Caratteristiche DFS**

Le caratteristiche principali di un DFS includono:

- **Trasparenza:**
    
    La trasparenza ideale fa sì che un DFS appaia all'utente come un normale filesystem centralizzato, nascondendo la complessità e la dispersione dei server e dei dispositivi sottostanti. L'interfaccia utente non dovrebbe distinguere tra file locali e remoti.
    
- **Prestazioni:**
Il modo più conveniente per misurare le prestazioni di un DFS è quantificare il tempo impiegato per soddisfare una richiesta. Nei sistemi convenzionali (non distribuiti), questo tempo è dato principalmente dall'accesso al disco locale e da una piccola quantità di elaborazione della CPU.
    
    Nei sistemi distribuiti, a questo si aggiunge il **ritardo dovuto alle comunicazioni di rete**. Le prestazioni di un DFS influenzano il suo livello di trasparenza, idealmente, un sistema distribuito dovrebbe avere una velocità paragonabile a quella di un sistema convenzionale.
    
- **Accesso Concorrente:**
Un filesystem distribuito deve gestire anche la modifica dei file. È fondamentale che **gli aggiornamenti operati da un client non interferiscano con gli accessi e le modifiche fatte da altri client**. Per questo motivo, sono necessari meccanismi di controllo della concorrenza e di *locking*.

Dal lato server le implementazioni possono variare, con il file server a volte eseguito su una singola macchina dedicata, mentre in altri casi il client può accedere simultaneamente a più file server. È anche possibile che la stessa macchina ospiti sia un file server che un client.

## Implementazioni

Vediamo varie implementazioni di DFS.

### **NFS (Network File System)**:

Presentato nella versione 2 nel 1985, è ora alla versione 4. È stato il **primo DFS ad essere sviluppato** ed è molto diffuso. NFS è un modello per integrare filesystem locali differenti, basato sull'idea che ogni host fornisce una vista unificata del suo filesystem locale. Può essere usato su gruppi eterogenei di computer, con OS diversi e hardware diversi.

NFS utilizza un ***remote access model*** in cui i client non sanno realmente dove si trovano i file, e i server mettono a disposizione una serie di operazioni che i client possono fare direttamente sui file.

Dalla versione 4:

- supporta server *stateful*, mantenendo lo stato delle operazioni, a differenza delle versioni precedenti dove era il client a doverlo fare.
- introdotto le ***Compound Operations*** (CP), che consistono in inserire più operazioni in una singola chiamata, migliorando così l’efficienza. La chiamata però non viene trattata come una transazione: se una operazione interna fallisce, le successive non vengono eseguite e viene ritornato un messaggio di errore senza che venga fatto un rollback.
- Utilizza il protocollo TCP (in precedenza UDP).
- Per il riconoscimento dell'utente, dalla versione 4 si usa una stringa arbitraria, come un username (prima era solo tramite indirizzo IP)

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

Il problema che automount mira a risolvere è che **non è consigliabile mantenere un file system remoto montato permanentemente su un sistema**. in caso di disconnessione il sistema si potrebbe bloccare mentre cerca di accedere a risorse non più raggiungibili, oppure in alcuni sistemi si può svorareil limite massimo di mount.

**Funzionamento:**

- Quando un processo accede ad un file all'interno di un certo percorso gestito da un DFS, questo viene **montato all'istante**.
- Dopo un certo periodo di **inattività**, e dopo che tutti i file sotto quel punto di mount sono stati chiusi, il filesystem viene **smontato**.
- In Linux, il sistema automount è gestito direttamente dal kernel.
- La **tabella di corrispondenza tra percorso e locazione** del filesystem remoto, sono mantenute da un programma in user space chiamato **autofs**.

### **CIFS/SMB (Common Internet File System/Server Message Block)**

In generale, in un dominio **Active Directory** di Windows, esistono due tipologie di cartelle condivise  legate agli utenti del sistema:

- **Profili utente:** Possono risiedere solo sulla macchina locale (client), oppure sul server come *Roaming Profiles*. Con i *Roaming Profiles*, le impostazioni utente, i dati delle applicazioni, il desktop e i documenti vengono scaricati su tutti i client a cui l'utente si collega.
    
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
