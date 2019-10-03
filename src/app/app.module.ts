import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaComponent } from './vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYBzPuRO3ThXZRgXE5kbKekYYjRHI4exk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
