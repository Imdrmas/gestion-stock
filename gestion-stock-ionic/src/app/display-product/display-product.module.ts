import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayProductPageRoutingModule } from './display-product-routing.module';

import { DisplayProductPage } from './display-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayProductPageRoutingModule
  ],
  declarations: [DisplayProductPage]
})
export class DisplayProductPageModule {}
