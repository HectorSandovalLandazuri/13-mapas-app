import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [`
    .search-container {
      position:fixed;
      top:20px;
      left:20px;
      width:270px;
      background-color:white;
      padding:5px;
      box-shadow:0px,10px,10px,rgba(0,0,0,0.1);
      border-radius:5px;
      border:1px solid rgba(0,0,0,0.1);
    }
  `
  ]
})
export class SearchBarComponent  {
  private dbounceTimer?:NodeJS.Timeout;

  constructor(private placesService:PlacesService) { }

 onQueryChanged(query:string=''){
  if (this.dbounceTimer) clearTimeout(this.dbounceTimer);
  this.dbounceTimer=setTimeout(()=>{
    this.placesService.getPlacesByQuery(query);
    
  },1000)  
 }
}
