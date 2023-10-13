import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndSliderPage } from './end-slider.page';

const routes: Routes = [
  {
    path: '',
    component: EndSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndSliderPageRoutingModule {}
