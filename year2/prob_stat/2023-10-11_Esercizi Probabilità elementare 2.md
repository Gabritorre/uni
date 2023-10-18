## Domanda 1

Un esperimento consiste nel chiedere a tre signore, scelte casualmente, se sono iscritte ad un social network.
- (a) Elencare gli elementi dello spazio campionario, usando le lettere Y per “sì” e N per “no”.

	lo spazio campionario è composto da tutte le combinazioni di scelte delle tre signore, quindi:
	$$\Omega = \{(NNN), (NNY), (NYN), (NYY), (YNN), (YNY), (YYN), (YYY)\}$$

- (b) Elencare gli elementi di $\Omega$ corrispondenti all’evento E = “almeno due donne sono iscritte ad un social network”.

	$$\Omega = \{(NYY), (YNY), (YYN), (YYY)\}$$

- \(c\) Definire l’evento i cui elementi sono: $\{(Y, Y, Y ),(N, Y, Y ),(Y, Y, N),(N, Y, N)\}$ . 

	l'evento potrebbe essere "la seconda donna deve essere iscritta ad un social network"

## Domanda 2

Tre componenti sono collegati per formare un sistema come nel diagramma

$\hspace{53mm}| --2--|$
$-----|-- 1 --|-----|\hspace{16mm}|-----$
$\hspace{53mm}| --3--|$

I componenti nel sottosistema 2–3 sono collegati in parallelo, quindi il sottosistema funzionerà se almeno uno dei due singoli componenti funziona. Affinché l’intero sistema funzioni, devono funzionare sia il componente 1 che il sottosistema 2–3. L’esperimento consiste nel determinare la condizione di ciascun componente: S (successo) per un componente funzionante e F (fallimento) per uno non funzionante. Si indichi tutti gli eventi elementari contenuti in ognuno dei seguenti eventi:
- (a) A = Esattamente due componenti funzionano.

	$A = \{(FSS), (SFS), (SSF)\}$
- (b) B = Almeno due componenti funzionano.
		
	$B = \{(FSS), (SFS), (SSF), (SSS)\}$

- \(c\) C = Il sistema funziona.

	$C = \{(SSF), (SFS), (SSS)\}$

- (d) $\bar{C}, A \cup C, A \cap C, B \cup C, B \cap C$

	$\bar{C} = \{(FFF), (FFS), (FSF), (FSS), (SFF)\}$
	$A \cup C = \{(FSS), (SFS), (SSF), (SSS)\}$
	$A \cap C = \{(SFS), (SSF)\}$
	$B \cup C = \{(FSS), (SFS), (SSF), (SSS)\}$
	$B \cap C = \{(SFS), (SSF), (SSS)\}$

## Domanda 3

Una società di consulenza informatica ha attualmente tre progetti in fase di approvazione. Si definiscano gli eventi $A_i${Si approva il progetto $i$ }, per $i = 1, 2, 3$ . Supponiamo che 
$P[A_1] = 0.22,\\ P[A_2] = 0.25,\\ P[A_3] = 0.28,\\ P[A_1\cap A_2] = 0.11,\\ P[A_1\cap A_3] = 0.05,\\ P[A_2\cap A_3] = 0.07,\\ P[A_1 \cap A_2 \cap A_3] = 0.01$ .
Si esprima a parole ciascuno dei seguenti eventi, e si calcoli la sua probabilità:
- (a) $A_1 \cup A_2$
	
	"vengono approvati il progetto 1 oppure 2"
	$P[A_1 \cup A_2] = P[A_1] + P[A_2] - P[A_1 \cap A_2]$
	$P[A_1 \cup A_2] = P[A_1] + P[A_2] - P[A_1 \cap A_2]$
	$P[A_1 \cup A_2] = 0.22 + 0.25 - 0.11 = 0.36$
	
- (b) $\bar{A_1} \cap \bar{A_2}$

	"i progetti 1 e 2 non vengono approvati"
	$P[\bar{A_1} \cap \bar{A_2}] = 1- P[A_1 \cup A_2]$
	$P[\bar{A_1} \cap \bar{A_2}] = 1- 0.36 = 0.64$

- \(c\) $A_1 \cup A_2 \cup A_3$

	"almeno un progetto viene approvato"
	$P[A_1 \cup A_2 \cup A_3] = (P[A_1] + P[A_2] + P[A_3]) - P[A_1 \cap A_2] - P[A_1 \cap A_3] - P[A_2 \cap A_3] + P[A_1 \cap A_2 \cap A_3]$
	$P[A_1 \cup A_2 \cup A_3] =(0.22 + 0.25 + 0.28) - 0.11 - 0.05 - 0.07 + 0.01 =0.53$


- (d) $\bar{A_1} \cap \bar{A_2} \cap \bar{A_3}$
	
	"nessun progetto viene approvato"
	$P[\bar{A_1} \cap \bar{A_2} \cap \bar{A_3}] = 1- P[A_1 \cup A_2 \cup A_3]$
	$P[\bar{A_1} \cap \bar{A_2} \cap \bar{A_3}] = 1- 0.53 = 0.47$

- (e) $\bar{A_1} \cap \bar{A_2} \cap A_3$
	
	"solo il progetto 3 viene approvato"
	$P[\bar{A_1} \cap \bar{A_2} \cap A_3] =P[A_3] - P[A_1 \cap A_3] - P[A_2 \cap A_3] + P[A_1 \cap A_2 \cap A_3]$
	$P[\bar{A_1} \cap \bar{A_2} \cap A_3] = 0.28 - 0.05 - 0.07 + 0.01$


- (f) $(\bar{A_1} \cap \bar{A_2}) \cup A_3$
	
	"o non vengono approvati i progetti 1 e 2 oppure viene approvato solo il progetto 3"
	$P[(\bar{A_1} \cap \bar{A_2}) \cup A_3] = P[\bar{A_1} \cap \bar{A_2}] + P[A_3] - P[\bar{A_1} \cap \bar{A_2} \cap A_3]$
	$P[(\bar{A_1} \cap \bar{A_2}) \cup A_3] = 0.64 + 0.28 - 0.17 = 0.75$
	
## Domanda 4

Da un’indagine svolta presso una certa azienda di ICT è emerso che il 10% dei dipendenti sa programmare in Fortran, il 20% in C++, il 5% in Java. Inoltre il 5% sa usare Fortran e C++, il 3% Fortran e Java, il 2% Java e C++ e l’1% sa programmare in tutti tre i linguaggi.
	
prima di rispondere creiamo un diagramma:

![enter image description here](https://i.ibb.co/v4rTBX2/diagramma.png)
- (a) Scegliendo a caso un dipendente, qual è la probabilità che usi solo C++?

	![enter image description here](https://i.ibb.co/cwkv9CH/c.png)
	$P[\text{c++} \cap \bar{F} \cap \bar{J}] = P[\text{c++}] - P[\text{c++}\cap F] - P[\text{c++} \cap J] + P[\text{c++} \cap F \cap J]$
	$P[\text{c++} \cap \bar{F} \cap \bar{J}] = 0.2 - 0.05 - 0.02 + 0.01 = 0.14$

- (b) E che programmi in Fortran e Java ma non in C++?
![enter image description here](https://i.ibb.co/B2qq98L/FeJ.png)
$P[\,\overline{\text{c++}} \cap {F} \cap {J}] = P[F \cap J] - P[F \cap J \cap \text{c++}]$
$P[\,\overline{\text{c++}} \cap {F} \cap {J}] =0.03 - 0.01 = 0.02$


## Domanda 5

Da un’urna contenente 6 palline numerate da 1 a 6, se ne estraggono due con reinserimento.
- (a) Calcolare la probabilità che la somma dei numeri sulle palline estratte sia 7 o 8?

	$\#\text{casi favorevoli} = 6 (\text{modi per sommare 7}) + 5 (\text{modi per sommare 8}) = 11$
	$\#\text{casi possibili} =6^2 = 36$
	$P[A] = \frac{11}{36}$

- (b) Che sia 7 ottenuto con 2 seguito da 5?
	$\#\text{casi favorevoli} = 1$
	$\#\text{casi possibili} =6^2 = 36$
	$P[B] = \frac{1}{36}$

- \(c\) Che sia 7 o 11?

	$\#\text{casi favorevoli} = 6 (\text{modi per sommare 7}) + 2 (\text{modi per sommare 11})$
	$\#\text{casi possibili} =6^2 = 36$
	$P[B] = \frac{8}{36} = \frac{2}{9}$

- (d) Che sia maggiore di 7?

	$\#\text{casi favorevoli} = 5 (\text{modi per sommare 8}) + 4 (\text{modi per sommare 9}) + 3 (\text{modi per sommare 10})+ 2 (\text{modi per sommare 11}) + 1 (\text{modo per sommare 12})$
	$\#\text{casi possibili} =6^2 = 36$
	$P[B] = \frac{15}{36} = \frac{5}{12}$

- (e) Ripetere l’esercizio nel caso in cui l’estrazione avvenga senza reinserimento.
	
	$\#\text{casi favorevoli} = 6 (\text{modi per sommare 7}) + 4 (\text{modi per sommare 8}) = 10$
	$\#\text{casi possibili} =6\cdot 5 = 30$
	$P[A] = \frac{10}{30} = \frac{1}{3}$

	$\#\text{casi favorevoli} = 1$
	$\#\text{casi possibili} =6\cdot 5 = 30$
	$P[B] = \frac{1}{30}$

	$\#\text{casi favorevoli} = 6 (\text{modi per sommare 7}) + 2 (\text{modi per sommare 11})$
	$\#\text{casi possibili} =6\cdot5 = 30$
	$P[C] = \frac{8}{30} = \frac{4}{15}$

	$\#\text{casi favorevoli} = 4 (\text{modi per sommare 8}) + 4 (\text{modi per sommare 9}) + 2 (\text{modi per sommare 10}) + 2 (\text{modi per sommare 11})$
	$\#\text{casi possibili} =6\cdot 5 = 30$
	$P[D] = \frac{12}{30} = \frac{2}{5}$
## Domanda 6

Qual è la probabilità che in un gruppo di 25 persone ce ne siano almeno 2 che sono nate lo stesso giorno dell’anno (si pensi ad un anno di 365 giorni)?

$P[A]$ è la probabilità che di avere un gruppo di 25 persone che compiono gli anni in giorni differenti

$P[A] = \frac{\text{\#modi di avere compleanni differenti}}{\text{\#totali compleanni}}$

per calcolare i modi di avere compleanni differenti si usano le disposizioni semplici:

$n = 365$
$k = 25$
$\frac{n!}{(n-k)!} = \frac{365!}{(365-25)!} = \frac{365!}{340!}$
in altre parole il primo ha 365 giorni di "scelta" per il compleanno, il secondo ne ha 354, il terzo 353,...

il totale di possibili compleanni è $365^{25}$
la probabilità di avere 25 compleanni diversi è $\frac{\frac{365!}{340!}}{365^{25}}$

noi cerchiamo però la probabilità che almeno due abbiano il compleanno dello stesso giorno, quindi facendo il complemento di "tutti e 25 hanno un compleanno diverso" otteniamo ciò che vogliamo

$$P[\bar A] = 1- \frac{\frac{365!}{340!}}{365^{25}}$$

$$P[\bar A] = 1- \frac{365!}{340!\cdot 365^{25}}$$

## Domanda 7

Un dado bilanciato viene lanciato consecutivamente fino a che non esce la faccia con il 6 per la prima volta. Qual è la probabilità che siano necessari più di 3 lanci?

dire "che siano necessari più di 3 lanci" equivale a dire ce abbiamo bisogno di **almeno** 3 lanci. Ogni qual volta è presente la parola chiave "almeno" bisogna usare la probabilità complementare:

$P[A_{>3}] = 1- P[A_{\leq 3}]$
quindi $1 -$ la probabilità che il 6 esca nei primi tre lanci

$P[A_{>3}] = 1- (P[A_1] + P[A_2] + P[A_3])$

$P[A_1]$ probabilità che esca 6 al primo lancio
$P[A_2]$ probabilità che il primo lancio non esca 6 e nel secondo invece si
$P[A_3]$ probabilità che nel primo e nel secondo lancio non esca 6 mentre nel terzo invece si

$P[A_{>3}] = 1- (\frac{1}{6} + \left(\frac{5}{6}\cdot\frac{1}{6}\right) +\left( \frac{5}{6}\cdot \frac{5}{6} \cdot \frac{1}{6}\right)) =\frac{125}{216} \approx 0.579$

## Domanda 8

In una certa regione, con 15280 abitanti, è stato ipotizzato che il 5% delle persone abbia la pressione alta. Inoltre, che il 75% delle persone con pressione alta beva alcolici, e che questa percentuale sia di solo il 50% tra le persone senza pressione alta. Se queste ipotesi fossero corrette,

disegniamo prima un piccolo grafico:
![enter image description here](https://i.ibb.co/qDTmSL1/ubriachi.png)

- (a) Quale sarebbe il numero di persone con la pressione alta?

	$\#\text{persone con pressione alta} = 15280 \cdot 5 /100 = 764$

- (b) Quale sarebbe il numero di persone che beve alcolici e ha la pressione alta?

	sappiamo già quante persone hanno la pressione alta, da queste calcoliamo quante bevono alcol:
$764 \cdot 75 / 100 = 573$
- \(c\) Quale sarebbe il numero di persone che beve alcolici?

	il totale di persone che bevono alcolici è dato dalla somma tra le persone che bevono che hanno la pressione bassa e le persone che bevono che hanno la pressione alta
	quelli che bevono e hanno la pressione alta sappiamo che sono: $573$
	otteniamo ora quante sono le persone con la pressione bassa: $15280 \cdot 95 / 100 = 14516$
	da questi troviamo quanti bevono: $14516 \cdot 50 / 100 = 7258$

	il totale di persone che bevono è $573 + 7258 = 7831$
	

- (d) Qual è la percentuale di persone con la pressione alta fra quelli che bevono alcolici?

	sappiamo che ci sono 7831 persone che bevono alcolici e sappiamo anche che 573 persone che bevono alcol hanno anche la pressione alta, quindi 573 su 7831.

	$\frac{573}{7831} \approx 0.0732 \to 0.0732 \cdot 100 \approx 7\%$

## Domanda 9

Sul tavolo ci sono due urne: la prima contiene 2 palline nere e 5 bianche e la seconda contiene 3 palline nere e 2 bianche. Si sceglie a caso un’urna, si estrae una pallina e la si depone nell’altra urna. Da quest’ultima si procede dunque all’estrazione di un’altra pallina.

(a) Qual è la probabilità di estrarre due palline bianche?

dobbiamo considerare 
- la probabilità di scegliere la prima urna $= \frac{1}{2}$
- la probabilità di pescare una pallina bianca dalla prima urna $= \frac{5}{7}$
- la probabilità di pescare una pallina bianca dalla seconda urna (ricordandoci che abbiamo aggiunto una pallina bianca) $= \frac{3}{6}$

	uniamo il questo calcolo al calcolo dello stesso ragionamento ma partendo dalla urna 2

	$(P[A] \cap P[B_{+1}]) \cup (P[B] \cap P[A_{+1}]) = \left(\frac{1}{2}\cdot\frac{5}{7} \cdot \frac{3}{6}\right) + \left(\frac{1}{2} \cdot \frac{2}{5} \cdot \frac{6}{8}\right) = \frac{23}{70}$

(b) Qual è la probabilità che la seconda pallina sia nera?

in questo caso dobbiamo unire 4 probabilità:

1. pallina bianca da urna 1 e poi pallina nera da urna 2
2. pallina bianca da urna 2 e poi pallina nera da urna 1
3. pallina nera da urna 1 e poi pallina nera da urna 2
4. pallina nera da urna 2 e poi pallina nera da urna 1


$P[C] = \left(\frac{1}{2}\cdot \frac{5}{7} \cdot \frac{3}{6}\right) + \left(\frac{1}{2}\cdot \frac{2}{5} \cdot \frac{2}{8}\right) + \left(\frac{1}{2}\cdot \frac{2}{7} \cdot \frac{4}{6}\right) + \left(\frac{1}{2}\cdot \frac{3}{5} \cdot \frac{3}{8}\right) = \frac{733}{1680} \approx 0.44$

