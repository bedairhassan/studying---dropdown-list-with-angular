import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public choice:string='mainpage';

  constructor() { }

  ngOnInit() {
  }

  browse(event){

    this.choice = event.target.name
  }
}
