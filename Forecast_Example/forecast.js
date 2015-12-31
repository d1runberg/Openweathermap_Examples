var weather = require('openweathermap');

var Boulder = {
   APPID:"274da36717c724c240cb30390af5386c",
   units: 'imperial',
   lang: 'en',
   cnt: 2,
   q: "Boulder"
}

weather.daily(Boulder,function(err,data){
   console.log(data.list[0].weather);  //demonstration of parsing JSON data objects in javaScript. Data > list > weather object
});
