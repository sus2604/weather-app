
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '712594f84emsh4615efdf5908c5dp18436djsnc38e37581201',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

function getWeather (city) {
    cityName.innerText = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        cloud_pct.innerText = response.cloud_pct
        temp.innerText = response.temp
        feels_like.innerText = response.feels_like
        humidity.innerText = response.humidity
        min_temp.innerText = response.min_temp
        max_temp.innerText = response.max_temp
        wind_speed.innerText = response.wind_speed
        sunrise.innerText = response.sunrise
        sunset.innerText = response.sunset
    })

    .catch(err => console.error(err))
}


(
    function () {
        getWeather("Delhi");
        
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
        .then(response => response.json())
        .then((response) => {

            london_cloud_pct.innerText = response.cloud_pct
            london_temp.innerText = response.temp
            london_feels_like.innerText = response.feels_like
            london_humidity.innerText = response.humidity
            london_min_temp.innerText = response.min_temp
            london_max_temp.innerText = response.max_temp
            london_wind_speed.innerText = response.wind_speed
            london_wind_degrees.innerText = response.wind_degrees
            london_sunrise.innerText = response.sunrise
            london_sunset.innerText = response.sunset

        })
        .catch(err => console.error(err))


        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=milan', options)
        .then(response => response.json())
        .then((response) => {

            milan_cloud_pct.innerText = response.cloud_pct
            milan_temp.innerText = response.temp
            milan_feels_like.innerText = response.feels_like
            milan_humidity.innerText = response.humidity
            milan_min_temp.innerText = response.min_temp
            milan_max_temp.innerText = response.max_temp
            milan_wind_speed.innerText = response.wind_speed
            milan_wind_degrees.innerText = response.wind_degrees
            milan_sunrise.innerText = response.sunrise
            milan_sunset.innerText = response.sunset

        })
        .catch(err => console.error(err))


        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
        .then(response => response.json())
        .then((response) => {

            tokyo_cloud_pct.innerText = response.cloud_pct
            tokyo_temp.innerText = response.temp
            tokyo_feels_like.innerText = response.feels_like
            tokyo_humidity.innerText = response.humidity
            tokyo_min_temp.innerText = response.min_temp
            tokyo_max_temp.innerText = response.max_temp
            tokyo_wind_speed.innerText = response.wind_speed
            tokyo_wind_degrees.innerText = response.wind_degrees
            tokyo_sunrise.innerText = response.sunrise
            tokyo_sunset.innerText = response.sunset

        })
        .catch(err => console.error(err))

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=barcelona', options)
        .then(response => response.json())
        .then((response) => {

            barcelona_cloud_pct.innerText = response.cloud_pct
            barcelona_temp.innerText = response.temp
            barcelona_feels_like.innerText = response.feels_like
            barcelona_humidity.innerText = response.humidity
            barcelona_min_temp.innerText = response.min_temp
            barcelona_max_temp.innerText = response.max_temp
            barcelona_wind_speed.innerText = response.wind_speed
            barcelona_wind_degrees.innerText = response.wind_degrees
            barcelona_sunrise.innerText = response.sunrise
            barcelona_sunset.innerText = response.sunset
        })
        .catch(err => console.error(err))
    }
)()


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(input.value);
})

