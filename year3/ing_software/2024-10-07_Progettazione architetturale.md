# Progettazione architetturale

Il documento di progettazione ha come obiettivo quello di definire come (a livello astratto) realizzare ciò che è stato definito nel modello dei requisiti.

Quindi è una fase intermedia che parte dal documento dei requisiti e produce un documento di progettazione da passare poi a chi si occuperà dell’implementazione.

Il documento è strutturato sarà composto nel seguente modo:

- **Introduzione**: riassunto degli elementi fondamentali del documento
- **Architettura del sistema**: organizzazione del sistema in sottosistemi
- **Modello dei dati e del controllo**
- **Modelli UML**
- **Progettazione dell’interfaccia utente**: mockup con spiegazione
- **Glossario**

## Architettura del sistema

L’obiettivo è quello di stabilire la struttura globale di un sistema in sottosistemi e moduli, tramite un diagramma a blocchi.

Un **sottosistema** è un sistema indipendente dagli altri sottosistemi.

Un **modulo** è una componente del sistema che quindi non può essere considerato un sistema a se stante.

Un esempio (robot di impacchettamento) in cui vede la divisione in sistemi:

![https://i.ibb.co/Bj0SNPj/image.png](https://i.ibb.co/Bj0SNPj/image.png)

## Modello dei dati

Il prossimo passo è la **modellazione dei dati** in cui si identifica come i sottosistemi si scambiano i dati. Alcuni modi possibili sono i seguenti:

- I dati sono **condivisi** in un repository comune in cui tutti i sottosistemi possono accedere
    - efficiente per grandi quantità di dati
    - i sottosistemi non si preoccupano della gestione dei dati (backup, sicurezza, produzione)
    - evoluzione dei dati dispendiosa
    - il modello dei dati deve essere un compromesso tra le varia esigenze dei sottosistemi
- Ogni sottosistema mantiene una propria base di dati isolata dagli altri (modello “client-server”)
    - i dati sono gestiti in modo distribuito dai singoli componenti che offrono i servizi
    - la distribuzione non è semplice
    - è richiesta una rete, quindi è semplice aggiungere nuovi server e fare upgrade di quelli esistenti
    - lo scambio di dati tra sottosistemi può risultare inefficiente perché ogni sottosistema utilizza il proprio modello
- I sottosistemi sono organizzati a cipolla (modello “macchina astratta”)
    - il sistema è fatto a livelli in cui ogni livello comunica con il livello inferiore e superiore

## Modello del controllo

Vediamo come viene passato il controllo nelle azioni del sistema:

- Controllo **centralizzato,** Un sottosistema ha il controllo globale e dà inizio e fine agli
altri sottosistemi.
    - modello “**call-return**”: il controllo viene gestito top-down tramite la chiamata di procedure: il sistema principale chiama delle procedure nei sottosistemi. Il controllo lo ha la procedura in esecuzione
    - modello “**manager**”: Il controllo viene gestito da un componente del sistema
- Controllo basato su **eventi**, guidato da eventi esterni che non si sa a priori quando accadano
    - modello “**broadcast**”: l’evento è trasmesso a tutti i sottosistemi, ogni sottosistema può gestirlo.
        - i sottosistemi dichiarano di essere “interessati” a degli specifici eventi.
        - le politiche di controllo sono interne al sottosistema
    - modello “**interrupt-driven**”: all’evento corrisponde un solo sottosistema che lo gestisce

## Strategie di progettazione

Possiamo pensare alla nostra soluzione progettuale in due modi:

- **Progettazione funzionale**: lo **stato** del sistema è centralizzato e condiviso, le componenti operano su quello stato modificandolo.
    - Ne è un esempio il modello “data-flow”: l’esecuzione del sistema è composto da passaggi da un funzione all’altra le quali cambiano lo stato comune, passando quindi da uno stato iniziale ad uno finale.
- **Progettazione orientata agli oggetti**: Il sistema è un insieme di oggetti, ognuno con il proprio stato. Attraverso le interfacce degli oggetti posso passare loro il controllo in modo da cambiare il loro stato interno in un certo modo

In alternativa se si vuole realizzare una architettura simile a quelle già esistente bisogna cercare se esistono già dei modelli esistenti e quindi:

- Ispirarsi a **modelli generici**: cioè delle astrazioni di modelli già esistenti (es. modello astratto di un compilatore).
- seguire **modelli di riferimento**: cioè modelli ideali standard che non hanno una implementazione diretta, ma forniscono solo delle direttive (es. modello TCP/IP)

## Qualità della progettazione

Vediamo degli attributi per determinare una progettazione di buona qualità:

### 1. Coesione

Misura quanto la divisione del sistema in componenti è fatta bene.

Un sistema coeso è un sistema in cui ogni componente ha tutte e sole le funzioni che devono stare legate. In questo modo quando devo fare una modifica al sistema è sufficiente toccare un singolo componente.

Ci possono essere vari criteri per raggruppare le funzionalità nei componenti, le migliori sono:

- coesione funzionale: ogni parte del componente è necessario solo per l’esecuzione di una funzione di quel componente
- coesione d’oggetto: la componente ha tutti gli attributi e tutti le operazioni per modificare o ispezionare lo stato dell’oggetto. Bisogna cercare di ridurre lunghe catene di ereditarietà

### 2. Accoppiamento

Misura la dipendenza delle componenti.

Più le componenti sono indipendenti meglio è, in questo modo il cambiamento di una componente non ha forti effetti sulle altre.

Bisogna quindi ridurre l’uso di variabile condivise e il passaggio di dati per riferimento. Inoltre, come nel punto precedente anche qui bisogna cercare di ridurre lunghe catene di ereditarietà.

### 3. Comprensibilità

Ricordando che questo documento deve essere utilizzabile da chi andrà ad implementare il sistema e deve essere verificabile da chi ha fatto la specifica. Quindi bisogna rendere il documento più comprensibile possibile:

- dare nomi corretti e significativi
- ridurre la complessità
- fare una buona documentazione

### 4. Adattabilità

Un progetto si dice adattabile se è facilmente adattabile in caso di modifiche sui requisiti:

- buona documentazione
- isolare i componenti
- tracciare i legami tra componenti e requisiti
