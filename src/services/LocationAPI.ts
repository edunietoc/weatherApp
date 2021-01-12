import PlaceModel from '../models/places';


/* https://opencagedata.com/api#forward-resp */

class LocationService {

    latitude:number;
    longitude:number;
    private key:string;

    constructor(){
        this.latitude = 0;
        this.longitude = 0;
        this.key = '0c260cb25ded4991b3d842f2bf578613';
    }


    getLocalCoordinates(options = {}):any {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }


    async getPlacesByName(place:string){

        const API = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=${this.key}`

        const response = await fetch(API);
        const result:Promise<Record<string,unknown>> = await response.json();
        
        const placeList = result['results'].map( element => {    
            const _country:string = element['components']['country'];
            const _countryCode:string = element['components']['country_code']
            const _state:string = element['components']['state']
            const _latitude:number = element['geometry']['lat']
            const _longitude:number = element['geometry']['lng']
            return new PlaceModel(_latitude,_longitude,_countryCode,_country,_state)
        })
        return placeList;
    }

    async getCountryByCoordinates(latitude:number, longitude:number):Promise<any>{
        const API = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${this.key}&no_annotations=1`
        try {
            const response = await fetch(API);
            const result = await response.json();
            const _country:string = result['results'][0]['components']['country'];
            const _countryCode:string = result['results'][0]['components']['country_code']
            const _state:string = result['results'][0]['components']['state']
            const _latitude:number = result['results'][0]['geometry']['lat']
            const _longitude:number = result['results'][0]['geometry']['lng']
            return new PlaceModel(_latitude,_longitude,_countryCode,_country,_state);
        } catch (error) {
            console.error(error)
        }
    }


    async getCurrentLocation (){
        try {
            const {coords} = await this.getLocalCoordinates();
            this.latitude = coords.latitude
            this.longitude = coords.longitude
            return{
                latitude: this.latitude,
                longitude: this.longitude
            }
        } catch (error) {
            console.error(error)
        }
  
    }
}

export default LocationService;