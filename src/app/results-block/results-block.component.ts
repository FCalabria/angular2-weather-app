import { Component } from '@angular/core';
import * as _ from "lodash";

export class Forecast {
    weather: [{
        description: string,
        icon: string
    }];
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
    };
    sys: {
        country: string;
    };
    name: string;
    constructor(data?: Forecast) {
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
        return <Forecast>_.defaultsDeep(data, defaults);
    }
};

@Component({
    selector: 'results-block',
    template: require('./results-block.component.html')
})

export class ResultsBlockComponent {
    forecast = new Forecast();
    iconUrl: string = '';
    noResult: boolean = true;
    constructor() {
        this.noResult = this.forecast.weather[0].icon === '';
        this.iconUrl = this.noResult ? '' : 'http://openweathermap.org/img/w/' + this.forecast.weather[0].icon + '.png';
    }
}
