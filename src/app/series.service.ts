import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Series} from './model/series' ;
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  serverURL = "http://localhost/api/";
  constructor(private httpClient:HttpClient) { }

  public getSeries(){
    return this.httpClient.get<Series[]>(this.serverURL+"data");
  }

  
}
