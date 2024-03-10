var editingMode = {rect: 0, line: 1, circle: 2, ellipse: 3};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000';
    this.currLineCap = 'square';
    this.currentShape = 0;

    let lineCaps = document.getElementsByName("linecap");
    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);
    // new DnDe(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function (dnd) {
        this.currEditingMode = document.getElementById("butRect").checked ? editingMode.rect
            : document.getElementById("butLine").checked ? editingMode.line :
                document.getElementById("butCircle").checked ? editingMode.circle : editingMode.ellipse;

        this.currLineWidth = document.getElementById("spinnerWidth").value;
        this.currColour = document.getElementById("colour").value;

        this.currLineCap = document.getElementById("square").checked ? lineCaps[0].value
            : document.getElementById("round").checked ? lineCaps[1].value : lineCaps[2].value;

        switch (this.currEditingMode) {
            case editingMode.rect:
                this.currentShape = new Rectangle(dnd.xInitial, dnd.yInitial, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour, this.currLineCap);
                break;
            case editingMode.line:
                this.currentShape = new Line(dnd.xInitial, dnd.yInitial, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour, this.currLineCap);
                break;
            case editingMode.circle:
                this.currentShape = new Circle(dnd.xInitial, dnd.yInitial, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour, this.currLineCap);
                break;
            case editingMode.ellipse:
                this.currentShape = new Ellipse(dnd.xInitial, dnd.yInitial, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour, this.currLineCap);
                break;
        }
    }.bind(this);

    this.onInteractionUpdate = function (dnd) {
        if (this.currentShape !== 0) {
            this.currentShape.clear(ctx);
            this.currentShape.xFinal = dnd.xFinal;
            this.currentShape.yFinal = dnd.yFinal;
            drawing.paint(ctx);
            this.currentShape.paint(ctx);
        }
    }.bind(this);

    this.onInteractionEnd = function (dnd) {
        if (this.currentShape !== 0) {
            this.currentShape.xFinal = dnd.xFinal;
            this.currentShape.yFinal = dnd.yFinal;
            this.currentShape.paint(ctx);
            drawing.addlistForm(this.currentShape);
            drawing.paint(ctx);
            drawing.updateShapeList();
        }
    }.bind(this);

}


