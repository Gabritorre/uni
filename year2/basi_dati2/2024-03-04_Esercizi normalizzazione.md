# Esercizi sulla normalizzazione

## Es 1

Si consideri $F = \{AB \rightarrow C,\\
\hspace{24mm}AC \rightarrow B, \\
\hspace{24mm}AD\rightarrow E, \\
\hspace{24mm}B \rightarrow D, \\
\hspace{24mm}BC \rightarrow A, \\
\hspace{24mm}E \rightarrow G\}$

1. Trovare la proiezione di $F$ sull'insieme di attributi $ABC$:

	- Bisogna calcolare la chiusura di ogni possibile combinazione degli attributi $T' = ABC$ e calcolando le dipendenze con la seguente formula:
	$$X \rightarrow(X^+ \backslash X) \cap T'$$
	$A^+ = A \hspace{5mm} (A \backslash A)\cap ABC = \emptyset \hspace{5mm}$ nessuna dipendenza nuova
	$B^+ = BD \hspace{5mm} (BD \backslash B)\cap ABC = \emptyset \hspace{5mm}$ nessuna dipendenza nuova
	$C^+ = C \hspace{5mm} (C \backslash C)\cap ABC = \emptyset \hspace{5mm}$ nessuna dipendenza nuova
	$AB^+ = ABCDEG \hspace{5mm} (ABCDEG \backslash AB)\cap ABC = C \hspace{5mm}\text{nuova dipendenza: } AB \rightarrow C$
	$AC^+ = ABCDEG  \hspace{5mm} (ABCDEG  \backslash A)\cap ABC = B \hspace{5mm}\text{nuova dipendenza: } AC \rightarrow B$
	$BC^+ = ABCDEG \hspace{5mm} (ABCDEG \backslash A)\cap ABC = A \hspace{5mm}\text{nuova dipendenza: } BC \rightarrow A$

	proiezione: $G = \{AB \rightarrow C, AC \rightarrow B, BC \rightarrow A\}$

2. determinare la forma normale più forte soddisfatta dalla proiezione calcolata (con più forte si intende quella più restrittiva, quindi prima si controlla se è BCNF e poi eventualmente 3FN)

	**Per ogni** elemento di $G$ bisogna controllare se a sinistra ci sia una superchiave:
	- $AB^+_G = ABC$ 
	- $AC^+_G = ABC$
	- $BC^+_G = ABC$

	la proprietà è valida e quindi la relazione $R'(ABC, G)$ è in BCNF (di conseguenza è anche in 3FN)

## Es 2

Si consideri lo schema $R(A, B, C, D, E)$ con le dipendenze funzionali
$F = \{B \rightarrow C,\\
\hspace{9mm}B\rightarrow D, \\
\hspace{9mm}B \rightarrow E, \\
\hspace{9mm}C \rightarrow B\}$

Dimostrare che $R$ non è in BCNF e nemmeno in 3FN e convertirlo in 3FN

Per ogni elemento in $F$ controllo se a sinistra c'è una superchiave:

- $B^+_F = BCDE$ non è superchiave, quindi posso fermarmi subito e stabilire che non è in BCNF

Per verificare se è in 3FN dobbiamo trovare tutte le chiavi:

Dato che $A$ non appare mai a destra significa che fa sicuramente parte della chiave, quindi partiamo da quello come candidato
**osservazione**: Se un elemento non appare mai a sinistra non ha senso comprenderlo come candidato (quindi $D$ ed $E$ non li controlliamo)

| key? | $X$ | $Y$ | $X^+$ | cand |
|:--:|:--:|:--:|:--:|:--:|
| - | - | - | - | $A::(BC)$ |
| ❌ | $A$ | $BC$ | $A$ | $AB::(C), AC::()$ |
| ✅ | $AB$ | $C$ | $ABCDE$ | $AC::()$ |
| ✅ | $AC$ | - | $ABCDE$ | - |

Chiavi: $\{AB, AC\}$

per ogni elemento di $F$ dobbiamo controllare o se $X$ è superchiave o se $Y$ è primo (cioè se fa parte delle chiavi)

- $B \rightarrow C\hspace{5mm} C$ è primo
- $B \rightarrow D\hspace{5mm} D$ non è primo e $B$ non è superchiave

Concludiamo quindi che non siamo in 3FN 

### Conversione in 3FN

1. $F$ è già in forma canonica
2. Accorpiamo $F$ in $G = \{B \rightarrow CDE, C \rightarrow B\}$
3. otteniamo gli schemi $R_1(BCDE), R_2(CB)$
4. rimuoviamo gli schemi contenuti in altri, per cui rimane $R_1(BCDE)$
5. Dato che nello schema $R_1$ non ci sono attributi che costituiscono una superchiave introduciamo un nuovo schema $R_3(AC)$ (potevamo scegliere anche gli attributi $AB$)

La conversion in 3FN è quindi con gli schemi $R_1(BCDE), R_3(AC)$
