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

Le wildcards sono dei caratteri speciali che vengono interpretato in modo particolare dai comandi:

```bash
* # accetta ogni stringa di caratteri
? # accetta un singolo carattere
[...] # accetta un insieme di caratteri specificato
```

Nota che come comportamento di default il ‘.’ all’inizio del nome del file o subito dopo una slash deve essere specificato esplicitamente.

## Reindirizzamento

Ci sono dei simboli per poter reindirizzare input e output:

- `>`  reindirizza l’output di un comando verso un file sovrascrivendone il contenuto già presente
    - es: `ls > tempfile.txt` scrive l’output di `ls`  nel file chiamato `tempfile.txt`
- `<` reindirizzo il contenuto di un file come input al comando
    - es: `sort < list.txt`
- `>>`  reindirizza l’output di un comando verso un file aggiungendolo al contenuto già presente

Linux ha tre stream di input/output di default:

- **stdin (0)**: standard input
- **stdout (1)**: standard output, dove viene stampato il normale output
- **stderr (2)**: standard error, dove vengono stampati gli errori

quindi si può anteporre il numero relativo allo stream per reindirizzare lo standard output oppure lo standard error:

`cat test.txt 2> errors.txt`  se “test.txt” non esiste allora l’errore lanciato dal programma andrà nel file “errors.txt”

## Pipe

Le pipe sono la forma base per la comunicazione tra processi, possiamo pensarlo ad un meccanismo di reindirizzamento ma tra due programmi.

`command1 | command2`

l’output di “command1” diventa l’input di “command2”, l’output di “command2” verrà stampato sul terminale.

```bash
ls | grep Documents
```
