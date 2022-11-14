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

Circuito con l'utilizzo del clock

![](https://i.ibb.co/Kr1Scxj/dlatch.png)

C corrisponde al *clock*

D=1 corrisponde al *set*

D=0 corrisponde al *reset*

Grazie alle due porte AND i segnali di *set* o *reset* solo quando il clock è acceso.
