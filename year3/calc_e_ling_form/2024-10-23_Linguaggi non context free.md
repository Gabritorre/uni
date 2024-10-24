# Linguaggi non context free

Dimostriamo l’esistenza di linguaggi che stanno al di fuori dell’insieme dei linguaggi context free.

Per dimostrare che un linguaggio non è context free bisogna dimostrare che esso non è generabile da alcuna CFG (oppure che non è riconoscibile da un PDA).

Il principio è lo stesso che abbiamo visto per dimostrare che un linguaggio non è regolare, cioè usare il **pumping lemma** in una versione modificata.

## Pumping lemma  per linguaggi context free

Il pumping lemma per i linguaggi context free stabilisce che esiste un valore (*pumping length*) tale che le stringhe più lunghe di tale valore possono essere replicate in un certo modo restando comunque nel linguaggio. 

### Definizione

Sia $A$ un linguaggio context free, allora esiste un intero $p \geq 0$ (*pumping length*) tale che ogni stringa $s \in A$ con $|s| \geq p$ ($|s|$  è la lunghezza della stringa) può essere divisa in cinque parti

$$
s = u\,v\,x\,y\,z
$$

che soddisfano le seguenti condizioni:

1. $\forall i \geq 0 \hspace{3mm} u\,v^i\,x\,y^i\,z \in A \hspace{3mm} \text{ iterando } v \text{ e } y \text{ la stringa rimane nel linguaggio}$
2. $|vy| > 0 \hspace{7mm} v\text{ oppure } y \text{non sono vuote}$
3. $|vxy| \leq p \hspace{5mm} vxy \text{ insieme hanno una lunghezza al masssimo } p$

**Idea della dimostrazione**:

Scegliamo un $p$ molto grande, quindi le stringhe $s$ saranno molto lunghe e avranno un *parse tree* molto alto. Visto che i non terminali sono di numero finito in tale *parse tree* ci deve essere un non terminale $R$ che si ripete.

Possiamo rappresentare il *parse tree* in questo modo, dove la frontiere dell’albero rappresenta la stringa $s = u\,v\,x\,y\,z$

![https://i.ibb.co/120SZ17/image.png](https://i.ibb.co/120SZ17/image.png)

Possiamo fare due operazioni con questo parse tree:

- *pumping up*: infatti prendendo il parse tree più grande radicato in $R$ e lo mettendolo al posto di quello piccolo ottengo un parse tree per la stringa $u\,v\,v\,x\,y\,y\,z$
    
    ![https://i.ibb.co/f8mRp8Q/image.png](https://i.ibb.co/f8mRp8Q/image.png)
    
- *pumping down*:  infatti prendendo il parse tree più piccolo radicato in $R$ e lo mettendolo al posto di quello grande ottengo un parse tree per la stringa $u\,x\,z$
    
    ![https://i.ibb.co/TK2hz7J/image.png](https://i.ibb.co/TK2hz7J/image.png)
    

## Applicazione del pumping lemma

### Esempio 1

Dimostriamo usando il pumping lemma che il seguente linguaggio non è context free

$$
B = \{a^nb^nc^n | n \geq 0\}
$$

Assumiamo per assurdo che $B$ sia un linguaggio context free, allora deve valere il pumping lemma.

Sia $p$ la *pumping length*, considero la stringa $s = a^pb^pc^p$, abbiamo che $s \in B$ e $|s| \geq p$.

Giungiamo ad una contraddizione dimostrando che $s$ non può essere iterata:

dividiamo $s = u\,v\,x\,y\,z$ con $|vy| > 0$ e $|vxy| \leq p$.

Sfruttando il fatto che $|vy| > 0$ cioè che $v$ o $y$ non è vuota per considerare due casi:

1. Quando $v$ o $y$ contiene più di un tipo di simboli, allora $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio perché non viene rispettato l’ordine
    
    $$
    \underbrace{a}_u \underbrace{a}_v \underbrace{ab}_y \underbrace{bbccc}_z
    $$
    
    $$
    \underbrace{a}_u \underbrace{aa}_{v^2} \underbrace{abab}_{y^2} \underbrace{bbccc}_z
    $$
    
2. Quando entrambe $v$ e $y$ contengono un solo tipo di simbolo, abbiamo che un carattere non sta nè in $v$ ne in $y$ quindi $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio per che un carattere apparirà un numero minore di volte
    
    $$
    \underbrace{a}_u \underbrace{a}_v \underbrace{b}_y \underbrace{bcc}_z
    $$
    
    $$
    \underbrace{a}_u \underbrace{aa}_{v^2} \underbrace{bb}_{y^2} \underbrace{bcc}_z
    $$
    

### Esempio 2

Dimostriamo usando il pumping lemma che il seguente linguaggio non è context free

$$
D = \{ww | w \in \{0, 1\}^*\}
$$

Assumiamo per assurdo che $D$ sia un linguaggio context free, allora vale il pumping lemma, sia $p$ la pumping length, considero la stringa $s = 0^p1^p0^p1^p$,  abbiamo che $s \in D$ e $|s| \geq p$.

dividiamo $s = u\,v\,x\,y\,z$ con $|vy| > 0$ e $|vxy| \leq p$.

Sfruttando il fatto che $|vxy| \leq p$ notiamo che tale porzione della stringa se fosse nella prima metà allora $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio. 

$$
\underbrace{0}_u \underbrace{0}_x \underbrace{1}_y \underbrace{10011}_z 
$$

$$
\underbrace{0}_{u} \underbrace{0}_x \underbrace{11}_{y^2} \underbrace{10011}_{z}
$$

Analogamente se fosse nella seconda metà allora $u\,v^i\,x\,y^i\,z$ non sta nel linguaggio

$$
\underbrace{00110}_u \underbrace{0}_v \underbrace{1}_x \underbrace{1}_z
$$

$$
\underbrace{00110}_u \underbrace{00}_{v^2} \underbrace{1}_x \underbrace{1}_z
$$

Infine se sta a cavallo tra le due metà non sta comunque nel linguaggio

$$
\underbrace{001}_u \underbrace{1}_v \underbrace{0}_x \underbrace{011}_z
$$

$$
\underbrace{001}_u \underbrace{11}_v \underbrace{0}_x \underbrace{011}_z
$$
