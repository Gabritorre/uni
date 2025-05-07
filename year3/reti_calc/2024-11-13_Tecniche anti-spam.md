# Tecniche anti-spam

Vediamo diverse tecniche utilizzate per combattere lo spam a livello di rete. Ci concentriamo su tre protocolli per l'autenticazione delle email: **SPF, DKIM** e **DMARC.**

Con **spam** intendiamo e-mail con contenuti malevoli di vario tipo ad esempio: phishing, malware, pubblicità, truffe…

Se uno spammer è un MUA non è difficile rilevarlo perché per mandare e-mail si deve connettere e autenticarsi ad un MSA e da attraverso di lui mandare e-mail spam.

Gli spammer, però, possono fingere di essere MTA legittimi, rendendo difficile, per i MTA “buoni”, distinguere il traffico buono da quello cattivo.

Per cercare di ridurre lo spam (molto complesso eliminarlo completamente), Gli MTA utilizzano diverse tecniche per valutare le email e rifiutare quelle sospette.

Analizziamo alcune tecniche a l**ivello di rete.**

## Tecniche basate sull’IP

### Controllo FQDN

Un tecnica è il **Controllo FQDN (Fully Qualified Domain Name)**: si basa sull'uso di nomi di dominio completamente qualificati (cioè dall’host fino al TLD) per verificare l'identità del server mittente tramite query DNS e di reverse DNS.

Viene quindi verificata la veridicità del nome di dominio e dell’indirizzo IP inseriti nel comando HELO.

Questa tecnica richiede agli MTA di avere un IP pubblico, un nome di dominio e un nome di dominio inverso, rendendo più difficile per gli spammer crearne uno.

### Blacklist

Una ulteriore tecnica è quella di usare delle **Blacklist IP**: cioè delle liste di indirizzi IP noti per generare spam, in modo da bloccare le email provenienti da tali indirizzi.

Gli MTA utilizzano un protocollo chiamato DNSBL (DNS Block List) per verificare se un IP è presente in una blacklist prima di inoltrare l’email.

**Spamhaus** è una organizzazione la cui attività principale è quella di compilare e tenere aggiornate le blacklist

### Graylist

Un altro fattore importante è che gli MTA legittimi aderiscono allo **standard SMTP**, mentre gli spammer spesso no. Gli MTA riceventi possono ritardare le risposte o restituire errori temporanei.

Una particolare si utilizza una tecnica chiamata **Graylisting**: gli MTA che utilizzano il graylisting rispondono con un errore `4xx` alla prima connessione da un IP sconosciuto. Gli MTA mittenti legittimi riproveranno dopo un po' di tempo, mentre gli spammer tendenzialmente no.

È da notare che questa tecnica introduce un ritardo nella ricezione della prima email (anche se legittima) proveniente da un nuovo MTA.

Se un MTA viene whitelistato ma non manda e-mail per un po’ verrà di nuovo ritenuto sconosciuto alla successiva mail.

## Sender spoofing

Approfondiamo alcuni comandi di SMTP utili per comprendere le successive tecniche anti-spam:

- `HELO`: viene utilizzato dal client MTA per identificarsi al server MTA. Il comando HELO è seguito dal nome di dominio del client MTA.
- `MAIL FROM`: specifica l'indirizzo mail a cui verranno inviati eventuali errori di consegna. (non è necessariamente l’e-mail del mittente)
- `FROM`: specifica l'indirizzo email del mittente della mail. Questo è anche l'indirizzo email utilizzato dal destinatario per rispondere all'email.

Non è possibile fare assunzioni sulla legittimità dei domini inseriti in questi campi.

**Lo spoofing del mittente** è una tecnica utilizzata dagli spammer per falsificare l'indirizzo email del mittente. Gli spammer possono utilizzare un dominio falso o un dominio legittimo di cui non sono proprietari nei campi HELO, MAIL FROM o FROM.

Vediamo delle tecniche per verificare l’autorevolezza dei campi `HELO, MAIL FROM, FROM`.

## SPF

Il Sender Policy Framework (**SPF**) è un protocollo che cerca di contrastare gli spammer impedendogli di utilizzare i comandi `HELO` e `MAIL FROM` (senza però limitare il `FROM`) con un dominio che non possiedono.

Un record SPF è un record testuale (TXT) messo nel server DNS associato al nome di dominio di un'organizzazione, che specifica gli indirizzi IP autorizzati a inviare email per quel dominio.

Un esempio di record SPF è il seguente:

```
mydomain.it. 86400 IN TXT “v=spf1 ip4:17.18.7.120 -all”
```

- `v=spf1`: indica la versione 1 del protocollo
- `ip4:17.18.7.120`: specifica che l'indirizzo IP 17.18.7.120 è autorizzato a inviare email
- `-all`: indica che tutti gli altri indirizzi IP non possono inviare email

Quindi quando un MTA riceve una connessione da un altro MTA:

- fa la risoluzione DNS per il dominio specificato in HELO e MAIL FROM
- verifica che esista un record SPF per quei domini
- controlla se l’indirizzo IP della connessione è uno degli indirizzi specificati dal record SPF
- prende delle decisioni in base al risultato

Oltre ad usare indirizzi IPv4 si possono usare indirizzi IPv6 e anche nomi di dominio.

Inoltre è possibile includere dei record SPF aggiuntivi di altri domini con la direttiva `include:` ad esempio `include:_spf.google.com` per indicare che che Google è autorizzato a inviare email per conto del dominio.

Nella sintassi dei record SPF ci sono dei **qualificatori** che specificano l'azione da intraprendere per ogni indirizzo IP:

- `+`: **Pass** (default), Indica che l’indirizzo è autorizzato a inviare e-mail per quel dominio.
- `-`: **Fail,** Indica che l’indirizzo **non è autorizzato**. Le e-mail da tale IP dovrebbero essere rifiutate.
- `~`: **SoftFail,** Indica che l’indirizzo probabilmente non è autorizzato. Le e-mail da tale IP non vengono contrassegnate come sospette o spam.
- `?`: **Neutral,** Indica che il dominio non dà indicazioni sull'autorizzazione dell’indirizzo

Questi qualificatori si mettono prima degli indirizzi oppure prima di “`all`” (per indicare tutti gli altri indirizzi non specificati).

Se non viene specificato alcun qualificatore, si assume "Pass".

## DKIM

Abbiamo visto che il protocollo SPF non garantisce nulla sul campo `FROM`.

DKIM risolve questo problema verificando anche il campo `FROM`.

**DomainKeys Identified Mail (DKIM)** è un protocollo  consente di verificare l'autenticità del mittente di un messaggio e l'integrità del suo contenuto. DKIM è simile a SPF ma utilizza la crittografia a chiave pubblica per firmare digitalmente le email, garantendo che il messaggio non sia stato manomesso durante il trasporto.

MSA è l’entità che si occupa dell’autenticazione dell’utente, ed è l’unica entità che può controllare il campo `FROM` e firmare l’intera email.

Funzionamento di DKIM:

1. **Generazione delle chiavi**: L'amministratore del MSA genera una coppia di chiavi pubblica e privata.
2. **Pubblicazione della chiave pubblica**: La chiave pubblica viene pubblicata in un record TXT del DNS.
3. **Firma del messaggio**: Quando un MUA (Mail User Agent) invia un'email al suo server SMTP, l’MSA del server fa l’autenticazione del client (verifica anche che l’indirizzo del `FROM` sia un indirizzo autorizzato) e seleziona alcuni campi dell'email dell’header, e il corpo del messaggio, e genera un hash di questi elementi. Il MSA firma quindi l'hash utilizzando la sua chiave privata e include la firma digitale nell'intestazione della mail.
4. **Verifica della firma**: Quando un MTA riceve un'email con una firma DKIM, recupera la chiave pubblica del mittente con una risoluzione DNS. L'MTA utilizza quindi la chiave pubblica per verificare la firma digitale e controllare l'integrità del messaggio.

L'intestazione DKIM contiene diversi campi che forniscono informazioni sulla firma e sul processo di verifica. Alcuni di questi sono:

- **v:** Versione del protocollo DKIM.
- **a:** Algoritmo crittografico utilizzato per generare la firma.
- **h:** Intestazioni sottoposte alla firma.
- **bh:** Hash del corpo del messaggio.
- **b:** Firma digitale
- **d, s:** Dominio e selettore, utilizzati per recuperare la chiave pubblica dal DNS: la chiave pubblica si ottiene interrogando con una query DNS il dominio: `<s>._domainkey.<d>`

Esempio di intestazione DKIM:

```
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=ietf.org; s=ietf1; t=1730884895;  bh=gKKOhIEVnQtATJMEQQoY5UYl3/bV+mlSqzFkKJnzquw=; h=Date:To:From:Subject:List-Id:List-Archive:List-Help:List-Owner:List-Post:List-Subscribe:List-Unsubscribe; b= ILdywWIjDUwI3JoXDLHPdhOBf02HPj9+WyjSYJlFL9S28eiCiR/ybDhCL1BAoYzYhMlLaDQUPo4jYp6FwU82cSjaj7/OIr6JcS0wVcCYLJQaLhRfRUkEA7i9xilpNuBEIyax9Ltt1YHZNvXuZ9m8Bfuapxs1UKL3tW0luG8MU6E=
```

## DMARC

Il protocollo **Domain-based Message Authentication, Reporting, and Conformance (DMARC)** aggiunge un ulteriore livello di controllo verificando l'**allineamento** tra i domini utilizzati nei diversi protocolli di autenticazione.

DMARC verifica che il dominio nell'intestazione "From" corrisponda al dominio utilizzato o in SPF (quindi con HELO o MAIL FROM) o in DKIM (nel campo `d` dell’header). In caso di mancato allineamento, il server MTA può applicare diverse politiche decise dal proprietario del dominio:

- `none`: non fare nulla, lascia passare
- `quarantine`: marca l’email come possibile spam
- `reject`: rifiuta

È importante che le politiche siano **consistenti** tra tutti i MTA (non vogliamo che una e-mail venga accettata da alcuni MTA e da altri no)

Il protocollo DMARC permette al proprietario del dominio mittente di impostare la policy che tutti gli MTA devono rispettare. Le policy vengono anch’esse configurate nel DNS con un campo TXT e sono accessibili con una query al dominio `_dmarc.<dominio>`

## Funzionamento completo

Combinando tutte le tecniche che abbiamo visto:

**1. Verifica FQDN:** Il primo passo è la verifica del FQDN del MTA che invia l'email.

**2. Verifica SPF:** Successivamente, il server MTA controlla il record ****SPF del dominio mittente che elenca gli indirizzi IP autorizzati a inviare email per quel dominio.

**3. Verifica DKIM:** Il server MTA verifica la firma DKIM dell'email garantendo che il messaggio non sia stato manomesso e che provenga effettivamente dal dominio dichiarato nell'intestazione `FROM`

**4. Allineamento DMAR**C: In caso di mancato allineamento tra i domini, vengono applicate politiche di sicurezza definite dal proprietario del dominio mittente.

Possiamo riassumere tutti i passaggi con il seguente schema:

![](https://i.ibb.co/3mpjwwC/image.png)

1. **Alice invia l'email:** Alice, utilizzando il suo client di posta elettronica (MUA), invia un'email dal suo indirizzo `alice@a.com` a `bob@b.com`.
2. **Autenticazione con MSA:** l’MSA di Alice la autentica, verificando che sia effettivamente autorizzata a inviare email.
3. **Preparazione dell'email per l'invio:** Il MTA di `a.com`, ricevendo l'email da Alice, imposta i campi `HELO`, `Mail From`, `From` e aggiungendo la firma DKIM. L'indirizzo IP del MTA è `1.2.3.4`.
4. **Controllo blacklist DNSBL:** Prima di recapitare l'email, l’MTA di `b.com` controlla l'indirizzo IP `1.2.3.4` non sia in una blacklist tramite una query DNS ad un servizio come *spamhaus*.
5. **Risoluzione DNS inversa:** Il server MTA di `b.com` effettua una risoluzione DNS inversa sull'indirizzo IP `1.2.3.4` per ottenere il FQDN del MTA mittente.
6. **Verifica corrispondenza FQDN:** Il server MTA di `b.com` confronta il FQDN ottenuto dalla risoluzione DNS inversa con il dominio dichiarato nel comando `HELO`.
7. **Controllo SPF:** Il server MTA di `b.com` consulta il record SPF di `a.com` per verificare se l'indirizzo IP `1.2.3.4` è autorizzato a inviare email per conto di `a.com`.
8. **Verifica DKIM:** Il server MTA di `b.com` verifica la firma DKIM dell'email utilizzando la chiave pubblica di `a.com`, ottenuta da una query TXT al DNS. Questo garantisce che l'email provenga effettivamente da `a.com` e non sia stata alterata durante la trasmissione.
9. **Controllo DMARC:** Il server MTA di `b.com` consulta il record DMARC di `a.com` per conoscere quali sono le politiche da rispettare, configurate dal proprietario del dominio.
10. **Accettazione o rifiuto dell'email:** Se tutti i controlli sono superati (FQDN, SPF, DKIM, allineamento DMARC) e le politiche DMARC sono rispettate, l'email viene accettata. In caso contrario, a seconda della politica DMARC, l'email potrebbe essere gestita in altro modo.

### Sicurezza del server DNS

Tutti i metodi che abbiamo visto funzionano fintanto che l’attaccante non riesce modificare la configurazione del server DNS dell’organizzazione vittima.

In ogni organizzazione è quindi molto importante isolare il server DNS e mantenerlo al sicuro il più possibile.
