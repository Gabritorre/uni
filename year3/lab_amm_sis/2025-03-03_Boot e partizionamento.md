# Boot e partizionamento

## BIOS

All’accensione del sistema, la CPU legge le istruzioni da un chip presente sulla scheda madre, chiamato BIOS. Il **BIOS** (*Basic Input-Output System*) è un programma scritto in una particolare memoria (originariamente in ROM e poi divenuta EEPROM) che controlla la prima fase di avvio:

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

Una volta finiti i check HW il BIOS cerca un MBR solitamente memorizzato nel primo settore del disco, ne carica il contenuto in memoria RAM e gli passa il controllo.

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

Nelle moderni distribuzioni di Linux init è stato sostituito da altri sistemi che sono più flessibili, performanti e con interazioni più semplici. I due sistemi più famosi sono:

- Upstart
- Systemd (il più diffuso)

## Partizionamento

Durante l’installazione di un sistema operativo, c’è una fase molto importante che è il **partizionamento dello storage**, che deve essere fatto in modo adeguato a seconda della tipologie di server che stiamo installando.

Questa fase consiste nel suddividere le unità di storage in partizioni, cioè in porzioni di disco.

Per PC da casa il partizionamento di default va già bene, al massimo si può decidere di posizionare `/home` in una partiziona separata da `/`.

### Swap

Nel partizionamento spesso viene menzionata la **Swap**, il suo scopo è quello di liberare memoria RAM: una porzione di dati in RAM (quelli che hanno meno probabilità di essere richiesti in futuro)  vengono salvati sul disco per lasciare spazio ad altri dati.

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

- `Swap` $512 \cdot 0.25 = 384GB$

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

L’inserimento di una passphrase ad ogni connessione può risultare frustrante, si può però migliorare la situazione tramite ssh-agent per mettere in cache la passphrase per la durata della sessione

```bash
ssh-add ~/.ssh/id_rsa
```

quando ci si è connessi poi bisogna copiare la chiave pubblica nel server, nel file `~/.ssh/authorized_keys`. Si può anche usare lo script ssh-copy-id per copiarla in modo automatizzato:

 

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub utente@server
```
