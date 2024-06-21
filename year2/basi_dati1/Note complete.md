# Introduzione a basi di dati

### Distinzione tra sistema informatico e informativo

**Sistema informativo**: insieme di procedure e risorse (umani e non) per la raccolta, archiviazione, elaborazione e distribuzione di informazioni utili ad un'organizzazione per prendere delle decisioni

**Sistema informatico**: insieme di tecnologie informatiche e telecomunicazioni che sono a supporto delle attività di un'organizzazione

**sistema informativo automatizzato** il sistema informativo viene svolto usando un sistema informatico

### Distinzione tra dato e informazione

**Dati**: sono dei valori grezzi (non elaborati) che sono subito visibili ma difficili da interpretare.
**Informazioni**: provengono dall'elaborazione dei dati e servono a generare nuova conoscenza tramite delle interpretazioni e comprensione dei dati.


## Database e DBMS 

Un database è una raccolta di **dati** permanenti gestiti da un computer suddivisi in:

- **Metadati**: servono a definire lo schema del database, la struttura dei dati, le operazioni eseguibili, le restrizioni, le autorizzazioni. I metadati vengono definiti prima di creare i dati.
- **Dati**: sono i valori presenti nel database che devono essere conformi alle caratteristiche del DB e su cui sono definite delle relazioni. I dati sono molti di più dei metadati, sono permanenti e sono utilizzabili contemporaneamente da più utenti inoltre sono protetti e accessibili mediante transazioni.

Un DBMS (*Data Base Management System*) è un sistema che offre strumenti per gestire una base di dati, quindi la definizione della struttura le modifiche, le aggiunte, gli accessi, ecc...

Generalmente un utente non accede mai direttamente alla base di dati bensì si interfaccia o con il DBMS oppure con un programma esterno il quale si interfaccia a sua volta con il DBMS.

## Funzionalità del DBMS

- **DDL**: (Data Definition Language) Si occupa di definire la struttura dei dati, le regole di integrità e i privilegi degli utenti (Appartengono a questa categoria comandi come **CREATE**, **ALTER**, **DROP**).
- **DML**: Si occupa di leggere, inserire, modificare e cancellare dei dati (alcuni comandi sono **SELECT**, **INSERT**, **UPDATE**, **DELETE**).
- Meccanismi per il controllo dei dati
- Altri strumenti per l'amministrazione del DB

## DDL

Possiamo descrivere un database in 3 livelli differenti
- livello fisico: descrive come vengono organizzati i dati fisicamente in memoria
- livello logico: descrive la struttura dei dati e le loro relazioni in modo astratto
- livello di vista logica: descrive come appare la struttura astratta del BD per un certo applicativo esterno (può variare in base all'applicativo)


## DML

Per manipolare un database ci sono generalmente 2 modi in base alla capacità di chi vuole agire:

- Tramite una interfaccia grafica
- Oppure tramite uno specifico linguaggio: direttamente in SQL oppure in altri linguaggi usando librerie o SQL embedded nel linguaggio.


### Controllo dei dati

Il DBMS deve:
- Verificare che l'integrità del database sia mantenuta, quindi ogni dato deve rispettare i propri **vincoli di integrità**
- Proteggere il database da accessi non autorizzati, da malfunzionamenti *hardware* e *software*, da accessi concorrenti degli utenti

### Transazioni

Una transazione è una sequenza di istruzioni in lettura e scrittura che deve rispettare le proprietà **ACID**:
- *Atomicità*: le istruzioni devono essere viste come una istruzione singola, quindi se nel mezzo si verifica un problema viene abortita tutta la transazione, annullando tutte le modifiche apportate.
- *Consistenza*: Dopo la transazione l'integrità referenziale deve essere mantenuta.
- *Isolamento*: più transazioni effettuate in contemporanea devono risultare come se fossero eseguite una dopo l'altra.
- *Durabilità*: Alla fine della transazione le modifiche devono essere salvate permanentemente su disco.

# Progettazione e modellazione del BD

 Prima di realizzare fisicamente un database bisogna prima creare dei **modelli astratti** che rappresentano la realtà di riferimento.

## Modello concettuale

Il modello concettuale è il primo schema da realizzare che interpreta realtà di riferimento.

Noi useremo un **modello ad oggetti** che appunto riprende dei concetti dalla programmazione ad oggetti e li applica alla progettazione concettuale di un DB.

### Entità, Proprietà e Associazioni

Questo modello si concentra sulla rappresentazione di **entità**, le relative **proprietà** e le **associazioni** tra varie entità:

la seguente foto è una simil-tabella di un database per orientarsi con i termini
![enter image description here](https://i.ibb.co/64Wm6kQ/class.png)

- Una **entità**: può essere un oggetto fisico, un oggetto astratto, oppure anche un evento (ad esempio: un libro, una descrizione bibliografica, un prestito).
Una istanza dell'entità deve possedere una **chiave primaria** (PK), nonostante ciò nel modello concettuale ad oggetti se non è esplicitata chiaramente una proprietà che può essere una PK allora **non** bisogna inventarsene una (in una rappresentazione successiva ci occuperemo di definire le chiami primarie).

	Rappresentiamo graficamente una entità nel seguente modo 
![enter image description here](https://i.ibb.co/k597RHG/entita.png)

- Le **proprietà** sono le caratteristiche che possiede una entità
	le proprietà possono essere di vario tipo:
	- Atomiche: cioè una proprietà che non è divisibile in più parti
	- Record: una composizione di più proprietà che potrebbero essere divise (come un indirizzo di un luogo)
	- Sequenza: una lista di proprietà dello stesso tipo (ad esempio i recapiti telefonici o le lingue parlate)
	- Enumerazione: cioè una caratteristica che può assumere un valore tra tra un numero ristretto di valori possibili (ad esempio il sesso di una persona)

	Le proprietà possono avere dei **vincoli di integrità** cioè delle restrizioni sui valori che che possono assumere le proprietà.
	Rappresentiamo graficamente le proprietà di una entità nel seguente modo
![enter image description here](https://i.ibb.co/FDcHPbR/propriet.png)
- Le **associazioni** sono dei collegamenti logici che legano due o più entità.
	Una associazione è caratterizzata da due aspetti: **la cardinalità e la totalità**
	- **Cardinalità** (o molteplicità): considerando una associazione tra le entità $X$ e $Y$ abbiamo:
		- **una molteplicità 1-1**: se per ogni $X$ si associa al massimo un elemento di $Y$ e viceversa.
		- **una molteplicità 1-n**: se per ogni $X$ si possono associare più elementi di $Y$ e per ogni $Y$ associa al massimo un $X$.
		- **una molteplicità n-1**: se per ogni $X$ si associa al massimo un $Y$ e per ogni $Y$ si possono associare più $X$.
		- **una molteplicità n-m**: se per ogni $X$ si possono associare più $Y$ e viceversa.
	
		Ad esempio con entità *STUDENTE* e *CORSO* e associazione *FREQUENTA* abbiamo una associazione **(n-m)** perché uno studente può frequentare più corsi e un corso può essere frequentato da più studenti.
un altro esempio è INSEGNA(PROFESSORI, CORSI) ha molteplicità **(1:n)**, un professore insegna più corsi e un corso è insegnato da un professore.
	- **Totalità**: una associazione è **totale** se per ogni $X$ esiste una associazione con $Y$, altrimenti se una $X$ può anche non è associata a nessuna $Y$ si dice **parziale**
	Esempio: INSEGNA(PROFESSORI, CORSI) è **totale su Corsi** in quanto non può esistere un corso del piano di studi senza il corrispondente docente che lo tiene, **parziale su Professori**, in quanto un professore potrebbe non tenere corsi.
	
	Inoltre le associazioni possono avere delle **proprietà a parte** (che non risiedono in nessuna delle entità coinvolte nell'associazione), possono essere ricorsive, e possono associarsi a più di 2 entità (in questo caso chiamate **associazione n-arie**)
	
	rappresentazione grafica della cardinalità e della totalità:
	![enter image description here](https://i.ibb.co/gJ7XcdQ/cardinalit.png)

## Ereditarietà delle classi

Nel modello ad oggetti è possibile ereditare una classa da un'altra, la classe ereditata possiede tutti gli attributi della classe padre e in più è possibile:

- Aggiungere altri attributi
- Ridefinire quelli già presenti (cambiandone il tipo, che deve essere un sottotipo del tipo del padre)

## Tipi di sottoclasse

![enter image description here](https://i.ibb.co/4PTcTQf/sottoclassi.png)

(istanze = righe della tabella)
1. **Sottoclassi scorrelate**: i figli possono avere istanze comuni e uniti non rappresentano la totalità delle istanze del padre
2. **Sottoclassi disgiunte**: i figli non hanno istanze in comune
3. **Sottoclassi copertura**: le istanze dei figli unite rappresentano la totalità delle istanze del padre
4. **Sottoclassi partizione**: i figli non hanno istanze comuni e uniti rappresentano la totalità delle istanze del padre


## Esempio completo di schema concettuale

![enter image description here](https://i.ibb.co/jD4Q007/image.png)


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



# Algebra relazionale

L'algebra relazionale è un linguaggio relazionale che combina un insieme di operatori che operano su relazioni (tabelle) e restituiscono relazioni (tabelle).

Serve per rappresentare le interrogazioni (in modo indipendente dal linguaggio poi utilizzato) che si possono fare su un database.

Ci sono diversi tipi di operatori:

- **primitivi**: ridenominazione, proiezione, unione, differenza, restrizione, prodotto
- **derivati**: giunzione, divisione
- **altri**: raggruppamento, order by, min, max, ...

## Ridenominazione

Rappresentiamo questo operatore con la lettera greca $\rho$ (detta "rho").

$$\rho_{A\leftarrow B}(R)$$

è l'equivalente del comando **AS** in SQL

Serve per rinominare il nome di una colonna $B$ nel nuovo nome $A$ di una tabella $R$

è utile quando abbiamo tabelle che hanno colonne con lo stesso nome.

## Unione e Differenza

Avendo due tabelle $R$ e $S$ **dello stesso tipo** (quindi le tabelle hanno le colonne con gli stessi tipi di dato)

- **Unione**: crea una nuova tabella con le righe della tabella $R$ assieme alle righe della tabella $S$.
	Il numero di colonne rimane invariato e vengono esclusi i duplicati

	$$R\cup S = \{t \text{ tale che: } t\in R \lor t \in S\}$$

	è l'equivalente del comando **UNION** (in cui esclude i duplicati) oppure **UNION ALL** (include anche i duplicati) in SQL

- **Differenza**: crea una nuova tabella con le righe della tabella $R$ che però non sono nella tabella $S$
	$$R - S = \{t \text{ tale che: } t\in R \land t \notin S\}$$
	
	è l'equivalente del comando **EXCEPT** in SQL
	
## Proiezione

rappresentiamo questo operatore con la lettera greca $\pi$ (detta "pi").

$$\pi_{a_1, a_2, a_3, ..., a_n}(R)$$

è l'equivalente del comando **SELECT** in SQL

Crea una tabella con un sottoinsieme delle colonne della tabella $R$, Il sottoinsieme viene specificato tramite l'elenco delle colonne che si desidera mantenere $a_1, a_2, a_3,$ ecc...

### Proiezione generalizzata

è possibile fare delle operazioni aritmetiche sulle colonne selezionate, e opzionalmente rinominare l'operazione usando la parola chiave **AS** seguita dal nuovo nome:

$$\pi_{\text{a1, a2, a1+a2 AS somma}} (R)$$


## Restrizione

Rappresentiamo questo operatore con la lettera greca "sigma" $\sigma$ e la condizione la indichiamo con "phi" $\phi$.

$$\sigma_{\phi}(R)$$

è l'equivalente del comando **WHERE** in SQL

Crea una tabella solo con le righe della tabella $R$ che soddisfano la condizione $\phi$

## Prodotto cartesiano

Avendo due tabelle $R$ ed $S$, il prodotto cartesiano

$$R\times S$$

crea una nuova tabella in cui ogni riga di $R$ viene affiancata ad ogni riga di $S$

Equivale al comando **CROSS JOIN** oppure **FROM \<tabella1\>, \<tabella2\>** in SQL

Esempio grafico:
![enter image description here](https://i.ibb.co/5Wj6xgx/prodotto-cartesiano.png)

## Giunzione

Rappresentiamo questo operatore con il simbolo $\bowtie$ e la condizione la rappresentiamo con $\phi$

$$R \underset{\phi}{\bowtie} S$$

Serve ad affiancare le righe delle due tabelle se viene soddisfatta la condizione tra la coppia di righe

equivalente al comando **(INNER) JOIN \<tabella\> ON \<condizione\>** in SQL

ad esempio

$$R \underset{R.a = S.b}{\bowtie} S$$

Crea una nuova tabella in cui si affiancano le righe se soddisfano la condizione che: l'attributo $a$ della tabella $R$ e l'attributo $b$ della tabella $S$ sono uguali.

Spesso usato per unire tabelle che sono in relazione tramite *foreign key*, dove la condizione è che la *foreign key* di una tabella e la *primary key* dell'altra sono uguali.

### Giunzione naturale

È un particolare tipo di join che confronta automaticamente le colonne delle due tabelle con lo stesso nome, senza bisogno quindi di una condizione. Non è consigliato utilizzarla in quando è meglio esplicitare la condizione di join.

Equivalente al comando **NATURAL JOIN \<tabella\>** in SQL

### Giunzione esterna

È un particolare tipo di join che mantiene anche le righe che non soddisfano la condizione del join (quindi vengono ottenute tutte le righe di entrambe le tabelle), a queste righe vengono aggiunti dei valori NULL dove manca la corrispondenza.

equivalente al comando **OUTER JOIN \<tabella\> ON \<condizione\>** in SQL

Esempio

Tabella $R$
| id | nome |
|--|--|
| 1 | Alice|
| 2 | Bob |
| 3 | Charlie |

Tabella $S$
| id | età|
|--|--|
| 1 | 13|
| 3 | 20 |
| 4 | 32 |

La giunzione esterna rappresentata con il seguente simbolo tra le due tabelle risulta
$$R \underset{\bowtie}{\leftrightarrow}_{\text{R.id = S.id}} S$$

| id | nome | età|
|--|--|--|
| 1 |Alice| 13 |
| 2 |Bob| NULL |
| 3 |Charlie| 20 |
| 4 |NULL| 32 |

Abbiamo due sottocategorie della giunzione esterna:

### Giunzione esterna sinistra

In cui consideriamo tutte le righe della tabella di sinistra e solo quelle che soddisfano la condizione della tabella di destra, se delle righe di sinistra non hanno nessuna corrispondenza con alcuna riga della destra allora si mette NULL.

Equivalente al comando **LEFT JOIN \<tabella\> ON \<condizione\>** in SQL

e si rappresenta con il seguente simbolo

$$R \underset{\bowtie}{\leftarrow}_{\text{R.id = S.id}} S$$

Considerando le stesse tabelle di prima otteniamo dalla *left join*:

| ID | nome | età |
|--|--|--|
| 1 | Alice|13|
| 2 | Bob |NULL|
| 3 | Charlie |20|

### Giunzione esterna destra

È analoga alla giunzione esterna sinistra.

In cui consideriamo tutte le righe della tabella di destra e solo quelle che soddisfano la condizione della tabella di sinistra, se delle righe di destra non hanno nessuna corrispondenza con alcuna riga della sinistra allora si mette NULL.

Equivalente al comando **RIGHT JOIN \<tabella\> ON \<condizione\>** in SQL

e si rappresenta con il seguente simbolo

$$R \underset{\bowtie}{\rightarrow}_{\text{R.id = S.id}} S$$

Considerando le stesse tabelle di prima otteniamo dalla *right join*:

| ID | nome | età |
|--|--|--|
| 1 | Alice|13|
| 3 | Charlie |20|
| 4 | NULL |32|

## Intersezione

Avendo due tabelle $R$ e $S$

L'**intersezione**: crea una nuova tabella contenente solo le righe che sono in comune tra le due tabelle

$$R \cap S$$

Equivalente al comando **INTERSECT** in SQL

Esprimibile anche come $R - (R - S)$

## Divisione

Avendo due tabelle $R$ e $S$ che condividono una colonna, la divisione crea una nuova tabella formata solo dalle colonne di $R$, tranne quella condivisa. Vengono inserite le righe di $R$ che possiedono tutti i valori della tabella $S$ della colonna condivisa.

Definizione formale: "date le relazioni $R(XY)$ e $S(Y)$ si vuole produrre una relazione $T(X)$ tale che una ennupla $t$ è in $T$ se e solo se per ogni $s$ in $S$ la ennupla $<t, s>$ appare in $R$"

$$R\div S = \{w|\{w\}\times S \subseteq R\}$$

Ad esempio:

Tabella $R$
|nome | genere | ufficio |
|--|--|--|--|
| Alice| F|uff1|
| Alice| F|uff2|
| Bob |M|uff1|
| Charlie |M|uff1|
| Charlie |M|uff2|

Tabella $S$
| ufficio|
|--|
| uff1 |
| uff2 |

La divisione

$$R \div S$$

Restituirà la tabella

| nome| genere |
|--|--|
| Alice |F|
| Charlie |M|

Nella tabella risultante ci sono due valori <nome, genere> tali che ogni <nome, genere, ufficio> (cioè il prodotto cartesiano tra il risultato e la tabella $S$) è compreso in $R$.
In altre parole solo Alice e Charlie lavorano in tutti gli uffici presenti nella tabella $S$

La divisione non ha un equivalente comando in SQL.

È possibile implementarla tramite la seguente query in algebra relazionale:

$$\pi_X (R) - \pi_X ((\pi_X(R)\times S)-R)$$

Dove $X$ è l'insieme degli attributi **che possiede solo** $R$ (quindi non la colonna condivisa)

## Funzioni di aggregazione

Le funzioni di aggregazione sono delle funzioni che prendono in input uno o più insiemi di valori e restituiscono un singolo valore numerico.
Alcuni esempi di queste funzioni sono:

- sum: restituisce la somma dei valori
- avg: restituisce la media del valori
- count: restituisce quanti sono i valori
- min e max: restituiscono rispettivamente il minimo e il massimo tra i valori

## Raggruppamento

L'operatore di raggruppamento rappresentato con il simbolo greco "gamma" $\gamma$, serve ad aggregare le righe utilizzando le funzioni di aggregazione

$$\large_{a1,...,an}\gamma_{f1,...,fm}(R)$$


Dove $a1,...,an$ sono gli attributi, mentre $f1,...,fm$ sono le funzioni di aggregazione.

A parole si potrebbe dire: "selezionami le colonne $f1,...,fm$ e $a1,...,an$ raggruppate per i valori $a1,...,an$"

Equivalente al comando **GROUP BY** in SQL

Ad esempio nella seguente tabella Esami:
![enter image description here](https://i.ibb.co/P61P0Km/esempio-aggr.png)

La seguente operazione di raggruppamento:

$$\large_{\text{Materia}}\gamma_{\text{avg(Voto)}} (\text{Esami})$$

restituisce
![enter image description here](https://i.ibb.co/855CgHq/image.png)

Quindi calcola la media degli esami raggruppati per materia

## Operazioni sui multinsiemi

- Proiezione senza eliminare i duplicati
$$\pi^b_{a1,...,an} (O)$$
- Eliminazione dei duplicati dell'insiemi
$$\delta(O)$$
- Ordinamento degli attributi
$$\tau_{a1,...,an}(O)$$
- Unione, intersezione e differenza in cui si mantengono i duplicati

	$$O_1 \cup^b O_2$$

	nell'intersezione prendo il minimo di duplicati comuni delle due tabelle
	
	$$O_1 \cap^b O_2$$
	
	nella differenza prendo il massimo di duplicati tra 0 e la differenza tra il numero di duplicati di O_1 e il numero di duplicati di O_2
	$$O_1 -^b O_2$$
	
	in altre parole se una riga è ripetuta 5 volte in $O_1$ e la stessa riga è ripetuta 3 volte in $O_2$ nel risultato quella riga sarà presente 2 volte.
	Se invece è ripetuta 5 volte in $O_1$ e 7 volte in $O_2$ nel risultato non ci sarà nessuna occorrenza di quella riga

## Equivalenze di espressioni algebriche

- $\pi_{A}(\pi_{A,B}(R)) \equiv \pi_A(R)$
- $\sigma_{C_1}(\sigma_{C_2}(R)) \equiv \sigma_{C_1 \land C_2 }(R)$
- $\sigma_{C_1 \land C_2}(R \times S) \equiv \sigma_{C_1}(R) \times \sigma_{C_2}(S)$
- $R \times (S \times T) \equiv (R \times S) \times T$
- $(R \times S) \equiv (S \times R)$
- $\sigma_{C}(_X \gamma_F(R)) \equiv \,_X\gamma_F(\sigma_C(R))$


# Calcolo relazionale

Il calcolo relazione è un modo alternativo all'algebra relazione di interrogare i database.
Esistono due varianti del calcolo relazionale:

- Calcolo Relazionale su Ennuple (CRE)
- Calcolo Relazionale su Domini (CRD)

Queste due varianti e l'algebra relazionale sono espressivamente equivalenti ma hanno alcune differenze:

- L'algebra relazionale è un **linguaggio procedurale**
	una interrogazione specifica sia cosa si vuole recuperare e anche come recuperarlo
- Il calcolo relazionale è un **linguaggio dichiarativo**
	una interrogazione specifica cosa si vuole recuperare ma **non come**

Il calcolo relazionale utilizza una logica fatta da **termini** e **formule**

I termini possono essere: valori costanti, variabili oppure funzioni.
Le formule denotano valori di verità (and, or, not, implies, forall, exist)

### Calcolo relazione su ennuple

Le interrogazione hanno la seguente forma

$$\{\text{riga.attributo}|\text{formule}\}$$

Le formule possono essere:

- Formule di tipo
	$$\text{t} \in \text{Studenti}$$
- Formule di confronto tra valori e fra costanti
	$$\text{t.Matricola = e.Candidato}$$
	
	$$\text{t.Provincia = 'VE'}$$
- Formule di restrizione
	$$\{\text{t}| \text{t} \in \text{Studenti}\land \text{t.Provincia = 'VE'}\}$$
- Formule di proiezione
	$$\{\text{t.Nome, t.Cognome}| \text{t} \in \text{Studenti}\}$$
- Formule di ridenominazione
ridenominazione dell'attributo A in B nella tabella con i seguenti attributi $R(A, C)$
	$$\{\text{t} |\exist \text{u} \in R : \text{t.B = u.A} \land \text{t.C = u.C}\}$$
- Formule di unione
	$$\{ \text{t}|\text{t}\in \text{Studenti}\lor \text{t} \in \text{Docenti}\}$$
- Formule di differenza
	$$\{\text{t}| \text{t} \in \text{Studenti}\land \lnot (t \in \text{Docenti})\}$$
- Formule di prodotto
	$$\{\text{t, e| t} \in \text{Studenti}\land e\in \text{Docenti}\}$$
- Formule di intersezione
		$$\{\text{t| t} \in \text{Studenti}\land \text{t} \in \text{Docenti}\}$$
- Formule di giunzione
	giunzione tra $R(A,B)$ e $S(C,D)$
		$$\{\text{r,s| r} \in \text{R}\land s \in \text{S}\land \text{r.B = s.C}\}$$
- Formule di giunzione naturale
	giunzione tra $R(A,B)$ e $S(B,C)$
		$$\{\text{r.A, r.B,s.C}| r \in \text{R}\land s \in \text{S}\land r.B = s.C\}$$



Esempio di interrogazione con calcolo relazionale su ennuple
"ottenere nome e cognome degli studenti che hanno superato almeno un esame"

$\{\text{t.Nome, t.Cognome |  } \text{t}\in \text{Studenti} \land \exist e \in \text{Esami : (t.Matricola} = e.\text{Candidato})\}$


# Linguaggio SQL

SQL (*Structured Query Language*) è un linguaggio dichiarativo che serve per interrogare una base di dati. È suddiviso in due parti principali:

-   **DML (Data Manipulation Language)**: Per leggere, inserire, modificare e cancellare dei dati (**SELECT**,  **INSERT**,  **UPDATE**,  **DELETE**).
-   **DDL (Data Definition Language)**: Per la definizione della struttura del database, delle regole di integrità e amministrazione (**CREATE**,  **ALTER**,  **DROP**).

# DML

Generalmente in questa categoria andiamo a fare delle operazioni su delle tabelle in input e in output viene restituita una tabella.

Le query si baseranno sul seguente esempio

![enter image description here](https://i.ibb.co/92qdhR2/image.png)

## Select

Il comando **select** serve per selezionare un sottoinsieme di attributi di una tabella.
La struttura generale è la seguente:

```sql
SELECT <attributi>
FROM <tabelle>
[WHERE <condizioni>];
```

Esempi

```sql
SELECT Nome, Cognome, Matricola
FROM Studenti;
```

La clausola **where** serve per applicare una restrizione ai dati

```sql
SELECT *
FROM Esami
WHERE Voto > 26;
```
(l'asterico significa seleziona tutti gli attributi della tabella)

Possiamo utilizzare la keyword **DISTINCT** per rimuovere i duplicati dalle righe

```sql
SELECT DISTINCT Provincia
FROM Studenti;
```

## Giunzione

Vediamo i vari modi di fare giunzioni tra tabelle in SQL:

### Prodotto cartesiano

È possibile combinare tutte le righe di due tabelle (prodotto cartesiano) semplicemente facendo:

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

Realizzata con il comando `INNER JOIN` o più semplicemente `JOIN` si fa nel seguente modo:

```sql
SELECT *
FROM Studenti JOIN Esami ON Matricola = Candidato;
```

### Natural join

La join naturale si fa nel seguente modo

```sql
SELECT *
FROM Studenti NATURAL JOIN Esami;
```

È possibile specificare le colonne su cui effettuare la natural join utilizzando la keyword `USING()` specificando al suo interno le colonne.

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

Quando si lavora con più di una tabella spesso è conveniente (in altri casi è necessario) specificare la tabella a cui si riferisce l'attributo.
Per fare ciò utilizziamo la seguente sintassi

`Tabella.Attributo`

Es. generare una tabella che riporti Codice, Nome, Cognome dei docenti e Codice degli esami corrispondenti 

```sql
SELECT Docenti.CodDoc, Docenti.Nome, Docenti.Cognome, Esami.Codice
FROM Esami JOIN Docenti ON Docenti.CodDoc = Esami.CodDoc;
```

In quel esempio sia `Docenti` che `Esami` hanno una colonna chiamata `CodDoc` quindi è necessario specificare la tabella a cui si riferisce l'attributo.

## Alias

Possiamo attribuire degli alias alle tabelle della clausola `FROM` questo torna particolarmente utile per migliorare la leggibilità delle query. Quando si lavora con tabelle ricorsive è necessario utilizzare gli alias.

Es. generare una tabella che contenga cognomi e matricole degli studenti e dei loro tutor

```sql
SELECT s.Cognome, s.Matricola, t.Cognome, t.Matricola
FROM Studenti s JOIN Studenti t ON s.Tutor = t.Matricola;
```

## Ridenominazione

Possiamo ridenominare le nostre colonne nella clausola `SELECT`, questo torna utile per rendere la tabella di output più chiara.
Viene utilizzata la *keyword* **AS** e può essere usato per rinominare un attributo, un attributo calcolato oppure una funzione

```sql
SELECT Nome, Cognome, date_part(‘year’, current_date) - Nascita AS Età
FROM Studenti
WHERE Provincia = ’VE’;
```
Come si vede abbiamo un campo calcolato `date_part(‘year’, current_date) - Nascita` che possiamo chiamare semplicemente `Età`

## Funzioni di aggregazione

Le funzioni di aggregazione prendono in input tutte le righe di una o più colonne e restituiscono una riga oppure nessuna. Alcuni esempi di queste funzioni sono:

- **COUNT()**: conta il numero di righe che non sono `NULL` (se tutte le righe sono `NULL` allora ritorna zero)
- **SUM()**: somma i valori numerici delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)
- **AVG()**: media dei valori numerici delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)
- **MIN()**: restituisce il minimo valore numerico delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)
- **MAX()**: restituisce il massimo valore numerico delle righe (se tutte le righe sono `NULL` allora ritorno `NULL`)

Queste funzioni possono solo essere utilizzate nel `SELECT` oppure nel `HAVING` ma **non** nel `WHERE`

## Order by

Tramite il comando `ORDER BY` è possibile ordinare i risultati di una query seguendo un ordine lessicografico.
L'ordinamento crescente si specifica con `ASC`, ed è impostato di default, mentre l'ordinamento decrescente si specifica con `DESC`

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

Nota che è importante selezionare anche la Matricola per poter identificare le righe (anche se non è esplicitamente richiesto dalla consegna)

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

È importante **non utilizzare l'uguale per comparare un valore con NULL**.
NULL introduce un altro valore logico oltre a `true` e `false`, che è `unknown`.
`NULL = 0` restituisce `unknown`.

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

È possibile anche utilizzare la funzione `COALESCE(expr1, expr2)` per attribuire un valore personalizzato al posto di NULL: la prima espressione della funzione dovrebbe essere il valore della riga che ci interessa, se quel valore dovesse essere NULL, verrà utilizzato il prossimo valore non null specificato come parametro.

## Between

Possiamo utilizzare la clausola `Between` per verificare che un valore sia in un determinato range

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

## Clausola where

Vediamo nel dettaglio cosa è possibile fare con la clausola `WHERE`

Abbiamo visto l'utilizzo più semplice in cui **si compara una espressione con un'altra**
ma possiamo fare anche delle comparazioni **tra una espressione e una sottoselect**.
In fine abbiamo delle keyword che ci permettono di esprimere espressioni universali ed esistenziali, che sono **EXIST, IN, ANY, ALL**

### Sottoselect

Vediamo subito un esempio di sottoselect

"Studenti che vivono nella stessa provincia dello studente con matricola 71346, escluso lo studente stesso"

```sql
SELECT *
FROM Studenti
WHERE (Matricola <> '71346') AND
	   Provincia = (SELECT Provincia
				    FROM Studenti
					WHERE Matricola = '71346');
```

Fare le sottoselect non è molto elegante infatti in molti casi è possibile fare la stessa cosa tramite le giunzioni.

### Universale e esistenziale

Può capitare che nella clausola `where` venga richiesta la presenza di almeno un valore (esistenziale) oppure la presenza di solamente uno specifico valore (universale)

è importante considerare le seguenti proprietà:

- **esistenziale = universale negata**
	ad esempio: esiste un voto diverso da 30 (esistenziale) = Non tutti i voti sono uguali a 30 (universale)
- **universale = esistenziale negata**
	ad esempio: Tutti i voti sono uguali a 30 (universale) = Non esiste un voto diverso da 30 (esistenziale)

### Exists

L'utilizzo di `EXISTS` rappresenta **l'esistenziale**, segue la seguente forma:

```sql
SELECT ...
FROM ...
WHERE EXISTS (<sottoselect>);
```

- Nota 1: Quando si utilizza `EXISTS` è necessario avere una **correlazione** tra le **tabelle** della select **esterna** e le **tabelle nella sottoselect**
- Nota 2: non è importante cosa viene selezionato nella sottoselect


esempio: "studenti con almeno un voto > 27"

```sql
SELECT *
FROM Studenti s
WHERE EXISTS (SELECT *
			  FROM Esami e
			  WHERE e.Candidato = s.Matricola AND
					e.Voto > 27);
```
(nota la correlazione tra tabella esterna `s` che viene usata nella sottoselect)

Spesso è possibile sostituire l'utilizzo della `EXISTS` con le giunzioni, la query precedente verrebbe così:

```sql
SELECT DISTINCT s.*
FROM Studenti s JOIN Esami ON e.Candidato = s.Matricola
WHERE e.voto > 27;
```
nota che il `DISTINCT` è fondamentale in quanto non vogliamo che uno stesso studente venga selezionato tante volte quanti sono i suoi esami > 27, ma lo vogliamo selezionare solo una volta.

### ANY

L'utilizzo di `ANY` rappresenta **l'esistenziale**, segue la seguente forma:

```sql
SELECT ...
FROM ...
WHERE <expr> <comparativo> ANY (<sottoselect>);
```

Verifica se l'espressione soddisfa la comparazione con almeno un elemento della sottoselect

- Nota 1: Quando si utilizza `ANY` **non è necessario** avere una **correlazione** tra le tabelle della select esterna e le tabelle nella sottoselect
- Nota 2: è importante cosa viene selezionato nella sottoselect
- Nota 3: se la sottoselect è vuota restituisce falso

realizziamo lo stesso esempio: "studenti con almeno un voto > 27"

```sql
SELECT *
FROM Studenti s
WHERE s.Matricola =ANY (SELECT e.Candidato
					    FROM Esami e
					    WHERE e.Voto > 27);
```

La `ANY` e la `EXISTS` sono semanticamente equivalenti, la differenza sta nel fatto che nella `ANY` facciamo il confronto nel where esterno, mentre nell'`EXISTS` il confronto viene spostato nella where della sottoselect

la `ANY` restituisce:
- true: se esiste un valore che rende vero il confronto tra l'espressione e la sottoselect
- false: se nella sottoselect tutti i valori non sono NULL ed non esiste nemmeno un valore che rende vero il confronto
- unknown: se nella sottoselect ci sono valori NULL e per tutti i valori non null il confronto risulta falso

### IN

L'utilizzo di `IN` rappresenta **l'esistenziale**, segue la seguente forma:

```sql
SELECT ...
FROM ...
WHERE <expr> IN (<sottoselect>);
```

La `IN` non è altro che una `=ANY`

Infatti la precedente query la possiamo scrivere come

```sql
SELECT *
FROM Studenti s
WHERE s.Matricola IN (SELECT e.Candidato
					    FROM Esami e
					    WHERE e.Voto > 27);
```

si può utilizzare anche per verificare che una espressione sia contenuta in una lista di valori

es. "Gli studenti di Padova, Venezia e Belluno"
```sql
SELECT *
FROM Studenti
WHERE Provincia IN ('PD', 'VE', 'BL');
```

### Not Exists

L'utilizzo di `NOT EXISTS` rappresenta **l'universale**, segue la seguente forma:

```sql
SELECT ...
FROM ...
WHERE NOT EXISTS (<sottoselect>);
```

Sfruttando la proprietà che abbiamo detto in precedenza possiamo rappresentare un universale facendo la negazione dell'esistenziale e negando anche la proprietà da verificare.

Vediamo un esempio:

"Gli studenti che hanno preso solo 30"

selezioniamo gli studenti che **non** hanno preso un voto **diverso** da 30
```sql
SELECT *
FROM Studenti s
WHERE NOT EXISTS (SELECT *
				  FROM Esami e
				  WHERE e.Candidato = s.Matricola AND e.Voto <> 30);
```


### ALL

L'utilizzo di `ALL` rappresenta **l'universale**, segue la seguente forma:

```sql
SELECT ...
FROM ...
WHERE <expr> <comparativo> ALL (<sottoselect>);
```

è il corrispettivo di `ANY` ma per l'universale.

- Nota 1: Quando si utilizza `ALL` è necessario avere una **correlazione** tra le **tabelle** della select **esterna** e le **tabelle nella sottoselect**
- Nota 3: se la sottoselect è vuota restituisce true

Vediamo l'esempio precedente:

"Gli studenti che hanno preso solo 30"

```sql
SELECT *
FROM Studenti s
WHERE s.Matricola <>ALL (SELECT e.Candidato
					     FROM Esami e
					     WHERE e.Voto <> 30);
```

la `ALL` restituisce:
- true: se tutti i valori della sottoselect sono diversi da NULL e ogni elemento della sottoselect rende vero il confronto
- false: se esiste un elemento della sottoselect che rende falso il confronto
- unknown: se nella sottoselect ci sono dei NULL e tutti quelli che non sono NULL rendono vero il confronto.

Il fatto che, se la sottoselect restituisce tutti valori NULL allora l'universale restituisce true potrebbe non essere quello che vogliamo veramente:

La query precedente oltre a selezionare gli studenti che hanno preso solo 30, seleziona anche gli studenti che non hanno sostenuto alcun esame.
Per poter selezionare esclusivamente gli studenti che hanno sostenuto almeno un esame dobbiamo modificare la query nel seguente modo

```sql
SELECT *
FROM Studenti s
WHERE NOT EXISTS (SELECT *
				  FROM Esami e
				  WHERE e.Candidato = s.Matricola AND e.Voto <> 30);
	  AND EXISTS (SELECT *
				  FROM Esami e
				  WHERE e.Candidato = s.Matricola)
```

## Raggruppamento

Con il raggruppamento creiamo dei gruppi composti da righe su cui possiamo fare delle operazioni mirate all'intero gruppo.

La forma di utilizzo è la seguente

```sql
SELECT ...
FROM ...
WHERE ...
GROUP BY ...
[HAVING <condizione>]
```

Dove `having` permette di fare delle operazioni sui gruppi, diversamente dalla clausola `WHERE` in questo caso è possibile usare le funzioni di aggregazione.

Vediamo subito un esempio:

"Per ogni materia, trovare nome della materia e voto medio degli esami in quella materia (selezionando solo le materie per le quali sono stati sostenuti più di tre esami)"

```sql
SELECT e.Materia, AVG(e.Voto)
FROM Esami e
GROUP BY e.Materia
HAVING COUNT(*) > 3;
```

Nota che gli attributi che non sono argomento di una funzione di aggregazione nella `select` o nel `having`, vanno messi nel `GROUP BY`

Mentre gli attributi presenti nelle funzioni di aggregazione non devono essere presenti nel group by.


## INSERT

Con il comando `INSERT INTO` possiamo aggiungere una riga ad una tabella. La sintassi è la seguente:

```sql
INSERT INTO tabella(colonna_1, ..., colonna_n)
VALUES (valore_1, ..., valore_n)
```

Alternativamente è anche possibile inserire dei valori che sono il risultato di una `select`:

```sql
INSERT INTO tabella(nome, cognome)
	SELECT nome, cognome FROM tabella
```

## DELETE

La `DELETE` serve per eliminare righe dalla tabella.
La sintassi è la seguente:

```sql
DELETE FROM tabella
WHERE condizione
```
Vengono eliminate le righe che rispettano la condizione.

Nota che fare:
```sql
DELETE FROM tabella
```
cancella tutte le righe della tabella, la tabella rimane comunque presente.

## UPDATE

Con `UPDATE` è possibile aggiornare i valori di una o più righe esistenti.
La sintassi è la seguente:

```sql
UPDATE tabella
SET attributo_1=valore_1, attributo_n=valore_n
WHERE condizione
```

## CASE WHEN THEN ELSE

In sql abbiamo il corrispettivo del costrutto if-then-else della classica programmazione.
La sintassi è la seguente:

```sql
CASE
	WHEN condizione_1 THEN valore_1
	WHEN condizione_2 THEN valore_2
	...
	ELSE valore_default
END AS alias
```

può avere vari utilizzi, ad esempio nella select:
```sql
SELECT Matricola,
	CASE  
		WHEN YEAR(CURRENT_DATE) - Nascita >= 18  THEN  'Maggiorenne'  
		ELSE  'Minorenne'  
	END AS maggiore_età
FROM Studenti;
```


# DDL

**DDL** (*Data Definition Language*) è la parte del linguaggio SQL in cui si **definisce la base di dati**

Questa parte comprende:
- Creare tabelle
- Modificare la struttura delle tabelle
- Definire i vincoli sugli attributi e tra le tabelle
- Altre cose che non vedremo.

## Schemi

Uno schema rappresenta sostanzialmente un insieme di tabelle. Serve per creare un gruppo logico di tabelle

Possiamo creare un schema facendo 

```sql
CREATE SCHEMA <nome_schema>
```
possiamo poi andare a creare le tabelle appartenente a questo schema.

eliminiamo lo schema tramite il comando:

```sql
DROP SCHEMA <nome_schema> [CASCADE | RESTRICT]
```
Aggiungendo il `CASCADE` cancelliamo lo schema ed anche tutti gli eventuali riferimenti ad tabelle esterne allo schema.
Aggiungendo il `RESTRICT` lo schema viene cancellato solo se non ci sono riferimenti (se ci sono viene generato un errore)

## Tabelle

Possiamo definire le tabelle come un insieme di attributi (colonne), e per ciascuna colonna va indicato:

- nome
- tipo di dato, che può essere **predefinito** oppure **definito dall'utente** tramite il comando `CREATE DOMAIN`

Creiamo una tabella nel seguente modo:

```sql
CREATE TABLE <nome_tabella>(
	...
	...
);
```

Cancelliamo una tabella nel seguente modo:

```sql
DROP TABLE <nome_tabella>;
```

Possiamo modificare praticamente ogni aspetto di una tabella tramite il comando `ALTER TABLE`, possiamo per esempio:
- Aggiungere ed eliminare attributi
- Modificare il tipo degli attributi
- Aggiungere, rimuovere e modificare i vincoli

```sql
ALTER TABLE Studenti
	ADD COLUMN Nazionalita VARCHAR(10) DEFAULT ‘Italiana’;
```

### Tipi di dato predefiniti

Vediamo i più comuni tipi di dato predefiniti

- numerici
	- `SMALLINT` intero a 16 bit
	- `INTEGER` intero a 32 bit
	- `FLOAT(n)`decimale dove `n` indica la precisione, che può arrivare fino a 64bit
	- `REAL` decimale a 32 bit
	- `NUMERIC(p, s)` decimale in cui `p` rappresenta il numero di cifre totali da cui è composto il numero, mentre `s` rappresenta quante delle cifre di `p` sono dedicate dopo la virgola.
- boolean
	- può contenere solo i valori: true, false, null
	- `1, yes, y, t, true` vengono tradotti come `true`
	- `0, no, f, false` vengono tradotti come `false`
- caratteri
	- `CHAR(x)`contiene una stringa lunga `x` caratteri (se la stringa è più corta allora vengono aggiunti dei valori per riempire)
	- `VARCHAR(x)` contiene una stringa di lunghezza variabile fino a `x` caratteri (se la stringa è più corta non vengono aggiunti dei valori di riempimento)
	- `TEXT` contiene una stringa di lunghezza ipoteticamente senza limite
- temporali
	- `DATE` contiene anno:mese:giorno
	- `TIME` contiene ora:minuto:secondo
	- `TIMESTAMP` combinazione di `DATE` e `TIME`
- grandi insiemi di dati
	- in questi tipi di dati non è possibile fare operazioni e confronti
	- `BLOB` binary large object
	- `CLOB` character large object


Consideriamo a parte il tipo `SERIAL` utilizzato dal *dbms* per identificare in modo autonomo una riga. 
Ogni volta che si aggiunge una riga quel attributo viene automaticamente aggiornato.

## Vincoli

Sugli attributi possiamo specificare sia dei valori di default, tramite la keyword `DEFAULT` sia dei vincoli come:
- `NOT NULL` se l'attributo non può essere null
- `UNIQUE` se l'attributo deve essere unico (ma può assumere il valore null)
- `PRIMARY KEY` l'attributo deve essere unico e non null
- `CHECK (<condizione>)` serve per fare un controllo sul valore che assume la colonna, per essere valido il valore deve soddisfare la condizione del check

Abbiamo anche il vincolo di chiave esterna `FOREIGN KEY` che può essere accompagnata da un comportamento in caso di cancellazione e modifica del riferimento alla chiave primaria, tali comportamenti sono:
- `NO ACTION` viene impedita la cancellazione o modifica della chiave primaria
- `SET NULL` viene settata la chiave esterna a null
- `SET DEFAULT` viene settata la chiave esterna al suo valore di default
- `CASCADE`la cancellazione o modifica della chiave primaria si propaga anche alle chiavi esterne

```sql
CREATE TABLE Studenti (
	Nome VARCHAR(10) NOT NULL,
	Cognome VARCHAR(10) NOT NULL,
	Sesso CHAR(1) CHECK(Sesso IN (‘M’, ‘F’)),
	Matricola CHAR(6) PRIMARY KEY,
	Nascita DATE,
	Provincia CHAR(2) DEFAULT 'VE',
	Tutor CHAR(6),
	FOREIGN KEY (Tutor) REFERENCES Studenti(Matricola)
		ON UPDATE CASCADE
		ON DELETE SET NULL
);
```

## Viste

Le viste (*view*, oppure tabelle virtuali) sono delle tabelle temporanee generate da una query, utilizzate principalmente per realizzare in modo più ordinato query complesse (ma ha anche altri utilizzi).

Sostanzialmente è come dare un nome ad una query, essa infatti verrà ricalcolata ogni volta che si scrive il nome datogli.

Viene creata nel seguente modo

```sql
CREATE VIEW <nome_vista>(<attributi>) AS
	<SELECT>
```

Vediamo due esempi in cui le view tornano molto utili per le query:

Esempio 1: "Trovare la media dei voti massimi ottenuti nelle varie province"

```sql
CREATE VIEW ProvMax(Provincia, Max) AS
	SELECT s.Provincia, MAX(e.Voto)
	FROM Studenti s JOIN Esami e ON s.Matricola = e.Candidato
	GROUP BY s.Provincia;

SELECT AVG(Max) FROM ProvMax;
```
creo prima la view che mi contiene i voti massimi per ogni provincia.
Poi faccio una query in cui seleziono la media dei massimi

Esempio 2: "Le province dove la media dei voti degli studenti è la più alta"

```sql
CREATE VIEW ProvMedia (Provincia, Media) AS
	SELECT s.Provincia, AVG(e.Voto)
	FROM Studenti s JOIN Esami e ON s.Matricola=e.Candidato
	GROUP BY s.Provincia;

SELECT Provincia, Media
FROM ProvMedia
WHERE Media = (SELECT MAX(Media)
				FROM ProvMedia);
```
creo prima la view che mi contiene la media voti per ogni provincia.
Poi faccio una query in cui seleziono le provincie in cui la media è uguale alla media più grande tra le provincie

### With

Il costrutto `WITH` rappresenta una view utilizzabile solo una volta.

Si utilizza nel seguente modo:

```sql
WITH ProvinceMedia AS (
	SELECT s.Provincia, AVG(e.Voto) AS Media
	FROM Studenti s JOIN Esami e ON s.Matricola=e.Candidato 	
	GROUP BY s.Provincia
)
SELECT Provincia, Media
FROM ProvinceMedia
WHERE Media = ( SELECT MAX(Media)
				FROM ProvinceMedia
			  );
```

## Associazioni simmetriche

Immaginiamo di avere la seguente relazione ricorsiva

![enter image description here](https://i.ibb.co/qF9GX3s/image.png)


Quando andiamo ad inserire i dati nella tabella Fratelli, cosa andiamo a mettere?

- tutte le ennuple:
	quindi se abbiamo due fratelli con `id = 13` e `id = 21` inseriamo nella tabella fratelli sia (13, 21) che (21, 13)
	In questo modo abbiamo una **ridondanza di informazioni** e risulta intricato riuscire ad ottenere la lista di fratelli senza ripetizioni.
si dovrebbe fare una cosa di questo tipo:
	```sql
	SELECT p1.*, p2.*
	FROM Persone p1 JOIN Fratelli f ON p1.Id = f.Id1 JOIN Persone p2 ON f.Id2 = p2.Id
	WHERE f.Id1 < f.Id2
	```
	la condizione nel `where` ci garantisce l'assenza di ripetizioni.

- una sola riga per coppia:
	In questo caso risolviamo la ridondanza di dati però complichiamo le query, ad esempio per ottenere tutti i fratelli di una persona (ad esempio la persona con id=21):
	```sql
	SELECT p.*
	FROM Persone p, Fratelli f
	WHERE (f.Id1 = 21 AND f.Id2 = p.Id) OR (f.Id2 = 21 AND f.Id1 = p.Id)
	```

