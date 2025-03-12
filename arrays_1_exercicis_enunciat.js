// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna función matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores
let sumaArrayNumeros1 = 0

for (i = 0; i < arrayNumeros1.length; i++) {
    
    console.log(arrayNumeros1[i]);
    
    sumaArrayNumeros1 = sumaArrayNumeros1+arrayNumeros1[i]

    console.log(sumaArrayNumeros1);
}
console.log(sumaArrayNumeros1);


// 2) Mostrar por consola el promedio

let sumaArrayNumeros2 = 0

for (i = 0; i < arrayNumeros2.length; i++) {
    
    console.log(arrayNumeros2[i]);
    
    sumaArrayNumeros2 = sumaArrayNumeros2+arrayNumeros2[i]

    console.log(sumaArrayNumeros2/arrayNumeros2.length);
}
console.log(sumaArrayNumeros2/arrayNumeros2.length);


// 3) Encontrar los valores máximo y mínimo

let arrayNumerosMax = 0

for  ( i = 0; i < arrayNumeros2.length; i++) {
 
    console.log(arrayNumeros2);

    if(arrayNumeros2[i] > arrayNumerosMax) {
        console.log(arrayNumerosMax);
        arrayNumerosMax = arrayNumeros2[i]
        console.log(arrayNumerosMax);
    } 
    
    console.log(arrayNumerosMax);
}

let arrayNumerosMin = arrayNumerosMax

for  ( i = 0; i < arrayNumeros2.length; i++) {
 
    console.log(arrayNumeros2);

    if ( arrayNumeros2[i] < arrayNumerosMin) {
        console.log(arrayNumerosMin);
        arrayNumerosMin = arrayNumeros2[i]
        console.log(arrayNumerosMin);
    }
    
    console.log(arrayNumerosMin);
}

console.log(arrayNumerosMax);

console.log(arrayNumerosMin);


// 4) Sumar los valores con índice par y restar los impares

let sumaArrayNumerosPar = 0

let sumaArrayNumerosImpar = 0

for ( i = 0; i < arrayNumeros2.length ; i++) {

if (arrayNumeros2[i] % 2 == 0) {
    sumaArrayNumerosPar = sumaArrayNumerosPar+arrayNumeros2[i]
} else {
    sumaArrayNumerosImpar = sumaArrayNumerosImpar-arrayNumeros2[i]
}

console.log(sumaArrayNumerosPar);

console.log(sumaArrayNumerosImpar);

}

console.log(sumaArrayNumerosPar);

console.log(sumaArrayNumerosImpar);


// Hay que mostrar por consola cada resultado

// ====================================================================================================

// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.


// 6) Lo mismo para el texto más corto.


// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.


// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

// ====================================================================================================

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

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