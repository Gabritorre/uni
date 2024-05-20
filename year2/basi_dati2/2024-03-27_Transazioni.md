# Transazioni

Nello sviluppo di applicazione che fanno uso di un database è comune raggruppare un insieme di operazioni sul database per implementare una determinata funzione.

Questo raggruppamento però può portare a dei **problemi sull'integrità dei dati**:
- **Concorrenza** tra operazioni provenienti da utenti diversi (più persone contemporaneamente faranno operazioni nel database)
- il **fallimento** di una operazione potrebbe comportare gravi errori alle successive

## Transazione

Una **transazione** è una sequenza di operazioni sul database che soddisfa le seguenti proprietà:

- **Serializzabilità**: Assicura che l'esecuzione concorrente di più transazioni sia equivalente ad una esecuzione seriale (senza interferenze)
- **atomicità**: Se una operazione all'interno della transazione fallisce allora tutte le modifiche apportate da quella transazione vengono annullate
- **persistenza**: Le modifiche effettuate da una transazione terminata correttamente sono permanenti

In altre parti si dice che una transazione rispetta le proprietà ACID (Atomicity, Consistency, Isolation e Durability)

## Programmare le transazioni

Possiamo utilizzare le transazioni per raggruppare un insieme di query utilizzando i seguenti comandi:

- `START TRANSACTION` indica l'inizio di una nuova transazione
- `COMMIT` indica la terminazione corretta della transazione, da quel momento tutte le modifiche effettuate dalla transazione devono essere salvata persistentemente in memoria
- `ROLLBACK` indica la terminazione anomale della transazione, tutto ciò che è stato fatto durante la transazione deve essere annullato

## Vincoli nelle transazione

I vincoli che si mettono sugli attributi di una tabella possono essere controllati in momenti diversi all'interno delle transazioni:
- `NOT DEFERRABLE`: vengono controllati dopo ogni operazione della transazione
- `DEFERRABLE INITIALLY IMMEDIATE`: vengono controllati dopo ogni operazione della transazione ma è possibile modificarne il comportamento per controllarli a prima del commit
- `DEFERRABLE INITIALLY DEFERRED`: vengono controllati prima del commit ma è possibile forzare il controllo per ogni operazione della transazione

è possibile specificare quale comportamento usare con `SET CONSTRAINTS`

## Transazioni read only

Una transazione può essere dichiarata **read only**

```sql
SET TRANSACTION READ ONLY;
```
con i seguenti effetti:
- La transazione può solo leggere dati (con `SELECT`)
- tutte le query all'interno possono vedere solo le scritture avvenute prima dell'inizio della transazione
- più transazioni read only possono essere eseguite parallelamente senza rischi

## Livelli di isolamento 

Vediamo adesso vari livelli di isolamento che si possono applicare alle transazioni

## Transazioni Serializable

Una transazione può essere dichiarata come ***serializable***, cioè viene eseguita una transazione alla volta nella sua completezza

## Transazioni read uncommitted

Una transazione può essere dichiarata come ***read uncommitted***

con i seguenti effetti:

- Consente alla transazione di leggere **dirty data**, cioè dati scritti da altre transazione che non hanno ancora fatto `commit`. Le letture di questo tipo si chiamano *dirty read*
- Rischio: nel caso in cui la transazione che ha scritto i *dirty data* dovesse abortire allora ciò che ha scritto verrebbe annullato e non è corretto che quei dati cancellati influenzino le altre transazioni.

SQL limita l'uso di `READ UNCOMMITTED` alle sole transazioni read only.
su postgresql non esiste `READ UNCOMMITTED`

## Transazioni read committed

Una transazione dichiarata come **read committed** impedisce il fenomeno delle *dirty read*.

Con i seguenti effetti:
- Quando una transazione vuole effettuare una **scrittura**, acquisisce un lock per evitare *race condition* e lo rilascia alla fine della scrittura
- Si può verificare il fenomeno della **unrepeatable read**: due letture sugli stessi dati in momenti diversi (sempre all'interno della stessa transazione) possono portare a risultati diversi a causa dell'intervento di un'altra transazione che ha **modificato le righe** interessate  tramite un `UPDATE`tra una lettura e l'altra
- Si può verificare il fenomeno di **lost update**: cioè la perdita di una modifica causata dalla successiva modifica di un'altra transazione

## Transazione repeatable read

Una transazione dichiarata come **repeatable read** impedisce il fenomeno delle *dirty read*, delle *unrepeatable read* e dei *lost update*.

Con i seguenti effetti:
- Quando una transazione vuole fare una **lettura o scrittura**, acquisisce un lock che viene rilasciato alla terminazione della transazione
- per motivi di efficienza i lock solo relativi alle righe, anziché alle tabelle
- si può verificare il fenomeno della **phantom read** (fantasmi): due letture sugli stessi dati in momenti diversi (sempre all'interno della stessa transazione) possono portare a risultati diversi a causa dell'intervento di un'altra transazione che ha **modificato la quantità di righe** interessate tramite un `INSERT` o `DELETE`tra una lettura e l'altra

## Schema riassuntivo

| Isolamento | dirty read | unrepeatable read | lost update | phantom read | 
|:--:|:--:|:--:|:--:|:--:|
| READ UNCOMMITTED | sì | sì | sì | sì |
| READ COMMITTED| no | sì | sì | sì |
| REPEATABLE READ| no | no | no | sì |
| SERIALIZABLE | no | no | no | no |


Nota che le transazioni possono avere livelli di isolamento diverse tra loro, e tale livello riguarda solo la transazione stessa.

La scelta del livello di isolamento dipende da quanto è importante l'assenza di errori di lettura/scrittura e di quanto sono importanti le performance

In Postgresql l'isolamento di default è `READ COMMITTED`, e i 4 livelli di isolamento differiscono leggermente rispetto allo standard SQL
