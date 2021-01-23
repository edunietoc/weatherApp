

const getIcon = (iconCode: string) => {

    switch (iconCode) {
        //Clear Sky
        case '01d':
            return 'https://img.icons8.com/office/80/000000/sun--v1.png';
        case '01n':
            return 'https://img.icons8.com/office/80/000000/moon.png';

        case '02d':
            return 'https://img.icons8.com/office/80/000000/fog-day--v1.png';
        case '02n':
            return 'https://img.icons8.com/office/80/000000/fog-night.png';

        case '03d':
            return 'https://img.icons8.com/office/80/000000/partly-cloudy-day--v1.png';
        case '03n':
            return 'https://img.icons8.com/office/80/000000/partly-cloudy-night--v1.png';

        case '04d':
            return 'https://img.icons8.com/office/80/000000/clouds.png';
        case '04n':
            return 'https://img.icons8.com/office/80/000000/clouds.png';

        case '09d':
            return 'https://img.icons8.com/office/80/000000/moderate-rain.png';
        case '09n':
            return 'https://img.icons8.com/office/80/000000/moderate-rain.png';

        case '10d':
            return 'https://img.icons8.com/office/80/000000/rain.png';
        case '10n':
            return 'https://img.icons8.com/office/80/000000/rain.png';

        case '11d':
            return 'https://img.icons8.com/office/80/000000/cloud-lighting--v1.png';
        case '11n':
            return 'https://img.icons8.com/office/80/000000/cloud-lighting--v1.png';

        case '13d':
            return 'https://img.icons8.com/office/80/000000/snow-storm.png';
        case '13n':
            return 'https://img.icons8.com/office/80/000000/snow-storm.png';

        case '50d':
            return 'https://img.icons8.com/dusk/64/000000/foggy-night-1.png';
        case '50n':
            return 'https://img.icons8.com/dusk/64/000000/foggy-night-1.png';

        default:
            return 'https://img.icons8.com/office/80/000000/cloud.png';

    }



}

export default getIcon;