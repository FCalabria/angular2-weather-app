import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";
import {City} from '../classes/city';
@Injectable()
export class CitiesService {
  constructor (private http: Http) {}
  getCities (): Observable<City[]> {
    return this.http.get('http://localhost:3004/cities').map(this.extractData);
  }

  searchSuggestedCities(city: string, fullCitiesList: City[]): City[] {
    city = city.toLowerCase();
    let filtered = _.filter(fullCitiesList, (cityObject) => cityObject.name.toLowerCase().indexOf(city) === 0);
    let outOfWhile = false;
    while (filtered.length < 5 && !outOfWhile) {
      const toPush = _.find(fullCitiesList, (cityObject) => filtered.indexOf(cityObject) === -1 && cityObject.name.toLowerCase().indexOf(city) !== -1);
      toPush !== undefined ? filtered.push(toPush) : outOfWhile = true;
    }
    return _.sortBy(filtered, ['country', 'name']);
  }
  private extractData(res: any) {
    let body = res.json();
    return body || [];
  }
}
