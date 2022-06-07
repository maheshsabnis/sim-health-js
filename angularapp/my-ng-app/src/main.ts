import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// IMport a class from a file
// Provided this MUST be Exported
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Bootstrap aka Load the AppModule in browser
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
