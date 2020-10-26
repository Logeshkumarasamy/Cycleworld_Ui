import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserReg } from '../user-reg';
import { UserregisterService } from '../userregister.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  onSubmit(signup: NgForm) {
    console.log(signup.value);
    signup.reset();
}


  constructor(private userregister :UserregisterService,private router: Router) { }
  UserReg : UserReg;
  ngOnInit(): void {
    this.UserReg = new UserReg();
    // this.userregister.getAllUser().subscribe((data)=>{
    //   this.UserReg = data;
    // });
  }
  createuser =()=>{
    this.userregister.createUser(this.UserReg).subscribe(()=>{
      window.alert('User Created Successfully');
    })
  }




}
