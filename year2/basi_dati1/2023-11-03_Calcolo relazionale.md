# Calcolo relazionale

Il calcolo relazione è un modo alternativo all'algebra relazione di interrogare i database.
Esistono due varianti del calcolo relazionale:

- calcolo relazionale su ennuple (CRE)
- calcolo relazionale su domini (CRD)

Queste due varianti e l'algebra relazionale sono espressivamente equivalenti ma hanno alcune differenze:

- l'algebra relazionale è un **linguaggio procedurale**
	una interrogazione specifica cosa si vuole recuperare e anche come recuperarlo
- il calcolo relazionale è un **linguaggio dichiarativo**
	una interrogazione specifica cosa si vuole recuperare ma **non come**

Il calcolo relazionale utilizza una logica fatta da **termini** e **formule**

I termini possono essere: valori costanti, variabili oppure funzioni.
Le formule denotano valori di verità (and, or, not, implies, forall, exist)

### Calcolo relazione su ennuple

Le interrogazione hanno la seguente forma

$$\{\text{riga.attributo}|\text{formule}\}$$

le formule possono essere:

- formule di tipo
	$$\text{t} \in \text{Studenti}$$
- formule di confronto tra valori e fra costanti
	$$\text{t.Matricola = e.Candidato}$$
	
	$$\text{t.Provincia = 'VE'}$$
- formule di restrizione
	$$\{t| t \in \text{Studenti}\land \text{t.Provincia = 'VE'}\}$$
- formule di proiezione
	$$\{\text{t.Nome, t.Cognome}| t \in \text{Studenti}\}$$
- formule di unione
	$$\{t| t \in \text{Studenti}\lor t \in \text{Docenti}\}$$
- formule di differenza
	$$\{t| t \in \text{Studenti}\land \lnot (t \in \text{Docenti})\}$$
- formule di prodotto
	$$\{t, e| t \in \text{Studenti}\land e \in \text{Docenti}\}$$
- formule di intersezione
	$$\{t| t \in \text{Studenti}\land t \in \text{Docenti}\}$$

Esempio di interrogazione con calcolo relazionale su ennuple
"ottenere nome e cognome degli studenti che hanno superato almeno un esame"

$\{\text{t.Nome, t.Cognome | t }\in \text{Studenti} \land \exist e \in \text{Esami.(t.Matricola} = e.\text{Candidato})\}$
