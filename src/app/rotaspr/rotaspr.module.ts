import { RotasprComponent } from './rotaspr.component';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { RotasprService } from './rotaspr.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RotasprComponent
  ],
  providers: [
    RotasprService
  ]
})
export class RotasprModule { }
