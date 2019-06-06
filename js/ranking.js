function obtenerRanking(juego, callback_OK, callback_ERROR=null){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback_OK(JSON.parse(this.responseText));
    }else if(this.status >= 400 && this.status <600 && callback_ERROR!=null){
      callback_ERROR("No se ha podido obtener el ranking: "+this.statusText);
    }
  };
  xhttp.open("GET", `http://localhost/games2019/ranking/${juego}`, true);
  xhttp.send();
}
