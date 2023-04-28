import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RecentsearchComponent } from './recentsearch/recentsearch.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveAllComponent } from './remove-all/remove-all.component';
import { MaterialModule } from 'src/material/material.module';
import { CommonModule } from '@angular/common';
import { ClearAllComponent } from './clear-all/clear-all.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    HomeComponent,
    HeaderComponent,
    RecentsearchComponent,
    RemoveAllComponent,
    ClearAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
