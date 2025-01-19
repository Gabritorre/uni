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
