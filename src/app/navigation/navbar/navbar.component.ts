import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() title: string;
  constructor() {}

  ngOnInit() {
  }

  menuClick() {

  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
  
}