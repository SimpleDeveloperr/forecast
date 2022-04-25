$(document).ready(function(){
	fetch('https://api.openweathermap.org/data/2.5/weather?id=687700&cnt=7&appid=2062827abd1cb58579016594bcd62161')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data);
		document.querySelector('.weather-icon-zaporizhia li').innerHTML = '<img src="https://openweathermap.org/img/wn/'+ data.weather[0]['icon'] +'@4x.png">';
		document.querySelector('.current-temp-zaporizhia').innerHTML = 'Current temperature: ' + Math.round(data.main.temp - 273) + '&deg;C'
		document.querySelector('.precipitation-zaporizhia').textContent = data.weather[0]['main'] + '. ' + data.weather[0]['description'];
		document.querySelector('.city-zaporizhia').textContent = data.name
		document.querySelector('.wind-speed-zaporizhia').innerHTML = 'Wind speed: ' + data.wind.speed + 'm/s'
		document.querySelector('.visibility-zaporizhia').innerHTML = 'Visibility: ' + (data.visibility / 1000) + 'km'
	})
	fetch('https://api.openweathermap.org/data/2.5/weather?id=357994&appid=2062827abd1cb58579016594bcd62161')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		document.querySelector('.weather-icon-london li').innerHTML = '<img src="https://openweathermap.org/img/wn/'+ data.weather[0]['icon'] +'@4x.png">';
		document.querySelector('.current-temp-london').innerHTML = 'Current temperature: ' + Math.round(data.main.temp - 273) + '&deg;C'
		document.querySelector('.precipitation-london').textContent = data.weather[0]['main'] + '. ' + data.weather[0]['description'];
		document.querySelector('.city-london').textContent = data.name
		document.querySelector('.wind-speed-london').innerHTML = 'Wind speed: ' + data.wind.speed + 'm/s'
		document.querySelector('.visibility-london').innerHTML = 'Visibility: ' + (data.visibility / 1000) + 'km'
	})
	fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=2062827abd1cb58579016594bcd62161')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		document.querySelector('.weather-icon-kyiv li').innerHTML = '<img src="https://openweathermap.org/img/wn/'+ data.weather[0]['icon'] +'@4x.png">';
		document.querySelector('.current-temp-kyiv').innerHTML = 'Current temperature: ' + Math.round(data.main.temp - 273) + '&deg;C'
		document.querySelector('.precipitation-kyiv').textContent = data.weather[0]['main'] + '. ' + data.weather[0]['description'];
		document.querySelector('.city-kyiv').textContent = data.name
		document.querySelector('.wind-speed-kyiv').innerHTML = 'Wind speed: ' + data.wind.speed + 'm/s'
		document.querySelector('.visibility-kyiv').innerHTML = 'Visibility: ' + (data.visibility / 1000) + 'km'
	})
	fetch('https://api.openweathermap.org/data/2.5/weather?id=1726701&appid=2062827abd1cb58579016594bcd62161')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		document.querySelector('.weather-icon-barcelona li').innerHTML = '<img src="https://openweathermap.org/img/wn/'+ data.weather[0]['icon'] +'@4x.png">';
		document.querySelector('.current-temp-barcelona').innerHTML = 'Current temperature: ' + Math.round(data.main.temp - 273) + '&deg;C'
		document.querySelector('.precipitation-barcelona').textContent = data.weather[0]['main'] + '. ' + data.weather[0]['description'];
		document.querySelector('.city-barcelona').textContent = data.name
		document.querySelector('.wind-speed-barcelona').innerHTML = 'Wind speed: ' + data.wind.speed + 'm/s'
		document.querySelector('.visibility-barcelona').innerHTML = 'Visibility: ' + (data.visibility / 1000) + 'km'
	})
	.catch(function () {
		//catch any errors
	})
})