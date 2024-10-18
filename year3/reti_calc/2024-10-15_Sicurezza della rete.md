# Sicurezza della rete

Con sicurezza possiamo intendere un insieme di azioni che riguardano ogni aspetto per rendere una rete sicura e mantenerla sicura nel tempo.

Lo standard X.800 definisce tre aspetti chiave: 

- **servizi di sicurezza**:
    
    Ci sono 6+1 servizi che si possono offrire allo strato superiore, questi punti sono:
    
    - Data availability
    - Data authentication
    - Data integrity
    - Secrecy of data (Confidentiality)
    - Access control
    - Non repudiation
    - (Anonymity)
- **meccanismi di sicurezza**: sono delle funzioni che hanno lo scopo di mettere in pratica i servizi sopra citati, tali funzioni sono ad esempio:
    - Criptografia
    - firma digitale
    - meccanismi di integrità
    - meccanismi di controllo degli accessi
    - protocolli di autenticazione
    - …
- **attacchi**: Un sistema al 100% sicuro non esiste, la sicurezza si applica per coprire determinati attacchi proporzionati all’importanza e alla grandezza del sistema da proteggere.

## Servizi di sicurezza

Approfondiamo il punto relativo ai servizi di sicurezza.

### Availability

Significa che il sistema deve essere sostanzialmente raggiungibile.

Gli attacchi DoS minano questo servizio saturando le risorse fisiche necessarie al funzionamento del sistema.

Per garantire al più possibile l’availability è necessario avere un buon design della rete e minimizzare il danno da un possibile attacco DoS.

### Confidentiality

Significa che i dati scambiati siano confidenziali tra i partecipanti dello scambio.

Per garantire questo aspetto sono necessari meccanismi di crittografia

## Integrity

Significa che i dati devono raggiungere la destinazione senza subire modifiche nel tragitto.

Per garantire questo aspetto sono necessari meccanismi di hashing

### Authentication

Si divide in:

- **Autenticazione dell’origine dei dati**: chi riceve i dati deve essere certo che ha dato origine hai dati sia chi dice di essere.
- **Autenticazione del peer**: chi riceve i dati deve essere certo che chi consegna i dati sia chi dice di essere

Per garantire questo aspetto sono necessari meccanismi di firma digitale

### Access control

L’accesso deve essere permesso solamente a chi è autorizzato ad accedere.

Non garantire il controllo può permettere situazione in cui il sistema viene sfruttato per attaccarne un altro a nostra insaputa. Potremmo quindi essere accusati di aver partecipato all’attacco anche se non è così.

Per garantire questo aspetto sono necessari meccanismi di autenticazione ed identificazione

### Non repudiation

Il non repudio previene che un mittente neghi di essere stato lui ad inviare un messaggio, oppure che chi riceve il messaggio neghi di averlo ricevuto.

Per garantire questo aspetto sono necessari meccanismi firma digitale

### Anonymity

Questo non è un servizio canonico

L’abilità di usare un sistema senza che il sistema sia in grado di identificare l’utente.

Per garantire questo aspetto sono necessari meccanismi come Tor, freenet, ecc

## Sicurezza nella comunicazione

Quando si gestisce un sistema di comunicazione si fa riferimento ad una astrazione di questo tipo:

![https://i.ibb.co/H2Jjv8s/image.png](https://i.ibb.co/H2Jjv8s/image.png)

In cui **Alice** e **Bob** vogliono comunicare tra loro, mentre **Eve** è l’attaccante che controlla il canale di comunicazione.

Alice e Bob devono scambiarsi dei messaggi e trattano il canale di comunicazione come un tubo in cui mettere o prendere i messaggi.

Il canale di comunicazione può essere di qualsiasi tipo, ad esempio internet.

Eve può fare qualsiasi cosa sul canale: intercettare i messaggi, duplicarli, non farli arrivare, modificarli (non può rompere la crittografia dei messaggi).

Alice e bob trasformano i propri messaggi con dei meccanismi per non inviare il testo in chiaro, ma messaggi crittografati.

Per fare in modo che Alice e Bob si accordino sul sistema di trasformazione devono ricevere delle credenziali da una entità terza affidabile (Anche Eve può interagire con questa entità)

Un workflow sulla sicurezza consiste nell’identificare gli attori nel modello e fare delle scelte:

- di quali servizi di sicurezza ho bisogno?
- in che modo possono attaccare il sistema
- da quali attacchi non vale la pena difendersi?
- quasi servizi mi posso permettere?
- quali meccanismi adottare?
- adottando troppe misure di sicurezza sto rendendo inutilizzabile il sistema?

Si tratta sempre di un **trade-off tra sicurezza e usabilità.**

## Crittografia

La crittografia permette di avere:

- integrità (tramite **funzioni hash**)
- segretezza (tramite **cifratura**)
- non repudiation (tramite **firma digitale**)
- componendo varie funzione sopra citate si può ottenere anche
    - controllo degli accessi, anonimità, autenticazione

**Algoritmo crittografico**: Una sequenza di operazioni matematiche che possono essere applicate ad un messaggio

**Funzione crittografica**: un blocco di codice che implementa l’algoritmo per fornire meccanismi di sicurezza.

**Protocollo di sicurezza**: È un insieme di regole che definiscono come devono essere utilizzati algoritmi crittografici e funzioni crittografiche per garantire una comunicazione sicura.

Per minimizzare il rischio di falle di sicurezza è importante cercare di seguire queste regole:

- non usare algoritmi di crittografia sconosciuti o inventarsene uno
- non usare funzione crittografiche closed source
- usare le funzioni più utilizzate e aggiornate
- usare protocollo standard
- Restringere il servizio solo ad utenti che supportano la versione più recente dei protocolli

## Funzioni hash

Una **funzione hash** è una funzione unidirezionale che viene applicata su dei dati di dimensione variabile e genera un **digest**, cioè una stringa di grandezza fissa, più grande è la dimensione della stringa minori saranno le collisioni.

Le funzioni hash vengono usate per garantire **l’integrità dei dati**: infatti inviando oltre che al messaggio anche il digest generato dalla funzione hash, il destinatario potrà ricalcolare la funzione hash sul messaggio e controllare che i due digest corrispondano.

![https://i.ibb.co/VNpWJ4W/image.png](https://i.ibb.co/VNpWJ4W/image.png)

Funzioni hash sono ad esempio MD5, SHA1, SHA 256, …

### Proprietà delle funzioni hash

1. l’input può essere di qualsiasi dimensione
2. l’output ha dimensione fissa
3. calcolare la funzione hash di un input deve essere computazionalmente efficiente
4. Data che il dominio della funzione hash (l’input) è molto più grande rispetto al codominio (l’output) è possibile che si verifichino delle **collisioni** (input diversi generano lo stesso output)
5. dato l’output, trovare l’input che dato in pasto alla funzione ha generato un tale output deve essere computazionalmente impossibile
6. dato un input trovare un altro input diverso che genera lo stesso output deve essere computazionalmente impossibile.
    
    input simili non devono generare un output simile, l’output deve essere impredicibile.
    
7. trovare due input diversi che generano lo stesso output deve essere computazionalmente impossibile

Nota: con **computazionalmente impossibile** si intende che ad oggi non si conosce un algoritmo di complessità polinomiale in grado di risolvere il problema.

Dato che la dimensione dell’output è fissa, se abbiamo un input grande sicuramente delle informazione vengono perse durante l’hashing.

Inoltre a data la presenza di collisioni se un attaccante che ha un output hashato e trova un input che genera tale output non saprà se l’input è il messaggio originale o solo una collisione.
