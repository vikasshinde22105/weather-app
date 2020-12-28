import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApixuService {

  constructor(private http: HttpClient) {}
/* {
// id: berlin, name:2950159
   id: london,gb, name:2643743
   id: spain, name: 2510769
   id: france, name:2288873
   id: norway, name:5004016
// }*/
  getWeather(location: string){
      return this.http.get(
          'http://api.openweathermap.org/data/2.5/group?units=metric&id=2643743,2950159,2510769,2288873,5004016&appid=3d8b309701a13f65b660fa2c64cdc517'
      );
}
getWeatherByCityIds(){
  return this.http.get(
      'http://api.openweathermap.org/data/2.5/group?units=metric&id=2643743,2950159,2510769,2288873,5004016&appid=3d8b309701a13f65b660fa2c64cdc517'
  );
}

getWeatherByCityLatLon(lat:any,lon:any){
  return this.http.get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=3d8b309701a13f65b660fa2c64cdc517`
  );
}

}
