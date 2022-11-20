# Circuiti sequenziali

I circuiti sequenziali a differenza di quelli combinatori sono in grado di calcolare funzioni che dipendono anche dallo stato della memoria.

Questi circuiti fanno uso di **latch** cioè un elemento (composto da porte logiche) in grado di memorizzare un singolo bit

## S-R latch

S-R latch è un circuito composto da due porte NOR concatenate.

- S sta per *set* e serve a settare l'uscita su 1
- R sta per *reset* e serve per settare l'uscita su 0

l'output cambia anche ricevendo in input gli stessi valori:

![](https://i.ibb.co/MNdKvBp/srlatch.png)

il latch di sinistra memorizza il valore 0 mentre quello di destra memorizza il valore 1.

## Clock

Non bisogna abilitare sia il set che il reset insieme.

per questo viene introdotto il **clock** cioè un intervallo di tempo che i circuiti utilizzano per sincronizzarsi. Il clock determina quindi il ritmo dei calcoli e delle operazioni di memorizzazione.

Il clock si misura in Hz (cicli al secondo)

Circuito con l'utilizzo del clock (**D-latch**)

![](https://i.ibb.co/Kr1Scxj/dlatch.png)

- C corrisponde al *clock*
- D=1 corrisponde al *set*
- D=0 corrisponde al *reset*

Grazie alle due porte AND i segnali di *set* o *reset* solo quando il clock è acceso.

Utilizzando questo metodo però è possibile che si verifichino dei *glitch* (valori che cambiano durante il clock alto) dati dai vari ritardi dei segnali che devono attraversare le porte.

### Timing

Si possono progettare diversi circuiti di memoria in base a quando si vuole memorizzare il dato:

- **level-triggered methodology**: la memorizzazione avviene su livello alto o basso del clock (D-latch)
- **edge-triggered methodology**: la memorizzazione avviene durante la salita o discesa del clock (flip-flop)


## Flip-flop semplice con generatore di impulsi

### Generatore di impulsi

Come dice il nome stesso si tratta di un circuito che genera degli impulsi in corrispondenza della salita del segnale di interesse.

![](https://i.ibb.co/2sFg4Mw/gen-imp.png)

Questo svolgerà il ruolo del clock nel flip-flop.

### Flip-flop semplice
![](https://i.ibb.co/2YS1MHH/flip-flop-semp.png)

problema: la brevità del segnale non permette di percorrere tutti il circuito combinatorio per poi ritornare al flip-flop

### Flip-flop complesso (D flip-flop)

Questo tipo di flip-flop viene realizzato mettendo il serie due D-latch (*master* e *slave*). Rispetto al flip-flop semplice questo memorizza quando il clock "scende" e non quando "sale"

![](https://i.ibb.co/ZhLB8H8/dflip-flop.png)

Quindi quando il clock diventa alto il primo D-latch memorizza il valore di Q' e solo quando il clock scende il secondo D-latch può ricevere in input Q' e far uscire Q.

## Circuito sequenziale sincrono

Si tratta di un **blocco logico** composto da circuiti combinatori (che si occupano di calcolare l'output e i valori da memorizzare) e elementi di memoria (flip-flop)

![](https://i.ibb.co/QNbLs7x/circ-seq-sinc.png)

### Tipi di circuito

- Ciruito sequenziale di **Mealy**

	In cui l'ouput dipende da: input e stato
- Circuito sequenziale di **Moore**

	In cui l'output dipende solo dallo stato.


## Register file

Il **Register File** è un componente della CPU in cui sono presenti i registri che il processore utilizza per svolgere le sue operazioni

ogni registro è costituito da più flip-flop (32 nel caso del MIPS)

Il Register File del MIPS contiene in totale 32 registri


![](https://i.ibb.co/hc0GLSn/register-file.png)

- Read register number 1: identifica quale è il primo registro da leggere
- Read register number 2: identifica quale è il secondo registro da leggere
- Write register: identifica quale è il registro in cui scrivere
- Write data: valore da scrivere nel registro identificato da "Write register"
- Read data 1: valore del primo registro da leggere
- Read data 2: valore del secondo registro da leggere
- Write: è un segnale che lavora assieme al **clock**, serve a dire si vuole abilitare la modalità scrittura

### Lettura

Per la lettura dei due registri sono necessari due multiplexer

### Scrittura

Per la scrittura è necessario un decoder

## Memoria principale (RAM)

Dato che la dimensione e la quantità dei registri è troppo piccola per memorizzare strutture dati complesse viene introdotta la **RAM** (Random Access Memory), una memoria molto più capiente dei registri ma anche più lenta di essi. È una memoria volatile come i registri.

Le RAM si suddividono principalmente in due sottogruppi

### SRAM
Le Static RAM, che sono molto veloci ma poco capienti (come le memorie cache). Viene realizzata con i *latch*.

Ha una dimensione $H \times W$ in cui:

- $H$ numero di celle indirizzabili (tutte le celle hanno la stessa lunghezza)
- $W$ numero di latch per ogni cella

Non è possibile scrivere e leggere contemporaneamente

Non è possibile realizzare SRAM nello stesso modo dei registri:

Date le più grandi dimensioni delle SRAM rispetto ai registri, utilizzare **multiplexer e decoder** con moltissime linee di input risulta una grossa perdita di performance.

Per rimpiazzare i multiplexer vengono utilizzati i **buffer a tre stati** che possiedono due input (il *dato* e il segnale *enable* che lascia o meno passare il *dato*) e un output: se *enable* è attivo allora l'output sarà il dato altrimenti l'output viene impedito.

![](https://i.ibb.co/Pt2ynrJ/buffer-tre-stati.png)

Per risolvere il problema del grande decoder viene utilizzato un decoder più piccolo e una batteria di piccoli multiplexer. Così facendo gli indirizzi vengono "spezzati" in due parti (**SRAM a due livelli**).


### DRAM
Le Dynamic RAM, che sono più capienti delle static ma hanno tempi di accesso più lenti. inoltre utilizzano **condensatori** per memorizzare i bit, che sono componenti che hanno bisogno di essere *refreshati* per non perdere il dato che stanno memorizzando.

Viene utilizzato un **transistor** per ogni bit per andare a trasferire il bit nel condensatore.

Il *refresh* consiste nel riscrivere a intervalli fissi i valori appena letti.

Anche in questo caso gli indirizzi vengono "spezzati" in due parti, la parte sinistra viene considerato **indirizzo di riga** (che passa per un decoder) mentre la parte destra viene considerata **indirizzo colonna** (che passa per un multiplexer)

### Synchronous SRAM e DRAM

Queste memorie permettono di aumentare la banda di trasferimento della memoria sfruttando il fatto che:
le celle consecutive differiscono solo nella parte destra dell'indirizzo.

Quindi è possibile trasferire un blocco di indirizzi che condividono tutti la parte sinistra dell'indirizzo, al posto di passarli uno alla volta.


