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
    if(error){
        console.log('Could\'nt connect to network')
    }else if(response.body.error){
        console.log('Unable to find location')
    }
    else{
        console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+" degree out.There is "+response.body.current.precip+"% chance of rain")
        //TERMINAL OUTPUT- Sunny. It is currently 52 degree out.There is 0% chance of rain
    }
    
});
//Geocode
const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FyYWhhc2FuMTciLCJhIjoiY2xlOWk5ODNoMHBxejNwcjF1aDVwNWh6ZiJ9.ipx_k5cXaw8EDME2whP0Hw&limit=1'
request({url:url2, json:true},(error, response)=>{
    if(error){
        console.log('Unable to connect to network')
    }else if(response.body.features.length===0){
        console.log('Unable to find location')
    }else{
        console.log("Latitude: "+response.body.features[0].center[1]+" Longitude: "+response.body.features[0].center[0]) //Latitude: 34.053691 Longitude: -118.242766
    }
})
