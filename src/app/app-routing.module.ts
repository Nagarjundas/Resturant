import { SigninComponent } from './signin/signin.component';
import { UpdateComponent } from './update/update.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'add',component: AddComponent},
  {path:'list',component: ListComponent},
  {path:'login',component: LoginComponent},
  {path:'signin',component: SigninComponent},
  {path:'register',component: RegisterComponent},
  {path:'update/:id',component: UpdateComponent},
  
  {path:'',redirectTo: 'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
