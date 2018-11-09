import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es-ES', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ismaelramos'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
