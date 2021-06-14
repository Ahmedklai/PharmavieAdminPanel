import { Component, Input, OnInit } from '@angular/core';
import { PharmaciesService } from '../pharmacies.service';
import { Pharmacie } from '../pharmacie';
import { Product } from '../product';


@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.scss'],
})
export class PharmacyListComponent implements OnInit {
  pharmacies: Pharmacie[];
  name: String;
  p: Number;
  @Input() product: Product;
  constructor(private pharmaciesService: PharmaciesService) {}

  ngOnInit(): void {
    this.pharmaciesService.getPharmacies().subscribe((pharmacies) => {
      console.log(pharmacies);
      this.pharmacies = pharmacies;
    });
  }

  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.pharmacies = this.pharmacies.filter((pharmacy) => {
        return pharmacy.nomprenom.toLowerCase().match(this.name.toLowerCase());
      });
    }
  }

  goToForm() {
    this.pharmaciesService.goToForm();
  }
  goToUpdate(id:string) {
    this.pharmaciesService.goToUpdate(id);
  }
  removePharmacy(id: string): void {
    console.log(id);
    this.pharmaciesService.removePharmacy(id).subscribe(
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
