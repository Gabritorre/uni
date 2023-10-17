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
