import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StarRatingModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
