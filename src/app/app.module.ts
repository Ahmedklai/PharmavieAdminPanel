import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './Register/register.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    ProductListComponent,
    HttpComponent,
    ProductComponent,
    RegisterComponent,
    FormUpdateComponent,
    HomeComponent, 
    
  ],
  imports: [
        FormsModule,                               // <========== Add this line!
    ReactiveFormsModule  ,
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
