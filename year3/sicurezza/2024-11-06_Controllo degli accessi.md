# Controllo degli accessi

Con controllo degli accessi si intende una pratica di sicurezza per impedire l’accesso ad delle risorse a chi non è autorizzato.

Nell’ambito dei sistemi operativi, chi può accedere alle risorse solitamente è un **utente**, un **programma**, un **processo** o **altri sistemi**. L’accesso alle risorse del sistema viene regolato da una ***security policy.***

![https://i.ibb.co/KsWbtFz/image.png](https://i.ibb.co/KsWbtFz/image.png)

## Politiche di controllo degli accessi

Vediamo i diversi **tipi di politiche di controllo degli accessi**:

- **Controllo di accesso discrezionale (DAC)**: Il proprietario della risorsa determina chi può accedere alla risorsa in base alla **identità** dell’utente
    
    Un'entità **può abilitare un'altra entità** ad accedere a una risorsa.
    
- **controllo di accesso vincolato (MAC)**: Il sistema determina l’accesso alla risorsa in base a delle **etichette di classificazione** date agli utenti e alle risorse, un utente per poter accedere alla risorsa deve possedere l’etichetta corretta
    
    Un'entità che ha l'autorizzazione ad accedere a una risorsa **non può abilitare un'altra entità** ad accedere a tale risorsa.
    
- **Controllo di accesso basato sui ruoli (RBAC)**: basato sui **ruoli** che gli utenti hanno all'interno del sistema e ogni ruolo ha i propri permessi che stabiliscono quali accessi sono consentiti.
- **Controllo di accesso basato sugli attributi (ABAC)**: basato sugli **attributi** dell'utente, sulla **risorsa** a cui si accede e sulle **condizioni ambientali** correnti. Gli attributi possono includere dati come l'età dell'utente, la posizione geografica, l'ora del giorno, o il tipo di dispositivo…

## Oggetti e soggetti

Vengono chiamati **soggetti** le entità capaci di accedere a delle risorse.

Mentre vengono chiamati **oggetti** le risorse a cui accedere.

I soggetti accedono agli oggetti attraverso dei **processi** che acquisiscono i permessi dell’utente.

## Diritti di accesso

Un soggetto può avere vari diritti di accesso su un oggetto:

- Lettura (che include la copia)
- Scrittura (che include aggiungere, modificare o rimuovere del contenuto all’interno dell’oggetto)
- Esecuzione
- Eliminazione
- Creazione

Una possibile organizzazione dei diritti di accesso che possiedono i soggetti nei confronti degli oggetti è attraverso una **matrice degli accessi**:

|  | README.txt | /etc/shadow | Carol.pdf | /bin/bash |
| --- | --- | --- | --- | --- |
| **Alice** | Lettura, Scrittura | Lettura, Scrittura |  | Lettura, Scrittura, Esecuzione |
| **Bob** | Lettura |  | Lettura | Lettura, Esecuzione |
| **Carol** | Lettura |  | Lettura, Scrittura |  |

La matrice degli accessi si può decomporre per ottenere:

- **Access Control List** (ACL): per ogni oggetto si ottiene la lista degli utente con i rispettivi permessi (decomposizione in colonne)
- **Capabilities**: per ogni soggetto si ottengono i suoi diritti su tutti gli oggetti (decomposizione in righe)

## Unix Access Control

Unix utilizza un controllo degli accessi di tipo DAC.

Il kernel ha accesso libero a tutto il sistema, i programmi accedono ai file e device attraverso il kernel.

Ad **ogni file e directory è assegnato esattamente uno** ***user identifier** (userid, uid)* che ne indica il proprietario e contribuisce a determinarne i permessi d'accesso.

Ad **ogni processo è associato un insieme definito** **di *user identifier*** che contribuiscono a determinare i permessi che il processo ha su file e directory.
L'utente root (con userid = 0) ha sempre accesso garantito dal kernel.

### Permessi su un file

In Unix i permessi su un file sono formati da **tre blocchi** che definiscono i permessi del proprietario, del gruppo e di tutti gli altri.

Ogni blocco può possedere i seguenti caratteri:

- `r`: permette la **lettura** del file o la visualizzazione del contenuto della directory.
- `w`: permette la **modifica** del file o del contenuto della directory.
- `x`: permette **l'esecuzione** del file o l'attraversamento della directory.
- `s`: indica che il file è SUID (o SGID se la "s" è nella blocco del gruppo) e permette al file di essere eseguito con i privilegi del proprietario (o del gruppo) (viene messo al posto della `x`)
    
    Usare questa funzionalità è rischioso in quanto, se il file è vulnerabile un attaccante può ottenere i privilegi di root.
    
    Se proprio necessario è opportuno usare una pratica di *privilege drop*: cioè usare subito i privilegi del proprietario e poi scendere ai permessi standard dell’utente. Una volta scesi di permessi non sarà più possibile riacquisire i permessi del proprietario (ciò si può fare in C con la funzione `setuid()`)
    
- `t`: il cosiddetto ***sticky bit***, può apparire al posto della `x` nel terzo blocco in un file di tipo directory e indica che non è possibile eliminare file all’interno di tale directory di cui non si è proprietari. Questo è particolarmente utile in cartelle condivise come `/tmp`

La seguente stringa di informazioni UNIX (ottenibili con il comando `ls -la`), mostra i permessi di una directory/file:

```bash
-rwxr-xr-- 8 username groupname 678 Jan 10:10 filename 
```

la prima parte: `-rwxr-xr--` riguarda i permessi, in particolare:

- Il primo carattere riguarda il fatto che il file è una directory (’`d`’) oppure no (‘`-`’).
- Le successive **prime tre posizioni** indicano i permessi del proprietario. Nell’esempio il proprietario ha i permessi di lettura, scrittura ed esecuzione (`rwx`)
- Le **seconde tre posizioni** indicano i permessi per il gruppo. Nell’esempio i membri del gruppo possono leggere il file eseguirlo, ma non possono scriverci (`r-x`)
- Le **ultime tre posizioni** si riferiscono ai permessi per chiunque altro. Nell’esempio chiunque altro può solamente leggere il file (`r--`).

### Alterare i permessi

È possibile alterare i permessi con il comando `chmod` ad esempio `chmod 760 myfile` 

Il numero `760` viene interpretato come tre cifre distinti in base ottale

- 7 = 111 = `rwx`
- 6 = 110 = `rw-`
- 0 = 000 = `---`

quindi il permesso totale sul file sarà composto come `rwxrw----`
