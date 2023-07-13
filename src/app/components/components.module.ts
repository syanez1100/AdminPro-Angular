import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Librerias externas
import { NgChartsModule } from 'ng2-charts';

// Modulos
import { FormsModule } from "@angular/forms";

// Componentes
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';




@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
