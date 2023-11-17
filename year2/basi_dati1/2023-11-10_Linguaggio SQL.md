# Linguaggio SQL

SQL (*Structured Query Language*) è un linguaggio dichiarativo che serve per interrogare una base di dati. È suddiviso in due parti principali:

-   **DML (Data Manipulation Language)**: Per leggere, inserire, modificare e cancellare dei dati (**SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**).
-   **DDL (Data Definition Language)**: Per la definizione della struttura dei dati, delle regole di integrità e dei privilegi degli utenti (**CREATE**,  **ALTER**,  **DROP**).


## DML

Generalmente in questa categoria andiamo a fare delle operazioni su delle tabelle in input e in output viene restituita una tabella.

Le query si baseranno sul seguente esempio

![enter image description here](https://i.ibb.co/92qdhR2/image.png)

## Select

Il comando **select** serve per selezionare degli attributi da delle tabelle.
La struttura generale è la seguente:

```sql
SELECT <attributi>
FROM <tabelle>
[WHERE <condizioni>];
```

esempi

```sql
SELECT Nome, Cognome, Matricola
FROM Studenti;
```

la clausola **where** serve per applicare una restrizione ai dati

```sql
SELECT *
FROM Esami
WHERE Voto > 26;
```
(l'asterico significa seleziona tutti i campi delle tabelle)

possiamo utilizzare la keyword **DISTINCT** per rimuovere i duplicati dalle righe

```sql
SELECT DISTINCT Provincia
FROM Studenti;
```

## Giunzione

Vediamo i vari modi di fare giunzioni tra tabelle in SQL:

### Prodotto cartesiano

è possibile combinare tutte le righe di due tabelle (prodotto cartesiano) semplicemente facendo:

```sql
SELECT *
FROM Studenti, Esami;
```
oppure più esplicitamente

```sql
SELECT *
FROM Studenti CROSS JOIN Esami;
```

### Giunzione classica
realizzata con il comando `INNER JOIN` o più semplicemente `JOIN` si fa nel seguente modo:

```sql
SELECT *
FROM Studenti JOIN Esami ON Matricola = Candidato;
```

### Natural join

La join naturale si va nel seguente modo

```sql
SELECT *
FROM Studenti NATURAL JOIN Esami;
```

È possibile specificare le colonne su cui effettuare la natural join utilizzando la keyword `USING()` specificando al suo interno le colonne

### left, right e full outer join

left join:

```sql
SELECT *
FROM Studenti LEFT JOIN Esami;
```

right join:

```sql
SELECT *
FROM Studenti RIGHT JOIN Esami;
```

full outer join:

```sql
SELECT *
FROM Studenti FULL OUTER JOIN Esami;
```


## Notazione con il punto

Quando si lavora con più di una tabella spesso è conveniente (in altri casi è necessario) specificare la tabella da cui si riferisce l'attributo.
Per fare ciò utilizziamo la seguente sintassi

`Tabella.Attributo`

Es. generare una tabella che riporti Codice, Nome, Cognome dei docenti e Codice degli esami corrispondenti 

```sql
SELECT Docenti.CodDoc, Docenti.Nome, Docenti.Cognome, Esami.Codice
FROM Esami JOIN Docenti ON Docenti.CodDoc = Esami.CodDoc;
```

In quel esempio sia `Docenti` che `Esami` hanno una colonna chiamata `CodDoc` quindi è necessario specificare la tabella a cui si riferisce.

## Alias

Possiamo attribuire degli alias alle tabelle della clausola `FROM` questo torna particolarmente utile per migliorare la leggibilità delle query, quando però si lavora con tabelle ricorsive è necessario utilizzare gli alias.

Es. generare una tabella che contenga cognomi e matricole degli studenti e dei loro tutor

```sql
SELECT s.Cognome, s.Matricola, t.Cognome, t.Matricola
FROM Studenti s JOIN Studenti t ON s.Tutor = t.Matricola;
```


## Ridenominazione

possiamo ridenominare le nostre colonne nella clausola `SELECT`, questo torna utile per rendere la tabella di output più chiara.
Viene utilizzata la *keyword* **AS** e può essere usato per rinominare un attributo, un attributo calcolato oppure una funzione

```sql
SELECT Nome, Cognome, date_part(‘year’, current_date) - Nascita AS Età
FROM Studenti
WHERE Provincia=’VE’;
```
come si vede abbiamo un campo calcolato `date_part(‘year’, current_date) - Nascita` che possiamo chiamare semplicemente `Età`

## Funzioni di aggregazione

Le funzioni di aggregazione prendono in input tutte le righe di una o più colonne e restituiscono una riga oppure nessuna. Alcuni esempi di queste funzioni sono:

- **COUNT()**: conta il numero di righe che non sono `NULL` (se tutte le righe sono `NULL` allora ritorna zero)
- **SUM()**: somma i valori numerici delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)
- **AVG()**: media dei valori numerici delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)
- **MIN()**: restituisce il minimo valore numerico delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)
- **MAX()**: restituisce il massimo valore numerico delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)

queste funzioni possono solo essere utilizzate nel `SELECT` oppure nel `HAVING` ma **non** nel `WHERE`


## Order by

Tramite il comando `ORDER BY` è possibile ordinare i risultati di una query seguendo un ordine lessicografico.
l'ordinamento crescente si indica con `ASC`, ed è impostato di default
mentre l'ordinamento decrescente si indica con `DESC`

```sql
SELECT Nome, Cognome
FROM Studenti
WHERE Provincia = 'Ve'
ORDER BY Cognome DESC, Nome DESC;
```
In questa query le righe vengono prima ordinate per cognome in ordine decrescente, e nel caso di righe con cognomi uguali si ordina per nome in ordine decrescente.


## Operatori insiemistici

SQL permette di fare le basilari operazioni tra gli insiemi: unione, intersezione e differenza.
Nota che è fondamentale che le colonne abbiano lo stesso nome e tipo per poter funzionare.

### Unione

Es. Nome, cognome e matricola degli studenti di Venezia e di quelli che hanno preso più di 28 in qualche esame

```sql
SELECT Nome, Cognome, Matricola
FROM Studenti
WHERE Provincia = 'Ve'
UNION
SELECT Nome, Cognome, Matricola
FROM Studenti JOIN Esami ON Matricola = candidato
WHERE Voto > 28;
```

### Differenza

Es. Le matricole degli studenti che non sono tutor

```sql
SELECT Matricola
FROM Studenti
Except
SELECT Tutor AS Matricola
FROM Studenti;
```

### Intersezione

Es. Nome e cognome degli studenti che hanno preso in un esame 18 e in un altro esame 30

Nota che è importante aggiungere anche la matricola in questo caso per identificare le righe (anche se non è esplicitamente richiesto dalla consegna)

```sql
SELECT Nome, Cognome, Matricola
FROM Studenti JOIN Esami ON Matricola = Candidato
WHERE Voto = 18
INTERSECT
SELECT Nome, Cognome, Matricola
FROM Studenti JOIN Esami ON Matricola = Candidato
WHERE Voto = 30;
```

## Il valore NULL

Il valore NULL si utilizza quando non si hanno informazioni a sufficienza per determinare il valore della colonna.

È importante **non utilizzare l'uguale per comparare un valore con NULL**

NULL introduce un altro valore logico oltre a `true` e `false`, che è `unknown`

`NULL = 0` restituisce `unknown`

Vediamo le tabelle di verità con il valore unknown:

Negazione:
| p | $\lnot$p |
|--|--|
| U | U |

operazioni di AND e OR
| p | q | p $\land$ q | p $\lor$ q | 
|:--:|:--:|:--:|:--:|
| T | U | U | T |
| F | U | F | U |
| U | U | U | U |

Nei costrutti `WHERE` bisogna usare `IS` oppure `IS NOT` per il confronto con valori NULL

```sql
SELECT *
FROM Studenti
WHERE Tutor IS NULL;
```

È possibile utilizzare `expr IS [NOT] DISTINCT FROM expr` per paragonare due espressioni considerando anche NULL:
Infatti ritorna vero se entrambi i valori sono diversi, oppure quando uno dei due è NULL
mentre è falso se i due valori sono uguali oppure quando entrambi sono NULL

è possibile anche utilizzare la funzione `COALESCE(expr1, expr2)` per attribuire un valore personalizzato al posto di NULL: la prima espressione della funzione dovrebbe essere il valore della riga che ci interessa, se quel valore dovesse essere NULL, verrà utilizzato il prossimo valore non null specificato come parametro.


## Between

possiamo utilizzare la clausola `Between` per verificare che un valore sia in un determinato range

```sql
SELECT *
FROM Studenti
WHERE Matricola BETWEEN 71000 AND 72000;
```

## Like


Questa clausola è molto utile per verificare se una stringa segue un determinato pattern

utilizziamo:
- "%" per indicare una sequenza di 0 o più caratteri
- "_" per un singolo carattere


Es. Studenti con il nome di almeno due caratteri che inizia per A

```sql
SELECT *
FROM Studenti
WHERE Nome LIKE 'A_%'
```

