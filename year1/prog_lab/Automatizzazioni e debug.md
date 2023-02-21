# Automatizzazioni e debug

## Struttura di un progetto

La struttura delle cartelle di un progetto (medio-piccolo) fatto in c++ dovrebbe seguire la seguente gerarchia:

	parent-foulder
	|--include/
	|--src/
	|--build/
	|--tools/

- In *include* vanno messi i file header (.h o .hpp) contenenti le firme di classi e funzioni
- in *src* vanno messi i file cpp che definiscono le funzioni e le classi nei file header
- in *build* vanno messi i file oggetto generati dalla compilazione con il parametro -c
- in *tools* ci vanno gli script che servono per lo sviluppo del progetto


## Makefile

Il comando **make** torna molto utile quando bisogna automatizzare alcune azioni (come la compilazione). Si basa su un file chiamato **Makefile** nel quale sono scritte le sequenze di operazioni da fare.

Il Makefile è formato da regole che seguono la seguente sintassi:

	<target>:<prerequisiti>
		<operazioni>

- **target**: nome del file che vogliamo generare oppure nome di una azione
- **prerequisiti**: lista dei file necessari per eseguire quel target
- **operazioni**: istruzioni da eseguire

N.B. le operazioni vanno tabulate nel file

Quando viene chiamato il comando "make" esso esegue il primo target presente nel Makefile, se ci sono dei prerequisiti allora prima esegue i prerequisiti.

In alternativa è possibile chiamare il comando "make" seguito dal nome del target per eseguirne uno specifico.

