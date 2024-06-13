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

