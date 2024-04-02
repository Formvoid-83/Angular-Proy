import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'
import { NB_THEME_OPTIONS, NbThemeOptions } from '@nebular/theme';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()] ,
  //A http client provider is necessary
};
//terp
//another commit