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
	Forniscono diverse modi di accedere alla stessa informazione.
	- sitemaps
	- indici
	- guide

## Sistemi di navigazione globali

Un sistema di navigazione globale dovrebbe essere presente in ogni pagina.
Permettono all'utente di accedere ad aree indipendentemente da dove l'utente si trovi nella gerarchia.

Possiamo distinguere due categorie:
- **Navigazione verticale**: navigazione da padre a figlio, anche con salti più grandi di uno. Spesso implementato sotto forma di **barra di navigazione**. Si utilizzano poi **shortcut**, **back arrow** per risalire la gerarchia, **breadcrumbs technique** (tecnica a briciole di pane) usato per mostrare in che punto della gerarchia ci si trova (immagina il percorso di un *file system*)
- **Navigazione orizzontale**: navigazione tra fratelli (pagine appartenenti allo stesso padre) senza tornare indietro nella gerarchia


## Sistemi di navigazione locali

Il sistema di navigazione globale spesso è composto da uno o più **sistemi di navigazione locali**, che permettono di accedere a funzioni specifiche all'interno dell'app

## Sistemi di navi trasversale

In alcuni casi delle relazioni non rientrano nelle navigazioni locali e globali, c'è quindi bisogno di un sistema di navigazione che connette differenti zone dell'app appartenenti a rami della gerarchia diversi

![enter image description here](https://i.ibb.co/gFfrPwG/image.png)

Una applicazione spesso ha bisogno di utilizzare tutti i sistemi di navigazione.


## Punti di accesso

Mentre una normale progettazione prevede un unico punto di accesso all'app, corrispondente alla radice della gerarchia, spesso è necessario creare dei nuovi punti di accesso in altre parti.
L'utilizzo di questi ulteriori accesso può essere dovuto ad eventi interni o esterni (come il passaggio di un certo intervallo di tempo, riconoscimento vocale, posizionarsi in un determinato luogo geografico...) e spesso si accede attraverso delle **notifiche**. 
Immagina Whatsapp in cui se aperta normalmente mostra tutte le chat, mentre cliccando una specifica notifica apre direttamente la chat associata.


## Ecosistema di strutture

I punti di accesso possono anche far parte di più strutture gerarchiche indipendenti tra loro.
Immagina le app in cui appena aperta una notifica si apre una specifica sezione e dopo aver dato un "ok" l'app si chiude.

Oltretutto l'app può far parte di un ecosistema di app che può essere progettato per dispositivi diversi che possono interagire (smartphone, smartwatch, laptop, tablet, ...), termine detto **cross-device interaction**


## Implementazione di una embedded navigation

La sfida sta nel trovare il bilanciamento tra una progettazione flessibile ma senza sopraffare l'utente con troppe opzioni e troppe scelte.

Bisogna permettere all'utente di identificare facilmente i diversi tipi di navigazione, vediamo quali sono i widget più comuni per la navigazione.

### menu

Un menu è una collezione di collegamenti tra pagine diverse dell'app.
Possono essere usati per navigazione globale, locale e trasversale.

indicazioni da rispettare:
- Le voci del menu devono sempre rappresentare pagine che appartengono alla stessa struttura.
- Un menu deve rappresentare un solo sistema di navigazione.
- Mantenere sempre l'ordine degli elementi nel menu, indipendentemente da dove ci si trova.
- mostrare tutte le voci del menu, anche quella che rappresenta la pagina in cui si è al momento

### Barre di navigazione

Utilizzate per navigazione verticale e orizzontale.

Spesso posizionati in modo orizzontale nella parte superiore o inferiore dello schermo,
Ci sono casi in cui sono presenti in entrambi i posti, in quel caso quella inferiore rappresenta un livello di navigazione più generico mentre quello superiore è più specifico all'interno della gerarchia

### Tab

Utilizzati per la navigazione orizzontale

permette di spostarsi tra le specifiche sezioni di un nodo

### Dashboard

La Dashboard dovrebbe permettere di raggiungere tutti i primi livelli della gerarchia.
Viene spesso utilizzata come interfaccia per la home page.

### interfaccia a briciole di pane

Utilizzata per implementare navigazione verticale.

Mostra la localizzazione della pagina corrente all'interno della gerarchia.
Permette facilmente di raggiungere i livelli precedenti, cliccando sul livello desiderato

visualizzato sostanzialmente nel seguente modo:

    Home / Coding / Expert / Introduction

Solitamente posizionato nella parte alta a sinistra dell'interfaccia

Un altro utilizzo è quello di avere una visualizzazione (e anche interazione) con gli step di una struttura sequenziale (fase di registrazione, fase di acquisto, tutorial).
In questo caso i livelli precedenti permettono di tornare indietro nella procedura, mentre i livelli successivi non sono interagibili ma permettono di capire quanto manca alla fine


### Back arrow

Nelle interfaccia su schemi piccoli come smartphone, implementare una interfaccia a briciole di pane non è conveniente (semplicemente perché non ci sta).
In questi casi si utilizza semplicemente un bottone con una freccia verso sinistra per poter risalire la gerarchia nodo per nodo

Solitamente posizionato nella parte alta a sinistra dell'interfaccia


### Hamburger menu

Sono dei menu a scomparsa attivabili tramite un bottone solitamente posto agli angoli superiori dello schermo.

Permettono di implementare una navigazione globale sugli elementi principali dell'app.
Se questi menu mappano un determinato livello di gerarchia devono offrire accesso a tutti i nodi di tale livello.

Per determinati target di utenza potrebbe non essere intuitivo il loro utilizzo.

### Barre laterali (navigation rail)

Sono una versione minimizzata degli hamburger menu.
Permette un accesso più immediato senza occupare troppo spazio.
Può essere espanso in un hamburger menu tramite un tasto specifico.
é utile per utenti già pratici con l'interfaccia ma non è intuitivo per che si approccia per la prima volta.


### Liste

Sono una implementazione di navigazione verticale
Utilizzato per elencare elementi che condividono una struttura comune.

### Caroselli

Utilizzato per elencare elementi che condividono una struttura comune.

C'è un elemento predominante e un insieme di puntini che mostrano la presenza di altri elementi accessibili trascinando a destra o sinistra l'elemento predominante.

Spesso usato negli siti di e-commerce, ma anche utilizzato nella fase di introduzione all'uso di una nuova applicazione.

### Bottoni fluttuanti

Sono dei bottoni circolare che si posizionano sopra l'interfaccia, spesso chiamati "call to action buttons" perché rappresentano una azione che gli utenti utilizzano di più in quella schermata.

Non sono relazionati ad un particolare tipo di navigazione.

Seppur molto utili, hanno degli svantaggi:

- diminuisce l'immersione dell'utente, in quanto hai un bottone fissato sopra l'interfaccia principale
- potrebbe nascondere delle possibili interazioni che si posizionano sotto il bottone

### Splash screen

Una schermata che appare all'avvio dell'app per pochi istanti, utile per il caricamento dell'interfaccia principale e per il riconoscimento dell'applicazione

### Notifiche

Seppur non facenti parte dell'interfaccia principale possono impattare molto sull'esperienza utente permettendo di avvisare la presenza di eventi o situazione che richiedono l'attenzione dell'utente.

### Switchers

Sono dei bottoni toggle per abilitare o disabilitare una funzione.
È possibile interagire sia tramite trascinamento sia verso singola pressione.
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

presenta parole chiave o frasi ordinate alfabeticamente, senza presentare il rispettivo livello gerarchico.
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
