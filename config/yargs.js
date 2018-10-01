const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad a obtener el clima'
    }
}).argv;

module.exports = {
    argv
}