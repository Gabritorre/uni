# Progetto CPU Mips-like multi ciclo

Per risolvere le problematiche della CPU a singolo ciclo Adottiamo una CPU multi ciclo in cui le istruzioni vengono eseguite in più di un ciclo. Così facendo abbiamo che 

- Possiamo impostare un tempo di **clock più corto**
- Le **istruzioni più brevi** ci metteranno **meno tempo** ad essere eseguite (nel singolo ciclo tutte le istruzioni ci mettevano lo stesso tempo)
- **Minore replicazione di risorse** dato che possono essere impiegate in cicli diversi per la stessa istruzione.
- Abbiamo dei **registri aggiuntivi** che servono a memorizzare i risultati parziali tra un ciclo e l'altro.

Questa volta non abbiamo bisogno di due memorie perché la fase di **lettura** e la fase di **scrittura** avvengono in **cicli diversi**

Inoltre ora l'ALU viene utilizzata sia aggiornare il Program Counter sia per calcolare l'indirizzo dei salti


## Sequenza di esecuzione

L'obiettivo generale è quello di far lavorare più componenti contemporaneamente e di anticipare del lavoro che eventualmente verrebbe richiesto nei cicli futuri, quindi ci saranno diverse operazioni che verranno fatte in contemporanea.

1. *fetch* dell'istruzione **e** incremento del PC 

	l'incremento del PC viene fatto per far lavorare l'ALU che altrimenti avrebbe fatto un ciclo senza lavorare. Nonostante questo, l'utilizzo del nuovo PC potrebbe entrare in gioco diversi cicli dopo perché bisogna completare tutti i cicli necessari per completare l'istruzione corrente prima di passare alla prossima.
2. Decodifica dell'istruzione **e** lettura dei registri **e** calcolo del branch address
	
	- viene decodificata l'istruzione mandando il campo *op* al controllo che si occuperà di organizzare i segnali di controllo per quella specifica istruzione
	- Vengono letti i valori dei registri interessati dall'istruzione (*rs* e *rt* per le R-type per esempio)
	- Il calcolo del *branch address* viene sempre fatto per impegnare l'ALU, grazie a questo calcolo nel caso l'istruzione decodificato fosse una *beq* nel ciclo successivo l'indirizzo a cui saltare sarebbe già stato calcolato.

3. Esecuzione di R-type **o** Calcolo indirizzo di memoria **o** Completa *beq* **o** completa *jump*
	
	In questa fase può:
	-  essere eseguita una R-type (sum, sub, and, or, slt)
	- venir calcolato l'indirizzo di memoria (ram) sul quale poi andare a scrivere il risultato (per una sw) oppure sul quale andare a leggere (per una lw)
	- venir completata la *beq* aggiornando il PC con l'indirizzo calcolato nel ciclo precedente
	- venir completata una jump aggiornando il PC con l'indirizzo letto nel ciclo precedente

4. Accesso alla memoria **o** completa R-type

	In questa fase abbiamo che:
	- l'accesso alla memoria il cui indirizzo è stato calcolato nel ciclo precedente. Serve sia per *lw* che per  *sw*, quest'ultima però viene completata in questo ciclo dato che scriverà in quel indirizzo e non deve fare altro.
	- può venir completata una R-type: se nel precedente ciclo veniva svolto il calcolo effettivo in questo viene scritto il risultato in un registro.

5. Write back
	
	Questo passaggio serve solo per la *lw*: dopo che ha letto il contenuto in memoria nel ciclo precedente, ora deve scrivere in un registro quel contenuto


### Quantità cicli per istruzione

Abbiamo quindi che ogni istruzione per essere eseguita completamente necessita dai 3 ai 5 cicli, in particolare:

|n. cicli | istruzione |
|--|--|
| 3 | beq - jump |
| 4 | R-type (sum, sub, and, or, slt) - sw |
| 5 | lw |


## Controllo

Tutti i segnali di controllo questa volta dipendono non solo dal tipo di istruzione da eseguire ma anche dal passo specifico in cui siamo di quella istruzione.

Quindi i segnali di controllo cambieranno ad ogni ciclo di clock, sarà quindi un **circuito sequenziali**

Particolare attenzione necessita i segnali di controllo sul PC che devono gestire il suo aggiornamento in caso di:

- PC = PC + 4
- beq
- jump

tenendo conto che PC = PC + 4 va fatto quando si presenta una nuova istruzione e non ad ogni ciclo


## Resoconto finale

Se proviamo a confrontare i millisecondi impiegati per le istruzioni nel caso della nostra CPU a singolo ciclo contro quella a multi ciclo notiamo che i tempi non sono completamente migliori nel caso della multi ciclo (beq e jump più veloci, R-type stesso tempo, lw più lenta).

Questa comparazione però non è comparabile con una CPU reale, una CPU reale ha un set di istruzione molti più vasto di quello considerato da noi e soprattutto sono presenti istruzioni molti più lunghe della *lw*. Quindi nella realtà la CPU multi ciclo porta un notevole miglioramento dei tempi di esecuzione rispetto alla CPU a singolo ciclo.

Ulteriori miglioramenti sono data dalla CPU pipeline.
