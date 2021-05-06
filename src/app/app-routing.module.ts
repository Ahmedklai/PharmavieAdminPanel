import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUpdateComponent } from './form-update/form-update.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Register/register.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },

  { path: 'home', component: HomeComponent  ,
  children: [
    { path: 'form', component: FormComponent },
    { path: 'productList', component: ProductListComponent },
    { path: 'app-form-update/:id', component: FormUpdateComponent },
 
]},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
