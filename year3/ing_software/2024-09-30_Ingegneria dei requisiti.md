# Ingegneria dei requisiti

I requisiti rappresentano la base del contratto e quindi è necessario prestarci attenzione per ridurre la probabilità di controversie a progetto consegnato.

È importante definire il livello di dettaglio dei vincoli: assenza di vincoli significa che qualsiasi sistema è valido, mentre averne troppi riduce la possibilità di trovare una soluzione che li rispetta tutti.

Ci deve anche essere coerenza tra i requisiti (due requisiti non si devono contrastare a vicenda)

Con **requisito** si intende una caratteristica che il prodotto deve possedere o un servizio che il prodotto deve offrire.

L’origine dei requisiti può essere: una richiesta dal committente oppure proviene dagli utilizzatori finali, oppure da vincoli normativi, oppure da una esperienza pregressa, …

Ogni requisito ha un proprio **scopo** all’interno del prodotto, quindi i requisiti sono delle caratteristiche che permettono di raggiungere un determinato scopo.

## Processo di analisi

Il documento dei requisiti deve essere fatto da una collaborazione tra il committente e il fornitore, trovando dei compromessi tra necessità e possibilità.

Per analizzare i requisiti è necessario fare:

- uno studio della realtà applicativa: capire in che ambiente deve collocarsi il prodotto (attraverso ricerche, competitors, fonti dei dati)
- comprendere quali sono livelli di qualità richiesti
- in questa fase non bisogna pensare al “come“ ma a “**cosa”** offrire

## Requisiti funzionali e non funzionali

Una principale suddivisione dei requisiti è tra requisiti funzionali e non:

- **requisiti funzionali**: Definiscono le funzionalità specifiche che il software deve fornire.
- **requisiti non funzionali**: Definiscono le qualità del sistema, come prestazioni, sicurezza e usabilità.

Quindi in sostanza i requisiti funzionali si concentrano su **cosa fa il sistema**, mentre i requisiti non funzionali si concentrano su **come il sistema funziona**.

## Motivazione dei requisiti

I requisiti servono per:

- definire i bisogni del committente, quindi il documento deve essere comprensibili da non tecnici.
- Deve anche essere chiaro e preciso dato che andrà in mano a chi si occuperà della fase successiva
- Servirà in fase di manutenzione, se si nota un comportamento del prodotto strano si va a guardare nel documento dei requisiti se era stato pensato così oppure se è un *bug*

## Step per determinare i requisiti

1. Definire gli obiettivi generali
2. Identificare e modellare i servizi, i vincoli, l’ambiente che riguardano il sistema (vengono coinvolti sia esperti del dominio applicativo sia potenziali utilizzatori)
    
    Approcci tipici sono quelli delle **interviste** (strutturate oppure informali), dei **questionari** oppure tramite **osservazioni** sul campo
    
3. Descrivere in linguaggio naturale i servizi che il sistema offre e i suoi vincoli (requisiti non funzionali)
4. Specificare i requisiti funzionali in dettaglio

Per descrivere i requisiti si possono adottare due tipi di stili:

- **Operazionale**: viene descritto il comportamento in modo algoritmico
- **Descrittivo**: viene descritto attraverso in linguaggio naturale (approccio preferito)

## Evoluzione dei requisiti

I requisiti si possono evolvere nel corso del progetto, il sistema è quindi necessario che sia aperto a modifiche.

**Requisiti durevoli**: sono quei requisiti che difficilmente potranno variare

**Requisiti volatili**: sono requisiti che possono facilmente variare durante lo sviluppo

## Errori nella definizione dei requisiti

Il modo usuale per scrivere le definizioni dei requisiti è tramite linguaggio naturale accompagnato da schemi.

Possono accadere dei problemi:

- mancanza di chiarezza
- confusione tra i requisiti, requisiti funzionali e non funzionali vengono mescolati
- raggruppare requisiti diversi in uno unico anziché tenerli distinti
- mancanza di precisione e completezza, anche ciò che sembra più banale da specificare non va tralasciato (es. dire che si può abilitare una determinata funzionalità nel software necessita anche di esplicitare se si può disattivare o meno, non va dato per scontato anche se banale)

## Regole di stesura

Vediamo delle pratica da adottare per una buona definizione dei requisiti:

- Il soggetto è sempre il sistema e non l’utente (non devono comparire frasi come “l’utente deve…”)
- Aderire a formati standard nella definizione dei requisiti
- Raggruppare i requisiti che sono legati alla stesso ambito
- Legare ai requisiti la motivazione per cui sono stati definiti

## Classificazione dei requisiti non funzionali

Abbiamo già visto che i requisiti non funzionali sono le caratteristiche del prodotto, e possono riguardare tre categorie:

- **Requisiti di prodotto**: il prodotto deve comportarsi in un certo modo (es. velocità di esecuzione, affidabilità)
- **Requisiti di processo**: riguardano il processo di produzione (es. conformità con degli standard, utilizzo di particolari strumenti di sviluppo)
- **Requisiti esterni**: requisiti derivati da fattori esterni al sistema e al processo di sviluppo (es. requisiti normativi, etici)

Per i requisiti non funzionali è importante specificare le metriche di appartenenza e le unità di misura, evitando di usare termini vaghi per descrivere il requisiti ma invece di quantificare le metriche
