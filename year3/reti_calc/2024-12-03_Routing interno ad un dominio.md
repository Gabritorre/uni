# Routing interno ad un dominio

## Contesto

Internet è un'interconnessione di reti, spesso chiamate **domini**. Un dominio può essere una piccola impresa che gestisce pochi router in un singolo edificio, una grande azienda con centinaia di router in diverse sedi, oppure un grande ISP che gestisce migliaia di router.

Per consentire a questi domini di scambiare informazioni di instradamento in modo efficiente, vengono utilizzate due classi di protocolli di instradamento:

- Protocolli di **instradamento dentro un dominio**.
    
    Questi protocolli hanno solitamente due obiettivi:
    
    - distribuire **informazioni di instradamento** corrispondenti al percorso più breve tra due router all'interno del dominio.
    - devono consentire ai router di **recuperare rapidamente in caso di guasti**.
- Protocolli di **instradamento tra domini**.
    
    Questi protocolli hanno l'obiettivo è distribuire informazioni di instradamento tra domini, considerando ogni dominio come una "scatola nera" senza quindi sapere come sono fatti e i protocolli utilizzati al loro interno.
    

Una differenza molto importante tra i due riguarda le **politiche di instradamento:** All'interno di un singolo dominio, tutti i router sono considerati uguali e, quando sono disponibili più percorsi per raggiungere la destinazione, il percorso migliore (percorso con il minor ritardo, il minor numero di hop o la larghezza di banda più alta).

Quando si considera l'interconnessione di domini gestiti da organizzazioni diverse, questo non è più vero in quanto si vuole trovare il percorso più economico verso ciascuna destinazione in base a degli accordi fatti tra le organizzazioni.

## Routing dentro un dominio

Il routing dentro un dominio si riferisce ai protocolli e alle tecniche utilizzate per instradare i pacchetti all'interno di una singola rete amministrativa (un dominio).

Le reti di grandi dimensioni hanno spesso topologie interne complesse, con diverse sottoreti interconnesse da router interni al dominio.

I **router di confine** sono dei router che si possono interfacciare con l’esterno della rete in modo da inoltrare pacchetti da e verso altri domini.

## OSPF

OSPF (*Open Shortest Path First*) è uno dei protocolli di routing Intradomain più utilizzati.

Tale protocollo è una versione standardizzata del **routing link-state**, che è più reattivo ai guasti rispetto al routing con *distance vector*, ma genera un maggiore overhead di rete.

Dato che un dominio ha in genere un numero limitato di sottoreti, l'overhead generato è gestibile e quindi si ha un buon compromesso.

OSPF porta alcune modifiche rispetto al routing link-state di base:

- Il concetto di Area
- il supporto alle LAN

### Aree

la rete viene suddivisa in **aree.** Un'area è una parte fisicamente contigua della rete in cui sono presenti dei router, tale area è connessa ad altre aree tramite altri router.

Esistono quindi due tipi di router OSPF:

- **Router interni:** connessi solo ad altri router nella stessa area.
- **Router di confine:** connessi a router di aree diverse.

Esiste una speciale area detta **area zero** o **backbone area**,  che raccoglie tutti i router di confine e i router che non fanno parte di nessuna altra area. All’interno di un dominio si ha un'**unica area zero**.

![https://i.ibb.co/fDKbXqD/image.png](https://i.ibb.co/fDKbXqD/image.png)

- R1, R3, R5, R4 sono router interni all’area 1
- R7, R8, R9, R10 sono router interni all’area 2
- RA, RB, RC sono router di confine
- RD è un router interno all’area 0

OSPF combina link-state e distance vector per ottimizzare le prestazioni e ridurre l’overhead:

- **All'interno di un'area** (non l’area 0), i router utilizzano il **routing link-state**
- **Tra le aree**, i router di confine utilizzano il **routing distance vector** nell’area 0

In questo modo ogni router di un’area non conosce la topologia delle altre aree ma sa come arrivarci (passando per il proprio router di confine).

### Supporto per le LAN

Se supponiamo di avere una area con questa situazione, in cui quattro router sono connessi ad uno switch

![https://i.ibb.co/ZW6L8bD/image.png](https://i.ibb.co/ZW6L8bD/image.png)

In cui supponiamo che R1 e R4 siano router di confine.

Un modo in cui OSPF potrebbe rappresentare questa area (con il routing link state) sarebbe una full mesh.

![https://i.ibb.co/Mc0nDH9/image.png](https://i.ibb.co/Mc0nDH9/image.png)

Questa situazione però crea la falsa percezione di percorsi multipli tra i router di confine.

in caso di **guasto dello switch**, tutti i link sarebbero rotti ma i router notando che il loro attuale percorso non funziona tenterebbero di usare altri percorsi che in realtà non esistono.

Per evitare ciò, OSPF permette di selezionare un **designated router**. Gli altri router esportano il proprio link state solamente al router designato e non a tutti i router.

Supponendo di nominare R1 a designated router, al posto di una full mesh si avrebbe una struttura di questo tipo

![https://i.ibb.co/gmqBZ8x/image.png](https://i.ibb.co/gmqBZ8x/image.png)

In questo modo si riduce il traffico generato dal link state e si velocizza il riconoscimento del fallimento dei link.
