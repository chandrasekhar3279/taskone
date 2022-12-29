import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ErrorcomponentComponent } from "./errorcomponent/errorcomponent.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const appRoute: Routes = [
    {path:'',component:LoginComponent},
    {path:'Login' ,component:LoginComponent},
    {path:'Signup',component:SignupComponent},
    {path:'Dashboard',component:DashboardComponent},
    {path:'**',component:ErrorcomponentComponent}
]
@NgModule({
  imports:[
    RouterModule.forRoot(appRoute) 
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}