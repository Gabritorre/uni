# Sezione critica

La **sezione critica** è una parte del codice soggette a **race condition**, cioè parti in cui più thread accedono a variabili condivise tra loro.

Per evitare che i thread interferiscano tra di loro nella modifica delle variabili condivise dobbiamo sincronizzare i thread in modo la sezione critica sia eseguita in **mutua esclusione**: cioè un thread alla volta accede alla sezione critica.

**La mutua esclusione va garantita a prescindere dalla schedulazione dei thread**

Ottenere la mutua esclusione possiamo tentare 2 diversi approcci:

- Soluzioni software
- Soluzioni hardware (chiamate a sistema)

## Soluzioni software

Vediamo dei tentativi di soluzioni software.
Consideriamo per semplicità la concorrenza con solamente 2 thread.
Nelle implementazioni reali solitamente non si usano implementazioni software.

## Tentativo 1: Lock

Utilizziamo una variabile booleana globale chiamata `lock`. Tale variabile indica, quando è `true` che la sezione critica è occupata da un thread, mentre quando è `false`indica che la sezione critica è libera.


```c
global bool lock;
thread T {
  ....
  while(lock) {}	// se il lock è true attende
  lock = true;
  < sezione critica >
  lock = false;
  ....
}
```

**Problema**: può accadere che i due thread riescano a superare entrambi il ciclo while, questo perché il primo thread che entra non fa in tempo a settare `lock = true`.
Per questo motivo la mutua esclusione non è garantita

## Tentativo 2: Turno

Utilizziamo una variabile booleana globale chiamata `turno` inizializzata a `true`. Questa variabile indica quale thread può accedere alla sezione critica

```c
global turno = 0

thread T0 {                        thread T1 { 
  ....                                ....  
  while(turno != 0) {}                while(turno != 1) {}    
  < sezione critica >                 < sezione critica >   
  turno = 1;                          turno = 0; 
  ....                                ....  
}                                   }
```

Quinti il thread `T0` entra solo quando la variabile turno è `0` mentre `T1` entra solo quando turno è `1`

La **mutua esclusione** è garantita in quanto la variabile turno non può valere `0` e `1` contemporaneamente.

**Problema**: immaginiamo che il thread `T0` voglia entrare molto spesso in sezione critica mentre il thread `T1` ci accede raramente.
Otteniamo che il thread `T0` si troverà spesso ad aspettare il turno di `T1` anche se la sezione critica è effettivamente libera (perché `T1` sta facendo altro)

Dobbiamo quindi garantire una proprietà chiamata **progresso**: se la sezione critica è libera e un thread vuole entrarci allora ci deve accedere subito.


## Tentativo 3: Pronto

Utilizziamo un array booleano globale con valori inizializzati a `false`, come nel tentivo precedente anche in questo caso gli elementi dell'array indica che il thread i-esimo può accedere alla sezione critica

```c
global boolean pronto[2] = false

thread T0 {                        thread T1 { 
  ....                                ....  
  pronto[0] = true;                   pronto[1] = true;
  while(pronto[1]) {}                 while(pronto[0]) {}    
  < sezione critica >                 < sezione critica >   
  pronto[0] = false;                  pronto[1] = false;
  ....                                ....  
}                                   }
```

Analizziamo per esempio il thread `T0`:
- Con l'istruzione `pronto[0] = true` avvisa gli altri thread che lui vuole entrare nella sezione critica.
- `while(pronto[1]) {}`: finche c'è un altro thread che è già pronto allora attendo che finisca.
- se l'altro thread non vuole accedere alla sezione critica allora ci entra il nostro thread e quando ha finito imposta `pronto[0] = false`

La **mutua esclusione** è garantita in quanto se un thread è in sezione critica la sua variabile è impostata a true e l'altro thread rimarrà fermo al while

**Problema**: potrebbe capitare che entrambi impostino simultaneamente il proprio valore nell'array a true, se ciò accadesse rimarrebbero bloccati entrambi i thread nel while (si attendono a vicenda ma in realtà nessuno dei due è riuscito ad entrare in sezione critica)


## Algoritmo di Peterson

Una soluzione funzionante è un algoritmo chiamato **algoritmo di Peterson** che è una combinazione dei due precedenti tentativi (turno e pronto)

il tentativo con pronto è quasi buono se non fosse per lo stallo, ma integrando il tentativo con turno lo possiamo evitare: effettuiamo una turnazione solamente quando siamo nel caso problematico (entrambi i thread sono pronti). Mentre se un solo thread è pronto allora può procedere tranquillamente.

```c
global bool lock;
global boolean pronto[2] = false

thread T0 {                              thread T1 { 
  ....                                      ....  
  pronto[0] = true;                         pronto[1] = true;
  turno=1;                                  turno=0;
  while(pronto[1] && turno != 0) {}         while(pronto[0] && turno != 1) {}    
  < sezione critica >                       < sezione critica >   
  pronto[0] = false;                        pronto[1] = false;
  ....                                      ....  
}                                         }
```

Analizziamo per esempio il thread `T0`:
- Con l'istruzione `pronto[0] = true` avvisa gli altri thread che lui vuole entrare nella sezione critica.
- `turno = 1` indica che il thread `T0` lascia il turno all'altro thread
- `while(pronto[1] && turno != 0) {}`: rimango in attesa se l'altro thread è pronto **e** se il turno non è mio
- se tale condizione non vale allora entro nella sezione 

La mutua esclusione è garantita in quanto se un thread riesce ad entrare nella sezione critica allora il suo valore nell'array è `true` e il turno sarà del thread che è in sezione critica (altrimenti non avrebbe superato il while).
La varibile `turno` ci garantisce che in caso di entrambi i thread pronti solamente uno dei due possa entrare in quanto non può valere `0` e `1` contemporaneamente


Nota che se la sezione critica è libera allora il thread che ci vuole accedere può entrare immediatamente in quanto la prima condizione del while risulterà falsa e quindi la seconda condizione viene direttamente ignorata


## Conclusione soluzione software

In generale seppur fattibili le soluzioni software presentano dei problemi:

1. i cicli a vuoto consumano tempo di CPU
2. Sono richieste variabili globali ed è necessaria una precisa sequenza di istruzioni.
	I moderni compilatori spesso riordinano le istruzioni per ottimizzare le prestazioni, ma non tengono conto della possibile esecuzione parallela del codice, una riordinazione potrebbe portare e non sincronizzare più i thread correttamente.
	Tali ottimizzazioni fatte dal compilatore andrebbero quindi disattivate per mantenere la correttezza, perdendo però delle possibili performance in più.

## Soluzioni hardware

Esistono delle istruzioni speciali implementate in linguaggio macchina in modo che sia garantita la mutua esclusione su un pezzo di codice.

Un esempio potrebbe essere l'istruzione **test_and_set**, che permette di testare un valore ed assegnarlo tramite una sequenza di istruzioni indivisibili. 
Possiamo immaginare che sia implementata in un modo del genere:

```c
boolean test_and_set(boolean *x) {
    boolean ret = *x;
    *x = true;
    return ret;
}
```

Pone a true la variabile `x` (che viene passata per indirizzo) e poi ritorna il suo vecchio valore.

potremmo usare questa istruzione per implementare il nostro primo tentativo con `lock` nella soluzione software:

```c
global boolean lock;
thread T {
  ....
  while(test_and_set(&lock)) {}
  < sezione critica >
  lock = false;
  ....
}
```

Se `lock` è `false` viene ritornato dalla funzione `false` ma viene comunque settato `lock` a `true`, il thread riesce quindi a superare il ciclo ed entra in sezione critica.
Se `lock` è `true` viene ritornato dalla funzione `true` e il valore di `lock` rimane `true`, il thread rimane quindi in attesa nel ciclo while.

Questa soluzione prende il nome di **spin-lock**
