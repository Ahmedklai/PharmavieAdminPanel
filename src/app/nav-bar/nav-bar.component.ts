import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Register/register.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private RegisterService: RegisterService,
  ) { }
  ngOnInit(): void {
    
  }
  logout () {
  
      
      this.RegisterService.Logout() ;
        

}}
