import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
   private productService: ProductService ,
   private router: Router 
  ) { }

  ngOnInit(): void {
  }

  addProduct(AddFormulaire: NgForm): void {
   this.productService.addProduct(AddFormulaire.value).subscribe(
     (response) => {
       const link = ['productList'];
       this.router.navigate(link);
     },
     (error) => {
       console.log(error);
     }
   )
  }

}
