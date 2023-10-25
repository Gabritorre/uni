# Scheduling

lo scheduler è il componente del sistema operativo che decide quali processi, che sono nello stato di pronto, mandare in esecuzione. Tale decisione la prende tramite un **algoritmo di scheduling**


Ci sono due caratteristiche chiave che un algoritmo di scheduling può utilizzare oppure no:

- **pre-rilasio o preemptive**
	- algoritmi senza pre-rilascio: il processo in esecuzione rimane in esecuzione finchè o si blocca o decide volontariamente di fermare l'esecuzione
	- algoritmi con pre-rilascio: lo scheduler può interrompere l'esecuzione di un processo per favorirne un altro.
- **priorità**
	- priorità statica: una volta assegnata la priorità ad un processo essa non cambia
	- priorità dinamica: la priorità di un processo può variare nel tempo

## Sistemi principali da schedulare

Ogni sistema richiede un algoritmo di scheduling in base a cosa vuole ottenere.

Gli obiettivi comuni tra tutti i sistemi sono:

- **equità**: i processi simili devono ricevere una porzione equa di CPU
- **predicibilità**: Assicurarsi che la politica di scheduling adottata sia effettivamente applicata
- **bilanciamento**: tenere occupate tutte le componenti del sistema

I tre ambienti principali con i propri obiettivi sono:

1. **Sistemi batch** (quindi non sono presenti utenti):
	- massimizzare il numero di processi eseguiti per unità di tempo
	- minimizzare il tempo fra l'inizio della richiesta e la sua conclusione
	- massimizzare l'uso del processore
2. **Sistemi con utenti interattivi**:
	- minimizzare i tempi di risposta
	- soddisfare le aspettative degli utente
3. **Sistemi real time**:
	- rispettare le scadenza
	- mantenere la qualità del servizio nei contenuti multimediali


## Algoritmi per sistemi batch

### First-come-first-served

FCFS è un algoritmo che implementa una semplice coda FIFO (First In First Out), quindi i processi vengono eseguiti in ordine di arrivo. Quando un processo si blocca viene messo alla fine della coda.
Questo algoritmo **non utilizza pre-rilascio e tutti hanno la stessa priorità**.
Non è un algoritmo ottimale perché i processi grandi rallentano tutta la coda

### Shortest Job First

 SJF fa una stima di quanto tempo ogni processo impiega per terminare ed manda in esecuzione prima i processi che hanno un tempo minore.
 Ha un tempo di attesa medio migliore rispetto al FCFS
 Anche questo algoritmo **non utilizza pre-rilascio**
 Non ottimale in quanto è difficile stimare i tempi di esecuzione (soprattutto per i processi che variano i tempi in base ad input utente) e anche perché normalmente non si hanno tutti i processi subito disponibili ma arrivano man mano, quindi combinarli in maniera ottimale non è sempre possibile. 
 È possibile anche che i processi lunghi difficilmente vengano eseguiti

### Shortest Remaining Time First

SRTF è la versione **con pre-rilascio** di SJF, vengo quindi eseguiti processi il cui tempo rimanente è minore. Se mentre è in esecuzione un processo ne arriva un altro che ha un tempo di esecuzione minore di quello che rimane all'attuale processo allora quest'ultimo viene interrotto e viene eseguito il nuovo processo.
 Ha un tempo di attesa medio migliore rispetto al SJF
I problemi di questo algoritmo sono che i processi che sono quasi finiti vengono interrotti (magari era più conveniente far finire quel processo prima di fare context switch, che crea overhead)
in più è ancora più probabile che i processi lunghi non vengano eseguiti. Inoltre c'è lo stesso problema della stima dei tempi del SJF

## Algoritmi per sistemi interativi


### Round Robin

Questo algoritmo utilizza una coda FIFO proprio come FCFS ma in questo caso i processi hanno un tempo di CPU prefissato, se il tempo non è sufficiente per completare il processo allora il processo viene messo alla fine della coda.
Utilizza il **pre-rilascio**, tutti i processi hanno stessa priorità, è un buon algoritmo in quanto tutti i processi vengo eseguiti man mano equamente.
Il problema in questo caso è quanto tempo di CPU impostare?
troppo breve risulterebbe in tanti cambi di contesto (tanto overhead) ma troppo lungo potrebbe rallentare i tempi di risposta per richieste semplici, in quanto devono aspettare che quelli davanti finiscano il loro *slice* di tempo, bisogna trovare un compromesso nel mezzo.

### Scheduling a priorità

Introduciamo le **classi di priorità** cioè dei livelli di priorità in cui chi ha la priorità più alta viene eseguito per primo. Nello scheduling a priorità prima bisogna definire quante classi di priorità abbiamo e all'interno di ogni classe viene utilizzato il Round Robin per schedulare i singoli processi appartenenti a quella classe.

Le priorità possono essere statiche oppure dinamiche, nella maggior parte dei casi avere delle priorità dinamiche è la scelta migliore perché:

consideriamo la seguente immagine e utilizziamo una priorità statica:

![enter image description here](https://i.ibb.co/8PcSvRm/priorit.png)

finche ci sono processi di priorità 4 vengono eseguiti quelli, quando non abbiamo processi di priorità 4 passiamo a quelli con priorità 3 e così via. Possiamo notare che se arrivano continuamente processi con priorità alta quelli con priorità bassa non vengono mai eseguiti.
La soluzione a questo è quella di cambiare la priorità dei processi dinamicamente.

### Selfish Round Robin

Abbiamo 2 code, che rappresentano **2 classi di priorità**: processi attivi e processi in attesa.

Quando arriva un nuovo processo viene messo nei processi in attesa.
La priorità di quel processo aumenta con il passare del tempo.
Quando la sua priorità è in linea con le priorità dei processi nella coda "processi attivi" allora viene spostato in quella coda e viene applicato Round Robin

Questo algoritmo favorisce i processi che sono presenti da più tempo

### Highest Response Ratio Next

Utilizza il SJF ma utilizzando la priorità dinamica al posto del solo tempo di esecuzione

la priorità dinamica calcolata come $\frac{\text{tempo di attesa + tempo di esecuzione}}{\text{tempo di esecuzione}}$

Quindi la priorità è sia in base a quanto è il suo tempo di esecuzione  ma anche da quanto tempo il processo sta aspettando di essere eseguito


### code multilivello con feedback

In questo caso abbiamo un tot di code FIFO, ogni coda rappresenta una classe di priorità.

Tutti i nuovi processi vanno inizialmente nella coda con priorità più alta e vengono eseguiti uno ad uno per un tempo prefissato di CPU.
Quando il tempo termina se il processo è terminato è ok e si va semplicemente al prossimo, mentre se non è terminato va alla coda successiva che ha una priorità minore.
Questo comportamento continua fino all'ultima coda dove viene applicato Round Robin.

I processi lunghi quindi scendono con la priorità man mano. 
Infatti l'algoritmo predilige i processi corti e solo una volta terminati quelli di priorità maggiore si occupa di quelli di priorità minore

![enter image description here](https://i.ibb.co/X2N3dGp/multilive-feedback.png)

### Fair share

Questo algoritmo tiene in considerazione dei gruppi utente e i relativi utenti che lanciano i processi, ci sono ovviamente grouppi più importanti di altri

ogni gruppo riceve una frazione del tempo di CPU che verrà distribuita tra i processi. Se la CPU assegna il 50% della CPU ad un gruppo esso avrà a disposizione il 50% indipendentemente da quanti processi possiede


##  Scheduling per sistemi real time

Nei sistemi real time il tempo è il fattore principale, in altre parole ci sono delle scadenze da rispettare per i processi.

I sistemi real time sono classificati in:

- hard real time
	il processo deve essere eseguito entro la scadenza, altrimenti il risultato non è valido è va scartato o peggio potrebbe creare dei problemi
- soft real time
	c'è una tolleranza per la scadenza e quindi è possibile anche non rispettare la scadenza

possiamo trovare una ulteriore divisione in:

- periodici: i processi vengono eseguiti ad intervalli di tempo regolari
- non periodici: non è prevedibile quando i processi andranno in esecuzione

Lo schedulatore deve essere in grado di eseguire i processi cercando di rispettare le scadenze di tutti.

Prendiamo in considerazione $m = 4$ eventi periodici, cioè eventi che si ripetono ad intervalli regolari $P_i$, ogni evento richiede un tot di utilizzo del processore $C_i$ per eseguire i propri processi.
I processi di questi 4 eventi si possono schedulare solo se la sommatoria di $\frac{\text{tempo di CPU richiesto}}{\text{Periodo}}$ di ogni evento è minore di $1$, quindi:

$$\sum_{i=1}^m\frac{C_i}{P_i} \leq 1$$

Per esempio:

$m_1:$ richiede la CPU per $2$ secondi e si ripete ogni 5 secondi
$m_2:$ richiede la CPU per $1$ secondi e si ripete ogni 3 secondi
$m_3:$ richiede la CPU per $1$ secondo e si ripete ogni 9 secondi
$m_4:$ richiede la CPU per $8$ secondi e si ripete ogni 12 secondi

Abbiamo 

$$\frac{2}{5} + \frac{1}{3} + \frac{1}{9}+ \frac{8}{12} = \frac{68}{45} \approx1.5$$

quindi questi 4 eventi non sono schedulabili (uno di loro sicuramente non viene eseguito entro la sua scadenza)

Se per esempio togliamo l'ultimo evento $m_4$ otteniamo:

$$\frac{2}{5} + \frac{1}{3} + \frac{1}{9} = \frac{38}{45} \approx 0.84$$

In questo caso sono schedulabili

Ovviamente supponiamo che l'overhead necessario per il cambio di contesto sia talmente piccolo da essere ignorato.


### Algoritmi real time statici

Gli algoritmi real time statici prendono le decisioni prima che il sistema inizi l'esecuzione, valido quando si hanno tutte le informazioni e le scadenza subito disponibili.

Un esempio è il **rate monotonic scheduling** (RMS) che è utilizzabile se:

- ogni processo va completato entro il suo periodo
- tutti i processi sono indipendenti tra loro
- il tempo di CPU richiesto da un processo non cambia nei suoi periodi
- i processi periodici non hanno scadenze temporali
- il pre-rilascio è leggero

Ad ogni processo viene assegnata una priorità che si basa su quanto spesso deve essere eseguito, più priorità a chi deve essere eseguito più spesso. Utilizza il pre-rilascio nel caso un processo con priorità più alta dell'attuale sia pronto 

Un algoritmo quindi che favorisce i processi che vengono eseguiti spesso


### Algoritmi real time dinamici

In questi algoritmi la priorità viene aggiornata in esecuzione

Ad esempio l'algoritmo **Erliest Deadline First** (EDF):
- ha pre-rilascio
- sceglie sempre il processo con scadenza più vicina
- massimizza il throughput e minimizza il tempo di attesa

oppure l'algoritmo **Minimim Laxity First** (MLF):
- simile a EDF ma basato sulla lassità
- la lassità è il tempo che avanzerebbe prima della scadenza se il processo venisse eseguito in questo momento

$$\text{lassità} = \text{Scadenza} - (\text{tempo corrente} + \text{tempo di esecuzione})$$

![enter image description here](https://i.ibb.co/K5bjKqv/lassit.png)



## Scheduling nei thread

È molto frequente che i processi abbiano più thread, il processo padre sa quali thread sono più importanti e quali meno.

Per fare in modo che i processi possano cambiare il comportamento dello scheduler è necessario parametrizzare l'algoritmo di scheduling, e i parametri vengono fornite dai processi utente che sa quali thread è più importante eseguire.

È importante quindi separare il **meccanismo di scheduling**, che sta nel kernel e decide **come** schedulare, dalla **politica di scheduling** che è stabilita dai processi utenti i quali decidono **cosa** schedulare.


Per lo scheduling con **thread a livello utente**
![enter image description here](https://i.ibb.co/JpNqwD4/scheduling-tlu.png) 

non è possibile schedulare thread di processi differenti

mentre per lo scheduling con **thread a livello kernel**
![enter image description here](https://i.ibb.co/ZXhPSFp/scheduling-tlk.png)
è possibile anche schedulare thread di processi diversi
