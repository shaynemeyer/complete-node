const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1726%2073rd%20ave%20se%20Lake%20Stevens%20wa%2098258',
  json: true
}, (err, response, body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});