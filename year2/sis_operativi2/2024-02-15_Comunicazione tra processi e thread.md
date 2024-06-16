# Comunicazione tra processi e thread

Nel sistema operativo girano molti processi e tra di loro ci possono essere casi di **competizione e cooperazione**

## Competizione

**La competizione** si ha quando più processi vogliono la stessa risorsa (sia hardware che software).
Queste competizioni posso creare delle interferenze con il normale funzionamento del sistema come cali di prestazioni e nei casi più estremi il crash del sistema.

Il sistema operativo deve gestire le competizioni al fine di rendere il sistema più fluido possibile all'utente e allo stesso tempo deve illudere i processi di avere tutto il sistema disponibile per loro.

## Cooperazione

In altri casi abbiamo la cooperazione tra processi, cioè processi che contribuiscono e comunicano tra loro per raggiungere un obiettivo in comunque.

In questo caso abbiamo dei vantaggi quali:
- **condivisione**: i processo comunicano, si sincronizzano e si scambiano informazioni
- **parallelismo**: sfruttare un sistema multi-core per eseguire in parallelo un programma
- **modularità**: suddividere un compito complesso in attività più semplici che verranno eseguite da processi diversi
- **multitasking**: può risultare comodo eseguire un’attività mentre un'altra continua in background.
- **replicazione**: quando è necessaria l'esecuzione simultanea su istanze diverse, è possibile replicare l'istanza su più processi

## Modelli di comunicazione

Vediamo i due modelli principali per la comunicazione tra processi:

- **message passing** i processi comunicano scambiandosi direttamente dei messaggi (tecnica utilizzata dai processi)
- **shared memory** i processi possiedono una memoria condivisa a cui accedono in lettura e scrittura (tecnica utilizzata dai thread).

Inizialmente ci occuperemo della comunicazione con scambio di messaggi.

## Scambio dei messaggi

I processi dispongono di due operazioni principali:

- `send(messaggio)`
- `receive(&messaggio)`

esse vengono realizzate tramite delle *system call* al sistema operativo dette **IPC** (InterProcess Communication)

Il mittente e il destinatario del messaggio possono essere indicati direttamente o indirettamente:

### Nominazione diretta

Il mittente e il destinatario sono indicati esplicitamente:

- `send(destinatario, messaggio)`
- `receive(mittente, &message)`

il **vantaggio** di questa comunicazione è la *semplicità*

Lo **svantaggio** sta nel fatto che è necessario un accordo tra i processi per potersi identificare, e questo accordo non è facile da implementare.

### Nominazione indiretta

In questa tecnica vengono utilizzate delle **porte**, cioè delle memorie temporanee che contengono i messaggi. I processi che puntano alla stessa porta la possono utilizzare per comunicare tra loro.

- `send(porta, messaggio)`
- `receive(porta, &message)`

In Unix le **pipe** utilizzano questa implementazione

## Comunicazione sincrona e asincrona

Le operazioni di invio e ricezione possono essere di tipo sincrono o asincrono:

- **send sincrona**: la *send* attende fino a quando non avviene una *receive* dal destinatario
- **send asincrona**: la *send* non attende che avvenga una *receive*
- **receive sincrona**: la *receive* attende attivamente l'arrivo di messaggi
- **receive asicrona**: la *receive* controlla ad intervalli regolari la presenza di nuovi messaggi (ritornando NULL se non ce ne sono di nuovi)

## Produttore-consumatore

La tecnica di scambio di messaggi è utile nella situazione in cui un programma "produce" un dato e un altro programma "consuma" il dato.

Vediamo degli esempi con la shell di linux:
```bash
ls -la | grep <stringa>
```

Il precedente comando utilizza due programmi (`ls` e `grep`) e utilizza una *pipe* per far comunicare i due processi. In questo particolare esempio abbiamo una **comunicazione con nominazione indiretta con send asincrona e receive sincrona**.

La *pipe* viene creata dal processo padre prima di avviare i due processi, in modo che possa essere referenziata da entrambi i processi durante la loro creazione.
Il processo che esegue `ls -la` genera un output che mette nel buffer della *pipe*, successivamente il processo che esegue `grep <stringa>` legge il dato e genera un nuovo output.

Per mostrare visivamente che la send è asincrona modifichiamo il comando nel seguente modo:

```bash
(ls -al; echo "DONE ls"  1>&2) | (sleep 10; grep <stringa>)
```

Descrizione: subito dopo l'esecuzione di `ls` viene fatta una stampa "DONE ls" che viene deviata sullo *standard error* con la sintassi `1>&2` perché vogliamo stamparla e non darla in pasto a `grep`.
Contemporaneamente nel blocco destro di istruzioni avviene uno sleep di 10 secondi e poi viene fatta la `grep`.
Il comportamento che otteniamo eseguendo il comando è quello della stampa immediata di "DONE ls", una attesa di 10 secondi e poi l'output della grep.
Questo significa che il comando `ls` non ha atteso che la `grep` ricevesse il messaggio (questo lo intuiamo perché viene eseguita la stampa di `DONE ls` immediatamente), concludiamo quindi che il comando `ls` fa una send asincrona.

La pipe, di default, rende la **ricezione sincrona**: il processo ricevente attende attivamente la presenza di messaggi in arrivo.

ad esempio, la seguente riga:

```bash
(sleep 2;ls -al) | (echo "START"; grep parola; echo "DONE")
```


dobbiamo immaginare che i due blocchi di istruzioni vengono eseguiti contemporaneamente, e quando il blocco di destra necessità di un input si interrompe la sua esecuzione e rimane in attesa.

Infatti quello che accade è:
 la stampa immediata di "START" $\to$ la `grep` rimane in attesa di un input $\to$ attesa di 2 secondi $\to$ esecuzione della `ls` che scrive nel buffer il dato $\to$ la `grep` viene eseguita $\to$ l'esecuzione può proseguire e viene stampato "DONE"
