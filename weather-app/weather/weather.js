const request = require('request');
const config = require('../config');

const getWeather = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/${config.darkskyAPIKey}/${lat},${lng}`;

  request({
    url: url,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;