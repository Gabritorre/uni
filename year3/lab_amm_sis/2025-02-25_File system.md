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

Una **directory è un elenco di nomi di file** (e/o altre directory). Le directory hanno il fondamentale ruolo di dare una **struttura gerarchica al filesystem** (ad albero), con una radice indicata da `/` in Linux e `c:\` in Windows.

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
