# Livello applicativo

Le applicazioni sono molto differenti tra loro ed è difficile standardizzare il loro comportamento.

Tendenzialmente le applicazioni utilizzano un approccio client-server, in cui i protocolli devono specificare la sintassi e la semantica delle richieste e delle risposte.

I dati scambiati possono essere in formato testuale (ad esempio ASCII o UTF-8) ma anche non testuali (ad esempio immagini).

Un fatto importante da considerare è che le CPU di oggi utilizzano un formato di rappresentazione binaria *little endian*, mentre su internet si scelse di usare *big endian*. Quindi è necessario convertire i dati in *big endian* per farli passare correttamente verso internet e poi riconvertire sul destinatario.

`htonl()` e `ntonl()` sono due funzioni C della libreria standard utilizzate per convertire l’endianess dei dati.

## Nomi e indirizzi

Abbiamo visto come gli host vengano riconosciuti tramite indirizzi di rete e come, attraverso l'uso di numeri di porta, sia possibile identificare le applicazioni all'interno di un host.

A livello applicativo, è presente l'interazione con l'utente, e per quest'ultimo può essere difficile ricordare lunghe sequenze di numeri; è quindi preferibile associare agli indirizzi dei **nomi significativi**.

I **nomi di dominio** sono stringhe composte da lettere minuscole, trattini e punti, e rappresentano un sistema gerarchico per identificare una risorsa nella rete ad un determinato indirizzo.

I nomi di dominio hanno questa forma `www.example.com`, la gerarchia diventa più specifica andando verso sinistra, mentre sempre più generica andando verso destra: `com` è il **Top Level Domain** (TLD) cioè il punto più generico.

Possiamo vedere la gerarchia dei domini in questo modo:

![](https://i.ibb.co/RNdcykz/image.png)

Ovviamente è presente molta ridondanza nei nodi e nei root server, questi ultimi hanno un indirizzo fisso e conosciuto.

Quando si vuole raggiungere un nome di dominio nella gerarchia, vengono consultati gerarchicamente il root server, il corretto TLD e poi i sottodomini.

L'uso dei nomi di dominio risolve degli importanti problemi come:

1. **Trasparenza nei cambiamenti di indirizzo**: Quando il server cambia indirizzo IP (ad esempio per essere spostato su un nuovo server fisico), è sufficiente aggiornare il record del nome di dominio, senza bisogno di avvisare manualmente i client. I client continueranno a utilizzare lo stesso nome di dominio senza doversi preoccupare del nuovo indirizzo IP.
2. **Gestione del bilanciamento del carico**: Con l'uso dei nomi di dominio, è possibile implementare il bilanciamento del carico distribuendo le richieste su più server senza dover modificare gli indirizzi IP nei client.
