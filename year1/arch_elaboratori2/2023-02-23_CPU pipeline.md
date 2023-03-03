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
