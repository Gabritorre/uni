# Introduzione

Internet e più in generale le reti sono una struttura:

- **decentralizzata**: non c’è un coordinatore globale, si può quindi espandere liberamente
- **robusta:** in caso di fallimento di un percorso verso la destinazione, riesce comunque a trovare una via alternativa
- **inter-operativa:** utilizza varie tecnologie che riescono a comunicare tra loro (cavo in rame, wireless, fibra, …)
- **versatile**: trasporta vari tipi di informazione (testo, video, audio, …)

Queste caratteristiche sono possibili grazie alla **stratificazione in livelli** della rete e all’uso di **standard e protocolli**.

- **Livelli (*layer*)**: Il sistema che implementa le reti è diviso in livelli (pezzi di software), ogni livello si occupa di un *task* specifico. Insieme formano il **network stack**.
- **Standard e protocolli**: ogni livello ha degli standard e protocolli che deve rispettare, si tratta di documenti tecnici che descrivono i dettagli della comunicazione.

Due esempi di *network stack* sono **TCP/IP** e **ISO-OSI**:

- TCP/IP è il modello che viene utilizzato su internet, formato dai seguenti livelli:
    - *Application layer*: descrive il comportamento dell’applicazione ad alto livello
    - *Transport layer*: si occupa dell’affidabilità delle connessioni
    - *Internet/IP layer*: fornisce funzioni di interoperabilità tra veri medium fisici e instradamento
    - *Link layer*: descrive la comunicazione fisica
- ISO-OSI è più dettagliato e quindi utile a livello teorico/accademico ed è formato dai seguenti livelli:
    - *Application layer*
    - *Presentation layer*: descrive come visualizzare i dati
    - *session layer*: descrive come mantenere la sessione utente
    - *Transport layer*
    - *Network layer (Internet/IP layer)*
    - *data link layer*: descrive come più terminali accedono allo stesso medium fisico
    - *physical layer (Link layer)*

Ogni livello offre delle **interfacce (API)** per gli strati adiacenti.

Durante una comunicazione possiamo immaginare che mittente e destinatario abbiano un *network stack*, si parte dall’*Application layer* del mittente, scendendo nello stack, ogni livello aggiunge dei dati all’informazione di partenza (operazione che si chiama **incapsulamento**). Quando il pacchetto finale arriva al destinatario viene percorsa la pila dal basso e si spacchetta fino al livello applicazione.

![](https://i.ibb.co/hcwb5xk/image.png)

Generalmente ci si riferisce all’informazione con il termine “pacchetto” ma ad ogni layer l’informazione prodotta assume un nome particolare:

- A livello di trasporto si parla di **segmenti**
- A livello IP si parla di **pacchetti**
- A livello collegamento si parla di **frame**
