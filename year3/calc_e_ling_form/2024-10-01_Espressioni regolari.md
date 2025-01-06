# Espressioni regolari

Possiamo utilizzare le operazioni regolari (unione, concatenazione, star) per costruire espressioni che descrivono linguaggi, tali espressioni sono chiamate **espressioni regolari (regex)**.

Ad esempio:

$$
(0\cup 1) \circ 0^*
$$

mentre nelle classiche espressioni aritmetiche abbiamo come risultato un numero, nelle espressioni il valore è un **linguaggio**.

In particolare il linguaggio dell’espressione nell’esempio può essere descritta come “scegli un simbolo tra 0 e 1, e concatenaci un qualsiasi numero di zeri (anche nessuno)”

## Definizione formale di espressione regolare

Sia $\Sigma$ un alfabeto, l’insieme delle regex definite su $\Sigma$ è definito come segue:

1. Se $a \in \Sigma$ allora $a$ è una regex
2. La stringa vuota $\epsilon$ è una regex
3. L’insieme vuoto $\emptyset$ è una regex
4. Se $r_1, r_2$ sono regex, allora $r_1 \cup r_2$ è una regex
5. Se $r_1, r_2$ sono regex, allora $r_1 \circ r_2$ è una regex
6. Se $r$ è una regex, allora $r^*$ è una regex

## Convenzioni

Vediamo delle convenzioni usate nelle espressioni regolari:

- Dato un alfabeto $\Sigma$, indichiamo con $\Sigma^*$ tutte le possibili stringhe su quell’alfabeto
- L’operatore di concatenazione $\circ$ di solito si omette, quindi $r_1 \circ r_2$ diventa $r_1r_2$
- Gli operatori hanno una precedenza, in particolare gli operatori vanno valutati in questo ordine:

$$
^* \to \circ \to \cup
$$

## Linguaggio di una regex

Abbiamo detto che il valore finale di una espressione regolare è un linguaggio, definiamo questo linguaggio.

Sia $R$ una regex, definiamo il suo linguaggio $L(R)$ in questo modo:

1. Se $R$ è un singolo carattere $a$, allora $L(R) = \{a\}$
2. Se $R = \epsilon$, allora $L(R) = \{\epsilon\}$
3. Se $R = \emptyset$, allora $L(R) = \emptyset$
4. Se $R = R_1 \cup R_2$, allora $L(R) = L(R_1) \cup L(R_2)$
5. Se $R = R_1 \circ R_2$, allora $L(R) = L(R_1) \circ L(R_2)$
6. Se $R = R_1^*$, allora $L(R) = (L(R_1))^*$

### Esempio

Determiniamo il linguaggio della seguente espressione: $(0 \cup 1) \circ 0^*$

$$
L((0\cup 1)\circ 0^*) = L(0\cup 1) \circ L(0^*)\\
=L(0) \cup L(1) \circ L(0^*) \\
=\{0\} \cup \{1\} \circ L(0^*)\\
=\{0, 1\} \circ L(0^*)\\
=\{0, 1\} \circ L(0)^*\\
= \{0, 1\} \circ (\{0\})^*
$$

Vediamo una serie di esempi a cui diamo una descrizione verbale, consideriamo $\Sigma=\{0, 1\}$

- $L(0^*\, 1\, 0^*)$ = stringhe binarie con un solo 1
- $L(\Sigma^*\, 1\, \Sigma^*)$ = stringhe binarie con con almeno un 1
- $L((\Sigma\Sigma)^*)$ = stringhe binarie di lunghezza pari
- $L(1*\emptyset)$ = $\emptyset$ qualsiasi insieme concatenato all’insieme vuoto restituisce l’insieme vuoto
- $L(\emptyset^*)$ = $\{\epsilon\}$ la concatenazione di un numero qualsiasi di stringhe di un linguaggio vuoto da solo la stringa vuota

## Teorema

Un linguaggio $A$ è regolare se e solo se esiste una espressione regolare $R$ tale che $L(R) = A$

 Dimostriamo il teorema in entrambi i versi attraverso la dimostrazione di due lemmi.

### Primo lemma

Il lemma dice: “Sia $R$ una espressione regolare, allora $L(R)$ è regolare”

Mostriamo come trasformare $R$ in un NFA che riconosce il suo linguaggio.

Consideriamo caso per caso le definizioni di una espressione regolare:

1.  Se $R=a$, allora $L(R) = \{a\}$
    
    ![https://i.ibb.co/bv4R19z/prop-1.png](https://i.ibb.co/bv4R19z/prop-1.png)
    
2. Se $R = \epsilon$, allora $L(R) = \{\epsilon\}$
    
    ![https://i.ibb.co/b261rPx/prop-2.png](https://i.ibb.co/b261rPx/prop-2.png)
    
3. Se $R = \emptyset$, allora $L(R) = \emptyset$
    
    ![https://i.ibb.co/4pX7Lwc/prop-3.png](https://i.ibb.co/4pX7Lwc/prop-3.png)
    
4. Se $R = R_1 \cup R_2$, allora $L(R) = L(R_1) \cup L(R_2)$
    
    $R_1$ e $R_2$ sono delle espressioni regolari più piccole di $R$, se così non fosse staremmo definendo $R$ in termini di se stesso. Possiamo quindi fare una ipotesi induttiva: il teorema vale per $R_1$ e $R_2$, quindi $L(R_1)$ e $L(R_2)$ sono linguaggi regolari. Dato che i linguaggi regolari sono chiusi rispetto all’operazione di unione, allora anche $L(R)$ è regolare
    
5. Se $R = R_1 \circ R_2$, allora $L(R) = L(R_1) \circ L(R_2)$
    
    analogo al caso 4
    
6. Se $R = R_1^*$, allora $L(R) = (L(R_1))^*$
    
    analogo al caso 4
    

Ad esempio se vogliamo costruire l’NFA di questa espressione: $(ab \cup a)^*$:

![https://i.ibb.co/wcBQpzk/image.png](https://i.ibb.co/wcBQpzk/image.png)

### Secondo lemma

Il lemma dice: “Se $A$ è un linguaggio regolare allora esiste una espressione regolare $R$ tale che $L(R) = A$”

Idea: Poiché $A$ è un linguaggio regolare, esiste un DFA $D$ tale che $L(D) = A$. Vediamo come trasformare un DFA in una espressione regolare equivalente:

Per farlo dobbiamo servici di un nuovo tipo di automa chiamato GNFA (NFA **generalizzato**). La particolarità di questi automi è che negli archi si possono avere delle espressioni regolari, quindi le transizioni possono “mangiare” blocchi di input.

In particolare lavoreremo con GNFA che soddisfano i seguenti vincoli:

1. Hanno un solo stato iniziale e un solo stato accettante (diverso dallo stato iniziale).
2. Lo stato iniziale ha archi in uscita verso tutti gli altri stati e nessun arco entrante
3. Lo stato accettante ha archi in entrata da tutti gli stati e nessun arco in uscita
4. Tutti gli altri stati sono connessi direttamente tra loro da un arco (anche connessi con se stessi)  fatta eccezione per stato iniziale e stato finale

Il procedimento si fa in questo modo:

Si parte da un DFA con $k$ stati. Lo si trasforma in un GNFA con $k+2$ stati. Lo si continua a trasformare in un GNFA con uno stato in meno fino ad ottenere un GNFA con 2 soli stati.

### Da DFA a GNFA

Per trasformare un DFA in un GNFA si seguono i seguenti passaggi:

1. si aggiunge un nuovo stato iniziale che ha un $\epsilon$-arco verso il vecchio stato iniziale.
2. si aggiunge un nuovo stato accettante che ha $\epsilon$-archi entranti provenienti dai vecchi stati accettanti
3. Se abbiamo archi con più etichette, li sostituiamo con un nuovo arco la cui etichetta è l’unione delle etichette precedenti
4. Aggiungiamo archi con etichetta $\emptyset$ tra stati che non hanno archi

### Da GNFA ad espressione regolare

Dato che un GNFA contiene delle espressioni regolari negli archi, vogliamo rimuovere uno stato dal nostro GNFA fino ad avere 2 stati collegati da un arco, tale arco conterrà l’espressione regolare che vogliamo.

Quello che dobbiamo fare è quindi individuare uno stato da rimuovere e modificare la macchina in modo che il linguaggio riconosciuto da quel GNFA rimanga lo stesso.

Lo stato da rimuovere è di libera scelta, basta che **non sia lo stato iniziale o lo stato accettante.**

Identificato lo stato da rimuovere, $q_{\text{rip}}$, dobbiamo modificare gli archi restanti con delle nuove etichette che descrivono il passaggio di stato che già facevano, più il percorso tramite $q_{\text{rip}}$.

Esempio:

![https://i.ibb.co/Cm0yhxR/image.png](https://i.ibb.co/Cm0yhxR/image.png)

## Esempio completo da DFA a regex

Consideriamo il seguente DFA

![https://i.ibb.co/cCWDLjm/image.png](https://i.ibb.co/cCWDLjm/image.png)

Costruiamo il GNFA:

![https://i.ibb.co/MG13PYd/image.png](https://i.ibb.co/MG13PYd/image.png)

Adesso dobbiamo rimuovere uno ad uno gli stati intermedi fino a rimanere solamente con gli stati $s$ e $a$:

- partiamo con l’eliminare lo stato $1$, in tal caso dobbiamo aggiornare gli archi:
    - da $s$ a $2$ aggiungendo il cammino che passava da $1$
    - da $s$ a $3$ aggiungendo il cammino che passava da $1$
    - da $2$ a $2$ aggiungendo il cammino che passava da $1$
    - da $3$ a $3$ aggiungendo il cammino che passava da $1$
    - da $2$ a $3$ aggiungendo il cammino che passava da $1$
    - da $3$ a $2$ aggiungendo il cammino che passava da $1$
    
    ![https://i.ibb.co/yqhKVd9/image.png](https://i.ibb.co/yqhKVd9/image.png)
    
- eliminiamo lo stato $2$, in tal caso dobbiamo aggiornare gli archi:
    - da $s$ ad $a$ aggiungendo il cammino che passava da $2$
    - da $s$ a $3$ aggiungendo il cammino che passava da $2$
    - da $3$ a $3$ aggiungendo il cammino che passava da $2$
    - da $3$ ad $a$ aggiungendo il cammino che passava da $2$
    
    ![https://i.ibb.co/ZmJWS8Q/image.png](https://i.ibb.co/ZmJWS8Q/image.png)
    
- elimino lo stato 3, in tal caso dobbiamo aggiornare l’arco:
    - da $s$ ad $a$ aggiungendo il cammino che passava da $3$
    
    ![https://i.ibb.co/6tz5Jx5/image.png](https://i.ibb.co/6tz5Jx5/image.png)
    

ottengo così la regex equivalente al DFA iniziale
