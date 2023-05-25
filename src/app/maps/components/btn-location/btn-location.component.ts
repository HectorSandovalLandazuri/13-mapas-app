import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-location',
  templateUrl: './btn-location.component.html',
  styles: [`
    button {
      position:fixed;
      top:20px;
      right:20px;
    }
  `
  ]
})
export class BtnLocationComponent  {

  constructor(private mapService:MapService,
              private placesService:PlacesService) { }

  goToMyLocation(){
    if (!this.placesService.isUserLocationReady) throw Error('No tengo la ubicación del usuario');
    if (!this.mapService.isMapReady) throw Error('El mapa no está listo');
    this.mapService.flyTo(this.placesService.userLocation!)
  }

  
}
