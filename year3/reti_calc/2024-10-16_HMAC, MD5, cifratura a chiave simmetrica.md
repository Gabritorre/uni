# HMAC, MD5, cifratura a chiave simmetrica

Abbiamo visto come Alice, nel tentativo di garantire l’integrità del messaggio, assieme al messaggio manda anche il relativo hash. Ma dato che Eve controlla il canale di comunicazione quello che può fare è modificare il messaggio, calcolare un nuovo hash e mandarlo a Bob, il quale non si accorgerà di nulla.

Un modo per raggirare questo problema è utilizzare **due canali separati per il messaggio e per l’hash** (supponendo che l’attaccante non possa controllare entrambi i canali) ma questo non sempre è fattibile.

## HMAC

Una soluzione al precedente problema senza utilizzare due canali separati è quello di utilizzare un HMAC.

L'**HMAC** (*Hashed Message Authentication Code*) è un meccanismo di autenticazione dei messaggi che utilizza una funzione hash che prende in input il messaggio e una chiave segreta per generare il digest.

Quindi Alice e Bob devono accordarsi sulla chiave e sulla funzione hash da usare, in questo modo solo loro possono verificare l’integrità del messaggio.

![](https://i.ibb.co/943vXb6/image.png)

In questo caso se Eve intercetta il messaggio non riesce a calcolare l’hash del messaggio modificato dato che non conosce la chiave, quindi Bob si accorgerebbe che il messaggio non è valido.

Vantaggi:

- Fornisce **integrità** usando un solo canale di comunicazione
- Fornisce **autenticazione**: Bob sa che il messaggio viene da Alice in quanto solo lei conosce la chiave

Svantaggio:

- Serve un canale di comunicazione **sicuro** per poter accordarsi sulla chiave segreta.

### Sicurezza dei canali

Spesso i protocolli hanno bisogno di un canale sicuro per poter funzionare, un canale che fornisce segretezza e/o autenticità.

Nel precedente esempio abbiamo bisogno di un canale sicuro per accordarsi sulla chiave.

Il canale dove si scambiano messaggio può essere insicuro, ma viene garantita la segretezza tramite la crittografia ottenuta grazie al precedente scambio di chiavi.

### Generazione delle chiavi

Alice e Bob non devono perdere o dimenticarsi la chiave, altrimenti non possono più comunicare, tenteranno quindi di usare una chiave troppo semplice. A questo punto Eve potrebbe fare brute force e indovinare la chiave.

Quello che si può fare è di sfruttare la randomicità delle funzioni hash per generare una chiave di caratteri senza significato partendo da una password facile da ricordare tanto quanto difficile da indovinare.

Alice e Bob usano un canale sicuro per accordarsi su una password forte, la chiave sarà ottenuta da una fuzione hash su tale password.

Eve può aspettarsi che venga usata questa tecnica e da qui nasce l’importanza di usare password molto forti in modo da rendere vano un attacco di brute force.

## CRAM-MD5

CRAM-MD5 è un protocollo che permette di avere un servizio di autenticazione dell’utente basato sull’uso dell’HMAC.

Il sistema funziona tramite un  meccanismo di *challenge-response*, immaginiamo che **un client si voglia autenticare al server**, **i**l protocollo funziona in questo modo:

- il server crea una challenge $C$ in questo formato “timestamp@dominio” e la manda al client
- Il client ha la chiave segreta condivisa $K$ e computa $D=\text{HMAC}(C, K)$ rispondendo al server con il proprio username e $D$
- Il server cerca l’username nel suo database, se presente, ottiene la rispettiva chiave e computa a sua volta $D’ = \text{HMAC}(C, K)$, se $D=D’$ allora l’autenticazione ha successo

![](https://i.ibb.co/WB4RP2J/image.png)

Questo protocollo è deprecato per problemi di sicurezza:

- la funzione hash che si utilizzava è MD5 che ad oggi non è ritenuta sicura
- Il client non autentica il server, non sa quindi se è veramente chi dice di essere
- La chiave viene mantenuta in chiaro nel server
- Possibili attacchi brute force offline: l’attaccante può intercettare la challenge e l’HMAC, può quindi fare brute force sulla chiave fino a che non ottiene l’HMAC corretto

## Cifratura a chiave simmetrica

Gli elementi fondamentali di un sistema cifratura sono:

- cifrario (algoritmo)
- chiave (informazione)

**Principio di Kerchoffs**: Un sistema crittografico dovrebbe essere sicuro anche se tutto ciò che riguarda il sistema, fatta eccezione per la chiave, fosse di dominio pubblico. 

**La segretezza deve stare nella chiave e non nell’algoritmo usato.**

Il funzionamento è simile a quello dell’HMAC: Alice e Bob usano un canale sicuro per accordarsi su una chiave condivisa e sul cifrario da usare (un cifrario ritenuto sicuro oggi è AES).

- Quando Alice vuole inviare un messaggio, utilizza AES usando come input il messaggio e la chiave, verrà così generato un messaggio criptato
- Quando Bob riceve il messaggio criptato, utilizza AES usando come input il messaggio criptato e la chiave, recuperando così il messaggio originale

Quindi lo **stesso algoritmo** viene utilizzato sia per **cifrare** che per **decifrare**.

Un cifrario trasforma un testo in chiaro in un testo cifrato usando una chiave. Le operazioni di base di un cifrario sono **sostituzioni** (rimpiazzare un simbolo con un altro) e **trasposizioni** (cambiare l’ordine dei simboli)

Ad esempio un cifrario che utilizza solo sostituzioni è il **cifrario di Cesare** che rimappa le lettere dell’alfabeto con le lettere 13 posizioni più avanti:

![](https://i.ibb.co/BZPDnHR/image.png)

Un cifrario funziona se non c’è una correlazione statistica (ad esempio la frequenza di lettere) tra il testo in chiaro e il testo cifrato.

Un algoritmo teoricamente perfetto esiste e si chiama One-time-pad (**OTP**) o cifrario di Vernam. È l’unico algoritmo la cui affidabilità è stata dimostrata matematicamente.

### Funzionamento di OTP:

- Alice genera un stringa random $K$ di $n$ bit. Trasmette questa stringa a Bob su un **canale sicuro**
- Per cifrare un messaggio lungo $m$ bit, con $m < n$, Alice prende una porzione $K’$ della chiave $K$ lunga esattamente quanto il messaggio (quindi $m$ bit) e calcola $C = M\oplus K’$ dove $\oplus$ è l’operazione di XOR binario
- la porzione di chiave presa non deve essere riutilizzata in futuro.
- Bob per recuperare il messaggio esegue semplicemente lo XOR tra il messaggio cifrato e la chiave

Questo sistema è ritenuto perfetto perché se immaginiamo di avere un messaggio di 3 bit e quindi anche una chiave di 3 bit, a causa dell’operazione di XOR fare un attacco di brute force equivale a ottenere tutte le possibili stringhe composte da 3 bit.

Quindi facendo brute force sulla chiave si ottengono messaggi diversi che possono essere perfettamente validi e plausibili

![](https://i.ibb.co/ZY2M9W5/image.png)

Ovviamente un attaccante può dedurre i risultati più plausibili dal contesto, se sa che si tratta di testo scritto in italiano, potrebbe scartare i risultati che non sono scritti in italiano, ma tra quelli scritti in italiano non sa quale sia quello originale.

### Limiti nell’uso

Nonostante la sua sicurezza dimostrata, non è utilizzato nella realtà per motivi pratici:

- ha bisogno di numeri veramente random e non pseudorandom
- mittente e il destinatario devono scambiarsi in modo sicuro una chiave segreta condivisa, lunga **almeno quanto il messaggio** da cifrare, tanto vale allora usare il canale sicuro per inviare direttamente il messaggio.
- le chiavi possiedono un solo utilizzo (da cui deriva il “One-time”)

## Approccio degli algoritmi moderni

Gli algoritmi moderni usano **combinazioni ripetute di sostituzioni e trasposizioni** per creare algoritmi con le seguenti proprietà:

- la lunghezza della chiave è fissa, non deve necessariamente essere lunga quanto il messaggio
- la correlazione tra il testo in chiaro e il testo cifrato è talmente bassa che è computazionalmente impossibile ottenere il messaggio originale da quello cifrato

## Comunicazione finale

Una volta che Alice e Bob hanno concordato una chiave condivisa in modo sicuro, allora possiamo garantire **integrità, Segretezza e autenticazione**, usando HMAC e cifratura.

![](https://i.ibb.co/1fMSBkb/image.png)

1. Alice usa la cifratura a chiave simmetrica per cifrare il messaggio
2. Il messaggio cifrato assieme alla chiave vengono dati alla funzione hash dell’HMAC, che produce un digest
3. il digest e il messaggio cifrato vengono concatenati e mandati al canale di comunicazione
4. Bob riceve i dati e separa il digest dal messaggio cifrato
5. manda il messaggio cifrato assieme alla chiave alla funzione hash dell’HMAC per ottenere un digest candidato
6. il digest generato viene confrontato con il digest ricevuto:
    1. se sono uguali allora il messaggio non è stato manomesso e il processo continua
    2. se sono diversi allora il messaggio è stato manomesso e il processo si ferma
7. Bob decifra il messaggio cifrato usando la chiave
8. Bob ha recuperato il messaggio originale, sapendo che è integro, la comunicazione è stata segreta e il mittente è sicuramente Alice (in quanto è l’unica altra persona a conoscere la chiave condivisa)

Questo metodo è sufficientemente sicuro fintanto che:

- le funzione di cifratura e di hashing sono robuste
- lo scambio della chiave condivisa è avvenuta prima di cominciare la comunicazione utilizzando un canale sicuro
- la chiave è di una lunghezza sufficientemente grande (256 bit è sufficiente ad oggi)

Nota: generalmente si usano chiavi diverse per la cifratura e per l’hashing.

Una variante di questo sistema è utilizzato nelle reti wifi odierne.

In conclusione la cifratura a chiave simmetrica fornisce:

- segretezza
- integrità
- autenticazione

ma ha bisogno di:

- un canale segreto e autenticato per fare il set-up della comunicazione
