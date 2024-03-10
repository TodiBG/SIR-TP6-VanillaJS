// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.lineCap = this.linecap;
    ctx.rect(this.xInitial, this.yInitial, this.xFinal, this.yFinal);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.lineCap = this.linecap;
    ctx.moveTo(this.xInitial, this.yInitial);
    ctx.lineTo(this.xFinal, this.yFinal);
    ctx.stroke();
};

Circle.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.lineCap = this.linecap;
    ctx.arc(this.xInitial, this.yInitial, this.xFinal, 0, 2 * Math.PI, false);
    ctx.stroke();
};

Ellipse.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.lineCap = this.linecap;
    ctx.ellipse(this.xInitial, this.yInitial, this.xFinal, this.yFinal, 45 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.stroke();
};

Form.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.lineCap = this.linecap;
};

Form.prototype.clear = function (ctx) {
    canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getlistForm().forEach(function (form) {
        form.paint(ctx);
    });
}

Drawing.prototype.updateShapeList = function () {

    document.getElementById("shapeList").innerHTML = "";
    this.getlistForm().forEach(function (form) {
        let content;
        switch (form.name) {
            case "line":
                content = "line " + " (" + Math.round(form.xInitial) + "," + Math.round(form.yInitial) + ")" + " (" + Math.round(form.xFinal) + "," + Math.round(form.yFinal) + ")";
                break;
            case "rectangle":
                content = "rectangle " + " (" + Math.round(form.xInitial) + "," + Math.round(form.yInitial) + ") " + Math.round(form.xFinal) + " " + Math.round(form.yFinal);
                break;
            case "circle":
                content = "circle " + " (" + Math.round(form.xInitial) + "," + Math.round(form.yInitial) + ") rayon : " + Math.round(form.xFinal);
                break;
            case "ellipse":
                content = "ellipse " + " (" + Math.round(form.xInitial) + "," + Math.round(form.yInitial) + ") rayon 1 : " + Math.round(form.xFinal) + " rayon 2 : " + Math.round(form.yFinal);
                break;
        }

        let li = document.createElement("li");
        li.textContent = content;

        let button = document.createElement("button");
        button.className = "btn btn-default";
        button.addEventListener("click", function () {
            drawing.removeForm(form);
        });

        let span = document.createElement("span");
        span.className = "glyphicon glyphicon-remove-sign";

        button.appendChild(span);
        li.appendChild(button);
        document.getElementById("shapeList").appendChild(li);

    });
};


