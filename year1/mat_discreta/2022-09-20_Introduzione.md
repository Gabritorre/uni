# Introduzione alla matematica discreta
Il significato di discreto deriva da discernere cioè separare, vengono appunto divise le grandezze in continue e discrete:

- Le grandezze continue hanno valori infinitesimi in $\mathbb{R}$, cioè tra due numeri sono presenti infiniti numeri. Es. il peso e l'altezza.
- Le grandezze discrete hanno valori finiti in $\mathbb{Z}$ o $\mathbb{N}$ , cioè tra due numeri è presente una quantità di numeri finita. Es. gli anni e la conta delle persone.

## Termini fondamentali

- **Enunciati**: Sono espressioni scritte in linguaggio naturale che esprimono le proprietà di oggetti matematici che devono essere dimostrati.
Possono essere di tre tipi:
	- Gli **enunciati esistenziali** sono enunciati che contengono la parola chiave "esiste" o "esistono". 
	
		Es. "Esiste un numero naturale n tale che n 2 = 441"
		
		Per dimostrare che è vero basta fare un esempio.
		
		Per dimostrare che è falso bisogna dimostrare che è falso per ogni valore
		nell'insieme di riferimento.
		
	- Gli **enunciati universali** sono enunciati che contengono la parola
	  chiave "per ogni".
		Es. "Per ogni numero naturale n, n 2 + n `e un numero pari"
		Per dimostrare che è vero bisogna dimostrare che è vero per ogni valore
		nell'insieme di riferimento.
		Per dimostrare che è falso è sufficiente fare un contro-esempio.
	
	- Gli **enunciati composti** sono una sequenza di enunciati più semplici collegati tra loro da dei connettivi (and, or, not, if then).
	
- **Oggetti matematici**: Sono degli oggetti astratti che possono venire coinvolti in formule o essere assegnati ad una variabile. 

	Degli esempi sono: numeri, insiemi, matrici, sequenze, funzioni, oggetti
	geometrici ecc...

- **Valori di verità**: Esistono due valori al termine di una dimostrazione di un  enunciato, cioè **vero** o **falso**.

- **Teorema**: Un teorema è un **enunciato che risulta vero** dopo una dimostrazione.

- **Dimostrazione**: Sequenza di passaggi che servono per dimostrare se un enunciato è vero o falso.

- **Lemmi**: enunciato preparatorio (poco importante) che viene utilizzato per dimostrare un teorema più significativo.

- **Proposizione**: Teorema di minore importanza.

- **Corollario**: Conseguenza di un teorema.

## Esempi di matematica discreta

**Teorema**: Per ogni $n \in \mathbb{N}, n^2+n$ è pari.

**Dimostrazione**: Un numero naturale $n$ è pari se esiste $k \in \mathbb{N}$ tale che $n = 2k$

mentre un numero naturale $n$ è dispari se esiste $k \in \mathbb{N}$ tale che $n = 2k +1$.

Dobbiamo dimostrare che, dato $n \in \mathbb{N}$, esiste $k \in \mathbb{N}$ tale che $n^2 + n = 2k$.

Suddividiamo la prova in due casi:
1. $n$ è pari: sia $n = 2r$ allora $n^2 + n = 4r^2+2r$, raccogliendo il 2: $2(2r^2+r)$

	se $k = 2r^2+r$ ottengo $n^2+n = 2k$

3. $n$ è dispari: sia $n = 2r +1$ allora $n^2 + n = (2r+1)^2 + 2r+1$ che diventa 
	$4r^2+4r+1+2r+1 =$
	
	$= 4r^2+6r+2 =$
	
	$= 2(2r^2+3r+1)$
	
	sia $k = 2r^2 +3r + 1$ allora $n^2+n = 2k$
	
<hr>

**Enunciato**: dimostra che "per ogni $n \in \mathbb{N}, 4n - 1$ è un numero primo" è falso.

**Dimostrazione**: è sufficiente trovare un contro-esempio: come $n = 4$ perché $4 * 4 - 1 = 15$ il numero $15$ non è un numero primo.

### Dimostrazione per assurdo
**Teorema**: "non esiste un numero primo massimo".

**Dimostrazione**: per assurdo assumiamo che esista un numero primo massimo chiamato $X$, quindi possiamo elencare gli elementi:

$2,3,5,7,11,...,X$

consideriamo $Y = (2*3*5*7*11*...*X)+1$

poiché $Y>X$, $Y$ non è un numero primo, ma se dividiamo $Y$ per qualsiasi numero primo della lista otteniamo sempre resto di 1 pertanto $Y$ non è divisibile per nessun numero se non 1 e se stesso, il che significa che è un numero primo più grande di $X$, quindi il teorema è vero.

