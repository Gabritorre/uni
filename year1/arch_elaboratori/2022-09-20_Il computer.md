# Il computer

Le macchine moderne sono basate sulla macchina di Von Neumann formata da:
![](https://i.ibb.co/wLSs9J6/von-neamann.png)

- **CPU**: è la parte elaborativi divisa in più parti:
	- La CU (control unit): coordina tutte le operazioni che deve svolgere la CPU.
	- La ALU (Arithmetic Logic Unit): è la parte che svolge effettivamente le operazioni.

		Il processore esegue le operazione che sono scritte in modo a lui comprensibile: possiede quindi un ISA (Instruction Set Architecture) cioè un insieme di istruzione povere che il processore è in grado di comprendere.

- **Memoria**: Indica la memoria RAM, cioè quel posto dove sono presenti i dati che il processore sta lavorando.
	Si tratta di una memoria volatile, per cui una volta tolta l'alimentazione tutti i dati al suo interno vengono persi.

- **Intput / Output**: periferiche e dispositivi che possono interagire con l'esterno e che quindi possono ottenere o inserire dei dati: tastiera, dischi fissi, rete, stampante, CD, ecc...
- **Bus**: canale di comunicazione che permette di trasferire i dati fra i diversi componenti dell'elaboratore. Sono di tre tipi: address bus, control bus e data bus.

Oltre a CPU, RAM, periferiche di I/O un computer è formato da:
- Motherboard (con i relativi bus e porte per la connettività (ethernet, USB, ecc...))
- Alimentatore
- Disco di archiviazione (HDD o SSD). A differenza della memoria RAM questi non sono volatili per cui mantengono i dati nel tempo anche senza alimentazione, d'altra parte sono molto più lenti di una memoria RAM.

Ed altre componenti opzionali:
- Scheda video
- Scheda di rete
- Scheda audio
- Case
- Lettore disco

## Astrazione

l'Astrazione è un concetto che serve a semplificare l'utilizzo del computer agli utenti: cioè dato che un computer è formato e funziona attraverso meccanismi molto complessi, una persona per poter utilizzare il computer non deve per forza conoscere questi complessi meccanismi.

L'utente deve vedere il computer come una entità unica rispetto a vederlo come un insieme di componenti connessi tra loro.

L'interfaccia grafica è il livello di astrazione più esterno.

L'astrazione ha lo svantaggio di omettere alcuni dettagli nella fase di semplificazione.

### Livelli di astrazione
|lv.|          nome             |
|---|---------------------------|
| 4 | Linguaggi ad alto livello |
| 3 | Assembler                 |
| 2 | Sistema operativo         |
| 1 | Linguaggio macchina       |
| 0 | hardware / firmware       |


Le istruzione scritte in un linguaggio ad alto livello possono essere tradotti in linguaggio assembler il quale ha un corrispettivo diretto con il linguaggio macchina (i bit).

Quando un codice viene compilato da un compilatore si passa subito da linguaggio ad alto livello a linguaggio macchina (il codice eseguibile).

#### Il livello hardware e firmware

Le sequenze di bit vengono interpretate dai dispositivi hardware come impulsi elettrici (1 = acceso, corrente passa, 0 = spento, corrente non passa), attraverso questo meccanismo è possibile fare operazioni e salvare dati in memoria.

Il firmware si occupa di interpretare ed eseguire le sequenze del l'ISA (livello superiore)

#### Il livello linguaggio macchina
Sono un insieme di istruzioni facilmente interpretabili per il processore e spesso sono diverse da processore a processore.
Sono sostanzialmente stringhe di bit ben organizzate in **codici** e **operandi**:

- I codici sono le operazioni base da eseguire.
- Gli operandi sono le zone di memoria su cui le operazione lavorano.

#### Il livello assembler
Offre una visione più comprensibile all'uomo del linguaggio macchina: le stringhe di bit vengono convertite in istruzioni scritte in modo comprensibile e sensato.

L'assemblatore è un software che si occupa di tradurre da linguaggio macchina (binario) ad un linguaggio più comprensibile.

#### Il livello linguaggi ad alto livello
Sono l'insieme di tutti i linguaggi più utilizzati ad oggi per produrre software, con istruzioni più intuitive e semplici per l'uomo.

É necessario un compilatore o un interprete per convertire il codice in linguaggio macchina.

## Software

Il software è tutto ciò che fa parte del computer e che non è tangibile.
Esistono **software di sistema** che permettono il funzionamento base del computer, ma la maggior parte sono **software applicativi** che permettono al computer di fare le più svariate operazioni.
