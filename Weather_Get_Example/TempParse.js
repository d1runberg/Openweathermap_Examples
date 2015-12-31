
var weather = require('openweathermap');

var Boulder = {
   APPID:"274da36717c724c240cb30390af5386c",
   units: 'imperial',
   lang: 'en',
   q: 'Boulder'
}

weather.now(Boulder,function(err,data){
   var temp = data.main.temp;
   var tempMin = data.main.temp_min;
   var tempMax = data.main.temp_max;

   console.log("Temperature(F): " + temp);
   console.log("Maximum Temperature(F): "+ tempMax);
   console.log("Minimum Temperature(F): " + tempMin);
});
