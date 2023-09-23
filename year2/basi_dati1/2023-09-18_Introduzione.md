# Introduzione a basi di dati

### Distinzione tra sistema informatico e informativo

**sistema informativo**: insieme di procedure e risorse (umani e non) per la raccolta, archiviazione, elaborazione e distribuzione di informazioni utili ad un'organizzazione per prendere delle decisioni

**sistema informatico**: insieme di tecnologie informatiche e telecomunicazioni che sono a supporto delle attività di un'organizzazione

**sistema informativo automatizzato** il sistema informativo viene svolto usando un sistema informatico

### Distinzione tra dato e informazione

**dati**: sono dei valori grezzi (non elaborati) che sono subito visibili ma difficili da interpretare
**informazioni**: provengono dall'elaborazione dei dati e servono a generare nuova conoscenza tramite delle interpretazioni e comprensione dei dati


## Database e DBMS 

Un database è una raccolta di **dati** permanenti gestiti da un computer suddivisi in:

- **Metadati**: servono a definire lo schema del database, la struttura dei dati, le operazioni eseguibili, le restrizioni, le autorizzazioni. I metadati vengono definiti prima di creare i dati.
- **Dati**: sono i valori presenti nel database che devono essere conformi alle caratteristiche del DB e su cui sono definite delle relazioni. I dati sono molti di più dei metadati, sono permanenti e sono utilizzabili contemporaneamente da più utenti inoltre sono protetti e accessibili mediante transazioni.

Un DBMS (Data Base Management System) è un sistema che offre strumenti per gestire una base di dati, quindi la definizione della struttura le modifiche, le aggiunte, gli accessi, ecc...

Generalmente un utente non accede mai direttamente alla base di dati bensì si interfaccia o con il DBMS oppure con un programma esterno il quale si interfaccia a sua volta con il DBMS.

### Funzionalità del DBMS

- **DDL**: (Data Definition Language) Si occupa di definire la struttura dei dati, le regole di integrità e i privilegi degli utenti (Appartengono a questa categoria comandi come **CREATE**, **ALTER**, **DROP**).
- **DML**: Si occupa di leggere, inserire, modificare e cancellare dei dati (alcuni comandi sono **SELECT**, **INSERT**, **UPDATE**, **DELETE**).
- Meccanismi per il controllo dei dati
- Altri strumenti per l'amministrazione del DB

#### DDL

Possiamo descrivere un database in 3 livelli differenti
- livello fisico: descrive come vengono organizzati i dati fisicamente in memoria
- livello logico: descrive la struttura dei dati e le loro relazioni in modo astratto
- livello di vista logica: descrive come appare la struttura astratta del BD per un certo applicativo esterno (può variare in base all'applicativo)


#### DML

Per manipolare un database ci sono generalmente 2 modi in base alla capacità di chi vuole agire:

- Tramite una interfaccia grafica
- Oppure tramite uno specifico linguaggio: direttamente in SQL, oppure in altri linguaggi usando librerie o SQL embedded nel linguaggio


#### Controllo dei dati
Il DBMS deve controllare che:
- l'integrità del database sia mantenuta, quindi ogni dato deve rispettare i propri **vincoli di integrità**
- Proteggere il database da accessi non autorizzati, da malfunzionamenti hw e sw, da accessi concorrenti degli utenti

### Transazioni

Una transazione è una sequenza di istruzioni in lettura e scrittura che deve rispettare le proprietà **ACID**:
- *Atomicità*: le istruzioni devono essere viste come una istruzione singola, quindi se nel mezzo si verifica un problema va abortita tutta la transazione, annullando tutte le modifiche apportate
- *Consistenza*: Dopo la transazione l'integrità referenziale deve essere mantenuta
- *Isolamento*: più transazioni effettuate in contemporanea devono risultare come se fossero eseguiti una dopo l'altra
- *Durabilità*: Alla fine della transazione le modifiche devono essere salvate permanentemente su disco
