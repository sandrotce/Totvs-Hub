import { RotasprComponent } from './../rotaspr/rotaspr.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  {
    path: 'rotaspr',
    children: [
      { path: '', component: RotasprComponent }
      //{ path: 'create', component: SpeakerEditComponent },
      //{ path: 'detail/:id', component: SpeakerDetailComponent },
      //{ path: 'edit/:id', component: SpeakerEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
