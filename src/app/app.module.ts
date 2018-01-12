import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { TilesComponent } from './tiles/tiles.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
