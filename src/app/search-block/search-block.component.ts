import { Component } from '@angular/core';
import { City } from '../classes/city';
import { CitiesService } from '../services/cities.service';
import { WeatherService } from '../services/weather.service';
import * as _ from "lodash";

import './search-block.component.scss';
@Component({
	selector: 'search-block',
	template: require('./search-block.component.html'),
	providers: [CitiesService, WeatherService]
})

export class SearchBlockComponent {
	results: City[] = [];
	cityQuery: string = '';
	fullList: City[];
	constructor(private citiesService: CitiesService,
							private weatherService: WeatherService) {
		citiesService.getCities()
			.subscribe(
				(resp: City[]) => this.fullList = resp,
				(error: any) => console.error(error)
			)
	}
	onSubmit():void {
		this.results = this.citiesService.searchSuggestedCities(this.cityQuery, this.fullList);
	}
	selectCity(city: City):void {
		this.weatherService.getWeatherFor(city._id);
	}
}
