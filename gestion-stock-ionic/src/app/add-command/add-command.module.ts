import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCommandPageRoutingModule } from './add-command-routing.module';

import { AddCommandPage } from './add-command.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCommandPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddCommandPage]
})
export class AddCommandPageModule {}
