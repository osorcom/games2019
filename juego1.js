var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

function dibujar(fallos) {
    var l = 0;
    while (l<=fallos) {
        if (fallos == 0 || 0<= fallos) {
            /* horca */
            ctx.moveTo(50, 550);
            ctx.lineTo(50, 50);
            ctx.lineTo(200, 50);
            ctx.lineTo(200, 100);
            ctx.stroke();
            ctx.moveTo(50, 140);
            ctx.lineTo(130, 50);
            ctx.lineTo(50, 50);
            ctx.lineTo(90,95);
            ctx.stroke();
            ctx.fillRect(0,550,300,300)
        }

        if (fallos == 1 || 1<= fallos) {
            /* cabeza */
            ctx.beginPath();
            ctx.arc(200, 120, 20, 0, 2 * Math.PI);
            ctx.stroke();
        }
        if (fallos == 2 || 2<= fallos) {
            /* cuerpo */
            ctx.moveTo(200, 140);
            ctx.lineTo(200, 200);
            ctx.stroke();
        }
        if (fallos == 3 || 3<= fallos) {
            /* brazo izquierdo */
            ctx.moveTo(200, 150);
            ctx.lineTo(170, 170);
            ctx.stroke();
        }
        if (fallos == 4 || 4<= fallos) {
            /* brazo derecho */
            ctx.moveTo(200, 150);
            ctx.lineTo(230, 170);
            ctx.stroke();
        }
        if (fallos == 5 || 5<= fallos) {
            /* pierna izquierda */
            ctx.moveTo(200, 200);
            ctx.lineTo(170, 240);
            ctx.stroke();
        }
        if (fallos == 6 || 6<= fallos) {
            /* pierna derecha */
            ctx.moveTo(200, 200);
            ctx.lineTo(230, 240);
            ctx.stroke();
            /* Ojos */
            ctx.moveTo(185,115);
            ctx.lineTo(195,120);
            ctx.stroke();
            ctx.moveTo(205,115);
            ctx.lineTo(215,120);
            ctx.stroke();
            ctx.moveTo(195,115);
            ctx.lineTo(185,120);
            ctx.stroke();
            ctx.moveTo(215,115);
            ctx.lineTo(205,120);
            ctx.stroke();
            ctx.moveTo(195,130);
            ctx.lineTo(205,130);
            ctx.stroke();
        }
        if (fallos == l){
            return
        }
        l++;

    }
}

dibujar(6);
