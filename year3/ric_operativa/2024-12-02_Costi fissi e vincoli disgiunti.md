# Costi fissi e vincoli disgiunti

Ai problemi di programmazione lineare aggiungiamo problemi di costo fisso e vincoli disgiuntivi in quanto questi ultimi sono molto comuni nelle situazioni reali.

## Costi fissi

Dal problema di minimizzazione di costi variabili:

$$
\underset{\begin{array}{lcr}x \in A\\
x\geq 0
\end{array}}{\min}\, c^T x
$$

dove $A$ è un generico poliedro (i vincoli del problema).

Vogliamo aggiungere la seguente specifica:

$$
\begin{cases}
\text{se la componente }x_i>0 \text{ allora paghinamo un certo costo fisso }P > 0\\
\text{se la componente }x_i = 0 \text{ allora NON paghiamo un costo fisso }P > 0\\
\end{cases}
$$

Ovviamente ogni componente ha il proprio costo fisso. Può anche accadere che il costo fisso dipenda da più componenti, ad esempio se $x_1 > 0 \lor x_2 >0 \lor x_6>0$ allora si paga il costo fisso.

l’obiettivo è quindi di minimizzare la funzione considerando anche i costi fissi che hanno le componenti oltre ai costi variabili.

Cioè se $x_i$ è “attivo” ($>0$) allora pago un costo fisso $P$ più il costo variabile in base al valore specifico che assume $x_i$

Considerando una sola componente possiamo mostrare in questo grafico di come se $x_i > 0$ allora bisogna pagare un costo fisso.

![https://i.ibb.co/v4hzhmf/costo-fisso.png](https://i.ibb.co/v4hzhmf/costo-fisso.png)

Per implementare questo aspetto riscriviamo il problema di programmazione matematica nel seguente modo

$$
\begin{aligned}    &\min \ c^T x + yP \\
&x \in A\\
&x \geq 0 \\
&y \geq \frac{x_i}{M} \,\,\,\,\,M \gg 1\\
&y \in \{0, 1\} \\
\end{aligned}
$$

Nella funzione obiettivo abbiamo quindi aggiunto il costo fisso $P$ moltiplicato per una variabile $y$ la quale può essere $0$ oppure $1$, cioè il suo ruolo è quello di attivare/disattivare il costo fisso. 
Dai vincoli notiamo che $y\geq 0$ quando $x_i=0$ e dato che il problema è di minimizzazione $y$ verrà impostato al valore più basso possibile, quindi $y= 0$.

Altrimenti, quando $x_i>0$, si avrà $y$ maggiore uguale ad una quantità compresa tra $0$ e $1$, quindi potrà essere solamente uguale a $1$ (perché $y$ è $0$ oppure $1$).

Nota che $M \gg 1$ è una simbologia che in questo contesto sta a significare che $M$ è un valore molto maggiore rispetto al più grande valore che può assumere $x_i$.

nota che $M$ è un valore numerico **costante** del problema che si decide in modo ragionevole in base al contesto del problema.

## Esempio

La Chair s.r.l. produce **3 tipi di sedie** da cucina in **3 reparti diversi**, ognuno dei quali può indifferentemente produrre le tre tipologie di sedie. I mobilifici consorziati con la Chair s.r.l. richiedono che essa produca rispettivamente 400, 380 e 350 sedie dei tre tipi.

La Chair s.r.l. può decidere se attivare la produzione di sedie in ognuno dei tre reparti, i quali prevedono i seguenti costi di attivazione (in Euro)

Costi fissi:

|  | **Reparto 1** | **Reparto 2** | **Reparto 3** |
| --- | --- | --- | --- |
| **Costo attivazione** | 120 | 140 | 125 |

Inoltre nella seguente tabella si riporta il costo unitario (in Euro/unità) di produzione di ciascuna sedia in ciascun reparto, nonché la quantità massima di sedie producibili (in unità)

costi variabili

|  | **Sedia 1** | **Seda 2** | **Sedia 3** | **Max sedie producibili** |
| --- | --- | --- | --- | --- |
| **Reparto 1** | 18 | 23 | 35 | 600 |
| **Reparto 2** | 19 | 22 | 36 | 650 |
| **Reparto 3** | 17 | 20 | 37 | 690 |

Si costruisca un modello di PL per la minimizzazione dei costi di produzione delle sedie per la Chair
s.r.l.

### Definizione delle variabili

- $x_{ij}:$ numero di sedie di tipo $i$ prodotte dal reparto $j$ ($i = 1, 2, 3$ e $j = 1, 2, 3$)
- $y_j: \begin{cases}
1 & \text{se attivo il reparto } j\\
0& \text{altrimenti}
\end{cases}$

### Definizione funzione obiettivo

$$
\min\begin{array}{l}    \text{costi produzione sedie nel reparto 1} +\\
\text{costi produzione sedie nel reparto 2}+ \\    \text{costi produzione sedie nel reparto 3} + \\    \text{costi fissi dei attivazione}\end{array}
$$

$$
\min\begin{array}{l}    18x_{11} + 23x_{21} + 35x_{31} + \\    19x_{12} + 22x_{22} + 36x_{32} + \\    17x_{13} + 20x_{23} + 37x_{33} + \\    120y_{1} + 140y_{2} + 125y_{3}\end{array}
$$

### Definizione vincoli

- vincoli esplicitati nella consegna:
    
    $$
    \sum_{j = 1}^{3}x_{1j} \geq 400\\
    \sum_{j = 1}^{3}x_{2j} \geq 400 \\
    \sum_{j = 1}^{3}x_{3j} \geq 350
    $$
    
- vincoli sul numero massimo di sedie producibili in ogni reparto
    
    $$
    \sum_{i = 1}^{3}x_{i1} \leq 600\\
    \sum_{i = 1}^{3}x_{i2} \leq 650 \\
    \sum_{i = 1}^{3}x_{i3} \leq 690
    $$
    
- vincoli intrinseci del problema
    
    le sedie non sono divisibili e non possono essere in quantità negativa.
    
    $$
    x_{ij} \geq 0 \text{ intere} \hspace{5mm} \text{per } i = 1,2,3; \,\,\,\,j = 1, 2,3
    $$
    
- vincoli sui costi fissi
    
    Se faccio uso del reparto $1$ devo pagare il suo costo fisso
    
    $$
    y_1 \geq \frac{x_{11} + x_{21} + x_{31}}{M} \hspace{5mm} M \gg1 \hspace{5mm}
    $$
    
    Se faccio uso del reparto $2$ devo pagare il suo costo fisso
    
    $$
    y_2 \geq \frac{x_{12} + x_{22} + x_{32}}{M} \hspace{5mm} M \gg1 \hspace{5mm}
    $$
    
    Se faccio uso del reparto $3$ devo pagare il suo costo fisso
    
    $$
    y_3 \geq \frac{x_{13} + x_{23} + x_{33}}{M} \hspace{5mm} M \gg1 \hspace{5mm}
    $$
    
    $$
    y_j \in \{0, 1\} \hspace{5mm} j=1,2,3
    $$
