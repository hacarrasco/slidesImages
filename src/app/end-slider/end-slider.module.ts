import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndSliderPageRoutingModule } from './end-slider-routing.module';

import { EndSliderPage } from './end-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndSliderPageRoutingModule
  ],
  declarations: [EndSliderPage]
})
export class EndSliderPageModule {}
