
// let fruits = ["Oranges", "Apples", "Watermelon", "Mango", "Banana", "Oranges", "Banana"];
// let search = "Banana";
// let search = "Banana";
// let i = 0;

// while(i < fruits.length){
//     if (fruits[i] === search){
//         console.log("Encontrar en la posicion:",i);
//         break;
//     }
//     i++;
// }

// for(i = 0; i < fruits.length ; i++){
//     console.log(fruits[i]);
//     if(fruits[i] === search){
//         console.log("Encontrar en la posicion: ", i);
//         break;
//     }
// }

let fruits = ["Oranges", "Apples", "Watermelon", "Mango", "Banana", "Oranges", "Banana"].sort();
console.log(fruits);

let unicosElementos = [];
let almacenadorDeVecesRepetidas = [];
let contador = 1;

for(i = 0; i < fruits.length ; i++){
    if(fruits [i + 1] === fruits [i]){
        console.log("Se repíte la fruta " + fruits[i]);
        contador++
    }else{
        unicosElementos.push(fruits[i]);
        almacenadorDeVecesRepetidas.push(contador);
        contador = 1;
    }
}

console.log(unicosElementos);
console.log(almacenadorDeVecesRepetidas);

for(let j = 0; j < unicosElementos.length; j++){
    console.log(`El valor ${unicosElementos[j]} se repite ${almacenadorDeVecesRepetidas[j]}`);
}




// // Codigo optimazado con CHATGPT

// let fruits = ["Oranges", "Apples", "Watermelon", "Mango", "Banana", "Oranges", "Banana"].sort();
// console.log(fruits);

// let conteoFrutas = fruits.reduce((contador, fruta) => {
//     contador[fruta] = (contador[fruta] || 0) + 1;
//     return contador;
// }, {});

// Object.entries(conteoFrutas).forEach(([fruta, cantidad]) => {
//     console.log(`El valor ${fruta} se repite ${cantidad}`);
// });