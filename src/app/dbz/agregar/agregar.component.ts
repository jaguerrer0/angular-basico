import { Personaje } from './../interfaces/dbz.interface';

import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {


  @Input ()
  nuevoPersonaje: Personaje = {
    nombre : '',
    poder: 0
  }

  constructor(private DbzService: DbzService){

  }

  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length ===0){
      return;
    }

    this.DbzService.agregarPersonaje(this.nuevoPersonaje);
    /* this.onNuevoPersonaje.emit(this.nuevoPersonaje); */

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
}
