# Programmazione dinamica

La programmazione dinamica è una tecnica di programmazione molto interessante che si applica in contesti in cui:
Si ha un **problema che si può ridurre ad un insieme di problemi più piccoli** (proprio come la tecnica *Divide et Impera*). Ma diversamente dalla tecnica *Divide et Impera*, in questo caso i **sottoproblemi sono sovrapposti**, cioè sono uguali tra loro.

In tale situazione un algoritmo *Divide et Impera* computerebbe da capo un sottoproblema che potrebbe aver già risolto in precedenza, risultando inefficiente.

La programmazione dinamica serve proprio come soluzione a questo problema:
**Si risolve il sottoproblema e si salva la sua soluzione, quando si rincontra lo stesso sottoproblema si utilizza direttamente la soluzione già calcolata.**

La programmazione dinamica torna utile per problemi in cui bisogna ottimizzare qualcosa, in cui ogni possibile soluzione ha un costo vogliamo trovare una **soluzione ottima** (in termini di tempo) per massimizzare o minimizzare tale costo (in base allo scopo del problema).

Va detto che spesso la soluzione ottima non è unica, e la programmazione dinamica tiene conto anche di questo.

## Sviluppare un algoritmo di programmazione dinamica

1. Caratterizzazione della struttura di un soluzione ottima
2. Fornire una definizione ricorsiva del valore di una soluzione ottima
3. Calcolo del valore di una soluzione ottima, tramite una delle due tecniche:
	- Top-down
	- Bottom-up
4. Individuazione di una soluzione ottima sulla base delle informazioni del punto precedente


## Esempio taglio delle aste

Un'azienda produce delle aste che vende a pezzi. Le aste prodotto hanno una certa lunghezza $n$ e i prezzi delle aste dipendono dalla loro lunghezza.
Il problema nel tagliare le aste in modo da massimizzare il guadagno (si assume che il costo per eseguire il taglio sia irrilevante)

**Input**: data un'asta di lunghezza $n$ e una tabella di prezzi $p_i$, con $i = 1, ..., m$

**output**: determinare il ricavo $r_n$, cioè il ricavo massimo per un'asta di lunghezza $n$ che si può ricavare tagliando l'asta e vendendo i singoli pezzi.

Esempio di tabella:
Supponiamo che la lunghezza iniziale sia $n = 7$

| Lunghezza $i$ | Prezzo $p_i$ |
|--|--|
| 1 | 1 |
| 2 | 5 |
| 3 | 8 |
| 4 | 9 |
| 5 | 10 |
| 6 | 17 |
| 7 | 17 |

Vediamo varie combinazioni di tagli:

- 7 pezzi lunghi 1:
	- $1 + 1 + 1 + 1 + 1 + 1 + 1 = 7$
- 1 pezzo lungo 2 e 5 lunghi 1
	- $5 + 1 + 1 + 1 + 1 + 1 = 10$
- 1 pezzo lungo 3 e 2 pezzi lunghi 2
	- $5 + 5 + 8 = 18$ (ottimale)
- 1 pezzo lungo 6 e un pezzo lungo 1
	- $17 + 1 = 18$ (ottimale)

Un metodo *Divide et Impera* risolverebbe questo problema tentando tutti i possibili modi di tagliare l'asta e ottenere quello che ha il costo più alto.
Ma In quanti possibili modi si potrebbe tagliare un'asta lunga $n$? (assumendo che si possa tagliare solo ogni metro)
Se pensiamo che ad ogni metro possiamo decidere se tagliare o meno abbiamo $2 \cdot 2 \cdot 2...\cdot 2$ per $n-1$ volte, quindi $2^{n-1}$ possibili modi di fare i tagli. Avremmo quindi un algoritmo esponenziale

Esprimiamo invece il ricavo massimo $r_n$ nel seguente modo ricorsivo:

$\left\{\begin{array}{l}
r_0=0 \\
r_n=\max \{\underbrace{p_n}_{\begin{array}{c}
\text { prezzo } \\
\text { senza } \\
\text { tagliare }
\end{array}}, \underbrace{r_1+r_{n-1}}_{\text {taglio in } i=1}, \underbrace{r_2+r_{n-2}}_{\text {taglio in } i=2}, \ldots, \underbrace{r_{n-1}+r_1}_{\text {taglio in } i=n-1}\}
\end{array}\right.$

Quando la soluzione è esprimibile, come in questo caso, come combinazione di soluzioni ottime di sottoproblemi si dice che vale la **proprietà della sottostruttura ottima**.
Tale condizione è la condizione esistenziale per poter elaborare algoritmi di programmazione dinamica.

Possiamo però trovare una soluzione più semplice: tagliare un pezzo in modo definitivo, e suddividendo ulteriormente la parte rimanente.

$\left\{\begin{array}{l}r_0=0 \\ r_n=\max \{\underbrace{p_i}_{\begin{array}{c}\text { non ulteriormente } \\ \text { diviso }\end{array}}+\underbrace{r_{n-i}}_{\text {suddivido in modo ottimo }}\}, \quad 1 \leq i \leq n\end{array}\right.$

L'algoritmo prende in input i seguenti parametri:

- `p[1, ..., m]`, con $m \geq n$, che rappresenta il vettore contenente i prezzi delle aste, in `p[i]` è contenuto il costo di un'asta di lunghezza `i`
- `n` che rappresenta la lunghezza dell'asta da tagliare

L'algoritmo produce in output $r_n$, un intero che rappresenta il massimo guadagno ricavabile dall'asta.
