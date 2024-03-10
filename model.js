// Implémenter ici les 4 classes du modèle.
function Drawing() {
    this.listForm = [];
    this.getlistForm = function () {
        return this.listForm;
    }.bind(this);

    this.addlistForm = function (listForm) {
        this.listForm.push(listForm)
    }.bind(this);

    this.removeForm = function (form) {
        this.listForm.splice(this.listForm.indexOf(form), 1);
        console.log(this.listForm);
        this.updateShapeList();
        this.paint(ctx);
    }.bind(this);
}


function Form(color, thickness, linecap) {
    this.color = color;
    this.thickness = thickness;
    this.linecap = linecap;
}

function Rectangle(xInitial, yInitial, xFinal, yFinal, thickness, color, linecap) {
    this.name = "rectangle";
    Form.call(this, color, thickness, linecap);
    this.xInitial = xInitial;
    this.yInitial = yInitial;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
}

function Line(xInitial, yInitial, xFinal, yFinal, thickness, color, linecap) {
    this.name = "line";
    Form.call(this, color, thickness, linecap);
    this.xInitial = xInitial;
    this.yInitial = yInitial;
    this.xFinal = xFinal;
    this.yFinal = yFinal;
}

function Circle(xInitial, yInitial, rayon, startAngle, thickness, color, linecap) {
    this.name = "circle";
    Form.call(this, color, thickness, linecap);
    this.xInitial = xInitial;
    this.yInitial = yInitial;
    this.xFinal = rayon;
    this.yFinal = startAngle;
}

function Ellipse(xInitial, yInitial, rayonX, rayonY, thickness, color, linecap) {
    this.name = "ellipse";
    Form.call(this, color, thickness, linecap);
    this.xInitial = xInitial;
    this.yInitial = yInitial;
    this.xFinal = rayonX;
    this.yFinal = rayonY;
}

//héritage !

Rectangle.prototype = new Form();
Line.prototype = new Form();
Circle.prototype = new Form();
Ellipse.prototype = new Form();
