import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styles: [`
    .pointer {
      cursor:pointer;  
    }

    p {
      font-size:12px;
    }
  `
  ]
})
export class SearchResultsComponent  {
  public selectedId:string='';
  constructor(private placesService:PlacesService,
      private MapService:MapService) { }

  get isLoadingPlaces() {
    return this.placesService.isLoadingPlaces;
  }

  get places(){
    return this.placesService.places;
  }

  flyTo(place:Feature){
    this.selectedId=place.id;
    const [lng,lat]=place.center;
    this.MapService.flyTo([lng,lat]);
  }

  getDirections(place:Feature){
    if (!this.placesService.userLocation) throw Error ('No tengo la localización');
    this.placesService.deletePlaces();
    const start=this.placesService.userLocation;
    const end=place.center as [number,number];
    this.MapService.getRouteBetweenPoints(start,end)
  }

  
}
