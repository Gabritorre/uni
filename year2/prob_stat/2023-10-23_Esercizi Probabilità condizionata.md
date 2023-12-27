# Esercizi sulla probabilità condizionata

## Domanda 1

Una cartella contiene 50 file eseguibili. Quando un certo virus attacca il sistema, danneggia un file con probabilità 0.2. Calcolare la probabilità che durante un attacco vengano danneggiati 15 file.

$n = 50$
$k = 15$

evento D = "il file è danneggiato"
$P[D] = 0.2$

usando la formula della probabilità delle popolazioni con reinserimento

$$P[D_{k}] = \binom{n}{k}\left(\frac{m}{N}\right)^k\left(1-\frac{m}{N}\right)^{n-k}$$

abbiamo $\binom{n}{k}$ modi di scegliere $\left(\frac{m}{N}\right)^k$ file che hanno la caratteristica di essere infetti e $\left(1-\frac{m}{N}\right)^{n-k}$ che hanno non hanno la caratteristica

$$P[D_{15}] = \binom{50}{15}\left(0.2\right)^{15}\left(1-0.2\right)^{50-15}$$

$$P[D_{15}] = \binom{50}{15}\left(0.2\right)^{15}\left(0.8\right)^{35} = 0.0299$$

## Domanda 2

La probabilità che il disco fisso di un server venga danneggiato è 0.01. Per questa ragione ci sono due backup indipendenti fra loro e dal disco fisso, che hanno ciascuno probabilità 0.02 di non funzionare. L’informazione salvata viene persa solo nel caso sfortunato in cui tutti tre i componenti smettono di funzionare. Qual è la probabilità che l’informazione venga salvata?

Consideriamo la probabilità che l'informazione venga persa e poi tramite l'evento complementare troviamo la probabilità che l'informazione venga salvata.

$A$ evento "disco fisso viene danneggiato"
$P[A] = 0.01$
$B$ evento "il backup non funziona"
$P[B] = 0.02$

$C$ evento "l'informazione non viene salvata"
dato che i backup sono indipendenti tra loro e anche dal disco fisso possiamo calcolare la sua probabilità come:
$P[C] = 0.01 \cdot 0.02 \cdot 0.02 = 0.000004$

Quindi la probabilità che l'informazione venga salvata è 

$P[\bar C] = 1 - 0.000004 = 0.999996$

Soluzione: 0.999996

## Domanda 3

Il lancio di uno shuttle è controllato da tre dispositivi elettronici che agiscono indipendentemente l’uno dall’altro. I dispositivi hanno una probabilità di malfunzionamento di 0.01, 0.02 e 0.02 rispettivamente. Il malfunzionamento di almeno uno dei dispositivi causa il ritardo del lancio. Calcolare la probabilità che il lancio dello shuttle avvenga in orario.

Otteniamo la probabilità che il lancio avvenga in orario facendo l'evento complementare della probabilità che ogni componente fallisca

$A_1$ evento "dispositivo 1 funziona"
$P[A_1] = 1- 0.01 = 0.99$

$A_2$ evento "dispositivo 2 funziona"
$P[A_2] = 1- 0.02 = 0.98$

$A_3$ evento "dispositivo 3 funziona"
$P[A_3] = 1- 0.02 = 0.98$

$B$ evento "il lancio avviene in orario" che avviene se A_1 **e** A_2 **e** A_3

$P[B] = P[A_1] \cdot P[A_2] \cdot P[A_3]$

$P[B] = 0.99 \cdot 0.98 \cdot 0.98 = 0.9508$


## Domanda 4

E’ stato rilevato che il 5% delle persone abitanti in una certa zona ha la pressione alta. Inoltre il 75% delle persone con pressione alta beve alcolici, mentre solo il 50% delle persone senza pressione alta beve alcolici. Qual è la percentuale di persone con la pressione alta fra quelli che bevono alcolici?

elenchiamo gli eventi con le relative probabilità che abbiamo nel testo

$A$ = abitanti con la pressione alta
$P[A]$ = 0.05

$\bar A$ = abitanti con la pressione bassa
$P[\bar A]$ = 0.95

$B$ = abitanti che bevono alcol
$\bar B$ = abitanti che non bevono alcol

$P[B|A] = 0.75$

$P[B|\bar A] = 0.5$

l'esercizio ci chiede la probabilità di $[A|B]$, che si può calcolare con la formula di Bayes:

$$P[A|B] = \frac{P[A\cap B]}{P[B]}$$

$P[A\cap B] = P[A] \cdot P[B|A] = 0.05 \cdot 0.75 = 0.0375$
$P[B] =P[A] \cdot P[B|A] + P[\bar A]\cdot P[B|\bar A]$
$\hspace{8.6mm}= 0.05 \cdot 0.75 + 0.95 \cdot 0.5 = 0.5125$

$$P[A|B] = \frac{0.0375}{0.5125} = 0.0732$$

## Domanda 5

$C_1$ e $C_2$ sono una partizione di $\Omega$ e hanno la stessa probabilità. Se l’evento A è tale che $P[A|C_1] = P[A|C_2] = \frac{1}{2}$, si calcoli la $P[C_1|A]$.

Dato che le due partizioni hanno la stessa probabilità, questa probabilità deve essere $\frac{1}{2}$

Anche in questo caso utilizziamo la formula di Bayes per calcolare $P[C_1|A]$

$$P[C1|A] = \frac{P[C_1\cap A]}{P[A]}$$

$P[C_1\cap A] = P[C_1] \cdot P[A|C_1] = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$
$P[A] = P[C_1]\cdot P[A|C_1] + P[C_2] \cdot P[A|C_2] = \frac{1}{2}\cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{2}$

$$P[C1|A] = \frac{\frac{1}{4}}{\frac{1}{2}} = \frac{1}{2}$$

## Domanda 6

Gli spyware che minacciano un sistema informatico vengono veicolati tramite il Web nel 70% dei casi, e tramite email il 30% delle volte. Se gli spyware provengono dal Web, il sistema li rileva istantaneamente con probabilità 0.6. Se sono veicolati dalle email, vengono rilevati con probabilità 0.8. 
- (a) Con quale percentuale è rilevato lo spyware? Soluzione: 0.66
- (b) Se uno spyware viene rilevato, qual è la probabilità che sia arrivato via email? Soluzione: 0.3636

Abbiamo le due partizioni:

$A$ = spyware veicolato via web
$P[A] = 0.7$
$\bar A$ = spyware veicolato via email
$P[\bar A] = 0.3$

mentre abbiamo un evento:

$B$ = il sistema rileva lo spyware
$P[B|A] = 0.6$
$P[B|\bar A] = 0.8$

- (a) calcoliamo $P[B]$ sommando la probabilità che venga rilevato via web e via email

	$P[B] = P[A] \cdot P[B|A]  + P[\bar A] \cdot P[B|\bar A]$
	$\hspace{8.6mm}=0.7 \cdot 0.6 + 0.3 \cdot 0.8 = 0.66$

- (b) calcoliamo $P[\bar A|B]$ utilizzando la formula di Bayes

	$$P[\bar A|B] =\frac{P[\bar A \cap B]}{P[B]}$$

	$P[\bar A \cap B] =P[\bar A]\cdot P[B|\bar A] = 0.3 \cdot 0.8 =0.24$
	$P[B] = 0.66$

	$$P[\bar A|B] =\frac{0.24}{0.66} = 0.3636$$

## Domanda 7

Un oggetto su 3 prodotti in una catena di montaggio risulta difettoso.
- (a) Se si prelevano 3 oggetti a caso, qual è la probabilità che esattamente uno di essi sia difettoso? 

	usando la formula della probabilità delle popolazioni con reinserimento
	
	$$P[D_{k}] = \binom{n}{k}\left(\frac{m}{N}\right)^k\left(1-\frac{m}{N}\right)^{n-k}$$
	
	$$P[D_{1}] = \binom{3}{1}\cdot \left(\frac{1}{3}\right)^1 \cdot \left(1-\frac{1}{3}\right)^2$$
	
	$$P[D_{1}] = 3\cdot \frac{1}{3} \cdot \left(\frac{2}{3}\right)^2 = \frac{4}{9}$$

	la probabilità che esattamente uno sia difettoso su tre è data:
	- dalla probabilità che uno sia difettoso, quindi $\frac{1}{3}$
	- dalla probabilità che il secondo non sia difettoso, quindi $\frac{2}{3}$
	- dalla probabilità che il terzo non sia difettoso, quindi $\frac{2}{3}$

	quindi $\frac{1}{3} \cdot \frac{2}{3} \cdot \frac{2}{3}$

	però il pezzo difettoso può essere in 3 diverse posizioni: il primo, il secondo e il terzo, quindi la probabilità che abbiamo ottenuto va moltiplicata per 3

	$3\cdot(\frac{1}{3} \cdot \frac{2}{3} \cdot \frac{2}{3})$


- (b) E che almeno uno di essi sia difettoso?

	parola chiave **almeno** e quindi usiamo l'evento complementare

	$A$ = tutti i pezzi sono corretti
	$\bar A$ = almeno un pezzo è difettoso

	$P[A] = \frac{2}{3} \cdot \frac{2}{3} \cdot \frac{2}{3} = \frac{8}{27}$

	$P[\bar A] = 1 - \frac{8}{27} = \frac{19}{27}$
	
	oppure potevamo usare sempre la formula delle popolazioni

$$1-P[D_{0}] =1- \binom{3}{0}\cdot \left(\frac{1}{3}\right)^0 \cdot \left(1-\frac{1}{3}\right)^3$$

$$1-1\cdot 1 \cdot \left(\frac{2}{3}\right)^3$$

$$1- \frac{8}{27} = \frac{19}{27}$$

## Domanda 8

Nel sistema in figura, ogni componente (indicato con $O$) si danneggia con probabilità 0.3, indipendentemente dagli altri. Si calcoli l’affidabilità del sistema. 
$\hspace{16.7mm}|---O---|\hspace{18.3mm}|---O---|$
$A----|---O---|-----|\hspace{25.5mm}|----B$
$\hspace{16.7mm}|---O---|\hspace{18.3mm}|---O---|$

Abbiamo due blocchi in serie che hanno all'interno dei componenti in parallelo.

L'affidabilità del sistema è la probabilità che funzioni.
Dato che i due blocchi sono in serie la probabilità che funzioni è data dalla probabilità che il primo blocco funzioni **e** il secondo blocco funzioni.

Il primo blocco funziona se almeno 1 dei componenti al suo interno funziona
$B_1$ = il blocco 1 funziona
$P[B_1] = 1-(0.3 \cdot 0.3 \cdot 0.3) = 0.973$

Il secondo blocco funziona se almeno 1 dei componenti al suo interno funziona
$B_2$ = il blocco 2 funziona
$P[B_2] = 1-(0.3 \cdot 0.3) = 0.91$

$A$ il sistema funziona

$P[A] = P[B_1]\cdot P[B_2] = 0.973 \cdot 0.91 = 0.88543$


## Domanda 9

Un’azienda che assembla computer riceve il 24% dei componenti dal fornitore X, il 36% dal fornitore Y e il rimanente 40% dal fornitore Z. Risultano difettosi il 5% dei componenti forniti da X, il 10% dei componenti forniti da Y e il 6% dei componenti forniti da Z. Se un computer assemblato presenta un componente difettoso, qual è la probabilità che questo componente sia stato fornito da Z?


i fornitori rappresentano una partizione:

$X$ = il componente proviene dal fornitore X
$P[X] = 0.24$

$Y$ = il componente proviene dal fornitore Y
$P[Y] = 0.36$

$Z$ = il componente proviene dal fornitore Z
$P[Z] = 0.4$

Abbiamo un evento:

$A$ = il componente è difettoso

$P[A|X] = 0.05$
$P[A|Y] = 0.1$
$P[A|Z] = 0.06$

Ci viene chiesta la $P[Z|A]$, la calcoliamo utilizzando la formula di Bayes

$$P[Z|A] = \frac{P[Z \cap A]}{P[A]}$$

$P[Z \cap A] =P[Z] \cdot P[Z|A] = 0.4 \cdot 0.06 = 0.024$

$P[A] = (P[X]\cdot P[A|X]) + (P[Y]\cdot P[A|Y]) + (P[Z]\cdot P[A|Z])$

$\hspace{8.6mm}= (0.24\cdot 0.05) + (0.36 \cdot 0.1) + (0.4\cdot 0.06) = 0.072$

$$P[Z|A] = \frac{0.024}{0.072} = \frac{1}{3}$$

## Domanda 10

Il 20% di tutti i componenti prodotti da un impianto è sottoposto ad un particolare test elettronico. Un componente che supera il test elettronico risulta privo di difetti con probabilità 0.95. Se un componente non viene testato elettronicamente, è privo di difetti con probabilità 0.7. Un cliente riceve un componente difettoso. Qual è la probabilità che questo sia stato testato elettronicamente?

Il test rappresenta un partizionamento

$T$ = test ai componenti effettuato
$P[T] = 0.2$
$P[\bar T] = 0.8$

abbiamo un evento

$A$ = componente privo di difetti

$P[A|T] = 0.95$
$P[A|\bar T] = 0.7$

il testo ci chiede la $P[T|\bar A]$, che troviamo con la formula di Bayes

$$P[T|\bar A] = \frac{P[T \cap \bar A]}{P[\bar A]}$$

$P[T \cap \bar A] = P[T] \cdot P[\bar A|T] = 0.2 \cdot (1- 0.95) = 0.01$

$P[\bar A] = (P[T]\cdot P[\bar A|T]) + (P[\bar T]\cdot P[\bar A | \bar T])$
$\hspace{8.4mm}= (0.2\cdot (1-0.95)) + (0.8\cdot (1-0.7)) = 0.25$

$$P[T|\bar A] = \frac{0.01}{0.25} = 0.04$$
