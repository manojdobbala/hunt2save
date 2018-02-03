import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule } from '@angular/router';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    TilesComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
