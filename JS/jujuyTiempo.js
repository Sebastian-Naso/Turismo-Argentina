
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');

var locationIcon = document.querySelector('.weather-icon');

/*Buenos Aires*/
//fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.613152&lon=-58.377232&appid=50a7aa80fa492fa92e874d23ad061374&units=metric&lang=es')

//NEUQUEN
//fetch('https://api.openweathermap.org/data/2.5/weather?lat=-38.951611&lon=-68.059097&appid=50a7aa80fa492fa92e874d23ad061374&units=metric&lang=es')
/*Salta*/
fetch('https://api.openweathermap.org/data/2.5/weather?lat=-24.194559&lon=-65.297119&appid=50a7aa80fa492fa92e874d23ad061374&units=metric&lang=es')

.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  
  var iconCode = data.weather[0].icon; 

  console.log(iconCode);
  main.innerHTML = "Jujuy";
  desc.innerHTML = descValue;
  temp.innerHTML = "Temp: "+tempValue+"°C";
  document.getElementById('icon').src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
})
