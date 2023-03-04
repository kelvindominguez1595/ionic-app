import { Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  constructor(
    private placesServices: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  savePlace(title: IonInput, imageURL: IonInput){
    this.placesServices.addPlaces(title.value!.toString(), imageURL.value!.toString());
    this.router.navigate(['/places']);
    
  }

}
