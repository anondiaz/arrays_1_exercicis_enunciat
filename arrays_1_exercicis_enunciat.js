// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna función matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
let arrayNumeros3 = [4, 2.5, 7, 1, 6, -2, 10]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores
console.log("1) Mostrar por consola la suma de todos los valores");
let array = arrayNumeros3
console.log(`Utilizando el array: ${array}`);
let sumaArrayNumeros1 = 0

for (i = 0; i < array.length; i++) {
    
    // console.log(arrayNumeros1[i]);
    
    sumaArrayNumeros1 = sumaArrayNumeros1+array[i]

    // console.log(sumaArrayNumeros1);
}
console.log("La suma de todos los valores es:", sumaArrayNumeros1);


// 2) Mostrar por consola el promedio
console.log("2) Mostrar por consola el promedio");
array = arrayNumeros1
console.log(`Utilizando el array: ${array}`);

let sumaArrayNumeros2 = 0

for (i = 0; i < array.length; i++) {
    
    // console.log(arrayNumeros2[i]);
    
    sumaArrayNumeros2 = sumaArrayNumeros2+array[i]

    // console.log(sumaArrayNumeros2/arrayNumeros2.length);
}
console.log("El promedio de todos los valores es:", sumaArrayNumeros2/array.length);


// 3) Encontrar los valores máximo y mínimo
console.log("3) Encontrar los valores máximo y mínimo");
array = arrayNumeros3
console.log(`Utilizando el array: ${array}`);
let arrayNumerosMax = array[0]
let arrayNumerosMin = array[0]

for  ( i = 0; i < array.length; i++) {
 
   // console.log(arrayNumeros2);

    if(array[i] > arrayNumerosMax) {
       // console.log(arrayNumerosMax);
        arrayNumerosMax = array[i]
      //  console.log(arrayNumerosMax);
    } else if ( array[i] < arrayNumerosMin) {
       // console.log(arrayNumerosMin);
        arrayNumerosMin = array[i]
       // console.log(arrayNumerosMin);
    }
    
    // console.log(arrayNumerosMin);
    
    // console.log(arrayNumerosMax);
}

console.log("El valor máximo es: ",arrayNumerosMax);

console.log("El valor mínimo es: ",arrayNumerosMin);


// 4) Sumar los valores con índice par y restar los impares
console.log("4) Sumar los valores con índice par y restar los impares");
array = arrayNumeros2
console.log(`Utilizando el array: ${array}`);

let sumaArrayNumerosPar = 0

let sumaArrayNumerosImpar = 0

for ( i = 0; i < array.length ; i++) {

if (array[i] % 2 == 0) {
    // console.log(arrayNumeros2);
    sumaArrayNumerosPar = sumaArrayNumerosPar+array[i]
    // console.log(arrayNumeros2);
} else if (array[i] % 2 != 0) {
    // console.log(arrayNumeros2);
    sumaArrayNumerosImpar = sumaArrayNumerosImpar-array[i]
}

// console.log(sumaArrayNumerosPar);

// console.log(sumaArrayNumerosImpar);

}

console.log("La suma de los valores pares es:", sumaArrayNumerosPar);

console.log("La suma de los valores impares es:", sumaArrayNumerosImpar);


// Hay que mostrar por consola cada resultado

// ====================================================================================================

// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.
console.log("5) Programa el código para encontrar el elemento con el texto más largo");
console.log(`Utilizando el array: ${arrayNombres2}`);

let arrayNMax = arrayNombres2[0].length
let arrayIndice = arrayNombres2.length -1
let arrayTextosMasLargos = []
let varTextoMasLargo = ""
// console.log(arrayNMax);
// console.log(arrayIndice);

// busco la cantidad de caracteres de la palabra más larga y guardo el indice y la cantidad
for (i = 0; i < arrayNombres2.length; i++) {
    let arrayNombresMax = [i]
    let arrayLong = arrayNombres2[i].length
    // console.log(arrayNMax);
    // console.log(arrayLong);
    // console.log(arrayNombresMax);
    if(arrayLong > arrayNMax) {
        // console.log(arrayNMax);
         arrayNMax = arrayLong
        // console.log(arrayLong);
        arrayIndice = i
        // console.log(arrayIndice);
    }
}
// console.log(arrayIndice);
// console.log(arrayNombres2[arrayIndice]);
// console.log(arrayNMax)
// voy a buscar cuantas palabras hay con esa cantidad de caracteres
for (i = 0; i < arrayNombres2.length; i++) {
      
    if(arrayNombres2[i].length == arrayNMax) {
        arrayTextosMasLargos.push(arrayNombres2[i])
        // console.log(arrayTextosMasLargos);
    }
}
// Si la cantidad de elementos del array es menor de 2 lo paso a variable según el enunciado
if(arrayTextosMasLargos.length < 2) {
    // console.log( arrayTextosMasLargos.length)
    varTextoMasLargo = arrayTextosMasLargos.toString()
    arrayTextosMasLargos = []
    console.log(`Solo hay un elemento con el texto más largo, contiene ${arrayNMax} caracteres y es: ${varTextoMasLargo}`);
    
} else {
    console.log(`Los elementos con el texto más largo contienen ${arrayNMax} caracteres y son: ${arrayTextosMasLargos}`);
}
// console.log( arrayTextosMasLargos.length)



// 6) Lo mismo para el texto más corto.
console.log("6) Lo mismo para el texto más corto.");
console.log(`Utilizando el array: ${arrayNombres2}`);
let arrayNMin = arrayNombres2[0].length
let arrayIndiceMin = arrayNombres2.length -1
let arrayTextosMasCortos = []
let varTextoMasCorto = ""
// console.log(arrayNMin);
// console.log(arrayIndiceMin);

// busco la cantidad de caracteres de la palabra más larga y guardo el indice y la cantidad
for (i = 0; i < arrayNombres2.length; i++) {
    let arrayNombresMin = [i]
    let arrayLong = arrayNombres2[i].length
    // console.log(arrayNMin);
    // console.log(arrayLong);
    // console.log(arrayNombresMin);
    if(arrayLong < arrayNMin) {
        // console.log(arrayNMin);
        arrayNMin = arrayLong
        // console.log(arrayLong);
        arrayIndiceMin = i
        // console.log(arrayIndiceMin);
    }
}
// console.log(arrayIndiceMin);
// console.log(arrayNombres2[arrayIndiceMin]);
// console.log(arrayNMin)
// voy a buscar cuantas palabras hay con esa cantidad de caracteres
for (i = 0; i < arrayNombres2.length; i++) {
      
    if(arrayNombres2[i].length == arrayNMin) {
        arrayTextosMasCortos.push(arrayNombres2[i])
        // console.log(arrayTextosMasCortos);
    }
}
// Si la cantidad de elementos del array es menor de 2 lo paso a variable según el enunciado
if(arrayTextosMasCortos.length < 2) {
    // console.log( arrayTextosMasCortos.length)
    varTextoMasCorto = arrayTextosMasCortos.toString()
    arrayTextosMasCortos =[]
    console.log(`Solo hay un elemento con el texto más corto, contiene ${arrayNMin} caracteres y es: ${varTextoMasCorto}`);
    
} else {
    console.log(`Los elementos con el texto más corto contienen ${arrayNMin} caracteres y son: ${arrayTextosMasCortos}`);
}
// console.log( arrayTextosMasLargos.length)


// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.
console.log("7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos");
console.log(`Utilizando el array: ${arrayNombres2}`);

//Establezco el array
let longitudNombres = []
// busco la cantidad de caracteres de cada texto y guardo la cantidad en el array solicitado
for (i = 0; i < arrayNombres2.length; i++) {
    longitudNombres.push(arrayNombres2[i].length)
}
console.log(`La cantidad de caracteres en cada palabra del array "arrayNombres2" es la siguiente: ${longitudNombres}`);


// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

console.log("8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i");
console.log(`Utilizando el array: ${arrayNombres2}`);

// Establezco el array, la letra y el array final
let arrayN2 = arrayNombres2
// console.log(arrayN2);
let letra = "i"
let arrayNombresConI = []
// Vamos a pasar las palabras a minusculas para facilitar la busqueda
for (i = 0; i < arrayN2.length; i++ ) {
    let nombresMin = arrayN2[i].toLocaleLowerCase()
    // console.log(nombresMin);
    // console.log(nombresMin.split(""));
    //Ahora vamos a desgranar cada palabra para buscar la letra
    for (j = 0; j < nombresMin.length; j++) {
        // console.log(nombresMin[j]);
        // console.log(j);
        // Pasamos la primera letra a mayusculas y cortamos el resto para luego unirlo todo
        let inicial = nombresMin.at(0).toLocaleUpperCase()
        let resto = nombresMin.slice(1)
        let nombresMinMayusculas = inicial + resto
        // Ahora filtramos letra por letra los nombres que incluyan la letra solicitada y solo aceptamos los que no esten ya incluidos
        if(nombresMin[j] == letra && arrayNombresConI.includes(nombresMinMayusculas) != true){
            // console.log(nombresMinMayusculas);
            // Introducimos en el array solo los nombres con la letra solicitada y que no esten ya incluidos
            arrayNombresConI.push(nombresMinMayusculas)
            // console.log(arrayNombresConI.includes(nombresMinMayusculas));
        } 
    }
}
console.log(`Los nombres que incluyen una i son:`);
console.log(arrayNombresConI);


// ====================================================================================================

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

// Establezco el array
let arrayBidimensional = []
for ( i = 0; i < arrayMixto.length; i++){
    let arrayConjunto = []
    console.log(arrayConjunto.length);
    for (j = 0; j < 2; j++){
        arrayConjunto.push(arrayMixto[i])
        console.log(arrayConjunto);
    }
    
}
console.log(arrayBidimensional);


// ====================================================================================================

// 10) Este array incluye una operación de compra:
const compra = [
    ["Leche", 1.2, 2],
    ["Pan", 0.8, 3],
    ["Huevos", 2.5, 1],
    ["Café", 5.2, 0.5]
]
// Se muestra el nombre del artículo, su precio y la cantidad comprada.
// Debes obtener la cantidad de artículos comprados (no de cada tipo) y el importe total.
// Por ejemplo: "Has comprado 4 artículos y el importe total es de 12.7 euros"

// Después añade otro articulo al array anterior y muestra de nuevo el mensaje informativo con los nuevos datos.