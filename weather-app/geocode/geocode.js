const request = require('request');

var geocodeAddress = (address, callback) => {
  let formattedAddress = encodeURIComponent(address);


  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}`,
    json: true
  }, (err, response, body) => {
    if(err) {
      callback('Unable to connect to Google Servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback.log('Unable to find that address');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;