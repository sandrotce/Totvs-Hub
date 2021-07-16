import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TenantComponent } from './tenant/tenant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TenantComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
