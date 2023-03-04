import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [
    { id: 1, title: 'Superman Heroe', imageURL: 'https://picsum.photos/100/100', comments: ['Place 1', 'Place 2'] },
    { id: 2, title: 'Batman Heroe', imageURL: 'https://picsum.photos/100/100', comments: ['Place 1', 'Place 2'] },
  ];

  constructor() { }

  ngOnInit() {
  }

}
