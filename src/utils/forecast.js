const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=e1977f18e208f31f5edd64f7f50464a0&query=" +
    lat +
    "," +
    long;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          "°C. It feels like " +
          response.body.current.feelslike +
          "°C. There is a " +
          response.body.current.precip +
          "% chance of rain. The wind speed is " +
          response.body.current.wind_speed +
          " km/h. The humidity is " +
          response.body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
