// obtener la fecha y hora actual


// console.log(fecha.getDate); // numero del dia del mes
// console.log(fecha.getDay()); // 0 -6 indica los dias de la semana
// console.log(fecha.getMonth);// 0 - 11 indica los meses
// console.log(fecha.getFullYear);
// console.log(fecha.getHours);
// console.log(fecha.getMinutes);
// console.log(fecha.getSeconds);

function fechaHora(){
let fecha = new Date();


    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

let meses = ['Enero00','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let parrafoFecha = document.querySelector("#fecha");
 parrafoFecha.innerHTML = `${diasSemana[fecha.getDay()]} ${fecha.getDate()}
de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
// Jueves 23 de Septiembre de 2021`;

// agregar o cuando los numero sean menores a 10
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

if(segundos < 10){
    segundos = "0" + segundos;
}
if(minutos < 10){
    minutos = "0" + minutos;
}
if(horas< 10){
    horas = "0" + horas;
}


let parrafoHora = document.querySelector('#hora');
parrafoHora.innerHTML =`${horas}:${minutos}:${segundos}`;


}

setInterval(fechaHora, 1000);

function cambiarColor(color){
    let contenedor = document.querySelector("#contenedorPrincipal");
    console.log(contenedor);
    console.log(color);
    // contenedor.className= "rosa";

    switch(color){
        case 'azul':
                contenedor.className= 'azul';
                break;
        case 'rosa':
            contenedor.className= 'rosa';
            break;
        case 'verde':
                    contenedor.className='verde';
    }
}