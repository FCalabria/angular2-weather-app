import { Component } from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {Weather} from '../classes/weather';
import * as _ from "lodash";

import './results-block.component.scss';

import './results-block.component.scss';

@Component({
    selector: 'results-block',
    template: require('./results-block.component.html')
})

export class ResultsBlockComponent {
    forecast = new Weather();
    iconUrl: string = '';
    noResult: boolean = true;
    constructor() {
        this.noResult = this.forecast.weather[0].icon === '';
        this.iconUrl = this.noResult ? '' : 'http://openweathermap.org/img/w/' + this.forecast.weather[0].icon + '.png';
    }
}
