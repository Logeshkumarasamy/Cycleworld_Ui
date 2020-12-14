import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Feedback } from '../feedback';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

   title="Contact US"
   Feedback : Feedback;
  constructor(private userregister :UserregisterService,private router: Router) { }

  ngOnInit(): void {
    this.Feedback = new Feedback()
  }
  sendData=()=>{
    this.userregister.sendData(this.Feedback).subscribe(()=>{
      Swal.fire('Thank You For Your Valuble Fe!');
    })
  }

}
