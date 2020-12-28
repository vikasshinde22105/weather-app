import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDetails: any;
  constructor() { }

  ngOnInit(): void {
  }
  isRainy(weather:string){
    return weather=='Rain' ? true : false;
  }

  isCloudy(weather:string){
    return weather=='Clouds' ? true : false;
  }

  isClear(weather:string){
    return weather=='Clear' ? true : false;
  }

  isWindy(weather:string){
    return weather=='Rain' ? true : false;
  }

}
