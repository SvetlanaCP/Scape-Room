

function comprovarRespuesta(){
             
    var respuesta = document.getElementById("respuesta").value 
  console.log(respuesta)

if(respuesta  == 'el bosque esconde muchas sorpresas'){
    location.replace("victoria.html");

}else{
    alert('Lo siento pero eres un cancerplayer');

}

}