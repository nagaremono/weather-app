import '@babel/polyfill'
import { getWeatherData, makeWeatherObject } from './getWeather-module.js'

const weatherAppController = (function() {
  async function displayWeather() {
    const location = document.querySelector('input').value
    document.querySelector('input').value = ''

    let weatherData = await getWeatherData(location)

    let weatherObject = makeWeatherObject(weatherData)
    console.log(weatherObject)

    document.querySelector('.cityname').textContent = weatherObject.name
    document.querySelector('.weather').textContent =
      weatherObject.weather.main + ':' + weatherObject.weather.description
    document.querySelector('.temp').textContent = weatherObject.main.temp + 'F'
    document.querySelector('.feelslike').textContent =
      weatherObject.main.feels_like + 'F'
    document.querySelector('.maxtemp').textContent =
      weatherObject.main.temp_max + 'F'
    document.querySelector('.mintemp').textContent =
      weatherObject.main.temp_min + 'F'
    document.querySelector('.pressure').textContent =
      weatherObject.main.pressure
    document.querySelector('.humidity').textContent =
      weatherObject.main.humidity
  }

  return {
    displayWeather,
  }
})()

;(function() {
  const getWeatherButton = document.querySelector('button')

  getWeatherButton.addEventListener(
    'click',
    weatherAppController.displayWeather
  )
})()
