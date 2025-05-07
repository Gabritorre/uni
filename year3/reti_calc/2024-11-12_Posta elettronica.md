# Posta elettronica

L’architettura semplificata di un sistema di posta elettronica la possiamo immaginare come segue:

![](https://i.ibb.co/9wdgRMG/image.png)

Le e-mail non viaggiano direttamente da un computer all'altro, ma coinvolgono diversi componenti come:

- client di posta elettronica del mittente
- server di posta elettronica del mittente
- server di posta elettronica del destinatario
- e client di posta elettronica del destinatario.

I client di posta elettronica vengono chiamati **MUA** (*Mail User Agent*), i server che si occupano della trasmissione sono chiamati **MTA** (*Mail Transfer Agents*)

La catena di server può essere più lunga di due.

Diversi protocolli sono coinvolti nel processo di invio e ricezione delle e-mail:

- *Internet Message Format* (IMF) e *Multipurpose Internet Mail Extensions (MIME)* specificano come vengono formattati i messaggi e-mail.
- *Simple Mail Transfer Protocol* (**SMTP**) specifica il protocollo necessario per recapitare il messaggio dal client di Alice al server di Bob.
- *Post Office Protocol* (**POP**) e *Internet Message Access Protocol* (**IMAP**) specificano come Bob può recuperare le e-mail dal suo server.

![](https://i.ibb.co/grXjLk6/image.png)

## Formato delle e-mail

I messaggi e-mail sono composti da due parti:

- un header contenente i metadati come il mittente, destinatario, l’oggetto, CC, la data.
- Il corpo del messaggio

I messaggi e-mail sono messaggi di testo, inizialmente formattati in testo ASCII, successivamente la codifica è stata estesa.

Esempio di una mail:

```
From: Bob Smith <Bob@machine.example>
To: Alice Doe <alice@example.net>, Alice Smith <Alice@machine.example>
Subject: Hello
Date: Mon, 8 Mar 2010 19:55:06 -0600

This is the "Hello world" of email messages.
This is the second line of the body
```

Oltre ai campi standard nell’header, ci sono altre intestazioni rilevanti come:

- `Message-Id`: ID univoco del messaggio, può essere usato da altri messaggi per riferirsi a questo messaggio
- `In-reply-to`: usato quando si risponde a un messaggio precedente (contiene il suo Message-Id)
- `Received`: aggiunto da ogni server che elabora l'e-mail per scopi di debugging
- `X-`: campi personalizzati aggiunti dal client o dal server

### MIME

Nel corpo del messaggio, oltre a scrivere del testo ASCII, abbiamo bisogno di inviare file binari e allegati. Con l'introduzione di **MIME (Multipurpose Internet Mail Extensions)**, è diventato possibile inviare diversi tipi di contenuto, inclusi file binari, immagini e audio.

MIME utilizza header specifici come "`Content-Type`" (che indica il tipo di contenuto nel messaggio) e "`Content-Transfer-Encoding`" (che indica come è codificato il contenuto del messaggio) per definire il formato e la codifica del contenuto.

Ad esempio questa email:

![](https://i.ibb.co/sRh696T/image.png)

può essere codificata in questo modo:

```
From: Alice <alice@email.it>
Date: Wed, 18 Oct 2023 16:51:15 +0200
Message-ID: <CAMJfarHWLkY1hBNiPuxCP9_kV+XJNg-addi3kCCnMrw1-TU6sg@mail.gmail.com>
Subject: image attached
To: bob@email.it
Content-Type: multipart/mixed; boundary="00000000000061c37d0607fec679"

--00000000000061c37d0607fec679
Content-Type: text/plain; charset="UTF-8"

1x1 pixel image attached

--00000000000061c37d0607fec679
Content-Type: image/gif; name="1pixel.gif"
Content-Disposition: attachment; filename="1pixel.gif"
Content-Transfer-Encoding: base64
Content-ID: <f_lnvvfaz20>
X-Attachment-Id: f_lnvvfaz20

R0lGODlhAQABAIAAAP///////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACwAAAAAAQABAAACAkQBADs=
--00000000000061c37d0607fec679--

```

## SMTP

SMTP (Simple Mail Transfer Protocol) è un protocollo testuale utilizzato per inviare messaggi e-mail dal client al server mail e tra server mail. È  basato su TCP e opera sulla porta 25.

La comunicazione in SMTP avviene tramite **comandi e codici di risposta numerici**. Il client invia comandi al server, e il server risponde con un codice a tre cifre che indica l'esito dell'operazione e un commento opzionale.

I comandi più utilizzati sono:

- **EHLO:** Utilizzato dal client per presentarsi al server e indicare il supporto per estensioni SMTP
- **MAIL FROM:** Specifica l'indirizzo email del mittente
- **RCPT TO:** Specifica l'indirizzo email del destinatario
- **DATA:** Segnala l'inizio del trasferimento del corpo del messaggio email
- **QUIT:** Termina la sessione SMTP

I codici di risposta sono organizzati in questo modo:

- **2xx:** Successo. Il comando è stato eseguito correttamente.
- **3xx:** Successo, ma sono richiesti ulteriori input dal client.
- **4xx:** Errore temporaneo. Il comando non può essere eseguito al momento, ma potrebbe essere possibile riprovare più tardi.
- **5xx:** Errore permanente. Il comando non può essere eseguito.

## Autenticazione

Inizialmente, i server SMTP permettevano a chiunque di inviare email attraverso di essi. Questo ha portato a una forte diffusione di spam. Per contrastare il problema, i server SMTP moderni implementano dei sistemi di autenticazione e limitano il **relaying** solo ai client autenticati.

Il *relaying* si riferisce alla capacità di un server SMTP di **inoltrare email a domini diversi dal proprio**.

I meccanismi di autenticazione comuni includono:

- **PLAIN:** Invia nome utente e password in chiaro (sconsigliato per motivi di sicurezza).
- **LOGIN:** Simile a PLAIN, ma codifica nome utente e password usando Base64.
- **CRAM-MD5:** Utilizza un sistema di *challenge-response* basato su hash MD5 per autenticare il client senza trasmettere la password in chiaro.

Oggi viene usato il **protocollo TLS** che aggiunge crittografia.

## DNS

Quando il server SMTP del mittente riceve il messaggio dal client deve conoscere l’indirizzo del successivo server SMTP a cui inoltrare la richiesta.

Per fare ciò si usa il protocollo DNS per ottenere l’indirizzo.

A questo punto il server SMTP del mittente si connette al server SMTP del destinatario. Tuttavia, se il server SMTP del mittente non è autenticato, il server SMTP del destinatario non consentirà il *relaying*.

Si introduce il concetto di *Mail Submission Agent* (MSA), un MTA che richiede l'autenticazione a tutti i client che si connettono a loro, indipendentemente dal dominio di destinazione dell'email.

![](https://i.ibb.co/JpgCkcB/image.png)

## POP

Quando il messaggio arriva al server SMTP di destinazione, l’unica cosa che ci manca è stabilire come il client destinatario può ottenere la posta nel server.

Il protocollo POP (Post Office Protocol), attualmente nella versione 3 (POP3), è uno dei protocolli utilizzati per consegnare la posta elettronica alla MUA del destinatario.

Per farlo si introduce una nuova entità MDA (*Mail Delivery Agent*) che si occupa di rendere disponibile la posta al client di destinazione con un protocollo dedicato.

POP è un protocollo testuale basato su comandi che utilizza la porta 110.

Una sessione POP si compone di tre parti: una fase di **autorizzazione**, una fase di **transazione** e una fase di **aggiornamento**.

- **Fase di autorizzazione:** Il client si connette e si autentica al server.
- **Fase di transazione:** Il client può emettere diversi comandi, tra cui:
    - `STAT`: per ottenere lo stato della casella di posta (numero di messaggi e dimensione totale in byte).
    - `LIST`: per elencare i messaggi presenti.
    - `RETR n`: per recuperare l'n-esimo messaggio.
    - `DELE n`: per contrassegnare l'n-esimo messaggio per l'eliminazione.
- **Fase di aggiornamento:** Il client emette il comando QUIT per terminare la sessione. Il server elimina i messaggi contrassegnati per l'eliminazione.

## Differenza tra POP e IMAP

La principale differenza tra i protocollo POP e IMAP riguarda il modo in cui rimangono salvate le e-mail:

- **POP**: Scarica le email dal server sul dispositivo del client e, generalmente, le elimina dal server (a meno che non venga configurato diversamente).
- **IMAP**: Le email restano sul server e vengono sincronizzate tra tutti i dispositivi connessi. Il client visualizza una copia dei messaggi, che rimangono accessibili da più dispositivi.
