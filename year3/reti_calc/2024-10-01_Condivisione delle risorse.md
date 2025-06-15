# Condivisione delle risorse

Fino ad ora abbiamo visto il modo più semplice per condividere risorse, cioè con un singolo link tra due host, ma se abbiamo più host ci sono vari metodi in cui possiamo interconnetterli.

Vediamo varia topologie di rete:

- **Rete full mash**:
    - ogni host ha un collegamento diretto con ogni altro host
    - molto resistente ai fallimenti
    - non scalabile: tanti link e tante interfacce per ogni host
- **Rete a bus**:
    - Un solo link fisico a cui si connettono tutti gli host (tipicamente era un cavo coassiale)
    - economica
    - non scalabile: con tanti host collegati allo stesso link si provocherebbero collisioni molto di frequente
    - non robusto: se si rompe il link fisico la rete è divisa in due parti non comunicanti
- **Rete ad anello**:
    - come la rete a bus ma circolare
    - resiste ad una sola rottura del link
    - comunque non scalabile
- **Rete a stella**:
    - c’è un centro stella (ad esempio uno switch ethernet) a cui si collegano gli host, questo centro stella gestisce il traffico
    - molto resistente ai fallimenti, se però si rompe il centro stella la rete non funziona più
    - buona gestione: da un punto si controlla tutto
    - efficienza dal punto di visto dei link fisici utilizzati (uno per ogni host)
    - oggi utilizzata nelle LAN
    - in questo tipo di rete le collisioni non sono un problema per come funzionano i cavi ethernet moderni (utilizzano coppie di cavi diversi per la trasmissione e la ricezione)
- **Rete ad albero**:
    - Si ha una struttura ad albero in cui i nodi sono delle LAN (una rete a stella)
    - molto scalabile
    - non resistente ai fallimenti, se un link che connette due nodi si rompe la rete si disconnette
- Reti Data center e Fat tree
    - sono reti utilizzate in ambito server che si basano sulla topologia ad albero ma hanno una forte ridondanza

## Bottleneck

Quando una comunicazione passa attraverso più link, diciamo che la connessione è *multi-hop*.

In questo tipo di comunicazione il collo di bottiglia (*bottleneck*) è dato dal link più lento del percorso

![](https://i.ibb.co/FxPynss/image.png)

In questo caso la comunicazione tra H1 e H4 è limitata a 100Mb/s.

Se si avesse un altro host H5 collegato con H3 da un link 1000Mb/s, nel caso in cui sia H5 che H3 comunicassero contemporaneamente con H4 la loro capacità sarebbe limitata a 500Mb/s in quanto condividono il link da H3 a H4.

Nelle topologie ad albero bisogna avere link con maggiore capacità vicino alla radice.

## Reti wireless

Le reti wireless sono organizzate come reti a stella (gli host non parlano direttamente tra di loro) ma fisicamente funzionano come una rete bus, dove al posto di avere un cavo coassiale condiviso per tutti, si ha un segnale radio.

Dato che il range di frequenze è limitato, un compito del data link layer è quello di schedulare l’accesso al mezzo fisico per evitare collisioni quando più host comunicano contemporaneamente con il ricevitore (*l’access point*).

Vediamo vari metodi per ottenere questo scheduling, spesso usati insieme.

## FDMA (Frequency-Division Multiple Access)

In questo approccio si evitano le collisioni usando frequenze differenti per ogni comunicazione, in questo modo comunicazioni contemporanee su frequenze diverse non creano collisioni.

Le reti wifi possono operare su varie frequenze, chiamate **canali**. Quando si accende, l’access point si metterà a cercare i canali usati dalle altre reti wifi nelle vicinanze in modo da usare quelle libere.

Un Access point, però, può utilizzare solo una frequenza alla volta, quindi gli host connessi a tale access point devono usare tutti la stessa frequenza. Non abbiamo quindi interferenza tra reti diverse ma abbiamo interferenza tra host della stessa rete, è quindi necessario un meccanismo di scheduling dei messaggi.

## TDMA (Time-Division Multiple Access)

Un modo per schedulare i messaggi nella stessa rete è il **Time-division multiplexing** (TDM), in pratica se si hanno $m$ terminali collegati, il tempo viene diviso in $m$ slot di dimensione fissa, ogni slot viene assegnato ad un terminale e in tale slot quel terminale può mandare i suoi messaggi.

![](https://i.ibb.co/mH69KpQ/image.png)

È molto importante che i terminali siano sincronizzati per evitare che iniziano a trasmettere troppo presto o troppo tardi rispetto al proprio slot, c’è quindi un tempo di tolleranza tra la fine di uno slot e l’inizio del successivo (sprecando del tempo).

Definiamo **l’efficienza del livello data link** come la frazione del tempo in cui il datalink è utilizzato per comunicare dati utili.

Se tutti i terminali hanno qualcosa da trasmettere, avremo che ogni slot è occupato e non ci sono collisioni, in tal caso il meccanismo TDMA è alla sua **massima efficienza**.

Contrariamente, se un solo terminale vuole comunicare, si avrà una **efficienza molto bassa** in quanto il terminale dovrà aspettare un intero ciclo di $m$ slot che non fanno niente per continuare a trasmettere.

![](https://i.ibb.co/X2BkKm4/image.png)

Abbiamo quindi che la rete funziona al meglio quando è congestionata, generalmente però quando una rete è congestionata significa che i terminali vogliono mandare più dati che quelli che gli stai permettendo di mandare.

Nelle reti cellulari questo approccio è ideale in quanto una porzione di risorse vengono concesse a tutti anche sotto congestione.

## Accesso casuale (ALOHA)

Un’altra tecnica è quella di accedere al media in modo casuale: i terminale cercano di trasmettere, se si verifica una collisione il frame viene inviato di nuovo.

Una implementazione di questo tipo è **ALOHA**, e rappresenta l’antenato del sistema in utilizzo oggi nelle reti wifi, il CSMA/CA.

Vediamo la versione **ALOHA-slotted (S-ALOHA)**, in cui i terminali devono essere sincronizzati e il tempo viene diviso in slot.

La differenza fondamentale rispetto a TDMA è che ogni terminale non ha uno slot assegnato ma appena ha necessità prova a trasmettere all’inizio del prossimo slot.

**Funzionamento**:

Abbiamo $m$ host sincronizzati (cioè conoscono l’inizio di ogni slot), quando più host trasmettono contemporaneamente avviene una collisione (assumiamo che gli host sappiano immediatamente che la collisione è avvenuta).

Quando avviene una collisione, gli host coinvolti entrano in uno stato chiamato ***backlogged***.

Ogni host in questo stato tenta di ritrasmettere al prossimo slot con una certa **probabilità**.

Quando la trasmissione avviene con successo l’host esce da questo stato.

Se il terminale *backlogged* riceve un altro frame da mandare, esso viene scartato.

Esempio:

![](https://i.ibb.co/BNY7bcx/image.png)

### Prestazioni

Definiamo $G$ come il **carico del sistema**, quindi il numero di frame medio che deve essere trasmesso per slot da tutti i terminali.

La probabilità di trasmettere con successo un frame, $P_S$, è data dalla probabilità di trasmettere un solo frame per slot (cioè quando non ci sono collisioni)

$$
P_S = Ge^{-G}
$$

![](https://i.ibb.co/DLxbCsV/image.png)

Vediamo come il punto di massima efficienza è quando $G=1$ quindi quando viene mediamente mandato un frame per slot, l’efficienza è $\frac{1}{e} = 0.36$, cioè solo il $36\%$ dei pacchetti viene mandata con successo.

con $G<1$ la rete ha poche collisioni ma è meno efficiente, in quanto gestisce pochi pacchetti, cioè la rete è dimensionata male, ma comunque funziona.

con $G>1$ si presentano molte collisioni e l’efficienza cala drasticamente. Si dice che si verifica un **congestion collapse**, cioè le performance del sistema calano in modo drastico all’aumentare del carico.
