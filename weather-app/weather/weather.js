const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/74c3576784395fdc7a7fbbcf2b15de11/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature :body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        windGust: body.currently.windGust
      });
    } else {
      callback('Unable to fetch weather.');
    };

  });
};

module.exports.getWeather = getWeather;
