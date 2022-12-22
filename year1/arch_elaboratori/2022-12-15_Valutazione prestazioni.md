# Valutazione delle prestazioni

Misurare le prestazioni oggettiva della CPU è molto complesso perché ci sono molte cose da tenere conto contemporaneamente.

Quello che vogliamo misurare è lo **user CPU time** cioè il tempo effettivo di esecuzione del programma da parte della CPU senza considerare le operazioni di I/O, del sistema operativo e altre attese.


## Parametri per calcolare le prestazioni

## Frequenza

la **frequenza** indica quanti cicli al secondo vengono fatti dalla CPU:

$$F[\text{Hz}] = \frac{1}{T} \hspace{5mm} \text{dove } T \text{ è il il periodo di un ciclo di clock}$$


## Instruction count

L'instruction count (*IC*) rappresenta il numero di istruzioni del programma da eseguire

## Numero di cicli

Il numero di cicli (*cicli*) rappresenta il numero di cicli necessari per eseguire il programma

## Cicli per istruzione

Con i dati precedenti possiamo ottenere un numero che rappresenta la media dei cicli per istruzione (*CPI*):


$$\text{CPI} = \frac{\text{cicli}}{\text{IC}}$$

## Tempo di esecuzione

Possiamo quindi trovare il **tempo di esecuzione** facendo:
$$\text{T}_{\text{exe}} = \text{IC} \cdot \text{CPI} \cdot T \hspace{5mm} T = \text{periodo di clock}$$

$$\text{oppure}$$

$$\text{T}_{\text{exe}} = \frac{\text{IC} \cdot \text{CPI}}{F} \hspace{5mm} F = \text{frequenza}$$

$$\text{oppure}$$

$$\text{T}_{\text{exe}} = \text{cicli} \cdot T \hspace{5mm} T = \text{periodo di clock}$$

$$\text{oppure}$$

$$\text{T}_{\text{exe}} = \frac{\text{cicli}}{F} \hspace{5mm} F = \text{frequenza}$$

Possiamo anche definire le **performance** (*throughput*) come:

$$\text{Perf}_x = \frac{1}{\text{T}_{\text{exe}_{x}}}$$

Possiamo paragonare due macchine calcolando lo **speedup**:

$$\text{speedup} = \frac{\text{T}_{\text{exe}_{x}}}{\text{T}_{\text{exe}_{y}}} = n \hspace{5mm} \text{con } \text{T}_{\text{exe}_{x}} > \text{T}_{\text{exe}_{y}}$$

Diciamo quindi che la macchina $y$ è $n$ volte più veloce della macchina $x$

## MIPS
È possibile ottenere una media che rappresenta quanti milioni di istruzione sono eseguite per secondo (*MIPS*)

$$\text{MIPS} = \frac{\text{IC}}{\text{T}_{exe} \cdot10^6}$$


## Legge di Amdahl

Si tratta di una legge che fissa un limite allo speedup massimo quando vengono introdotte delle ottimizzazioni

$$\text{T}_{ott} = \frac{1}{s}\text{T}_{exe} + \frac{((1-\frac{1}{s})\text{T}_{exe})}{n}$$

dove $n$ è il miglioramento ottenuto tramite le ottimizzazioni (spesso è il valore da trovare)

$s$ è il tempo in secondi che il programma impiega

otteniamo quante volte è migliore calcolando lo speedup:

$$\text{speedup} = \frac{\text{T}_{exe}}{\text{T}_{ott}}$$
