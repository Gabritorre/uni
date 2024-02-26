# Decomposizione

Il modo per risolvere le anomalie di uno schema è attraverso la **decomposizione** dello schema in più tabelle che rispettano delle proprietà chiamate *forme normali* e che allo stesso tempo sono equivalenti allo schema originale.

Definizione formale di decomposizione (viene omessa l'insieme delle dipendenze $F$ per brevità):

> Dato uno schema $R(T)$, $\rho = \{R_1(T_1), ..., R_n(T_n)\}$ è una decomposizione $R$ se e solo se l'unione di tutte le $T_i$ è uguale a $T$

In un altro modo può essere definita come: le righe della tabella originale $R$ **sono sottoinsieme** delle righe generate dalla giunzione naturale di tutte le $R_i$ 

Inoltre per essere valida, una decomposizione deve soddisfare due condizioni:

- **preservare i dati**
- **preservare le dipendenze**

## Decomposizioni che preservano i dati

Una decomposizione preserva i dati se e solo se le righe della tabella originale $R$ **sono esattamente le stesse** delle righe generate dalla giunzione naturale di tutte le $R_i$ 

### Verificare se una decomposizione preserva i dati

> Sia $\rho = {R_1(T_1), R_2(T_2)}$ una decomposizione di $R(T, F)$. $ρ$ e una decomposizione ` che preserva i dati se e solo se $T_1 \cap T_2 \to T_1 \in F^+$ oppure $T_1 \cap T_2 \to T_2 \in F^+$

Quindi basta dimostrare che $T_1$ che dipende da $T_1 \cap T_2$ si può derivare da $F$, oppure che $T_1$ che dipende da $T_1 \cap T_2$ si può derivare da $F$

Questo sappiamo già farlo, infatti in generale vale: $F \vdash X \to Y$ se e solo se $Y \subseteq X^+_F$

**esempio**

Relazione originale: $R(A,B,C,D)$
Dipendenze: $F = \{A \to BC\}$
Decomposizione: $\{R_1(A,B,C), R_2(A,D)\}$

Quindi:
- $T_1 = \{A,B,C\}$ e $T_2 = \{A, D\}$
- $T_1 \cap T_2 = \{A\}$
- $A^+_F = \{A,B,C\}$

Abbiamo che $T_1 \subseteq \{A, B, C\}$ mentre $T_2 \nsubseteq \{A, B, C\}$
Ma dato che ci basta che valga per uno solo dei due $T$ allora **la decomposizione preserva i dati**

## Decomposizioni che preservano le dipendenze

Una decomposizione che preserva le dipendenze significa che l'unione delle dipendenze dei sottoschemi è equivalente alle dipendenze dello schema originale.

Per introdurre la definizione formale abbiamo bisogno prima di definire cosa si intende con **proiezione** di un insieme di dipendenze:

> Dato $R(T, F)$, e $T_i \subseteq T$, la proiezione di $F$ su $T_i$ è:

> $$\pi_{T_i}(F) = \{X \to Y \in F^+ | X, Y \subseteq T_i\}$$

Cioè l'insieme delle dipendenze derivabili da $F$ tra gli attributi presenti nel sottoinsieme $T_i$

Formalmente possiamo definire una decomposizione che preserva le dipendenze come:

> La decomposizione $\rho = \{R_1(T_1), ..., R_n(T_n)\}$ di uno schema $R(T, F)$ preserva le dipendenze se e solo se $\bigcup_i\pi_{T_i}(F) \equiv F$

Quindi per dimostrare che una decomposizione rispetta questa proprietà facciamo uso della seguente proprietà

> Dati due insiemi di dipendenze $F$ e $G$, $F \equiv G$ se e solo se $F \subseteq G^+$ e $G \subseteq F^+$

Sia $G = \bigcup_i \pi_{T_i}(F)$, quello che dobbiamo fare è:

verificare che per ogni elemento di $F$ vale la regola del problema dell'implicazione (per ogni $X \to Y \in F$ abbiamo $Y \subseteq X^+_G$) senza bisogno di calcolare $G$. 

L'algoritmo è il seguente:


$\textbf{function }\mathrm{FC}(X, F, \rho)$
$\hspace{5mm}\text{res}_{\text {old }} \leftarrow \emptyset$
$\hspace{5mm}\text{res}_{\text {new }} \leftarrow X$
$\hspace{5mm}\textbf{while} \text{ res} _{\text {new }} \neq \text{res}_{\text {old }} \textbf{do}$
$\hspace{10mm}\textbf{for all } R_i\left(T_i\right) \in \rho \textbf{ do}$ 
$\hspace{15mm}\text{res} _{\text {new }} \leftarrow \text{res}_{\text {new }} \cup\left(\left(\text {res}_{\text {new }} \cap T_i\right)_F^{+} \cap T_i\right)$
$\hspace{5mm}\textbf{return } \text{res}_{\text{new}}$

$\textbf{function } \operatorname{PreserveDeps}(R(T, F), \rho)$
$\hspace{5mm}\textbf{for all } X \rightarrow Y \in F \textbf{ do }$
$\hspace{10mm}\textbf{if } Y \not \subseteq \mathrm{FC}(X, F, \rho) \textbf{ then return} \text{ False}$
$\hspace{5mm}\textbf{return} \text{ True}$


**Vediamo un esempio:**

$F = \{A \to B, B \to C, C \to A\}$
$\rho = \{R_1(A, B), R_2(B, C)\}$

-  1° iterazione di $\text{PreserveDeps}$, Partiamo dalla dipendenza $A \to B$
	- inizializzazione $\text{res}_{\text{new}} = \{A\}$
	
	considero $R_1(A, B)$
		
	- $(\{A\} \cap \{A, B\})^+_F \cap \{A,B\} = A^+_F \cap \{A,B\} = \{A, B, C\} \cap \{A, B\} = \{A, B\}$
	- $\text{res}_{\text{new}} = \{A\} \cup \{A, B\} = \{A, B\}$
	
	considero $R_2(B, C)$
		
	- $(\{A, B\} \cap \{B, C\})^+_F \cap \{B,C\} = B^+_F \cap \{B,C\} = \{A, B, C\} \cap \{B, C\} = \{B, C\}$
	- $\text{res}_{\text{new}} = \{A, B\} \cup \{B, C\} = \{A, B, C\}$

	Dato che $B \subseteq \{A, B, C\}$ allora fino ad adesso la proprietà è soddisfatta e possiamo proseguire

-  2° iterazione di $\text{PreserveDeps}$, passiamo alla dipendenza $B \to C$
	- inizializzazione $\text{res}_{\text{new}} = \{B\}$
	
	considero $R_1(A, B)$
		
	- $(\{B\} \cap \{A, B\})^+_F \cap \{A,B\} = B^+_F \cap \{A,B\} = \{A, B, C\} \cap \{A, B\} = \{A, B\}$
	- $\text{res}_{\text{new}} = \{B\} \cup \{A, B\} = \{A, B\}$
	
	considero $R_2(B, C)$
		
	- $(\{A, B\} \cap \{B, C\})^+_F \cap \{B,C\} = B^+_F \cap \{B,C\} = \{A, B, C\} \cap \{B, C\} = \{B, C\}$
	- $\text{res}_{\text{new}} = \{A, B\} \cup \{B, C\} = \{A, B, C\}$

	Dato che $C \subseteq \{A, B, C\}$ allora fino ad adesso la proprietà è soddisfatta e possiamo proseguire

-  3° iterazione di $\text{PreserveDeps}$, passiamo alla dipendenza $C \to A$
	- inizializzazione $\text{res}_{\text{new}} = \{C\}$
	
	considero $R_1(A, B)$
		
	- $(\{C\} \cap \{A, B\})^+_F \cap \{A,B\} = \empty^+_F \cap \{A,B\} = \empty$
	
	considero $R_2(B, C)$
		
	- $(\{C\} \cap \{B, C\})^+_F \cap \{B,C\} = C^+_F \cap \{B,C\} = \{A, B, C\} \cap \{B, C\} = \{B, C\}$
	- $\text{res}_{\text{new}} = \{C\} \cup \{B, C\} = \{B, C\}$

	considero nuovamente $R_1(A, B)$
			
	- $(\{B, C\} \cap \{A, B\})^+_F \cap \{A,B\} = B^+_F \cap \{A,B\} = \{A, B, C\} \cap \{A, B\} = \{A, B\}$
	- $\text{res}_{\text{new}} = \{B, C\} \cup \{A, B\} = \{A, B, C\}$

	Dato che $A \subseteq \{A, B, C\}$ allora fino ad adesso la proprietà è soddisfatta

Abbiamo testato tutte le dipendenze di $F$ e tutte sono soddisfatte, concludiamo che la **decomposizione preserva le dipendenze**


## Collegamento tra le due proprietà

In generale le due proprietà di preservazione di dati e dipendenze sono indipendenti tra loro, però esiste un teorema che le collega (utile per decomposizione non binarie)

> Sia $\rho \{R_1(T_1), ..., R_n(T_n)\}$ una decomposizione di $R(T, F)$ che preserva le dipendenze e tale che almeno uno degli sottoinsiemi $T_j$ sia superchiave per $R(T, F)$, allora $\rho$ preserva anche i dati
