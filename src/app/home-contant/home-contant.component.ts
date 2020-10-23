import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contant',
  templateUrl: './home-contant.component.html',
  styleUrls: ['./home-contant.component.css']
})
export class HomeContantComponent implements OnInit {
   title="home";
  constructor() { }

  ngOnInit(): void {
  }

}
