import { Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { AddformComponent } from './component/addform/addform.component';
import { EditformComponent } from './component/editform/editform.component';
import { ViewformComponent } from './component/viewform/viewform.component';
import { DeleteformComponent } from './component/deleteform/deleteform.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  {path:'form', component:FormComponent},
  {path:'addform',component:AddformComponent},
  {path:'editform/:id', component:EditformComponent},
  {path:'viewform/:id', component:ViewformComponent},
  {path:'deleteform/:id', component:DeleteformComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];
