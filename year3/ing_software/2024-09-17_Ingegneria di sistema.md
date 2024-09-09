# Ingegneria di sistema

## Sistema

Un **sistema** è un insieme di componenti (software, hardware, risorse umane, dati) che insieme realizzano un obiettivo comune.

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
| **Obiettivo** | è implicito nell’attività | specifiche del progetto |
| **Qualità** | conformità agli standard | conformità ai requisiti del progetto |
| **Tempo** | tempi standard, costanti | fissata dal piano di progetto |
| **Costo** | standard | budget di spesa |
| **Carattere** | ripetitive | temporanee e legate al team |
| **Esempi** | attività didattica, pagamenti, andare a lavoro | corso universitario, matrimonio, trasloco, campagne di marketing |

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
- Le aspettative implicite sono legate alla sfera “emozionale” dei requisiti del committente

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

L’organizzazione può essere strutturato in 3 modi:

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

L’efficienza non migliora proporzionalmente rispetto al numero di componenti del team, quindi a volte un team piccolo lavora meglio di un team di grandi dimensioni. Questo perché alcuni lavori non posso essere parallelizzati e con più persone si forma un overhead per coordinamento e comunicazione

La “forza lavoro” si misura in termini **mesi uomo:**

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
    - la risoluzione è di gruppo ma l’implementazione è assegnata a sottogruppi
    - comunicazione verticale con i leader e orizzontale tra sottogruppi
3. **Controllato centralizzato**
    - Team leader decide sulle soluzione e sull’organizzazione
    - comunicazione solo verticale tra leader e membri
