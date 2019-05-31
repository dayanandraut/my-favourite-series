import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let data=[
      {id:1, title:"Game of Thrones", favouriteCharacter:"Tyrion Lannister", recentlywatched:"2019-05-20", rating:"9.5", favouriteDialogue:"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you"},
      {id:2, title:"Prison Break", favouriteCharacter:"Michael Scofield", recentlywatched:"2019-05-27", rating:"9.0", favouriteDialogue:"Preparation can only take you so far. After that, you have to take a few leaps of faith" },
      {id:3, title:"Breaking Bad", favouriteCharacter:"Jessie Pinkman", recentlywatched:"2018-08-21", rating:"9.5",favouriteDialogue:"What good is being an outlaw when you have responsibilities?" },
      {id:4, title:"Death Note", favouriteCharacter:"Light Yagami", recentlywatched:"2016-11-01", rating:"8.9",favouriteDialogue:"You can’t ever win if you’re always on the defensive. To win, you have to attack!" },
      {id:5, title:"House of Cards", favouriteCharacter:"Frank Underwood", recentlywatched:"2017-03-18", rating:"8.7",favouriteDialogue:"There are two kinds of pain. The sort of pain that makes you strong, or useless pain. The sort of pain that’s only suffering. I have no patience for useless things" },
    ];
    return {data};
  }
}
