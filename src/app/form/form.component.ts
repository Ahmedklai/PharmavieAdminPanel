import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmaciesService } from 'src/pharmacies/pharmacies.service';
import { Pharmacie } from '../pharmacie';
import { ProductService } from '../product-list/product-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router , private pharmaciesService : PharmaciesService) {}
  isPromotion: boolean;
  products: Pharmacie[];

  ngOnInit(): void {
     this.pharmaciesService.getProducts().subscribe((products) => {
      
      this.products = products;
      console.log(this.products);
    });
  }
  
  isBestSelling: boolean = false;
  imageSrc: string = 'https://www.cyclooil.com/images/default_product.png';
 

  addProduct(AddFormulaire: NgForm): void {
    this.productService.addProduct(AddFormulaire.value).subscribe(
      (response) => {
        const link = ['home/productList'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
