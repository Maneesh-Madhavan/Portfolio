import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router'; // ✅ correct import

import { routes } from './app.routes'; // optional if you have routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),  // ✅ built-in Material animations
    provideRouter(routes) // optional
  ]
};
