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

## Circuito di Moore

Nei circuiti di Moore abbiamo che l'output dipende dallo stato mentre lo stato successivo dipende dall'input e dallo stato.

La successione di operazioni da fare per realizzare un circuito di Moore è:

1. specifica testuale
2. specifica utilizzando gli automi a stati finiti
3. realizzare la tabella di verità dell'output
4. realizzare la tabella di verità dello stato successivo
5. semplificare le tabelle di verità con le mappe di Karnaugh
6. Realizzare il circuito con le porte logiche


Nella specifica con gli automi abbiamo che i **nodi** rappresentano **gli stati** che hanno al loro interno **gli output** mentre gli **archi** sono gli **input**.

### Esempio

Creiamo un circuito per gestire i semafori di un incrocio.

input: sensori che dicono se sono presenti macchine in attese. NScar (per le macchine in attese sulla strada Nord-Sud), EWcar (per le macchine in attesa sulla strada Est-West)
output: accensione (rosso/verde) dei semafori. NSlite (semaforo sulla strada Nord-Sud in cui 1 = verde), EWlite (semaforo sulla strada Est-West in cui 1 = verde)

Ipotizziamo inoltre che NSlite e EWlite non possono mai essere entrambi accesi o entrambi spenti

![](https://i.ibb.co/92CMnbS/esempio-moore.png)

Automa:
Partiamo realizzando i due stati possibili: quello in cui è verde per la strada NS e quello in cui è verde per la strada EW.
![](https://i.ibb.co/P981DwH/automa1.png)

Implementiamo il fatto che se nell'altra strada non ci sono macchine in attesa rimaniamo nello stesso stato
![enter image description here](https://i.ibb.co/B2GqP33/automa2.png)

Quando sono presenti delle macchine in attesa nell'altra strada allora cambiamo stato facendo diventare verde l'altra strada
![enter image description here](https://i.ibb.co/3vGvfyS/automa3.png)

Do una rappresentazione binaria per rappresentare tutti gli stati, Dato che ho 2 stati posso rappresentarli con 1 bit

|Stato| s |
|--|--|
| NSgreen | 0 |
| EWgreen | 1 |

Tabella di verità **output**:
mettere per ogni stato le varie combinazioni all'interno del nodo

| s | NSlite | EWlite |
|---|--|--|
| 0 | *1* | *0* |
| 1 | *0* | *1* | 

Minimizzando otteniamo:

NSlite = ~s
EWlite = s

Tabella di verità **next state**:
mettere per ogni stato le varie combinazioni di input (archi)

| s | NScar | EWcar | new_s |
|---|--|--|--|
| 0 | X | 0 | *0* |
| 0 | X | 1 | *1* | 
| 1 | 0 | X | *1* |
| 1 | 1 | X | *0* |

Estendendo la tabella otteniamo:

| s | NScar | EWcar | s' |
|---|--|--|--|
| 0 | 0 | 0 | *0* |
| 0 | 0 | 1 | *1* | 
| 0 | 1 | 0 | *0* |
| 0 | 1 | 1 | *1* |
| 1 | 0 | 0 | *1* |
| 1 | 0 | 1 | *1* |
| 1 | 1 | 0 | *0* |
| 1 | 1 | 1 | *0* |


Minimizzando usando la mappa di Karnaugh:

![](https://i.ibb.co/KDQmtgn/karn-moore.png)

$s' = \overline{s} \cdot \text{EWcar} + s \cdot \overline{\text{NScar}}$

Realizziamo il circuito

![](https://i.ibb.co/bHgBr8k/circuito-finale.png)



## Circuito di Mealy

Nei circuiti di mealy abbiamo che sia l'output che lo stato successivo dipendono dallo stato e dall'input.

La successione di operazioni da fare per realizzare un circuito di Mealy è:

1. specifica testuale
2. specifica utilizzando gli automi a stati finiti
3. realizzare la tabella di verità dell'output
4. realizzare la tabella di verità dello stato successivo
5. semplificare le tabelle di verità con le mappe di Karnaugh
6. Realizzare il circuito con le porte logiche

Le differenze sostanziali da un circuito di Moore sono:

- Gli output che venivano messi dentro i nodi dell'automa vanno rimossi 
- Negli archi ora abbiamo una notazione: INP/OUT

### Esempio

vogliamo realizzare un circuito di Mealy che riceve in ingresso una sequenza di bit, all’interno della quale deve riconoscere se le varie sotto-sequenze di 3 bit hanno un numero pari o dispari di bit uguali ad 1.

Le sotto-sequenze considerate non si sovrappongono.

Ogni qualvolta il circuito arriva a leggere il terzo bit di ogni sotto-sequenza deve restituire il valore $P$ o $D$ ( $P$ per pari, $D$ per dispari).

L’output in corrispondenza di tutte le altre posizioni della sequenza deve essere $N$ .

Quindi per una sequenza di input come:

Input: $011\hspace{1 mm}010\hspace{1 mm}101...$

Avremo un output:

Output: $NNP\hspace{1 mm}NNS\hspace{1 mm}NNP...$

Automa:
Partiamo da uno stato iniziale $I$, da cui si riparte ogni volta che si termina una sotto-sequenza di 3bit

Poi gestiamo tutte le varie combinazione utilizzando altri 4 stati:

- $P_1$ e $D_1$ per la lettura del primo bit
- $P_2$ e $D_2$ per la lettura del secondo bit

Per il terzo bit si tornerà allo stato iniziale $I$

![](https://i.ibb.co/T0QJr0d/automa-mealy.png)

Do una rappresentazione binaria per rappresentare tutti gli stati, Dato che ho 5 stati ho bisogno di 3 bit per rappresentarli tutti

|Stato| $s_2$ $s_2$ $s_2$|
|--|--|
| $I$ | $0\hspace{2mm}0\hspace{2mm}0$ |
| $P_1$ | $0\hspace{2mm}0\hspace{2mm}1$ |
| $P_2$ | $0\hspace{2mm}1\hspace{2mm}0$ |
| $D_1$ | $0\hspace{2mm}1\hspace{2mm}1$ |
| $D_2$ | $1\hspace{2mm}0\hspace{2mm}0$ |
| $-$ | $1\hspace{2mm}0\hspace{2mm}1$ |
| $-$ | $1\hspace{2mm}1\hspace{2mm}0$ |
| $-$ | $1\hspace{2mm}1\hspace{2mm}1$ |

Do una rappresentazione binaria per rappresentare anche agli output, Dato che ho 3 output possibili ho bisogno di 2 bit per rappresentarli tutti

| Output| $O_1$ $O_2$ |
|---|--|
| $N$ | $0\hspace{4mm}0$ |
| $D$ | $0\hspace{4mm}1$ |
| $P$ | $1\hspace{4mm}0$ |
| $-$ | $1\hspace{4mm}1$ |


Ora dobbiamo realizzare le tabelle di verità per lo stato successivo ( $s_2', s_2', s_2'$ ) e per l'output ( $O_1, O_2$ ), dato che abbiamo 3 stati e un input avremo una tabella con 16 righe

|$s_2$ $s_1$ $s_0$ $I$| $s_2'$ $s_2'$ $s_2'$| $O_1$ $O_2$|
|--|--|--|
| $0\hspace{2mm}0\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}1$ $(P_1)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}0\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}1\hspace{2mm}1$ $(D_1)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}0\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}1\hspace{2mm}0$ $(P_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}0\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}1\hspace{2mm}0\hspace{2mm}0$ $(D_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}1\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}1\hspace{4mm}0$ $(P)$
| $0\hspace{2mm}1\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}0\hspace{4mm}1$ $(D)$
| $0\hspace{2mm}1\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}1\hspace{2mm}0\hspace{2mm}0$ $(D_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $0\hspace{2mm}1\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}1\hspace{2mm}0$ $(P_2)$ |$\hspace{4mm}0\hspace{4mm}0$ $(N)$
| $1\hspace{2mm}0\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}0\hspace{4mm}1$ $(D)$
| $1\hspace{2mm}0\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}0\hspace{2mm}0\hspace{2mm}0$ $(I)$ |$\hspace{4mm}1\hspace{4mm}0$ $(P)$
| $1\hspace{2mm}0\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}0\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}0\hspace{2mm}0$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$ |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}0\hspace{2mm}1$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$ |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}1\hspace{2mm}0$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 
| $1\hspace{2mm}1\hspace{2mm}1\hspace{2mm}1$ | $\hspace{4mm}X\hspace{2mm}X\hspace{2mm}X$  |$\hspace{4mm}X\hspace{4mm}X$ 


Minimizzando usando la mappa di Karnaugh per ogni stato successivo e per ogni output:

Mappa di $s_2'$

![](https://i.ibb.co/SdwF06C/s2.png)

$s_2' = (\overline{s_1} \cdot s_0 \cdot \overline{I}) + (s_1 \cdot s_0 \cdot \overline{I})$

Mappa di $s_1'$

![](https://i.ibb.co/wCHZTDD/s1.png)

$s_1' = (\overline{s_2} \cdot \overline{s_1}\cdot \overline{s_0} \cdot I) + (\overline{s_1} \cdot s_0 \cdot I) + (s_1 \cdot s_0 \cdot I)$

Mappa di $s_0'$

![](https://i.ibb.co/ZL5s8cS/s0.png)

$s_0' = (\overline{s_2} \cdot \overline{s_1}\cdot \overline{s_0})$

Mappa di $O_1$

![](https://i.ibb.co/0G7RKtq/o1.png)

$O_1 = (s_1 \cdot \overline{s_0} \cdot \overline{I}) + (s_2 \cdot I)$

Mappa di $O_2$

![](https://i.ibb.co/YtT6yfv/o2.png)

$O_2 = (s_1 \cdot \overline{s_0} \cdot I) + (s_2 \cdot \overline{I})$


Realizziamo il circuito

![](https://i.ibb.co/gFVzPsz/circuito-mealy.png)

## Microistruzioni

Quando gli stati in un automa sono molti diventa difficile disegnarlo, in alternativa si possono usare delle microistruzioni per descrivere il circuito.

Esempio di sintassi in un circuito di Moore:

$S_i: O_i (c_{i1}) \text{Next}_{i1}; (c_{i2}) \text{Next}_{i2};... (c_{im}) \text{Next}_{im}$

Abbiamo quindi:

- $S_i$ individua lo stato corrente
- $O_i$ output in base allo stato corrente
- $c_{im}$ condizione sui valori di input
- $\text{Next}_{im}$ stato in cui saltare

Le microistruzioni vengono memorizzate in ROM.
