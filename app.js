const argv = require('./config/yargs').argv;

const ciudad = require('./ciudad/ciudad');
const clima = require('./clima/clima');


// Forma sensilla

let getTiempo = async(direccion) => {
    try {
        let coors = await ciudad.getCiudad(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temp} °C`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}.`;
    }

}

getTiempo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


// Forma rebuscada de anidar código
// ciudad.getCiudad(argv.direccion)
//     .then(rta => {
//         clima.getClima(rta.lat, rta.lng)
//             .then(temp => {
//                 console.log('Ciudad: ', rta.direccion);
//                 console.log(`Temperatura: ${temp} °C`);
//             })
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));