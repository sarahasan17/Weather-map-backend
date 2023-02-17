//api_link  api.weatherstack.com/current?key=value&name=Sara
//http://api.weatherstack.com/current?access_key=dd63605b76217bf67667058aee08a6ee&query=37.8267,-122.4233

/*UNDERSTANDING ASYCHRONOUS
console.log("Starting")
setTimeout(()=>{
    console.log("2 seconds timer")
},2000)
setTimeout(()=>{
    console.log("0 seconds timer")
},0)

console.log("Stopping")*/

const request=require('request')
const url='http://api.weatherstack.com/current?access_key=dd63605b76217bf67667058aee08a6ee&query=37.8267,-122.4233&units=f'
request({url:url, json:true}, function (error, response) {
    //const data=JSON.parse(response.body) //when we don't set the json to true
    //console.log(data.current.pressure) // Print the error if one occurred
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+" degree out.There is "+response.body.current.precip+"% chance of rain")
    //TERMINAL OUTPUT- Sunny. It is currently 52 degree out.There is 0% chance of rain
});
