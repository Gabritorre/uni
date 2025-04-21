# Database server

Un **database** è una raccolta di dati, anche eterogenei, che possono essere interrogati e messi in relazione tra loro. Un **DBMS** (DataBase Management System) è il software che si occupa di gestire i database e fa da intermediario tra gli utenti (e le applicazioni) e i database. Inoltre definisce gli utenti e gli amministratori che accedono ai dati e fornisce meccanismi di sicurezza, protezione e controllo dell'integrità dei dati.

Nella gestione di un database sono solitamente coinvolte le seguenti figure:

- **DBA (DataBase Administrator)**: gestisce gli accessi, predispone tabelle, indici, viste, ottimizza lo spazio disco ed effettua backup e restore.
    
    La persona che ricopre questo ruolo deve conoscere i rudimenti del linguaggio SQL e i DBMS più diffusi, assicurare i backup e l'integrità dei vari DBMS, suggerirne la ridondanza e capire quale DBMS sia più adatto a una specifica applicazione, tenendo conto delle licenze aziendali pre-esistenti.
    
- **Programmatori**: scrivono applicazioni che utilizzano i dati del DB.
- **Utenti finali**: utilizzano le applicazioni per interrogare il DB.
- **Sistemisti**: verificano il corretto funzionamento dei sistemi hardware e software su cui gira il DBMS. Spesso questo ruolo coincide con il DBA.

## DBMS

Tra i più diffusi DBMS open source troviamo

- **MySQL (MariaDB)**
- **PostgreSQL**
- SQLite
- Firebird

Tra i DBMS commerciali più diffusi si trovano:

- **Oracle**
- **MS SQL Server**
- Sybase
- **MS Access**

tutti questi **DBMS** sono **relazionali basati su SQL (RDBMS**), ma vi sono anche DBMS non relazionali che non usano SQL.

### MySQL

**MySQL**: È un **RDBMS** composto da un client a riga di comando e un server, scritto in C e C++. È disponibile su numerosi sistemi operativi e si interfaccia con diversi linguaggi di programmazione come Java, .NET, PHP, Python, C#. È considerato più adatto ad applicazioni non intensive, con prestazioni che possono peggiorare con query su milioni di record e in termini di sicurezza. Il suo sistema di gestione più comune è **phpmyadmin,** un’interfaccia realizzata in php che permette di effettuare operazioni anche complesse con il database.

Da scegliere: per blog, siti web, piccoli forum e applicazioni di medie dimensioni.

### **PostgreSQL**

Probabilmente il DBMS open source più avanzato, paragonabile a Oracle. È un **ORDBMS** (Object Relational DataBase Management System) che supporta un modello di database *Object Oriented* e permette l'estensione tipi di dato e metodi personalizzati. Scritto in C/C++ e basato su un'architettura Client/Server, è supportato dai maggiori sistemi operativi. Viene utilizzato per applicazioni web, realtime, e sistemi di data warehousing. Supporta gli stessi linguaggi di programmazione di MySQL. È considerato molto sicuro, e più veloce di MySQL. I suoi sistemi di gestione includono **phppgAdmin, pgAdmin3 e HeidiSQL**.

Da scegliere: per chi necessita di un database relazionale serio ma non ha un budget elevato.

### **Oracle**

È un **ORDBMS** come PostgreSQL, basato su un'architettura Client/Server. Dalla versione 10g ha introdotto il concetto di **grid computing**, vedendo il DBMS come una griglia di risorse per migliorare scalabilità e condivisione. Le ultime versioni introducono miglioramenti di performance e nuove funzionalità, ma mantiene ancora vari bug di sicurezza. È disponibile per Windows e Linux e ha un sistema di gestione sviluppato in Java servlet. Esiste una versione *express* gratuita, incompleta, poco supportata e senza bugfix, adatta solo per lo sviluppo.

Da scegliere: per grandi aziende con gestionali (come SAP) e applicazioni pesanti.

### **MS SQL Server**

È il database relazionale di Microsoft, un RDBMS inizialmente utilizzato per basi dati medio-piccole, ma adatto anche a grandi dimensioni dalla versione 2000. Dalla versione 2017 è disponibile per Windows, Linux e Docker. Si interfaccia con i maggiori linguaggi di programmazione Microsoft, ma esistono anche driver per Java, C, PHP. Esiste una versione COMPACT per piccole applicazioni e sviluppo. **MS SQL Server Management Studio** è il sistema di gestione del DBMS. Esiste una versione *express* gratuita per studenti e sviluppatori.

Da scegliere: in ambienti Windows con applicazioni di terze parti che lo richiedono esplicitamente.
