import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Place } from './place.model';

import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places:Place[] = [];
  constructor(private placesServices: PlacesService, private router: Router) { }

  ngOnInit() {
    this.places = this.placesServices.getPlaces();
  }

  addNav(){
    this.router.navigate(['/new-place']);
  }

}
