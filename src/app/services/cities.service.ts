import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {City} from '../classes/city';
@Injectable()
export class CitiesService {
  constructor (private http: Http) {}
  getCities (): Observable<City[]> {
    return this.http.get('http://localhost:3004/cities').map(this.extractData);
  }
  private extractData(res: any) {
    let body = res.json();
    return body || [];
  }
}
