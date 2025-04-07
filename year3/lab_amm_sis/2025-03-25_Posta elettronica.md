# Posta elettronica

La posta elettronica è un sistema di comunicazione su larga scala.

È composto da vari attori:

- Il **Mail User Agent (MUA)** o client di posta (come Thunderbird, Outlook) è un programma utilizzato da un utente per inviare e consultare i messaggi. Può anche essere un'applicazione web (webmail).
- Il **Mail Submission Agent (MSA)** riceve i messaggi da un MUA e li invia a un MTA.
- Il **Mail Transit Agent (MTA)** riceve email da un MSA o da un altro MTA e le instrada verso un altro MTA oppure verso un LDA.
- Il **Mail Delivery Agent (MDA)** o **Local Delivery Agent (LDA)** consegna il messaggio alla casella di posta dell'utente indicato se la destinazione finale del messaggio si trova nel sistema corrente.
- Il **Mail Access Agent (MAA)** permette di consultare e scaricare i messaggi.
- Il **Mail Retrival Agent (MRA)** scarica la posta da un MAA e la rende disponibile in locale.

Tutte le comunicazioni tra i vari agenti, ad eccezione delle interazioni tra MRA e MAA, avvengono attraverso il protocollo SMTP (*Simple Mail Transfer Protocol*).

## Flusso

![](https://i.ibb.co/39Yp9XdB/image.png)

1. Il mittente scrive una email usando un MUA.
2. MUA invia la mail a un MSA/MTA.
3. L'MTA controlla l'indirizzo di destinazione (`utente@dominio`).
    - Se il dominio rientra tra quelli gestiti dall'MTA (e quindi è un indirizzo locale) e l'utente è valido, l'email viene inoltrata all'LDA, che la consegna nella casella di posta associata, terminando il processo.
    - Se l'indirizzo non è locale e l'MTA accetta di inoltrare il messaggio (*relay*), l'MTA inserisce il messaggio in una coda.
4. Dopo aver estratto il messaggio dalla coda, l'MTA controlla il record `DNS MX` associato al dominio del destinatario e contatta l'MTA che risponde a quell'host, cercando di inviargli il messaggio.
5. Se l'invio avviene correttamente, il messaggio viene gestito dall'MTA di destinazione, che procede dal punto 3.
    
    Se l'MTA contattato non risponde, il messaggio torna in coda.
    
    Se l'MTA contattato rifiuta il messaggio, oppure se il messaggio è rimasto troppo tempo in coda, viene inviata una notifica di mancata consegna all'indirizzo del mittente, e il procedimento termina.
    

### Relay

Il **relay** è un'operazione in cui un MTA accetta un'email da un altro server, anche se non è indirizzata a un dominio da esso servito, con lo scopo di inoltrarla a un destinatario terzo.

Questa funzionalità non è sempre consentita. Un MTA accetterà una richiesta di relay se proviene da un **host conosciuto** oppure da un **utente autenticato**. In tutti gli altri casi, il messaggio viene immediatamente rifiutato.

È importante notare che il servizio di posta **non garantisce la consegna delle email, la notifica degli errori, l'identità del mittente o la privacy della comunicazione**. Per superare questi limiti, è necessario ricorrere a sistemi a livello applicazione.

## Protocolli

Il protocollo utilizzato tra MUA e MTA e tra MTA e MTA si chiama **Simple Mail Transfer Protocol (SMTP)** o **Extended SMTP (ESMTP)** che fa una sorta di handshake per stabilire la connessione prima di inviare dati. La comunicazione tra MTA e LDA può avvenire internamente (scambio diretto di file) o tramite il **Local Mail Transfer Protocol (LMPT)**.

La comunicazione tra il MAA e il MUA (tramite l'MRA) avviene tramite il **Post Office Protocol versione 3 (POP3)** o l'**Internet Message Access Protocol versione 4 (IMAP4)**.

- **IMAP** mantiene le email sul server, consentendo la gestione da diversi dispositivi conservando una copia centralizzata.
- **POP**, invece, scarica le email sul dispositivo utilizzato per la consultazione, e la connessione è necessaria solo per inviare e ricevere.

**IMAP è generalmente preferibile per prestazioni ottimali**, specialmente su reti lente, mentre POP può essere utile in caso di connessioni non persistenti.

![](https://i.ibb.co/mFFLG7nQ/protocolli.png)

### **Implementazioni MTA**

- **Sendmail:** È stato il **primo demone** ad implementare il protocollo SMTP. Tuttavia, la sua **progettazione rigida e la complessità della configurazione** ne hanno progressivamente ridotto la popolarità fino alla sua quasi scomparsa. Inoltre, presentava **molti bug e problemi di sicurezza**.
- **Postfix:** È l'**MTA di riferimento in ambiente Linux**. È **facile da configurare**, **modulare** e supporta diversi tipi di autenticazione. Permette una facile integrazione con sistemi di controllo della posta e sistemi **antispam.**
- **MS Exchange:** Introdotto da Microsoft nel 1996, è oggi uno dei **mail server più potenti e utilizzati**, soprattutto in contesti aziendali che impiegano infrastrutture e tecnologie Microsoft. Le sue funzionalità principali includono la **gestione centralizzata di posta elettronica, calendari e rubriche condivise**. Il client più comune per connettersi a Exchange è **Microsoft Outlook.**

### **Implementazioni MAA**

- **Dovecot:** Permette l'utilizzo dei protocolli **IMAP e POP** e supporta diversi **formati di memorizzazione** della posta. Tramite un plugin, offre un sistema di **filtri server-side** gestibili tramite il protocollo **SIEVE** per lo smistamento della posta in cartelle e l'inoltro ad altri indirizzi.
    
    Alcuni tipi di formati di memorizzazione della posta sono i seguenti:
    
    - **Mbox:** È il formato più **vecchio** e ha una struttura semplice: la casella di posta è un **file di testo** in cui i messaggi sono memorizzati uno dopo l'altro, separati da tag.
    - **Maildir:** In questo formato, la singola casella di posta è una **directory**, e ogni messaggio è un **singolo file** al suo interno. Ciò consente **accessi contemporanei** e garantisce una **maggiore flessibilità**.
    - **D-box:** A differenza di Maildir, utilizza file di indice per gestire i metadati e mantiene i nomi dei file delle email stabili nel tempo. Questo approccio riduce l’uso del filesystem e migliora la gestione dei flag e degli stati dei messaggi. In caso di corruzione o perdita degli indici, Dovecot è in grado di rigenerarli automaticamente grazie alle informazioni contenute nei file D-box.
    - **Mdbox (Dovecot > 2.0):** Permette di memorizzare **più messaggi in un singolo file**, e una singola casella di posta può contenere **più file**. I file hanno una dimensione configurabile di circa **2 MB**. Questo formato si sforza di preservare quanti più dati possibile in caso di corruzione del file system, in modo che crash o perdite di alimentazione non possano corrompere o perdere dati.

## Spam

Lo **SPAM** è definito come **uno o più messaggi non richiesti, facenti parte di un più insieme di messaggi, tutti aventi contenuto sostanzialmente identico**. Le email indesiderate possono essere collocate in **cinque diverse categorie**:

- **Hoax:** Bufale e catene di Sant’Antonio.
- **Worm:** Email mandate da virus.
- **UCE (Unsolicited Commercial Email):** Email di spam dal contenuto commerciale.
- **UBE (Unsolicited Bulk Email):** Email indesiderate inviate in grandi quantità.
- Messaggi derivanti da iscrizioni a mailing list.

Non è possibile arginare completamente il problema dello spam con una policy statica, poiché gli spammer inventano continuamente nuove strategie per aggirare i filtri. È possibile solo filtrare le email in ingresso con vari meccanismi, tenendo presente che una filtratura eccessiva potrebbe compromettere il servizio scartando email legittime.

### Tecniche di Difesa

- **Greylisting:**
    
    questa tecnica si basa sul fatto che tipicamente uno spammer non spreca tempo a reinviare una email se la precedente è stata temporaneamente rifiutata. Funziona in questo modo
    
    1. Un'email proveniente da un dominio sconosciuto viene **temporaneamente rifiutata** con un errore di "temporaneamente non disponibile: 450 *try again later*" per un numero preimpostato di volte.
    2. Ad ogni rifiuto, l'MTA mittente rimette la mail in coda e, dopo un certo periodo di tempo, tenta il reinvio.
    3. Al tentativo N, la mail viene accettata dall'MTA ricevente, e l'MTA mittente viene inserito in una **whitelist**, in modo che tutte le email successive vengano accettate direttamente.
    
    **Problematiche:** Alla lunga, questa tecnica **perde di efficacia** poiché i bot di spam implementano algoritmi che ritentano l'invio. Possono anche verificarsi **lievi ritardi nella consegna** delle email.
    
    **Vantaggi:** **Nessuna email lecita viene scartata**, poiché i mail server legittimi re-inviano la mail. Si ha comunque un **buon filtraggio di base**.
    
- **RBL** (*Real-time Blackhole List*):
    
    Sono liste contenenti **IP non "autorizzati" ad inviare e-mail**.
    
    **Problematiche:** È difficile distinguere gli IP validi da quelli non validi, con il rischio di scartare email legittime e far passare spam. Alcuni criteri sono: IP assegnati dinamicamente dai provider, IP che inviano email senza passare da un mail server ufficiale, IP segnalati come spammer dagli utenti.
    
- **SPF** (*Sender Policy Framework*):
    
    È uno standard che, tramite un **record TXT nel DNS**, dichiara quali **IP o nomi possono inviare mail per un determinato dominio**. Il mail server ricevente può verificare se il server mittente è autorizzato ad inviare mail.
    
    **Problematiche: Non tutti i domini implementano il record TXT**. L'implementazione può essere difficoltosa.
    
- **SpamAssassin:**
    
    È un demone che utilizza un sistema di filtri che cercando di "indovinare" se una mail è valida assegnandole un punteggio in base a vari aspetti (lingua della mail, presenza di tag HTML, presenza di parole chiave).
    
    In base al punteggio, può far passare l'email, segnalarla come spam, o scartarla.
    
    **Problematiche:** Richiede continui aggiustamenti e notevole esperienza per essere mantenuto.
    
- **Controlli MTA:**
    
    Un MTA può implementare controlli sfruttando il **formato del protocollo SMTP** per ridurre il flusso di spam.
    
    **Esempi in Postfix:**
    
    - `smtpd_helo_required = yes`: Controlla che il mittente inizi la comunicazione con il comando `ehlo`.
    - `smtpd_sender_restrictions`: Controlla chi, dopo essersi identificato con `ehlo`, può inviare email.
    - `smtpd_recipient_restrictions`: Effettua controlli sul destinatario.
- **AMAVIS:**
    
    È un **demone** che filtra i contenuti delle mail, gestendo trasferimento, elaborazione, codifica e interfacciandosi con altri sistemi di filtraggio spam e virus come quelli che abbiamo visto precedentemente.
    
    Permette di rilevare virus, spam, contenuti vietati; bloccare, etichettare, reindirizzare email; mettere in quarantena o rilasciare messaggi; eliminare virus tramite antivirus esterni.
