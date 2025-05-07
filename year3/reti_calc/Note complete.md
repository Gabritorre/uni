# Introduzione

Internet e più in generale le reti sono una struttura:

- **decentralizzata**: non c’è un coordinatore globale, si può quindi espandere liberamente
- **robusta:** in caso di fallimento di una strada per la comunicazione riesce comunque a trovare una via alternativa
- **inter-operativa:** utilizza varie tecnologie che riescono a comunicare tra loro (cavo in rame, wireless, fibra, …)
- **versatile**: trasporta vari tipi di informazione (testo, video, audio, …)

Queste caratteristiche sono possibili grazie alla **stratificazione in livelli** della rete e all’uso di **standard e protocolli**.

- **Livelli (*layer*)**: Il sistema che implementa le reti è diviso in livelli (pezzi di software), ogni livello si occupa di un *task* specifico. Insieme formano il **network stack**.
- **Standard e protocolli**: ogni livello ha degli standard e protocolli che deve rispettare, si tratta di documenti tecnici che descrivono i dettagli della comunicazione.

Due esempi di *network stack* sono **TCP/IP** e **ISO-OSI**:

- TCP/IP è il modello che viene utilizzato su internet, formato dai seguenti livelli:
    - *Application layer*: descrive il comportamento dell’applicazione ad alto livello
    - *Transport layer*: si occupano dell’affidabilità delle connessioni
    - *Internet/IP layer*: fornisce funzioni di interoperabilità tra veri medium fisici e instradamento
    - *Link layer*: descrive la comunicazione fisica
- ISO-OSI è più dettagliato ma è utile a livello teorico/accademico ed è formato dai seguenti livelli:
    - *Application layer*
    - *Presentation layer*: descrive come visualizzare i dati
    - *session layer*: descrive come mantenere la sessione utente
    - *Transport layer*
    - *Network layer (Internet/IP layer)*
    - *data link layer*: descrive come più terminali accedono allo stesso medium fisico
    - *physical layer (Link layer)*

Ogni livello offre delle **interfacce (API)** per gli strati adiacenti.

Durante una comunicazione possiamo immaginare che mittente e destinatario abbiano un *network stack*, si parte dall’*Application layer* del mittente, scendendo nello stack, ogni livello aggiunge dei dati all’informazione di partenza (operazione che si chiama **incapsulamento**). Quando il pacchetto finale arriva al destinatario viene percorsa la pila dal basso e si spacchetta fino al livello applicazione.

![](https://i.ibb.co/hcwb5xk/image.png)

Generalmente ci si riferisce all’informazione con il termine “pacchetto” ma ad ogni layer l’informazione prodotta assume un nome particolare:

- A livello di trasporto si parla di **segmenti**
- A livello IP si parla di **pacchetti**
- A livello collegamento si parla di **frame**



# Livello fisico

Indichiamo con **bit-rate** la velocità di un canale di comunicazione, espressa in **bit per secondo** (bit/s) o in suoi multipli (kbit/s, Mbit/s, …).

| Nome | Simbolo | Multiplo |
| --- | --- | --- |
| Kilobit per secondo | kbit/s | $10^3$ |
| Megabit per secondo | Mbit/s | $10^6$ |
| Gigabit per secondo | Gbit/s | $10^9$ |
| Terabit per secondo | Tbit/s | $10^{12}$ |

## Nozioni di fisica

Vediamo delle nozioni di fisica per andare a definire il **rapporto tra segnale e rumore in una comunicazione.**

## Energia

L’energia è la grandezza fisica che misura la capacità di un corpo di compiere un lavoro, con lavoro si intende l’applicazione di una forza lungo una certa distanza.

L’energia può assumere varie forme e si misura in **Joule (J)**. Nell’ambito delle comunicazioni è più probabile riferirsi a mJ (milli-Joule)

## Potenza

La potenza è definita come il trasferimento di energia in unità di tempo, ci dice quanto velocemente un sistema può fornire energia.

Possiamo quindi dire che si misura con il rapporto J/s (Joule per secondo) che comunemente si rappresenta come **W (Watt)** nel sistema internazionale.

## Corrente elettrica

Gli elettroni sono particelle con carica negativa che, in alcuni materiali, possono muoversi liberamente all'interno della struttura.

Quando gli elettroni si muovono collettivamente, generano una **corrente elettrica**. I materiali in cui gli elettroni possono muoversi liberamente sono chiamati **conduttori**, mentre quelli in cui il movimento degli elettroni è fortemente limitato o impedito sono chiamati **isolanti**.

La **corrente elettrica** è una misura del flusso di carica per unità di tempo, espressa in Coulomb al secondo (C/s), un'unità che prende il nome di **Ampere**.

Un generatore di corrente, pensiamo alla batteria, “spinge” gli elettroni in un filo conduttore facendo passare gli elettroni da una velocità quasi nulla ad una certa velocità e in una certa direzione. Per accelerare degli elettroni per un tempo $t$ il generatore **consuma potenza.**

## Resistenza

Quando gli elettroni si muovono rimbalzano nella struttura del materiale, perdendo così dell’energia (che viene trasferita al materiale stesso sotto forma di calore).

Questo è importante perché nelle telecomunicazioni questa perdita di energia si traduce in una attenuazione del segnale rispetto a quello di partenza.

La **resistenza** è un componente che serve a regolare la quantità di corrente che circola in un circuito, dissipandola in calore in modo da evitare una quantità esagerata di corrente sui componenti.

Nelle telecomunicazioni la resistenza può essere un ricevitore (una radio) che riceve una corrente.

Si definisce **sensibilità** la quantità minima di potenza necessaria affinché il sensore del ricevitore riesca a rilevare la presenza di corrente

## Interruttore

In un circuito possiamo aggiungere un interruttore per far passare o meno la corrente. L’interruttore disconnette fisicamente il percorso che la corrette dovrebbe fare:

- con l’interruttore spento il circuito è aperto e non passa corrente
- con l’interruttore acceso il circuito è chiuso e passa corrente

## Segnale

Accendere e spegnere l’interruttore periodicamente, permette di generare degli intervalli di potenza che noi interpretiamo come **segnale.**

![](https://i.ibb.co/NW5ZXpD/image.png)

## Attenuazione

Come accettato sulla parte della resistenza il cavo di per sé è una resistenza, quindi un po’ di potenza si disperde sotto forma di calore nel cavo.

Questa perdita di potenza si traduce in una **attenuazione del segnale** durante il percorso.

L’attenuazione dipende principalmente dal tipo di materiale, dalla sua grandezza e dalla sua lunghezza.

In un sistema con forte attenuazione, la sensibilità del ricevitore è molto importante in quanto l’ampiezza del segnale ricevuto è minore rispetto all’ampiezza del messaggio trasmesso.

![](https://i.ibb.co/VJVZcJs/image.png)

## Ritardo

Gli elettroni (o qualsiasi altro mezzo di comunicazione) hanno una velocità finita.

Indichiamo con **Delay (ritardo / latenza)** il tempo che passa dal momento dell’invio del segnale al momento in cui il segnale inizia ad essere ricevuto.

Più distante è il ricevitore più questo ritardo sarà grande

In questo contesto è importante la **sincronizzazione** tra il trasmittente e il ricevitore, cioè si devono accordare per stabilire quando un simbolo inizia e quando un simbolo finisce (e quindi la sua durata).

## Rumore

Gli elettroni non sono mai completamente fermi (a meno di essere alla temperatura di zero assoluto).

Quindi non si ha mai veramente zero corrente nel circuito e anche quando si fa passare della corrente non è mai esattamente costante, c’è difatti del **rumore** causato dalle oscillazioni degli elettroni.

Rumore sommato all’attenuazione può portare a degli errori di decodifica da parte del ricevitore.

## Rapporto segnale-rumore (SNR)

Il rapporto segnale-rumore (*Signal to Noise Ratio*, SNR) si calcola nel seguente modo:

$$
\text{SNR} = \frac{S}{N} = \frac{\text{Potenza del segnale ricevuto}}{\text{Stima di potenza del Rumore}}
$$

Mi dice quanto della potenza che ho ricevuto fa parte del segnale vero e quanto è invece rumore.

La potenza del rumore è una stima che si può ottenere quando nessuno trasmette, in quanto si ottiene solo rumore.

Quando il ricevitore riceve un segnale e deve decidere se è 0 o 1, calcola SNR e può capire di cosa si tratta in base a dei valori di riferimento. Più è grande il valore più la comunicazione è chiara.

L’SNR è una proprietà del canale di comunicazione (radio, cavo, …) e questo valore **influenza il bit-rate massimo**

## Modulazione

In contesti reali non si manda mai un segnale come abbiamo visto fino ad ora, ma si usa la **modulazione.**

La modulazione è un insieme di tecniche per trasmettere informazioni, è composto da:

- Il **segnale portante** (*carrier signal*): una sinusoide con una certa frequenza $f_c$ costante
- Il **segnale modulante** (*modulating signal*): il segnale che vogliamo trasmettere contenente l’informazione

L’idea è quello di andare a influenzare il segnale portante sull’**ampiezza** o sulla **frequenza** in modo da produrre un nuovo segnale (il **segnale modulato**) che codifica una informazione contenuta nel segnale modulante.

![](https://upload.wikimedia.org/wikipedia/commons/a/a4/Amfm3-en-de.gif)

## Modulazione di frequenza (FM)

![](https://i.ibb.co/TcSVWPQ/image.png)

In questa tecnica di modulazione il segnale viene codificato modificando la frequenza del segnale portante. Possiamo, ad esempio, codificare 1 quando abbiamo una alta frequenza e 0 altrimenti.

Abbiamo una portante $p(t) = A\cos(2\pi f_p t)$ e un segnale digitale $m(t)$ da trasmettere (dato che è digitale trasporterà 0 e 1).

$A$ rappresenta l’ampiezza costante, cioè “l’altezza” rispetto allo 0,

$f_p$ indica il numero di oscillazioni al secondo

$t$ è il tempo

quindi al tempo $t=0$ e con una oscillazione al secondo ($f_p = 1$) abbiamo: $A\cdot\cos(0) = A\cdot 1 = A$

il tempo scorre…

$t = \frac{1}{4}$, $f_p = 1$ abbiamo $A\cdot \cos(\frac{2\pi}{4}) = A\cdot \cos(\frac{\pi}{2}) = 0$

il tempo scorre…

$t = \frac{1}{2}$, $f_p = 1$ abbiamo $A\cdot \cos(\frac{2\pi}{2}) = A\cdot \cos(\pi) = -A$

abbiamo fatto mezza onda in mezzo secondo.

Questa tecnica gioca sul modificare la frequenza aumentandola di una quantità $\Delta$ quando si vuole trasmettere un 1:

$$
\begin{cases}
f_p' = f_p & \text{se } m(t) = 0\\
f_p' = f_p (1 + \Delta) & \text{se } m(t) = 1
\end{cases}
$$

Se ipotizziamo di mettere $\Delta = \frac{1}{2}$ e di star trasmettendo un 1, e quindi di avere una frequenza $f_p’ = 1 + \frac{1}{2} = \frac{3}{2}$

al tempo $t=0$, $f_p' = \frac{3}{2}$ abbiamo $A\cdot\cos(0) = A\cdot 1 = A$

il tempo scorre…

$t = \frac{1}{4}$, $f_p = \frac{3}{2}$ abbiamo $A\cdot \cos(2\pi\frac{3}{2}\frac{1}{4}) = A\cdot \cos(\frac{3\pi}{4}) = -\frac{\sqrt{2}}{2} = -0.707\cdot A$

il tempo scorre…

$t = \frac{1}{2}$, $f_p = \frac{3}{2}$ abbiamo $A\cdot \cos(2\pi\frac{3}{2}\frac{1}{2}) = A\cdot \cos(\frac{3\pi}{2}) = 0$

abbiamo fatto tre quarti di onda in mezzo secondo.

Se abbiamo una frequenza $f_p = 4$ e supponiamo che un bit sia determinato da 4 oscillazioni, stiamo mandando un simbolo ogni secondo **boud-rate (1 Bd/s)**.

In questo specifico caso un simbolo corrisponde ad un singolo bit, quindi il **bit-rate è 1 b/s.**

Nota che potremmo avere una codifica diversa in cui ad un simbolo corrispondono 2 bit (usando quindi 4 livelli di frequenza diversi per rappresentare 00, 01, 10, 11) in questo caso si avrebbe sempre 1 Bd/s e per calcolare il bit-rate si fa

$$
\text{bit-rate} = \text{numero di bit per simbolo} \cdot \text{boud-rate}
$$

si avrebbe quindi $2 \cdot 1 = 2$ b/s

### Aumentare il bit-rate

Per aumentare il bit-rate si può

1. diminuire il numero di oscillazioni richieste per simbolo (aumentare il boud-rate)
2. aumentare il numero di bit per simbolo

Per il primo bisogna stare attenti perché si sta diminuendo il tempo in cui si ha alta frequenza e dobbiamo tenere in considerazione che c’è sempre del rumore che dobbiamo riuscire a distinguere dal segnale reale (risulta quindi più difficile distinguere i simboli)

per il punto 2, aumentare il numero di bit significa aumentare il numero di frequenze diverse in modo da riconoscere tutti i possibili bit.

### Bandwidth

***Bandwidth* o larghezza di banda** è l’intervallo tra la frequenza più bassa e quella più alta che si usa per comunicare.

$$
\text{Bandwith} = f_{\max} - f_{\min}
$$

Se si vuole aumentare il bit-rate è necessario aumentare la larghezza di banda.

Nell’esempio precedente con un simbolo uguale ad un bit la larghezza di banda andava da $f_p$ a $f_p (1 + \Delta)$

Nelle reti wireless utilizzare le stesse frequenze per comunicazioni diverse risulterà in delle interferenze in quanto i ricevitori avranno più rumore nei loro segnali.

Per questo motivo segnali 4G, segnali televisivi, segnali wifi lavorano su bande diverse. 

## Teorema di Nyquist

Il teorema dice che se la tua comunicazione usa una larghezza di banda $B$ e si usano $M$ livelli discreti di frequenza (**i simboli**), allora la capacità teorica massima di trasmissione in bit/s è:

$$
C_N = 2B\log_2(M)
$$

$M$ solitamente è una potenza di 2.

### Esercizio

Un router wireless utilizza un range di frequenza che va da $2401$ MHz a $2441$ MHz.

Codifica 4 simboli

quale è il massimo bit-rate?

$B = 2.441.000.000 - 2.401.000.000 = 40.000.000$

$C = 2\cdot 40.000.000 \log_2(4) = 80.000.000 \cdot 2 = 160.000.000 = 160$ Mb/s

Si tratta di un limite teorico in quanto non viene considerato il **rumore**

## Teorema di Shannon

Il teorema di Shannon introduce un limite più stretto alla capacità considerando il rumore

Il teorema dice che la capacità del canale massima in bit/s con banda $B$ con aggiunta di una gaussiana di rumore bianco è data da:

$$
C_S = B\log_2\left(1+ \frac{S}{N}\right)
$$

$\frac{S}{N}$ è il rapporto segnale rumore SNR

## Nyquist vs Shannon

Nyquist opera su una situazione ideale senza rumore. Shannon è più restrittivo considerando il rumore, non puoi raggiungere $C$ anche se Nyquist te lo permetterebbe.

Se il rapporto segnale rumore è basso sarà più difficile distinguere il rumore dal segnale, in altre parole il rapporto segnale rumore determina il massimo valore di $M$ (il numero di simboli).

$B, S, N$ sono dati dal canale di comunicazione mentre il trasmettitore può decidere $M$, va però deciso in modo che $C_{\text{Nyquist}} \leq C_{\text{Shannon}}$ (questo perché Shannon imposta un limite più realistico e superare il suo valore porterebbe sicuramente ad avere errori di comunicazione)

### Esempio

Abbiamo una comunicazione ADSL con questi valori:

- potenza di trasmissione del router: $100$ mW
- Rumore stimato: $0.0001$ mW
- Attenuazione: la potenza si divide per $25$ ogni Km
- Bandwith: 2.2MHz

Calcoliamo:

- bit-rate massimo a 2 Km di distanza considerando il rumore?
    - potenza segnale ricevuto a 2Km: $100\cdot \frac{1}{25}\frac{1}{25} = 0.16$ mW
    - SNR: $\frac{0.16}{0.0001} = 1600$
    - $C_S = 2.200.00 \log_2(1 + 1600) \approx 23$ Mb/s
- La miglior modulazione da usare?
    - Consideriamo solo modulazioni che sono potenze di 2
    - dobbiamo trovare $M$ per cui $2B\log_2(M) \leq C_S$
    - dalla formula inversa di Nyquist ottengo $M = 2^{\frac{C_S}{2B}}$
    - $M = 2^{\frac{23.000.000}{4.400.000}} = 2^{\lfloor 5.227\rfloor} = 2^5 = 32$
- con la modulazione scelta quale è il massimo bit-rate?
    - $C_N = 2\cdot 2.200.000 \cdot 5 = 22$ Mbit/s $< C_s$



# Livello di collegamento

Il livello di collegamento (*data link layer*) ha il compito di dividere i dati in ***frame***, possiamo definire un frame come una sequenza di bit che hanno una particolare struttura e una lunghezza limitata, rappresenta l’unità base di informazione che si scambiano due host.

Le limitazioni del livello fisico (desincronizzazione e disturbo) obbligano il livello di collegamento a codificare i frame in modo da riconoscere gli errori di comunicazione.

## Bit stuffing

Un problema, ad esempio, è far capire al ricevitore quando inizia e quando finisce il frame.

Quello che possiamo fare è usare delle stringhe di bit particolari per delimitare l’inizio e la fine del frame, ad esempio la stringa $01111110$, che possiamo chiamare *frame boundary maker*.

Il mittente potrebbe però voler inserire tale stringa all’interno del proprio messaggio, ma verrebbe interpretata come la fine del frame.

Il **bit stuffing** è una codifica che si occupa di evitare che ciò accada con i seguenti passaggi:

1. Viene trasmesso il marker di inizio frame $01111110$
2. Trasmette i bit del frame aggiungendo uno $0$ dopo ogni sequenza di cinque $1$ consecutivi
3. Viene trasmesso il marker di fine frame $01111110$

Il ricevitore decodificherà di conseguenza nel seguente modo:

1. Riconosce l’inizio del frame tramite il marker $01111110$
2. Processa i bit del frame:
    1. se incontra cinque bit a $1$ seguiti da uno $0$, allora quello $0$ viene rimosso
    2. se incontra cinque bit a $1$ seguiti da un altro $1$ e poi da uno $0$, allora si tratta del marker di fine frame

Un esempio di codifica:

$$
01111110 \longrightarrow 01111110\,\,011111\textbf{0}10\,\,01111110
$$

Questa codifica però provoca un **protocol overhead**: cioè dati extra trasmessi per rendere la comunicazione possibile, riducendo così il bit-rate disponibile calcolato con Shannon e Nyquist.

In particolare abbiamo 16 bit per i marker e con stringhe formate da molti $1$ vengono aggiunti molti $0$ per evitare che siano interpretati come fine frame.

D’altra parte più lunghi sono i marker, più è grande l’overhead fisso ma meno saranno i bit stuffed, per compensare bisognerebbe aumentare la grandezza dei frame per evitare di avere più bit di overhead che bit utili.

Tutti questi bit aggiunti vanno poi scartati dal ricevitore. Inoltre gli errori del livello fisico possono accadere proprio sui marker o sui *bit stuffed* provocando gravi errori nella decodifica.

Definiamo **BER** (*Bit Error Rate*) come la probabilità che un singolo bit sia decodificato in modo errato.

Nelle reti moderne la tecnica del *bit stuffing* non è utilizzata, si utilizza piuttosto un *frame preamble*, cioè un header che marca l’inizio del frame e che contiene varie informazioni tra cui quanto è lungo il frame stesso, così da non avere un marker di fine frame e di conseguenza non si ha bisogno del *bit stuffing*.

![](https://i.ibb.co/4Fcsdqq/image.png)

Nell’immagine si vede come i livelli interagiscono:

- Un livello superiore fa una chiamata API (`DATA.req(1…1)`) al livello data link richiedendo di inviare una sequenza di bit
- Il livello data link si occupa di codificare il frame (ad esempio usando la tecnica del *bit stuffing*) e fa delle chiamate API (`DATA.req(0)` …) al livello fisico che si occuperò di inviare fisicamente i bit richiesti
- il destinatario farà il percorso al contrario, quindi sarà il layer fisico a ricevere dei dati e a fare delle chiamate API al livello data link, il quale a sua volta decodifica i bit ricevuti e farà delle chiamate API al livello superiore

È importante notare come ogni livello si occupa dei suoi compiti e non sa che cosa fanno gli altri livelli

## Notificare i frame

Dato che l’applicazione del mittente, l’applicazione del destinatario e il mezzo fisico possono avere dei tempi di funzionamento molto diversi, è possibile che si verifichino problemi nel caso in cui un host mandi dei dati troppo velocemente da non permettere al destinatario di processarli in tempo.

L’uso di **buffer** può aiutare ma si possono comunque riempire. È quindi necessario implementare un sistema per cui il ricevitore possa inviare dei messaggi di “ricevuto pacchetto correttamente” al mittente, tali messaggi sono chiamati ACK (*acknowledgment*).

Ogni frame dovrà quindi essere formato da un ***header***, per capire se si tratta di un frame dati o un frame di *acknowledgment*, e da un ***payload***, che contiene i dati effettivi.

Ci riferiamo a SDU (*Service Data Unit*) come termine generico contenente i dati utili da trasmettere, che vengono passati tra i vari livelli dello stack protocollare.

D’ora in poi usiamo queste definizioni per le API:

- `DATA.req(SDU)`: comunicazione dal livello superiore verso il data link layer
- `DATA.ind(SDU)`: comunicazione dal livello data link layer verso il livello superiore
- `send(D(SDU))` ,`send(C(OK))`: trasmissione dei dati dal data link layer locale verso il data link layer remoto
- `recvd(D(SDU))`, `recvd(C(OK))`: ricezione dei dati provenienti dal link layer remoto

Le `send` e le `recvd`sono di due tipi:

- la `D` sta per “Data” e indica l’invio o la ricezione dei dati
- la `C` sta per “Control” e indica l’invio o la ricezione di messaggi di *acknowledgment*

![](https://i.ibb.co/vjHgFWw/image.png)

## Macchina a stati

Possiamo rappresentare il data link layer come una macchina a stati finiti, composta da 2 stati per il mittente e 2 stati per il ricevitore

![](https://i.ibb.co/b1z2Kvs/image.png)

- I cerchi rappresentano gli stati
- gli archi rappresentano il cambio di stato
- associati gli archi abbiamo due etichette:
    - l’etichetta che sta in alto rappresenta l’evento che innesca il cambio di stato (quando viene indicato `-` significa che l’azione all’interno dello stato attuale ha finito e si cambia stato)
    - l’etichetta che sta in basso rappresenta l’evento che viene propagato durante il cambio di stato (quando viene indicato `-` significa che nessun evento viene propagato)

## Riconoscimento degli errori

Il precedente sistema funziona correttamente sotto l’assunzione che non ci possano essere errori sui frame, ma il layer fisico può subire alterazione del tipo: bit invertiti, bit mancanti o bit in eccesso

Vediamo innanzitutto come **riconoscere gli errori** (*error detection*)

## Bit di parità

Questo semplice meccanismo aggiunge un bit finale al frame, detto **bit di parità**, questo bit viene aggiunto in modo da rendere il numero totale di $1$ nel frame pari (oppure dispari).

Se ci accordiamo che il numero di bit uguali a $1$ deve essere pari, allora le seguenti stringhe si trasformano così:

$$
0011011 \longrightarrow 0011011\textbf{0} \\
0100011 \longrightarrow 0100011\textbf{1}
$$

a livello computazionale il bit di parità (con numero di $1$ pari) è dato dalla somma dei bit in modulo 2

$$
\text{Parity bit} = (0 + 1 + 0 + 0 + 0 + 1 + 1) \mod{2}=\\
=(11) \mod{2}=1\\
$$

Nota: l’operazione di modulo 2 equivale a prendere il valore del bit meno significativo (quello più a destra)

Assumendo di usare una parità pari, quello che fa il ricevitore quando riceve la stringa è quello di controllare la quantità di $1$: se essi sono pari allora non ci sono errori, se invece sono dispari ci sono degli errori.

In assenza di errori verrà rimosso il bit di parità e verrà passato l’SDU al livello superiore.

In caso di errori il data link layer può richiedere il frame o semplicemente ignorarlo.

**Limiti**: in caso di errori pari, questo sistema non si accorge degli errori, inoltre l’errore può subirlo proprio il bit di parità

## IP checksum

Nel data link layer viene usato un altro sistema di riconoscimento degli errori chiamato CRC (*Cyclic Redundancy Check*) un complicato sistema che funziona bene.

Data la sua complicatezza vediamo un altro sistema basato sulla checksum che viene usato a livello IP dello stack protocollare, ma sarà utile per capire il concetto di **checksum**.

Con **checksum** si intende la somma aritmetica di tutti i bit di cui il frame è composto.

l’**IP checksum** (o *internet checksum*) è un campo di 16bit ottenuto dal complemento a 1 della somma in complemento a 1 di tutte le parole di 16bit

Il **complemento a 1** di una stringa di bit è dato dall’inversione di tutti i bit

$$
110110 \longrightarrow 001001
$$

La **somma in complemento a 1** (che indichiamo con $+'$ ) è data dalla normale somma binaria, ma se si forma un resto che va oltre la dimensione prefissata della checksum, quel resto va risommato al risultato.

Consideriamo che la checksum ha dimensione 4 bit:

$$
1100 +' 0010 = 1110\\
1100 +' 1010 = \textbf{1}0110 = 1 + 0110 = 0111\\
1100 +' 1010 +' 1100 = \textbf{10}0010 = 10 + 0010 = 0100
$$

Se il riporto si ripresenta anche dopo averlo risommato, bisogna continuare a sommarlo fino a che non rimane nessun riporto.

Vediamo un esempi di calcolo della checksum con parole di lunghezza 4 bit

Stringa: $1100\,0011\,1010\,1110\,1001$

1. calcoliamo la somma in complemento a 1

$$
1100+\\
0011+\\
1010+\\
1110+\\
1001=\\
110000\hspace{7mm}
$$

sommando il riporto diventa quindi: $11 + 0000 = 0011$

1. facciamo il complemento a 1 del risultato

$$
0011 \longrightarrow 1100
$$

quindi la checksum vale: $1100$

Questo valore verrà aggiunto nel frame dal mittente (in particolare viene messo nell’header), trasformando la stringa iniziale in: $\textbf{1100}\,1100\,0011\,1010\,1110\,1001$

Il ricevitore dovrà semplicemente fare la somma in complemento a 1 della stringa ricevuta (inclusa la checksum) e verificare che il risultato siano tutti $1$, se così non fosse allora ci sarebbe un errore:

$$
1100+\\
1100+\\
0011+\\
1010+\\
1110+\\
1001=\\
111100\hspace{7mm}
$$

sommando il riporto diventa quindi: $11 + 1100 = 1111$

**Limiti**: possiamo comunque avere degli errori che generano una checksum valida, se ad esempio le ultime due parole subissero una alterazione in questo modo:

$$
1110 \rightarrow 1\textbf{0}10\\
1001 \rightarrow 1\textbf{1}01
$$

verrebbe calcolato la stessa identica checksum, non riconoscendo l’errore.

**Performance**: la checksum viene fatta tantissime volte al secondo dai router, quindi deve essere un calcolo molto veloce. La somma è vantaggiosa per due ragioni:

1. si può computare la somma man mano che arrivano le parole di 16 bit, non serve aspettare che arrivino tutti i dati prima di cominciare
2. dato che la somma è una operazione associativa, l’ordine in cui si sommano i bit delle parole non importa

## Funzioni aggiunte al data link layer

Grazie alle modifiche che abbiamo visto, il data link layer possiede:

- *Flow control*, tramite l’uso di ACK
- *Error detection*, tramite checksum



# Gestione degli errori

Abbiamo visto come la checksum può aiutarci a identificare gli errori (*error detection*), ci sono però altre tecniche che riescono persino a correggere gli errori trovati (*error correction*).

Un banale esempio può essere quello di codificare tutti gli $1$ come $111$ e tutti gli $0$ come $000$, in questo modo se si riceve $010$ è probabile che si trattasse di un $000$.

Ovviamente questo sistema non è ottimale e non viene utilizzato.

In generale sulle reti si segue il seguente principio: **Le reti funzionano relativamente bene, con un tasso di errore talmente basso che in caso accadessero è più conveniente farsi rispedire i frame rispetto che mettersi a correggerli.**

Possiamo schematizzare la comunicazione in questo modo:

![](https://i.ibb.co/XD7LsDP/image.png)

Quando l’host A manda dei dati fa partire un **timer**, se arriva un ACK prima che termini il timer allora il timer viene cancellato e si prosegue. Se invece il timer scade prima che arrivi l’ACK, allora viene rimandato il dato.

Questo timer deve essere lungo almeno quanto il *round trip time* (RTT), cioè il tempo che un dato impiega a raggiungere la destinazione e a tornare indietro al mittente

Un’altra situazione che può accadere è quella in cui l’host B riceve il dato ma il messaggio di ACK non arriva ad A, in questo caso A non ricevendo l’ACK pensa che il dato non sia arrivato e lo rimanda. Così facendo B si ritrova una copia del dato precedente (non sapendo che si tratta di una copia).

![](https://i.ibb.co/f0Xrb5P/image.png)

Il ricevitore deve essere in grado di distinguere le copie di frame. Un modo può essere quello di usare un bit (chiamato **bit di sequenza**) che viene invertito ad ogni frame che viene ricevuto correttamente (questo particolare schema è chiamato ABP, *Alternating Bit Protocol*).

Estendiamo la terminologia introdotta negli scorsi appunti in questo modo:

- `send(D(seq, SDU, CRC))`: invia un frame composto da bit di sequenza, dati e checksum
- `send(C(OKx))`: invia un ACK per il frame con bit di sequenza `x`
- `recvd(D(seq, SDU, CRC))`: riceve un frame composto da bit di sequenza, dati e checksum
- `recvd(C(OKx))`: riceve un ACK per il frame con bit di sequenza `x`

Vediamo come si aggiornano le macchine a stati del trasmettitore e del ricevitore

![](https://i.ibb.co/pQZLXfN/image.png)

![](https://i.ibb.co/HBX16qx/image.png)

Le due macchine a stati lavorano correttamente finché sono sincronizzate: se il ricevitore è nello stato in cui si aspetta un dato con bit di sequenza $1$ e il trasmettitore per qualche motivo si riavviasse, allora il trasmettitore continuerebbe a mandare dati con bit di sequenza $0$, portando quindi ad una **de-sincronizzazione**.

Vediamo con con il bit di sequenza si riconoscono frame duplicati

![](https://i.ibb.co/HnsTMpQ/image.png)

In questo modo abbiamo che il data link layer offre un servizio di *reliable delivery*

**Limite**: mandare un ACK per ogni frame prima di mandare il successivo crea un protocol overhead notevole, tale overhead è dominato dal RTT, e questa implementazione (ABP) è troppo dipendente dal RTT.

## Pipelining

Vediamo due tecniche migliori di ABP, la tecnica **Go-back-n** e la tecnica **Selective repeat**, che riescono ad essere meno dipendenti dal RTT.

Queste tecniche si basano sul **pipelining**, cioè inviare non più un singolo frame alla volta ma un **insieme di frame alla volta**

![](https://i.ibb.co/9qht0pZ/image.png)

Per continuare a garantire l’affidabilità del ricevimento dei frame si utilizza un meccanismo chiamato ***sliding window***.

### Sliding window

In questo caso i numeri di sequenza sono degli interi, trasmettitore e ricevente si accordano sulla dimensione della **finestra**, cioè il numero di frame da inviare in un colpo solo.

Quando si riceve l’ACK del frame con numero di sequenza più basso nella finestra attuale, allora si *shifta* a destra la finestra di uno spazio.

![](https://i.ibb.co/gSfQBDX/image.png)

Nella realtà però abbiamo una quantità finita di numeri di sequenza, e quando si raggiunge il limite, la finestra riparte dal primo valore.

Vediamo un esempio di comunicazione con questo sistema:

![](https://i.ibb.co/NLVQtJv/image.png)

**Nota importante**: la grandezza della finestra non può essere grande quanto la quantità di numeri di sequenza, **deve sempre esserci almeno un numero di sequenza fuori dalla finestra.**

Dobbiamo però capire come comportarci nel caso dei frame vengono persi.

## Go-back-n

Go-back-n è una policy per gestire i frame persi.

Il ricevitore accetta solo frame che arrivano in sequenza, viene mandato un ACK contenente il numero di sequenza dell’ultimo frame della sequenza ricevuto.

Questo viene chiamato **ACK cumulativo** in quanto viene fatto un ACK di uno specifico frame indicando che tutti i frame con numero di sequenza inferiore sono stati ricevuti.

Ad esempio se il ricevitore riceve $1$ poi $2$ poi $3$ farà gli ACK di $1$ poi $2$ poi $3$. Se invece riceve $2$ poi $1$ poi $3$ farà solo l’ACK di $1$.

Il ricevitore non ha bisogno di buffer, ma mantiene due variabili e una costante

- `lastack`: l’ultimo numero di sequenza che è stato notificato
- `next`: il prossimo numero di sequenza atteso
- `maxseq`: rappresenta la totalità dei numeri di sequenza

![](https://i.ibb.co/zQ6qgnH/image.png)

D’altra parte il trasmettitore deve avere un **buffer** per poter salvare i frame da mandare, può essere grande fino ad una intera finestra di frame.

I frame vengono inviati in ordine di sequenza fino a riempire il buffer.

Utilizza un singolo timer che parte dal momento in cui viene inviato il primo frame.

Quando il trasmettitore riceve un ACK rimuove tutti i frame notificati e fa partire da capo il timer se ci sono ancora frame non notificati nel buffer. Se il timer scade vengono rimandati.

Il trasmettitore oltre al buffer, utilizza tre variabili e due costanti:

- `size(buffer)`: la quantità corrente di frame nel buffer
- `seq`: l’ultimo numero di sequenza inviato
- `unack`: il numero di sequenza del primo frame non notificato
- `maxseq`:  rappresenta la totalità dei numeri di sequenza
- `W`: grandezza della finestra

![](https://i.ibb.co/M7YcX2c/image.png)

(`t` è il numero di sequenza a cui si riferisce l’ACK)

Per capire meglio il ruolo di `seq` e `unack`, possiamo pensarli come dei puntatori agli elementi del buffer, in particolare `seq` punterà alla prossima cella del buffer, mentre `unack` punterà alla prima cella del buffer.

Vediamo un esempio di comunicazione

![](https://i.ibb.co/s9sfjBy/image.png)

Dal punto di vista del buffer possiamo fare questa rappresentazione riferita all’esempio precedente:

![](https://i.ibb.co/zsn5Pfk/esempio-buffer.png)

**Limiti**: il problema principale è che il ricevitore non accetta frame fuori sequenza, quindi In caso di tanti frame persi le performance calano perché anche frame ricevuti correttamente vengono scartati e ritrasmessi solo perché sono stati ricevuti fuori ordine.

Un altro problema è che gli ACK possono arrivare in modo non ordinato, ad esempio se viene mandato prima l’ACK di 0 e poi l’ACK di 1 ma durante il viaggio arriva prima l’ACK di 1 e poi quello di 0, accade che la variabile `unack` viene settata erroneamente.

## Selective repeat

la **Selective repeat** è una policy che cerca di migliorare la Go-back-n:

Adesso anche il ricevente ha un **buffer** simile a quello del trasmettitore, in cui vengono salvati i frame ricevuti che hanno numeri di sequenza che sono all’interno della finestra.

Quando il ricevente fa un ACK invia l’ultimo numero di sequenza precedente alla finestra e una lista di frame ricevuti correttamente ma fuori ordine.

![](https://i.ibb.co/bmhycjL/image.png)

In questo caso il trasmettitore utilizza un timer per ogni frame del buffer. Quando il timer scade solamente il frame corrispondente viene reinviato (e non tutti come succedeva con Go-back-n)

Esempio di comunicazione:

![](https://i.ibb.co/mXMqLsX/image.png)

Non necessariamente le dimensioni delle finestre devono essere le stesse tra trasmettitore e ricevitore, inoltra possono cambiare di dimensioni in base alle condizioni della rete.

## Piggybacking

In situazioni reali la comunicazione è bidirezionale, non c’è mai un trasmettitore e un ricevitore fisso ma sono sempre entrambi sia trasmettitori che ricevitori.

È quindi conveniente aggiungere un frame di ACK all’interno di un frame di dati, così da evitare di mandare un intero frame solo per fare un ACK (operazione chiamata *Piggybacking*)

Possiamo quindi avere situazione in cui l’invio di un ACK attende perché si aspetta che venga generato un frame di dati in modo da inviarli assieme.



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
    - non resistente ai fallimenti, se un link che connette due nodi la rete si disconnette
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

Le reti wireless sono organizzate come rete a stella (gli host non parlano direttamente tra di loro) ma fisicamente funzionano come una rete bus, dove al posto di avere un cavo coassiale condiviso per tutti, si ha un segnale radio.

Dato che il range di frequenza è limitato, un compito del data link layer è quello di schedulare l’accesso al mezzo fisico per evitare collisioni quando più host comunicano contemporaneamente con il ricevitore (*l’access point*).

Vediamo vari metodi per ottenere questo scheduling, spesso usati insieme.

## FDMA (Frequency-Division Multiple Access)

In questo approccio si evitano le collisioni usando frequenze differenti per ogni comunicazione, in questo modo comunicazione contemporanee su frequenze diverse non creano collisioni.

Le reti wifi possono operare su varie frequenze, chiamate **canali**. Quando si accende l’access point per la prima volta si metterà a cercare i canali usati dalle altre reti wifi nelle vicinanze in modo da usare quelle libere.

Un Access point, però, può utilizzare solo una frequenza alla volta, quindi gli host connessi a tale access point devono usare tutti la stessa frequenza. Non abbiamo quindi interferenza tra reti diverse ma abbiamo interferenza tra host della stessa rete, è quindi necessario un meccanismo di scheduling dei messaggi.

## TDMA (Time-Division Multiple Access)

Un modo per schedulare i messaggi nella stessa rete è il **Time-division multiplexing** (TDM), in pratica se si hanno $m$ terminali collegati, il tempo viene diviso in $m$ slot di dimensione fissa, ogni slot viene assegnato ad un terminale e in tale slot quel terminale può mandare i suoi messaggi.

![](https://i.ibb.co/mH69KpQ/image.png)

È molto importante che i terminali siano sincronizzati per evitare che iniziano a trasmettere troppo presto o troppo tardi rispetto al proprio slot, c’è quindi una tempo di tolleranza tra la fine di uno slot e l’inizio del successivo (sprecando del tempo).

Definiamo **l’efficienza del livello data link** come la frazione del tempo in cui il datalink è utilizzato per comunicare dati utili.

Se tutti i terminali hanno qualcosa da trasmettere, avremo che ogni slot è occupato e non ci sono collisioni, in tal caso il meccanismo TDMA è alla sua **massima efficienza**.

Contrariamente se un solo terminale vuole comunicare si avrà una **efficienza molto bassa** in quanto il terminale dovrà aspettare un intero ciclo di $m$ slot che non fanno niente per continuare a trasmettere.

![](https://i.ibb.co/X2BkKm4/image.png)

Abbiamo quindi che la rete funziona al meglio quando è congestionata, generalmente però quando una rete è congestionata significa che i terminali vogliono mandare più dati che quelli che gli stai permettendo di mandare.

Nelle reti cellulari può essere utile in quanto una porzione di risorse vengono concesse a tutti anche sotto congestione.

## Accesso casuale (ALOHA)

Un’altra tecnica è quella di accedere al media in modo casuale: i terminale cercano di trasmettere, se c’è collisione il frame viene inviato di nuovo.

Una implementazione di questo tipo è **ALOHA**, e rappresenta l’antenato del sistema in utilizzo oggi nelle reti wifi, il CSMA/CA.

Vediamo la versione **ALOHA-slotted (S-ALOHA)**, in cui i terminale devono essere sincronizzati e il tempo viene diviso in slot.

La differenza fondamentale rispetto a TDMA è che ogni terminale non ha uno slot assegnato ma prova a trasmettere all’inizio del prossimo slot.

**Funzionamento**:

Abbiamo $m$ host sincronizzati (cioè conoscono l’inizio di ogni slot), quando più host trasmettono contemporaneamente avviene una collisione (assumiamo che gli host sappiano immediatamente che la collisione è avvenuta).

Quando il livello superiore manda un SDU da trasmettere, l’host attende l’inizio del prossimo slot per trasmettere.

Se un altro host trasmette in contemporanea entrambi gli host entrano in uno stato chiamato ***backlogged***.

Ogni host in questo stato tenta di ritrasmettere al prossimo slot con una certa **probabilità**.

Quando la trasmissione avviene con successo l’host esce da questo stato.

Se il terminale *backlogged* riceve un altro SDU da mandare, viene scartato.

Esempio:

![](https://i.ibb.co/BNY7bcx/image.png)

### Prestazioni

Definiamo $G$ come il **carico del sistema**, quindi il numero di frame medio che deve essere trasmesso per slot da tutti i terminali.

La probabilità di trasmettere con successo un frame, $P_S$ è data dalla probabilità di trasmettere un solo frame per slot (cioè quando non ci sono collisioni)

$$
P_S = Ge^{-G}
$$

![](https://i.ibb.co/DLxbCsV/image.png)

Vediamo come il punto di massima efficienza è quando $G=1$ quindi quando viene mediamente mandato un frame per slot, l’efficienza è $\frac{1}{e} = 0.36$, cioè solo il $36\%$ dei pacchetti viene mandata con successo.

con $G<1$ la rete ha poche collisioni ma è meno efficiente, in quanto gestisce pochi pacchetti, cioè la rete è dimensionata male, ma comunque funziona.

con $G>1$ si presentano molte collisioni e l’efficienza cala drasticamente. Si dice che si verifica un **congestion collapse**, cioè le performance del sistema calano in modo drastico all’aumentare del carico.



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



# Count-to-Infinity

## Problema del Count-to-infinity

Fino ad ora abbiamo assunto che i pacchetti contenenti di distance vector (DV) venissero sempre consegnati con successo, ma questo non è sempre vero.

Vediamo cosa accade con un fallimento di un link seguito dalla mancanza di arrivo di un pacchetto DV.

![](https://i.ibb.co/qRHWrZP/image.png)

In questo caso il link D-E si è rotto, di conseguenza D imposta il costo delle route verso E, B, C a infinito.

In questo caso D dovrebbe mandare il proprio DV ad A ma supponiamo che ciò non accada in tempo, e che sia A ad inviare il suo DV a D.

![](https://i.ibb.co/9rGcVxt/image.png)

In questo modo D ottiene dei costi migliori di quelli attuali (che sono a infinito) e aggiorna la sua tabella, inconsapevole del fatto che quei percorsi dovranno passare per forza verso il link rotto D-E.

A questo punto D manda il suo DV ad A, e questo porta ad aumentare i costi sulla tabella di A in quanto sono aumentati i costi del percorso già ritenuto essere il migliore (l’interfaccia south di A)

![](https://i.ibb.co/DG5ZbYq/image.png)

Il continuo invio di DV tra A e D porterà ad un continuo aumento dei costi fino a infinito, questo problema è chiamato **Count-to-Infinity**.

## Prima soluzione

Un primo approccio è quello di generare i DV solo quando si verifica un fail su un link o un cambiamento ai costi dei percorsi.

Questa non risolve del tutto il problema per due ragioni:

1. c’è comunque la possibilità che D riceva un DV dopo aver rilevato il fallimento di un link ma prima di inviare il suo DV.
2. c’è la possibilità che il DV venga perso

in entrambi i casi si verifica il comportamento sopra mostrato.

Possiamo quindi dire che il Count-to-Infinity è possibile se sono presenti le seguenti condizioni:

- La presenza di un loop, nota che un singolo cavo full-duplex crea già un loop in quanto viene usato sia per trasmettere che per ricevere
- Ci deve essere un cambiamento alla topologia della rete (ad esempio un link failure)
- Perdita di pacchetti contenenti DV

## Seconda soluzione, Split-Horizon with Poison Reserve

Il problema per cui si verifica il count-to-infinity è perché chi riceve il DV non sa che è il next hop usato dai vicini, e quando il next hop è proprio se stesso allora si verifica il count-to-infinity.

Vediamo una variate della tecnica con i DV, in cui il pseudo codice per generare i DV è il seguente:

 

```python
Every N seconds:
    for ifc in interfaces:
    # one vector for each interface
        v = Vector()
        for d in R[]:
            if (R[d].link != ifc):
                v.add(Pair(d, R[d].cost))
            else:
		            v.add(Pair(d, infinity))
        send(v, ifc)
```

Con *split-horizon* si intende che ogni distance vector sarà leggermente diverso in base a chi viene mandato.

con *poison* si intende che ad ogni vicino viene detto che non si possiedono dei percorsi che passano per quel vicino.

Vediamo il funzionamento nella situazione di prima, Quindi il link D-E si rompe, D non manda in tempo il DV ad A, e quindi A manda il suo DV a D:

![](https://i.ibb.co/9wyCz0F/image.png)

Vediamo come A imposta ad infinito le destinazioni B, C, E dato che per raggiungerli passano per l’interfaccia South, cioè per D al quale stiamo mandando il DV.

Quando D manderà il suo DV ad A, anche lui avrà la tabella aggiornata correttamente.

In questo modo il problema del count-to-infinity può essere risolto, ma solamente in presenza di loop composti da 2 router. Con loop più grandi il **problema esiste ancora**.

Vediamo un esempio in cui si ripresenta il cout-to-infinity.

Il link A-B si rompe, B manda i propri DV a C ed E, ma C non lo riceve:

![](https://i.ibb.co/z7Kc1y1/image.png)

Supponiamo che C mandi il proprio DV a B ed E:

![](https://i.ibb.co/hV6mWT6/image.png)

Per il poison reverse, B non cambia la sua tabella, mentre E aggiorna il costo verso A.

Così facendo quando E manderà il proprio DV a B verrà aggiornato il costo verso A con 4, poi si aggiornerà il costo di A nella tabella di C e si verifica il cout-to-infinity.

## Timer management

un modo per evitare il count-to-update è che quando il costo di un percorso viene impostato a infinito, il router per un certo tempo non accetta modifiche su tale percorso.

Questo ovviamente rallenta il processo di convergenza della rete.

Nella realtà il timer management è valido per reti piccole, mentre per reti molto grandi è necessario un meccanismo più affidabile, che memorizza nelle proprie tabelle tutto il percorso verso le destinazioni. Quest’ultimo meccanismo viene usato nel protocollo BGP.



# Link-State routing

Il **link-state** è un’altra famiglia di protocolli di routing.

Mentre con i distance vector si utilizzava un algoritmo distribuito per computare le routing table, con il link-state si utilizzano **scambi di messaggi** in modo da permettere ad ogni router di conoscere l’intera topologia di rete.

Successivamente ogni router utilizza un algoritmo come Dijkstra per calcolare la tabella con i percorsi minimi.

Abbiamo quindi sempre la rete rappresentata da un grafo, ma in questo caso **i link sono direzionali**, quindi per una comunicazione bidirezionali si hanno due link di direzioni opposte per ogni coppia di router.

Ogni link ha un **peso**, più grande è peggiore è.

## Funzionamento

### Messaggio di HELLO

- Ogni router ha un indirizzo univoco
- Un router invia un messaggio di HELLO (contenente il suo indirizzo) ogni $N$ secondi a tutte le sue interfacce.
- I router che ricevono il messaggio scoprono i loro vicini con cui sono connessi.
- Se i messaggi HELLO non arrivano più dopo $k\cdot N$ secondi allora il relativo link viene marcato come rotto

### LSP

Quando i router hanno scoperto i propri vicini, devono distribuire in modo affidabile i propri link locali a tutta la rete.

Ogni router costruisce un *link-state packet* (LSP) contenente:

- `LSP.Router`: il suo indirizzo identificativo
- `LSP.age`: il tempo di vita rimanente del pacchetto
- `LSP.seq`: numero di sequenza che incrementa ad ogni pacchetto (identifica il pacchetto)
- `LSP.Links[]`: lista di vicini composta da:
    - `LSP.Links[i].Id`: l’identificativo del vicino
    - `LSP.Links[i].cost`: il costo del link

Per la distribuzione di questi pacchetti viene utilizzato un **algoritmo di Flooding**, in cui ogni router mantiene un database (LSDB) contenente per ogni router della rete, l’LSP più recente.

Se un router che riceve un LSP che ha già all’interno del suo LSDB con lo stesso numero di sequenza allora non lo inoltra. Altrimenti viene inoltrato a tutte le interfacce tranne quella da cui è arrivato.

Algoritmo:

```python
# links is the set of all links on the router
# Router R LSP arrival on link l
if newer(LSP, LSDB(LSP.Router)): # get last LSP from the DB, compare with current
		LSDB.add(LSP) # implicitly removes older LSP from same router
		for i in links:
				if i != l:
				  send(LSP, i)
# else , LSP has already been flooded
```

Stato di partenza:

![](https://i.ibb.co/TMRbYzT/image.png)

Stato dopo il flooding:

![](https://i.ibb.co/cw0Wm76/image.png)

Legenda:

| Links | LSP |
| --- | --- |
| from → to : cost | from-seq [to:cost]:[to:cost] |

Quando un link si rompe, i router connessi a tale link generano un nuovo LSP e lo inoltrano alla rete.

Quindi se si rompe il link B-E, il router E manderà un nuovo LSP a D e C che lo inoltreranno a loro volta ai router vicini. Il router B farà lo stesso.

### Note

- è possibile che un router riceva più copie dello stesso LSP.
- il tempo in cui i router coinvolti nel link in errore si accorgono del fallimento può essere diverso
- Dato che i link sono direzionali anche se un solo verso si è rotto vengono rimosse entrambe le direzioni. Analogamente se il link viene aggiustato è necessario avere la conferma da entrambi i router coinvolti per assicurarsi che entrambe le direzioni funzionino.
- Per avere affidabilità sul ricevimento degli LSP sono necessari degli acknowledgement

Questo metodo richiede molta computazione a causa del flooding e di Dijkstra su ogni router. Su reti molto grandi è anche abbastanza frequente che qualcosa si rompa, quindi in grandi reti non viene utilizzato.

## Conclusioni

Indipendentemente dall’algoritmo di routing, quando avviene un cambiamento alla topologia della rete si possono verificare:

- loop (duplicazione di pacchetti)
- pacchetti che intraprendono percorsi diversi (con velocità diverse)
- creazione di buchi neri (perdita di pacchetti)

A livello di rete quindi i pacchetti possono essere persi, corrotti, duplicati e ricevuti fuori ordine. I layer superiori devono tenerne conto.



# Livello di trasporto

Per introdurre il livello di trasporto assumiamo che il livello di rete non sia **reliable**, e quindi che i pacchetti sono di grandezza limitata, possono essere persi, corrotti, duplicati e arrivare in modo disordinato.

Il livello applicazione richiede la consegna dei dati sia affidabile, cioè che:

- i dati arrivino correttamente
- i dati possano essere riordinati dal ricevitore
- i dati duplicati siano rilevati

Il livello di trasporto deve anche implementare il **multiplexing**: cioè l’utilizzo di un singolo canale per trasmettere dati di applicazioni diverse.

Il nome attribuito all’unità di dati a livello di trasporto è **segmento**. 

Vedremo due servizi offerti dal livello di trasporto:

1. *Connectionless service* (che offre solo multiplexing)
2. *Connection-oriented service* (che offre multiplexing e affidabilità)

## Connectionless service

Questo servizio fornisce:

- **consegna non affidabile** dei dati
- **multiplexing**

Solitamente è *stateless*: ogni segmento viaggia indipendentemente dai precedenti (il destinatario non possiede variabili che mantengono lo stato).

Solitamente garantisce almeno *l’error detection* con una *checksum*.

Questo servizio è usato per applicazioni che accettano la perdita di alcuni dati e non si è interessati a ritrasmetterli (es. video streaming, online gaming).

È importante anche citare l’utilizzo del **numero di porta**: cioè un numero presente sull’header dei segmenti che identifica una determinata applicazione.

Alla **richiesta** del client viene inserita la **porta sorgente** che identifica l’applicazione del client e la **porta destinazione** che identifica l’applicazione sul server.

Alla **risposta** saranno invertite.

Grazie al numero di porta si riesce ad implementare il multiplexing, e quindi ad identificare a che applicazione appartiene il traffico.

## Connection-oriented service

Questo servizio crea una **connessione** tra due entità (ad esempio un client e un server) che possiede uno **stato**: cioè delle variabili vengono usate per tracciare l’evoluzione della connessione.

Abbiamo quindi una **connessione stateful** che ha bisogno di essere **impostata** prima di inviare dati e **distrutta** quando non ci sono più dati da mandare.

Anche in questo caso vengono usati i numeri di porta per identificare le applicazioni.

## Set up della connessione

Potremmo pensare che basti lo scambio di due pacchetti per iniziare una connessione ma ricordiamo che il livello sottostante non è affidabile, ci serve quindi un sistema più complesso.

### Duplicazione dei pacchetti

I **pacchetti** si possono **duplicare**, e questo può essere causato da dei loop temporanei. Definiamo quindi un **MSL** (Maximum Segment Life): il massimo tempo che un pacchetto e il suo ACK possono persistere nella rete.

Per internet assumiamo che MSL< 120 secondi.

Per identificare i duplicati abbiamo bisogno di avere dei **numeri di sequenza**, ci serve quindi una variabile che incrementa nel tempo.

Ad ogni richiesta di connessione (che indichiamo con **CR**, *Connection Request*) viene mandato un **ISN** (*Initial Sequence Number*), che per semplicità assumiamo essere un contatore, dato che la dimensione dell’header è limitata questo contatore dovrà ricominciare ad un certo punto.

Il destinatario ritornerà quel numero nella sua risposta (che indichiamo con **CA**, *Connection Acknowledgment*)

Infine il mittente, controllando che il numero ricevuto sia uguale a quello che aveva mandato lui,  manderà un ACK per confermare la connessione.

Questa operazione di tre passaggi per stabilire una connessione viene chiamata **three way handshake**. 

### Relazione tra ISN e MSL

È importante che il tempo necessario affinché il contatore ISN riparta da capo sia di molto maggiore rispetto all’MSL.

Consideriamo il seguente scenario:

1. il client apre una connessione con ISN = $x$
2. successivamente la connessione termina improvvisamente
3. il client apre una nuova connessione verso lo stesso server con ISN = $x + \Delta$ che però deve essere calcolata in modulo $n$ per poter non andare all’infinito, supponiamo che accada: ISN = $(x + \Delta)\%n = x$ (cioè si ottiene lo stesso ISN della vecchia connessione)
4. il client riceve un ACK per il ISN $x$ ma si riferisce alla nuova connessione oppure è una copia di un vecchio ACK?
    
    Se il tempo necessario per ricominciare con i numeri di sequenza è paragonabile all’MSL non potremmo determinarlo.
    

## Three way handshake

In generale vogliamo una connessione bidirezionale, abbiamo quindi bisogno di due numeri di sequenza, uno per ogni direzione della comunicazione.

In questo modo entrambi gli host possono ricostruire il proprio flusso di segmenti.

![](https://i.ibb.co/H2wvZLG/image.png)

Vediamo passo passo cosa accade:

1. L’host A fa una richiesta con il numero di sequenza x
2. L’host B riceve la richiesta e crea un nuovo stato per la connessione. A questo punto non sa ancora se si tratta di una nuova connessione o un pacchetto duplicato
3. L’host B manda un ACK per il numero di sequenza x e manda il proprio numero di sequenza y
4. L’host A riceve l’ACK, questo conferma che l’host B ha ricevuto correttamente la richiesta iniziale
5. A questo punto per l’host A la connessione è stabilita e i numeri di sequenza dei segmenti di dati inviati da A inizieranno da x.
6. L’host A deve confermare di aver ricevuto l’ACK mandando a sua volta un ACK per il numero di sequenza y
7. L’host B riceve l’ACK e adesso è sicuro che non si tratti di un duplicato e anche per lui la connessione è stabilita. I numeri di sequenza dei segmenti di dati inviati da B inizieranno da y.

## Trasferimento dei dati

Dopo aver stabilito la connessione, essa può essere usata per trasferire dati.

Per assicurare un trasferimento affidabile non possiamo semplicemente riusare le tecniche viste nel livello data link perché in questo livello siamo soggetti ad altri tipi di errori.

In primo luogo il livello di trasporto riceve **stream di byte** e i numeri di sequenza sono riferiti alla posizione del byte nello stream.

Il ricevitore deve quindi avere un **buffer** (anche implementato con un go-back-n) dato che la quantità di dati in arrivo non è conosciuta in anticipo.

Il ricevitore può continuare a ricevere dati mentre l’applicazione li processa, quindi il passaggio dei dati al livello applicativo **non è bloccante**.

L’applicazione può non essere in grado di processare abbastanza velocemente, ciò comporta che il buffer può andare in sovraccarico, ma questo può essere immediatamente notificato con un apposito messaggio per **rallentare l’invio dei dati**.

Per implementare la comunicazione di rallentare l’invio dei dati, gli host possono comunicare la dimensione della propria finestra negli ACK. L’host che riceve tale informazione limiterà di conseguenza la dimensione del suo buffer.

Ogni host avrà quindi due variabili di stato: 

- `swin`: la dimensione della finestra di chi invia (le celle vuote, e quindi disponibili)
- `rwin`: la dimensione della finestra di chi riceve (le celle vuote, e quindi disponibili)

Il numero di segmenti inviati e di cui non si è ancora ricevuto l’ACK deve essere al massimo `min(swin, rwin)`

Vediamo un esempio di evoluzione della **finestra dinamica**, 2 bit sono utilizzati per i numeri di sequenza (4 numeri totali).

legenda:

- bordo rosso: numeri di sequenza di cui non si è ricevuto l’ACK. È limitato da `min(swin, rwin)`
- linea blu: finestra del mittente di dimensione fissa
- numeri verdi: posizioni libere
- numeri neri: posizioni occupate
- `Swin` e `Rwin` si riferiscono alle dimensioni di finestra locali
- `swin` e `rwin` si riferiscono alle dimensioni di finestra remote

![](https://i.ibb.co/tY4yS39/image.png)

Se la finestra diventa di dimensione zero, significa che il ricevitore è sovraccarico, in tal caso il mittente smette di trasmettere e attende gli ACK dal ricevitore.

In questo stato periodicamente il mittente rimanda vecchi dati per permettere al ricevitore di mandare rimandare gli ACK nel caso siano stati persi.

### Gestione dei dati disordinati

Il livello di trasporto si basa sul numero di sequenza per riordinare i dati ricevuti in ordine sbagliato.

Il problema è che con il riciclo degli stessi numeri di sequenza quando vengono esauriti, si possono creare situazioni in cui dati vecchi in ritardo vengono accettati:

![](https://i.ibb.co/18mnPpZ/image.png)

Quello che accade è:

1. A manda D(0, a) che viene ricevuto da B e viene fatto l’ACK
2. A manda D(1, b) ma viene ritardato di molto
3. A manda D(2, c) e D(3, d) ma B non ha ricevuto ancora D(1, b) quindi manda un ACK dell’ultimo ricevuto, cioè C(OK, 0)
4. A rimanda D(1, b) che viene ricevuto da B e viene fatto l’ACK cumulativo di tutto lo stream ricevuto, cioè C(OK, 3)
5. A manda nuovi dati, il numero di sequenza è ripartito e quindi manda D(0, e)
6. B lo riceve e manda l’ACK
7. A questo punto B si aspetta il numero di sequenza 1
8. arriva D(1, b) che è una replica di un vecchio pacchetto ormai inutile (nota che questo deve accadere entro il tempo MSL). Dato che il numero di sequenza è valido il pacchetto viene accettato e lo stream di byte viene quindi corrotto

Questo è un altro esempio sull’importanza di impostare la grandezza dei numeri di sequenza rispetto all’MSL.

Con connessioni a capacità molto alta i numeri di sequenza potrebbero ricominciare molto prima dell’MSL. Un importante parametro da tenere in considerazione è $\text{capacity} \times \text{delay}$.

Con capacità molto elevate normalmente i pacchetti viaggiano in reti locali, quindi il delay è molto piccolo. Quindi il MSL è molto più piccolo dei classici 120 secondi.

Diventano però sempre più diffuse reti gigabit non locali in cui il valore di $\text{capacity} \times \text{delay}$ diventa considerevole. Per questa ragione sono state fatte delle modifiche a TCP che rendono il meccanismo un po’ più complesso.

## Rilascio della connessione

Una volta che tutto il traffico è stato mandato, è il momento di chiudere la connessione.

È importante che **tutti e due gli host siano consapevoli della chiusura della connessione**.

Abbiamo due modi di chiudere la connessione:

- **Chiusura graduale** (*graceful release*): attraverso uno scambio di pacchetti atto a chiudere la connessione in entrambe le direzioni: prima si disconnette un host e l’altro conferma e poi avviene il contrario
    
    ![](https://i.ibb.co/PWCvB2q/image.png)
    
- **Chiusura improvvisa** (*abrupt release*): quando uno dei due host deve chiudere immediatamente la connessione.
    
    ![](https://i.ibb.co/TLPg3Cn/image.png)



# Livello applicativo

Le applicazioni sono molto differenti tra loro ed è difficile standardizzare il loro comportamento.

Tendenzialmente le applicazioni utilizzano un approccio client-server, in cui i protocolli devono specificare la sintassi e la semantica delle richieste e delle risposte.

I dati scambiati possono essere in formato testuale (ad esempio ASCII o UTF-8) ma anche non testuali (ad esempio immagini).

Un fatto importante da considerare è che le CPU di oggi utilizzano un formato di rappresentazione binaria *little endian*, mentre su internet si scelse di usare *big endian*. Quindi è necessario convertire i dati in *big endian* per farli passare correttamente verso internet e poi riconvertire sul destinatario.

`htonl()` e `ntonl()` sono due funzioni C della libreria standard utilizzate per convertire l’endianess dei dati.

## Nomi e indirizzi

Abbiamo visto come gli host vengano riconosciuti tramite indirizzi di rete e come, attraverso l'uso di numeri di porta, sia possibile identificare le applicazioni all'interno di un host.

A livello applicativo, è presente l'interazione con l'utente, e per quest'ultimo può essere difficile ricordare lunghe sequenze di numeri; è quindi preferibile associare agli indirizzi dei **nomi significativi**.

I **nomi di dominio** sono stringhe composte da lettere minuscole, trattini e punti, e rappresentano un sistema gerarchico per identificare una risorsa nella rete.

I nomi di dominio hanno questa forma `www.example.com`, la gerarchia diventa più specifica andando verso sinistra, mentre sempre più generica andando verso destra: `com` è il **Top Level Domain** (TLD) cioè il punto più generico

Possiamo vedere la gerarchia dei domini in questo modo:

![](https://i.ibb.co/RNdcykz/image.png)

Ovviamente è presente molta ridondanza nei nodi e nei root server, questi ultimi hanno un indirizzo fisso e conosciuto.

Quando si vuole raggiungere un nome di dominio nella gerarchia, vengono consultati gerarchicamente il root server, il corretto TLD e poi i sottodomini

L'uso dei nomi di dominio risolve degli importanti problemi come:

1. **Trasparenza nei cambiamenti di indirizzo**: Quando il server cambia indirizzo IP (ad esempio per essere spostato su un nuovo server fisico), è sufficiente aggiornare il record del nome di dominio, senza bisogno di avvisare manualmente i client. I client continueranno a utilizzare lo stesso nome di dominio senza doversi preoccupare del nuovo indirizzo IP.
2. **Gestione del bilanciamento del carico**: Con l'uso dei nomi di dominio, è possibile implementare il bilanciamento del carico distribuendo le richieste su più server senza dover modificare gli indirizzi IP nei client.



# Sicurezza della rete

Con sicurezza della rete possiamo intendere un insieme di azioni che riguardano ogni aspetto per rendere una rete sicura e mantenerla sicura nel tempo.

Lo standard X.800 definisce tre aspetti chiave: 

- **servizi di sicurezza**:
    
    Ci sono 6+1 servizi a cui dedicare risorse per rendere più sicuro un sistema:
    
    - **Data availability**
    - **Data authentication**
    - **Data integrity**
    - **Confidentiality/Secrecy**
    - **Access control**
    - **Non repudiation**
    - (Anonymity)
- **meccanismi di sicurezza**: sono delle funzioni che hanno lo scopo di implementare i servizi sopra citati, ad esempio:
    - criptografia
    - firma digitale
    - hashing
    - meccanismi di controllo degli accessi
    - protocolli di autenticazione
    - …
- **attacchi**: Un sistema al 100% sicuro non esiste, la sicurezza si applica per coprire determinati attacchi proporzionati all’importanza e alla grandezza del sistema da proteggere.

## Servizi di sicurezza

Approfondiamo i vari servizi di sicurezza.

### Availability

Significa che il sistema deve essere sostanzialmente raggiungibile.

Gli attacchi DoS minano questo servizio saturando le risorse fisiche necessarie al funzionamento del sistema.

Per garantire al più possibile l’availability è necessario avere un buon design della rete e minimizzare il danno da un possibile attacco DoS.

### Confidentiality

Significa che i dati scambiati rimangono riservati ai soli partecipanti dello scambio.

Per garantire questo aspetto sono necessari meccanismi di crittografia

### Integrity

Significa che i dati devono raggiungere la destinazione senza subire modifiche nel tragitto.

Per garantire questo aspetto sono necessari meccanismi di hashing

### Authentication

Si divide in:

- **Autenticazione dell’origine dei dati**: chi riceve i dati deve essere certo che chi ha dato origine ai dati sia chi dice di essere.
    
    Ad esempio, se Alice riceve un'email da Bob, l'autenticazione dell'origine dei dati è il servizio che garantisce che il vero autore dell'email sia effettivamente Bob, indipendentemente da chi consegna l'email (ad esempio, Gmail).
    
- **Autenticazione del peer**: chi riceve i dati deve essere certo che chi consegna i dati sia chi dice di essere.
    
    Ad esempio, tra Alice e Bob ci sono diversi router che trasportano le informazioni. Alice riceve da Carl (un intermediario lecito) i dati generati da Bob e deve essere sicura che le informazioni appena ricevute siano state effettivamente inviate da Carl e non siano state alterate da un'entità che finge di essere Carl.
    

Per garantire questo aspetto sono necessari meccanismi di firma digitale.

### Access control

L’accesso deve essere permesso solamente a chi è autorizzato ad accedere.

Non garantire il controllo può permettere situazione in cui il sistema viene sfruttato per attaccarne un altro a nostra insaputa. Potremmo quindi essere accusati di aver partecipato all’attacco anche se non è così.

Per garantire questo aspetto sono necessari meccanismi di autenticazione ed identificazione

### Non repudiation

Il non ripudio previene che un mittente neghi di essere stato lui ad inviare un messaggio, oppure che chi riceve il messaggio neghi di averlo ricevuto.

Per garantire questo aspetto sono necessari meccanismi firma digitale

### Anonymity

Questo non è un servizio canonico dello standard X.800.

Indica l’abilità di usare un sistema senza che il sistema sia in grado di identificare l’utente.

Per garantire questo aspetto sono necessari meccanismi come Tor, freenet, ecc

Questo servizio ha una doppia faccia: da un lato può essere usato per commettere atti illegali, dall’altro permette di dar voce a chi non può usufruire dei propri diritti civili (a causa di guerre, politiche restrittive, ecc…)

## Sicurezza nella comunicazione

Quando si gestisce un sistema di comunicazione si fa riferimento ad una astrazione di questo tipo:

![](https://i.ibb.co/H2Jjv8s/image.png)

**Alice** e **Bob** vogliono comunicare tra loro, mentre **Eve** è l’attaccante che controlla il canale di comunicazione.

Alice e Bob devono scambiarsi dei messaggi e trattano il canale di comunicazione come un tubo in cui mandare o ricevere i messaggi.

Il canale di comunicazione può essere di qualsiasi tipo, ad esempio Internet.

Eve può fare qualsiasi cosa sul canale: intercettare i messaggi, duplicarli, non farli arrivare, modificarli (però non può rompere la crittografia dei messaggi).

Alice e bob trasformano i propri messaggi con dei meccanismi per non inviare il testo in chiaro, ma piuttosto messaggi cifrati.

Per fare in modo che Alice e Bob si accordino sul sistema di trasformazione devono ricevere delle credenziali da una entità terza affidabile (Anche Eve può interagire con questa entità)

Un workflow per rendere sicuro un sistema consiste nell’identificare gli attori del modello e fare delle scelte:

- di quali servizi di sicurezza ho bisogno?
- in che modo possono attaccare il sistema?
- da quali attacchi non vale la pena difendersi?
- quali servizi mi posso permettere?
- quali meccanismi adottare?
- adottando troppe misure di sicurezza sto rendendo inutilizzabile il sistema?

Si tratta sempre di un **trade-off tra sicurezza e usabilità.**

## Crittografia

La crittografia è la scienza che studio come rendere segrete delle informazioni.

La crittografia permette di avere:

- integrità (tramite **funzioni hash**)
- segretezza (tramite **cifratura**)
- non ripudio (tramite **firma digitale**)
- componendo varie funzioni sopra citate si può ottenere anche
    - controllo degli accessi
    - anonimità
    - autenticazione

**Algoritmo crittografico**: Una sequenza di operazioni matematiche che possono essere applicate ad un messaggio

**Funzione crittografica**: un blocco di codice che implementa l’algoritmo crittografico per fornire meccanismi di sicurezza.

**Protocollo di sicurezza**: È un insieme di regole che definiscono come devono essere utilizzati algoritmi crittografici e funzioni crittografiche per garantire una comunicazione sicura.

Per minimizzare il rischio di falle di sicurezza è importante cercare di seguire queste regole:

- non usare algoritmi di crittografia sconosciuti e non inventarsene di nuovi per conto proprio
- non usare funzione crittografiche closed source
- usare le funzioni più utilizzate e aggiornate
- usare protocolli standard
- Restringere il servizio solo ad utenti che supportano la versione più recente dei protocolli

## Funzioni hash

Una **funzione hash** è una funzione unidirezionale (non invertibile) che viene applicata su dei dati di dimensione variabile e genera un **digest**, cioè una stringa di grandezza fissa. Più grande è la dimensione della stringa in output minori saranno le collisioni.

Le funzioni hash vengono usate per garantire **l’integrità dei dati**: infatti inviando oltre che al messaggio anche il digest, il destinatario potrà ricalcolare la funzione hash sul messaggio e controllare che i due digest corrispondano.

![](https://i.ibb.co/VNpWJ4W/image.png)

Funzioni hash sono ad esempio MD5, SHA 1, SHA 256, …

### Proprietà delle funzioni hash

1. l’input può essere di qualsiasi dimensione
2. l’output ha dimensione fissa
3. calcolare la funzione hash di un input deve essere computazionalmente efficiente
4. Dato che il dominio della funzione hash (l’input) è molto più grande rispetto al codominio (l’output) è possibile che si verifichino delle **collisioni** (input diversi generano lo stesso output)
5. possedendo l’output, trovare l’input che ha generato un tale output deve essere computazionalmente impossibile
6. dato un input trovare un altro input che genera lo stesso output deve essere computazionalmente impossibile.
    
    input simili non devono generare un output simile, l’output deve essere impredicibile.
    
7. trovare due input diversi che generano lo stesso output deve essere computazionalmente impossibile

Nota: con **computazionalmente impossibile** si intende che ad oggi non si conosce un algoritmo di complessità polinomiale in grado di risolvere il problema.

Dato che la dimensione dell’output è fissa, se abbiamo un input grande sicuramente delle informazione vengono perse durante l’hashing.

Inoltre a data la presenza di collisioni se un attaccante che possiede un output, trova un input che genera tale output non saprà se l’input è il messaggio originale o solo una collisione.



# HMAC, MD5, cifratura a chiave simmetrica

Abbiamo visto come Alice, nel tentativo di garantire l’integrità del messaggio, assieme al messaggio manda anche il relativo hash. Ma dato che Eve controlla il canale di comunicazione quello che può fare è modificare il messaggio, calcolare un nuovo hash e mandarlo a Bob, il quale non si accorgerà di nulla.

Un modo per raggirare questo problema è utilizzare **due canali separati per il messaggio e per l’hash** (supponendo che l’attaccante non possa controllare entrambi i canali) ma questo non sempre è fattibile.

## HMAC

Una soluzione al precedente problema senza utilizzare due canali separati è quello di utilizzare un HMAC.

L'**HMAC** (*Hashed Message Authentication Code*) è un meccanismo di autenticazione dei messaggi che utilizza una funzione hash che prende in input il messaggio e una chiave segreta per generare il digest.

Quindi Alice e Bob devono accordarsi sulla chiave e sulla funzione hash da usare, in questo modo solo loro possono verificare l’integrità del messaggio.

![](https://i.ibb.co/943vXb6/image.png)

In questo caso se Eve intercetta il messaggio non riesce a calcolare l’hash del messaggio modificato dato che non conosce la chiave, quindi Bob si accorgerebbe che il messaggio non è valido.

Vantaggi:

- Fornisce **integrità** usando un solo canale di comunicazione
- Fornisce **autenticazione**: Bob sa che il messaggio viene da Alice in quanto solo lei conosce la chiave

Svantaggio:

- Serve un canale di comunicazione **sicuro** per poter accordarsi sulla chiave segreta.

### Sicurezza dei canali

Spesso i protocolli hanno bisogno di un canale sicuro per poter funzionare, un canale che fornisce segretezza e/o autenticità.

Nel precedente esempio abbiamo bisogno di un canale sicuro per accordarsi sulla chiave.

Il canale dove si scambiano messaggio può essere insicuro, ma viene garantita la segretezza tramite la crittografia ottenuta grazie al precedente scambio di chiavi.

### Generazione delle chiavi

Alice e Bob non devono perdere o dimenticarsi la chiave, altrimenti non possono più comunicare, tenteranno quindi di usare una chiave troppo semplice. A questo punto Eve potrebbe fare brute force e indovinare la chiave.

Quello che si può fare è di sfruttare la randomicità delle funzioni hash per generare una chiave di caratteri senza significato partendo da una password facile da ricordare tanto quanto difficile da indovinare.

Alice e Bob usano un canale sicuro per accordarsi su una password forte, la chiave sarà ottenuta da una fuzione hash su tale password.

Eve può aspettarsi che venga usata questa tecnica e da qui nasce l’importanza di usare password molto forti in modo da rendere vano un attacco di brute force.

## CRAM-MD5

CRAM-MD5 è un protocollo che permette di avere un servizio di autenticazione dell’utente basato sull’uso dell’HMAC.

Il sistema funziona tramite un  meccanismo di *challenge-response*, immaginiamo che **un client si voglia autenticare al server**, **i**l protocollo funziona in questo modo:

- il server crea una challenge $C$ in questo formato “timestamp@dominio” e la manda al client
- Il client ha la chiave segreta condivisa $K$ e computa $D=\text{HMAC}(C, K)$ rispondendo al server con il proprio username e $D$
- Il server cerca l’username nel suo database, se presente, ottiene la rispettiva chiave e computa a sua volta $D’ = \text{HMAC}(C, K)$, se $D=D’$ allora l’autenticazione ha successo

![](https://i.ibb.co/WB4RP2J/image.png)

Questo protocollo è deprecato per problemi di sicurezza:

- la funzione hash che si utilizzava è MD5 che ad oggi non è ritenuta sicura
- Il client non autentica il server, non sa quindi se è veramente chi dice di essere
- La chiave viene mantenuta in chiaro nel server
- Possibili attacchi brute force offline: l’attaccante può intercettare la challenge e l’HMAC, può quindi fare brute force sulla chiave fino a che non ottiene l’HMAC corretto

## Cifratura a chiave simmetrica

Gli elementi fondamentali di un sistema cifratura sono:

- cifrario (algoritmo)
- chiave (informazione)

**Principio di Kerchoffs**: Un sistema crittografico dovrebbe essere sicuro anche se tutto ciò che riguarda il sistema, fatta eccezione per la chiave, fosse di dominio pubblico. 

**La segretezza deve stare nella chiave e non nell’algoritmo usato.**

Il funzionamento è simile a quello dell’HMAC: Alice e Bob usano un canale sicuro per accordarsi su una chiave condivisa e sul cifrario da usare (un cifrario ritenuto sicuro oggi è AES).

- Quando Alice vuole inviare un messaggio, utilizza AES usando come input il messaggio e la chiave, verrà così generato un messaggio criptato
- Quando Bob riceve il messaggio criptato, utilizza AES usando come input il messaggio criptato e la chiave, recuperando così il messaggio originale

Quindi lo **stesso algoritmo** viene utilizzato sia per **cifrare** che per **decifrare**.

Un cifrario trasforma un testo in chiaro in un testo cifrato usando una chiave. Le operazioni di base di un cifrario sono **sostituzioni** (rimpiazzare un simbolo con un altro) e **trasposizioni** (cambiare l’ordine dei simboli)

Ad esempio un cifrario che utilizza solo sostituzioni è il **cifrario di Cesare** che rimappa le lettere dell’alfabeto con le lettere 13 posizioni più avanti:

![](https://i.ibb.co/BZPDnHR/image.png)

Un cifrario funziona se non c’è una correlazione statistica (ad esempio la frequenza di lettere) tra il testo in chiaro e il testo cifrato.

Un algoritmo teoricamente perfetto esiste e si chiama One-time-pad (**OTP**) o cifrario di Vernam. È l’unico algoritmo la cui affidabilità è stata dimostrata matematicamente.

### Funzionamento di OTP:

- Alice genera un stringa random $K$ di $n$ bit. Trasmette questa stringa a Bob su un **canale sicuro**
- Per cifrare un messaggio lungo $m$ bit, con $m < n$, Alice prende una porzione $K’$ della chiave $K$ lunga esattamente quanto il messaggio (quindi $m$ bit) e calcola $C = M\oplus K’$ dove $\oplus$ è l’operazione di XOR binario
- la porzione di chiave presa non deve essere riutilizzata in futuro.
- Bob per recuperare il messaggio esegue semplicemente lo XOR tra il messaggio cifrato e la chiave

Questo sistema è ritenuto perfetto perché se immaginiamo di avere un messaggio di 3 bit e quindi anche una chiave di 3 bit, a causa dell’operazione di XOR fare un attacco di brute force equivale a ottenere tutte le possibili stringhe composte da 3 bit.

Quindi facendo brute force sulla chiave si ottengono messaggi diversi che possono essere perfettamente validi e plausibili

![](https://i.ibb.co/ZY2M9W5/image.png)

Ovviamente un attaccante può dedurre i risultati più plausibili dal contesto, se sa che si tratta di testo scritto in italiano, potrebbe scartare i risultati che non sono scritti in italiano, ma tra quelli scritti in italiano non sa quale sia quello originale.

### Limiti nell’uso

Nonostante la sua sicurezza dimostrata, non è utilizzato nella realtà per motivi pratici:

- ha bisogno di numeri veramente random e non pseudorandom
- mittente e il destinatario devono scambiarsi in modo sicuro una chiave segreta condivisa, lunga **almeno quanto il messaggio** da cifrare, tanto vale allora usare il canale sicuro per inviare direttamente il messaggio.
- le chiavi possiedono un solo utilizzo (da cui deriva il “One-time”)

## Approccio degli algoritmi moderni

Gli algoritmi moderni usano **combinazioni ripetute di sostituzioni e trasposizioni** per creare algoritmi con le seguenti proprietà:

- la lunghezza della chiave è fissa, non deve necessariamente essere lunga quanto il messaggio
- la correlazione tra il testo in chiaro e il testo cifrato è talmente bassa che è computazionalmente impossibile ottenere il messaggio originale da quello cifrato

## Comunicazione finale

Una volta che Alice e Bob hanno concordato una chiave condivisa in modo sicuro, allora possiamo garantire **integrità, Segretezza e autenticazione**, usando HMAC e cifratura.

![](https://i.ibb.co/1fMSBkb/image.png)

1. Alice usa la cifratura a chiave simmetrica per cifrare il messaggio
2. Il messaggio cifrato assieme alla chiave vengono dati alla funzione hash dell’HMAC, che produce un digest
3. il digest e il messaggio cifrato vengono concatenati e mandati al canale di comunicazione
4. Bob riceve i dati e separa il digest dal messaggio cifrato
5. manda il messaggio cifrato assieme alla chiave alla funzione hash dell’HMAC per ottenere un digest candidato
6. il digest generato viene confrontato con il digest ricevuto:
    1. se sono uguali allora il messaggio non è stato manomesso e il processo continua
    2. se sono diversi allora il messaggio è stato manomesso e il processo si ferma
7. Bob decifra il messaggio cifrato usando la chiave
8. Bob ha recuperato il messaggio originale, sapendo che è integro, la comunicazione è stata segreta e il mittente è sicuramente Alice (in quanto è l’unica altra persona a conoscere la chiave condivisa)

Questo metodo è sufficientemente sicuro fintanto che:

- le funzione di cifratura e di hashing sono robuste
- lo scambio della chiave condivisa è avvenuta prima di cominciare la comunicazione utilizzando un canale sicuro
- la chiave è di una lunghezza sufficientemente grande (256 bit è sufficiente ad oggi)

Nota: generalmente si usano chiavi diverse per la cifratura e per l’hashing.

Una variante di questo sistema è utilizzato nelle reti wifi odierne.

In conclusione la cifratura a chiave simmetrica fornisce:

- segretezza
- integrità
- autenticazione

ma ha bisogno di:

- un canale segreto e autenticato per fare il set-up della comunicazione



# Cifratura a chiave pubblica

Nella crittografia a chiave simmetrica è necessario avere un **canale sicuro** (segreto, integro e autenticato) per poter accordarsi sulla chiave prima di poter comunicare attraverso un canale insicuro.

La **crittografia a chiave pubblica** risolve questo problema, permettendo ad Alice e Bob di comunicare in modo sicuro senza scambiarsi prima dei dati segreti.

Questo viene realizzato tramite la creazione di due chiavi, una **chiave pubblica** (distribuita pubblicamente) e una **chiave privata** (che rimane segreta).

Il **principio fondamentale** della crittografia a chiave pubblica è che ciò che viene cifrato con una chiave può essere decifrato solo con l’altra chiave.

Ci sono vari algoritmi che implementano la cifratura a chiave pubblica, tra cui:

- Lo scambio di chiavi di **Diffie-Hellman**
- La crittografia a chiave pubblica **RSA**

### Intrattabilità dei problemi

Gli algoritmi crittografici spesso si basano operazioni matematiche le quali non hanno un algoritmo efficiente (di tempo polinomiale) che li risolve. Quindi, ad esempio, aumentando la grandezza dei numeri su tali operazioni matematiche si riesce ad aumentare esponenzialmente il tempo richiesto dagli algoritmi per la risoluzione.

- La **fattorizzazione in fattori primi** di un numero è un esempio di operazione matematica per cui non esiste un algoritmo efficiente.
    
    Se calcoliamo $m = p \cdot q$ dove $p, q$ sono numeri primi, non abbiamo un algoritmo efficiente per ottenere $p$ e $q$ a partire da $m$.
    
- Il **calcolo del logaritmo discreto** è una altro problema matematico di questo tipo.
    
    La classica operazione di logaritmo con numeri reali è la seguente:
    
    $$
    g^a =m \longrightarrow \log_{g}m = a
    $$
    
    Con numeri interi però, dati $n, g$ e $m$ non abbiamo un algoritmo efficiente per ottenere $a$ tale che $g^a \mod n = m$
    

## Diffie-Hellman

Lo **scambio di chiavi Diffie-Hellman** è un protocollo che consente a due entità di concordarsi su una **chiave simmetrica** in un **canale insicuro** senza essersi prima scambiati informazioni segrete.

Questa chiave può essere utilizzata successivamente per cifrare le comunicazioni tramite un algoritmo a chiave simmetrica, garantendo la segretezza delle informazioni scambiate.

Questo protocollo si basa sulla difficoltà di calcolare il logaritmo discreto.

### Funzionamento

![](https://i.ibb.co/RcYwpXy/image.png)

- Alice sceglie un numero primo grande $n$, un numero random $a$ (che deve rimanere **segreto**) e una radice primitiva (o generatore) $g$ per $n$.
    
    La radice primitiva di un numero primo $n$ è un intero $g$ tale che ogni intero da $1$ a $n-1$ può essere espresso come una potenza di $g$ modulo $n$, ad esempio $n = 7, g = 3$:
    
    - $1 = 3^6 \mod 7$
    - $2 = 3^2 \mod 7$
    - $3 = 3^1 \mod 7$
    - $4 =3^4 \mod 7$
    - $5 = 3^5 \mod 7$
    - $6 = 3^3 \mod 7$
- Alice calcola $m$ come $g^a\mod n$ e manda $m, g, n$ a Bob
- Bob riceve i dati e sceglie un numero random $b$ (che deve rimanere **segreto**)
- Bob calcola $r$ come $g^b \mod n$ e lo manda ad Alice
- La chiave condivisa generata è quindi
    
    $$
    K = g^{ab}\mod n
    $$
    
    che Bob calcola come:
    
    - $K = m^b \mod n = (g^{a})^b \mod n = g^{ab} \mod n$
    
    Mentre Alice la calcola come
    
    - $K = r^a \mod n = (g^b)^a \mod n = g^{ab} \mod n$

Questo sistema garantisce che, anche se un **attaccante dovesse intercettare il traffico** e ottenere $m,g,n,r$, non sarebbe comunque in grado di risalire ad $a$$ e $b$ (e quindi alla chiave), grazie alla complessità computazionale del logaritmo discreto.

### Problema

Se però l’attaccante fosse in grado di **modificare il traffico**, nascerebbero dei problemi (essendo in un canale insicuro, questo non è da escludere)

L’attaccante, Eve, potrebbe far fallire lo scambio ma nel caso peggiore potrebbe fingere di essere Bob per Alice e fingere di essere Alice per Bob.

![](https://i.ibb.co/6NjV6z3/image.png)

Diffie Hellman **non garantisce quindi l’autenticazione** delle parti, questo sistema viene spesso utilizzato in combinazione con meccanismi di autenticazione.

## Principi della crittografia a chiave pubblica

Vediamo i **principi della crittografia a chiave pubblica**:

- Alice e Bob hanno due chiavi ciascuno
- Alice genera la propria **chiave pubblica** (accessibile da chiunque) e la propria **chiave privata** (segreta)
- Bob genera la propria **chiave pubblica** (accessibile da chiunque) e la propria **chiave privata** (segreta)
- Ciò che viene cifrato con una chiave può essere decifrato solamente con l’altra chiave
- Le chiavi pubbliche e private vengono generate contemporaneamente attraverso un processo matematico che le lega intrinsecamente. Per come sono generate è computazionalmente impossibile ottenere una chiave possedendo l’altra.

Per garantire la **segretezza** possiamo usare la **chiave pubblica del destinatario per cifrare** il messaggio, così facendo solo il destinatario, con la sua **chiave privata, potrà decifrare il messaggio**.

![](https://i.ibb.co/kHk5GXM/image.png)

## RSA

L’algoritmo più famoso che implementa questo sistema è **RSA** (dal nome dei suoi autori: Rivest Shamir, Adleman), questo algoritmo è basato sulla difficoltà della **fattorizzazione in numeri primi**.

**RSA**, riesce ad offrire **segretezza**, **autenticazione, integrità** e **non ripudio**, senza la necessità di un canale sicuro preesistente per lo scambio delle chiavi.

Il processo semplificato per la **creazione delle chiavi** è il seguente:

- Scegliere due numeri primi grandi $p, q$
- Calcolare $n = p\cdot q$ e calcolare la funzione toziente $\phi(n) = (p-1)(q-1)$
    
    La **funzione toziente** (o funzione di Eulero) è una funzione che prende in input un intero $n$ e restituisce il numero di interi compresi tra $1$ e $n$ che sono **coprimi** (non hanno divisori comuni oltre a $1$) con $n$.
    
    Esempio  $n = 3 \cdot 5 = 15$, $\phi(15) = (3-1)(5-1) = 8$ infatti i numeri coprimi con $15$ compresi tra $1$ e $15$ sono: $1, 2, 4, 7, 8, 11, 13, 14$
    
- Scegliere un intero $e$ tale che $2 < e < \phi(n)$ e che sia coprimo con il valore restituito da $\phi (n)$
- Calcolare $d$ in modo che $d\cdot e \mod \phi(n) = 1$, cioè che sia l’inverso moltiplicativo di $e$ in modulo $\phi(n)$
    
    Esempio: con $e = 3$ e $\phi(15) = 8$ l’inverso moltiplicativo di $3$ è $3$ infatti: $3 \cdot 3 \mod 8 =1$
    

$(n,e)$ rappresenta la **chiave pubblica**, mentre $(n, d)$ rappresenta la **chiave privata**

La forza dell'algoritmo sta nel fatto che per calcolare $d$ da $e$ (o viceversa) non basta la conoscenza di $n$ ma serve il numero $\phi (n)=(p−1)(q−1)$, ma per il suo calcolo non esistono algoritmi efficienti.

Se Bob vuole inviare un messaggio $M$ ad Alice, lo cifrerà in questo modo:

$$
C = M^e \mod n
$$

mentre Alice per decifrarlo:

$$
M = C^d \mod n
$$

## Esempio

Scegliamo $p = 7, q = 11$ e calcoliamo:

- $n = 7 \cdot 11 = 77$
- $\phi(n) = (7-1)(11-1) = 60$

Scegliamo $e = 13$ in modo che non abbia divisori comuni con $60$

per trovare $d$ nella realtà si usa l’algoritmo esteso di Euclide, ma con numeri piccoli si può andare a tentativi per ottenere $d = 37$.

Assumiamo che il messaggio da inviare sia $M = 00010100_2 = 20_{10}$

- Cifratura:
    
    $$
    C = 20^{13} \mod 77 = 69
    $$
    
- Decifratura:
    
    $$
    M = 69^{37} \mod 77 = 20
    $$
    

## Proprietà desiderate

Sia $E()$ la funzione di cifratura, e $D()$ la funzione di decifratura in modo che 

- $C = E(Pub\_A, M)$ significa che genero in testo cifrato $C$ cifrando $M$ con la chiave $Pub\_A$
- $M = D(Priv\_A, C)$ significa che genero il testo in chiaro $M$ decifrando $C$ con la chiave $Priv\_A$

Le proprietà che vorremmo avere nel nostro algoritmo sono:

1. Che sia computazionalmente **efficiente generare le chiavi** $Pub\_A, Priv\_A$
2. Data la chiave $Pub\_A$ sia computazionalmente **efficiente calcolare** $C = E(Pub\_A, M)$
3. Data la chiave $Priv\_A$ sia computazionalmente **efficiente calcolare** $M = D(Priv\_A, C)$
4. Avendo la chiave $Pub\_A$ sia computazionalmente **impossibile ottenere** $Priv\_A$
5. Avendo la chiave $Pub\_A$ e il testo cifrato $C$ sia computazionalmente **impossibile ottenere relativo testo in chiaro** $M$

RSA riesce a dare tutte queste proprietà, infatti la **generazione delle chiavi, la cifratura e la decifratura** avvengono in tempo **polinomiale**, mentre usando delle **chiavi sufficientemente grandi** (>1024 bit) risulta molto **difficile rompere la cifratura**.

## Attacchi a RSA

Un attaccante può fare la stessa cosa che poteva fare con Diffie-hellman, cioè durante lo scambio delle chiavi pubbliche, Eve si può mettere in mezzo fingendo di essere il destinatario per entrambe le parti, compromettendo lo scambio e di conseguenza tutta la successiva comunicazione:

![](https://i.ibb.co/0QJ9V0P/image.png)

Quindi la cifratura a chiave pubblica necessita di un canale **autenticato e integro** per lo scambio delle chiavi, cioè Alice e Bob devono quindi essere sicuri che le chiavi che ricevono appartengano effettivamente all’altra persona, ma tali chiavi sono pubbliche quindi **non abbiamo bisogno di segretezza**.

(Ricordiamo invece che la cifratura a chiave simmetrica richiede un canale autentico, integro e segreto per lo scambio)

## Firma digitale

Invertendo il ruolo delle chiavi è possibile implementare il concetto di **firma digitale.**

Se Alice cifra un messaggio con la propria chiave privata, allora chiunque può decifrarla usando la chiave pubblica di Alice, in questo modo si è certi che quel messaggio proviene da Alice, dato che è l’unica in possesso della chiave privata usata per la cifratura. Al contempo Alice non può negare di essere stata lei ad inviare il messaggio. 

In questo modo si può usare RSA per garantire **autenticazione** e il **non ripudio** (e usando entrambe le tecniche garantisce anche segretezza).

Così facendo durante lo scambio delle chiavi si può, oltre che a mandare la chiave, mandare anche una firma digitale per autenticare il mittente.

Ancora una volta, però, l’attacco *man in the middle* è possibile: infatti Bob prima di verificare la firma deve richiedere la chiave pubblica di Alice e questa può essere compromessa, Eve infatti può mandare la sua chiave pubblica, firmata con la sua privata, fingendosi quindi Alice.

Quindi finché lo scambio delle chiavi non avviene in modo completamente affidabile, l’attacco man in the middle è possibile.

## Prestazioni di RSA

La differenza di velocità con cui si cripta e di decripta con RSA è molto ampia: risulta infatti poco costoso usare la chiave pubblica e molto costoso usare la chiave privata. Questo è dato dal fatto che si tende a preferire una **chiave privata più lunga** rispetto alla chiave pubblica in quanto deve essere difficile di indovinare.

Comparato con i tempi di cifratura a chiave simmetrica, **RSA è vari ordini di grandezza più lento**.

In passato, alcuni sistemi che utilizzavano RSA per cifrare e decifrare l’intero traffico sono stati vulnerabili ad attacchi *DoS*. Questi attacchi sfruttavano il fatto che, per i client, cifrare i messaggi con la chiave pubblica del server era molto più veloce di quanto non fosse per il server decifrarli con la propria chiave privata.

### Utilizzo nella realtà di RSA

Quello che si fa nella realtà è quindi di usare **RSA per lo scambio di una chiave segreta condivisa**, e poi si usa un sistema di **crittografia simmetrica** (ad esempio AES) **con HMAC.**

Per la firma digitale, invece viene prima fatto un hash del messaggio (per ridurne la grandezza) e poi il *digest* generato viene cifrato con la propria chiave privata.

In conclusione la cifratura a chiave pubblica fornisce:

- segretezza
- integrità
- autenticazione
- non ripudio

ma ha bisogno di:

- un canale autenticato per fare il set-up della comunicazione



# Public key infrastructure

Vediamo ora come risolvere il problema di scambiarsi le chiavi con RSA in modo affidabile. Cioè come può Alice essere certa che quando riceve la chiave pubblica di Bob essa sia veramente di Bob?

Innanzitutto una chiave è un **file binario** codificato in caratteri ASCII con l’aggiunta di eventuali metadati come nome e indirizzo e-mail.

I metadati ovviamente non garantiscono una prova affidabile su chi ha generato effettivamente la chiave.

Vediamo alcuni metodi informali per associare una chiave ad una identità:

1. **Key fingerprint**: Alice quando genera la chiave, **pubblica l’hash** della chiave (*key fingerprint*) su internet ad esempio sul suo sito web o sul proprio profilo Linkedin. Quando Bob riceve la chiave **controlla che l’hash corrisponda** a quello distribuito da Alice. Questo metodo funziona bene in contesti piccoli e informali ma non scala bene per essere usato nel web.
2. **Key server**: Ci sono server sincronizzati in cui è possibile caricare la propria chiave pubblica e cercare le chiavi di altre persone. Questo metodo non garantisce che chi carica la chiave non si spacci per qualcun altro.

## Web of trust

Un terzo metodo è il **Web of trust**: è una rete di contatti in cui i partecipanti certificano l’identità degli altri. Ad esempio Alice e Bob si fidano di Carl, questo significa che:

- possiedono la sua chiave pubblica
- se lui certifica qualcosa Alice e Bob si fidano che sia vero

Carl può quindi certificare che la chiave pubblica di Alice appartenga veramente ad Alice e lo stesso per la chiave pubblica di Bob.

Vediamo come funziona:

1. Alice e Carl si scambiano le fingerprint (hash delle chiavi), lo stesso fanno Bob e Carl
2. Carl manda ad Alice una *key signature*:
    
    $$
    S = E(Priv_C, (Pub_A, "Alice"))
    $$
    
    Cioè Carl cifra, usando la sua chiave privata, la chiave pubblica di alice con la sua identità (il suo nome). Chiunque in possesso della chiave pubblica di Carl può decifrare $S$ e quindi, fidandosi di Carl, verificano la chiave pubblica di Alice.
    
3. Alice manda a Bob la propria chiave pubblica e $S$, dato che Bob si fida di Carl decifra $S$ con la chiave pubblica di Carl e si verifica l’appartenenza della chiave pubblica di Alice
    
    ![](https://i.ibb.co/HHT5ZhQ/image.png)
    

Notiamo come una volta che Alice riceve la propria *key signature* da Carl, esso non è più necessario ai fine della comunicazione, Alice può usare la *key signature* con chiunque si fidi di Carl.

Il sistema può scalare tramite delle catene di fiducia:

![](https://i.ibb.co/30M1B99/image.png)

Nell’immagine Alice si fida di Carl, Carl e Dory si fidano a vicenda e Francis si fida di Dory. In questo modo Alice può dare a Francis la propria chiave pubblica e le signature di tutti i certificatori della gerarchia di cui si fida.

Quindi fintanto che c’è un percorso di certificatori fidati che connette i due attori che vogliono comunicare allora possono comunicare in modo sicuro

![](https://i.ibb.co/SwWfZHg/image.png)

In questo modo Bob sarà certo della chiave pubblica di alice.

L’approccio del **Web of trust** viene utilizzato in contesti specifici, e si avvicina al metodo utilizzato oggi per certificare le identità delle chiavi, tra gli aspetti importanti abbiamo:

- le ***key signature***: il fatto ci firmare la chiave pubblica assieme all’identità per certificare l’appartenenza della chiave
- la ***trust delegation***: il fatto che se A e B si fidano di C allora C fa da certificatore intermedio
- La **fiducia è asimmetrica**: Quando B ottiene la chiave di A, non è detto che A riesca ad ottenere la chiave di B.

## PKI

Una **PKI** (*Public Key Infrastructure*) è insieme di tecnologie, standard, politiche e procedure che permette la gestione delle chiavi crittografiche e dei certificati digitali.

La ***Certification Authority*** (CA) è una entità specifica della PKI di cui tutti gli attori nella comunicazione si fidano, è quella che in passato abbiamo definito essere la *trusted third party.*

Le CA firmano digitalmente le chiavi pubbliche generando così dei certificati per garantire l’integrità e autenticità delle chiavi:

1. Alice e Bob si fidano della CA, questo significa che:
    1. si fidano che non si comporti male
    2. possiedono la sua chiave pubblica
2. Alice chiede alla CA di firmare la sua chiave pubblica, producendo così un **certificato**
3. Bob quando riceve la chiave pubblica di Alice controlla se è stata firmata dalla CA
4. se è così allora Bob si fida che tale chiave pubblica appartiene ad Alice

## Ottenere il certificato

Alice per ottenere il certificato dalla CA seguirà i seguenti passi:

1. Alice genera chiave pubblica e privata
2. Alice genera una *Certificate Signing Request* (CSR), un file che contiene le sue informazioni e la sua chiave pubblica con la rispettiva firma
    
    $$
    \text{CSR = \{Pub\_A,\,\,\, "Alice",\,\,\, E(Priv\_A, (Pub\_A, "Alice"))\}}
    $$
    
3. Alice manda la CSR alla CA
4. La CA controllerà la sua identità (attraverso un documento) e la validità della CSR, decifrando la firma con la chiave pubblica di Alice
5. La CA genera il certificato
    
    $$
    \text{Certificate = \{CSR, \,\,\,E(Priv\_CA, CSR)\}}
    $$
    

I certificati seguono un formato standard chiamato X.509, composto principalmente da:

- id della CA
- id del certificato
- periodo di validità
- identità del richiedente del certificato
- la chiave pubblica
- firma del certificato

![](https://i.ibb.co/7tx282v/image.png)

Note:

- Questo processo viene fatto solamente una volta finché non scade il certificato
- Una volta ottenuto il certificato, la CA non è più necessaria ai fini della comunicazione
- La CA non viene mai a conoscenza delle chiavi private degli attori che certifica
- Per questioni di performance (dato che il certificato contiene molte cose) la CA firma un hash del certificato (dall’hash è esclusa la firma stessa).

## Verificare il certificato

Quando Bob riceve un certificato da Alice:

1. Controlla che il nome riportato nel certificato sia quello di Alice
2. Controlla che il certificato non sia scaduto
3. Controlla che la CA che lo ha firmato sia una CA riconosciuta (Bob ha un database di CA fidate)
4. Decifra la firma con la chiave pubblica della CA e ottiene l’hash del certificato
5. Computa per conto suo l’hash del certificato (escludendo il campo della firma della CA)
6. Se l’hash computato è uguale all’hash ottenuto dalla decifratura allora il certificato è valido

In questo contesto possiamo pensare ad Alice nella realtà come una persona fisica, una rete wifi o un dominio per un sito web. Il caso in cui questo sistema viene più utilizzato è verificare un dominio sul web.

## Fiducia con le CA

Quando Bob deve decidere di quali CA fidarsi si ha una **gerarchia di CA** in cui una CA certifica le sottostanti, Bob **si fida solamente di alcune CA** tendenzialmente in alto sulla gerarchia.

Se una CA è certificata da una CA di cui Bob si fida allora Bob si fida anche di quella.

![](https://i.ibb.co/N6LM0Kp/image.png)

La **Root CA** è una *certification authority* di cui tutti si devono fidare. Ad esempio su Chrome per vedere quali sono le CA di cui il browser si fida è possibile accedere all’url `chrome://certificate-manager/`

Le root CA si firmano i certificati per conto proprio.

Quando Bob visita `www.alice.com`, il server di alice deve fornire il proprio certificato e quello di tutto il cammino fino alla Root CA. Bob dovrà quindi **verificare la validità di tutte le CA nel cammino**.

Se una qualsiasi CA nel cammino non è valida o scade, Bob riceverà un avviso e potrà proseguire a proprio rischio.

In questo caso il browser dell’utente riesce a verificare la validità del server ma il server non verifica chi siamo noi. Per implementare anche questo verso di autenticazione è necessario un altro mezzo che generalmente è **l’autenticazione tramite username e password**.

## Certificate Revocation Lists

In determinate situazioni è necessario che una CA revochi dei certificati, ad esempio quando viene compromessa la segretezza della chiave privata di un certificato.

Le C*ertificate Revocation Lists* (CRL) sono liste di certificati che sono stati revocati dalla CA, in modo da far sapere a tutti che tali certificati sono stati **revocati prima della data di scadenza pianificata** e non dovrebbero più essere considerati attendibili.

Un CRL viene generato e pubblicato periodicamente, spesso ad un intervallo di tempo definito.

## Insicurezza nelle CA

Abbiamo quindi visto come la comunicazione sicura avviene grazie a delle entità (le CA) di cui ci dobbiamo fidare.

È comunque possibile che le CA vengano compromesse, già successo in passato con conseguenze molto gravi. È quindi importante avere un alto livello di sicurezza per evitare che le CA vengano compromesse, dato anche che è possibile costruire una propria gerarchia privata di CA.

## Let’s Encrypt

[Let’s Encrypt](https://letsencrypt.org/) è una CA che fornisce gratuitamente dei certificati per i siti web. Sostanzialmente esso ti chiede di mettere un file ad un determinato URL del tuo sito per certificare che tu sia il proprietario.

L’infrastruttura di Let’s Encrypt è la seguente

![](https://i.ibb.co/P1RhTKb/image.png)

- ISGR (*Internet Security Research Group*) è l’infrastruttura che sta dietro a Let’s encrypt
- ECDSA è un altro metodo di cifratura a chiave pubblica alternativo ad RSA

Qui è descritto il funzionamento: [https://letsencrypt.org/it/certificates/](https://letsencrypt.org/it/certificates/)



# DNS

Affrontiamo adesso dei protocolli di livello applicativo.

Il livello applicativo è il più vicino all'utente e implementa protocolli come HTTP, FTP, SMTP, DNS, ecc., che forniscono servizi agli utenti finali o ad altre applicazioni.

Il livello applicativo comunica con il livello di trasporto, che si occupa di garantire **l'affidabilità** (se si utilizza un protocollo come TCP) e di effettuare il **multiplexing**, distinguendo le applicazioni tramite numeri di porta.

Quando due applicazioni su due sistemi diversi comunicano, il flusso di dati generato è identificato da principalmente da quattro valori:

- Indirizzo IP sorgente
- numero di porta sorgente
- indirizzo IP destinatario
- numero di porta destinatario

## Indirizzi IP

Ogni host di una rete, per poter comunicare, deve disporre di un indirizzo che lo identifica nelle rete, tale indirizzo è chiamato **indirizzo IP**.

Gli indirizzi IP sono implementati nel **livello di rete** in due versioni:

- **IPv4** che usa indirizzi di lunghezza 32 bit
- **IPv6** che utilizza indirizzi di lunghezza 128bit

Lavoreremo principalmente, per semplicità, con indirizzi IPv4.

Tali indirizzi sono formati da quattro numeri separati da un punto `.`, dove ogni numero può variare da 0 a 255 (cioè 8bit). Ad esempio `127.0.0.1`, `192.168.0.0`, `172.31.255.255`

## DNS

Anche i server sono riconosciuti da un indirizzo IP e i servizi che essi offrono sono identificati da un numero di porta. Sarebbe però molto scomodo per gli utenti ricordarsi gli indirizzi IP dei server che offrono il servizio ad un determinato numero di porta.

Per quanto riguarda il numero di porta se si vuole navigare su internet si utilizza un browser e un browser è in grado di connettersi ad un insieme di porte standard (ad esempio 80 e 443).

Abbiamo quindi bisogno di un servizio che ci permetta di **mappare gli indirizzi IP a dei nomi significativi**, un protocollo di livello applicativo che si occupa di questo è il **DNS (Domain name system)**.

## Nomi di dominio

Possiamo vedere il DNS come un registro universale (un database distribuito) con una struttura gerarchica, che archivia nomi di dominio e la loro associazione ai relativi indirizzi IP.

Un nome di dominio è una stringa con una struttura gerarchia in cui le componenti sono separate da punti `.` , a sinistra si ha il livello più basso della gerarchia mentre a destra si ha il livello più alto (chiamato **TLD** *Top Level Domain*).

L’organizzazione responsabile di assegnare nomi di dominio è ICANN (*Internet Corporation for Assigned Names and Numbers*), la quale delega la gestione dei TLD a specifiche organizzazioni. Tali organizzazioni, a loro volta, possono delegare la registrazione dei nomi di dominio a entità chiamate **domain name registrar**.

Ad esempio, in `www.example.com`:

- `www` è il livello più basso (un sottodominio)
- `.example` è il dominio di secondo livello
- `.com` è il TLD (livello più alto)

La gerarchia dei nomi segue la struttura ad albero potenzialmente infinita in cui ogni nodo gestisce a chi delegare i nodi figli.

![](https://i.ibb.co/khz8njT/image.png)

Note importanti:

1. I nomi di dominio vengono usati solo a livello applicativo
2. Un **server DNS** risponde alla domanda: “a che indirizzo IP corrisponde questo nome di dominio?”
3. Se un server DNS non conosce direttamente la risposta può **fornire l’indirizzo di un altro server DNS** che potrebbe rispondere per quel dominio.
4. I root server possiedono una lista completa di indirizzi dei server DNS autoritativi per tutti i TLD, cioè sa a chi inoltrare le richieste in base al TLD scritto nel dominio.

## Registrazione di un nome di dominio

Nonostante sia possibile acquistare un TLD, ciò accade raramente a causa dei costi elevati. Solitamente, ci si rivolge a dei *registrar* per registrare un nome di dominio di secondo livello associato a un TLD disponibile.

Una volta registrato il dominio, questo deve essere associato all’indirizzo IP del server che offre il servizio. Il *registrar* gestisce un server DNS, dove aggiunge una nuova entry che mappa il nome di dominio all’indirizzo IP specificato.

Successivamente, il registrar comunica al server DNS del TLD di essere responsabile della risoluzione del nuovo dominio. Da questo momento, il server DNS del registrar diventa **autoritativo** per il dominio, gestendo le richieste di risoluzione del nome in indirizzo IP.

## Accedere ad un nome di dominio

Mettiamoci nei panni di un browser che vuole visitare `www.example.com` e deve ottenere il relativo indirizzo IP.

Nota: `www` è una parte del dominio come qualunque altra (`main`, `mail`, `ciao`, `chat`,…), non ha nessuna particolarità, viene usato come convenzione storica per indicare indirizzi web.

Innanzitutto nella rete locale si possiede l’indirizzo di un server DNS (solitamente fornito dall'ISP o configurato manualmente) a cui delegare il compito di risoluzione dei nomi di dominio.

![](https://i.ibb.co/pJXHvxq/image.png)

1. Il browser di Alice interroga il server DNS locale chiedendo chi è `www.example.com` con una **richiesta ricorsiva**.
2. Il server DNS locale non sa la risposta, quindi inizia a fare delle **richieste iterative**, partendo da uno dei root server conosciuti.
3. Il root server non sa la risposta ma risponde che il server DNS con indirizzo `1.2.3.3` è autoritativo per `.com`
4. Il server DNS locale chiede quindi a `1.2.3.3` chi sia `www.example.com`
5. `1.2.3.3` non sa la risposta ma risponde che il server DNS con indirizzo `1.2.3.4` è autoritativo per `example.com` 
6. Il server DNS locale chiede quindi a `1.2.3.4` chi sia `www.example.com`
7. Il server `1.2.3.4` conosce chi è `www.example.com` e risponde con il rispettivo indirizzo IP. Inoltre conferma di essere autoritativo per `example.com` quindi ogni richiesta ad un qualunque sotto-dominio di `example.com` verrà fatto direttamente al server `1.2.3.4`)
8. Il server DNS locale manda l’indirizzo IP che aveva richiesto Alice in modo che possa stabilire una connessione con esso.

Chiariamo il concetto di richiesta ricorsiva e iterativa:

- Una richiesta **ricorsiva** implica che il server DNS a cui è stata fatta la richiesta si occupi completamente di trovare una risposta definitiva interagendo con altri server DNS.
- Una richiesta **iterativa** comporta che il server DNS risponda al client con la migliore informazione disponibile al momento, senza eseguire ulteriori richieste.

Per ridurre il rischio di sovraccarichi le query ricorsive sono permesse solo agli host locali con il server DNS

## DNS caching

Il server DNS locale può fungere anche da memoria cache per le richieste DNS risolte di recente: se un altro utente della rete fa una richiesta che è stata fatta poco fa da un altro host, il server locale risponderà direttamente senza inoltrare la richiesta ad altri server.

Se sei una organizzazione grande e disponi di tante macchine, per fare load balancing puoi rispondere con indirizzi diversi a richieste uguali provenienti da host diversi.

## Protocollo DNS

Per quanto sia ovvio sensato pensare che DNS debba implementare dei servizi di sicurezza e di avere una comunicazione affidabile (risoluzioni sbagliate potrebbero portare a siti diversi da quelli voluti), in realtà DNS si basa sul protocollo di trasporto UDP (delle particolari versioni di DNS utilizzano invece TCP), non garantendo l’affidabilità dei dati.

Il formato semplificato di un messaggio DNS è il seguente:

![](https://i.ibb.co/9s7LTkD/image.png)

In particolare il campo `header` è composto come segue:

![](https://i.ibb.co/bvjR4bm/image.png)

- ID è un numero identificativo (random) della richiesta, il server lo includerà nella risposta in modo da distinguere più risposte se vengono fatte più richieste in parallelo.
- QR: (query type) indica se si tratta di una richiesta o una risposta
- AA: se il server sta mandando la risposta è autoritativo per il dominio richiesto o no
- RD: la richiesta è di tipo ricorsivo o no
- RA: la risposta dice se il server accetta richieste ricorsive
- RCODE: codice di risposta: OK oppure errori
- Gli ultimi quattro cambi riguardano il numero di
    - Question
    - Answer
    - Authority
    - Additional information

Questi ultimi quattro elementi sono chiamati **Resource Record (RR)**.
Ogni record ha un formato specifico che include vari campi:

![](https://i.ibb.co/hRJn5DV/image.png)

- NAME: è il nome del dominio da risolvere a cui si riferisce il record
- TYPE: specifica il tipo di record DNS e quindi il tipo di dato contenuto nel campo **RDATA:**
    - `A`: Indirizzo IPv4.
    - `AAAA`: Indirizzo IPv6.
    - `CNAME`: Alias per un altro nome di dominio.
    - `MX`: Mail Exchange, specifica un server di posta.
    - `NS`: Name Server, indica il server DNS autoritativo per il dominio.
    - `TXT`: Record di testo, usato per informazioni generiche.
- TTL: (Time To Live) indica per quanto tempo, in secondi, il record può essere memorizzato nella cache da un server DNS prima di essere considerato scaduto.
- RDLENGTH: Specifica la lunghezza, in byte, del campo **RDATA**.
- RDATA: Contiene i dati specifici del record

## Reverse DNS

L’operazione di reverse DNS consiste nel ottenere un nome di dominio associato ad un indirizzo IP (cioè il comportamento inverso di una comune risoluzione DNS)

Quando si registra un dominio è possibile (ma non è obbligatorio) anche registrare il dominio inverso per permettere di scoprire il nome di dominio associato ad un indirizzo IP.

Il dominio inverso si specifica in una forma particolare del tipo: `<ipaddress>.in-addr.arpa`.

Quando un host vuole sapere il nome di dominio associato all’indirizzo `1.2.3.5` fa una richiesta DNS per il nome di dominio `5.3.2.1.in-addr.arpa` la risoluzione avverrà esattamente come i nomi di domini classici in cui `in-addr.arpa` è il TLD

Gli indirizzi IP vengono **invertiti** per adattarsi alla struttura gerarchica del DNS, che ordina i livelli dalla gerarchia maggiore (a destra) alla minore (a sinistra). Gli indirizzi IP, infatti, hanno una gerarchia opposta, dove la parte più generale (reti) è a sinistra e quella più specifica (host) è a destra. Invertendo gli indirizzi IP nel reverse DNS, possiamo rappresentarli coerentemente con la logica gerarchica del DNS.

## Ridondanza

Spesso i DNS server sono ridondati, quindi è possibile che delle risoluzioni dello stesso nome di dominio a breve distanza temporale diano indirizzi IP diversi, questo perché alcuni servizi vengono forniti da più di un server (per fare *load balancing*).

## Tool linux

### Dig

Utilizzando il tool da linea di comando `dig` possiamo fare delle richieste DNS.

Ad esempio possiamo ottenere l’indirizzo di un nome di dominio con il comando:

```bash
$ dig www.example.com
;; ANSWER SECTION:
www.example.com.        3546    IN      A       93.184.215.14
```

possiamo anche chiedere ad uno specifico server di risolvere la richiesta DNS nel seguente modo

```bash
$ dig @198.41.0.4 www.example.com
;; AUTHORITY SECTION:
com.                    172800  IN      NS      l.gtld-servers.net.
com.                    172800  IN      NS      j.gtld-servers.net.
com.                    172800  IN      NS      h.gtld-servers.net.
com.                    172800  IN      NS      d.gtld-servers.net.
...
```

in questo caso l’indirizzo `198.41.0.4` è di un root server, il quale non sa la risposta ma ci manda degli indirizzi di server autoritativi per `.com`

### host

Il comando `host` è uno strumento più semplice e diretto rispetto a `dig` per effettuare query DNS, ed è generalmente utilizzato per risolvere nomi di dominio in indirizzi IP (e viceversa) in modo rapido e con una sintassi semplice.

### whois

Il comando **whois** è uno strumento di ricerca utilizzato per ottenere informazioni su un dominio, esso interroga i server WHOIS per recuperare dettagli registrati relativi a un nome di dominio o un indirizzo IP, come il titolare, le informazioni di contatto, i server DNS, e altre informazioni amministrative.



# Posta elettronica

L’architettura semplificata di un sistema di posta elettronica la possiamo immaginare come segue:

![](https://i.ibb.co/9wdgRMG/image.png)

Le e-mail non viaggiano direttamente da un computer all'altro, ma coinvolgono diversi componenti come:

- client di posta elettronica del mittente
- server di posta elettronica del mittente
- server di posta elettronica del destinatario
- e client di posta elettronica del destinatario.

I client di posta elettronica vengono chiamati **MUA** (*Mail User Agent*), i server che si occupano della trasmissione sono chiamati **MTA** (*Mail Transfer Agents*)

La catena di server può essere più lunga di due.

Diversi protocolli sono coinvolti nel processo di invio e ricezione delle e-mail:

- *Internet Message Format* (IMF) e *Multipurpose Internet Mail Extensions (MIME)* specificano come vengono formattati i messaggi e-mail.
- *Simple Mail Transfer Protocol* (**SMTP**) specifica il protocollo necessario per recapitare il messaggio dal client di Alice al server di Bob.
- *Post Office Protocol* (**POP**) e *Internet Message Access Protocol* (**IMAP**) specificano come Bob può recuperare le e-mail dal suo server.

![](https://i.ibb.co/grXjLk6/image.png)

## Formato delle e-mail

I messaggi e-mail sono composti da due parti:

- un header contenente i metadati come il mittente, destinatario, l’oggetto, CC, la data.
- Il corpo del messaggio

I messaggi e-mail sono messaggi di testo, inizialmente formattati in testo ASCII, successivamente la codifica è stata estesa.

Esempio di una mail:

```
From: Bob Smith <Bob@machine.example>
To: Alice Doe <alice@example.net>, Alice Smith <Alice@machine.example>
Subject: Hello
Date: Mon, 8 Mar 2010 19:55:06 -0600

This is the "Hello world" of email messages.
This is the second line of the body
```

Oltre ai campi standard nell’header, ci sono altre intestazioni rilevanti come:

- `Message-Id`: ID univoco del messaggio, può essere usato da altri messaggi per riferirsi a questo messaggio
- `In-reply-to`: usato quando si risponde a un messaggio precedente (contiene il suo Message-Id)
- `Received`: aggiunto da ogni server che elabora l'e-mail per scopi di debugging
- `X-`: campi personalizzati aggiunti dal client o dal server

### MIME

Nel corpo del messaggio, oltre a scrivere del testo ASCII, abbiamo bisogno di inviare file binari e allegati. Con l'introduzione di **MIME (Multipurpose Internet Mail Extensions)**, è diventato possibile inviare diversi tipi di contenuto, inclusi file binari, immagini e audio.

MIME utilizza header specifici come "`Content-Type`" (che indica il tipo di contenuto nel messaggio) e "`Content-Transfer-Encoding`" (che indica come è codificato il contenuto del messaggio) per definire il formato e la codifica del contenuto.

Ad esempio questa email:

![](https://i.ibb.co/sRh696T/image.png)

può essere codificata in questo modo:

```
From: Alice <alice@email.it>
Date: Wed, 18 Oct 2023 16:51:15 +0200
Message-ID: <CAMJfarHWLkY1hBNiPuxCP9_kV+XJNg-addi3kCCnMrw1-TU6sg@mail.gmail.com>
Subject: image attached
To: bob@email.it
Content-Type: multipart/mixed; boundary="00000000000061c37d0607fec679"

--00000000000061c37d0607fec679
Content-Type: text/plain; charset="UTF-8"

1x1 pixel image attached

--00000000000061c37d0607fec679
Content-Type: image/gif; name="1pixel.gif"
Content-Disposition: attachment; filename="1pixel.gif"
Content-Transfer-Encoding: base64
Content-ID: <f_lnvvfaz20>
X-Attachment-Id: f_lnvvfaz20

R0lGODlhAQABAIAAAP///////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACwAAAAAAQABAAACAkQBADs=
--00000000000061c37d0607fec679--

```

## SMTP

SMTP (Simple Mail Transfer Protocol) è un protocollo testuale utilizzato per inviare messaggi e-mail dal client al server mail e tra server mail. È  basato su TCP e opera sulla porta 25.

La comunicazione in SMTP avviene tramite **comandi e codici di risposta numerici**. Il client invia comandi al server, e il server risponde con un codice a tre cifre che indica l'esito dell'operazione e un commento opzionale.

I comandi più utilizzati sono:

- **EHLO:** Utilizzato dal client per presentarsi al server e indicare il supporto per estensioni SMTP
- **MAIL FROM:** Specifica l'indirizzo email del mittente
- **RCPT TO:** Specifica l'indirizzo email del destinatario
- **DATA:** Segnala l'inizio del trasferimento del corpo del messaggio email
- **QUIT:** Termina la sessione SMTP

I codici di risposta sono organizzati in questo modo:

- **2xx:** Successo. Il comando è stato eseguito correttamente.
- **3xx:** Successo, ma sono richiesti ulteriori input dal client.
- **4xx:** Errore temporaneo. Il comando non può essere eseguito al momento, ma potrebbe essere possibile riprovare più tardi.
- **5xx:** Errore permanente. Il comando non può essere eseguito.

## Autenticazione

Inizialmente, i server SMTP permettevano a chiunque di inviare email attraverso di essi. Questo ha portato a una forte diffusione di spam. Per contrastare il problema, i server SMTP moderni implementano dei sistemi di autenticazione e limitano il **relaying** solo ai client autenticati.

Il *relaying* si riferisce alla capacità di un server SMTP di **inoltrare email a domini diversi dal proprio**.

I meccanismi di autenticazione comuni includono:

- **PLAIN:** Invia nome utente e password in chiaro (sconsigliato per motivi di sicurezza).
- **LOGIN:** Simile a PLAIN, ma codifica nome utente e password usando Base64.
- **CRAM-MD5:** Utilizza un sistema di *challenge-response* basato su hash MD5 per autenticare il client senza trasmettere la password in chiaro.

Oggi viene usato il **protocollo TLS** che aggiunge crittografia.

## DNS

Quando il server SMTP del mittente riceve il messaggio dal client deve conoscere l’indirizzo del successivo server SMTP a cui inoltrare la richiesta.

Per fare ciò si usa il protocollo DNS per ottenere l’indirizzo.

A questo punto il server SMTP del mittente si connette al server SMTP del destinatario. Tuttavia, se il server SMTP del mittente non è autenticato, il server SMTP del destinatario non consentirà il *relaying*.

Si introduce il concetto di *Mail Submission Agent* (MSA), un MTA che richiede l'autenticazione a tutti i client che si connettono a loro, indipendentemente dal dominio di destinazione dell'email.

![](https://i.ibb.co/JpgCkcB/image.png)

## POP

Quando il messaggio arriva al server SMTP di destinazione, l’unica cosa che ci manca è stabilire come il client destinatario può ottenere la posta nel server.

Il protocollo POP (Post Office Protocol), attualmente nella versione 3 (POP3), è uno dei protocolli utilizzati per consegnare la posta elettronica alla MUA del destinatario.

Per farlo si introduce una nuova entità MDA (*Mail Delivery Agent*) che si occupa di rendere disponibile la posta al client di destinazione con un protocollo dedicato.

POP è un protocollo testuale basato su comandi che utilizza la porta 110.

Una sessione POP si compone di tre parti: una fase di **autorizzazione**, una fase di **transazione** e una fase di **aggiornamento**.

- **Fase di autorizzazione:** Il client si connette e si autentica al server.
- **Fase di transazione:** Il client può emettere diversi comandi, tra cui:
    - `STAT`: per ottenere lo stato della casella di posta (numero di messaggi e dimensione totale in byte).
    - `LIST`: per elencare i messaggi presenti.
    - `RETR n`: per recuperare l'n-esimo messaggio.
    - `DELE n`: per contrassegnare l'n-esimo messaggio per l'eliminazione.
- **Fase di aggiornamento:** Il client emette il comando QUIT per terminare la sessione. Il server elimina i messaggi contrassegnati per l'eliminazione.

## Differenza tra POP e IMAP

La principale differenza tra i protocollo POP e IMAP riguarda il modo in cui rimangono salvate le e-mail:

- **POP**: Scarica le email dal server sul dispositivo del client e, generalmente, le elimina dal server (a meno che non venga configurato diversamente).
- **IMAP**: Le email restano sul server e vengono sincronizzate tra tutti i dispositivi connessi. Il client visualizza una copia dei messaggi, che rimangono accessibili da più dispositivi.



# Tecniche anti-spam

Vediamo diverse tecniche utilizzate per combattere lo spam a livello di rete. Ci concentriamo su tre protocolli per l'autenticazione delle email: **SPF, DKIM** e **DMARC.**

Con **spam** intendiamo e-mail con contenuti malevoli di vario tipo ad esempio: phishing, malware, pubblicità, truffe…

Se uno spammer è un MUA non è difficile rilevarlo perché per mandare e-mail si deve connettere e autenticarsi ad un MSA e da attraverso di lui mandare e-mail spam.

Gli spammer, però, possono fingere di essere MTA legittimi, rendendo difficile, per i MTA “buoni”, distinguere il traffico buono da quello cattivo.

Per cercare di ridurre lo spam (molto complesso eliminarlo completamente), Gli MTA utilizzano diverse tecniche per valutare le email e rifiutare quelle sospette.

Analizziamo alcune tecniche a l**ivello di rete.**

## Tecniche basate sull’IP

### Controllo FQDN

Un tecnica è il **Controllo FQDN (Fully Qualified Domain Name)**: si basa sull'uso di nomi di dominio completamente qualificati (cioè dall’host fino al TLD) per verificare l'identità del server mittente tramite query DNS e di reverse DNS.

Viene quindi verificata la veridicità del nome di dominio e dell’indirizzo IP inseriti nel comando HELO.

Questa tecnica richiede agli MTA di avere un IP pubblico, un nome di dominio e un nome di dominio inverso, rendendo più difficile per gli spammer crearne uno.

### Blacklist

Una ulteriore tecnica è quella di usare delle **Blacklist IP**: cioè delle liste di indirizzi IP noti per generare spam, in modo da bloccare le email provenienti da tali indirizzi.

Gli MTA utilizzano un protocollo chiamato DNSBL (DNS Block List) per verificare se un IP è presente in una blacklist prima di inoltrare l’email.

**Spamhaus** è una organizzazione la cui attività principale è quella di compilare e tenere aggiornate le blacklist

### Graylist

Un altro fattore importante è che gli MTA legittimi aderiscono allo **standard SMTP**, mentre gli spammer spesso no. Gli MTA riceventi possono ritardare le risposte o restituire errori temporanei.

Una particolare si utilizza una tecnica chiamata **Graylisting**: gli MTA che utilizzano il graylisting rispondono con un errore `4xx` alla prima connessione da un IP sconosciuto. Gli MTA mittenti legittimi riproveranno dopo un po' di tempo, mentre gli spammer tendenzialmente no.

È da notare che questa tecnica introduce un ritardo nella ricezione della prima email (anche se legittima) proveniente da un nuovo MTA.

Se un MTA viene whitelistato ma non manda e-mail per un po’ verrà di nuovo ritenuto sconosciuto alla successiva mail.

## Sender spoofing

Approfondiamo alcuni comandi di SMTP utili per comprendere le successive tecniche anti-spam:

- `HELO`: viene utilizzato dal client MTA per identificarsi al server MTA. Il comando HELO è seguito dal nome di dominio del client MTA.
- `MAIL FROM`: specifica l'indirizzo mail a cui verranno inviati eventuali errori di consegna. (non è necessariamente l’e-mail del mittente)
- `FROM`: specifica l'indirizzo email del mittente della mail. Questo è anche l'indirizzo email utilizzato dal destinatario per rispondere all'email.

Non è possibile fare assunzioni sulla legittimità dei domini inseriti in questi campi.

**Lo spoofing del mittente** è una tecnica utilizzata dagli spammer per falsificare l'indirizzo email del mittente. Gli spammer possono utilizzare un dominio falso o un dominio legittimo di cui non sono proprietari nei campi HELO, MAIL FROM o FROM.

Vediamo delle tecniche per verificare l’autorevolezza dei campi `HELO, MAIL FROM, FROM`.

## SPF

Il Sender Policy Framework (**SPF**) è un protocollo che cerca di contrastare gli spammer impedendogli di utilizzare i comandi `HELO` e `MAIL FROM` (senza però limitare il `FROM`) con un dominio che non possiedono.

Un record SPF è un record testuale (TXT) messo nel server DNS associato al nome di dominio di un'organizzazione, che specifica gli indirizzi IP autorizzati a inviare email per quel dominio.

Un esempio di record SPF è il seguente:

```
mydomain.it. 86400 IN TXT “v=spf1 ip4:17.18.7.120 -all”
```

- `v=spf1`: indica la versione 1 del protocollo
- `ip4:17.18.7.120`: specifica che l'indirizzo IP 17.18.7.120 è autorizzato a inviare email
- `-all`: indica che tutti gli altri indirizzi IP non possono inviare email

Quindi quando un MTA riceve una connessione da un altro MTA:

- fa la risoluzione DNS per il dominio specificato in HELO e MAIL FROM
- verifica che esista un record SPF per quei domini
- controlla se l’indirizzo IP della connessione è uno degli indirizzi specificati dal record SPF
- prende delle decisioni in base al risultato

Oltre ad usare indirizzi IPv4 si possono usare indirizzi IPv6 e anche nomi di dominio.

Inoltre è possibile includere dei record SPF aggiuntivi di altri domini con la direttiva `include:` ad esempio `include:_spf.google.com` per indicare che che Google è autorizzato a inviare email per conto del dominio.

Nella sintassi dei record SPF ci sono dei **qualificatori** che specificano l'azione da intraprendere per ogni indirizzo IP:

- `+`: **Pass** (default), Indica che l’indirizzo è autorizzato a inviare e-mail per quel dominio.
- `-`: **Fail,** Indica che l’indirizzo **non è autorizzato**. Le e-mail da tale IP dovrebbero essere rifiutate.
- `~`: **SoftFail,** Indica che l’indirizzo probabilmente non è autorizzato. Le e-mail da tale IP non vengono contrassegnate come sospette o spam.
- `?`: **Neutral,** Indica che il dominio non dà indicazioni sull'autorizzazione dell’indirizzo

Questi qualificatori si mettono prima degli indirizzi oppure prima di “`all`” (per indicare tutti gli altri indirizzi non specificati).

Se non viene specificato alcun qualificatore, si assume "Pass".

## DKIM

Abbiamo visto che il protocollo SPF non garantisce nulla sul campo `FROM`.

DKIM risolve questo problema verificando anche il campo `FROM`.

**DomainKeys Identified Mail (DKIM)** è un protocollo  consente di verificare l'autenticità del mittente di un messaggio e l'integrità del suo contenuto. DKIM è simile a SPF ma utilizza la crittografia a chiave pubblica per firmare digitalmente le email, garantendo che il messaggio non sia stato manomesso durante il trasporto.

MSA è l’entità che si occupa dell’autenticazione dell’utente, ed è l’unica entità che può controllare il campo `FROM` e firmare l’intera email.

Funzionamento di DKIM:

1. **Generazione delle chiavi**: L'amministratore del MSA genera una coppia di chiavi pubblica e privata.
2. **Pubblicazione della chiave pubblica**: La chiave pubblica viene pubblicata in un record TXT del DNS.
3. **Firma del messaggio**: Quando un MUA (Mail User Agent) invia un'email al suo server SMTP, l’MSA del server fa l’autenticazione del client (verifica anche che l’indirizzo del `FROM` sia un indirizzo autorizzato) e seleziona alcuni campi dell'email dell’header, e il corpo del messaggio, e genera un hash di questi elementi. Il MSA firma quindi l'hash utilizzando la sua chiave privata e include la firma digitale nell'intestazione della mail.
4. **Verifica della firma**: Quando un MTA riceve un'email con una firma DKIM, recupera la chiave pubblica del mittente con una risoluzione DNS. L'MTA utilizza quindi la chiave pubblica per verificare la firma digitale e controllare l'integrità del messaggio.

L'intestazione DKIM contiene diversi campi che forniscono informazioni sulla firma e sul processo di verifica. Alcuni di questi sono:

- **v:** Versione del protocollo DKIM.
- **a:** Algoritmo crittografico utilizzato per generare la firma.
- **h:** Intestazioni sottoposte alla firma.
- **bh:** Hash del corpo del messaggio.
- **b:** Firma digitale
- **d, s:** Dominio e selettore, utilizzati per recuperare la chiave pubblica dal DNS: la chiave pubblica si ottiene interrogando con una query DNS il dominio: `<s>._domainkey.<d>`

Esempio di intestazione DKIM:

```
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=ietf.org; s=ietf1; t=1730884895;  bh=gKKOhIEVnQtATJMEQQoY5UYl3/bV+mlSqzFkKJnzquw=; h=Date:To:From:Subject:List-Id:List-Archive:List-Help:List-Owner:List-Post:List-Subscribe:List-Unsubscribe; b= ILdywWIjDUwI3JoXDLHPdhOBf02HPj9+WyjSYJlFL9S28eiCiR/ybDhCL1BAoYzYhMlLaDQUPo4jYp6FwU82cSjaj7/OIr6JcS0wVcCYLJQaLhRfRUkEA7i9xilpNuBEIyax9Ltt1YHZNvXuZ9m8Bfuapxs1UKL3tW0luG8MU6E=
```

## DMARC

Il protocollo **Domain-based Message Authentication, Reporting, and Conformance (DMARC)** aggiunge un ulteriore livello di controllo verificando l'**allineamento** tra i domini utilizzati nei diversi protocolli di autenticazione.

DMARC verifica che il dominio nell'intestazione "From" corrisponda al dominio utilizzato o in SPF (quindi con HELO o MAIL FROM) o in DKIM (nel campo `d` dell’header). In caso di mancato allineamento, il server MTA può applicare diverse politiche decise dal proprietario del dominio:

- `none`: non fare nulla, lascia passare
- `quarantine`: marca l’email come possibile spam
- `reject`: rifiuta

È importante che le politiche siano **consistenti** tra tutti i MTA (non vogliamo che una e-mail venga accettata da alcuni MTA e da altri no)

Il protocollo DMARC permette al proprietario del dominio mittente di impostare la policy che tutti gli MTA devono rispettare. Le policy vengono anch’esse configurate nel DNS con un campo TXT e sono accessibili con una query al dominio `_dmarc.<dominio>`

## Funzionamento completo

Combinando tutte le tecniche che abbiamo visto:

**1. Verifica FQDN:** Il primo passo è la verifica del FQDN del MTA che invia l'email.

**2. Verifica SPF:** Successivamente, il server MTA controlla il record ****SPF del dominio mittente che elenca gli indirizzi IP autorizzati a inviare email per quel dominio.

**3. Verifica DKIM:** Il server MTA verifica la firma DKIM dell'email garantendo che il messaggio non sia stato manomesso e che provenga effettivamente dal dominio dichiarato nell'intestazione `FROM`

**4. Allineamento DMAR**C: In caso di mancato allineamento tra i domini, vengono applicate politiche di sicurezza definite dal proprietario del dominio mittente.

Possiamo riassumere tutti i passaggi con il seguente schema:

![](https://i.ibb.co/3mpjwwC/image.png)

1. **Alice invia l'email:** Alice, utilizzando il suo client di posta elettronica (MUA), invia un'email dal suo indirizzo `alice@a.com` a `bob@b.com`.
2. **Autenticazione con MSA:** l’MSA di Alice la autentica, verificando che sia effettivamente autorizzata a inviare email.
3. **Preparazione dell'email per l'invio:** Il MTA di `a.com`, ricevendo l'email da Alice, imposta i campi `HELO`, `Mail From`, `From` e aggiungendo la firma DKIM. L'indirizzo IP del MTA è `1.2.3.4`.
4. **Controllo blacklist DNSBL:** Prima di recapitare l'email, l’MTA di `b.com` controlla l'indirizzo IP `1.2.3.4` non sia in una blacklist tramite una query DNS ad un servizio come *spamhaus*.
5. **Risoluzione DNS inversa:** Il server MTA di `b.com` effettua una risoluzione DNS inversa sull'indirizzo IP `1.2.3.4` per ottenere il FQDN del MTA mittente.
6. **Verifica corrispondenza FQDN:** Il server MTA di `b.com` confronta il FQDN ottenuto dalla risoluzione DNS inversa con il dominio dichiarato nel comando `HELO`.
7. **Controllo SPF:** Il server MTA di `b.com` consulta il record SPF di `a.com` per verificare se l'indirizzo IP `1.2.3.4` è autorizzato a inviare email per conto di `a.com`.
8. **Verifica DKIM:** Il server MTA di `b.com` verifica la firma DKIM dell'email utilizzando la chiave pubblica di `a.com`, ottenuta da una query TXT al DNS. Questo garantisce che l'email provenga effettivamente da `a.com` e non sia stata alterata durante la trasmissione.
9. **Controllo DMARC:** Il server MTA di `b.com` consulta il record DMARC di `a.com` per conoscere quali sono le politiche da rispettare, configurate dal proprietario del dominio.
10. **Accettazione o rifiuto dell'email:** Se tutti i controlli sono superati (FQDN, SPF, DKIM, allineamento DMARC) e le politiche DMARC sono rispettate, l'email viene accettata. In caso contrario, a seconda della politica DMARC, l'email potrebbe essere gestita in altro modo.

### Sicurezza del server DNS

Tutti i metodi che abbiamo visto funzionano fintanto che l’attaccante non riesce modificare la configurazione del server DNS dell’organizzazione vittima.

In ogni organizzazione è quindi molto importante isolare il server DNS e mantenerlo al sicuro il più possibile.



# HTTP

### WWW

Il World Wide Web (WWW) che possiamo vedere come un grande sistema di condivisione di documenti si basa su tre componenti chiave:

- gli **URI** per l'identificazione delle risorse
- l'**HTML** (e altri strumenti) per la creazione delle pagine web
- l'**HTTP** per il recupero delle pagine.

Prima di analizzare i protocolli, vediamo come funziona ad alto livello la comunicazione tra client e server per ottenere una pagina web:

![](https://i.ibb.co/6B016Zh/image.png)

1. Il browser riceve un numero di porta dal livello TCP (ad esempio 12345), mentre il web server utilizza la porta 80.
2. Il browser invia un comando HTTP, che viene incapsulato in un segmento a livello TCP.
3. Questo segmento viene poi incapsulato in un segmento IP.
4. Quando i dati arrivano al server, i livelli IP e TCP sul server lo scompongono.
5. il comando viene ricevuto dal web server, che lo elabora e genera una risposta.

## URI

Un **URI** (Uniform *Resource Identifier*) è una stringa di caratteri che **identifica** in modo univoco una **risorsa sul web**, la risorsa può essere identificata in due modi**:**

- Un **URL** (*Uniform Resource Locator*) è un URI che identifica la risorsa fornendo la posizione dove recuperarla.
- un **URN** (*Uniform Resource Name*) è un URI che identifica la risorsa tramite un nome.

Generalmente nel web si usano gli URL.

Un esempio di come è formato un URL è il seguente:

![](https://i.ibb.co/1R9PcBj/image.png)

- **Scheme:** indica il significato dei campi successivi e spesso identifica il protocollo a livello di applicazione che il client deve utilizzare per recuperare il documento (es. http, https, ftp…)
- **Hostname:** Include il nome di dominio o l'indirizzo IP del server da cui è possibile recuperare il documento. Può essere preceduto da informazioni sull'utente (**UserInfo**) che richiede le informazioni (es. username e password).
    
    Il simbolo `@` separa hostname e UserInfo.
    
- **Port**: dopo l’hostname, separato da un simbolo `:` ci può essere il numero di porta utilizzato dal server in ascolto. Solitamente dal protocollo utilizzato si ricava implicitamente il numero di porta
- **Path:** Indica il percorso del documento sul server, strutturato con una sintassi simile a quella di Unix. Se non è specificato un percorso, il server restituirà un documento predefinito.
- **Query:** Serve per fornire parametri testuali al server, si separa dal path con il simbolo `?` ed è seguito da una lista di coppie chiave-valore, in cui ogni coppia è separata da un simbolo `&`.
- **Fragment:** Indica una specifica sezione all’interno del documento richiesto.

Esempio: `https://en.wikipedia.org/wiki/Italy#Name`

- schema: `https`
- authority: `en.wikipedia.org`
- path: `/wiki/Italy`
- fragment: `#Name`

Vediamo un esempio di URL potenzialmente fraudolento:

`https://cnn.example.com&story=breaking_news@10.0.0.1/top_story.htm`

Ad un occhio inesperto potrebbe sembrare che l’hostname di questo URL sia `ccn.example.com` ma non è così perché quella stringa si trova prima del carattere `@`, che quindi identifica le informazione dell’utente. In realtà l’hostname è `10.0.0.1`. Utenti malintenzionati potrebbero sfruttare questa cosa per illudere le persone di star connettendosi a siti conosciuti quando in realtà stanno andando si un sito completamente diverso.

## HTML

Per creare le pagine web e collegarle tra loro si usa un linguaggio particolare, **HTML** (*HyperText Markup Language*) che permette di arricchire il testo utilizzando particolari tag che vengono interpretati dal browser.

Tutto ciò che nella pagina fa riferimento a qualcosa di esterno (immagini, video, altri documenti…) utilizza degli URL.

Per migliorare l’esperienza e le funzionalità, ad HTML si affiancano altri linguaggi:

- CSS: per migliorare l’estetica delle pagine
- JavaScript: per rendere le pagine più interattive

Per rendere le **pagine web dinamiche**, cioè in cui il contenuto cambia in base ad esempio ad un input utente, in base a delle azioni precedentemente fatte dall’utente o in base a chi è l’utente, si aggiunge del codice lato server scritto in un altro linguaggio, ad esempio PHP. In questo caso un URL non punto ad un file .html, ma ad un file scritto in questo linguaggio. Questo codice verrà eseguito nel server e produrrà la pagina HTML specifica in base alla richiesta dell’utente.

Solitamente le pagine dinamiche vengono popolate tramite dati presenti in qualche database di cui il server ha accesso.

## HTTP

**HTTP** (*HyperText Transfer Protocol*) è un protocollo testuale a livello applicativo che gestisce la comunicazione tra client e server web tramite un sistema di richieste e risposte.

HTTP sfrutta il protocollo TCP sulla porta 80.

### Richieste HTTP

Ogni **richiesta HTTP** è composta da tre parti:

1. un **metodo**: Indica il tipo di richiesta, l'URI e la versione del protocollo HTTP utilizzata dal client.
    
    I metodi più comuni sono:
    
    - `GET`: Utilizzato per recuperare un documento da un server specificandone l’URL.
    - `HEAD`**:** Consente di recuperare le righe di intestazione per un determinato URI senza recuperare l'intero documento.
    - `POST`**:** Utilizzato da un client per inviare un documento a un server allegandolo alla richiesta come documento MIME.
2. un **header**: Utilizzata dal client per specificare parametri opzionali per la richiesta.
    
    Alcuni campi nell’header sono:
    
    - **User-Agent:** contiene informazioni sul browser del client.
    - **Referrer:** Il sito web precedente visitato dal client.
    - **Host:** Il dominio richiesto dal client, necessario nel caso in cui sullo stesso server ci sia più di un dominio, con lo stesso percorso interno.
3. un **documento MIME** opzionale: rappresenta i dati utili trasmessi al server come parte della richiesta con un formato particolare (es. `application/json`, `multipart/form-data`, …).

### Risposte HTTP

Ogni **risposta HTTP** è composta da tre parti:

1. **una riga di stato:** Indica se la richiesta è andata a buon fine tramite uno specifico codice di stato a tre cifre e un commento testuale.
    
    I codici di stato sono organizzati in questo modo:
    
    - `2xx`: Risposta valida.
    - `3xx`: Il documento non è più disponibile sul server.
    - `4xx`: Il server ha rilevato un errore nella richiesta HTTP inviata dal client.
    - `5xx`: Errore sul server
2. **un header:** Contiene informazioni aggiuntive sulla risposta.
    
    Alcuni campi nell’header sono:
    
    - **Server**: Alcune informazioni sul software in esecuzione sul server. Non è più molto utilizzato per ragioni di sicurezza
    - **Date**: indica quando la risposta HTTP è stata generata dal server
    - **Last-Modified**: indica la data dell’ultima modifica al documento allegato alla risposta
3. **un Documento MIME:** rappresenta i dati utili trasmessi al client come parte della risposta con un formato particolare (es. `application/json`, `multipart/form-data`, …)

## Connessione persistente

Inizialmente per ogni richiesta HTTP veniva stabilita una nuova connessione TCP (con quindi pacchetti di apertura e chiusura della connessione), che era accettabile per pagine semplici.

Oggi abbiamo pagine HTML composte da centinaia di parti (immagini, script, icone, CSS...) e ognuna richiederebbe di aprire una nuova connessione TCP.

Per consentire l'invio di più richieste su un'unica connessione TCP è stato aggiunto un header `Connection: Keep Alive`**.** Il client invia questo header e il server risponde con la lo stesso header specificando quante richieste possono essere utilizzate nel resto della connessione e per quanto tempo deve rimanere aperta la connessione.

![](https://i.ibb.co/yFLr0bt/image.png)

## Cookie

È importante sapere che HTTP è *stateless*, cioè ogni richiesta HTTP (che sia nella stessa connessione o meno) è indipendente dalle precedenti, infatti il protocollo HTTP non mantiene uno stato tra una richiesta e l'altra.

Per mantenere uno stato tra le richieste vengono utilizzati i **cookie.**

Un **cookie** è un'informazione (una stringa) generata dal server e inviata al client per identificarlo. Il client dovrà inserire il cookie a ogni richiesta, per dimostrare di essere lo stesso che ha ricevuto il cookie inizialmente.

HTTP offre due header, `Set-Cookie` e `Cookie`, che possono essere utilizzati per mandare i cookie tra il server e il client.

Esistono diversi tipi di cookie:

- **Gestione delle sessioni:** ad esempio per identificare gli utenti quando hanno fatto un login.
- **Personalizzazione:** ad esempio per impostare lingua o posizione geografica.
- **Tracciamento:** ad esempio profilazione delle attività degli utenti per scopi pubblicitari.

## Proxy

Oggi abbiamo pagine HTML composte da centinaia di parti: immagini, icone, CSS, script tutte provenienti da server diversi, recuperare tutte queste parti (soprattutto se sono in server sparsi nel mondo) può richiedere molto tempo, i **server proxy** possono migliorare questo aspetto.

I ***server* *proxy*** sono essenzialmente delle *cache* che memorizzano le pagine web visitate per un certo periodo di tempo. Risiedono solitamente nella rete dell'utente e i browser vanno configurati per connettersi al proxy anziché direttamente ai server di destinazione.

Il proxy, quando riceve la richiesta, recupera il contenuto dal server originale e lo salva localmente per un po’ di tempo, se il browser richiede nuovamente la stessa pagina, il proxy la fornirà direttamente dalla sua cache.

![](https://i.ibb.co/94qPrRZ/image.png)

Degli header utili per i proxy sono:

- **Cache-Control**: Utilizzata dal server per indicare se la pagina può essere memorizzata nella cache e per quanto tempo. Ad esempio:
    - `no-store` impedisce la memorizzazione
    - `max-age=10` indica una validità di 10 secondi
    - `no-cache` consente la memorizzazione ma obbliga il client a verificare se la pagina è stata modificata tramite l’header `If-Modified-Since`.
- **If-Modified-Since**: Inviata dal client per richiedere una pagina solo se è stata modificata dopo una certa data. Se la pagina non è stata modificata, il server non la invia.

Esiste un altro tipo di proxy chiamato **reverse proxy**, questi sono posizionati sul lato server, e nascondono i server reali ai client. Il loro scopo principale è ridurre il carico sui server, ottimizzando le query ai database e l'utilizzo della CPU.

![](https://i.ibb.co/5ngnKt5/image.png)

## HTTP 2.0

HTTP 2.0 introduce significative modifiche rispetto alle versioni precedenti tra cui:

- **Protocollo binario**: utilizza un formato binario per codificare richieste e risposte e non più testuale. Questo rende il protocollo più compatto e veloce da elaborare, riducendo i tempi di trasferimento.
- **Stream paralleli**: Il contenuto di una pagina web viene suddiviso in frame, che possono essere inviati in parallelo dal server al client tramite stream multipli. Questo accelera il caricamento della pagina.
    - **Eliminazione del blocco HoL (Head-of-Line Blocking)**: Il blocco HoL si verifica quando un elemento di grandi dimensioni, come un'immagine, blocca il download di altri elementi più piccoli. HTTP 2.0 garantisce che elementi più piccoli vengano visualizzati prima.
- **Meccanismo push**: HTTP 2.0 consente al server di inviare al client contenuti non esplicitamente richiesti. Questo permette di anticipare le richieste del client, inviando elementi che il server sa essere necessari prima che il client li richieda.



# Controllo della congestione

## Performance

In TCP, si ha la grandezza della **finestra di invio** del mittente (`swnd`) e la grandezza della **finestra di ricezione** del ricevente (`rwnd`). Il mittente invierà dati fino al minimo tra le due finestre, mettendosi poi in attesa degli ACK. `swnd` viene ridotta ad ogni invio di segmento non ancora confermato da un ACK, mentre `rwnd` viene ridotta quando i dati sono ricevuti ma non ancora processati dall'applicazione.

Questo meccanismo di windowing è un compromesso tra la necessità avere buffer di grandi dimensioni e ma non troppo da sovraccaricare il ricevitore.

L'algoritmo di Nagle fa sì che il mittente invii il maggior numero di segmenti di dimensione MSS consentita da `swnd`, al tempo `t0`. Supponendo una capacità di collegamento elevata, i segmenti vengono ricevuti al tempo `t0 + RTT/2` (RTT significa tempo di andata e ritorno, il tempo di sola andata è quindi circa la metà). Il ricevitore invia un ACK cumulativo e al tempo `t0 + RTT` il mittente lo riceve, svuotando il buffer di invio e ricominciando il processo.

Per ogni RTT vengono inviati al massimo dati grandi come la *window* (il minimo tra le due finestre), con un throughput massimo $\frac{\min(\text{rwind}, \text{swing})}{\text{RTT}}$.

Se il ricevitore non è abbastanza veloce ad elaborare i dati ricevuti, invierà un ACK con una nuova dimensione della finestra di ricezione (`rwnd'`) minore di `rwnd`.  Il throughput diventerà quindi $\frac{\min(\text{rwind'}, \text{swing})}{\text{RTT}}$, a causa della *window* ridotta.

## Congestione di rete

La **congestione di rete** si verifica quando i router lungo il percorso client-server droppano pacchetti a causa di un sovraccarico del traffico.

La congestione di rete viene rilevata dal mittente come una perdita di pacchetti. Se il mittente non rallenta l'invio, il router rimane congestionato e continua a droppare pacchetti. Per risolvere la congestione di rete, l'unica possibilità è ridurre la *window*, in modo che il mittente invii meno dati e sperare che la congestione si risolva.

## Rilevamento implicito della congestione

Il mittente, all'inizio della connessione, non dovrebbe inondare il ricevitore con un throughput troppo elevato, in quanto ciò potrebbe creare congestione. La *window* iniziale deve essere piccola e crescere nel tempo.

Il problema adesso diventa nel determinare in che modo aumentare la finestra nel tempo e come ridurla nel caso di perdita di pacchetti.

### Finestra di congestione

Introduciamo una nuova finestra, la **finestra di congestione** (`cwnd`), inizializzata a un valore fisso, generalmente `cwnd0 = 10 * MSS`. In ogni istante il mittente invierà al massimo `min(cwnd, swnd, rwnd)` dati.

Viene introdotto anche il parametro **slow-start threshold** (`sstrash`), inizializzato al valore di `swnd` e che rappresenta una stima dell’ultimo valore di `cwnd` che non ha causato una congestione

### Algoritmo slow start

L'algoritmo Slow Start, è un algoritmo di controllo della congestione. Ad ogni RTT, se tutti i segmenti sono riconosciuti con un ACK, `cwnd` aumenta in modo esponenziale fino al raggiungimento di `sstrash`, da quel punto in poi `cwnd` cresce più lentamente in modo lineare.

Possono poi verificarsi due tipi di congestioni:

- **Congestione lieve** *(mild congestion):* si verifica quando si ricevono tre ACK per lo stesso numero di sequenza, si fa un *fast retrasmit* e si riceve l'ACK che conferma la ricezione.
    
    In questo caso l’algoritmo aggiorna le sue variabili in questo modo:
    
    - `cwnd' = cwnd`: si salve temporaneamente l’attuale valore di cwnd
    - `cwnd = sstrash`: cwnd viene reimpostato al valore di sstrash
    - `sstrash = cwnd' / 2`: sstrash viene reimpostato a metà del valore di cwnd prima dell'evento di congestione.
    
    ![](https://i.ibb.co/thN6tfh/image.png)
    
- **Congestione grave** *(severe congestion)*: si verifica quando scadono i timer di ritrasmissione.
    
    In questo caso l’algoritmo aggiorna le sue variabili in questo modo:
    
    - `cwnd' = cwnd` si salve temporaneamente l’attuale valore di cwnd
    - `cwnd = cwnd0` si riporta il valore di cwnd al suo valore originale
    - `sstrash = cwnd' / 2` sstrash viene reimpostato a metà del valore di cwnd prima dell'evento di congestione.
    
    ![](https://i.ibb.co/RNLkBgD/image.png)
    

## Controllo esplicito della congestione

Il metodo di rilevamento della congestione può essere anche esplicito, con i router congestionati che modificano un bit dell'intestazione per segnalare il drop dei pacchetti al mittente.



# UDP e TCP

Vediamo i due principali protocolli a livello di trasporto: **UDP (User Datagram Protocol)** e **TCP (Trasmission Control Protocol)**

## UDP

Il protocollo **UDP** (User Datagram Protocol), fornisce un servizio di trasporto **connection-less e non affidabile**. La sua caratteristica principale è che non **garantisce la consegna dei dati**, cioè non si assicura che gli SDU (*Service Data Unit*) arrivino a destinazione, né che lo facciano in ordine. L'unico controllo effettuato è quello sull'integrità dei dati tramite una *checksum*.

UDP offre il servizio di **multiplexing:** Grazie ai numeri di porta, diverse applicazioni su uno stesso host possono comunicare con diverse applicazioni su host remoti.

![](https://i.ibb.co/YWRV5yj/image.png)

**L'header UDP** contiene solo le porte sorgente e destinazione (16 bit ciascuna), la lunghezza del segmento (16 bit) e il checksum (16 bit).

I **numeri di porta,** codificati con 16bit e quindi sono 65535 numeri diversi, sono divisi in tre categorie:

- **porte well-known** (da 1 a 1023) riservati ai processi con privilegi di amministratore
- porte **registrate** (da 1024 a 49151) dovrebbero essere assegnate dall'IETF ai protocolli che ne fanno richiesta
- porte **dinamiche** (da 49152 a 65535) possono essere utilizzate liberamente da chiunque

UDP si utilizza in applicazioni dove **la velocità è fondamentale e la perdita di qualche pacchetto è tollerabile**, come ad esempio il VoIP, il DNS e i giochi online.

## TCP

**TCP** (Transmission Control Protocol) offre un **servizio di trasporto affidabile e orientato alla connessione**. Questo significa che garantisce la consegna ordinata dei dati, gestisce il controllo di flusso per evitare la congestione della rete e implementa meccanismi di recupero dagli errori.

L'unità di dati TCP è il **segmento**, che include un header e un payload. Ogni byte trasmesso tramite TCP viene associato ad un **numero di sequenza**, garantendo che i dati arrivino al destinatario nell'ordine corretto.

### Header

![](https://i.ibb.co/F6ZM86M/image.png)

L'header TCP è composto da una parte di lunghezza fissa e da estensioni opzionali, quindi l’intero header non ha una lunghezza fissa.

La **parte fissa** include:

- **Porte sorgente e di destinazione** (16 bit ciascuna): identificano le applicazioni comunicanti.
- **Numero di sequenza** (32 bit):  indica la posizione del primo byte del payload nel flusso di dati.
- **Numero di acknowledgement** (32 bit): serve a confermare la ricezione dei dati fino ad un certo numero di sequenza.
- **TCP Header Length (THL) o Data Offset** (4 bit): specifica la lunghezza dell'header TCP indicando un multiplo di 32bit (la lunghezza massima è 16 * 32bit = 512bit = 64Byte)
- **Bit riservati (4bit)**
- **Flag** (8 bit): indicano lo scopo del segmento, ad esempio:
    - **SYN**: utilizzato per la sincronizzazione iniziale della connessione.
    - **FIN**: usato durante il rilascio della connessione.
    - **RST**: forza la chiusura della connessione in caso di problemi.
    - **ACK**: segnala che il campo "numero di acknowledgement" è valido.
    - **PSH**: quando impostato, il ricevente è notificato a consegnare immediatamente i dati all'applicazione, senza attendere di riempire il buffer di ricezione.
    - **URG**: insieme al campo "Urgent Pointer", permette di segnalare al ricevente che dovrebbe consegnare questi dati all'applicazione con la massima priorità, senza seguire i numeri di sequenza. Tuttavia, sia il flag URG che il campo "Urgent Pointer" sono deprecati.
- Window (16 bit): comunica la dimensione della finestra di ricezione del mittente (in byte).
- **Checksum** (16 bit): garantisce l'integrità dei dati, calcolato sull'intero segmento TCP e su alcuni campi dell'header IP.

Possono essere presenti **estensioni opzionali**, ad esempio:

- **MSS (Maximum Segment Size)**: Questa opzione viene scambiata durante la fase di stabilimento della connessione e definisce la dimensione massima del segmento TCP che il ricevente è in grado di gestire. In genere, MSS viene impostato alla MTU (Maximum Transmission Unit) del livello di collegamento, per evitare la frammentazione dei pacchetti IP.
- **Window Scale**: Il campo "window" nell'header TCP è limitato a 16 bit. Questa limitazione può influire negativamente sulle prestazioni. L'opzione **Window Scale**, introduce un fattore di moltiplicazione per la dimensione della finestra, consentendo finestre di ricezione più grandi.
- **Timestamps**: Introdotta per risolvere problemi nella misurazione del RTT (Round Trip Time) e per disambiguare i numeri di sequenza in caso di riavvolgimento dei numeri.

## Stabilire e Chiudere Connessioni TCP

TCP, a differenza di UDP, è progettato per garantire l'affidabilità, assicurando che entrambe le parti siano pronte a comunicare e che i dati vengano trasferiti senza perdite.

Serve quindi seguire un processo per stabilire una connessione, chiamato ***three way handshake,*** che utilizza i flag SYN e ACK e i numeri di sequenza per sincronizzare client e server:

![](https://i.ibb.co/WWJpgq2/image.png)

1. **SYN**: Il client invia un segmento TCP con il flag SYN impostato, richiedendo di aprire una connessione. Il numero di sequenza del segmento è un valore casuale scelto dal client.
2. **SYN+ACK**: Il server risponde con un segmento che ha i flag SYN e ACK impostati. Il numero di sequenza è anch'esso un valore casuale, mentre il numero di acknowledgement è il numero di sequenza ricevuto dal client incrementato di 1, questo in generale sta a significare che sono stati ricevuti i dati fino a `x` e si aspetta `x+1`.
3. **ACK**: Il client, ricevuto il SYN+ACK, conferma la ricezione inviando un segmento con il flag ACK impostato.

A questo punto, la connessione è stabilita e entrambe le parti possono iniziare a scambiarsi dati.

Esiste la possibilità che **client e server inviino simultaneamente un segmento SYN**, ad esempio se utilizzano la stessa porta e agiscono entrambi come client e server.

Vediamo una macchina a stati che riassume i passaggi:

![](https://i.ibb.co/Qk17Khp/image.png)

Nota: `?` significa riceve, mentre `!` significa inviare.

Un esempio di **rifiuto di connessione** avviene in questo modo, in cui il server risponde con **RST+ACK**:

![](https://i.ibb.co/41sVyjn/image.png)

Per motivi di sicurezza, un segmento RST deve sempre contenere un numero di acknowledgement valido. Questo impedisce attacchi di **RST spoofing**, in cui un utente malintenzionato potrebbe cercare di interrompere una connessione inviando un segmento RST con parametri non validi.

La **chiusura di una connessione TCP** può avvenire in due modi:

- ***graceful release***: entrambe le parti terminano la trasmissione dati in modo sincronizzato dopo aver trasmesso tutti i dati.
    1. La parte che desidera chiudere la connessione invia un segmento FIN con il numero di sequenza corrispondente all'ultimo byte di dati inviato.
    2. Il ricevente risponde con un segmento ACK, confermando la ricezione del FIN.
    3. La parte che ha inviato il FIN attende a sua volta un FIN dalla parte ricevente, a indicare che anche quest'ultima ha terminato la trasmissione dati.
    4. Una volta ricevuto il FIN, la parte che lo ha ricevuto invia un ACK di conferma.
    
    Una macchina a stati finiti (FSM) che rappresenta questo tipo di chiusura è la seguente
    
    ![](https://i.ibb.co/db3hqYS/image.png)
    
    Dopo aver inviato l'ultimo ACK, la parte che ha inviato il FIN passa allo stato **TIME WAIT**, dove rimane per un periodo di tempo. Questo intervallo di tempo serve a garantire che eventuali segmenti in ritardo o duplicati vengano gestiti correttamente, senza causare problemi alla successiva apertura di nuove connessioni con gli stessi parametri.
    
- ***abrupt release***: una delle due parti chiude la connessione in modo forzato.
    
    utilizza il flag RST che chiude immediatamente la connessione, senza attendere la conferma dell'altra parte.
    

## Trasporto dei dati affidabile

Ogni endpoint di una connessione TCP utilizza un **Transmission Control Block (TCB)** per gestire lo stato e il flusso della connessione. Il TCB è essenzialmente una struttura dati che raccoglie tutte le informazioni necessarie per l'invio e la ricezione dei segmenti TCP.

Possiamo suddividere le informazioni contenute nel TCB in due categorie principali:

**Informazioni statiche** (che non cambiano durante tutta la connessione)**:**

- **Indirizzi IP e porte (sia locali che remote)**: Questi parametri identificano univocamente la connessione.
- **Buffer di invio**: memoria dedicata ai dati che l'applicazione desidera trasmettere. Questi dati rimarranno nel buffer fino a quando non saranno correttamente confermati dal ricevente.
- **Buffer di ricezione**: buffer per contenere i dati ricevuti. questi dati rimangono nel buffer perché ricevuti fuori sequenza o perché l'applicazione è lenta ad elaborarli.

**Informazioni dinamiche** (che possono cambiare durante la connessione):

- **Stato corrente della FSM**: Questa variabile indica la fase in cui si trova la connessione all'interno della *Finite State Machine* (FSM)
- **Maximum Segment Size (MSS)**: La MSS rappresenta la dimensione massima del payload che un segmento TCP può trasportare senza incorrere nella frammentazione a livello IP.
- **snd.nxt**: Il numero di sequenza associato al prossimo byte che il mittente trasmetterà.
- **snd.una**: Il numero di sequenza del primo byte che, pur essendo stato inviato, non ha ancora ricevuto acknowledgement dal ricevente.
- **snd.wnd**: La dimensione attuale della *sending window*, espressa in byte. Indica la quantità massima di dati che il mittente è autorizzato a inviare prima di attendere un acknowledgement dal ricevente.
- **rcv.nxt**: Il numero di sequenza del prossimo byte che il ricevente si aspetta di ricevere.
- **rcv.wnd**: La dimensione attuale della *receiving window* espressa in byte. indica quanti byte il ricevente è in grado di accogliere nel suo buffer di ricezione.
    
    

### Invio dei dati

Quando un'applicazione desidera inviare dati attraverso una connessione TCP, il livello TCP esegue le seguenti operazioni:

1. **Verifica lo spazio disponibile nella finestra di ricezione**: Il mittente controlla se la quantità di dati da inviare è inferiore o uguale alla dimensione della finestra di ricezione (`rcv.wnd`) comunicata dal ricevente.
2. **Crea un nuovo segmento TCP**: Il mittente assembla un segmento TCP includendo un'header e un payload. Il payload sarà grande fino a MSS byte.
3. **Imposta il numero di sequenza del segmento**: Il numero di sequenza del segmento (`seq`) viene impostato al valore di `snd.nxt`. Dopo l'invio, `snd.nxt` viene incrementato della dimensione del payload.
4. **Imposta il numero di acknowledgement**: Il numero di acknowledgement (`ack`) viene impostato al valore di `rcv.nxt`, che rappresenta il numero di sequenza del prossimo byte atteso.
    
    (Vengono usati acknowledgement cumulativi, cioè un singolo acknowledgement conferma la ricezione di tutti i byte con numero di sequenza inferiore a `ack`)
    
5. **Calcola e imposta la dimensione della finestra**: Il mittente calcola il campo `window` dell'header TCP in base allo spazio disponibile rimasto nel proprio buffer di ricezione.
6. **Mantiene i dati nel buffer di invio**: I dati inviati vengono conservati nel buffer di invio finché non si riceve un acknowledgement, In caso di perdita di un segmento il mittente potrà ritrasmettere i dati persi.

### Ricezione dei dati

Sul lato ricevente, quando arriva un segmento TCP, il livello TCP esegue le seguenti operazioni:

**Controlla il flag ACK**: Se il flag ACK è impostato, significa che il segmento ricevuto contiene informazioni di acknowledgement, in tal caso:

1. **Aggiorna la finestra di invio**: aggiorna la variabile `snd.wnd` con il valore del campo `window` ricevuto nell'header del segmento. Questo valore indica la dimensione della finestra di ricezione del mittente.
2. **Gestisce gli acknowledgements**: Il ricevente confronta il numero di acknowledgement (`ack`) con la variabile `snd.una` del mittente. Se `ack` è maggiore di `snd.una`, significa che sono stati confermati nuovi dati. Tali dati vengono rimossi dal buffer di invio, e `snd.una` viene aggiornato al valore di `ack`.

Altrimenti il segmento ricevuto contiene dei dati, in tal caso:

1. **Verifica la sequenza dei dati**: controlla se il numero di sequenza del segmento (`seq`) coincide con il valore di `rcv.nxt`. Se coincidono, i dati sono in sequenza e vengono aggiunti al buffer di ricezione. `rcv.nxt` viene incrementato per indicare il prossimo byte atteso.
2. **Controlla il buffer di ricezione**: Il ricevente verifica se, dopo l'aggiunta dei nuovi dati, ci sono altri dati già presenti nel buffer di ricezione che possono essere consegnati all'applicazione. Se sì, `rcv.nxt` viene incrementato ulteriormente sulla nuova posizione della finestra di ricezione.
3. **Invia un acknowledgement**: invia un ACK per confermare la ricezione dei dati e per comunicare la nuova dimensione della finestra di ricezione.

## Scelte di design di TCP

Analizziamo adesso tre scelte di design di TCP:

1. Quando inviare dati?
2. Quanto grande dovrebbe essere la window?
3. A quanto andrebbero impostati i timer di ritrasmissione?

## Quando inviare dati?

Mentre l'applicazione riempie il buffer di invio con i dati, il livello TCP deve decidere quando è opportuno assemblare e trasmettere un segmento TCP.

Analizziamo due approcci estremi a questo problema:

- **Invio immediato:**
    - **Vantaggio:** Minimizza la latenza. I dati vengono inviati non appena sono disponibili, ideale ad esempio per shell remote.
    - **Svantaggio:** Bassa efficienza. Si ha un overhead significativo dovuto alla generazione di molti header IP e TCP.
- **Attendere un segmento completo**
    - **Vantaggio:** Massimizza l'efficienza. Attendere di avere un payload completo (pari alla MSS) prima di inviare un segmento riduce al minimo l'overhead.
    - **Svantaggio:** Aumento della latenza. Per applicazioni che generano dati a bassa velocità, l'attesa potrebbe essere eccessiva.

### L'Algoritmo di Nagle

John Nagle ha proposto un algoritmo che offre un compromesso tra latenza ed efficienza, l'**algoritmo di Nagle**:

```python
if len(data) >= MSS and rcv.wnd >= MSS:
	# send one MSS-sized segment
else:
	if there are unacknowledged data:
		# place data in buffer until acknowledgment has been received
	else:
		# send one TCP segment containing at most rcv.wnd data
```

1. Se la dimensione dei dati da inviare `len(data)` è maggiore o uguale alla MSS e la finestra di ricezione `rcv.wnd` è sufficientemente grande da accoglierli, invia un segmento di dimensione MSS.
2. Altrimenti, se ci sono dati non ancora confermati, attendi la ricezione di un acknowledgement prima di inviare nuovi dati.
3. Altrimenti, se non ci sono dati in attesa di acknowledgement, invia un segmento contenente una quantità di dati non superiore a `rcv.wnd`.

L'algoritmo di Nagle favorisce l'invio di segmenti completi quando possibile, allo stesso tempo, limita l'invio di piccoli segmenti riempiendo il buffer mentre si attendono gli ACK

## Quando grande dovrebbe essere la window?

La dimensione massima della finestra TCP è limitata a $2^{16} = 65536 \text{ byte}$ a causa del campo "window" a 16 bit. Questa limitazione risulta oggi inadatta per le reti ad alta velocità. Si è infatti limitati ad inviare dati grandi quanto la window per ogni RTT (tempo di andata del pacchetto e ritorno dell’ACK). Ad esempio con 1ms di RTT si è limitati a 524Mbps di throughput.

Per superare la limitazione, è stata introdotta l'opzione **"Window Scale".**

Questa opzione, negoziata durante la fase di handshake, indica un moltiplicatore per la dimensione della finestra.

**Window Scale** contiene un valore $S$, compreso tra $0$ e $14$, che rappresenta lo spostamento a sinistra da applicare alla dimensione della finestra. In questo modo la dimensione effettiva della finestra di ricezione diventa `rcv.wnd` $\cdot 2^S$.

Ad esempio con 1ms di RTT si arriva a 8590Gbps di throughput.

## A quanto andrebbero impostati i timer di ritrasmissione?

Il *Retrasmission Time-out* (RTO) determina il tempo che il mittente attende prima di ritrasmettere un segmento non ancora confermato. Se il timeout scade troppo presto, si potrebbero ritrasmettere segmenti già ricevuti correttamente. Al contrario, se il timeout scade troppo tardi, mittente rimane molto tempo inattivo.

Un'impostazione accurata del RTO dipende da una stima precisa del RTT, ovvero il tempo impiegato da un segmento per raggiungere il destinatario e tornare al mittente con un ACK. 

Misurare l'RTT semplicemente calcolando il tempo trascorso tra l'invio di un segmento dati e la ricezione del relativo acknowledge può essere influenzato dalle condizioni della rete ed è quindi in continuo cambiamento.

Le implementazioni TCP moderne utilizzano l'opzione **"timestamp"**. Questa opzione consente al mittente di inserire due timestamp a 32 bit in ogni segmento inviato:

- **TS Value (TSval):** Il timestamp corrente del mittente.
- **TS Echo Reply (TSecr):** L'ultimo TSval ricevuto dal destinatario.

![](https://i.ibb.co/0Q43J98/image.png)

(**Nota**: l’utilizzo dei timestamp risolve anche il problema in cui nelle reti ad alta velocità i numeri di sequenza si potevano riavvolgere prima che si ricevessero gli ACK, con il timestamp un segmento altamente in ritardo si riesce a rilevare anche se il suo numero di sequenza si è riavvolto.)

Una volta ottenute le misurazioni dell'RTT, il mittente deve calcolare l'RTO. Poiché l'RTT può variare nel tempo, anche l'RTO deve essere adattato di conseguenza.

### Algoritmo di Jacobson

L'algoritmo di Jacobson, è il metodo standard per calcolare l'RTO. Questo algoritmo utilizza le seguenti variabili:

- `rtt`: l’ultimo valore misurato di RTT
- `srtt`**:** la media ponderata dell'RTT
- `rttvar`**:** la stima della varianza dell'RTT

L'algoritmo prevede i seguenti passaggi:

1. All'inizio della connessione, l'RTO viene impostato a 3 secondi.
2. Quando si ottiene la prima misurazione dell'RTT allora `srtt`, `rttvar` vengono calcolati come segue:
    
    $$
    srtt = \text{RTT} \hspace{5mm}rttvar=\frac{\text{RTT}}{2}
    $$
    
3. Successivamente, quando si ottengono nuove misurazioni dell'RTT, `srtt`, `rttvar` e `rto` vengono aggiornati come segue:
    
    $$
    srtt = (1-\alpha)\cdot srtt + \alpha \cdot \text{RTT}\\
    rttvar = (1-\beta)\cdot rttvar + \beta \cdot |srtt-\text{RTT}|\\
    \text{RTO} = srtt + 4\cdot rttvar
    $$
    
    dove $\alpha = \frac{1}{8}$ e $\beta = \frac{1}{4}$
    

### Strategie Avanzate di Ritrasmissione

Oltre all'algoritmo di Jacobson, esistono altre strategie avanzate per la gestione delle ritrasmissioni in TCP.

- *Exponential Backoff*:
    
    In caso di ritrasmissioni multiple dello stesso segmento, l'RTO viene raddoppiato dopo ogni tentativo fallito, fino a raggiungere un valore massimo configurato (tipicamente 60 secondi).
    
- *Fast Retransmit*
    
    Questa tecnica consente di ritrasmettere un segmento perso prima della scadenza dell'RTO nel caso in cui il mittente riceve tre ACK consecutivi per lo stesso numero di sequenza.
    

## Strategie di ricezione

Oltre alle strategie di ritrasmissione implementate dal mittente, vediamo due strategie utilizzate dal ricevitore: **Delayed ACK** e **Selective ACK**.

### Delayed ACK

In molti casi, la comunicazione TCP è prevalentemente unidirezionale, con un mittente che invia grandi quantità di dati e un ricevitore che invia principalmente ACK. Inviare un ACK per ogni segmento ricevuto può generare un sovraccarico significativo.

**Delayed ACK** affronta questo problema inviando un ACK ogni due segmenti dati ricevuti, oppure dopo un determinato intervallo di tempo.

### Selective ACK (SACK)

Per migliorare l'efficienza in caso di perdite multiple, TCP implementa l'opzione **Selective ACK (SACK)**. Questa opzione, negoziata durante l'handshake, consente al ricevitore fare ACK su blocchi di dati ricevuti correttamente ma fuori sequenza.

Il mittente, può quindi ritrasmettere solo i segmenti mancanti, evitando la ritrasmissione di dati già ricevuti correttamente.



# TLS

Fino ad ora abbiamo visto quali servizi di sicurezza vengono garantiti dai vari livelli dello stack di rete:

- funzioni hash per garantire integrità
- cifratura a chiave simmetrica per garantire segretezza
- cifratura a chiave pubblica per garantire autenticità e non ripudio
- certificati basati su firma digitale per ottenere un un sistema di fiducia (web of trust)

Dove potremmo inserire ulteriore sicurezza, in particolare ulteriore cifratura?

Ricordiamo che per far funzionare la crittografia ci deve essere una *security association*, cioè uno scambio di chiavi tra le due entità della comunicazione.

### Cifrare il livello di rete?

la crittografia dell'intestazione IP è problematica perché i router, necessari per l'instradamento, non fanno parte della *security association*. I router per instradare i pacchetti devono vedere le informazioni sull’header IP

Soluzioni come la crittografia a livello MAC o l'uso di una VPN (*Virtual Private Network*) offrono una crittografia limitata all'interno di una LAN o tra reti proprie, ma non sono soluzioni generali su Internet.

### Cifrare il livello di trasporto?

La crittografia dell'intestazione TCP presenta delle sfide a causa di servizi, come NAT, firewall e *traffic shaper*, che richiedono l'accesso alle informazioni dell’header TCP per funzionare.

### Cifrare sopra il livello di trasporto?

Questo risulta essere il compromesso migliore, infatti:

- Più andiamo in basso nello stack di rete, maggiori sono le informazioni crittografate, ma le cose potrebbero non funzionare, questo perché alcune informazioni devono essere visibili per poter far funzionare la comunicazione.
- Più andiamo in alto nello stack di rete, più facile è supportare nuove applicazioni, ma più informazioni non vengono cifrate.

Se forniamo un servizio di crittografia sopra TCP, l’header TCP e IP rimangono visibili agli attaccanti (numero delle porte, il protocollo usato, gli indirizzi IP), ma il contenuto effettivo viene cifrato.

## TLS

TLS (*Transport Layer Security*) è uno strato di sicurezza che si posiziona sopra il livello di trasporto. 

Inizialmente veniva usato un protocollo chiamato SSL (*Secure Layer Protocol*), tale protocollo è stato standardizzato e trasformato in TLS. Nonostante SSL sia ormai deprecato, i termini SSL e TLS vengono usati per riferirsi alla stessa cosa in modo intercambiabile.

Al giorno d’oggi vengono usate per la maggior parte le versioni TLS 1.2 e TLS 1.3.

### Aggiornamento dei protocolli applicativi

L'introduzione di TLS ha permesso di creare versioni sicure di molti protocolli applicativi precedentemente insicuri. Questi protocolli sicuri, come HTTPS, POP3S e IMAPS, mantengono lo stesso nome della loro controparte insicura con l'aggiunta di una "S" finale.

Ovviamente tali protocolli operano su porte diverse rispetto alle controparti insicure, ad esempio HTTP opera su porta 80 mentre HTTPS opera su porta 443.

### Servizi di sicurezza forniti

TLS fornisce i seguenti servizi di sicurezza al livello applicativo:

- **Autenticazione dell'origine**: server e client possono identificarsi a vicenda utilizzando certificati X.509.
- **Segretezza**: dopo l'autenticazione, segue una fase in cui viene generata una chiave condivisa per crittografare il traffico utilizzando una cifratura a chiave simmetrica.
- **Integrità**: viene generata un'altra chiave simmetrica che garantisce l'integrità utilizzando un HMAC

## TLS 1.2

Nella versione TLS 1.2 sono presenti vari sotto-protocolli, tra cui un **protocollo di handshake** (usato per negoziare le chiavi) e un **protocollo record** (usato per cifrare i dati)

## Protocollo di handshake

Il protocollo handshake consente a server e client di autenticarsi a vicenda e di negoziare un determinato algoritmo di crittografia e delle chiavi crittografiche. Alcuni degli elementi che devono essere negoziati includono:

- le funzioni crittografiche (RSA, crittografia a curva ellittica)
- le funzioni hash (SHA-256, SHA-384)
- il metodo di negoziazione della chiave simmetrica (Diffie-Hellman, RSA exchange).

Vediamo i passaggi dell’handshake:

![](https://i.ibb.co/B2DwxSd/image.png)

1. I primi due messaggi in blue sono quelli dell’handshake base di TCP, in particolare sono SYN e SYN+ACK.
2. Il terzo messaggio `ClientHello` ha due funzioni: termina l’handshake di TCP e inizia l’handshake di TLS. In tale messaggio c’è la configurazione di TLS (con i vari algoritmi crittografici) che il client supporta
3. il server risponde con un messaggio `ServerHello`, che include la configurazione più sicura di TLS supportata da entrambi.
    
    Il server manda anche la catena di certificati (dalla root CA fino al certificato del server).
    
4. Il client invia un messaggio `ClientKeyExchange` che contiene le informazioni necessarie per completare lo scambio di chiavi in base all’algoritmo scelto.
5. Sia il client che il server inviano un messaggio `ChangeCipherSpec` per segnalare che da questo punto in poi tutti i messaggi saranno crittografati e autenticati con le chiavi di sessione appena concordate.
6. Sia il client che il server inviano un messaggio `Finished` che contiene un hash di tutti i messaggi scambiati durante l'handshake. Questo messaggio è il primo ad essere crittografato con le chiavi concordate e serve a confermare che l'handshake si è svolto correttamente e che nessun attacco Man-in-the-Middle ha modificato i messaggi, se i due `finished` non combaciano, l’handshake fallisce.

In questo protocollo l’**autenticazione è unidirezionale**, solo il server viene identificato attraverso la catena di certificati. Il client normalmente viene autenticato tramite un login.

## Protocollo record

Dopo aver fatto l’handshake si applica il protocollo record.

Questo protocollo incapsula i dati applicativi in un processo di cinque fasi:

- frammentazione
- compressione (opzionale)
- aggiunta di un MAC tramite funzioni hash
- crittografia
- aggiunta di un header del record TLS.

![](https://i.ibb.co/1stgppP/image.png)

Questo protocollo garantisce quindi **segretezza** utilizzando la crittografia simmetrica per i dati e **integrità** utilizzando funzioni hash sicure.

## TLS 1.3

Negli anni il protocollo TLS 1.2 è stato arricchito di sotto-protocolli, algoritmi crittografici, librerie e funzionalità, allargando di conseguenza la superficie di attacco e il numero di vulnerabilità.

TLS 1.3 cerca di ridurre la superficie di attacco riscrivendo il protocollo, rendendolo più semplice e rimuovendo le features meno utili della versione 1.2.

tra le modifiche introdotte da TLS 1.3 abbiamo

- L'utilizzo di soli 5 algoritmi di crittografia/autenticazione
- Un handshake iniziale semplificato che può funzionare in un solo RTT:
    
    Questo è possibile perché il client può indovinare i parametri utilizzati dal server per lo scambio di chiavi Diffie-Hellman e avviare immediatamente lo scambio. Se il client non indovina, il server risponde con i parametri corretti e solo allora si perde un RTT.
    
- Forward Secrecy obbligatorio**.**

### Forward Secrecy

Il *Forward Secrecy* è una caratteristica che garantisce che le chiavi di sessione non vengano compromesse anche se la chiave privata del server viene compromessa.

In pratica, questo significa che se un utente malintenzionato intercetta una comunicazione TLS e successivamente riesce a ottenere la chiave privata del server, non sarà in grado di decifrare il traffico intercettato in precedenza. 

Il Forward Secrecy fa uso di chiavi pubbliche effimere: cioè chiavi che vengono generate durante l'handshake e cancellate subito dopo essere state utilizzate.

Il funzionamento è riassumibile in questo modo:

1. il server invia il suo certificato al client
2. Il client verifica il certificato
3. Il client avvia una sessione Diffie-Hellman con una chiave effimera casuale
4. Il server completa la sessione Diffie-Hellman con una chiave effimera casuale
5. Entrambi ora possiedono una chiave K
6. Da ora in poi, il server e il client utilizzano AES e HMAC con K
7. Sia il server che il client eliminano le chiavi effimere
8. Ora il client utilizza un login per l'autenticazione

Questo protocollo garantisce la *Forward Secrecy* perché la chiave di sessione K viene generata utilizzando chiavi effimere che vengono eliminate dopo l'handshake. Anche se un utente malintenzionato ottiene la chiave privata del server in un secondo momento, non sarà in grado di decifrare il traffico intercettato in precedenza perché non ha accesso alle chiavi effimere utilizzate per generare K.



# IPv4

Il livello di rete fornisce la consegna non affidabile dei pacchetti utilizzando i servizi forniti dal livello di collegamento. Le tipologie di livello di collegamento sono principalmente due: collegamenti punto a punto (**PPP**, *Point-to-Point Protocol*) che coinvolge solo due dispositivi che comunicano direttamente e **LAN** (*Local Area Network*) in cui vari dispositivi sono connessi tra loro tramite un particolare dispositivo (uno *switch).*

## IPv4

Il protocollo di rete più utilizzato è IPv4 (*Internet Protocol version 4*).

Questo protocollo assegna un indirizzo IP agli host di una rete. Questi indirizzi sono composti da 32 bit, rappresentati come quattro numeri decimali da 0 a 255 separati da punti (es: `192.168.1.1` = `11000000 10101000 00000001 00000001`).

## Subnet

Le reti sono organizzate in **sottoreti** (***subnet***), interconnesse da dispositivi chiamati **router**. Una sottorete è identificata da un gruppo di indirizzi nel formato `x.y.z.w/N`, dove `N` (chiamata ***netmask***) rappresenta il numero di bit dell’indirizzo dedicati alla rete, mentre `32-N` indica il numero di bit dedicati agli host di quella sottorete.

$2^N$ = numero di sottoreti creabili

$2^{32-N}$ numero di host che ogni sottorete ha a disposizione

Esempi:

- `192.168.0.0/24`: 24 bit per identificare la rete, 8 bit per identificare l’host
- `192.168.0.0/30`: 30 bit per identificare la rete, 2 bit per identificare l’host

Ogni indirizzo IP può essere quindi diviso nella parte **netid** e **hostid**: gli indirizzi all’interno di una **stessa sottorete** avranno lo **stesso netid** ma **hostid diversi**. Indirizzi appartenenti a **sottoreti diverse** avranno **netid diversi** e **hostid arbitrari** (anche uguali perché tanto sono in sottoreti diverse)

Siccome abbiamo in totale 32bit divisi in gruppi di 8bit, ci sono delle netmask più comuni che sono:

- classe A: `x.y.z.w/8` poche reti ma con tantissimi host
- classe B: `x.y.z.w/16` via di mezzo tra reti e host
- classe C: `x.y.z.w/24` tante reti con pochi host

### Indirizzi speciali

Ogni sottorete ha anche due indirizzi speciali riservati: l'**indirizzo di rete** e l'**indirizzo di broadcast**.

- L’indirizzo di rete serve per identificare la rete, tale indirizzo è composto da un **hostid** di soli `0`
- l’indirizzo di broadcast viene utilizzato per inviare pacchetti a tutti i dispositivi all'interno della sottorete, tale indirizzo è composto da un **hostid** di soli `1`

Ad esempio con una subnet `192.168.0.0/24` abbiamo che

- `192.168.0` (primi 3 byte) rappresentano il **netid**, mentre l’ultimo byte `0` rappresenta l’**hostid**
- `192.168.0.0` = … 00000000$_2$: indirizzo di rete
- `192.168.0.255` = … 11111111$_2$: indirizzo di broadcast

Oltre a questi, esistono altri indirizzi speciali:

- `0.0.0.0/8`**:** Indirizzo con cui si presenta un host per chiedere al router un indirizzo IP valido.
    
    (viene utilizzato anche come route di default nelle tabelle di routing)
    
- `127.0.0.0/8`**:** Interfaccia di **loopback**. Utilizzata per le connessioni all'interno della stessa macchina.
- `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`: Questi indirizzi sono riservati per l'uso in reti private e non vengono instradati su Internet.
- `169.254.0.0/16`**:** detto “**Link-local**”, viene assegnato automaticamente a un dispositivo quando non riesce a ottenere un indirizzo IP dal router, permette la comunicazione locale con altri dispositivi nella stessa sottorete.

Nota: solitamente in ogni sottorete è presente un router, e **anch’esso ha bisogno di un indirizzo IP** sulla sua interfaccia in modo che gli host possano riconoscerlo.

Quindi con una subnet `/24` si hanno 256 indirizzi totali, ma solamente 254 sono assegnabili agli host perché dobbiamo considerare l’indirizzo di rete e di broadcast, se è presente anche un router bisogna considerare anche un indirizzo per la sua interfaccia.

## Router

La comunicazione all'interno di una sottorete è possibile tra tutti gli host (assumiamo che ciò avvenga grazie ad uno switch). Tuttavia, per comunicare con host in altre sottoreti, è necessario un **router**.

I router possiedono più interfacce di rete, ciascuna con un indirizzo IP, e sono in grado di instradare i pacchetti tra reti diverse. Ogni host ha un **router predefinito** (chiamato *gateway*) a cui inviare pacchetti destinati a reti diverse dalla propria.

![](https://i.ibb.co/NjNH6Ym/image.png)

Quando un host vuole comunicare con un altro host della stessa rete, invierà un pacchetto con l’indirizzo IP del destinatario (un indirizzo privato) e il relativo indirizzo MAC, lo switch a cui sono collegati gli host instraderà il pacchetto all’host in base all’indirizzo MAC specificato (l’indirizzo IP in questo caso serve nel caso non si disponga dell’indirizzo MAC, tramite l’IP si può usare il protocollo ARP per ottenere il MAC di un certo indirizzo IP).

Se invece un host vuole comunicare al di fuori della propria rete, invierà un pacchetto con l’indirizzo IP del destinatario (un indirizzo pubblico) e l’indirizzo MAC del router, lo switch a cui sono collegati gli host instraderà il pacchetto in base all’indirizzo MAC specificato, in questo caso verso il router, il quale instraderà il pacchetto in base all’indirizzo IP.

## Header IPv4

![](https://i.ibb.co/dBPVhSg/image.png)

L’header è composto da un parte fissa (raffigurata nell’immagine) e opzioni aggiuntive facoltative.

- **Version:** Indica la versione del protocollo IP, 4 o 6
- **Internet Header Length (IHL):** Specifica la lunghezza dell'header IPv4 in word a 32 bit. Il valore minimo è 5, che corrisponde a un header senza opzioni, e il valore massimo è 15.
- **Total length:** Indica la lunghezza totale del pacchetto IP in byte, inclusi header e payload. Il valore massimo è 65535 byte.
- **Identification:** Utilizzato per identificare in modo univoco i vari frammenti in cui può essere stato spezzato un pacchetto IP, frammenti con lo stesso valore apparterranno allo stesso pacchetto.
- **Flag:** Tre flag di un bit:
    - **Evil Bit:** Non utilizzato.
    - **Don't Fragment:** Indica se il pacchetto può essere frammentato. Se settato a 1 indica che il pacchetto non deve essere frammentato; se tale pacchetto non può essere inoltrato da un host senza essere frammentato, viene semplicemente scartato.
    - **More Fragments:** Indica se ci sono altri frammenti del pacchetto originale. È impostato a 1 per tutti i frammenti tranne l'ultimo.
- **Fragment offset:** Indica l'offset (misurato in blocchi di 8 byte) di un particolare frammento relativamente all'inizio del pacchetto IP originale, il primo frammento ha offset 0. Si riferisce solo ai dati, escluso l'header. Serve per riordinare i frammenti quando arrivano a destinazione.
    
    si misura in blocchi di 8 byte perché la grandezza totale di un pacchetto IP (non frammentato) è $2^{16}$ = 65535 byte. Il fragment offset però ha arriva al massimo fino a $2^{13}$ = 8192 byte, dobbiamo quindi moltiplicare il suo valore per i byte mancanti $2^3$ = 8 byte
    
- **TTL (Time to Live):** Un contatore decrementato a ogni hop. Se il TTL raggiunge 0, il pacchetto viene scartato.
- **Protocol:** Indica il protocollo di livello superiore incapsulato nel pacchetto IP (ad esempio, 1 per ICMP, 6 per TCP, 17 per UDP).
- **header checksum:** Un checksum utilizzato per verificare l'integrità dell'header.
- **Source address:** L'indirizzo IP del mittente del pacchetto.
- **Destination address:** L'indirizzo IP del destinatario del pacchetto.

## Frammentazione dei pacchetti

La frammentazione dei pacchetti IP si verifica quando un pacchetto è più grande dell'MTU (Maximum Transmission Unit) che la rete supporta. L'MTU varia a seconda del tipo di mezzo fisico; ad esempio, Ethernet ha un MTU di 1500 byte, mentre Wi-Fi (802.11) ha un MTU di 2272 byte.

Quando un pacchetto supera l'MTU, viene frammentato in **pacchetti più piccoli indipendenti**, ognuno con un proprio header IPv4. La frammentazione può avvenire in qualsiasi router lungo il percorso dalla sorgente alla destinazione. Il destinatario avrà poi il compito di riassemblare tutti i frammenti.

Ogni frammento contiene le seguenti informazioni:

- Lo stesso campo `identification` nell’header: Permette al destinatario di associare i frammenti al pacchetto relativo.
- Campo `total length`: Impostato alla lunghezza del frammento specifico.
- Campo `fragment offset`**:** Indica la posizione del frammento rispetto al pacchetto originale, espresso in multipli di 8 byte.
- Il flag `More Fragments`: Impostato a 1 per tutti i frammenti tranne l'ultimo, che indica la fine del pacchetto originale.

### **Esempi di frammentazione:**

Con un pacchetto lungo 250byte e un MTU di 120byte:

![](https://i.ibb.co/j6T63WT/image.png)

Ricorda che ogni frammento ha anche il proprio header IP di 20 byte da far rientrare all’interno dei 120byte.

Un altro esempio con un pacchetto IP di 3500 byte e un MTU di 1500 byte.

Verrà suddiviso in tre frammenti:

- **Frammento 1:** 20 byte (header IP) + 1480 byte (payload + header TCP) = 1500 byte. Flag "More Fragments" impostato a 1, offset del frammento a 0.
- **Frammento 2:** 20 byte (header IP) + 1480 byte (payload) = 1500 byte. Flag "More Fragments" impostato a 1, offset del frammento a 1480/8 = 185.
- **Frammento 3:** 20 byte (header IP) + 540 byte (payload) = 560 byte. Flag "More Fragments" impostato a 0, offset del frammento a (1480 + 1480)/8 = 370.

**I frammenti viaggiano come pacchetti indipendenti e possono seguire percorsi diversi per raggiungere la destinazione.** Solo quando arrivano a destinazione vengono riassemblati nell'ordine corretto utilizzando il campo `Identification` e `fragment offset`.

## NAT

Con il crescere esponenziale del numero di dispositivi connessi a Internet, il numero limitato di indirizzi IPv4 (pari a circa $2^{32}=4.3$ miliardi) si è rivelato insufficiente. Questa carenza ha spinto alla ricerca di soluzioni a breve e lungo termine.

A lungo termine, la soluzione è stata introdurre IPv6, che utilizza indirizzi a 128 bit**.** Questa soluzione, seppur ideale, richiede tempo per essere implementata su larga scala a causa della necessità di aggiornare hardware e software.

Una soluzione a breve termine è stata l'introduzione del Network Address Translation (NAT). Il NAT è una tecnica che consente di mappare indirizzi IP privati su uno o più indirizzi IP pubblici, permettendo a più dispositivi all'interno di una rete locale (LAN) di accedere a Internet utilizzando lo stesso indirizzo IP pubblico.

### Indirizzi IP privati

Per implementare il NAT, sono state riservate tre classi di indirizzi IP privati:

- `10.0.0.0` - `10.255.255.255` (`/8`)
- `172.16.0.0` - `172.31.255.255` (`/20`)
- `192.168.0.0` - `192.168.255.255` (`/16`)

Questi indirizzi possono essere **utilizzati liberamente** per i dispositivi nelle **LAN**. 

Nella LAN solo il router connesso ad internet possiede un indirizzo IP pubblico, esso si occupa di tradurre gli indirizzi privati in indirizzi pubblici e viceversa per far accedere ad internet i dispositivi nella sua rete usando il proprio indirizzo pubblico.

I router connessi a Internet **non** devono **instradare** pacchetti **da/verso indirizzi IP privati**.

![](https://i.ibb.co/SDKjRGTq/image.png)

### Funzionamento del NAT

Un router NAT mantiene una tabella che mappa i flussi di traffico in entrata e in uscita. Ogni flusso è identificato da 5 elementi:

- protocollo di trasporto
- **sIP (Source IP):** Indirizzo IP del mittente
- **dIP (Destination IP):** Indirizzo IP del destinatario
- **sPort (Source Port):** Porta del mittente
- **dPort (Destination Port):** Porta del destinatario

Una tabella di questo tipo riesce ad associare i pacchetti in arrivo dalla LAN con i pacchetti mandati su internet e vice versa.

![](https://i.ibb.co/MDN0xHv/image.png)

Quando un pacchetto proveniente da un dispositivo della LAN (con indirizzo IP privato) arriva al router, il router sostituisce l'indirizzo IP privato con il suo indirizzo IP pubblico e invia il pacchetto al server di destinazione.

Quando il server risponde, il router utilizza la tabella per identificare il dispositivo della LAN a cui inoltrare il pacchetto, sostituendo l'indirizzo IP pubblico con l'indirizzo IP privato originale.

![](https://i.ibb.co/44rwnbk/image.png)

Quello che potrebbe succedere sulla tabella del NAT è che due host diversi decidano inviare dei pacchetti allo stesso IP di destinazione, usando lo stesso protocollo, con la stessa porta destinazione e scelgano casualmente la stessa porta sorgente. questo genererebbe nella parte destra della tabella due righe completamente uguali e quando arriva la risposta dal server il router non saprebbe a chi inoltrare la risposta.

Per evitare questa situazione quello che fa il NAT al momento dell’invio di nuovi pacchetti verso internet è incrementare la porta sorgente nel caso in cui la nuova riga da aggiungere sia uguale ad una riga già presente:

![](https://i.ibb.co/HYGLws6/image.png)

### Note:

- due host possono avere lo stesso indirizzo privato se sono in LAN differenti
- due host nella stessa LAN non possono avere lo stesso indirizzo privato
- due host su internet non possono avere lo stesso indirizzo pubblico
- un host privato dietro al NAT non può ricevere nuove connessioni, ma le può solo mandare *****
- un server che vuole ricevere connessioni deve avere un indirizzo pubblico

### Vantaggi e svantaggi del NAT

**Vantaggi:**

- Permette a più dispositivi di condividere un singolo indirizzo IP pubblico, riducendo la domanda di indirizzi IPv4.
- I dispositivi con indirizzi IP privati sono invisibili a Internet, rendendo più difficile per gli aggressori esterni raggiungerli, non potendo aprire connessioni dall’esterno. *****

**Svantaggi:**

- Introduce complessità nell'architettura di rete e richiede la gestione di una tabella NAT sul router (solitamente il NAT è implementato nei firewall).
- **Problemi di prestazioni:** Può causare problemi di prestazioni, soprattutto con un elevato numero di connessioni simultanee.
    
    Inoltre le connessioni TCP possono essere interrotte improvvisamente, e allo stesso modo il traffico UDP non si può sapere quando termina, quindi il NAT deve mantenere dei timer per eliminare delle righe che assume non siano più valide.
    
- Il NAT ha anche il compito di **riassemblare i pacchetti**, questo perché la porta (usata per sapere a chi inoltrare i pacchetti) è presente nell’header TCP che è presente solo nel primo frammento del pacchetto. Quindi il NAT deve bufferizzare i frammenti (comportando un gran uso di memoria)
- Il NAT essendo molto dipendente dal livello di trasporto rende l’aggiornamento e la creazione dei protocolli di trasporto molto difficile

*****ci sono dei modi per aprire delle porte sul router e mettere degli host nella LAN in ascolto su tali porte in modo da permettere di aprire delle connessioni dall’esterno.

## Forwarding table

La *forwarding table* di un router mappa indirizzi di rete su un certa interfaccia in uscita, in modo da capire su quale interfaccia mandare il pacchetto in base al suo ip di destinazione.

Possiamo vederla in questo modo:

| Rete di destinazione | notazione binaria | Interfaccia in uscita |
| --- | --- | --- |
| `0.0.0.0/0` | `00000000.00000000.00000000.00000000`  | 0 |
| `124.156.12.0/24` | `01111100.10011100.00001100 . 00000000` | 1 |
| `124.156.13.0/24` | `01111100.10011100.00001101 . 00000000` | 0 |
| `124.156.13.128/26` | `01111100.10011100.00001101.10 000000` | 2 |
| `200.212.12.127/26` | `11001000.11010100.00001100.01 111111` | 3 |
| `200.212.12.64/28` | `11001000.11010100.00001100.0100 0000` | 4 |

`0.0.0.0/0` è l’interfaccia di default dove vengono instradati i pacchetti nel caso non ci sia una rete corrispondente nella tabella.

Quando arriva un pacchetto viene scelta l’interfaccia corrispondente alla rete con il netid più lungo uguale al netid dell’indirizzo nel pacchetto.

Esempi:

- `124.156.12.12 == 01111100.10011100.00001100.00001100`
    
    abbiamo un match con `0.0.0.0/0` e con `124.156.12.0/24` scegliamo quello con il match più lungo che è `124.156.12.0/24` quindi l’interfaccia 1
    
- `124.156.13.2 == 01111100.10011100.00001101.00000010`
    
    match con `0.0.0.0/0` e `124.156.13.0/24` quindi interfaccia 0
    
- `124.156.13.129 == 01111100.10011100.00001101.10000001`
    
    match con `0.0.0.0/0`, `124.156.13.0/24` e `124.156.13.128/26` quindi interfaccia 2
    
- `200.212.12.79 == 11001000.11010100.00001100.01001111`
    
    match con `0.0.0.0/0` e `200.212.12.64/28` quindi interfaccia 4
    
- `200.212.12.35 == 11001000.11010100.00001100.00100011`
    
    match con `0.0.0.0/0` quindi interfaccia 0
    
- `200.212.12.80 == 11001000.11010100.00001100.01010000`
    
    match con `0.0.0.0/0` e `200.212.12.127/26` quindi interfaccia 3
    

## ICMP

**ICMP** (*Internet Control Message Protocol*) è un protocollo di rete di segnalazione che trasmette messaggi di errore e messaggi relativi al funzionamento e allo stato della rete. ICMP non utilizza protocolli a livello di trasporto, viene direttamente incapsulato in un pacchetto IP.

### Header ICMP

![](https://i.ibb.co/rcFNMVC/image.png)

Quando un pacchetto produce un evento anomalo, viene generato un pacchetto ICMP. Il pacchetto ICMP contiene un header in cui grazie ai campi *Type* e *Code* si identifica l’evento.

Alcuni eventi riconosciuti da ICMP sono:

- Destinazione non raggiungibile
- Porta di destinazione chiusa
- Frammentazione necessaria (*Don’t fragment* è impostato a 1, ma MTU non è sufficiente).
- TTL superato: il pacchetto è rimasto bloccato in un ciclo.

Se un messaggio ICMP causa un errore, non viene inviato alcun ulteriore messaggio.

### Utilizzi di ICMP

ICMP è utilizzato per la risoluzione dei problemi e il test delle reti, alcune applicazioni che sfruttano  ICMP sono:

- **Ping**: Con il comando ping è possibile inviare richieste ad un server per eseguire test di base di raggiungibilità e latenza del server.
- **Traceroute**: è un comando che serve a **stimare** il percorso e il numero di hop che un pacchetto compie per raggiungere la destinazione (si tratta di una stima perché il percorso non è predicibile).
    
    Invia un pacchetto UDP a una destinazione con TTL=1. Il primo router risponderà con un ICMP che segnala l’evento “TTL exceeded”, rivelando il suo IP. Ripetendo l'operazione con TTL=1, 2, 3... fino a quando la destinazione non risponde, si ottiene una stima del numero di hop fino alla destinazione. I router non sono obbligati a generare errori ICMP, quindi questa tecnica non è completamente affidabile.



# Esercizi IPv4

## Esercizi indirizzi IP

### Es 1

**Domanda 1:** Data una subnet `1.2.1.0/24`, è possibile assegnare a uno degli host l'indirizzo `1.2.1.255`?

**Risposta:** No, l'indirizzo `1.2.1.255`, avendo tutti i bit dell’hostid impostati a 1 (cioè 255 in decimale), rappresenta l'**indirizzo di broadcast**, che non è assegnabile.

**Domanda 2:** Data una subnet `1.2.0.0/16`, è possibile assegnare a uno degli host l'indirizzo `1.2.1.0`?

**Risposta:** Sì l'indirizzo `1.2.1.0`, avendo i bit del hostid diversi da tutti 0 o tutti 1, rappresenta un indirizzo IP valido.

**Domanda 3:** Data una subnet `1.2.1.0/24`, è possibile assegnare a uno degli host l'indirizzo `1.2.1.0`?

**Risposta:** No l'indirizzo `1.2.1.0`, avendo tutti i bit del hostid impostati a 0, rappresenta l'**indirizzo di rete**, che non è assegnabile.

## Es 2

Un'organizzazione ha bisogno di **15 indirizzi IP** e deve noleggiarli da un provider di rete. Si supponga che il provider di rete possieda la rete `1.2.0.0/16`.

Qual è il minimo valore della subnet mask di cui l’organizzazione ha bisogno?

Per contenere 15 indirizzi, sono necessari 4 bit (2^4 = 16). Quindi, una subnet mask /28 sembrerebbe sufficiente a prima vista. Tuttavia, dobbiamo sottrarre l’indirizzo di rete e quello di broadcast.

Pertanto, una subnet /28 fornirebbe solo 14 indirizzi utilizzabili, che non sono sufficienti.

Per ottenere 15 indirizzi utilizzabili, l'organizzazione deve noleggiare una subnet /27, che fornisce 32 indirizzi, di cui 30 assegnabili.

## Es 3

Un'organizzazione ha due reti, A e B. La rete **A ha 14 host**, mentre la rete **B ne ha 16**. L’organizzazione deve noleggiarli da un provider di rete. Si supponga che il provider di rete possieda la rete `1.2.0.0/16`.

L’organizzazione è strutturata come segue:

![](https://i.ibb.co/NSk3Rnw/image.png)

- Quale è il valore minimo della subnet mask di cui l’organizzazione ha bisogno?
    
    Avendo 14+16=30 host sembrerebbe sufficiente una /27 che fornisce 30 indirizzi assegnabili.
    
    siccome si vuole partizionare la rete in due sottoreti, si avranno quindi 2 indirizzi non utilizzabili nella rete A e due indirizzi non utilizzabili nella rete B, in realtà ho bisogno di 34 indirizzi totali, quindi serve una /26.
    
- Supponiamo che venga noleggiata una `1.2.255.192/26`.
    
    possiamo dividere questo range in due sottoreti /27 ciascuno contenente quindi 30 indirizzi utilizzabili:
    
    - Rete B: userà la subnet `1.2.255.192/27` che fornisce indirizzi nel range `1.2.255.192 - 1.2.255.223`
    - Rete A: userà la subnet `1.2.255.224/27` che fornisce indirizzi nel range `1.2.255.224 - 1.2.255.255`

- La forwarding table del router connesso ad internet sarà la seguente:
    
    
    | Rete di destinazione | Interfaccia in uscita |
    | --- | --- |
    | `0.0.0.0/0` | eth3 |
    | `1.2.255.192/27` | eth1 |
    | `1.2.255.224/27` | eth0 |
- In queta configurazione vengono sprecati metà degli indirizzi, l'amministratore potrebbe voler ottimizzare l'utilizzo degli indirizzi IP noleggiando due subnet più piccole invece di una singola /26.
    
    Si potrebbe noleggiare una /28 per la rete A e una /27 per la rete B.
    
    - Rete B: userà la subnet `1.2.255.192/27` che fornisce indirizzi nel range `1.2.255.192 - 1.2.255.223`
    - Rete A: userà la subnet `1.2.255.224/28` che fornisce indirizzi nel range `1.2.255.224 - 1.2.255.239`
    
    In questo caso la forwarding table del router sarà la seguente:
    
    | Rete di destinazione | Interfaccia in uscita |
    | --- | --- |
    | `0.0.0.0/0` | eth3 |
    | `1.2.255.192/27` | eth1 |
    | `1.2.255.224/28` | eth0 |



# IPv6

Il numero di indirizzi IPv4 è praticamente esaurito. Il NAT sarebbe dovuta essere una soluzione temporanea, ma la soluzione definitiva è IPv6, la cui diffusione sta pian piano aumentando.

IPv6 non è retrocompatibile con IPv4 quindi o si usa un protocollo oppure l’altro. Poiché ci sono ISP che non forniscono IPv6 ai propri clienti, IPv4 è ancora necessario.

### Caratteristiche

Durante la definizione della nuova versione di IP si è cercato di risolvere i problemi più evidenti di IPv4, come la loro quantità, la mancanza di crittografia, e la frammentazione.

IPv6 ha le seguenti caratteristiche:

- Nuovo header IP
- Indirizzi IP più lunghi e con un nuovo formato
- Nessuna frammentazione dei pacchetti da parte dei router
- Una sostituzione del DHCP con il protocollo SLAAC
- Supporto obbligatorio per la crittografia

## Header IPv6

Il l’header per IPv6 è stato semplificato:

![](https://i.ibb.co/F5Z277N/image.png)

- *Version*: indica la versione del protocollo, permettendo nuove versioni in futuro
- *Payload length*: lunghezza del pyload espressa in byte (fino a 65535 byte)
- *Next Header*: indica il tipo di header che segue quello di IPv6, può essere usato sia per le opzioni facoltative di IPv6 sia per indicare il protocollo di trasporto utilizzato (rimpiazza il field “protocol” nell’header IPv4)
- *Hop limit*: indica il numero di router che possono inoltrare il pacchetto (sostituisce il TTL)

Possiamo notare da questo header che non è presente una checksum e non c’è il supporto per la frammentazione.

La motivazione della mancanza della checksum è dovuta principalmente perché i livelli di datalink e i e di trasporto includono già una checksum. Aggiungere un checksum nell'header IPv6 avrebbe costretto ogni router a ricalcolare la checksum di tutti i pacchetti, offrendo un beneficio limitato nel rilevamento degli errori considerando l'affidabilità delle memorie attuali e il costo del calcolo del checksum su ogni router.

## Formato indirizzi IPv6

Un indirizzo IPv6 è composto da **128 bit** ed è scritto in 8 blocchi in formato esadecimale separati dal carattere `:`. Ogni blocco è formato da 4 caratteri esadecimali.

Esempio di indirizzo IPv6:  `abcd:ef01:2345:6789:abcd:ef01:2345:6789`

Nel caso in cui siano presenti blocchi consecutivi di zeri, questi possono essere compattati: ad esempio `ff01:0:0:0:0:0:0:0101` viene rappresentato come `ff01::0101`.

Come in IPv4, l'indirizzo ha una **subnet mask** di una certa lunghezza, ad esempio `2001:0db8::cd30:0:0:0:0/60` ha 60 bit che identificano la rete.

Un indirizzo IPv6 è composto da tre parti:

| Parte dell'indirizzo | Descrizione | Lunghezza |
| --- | --- | --- |
| Prefisso di routing globale | assegnato all'Internet Service Provider (ISP) che possiede il blocco di indirizzi. | N bit |
| Identificativo di sottorete (subnet ID) | identifica un cliente dell'ISP. | M bit |
| Identificativo di interfaccia (host ID) | identifica una particolare interfaccia su un host (solitamente 64 bit) | 128 - N - M bit |

Le dimensioni tipiche dei blocchi di indirizzi IPv6 sono:

- /32 assegnato ad un ISP
- /48 assegnato ad una singola azienda
- /56 assegnato a siti di piccole dimensioni
- /64 assegnato a una rete casalinga

Considerando questi numeri, non è più necessario ottimizzare l'assegnazione delle sottoreti.

### Indirizzi speciali

- **fc00::/7:** *Unique Local Unicast*. Sono paragonabili gli IP privati in IPv4. Questa classe può essere usata per creare reti locali di testing
- **0:0:0:0:0:0:0:1:** *loopback interface*, identifica l’host corrente.
- **ff::/8:** indirizzi multicast
- **fe80::/10:** *Link Local Unicast* (LLU).

### Indirizzi LLU (Link-Local Unicast)

Gli indirizzi link-local (come per IPv4) possono essere utilizzati quando gli host collegati alla stessa rete locale (o direttamente tra loro) devono scambiarsi pacchetti anche se non hanno ricevuto un indirizzo ip.

Ogni host può calcolare il proprio indirizzo link-local concatenando il prefisso `fe80::/64` con il proprio indirizzo MAC estendendolo a 64 bit. 

Recentemente, è stato introdotto un modo per creare l'ID randomico utilizzando funzioni hash, in modo da non rivelare l'indirizzo MAC.

## SLAAC

Un host dovrebbe ricevere un IP pubblico dalla rete a cui è collegato. L'host-id della rete sarà l'indirizzo MAC del router, mentre per scoprire la rimanente parte dell’indirizzo si usa un protocollo particolare, chiamato SLAAC.

**SLAAC (Stateless Address Autoconfiguration):** In questo protocollo il router di rete trasmette periodicamente nella rete un pacchetto SLAAC che contiene diversi parametri, tra cui il prefisso di rete. Gli host riceveranno il pacchetto SLAAC, comporranno il netid con il proprio MAC formando così il loro indirizzo.

## IPSec

IPSec è un insieme di standard che implementano la crittografia e l'autenticazione sui pacchetti IP.

Con IPv6, il supporto per IPSec è obbligatorio (con IPv4 era facoltativo). Questo non significa che ogni router lo utilizzi, significa solo che ogni router deve supportarlo.

## Frammentazione

La frammentazione nel percorso di un pacchetto è un problema, perché costringe i router a utilizzare memoria e capacità di calcolo.

IPv6 ha **rimosso la frammentazione nel percorso**. Il mittente può ancora frammentare in pacchetti più piccoli. Il destinatario si occuperà poi di riordinare i pacchetti.

### Path MTU Discovery

Sia in IPv4 che in IPv6, il *Path MTU Discovery* viene utilizzato per scoprire l'MTU più basso sul percorso. In IPv6, questo processo è più importante perché i router non frammentano i pacchetti.

Per scoprire il massimo MTU che non porta ad una frammentazione si fanno vari tentativi di MTU e se un router nel percorso deve frammentare manda un messaggio ICMP alla sorgente comunicando di abbassare l’MTU.



# Routing interno ad un dominio

## Contesto

Internet è un'interconnessione di reti, spesso chiamate **domini**. Un dominio può essere una piccola impresa con pochi router in un singolo edificio, una grande azienda con centinaia di router in diverse sedi, oppure un grande ISP che gestisce migliaia di router.

Per consentire a questi domini di scambiare informazioni di instradamento in modo efficiente, vengono utilizzate due classi di protocolli di instradamento:

- Protocolli di **instradamento dentro un dominio**.
    
    Questi protocolli hanno solitamente due obiettivi:
    
    - distribuire **informazioni di instradamento** corrispondenti al percorso più breve tra due router all'interno del dominio.
    - devono consentire ai router di **recuperare rapidamente in caso di guasti**.
- Protocolli di **instradamento tra domini**.
    
    Questi protocolli hanno l'obiettivo è distribuire informazioni di instradamento tra domini diversi, considerando ogni dominio come una "scatola nera" senza quindi sapere come sono fatti e i protocolli utilizzati al loro interno.
    

Una differenza molto importante tra i due riguarda le **politiche di instradamento:** All'interno di un singolo dominio, tutti i router sono considerati uguali e, quando sono disponibili più percorsi per raggiungere la destinazione, il percorso migliore può essere il percorso con il minor ritardo, il minor numero di hop o con la larghezza di banda più alta.

Quando si considera l'interconnessione di domini gestiti da organizzazioni diverse, questo non è più vero in quanto si vuole trovare il percorso **più economico** verso ciascuna destinazione in base a degli accordi economici fatti tra le organizzazioni.

## Routing dentro un dominio

Il routing dentro un dominio si riferisce ai protocolli e alle tecniche utilizzate per instradare i pacchetti all'interno di una singola rete amministrativa (un dominio).

Le reti di grandi dimensioni hanno spesso topologie interne complesse, con diverse sottoreti interconnesse da router interni al dominio.

I **router di confine** sono dei router che si possono interfacciare con l’esterno della rete in modo da inoltrare pacchetti da e verso altri domini.

## OSPF

OSPF (*Open Shortest Path First*) è uno dei protocolli di *routing Intradomain* più utilizzati.

Tale protocollo è una versione standardizzata del **routing link-state**, il quale è più reattivo nel recupero dai guasti rispetto a *distance vector*, ma genera un maggiore overhead di rete.

Dato che un dominio ha in genere un numero limitato di sottoreti, l'overhead generato è gestibile e quindi si ha un buon compromesso.

OSPF porta alcune modifiche rispetto al comune routing link-state:

- Il concetto di Area
- il supporto alle LAN

### Aree

la rete viene suddivisa in **aree.** Un'area è una parte fisicamente contigua della rete in cui sono presenti dei router, tale area è connessa ad altre aree tramite altri router.

Esistono quindi due tipi di router OSPF:

- **Router interni:** connessi solo ad altri router nella stessa area.
- **Router di confine:** connessi a router di aree diverse.

Esiste una speciale area detta **area zero** o ***backbone area***, che raccoglie tutti i router di confine e i router che non fanno parte di nessuna altra area. All’interno di un dominio si ha un'**unica area zero**.

![](https://i.ibb.co/fDKbXqD/image.png)

- R1, R3, R5, R4 sono **router interni** all’area 1
- R7, R8, R9, R10 sono **router interni** all’area 2
- RA, RB, RC sono **router di confine**
- RD è un **router interno** all’area 0

OSPF combina link-state e distance vector per ottimizzare le prestazioni e ridurre l’overhead:

- **All'interno di un'area** (non l’area 0), i router utilizzano il **routing link-state**
- **Tra le aree**, i router di confine utilizzano il **routing distance vector**

In questo modo ogni router di un’area non conosce la topologia delle altre aree ma sa come arrivarci (passando per il proprio router di confine).

### Supporto per le LAN

Se supponiamo di avere una area con questa situazione, in cui quattro router sono connessi ad uno switch

![](https://i.ibb.co/ZW6L8bD/image.png)

In cui supponiamo che R1 e R4 siano router di confine.

Un modo in cui OSPF potrebbe rappresentare questa area (con il routing link state) sarebbe una full mesh.

![](https://i.ibb.co/Mc0nDH9/image.png)

Questa situazione però crea la falsa percezione di percorsi multipli tra i router di confine.

in caso di **guasto dello switch**, tutti i link sarebbero rotti ma i router notando che il loro attuale percorso non funziona tenterebbero di usare altri percorsi che in realtà non esistono.

Per evitare ciò, OSPF permette di selezionare un **designated router**. Gli altri router esportano il proprio link state solamente al router designato e non a tutti i router.

Supponendo di nominare R1 a designated router, al posto di una full mesh si avrebbe una struttura di questo tipo

![](https://i.ibb.co/gmqBZ8x/image.png)

In questo modo si riduce il traffico generato dal link state e si velocizza il riconoscimento del fallimento dei link.



# Routing tra domini

Dopo aver visto il routing all’interno di un dominio parliamo del routing tra domini diversi, cioè tra reti gestite da entità amministrative diverse. Per questo scopo viene utilizzato un solo protocollo, chiamato BGP.

### Autonomous System (AS)

Quelli che fino ad ora abbiamo chiamato **domini** sono più comunemente detti **Autonomous system (AS)**, cioè è una collezione di reti controllate da una singola entità amministrativa (ISP, azienda, governo, università).

Ogni AS riceve un numero univoco che lo identifica, chiamato *autonomous system number* (ASN).

Ad ogni AS viene assegnata una quantità di indirizzi IP pubblici, che possono essere distribuiti e che saranno sotto il loro controllo.

Gli AS si dividono in due tipi principali:

- **Stub AS**: ricevono e mandano traffico ma non instradano il traffico tra altri AS. Nel grafo di internet possiamo immaginarli come le foglie.
    
    Possono essere **single-homed** (connessi a un solo AS) o **multi-homed** (connessi a più AS).
    
- **Transit AS**: instradano i dati tra AS.

## Connessioni tra AS

Gli AS devono connettersi per permettere agli host al loro interno di comunicare.

Diversamente dal routing interno, su internet non si cerca il percorso migliore da sorgente a destinazione, ma un percorso deciso in base a degli **accordi commerciali** fatti precedentemente.

Esistono due modi per connettere gli AS:

- **Private Peering**: Connessione diretta punto-punto tra due router di due AS diversi. I proprietari degli AS pagano solamente l’installazione dell'infrastruttura necessaria per la connessione mentre il transito del traffico tra loro è gratuito (non molto scalabile).
    
    ![](https://i.ibb.co/khCFPf7/image.png)
    
- **Internet Exchange Points (IXP)**: Data center condiviso dove gli AS collocano i propri router e si connettono tra loro. Gli AS dovranno pagare il servizio offerto.
    
    ![](https://i.ibb.co/8gWbLrb/image.png)
    

L’obiettivo di ogni AS è quello di pagare il meno possibile per le proprie transizioni di pacchetti, quindi di preferire l’instradamento verso un private peering quando possibile (anche se magari passando da un’altra strada sarebbe più veloce).

## BGP

BGP (*Border Gateway Protocol*) è l’unico protocollo di routing utilizzato dagli AS.

Il principio del routing è che i router si scambiano i prefissi delle reti che essi possono raggiungere, in questo caso però, non tutti i prefissi raggiungibili vengono esposti a causa delle relazioni commerciali. 

Ad esempio nell’immagine precedente del private peering, B potrebbe far passare il traffico destinato a C attraverso A, quindi non pagando ma piuttosto facendo pagare A, questo non deve succedere.

In generale:

- il cliente rivela al provider i propri prefissi e quelli dei propri clienti (non rivela quelle conosciute attraverso altri provider).
- il provider rivela al cliente tutti i prefissi che conosce.
- In una **relazione di peering**, un AS rivela all’altro solo i propri prefissi e quelli dei propri clienti (non rivela quelle conosciute attraverso altri provider).

![](https://i.ibb.co/vX3dpT4/image.png)

## Funzionamento di BGP

Ogni AS necessita di almeno un **router BGP (di bordo)** per annunciare i prefissi di rete agli altri AS.

I router di bordo, eseguono sia **BGP** che un protocollo di **routing interno dell'AS**, come OSPF, e utilizzano le informazioni ricevute per costruire una **tabella di forwarding** che utilizzerà per decidere dove mandare i pacchetti.

La **tabella di forwarding** è una struttura dati che **mappa** ogni **indirizzo di destinazione all'interfaccia** di uscita appropriata per raggiungere tale destinazione.

### Esempio

![](https://i.ibb.co/qCYmjKj/image.png)

Vediamo un esempio di una piccola rete Internet composta da diversi AS (ignoriamo per semplicità i possibili accordi commerciali).

Vediamo come la rete `10.150.0.0/24` viene propagata su internet:

1. Il router A (all’interno di AS150) annuncia il suo prefisso `10.150.0.0/24` e il percorso per raggiungerlo (`150`) al router D (all’interno di AS11)
2. Il router A (all’interno di AS150) annuncia il suo prefisso `10.150.0.0/24` e il percorso per raggiungerlo (`150`) al router B (all’interno di AS151)
3. Il router B (all’interno di AS151) propaga il prefisso `10.150.0.0/24`, aggiungendo se stesso al percorso (`151→150`), al router D (all’interno di AS11)
4. Il router D (all’interno di AS11) propaga il prefisso `10.150.0.0/24` aggiungendo se stesso al percorso per raggiungerlo (`11→150`) al router B (all’interno di AS151)

Nota a questo punto come i router utilizzano **split horizon** (infatti non ad un router le rotte che ha scoperto proprio tramite quel router) per evitare loop sul singolo link.

Inoltre il fatto di includere il **percorso completo** permette ai router di evitare di mandare prefissi ad un router se quel router è già all’interno del percorso, questo previene che si creino loop più lunghi di un singolo link.

1. Nell’AS11 ci sono 3 router di bordo. Facendo parte dello stesso AS essi devono essere sincronizzati, per farlo si utilizza una piccola variazione di BGP, chiamata **IBGP** (Internal BGP).
    
    In questo caso il router D annuncia ai router F ed E il prefisso `10.150.0.0/24` **senza aggiungere nulla al percorso** (rimarrà quindi `150`). Nota che in questo momento D ne ha due di percorsi per raggiungerlo, ma annuncerà solo il migliore che possiede.
    
2. Il router F (all’interno di AS11) propaga prefisso `10.150.0.0/24` aggiungendo se stesso al percorso per raggiungerlo (`11→150`) al router G (all’interno di AS3)
3. Il router E (all’interno di AS11) propaga prefisso `10.150.0.0/24` aggiungendo se stesso al percorso per raggiungerlo (`11→150`) al router C (all’interno di AS160)

### BGP (path vector) VS distance vector

BGP si basa sui principi del **routing distance vector**, ma con alcune differenze chiave:

- **Path Vector protocol:** Invece di annunciare solo la distanza dalla destinazione, BGP include l'intero percorso per raggiungerla.
- BGP non invia aggiornamenti regolari, ma solo quando si verificano cambiamenti nella rete o quando un vicino richiede esplicitamente un aggiornamento.
- Gli aggiornamenti BGP contengono informazioni solo su specifici prefissi che hanno subito un cambiamento, non sull'intera tabella di routing.

### Cambiamento alla rete

Nel caso un AS non hosti più un certo prefisso, esso manderà un messaggio di **withdraw** (ritiro) ai propri vicini, essi propagheranno il messaggio su tutta la rete rendendo così irraggiungibile quel prefisso.

Nel caso un link tra due AS si rompa, supponiamo il link tra A e D nell’esempio precedente.

D potrà fare due cose:

- mandare un messaggio di **withdraw** ai suoi vicini (B, E, F) dicendo di eliminare il percorso che passava attraverso di lui
- mandare un **update** ai suoi vicini (E, F) in cui annuncia un percorso alternativo che passa per B.

In questo caso D ha un percorso alternativo e quindi farà un update (a B non lo manderà perché il percorso alternativo comprende già B)

## Dettagli del protocollo

BGP si basa su connessione TCP sulla porta 179.

BGP utilizza **cinque tipi di messaggi** per comunicare con i suoi **peer** (il termine **peer** si riferisce a un router vicino nel grafo, indipendentemente dalla relazione commerciale tra i due AS):

- **Open:** Stabilisce la connessione BGP tra due router.
- **Update:** Trasferisce le informazioni di routing tra i peer BGP.
    
    Ad esempio segnalando prefissi da ritirare (withdraw), da annunciare o da modificare
    
- **Keepalive:** Verifica se i peer sono ancora raggiungibili.
- **Notification:** Notifica gli errori ai peer.
- **Route-refresh:** Richiedere di riannunciare dei prefissi.

## Path prepending

Il **Path Prepending** è una tecnica utilizzata per influenzare il percorso del traffico.

In sostanza, un AS può annunciare un prefisso di rete a un altro AS includendo più volte se stesso nel percorso in questo modo rende il percorso non voluto artificialmente più lungo, scoraggiando gli altri AS dal sceglierlo.

Consideriamo una rete di questo tipo con 6 AS

![](https://i.ibb.co/JzRtZ1b/image.png)

(di fianco alle frecce in blu sono segnati il numero di hop)

AS1 possiede due connessioni: una a 10Gb/s usata in condizioni normali e una di riserva a 1Gb/s.

In condizioni normali, si desidera che il traffico utilizzi la connessione a 10Gb/s. 

Però AS2, AS4 utilizzerebbero quasi sicuramente il link a 1Gb/s dato che fanno meno salti (AS6 potrebbe utilizzare entrambi i link in modo alternato con una probabilità equa).

Per forzare ad usare il link più veloce, l'AS1 può annunciare il prefisso di rete alla connessione a 1Gb/s con un percorso "allungato" tramite il **prepending**. Gli altri AS, vedendo un percorso più lungo, preferiranno la connessione a 10Gb/s.

![](https://i.ibb.co/q1PLscG/image.png)

AS1 annuncia quindi ad AS2 che il percorso per raggiungerlo è lungo 6 hop (ripetendo se stesso 6 volte nel percorso)

AS6 propaga ad AS4 il percorso migliore che ha, il quale li propagherà a sua volta a AS2 che otterrà quindi un percorso migliore (di 5 hop) rispetto a quello di 6 hop.

Se dovesse rompersi il link da AS5 a AS3:

![](https://i.ibb.co/9b1bPpR/image.png)

AS5 fa un withdraw su tutta la rete, annullando quindi i cammini che passavano verso il link rotto.

AS6 che era a conoscenza anche del percorso peggiore lo propaga ad AS5.

### BGP anycast

BGP Anycast, permette a più server di condividere lo stesso indirizzo IP. Questo è utile per servizi dove le richieste vengono indirizzate al server più vicino a livello geografico.

Esempio:

![](https://i.ibb.co/cbxyQnf/image.png)

Entrambi AS1 e AS6 annunciano lo **stesso prefisso**. In questo modo gli altri AS hanno un cammino per raggiungere 1 e uno per raggiungere 6 e utilizzeranno quello più vicino.

Nel caso un link si rompesse c’è quello di backup verso l’altro AS.

Possono esserci situazioni di questo tipo:

![](https://i.ibb.co/W0Yh6BL/image.png)

In questo caso AS7 ha AS1 e AS6 alla stessa distanza, potrebbe quindi mandare un pacchetto verso AS1 e il successivo verso AS6. Per questo motivo questo meccanismo non viene utilizzato per connessioni che mantengono uno stato (ad esempio connessioni TCP) ma con servizi dove ogni **richiesta è indipendente dalla precedente** (come DNS)



# Ethernet

**Ethernet**, è una famiglia di standard per le reti sviluppata a partire dagli anni 70. Oggi, Ethernet è utilizzato principalmente su cavi in rame e fibra ottica.

I cavi in rame sono formati da quattro coppie di cavi in rame intrecciati insieme. Esistono diversi tipi di cavi, in cui vengono usate diverse tipologie di schermatura per ridurre le interferenze:

- I cavi con **nessuna schermatura** sono chiamati **UTP** (*Unshielded Twisted Pair*).
- I cavi con una **schermatura singola** che racchiude tutte le coppie, sono chiamati **FTP** (*Foiled Twisted Pair*).
- I cavi con una schermatura che racchiude tutte le coppie e delle schermature dedicate ad ogni coppia, sono chiamati STP (*Shielded Twisted Pair*).

Gli standard Ethernet si sono evoluti nel corso degli anni per supportare velocità sempre più elevate.

In particolare i cavi si dividono per categoria (Cat 5, 6, 7, …) con performance differenti.

## Indirizzo MAC

L'**indirizzo MAC** (*Media Access Control*), che identifica una scheda di rete (NIC) a livello di datalink.

Un indirizzo MAC è composto da **48 bit**:

![](https://i.ibb.co/KGpk5Br/image.png)

- 24 bit per l'identificativo univoco dell'organizzazione che ha prodotto la NIC
    - 1 bit per il tipo (0 → indirizzo fisico (unicast), 1→ indirizzo logico (multicast))
- 24 bit univoci per la specifica NIC

Un indirizzo MAC dovrebbe quindi essere **globalmente univoco**.

Nota tecnica: Ethernet codifica le stringhe (tra cui l’indirizzo) **invertendo l'ordine dei bit su ogni byte**: avendo quindi il bit meno significativo per primo.

Ciò significa che l'indirizzo MAC `12-34-56-78-9A-BC` viene trasmesso come `01001000 00101100 01101010 00011110 01011001 00111101` (ogni coppia viene convertita in binario e invertita).

Un indirizzo MAC è unicast se il suo primo byte è pari, cioè la seconda cifra esadecimale della prima coppia è `0,2,4,6,8,A,C,E`.

Gli indirizzi MAC possono essere estesi per diventare **EUI-64** (Extended Unique Identifier a 64 bit) e utilizzati come ID interfaccia in un indirizzo IPv6.

## Header di un frame ethernet

![](https://i.ibb.co/qp5NTF2/image.png)

- **Indirizzo di destinazione (48 bit):** specifica l'indirizzo MAC della scheda di rete del destinatario
- **Indirizzo di origine (48 bit):** specifica l'indirizzo MAC della scheda di rete del mittente
- **Length/EtherType (16 bit):** specifica la lunghezza del payload del frame, ovvero i dati che vengono trasportati dal frame. Ma viene usato anche per indicare quale protocollo di livello superiore viene utilizzato.
- **Payload e padding (46-1500 byte):** Contiene i dati che vengono trasportati dal frame. Se il payload è inferiore a 46 byte, viene aggiunto del padding per raggiungere la dimensione minima.
- **CRC (32 bit):** Contiene una checksum che viene utilizzata per verificare l'integrità del frame.

Inizialmente, l'header Ethernet includeva un campo chiamato **EtherType**, che specificava il protocollo di livello superiore. Ma questo è stato poi sostituito con il campo length.

Per risolvere questa mancanza, è stato introdotto un nuovo livello: il **livello LLC (Logical Link Control)** il cui scopo era indicare il protocollo di livello superiore. Il livello datalink fu quindi suddiviso in due sottolivelli: il sottolivello MAC e il sottolivello LLC.

**Nella versione attuale di Ethernet quei 16bit vengono utilizzati per interpretare entrambe le cose** (length e EtherType). Di conseguenza, il livello LLC ha perso la maggior parte della sua utilità e viene raramente utilizzato per le reti ethernet.

## Switch Ethernet

Gli **Switch Ethernet** sono dispositivi che estendono una rete interconnettendo più terminali.

![](https://i.ibb.co/3TXW8Gz/image.png)

Gli switch sono in grado di instradare il traffico sulla porta corretta.

- Su reti semplici in cui si ha un solo switch a cui sono connessi i terminali, si usano algoritmi di *backward learning*:
    
    ```python
    # Arrival of frame F on port P at time T;
    # Table : addr -> [port, time];
    # Ports : list of ports
    src = F.SourceAddress
    dst = F.DestinationAddress
    Table[src] = (P, T)  # update the table
    if is_unicast(dst):
        if dst in Table:
            forward_frame(F, Table[dst][0])
            return
    # multicast or broadcast destination
    for o in Ports:
        if o != P:
            forward_frame(F, o)
    ```
    
    Questo algoritmo prevede che lo switch memorizzi in una tabella l'indirizzo MAC di origine di un frame e la porta su cui è arrivato. Quando arriva un frame con un indirizzo MAC di destinazione noto, lo switch lo inoltra sulla porta corrispondente. Se l'indirizzo di destinazione non è noto, il frame viene inoltrato su tutte le porte tranne quella di arrivo.
    
    La tabella viene periodicamente pulita dagli indirizzi non utilizzati da un certo intervallo di tempo.
    
- In reti più complesse, con più switch in cascata, viene implementato l'algoritmo **Spanning Tree** per evitare loop.

## Spanning Tree Protocol (STP)

Lo **Spanning Tree Protocol (STP)**, è stato proposto per risolvere il problema dei loop che possono verificarsi in reti con switch Ethernet multipli.

**Problema dei loop**: Quando una rete con switch multipli si avvia, le tabelle degli indirizzi MAC sono vuote. Se un host invia un frame a un altro host sconosciuto, il primo switch, non sapendo dove si trova l’host, inoltra il frame su tutte le porte. Il secondo switch, ricevendo il frame, lo inoltra a sua volta su tutte le porte, e così via, creando un loop infinito (i frame non hanno un campo come TTL).

STP risolve questo problema creando un albero di copertura (*spanning tree*) che collega tutti i dispositivi della rete senza creare loop. Si assume che ogni switch abbia un ID univoco di 64 bit, di cui i primi 16 bit sono configurabili dall'amministratore e i restanti 48 sono l’indirizzo MAC.

Lo switch con l'ID più basso diventa la **radice** dell'albero.

Le porte dello switch possono essere in tre stati:

- **root**: porta che offre il percorso a costo minore verso la radice.
- **designated**: porta che inoltra il traffico verso una determinata sottorete.
- **blocked**: porta che non inoltra traffico per prevenire loop.

Quando l’albero è formato si deve avere che:

- lo switch radice ha tutte le porte in stato *designated*
- tutti gli altri switch devono avere almeno una porta in stato *root* e le rimanenti in stato *designated* o *blocked*

### **Funzionamento**

- Ogni switch invia periodicamente un frame **Bridge Protocol Data Unit (BPDU)** su tutte le sue porte.
    
    $$
    BPDU=<RootID, Cost, SenderID, p>
    $$
    
    Il BPDU contiene informazioni come:
    
    - `RootID` l'ID dello switch radice
    - `Cost` il costo del percorso alla radice
    - `SenderID` l'ID di chi ha generato il BPDU
    - `p` il numero della porta dello switch mittente da cui è uscito il BPDU
    
    I BPDU vengono inviati solo agli switch adiacenti e non vengono inoltrati ulteriormente.
    
    Inizialmente ogni switch utilizza il proprio ID come `RootID` impostando il costo a zero.
    
    La costruzione dell’albero si basa sull’ordinare i BPDU in modo lessicografico:
    
    Si confrontano prima le `RootID`, se sono uguali si confrontano i `Cost`, se sono uguali si confrontano i `SenderID`, se sono uguali si confrontano le `p`.
    
- Quando uno switch A riceve il BPDU dallo switch B, memorizza il *root priority vector* `Vq` per la porta su cui ha ricevuto il BPDU, il `Vq` è composto da:
    
    $$
    Vq=<RootID, c, SenderID, p, q>
    $$
    
    - `RootID`
    - `c = Cost + Cab` (dove `Cab` è il costo del link da B ad A)
    - `SenderID`
    - `p`
    - `q` il numero della porta dove è stato ricevuto il BPDU
    
    Lo switch memorizza in una tabella il più recente *root priority vector* per ogni porta.
    
- A questo punto lo switch A compara in modo lessicografico `Vq` con il proprio BPDU, se `Vq` è minore allora:
    - lo switch A decide che B è la radice dell’albero e utilizzerà l’ID di B nel campo `RootID` nei BPDU che genera da ora in poi. Inoltre la porta `q` entra nello stato *root* (A diventa un nodo figlio di B)
- Per determinare lo stato delle altre porte lo switch A compara anche in modo lessicografico il BPDU ricevuto con il BPDU proprio:
    - se il proprio BPDU è minore, la porta `q` entra nello stato *designated* (B diventa un nodo figlio di A)
    - se il BPDU ricevuto è minore, la porta `q` entra nello stato *blocked* (B è un fratello si A e potrebbe esserci un loop)

Si può riassumere l’utilizzo delle porte in base al loro stato in questa tabella

| Stato | Riceve BPDU? | invia BPDU? | Può inoltrare traffico dati? |
| --- | --- | --- | --- |
| **Blocked** | Sì | No | No |
| **Root** | Sì | No | Sì |
| **Designated** | Sì | Sì | Sì |

Lo switch radice avrà tutte le porte *designated*, esso continuerà a mandare BPDU su tutte le sue porte.

I BPDU verranno ricevuti dai switch figli nelle loro porte *root* i quali computeranno il proprio BPDU e lo invieranno dalle proprie porte *designated.*

Gli switch figli riceveranno a loro volta i BPDU sulle proprie porte *root* e così via…

Il processo si **ripete costantemente**, aggiornando lo stato delle porte in base ai BPDU ricevuti.

Se un switch non riceve più BPDU da un vicino, riavvia il protocollo STP per ricalcolare l'albero.

## Legame tra livello di rete e livello datalink

Vediamo come connettere il livello di rete e il livello datalink.

Il traffico di rete è suddiviso in pacchetti IP, sia per la comunicazione all'interno della stessa rete sia tra reti diverse.

La comunicazione a livello di rete si basa sugli **indirizzi IP**, ma, a livello datalink si utilizzano gli **indirizzi MAC**, che identificano in modo univoco le interfacce fisiche degli host.

Quando un host vuole inviare pacchetti a un determinato indirizzo IP, è necessario che conosca l'indirizzo MAC del destinatario affinché il livello datalink possa funzionare correttamente.

Ci sono due scenari possibili:

- **indirizzo IP di destinazione locale**: Quando l'IP di destinazione si trova nella stessa rete fisica del mittente, il pacchetto può essere inviato direttamente tramite uno switch. In questo caso, il mittente deve scoprire l'indirizzo MAC associato all'IP di destinazione.
- **indirizzo IP di destinazione remoto**: Quando l'IP di destinazione si trova in una sottorete diversa, il pacchetto deve essere inviato al router che funge da gateway per la rete. Il mittente deve conoscere l'indirizzo MAC del router.

I protocolli **ARP** e **DHCP** vengono utilizzati per risolvere questi problemi.

## Protocollo ARP

L'**Address Resolution Protocol (ARP)** è un protocollo che consente agli host di **risolvere gli indirizzi IP in indirizzi MAC** all'interno della stessa sottorete, ogni host mantiene una tabella ARP che le varie associazioni tra IP e MAC.

Quando un host desidera scoprire l'indirizzo MAC del destinatario, invia un messaggio ARP in broadcast contenete il proprio MAC, il proprio IP e l’IP di cui si vuole ottenere il MAC. L’host che possiede l'indirizzo IP specificato risponde con un **messaggio ARP unicast** diretto all'indirizzo MAC del mittente, fornendo il proprio indirizzo MAC. 

Il mittente può quindi aggiornare la propria **tabella ARP.**

## Protocollo DHCP

Il **Dynamic Host Configuration Protocol (DHCP)** è un protocollo utilizzato per configurare automaticamente i parametri di rete degli host al loro avvio, tra cui:

- Un indirizzo IP utilizzabile nella rete locale
- L'indirizzo IP del router che funge da gateway per la rete
- L'indirizzo IP del server DNS

DHCP è un protocollo client-server basato su UDP, che opera sulla porta 67.

![](https://i.ibb.co/5LWKwrY/image.png)

Il processo inizia con il client che invia un messaggio di **DHCP Discover** in broadcast all'indirizzo `255.255.255.255`. In questo messaggio, il client:

- Imposta l'indirizzo IP sorgente a `0.0.0.0`
- Utilizza il proprio indirizzo MAC come indirizzo MAC sorgente
- Include un ID client, generalmente l'indirizzo MAC

I **server DHCP** presenti nella rete possono rispondere con un messaggio di **DHCP Offer**. Questo messaggio contiene:

- L'ID client, estratto dal messaggio *DHCP Discover*
- L'indirizzo IP che il server sta offrendo al client
- La subnet mask della rete
- La durata del *lease* dell'indirizzo IP
- L'indirizzo IP del server DHCP

Il client può ricevere più offerte da diversi server DHCP. Il client sceglie un'offerta e invia un messaggio di **DHCP Request** in broadcast (ma il body del messaggio include l'indirizzo IP del server), richiedendo l'indirizzo IP offerto dal server prescelto.

Il server DHCP corrispondente all’indirizzo presente nel body, invia un messaggio di **DHCP Acknowledgment** direttamente all'indirizzo IP richiesto dal client. Questo messaggio:

- Conferma l'assegnazione dell'indirizzo IP al client
- Specifica la durata del *lease*
- Fornisce eventuali altre informazioni di configurazione, come l'indirizzo del default gateway e l'indirizzo del server DNS

### Esempio di uso di ARP e DHCP

Quando l’host `192.168.1.1` vuole comunicare con `1.2.3.4`:

1. Si rende conto che `1.2.3.4` non fa parte della sua rete
2. L’indirizzo MAC di destinazione deve quindi essere quello del gateway
3. l’indirizzo IP del gateway che è conosciuto grazie a DHCP
4. Se l’indirizzo MAC del gateway non è presente nella tabella ARP, allora viene fatta una risoluzione ARP per ottenere il MAC corrispondente all’IP del gataway
5. una volta ottenuto il MAC del gateway, si manda il frame con il MAC del gateway e l’indirizzo ip `1.2.3.4`



# Wi-Fi

Descriviamo adesso lo standard **IEEE 802.11**, comunemente noto come **Wi-Fi**.

Questo standard, descrive il livello fisico e di collegamento per le **comunicazioni wireless**.

Lo standard 802.11 è in continua evoluzione. Ogni aggiornamento utilizza una lettera o una coppia di lettere per identificarlo.

La **Wi-Fi Alliance** è una organizzazione che da dei nomi commerciali alle versioni Wi-Fi.

| Versione dello Standard | Anno | Frequenza (GHz) | Velocità Massima (Mbps) | Nome Commerciale |
| --- | --- | --- | --- | --- |
| 802.11 | 1996 | 2.4 | 2 |  |
| 802.11b | 1999 | 2.4 | 11 |  |
| 802.11a | 1999 | 5 | 54 |  |
| 802.11g | 2004 | 2.4 | 54 |  |
| 802.11n | 2009 | 2.4 / 5 | 600 | Wi-Fi 4 |
| 802.11ac | 2013 | 5 | 6700 | Wi-Fi 5 |
| 802.11ax | 2020 | 1 - 7.125 | 9600 | Wi-Fi 6 |
| 802.11be | 2024 | 2.4, 5, 6 | 46000 | Wi-Fi 7 |

## Livello fisico

Il livello fisico del Wi-Fi si occupa della trasmissione e ricezione dei segnali radio.

### **Frequenze**

Il Wi-Fi opera principalmente su frequenze libere (senza licenza), chiamate bande ISM (*Industrial, Scientific and Medical*).

Le bande di frequenza più utilizzate sono **2,4 GHz** (precisamente nel range `2,4 - 2,4835` GHz) e **5 GHz** (precisamente nel range `5,17 - 5,33` GHz; `5,49 - 5,71` GHz).

Le bande ISM sono soggette a interferenze da altri dispositivi che operano sulle stesse frequenze.

### **Canali**

Le bande di frequenza sono suddivise in canali, ovvero sottobande che possono essere utilizzate (quasi) indipendentemente tra loro. La banda a **2,4 GHz ha 13 canali**, mentre la banda a **5 GHz ne ha 23** (il numero varia a seconda del paese e delle normative).

Ad esempio possiamo rappresentare i canali a 2.4 GHz nel seguente modo:

![](https://i.ibb.co/ZcgxK5d/image.png)

Notiamo come ogni canale è sovrapposto ad altri, solo 3 canali (1, 6, 11) possono essere usati contemporaneamente senza farsi interferenza.

Nel caso più dispostivi si trovino ad usare canali sovrapposti, ci sono dei meccanismi che permettono loro di coordinarsi per evitare di comunicare nello stesso momento.

Avere un numero di canali più alto significa che ci possono essere più dispositivi vicini che possono comunicare senza farsi interferenza.

Gli standard più recenti consentono **l'aggregazione dei canali** (*channel bonding*). L'aggregazione dei canali aumenta la larghezza di banda disponibile (aumentando la velocità di trasmissione), ma aumenta anche la probabilità di interferenze con le reti vicine.

In questo modo se la rete non ha altre reti vicine può sfruttare la piena banda. Se invece ci sono altre reti vicine la banda viene suddivisa tra loro.

![](https://i.ibb.co/K2TskGv/Screenshot-1-1.jpg)

## Livello datalink

Esistono tre tipi di frame Wi-Fi:

- **Management frame**: non trasportano traffico dati, ma gestiscono le comunicazioni ad esempio l’autenticazione, i frame di associazione e i frame beacon.
- **Control frame:** gestiscono l'accesso al canale, come i frame RTS/CTS e i frame ACK.
- **Data frame:** trasportano il traffico dati.

Un **BSS** (*Basic Service Set*) è l'unità più piccola di una rete Wi-Fi, il modello più comune di BSS è quello in cui c’è un **Access Point** **(AP)** con alcuni terminali connessi. Tutto il traffico viene scambiato tra terminali e AP, i terminali non comunicano direttamente tra loro.

Un BSS è identificato da un **BSSID**, un numero di 48 bit che è l'indirizzo MAC dell'AP.

Ogni AP può scegliere un **SSID (Service Set ID)**, un nome testuale per riconoscere il BSS che può essere configurato dall'amministratore di rete (è il nome che si legge quando ci vogliamo connettere alla rete Wi-Fi).

Più BSS possono essere collegati tramite un **DS** (*Distribution Service*), un cavo di rete tra gli AP.

In questo caso si parla di **ESS** (*Extended Service Set*). I terminali connessi a un ESS si trovano normalmente sulla stessa sottorete e solitamente gli AP appartenenti all’ESS condividono lo stesso SSID.

![](https://i.ibb.co/0Rj0ZZyk/ESS.png)

### Entrare in una rete

Ogni AP emette periodicamente dei **frame beacon** contenenti informazioni sulla rete (tra cui BSSID e SSID). Un terminale che desidera unirsi alla rete deve eseguire tre passaggi:

- **scansione**: Il terminale può eseguire una **scansione passiva**, ascoltando i beacon su ciascun canale, o una **scansione attiva**, inviando un frame `Probe-Request` su tutti i canali, a cui gli AP rispondono con un `Probe-Response`.
- **autenticazione**: per creare un canale sicuro tra il terminale e la rete
- **associazione**: per associare il terminale allo specifico AP della rete. Se successivamente il terminale si sposta verso una altro AP è solo necessario fare l’associazione e non l’autenticazione

Nelle prime versioni di Wi-Fi autenticazione e associazione erano molto insicure, e per retrocompatibilità le versioni più recenti le fanno comunque ma senza una reale utilità perché il **processo di autenticazione vero e proprio viene fatto successivamente con meccanismi più sicuri**.

## Data frame

L’header di un frame di dati Wi-Fi è composto come segue

![](https://i.ibb.co/K0Vm6rD/image.png)

- **Frame control**: indica il tipo di frame (Management, Control, Data) e anche il particolare sottotipo
- **Duration**: usato per la ritrasmissione del frame
- **Tre indirizzi**: sono indirizzi MAC rispettivamente dell’AP, del terminale sorgente e del terminale di destinazione
- **Sequence control**: identifica il frame

Quando pacchetti IP vengono incapsulati in frame Wi-Fi viene utilizzato **l’header LLC** che indica quale tipo di pacchetto viene usato al livello di rete (IPv4, IPv6, …).

## Access control

Il livello datalink ha l’obiettivo di coordinare l’accesso al canale condiviso per evitare collisioni.

Una **collisione** si verifica quando un **ricevitore** riceve due o più frame contemporaneamente, impedendo una corretta ricezione di questi. 

Il mittente non è a conoscenza delle collisioni perché **avvengono sul lato del ricevitore**. Per confermare la consegna frame, il ricevitore invia un ACK. Se un mittente non riceve un ACK entro un certo tempo, presume che ci sia stata una collisione.

Per evitare le collisioni si usa il **Carrier Sensing**, cioè il terminale, prima di trasmettere, verifica se qualcun altro sta già trasmettendo. In particolare il Wi-Fi usa **CSMA/CA (Carrier Sensing Multiple Access / Collision Avoidance)**, cioè coordinare l’**accesso multiplo** alla stessa risorsa (il canale) basato sul *carrier sensing* e che cerca di evitare le collisioni.

Il trasmettitore deve quindi essere in grado di capire qual è l’attuale **stato del canale**: *idle* (libero) oppure *busy* (occupato).

L'obiettivo del livello MAC è di **massimizzare l’efficienza:** massimizzare il tempo in cui il canale è occupato rispetto a quando è libero.

Esistono due modalità coordinare l’accesso: **PCF (Point Coordination Function)** e **DCF (Distributed Coordination Function)**:

- Il **PCF** è una modalità di coordinamento in cui l'AP assegna intervalli di tempo per la trasmissione a ciascun terminale. Questo approccio è simile al TDMA e non viene quasi mai utilizzato.
- Il **DCF** implementa uno schema di accesso casuale simile ad ALOHA.

## CSMA/CA

Vediamo come funziona il coordinamento CSMA/CA, che usa DCF, costruendo il livello MAC step-by-step.

Un host che vuole trasmettere ascolta il canale. Se il canale è libero, aspetta un intervallo di tempo **DIFS** (DCF Inter Frame Space) per vedere se qualcun altro vuole trasmettere prima.

- Se qualcuno trasmette prima, allora leggo nell’header del frame il campo `duration` che mi indica per quanto tempo il canale rimarrà occupato per quel frame.
    
    Nel campo `duration` di un frame, si tiene in considerazione sia il tempo di trasmissione che il tempo necessario per ricevere l’ACK dal destinatario.
    
- Se il canale rimane libero per la durata del DIFS, l’host trasmette il suo frame.

Il ricevitore, dopo aver ricevuto il frame e averne verificato il checksum, attende un breve intervallo di tempo chiamato **SIFS** (Short Inter Frame Space) e invia un ACK se il pacchetto non contiene errori.

![](https://i.ibb.co/NYNBY9d/image.png)

Notare come dal momento della trasmissione si ha un **tempo di volo** (*flight time*) che serve ai dati per arrivare fisicamente al ricevitore.

Ogni frame include nell'header il campo `duration` che contiene il **NAV** (*Network Allocation Vector*) che specifica la durata della trasmissione del pacchetto e la ricezione dell'ACK. Tutti i terminali nel raggio di ricezione del frame, leggendo l'header, conoscono il valore di NAV e sanno che non potranno trasmettere per quel periodo di tempo.

Vediamo un esempio con **due trasmettitori**:

![](https://i.ibb.co/2k777sm/image.png)

In questa situazione i dati di T2 sono arrivati a T1 prima che esso finisca il suo DIFS, quindi T1 si mette in attesa che termini lo scambio dei dati.

Se però i due terminali decidono di **trasmettere quasi contemporaneamente**, a **causa del tempo di volo**, i dati del primo che trasmette arrivano all’altro dopo che il suo DIFS è finito (cioè quando $\delta <$ *flight time*), causando una **collisione**.

![](https://i.ibb.co/mywrp6v/image.png)

Vediamo come T2 inizia a trasmettere e mentre i dati stanno per raggiungere T1, anche T1 inizia a trasmettere, causando così una collisione sul ricevitore R.

Il ricevitore si accorge della collisione quando calcolerà il CRC, e di conseguenza non manderà nessun ACK.

Questo è un caso abbastanza sfortunato perché il tempo di volo solitamente è nell’ordine dei nano secondi.

Vediamo un caso di collisione più probabile, con **tre trasmettitori**:

![](https://i.ibb.co/XVQrYLh/image.png)

In questo caso T2 trasmette, T1 e T3 ricevono in tempo il frame e decidono di ritardare la loro trasmissione in base al capo `duration` del frame che hanno ricevuto. Quando però arriva il loro momento di trasmettere, trasmettono immediatamente entrambi causando una collisione sul ricevitore.

Questa situazione è molto comune in reti LAN in cui tutti gli host ricevono i frame praticamente nello stesso momento.

Per evitare la sincronizzazione sulle ritrasmissioni, si introduce un **tempo di attesa casuale**:

Quando il canale ritorna ad essere libero, ogni trasmettitore attende un tempo casuale chiamato **backoff** in un intervallo `[0, CW]` (CW sta per *Collision Window*).

- Se il timer di un trasmettitore scade e il canale è libero, la stazione può trasmettere.
- Se un trasmettitore riceve un frame prima che il suo timer scada, il canale diventa occupato e il trasmettitore **mette in pausa il timer** fino a quando il canale non torna libero.

Vediamo come funziona nella seguente immagine:

![](https://i.ibb.co/SmQCQkM/image.png)

In questo caso T2 trasmette, T1 e T3 ricevono in tempo il frame e attendono il tempo specificato in `duration` più un tempo random. T1 sceglie un tempo minore e quindi trasmette prima, T3 quando riceve il frame di T1 mette in pausa il suo timer e attende la `duration`, appena si libera il canale fa proseguire il suo timer e quando scade inizia a trasmettere.

In questo modo le **collisioni** sono ridotte ma sono **comunque possibili** (ad esempio se l’intervallo di tempo tra i timer casuali è minore del tempo di volo).

In generale i **timer casuali riducono le collisioni, ma sprecano anche risorse e riducono l’efficienza**.

### Binary exponential backoff

Con **tanti trasmettitori bisogna aumentare la finestra** `[0, CW]` su cui vengono scelti i tempi random in modo da ridurre la possibilità che due trasmettitori scelgano tempi vicini.

Allo stesso modo con **pochi trasmettitori** si vuole avere una **finestra piccola** per evitare attese inutili.

Per implementare questo meccanismo in modo dinamico si utilizza una strategia chiamata ***Binary exponential backoff.***

Ogni volta che una trasmissione fallisce (non viene inviato l’ACK) il mittente cambia la propria grandezza della finestra, in particolare:

$CW$ $CW$$CW_i = 2 \cdot CW_{i-1}$ fino a un massimo di $CW_{\max}$

Inizialmente il valore viene impostato ad un valore minimo $CW_1 = CW_{\min}$.

($C_{\min}$ e $C_{\max}$ sono dei parametri definiti dal sistema)

Dopo una trasmissione riuscita, $CW$ viene resettato a $CW_{\min}$.

## **Il Meccanismo RTS/CTS**

C’è una situazione particolare in cui Il meccanismo appena descritto non funziona, cioè il caso in cui i due terminali non ricevono i frame degli altri (a causa di un ostacolo fisico che non permette alle onde elettromagnetiche di passare) e quindi **non riescono a sapere quando il canale è occupato**.

![](https://i.ibb.co/CmJmhCd/image.png)

In questa situazione entrambi pensano che il canale sia libero e trasmettono, causando collisioni sul ricevitore.

Per risolvere il problema DCF utilizza un meccanismo **RTS/CTS (Request to Send/Clear to Send)**:

Se A vuole trasmettere, invia prima un messaggio RTS. Se l’Access Point non sta comunicando con nessun altro allora invia un messaggio CTS in cui dà il permesso di trasmettere, e contemporaneamente comunica a tutti gli altri nodi della rete che per una certa durata NAV il canale sarà occupato.

 L'RTS infatti contiene un NAV che copre la durata dell'intera trasmissione dati (incluso l’ACK).

Anche se non tutti i terminali ricevono l'RTS, tutti riceveranno invece il CTS dall'AP e quindi sapranno che il canale è occupato per il tempo specificato dal NAV.

![](https://i.ibb.co/XXgZwH1/image.png)

RTS/CTS aumenta il tempo di attesa prima della trasmissione, riducendo il bit rate. Viene quindi utilizzato principalmente per l'invio di frame di grandi dimensioni.





