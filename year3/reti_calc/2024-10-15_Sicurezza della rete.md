# Sicurezza della rete

Con sicurezza della rete possiamo intendere un insieme di azioni che riguardano ogni aspetto per rendere una rete sicura e mantenerla sicura nel tempo.

Lo standard X.800 definisce tre aspetti chiave: 

- **servizi di sicurezza**:
    
    Ci sono 6+1 servizi a cui dedicare risorse per rendere più sicuro un sistema:
    
    - **Data availability**
    - **Data authentication**
    - **Data integrity**
    - **Confidentiality/Secrecy**
    - **Access control**
    - **Non repudiation**
    - (Anonymity)
- **meccanismi di sicurezza**: sono delle funzioni che hanno lo scopo di implementare i servizi sopra citati, ad esempio:
    - criptografia
    - firma digitale
    - hashing
    - meccanismi di controllo degli accessi
    - protocolli di autenticazione
    - …
- **attacchi**: Un sistema al 100% sicuro non esiste, la sicurezza si applica per coprire determinati attacchi proporzionati all’importanza e alla grandezza del sistema da proteggere.

## Servizi di sicurezza

Approfondiamo i vari servizi di sicurezza.

### Availability

Significa che il sistema deve essere sostanzialmente raggiungibile.

Gli attacchi DoS minano questo servizio saturando le risorse fisiche necessarie al funzionamento del sistema.

Per garantire al più possibile l’availability è necessario avere un buon design della rete e minimizzare il danno da un possibile attacco DoS.

### Confidentiality

Significa che i dati scambiati rimangono riservati ai soli partecipanti dello scambio.

Per garantire questo aspetto sono necessari meccanismi di crittografia.

### Integrity

Significa che i dati devono raggiungere la destinazione senza subire modifiche nel tragitto.

Per garantire questo aspetto sono necessari meccanismi di hashing.

### Authentication

Si divide in:

- **Autenticazione dell’origine dei dati**: chi riceve i dati deve essere certo che chi ha dato origine ai dati sia chi dice di essere.
    
    Ad esempio, se Alice riceve un'email da Bob, l'autenticazione dell'origine dei dati è il servizio che garantisce che il vero autore dell'email sia effettivamente Bob, indipendentemente da chi consegna l'email (ad esempio, Gmail).
    
- **Autenticazione del peer**: chi riceve i dati deve essere certo che chi consegna i dati sia chi dice di essere.
    
    Ad esempio, tra Alice e Bob ci sono diversi router che trasportano le informazioni. Alice riceve da Carl (un intermediario lecito) i dati generati da Bob e deve essere sicura che le informazioni appena ricevute siano state effettivamente inviate da Carl e non siano state alterate da un'entità che finge di essere Carl.
    

Per garantire questo aspetto sono necessari meccanismi di firma digitale.

### Access control

L’accesso deve essere permesso solamente a chi è autorizzato ad accedere.

Non garantire questo servizio può permettere situazioni in cui il sistema viene sfruttato per attaccarne un altro a nostra insaputa. Potremmo quindi essere accusati di aver partecipato all’attacco anche se non è così.

Per garantire questo aspetto sono necessari meccanismi di autenticazione ed identificazione.

### Non repudiation

Il non ripudio previene che un mittente neghi di essere stato lui ad inviare un messaggio, oppure che chi riceve il messaggio neghi di averlo ricevuto.

Per garantire questo aspetto sono necessari meccanismi firma digitale

### Anonymity

Questo non è un servizio canonico dello standard X.800.

Indica l’abilità di usare un sistema senza che il sistema sia in grado di identificare l’utente.

Per garantire questo aspetto sono necessari meccanismi come Tor, freenet, ecc

Questo servizio ha una doppia faccia: da un lato può essere usato per commettere atti illegali, dall’altro permette di dar voce a chi non può usufruire dei propri diritti civili (a causa di guerre, politiche restrittive, ecc…)

## Sicurezza nella comunicazione

Quando si gestisce un sistema di comunicazione si fa riferimento ad una astrazione di questo tipo:

![](https://i.ibb.co/H2Jjv8s/image.png)

**Alice** e **Bob** vogliono comunicare tra loro, mentre **Eve** è l’attaccante che controlla il canale di comunicazione.

Alice e Bob devono scambiarsi dei messaggi e trattano il canale di comunicazione come un tubo in cui mandare o ricevere i messaggi.

Il canale di comunicazione può essere di qualsiasi tipo, ad esempio Internet.

Eve può fare qualsiasi cosa sul canale: intercettare i messaggi, duplicarli, non farli arrivare, modificarli (però non può rompere la crittografia dei messaggi).

Alice e bob trasformano i propri messaggi con dei meccanismi per non inviare il testo in chiaro, ma piuttosto messaggi cifrati.

Per fare in modo che Alice e Bob si accordino sul sistema di trasformazione devono ricevere delle credenziali da una entità terza affidabile (Anche Eve può interagire con questa entità)

Un workflow per rendere sicuro un sistema consiste nell’identificare gli attori del modello e fare delle scelte:

- di quali servizi di sicurezza ho bisogno?
- in che modo possono attaccare il sistema?
- da quali attacchi non vale la pena difendersi?
- quali servizi mi posso permettere?
- quali meccanismi adottare?
- adottando troppe misure di sicurezza sto rendendo inutilizzabile il sistema?

Si tratta sempre di un **trade-off tra sicurezza e usabilità.**

## Crittografia

La crittografia è la scienza che studia come rendere segrete delle informazioni.

La crittografia permette di avere:

- integrità (tramite **funzioni hash**)
- segretezza (tramite **cifratura**)
- non ripudio (tramite **firma digitale**)
- componendo varie funzioni sopra citate si può ottenere anche
    - controllo degli accessi
    - anonimità
    - autenticazione

**Algoritmo crittografico**: Una sequenza di operazioni matematiche che possono essere applicate ad un messaggio

**Funzione crittografica**: un blocco di codice che implementa l’algoritmo crittografico per fornire meccanismi di sicurezza.

**Protocollo di sicurezza**: È un insieme di regole che definiscono come devono essere utilizzati algoritmi crittografici e funzioni crittografiche per garantire una comunicazione sicura.

Per minimizzare il rischio di falle di sicurezza è importante cercare di seguire queste regole:

- non usare algoritmi di crittografia sconosciuti e non inventarsene di nuovi per conto proprio
- non usare funzione crittografiche closed source
- usare le funzioni più utilizzate e aggiornate
- usare protocolli standard
- Restringere il servizio solo ad utenti che supportano la versione più recente dei protocolli

## Funzioni hash

Una **funzione hash** è una funzione unidirezionale (non invertibile) che viene applicata su dei dati di dimensione variabile e genera un **digest**, cioè una stringa di grandezza fissa. Più grande è la dimensione della stringa in output minori saranno le probabilità di collisioni.

Le funzioni hash vengono usate per garantire **l’integrità dei dati**: infatti inviando oltre che al messaggio anche il digest, il destinatario potrà ricalcolare la funzione hash sul messaggio e controllare che i due digest corrispondano.

![](https://i.ibb.co/VNpWJ4W/image.png)

Funzioni hash sono ad esempio MD5, SHA 1, SHA 256, …

### Proprietà delle funzioni hash

1. l’input può essere di qualsiasi dimensione
2. l’output ha dimensione fissa
3. calcolare la funzione hash di un input deve essere computazionalmente efficiente
4. Dato che il dominio della funzione hash (l’input) è molto più grande rispetto al codominio (l’output) è possibile che si verifichino delle **collisioni** (input diversi generano lo stesso output)
5. possedendo l’output, trovare l’input che ha generato un tale output deve essere computazionalmente impossibile
6. dato un input, trovare un altro input che genera lo stesso output deve essere computazionalmente impossibile.
    
    input simili non devono generare un output simile, l’output deve essere impredicibile.
    
7. trovare due input diversi che generano lo stesso output deve essere computazionalmente impossibile

Nota: con **computazionalmente impossibile** si intende che ad oggi non si conosce un algoritmo di complessità polinomiale in grado di risolvere il problema.

Dato che la dimensione dell’output è fissa, se abbiamo un input grande sicuramente delle informazione vengono perse durante l’hashing.

Inoltre, data la presenza di collisioni, se un attaccante che possiede un output, trova un input che genera lo stesso output, non saprà se l’input è il messaggio originale o solo una collisione.
