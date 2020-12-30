class WeatherModel{

    temperature:number;
    humidity:number;
    description:string;

    constructor(temperature:number, humidity:number, description:string){
        this.description = description;
        this.humidity = humidity;
        this.temperature = temperature;
    }

}

export default WeatherModel;