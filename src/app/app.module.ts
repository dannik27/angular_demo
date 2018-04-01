import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MapsListComponent } from './maps-list/maps-list.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    MapsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'map-list',
      component: MapsListComponent
    }, {
      path: 'map',
      component: MapComponent
    }]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
