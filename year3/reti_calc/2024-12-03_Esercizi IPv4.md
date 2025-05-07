# Esercizi IPv4

## Esercizi indirizzi IP

### Es 1

**Domanda 1:** Data una subnet `1.2.1.0/24`, è possibile assegnare a uno degli host l'indirizzo `1.2.1.255`?

**Risposta:** No, l'indirizzo `1.2.1.255`, avendo tutti i bit dell’hostid impostati a 1 (cioè 255 in decimale), rappresenta l'**indirizzo di broadcast**, che non è assegnabile.

**Domanda 2:** Data una subnet `1.2.0.0/16`, è possibile assegnare a uno degli host l'indirizzo `1.2.1.0`?

**Risposta:** Sì l'indirizzo `1.2.1.0`, avendo i bit del hostid diversi da tutti 0 o tutti 1, rappresenta un indirizzo IP valido.

**Domanda 3:** Data una subnet `1.2.1.0/24`, è possibile assegnare a uno degli host l'indirizzo `1.2.1.0`?

**Risposta:** No l'indirizzo `1.2.1.0`, avendo tutti i bit del hostid impostati a 0, rappresenta l'**indirizzo di rete**, che non è assegnabile.

## Es 2

Un'organizzazione ha bisogno di **15 indirizzi IP** e deve noleggiarli da un provider di rete. Si supponga che il provider di rete possieda la rete `1.2.0.0/16`.

Qual è il minimo valore della subnet mask di cui l’organizzazione ha bisogno?

Per contenere 15 indirizzi, sono necessari 4 bit (2^4 = 16). Quindi, una subnet mask /28 sembrerebbe sufficiente a prima vista. Tuttavia, dobbiamo sottrarre l’indirizzo di rete e quello di broadcast.

Pertanto, una subnet /28 fornirebbe solo 14 indirizzi utilizzabili, che non sono sufficienti.

Per ottenere 15 indirizzi utilizzabili, l'organizzazione deve noleggiare una subnet /27, che fornisce 32 indirizzi, di cui 30 assegnabili.

## Es 3

Un'organizzazione ha due reti, A e B. La rete **A ha 14 host**, mentre la rete **B ne ha 16**. L’organizzazione deve noleggiarli da un provider di rete. Si supponga che il provider di rete possieda la rete `1.2.0.0/16`.

L’organizzazione è strutturata come segue:

![](https://i.ibb.co/NSk3Rnw/image.png)

- Quale è il valore minimo della subnet mask di cui l’organizzazione ha bisogno?
    
    Avendo 14+16=30 host sembrerebbe sufficiente una /27 che fornisce 30 indirizzi assegnabili.
    
    siccome si vuole partizionare la rete in due sottoreti, si avranno quindi 2 indirizzi non utilizzabili nella rete A e due indirizzi non utilizzabili nella rete B, in realtà ho bisogno di 34 indirizzi totali, quindi serve una /26.
    
- Supponiamo che venga noleggiata una `1.2.255.192/26`.
    
    possiamo dividere questo range in due sottoreti /27 ciascuno contenente quindi 30 indirizzi utilizzabili:
    
    - Rete B: userà la subnet `1.2.255.192/27` che fornisce indirizzi nel range `1.2.255.192 - 1.2.255.223`
    - Rete A: userà la subnet `1.2.255.224/27` che fornisce indirizzi nel range `1.2.255.224 - 1.2.255.255`

- La forwarding table del router connesso ad internet sarà la seguente:
    
    
    | Rete di destinazione | Interfaccia in uscita |
    | --- | --- |
    | `0.0.0.0/0` | eth3 |
    | `1.2.255.192/27` | eth1 |
    | `1.2.255.224/27` | eth0 |
- In queta configurazione vengono sprecati metà degli indirizzi, l'amministratore potrebbe voler ottimizzare l'utilizzo degli indirizzi IP noleggiando due subnet più piccole invece di una singola /26.
    
    Si potrebbe noleggiare una /28 per la rete A e una /27 per la rete B.
    
    - Rete B: userà la subnet `1.2.255.192/27` che fornisce indirizzi nel range `1.2.255.192 - 1.2.255.223`
    - Rete A: userà la subnet `1.2.255.224/28` che fornisce indirizzi nel range `1.2.255.224 - 1.2.255.239`
    
    In questo caso la forwarding table del router sarà la seguente:
    
    | Rete di destinazione | Interfaccia in uscita |
    | --- | --- |
    | `0.0.0.0/0` | eth3 |
    | `1.2.255.192/27` | eth1 |
    | `1.2.255.224/28` | eth0 |
