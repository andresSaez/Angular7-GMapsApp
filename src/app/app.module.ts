import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';


// GMPAPS
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

// FORMS
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    ReactiveFormsModule
  ],
  entryComponents: [
    MapaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
