var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = 800
canvas.height = 600

// Code temporaire pour tester le DnD
// new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);
/////

// Code temporaire pour tester l'affiche de la vue
var forme = new Form('#f3167e', 1);
// forme.paint(ctx);

var rec = new Rectangle(30, 95, 500, 200, 3, '#6d3939');
// rec.paint(ctx);

var ligne = new Line(10, 20, 50, 100, 5, '#f3167e');
// ligne.paint(ctx);


// tester également Dessin.
// var drawing = new Drawing();
// drawing.addlistForm(rec);
// drawing.addlistForm(ligne);
// drawing.paint(ctx, canvas);


// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);

// drawing.addlistForm(rec);
// drawing.addlistForm(ligne);
// drawing.paint(ctx, canvas);

