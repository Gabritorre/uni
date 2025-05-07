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
