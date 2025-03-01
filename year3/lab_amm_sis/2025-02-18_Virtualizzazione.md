# Virtualizzazione

Con Virtualizzazione si intende il processo di creazione di una rappresentazione virtuale (software) di un oggetto, al fine principale di ridurre i costi e aumentare efficienza e scalabilità.

Si utilizza il software per simulare l'esistenza dell'hardware.

È possibile virtualizzare:

- Server
- Desktop
- Storage
- Reti

Vantaggi:

- costI molto ridotti
- downtime del sistema ridotto
- aumento della produttività e dell’efficienza
- fornitura più rapida dei servizi
- semplificazione di gestione del sistema
- abilitazione a *business continuity* (assicurare l’operatività delle funzioni di base in caso di disastri) e *disaster recovery* (recuperare le attività e i dati in seguito ad un disastro)

## Virtualizzazione dei server

Tramite la virtualizzazione dei server è possibile eseguire **più sistemi operativi sotto forma di macchine virtuali** all’interno di un server fisico. In questo modo in un unica macchina si hanno degli ambienti isolati che si occupano della propria specifica funzione.

Es. al posto di avere un server per la posta e un web server, mantengo un server con due macchine virtuali.

## Virtualizzazione del desktop

Si hanno dei computer poco potenti che avviano una versione minimale del sistema operativo ma che si agganciano ad una macchina virtuale offerta da un server.

I tre tipi principali di virtualizzazione del desktop sono:

- **VDI** (*Virtual Desktop Infrastructure*): l’utente interagisce con un sistema operativo di macchina virtuale che gira su un server della propria infrastruttura
- **RDS** (*Remote Desktop Service*): In questo caso sole le applicazioni vengono trasmesse in streaming al dispositivo locale
- **DaaS** (*Desktop as a Service*): è un servizio cloud che fornisce desktop virtuali tramite internet

## Virtualizzazione della rete

In questo caso si vuole riprodurre una rete fisica via software che simula il comportamento dei vari apparati come switch, router, VPN, ecc…

## Virtualizzazione dello storage

Si combinano più dischi di storage per creare un unico pool di storage virtuale da distribuire alle applicazioni, ottimizzando l'utilizzo delle risorse e migliorando la gestione dello spazio disponibile.

Software-Defined Storage è un approccio di questo tipo utilizzato in servizi come Google Drive e Dropbox

## Macchina virtuale

Una macchina virtuale è un software dotato di sistema operativo e applicazioni che gira su una macchina fisica ma è completamente isolata dalle altre applicazioni.

Quindi collocando più macchine virtuali su un host consente di eseguire più sistemi operativi isolati.

Lo strato software che separa l’host dalle macchine virtuali e si occupa di assegnarli dinamicamente le risorse hardware si chiama ***hypervisor.***

Possiamo identificare le seguenti proprietà delle macchine virtuali:

- **Partizionamento**: possibilità di eseguire più sistemi operativi sulla stessa macchina fisica suddividendo le risorse fisiche disponibili tra le varie macchine virtuali.
- **Isolamento**: ogni macchina virtuale gira in un ambiente isolato rispetto agli altri software in esecuzione sulla macchina fisica
- **Incapsulamento**: lo stato della macchina virtuale è salvato su file, facilitando la copia e lo spostamento delle macchine virtuali su altri host.
- **Indipendenza dall’hardware**: le macchine virtuali non dipendono strettamente dall’hardware della macchina fisica, sono invece dipendenti dall’hardware emulato dall’hypervisor. Quindi migrare una VM su un’altra macchina fisica è semplice, migrarla su un altro sistema di virtualizzazione è più difficile.

## Sistemi di virtualizzazione

Alcuni famosi sistemi di virtualizzazione sono:

- VMware
- Microsoft Hyper-V
- KVM (Kernel-based Virtual Machine), usato in ambito Linux
- Docker: isola i singoli processi in ambienti controllati chiamati **container**

Mentre per i datacenter si utilizzano sistemi operativi progettati apposta per la virtualizzazione, per i dispostivi casalinghi che hanno OS più general purpose i software di virtualizzazione sono meno ottimizzati, per questo motivo eseguendo una VM sul proprio computer di casa si percepisce una netta differenza di prestazioni rispetto all’ambiente host.
