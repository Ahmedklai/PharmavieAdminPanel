import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrdersService } from '../orders-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[];
  selectedOrder : Order;
  name: String;
  p: Number;
  @Input() product: Product;
  constructor(private ordersService: OrdersService) {}
  selectOrder(order:Order){
    this.selectedOrder = order;
  }
  ngOnInit(): void {
    this.ordersService.getPharmacies().subscribe((orders) => {
      console.log(orders);
      this.orders = orders;
    });
  }

  // Search() {
  //   if (this.name == '') {
  //     this.ngOnInit();
  //   } else {
  //     this.orders = this.orders.filter((ord) => {
  //       return ord.name.toLowerCase().match(this.name.toLowerCase());
  //     });
  //   }
  // }

  // goToForm() {
  //   this.productservice.goToForm();
  // }
  // goToUpdate(id) {
  //   this.productservice.goToUpdate(id);
  // }
  // removeproduct(): void {

  //   this.productservice.removeProduct(this.selectedProduct.id).subscribe(
  //     (response) => {
  //       console.log(response);
  //       window.location.reload();
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
