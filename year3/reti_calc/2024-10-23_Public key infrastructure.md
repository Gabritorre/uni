# Public key infrastructure

Vediamo ora come risolvere il problema di scambiarsi le chiavi con RSA in modo affidabile. Cioè come può Alice essere certa che quando riceve la chiave pubblica di Bob essa sia veramente di Bob?

Innanzitutto una chiave è un **file binario** codificato in caratteri ASCII con l’aggiunta di eventuali metadati come nome e indirizzo e-mail.

I metadati ovviamente non garantiscono una prova affidabile su chi ha generato effettivamente la chiave.

Vediamo alcuni metodi informali per associare una chiave ad una identità:

1. **Key fingerprint**: Alice quando genera la chiave, **pubblica l’hash** della chiave (*key fingerprint*) su internet ad esempio sul suo sito web o sul proprio profilo Linkedin. Quando **Bob** riceve la **chiave controlla che l’hash corrisponda** a quello distribuito da Alice. Questo metodo funziona bene in contesti piccoli e informali ma non scala bene per essere usato nel web.
2. **Key server**: Ci sono server sincronizzati in cui è possibile caricare la propria chiave pubblica e cercare le chiavi di altre persone. Questo metodo non garantisce che chi carica la chiave non si spacci per qualcun altro.

## Web of trust

Un terzo metodo è il **Web of trust**: è una rete di contatti in cui i partecipanti certificano l’identità degli altri. Alice e Bob si fidano di Carl, questo significa che:

- possiedono la sua chiave pubblica
- se lui certifica qualcosa Alice e Bob si fidano che sia vero

Carl può quindi certificare che la chiave pubblica di Alice appartenga veramente ad Alice e lo stesso per la chiave pubblica di Bob.

Vediamo come funziona:

1. Alice e Carl si scambiano le fingerprint (hash delle chiavi), lo stesso fanno Bob e Carl
2. Carl manda ad Alice una *key signature*:
    
    $$
    S = E(Priv_C, (Pub_A, "Alice"))
    $$
    
    Cioè Carl cifra, usando la sua chiave privata, la chiave pubblica di alice con la sua identità (il suo nome). Chiunque in possesso della chiave pubblica di Carl può decifrare $S$ e quindi, se si fidano di Carl, verificano la chiave pubblica di Alice.
    
3. Alice manda a Bob la propria chiave pubblica e $S$ e dato che Bob si fida di Carl decifra $S$ con la chiave pubblica di Carl e si fida dell’appartenenza della chiave pubblica di Alice
    
    ![https://i.ibb.co/HHT5ZhQ/image.png](https://i.ibb.co/HHT5ZhQ/image.png)
    

Notiamo come una volta che Alice riceve la propria *key signature* da Carl, esso non è più necessario ai fine della comunicazione, Alice può usare la *key signature* con chiunque si fidi di Carl.

Il sistema può scalare tramite delle catene di fiducia:

![https://i.ibb.co/30M1B99/image.png](https://i.ibb.co/30M1B99/image.png)

Nell’immagine Alice si fida di Carl, Carl e Dory si fidano a vicenda e Francis si fida di Dory. In questo modo Alice può dare a Francis la propria chiave pubblica e le signature di tutti i certificatori della gerarchia di cui si fida.

Francis che si fida di Dory, può usare la chiave pubblica di Dory per verificare Carl, e a sua volta può usare la chiave pubblica di Carl per verificare Alice.

Quindi fintanto che c’è un percorso di certificatori fidati che connette i due attori che vogliono comunicare allora possono comunicare in modo sicuro

![https://i.ibb.co/SwWfZHg/image.png](https://i.ibb.co/SwWfZHg/image.png)

In questo modo Bob sarà certo della chiave pubblica di alice.

L’approccio del **Web of trust** viene utilizzato in contesti specifici, ma si avvicina al metodo utilizzato oggi per certificare le identità delle chiavi, tra gli aspetti importanti abbiamo:

- le ***key signature***: il fatto ci firmare la chiave pubblica assieme all’identità per certificare l’appartenenza della chiave
- la ***trust delegation***: il fatto che se A e B si fidano di C allora C fa da certificatore intermedio
- La **fiducia è asimmetrica**: Quando B ottiene la chiave di A, non è detto che A riesca ad ottenere la chiave di B.

## PKI

Una **PKI** (*Public key infrastructure*) è insieme di tecnologie, standard, politiche e procedure che permette la gestione delle chiavi crittografiche e dei certificati digitali.

La ***Certification Authority*** (CA) è una entità specifica della PKI di cui tutti gli attori nella comunicazione si fidano, è quella che in passato abbiamo definito essere la *trusted third party*

Le CA firmano digitalmente le chiavi pubbliche generando così dei certificati per garantire l’integrità e autenticità delle chiavi:

1. Alice e Bob si fidano della CA, questo significa che:
    1. si fidano che non si comporti male
    2. possiedono la sua chiave pubblica
2. Alice chiede alla CA di firmare la sua chiave pubblica, producendo così un **certificato**
3. Bob quando riceve la chiave pubblica di Alice controlla se è stata firmata dalla CA
4. se è così allora Bob si fida che tale chiave pubblica appartiene ad Alice

## Ottenere il certificato

Alice per ottenere il certificato dalla CA seguirà i seguenti passi:

1. Alice genera chiave pubblica e privata
2. Alice genera una *Certificate Signing Request* (CSR), un file che contiene le sue informazioni e la sua chiave pubblica con la rispettiva firma
    
    $$
    \text{CSR = \{Pub\_A,\,\,\, "Alice",\,\,\, E(Priv\_A, (Pub\_A, "Alice"))\}}
    $$
    
3. Alice manda la CSR alla CA
4. La CA controllerà la sua identità (attraverso un documento) e la validità della CSR, decifrando la firma con la chiave pubblica di Alice
5. La CA genera il certificato
    
    $$
    \text{Certificate = \{CSR, \,\,\,E(Priv\_CA, CSR)\}}
    $$
    

I certificati seguono un formato standard chiamato X.509, composto principalmente da:

- id della CA
- id del certificato
- periodo di validità
- identità del richiedente del certificato
- la chiave pubblica
- firma del certificato

![https://i.ibb.co/7tx282v/image.png](https://i.ibb.co/7tx282v/image.png)

Note:

- Questo processo viene fatto solamente una volta finche non scade il certificato
- Una volta ottenuto il certificato la CA non è più necessaria ai fini della comunicazione
- La CA non viene mai a conoscenza delle chiavi private degli attori che certifica
- Per questioni di performance (dato che il certificato contiene molte cose) la CA firma un hash del certificato (dall’hash è esclusa la firma stessa).

## Verificare il certificato

Quando Bob riceve un certificato da Alice:

1. Controlla che il nome riportato nel certificato sia quello di Alice
2. Controlla che il certificato non sia scaduto
3. Controlla che la CA che lo ha firmato sia una CA riconosciuta (Bob ha un database di CA fidate)
4. Decifra la firma con la chiave pubblica della CA e ottiene l’hash del certificato
5. Computa per conto suo l’hash del certificato (escludendo il campo della firma della CA)
6. Se l’hash computato è uguale all’hash ottenuto dalla decifratura allora il certificato è valido

In questo contesto possiamo pensare ad Alice nella realtà come una persona fisica, una rete wifi o un dominio per un sito web.

## Fiducia con le CA

Quando Bob deve decidere di quali CA fidarsi si ha una **gerarchia di CA** in cui una CA certifica le sottostanti, Bob **si fida solamente di alcune CA** tendenzialmente in alto sulla gerarchia.

Se una CA è certificata da una CA di cui Bob si fida allora Bob si fida anche di quella.

![https://i.ibb.co/N6LM0Kp/image.png](https://i.ibb.co/N6LM0Kp/image.png)

La **Root CA** è una *certification authority* di cui tutti si devono fidare. Ad esempio su Chrome per vedere quali sono le CA di cui il browser si fida è possibile accedere all’url `chrome://certificate-manager/`

Le root CA si firmano i certificati per conto proprio.

Quando Bob visita `www.alice.com` , il server di alice deve fornire il proprio certificato e quello di tutto il cammino fino alla Root CA. Bob dovrà quindi **verificare la validità di tutte le CA nel cammino**.

Se una qualsiasi CA nel cammino non è valida o scade Bob riceverà un warning e potrà proseguire a proprio rischio.

Come per il *Web of Trust* in questo caso il browser dell’utente è riesce a verificare la validità del server ma il server non verifica chi siamo noi. Per implementare anche questo verso è necessario un altro mezzo che generalmente è **l’autenticazione tramite username e password**.

## Certificate Revocation Lists

In determinate situazioni è necessario revocare un certificato, ad esempio quando viene compromessa la segretezza della chiave privata.

Le C*ertificate Revocation Lists* (CRL) sono liste di certificati che sono stati revocati dalla CA, in modo da far sapere a tutti che tali certificati sono stati **revocati prima della data di scadenza pianificata** e non dovrebbero più essere considerati attendibili.

Un CRL viene generato e pubblicato periodicamente, spesso ad un intervallo di tempo definito.

## Insicurezza nelle CA

Abbiamo quindi visto come la comunicazione sicura avviene grazie a delle entità (le CA) di cui ci fidiamo.

È comunque possibile che le CA vengano compromessi ed è già successo in passato con conseguenze molto gravi. È quindi importante avere un alto livello di sicurezza per evitare che le CA vengano compromesse, dato anche che è possibile costruire una propria gerarchia privata di CA.

## Let’s Encrypt

[Let’s Encrypt](https://letsencrypt.org/) è una CA che fornisce gratuitamente dei certificati per i siti web. Sostanzialmente esso ti chiede di mettere un file ad un determinato URL del tuo sito per certificare che tu sia il proprietario.

L’infrastruttura di Let’s Encrypt è la seguente

![https://i.ibb.co/P1RhTKb/image.png](https://i.ibb.co/P1RhTKb/image.png)

- ISGR (*Internet Security Research Group*) è l’infrastruttura che sta dietro a Let’s encrypt
- ECDSA è un altro metodo di cifratura a chiave pubblica alternativo ad RSA

Qui è descritto il funzionamento: [https://letsencrypt.org/it/certificates/](https://letsencrypt.org/it/certificates/)
