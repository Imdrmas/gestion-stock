import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCommandPage } from './add-command.page';

const routes: Routes = [
  {
    path: '',
    component: AddCommandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCommandPageRoutingModule {}
