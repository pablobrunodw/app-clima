// #############
// Clima
// #############

const axios = require('axios');

const getClima = async(lat, lng) => {
    let rtaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e59aed686250aaaa44ea8f337db8b884`);

    let temp = rtaClima.data.main.temp;

    return temp;
}

module.exports = {
    getClima
}