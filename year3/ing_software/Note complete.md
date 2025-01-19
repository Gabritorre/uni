# Introduzione

Si può definire “*software engineering*” come la disciplina che fornisce delle regole per il processo di produzione del software.

## Prodotto software

Un **prodotto software** è composto da:

- Codice
- Dati
- Documentazione
    - Documentazione del sistema (come funziona il software)
    - Documentazione dell’utente (come utilizzare il software)

Le caratteristiche di un prodotto software sono:

- l’intangibilità
- Si “sviluppa” e non si “fabbrica”
- È facilmente duplicabile e distribuibile
- Si deteriora nel tempo (cambia l’ambiente su cui lavora, si aggiornano gli standard)
- Viene acquisito su licenza

In particolare presenta una curva dei guasti di questo tipo:

![https://i.ibb.co/YWHn23V/image.png](https://i.ibb.co/YWHn23V/image.png)

La curva ideale porterebbe a pensare che più applico delle *fix* più il software diventerà tollerante ai guasti, ma non è così, infatti ogni modifica porta con sé la probabilità di generare nuovi *bug.*

## Processo di produzione

Il processo di produzione di un software inizia con l’analisi dei requisiti e finisce con il ritiro dal mercato del prodotto.

Possiamo elencare le fasi in questo modo (indipendentemente dal tipo di processo impiegato):

1. **Analisi dei requisiti**: specificare cosa deve fare il sistema e quali sono i vincoli sul sistema
2. **Specifica**: Documentazione delle funzioni del sistema
3. **Progettazione**: Creare una soluzione al problema attraverso un modello astratto
4. **Implementazione**: Codificare il modello astratto
5. **Integrazione**: collegamento dei sotto-sistemi e dell’ambiente con il sistema principale
6. **Mantenimento**: Aggiornare il sistema con modifiche correttive e di aggiunta di funzionalità
7. **Ritiro**: Dismissione del sistema ed eventuale migrazione di dati nel nuovo sistema

L’organizzazione di tutte queste fasi, quindi il tempo, l’energia, il personale da impiegare, prende il nome di **Piano di progetto**

Il processo include anche gli strumenti utilizzati, le tecniche di sviluppo, e le risorse umane.

## Qualità del software

Per determinare la qualità di un software si valutano le **proprietà intrinseche** del prodotto, quindi solitamente non visibili direttamente dall’utente (es. copertura dei test case, manutenibilità del codice, struttura del codice) e le **proprietà percepite** dal committente (es. usabilità dell’interfaccia, tasso di errori).

Esiste uno standard ISO/IEC 25010 (2017) che permette di misurare la qualità del software con delle **metriche** (es. come si misura il fattore di facilità d’uso di una interfaccia?)

Lo standard definisce due tipi di qualità:

- **Qualità interna**: tutte quelle proprietà che sono rilevanti durante le fasi di sviluppo e di manutenzione del software stesso.
- **Qualità esterna**: tutte le proprietà rilevanti in fase di esecuzione

Queste qualità sono:

- **Functional stability**: Assicurare il corretto e completo funzionamento delle funzioni di base
- **Efficiency / performance**: tempo di esecuzione, utilizzo di risorse, spazio occupato
- **Compatibility**: interoperabilità con i sistemi con cui si appoggia (es. una applicazione con quali versioni di Android è compatibile?)
- **Usability**: facilità di apprendimento, prevenzione degli errori, estetica
- **Reliability**: tolleranza ai guasti, disponibilità, recupero
- **Security**: confidenzialità, integrità, autenticazione
- **Maintainability**: eleganza, modificabilità, riuso, analisi del codice
- **Portability**: facilità di portare il sistema in un ambiente diverso (modificare il codice senza stravolgere tutto)

Si è notato che la **maggior parte del costo** relativo al processo di produzione del software (le 7 fasi) risiede nel **mantenimento.**

Questo comporta che più tardi ci si accorge di un errore maggiore saranno i costi per sistemare il problema.



# Ingegneria di sistema

## Sistema

Un **sistema** è un insieme di componenti (software, hardware, risorse umane, dati) realizzano un obiettivo comune.

Un sistema è caratterizzato da:

- La presenza di un obiettivo
- È composto da delle componenti
- Ha degli attributi derivati dalle componenti (caratteristiche, configurazione, qualità, vincoli, stati)
- Ha delle relazioni tra le componenti

Un sistema ha delle cosiddette **proprietà emergenti** cioè delle proprietà non riconducibili alle singole componenti di cui è composto, ma che sono generate delle relazioni tra le componenti.

**Ingegnerizzare un sistema** significa progettare, implementare e installare i sistemi

## Requisiti di un sistema

I requisiti, e quindi gli obiettivi, di un sistema di dividono in:

- **requisiti funzionali**: i servizi che il sistema deve offrire
- **requisiti non funzionali**: le proprietà, i vincoli, le caratteristiche che caratterizzano il sistema

### Affidabilità di un sistema

Una proprietà fondamentale dei sistemi è **l’affidabilità**, cioè la capacità del sistema di rispondere all’obiettivo anche in caso di fallimento di una delle sue componenti

### L’ambiente

I sistemi sono dipendenti da un ambiente in cui essi funzionano.

La progettazione del sistema deve considerare anche **l’ambiente** su cui può operare attraverso delle opportune assunzioni.

## Software project management

Il *Software project management* è un insieme di attività necessarie per poter sviluppare un software:

- rispettando delle scadenze
- rispettando degli standard

Riguarda sia aspetti organizzativi (budget, risorse umane, …) sia aspetti tecnici.

Un **progetto** è un insieme di attività che:

- ha un inizio e una fine
- realizza un obiettivo
- è realizzato da un team di persone
- utilizza un certo insieme di risorse
- una volta terminato non ricomincia

Ci sono anche le cosiddette **attività di funzione** cioè le operazioni ordinarie che servono ad accompagnare le attività di progetto (sono le generiche attività della vita quotidiana)

|  | Attività di funzione | Attività di progetto |
| --- | --- | --- |
| Obiettivo | è implicito nell’attività | specifiche del progetto |
| Qualità | conformità agli standard | conformità ai requisiti del progetto |
| Tempo | tempi standard, costanti | fissata dal piano di progetto |
| Costo | standard | budget di spesa |
| Carattere | ripetitive | temporanee e legate al team |
| Esempi | attività didattica, pagamenti, andare a lavoro | corso universitario, matrimonio, trasloco, campagne di marketing |

## Studio di fattibilità

Il primo step di un progetto è lo studio di fattibilità, cioè un insieme di attività che portano a decidere se la realizzazione di un progetto è fattibile, con i relativi vincoli.

Lo studio di fattibilità ha l’obiettivo di:

- esaminare varie alternative di realizzazione
- definire architetture tecniche e applicative
- valutare costi e benefici
- produrre un piano di progetto

## Qualità di un progetto

Per valutare qualitativamente un progetto oltre a considerare il raggiungimento degli obiettivi nei tempi previsti bisogna considerare le aspettative *espresse* e *implicite* del committente:

- Le **aspettative espresse** sono legate alle specifiche tecniche del progetto
- Le **aspettative implicite** sono legate alla sfera “emozionale” dei requisiti del committente

## Caratteristiche di un progetto

Le caratteristiche di un progetto sono:

- Obiettivo e qualità
- tempo
- costo e risorse

Queste caratteristiche sono in competizione tra loro: se vogliamo migliorare un punto in particolare gli altri peggioreranno (es +qualità nello stesso tempo = aumento di costi e risorse, oppure -tempo con uguali costi = minor qualità)

## Ciclo di vita di un progetto

Possiamo rappresentare il ciclo di vita di un progetto con il seguente schema

![https://i.ibb.co/YfM4HDG/image.png](https://i.ibb.co/YfM4HDG/image.png)

![https://i.ibb.co/Z1JMhsr/image.png](https://i.ibb.co/Z1JMhsr/image.png)

## Struttura organizzativa

L’organizzazione del team può essere strutturato in 3 modi:

1. **Per funzione**: non è assegnato personale allo specifico progetto e non c’è un coordinatore delle attività (ideale per grandi aziende ben strutturate)
    
    ![https://i.ibb.co/pfb80ZD/image.png](https://i.ibb.co/pfb80ZD/image.png)
    
2. **Per progetto**: esiste un coordinatore (*project manager*) e il personale dipende direttamente da lui (ideale per aziende la cui struttura interna è molto dinamica e di dimensioni medio-piccole )
    
    ![https://i.ibb.co/0Js5syB/image.png](https://i.ibb.co/0Js5syB/image.png)
    
3. **A matrice**: esiste un coordinatore e il personale è in parte assegnato al team di progetto 
    
    (Nota che il rettangolo “Risorse” andrebbe di fianco a “controllo progetti”)
    

![https://i.ibb.co/wNK2d7K/image.png](https://i.ibb.co/wNK2d7K/image.png)

### Vantaggi e svantaggi

![https://i.ibb.co/1rJNRB3/image.png](https://i.ibb.co/1rJNRB3/image.png)

### Il project manager

Il project manager è un ruolo di coordinamento per le varie fasi del progetto, si occupa di:

- stesura della proposta di progetto
- stima dei costi
- planning e scheduling
- monitoraggio e revisione del progetto
- selezione e valutazione del personale
- stesura di rapporti e prestazioni

## Team di progetto

### Grandezza del team

L’efficienza non migliora proporzionalmente rispetto al numero di componenti del team, quindi a volte un team piccolo lavora meglio di un team di grandi dimensioni. Questo perché alcuni lavori non posso essere parallelizzati e con più persone si forma un overhead per coordinamento e comunicazione.

La “forza lavoro” si misura in termini di **mesi uomo:**

$$
\text{RisorseUmane} = \frac{\text{Persone}}{\text{mese}} \cdot \text{Durata}
$$

### Tipologie di team

Possiamo avere vari tipi di team:

1. **Democratico e decentralizzato**
    - assenza di un leader (può anche essere temporaneo a rotazione)
    - consenso di gruppo alle soluzioni
    - comunicazione orizzontale
    - funziona bene per problemi difficili
    - è difficile da imporre
    - non è scalabile (valido per gruppi piccoli)
2. **Controllato decentralizzato**
    - leader riconosciuto
    - la risoluzione dei problemi è di gruppo ma l’implementazione è assegnata a sottogruppi
    - comunicazione verticale con i leader e orizzontale tra sottogruppi
3. **Controllato centralizzato**
    - Team leader decide sulle soluzione e sull’organizzazione
    - comunicazione solo verticale tra leader e membri

﻿
# Piano di progetto

## Piano di progetto

Il **piano di progetto** è un documento formale che descrive e accompagna lo sviluppo del progetto dal suo inizio alla sua fine.

Il piano di progetto segue questa struttura:

1. **Introduzione**:
    1. una sintesi degli aspetti più rilevanti del progetto e del prodotto
    2. scadenze intermedie per marcare lo stato di avanzamento
    3. cambiamenti in corso d’opera
    4. materiali di riferimento
    5. definizioni di termini tecnici e abbreviazioni
2. **Organizzazione del progetto**
    1. scelta del modello di processo
    2. struttura organizzativa
    3. interfacce organizzative (relazioni con enti esterni al team di lavoro, come committente, finanziatore, utenti finali, …)
    4. Individuazione della responsabilità nei ruoli del progetto
3. **Descrizione dei processi gestionali**
    1. obiettivi e priorità
    2. assunzioni, dipendenze e vincoli
    3. gestione dei rischi
    4. meccanismi di monitoraggio e di controllo (meeting regolari, revisioni delle modifiche)
    5. pianificazione dello staff (organizzazione in base a competenze e difficoltà dei membri)
4. **Descrizione dei processi tecnici**
    1. metodi, strumenti e tecniche (ambiente di sviluppo, linguaggi)
    2. documentazione (strumenti per redigere la documentazione)
    3. funzionalità di supporto al progetto
5. **Pianificazione del lavoro, delle risorse umane e del budget**
    1. suddividere il progetto in piccole attività, descrivendo per ognuna: tempo, obiettivi e personale
    2. dipendenze tra le attività
    3. risorse necessarie alle attività
    4. pianificazione delle attività

## Modelli di processo

Vediamo dei modelli usati per organizzare le attività di un processo 

1. **Modello a cascata:**
    
    Le varie attività sono in sequenza con l’obiettivo di minimizzare la possibilità di tornare indietro.
    
    Il vantaggio è che se le attività vengono rispettate in modo rigoroso il lavoro per le attività successive è ridotto.
    
    Un cambiamento in corso d’opera risulta però molto costoso (sconsigliato per progetti innovativi)
    
    ![https://i.ibb.co/Mn8kC8s/image.png](https://i.ibb.co/Mn8kC8s/image.png)
    

1. **Modello evolutivo**:
    
    Ciclicamente si svolgono attività parallelamente che pian piano porteranno verso la versione finale. Un approccio di questo tipo prende anche il nome di **DevOps**. Valido per sistemi di vita breve o per sotto-sistemi di sistemi più grandi
    
    ![https://i.ibb.co/9s6ykp6/image.png](https://i.ibb.co/9s6ykp6/image.png)
    
    Si possono realizzare due approcci per la prototipazione:
    
    - una **prototipazione di tipo evolutivo**: in cui l’obiettivo è lavorare con il cliente per ottenere un sistema finale partendo da una specifica più generica
    - una **prototipazione di tipo usa e getta**: in cui l’obiettivo è capire i requisiti sperimentando le parti del sistema non ancora comprese
2. **Modello trasformazionale**:
    
    Basato sulla trasformazione di una specifica matematica in un programma eseguibile. Questo modello viene impiegato per componenti critiche del sistema
    
3. **Modello basato sul riutilizzo**:
    
    si basa sul riutilizzo di componenti
    
4. **Metodo di sviluppo *Agile***
    
    Si basa cicli brevi (**sprint**) di sviluppo (comprendenti di pianificazione, sviluppo, testing, review e rilascio)
    
    è una metodologia che segue quattro punti:
    
    - le persone e le interazioni sono più importanti dei
    processi e degli strumenti
    - è più importante avere software funzionante che documentazione
    - bisogna collaborare con i clienti indipendentemente dal contratto
    - bisogna essere pronti a rispondere ai cambiamenti piuttosto che rimanere aderenti al progetto (il team è invitato a suggerire delle modifiche in ogni momento)

## Analisi dei rischi

L’analisi dei rischi è una analisi sistematica e completa di tutti i possibili rischi che possono far fallire o intralciare la realizzazione del sistema in una qualunque fase dello sviluppo.

Un rischio è caratterizzato da due fattori:

- la probabilità con cui può accadere
- l’impatto che provoca nel caso accadesse

Identifichiamo delle categorie di rischio:

- **Rischi relativi ai requisiti**: I requisiti sono perfettamente noti?
- **Rischi relativi alle risorse umane**: è possibile contare sulle competenze dei membri per sviluppare il progetto?
- **Rischi tecnologici**: Si sta scegliendo la tecnologia corretta? anche in vista di sviluppi futuri?

### Gestione dei rischi

Ci sono due approcci per gestire i rischi:

- **Strategia reattiva**: si posticipa il trovare una soluzione ad una fase più avanzata del progetto
- **Strategia preventiva**: Si gioca di anticipo, valutando i possibili rischi con le loro probabilità e il loro impatto e si stabiliscono delle priorità. Si predisporrà quindi un piano di reazione a forma di tabella
    
    ![https://i.ibb.co/MGJpFC3/image.png](https://i.ibb.co/MGJpFC3/image.png)
    

Un rischio si può **classificare** secondo il seguente schema che relazione la probabilità di accadimento con l’impatto che esso provocherebbe:

![https://i.ibb.co/27682Jw/image.png](https://i.ibb.co/27682Jw/image.png)

## Pianificazione, Scheduling, Analisi dei costi

La pianificazione delle attività si può struttura in una sequenza fasi con un input e un output:

1. **Input**: l’obiettivo del progetto
    
    **Elaborazione**: identificare i compiti necessari per raggiungere l’obiettivo
    
    **Output**: creazione di una WBS (*Work breakdown structure*), cioè una scomposizione del progetto in piccole attività con opportuna descrizione
    
2. **Input**: WBS e struttura organizzativa dei membri
    
    **Elaborazione**: assegnazione delle responsabilità
    
    **Output**: matrice compiti-responsabilità
    
3. **Input**: vincoli temporali, di risorse, tecnici
    
    **Elaborazione**: stimare i tempi necessari per ogni attività
    
    **Output**: diagramma di PERT
    

1. **Input**: legami logici e scadenze tra le attività
    
    **Elaborazione**: schedulazione della attività su un asse temporale
    
    **Output**: diagramma di Gantt
    

Due definizioni importanti sono:

- *Milestones,* cioè i punti finali di ogni singola attività (ciò che determina quando una attività può considerarsi conclusa)
- *Deliverables*, cioè i risultati intermedi che sono forniti al committente (sono un sottoinsieme delle *milestones*)

### Work Breakdown Structure (WBS)

La strutturazione del progetto in attività segue questo schema:

![https://i.ibb.co/sRMfqXq/wbs.png](https://i.ibb.co/sRMfqXq/wbs.png)

Le **funzioni** sono della attività che seguono l’intero progetto.

Le **attività** sono delle suddivisioni del progetto in compiti, per ogni attività ci possono essere delle sotto-attività (per ogni attività è importante specificare il momento di inizio e fine)

I **task** (non strettamente necessari) ****sono delle attività di lavoro atomiche figlie di una specifica attività, hanno durata stimabile, necessitano di certe risorse, producono risultati tangibili

## Diagramma di Pert

Dalla WBS si realizza il **diagramma di Pert**, cioè un grafo che rappresenta le attività, le dipendenze e vari tipi di tempi di realizzazione previsti.

Nel diagramma di Pert devono essere presenti 4 tipi di tempi:

1. **ES (earliest start time**): minimo giorno di inizio dell’attività
2. **EF (earliest finish time)**: minimo giorno in cui l’attività può terminare (calcolato da $\text{ES} + \text{durata dell’attività}$)
3. **LF (latest finish time)**: l’ultimo giorno in cui quell’attività deve finire senza comportare un ritardo nelle attività che dipendono da essa.
4. **LS (latest start time)**: l’ultimo giorno in cui quell’attività deve iniziare senza comportare un ritardo nelle attività che dipendono da essa (calcolato da $\text{LF} - \text{durata dell’attività}$)

Esempio di diagramma di Pert

![https://i.ibb.co/GJMSzhQ/pert.png](https://i.ibb.co/GJMSzhQ/pert.png)

Il modo più comodo per compilarlo è partire da T1 e andare fino a T7 compilando ES e EF.

Una volta finito, si parte da T7 e si ritorna fino a T1 compilando LF e LS.

**Cammino critico**: è la successione di attività che richiede il massimo tempo, è composto dai nodi i quali non hanno una elasticità tra la prima riga (ES e EF) e la seconda (LS e LF), nell’esempio il cammino critico sarebbe

$$
T1 \to T4 \to T5 \to T7
$$

se una di queste attività accumula ritardo lo propaga all’intero progetto.

## Diagramma di Gantt

Una volta ottenute le attività con i relativi tempi e le relazioni tra di esse, posso costruire un **diagramma di Gantt**, cioè una grafico che mette le attività su un asse temporale.

![https://i.ibb.co/JsYtLkW/image.png](https://i.ibb.co/JsYtLkW/image.png)

Ovviamente i ritardi possono formarsi ma possono essere categorizzati in 2 modi:

- **ritardi di una fase critica:** comporta un ritardo sulla conclusione del progetto (es. un ritardo nell’attività A porta ad uno *shift* di tutte le successive attività che dipendono da essa). Le fasi critiche si ottengono dal cammino critico nel diagramma di Pert
- **ritardi di una fase non critica**: non comportano un ritardo sulla conclusione del progetto (es. un ritardo nell’attività D che riesce comunque a terminare prima di C non comporta una ritardo sul progetto, in quanto le attività successive dipendono sia da C che da D. Ovviamente se D va oltre a C allora il ritardo sul progetto si forma.


# Stima dei costi

In un progetto è importante saper stimare i costi in termini di tempo, risorse, sforzo e saper stimare il valore monetario del progetto.

## Metrica di sforzo

Per sforzo (*effort*) si intende la misura del quantitativo di lavoro umano necessario per svolgere il processo.

L’unità di misura comunemente usata è il **mese-uomo** (man-month), un mese-uomo si definisce come il **quantitativo di lavoro che un singolo dipendente può svolgere in un mese lavorativo.**

Ogni persona ha una propria produttività, che dipende dalla sua età, competenza, esperienza, affinità con il team, …

Quindi questa metrica è difficilmente stimabile.

## Fattori di costo

I principali fattori che influenzano il costo (quindi le spese per portare a termine il progetto) sono:

- Stipendi del personale
- Strumentazione (HW e SW)
- Viaggi e formazione
- Rifornimento, riscaldamento, illuminazione
- amministrazione, tecnici, pulizie
- rete e telecomunicazione

Una stima a grandi linee stabilisce che una volta determinati gli stipendi del personale, il resto dei fattori valgono almeno quanto gli stipendi, quindi si può stabilire che all’incirca il costo del progetto è il doppio del costo indirizzato agli stipendi.

## Prezzo

Il prezzo che un eventuale cliente dovrebbe pagare per il progetto dovrebbe essere la somma tra il costo e il profitto.

Però la relazione tra costo e prezzo non è sempre semplice. Il prezzo viene spesso influenzato da fattori esterni (organizzativi, politici, aziendali, reputazione, mercato, stato finanziario dello sviluppatore, contratti)

## Come stimare i costi

Abbiamo diversi approcci:

- Basare la stima su progetti simili già sviluppati. Si deve quindi trovare analogia tra il progetto e quelli presi come riferimento in termini di dimensione, scopi e metodo di lavoro.
- approccio *Price-to-win*: basare il costo su quanto il cliente è disposto a spendere, con il rischio che la cifra concordata non sia sufficiente per realizzare un progetto di qualità
- Misurare la complessità del sistema dall’esterno (dal lato utente), ad esempio:
    - numero di input, di output, di richieste, di file utilizzati, di interfacce esterne
    - necessità di fare backup
    - le prestazioni sono un elemento importante?
    - sono richieste comunicazioni online

È comune che la stima dei costi fatta nelle fasi iniziali del progetto risulti poi essere sballata e man mano che si prosegue con il progetto si dovrebbe ottenere una stima sempre più realistica.

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

# Documento dei requisiti

Il documento dei requisiti deve avere un **indice**, i punti di questo indice sono i seguenti:

1. **Introduzione**: descrizione delle funzionalità generali del sistema, e i contenuti del documento
2. **Glossario**: Definizioni dei termini tecnici usati nel documento (il documento è destinato anche ai non tecnici)
3. **Modelli del sistema**: mostrare dei modelli che evidenziano le componenti del sistema e le relazioni tra loro
4. Definizione dei **requisiti funzionali**
5. Definizione dei **requisiti non funzionali**
6. **Evoluzione del sistema**: possibili cambiamenti dovuti all’evoluzione hardware o software
7. **Specifica dei requisiti** per gli addetti alle fasi successive del progetto
8. **Appendici**

## Modelli di sistema

Un **modello** è una presentazione astratta del sistema di cui si stanno analizzando i requisiti, serve per rappresentare le funzionalità e comunicare con il cliente.

Un esempio di modello di sistema è **UML (Unified Modeling Language)**, un linguaggio di modellazione che usa una notazione standard per rappresentare un sistema a livello astratto.

Si tratta di una **modellazione universale** quindi è abbastanza generica da ricoprire vari tipologie di sistema (modelli per programmazione ad oggetti, database, modelli web, …).

Ogni sotto-categoria di modellazione UML serve per una determinata fase del processo di sviluppo: ad esempio il **diagramma dei casi d’uso** serve nella fase della **specifica,** il *collaboration diagram* serve nella fase di progettazione, il *Component diagram* serve nella fase di sviluppo.

## Diagramma dei casi d’uso

Questo diagramma ci mostra:

- le modalità di utilizzo del sistema (i casi d’uso)
- gli attori, quindi gli utilizzatori e coloro che interagiscono con il sistema
- le relazione tra casi d’uso e attori

Un **caso d’uso**:

- rappresenta un possibile scenario di utilizzo del sistema dal punto di vista di chi lo utilizza
- descrive l’interazione tra attori e sistema (ma non la logica interna)
- cattura **chi** fa **cosa** e con quale **scopo**
- è composto da un linguaggio visuale accompagnato da documentazione (nella quale si usa un vocabolario dell’ambiente di utilizzo e non di sviluppo interno)

è importate costruire dei casi d’uso per:

- esplicitare e comunicare a tutti gli stakeholder i requisiti funzionali e gli usi tipici del sistema
- verificare che il sistema soddisfi le necessità dell’utente

In particolare, in UML:

- il **caso d’uso** è rappresentato da **un’ellisse**, e rappresenta una interazione tra attori e sistema
- **L’attore**, rappresentato da un **omino,** indica un ruolo (indicato con una etichetta testuale)
- Lo **scenario** è una sequenza di azioni tra attore e sistema
- La **descrizione** è del testo che descrive lo scenario (attori coinvolti, trattamento degli errori, ordine temporale delle azioni)

## Template scenario

- **Nome caso d'uso** - Ogni caso d'uso deve avere un nome; il nome esprime il goal dell'utente nell'utilizzo del sistema.
- **Goal** - descrizione della funzionalità fornita dal sistema e che soddisfa una necessità dell'utente, ossia che è percepita dallo stesso utente come "valore".
- **Attori** - persona, dispositivo o altra entità esterna al sistema che interagisce con il sistema. Per ogni caso d'uso esiste sempre un attore primario che è colui che inizia il caso d'uso stesso.
- **Precondizioni** - Condizioni che devono essere soddisfatte all'inizio del caso d'uso. Rappresentano le "garanzie minime" che devono essere soddisfatte per poter attivare lo scenario di utilizzo del sistema (Garanzie fornite dagli attori al sistema).
- **Trigger** - evento trigger che attiva il caso d'uso
- **Descrizione** - descrizione della sequenza di interazioni più comune tra gli attori e il sistema. In particolare viene descritta la sequenza principale che porta alla conclusione del caso d'uso con successo. La descrizione è definita in termini di input forniti dall'attore e di risposta del sistema. Il sistema è trattato secondo un modello di tipo black-box, concentrandosi su cosa esso fa in risposta agli input, e non su come internamente queste risposte vengano prodotte.
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

I casi d’uso possono essere relazionati tra loro in 3 modi.

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

Il cliente effettua un ordine e si presuppone che l’utente sia già registrato, se non lo è allora si deve anche registrare.

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

# Testing

Basandosi sul documento dei requisiti è già possibile definire le modalità di collaudo del sistema, generando così un **piano di testing.**

Il piano di testing definisce in che modo le attività di testing accompagnano lo sviluppo del progetto.

Vediamo alcune definizioni utili:

- **Errore**: incomprensione umana riguardo l’interpretazione del problema, la risoluzione del problema o nell’uso di strumenti
- **Difetto**: manifestazione software dell’errore umano (*bug*)
- **Malfunzionamento**: situazione in cui il software non si comporta come previsto a causa di un difetto

La fase di testing consiste nel ottenere un malfunzionamento, trovare il difetto relativo e cercare di capire l’errore che ha generato quel difetto.

Un test ha successo quando trova malfunzionamenti, il fatto di non trovare malfunzionamenti non assicura la loro assenza (il testing è quindi una condizione necessaria ma non sufficiente per garantire la correttezza del codice)

## Casi di test

**Casi di test** (*test case*): insieme di input per testare il sistema (chiamati “dati di test”) e i corrispettivi output attesi.

Un criterio per generare dei test si dice:

- **Affidabile** se il criterio genera dei test case che danno sempre lo stesso risultato (sempre un successo o sempre un insuccesso)
- **Valido** se qualora il programma non sia corretto esiste almeno un test che fa emergere un malfunzionamento

Garantire entrambe le proprietà non è sempre banale, è quindi importante dare delle **priorità**.

Vediamo delle regole generali:

- i test devono testare le caratteristiche globali del sistema piuttosto che testare le singole componenti
- se il sistema è una nuova versione è più importante testare le caratteristiche che erano già presenti nella precedente versione
- testare le situazione più comuni è più importante di testare casi atipici (hanno meno probabilità di accadere)

## Specifica dei casi di test

La documentazione dei casi di test dovrebbe seguire questi campi:

- Identificativo del test case
- descrizione
- precondizioni
- valori in input
- output attesi
- output riscontrato
- esito: positivo (rilevato malfunzionamento), negativo (nessun malfunzionamento)
- postcondizioni (simili agli output attesi ma verificabili sulle risorse, come database, file, device, …)
- priorità

La specifica serve sia in fase di sviluppo per identificare delle correzioni necessarie, ma anche per dimostrare che il software è fatto bene.

## Test di moduli

Un **modulo** in questo caso rappresenta un blocco di codice da testare.

Per testare un modulo occorre simulare i chiamanti del modulo (**DRIVER**) e gli utilizzatori del risultato prodotto dal modulo (**STUB**)

Esistono diverse tipologie di testing:

- Incremental testing
    - Top-down testing
    - Bottom-up testing
- Thread testing
- Stress testing
- Back-to-back testing
- Black-box testing
- White-box testing
- Verifica statica

## Incremental testing

È un modo di testare ripetutamente, ad ogni passo si aggiungono dei moduli con i relativi test case.

L’approccio **top-down** consiste nel testare prima i livelli più generici del sistema in cui i livelli più basse vengono temporaneamente implementati come STUB (chiamate di funzioni con la stessa firma delle funzioni vere ma che non fanno niente) e man mano si testano i livelli più specifici

L’approccio **bottom-up** consiste nel testare prima i livelli più profondi del sistema in cui temporaneamente i livelli più alti vengono implementati come DRIVER (chiamanti che simulano l’ambiente reale) e man mano si testano livelli più generici

## Thread testing

Consiste nel testare tutte le possibili strade che l’esecuzione può intraprendere in base all’input.

Gli `if` nel codice rappresenta una divisione dell’esecuzione.

## Stress testing

Si basa sul fatto che mettendo il sistema sotto pressione è più probabile che si verifichino malfunzionamenti.

Si cerca si superare i limiti previsti in fase di progettazione e si vede fino a che punto il sistema regge e quali sono le conseguenze quando si verifica il fallimento.

## Back to back testing

Si utilizzano diverse versione software per testare che durante lo sviluppo gli output di componenti comuni siano uguali. Se non fossero uguali significa o che le nuove aggiunte e modifiche hanno rotto qualcosa oppure che la componente in comune ha leggermente cambiato il suo scopo

## Black-box testing

Si vede il sistema come una scatola nera, si basano quindi i test sulla specifica del sistema ancora prima passare all’implementazione.

Bisogna quindi fare un partizionamento degli input per separare tutti i tipi di input validi e invalidi

## White-box testing

I casi di test sono ottenuti da codice, si cerca quindi di testare tutti i comandi e i cammini di esecuzione del codice.

In questo metodo bisogna rispettare dei criteri:

- Copertura delle istruzioni: esercitare almeno una volta ogni istruzione durante il test
- Copertura delle decisioni: ogni percorso di esecuzione deve venir testato, nelle condizioni (gli if) devo testare sia il caso in cui entro sia il caso in cui non entro (è importante testare i valori ai limiti della condizione).
- Copertura dei cammini: bisognerebbe testate le combinazioni di tutti i percorsi, ma sono potenzialmente infiniti. Bisogna calcolare un numero minimo di test per testare le combinazioni indipendenti, tramite la **complessità ciclomatica**

### Complessità ciclomatica

Il numero minimo di test necessari per attraversare tutti i cammini indipendenti è uguale alla complessità ciclomatica che si calcola a partire dal **diagramma di flusso** del programma e si ottiene con la seguente formula

$$
\text{Complessità ciclomatica = }\text{Numero di archi} - \text{Numero di nodi} + 1
$$

(per dettagli e altre versioni leggermente diverse della formula guarda [https://it.wikipedia.org/wiki/Complessità_ciclomatica#Descrizione](https://it.wikipedia.org/wiki/Complessit%C3%A0_ciclomatica#Descrizione)

Esempio

![https://i.ibb.co/bL9T76S/image.png](https://i.ibb.co/bL9T76S/image.png)

**Numero di archi: 17** (si conta anche la freccia verso il nodo 1 perché si immagina una freccia dal nodo di fine (13) verso l’inizio (1) per far ripartire il programma. Da questo motivo deriva il fatto di fare +1 nella formula)

Numero di nodi: 13

Complessità ciclomatica: $17-13 + 1 = 5$

Quindi fare meno di 5 test **non è sufficiente**, però farne di più non assicura che sia sufficiente.

## Verifica statica

Finora abbiamo visto metodi di testing durante l’esecuzione del programma, ma si può testare il codice anche prima dell’esecuzione tramite l’analisi mirata del codice sorgente (terminazione dei cicli, variabili non inizializzate, mancata deallocazione, …) ed esecuzioni mentali o a voce (assieme a collaboratori) del codice per identificare incoerenze o dubbi.

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

# UML e progettazione software

UML (*Unified Modeling Language*) rappresenta un linguaggio per creare dei modelli che rappresentano vari punti di vista di una progettazione, possiamo pensare alla progettazione di una casa in cui vengono disegnate varie piantine (vista orizzontale, vista verticale, vista impianto idraulico, vista impianto elettrico, ecc…)

Si possono categorizzare i modelli UML in:

- Modelli a **vista statica**: il tempo viene ignorato
    - Diagramma dei casi d’uso (già visto)
    - Diagramma delle classi
    - Diagramma dei componenti
    - Diagramma di distribuzione
- Modelli a **vista dinamica**: la sequenza di azioni nel tempo viene considerata
    - Diagramma di sequenza
    - Diagramma di stato

## Diagramma delle classi

Sono gli stessi diagrammi utilizzati nella programmazione ad oggetti e nei database.

Rappresentano classi di oggetti con i loro attributi e operazioni, e le interazioni tra le classi.

## Diagramma di sequenza

Definisce la logica di uno scenario corrispondente ad un caso d’uso.

Il caso d’uso che avevo già definito mi diceva **cosa** doveva fare il sistema, con questo diagramma specifico **come** lo si deve fare. Descrive, quindi, interazioni tra oggetti che collaborano per svolgere un compito, le interazioni sono paragonabili alla chiamata di funzioni.

Si tratta di un modello dinamico in quanto la **sequenza temporale delle azioni è importante**.

L’aspetto di questo diagramma è il seguente:

![https://i.ibb.co/16Lktqr/image.png](https://i.ibb.co/16Lktqr/image.png)

Lo scambio di messaggio può essere **sincrono o asincrono:**

- il **messaggio sincrono** (rappresentato con una freccia piena) va da chiamante a chiamato, il nome dovrebbe rappresentare il metodo invocato. È sincrono in quanto il chiamante attende che il metodo finisca prima di proseguire. La freccia tratteggiata rappresenta il ritorno.
- il **messaggio asincrono** (rappresentato con una freccia non riempita) va da chiamante a chiamato, il nome dovrebbe rappresentare il metodo invocato. È asincrono in quanto il chiamante non attende che il metodo finisca prima di proseguire, si formano delle interazioni concorrenti.

### Condizioni

Possiamo avere anche una **esecuzione condizionale di un messaggio**, cioè un messaggio (metodo) viene chiamato solo se una condizione si avvera.

Si rappresenta aggiungendo la condizione tra parentesi quadre prima del nome del messaggio

### Iterazioni

Posso rappresentare una esecuzione ciclica di messaggi, si rappresenta aggiungendo un asterisco * tra la condizione e il messaggio.

Si possono iterare anche blocchi di più messaggi, racchiudendo i messaggi in un box e si scrive solitamente in alto a sinistra la condizione

### Auto-chiamata

L’auto-chiamata descrive l’invocazione di un metodo appartenente allo stesso oggetto, si rappresenta con una freccia circolare che torna su se stessa

### Creazione di un oggetto

È possibile che un oggetto venga creato durante le sequenza di azioni del diagramma, la freccia avrà una etichetta “new” o “create” e il rettangolo rappresentante l’oggetto creato andrà posizionato nel corretto momento temporale nel diagramma

![https://i.ibb.co/ysJ3jyz/image.png](https://i.ibb.co/ysJ3jyz/image.png)

### Eliminazione di un oggetto

È possibile terminare prematuramente la vita di un oggetto, rendendo, da quel momento in poi, illegale ogni chiamata ad un suo metodo.

Si rappresenta mettendo una “X” sulla sua linea di vita

### Esempio completo

![https://i.ibb.co/kM1ZWjq/esempio-completo.png](https://i.ibb.co/kM1ZWjq/esempio-completo.png)

## Diagramma di stato

Questo tipo di diagramma dà un punto di vista sugli stati assunti dagli oggetti durante la loro vita.

Gli **eventi,** che possiamo ricondurre ai messaggi nei diagrammi di sequenza, attivano delle **transazioni di stato**, lo **stato** è costituito dai valori assunti dalla proprietà dell’oggetto

Abbiamo due stati speciali (*pseudostati*):

- lo stato iniziale
- lo stato finale

Gli stati si rappresentano con dei rettangolo stondati

L’evento può essere:

- una chiamata sincrona o asincrona
- una condizione predefinita che diventa vera
- un periodo di tempo

Gli eventi si rappresentano con delle frecce con una etichetta al nome dell’evento.

### Nome evento

Il nome dell’evento segue una sintassi particolare:

`nome_evento(parametri_separati_da_virgola)[condizione_di_attivazione]/[azioni_di_risposta_all'evento]`

![https://i.ibb.co/X4j4kkS/image.png](https://i.ibb.co/X4j4kkS/image.png)

![https://i.ibb.co/tLrDg2y/esempio.png](https://i.ibb.co/tLrDg2y/esempio.png)

Quando si verifica un evento l’ordine di esecuzione è il seguente:

1. Se è in esecuzione una attività, questa viene interrotta
2. si esegue l’azione di uscita dall’attuale stato
3. si esegue l’azione di entrata nel nuovo stato
4. si inizia l’attività del nuovo stato

## Diagramma dei componenti

Evidenzia l’organizzazione e le dipendenze delle componenti software (i file che poi si andranno a scrivere)

![https://i.ibb.co/N7cLK9N/image.png](https://i.ibb.co/N7cLK9N/image.png)

## Diagramma di distribuzione

Mostra come sono configurate e allocate le unità HW e SW dell’applicazione, cosa va su un server, cosa va sul client, cosa è in cloud e come questi nodi comunicano.

![https://i.ibb.co/X8vKQQz/image.png](https://i.ibb.co/X8vKQQz/image.png)

# Progettazione di interfacce utenti

All’interno del documento di progettazione si deve anche progettare l’interfaccia utente.

Bisogna fare delle scelte per avere una visione astratta dell’interfaccia basandosi sull’analisi dei requisiti. È una fase importante della progettazione perché la UI è la prima cosa che viene vista dall’utente e spesso l’utente giudica il prodotto dalla sua interfaccia.

Una interfaccia ben sviluppata deve ridurre il più possibile la probabilità che un utente possa commettere un errore, è quindi importante consultare l’utenza target del prodotto.

Durante la progettazione vanno tenuti in considerazione dei fattori cognitivi dell’utente finale, un esempio è la **memoria:**

- **Memoria sensoriale**: capacità illimitata ma decadenza quasi immediata
- **Memoria a breve termine**: capacità limitata, persistenza di alcuni secondi
- **Memoria a lungo termine**: capacità illimitata, durata illimitata

L’obiettivo è quello di fare affidamento sulla memoria a lungo termine, cioè su conoscenza semantica (ricordo perché so il significato) o procedurale (ricordo perché l’ho fatto).

## Principi di progettazione

Vediamo dei principi da tenere in considerazione durante la progettazione dell’interfaccia:

- Usare termini usati dall’utente (non troppo tecnici ed evitare inglesismi spinti)
- Il sistema deve essere consistente (comandi e menu devono seguire lo stesso formato)
- Bisogna prevedere la possibilità che l’utente possa sbagliare, va quindi predisposto un UNDO o una conferma
- Fornire guide e manuali in caso di necessità
- Gli errori devono essere gentili, consistenti e con un linguaggio non tecnico
- Implementare un sistema di help
    - “help?” inteso come ottenere più informazioni
    - “help!” inteso come bisogno di aiuto




