# Livello di rete

Il livello di rete si occupa della trasmissione di informazioni tra host che non fanno parte della stessa rete, attraverso l’utilizzo di dispositivi chiamati **router**, che si occupano di instradare delle unità di informazione chiamate **pacchetti**.

![](https://i.ibb.co/k4w0Zst/image.png)

Ogni nodo (router intermedio oppure host) è identificato da un particolare indirizzo. Per mandare una informazione, l’host crea un pacchetto contenente:

- l’indirizzo di destinazione
- il proprio indirizzo
- le informazioni da mandare

## Forwarding table

I router utilizzano un instradamento *hop-by-hop*: cioè quando un router riceve un pacchetto che non è destinato a se stesso, allora deve decidere a chi inoltrare quel pacchetto.

La decisione su a chi inoltrare il pacchetto è basata su una ***forwarding table***: cioè una struttura dati che mappa indirizzi a interfacce di rete su cui instradare i pacchetti che hanno quell’indirizzo.

Possono essere mappati anche un insieme di indirizzi su stessa interfaccia.

Nella realizzazione di una *forwarding table* possono accadere due errori:

- **buchi neri** (*black holes*): situazione in cui un router che deve instradare un pacchetto non ha una entry valida nella propria forwarding table. Il pacchetto verrà scartato
- **Cicli** (rounting loops): Un pacchetto attraversa in modo ciclico gli stessi router senza raggiungere la destinazione

Una buona forwarding table oltre ad evitare questi due problemi deve anche assicurarsi che da ogni host si possa raggiungere ogni altro host.

I router sono divisi a livello logico in due funzioni:

- **Data plane**: la funzione che si occupa di inoltrare i pacchetti in base alla forwarding table
- **Control plane**: la funzione che si occupa di creare le forwarding tables

Il modo più semplice per gestire il **control plane** è quello di creare le tabelle manualmente, ma con grandi reti sono necessari protocolli e algoritmi che si prendano carico della creazione e modifica in modo automatico.

Per far funzionare questi algoritmi i router devono inviarsi dei pacchetti particolari contenenti le informazioni della propria conoscenza della rete.

## Indirizzamento

Abbiamo due modi per strutturare le forwarding table:

- **Indirizzamento piatto**: la forwarding table contiene le informazioni per raggiungere ogni destinazione. Ogni nodo ha un indirizzo unico. Non è scalabile, le tabelle diventano enormi
- **indirizzamento gerarchico**: gli indirizzi sono raggruppati in blocchi, un blocco contiene anche milioni di indirizzi. Nella tabella ci sono gli indirizzi blocchi quindi la sua dimensione è notevolmente ridotta rispetto all’indirizzamento piatto.

## Eterogeneità del livello collegamento

Sulle reti non possiamo assumere che tutti i link utilizzino lo stesso datalink layer, in particolare i datalink layer utilizzano una dimensione prefissata massima per i frame che non possiamo ignorare.

![](https://i.ibb.co/z5QG6gj/image.png)

Bisogna quindi implementare un sistema per gestire le diverse dimensioni massime dei frame sui link, possiamo farlo in tre modi:

1. **Scarta e notifica**: Quando un pacchetto troppo grande pacchetto arriva a R1, viene scartato e viene notificato all’host A
2. **Frammenta e riassembla al prossimo *hop***: R1 è in grado di frammentare il pacchetto in più parti che vengono mandate ad R2 il quale attende l’arrivo di tutte le parti e lo riassembla per poterlo inoltrare nuovamente
3. **Frammenta e riassembla alla destinazione**: R1 è in grado di frammentare il pacchetto in più parti che vengono mandate ad R2, il quale inoltrerà direttamente le singole parti. L’host di destinazione si occuperà di riassemblare tutte le parti (metodo migliore).

## Algoritmi di routing

Un primo approccio per popolare la forwarding table (chiamato hot-potato) è quello di sfruttare i pacchetti di dati degli host: Inizialmente le tabella saranno vuote e man mano che gli host inviano i pacchetti, i router mandano dei messaggi in *broadcast* per trovare il percorso per raggiungere la destinazione e aggiornare la propria tabella di conseguenza.

Su reti più complesse è necessario utilizzare meccanismi dedicati alla popolazione delle tabelle.

Definiamo:

- Algoritmo: Una sequenza finita di istruzioni non ambigue che risolvono un determinato problema (distributed Bellman-Ford).
- Protocollo di routing: è un insieme di specifiche usate per implementare un algoritmo nei router. Se ogni produttore segue i protocolli allora indipendentemente dal software i router interagiranno senza problemi (RIP, Routing Information Protocol).
- Demone: è un software in esecuzione sul router che implementa un protocollo (Bird software).

Un compito del control plane è quello di gestire le **routing table**, un struttura dati più generale rispetto alle forwarding table, che per ogni indirizzo di destinazione `d` contiene varie informazioni (che dipendono dal protocollo utilizzato):

- `R[d].link` l’interfaccia di uscita verso cui inoltrare il pacchetto
- `R[d].cost` La somma delle metriche che compongono il percorso minimo per raggiungere la destinazione
- `R[d].time` il timestamp dell’ultimo pacchetto che portava informazioni riguardo al destinatario

## Distance Vector routing

Distance Vector (DV) è un protocollo di routing utilizzato per riempire le routing table dei router nella rete.

Assumiamo che ogni link abbia un costo per venir attraversato, assumiamo per semplicità che sia unitario per ogni link.

Inizialmente ogni router avrà nella propria tabella di routing la distanza verso se stesso, uguale a $0$.

![](https://i.ibb.co/WFrwLmK/image.png)

Periodicamente i router inviano il proprio distance vector (la tabella di routing) ai propri vicini, possiamo immaginare che ciò avvenga attraverso il seguente pseudo-codice:

```python
Every N seconds:
    v = Vector()
    for d in R[]:
        # add destination d to vector
        v.add(Pair(d, R[d].cost))
    for i in interfaces
        # send vector v on this interface
        send(v, i)
```

Ogni router che riceve il distance vector si comporterà come descritto dal seguente pseudo-codice:

```python
# V : received Vector
# l : link over which vector is received
def received(V, l):
    # received vector from link l
    for d in V[]
        if not (d in R[]):
            # new route
            R[d].cost = V[d].cost + l.cost
            R[d].link = l
            R[d].time = now()
        else:
            # existing route, is the new better?
            if ((V[d].cost + l.cost) < R[d].cost) or (R[d].link == l):
                # Better route or the current route is changed and still the best
                R[d].cost = V[d].cost + l.cost
                R[d].link = l
                R[d].time = now()
```

Il router che riceve il DV, itera attraverso tutti gli indirizzi inclusi nel DV, se contiene un indirizzo che il router non conosce lo inserisce nella propria tabella.

Se invece un indirizzo è già conosciuto ma ha un costo migliore oppure se quell’indirizzo è già ritenuto essere sul percorso migliore vengono semplicemente aggiornati i campi

Vediamo un esempio ci popolazione:

![](https://i.ibb.co/wN68zbQ/image.png)

Alla fine si entra nello stato di **convergenza** (*convergence*), quando si è in questo stato ci si aspetta che ogni router conosca il percorso più breve verso ogni altro router.

Note:

- Un solo ciclo di invio delle tabelle può non essere sufficiente
- Ci possono essere più percorsi minimi da un router ad un altro
- Ogni router ha un timer prima di rimandare la propria tabella ai vicini

## Recupero dei fallimenti

Dato che ogni router invia ad intervalli regolari i proprio DV, ogni router controlla regolarmente i timestamp dei percorsi nella propria tabella di routing, se passa troppo tempo senza ricevere un aggiornamento per quel percorso allora viene ignorato (assumendo che ci sia stato un fallimento su tale percorso).

In particolare se i router inviano la propria tabella ogni $N$ secondi, se passa più di  $3\times N$ secondi (scelta in base al protocollo) allora il costo di quel percorso viene impostato a $\infty$. Inoltre vengono informati i router vicini e magari c’è la possibilità che venga scoperto un nuovo percorso con costo migliore di $\infty$. Se ciò non accade dopo ulteriori $3 \times N$ secondi, il percorso viene rimosso dalla tabella.

Vediamo un esempio:

![](https://i.ibb.co/SmBrCVX/image-1.png)
