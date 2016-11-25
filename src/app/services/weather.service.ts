import { Injectable }     from '@angular/core';
import { EventEmitter }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';
import {Weather} from '../classes/weather';

@Injectable()
export class WeatherService {
  receivedWeather: EventEmitter<{}> = new EventEmitter();
  constructor(private http: Http) {}


  getWeatherFor(cityId: number) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=metric&lang=es&APPID=71392650d990b77aecff8933a64cde06')
    .map((response) => response.json() || {})
    .subscribe((weather) => this.receivedWeather.emit(weather));
  }
}
