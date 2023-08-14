import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
 }

 /* mettre les dates en français
  import { LOCALE_ID } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { registerLocaleData } from '@angular/common';
  import * as fr from '@angular/common/locales/fr';

    rajouter dans le tableau des providers un objet de conf {provide: LOCALE_ID, useValue: 'fr-FR'}

    créer un constructeur pour initialiser registerLocaleData   constructor(){
    registerLocaleData(fr.default)
  }

 
 */