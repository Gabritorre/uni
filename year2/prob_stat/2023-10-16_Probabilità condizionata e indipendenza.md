# Probabilità condizionata e indipendenza

definiamo la **probabilità condizionata** dell'evento $A$ dato l'evento $B$ come:

$$\mathbb{P}[A|B] = \frac{\mathbb{P}[A\cap B]}{\mathbb{P}[B]}$$

$\mathbb{P}[A|B]$ rappresenta la probabilità che accada l'evento $A$ dopo che si è verificato l'evento $B$

Pensiamo prima che l'evento B non si sia ancora verificato, possiamo rappresentare gli eventi $A$ e $B$ come:

![enter image description here](https://i.ibb.co/kXCHJgX/prob-cond.png)

Se sappiamo che B si è verificato allora $\Omega$ diventa $B$ e tutto quello che sta fuori $B$ non viene più considerato, il disegno diventa:

![enter image description here](https://i.ibb.co/tHywH6g/prob-cond2.png)

da questo deriva la formula della probabilità condizionata.

è importante notare alcune relazioni:
- $\mathbb{P}[A|B]$ non è correlato in alcun modo a $\mathbb{P}[B|A]$
- $\mathbb{P}[A|B]$ e $\mathbb{P}[\bar{A}|B]$ sono in relazione diretta, infatti:
$$\mathbb{P}[\bar{A}|B] = 1-\mathbb{P}[A|B]$$
- $\mathbb{P}[A|B]$ e $\mathbb{P}[A|\bar{B}]$ non sono in relazione

esempio di probabilità composta:

Abbiamo un'urna con 7 palline:
- 4 bianche numerate da 1 a 4
- 3 nere numerate da 1 a 3

definiamo gli eventi:
$B$ viene estratta una pallina bianca
$N$ viene estratta una palla nera
$C_i$ viene estratta una pallina con il numero $i$

calcoliamo la probabilità degli eventi 
$C_1|B$
$C_1|N$
$N|C_1$
(nota che gli **eventi** vengono scritti senza la $\mathbb{P}$)

$$\mathbb{P}[C_1|B] = \frac{\frac{1}{7}}{\frac{4}{7}} = \frac{1}{4}$$

anche ragionando possiamo pensare che venga estratta una pallina bianca, dato che abbiamo 4 palline numerate qual è la probabilità che esca una pallina con il numero 1? una su quattro

$$\mathbb{P}[C_1|N] = \frac{\frac{1}{7}}{\frac{3}{7}} = \frac{1}{3}$$

ragionando possiamo pensare quante sono le palline con il numero 1 tra le palline nere.

$$\mathbb{P}[N|C_1] = \frac{\frac{1}{7}}{\frac{2}{7}} = \frac{1}{2}$$

ragionando possiamo pensare a quante tra le palline con il numero 1 sono di colore nero? una su due.
nota come $\mathbb{P}[N|C_1] \neq \mathbb{P}[C_1|N]$


## Probabilità composte

dalla formula della probabilità condizionata possiamo ricavare la probabilità dell'intersezione tra due eventi:

$$\mathbb{P}[A\cap B] = \mathbb{P}[A|B] \cdot \mathbb{P}[B]$$

$$\text{oppure}$$

$$\mathbb{P}[A\cap B] = \mathbb{P}[A|B] \cdot \mathbb{P}[A]$$

questa formula può essere generalizzata, ottenendo la **formula delle probabilità composte**

$$P(A \cap B \cap C \cdot...) = P(A) \cdot P(B | A) \cdot P(C | A \cap B) \cdot...$$

possiamo rappresentare tale formula tramite un albero binario:

![enter image description here](https://i.ibb.co/5Kff3Qq/alberello.png)

possiamo calcolare intersezioni come
$\mathbb{P}[A_1 \cap A_2 \cap A_3] =\mathbb{P}[A_1] \cdot \mathbb{P}[A_2|A_1]\cdot \mathbb{P}[A_3|A_1 \cap A_2]$

$\mathbb{P}[A_1 \cap \bar A_2 \cap A_3] =\mathbb{P}[A_1] \cdot \mathbb{P}[\bar A_2|A_1]\cdot \mathbb{P}[A_3|A_1 \cap \bar A_2]$


esempio:
nella solita urna di 7 palline di cui 4 bianche e 3 nere.
qual è la probabilità che estraendo 3 palline senza reinserimento le prime due siano bianche e la terza sia nera.

Abbiamo
$B_1$ la prima pallina bianca
$B_2$ la seconda pallina bianca
$\bar B_3$ la terza pallina nera

calcoliamo quindi la seguente probabilità:

$\mathbb{P}[B_1 \cap B_2 \cap \bar B_3] = \mathbb{P}[B_1] \cdot \mathbb{P}[B_2|B_1]\cdot \mathbb{P}[\bar B_3|B_1 \cap B_2]$

$\mathbb{P}[B_1] = \frac{4}{7}$
$\mathbb{P}[B_2|B_1] = \frac{3}{6} = \frac{1}{2}$ infatti dopo aver pescato una pallina bianca ne rimangono 3 su 6 di bianche
$\mathbb{P}[\bar B_3|B_1 \cap B_2] = \frac{3}{5}$ infatti dopo aver pescato due palline bianche ne rimangono 2 bianche e 3 nere su 5

$\mathbb{P}[B_1 \cap B_2 \cap \bar B_3] =\frac{4}{7} \cdot \frac{1}{2} \cdot \frac{3}{5} =\frac{6}{35}$

### Eventi indipendenti

Due eventi si dicono indipendenti se sapere il risultato di uno non influenza in alcun modo l'altro, quindi

$$\mathbb{P}[A|B] = \mathbb{P}[A]$$

$$\mathbb{P}[A|\bar B] = \mathbb{P}[A]$$

Se due eventi $A$ e $B$ sono indipendenti allora la loro intersezione si calcola come:

$$\mathbb{P}[A \cap B] = \mathbb{P}[A] \cdot \mathbb{P}[B]$$

questo modo di calcolare l'intersezione si può estendere se abbiamo più eventi tutti indipendenti tra loro

$$\mathbb{P}[A_{i_1} \cap ...\cap A_{i_k}] = \mathbb{P}[A_{i_1}] \cdot ... \cdot \mathbb{P}[A_{i_k}]$$

**eventi indipendenti e disgiunti**:

- disgiunti: l'intersezione dei due eventi è vuota $\hspace{5mm}\implies \hspace{5mm}[A \cap B] = \empty$
- indipendenti: il prodotto tra le probabilità dei due eventi è $0$ $\hspace{5mm}\implies \hspace{5mm}\mathbb{P}[A] \cdot \mathbb{P}[B] = 0$

due eventi disgiunti sono anche indipendenti se la probabilità di almeno uno dei due è $0$


esempio:

consideriamo il lancio di un dato due volte

A = "la somma dei dadi è 6"
B = "la somma dei dadi è 7"
C = "il primo dado è 4"

$\mathbb{P}[A] = \frac{5}{36}$
$\mathbb{P}[B] = \frac{1}{6}$
$\mathbb{P}[C] = \frac{6}{36} = \frac{1}{6}$

Abbiamo che gli eventi $A$ e $B$ sono **disgiunti** (o la somma dei dadi è 6 oppure 7, non può essere entrambi, per cui l'intersezione è vuota)

$\mathbb{P}[A\cap C] = \frac{1}{36}$
ma dato che $\mathbb{P}[A] \cdot \mathbb{P}[C] = \frac{5}{36}\cdot \frac{1}{6} = \frac{5}{216}$ che è diverso da $\frac{1}{36}$ allora gli eventi $A$ e  $C$ non sono indipendenti

$\mathbb{P}[B\cap C] = \frac{1}{36}$
e dato che $\mathbb{P}[B] \cdot \mathbb{P}[C] = \frac{1}{6}\cdot \frac{1}{6} = \frac{1}{36}$ che è uguale a $\frac{1}{36}$ allora gli eventi $B$ e  $C$ sono indipendenti

$\mathbb{P}[A\cap B] = 0$ (quindi eventi disgiunti)
e dato che $\mathbb{P}[A] \cdot \mathbb{P}[B] = \frac{5}{36}\cdot \frac{1}{6} = \frac{5}{216}$ che è diverso da $0$ allora gli eventi $B$ e $C$ non sono indipendenti


### componenti in serie e parallelo

Un interessante caso di studio riguarda i sistemi in serie e in parallelo, concentriamoci prima su quelli in serie:

- **sistema in serie**:
	un sistema in serie funziona solo se tutti i componenti di quel sistema funzionano, possiamo rappresentarlo graficamente come:
	![enter image description here](https://i.ibb.co/Jsm1PQ7/serie.png)
Sia $A_i$ l'evento in cui il componente $i$-esimo funziona
mentre sia $A$ l'evento in cui l'intero sistema funziona

	supponiamo che ogni componente si guasti indipendente dagli altri e la probabilità del guasto di un componente la indichiamo con $p_i$

	Quindi 
	$$A = \bigcap_{i = 1}^{n}A_i$$
	
	cioè l'intero sistema funziona se tutti i componenti funzionano

	la probabilità che il sistema funziona è dato da:

	$$\mathbb{P}[A] = \mathbb{P}\left[\bigcap_{i = 1}^{n}A_i\right]$$

	quindi dal prodotto delle probabilità di ogni singolo componente:
	
	$$\mathbb{P}[A] = \prod_{i=1}^{n}\mathbb{P}[A_i]$$

	oppure dal prodotto della probabilità che ogni componente non sia guasto:

	$$\mathbb{P}[A] = \prod_{i=1}^{n}(1-p_i)$$

- **sistema in parallelo**:
	un sistema in parallelo funziona se almeno un componente del sistema funziona, possiamo rappresentarlo graficamente come:

	![enter image description here](https://i.ibb.co/gR7hDNQ/parallelo.png)

	Sia $A_i$ l'evento in cui il componente $i$-esimo funziona
mentre sia $A$ l'evento in cui l'intero sistema funziona

	supponiamo che ogni componente si guasti indipendente dagli altri e la probabilità del guasto di un componente la indichiamo con $p_i$

	Quindi 
	$$A = \bigcup_{i = 1}^{n}A_i$$
	
	cioè l'intero sistema funziona se almeno un componente funziona

	la probabilità che il sistema funziona è dato da:

	$$\mathbb{P}[A] = 1 - \mathbb{P}[\bar A]$$

	quindi il complementare di "il sistema non funziona" che possiamo scrivere come

	$$\mathbb{P}[A] = 1 - \mathbb{P}\left[\bigcap_{i = 1}^{n}\bar{A_i}\right]$$

	cioè $1 -$ la probabilità che ogni componente non funzioni
	la probabilità che ogni componente non funzioni è dato dal prodotto dei complementari

	$$\mathbb{P}[A] = 1- \prod_{i=1}^{n}\mathbb{P}[\bar{A_i}]$$

	oppure
	
	$$\mathbb{P}[A] = 1- \prod_{i=1}^{n}p_i$$

## Formula di Bayes

Utilizziamo un esempio sull'HIV per arrivare alla formula di Bayes e al suo utilizzo.

Si immagini di somministrare un test diagnostico non perfetto a una persona estratta a caso dalla popolazione e si considerino gli eventi:

$M$ = la persona estratta è ammalata
$\bar M$ = la persona estratta non è ammalata
$+$ = il test da risultato positivo
$-$ = il test da risultato negativo

Introduciamo prima delle terminologie riguardanti le malattie:

- **prevalenza**: la frazione di soggetti sono affetti da una malattia rispetto alla popolazione.
$$\mathbb{P}[M]$$
- **sensitività**: probabilità che un test somministrato ad un ammalato risulti positivo
$$\mathbb{P}[+|M]$$
- **specificità**: probabilità che un test somministrato ad un non ammalato risulti negativo
$$\mathbb{P}[-|\bar M]$$

Realizziamo un albero che aiuterà a capire le probabilità da calcolare:

![enter image description here](https://i.ibb.co/xg4X2cQ/tree.png)

Ipotizziamo di avere i seguenti valori:
$\mathbb{P}[M] = 0.001$
$\mathbb{P}[+|M] = 0.95$
$\mathbb{P}[-|\bar M] = 0.98$

Calcoliamo la probabilità di un falso positivo, cioè test risulta positivo ma la persona non è ammalata:

$\mathbb{P}[\bar M \cap +] = \mathbb{P}[\bar M] \cdot \mathbb{P}[+|\bar M]$

$\mathbb{P}[\bar M \cap +] = (1-0.001)\cdot (1-0.98) = 0.01998$

Calcoliamo la probabilità di un falso negativo, cioè test risulta negativo ma la persona è ammalata:

$\mathbb{P}[M \cap -] = \mathbb{P}[M] \cdot \mathbb{P}[-|M]$

$\mathbb{P}[M \cap -] = (0.001)\cdot (1-0.95) = 0.00005$


Sappiamo per la legge della probabilità totale che se abbiamo delle partizioni $C_1, C_2,...$ di un evento certo allora la probabilità di un evento $A$ può essere scritta come la somma delle intersezioni di A con le partizioni:

$$P[A] = \sum_{i}(C_i \cap A)$$

l'intersezione la possiamo anche scrivere come:

$$P[A] = \sum_{i}\mathbb{P}[C_i]\cdot \mathbb{P}[A|C_i]$$

possiamo immaginarla come la somma delle strade dell'albero che portano all'evento A

Nel nostro esempio $M$ e $\bar M$ rappresentano due partizioni. Possiamo applicare questa formula per trovare, ad esempio quale è la probabilità che un test somministrato ad una persona a caso sia positivo:

$P[+] = (\mathbb{P}[M] \cdot \mathbb{P}[+|M]) + (\mathbb{P}[\bar M]\cdot \mathbb{P}[+|\bar M])$

$P[+] = \left(0.001 \cdot 0.95\right) + \left((1-0.001)\cdot (1-0.98)\right) = 0.02093$

Come facciamo però a trovare la probabilità di una partizione sapendo che un determinato evento è accaduto? in altre parole come potrebbe percorrere l'albero sopra disegnato al contrario (da destra verso sinistra)?

La **formula di byes** calcola proprio questo:

$$\mathbb{P}[C_m|A] = \frac{\mathbb{P}[C_m\cap A]}{\mathbb{P}[A]}$$

espandendo numeratore e denominatore:

$\mathbb{P}[C_m\cap A] = \mathbb{P}[C_m]\cdot\mathbb{P}[A|C_m]$

$\mathbb{P}[A] =  \sum_{i}\mathbb{P}[C_i]\cdot \mathbb{P}[A|C_i]$

Quindi la formula di byes si può riscrivere come:

$$\mathbb{P}[C_m|A] = \frac{\mathbb{P}[C_m]\cdot\mathbb{P}[A|C_m]}{\sum_{i}\mathbb{P}[C_i]\cdot \mathbb{P}[A|C_i]}$$


Ritornando al nostro esempio, quale sarebbe la probabilità che una persona risultata positiva sia effettivamente malata?

$$\mathbb{P}[M|+] = \frac{\mathbb{P}[M]\cdot \mathbb{P}[+|M]}{(\mathbb{P}[M]\cdot \mathbb{P}[+|M])+(\mathbb{P}[\bar M] \cdot \mathbb{P}[+|\bar M])}$$

$$\mathbb{P}[M|+] = \frac{0.001 \cdot 0.95}{(0.001\cdot 0.95)+((1-0.001)\cdot (1-0.98))} = 0.045$$


Quello che la formula di byes permette di fare è quello di aggiornare la probabilità di eventi $C_m$ data la nuova informazione
