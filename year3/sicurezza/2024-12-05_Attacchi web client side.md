# Attacchi web client side

## Token di sessione

Oltre agli attacchi diretti al codice lato server o ai database, esistono attacchi che sfruttano il **browser**, sono quindi **lato client**.

Le applicazioni web di solito mantengono uno **stato**, ad esempio quando un utente fa un login, inizia una sessione tramite un **token di sessione** che identifica l’utente senza che esso si autentichi su ogni pagina (questo meccanismo è dovuto al fatto che HTTP è un protocollo stateless).

Il token di sessione può essere memorizzato in diversi modi ma quello standard è nei **Cookie del browser**, in questo modo il token viene automaticamente passato assieme ad ogni richiesta verso il server.

Se un token di sessione viene indovinato o divulgato, l'utente può essere impersonificato da qualcun altro, pertanto, il token deve essere **imprevedibile** **e segreto**.

### Cookie

Un cookie viene impostato nell’header HTTP `Set-cookie` presente all’interno di una risposta dal server verso il client, è formato nel seguente modo:

```
Set-Cookie: NAME=VALUE; Domain=example.com; Path=/; Expires=Wed, 09 Dec 2024 12:00:00 GMT; Secure; HttpOnly; SameSite=Strict
```

- `NAME=VALUE`: Nome e valore del cookie.
- `Domain=example.com` (opzionale): Specifica il dominio per cui il cookie è valido.
- `Path=/` (opzionale): Specifica il percorso del dominio a cui il cookie si applica.
- `Expires=Wed, 09 Dec 2024 12:00:00 GMT` (opzionale): Indica la data e l'ora in cui il cookie scadrà. Se non è specificato verrà eliminato alla chiusura del browser.
- `Secure` (opzionale): Indica che il cookie deve essere trasmesso solo su connessioni HTTPS.
- `HttpOnly` (opzionale): Indica che il cookie non è accessibile tramite JavaScript (ad esempio, usando `document.cookie`)
- `SameSite=Strict|Lax|None` (opzionale): indica se il cookie deve essere allegato a richieste provenienti da altri siti:
    - `Strict`: Il cookie viene inviato **solo** quando il client interagisce direttamente con il dominio specificato nel cookie (digitandolo nella barre dell’URL).
        
        Se l'utente clicca su un link in un altro sito che reindirizza al dominio specificato, il cookie **non** viene inviato.
        
    - `Lax`: Il cookie viene inviato anche quando il client clicca su un link in un altro sito che lo reindirizza al dominio specificato.
        
        Il cookie **non** viene inviato per richieste automatiche originate da un altro sito, come caricamenti di immagini o iframe.
        
    - `None`: Il cookie viene inviato in **tutte le richieste.** Tuttavia, deve essere accompagnato dal flag `Secure`

Il browser allega automaticamente i cookie ad una richiesta web quando:

- il dominio dell'URL finisce come il dominio specificato nel cookie, ad esempio  `sub.example.com` finisce come `example.com` che è specificato nel cookie.
- il path dell'URL inizia come il path specificato nel cookie, ad esempio `https://example.com/app/dashboard` inizia per `/app` che è specificato nel cookie
- il protocollo è HTTPS se il cookie è contrassegnato come `secure`.

È possibile **creare ed eliminare i cookie in JavaScript** modificando `document.cookie`. Per eliminare un cookie, si imposta la sua data di scadenza nel passato.

**È possibile avere due cookie con lo stesso nome ma percorsi diversi.** Se i percorsi non sono disgiunti, entrambi i cookie vengono inviati al server e il modo in cui il server gestisce i cookie con lo stesso nome dipende dal linguaggio di programmazione, dal framework o dalla libreria utilizzata.

Alcuni linguaggi, come Java, JavaScript e Go, leggono i cookie come una **lista**, mentre altri, come PHP, Python e Node.js, usano un **dizionario**, rendendo imprevedibile quale dei due cookie verrà utilizzato.

Lo stato della sessione può essere memorizzato sul server o sul client.

- I **server con stato** utilizzano un cookie `secure` e `HttpOnly` nel browser del client ma mantengono lo stato nel server. Questo approccio può comportare un sovraccarico eccessivo lato server.
- I **server senza stato** crittografano i dati di sessione insieme a un ID utente e un timestamp utilizzando una chiave del server. Memorizzano il blob crittografato in un cookie nel browser del client, nel server viene solo mantenuto un timestamp di login o logout per validare il blob quando viene ricevuto dal client.

## SOP

Un browser permette di navigare più siti contemporaneamente, per fornire un adeguato isolamento tra le varie pagine web aperte nello stesso browser si implementa la SOP.

La **Same Origin Policy (SOP)** è una politica di sicurezza standard dei browser che limita l'accesso tra documenti o script caricati da domini diversi.

![https://i.ibb.co/gZF4Wcf/image.png](https://i.ibb.co/gZF4Wcf/image.png)

Due pagine hanno la **stessa origine** se il **protocollo, la porta e l'host** sono gli stessi per entrambe le pagine.

Ad esempio con la pagina  `http://store.company.com/dir/page.html`

```
http://store.company.com/dir2/other.html  OK stessa origine
http://store.company.com/dir/in/pag.html  OK stessa origine
https://store.company.com/secure.html     NO protocollo diverso
http://store.company.com:81/dir/etc.html  NO porta diversa
http://news.company.com/dir/other.html    NO host diverso
```

Se l'origine è diversa (si ha *cross-origin*), SOP limita o vieta:

- l'accesso alla rete
- script API
- l'archiviazione dei dati e i cookie.

### Accesso alla rete

Le **scritture cross-origin** sono in genere **consentite**, si tratta di inviare dati verso un'altra origine senza aspettarsi di ricevere risposta (seguire un link, il reindirizzamento e l'invio di un form).

L'**embedding cross-origin** è in genere **consentito**, si tratta di inserire risorse di un'altra origine nella pagina corrente per scopi di visualizzazione o funzionalità (immagini, CSS e JavaScript).

Le **letture cross-origin**, sono in genere **vietate**, si tratta di cercare di accedere o leggere il contenuto di una risorsa da un'altra origine (usare `fetch` per ottenere dati JSON da un'API su un dominio diverso e leggere la risposta).

### Script API

Alcune API JavaScript consentono ai documenti di fare riferimento l'uno all'altro, ma l'accesso è limitato se i due documenti hanno origine diversa.

Questa restrizione può essere allentata modificando `document.domain`, utile quando le pagine web appartenenti a sottodomini diversi devono comunicare.

![https://i.ibb.co/S6bY39h/image.png](https://i.ibb.co/S6bY39h/image.png)

### Archiviazione e cookie

Ogni origine ha il proprio spazio di archiviazione.

Per i cookie, il protocollo è facoltativo e viene considerato il path invece della porta, quindi l’origine viene identificata da **Protocol, host e path**.
