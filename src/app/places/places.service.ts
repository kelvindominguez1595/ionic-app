import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    { id: 1, title: 'Superman Heroe', imageURL: 'https://picsum.photos/100/100', comments: ['Place 1', 'Place 2'] },
    { id: 2, title: 'Batman Heroe', imageURL: 'https://picsum.photos/100/100', comments: ['Place 1', 'Place 2'] },
  ];


  constructor() { }

  getPlace(placeId: number){
    return {
      ...this.places.find(place => place.id === placeId)! // valido que la respuesta siempre llegarra
    }
  }

  getPlaces(){
    return [...this.places];
  }
  
  addPlaces(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length +1
    })
  }

  removePlaces(placeId: number){
    this.places = this.places.filter(place => place.id !== placeId);
  }

}
