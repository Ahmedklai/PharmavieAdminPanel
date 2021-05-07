import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from './form-update/form-update.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../app/auth-guard.service';

const routes: Routes = [
  { path: '', component: RegisterComponent , canActivate : [AuthGuardService] },
  { path: 'login', component: LoginComponent , canActivate : [AuthGuardService]},
  { path: 'home', component: HomeComponent  , canActivate : [AuthGuardService] ,
  children: [
    { path: 'form', component: FormComponent },
    { path: 'productList', component: ProductListComponent ,  },
    { path: 'app-form-update/:id', component: FormUpdateComponent },
 
]},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
