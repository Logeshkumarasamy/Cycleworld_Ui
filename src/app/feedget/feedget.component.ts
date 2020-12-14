import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-feedget',
  templateUrl: './feedget.component.html',
  styleUrls: ['./feedget.component.css']
})
export class FeedgetComponent implements OnInit {

  feed: any =[];
  constructor(private UserService :UserregisterService,private router: Router) { }

  ngOnInit(): void {

    this.UserService.getAllfeedback().subscribe((data)=>{
      this.feed=data;
       });
  }

}
