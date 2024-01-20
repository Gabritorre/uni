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
