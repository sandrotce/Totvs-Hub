import { RotasprService } from './../rotaspr/rotaspr.service';
import { RotasprModule } from './../rotaspr/rotaspr.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  imports: [
    SharedModule,
    RotasprModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    RotasprService
  ]
})
export class HomeModule { }
