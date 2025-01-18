# Unix shell

La shell di Unix è il modo più semplice per interfacciarsi con il sistema operativo:

- eseguire programmi
- reindirizzare input e output
- connettere programmi
- lanciare script

## Comandi di base

```bash
ls  # mostra il contenuto di una directory
file <filename> # mostra il tipo di file
pwd # mostra il percorso della directory corrente
mkdir <name> # crea una nuova directory
cd <path> # cambia la directory corrente
cat <file> # visualizza il contenuto di un file
cat <f1> <f2> <f3> # concatena e visualizza il contenuto di più file
echo "string" # stampa una stringa sulla console
grep <word> <file> # cerca una parola in un file
man <command> # mostra il manuale di un comando
find <path> -name "expression" # cerca ricorsivamente file che hanno l'espressione nel nome
sort <file> # ordina le righe di un file
strings <file> # estrae le stringhe leggibili da un file binario
```

## Wildcards

Le wildcards sono dei caratteri speciali che vengono interpretate in modo particolare dai comandi:

```bash
* # accetta ogni stringa di caratteri. Esempio:   ls *.txt
? # accetta un singolo carattere. Esempio:        ls file?.txt
[...] # accetta un insieme di caratteri specificato. Esempio:  ls file[1-3].txt
```

Nota che come comportamento di default il ‘.’ all’inizio del nome del file o subito dopo una slash deve essere specificato esplicitamente, le wildcard non lo considerano in automatico.

## Reindirizzamento

Ci sono dei simboli per poter reindirizzare input e output:

- `>`  reindirizza l’output di un comando verso un file **sovrascrivendone** il contenuto già presente
    - es: `ls > tempfile.txt` scrive l’output di `ls` nel file chiamato `tempfile.txt`
- `<` reindirizza il contenuto di un file come input al comando
    - es: `sort < list.txt`
- `>>`  reindirizza l’output di un comando verso un file **aggiungendolo** al contenuto già presente

Linux ha tre stream di input/output di default:

- **stdin (0)**: standard input
- **stdout (1)**: standard output, dove viene stampato il normale output
- **stderr (2)**: standard error, dove vengono stampati gli errori

quindi si può anteporre il numero relativo allo stream per reindirizzare lo standard output oppure lo standard error:

`cat test.txt 2> errors.txt` se “test.txt” non esiste allora l’errore lanciato dal programma andrà nel file “errors.txt”

## Pipe

Le pipe sono la forma base per la comunicazione tra processi, possiamo pensarlo ad un meccanismo di reindirizzamento ma tra due programmi.

`command1 | command2`

l’output di “command1” diventa l’input di “command2”, l’output di “command2” verrà stampato sul terminale.

Un esempio reale è il seguente:

```bash
ls | grep Documents
```

L’output di `ls` viene dato a `grep` il quale cercherà al suo interno occorrenze della stringa “Documents”, le righe che conterranno questa stringa verranno stampate in output.
