# Progetto CPU Mips-like singolo ciclo

Realizzazione teorica di una CPU Mips-like semplificata in grado di fare:

- **memory reference**: lw, sw (I-type format)
- **arithmetic-logic**: add, sub, and, or, slt (R-type format)
- **control-flow**: beq (I-type format), j (J-type format)

La CPU che vogliamo progettare eseguirà per ogni istruzione in un **singolo ciclo di clock**.

Dobbiamo poter accedere sia alla memoria principale (M[x]) sia ai registri (R[y])

È necessario avere anche un registro speciale, il **program counter** (PC) che conterrà l'indirizzo di memoria dell'istruzione corrente da eseguire.


## Implementazione generica di una istruzione

- Uso il Program Counter (PC) per ottenere l'indirizzo dell'istruzione da eseguire
- Leggo l'istruzione dalla memoria (**fetch**)
- Interpreta i campi necessari per eseguire l'istruzione (**decode**)
- Utilizzo l'ALU per l'esecuzione (**execute**)
	tutte le istruzioni che vogliamo implementare necessitano di fare dei calcoli e operazioni. *lw,sw* la utilizzano per calcolare gli indirizzi; *beq* perché esegue una sottrazione per controllare se i valori sono uguali
- Il Program Counter viene aggiornato e vengono ripetuti tuttii passaggi.

![](https://i.ibb.co/YXTyqjD/isa.png)

**sign_ext(x)**: significa che l'indirizzo x composto da $n$ bit viene esteso a 32 bit (che è la dimensione degli indirizzi di memoria) mantenendo sempre il suo valore.

**BEQ** l'istruzione beq adotto un indirizzamento di tipo *Program Counter relative* significa che calcola l'indirizzo in cui saltare partendo dall'indirizzo dell'istruzione beq.

Se l'istruzione beq si avvera abbiamo che l'indirizzo su cui saltare è dato da:
*PC + 4 + (sign_ext(Imm16) << 2)*

- *PC + 4*: punta alla istruzione successiva alla beq (4 perche le istruzioni sono lunghe 4 byte)
- *sign_ext(Imm16)*: Abbiamo che l'indirizzo di 16 bit (Imm16) viene esteso in 32 bit, il valore rappresentato da questo indirizzo dice quante istruzioni deve saltare per arrivare alla label.
- *(sign_ext(Imm16) << 2)* Il numero di quante istruzioni sono da saltare viene shiftato di 2, cioè il valore viene moltiplicato per 4 (sempre perché ogni istruzione è formata da 4 byte)


### Memoria istruzioni e memoria dati

Abbiamo bisogno di due memorie perché essendo limitati ad una istruzione per ciclo di clock non possiamo sia leggere un dato che scrivere il risultato dell'istruzione nello stesso ciclo di clock.

Quindi abbiamo la memoria di istruzioni che leggerà le istruzioni ad ogni ciclo di clock.

Mentre abbiamo la memoria dati per quando dobbiamo scrivere  in memoria il risultato di una istruzione.

## Sommatori aggiuntivi

Dato che l'ALU è impegnata a svolgere i calcoli delle istruzioni

- Abbiamo bisogno di un sommatore che (durante lo stesso ciclo di clock dell'istruzione corrente), incrementi il PC per l'istruzione successiva
- Abbiamo bisogno di un sommatore calcoli l'indirizzo della beq
- Sono necessari anche vari mux la dove ci possono essere delle scelte nelle istruzioni (es: incrementare normalmente il PC oppure aumentare il PC secondo la beq; eseguire una istruzione I-type oppure una R-type; eseguire una load oppure una istruzione aritmetico-logico; ecc...)

## Controllo ALU

Dobbiamo creare un circuito in grado ci calcolare l'ALU operation che soddisfi la specifica seguente

![](https://i.ibb.co/rQcJ3Kw/alu-operation.png)

Questa scelta viene fatta utilizzando due campi: ***op*** e ***funct***

Il circuito da creare sarà composto da due livelli

1. il primo calcolerà ***ALUop*** (2 bit) utilizzando il campo *op*

| ALUop configuration | Operation |
|--|--|
| 00 | lw e sw |
| 01 | beq |
| 10 | 	arithmetic/logic (sum, sub, AND, OR, slt) |

2. Il secondo livello utilizzerà il campo ALUop calcolato e il campo *funct* (6 bit)
	
	Il campo *funct* torna utile solo nelle istruzioni aritmetico-logiche (le R-type), mentre per lw, sw e beq è sufficiente il campo *op*.

Per determinare i bit di operation si svolgono delle operazioni tra i bit di *op* e i bit di *funct* nel seguente modo (i pedici rappresenta il bit):

- $\text{Operation}_0 =  (\text{Funct}_0 \text{ OR } \text{Funct}_3) \text{ AND } \text{ALUop}_1$
- $\text{Operation}_1 =  \text{NOT Funct}_2 \text{ OR } \text{NOT ALUop}_1$
- $\text{Operation}_2 =  (\text{Funct}_1 \text{ AND } \text{ALUop}_1) \text{ OR } \text{ALUop}_0$
- $\text{Operation}_3 =  \text{sempre a 0}$

![](https://i.ibb.co/SVF7QGg/op-funct.png)

### Jump

Anche per implementare la jump è necessario aggiungere un multiplexer per decidere tra beq e jump.

per calcolare il salto:

Il PC mantiene i 4 bit più significativi inalterati mentre gli altri 28 vengono sostituiti dall'indirizzo di destinazione (sono 26 bit shiftati di 2, quindi diventano 28)

Si dice che la jump è PC-relative solo per i 4 bit più significativi del PC


## Componente controllo 

Fino ad ora abbiamo visto la parta di **datapath** che si occupa di svolgere effettivamente le istruzione

Per quanto riguarda la parte di **controllo** si occupa della decodifica delle istruzioni, dell'invio delle istruzione al datapath e invio dei segnali di controllo necessari alla ALU, sommatori, multiplexer, ecc...

Il circuito della parte controllo è un **circuito combinatorio** e si basa su una coppia di tabella: una per l'input che riceve (l'istruzione da decodificare) e una per l'output (segnali di controllo da mandare al datapath)

## Problematiche CPU a singolo ciclo

- Per poter stabilizzare tutti i componenti bisogna tarare il clock nell'istruzione che richiede più tempo, quindi si avrà un tempo di clock molto lungo.
- Come conseguenza del punto precedente abbiamo che nelle istruzione che richiedono meno tempo per essere eseguito abbiamo un grosso spreco di tempo prima di arrivare al ciclo successivo.
- Abbiamo molte risorse duplicate: sommatori, multiplexer, 2 memorie
