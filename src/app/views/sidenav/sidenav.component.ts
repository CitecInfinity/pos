import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  opened = false;

  constructor() { }

  ngOnInit() {
  }

 

  actionSideNav() { 
    console.log("SIRVE?");
    this.opened =! this.opened
    console.log(this.opened);
    
  }

}
