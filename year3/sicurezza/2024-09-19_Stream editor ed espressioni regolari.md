# Stream editor ed espressioni regolari

Uno **stream editor** è uno strumento usato per fare delle trasformazioni basilari su uno stream testuale in input. Uno strumento a linea di comando di questo tipo appartiene ai tool di base Unix e si chiama “**sed**”.

La struttura base per invocare il programma *sed* è il seguente

```bash
sed <commands> <input_file>
```

Esempio, sostituire la stringa “Gigi” con “Franco” da un testo proveniente dal file di testo chiamato “input.txt”.

```bash
sed "s/Gigi/Franco/" input.txt
```

Possiamo aggiungere l’opzione `-i` che serve per apportare il cambiamento all’interno del file, senza le modifiche vengono solamente stampate nello stream di output, senza che il file non venga toccato

### Comandi sed

Vediamo la sintassi dei comandi che *sed* utilizza per fare le sue trasformazioni.

I comandi sed seguono la seguente struttura:

```bash
[addr]X[options]
```

- `addr` (opzionale): espressione regolare, numero di riga o range di righe, che indica dove si vuole eseguire il comando
- `X` (necessario): una singola lettere che indica l’azione del comando
- `options`(opzionale): opzioni aggiuntive per particolari comandi

Degli esempi di comandi sono: 

- **Delete**, con lettera `d`
    - `sed "1d" input.txt` stampa tutte le righe tranne la prima
    - `sed “1,3d” input.txt` stampa tutte le righe tranne le righe 1, 2 e 3
- **Print**, con lettera `p`
    - `sed "1p" input.txt` stampa la prima riga + stampa di default
    - `sed “1,3p” input.txt` stampa la riga 1, 2 e 3 + stampa di default
    
    Nota: per comportamento di default *sed* cerca sempre di stampare indipendentemente dal comando, quindi con il comando `p` stiamo facendo stampare ciò che già viene stampato di default, ottenendo così che con il comando `sed "1p" input.txt` viene stampata la prima riga 2 volte. Se si vuole forzare la stampa solo delle righe indicate nel comando va aggiunta l’opzione `-n` al programma
    
    - `sed -n “1,3p” input.txt` stampa solo la riga 1, 2 e 3
- **Substitution**, con lettera `s`
    - `sed “s/hello/hi” input.txt` sostituisce la **prima occorrenza su ogni riga** della stringa “hello” con la stringa “hi”. Nota che in questo caso il comando `s` usa due opzioni racchiuse tra slash (`/`)
    - `sed “s/hello/hi/g” input.txt` sostituisce **ogni occorrenza** della stringa “hello” con la stringa “hi”
    - `sed “s/HeLlO/hi/gi” input.txt`sostituisce **ogni occorrenza** della stringa “hello” con la stringa “hi” in modo case insensitive
    
    Nota: il carattere che divide le opzioni è arbitrario, lo slash è quello convenzionale ma si possono usare altri caratteri *single-byte* come:  `.` , `?`
    

- **Mapping**, con lettera **`y`**
    - `sed “y/abc/ABC/” input.txt` fa un mapping carattere per carattere su ogni occorrenza, quindi mappa il primo carattere della prima opzione con il primo carattere della seconda opzione e così via. Si ottiene che tutte le ‘a’ diventano ‘A’, tutte le ‘b’ diventano ‘B’ ecc…

## Espressioni regolari

Le espressioni regolari rappresentano dei pattern di stringhe con strutture particolari.

Ci sono dei caratteri speciali che rappresentano la struttura:

- `^` inizio della riga
- `$` fine della riga
- `.` singolo carattere
- `.*` una sequenza di caratteri (anche una sequenza vuota, o sequenza con spazi)
- `c*`  qualunque numero di occorrenze del carattere ‘c’, anche nessuna occorrenza.
- `c\+` una o più occorrenze di ‘c’
- `c\?` zero o una occorrenze di ‘c’
- `[0-9]`  sequenza di caratteri numerici
- `[^0-9]` sequenza che **non contiene** caratteri numerici

Vediamo delle classi particolari:

| Classe | Significato | Esempio |
| --- | --- | --- |
| [[:alpha:]] | Caratteri alfabetici | [[:alpha:]]+: corrisponde a "abcXYZ" |
| [[:digit:]] | Cifre numeriche | [[:digit:]]{3}: corrisponde a "123" |
| [[:alnum:]] | Caratteri alfanumerici | [[:alnum:]]: corrisponde a "a1B2c3" |
| [[:space:]] | Spazi bianchi | [[:space:]]+: corrisponde a " \t\n" |
| [[:punct:]] | Segni di punteggiatura | [[:punct:]]: corrisponde a "!?.,;" |
| [[:upper:]] | Lettere maiuscole | [[:upper:]]+: corrisponde a "ABC" |
| [[:lower:]] | Lettere minuscole | [[:lower:]]+: corrisponde a "xyz" |
| [[:blank:]] | caratteri vuoti | [[:blank:]]+: corrisponde a spazi e tab |
| [[:print:]] | Caratteri stampabili | [[:print:]]+: corrisponde ai caratteri stampabili, inclusi gli spazi |

Un esempio in un comando sed:

```bash
sed -E 's/[[:digit:]]+/NUMERO/' input.txt
```

Questo comando sostituisce qualsiasi sequenza di una o più cifre con la parola "NUMERO". Ad esempio:

- "Ho 25 anni" diventa "Ho NUMERO anni"

Nota: L'opzione `-E` in sed abilita l'uso di espressioni regolari estese, permettendo una sintassi più avanzata e flessibile per i pattern di ricerca e sostituzione.

### Back reference

Con alcuni comandi è comodo poter fare riferimento al testo *metchato*. questo si può fare con il carattere `&`.

es. aggiungere “world” dopo “hello”

```bash
sed "s/hello/& world/g" input.txt
```

In questo caso `&` assume il valore della stringa *metchata*, cioè “hello”.

È possibile anche riferirsi a dei blocchi racchiusi tra parentesi tonde:

Ad esempio, per scambiare l'ordine di due parole:

```bash
sed "s/\(hello\) \(world\)/\2 \1/" input.txt
```

Questo comando cerca il pattern "hello world" e lo sostituisce con "world hello". Le parentesi tonde creano due gruppi, e `\1` e `\2` si riferiscono rispettivamente al primo e al secondo gruppo.

Nota che i `\` sulle parentesi tonde sono necessari per evitare di considerare le parentesi come caratteri da metchare.

Ci sono delle sintassi particolari non standard, ma fornite da GNU:

- `c\{n\}` ripete `c` n volte
- `\L` converte in lowercase
- `\U` converte in uppercase
