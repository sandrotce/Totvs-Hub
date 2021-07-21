import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const Rotas : Routes = [
  {path : '', pathMatch : '' , component : LoginComponent},
  {path : 'Login',pathMatch : '' , component : LoginComponent}
]
