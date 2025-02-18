import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  Feedback: any =[];
  constructor(private UserService :UserregisterService,private router: Router) { }

  ngOnInit(): void {
    this.UserService.getAllnewsletter().subscribe((data)=>{
      this.Feedback=data;
       });
  }

}
