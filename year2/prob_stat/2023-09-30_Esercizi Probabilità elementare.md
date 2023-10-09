## Domanda 1

La commissione paritetica della facoltà di scienze a una certa università ha un rappresentante degli studenti per ciascuno dei cinque dipartimenti (biologia, chimica, statistica, matematica, fisica). In quanti modi possono essere selezionati 
- (a) sia un presidente del consiglio che un vicepresidente?

	Il presidente del consiglio deve essere uno dei rappresentante degli studenti, quindi ha $5$ diverse possibilità, il vicepresidente che deve essere diverso dal presidente del consiglio ha quindi $(5-1)$ diverse possibilità. Le combinazioni possibili sono quindi $5\cdot 4 = 20$ 
- (b) un presidente, un vicepresidente e un segretario?

	Il presidente del consiglio deve essere uno dei rappresentante degli studenti, quindi ha $5$ diverse possibilità, il vicepresidente che deve essere diverso dal presidente del consiglio ha quindi $(5-1) = 4$ diverse possibilità.
il segretario che deve essere una persona diversa dai due ruoli precedenti ha $(5-1-1) = 3$ diverse rimanenti possibilità
Le combinazioni possibili sono quindi $5 \cdot 4 \cdot 3 = 60$
- \(c\) due rappresentanti per una commissione?

	prendendo il rappresentante di biologia ho altri $4$ rappresentanti tra cui scegliere (chimica, statistica, matematica, fisica)
	prendendo il rappresentante di chimica ho altri $3$ rappresentanti tra cui scegliere (statistica, matematica, fisica)
	prendendo il rappresentante di statistica ho altri $2$ rappresentanti tra cui scegliere (matematica e fisica)
	prendendo il rappresentante di matematica ho $1$ rappresentanti tra cui scegliere (fisica)
	quindi sarebbe $4 + 3 + 2 + 1 = 10$ oppure usando la formula delle combinazioni semplici:
	$$\text{tra 5 possibilità ne voglio un sottoinsieme di 2 senza ripetizione}$$
	
	$$n = 5, k = 2$$
	
$$\binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{120}{2 \cdot 6} = 10$$ 
	

## Domanda 2

Un negozio di musica offre un prezzo speciale su un set completo di componenti (ricevitore, lettore CD, altoparlanti, giradischi). La scelta della marca di ogni componente e la seguente:

Ricevitore: Kenwood, Onkyo, Pioneer, Sony, Yamaha
Lettore CD: Onkyo, Pioneer, Sony, Panasonic
Altoparlanti: Boston, Infinity, Polk
Giradischi: Onkyo, Sony, Teac, Technics

Un quadro di distribuzione nel negozio consente al cliente di agganciare tra loro qualsiasi selezione dei componenti (costituiti da uno per tipo).
- (a) In quanti modi si può selezionare un componente di ogni tipo?

	abbiamo $5$ scelte per il ricevitore, $4$ scelte per il lettore CD, $3$ scelte per l'altoparlante e $4$ scelte per il giradischi. Le possibili combinazioni sono $5 \cdot 4 \cdot 3\cdot 4 = 240$
- (b) In quanti modi possono essere selezionati i componenti se sia il ricevitore che il lettore di compact disc deve essere Sony?

	abbiamo $1$ scelta per il ricevitore e $1$ scelta per il lettore CD, mentre per gli autoparlanti abbiamo sempre $3$ scelte e per i giradischi abbiamo sempre $4$ scelte.
	Le combinazioni sono $1\cdot 1\cdot3\cdot4 = 12$
	
- \(c\) In quanti modi e possibile selezionare i componenti se nessuno deve essere Sony?
	abbiamo $(5-1) = 4$ scelte per il ricevitore, $(4-1) = 3$ scelte per il lettore CD, per gli altoparlanti sempre $3$ scelte, e per i giradischi abbiamo $(4-1) = 3$ scelte.
	Le combinazioni sono $4 \cdot 3 \cdot 3\cdot 3 = 108$
	
- (d) In quanti modi e possibile selezionare almeno un componente Sony e da inserire?

	devo prima considerare le combinazioni dei componenti senza alcun vincolo, lo abbiamo già calcolato nel punto (a), quindi $5 \cdot 4 \cdot 3\cdot 4 = 240$
	poi a questo numero devo sottrarre il numero di combinazioni dove nessun componente deve essere sony, anche questo lo abbiamo già calcolato nel punto \(c\), quindi  $4 \cdot 3 \cdot 3\cdot 3 = 108$
Qundi il numero di combinazioni dove almeno un componente è Sony è $240 - 108 = 132$

## Domanda 3

Tre molecole di tipo A, tre di tipo B, tre di tipo C e tre di tipo D devono essere collegate tra di loro per formare una molecola a catena. Ad esempio, due di queste molecole a catena sono ABCDABCDABCD e BCDDAAABDBCC.
- (a) Quante di queste catene di molecole si possono formare?
	indizio: se le tre A lo fossero distinguibili l’una dall’altra (A1, A2, A3) e lo stesso per le B, C e D, quante molecole ci sarebbero? Come si riduce questo numero se i pedici vengono rimossi dalle A?

	seguendo l'indizio è come se avessimo 12 lettere diverse:
	quindi la prima lettera avrebbe 12 posizioni tra cui scegliere
	la seconda lettera avrebbe 11 posizioni tra cui scegliere
	la terza ne avrebbe 10
	e così via
	otteniamo quindi $12!$ possibilità
	
	mentre nell'indizio abbiamo che
	$A_1BCDA_2BCDA_3BCD$
	$A_3BCDA_1BCDA_2BCD$
	sono due combinazioni diverse, nella consegna i pedici se ne vanno e per noi quei due rappresentano lo stesso elemento.
	$A_1, A_2, A_3$ possono essere messi in $3!$ posizioni diverse quindi dobbiamo toglierle dal conto
	$$\frac{12!}{3!}$$
lo stesso ragionamento va applicato per B, C e D. Il totale delle combinazioni è dato da:

$$\frac{12!}{3! \cdot 3! \cdot 3! \cdot 3!} = 369600$$

- (b) Quante di queste catene hanno tutte e tre le molecole di ogni tipo una accanto all’altra (come in BBBAAADDDCCC)?

	in questo esercizio è più comodo pensare ad un blocco di tre lettere uguali come una singola lettera, quindi:
	$AAA = a$
	$BBB = b$
	$CCC = c$
	$DDD = d$

	ora basta calcolare in quanti modi posso combinare $a, b, c$ e $d$ .
	
	4 posti per la $a$
	3 posti per la $b$
	2 posti per la $c$
	1 posto per la $d$

	quindi il totale delle combinazioni è dato da $4! = 24$ 

## Domanda 4

Da un’urna contenente 6 palline numerate da 1 a 6, se ne estraggono due con reinserimento, tenendo conto dell’ordine d’estrazione.
- (a) Descrivere uno spazio campionario per l’esperimento e calcolare il numero di elementi che contiene.

	lo spazio campionario contiene tutte le possibili coppie ordinate di palline.
	la prima estrazione ha $6$ possibili scelte, dato che dopo essere estratta la pallina viene reinserita, anche la seconda estrazione ha $6$ possibili scelte.
Lo spazio campionario contiene quindi $6 \cdot 6 = 36$ elementi
	
- (b) Calcolare il numero di casi possibili tali che la somma dei numeri sulle palline estratte sia 7 o 8?

	consideriamo prima il caso in sui la somma risulta $7$
	possiamo ottenere 7 con le palline $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$ quindi in totale abbiamo $6$ coppie
	consideriamo ora il caso in cui la somma risulta $8$
	possiamo ottenere 8 con le palline $(6, 2), (5, 3), (4, 4), (3, 5), (2, 6)$ quindi in totale abbiamo $5$ coppie
	
	quindi i casi in cui la somma sia 7 oppure 8 è data da $6 + 5 = 11$
	
- \(c\) Che la somma sia 7 ottenuto con 2 seguito da 5?
	ottenere come somma 7 estraendo prima un 2 e poi in 5 è possibile in un solo caso.
- (d) Che la somma sia 7 o 11?

	precedentemente abbiamo calcolato i casi per il 7, che erano $6$ .
	mentre per ottenere come somma $11$ abbiamo solo le coppie $(5, 6), (6, 5)$ quindi 2
	quindi che la somma sia 7 oppure 11 abbiamo un totale di $6 + 2 = 8$ casi
- (e) Che sia maggiore di 7?
	
	i casi in cui la somma risulta 8, gli abbiamo già calcolati ed erano $5$
	i casi in cui la somma risulta 9 è $(6, 3),(5, 4), (4, 5), (3, 6)$ quindi $4$
	i casi in cui la somma risulta 10 è $(6, 4), (5, 5), (4, 6)$ quindi $3$
	i casi in cui la somma risulta 11, gli abbiamo già calcolati ed erano $2$
	i casi in cui la somma risulta 12 è solo (6, 6) quindi $1$

	il totale di casi è quindi $5 + 4 + 3 + 2 + 1 = 15$
	
- (f) Ripetere l’esercizio nel caso in cui l’estrazione avvenga senza reinserimento.
	
	- (a)
		lo spazio campionario contiene tutte le possibili coppie ordinate di palline.
	la prima estrazione ha $6$ possibili scelte, dato che dopo essere estratta la pallina non viene reinserita, alla seconda estrazione rimangono $5$ possibili scelte.
Lo spazio campionario contiene quindi $6 \cdot 5 = 30$ elementi
	- (b)
		somma = 7: $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$ quindi 6 casi
		somma = 8: $(6, 2), (5, 3), (3, 5), (2, 6)$ quindi 4 casi
		totale casi $6 + 4 = 10$
	- \(c\)
		non cambia: ottenere come somma 7 estraendo prima un 2 e poi in 5 è possibile in un solo caso.
	- (d)
		non cambia: precedentemente abbiamo calcolato i casi per il 7, che erano $6$ .
	mentre per ottenere come somma $11$ abbiamo solo le coppie $(5, 6), (6, 5)$ quindi 2
	quindi che la somma sia 7 oppure 11 abbiamo un totale di $6 + 2 = 8$ casi
	- (e)
	i casi in cui la somma risulta 8, gli abbiamo già calcolati ed erano $4$
	i casi in cui la somma risulta 9 è $(6, 3),(5, 4), (4, 5), (3, 6)$ quindi $4$
	i casi in cui la somma risulta 10 è $(6, 4), (4, 6)$ quindi $2$
	i casi in cui la somma risulta 11, gli abbiamo già calcolati ed erano $2$
	i casi in cui la somma risulta 12 non è possibile ottenerla senza reinserimento

		il totale di casi è quindi $4 + 4 + 2 + 2 = 12$

## Domanda 5

Un’urna contiene due palle nere e una rossa. Una seconda urna ne contiene una bianca e due rosse. Si estrae a caso una palla da ciascuna urna. Le palle sono tutte distinguibili tra di loro.
- (a) Descrivere uno spazio campionario per quest’esperimento. Quanti elementi contiene?

	lo spazio campionario contiene tutte le coppie di palline.
	dalla prima urna abbiamo 3 possibilità e dalla seconda urna abbiamo 3 possibilità, quindi lo spazio campionario contiene $3\cdot 3 = 9$ elementi
	
- (b) In quanti modi si possono scegliere due palle dello stesso colore?

	l'unico colore condiviso tra le due urne è il rosso, dalla prima urna abbiamo solo una scelta $r$ mentre sulla seconda urna abbiamo due scelte $r_1, r_2$
	i possibili casi sono $(r, r_1), (r, r_2)$ quindi 2 casi.
	(ricordiamo che in questo caso l'ordine non è menzionato come importante nella consegna quindi $(r, r_1)$ e $(r_1, r)$ sono la stessa cosa)
	
- \(c\) E di colore diverso?

	utilizziamo il calcolo che abbiamo appena fatto. sapendo che abbiamo $2$ casi in cui il colore è lo stesso possiamo ottenere i casi in cui il colore è diverso sottraendolo al totale, che ricordiamo è $9$.
	Quindi $9-2 = 7$ possibili modi

## Domanda 6

Un mazzo da 40 carte viene distribuito fra 4 giocatori.
- (a) In quanti modi possibili si possono assegnare le carte a un determinato giocatore?

	Un giocatore riceverà 10 carte delle 40 possibili.
	Per trovare in quanti modi è possibile scegliere 10 carte applichiamo il seguente ragionamento facendo riferimento allo schema presente negli appunti "2023-09-21_Probabilità elementare":
	1. rappresentiamo con $n$ la totalità delle carte, quindi $n = 40$
	2. vogliamo lavorare su un sottoinsieme $k$ di 10 elementi sul totale $n$,  quindi $k = 10$
	3. l'ordine di uscita delle carte non è importante.
	4. le carte sono uniche e quindi non ripetibili
	
	giungiamo quindi alla formula delle combinazioni semplici, applicandola otteniamo:
$$\frac{40!}{10!(40-10)!} = 847660528$$

- (b) Quanti sono i modi possibili in modo che il giocatore abbia 4 Assi?

	utilizziamo lo stesso procedimento di prima:
	1. rappresentiamo con $n$ la totalità delle carte, quindi $n = 40$
	2. ora immaginiamo di dare al giocatore i 4 assi, togliendoli quindi dal totale $n = 40-4 = 36$
	3. vogliamo lavorare sulle carte che mancano al giocatore, cioè un sottoinsieme $k$ di 6 elementi sul totale $n$,  quindi $k = 6$
	4. l'ordine di uscita delle carte non è importante.
	5. le carte sono uniche e quindi non ripetibili
	
	giungiamo quindi alla formula delle combinazioni semplici, applicandola otteniamo:
	$$\frac{36!}{6!(36-6)!} = 1947792$$
	
- \(c\) che abbia almeno una carta di denari?

	quando appare la parola chiave "almeno" dobbiamo quasi sempre applicare il seguente ragionamento:
	1. trovare tutte le combinazioni possibili
	2. trovare il numero di combinazioni con la condizione negata
	3. sottrarre al totale i casi in cui la la condizione è negata

	nel nostro caso specifico:
	1. il totale lo abbiamo già calcolato nel punto (a): $\frac{40!}{10!(40-10)!}$
	2. la nostra condizione negata sarebbe "che abbia nessuna carta di denari".
		per trovare tutti i modi in cui il giocatore non abbia nessuna carta di denari applichiamo lo stesso ragionamento dei punti precedenti:
		
		1. rappresentiamo con $n$ la totalità delle carte, quindi $n = 40$
		2. ora immaginiamo di togliere dal mazzo tutti i denari, $n = 40-10 = 30$
		3. vogliamo lavorare su un sottoinsieme $k$ di 10 elementi sul totale $n$,  quindi $k = 10$
		4. l'ordine di uscita delle carte non è importante.
		5. le carte sono uniche e quindi non ripetibili
		
		giungiamo quindi alla formula delle combinazioni semplici, applicandola otteniamo:
	$$\frac{30!}{10!(30-10)!}$$
	3. non ci resta che fare la sottrazione tra il totale delle combinazioni e le combinazioni senza denari:
	$$\frac{40!}{10!(40-10)!} -\frac{30!}{10!(30-10)!} = 817615513$$

- (d) che abbia non più di 2 Assi?

	spezziamo il caso in 3 sotto casi: che il giocatore abbia:
	- 0 assi
		
		sempre applicando il ragionamento dei punti precedenti:
		$n = 36$ perche togliamo gli assi dal mazzo
		$k = 10$ il giocatore ha bisogno di 10 carte
		$$\frac{36!}{10!(36-10)!}$$
		
	- 1 asso
	
		sempre applicando il ragionamento dei punti precedenti:
		$n = 36$ diamo al giocatore un asso e gli altri 3 gli togliamo dal mazzo
		$k = 9$ il giocatore ha bisogno di 9 carte (ha già un asso)
		ricordiamoci però che possiamo scegliere tra 4 possibili assi da dare al giocatore
		$$4\cdot \frac{36!}{9!(36-9)!}$$

	- 2 assi

		sempre applicando il ragionamento dei punti precedenti:
		$n = 36$ diamo al giocatore 2 assi e gli altri 2 gli togliamo dal mazzo
		$k = 8$ il giocatore ha bisogno di 8 carte (ha già 2 assi)
		ricordiamoci però che possiamo scegliere tra 6 possibili coppie di assi  da dare al giocatore: (calcolabile come combinazione semplice con n = 4 e k = 2)
		$(A_1, A_2), (A_1, A_3), (A_1, A_4), (A_2, A_3), (A_2, A_4), (A_3, A_4)$
		$$6 \cdot \frac{36!}{8!(36-8)!}$$
		
	infine sommiamo le combinazioni di questi 3 casi
$$\frac{36!}{10!(36-10)!} + 4\cdot \frac{36!}{9!(36-9)!} + 6 \cdot \frac{36!}{8!(36-8)!} = 812322016$$

## Domanda 7

Da un mazzo ben mescolato di 52 carte se ne estraggono 5.
- (a) In quanti modi possibili si possono estrarre le carte? Soluzione: 2598960
- (b) Quanti modi ci sono di ottenere un poker? Soluzione: 624
- \(c\) un poker d’assi? Soluzione: 48
- (d) cinque carte dello stesso seme? Soluzione: 5148
- (e) cinque carte di cuori? Soluzione: 1287

## Domanda 8

Tra gli ultimi 90 oggetti (indistinguibili tra di loro) prodotti in una catena di montaggio si sa che 1 su 3 risulta difettoso. Se si prelevano 3 oggetti a caso.
- (a) Quante scelte possibili ci sono? Soluzione: 117480
- (b) Quante con esattamente un oggetto difettoso? Soluzione: 53100
- \(c\) E che almeno uno di essi sia difettoso? Soluzione: 83260

## Domanda 9

In un negozio ci sono 20 computer in vendita di cui 15 sono nuovi e 5 sono stati rinnovati. A prima vista i computer sono indistinguibili fra loro. Vengono acquistati 6 computer per il laboratorio di una scuola.
- (a) In quanti modi si possono scegliere i computer acquistati? Soluzione: 38760
- (b) E sapendo che fra i computer scelti ce ne sono 2 rinnovati? Soluzione: 13650
