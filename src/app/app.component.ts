import {Component} from '@angular/core';
import {WeatherService} from './services/weather.service';

import './app.component.scss';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    providers: [WeatherService]
})

export class AppComponent {}
