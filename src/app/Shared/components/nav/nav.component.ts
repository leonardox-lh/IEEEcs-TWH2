import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  constructor(private router:Router) {


  }
  navigateTWH2() {
    this.router.navigate(['thaWeekEnd']);
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

  navigateRegister(){
    this.router.navigate(['register'])
  }
  ngOnInit(): void {
  }
}
