# Progettazione e modellazione del BD

 Prima di realizzare fisicamente un database bisogna prima creare dei **modelli astratti** che rappresentano la realtà di riferimento.

## Modello concettuale

IL modello concettuale è il primo schema da realizzare che interpreta realtà di riferimento.

Noi useremo un **modello ad oggetti** che appunto riprende dei concetti dalla programmazione ad oggetti e li applica alla progettazione concettuale di un DB. 


### Entità, Proprietà e Associazioni

Ci si concentra sulla rappresentazione di **entità**, le relative **proprietà** e le **associazioni** tra varie entità:

la seguente foto è una simil-tabella di un database per orientarsi con i termini
![enter image description here](https://i.ibb.co/64Wm6kQ/class.png)

- Una **entità**: può essere un oggetto fisico, un oggetto astratto, oppure anche un evento (ad esempio: un libro, una descrizione bibliografica, un prestito).
una istanza dell'entità deve possedere una **chiave primaria**, nel modello concettuale ad oggetti se non è esplicitata una proprietà che può essere una PK **non** bisogna inventarsene una.
![enter image description here](https://i.ibb.co/k597RHG/entita.png)

- le **proprietà** sono le caratteristiche che possiede una entità
	le proprietà possono essere di vario tipo:
	- Atomiche: cioè una che non è divisibile in più parti
	- record: in cui vengono messi insieme più componenti che potrebbero essere divisi (come un indirizzo)
	- sequenza: la caratteristica è singola ma può aver più di un valore (ad esempio i recapiti telefonici o le lingue parlate)
	- enumerazione: cioè una caratteristica che può assumere un valore tra tra un numero ristretto di valori possibili (ad esempio il sesso)

	Le proprietà possono avere dei **vincoli di integrità** cioè delle restrizioni sui valori che che possono assumere le proprietà di una entità 
![enter image description here](https://i.ibb.co/FDcHPbR/propriet.png)
- le **associazioni** sono dei collegamenti logici che legano due o più entità.
	Una associazione è caratterizzata da due aspetti: la molteplicità e la totalità
	- **Molteplicità** considerando una associazione tra le entità x e y abbiamo:
		- **una molteplicità 1-1**: se per ogni x si associa al massimo un elemento di y e viceversa.
		- **una molteplicità 1-n**: se per ogni x si possono associare più elementi di y e per ogni y associa al massimo un x.
		- **una molteplicità n-1**: se per ogni x si associa al massimo un y e per ogni y si possono associare più x.
		- **una molteplicità n-m**: se per ogni x si possono associare più y e viceversa.
	
		ad esempio con entità *studente* e *corso* e associazione *frequenta* abbiamo una associazione n-m perche uno studenti può frequentare più corsi e un corso può essere frequentato da più studenti.
un altro esempio è Insegna(Professori, Corsi) ha molteplicità (1:N),
	- **Totalità** una associazione è **totale** se per ogni x esiste una y che è associata ad una x, altrimenti se una x può anche non è associata a nessuna y si dice **parziale**
	Esempio: Insegna(Professori, Corsi) è **totale su Corsi** in quanto non può esistere un corso del piano di studi senza il corrispondente docente che lo tiene, **parziale su Professori**, in quanto un professore potrebbe non tenere corsi.
Inoltre le associazioni possono avere delle **proprietà a parte**, possono essere ricorsive, e possono associarsi a più entità (e quindi non solo 2 alla volta) in questo caso chiamate **associazione n-arie**
	
	![enter image description here](https://i.ibb.co/gJ7XcdQ/cardinalit.png)





