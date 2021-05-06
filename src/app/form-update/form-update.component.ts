import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product-list/product-service.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.scss']
})
export class FormUpdateComponent implements OnInit {

  constructor(
   
    private productService: ProductService ,
    private router: Router ,
    private activatedroute:ActivatedRoute,
  ) { }
  @Input() id : String;
  @Input() product : Product;
  ngOnInit(): void {
    
    this.id=this.activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.getProduct(this.id);
  }
 
  getProduct(id :String): void {
    console.log(id);
    this.productService.getProductsById(id).subscribe(
      (response) => {
        console.log(response);
        this.product = response ;
        console.log(this.product);
      },
      (error) => {
        console.log(error);
      }
    )
   }
  updateProduct(updateFormulaire: NgForm): void {
     let product  = { ...updateFormulaire.value, id: this.id};
 
    this.productService.updateProduct(product).subscribe(
      (response) => {
    
        const link = ['home/productList'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    )
   }

}
