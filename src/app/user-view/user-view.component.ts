import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(private router:Router) { }
  amount: number = 5000;

  ngOnInit(): void {
  }
  Logout() {
    localStorage.removeItem('userToken');
    window.alert("You have successfully logged out!");
    this.router.navigate(['/login']);
  }

}
