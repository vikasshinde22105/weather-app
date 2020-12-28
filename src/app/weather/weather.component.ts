import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData: any;

  constructor(private apixuService: ApixuService) {
    
    this.getWeatherByCityIds('test');

   }
  ngOnInit() {
   
  }

  sendToAPIXU(formValues: { location: string; }){
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(data => this.weatherData = data)
      console.log(this.weatherData);
    }
  getWeatherByCityIds( location: string){
      this.apixuService
      .getWeatherByCityIds()
      .subscribe((data) =>{ this.weatherData = data;
        this.weatherData = this.weatherData;
        console.log(this.weatherData);
      });
      }  
}


