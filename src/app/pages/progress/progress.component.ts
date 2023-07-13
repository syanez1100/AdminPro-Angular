import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ],
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {
  progreso1: number = 15;
  progreso2: number = 60;

  get getPorgreso1(){
    return `${this.progreso1}%`
  }

  get getPorgreso2(){
    return `${this.progreso2}%`
  }

}
