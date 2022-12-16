import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Capitan America', 'Viuda Negra'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

    /* otra forma de hacer borrado de elementos, solo que en el log "reconstruye el arreglo"
    const heroeBorrado = this.heroes.shift();
    console.log(heroeBorrado); */


    /* Una forma de hacer borrado de elementos */
    /* var indice = this.heroes.indexOf('Thor');
    this.heroes.splice(indice, 1);

    console.log(this.heroes); */
  }

}
