
# Storie di computazione accettanti

Vediamo una particolare tecnica per dimostrare la riducibilità di certi linguaggi. Questo metodo è utile quando la dimostrazione dell’indecidibilità di un problema comporta la dimostrazione dell’esistenza di qualcosa.

**Definizione**: Sia $M$ una MdT e $w$ una stringa di input. Una **storia di computazione accettante** per $M$ su $w$ è una **sequenza finita di configurazioni** $C_1, C_2, …, C_k$ tale che:

1. La prima configurazione $C_1$ è la configurazione iniziale di $M$ su $w$
2. L’ultima configurazione $C_k$ è una configurazione di accettazione per $M$
3. Ogni configurazione $C_{i+1}$  discende dalla precedente $C_{i}$ secondo le regole di computazione di $M$, per $i = 1…k$

Diciamo che $M$ **accetta** $w$ **se e solo se esiste una storia di computazione accettante** per $M$ su $w$.

Se $M$ **rifiuta o va in loop** su $w$, **non ci sono storie di computazione accettanti**.

## Automi linearmente limitati (LBA)

Introduciamo un nuovo modello computazionale, gli automi linearmente limitati (*Linear Bounded Automaton,* **LBA**).

**Un LBA è una MdT con memoria limitata, in particolare il nastro ha la stessa lunghezza dell’input iniziale.**

Se la testina del nastro tenta di spostarsi oltre il limite destro stabilito dalla lunghezza dell’input assumiamo che la testina rimanga ferma.

## Teorema

Dimostriamo che il problema di determinare se un LBA accetta un input $w$ è **decidibile**

$$
A_{\text{LBA}} = \{<M, w> | M \text{ è una MdT e } w \in L(M)\}
$$

**Teorema**: $A_{\text{LBA}}$ è decidibile.

**Dimostrazione**:

Per dimostrare il teorema ci serviamo di un **lemma**: Sia $M$ un LBA con $q$ stati e $g$ simboli possibili per il nastro. Con un nastro di lunghezza $n$, il numero massimo di configurazioni per $M$ è dato da

 $q\cdot n \cdot g^n$

Per dimostrare questo lemma ricordiamo che una configurazione è una tripla che comprende:

- lo stato attuale della macchina
- la posizione della testina
- il contenuto del nastro

Il numero totale di stati è $q$, le posizioni possibili sul nastro sono $n$, nelle $n$ celle possiamo scegliere tra $g$ simboli, quindi abbiamo $g^n$ possibili contenuti (stringhe) che compaiono nel nastro. Il prodotto tra $q, n, g^n$ restituisce quindi il numero totale di configurazioni di una macchina con nastro lungo $n$

**Dimostriamo** adesso il **teorema**:

Per dimostrare la decidibilità del problema costruiamo il seguente decisore $S$ per $A_{\text{LBA}}$.

$S=$ su input $<M, w>$ (dove $M$ è un LBA)

1. Simula $M$ su $w$ per $q\cdot n \cdot g^n$ passi di computazione oppure fino a che non si ferma
2. se $M$ termina entro quei passi, ritorno il suo output
3. Se $M$ non ha terminato entro quei passi, rifiuta

Se $M$ non termina entro $q\cdot n \cdot g^n$ passi di computazione significa che nel passo successivo ripeterà una configurazione già vista, in quanto sappiamo dal lemma che abbiamo al massimo $q\cdot n \cdot g^n$ configurazioni diverse. ritornare su una configurazione già vista significa entrare in un loop, in quanto tale configurazione è già stata vista e non ha portato a terminazione, ripeterla non porterà di certo ad una conclusione diversa.

## Esempio 1 di utilizzo delle storie di C.A.

Dimostriamo l’indecidibilità di un problema attraverso una riduzione che sfrutta le storie di computazione accettanti.

Dimostro che il problema di determinare se un LBA non riconosce nessuna stringa è indecidibile.

$$
E_{\text{LBA}} = \{<M> | M \text{ è un LBA tale che } L(M) = \emptyset\}
$$

**Teorema**: $E_{\text{LBA}}$ è indecidibile

**Dimostrazione:** dimostro che $A_{\text{TM}}$ è riducibile a $\text{E}_{\text{LBA}}$, cioè dimostro che se avessi un decisore per $\text{E}_{\text{LBA}}$ allora potrei costruire un decisore per $A_{\text{TM}}$ (ma ciò è impossibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{E}_{\text{LBA}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $A_{\text{TM}}$:

$S=$ su input $<M, w>$ (dove $M$ è una MdT)

1. costruisco un LBA $N$ con la seguente caratteristica

$$
L(N) = \begin{cases}
\text{non vuoto} & \text{se } M \text{ accetta }w \\
\text{vuoto} & \text{altrimenti}
\end{cases}
$$

1. eseguo il decisore $R$ su input $<N>$
2. ritorno il suo output invertito

Definiamo il funzionamento di $N$:

Costruiamo l’LBA $N$ in modo che $L(N)$ sia l’insieme delle storie di computazione accettanti per $M$ e $w$:

- se $M$ accetta $w$ allora esiste una storia di computazione accettante per $M$ e $w$, quindi $L(N)$ non sarò vuoto
- se $M$ non accetta $w$ allora non ci sono storie di computazione accettanti per $M$ e $w$, quindi $L(N)$ sarà vuoto

Nel concreto costruiamo $N$ in modo che accetti un input $x$ se tale input è una stringa che codifica una storia di computazione accettante per $M$ su $w$, tale stringa ha il seguente formato:

$$
\#\underbrace{\hspace{8mm}}_{C_1}\#\underbrace{\hspace{8mm}}_{C_2}\#.....\#\underbrace{\hspace{8mm}}_{C_k}\#
$$

$N$ per stabilire che $x$ sia una stringa che rappresenta una storia di computazione accettante per $M$ su $w$ deve:

1. controllare che $C_1$ sia la configurazione iniziale di $M$ su $w$, cioè deve verificare che $C_1 = q_0w$
2. controllare che $C_K$ sia una configurazione accettante, cioè deve verificare che $C_K = uq_{\text{accept}}v$
3. controllare che per ogni $i$, $C_{i+1}$ discende da $C_i$ secondo la funzione di transizione di $M$.
    
    Cioè deve verificare che per ogni coppia di configurazioni adiacenti nella stringa, esse differiscano in modo da rispettare la funzione di transizione di $M$
    

Concludiamo la dimostrazione dicendo quindi che se esistesse il decisore $R$ potemmo risolvere il problema $A_{\text{TM}}$ che però è stato dimostrato essere indecidibile, pertanto $R$ non esiste e $\text{E}_{\text{LBA}}$ è indecidibile.

## Esempio 2 di utilizzo delle storie di C.A.

Dimostro che il problema di determinare se una CFG genera tutte le stringhe del suo alfabeto è indecidibile.

$$
\text{ALL}_{\text{CFG}} = \{<G> | G \text{ è una CFG tale che } L(G) = \Sigma^*\}
$$

**Teorema**: $\text{ALL}_{\text{CFG}}$ è indecidibile

**Dimostrazione:** dimostro che $A_{\text{TM}}$ è riducibile a $\text{ALL}_{\text{CFG}}$, cioè dimostro che se avessi un decisore per $\text{ALL}_{\text{CFG}}$ allora potrei costruire un decisore per $A_{\text{TM}}$ (ma ciò è impossibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{ALL}_{\text{CFG}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $A_{\text{TM}}$:

$S=$ su input $<M, w>$

1. costruisco una CFG $G$ con la seguente caratteristica
    
    $$
    L(G) = \begin{cases}
    A \neq \Sigma^*&\text{se } M \text{ accetta } w\\
    \Sigma^* & \text{altrimenti}
    \end{cases}
    $$
    
2. eseguo il decisore $R$ su input $<G>$
3. ritorno il suo output invertito

Definiamo il funzionamento di $G$:

Costruiamo la CFG $G$ in modo che $L(G)$ contenga le stringhe che **non** sono storie di computazione accettanti per $M$ e $w$:

- se $M$ accetta $w$, allora esiste una storia di computazione accettante per $M$ su $w$, ma siccome $L(G)$ per definizione non le contiene, allora il $G$ non è in grado di generare tutte le possibili stringhe.
- se $M$ non accetta $w$, allora non esistono storie di computazione accettanti per $M$ su $w$, pertanto $G$ riesce a generare tutte le possibili stringhe.

Specificare concretamente il comportamento di $G$ può risultare abbastanza complesso, definiamo quindi un PDA $P$ equivalente. Nella nostra costruzione della macchina $S$, $G$ sarà quindi la conversione del PDA $P$.

Nel concreto costruiamo $P$ in modo che accetti un input $x$ se tale input è una stringa che codifica una storia di computazione accettante per $M$ su $w$, tale stringa ha il seguente formato:

$$
\#\underbrace{\hspace{8mm}}_{C_1}\#\underbrace{\hspace{8mm}}_{C_2}\#.....\#\underbrace{\hspace{8mm}}_{C_k}\#
$$

$P$ per stabilire che $x$ **non** sia una stringa che rappresenta una storia di computazione accettante per $M$ su $w$ deve controllare in modo non deterministico che **almeno una** delle seguenti condizioni si verifichi:

1. controllare che $C_1$ non sia la configurazione iniziale di $M$ su $w$, cioè deve verificare che $C_1 \neq q_0w$
2. controllare che $C_K$ non sia una configurazione accettante, cioè deve verificare che $C_K \neq uq_{\text{accept}}v$
3. controllare che esiste un $i$ per cui $C_{i+1}$ non discende da $C_i$ secondo la funzione di transizione di $M$.
    
    Cioè deve verificare se esiste una coppia di configurazioni adiacenti nella stringa che differisce senza rispettare la funzione di transizione di $M$.
    
    Per la natura LIFO dello stack su cui si basano i PDA, $P$ dovrebbe inserire nello stack $C_i$ e poi poppare durante il confronto con $C_{i+1}$, però così facendo si confronterebbe la fine di $C_i$ con l’inizio di $C_{i+1}$. Pertanto bisogna cambiare la codifica della stringa in questo modo:
    
    $$
    \#\underbrace{\hspace{3mm}\longrightarrow\hspace{3mm}}_{C_1}\#\underbrace{\hspace{3mm}\longleftarrow\hspace{3mm}}_{C_2}\#\underbrace{\hspace{3mm}\longrightarrow\hspace{3mm}}_{C_3}\#\underbrace{\hspace{3mm}\longleftarrow\hspace{3mm}}_{C_1}\#.....\#\underbrace{\hspace{8mm}}_{C_k}\#
    $$
    
    invertendo quindi, in modo alternato, le stringhe delle singole configurazioni.
    

## Esempio di indecidibilità

Dimostro che il problema di determinare se due CFG hanno lo stesso linguaggio è indecidibile.

$$
\text{EQ}_{\text{CFG}} = \{<G, H> | G,H \text{ sono CFG tali che } L(G) = L(H)\}\\
\text{è indecidibile}
$$

**Teorema**: $\text{EQ}_{\text{CFG}}$ è indecidibile

**Dimostrazione:** dimostro che $\text{ALL}_{\text{CFG}}$ è riducibile a $\text{EQ}_{\text{CFG}}$, cioè dimostro che se avessi un decisore per $\text{EQ}_{\text{CFG}}$ allora potrei costruire un decisore per $\text{ALL}_{\text{TM}}$ (ma ciò è impossibile, abbiamo appena dimostrato essere indecidibile).

Assumiamo per assurdo che $R$ sia un decisore per il problema $\text{EQ}_{\text{CFG}}$, sfruttandolo costruisco il seguente decisore $S$ per il problema $\text{ALL}_{\text{CFG}}$:

$S=$ su input $<G>$ (dove $G$ è una CFG)

1. costruisce una CFG $H$ tale che $L(H) = \Sigma^*$
2. eseguo il decisore $R$ su input $<G, H>$
3. ritorno il suo output

la CFG $H$ sarà definita in questo modo: 

per ogni $a \in \Sigma$:

$S\to aS| \epsilon$
