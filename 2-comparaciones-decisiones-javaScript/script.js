let note = 100;

// if(note >= 90 && note <=100){
//     console.log(`Excelente`);
// }else if(note >= 75 && note <=89 ){
//     console.log(`Bien`);
// }else if(note >= 60 && note <=74 ){
//     console.log(`sufiente`);
// }else if(note < 0 || note > 100){
//     console.log(`Valor invalido`);
// }else{
//     console.log(`No apruebas`);
// }

if(note < 0 || note > 100){
    console.log(`Valor invalido`);
}else if (note >= 90){
    console.log(`Excelente`);
}else if (note >= 75){
    console.log(`Bien`);
}else if(note >= 60){
    console.log(`sufiente`);
}else{
    console.log(`No apruebas`);
}