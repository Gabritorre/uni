# L'uomo

In una fase di interazione tra l'uomo e la macchina dobbiamo analizzare gli aspetti della macchina, gli aspetti dell'uomo e i modi in cui può avvenire una interazione tra i due.

Partiamo ad analizzare l'uomo.

## Le caratteristiche dell'uomo

L'uomo è caratterizzato da **attributi psicologici e fisici** che possono portare ad avere delle **capacità migliori oppure delle limitazioni** nella fase di interazione con una macchina.

Utilizzeremo un modello che rappresenta l'uomo, tale modello descrive l'uomo con tre componenti:

- Input-output
- Memoria
- Elaborazione

## Input-output

I canali di input e output di cui disponiamo sono i 5 sensi: **vista, udito, tatto, gusto e olfatto**.

Al giorno d'oggi siamo in grado di utilizzare abbastanza bene solo tre di questi (**vista, udito e tatto**), per quanto riguarda gusto e olfatto siamo ancora a modelli di interazione teorici. 

Ci focalizzeremo quindi solo sui primi 3.

## Vista

Il nostro corpo attraverso la ricezione dello stimolo degli occhi e grazie alla successiva elaborazione delle informazioni catturate ci permette di vedere ciò che ci circonda.
Quello che fa l'occhio è sostanzialmente riuscire a trasformare la luce in un impulso elettrico.

Il **contesto** di ciò che vediamo ci permette di eliminare le ambiguità ma anche di creare delle illusioni ottiche.
La percezioni delle **dimensioni** si può facilmente **ingannare con la prospettiva**

- **luminanza**: indica la quantità di luce emessa o riflessa dall'oggetto (un fattore oggettivo)
- **brillantezza**: indica una visione soggettiva della luce, influenzata dal contesto.
- **acutezza visiva**: indica la capacità di distinguere i dettagli, essa aumenta proporzionalmente alla luminanza.
	Con fonti di illuminazione artificiale, l'aumento di luminanza può generare una percezione di **sfarfallio**

### Il colore

Prendiamo in considerazione tre componenti che impattano sulla percezione del colore:

1. **la gradazione**, viene determinata dalla lunghezza d'onda
![enter image description here](https://i.ibb.co/34Hg31L/image.png)
2. l'intensità del colore (colore più acceso o spento)
3. la saturazione (quanta presenza di colore: tendente al bianco e nero oppure a colori molto brillanti)

L'assegnazione di **nome e significato** ai colori e **dipende** molto **dalla cultura** delle persone

### Percezione del colore

I colori dal nostro occhio vengono percepiti da tre tipi diversi di coni che sono sensibili alla luce Rossa, Verde e Blue (RGB).

Il **daltonismo** è un termine generale per riferirsi a deficit quali:

- **Protanopia** (insensibilità al rosso) e **protanomalia** (insufficiente sensibilità al rosso)
- **Deuteranopia** (insensibilità al verde) e **deuteranomalia** (insufficiente sensibilità al verde)
- **Tritanopia** (insensibilità al blu, viola e giallo) e **tritanomalia** (insufficiente sensibilità al blue, viola e giallo)

La diagnosi per determinare il tipo di daltonismo viene fatta con l'utilizzo delle **tavole di Ishihara**

## Udito

L'orecchio è composto da tre parti:
- Orecchio esterno: padiglione e canale uditivo
- Orecchio medio
- Orecchio interno: coclea, labirinto e vestibolo

![enter image description here](https://i.ibb.co/YdZTvbr/image.png)

I suoni si distinguono in base a tre parametri:
- Livello: per riconoscere un suono forte da uno debole
- Altezza: per distinguere un suono acuto (alto) da uno grave (basso)
- Timbro: per riconoscere uno strumento o una voce dall’altra

Le frequenze udibili vanno da **20Hz a 20kHz** (ma dipende molto dall'età della persona)

**Mascheramento**: Un suono più debole è detto "mascherato" se è reso inudibile dalla presenza di un suono più forte, a sua volta detto "mascheratore".
Un suono di frequenza vicina a quella del suono più forte è mascherato più facilmente rispetto a uno di frequenza molto diversa

## Suoni

L'utilizzo dei suoni nella costruzione di una interfaccia è usato principalmente per questioni di abbellimento. Altri possibili utilizzi sono:

- Attirare l'attenzione
- Avvisi sullo stato del sistema
- Avvisi di conferma

**Effetto cocktail**: capacità del sistema uditivo di filtrare i suoni ricevuti per permettere di focalizzarsi su dei suoni specifici (ad esempio focalizzarsi su una conversazione in un ambiente rumoroso)

## Tatto

Il tatto è molto importante nell'interazione in quanto fornisce informazioni vitali sull'ambiente che ci circonda.

Nella costruzione di dispositivi che interagiscono con il tatto è importante considerare che ci sono alcune zone del corpo meno sensibili di altre.

Il tatto dispone di tre recettori:
- Termorecettori (caldo e freddo)
- Chemiorecettori (pressione, calore, e dolore intensi)
- Meccanorecettori (pressioni leggere)

**cinestesia**: capacità di riconoscere la posizione del proprio corpo nello spazio, senza il supporto della vista.
Avviene grazie ai recettori presenti nelle articolazioni

### Tempi

Il **tempo di risposta** ad uno stimolo si calcola come: **tempo di reazione** + **tempo motorio**

Dove:
- **tempo di reazione**: è in funzione al canale sensoriale (un misto di segnali migliora i tempi di reazione), ma in generale:
	- reazione udito: 150ms
	- reazione vista: 200ms
	- reazione dolore: 700ms
- **tempo motorio**: è in funzione dell'età e dello stato di salute della persona
	La **Legge di Fitts** calcola:
	$$\text{tempo motorio} = a + b \log_2\left(\frac{\text{distanza}}{\text{dimensioni}} + 1\right)$$
	Questa legge è utilizzata nel mondo delle interfacce e suggerisce di interagire con oggetti grandi realizzando spostamenti minimi
In ambito di interfacce si traduce con l'utilizzo di pulsanti grandi, zone di interazione non troppo distanti, voci più utilizzate posizionate vicino al punto di inizio.


# La memoria umana

La memoria umana è utile per conoscere fatti, procedure ed identità.

Abbiamo tre tipi di memoria:
- **Buffer sensoriali**
- **Memoria a breve termine**
- **Memoria a lungo termine**

## Buffer sensoriali

Si tratta di una memoria associata a tutti i canali sensoriali e include:
- la memoria iconica (vista)
- la memoria ecoica (udito)
- la memoria aptica (tatto)

Il buffer viene costantemente sovrascritto e i dati che vengono salvati dipendono dal **livello di interesse o di bisogno** (che viene chiamato *arousal*)

## Memoria a breve termine

Si tratta di una memoria ad accesso molto rapido (70ms) e il cui contenuto scompare dopo 200 ms.
La tipica capacità di una comune persona è di memorizzare 7 cifre ($\pm 2$ in base all'età) casuali fornite al momento.

**Effetto recency**: in caso di acquisizione di un elenco di parole scorrelate tra loro, le **ultime** parole vengono ricordati di più.

**Effetto primacy**: in caso di acquisizione di un elenco di parole scorrelate tra loro, le **prime** parole vengono ricordati di più.

Il manifestarsi di interferenza sullo stesso canale sensoriale durante la fase di memorizzazione può avere conseguenze negative sugli effetti *primacy* e *recency*

## Memoria a lungo termine

Si tratta di una memoria ad accesso lento (0.1 secondo) e il cui contenuto può persistere per molto tempo.

Si suddivide in due tipi:
- **memoria episodica**: memorizzare eventi/esperienze con il relativo collocamento nel tempo e nello spazio (è una memoria personale)
- **memoria semantica**: sono memorie relative a conoscenze generali sul mondo derivate dalla memoria episodica (è una memoria comune a tutti)

il ricordo "l'uomo è un mammifero" fa parte della memoria semantica, mentre il ricordo "alle elementari ho imparato che l'uomo è un mammifero" fa parte della memoria episodica.

Nella memoria a lungo termine sono presenti tre principali attività:

### Memorizzare

Studi hanno dimostrato che:
- L'esposizione ripetuta ad uno stimolo migliora la memorizzazione
- Maggior tempo si dedica alla memorizzazione migliori sono i risultati della memorizzazione
- Distribuire lo sforzo in piccole sessioni per un lungo periodo da risultati migliori
- È difficile ricordare dati che non sono significativi
- È più facile memorizzare parole che rappresentano oggetti fisici piuttosto che concetti
- Le frasi sono più facili da ricordare rispetto a parole scorrelate

### Dimenticare

Il decadimento dei ricordi ha un andamento logaritmico (la maggior parte delle informazioni si perdono in poco tempo mentre altre durano per molto)
**legge di Jost**: a parità di intensità del ricordo, rimane più a lungo il ricordo più vecchio

La perdita dei dati è causata da:
- **interferenza retroattiva**: acquisire nuovi ricordi comporta la perdita di quelli vecchi
- **inibizione proattiva**: i vecchi ricordi hanno la meglio su quelli nuovi

### Recuperare

Nella fase di recupero di informazioni distinguiamo:

- **Ricordo**: processo nel quale le informazioni vengono riprodotte dalla memoria
- **Riconoscimento**: processo nel quale il recupero delle informazioni dalla memoria è favorito dalle informazioni presentate al soggetto

## Mnemotecniche

Le mnemotecniche sono delle tecniche che permettono di migliorare la memorizzazione e il recupero delle informazioni, la maggior parte delle tecniche consistono nell'associare l'elemento da ricordare ad un luogo o ad un oggetto familiare oppure associandolo in base alla fonetica della parola.

## Memoria e sicurezza

Per questioni di sicurezza sarebbe sempre opportuno:
- utilizzare password e nomi utenti distinti per ogni servizio
- utilizzare password casuali e difficili da indovinare e ricordare

Varie soluzioni:

- utilizzare un password manager, di cui comunque bisogna sapere la master password.
- Generare  password apparentemente senza senso ma con un significato solo per il soggetto che la crea.
- Nei pin numerici, memorizzare sequenze di immagini al posto che numeri
- Memorizzare un pattern visivo da replicare con delle *gesture* sullo schermo
- Memorizzare un pattern da replicare con un dispositivo di tracciamento degli occhi
- Memorizzare un pattern gestuale da replicare con i movimenti del corpo


# Il pensiero

Gli uomini sfruttano le informazioni in loro possesso per:
- **Ragionare**: trarre delle conclusioni basandosi sulla conoscenza di cui si dispone
- **problem-solving**: trovare dei modi per risolvere dei problemi utilizzano la conoscenza di cui si dispone

## Ragionamento deduttivo

Il ragionamento deduttivo è un tipo di ragionamento che **non presuppone la verità**.
Si basa sul trarre delle conclusioni in base a delle premesse fornite al soggetto.

## Ragionamento induttivo

Si utilizzano casi visti per desumere informazioni sui casi non ancora visti. Nonostante sia **inaffidabile** è molto utilizzare in fase di apprendimento.

Un tipico comportamento è quello di utilizzare solo prove che confermano il nostro ragionamento non andando nemmeno a cercare dei controesempi.

## Ragionamento abduttivo

In questo ragionamento si passa da un fatto all'azione che lo ha generato.
Ad esempio: "Simona mangia sempre molto alla sera quando è andata in palestra"
Applicando il ragionamento abduttivo potrei dire "dopo aver osservato che in una determinata sera Simona ha mangiato molto allora posso dire che è andata in palestra"

Questo metodo è evidentemente inaffidabile in quanto possiamo relazionare delle azioni che in realtà non sono connesse.

Spesso l'applicazione di questo ragionamento nei sistemi interattivi porta al determinare un comportamento errato oppure al confondere la sorgente del problema.
ad esempio: dato che lo schermo è spento allora penso che il computer sia spento e stacco la spina. In realtà lo schermo aveva solo una bassa luminosità.

## Problem solving

Si tratta di trovare una soluzione ad un problema non familiare applicando delle informazioni di cui si dispone. Si divide in due categorie:

- **Comportamentismo**: il problem solving è la riproduzione di risposte già note
- **teoria gestaltica**: il problem solving è un misto tra riproduzione di risposte note e di intuizione

Per acquisire le abilità per fare problem solving è utile:
- raggruppare problemi simili
- inizialmente assodare le regole generali
- attraverso la proceduralizzazione si sviluppano delle regole più specifiche
- attraverso l'esperienza si ottimizzano le regole per applicarle più velocemente

### Errori

Se un **contesto conosciuto cambia**, anche un esperto è più sensibile ad errori.
Un'altra fonte di errori è la **errata comprensione** del problema da risolvere oppure l'**ignorare o mal interpretare** le convenzioni.

La risposta emotiva ad una determinata situazione influenza le azioni da compiere e anche il pensiero:
- Una reazione emotiva negativa può rendere più difficile un compito che in realtà è facile
- Una reazione emotiva positiva riesce a rendere più facile l'esecuzione di problemi difficili

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


# Stili di interazione

## Interfaccia a riga di comando

È una interfaccia ancora molto diffusa e in alcuni casi l'unica possibile.

**Pro**
- accesso diretto alle funzionalità del sistema
- flessibilità (con utilizzo di funzioni e parametri)
- possibilità di applicare il comando a più oggetti contemporaneamente

**Contro**
- apprendimento abbastanza difficile

## Interfaccia a menu

Tramite un dispositivo di puntamento è possibile navigare attraverso dei menu (o una gerarchia di menu).
Lo spostamento e la selezione può anche avvenire tramite un meccanismo di posizionamento discreto.

## Interfaccia a linguaggio naturale

Utilizzare il linguaggio naturale per interfacciarsi con un computer è ancora piuttosto limitato per quanto riguarda la comprensione.
L'utilizzo di un insieme più ristretto di termini migliora di molto la comprensione ma non risulta spontaneo utilizzarlo.

## Interfaccia con dialogo domanda risposta

Adatto per utenti occasionali, il range di scelta è molto limitato.

## Interfaccia con linguaggi di interrogazione

Tipo di interfaccia utilizzata per i database, basato su frasi dichiarative che richiedono una specifica sintassi e la conoscenza della struttura del database.

### Linguaggi visuali

L'interazione avviene attraverso diagrammi, nodi, blocchi grafici, un esempio è il software Scratch.
Risulta più semplice ed intuitivo rispetto ad utilizzare linguaggi testuali ma sono anche meno flessibili e performanti. 
Sono una buona partenza per chi vuole approcciarsi per la prima volta a nuovi software.

Per software molto complessi il linguaggio visuale viene comunque utilizzato anche da chi ha più esperienza per la sua semplicità

## Interfaccia WIMP

WIMP sta per *Window, Icon, Menu, Pointer* che sono gli elementi fondamentali delle interfacce grafiche ancora oggi.

Nell'avanzamento tecnologico si aveva il bisogno di poter eseguire parallelamente più cose e, allo stesso tempo, di semplificare l'interazione e renderla più intuitiva.

### L'utilizzo delle metafore

In generale le metafore vengono usate per insegnare nuovi concetti utilizzando come riferimento quelli già noti.
Questo è avvenuto anche quando si doveva insegnare l'informatica tanti anni fa, da questo derivano alcuni termini informatici che utilizziamo ancora oggi:
ad esempio con le interfacce WIMP viene utilizzata la metafora dell'ufficio e della scrivania di lavoro sulla quale sono disposti gli oggetti con cui interagire (si utilizzano termini come: workspace, desktop, cartelle, cestino, ...)

Un altro importante aspetto e illudere l'utente finale che l'interfaccia con cui interagisce sia il sistema stesso e non un intermezzo per facilitare la comunicazione.

## Manipolazione diretta

È un termine che descrivere i sistemi interattivi, i quali hanno come caratteristiche:

- visibilità degli oggetti
- azioni incrementali e feedback veloce
- reversibilità delle azioni compiute
- ogni azione fatta dall'utente è una operazione ammessa
- agire direttamente sugli oggetti visibili

Non c'è più una distinzione netta tra input e output

comparando manipolazione diretta con quella testuale si può concludere che:
- la manipolazione diretta permette di eseguire compiti più semplici senza commettere errori, ma le attività complesse richiedono una ripetizione manuale delle operazioni.
- nelle interfacce testuali è possibile descrivere una volta sola una operazione che viene riprodotta in automatico quanto si desidera. D'altra parte è più facile commettere errori.

## Interfacce industriali

Utilizzare interfacce WIMP per usi industriali non sempre è una buona idea, in quanto in un ambiente industriale ci si interfaccia con macchine che fanno operazioni nel mondo reale, mentre una interfaccia WIMP lavora su un ambiente virtuale.

L'utente deve ricevere due feedback:
1. generato dall'interfaccia come risposta immediata ad un input
2. generato dal dispositivo collegato all'interfaccia

## Interfacce point and click

Stile di interazione legato alle interfacce WIMP e agli ipertesti per l'uso di un puntatore per la selezione di un elemento

## Elementi interfacce WIMP

### Window

La **finestra** è un'area dello schermo identificata da confini visibili e che ha lo scopo di separare i diversi compiti dell'utente (possono contenere icone e menu o altri elementi dell'interfaccia).

Solitamente le finestre si possono spostare e ridimensionare e sono dotate di una barra del titolo, scroll bar e pulsanti per il ridimensionamento.

la **finestra di dialogo** è un particolare tipo di finestra in cui si chiede all'utente di fare una operazione di apertura/creazione di un nuovo file specificandone il percorso.
Questo tipo di finestre si dividono in:
- **finestre di dialogo modali**: blocca le interazioni con la finestra principale fino a quando l'utente non da OK o annulla alla finestra di dialogo
- **finestre non modali**: non bloccano l'interazione con la finestra principale

Sono solitamente preferibili quelle non modali ma in alcuni casi sono necessarie quelle modali.

### Icon

Le icone servono a rappresentare varie cose tra cui:
- finestre momentaneamente chiuse
- programmi
- files
- dispositivi di memorizzazione
- periferiche

Sebbene le icone possano evitare la presenza del testo in alcuni casi si può cadere nell'ambiguità (dovuta anche al background culturale dell'utente). È necessaria quindi una progettazione molto attenta

### Menu

I menu permettono di accedere a funzionalità relative a file, programmi o una finestra aperta.

I menu hanno una struttura	**lineare, gerarchica, circolare**.

la struttura circolare è più **ingombrante** delle altre ma è anche più **rapida** perché tutte le voci sono alla stessa distanza dal puntatore.

Distinguiamo i menu a discesa (*fall-down*) da quelli a tendina (*pull-down*):
- **a discesa**: si aprono automaticamente al passaggio del puntatore (tipico sui siti web)
- **a tendina**: si aprono cliccando sull'elemento (tipico dei sistemi operativi)

Gli elementi all'interno del menu dovrebbero avere suddivisi per **funzione** e **frequenza di utilizzo**. Funzioni opposte (salva e cancella) dovrebbero essere ben distanziate per evitare click accidentali.

### Pointer

I puntatori servono per identificare la zona attiva, cioè la posizione a cui si sta puntando. Solitamente la specifica zona puntata è determinata dalla punta del puntatore e non dall'intero simbolo.

Al puntatore vengono assegnate forme diverse per differenziare lo stato attuale del sistema.

## Componenti di una interfaccia grafica

I componenti (widget) dell'interfaccia grafica sono i seguenti: 

- **Pulsanti**
	sono aree cliccabili che attivano una determinata operazione come cambiare lo stato del sistema oppure ottenere informazioni.
	Fanno parte di questa categoria anche i **radio button** e i **checkbox** 
- **Toolbar**
	è una collezione di pulsanti disposta verticalmente o orizzontalmente, utilizzata per attivare in modo rapido determinate funzionalità.
- **Palette**
	è una collezione di pulsanti in una area sollevata dal resto della finestra, spesso risulta una alternativa alla toolbar (che invece rimane fissa)
- **Tab**
	è una collezione di pulsanti utilizzata per organizzare delle informazioni raggruppandole in sezioni apposite, Facilita di molto la navigazione. L'utilizzo può portare ambiguità sul tasto conferma in quanto non è chiaro se si confermi la tab corrente o tutta la finestra. La soluzione a questa ambiguità avviene attraverso l'uso di due pulsanti (solitamente "applica" e "ok") oppure tramite una progettazione grafica specifica oppure dando effetto immediato appena avviene la modifica (in alcuni casi però non è consigliato).
- **Ribbon**
	è una evoluzione della toolbar che ospita categorie diverse di entità di interazione organizzate a tab, un esempio è la toolbar di Word

## Interfacce WIMP 3D

Nel corso del tempo sono nate proposte di estensione dell'interfacce WIMP in contesti tridimensionali.

Le proposte riguardano:
- posizionamento delle finestre in uno spazio 3D
- trasformazione dei widget in uno spazio 3D
- l'utilizzo di dispositivi di input/output per l'interazione 3D

Sebbene nei comuni dispositivi questa implementazione non ha preso piene nel mondo della realtà virtuale e realtà aumentata ci sono interessanti applicazioni (interfacce grafiche dei visori).

## Linee guida per le interfacce WIMP

Durante lo sviluppo di una interfaccia sono fondamentali delle linee guida per mantenere la coerenza tra sistema operativo e applicazione e tra le sezioni dell'applicazione stessa.

Le linee guida spesso includono nomenclatura accurata dei diversi elementi che compongono l'interfaccia, questo è importante per la standardizzazione e la documentazione dell'applicazione.
Sono spesso presenti esempi su cosa fare e cosa non fare, sulle convenzioni grafiche, l'utilizzo appropriato del linguaggio ecc...


# Gestures

I gesti nella vita quotidiana sono una forma di comunicazione non verbale in cui si usa corpo, viso e mani per comunicare un messaggio.

La gestualità umana catturata da un sensore può essere utilizzata come forma di interazione.

## Gestualità della mano

I gesti realizzati con le mani si suddividono in:
- **gesti manipolativi**: imitano l'azione nel mondo reale
- **gesti deittici**: indicare persone, oggetti o direzioni
- **gesti simbolici**: convenzioni dipendenti dalla cultura

Nell'ambito dell'interazione con dispositivi possiamo classificare i gesti in due tipi:
- il gesto viene applicato ad una superficie o un artefatto fisico (come il touchpad):
	- *gestures* applicate direttamente sulla superficie in cui viene visualizzata l'interfaccia
	- *gestures* applicate su una superficie diversa da quella dell'interfaccia
- il gesto viene eseguito in aria

Mentre l'uso del mouse è standardizzato e ha una espressività limitata (puoi solo fare drang-and-drop, click singolo, click doppio), l'uso delle **gesture** ha un **elevato grado di espressività** ma **manca di una standardizzazione** in quanto si è studiato che le interazioni dipendono molto dalla cultura.

### Aree premibili

Un fatto non banale dell'uso delle dita per interagire con un dispositivo touch è l'occlusione dello schermo durante la pressione (il dito compre l'area premuta dalla nostra vista).
Si è quindi ricorso a soluzioni come il riproporre la lettere premuta leggermente più in alto del dito oppure di estendere maggiormente l'area cliccabile dei pulsanti.

Le linee guida delle dei vari OS per le interfacce grafiche forniscono informazioni sul distanziamento dei tasti e sulla loro dimensione.

## Switches e Pickers

Una traduzione ormai standard è quella dei checkbox che sono divenuti degli **switches**, che si attivano/disattivano alla pressione oppure al trascinamento

I **Pickers** sono invece dei menu a comparsa che contengono numerose scelte senza occupare troppo spazio.

## Ignorare gli standard dell'interazione

Don Norman e Jacob Nielsen sostengono che nello sviluppo dell'interazione tramite gesti si verificano i seguenti problemi:

- c'è una mancanza di linee guida riconosciute
- le *software house* insistono nel creare nuove convenzioni ignorando quelle già esistenti
- una non curanza da parte degli sviluppatori nel conoscere la storia che ha portato alla normale interazione con i dispositivi

Secondo loro vengono spesso ignorati principi come:
- Visibilità
- feedback
- consistenza e standard
- mancanza dell'*undo*
- scopribilità delle operazioni
- scalabilità su più dimensioni di schermi
- affidabilità su azioni involontarie oppure mancanza di risposta ad azioni volontarie 

## Gesti a mezzaria

Nell'interazione attraverso gesti fatti in aria si presenta una difficoltà ancora maggiore a standardizzare i movimenti, degli studi dimostrano che le persone eseguono movimenti molto diversi per fare le stesse azioni.

Basti solo pensare che nel linguaggio dei segni ci sono moltissime varianti in base al paese di utilizzo, c'é quindi un grande problema di ambiguità.

# Interfaccia per dispositivi mobili

Il processo per fare il design di una applicazione per dispositivi mobili richiede i seguenti step:

- **identificare** un insieme di **requisiti**: contesto di utilizzo, target, informazioni richieste, tecnologia necessaria
- progettare l'**architettura informativa** e la **navigazione**:
	cioè una astrazione (tramite schemi e modelli) di come deve essere organizzata l'applicazione, le interazione tra gli utenti dell'app, come cercare una informazione, come raggruppare e organizzare l'informazione.
	c'è una sottile differenza tra:
	- **dato**: cioè fatti grezzi
	- **Conoscenza**: è quello che le persone sanno
	- **informazioni**: una elaborazione dei dati, non sempre restituisce una informazione universalmente giusta o sbagliata

vediamo le definizioni di:
- **struttura**: riguarda determinare il livello di granularità della dimensione minima dell'informazione e capire come relazionarle tra loro
	- **organizzazione**: significa raggruppare le informazioni in categorie distinte
	- **etichettatura**: riguarda come chiamare le categorie e definire la navigazione che permette di raggiungerle
- realizzare un ***wireframe design***: delle immagini che rappresentano le parti più importanti dell'interfaccia
- implementare un **prototipo**
- **valutare il prototipo**
- implementare un **prototipo avanzato**

## Organizzazione dell'informazione

L'architettura dell'informazione inizia con il capire perché le persone dovrebbero venire sulla propria app, bisogna capire quali bisogni hanno.
Esistono vari **modelli** per definire cosa accade quando un utente cerca una informazione, il modello più semplice è quello di:
$$\text{richiesta esplicita $\to$ elaborazione $\to$ risposta esplicita}$$

Questo, però, è un modello problematico in quanto:
- non sempre le persone sanno cosa vogliono
- spesso gli utenti concludono la propria ricerca con una parziale soddisfazione oppure con frustrazione
- spesso il contesto del bisogno dell'informazione viene tralasciato

Quindi trovare le informazione tramite un semplice metodo algoritmico non è la scelta migliore.

Nella **ricerca di informazioni** si potrebbe essere **interessati** a:
- ottenere una risposta specifica (solitamente riconosciuta come quella corretta)
- ottenere un insieme di risposte
- conoscere tutto riguardo ad un argomento
- riuscire a taggare una risposta in modo da poterla ritrovare facilmente in futuro

le più grandi **difficoltà** nell'organizzare le informazioni sono:

- **ambiguità**: la classificazione è realizzata tramite il linguaggio e il linguaggio può essere ambiguo (generalmente le parole hanno più significati)
- **eterogeneità**: le informazioni sono eterogenee: cioè possono essere classificate in vari modi in base all'aspetto considerato, viene quindi difficile imporre una classificazione specifica
- **differenza di prospettiva**: l'organizzazione delle cose è una aspetto altamente soggettivo e questo crea un problema in quanto risulta difficile creare una struttura comoda per tutti gli utilizzatori
- **politica interna**: Sono sempre presenti dei compromessi tra i vari reparti che compongono l'organizzazione

## Schemi organizzativi

Gli **schemi** permettono di definire le caratteristiche condivise tra i contenuti, in modo da classificarli logicamente

## Schemi organizzativi esatti

L'utilizzo di questi schemi implica che l'utilizzatore sappia cosa sta cercando e sappia dove va cercato, senza presenza di ambiguità.
Schemi di questo tipo sono facili da mantenere, da progettare e da utilizzare, alcuni esempi sono:

- schemi alfabetici
- schemi cronologici
- schemi geografici

## Schemi organizzativi ambigui

Sono schemi che dividono l'informazione in modo soggettivo, risulta quindi difficile fare una classificazione, da usare e da mantenere.

Risultano però molto utili nel caso in cui l'utilizzatore sta cercando di raccogliere più materiale possibile su un argomento oppure se l'utilizzatore non sa esattamente cosa sta cercando (cercando una cosa anche largamente correlata riesci ad ottenere quello che cercavi)

l'**associative learning**: processo in cui gli utenti possono creare nuovi connessioni e raggiungere conclusioni più soddisfacenti tramite delle ricerche che influenzano le successive

## Schemi organizzativi per argomento

Si organizzano le informazioni in base al soggetto o all'argomento, i giornali, libri, dipartimenti, corsi, ecc...  sono organizzati in questo modo.

I raggruppamenti sono spesso associati alla **cultura di riferimento**	

## Schemi task-oriented

Viene suddiviso il contenuto in collezioni di processi e funzioni. Questo tipo di schema è molto presente nelle app mobile e desktop

## Schemi per utenza

Usato quando il servizio ha una netta divisione di tipi di utenti diversi.
Torna molto utile in quanto si personalizza il contenuto in base al tipo di utente, mettendo solo ciò che può interessargli.

Questo tipo di schema può essere:
- **aperto**: permette agli utenti appartenenti ad una tipologia di accedere al contenuto delle altre categorie
- **chiuso**: non permette questo passaggio di categoria

## Schemi per metafore

Usato per introdurre nuovi concetti riferendosi a conoscenze comuni.

Le metafore devono essere una cosa conosciuta ma che allo stesso tempo può risultare limitante rispetto al concetto da far capire. Può succedere che l'utente possa esageratamente l'associamento del concetto alla metafora pensando a delle funzioni che in realtà non esistono.

è quindi difficoltoso da progettare e può risultare inconsistente (infatti non è più utilizzato)

## Schemi ibridi

In alcune schermate possono essere utilizzati più schemi.
È importante che gli schemi siano comunque separati per mantenere i propri vantaggi senza causare confusione.

Torna utile quando si vuole mostrare un insieme di informazioni organizzate in vari modi in base a degli specifici attributi. 

## Struttura organizzativa

La struttura organizzativa definisce le relazioni tra i contenuti e i gruppi.

le strutture includono:
- sequenze
- gerarchie
- ipertesti
- modelli orientati ai database.

Ogni struttura ha i suoi punti di forza e di debolezza.

## Sequenza

È il modo più semplice per organizzare informazioni: in modo sequenziale.

Utilizzato nei siti di educazione deve l'utente deve seguire un percorso (una successione) di materiali.

## Gerarchia

L'informazione viene suddivisa in una gerarchia di relazioni padre-figlio.

Le gerarchie sono presenti nella vita di tutti i giorni (libri, classi sociali, famiglia) e per questo risulta semplice per l'utente capire la struttura dell'informazione e come navigarla.

Gerarchie in cui i nodi possono avere più padri sono dette **poli gerarchiche**

È importante considerare il **bilanciamento tra larghezza e profondità** della gerarchia:
- troppo profonda implica che l'utente deve passare tra numerose pagine prima di raggiungere quella interessata
- troppo larga implica che l'utente ha troppe opzione tra cui scegliere, il che diventa frustrante

## Ipertesto

L'utilizzo degli ipertesti è un modo non lineare per organizzare le informazioni, possiamo pensarlo come ad un grafo.

Un sistema a ipertesti comprende due principali componenti:
- un sottoinsieme di informazioni
- dei link che connettono questi sottoinsiemi

È una organizzazione caratterizzata da una grande flessibilità ma può facilmente creare confusione e diventare complessa da navigare (facile perdersi tra i link)

Solitamente non viene utilizzato come metodo principale ma come supplemento ad altri tipi di organizzazione (spesso quello gerarchico)

![enter image description here](https://i.ibb.co/ZNL5x43/image.png)

## Database

Un altra possibilità è organizzare le informazioni su un modello relazionale di database fatto di tabelle (entità), composte da colonne (attributi) e righe (valori degli attributi).

Risulta particolarmente utile per strutture omogenee.

## Metodi di co-design

Ci sono due interessanti metodi per capire come meglio organizzare le informazioni, il free listing e il card sorting

## Free listing

Questo modo di organizzare permette agli utenti di **creare le proprie etichette** che definiscono il contenuto di un dominio di informazioni.
Gli utenti creano una lista di elementi informativi basandosi su un topic fornitogli.

## Card sorting

Il *card sorting* permette agli utenti essere inclusi nella definizione della struttura informativa.
Gli utenti devono **raggruppare delle etichette già esistenti**.
Ci sono due tipi di sorting:
- **card sorting aperto**: vengono fornite le etichette relative al contenuto del sito/app, ma senza dei gruppi prestabiliti. Gli utenti devono quindi definire anche i gruppi e poi assegnare le etichette al gruppo più adeguato.
- **card sorting chiuso**: vengono fornite sia le etichette relative al contenuto del sito/app che i gruppi in cui mettere le etichette. Gli utenti devono solo assegnare le etichette al gruppo più adeguato

## Tree testing

È un metodo per testare assieme agli utenti un sistema gerarchico.
È l'opposto del card sorting in quanto:
All'utente viene chiesto di trovare, all'interno di una struttura gerarchica già esistente, una determinata informazione.

## Social classification

I social media sono diventati una forma di classificazione dell'informazione generata da utenti che caricano contenuti.

L'utilizzo di **tag** per raggruppare il contenuto è una vera e propria forma di classificazione di informazioni

La **folksonomia** è il risultato di utilizzo libero da parte degli utenti di taggare contenuti (tutto ciò che è raggiungibile via URL)

- **Broad folksonomy**: gli utenti possono dare un tag ad un oggetto anche se esiste già un tag con lo stesso nome allo stesso oggetto. Viene quindi generata una informazione sui tag più utilizzati
- **Narrow folksonomy**: gli utenti possono solo dare tag che non sono stati già dati in precedenza

Nei social network più famosi puoi dare degli *hashtag* ai tuoi contenuti in modo da farli appartenere a categorie specifiche definite dagli utenti stessi.

# Creazione interfaccia mobile

## Sistema di navigazione

È il sistema che ti permette di spostarti tra le varie interfacce.

- **Embedded Navigation Systems**:
	il sistema è composto da vari elementi di base o sotto-sistemi:
	- Globali
	- Locali
	- trasversali
	- integrati nella pagina
- **Supplemental Navigation Systems**
	Si tratta di sistemi esterni alla gerarchia delle pagine del sito che forniscono strumenti supplementari di accesso ai contenuti.
	Forniscono diversi modi di accedere alla stessa informazione.
	- sitemaps
	- indici
	- guide

## Sistemi di navigazione globali

Un sistema di navigazione globale dovrebbe essere presente in ogni pagina.
Permettono all'utente di accedere ad aree indipendentemente dal punto della gerarchia in cui si trova l'utente.

Possiamo distinguere due categorie:
- **Navigazione verticale**: navigazione da padre a figlio, anche con salti più grandi di uno. Spesso implementato sotto forma di **barra di navigazione**. Si utilizzano poi **shortcut**, **back arrow** per risalire la gerarchia, la **breadcrumbs technique** (tecnica a briciole di pane) viene usata per mostrare in che punto della gerarchia ci si trova (immagina il percorso di un *file system*)
- **Navigazione orizzontale**: navigazione tra fratelli (pagine appartenenti allo stesso padre) senza tornare indietro nella gerarchia

## Sistemi di navigazione locali

Il sistema di navigazione globale spesso è composto da uno o più **sistemi di navigazione locali**, che permettono di accedere a funzioni specifiche all'interno dell'app.

## Sistemi di navi trasversale

Alcune relazioni non rientrano nelle navigazioni locali e globali, c'è quindi bisogno di un sistema di navigazione che connette differenti zone dell'app appartenenti a rami della gerarchia diversi, questa viene chiamata navigazione trasversale

![enter image description here](https://i.ibb.co/gFfrPwG/image.png)

Una applicazione spesso ha bisogno di utilizzare tutti i sistemi di navigazione.

## Punti di accesso

Mentre una normale progettazione prevede un unico punto di accesso all'app, corrispondente alla radice della gerarchia, spesso è necessario creare dei nuovi punti di accesso in altre parti.
L'utilizzo di questi ulteriori accessi può essere dovuto ad eventi interni o esterni (come il passaggio di un certo intervallo di tempo, riconoscimento vocale, posizionarsi in un determinato luogo geografico...) e spesso si accede attraverso delle **notifiche**. 
Immagina Whatsapp in cui se aperta normalmente mostra tutte le chat, mentre cliccando una specifica notifica apre direttamente la chat associata.

## Ecosistema di strutture

I punti di accesso possono anche far parte di più strutture gerarchiche indipendenti tra loro.
Immagina le app in cui appena aperta una notifica si apre una specifica sezione e dopo aver dato un "ok" l'app si chiude.

Oltretutto l'app può far parte di un ecosistema di app che può essere progettato per dispositivi diversi che possono interagire (smartphone, smartwatch, laptop, tablet, ...), questo si chiama **cross-device interaction**

## Implementazione di una embedded navigation

La sfida sta nel trovare il bilanciamento tra una progettazione flessibile ma senza sopraffare l'utente con troppe opzioni e troppe scelte.

Bisogna permettere all'utente di identificare facilmente i diversi tipi di navigazione, vediamo quali sono i widget più comuni per la navigazione.

### menu

Un menu è una collezione di collegamenti tra pagine diverse dell'app.
Possono essere usati per navigazione globale, locale e trasversale.

Indicazioni da rispettare:
- Le voci del menu devono sempre rappresentare pagine che appartengono alla stessa struttura.
- Un menu deve rappresentare un solo sistema di navigazione.
- Mantenere sempre l'ordine degli elementi nel menu, indipendentemente da dove ci si trova.
- mostrare tutte le voci del menu, anche quella che rappresenta la pagina in cui si è al momento

### Barre di navigazione

Utilizzate per navigazione verticale e orizzontale.

Spesso posizionati in modo orizzontale nella parte superiore o inferiore dello schermo.
Ci sono casi in cui sono presenti in entrambi i posti, in quel caso quella inferiore rappresenta un livello di navigazione più generico mentre quello superiore è più specifico all'interno della gerarchia.

### Tab

Utilizzati per la navigazione orizzontale.
Permette di spostarsi tra le specifiche sezioni di un nodo.

### Dashboard

La Dashboard dovrebbe permettere di raggiungere tutti i primi livelli della gerarchia.
Viene spesso utilizzata come interfaccia per la home page.

### interfaccia a briciole di pane

Utilizzata per implementare navigazione verticale.

Mostra la localizzazione della pagina corrente all'interno della gerarchia.
Permette facilmente di raggiungere i livelli precedenti, cliccando sul livello desiderato

visualizzato sostanzialmente nel seguente modo:

    Home / Coding / Expert / Chapter1

Solitamente posizionato nella parte alta a sinistra dell'interfaccia.

Un altro utilizzo è quello di avere una visualizzazione (e anche interazione) con gli step di una struttura sequenziale (fase di registrazione, fase di acquisto, tutorial).
In questo caso i livelli precedenti permettono di tornare indietro nella procedura, mentre i livelli successivi non sono interagibili ma permettono di capire quanto manca alla fine.

### Back arrow

Nelle interfaccia su schemi piccoli come smartphone, implementare una interfaccia a briciole di pane non è conveniente (semplicemente perché non ci sta).
In questi casi si utilizza semplicemente un bottone con una freccia verso sinistra per poter risalire la gerarchia nodo per nodo.
Solitamente viene posizionata nella parte alta a sinistra dell'interfaccia.

### Hamburger menu

Sono dei menu a scomparsa attivabili tramite un bottone solitamente posto agli angoli superiori dello schermo.

Permettono di implementare una navigazione globale sugli elementi principali dell'app.
Se questi menu mappano un determinato livello di gerarchia devono offrire accesso a tutti i nodi di tale livello.

Per determinati target di utenza potrebbe non essere intuitivo il loro utilizzo.

### Barre laterali (navigation rail)

Sono una versione minimizzata degli hamburger menu.
Permette un accesso più immediato senza occupare troppo spazio.
Può essere espanso in un hamburger menu tramite un tasto specifico.
È utile per utenti già pratici con l'interfaccia ma non è intuitivo per chi si approccia per la prima volta.

### Liste

Sono una implementazione di navigazione verticale.
Utilizzato per elencare elementi che condividono una struttura comune.

### Caroselli

Utilizzato per elencare elementi che condividono una struttura comune.

C'è un elemento predominante e un insieme di puntini che mostrano la presenza di altri elementi accessibili trascinando a destra o sinistra l'elemento predominante.

Spesso usato negli siti di e-commerce, ma anche utilizzato nella fase di introduzione all'uso di una nuova applicazione.

### Bottoni fluttuanti

Sono dei bottoni circolari che si posizionano sopra l'interfaccia, spesso chiamati "call to action buttons" perché rappresentano una azione che gli utenti utilizzano di più in quella schermata.

Non sono relazionati ad un particolare tipo di navigazione.

Seppur molto utili, hanno degli svantaggi:

- diminuisce l'immersione dell'utente, in quanto hai un bottone fissato sopra l'interfaccia principale
- potrebbe nascondere delle possibili interazioni che si posizionano sotto il bottone

### Splash screen

Una schermata che appare all'avvio dell'app per pochi istanti, utile per il caricamento dell'interfaccia principale e per il riconoscimento dell'applicazione.

### Notifiche

Seppur non facenti parte dell'interfaccia principale possono impattare molto sull'esperienza utente permettendo di avvisare la presenza di eventi o situazioni che richiedono l'attenzione dell'utente.

### Switchers

Sono dei bottoni toggle per abilitare o disabilitare una funzione.
È possibile interagire sia tramite trascinamento sia con singola pressione.
Deve avere una chiara interfaccia per capire in quale stato si trova il toggle (attivo o disattivo)

### Selettori di data

Servono per selezionare una precisa data (anno, mese, giorno).
Possono essere integrati nell'interfaccia già in versione estesa oppure come schermata separata attivabile con un tasto.

### Schermata a scelte

Permette di scegliere una opzioni tra molteplici scelte disponibili.
Sono realizzati su una schermata a parte in quanto con molte opzioni sarebbe difficile da gestire con un pull-down menu

### Pull-down menu

Per liste di scelte piccole si può integrare un menu a discesa, all'interno della stessa schermata.
Può causare selezioni non volute mentre si naviga nell'interfaccia

## Supplemental Navigation Systems

Sono interfacce esterne alla gerarchia principale e provvedono un modo alternativo per trovare del contenuto o per completare delle attività.

La loro presenza può essere un fattore critico per l'usabilità su un sistema molto grande, in quanto la navigazione embedded spesso fallisce per molti utenti.

### sitemap

Presenta la lista dei primi livelli gerarchici dei contenuti del sito, fornendo una visione d'insieme, un po' come il sommario dei contenuti di un libro.
Sono un rafforzamento della gerarchia, in modo che l'utente abbia sempre più chiaro il modo in cui il contenuto è organizzato sul sito.

### Indici

Presenta parole chiave o frasi ordinate alfabeticamente, senza presentare il rispettivo livello gerarchico.
Gli indici alfabetici permettono un accesso diretto ai contenuti e funzionano bene per quegli utenti che sanno già cosa cercare.

### Guide

Possono assumere forme diverse come i tutorial o visite guidate al sito. Sono spesso utilizzate con una finalità di marketing per introdurre nuovi utenti a contenuti e funzionalità a pagamento sul sito.
Le guide di solito propongono una navigazione sequenziale, ma prevedono anche link ipertestuali per aggiungere flessibilità allo strumento.

## Social navigation

La navigazione avviene tramite un sistema di tag utilizzato dagli altri utenti, avviene in due modi:

- poter cliccare un tag associato al contenuto di una data pagina
- poter cliccare un tag associato ad una speciale struttura chiamata **tag clouds** (una rete di tag in cui viene utilizzato un font più grande per i tag più utilizzati)

In entrambi i casi il tag porta ad una pagina intermedia dove sono presenti tutte le pagine che contengono quel tag.

Gli utenti possono sia usufruire di questa rete di tag sia contribuire creando nuovi contenuti aggiungendo nuovi tag oppure quelli esistenti

## Wireframes

Nella progettazione iniziale di una interfaccia, possiamo scegliere i vari widget e creare un wireframe, cioè un prototipo a mo' di schizzo per mostrare l'organizzazione e la posizione dei vari widget.

In questo prototipo non si pensa alla bellezza grafica ma alla relazione tra i componenti e il contenuto

# User experience

La **user experience** riguarda tutti gli aspetti di interazione che ha l'utente finale con la compagnia, il servizio e i suoi prodotti.

L'**UI** si occupa di un **aspetto molto specifico** dell'intera esperienza: la progettazione delle interfacce che una persona utilizza per interagire con un prodotto digitale.
mentre l'**UX** è fortemente improntata alla ricerca, all'analisi e alla comprensione delle esigenze degli utenti.

L'**usabilità** è un aspetto della UI che ricopre: facilità di apprendimento del sistema, efficienza all'uso, gradimento alla vista, ...

## Rappresentare una user experience

La user experience riguarda lo **stato interno dell'utente** (stato d'animo, i bisogni), le **caratteristiche del sistema** (complessità, funzionalità, usabilità) e il **contesto** (tempo e spazio).

Le **storyboard** sono una tecnica di prototipizzazione per rappresentare una user experience considerando gli aspetti sopracitati.

Esistono molti modi per realizzare delle storyboard, cioè un insieme di immagini in cui ogni immagine rappresenta un **momento preciso del tempo**.
Il focus non è la bellezza visiva ma il significato che generano.
Si può passare da dei disegni fatti a mano su carta a creazioni digitali, a fotografie reali, vignette con dialoghi...

Le storyboad si possono categorizzare nei seguenti tipi:

1. **Storyboard sequenziali**: la sequenza di immagini rappresenta una **vicenda che si sviluppa nel tempo linearmente**.
	Ogni immagine è uno stato temporale, spesso la transizione da una immagine all'altra e scaturita da una interazione con l'utente.
	Torna utile mettere delle annotazioni sotto ogni immagine e nelle transizione per esplicitare cosa accade.

2. **Storyboard ramificate**: può capitare che l'interazione possa prendere delle **strade diverse in base all'interazione**. Questo accade quando il sistema da più scelte all'utente.
Ogni immagine avrà possibilmente più transizioni uscenti che portano ad altre immagini, in questo tipo di storyboard è molto importante descrivere le transizioni.

3. **Storyboard narrative**: il focus di questo tipo di storyboard è il **contesto** in cui avvengono, spesso il contesto è dato dal luogo in cui avviene una interazione, dalle persone che ci sono, un particolare oggetto che si trova in prossimità...
Prima di cominciare la realizzazione è fondamentale scrivere una **storyline** che descrive il luogo, i problemi, l'attività principale, le persone coinvolte, i dispostivi coinvolti, le azioni da fare.
La prima immagine serve ad introdurre la storia e si chiama **establishing shot**.
È possibile aggiungere delle **annotazioni** per enfatizzare le azioni e i movimenti.
Queto tipo di storyboard può essere **sia sequenziale che ramificata**


# Modelli di interazione

**L'interazione** è la comunicazione che avviene tra un utente e il sistema.

Perché una interazione abbia successo è necessario che vengano tradotti correttamente il linguaggio dell'utente e quello del sistema.
I modelli di interazione sono utili per identificare le componenti del dialogo e gli eventuali problemi correlati.
Noi vedremo:
- Il ciclo di esecuzione e di valutazione di Norman
- *Interaction framework*

Definiamo innanzitutto alcuni termini:

- **Dominio**: descrive un'area di interesse
- **Obiettivo**: il risultato che si desidera ottenere
- **Interazione**: descrizione della modalità attraverso la quale si intende raggiungere l'obiettivo
- **Compito (task)**: l'articolazione dell'intenzione in azioni

## Ciclo di esecuzione e di valutazione di Norman

Si suddivide in 7 fasi:

1. Stabilire l'obiettivo
2. Concepire l'intenzione
3. Formulare una sequenza di azioni
4. Eseguire le azioni
5. Percepire lo stato del sistema
6. Interpretare lo stato del sistema
7. Valutare lo stato del sistema rispetto all'obiettivo

**Il modello di Normal si concentra solo sull'interfaccia**, che l'utente percepisce come se fosse il sistema.

Il alcuni sistemi può capitare che sia difficile far combaciare:
- la **formulazione delle azioni** con le **effettive azioni** consentite dal sistema
- le **aspettative** di cambiamento dello stato del sistema con **l'effettiva presentazione** dello stato del sistema

## Interaction Framework

Rappresenta una estensione del modello di Norman, nel quale viene esplicitamente considerato il sistema.
Si considerano 4 componenti:
- l'utente
- interfaccia di input
- interfaccia di output
- il sistema

Ogni componente ha il proprio linguaggio, l'interazione consiste nel tradurre questi linguaggi.

Il ciclo di interazione si sviluppa nel seguente modo:

1. **l'utente** formula l'obiettivo e un compito per raggiungerlo
2. **l'interfaccia di input** traduce il linguaggio di input in linguaggio di base e porta il sistema in un nuovo stato
3. **il sistema** renderizza il nuovo stato nel linguaggio di output
4. **l'utente** interpreta il linguaggio di output

Le quattro traduzioni sono:

- **articolazione**: linguaggio utente $\to$ linguaggio di input
- **performance**: linguaggio di input $\to$ stimoli per il sistema
- **presentazione**: risultato del sistema $\to$ linguaggio di output
- **osservazione**: linguaggio di output $\to$ linguaggio utente

Anche in questo modello sono comuni i problemi di traduzione: ambiguità, mancanza di informazioni, poca espressività.


# Ubiquitous computing

Con *Ubiquitous computing* (computazione onnipresente) si intende una evoluzione dell'informatica in cui i dispositivi sono ovunque intorno alla persona.
1. Inizialmente la relazione tra persone e computer era di tipo **molti a uno** (più persone si collegano ad un mainframe)
2. Poi è diventata una relazione **uno a uno** (ogni persona ha il suo computer)
3. mentre oggi con l'ubiquitous computing si ha una relazione **uno a molti** (una persona ha più dispositivi)

Con **pervasive computing** si intende l'intenzione di creare una infrastruttura informatica legata all'ambiente fisico tanto da non rendersi conto della sua presenza.

L'*Ubiquitous computing* si realizza tramite reti wireless, riconoscimento vocale, sistemi di visione, sistemi di elaborazione e di posizionamento basati su penne o touch. In sostanza l'interazione avviene attraverso più sensi e in modalità naturale per noi.

L'esempio più ovvio sono i sensori, cioè dispositivi sempre in ascolto di un determinato input, fisico e virtuale che sia, e che una volta ricevuto generano una azione.
Questi sensori modificano in modo passivo la nostra interazione con l'ambiente circostante.
Ad esempio luci che si accendono al nostro passaggio, porte automatiche, regolazione automatica dell'aria condizionata, ecc...

## Ambient display

Con ambient display si intendono dei mezzi informativi che utilizzano l'ambiente come "display" e come interfaccia utilizzano: luce, suono, movimento, colore, odore, temperatura, ecc...

È importante non intendere il termine "display" con il classico schermo, in questo caso ci si riferisce ad un modo di vedere delle informazioni molto più generale.

## Attenzione periferica

Con **periferia** si indica qualcosa su cui siamo sintonizzati ma a cui non diamo troppa della nostra attenzione.
Gli **ambient display** lavorano sulla **attenzione periferica**, non devono generare uno sforzo cognitivo per recepire l'informazione.

## Context-aware computing

Prima il calcolo interattivo si basava su un input esplicito da parte dell'utente.
Con il **context-aware computing** l'input avviene in maniera più implicita con l'utilizzo di sensori, AI, o scadenze programmate.
Il **contesto** non è solo la posizione in cui si trova il dispositivo ma più in generale si tratta di una qualsiasi informazione rilevante per l'interazione (tempo, condizioni ambientali, l'utente, ...) 

L'utilizzo del contesto è fondamentale per ridurre il carico cognitivo degli utenti per informazioni non utili al momento, ma focalizzarlo per informazioni che si ritiene coerenti con il contesto attuale.

## Prossemica

La **Prossemica** è una disciplina che studia il gesti, il comportamento, lo spazio, le distanza all'interno di una comunicazione (verbale e non)

Per quanto riguarda la distanza in una comunicazione si è studiato che:
- 0-45cm: distanza intima
- 45-120cm: distanza personale con amici
- 1.2-3.5m: distanza sociale tra conoscenti
- +3.5m: distanza pubblica per sconosciuti

## Interazione uomo-machina implicita

*Implicit HCI* o interazione uomo-macchina implicita è l'interazione di un essere umano con l'ambiente e con gli oggetti che lo popolano, allo scopo di raggiungere un obiettivo.
All'interno di questo processo il sistema acquisisce l'input dall'utente in modo implicito (e opzionalmente fornire un output implicito)

Gli input impliciti sono azioni e comportamenti degli esseri umani che non sono direttamente considerati come una interazione con un computer, ma è il computer che li interpreta come input.

## Intelligenza appropriata

Le interfacce intelligenti riguardano l'integrazione di una forma di "intelligenza" spesso basata su euristiche all'interno di contesti di interazione.

La progettazione di una interazione basata su intelligenza appropriata si basa su due principi:
- dovrebbe fare cose buone quando funziona
- non dovrebbe fare cose cattive quando non funziona

Il fatto che le persone ricordino di più le esperienze negative rispetto alle positive, implica che il secondo punto è quello che va migliorato maggiormente.

## Linee guida per sistemi interattivi

1. Per prima cosa si verifica cosa vogliono/devono fare gli utenti
2. Quali sono i passaggi che possono essere automatizzati
3. Implementare la context-awereness per facilitare determinate funzioni
4. ridurre l'*awareness mismatch* cioè il fatto che l'utente non è a conoscenza di tutti i fattori che vanno presi in considerazione per un funzionamento corretto
5. verificare se una soluzione completamente automatizzata è la soluzione migliore oppure se è meglio dare all'utente più controllo

## Interazione continua

È un ramo dell'interazione in sviluppo che si concentra sulla presenza costante di un dispositivo di computazione.
- L'interazione non ha un inizio e una fine ben definiti.
- interruzioni frequenti dato lo spostamento costante dell'attenzione dell'utente
- attività molteplici vengono svolte contemporaneamente in cui è necessaria una coordinazione
- il tempo è una componente fondamentale per una interazione efficiente

# Engagement

Ci poniamo una domanda:
"Quali sono gli indicatori che possiamo utilizzare per valutare l'esperienza utente?"

Ci focalizzeremo sull'**engagement** e altri fattori minori.

## Engagement

L'engagement è un tipo di relazione utente-servizio legato a diversi fattori tra cui la quantità di tempo trascorso in un contesto, quantità di interazioni, coinvolgimento emotivo, coinvolgimento legato all'interesse per l'informazione trovata.

Secondo degli studi l'engagement può essere definito attraverso 6 parametri:

1. **FA** *Focused Attention* (attenzione focalizzata): cioè il coinvolgimento cognitivo dell'utente
2. **PU** *Perceived Usability* (usabilità percepita): cioè l'usabilità percepita dall'utente
3. **AE** *Aesthetics* (estetica): cioè le caratteristiche estetiche dell'esperienza
4. **EN** *Endurability* (durabilità): cioè il desiderio dell'utente di ripetere l'esperienza
5. **NO** *Novelty* (novità): cioè il gradi di novità dell'esperienza con il sistema interattivo
6. **FI** *Felt Involvement* (coinvolgimento emotivo): cioè il coinvolgimento emotivo dell'utente

Questi 6 parametri si influenzano tra loro.

Gli stessi studiosi svilupparono un questionario per misurare l'engagement denominato **UES (User Engagement Scale)**.
Successivamente pensarono che i parametri **NO, FI, EN** sarebbero potuti essere unificati in un singolo fattore chiamato **RE (*reward*)**
Venne poi rivalutato il questionario UES creandone una versione ridotta.

## Oltre l'engagement

L'engagement non è l'unico strumento per valutare l'esperienza utente, altre sono ad esempio:

- *Embodiment*: L’esperienza soggettiva di avere e utilizzare un corpo; include la sensazione di auto-localizzarsi, di agire, di essere proprietari di un corpo
- *Presence*: L’esperienza soggettiva di essere in un luogo o in un ambiente, anche quando si è localizzati fisicamente altrove
- *Immersion*: Lo stato psicologico caratterizzato dal percepire se stessi come avvolti, inclusi e interagenti con un ambiente che fornisce un flusso continuo di stimoli ed esperienze
- *Flow*: La concentrazione intensa e focalizzata sul momento presente come miscela di azione e consapevolezza, la perdita di autocoscienza riflessiva, la sensazione di poter controllare le proprie azioni, la distorsione dell’esperienza temporale e la sperimentazione di un’attività come intrinsecamente ripagante
- *Perceived workload*: È la quantità di lavoro percepito soggettivamente durante l’esecuzione di un compito, si può suddividere in 6 sotto-scale soggettive:
	- richiesta mentale
	- richiesta fisica
	- richiesta temporale
	- prestazione
	- sforzo
	- livello di frustrazione


# Interfacce tangibili

Una interfaccia tangibile (*tangible user interface*, TUI) è un tipo di interfaccia utente nella quale l'utente interagisce con l'informazione digitale attraverso oggetti fisici.

Si introduce un concetto molto importante:
**affordance**: cioè la capacità di un oggetto di comunicare attraverso la sua forma le possibili attività che possono essere compiute attraverso di esso.

Le TUI forniscono rappresentazioni tangibili dell’informazione e dei controlli digitali, permettendo letteralmente agli utenti di afferrare i dati con le loro mani.
Le TUI associano oggetti fisici a dati digitali.
Questi oggetti aumentati possono funzionare sia come strumenti di input che di output, fornendo anche un feedback aptico attivo o passivo sul fatto che una determinata manipolazione sia stata eseguita; in alcuni casi forniscono anche un feedback digitale che informa gli utenti della interpretazione computazionale della loro azione.

Alcuni campi di applicazione per queste interfacce sono:
- apprendimento
- pianificazione
- problem solving
- visualizzazione dell'informazione
- interrogare basi di dati
- programmazione
- intrattenimento

## Vantaggi e svantaggi

I **punti di forza** delle TUI sono i seguenti:

- Collaborazione
- Relazione con il contesto (situadness)
- Utilizzo della gestualità
- Pensiero tangibile
- Azioni epistemiche (azioni che esternalizzano la computazione cognitiva nel mondo per diminuire la difficoltà del compito)
- Parallelismo spaziale (space multiplexing) e azioni dirette 
- Utilizzo dell’iconicità e delle affordances

mentre possiamo elencare i seguenti **punti di debolezza**:

- Scalabilità
- Rischio di perdere gli oggetti fisici
- Versatilità e malleabilità
- Affaticamento dell’utente
- Difficoltà nella realizzazione
- Costi

## Categorie

Possiamo categorizzare la realizzazione di interfacce tangibili in 3 categorie:
1. Oggetti tangibili che si appoggiano su superfici interattive
	tali oggetti vengono chiamati *Pyfo* e solitamente l'oggetto in se non è collegato ad alcuna informazione particolare
2. Sistemi basati su token e vincoli
	un token è un oggetto reale a cui è collegata una informazione digitale
	un vincolo è un oggetto reale che limita il comportamento di un token
3. Assemblaggi di blocchi modulare che si connettono

## Esempio di TUI
https://www.youtube.com/watch?v=ouP9xNujkNo
https://www.youtube.com/watch?v=Mgy1S8qymx0
https://www.youtube.com/watch?v=04v_v1gnyO8


# Realtà mista

La realtà mista (*mixed reality*) è una miscela tra realtà e virtualità, che produce nuovi ambienti e visualizzazioni in cui oggetti virtuali e fisici coesistono ed interagiscono tra di loro in tempo reale.

In questa categoria ricadono tutte le varie sfumature:
- *virtual environment*, dove ogni cosa è virutale
- *augmented virtaulity*, dove ci sono dei oggetti reali in un mondo virtuale
- *augmented reality*, dove ci sono degli elementi virtuali in un mondo reale
- *real environment*, dove ogni cosa è reale

La **realtà virtuale immersiva** corrisponde alla sostituzione della scena reale con una rappresentazione totalmente virtuale, inizialmente riservata solo alla visione, ma successivamente estesa anche all’udito e al tatto.

Nell'ultimo decennio c'è stato un aumento di interesse nella realtà virtuale/realtà aumentata, tramite lo sviluppo di visori indossabili (*headset*)

**Desktop virtual reality**: si riferisce alla simulazione di un mondo 3D che viene mostrato su uno schermo.

## Linee guida

Vediamo delle linee guida che sono state introdotte per migliorare l'esperienza utente nella realtà virtuale:

1. **Navigazione assistita**, cioè proporre vari modi per muoversi nel mondo virtuale
2. **Multimodalità**, permettere all'utente di interagire tramite canali sensoriali multipli
3. **Paradigmi di navigazione multipli**: permettere all'utente di scegliere la modalità di navigazione preferita
4. **Query e navigazione basate su descrizione semantica delle componenti del mondo**: per andare oltre la navigazione in soggettiva e trovare più facilmente le componenti rilevanti di una o più scene tridimensionali

## Augmented reality

Una categoria che negli ultimi anni è più diffusa è la realtà aumentata, cioè la sovrapposizione di una scena reale, osservata direttamente o ripresa da una telecamera, con elementi virtuali di varia natura (testi, immagini, video, modelli 3D)

Ci sono due tipologie di realtà aumentata:

1. la visualizzazione viene aumentata utilizzando il punto di vista dell’utente (esempi di dispositivi: hololens, Magic Leap)
2. la visualizzazione viene aumentata da un punto di vista esterno all’utilizzatore della tecnologia (solitamente una webcam o la camera di uno smartphone) (esempio: Pokèmon Go, Layar, Apple ARKit)

L'utilizzo varia dall'intrattenimento, all'apprendimento, al lavoro.

