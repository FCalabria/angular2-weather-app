import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../classes/weather';
import * as _ from "lodash";

import './results-block.component.scss';

@Component({
    selector: 'results-block',
    template: require('./results-block.component.html')
})

export class ResultsBlockComponent implements OnInit {
    forecast = new Weather();
    noResult: boolean = true;
    constructor(private weatherService: WeatherService) { }
    ngOnInit() {
        this.setForecast(this.forecast);
        this.weatherService.receivedWeather.subscribe(
            (weather: Weather) => this.setForecast(weather)
        );
    }
    setForecast(forecast: Weather): void {
        this.forecast = forecast;
        this.noResult = this.forecast.getIconFullUrl() === '';
    }
}
