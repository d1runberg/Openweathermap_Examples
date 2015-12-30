var weather = require('openweathermap');

weather.defaults({
   APPID:"274da36717c724c240cb30390af5386c",
   units: 'imperial',
   lang: 'en',
   cnt: 2
});

weather.daily({q:"Boulder"},function(err,data){
   console.log(data.list[0].weather);  //demonstration of parsing JSON data objects in javaScript. Data > list > weather object
});
