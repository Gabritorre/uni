# Ordinamento

Vediamo ora il Il problema dell'ordinamento di una sequenza di numeri.

Data una sequenza di numeri $<a_1, ..., a_n>$ voglio un modo per restituire una permutazione di tale sequenza $<a_1', ..., a_n'>$ in cui gli elementi sono ordinati in modo non decrescente

Esistono moltissimi algoritmi che fanno questo ma noi andremo ad analizzare solo alcuni di questi che utilizzano il **metodo del confronto**, cioè gli elementi vengono confrontati tra loro per ottenere il corretto ordinamento.

## Insertion sort

L'insertion sort è un algoritmo basato sulla **tecnica incrementale**: ho $k$ elementi già ordinati e voglio estendere l'ordinamento per il $k+1$-esimo elemento.

Vediamo l'algoritmo

```c++
void insertionSort(int arr[], int n) {
    for (int j = 1; j < n; j++) {	// partiamo da 1 perche l'elemento 0 non ha elementi precedenti con cui essere comparato
        int key = arr[j];
        int i = j - 1;

        // Sposta gli elementi dell'array che sono maggiori di key
        // a una posizione avanti della loro posizione attuale
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i -= 1;
        }

        // Inserisci key nella sua posizione corretta
        arr[i + 1] = key;
    }
}
```
Sostanzialmente quello che fa questo algoritmo è scorrere l'array e prendere ogni elemento e confrontarlo con i precedenti fino a che il suo valore non risulta essere maggiore del precedente.


![enter image description here](https://i.ibb.co/SfznNZx/image.png)


La correttezza dell'algoritmo si basa sulla correttezza dell'invariante del ciclo for. 
Dimostriamo la correttezza dell'invariante.

**invariante**: Il sottoarray `A[0, ... j-1]` è formato dagli **elementi ordinati** che originariamente erano in posizione `A[0, ... j-1]`

**inizializzazione**: prima dell'inizio del ciclo `j = 1`, quindi stiamo dicendo che il sottoarray `A[0, ... 0]` è formato da elementi ordinati che originariamente orano in posizione `A[0, ... 0]`, infatti un sottoarray composto da un solo elemento risulta essere già ordinato

**conservazione**: Il corpo del ciclo for si occupa di inserire nella posizione corretta l'elemento `j` nella porzione di array già ordinata `A[0, ..., j-1]`, dunque una volta posizionato correttamente la nuova porzione ordinata è `A[0, ..., j]` composta dagli elementi originariamente in posizione `A[0, ..., j]`

$$\text{INV} \land \text{guardia} \implies \text{INV}\left[\frac{j}{j-1}\right]$$

**conclusione** quando il ciclo for termina il valore di `j` è uguale alla lunghezza dell'array, quindi il sottoarray `A[0, ..., n - 1]` è formato dagli elementi ordinati originariamente in posizione `A[0, ..., n - 1]`

$$\text{INV} \land \lnot \text{guardia} \implies \text{INV}\left[\frac{n}{j}\right]$$

Quindi concludiamo che tutti gli elementi sono stati ordinati


### Ordinamento in loco

**ordinamento in loco** significa che in ogni istante al più un un numero costante di elementi dell'array sono memorizzati da qualche parte al di fuori dell'array

L'insertion sort viene definito come un algoritmo di ordinamento in loco in quanto in ogni istante c'è al più un elemento memorizzato al di fuori dell'array (precisamente la variabile `key` nell'algoritmo precedente)

### Complessità

Analizziamo il caso peggiore.
Il caso peggiore risulta essere quello in cui il ciclo for viene eseguito $n$ volte (questo è inevitabile) e il ciclo while viene eseguito $j$ volte per ogni elemento dell'array.

$$\sum_{j = 1}^{\text{n}}j = \frac{n(n+1)}{2} = \Theta(n^2)$$

Nel caso peggiore abbiamo quindi una complessità $T(n) = \Theta(n^2)$
Il caso peggiore risulta essere l'array ordinato in modo decrescente


Nel caso migliore, cioè con l'array già ordinato dobbiamo comunque scorrere il ciclo for $n$ volte, quindi la complessità del caso migliore è $T(n) = \Theta(n)$


### Vantaggi
- ordinamento il loco
- sensibile all'ordinamento: se l'array è completamente o parzialmente ordinato vengono eseguite meno istruzioni
- è stabile: gli elementi dell'array uguali vengono mantenuti nello stesso ordine in cui erano nell'array originale

### Svantaggi

- Ha una complessità di $O(n^2)$
