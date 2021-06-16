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
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddPharmacyComponent } from './add-pharmacy/add-pharmacy.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { UpdatePharmacyComponent } from './update-pharmacy/update-pharmacy.component';
import { PercentPipe } from './percent.pipe';
import { PercentModule } from './percent.module';
import { PharmaciesService } from './pharmacies.service';
import { OrdersListComponent } from './orders-list/orders-list.component';


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
    LoginComponent,

      AddPharmacyComponent,
      PharmacyListComponent,

      UpdatePharmacyComponent,
      OrdersListComponent
   ],
  imports: [
    PercentModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),                               // <========== Add this line!
    ReactiveFormsModule  ,
    BrowserModule,
    AppRoutingModule,

    HttpClientModule ,
    Ng2SearchPipeModule ,
    NgxPaginationModule

  ],
  providers: [AuthGuardService , PharmaciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
