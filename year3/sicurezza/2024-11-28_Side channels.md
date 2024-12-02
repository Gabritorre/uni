# Side channels

È comune che i software abbiano dei **side effect**, cioè degli effetti osservabili che riflettono lo stato interno del programma. Se i side effect dipendono da un valore segreto si ha un **leak parziale**, se tale leak è sufficiente per scoprire il segreto allora abbiamo un attacco.

Un esempio può essere il controllo di una password: ad ogni tentativo l’attaccante scopre che una determinata password è sbagliata. Questo è un leak parziale, infatti l’attaccante può tentare un attacco **brute force**. Per difendersi si può limitare il numero di tentativi.

## Side channels

I **side channels** (o **canali laterali**) nella sicurezza informatica sono metodi per estrarre informazioni sensibili da un sistema, sfruttando i side effect e caratteristiche fisiche anziché attacchi diretti sui dati o sugli algoritmi.

### Esempi di side channels:

- **Attacco alla cache (*Cache attack*)**: un attacco in cui l’attaccante monitora gli accessi alla memoria cache in un sistema che utilizza risorse condivise, come in un ambiente virtualizzato o in certi servizi in cloud
- **Attacco a cronometro (*Timing attack*)**: un attacco che si basa sulla misura dei tempi di esecuzione di certi calcoli, ad esempio il confronto dei tempi di criptazione della password ignota con i tempi di criptazione di password note
- **Attacco di monitoraggio dei consumi (*Power-monitoring attack*)**: attacchi che analizzano il consumo di energia del sistema da violare, per capirne le caratteristiche
- **Attacco elettromagnetico (*Electromagnetic attack*)**: attacchi basati sul rilevamento dell'energia elettromagnetica irraggiata, che possono rivelare direttamente dati e altre informazioni
- **Analisi differenziale dei malfunzionamenti (*Differential fault analysis*)**: si deducono informazioni sul sistema analizzando malfunzionamenti provocati appositamente

Ad esempio in un login quando username o password sono errati è raccomandato restituire un generico “credenziali errate” al posto di specificare quale dei due è errato (in quanto potrebbe aiutare un attaccante).

Un altro esempio è di utilizzare codice ***time-safe***: il controllo di una password è più lento di un controllo di un username (a causa dell’hashing per esempio), questo può essere notato da un attaccante e dedurre quale delle due credenziali è errata. Funzioni time-safe impiegano lo stesso tempo indipendentemente dai dati su cui operano.

## Blind SQL injection

La **Blind SQL injection** è una tecnica di attacco che sfrutta i side channel per ottenere informazioni da un database.

Si utilizza solitamente quando il risultato di una query non viene visualizzato direttamente sulla pagina web, ma l'applicazione fornisce comunque un feedback osservabile che dipende dallo stato interno del database, come un messaggio particolare, un errore, una pagina rotta, una pagina vuota, ...

Possiamo pensare quindi di ottenere una risposta boolena, e iterando questa tecnica si riesce ad leakare dati sensibili.

### Funzionamento generale

1. **Iniezione della query**: l'attaccante inietta codice SQL malevolo nell'input di un'applicazione web.
2. **Osservazione del side channel**: l'attaccante osserva il comportamento dell'applicazione, cercando differenze nel tempo di risposta, nei messaggi di errore, o altri comportamenti che possono rivelare informazioni sul database.
3. **Deduzione dei dati**: l'attaccante deduce i dati del database in base al feedback ottenuto. Questo processo può essere iterato per ottenere gradualmente le informazioni desiderate.

### **Esempio:**

Supponiamo un servizio di recupero password che invia un'email con una nuova password agli utenti registrati nel sistema.

Se l'utente esiste, l'email viene inviata, altrimenti viene visualizzato un messaggio di errore.

Questo scenario può essere vulnerabile ad una blind SQL injection se l'attaccante può manipolare la query che controlla l'esistenza dell'utente nel database.

Supponiamo che la query per controllare l’esistenza dell’utente sia del tipo:

`SELECT 1 FROM ... WHERE ... email='EMAIL’`

dove `EMAIL` è un input utente.

- L'attaccante può modificare il comportamento della query, ad esempio aggiungendo una condizione che è sempre vera (come `'OR 1 #`).
- Se l'applicazione invia comunque l'email (non viene restituito un errore), significa che il database è vulnerabile a SQL injection.
- A questo punto l’attaccante fa una injection e compone una query di questo tipo con lo scopo di ottenere il nome delle tabelle dal database andando a tentativi:
    
    ```sql
     SELECT 1
     FROM people
     WHERE mail='' OR (SELECT 1 FROM users LIMIT 1)=1 LIMIT 1;
    ```
    
    In questo modo se viene inviata la mail di recupero scopriamo che la tabella `users` esiste, altrimenti possiamo pensare che la tabella non esista.
    
- L’attaccante può adesso può controllare l’esistenza di una particolare colonna, tramite la funzione SQL `MID`. Tale funzione prende tre parametri `MID(string, start_pos, len)` e restituisce una sottostringa di `string` di lunghezza `len` partendo dalla posizione `start_pos` (nota che gli indici in SQL partono da 1).
    
    Verrà composta la seguente query per controllare l’esistenza della colonna `password`:
    
    ```sql
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT MID(password,1,0) FROM people LIMIT 1)='' #
    ```
    
    se password non esiste la query darà errore, altrimenti darà successo in quanto stiamo prendendo una sottostringa di lunghezza zero uguale quindi a `''`.
    
- A questo punto l'attaccante può fare la query carattere per carattere fino a scoprire la password completa.
    
    Si può fare una ricerca binaria per ridurre il numero di tentativi:
    
    la funzione `ORD` restituisce il codice ASCII del caratteri più a sinistra della stringa che prende in input
    
    ```sql
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('m') #
    					 > FALSE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('t') #
    					 > FALSE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('w') #
    					 > FALSE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('y') #
    					 > TRUE
    SELECT 1
    FROM people
    WHERE mail=' ' OR (SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('x') #
    					 > TRUE
    ```
    
    ![https://i.ibb.co/X2yDcTk/image.png](https://i.ibb.co/X2yDcTk/image.png)
    

## Totally blind SQL injection

Anche in caso in cui la web application non mostra errori, messaggi particolari, o altri feedback visibili che possono portare a leak parziali, è comunque possibile per l’attaccante sfruttare il **tempo** per fare SQL injection, pratica chiamata *Totally Blind SQL Injection.*

Sempre nella situazione precedente l’attaccante può fare una cosa del tipo:

```sql
SELECT 1
FROM people
WHERE mail='' OR (SELECT
		IF((SELECT ORD(MID(password,1,1)) FROM people LIMIT 0,1)<=ORD('m'), 
       SLEEP(1),
       NULL)
   ) #
```

la sintassi dell’`IF` è la seguente `IF(*condition*, *value_if_true*, *value_if_false*)`.

Cioè quando la query ha successo viene fatto uno sleep di un secondo che può essere notato dall’attaccante per capire il successo o meno della query.
