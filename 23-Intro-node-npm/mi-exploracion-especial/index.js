const planetas = require('./planetas');
const cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: "¡Bienvenido al Explorador de Planetas!",
        e: "oo",
        T: "U "
    })
);

planetas.forEach((planeta, i) => {
    console.log(`\n#${i + 1} - ${planeta.nombre}`);
    console.log(`📍 Coordenadas: ${planeta.coordenadas}`);
    console.log(`📝 Descripción: ${planeta.descripcion}`);
    console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
    console.log(`🖼️ Imagn: ${planeta.imagen}`);
});