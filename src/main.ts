import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

if (!navigator.geolocation) {
  alert ('Navegador no soporta Geolocalización');
  throw new Error('Navegador no soporta Geolocalización');  
}


mapboxgl.accessToken = 'pk.eyJ1IjoiaW5nc2FuIiwiYSI6ImNremVmZDhhMTM3eGwycHA0bjZvYzBjZ2IifQ.Tybm7UPeE7Wmh43ND9QuaA';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
