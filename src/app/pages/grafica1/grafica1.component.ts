import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] = [ 'Pan', 'Gasesosa', 'Platos' ];
  labels2: string[] = [ 'Muebles', 'Lamparas', 'Entretenimiento' ];
  labels3: string[] = [ 'Hogar', 'Almacen', 'Finca' ];
  labels4: string[] = [ 'Alimentacion', 'Ropa', 'Osio' ];
  data1  = [ 350, 450, 100 ];
  data2: number[] = [ 100, 200, 300 ];
  data3: number[] = [ 15, 20, 40 ];
  data4: number[] = [ 70, 12, 300 ];

}
