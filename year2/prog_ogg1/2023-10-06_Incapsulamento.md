# Incapsulamento

L'incapsulamento è un concetto fondamentale nella programmazione ad oggetti, esso infatti dice che i **l'implementazione degli oggetti** deve essere **nascosta** e non direttamente **accessibili**, ma solo **attraverso** delle **interfacce pubbliche**.

Gli scopi dell'incapsulamento sono:
- Garantire la **consistenza dei dati** effettuando dei controlli prima di operare su un campo della classe.
- Rendere la **documentazione più semplice**
- Rendere più semplice lavorare con la classe non interessandoci a come è composta nei dettagli ma piuttosto ad utilizzare dei metodi che svolgono le azioni per noi (con i dovuti controlli)

Per questo in Java vengono introdotti dei **modificatori di accesso** associabili ai campi e ai metodi:
- **public**: il metodo/campo è accessibile **ovunque**
	generalmente va messo come public le funzionalità più esterne della classe, che chiunque può utilizzare
- **protected**: il metodo/campo è accessibile: nella **classe stessa**, nello **stesso package**, nelle **sottoclassi**
- **default**: il metodo/campo è accessibile: nella **classe stessa** e nello **stesso package**
	come protected e default va messo ciò che l'intero pacchetto software deve utilizzare
- **private**: il metodo/campo è accessibile solo nella **classe stessa**
	come private vanno messi i dettagli implementativi

È importante notare una parte importante dell'incapsulamento che è **l'information hiding**, il quale dice che generalmente è meglio minimizzare ciò che è accessibile all'esterno, lasciando accessibili solo dei metodi controllati, questo per rendere il codice più sicuro e consistente.

## Getter e setter

Un prima implementazione dell'incapsulamento viene fatta attraverso i **getter e setter**;

I **getter** sono dei metodi che permettono di ottenere in modalità di sola lettura il contenuto di un campo della classe, spesso è un semplice return del campo ma può essere anche un valore calcolato dallo stato dell'oggetto.

I **setter** d'altra parte sono dei metodi che permettono di modificare dei campi della classe, il vantaggio è che prima di aggiornare il campo viene fatto un controllo che il nuovo valore rispetti i vincoli del campo.
