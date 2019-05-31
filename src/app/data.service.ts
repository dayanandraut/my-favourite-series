import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let data=[
      {id:1, title:"Game of Thrones", favouriteCharacter:"Tyrion", recentlywatched:"2019-05-20", rating:"9.5"},
      {id:2, title:"Prison Break", favouriteCharacter:"Michael", recentlywatched:"2019-05-27", rating:"9.0"},
      {id:3, title:"Breaking Bad", favouriteCharacter:"Jessie", recentlywatched:"2018-08-21", rating:"9.5"}
    ];
    return {data};
  }
}
