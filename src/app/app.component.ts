import { Component } from '@angular/core';
import { Place } from './places/place.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  places: Place[] = [];
  
  constructor() {}
}
