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