# Applicazioni web

Le applicazioni web sono i principali sistemi che fanno uso di basi di dati.

Una applicazione web si divide in 3 sezioni:
- Front-end: 
	- HTML (*HyperText Markup Language*) usato per definire la struttura della pagina web tramite una struttura ad albero. Il linguaggio si basa su **tag** e **attributi**
	- CSS (*Cascading Style Sheets*) linguaggio per aggiungere stile alle pagine HTML, è basato su un mapping tra elementi HTML e regole di stile. Fa un forte utilizzo di ereditarietà
	- JavaScript linguaggio di scripting per aggiungere interattività all'applicazione web
- Logica: Flask, PHP
- back-end: MySQL, Postgres

La parte di front-end è compiuta dal **client**, mentre la logica e il back-end sono compiute dal **server**

## URL

Una risorsa WEB è identifica da un URL (*Uniform Resource Locator*) la cui forma è simile a 

	schema://hostname[:port]/path[?query][#fragment]

- `schema`: è il protocollo http/https
- `hostname`: indica il server che ospita la risorsa
- `port`: è un numero che identifica il servizio che il server utilizza
- `path`: indica il percorso in cui trovare la risorsa all'interno del server
- `query`: utilizzata per passare dei dati al server assieme alla richiesta della risorsa
- `fragment`: indica una parte specifica della pagina HTML

## DNS

DNS (*Domain Name System*) è un protocollo utilizzato per tradurre i nomi di dominio testuali in indirizzi ip.

## HTTP

Il protocollo HTTP (*HyperText Transfer Protocol*) è quel protocollo che permette di far comunicare client e server, tramite un sistema di **richiesta e risposta**. La sua versione sicura è chiamata HTTPS (*HTTP Secure*).

Le **richieste HTTP** sono struttura come segue:

- `request line` che include un **metodo**, una **risorsa** e la versione del protocollo
- una lista di `request header`
- un linea vuota che fa da separatore
- il corpo della richiesta

I **metodi HTTP** sono i seguenti

- `GET`: per leggere informazioni dal server
- `HEAD`: come `GET` ma chiede solo gli *header* della risposta
- `POST`: per inviare informazioni al server
- `PUT`: per caricare file sul server
- `DELETE`: per rimuovere file dal server
- `OPTIONS`: richiede la lista dei metodi supportati

Le **risposte HTTP** sono strutturate come segue:

- linea di stato, che include uno *status code* e un messaggio
- una lista di *response headers*
- una linea vuota che fa da separatore
- il corpo della risposta

Gli ***status code*** sono i seguenti:

| range di codici | categoria |esempio
|--|--|--|
| 200-299 | successo | 200 OK
| 300-399 | reindirizzamento | 301 Moved permanently
| 400-499 | client error | 404 Not found
| 500-599 | server error | 503 Service unavailable

## Cookie

HTTP è un protocollo senza **stato**, cioè due richieste HTTP inviate dallo stesso client risultano sempre scorrelate tra loro.

In HTTP la gestione dello stato viene delegata ai **cookie** cioè un insieme di dati sotto forma di **chiave-valore**.
I cookie vengono generati dal server e vengono salvati nel client. 
Il client ad ogni richiesta che farà al server si occuperà di allegare anche i cookie.

I cookie vengono detti **opachi**, cioè il server può salvare ciò che vuole sui cookie, è suo compito interpretare i dati al suo interno in modo corretto

## HTTPS

La controparte sicura di HTTP è l'HTTPS:
- utilizza TLS (*Transport Layer Security*)
- assicura la **confidenzialità** e l'**integrità** dei messaggi
- consente l'**autenticazione** del server tramite certificati firmati
