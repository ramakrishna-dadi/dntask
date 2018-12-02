import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 public url:string = "https://query.yahooapis.com/v1/public/yql";
  constructor(  private http: HttpClient) { }

  getData(city:string): Observable<any>
  {
    var qs = '?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+city+'")&format=json';
    return this.http.get(this.url+qs).pipe();
  }
}
