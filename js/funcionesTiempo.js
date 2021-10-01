// ejecutar una accion despues de un tiempo

let contador = 1
function saludar(){
    if(contador <= 5){
        document.write("hola comision");
        contador
    }
    
}

// window.setTimeout(saludar, 5000);

setTimeout(() =>{
    document.write("hola comision");
 }, 3000);

 let identificador = window.setInterval(saludar, 2000);