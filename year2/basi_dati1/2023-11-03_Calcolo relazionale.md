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
	$$\{\text{t}| \text{t} \in \text{Studenti}\land \text{t.Provincia = 'VE'}\}$$
- formule di proiezione
	$$\{\text{t.Nome, t.Cognome}| \text{t} \in \text{Studenti}\}$$
- formule di ridenominazione
ridenominazione dell'attributo A in B nella tabella con i seguenti attributi $R(A, C)$
	$$\{\text{t} |\exist \text{u} \in R : \text{t.B = u.A} \land \text{t.C = u.C}\}$$
- formule di unione
	$$\{t| t \in \text{Studenti}\lor \text{t} \in \text{Docenti}\}$$
- formule di differenza
	$$\{\text{t}| \text{t} \in \text{Studenti}\land \lnot (t \in \text{Docenti})\}$$
- formule di prodotto
	$$\{\text{t, e| t} \in \text{Studenti}\land e \in \text{Docenti}\}$$
- formule di intersezione
		$$\{\text{t| t} \in \text{Studenti}\land \text{t} \in \text{Docenti}\}$$
- formule di giunzione
	giunzione tra $R(A,B)$ e $S(C,D)$
		$$\{\text{r,s| r} \in \text{R}\land s \in \text{S}\land \text{r.B = s.C}\}$$
- formule di giunzione naturale
	giunzione tra $R(A,B)$ e $S(B,C)$
		$$\{\text{r.A, r.B,s.C}| r \in \text{R}\land s \in \text{S}\land r.B = s.C\}$$



Esempio di interrogazione con calcolo relazionale su ennuple
"ottenere nome e cognome degli studenti che hanno superato almeno un esame"

$\{\text{t.Nome, t.Cognome | t }\in \text{Studenti} \land \exist e \in \text{Esami.(t.Matricola} = e.\text{Candidato})\}$
