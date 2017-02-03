const yargs = require('yargs');
const axios = require('axios');
const config = require('./config');
// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
  .help()
  .alias('help', 'h')
  .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(results.address);
//
//     weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
//       if(errorMessage){
//         console.log(errorMessage);
//       } else {
//         console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
//       }
//     });
//   }
// });


let formattedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}`;

axios.get(geocodeUrl)
  .then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address');
    }

    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/${config.darkskyAPIKey}/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then((response) => {
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
  })
  .catch((e) => {
    if(e.code === 'ENOTFOUND'){
      console.log('Unable to connect to API servers.');
    } else {
      console.log(e.message);
    }
});