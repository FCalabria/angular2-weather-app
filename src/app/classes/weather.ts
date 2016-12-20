import * as _ from "lodash";
interface IWeatherTemps {
    temp: number;
    temp_max: number;
    temp_min: number;
}

export class Weather {
    name: string;
    sys: { country: string };
    main: IWeatherTemps;
    weather: { description: string, icon: string }[];
    getIconFullUrl: () => string;
    constructor(data?: Weather) {
        const defaults = {
            weather: [{
                description: '',
                icon: ''
            }],
            main: {
                temp: 0,
                temp_min: 0,
                temp_max: 0
            },
            sys: {
                country: ''
            },
            name: '',
            getIconFullUrl() {
                return this.weather[0].icon === ''
                    ? ''
                    : 'http://openweathermap.org/img/w/' + this.weather[0].icon + '.png';
            }
        };
        return <Weather>_.defaultsDeep(data, defaults);
    }
}