async function getWeatherData(location) {
  let weatherPromise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a988065929a71820ad27ba5b3420d64c`,
    { mode: 'cors' }
  )
  return await weatherPromise.json()
}

function makeWeatherObject(weatherJson) {
  return {
    name: weatherJson.name,
    weather: weatherJson.weather[0],
    main: weatherJson.main,
  }
}

export { getWeatherData, makeWeatherObject }
