import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
//Tarea
//crear un modulo llamado ContadorModule
//declaraciones y exportaciones
import { ContadorModule } from './contador/contador.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';
import { DbzService } from './dbz/services/dbz.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar aqui la tarea
    ContadorModule,
    DbzModule
  ],
  providers: [
    DbzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
