import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], texto: string, columna: string ): any[] {
    if (arreglo == null){
      return;
    }
    if ( texto === ' ' || texto === undefined ) {
      return arreglo;
    }

    texto = texto.toString().toLowerCase();

    return arreglo.filter( item => {
      return item[columna].toLowerCase().includes(texto);
    });
  }

}
