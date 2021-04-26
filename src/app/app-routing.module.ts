import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'productList', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
