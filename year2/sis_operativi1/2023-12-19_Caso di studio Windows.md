# Caso di studio Windows

## Architettura

 Il kernel su cui si basa il sistema operativo è chiamato NTOS (New Tecnology Operative System).
 L'architettura su cui si basano i più moderni sistemi operativi Windows è chiamata **Windows NT**.
 
### API

Le API utilizzate per creare le applicazioni Windows sono chiamate **WinAPI**, c'è ne sono di varie versioni ad esempio *Win32* (per la versione a 32bit)
Esse sono responsabili di praticamente ogni aspetto del sistema operativo: creare e gestire processi e thread, fare operazioni su file, gestire la sicurezza, gestione della memoria principale, operare sull'interfaccia grafica.
Le chiamate a sistema sono implementate in un componente del kernel chiamato *Executive NTOS*

### Oggetti

Spesso le chiamate alle API creano e operano su degli **oggetti** (file, processi, thread, pipe, ...) e restituiscono al chiamate un **handle**, una sorta di puntatore all'oggetto con cui poter fare delle operazioni su tale oggetto.
Gli *handle* non possono essere direttamente passati ad altri processi ma in alcuni casi è possibile duplicare un *handle* e passarlo in modo protetto ad altri processi.

Gli **oggetti** sono dei **nomi per una risorsa fisica** (una periferica) **o logica** (un processo).
Vengono gestiti da un **gestore di oggetti**, che è una struttura dati presente in memoria.
Il gestore vede e gestisce gli attributi dell'oggetto, i dati che contiene e le operazioni che può fare. Si occupa anche di creare e distruggere gli oggetti

## Struttura dell'architettura

Il kernel NTOS viene definito un **kernel ibrido** in quando risulta essere una via di mezzo tra il micro-kernel e il kernel monolitico.
È composto da due livelli principali:
- **Esecutivo**: si occupa principalmente di: gestione di I/O, gestione degli oggetti, sicurezza e altre funzioni
- **Kernel**: Si occupa dello scheduling, gestire le interruzioni, sincronizzazione tra i thread e altre funzioni

Un componente importante del kernel è l'**Hardware Abstraction Layer** (HAL): uno strato software interposto tra il kernel e l'hardware. È stato progettato per nascondere le differenze hardware e per fornire una piattaforma unificata per ogni applicazione in esecuzione.
per esempio un programma, invece di aprire direttamente un file chiederà all'HAL di farlo per lui e l'HAL, appena esaudita la richiesta, gli passerà un riferimento al file per la lettura


A **livello utente** è importante la presenza di:
- DLL (*Dynamic Link library*): cioè delle librerie che i processi possono collegare per avere funzioni particolari. tali librerie vengono caricate in memoria quando necessario e sono condivise tra i processi.
- servizi di sistema: sono processi eseguiti in modalità utente che sono attivi in *background* per garantire il corretto funzionamento del sistema
![enter image description here](https://i.ibb.co/FYbTwGn/image.png)


## Registro di sistema

Il registro di sistema è un particolare file, strutturato con una logica ad albero, che memorizza tutti i **dati relativi a hardware, software e utenti**.
I nodi interni dell'albero (che possiamo vedere come fossero delle cartelle) sono chiamate **chiavi**, mentre le foglie sono chiamate **valori**. Ogni valore è composto da [nome, tipo, dato]:
- il nome è una normale stringa
- il tipo indica il tipo del dato (stringa, intero a 32 bit, intero a 16 bit, esadecimale, ...)
- il dato rappresenta l'effettivo contenuto

Sono presenti 6 nodi radice (nei moderni sistemi sono 5) :
- HKEY_LOCAL_MACHINE
- HKEY_USERS
- HKEY_PERFORMANCE_DATA (non più presente)
- HKEY_CLASSES_ROOT
- HKEY_CURRENT_CONFIG
- HKEY_CURRENT_USER
![enter image description here](https://i.ibb.co/tzL9wdN/registri.png)

## Gestione interruzioni

È presente un servizio che si occupa di gestire le interruzioni chiamato **ISR** (*Interrupt Service Routine*). Ogni interruzione ha una priorità e viene gestita l'interruzione con priorità più alta.

Nell'immagine seguente si vedono le varie priorità che si suddividono in hardware e software:

![enter image description here](https://i.ibb.co/54nyMSC/image.png)


