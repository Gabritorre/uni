# Potenze e Radici

 ## Potenze

La potenza è formata da una **base** $a$ e da un **esponente** $x$ scritto nel seguente modo $a^x$ e rappresenta il prodotto di $x$ fattori uguali ad $a$

$$2^5 = 2*2*2*2*2$$

### Proprietà

#### Prodotto di potenze con stessa base

$$a^x*a^y = a^{x+y}$$

#### Potenza di potenza

$$(a^x)^y = a^{x*y}$$

#### Divisione di potenze con stessa base

$$\frac{a^x}{a^y} = a^{x-y}$$

#### Potenza negativa

$$a^{-x} = \frac{1}{a^x}$$

#### Prodotto di potenze con stesso esponente e base diversa

$$a^x*b^x = (a*b)^x$$

#### Casi particolari

$$a^0 = 1$$

$$0^0 =\text{indeterminato}$$

$$1^x = 1 \forall x \in \mathbb{R}$$

$$(-a)^x =\text{positivo se x pari}$$

$$(-a)^x =\text{negativo se x dispari}$$

## Radici

La radice è l'operazione inversa della potenza:

$$x^n = a$$

$$x = \sqrt[n]{a}$$

Questa operazione è formata da un **indice**, dal **radicando** e dal **radicale**:
- Radicale è il simbolo di radice completo di indice e radicando. Es. $\sqrt[3]{2}$.
- L'indice è il numero che si trova sopra il simbolo di radice. Es. $3$ nell'esempio scritto sopra. (quano non è esplicitato si sottintende che è $2$)
- Il radicando è l'argomento della radice. Es. $2$ nell'esempio scritto sopra.

È possibile scrivere il radicale come potenza con esponente razionale:
$$\sqrt[c]{a^b} = a^{\frac{b}{c}}$$


- Se l'indice è pari allora la base deve essere positiva (maggiore uguale a $0$).
- Se l'indice è dispari la base può essere positiva o negativa.

### Esempi

$\sqrt[n]{0} = 0$

$\sqrt[n]{1} = 1$

$\sqrt[2]{4} = 2$

$\sqrt[2]{-4} = \text{non esiste}$

$\sqrt[3]{-8} = -2$

$\sqrt{3}$ si lascia scritto in questo modo

### Proprietà

#### Prodotto di radicali con stesso indice

$$\sqrt[n]{a} * \sqrt[n]{b} = \sqrt[n]{a*b}$$

#### Divisione di radicali con stesso indice

$$\frac{\sqrt[n]{a}} {\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}} \text{ con b}\neq 0$$

#### Potenza di radicale

$$(\sqrt[n]{a})^m = \sqrt[n]{a^m}$$

#### Radice di radice

$$\sqrt[n]{\sqrt[m]{a}} = \sqrt[nm]{a}$$

$$\sqrt[n]{x\sqrt[m]{a}} = \sqrt[n]{\sqrt[m]{x^m*a}} = \sqrt[nm]{x^m*a}$$

#### Proprietà invariantiva

Moltiplicando per uno stesso valore l'indice della radice e l'esponente del radicando (non negativo), il risultato della radice non cambia.

$$\sqrt[n]{a^x} = \sqrt[nq]{a^{xq}}$$

Es.
- $\sqrt[4]{2} = \sqrt[4*3]{2^{1*3}}= \sqrt[12]{8}$
- $\sqrt[8]{16} = \sqrt[8]{2^{4}} \text{ moltiplico per }\frac{1}{4} = \sqrt{2}$
- $\sqrt{16} = \sqrt[2*\frac{1}{2}]{2^{4*\frac{1}{2}}}= 2^2 = 4$

### Portare fuori dalla radice

I fattori che sono argomento di una radice si possono portare fuori se il loro esponente è uguale all'indice della radice.

Es.
- $\sqrt{45} = \sqrt{9*5} = \sqrt{3^2*5}\text{ l'esponente del 3 è = dell'indice della radice, quindi } 3\sqrt{5}$
- $\sqrt[3]{81} = \sqrt[3]{3^4} \text{ l'esponente del 3 è > dell'indice della radice, quindi } \sqrt[3]{3^3*3} = 3\sqrt[3]{3}$


### Portare dentro alla radice

È il contrario di portare fuori un fattore, quindi quando si porta dentro si eleva il numero per il valore dell'indice.

Es.
- $2\sqrt{3} = \sqrt{2^2*3} = \sqrt{12}$
- $2\sqrt[3]{2} = \sqrt[3]{2^3*2} = \sqrt[3]{16}$


### Razionalizzazione

Razionalizzare significa eliminare la radice dal denominatore ma mantenendo il risultato uguale.

Es.

- $\frac{2}{\sqrt{7}} = \frac{2}{\sqrt{7}}*\frac{\sqrt{7}}{\sqrt{7}} = \frac{2\sqrt{7}}{7}$
- $\frac{4}{\sqrt{2}} = \frac{4}{\sqrt{2}}*\frac{\sqrt{2}}{\sqrt{2}} = \frac{\cancel{4}\sqrt{2}}{\cancel{2}} = 2\sqrt{2}$
- $\frac{3}{\sqrt{8}} = \frac{3}{2\sqrt{2}}*\frac{\sqrt{2}}{\sqrt{2}} = \frac{3\sqrt{2}}{4}$
- $\frac{2}{\sqrt[4]{3}} = \frac{2}{\sqrt[4]{3}}*\frac{\sqrt[4]{3^3}}{\sqrt[4]{3^3}} = \frac{2\sqrt[4]{27}}{3}$
- $\frac{8}{\sqrt{6}+\sqrt{2}} = \frac{8}{\sqrt{6}+\sqrt{2}}*\frac{\sqrt{6}-\sqrt{2}}{\sqrt{6}-\sqrt{2}} = \frac{8(\sqrt{6}-\sqrt{2})}{6-2} = \frac{\cancel{8}(\sqrt{6}-\sqrt{2})}{\cancel{4}} = 2(\sqrt{6}-\sqrt{2})$
- $\frac{8}{\sqrt{6}-2} = \frac{8}{\sqrt{6}-2}*\frac{\sqrt{6}+2}{\sqrt{6}+2} = \frac{8(\sqrt{6}+2)}{6-4} = \frac{\cancel{8}(\sqrt{6}+2)}{\cancel{2}} = 4(\sqrt{6}+2)$

