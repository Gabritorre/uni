# Spazi vettoriali

## Gruppo

**Gruppo**: è composto da un insieme $G$ e un'operazione *

$(G, *)$ è un gruppo se:

- l'operazione è associativa
- esiste l'elemento neutro
- esiste l'inverso di ogni elemento

Un gruppo si dice **abeliano** se l'operazione è anche **commutativa**

Es. ( $\mathbb{Z} , +$ ) infatti la somma possiede la proprietà associativa e commutativa, ha l'elemento neutro $0$ e ogni elemento dell'insieme è invertibile

## Anelli
 
Un **anello** è un insieme in cui sono definite due operazioni, somma e prodotto in cui:

- l'insieme e la somma sono un gruppo abeliano
- l'operazione prodotto è associativa
- valgono le leggi distributive

Si indica con (nome_insieme, operazione1, operazione2)

Un **anello è commutativo** se la seconda operazione è anche commutativa

viene chiamato **anello con identità** se:
- esiste l'identità del prodotto $(\exists 1 \in A : a \cdot 1 = 1 \cdot a)$

l'anello è **invertibile** se:
- esiste l'inverso $(\exists a' \in A : a\codt a' = a' \cdot a = 1)$

Es $(\mathbb{Z}, + , \cdot)$

## Campi

Un **campo** è un **anello** in cui ogni elemento è invertibile (tranne 0) e in cui vale la legge dell'annullamento del prodotto

Es. $(\mathbb{Q}, +, \cdot)$

## Spazi vettoriali

Sia $K$ un campo numerico (un'estensione dell'insieme $\mathbb{Q}$ )

Gli elementi di $K$ sono degli scalari

Uno spazio vettoriale su $K$ è costituito da un insieme di vettori $V$ dotati di:
- Somma vettoriale
- Prodotto scalare

Devono inoltre valere i seguenti **assiomi**:

$a,b,c,d \in V$ vettori 
$m,s \in K$

|numero ass.| proprietà  | nome proprietà |
|--|--|--|
|1| $$a+(b+c) = (a+b)+c$$ |prop. associativa
|2| $$a+b = b+a$$ |prop. commutativa
|3| $$0+a = a = a+0$$ |elem. neutro
|4| $$a+(-a) = 0 = (-a)+a$$ |inversa della somma
|5| $$(r+s)a = ar + as$$ |prop. distributiva
|6| $$(r\cdot s)a = r(sa)$$ | prop. distributiva
|7| $$r(a+b) = ra+rb$$ | prop. distributiva
|8| $$O \cdot a = O$$ |O = vettore nullo


## Sottospazi

Avendo $V$ spazio vettoriale nel campo $K$

Possiamo avere $U$ che è un sottoinsieme non vuoto di $V$, tale che

- $v,w \in U \to v+w \in U$
- $v \in U \land r \in K \to r\cdot v \in U$
