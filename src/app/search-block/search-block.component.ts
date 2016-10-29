import {Component} from '@angular/core';
import {City} from '../classes/city';
import {CitiesService} from '../services/cities.service';
import * as _ from "lodash";

@Component({
    selector: 'search-block',
    template: require('./search-block.component.html'),
    providers: [CitiesService]
})

export class SearchBlockComponent {
    results: City[] = [];
    constructor(private citiesService: CitiesService) {
        citiesService.getCities()
        .subscribe(
            (resp: any) => console.debug(resp),
            (error: any) => console.error(error)
        )
    }
}
