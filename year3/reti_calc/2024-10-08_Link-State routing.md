# Link-State routing

Il **link-state** è un’altra famiglia di protocolli di routing.

Mentre con i distance vector si utilizzava un algoritmo distribuito per computare le routing table, con il link-state si utilizzano **scambi di messaggi** in modo da permettere ad ogni router di conoscere l’intera topologia di rete.

Successivamente ogni router utilizza un algoritmo come Dijkstra per calcolare la tabella con i percorsi minimi.

Abbiamo quindi sempre la rete rappresentata da un grafo, ma in questo caso **i link sono direzionali**, quindi per una comunicazione bidirezionali si hanno due link di direzioni opposte per ogni coppia di router.

Ogni link ha un **peso**, più grande è peggiore è.

## Funzionamento

### Messaggio di HELLO

- Ogni router ha un indirizzo univoco
- Un router invia un messaggio di HELLO (contenente il suo indirizzo) ogni $N$ secondi a tutte le sue interfacce.
- I router che ricevono il messaggio scoprono i loro vicini con cui sono connessi.
- Se i messaggi HELLO non arrivano più dopo $k\cdot N$ secondi allora il relativo link viene marcato come rotto

### LSP

Quando i router hanno scoperto i propri vicini, devono distribuire in modo affidabile i propri link locali a tutta la rete.

Ogni router costruisce un *link-state packet* (LSP) contenente:

- `LSP.Router`: il suo indirizzo identificativo
- `LSP.age`: il tempo di vita rimanente del pacchetto
- `LSP.seq`: numero di sequenza che incrementa ad ogni pacchetto (identifica il pacchetto)
- `LSP.Links[]`: lista di vicini composta da:
    - `LSP.Links[i].Id`: l’identificativo del vicino
    - `LSP.Links[i].cost`: il costo del link

Per la distribuzione di questi pacchetti viene utilizzato un **algoritmo di Flooding**, in cui ogni router mantiene un database (LSDB) contenente per ogni router della rete, l’LSP più recente.

Se un router che riceve un LSP che ha già all’interno del suo LSDB con lo stesso numero di sequenza allora non lo inoltra. Altrimenti viene inoltrato a tutte le interfacce tranne quella da cui è arrivato.

Algoritmo:

```python
# links is the set of all links on the router
# Router R LSP arrival on link l
if newer(LSP, LSDB(LSP.Router)): # get last LSP from the DB, compare with current
		LSDB.add(LSP) # implicitly removes older LSP from same router
		for i in links:
				if i != l:
				  send(LSP, i)
# else , LSP has already been flooded
```

Stato di partenza:

![](https://i.ibb.co/TMRbYzT/image.png)

Stato dopo il flooding:

![](https://i.ibb.co/cw0Wm76/image.png)

Legenda:

| Links | LSP |
| --- | --- |
| from → to : cost | from-seq [to:cost]:[to:cost] |

Quando un link si rompe, i router connessi a tale link generano un nuovo LSP e lo inoltrano alla rete.

Quindi se si rompe il link B-E, il router E manderà un nuovo LSP a D e C che lo inoltreranno a loro volta ai router vicini. Il router B farà lo stesso.

### Note

- è possibile che un router riceva più copie dello stesso LSP.
- il tempo in cui i router coinvolti nel link in errore si accorgono del fallimento può essere diverso
- Dato che i link sono direzionali anche se un solo verso si è rotto vengono rimosse entrambe le direzioni. Analogamente se il link viene aggiustato è necessario avere la conferma da entrambi i router coinvolti per assicurarsi che entrambe le direzioni funzionino.
- Per avere affidabilità sul ricevimento degli LSP sono necessari degli acknowledgement

Questo metodo richiede molta computazione a causa del flooding e di Dijkstra su ogni router. Su reti molto grandi è anche abbastanza frequente che qualcosa si rompa, quindi in grandi reti non viene utilizzato.

## Conclusioni

Indipendentemente dall’algoritmo di routing, quando avviene un cambiamento alla topologia della rete si possono verificare:

- loop (duplicazione di pacchetti)
- pacchetti che intraprendono percorsi diversi (con velocità diverse)
- creazione di buchi neri (perdita di pacchetti)

A livello di rete quindi i pacchetti possono essere persi, corrotti, duplicati e ricevuti fuori ordine. I layer superiori devono tenerne conto.
