# Aritmetica modulare

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
