import { Pharmacie } from "./pharmacie";
import { Product } from "./product";

export class Order {
  pharmacie:Pharmacie;
  products:Product[];
  createdAt:string;
  user:{userName:string};
  constructor(pharmacie:Pharmacie,products:Product[], createdAt:string,
    user:{userName:string}){
    this.pharmacie = pharmacie;
    this.products = products;
    this.user = user;
    this.createdAt = createdAt;
  }
}
