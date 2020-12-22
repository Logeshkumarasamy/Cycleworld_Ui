import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Addproduct } from '../addproduct';
import { UserReg } from '../user-reg';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  UserReg: any =[];
  Addproduct : Addproduct;
  
  constructor(private UserService :UserregisterService,private router: Router) { }
  
  ngOnInit(): void {
    this.Addproduct =new Addproduct();
    
    this.UserService.getAllUser().subscribe((data)=>{
    this.UserReg=data;
     });
  }
  /*deleteUser(user: UserReg): void {
    this.UserService.deleteUser(user)
      .subscribe( data => {
        this.UserReg = this.UserReg.filter(u => u !== user);
      })
  };*/
  deleteItem(User){
    this.UserService.deletePost(User.id)
        .subscribe(response => {
          this.UserReg = this.UserReg.filter(item => item.id !== User.id);
        });
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  add =()=>{
    this.UserService.add(this.Addproduct).subscribe(()=>{
      Swal.fire('Successfully added Product');
      this.router.navigate(['login']);
    })
  }
  update =()=>{
    //this.UserService.createUser(this.UserReg).subscribe(()=>{
      Swal.fire('Successfully Your Data Updated');
      close;
    //})
  }

}
