﻿# Aritmetica modulare

## Monoide

**Monoide** un monoide è un insieme dotato un'operazione che:
- è **associativa**
- è dotata di un elemento neutro.

Si indica con (nome_insieme, operazione)

Es. ( $\mathbb{N} , +$ ) infatti la somma possiede la proprietà associativa e ha l'elemento neutro $0$ 

## Gruppo

**Gruppo**: è un monoide in cui tutti gli elementi ammettono l'inverso

Un gruppo si dice **abeliano** se l'operazione è anche **commutativa**

Es. ( $\mathbb{Z} , +$ ) infatti la somma possiede la proprietà associativa e commutativa, ha l'elemento neutro $0$ e ogni elemento dell'insieme è invertibile

### Proprietà dei gruppi

(viene utilizzato come esempio il prodotto come operazione del gruppo)

- l'elemento neutro è unico
- l'inverso di ogni elemento è unico
- $a \cdot b = a \cdot c \implies b = c$
- $(a\cdot b)^{-1} = a^{-1} \cdot a^{-1}$
- $(a^{-1})^{-1} = a$
- $a^m\cdot a^n = a^{m+n}$
- $(a^m)^n = a^{mn}$
- $(a \cdot b)^n = a^n \cdot b^n$ (solo se l'operazione è commutativa)


## Anelli
 
Un **anello** è un insieme in cui sono definite due operazioni in cui:

- l'insieme e una operazione rappresenta un gruppo abeliano
- l'altro operazione è associativa
- valgono le proprietà distributive

Si indica con (nome_insieme, operazione1, operazione2)

Un anello è commutativo se la seconda operazione è anche commutativa-

Es $(\mathbb{Z}, + , \cdot)$

## Campi

Un **campo** è un **anello** in cui ogni elemento è invertibile (tranne 0)

Es. $(\mathbb{Q}, +, \cdot)$

## Divisione euclidea

La divisione euclidea è composta da:
- $a$ *dividendo*
- $b$ *divisore*
- $q$ *quoziente*
- $r$ *resto*

Se $0\leq r <|b|$

allora esiste una unica coppia $q$ e $r$ tale che:

$$a = b\cdot q + r$$


### Operazione modulo

l'operazione **modulo** è un'operazione che restituisce il resto della divisione tra due numeri ( $a$ e $n$ )

l'insieme dei possibili resti viene indicato con $\mathbb{Z}_n$

$\mathbb{Z}_n = \lbrace 0,1,2,...,n-1\rbrace$

Es. $7 \mod 5 = 2$

#### Proprietà del modulo

- $(a+b) \mod n = ((a \mod n) + (b \mod n)) \mod n$
- $(a\cdot b) \mod n = ((a \mod n) \cdot (b \mod n)) \mod n$

### Congruenza

La congruenza è una **relazione di equivalenza**, si indica con $\equiv$ che vale se:

$a \equiv_nb \iff$ $(a \mod n)$ $= (b \mod n)$

da questa definizione possiamo dire che $a-b$ è un multiplo di $n$

Quindi se $a$ e $b$ hanno lo stesso resto

Es.

$12 \equiv_{10} 2, 5 \equiv_5 15$

Essendo la congruenza una relazione di equivalenza allora può essere suddivisa in classi di equivalenza:

$[a]_n = \lbrace b \in \mathbb{Z} : a \equiv_n b \rbrace$

Quindi tutti gli interi che divisi per n danno lo stesso resto di a diviso n.

Es. classi di equivalenza di $\equiv_3$

- $[0]_3 = \lbrace..., 3, 6, 9 ,... \rbrace$
- $[1]_3 = \lbrace..., 4, 7, 10 ,... \rbrace$
- $[2]_3 = \lbrace..., 5, 8, 11 ,... \rbrace$


## Criteri di divisibilità

### Divisibilità per 2

Un numero è divisibile per 2 se il numero è pari

### Divisibilità per 3

Un numero è divisibile per 3 se la somma delle cifre del numero è anch'essa divisibile per 3

### Divisibilità per 4

Un numero è divisibile per 4 se le ultime due cifre sono un multiplo di 4 oppure sono 00

### Divisibilità per 5

Un numero è divisibile per 5 se l'ultima cifra è 0 oppure 5

### Divisibilità per 6

Un numero è divisibile per 6 se il numero è sia divisibile per 2 che per 3

### Divisibilità per 8

Un numero è divisibile per 8 se le ultime tre cifre del numero sono divisibile per 8 oppure sono 000

### Divisibilità per 9

Un numero è divisibile per 9 se la somma delle cifre del numero è anch'essa divisibile per 9

### Divisibilità per 10

Un numero è divisibile per 10 se l'ultima cifra è 0


### Regola generale

Avendo due numeri naturali $a,b$ in cui $b\leq a$ possiamo dire che b è un divisore di a se e solo se:

$$c_0  + \sum_{i=0}^{n} c_i (10^i \mod b) \equiv_b 0$$

### Teorema

Siano $a, b, c,r \in Z$ . Sia $r$ il resto della divisione di $b$ per $a$ , cioè $b = aq + r$ per qualche $q \in Z$ . Se Supponiamo che $c|a$ e $c|b$ allora anche $c|r$

**dimostrazione**:

Se  $c|a$ allora esiste un numero $n$ tale che $a = cn$

Se $c|b$ allora esiste un numero $m$ tale che $b = cm$

Quindi da $b = aq + r$ ricaviamo $cm = cnq + r$

Quindi abbiamo che $r = c(m-nq)$ per cui abbiamo che $c|r$

## Minimo comune multiplo

Avendo due numeri $a$ e $b$ il minimo dei multipli comuni di $a$ e $b$ è detto minimo comune multiplo (MCM), si scrive: mcm(a,b)

Es. 
- mcm(1,6) = 6
- mcm(4,6) = 12


## Massimo comune divisore

Avendo due numeri $a$ e $b$ il massimo dei divisori comuni di $a$ e $b$ è detto massimo comune divisore (MCD), si scrive: mcd(a,b)

Es. 
- mcd(1,6) = 1
- mcd(4,6) = 2

### Algoritmo 

Avendo due numeri $a$ e $b$ in cui $a \geq b$

1. fare la divisione intera di $a$ per $b$
2. mettere il valore di $b$ in $a$
3. mettere il valore del resto della divisone in $b$
4. ripetere i passaggi fino a che il resto risulta $0$

il valore dell'MCD sarà il valore di $a$ quando il resto ha raggiunto lo $0$

## Teorema di Bezout

Avendo $a,b \in \mathbb{N}^+$ e $d = \text{MCD}(a,b)$ allora esistono due numeri interi $x,y$ tali che 

$$d = ax + by$$

Quest'ultima viene detta **identità di Bezout**

Es. $a = 12$ e $b = 8$ abbiamo che $\text{MCD}(12,8) = 4$ Quindi:

$4 = 12 \cdot 1 + 8 \cdot (-1)$

con $x = 1$ e $y = -1$ (ci sono potenzialmente infinite combinazioni)


### Lemma

Se abbiamo $a,b,d \in \mathbb{N}^+$ e supponiamo che $d|a$ e $d|b$ e supponiamo che esistono $x,y \in \mathbb{Z}$ tali che $d = ax + by$ allora

$$d = \text{MCD}(a,b)$$

### Corollario

Due numeri $a,b \in \mathbb{N}^+$ sono numeri coprimi (unico divisore comune è 1) se e solo se esistono $x,y \in \mathbb{Z}$ tali che $ax+by = 1$

### Teorema di Bezout generalizzato

Siano $a,b,c \in \mathbb{Z}$ e sia $d = \text{MCD}(a,b)$ allora l'equazione $ax+by = c$ ammette soluzioni intere se e solo se $d|c$


