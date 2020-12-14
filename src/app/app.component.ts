import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserregisterService } from './userregister.service';
import { from } from 'rxjs';
import { Newsletter } from './newsletter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cwms';
  Newsletter: Newsletter;

  constructor(private userregister: UserregisterService, private router: Router) { }
  ngOnInit(): void {
    this.Newsletter = new Newsletter()

  }


  sumbit = () => {
    this.userregister.sumbit(this.Newsletter).subscribe(() => {
      Swal.fire('Successful! Please Login! We Will Contact Soon!!');
      close;
    })
  }

} 
