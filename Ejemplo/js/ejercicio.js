
function crearBtn(){
    /*
    <input type="button" value="Ejercicio 1: activar" onclick="activar1()" >
      <input type="button" value="Ejercicio 1: desactivar" onclick="desactivar1()" >
      <input type="button" value="Ejercicio 2: activar" onclick="activar2()" >
      <input type="button" value="Ejercicio 2: desactivar" onclick="desactivar2()" >
      <input type="button" value="Ejercicio 3: activar" onclick="activar3()" >
      <input type="button" value="Ejercicio 3: desactivar" onclick="desactivar3()" >
      <input type="button" value="Ejercicio 4: activar" onclick="activar4()" >
      <input type="button" value="Ejercicio 4: desactivar" onclick="desactivar4()" >
      <input type="button" value="Ejercicio 6: activar" onclick="activar6()" >
      <input type="button" value="Ejercicio 6: desactivar" onclick="desactivar6()" >
      <input type="button" value="Ejercicio 7: activar" onclick="activar7()" >
      <input type="button" value="Ejercicio 7: desactivar" onclick="desactivar7()" >
      <input type="button" value="Ejercicio 8: activar" onclick="activar8()" >
      <input type="button" value="Ejercicio 8: desactivar" onclick="desactivar8()" >
      <input type="button" value="Ejercicio 9: activar" onclick="activar9()" >
      <input type="button" value="Ejercicio 9: desactivar" onclick="desactivar9()" ></input>
    */
    
    var encuadre  = document.getElementsByTagName("footer")[0]; //lugar donde irá la lista
    
    var newDiv = document.createElement("div"); //creamos el div donde colocar la lista de enlaces
    
    newDiv.setAttribute("id","btn"); //le añadimos un identificador

    //creamos los botones para activar los ejercicios
    for (let i = 1; i <= 10; i++) {
        //btn activar
        var activar = document.createElement("input"); 
        activar.setAttribute("type","button");
        activar.setAttribute("value","Ejercicio" + i + ": activar");
        activar.setAttribute("onclick","activar"+i+"()");
        newDiv.append(activar);
        //btn desactivar
        var desactivar = document.createElement("input");
        desactivar.setAttribute("type","button");
        desactivar.setAttribute("value","Ejercicio" + i + ": desactivar");
        desactivar.setAttribute("onclick","desactivar"+i+"()");
        newDiv.append(desactivar);
    }

    encuadre.append(newDiv); //añadimos el div al footer
} 

window.onload = crearBtn;

var x = function(){

    //5º aparatdo, cambiar el color a todos los títulos
    //var titleList = document.getAttribute("title");

    // comprobamos que haya elementos de titulo, h1,h2,h3,h4...
    var h1 = document.getElementsByTagName("h1");
    var h2 = document.getElementsByTagName("h2");
    var h3 = document.getElementsByTagName("h3");
    var h4 = document.getElementsByTagName("h4");
    var h5 = document.getElementsByTagName("h5");
    var h6 = document.getElementsByTagName("h6");

    var titulos = [];

    if ( h1.length > 0) {
        titulos.push(h1);
        //console.log(h1.length);
    }

    if ( h2.length > 0) {
        titulos.push(h2);
        //console.log(h2.length);
    }

    if ( h3.length > 0) {
        titulos.push(h3);
        //console.log(h3.length);
    }

    if ( h4.length > 0) {
        titulos.push(h4);
        //console.log(h4.length);
    }

    if ( h5.length > 0) {
        titulos.push(h5);
        //console.log(h5.length);
    }

    if ( h6.length > 0) {
        titulos.push(h6);
        //console.log(h6.length);
    }

    //console.log("titles:" + titulos[1][0]);
    //var noticiasRel = document.getElementsByTagName("a").getA

    
}


function activar1(){
    //1º apartado, colorear todos los fondos de los articulos
    var artic = document.getElementsByTagName("article");

    for (let i = 0; i < artic.length; i++) {
        artic[i].style.backgroundColor = "rgb(217, 219, 216)";
        
        //console.log(artic[i]);
    }
}

function desactivar1(){
    //1º apartado, colorear todos los fondos de los articulos
    var artic = document.getElementsByTagName("article");

    for (let i = 0; i < artic.length; i++) {
        artic[i].removeAttribute("Style");
        //console.log(artic[i]);
    }
}

function activar2(){
    //aparatado 2º, estandarizar el menú
    var categorias = document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li"); //cargamos la lista de categorías
    var clasSustituir = categorias[categorias.length-1].lastChild.className; //recogemos el nombre de la clase que vamos a utilizar en todas, en esta caso la última

    for (let i = 0; i < categorias.length-1; i++) { //recorremos todas las clases de el elemento y las sustituimos por le nueva
        categorias[i].getElementsByTagName("a")[0].removeAttribute("class");
        categorias[i].getElementsByTagName("a")[0].setAttribute("class",clasSustituir);
    }
}

function desactivar2(){
    //aparatado 2º, estandarizar el menú
    var categorias = document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li"); //cargamos la lista de categorías
    
    for (let i = 0; i < categorias.length; i++) { //recorremos todas las clases de el elemento y las sustituimos por le nueva
        categorias[i].getElementsByTagName("a")[0].removeAttribute("class");
        
        var nombre = categorias[i].lastElementChild.childNodes[0].textContent.trim().toLowerCase(); //recogemos el nombre de la clase (es el mismo que el valor del enlace en algunos casos)
        
        //corregimos los casos que sean diferentes
        if (nombre.localeCompare("política") === 0) {
           nombre = "politica";  
        }

        if (nombre.localeCompare("economía") === 0) {
            nombre = "economia";  
        }

        if (nombre.localeCompare("cultura") === 0) {
            nombre = "culturas";  
        }

        categorias[i].getElementsByTagName("a")[0].setAttribute("class",nombre);
    }
}

function activar3(){
    //apartado 3º, mostrar enlaces
    //comprobamos que el elemento no exista, en caso cotrario evitamos que se duplique
    var ejer3 = document.getElementById("ejer3");
    if(ejer3) {
        alert("Existe el elemento");
    }else{
        var enlaces = document.getElementsByClassName("MenuVertical")[0].getElementsByTagName("a"); //recogemos la lista de enlaces

        var encuadre  = document.getElementsByTagName("footer")[0]; //lugar donde irá la lista
        
        var newDiv = document.createElement("div"); //creamos el div donde colocar la lista de enlaces
        
        newDiv.setAttribute("id","ejer3"); //le añadimos un identificador
        
        var lista = document.createElement("ul"); //lista con los nombres de los enlaces
        
        newDiv.append(lista); //añadimos la lista
        lista.append("Lista de enlaces"); //añadimos el titulo para las listas

        for (let i = 0; i < enlaces.length; i++) {
            
            var listaEle = document.createElement("li");
            var enlace = enlaces[i].firstChild.textContent; //recogemos el TEXTO de los elementos "a"
            
            listaEle.append(enlace); //añadimos el nombre del enlace

            lista.append(listaEle); // añadimos  el elemento a la lista

            //console.log(enlaces[i].firstChild);
        }

        encuadre.append(newDiv); //añadimos el div al footer
    }
    
}

function desactivar3(){
    //comprobamos que el elemento exista, en caso, controlamos la excepción
    try {
        ejer3 = document.getElementById("ejer3");
        var encuadre  = document.getElementsByTagName("footer")[0]; //lugar donde irá la lista
        encuadre.removeChild(ejer3);
    } catch (error) {
        alert("No existe el elemento");
    } 
}

function activar4(){
    // apartado º4, tamaño de las opciones del menu
    var ejer4 = document.getElementById("ejer4");
    if (ejer4) {
        alert("Ya existe el elemento");
    }else{
        var encuadre2  = document.getElementsByTagName("footer")[0]; //lugar donde irá la lista
    
        var newDiv = document.createElement("div"); //creamos el div donde colocar la lista de tamaños

        newDiv.setAttribute("id","ejer4"); //le añadimos un identificador

        var lista = document.createElement("ul"); //lista con los longitudes de los menus
        lista.append("Lista de elementos(de izquierda a derecha)"); //añadimos el titulo para las listas

        var opcMenu = document.getElementsByClassName("MenuHorizontal")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
        //console.log(opcMenu);

        for (let i = 0; i < opcMenu.length; i++) {
            
            var listaEle = document.createElement("li");

            var ancho = opcMenu[i].getElementsByTagName("a")[0].offsetHeight; //recogemos el alto del elemento
            var alto = opcMenu[i].getElementsByTagName("a")[0].offsetWidth; //recogemos el ancho del elemento
            
            var tam = "ancho: " + ancho + " alto: " + alto; //creamos una cadena para mostrar el ancho y el alto

            listaEle.append(tam); //creamos el elemento li
            lista.append(listaEle); //añadimos el elemento a la lista
            //console.log(tam);
        }

        encuadre2.append(newDiv); //añadimos el div al footer
        newDiv.append(lista); //añadimos la lista al div
    }    
}
    
function desactivar4(){
    //comprobamos que el elemento exista, en caso, controlamos la excepción
    try {
        ejer4 = document.getElementById("ejer4");
        var encuadre  = document.getElementsByTagName("footer")[0]; //lugar donde irá la lista
        encuadre.removeChild(ejer4);
    } catch (error) {
        alert("No existe el elemento");
    } 
}

function activar6(){
    //6º cambiar el tamaño a las noticias relacionadas
    
    var noticiasRel = document.getElementsByClassName("OtherNews");
    for (let i = 0; i < noticiasRel.length; i++) {
        noticiasRel[i].setAttribute("style","font-size: 40px;");
    }

    console.log(noticiasRel.length)
    
}

function desactivar6(){
    //6º cambiar el tamaño a las noticias relacionadas
    
    var noticiasRel = document.getElementsByClassName("OtherNews");
    for (let i = 0; i < noticiasRel.length; i++) {
        noticiasRel[i].removeAttribute("style");
    }
    
}

function activar7(){
    //7º cambiar el tamaño a las noticias relacionadas (1º apartado)
    var noticiasRel = document.getElementsByClassName("OtherNews");
    noticiasRel[0].setAttribute("style","font-size: 40px;");
   
}

function desactivar7(){
    var noticiasRel = document.getElementsByClassName("OtherNews");
    noticiasRel[0].removeAttribute("style");
}

function activar8(){
    
    //8º cambiar el color de los enlaces pares del menu servicios
    var enlaces = document.getElementsByClassName("MenuVertical")[0].getElementsByTagName("a"); //recogemos la lista de enlaces
    //console.log(enlaces.length)

    for (let i = 0; i < enlaces.length; i++) {
        if ((i+1)%2 == 0) {
            enlaces[i].setAttribute("style","background-color: yellowgreen;")
        }
    }
}

function desactivar8(){
    var enlaces = document.getElementsByClassName("MenuVertical")[0].getElementsByTagName("a"); //recogemos la lista de enlaces
    //console.log(enlaces.length)

    for (let i = 0; i < enlaces.length; i++){
        if ((i+1)%2 == 0) {
            enlaces[i].removeAttribute("style");
        }
    }
}

function activar9(){

    var ejer9 = document.getElementById("ejer9");
    if (ejer9) {
        alert("Ya existe el elemento");
    }else{
        //apartado 9º, titulos de las imágenes y alt(sin alt, no existe)
        var figcaption = document.getElementsByTagName("figcaption"); //recogemos la lista de enlaces
            
        var encuadre3  = document.getElementsByTagName("footer")[0]; //lugar donde irá la lista

        var newDiv = document.createElement("div"); //creamos el div donde colocarlos

        var listaTitle = document.createElement("ul"); //lista con los nombres 

        newDiv.append(listaTitle); //añadimos la lista

        newDiv.setAttribute("id","ejer9"); //le añadimos un identificador

        listaTitle.append("Lista de titulos de las imágenes"); //añadimos el titulo para las listas

        for (let i = 0; i < figcaption.length; i++) {
            
            var listaEle = document.createElement("li");
            var titulo = figcaption[i].textContent; //recogemos el TEXTO de los elementos
            
            listaEle.append(titulo); //añadimos el elemento

            listaTitle.append(listaEle); // añadimos  el elemento a la lista
        }

        encuadre3.append(newDiv); //añadimos el div al footer
        newDiv.append(listaTitle); //añadimos la lista al div
    }
    
}

function desactivar9(){
    //comprobamos que el elemento exista, en caso, controlamos la excepción
    try {
        ejer9 = document.getElementById("ejer9");
        var encuadre = document.getElementsByTagName("footer")[0]; //lugar donde irá la lista
        encuadre.removeChild(ejer9);
    } catch (error) {
        alert("No existe el elemento");
    } 
}

function activar10(){
        //apartado 10º, añadir alt y title acorde con el figcaption de cada img
        var figcaption = document.getElementsByTagName("figcaption"); 
        var img = document.getElementsByTagName("img");

        for(let i = 0; i < img.length; i++) {
            img[i].setAttribute("alt",figcaption[i].firstChild.textContent);
            img[i].setAttribute("title",figcaption[i].firstChild.textContent); 
        }
}

function desactivar10(){
    var img = document.getElementsByTagName("img");
    for(let i = 0; i < img.length; i++) {
        img[i].removeAttribute("alt")
        img[i].removeAttribute("title"); 
    }
}