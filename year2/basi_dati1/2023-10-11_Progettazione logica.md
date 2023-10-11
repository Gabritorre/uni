# Progettazione logica

Dopo aver realizzato il modello ad oggetti, si passa alla progettazione logica.

Nella progettazione logica andremo principalmente a rappresentare **relazioni** e **ennuple**.

le relazioni sono essenzialmente le tabelle (o le entità) mentre le ennuple sono la lista degli attributi con il relativo tipo di dato.

Andremo a scrivere le relazioni come:

`nome_tabella(attributo_1 : tipo_di_dato, attributo_2 : tipo_di_dato, ...)`

il numero di attributi della tabella è detto **grado** della relazione
con **cardinalità** intendiamo quante righe ha una tabella.


Ad esempio, nella seguente tabella "Studenti":

| Nome | Cognome | Matricola | Anno |
|--|--|--|--|
| Paolo | Vieri |13425| 1998 |
| Gina| Conti |11235| 2000 |
| Pierino | Giusti |15847| 1997 |

lo schema logico per questa singola tabella è:

`Studenti(Nome:String, Cognome:String, Matricola:int, Anno:Date)`

Il grado di questa tabella è 4
mentre la cardinalità è 3


## Vincoli

Il modello logico deve considerare dei vincoli sugli attributi:
- not null
- primary key
- foreign key

una istanza (una riga) che non rispetta i vincoli non può essere inserita nel DB.

### Primary key

La primary key serve ad identificare univocamente ogni riga di una tabella. Non è che un attributo (colonna) che deve essere diverso per ogni riga, spesso è una matricola oppure un id. È necessario che ogni tabella del database abbia una primary key (PK).

Esiste anche il vincolo **unique** che posso assegnare ad altre colonne, esso genera lo stesso risultato della primary key, però la primary ha la particolarità di essere fondamentale in fase di associare più tabelle, in più la primary key non può essere null.

### Foreign key

la foreign key è una colonna in cui i valori sono le chiavi primarie di un'altra tabella, serve a dire che una riga è collegata ad una determinata riga di un'altra tabella (quella dove primary key di una e foreign key dell'altra combaciano).
La presenza di queste foreign key garantiscono la proprietà di integrità dei dati del database, chiamata **integrità referenziale** 


Vediamo un esempio:

Tabella Studenti:
| Nome | Cognome | Matricola | Anno |
|--|--|--|--|
| Paolo | Vieri |13425| 1998 |
| Gina| Conti |11235| 2000 |
| Pierino | Giusti |15847| 1997 |

Tabella Esami:
| Codice | Materia | Candidato | Data | Voto | Lode |
|--|--|--|--|--|--|
| B112| BD1|11235| 08-07-06|27|0|
| F31| FIS1|13425| 06-10-02|25|0|
| B247| BD2 |15847| 08-02-03 |30|1|

`Studenti(Nome:String, Cognome:String, Matricola:int, Anno:Date)`
`Esami(Codice:String, Materia:String, Candidato:int, Data:Date, voto: int, Lode: boolean)`

In questo esempio le due tabelle hanno un'associazione che le lega.
l'attributo "matricola" nella tabella studenti è primary key

mentre l'attributo "candidato" sulla tabella Esami è una foreign key che si riferisce alle matricole della tabella studenti.
Inoltre "codice" nella tabella Esami è primary key della tabella.

Questo design però ci costringe ad avere un solo candidato per esame. In questo caso Andrebbe creata un'altra tabella ma lo vedremo dopo.

### not null

il valore null viene usato quando o non si conosce il valore oppure un valore dato non è applicabile.

Il vincono not null ci impedisce di mettere null in un'attributo.

Le chiavi primarie implicitamente non possono essere null.
Mentre una foreign key può essere null nel caso ci sia un'associazione parziale tra le tabelle.


