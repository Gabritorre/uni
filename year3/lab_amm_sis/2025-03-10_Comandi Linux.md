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
-___^^^___
  |  |  |
  |  |  |---> altri utenti
  |  |---> gruppo proprietario
  |---> proprietario
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
    
    lo sticky bit è rappresentato da una `t` al posto della `x` nella sezione relativa agli altri.
    

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
