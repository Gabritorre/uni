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
