# Compilatore

Il compilatore per i programmi scritti in c++ è **g++**.

il comando g++ è  una chiamata a gcc con l'aggiunta di particolari parametri

Compilazione:

	g++ program.cpp -o program
	./program

## header

Per una migliore organizzazione del codice è possibile avere gli header in una cartella diversa da quella del file eseguibile. Inoltre mettere in testa al file il percorso relativo o assoluto di ogni header è scomodo e poco elegante.

È possibile indicare la cartella contenente gli header in fase di compilazione (con l'opzione -I ) e in testa al file che utilizza quelle librerie basta mettere il nome degli header.

	g++ program.cpp -o program -I header-dir/

## link dei file oggetto

In grandi progetti dove sono presenti più file che fanno dei riferimenti a funzioni tra di loro è più conveniente compilare i vari file singolarmente, attraverso il parametro -c dice al compilatore di creare dei file oggetto e non degli eseguibili (quindi non si avranno errori per dei riferimenti mancanti) e una volta compilati tutti i file .cpp (tra cui deve essere presente il main) si linkano tutti i file oggetto

	//creazione dei file oggetto
	g++ -c -o foo.o foo.cpp
	g++ -c -o main.o main.cpp
	g++ -c -o bar.o bar.cpp
	
	//link dei file oggetto
	g++ -o fubar foo.o main.o bar.o

Questo torna utile in fase di aggiornamento di uno specifico file, per cui non dobbiamo ricompilare tutti i file ma solo il file modificato e poi rifare il linking.


## Librerie statiche e dinamiche

### Librerie statiche

Le librerie statiche sono pezzi di codice già compilati che vengono legati al programma che le ha chiamata in **fase di compilazione**. Viene effettivamente copiato il codice della libreria all'interno del file chiamante

### Librerie dinamiche

Le libreri dinamiche sono sempre dei pezzi di codice già compilati ma vengono caricate in memoria in fase di esecuzione (run-time). 

### Differenze

- Le librerie dinamiche vengono caricate in memoria solo una volta e possono essere usate da più programmi. Mentre con le statiche ogni eseguibile ha una copia caricata in memoria di quella libreria.
- L'utilizzo di librerie statiche implica una maggiore grandezza degli eseguibili.
- La modifica della libreria statica implica che bisogna ricompilare anche tutti i file che la utilizzavano.
- L'utilizzo delle librerie dinamiche può portare a problemi di compatibilità, e di indirizzamento.
- L'utilizzo delle librerie statiche è generalmente più veloce perché non ci sono chiamate esterne.


## Opzioni comuni di g++

| opzione | significato |
|--|--|
| -g | aggiunge informazione aggiuntive all'eseguibile utili per il debug |
| -Wall | abilita tutti i possibili warning della compilazione |
| -O | ottimizzazioni |
| -o \<name\>| permette di specificare il nome del file eseguibile |
| -I \<path\> | specifica il percorso per la cartella dei file header |
| -L \<path\> | specifica il percorso per la cartella contenente le librerie |


## Ottimizzazioni

è possibile applicare delle ottimizzazioni in fase di compilazione utilizzando il parametro -O secondo la seguente tabella:

![](https://i.ibb.co/zZfh9WT/optimization.png)




