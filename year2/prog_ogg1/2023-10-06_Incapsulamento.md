# Incapsulamento

L'incapsulamento è un concetto fondamentale nella programmazione ad oggetti, esso infatti dice che i **dati** devono essere **nascosti** e non **accessibili** direttamente ma solo **attraverso** dei **metodi** che rendono più flessibile operare sui dati.

Lo scopo dell'incapsulamento è garantire la **consistenza dei dati** effettuando dei controlli prima di operare su un campo della classe.
rendere la documentazione più semplice e anche più semplice lavorare con la classe non interessandoci a quali campi possiede ma piuttosto a utilizzare dei metodi che svolgono l'azione per noi (con i dovuti controlli)

Per questo in Java vengono introdotti dei **modificatori di accesso** associabili ai campi e ai metodi:
- **public**: il metodo/campo è accessibile **ovunque**
	generalmente va messo come public le funzionalità più esterne della classe, che chiunque può utilizzare
- **protected**: il metodo/campo è accessibile: nella **classe stessa**, nello **stesso package**, nelle **sottoclassi**
- **default**: il metodo/campo è accessibile: nella **classe stessa** e nello **stesso package**
	come protected e default va messo ciò che l'intero pacchetto software deve utilizzare
- **private**: il metodo/campo è accessibile solo nella **classe stessa**
	come private vanno messi i dettagli implementativi

Generalmente è meglio minimizzare ciò che è accessibile all'esterno, lasciare solo dei metodi controllati accessibili dall'esterno rende il codice meno rompibile.


## Getter e setter

I **getter** sono dei metodi che permettono di ottenere in modalità sola lettura il contenuto di un campo della classe, spesso è un semplice return del campo ma può essere anche un valore calcolato dallo stato dell'oggetto.


I **setter** d'altra parte sono dei metodi che permettono di modificare dei campi della classe, il vantaggio è che prima di aggiornare il campo viene fatto un controllo che il nuovo valore rispetti i vincoli del campo.
