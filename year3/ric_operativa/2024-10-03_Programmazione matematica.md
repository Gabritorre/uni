# 2024-10-03_Programmazione matematica

Introduciamo dei problema di programmazione matematica.

I primi problemi riguardano i punti stazionari: **punti di massimo e di minimo**.

Lavoreremo con funzioni $f: \mathbb{R}^n \rightarrow \mathbb{R}$ ed intervalli $C \subseteq \mathbb{R}^n$.

I problemi che dovremo risolvere saranno del tipo

$$
\overset{\min f(x)}{x \in C} \hspace{5mm} \text{oppure} \hspace{5mm} \overset{\max f(x)}{x \in C}
$$

Dove indichiamo:

- $x$: come il vettore delle variabili
- $f(x)$: la **funzione obiettivo** da massimizzare/minimizzare
- $C$ insieme di valori (vettori di $n$ dimensioni) che rappresentano delle soluzioni ammissibili

I problema consistono nel trovare tra tutte le soluzioni ammissibili, quella che rende minima o massima la funzione obiettivo (possono essere anche più di una)

## Teorema di Weierstrass

Una prima cosa da verificare è se esiste una possibile soluzione, per questo è utile sapere il teorema di Weierstrass:

Data la funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$, tale che $f$ è continua nell’intervallo $C \subseteq \mathbb{R}^n$ **chiuso e limitato**, allora la funzione ammette un minimo e un massimo globale sull’intervallo $C$

Un intervallo è **chiuso** se contiene i propri punti di frontiera.

Ad esempio se consideriamo la funzione $f(x) = \ln x$ con l’intervallo $C = [0, 1]$ e vogliamo trovare il suo punto di minimo. Abbiamo un intervallo chiuso e limitato ma la funzione non è continua in questo intervallo, infatti in $0$ il logaritmo non esiste. Di conseguenza la funzione $f(x)$ non ha un punto di minimo.

Nota che anche un intervallo del tipo $C = [\frac{1}{2}, 1] \cup [2, 5]$ è considerato chiuso e limitato.
