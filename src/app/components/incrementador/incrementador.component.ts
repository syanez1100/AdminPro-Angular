import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() progreso: number = 10;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  nuevoValor: number = this.progreso;

  cambiarValor( valor: number ){
    if (this.progreso <=0 && valor <0 ) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    if (this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    this.progreso = this.progreso + valor;
    this.nuevoValor = this.progreso;
    this.valorSalida.emit(this.progreso);
    return this.progreso;
  }

  onChange(nuevoValor: number){
    if (nuevoValor <= 0) {
      this.progreso = 0;
    } else if (nuevoValor >= 100) {
      this.progreso = 100
    } else{
      this.progreso = nuevoValor;
    }
    this.nuevoValor = nuevoValor;
    this.valorSalida.emit(this.progreso);
  }

}
