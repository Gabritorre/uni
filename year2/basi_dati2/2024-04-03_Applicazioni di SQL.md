# Applicazioni di SQL

Vediamo quali sono i modi per integrare l'interazione con un database all'interno di una reale applicazione.

Possiamo categorizzare gli approcci in 3 modi:

- **Linguaggi integrati**: linguaggi specializzati nel eseguire comandi SQL
- **Linguaggi che ospitano SQL**: linguaggi tradizionali, la cui sintassi viene estesa con costrutti SQL all'interno del normale codice
- **Utilizzo di API**: linguaggi tradizionali che si appoggiano a librerie esterne per integrare SQL

## Linguaggi integrati

**Vantaggi**
- stesso livello di astrazione di SQL
- supporto per controlli a livello di compilazione da parte del *type system*

**Svantaggi**
- costo elevato di apprendimento
- tecnologie proprietarie e non standard
- non adatti per lo sviluppo di applicazioni complesse

Un esempio di questo approccio è PL/pgSQL


## Linguaggi che ospitano SQL

**Vantaggi**
- Costo di apprendimento ridotto
- controlli sulla sintassi SQL in fase di compilazione

**Svantaggi**
- possibili problemi dovuti alla differenza di tipi tra il linguaggio e SQL (*Impedance mismatch*)
- è richiesto l'utilizzo di un pre-processore
	che accede a informazioni del tipo: nomi, attributi e tipi delle tabelle.
	Il pre-processore viene sfruttato per garantire che il codice:
	- faccia riferimenti a tabelle e attributi esistenti
	- soddisfi appropriati controlli sui tipi

Un esempio di questo approccio è SQLJ.

Viene utilizzata una sintassi particolare per far interagire il codice java con SQL.
Vie utilizzato un **cursore** per scorrere il risultato delle query


## Utilizzo di API

**Vantaggi**
- Costo di apprendimento ridotto
- non è richiesto un pre-processore
- possibilità di utilizzo di SQL dinamico

**Svantaggi**
- possibili problemi dovuti alla differenza di tipi tra il linguaggio e SQL (*Impedance mismatch*)
- assenza di controlli in tempo di compilazione

Un esempio di questo approccio è JDBC.

Le query sono solitamente delle stringhe passate a funzioni specifiche (e quindi controllate a runtime)

Una tecnica molto utile per aumentare la robustezza del codice è l'uso di **prepared statement**, cioè l'utilizzo di *placeholder* (con l'utilizzo del carattere `?`) all'interno della query da poi riempire come parametri aggiuntivi.

**SQL dinamico**: cioè è possibile costruire le query dinamicamente a runtime, ad esempio in base all'input utente. È una feature che va comunque usata con attenzione


## Object Relational Mapping (ORM)

l'ORM è una tecnica di programmazione basata sulle API ma che risolve i problemi dovuti all’*impedance mismatch* in quanto viene mantenuto una versione del database nel codice realizzata con la programmazione ad oggetti (tabelle sono le classi, i campi sono attributi, ecc...).
Quindi ogni operazione sul database viene prima applicata al modello ad oggetti per verificarne la correttezza.

**Vantaggi**
- Indipendenza dallo specifico DBMS sottostante
- Non richiede conoscenza approfondita di SQL
- Migliore supporto da parte del compilatore
- Astrazione da dettagli di basso livello (es. sanitizzazione delle query)

**Svantaggi** 
- Tipicamente più lento rispetto a SQL
- Poco adatto all’esecuzione di query complesse

## Riepilogo

Al giorno d’oggi possiamo affermare che:
- I linguaggi integrati hanno un utilizzo di nicchia molto specializzato e non sono impiegati come linguaggi *general purpose*
- I linguaggi che ospitano SQL hanno un design molto interessante, ma sono sostanzialmente spariti dal mercato
- API ed ORM dominano la scelta per la loro praticità: si può considerare ormai uno standard di fatto
