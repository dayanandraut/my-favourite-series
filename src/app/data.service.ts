import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let data=[
      {id:1, title:"Game of Thrones", favouriteCharacter:"Tyrion", recentlywatched:"2019-05-20", rating:"9.5", favouriteDialogue:"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you"},
      {id:2, title:"Prison Break", favouriteCharacter:"Michael", recentlywatched:"2019-05-27", rating:"9.0", favouriteDialogue:"Preparation can only take you so far. After that, you have to take a few leaps of faith" },
      {id:3, title:"Breaking Bad", favouriteCharacter:"Jessie", recentlywatched:"2018-08-21", rating:"9.5",favouriteDialogue:"What good is being an outlaw when you have responsibilities?" }
    ];
    return {data};
  }
}
