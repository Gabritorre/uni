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
