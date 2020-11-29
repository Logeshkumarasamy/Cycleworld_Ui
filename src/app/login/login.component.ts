import { Component, OnInit } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { UserReg } from '../user-reg';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onSubmit(signup: NgForm) {
    console.log(signup.value);

  }
  UserReg = new UserReg();

  constructor(private UserService: UserregisterService, private route: Router) { }

  ngOnInit(): void {

  }

  /*loginUser() {
    this.UserService.loginUserRemote(this.UserReg).subscribe(
      data => {
        console.log("responce Recived"),

        this.route.navigate(['Dashboard']);
      },
      error =>console.log('error')
    )
  }*/
  loginUser() {

    if ((this.UserReg.gmailId == "admin@gmail.com") && (this.UserReg.passworld == "12345")) {
      this.route.navigate(['Dashboard']);
    }
    else if ((this.UserReg.gmailId != null) && (this.UserReg.passworld != null)){
      this.UserService.loginUserRemote(this.UserReg).subscribe(
        data => {
          console.log("responce Recived"),

            this.route.navigate(['UserView']);
        },
        error => console.log('error')
      )

    }
    else {
      window.alert('incorrect username or password');
    }

  }
  


}
