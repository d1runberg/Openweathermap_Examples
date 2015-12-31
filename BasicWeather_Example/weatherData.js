var weather = require('openweathermap');

 var Boulder = {
     APPID:"274da36717c724c240cb30390af5386c",
     units: 'imperial',
     lang: 'en',
     q:"Boulder"
}

weather.now(Boulder,function(err,data){
   console.log(data);
});
