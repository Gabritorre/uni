# Circuiti logici

Esistono principalmente due tipi di circuiti logici:
- I **circuiti sequenziali** se i valori di uscita dipendono dai valori di ingresso e dallo stato del sistema
- I **circuiti combinatori** se i valori di uscita dipendono unicamente dai valori di ingresso

## Circuiti combinatori

I circuiti combinatori costituiscono la base su cui poi costruire circuiti più complessi.

Appartengono a questa categoria:
- mutiplexer (mux)
- demultiplexer (demux)
- decoder
- ALU

## Multiplexer

componente che prende in input $n$ valori e restituisce in output un solo valore.

Possiede $log_2n$ **segnali di controllo**, cioè degli ulteriori input su cui si basa la decisione di che valore mandare in output.

$n = 2 \to 1 \text{ segnale. } n = 4 \to 2 \text{ segnali}. n = 8 \to 3 \text{ segnali} ...$

![](https://i.ibb.co/vkXkLkT/mux.png)

| A | B | C | $F$ |
|--|--|--|--|
| 0 | 0 | 0 | $0$ |
| 0 | 0 | 1 | $0$ |
| 0 | 1 | 0 | $0$ |
| 0 | 1 | 1 | $1 \checkmark$ |
| 1 | 0 | 0 | $0$ |
| 1 | 0 | 1 | $1 \checkmark$ |
| 1 | 1 | 0 | $1 \checkmark$ |
| 1 | 1 | 1 | $1 \checkmark$ |


## Demultiplexer

Riceve in ingresso un segnale e restituisce $n$ linee in uscita.

utilizza $log_2{n}$

- Se l'input è 0 allora tutti gli output saranno a 0, indipendentemente dai segnali di controllo.

- Se l'input è 1 allora solo un output dovrà essere a 1, dipende dai segnali di controllo.

## Decoder

Prende $n$ input e restituisce **2^n** output

![](https://i.ibb.co/ZhgCRWj/decoder.png)

Saranno messi ad 1 solo solo il valore dell'indice che corrisponde al valore decimale della sequenza in input.

## PLA e ROM

Per la realizzazione di circuiti combinatori possono venire utilizzati PLA o ROM

### PLA

"Programmable Logic Array"
Permette di costruire funzioni logiche in forma SP, quindi utilizza porte AND e OR. 

Per costruire la propria funzione si bruciano gli input che non interessano e si lasciano quelli che interessano.

### ROM

"Read Only Memory"

si suddividono in :
- PROM: (Programmable ROM) sono scrivibili una sola volta.
- EPROM: (Erasable PROM) cancellabile e riscrivibile

Può essere rappresentata come una matrice di celle in cui in ogni colonna è presente una funzione logica.


