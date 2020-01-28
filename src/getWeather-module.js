async function getWeather(location) {
  let weatherPromise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a988065929a71820ad27ba5b3420d64c`,
    { mode: 'cors' }
  )
  let response = await weatherPromise.json()

  return response
}

export { getWeather }
