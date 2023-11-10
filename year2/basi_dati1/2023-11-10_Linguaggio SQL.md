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
[WHERE <condizioni>]
```

esempi

```sql
SELECT Nome, Cognome, Matricola
FROM Studenti
```

la clausola **where** serve per applicare una restrizione ai dati

```sql
SELECT *
FROM Esami
WHERE Voto > 26
```
(l'asterico significa seleziona tutti i campi delle tabelle)

possiamo utilizzare la keyword **DISTINCT** per rimuovere i duplicati dalle righe

```sql
SELECT DISTINCT Provincia
FROM Studenti
```

## Giunzione

è possibile combinare tutte le righe di due tabelle (prodotto cartesiano) semplicemente facendo:

```sql
SELECT *
FROM Studenti, Esami
```

La giunzione si fa nel seguente modo:

```sql
SELECT *
FROM Studenti JOIN Esami ON Matricola = Candidato
```

## Notazione con il punto

Quando si lavora con più di una tabella spesso è conveniente (in altri casi è necessario) specificare la tabella da cui si riferisce l'attributo.
Per fare ciò utilizziamo la seguente sintassi

`Tabella.Attributo`

Es. generare una tabella che riporti Codice, Nome, Cognome dei docenti e Codice degli esami corrispondenti 

```sql
SELECT Docenti.CodDoc, Docenti.Nome, Docenti.Cognome, Esami.Codice
FROM Esami JOIN Docenti ON Docenti.CodDoc = Esami.CodDoc
```

In quel esempio sia `Docenti` che `Esami` hanno una colonna chiamata `CodDoc` quindi è necessario specificare la tabella a cui si riferisce.

## Alias

Possiamo attribuire degli alias alle tabelle della clausola `FROM` questo torna particolarmente utile per migliorare la leggibilità delle query, quando però si lavora con tabelle ricorsive è necessario utilizzare gli alias.

Es. generare una tabella che contenga cognomi e matricole degli studenti e dei loro tutor

```sql
SELECT s.Cognome, s.Matricola, t.Cognome, t.Matricola
FROM Studenti s JOIN Studenti t ON s.Tutor = t.Matricola
```


## Ridenominazione

possiamo ridenominare le nostre colonne nella clausola `SELECT`, questo torna utile per rendere la tabella di output più chiara.
Viene utilizzata la *keyword* **AS** e può essere usato per rinominare un attributo, un attributo calcolato oppure una funzione

```sql
SELECT Nome, Cognome, date_part(‘year’, current_date) - Nascita AS Età
FROM Studenti
WHERE Provincia=’VE’
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
