import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    CardComponent,
    CabeceraComponent,
    MenuComponent
  ],
  exports:[
    CardComponent,
    CabeceraComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
