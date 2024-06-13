# Il computer

In questa parte andremo a considerare vari dispositivi di Input/Output dei computer.

Prima dei sistemi interattivi si usavano **sistemi batch**, in cui si dava "in pasto" alla macchina delle schede perforate ed essa produceva un output.

## Tastiera

La maggior parte delle tastiere odierne prendono il nome della prima sequenza di tasti presenti su di essa (QUERTY, AZERTY, ...)
Alcuni layout come QWERTY sono nati come rimedio all'inceppamento nelle vecchie macchine da scrivere, sono utilizzate ancora oggi per questioni di abitudine.

È stato dimostrato che il layout DVORAK migliora la velocità e la fatica di digitazione.

I layout diversi variano in base alla lingua del paese in cui si utilizza la tastiera, infatti alcuni layout hanno più lettere di altri, oppure in posizioni più comode in base alla frequenza delle parole delle lingua.

Con il tempo le tipologie di tastiere si sono moltiplicate, andando a modificare ogni aspetto, in base alle esigenze: estetico, latenza di pressione, altezza dei tasti, tecnologia a membrana o meccanica, l'introduzione di tastiere virtuali sui dispositivi mobili.

Una tastiera molto interessante è la **macchina michela** una tastiera fonetica, cioè basata sui suoni delle parole (utilizzata in ambito di discussioni parlamentari per trascrivere i dialoghi in tempo reale ad una velocità notevole). Ha l'aspetto di un piccolo pianoforte in cui i tasti si possono premere contemporaneamente per combinare delle parole

### Tastierino numerico

Il tastierino numerico si può presentare in due forme:
- **formato calcolatrice**: dove i numeri partono dal basso (usato dai computer e dalle calcolatrici)
- **formato telefono**: dove i numeri partono dall'alto (usato dai telefoni e dai bancomat)

Seppure il formato telefono sia oggi ritenuto migliore, il formato calcolatrice è rimasto per questioni storiche legate al fatto che era un modo più conveniente per le calcolatrici meccaniche del passato.

Ai tempi si utilizzava il tastierino numerico anche per comporre messaggi: ad ogni tasto venivano associate 3/4 lettere raggiungibili premendo più volte il tasto.
Alternativamente veniva usato il famoso **algoritmo T9**: si digitavano i numeri solo una volta e le possibili composizioni di parole in base alle lettere assegnate ai numeri venivano determinate attraverso un dizionario di parole (ovviamente non sempre la parola risultante era quella voluta)

## Riconoscimento della scrittura

Un altro metodo di input è quello di scrivere a mano le lettere e un software le riconosce.
Non è molto conveniente per due principali motivi: 
- la velocità di scrittura a mano è molto bassa confrontata alla digitazione con tastiera
- il riconoscimento può essere molto complesso dato che tutti scrivono in modo diverso le lettere

I due aspetti importanti delle scrittura sono: **forma** (l'effettiva forma del carattere) e **tratto** (il movimento fatto per realizzare il carattere)

Un approccio per migliorare questa tecnica è quello ad esempio utilizzato dal software "Graffiti" che cerca di semplificare la rappresentazione delle lettere, dando molta importanza al tratto.

Un ambito molto utile in cui funziona ancora oggi questa tecnica è la **firma su dispositivi digitali touch** (o tramite penne particolari), dove la differenza di forma e tratto sono invece un vantaggio

## Riconoscimento vocale

Nel corso degli ultimi anni i dispositivi che funzionano tramite riconoscimento vocale sono diventati molto diffusi (Alexa, Google home, ecc...).
La loro utilità è ancora limitata a funzioni non importanti in quanto gli indici di riconoscimento non sono ancora troppo affidabili, e tipicamente peggiora nel riconoscere: il **linguaggio naturale**, la presenza di **pause**, piccole **imprecisioni** nel parlato, l'**accento**, la presenza di **rumori di sottofondo**.

Nei sistemi con riconoscimento vocale il problema della **privacy** non è banale, in quanto sono dispositivi sempre in ascolto e funzionano solo se collegati ad Internet

## Dispositivi di puntamento

I dispositivi di puntamento permettono di indicare, selezionare e posizionare elementi di uno schermo, direttamente oppure agendo su un puntatore visualizzato nello schermo:

- Dispositivi di **puntamento indiretto**:
	- **mouse**
		rileva dei movimenti e li passa al computer inducendo lo spostamento del cursore.
		Negli anni ci sono state tante evoluzioni del mouse in base alla tecnologia utilizzata per rilevare lo spostamento (meccanici, laser, ottici).
		Una ulteriore aggiunta è stata quella della *Thumbwheel* (la rotellina)
	- **touchpad**
		è una superficie sensibile al tatto, non è preciso come può esserlo un mouse ma risulta molto comodo per la portabilità.
		Negli anni successivi dopo la sua comparsa sono stati introdotti quelli *mutlitouch* che permettono di realizzare *gesture* più complesse
	- **pointing stick**
		è una protuberanza di gomma posizionata al centro della tastiera che funziona come un *joystick*
	- **trackball**
	- **joystick** (isometrico e assoluto)
	- **tavoletta grafica**
	- **rilevazione dello sguardo**
		generalmente si utilizza un laser a bassa potenza rivolto verso l'occhio.
		Usato sia per il puntamento ma anche per analisi sul comportamento delle persone (monitorare dove si focalizzano maggiormente gli occhi).
		Negli ultimi anni si stanno integrando nei visori a realtà virtuale/aumentata
	- **rilevazione della gestualità**
		dispostivi simili a telecomandi che rilevano la gestualità dell'utente.
		Si possono usare anche delle telecamere che tracciano i movimenti delle mani
	- **posizionamento discreto**
		cambiamento delle posizione prese da un insieme di posizioni possibili
		Viene utilizzato dalla pressione di più tasti o dalla pressione multipla dello stesso tasto (es. spostarsi sulle celle di un foglio di calcolo con le freccette. Scorrere un menu utilizzando i tasti)
- Dispositivi di **puntamento diretto**
	- **Schermo touch**
		molto comodo ed intuitivo ma il dito non è troppo preciso per la selezione di piccoli dettagli a schermo.
		lo schermo deve essere ad una angolazione precisa per una interazione ottimale.
		lo schermo può venir facilmente sporcato
	- **penna ottica**
		una particolare penna utilizzabili sugli schermi capaci di riconoscerla

## Dispostivi di visualizzazione

Le caratteristiche più rilevanti degli schermi sono:
- il numero di pixel
- la profondità di colore del pixel (solitamente 8 bit per canale RGB, ma si stanno diffondendo anche codifiche HDR a 10 o 12 bit per canale)
- la densità dei pixel (quanti pixel ci sono in un pollice di dimensione)

A causa della dimensione finita dell'informazione nei computer è impossibile rappresentare la realtà in ogni forma (visiva, sonora, ecc...), l'informazione pure viene riprodotta sempre in modo discreto.

Negli anni si è avuto sempre di più un aumento del numero di pixel, inizialmente si usava il maggior numero di pixel per **mostrare informazioni aggiuntive**, ma arrivati ad un certo punto si è preferito **migliorare la qualità** delle informazioni presenti.

Le tecnologie per la presentazione della matrice di pixel sono diverse e vanno dal tubo catodico fino agli schermi LCD, LED, OLED.
Quest'ultimi sono caratterizzati da una migliore qualità dell'immagine e variazione di colori, ma soffrono del cosiddetto *burn-in*: cioè la possibile persistenza sullo schermo di una immagine vecchia rimasta visualizzata per un lungo periodo

### Display vettoriali

Sono display che rappresentano l'immagine utilizzando una proiezione laser, raggiungono una definizione dell'immagine molto alta ma in compenso:
- hanno colori scadenti
- affaticano gli occhi

### Fogli digitali

È un foglio formato da materiali sottili e flessibili, i quali contengono delle sfere bianche e nere che ruotano su se stesse per creare l'immagine.
Mantengono l'immagine anche quanto staccati dalla corrente.
Hanno una buona qualità dell'immagine ma sono lenti nel *refresh* dei contenuti e hanno dei limiti sui colori rappresentabili

## Virtual reality

Nella normale interazione con uno schermo 2D si ha tipicamente uno spostamento su due assi $x$ e $y$

In un ambiente tridimensionale di realtà virtuale si hanno 6 gradi di libertà (spostamento e rotazione su tre assi: $x$, $y$, $z$):

![enter image description here](https://i.ibb.co/n3VRWR2/6DOF-svg.png)

- *Roll* -> Rollio
- *Yaw* -> imbardata
- *Pitch* -> Beccheggio

## Tracciamento di testa e mani

Negli anni sono aumentati i dispositivi che tracciano il movimento della testa tramite dei sensori presenti negli *headset* (Head-Mounter Displays, HMD).
I dispostivi di quel tipo devono cercare di ridurre il più possibile la latenza tra il movimento reale l'aggiornamento dell'immagine virtuale, in quanto potrebbe provocare *motion sickness*.

Ci sono poi dispostivi che tracciano il movimento delle mani e delle dita tramite dei controller o dei guanti particolari.
Alternativamente ci sono delle telecamere nel visore che tracciano il movimento delle mani e delle dita, e in presenza di movimenti riconosciuti vengono eseguiti dei comandi

## Tracciamento di gambe e corpo

Tracciare la posizione delle gambe può offrire una maggiore immersività, rendendo disponibile un metodo più naturale del movimento.

È possibili delimitare un area della stanza in cui il visore è capace di riconoscere il movimento oppure utilizzare dei dispositivi particolare che si legano al corpo e rispondono al movimento naturale della persona rimanendo però sul posto (il pavimento si muove ma la persona rimane ferma)

## Tracciamento di espressioni facciali

È una usanza presente da anni nel cinema realizzata con strumentazione professionale, fare la stessa cosa con dei dispositivi indossabili nel privato risulta complesso tuttavia con l'evoluzione delle telecamere dei sensori e dell'IA dispositivi come il Vision Pro di Apple stanno ottenendo risultati più che soddisfacenti.

## Dispositivi di output audio

Esistono numerosi sistemi per riprodurre in output dell'audio, seppur lo scopo sia principalmente per uso estetico ed emotivo può avere interessanti interazioni:

- Orientamento nello spazio
- Messaggi uditivi
- Allarmi

## Dispositivi di ritorno tattile

Dispositivi che offrono una risposta tattile ad determinate azioni.
Sono utilizzati in vari ambiti tra cui:
- Interazione WIMP (Windows, Icons, Menus, Pointer)
- interazione su dispostivi mobili (vibrazione)
- realtà virtuale
- dispostivi embedded

Alcuni dispostivi utilizzano feedback tramite ultrasuoni, quindi senza la necessità che avvenga un tocco.

Ci sono vari progetti che riguardano dispostivi che cambiano il calore, la luminosità, il vento e la vibrazione in base a cosa si sta facendo.

## Dispositivi olfattivi

Riprodurre odori è molto difficile, è complesso simulare i migliaia di recettori nasali per distinguere gli odori e riprodurli con poche miscele non è semplice.

## Controlli fisici

Un'appliance è un dispositivo progettato per un utilizzo specifico, rientrano in questa categoria i *computer appliances* che solitamente sono caratterizzati dalla presenza di controlli fisici (manopole, pulsanti, ecc...).

In questi contesti è importante la posizione dei controlli e anche la qualità delle superfici per rendere l'utilizzo più intuitivo.
Ci si riferisce ad **affordance** per esprimere la capacità di un oggetto fisico di suggerire la funzione a cui è predisposto attraverso la sua forma.

## Sensori ambientali

Sempre di più sono i sensori ambientali che possono rilevare moltissime grandezze fisiche (temperatura, velocità, pressione, rumore, ecc...)

## Sensori corporei

Sono sensori che misurano grandezze legate all'utente, come la sua temperatura, ritmo cardiaco, ecc...

Risulta molto utile per la salute ma anche per la personalizzazione di una interazione in base alle condizione psico-fisiche dell'utente.
Uno degli scopi per evolvere questi sensori è renderli meno invasivi possibile.

