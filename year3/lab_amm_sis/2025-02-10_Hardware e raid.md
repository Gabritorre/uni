# Hardware e raid

Possiamo rappresentare l’architettura dei computer con la **macchina di Von Neuman**

![https://i.ibb.co/rYvtSdq/image.png](https://i.ibb.co/rYvtSdq/image.png)

Una scheda madre (*motherboard*) è una scheda elettronica che permette a tutte le componenti di comunicare tra loro.

Nella scheda madre possiamo installare CPU, memoria RAM, collegare memorie di massa e altre schede di espansione (video, rete, ecc…)

## Memorie

In particolare le memorie possono essere categorizzate in:

- **Memorie di massa:**
    
    Hanno lo scopo di **conservare i programmi e i dati in modo permanente**.
    
    Queste memorie possono essere collocate all’interno del case (memorie interne) oppure possono essere collegate esternamente al computer (memorie esterne).
    
    Appartengono a questa categoria: dvd, cd, chiavette USB, HDD, SSD, floppy disk.
    
- **Memorie principali:**
    - memoria RAM: è la memoria che contiene i dati e i programmi in corso di esecuzione. È volatile, cioè perde il suo contenuto quando il computer viene spento
    - memoria ROM: è una memoria di sola lettura. Contiene un programma che permette di accendere il computer
    - memoria cache: svolge un compito di memorizzazione temporanea dei dati presi di recente dalla RAM in modo da velocizzare i successivi accessi.

La loro capacità si misura in multipli di Byte, tipicamente in GigaByte o TeraByte.

## CPU

Non fa altro che eseguire le istruzioni di un programma. Un programma è formato da istruzioni scritte attraverso un linguaggio apposito, tale programma viene poi tradotto in un linguaggio che la CPU capisce, cioè in binario.
È in grado di eseguire milioni di istruzioni al secondo e, in base al tipo di istruzione, può incaricare altri dispositivi di eseguire alcuni compiti, ad esempio se viene dato un comando di stampa, la CPU incarica la periferica di eseguire la stampa, quindi i dati vengono letti dalla memoria e inviati
attraverso il bus alla periferica desiderata.

## Server

Un server architetturalmente non è molto differente da un PC casalingo.

Differenze rispetto ai PC casalinghi:

- una differenza importante è che i server hanno più **ridondanza di componenti** (più alimentatori, più CPU, più dischi) per garantire più resistenza ai guasti.
- Ci sono CPU dedicate all’uso server, che tendenzialmente hanno più core, più cache.
- Ci sono memoria RAM dedicate più performanti e con meccanismi di protezione alla corruzione.
- I dischi sono più performanti, con più cache e più resistenti, pensati per essere disposti in **RAID**
    
    Nota: si usano maggiormente ancora dischi magnetici classici (HDD) a causa del costo nettamente maggiore degli SSD in ambito server.
    
- numero molto alto di interfacce di rete
- presenza di **iLO** (*Integrated Light-Out*), Fisicamente è una porta Ethernet, la quale
semplifica le operazioni di gestione e monitoraggio remoto.
- un numero sovradimensionato di ventole di raffreddamento (non si usa ancora il raffreddamento a liquido)

I server possono essere:

- **server rack**: sono dei moduli (degli effettivi computer) inseriti in un armadio armadio rack con dei carrelli a scorrimento impilati uno sopra l’altro.
    
    ogni modulo ha la propria alimentazione, il proprio collegamento alla rete e il proprio sistema di raffreddamento.
    
- **server blade**: Sono dei moduli più compatti (computer minimali, solo CPU e ram), inseriti in uno *chassis* condiviso che fornisce alimentazione, raffreddamento e connettività di rete ad ogni blade.

## RAID

il RAID (*Redundant Arrays of Inexpensive Disks*) È una astrazione che, dato un gruppo di dischi di solito omogenei tra loro (stessa dimensione e velocità), costruisce una unità di storage logica, che viene vista dal sistema operativo come un’unica memoria di massa indipendentemente dal tipo di RAID che viene usato e dai dischi che lo compongono.

L’idea di base è quella di combinare più dischi indipendenti per ottenere o **velocità, o sicurezza o capacità superiori** a quelle ottenibili con un qualunque disco SLED (*Single Large Expensive Drive*)

- Velocità: Aumenta le performance distribuendo i dati sui vari dischi (*Striping*) permettendo l’accesso in parallelo ai dati (in lettura)
- Sicurezza: permette di avere dischi rindondati (*Mirroring*) o controlli di parità sui dati.
- Capacità: “sommando” più dischi ne ottengo uno di capacità maggiore.

Il RAID può essere:

- **hardware**, con un controller dei dischi che si occupa di creazione, cancellazione, ricostruzione del RAID
- **software**, gestito dal sistema operativo (sconsigliato)

Vediamo diverse tipologie di RAID, è importante sottolineare che nessun RAID sostituisce un sistema di backup dei dati (il RAID non permette il recupero da malware o disastri naturali, il backup invece sì).

### RAID 0

I **dati vengono distribuiti tra più dischi** (operazione detta ***striping***). ha il principale scopo di aumentare lo storage e mediante la parallelizzazione delle operazione ottiene più performance in scrittura e lettura.

Necessita di almeno 2 dischi.

Non è molto affidabile in quanto non tiene nessun dato di parità o ridondanza, se un disco si rompe tutti i dati vengono persi.

![https://i.ibb.co/mrbYx18S/image.png](https://i.ibb.co/mrbYx18S/image.png)

### RAID 1

Utilizza almeno 2 dischi in cui ognuno è la copia dell’altro (operazione detta ***mirroring***), creando così una ridondanza dei dati, velocità di scrittura ridotta perché il dato deve essere scritto almeno 2 volte, la lettura invece è quella del disco più veloce (dato che la lettura avviene contemporaneamente su più dischi).

Un aspetto molto negativo è lo spazio totale: se hai 2 dischi da 10 terabyte e quindi un totale di 20 terabyte, un disco viene adibito alla copia quindi di spazio effettivo rimangono solamente 10 terabyte.

![https://i.ibb.co/9mD4XmRJ/image.png](https://i.ibb.co/9mD4XmRJ/image.png)

### RAID 4

Necessita di almeno 3 dischi in cui un disco serve per la parità dei dati. Il dato viene spartito su tutti i dischi (tranne quello di parità), questo permette una buona ridondanza dei dati: se un disco viene danneggiato i dati al suo interno possono essere recuperati attraverso un’operazione di *xor* tra i dischi rimanenti.

Presenta un leggero peggioramento alla scrittura (causata dalla scrittura nel disco di parità) e un leggero miglioramento in lettura dato dalla parallelizzazione.

![https://i.ibb.co/DH1MC60w/image.png](https://i.ibb.co/DH1MC60w/image.png)

### RAID 5

**Raid 5**: questo raid è una versione migliorata del raid 4: non è più presente un disco dedicato alla sola parità dei dati, ma la parità viene distribuita alternativamente in tutti i dischi.

La capacità totale è $((n-1)\cdot C)$ dove $n$ è il numero di dischi e $C$ la loro capacità, ad esempio 3 dischi da 500GB: $((3-1)\cdot 500) = 1TB$

Al massimo si può rompere un disco.

![https://i.ibb.co/67tgyVqC/image.png](https://i.ibb.co/67tgyVqC/image.png)

### RAID 6

Necessita di almeno 4 dischi e ha la caratteristica di avere una doppia ridondanza, questo permette di essere un metodo estremamente affidabile. Questa doppia ridondanza causa però una scrittura abbastanza lenta.

Al massimo si possono rompere due dischi.

![https://i.ibb.co/bgQsfxYH/image.png](https://i.ibb.co/bgQsfxYH/image.png)

### RAID 1+0

Necessita di un numero pari di dischi, e devono essere almeno 4.

È una combinazione del raid 0 con il raid 1.

In grado di rigenerare i dati anche in presenza di rotture di più dischi mantenendo buone prestazioni.

Non vengono gestite le informazioni di parità.

la capacità complessiva dei dischi viene dimezzata

```
                    RAID 0
                      │
      ┌———————-———————┼————-——————————┐
      │               │               │
    RAID 1          RAID 1          RAID 1
   ┌—-—┴———┐      ┌—-—┴———┐       ┌—-—┴———┐
   │       │      │       │       │       │
 120GB   120GB  120GB   120GB   120GB   120GB
```

nota che è diverso dal RAID 0+1, in cui si inverte l’uso dei RAID
