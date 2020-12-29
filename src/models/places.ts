class PlaceModel {

    latitude:number;
    longitude:number;
    countryCode:string;
    country:string;
    state:string;

    constructor(latitude:number , longitude:number, countryCode:string, country:string, state:string ){
        this.latitude = latitude;
        this.longitude = longitude;
        this.country = country;
        this.countryCode = countryCode;
        this.state = state;
    }

}

export default PlaceModel;