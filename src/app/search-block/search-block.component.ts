import {Component} from '@angular/core';
import {City} from '../classes/city';
import {CitiesService} from '../services/cities.service';
import * as _ from "lodash";

import './search-block.component.scss';
@Component({
    selector: 'search-block',
    template: require('./search-block.component.html'),
    providers: [CitiesService]
})

export class SearchBlockComponent {
    results: City[] = [];
    enableSearch: boolean = false;
    cityQuery: string = '';
    constructor(private citiesService: CitiesService) {
        citiesService.getCities()
        .subscribe(
            (resp: any) => this.enableSearch = true,
            (error: any) => console.error(error)
        )
    }
    getSuggestedCities(query: string): void {
        console.log(query);
    }
    onSubmit() {
        console.log(this.cityQuery);
    }
}
