# Cifratura a chiave pubblica

Nella crittografia a chiave simmetrica è necessario avere un **canale sicuro** (segreto, integro e autenticato) per poter accordarsi sulla chiave prima di poter comunicare attraverso un canale insicuro.

La **crittografia a chiave pubblica** risolve questo problema, permettendo ad Alice e Bob di comunicare in modo sicuro senza scambiarsi prima dei dati segreti.

Questo viene realizzato tramite la creazione di due chiavi, una **chiave pubblica** (distribuita pubblicamente) e una **chiave privata** (che rimane segreta).

Il **principio fondamentale** della crittografia a chiave pubblica è che ciò che viene cifrato con una chiave può essere decifrato solo con l’altra chiave.

Ci sono vari algoritmi che implementano la cifratura a chiave pubblica, tra cui:

- Lo scambio di chiavi di **Diffie-Hellman**
- La crittografia a chiave pubblica **RSA**

### Intrattabilità dei problemi

Gli algoritmi crittografici spesso si basano su operazioni matematiche le quali non hanno un algoritmo efficiente (di tempo polinomiale) che li risolve. Quindi, ad esempio, aumentando la grandezza dei numeri su tali operazioni matematiche si riesce ad aumentare esponenzialmente il tempo richiesto dagli algoritmi per la risoluzione.

- La **fattorizzazione in fattori primi** di un numero è un esempio di operazione matematica per cui non esiste un algoritmo efficiente.
    
    Se calcoliamo $m = p \cdot q$ dove $p, q$ sono numeri primi, non abbiamo un algoritmo efficiente per ottenere $p$ e $q$ a partire da $m$.
    
- Il **calcolo del logaritmo discreto** è una altro problema matematico di questo tipo.
    
    La classica operazione di logaritmo con numeri reali è la seguente:
    
    $$
    g^a =m \longrightarrow \log_{g}m = a
    $$
    
    Con numeri interi però, dati $n, g$ e $m$ non abbiamo un algoritmo efficiente per ottenere $a$ tale che $g^a \mod n = m$
    

## Diffie-Hellman

Lo **scambio di chiavi Diffie-Hellman** è un protocollo che consente a due entità di concordarsi su una **chiave simmetrica** in un **canale insicuro** senza essersi prima scambiati informazioni segrete.

Questa chiave può essere utilizzata successivamente per cifrare le comunicazioni tramite un algoritmo a chiave simmetrica, garantendo la segretezza delle informazioni scambiate.

Questo protocollo si basa sulla difficoltà di calcolare il logaritmo discreto.

### Funzionamento

![](https://i.ibb.co/RcYwpXy/image.png)

- Alice sceglie un numero primo abbastanza grande $n$, un numero random $a$ (che deve rimanere **segreto**) e una radice primitiva (o generatore) $g$ per $n$.
    
    La radice primitiva di un numero primo $n$ è un intero $g$ tale che ogni intero da $1$ a $n-1$ può essere espresso come una potenza di $g$ modulo $n$, ad esempio con $n = 7, g = 3$:
    
    - $1 = 3^6 \mod 7$
    - $2 = 3^2 \mod 7$
    - $3 = 3^1 \mod 7$
    - $4 =3^4 \mod 7$
    - $5 = 3^5 \mod 7$
    - $6 = 3^3 \mod 7$
- Alice calcola $m$ come $g^a\mod n$ e manda $m, g, n$ a Bob
- Bob riceve i dati e sceglie un numero random $b$ (che deve rimanere **segreto**)
- Bob calcola $r$ come $g^b \mod n$ e lo manda ad Alice
- La chiave condivisa generata è quindi
    
    $$
    K = g^{ab}\mod n
    $$
    
    che Bob calcola come:
    
    - $K = m^b \mod n = (g^{a})^b \mod n = g^{ab} \mod n$
    
    Mentre Alice la calcola come
    
    - $K = r^a \mod n = (g^b)^a \mod n = g^{ab} \mod n$

Questo sistema garantisce che, anche se un **attaccante dovesse intercettare il traffico** e ottenere $m,g,n,r$, non sarebbe comunque in grado di risalire ad $a$ e $b$ (e quindi alla chiave), grazie alla complessità computazionale del logaritmo discreto.

### Problema

Se però l’attaccante fosse in grado di **modificare il traffico**, nascerebbero dei problemi (essendo in un canale insicuro, questo non è da escludere)

L’attaccante (Eve) potrebbe far semplicemente fallire lo scambio, ma nel caso peggiore potrebbe fingere di essere Bob per Alice e fingere di essere Alice per Bob.

![](https://i.ibb.co/6NjV6z3/image.png)

Diffie Hellman **non garantisce quindi l’autenticazione** delle parti, questo sistema viene spesso utilizzato in combinazione con meccanismi di autenticazione.

## Principi della crittografia a chiave pubblica

Vediamo i **principi della crittografia a chiave pubblica**:

- Alice e Bob hanno due chiavi ciascuno
- Alice genera la propria **chiave pubblica** (accessibile da chiunque) e la propria **chiave privata** (segreta)
- Bob genera la propria **chiave pubblica** (accessibile da chiunque) e la propria **chiave privata** (segreta)
- Ciò che viene cifrato con una chiave può essere decifrato solamente con l’altra chiave
- Le chiavi pubbliche e private vengono generate contemporaneamente attraverso un processo matematico che le lega intrinsecamente. Per come sono generate è computazionalmente impossibile ottenere una chiave possedendo l’altra.

Per garantire la **segretezza** possiamo usare la **chiave pubblica del destinatario per cifrare** il messaggio, così facendo solo il destinatario, con la sua **chiave privata, potrà decifrare il messaggio**.

![](https://i.ibb.co/kHk5GXM/image.png)

## RSA

L’algoritmo più famoso che implementa questo sistema è **RSA** (dal nome dei suoi autori: Rivest Shamir, Adleman), questo algoritmo è basato sulla difficoltà della **fattorizzazione in numeri primi**.

**RSA**, riesce ad offrire **segretezza**, **autenticazione, integrità** e **non ripudio**, senza la necessità di un canale sicuro preesistente per lo scambio delle chiavi.

Il processo semplificato per la **creazione delle chiavi** è il seguente:

- Scegliere due numeri primi abbastanza grandi $p, q$ da tenere segreti
- Calcolare $n = p\cdot q$ e calcolare la funzione toziente $\phi(n) = (p-1)(q-1)$
    
    La **funzione toziente** (o funzione di Eulero) è una funzione che prende in input un intero $n$ e restituisce il numero di interi compresi tra $1$ e $n$ che sono **coprimi** con $n$ (non hanno divisori comuni oltre a $1$).
    
    Esempio  $n = 3 \cdot 5 = 15$, $\phi(15) = (3-1)(5-1) = 8$ infatti i numeri coprimi con $15$ compresi tra $1$ e $15$ sono: $1, 2, 4, 7, 8, 11, 13, 14$
    
- Scegliere un intero $e$ tale che $2 < e < \phi(n)$ e che sia coprimo con il valore restituito da $\phi (n)$
- Calcolare $d$ in modo che $d\cdot e \mod \phi(n) = 1$, cioè che sia l’inverso moltiplicativo di $e$ in modulo $\phi(n)$
    
    Esempio: con $e = 3$ e $\phi(15) = 8$ l’inverso moltiplicativo di $3$ è $3$ infatti: $3 \cdot 3 \mod 8 =1$
    

$(n,e)$ rappresenta la **chiave pubblica**, mentre $(n, d)$ rappresenta la **chiave privata**

La forza dell'algoritmo sta nel fatto che per calcolare $d$ da $e$ (o viceversa) non basta la conoscenza di $n$ ma serve il numero $\phi (n)=(p−1)(q−1)$, ma per il suo calcolo non esistono algoritmi efficienti.

Se Bob vuole inviare un messaggio $M$ ad Alice, lo cifrerà in questo modo:

$$
C = M^e \mod n
$$

mentre Alice per decifrarlo:

$$
M = C^d \mod n
$$

## Esempio

Scegliamo $p = 7, q = 11$ e calcoliamo:

- $n = 7 \cdot 11 = 77$
- $\phi(n) = (7-1)(11-1) = 60$

Scegliamo $e = 13$ in modo che non abbia divisori comuni con $60$

per trovare $d$ nella realtà si usa l’algoritmo esteso di Euclide, ma con numeri piccoli si può andare a tentativi per ottenere $d = 37$. Infatti $37\cdot 13 \mod 60 = 1$

Assumiamo che il messaggio da inviare sia $M = 00010100_2 = 20_{10}$

- Cifratura:
    
    $$
    C = 20^{13} \mod 77 = 69
    $$
    
- Decifratura:
    
    $$
    M = 69^{37} \mod 77 = 20
    $$
    

## Proprietà desiderate

Sia $E()$ la funzione di cifratura, e $D()$ la funzione di decifratura in modo che 

- $C = E(Pub\_A, M)$ significa che genero in testo cifrato $C$ cifrando $M$ con la chiave $Pub\_A$
- $M = D(Priv\_A, C)$ significa che genero il testo in chiaro $M$ decifrando $C$ con la chiave $Priv\_A$

Le proprietà che vorremmo avere nel nostro algoritmo sono:

1. Che sia computazionalmente **efficiente generare le chiavi** $Pub\_A, Priv\_A$
2. Data la chiave $Pub\_A$ sia computazionalmente **efficiente calcolare** $C = E(Pub\_A, M)$
3. Data la chiave $Priv\_A$ sia computazionalmente **efficiente calcolare** $M = D(Priv\_A, C)$
4. Avendo la chiave $Pub\_A$ sia computazionalmente **impossibile ottenere** $Priv\_A$
5. Avendo la chiave $Pub\_A$ e il testo cifrato $C$ sia computazionalmente **impossibile ottenere relativo testo in chiaro** $M$

RSA riesce a dare tutte queste proprietà, infatti la **generazione delle chiavi, la cifratura e la decifratura** avvengono in tempo **polinomiale**, mentre usando delle **chiavi sufficientemente grandi** (>1024 bit) risulta molto **difficile rompere la cifratura**.

## Attacchi a RSA

Un attaccante può fare la stessa cosa che poteva fare con Diffie-hellman, cioè durante lo scambio delle chiavi pubbliche, Eve si può mettere in mezzo fingendo di essere il destinatario per entrambe le parti, compromettendo lo scambio e di conseguenza tutta la successiva comunicazione:

![](https://i.ibb.co/0QJ9V0P/image.png)

Quindi la cifratura a chiave pubblica necessita di un canale **autenticato e integro** per lo scambio delle chiavi, cioè Alice e Bob devono essere sicuri che le chiavi che ricevono appartengano effettivamente all’altra persona, ma tali chiavi sono già pubbliche quindi **non abbiamo bisogno di segretezza**. Ricordiamo invece che la cifratura a chiave simmetrica richiede un canale autenticato, integro e segreto per lo scambio.

## Firma digitale

Invertendo il ruolo delle chiavi è possibile implementare il concetto di **firma digitale.**

Se Alice **cifra** un messaggio con la **propria chiave privata**, allora **chiunque può decifrarla** usando la chiave pubblica di Alice, in questo modo si è certi che quel messaggio proviene da Alice, dato che è l’unica in possesso della chiave privata usata per la cifratura. Allo stesso modo Alice non può negare di essere stata lei ad inviare il messaggio.

In questo modo si può usare RSA per garantire **autenticazione** e il **non ripudio** (e usando entrambe le tecniche garantisce anche segretezza).

Così facendo durante lo scambio delle chiavi si può, oltre che a mandare la chiave, mandare anche una firma digitale per autenticare il mittente.

Ancora una volta, però, l’attacco *man in the middle* è possibile: infatti Bob prima di verificare la firma deve richiedere la chiave pubblica di Alice e questa può essere compromessa, Eve infatti può mandare la sua chiave pubblica, firmata con la sua privata, fingendosi quindi Alice.

Quindi finché lo scambio delle chiavi non avviene in modo completamente affidabile, l’attacco man in the middle è possibile.

## Prestazioni di RSA

La differenza di velocità con cui si cripta e di decripta con RSA è molto ampia: risulta infatti poco costoso usare la chiave pubblica e molto costoso usare la chiave privata. Questo è dato dal fatto che si tende a preferire una **chiave privata più lunga** rispetto alla chiave pubblica in quanto deve essere difficile di indovinare.

Comparato con i tempi di cifratura a chiave simmetrica, **RSA è vari ordini di grandezza più lento**.

In passato, alcuni sistemi che utilizzavano RSA per cifrare e decifrare l’intero traffico sono stati vulnerabili ad attacchi *DoS*. Questi attacchi sfruttavano il fatto che, per i client, cifrare i messaggi con la chiave pubblica del server era molto più veloce di quanto non fosse per il server decifrarli con la propria chiave privata.

### Utilizzo nella realtà di RSA

Quello che si fa nella realtà è quindi di usare **RSA per lo scambio di una chiave segreta condivisa**, e poi si usa un sistema di **crittografia simmetrica** (ad esempio AES) **con HMAC.**

Per la firma digitale, invece viene prima fatto un hash del messaggio (per ridurne la grandezza) e poi il *digest* generato viene cifrato con la propria chiave privata.

In conclusione la cifratura a chiave pubblica fornisce:

- segretezza
- integrità
- autenticazione
- non ripudio

ma ha bisogno di:

- un canale autenticato per fare il set-up della comunicazione
