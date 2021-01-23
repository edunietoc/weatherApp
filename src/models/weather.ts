class WeatherModel{

    temperature:number;
    humidity:number;
    description:string;
    iconCode:string;

    constructor(temperature:number, humidity:number, description:string, iconCode){
        this.description = description;
        this.humidity = humidity;
        this.temperature = temperature;
        this.iconCode = iconCode;
    }

}

export default WeatherModel;