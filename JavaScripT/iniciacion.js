function  ejecuta () {
    var z=document.getElementsByClassName("importante") [0].onclick=saludo;
    // for (var i=0;i<3;i++){
    //  document.getElementsByTagName("p") [i].onclick=saludo;
    }
    /* document.getElementsById("importante").onclick=saludo;*/
}
function saludo () {
    alert("hola amigo");
}

window.onload=ejecuta;