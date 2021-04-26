import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient ) { 

    
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/products/getAll').subscribe(
       (response) => {
        console.log(response);
        },
        (error) => {
        console.log(error);
        },
        () => {
        console.log("complete");
        }
    
    );
  }

}
