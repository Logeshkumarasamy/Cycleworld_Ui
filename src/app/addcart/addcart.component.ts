import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  name ="LOGESH";
  UserReg: any =[];

  constructor(private UserService :UserregisterService,private router: Router) { }

  ngOnInit(): void {
    this.UserService.getAllUser().subscribe((data)=>{
      this.UserReg=data;
       });
  }
  


  }
