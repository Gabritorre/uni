# Funzioni a più variabili


Le funzioni a più variabili reali sono funzioni che associano ad un vettore di numeri reali un solo numero reale

$f:A\subset \mathbb{R}^n \longrightarrow \mathbb{R}$
$(x_1, ...., x_n) \longmapsto z = f(x_1,...,x_n)$

Nel caso $n = 2$

$f:A\subset \mathbb{R}^2 \longrightarrow \mathbb{R}$
$(x, y) \longmapsto z = f(x, y)$

Ad esempio l'equazione generica del piano:

$(x,y) \longmapsto z = ax + by + c$

Casi particolari:

- equazione: $x = 0 \to$ abbiamo il piano $Oyz$
- equazione: $y = 0 \to$ abbiamo il piano $Oxz$
- equazione: $z = 0 \to$ abbiamo il piano $Oxy$

![](https://i.ibb.co/TB6x33w/piani.png)

- $x = k \to$ piano parallelo al piano $Oyz$
- $y = k \to$ piano parallelo al piano $Oxz$
- $z = k \to$ piano parallelo al piano $Oxy$

## Insieme di livello (curve di livello)

Dato un valore $k$ l'insieme di livello associato a questo $k$ è l'insieme dei punti del dominio tali che $f(x_1,...,x_n)$ = k;

$\Lambda_k = \{x\in\mathbb{R}^n: x \in A \,\land f(x_1,...x_n) = k\}$


![](https://i.ibb.co/ryNfprc/insieme-livello.png)

## Sezioni verticali

Una sezione verticale è data dall'intersezione tra il grafico di una funzione $f$ e un piano verticale. la curva risultante dall'intersezione è il grafico di una funzione in una variabile

- piani ortogonali all'asse $x$ : la sezione ha funzione $z=f(c, y) \text{ con } c \in \mathbb{R}$
- piani ortogonali all'asse $y$ : la sezione ha funzione $z=f(x, c) \text{ con } c \in \mathbb{R}$

### Paraboloide ellittico

Equazione generale: $z = a(x - x_0)^2 + b(y-y_0)^2+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) = x^2 + y^2$
![enter image description here](https://i.ibb.co/zbXs1fv/parab-ellitico.png)

- $a$ e $b$ devono avere lo stesso segno
- vertice in $(x_0, y_0)$
- curve di livello:
	- se $a=b$ circonferenze
	- se $a\neq b$ ellissi
- sezioni verticali: parabole
	- $f(0,y) = y^2$
	- $f(x,0) = x^2$

### Cono

Equazione generale: $z = \sqrt{a(x - x_0)^2 + b(y-y_0)^2}+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) =\sqrt{x^2 + y^2}$

![](https://i.ibb.co/jW7Qq6Y/cono.png)

- $a$ e $b$ devono essere positivi
- vertice in $(x_0, y_0)$
- curve di livello: circonferenze di raggio k (altezza del piano che usiamo per "tagliare" il grafico)
- sezioni verticali: valore assoluto
	- $f(0,y) = |y|$
	- $f(x,0) = |x|$

### Paraboloide iperbolico

Equazione generale: $z = a(x - x_0)^2 + b(y-y_0)^2+c$

Disegno di un paraboloide semplice $(x_0 = 0, y_0 = 0, c =0, a = 1, b = 1)$ :

$f(x,y) =x^2 - y^2$

![](https://i.ibb.co/tQmSZPC/parab-iper.png)

- $a$ e $b$ devono avere segni diversi
- sella in $(x_0, y_0)$
- curve di livello:
	- iperboli
- sezioni verticali: parabole
	- $f(0,y) = -y^2$
	- $f(x,0) = x^2$


## Dominio

Il dominio rappresenta una porzione del piano definito dalle condizioni delle variabili x e y.

Tutte le regole del dominio delle funzioni più note rimangono uguali.

Generalmente per trovare il dominio si presentano delle disequazioni, per trovare il domino:
1. risolvere l'equazione associata e disegnarla
2. per capire dove è il dominio rispetto al disegno possiamo sostituire x e y per vedere se soddisfa la disequazione.


Es.
Trovare il dominio della funzione $z = \sqrt{4-x^2-y^2}$

Il dominio è dato da tutte le coppie (x,y) tali che $4-x^2-y^2\geq0$

disegno l'equazione associata (trovo i punti di frontiera)

$x^2+ y^2 = 4$ è una circonferenza di centro $(0,0)$ e raggio $2$

per capire se il domino della funzione è interno o esterno alla circonferenza sostituisco al posto di x e y lo 0 (che è un punto interno), la disequazione restituisce $4-0-0\geq0$ che è vera quindi la funzione è interna alla circonferenza

## Topologia in $\mathbb{R}^n$

Per le successive definizioni è necessario considerare un intorno sferico in $\mathbb{R}^n$ $U_r$ di centro $P_0$ e raggio $r$

In $\mathbb{R}^2$ ad esempio:
![](https://i.ibb.co/mJVFqQY/intorno-circ.png)

Dato un insieme $E$ e un punto $P$, esso si dice:
- **Interno** ad $E$ se esiste un intorno di $P$ composto solo da punti che sono appartenenti ad $E$
- **esterno** ad $E$ se esiste un intorno di $P$ che non possiede punti appartenenti ad $E$
- **punto di frontiera** per $E$ se ogni intorno di $P$ possiede sia punti di $E$ sia punti non appartenenti ad $E$

![](https://i.ibb.co/hKy07zx/punti.png)

- $\mathring{E}$ :**parte interna** è l'insieme dei punti interi di $E$
- $\partial E$ : **bordo** è l'insieme dei punti di frontiera di $E$
- $\overline{E}$ :**chiusura** è l'insieme dei punti di $E$ compreso il bordo $(\overline{E}) = \mathring{E} \, \cup \, \partial E$


Sempre considerando l'insieme $E\subseteq \mathbb{R}^n$ , $E$ si dice:
- **aperto** se ogni suo punto è un punto interno (non contiene i punti di frontiera)
- **chiuso** se l'insieme contiene la sua frontiera
- **né aperto né chiuso** se alcuni intervalli sono aperti e altri chiusi

Definiamo anche i concetti di insieme:
- **Limitato**: se esiste un intorno circolare di centro l'origine contiene l'insieme.
- **Connesso**: se presi due punti qualsiasi all'interno dell'insieme posso congiungerli tramite una curva continua.

## Limite 

La definizione di limite utilizzando gli intorni è:

data una funzione $f: A \subset \mathbb{R}^n \longrightarrow \mathbb{R}$ e un punto $P_0$ definito dalle coordinate $(x_0, x_1,...,x_n)$ diremo che 

$$\lim_{P\to P_0} f(x) = L \in \mathbb{R}$$

se e solo se per ogni $\epsilon>0$ esiste $\delta>0$ tale che:

$$0<||P-P_0||<\delta \implies |f(x) - L| < \epsilon$$
