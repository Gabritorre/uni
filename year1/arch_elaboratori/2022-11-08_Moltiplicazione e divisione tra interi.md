# Moltiplicazione e divisione tra interi

## moltiplicazione in binario

Utilizzando il metodo "carta e penna" abbiamo che la moltiplicazione in binario si svolge nel seguente modo:

![](https://i.ibb.co/Zcxz8HY/molt-bin.png)

Abbiamo quindi che per rappresentare la moltiplicazione di n bit ci servono il doppio dei bit (4 bit del moltiplicando, 3 (4 mettendo uno zero a sinistra) bit del moltiplicatore) $\to$ 8 bit per rappresentare il risultato.

### Metodo 1

È possibile implementare in circuito che svolge la moltiplicazione utilizzando una ALU a 64bit e shiftando il **moltiplicando a sinistra** e il **moltiplicatore a destra**, per poi sommare il prodotto e il moltiplicando ad ogni passaggio.


### Metodo 2

È possibile implementare in circuito che svolge la moltiplicazione utilizzando una ALU a 32bit shiftando il **moltiplicatore e il prodotto a destra**, per poi sommare il prodotto e il moltiplicando ad ogni passaggio.

### Metodo 3

In questo metodo viene memorizzato il moltiplicatore nella parte più a sinistra del prodotto, 	il **prodotto** viene **shiftato a destra** e viene sommato il moltiplicando con i bit della metà di sinistra del prodotto.

### Segno della moltiplicazione

Per gestire il segno della moltiplicazione conviene:
1. Convertire moltiplicando e moltiplicatore in numeri positivi
2. Eseguire la moltiplicazione
3. Decidere il segno del risultato utilizzando la regola dei segni (negativo se il segno di moltiplicando e moltiplicatore sono discordi) (fare il complemento a 2 se il risultato è negativo)


## Divisione

Utilizzando il metodo "carta e penna" abbiamo che la divisione in binario si svolge nel seguente modo:

![](https://i.ibb.co/QYh40sj/div-bin.png)

supponendo di dividere interi su 4 bit.
L'algoritmo memorizza
- Il **quoziente** su un registro a 4 bit
- Il **divisore** nella metà sinistra di un registro ad 8 bit
- Il **resto** su un registro ad 8 bit che viene inizializzato con il valore del **dividendo**

Ad ogni passo si effettua la sottrazione tra dividendo e divisore e si controlla il segno del risultato. Poiché il dividendo è memorizzato nel registro del resto la sottrazione da effettuare è in realtà **resto – divisore** e il risultato viene messo in **resto**.

Ad ogni passo si esegue lo shift a dx di una posizione del divisore

Questo viene fatto per capire quando il divisore è più piccolo della parte considerata del dividendo.

- Se il segno della sottrazione è positivo viene **shiftato a sinistra il quoziente** e viene inserito 1
- Se il segno della sottrazione è negativo viene **shiftato a sinistra il quoziente** e viene inserito 0, inoltre ripristino il valore precedente del resto


### altro metodo

Esiste un metodo che semplifica il circuito e che utilizza una ALU a 32 bit (rispetto a 64 bit del precedente metodo), in cui il resto viene shiftato a sinistra e il divisore viene sottratto solo dalla metà sinistra del registro del resto

### Segno della divisione

Anche in questo caso conviene:
1. convertire dividendo e divisore in numeri positivi
2. eseguire la divisione lasciando fuori i bit di segno
3. utilizzare la regola dei segni per stabilire il segno del risultato (negativo se il segno di dividendo e divisore sono discordi)

### Segno del resto

In breve il **segno del resto** deve essere **uguale** al **segno del dividendo**


