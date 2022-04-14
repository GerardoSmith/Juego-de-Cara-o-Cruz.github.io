function lanzar() {
    var num = 1;
    var ramdon = Math.random()*2;
    var ramdon = Math.ceil(ramdon);
    var cont = document.getElementById("span");
    if (ramdon == 1) {
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Ganaste" );
        cont.appendChild(str);
    }else{
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Perdiste")
        cont.appendChild(str);
    }

    switch (ramdon) {
        case 1:
        var con = document.getElementById("span2");
        var holas = con.childNodes[0];
        con.removeChild(holas);
        var img = new Image;
         img.src = "cara.jpg";
         con.appendChild(img);
            
            break;

            case 2:
            var con = document.getElementById("span2");
            var holas = con.childNodes[0];
            con.removeChild(holas);
            var img = new Image;
            img.src = "cruz.jpg";
            con.appendChild(img);
            break;
    
        default:
            break;
    }
       
   }

   
   function lanzar1() {
       var num = 2;
    var ramdon = Math.random()*2;
    var ramdon = Math.ceil(ramdon);
    var cont = document.getElementById("span");
    if (ramdon == 2) {
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Ganaste" );
        cont.appendChild(str);
    }else{
        var hola = cont.childNodes[0];
        cont.removeChild(hola);
        var str = document.createTextNode(" Perdiste")
        cont.appendChild(str);
    }

    switch (ramdon) {
        case 1:
        var con = document.getElementById("span2");
        var holas = con.childNodes[0];
        con.removeChild(holas);
        var img = new Image;
         img.src = "cara.jpg";
         con.appendChild(img);
            
            break;

            case 2:
            var con = document.getElementById("span2");
            var holas = con.childNodes[0];
            con.removeChild(holas);
            var img = new Image;
            img.src = "cruz.jpg";
            con.appendChild(img);
            break;
    
        default:
            break;
    }  
   }