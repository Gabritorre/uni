# CPU pipeline

La caratteristica che contraddistingue questa CPU da quella a singolo e multi ciclo è il fatto che la CPU pipeline riesce a lavorare in **parallelo su più istruzioni**.

Sebbene questo non renda le singole istruzioni più veloci (in alcuni casi pure più lente) rappresenta un notevole aumento performance per quanto riguarda il numero di istruzioni completate in unità di tempo rispetto agli altri due tipi di CPU.

## Funzionamento

Per capire il funzionamento prendiamo in considerazione lo schema per la cpu a singolo ciclo (con lo stesso instruction set del modulo 1)

![Cingolo ciclo](https://i.ibb.co/WN9fMFr/cingolo-ciclo.png)

Suddividiamolo in 5 fasi che rappresentano gli step dell'esecuzione di una istruzione:

- Instruction fetch (**IF**)
	lettura dell'istruzione e incremento del PC
- Instruction decode (**ID**)
	decodifica dell'istruzione e lettura registri coinvolti
- Execute (**EX/EXE**)
	calcolo opearzione aritmetica / calcolo indirizzi di memoria ram/ calcolo indirizzo branch
- Memory access (**MEM**)
	accesso alla memoria ram per lettura o scrittura
- Write back (**WB**)
	scrittura nei registri

![](https://i.ibb.co/41gjSF4/5steps.png)

L'idea sarebbe che queste 5 istruzioni vengono fatte contemporaneamente ma su istruzioni diverse.

![](https://i.ibb.co/L924VjJ/example.png)

Dato che ciascuna istruzione ha bisogno del risultato della fase precedente abbiamo bisogno di inserire dei **registri intermedi** per memorizzarmi i vari risultati tra i cicli di clock.

![](https://i.ibb.co/KDDdDH8/reg-interm.png)

Infine vanno aggiunti i segnali di controllo.

## Hazard

Con il termine hazard o criticità si indica un fenomeno in cui l'esecuzione dell'istruzione dipende dai risultati dell'istruzione precedente, creando così una **dipendenza**.

Le dipendenze creano degli **stalli** nella CPU. Lo stallo viene scoperto durante la fase ID e l'istruzione stessa e tutte le successive entrano in stallo.

Lo stallo viene risolto solo quando l'istruzione dipendente viene completata così da sbloccare l'istruzione che la richiedeva.

Dato che ogni fase deve lavorare ad ogni ciclo ci clock quando si presenta uno stallo è possibile che per alcune fasi non ci siano istruzioni da fare, vengon quindi introdotte le istruzioni **nop** o **bubble** cioè delle istruzioni che non fanno nulla ma servono a tenere impegnata quella fase.

Esempio di istruzioni che creano uno stallo:

```
add $s1, $t0, $t1
sub $s2, $s1, $s3 
```

l'istruzione `sub` entra in stallo perché richiede il registro $s1 che non è stato ancora aggiornato dall'istruzione `add`. Diciamo che la seconda istruzione dipende dalla precedente

La dipendenza indica che non possiamo modificare l'ordine delle istruzione senza alterare il risultato

### Tipi di dipendenza

#### Dipendenza RAW

*Read After Write* avviene quando un'istruzione legge un registro scritto da una istruzione precedente.

Es.

	add $s1, $t0, $t1 // write $s1
	sub $t2, $s1, $t3 // read $s1

#### Dipendenza WAW

*Write After Write* avviene quando un'istruzione scrive in un registro scritto da una istruzione precedente.

Es.

	add $s1, $t0, $t1 // write $s1
	sub $s1, $s2, $t3 // write $s1

#### Dipendenza WAR

*Write After Read* avviene quando un'istruzione scrive in un registro letto da una istruzione precedente.

Es.

	add $t0, $s1, $t1 // read $s1
	sub $s1, $s2, $t3 // write $s1


la dipendenza che capita più spesso e anche più importante è quella di tipo RAW.

![](https://i.ibb.co/2sXVrWx/esempio-dipendenze.png)

La gestione degli stalli viene fatta dalla *Hazard detection unit* che è contenuta nella fase ID e quello che fa è semplicemente confrontare i registri coinvolti nell'istruzione corrente con quegli delle istruzioni precedenti.

### Register file ottimizzato

Il register file ottimizzato è un register file che permette la lettura e la scrittura nello stesso ciclo di clock, più precisamente nella fase di salita del clock avviene la scrittura mentre nella fase di discesa avviene la lettura.

Questo permette di allineare la fase WB con quella ID di due istruzioni diverse.

### Forwarding

Per ottimizzare le dipendenze di tipo RAW che sono le più frequenti possiamo utilizzare il fatto che il dato precedente di cui abbiamo bisogno viene prodotto nello stato EXE e quindi non serve aspettare la fase WB. Questa tecnica viene chiamata **forwarding**.

Esempio con register file ottimizzato e forwarding.

![](https://i.ibb.co/bWDZ3dQ/rfott-forwarding.png)

il forwarding non risolve però le istruzioni che dipendono da una `lw` dato che producono il dato nella fase MEM e non EXE. in questo caso si è costretti a mettere una `nop` dopo l'istruzione lw.


### Gestire i salti

Una `beq` impiega 4 cicli ad aggiornare il valore del PC e fino a che il PC non viene aggiornato non si sa se bisogna saltare oppure eseguire normalmente le istruzioni successive.
In quei 4 cicli l'istruzione subito successiva alla `beq` è arrivata allo stadio EXE e quindi non ha ancora modificato alcun registro, quindi nel caso la `beq` dovesse saltare sostituiamo le istruzioni che sono entrate nella pipeline con delle nop e ripartiamo dal salto, mentre nel caso la `beq` non salti non abbiamo perso nessun ciclo di clock.

In caso di salto però perdiamo 3 cicli di clock inutilmente, possiamo ottimizzare la nostra CPU facendo fare il confronto tra i registri nella fase ID al posto della EXE, perdendo così solo un ciclo e non tre. Questa tecnica viene chiamata **delayed branch**

Si noti che questo implica che l'istruzione subito dopo la `beq` **viene sempre completata** quindi sta al programmatore decidere come gestire il comportamento, esplicitando una `nop` oppure inserendo una istruzione che non modifica la semantica del programma.

Il fatto di aver spostare il confronto nella fase ID ci porta un problema: il forwarding mandava i dati alla fase EXE e non alla fase ID, per poter mandare i valori corretti nella fase ID abbiamo bisogna di mettere una nop.
![](https://i.ibb.co/jVZ2FtK/exebeq.png)

Mentre se abbiamo una dipendenza tra `beq` e `lw` abbiamo bisogno di 2 nop

![](https://i.ibb.co/rfW2yJ1/exelwbeq.png)

## Schema riassuntivo

### Tabella Con forwarding

|Istruzione| produce alla fase | riceve alla fase |
|--|--|--|
| aritmetiche | EXE | EXE |
| branch | ID | ID |
| lw* | EXE (per l'indirizzo) / MEM (per il valore) | EXE (per l'indirizzo) / MEM (per il valore) |
| sw* | EXE (per l'indirizzo) | EXE (per l'indirizzo) / MEM (per il valore) |

*Nel caso di `lw` per esempio se l'istruzione è fatta in questo modo `lw $3, 32($5)` dobbiamo ricevere il $5 nella fase EXE mentre dobbiamo ricevere $3 nella fase MEM. 
Per quanto riguarda `sw` funziona allo stesso modo.

**NB solo in caso di register file ottimizzato è possibile allineare le fasi ID e WB**


## Branch prediction

il branch prediction è una tecnica che consiste nel prevedere quale sarà il risultato di una branch in modo da mettere anticipatamente la prossima istruzione in pipeline.

- Se indovina allora non abbiamo perso nessun ciclo di clock
- Se sbaglia bisogna annullare l'istruzione e inserire in pipeline quella corretta (se ne occupa l'hazard detection unit).

Una prima versione molto semplice sarebbe quella di assumere sempre che la branche non salti, ma non è una soluzione ottimale.

Si opta invece per una **previsione dinamica** che si basa nel guardare il comportamento delle branch precedentemente eseguite.

Viene fatto attraverso una tabella contenente:

- **Indirizzo** stesso della istruzione **branch**
- **L'indirizzo** del **salto** nel caso in cui la branch sia vera
- Uno **stato** che rappresenta se nell'ultima esecuzione di quella branch abbia saltato o meno.

|branch addr.| branch target addr. | status |
|--|--|--|
| 0x001000 | 0x0010F4 | 01 |
| 0x001020 | 0x001040 | 00 |
| 0x001034 | 0x001300 | 10 |
| 0x001208 | 0x001008 | 01 |

Quello che viene fatto in sostanza è:

1. fetch dell'istruzione
2. controlliamo se l'idirizzo dell'istruzione è dentro la tabella
3. se è presente allora l'istruzione che stiamo guardando è una branch che è già stata eseguita in passato
4. guardiamo lo stato per decidere se assumere il salto oppure no
 
### Codifica dello stato

Come detto lo stato nella tabella rappresenta il precedente risultato di una specifica branch, immaginando lo stato ad 1 bit possiamo codificare lo stato come:

1 = salto
0 = non salto

Avere solo un bit però non è ottimale nei casi in cui si hanno due cicli innestati (cosa che può capitare molto spesso), infatti i casi reali e i casi predetti non coincidono completamente

```
outer:
	inner:
	beq -,-,inner
beq -,-,outer
```

guardando la `beq` del ciclo `inner` immaginiamo i risultati della beq.

reali: 111110111110111110....
pred: 11111**10**1111**10**11110....

È possibile migliorare questa situazione utilizzando uno stato a due bit, possiamo pensarla come questa automa:

![](https://i.ibb.co/XxPyytY/Screenshot-1.png)

## Eccezioni ed interruzioni

Ci sono dei casi particolari in cui il normale flusso del codice può essere cambiato, questi casi particolari sono **le eccezioni e le interruzioni**

- Si parla di **eccezioni** quando la causa è interna al processore come errori aritmetici, utilizzo di funzioni indefiniti o altre sviste di programmazione (sono tendenzialmente software)
- Si parla di **interruzioni** quando la causa è esterna al processore come l'interazione con dei dispositivi IO (sono tendenzialmente hardware)

Quando si verifica una eccezione o una interruzione la CPU deve:

- Interrompere l'esecuzione del programma utente
- Salvare lo stato di esecuzione del programma, nel MIPS solo il PC viene salvato in un registro chiamato *Exception program counter* (EPC)
- Trasferire il controllo al sistema operativo modificando opportunamente il PC, quando il sistema operativo ha gestito l'eccezione l'esecuzione riprende.

Esistono due approcci per permettere al sistema operativo di gestire le eccezioni:
1. l'utilizzo di un registro speciale *CAUSE register* (nel MIPS) che può assumere dei valori diversi, ognuno dei quali rappresenta un tipo di eccezione
2. la tecnica *Vectorized interrupts* in cui ogni eccezione ha un corrispettivo indirizzo a cui saltare nel caso si verifichi

## Ottimizzazione istruzioni

Dato il seguente codice:
(Assumiamo di avere il forwarding e il register file ottimizzato)

```
1| Loop:
2| lw $t0, 0($s0)
3| addi $t0, $t0, 20
4| sw $t0, 0($s1)
5| addi $s0, $s0, 4
6| addi $s1, $s1, 4
7| bne $s0, $a0, Loop
8| nop
```

è possibile effettuare alcune ottimizzazioni.

1. individuiamo le dipendenze di tipo RAW
	- la riga 3 dipende dalla 2
	- la riga 4 dipende dalla 3
	- la riga 7 dipende dalla 5
2. individuiamo le dipendenze di tipo WAR
	- la riga 5 dipende dalla 2
	- la riga 6 dipende dalla 4

![](https://i.ibb.co/2MLV7TM/ottimizzaz.png)

**Le ottimizzazioni consistono nel modificare l'ordine delle istruzioni in modo che la semantica del codice rimanga la stessa  e anche le dipendenze devono sempre andare dall'alto al basso**

La prima ottimizzazione che possiamo fare è rimpiazzare la nop con un istruzione precedente.

possiamo spostare la riga 6 al posto della `nop` ottenendo così

```
1| Loop:
2| lw $t0, 0($s0)
3| addi $t0, $t0, 20
4| sw $t0, 0($s1)
5| addi $s0, $s0, 4
6| bne $s0, $a0, Loop
7| addi $s1, $s1, 4
```

Ricordiamo che indipendentemente dal risultato della `bne` l'istruzione che sta subito sotto viene sempre eseguita, quindi la semantica del programma non viene cambiata in questo caso.

Nel codice sono presenti degli stalli per cui vanno messe delle `nop` aggiuntive che esplicitino gli stalli

```
1| Loop:
2| lw $t0, 0($s0)
3| nop
4| addi $t0, $t0, 20
5| sw $t0, 0($s1)
6| addi $s0, $s0, 4
7| nop
8| bne $s0, $a0, Loop
9| addi $s1, $s1, 4
```

tenendo sempre presente le dipendenze possiamo anche in questo caso rimpiazzare le `nop`

![](https://i.ibb.co/z649wRx/ottimizzaz.png)

Possiamo infatti spostare la riga 6 al posto della prima `nop`, facendo questo risolviamo anche la seconda `nop` dato che passano sufficienti istruzioni tra la dipendenza tra `addi` e la `bne`

Dopo le ottimizzazioni il codice sarà

```
1| Loop:
2| lw $t0, 0($s0)
3| addi $s0, $s0, 4
4| addi $t0, $t0, 20
5| sw $t0, 0($s1)
6| bne $s0, $a0, Loop
7| addi $s1, $s1, 4
```

![](https://i.ibb.co/BVR7sDJ/ottimizzaz.png)

## Processori superscalari

Per aumentare il parallelismo della nostra CPU con lo scopo di aumentare le prestazioni possiamo replicare dei componenti per permettere alla CPU di far entrare più istruzioni contemporaneamente nella pipeline, questa tecnica è chiamata **multiple issue**

Questo ci permette in alcuni casi di completare più di una istruzione in un solo ciclo di clock

Esistono due approcci per implementare il *multiple issue*:

### Multiple issue statico

Questo metodo sfrutta il compilatore per raggruppare le istruzione da inserire in pipeline, il compilatore deve ovviamente fare attenzione alle dipendenze.

Nonostante i suoi vantaggi (come la rimozione del branch prediction e il fatto che in fase di esecuzione risulta fluida e prestante perché il grosso lo ha già fatto il compilatore) questo metodo non è più utilizzato al giorno d'oggi perché:

- Non tutti gli stalli sono predicibili in fase di compilazione (come i cache miss)
- Il compilatore non può speculare sul risultato dei branch (il dynamic branch prediction non è possibile)
- Il codice prodotto dipende anche dalla singola versione della CPU, ciò non lo rende molto versatile e portabile.


### Multiple issue dinamico

L'approccio usato nei processori odierni è quello dinamico, in cui la CPU decide **quante**, e in un caso anche **quali**, istruzioni mettere in pipeline ad ogni ciclo di clock. I processori che utilizzano questo approccio vengono chiamati **superscalari**.

Esistono due tipi di versione:

- **in-order** la CPU decide solo quante istruzioni mandare in pipeline, ma l'ordine delle istruzioni rimane quello sequenziale del codice (ad esempio utilizzato dai processori ARM nei Raspberry PI)
- **out-of-order** la CPU decide quante e anche quali istruzioni mandare in pipeline, facendo ovviamente attenzione a non cambiare la semantica del codice (ad esempio utilizzato dai processori Intel e AMD odierni)

Le uniche dipendenze che la CPU deve gestire attentamente nella versione dinamica sono quelle di tipo RAW, le dipendenze WAW e WAR possono essere risolte eseguendo in parallelo tutti gli step delle istruzione avendo cura di eseguire nel corretto ordine solo lo step WB.
