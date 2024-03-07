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
|:--:|:--:|
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

Possiamo però trovare una soluzione più semplice: tagliare un pezzo in modo definitivo, e suddividendo ulteriormente la parte rimanente in modo ottimale.

$\left\{\begin{array}{l}r_0=0 \\ r_n=\max_{1\leq i \leq n} \{\underbrace{p_i}_{\begin{array}{c}\text { Prezzo del taglio} \\ \text { non ulteriormente diviso }\end{array}}+\underbrace{r_{n-i}}_{\text {suddivido in modo ottimo }}\}, \quad 1 \leq i \leq n\end{array}\right.$

L'algoritmo prende in input i seguenti parametri:

- `p[1, ..., m]`, con $m \geq n$, che rappresenta il vettore contenente i prezzi delle aste, in `p[i]` è contenuto il costo di un'asta di lunghezza `i`
- `n` che rappresenta la lunghezza dell'asta da tagliare

L'algoritmo produce in output $r_n$, un intero che rappresenta il massimo guadagno ricavabile dall'asta.

### Algoritmo senza programmazione dinamica

```c++
cut_rod(p, n) {
	if (n == 0) {
		return 0
	}
	else {
		q = -1		//se i prezzi potessero essere negativi andrebbe inizializzato a -infinito
		for (i = 1 to n) {
			q = max(q, p[i] + cut_rod(p, n-i))
		}
		return q
	}
}
```

Analizziamo il costo:

Sia $T(n)$ il numero di chiamate ricorsivi con il secondo parametro uguale a $n$:

$$T(n) = \begin{cases} 1 & n = 0\\
1 + \sum_{i = 1}^{n}T(n-i) & n > 0\end{cases}$$

Ponendo $j = n-i$ otteniamo

$$T(n) = 1 + \sum_{i = 1}^{n} T(n-i) = 1+\sum_{j = 0}^{n-1} T(j)$$

Dimostriamo per induzione che $T(n) = 2^n$

**caso base**: Se $n = 0, T(0) = 1 = 2^0$

**passo induttivo**: Assumiamo per ipotesi induttiva che $T(n) = 2^n$ e dimostriamo per $n+1$:

$$T(n+1) = 1 + \sum_{j=0}^{(n+1)-1}T(j) = 1 + \sum_{j=0}^{n}T(j)$$

$$= 1 + T(n) + \sum_{j = 0}^{n-1}T(j)$$

che per definizione

$$= T(n) + T(n) = 2T(n)$$

per ipotesi induttiva

$T(n+1) = 2T(n) = 2\cdot 2^n = 2^{n+1}$

Concludiamo che $T(n) = \Theta(2^n)$

Possiamo vedere visivamente come tale algoritmo esplora tutti i possibili sottoproblemi:

![enter image description here](https://i.ibb.co/DpwsBd9/image.png)

**Osservazioni**:
- Il numero di nodi è esattamente $2^{n}$
- Vediamo come ci sono svariati **problemi sovrapposti** (vedi i nodi `1` e `2`)
- Abbiamo in totale $n$ **sottoproblemi distinti** (in questo caso $1, 2, 3, 4$)


### Algoritmo con programmazione dinamica

Possiamo dire che se:
- il numero di sottoproblemi distinti è polinomiale
- ciascun sottoproblema si risolve in tempo polinomiale

allora si può ottenere un **algoritmo di risoluzione polinomiale** (al costo di usare della memoria ausiliaria).

In generale abbiamo 2 modi di costruire un algoritmo con la programmazione dinamica:

1. **Top-down**: salva in una tabella (array o tabella hash) le soluzioni dei sottoproblemi già risolti
2. **Bottom-up**: ordina i sottoproblemi in base alla loro dimensione, partendo da quelli più piccoli e memorizza le soluzioni ottenuti

## Tecnica top-down

```c
top_down_cut_rod(p, n) {
	r[0 ... n]
	for (i = 0 to n) {	//inizializzazione dell'array
		r[i] = -1
	}
	return top_down_cup_rod_aux(p, n, r)
}

top_down_cut_rod_aux(p, j, r) {
	if (r[j] < 0) {
		if (j == 0) {	// questo controllo si potrebbe fare nel metodo precedente durante l'inizializzazione
			r[j] = 0
		}
		else {
			q = -1
			for (i = 0 to j) {
				q = max(q, p[i] + top_down_cut_rod_aux(p, j-i, r))
			}
			r[j] = q
		}
	}
	return r[j]
}
```

### Analisi complessità

Se il problema è già risolto allora non entriamo nel primo `if` e quindi la risoluzione di quel sottoproblema è costante.

Si entra nel ramo `else` una sola volta per ogni sottoproblema $j$ con $1 \leq j \leq n$ (perché non è detto si debbano per forza risolvere tutti i sottoproblemi)

Per risolvere un sottoproblema di dimensione $j$ viene eseguito un ciclo for che esegue $j$ iterazioni. Quindi avendo $n$ sottoproblemi la complessità dell'algoritmo `top_down_cut_rod_aux` è dato da 

$$\sum_{j = 1}^{n}j = \frac{n(n+1)}{2} = \Theta(n^2)$$


Quindi alla complessità dell'algoritmo totale dobbiamo aggiungerci anche il tempo dell'inizializzazione del vettore:

$$T(n) = \Theta(n) = \Theta(n^2) = \Theta(n^2)$$

## Tecnica bottom-up

```c
bottom_up_cut_rod(p, n) {
	r[0 ... n]
	r[0] = 0
	for (j = 1 to n) {
		q = -1
		for (i = 1 to j) {
			q = max(q, p[i] + r[j-i])		//Θ(1)
		}
		r[j] = q
	}
	return r[n]
}
```

### Analisi complessità

Per ogni sottoproblema di dimesione $j$ viene eseguito un ciclo che esegue $j$ iterazioni

$$\sum_{j=1}^{n}\Theta(1) \cdot j = \Theta(1) \cdot \frac{n(n+1)}{2} = \Theta(n^2)$$


Quindi entrambi i metodi hanno la stessa complessità (generalmente la tecnica top-down è la migliore in quanto non richiede di fare esplicitamente tutti i sottoproblemi, mentre la tecnica bottom-up li calcola sempre tutti)

## Dove tagliare?

Siamo riuscite ad ottenere il ricavo massimo possibile, però non sappiamo ancora dove vanno fatti i tagli per ottenere tali risultati.

Estendiamo l'algoritmo bottom-up per fargli restituire anche questa informazione, ci serveremo di un altro vettore `s[1 ... n]` in cui nella $i$-esima posizione memorizza la posizione del primo taglio che determina la soluzione ottima per il sottoproblema di dimensione $i$

```c
bottom_up_cut_rod_extended(p, n) {
	r[0 ... n]
	s[0 ... n]

	r[0] = 0
	for (j = 1 to n) {
		q = -1
		for (i = 1 to j) {
			if (q < p[i] + r[j - i]) {
				q = p[i] + r[j - i])
				s[j] = i
			}
		}
		r[j] = q
	}
	return r, s
}

print_positions(p, n) {
	r, s = bottom_up_cut_rod_extended(p, n)		//Θ(n^2)
	while (n > 0) {		//O(n)
		print s[n]
		n = n - s[n]
	}
}
```

Viene quindi stampato il taglio ottimo per l'asta lunga $n$ usando `s[n]`, dopo aver effettuato il taglio ci rimarrà un pezzo lungo $n1$ di cui sappiamo che il taglio ottimo si trova nella posizione `s[n1]`, e via così fino a che non rimane un asta di lunghezza $0$

**Complessità**:
$$T(n) = \Theta(n^2) + O(n) = \Theta(n^2)$$


Esempio sulla posizione dei tagli:

| Lunghezza $i$ | `s[i]` |
|:--:|:--:|
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 2 |
| 5 | 2 |
| 6 | 6 |
| 7 | 1 |

partiamo da un'asta lunga $7$, `s[7]` ci dice di tagliare in posizione $1$
ci rimane un'asta lunga $7-1=6$, `s[6]` ci dice di tagliare in posizione $6$
ci rimane un'asta lunga $6-6=0$, algoritmo termina
Quindi una soluzione ottima è fare un'asta lunga $1$ e una lunga $6$
