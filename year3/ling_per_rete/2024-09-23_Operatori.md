# Operatori

Il modo più comune per creare delle espressioni complesse è tramite l’utilizzo di **operatori**, cioè dei simboli che, operano su dei valori e ne producono uno nuovo.

Gli operatori sono utilizzati per: espressioni aritmetiche, espressioni di confronto, espressioni logiche, espressioni di assegnamento, ecc…

Molti operatori sono rappresentati con simboli particolari (`+`, `=`, `>`, …), altri con delle *keyword* specifiche (`delete`, `instanceof`, …)

Analizziamo degli aspetti importanti che riguardano gli operatori.

## Numero di operandi

Gli operatori si possono categorizzare in base al numero di operandi su cui lavorano. La maggior parte degli operatori sono **operatori binari**, cioè che lavorano su due operandi. Ci sono anche **operatori unari** e un **operatore ternario**

## Tipi degli operandi

Alcuni operatori accettano un tipo di operandi qualsiasi, altri vogliono dei tipi particolari.

JavaScript tenta sempre di convertire un tipo sbagliato nel tipo che si aspetta.

Alcuni operatori però si comportano in modo differente in base al tipo degli operatori (ad esempio l’operatore `+` che può fare somma tra due numeri oppure la concatenazione tra stringhe)

## Precedenza degli operatori

Quando si concatenano più operatori, essi hanno una priorità di valutazione, ad esempio in espressioni aritmetiche la precedenza degli operatori e la classica precedenza matematica.

L’operatore di assegnamento tendenzialmente ha la priorità più bassa.

L’uso delle parentesi tonde può forzare la precedenza degli operatori.

**L’accesso a proprietà, l’accesso a elementi di array e le invocazioni di funzioni hanno un priorità più alta di tutti gli operatori.**

## Associatività

L’associatività descrive l’ordine di esecuzione con operatori di uguale priorità.

Possiamo avere una associatività *Left-to-right* oppure *Right-to-left.*

Ad esempio:

```jsx
w = x - y - z;    // Left-to-right: w = ((x - y) - z)
w = x && y && z;  // Left-to-right: w = ((x && y) && z)

w = a ** b ** c;  // Right-to-left: w = (a ** (b ** c))
w = x = y = z;    // Right-to-left: w = (x = (y = z));
```

## Tabella degli operatori

| Simbolo | Operazione | Associatività | Esempio |
| --- | --- | --- | --- |
| `+` | Addizione o concatenazione di stringhe | Left-to-right | `3 + 2 // 5`, `'a' + 'b' // 'ab'` |
| `-` | Sottrazione | Left-to-right | `3 - 2 // 1` |
| `*` | Moltiplicazione | Left-to-right | `3 * 2 // 6` |
| `/` | Divisione | Left-to-right | `6 / 2 // 3` |
| `%` | Modulo (resto della divisione) | Left-to-right | `5 % 2 // 1` |
| `**` | Esponenziale | Right-to-left | `2 ** 3 // 8` |
| `++` | Incremento | Right-to-left | `let a = 1; a++ // a = 2` |
| `--` | Decremento | Right-to-left | `let a = 2; a-- // a = 1` |
| `-` | Negazione unaria | Right-to-left | `-5 // -5` |
| `+` | Conversione in numero | Right-to-left | `+"5" // 5` |
| `!` | Negazione logica | Right-to-left | `!true // false` |
| `~` | Complemento a uno (NOT bit a bit) | Right-to-left | `~5 // -6` |
| `&&` | AND logico | Left-to-right | `true && false // false` |
| `||` | OR logico | Left-to-right | `true || false // true` |
| `??` | sceglie il primo operando definito | Left-to-right | `null ?? 'default' // 'default'` |
| `?:` | Operatore ternario (condizionale) | Right-to-left | `true ? 'yes' : 'no' // 'yes'` |
| `,` | Valuta ogni operando e restituisce il risultato dell'ultimo | Left-to-right | `let a = 1, 2; // a = 2` |
| `=` | Assegnazione | Right-to-left | `a = 5 // a = 5` |
| `+=` | Assegnazione con addizione | Right-to-left | `a += 5 // a = a + 5` |
| `-=` | Assegnazione con sottrazione | Right-to-left | `a -= 5 // a = a - 5` |
| `*=` | Assegnazione con moltiplicazione | Right-to-left | `a *= 5 // a = a * 5` |
| `/=` | Assegnazione con divisione | Right-to-left | `a /= 5 // a = a / 5` |
| `%=` | Assegnazione con modulo | Right-to-left | `a %= 5 // a = a % 5` |
| `**=` | Assegnazione con esponenziale | Right-to-left | `a **= 2 // a = a ** 2` |
| `==` | Uguaglianza debole (con conversione di tipo) | Left-to-right | `5 == '5' // true` |
| `===` | Uguaglianza stretta (senza conversione di tipo) | Left-to-right | `5 === '5' // false` |
| `!=` | Diversità debole | Left-to-right | `5 != '5' // false` |
| `!==` | Diversità stretta | Left-to-right | `5 !== '5' // true` |
| `>` | Maggiore di | Left-to-right | `5 > 3 // true` |
| `<` | Minore di | Left-to-right | `3 < 5 // true` |
| `>=` | Maggiore o uguale | Left-to-right | `5 >= 5 // true` |
| `<=` | Minore o uguale | Left-to-right | `5 <= 3 // false` |
| `&` | AND bit a bit | Left-to-right | `5 & 1 // 1` |
| `|` | OR bit a bit | Left-to-right | `5 | 1 // 5`  |
| `^` | XOR bit a bit | Left-to-right | `5 ^ 1 // 4` |
| `<<` | Shift a sinistra | Left-to-right | `5 << 1 // 10` |
| `>>` | Shift a destra | Left-to-right | `5 >> 1 // 2` |
| `>>>` | Shift a destra con estensione di zeri | Left-to-right | `-5 >>> 1 // 2147483645` |
| `in` | Verifica se una proprietà è in un oggetto, o se un indice è in un array | Left-to-right | `'length' in [] // true` |
| `instanceof` | Verifica se un oggetto è istanza di una funzione costruttore di una classe | Left-to-right | `[] instanceof Array // true` |
| `typeof` | Restituisce il tipo di una variabile | Right-to-left | `typeof 42 // 'number'` |
| `delete` | Elimina una proprietà da un oggetto o un elemento di un array (negli array viene lasciato un “buco”, non cambia la dimensione dell’array) | Right-to-left | `delete obj.key // true` |
