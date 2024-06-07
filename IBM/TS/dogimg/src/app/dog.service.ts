import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http:HttpClient) { }
  
  getDog():any{

    // let url="https://dog.ceo/api/breeds/image/random";
    // return this.http.get(url);
    let url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=070ad8c75e2bb5f3f6a14de557fe5bdf";
    return this.http.get(url);
  }

}
