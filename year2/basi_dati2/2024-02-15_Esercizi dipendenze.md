## Esercizio 1

Usando gli assiomi di Armstrong, si dimostri che se $X \rightarrow Y$ e $YW \rightarrow Z$, allora $XW \rightarrow Z$

parto da:

$$X \rightarrow Y$$

per arricchimento:

$$XW \rightarrow YW$$

per transitività:

$$\text{dato che } XW \rightarrow YW \text{ e } YW\rightarrow Z \text{ allora }$$

$$XW \rightarrow Z$$

## Esercizio 2


Si supponga che una dipendenza funzionale $X \rightarrow Y$ sia soddisfatta da due istanze di relazione $r$ ed $s$ con gli stessi attributi. Dire se $r \cap s$ e $r \cup s$ soddisfano $X \rightarrow Y$ , fornendo una dimostrazione o un controesempio opportuni.

- $r \cap s$ soddisfa la dipendenza in quanto $r \cap s \subseteq r$ e il testo di cide che $r$ soddisfa la dipendenza, e grazie alla proprietà di soddisfacibilità vale anche per ogni sottoinsieme di esso.

- $r \cup s$ potrebbe non soddisfare la dipendenza, ad esempio consideriamo 
$r=\{(X = 1, Y = 1)\}$
$s=\{(X = 1, Y = 2)\}$

	entrambi $r$ ed $s$ soddisfano la dipendenza, però l'unione non la soddisfa, in quanto scelta la stessa $X$ si hanno 2 valori diversi di $Y$


## Esercizio 3

Si consideri lo schema di relazione $R(A, B, C, D)$ con dipendenze $F = \{AB \rightarrow C, C \rightarrow D, D \rightarrow A\}$. Si trovino tutte le dipendenze non banali derivabili da $F$ e tutte le chiavi di $R$.

(le dipendenze banali sono quelli in cui $X \rightarrow Y$ con $Y$ che è un sottoinsieme degli elementi di $X$)

per trovare tutte le dipendenze derivabili da $F$ calcoliamo la chiusura per ogni sottoinsieme di $R$

| sottoinsieme | chiusura | dipendenza |
|:--:|:--:|:--:|
| $A$ | $A^+=A$ | $A \rightarrow A$ (banale) |
| $B$ | $B^+=B$ | $B \rightarrow B$ (banale) |
| $C$ | $C^+=CDA$ | $C \rightarrow CDA$ |
| $D$ | $D^+=DA$ | $D \rightarrow DA$ |
| $AB$ | $AB^+=ABCD$ | $AB \rightarrow ABCD$ |
| $AC$ | $AC^+=ACD$ | $AC \rightarrow ACD$ |
| $AD$ | $AD^+=AD$ | $AD \rightarrow AD$ (banale) |
| $BC$ | $BC^+=BCDA$ | $BC \rightarrow BCDA$  |
| $BD$ | $BD^+=BDAC$ | $BD \rightarrow BDAC$  |
| $CD$ | $CD^+=CDA$ | $CD \rightarrow CDA$  |
| $ABC$ | $ABC^+=ABCD$ | $ABC \rightarrow ABCD$  |
| $ABD$ | $ABD^+=ABCD$ | $ABD \rightarrow ABCD$  |
| $ACD$ | $ACD^+=ACD$ | $ACD \rightarrow ACD$ (banale) |
| $BCD$ | $BCD^+=BCDA$ | $BCD \rightarrow BCDA$  |
| $ABCD$ | $ABCD^+=ABCD$ | $ABCD \rightarrow ABCD$ (banale) |

tutte le righe in cui nella destra della dipendenza ci sono tutti e 4 gli attributo abbiamo una **superchiave**, le **chiavi** (che sono le superchiavi con il minor numero di attributi) sono $AB, BC, BD$


## Esercizio 4

Si trovino tutte le chiavi dell’esercizio precedente utilizzando l’algoritmo apposito.

Usiamo una visualizzazione dell'algoritmo compressa in una tabella:

Dato che $B$ non dipende da nessun attributo (non appare mai alla destra) allora sicuramente lui farà parte della chiave. partiamo quindi da $B$ come candidato

| key? | $X$ | $Y$ | $X^+$ | cand |
|:--:|:--:|:--:|:--:|:--:|
| - | - | - | - | $B::(ACD)$ |
| ❌ | $B$ | $ACD$ | $B$ | $BA::(CD), BC::(D), BD::()$ |
| ✅ | $BA$ | $CD$ | $ABCD$ | $BC::(D), BD::()$ |
| ✅ | $BC$ | $D$ | $ABCD$ | $BD::()$ |
| ✅ | $BD$ | - | $ABCD$ | - |

Abbiamo trovato le chiavi $AB, BC, BD$
