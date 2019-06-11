var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d")
var palabras = ["ABABA", "ABACA", "ABACO", "ABADA", "ABADI", "ABAJA", "ABAJE", "ABAJO", "ABALA", "ABALE", "ABALO", "ABANA", "ABANE", "ABANO", "ABAÑA", "ABAÑE", "ABAÑO", "ABASI", "ABATA", "ABATE", "ABATI", "ABATO", "ABECE", "ABEJA", "ABETE", "ABETO", "ABIAR", "ABIAS", "ABINA", "ABINE", "ABINO", "ABISO", "ABITA", "ABITE", "ABITO", "ABOBA", "ABOBE", "ABOBO", "ABOCA", "ABOCO", "ABOFA", "ABOFE", "ABOFO", "ABOGA", "ABOGO", "ABOLI", "ABONA", "ABONE", "ABONO", "ABOYA", "ABOYE", "ABOYO", "ABOZO", "ABRAN", "ABRAS", "ABREN", "ABRES", "ABRIA", "ABRID", "ABRIL", "ABRIO", "ABRIR", "ABRIS", "ABSIT", "ABUBO", "ABUCE", "ABUJE", "ABURA", "ABURE", "ABURO", "ABUSA", "ABUSE", "ABUSO", "ABUZA", "ABUZO", "ACABA", "ACABE", "ACABO", "ACAMA", "ACAME", "ACAMO", "ACANA", "ACARA", "ACARE", "ACARO", "ACASO", "ACATA", "ACATE", "ACATO", "ACEBO", "ACECE", "ACEDA", "ACEDE", "ACEDO", "ACEMA", "ACEÑA", "BABAS", "BABEA", "BABEE", "BABEL", "BABEO", "BABIS", "BABLE", "BABOR", "BACAN", "BACAS", "BACHE", "BACIA", "BACIN", "BACON", "BADAL", "BADAN", "BADAS", "BADEA", "BADEN", "BADIL", "BAFLE", "BAGAD", "BAGAN", "BAGAR", "BAGAS", "BAGOS", "BAGRE", "BAGUE", "BAHAI", "BAHIA", "BAIDA", "BAIFA", "BAIFO", "BAILA", "BAILE", "BAILO", "BAJAD", "BAJAN", "BAJAR", "BAJAS", "BAJEA", "BAJEE", "GABAN", "GABAR", "GACEL", "GACHA", "GACHE", "GACHI", "GACHO", "GAFAD", "GAFAN", "GAFAR", "GAFAS", "GAFEA", "GAFEE", "GAFEN", "GAFEO", "GAFES", "GAFOS", "GAGAS", "GAGOS", "GAITA", "GAJES", "GAJOS", "GALAN", "GALAS", "GALCE", "GALEA", "GALEO", "GALES", "GALGA", "GALGO", "GALIO", "GALLA", "GALLE", "GALLO", "GALON", "GALOP", "GALOS", "GALUA", "GAMAS", "GAMBA", "GAMMA", "GAMON", "GAMOS", "GANAD", "GANAN", "GANAR", "GANAS", "GANEN", "GANES", "GANGA", "GANSA", "GANSO", "GANTA", "GANTE", "GAÑAN", "GAÑAS", "GAÑEN", "GAÑES", "GAÑIA", "GAÑID", "SABEA", "SABED", "SABEN", "SABEO", "SABER", "SABES", "SABIA", "SABIO", "SABIR", "SABLE", "SABOR", "SABRA", "SABRE", "SACAD", "SACAN", "SACAR", "SACAS", "SACES", "SACHA", "SACHE", "SACHO", "SACIA", "SACIE", "SACIO", "SACON", "SACOS", "SACRA", "SACRE", "SACRO", "SAETA", "SAETE", "SAETI", "SAETO", "SAFIR", "SAGAS", "SAGAZ", "SAGUS", "SAINA", "SAINE", "SAINO", "SAJAD", "SAJAN", "SAJAR", "SAJAS", "SAJEN", "SAJES", "SAJIA", "SAJON", "UBICA", "UBICO", "UBIES", "UBIOS", "UBRES", "UCASE", "UCHUS", "UEBOS", "UFANA", "UFANE", "UFANO", "UGRES", "UJIER", "UJULE", "ULAGA", "ULALA", "ULANO", "ULEMA", "ULPOS", "ULTRA", "ULUAS", "ULULA", "ULULE", "ULULO", "UMBRA", "UMBRO", "UMERO", "UNAIS", "UNCEN", "UNCES", "UNCIA", "UNCID", "UNCIO", "UNCIR", "UNCIS", "UNGEN", "UNGES", "UNGIA", "UNGID", "UNGIO", "UNGIR", "UNGIS", "UNIAN", "UNIAS", "UNICA", "UNICO", "UNIDA", "UNIDO", "UNION", "UNIRA", "UNIRE", "UNJAN", "UNJAS", "UNTAD", "PACAE", "PACAS", "PACAY", "PACED", "PACEN", "PACER", "PACES", "PACHA", "PACHO", "PACIA", "PACIO", "PACON", "PACOS", "PACTA", "PACTE", "PACTO", "PACUS", "PADRE", "PAFIA", "PAFIO", "PAGAD", "PAGAN", "PAGAR", "PAGAS", "PAGEL", "PAGOS", "PAGRO", "PAGUA", "PAGUE", "PAHUA", "PAICO", "PAILA", "PAINA", "PAIRA", "PAIRE", "PAIRO", "PAJAR", "PAJAS", "PAJEA", "PAJEE", "PAJEL", "PAJEO", "PAJES", "PAJIL", "PAJLA", "PAJON", "PAJOS", "PAJUZ", "PALAS", "PALAY", "PALCA", "PALCO", "PALEA", "PALEE", "QUECO", "QUEDA", "QUEDE", "QUEDO", "QUEJA", "QUEJE", "QUEJO", "QUEMA", "QUEME", "QUEMI", "QUEMO", "QUENA", "QUEPA", "QUEPI", "QUEPO", "QUERA", "QUERE", "QUERO", "QUESO", "QUIAS", "QUIEN", "QUIER", "QUIFS", "QUIJO", "QUILA", "QUILO", "QUIMA", "QUIMO", "QUINA", "QUINO", "QUIÑA", "QUIÑE", "QUIÑO", "QUIOS", "QUIPA", "QUIPU", "QUISA", "QUISE", "QUISO", "QUITA", "QUITE", "QUITO", "QUITU", "QUIVI", "QUIZA", "LABEO", "LABES", "LABIA", "LABIL", "LABIO", "LABOR", "LABRA", "LABRE", "LABRO", "LACAD", "LACAN", "LACAR", "LACAS", "LACEA", "LACEE", "LACEN", "LACEO", "LACES", "LACHA", "LACHO", "LACIA", "LACIO", "LACON", "LACRA", "LACRE", "LACRO", "LACTA", "LACTE", "LACTO", "LADAS", "LADEA", "LADEE", "LADEO", "LADON", "LADOS", "LADRA", "LADRE", "LADRO", "LAGAR", "LAGOS", "LAGUA", "LAICA", "LAICO", "LAIDA", "LAIDO", "LAJAS", "LAMAN", "LAMAS", "LAMBA", "LAMBE", "LAMBI", "LAMBO", "LAMED", "LAMEN", "LAMER", "LAMES", "LAMIA", "LAMIN", "LAMIO", "LAMPA", "LAMPE", "LAMPO", "LANAR", "LANAS", "LANCE", "LANDA", "ÑAJAS", "ÑAJOS", "ÑAMES", "ÑAMPI", "ÑANDU", "ÑANGA", "ÑANGO", "ÑAÑAS", "ÑAÑOS", "ÑAPAS", "ÑAQUE", "ÑATAS", "ÑATEA", "ÑATEE", "ÑATEO", "ÑATOS", "ÑECAS", "ÑECLA", "ÑECOS", "ÑENGA", "ÑENGO", "ÑEQUE", "ÑINGA", "ÑIPES", "ÑIQUE", "ÑIRES", "ÑISCA", "ÑIZCA", "ÑOCAS", "ÑOCHA", "ÑOCLO", "ÑOCOS", "ÑOLAS", "ÑONGA", "ÑONGO", "ÑOÑAS", "ÑOÑEZ", "ÑOÑOS", "ÑOQUI", "ÑORAS", "ÑORBO", "ÑORES", "ÑUBLO", "ÑUCAS", "ÑUCOS", "ÑUDOS", "ÑURDA", "ÑURDO", "ÑUTAS", "ÑUTOS", "ÑUZCO", "ZABRA", "ZABRO", "ZACAS", "ZACEA", "ZACEE", "ZACEO", "ZADES", "ZAFAD", "ZAFAN", "ZAFAR", "ZAFAS", "ZAFEN", "ZAFES", "ZAFIA", "ZAFIO", "ZAFIR", "ZAFON", "ZAFOS", "ZAFRA", "ZAFRE", "ZAGAL", "ZAGAS", "ZAGUA", "ZAHEN", "ZAHON", "ZAIDA", "ZAINA", "ZAINO", "ZAJON", "ZALAS", "ZALBA", "ZALBO", "ZALEA", "ZALEE", "ZALEO", "ZALLA", "ZALLE", "ZALLO", "ZAMBA", "ZAMBO", "ZAMPA", "ZAMPE", "ZAMPO", "ZANAS", "ZANCA", "ZANCO", "ZANGA", "ZANJA", "ZANJE", "ZANJO", "ZAPAD", "ZAPAN", "ZAPAR", "ZAPAS", "ZAPEA", "ZAPEE", "ZAPEN", "ZAPEO", "ZAPES", "ZAQUE", "ZARBO", "ZARCA", "ZARCO", "ZARES", "ZARJA", "ZARPA", "ZARPE", "ZARPO", "ZARZA", "ZARZO", "ZATAS", "ZAYAS", "YABAS", "YACAL", "YACAS", "YACED", "YACEN", "YACER", "YACES", "YACIA", "YACIO", "YACON", "YAGAN", "YAGAS", "YAGUA", "YAITI", "YALES", "YAMAO", "YAMBO", "YAMPA", "YANAS", "YANTA", "YANTE", "YANTO", "YAPAD", "YAPAN", "YAPAR", "YAPAS", "YAPEN", "YAPES", "YAPUS", "YAQUE", "YAQUI", "YARDA", "YARES", "YAREY", "YAROS", "YATAI", "YATAY", "YATES", "YAYAS", "YAYOS", "YAZCA", "YAZCO", "YAZGA", "YAZGO", "YEBOS", "YECOS", "YEDGO", "YEDRA", "YEGUA", "YELGO", "YELMO", "YEMAS", "YENDO", "YENES", "HABAR", "HABAS", "HABER", "HABIA", "HABIL", "HABIZ", "HABLA", "HABLE", "HABLO", "HABON", "HABRA", "HABRE", "HABUS", "HACAN", "HACED", "HACEN", "HACER", "HACES", "HACHA", "HACHE", "HACHO", "HACIA", "HADAR", "HADAS", "HADOS", "HAFIZ", "HAGAN", "HAGAS", "HAIGA", "HALAD", "HALAN", "HALAR", "HALAS", "HALDA", "HALEN", "HALES", "HALLA", "HALLE", "HALLO", "HALON", "HALOS", "HAMEZ", "HAMPA", "HAMPO", "HANZO", "HAPAX", "HARAN", "HARAS", "HARBA", "HARBE", "HARBO", "HARCA", "HARDA", "HAREM", "HAREN", "HARIA", "HARMA", "HARON", "HARPA", "HARRE", "HARTA", "HARTE", "HARTO", "HASTA", "HATEA", "HATEE", "HATEO", "HATOS", "HAUTE", "HAVAR", "HAVOS", "HAYAL", "DABAN", "DABAS", "DABLE", "DACHA", "DACIA", "DACIO", "DADAS", "DADOR", "DADOS", "DAGAS", "DAHIR", "DAIFA", "DAJAO", "DALAS", "DALGO", "DALIA", "DALLA", "DALLE", "DALLO", "DAMAS", "DAMIL", "DAMOS", "DANCE", "DANDI", "DANDO", "DANES", "DANGO", "DANTA", "DANTE", "DANTO", "DANZA", "DANZO", "DAÑAD", "DAÑAN", "DAÑAR", "DAÑAS", "DAÑEN", "DAÑES", "DAÑOS", "DAQUI", "DARAN", "DARAS", "DARDO", "DARES", "DARGA", "DARIA", "DATAD", "DATAN", "DATAR", "DATAS", "DATEA", "DATEE", "DATEN", "DATEO", "DATES", "DATIL", "DATOS", "DAUCO", "DAUDA", "DAZAS", "DEBAN", "DEBAS", "DEBDA", "DEBDO", "DEBED", "DEBEN", "DEBER", "DEBES", "DEBIA", "DEBIL", "DEBIO", "DEBLA", "DEBOS", "DEBUT", "DECAE", "DECAI", "DECIA", "DECID", "DECIR", "DECIS", "DECOR", "DEDAL", "DEDEO", "DEDIL", "DEDOS", "DEESA", "DEJAD", "DEJAN", "DEJAR", "DEJAS", "DEJEN", "DEJES", "DEJOS", "DELCO", "DELES", "DELGA", "DELIA", "DELIO", "DELLA", "DELLO", "DELTA", "DEMAS", "DEMOS", "DENDE", "DENSA", "DENSO", "DENTA", "DENTE", "DENTO", "DEÑAR", "DEPON", "DEQUE", "DERBI", "DESCA", "DESDA", "DESDE", "DESDI", "DESEA", "DESEE", "DESEO", "DESES", "DESGA", "DESOI", "DESTA", "DESTE", "DESTO", "DESUS", "DETAL", "DETEN", "DEUDA", "DEUDO", "DEVEN", "DEYES", "DEZMA", "DEZME", "DEZMO", "DIADA", "DIADO", "DIANA", "DIAÑO", "DICAZ", "DICEN", "DICES", "DICHA", "DICHO", "DICTA", "DICTE", "DICTO", "DIEGO", "DIERA", "DIERE", "DIESE", "DIESI", "DIETA", "DIETE", "DIETO", "DIGAN", "DIGAS", "DIGNA", "DIGNE", "DIGNO", "DIJES", "DILUI", "DIMAN", "DIMAS", "DIMEN", "DIMES", "DIMIA", "DIMID", "DIMIO", "DIMIR", "DIMIS", "DIMOS", "DINAR", "DINAS", "DINES", "DINOS", "DIÑAD", "DIÑAN", "DIÑAR", "DIÑAS", "DIÑEN", "DIÑES", "DIODO", "DIOSA", "DIOSO", "XECAS", "XENON", "XINCA", "XIOTE", "XOLAS", "MABIS", "MABLE", "MACAL", "MACAN", "MACAR", "MACAS", "MACEA", "MACEE", "MACEN", "MACEO", "MACES", "MACHA", "MACHE", "MACHI", "MACHO", "MACIA", "MACIO", "MACIS", "MACLA", "MACON", "MACRO", "MACUA", "MADOR", "MADRE", "MAEÑA", "MAEÑO", "MAESA", "MAESE", "MAESO", "MAFIA", "MAGAS", "MAGIA", "MAGIE", "MAGIN", "MAGIO", "MAGMA", "MAGNA", "MAGNO", "MAGOS", "MAGRA", "MAGRO", "MAGUE", "MAHON", "MAIDO", "MAJAD", "MAJAL", "MAJAN", "MAJAR", "MAJAS", "MAJEA", "MAJEE", "MAJEN", "MAJEO", "MAJES", "MAJOS", "MALAR", "MALAS", "MALEA", "MALEE", "MALEO", "MALES", "MALIS", "MALLA", "MALLE", "MALLO", "MALON", "MALOS", "MALTA", "MALVA", "MALVE", "MALVO", "MAMAD", "MAMAN", "MAMAR", "MAMAS", "MAMBI", "MAMBO", "MAMEN", "MAMES", "MAMEY", "MAMIA", "MAMON", "MAMUA", "MAMUT", "MANAD", "MANAL", "MANAN", "MANAR", "MANAS", "MANCA", "MANCO", "MANDA", "MANDE", "MANDI", "MANDO", "MANEA", "MANEE", "MANEN", "MANEO", "MANES", "MANGA", "MANGO", "MANIA", "MANID", "MANIO", "MANIR", "MANIS", "MANOS", "MANSA", "MANSO", "MANTA", "MANTO", "MANUS", "MAÑAS", "MAÑEA", "MAÑEE", "MAÑEO", "MAÑIO", "MAÑOS", "MAOMA", "MAORI", "MAPAS", "MAPEA", "MAPEE", "MAPEO", "MAPOS", "MAQUE", "MAQUI", "MARAS", "MARCA", "MARCE", "MARCI", "MARCO", "MAREA", "MAREE", "MAREO", "MARES", "MARGA", "MARGO", "MARIA", "MARLO", "MARON", "MAROS", "MARRA", "MARRE", "MARRO", "MARSA", "MARSO", "MARTA", "MARTE", "MARZA", "MARZO", "MASAD", "MASAN", "MASAR", "MASAS", "MASCA", "MASCO", "MASEA", "MASEE", "MASEN", "MASEO", "XOLOS", "NABAB", "NABAL", "NABAR", "NABAS", "NABIS", "NABLA", "NABOS", "NACAR", "NACAS", "NACED", "NACEN", "NACER", "NACES", "NACHA", "NACHO", "NACIA", "NACIO", "NACOS", "NACRE", "NADAD", "NADAL", "NADAN", "NADAR", "NADAS", "NADEN", "NADES", "NADGA", "NADIE", "NADIR", "NAFRA", "NAFRE", "NAFRO", "NAFTA", "NAGUA", "NAHOA", "NAHUA", "NAIFE", "NAIFS", "NAIPE", "NAIRE", "NAJAS", "NALCA", "NALGA", "NANAS", "NANAY", "NANCE", "NANEA", "NANEE", "NANEO", "NANSA", "NANSU", "NANTA", "NANTE", "NANTO", "NAPAS", "NAPEA", "NAPEO", "NAQUE", "NARCO", "NARDO", "NARES", "NARIZ", "NARRA", "NARRE", "NARRO", "NASAL", "NASAS", "NASON", "NASOS", "NATAL", "NATAS", "NATIA", "NATIO", "NATOS", "NATRI", "NAUTA", "NAVAL", "NAVAS", "NAVES", "NAVIO", "NAZCA", "NAZCO", "NAZIS", "NEBEL", "NEBIS", "NEBLI", "NEBRO", "NECEA", "NECEE", "NECEO", "NECIA", "NECIO", "NEGAD", "NEGAR", "NEGAS", "NEGRA", "NEGRO", "NEGUE", "NEGUS", "NEJAS", "NEJOS", "NELDO", "NELES", "NEMAS", "NEMEA", "NEMEO", "NEMES", "NEMON", "NENAS", "NENES", "NENIA", "NEPES", "NERON", "NESGA", "NESGO", "NETAS", "NETOS", "NEUMA", "NEVAD", "NEVAR", "NEVAS", "NEVOS", "NEVUS", "NEXOS", "NIARA", "NIAZO", "NICHE", "NICHO", "NICLE", "NICOL", "NIDAL", "NIDIA", "NIDIO", "NIDOS", "NIEGA", "NIEGO", "NIELA", "NIELE", "NIELO", "NIETA", "NIETO", "NIEVA", "NIEVE", "NIEVO", "NIGUA", "NILAD", "NILON", "NIMBA", "NIMBE", "NIMBO", "NIMIA", "NIMIO", "NINFA", "NINFO", "NINOT", "NIÑAS", "NIÑEA", "NIÑEE", "NIÑEO", "NIÑEZ", "NIÑOS", "NIOTO", "NIPAS", "NIPIS", "NIPON", "NIPOS", "NIQUI", "NISTE", "NITOR", "NITOS", "NITRA", "NITRE", "NITRO", "NIVEA", "NIVEL", "NIVEO", "NIXTE", "NOBEL", "NOBLE", "NOCAS", "NOCHE", "NOCIR", "NOCLA", "NODAL", "NODOS", "NOEMA", "NOGAL", "NOLIS", "NOLIT", "NOMAS", "NOMON", "NOMOS", "NONAS", "NONES", "NONIO", "NONOS", "NOPAL", "NOQUE", "NORAY", "NORIA", "NORMA", "NORME", "NORMO", "NORTE", "NOTAD", "NOTAN", "NOTAR", "NOTAS", "NOTEN", "NOTES", "NOTOS", "NOTRO", "NOVAD", "NOVAL", "NOVAN", "NOVAR"];
var aleatorio = parseInt(Math.random() * palabras.length);
var poculta = palabras[aleatorio];

var tablero = ['_', '_', '_', '_', '_'];
var errores = "";
var fallos = 0;
var puntuacion = 0;
var finalizar = false;

function iniziar_variables() {
    tablero = ['_', '_', '_', '_', '_'];
    errores = "";
    if (fallos >= 2) {
        fallos -= 2;
    }
    if (fallos == 1) {
        fallos -= 1;
    }

    aleatorio = parseInt(Math.random() * palabras.length);
    poculta = palabras[aleatorio];
  
}

function mostrarDatos(datos) {
    alert("Posición: " + datos.position);
}

function siempre() {
    ctx.clearRect(0, 0, 1200, 800);
    
    if (tablero.join("") == poculta) {
        iniziar_variables();
    }
    if (fallos == 6) {
        finalizar = true;
        var nombre = prompt("Escoge un nombre");
        sendScore("Ahorcado", nombre, puntuacion, mostrarDatos);
    }
    if (fallos < 6) {
        setTimeout(siempre, 500);
    }

    dibujar(fallos);
}
document.addEventListener("keypress", comprobar);

function comprobar(e) {
    if (fallos == 6) return;
    console.log(e.key);
    var letras = e.key;
    var l = 0;
    var encontrada = false;
    while (l <= poculta.length) {
        if (poculta[l] == letras) {
            tablero[l] = letras;
            puntuacion += 50;
            encontrada = true;
        }
        l++;
    }
    if (encontrada == false) {
        errores += letras;
        fallos++;
        puntuacion -= 20;
    }
    if (poculta == tablero) {
        iniziar_variables();
        clearTimeout(siempre)
        setTimeout(siempre, 2000)
    }
}

function dibujar(fallos) {
    var l = 0;
    if (finalizar == true) {
        ctx.font = "150px monospace";
        ctx.fillText("¡HAS PERDIDO!", 20, 350);
        ctx.font = "30px monospace";
        ctx.fillText("Pulsa recargar para empezar nueva partida", 290, 450);
        ctx.font = "100px monospace";
        ctx.fillText("_ _ _ _ _", 600, 200);
        var pal = poculta.split("");
        ctx.fillText(pal.join(" "), 600, 200);
        ctx.rect(550, 90, 630, 150);
        ctx.rect(400, 600, 200, 100);

    }
    if (finalizar == false) {
        ctx.rect(400, 400, 500, 150);
        ctx.rect(400, 600, 200, 100);
        ctx.rect(1000, 525, 50, 50);
        ctx.rect(550, 90, 630, 150);
        ctx.font = "100px monospace";
        ctx.fillText("_ _ _ _ _", 600, 200);
        ctx.fillText(tablero.join(" "), 600, 200);
        ctx.font = "50px monospace";
        ctx.fillText(errores, 450, 450);
        ctx.font = "45px monospace";
        ctx.fillText(fallos, 1012, 565);
    }
    ctx.font = "50px Arial";
    ctx.fillText(puntuacion, 450, 670);

        if (0 <= fallos) {
            /* horca */
            ctx.moveTo(50, 550);
            ctx.lineTo(50, 50);
            ctx.lineTo(200, 50);
            ctx.lineTo(200, 100);
            ctx.stroke();
            ctx.moveTo(50, 140);
            ctx.lineTo(130, 50);
            ctx.lineTo(50, 50);
            ctx.lineTo(90, 95);
            ctx.stroke();
            ctx.fillRect(0, 550, 300, 300)
        }

        if (1 <= fallos) {
            /* cabeza */
            ctx.beginPath();
            ctx.arc(200, 120, 20, 0, 2 * Math.PI);
            ctx.stroke();
        }
        if ( 2 <= fallos) {
            /* cuerpo */
            ctx.moveTo(200, 140);
            ctx.lineTo(200, 200);
            ctx.stroke();
        }
        if (3 <= fallos) {
            /* brazo izquierdo */
            ctx.moveTo(200, 150);
            ctx.lineTo(170, 170);
            ctx.stroke();
        }
        if ( 4 <= fallos) {
            /* brazo derecho */
            ctx.moveTo(200, 150);
            ctx.lineTo(230, 170);
            ctx.stroke();
        }
        if ( 5 <= fallos) {
            /* pierna izquierda */
            ctx.moveTo(200, 200);
            ctx.lineTo(170, 240);
            ctx.stroke();
        }
        if (6 <= fallos) {
            /* pierna derecha */
            ctx.moveTo(200, 200);
            ctx.lineTo(230, 240);
            ctx.stroke();
            /* Ojos */
            ctx.moveTo(185, 115);
            ctx.lineTo(195, 120);
            ctx.stroke();
            ctx.moveTo(205, 115);
            ctx.lineTo(215, 120);
            ctx.stroke();
            ctx.moveTo(195, 115);
            ctx.lineTo(185, 120);
            ctx.stroke();
            ctx.moveTo(215, 115);
            ctx.lineTo(205, 120);
            ctx.stroke();
            ctx.moveTo(195, 130);
            ctx.lineTo(205, 130);
            ctx.stroke();
        }
        

    
}
siempre();
dibujar(fallos);
