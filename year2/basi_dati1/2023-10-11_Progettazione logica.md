# Progettazione logica

Dopo aver realizzato il modello ad oggetti, si passa alla progettazione logica.

Nella progettazione logica andremo principalmente a rappresentare **relazioni** e **ennuple**.

Le **relazioni** sono essenzialmente le tabelle (o le entità) mentre le **ennuple** sono la lista degli attributi con il relativo tipo di dato.

Andremo a scrivere relazioni e ennuple come:

`nome_tabella(attributo_1 : tipo_di_dato, attributo_2 : tipo_di_dato, ...)`

Il numero di attributi della tabella è detto **grado** della relazione
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

La *primary key* (PK) serve ad identificare univocamente ogni riga di una tabella. Non è altro che un attributo (colonna) che deve essere diverso per ogni riga (spesso è una matricola oppure un id). È necessario che ogni tabella del database abbia una *primary key*.

Esiste anche il vincolo **unique** che posso assegnare ad altre colonne, esso genera lo stesso risultato della *primary key*, la differenza sta nel fatto che *primary key* **non può essere null** e ha una particolare funzione in fase di associazione di tabelle.

### Foreign key

La *foreign key* è una colonna in cui i valori sono le chiavi primarie di un'altra tabella, serve a dire che una riga è collegata ad una determinata riga di un'altra tabella (quindi la *primary key* di una tabella combacia con la *foreign key* dell'altra).
La presenza di queste *foreign key* garantiscono la proprietà di integrità dei dati del database, chiamata **integrità referenziale** 

Vediamo un esempio:

Tabella STUDENTI:
| Nome | Cognome | Matricola (PK) | Anno |
|--|--|--|--|
| Paolo | Vieri |13425| 1998 |
| Gina| Conti |11235| 2000 |
| Pierino | Giusti |15847| 1997 |

Tabella ESAMI:
| Codice (PK) | Materia | Candidato* | Data | Voto | Lode |
|--|--|--|--|--|--|
| B112| BD1|11235| 08-07-06|27|0|
| F31| FIS1|13425| 06-10-02|25|0|
| B247| BD2 |15847| 08-02-03 |30|1|

`Studenti(Nome:String, Cognome:String, Matricola:int, Anno:Date)`
`Esami(Codice:String, Materia:String, Candidato:int, Data:Date, voto: int, Lode: boolean)`

In questo esempio le due tabelle hanno un'associazione che le lega.
L'attributo "Matricola" nella tabella STUDENTI è *primary key*.
L'attributo "Codice" nella tabella ESAMI è *primary key*.

Mentre l'attributo "Candidato" sulla tabella ESAMI è una *foreign key* che si riferisce all'attributo Matricola della tabella STUDENTI.

Questo design, però, ci costringe ad avere un solo candidato per esame (normalmente un esame viene sostenuto da più candidati). Per migliorare la relazione andrebbe creata un'altra tabella ma lo vedremo dopo.

### not null

il valore *null* viene usato quando non si conosce il valore dell'attributo oppure un valore dato non è applicabile.

Il vincono *not null* ci impedisce di mettere *null* in un'attributo.

Le chiavi primarie implicitamente non possono essere *null*.
Mentre una *foreign key* può essere *null* nel caso ci sia un'associazione parziale tra le tabelle.

## Dal modello a oggetti allo schema relazionale

Per costruire lo schema relazionale dobbiamo trasformare alcune cose:

## Associazioni

Partiamo dalle **associazioni molti a uno totali**:
Si mette la *foreign key* ed eventuale attributi della relazione nell'entità con molteplicità n
![enter image description here](https://i.ibb.co/F7w80tD/n-1-tot.png)

Mentre per le **associazioni molti a uno parziali** abbiamo due modi di trasformare: o nello stesso modo delle totali, oppure creando una nuova tabella
![enter image description here](https://i.ibb.co/yPnqjKY/n-1-parz.png)

Per le **associazione uno a uno** in caso di totalità è indifferente dove mettere la *foreign key* mentre se c'è la parzialità bisogna rispettarla:

![enter image description here](https://i.ibb.co/LYH7dfZ/1-1-parz.png)

Mentre per le **associazioni molti a molti** dobbiamo inserire una nuova tabella
![enter image description here](https://i.ibb.co/pKp3L4X/molti-a-molti.png)

## Gerarchia

![enter image description here](https://i.ibb.co/R6N2YVg/gerarchia.png)
Nello schema relazionale dobbiamo rimuovere ogni forma di gerarchia, possiamo farlo in tre modi diversi:

1. **Relazione unica**
	Possiamo accorpare le tre tabelle in una unica, in cui si uniscono gli attributi di tutte le tabelle con l'aggiunta di un discriminante che indica a quale tabella apparteneva ogni riga.
	Conveniente se i figli differiscono di pochi attributi

	![enter image description here](https://i.ibb.co/GFHzQQk/reaz-unica.png)	

2. **Partizionamento verticale**
	Manteniamo le tre tabelle, la tabella padre rimane uguale mentre ai figli aggiungiamo la *primary key* del padre che farà anche da *foreign key* verso il padre. Quindi la gerarchia si trasforma in due associazioni
	![enter image description here](https://i.ibb.co/Pwr9K7f/part-vert.png)

3. **Partizionamento orizzontale**
Accorpiamo gli attributi nei figli e li rendiamo due tabelle distinte, se la gerarchia è una copertura allora il padre sparisce, altrimenti rimane.
	Questo metodo **non si può applicare** se il padre della gerarchia ha una **associazione entrante**.
Questo metodo è scomodo nel caso in cui la gerarchia sia di tipo scorrelata, in quanto i figli possono avere degli attributi comuni e quando si vuole modificare un figlio bisognerebbe modificare anche l'altro per mantenere la coerenza dei dati.
	![enter image description here](https://i.ibb.co/qknckbs/part-oriz.png)

### chiave primaria

Ogni tabella deve avere una chiave primaria che identifica le righe, quindi se non è presente va aggiunta (spesso si introduce un attributo come "matricola", "codice" o "id")

### Attributi multivalore

Gli attributi multivalore possono essere gestiti in 2 modi diversi, in base a se si vuole far diventare l'attributo una tabella indipendente oppure solo una associazione diretta con la tabella da cui proviene:

1. Associazione diretta.

	Un esempio può essere una persona con i numeri di telefono, dato che è molto improbabile condividere un numero di telefono tra più persone fare una associazione diretta è sufficiente:

	ad esempio
![enter image description here](https://i.ibb.co/1XKmGY3/multival-before.png)

	diventa:
![enter image description here](https://i.ibb.co/qxScpSw/multival-after.png)

	Abbiamo quindi una tabella Telefono che è composta da il codice fiscale della persona e dal numero di telefono, insieme identificano ogni riga della tabella.

2. Tabella indipendente
Un esempio può essere fatto tra persona e le lingue che una persona sa parlare, in questo caso è molto probabile che delle lingue siano in comune tra più persone quindi è conveniente fare una tabella indipendente per le lingue e avere una relazione che lega persona e lingua.

	![enter image description here](https://i.ibb.co/x8H48Xj/multival-before.png)

	diventa:
	![enter image description here](https://i.ibb.co/hZg0SVg/multival-after.png)

### Attributi strutturati

I campi strutturati (cioè composti da più tipi di dato) vanno scomposti in più attributi, fino a che ogni attributo sia un tipo di dato primitivo.

ad esempio
![enter image description here](https://i.ibb.co/3MnGGQ9/struct-before.png)

diventa:

![enter image description here](https://i.ibb.co/2WcQMyp/struct-after.png)

## Esempio completo di schema relazionale

![enter image description here](https://i.ibb.co/8cRMDhg/image.png)
