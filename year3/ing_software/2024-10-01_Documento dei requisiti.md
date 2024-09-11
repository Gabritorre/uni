# 2024-10-01_Documento dei requisiti

Il documento dei requisiti deve avere un **indice**, i punti di questo indice sono i seguenti:

1. **Introduzione**: descrizione delle funzionalità generali del sistema, e i contenuti del documento
2. **Glossario**: Definizioni dei termini tecnici usati nel documento (il lettore sarà anche un non tecnico)
3. **Modelli del sistema**: mostrare dei modelli che evidenziano le componenti del sistema e le relazioni tra loro
4. Definizione dei **requisiti funzionali**
5. Definizione dei **requisiti non funzionali**
6. **Evoluzione del sistema**: possibili cambiamenti dovuti all’evoluzione hardware o software
7. **Specifica dei requisiti** per gli addetti alle fasi successive del progetto
8. **Appendici**

## Modelli di sistema

Un **modello** è una presentazione astratta del sistema di cui si stanno analizzando i requisiti, serve per rappresentare le funzionalità e comunicare con il cliente.

Un esempio di modello di sistema è **UML (Unified Modeling Language)**, un linguaggio di modellazione che usa una notazione standard per rappresentare un sistema a livello astratto.

Si tratta di una **modellazione universale** quindi è abbastanza generica da ricoprire vari tipologie di sistema (modelli per programmazione ad oggetti, database, modelli web, …)

ogni sotto-categoria di modellazione UML serve per una determinata fase processo di sviluppo: ad esempio il **diagramma dei casi d’uso** serve nella fase della **specifica,** il *collaboration diagram* serve nella fase di progettazione, il *Component diagram* serve nella fase di sviluppo.

## Diagramma dei casi d’uso

Questo diagramma ci mostra:

- le modalità di utilizzo del sistema (i casi d’uso)
- gli attori, quindi gli utilizzatori e coloro che interagiscono con il sistema
- le relazione tra casi d’uso e attori

Un **caso d’uso**:

- rappresenta un possibile scenario di utilizzo del sistema dal punto di vista di chi la utilizza
- descrive l’interazione tra attori e sistema (ma non la logica interna)
- cattura **chi** fa **cosa** con quale **scopo**
- è composto da un linguaggio visuale accompagnato da documentazione (nella quale si usa un vocabolario dell’ambiente di utilizzo e non di sviluppo interno)

è importate costruire dei casi d’uso per:

- esplicitare e comunicare a tutti gli stakeholder i requisiti funzionali e gli usi tipici del sistema
- verificare che il sistema corrisponda a soddisfare le necessità dell’utente

Quindi in UML:

- il **caso d’uso** è rappresentato da **un’ellisse**, e rappresenta una interazione tra attori e sistema
- **L’attore**, rappresentato da un **omino,** indica un ruolo (indicato con una etichetta testuale)
- Lo **scenario** è una sequenza di azioni tra attore e sistema
- La **descrizione** è del testo che descrive lo scenario (attori coinvolti, trattamento degli errori, ordine temporale delle azioni)

## Template scenario

- **Nome caso d'uso** - Ogni caso d'uso deve avere un nome; il nome esprime il goal dell'utente nell'utilizzo del sistema.
- **Goal** (summary description) - descrizione della funzionalità fornita dal sistema e che soddisfa una necessità dell'utente, ossia che è percepita dallo stesso utente come "valore".
- **Attori** - persona, dispositivo o altra entità esterna al sistema che interagisce con il sistema. Per ogni caso d'uso esiste sempre un attore primario che è colui che inizia il caso d'uso stesso.
- **Precondizioni** - Condizioni che devono essere soddisfatte all'inizio del caso d'uso. Rappresentano le "garanzie minime" che devono essere soddisfatte per poter attivare lo scenario di utilizzo del sistema (Garanzie fornite dagli attori al sistema).
- **Trigger** - evento trigger che attiva il caso d'uso
- **Descrizione** (main success scenario o scenario principale) - descrizione della sequenza di interazioni più comune tra gli attori e il sistema. In particolare viene descritta la sequenza principale che porta alla conclusione del caso d'uso con successo. La descrizione è definita in termini di input forniti dall'attore e di risposta del sistema. Il sistema è trattato secondo un modello di tipo black-box, concentrandosi su cosa esso fa in risposta agli input, e non su come internamente queste risposte vengano prodotte.
- **Alternative** (estensioni) - descrizioni delle variazioni dalla sequenza di passi tipica del main success scenario. Tali alternative estendono lo scenario principale. La gestione delle eccezioni è un esempio tipico di tali estensioni. Non tutte le alternative portano necessariamente ad un fallimento del caso d'uso.
- **Postcondizioni** - Condizioni sempre soddisfatte al termine del caso d'uso (Garanzie fornite dal sistema agli attori)

## Esempio

![https://i.ibb.co/8rNRhTJ/image.png](https://i.ibb.co/8rNRhTJ/image.png)

- **Nome caso d’uso**: Withdraw Funds
- **Scope**: ATM system
- **Goal**: L’utente dell’ATM preleva una specifica somma di denaro da un conto corrente bancario valido.
- **Dipendenza con altri casi d’uso**: nessuna
- **Attori**: cliente del terminale ATM
- **Trigger**: inserimento di una carte di credito nel lettore del terminale ATM
- **Precondizioni**: il terminale dell’ATM è in attesa  e visualizza un messaggio di benvenuto
- **Descrizione**:
    1. Il cliente inserisce nel lettore del terminale ATM la sua carta di credito.
    2. Il sistema riconosce la carta e ne legge il numero (card number).
    3. Il sistema visualizza a terminale la richiesta di inserimento del PIN utente.
    4. Il cliente inserisce il suo PIN.
    5. Il sistema verifica che la carta non è scaduta, né è stata rubata o risulta smarrita.
    6. Il sistema verifica che il PIN inserito dal cliente corrisponda con quello della carta.
    7. Il sistema controlla che il conto corrente sia accessibile mediante l'utilizzo della carta.
    8. Il sistema visualizza il conto corrente del cliente e visualizza le possibili operazioni che il cliente può effettuare (Prelievo, Ultimi Movimenti, Saldo Disponibile, Altri Servizi).
    9. Il cliente seleziona il conto corrente desiderato (nel caso il cliente ne abbia più di uno) e seleziona l'operazione Prelievo.
    10. Il sistema visualizza la richiesta dell'ammontare da prelevare.
    11. Il cliente inserisce l'ammontare da prelevare.
    12. Il sistema verifica che il conto corrente contenga sufficienti fondi per consentire la conclusione dell'operazione e che non sia stato superato il limite massimo giornaliero per il prelievo.
    13. Il sistema autorizza il prelievo.
    14. Il sistema emette il denaro, registrando la transazione sul conto corrente.
    15. Il sistema stampa la ricevuta mostrando il numero della transazione, il tipo di operazione effettuata, la quantità di denaro prelevata e il saldo del conto corrente.
    16. Il sistema espelle la carta.
    17. Il sistema ritorna nello stato iniziale di attesa (idle), visualizzando il messaggio di "Benvenuto"
- **Alternative**:
    
    *2.a.* Se il sistema non riconosce la carta dell'utente, quest'ultima viene espulsa dal lettore.
    
    *5.a.* Se la carta risulta scaduta, il sistema la confisca.
    *5.b.* Se la carta risulta smarrita, il sistema la confisca.
    *5.c.* Se la carta risulta rubata, il sistema la confisca.
    
    *6.a.* Se il cliente ha inserito un PIN che non corrisponde con quello della carta, il sistema visualizza una nuova richiesta di inserimento del PIN. Se il cliente inserisce per tre volte un PIN errato, il sistema confisca la carta.
    
    *7.a.* Se il sistema verifica che il numero di conto non è valido, viene visualizzato un messaggio di errore e la carta viene espulsa dal lettore.
    
    *12.a.* Se non ci sono sufficienti fondi nel conto corrente, il sistema visualizza un messaggio di errore ed espelle la carta. Il terminale ATM viene riportato allo stato di attesa (idle) e viene visualizzato il messaggio di "Benvenuto".
    *12.b.* Se il limite giornaliero massimo di prelievo è stato già raggiunto, il sistema visualizza un messaggio di errore ed espelle la carta. Il terminale ATM viene riportato allo stato di attesa (idle) e viene visualizzato il messaggio di "Benvenuto".
    
    *14.a.* Se lil terminale ATM non ha sufficienti fondi per completare la transazione, il sistema visualizza un messaggio di errore, espelle la carta, il terminale ATM viene riportato allo stato di attesa (idle) e viene visualizzato il messaggio di "Benvenuto".
    *14.b.* Se il cliente seleziona da terminale il pulsante Cancel, il sistema cancella la transazione ed espelle la carta. Il terminale ATM viene riportato allo stato di attesa (idle) e viene visualizzato il messaggio di "Benvenuto".
    
- **Postcondizioni**: L’utente ha ottenuto la somma di denaro che aveva richiesto di prelevare.
- **Questioni aperte**: nessuna

## Relazione tra i casi d’uso

I casi d’uso possono essere relazionati tra loro, in particolare in 3 modi

### Relazione di inclusione

Questa relazione rappresenta l’invocazione di un caso d’uso da parte di un altro, utile per scomporre casi d’uso complessi in vari casi d’uso più semplici, utile anche per il riutilizzo di casi d’uso.

Si identifica questo tipo di relazione con una etichetta `<<include>>`  sulla freccia che collega i due casi d’uso.

![https://i.ibb.co/Cn6Gcn9/image.png](https://i.ibb.co/Cn6Gcn9/image.png)

### Relazione di generalizzazione

Questa relazione lega un caso d’uso generico ad uno più specializzato, la logica del caso specifico è simile ma non uguale a quello generico.

![https://i.ibb.co/1ZWbKwY/image.png](https://i.ibb.co/1ZWbKwY/image.png)

### Relazione di estensione

Questa relazione rappresenta una estensione della logica di base del caso d’uso.

Il caso d’uso esteso continua il comportamento del caso d’uso di base inserendovi delle azioni alternative da un certo punto in poi (chiamato **punto di estensione,** dichiarati nel caso d’uso base).

Si identifica questo tipo di relazione con una etichetta `<<extend>>`  sulla freccia che collega i due casi d’uso.

![https://i.ibb.co/LnKvbT9/image.png](https://i.ibb.co/LnKvbT9/image.png)

Il cliente effettua un ordine e si presuppone che l’utente sia già registrato, se non lo è allora si deve anche registrare

## Specifica dei requisiti

La specifica dei requisiti è una descrizione dettagliata delle funzionalità del sistema, utile sia in fase contrattuale sia per la progettazione e sviluppo.

Deve essere consistente con la precedente definizione dei requisiti.

Solitamente si utilizzano dei **form strutturati**.

Questi **form** hanno una forma più strutturata e formale:

- descrizione della funzione
- descrizione di input e la loro provenienza
- descrizione degli output e dove vanno a finire
- indicazione delle altre entità richieste
- pre e post condizioni
- specificare eventuali effetti collaterali

![https://i.ibb.co/CnWhF8Q/image.png](https://i.ibb.co/CnWhF8Q/image.png)

## Tracciabilità dei requisiti

Per tracciabilità si intende che i requisiti sono in qualche modo correlati tra loro.

Per mantenere una tracciabilità di queste correlazione è importante dare dei **numeri univoci** ai requisiti e indicare i riferimenti ai requisiti correlati.

È anche utile creare una **matrice di riferimenti.**

Alcuni requisiti potranno anche essere in conflitto (es. garantire sia sicurezza che efficienza può essere complesso) in tal caso si da un peso in percentuale che rappresenta la priorità del requisito.
