# Stili di interazione

## Interfaccia a riga di comando

é una interfaccia ancora molto diffusa e in alcuni casi l'unica possibile.

**Pro**
- accesso diretto alle funzionalità del sistema
- flessibilità (con utilizzo di funzioni e parametri)
- possibilità di applicare il comando a più oggetti contemporaneamente

**Contro**
- soglia di apprendimento abbastanza difficile


## Interfaccia a menu

Tramite un dispositivo di puntamento è possibile navigare attraverso dei menu (o una gerarchia di menu.
Lo spostamento e la selezione può anche avvenire tramite un meccanismo di posizionamento discreto.


## Interfaccia a linguaggio naturale

Utilizzare il linguaggio naturale per interfacciarsi con un computer è ancora piuttosto limitato per quanto riguarda la comprensione. 
L'utilizzo di un insieme più ristretto di termini migliora di molto la comprensione ma non risulta spontaneo utilizzarlo.

## Interfaccia con dialogo domanda risposta

Adatto per utenti occasionali e ha un range di scelta molto limitato.

## Interfaccia con linguaggi di interrogazione

Tipo di interfaccia utilizzata per i database, basato su frasi dichiarative che richiedono una specifica sintassi e la conoscenza della struttura del database.

### Linguaggi visuale

L'interazione avviene attraverso diagrammi, nodi, blocchi grafici come su Scratch.
Risulta più semplice ed intuitivo rispetto ad utilizzare linguaggi testuali ma sono anche meno flessibili e performanti. 
Sono una buona partenza per chi vuole approcciarsi per la prima volta a nuovi software.

Per software molto complessi il linguaggio visuale viene comunque utilizzato anche da chi ha più esperienza per la sua semplicità


## Interfaccia WIMP

WIMP sta per *Window, Icon, Menu, Pointer* che sono gli elementi fondamentali delle interfacce grafiche ancora oggi.

Nell'avanzamento tecnologico si aveva il bisogno di poter eseguire parallelamente più cose e allo stesso tempo di semplificare l'interazione e renderla più intuitiva.

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
- nelle interfacce testuali è possibile descrivere una volta sola una operazione che viene riprodotta in automatico quanto si desidera. D'altra parte è più facile commettere errori


## Interfacce industriali

Utilizzare interfacce WIMP per usi industriali non sempre è una buona idea, in quanto in un ambiente industriali ci si interfaccia a macchine che fanno operazione nel mondo reale e una interfaccia WIMP lavora su un ambiente virtuale.

L'utente deve ricevere due feedback:
1. generato dall'interfaccia come risposta immediata ad un input
2. generato dal dispositivo collegato all'interfaccia


## Interfacce point and click

Stile di interazione legato alle interfacce WIMP e agli ipertesti per l'uso di un puntatore per la selezione di un elemento


## Elementi interfacce WIMP

### Window

La **finestra** è un'area dello schermo identificata da confini visibili e che ha lo scopo di separare i diversi compiti dell'utente (possono contenere icone e menu o altri elementi dell'interfaccia).

Solitamente le finestre si possono spostare e ridimensionare e sono dotati di una barra del titolo, scroll bar, pulsanti per il ridimensionamento.

la **finestra di dialogo** è un particolare tipo di finestra in cui si chiede all'utente di fare una operazione di apertura/creazione di un nuovo file specificandone il percorso
Questo tipo di finestre si dividono in:
- **finestre di dialogo modali**: blocca le interazione con la finestra principale fino a quando l'utente non da OK o annulla alla finestra di dialogo
- **finestre non modali**: non bloccano l'interazione con la finestra principale

Sono solitamente preferibili quelle non modali ma in alcuni casi sono necessaria quelle modali.

### Icon

Le icone servono a rappresentare varie cose tra cui:
- finestre momentaneamente chiuse
- programmi
- files
- dispositivi di memorizzazione
- periferiche

Sebbene le icone possano evitare la presenza del testo in alcuni casi si può cadere nell'ambiguità (dovuta anche al background culturale dell'utente). È necessaria quindi una progettazione molto attenta

### Menu

I menu permettono di accedere a funzionalità relative a file, programmi, una finestra aperta.

I menu hanno una struttura	**lineare, gerarchica, circolare**.

la struttura circolare è più **ingombrante** delle altre ma è anche più **rapida** perché tutte le voci sono alla stessa distanza dal puntatore

Distinguiamo i menu a discesa (*fall-down*) da quelli a tendina (*pull-down*):
- **a discesa**: si aprono automaticamente al passaggio del puntatore (tipico sui siti web)
- **a tendina**: si aprono cliccando sull'elemento (tipico dei sistemi operativi)

Gli elementi all'interno del menu dovrebbero avere suddivisi per **funzione** e **frequenza di utilizzo** e funzioni opposto (salva e cancella) dovrebbero essere ben distanziate per evitare click accidentali


### Pointer

I puntatori servono per identificare la zona attiva, cioè la posizione a cui si sta puntando. Solitamente la specifica zona puntata è determinata dalla punta del puntatore e non dall'intero simbolo.

Al puntatore vengono assegnate forme diverse per differenziare lo stato attuale del sistema.


## Componenti di una interfaccia grafica
I componenti (widget) dell'interfaccia grafica sono i seguenti: 

- **Pulsanti**
	sono aree cliccabili che attivano una determinata operazione come cambiare lo stato del sistema oppure ottenere informazioni.
	Fanno parte di questa categoria anche i **radio button** e i **checkbox** 
- **Toolbar**
	è una collezione di pulsanti disposta verticalmente o orizzontalmente, utilizzata per attivare in modo rapido determinate funzionalità
- **Palette**
	è una collezione di pulstanti in una areaa sollevata dal resto della finestra, spesso risulta una alternativa alla toolbar (che invece rimane fissa)
- **Tab**
	è una collezione di pulsanti utilizzati per organizzare delle informazioni raggruppandole in sezioni apposite, Facilita di molto la navigazione. L'utilizzo può portare ambiguità sul tasto conferma in quanto non è chiaro se si confermi la tab corrette o tutta la finestra. La soluzione è attraverso l'uso di due pulsanti (solitamente "applica" e "ok") oppure tramite una progettazione grafica specifica oppure dando effetto immediato alle modifica (in alcuni casi però non è consigliato).
- **Ribbon**
	è una evoluzione della toolbar che ospita categoria diverse di entità di interazione organizzate a tab, un esempio è la toolbar di Word


## Interfacce WIMP 3D

Nel corso del tempo sono nate proposte di estensione dell'interfacce WIMP in contesti tridimensionali.

Le proposte riguardano:
- posizionamento delle finestre in uno spazio 3D
- trasformazione dei widget in uno spazio 3D
- l'utilizzo di dispositivi di input/output per l'interazione 3D

Sebbene nei comuni dispositivi questa implementazione non ha preso piene nel mondo della realtà virtuale e realtà aumentata ci sono interessanti applicazioni.


## Linee guida per le interfacce WIMP

Durante lo sviluppo di una interfaccia sono fondamentali delle linee guida per mantenere la coerenza tra sistema operativo e applicazione e tra le sezioni dell'applicazione stessa.

Le linee guida spesso includono nomenclatura accurata dei diversi elementi che compongono l'interfaccia, questo è importante per la standardizzazione e la documentazione dell'applicazione.
Sono spesso presenti esempi su cosa fare e cosa non fare, sulle convenzioni grafiche, l'utilizzo appropriato del linguaggio ecc...
