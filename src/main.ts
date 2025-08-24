import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import { homeOutline, newspaperOutline, cubeOutline,notificationsOutline, exitOutline, 
  locationOutline,rocketOutline } from 'ionicons/icons';

addIcons({
  'home-outline': homeOutline,
  'newspaper-outline': newspaperOutline,
  'cube-outline': cubeOutline,
  'notifications-outline': notificationsOutline,
  'location-outline': locationOutline,
  'exit-outline': exitOutline,
  'rocket-outline': rocketOutline
});



bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

