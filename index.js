/**
 * https://api.weatherapi.com/v1/current.json?key=bd0715d13e1d4b1c830173812220401&q=rabat

https://adilmarghadi1.github.io/Weather-App/
 * 
 */



var city=document.getElementById("city")
var villa="rabat"

function holla(){
  var search=document.getElementById('city').value

  console.log()
    fetch(`https://api.weatherapi.com/v1/current.json?key=bd0715d13e1d4b1c830173812220401&q=${search}`)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
    console.log(data);
    var ville=document.getElementById("ville")
    var dato=document.getElementById("dato")
    var degree=document.getElementById('degree')
    var vts=document.getElementById('vitesse')
    var pression=document.getElementById('pression')
    var paye=document.getElementById('paye')
    var humidity=document.getElementById('humidity')
    var cloud=document.getElementById('cloud')

    degree.textContent=data.current.temp_c
    ville.textContent=data.location.name
    dato.textContent=data.location.localtime
    vts.textContent=data.current.wind_mph
    pression.textContent=data.current.pressure_in
    paye.textContent=data.location.country
    humidity.textContent=data.current.humidity
    cloud.textContent=data.current.cloud
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

city.addEventListener('keypress',function(e){
  if(e.key=="Enter"){
    holla()
  }
})

