var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function dibujar(fallos) {
    var l = 0;
    while (l<=fallos) {
        if (fallos == 0 || 0<= fallos) {
            /* horca */
            ctx.moveTo(30, 250);
            ctx.lineTo(30, 50);
            ctx.lineTo(125, 50);
            ctx.lineTo(125, 100);
            ctx.stroke();
            ctx.moveTo(30, 90);
            ctx.lineTo(75, 50);
            ctx.stroke();
        }

        if (fallos == 1 || 1<= fallos) {
            /*cabeza*/
            ctx.beginPath();
            ctx.arc(125, 115, 15, 0, 2 * Math.PI);
            ctx.stroke();
        }
        if (fallos == 2 || 2<= fallos) {
            /* cuerpo */
            ctx.moveTo(125, 130);
            ctx.lineTo(125, 190);
            ctx.stroke();
        }
        if (fallos == 3 || 3<= fallos) {
            /* brazo izquierdo*/
            ctx.moveTo(125, 140);
            ctx.lineTo(110, 160);
            ctx.stroke();
        }
        if (fallos == 4 || 4<= fallos) {
            /* brazo derecho*/
            ctx.moveTo(125, 140);
            ctx.lineTo(140, 160);
            ctx.stroke();
        }
        if (fallos == 5 || 5<= fallos) {
            /* pierna izquierda*/
            ctx.moveTo(125, 190);
            ctx.lineTo(110, 220);
            ctx.stroke();
        }
        if (fallos == 6 || 6<= fallos) {
            /* pierna derecha*/
            ctx.moveTo(125, 190);
            ctx.lineTo(140, 220);
            ctx.stroke();
            ctx.moveTo(115,110);
            ctx.lineTo(125,115);
            ctx.stroke();
            ctx.moveTo(126,110);
            ctx.lineTo(136,115);
            ctx.stroke();
            ctx.moveTo(125,110);
            ctx.lineTo(115,115);
            ctx.stroke();
            ctx.moveTo(136,110);
            ctx.lineTo(126,115);
            ctx.stroke();
        }
        if (fallos == l){
            return
        }
        l++;

    }
}

dibujar(0);
