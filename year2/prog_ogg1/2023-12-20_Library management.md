# Library management

Generalmente quando sviluppiamo programmi in java facciamo uso delle librerie base di Java, semplicemente importandole all'inizio del codice in quanto sono librerie già precaricate.

Quando parliamo di **librerie** intendiamo sostanzialmente il **bytecode di un insieme di classi**.

La JVM utilizza la *classpath* per sapere dove trovare le classi, la *classpath* è un insieme di percorsi che possono condurre a una directory contenente dei file .class oppure file .jar.

**La ricerca delle classi avviene in fase di runtime**, e se una determinata classe che viene utilizzata nel codice non viene trovata nel *classpath* allora viene lanciata una eccezione *ClassNotFoundException*.


Possiamo dire alla JVM dove andare a trovare le nostre librerie in fase di compilazione aggiungendo l'opzione 
`-classpath </percorso/della/libreria1;/percorso/della/libreria2>`


## Compatibilità e versioni

Quando si sviluppa e si modifica nel tempo una libreria è importante considerare la ***backward  compatibility***, cioè la compatibilità di quella versione della libreria con le versioni precedenti.
Per assicurare questa compatibilità è importante non modificare le interfacce esterne (campi, metodi e classi utilizzate dagli altri) della nostra libreria.

Se consideriamo un metodo pubblico ad esempio: Se in una successiva versione vogliamo aggiungere, modificare o rimuovere un parametro, stiamo rompendo la compatibilità quindi bisogna trovare un modo per evitare ciò, magari aggiungendo un'altra versione del metodo, oppure dando al parametro aggiunto un valore di default oppure far chiamare il nuovo metodo all'interno del metodo originale.

Un altro esempio potrebbe essere che il metodo che abbiamo scritto in una vecchia versioni non è più necessario e vorremmo rimuoverlo... Questa non è una buona idea in quanto chi sta utilizzando quel metodo e aggiorna la libreria si troverà il codice rotto. In questo caso entra in gioco l'annotazione `@deprecated` la quale dice che quel metodo non dovrebbe essere più utilizzato e non verrà più supportato

È chiaro che in alcune situazioni mantenere la compatibilità non è possibile, in questo caso tornano molto utili i **version numbers**, cioè dei numeri che identificano la versione della libreria.

Spesso si utilizza la seguente convenzione: `x1.x2.x3` dove:
- `x1` rappresenta una *major release*, in questo caso numeri diversi implicano che delle interfacce esterne sono cambiate, quindi la compatibilità è molto probabilità che non sia mantenuta con le versioni precedenti
- `x2` rappresenta una *minor release*, in questo caso cambiano solo le implementazioni interne oppure vengono aggiunte nuove interfacce esterne, ma non vengono modificate le interfacce esterne già esistenti. La compatibilità dovrebbe essere garantita
- `x3` rappresenta un *bug fix*, sono dei cambiamenti minori che sistemano dei problemi e garantiscono la compatibilità

## Strumenti di automazione

Quando un progetto diventa eccessivamente grande diventa difficile e frustrante gestire.
Esistono dei tool che automatizzano varie fasi come la compilazione, l'esecuzione, costruire eseguibili, effettuare test, ecc...
Uno di questi tool è [Gradle](https://docs.gradle.org/current/userguide/userguide.html)


