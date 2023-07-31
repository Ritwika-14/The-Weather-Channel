const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50b6441557mshdb4af1e3e75ccdep17b2e2jsnf325af9b8485',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp 
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
    })
	 .catch(err=> console.error(err));
}

submit.addEventListener("click" , (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Bengaluru")

const getWeather2 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			
			tempm.innerHTML = response.temp
			feelslikem.innerHTML = response.feels_like
			humidm.innerHTML = response.humidity
			minm.innerHTML = response.min_temp
		    maxm.innerHTML = response.max_temp
			windm.innerHTML = response.wind_speed

		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather2("Mumbai")


const getWeather3 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			tempk.innerHTML = response.temp
			feelslikek.innerHTML = response.feels_like
			humidk.innerHTML = response.humidity
			mink.innerHTML = response.min_temp
		    maxk.innerHTML = response.max_temp
			windk.innerHTML = response.wind_speed

		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather3("Kolkata")




const getWeather4 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			tempd.innerHTML = response.temp
			feelsliked.innerHTML = response.feels_like
			humidd.innerHTML = response.humidity
			mind.innerHTML = response.min_temp
		    maxd.innerHTML = response.max_temp
			windd.innerHTML = response.wind_speed

		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather4("Delhi")


const getWeather5 = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			tempc.innerHTML = response.temp
			feelslikec.innerHTML = response.feels_like
			humidc.innerHTML = response.humidity
			minc.innerHTML = response.min_temp
		    maxc.innerHTML = response.max_temp
			windc.innerHTML = response.wind_speed

			})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})


getWeather5("Chennai")