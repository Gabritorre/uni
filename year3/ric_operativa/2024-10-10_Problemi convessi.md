# Problemi convessi

Per caratterizzare le proprietà dei problemi di programmazione matematica in cui l’insieme ammissibile $C$ risulta essere convesso e la funzione obiettivo è convessa, è importante introdurre il concetto di **convessità**.

In particolare con funzioni convesse i punti di **minimo locale e globale coincideranno** (lo stesso vale per i massimi locali e globali).

Dato un insieme non vuoto $C \subseteq \mathbb{R}^n$, diremo che $C$ è un insieme convesso se

$$
ax + (1 -\alpha)y \in C \hspace{5mm} \forall x, y \in C, \hspace{2mm} \forall\alpha \in [0, 1]
$$

ovvero $C$ è convesso se presa qualunque coppia di punti $x, y$ nell’insieme $C$, il segmento che li congiunge è interamente all’interno dell’insieme stesso.

la quantità $ax + (1 -\alpha)y$ al variare di $\alpha \in [0, 1]$ rappresenta proprio tutti i punti del segmento che congiunge $x$ e $y$ e si chiama **combinazione convessa**.

**L’insieme vuoto** è anche ritenuto un insieme convesso.

![https://i.ibb.co/YDkBxWz/image-2.png](https://i.ibb.co/YDkBxWz/image-2.png)

Dati degli insiemi convessi $C_1, …, C_m$ con $m \geq 1$ allora anche la loro **intersezione è un insieme convesso**.

![https://i.ibb.co/zbJTK54/image.png](https://i.ibb.co/zbJTK54/image.png)
