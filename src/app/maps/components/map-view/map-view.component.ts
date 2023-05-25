import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map,Popup,Marker} from 'mapbox-gl';
import { MapService } from '../../services';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [`
    .map-container {
      position: fixed;
      top:0px;
      right:0px;
      width:100vw;
      height:100vh;
    }
  `
  ]
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapdiv') mapDivElement!:ElementRef

  constructor(private placesService:PlacesService,
              private mapService:MapService) { }

  ngAfterViewInit(): void {
    if (!this.placesService.userLocation) throw Error('No tengo la ubicación');
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });

    const popup=new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar</span>
      `);

    new Marker({color:'red'})
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)  
      .addTo(map);

    this.mapService.setMap(map);  
    
  }

}
