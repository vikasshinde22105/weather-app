import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApixuService } from '../apixu.service';

interface weatherDetails {
  weather: [];
} 

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  public weatherForecastDetails: any;

  constructor(  private route: ActivatedRoute,    private apixuService: ApixuService) {
  
   }
  ngOnInit() {
    const lat: any = this.route.snapshot.queryParamMap.get('lat');
    const lon: any = this.route.snapshot.queryParamMap.get('long');

    this.getWeatherByCityLatLon(lat,lon);

  }

  getWeatherByCityLatLon( lat: any,lon:any){
      this.apixuService
      .getWeatherByCityLatLon(lat,lon)
      .subscribe((data) =>{ this.weatherForecastDetails = data;
        console.log(this.weatherForecastDetails);
        this.weatherForecastDetails.daily = this.weatherForecastDetails.daily.slice(1,6)
      });
      }  
}


