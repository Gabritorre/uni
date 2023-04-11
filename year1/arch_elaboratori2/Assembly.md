# Assembly

## Compilazione

La fase di compilazione si occupa di tradurre un programma scritto in un linguaggio in un programma scritto in un altro linguaggio, Spesso si compila un linguaggio ad alto livello per farlo diventare un codice a basso livello o in linguaggio macchina

Quando si compila un codice si generano dei file oggetto, nei sistemi UNIX questi file sono composti da:
1. **header**: che descrive il contenuto dell’object file
2. **text segment**: che contiene il codice macchina prodotto dall’assemblatore
3.  **data segment**: che contiene i dati «globali» necessari per l’esecuzione del programma. 
4. **relocation information**: che identifica le istruzioni e i dati che dipendono da indirizzi assoluti
5. **symbol table**: che contiene i simboli (le label) locali e globali (da esportare) 
6.  **debug informations**: Informazioni aggiuntive come ad esempio il mapping tra sorgente ad alto livello e codice macchina

## Linking

Dopo la compilazione viene la fase di **linking** in cui si collegano i file oggetti e si produce un unico file eseguibile. In questa fase vengono risolti tutti i riferimenti e gli indirizzi relativi (indirizzi che dipendono dalla posizione in byte della label rispetto al modulo (file) a cui appartiene)

## Loading

Nella fase di loading si carica il programma in memoria, gli viene assegnato uno spazio di indirizzamento in memoria e si risolvono gli indirizzi assoluti (indirizzi che dipendono dall'indirizzo in cui viene il programma)

dopo questa fase il programma è effettivamente in esecuzione
