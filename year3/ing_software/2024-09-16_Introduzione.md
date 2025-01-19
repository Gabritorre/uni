# Introduzione

Si può definire “*software engineering*” come la disciplina che fornisce delle regole per il processo di produzione del software.

## Prodotto software

Un **prodotto software** è composto da:

- Codice
- Dati
- Documentazione
    - Documentazione del sistema (come funziona il software)
    - Documentazione dell’utente (come utilizzare il software)

Le caratteristiche di un prodotto software sono:

- l’intangibilità
- Si “sviluppa” e non si “fabbrica”
- È facilmente duplicabile e distribuibile
- Si deteriora nel tempo (cambia l’ambiente su cui lavora, si aggiornano gli standard)
- Viene acquisito su licenza

In particolare presenta una curva dei guasti di questo tipo:

![https://i.ibb.co/YWHn23V/image.png](https://i.ibb.co/YWHn23V/image.png)

La curva ideale porterebbe a pensare che più applico delle *fix* più il software diventerà tollerante ai guasti, ma non è così, infatti ogni modifica porta con sé la probabilità di generare nuovi *bug.*

## Processo di produzione

Il processo di produzione di un software inizia con l’analisi dei requisiti e finisce con il ritiro dal mercato del prodotto.

Possiamo elencare le fasi in questo modo (indipendentemente dal tipo di processo impiegato):

1. **Analisi dei requisiti**: specificare cosa deve fare il sistema e quali sono i vincoli sul sistema
2. **Specifica**: Documentazione delle funzioni del sistema
3. **Progettazione**: Creare una soluzione al problema attraverso un modello astratto
4. **Implementazione**: Codificare il modello astratto
5. **Integrazione**: collegamento dei sotto-sistemi e dell’ambiente con il sistema principale
6. **Mantenimento**: Aggiornare il sistema con modifiche correttive e di aggiunta di funzionalità
7. **Ritiro**: Dismissione del sistema ed eventuale migrazione di dati nel nuovo sistema

L’organizzazione di tutte queste fasi, quindi il tempo, l’energia, il personale da impiegare, prende il nome di **Piano di progetto**

Il processo include anche gli strumenti utilizzati, le tecniche di sviluppo, e le risorse umane.

## Qualità del software

Per determinare la qualità di un software si valutano le **proprietà intrinseche** del prodotto, quindi solitamente non visibili direttamente dall’utente (es. copertura dei test case, manutenibilità del codice, struttura del codice) e le **proprietà percepite** dal committente (es. usabilità dell’interfaccia, tasso di errori).

Esiste uno standard ISO/IEC 25010 (2017) che permette di misurare la qualità del software con delle **metriche** (es. come si misura il fattore di facilità d’uso di una interfaccia?)

Lo standard definisce due tipi di qualità:

- **Qualità interna**: tutte quelle proprietà che sono rilevanti durante le fasi di sviluppo e di manutenzione del software stesso.
- **Qualità esterna**: tutte le proprietà rilevanti in fase di esecuzione

Queste qualità sono:

- **Functional stability**: Assicurare il corretto e completo funzionamento delle funzioni di base
- **Efficiency / performance**: tempo di esecuzione, utilizzo di risorse, spazio occupato
- **Compatibility**: interoperabilità con i sistemi con cui si appoggia (es. una applicazione con quali versioni di Android è compatibile?)
- **Usability**: facilità di apprendimento, prevenzione degli errori, estetica
- **Reliability**: tolleranza ai guasti, disponibilità, recupero
- **Security**: confidenzialità, integrità, autenticazione
- **Maintainability**: eleganza, modificabilità, riuso, analisi del codice
- **Portability**: facilità di portare il sistema in un ambiente diverso (modificare il codice senza stravolgere tutto)

Si è notato che la **maggior parte del costo** relativo al processo di produzione del software (le 7 fasi) risiede nel **mantenimento.**

Questo comporta che più tardi ci si accorge di un errore maggiore saranno i costi per sistemare il problema.
