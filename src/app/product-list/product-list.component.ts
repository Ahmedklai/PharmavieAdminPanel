import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProduct : Product;
  name: String;
  p: Number;
  @Input() product: Product;
  constructor(private productservice: ProductService) {}
  selectProduct(product:Product){
    this.selectedProduct = product;
  }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }

  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.products = this.products.filter((product) => {
        return product.name.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }

  goToForm() {
    this.productservice.goToForm();
  }
  goToUpdate(id) {
    this.productservice.goToUpdate(id);
  }
  removeproduct(): void {

    this.productservice.removeProduct(this.selectedProduct.id).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
