# Secure coding

Linguaggi di programmazione come C sono ritenuti ***unsafe*** e richiedono che ci sia una grossa attenzione da parte degli sviluppatori per scrivere codice sicuro. Nonostante questo, tutti i linguaggi presentano comportamenti insicuri.

## Analisi

Sebbene l'ispezione manuale del codice sia possibile per programmi di piccole dimensioni, gli **strumenti di analisi statica** sono necessari per applicazioni del mondo reale. Tuttavia, le proprietà che dipendono dal flusso di controllo sono generalmente indecidibili, quindi gli strumenti di analisi statica non possono essere precisi al 100%.

Durante una analisi si possono presentare:

- **falsi negativi**: non vengono segnalati errori effettivamente presenti nel codice.
- **falsi positivi**: vengono segnalati errori che in realtà non esistono.

Generalmente si desidera un'analisi **sana** (nessun falso negativo) e **completa** (nessun falso positivo), ma nella pratica gli strumenti danno più priorità ad essere **sani** cercando di minimizzare i falsi positivi.

## Taint analysis

Un concetto chiave nella sicurezza del codice è **l'analisi della contaminazione (*taint analysis*)**, che determina quali valori provenienti dagli input del programma possono influenzare i valori utilizzati in un'operazione rischiosa.

- **La sorgente contaminata** (*Tainted Source*): Si riferisce a qualsiasi fonte di dati esterni al programma che potrebbe essere controllata da un utente malintenzionato.
- **Il valore contaminato** (*Tainted Value*): Un valore è considerato contaminato se deriva da una sorgente contaminata e non è stato opportunamente sanificato.
- ***Restricted Sink*:** Si riferisce a un argomento di una funzione che richiede un insieme specifico di valori accettabili. Utilizzare un valore contaminato in un restricted sink può portare a vulnerabilità di sicurezza.

### Propagazione

Una contaminazione si può propagare attraverso le operazioni del programma.

Se un'operazione utilizza un dato contaminato, il risultato dell'operazione sarà a sua volta contaminato. Un banale esempio è copiare una stringa contaminata in un'altra stringa tramite funzioni come `strcpy`.

Esempio di propagazione:

![https://i.ibb.co/S3CwCyc/image.png](https://i.ibb.co/S3CwCyc/image.png)

## Sanitizzazione

La sanitizzazione è il processo per **rimuovere la contaminazione** da un valore.

Esistono due approcci principali:

- **Sostituzione:** I valori contaminati (fuori dal dominio del *sink*) vengono sostituiti con valori appartenenti al dominio *sink*.
- **Terminazione:** Il programma rileva un valore contaminato e termina l'esecuzione o salta il codice che utilizza quel valore.

## Secure Coding: SEI CERT

Il [SEI CERT C Coding Standard](https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard) fornisce regole e raccomandazioni per la scrittura di codice C sicuro.

Esso definisce:

- **Regole**: Requisiti normativi la cui violazione indica un bug potenzialmente sfruttabile.
- **Raccomandazioni**: Suggerimenti per migliorare sicurezza, affidabilità e robustezza del codice.

### Valutazione del Rischio

La valutazione del rischio aiuta a dare priorità alle correzioni delle violazioni delle regole e raccomandazioni. 

Si valuta la **gravità** delle conseguenze, la **probabilità** di sfruttamento e il **costo** della correzione. Le violazioni **più critiche e meno costose** hanno **più priorità**.

**Livelli di gravità**:

1. Bassa: ad esempio Denial of Service, terminazione anomala.
2. Media: ad esempio Violazione dell'integrità dei dati, divulgazione di informazioni.
3. Alta: ad esempio esecuzione di codice arbitrario.

**Livelli di probabilità**:

1. Improbabile
2. Probabile
3. Verosimile

**Livelli di costo di correzione**:

1. Alto: Correzione manuale e rilevamento manuale.
2. Medio: Correzione manuale e rilevamento automatico.
3. Basso: Correzione automatica e rilevamento automatico.

I valori di questi livelli vengono moltiplicati tra loro producendo i possibili valori di **priorità**:  `1, 2, 3, 4, 6, 8, 9, 12, 18, 27`

| Livello | Priorità | Interpretazione |
| --- | --- | --- |
| L1 | 12, 18, 27 | alta gravità, alta probabilità, basso costo di correzione |
| L2 | 6, 8, 9 | media gravità, probabilità media, costo medio |
| L3 | 1, 2, 3, 4 | bassa gravità, bassa probabilità, alto costo |

### Esempio

Una **regola** che ci da [SEI CERT C Coding Standard](https://wiki.sei.cmu.edu/confluence/display/c/SEI+CERT+C+Coding+Standard) è quella di **non passare una sequenza di caratteri non terminata da NULL a una funzione di libreria che si aspetta una stringa.**

```c
#include <stdio.h>
int main() {
	 char c_str[3] = "abc";
	 printf("%s\n", c_str );
}
```

Nel codice l’array `c_str` non ha abbastanza spazio per inserire il carattere di terminazione stringa.

Per fixare questo problema possiamo seguire una **raccomandazione**: non specificare la grandezza dell’array di caratteri quando viene inizializzato con un letterale.

```c
#include <stdio.h>
int main() {
	 char c_str[] = "abc";
	 printf("%s\n", c_str);
}
```

In questo modo `c_str` si alloca in automatico lo spazio necessario per contenere il letterale e il carattere di terminazione.

Un attaccante può sfruttare questa vulnerabilità per accedere alla memoria fuori dai limiti dell’array (buffer overflow), la community categorizza questa regola in questo modo

| Gravità | Probabilità | costo di correzione | Priorità | Livello |
| --- | --- | --- | --- | --- |
| Alta | Probabile | medio | 12 | L1 |
