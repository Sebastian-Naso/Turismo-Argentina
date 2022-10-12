
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');

var locationIcon = document.querySelector('.weather-icon');


fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.6036&lon=-58.38157&appid=50a7aa80fa492fa92e874d23ad061374&units=metric&lang=es')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  
  var iconCode = data.weather[0].icon; 

  console.log(iconCode);
  main.innerHTML = "Buenos Aires";
  desc.innerHTML = descValue;
  temp.innerHTML = "Temp: "+tempValue+"°C";
  document.getElementById('icon').src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
  //document.getElementById('icon').src = "IMG/icons/"+ data.weather[0].icon +".png";
  //document.getElementById('icon').src = "icons/11d.png";
  //document.getElementById('icon').src = "http://openweathermap.org/img/wn/11d@2x.png";
})
