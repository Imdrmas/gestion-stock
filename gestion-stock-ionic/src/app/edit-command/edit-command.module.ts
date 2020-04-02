import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCommandPageRoutingModule } from './edit-command-routing.module';

import { EditCommandPage } from './edit-command.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCommandPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditCommandPage]
})
export class EditCommandPageModule {}
