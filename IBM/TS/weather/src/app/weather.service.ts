import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  API_KEY="070ad8c75e2bb5f3f6a14de557fe5bdf"
  getWeatherData(cityName:string){
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}`
    return this.http.get(url)
  }
}
