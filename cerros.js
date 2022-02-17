function generateRandom(min,max) {
    min = Math.ceil(min);
   max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min) + min);
}

console.log(generateRandom(-1, 1));

//var totalCerros = 0;
//var cont = 0;


//let lista = [1, -1, -1, 1, 1, 1,
  //  0, 0, 0, 1, -1, 0, -1, -1, 0, 0, 0, -1, 0, -1,
    //1, 1, 0, 0, 0,
    //1, 1, 0, 0, 0, 0, 1, 0, -1, 0, 1, -1, -1, 1, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 1,

//];

//console.log("lista", lista);

//for (let i = 1; i < lista.length - 1; i++) {
  //  if (lista[i] == 1 && lista[i + 1] != 1 && lista[i - 1] == 1) {
    //    cont = 1;
    //}

   // if (lista[i] == -1 && lista[i + 1] == -1 && lista[i - 1] != -1 && cont == 1) {
     //   totalCerros++;
       // cont = 0;
    //}
//};

//document.getElementById('info').innerHTML = lista
//document.getElementById('hill').innerHTML = totalCerros
//console.log("Cantidad de cerros", totalCerros)
