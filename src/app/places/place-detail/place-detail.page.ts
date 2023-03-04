import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place = {
    id: 0 ,
    title: '',
    imageURL: '',
    comments: []
  };

  constructor(
    private activatedRoute: ActivatedRoute, 
    private placesService:PlacesService, 
    private router: Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const paramId: number = parseInt(paramMap.get('placeId')!);
      this.place = this.placesService.getPlace(paramId);      
    })
  }

 async onRemove(){
   const alertElement = await this.alertController.create({
      header:"Are your sure?",
      message: 'Be careful!!',
      buttons: [
        {text: 'Cancel', role: 'cancel'},
        {text: 'Accept', handler: () => {
          this.placesService.removePlaces(this.place.id);
          this.router.navigate(['/places']);
        }}
      ]
    });
    alertElement.present();
  }

}
