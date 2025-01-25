# SVG e canvas

## SVG

**SVG** (*Scalable Vector Graphics*) è un formato di immagine, dove le immagini sono descritte da file di testo utilizzando il linguaggio XML contenenti gli step per rappresentare la grafica (differentemente da formati come PNG e JPEG che specificano valori di una matrice di pixel).

le SVG possono essere integrate in HTML in tre modi:

1. usando il tag `<img>` inserendo un file con estensione `.svg`
2. integrare le istruzioni XML direttamente nel codice HTML usando il tag `<svg>`
3. usare delle API per modificare dinamicamente elementi SVG e crearne di nuovi da capo

```html
<p>This is a red square: <svg width="10" height="10">
    <rect width="10" height="10" fill="red" />
</svg>
```

## Canvas

**Canvas**, d'altra parte, crea una superficie di disegno all'interno del documento ed espone un'API di disegno a JavaScript. Un canvas si crea con il tag `<canvas>` e tramite JavaScript si può ottenere il canvas, e poi ottenere il contesto (tramite `getContext()`) per poi disegnare la grafica.

```html
<p>This is a red square: <canvas id="square" width=10 height=10></canvas>
<script>
	let canvas = document.querySelector("#square");  // Get first canvas element
	let context = canvas.getContext("2d");           // Get 2D drawing context
	context.fillStyle = "#f00";                      // Set fill color to red
	context.fillRect(0,0,10,10);                     // Fill a square
</script>
```

## Differenze tra SVG e Canvas:

SVG è più adatto per immagini vettoriali scalabili e interattive, mentre Canvas è più indicato per grafica raster, manipolazione di pixel e visualizzazioni dinamiche di dati.

- **Modalità di disegno:** Con Canvas, si creano disegni **chiamando metodi**, mentre con SVG si crea un **albero di elementi XML**.
- **Scalabilità:** Le immagini SVG sono scalabili senza perdita di qualità, mentre le immagini create con Canvas possono diventare sfocate se ingrandite.
- **Modificabilità:** Gli elementi SVG possono essere facilmente modificati o rimossi dal loro albero, mentre in Canvas, le modifiche spesso richiedono di cancellare l'intero disegno e ridisegnarlo.
- **Creazione:** Gli elementi SVG possono essere inclusi direttamente in HTML o creati dinamicamente con il DOM API. Canvas viene creato con l'elemento `<canvas>` e il suo contenuto viene disegnato tramite l'API JavaScript.
- **Grafica 3D:** Canvas supporta anche la grafica 3D tramite WebGL. SVG non ha supporto nativo per la grafica 3D.
