﻿# Count-to-Infinity

## Problema del Count-to-infinity

Fino ad ora abbiamo assunto che i pacchetti contenenti di distance vector (DV) venissero sempre consegnati con successo, ma questo non è sempre vero.

Vediamo cosa accade con un fallimento di un link seguito dalla mancanza di arrivo di un pacchetto DV.

![https://i.ibb.co/qRHWrZP/image.png](https://i.ibb.co/qRHWrZP/image.png)

In questo caso il link D-E si è rotto, di conseguenza D imposta il costo delle route verso E, B, C a infinito.

In questo caso D dovrebbe mandare il proprio DV ad A ma supponiamo che ciò non accada in tempo, e che sia A ad inviare il suo DV a D.

![https://i.ibb.co/9rGcVxt/image.png](https://i.ibb.co/9rGcVxt/image.png)

In questo modo D ottiene dei costi migliori di quelli a infinito e aggiorna la sua tabella, inconsapevole del fatto che quei percorsi dovranno passare per forza verso il link rotto D-E.

A questo punto D manda il suo DV ad A, e questo porta ad aumentare i costi sulla tabella di A in quanto sono aumentati i costi del percorso già ritenuto essere il migliore (l’interfaccia south di A)

![https://i.ibb.co/DG5ZbYq/image.png](https://i.ibb.co/DG5ZbYq/image.png)

Il continuo invio di DV tra A e D porterà ad un continuo aumento dei costi fino a infinito, questo problema è chiamato **Count-to-Infinity**.

## Prima soluzione

Un primo approccio è quello di generare i DV solo quando si verifica un fail su un link o un cambiamento ai costi dei percorsi.

Questa non risolve del tutto il problema per due ragioni:

1. c’è comunque la possibilità di D riceva un DV dopo aver rilevato il fallimento di un link ma prima di inviare il suo DV.
2. c’è la possibilità che il DV venga perso

in entrambi i casi si verifica il comportamento sopra mostrato.

Possiamo quindi dire che il Count-to-Infinity è possibile a seguito di alcuni eventi tra cui:

- La presenza di un loop, nota che un singolo cavo full-duplex crea già un loop in quanto viene usato sia per trasmettere che per ricevere
- Ci deve essere un cambiamento alla topologia della rete (ad esempio un link failure)
- Perdita di pacchetti contenenti DV

## Seconda soluzione, Split-Horizon with Poison Reserve

Il problema per cui si verifica il count-to-infinity è perché chi riceve il DV non sa che è il next hop usato dai vicini, e quando il next hop è proprio se stesso allora si verifica il count-to-infinity.

Vediamo una variate della tecnica con i DV, in cui il pseudo codice per generare i DV è il seguente:

 

```python
Every N seconds:
    for ifc in interfaces:
    # one vector for each interface
        v = Vector()
        for d in R[]:
            if (R[d].link != ifc):
                v.add(Pair(d, R[d].cost))
            else:
		            v.add(Pair(d, infinity))
        send(v, ifc)
```

Con *split-horizon* si intende che ogni router vicino avrà un distance vector leggermente diverso dagli altri.

con *poison* si intende che viene detto ai propri vicini che non si possiedono dei percorsi che passano esattamente per quel vicino.

Vediamo il funzionamento nella situazione di prima, Quindi il link D-E si rompe, D non manda in tempo il DV ad A, e quindi A manda il suo DV a D:

![https://i.ibb.co/9wyCz0F/image.png](https://i.ibb.co/9wyCz0F/image.png)

Vediamo come A imposta ad infinito le destinazioni B, C, E dato che per raggiungerli passano per l’interfaccia South, cioè per D al quale stiamo mandando il DV.

Quando D manderà il suo DV ad A, anche lui avrà la tabella aggiornata correttamente.

In questo modo il problema del count-to-infinity può essere risolto, ma solamente in presenza di loop composti da 2 router. Con loop più grandi il **problema esiste ancora**.

Vediamo un esempio in cui si ripresenta il cout-to-infinity.

Il link A-B si rompe, B manda i propri DV a C ed E, ma C non lo riceve:

![https://i.ibb.co/z7Kc1y1/image.png](https://i.ibb.co/z7Kc1y1/image.png)

Supponiamo che C mandi il proprio DV a B ed E:

![https://i.ibb.co/hV6mWT6/image.png](https://i.ibb.co/hV6mWT6/image.png)

Per il poison reverse, B non cambia la sua tabella, mentre E aggiorna il costo verso A.

Così facendo quando E manderà il proprio DV a B verrà aggiornato il costo verso A con 4, poi si aggiornerà il costo di A nella tabella di C e si verifica il cout-to-infinity.

## Timer management

un modo per evitare il count-to-update è che quando il costo di un percorso viene impostato a infinito, il router per un certo tempo non accetta modifiche su tale percorso.

Questo ovviamente rallenta il processo di convergenza della rete.

Nella realtà il timer management è valido per reti piccole, mentre per reti molto grandi è necessario un meccanismo più affidabile, che memorizza nelle proprie tabelle tutto il percorso verso le destinazioni. Quest’ultimo meccanismo viene usato nel protocollo BGP.