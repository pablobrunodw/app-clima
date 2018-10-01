// #############
// Localización
// #############

const axios = require('axios');


const getCiudad = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let rta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyAFIze2OonMyj3L7KKisgK-iKqss3tI7-o`);

    if (rta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    } else {

    }

    let location = rta.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getCiudad
}