# Identificazione

Passiamo ora a discutere della sicurezza nell'**identificazione di un utente** o in un sistema informatico o una rete.

L’identificazione o autenticazione di un utente o in generale di una entità è un processo fondamentale per la regolazione dell’**accesso ad una risorsa**.

Un tipico esempio di identificazione è l’autenticazione tramite username e password, in cui il sistema chiede di fornire un username e una password, il sistema controllerà le credenziali fornite con quelle già in suo possesso per validare l’autenticazione.

Un buono schema di autenticazione serve ad **impedire** che una entità si **impersonifichi** per qualcun’altra.

## Classi di schemi di identificazione

Vediamo delle categorie che raggruppano gli schemi di identificazione, tali schemi si possono basare su:

- un segreto che si **conosce**: password, passphrase, PIN, chiavi crittografiche
- un oggetto che si **possiede**: Carta di credito, smartphone
- una **caratteristica** biometrica che si **possiede**: firma cartacea, impronta digitale, volto e voce, retina dell’occhio

## Password

L’autenticazione tramite password presenta alcuni problemi:

1. Può essere **intercettata**.
    
    È importante usare canali cifrati, come *HTTPS*
    
2. Può essere **indovinata.**
    
    È importante usare password forti.
    
    Inoltre il sistema deve implementare un meccanismo per limitare i tentativi possibili
    
3. Può essere **salvata** nel server **in modo non sicuro.**
    
    È importante che il server non memorizzi le password in chiaro, bensì un hash di esse.
    

## Funzioni hash

Una **funzione di hash** è una funzione che calcola un valore di lunghezza fissa, chiamato *digest*, da un input di dimensioni arbitrarie. Sebbene le **collisioni** siano possibili (cioè che input diversi generano lo stesso hash), le funzioni di hash unidirezionali rendono **computazionalmente impossibile recuperare una password dal suo hash**.

Quindi un server nel momento del login **confronta gli hash** e non le password in chiaro.

Funzioni hash molto utilizzate oggi e ritenute essere sufficientemente sicure sono le SHA-2 che producono hash da 224 bit in su.

Un comando per ottenere l’hash di una stringa di testo su Linux:

```bash
$ echo -n "mypassword" | sha256sum
89e01536ac207279409d4de1e5253e01f4a1769e696db0d6062ca9b8f56767c8 -
```

Un altro utilizzo delle funzioni hash è per controllare **l’integrità di file**.

Dai seguenti comandi si nota che la modifica del file viene rilevata confrontando gli hash dello stesso file prima e dopo la modifica:

```bash
$ echo "ciao" > file.txt
$ sha256sum file.txt > checksum
$ sha256sum -c checksum
file.txt: OK
$ echo "modifica" > file.txt
$ sha256sum -c checksum
file.txt: FAILED
sha256sum: WARNING: 1 computed checksum did NOT match
```

## Attacchi offline

Nonostante l’uso delle funzioni hash, usare password forti è comunque importante per proteggersi da **attacchi brute force offline** su cui non è possibile limitare il numero di tentativi.

Inoltre è possibile usare un attacco a **rainbow tables**, che consiste nel avere una lista di associazioni di password comuni con il rispettivo hash già calcolato, se l’attaccante riuscisse ad ottenere l’hash di una password, con una semplice ricerca nella rainbow table otterrebbe la rispettiva password (se presente).

### Salting delle password

Per contrastare quest’ultima tipologia di attacco, si utilizza il **salting delle password**, che consiste nell'aggiungere un valore casuale (il sale) a ciascuna password prima di calcolare l'hash.

**Ogni salt è diverso** per ciascun utente e viene salvato assieme all’hash nel server.

Quindi il server mantiene la password hashata con il salt, e il salt utilizzato per quella password, l’utente quando si autentica manderà la propria password che verrà hashata con il salt rispettivo e verrà confrontato il risultato con l’hash che c’è sul server.

In questo modo se l’attaccante ottiene solo l’hash della password dovrebbe indovinare il salt (usato prima di fare la ricerca) ma dato che il salt è scritto assieme all’hash della password, se un attaccante ottiene anche il salt può usarlo per calcolare l’hash delle password comuni e vedere se il risultato combacia.

Per migliorare ulteriormente la sicurezza si cerca di **mantenere segreti i salt**. Inoltre le **computazioni dell’hash iterate più volte** (anche migliaia di volte) per aumentare il tempo di computazione necessario e quindi rallentare attacchi di brute force.

## Token-based authentication

Vediamo adesso l’autenticazione basata su **un oggetto che si possiede.**

Un esempio è una **carta con una piccola memoria** la suo interno (Carte bancomat a Banda Magnetica), La banda magnetica contiene dati statici codificati, come il numero del conto e altre informazioni di base. Spesso si accoppia l’oggetto ad un PIN, in modo che un attaccante abbia bisogno di entrambi. Il problema di queste carte è che sono facili da clonare con dei lettori, e magari l’uso di una telecamera per vedere il pin inserito dal proprietario.

Le **smart card**, dotate di un chip integrato, offrono maggiore sicurezza rispetto alle tradizionali memory card passive. I chip generano un codice unico a ogni transazione, rendendo praticamente impossibile clonare la carta. Può fare anche operazioni crittografiche.

## Biometric authentication

Infine, la **biometria** utilizza le caratteristiche biologiche uniche degli utenti per l'identificazione. Questo processo prevede la registrazione delle caratteristiche biometriche in un database e il successivo confronto con le caratteristiche acquisite durante la verifica.

Sebbene la biometria offra un alto livello di sicurezza, solleva anche preoccupazioni relative alla privacy, poiché la compromissione di un database biometrico avrebbe un impatto significativo: sono dati unici e non cambiabili
