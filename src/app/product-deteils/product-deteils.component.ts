import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-deteils',
  templateUrl: './product-deteils.component.html',
  styleUrls: ['./product-deteils.component.css']
})
export class ProductDeteilsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  UserDAta() {
    window.alert("thank you for addingcard!!");
    this.router.navigate(['home']);


  }

}
