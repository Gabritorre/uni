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

