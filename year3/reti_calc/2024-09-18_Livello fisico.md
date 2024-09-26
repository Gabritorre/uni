﻿# Livello fisico

Indichiamo con **bit-rate** la velocità di un canale di comunicazione, espressa in **bit per secondo** (bit/s).

Ovviamente ci sono tutti i vari multipli

| Nome | Simbolo | Multiplo |
| --- | --- | --- |
| Kilobit per secondo | kbit/s | $10^3$ |
| Megabit per secondo | Mbit/s | $10^6$ |
| Gigabit per secondo | Gbit/s | $10^9$ |
| Terabit per secondo | Tbit/s | $10^{12}$ |

## Nozioni di fisica

Vediamo delle nozioni di fisica per andare a definire in modo corretto il **rapporto tra segnale e rumore in una comunicazione.**

## Energia

L’energia è la grandezza fisica che misura la capacità di un corpo di compiere un lavoro, con lavoro si intende l’applicazione di una forza lungo una certa distanza.

L’energia può assumere varie forme e si misura in **Joule (J)**. Nell’ambito delle comunicazioni è più probabile riferirsi a mJ (milli-Joule)

## Potenza

La potenza è definita come il trasferimento di energia in unità di tempo, ci dice quanto velocemente un sistema può fornire energia.

Possiamo quindi dire che si misura con il rapporto J/s (Jouse per secondo) che comunemente si rappresenta come **W (Watt)** nel sistema internazionale

## Corrente elettrica

Gli elettroni sono particelle con carica negativa che, in alcuni materiali, possono muoversi liberamente all'interno della struttura.

Quando gli elettroni si muovono collettivamente, generano una **corrente elettrica**. I materiali in cui gli elettroni possono muoversi liberamente sono chiamati conduttori, mentre quelli in cui il movimento degli elettroni è fortemente limitato o impedito sono chiamati isolanti.

La **corrente elettrica** è una misura del flusso di carica per unità di tempo, espressa in Coulomb al secondo (C/s), un'unità che prende il nome di **Ampere**.

Un generatore di corrente, pensiamo alla batteria, “spinge” gli elettroni in un filo conduttore facendo passare gli elettroni da una velocità quasi nulla ad una certa velocità e in una certa direzione. Per accelerare degli elettroni per un tempo $t$ il generatore **consuma potenza.**

## Resistenza

Quando gli elettroni si muovono rimbalzano nella struttura del materiale, perdendo così dell’energia (che viene trasferita al materiale stesso sotto forma di calore).

Questo è importante perché nelle telecomunicazioni questa perdita di energia si traduce in una attenuazione del segnale rispetto a quello di partenza.

La **resistenza** è un componente che serve a regolare la quantità di corrente che circola in un circuito, dissipandola in calore in modo da evitare una quantità esagerata di corrente sui componenti.

Nelle telecomunicazioni la resistenza può essere un ricevitore (una radio) che riceve una corrente.

Si definisce **sensibilità** la quantità minima di potenza necessaria affinché il sensore del ricevitore riesca a rilevare la presenza di corrente

## Interruttore

In un circuito possiamo aggiungere un interruttore per far passare o meno la corrente. L’interruttore disconnette fisicamente il percorso che la corrette dovrebbe fare:

- con l’interruttore spento il circuito è aperto e non passa corrente
- con l’interruttore acceso il circuito è chiuso e passa corrente

## Segnale

Accendere e spegnere l’interruttore periodicamente, permette di generare degli intervalli di potenza che noi interpretiamo come **segnale.**

![https://i.ibb.co/NW5ZXpD/image.png](https://i.ibb.co/NW5ZXpD/image.png)

## Attenuazione

Come accettato sulla parte della resistenza il cavo di per sé è una resistenza, quindi un po’ di potenza si disperde sotto forma di calore nel cavo.

Questa perdita di potenza si traduce in una **attenuazione del segnale** durante il percorso.

L’attenuazione dipende principalmente dal tipo di materiale, dalla sua grandezza e dalla sua lunghezza.

In un sistema con forte attenuazione, la sensibilità del ricevitore è molto importante.

![https://i.ibb.co/VJVZcJs/image.png](https://i.ibb.co/VJVZcJs/image.png)

## Ritardo

Gli elettroni (o qualsiasi altro mezzo di comunicazione) hanno una velocità finita.

Indichiamo con **Delay (ritardo / latenza)** il tempo che passa dal momento dell’invio del segnale al momento in cui il segnale inizia ad essere ricevuto.

Più distante è il ricevitore più questo ritardo sarà grande

In questo contesto è importante la **sincronizzazione** tra il trasmittente e il ricevitore, cioè si devono accordare per stabilire quando un simbolo inizia e quando un simbolo finisce (e quindi la sua durata).

## Rumore

Gli elettroni non sono mai completamente fermi (a meno di essere alla temperatura dello zero assoluto).

Quindi non si ha mai veramente zero corrente nel circuito e anche quando si fa passare della corrente non è mai esattamente costante, c’è difatti del **rumore** causato dalle oscillazioni degli elettroni.

Rumore sommato all’attenuazione può portare a degli errori di decodifica da parte del ricevitore.

## Rapporto segnale-rumore (SNR)

Il rapporto segnale-rumore (*Signal to Noise Ratio*, SNR) si calcola nel seguente modo:

$$
\text{SNR} = \frac{S}{N} = \frac{\text{Potenza del segnale ricevuto}}{\text{Stima di potenza del Rumore}}
$$

Mi dice quanto della potenza che ho ricevuto fa parte del segnale vero e quanto è invece rumore.

La potenza del rumore è una stima che si può ottenere quando nessuno trasmette in quanto si ottiene solo rumore.

Quando il ricevitore riceve un segnale e deve decidere se è 0 o 1, calcola SNR e può capire di cosa si tratta in base a dei valori di riferimento. Più è grande il valore più la comunicazione è chiara.

L’SNR è una proprietà del canale di comunicazione (radio, cavo, …) e questo valore **influenza il bit-rate massimo**

## Modulazione

In contesti reali non si manda mai un segnale come abbiamo visto fino ad ora, ma si usa la **modulazione.**

La modulazione è un insieme di tecniche per trasmettere informazioni, è composto da:

- Il **segnale portante** (*carrier signal*): una sinusoide con una certa frequenza $f_c$ costante
- Il **segnale modulante** (*modulating signal*): il segnale che vogliamo trasmettere contenente l’informazione

L’idea è quello di andare a influenzare il segnale portante sull’**ampiezza** o sulla **frequenza** in modo da produrre un nuovo segnale (il **segnale modulato**) che codifica una informazione contenuta nel segnale modulante.

![https://upload.wikimedia.org/wikipedia/commons/a/a4/Amfm3-en-de.gif](https://upload.wikimedia.org/wikipedia/commons/a/a4/Amfm3-en-de.gif)

## Modulazione di frequenza (FM)

![https://i.ibb.co/TcSVWPQ/image.png](https://i.ibb.co/TcSVWPQ/image.png)

In questa tecnica di modulazione il segnale viene codificato modificando la frequenza del segnale portante. Possiamo, ad esempio, codificare 1 quando abbiamo una alta frequenza e 0 altrimenti.

Abbiamo una portante $p(t) = A\cos(2\pi f_p t)$ e un segnale digitale $m(t)$ da trasmettere (dato che è digitale trasporterà 0 e 1).

$A$ rappresenta l’ampiezza costante, cioè “l’altezza” rispetto allo 0,

$f_p$ indica il numero di oscillazioni al secondo

$t$ è il tempo

quindi al tempo $t=0$ e con una oscillazione al secondo ($f_p = 1$) abbiamo: $A\cdot\cos(0) = A\cdot 1 = A$

il tempo scorre…

$t = \frac{1}{4}$, $f_p = 1$ abbiamo $A\cdot \cos(\frac{2\pi}{4}) = A\cdot \cos(\frac{\pi}{2}) = 0$

il tempo scorre…

$t = \frac{1}{2}$, $f_p = 1$ abbiamo $A\cdot \cos(\frac{2\pi}{2}) = A\cdot \cos(\pi) = -A$

abbiamo fatto mezza onda in mezzo secondo.

Questa tecnica gioca sul modificare la frequenza aumentandola di una quantità $\Delta$ quando si vuole trasmettere un 1:

$$
\begin{cases}
f_p' = f_p & \text{se } m(t) = 0\\
f_p' = f_p (1 + \Delta) & \text{se } m(t) = 1
\end{cases}
$$

Se ipotizziamo di mettere $\Delta = \frac{1}{2}$ e di star trasmettendo un 1, e quindi di avere una frequenza $f_p’ = 1 + \frac{1}{2} = \frac{3}{2}$

al tempo $t=0$, $f_p' = \frac{3}{2}$ abbiamo $A\cdot\cos(0) = A\cdot 1 = A$

il tempo scorre…

$t = \frac{1}{4}$, $f_p = \frac{3}{2}$ abbiamo $A\cdot \cos(2\pi\frac{3}{2}\frac{1}{4}) = A\cdot \cos(\frac{3\pi}{4}) = -\frac{\sqrt{2}}{2} = -0.707\cdot A$

il tempo scorre…

$t = \frac{1}{2}$, $f_p = \frac{3}{2}$ abbiamo $A\cdot \cos(2\pi\frac{3}{2}\frac{1}{2}) = A\cdot \cos(\frac{3\pi}{2}) = 0$

abbiamo fatto tre quarti di onda in mezzo secondo.

Se abbiamo una frequenza $f_p = 4$ e supponiamo che un bit sia determinato da 4 oscillazioni, stiamo mandando un simbolo ogni secondo **boud-rate (1 Bd/s)**.

In questo specifico caso un simbolo corrisponde ad un singolo bit, quindi il **bit-rate è 1 b/s.**

Nota che potremmo avere una codifica diversa in cui ad un simbolo corrispondono 2 bit (usando quindi 4 livelli di frequenza diversi) in questo caso si avrebbe sempre 1 Bd/s e per calcolare il bit-rate si fa

$$
\text{bit-rate} = \text{numero di bit per simbolo}  \cdot  \text{boud-rate}
$$

si avrebbe quindi $2 \cdot 1 = 2$ b/s

### Aumentare il bit-rate

Per aumentare il bit-rate si può

1. diminuire il numero di oscillazioni richieste per simbolo (aumentare il boud-rate)
2. aumentare il numero di bit per simbolo

Per il primo bisogna stare attenti perché si sta diminuendo il tempo in cui si ha alta frequenza e dobbiamo tenere in considerazione che c’è sempre del rumore che dobbiamo riuscire a distinguere dal segnale reale (risulta quindi più difficile distinguere i simboli)

per il punto 2, aumentare il numero di bit significa aumentare il numero di frequenze diverse in modo da riconoscere tutti i possibili bit.

### Bandwidth

***Bandwidth* o larghezza di banda** è l’intervallo tra la frequenza più bassa e quella più alta che si usa per comunicare.

$$
\text{Bandwith} = f_{\max} - f_{\min}
$$

Se si vuole aumentare il bit-rate è necessario aumentare la larghezza di banda.

Nell’esempio precedente con un simbolo uguale ad un bit la larghezza di banda andava da $f_p$ a $f_p (1 + \Delta)$

Nelle reti wireless utilizzare le stesse frequenze per comunicazioni diverse risulterà in delle interferenze in quanto i ricevitori avranno più rumore da nei loro segnali.

Per questo motivo segnali 4G, segnali televisivi, segnali wifi lavorano su bande diverse. 

## Teorema di Nyquist

Il teorema dice che se la tua comunicazione usa una larghezza di banda $B$, puoi trasmettere $B$ simboli allo stesso momento su frequenze ortogonali.

Se si usano $M$ livelli discreti (**i simboli**), allora la capacità teorica massima di trasmissione in bit/s è $C$:

$$
C_N = 2B\log_2(M)
$$

$M$ solitamente è una potenza di 2.

### Esercizio

Un router wireless utilizza un range di frequenza che va da $2401$ MHz a $2441$ MHz.

Codifica 4 simboli

quale è il massimo bit-rate?

$B = 2.441.000.000 - 2.401.000.000 = 40.000.000$

$C = 2\cdot 40.000.000 \log_2(4) = 80.000.000 \cdot 2 = 160.000.000 = 160$ Mb/s

Si tratta di un limite teorico in quanto non viene considerato il **rumore**

## Teorema di Shannon

Il teorema di Shannon introduce un limite più stretto alla capacità considerando il rumore

Il teorema dice che la capacità del canale con banda $B$ con aggiunta di una gaussiana di rumore bianco è data da:

$$
C_S = B\log_2\left(1+ \frac{S}{N}\right)
$$

$\frac{S}{N}$ è il rapporto segnale rumore SNR

## Nyquist vs Shannon

Nyqust opera su una situazione ideale senza rumore. Shanno è più restrittivo considerando il rumore, non puoi raggiungere $C$ anche se Nyquist te lo permetterebbe.

Se il rapporto segnale rumore è basso sarà più difficile distinguere il rumore dal segnale, in altre parole il rapporto segnale rumore determina il massimo valore di $M$ (il numero di simboli).

B, S, N sono dati dal canale di comunicazione mentre il trasmettitore può decidere $M$, va però deciso in modo che $C_{\text{Nyquist}} \leq C_{\text{Shannon}}$ (questo perché Shannon imposta un limite più realistico e superare il suo valore porterebbe sicuramente ad avere errori di comunicazione)

### Esempio

Abbiamo una comunicazione ADSL con questi valori:

- potenza di trasmissione del router: $100$ mW
- Rumore stimato: $0.0001$ mW
- Attenuazione: la potenza si divide per $25$ ogni Km
- Bandwith: 2.2MHz

Calcoliamo:

- bit-rate massimo a 2 Km di distanza considerando il rumore?
    - potenza segnale ricevuto a 2Km: $100\cdot \frac{1}{25}\frac{1}{25} = 0.16$ mW
    - SNR: $\frac{0.16}{0.0001} = 1600$
    - $C_S = 2.200.00 \log_2(1 + 1600) \approx 23$ Mb/s
- La miglior modulazione da usare?
    - Consideriamo solo modulazioni che sono potenze intere di 2
    - dobbiamo trovare $M$ per cui $2B\log_2(M) \leq C_S$
    - dalla formula inversa di Nyquist ottengo $M = 2^{\frac{C_S}{2B}}$
    - $M = 2^{\frac{23.000.000}{4.400.000}} = 2^{\lfloor 5.227\rfloor} = 2^5 = 32$
- con la modulazione scelta quale è il massimo bit-rate?
    - $C_N = 2\cdot 2.200.000 \cdot 5 = 22$ Mbit/s $< C_s$