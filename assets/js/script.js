let listaValoresGastos = [];
let listaNombresGastos = [];

//esta funcion se ejecuta en el momento del click del usuario
function clickBoton(){
    let valorGasto = document.getElementById('valorGasto').value;
    let nombreGasto = document.getElementById('nombreGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);
    

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert ('click del usuario');
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
       
        htmlLista += `<li> ${elemento} - ARS ${valorGasto.toFixed(2)} <button onclick="eliminarGasto(${posicion});">eliminar</button></li>`;
        totalGastos += Number(valorGasto);
        
        
    });
    
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    borrar();
}

function borrar (){
    
    document.getElementById('valorGasto').value = '';
    document.getElementById('nombreGasto').value = '';

}

function eliminarGasto (posicion){

    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();


}