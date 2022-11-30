# Trasformazioni lineari

Le Trasformazioni lineari o applicazioni lineari sono sono funzioni tra due spazi vettoriali che conserva le combinazioni lineari, cioè somma di vettori e moltiplicazione di vettori per scalari

Siano $V, W$ spazi vettoriali sullo stesso campo,

Una funzione $f: V \longrightarrow W$ è una trasformazione lineare quando soddisfa:
$\forall x,y \in V$ (vettori) e $r$ scalare

1. $f(x+y) = f(x) + f(y)$
2. $f(rx) = rf(x)$

## Omomorfismo

Una trasformazione lineare è un omomorfismo se oltre a soddisfare

1. $f(x+y) = f(x) + f(y)$
2. $f(rx) = rf(x)$

soddisfa anche

3. l'immagine della somma è uguale alla somma delle immagine
4. l'immagine del prodotto è uguale al prodotto dello scalare per l'immagine

### Isomorfismo

Due spazi vettoriali sono **isomorfi** (stessa forma) se esiste una trasformazione lineare tale che

$f: V \longrightarrow W$

$f^{-1}: W \longrightarrow V$

Due spazi vettoriali hanno la stessa struttura algebrica

Tra i due spazi vettoriali c'è una relazione di equivalenza perché esiste una **biiezione lineare**

**Quindi qualsiasi applicazione lineare invertibile è un isomorfismo**

### Endomorfismo

Si parla di endomorfismo quando il Dominio coincide con il codominio

$f: V \longrightarrow V$

### Automorfismo

Si tratta di un endomorfismo invertibile

$f: V \longrightarrow V$

$f^{-1}: V \longrightarrow V$

## Esempi di trasformazioni lineari

Sono delle trasformazioni lineari:

1. La funzione identità
2. Le composizioni $(f \circ g \text{ oppure } g \circ f)$
3. Somma di trasformazioni lineari
