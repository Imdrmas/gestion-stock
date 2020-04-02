import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCommandPage } from './edit-command.page';

const routes: Routes = [
  {
    path: '',
    component: EditCommandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCommandPageRoutingModule {}
