import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Weather } from '../classes/weather';

@Injectable()
export class WeatherService {
  @Output() receivedWeather = new EventEmitter(true);
  constructor(private http: Http) { }

  getWeatherFor(cityId: number) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=metric&lang=es&APPID=71392650d990b77aecff8933a64cde06')
      .map((response) => response.json() || {})
      .subscribe((weather: any) => this.receivedWeather.emit(new Weather(weather)));
  }
}
