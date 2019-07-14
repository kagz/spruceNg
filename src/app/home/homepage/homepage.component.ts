import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 pic= "../../../assets/img/card-1.jpeg"
  constructor() { }

  ngOnInit() {
  }

}
