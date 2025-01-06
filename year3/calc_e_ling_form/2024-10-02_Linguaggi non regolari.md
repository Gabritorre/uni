# Linguaggi non regolari

Mentre non risulta essere troppo difficile dimostrare che un linguaggio è regolare (utilizzando DFA, NFA ed espressioni regolari), non è altrettanto semplice dimostrare che un linguaggio non è regolare.

Per dimostrare che un linguaggio non è regolare ci serviamo del ***Pumping lemma***

## Pumping lemma

Enunciato: Se $A$ è un linguaggio regolare, allora esiste un intero $p\geq 1$ tale che ogni stringa $s \in A$ di lunghezza $|s| \geq p$, può essere divisa in tre parti $s = xyz$ in modo che soddisfi le seguenti condizioni:

1. $\forall i \geq 0, xy^iz \in A \hspace{7mm} y^i$ significa $i$ copie concatenate di $y$, racchiudere tali copie tra $x$ e $z$ mantiene la stringa nel linguaggio $A$
2. $|y| > 0 \hspace{7mm}$ $y$ deve essere composto da almeno una stringa ($y\neq \epsilon$)
3. $|xy|\leq p \hspace{7mm}$le prime due parti della stringa $s$ devono apparire entro $p$ caratteri

In pratica il lemma dice che una stringa appartenente ad un linguaggio regolare, ha una parte che può essere ripetuta in numero qualsiasi di volte, ottenendo una stringa ancora appartenente al linguaggio di partenza.

Nota come il punto 2 dice che $y$ deve essere composto da qualcosa che non sia la stringa vuota, mentre il punto 1 vale anche con $i=0$ ma indica che possiamo ignorare la parte $y$.

## Dimostrazione Pumping lemma

Sia $A$ un linguaggio regolare, allora esiste un DFA $D$ tale che $L(D) = A$.

Poniamo $p$ uguale al numero di stati del DFA $D$.

Consideriamo una stringa $s = w_1w_2 … w_n$ di lunghezza almeno $p$ (quindi $n \geq p$), e che appartenga al linguaggio $A$ (quindi $s \in A$).

Visto che $s \in A$, allora esiste una sequenza di stati $q_0, q_1, … q_n$ tali che $q_0$ è lo stato iniziale e $q_n$ è lo stato finale e ogni altro stato rispetta la funzione di transizione.

Dato che $n$ è la lunghezza della stringa, la sequenza degli stati del DFA avrà lunghezza $n+1$ (a causa dello stato iniziale). Abbiamo quindi che la sequenza degli stati è maggiore di 1 rispetto al numero totale di stati diversi. Di conseguenza nella sequenza ci sarà sicuramente uno stato ripetuto.

Chiamiamo $q_i$ lo stato che si ripete, e rappresentiamo graficamente come apparirebbe il DFA e localizziamo le tre parti della stringa $s$

![https://i.ibb.co/zxsBpRk/pumping.png](https://i.ibb.co/zxsBpRk/pumping.png)

Quindi $x$ è la parte iniziale che arriva fino allo stato che si ripete, $y$ parte dallo stato che si ripete e mangia gli input fino a tornare in quello stato, la parte rimanente è $z$.

Abbiamo quindi che questo automa riconosce le stringhe $s = xy^iz\hspace{1mm} \forall i \geq 0$

la condizione 2 è vera perché ci sono degli stati da $q_i$ per ritornare a se stesso.

la terza condizione è vera perché se tocco $p+1$ stati allora ho letto $p$ caratteri e ho letto sicuramente anche lo stato ripetuto, quindi $|xy| \leq p$

## Come usare il pumping lemma

Vediamo come usare il pumping lemma per dimostrare la non-regolarità di un linguaggio.

Sia $A$ il linguaggio che vogliamo dimostrare essere non regolare:

1. Assumo per assurdo che $A$ sia regolare
2. Dato che $A$ è regolare deve valere il pumping lemma
3. contraddico il pumping lemma con un controesempio
4. concludo che $A$ non è regolare

Per contraddire il pumping lemma dobbiamo usare la sua **negazione**:

Esiste una stringa $s \in A$ con $|s| \geq p$ tale che per ogni $x, y, z$, si ha $s=xyz$ con $|y| > 0$ e $|xy| \leq p$, per cui esista $i \geq 0$ tale che $xy^iz \notin A$

## Esempio 1

Dimostrare che $A=\{0^n 1^n\}$ non è regolare

Intanto questo linguaggio descrive le stringhe binarie che hanno una serie di zeri iniziali e poi una serie di uno in uguale quantità.

Assumiamo per assurdo che $A$ sia regolare, allora deve valere il pumping lemma.

Prendiamo come controesempio la stringa $s = 0^p1^p$.

La nostra stringa scelta è valida in quanto è un elemento del linguaggio $A$ e ha una lunghezza maggiore di $p$.

La possiamo quindi riscrivere come  $s= xyz$ con $|y| > 0$ e $|xy| \leq p$.

Dobbiamo quindi dimostrare che esiste un $i \geq 0$ tale che $xy^iz \notin A$. Prendo ad esempio $i = 2$

Considerando $|xy| \leq p$ con la mia stringa $s = 0^p1^p$ noto che $x$ e $y$ sono solo zeri in quanto gli zeri saranno in quantità $p$. Di conseguenza $xy^2z$ non sta in $A$ in quanto ci saranno più zeri che uno nella stringa, cioè si avranno delle stringhe nella forma $0^{p+k}1^p$, con $k>0$ (k è il numero di $0$ derivati dalla ripetizione di $y$ una seconda volta)

Quindi il linguaggio non è regolare.

## Esempio 2

Dimostriamo che $F = \{ww| w \in \{0, 1\}^*\}$ non è regolare

Assumiamo per assurdo che $F$ sia regolare.

Prendiamo come controesempio la stringa $s = 0^p10^p1$

$s$ appartiene al linguaggio ed è lunga almeno quanto $p$.

Possiamo quindi dividerla in tre parti $s = xyz$ con $|y| > 0$ e $|xy| \leq p$

Applicando la condizione $|xy| \leq p$ sappiamo che $y$ sta nei primi $p$ zeri.

Quindi considerando $i = 2$: la stringa $xy^2z$ ha forma $0^{p+k}10^p1$ con $k> 0$ che non sta nel linguaggio $F$ (k è il numero di $0$ derivati dalla ripetizione di $y$ una seconda volta)

## Consigli

Se il problema richiedere di mantenere esplicitamente il conto di un numero arbitrario di simboli, potrebbe non essere regolare, ad esempio

$\{0^n1^n|n\geq 0\}$ implica mantenere il conto di quanti $0$ si ha incontrato

$\{a^{2^n} | n\geq 0\}$ implica che devi mantenere il conto di quanti simboli si hanno letti in modo da sapere se sono quantità che sono potenze di due.

Inoltre per dimostrare che certi linguaggi non sono regolari può essere utile sfruttare la chiusura rispetto al complemento: cioè applicare il pumping lemma sul complemento del linguaggio, se il complemento non è regolare allora non lo è nemmeno il linguaggio di partenza.

ad esempio per dimostrare che $\{w | w\in\{0, 1\}^* \text{non è palindroma}\}$ non è regolare, può essere più semplice dimostrare che il suo complemento non lo sia $\{w | w\in\{0, 1\}^* \text{ palindroma}\}$
