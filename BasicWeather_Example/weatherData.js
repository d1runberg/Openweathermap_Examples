var weather = require('openweathermap');

weather.defaults({
   APPID:"274da36717c724c240cb30390af5386c",
   units: 'imperial',
   lang: 'en',
});

weather.now({q:"Boulder"},function(err,data){
   console.log(data);
});
