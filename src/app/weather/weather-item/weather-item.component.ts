import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from './weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input('item') weatherItem: WeatherItem;

  constructor() { }

  ngOnInit() {
  }

}
