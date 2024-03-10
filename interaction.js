// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

// fait avec class
/*class DnDe {
    // Définir ici les attributs de la 'classe'
    xInitial = 0;
    yInitial = 0;
    xFinal = 0;
    yFinal = 0;
    pression = false;
    canvas;
    interactor;

    constructor(canvas, interactor) {
        this.canvas = canvas;
        this.interactor = interactor;
        // Associer les fonctions précédentes aux évènements du canvas.
        this.canvas.addEventListener("mousedown", this.pressured, false);
        this.canvas.addEventListener("mousemove", this.moving, false);
        this.canvas.addEventListener("mouseup", this.released, false);
    }

    // Developper les 3 fonctions gérant les événements
    pressured = function (evt) {
        let position;
        position = getMousePosition(canvas, evt);
        this.xInitial = position.x;
        this.yInitial = position.y;
        this.pression = true;
        this.interactor.onInteractionStart(this);
        // console.log(this.xInitial + ' pressured ');
        // console.log(this.yInitial);

    }.bind(this);

    moving = function (evt) {
        if (this.pression) {
            this.xFinal = getMousePosition(canvas, evt).x;
            this.yFinal = getMousePosition(canvas, evt).y;
            this.interactor.onInteractionUpdate(this);
            console.log(this.xFinal + ' moving ');
            console.log(this.yFinal);
        }
    }.bind(this);

    released = function (evt) {
        this.pression = false;
        this.xFinal = getMousePosition(canvas, evt).x;
        this.yFinal = getMousePosition(canvas, evt).y;
        this.interactor.onInteractionEnd(this);
        console.log(this.xFinal + ' released ');
        console.log(this.yFinal);
    }.bind(this);
}*/

function DnD(canvas, interactor) {

    // Définir ici les attributs de la 'classe'
    this.xInitial = 0;
    this.yInitial = 0;
    this.xFinal = 0;
    this.yFinal = 0;
    this.pression = false;

    // Developper les 3 fonctions gérant les événements
    this.pressured = function (evt) {
        let position;
        position = getMousePosition(canvas, evt);
        this.xInitial = position.x;
        this.yInitial = position.y;
        this.pression = true;
        interactor.onInteractionStart(this);
        console.log(this.xInitial);
        console.log(this.yInitial);
    }.bind(this);

    this.moving = function (evt) {
        if (this.pression) {
            this.xFinal = getMousePosition(canvas, evt).x;
            this.yFinal = getMousePosition(canvas, evt).y;
            interactor.onInteractionUpdate(this);
            console.log(this.xFinal + ' moving ');
            console.log(this.yFinal);
        }
    }.bind(this);

    this.released = function (evt) {
        this.pression = false;
        this.xFinal = getMousePosition(canvas, evt).x;
        this.yFinal = getMousePosition(canvas, evt).y;
        interactor.onInteractionEnd(this);
        console.log(this.xFinal);
        console.log(this.yFinal);
    }.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener("mousedown", this.pressured, false);
    canvas.addEventListener("mousemove", this.moving, false);
    canvas.addEventListener("mouseup", this.released, false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



