# Nozioni introduttive

## ISA

**l'Istruction Set Architecture** si occupa principalmente di definire il formato e le istruzioni disponibili nel linguaggio macchina. Descrive inoltre:
- i registri disponibili
- i tipi di dato
- input e output
- gestione della memoria

la realizzazione hardware di un ISA viene detta **implementazione**, ogni implementazione di ISA può variare in costi, performance e dimensioni.

### Assembly

Il linguaggio assembly è un linguaggio a basso livello che associa alle sequenze di bit le relative istruzioni in un formato più  comprensibile per il programmatore.

Il codice assembly dipende dall'ISA implementato dal processore.

## MIPS e ARM

MIPS e ARM sono due architetture diverse, nella prima ci soffermeremo a livello teorico mentre nella secondo la affronteremo a livello più pratico.

### MIPS

- Presenta 32 registri lunghi una *word* (4byte = 32bit)
- Tutte le istruzioni sono anche lunghe una *word* e seguono i seguenti formati:
	- R-type (istruzioni aritmetico logiche)
	![](https://i.ibb.co/pLnQYk4/rtype.png)
	- I-type (load word, store word e salto condizionato)
	![](https://i.ibb.co/sq3qGc4/itype.png)
	- J-type (salto non condizionato)
	![](https://i.ibb.co/k6kFS5v/jtype.png)
- Ogni registro del MIPS ha un nominativo associato e ha un utilizzo specifico:
![](https://i.ibb.co/6RtjHqL/registers.png)
- **Modi di indirizzamento** rappresentano l'utilizzo degli operatori di una istruzione.
![](https://i.ibb.co/nQjt4Qz/add-mode.png)

## CISC e RISC

CSIC e RISC sono due tipologie di architettura che differiscono molto tra loro.

L'architettura RISC (Reduced Instruction Set Computer) è utilizzata sia dai processori ARM che MIPS e come dice il nome presenta un ridotto numero di istruzioni ma molti registri, è più semplice da implementare, ha consumi minori e quindi più efficiente 

d'altra parte l'architettura CISC (Complex Instruction Set computer) è utilizzata dai processori Intel con la loro versione x86 e si tratta di un'architettura più completta, che presenta un numero maggiore di istruzioni e pochi registri, le istruzioni hanno formato variabile e le istruzioni possono avere più operandi del normale. In sintesi è molto più complesso implementare questo tipo di architettura. 
È però più flessibile perché puoi fare la stesso cosa in molti modi diversi e supporta meglio i sistemi legacy
