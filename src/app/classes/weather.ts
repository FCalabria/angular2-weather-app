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
            name: ''
        };
        return <Weather>_.defaultsDeep(data, defaults);
    }
}