import WeatherModel from '../models/weather';

/* https://openweathermap.org/api/one-call-api */

const key = "4e43d1ebb8f58f66eb28571243f0bc00";

const WeatherService = async (latitude:number, longitude:number) =>{
    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${key}`

    const response = await fetch(API);
    const result:Promise<Record<string,unknown>> = await response.json();
    
    const temperature = result['current']['temp']
    const humidity = result['current']['humidity']
    const description = result['current']['weather'][0]['description']


    return new WeatherModel(temperature,humidity,description);
}


export default WeatherService;