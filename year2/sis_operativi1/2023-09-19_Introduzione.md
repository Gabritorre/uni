# Introduzione ai sistemi operativi

## Definizione di sistema operativo

Il computer moderno è un sistema composto da molte parti hardware e scrivere software che tenga conto di tutte le parti è a dir poco impossibile, per questo è fondamentale il **sistema operativo** cioè un software (o meglio un insieme di processi) che si occupa principalmente di due cose (pensandolo ad alto livello)

1. **gestire le risorse**: quindi far comunicare e gestire le componenti hardware, e ovviamente le risorse software le quali richiedono **tempo e spazio** che il sistema operativo deve gestire
2. **essere vista come una macchina astratta**: quindi fornire all'utente un'interfaccia che permetta di comunicare semplicemente con il computer (**trasparenza**) senza preoccuparsi delle operazioni complesse che fa la macchina (**mascheramento**).

Nella seguente immagine si vede che il sistema operativo fa da cuscinetto tra l'hardware e il software

![](https://i.ibb.co/TBkYbbD/achitecture.png)

Distinguiamo la differenza tra programma e processo:

- **Programma**: è il codice eseguibile che sta in memoria di massa
- **Processo**: è il programma che è attualmente in esecuzione sulla CPU

Quindi un programma diventa un processo quando esso viene eseguito

Il sistema operativo ha 2 modalità con cui eseguire i processi che differiscono in base ai permessi che deve avere un processo:

- **user mode**: permessi limitati, generalmente i programmi che usa l'utente normale vengono eseguiti in questa modalità
- **kernel mode**: permessi totali, i processi del sistema operativo utilizzano questa modalità


## Storia dei sistemi operativi

la storia dei sistemi operativi si suddivide in 5 generazioni:

### Gen 1

- Periodo 1945 - 1955
- Non esiste ancora il concetto di sistema operativo. In questi anni si sviluppano le prime macchine (MARK 1 che funzionava a relè, ENIAC a valvole termoioniche, EDVAC su transistor).
- Limiti della I generazione: affidabilità scarsa, ruoli non distinti, complessità di uso, lentezza

### Gen 2

- Periodo 1955 - 65
- Nascono i primi linguaggi a più alto livello come assembly e fortran
- Nasce il concetto di **monoprogrammazione** cioè eseguire un **job** alla volta (con job si intende un programma o un insieme di programmi, che sono memorizzati in memoria)
- C'è una netta separazione dei ruoli (operatori, costruttori, programmatori...)
- Nascono le versioni primordiali del sistema operativo chiamati *monitor*
- Veniva usato un **sistema di elaborazione batch**:
 ![enter image description here](https://i.ibb.co/B3hcbYS/batch.png)
	- a. il programmatore scriveva il programma in fortran o assembly su carta, poi copiarlo su schede perforate
	- b. vari gruppi di schede perforate, quindi più di un job (per questo definito sistema batch) venivano dati ad un calcolatore (1401) in grado di trasferire il contenuto delle schede su un nastro magnetico
	- c. il nastro veniva riavvolto e portato ai calcolatori (7094) dove veniva caricato prima un programma (l'antenato dei sistemi operativi) in grado di leggere i job ed eseguirli uno dietro l'altro
	- d. venivano eseguiti i job e il risultato di ogni job veniva salvato su un ulteriore nastro
	- e. dopo che ogni job ha dato il proprio risultato si estrae il nastro e si portava nella macchina 1401
	- f. qui il nastro veniva letto e si stampavano i risultati dei vari job

Durante l'esecuzione di un sistema batch la memoria si comportava nel seguente modo:

![enter image description here](https://i.ibb.co/G9F2Rkw/memoria-batch.png)


### Gen 3

- Periodo 1965 - 80
- nasce la **multiprogrammazione**: quando un job richiede delle operazioni di I/O la CPU lascia il job in mano alle unità periferiche e si occupa di eseguire un altro job per non perdere tempo, inoltre la memoria viene partizionata per ospitare vari job contemporaneamente
- Vengono sviluppati i circuiti integrati
- Nascono altri linguaggi ad alto livello tra cui **C**
- Si sviluppano degli algoritmi di cpu scheduling (che eseguirà il sistema operativo)
- Nascono i **sistemi timesharing**
- Nascono i sistemi UNIX e lo standard POSIX per rendere compatibili le diverse versioni di UNIX
- Nasce internet

#### Sistemi timesharing

i sistemi timesharing sono delle varianti della multiprogrammazione fatto per far collegare più utenti tramite un terminale alla macchina la quale cercava di soddisfare i job richiesti a turno

In questo meccanismo vengono introdotti i concetti di:
- **cambio di contesto**: ciò ogni volta che si cambia job, il sistema operativo deve salvare le informazioni di quel job e prepararsi ad far partire il job successivo ripristinando eventualmente delle informazioni
- **protezione**: ogni job doveva essere indipendente e quindi non doveva leggere o scrivere nelle memoria di altri job
- **memoria virtuale**: si ingannano i job di possedere più memoria di quella realmente disponibile, e non si fa riferimento agli indirizzi fisici della memoria per agevolare la protezione



### Gen 4

- Periodo 1980 - oggi
- Si sviluppano i **personal computer** e le **workstation** con GUI sempre più semplici da utilizzare
- Trasferimenti di dati tramite la rete sempre più frequente
- Vengono sviluppati tantissimi sistemi operativi
- nasce il modello **client-server** in cui i client fanno delle richieste che il server elabora e poi restituisce un risultato
- cloud computing
- programmazione multithread e programmazione ad oggetti
- Si forma una suddivisione tra software open source e closed source
- Software utilizzabili direttamente su internet


### Gen 5

- Periodo 1990 - oggi
- sempre più forte presenza di dispositivi mobile che possiedono una potenza di calcolo molto elevata
- IoT
