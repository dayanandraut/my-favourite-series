import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Series} from './model/series' ;
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  serverURL = "http://localhost/api/";
  constructor(private httpClient:HttpClient) { }

  // api to get all Series
  public getSeries(){
    return this.httpClient.get<Series[]>(this.serverURL+"data");
  }

  // api to add new Series
  public createSeries(series:Series){
    return this.httpClient.post(`${this.serverURL + 'data'}`, series);
  }

  // api to delete Series
  public deleteSeries(id:number){
    return  this.httpClient.delete(`${this.serverURL + 'data'}/${id}`)
  }

  // api to get Series by its id
  public getSeriesById(id:number){
    return this.httpClient.get<Series>(`${this.serverURL + 'data'}/${id}`);
  }

  
}
