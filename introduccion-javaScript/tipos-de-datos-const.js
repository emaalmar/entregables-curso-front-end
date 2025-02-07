
const number = 42;
console.log(typeof(42));

const string = "Veinticinco";
console.log(typeof(string));

const number1 = -666;
console.log(typeof(number1));

const boolean = true;
console.log(typeof(boolean));

const number2 = 0;
console.log(typeof(number2));

const string2 = " ' ";
console.log(typeof(string2));

const nulo = null;
console.log(typeof(nulo));
console.log(typeof null);

const indefinido = undefined;
console.log(typeof(indefinido));
console.log(typeof undefined);

// let falso = FALSE;                      ERROR
// console.log(typeof(falso));
console.log(typeof FALSE);

// let number3 = &&
// console.log(typeof(number3))           ERROR
// console.log(typeof &&);

const number4 = BigInt(1000000);
console.log(typeof(number4));

const simbolo = Symbol(112);
console.log(typeof(simbolo));

const simbolo2 = Symbol(BigInt(150000000));
console.log(typeof(simbolo2));

const simbolo3 = Symbol("Hola");
console.log(typeof(simbolo3));

const simbolo4 = Symbol("A", 5, BigInt(880000000));
console.log(typeof(simbolo4));

// let simbolo5 = BigInt(Symbol(48000000000000000));    ERROR
// console.log(typeof(simbolo5));

// let number5 = Float32Array(15.6);            ERROR
// console.log(typeof(number5));
const number5 = new Float32Array(15.6);
console.log(typeof(number5));


const tupla = ("2","4","6","8");
console.log(typeof(tupla));          // ERROR, Toma  el ultimo digito en "8", y devuelve string

const tupla1 = (1,"2",3,"4",5,"6",7,"8",9);
console.log(typeof(tupla1));         // ERROR, Toma  el ultimo digito en 9 y devuelve  number

const lista = [1,2,3,4,5,6,7,8,9]      // Array, lista
console.log(typeof(lista));

// let diccionario = {
//     let numero = 1  // ❌ ERROR: No puedes usar 'let' dentro de un objeto
// }
// console.log(typeof(diccionario));
const diccionario = {
    numero: 1
};
console.log(typeof diccionario);

const ema=1, juan=2, pedro=3;
console.log(typeof(ema));
console.log(typeof(juan));
console.log(typeof(pedro));
