//api_link  api.weatherstack.com/current?key=value&name=Sara
//http://api.weatherstack.com/current?access_key=dd63605b76217bf67667058aee08a6ee&query=37.8267,-122.4233

/*UNDERSTANDING ASYCHRONOUS
console.log("Starting")
setTimeout(()=>{
    console.log("2 seconds timer")
},2000)
setTimeout(()=>{
    console.log("0 seconds timer")
},0)*/

const geocode=require('./utils/geolocator')
const forecast=require('./utils/forecast')
const city=process.argv[2]
if(!city){
  console.log("Please provide the city name")
}else{
    geocode(city,(error, {Latitude,Longitude,Location}={})=>{
        if(error){
            return console.log(error)
        }
        forecast(Latitude, Longitude, (error, forcastdata) => {
            if(error){
                return console.log(error)
            }
            console.log(Location)
            console.log(forcastdata)
        })
      })     
}

  


